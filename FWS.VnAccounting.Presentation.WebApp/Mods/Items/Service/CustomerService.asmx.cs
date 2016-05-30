using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Text;

namespace FWS.VnAccounting.Presentation.WebApp.Mods.Items.Service
{
    /// <summary>
    /// Summary description for CustomerService
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    // [System.Web.Script.Services.ScriptService]
    public class CustomerService : System.Web.Services.WebService
    {
        CCustomerUI customerUI = new CCustomerUI();
        [WebMethod]
        public string Update(string InputValue)
        {
            return customerUI.Update(InputValue);
        }
        [WebMethod]
        public string GetCustomer(string InputValue)
        {
            return customerUI.GetCustomer(InputValue);
        }
        [WebMethod]
        public string GetCustomerList(string InputValue)
        {
            return customerUI.GetCustomerList(InputValue);
        }
        [WebMethod]
        public string GetGrid(int currPage, int numberRowOfPage, string inputValue)
        {
            return customerUI.GetGrid(1, "ED45A7F1-9FB8-4D82-9D48-1B2238DC666C", currPage, numberRowOfPage, inputValue);
        }
    }
}
