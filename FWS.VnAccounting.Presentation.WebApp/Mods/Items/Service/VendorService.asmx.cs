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
    /// Summary description for VendorService
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    // [System.Web.Script.Services.ScriptService]
    public class VendorService : System.Web.Services.WebService
    {
        CVendorUI vendor = new CVendorUI();
        [WebMethod]
        public string Update(string InputValue)
        {
            return vendor.Update(InputValue);
        }
        [WebMethod]
        public string GetVendor(string InputValue)
        {
            return vendor.GetVendor(InputValue);
        }
        [WebMethod]
        public string GetGrid(int currPage, int numberRowOfPage, string inputValue)
        {
            return vendor.GetGrid(1, "ED45A7F1-9FB8-4D82-9D48-1B2238DC666C", currPage, numberRowOfPage, inputValue);
        }
        [WebMethod]
        public string GetDataAutoComplete(int currPage, int numberRowOfPage, string inputValue)
        {
            return vendor.GetDataAutoComplete(1, "ED45A7F1-9FB8-4D82-9D48-1B2238DC666C", currPage, numberRowOfPage, inputValue);
        }

        [WebMethod]
        public string GetList(string InputValue)
        {
            return vendor.GetVendorList(InputValue);
        }
    }
}
