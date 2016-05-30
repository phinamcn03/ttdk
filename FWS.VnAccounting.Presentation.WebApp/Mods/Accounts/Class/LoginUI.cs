using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ServiceREF.CoreService;
using System.Text;
namespace FWS.VnAccounting.Presentation.WebApp.Mods.Accounts
{
    public class LoginUI
    {
        CoreService service = null;
        public LoginUI()
        {
            service = new CoreService();
        }
        
        public string Login(string inputValue)
        {
            COutputValue outputValue = new COutputValue();
            CUserList list = service.Login(inputValue, ref outputValue);
            StringBuilder ret = new StringBuilder();
            if (list != null)
            {
                ret.Append("{");
                ret.AppendFormat("ID:'{0}',\n", list.ID);
                ret.AppendFormat("IsSuccessfull:{0},\n", outputValue.IsSuccessfull.ToString().ToLower());
                ret.AppendFormat("LoginName:'{0}',\n", list.LoginName);
                ret.AppendFormat("FullName:'{0}',\n", list.FullName);
                ret.AppendFormat("Session:'{0}',\n", list.Session);
                ret.AppendFormat("ClientGroupID:'{0}',\n", list.ClientGroupID);
                ret.AppendFormat("LastActionDateTime:'{0}',\n", list.LastActionDateTime);
                ret.AppendFormat("LanguageID:'{0}',\n", list.LanguageID);
                ret.AppendFormat("Status:'{0}'\n", list.Status);
                ret.Append("}");
            }
            else
            {
                ret.Append("{");
                ret.AppendFormat("IsSuccessfull:{0},", outputValue.IsSuccessfull.ToString().ToLower());
                ret.AppendFormat("Name:'{0}',", outputValue.Name);
                ret.AppendFormat("Code:'{0}',", outputValue.Code);
                ret.AppendFormat("Description:'{0}'", outputValue.Description);
                ret.Append("}");
            }
            return ret.ToString();
        }
    }
}
