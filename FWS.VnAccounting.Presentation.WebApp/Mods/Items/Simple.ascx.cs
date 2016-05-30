using System;
using System.Web.UI;

using FWS.Framework.Web.TemplateController;
using FWS.VnAccounting.Presentation.WebApp.Mods.Core;

namespace FWS.VnAccounting.Presentation.WebApp.Mods.Items
{
    public partial class Simple : CTemplateUserControl
    {
        public string Instant { get; set; }
        public string PersonType { get; set; }
        public string RefType { get; set; }
        public int GridID { get; set; }

        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.IsPostBack)
            {
                string scriptServerConfig = CGrid.CreateGridConfig(0, GridID, 129, "colModel_" + Instant, "colName_" + Instant, "option_" + Instant);
                string config = string.Format(
                    "if(typeof Simple_Instant =='undefined')" +
                    "   Simple_Instant={{}}; " +
                    "Simple_Instant['{0}'] = {{Instant:'{0}', RefType:'{1}', GridID:'{2}'}};\n", Instant, RefType, GridID);
                string strConfig = scriptServerConfig + config;
                ltrScriptClient.Text = string.Format("<script type='text/javascript'>{0};</script>", strConfig);
            }
        }

        public string setControl(string controlID)
        {
            return string.Format("{0}_{1}", this.Instant, controlID);
        }
    }
}