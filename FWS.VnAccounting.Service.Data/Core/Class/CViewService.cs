using System;
using System.Collections.Generic;
using System.Web;
using FWS.VnAccounting.DataLayer.DataObjects.Core;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Core;

namespace FWS.VnAccounting.Service.Data.Core.Class
{
    public class CViewService
    {
        public List<CViewList> GetViewList(string InputValue, ref COutputValue OutputValue)
        {
            IList<CViewList> list = new CViewDao().GetViewList(InputValue, ref OutputValue);
            return (List < CViewList > )list;

        }

        public List<CDesignParameter> GetViewDesignParameter(string InputValue, ref COutputValue OutputValue)
        {
            IList<CDesignParameter> list = new CViewDao().GetViewDesignParameter(InputValue, ref OutputValue);
            return (List<CDesignParameter>)list;
        }
    }
}