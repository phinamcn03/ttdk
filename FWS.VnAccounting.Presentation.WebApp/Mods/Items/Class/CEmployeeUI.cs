using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Text;

using ServiceREF.GeneralLedgerService;
using FWS.VnAccounting.Presentation.WebApp.Mods.Core;

namespace FWS.VnAccounting.Presentation.WebApp.Mods.Items
{
    public class CEmployeeUI: CBaseItemUI
    {
        GeneralLedgerService service = null;


        public CEmployeeUI()
        {
            service = new GeneralLedgerService();
        }
        protected string GetItem(CEmployee item)
        {
            StringBuilder ret = new StringBuilder();

            if (item != null)
            {
                ret.Append("{");
                ret.AppendFormat("'ID':'{0}',", item.ID);
                ret.AppendFormat("'Code':'{0}',", item.Code);
                ret.AppendFormat("'Name':'{0}',", item.Name);
                ret.AppendFormat("'TaxNo':'{0}',", item.TaxNo);
                ret.AppendFormat("'Phone':'{0}',", item.Phone);
                ret.AppendFormat("'Fax':'{0}',", item.Fax);
                ret.AppendFormat("'Address':'{0}',", item.Address);
                ret.AppendFormat("'PayrollAccount':'{0}',", item.PayrollAccount);
                ret.AppendFormat("'CreatedByName':'{0}',", item.CreatedByName);
                ret.AppendFormat("'LastUpdatedBy':'{0}',", item.LastUpdatedBy);
                ret.AppendFormat("'Action':'{0}'", 1);
                ret.Append("}");
            }
            string result = string.Empty;
            if (ret.Length > 0)
            {
                result = ret.ToString().Replace("'", "\"");
            }
            return result;
        }
        public string GetGrid(int userId, string session, int currPage, int NumberRowOfPage, string funcPara)
        {
            StringBuilder ret = new StringBuilder();
            //string pInput = string.Format("<InputValue UserID='{0}' Session='{1}' PageIndex='{2}' RowsPerPage='{3}' {4}/>", userId, session, currPage, NumberRowOfPage, inputValue);
            string InputValue = CXmlPara.CreatePara(new CPara[]
                {
                    new CPara("PageIndex", currPage.ToString()),
                    new CPara("RowsPerPage", NumberRowOfPage.ToString()),
                },
                funcPara
            );
            COutputValue outputValue = new COutputValue();
            CEmployee[] list = service.GetEmployeeList(InputValue, ref outputValue);
            if (list != null && list.Length > 0)
            {
                ret.Append("{");
                ret.AppendFormat("'currpage':'{0}',", currPage);
                ret.AppendFormat("'totalpages':'{0}',", outputValue.TotalPage);
                ret.AppendFormat("'totalrecords':'{0}',", outputValue.TotalRow);
                ret.Append("'invdata':[");
                foreach (var item in list)
                {
                    ret.Append(GetItem(item));
                    if (item != list[list.Length - 1])
                    {
                        ret.Append(",");
                    }
                }
                ret.Append("]");
                ret.Append("}");
            }
            string result = string.Empty;
            if (ret.Length > 0)
            {
                result = ret.ToString().Replace("'", "\"");
            }
            return result;
        }
        public string GetEmployeeList(string funcPara)
        {
            StringBuilder ret = new StringBuilder();
            //string inputValue = string.Format("<InputValue UserID='{0}' Session='{1}' PageIndex='{2}' RowsPerPage='{3}' {4}/>", "", "", "", "", InputValue);
            string InputValue = CreatePara(funcPara);
            COutputValue outputValue = new COutputValue();
            CEmployee[] list = service.GetEmployeeList(InputValue, ref outputValue);
            if (list != null && list.Length > 0)
            {
                ret.Append("[");
                foreach (var item in list)
                {
                    ret.Append(GetItem(item));
                    if (item != list[list.Length - 1])
                    {
                        ret.Append(",");
                    }
                }
                ret.Append("]");
            }
            return ret.ToString();
        }

        public string GetEmployee(string InputValue)
        {
            string strInputValue = CreatePara(InputValue);
            StringBuilder ret = new StringBuilder();
            CEmployee vendor = service.GetEmployee(strInputValue);
            return GetItem(vendor);
        }
        public string Update(string InputValue)
        {
            string strInputValue = CreatePara(InputValue);
            StringBuilder ret = new StringBuilder();
            CApplicationMessage message = service.UpdateEmployee(strInputValue);
            if (message != null)
            {
                ret.Append("{");
                ret.AppendFormat("ID:'{0}',\n", message.ID);
                ret.AppendFormat("Code:'{0}',\n", message.Code);
                ret.AppendFormat("Name:'{0}'\n", message.Name);
                ret.Append("}");
            }
            return ret.ToString();
        }
    }
}