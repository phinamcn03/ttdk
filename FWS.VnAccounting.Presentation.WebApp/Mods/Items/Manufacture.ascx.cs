using System;
using FWS.VnAccounting.Presentation.WebApp.Mods.Core;
using FWS.Framework.Web.TemplateController;

namespace FWS.VnAccounting.Presentation.WebApp.Mods.Items
{
    public partial class Manufacture : CTemplateUserControl
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            string control = Items_Manufacture.Instant.Replace("Items", "Items/");
            string labelcontrols = CControlUI.GetControlsScript(control);
            StartupScript = labelcontrols;
        }
    }
}