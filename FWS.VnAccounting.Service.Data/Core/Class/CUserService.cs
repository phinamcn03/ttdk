﻿using System;
using System.Collections.Generic;
using System.Web;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Core;
using FWS.VnAccounting.DataLayer.DataObjects.Core;

namespace FWS.VnAccounting.Service.Data.Core.Class
{
    public class CUserService
    {
        public CUserList Login(string InputValue, ref COutputValue OutputValue)
        {
            return new CUserDao().Login(InputValue, ref OutputValue);
        }
    }
}