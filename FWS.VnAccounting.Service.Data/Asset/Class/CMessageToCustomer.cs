using System;
using System.Collections.Generic;
using System.Web;
using System.IO;
using FWS.VnAccounting.Service.Data.Utils;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Core;
using FWS.VnAccounting.Service.Data.WebServiceReference;
using FWS.VnAccounting.Service.Data.WebServiceReference.Soap;
using FWS.Framework.Utils;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Asset;
using System.Configuration;
using PMSA.Framework.Utils.Zip;

namespace FWS.VnAccounting.Service.Data.Asset.Class
{
    public class CMessageToCustomer
    {
        const string TEMPLATE_GUICONGAN = "EmailTemplate_GuiCongAn.txt";
        const string TEMPLATE_GUIKHACHHANG = "EmailTemplate_GuiKhachHang.txt";
        const string TEMPLATE_GUIPHANHOI_CAPNHAT = "EmailTemplate_PhanHoiCapNhat.txt";
        const string TEMPLATE_GUIPHANHOI_TUCHOI = "EmailTemplate_PhanHoiTuChoi.txt";
        const string TEMPLATE_GUIKHACHHANG_TBPHI = "EmailTemplate_GuiKhachHang_TBPhi.txt";
        const string TEMPLATE_GUIKHACHHANG_GCN = "EmailTemplate_GuiGCNKhachHang.txt";
        const string TEMPLATE_GUIHANOI_TBHUY = "EmailTemplate_GuiHaNoi_TBHuy.txt";
        const string TEMPLATE_GUIKHACHHANG_TBNHACNO = "EmailTemplate_GuiHaNoi_TBNhacNo.txt";
        #region Private Methods
        /// <summary>
        /// Lay file Report de gui email
        /// Dua theo RefType 
        /// 22: TBGT
        /// 28: Phan hoi
        /// </summary>
        /// <param name="inputValue"></param>
        /// <returns></returns>
        private byte[] GetReportPdf(string inputValue)
        {
            string localInputValue = "<Root>" + inputValue + "</Root>";
            int UserID = 0;
            int.TryParse(CXML.GetXmlNodeValue(localInputValue, "Root/InputValue/@UserID"), out UserID);
            string Session = CXML.GetXmlNodeValue(localInputValue, "Root/InputValue/Session");
            CReport report = CServiceReference.ServiceReport.GetReport(UserID, Session, 0, inputValue, "PDF");


            if (report.Content == null || report.Content.Length == 0) throw new Exception("Lỗi xuất báo cáo: " + report.Description);
            return report.Content;
            //return null;
        }

        private List<CTransactions> GetAllAvailableTBGTPdf(string clientKey, string inputValue)
        {
            //lay ra danh sach TBGT đã có
            //Tách danh sách này ra 10 TBGT cho 1 file để gửi trong 1 email

            string authenticateInput = CXML.Query(inputValue, "/InputValue");
            string regisTransRefID = CXML.GetXmlNodeValue(inputValue, "/RequestParams/@ID");

            //Lay danh sach
            string getTBGTList = "<RequestParams Function=\"GetTransaction_Asset\" RefType=\"22\" RegisTransRefID=\"{0}\"/>";
            getTBGTList = string.Format(getTBGTList, regisTransRefID);

            string actionResult = new FWS.VnAccounting.Service.Data.Core.Class.CCoreService().GetContextData(clientKey, getTBGTList);
            List<CTransactions> transactions = CDataParser.FromCSV<CTransactions>(actionResult, 1);

            if (transactions == null) return null;
            for (int i = transactions.Count -1; i >=0; i--)
            {
                if (transactions[i].Level != 0 && transactions[i].Level != 1)
                {
                    transactions.Remove(transactions[i]);
                }
            }

            foreach (var trans in transactions)
            {
                string reportContext = trans.Level == 0 ? "SPLIT" : "COMBINE";
                string reportInputValue = string.Format("<RequestParams ID=\"{0}\" Context=\"{3}\" RefNo=\"{1}\" RegisTransRefNo=\"{2}\" ViewerID=\"13\" IncludeSign=\"1\"/>", trans.ID, trans.RefNo, trans.RegisTransRefNo, reportContext);
                byte[] reportContent = GetReportPdf(reportInputValue);
                trans.ReportContent = reportContent;
            }

            return transactions;
        }

