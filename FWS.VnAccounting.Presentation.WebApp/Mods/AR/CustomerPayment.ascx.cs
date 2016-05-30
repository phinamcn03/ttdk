using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using FWS.VnAccounting.Presentation.WebApp.Mods.Core;
using FWS.Framework.Web.TemplateController;

namespace FWS.VnAccounting.Presentation.WebApp.Mods.AR
{
    public partial class CustomerPayment : CTemplateUserControl
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            //Get label control
            string control = PaymentPartner_ARCustomerPayment.InstantID.Replace("AP", "AP/").Replace("AR", "AR/");
            string labelcontrols = CControlUI.GetControlsScript(control);
            StartupScript = labelcontrols;
        }
    }
}