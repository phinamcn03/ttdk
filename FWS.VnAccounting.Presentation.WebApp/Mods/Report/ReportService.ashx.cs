using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.SessionState;
using System.Xml;
using FWS.Framework.Log;
using ServiceREF.CReportService;
using System.IO;
using FWS.VnAccounting.Presentation.WebApp.Mods.Core;

namespace FWS.VnAccounting.Presentation.WebApp.Mods.Report
{
    public class ReportService : IHttpHandler, IReadOnlySessionState
    {

        public void ProcessRequest(HttpContext context)
        {
            HttpResponse response = context.Response;
            HttpRequest request = context.Request;

            try
            {
                string session = "", exportTo = "pdf", inputValue = "<InputValue ReportID=\"1\" UserID=\"1\"/>";
                int userid = 1, languageid = 129;
                string requestFrom = "0";
                CSession ses = new CSession();
                try
                {
                    if (request.QueryString["ExportTo"] != null)
                        exportTo = request.QueryString["ExportTo"].ToString();
                    if (request.QueryString["InputValue"] != null)
                        inputValue = request.QueryString["InputValue"].ToString();

                    userid = ses.UserID;
                    session = ses.Session;
                    try
                    {
                        XmlDocument doc = new XmlDocument();
                        doc.LoadXml(inputValue);
                        XmlAttribute xmlUser = doc.CreateAttribute("UserID");
                        xmlUser.Value = userid.ToString();
                        doc.DocumentElement.SetAttributeNode(xmlUser);
                        XmlAttribute xmlSession = doc.CreateAttribute("Session");
                        xmlSession.Value = session;
                        doc.DocumentElement.SetAttributeNode(xmlSession);

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
                item = rfs.GetReport(userid, session, languageid, inputValue, exportTo);

                if (item != null && item.Content != null && item.Content.Length > 0)
                {
                    response.ClearHeaders();
                    response.ClearContent();
                    response.ContentType = item.ExportName;
                    response.Charset = "";
                    response.AddHeader("Content-Disposition", "inline Filename=" + item.Name.Replace(',', ' ') + session + "." + item.ExportType + ";"); //Parse out the file name in path here 

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
                    else
                        response.AddHeader("Content-Length", ContentLength.ToString());

                    //load data block 10MB
                    int count = 1024 * 1024 * 10;
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
                response.Write("99. Report not found, please check again!!!");
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
}