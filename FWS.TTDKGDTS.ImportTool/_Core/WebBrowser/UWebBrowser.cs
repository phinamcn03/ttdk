using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Drawing;
using System.Data;
using System.Linq;
using System.Text;
using System.Windows.Forms;
using FWS.TTDKGDTS.ImportTool._Base;
using CefSharp;

namespace FWS.TTDKGDTS.ImportTool._Core.WebBrowser
{
    public partial class UWebBrowser : UBase, ILifeSpanHandler, ICefSharpView
    {
        public UWebBrowser()
        {
            InitializeComponent();
        }

        public event Action<object, string,string> UrlActivated;

        #region Life Span Handler
        public void OnBeforeClose(IWebBrowser browser)
        {
            //throw new NotImplementedException();
        }

        public bool OnBeforePopup(IWebBrowser browser, string url, ref int x, ref int y, ref int width, ref int height)
        {
            return true;
            //throw new NotImplementedException();
        }

        #endregion Life Span Handler


        public void SetIsLoading(bool is_loading)
        {
            //throw new NotImplementedException();
        }
    }
}
