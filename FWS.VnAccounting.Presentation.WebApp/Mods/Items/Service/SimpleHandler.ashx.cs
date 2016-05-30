using System.Web;
using PMSA.Framework.Utils;

namespace FWS.VnAccounting.Presentation.WebApp.Mods.Items.Service
{
    /// <summary>
    /// Summary description for SimpleHandler
    /// </summary>
    public class SimpleHandler : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "text/plain";
            string instantid = "";
            if (context.Request["instant"] != null)
                instantid = context.Request["instant"].ToString();
            string entry = instantid.EndsWith("Entry") ? "Entry" : "";
            string file = context.Server.MapPath(string.Format("../Js/Mods.Items.Simple{0}.js", entry));
            string fileContent = CFile.Read(file);
            fileContent = fileContent.Replace("[INSTANT]", instantid);
            context.Response.Write(fileContent);
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