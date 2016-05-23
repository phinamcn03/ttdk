using System;
using System.Collections.Generic;
using System.Text;
using FWS.VnAccounting.DataLayer.DataObjects.Base;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Core;
using FWS.VnAccounting.DataLayer.DataObjects.SQL;
using FWS.Framework.Log;
using System.Diagnostics;

namespace FWS.VnAccounting.DataLayer.DataObjects.Core
{
    public class CRefNoDao:CDaoBase
    {
        public CRefNo GetNextRefNo(string pInputValue)
        {
            try
            {
                return CallFunction<CRefNo>(CSystemFunction.GetNextRefNo, pInputValue);
            }
            catch (Exception ex)
            {
                string stack = GetStackTrace(new StackTrace());
                CLogManager.WriteDAL("CRefNoDao", stack + ":::" + ex.Message);
                return null;
            }
        }
    }
}
