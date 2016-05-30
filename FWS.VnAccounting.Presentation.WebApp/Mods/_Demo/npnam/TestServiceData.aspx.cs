using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using FWS.VnAccounting.Presentation.WebApp.Mods.Core;

namespace FWS.VnAccounting.Presentation.WebApp.Mods._Demo.npnam
{
    public partial class TestServiceData : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            ServiceREF.CoreService.CoreService service = new ServiceREF.CoreService.CoreService();
            ServiceREF.CoreService.COutputValue output = new ServiceREF.CoreService.COutputValue();
            ServiceREF.CoreService.CUserList messs = service.Login("<InputValue UserLogin=\"qc\" Password=\"123456\" />", ref output);
            
            if (output.IsSuccessfull)
            {                

                Response.Write(messs.FullName);
            }
            else
            {
                Response.Write("Invalid login info");
            }
        }
    }
}