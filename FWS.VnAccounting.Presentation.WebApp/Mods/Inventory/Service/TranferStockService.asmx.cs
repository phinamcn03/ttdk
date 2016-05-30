using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using FWS.VnAccounting.Presentation.WebApp.Mods.Inventory.Class;

namespace FWS.VnAccounting.Presentation.WebApp.Mods.Inventory.Service
{
    /// <summary>
    /// Summary description for TranferStockService
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    // [System.Web.Script.Services.ScriptService]
    public class TranferStockService : System.Web.Services.WebService
    {
        
        [WebMethod]
        public string GetTemplate(string inputValue)
        {
            CoreStockUI inwardstock = new CoreStockUI();
            return inwardstock.GetTemplate(inputValue);
        }
        CTranferStockUI tranferUI = new CTranferStockUI();
        [WebMethod]
        public string GetStockList(string InputValue)
        {
            return tranferUI.GetStocks(1, "ED45A7F1-9FB8-4D82-9D48-1B2238DC666C", InputValue);
        }
        [WebMethod]
        public string GetTranferStockEntryList(string InputValue)
        {
            return tranferUI.GetStocks(1, "ED45A7F1-9FB8-4D82-9D48-1B2238DC666C", InputValue);
        }
        [WebMethod]
        public string Update(string InputValue)
        {
            return tranferUI.Update(InputValue);
        }
      
    }
}
