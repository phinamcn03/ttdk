using System;
using System.Collections.Generic;
using System.Text;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.GeneralLedger;
using FWS.VnAccounting.DataLayer.DataObjects.Base;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Core;
using FWS.VnAccounting.DataLayer.DataObjects.SQL;
using FWS.Framework.Log;

namespace FWS.VnAccounting.DataLayer.DataObjects.GeneralLedger
{
    public class CEmployeeDao:CDaoBase
    {
        public IList<CEmployee> GetEmployeeList(string pInputValue, ref COutputValue pOutput)
        {
            try
            {
                return CallFunctionWithList<CEmployee>(CSystemFunction.GetEmployee, pInputValue, ref pOutput);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("CEmployeeDao", ex.Message);
                return null;
            }
        }

        public CEmployee GetEmployee(string pInputValue)
        {
            try
            {
                return CallFunction<CEmployee>(CSystemFunction.GetEmployee, pInputValue);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("CEmployeeDao", ex.Message);
                return null;
            }
        }

        public CApplicationMessage UpdateEmployee(string pInputValue)
        {
            try
            {
                return CallFunction<CApplicationMessage>(CSystemFunction.UpdateEmployee, pInputValue);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("CEmployeeDao", ex.Message);
                return null;
            }
        }
    }
}
