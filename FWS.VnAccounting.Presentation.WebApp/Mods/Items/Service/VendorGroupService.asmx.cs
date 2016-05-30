using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Text;

namespace FWS.VnAccounting.Presentation.WebApp.Mods.Items.Service
{
    /// <summary>
    /// Summary description for VendorGroupService
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    // [System.Web.Script.Services.ScriptService]
    public class VendorGroupService : System.Web.Services.WebService
    {
        CVendorGroupUI obj = new CVendorGroupUI();
        [WebMethod]
        public string Update(string InputValue)
        {
            return new CVendorGroupUI().UpdateItem(1, "ED45A7F1-9FB8-4D82-9D48-1B2238DC666C", InputValue);
        }
        [WebMethod]
        public string GetVendorGroup(string InputValue)
        {
            return new CVendorGroupUI().GetItem(1, "ED45A7F1-9FB8-4D82-9D48-1B2238DC666C", InputValue);
        }

        [WebMethod]
        public string GetVendorGroupList(string InputValue)
        {
            return new CVendorGroupUI().GetItems(1, "ED45A7F1-9FB8-4D82-9D48-1B2238DC666C", InputValue);
        }

        [WebMethod]
        public string GetList(int currPage, int numberRowOfPage, string pInput)
        {
            return obj.GetItems(1, "", currPage, numberRowOfPage, pInput);
        }
    }
}
