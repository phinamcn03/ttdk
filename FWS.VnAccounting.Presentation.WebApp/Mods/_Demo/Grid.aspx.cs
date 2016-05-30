using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Text;

using FWS.VnAccounting.Presentation.WebApp.Mods.Core;
namespace FWS.VnAccounting.Presentation.WebApp.Mods._Demo
{
    public partial class Grid : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            CreateGrid();
        }
        private void CreateGrid()
        {
            string scriptServerConfig = CGrid.CreateGridConfig(0, 5, 1, "colModelTax", "colNameTax", "optionServerTax");
            //Page.ClientScript.RegisterClientScriptBlock(Page.GetType(), "ServerConfigStockGrid", scriptServerConfig, true);
            ltrScriptClient.Text = "<script type='text/javascript'>" + scriptServerConfig + "</script>";       
        }
    }
}