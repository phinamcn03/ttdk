using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;

namespace FWS.VnAccounting.Presentation.WebApp.Mods.Accounts.Service
{
    /// <summary>
    /// Summary description for ConfigService
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    // [System.Web.Script.Services.ScriptService]
    public class ConfigService : System.Web.Services.WebService
    {
        ConfigUI config = new ConfigUI();
        [WebMethod]
        public string GetGrid(int currPage, int NumberRowOfPage, string inputValue)
        {
            return config.GetGrid(currPage, NumberRowOfPage, inputValue);
        }
        [WebMethod]
        public string Update(string InputValue)
        {
            return config.Update(InputValue);
        }
    }
}
