using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ServiceREF.CoreService;
using System.Text;
using ServiceREF.InventoryService;
using ServiceREF.GeneralLedgerService;
using FWS.VnAccounting.Presentation.WebApp.Mods.Core;
using FWS.VnAccounting.Presentation.WebApp.Mods.Global;

namespace FWS.VnAccounting.Presentation.WebApp.Mods.Inventory.Class
{
    public class CTranferStockUI
    {
        #region private Information

        private InventoryService iv_service;
        private ServiceREF.CoreService.CoreService core_service;
        private GeneralLedgerService gl_service;

        #endregion
        public CTranferStockUI()
        {
          iv_service = new InventoryService();
            core_service = new ServiceREF.CoreService.CoreService();
            gl_service = new GeneralLedgerService();
         }
        public string GetGrid(int userId, string session, int currPage, int NumberRowOfPage, string inputValue)
        {
            string result = "";
            ServiceREF.InventoryService.COutputValue outputValue = new ServiceREF.InventoryService.COutputValue();
            string InputValue = string.Format("<InputValue PageIndex='{0}' RowsPerPage='{1}' UserID='{2}' {3}/>", currPage, NumberRowOfPage, 1, inputValue);
           //iv_service.upda
           // CTranferStockDetail[] list = iv_service.GetTra(InputValue, ref outputValue);
            //result = CGrid.ToJsonForHandle<CInwardDetail>(userId, 15, list, currPage, outputValue.TotalPage, outputValue.TotalRow);

            return result;
        }
        public string Update(string inputValue)
        {
            string InputValue = CXmlPara.CreatePara(inputValue);
            ServiceREF.InventoryService.CApplicationMessage message = iv_service.UpdateTransfer(InputValue);
            return CJson.SerializeObject(message);
        }
        public string GetStocks(int userID, string session, string inputValue)
        {
            string InputValue = CXmlPara.CreatePara(inputValue);
            ServiceREF.InventoryService.InventoryService service = new InventoryService();
            ServiceREF.InventoryService.COutputValue pageinfo = new ServiceREF.InventoryService.COutputValue();
            CStock[] list = service.GetInventoryStockList(InputValue, ref pageinfo);
            StringBuilder ret = new StringBuilder();
            ret.Append("[");
            foreach (CStock cp in list)
            {
                ret.Append("{");
                ret.AppendFormat("'id':'{0}',", cp.ID);
                ret.AppendFormat("'text':'{0}',", cp.Name);
                ret.AppendFormat("'value':'{0}'", cp.ID);
                ret.Append("}");
                if (cp != list[list.Length - 1])
                {
                    ret.Append(",");
                }
            }
            ret.Append("]");
            return ret.ToString();
        }
    }
}