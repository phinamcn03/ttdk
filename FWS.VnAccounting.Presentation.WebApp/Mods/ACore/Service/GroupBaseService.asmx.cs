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
    public class GroupBaseService : System.Web.Services.WebService
    {
        private CGroupBase groupbase = new CGroupBase();
        [WebMethod]
        public string GetGrid(int gridID, string instant, int currPage, int numberRowOfPage, string inputValue)
        {
            return groupbase.GetGrid(gridID, instant, currPage, numberRowOfPage, inputValue);
        }
        [WebMethod]
        public string GetItem(string inputValue, string instant)
        {
            return groupbase.GetItem(inputValue, instant);
        }
        [WebMethod]
        public string UpdateTransaction(string inputValue, string instant)
        {
            return groupbase.UpdateAction(inputValue, instant);
        }
    }
}
