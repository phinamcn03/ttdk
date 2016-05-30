using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace FWS.VnAccounting.Presentation.WebApp.Mods.ACore
{
    public partial class GroupBaseEntry : System.Web.UI.UserControl
    {
        public string InstantID { get; set; }
        public string PersonType { get; set; }
        public string RefType { get; set; }
        public int GridID { get; set; }

        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.IsPostBack)
            {
                ltrScriptClient.Text = "<script type='text/javascript'>" + string.Format(
                    "if(typeof GroupBaseEntry_Instant =='undefined') GroupBaseEntry_Instant={{}}; " +
                    "GroupBaseEntry_Instant['{0}'] = {{Instant:'{0}', RefType:'{1}', GridID:'{2}'}};\n", InstantID, RefType, GridID) + "</script>";
            }
        }
    }
}