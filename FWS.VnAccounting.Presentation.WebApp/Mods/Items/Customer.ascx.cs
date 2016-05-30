using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

using FWS.VnAccounting.Presentation.WebApp.Mods.Core;
using FWS.VnAccounting.Presentation.WebApp.Mods.Global;
using FWS.Framework.Web.TemplateController;

namespace FWS.VnAccounting.Presentation.WebApp.Mods.Items
{
    public partial class Customer : CTemplateUserControl
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            string scriptServerConfig = CGrid.CreateGridConfig(0, 6, 1, "colModelCustomer", "colNameCustomer", "optionServerCustomer");
            ltrScriptClient.Text = "<script type='text/javascript'>" + scriptServerConfig + "</script>";
            StartupScript = CControlUI.GetControlsScript("Items/Customer");
        }
    }
}