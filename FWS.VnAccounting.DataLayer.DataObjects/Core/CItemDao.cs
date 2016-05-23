using System;
using System.Collections.Generic;
using System.Text;
using FWS.VnAccounting.DataLayer.DataObjects.Base;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Core;
using FWS.VnAccounting.DataLayer.DataObjects.SQL;
using FWS.Framework.Log;

namespace FWS.VnAccounting.DataLayer.DataObjects.Core
{
    public class CItemDao : CDaoBase
    {
        public IList<CItem> GetItemList(string pInputValue)
        {
            try
            {
                return CallFunctionWithList<CItem>(CSystemFunction.GetItemList, pInputValue);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("CApplicationDao", ex.Message);
                return null;
            }
        }
    }
}
