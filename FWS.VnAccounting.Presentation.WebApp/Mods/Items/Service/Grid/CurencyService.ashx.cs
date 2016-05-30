using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using FWS.VnAccounting.Presentation.WebApp.Mods.Items.Class;

namespace FWS.VnAccounting.Presentation.WebApp.Mods.Items.Service.Grid
{
    /// <summary>
    /// Summary description for CurencyService
    /// </summary>
    public class CurencyService : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            CCurrencyUI obj = new CCurrencyUI();
            context.Response.ContentType = "text/plain";
            //context.Response.Write(obj.GetCurrencyList(1, "sessionid", 1, 30, 300));
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