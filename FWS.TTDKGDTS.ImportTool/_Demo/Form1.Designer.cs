namespace FWS.TTDKGDTS.ImportTool._Demo
{
    partial class Form1
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
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.cListBox1 = new FWS.TTDKGDTS.ImportTool._Core.CListBox();
            this.SuspendLayout();
            // 
            // cListBox1
            // 
            this.cListBox1.DrawMode = System.Windows.Forms.DrawMode.OwnerDrawFixed;
            this.cListBox1.FormattingEnabled = true;
            this.cListBox1.ItemHeight = 37;
            this.cListBox1.Location = new System.Drawing.Point(35, 12);
            this.cListBox1.Name = "cListBox1";
            this.cListBox1.Size = new System.Drawing.Size(333, 300);
            this.cListBox1.TabIndex = 0;
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(563, 326);
            this.Controls.Add(this.cListBox1);
            this.Name = "Form1";
            this.Text = "Form1";
            this.ResumeLayout(false);

        }

        #endregion

        private _Core.CListBox cListBox1;
    }
}