using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Text;

using FWS.VnAccounting.Presentation.WebApp.Mods.Global;
namespace FWS.VnAccounting.Presentation.WebApp.Mods.Core
{
    public class CFilterUI
    {
        ServiceREF.CoreService.CoreService CoreService = new ServiceREF.CoreService.CoreService();
        ServiceREF.Cash.CurrencyService currencyService = new ServiceREF.Cash.CurrencyService();
        public string GetViews(int userId, string sPageCode)
        {
            string ret = "";
            string InputValue = CXmlPara.CreatePara(new CPara[]
                {
                    new CPara("ViewCode", sPageCode)
                },
                ""
            );
            ServiceREF.CoreService.COutputValue outputValue = new ServiceREF.CoreService.COutputValue();
            ServiceREF.CoreService.CViewList[] list = CoreService.GetViewList(InputValue, ref outputValue);
            ret = CGrid.ToJsonForHandle<ServiceREF.CoreService.CViewList>(userId, 28, list, 1, 1, 1000);
            return ret;
        }
        public string GetParams(int userId, string sViewID)
        {
            StringBuilder ret = new StringBuilder();
            string InputValue = CXmlPara.CreatePara(new CPara[]
                {
                    new CPara("ViewID", sViewID)
                },
                ""
            );
            ServiceREF.CoreService.COutputValue outputValue = new ServiceREF.CoreService.COutputValue();
            ServiceREF.CoreService.CDesignParameter[] list = CoreService.GetViewDesignParameter(InputValue, ref outputValue);
            ret.Append("{[");
            for (int i = 0; i < list.Length; i++)
            {
                ret.Append("{");
                ret.AppendFormat("\"{0}\":\"{1}\",", "name", list[i].VariableName);
                ret.AppendFormat("\"{0}\":\"{1}\",", "type", list[i].VariableType);
                ret.AppendFormat("\"{0}\":\"{1}\",", "label", list[i].VariableLabel);
                ret.AppendFormat("\"{0}\":\"{1}\",", "fcode", list[i].FilterCode);
                ret.AppendFormat("\"{0}\":\"{1}\"", "dcode", list[i].DataCode);
                ret.Append("}");
                if (i < list.Length - 1)
                    ret.Append(",");
            }
            ret.Append("]}");
            return ret.ToString();
        }
        public string GetDropDownList(string pType)
        {
            switch (pType.ToLower())
            {
                case "currency":
                    return _GetCurrencyList();
                default:
                    return "";
            }
        }
        public string GetControlData(string pType, string pDataCode, string pFilterCode)
        {
            string ret = "";
            string InputValue = CXmlPara.CreatePara(new CPara[]
                {
                    new CPara("DataCode", pDataCode),
                    new CPara("FilterCode", pFilterCode)
                },
                ""
            );
            ServiceREF.CoreService.CControlData[] list = CoreService.GetControlData(InputValue);
            switch (pType)
            {
                case "3":
                    ret = BuildJsonAutoComplete(list);
                    break;
                default:
                    break;
            }
            return ret;
        }
        public string BuildJsonAutoComplete(ServiceREF.CoreService.CControlData[] list)
        {
            StringBuilder ret = new StringBuilder();
            if (list != null && list.Length > 0)
            {
                foreach (var item in list)
                {
                    ret.AppendFormat("{0}|{1}|{2}|{3}|{4}|{5}\n", item.Code, item.Name, item.ChildCount.ToString(), item.Value, item.DisplayName, item.ID);
                }
            }
            string result = string.Empty;
            if (ret.Length > 0)
            {
                result = ret.ToString(0, ret.Length - 1);
            }
            return result;
        }
        #region dropdownlist

        public string _GetCurrencyList()
        {
            StringBuilder ret = new StringBuilder();
            string InputValue = CXmlPara.CreatePara(new CPara[] {}, "");
            ServiceREF.Cash.COutputValue output = new ServiceREF.Cash.COutputValue();
            ServiceREF.Cash.CCurrency[] lst = currencyService.GetCurrencyList(InputValue, ref output);
            ret.Append("[");
            foreach (ServiceREF.Cash.CCurrency obj in lst)
            {
                ret.Append("{");
                ret.AppendFormat("'id':'{0}',", obj.ID);
                ret.AppendFormat("'text':'{0}',", obj.Name);
                ret.AppendFormat("'value':'{0}'", obj.ID);
                ret.Append("}");
                if (obj != lst[lst.Length - 1])
                {
                    ret.Append(",");
                }
            }
            ret.Append("]");
            return ret.ToString();
        }

        #endregion
    }
}