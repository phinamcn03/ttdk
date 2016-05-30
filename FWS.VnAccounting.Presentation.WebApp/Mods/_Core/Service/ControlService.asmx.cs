using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using FWS.VnAccounting.Presentation.WebApp.Mods.Core;
using System.Text;

namespace FWS.VnAccounting.Presentation.WebApp.Mods._Core.Service
{
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    public class ControlService : System.Web.Services.WebService
    {
        private ServiceREF.CoreService.CoreService core_service = new ServiceREF.CoreService.CoreService();
        [WebMethod]
        public string GetCombobox(string inputValue)
        {
            StringBuilder ret = new StringBuilder();
            ServiceREF.CoreService.CControlData[] list = GetData(inputValue);
            ret.Append("[");
            foreach (ServiceREF.CoreService.CControlData cp in list)
            {
                ret.Append("{");
                ret.AppendFormat("'id':'{0}',", cp.ID);
                ret.AppendFormat("'text':'{0}',", cp.Name);
                ret.AppendFormat("'value':'{0}'", cp.Value);
                ret.Append("}");
                if (cp != list[list.Length - 1])
                    ret.Append(",");
            }
            ret.Append("]");
            return ret.ToString();
        }
        [WebMethod]
        public string GetAutoComplete(string q, string inputValue)
        {
            StringBuilder ret = new StringBuilder();
            if (q != "")
                inputValue += string.Format(" Code='{0}'", q);
            ServiceREF.CoreService.CControlData[] list = GetData(inputValue);
            foreach (ServiceREF.CoreService.CControlData item in list)
            {
                ret.AppendFormat("{0}|{1}|{2}|{3}|{4}|{5}|{6}\n", item.ID, item.Name, item.Value, item.Code, item.DisplayName, item.ParentID, item.ChildCount);
            }
            string result = string.Empty;
            if (ret.Length > 0)
            {
                result = ret.ToString(0, ret.Length - 1);
            }
            return result;
        }
        //=====================================================================
        private ServiceREF.CoreService.CControlData[] GetData(string inputValue)
        {
            string p = CXmlPara.CreatePara(inputValue);
            return core_service.GetControlData(p);
        }
    }
}
