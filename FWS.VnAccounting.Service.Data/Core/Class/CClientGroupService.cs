using System;
using System.Collections.Generic;
using System.Web;
using FWS.VnAccounting.DataLayer.DataObjects.Core;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Core;

namespace FWS.VnAccounting.Service.Data.Core.Class
{
    public class CClientGroupService
    {
        public IList<CClientGroupConfig> GetClientGroupConfig(string pInputValue, ref COutputValue pOutputValue)
        {
            return new CClientGroupDao().GetClientGroupConfig(pInputValue, ref pOutputValue);
        }

        public CApplicationMessage UpdateClientGroupConfig(string pInputValue)
        {
            return new CClientGroupDao().UpdateClientGroupConfig(pInputValue);
        }

        public List<CClientGroup> GetClientGroupList(string pInputValue, ref COutputValue pOutputValue)
        {
            return (List<CClientGroup>)new CClientGroupDao().GetClientGroupList(pInputValue, ref pOutputValue);
        }
    }
}