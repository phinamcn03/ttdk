using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace FWS.VnAccounting.Presentation.Demo
{
    public partial class _Default : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            InvService.InventoryService inv = new InvService.InventoryService();
            InvService.CPagingInfo page = new InvService.CPagingInfo();
            InvService.CUnit[] unit = inv.GetInventoryUnitList("<InputValue UserID='1' Session='ED45A7F1-9FB8-4D82-9D48-1B2238DC666C' />", ref page);

            InvService.CApplicationMessage appMsg;
            appMsg = inv.UpdateInventoryUnit("<InputValue Code='aaa' Name='aab' Actice='1'/>");
        }
    }
}

