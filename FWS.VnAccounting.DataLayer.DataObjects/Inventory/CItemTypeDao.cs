using System;
using System.Collections.Generic;
using System.Text;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Inventory;
using FWS.Framework.Log;
using FWS.VnAccounting.DataLayer.DataObjects.SQL;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Core;
using FWS.VnAccounting.DataLayer.DataObjects.Base;

namespace FWS.VnAccounting.DataLayer.DataObjects.Inventory
{
    public class CItemTypeDao:CDaoBase
    {
        public IList<CItemType> GetItemTypeList(string pInputValue, ref COutputValue pOutput)
        {
            try
            {
                return CallFunctionWithList<CItemType>(CSystemFunction.GetItemType, pInputValue, ref pOutput);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("CItemsDao", ex.Message);
                return null;
            }
        }
    }
}
