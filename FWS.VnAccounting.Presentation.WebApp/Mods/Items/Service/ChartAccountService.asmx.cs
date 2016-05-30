using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using FWS.VnAccounting.Presentation.WebApp.Mods.Items.Class;

namespace FWS.VnAccounting.Presentation.WebApp.Mods.Items.Service
{
    /// <summary>
    /// Summary description for ChartAccountService
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    // [System.Web.Script.Services.ScriptService]
    public class ChartAccountService : System.Web.Services.WebService
    {
        CChartAccountUI obj = new CChartAccountUI();
        [WebMethod]
        public string GetAccountList(string initParentId, string nodeid)
        {
            nodeid = nodeid.Contains(',') ? nodeid.Split(',')[1] : nodeid;
            if (nodeid == "")
            {
                return obj.GetItems(1, "", initParentId);
            }
            else
            {
                return obj.GetItems(1, "", nodeid);
            }
        }

        [WebMethod]
        public string GetChartAccount(string InputValue)
        {
            return obj.Get(1, "ED45A7F1-9FB8-4D82-9D48-1B2238DC666C", InputValue);
        }
        [WebMethod]
        public string GetChartAccountList(string InputValue)
        {
            return obj.GetList(1, "ED45A7F1-9FB8-4D82-9D48-1B2238DC666C", InputValue);
        }

        [WebMethod]
        public string Update(string InputValue)
        {
            return obj.UpdateItem(1, "ED45A7F1-9FB8-4D82-9D48-1B2238DC666C", InputValue);
        }
    }
}
