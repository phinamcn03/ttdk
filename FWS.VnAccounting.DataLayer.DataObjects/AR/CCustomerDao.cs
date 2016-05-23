using System;
using System.Collections.Generic;
using System.Text;
using FWS.VnAccounting.DataLayer.DataObjects.Base;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.AR;
using FWS.Framework.Log;
using FWS.VnAccounting.DataLayer.DataObjects.SQL;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Core;

namespace FWS.VnAccounting.DataLayer.DataObjects.AR
{
    public class CCustomerDao : CDaoBase
    {
        public IList<CCustomer> GetCustomerList(string pInputValue, ref COutputValue pOutput)
        {
            try
            {
                return CallFunctionWithList<CCustomer>(CSystemFunction.GetCustomerList, pInputValue,ref pOutput);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("CApplicationDao", ex.Message);
                return null;
            }
        }

        public CCustomer GetCustomer(string pInputValue)
        {
            try
            {
                return CallFunction<CCustomer>(CSystemFunction.GetCustomerList, pInputValue);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("CApplicationDao", ex.Message);
                return null;
            }
        }

        public CApplicationMessage UpdateCustomer(string pInput)
        {
            try
            {
                return CallFunction<CApplicationMessage>(CSystemFunction.UpdateCustomer, pInput);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("UpdateCustomer", ex.Message);
                return null;
            }
        }

        #region CustomerGroup
        public IList<CCustomerGroup> GetCustomerGroupList(string pInputValue, ref COutputValue pOutput)
        {
            try
            {
                return CallFunctionWithList<CCustomerGroup>(CSystemFunction.GetCustomerGroupList, pInputValue,ref pOutput);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("CApplicationDao", ex.Message);
                return null;
            }
        }

        public CCustomerGroup GetCustomerGroup(string pInputValue)
        {
            try
            {
                return CallFunction<CCustomerGroup>(CSystemFunction.GetCustomerGroupList, pInputValue);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("CApplicationDao", ex.Message);
                return null;
            }
        }

        public CApplicationMessage UpdateCustomerGroup(string pInput)
        {
            try
            {
                return CallFunction<CApplicationMessage>(CSystemFunction.UpdateCustomerGroup, pInput);
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
