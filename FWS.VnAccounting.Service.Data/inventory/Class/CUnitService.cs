using System;
using System.Collections.Generic;
using System.Web;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Inventory;
using FWS.VnAccounting.DataLayer.DataObjects.Inventory;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Core;

namespace FWS.VnAccounting.Service.Data.Inventory.Class
{
    public class CUnitService
    {
        public string GetInventoryUnitListInCSV(string InputValue, ref string PageInfo)
        {
		///
            COutputValue pInfo = new COutputValue();
            IList<CUnit> list = new CUnitDao().GetInventoryUnitList(InputValue,ref pInfo);
            PageInfo = pInfo.ToCSV();
            return CUnit.ToCSV<CUnit>(list);
        }
        public List<CUnit> GetInventoryUnitList(string InputValue, ref COutputValue Output)
        {
            IList<CUnit> list = new CUnitDao().GetInventoryUnitList(InputValue, ref Output);
            return (List<CUnit>)list;
        }
        public CUnit GetInventoryUnit(string InputValue)
        {
            CUnit list = new CUnitDao().GetInventoryUnit(InputValue);
            return list;
        }
        public CApplicationMessage UpdateInventoryUnit(string InputValue)
        {
            CApplicationMessage list = new CUnitDao().UpdateInventoryUnit(InputValue);
            return list;//<CItems>(list);
        }
    }
}