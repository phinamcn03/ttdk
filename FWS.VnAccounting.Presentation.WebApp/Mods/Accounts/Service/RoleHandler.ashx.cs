using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using FWS.VnAccounting.Presentation.WebApp.Mods.Accounts.Class;

namespace FWS.VnAccounting.Presentation.WebApp.Mods.Accounts.Service
{
    /// <summary>
    /// Summary description for RoleHandler
    /// </summary>
    public class RoleHandler : IHttpHandler
    {
        RoleUI obj = new RoleUI();
        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "text/plain";
            string inputValue = "", groupid = "";
            int dtype = -1;
            if (context.Request.QueryString["inputValue"] != null)
            {
                inputValue = context.Request.QueryString["inputValue"];
            }
            if (context.Request.QueryString["groupid"] != null)
            {
                groupid = context.Request.QueryString["groupid"];
            }
            string nodeid = "0";
            if (context.Request.QueryString["nodeid"] != null)
            {
                nodeid = context.Request.QueryString["nodeid"].ToString();
            }

            if (!string.IsNullOrEmpty(groupid))
            {
                inputValue += " GroupID='" + groupid + "'";
            }
            context.Response.Write(obj.Get(nodeid, inputValue));
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