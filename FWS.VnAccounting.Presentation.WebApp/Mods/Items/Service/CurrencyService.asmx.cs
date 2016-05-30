using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Text;
using FWS.VnAccounting.Presentation.WebApp.Mods.Items.Class;

namespace FWS.VnAccounting.Presentation.WebApp.Mods.Items.Service
{
    /// <summary>
    /// Summary description for CurrencyService
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    // [System.Web.Script.Services.ScriptService]
    public class CurrencyService : System.Web.Services.WebService
    {

        [WebMethod]
        public string SearchCurrency(string InputValue)
        {
            string pageinfo = "";
            ServiceREF.InventoryService.InventoryService service = new ServiceREF.InventoryService.InventoryService();
            string inventoryUnitList = service.GetInventoryUnitListInCSV(InputValue, ref pageinfo);
            return inventoryUnitList;
        }
        [WebMethod]
        public string UpdateCurrency(string InputValue)
        {
         return (new CCurrencyUI()).UpdateCurrency(InputValue);
        }
        [WebMethod]
        public string GetCurrency(string InputValue)
        {
            return (new CCurrencyUI()).GetCurrency(InputValue);
        }
        [WebMethod]
        public string GetGrid(int currPage, int numberRowOfPage,string searchOption)
        {
            return (new CCurrencyUI()).GetGrid(1, "ED45A7F1-9FB8-4D82-9D48-1B2238DC666C", currPage, numberRowOfPage, searchOption);
        }
    }
}
