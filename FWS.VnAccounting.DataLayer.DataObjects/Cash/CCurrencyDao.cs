using System;
using System.Collections.Generic;
using System.Text;
using FWS.VnAccounting.DataLayer.DataObjects.Base;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Inventory;
using FWS.Framework.Log;
using FWS.VnAccounting.DataLayer.DataObjects.SQL;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Core;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Cash;

namespace FWS.VnAccounting.DataLayer.DataObjects.Inventory
{
    public class CCurrencyDao : CDaoBase
    {
        public IList<CCurrency> GetCurrencyList(string pInputValue, ref COutputValue pOutput)
        {
            try
            {
                return CallFunctionWithList<CCurrency>(CSystemFunction.GetCurrencyList, pInputValue,ref pOutput);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("CItemsDao", ex.Message);
                return null;
            }
        }

        public CCurrency GetCurrency(string pInputValue)
        {
            try
            {
                return CallFunction<CCurrency>(CSystemFunction.GetCurrencyList, pInputValue);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("CItemsDao", ex.Message);
                return null;
            }
        }

        public CApplicationMessage UpdateCurrency(string pInputValue)
        {
            try
            {
                return CallFunction<CApplicationMessage>(CSystemFunction.UpdateCurrency, pInputValue);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("CItemsDao", ex.Message);
                return null;
            }
        }


        public IList<CItemGroup> GetInventoryItemGroupList(string pInputValue)
        {
            try
            {
                return CallFunctionWithList<CItemGroup>(CSystemFunction.GetInventoryItemGroup, pInputValue);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("CItemsDao", ex.Message);
                return null;
            }
        }

        public CItemGroup GetInventoryItemGroup(string pInputValue)
        {
            try
            {
                return CallFunction<CItemGroup>(CSystemFunction.GetInventoryItemGroup, pInputValue);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("CItemsDao", ex.Message);
                return null;
            }
        }

        public CApplicationMessage UpdateInventoryItemGroup(string pInputValue)
        {
            try
            {
                return CallFunction<CApplicationMessage>(CSystemFunction.UpdateInventoryItemGroup, pInputValue);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("CItemsDao", ex.Message);
                return null;
            }
        }
    }
}
