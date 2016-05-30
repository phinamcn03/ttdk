using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Text;
using FWS.VnAccounting.Presentation.WebApp.Mods.Core.Class;

namespace FWS.VnAccounting.Presentation.WebApp.Mods.Core.Service
{
    /// <summary>
    /// Summary description for EmployeeDepartment
    /// </summary>
    public class EmployeeDepartment : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "text/plain";
            context.Response.ContentEncoding = Encoding.UTF8;

            string inputValue = "0", ret = "";
            int type = -1;
            if (context.Request.QueryString["inputValue"] != null)
            {
                inputValue = context.Request.QueryString["inputValue"];
            }
            if (context.Request.QueryString["dtype"] != null)
            {
                type = int.Parse(context.Request.QueryString["dtype"].ToString());
            }
            if (type == 0) //Treecombo
            {
                string nodeid = null;
                if (context.Request.Form["id"] != null)
                {
                    nodeid = context.Request.Form["id"].ToString();
                }
                if (!string.IsNullOrEmpty(nodeid))
                {
                    inputValue = nodeid;
                }
                ret = CEmployeeDepartmentUI.LoadData(inputValue);
            }
            else
            {   //grid
                string rowid = null;

                if (context.Request.Form["nodeid"] != null)
                {
                    rowid = context.Request.Form["nodeid"].ToString();
                }
                if (!string.IsNullOrEmpty(rowid))
                {
                    inputValue = rowid;
                }
                int level = 0;
                if (context.Request.Form["n_level"] != null)
                {
                    level = int.Parse(context.Request.Form["n_level"].ToString());
                }
                if (context.Request.QueryString["_qsearch"] != null)
                {
                    string _qs = context.Request.QueryString["_qsearch"].ToString();
                    ret = CEmployeeDepartmentUI.LoadGrid(2, _qs, level);
                }
                else
                    ret = CEmployeeDepartmentUI.LoadGrid(1, inputValue, level);
            }
            context.Response.Write(ret);
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