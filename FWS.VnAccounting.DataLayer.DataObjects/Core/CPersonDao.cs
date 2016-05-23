using System;
using System.Collections.Generic;
using System.Text;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Base;
using FWS.VnAccounting.DataLayer.DataObjects.Base;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Core;
using FWS.VnAccounting.DataLayer.DataObjects.SQL;
using FWS.Framework.Log;

namespace FWS.VnAccounting.DataLayer.DataObjects.Core
{

    public class CPersonDao : CDaoBase
    {
        public IList<CPerson> GetPersonList(string pInputValue, ref COutputValue pOutputValue)
        {
            try
            {
                return CallFunctionWithList<CPerson>(CSystemFunction.GetPerson, pInputValue,ref pOutputValue);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("CPersonDao", ex.Message);
                return null;
            }
        }

        public CPerson GetPerson(string pInputValue)
        {
            try
            {
                return CallFunction<CPerson>(CSystemFunction.GetPerson, pInputValue);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("CPersonDao", ex.Message);
                return null;
            }
        }

        public IList<CPersonRole> GetPersonRoleList(string pInputValue, ref COutputValue pOutputValue)
        {
            try
            {
                return CallFunctionWithList<CPersonRole>(CSystemFunction.GetPersonRole, pInputValue,ref pOutputValue);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("CPersonDao", ex.Message);
                return null;
            }
        }
        public CPersonRole GetPersonRole(string pInputValue)
        {
            try
            {
                return CallFunction<CPersonRole>(CSystemFunction.GetPersonRole, pInputValue);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("CPersonDao", ex.Message);
                return null;
            }
        }
        public CApplicationMessage UpdatePersonRole(string pInputValue)
        {
            try
            {
                return CallFunction<CApplicationMessage>(CSystemFunction.UpdatePersonRole, pInputValue);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("CPersonDao", ex.Message);
                return null;
            }
        }
    }
}
