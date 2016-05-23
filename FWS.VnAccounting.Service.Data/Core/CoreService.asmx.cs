using System;
using System.Collections.Generic;
using System.Web;
using System.Web.Services;
using FWS.VnAccounting.Service.Data.Core.Class;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Core;

namespace FWS.VnAccounting.Service.Data.Core
{
    /// <summary>
    /// Summary description for CoreService
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]

    public class CoreService : System.Web.Services.WebService
    {
        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\"/&gt;")]
        public string GetApplication(string InputValue)
        {
            return new CApplicationService().GetApplication(InputValue);
        }

        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\"/&gt;")]
        public string GetInterfaceFunction(string InputValue)
        {
            return new CInterfaceFunctionService().GetInterfaceFunctionInCSV(InputValue);
        }

        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\"/&gt;")]
        public string GetInterfaceFunctionInJson(string InputValue)
        {
            return new CInterfaceFunctionService().GetInterfaceFunctionInJson(InputValue);
        }

        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\"/&gt;")]
        public List<CInterfaceFunction> GetInterfaceFunctionInObject(string InputValue)
        {
            return new CInterfaceFunctionService().GetInterfaceFunction(InputValue);
        }

        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\" ParentID=\"0\" /&gt;")]
        public string GetInterfaceFunctionByParentID(string InputValue)
        {
            return new CInterfaceFunctionService().GetInterfaceFunctionByParentIDInCSV(InputValue);
        }

        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\" ParentID=\"0\" /&gt;")]
        public List<CInterfaceFunction> GetInterfaceFunctionByGroupID(string InputValue)
        {
            return new CInterfaceFunctionService().GetInterfaceFunctionByGroupID(InputValue);
        }

        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\" ParentID=\"0\" /&gt;")]
        public string GetInterfaceFunctionByParentIDInJson(string InputValue)
        {
            return new CInterfaceFunctionService().GetInterfaceFunctionByParentIDInJson(InputValue);
        }

        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\" ParentID=\"0\" /&gt;")]
        public List<CInterfaceFunction> GetInterfaceFunctionByParentIDInObject(string InputValue)
        {
            return new CInterfaceFunctionService().GetInterfaceFunctionByParentID(InputValue);
        }
        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\"/&gt;")]
        public string GetModule(string InputValue)
        {
            return new CModuleService().GetModule(InputValue);
        }
        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\" CodeItem=\"Customer\" /&gt;")]
        public string GetItemList(string InputValue)
        {
            return new CItemService().GetItemList(InputValue);
        }
        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\" CodeItem=\"Customer\" /&gt;")]
        public string UpdateItem(string InputValue)
        {
            return new CItemService().GetItemList(InputValue);
        }

        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\" GridID=\"1\" /&gt;")]
        public string GetGridConfigInString(string InputValue)
        {
            return new CGridService().GetGridConfigInString(InputValue);
        }

        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\" GridID=\"1\" /&gt;")]
        public string GetGridConfigColumnInString(string InputValue)
        {
            return new CGridService().GetGridConfigColumnInString(InputValue);
        }
        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\"  Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\" GridID=\"1\" /&gt;")]
        public List<CGridConfig> GetGridConfig(string InputValue)
        {
            return new CGridService().GetGridConfig(InputValue);
        }

        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\" GridID=\"1\" /&gt;")]
        public List<CGridColumnConfig> GetGridConfigColumn(string InputValue)
        {
            return new CGridService().GetGridConfigColumn(InputValue);
        }

        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\" GridID=\"1\" /&gt;")]
        public List<CIntDefination> GetIntDefinationList(string InputValue)
        {
            return new CIntDefinationService().GetIntDefinationList(InputValue);
        }

        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\" RefType=\"1\" RefDate=\"2012-01-01\" /&gt;")]
        public CRefNo GetNextRefNo(string InputValue)
        {
            return new CRefNoService().GetNextRefNo(InputValue);
        }
        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\" RefType=\"1\" RefDate=\"2012-01-01\" /&gt;")]
        
        public List<CClientGroupConfig> GetClientGroupConfig(string InputValue,ref COutputValue OutputValue)
        {
            return (List<CClientGroupConfig>)new CClientGroupService().GetClientGroupConfig(InputValue, ref OutputValue);
        }

        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\" RefType=\"1\" RefDate=\"2012-01-01\" /&gt;")]
        public CApplicationMessage UpdateClientGroupConfig(string InputValue)
        {
            return new CClientGroupService().UpdateClientGroupConfig(InputValue);
        }

        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\" CustomControl=\"Menu\" /&gt;")]
        public List<CControl> GetControls(string InputValue)
        {
            return new CControlService().GetControls(InputValue);
        }

        [WebMethod(Description = "InputValue=&lt;InputValue UserLogin=\"qc\" Password=\"123456\" LanguageID=\"1\" /&gt;")]
        public CUserList Login(string InputValue,ref COutputValue OutputValue)
        {
            return new CUserService().Login(InputValue, ref OutputValue);
        }

        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" /&gt;")]
        public List<CUserGroup> GetUserGroupList(string InputValue, ref COutputValue OutputValue)
        {
            return new CUserGroupService().GetUserGroupList(InputValue, ref OutputValue);
        }

        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"\"/&gt;\n&lt;Detail GroupID=\"2\" IFID=\"3\" Used=\"1\"/&gt;\n&lt;Detail GroupID=\"2\" IFID=\"4\" Used=\"0\"/&gt;")]
        public CApplicationMessage UpdateUserGroupInterfaceFunction(string InputValue)
        {
            return new CInterfaceFunctionService().UpdateUserGroupInterfaceFunction(InputValue);
        }

        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"\" RefType=\"1\" PersonType=\"1\"/&gt;")]
        public List<CPerson> GetPersonList(string InputValue, ref COutputValue OutputValue)
        {
            return new CPersonService().GetPersonList(InputValue, ref OutputValue);
        }

        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"\" PersonType=\"1\" ID=\"21\"/&gt;")]
        public CPerson GetPerson(string InputValue)
        {
            return new CPersonService().GetPerson(InputValue);
        }
        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"\" ViewCode=\"REPORT\" /&gt;")]
        public List<CViewList> GetViewList(string InputValue, ref COutputValue OutputValue)
        {
            return new CViewService().GetViewList(InputValue, ref OutputValue);
            

        }
        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"\" ViewID=\"3\"/&gt;")]
        public List<CDesignParameter> GetViewDesignParameter(string InputValue, ref COutputValue OutputValue)
        {
            return new CViewService().GetViewDesignParameter(InputValue, ref OutputValue);
          
        }

        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"\" FilterCode=\"Employee\"/&gt;")]
        public List<CPersonRole> GetPersonRoleList(string InputValue, ref COutputValue OutputValue)
        {
            return new CPersonService().GetPersonRoleList(InputValue, ref OutputValue);
        }

        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"\" ID=\"3\"/&gt;")]
        public CPersonRole GetPersonRole(string InputValue)
        {
            return new CPersonService().GetPersonRole(InputValue);
        }
        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"\" ViewID=\"3\"/&gt;")]
        public CApplicationMessage UpdatePersonRole(string InputValue)
        {
            return new CPersonService().UpdatePersonRole(InputValue);
        }

        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"\"/&gt;")]
        public List<CLanguage> GetLanguageList(string InputValue, ref COutputValue OutputValue)
        {
            return new CLanguageService().GetLanguageList(InputValue, ref OutputValue);
        }

        [WebMethod(Description = "InputValue=&lt;InputValue /&gt;")]
        public List<CClientGroup> GetClientGroupList(string InputValue, ref COutputValue OutputValue)
        {
            return new CClientGroupService().GetClientGroupList(InputValue, ref OutputValue);
        }

        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"\" DataCode=\"Account\" FilterCode=\"Cash\"  /&gt;")]
        public List<CControlData> GetControlData(string InputValue)
        {
            return new CControlService().GetControlData(InputValue);
        }
        [WebMethod]
        public string GetGridData(string InputValue)
        {
            return new CGridService().GetGridData(InputValue);
        }

        [WebMethod]
        public string GetContextData(string ClientKey, string InputValue)
        {            
            return new CCoreService().GetContextData(ClientKey,InputValue);
        }

        [WebMethod]
        public string ExecuteAction(string ClientKey, string InputValue)
        {
            return new CCoreService().ExecuteAction(ClientKey, InputValue);
        }
    }
}
