using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

using FWS.Framework.Web.TemplateController;
using FWS.VnAccounting.Presentation.WebApp.Mods.Core;
namespace FWS.VnAccounting.Presentation.WebApp.Mods.Cash
{
    public partial class CashBase : CTemplateUserControl
    {
        public string InstantID { get; set; }
        public string PersonType { get; set; }
        public string RefType { get; set; }
        public int ButtoanGridID { get; set; }
        public int InvoiceGridID { get; set; }
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.IsPostBack)
            {               
                string scriptServerConfig = CGrid.CreateGridConfig(0, ButtoanGridID, 1, "colModelButtoan_" + InstantID, "colNameButtoan_" + InstantID, "optionButtoan_" + InstantID);
               scriptServerConfig += CGrid.CreateGridConfig(0, InvoiceGridID, 1, "colModelInvoice_" + InstantID, "colNameInvoice_" + InstantID, "optionInvoice_" + InstantID);

                string config = string.Format(
                    "if(typeof Cash_Instant =='undefined')" +
                    "   Cash_Instant={{}}; " +
                    "Cash_Instant['{0}'] = {{Instant:'{0}', RefType:'{1}', ButtoanGridID:'{2}', InvoiceGridID:'{3}'}};\n", InstantID, RefType, ButtoanGridID,InvoiceGridID);

                ltrScriptClient.Text = "<script type='text/javascript'>" + scriptServerConfig + config + "</script>";
            }
        }
    }
}