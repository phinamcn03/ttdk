using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Drawing;
using System.Data;
using System.Linq;
using System.Text;
using System.Windows.Forms;
using FWS.TTDKGDTS.ImportTool.Mods.Import;
using PMSA.iMarkets.Presentation.AppVersion.Main;
using FWS.TTDKGDTS.ImportTool._Core;
using FWS.TTDKGDTS.ImportTool._Global;
using FWS.VnAccounting.Service.Data.Utils;
using FWS.TTDKGDTS.ImportTool.ServiceReference;
using FWS.TTDKGDTS.ImportTool._Base;
using System.IO;
using CefSharp;
using System.Threading;

namespace FWS.TTDKGDTS.ImportTool
{
    public partial class UImport : UBase
    {
        const string URL_LOGINPAGE = "http://dktructuyen.moj.gov.vn/public/login.aspx";
        const string URL_HOMEPAGE = "http://dktructuyen.moj.gov.vn/secured/ca/clienthome.aspx";
        UCefSharpBrowser OrgBrowser = null;
        UCefSharpBrowser PopupBrowser = null;
        List<CAssetBlockade> AssetBlockadeList = null;
        public UImport()
        {
            InitializeComponent();
            //
        }
        CTransaction _currentTransaction = new CTransaction();
        public CTransaction CurrentTransaction
        {
            get { return _currentTransaction; }
            set { _currentTransaction = value; }
        }
        public event EventHandler CustomerCodeChanged;
        
       
        #region Form Events

        private void UImport_Load(object sender, EventArgs e)
        {
            if (uCefSharpBrowser1 == null) return;
            //uCefSharpBrowser1.Url = "http://dktructuyen.moj.gov.vn";
            //uCefSharpBrowser1.Url = "http://dktructuyen.moj.gov.vn/Secured/UCCFiling/PrintFiling.aspx?print=false&id=11757671";
            
            //webBrowser1.Url = new Uri("http://dktructuyen.moj.gov.vn", UriKind.Absolute);
        }

        void ParentForm_Shown(object sender, EventArgs e)
        {
           
        }


        private void btnRefresh_Click(object sender, EventArgs e)
        {
            if (uCefSharpBrowser1 == null) return;
            uCefSharpBrowser1.Reload();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            try
            {
                //string document = uCefSharpBrowser1.GetDocument();
                //document = "";
                //richTextBox1.Text = uCefSharpBrowser1.GetRequestUrl();
                CImport import = new CImport();
                import.browser = uCefSharpBrowser1;
                //CTransaction trans = new CTransaction();
                import.ExtractTransactionData(ref _currentTransaction);
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
            }

        }

        private void btnSave_Click(object sender, EventArgs e)
        {
            Func<int,int> a = (x) => x;
            int y = a(10);

        }

        void uCefSharpBrowser1_MessageToScreen(object sender, EventArgs e)
        {
            //if (richTextBox1.InvokeRequired)
            //{
            //    richTextBox1.BeginInvoke(new EventHandler( uCefSharpBrowser1_MessageToScreen),sender,e);
            //}
            //else
            //{
            //    richTextBox1.Text = richTextBox1.Text + '\n' + sender.ToString();
            //}
            //throw new NotImplementedException();
        }

        #endregion Form Events

        #region Public Method

        UCefSharpBrowser uCefSharpBrowser1=null;

        CImport cImport = new CImport();
        public void InitControl()
        {
            InitBrowser();

            uCefSharpBrowser1 = OrgBrowser;
            uCefSharpBrowser1.Url = URL_LOGINPAGE;

            //RenewBrowser(URL_LOGINPAGE,false);
            cImport.browser = uCefSharpBrowser1;
            uCefSharpBrowser1.Context = "Org";
            uCefSharpBrowser1.Visible = true;
            RegisterJsObjectCallBack();
            //uCefSharpBrowser1.RegisterJsObject("filegetter", new CallbackObjectForJs());
            
            //Load Blockade List
            string inputValue = "<RequestParams Function=\"::R|DOC|Items_AssetBlockade\" />";
            inputValue = CXML.AddAuthenticate(inputValue);
            string data = CServiceReference.CoreService.GetContextData(CSession.CLIENT_KEY, inputValue);

            AssetBlockadeList = CObjectMapper.FromCSV<CAssetBlockade>(data,1);
            /*
            uCefSharpBrowser1 = new UCefSharpBrowser();
            this.SuspendLayout();
            uCefSharpBrowser1.InitControl();
            uCefSharpBrowser1.DocumentCompleted += new CefSharp.LoadCompletedEventHandler(uCefSharpBrowser1_DocumentCompleted);
            cImport.browser = uCefSharpBrowser1;
            this.ParentForm.Shown += new EventHandler(ParentForm_Shown);
            Controls.Add(uCefSharpBrowser1);

            this.ResumeLayout();
            //uCefSharpBrowser1.Url = "http://dktructuyen.moj.gov.vn";
            uCefSharpBrowser1.Url = URL_LOGINPAGE;// "http://dktructuyen.moj.gov.vn/public/login.aspx";
            //uCefSharpBrowser1.Url = "http://localhost/vAccounting/Mods/Report/ReportViewer.ashx?ExportTo=pdf&InputValue=%3CRequestParams+KHTX%3D%22698%22+FromDate%3D%222012-09-21%22+ToDate%3D%222013-09-21%22+ViewID%3D%2234%22+ViewerID%3D%2212%22+Function%3D%22%22+%3E%3C%2FRequestParams%3E";
            //uCefSharpBrowser1.Url = "http://vnexpress.net";
            //uCefSharpBrowser1.Url = "http://dktructuyen.moj.gov.vn/Secured/UCCFiling/PrintFiling.aspx?print=false&id=11801009";
            //uCefSharpBrowser1.LoadFromFile("DonDangKy.htm");
             * */
        }

