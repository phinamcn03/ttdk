using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using PMSA.Framework.Utils;
using FWS.Framework.Log;

namespace FWS.VnAccounting.Presentation.WebApp.Mods.Report
{
    /// <summary>
    /// Summary description for ReportHandler
    /// </summary>
    public class ReportHandler : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            try
            {
                context.Response.ContentType = "text/plain";
                string instantid = "";
                if (context.Request["instantid"] != null)
                    instantid = context.Request["instantid"].ToString();

                string file = context.Server.MapPath("Js/Mods.Report.Filter.js");
                string fileContent = CFile.Read(file);
                fileContent = fileContent.Replace("[INSTANT]", instantid);
                context.Response.Write(fileContent);
                context.Response.Flush();
            }
            catch (Exception ex)
            {
                CLogManager.WritePL("ReportHandler", ex.ToString());

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