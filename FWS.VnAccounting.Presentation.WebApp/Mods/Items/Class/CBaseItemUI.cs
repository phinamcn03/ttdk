using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using FWS.VnAccounting.Presentation.WebApp.Mods.Core;

namespace FWS.VnAccounting.Presentation.WebApp.Mods.Items
{
    public class CBaseItemUI_DELETE
    {
        public string CreatePara(string inputValue)
        {
            return CXmlPara.CreatePara(inputValue);
        }
    }
}