using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using ServiceREF.CoreService;
using System.Text;
using FWS.VnAccounting.Presentation.WebApp.Mods.Core;

namespace FWS.VnAccounting.Presentation.WebApp.Mods.Accounts.Service
{
    /// <summary>
    /// Summary description for RoleService
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    // [System.Web.Script.Services.ScriptService]
    public class RoleService : System.Web.Services.WebService
    {
        ServiceREF.CoreService.CoreService service = new ServiceREF.CoreService.CoreService();
        [WebMethod]
        public string GetListGroup()
        {
            string InputValue = CXmlPara.CreatePara(new CPara[]{ }, "");

            StringBuilder ret = new StringBuilder();
            ServiceREF.CoreService.COutputValue output = new ServiceREF.CoreService.COutputValue();
            CUserGroup[] list = service.GetUserGroupList(InputValue, ref output);
            ret.Append("[");
            foreach (CUserGroup cp in list)
            {
                ret.Append("{");
                ret.AppendFormat("'id':'{0}',", cp.ID);
                ret.AppendFormat("'text':'{0}',", cp.Name);
                ret.AppendFormat("'value':'{0}'", cp.ID);
                ret.Append("}");
                if (cp != list[list.Length - 1])
                {
                    ret.Append(",");
                }
            }
            ret.Append("]");
            return ret.ToString();
        }
        [WebMethod]
        public string UpdateRoleByGroupID(string groupID, string listRole)
        {
            string InputValue = CXmlPara.CreatePara(new CPara[] { 
                    new CPara("GroupID", groupID)
                }, "");
            InputValue += listRole;
            CApplicationMessage message = service.UpdateUserGroupInterfaceFunction(InputValue);

            return message.IsSuccessfull + "|" + message.Description;
        }
    }
}
