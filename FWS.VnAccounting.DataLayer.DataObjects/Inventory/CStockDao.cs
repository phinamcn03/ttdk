using System;
using System.Collections.Generic;
using System.Text;
using FWS.VnAccounting.DataLayer.DataObjects.Base;
using FWS.Framework.Log;
using FWS.VnAccounting.DataLayer.DataObjects.SQL;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Inventory;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Core;

namespace FWS.VnAccounting.DataLayer.DataObjects.Inventory
{
    public class CStockDao : CDaoBase
    {
        public IList<CStock> GetInventoryStockList(string pInputValue, ref COutputValue pOutput)
        {
            try
            {
                return CallFunctionWithList<CStock>(CSystemFunction.GetInventoryStock, pInputValue,ref pOutput);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("CStockDao", ex.Message);
                return null;
            }
        }

        public CStock GetInventoryStock(string pInputValue)
        {
            try
            {
                return CallFunction<CStock>(CSystemFunction.GetInventoryStock, pInputValue);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("CStockDao", ex.Message);
                return null;
            }
        }

        public CApplicationMessage UpdateInventoryStock(string pInputValue)
        {
            try
            {
                return CallFunction<CApplicationMessage>(CSystemFunction.UpdateInventoryStock, pInputValue);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("CStockDao", ex.Message);
                return null;
            }
        }
    }
}
