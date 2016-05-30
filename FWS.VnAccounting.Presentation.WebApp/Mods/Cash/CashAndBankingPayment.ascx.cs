using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using FWS.Framework.Web.TemplateController;
using FWS.VnAccounting.Presentation.WebApp.Mods.Core;

namespace FWS.VnAccounting.Presentation.WebApp.Mods.Cash
{
    public partial class CashAndBankingPayment : CTemplateUserControl
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            //Get label control
            string control = Payment_APPayment.InstantID.Replace("AP", "AP/").Replace("AR", "AR/");
            string labelcontrols = CControlUI.GetControlsScript(control);
            StartupScript = labelcontrols;
        }
    }
}