        private CApplicationMessage SendReportViaEmail(string inputValue,byte[] pdfFile,string otherAttachName,byte[] otherAttachContent)
        {
            
            // gui mail cho KH, CA
            // lay thong tin email tu input
            // lay thong tin noi dung mail
            // lay thong tin noi dung 
            // lay file pdf export
            // gui mail voi file pdf attach

            string email = "";
            string subject = "";
            string body = "";
            string attacthFileName = "";
            byte[] attacthFileContent = null;

            email = CXML.GetXmlNodeValue(inputValue, "RequestParams/@Email");
           CApplicationMessage message = new CApplicationMessage();
            try
            {
                string fileContent = GetEmailTemplate(inputValue);

                GetEmailContentFromTemplate(fileContent,out subject,out body);

                attacthFileName = "ThongBao.pdf";
                attacthFileContent = pdfFile;// GetReportPdf(inputValue);
                if (attacthFileContent == null && otherAttachContent != null)
                {
                    attacthFileName = otherAttachName;
                    attacthFileContent = otherAttachContent;
                    otherAttachName = "";
                    otherAttachContent = null;
                }
                string sendResult = CServiceReference.Callcenter.SendMail(email, "", "", subject, body, attacthFileName, attacthFileContent, otherAttachName, otherAttachContent, "", null);
                if (sendResult.StartsWith("00"))
                {
                    message.Result = 1;
                    message.Description = sendResult;
                }
                else
                {
                    message.Description = sendResult;
                }
                return message;
            }
            catch (Exception ex)
            {
                message.Description = ex.Message;
                message.Result = null;
                return message;
            }
        }

        private string ReadFileContent(string filepath)
        {
            if (File.Exists(filepath))
            {
                return File.ReadAllText(filepath);
            }
            return "";
        }

        /// <summary>
        /// Tach Subject va Body tu noi dung file
        /// Dong dau tien la Subject
        /// Tu dong thu 2 tro di la Body
        /// </summary>
        /// <param name="fileContent"></param>
        /// <param name="subject"></param>
        /// <param name="body"></param>
        private void GetEmailContentFromTemplate(string fileContent,out string subject,out string body)
        {
            // Phan cach dong co the la \n\r hoac \r\n
            subject = "";
            body = "";
            if (!string.IsNullOrEmpty(fileContent))
            {
                // Neu phan cach dong bang \n\r
                if (fileContent.Contains("\n"))
                {
                    subject = fileContent.Substring(0, fileContent.IndexOf("\n"));
                    body = fileContent.Substring(fileContent.IndexOf("\n") + 1);
                }
                if (subject.EndsWith("\r")) subject = subject.Substring(0, subject.Length - 1);
                if (body.StartsWith("\r")) body = body.Substring(1, body.Length - 1);
                //else if (fileContent.Contains("\r\n"))
                //{
                //    subject = fileContent.Substring(0, fileContent.IndexOf("\r\n"));
                //    body = fileContent.Substring(fileContent.IndexOf("\r\n") + 2);
                //}
            }
        }

