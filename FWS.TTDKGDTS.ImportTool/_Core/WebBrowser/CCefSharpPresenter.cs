using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using CefSharp;
using System.ComponentModel;
using System.Net;
using System.IO;
using PMSA.iMarkets.Presentation.AppVersion.Main;

namespace FWS.TTDKGDTS.ImportTool._Core.WebBrowser
{
   

    public class CCefSharpPresenter : IRequestHandler, ICookieVisitor
    {
        public static void Init()
        {
            Settings settings = new Settings();
            
            if (CEF.Initialize(settings))
            {
                
            }
        }

        

        public event EventHandler MessageToScreen;
        private int color_index = 0;
        private readonly string[] colors =
        {
            "red",
            "blue",
            "green",
        };

        private readonly IWebBrowser model;
        private readonly Action<Action> gui_invoke;
        private string initURL = "";
        private string initHTML = "";
        private readonly ICefSharpView view;
        public CCefSharpPresenter(IWebBrowser model, ICefSharpView view,
            Action<Action> gui_invoke,string url)
        {
            this.model = model;
            this.view = view;
            this.gui_invoke = gui_invoke;

            var version = String.Format("Chromium: {0}, CEF: {1}, CefSharp: {2}",
                CEF.ChromiumVersion, CEF.CefVersion, CEF.CefSharpVersion);
            //view.DisplayOutput(version);

            model.RequestHandler = this;
            model.PropertyChanged += model_PropertyChanged;
            model.ConsoleMessage += model_ConsoleMessage;
            initURL = url;
            

            // navigation
            view.UrlActivated += view_UrlActivated;

            
            
        }

        private void model_PropertyChanged(object sender, PropertyChangedEventArgs e)
        {
            string @string = null;
            bool @bool = false;
            //OnMessageToScreen("PropertyChanged::" + e.PropertyName);

            switch (e.PropertyName.ToLower())
            {
                case "isbrowserinitialized":
                    if (model.IsBrowserInitialized)
                    {
                        if (!string.IsNullOrEmpty(initHTML))
                        {
                            model.LoadHtml(initHTML);
                        }
                        else
                        {
                            model.Load(initURL);
                        }
                    }
                    break;
                //case "Title":
                //    @string = model.Title;
                //    gui_invoke(() => view.SetTitle(@string));
                //    break;
                //case "Address":
                //    @string = model.Address;
                //    gui_invoke(() => view.SetAddress(@string));
                //    break;
                //case "CanGoBack":
                //    @bool = model.CanGoBack;
                //    gui_invoke(() => view.SetCanGoBack(@bool));
                //    break;
                //case "CanGoForward":
                //    @bool = model.CanGoForward;
                //    gui_invoke(() => view.SetCanGoForward(@bool));
                //    break;
                case "isloading":
                    @bool = model.IsLoading;
                    gui_invoke(() => view.SetIsLoading(@bool));
                    break;
            }
        }

        private void model_ConsoleMessage(object sender, ConsoleMessageEventArgs e)
        {
            //gui_invoke(() => view.DisplayOutput(e.Message));
        }

        private void view_ShowDevToolsActivated(object sender, EventArgs e)
        {
            model.ShowDevTools();
        }

        private void view_CloseDevToolsActivated(object sender, EventArgs e)
        {
            model.CloseDevTools();
        }

        private void view_ExitActivated(object sender, EventArgs e)
        {
            model.Dispose();
            //CEF.Shutdown();
            //System.Environment.Exit(0);
        }

        private void view_UrlActivated(object sender, string url,string html)
        {
            this.initURL = url;
            this.initHTML = html;
            if (model.IsBrowserInitialized)
            {
                if (!string.IsNullOrEmpty(initHTML))
                {
                    model.LoadHtml(initHTML);
                }
                else
                {
                    model.Load(url);
                }
            }
        }

       
        private void OnMessageToScreen(string message)
        {
            if (MessageToScreen != null)
                MessageToScreen(message, null);
        }

        #region IRequestHandler Members

        

        #endregion

        #region ICookieVisitor Members

        bool ICookieVisitor.Visit(Cookie cookie, int count, int total, ref bool deleteCookie)
        {
            Console.WriteLine("Cookie #{0}: {1}", count, cookie.Name);
            return true;
        }

        #endregion

        #region IRequestHandler Members

        bool IRequestHandler.OnBeforeBrowse(IWebBrowser browser, IRequest request, NavigationType naigationvType, bool isRedirect)
        {
            return false;
        }

        bool IRequestHandler.OnBeforeResourceLoad(IWebBrowser browser, IRequestResponse requestResponse)
        {
            IRequest request = requestResponse.Request;
            
            return false;
        }

        void IRequestHandler.OnResourceResponse(IWebBrowser browser, string url, int status, string statusText, string mimeType, WebHeaderCollection headers)
        {

        }

        bool IRequestHandler.GetDownloadHandler(IWebBrowser browser, string mimeType, string fileName, long contentLength, ref IDownloadHandler handler)
        {
            handler = new CDownloadHandler(fileName);
            return true;
        }

        bool IRequestHandler.GetAuthCredentials(IWebBrowser browser, bool isProxy, string host, int port, string realm, string scheme, ref string username, ref string password)
        {
            return false;
        }

        #endregion
    }
}
