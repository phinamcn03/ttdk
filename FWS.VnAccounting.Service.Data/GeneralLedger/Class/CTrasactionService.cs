using System;
using System.Collections.Generic;
using System.Web;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Core;
using FWS.VnAccounting.DataLayer.DataObjects.GeneralLedger;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.GeneralLedger;

namespace FWS.VnAccounting.Service.Data.GeneralLedger.Class
{
    public class CTrasactionService
    {
        public CApplicationMessage CreateTransaction(string InputValue)
        {
            return new CTransactionDao().CreateTransaction(InputValue);
        }

        public CApplicationMessage CancelTransaction(string InputValue)
        {
            return new CTransactionDao().CancelTransaction(InputValue);
        }

        public CApplicationMessage UpdateTransaction(string InputValue)
        {
            return new CTransactionDao().UpdateTransaction(InputValue);
        }
      
        public List<CTransaction> GetTransactionList(string InputValue, ref COutputValue Output)
        {
            return (List<CTransaction>)new CTransactionDao().GetTransactionList(InputValue, ref Output);
        }

        public CTransaction GetTransaction(string InputValue)
        {
            return new CTransactionDao().GetTransaction(InputValue);
        }

        public List<CTransactionDetail> GetTransactionDetail(string InputValue)
        {
            return (List<CTransactionDetail>)new CTransactionDao().GetTransactionDetail(InputValue);
        }

        public List<CTransactionAccountDetail> GetTransactionAccountDetail(string InputValue)
        {
            return (List<CTransactionAccountDetail>)new CTransactionDao().GetTransactionAccountDetail(InputValue);
        }
    }
}