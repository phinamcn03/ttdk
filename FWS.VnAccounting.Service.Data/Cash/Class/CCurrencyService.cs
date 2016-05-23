using System;
using System.Collections.Generic;
using System.Web;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Cash;
using FWS.VnAccounting.DataLayer.DataObjects.Inventory;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Core;

namespace FWS.VnAccounting.Service.Data.Cash
{
    public class CCurrencyService
    {
        public List<CCurrency> GetCurrencyList(string InputValue, ref COutputValue Output)
        {
            IList<CCurrency> list = new FWS.VnAccounting.DataLayer.DataObjects.Inventory.CCurrencyDao().GetCurrencyList(InputValue, ref Output);
            return (List<CCurrency>)(list);
        }
        public CCurrency GetCurrency(string InputValue)
        {
            return new CCurrencyDao().GetCurrency(InputValue);
        }
        public CApplicationMessage UpdateCurrency(string InputValue)
        {
            CApplicationMessage list = new CCurrencyDao().UpdateCurrency(InputValue);
            return list;//<CItems>(list);
        }
    }
}