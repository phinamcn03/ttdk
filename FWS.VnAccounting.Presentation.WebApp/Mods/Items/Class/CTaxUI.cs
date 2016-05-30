using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Text;

using FWS.Framework.Log;
using ServiceREF.InventoryService;
using FWS.VnAccounting.Presentation.WebApp.Mods.Core;
using FWS.VnAccounting.Presentation.WebApp.Mods.Global;
namespace FWS.VnAccounting.Presentation.WebApp.Mods.Items
{
    public class CTaxUI: CBaseItemUI
    {
        InventoryService service;
        public CTaxUI()
        {
            service = new InventoryService();
        }
        protected string GetItem(CTax item)
        {
            StringBuilder ret = new StringBuilder();
            ret.Append("{");
            ret.AppendFormat("'ID':'{0}',", item.ID);
            ret.AppendFormat("'Code':'{0}',", item.Code);
            ret.AppendFormat("'Name':'{0}',", item.Name);
            ret.AppendFormat("'Description':'{0}',", item.Description);
            ret.AppendFormat("'Percent':'{0}',", item.Percent);
            ret.AppendFormat("'Action':'{0}'", 1);
            ret.Append("}");
            string result = string.Empty;
            if (ret.Length > 0)
            {
                result = ret.ToString().Replace("'", "\"");
            }
            return result;
        }
        public string GetGrid(int userId, string session, int currPage, int NumberRowOfPage, string funcPara)
        {
            string result = "";            
            //string InputValue = string.Format("<InputValue PageIndex='{0}' RowsPerPage='{1}' {2}/>", currPage, NumberRowOfPage, inputValue);
            string InputValue = CXmlPara.CreatePara(new CPara[]
                {
                    new CPara("PageIndex", currPage.ToString()),
                    new CPara("RowsPerPage", NumberRowOfPage.ToString()),
                },
                funcPara
            );

            COutputValue outputValue = new COutputValue();
            CTax[] list = service.GetInventoryTaxList(InputValue, ref outputValue);
            result = CGrid.ToJsonForHandle<CTax>(userId, 5, list, currPage, outputValue.TotalPage, outputValue.TotalRow);
            
            return result;
        }
        
        public string GetTax(string InputValue)
        {
            string strInputValue = CreatePara(InputValue);
            StringBuilder ret = new StringBuilder();
            CTax tax = service.GetInventoryTax(strInputValue);
            return GetItem(tax);
        }
        public string Update(string InputValue)
        {
            string strInputValue = CreatePara(InputValue);
            InventoryService service = new InventoryService();
            CApplicationMessage message = service.UpdateInventoryTax(strInputValue);
            StringBuilder ret = new StringBuilder();
            ret.Append("{");
            ret.AppendFormat("ID:'{0}',\n", message.ID);
            ret.AppendFormat("Code:'{0}',\n", message.Code);
            ret.AppendFormat("Name:'{0}'\n", message.Name);
            ret.Append("}");
            return ret.ToString();
        }
    }
}