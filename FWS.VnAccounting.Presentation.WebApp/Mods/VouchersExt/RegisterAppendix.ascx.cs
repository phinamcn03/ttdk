﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using FWS.Framework.Web.TemplateController;
using FWS.VnAccounting.Presentation.WebApp.Mods.Core;

namespace FWS.VnAccounting.Presentation.WebApp.Mods.VouchersExt
{
    public partial class RegisterAppendix:  CTemplateUserControl
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            string scriptServerConfig = CGrid.CreateGridConfig(0, 76, 1, "colModelCollateral", "colNameCollateral", "optionServerCollateral");
            scriptServerConfig += CGrid.CreateGridConfig(0, 77, 1, "colModelReCollateral", "colNameReCollateral", "optionServerReCollateral");
            scriptServerConfig += CGrid.CreateGridConfig(0, 78, 1, "colModelProperty", "colNameProperty", "optionServerProperty");
            ltrScriptClient.Text = "<script type='text/javascript'>" + scriptServerConfig + "</script>";
    
        }
    }
}