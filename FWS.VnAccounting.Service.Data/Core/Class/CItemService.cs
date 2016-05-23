using System;
using System.Collections.Generic;
using System.Web;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Core;
using FWS.VnAccounting.DataLayer.DataObjects.Core;

namespace FWS.VnAccounting.Service.Data.Core.Class
{
    public class CItemService
    {
        public string GetItemList(string InputValue)
        {
            IList<CItem> list = new CItemDao().GetItemList(InputValue);
            return CItem.ToCSV<CItem>(list);

        }
    }
}