using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Text;
using FWS.VnAccounting.Presentation.WebApp.Mods.Core;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Core;

namespace FWS.VnAccounting.Presentation.WebApp.Mods.VouchersExt.Service
{
    /// <summary>
    /// Summary description for Receipt
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    // [System.Web.Script.Services.ScriptService]
    public class Receipt : System.Web.Services.WebService
    {

        [WebMethod]
        public string GetContextDataAutoComplete(string clientKey, string inputValue)
        {
            StringBuilder ret = new StringBuilder();
            string _template = "{0}|{1}|{2}|{3}|{4}\n";
            string result = null;
            ServiceREF.CoreService.CoreService service = new ServiceREF.CoreService.CoreService();
            result = service.GetContextData(clientKey, inputValue);
            List<CResource> resList = CObjectMapper.FromCSV<CResource>(result, 1);
            if (resList!=null)
            {
                foreach (var item in resList)
                {
                    ret.AppendFormat(_template, item.ID, item.Code, item.Name,item.Value,item.Value1);
                }
            }
            return ret.ToString();
        }
        [WebMethod]
        public string GetContextData(string clientKey, string inputValue)
        {
            StringBuilder ret = new StringBuilder();
            string result = null;
            ServiceREF.CoreService.CoreService service = new ServiceREF.CoreService.CoreService();
            result = service.GetContextData(clientKey, inputValue);
            List<CResource> resList = CObjectMapper.FromCSV<CResource>(result, 1);
            ret.Append("[");
            foreach (var item in resList)
            {
                ret.Append("{");
                ret.AppendFormat("'id':'{0}',", item.ID);
                ret.AppendFormat("'text':'{0}',", item.Name);
                ret.AppendFormat("'value':'{0}'", item.ID);
                ret.Append("}");
                if (item != resList[resList.Count - 1])
                {
                    ret.Append(",");
                }
            }
            ret.Append("]");

            return ret.ToString();
        }
    }
}
