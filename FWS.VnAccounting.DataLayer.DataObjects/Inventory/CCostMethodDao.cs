using System;
using System.Collections.Generic;
using System.Text;
using FWS.VnAccounting.DataLayer.DataObjects.Base;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Core;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Inventory;
using FWS.Framework.Log;
using FWS.VnAccounting.DataLayer.DataObjects.SQL;

namespace FWS.VnAccounting.DataLayer.DataObjects.Inventory
{
    public class CCostMethodDao : CDaoBase
    {
        public IList<CCostMethod> GetCostMethodList(string pInputValue, ref COutputValue pOutput)
        {
            try
            {
                return CallFunctionWithList<CCostMethod>(CSystemFunction.GetCostMethod, pInputValue, ref pOutput);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("CItemsDao", ex.Message);
                return null;
            }
        }
    }
}
