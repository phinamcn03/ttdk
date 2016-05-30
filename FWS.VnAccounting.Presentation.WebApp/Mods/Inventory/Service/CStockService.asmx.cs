using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using FWS.VnAccounting.Presentation.WebApp.Mods.Inventory.Class;

namespace FWS.VnAccounting.Presentation.WebApp.Mods.Inventory.Service
{
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    // [System.Web.Script.Services.ScriptService]
    public class CStockService : System.Web.Services.WebService
    {
         CoreStockUI cstock = new CoreStockUI();
        [WebMethod]
        public string GetTemplate(string inputValue)
        {
            return cstock.GetTemplate(inputValue);
        }
        [WebMethod]
        public string GetProdutAutoComplete(int currPage, int numberRowOfPage, string inputValue)
        {
            return cstock.GetProdutAutoComplete(currPage, numberRowOfPage, inputValue);
        }
        [WebMethod]
        public string Search(string InputValue)
        {
            return "";
        }
        [WebMethod]
        public string UpdateCoreStock(string InputValue, int refType)
        {
            return cstock.Update(InputValue,refType);
        }
        [WebMethod]
        public string PostCoreStock(string InputValue, int refType)
        {
            return cstock.Post(InputValue, refType);
        }
        [WebMethod]
        public string UnPostCoreStock(string InputValue, int refType)
        {
            return cstock.UnPost(InputValue, refType);
        }
        [WebMethod]
        public string GetInwardStock(string InputValue, int refType)
        {
            return cstock.GetInwardStock(InputValue, refType);
        }
        [WebMethod]
        public string GetCoreStockGrid(int currPage, int numberRowOfPage, string inputValue, int typeRef)
        {
            return cstock.GetGridCoreStock(currPage, numberRowOfPage,inputValue, typeRef);
        }
        [WebMethod]
        public string GetInwardStockGridEntry(int currPage, int numberRowOfPage, string inputValue, int refType)
        {
            return cstock.GetGrid(currPage, numberRowOfPage,inputValue, refType);
        }
        [WebMethod]
        public string GetIntDefinationList(string inputValue)
        {
            return cstock.GetIntDefinationList(inputValue);
        }
        [WebMethod]
        public string GetAccountList(string inputValue)
        {
            return cstock.GetAccountList(inputValue);
        }
        [WebMethod]
        public string GetUnitList(string inputValue)
        {
            return cstock.GetInventoryUnitList(inputValue);
        }
        [WebMethod]
        public string GetStockList(string inputValue)
        {
            return cstock.GetStockList(inputValue);
        }

        [WebMethod]
        public string GetNextRefNo(string inputValue)
        {
            return cstock.GetNextRefNo(inputValue);
        }
        [WebMethod]
        public string GetObjectName(string inputValue, string inputType)
        {
            return cstock.GetObjectName(inputValue, inputType);
        }
        [WebMethod]
        public string GetCustomerAutoComplete(string inputValue, string typeRef)
        {
            return cstock.GetCusAutoComplete(1, 50, inputValue, typeRef);
        }
        [WebMethod]
        public string GetDataAutoComplete(int currPage, int numberRowOfPage, string q, string inputType)
        {
            return cstock.GetDataAutoComplete(currPage, numberRowOfPage, q, inputType);
        }
        [WebMethod]
        public string GetAutoCompleteVendor(string inputValue)
        {
            return cstock.GetAutoCompleteVendor(inputValue);
        }
        [WebMethod]
        public string GetAutoStocks(string inputValue)
        {
            return cstock.GetAutoStock(inputValue);
        }
        
    }
}
