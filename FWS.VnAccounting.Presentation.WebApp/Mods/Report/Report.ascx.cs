using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using FWS.Framework.Web.TemplateController;
using System.Text;

namespace FWS.VnAccounting.Presentation.WebApp.Mods.Report
{
    public partial class Report : CTemplateUserControl
    {
        public string InstantID { get; set; }
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.IsPostBack)
            {
                Dictionary<string, object> param = (Dictionary<string, object>)Data;
                StringBuilder result = new StringBuilder();
                result.Append("\n var reportParameters ='");
                string reportTemplate = "\n var reportInstant{0}={1};\n";
                foreach (var para in param)
                {
                    result.AppendFormat(" {0}=\"{1}\"", para.Key, para.Value.ToString());
                    if (para.Key == "p1")
                    {
                        reportTemplate = string.Format("\n var reportInstant{0}={1};\n", para.Key, para.Value.ToString());
                        InstantID = para.Value.ToString();
                    }
                }
                result.Append("';\n");
                ltrScriptClient.Text = "<script type='text/javascript'>" + result.ToString() + reportTemplate + "</script>";
            }
        }
    }
}