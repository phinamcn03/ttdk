using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

using System.Text;
using ServiceREF.CustomerService;
using FWS.VnAccounting.Presentation.WebApp.Mods.Core;
namespace FWS.VnAccounting.Presentation.WebApp.Mods.Items
{
    public class CCustomerGroupUI
    {
        ServiceREF.CustomerService.CustomerService service;
        public CCustomerGroupUI()
        {
            service = new ServiceREF.CustomerService.CustomerService();
        }
        public string GetItem(int userID, string session, string funcPara)
        {
            //string InputValue = string.Format("<InputValue UserID=\"{0}\" Session=\"{1}\" {2}/>", userID, session, inputValue);
            string InputValue = CXmlPara.CreatePara(funcPara);

            CCustomerGroup customer = service.GetCustomerGroup(InputValue);
            StringBuilder ret = new StringBuilder();
            if (customer != null)
            {
                ret.Append("{");
                ret.AppendFormat("ID:'{0}',\n", customer.ID);
                ret.AppendFormat("Code:'{0}',\n", customer.Code);
                ret.AppendFormat("Name:'{0}'\n", customer.Name);
                ret.Append("}");
            }
            else
            {
                ret.Append("{}");
            }
            return ret.ToString();
        }
        public string GetItems(int userID, string session, string funcPara)
        {            
            //string pInput = string.Format("<InputValue UserID=\"{0}\" Session=\"{1}\" {2}/>", userID, session, inputValue);
            string InputValue = CXmlPara.CreatePara(funcPara);

            COutputValue pageinfo = new COutputValue();
            CCustomerGroup[] list = service.GetCustomerGroupList(InputValue, ref pageinfo);
            StringBuilder ret = new StringBuilder();
            ret.Append("[");
            foreach (CCustomerGroup customergroup in list)
            {
                if (customergroup != null)
                {
                    ret.Append("{");
                    ret.AppendFormat("ID:'{0}',\n", customergroup.ID);
                    ret.AppendFormat("Code:'{0}',\n", customergroup.Code);
                    ret.AppendFormat("Name:'{0}'\n", customergroup.Name);
                    ret.Append("}");
                    if (customergroup != list[list.Length - 1])
                        ret.Append(",");
                }
            }
            ret.Append("]");
            return ret.ToString();
        }

        public string GetItems(int userId, string session, int currPage, int NumberRowOfPage, string funcPara)
        {            
            //string _pInput = string.Format("<InputValue PageIndex='{0}' RowsPerPage='{1}' {2} />", currPage, NumberRowOfPage, funcPara);
            string InputValue = CXmlPara.CreatePara(funcPara);

            COutputValue pageinfo = new COutputValue();
            CCustomerGroup[] list = service.GetCustomerGroupList(InputValue, ref pageinfo);
            StringBuilder ret = new StringBuilder();
            try
            {
                string format = "\"ID\":\"{0}\", \"Code\":\"{1}\", \"Name\":\"{2}\", \"Status\":\"{3}\"";
                ret.Append("{");
                ret.AppendFormat("\"currpage\":\"{0}\",\"totalpages\":\"{1}\",\"totalrecords\":\"{2}\",\"invdata\":[", currPage, pageinfo.TotalPage, pageinfo.TotalRow);
                for (int i = 0; i < list.Length; i++)
                {
                    string item = string.Format(format, list[i].ID, list[i].Code, list[i].Name, list[i].Status);
                    ret.Append("{" + item + "}");
                    if (i < list.Length - 1)
                        ret.Append(",");
                }
                ret.Append("]}");
            }
            catch (Exception ex)
            {
                ret.Append(ex.ToString());
            }
            return ret.ToString();
        }
        public string UpdateItem(int userID, string session, string funcPara)
        {
            //string pInput = string.Format("<InputValue UserID=\"{0}\" Session=\"{1}\" {2}/>", userID, session, funcPara);
            string InputValue = CXmlPara.CreatePara(funcPara);

            CApplicationMessage message = service.UpdateCustomerGroup(InputValue);
            StringBuilder ret = new StringBuilder();
            ret.Append("{");
            ret.AppendFormat("Code:'{0}',\n", message.Code);
            ret.AppendFormat("Name:'{0}'\n", message.Name);
            ret.Append("}");
            return ret.ToString();
        }
    }
}