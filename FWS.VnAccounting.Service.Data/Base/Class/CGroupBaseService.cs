using System;
using System.Collections.Generic;
using System.Web;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Core;
using FWS.VnAccounting.DataLayer.DataObjects.Core;

namespace FWS.VnAccounting.Service.Data.Base.Class
{
    public class CGroupBaseService
    {
        public List<CGroupBase> GetGroupBaseList(string InputValue,ref COutputValue OutputValue)
        {
            IList<CGroupBase> list = new CGroupBaseDao().GetGroupBaseList(InputValue,ref OutputValue);
            return (List < CGroupBase >) list;

        }

        public CGroupBase GetGroupBase(string InputValue)
        {
            CGroupBase obj = new CGroupBaseDao().GetGroupBase(InputValue);
            return obj;

        }

        public CApplicationMessage UpdateGroupBase(string InputValue)
        {
            CApplicationMessage obj = new CGroupBaseDao().UpdateGroupBase(InputValue);
            return obj;

        }
    }
}