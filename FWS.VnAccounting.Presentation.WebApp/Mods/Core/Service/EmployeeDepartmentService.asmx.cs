using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using FWS.VnAccounting.Presentation.WebApp.Mods.Core.Class;

namespace FWS.VnAccounting.Presentation.WebApp.Mods.Core.Service
{
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]

    public class EmployeeDepartmentService : System.Web.Services.WebService
    {
        [WebMethod]
        public string GetPersonRole(string InputValue)
        {
            return CEmployeeDepartmentUI.GetPersonRole(InputValue); 
        }
        [WebMethod]
        public string Update(string inputValue)
        {
            return CEmployeeDepartmentUI.Update(inputValue);
        }
    }
}
