using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FWS.VnAccounting.Presentation.WebApp.Mods.Core
{
    public class CBaseItemUI
    {
        public string CreatePara(string inputValue)
        {
            return CXmlPara.CreatePara(inputValue);
        }
    }
}