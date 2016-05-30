using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

using FWS.VnAccounting.Presentation.WebApp.Mods.Core;
namespace FWS.VnAccounting.Presentation.WebApp.Mods.Inventory
{
    public partial class CoreStock : System.Web.UI.UserControl
    {
        public string InstantID { get; set; }
        public string PersonType { get; set; }
        public string RefType { get; set; }
        public int GridID { get; set; }
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.IsPostBack)
            {
                string scriptServerConfig = CGrid.CreateGridConfig(0, GridID, 1, "colModel_" + InstantID, "colName_" + InstantID, "option_" + InstantID);
                string config = string.Format(
                    "if(typeof CoreStock_Instant =='undefined')" +
                    "   CoreStock_Instant={{}}; " +
                    "CoreStock_Instant['{0}'] = {{Instant:'{0}', RefType:'{1}', GridID:'{2}'}};\n", InstantID, RefType, GridID);

                ltrScriptClient.Text = "<script type='text/javascript'>" + scriptServerConfig + config + "</script>";
            }
        }
    }
}