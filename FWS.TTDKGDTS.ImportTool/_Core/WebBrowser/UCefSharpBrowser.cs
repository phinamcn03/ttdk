using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Text;
using System.Windows.Forms;
//using CefSharp.Example;
using CefSharp.WinForms;
using CefSharp;
using System.IO;
using FWS.TTDKGDTS.ImportTool._Core.WebBrowser;
using FWS.TTDKGDTS.ImportTool._Base;

namespace PMSA.iMarkets.Presentation.AppVersion.Main
{
    //FCefSharpBrowser

    public partial class UCefSharpBrowser : UserControl, ILifeSpanHandler, ICefSharpView
    {
        private string _url="about::blank";

        private string document = "";
        public virtual string Url
        {
            set { 
                  _url = value;
                  if (web_view != null && UrlActivated !=null)
                  {
                      UrlActivated(this,_url,"");
                      //web_view.Load(_url);
                  }
                }
            get { return _url; }
        }

        string _html = "";
        public virtual string HTML
        {
            set
            {
                _html = value;
                if (web_view != null && UrlActivated != null)
                {
                    UrlActivated(this, "",_html);
                    //web_view.Load(_url);
                }
            }
            get { return _html; }
        }

        public event EventHandler MessageToScreen;
        public event LoadCompletedEventHandler DocumentCompleted;
        public event Action<IWebBrowser, string, int, int> BeforePopup;

        public event Action<object, string,string> UrlActivated;

        public WebView web_view;
        public bool IsPopup = false;
        public string Context = "";
        private CCefSharpPresenter presenter;

        public UCefSharpBrowser()
        {
            try
            {
                InitializeComponent();
                Dock = DockStyle.Fill;
                //Text = "CefSharp";
               
           
            }
            catch (Exception ex)
            {
                //CEventManager.Add(new CEvent(CEvent.CatagoriesType.Application, CEvent.LevelType.Error, "Program", "---", ex.ToString()));
            }
        }

        void web_view_LoadCompleted(object sender, LoadCompletedEventArgs url)
        {
            document = GetWebHTML();
            _url = GetCurrentURL();
            if (DocumentCompleted != null)
                DocumentCompleted(sender, url);
            //MessageBox.Show("Complete");
            //throw new NotImplementedException();
        }

        public bool IsWebForLogin = false;
        private bool isLoading = false;

        public bool IsLoading
        {
            get{return web_view.IsLoading;}
        }

        public virtual void SetIsLoading(bool is_loading)
        {
            if (is_loading)
            {
                this.lbStatus.Visible = true;
            }
            else
            {
                this.lbStatus.Visible = false;
            }
            //try
            //{
            //    web_view.Dock = DockStyle.Fill;
            //    if (is_loading)
            //    {
            //        textBox1.Text = _url;
            //        panelControl2.Visible = true;
            //        int locationX = ((panelControl2.Width / 2 - webBrowser1.Size.Width / 2) > 0) ? (panelControl2.Width / 2 - webBrowser1.Size.Width / 2) : 0;
            //        int locationY = ((panelControl2.Height / 2 - webBrowser1.Size.Height / 2) > 0) ? (panelControl2.Height / 2 - webBrowser1.Size.Height / 2) : 0;
            //        webBrowser1.Location = new Point(locationX, locationY);
            //        string tempfile = Path.GetTempFileName() + ".swf";
            //        //File.WriteAllBytes(tempfile, Properties.Resources.loading);
            //        webBrowser1.Url = new Uri(tempfile);
            //        isLoading = true;
            //    }
            //    else
            //    {
            //        //xu ly rieng cho FLogin
                   

            //        if (ParentForm != null)
            //        {
            //            ParentForm.Refresh();
            //        }
            //        isLoading = false;
            //        panelControl2.Visible = false;
            //    }
            //}
            //catch { }
        }

        public virtual void ExecuteScript(string script)
        {
            web_view.ExecuteScript(script);
        }

        public virtual object EvaluateScript(string script)
        {
            return web_view.EvaluateScript(script);
            
        }

        public virtual void RegisterJsObject(string name,object bindObj)
        {
            web_view.RegisterJsObject(name, bindObj);
        }
        public virtual void RegisterCallBack(string name, ICallbackObjectForJs callBack)
        {
            web_view.RegisterJsObject(name, callBack);
        }

      
        public bool isInitFrefreshSession = true, isShowPanelRefresh = true;
        public virtual void LoadBrowser()
        {
            try
            {
              
                BrowserSettings bSettings = new BrowserSettings();
                bSettings.JavaScriptOpenWindowsDisallowed = false;
                bSettings.PluginsDisabled = false;
                web_view = new WebView(_url, bSettings);
                Controls.Add(web_view);
                web_view.LifeSpanHandler = this;
                web_view.Dock = DockStyle.Fill;
                //panelControl1.Dock = DockStyle.Fill;
                web_view.Parent.Invalidate();


                if (presenter == null)
                {
                    presenter = new CCefSharpPresenter(web_view,this,
                        invoke => Invoke(invoke),_url);
                    presenter.MessageToScreen += new EventHandler(presenter_MessageToScreen);
                    
                }
                //web_view.Load(Url);
                web_view.LoadCompleted += new LoadCompletedEventHandler(web_view_LoadCompleted);
                //web_view.RequestHandler = new
            }
            catch { }
        }

