using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Text;
using FWS.VnAccounting.Presentation.WebApp.Mods.Items.Class;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.GeneralLedger;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Core;

namespace FWS.VnAccounting.Presentation.WebApp.Mods.Items.Service
{
    public class ChartAccountTree : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "text/plain";
            context.Response.ContentEncoding = Encoding.UTF8;

            string inputValue = "0", ret = "";
            int dtype = -1;
            if (context.Request.QueryString["inputValue"] != null)
            {
                inputValue = context.Request.QueryString["inputValue"];
            }
            if (context.Request.QueryString["dtype"] != null)
            {
                dtype = int.Parse(context.Request.QueryString["dtype"].ToString());
            }
            if (dtype == 0)
            {   //tree
                string nodeid = null;
                if (context.Request.Form["id"] != null)
                {
                    nodeid = context.Request.Form["id"].ToString();
                }
                if (!string.IsNullOrEmpty(nodeid))
                {
                    inputValue = nodeid;
                }
                ret = LoadData(inputValue);
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
                if (context.Request.QueryString["_qsearch"] != null)
                {
                    string _qs = context.Request.QueryString["_qsearch"].ToString();
                    ret = LoadGrid(2, _qs);
                }
                else
                    ret = LoadGrid(1, inputValue);
            }
            context.Response.Write(ret);
        }

        private string LoadGrid(int Type, string InputValue)
        {
            string inputValue = "";
            if (Type == 1)
            {
                inputValue = string.Format("ParentID='{0}'", InputValue);
            }
            else
            {
                inputValue = InputValue;
            }
            return new CChartAccountUI().GetItems(1, "ED45A7F1-9FB8-4D82-9D48-1B2238DC666C", inputValue);
        }

        private string LoadData(string InputValue)
        {
            CChartAccountUI obj = new CChartAccountUI();
            ServiceREF.GeneralLedgerService.COutputValue cpi = new ServiceREF.GeneralLedgerService.COutputValue();
            ServiceREF.GeneralLedgerService.GeneralLedgerService service = new ServiceREF.GeneralLedgerService.GeneralLedgerService();
            string pInput = string.Format("<InputValue UserID=\"{0}\" Session=\"{1}\" ParentID=\"{2}\"/>", 1, "ED45A7F1-9FB8-4D82-9D48-1B2238DC666C", InputValue);
            ServiceREF.GeneralLedgerService.CAccountList[] list = service.GetAccountList(pInput, ref cpi);
            StringBuilder ret = new StringBuilder();
            if (list.Length > 0)
            {
                ret.Append("[");
                foreach (var item in list)
                {
                    string state = "open";
                    if (item.ChildCount != 0)
                    {
                        state = "closed";
                    }
                    else
                    {
                        state = "open";
                    }
                    ret.Append("{\n");
                    ret.AppendFormat("'id':'{0}',\n", item.ID);
                    ret.AppendFormat("'text':'{0}',\n", item.Code + " - " + item.Name);
                    ret.AppendFormat("'state':'{0}',\n", state);
                    ret.Append("'attributes':{");
                    ret.AppendFormat("'url':'{0}',", "../Mods/Items/Service/ChartAccountTree.ashx?inputValue=" + item.ID);
                    ret.AppendFormat("'isLoad':'{0}'", 1);
                    ret.Append("}\n");
                    ret.Append("}");
                    if (item != list[list.Length - 1])
                    {
                        ret.Append(",\n");
                    }
                }
                ret.Append("]");
            }
            string jsonReturn = "";
            if (ret.Length > 0)
            {
                jsonReturn = ret.ToString().Replace("'", "\"");
            }
            return jsonReturn;
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