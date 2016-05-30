using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

using FWS.VnAccounting.Presentation.WebApp.Mods.Core;
using ServiceREF.InventoryService;
using System.Text;

namespace FWS.VnAccounting.Presentation.WebApp.Mods.Items
{
    public class CActiveIngredientUI:CBaseItemUI
    {
        InventoryService service;
        public CActiveIngredientUI()
        {
            service = new ServiceREF.InventoryService.InventoryService();
        }
        protected string GetItem(CActiveIngredient item)
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
            CActiveIngredient[] list = service.GetInventoryActiveIngredientList(InputValue, ref outputValue);
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
        public string GetActiveIngredient(string InputValue)
        {
            InventoryService service = new InventoryService();
            string sInputValue = CreatePara(InputValue);
            CActiveIngredient inventoryActiveIngredient = service.GetInventoryActiveIngredient(sInputValue);
            StringBuilder ret = new StringBuilder();
            ret.Append("{");
            ret.AppendFormat("ID:'{0}',\n", inventoryActiveIngredient.ID);
            ret.AppendFormat("Code:'{0}',\n", inventoryActiveIngredient.Code);
            ret.AppendFormat("Name:'{0}',\n", inventoryActiveIngredient.Name);
            ret.AppendFormat("Active:'{0}',\n", inventoryActiveIngredient.Active);
            ret.AppendFormat("Description:'{0}'\n", inventoryActiveIngredient.Description);
            ret.Append("}");
            return ret.ToString();
        }

        public string Update(string InputValue)
        {
            InventoryService service = new InventoryService();
            CApplicationMessage message = service.UpdateInventoryActiveIngredient(InputValue);
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