using System;
using System.Collections.Generic;
using System.Web;
using FWS.VnAccounting.DataLayer.DataObjects.Core;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Core;

namespace FWS.VnAccounting.Service.Data.Core.Class
{
    public class CLanguageService
    {
        public List<CLanguage> GetLanguageList(string pInputValue,ref COutputValue pOutputValue)
        {
            return (List<CLanguage>)new CLanguageDao().GetLanguageList(pInputValue, ref pOutputValue);
        }


    }
}