        /// <summary>
        /// Doc tu file EmailTemplate_....txt
        /// </summary>
        /// <param name="inputValue"><ReqestParams Email="abc@domain.com" Context="CONGAN|KHACHHANG|PHANHOI_CAPNHAT|PHANHOI_TUCHOI" /></param>
        /// <returns></returns>
        private string GetEmailTemplate(string inputValue)
        {
            string fileTemplate = HttpContext.Current.Server.MapPath("..") + "\\Asset\\Class\\";
            string Context = "";
            //string localInputValue = "<Root>" + inputValue + "</Root>";
            Context = CXML.GetXmlNodeValue(inputValue, "RequestParams/@Context");
            switch (Context)
            {
                case "CONGAN": fileTemplate += TEMPLATE_GUICONGAN; break;
                case "KHACHHANG": fileTemplate += TEMPLATE_GUIKHACHHANG; break;
                case "PHANHOI_CAPNHAT": fileTemplate += TEMPLATE_GUIPHANHOI_CAPNHAT; break;
                case "PHANHOI_TUCHOI": fileTemplate += TEMPLATE_GUIPHANHOI_TUCHOI; break;
                case "THONGBAO_PHI": fileTemplate += TEMPLATE_GUIKHACHHANG_TBPHI; break;
                case "KHACHHANG_GCN": fileTemplate += TEMPLATE_GUIKHACHHANG_GCN; break;
                case "HANOI_TBHUY": fileTemplate += TEMPLATE_GUIHANOI_TBHUY; break;
                case "KHACHANG_HUYTBGT": fileTemplate += TEMPLATE_GUIKHACHHANG_GCN; break;
                case "KHACHANG_TBNHACNO": fileTemplate += TEMPLATE_GUIKHACHHANG_TBNHACNO; break;
            }
            return ReadFileContent(fileTemplate);
        }

        private List<byte[]> ZipFiels(List<CTransactions> transactions)
        {
            if (transactions == null || transactions.Count == 0) return null;
            //Luu cac file vao file tam roi zip
            //luu file
            string tempfile = ConfigurationManager.AppSettings["FWS.VnAccounting.TempFolder"];
            if (string.IsNullOrEmpty(tempfile)) tempfile = "";
            tempfile = Path.Combine(tempfile, DateTime.Now.ToString("YYMMDDHHmmssff"));
            if (!Directory.Exists(tempfile)) Directory.CreateDirectory(tempfile);
            //Luu file vao temp
            foreach (var tran in transactions)
            {
                if (tran.ReportContent != null)
                {
                    File.WriteAllBytes(Path.Combine(tempfile, tran.RefNo.Replace("/","") + ".pdf"), tran.ReportContent);
                }
            }
            //Lay danh sach file da luu
            DirectoryInfo directoryInfo = new DirectoryInfo(tempfile);
            FileSystemInfo[] filesInfos = directoryInfo.GetFileSystemInfos("*.pdf");

            CSharpZip zip = new CSharpZip();
            List<byte[]> zipList = new List<byte[]>();
            for (int i = 0; i < filesInfos.Length; i += 10)
            {
                string tempZipFile = tempfile + "\\TBGT" + i.ToString();
                List<FileSystemInfo> listfileInfos = new List<FileSystemInfo>();
                for (int j = i; j < i + 10; j ++)
                {
                    if (j < filesInfos.Length)
                    {

                        listfileInfos.Add(filesInfos[j]);
                    }
                }
                zip.DoZipFile(tempZipFile, listfileInfos.ToArray(), "");
                byte[] zipBytes = File.ReadAllBytes(tempZipFile);
                zipList.Add(zipBytes);
                //Delete Zipfile
                File.Delete(tempZipFile);
            }

            //Delete all temp file
            GC.Collect();
            GC.WaitForPendingFinalizers();
            Directory.Delete(tempfile,true);

            return zipList;
        }
        #endregion Private methods


