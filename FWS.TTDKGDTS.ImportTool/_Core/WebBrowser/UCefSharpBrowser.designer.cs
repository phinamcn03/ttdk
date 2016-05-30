using System.Diagnostics;
//using ShockwaveFlashObjects;
namespace PMSA.iMarkets.Presentation.AppVersion.Main
{
    partial class UCefSharpBrowser
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
           
           
            //if (web_view.IsLoading)
            //{
            //    try
            //    {
            //        //web_view.Stop();

            //        System.GC.Collect(System.GC.MaxGeneration, System.GCCollectionMode.Optimized);
            //        System.GC.WaitForPendingFinalizers();
            //        CefSharp.CEF.Shutdown();
            //    }
            //    catch { }
            //}
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
            //web_view.CloseDevTools();
            //web_view.Dispose();
            //System.Windows.Forms.Application.Exit();
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.textBox1 = new System.Windows.Forms.TextBox();
            this.lbStatus = new System.Windows.Forms.Label();
            this.SuspendLayout();
            // 
            // textBox1
            // 
            this.textBox1.Location = new System.Drawing.Point(3, 458);
            this.textBox1.Name = "textBox1";
            this.textBox1.Size = new System.Drawing.Size(100, 20);
            this.textBox1.TabIndex = 2;
            this.textBox1.Visible = false;
            // 
            // lbStatus
            // 
            this.lbStatus.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Bottom | System.Windows.Forms.AnchorStyles.Left)));
            this.lbStatus.AutoSize = true;
            this.lbStatus.Location = new System.Drawing.Point(3, 314);
            this.lbStatus.Name = "lbStatus";
            this.lbStatus.Size = new System.Drawing.Size(54, 13);
            this.lbStatus.TabIndex = 0;
            this.lbStatus.Text = "Loading...";
            this.lbStatus.Visible = false;
            // 
            // UCefSharpBrowser
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.Controls.Add(this.lbStatus);
            this.DoubleBuffered = true;
            this.Name = "UCefSharpBrowser";
            this.Size = new System.Drawing.Size(529, 327);
            this.Load += new System.EventHandler(this.FCefSharpBrowser_Load);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion
        private System.Windows.Forms.TextBox textBox1;
        private System.Windows.Forms.Label lbStatus;
        //private PanelControl panelControl1;
        //private System.Windows.Forms.WebBrowser webBrowser1;
        //private PanelControl panelControl2;
        //private PanelControl panelControl3;
       
    }
}