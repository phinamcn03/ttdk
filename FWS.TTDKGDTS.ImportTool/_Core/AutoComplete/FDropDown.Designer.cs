namespace FWS.TTDKGDTS.ImportTool._Core.AutoComplete
{
    partial class FDropDown
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
            this.lsItems = new System.Windows.Forms.ListBox();
            this.SuspendLayout();
            // 
            // lsItems
            // 
            this.lsItems.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle;
            this.lsItems.Dock = System.Windows.Forms.DockStyle.Fill;
            this.lsItems.FormattingEnabled = true;
            this.lsItems.Location = new System.Drawing.Point(0, 0);
            this.lsItems.Margin = new System.Windows.Forms.Padding(0);
            this.lsItems.Name = "lsItems";
            this.lsItems.Size = new System.Drawing.Size(333, 103);
            this.lsItems.TabIndex = 0;
            this.lsItems.MouseClick += new System.Windows.Forms.MouseEventHandler(this.lsItems_MouseClick);
            this.lsItems.KeyDown += new System.Windows.Forms.KeyEventHandler(this.lsItems_KeyDown);
            // 
            // FDropDown
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(333, 103);
            this.Controls.Add(this.lsItems);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.None;
            this.Name = "FDropDown";
            this.ShowIcon = false;
            this.ShowInTaskbar = false;
            this.StartPosition = System.Windows.Forms.FormStartPosition.Manual;
            this.Text = "FDropDown";
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.ListBox lsItems;
    }
}