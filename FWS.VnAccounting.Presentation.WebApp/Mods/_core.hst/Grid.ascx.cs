using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

using PMSA.Framework.Utils;
using FWS.Framework.Web.TemplateController;
using FWS.VnAccounting.Presentation.WebApp.Mods.Core;

namespace FWS.VnAccounting.Presentation.WebApp.Mods._core.hst
{
    public partial class Grid : CTemplateUserControl
    {
        public int GridID { get; set; }
        protected void Page_Load(object sender, EventArgs e)
        {
            if (GridID == 0)
                GridID = 45;
            string gridConfig = CGrid.CreateGridConfig(0, GridID, 1, "jqgInstance_ColModels", "jqgInstance_ColNames", "jqgInstance_Options");
            string gridID = string.Format("var __HstGridID='{0}';\n", GridID);
            string gridConfiguration = GetGridConfigurationByID(GridID);
            ltrScriptClient.Text = string.Format("<script type='text/javascript'>\n{0}\n{1}\n{2}</script>", gridConfig, gridID, gridConfiguration);
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