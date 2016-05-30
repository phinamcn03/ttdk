using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Text;
using ServiceREF.VendorService;

using FWS.VnAccounting.Presentation.WebApp.Mods.Core;
namespace FWS.VnAccounting.Presentation.WebApp.Mods.Items.Class
{
    public class CVendorUI: CBaseItemUI
    {
        VendorService service;
        public CVendorUI()
        {
            service = new VendorService();
        }
        protected string GetItem(CVendor item)
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
            string result = "";
            string InputValue = CXmlPara.CreatePara(new CPara[]
                {
                    new CPara("PageIndex", currPage.ToString()),
                    new CPara("RowsPerPage", NumberRowOfPage.ToString()),
                },
                funcPara
            );
            COutputValue outputValue = new COutputValue();
            CVendor[] list = service.GetVendorList(InputValue, ref outputValue);
            result = CGrid.ToJsonForHandle<CVendor>(userId, 7, list, currPage, outputValue.TotalPage, outputValue.TotalRow);
            return result;
        }


        public string GetDataAutoComplete(int userId, string session, int currPage, int NumberRowOfPage, string funcPara)
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
            CVendor[] list = service.GetVendorList(InputValue, ref outputValue);
            if (list != null && list.Length > 0)
            {
                 foreach (var item in list)
                {
                    ret.AppendFormat("{0}|{1}|{2}|{3}|{4}|{5}\n",item.Code,item.Name,item.TaxNo,item.Address,item.Email,item.ID);
                 }
               
            }
            string result = string.Empty;
            if (ret.Length > 0)
            {
                result = ret.ToString(0, ret.Length - 1);
            }
            return result;
        }
        public string GetVendorList(string funcPara)
        {
            StringBuilder ret = new StringBuilder();
            //string inputValue = string.Format("<InputValue {0}/>", InputValue);
            string InputValue = CXmlPara.CreatePara(funcPara);

            COutputValue outputValue = new COutputValue();
            CVendor[] list = service.GetVendorList(InputValue, ref outputValue);
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

        public string GetVendor(string InputValue)
        {

            StringBuilder ret = new StringBuilder();
            CVendor vendor = service.GetVendor(InputValue);
            return GetItem(vendor);
        }
        public string Update(string InputValue)
        {
            string strInputValue = CreatePara(InputValue);
            StringBuilder ret = new StringBuilder();
            CApplicationMessage message = service.UpdateItem(strInputValue);
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