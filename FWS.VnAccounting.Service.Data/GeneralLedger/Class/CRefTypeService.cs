using System;
using System.Collections.Generic;
using System.Web;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.GeneralLedger;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Core;
using FWS.VnAccounting.DataLayer.DataObjects.GeneralLedger;

namespace FWS.VnAccounting.Service.Data.GeneralLedger.Class
{
    public class CRefTypeService
    {
        public List<CRefType> GetRefTypeList(string InputValue, ref COutputValue Output)
        {
            return (List<CRefType>)new CRefTypeDao().GetRefTypeList(InputValue, ref Output);
        }
    }
}