        private void InitBrowser()
        {
            PopupBrowser = new UCefSharpBrowser();
            this.SuspendLayout();
            PopupBrowser.InitControl();
            PopupBrowser.DocumentCompleted += new CefSharp.LoadCompletedEventHandler(uCefSharpBrowser1_DocumentCompleted);
            PopupBrowser.BeforePopup += new Action<IWebBrowser, string, int, int>(uCefSharpBrowser1_BeforePopup);
            //cImport.browser = uCefSharpBrowser1;
            PopupBrowser.IsPopup = false;
            PopupBrowser.Visible = false;
            Controls.Add(PopupBrowser);

            OrgBrowser = new  UCefSharpBrowser();
           
            OrgBrowser.InitControl();
            OrgBrowser.DocumentCompleted += new CefSharp.LoadCompletedEventHandler(uCefSharpBrowser1_DocumentCompleted);
            OrgBrowser.BeforePopup += new Action<IWebBrowser, string, int, int>(uCefSharpBrowser1_BeforePopup);
            //cImport.browser = uCefSharpBrowser1;
            OrgBrowser.IsPopup = false;
            Controls.Add(OrgBrowser);

            this.ResumeLayout();
        }

        private void ShowPopup(string url)
        {
            if (this.InvokeRequired)
            {
                this.BeginInvoke(new Action<string>(ShowPopup), url);
                return;
            }

            OrgBrowser.Visible = false;
            PopupBrowser.Visible = true;
            uCefSharpBrowser1 = PopupBrowser;
            cImport.browser = uCefSharpBrowser1;
            uCefSharpBrowser1.Url = url;
            uCefSharpBrowser1.Focus();
        }
        /*
        private void RenewBrowser(string url,bool isPopup)
        {
            if (this.InvokeRequired)
            {
                this.BeginInvoke(new Action<string,bool>(RenewBrowser), url,isPopup);
                return;
            }
            

            if (uCefSharpBrowser1 != null && this.Controls.Contains(uCefSharpBrowser1))
            {
                this.Controls.Remove(uCefSharpBrowser1);
            }
            uCefSharpBrowser1 = new UCefSharpBrowser();
            this.SuspendLayout();
            uCefSharpBrowser1.InitControl();
            uCefSharpBrowser1.DocumentCompleted += new CefSharp.LoadCompletedEventHandler(uCefSharpBrowser1_DocumentCompleted);
            uCefSharpBrowser1.BeforePopup += new Action<IWebBrowser, string, int, int>(uCefSharpBrowser1_BeforePopup);
            cImport.browser = uCefSharpBrowser1;
            uCefSharpBrowser1.IsPopup = isPopup;
            this.ParentForm.Shown += new EventHandler(ParentForm_Shown);
            Controls.Add(uCefSharpBrowser1);

            this.ResumeLayout();
            uCefSharpBrowser1.Url = url;
        }

        private void LoadOrgBrowser()
        {
            if (this.InvokeRequired)
            {
                this.BeginInvoke(new Action(LoadOrgBrowser));
                return;
            }

            if (uCefSharpBrowser1 != null && this.Controls.Contains(uCefSharpBrowser1) )
            {
                if (uCefSharpBrowser1 == OrgBrowser) return;
                //if (!uCefSharpBrowser1.IsPopup) return;
                uCefSharpBrowser1.Visible = false;
                //this.Controls.Remove(uCefSharpBrowser1);
            }
            uCefSharpBrowser1 = OrgBrowser;
            uCefSharpBrowser1.Visible = true;
            this.SuspendLayout();
            uCefSharpBrowser1.InitControl();
            //uCefSharpBrowser1.DocumentCompleted += new CefSharp.LoadCompletedEventHandler(uCefSharpBrowser1_DocumentCompleted);
            //uCefSharpBrowser1.BeforePopup += new Action<IWebBrowser, string, int, int>(uCefSharpBrowser1_BeforePopup);
            cImport.browser = uCefSharpBrowser1;
            //this.ParentForm.Shown += new EventHandler(ParentForm_Shown);
            //Controls.Add(uCefSharpBrowser1);

            this.ResumeLayout();
            //uCefSharpBrowser1.Url = url;
        }
        */
        private void ShowOrgBrowser()
        {
            if (this.InvokeRequired)
            {
                this.BeginInvoke(new Action(ShowOrgBrowser));
                return;
            }

            PopupBrowser.Visible = false;
            OrgBrowser.Visible = true;
            uCefSharpBrowser1 = OrgBrowser;
            cImport.browser = uCefSharpBrowser1;
            uCefSharpBrowser1.Focus();
        }
        void uCefSharpBrowser1_BeforePopup(IWebBrowser browser, string url, int with, int heigh)
        {
            //if (browser.Address == "http://dktructuyen.moj.gov.vn/Secured/Queries/FindNotice.aspx")
            //{
            //    //CacheFindResult = uCefSharpBrowser1;
            //    RenewBrowser(url);
            //    uCefSharpBrowser1.IsPopup = true;
            //}

            ShowPopup(url);

            //RenewBrowser(url,true);
            //uCefSharpBrowser1.IsPopup = true;
            //throw new NotImplementedException();
        }

        

        void uCefSharpBrowser1_DocumentCompleted(object sender, CefSharp.LoadCompletedEventArgs url)
        {
            try
            {
                // Neu la trang nhap khach hang thuong xuyen thi lay ma
                if (cImport.CheckPage() == EPage.CUSTOMER 
                    || cImport.CheckPage() == EPage.ENTERWARRANTERCODE 
                    || cImport.CheckPage() == EPage.LOGIN
                    || cImport.CheckPage() == EPage.INDEX)
                {
                    //Lay thong tin nguoi dang nhap
                    cImport.ExtractLoginInfo();
                    //Lay thong tin Ma KHTX
                    //Xoa thong tin ma KHTX
                    if (_currentTransaction != null) _currentTransaction.WarranterCode = "";
                    cImport.ExtractInfo(ref _currentTransaction);
                    if (CustomerCodeChanged != null) CustomerCodeChanged(_currentTransaction.WarranterCode, null);

                    // Voi trang KHTX, nut Dong Lo Xu ly mở form in trước khi back về trang chủ, làm lỗi chương trình ko back về được
                    // Bỏ code Onclick o nut nay de chặn nút in
                    UnRegisOnclickAction();
                }
                else if(cImport.IsQueryPage())
                {
                    _currentTransaction.WarranterCode = "";
                    if (CustomerCodeChanged != null) CustomerCodeChanged(_currentTransaction.WarranterCode, null);
                }

                //Show info
                //if (url.Url == "http://dktructuyen.moj.gov.vn/secured/UCCFiling/InitialNotice.aspx?ftid=1")
                //{
                    RegisterAndGetFileValue();
                //}
                //MessageBox.Show("Loaded: " + url.Url);
                //uCefSharpBrowser1.
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
            }
        }

