using System;
using System.Collections.Generic;
using System.Text;
using FWS.VnAccounting.DataLayer.DataObjects.Base;
using FWS.VnAccounting.DataLayer.DataObjects.SQL;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Core;
using FWS.Framework.Log;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.GeneralLedger;
namespace FWS.VnAccounting.DataLayer.DataObjects.GeneralLedger
{
    public class CTransactionDao:CDaoBase
    {
        public CApplicationMessage CreateTransaction(string pInputValue)
        {
            try
            {
                return CallFunction<CApplicationMessage>(CSystemFunction.CreateTransaction, pInputValue);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("CTransactionDao", ex.Message);
                return null;
            }
        }

        public CApplicationMessage CancelTransaction(string pInputValue)
        {
            try
            {
                return CallFunction<CApplicationMessage>(CSystemFunction.CancelTransaction, pInputValue);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("CTransactionDao", ex.Message);
                return null;
            }
        }

        public CApplicationMessage UpdateTransaction(string pInputValue)
        {
            try
            {
                return CallFunction<CApplicationMessage>(CSystemFunction.UpdateTransaction, pInputValue);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("CTransactionDao", ex.Message);
                return null;
            }
        }

        public IList<CTransaction> GetTransactionList(string pInputValue,ref COutputValue pOutput)
        {
            try
            {
                return CallFunctionWithList<CTransaction>(CSystemFunction.GetTransaction, pInputValue, ref pOutput);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("CTransactionDao", ex.Message);
                return null;
            }
        }

        public CTransaction GetTransaction(string pInputValue)
        {
            try
            {
                return CallFunction<CTransaction>(CSystemFunction.GetTransaction, pInputValue);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("CTransactionDao", ex.Message);
                return null;
            }
        }

        public IList<CTransactionDetail> GetTransactionDetail(string pInputValue)
        {
            try
            {
                return CallFunctionWithList<CTransactionDetail>(CSystemFunction.GetTransactionDetail, pInputValue);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("CTransactionDao", ex.Message);
                return null;
            }
        }

        public IList<CTransactionAccountDetail> GetTransactionAccountDetail(string pInputValue)
        {
            try
            {
                return CallFunctionWithList<CTransactionAccountDetail>(CSystemFunction.GetTransactionAccountDetail, pInputValue);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("CTransactionDao", ex.Message);
                return null;
            }
        }
    }
}
