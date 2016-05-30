using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using PMSA.Framework.Utils;

namespace FWS.VnAccounting.Presentation.WebApp.Mods.VouchersExt.Service
{
    /// <summary>
    /// Summary description for ARegister
    /// </summary>
    public class ARegister : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "text/plain";
            string instantid = "";
            if (context.Request["instantid"] != null)
                instantid = context.Request["instantid"].ToString();
            string file = context.Server.MapPath("../Js/Mods.VouchersExt.ARegisterAppendix.js");
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