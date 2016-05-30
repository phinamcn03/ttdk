using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Text;
using FWS.VnAccounting.Presentation.WebApp.Mods.Core;
using FWS.VnAccounting.Presentation.WebApp.Mods.Global;

namespace FWS.VnAccounting.Presentation.WebApp.Mods.ACore.Class
{
    public class CVoucherUI
    {
        private ServiceREF.CoreService.CoreService core_service = new ServiceREF.CoreService.CoreService();
        private ServiceREF.GeneralLedgerService.GeneralLedgerService gl_service = new ServiceREF.GeneralLedgerService.GeneralLedgerService();
        private ServiceREF.InventoryService.InventoryService iv_service = new ServiceREF.InventoryService.InventoryService();

        public string GetGrid(int gridID, int currPage, int NumberRowOfPage, string exAttribute)
        {
            string InputValue = CXmlPara.CreatePara(new CPara[]{
                    new CPara("PageIndex", currPage.ToString()),
                    new CPara("NumberRowOfPage", NumberRowOfPage.ToString())
                },
                exAttribute
            );
            ServiceREF.GeneralLedgerService.COutputValue outputValue = new ServiceREF.GeneralLedgerService.COutputValue();
            ServiceREF.GeneralLedgerService.CTransactionDetail[] list = gl_service.GetTransactionDetail(InputValue);
            return CGrid.ToJsonForHandle<ServiceREF.GeneralLedgerService.CTransactionDetail>(0, gridID, list, currPage, outputValue.TotalPage, outputValue.TotalRow);
        }

        public string GetTransaction(string exAttribute)
        {
            string InputValue = CXmlPara.CreatePara(exAttribute);
            ServiceREF.GeneralLedgerService.CTransaction item = gl_service.GetTransaction(InputValue);
            return CJson.SerializeObject(item);
        }
        public string CreateTransaction(string inputValue)
        {
            ServiceREF.GeneralLedgerService.CApplicationMessage message = gl_service.CreateTransaction(inputValue);
            return CJson.SerializeObject(message);
        }
        public string UpdateTransaction(string inputValue)
        {
            ServiceREF.GeneralLedgerService.CApplicationMessage message = gl_service.UpdateTransaction(inputValue);
            return CJson.SerializeObject(message);
        }
        public string GetPerson(string exAttribute)
        {
            string InputValue = CXmlPara.CreatePara(exAttribute);
            ServiceREF.CoreService.CPerson item = core_service.GetPerson(InputValue);
            return CJson.SerializeObject(item);
        }
        public string GetPersonAutoComplete(string funcPara)
        {
            StringBuilder ret = new StringBuilder();
            string InputValue = CXmlPara.CreatePara(funcPara);

            ServiceREF.CoreService.COutputValue outputValue = new ServiceREF.CoreService.COutputValue();
            ServiceREF.CoreService.CPerson[] list = core_service.GetPersonList(InputValue, ref outputValue);
            if (list != null && list.Length > 0)
            {
                foreach (var item in list)
                {
                    ret.AppendFormat("{0}|{1}|{2}|{3}|{4}|{5}\n", item.Code, item.Name, item.TaxNo, item.Address, item.Email, item.ID);
                }
            }
            string result = string.Empty;
            if (ret.Length > 0)
            {
                result = ret.ToString(0, ret.Length - 1);
            }
            return result;
        }

        public string GetProductAutoComplete(int currPage, int NumberRowOfPage, string funcPara)
        {
            StringBuilder ret = new StringBuilder();
            string InputValue = CXmlPara.CreatePara(new CPara[]
                {
                    new CPara("PageIndex", currPage.ToString()),
                    new CPara("RowsPerPage", NumberRowOfPage.ToString()),
                },
                funcPara
            );

            ServiceREF.InventoryService.COutputValue pageinfo = new ServiceREF.InventoryService.COutputValue();
            ServiceREF.InventoryService.CItems[] list = iv_service.GetInventoryItemsList(InputValue, ref pageinfo);
            if (list != null && list.Length > 0)
            {
                foreach (var item in list)
                {
                    ret.AppendFormat("{0}|{1}|{2}|{3}|{4}|{5}|{6}|{7}|{8}|{9}\n", item.Code, item.Name, item.ID, item.UnitName, item.CreditAccountName, item.DebitAccountName, item.SalePrice, item.UnitID, item.CreditAccount, item.DebitAccount);
                }
            }
            string result = string.Empty;
            if (ret.Length > 0)
                result = ret.ToString(0, ret.Length - 1);
            return result;
        }

