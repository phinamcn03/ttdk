using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

using FWS.Framework.Web.TemplateController;
using FWS.VnAccounting.Presentation.WebApp.Mods.Core;

namespace FWS.VnAccounting.Presentation.WebApp.Mods.Accounts
{
    public partial class FlowChart : CTemplateUserControl
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            StartupScript = "ShowChart('FLOWCHART_Accounts')";
        }
    }
}