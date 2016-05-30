using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using FWS.VnAccounting.Presentation.WebApp.Mods.AP.Class;

namespace FWS.VnAccounting.Presentation.WebApp.Mods.AP.Service
{
    /// <summary>
    /// Summary description for PurchaseOrderService
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    // [System.Web.Script.Services.ScriptService]
    public class PurchaseOrderService : System.Web.Services.WebService
    {
        PurchaseOrderUI UI = new PurchaseOrderUI();
        [WebMethod]
        public string GetNextRefNo()
        {
            return UI.GetNextRefNo("");
        }
        [WebMethod]
        public string GetRefNo(string inputValue)
        {
            return UI.GetNextRefNo(inputValue);
        }
        [WebMethod]
        public string GetProdutAutoComplete(int currPage, int numberRowOfPage, string inputValue)
        {
            return UI.GetProdutAutoComplete(1, "ED45A7F1-9FB8-4D82-9D48-1B2238DC666C", currPage, numberRowOfPage, inputValue);
        }
        [WebMethod]
        public string CreateTrasaction(string InputValue)
        {
            return UI.CreateTransaction(InputValue);
        }
        [WebMethod]
        public string GetAccountList(string InputValue)
        {
            return UI.GetAccountList(InputValue);
        }
        [WebMethod]
        public string GetGrid(int currPage, int numberRowOfPage, string inputValue)
        {
            return UI.GetGrid(currPage, numberRowOfPage, inputValue);
        }
    }
}
