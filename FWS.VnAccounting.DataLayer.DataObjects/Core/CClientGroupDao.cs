using System;
using System.Collections.Generic;
using System.Text;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Core;
using FWS.VnAccounting.DataLayer.DataObjects.SQL;
using FWS.VnAccounting.DataLayer.DataObjects.Base;
using FWS.Framework.Log;

namespace FWS.VnAccounting.DataLayer.DataObjects.Core
{
    public class CClientGroupDao:CDaoBase
    {
        public IList<CClientGroupConfig> GetClientGroupConfig(string pInputValue,ref COutputValue pOutputValue)
        {
            try
            {
                return CallFunctionWithList<CClientGroupConfig>(CSystemFunction.GetClientGroupConfig, pInputValue, ref pOutputValue);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("CClientGroupDao", ex.Message);
                return null;
            }
        }
        public IList<CClientGroup> GetClientGroupList(string pInputValue, ref COutputValue pOutputValue)
        {
            try
            {
                return CallFunctionWithList<CClientGroup>(CSystemFunction.GetClientGroup, pInputValue, ref pOutputValue);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("CClientGroupDao", ex.Message);
                return null;
            }
        }
        public CApplicationMessage UpdateClientGroupConfig(string pInputValue)
        {
            try
            {
                return CallFunction<CApplicationMessage>(CSystemFunction.UpdateClientGroupConfig, pInputValue);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("CClientGroupDao", ex.Message);
                return null;
            }
        }
    }
}
