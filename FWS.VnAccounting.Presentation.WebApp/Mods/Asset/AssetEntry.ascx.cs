using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using FWS.Framework.Web.TemplateController;
using FWS.VnAccounting.Presentation.WebApp.Mods.Global;
using FWS.VnAccounting.Presentation.WebApp.Mods.Core;

namespace FWS.VnAccounting.Presentation.WebApp.Mods.Asset
{
    public partial class AssetEntry : CTemplateUserControl
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            string scriptServerConfig = CGrid.CreateGridConfig(0, 41, 1, "colModelAssetEntry", "colNameAssetEntry", "optionServerAssetEntry");
            ltrScriptClientEntry.Text = "<script type='text/javascript'>" + scriptServerConfig + "</script>";
            StartupScript = CControlUI.GetControlsScript("Items/Customer");
        }
    }
}