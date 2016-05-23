using System;
using System.Collections.Generic;
using System.Web;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Inventory;
using FWS.VnAccounting.DataLayer.DataObjects.Inventory;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Core;
namespace FWS.VnAccounting.Service.Data.Inventory.Class
{
    public class CTaxService
    {
        public string GetInventoryTaxListInCSV(string InputValue, ref string PageInfo)
        {
            COutputValue pInfo = new COutputValue();
            IList<CTax> list = new CTaxDao().GetInventoryTaxList(InputValue,ref pInfo);
            PageInfo = pInfo.ToCSV();
            return CTax.ToCSV<CTax>(list);
        }
        public List<CTax> GetInventoryTaxList(string InputValue, ref COutputValue pOutput)
        {
            IList<CTax> list = new CTaxDao().GetInventoryTaxList(InputValue, ref pOutput);
            return (List < CTax > )list;
        }
        public CTax GetInventoryTax(string InputValue)
        {
            CTax list = new CTaxDao().GetInventoryTax(InputValue);
            return list;
        }
        public CApplicationMessage UpdateInventoryTax(string InputValue)
        {
            CApplicationMessage list = new CTaxDao().UpdateInventoryTax(InputValue);
            return list;//<CItems>(list);
        }
    }
}