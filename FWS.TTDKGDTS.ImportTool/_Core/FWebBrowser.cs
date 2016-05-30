using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;
using PMSA.iMarkets.Presentation.AppVersion.Main;
using FWS.TTDKGDTS.ImportTool._Base;
using System.Threading;

namespace FWS.TTDKGDTS.ImportTool._Core
{
    public partial class FWebBrowser : FBase
    {
        public FWebBrowser()
        {
            InitializeComponent();
            this.Load += new EventHandler(FWebBrowser_Load);
            //InitControl();
            this.KeyPreview = true;
            this.KeyUp += new KeyEventHandler(FWebBrowser_KeyUp);
        }

        void FWebBrowser_KeyUp(object sender, KeyEventArgs e)
        {
            if (e.KeyCode == Keys.F12)
                uCefSharpBrowser1.UserShowDevToolsActivated();
            //throw new NotImplementedException();
        }

        void FWebBrowser_Load(object sender, EventArgs e)
        {
            //uCefSharpBrowser1.InitControl();
        }


        UCefSharpBrowser uCefSharpBrowser1 = null;
        public void InitControl()
        {
            uCefSharpBrowser1 = new UCefSharpBrowser();
            this.SuspendLayout();
            uCefSharpBrowser1.InitControl();
            //this.ParentForm.Shown += new EventHandler(ParentForm_Shown);
            Controls.Add(uCefSharpBrowser1);
            uCefSharpBrowser1.BringToFront();
            uCefSharpBrowser1.Dock = DockStyle.Fill;
            this.ResumeLayout();

            //uCefSharpBrowser1.Url = "http://vnexpress.net";
            //uCefSharpBrowser1.Url = "http://dktructuyen.moj.gov.vn/Secured/UCCFiling/PrintFiling.aspx?print=false&id=11801009";
        }

        public void ShowURL(string url)
        {
            if (uCefSharpBrowser1 == null) InitControl();
            uCefSharpBrowser1.Url = url;
            //uCefSharpBrowser1.Url = "http://localhost/vAccounting/Mods/Report/ReportViewer.ashx?ExportTo=pdf&InputValue=%3CRequestParams+KHTX%3D%22698%22+FromDate%3D%222012-09-21%22+ToDate%3D%222013-09-21%22+ViewID%3D%2234%22+ViewerID%3D%2212%22+Function%3D%22%22+%3E%3C%2FRequestParams%3E";
            this.Show();
            //uCefSharpBrowser1.UserShowDevToolsActivated();
        }
        public void ShowHTML(string html)
        {
            if (uCefSharpBrowser1 == null) InitControl();
            uCefSharpBrowser1.HTML = html;
            //uCefSharpBrowser1.Url = "http://localhost/vAccounting/Mods/Report/ReportViewer.ashx?ExportTo=pdf&InputValue=%3CRequestParams+KHTX%3D%22698%22+FromDate%3D%222012-09-21%22+ToDate%3D%222013-09-21%22+ViewID%3D%2234%22+ViewerID%3D%2212%22+Function%3D%22%22+%3E%3C%2FRequestParams%3E";
            this.Show();
            //uCefSharpBrowser1.UserShowDevToolsActivated();
        }
        private void button1_Click(object sender, EventArgs e)
        {
            uCefSharpBrowser1.Reload();
            //uCefSharpBrowser1.UserShowDevToolsActivated();
        }

        private void toolStripButton1_Click(object sender, EventArgs e)
        {
            try
            {
                uCefSharpBrowser1.Reload();
            }
            catch (Exception ex)
            {
                ShowError(ex.Message);
            }
        }

        private void FWebBrowser_FormClosing(object sender, FormClosingEventArgs e)
        {
            try
            {
                //uCefSharpBrowser1.ClearBrowser();

                //while (uCefSharpBrowser1.IsLoading)
                //{
                //    Thread.Sleep(100);
                //}
                //e.Cancel = true;
            }
            catch (Exception ex)
            {
                ShowError(ex.Message);
            }
        }

        
    }
}
