using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

using FWS.Framework.Web.TemplateController;
namespace FWS.VnAccounting.Presentation.WebApp.Mods._Demo
{
    public partial class FunctionList : CTemplateUserControl
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            Dictionary<string, object> param = (Dictionary<string, object>)Data;
        }
    }
}