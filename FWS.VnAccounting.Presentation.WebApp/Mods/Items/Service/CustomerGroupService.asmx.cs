using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Text;

namespace FWS.VnAccounting.Presentation.WebApp.Mods.Items.Service
{
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]

    public class CustomerGroupService : System.Web.Services.WebService
    {
        CCustomerGroupUI obj = new CCustomerGroupUI();
        [WebMethod]
        public string GetCustomerGroup(string pInput)
        {
            return new CCustomerGroupUI().GetItem(1, "ED45A7F1-9FB8-4D82-9D48-1B2238DC666C", pInput);
        }

        [WebMethod]
        public string GetCustomerGroupList(string pInput)
        {
            return new CCustomerGroupUI().GetItems(1, "ED45A7F1-9FB8-4D82-9D48-1B2238DC666C", pInput);
        }

        [WebMethod]
        public string Update(string InputValue)
        {
            return new CCustomerGroupUI().UpdateItem(1, "ED45A7F1-9FB8-4D82-9D48-1B2238DC666C", InputValue);
        }

        [WebMethod]
        public string GetList(int currPage, int numberRowOfPage, string pInput)
        {
            return obj.GetItems(1, "", currPage, numberRowOfPage, pInput);
        }
    }
}
