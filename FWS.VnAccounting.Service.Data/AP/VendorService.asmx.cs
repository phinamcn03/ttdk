using System;
using System.Collections.Generic;
using System.Web;
using System.Web.Services;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Core;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.AP;

namespace FWS.VnAccounting.Service.Data
{
    /// <summary>
    /// Summary description for VendorService
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]

    public class VendorService : System.Web.Services.WebService
    {
        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\" /&gt;")]
        public List<CVendor> GetVendorList(string InputValue,ref COutputValue Output)
        {
            return new CVendorService().GetVendorList(InputValue,ref Output);
        }
        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" VendorID=\"13\" /&gt;")]
        public CVendor GetVendor(string InputValue)
        {
            return new CVendorService().GetVendor(InputValue);
        }
        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\" Code=\"phu\" Name=\"huu\" Name2=\"le\" Address=\"vuntau\" TaxNo=\"123\" Phone=\"vuntau\" Phone2=\"123\" Email=\"vuntau\" Fax=\"123\" WebSite=\"vuntau\" Status=\"-13\" /&gt;")]
        public CApplicationMessage UpdateItem(string InputValue)
        {
            return new CVendorService().UpdateVendor(InputValue);
        }

        #region vendorGroup
        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\" /&gt;")]
        public List<CVendorGroup> GetVendorGroupList(string InputValue, ref COutputValue Output)
        {
            return new CVendorService().GetVendorGroupList(InputValue,ref Output);
        }
        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" ID=\"13\" /&gt;")]
        public CVendorGroup GetVendorGroup(string InputValue)
        {
            return new CVendorService().GetVendorGroup(InputValue);
        }
        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\" Code=\"phu\" Name=\"huu\" ID=\"12\" Action =\"DELETE\"  Status=\"-13\" /&gt;")]
        public CApplicationMessage UpdateVendorGroup(string InputValue)
        {
            return new CVendorService().UpdateVendorGroup(InputValue);
        }
        #endregion
    }
}
