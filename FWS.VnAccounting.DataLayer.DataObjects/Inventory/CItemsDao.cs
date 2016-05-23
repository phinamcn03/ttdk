using System;
using System.Collections.Generic;
using System.Text;
using FWS.VnAccounting.DataLayer.DataObjects.Base;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Inventory;
using FWS.Framework.Log;
using FWS.VnAccounting.DataLayer.DataObjects.SQL;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Core;

namespace FWS.VnAccounting.DataLayer.DataObjects.Inventory
{
    public class CItemsDao : CDaoBase
    {
        public IList<CItems> GetInventoryItemsList(string pInputValue, ref COutputValue pOutput)
        {
            try
            {
                return CallFunctionWithList<CItems>(CSystemFunction.GetInventoryItems, pInputValue,ref pOutput);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("CItemsDao", ex.Message);
                return null;
            }
        }

        public CItems GetInventoryItem(string pInputValue)
        {
            try
            {
                return CallFunction<CItems>(CSystemFunction.GetInventoryItems, pInputValue);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("CItemsDao", ex.Message);
                return null;
            }
        }

        public CApplicationMessage UpdateInventoryItem(string pInputValue)
        {
            try
            {
                return CallFunction<CApplicationMessage>(CSystemFunction.UpdateInventoryItem, pInputValue);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("CItemsDao", ex.Message);
                return null;
            }
        }

        public IList<CItemGroup> GetInventoryItemGroupList(string pInputValue, ref COutputValue pOutput)
        {
            try
            {
                return CallFunctionWithList<CItemGroup>(CSystemFunction.GetInventoryItemGroup, pInputValue,ref pOutput);
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
