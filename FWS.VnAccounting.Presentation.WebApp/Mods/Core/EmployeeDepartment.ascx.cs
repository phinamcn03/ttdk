using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using FWS.VnAccounting.Presentation.WebApp.Mods.Global;
using FWS.Framework.Web.TemplateController;

namespace FWS.VnAccounting.Presentation.WebApp.Mods.Core
{
    public partial class EmployeeDepartment : CTemplateUserControl
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            string scriptServerConfig = CGrid.CreateGridConfig(0, 33, 1, "colModelEmployeeDepartment", "colNameEmployeeDepartment", "optionEmployeeDepartment");
            ltrScriptClient.Text = "<script type='text/javascript'>" + scriptServerConfig + "</script>";
        }
    }
}