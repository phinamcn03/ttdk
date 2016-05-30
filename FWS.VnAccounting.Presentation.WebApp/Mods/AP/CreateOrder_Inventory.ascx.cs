using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using FWS.VnAccounting.Presentation.WebApp.Mods.Core;
using FWS.VnAccounting.Presentation.WebApp.Mods.Global;
using FWS.Framework.Web.TemplateController;

namespace FWS.VnAccounting.Presentation.WebApp.Mods.AP
{
    public partial class CreateOrder_Inventory :  CTemplateUserControl
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            CSession session = new CSession();
            string scriptServerConfig = CGrid.CreateGridConfig(session.UserID, 63, 1, "colModelCreateOrder", "colNameCreateOrder", "optionCreateOrder");
            ltrScriptClient.Text = "<script type='text/javascript'>" + scriptServerConfig + "</script>";    
        }
    }
}