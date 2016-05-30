﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Text;
using ServiceREF.InventoryService;
using ServiceREF.GeneralLedgerService;
using FWS.VnAccounting.Presentation.WebApp.Mods.Global;
using FWS.VnAccounting.Presentation.WebApp.Mods.Core;
using ServiceREF.CoreService;
namespace FWS.VnAccounting.Presentation.WebApp.Mods.Inventory
{
    public class CoreStockUI
    {
        #region private Information
        private InventoryService iv_service;
        private ServiceREF.CoreService.CoreService core_service;
        private GeneralLedgerService gl_service;
       #endregion
        public CoreStockUI()
        {
          iv_service = new InventoryService();
            core_service = new ServiceREF.CoreService.CoreService();
            gl_service = new GeneralLedgerService();
         }
        #region CorewardStock
        public string GetProdutAutoComplete(int currPage, int NumberRowOfPage, string funcPara)
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
            CItems[] list = iv_service.GetInventoryItemsList(InputValue, ref pageinfo);
            if (list != null && list.Length > 0)
            {
                foreach (var item in list)
                {
                    //ret.AppendFormat("{0}|{1}|{2}|{3}|{4}|{5}|{6}|{7}\n", item.Code, item.Name, item.ID, item.UnitName, item.CreditAccount, item.DebitAccount, item.SalePrice,item.UnitID);
                    ret.AppendFormat("{0}|{1}|{2}|{3}|{4}|{5}|{6}|{7}|{8}|{9}|{10}|{11}|{12}|{13}\n", item.Code, item.Name, item.ID, item.UnitName, item.CreditAccountName, item.DebitAccountName, item.SalePrice, item.UnitID, item.CreditAccount, item.DebitAccount, item.SerialNo, item.InwardAmount, item.OutwardAmount, item.ExpDate);
                }

            }
            string result = string.Empty;
            if (ret.Length > 0)
            {
                result = ret.ToString(0, ret.Length - 1);
            }
            return result;
        }
        public string GetGridCoreStock(int currPage, int NumberRowOfPage, string inputValue, int refType)
        {
            CSession session = new CSession();
            int userId = session.UserID;
            string result = "";
            //  string InputValue = CXmlPara.CreatePara(inputValue);
            string InputValue = CXmlPara.CreatePara(new CPara[]
                {
                    new CPara("PageIndex", currPage.ToString()),
                    new CPara("RowsPerPage", NumberRowOfPage.ToString()),
                    new CPara("RefType", refType.ToString()),
                },
              inputValue
          );
            string InputValue1 = string.Format("<InputValue PageIndex=\"{0}\" RowsPerPage=\"{1}\" UserID=\"{2}\" RefType=\"{3}\" {4}/>", currPage, NumberRowOfPage, 1, refType, inputValue);
            ServiceREF.InventoryService.COutputValue outputValue = new ServiceREF.InventoryService.COutputValue();
            if (refType == 7)
            {
                CInward[] list = iv_service.GetInwardList(InputValue, ref outputValue);
                result = CGrid.ToJsonForHandle<CInward>(userId, 14, list, currPage, outputValue.TotalPage, outputValue.TotalRow);
            }
            else if (refType == 8)
            {
                COutward[] list = iv_service.GetOutwardList(InputValue, ref outputValue);
                result = CGrid.ToJsonForHandle<COutward>(userId, 14, list, currPage, outputValue.TotalPage, outputValue.TotalRow);
            }
            if (refType == 9)
            {
                CTransactionsStock[] list = iv_service.GetTransferList(InputValue, ref outputValue);
                result = CGrid.ToJsonForHandle<CTransactionsStock>(userId, 31, list, currPage, outputValue.TotalPage, outputValue.TotalRow);
            }
            return result;
        }
        protected string GetInwardStock(CInward item)
        {
            StringBuilder ret = new StringBuilder();
            ret.Append("{");
            ret.AppendFormat("'ID':'{0}',", item.ID);
            ret.AppendFormat("'InwardNo':'{0}',", item.Code);
            ret.AppendFormat("'VoucherDate':'{0}',", item.VoucherDate);
            ret.AppendFormat("'Description':'{0}',", item.Description);
            ret.AppendFormat("'CreatedByName':'{0}',", item.CreatedBy);
            ret.AppendFormat("'Partner':'{0}',", item.PostedBy);
            ret.AppendFormat("'TotalAmount':'{0}',", item.Amount);
            ret.AppendFormat("'Action':'{0}'", 1);
            ret.Append("}");
            string result = string.Empty;
            if (ret.Length > 0)
            {
                result = ret.ToString().Replace("'", "\"");
            }
            return result;
        }
        public string Update(string InputValue, int refType)
        {
            ServiceREF.InventoryService.CApplicationMessage message = new ServiceREF.InventoryService.CApplicationMessage();
            if (refType == 7)
                message = iv_service.UpdateInward(InputValue);
            else if (refType == 8)
                message = iv_service.UpdateOutward(InputValue);
            return CJson.SerializeObject(message);
        }
        public string Post(string _inputValue, int refType)
        {
            string InputValue = CXmlPara.CreatePara(_inputValue);
            ServiceREF.InventoryService.CApplicationMessage message = new ServiceREF.InventoryService.CApplicationMessage();
            if (refType == 7)
                message = iv_service.PostInward(InputValue);
            else if (refType == 8)
                message = iv_service.PostOutward(InputValue);
            return CJson.SerializeObject(message);
        }
        public string UnPost(string _inputValue, int refType)
        {
            string InputValue = CXmlPara.CreatePara(_inputValue);
            ServiceREF.InventoryService.CApplicationMessage message = new ServiceREF.InventoryService.CApplicationMessage();
            if (refType == 7)
                message = iv_service.UnPostInward(InputValue);
            else if (refType == 8)
                message = iv_service.UnPostOutward(InputValue);
            return CJson.SerializeObject(message);
        }
        public string GetInwardStock(string exAttribute, int refType)
        {
            string InputValue = CXmlPara.CreatePara(exAttribute);
            if (refType == 7)
            {
                CInward inward = iv_service.GetInward(InputValue);
                return CJson.SerializeObject(inward);
            }
            else if (refType ==8)
            {
                COutward outward = iv_service.GetOutward(InputValue);
                return CJson.SerializeObject(outward);
            }
            else if (refType == 9)
            {
                CTransactionsStock outward = iv_service.GetTransfer(InputValue);
                return CJson.SerializeObject(outward);

            }
            else
            { return ""; }
        }
        #endregion
        #region CoreStockEntry
        public string GetGrid(int currPage, int NumberRowOfPage, string inputValue, int refType)
        {
            CSession session = new CSession();
            int userId = session.UserID;
            string result = "";
            ServiceREF.InventoryService.COutputValue outputValue = new ServiceREF.InventoryService.COutputValue();
         //   string InputValue = string.Format("<InputValue PageIndex='{0}' RowsPerPage='{1}' UserID='{2}' {3}/>", currPage, NumberRowOfPage, 1, inputValue);
            string InputValue = CXmlPara.CreatePara(new CPara[]
                {
                    new CPara("PageIndex", currPage.ToString()),
                    new CPara("RowsPerPage", NumberRowOfPage.ToString()),
                },
           inputValue
       );
            if (refType == 7)
            {
                CInwardDetail[] list = iv_service.GetInwardDetailList(InputValue, ref outputValue);
                result = CGrid.ToJsonForHandle<CInwardDetail>(userId, 15, list, currPage, outputValue.TotalPage, outputValue.TotalRow);
            }
            else if (refType == 8)
            {
                COutwardDetail[] list = iv_service.GetOutwardDetailList(InputValue, ref outputValue);
                result = CGrid.ToJsonForHandle<COutwardDetail>(userId, 46, list, currPage, outputValue.TotalPage, outputValue.TotalRow);

            }
            else if (refType == 9)
            {
                CTransactionsStockDetails[] list = iv_service.GetTransferDetails(InputValue, ref outputValue);
                result = CGrid.ToJsonForHandle<CTransactionsStockDetails>(userId, 32, list, currPage, outputValue.TotalPage, outputValue.TotalRow);

            }
            return result;
        }
        public string GetGridInwardStockEntry(int currPage, int NumberRowOfPage, string inputValue)
        {
            StringBuilder ret = new StringBuilder();
            string InputValue = string.Format("<InputValue PageIndex=\"{0}\" RowsPerPage=\"{1}\" {2}/>", currPage, NumberRowOfPage, inputValue);
            ServiceREF.InventoryService.COutputValue outputValue = new ServiceREF.InventoryService.COutputValue();
            CInwardDetail[] list = iv_service.GetInwardDetailList(InputValue, ref outputValue);
            if (list != null && list.Length > 0)
            {
                ret.Append("{");
                ret.AppendFormat("'currpage':'{0}',", currPage);
                ret.AppendFormat("'totalpages':'{0}',", outputValue.TotalPage);
                ret.AppendFormat("'totalrecords':'{0}',", outputValue.TotalRow);
                ret.Append("'invdata':[");
                foreach (var item in list)
                {
                    ret.Append(GetInwardStockEntry(item));
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
        protected string GetInwardStockEntry(CInwardDetail item)
        {
            StringBuilder ret = new StringBuilder();
            ret.Append("{");
            ret.AppendFormat("'ID':'{0}',", item.ID);
            ret.AppendFormat("'TotalAmount':'{0}',", item.Amount);
            ret.AppendFormat("'Action':'{0}'", 1);
            ret.Append("}");
            string result = string.Empty;
            if (ret.Length > 0)
            {
                result = ret.ToString().Replace("'", "\"");
            }
            return result;
        }
        public string GetAutoStock(string Input)
        {
            ServiceREF.InventoryService.COutputValue pageinfo = new ServiceREF.InventoryService.COutputValue();
            ServiceREF.InventoryService.InventoryService service = new ServiceREF.InventoryService.InventoryService();

            CStock[] list = service.GetInventoryStockList(Input, ref pageinfo);
            StringBuilder ret = new StringBuilder();
            if (list != null && list.Length > 0)
            {
                foreach (var item in list)
                {
                    ret.AppendFormat("{0}|{1}|{2}\n", item.ID, item.Code, item.Name);
                }

            }
            string result = string.Empty;
            if (ret.Length > 0)
            {
                result = ret.ToString(0, ret.Length - 1);
            }
            return result;
        }
        #endregion
        #region Defination
        public string GetIntDefinationList(string inputValue)
          {
              string _inputValue = string.Format("<InputValue TableName=\"inv.Inward\" ColumnName=\"{0}\"/>", inputValue);
              CIntDefination[] lst = core_service.GetIntDefinationList(_inputValue);
              StringBuilder ret = new StringBuilder();
              ret.Append("[");
              foreach (CIntDefination cp in lst)
              {
                  ret.Append("{");
                  ret.AppendFormat("'id':'{0}',", cp.ID);
                  ret.AppendFormat("'text':'{0}',", cp.Name);
                  ret.AppendFormat("'value':'{0}'", cp.DataValue);
                  ret.Append("}");
                  if (cp != lst[lst.Length - 1])
                  {
                      ret.Append(",");
                  }
              }
              ret.Append("]");
              return ret.ToString();
          }

          public string GetAccountList(string inputValue)
          {
              string _inputValue = string.Format("<InputValue FilterCode=\"{0}\"/>", inputValue);
              ServiceREF.GeneralLedgerService.COutputValue outputValue = new ServiceREF.GeneralLedgerService.COutputValue();
              CAccountList[] lst = gl_service.GetAccountList(_inputValue, ref outputValue);
              StringBuilder ret = new StringBuilder();
              ret.Append("[");
              foreach (CAccountList cp in lst)
              {
                  ret.Append("{");
                  ret.AppendFormat("'id':'{0}',", cp.ID);
                  ret.AppendFormat("'text':'{0}',", cp.Name);
                  ret.AppendFormat("'value':'{0}'", cp.Code);
                  ret.Append("}");
                  if (cp != lst[lst.Length - 1])
                  {
                      ret.Append(",");
                  }
              }
              ret.Append("]");
              return ret.ToString();
          }

          public string GetInventoryUnitList(string inputValue)
          {
              string _inputValue = string.Format("<InputValue {0}/>", inputValue);
              ServiceREF.InventoryService.COutputValue outputValue = new ServiceREF.InventoryService.COutputValue();
              CUnit[] lst = iv_service.GetInventoryUnitList(_inputValue, ref outputValue);
              StringBuilder ret = new StringBuilder();
              ret.Append("[");
              foreach (CUnit cp in lst)
              {
                  ret.Append("{");
                  ret.AppendFormat("'id':'{0}',", cp.ID);
                  ret.AppendFormat("'text':'{0}',", cp.Name);
                  ret.AppendFormat("'value':'{0}'", cp.Code);
                  ret.Append("}");
                  if (cp != lst[lst.Length - 1])
                  {
                      ret.Append(",");
                  }
              }
              ret.Append("]");
              return ret.ToString();
          }

          public string GetStockList(string inputValue)
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
             
          public string GetNextRefNo(string exAttribute)
          {
              string InputValue = CXmlPara.CreatePara(new CPara[]{
                    new CPara("RefDate", DateTime.Now.ToString("yyyy-MM-dd"))
                },
                  exAttribute
              );
              CRefNo refno = core_service.GetNextRefNo(InputValue);
              return CJson.SerializeObject(refno);
          }

          public string GetObjectName(string exAttribute, string inputType)
          {
              string ret = "";
              string InputValue = CXmlPara.CreatePara(new CPara[] { }, exAttribute);
              switch (inputType)
              {
                  case "1":
                      ServiceREF.CustomerService.CustomerService cus_service = new ServiceREF.CustomerService.CustomerService();
                      ServiceREF.CustomerService.CCustomer cus = cus_service.GetCustomer(InputValue);
                      ret = CJson.SerializeObject(cus);
                      break;
                  case "2":
                      ServiceREF.VendorService.VendorService ven_service = new ServiceREF.VendorService.VendorService();
                      ServiceREF.VendorService.CVendor ven = ven_service.GetVendor(InputValue);
                      ret = CJson.SerializeObject(ven);
                      break;
                  case "3":
                      ServiceREF.GeneralLedgerService.CEmployee emp = gl_service.GetEmployee(InputValue);
                      ret = CJson.SerializeObject(emp);
                      break;
              }
              return ret;
          }
          public string GetCusAutoComplete(int currPage, int NumberRowOfPage, string inputName, string inputType)
          {
              string _template = "{0}|{1}|{2}|{3}\n";
              StringBuilder result = new StringBuilder();
              string InputValue = CXmlPara.CreatePara(new CPara[] { }, inputName);
              switch (inputType)
              {
                  case "1":
                      ServiceREF.CustomerService.CustomerService cus_service = new ServiceREF.CustomerService.CustomerService();
                      ServiceREF.CustomerService.COutputValue cus_output = new ServiceREF.CustomerService.COutputValue();
                      ServiceREF.CustomerService.CCustomer[] cusList = cus_service.GetCustomerList(InputValue, ref cus_output);
                      foreach (var item in cusList)
                          result.AppendFormat(_template, item.ID, item.Code, item.Name, item.Address);
                      break;
                  case "2":
                      ServiceREF.VendorService.VendorService ven_service = new ServiceREF.VendorService.VendorService();
                      ServiceREF.VendorService.COutputValue ven_output = new ServiceREF.VendorService.COutputValue();
                      ServiceREF.VendorService.CVendor[] venList = ven_service.GetVendorList(InputValue, ref ven_output);
                      foreach (var item in venList)
                          result.AppendFormat(_template, item.ID, item.Code, item.Name, item.Address);
                      break;
              }
              return result.ToString();
          }
          public string GetDataAutoComplete(int currPage, int NumberRowOfPage, string inputName, string inputType)
          {
              string _template = "{0}|{1}|{2}\n";
              StringBuilder result = new StringBuilder();
              string InputValue = CXmlPara.CreatePara(new CPara[] { 
                 new CPara("PageIndex", currPage.ToString()),
                 new CPara("RowsPerPage", NumberRowOfPage.ToString()),
                 new CPara("Name", inputName),
            }, "");
              switch (inputType)
              {
                  case "1":
                      ServiceREF.CustomerService.CustomerService cus_service = new ServiceREF.CustomerService.CustomerService();
                      ServiceREF.CustomerService.COutputValue cus_output = new ServiceREF.CustomerService.COutputValue();
                      ServiceREF.CustomerService.CCustomer[] cusList = cus_service.GetCustomerList(InputValue, ref cus_output);
                      foreach (var item in cusList)
                          result.AppendFormat(_template, item.ID, item.Code, item.Name);
                      break;
                  case "2":
                      ServiceREF.VendorService.VendorService ven_service = new ServiceREF.VendorService.VendorService();
                      ServiceREF.VendorService.COutputValue ven_output = new ServiceREF.VendorService.COutputValue();
                      ServiceREF.VendorService.CVendor[] venList = ven_service.GetVendorList(InputValue, ref ven_output);
                      foreach (var item in venList)
                          result.AppendFormat(_template, item.ID, item.Code, item.Name);
                      break;
                  case "3":
                      ServiceREF.GeneralLedgerService.COutputValue gl_output = new ServiceREF.GeneralLedgerService.COutputValue();
                      ServiceREF.GeneralLedgerService.CEmployee[] empList = gl_service.GetEmployeeList(InputValue, ref gl_output);
                      foreach (var item in empList)
                          result.AppendFormat(_template, item.ID, item.Code, item.Name);
                      break;
              }
              return result.ToString();
          }
          public string GetAutoCompleteVendor(string inputName)
          {
              StringBuilder ret = new StringBuilder();
              string InputValue = CXmlPara.CreatePara(new CPara[] { 
                 new CPara("PageIndex", "1"),
                 new CPara("RowsPerPage", "100"),
                 new CPara("Name", inputName),
            }, "");
              ServiceREF.VendorService.VendorService ven_service = new ServiceREF.VendorService.VendorService();
              ServiceREF.VendorService.COutputValue ven_output = new ServiceREF.VendorService.COutputValue();
              ServiceREF.VendorService.CVendor[] venList = ven_service.GetVendorList(InputValue, ref ven_output);
              ret.Append("[");
              foreach (var item in venList)
              {
                  ret.Append("{");
                  ret.AppendFormat("'id':'{0}',", item.ID);
                  ret.AppendFormat("'text':'{0}',", item.Name);
                  ret.AppendFormat("'value':'{0}'", item.ID);
                  ret.Append("}");
                  if (item != venList[venList.Length - 1])
                  {
                      ret.Append(",");
                  }
              }
              ret.Append("]");

              return ret.ToString();
          }
          public string GetTemplate(string funcPara)
          {
              StringBuilder ret = new StringBuilder();
              string InputValue = CXmlPara.CreatePara(funcPara);

              ServiceREF.CoreService.CControl[] lst = core_service.GetControls(InputValue);
              ret.Append("[");
              foreach (ServiceREF.CoreService.CControl cp in lst)
              {
                  ret.Append("{");
                  ret.AppendFormat("'id':'{0}',", cp.ID);
                  ret.AppendFormat("'text':'{0}',", cp.Caption);
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
        #endregion
    }
}