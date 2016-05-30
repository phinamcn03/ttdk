using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using FWS.VnAccounting.Presentation.WebApp.Mods.ACore.Class;

namespace FWS.VnAccounting.Presentation.WebApp.Mods.Inventory.Service
{
    /// <summary>
    /// Summary description for AdjustmentStockService
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    // [System.Web.Script.Services.ScriptService]
    public class AdjustmentStockService : System.Web.Services.WebService
    {

        [WebMethod]
        public string GetTemplate(string inputValue)
        {
            CPaymentUI payment = new CPaymentUI();
            return payment.GetTemplate(inputValue);
        }
        [WebMethod]
        public string GetStockList(string inputValue)
        {
            CoreStockUI payment = new CoreStockUI();
            return payment.GetStockList(inputValue);
        }
    }
}
