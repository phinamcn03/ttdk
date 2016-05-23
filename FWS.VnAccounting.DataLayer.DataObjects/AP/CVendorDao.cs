using System;
using System.Collections.Generic;
using System.Text;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.AP;
using FWS.VnAccounting.DataLayer.DataObjects.Base;
using FWS.VnAccounting.DataLayer.DataObjects.SQL;
using FWS.Framework.Log;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Core;

namespace FWS.VnAccounting.DataLayer.DataObjects.AP
{
    public class CVendorDao : CDaoBase
    {
        public IList<CVendor> GetVendorList(string pInputValue, ref COutputValue pOutput)
        {
            try
            {
                return CallFunctionWithList<CVendor>(CSystemFunction.GetVendorList, pInputValue,ref pOutput);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("CApplicationDao", ex.Message);
                return null;
            }
        }

        public CVendor GetVendor(string pInputValue)
        {
            try
            {
                return CallFunction<CVendor>(CSystemFunction.GetVendorList, pInputValue);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("CApplicationDao", ex.Message);
                return null;
            }
        }
        public CApplicationMessage UpdateVendor(string pInput)
        {
            try
            {
                return CallFunction<CApplicationMessage>(CSystemFunction.UpdateVendor, pInput);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("UpdateVendor", ex.Message);
                return null;
            }
        }
        #region VendorGroup
        public IList<CVendorGroup> GetVendorGroupList(string pInputValue, ref COutputValue pOutput)
        {
            try
            {
                return CallFunctionWithList<CVendorGroup>(CSystemFunction.GetVendorGroupList, pInputValue,ref pOutput);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("CApplicationDao", ex.Message);
                return null;
            }
        }

        public CVendorGroup GetVendorGroup(string pInputValue)
        {
            try
            {
                return CallFunction<CVendorGroup>(CSystemFunction.GetVendorGroupList, pInputValue);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("CApplicationDao", ex.Message);
                return null;
            }
        }

        public CApplicationMessage UpdateVendorGroup(string pInput)
        {
            try
            {
                return CallFunction<CApplicationMessage>(CSystemFunction.UpdateVendorGroup, pInput);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("UpdateCustomer", ex.Message);
                return null;
            }
        }
        #endregion
    }
    
}
