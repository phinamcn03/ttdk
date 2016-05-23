using System;
using System.Collections.Generic;
using System.Web;
using FWS.VnAccounting.DataLayer.DataObjects.Inventory;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Core;

namespace FWS.VnAccounting.Service.Data.Core.Class
{
    public class CIntDefinationService
    {
        public List<CIntDefination> GetIntDefinationList(string InputValue)
        {
            IList<CIntDefination> list = new CIntDefinationDao().GetIntDefinationList(InputValue);
            return (List<CIntDefination>)(list);
        }
    }
}