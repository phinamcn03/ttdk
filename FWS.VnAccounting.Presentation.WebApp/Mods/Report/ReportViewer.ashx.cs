using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

using System.IO;
using FWS.Framework.Log;
using ServiceREF.CReportService;
using FWS.VnAccounting.Presentation.WebApp.Mods.Core;
using System.Xml;
using System.Web.SessionState;

namespace FWS.VnAccounting.Presentation.WebApp.Mods.Report
{
    public class ReportViewer : IHttpHandler, IRequiresSessionState
    {

        public void ProcessRequest(HttpContext context)
        {
            HttpResponse response = context.Response;
            HttpRequest request = context.Request;

            try
            {
                string exportTo = "pdf",
                       requestFrom = "0",
                       inputValue = "<InputValue ReportID=\"1\" UserID=\"1\"/>",
                       filedlid = "",
                       rsid = "";
                int languageid = 129;

                CSession session = new CSession();
                try
                {
                    if (request.Form["ExportTo"] != null)
                        exportTo = request.Form["ExportTo"].ToString();
                    else if (request.QueryString["ExportTo"] != null)
                        exportTo = HttpUtility.HtmlDecode(request.QueryString["ExportTo"].ToString());

                    if (request.Form["InputValue"] != null)
                        inputValue = request.Form["InputValue"].ToString();
                    else if (request.QueryString["InputValue"] != null)
                        inputValue = HttpUtility.UrlDecode(request.QueryString["InputValue"].ToString());

                    if (request.QueryString["filedlid"] != null)
                        filedlid = request.QueryString["filedlid"].ToString();
                    if (request.QueryString["rsid"] != null)
                        rsid = request.QueryString["rsid"].ToString();

                    HttpContext.Current.Session.Timeout = 1 * 60 * 6;
                    //download file excel
                    if (filedlid != "")
                    {
                        if (filedlid == session.Session && HttpContext.Current.Session[session.Session + rsid] != null)
                        {
                            ExcelResponse excl = (ExcelResponse)HttpContext.Current.Session[session.Session + rsid];
                            string fileName = excl.Name + excl.Session + "." + excl.ExportType;
                            response.ClearHeaders();
                            response.ClearContent();
                            response.ContentType = excl.ExportName;
                            response.Charset = "";
                            response.AddHeader("Content-Disposition", String.Format("attachment;filename=\"{0}\";inline Filename=\"{0}\";", fileName));
                            response.BinaryWrite(excl.Content);
                            HttpContext.Current.Session[session.Session + rsid] = null;
                        }
                        else
                        {
                            string messageInfo = "Report session expired or export file has download. Please run new export again.";
                            response.ClearHeaders();
                            response.ClearContent();
                            response.ContentType = "text/html";
                            response.AddHeader("Content-Length", messageInfo.Length.ToString());
                            response.Charset = "";
                            response.Write(messageInfo);
                        }
                        return;
                    }

                    try
                    {
                        XmlDocument doc = new XmlDocument();
                        doc.LoadXml(inputValue);
                        XmlAttribute xmlUser = doc.CreateAttribute("UserID");
                        xmlUser.Value = session.UserID.ToString();
                        doc.DocumentElement.SetAttributeNode(xmlUser);
                        XmlAttribute xmlSession = doc.CreateAttribute("Session");
                        xmlSession.Value = session.Session;
                        doc.DocumentElement.SetAttributeNode(xmlSession);

                        inputValue = doc.OuterXml;

                        XmlElement node = (XmlElement)doc.SelectSingleNode("/InputValue");
                        languageid = int.Parse(node.Attributes["LanguageID"].Value);
                        requestFrom = node.Attributes["RequestFrom"].Value;
                    }
                    catch (Exception ex)
                    {
                        string s = ex.Message;
                    }
                }
                catch (Exception ex)
                {
                    CLogManager.WritePL("CReportViewerUI.Request", ex.Message);
                }

                CReportService rfs = new CReportService();
                CReport item = null;
                byte[] jsBytes = null;
                //Set time out call service
                rfs.Timeout = 1000 * 60 * 15;
                item = rfs.GetReport(session.UserID, session.Session, languageid, inputValue, exportTo);

                if (item != null && item.Content != null && item.Content.Length > 0)
                {
                    if (item.ExportType != null)
                        exportTo = item.ExportType;

                    response.ClearHeaders();
                    response.ClearContent();
                    response.ContentType = item.ExportName;
                    response.Charset = "";        
                    response.AddHeader("Content-Disposition", String.Format("filename=\"{0}\";inline Filename=\"{0}\";", HttpUtility.UrlEncode(item.Name.Replace(',', ' ') + session.Session + "." + item.ExportType))); //Parse out the file name in path here 

                    int ContentLength = item.Content.Length;
                    //Add js to html: resize window, show image for browsers
                    if (exportTo.ToLower() == "html")
                    {
                        string js = CReportServiceUI.GetHtmlFunction(requestFrom);
                        jsBytes = new byte[js.Length];
                        System.Text.Encoding.ASCII.GetBytes(js.ToCharArray(), 0, js.Length, jsBytes, 0);
                        ContentLength += jsBytes.Length;
                        response.AddHeader("Content-Length", ContentLength.ToString());

                        //write js include header
                        response.OutputStream.Write(jsBytes, 0, jsBytes.Length);
                        response.Flush();
                    }
                    else if (exportTo.ToLower() == "xls" || exportTo.ToLower() == "xlsx")
                    {
                        //write text description when file download is excel
                        ExcelResponse excelResponse = new ExcelResponse(item);
                        HttpContext.Current.Session[session.Session + item.Session] = excelResponse;
                        //write html file: export done and link download
                        if (response.StatusCode == 200)
                        {
                            response.ClearHeaders();
                            response.ClearContent();
                            response.ContentType = "text/html";
                            response.AddHeader("Content-Disposition", "inline Filename=\"" + session.Session + ".htm\";");
                            response.Charset = "";
                            //response.AddHeader("Content-Length", ContentLength.ToString());
                            string _link = "ReportViewer.ashx?filedlid=" + session.Session + "&rsid=" + item.Session;
                            response.Write("Export to EXCEL done..., <a href=\"" + _link + "\" target=\"_blank\">download</a>.");
                        }
                        return;
                    }
                    else
                        response.AddHeader("Content-Length", ContentLength.ToString());

                    //load data block 10MB
                    int count = 1024 * 1024 * 1;
                    if (ContentLength < count)
                        response.BinaryWrite(item.Content);
                    else
                    {
                        Stream s = new MemoryStream(item.Content);
                        byte[] buffer = new byte[count];
                        while (ContentLength > 0 && response.IsClientConnected)
                        {
                            int lengthRead = s.Read(buffer, 0, count);
                            response.OutputStream.Write(buffer, 0, lengthRead);
                            response.Flush();
                            ContentLength -= lengthRead;
                        }
                    }                    
                    
                    //write image to web server
                    if (exportTo.ToLower() == "html" && item.ListReportImage.Length > 0)
                    {
                        for (int i = 0; i < item.ListReportImage.Length; i++)
                        {
                            CReportImage image = item.ListReportImage[i];
                            CReportServiceUI.SaveFile(image.Content, "", image.FileName);
                        }
                    }
                }
                else
                {
                    response.ContentType = "text/plain";
                    response.Write(item.Description);
                }
            }
            catch (Exception ex)
            {
                response.ClearHeaders();
                response.ClearContent();
                response.Charset = "";
                response.ContentType = "text/plain";
                response.Write("99. Export error exception:: " + ex.Message + "\n" + ex.ToString());
                CLogManager.WritePL("CReportViewerUI.GetReportDataById", ex.Message);
            }
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }

    class ExcelResponse
    {
        public byte[] Content;
        public string ExportType;
        public string ExportName;
        public string Name;
        public string Session;

        public ExcelResponse()
        {

        }
        public ExcelResponse(CReport item)
        {
            this.Content = item.Content;
            this.ExportName = item.ExportName;
            this.ExportType = item.ExportType;
            this.Name = item.Name;
            this.Session = item.Session;
        }
    }
}