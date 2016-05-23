using System;
using System.Collections.Generic;
using System.Web;
using FWS.Framework.Report;
using FWS.Framework.Log;
using FWS.VnAccounting.DataLayer.DataObjects.Report;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Report;
using System.Net.Sockets;
using System.IO;
using FWS.Framework.Utils;

namespace FWS.VnAccounting.Service.Report
{ 
    public class CReportUI
    {
        public static CReport GetReport(int pUserID, string pSession, int pLanguageID, string xmlData, string pExportType)
        {
            CReport report = null;
            try
            {
                CReportDao face = new CReportDao();
                CReportList rpl = face.InitReport(xmlData);

                if (!string.IsNullOrEmpty(rpl.OutputFormat))
                {
                    pExportType = rpl.OutputFormat;
                }

                CLogManager.WritePL("GetReport", xmlData);
                if (CReportConfig.UseWinservice == "1")
                {
                    report = new CReport(rpl.Name, rpl.Description, rpl.ReportFileName);
                    //report = new CReport();
                    CReport itemTemp = GetReportFromWinService(rpl, pExportType);
                    report.Content = itemTemp.Content;

                    report.Description = itemTemp.Description;
                    report.ExportName = itemTemp.ExportName;
                    report.ExportType = itemTemp.ExportType;
                    return report;
                }
                

               CReport _report = new CReport(rpl.Name, rpl.Description, rpl.ReportFileName, pExportType);
                report = _report.GetReportContent(rpl.UserID, rpl.Session, pLanguageID,rpl.ID);
            }
            catch (Exception ex)
            {
                report = new CReport();
                report.Description = "09 - Read file report error Or Report error. Please check report preview and conntact admin!" + ex.ToString();
                CLogManager.WritePL("CReportUI Ex", "09 - Read file report error Or Report error. Please check report preview and conntact admin!");
            }
            return report;
        }

        public static CReport GetReportFromWinService(CReportList rpl, string exportType)
        {
            CReport rpt = new CReport(rpl.Name,rpl.ReportHeaderTitle,rpl.ReportFileName,exportType);
            try
            {
                //SINGLE_REPORT|UserID|Session|LanguageID|ExportType|ReportFileName
                //string reportListBase64 = CBinaryUtils.BinaryToBase64(CBinaryUtils.SerializeObject(rpl));

                string comand = string.Format("SINGLE_REPORT|{0}|{1}|{2}|{3}|{4}", rpl.UserID, rpl.Session.ToString(), rpl.LanguageID, exportType, rpl.ReportFileName);

                string serverIP = CReportConfig.WinServiceServer.Split(':')[0];
                int serverPort = 20000;
                if (CReportConfig.WinServiceServer.Split(':').Length > 1)
                    int.TryParse(CReportConfig.WinServiceServer.Split(':')[1],out serverPort);

                TcpClient client = new TcpClient(serverIP, serverPort);
                Stream s = client.GetStream();

                StreamWriter sw = new StreamWriter(s);
                StreamReader sr = new StreamReader(s);
                sw.AutoFlush = true;

                sw.WriteLine(comand);
                string result = sr.ReadLine();//000-OK
                Write("", rpl.Session.ToString(), rpl.UserID, "==STEP1==: Start Protocol :" + result + ",UserName:" + "");
                result = sr.ReadLine();//000-Begin Send
                Write("", rpl.Session.ToString(), rpl.UserID, "==STEP2==: Begin Receive :" + result + ",UserName:" + "");

                if (result.StartsWith("000-"))
                {
                    result = sr.ReadLine();
                    Write("", rpl.Session.ToString(), rpl.UserID, "==STEP2==: Receive Content :" + result.Substring(0, 100) + ",UserName:" + "");
                    byte[] buffer = CBinaryUtils.Base64ToBinary(result);
                    rpt.Content = buffer;
                    rpt.Description = "Success";
                }
                else
                {
                    result = sr.ReadLine();
                    rpt.Description = result;
                }
               
                s.Close();

                rpt.ExportName = "application/pdf";
                return rpt;
            }
            catch (Exception ex)
            {
                rpt = new CReport() { Description = ex.Message };
                Write("", rpl.Session.ToString(), rpl.UserID, "==STEP2==: Error Receive :" + ex.Message + ",UserName:" + "");
            }
            return rpt;
        }
        
        private static void Write(string userName, string session, int userId, string value)
        {
            CLogManager.WritePL("ReportExportDocument", value);
        }

    }
}