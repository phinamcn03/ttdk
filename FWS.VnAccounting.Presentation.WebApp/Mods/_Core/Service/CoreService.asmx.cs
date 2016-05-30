using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using FWS.VnAccounting.Presentation.WebApp.Mods.Core.Class;


namespace FWS.VnAccounting.Presentation.WebApp.Mods.Core
{
    /// <summary>
    /// Summary description for CoreService
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    [System.Web.Script.Services.ScriptService]
    public class CoreService : System.Web.Services.WebService
    {
        CFilterUI filter = new CFilterUI();
        [WebMethod]
        public string GetApplication(string inputValue)
        {
            string ret = "";
            ServiceREF.CoreService.CoreService service = new ServiceREF.CoreService.CoreService();
            ret = service.GetApplication(inputValue);
            return ret;
        }

        [WebMethod]
        public string GetModule(string inputValue)
        {
            string ret = "";
            ServiceREF.CoreService.CoreService service = new ServiceREF.CoreService.CoreService();
            ret = service.GetModule(inputValue);
            return ret;
        }
        
        [WebMethod]
        public string GetInterfaceFunction(string inputValue)
        {
            string ret = "";
            ServiceREF.CoreService.CoreService service = new ServiceREF.CoreService.CoreService();
            ret = service.GetInterfaceFunction(inputValue);
            return ret;
        }
        [WebMethod]
        public string GetInterfaceFunctionByParentIDInJson(string inputValue)
        {
            string ret = "";
            ServiceREF.CoreService.CoreService service = new ServiceREF.CoreService.CoreService();
            ret = service.GetInterfaceFunctionByParentIDInJson(inputValue);
            return ret;
        }
        [WebMethod]
        public string FilterGetParams(string sViewID)
        {
            return filter.GetParams(1, sViewID);
        }
        [WebMethod]
        public string FilterGetViews(string sPageCode)
        {
            return filter.GetViews(1, sPageCode);
        }
        [WebMethod]
        public string GetLanguageList(string inputValue)
        {
            System.Text.StringBuilder ret = new System.Text.StringBuilder();
            ServiceREF.CoreService.CoreService service = new ServiceREF.CoreService.CoreService();
            ServiceREF.CoreService.COutputValue outputValue = new ServiceREF.CoreService.COutputValue();
            ServiceREF.CoreService.CLanguage[] list = service.GetLanguageList(inputValue, ref outputValue);
            if (list != null && list.Length > 0)
            {
                ret.Append("[");
                foreach (ServiceREF.CoreService.CLanguage item in list)
                {
                    ret.Append("{");
                    ret.AppendFormat("ID:'{0}',\n", item.ID);
                    ret.AppendFormat("Code:'{0}',\n", item.Code);
                    ret.AppendFormat("Name:'{0}'\n", item.Name);
                    ret.Append("}");
                    if (item != list[list.Length - 1])
                        ret.Append(",");
                }
                ret.Append("]");
            }
            return ret.ToString();
        }
        [WebMethod]
        public string GetClientGroupList(string inputValue)
        {
            System.Text.StringBuilder ret = new System.Text.StringBuilder();
            ServiceREF.CoreService.CoreService service = new ServiceREF.CoreService.CoreService();
            ServiceREF.CoreService.COutputValue outputValue = new ServiceREF.CoreService.COutputValue();
            ServiceREF.CoreService.CClientGroup[] list = service.GetClientGroupList(inputValue, ref outputValue);
            if (list != null && list.Length > 0)
            {
                ret.Append("[");
                foreach (ServiceREF.CoreService.CClientGroup item in list)
                {
                    ret.Append("{");
                    ret.AppendFormat("ID:'{0}',\n", item.ID);
                    ret.AppendFormat("Code:'{0}',\n", item.Code);
                    ret.AppendFormat("Name:'{0}'\n", item.Name);
                    ret.Append("}");
                    if (item != list[list.Length - 1])
                        ret.Append(",");
                }
                ret.Append("]");
            }
            return ret.ToString();
        }
        [WebMethod]
        public string FilterDropDownList(string pType)
        {
            return filter.GetDropDownList(pType);
        }
        [WebMethod]
        public string GetControlData(string pType, string pDataCode, string pFilterCode)
        {
            return filter.GetControlData(pType, pDataCode, pFilterCode);
        }
    }
}