        public void Reload()
        {
            try
            {
                this.uCefSharpBrowser1.Reload();
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
            }
        }

        public void Back()
        {
            try
            {
                //if (this.uCefSharpBrowser1.IsPopup)
                if(uCefSharpBrowser1 == PopupBrowser)
                {
                    ShowOrgBrowser();
                    //LoadOrgBrowser();
                }
                else
                //{
                //    this.uCefSharpBrowser1.Backward();
                //}
                //return;
                if (this.CurrentTransaction != null && !string.IsNullOrEmpty(this.CurrentTransaction.WarranterCode))
                {
                    ShowHomePage();
                }
                else if (this.uCefSharpBrowser1.GetRequestUrl().ToLower().Contains("Secured/UCCFiling/PrintFiling.aspx".ToLower()))
                {
                    this.uCefSharpBrowser1.Url = "http://dktructuyen.moj.gov.vn/Secured/Queries/FindNotice.aspx";
                    //http://dktructuyen.moj.gov.vn/Secured/Queries/FindNotice.aspx
                    //http://dktructuyen.moj.gov.vn/Secured/UCCFiling/PrintFiling.aspx

                }
                else if (this.uCefSharpBrowser1.GetRequestUrl().ToLower().Contains("Secured/ca/clienthome.aspx".ToLower()))
                {
                    //do nothing
                    return;
                }
                else
                {
                    this.uCefSharpBrowser1.Backward();
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
            }
        }

        public void Forward()
        {
            try
            {
                this.uCefSharpBrowser1.Forward();
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
            }
        }

        public void ShowHomePage()
        {
            uCefSharpBrowser1.Url = URL_HOMEPAGE;
        }

        public void SaveTransaction()
        {
            try
            {
                if (_currentTransaction == null) _currentTransaction = new CTransaction();
                _currentTransaction.ClearInfo();
                cImport.ExtractTransactionData(ref _currentTransaction);

                if (!string.IsNullOrEmpty(_currentTransaction.TypeName) && _currentTransaction.TypeName.Equals("Sửa chữa sai sót", StringComparison.OrdinalIgnoreCase))
                {
                    FOldRefNo fOldRefNo = new FOldRefNo();
                    fOldRefNo.CurrentTransaction = _currentTransaction;
                    if (fOldRefNo.ShowDialog() == DialogResult.OK)
                    {
                        _currentTransaction.OldRefNo = fOldRefNo.OldRefNo;
                       
                    }
                    else
                    {
                        return;
                    }
                }
                BusinessObject.CApplicationMessage result = cImport.SaveTransaction(_currentTransaction);
                MessageBox.Show(result.Description);
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
            }
        }
        public BusinessObject.CApplicationMessage SaveTransaction(bool isTempSave)
        {
            if (!string.IsNullOrEmpty(_currentTransaction.TypeName) && _currentTransaction.TypeName.Equals("Sửa chữa sai sót", StringComparison.OrdinalIgnoreCase))
            {
                FOldRefNo fOldRefNo = new FOldRefNo();
                fOldRefNo.CurrentTransaction = _currentTransaction;
                if (fOldRefNo.ShowDialog() == DialogResult.OK)
                {
                    _currentTransaction.OldRefNo = fOldRefNo.OldRefNo;

                }
                else
                {
                    return null;
                }
            }
            BusinessObject.CApplicationMessage result = cImport.SaveTransaction(_currentTransaction, isTempSave);
            return result;
            
        }
        public void ShowReportTBGT(string context="")
        {
            try
            {
                
                string refno="";
                CurrentTransaction.ClearInfo();
                if (GetRefNoInBrowser(ref refno))
                {
                    GetTransactionFromBrowser();

                    //if (refno != this.CurrentTransaction.RefNo)
                    //{
                    //    //xoa thong tin transaction 
                    //    CurrentTransaction.ClearInfo();

                    //    GetTransactionFromBrowser();
                    //}
                }
                else
                {
                    throw new Exception("Không lấy được thông tin Số đơn đăng ký");
                }
                //Neu la don CCTT
                if (this.CurrentTransaction.RefType == 26)
                {
                    throw new Exception("Không lấy được thông tin Số đơn đăng ký");
                }

                if (this.CurrentTransaction ==null || string.IsNullOrEmpty(this.CurrentTransaction.RefNo))
                {
                    throw new Exception("Không lấy được thông tin Số đơn đăng ký");
                }

                

                // Neu don chua luu
                if (!cImport.IsTransactionExists(_currentTransaction))
                {
                    //Hiển thị câu hỏi lưu
                    //DialogResult dlg = MessageBox.Show("Bạn có muốn lưu đơn này không?", "Lưu", MessageBoxButtons.YesNoCancel, MessageBoxIcon.Question);
                    //if (dlg == DialogResult.Yes)
                    //{

                    //Neu la don SCSS thi hien thi dialog bat buoc nhap so dang ky ban dau
                    
                        BusinessObject.CApplicationMessage saveResult = this.SaveTransaction(false);
                    if(saveResult ==null) return;
                    if (saveResult.Result == null || string.IsNullOrEmpty(saveResult.Result.ToString()) || saveResult.Result.ToString() == "0")
                    {
                        MessageBox.Show(saveResult.Description);
                        return;
                    }
                    //}
                    //else if (dlg == DialogResult.Cancel)
                    //{
                    //    return;
                    //}
                    //else if (dlg == DialogResult.No)
                    //{
                    //    BusinessObject.CApplicationMessage saveResult = this.SaveTransaction(true);
                    //    if (saveResult == null || saveResult.Result == null || string.IsNullOrEmpty(saveResult.Result.ToString()) || saveResult.Result.ToString() == "0")
                    //    {
                    //        MessageBox.Show("Có lỗi trong quá trình chuẩn bị dữ liệu in.");
                    //        return;
                    //    }
                    //}

                }

                //if (string.IsNullOrEmpty(this.CurrentTransaction.RefNo))
                //{
                //    this.SaveTransaction();
                //}
                FEntryTBGT fentry = new FEntryTBGT();
                fentry.Context = context;
                fentry.HTMLTransaction = this.CurrentTransaction;
                fentry.InitForm(this.CurrentTransaction.RefNo);
                fentry.TopLevel = true;
                fentry.TopMost = false;
                
                fentry.FormClosed += new FormClosedEventHandler(fEntryTBGT_FormClosed);
                fentry.Show(this.ParentForm);

                
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
            }
        }
        public void ShowReportGCN(string context="")
        {
            try
            {
                

                //FEntryTBGT fentry1 = new FEntryTBGT();
                //fentry1.InitForm(uImport1.CurrentTransaction.RefNo);
                //fentry1.ShowDialog();
                //return;
                //if (cImport.CheckPage() != EPage.VIEWDETAIL)
                //{
                //    throw new Exception("Không thể in ở trang này");
                //}

                string refno = "";
                CurrentTransaction.ClearInfo();
                if (GetRefNoInBrowser(ref refno))
                {
                    GetTransactionFromBrowser();
                    //if (refno != this.CurrentTransaction.RefNo)
                    //{
                    //    //xoa thong tin transaction 
                    //    CurrentTransaction.ClearInfo();
                    //    GetTransactionFromBrowser();
                    //}
                }
                else
                {
                    throw new Exception("Không lấy được thông tin Số đơn đăng ký");
                }

                //if (this.CurrentTransaction.RefType == 26 && string.IsNullOrEmpty(this.CurrentTransaction.RefNo))
                //{
                //    this.CurrentTransaction.RefNo = GetNewRefNoFromDB(26);
                //}

                //if (this.CurrentTransaction == null || string.IsNullOrEmpty(this.CurrentTransaction.RefNo))
                //{
                //    if (GetRefTypeInBrowser() == 26)
                //    {
                //        this.CurrentTransaction.RefNo = GetNewRefNoFromDB(26);
                //    }
                    
                //}
                if (this.CurrentTransaction == null || string.IsNullOrEmpty(this.CurrentTransaction.RefNo))
                {
                    throw new Exception("Không lấy được thông tin Số đơn đăng ký");
                }
                // Neu don chua luu
                if (!cImport.IsTransactionExists(_currentTransaction))
                {
                    //Hiển thị câu hỏi lưu
                    //DialogResult dlg = MessageBox.Show("Bạn có muốn lưu đơn này không?", "Lưu", MessageBoxButtons.YesNoCancel, MessageBoxIcon.Question);
                    //if (dlg == DialogResult.Yes)
                    //{
                    //Neu la don SCSS thi hien thi dialog bat buoc nhap so dang ky ban dau
                    //if (!string.IsNullOrEmpty(_currentTransaction.TypeName) && _currentTransaction.TypeName.Equals("Sửa chữa sai sót",StringComparison.OrdinalIgnoreCase))
                    //{
                    //    FOldRefNo fOldRefNo = new FOldRefNo();
                    //    if (fOldRefNo.ShowDialog() == DialogResult.OK)
                    //    {
                    //        _currentTransaction.OldRefNo = fOldRefNo.OldRefNo;
                    //    }
                    //    else
                    //    {
                    //        return;
                    //    }
                    //}

                        BusinessObject.CApplicationMessage saveResult = this.SaveTransaction(false);
                        if (saveResult == null) return;
                        if (saveResult == null || saveResult.Result == null || string.IsNullOrEmpty(saveResult.Result.ToString()) || saveResult.Result.ToString() == "0")
                        {
                            if (saveResult == null) saveResult = new BusinessObject.CApplicationMessage() { Description = "Lỗi không xác định" };
                            MessageBox.Show(saveResult.Description);
                            return;
                        }
                        //if (saveResult.IsSuccessfull)
                        //{
                        //    _currentTransaction.ID = int.Parse(saveResult.Result.ToString());
                        //}
                    //}
                    //else if (dlg == DialogResult.Cancel)
                    //{
                    //    return;
                    //}
                    //else if (dlg == DialogResult.No)
                    //{
                    //    BusinessObject.CApplicationMessage saveResult = this.SaveTransaction(true);
                    //    if (saveResult == null || saveResult.Result == null || string.IsNullOrEmpty(saveResult.Result.ToString()) || saveResult.Result.ToString() == "0")
                    //    {
                    //        MessageBox.Show("Có lỗi trong quá trình chuẩn bị dữ liệu in.");
                    //        return;
                    //    }
                    //}

                }

                //if (string.IsNullOrEmpty(this.CurrentTransaction.RefNo))
                //{
                //    this.SaveTransaction();
                //}
                FEntryGCN fentry = new FEntryGCN();
                fentry.InitForm(this.CurrentTransaction.RefNo, this.CurrentTransaction.RefType);
                fentry.FormClosed += new FormClosedEventHandler(EntryGCN_FormClosed);
                fentry.TopLevel = true;
                fentry.TopMost = false;
                fentry.Show(this.ParentForm);

                //if (fentry.ShowDialog() == System.Windows.Forms.DialogResult.OK)
                //{
                //    string inputValue = "<InputValue UserID=\"{1}\" ClientKey=\"{2}\"/><RequestParams Context=\"{3}\" RefNo=\"{0}\" ViewID=\"38\" ViewerID=\"18\"/>";
                //    inputValue = string.Format(inputValue, this.CurrentTransaction.RefNo, CSession.UserID, CSession.CLIENT_KEY, context);
                //    inputValue = System.Web.HttpUtility.UrlEncode(System.Web.HttpUtility.HtmlEncode(inputValue));
                //    string url = "{0}/Mods/Dashboard/ReportViewer.aspx?InputValue=" + inputValue;
                //    url = string.Format(url, System.Configuration.ConfigurationManager.AppSettings["WebServerHost"]);

                //    //string url = "{0}/Mods/Report/ReportViewer.ashx?ExportTo=pdf&InputValue=%3CInputValue%20UserID%3D%22{2}%22%20ClientKey%3D%22{3}%22%2F%3E%3CRequestParams+Context%3D%22{4}%22+RefNo%3D%22{1}%22+ViewID%3D%2238%22+ViewerID%3D%2218%22+%3E%3C%2FRequestParams%3E";
                //    //url = string.Format(url, System.Configuration.ConfigurationManager.AppSettings["WebServerHost"], this.CurrentTransaction.RefNo, CSession.UserID,CSession.CLIENT_KEY,context);
                //    //string url = "http://localhost/vAccounting/Mods/Report/ReportViewer.ashx?ExportTo=pdf&InputValue=%3CRequestParams+RefNo%3D%22{0}%22+ViewID%3D%2238%22+ViewerID%3D%2218%22+%3E%3C%2FRequestParams%3E";
                //    //url = string.Format(url, this.CurrentTransaction.RefNo);
                //    FWebBrowser report = new FWebBrowser();
                //    //report.InitControl();
                //    report.ShowURL(url);
                //}
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
            }
        }

        public void ShowReportPL04(string context = "")
        {
            try
            {

                string refno = "";
                CurrentTransaction.ClearInfo();
                if (GetRefNoInBrowser(ref refno))
                {
                    GetTransactionFromBrowser();
                    
                }
                else
                {
                    throw new Exception("Không lấy được thông tin Số đơn đăng ký");
                }
                //Neu la don CCTT
                if (this.CurrentTransaction.RefType == 26)
                {
                    throw new Exception("Không lấy được thông tin Số đơn đăng ký");
                }

                if (this.CurrentTransaction == null || string.IsNullOrEmpty(this.CurrentTransaction.RefNo))
                {
                    throw new Exception("Không lấy được thông tin Số đơn đăng ký");
                }



                // Neu don chua luu
                if (!cImport.IsTransactionExists(_currentTransaction))
                {
                  
                    //Neu la don SCSS thi hien thi dialog bat buoc nhap so dang ky ban dau

                    BusinessObject.CApplicationMessage saveResult = this.SaveTransaction(false);
                    if (saveResult == null) return;
                    if (saveResult.Result == null || string.IsNullOrEmpty(saveResult.Result.ToString()) || saveResult.Result.ToString() == "0")
                    {
                        MessageBox.Show(saveResult.Description);
                        return;
                    }
                   

                }

                //if (string.IsNullOrEmpty(this.CurrentTransaction.RefNo))
                //{
                //    this.SaveTransaction();
                //}
                FEntryPL04 fentry = new FEntryPL04();
                fentry.Context = context;
                fentry.HTMLTransaction = this.CurrentTransaction;
                fentry.InitForm(this.CurrentTransaction.RefNo);
                fentry.TopLevel = true;
                fentry.TopMost = false;

                fentry.FormClosed += new FormClosedEventHandler(fEntryPL04_FormClosed);
                fentry.Show(this.ParentForm);


            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
            }
        }

        public void ShowReportPL03(string context = "")
        {
            try
            {

                string refno = "";
                CurrentTransaction.ClearInfo();
                if (GetRefNoInBrowser(ref refno))
                {
                    GetTransactionFromBrowser();

                }
                else
                {
                    throw new Exception("Không lấy được thông tin Số đơn đăng ký");
                }
                //Neu la don CCTT
                if (this.CurrentTransaction.RefType == 26)
                {
                    throw new Exception("Không lấy được thông tin Số đơn đăng ký");
                }

                if (this.CurrentTransaction == null || string.IsNullOrEmpty(this.CurrentTransaction.RefNo))
                {
                    throw new Exception("Không lấy được thông tin Số đơn đăng ký");
                }



                // Neu don chua luu
                if (!cImport.IsTransactionExists(_currentTransaction))
                {

                    //Neu la don SCSS thi hien thi dialog bat buoc nhap so dang ky ban dau

                    BusinessObject.CApplicationMessage saveResult = this.SaveTransaction(false);
                    if (saveResult == null) return;
                    if (saveResult.Result == null || string.IsNullOrEmpty(saveResult.Result.ToString()) || saveResult.Result.ToString() == "0")
                    {
                        MessageBox.Show(saveResult.Description);
                        return;
                    }


                }

                //if (string.IsNullOrEmpty(this.CurrentTransaction.RefNo))
                //{
                //    this.SaveTransaction();
                //}
                FEntryPL03 fentry = new FEntryPL03();
                fentry.Context = context;
                fentry.HTMLTransaction = this.CurrentTransaction;
                fentry.InitForm(this.CurrentTransaction.RefNo);
                fentry.TopLevel = true;
                fentry.TopMost = false;

                fentry.FormClosed += new FormClosedEventHandler(fEntryPL03_FormClosed);
                fentry.Show(this.ParentForm);


            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
            }
        }
        #endregion Public Method

        #region Private Methods


        void ShowGCNCCTT()
        {
            try
            {
                string reportfile = Application.StartupPath + "\\Reports\\[TTDKGDTS]GCN CCTT.htm";
                string Html = File.ReadAllText(reportfile);
                Html = Html.Replace("[NOTE]", this.CurrentTransaction.Note);
                Html = Html.Replace("[CURDATE]", DateTime.Now.Day.ToString());
                Html = Html.Replace("[CURMONTH]", DateTime.Now.Month.ToString());
                Html = Html.Replace("[CURYEAR]", DateTime.Now.Year.ToString());

                FWebBrowser report = new FWebBrowser();
                report.ShowHTML(Html);
                
            }
            catch (Exception ex)
            {
                ShowError(ex.Message);
            }
        }

        private void UnRegisOnclickAction()
        {
            string jsScript = "foo = document.getElementById(\"ctl00_cphBody_lnkRegistrarCloseBatch\");if(foo != undefined) foo.setAttribute(\"onclick\", \"javascript:doit();\");";
            uCefSharpBrowser1.EvaluateScript(jsScript);
        }

        private void GetTransactionFromBrowser()
        {
            //if (cImport.CheckPage() == EPage.VIEWDETAIL)
            //{
                cImport.ExtractTransactionData(ref _currentTransaction);
            //}
        }

        private bool GetRefNoInBrowser(ref string RefNo)
        {
            //if (cImport.CheckPage() == EPage.VIEWDETAIL)
            //{
                RefNo = cImport.ExtractRefNo();
                return true;
            //}
            //return false;
        }

        private int GetRefTypeInBrowser()
        {
            return cImport.GetRefType();
        }

        private string GetNewRefNoFromDB(int RefType)
        {
            string InputValue = string.Format("<RequestParams RefType=\"{0}\" RefDate=\"\" Function=\"GetNewRefNo\"/>", RefType);
            InputValue = CXML.AddAuthenticate(InputValue);
            string data = CServiceReference.CoreService.GetContextData(CSession.CLIENT_KEY, InputValue);
            List<CRefNo> refno = CObjectMapper.FromCSV<CRefNo>(data, 1);
            if(refno !=null && refno.Count >0) return refno[0].RefNo;
            return "";
        }

        private string GetSelectedAssetID(FEntryTBGT form)
        {
            if (form == null) return "";
            if (form.CurrentTransaction == null) return "";
           
            if (form.CurrentTransaction.Assets == null) return "";
            string result = "";
            for (int i = 0; i < form.CurrentTransaction.Assets.Count; i++)
            {
                if (form.CurrentTransaction.Assets[i].Selected)
                {
                    result += ","+ form.CurrentTransaction.Assets[i].ID;
                }
            }
            if (result.StartsWith(",")) result = result.Substring(1);
            return result;
        }

        private string GetSelectedPL04AssetID(FEntryPL04 form)
        {
            if (form == null) return "";
            if (form.CurrentTransaction == null) return "";

            if (form.CurrentTransaction.Assets == null) return "";
            string result = "";
            for (int i = 0; i < form.CurrentTransaction.Assets.Count; i++)
            {
                if (form.CurrentTransaction.Assets[i].Selected)
                {
                    result += "," + form.CurrentTransaction.Assets[i].ID;
                }
            }
            if (result.StartsWith(",")) result = result.Substring(1);
            return result;
        }

        private void RegisterAndGetFileValue()
        {
            //Kiem tra DOM co chua ID cua file browser: ctl00_cphBody_ucScanDocument_txtFileUpload
            if (uCefSharpBrowser1.GetDocument().Contains("id=\"ctl00_cphBody_ucScanDocument_txtFileUpload\""))
            {
                CurrentTransaction.FileNumber = "";              
                //Dang ky event '
                string jsScript = "foo = document.getElementById(\"ctl00_cphBody_ucScanDocument_txtFileUpload\");"+
                                "if(foo != undefined){ foo.setAttribute(\"onchange\",\"filegetter.callBack(foo.value);\"); }";
                uCefSharpBrowser1.EvaluateScript(jsScript);
            }
        }

        private void RegisterJsObjectCallBack()
        {
            CallbackObjectForJs callback = new CallbackObjectForJs((string fileName)=>{
                FileInfo f = new FileInfo(fileName);
                string fileNumber = f.Name;
                //fileNumber = fileNumber.Substring(0, fileNumber.Length - f.Extension.Length);
                CurrentTransaction.FileNumber = fileNumber;
                //MessageBox.Show(CurrentTransaction.FileNumber);
                });

            uCefSharpBrowser1.RegisterJsObject("filegetter", callback);
        }


        #endregion Private Methods

        #region Report
        void fEntryTBGT_FormClosed(object sender, FormClosedEventArgs e)
        {
            FEntryTBGT form = sender as FEntryTBGT;

            if (form.Action == "OK")
            {
                this.CurrentTransaction.ObjectEmail = form.CurrentTransaction.ObjectEmail;
                this.CurrentTransaction.WarranterEmail = form.CurrentTransaction.WarranterEmail;
                string context = form.Context;
                string inputValue = "";
                string SelectedAsset = GetSelectedAssetID(form);
                //Neu gui mail thi ko show form report ma gui tu dong xuat report va gui mail
                if (form.IsSendMail || form.IsSendMailKH)
                {
                    inputValue = "";// string.Format("<InputValue UserID=\"{0}\" ClientKey=\"{1}\" />", CSession.UserID, CSession.CLIENT_KEY);
                    inputValue += string.Format("<RequestParams ID=\"{0}\" RequestOrder=\"1\"  ReceiveResponseDateTime=\"{1}\" WarranterEmail=\"{2}\" ObjectEmail=\"{3}\" Function=\"Transaction_Asset\" Action=\"UPDATE_REQUEST\" IsSendCSGT=\"{4}\" IsSendKH=\"{5}\" />", this.CurrentTransaction.ID, this.CurrentTransaction.ObjectEmail, this.CurrentTransaction.WarranterEmail, this.CurrentTransaction.ObjectEmail, form.IsSendMail, form.IsSendMailKH);
                    inputValue += string.Format("<RequestParams RequestOrder=\"2\" Context=\"{1}\" RegisTransRefNo=\"{0}\" ViewID=\"35\" ViewerID=\"13\" RefNo=\"{2}\" ObjectID=\"{3}\" IncludeSign=\"1\" SelectedAsset=\"{4}\" ></RequestParams>", CXML.HtmlEnCode(this.CurrentTransaction.RefNo), context, CXML.HtmlEnCode(form.RefNo), form.ObjectID, SelectedAsset);
                    //inputValue = "<RequestParams RequestOrder=\"2\" Context=\"{3}\" RegisTransRefNo=\"{0}\" ViewID=\"35\" ViewerID=\"13\" RefNo=\"{4}\" ObjectID=\"{5}\" ></RequestParams>";
                    //inputValue = string.Format(inputValue, CXML.HtmlEnCode(this.CurrentTransaction.RefNo), CSession.UserID, CSession.CLIENT_KEY, context, CXML.HtmlEnCode(form.RefNo), form.ObjectID);
                    //inputValue += string.Format("<RequestParams ID=\"{0}\" RequestOrder=\"1\"  ReceiveResponseDateTime=\"{1}\" WarranterEmail=\"{2}\" ObjectEmail=\"{3}\" Function=\"Transaction_Asset\" Action=\"UPDATE_REQUEST\" />", this.CurrentTransaction.ID, this.CurrentTransaction.ObjectEmail, this.CurrentTransaction.WarranterEmail,this.CurrentTransaction.ObjectEmail);
                    inputValue = CXML.AddAuthenticate(inputValue);
                    string result = CServiceReference.AssetService.UpdateAndSendReport(CSession.CLIENT_KEY, inputValue);
                    //FWS.TTDKGDTS.ImportTool.ServiceReference.Soap.CApplicationMessage message = CServiceReference.AssetService.UpdateAndSendReport(CSession.CLIENT_KEY, inputValue);
                    CApplicationMessage message = CObjectMapper.FromCSV<CApplicationMessage>(result)[0];

                    if (message.IsSuccessfull)
                    {
                        ShowInfo(message.Description);
                    }
                    else
                    {
                        ShowError(message.Description);
                    }
                }
                //else
                //{
                //inputValue = "<InputValue UserID=\"{1}\" ClientKey=\"{2}\"/><RequestParams RequestOrder=\"2\" Context=\"{3}\" RegisTransRefNo=\"{0}\" ViewID=\"35\" ViewerID=\"13\" RefNo=\"{4}\" ObjectID=\"{5}\" ></RequestParams>";
                inputValue = "<RequestParams RequestOrder=\"2\" Context=\"{3}\" RegisTransRefNo=\"{0}\" ViewID=\"35\" ViewerID=\"13\" RefNo=\"{4}\" ObjectID=\"{5}\" SelectedAsset=\"{6}\" ></RequestParams>";
                inputValue = string.Format(inputValue, CXML.HtmlEnCode(this.CurrentTransaction.RefNo), CSession.UserID, CSession.CLIENT_KEY, context, CXML.HtmlEnCode(form.RefNo), form.ObjectID, SelectedAsset);
                inputValue = CXML.AddAuthenticate(inputValue);
                inputValue = System.Web.HttpUtility.UrlEncode(System.Web.HttpUtility.HtmlEncode(inputValue)).Replace("+", "%20");

                string url = "{0}/Mods/Dashboard/ReportViewer.aspx?InputValue=" + inputValue;
                url = string.Format(url, System.Configuration.ConfigurationManager.AppSettings["WebServerHost"]);

                //string url = "{0}/Mods/Report/ReportViewer.ashx?ExportTo=pdf&InputValue=%3CInputValue%20UserID%3D%22{2}%22%20ClientKey%3D%22{3}%22%2F%3E%3CRequestParams+Context%3D%22{4}%22+RegisTransRefNo%3D%22{1}%22+ViewID%3D%2235%22+ViewerID%3D%2213%22+%3E%3C%2FRequestParams%3E";
                //url = string.Format(url,System.Configuration.ConfigurationManager.AppSettings["WebServerHost"], this.CurrentTransaction.RefNo,CSession.UserID,CSession.CLIENT_KEY,context);
                FWebBrowser report = new FWebBrowser();
                //report.InitControl();
                report.ShowURL(url);
                //}
            }
        }
        void EntryGCN_FormClosed(object sender, FormClosedEventArgs e)
        {
            FEntryGCN form = sender as FEntryGCN;
            if (form.Action == "OK")
            {
                string context = "";
                int ReportID = 18;
                if (this.CurrentTransaction.RefType == 26)
                {
                    ShowGCNCCTT();
                    return;
                }
                //if (this.CurrentTransaction.RefType == 26) ReportID = 23;
                //Neu co gui email
                string inputValue = ""; // "<InputValue UserID=\"{1}\" ClientKey=\"{2}\"/>";
                /*
                if (!string.IsNullOrEmpty(form.EmailKH))
                {
                    inputValue += "<RequestParams RefType=\"{6}\" Context=\"{3}\" RefNo=\"{0}\" ViewID=\"38\" ViewerID=\"{5}\" ID=\"{4}\" IncludeSign=\"1\" Email=\"{7}\"/>";
                    inputValue = string.Format(inputValue, CXML.HtmlEnCode(this.CurrentTransaction.RefNo), CSession.UserID, CSession.CLIENT_KEY, context, this.CurrentTransaction.ID, ReportID, this.CurrentTransaction.RefType,form.EmailKH);
                    inputValue = CXML.AddAuthenticate(inputValue);

                    string result = CServiceReference.AssetService.SendGCN(CSession.CLIENT_KEY, inputValue);
                    //FWS.TTDKGDTS.ImportTool.ServiceReference.Soap.CApplicationMessage message = CServiceReference.AssetService.UpdateAndSendReport(CSession.CLIENT_KEY, inputValue);
                    BusinessObject.CApplicationMessage message = CObjectMapper.FromCSV<BusinessObject.CApplicationMessage>(result)[0];

                    if (message.IsSuccessfull)
                    {
                        ShowInfo(message.Description);
                    }
                    else
                    {
                        ShowError(message.Description);
                    }

                }
                 * */
                inputValue = "<RequestParams RefType=\"{6}\" Context=\"{3}\" RefNo=\"{0}\" ViewID=\"38\" ViewerID=\"{5}\" ID=\"{4}\"/>";

                inputValue = string.Format(inputValue, CXML.HtmlEnCode(this.CurrentTransaction.RefNo), CSession.UserID, CSession.CLIENT_KEY, context, this.CurrentTransaction.ID, ReportID, this.CurrentTransaction.RefType);
                inputValue = CXML.AddAuthenticate(inputValue);
                inputValue = System.Web.HttpUtility.UrlEncode(System.Web.HttpUtility.HtmlEncode(inputValue)).Replace("+", "%20");
                string url = "{0}/Mods/Dashboard/ReportViewer.aspx?InputValue=" + inputValue;
                url = string.Format(url, System.Configuration.ConfigurationManager.AppSettings["WebServerHost"]);

                //string url = "{0}/Mods/Report/ReportViewer.ashx?ExportTo=pdf&InputValue=%3CInputValue%20UserID%3D%22{2}%22%20ClientKey%3D%22{3}%22%2F%3E%3CRequestParams+Context%3D%22{4}%22+RefNo%3D%22{1}%22+ViewID%3D%2238%22+ViewerID%3D%2218%22+%3E%3C%2FRequestParams%3E";
                //url = string.Format(url, System.Configuration.ConfigurationManager.AppSettings["WebServerHost"], this.CurrentTransaction.RefNo, CSession.UserID,CSession.CLIENT_KEY,context);
                //string url = "http://localhost/vAccounting/Mods/Report/ReportViewer.ashx?ExportTo=pdf&InputValue=%3CRequestParams+RefNo%3D%22{0}%22+ViewID%3D%2238%22+ViewerID%3D%2218%22+%3E%3C%2FRequestParams%3E";
                //url = string.Format(url, this.CurrentTransaction.RefNo);
                FWebBrowser report = new FWebBrowser();
                //report.InitControl();
                report.ShowURL(url);
                //throw new NotImplementedException();
            }
        }

        void fEntryPL04_FormClosed(object sender, FormClosedEventArgs e)
        {
            FEntryPL04 form = sender as FEntryPL04;

            if (form.Action == "OK")
            {
                //this.CurrentTransaction.ObjectEmail = form.CurrentTransaction.ObjectEmail;
                //this.CurrentTransaction.WarranterEmail = form.CurrentTransaction.WarranterEmail;
                string context = form.Context;
                string inputValue = "";
                string SelectedAsset = GetSelectedPL04AssetID(form);
                
                //else
                //{
                //inputValue = "<InputValue UserID=\"{1}\" ClientKey=\"{2}\"/><RequestParams RequestOrder=\"2\" Context=\"{3}\" RegisTransRefNo=\"{0}\" ViewID=\"35\" ViewerID=\"13\" RefNo=\"{4}\" ObjectID=\"{5}\" ></RequestParams>";
                inputValue = "<RequestParams RequestOrder=\"2\" Context=\"{3}\" RegisTransRefNo=\"{0}\" ViewID=\"35\" ViewerID=\"24\" RefNo=\"{4}\" ObjectID=\"{5}\" SelectedAsset=\"{6}\" ></RequestParams>";
                inputValue = string.Format(inputValue, CXML.HtmlEnCode(this.CurrentTransaction.RefNo), CSession.UserID, CSession.CLIENT_KEY, context, CXML.HtmlEnCode(form.RefNo), form.ObjectID, SelectedAsset);
                inputValue = CXML.AddAuthenticate(inputValue);
                inputValue = System.Web.HttpUtility.UrlEncode(System.Web.HttpUtility.HtmlEncode(inputValue)).Replace("+", "%20");

                string url = "{0}/Mods/Dashboard/ReportViewer.aspx?InputValue=" + inputValue;
                url = string.Format(url, System.Configuration.ConfigurationManager.AppSettings["WebServerHost"]);

                //string url = "{0}/Mods/Report/ReportViewer.ashx?ExportTo=pdf&InputValue=%3CInputValue%20UserID%3D%22{2}%22%20ClientKey%3D%22{3}%22%2F%3E%3CRequestParams+Context%3D%22{4}%22+RegisTransRefNo%3D%22{1}%22+ViewID%3D%2235%22+ViewerID%3D%2213%22+%3E%3C%2FRequestParams%3E";
                //url = string.Format(url,System.Configuration.ConfigurationManager.AppSettings["WebServerHost"], this.CurrentTransaction.RefNo,CSession.UserID,CSession.CLIENT_KEY,context);
                FWebBrowser report = new FWebBrowser();
                //report.InitControl();
                report.ShowURL(url);
                //}
            }
        }

        void fEntryPL03_FormClosed(object sender, FormClosedEventArgs e)
        {
            FEntryPL03 form = sender as FEntryPL03;

            if (form.Action == "OK")
            {
                //this.CurrentTransaction.ObjectEmail = form.CurrentTransaction.ObjectEmail;
                //this.CurrentTransaction.WarranterEmail = form.CurrentTransaction.WarranterEmail;
                string context = form.Context;
                string inputValue = "";
                //string SelectedAsset = GetSelectedPL04AssetID(form);

                //else
                //{
                //inputValue = "<InputValue UserID=\"{1}\" ClientKey=\"{2}\"/><RequestParams RequestOrder=\"2\" Context=\"{3}\" RegisTransRefNo=\"{0}\" ViewID=\"35\" ViewerID=\"13\" RefNo=\"{4}\" ObjectID=\"{5}\" ></RequestParams>";
                inputValue = "<RequestParams RequestOrder=\"2\" Context=\"{3}\" RegisTransRefNo=\"{0}\" ViewID=\"35\" ViewerID=\"25\" RefNo=\"{4}\" ObjectID=\"{5}\" ></RequestParams>";
                inputValue = string.Format(inputValue, CXML.HtmlEnCode(this.CurrentTransaction.RefNo), CSession.UserID, CSession.CLIENT_KEY, context, CXML.HtmlEnCode(form.RefNo), form.ObjectID);
                inputValue = CXML.AddAuthenticate(inputValue);
                inputValue = System.Web.HttpUtility.UrlEncode(System.Web.HttpUtility.HtmlEncode(inputValue)).Replace("+", "%20");

                string url = "{0}/Mods/Dashboard/ReportViewer.aspx?InputValue=" + inputValue;
                url = string.Format(url, System.Configuration.ConfigurationManager.AppSettings["WebServerHost"]);

                //string url = "{0}/Mods/Report/ReportViewer.ashx?ExportTo=pdf&InputValue=%3CInputValue%20UserID%3D%22{2}%22%20ClientKey%3D%22{3}%22%2F%3E%3CRequestParams+Context%3D%22{4}%22+RegisTransRefNo%3D%22{1}%22+ViewID%3D%2235%22+ViewerID%3D%2213%22+%3E%3C%2FRequestParams%3E";
                //url = string.Format(url,System.Configuration.ConfigurationManager.AppSettings["WebServerHost"], this.CurrentTransaction.RefNo,CSession.UserID,CSession.CLIENT_KEY,context);
                FWebBrowser report = new FWebBrowser();
                //report.InitControl();
                report.ShowURL(url);
                //}
            }
        }
        #endregion

    }
    public class CallbackObjectForJs
    {
        Action<string> jsCallBack = null;
        public CallbackObjectForJs(Action<string> callback)
        {
            jsCallBack = callback;
        }
        public void callBack(string data) {
            if (jsCallBack != null)
            {
                jsCallBack(data);
            }
            //MessageBox.Show(data);
        }

    }
}
