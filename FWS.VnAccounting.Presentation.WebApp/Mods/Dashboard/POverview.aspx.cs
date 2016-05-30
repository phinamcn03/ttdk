using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

//using FWS.VnAccounting.Presentation.WebApp.Mods.Core;
using FWS.VnAccounting.Presentation.WebApp.Mods.Global;
using FWS.VnAccounting.Presentation.WebApp.Mods.Core;
namespace FWS.VnAccounting.Presentation.WebApp.Mods.Dashboard
{
    public partial class POverview : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            //string scriptGrid_InvAlert = CGrid.CreateGridConfig(0, 44, 1, "jqgInvAlert_ColModels", "jqgInvAlert_ColNames", "jqgInvAlert_Options");
            //string scriptGrid_InStock = CGrid.CreateGridConfig(0, 14, 1, "jqgInStock_ColModels", "jqgInStock_ColNames", "jqgInStock_Options");

            //ltrScriptClient.Text = string.Format("<script type='text/javascript'>\n{0}\n{1}</script>", scriptGrid_InvAlert, scriptGrid_InStock);
            CAppEnvironment.RegisterServerConfig(Page);
        }
    }
}