using System;
using System.Collections.Generic;
using System.Web;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Inventory;
using FWS.VnAccounting.DataLayer.DataObjects.Inventory;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Core;

namespace FWS.VnAccounting.Service.Data.Inventory.Class
{
    public class CItemService
    {
        public string GetInventoryItemsListInCSV(string InputValue, ref string PageInfo)
        {
            COutputValue pInfo = new COutputValue();
            IList<CItems> list = new CItemsDao().GetInventoryItemsList(InputValue, ref pInfo);
            PageInfo = pInfo.ToCSV();
            return CItems.ToCSV<CItems>(list);
        }
        public List<CItems> GetInventoryItemsList(string InputValue, ref COutputValue Output)
        {
            IList<CItems> list = new CItemsDao().GetInventoryItemsList(InputValue, ref Output);
            return (List<CItems>)list;
        }
        public CItems GetInventoryItem(string InputValue)
        {
            CItems list = new CItemsDao().GetInventoryItem(InputValue);
            return list;//<CItems>(list);
        }
        public CApplicationMessage UpdateInventoryItem(string InputValue)
        {
            CApplicationMessage list = new CItemsDao().UpdateInventoryItem(InputValue);
            return list;//<CItems>(list);
        }

        public string GetInventoryItemGroupListInCSV(string InputValue, ref string PageInfo)
        {
            COutputValue pInfo = new COutputValue();
            IList<CItemGroup> list = new CItemsDao().GetInventoryItemGroupList(InputValue, ref pInfo);
            PageInfo = pInfo.ToCSV();
            return CItemGroup.ToCSV<CItemGroup>(list);
        }
        public List<CItemGroup> GetInventoryItemGroupList(string InputValue, ref COutputValue Output)
        {
            IList<CItemGroup> list = new CItemsDao().GetInventoryItemGroupList(InputValue, ref Output);
            return (List<CItemGroup>)(list);
        }
        public CItemGroup GetInventoryItemGroup(string InputValue)
        {
            CItemGroup list = new CItemsDao().GetInventoryItemGroup(InputValue);
            return list;
        }
        public CApplicationMessage UpdateInventoryItemGroup(string InputValue)
        {
            CApplicationMessage list = new CItemsDao().UpdateInventoryItemGroup(InputValue);
            return list;//<CItems>(list);
        }

    }
}