using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using FWS.VnAccounting.Presentation.WebApp.Mods.Core;
using System.Text;

namespace FWS.VnAccounting.Presentation.WebApp.Mods.Items.Service
{
    /// <summary>
    /// Summary description for UnitService
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    // [System.Web.Script.Services.ScriptService]
    public class UnitService : System.Web.Services.WebService
    {
        CUnitUI unit = new CUnitUI();
        [WebMethod]
        public string GetGrid(int currPage, int numberRowOfPage, string inputValue)
        {
            return unit.GetGrid(1, "ED45A7F1-9FB8-4D82-9D48-1B2238DC666C", currPage, numberRowOfPage, inputValue);
        }
        [WebMethod]
        public string Update(string InputValue)
        {
            return unit.Update(InputValue);
        }
        [WebMethod]
        public string GetUnit(string InputValue)
        {
            return unit.GetUnit(InputValue);
        }
       
    }
}
