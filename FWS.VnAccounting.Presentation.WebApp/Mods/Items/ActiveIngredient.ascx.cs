using System;
using FWS.Framework.Web.TemplateController;
using FWS.VnAccounting.Presentation.WebApp.Mods.Global;
using FWS.VnAccounting.Presentation.WebApp.Mods.Core;

namespace FWS.VnAccounting.Presentation.WebApp.Mods.Items
{
    public partial class ActiveIngredient : CTemplateUserControl
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            CSession session = new CSession();
            string scriptServerConfig = CGrid.CreateGridConfig(session.UserID, 43, 1, "colModelActiveIngredient", "colNameActiveIngredient", "optionServerActiveIngredient");
            ltrScriptClient.Text = "<script type='text/javascript'>" + scriptServerConfig + "</script>";       
        }
    }
}