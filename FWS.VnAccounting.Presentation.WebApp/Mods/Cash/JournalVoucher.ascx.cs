using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using FWS.Framework.Web.TemplateController;
using FWS.VnAccounting.Presentation.WebApp.Mods.Core;
using FWS.VnAccounting.Presentation.WebApp.Mods.Global;

namespace FWS.VnAccounting.Presentation.WebApp.Mods.Cash
{
    public partial class JournalVoucher : CTemplateUserControl
    {
        public string InstantID { get; set; }
        public string PersonType { get; set; }
        public string RefType { get; set; }
        public int GridID { get; set; }

        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.IsPostBack)
            {
                GridID = 39;
                InstantID = "CSJournal";
                RefType = "18";
                PersonType = "";
                string scriptServerConfig = CGrid.CreateGridConfig(0, GridID, 1, "colModelVoucher_" + InstantID, "colNameVoucher_" + InstantID, "optionVoucher_" + InstantID);
                string config = string.Format(
                    "if(typeof Voucher_Instant =='undefined')" +
                    "   Voucher_Instant={{}}; " +
                    "Voucher_Instant['{0}'] = {{Instant:'{0}', RefType:'{1}', PersonType:'{2}',GridID:'{3}'}};\n", InstantID, RefType, PersonType, GridID);

                ltrScriptClient.Text = "<script type='text/javascript'>" + scriptServerConfig + config + "</script>";
            }
        }
    }
}