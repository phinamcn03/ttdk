using System;
using System.Collections.Generic;
using System.Web;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Inventory;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Core;
using FWS.VnAccounting.DataLayer.DataObjects.Inventory;

namespace FWS.VnAccounting.Service.Data.Inventory.Class
{
    public class CItemTypeService
    {
        public List<CItemType> GetItemTypeList(string InputValue, ref COutputValue Output)
        {
            IList<CItemType> list = new CItemTypeDao().GetItemTypeList(InputValue, ref Output);
            return (List<CItemType>)list;
        }
    }
}