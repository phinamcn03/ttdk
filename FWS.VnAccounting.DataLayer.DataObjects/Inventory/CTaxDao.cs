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
    public class CTaxDao : CDaoBase
    {
        public IList<CTax> GetInventoryTaxList(string pInputValue, ref COutputValue pOutput)
        {
            try
            {
                return CallFunctionWithList<CTax>(CSystemFunction.GetInventoryTax, pInputValue, ref pOutput);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("CUnitDao", ex.Message);
                return null;
            }
        }

        public CTax GetInventoryTax(string pInputValue)
        {
            try
            {
                return CallFunction<CTax>(CSystemFunction.GetInventoryTax, pInputValue);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("CUnitDao", ex.Message);
                return null;
            }
        }

        public CApplicationMessage UpdateInventoryTax(string pInputValue)
        {
            try
            {
                return CallFunction<CApplicationMessage>(CSystemFunction.UpdateInventoryTax, pInputValue);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("CUnitDao", ex.Message);
                return null;
            }
        }
    }
}
