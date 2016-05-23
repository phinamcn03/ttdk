using System;
using System.Collections.Generic;
using System.Web;
using FWS.VnAccounting.DataLayer.DataObjects.Asset;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Core;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Asset;

namespace FWS.VnAccounting.Service.Data.Asset.Class
{
    public class CAssetService
    {
        public List<CAsset> GetAssetList(string InputValue, ref COutputValue OutputValue)
        {
            return (List < CAsset > )new CAssetDao().GetAssetList(InputValue, ref OutputValue);

        }

        public CAsset GetAsset(string InputValue)
        {
            return new CAssetDao().GetAsset(InputValue);
        }

        public CApplicationMessage UpdateAsset(string InputValue)
        {
            return new CAssetDao().UpdateAsset(InputValue);
        }



    }
}