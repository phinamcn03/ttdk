﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

using FWS.Framework.Web.TemplateController;
using FWS.VnAccounting.Presentation.WebApp.Mods.Core;

namespace FWS.VnAccounting.Presentation.WebApp.Mods.Accounts
{
    public partial class Role : CTemplateUserControl
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            string scriptServerConfig = CGrid.CreateGridConfig(0, 21, 1, "colModelRole", "colNameRole", "optionServerRole");
            ltrScriptClient.Text = "<script type='text/javascript'>" + scriptServerConfig + "</script>";       
        }
    }
}