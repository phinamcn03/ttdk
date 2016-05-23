using System;
using System.Collections.Generic;
using System.Text;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Core;
using FWS.VnAccounting.DataLayer.DataObjects.Base;
using FWS.VnAccounting.DataLayer.DataObjects.SQL;
using FWS.Framework.Log;

namespace FWS.VnAccounting.DataLayer.DataObjects.Core
{
    public class CControlDao:CDaoBase
    {
        public IList<CControl> GetControls(string pInputValue)
        {
            try
            {
                return CallFunctionWithList<CControl>(CSystemFunction.GetControls, pInputValue);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("CControlDao", ex.Message);
                return null;
            }
        }

        public IList<CControlData> GetControlData(string pInputValue)
        {
            try
            {
                return CallFunctionWithList<CControlData>(CSystemFunction.GetControlData, pInputValue);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("CControlDao", ex.Message);
                return null;
            }
        }
    }
}
