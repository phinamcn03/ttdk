using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

using FWS.Framework.Web.TemplateController;
using FWS.VnAccounting.Presentation.WebApp.Mods.Core;

namespace FWS.VnAccounting.Presentation.WebApp.Mods.ACore
{
    public partial class GroupBase : CTemplateUserControl
    {
        public string InstantID { get; set; }
        public string PersonType { get; set; }
        public string RefType { get; set; }
        public int GridID { get; set; }

        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.IsPostBack)
            {
                string scriptServerConfig = CGrid.CreateGridConfig(0, GridID, 1, "colModelGroup_" + InstantID, "colNameGroup_" + InstantID, "optionGroup_" + InstantID);
                string config = string.Format(
                    "if(typeof GroupBase_Instant =='undefined')" +
                    "   GroupBase_Instant={{}}; " +
                    "GroupBase_Instant['{0}'] = {{Instant:'{0}', RefType:'{1}', GridID:'{2}'}};\n", InstantID, RefType, GridID);
                string strConfig = scriptServerConfig + config;                
                ltrScriptClient.Text = string.Format("<script type='text/javascript'>{0};</script>", strConfig);
            }
        }
    }
}