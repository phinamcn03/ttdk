using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using FWS.Framework.Web.TemplateController;
using FWS.VnAccounting.Presentation.WebApp.Mods.Core;

namespace FWS.VnAccounting.Presentation.WebApp.Mods.VouchersExt
{
    public partial class Appendix : CTemplateUserControl
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            string scriptServerConfig = CGrid.CreateGridConfig(0, 72, 1, "colModelAppendix", "colNameAppendix", "optionServerAppendix");
            ltrScriptClient.Text = "<script type='text/javascript'>" + scriptServerConfig + "</script>";
        }
    }
}