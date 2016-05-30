using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Text;
using FWS.Framework.Log;


namespace FWS.VnAccounting.Presentation.WebApp.Mods.Accounts.Class
{
    public class RoleUI
    {
        static ServiceREF.CoreService.CoreService service = new ServiceREF.CoreService.CoreService();
        public string Get(string nodeId, string InputValue)
        {
            //nodeId = "1";
            //if (InputValue.Length > 0)
            string pInput = string.Format("<InputValue ParentID='{0}' {1}/>", nodeId, InputValue);
            ServiceREF.CoreService.CInterfaceFunction[] list = service.GetInterfaceFunctionByGroupID(pInput);
            StringBuilder ret = new StringBuilder();
            try
            {
                string format = "\"ID\":\"{0}\", \"Feature\":\"{1}\", \"IsUsed\":\"{2}\", \"parent_id\":\"{3}\", \"level\":\"{4}\", \"isLeaf\":\"{5}\", \"expanded\":\"{6}\", \"loaded\":\"{6}\", \"Insert\":\"{7}\", \"Update\":\"{8}\", \"Delete\":\"{9}\"";

                ret.Append("{");
                ret.AppendFormat("\"currpage\":\"{0}\",\"totalpages\":\"{1}\",\"totalrecords\":\"{2}\",\"invdata\":[", 1, 1, 10000);
                for (int i = 0; i < list.Length; i++)
                {
                    string isLeaf = list[i].ChildCount > 0 ? "false" : "true";
                    int _level = 0;
                    if (list[i].ParentID != null && list[i].ParentID > 0)
                    {
                        _level++;
                    }
                    string item = string.Format(format, list[i].ID, list[i].Code, list[i].IsUsed, list[i].ParentID, _level, isLeaf, "false", list[i].Insert, list[i].Update, list[i].Delete);
                    ret.Append("{" + item + "}");
                    if (i < list.Length - 1)
                        ret.Append(",");
                }
                ret.Append("]}");
            }
            catch (Exception ex)
            {
                CLogManager.Write("RoleUI:Get", ex.ToString(), "ROLE");
            }
            return ret.ToString();
        }
    }
}