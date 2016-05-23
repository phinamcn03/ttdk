using System;
using System.Collections.Generic;
using System.Web;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.GeneralLedger;
using FWS.VnAccounting.DataLayer.DataObjects.GeneralLedger;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Core;

namespace FWS.VnAccounting.Service.Data.GeneralLedger.Class
{
    public class CAccountListService
    {
        public List<CAccountList> GetAccountList(string InputValue,ref COutputValue Output)
        {
            return (List<CAccountList>)new CAccountListDao().GetAccountList(InputValue, ref Output);
        }
        public string GetAccountListInCSV(string InputValue, ref string PageInfo)
        {
            COutputValue pInfo = new COutputValue();
            IList<CAccountList> list =new CAccountListDao().GetAccountList(InputValue, ref pInfo);
            PageInfo = pInfo.ToCSV();
            return CAccountList.ToCSV<CAccountList>(list);
        }

        public CAccountList GetAccount(string InputValue)
        {
            return new CAccountListDao().GetAccount(InputValue);
        }

        public CApplicationMessage UpdateAccount(string InputValue)
        {
            return new CAccountListDao().UpdateAccount(InputValue);
        }

    }
}