using System;
using System.Collections.Generic;
using System.Text;

using FWS.VnAccounting.DataLayer.DataObjects.Base;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Core;
using FWS.VnAccounting.DataLayer.DataObjects.SQL;
using FWS.Framework.Log;

namespace FWS.VnAccounting.DataLayer.DataObjects.Core
{
    public class CGroupBaseDao : CDaoBase
    {
        public IList<CGroupBase> GetGroupBaseList(string pInputValue, ref COutputValue pOutputValue)
        {
            try
            {
                return CallFunctionWithList<CGroupBase>(CSystemFunction.GetGroup, pInputValue,ref pOutputValue);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("CGroupBaseDao", ex.Message);
                return null;
            }
        }

        public CGroupBase GetGroupBase(string pInputValue)
        {
            try
            {
                return CallFunction<CGroupBase>(CSystemFunction.GetGroup, pInputValue);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("CGroupBaseDao", ex.Message);
                return null;
            }
        }

        public CApplicationMessage UpdateGroupBase(string pInputValue)
        {
            try
            {
                return CallFunction<CApplicationMessage>(CSystemFunction.UpdateGroup, pInputValue);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("CGroupBaseDao", ex.Message);
                return null;
            }
        }
    }
}
