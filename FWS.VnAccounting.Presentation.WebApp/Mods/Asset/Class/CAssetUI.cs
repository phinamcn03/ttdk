using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using FWS.VnAccounting.Presentation.WebApp.Mods.Core;
using FWS.VnAccounting.Presentation.WebApp.Mods.Global;
using ServiceREF.Asset;

namespace FWS.VnAccounting.Presentation.WebApp.Mods.Asset.Class
{
    public class CAssetUI
    {
        AssetService service = null;
          public CAssetUI()
        {
            service = new AssetService();
        }
        public string GetGridAsset(int userId, string session, int currPage, int NumberRowOfPage, string exAttribute)
        {
            string InputValue = CXmlPara.CreatePara(new CPara[]{
                    new CPara("PageIndex", currPage.ToString()),
                    new CPara("RowsPerPage", NumberRowOfPage.ToString()),
                },
                exAttribute
            );

            COutputValue outputValue = new COutputValue();
            CAsset[] list = service.GetAssetList(InputValue, ref outputValue);
            return CGrid.ToJsonForHandle<CAsset>(1, 41, list, currPage, outputValue.TotalPage, outputValue.TotalRow);
        }
        public string GetAsset(string InputValue)
        {
            CAsset customer = service.GetAsset(InputValue);
            return CJson.SerializeObject(customer);
        }
        public string UpdateAsset(string InputValue)
        {
            CApplicationMessage message = service.UpdateAsset(InputValue);
            return CJson.SerializeObject(message);
        }
    }
}