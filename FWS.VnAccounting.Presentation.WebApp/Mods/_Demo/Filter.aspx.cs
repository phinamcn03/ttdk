using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using FWS.VnAccounting.Presentation.WebApp.Mods.Global;

namespace FWS.VnAccounting.Presentation.WebApp.Mods._Demo
{
    public partial class Filter : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            string scriptServerConfig = CGrid.CreateGridConfig(0, 28, 1, "colModelFilter", "colNameFilter", "optionServerFilter");
            ltrScriptClient.Text = "<script type='text/javascript'>" + scriptServerConfig + "</script>";       
        }
    }
}