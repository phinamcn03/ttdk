using System;
using System.Collections.Generic;
using System.Web;
using System.Web.Services;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Cash;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Core;

namespace FWS.VnAccounting.Service.Data.Cash
{
    /// <summary>
    /// Summary description for CurrencyService
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]

    public class CurrencyService : System.Web.Services.WebService
    {

        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\" /&gt;")]
        public List<CCurrency> GetCurrencyList(string InputValue,ref COutputValue Output)
        {
            return new CCurrencyService().GetCurrencyList(InputValue,ref Output);
        }
        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\" /&gt;")]
        public CCurrency GetCurrency(string InputValue)
        {
            return new CCurrencyService().GetCurrency(InputValue);
        }
        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\" Code=\"phu\" Name=\"huu\" Name2=\"le\" Address=\"vuntau\" TaxNo=\"123\" Phone=\"vuntau\" Phone2=\"123\" Email=\"vuntau\" Fax=\"123\" WebSite=\"vuntau\" Status=\"-13\" /&gt;")]
        public CApplicationMessage UpdateCurrency(string InputValue)
        {
            return new CCurrencyService().UpdateCurrency(InputValue);
        }
    }
}
