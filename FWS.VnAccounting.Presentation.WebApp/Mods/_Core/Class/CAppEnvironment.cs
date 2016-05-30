using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;

using System.Text;
using System.Configuration;
namespace FWS.VnAccounting.Presentation.WebApp.Mods.Core
{
    public class CAppEnvironment
    {
        public static void RegisterServerConfig(Page page)
        {
            CSession session = new CSession();
            CJson serverConfig = new CJson(
                new CPara("Culture", session.Culture),
                new CPara("DateTime", DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")),
                new CPara("Date", DateTime.Now.ToString("yyyy-MM-dd")),
                new CPara("DateFrom", DateTime.Now.AddMonths(FromDate_ByMonth).ToString("yyyy-MM-dd")),
                new CPara("ServiceData", ServiceUrl),
                new CPara("ClientKey", ClientKey),
                new CPara("VirtualDirectory", VirtualDirectory),
                new CPara("HostName", HostName)
            );

            StringBuilder script = new StringBuilder();
            script.AppendFormat("var FWS_SERVER_CONFIG = {0}; \n", serverConfig.ToJson());
            page.ClientScript.RegisterClientScriptBlock(page.GetType(), "FWS.Server.Config", script.ToString(), true);
        }

        private static string ServiceUrl = ConfigurationManager.AppSettings["FWS.VnAccounting.Service.Name"].ToString();
        private static string ClientKey = ConfigurationManager.AppSettings["FWS.VnAccounting.ClientKey"].ToString();
        private static int FromDate_ByMonth = int.Parse(ConfigurationManager.AppSettings["FWS.VnAccounting.Config.FromDate_ByMonth"].ToString());

        public static string VirtualDirectory
        {
            get
            {
                string virDir = "";
                string APPL_MD_PATH = HttpContext.Current.Request.ServerVariables[2]; //APPL_MD_PATH
                if (APPL_MD_PATH != "")
                {
                    string[] path = APPL_MD_PATH.Split('/');
                    if (path.Length > 0)
                        virDir = path[path.Length - 1];
                }

                return virDir;
            }
        }
        public static string HostName
        {
            get
            {
                string localPath = HttpContext.Current.Request.Url.LocalPath;
                string uri = HttpContext.Current.Request.Url.AbsoluteUri;
                string ret = uri.Substring(0, uri.IndexOf(localPath)) + "/";

                return ret;
            }
        }
        public static string Host
        {
            get
            {
                string localPath = HttpContext.Current.Request.Url.LocalPath;
                string uri = HttpContext.Current.Request.Url.AbsoluteUri;
                string host = uri.Substring(0, uri.IndexOf(localPath));

                string hostWithVirtualDirectory = host + "/" + (VirtualDirectory == "" ? "" : VirtualDirectory + "/");
                return hostWithVirtualDirectory;
            }
        }

        public static string ServiceData
        {
            get
            {
                string localPath = HttpContext.Current.Request.Url.LocalPath;
                string uri = HttpContext.Current.Request.Url.AbsoluteUri;
                string host = uri.Substring(0, uri.IndexOf(localPath));

                string hostWithVirtualDirectory = host + "/" + ConfigurationManager.AppSettings["FWS.VnAccounting.Service.Name"].ToString() + "/";
                return hostWithVirtualDirectory;
            }
        }
    }
}