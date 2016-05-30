using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using FWS.VnAccounting.Presentation.WebApp.Mods.ACore.Class;

namespace FWS.VnAccounting.Presentation.WebApp.Mods.ACore.Service
{
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    public class VoucherService : System.Web.Services.WebService
    {
        CVoucherUI voucher = new CVoucherUI();
        [WebMethod]
        public string GetGrid(int gridID, int currPage, int numberRowOfPage, string inputValue)
        {
            return voucher.GetGrid(gridID, currPage, numberRowOfPage, inputValue);
        }
        [WebMethod]
        public string GetPersonAutoComplete(string inputValue)
        {
            return voucher.GetPersonAutoComplete(inputValue);
        }
        [WebMethod]
        public string GetProductAutoComplete(int currPage, int numberRowOfPage, string inputValue)
        {
            return voucher.GetProductAutoComplete(currPage, numberRowOfPage, inputValue);
        }
        [WebMethod]
        public string GetStockAutoComplete(int currPage, int numberRowOfPage, string inputValue)
        {
            return voucher.GetStockAutoComplete(inputValue);
        }
        [WebMethod]
        public string GetAccountAutoComplete(int currPage, int numberRowOfPage, string inputValue)
        {
            return voucher.GetAccountAutoComplete(inputValue);
        }
        [WebMethod]
        public string GetTransactionAutoComplete(string inputValue)
        {
            return voucher.GetTransactionAutoComplete(inputValue);
        }
        [WebMethod]
        public string GetTransactionListAutoComplete(string inputValue)
        {
            return voucher.GetTransactionListAutoComplete(inputValue);
        }
        [WebMethod]
        public string GetTransaction(string inputValue)
        {
            return voucher.GetTransaction(inputValue);
        }
        [WebMethod]
        public string GetPerson(string inputValue)
        {
            return voucher.GetPerson(inputValue);
        }
        [WebMethod]
        public string UpdateTransaction(string inputValue)
        {
            return voucher.UpdateTransaction(inputValue);
        }
        [WebMethod]
        public string CreateTransaction(string InputValue)
        {
            return voucher.CreateTransaction(InputValue);
        }
        [WebMethod]
        public string GetTaxList(string InputValue)
        {
            return voucher.GetTaxList(InputValue);
        }
        [WebMethod]
        public string GetAccountList(string inputValue)
        {
            return voucher.GetAccountList(inputValue);
        }
    }
}
