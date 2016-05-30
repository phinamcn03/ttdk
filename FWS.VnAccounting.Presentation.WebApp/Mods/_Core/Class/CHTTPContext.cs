using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.SessionState;

namespace FWS.VnAccounting.Presentation.WebApp.Mods.Core
{
    
    public class CHttpContext
    {
        //public static HttpSessionState Session
        //{
        //    get { return HttpContext.Current.Session; }
        //}
        public static HttpRequest Request
        {
            get { return HttpContext.Current.Request; }
        }
        public static HttpResponse Response
        {
            get { return HttpContext.Current.Response; }
        }
        public static HttpCookieCollection Cookies
        {          
            get { return HttpContext.Current.Request.Cookies; }
        }

    }
   

}