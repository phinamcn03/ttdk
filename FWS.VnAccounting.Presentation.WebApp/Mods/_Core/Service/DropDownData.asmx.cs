using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;

namespace FWS.VnAccounting.Presentation.WebApp.Mods.Core.Service
{
    /// <summary>
    /// phu.h.le
    /// Summary description for DropDownData
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    // [System.Web.Script.Services.ScriptService]
    public class DropDownData : System.Web.Services.WebService
    {
        CDropdownData Dropdown = new CDropdownData();
        [WebMethod]
        public string GetTemplate(string inputValue)
        {          
            return Dropdown.GetTemplate(inputValue);
        }
        [WebMethod]
        public string GetObjectType(string inputValue)//
        {           
            return Dropdown.GetObjectType(inputValue);
        }
        [WebMethod]
        public string CurrencyType(string inputValue)//
        {
            return Dropdown.CurrencyType(inputValue);
        }
        [WebMethod]
        public string GetRefNo(string inputValue)
        {
            return Dropdown.GetNextRefNo(inputValue);
        }
        [WebMethod]
        public string GetAccountList(string InputValue)
        {
            return Dropdown.GetAccountList(InputValue);
        }
         [WebMethod]
        public string GetTransaction(string InputValue)
        {
            return Dropdown.GetTransaction(InputValue);
        }
         [WebMethod]
         public string GetPersonList(string InputValue)
        {
            return Dropdown.GetPersonList(InputValue);
        }
        
    }
}
