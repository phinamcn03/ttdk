using System;
using System.Collections.Generic;
using System.Web;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Core;
using FWS.VnAccounting.DataLayer.DataObjects.Core;

namespace FWS.VnAccounting.Service.Data.Core.Class
{
    public class CRefNoService
    {
        public CRefNo GetNextRefNo(string InputValue)
        {
            return new CRefNoDao().GetNextRefNo(InputValue);           

        }
    }
}