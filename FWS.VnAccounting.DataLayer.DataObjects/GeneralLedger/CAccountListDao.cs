using System;
using System.Collections.Generic;
using System.Text;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.GeneralLedger;
using FWS.Framework.Log;
using FWS.VnAccounting.DataLayer.DataObjects.Base;
using FWS.VnAccounting.DataLayer.DataObjects.SQL;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Core;

namespace FWS.VnAccounting.DataLayer.DataObjects.GeneralLedger
{
    public class CAccountListDao:CDaoBase
    {
        public IList<CAccountList> GetAccountList(string pInputValue, ref COutputValue pOutput)
        {
            try
            {
                return CallFunctionWithList<CAccountList>(CSystemFunction.GetAccountList, pInputValue, ref pOutput);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("CAccountListDao", ex.Message);
                return null;
            }
        }

        public CAccountList GetAccount(string pInputValue)
        {
            try
            {
                return CallFunction<CAccountList>(CSystemFunction.GetAccountList, pInputValue);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("CAccountListDao", ex.Message);
                return null;
            }
        }

        public CApplicationMessage UpdateAccount(string pInputValue)
        {
            try
            {
                return CallFunction<CApplicationMessage>(CSystemFunction.UpdateAccountList, pInputValue);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("CAccountListDao", ex.Message);
                return null;
            }
        }
    }
}
