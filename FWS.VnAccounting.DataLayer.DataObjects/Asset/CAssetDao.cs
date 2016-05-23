using System;
using System.Collections.Generic;
using System.Text;

using FWS.VnAccounting.DataLayer.DataObjects.Base;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Asset;
using FWS.VnAccounting.DataLayer.DataObjects.SQL;
using FWS.Framework.Log;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Core;

namespace FWS.VnAccounting.DataLayer.DataObjects.Asset
{
    public class CAssetDao:CDaoBase
    {
        public IList<CAsset> GetAssetList(string pInputValue, ref COutputValue pOutputValue)
        {
            try
            {
                return CallFunctionWithList<CAsset>(CSystemFunction.GetFixedAsset, pInputValue, ref pOutputValue);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("CAssetDao", ex.Message);
                return null;
            }
        }

        public CAsset GetAsset(string pInputValue )
        {
            try
            {
                return CallFunction<CAsset>(CSystemFunction.GetFixedAsset, pInputValue);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("CAssetDao", ex.Message);
                return null;
            }
        }

        public CApplicationMessage UpdateAsset(string pInputValue)
        {
            try
            {
                return CallFunction<CApplicationMessage>(CSystemFunction.UpdateFixedAsset, pInputValue);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("CAssetDao", ex.Message);
                return null;
            }
        }
    }
}
