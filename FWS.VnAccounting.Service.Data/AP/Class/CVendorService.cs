using System;
using System.Collections.Generic;
using System.Web;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.AP;
using FWS.VnAccounting.DataLayer.DataObjects.AP;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Core;

namespace FWS.VnAccounting.Service.Data
{
    public class CVendorService
    {
        public List<CVendor> GetVendorList(string InputValue,ref COutputValue Output)
        {
         
            IList<CVendor> list = new CVendorDao().GetVendorList(InputValue,ref Output);
            return (List<CVendor>)(list);
        }
        public CVendor GetVendor(string InputValue)
        {
            return new CVendorDao().GetVendor(InputValue);
        }
        public CApplicationMessage UpdateVendor(string InputValue)
        {
            CApplicationMessage list = new CVendorDao().UpdateVendor(InputValue);
            return list;//<CItems>(list);
        }
        #region VendorGroup
        public List<CVendorGroup> GetVendorGroupList(string InputValue,ref COutputValue Output)
        {          
            IList<CVendorGroup> list = new CVendorDao().GetVendorGroupList(InputValue,ref Output);
            return (List<CVendorGroup>)(list);
        }
        public CVendorGroup GetVendorGroup(string InputValue)
        {
            return new CVendorDao().GetVendorGroup(InputValue);
        }
        public CApplicationMessage UpdateVendorGroup(string InputValue)
        {
            CApplicationMessage list = new CVendorDao().UpdateVendorGroup(InputValue);
            return list;//<CItems>(list);
        }
        #endregion
    }
}