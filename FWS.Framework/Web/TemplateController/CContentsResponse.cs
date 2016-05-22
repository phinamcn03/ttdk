using System;
using System.Collections.Generic;
using System.Text;

namespace FWS.Framework.Web.TemplateController
{
    public class CContentsResponse
    {
        public CContentsResponse(string html, string script, string customStyle)
        {
            Html = html;
            Script = script;
            CustomStyle = customStyle;
        }

        public static CContentsResponse Empty
        {
            get
            {
                return new CContentsResponse(string.Empty, string.Empty, string.Empty);
            }
        }

        public string Html = "";
        public string Script = "";
        public string CustomStyle = "";
    }
}
