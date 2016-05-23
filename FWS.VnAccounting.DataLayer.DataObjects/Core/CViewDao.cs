using System;
using System.Collections.Generic;
using System.Text;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Core;
using FWS.Framework.Log;
using FWS.VnAccounting.DataLayer.DataObjects.SQL;
using FWS.VnAccounting.DataLayer.DataObjects.Base;

namespace FWS.VnAccounting.DataLayer.DataObjects.Core
{
    public class CViewDao:CDaoBase
    {
        public IList<CViewList> GetViewList(string pInputValue,ref COutputValue pOutputValue)
        {
            try
            {
                return CallFunctionWithList<CViewList>(CSystemFunction.GetViewList, pInputValue, ref pOutputValue);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("CViewDao", ex.Message);
                return null;
            }
        }

        public IList<CDesignParameter> GetViewDesignParameter(string pInputValue, ref COutputValue pOutputValue)
        {
            try
            {
                return CallFunctionWithList<CDesignParameter>(CSystemFunction.GetViewDesignParameter, pInputValue, ref pOutputValue);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("CViewDao", ex.Message);
                return null;
            }
        }
    }
}
