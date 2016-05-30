using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

using FWS.VnAccounting.Presentation.WebApp.Mods.Core;
using FWS.Framework.Web.TemplateController;

namespace FWS.VnAccounting.Presentation.WebApp.Mods.ACore
{
    public partial class Payment : CTemplateUserControl
    {
        public string InstantID { get; set; }
        public string PersonType { get; set; }
        public string RefType { get; set; }
        public int GridID { get; set; }

        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.IsPostBack)
            {
                string scriptServerConfig = CGrid.CreateGridConfig(0, GridID, 1, "colModelPayment_" + InstantID, "colNamePayment_" + InstantID, "optionPayment_" + InstantID);
                string config = string.Format(
                    "if(typeof Payment_Instant =='undefined')" +
                    "   Payment_Instant={{}}; " +
                    "Payment_Instant['{0}'] = {{Instant:'{0}', RefType:'{1}', GridID:'{2}'}};\n", InstantID, RefType, GridID);

                ltrScriptClient.Text = "<script type='text/javascript'>" + scriptServerConfig + config + "</script>";
            }
        }
    }
}