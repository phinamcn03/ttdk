using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;

using PMSA.Framework.Utils;
using FWS.VnAccounting.Presentation.WebApp.Mods.Core;
namespace FWS.VnAccounting.Presentation.WebApp.Mods._core.hst.service
{
    /// <summary>
    /// Summary description for HstService
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    // [System.Web.Script.Services.ScriptService]
    public class HstService : System.Web.Services.WebService
    {
        [WebMethod]
        public string GetGridConfig(int gridID, string inputvalue)
        {
            string gridConfig = "";
            try
            {
                string preName = "jqgInstance_";
                if (gridID == 0)
                    gridID = 44;
                gridConfig = CGrid.CreateGridConfig(0, gridID, 1, preName + "ColModels", preName + "ColNames", preName + "Options");
                gridConfig += "\n" + string.Format("__HstGridID='{0}';\n", gridID);
                gridConfig += "\n" + GetGridConfigurationByID(gridID);
            }
            catch (Exception ex)
            {
                gridConfig = "var configResult='ERROR @ " + ex.Message + "';";
            }
            return gridConfig;
        }
        private string GetGridConfigurationByID(int gridID)
        {
            string file = HttpContext.Current.Server.MapPath("../Js/Mods.Core.Hst.Grid." + gridID + ".js");
            string fileContent = CFile.Read(file);
            if (fileContent != "")
                return fileContent;
            return "";
        }
    }
}
