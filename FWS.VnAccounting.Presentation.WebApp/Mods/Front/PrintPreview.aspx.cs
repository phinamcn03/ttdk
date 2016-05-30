using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Text;
using ServiceREF.CoreService;
using FWS.Framework.Log;


namespace PMSA.iMarkets.Presentation.WebApp.Mods.Grid
{
    public partial class PrintPreview : System.Web.UI.Page
    {
        protected override void OnInit(EventArgs e)
        {
            base.OnInit(e);
        }
        protected void Page_Load(object sender, EventArgs e)
        {
            string expdata = "";
            try
            {
                if (Page.Request.Form["data"] != null)
                {
                    expdata = Page.Request.Form["data"].ToString();
                    if (expdata != "")
                    {
                        string filetype = "xls";
                        if (Page.Request.Form["filetype"] != null && Page.Request.Form["filetype"].ToString() != "")
                            filetype = Page.Request.Form["filetype"].ToString();
                        string fileName = "excel_export_" + DateTime.Now.ToString("yyyy-MM-dd hh:mm:ss") + "." + filetype;

                        Page.Response.ContentType = "text/plain";
                        Page.Response.ClearHeaders();
                        Page.Response.ClearContent();
                        Page.Response.Clear();
                        if (filetype == "csv")
                            Page.Response.ContentType = "application/ms-excel";// "text/csv";
                        else if (filetype == "xls")
                            Page.Response.ContentType = "application/vnd.ms-excel";
                        Page.Response.ContentEncoding = Encoding.UTF8;
                        Page.Response.Charset = "UTF-8";
                        Page.Response.AddHeader("Content-Disposition", String.Format("attachment;filename=\"{0}\";inline Filename=\"{0}\";", fileName));

                        //Them cac byte thieu trong du lieu de danh dau encoding la UTF-8
                        var bBOM = new byte[] { 0xEF, 0xBB, 0xBF };
                        //var bBOM = new byte[] { 254, 255 };
                        
                        Page.Response.OutputStream.Write(bBOM, 0, bBOM.Length);

                        Page.Response.Write(expdata);
                        Page.Response.Flush();
                        Page.Response.SuppressContent = true;
                        HttpContext.Current.ApplicationInstance.CompleteRequest();
                        //Page.Response.End();
                    }
                }
                else if (Page.Request.QueryString["request"] != null)
                {
                    string request = Page.Request.QueryString["request"].ToString();
                    string fileName = "excel_export_" + DateTime.Now.ToString("yyyy-MM-dd hh:mm:ss") + ".csv";
                    CoreService core = new CoreService();
                    core.Timeout = 360 * 1000 * 60;
                    CLogManager.WritePL("ExportExcel", "Begin call data");
                    string csv = core.GetContextData(System.Configuration.ConfigurationManager.AppSettings["FWS.VnAccounting.ClientKey"].ToString(), request);
                    CLogManager.WritePL("ExportExcel", "End call data");
                    csv = csv.Substring(csv.IndexOf("\n###\n") + 5);
                    Page.Response.ContentType = "application/ms-excel";// "text/csv";

                    Page.Response.ContentEncoding = Encoding.UTF8;
                    Page.Response.Charset = "UTF-8";
                    Page.Response.AddHeader("Content-Disposition", String.Format("attachment;filename=\"{0}\";inline Filename=\"{0}\";", fileName));

                    //Them cac byte thieu trong du lieu de danh dau encoding la UTF-8
                    var bBOM = new byte[] { 0xEF, 0xBB, 0xBF };
                    //var bBOM = new byte[] { 254, 255 };
                    Page.Response.OutputStream.Write(bBOM, 0, bBOM.Length);
                    CLogManager.WritePL("ExportExcel", "Begin write response");
                    Page.Response.Write(csv);
                    CLogManager.WritePL("ExportExcel", "End write response");
                    Page.Response.Flush();
                    Page.Response.SuppressContent = true;
                    HttpContext.Current.ApplicationInstance.CompleteRequest();
                    //Page.Response.End();
                }
                //else
                //{
                //    Page.Response.ContentType = "text/plain";
                //    Page.Response.Write("page request is invalid!!!");
                //    Page.Response.End();
                //}
            }
            catch (Exception ex)
            {
                CLogManager.WritePL("ExportExcel", ex.ToString());
                Page.Response.ContentType = "text/plain";
                Page.Response.Write(ex.Message);
                //Page.Response.Write(ex.ToString());
                //Page.Response.Write(ex.StackTrace);

            }
        }
    }
}