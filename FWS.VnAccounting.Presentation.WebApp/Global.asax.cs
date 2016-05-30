using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.SessionState;
using System.Web.Routing;
using FWS.Framework.Log;

namespace FWS.VnAccounting.Presentation.WebApp
{
    public class Global : System.Web.HttpApplication
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            RouteTable.Routes.Ignore("{resource}.axd/{*pathInfo}");
            routes.Add(new Route("{resource}.axd/{*pathInfo}", new StopRoutingHandler()));

            routes.MapPageRoute("mods", "{modname}/{pagename}", "~/Mods/{modname}/{pagename}.aspx");
            routes.MapPageRoute("modsQuery", "{modname}/{pagename}/{query}", "~/Mods/{modname}/{pagename}.aspx");
            CLogManager.Init();
        }
        protected void Application_Start(object sender, EventArgs e)
        {
            RegisterRoutes(RouteTable.Routes);
        }

        protected void Session_Start(object sender, EventArgs e)
        {

        }

        protected void Application_BeginRequest(object sender, EventArgs e)
        {

        }

        protected void Application_AuthenticateRequest(object sender, EventArgs e)
        {

        }

        protected void Application_Error(object sender, EventArgs e)
        {

        }

        protected void Session_End(object sender, EventArgs e)
        {

        }

        protected void Application_End(object sender, EventArgs e)
        {

        }
    }
}