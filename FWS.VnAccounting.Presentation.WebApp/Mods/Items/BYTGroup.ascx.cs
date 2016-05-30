using System;
using FWS.VnAccounting.Presentation.WebApp.Mods.Core;
using FWS.Framework.Web.TemplateController;

namespace FWS.VnAccounting.Presentation.WebApp.Mods.Items
{
    public partial class BYTGroup : CTemplateUserControl
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            //Get label control
            string control = Items_BYTGroup.Instant.Replace("Items", "Items/");
            string labelcontrols = CControlUI.GetControlsScript(control);
            StartupScript = labelcontrols;
        }
    }
}