using System;
using System.Collections.Generic;
using System.Text;
using FWS.VnAccounting.DataLayer.DataObjects.Base;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Inventory;
using FWS.Framework.Log;
using FWS.VnAccounting.DataLayer.DataObjects.SQL;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Core;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Cash;
namespace FWS.VnAccounting.DataLayer.DataObjects.Cash
{
    public class CExchangeRateDao : CDaoBase
    {
        public IList<CExchangeRate> GetExchangeRateList(string pInputValue, ref COutputValue pOutput)
        {
            try
            {
                return CallFunctionWithList<CExchangeRate>(CSystemFunction.GetCurrencyList, pInputValue, ref pOutput);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("CItemsDao", ex.Message);
                return null;
            }
        }
    }
}
