using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using FWS.Framework.Web.TemplateController;
using FWS.VnAccounting.Presentation.WebApp.Mods.Core;

namespace FWS.VnAccounting.Presentation.WebApp.Mods._Core
{
    public partial class GridBase : CTemplateUserControl
    {
        public string InstantID { get; set; }
        public string UrlData { get; set; }
        public string RefType { get; set; }
        public int GridID { get; set; }

        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.IsPostBack)
            {
                string scriptServerConfig = CGrid.CreateGridConfig(0, GridID, 1, "colModelGridBase_" + InstantID, "colNameGridBase_" + InstantID, "optionGridBase_" + InstantID);
                string config = string.Format(
                    "if(typeof GridBase_Instant =='undefined')" +
                    "   GridBase_Instant={{}}; " +
                    "GridBase_Instant['{0}'] = {{Instant:'{0}', UrlData:'{1}', GridID:'{2}'}};\n", InstantID, UrlData, GridID);

                ltrScriptClient.Text = "<script type='text/javascript'>" + scriptServerConfig + config + "</script>";
            }
        }
    }
}