        void presenter_MessageToScreen(object sender, EventArgs e)
        {
            if (MessageToScreen != null)
                MessageToScreen(sender, null);
            //throw new NotImplementedException();
        }

        public void FCefSharpBrowser_Load(object sender, EventArgs e)
        {
            try
            {
               
                //if (fcsb == null && isInitFrefreshSession)
                //{
                //    //RefreshSessionBrowser
                //    //FBase f1 = new FBase();
                //    fcsb = new UCefSharpBrowser();
                //    fcsb.isInitFrefreshSession = false;
                //    fcsb.isShowPanelRefresh = false;
                    

                //    //fcsb.Url = "about:blank";
                //    //f1.TopLevel = false;
                //    //f1.Show();
                //    //f1.Controls.Add(fcsb);
                //    fcsb.Show();
                //    fcsb.Dock = DockStyle.Fill;
                //    //panelControl3.Controls.Add(fcsb);
                //    //f1.Dock = DockStyle.Fill;

                //}

                //LoadBrowser();

                //panelControl3.Visible = isShowPanelRefresh;
            }
            catch { }
        }

        public virtual void UserShowDevToolsActivated()
        {
            if (web_view != null && web_view.IsBrowserInitialized && !isLoading)
                web_view.ShowDevTools();
        }

      
        #region
        public virtual void Reload()
        {
            //LoadFromFile("DonDangKy.htm");
           // LoadFromFile("don thay doi.htm");
            if (File.Exists("Load.htm"))
            {
                LoadFromFile("Load.htm");
            }
            else
            {
                web_view.Reload();
            }
            //LoadFromFile("KHKoTX.htm");
            //LoadFromFile("NNN.htm");
           // web_view.Reload();
            //web_view.on
            //web_view.op
        }

        public virtual void Backward()
        {
            
                web_view.Back();
          
            
            //web_view.on
            //web_view.op
        }

        public virtual void Forward()
        {
            web_view.Forward();
            //web_view.on
            //web_view.op
        }
        public virtual void InitControl()
        {
            var settings = new CefSharp.Settings();
            string currentPath = Application.StartupPath;
            settings.AddPluginPath(currentPath+@"\NPSWF32.dll");
            
            if (!CEF.IsInitialized)
                CEF.Initialize(settings);
            LoadBrowser();
            
            
        }

        //public string EvaluateScript(string script)
        //{
        //   return web_view.EvaluateScript(script).ToString();
        //}

        public virtual string GetDocument()
        {
            return document;
            //return web_view.EvaluateScript(@"document.getElementsByTagName ('html')[0].innerHTML").ToString();
        }
        private string GetWebHTML()
        {
            return web_view.EvaluateScript(@"document.getElementsByTagName ('html')[0].innerHTML").ToString();
        }
        public virtual string GetElementsByTagID(string tagName)
        {
            return web_view.EvaluateScript(@"document.getElementById('" + tagName + "').innerHTML").ToString();
        }
        public virtual string GetRequestUrl()
        {
            //return web_view.EvaluateScript(@"document.URL").ToString();
            //return web_view.EvaluateScript(@"window.location.href").ToString();
            return this.Url;
        }
        private string GetCurrentURL()
        {
            return web_view.EvaluateScript(@"document.URL").ToString();
        }

        public virtual void LoadFromFile(string filepath)
        {
            string html=File.ReadAllText(filepath);
            if (web_view.IsBrowserInitialized)
            {
                web_view.LoadHtml(html);
            }
        }

        public virtual void LoadHTML(string html)
        {
            if (web_view.IsBrowserInitialized)
            {
                web_view.LoadHtml(html);
            }
        }

        public void ClearBrowser()
        {
            if (web_view.IsBrowserInitialized)
            {

                Url = "about:blank";
            }
        }
                
        #endregion

        public void OnBeforeClose(IWebBrowser browser)
        {
            //throw new NotImplementedException();
        }

        public bool OnBeforePopup(IWebBrowser browser, string url, ref int x, ref int y, ref int width, ref int height)
        {
            if (BeforePopup != null)
            {
                BeforePopup(browser, url, width, height);
            }
            //if (browser.Address == "http://dktructuyen.moj.gov.vn/Secured/Queries/FindNotice.aspx")
            //{
            //    CPageCache.FindResult = new CacheItem();
            //    CPageCache.FindResult.Browser = browser ;
            //    CPageCache.FindResult.Content = this.GetDocument();
            //    CPageCache.FindResult.Query = browser.Address;
                
            //}
            
            //this.Url = url;
            //MessageToScreen("Show Popup::" + url, null);
            return true;
            //throw new NotImplementedException();
        }

    }

    public class ICallbackObjectForJs
    {
        //public void callBack(string data);


        public ICallbackObjectForJs()
        {
            // TODO: Complete member initialization
        }
    }
}
