namespace FWS.TTDKGDTS.ImportTool._Core
{
    partial class UListBoxItemTemplate
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

        #region Component Designer generated code

        /// <summary> 
        /// Required method for Designer support - do not modify 
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.DisplayName = new System.Windows.Forms.Label();
            this.DisplayAddress = new System.Windows.Forms.Label();
            this.SuspendLayout();
            // 
            // DisplayName
            // 
            this.DisplayName.Dock = System.Windows.Forms.DockStyle.Top;
            this.DisplayName.Font = new System.Drawing.Font("Microsoft Sans Serif", 8.25F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.DisplayName.Location = new System.Drawing.Point(0, 0);
            this.DisplayName.Name = "DisplayName";
            this.DisplayName.Size = new System.Drawing.Size(391, 18);
            this.DisplayName.TabIndex = 0;
            this.DisplayName.Text = "Cảng vụ đường thủy nội địa Tp. Hồ Chí Minh- Sở GTVT Tp. HCM";
            // 
            // DisplayAddress
            // 
            this.DisplayAddress.Dock = System.Windows.Forms.DockStyle.Top;
            this.DisplayAddress.Location = new System.Drawing.Point(0, 18);
            this.DisplayAddress.Name = "DisplayAddress";
            this.DisplayAddress.Padding = new System.Windows.Forms.Padding(10, 0, 0, 0);
            this.DisplayAddress.Size = new System.Drawing.Size(391, 19);
            this.DisplayAddress.TabIndex = 1;
            this.DisplayAddress.Text = "Số 108 Tùng Thiện Vương, phường 11, quận 8, TP HCM";
            // 
            // UListBoxItemTemplate
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.Controls.Add(this.DisplayAddress);
            this.Controls.Add(this.DisplayName);
            this.Name = "UListBoxItemTemplate";
            this.Size = new System.Drawing.Size(391, 34);
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.Label DisplayName;
        private System.Windows.Forms.Label DisplayAddress;
    }
}
