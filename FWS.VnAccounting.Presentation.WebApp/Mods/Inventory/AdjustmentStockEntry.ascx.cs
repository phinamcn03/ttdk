using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using FWS.VnAccounting.Presentation.WebApp.Mods.Global;
using FWS.VnAccounting.Presentation.WebApp.Mods.Core;
using FWS.Framework.Web.TemplateController;

namespace FWS.VnAccounting.Presentation.WebApp.Mods.Inventory
{
    public partial class AdjustStockEntry : CTemplateUserControl
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            string scriptServerConfig = CGrid.CreateGridConfig(0, 37, 1, "colModelTranferStockEntry", "colNameTranferStockEntry", "TranferStockEntryOption");
            ltrScriptClient.Text = "<script type='text/javascript'>" + scriptServerConfig + "</script>";
            StartupScript = CControlUI.GetControlsScript("IV/AdjustmentEntry");
        }
    }
}