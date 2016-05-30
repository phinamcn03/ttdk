using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace FWS.TTDKGDTS.ImportTool._Core.WebBrowser
{
    public interface ICefSharpView
    {
        // file
        

        // test
        //event EventHandler TestResourceLoadActivated;
        //event EventHandler TestSchemeLoadActivated;
        //event EventHandler TestExecuteScriptActivated;
        //event EventHandler TestEvaluateScriptActivated;
        //event EventHandler TestBindActivated;
        //event EventHandler TestConsoleMessageActivated;
        //event EventHandler TestTooltipActivated;
        //event EventHandler TestPopupActivated;
        //event EventHandler TestLoadStringActivated;
        //event EventHandler TestCookieVisitorActivated;

        // navigation
        event Action<object, string,string> UrlActivated;
        //public void SetIsLoading(bool isLoading);
        void SetIsLoading(bool is_loading);
        
    }
}
