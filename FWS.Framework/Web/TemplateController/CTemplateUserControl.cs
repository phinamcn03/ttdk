using System;
using System.Web.UI;

namespace FWS.Framework.Web.TemplateController
{
    public class CTemplateUserControl : UserControl
    {
        private object m_Data = null;

        public object Data
        {
            get { return m_Data; }
            set { m_Data = value; }
        }

        private string m_StartupScript = string.Empty;

        public string StartupScript
        {
            get { return m_StartupScript; }
            set { m_StartupScript = value; }
        }

        private string m_CustomStyleSheet = string.Empty;

        public string CustomStyleSheet
        {
            get { return m_CustomStyleSheet; }
            set { m_CustomStyleSheet = value; }
        }
    }
}
