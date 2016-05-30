using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using FWS.Framework.Web.TemplateController;
using FWS.VnAccounting.Presentation.WebApp.Mods.Core;

namespace FWS.VnAccounting.Presentation.WebApp.Mods.VouchersExt
{
    public partial class AReceipt : CTemplateUserControl
    {
        public string InstantID { get; set; }
         public int GridID { get; set; }
         public string RefType { get; set; }
        protected void Page_Load(object sender, EventArgs e)
        {
            string scriptServerConfig = CGrid.CreateGridConfig(0, GridID, 1, "colModel" + InstantID, "colName" + InstantID, "optionServer" + InstantID);
            string config = string.Format(
                       "if(typeof Receipt_Instant =='undefined')" +
                       "   Receipt_Instant={{}}; " +
                       "Receipt_Instant['{0}'] = {{Instant:'{0}', RefType:'{1}',GridID:'{2}'}};\n", InstantID, RefType, GridID);

            ltrScriptClient.Text = "<script type='text/javascript'>" + scriptServerConfig + config + "</script>";
          
        }
    }
}