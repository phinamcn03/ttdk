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
    public partial class CRegisterAppendix:  CTemplateUserControl
    {
        public string InstantID { get; set; }
        protected void Page_Load(object sender, EventArgs e)
        {
            string scriptServerConfig = CGrid.CreateGridConfig(0, 76, 1, "colModelCollateral" + InstantID, "colNameCollateral" + InstantID, "optionServerCollateral" + InstantID);
            scriptServerConfig += CGrid.CreateGridConfig(0, 77, 1, "colModelReCollateral" + InstantID, "colNameReCollateral" + InstantID, "optionServerReCollateral" + InstantID);
            scriptServerConfig += CGrid.CreateGridConfig(0, 78, 1, "colModelProperty" + InstantID, "colNameProperty" + InstantID, "optionServerProperty" + InstantID);
            string config = string.Format(
                        "if(typeof CRegisterAppendix_Instant =='undefined')" +
                        "   CRegisterAppendix_Instant={{}}; " +
                        "CRegisterAppendix_Instant['{0}'] = {{Instant:'{0}'}};\n", InstantID);

            ltrScriptClient.Text = "<script type='text/javascript'>" + scriptServerConfig + config+"</script>";
        }
    }
}