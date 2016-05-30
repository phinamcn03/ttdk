using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;


using System.Text;
namespace FWS.VnAccounting.Presentation.WebApp.Mods.Core
{
    public class CControlUI
    {
        protected static string GetControls(string customControl)
        {
            StringBuilder ret = new StringBuilder();
            string InputValue = CXmlPara.CreatePara(new KeyValuePair<string, string>[]
                {
                    new KeyValuePair<string, string>("CustomControl", customControl)
                });

            ServiceREF.CoreService.CoreService service = new ServiceREF.CoreService.CoreService();
            ServiceREF.CoreService.CControl[] arrCtr = service.GetControls(InputValue);
            ret.Append(CJson.SerializeObject(arrCtr));
            return ret.ToString();
        }
        public static string GetControlsScript(string customControl)
        {
            string jsData = GetControls(customControl);
            string jsVar = (customControl + "_Controls").Replace("/", "_");
            string script = string.Format("var {0} = {1}; FWS.Web.CControl.ApplyLanguage({0});", jsVar, jsData);
            return script;
        }
    }
}