using FWS.VnAccounting.Presentation.WebApp.Mods.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace FWS.VnAccounting.Presentation.WebApp.Master
{
    public partial class ChildFrame : System.Web.UI.MasterPage
    {
        protected override void OnInit(EventArgs e)
        {
            CAppEnvironment.RegisterServerConfig(Page);
            base.OnInit(e);
        }
        protected void Page_Load(object sender, EventArgs e)
        {

        }
    }
}