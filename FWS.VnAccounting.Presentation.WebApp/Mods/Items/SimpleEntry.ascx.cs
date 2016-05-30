using System;
using System.Web.UI;
using FWS.Framework.Web.TemplateController;

namespace FWS.VnAccounting.Presentation.WebApp.Mods.Items
{
    public partial class SimpleEntry : CTemplateUserControl
    {
        public string Instant { get; set; }
        public string PersonType { get; set; }
        public string RefType { get; set; }
        public int GridID { get; set; }

        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.IsPostBack)
            {
                ltrScriptClient.Text = "<script type='text/javascript'>" + string.Format(
                    "if(typeof SimpleEntry_Instant =='undefined') SimpleEntry_Instant={{}}; " +
                    "SimpleEntry_Instant['{0}'] = {{Instant:'{0}', RefType:'{1}', GridID:'{2}'}};\n", Instant, RefType, GridID) + "</script>";
            }
        }
    }
}