        public string GetStockAutoComplete(string funcPara)
        {
            StringBuilder ret = new StringBuilder();
            string InputValue = CXmlPara.CreatePara(funcPara);

            ServiceREF.InventoryService.COutputValue outputValue = new ServiceREF.InventoryService.COutputValue();
            ServiceREF.InventoryService.CStock[] list = iv_service.GetInventoryStockList(InputValue, ref outputValue);
            if (list != null && list.Length > 0)
            {
                foreach (var item in list)
                    ret.AppendFormat("{0}|{1}|{2}\n", item.Code, item.Name, item.ID);
            }
            string result = string.Empty;
            if (ret.Length > 0)
            {
                result = ret.ToString(0, ret.Length - 1);
            }
            return result;
        }
        public string GetAccountAutoComplete(string funcPara)
        {
            StringBuilder ret = new StringBuilder();
            string InputValue = CXmlPara.CreatePara(funcPara);

            ServiceREF.GeneralLedgerService.COutputValue outputValue = new ServiceREF.GeneralLedgerService.COutputValue();
            ServiceREF.GeneralLedgerService.CAccountList[] list = gl_service.GetAccountList(InputValue, ref outputValue);
            if (list != null && list.Length > 0)
            {
                foreach (var item in list)
                    ret.AppendFormat("{0}|{1}|{2}|{3}|{4}\n", item.Code, item.Name, item.ID, item.ChildCount, item.Level);
            }
            string result = string.Empty;
            if (ret.Length > 0)
            {
                result = ret.ToString(0, ret.Length - 1);
            }
            return result;
        }
        public string GetTransactionAutoComplete(string funcPara)
        {
            StringBuilder ret = new StringBuilder();
            string InputValue = CXmlPara.CreatePara(funcPara);
            ServiceREF.GeneralLedgerService.CTransaction item = gl_service.GetTransaction(InputValue);
            if (item != null)
            {
                DateTime date = DateTime.Now;
                if (item.RefDate != null)
                    date = (DateTime)item.RefDate;
                ret.AppendFormat("{0}|{1}|{2}|{3}|{4}|{5}|{6}|{7}|{8}|{9}|{10}|{11}|{12}\n",
                                                item.ID, item.RefNo, item.PartnerName, item.PartnerID,
                                                date.ToString("yyyy-MM-dd"), item.RefID, item.TotalAmount, item.Amount,
                                                item.IsPosted, item.IsCancel, item.IsBalance,
                                                item.UnPayAmount, item.PayAmount);
            }
            return ret.ToString();
        }
        public string GetTransactionListAutoComplete(string funcPara)
        {
            StringBuilder ret = new StringBuilder();
            string InputValue = CXmlPara.CreatePara(funcPara);
            ServiceREF.GeneralLedgerService.COutputValue outputValue = new ServiceREF.GeneralLedgerService.COutputValue();
            ServiceREF.GeneralLedgerService.CTransaction[] list = gl_service.GetTransactionList(InputValue, ref outputValue);
            if (list != null && list.Length > 0)
            {
                DateTime date = DateTime.Now;
                foreach (var item in list)
                {
                    if (item.RefDate != null)
                        date = (DateTime)item.RefDate;
                    ret.AppendFormat("{0}|{1}|{2}|{3}|{4}|{5}|{6}|{7}|{8}|{9}|{10}|{11}|{12}\n",
                                    item.ID, item.RefNo, item.PartnerName, item.PartnerID,
                                    date.ToString("yyyy-MM-dd"), item.RefID, item.TotalAmount, item.Amount,
                                    item.IsPosted, item.IsCancel, item.IsBalance,
                                    item.UnPayAmount, item.PayAmount);
                }
            }
            string result = string.Empty;
            if (ret.Length > 0)
            {
                result = ret.ToString(0, ret.Length - 1);
            }
            return result;
        }
        public string GetAccountList(string funcPara)
        {
            StringBuilder ret = new StringBuilder();
            string inputValue = CXmlPara.CreatePara(funcPara);
            ServiceREF.GeneralLedgerService.COutputValue outputValue = new ServiceREF.GeneralLedgerService.COutputValue();
            ServiceREF.GeneralLedgerService.CAccountList[] lst = gl_service.GetAccountList(inputValue, ref  outputValue);
            ret.Append("[");
            foreach (ServiceREF.GeneralLedgerService.CAccountList cp in lst)
            {
                ret.Append("{");
                ret.AppendFormat("'id':'{0}',", cp.ID);
                ret.AppendFormat("'text':'{0}',", cp.DisplayName);
                ret.AppendFormat("'value':'{0}'", cp.ID);
                ret.Append("}");
                if (cp != lst[lst.Length - 1])
                {
                    ret.Append(",");
                }
            }
            ret.Append("]");
            return ret.ToString();
        }
        public string GetTaxList(string funcPara)
        {
            StringBuilder ret = new StringBuilder();
            string inputValue = CXmlPara.CreatePara(funcPara);
            ServiceREF.InventoryService.COutputValue outputValue = new ServiceREF.InventoryService.COutputValue();
            ServiceREF.InventoryService.CTax[] lst = iv_service.GetInventoryTaxList(inputValue, ref  outputValue);
            ret.Append("[");
            foreach (ServiceREF.InventoryService.CTax cp in lst)
            {
                ret.Append("{");
                ret.AppendFormat("'id':'{0}',", cp.ID);
                ret.AppendFormat("'text':'{0}',", cp.Name);
                ret.AppendFormat("'value':'{0}',", cp.Percent);
                ret.AppendFormat("'id_value':'{0}'", cp.ID + "|" + cp.Percent);
                ret.Append("}");
                if (cp != lst[lst.Length - 1])
                {
                    ret.Append(",");
                }
            }
            ret.Append("]");
            return ret.ToString();
        }
    }
}