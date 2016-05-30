using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using FWS.VnAccounting.Presentation.WebApp.Mods.AP.Class;

namespace FWS.VnAccounting.Presentation.WebApp.Mods.AP.Service
{
    /// <summary>
    /// Summary description for PurchasePaymentService
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    // [System.Web.Script.Services.ScriptService]
    public class PurchasePaymentService : System.Web.Services.WebService
    {
        PurchasePaymentUI service = new PurchasePaymentUI();
        [WebMethod]
        public string GetGrid(int currPage, int numberRowOfPage, string inputValue)
        {
            return service.GetGrid(currPage, numberRowOfPage, inputValue);
        }
    }
}
