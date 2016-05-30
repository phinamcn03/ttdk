using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Text;
using System.Windows.Forms;
using FWS.TTDKGDTS.ImportTool._Core;
using FWS.TTDKGDTS.ImportTool.Mods.Import;
using FWS.TTDKGDTS.ImportTool._Base;
using FWS.TTDKGDTS.ImportTool.Mods.About;

namespace FWS.TTDKGDTS.ImportTool
{
    public partial class FMain : FBase
    {
        public FMain()
        {
            InitializeComponent();
            uImport1 = new UImport();
            Controls.Add(uImport1);
            uImport1.BringToFront();
            uImport1.Dock = DockStyle.Fill;
            
            uImport1.InitControl();
            uImport1.CustomerCodeChanged += new EventHandler(uImport1_CustomerCodeChanged);
            this.KeyPreview = true;
            this.KeyDown += new KeyEventHandler(FMain_KeyDown);
        }

        void FMain_KeyDown(object sender, KeyEventArgs e)
        {
            MessageBox.Show("Key:" + e.KeyCode.ToString());
            //throw new NotImplementedException();
        }

        void uImport1_CustomerCodeChanged(object sender, EventArgs e)
        {
            
                if (this.InvokeRequired)
                {
                    this.BeginInvoke(new EventHandler(uImport1_CustomerCodeChanged), sender, e);
                }
                else
                {
                    if (sender==null || string.IsNullOrEmpty(sender.ToString())) this.Text = "Import Tools";
                    else this.Text = "Import Tools [" + sender.ToString() + "]";
                }
            
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            //this.Shown += new EventHandler(Form1_Shown);
           // uCefSharpBrowser1.Url = "http://vnexpress.net";
            
        }

        private void uImport1_Load(object sender, EventArgs e)
        {

        }

        private void btnBack_Click(object sender, EventArgs e)
        {
            try
            {
                uImport1.Back();
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
            }
        }

        private void btnForward_Click(object sender, EventArgs e)
        {
            try
            {
                uImport1.Forward();
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
            }
        }

        private void btnRefresh_Click(object sender, EventArgs e)
        {
            try
            {
                uImport1.Reload();
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
            }
        }

        private void btnSave_Click(object sender, EventArgs e)
        {
            try
            {
                 uImport1.SaveTransaction();
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
            }
        }

        private void btnReport_Click(object sender, EventArgs e)
        {
            try
            {
                uImport1.ShowReportTBGT("SPLIT");
                return;
               
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
            }
        }

        private void btnPrintGCN_Click(object sender, EventArgs e)
        {
            try
            {
                uImport1.ShowReportGCN();
                return;
               /*
                if (string.IsNullOrEmpty(uImport1.CurrentTransaction.RefNo))
                {
                    uImport1.SaveTransaction();
                    //MessageBox.Show("Đơn chưa được lưu. Hãy lưu trước khi In");
                    //return;
                }
                FEntryGCN fentry = new FEntryGCN();
                fentry.InitForm(uImport1.CurrentTransaction.RefNo,uImport1.CurrentTransaction.RefType);
                if (fentry.ShowDialog() == System.Windows.Forms.DialogResult.OK)
                {
                    string url = "http://localhost/vAccounting/Mods/Report/ReportViewer.ashx?ExportTo=pdf&InputValue=%3CRequestParams+RefNo%3D%22{0}%22+ViewID%3D%2238%22+ViewerID%3D%2218%22+%3E%3C%2FRequestParams%3E";
                    url = string.Format(url, uImport1.CurrentTransaction.RefNo);
                    FWebBrowser report = new FWebBrowser();
                    //report.InitControl();
                    report.ShowURL(url);
                }
                * */
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
            }
        }

        private void btnReportTBGTCombine_Click(object sender, EventArgs e)
        {
            try
            {
                uImport1.ShowReportTBGT("COMBINE");
                return;
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
            }
        }

        private void btnAbout_Click(object sender, EventArgs e)
        {
            try
            {
                FAbout about = new FAbout();
                about.ShowDialog();
            }
            catch (Exception ex)
            {
                ShowError(ex.Message);
            }
        }

        private void mnsPL04_Click(object sender, EventArgs e)
        {
            try
            {
                uImport1.ShowReportPL04();
                return;
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
            }
        }

        private void toolStripMenuItem1_Click(object sender, EventArgs e)
        {
            try
            {
                uImport1.ShowReportPL03();
                return;
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
            }
        }
    }
}
