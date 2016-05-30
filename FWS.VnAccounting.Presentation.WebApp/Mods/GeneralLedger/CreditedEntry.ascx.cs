using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using FWS.Framework.Web.TemplateController;

namespace FWS.VnAccounting.Presentation.WebApp.Mods.GeneralLedger
{
    public partial class CreditedEntry : CTemplateUserControl
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            this.StartupScript = "LoadStyleTemplate()";
        }
    }
}