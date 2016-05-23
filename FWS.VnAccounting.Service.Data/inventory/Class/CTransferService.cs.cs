using System;
using System.Collections.Generic;
using System.Web;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Inventory;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Core;
using FWS.VnAccounting.DataLayer.DataObjects.Inventory;

namespace FWS.VnAccounting.Service.Data.Inventory
{
    public class CTransferService
    {
        #region Inward
        //public List<CInward> GetInwardList(string InputValue, ref COutputValue Output)
        //{
        //    IList<CInward> list = new CTransferDao().upTransfer(InputValue, ref Output);
        //    return (List<CInward>)list;
        //}
        //public CInward GetInward(string InputValue)
        //{
        //    CInward list = new CInwardDao().GetInward(InputValue);
        //    return list;
        //}
        public CApplicationMessage UpdateTransfer(string InputValue)
        {
            CApplicationMessage list = new CTransferDao().UpdateTransfer(InputValue);
            return list;//<CItems>(list);
        }

        public CTransactionsStock GetTransfer(string InputValue)
        {
            CTransactionsStock list = new CTransferDao().GetTransfer(InputValue);
            return list;//<CItems>(list);
        }

        public List<CTransactionsStock> GetTransferList(string InputValue, ref COutputValue pOutput)
        {
            List<CTransactionsStock> list = (List<CTransactionsStock>)new CTransferDao().GetTransferList(InputValue, ref pOutput);
            return list;//<CItems>(list);
        }
        public List<CTransactionsStockDetails> GetTransferDetails(string InputValue, ref COutputValue pOutput)
        {
            List<CTransactionsStockDetails> list = (List<CTransactionsStockDetails>)new CTransferDao().GetTransferDetails(InputValue, ref pOutput);
            return list;//<CItems>(list);
        }
        #endregion
    }
}