        #region Public methods
        public CApplicationMessage UpdateAndSendReport(string ClientKey, string inputValue)
        {
            
            inputValue = CXML.HtmlDecode(inputValue);
            // B1. Update Ngay thang nhan xuong db
            // B2. Lay file Pdf report
            // B3. Gui Email
            // B4. Update trang thai gui email
            //
            /*
             <InputValue UserID="1" />
             <RequestParams Action="" ReceiveResponseDateTime="" ObjectID="" ObjectEmail=""  WarranterEmail="" />
             <RequestParams Context="" RegisTransRefNo="" ViewID="" ViewerID="" RefNo="" ObjectID=""/>
             * */
            // Update ngay thang xuong db
            string localInputValue = inputValue;

            localInputValue = CXML.Query(inputValue, "InputValue,RequestParams[1]");
            string actionResult = new Core.CoreService().ExecuteAction(ClientKey, localInputValue);
            string Action = CXML.GetXmlNodeValue(localInputValue, "RequestParams/@Action");
            bool isSendCSGT = false;
            string booleanStr = CXML.GetXmlNodeValue(localInputValue, "RequestParams/@IsSendCSGT");
            bool.TryParse(booleanStr, out isSendCSGT);
            booleanStr = CXML.GetXmlNodeValue(localInputValue, "RequestParams/@IsSendKH");
            bool isSendKH = false;
            bool.TryParse(booleanStr, out isSendKH);

            // Lay file pdf

            string reportInputValue = CXML.Query(inputValue, "InputValue,RequestParams[2]");
            byte[] reportContent = null;// GetReportPdf(reportInputValue);
            string reportContext = CXML.GetXmlNodeValue(reportInputValue,"RequestParams/@Context");
            string regisTransRefNo = CXML.GetXmlNodeValue(reportInputValue, "RequestParams/@RegisTransRefNo");
            string viewerID = CXML.GetXmlNodeValue(reportInputValue, "RequestParams/@ViewerID");
            //string booleanStr= CXML.GetXmlNodeValue(reportInputValue, "RequestParams/@IsSendCSGT");
            
            // gui email
            //localInputValue = CXML.Query(inputValue, "InputValue,RequestParams[1]");
            
            string CAEmail = "",KHEmail ="";
            CApplicationMessage sendResult = null;
            int countSuccessCA=0, countFailCA=0, countSuccessKH=0, countFailKH=0;
            if (Action.ToUpper() == "UPDATE_REQUEST")
            {
                // Truong hop in rieng thi gui moi don mot email
                // - Goi ham Init de tao ra TBGT: Function= Transaction_TBGT_CreateData
                // - Goi ham lay list TBGT '<InputValue UserID="14" /><RequestParams RefType="22" Level="0" RegisTransRefNo="1153900217"/>'
                // - Xuat 

                // Goi ham tao Report
                reportInputValue = CXML.AddXmlAttribute(reportInputValue, "RequestParams", "Function", "Transaction_TBGT_CreateData");
                actionResult = new FWS.VnAccounting.Service.Data.Core.Class.CCoreService().ExecuteAction(ClientKey, reportInputValue);
                CApplicationMessage mess = CDataParser.FromCSV<CApplicationMessage>(actionResult,0)[0];

                if (!mess.IsSuccessfull)
                {
                    return mess;
                }

                //Goi ham lay danh sach report can gui email
                int level = 0;
                if (reportContext.ToUpper() == "COMBINE") level = 1;
                string getReportlistInput=CXML.Query(inputValue, "InputValue");
                getReportlistInput += string.Format("<RequestParams Function=\"GetTransaction_Asset\" RefType=\"22\" Level=\"{0}\" RegisTransRefNo=\"{1}\"/>", level, regisTransRefNo);
                actionResult = new FWS.VnAccounting.Service.Data.Core.Class.CCoreService().GetContextData(ClientKey, getReportlistInput);
                List<CTransactions> transactions = CDataParser.FromCSV<CTransactions>(actionResult,1);
                if (transactions == null || transactions.Count == 0)
                {
                    return new CApplicationMessage() {Description="Không có dữ liệu để gửi" };
                }
                for (int i = 0; i < transactions.Count; i++)
                {
                    //Xuat bao cao pdf
                    reportInputValue = CXML.Query(inputValue, "InputValue");
                    reportInputValue += string.Format("<RequestParams ID=\"{0}\" Context=\"{4}\" RefNo=\"{1}\" RegisTransRefNo=\"{2}\" ViewerID=\"{3}\" IncludeSign=\"1\"/>", transactions[i].ID, transactions[i].RefNo, transactions[i].RegisTransRefNo, viewerID, reportContext);
                    reportContent = GetReportPdf(reportInputValue);


                    //duyet qua tung bao cao de xuat bao cao va chay du lieu
                    CAEmail = CXML.GetXmlNodeValue(localInputValue, "RequestParams/@ObjectEmail");
                    if (!string.IsNullOrEmpty(CAEmail) && isSendCSGT)
                    {
                        string sendmainInput = string.Format("<RequestParams Email=\"{0}\" Context=\"{1}\" />", CAEmail, "CONGAN");
                        sendResult = SendReportViaEmail(sendmainInput, reportContent,"",null);

                        // neu gui mail cho CA thanh cong thi moi gui toi KH
                        if (sendResult.IsSuccessfull)
                        {
                            countSuccessCA++;
                        }
                        else
                        {
                            countFailCA++;
                        }
                    }
                    //Bo chuc nang gui email den KH
                    KHEmail = CXML.GetXmlNodeValue(localInputValue, "RequestParams/@WarranterEmail");
                    if (!string.IsNullOrEmpty(KHEmail) && isSendKH)
                    {

                        string sendmainInput = string.Format("<RequestParams Email=\"{0}\" Context=\"{1}\" />", KHEmail, "KHACHHANG");
                        sendResult = SendReportViaEmail(sendmainInput, reportContent,"",null);
                        if (sendResult.IsSuccessfull)
                        {
                            countSuccessKH++;
                        }
                        else
                        {
                            countFailKH++;
                        }
                    }
                    //Neu gui thanh cong va co gui den CSGT thi cap nhat lai email
                    if (isSendCSGT && countSuccessCA > 0)
                    {
                        getReportlistInput = CXML.Query(inputValue, "InputValue");
                        getReportlistInput += string.Format("<RequestParams Function=\"Transaction_Asset\" Action=\"UPDATE_REQUEST\" RefType=\"22\" ID=\"{0}\" RefNo=\"{1}\" RegisTransRefNo=\"{2}\"/>", transactions[i].ID, transactions[i].RefNo, transactions[i].RegisTransRefNo);
                        actionResult = new FWS.VnAccounting.Service.Data.Core.Class.CCoreService().ExecuteAction(ClientKey, getReportlistInput);
                        // gui email thanh cong thi update lai thoi gian gui mail
                    }
                }

            }
            else if (Action.ToUpper() == "UPDATE_RESPONSE")
            {
                reportInputValue = CXML.AddXmlAttribute(reportInputValue, "RequestParams", "IncludeSign", "1");
                reportContent = GetReportPdf(reportInputValue);

                KHEmail = CXML.GetXmlNodeValue(localInputValue, "RequestParams/@WarranterEmail");
                string ResponseStatus = CXML.GetXmlNodeValue(localInputValue, "RequestParams/@ResponseStatus");
                if (ResponseStatus == "0" )
                {
                    localInputValue = string.Format("<RequestParams Email=\"{0}\" Context=\"{1}\" />", KHEmail, "PHANHOI_CAPNHAT");
                    sendResult = SendReportViaEmail(localInputValue, reportContent,"",null);
                    if (sendResult.IsSuccessfull)
                    {
                        countSuccessKH++;

                    }
                    else
                    {
                        countFailKH++;
                    }
                }
                else if (ResponseStatus == "1")
                {
                    localInputValue = string.Format("<RequestParams Email=\"{0}\" Context=\"{1}\" />", KHEmail, "PHANHOI_TUCHOI");
                    sendResult = SendReportViaEmail(localInputValue, reportContent,"",null);
                    if (sendResult.IsSuccessfull)
                    {
                        countSuccessKH++;

                    }
                    else
                    {
                        countFailKH++;
                    }
                }
            }
            else if (Action == "UPDATE_SENDTHONGBAOPHI")
            {
                reportInputValue = CXML.AddXmlAttribute(reportInputValue, "RequestParams", "IncludeSign", "1");
                reportContent = GetReportPdf(reportInputValue);

                KHEmail = CXML.GetXmlNodeValue(localInputValue, "RequestParams/@Email");
                
                localInputValue = string.Format("<RequestParams Email=\"{0}\" Context=\"{1}\" />", KHEmail, "THONGBAO_PHI");
                sendResult = SendReportViaEmail(localInputValue, reportContent,"",null);
                if (sendResult.IsSuccessfull)
                {
                    countSuccessKH++;

                }
                else
                {
                    countFailKH++;
                }
                
            }

            string message = "";
            if (countSuccessCA > 0) message += string.Format("Gửi thành công {0} email tới {1}\n",countSuccessCA,CAEmail);
            if (countFailCA > 0) message += string.Format("{0} email tới {1} bị lỗi\n", countFailCA, CAEmail);
            if (countSuccessKH > 0) message += string.Format("Gửi thành công {0} email tới {1}\n", countSuccessKH, KHEmail);
            if (countFailKH > 0) message += string.Format("{0} email tới {1} bị lỗi\n", countFailKH, KHEmail);
            if (message.EndsWith("\n")) message = message.Remove(message.Length - 1);
            // update ket qua gui email xuong db
            //localInputValue = localInputValue = CXML.Query(inputValue, "InputValue");
            //if (sendResult.IsSuccessfull)
            //{

            //}
            //new Core.CoreService().ExecuteAction(ClientKey, localInputValue);

            //return string.Format("Code;Name;Description;Result\n{0};{1};{2};{3}","OK",message,message,1);
            return new CApplicationMessage() { Result = 1, Name = message, Description = message, Code = "OK" };

            //return CApplicationMessage.ToCSV<CApplicationMessage>(
            //return new CApplicationMessage() { Result = 1, Name = "OK", Description = "Success", Code = "OK" };
        }

