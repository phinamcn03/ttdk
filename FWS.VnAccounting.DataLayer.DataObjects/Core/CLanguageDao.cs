using System;
using System.Collections.Generic;
using System.Text;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Base;
using FWS.VnAccounting.DataLayer.DataObjects.Base;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Core;
using FWS.VnAccounting.DataLayer.DataObjects.SQL;
using FWS.Framework.Log;

namespace FWS.VnAccounting.DataLayer.DataObjects.Core
{
    public class CLanguageDao:CDaoBase
    {
        public IList<CLanguage> GetLanguageList(string pInputValue,ref COutputValue pOutputValue)
        {
            try
            {
                return CallFunctionWithList<CLanguage>(CSystemFunction.GetLanguage, pInputValue,ref pOutputValue);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("CLanguageDao", ex.Message);
                return null;
            }
        }
    }
}
