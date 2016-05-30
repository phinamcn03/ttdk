using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

using FWS.VnAccounting.Presentation.WebApp.Mods.Core;
using ServiceREF.InventoryService;
using System.Text;
using FWS.VnAccounting.Presentation.WebApp.Mods.Global;

namespace FWS.VnAccounting.Presentation.WebApp.Mods.Items
{
    public class CStockUI
    {
        ServiceREF.InventoryService.InventoryService service;
        public CStockUI()
        {
            service = new ServiceREF.InventoryService.InventoryService();
        }
        public string GetItem(string funcPara)
        {
            //string pInput = string.Format("<InputValue UserID=\"{0}\" Session=\"{1}\" {2}/>", userId, session, inputvalue);
            string InputValue = CXmlPara.CreatePara(funcPara);

            CStock stock = service.GetInventoryStock(InputValue);
            StringBuilder ret = new StringBuilder();
            if (stock != null)
            {
                ret.Append("{");
                ret.AppendFormat("ID:'{0}',\n", stock.ID);
                ret.AppendFormat("Code:'{0}',\n", stock.Code);
                ret.AppendFormat("Name:'{0}',\n", stock.Name);
                ret.AppendFormat("ParentID:'{0}',\n", stock.ParentID);
                ret.AppendFormat("Description:'{0}'\n", stock.Description);
                ret.Append("}");
            }
            else
            {
                ret.Append("{}");
            }
            return ret.ToString();
        }
        public string GetItems(string funcPara)
        {            
            //string pInput = string.Format("<InputValue UserID=\"{0}\" Session=\"{1}\" {2}/>", userID, session, inputValue);
            string InputValue = CXmlPara.CreatePara(funcPara);

            COutputValue pageinfo = new COutputValue();
            CStock[] list = service.GetInventoryStockList(InputValue, ref pageinfo);
            StringBuilder ret = new StringBuilder();
            ret.Append("[");
            foreach (CStock stock in list)
            {
                if (stock != null)
                {
                    ret.Append("{");
                    ret.AppendFormat("ID:'{0}',\n", stock.ID);
                    ret.AppendFormat("Code:'{0}',\n", stock.Code);
                    ret.AppendFormat("Name:'{0}',\n", stock.Name);
                    ret.AppendFormat("ParentID:'{0}',\n", stock.ParentID);
                    ret.AppendFormat("Description:'{0}'\n", stock.Description);
                    ret.Append("}");
                    if (stock != list[list.Length - 1])
                        ret.Append(",");
                }
            }
            ret.Append("]");
            return ret.ToString();
        }
        public string GetItem(int userId, string session, int Page, int numPage, int totalRows)
        {
            return "";
        }
        public string GetItems(int currPage, int NumberRowOfPage, string funcPara)
        {
            //string InputValue = string.Format("<InputValue PageIndex='{0}' RowsPerPage='{1}' {2}/>", currPage, NumberRowOfPage, inputValue);
            string InputValue = CXmlPara.CreatePara(new CPara[]
                {
                    new CPara("PageIndex", currPage.ToString()),
                    new CPara("RowsPerPage", NumberRowOfPage.ToString()),
                },
                funcPara
            );
            COutputValue pageinfo = new COutputValue();
            CStock[] list = service.GetInventoryStockList(InputValue, ref pageinfo);
            return CGrid.ToJsonForHandle<CStock>(1, 1, list, currPage, pageinfo.TotalPage, pageinfo.TotalRow);
        }
        public string UpdateItem(string funcPara)
        {
            //string pInput = string.Format("<InputValue UserID=\"{0}\" Session=\"{1}\" {2}/>", userID, session, inputValue);
            string InputValue = CXmlPara.CreatePara(funcPara);

            CApplicationMessage message = service.UpdateInventoryStock(InputValue);
            StringBuilder ret = new StringBuilder();
            ret.Append("{");
            try
            {
                ret.AppendFormat("Code:'{0}',\n", message.Code);
                ret.AppendFormat("Name:'{0}'\n", message.Name);
            }
            catch (Exception ex)
            {

            }
            ret.Append("}");
            return ret.ToString();
        }
    }
}