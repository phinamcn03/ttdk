using System;
using System.Collections.Generic;
using System.Text;
using FWS.VnAccounting.DataLayer.DataObjects.Base;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.GeneralLedger;
using FWS.Framework.Log;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Core;
using FWS.VnAccounting.DataLayer.DataObjects.SQL;

namespace FWS.VnAccounting.DataLayer.DataObjects.GeneralLedger
{
    public class CRefTypeDao:CDaoBase
    {
        public IList<CRefType> GetRefTypeList(string pInputValue, ref COutputValue pOutput)
        {
            try
            {
                return CallFunctionWithList<CRefType>(CSystemFunction.GetRefType, pInputValue, ref pOutput);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("CEmployeeDao", ex.Message);
                return null;
            }
        }
    }
}
