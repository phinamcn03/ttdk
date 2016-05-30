using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ServiceREF.GeneralLedgerService;
using System.Text;

using FWS.Framework.Log;
using FWS.VnAccounting.Presentation.WebApp.Mods.Core;
namespace FWS.VnAccounting.Presentation.WebApp.Mods.Items.Class
{
    public class CChartAccountUI
    {
        static ServiceREF.GeneralLedgerService.GeneralLedgerService service = new ServiceREF.GeneralLedgerService.GeneralLedgerService();

        public string Get(int userID, string session, string funcPara)
        {
            //string pInput = string.Format("<InputValue UserID=\"{0}\" Session=\"{1}\" {2}/>", userId, session, funcPara);
            string InputValue = CXmlPara.CreatePara(funcPara);
            CAccountList account = service.GetAccount(InputValue);
            StringBuilder ret = new StringBuilder();
            if (account != null)
            {
                ret.Append("{");
                try
                {
                    ret.AppendFormat("ID:'{0}',\n", account.ID);
                    ret.AppendFormat("Code:'{0}',\n", account.Code);
                    ret.AppendFormat("Name:'{0}',\n", account.Name);
                    ret.AppendFormat("ParentID:'{0}',\n", account.ParentID);
                    ret.AppendFormat("Type:'{0}'\n", account.ParentID);
                }
                catch (Exception ex)
                {
                    CLogManager.Write("ChartAccountUI:Get(int, string, string)", ex.ToString(), "Account");
                }
                ret.Append("}");
            }
            else
            {
                ret.Append("{}");
            }
            return ret.ToString();
        }

        public string GetList(int userID, string session, string funcPara)
        {            
            //string pInput = string.Format("<InputValue UserID=\"{0}\" Session=\"{1}\" {2}/>", userId, session, funcPara);
            string InputValue = CXmlPara.CreatePara(funcPara);

            ServiceREF.GeneralLedgerService.COutputValue pageinfo = new ServiceREF.GeneralLedgerService.COutputValue();
            CAccountList[] list = service.GetAccountList(InputValue, ref pageinfo);
            StringBuilder ret = new StringBuilder();
            ret.Append("[");
            foreach (CAccountList account in list)
            {
                if (account != null)
                {
                    try
                    {
                        ret.Append("{");
                        ret.AppendFormat("ID:'{0}',\n", account.ID);
                        ret.AppendFormat("Code:'{0}',\n", account.Code);
                        ret.AppendFormat("Name:'{0}',\n", account.Name);
                        ret.AppendFormat("ParentID:'{0}',\n", account.ParentID);
                        ret.AppendFormat("Type:'{0}'\n", account.ParentID);
                        ret.Append("}");
                    }
                    catch (Exception ex)
                    {
                        CLogManager.Write("ChartAccountUI:GetList(int, string, string)", ex.ToString(), "Account");
                    }
                    if (account != list[list.Length - 1])
                        ret.Append(",");
                }
            }
            ret.Append("]");
            return ret.ToString();
        }

        public string GetItems(int userId, string session, string funcPara)
        {
            //string pInput = "<COutputValue pageinfo = new COutputValue();  />";
            //if (InputValue.Length > 0)
            //    pInput = string.Format("<InputValue UserID=\"{0}\" Session=\"{1}\" {2}/>", userId, session, funcPara);
            string InputValue = CXmlPara.CreatePara(funcPara);

            COutputValue pageinfo = new COutputValue();
            CAccountList[] list = service.GetAccountList(InputValue, ref pageinfo);
            StringBuilder ret = new StringBuilder();
            try
            {
                string format = "\"ID\":\"{0}\", \"Code\":\"{1}\", \"AccountName\":\"{2}\", \"parent_id\":\"{3}\", \"level\":\"{4}\", \"isLeaf\":\"{5}\", \"expanded\":\"{6}\", \"loaded\":\"{6}\"";

                ret.Append("{");
                ret.AppendFormat("\"page\":\"{0}\",\"total\":\"{1}\",\"records\":\"{2}\",\"invdata\":[", 1, pageinfo.TotalPage, pageinfo.TotalRow);
                for (int i = 0; i < list.Length; i++)
                {
                    string isLeaf = list[i].ChildCount > 0 ? "false" : "true";
                    int _level = 0;
                    if (list[i].Level.Value > 0)
                        _level = list[i].Level.Value - 1;
                    string item = string.Format(format, list[i].ID, list[i].Code, list[i].Name, list[i].ParentID, _level, isLeaf, "false");
                    ret.Append("{" + item + "}");
                    if (i < list.Length - 1)
                        ret.Append(",");
                }
                ret.Append("]}");
            }
            catch (Exception ex)
            {
                CLogManager.Write("ChartAccountUI:GetItems(int, string, string)", ex.ToString(), "Account");
            }
            return ret.ToString();
        }
        public string UpdateItem(int userID, string session, string funcPara)
        {
            //string pInput = string.Format("<InputValue UserID=\"{0}\" Session=\"{1}\" {2}/>", userID, session, funcPara);
            string InputValue = CXmlPara.CreatePara(funcPara);

            CApplicationMessage message = service.UpdateAccount(InputValue);
            StringBuilder ret = new StringBuilder();
            try
            {
                ret.Append("{");
                ret.AppendFormat("Code:'{0}',\n", message.Code);
                ret.AppendFormat("Name:'{0}',\n", message.Name);
                ret.AppendFormat("Result:'{0}'\n", message.Result);
                ret.Append("}");
            }
            catch (Exception ex)
            {
                CLogManager.Write("ChartAccountUI:UpdateItem", ex.ToString(), "Account");
            }
            return ret.ToString();
        }
    }
}