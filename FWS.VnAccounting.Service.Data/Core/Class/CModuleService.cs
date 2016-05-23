using System;
using System.Collections.Generic;
using System.Web;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Core;
using FWS.VnAccounting.DataLayer.DataObjects.Core;

namespace FWS.VnAccounting.Service.Data.Core.Class
{
    public class CModuleService
    {
        public string GetModule(string InputValue)
        {
            IList<CModule> list = new CModuleDao().GetModuleByUser(InputValue);
            return CModule.ToCSV<CModule>(list);

        }
    }
}