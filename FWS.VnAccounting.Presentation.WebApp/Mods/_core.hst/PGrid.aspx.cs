using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using FWS.VnAccounting.Presentation.WebApp.Mods.Core;

namespace FWS.VnAccounting.Presentation.WebApp.Mods._core.hst
{
    public partial class PGrid : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            CAppEnvironment.RegisterServerConfig(Page);
        }
    }
}