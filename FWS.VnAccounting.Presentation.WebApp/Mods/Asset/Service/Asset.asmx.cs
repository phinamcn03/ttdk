using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using FWS.VnAccounting.Presentation.WebApp.Mods.Asset.Class;

namespace FWS.VnAccounting.Presentation.WebApp.Mods.Asset.Service
{
    /// <summary>
    /// Summary description for Asset
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    // [System.Web.Script.Services.ScriptService]
    public class Asset : System.Web.Services.WebService
    {
        CAssetUI assetUI = new CAssetUI();
        [WebMethod]
        public string GetGridAsset(int currPage, int numberRowOfPage, string inputValue)
        {
            return assetUI.GetGridAsset(1, "ED45A7F1-9FB8-4D82-9D48-1B2238DC666C", currPage, numberRowOfPage, inputValue);
        }
        [WebMethod]
        public string GetAsset(string InputValue)
        {
            return assetUI.GetAsset(InputValue);
        }
        [WebMethod]
        public string Update(string InputValue)
        {
            return assetUI.UpdateAsset(InputValue);
        }
    }
}
