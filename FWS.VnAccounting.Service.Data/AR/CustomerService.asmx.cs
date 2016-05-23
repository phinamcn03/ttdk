using System;
using System.Collections.Generic;
using System.Web;
using System.Web.Services;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.AR;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Core;

namespace FWS.VnAccounting.Service.Data.Customer
{
    /// <summary>
    /// Summary description for CustomerService
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]

    public class CustomerService : System.Web.Services.WebService
    {
       
        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\" /&gt;")]
        public List<CCustomer> GetCustomerList(string InputValue,ref COutputValue Output)
        {
            return new CCustomerService().GetCustomerList(InputValue,ref Output);
        }
        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" CustomerID=\"13\" /&gt;")]
        public CCustomer GetCustomer(string InputValue)
        {
            return new CCustomerService().GetCustomer(InputValue);
        }
        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\" Code=\"phu\" Name=\"huu\" Name2=\"le\" Address=\"vuntau\" TaxNo=\"123\" Phone=\"vuntau\" Phone2=\"123\" Email=\"vuntau\" Fax=\"123\" WebSite=\"vuntau\" Status=\"-13\" /&gt;")]
        public CApplicationMessage UpdateItem(string InputValue)
        {
            return new CCustomerService().UpdateCustomer(InputValue);
        }

        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\" /&gt;")]
        public List<CCustomerGroup> GetCustomerGroupList(string InputValue, ref COutputValue Output)
        {
            return new CCustomerService().GetCustomerGroupList(InputValue,ref Output);
        }
        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" ID=\"13\" /&gt;")]
        public CCustomerGroup GetCustomerGroup(string InputValue)
        {
            return new CCustomerService().GetCustomerGroup(InputValue);
        }
        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\" Code=\"phu\" Name=\"huu\" ID=\"12\" Action =\"DELETE\"  Status=\"-13\" /&gt;")]
        public CApplicationMessage UpdateCustomerGroup(string InputValue)
        {
            return new CCustomerService().UpdateCustomerGroup(InputValue);
        }

    }
}
