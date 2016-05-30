using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ServiceREF.CoreService;
using FWS.VnAccounting.Presentation.WebApp.Mods.Core;
using System.Text;
using ServiceREF.InventoryService;
using FWS.VnAccounting.Presentation.WebApp.Mods.Global;

namespace FWS.VnAccounting.Presentation.WebApp.Mods.AP.Class
{
    public class PurchaseOrderUI
    {
        ServiceREF.CoreService.CoreService core_service = new ServiceREF.CoreService.CoreService();
        ServiceREF.InventoryService.InventoryService service = new ServiceREF.InventoryService.InventoryService();
        public string GetNextRefNo(string pRefType)
        {
            pRefType = pRefType == "" ? "4" : pRefType;
            string InputValue = CXmlPara.CreatePara(new CPara[]{
                    new CPara("RefDate", DateTime.Now.ToString("yyyy-MM-dd")),
                    new CPara("RefType", pRefType)
                },
                ""
            );
            CRefNo refno = core_service.GetNextRefNo(InputValue);
            return CJson.SerializeObject(refno);
        }

        public string GetProdutAutoComplete(int userId, string session, int currPage, int NumberRowOfPage, string funcPara)
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

            ServiceREF.InventoryService.COutputValue pageinfo = new ServiceREF.InventoryService.COutputValue();
            CItems[] list = service.GetInventoryItemsList(InputValue, ref pageinfo);
            if (list != null && list.Length > 0)
            {
                foreach (var item in list)
                {
                    //ret.AppendFormat("{0}|{1}|{2}|{3}|{4}|{5}|{6}|{7}\n", item.Code, item.Name, item.ID, item.UnitName, item.CreditAccount, item.DebitAccount, item.SalePrice,item.UnitID);
                    ret.AppendFormat("{0}|{1}|{2}|{3}|{4}|{5}|{6}|{7}|{8}|{9}\n", item.Code, item.Name, item.ID, item.UnitName, item.CreditAccountName, item.DebitAccountName, item.SalePrice, item.UnitID, item.CreditAccount, item.DebitAccount);
                }

            }
            string result = string.Empty;
            if (ret.Length > 0)
            {
                result = ret.ToString(0, ret.Length - 1);
            }
            return result;
        }

        public string CreateTransaction(string Input)
        {
            ServiceREF.GeneralLedgerService.GeneralLedgerService GLS = new ServiceREF.GeneralLedgerService.GeneralLedgerService();
            ServiceREF.GeneralLedgerService.CApplicationMessage message = GLS.CreateTransaction(Input);
            return CJson.SerializeObject(message);
        }

        public string GetAccountList(string Input)
        {
            ServiceREF.GeneralLedgerService.GeneralLedgerService GLS = new ServiceREF.GeneralLedgerService.GeneralLedgerService();
            ServiceREF.GeneralLedgerService.COutputValue pageinfo = new ServiceREF.GeneralLedgerService.COutputValue();
            ServiceREF.GeneralLedgerService.CAccountList[] list = GLS.GetAccountList(Input, ref pageinfo);
            StringBuilder ret = new StringBuilder();
            if (list != null && list.Length > 0)
            {
                foreach (var item in list)
                {
                    ret.AppendFormat("{0}|{1}|{2}\n", item.ID, item.Code, item.DisplayName);
                }

            }
            string result = string.Empty;
            if (ret.Length > 0)
            {
                result = ret.ToString(0, ret.Length - 1);
            }
            return result;
        }
        public string GetGrid(int currPage, int NumberRowOfPage, string exAttribute)
        {
            string InputValue = CXmlPara.CreatePara(new CPara[]{
                    new CPara("PageIndex", currPage.ToString()),
                    new CPara("NumberRowOfPage", NumberRowOfPage.ToString())
                },
                exAttribute
            );
            ServiceREF.GeneralLedgerService.COutputValue outputValue = new ServiceREF.GeneralLedgerService.COutputValue();
            ServiceREF.GeneralLedgerService.GeneralLedgerService service = new ServiceREF.GeneralLedgerService.GeneralLedgerService();
            ServiceREF.GeneralLedgerService.CTransaction[] list = service.GetTransactionList(InputValue, ref outputValue);
            return CGrid.ToJsonForHandle<ServiceREF.GeneralLedgerService.CTransaction>(0, 20, list, currPage, outputValue.TotalPage, outputValue.TotalRow);
        }
    }
}