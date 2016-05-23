using System;
using System.Collections.Generic;
using System.Web;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Core;
using FWS.VnAccounting.DataLayer.DataObjects.Core;

namespace FWS.VnAccounting.Service.Data.Core.Class
{
    public class CApplicationService
    {
        public string GetApplication(string InputValue)
        {
            IList<CApplication> list = new CApplicationDao().GetApplicationByUser(InputValue);
            return CApplication.ToCSV<CApplication>(list);

        }
    }
}