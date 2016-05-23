using System;
using System.Collections.Generic;
using System.Web;
using FWS.VnAccounting.DataLayer.DataObjects.Base;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Core;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Inventory;
using FWS.VnAccounting.DataLayer.DataObjects.Inventory;

namespace FWS.VnAccounting.Service.Data.Inventory.Class
{
    public class CCostMethodService
    {
        public List<CCostMethod> GetCostMethodList(string InputValue, ref COutputValue Output)
        {
            IList<CCostMethod> list = new CCostMethodDao().GetCostMethodList(InputValue, ref Output);
            return (List<CCostMethod>)list;
        }
    }
}