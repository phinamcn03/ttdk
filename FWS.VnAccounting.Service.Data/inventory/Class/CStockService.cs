using System;
using System.Collections.Generic;
using System.Web;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Inventory;
using FWS.VnAccounting.DataLayer.DataObjects.Inventory;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Core;
namespace FWS.VnAccounting.Service.Data.Inventory.Class
{
    public class CStockService
    {
        public string GetInventoryStockListInCSV(string InputValue, ref string PageInfo)
        {
            COutputValue pInfo = new COutputValue();
            IList<CStock> list = new CStockDao().GetInventoryStockList(InputValue, ref pInfo);
            PageInfo = pInfo.ToCSV();
            return CStock.ToCSV<CStock>(list);
        }
        public List<CStock> GetInventoryStockList(string InputValue, ref COutputValue pOutput)
        {
            IList<CStock> list = new CStockDao().GetInventoryStockList(InputValue, ref pOutput);
            return (List < CStock > )list;
        }
        public CStock GetInventoryStock(string InputValue)
        {
            CStock list = new CStockDao().GetInventoryStock(InputValue);
            return list;
        }
        public CApplicationMessage UpdateInventoryStock(string InputValue)
        {
            CApplicationMessage list = new CStockDao().UpdateInventoryStock(InputValue);
            return list;//<CItems>(list);
        }
    }
}