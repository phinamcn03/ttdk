﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using FWS.Framework.Web.TemplateController;

namespace FWS.VnAccounting.Presentation.WebApp.Mods.Inventory
{
    public partial class StockEntry : CTemplateUserControl
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            this.StartupScript = "LoadStyleTemplate()";
        }
    }
}