        public CApplicationMessage SendGCN(string ClientKey, string inputValue)
        {
            try
            {
                inputValue = CXML.HtmlDecode(inputValue);
                string attachmentFileName = CXML.GetXmlNodeValue(inputValue, "RequestParams/@FileNumber");
                string refno = CXML.GetXmlNodeValue(inputValue, "RequestParams/@RefNo");
                string authenticateInput = CXML.Query(inputValue, "/InputValue");
                //Lay noi dung file attach
                //byte[] attachmentContent = null;
                byte[] reportContent = null;
                CApplicationMessage sendResult = null;

                string KHEmail = CXML.GetXmlNodeValue(inputValue, "RequestParams/@Email");
                string localInputValue = string.Format("<RequestParams Email=\"{0}\" Context=\"{1}\" />", KHEmail, "KHACHHANG_GCN");

                if (!string.IsNullOrEmpty(refno))
                {
                    FileInfo attachInfo = new FileInfo(Path.Combine(ConfigurationManager.AppSettings["FWS.VnAccounting.AttachmentFolder"], refno + ".pdf"));
                    if (attachInfo.Exists)
                    {
                        try
                        {
                            reportContent = File.ReadAllBytes(attachInfo.FullName);
                            sendResult = SendReportViaEmail(localInputValue, reportContent, "", null);
                        }
                        catch (Exception ex)
                        {
                            return new CApplicationMessage() { Result = 0, Name = ex.Message, Description = ex.Message, Code = "ERROR" };
                        }
                    }
                    else //Neu file khong ton tai thì tự xuất từ report
                    {
                        sendResult = ExportAndSendGCN_TBGT(ClientKey, inputValue);
                        //return new CApplicationMessage() { Result = 0, Name = "Không tìm thấy file " + attachmentFileName, Description = "Không tìm thấy file " + attachmentFileName, Code = "ERROR" };
                    }
                }
                else
                {
                    sendResult = ExportAndSendGCN_TBGT(ClientKey, inputValue);
                }
                /*
                //Lay TBGT
                List<CTransactions> transactions = GetAllAvailableTBGTPdf(ClientKey, inputValue);

                //Zip file
                List<byte[]> zipList = ZipFiels(transactions);

                //attachmentFileName danh cho file scan yeu cau, nhung chua duoc duyet nen chuyen qua cho tbgt
                if (zipList != null && zipList.Count > 0)
                {
                    attachmentFileName = "TBGT.zip";
                    attachmentContent = zipList[0];
                }
                else
                {
                    attachmentFileName = "";
                    attachmentContent = null;
                }
                CApplicationMessage sendResult = SendReportViaEmail(localInputValue, reportContent, attachmentFileName, attachmentContent);
                //neu gui thanh cong thi gui tiep cac tbgt khac (neu co nhieu hon 10 tbgt)
                if (sendResult.IsSuccessfull)
                {
                    if (zipList != null && zipList.Count >= 1)
                    {
                        for (int i = 1; i < zipList.Count; i++)
                        {
                            attachmentFileName = "TBGT.zip";
                            attachmentContent = zipList[i];
                            CApplicationMessage result = SendReportViaEmail(localInputValue, null, attachmentFileName, attachmentContent);
                        }
                        
                    }
                }
                */
                if (sendResult.IsSuccessfull)
                {
                    //Neu send thanh cong thi luu thoi gian gui lai
                    localInputValue = "<RequestParams RefType=\"21\" Context=\"TOOL\" Function=\"Transaction_Asset\" Action=\"UpdateGCNEmail\" ID=\"{0}\" SoDonNhan=\"{1}\" SendGCNEmail=\"{2}\" SendGCNDateTime=\"{3}\"/>";
                    string transID = CXML.GetXmlNodeValue(inputValue, "RequestParams/@ID");
                    string number = CXML.GetXmlNodeValue(inputValue, "RequestParams/@SoNhanDon");
                    localInputValue = authenticateInput + string.Format(localInputValue, transID, number, KHEmail, DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss"));
                    string result = new FWS.VnAccounting.Service.Data.Core.Class.CCoreService().ExecuteAction(ClientKey, localInputValue);
                    //List<CApplicationMessage> mess = CDataParser.FromCSV<CApplicationMessage>(result, 1);
                    //if (mess != null && mess.Count > 0) return mess[0];
                    //return null;
                }

                return sendResult;
            }
            catch (Exception ex)
            {
                return new CApplicationMessage() { Result = 0, Name = ex.Message, Description = ex.Message, Code = "ERROR" };
            }
        }

       private CApplicationMessage ExportAndSendGCN_TBGT(string ClientKey, string inputValue)
        {
            byte[] attachmentContent = null;
            string attachmentFileName = "";
            byte[] reportContent = GetReportPdf(inputValue);
            //Lay TBGT
            List<CTransactions> transactions = GetAllAvailableTBGTPdf(ClientKey, inputValue);

            //Zip file
            List<byte[]> zipList = ZipFiels(transactions);


            string KHEmail = CXML.GetXmlNodeValue(inputValue, "RequestParams/@Email");

            string localInputValue = string.Format("<RequestParams Email=\"{0}\" Context=\"{1}\" />", KHEmail, "KHACHHANG_GCN");


            //attachmentFileName danh cho file scan yeu cau, nhung chua duoc duyet nen chuyen qua cho tbgt
            if (zipList != null && zipList.Count > 0)
            {
                attachmentFileName = "TBGT.zip";
                attachmentContent = zipList[0];
            }
            else
            {
                attachmentFileName = "";
                attachmentContent = null;
            }
            CApplicationMessage sendResult = SendReportViaEmail(localInputValue, reportContent, attachmentFileName, attachmentContent);
            //neu gui thanh cong thi gui tiep cac tbgt khac (neu co nhieu hon 10 tbgt)
            if (sendResult.IsSuccessfull)
            {
                if (zipList != null && zipList.Count >= 1)
                {
                    for (int i = 1; i < zipList.Count; i++)
                    {
                        attachmentFileName = "TBGT.zip";
                        attachmentContent = zipList[i];
                        CApplicationMessage result = SendReportViaEmail(localInputValue, null, attachmentFileName, attachmentContent);
                    }

                }
            }
            return sendResult;
        }

       public CApplicationMessage SendReport(string ClientKey,string inputValue)
        {
            try
            {
                inputValue = CXML.HtmlDecode(inputValue);
                byte[] reportContent = GetReportPdf(inputValue);
                CApplicationMessage message =  SendReportViaEmail(inputValue, reportContent,"",null);
                return message;
            }
            catch(Exception ex)
            {
                return new CApplicationMessage() { Result = 0, Name = ex.Message, Description = ex.Message, Code = "ERROR" };
            }
        }
        
        #endregion Public methods
    }
}