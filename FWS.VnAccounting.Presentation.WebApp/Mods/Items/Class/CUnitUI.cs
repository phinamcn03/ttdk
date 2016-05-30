using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

using FWS.VnAccounting.Presentation.WebApp.Mods.Core;
using ServiceREF.InventoryService;
using System.Text;

namespace FWS.VnAccounting.Presentation.WebApp.Mods.Items
{
    public class CUnitUI
    {
        InventoryService service;
        public CUnitUI()
        {
            service = new ServiceREF.InventoryService.InventoryService();
        }
        protected string GetItem(CUnit item)
        {
            StringBuilder ret = new StringBuilder();
            ret.Append("{");
            ret.AppendFormat("'ID':'{0}',", item.ID);
            ret.AppendFormat("'Code':'{0}',", item.Code);
            ret.AppendFormat("'Name':'{0}',", item.Name);
            ret.AppendFormat("'Description':'{0}',", item.Description);
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
            StringBuilder ret = new StringBuilder();
            //string InputValue = string.Format("<InputValue PageIndex='{0}' RowsPerPage='{1}' {2}/>", currPage, NumberRowOfPage, inputValue);
            string InputValue = CXmlPara.CreatePara(new CPara[]
                {
                    new CPara("PageIndex", currPage.ToString()),
                    new CPara("RowsPerPage", NumberRowOfPage.ToString()),
                },
                funcPara
            );

            COutputValue outputValue = new COutputValue();
            CUnit[] list = service.GetInventoryUnitList(InputValue, ref outputValue);
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
        public string GetUnit(string InputValue)
        {
            InventoryService service = new InventoryService();
            CUnit inventoryUnit = service.GetInventoryUnit(InputValue);
            StringBuilder ret = new StringBuilder();
            ret.Append("{");
            ret.AppendFormat("ID:'{0}',\n", inventoryUnit.ID);
            ret.AppendFormat("Code:'{0}',\n", inventoryUnit.Code);
            ret.AppendFormat("Name:'{0}',\n", inventoryUnit.Name);
            ret.AppendFormat("Active:'{0}',\n", inventoryUnit.Active);
            ret.AppendFormat("Description:'{0}'\n", inventoryUnit.Description);
            ret.Append("}");
            return ret.ToString();
        }

        public string Update(string InputValue)
        {
            InventoryService service = new InventoryService();
            CApplicationMessage message = service.UpdateInventoryUnit(InputValue);
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