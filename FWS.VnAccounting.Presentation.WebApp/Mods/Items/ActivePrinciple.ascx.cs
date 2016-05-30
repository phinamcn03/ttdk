using System;
using FWS.Framework.Web.TemplateController;
using FWS.VnAccounting.Presentation.WebApp.Mods.Core;

namespace FWS.VnAccounting.Presentation.WebApp.Mods.Items
{
    public partial class ActivePrinciple : CTemplateUserControl
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            string control = Items_ActivePrinciple.Instant.Replace("Items", "Items/");
            string labelcontrols = CControlUI.GetControlsScript(control);
            StartupScript = labelcontrols;
        }
    }
}