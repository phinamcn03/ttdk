using System;
using System.Collections.Generic;
using System.Text;
using FWS.VnAccounting.DataLayer.DataObjects.Base;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Core;
using FWS.VnAccounting.DataLayer.DataObjects.SQL;
using FWS.Framework.Log;

namespace FWS.VnAccounting.DataLayer.DataObjects.Core
{
    public class CModuleDao:CDaoBase
    {
        public IList<CModule> GetModuleByUser(string pInputValue)
        {
            try
            {
                return CallFunctionWithList<CModule>(CSystemFunction.GetModuleByUserID, pInputValue);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("CApplicationDao", ex.Message);
                return null;
            }
        }
    }
}
