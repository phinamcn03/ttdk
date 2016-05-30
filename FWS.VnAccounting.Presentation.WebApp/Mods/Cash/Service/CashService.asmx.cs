using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;

namespace FWS.VnAccounting.Presentation.WebApp.Mods.Cash.Service
{
    /// <summary>
    /// Summary description for CashService
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    // [System.Web.Script.Services.ScriptService]
    public class CashService : System.Web.Services.WebService
    {
        CCashUI UI = new CCashUI();
        [WebMethod]
        public string UpdateTransaction(string inputValue)
        {
            return UI.UpdateTransaction(inputValue);
        }//GetGridInvoice
        [WebMethod]
        public string GetGridInvoice(int currPage, int numberRowOfPage, string inputValue)
        {
            int gridID = 35;
            return UI.GetGridInvoice(gridID, currPage, numberRowOfPage, inputValue);
        }

        [WebMethod]
        public string GetGridTransaction(int gridID, int currPage, int NumberRowOfPage, string inputValue)
        {
            return UI.GetGridTransaction(gridID, currPage, NumberRowOfPage, inputValue);
        }
        [WebMethod]
        public string GetTransaction(string inputValue)
        {
            return UI.GetTransaction(inputValue);
        }
    }
}
