using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Text;
using FWS.VnAccounting.Presentation.WebApp.Mods.Core;

namespace FWS.VnAccounting.Presentation.WebApp.Mods._Core.Service
{
    public class TreeCombo : IHttpHandler
    {
        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "text/plain";
            context.Response.ContentEncoding = Encoding.UTF8;

            string parentID = "0", ret = "", dataCode = "", filterCode = "";
            if (context.Request.QueryString["DataCode"] != null)
                dataCode = context.Request.QueryString["DataCode"];
            if (context.Request.QueryString["FilterCode"] != null)
                filterCode = context.Request.QueryString["FilterCode"];
            if (context.Request.QueryString["ParentID"] != null)
                parentID = context.Request.QueryString["ParentID"];

            string nodeid = null;
            if (context.Request.Form["id"] != null)
                nodeid = context.Request.Form["id"].ToString();
            if (!string.IsNullOrEmpty(nodeid))
                parentID = nodeid;

            ret = LoadTreeData(dataCode, filterCode, string.Format(" ParentID=\"{0}\" ", parentID));

            context.Response.Write(ret);
        }
        private ServiceREF.CoreService.CoreService core_service = new ServiceREF.CoreService.CoreService();
        private string LoadTreeData(string pDataCode, string pFilterCode, string exAttribute)
        {
            string inputValue = CXmlPara.CreatePara(new CPara[] { 
                new CPara("DataCode", pDataCode) ,
                new CPara("FilterCode", pFilterCode) 
            }, exAttribute);

            ServiceREF.CoreService.CControlData[] list = core_service.GetControlData(inputValue);
            StringBuilder ret = new StringBuilder();
            if (list != null && list.Length > 0)
            {
                ret.Append("[");
                foreach (var item in list)
                {
                    string state = "open";
                    if (item.ChildCount != 0)
                        state = "closed";
                    else
                        state = "open";
                    ret.Append("{\n");
                    ret.AppendFormat("'id':'{0}',\n", item.ID);
                    ret.AppendFormat("'text':'{0}',\n", item.Name);                    
                    ret.AppendFormat("'state':'{0}',\n", state);
                    ret.Append("'attributes':{");
                    ret.AppendFormat("'url':'../Mods/_Core/Service/ControlHandler.ashx?parentID={0}&DataCode={1}&FilterCode={2}',\n", item.ID, pDataCode, pFilterCode);
                    ret.AppendFormat("'code':'{0}',\n", item.Code);
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