using System;
using System.Collections.Generic;
using System.Text;
using FWS.VnAccounting.DataLayer.DataObjects.Base;
using FWS.VnAccounting.DataLayer.DataObjects.SQL;
using FWS.Framework.Log;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Inventory;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Core;

namespace FWS.VnAccounting.DataLayer.DataObjects.Inventory
{
    public class CUnitDao : CDaoBase
    {
        public IList<CUnit> GetInventoryUnitList(string pInputValue, ref COutputValue pOutput)
        {
            try
            {
                return CallFunctionWithList<CUnit>(CSystemFunction.GetInventoryUnit, pInputValue, ref pOutput);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("CUnitDao", ex.Message);
                return null;
            }
        }

        public CUnit GetInventoryUnit(string pInputValue)
        {
            try
            {
                return CallFunction<CUnit>(CSystemFunction.GetInventoryUnit, pInputValue);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("CUnitDao", ex.Message);
                return null;
            }
        }

        public CApplicationMessage UpdateInventoryUnit(string pInputValue)
        {
            try
            {
                return CallFunction<CApplicationMessage>(CSystemFunction.UpdateInventoryUnit, pInputValue);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("CUnitDao", ex.Message);
                return null;
            }
        }
    }
}
