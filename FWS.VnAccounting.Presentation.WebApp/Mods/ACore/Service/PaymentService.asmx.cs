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
    public class PaymentService : System.Web.Services.WebService
    {
        CPaymentUI payment = new CPaymentUI();
        [WebMethod]
        public string GetGrid(int gridID, int currPage, int numberRowOfPage, string inputValue)
        {
            return payment.GetGrid(gridID, currPage, numberRowOfPage, inputValue);
        }
        [WebMethod]
        public string GetTemplate(string inputValue)
        {
            return payment.GetTemplate(inputValue);
        }
        [WebMethod]
        public string GetRefType(string inputValue)
        {
            return payment.GetRefType(inputValue);
        }
        [WebMethod]
        public string UpdateTransaction(string inputValue)
        {
            return payment.UpdateTransaction(inputValue);
        }
    }
}
