using FWS.TTDKGDTS.ImportTool._Core.Grid;
namespace FWS.TTDKGDTS.ImportTool.Mods.Import
{
    partial class UEntryPL04
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
            this.tabControl1 = new System.Windows.Forms.TabControl();
            this.tbXe = new System.Windows.Forms.TabPage();
            this.grAsset = new FWS.TTDKGDTS.ImportTool._Core.Grid.CDataGridView();
            this.tbTau = new System.Windows.Forms.TabPage();
            this.grAssetOther = new FWS.TTDKGDTS.ImportTool._Core.Grid.CDataGridView();
            this.grWarranter = new FWS.TTDKGDTS.ImportTool._Core.Grid.CDataGridView();
            this.grAssetOwner = new FWS.TTDKGDTS.ImportTool._Core.Grid.CDataGridView();
            this.txtCQCN = new FWS.TTDKGDTS.ImportTool.Core.AutoComplete.UAutoComplete();
            this.txtVoucherActionType = new System.Windows.Forms.ComboBox();
            this.txtAssetType = new System.Windows.Forms.ComboBox();
            this.label6 = new System.Windows.Forms.Label();
            this.label16 = new System.Windows.Forms.Label();
            this.label15 = new System.Windows.Forms.Label();
            this.label7 = new System.Windows.Forms.Label();
            this.label9 = new System.Windows.Forms.Label();
            this.label4 = new System.Windows.Forms.Label();
            this.label5 = new System.Windows.Forms.Label();
            this.label3 = new System.Windows.Forms.Label();
            this.txtOldRefNo = new System.Windows.Forms.TextBox();
            this.txtAddress = new System.Windows.Forms.TextBox();
            this.txtRegisTransRefNo = new System.Windows.Forms.TextBox();
            this.tabControl1.SuspendLayout();
            this.tbXe.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.grAsset)).BeginInit();
            this.tbTau.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.grAssetOther)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.grWarranter)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.grAssetOwner)).BeginInit();
            this.SuspendLayout();
            // 
            // tabControl1
            // 
            this.tabControl1.Controls.Add(this.tbXe);
            this.tabControl1.Controls.Add(this.tbTau);
            this.tabControl1.Location = new System.Drawing.Point(10, 119);
            this.tabControl1.Name = "tabControl1";
            this.tabControl1.SelectedIndex = 0;
            this.tabControl1.Size = new System.Drawing.Size(796, 128);
            this.tabControl1.TabIndex = 20;
            // 
            // tbXe
            // 
            this.tbXe.Controls.Add(this.grAsset);
            this.tbXe.Location = new System.Drawing.Point(4, 22);
            this.tbXe.Name = "tbXe";
            this.tbXe.Size = new System.Drawing.Size(788, 102);
            this.tbXe.TabIndex = 0;
            this.tbXe.Text = "Xe";
            this.tbXe.UseVisualStyleBackColor = true;
            // 
            // grAsset
            // 
            this.grAsset.AllowUserToResizeRows = false;
            this.grAsset.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.grAsset.Dock = System.Windows.Forms.DockStyle.Fill;
            this.grAsset.Location = new System.Drawing.Point(0, 0);
            this.grAsset.Name = "grAsset";
            this.grAsset.RowHeadersVisible = false;
            this.grAsset.RowHeadersWidth = 10;
            this.grAsset.RowHeadersWidthSizeMode = System.Windows.Forms.DataGridViewRowHeadersWidthSizeMode.DisableResizing;
            this.grAsset.Size = new System.Drawing.Size(788, 102);
            this.grAsset.TabIndex = 17;
            this.grAsset.TabStop = false;
            this.grAsset.UserAddedRow += new System.Windows.Forms.DataGridViewRowEventHandler(this.grAsset_UserAddedRow);
            // 
            // tbTau
            // 
            this.tbTau.Controls.Add(this.grAssetOther);
            this.tbTau.Location = new System.Drawing.Point(4, 22);
            this.tbTau.Name = "tbTau";
            this.tbTau.Size = new System.Drawing.Size(788, 102);
            this.tbTau.TabIndex = 1;
            this.tbTau.Text = "Tàu";
            this.tbTau.UseVisualStyleBackColor = true;
            // 
            // grAssetOther
            // 
            this.grAssetOther.AllowUserToResizeRows = false;
            this.grAssetOther.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.grAssetOther.Dock = System.Windows.Forms.DockStyle.Fill;
            this.grAssetOther.Location = new System.Drawing.Point(0, 0);
            this.grAssetOther.Name = "grAssetOther";
            this.grAssetOther.RowHeadersVisible = false;
            this.grAssetOther.RowHeadersWidth = 10;
            this.grAssetOther.RowHeadersWidthSizeMode = System.Windows.Forms.DataGridViewRowHeadersWidthSizeMode.DisableResizing;
            this.grAssetOther.Size = new System.Drawing.Size(788, 102);
            this.grAssetOther.TabIndex = 18;
            this.grAssetOther.TabStop = false;
            this.grAssetOther.UserAddedRow += new System.Windows.Forms.DataGridViewRowEventHandler(this.grAssetOther_UserAddedRow);
            // 
            // grWarranter
            // 
            this.grWarranter.AllowUserToResizeRows = false;
            this.grWarranter.Anchor = ((System.Windows.Forms.AnchorStyles)(((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Left) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.grWarranter.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.grWarranter.Location = new System.Drawing.Point(10, 366);
            this.grWarranter.Name = "grWarranter";
            this.grWarranter.RowHeadersVisible = false;
            this.grWarranter.RowHeadersWidth = 10;
            this.grWarranter.RowHeadersWidthSizeMode = System.Windows.Forms.DataGridViewRowHeadersWidthSizeMode.DisableResizing;
            this.grWarranter.Size = new System.Drawing.Size(796, 74);
            this.grWarranter.TabIndex = 19;
            this.grWarranter.TabStop = false;
            // 
            // grAssetOwner
            // 
            this.grAssetOwner.AllowUserToResizeRows = false;
            this.grAssetOwner.Anchor = ((System.Windows.Forms.AnchorStyles)(((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Left) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.grAssetOwner.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.grAssetOwner.Location = new System.Drawing.Point(10, 266);
            this.grAssetOwner.Name = "grAssetOwner";
            this.grAssetOwner.RowHeadersVisible = false;
            this.grAssetOwner.RowHeadersWidth = 10;
            this.grAssetOwner.RowHeadersWidthSizeMode = System.Windows.Forms.DataGridViewRowHeadersWidthSizeMode.DisableResizing;
            this.grAssetOwner.Size = new System.Drawing.Size(796, 81);
            this.grAssetOwner.TabIndex = 18;
            this.grAssetOwner.TabStop = false;
            // 
            // txtCQCN
            // 
            this.txtCQCN.BackColor = System.Drawing.SystemColors.HighlightText;
            this.txtCQCN.BorderColor = System.Drawing.Color.LightSteelBlue;
            this.txtCQCN.Location = new System.Drawing.Point(74, 56);
            this.txtCQCN.Margin = new System.Windows.Forms.Padding(0);
            this.txtCQCN.Name = "txtCQCN";
            this.txtCQCN.PopupWidth = -1;
            this.txtCQCN.SelectedItem = null;
            this.txtCQCN.SelectedItemBackColor = System.Drawing.SystemColors.Highlight;
            this.txtCQCN.SelectedItemForeColor = System.Drawing.SystemColors.HighlightText;
            this.txtCQCN.SelectedValue = null;
            this.txtCQCN.Size = new System.Drawing.Size(420, 20);
            this.txtCQCN.TabIndex = 10;
            // 
            // txtVoucherActionType
            // 
            this.txtVoucherActionType.DropDownStyle = System.Windows.Forms.ComboBoxStyle.DropDownList;
            this.txtVoucherActionType.FormattingEnabled = true;
            this.txtVoucherActionType.Location = new System.Drawing.Point(74, 29);
            this.txtVoucherActionType.Name = "txtVoucherActionType";
            this.txtVoucherActionType.Size = new System.Drawing.Size(144, 21);
            this.txtVoucherActionType.TabIndex = 8;
            this.txtVoucherActionType.SelectedIndexChanged += new System.EventHandler(this.txtVoucherActionType_SelectedIndexChanged);
            // 
            // txtAssetType
            // 
            this.txtAssetType.FormattingEnabled = true;
            this.txtAssetType.Location = new System.Drawing.Point(335, 29);
            this.txtAssetType.Name = "txtAssetType";
            this.txtAssetType.Size = new System.Drawing.Size(159, 21);
            this.txtAssetType.TabIndex = 9;
            this.txtAssetType.Visible = false;
            this.txtAssetType.SelectedIndexChanged += new System.EventHandler(this.txtAssetType_SelectedIndexChanged);
            // 
            // label6
            // 
            this.label6.AutoSize = true;
            this.label6.Location = new System.Drawing.Point(2, 32);
            this.label6.Name = "label6";
            this.label6.Size = new System.Drawing.Size(69, 13);
            this.label6.TabIndex = 4;
            this.label6.Text = "Loại đăng ký";
            // 
            // label16
            // 
            this.label16.AutoSize = true;
            this.label16.Location = new System.Drawing.Point(7, 350);
            this.label16.Name = "label16";
            this.label16.Size = new System.Drawing.Size(145, 13);
            this.label16.TabIndex = 4;
            this.label16.Text = "Thông tin bên nhận bảo đảm";
            // 
            // label15
            // 
            this.label15.AutoSize = true;
            this.label15.Location = new System.Drawing.Point(7, 250);
            this.label15.Name = "label15";
            this.label15.Size = new System.Drawing.Size(118, 13);
            this.label15.TabIndex = 4;
            this.label15.Text = "Thông tin bên bảo đảm";
            // 
            // label7
            // 
            this.label7.AutoSize = true;
            this.label7.Location = new System.Drawing.Point(30, 85);
            this.label7.Name = "label7";
            this.label7.Size = new System.Drawing.Size(40, 13);
            this.label7.TabIndex = 4;
            this.label7.Text = "Địa chỉ";
            // 
            // label9
            // 
            this.label9.AutoSize = true;
            this.label9.Location = new System.Drawing.Point(23, 56);
            this.label9.Name = "label9";
            this.label9.Size = new System.Drawing.Size(47, 13);
            this.label9.TabIndex = 4;
            this.label9.Text = "Công an";
            // 
            // label4
            // 
            this.label4.AutoSize = true;
            this.label4.Location = new System.Drawing.Point(250, 6);
            this.label4.Name = "label4";
            this.label4.Size = new System.Drawing.Size(82, 13);
            this.label4.TabIndex = 4;
            this.label4.Text = "Số ĐK Ban đầu";
            // 
            // label5
            // 
            this.label5.AutoSize = true;
            this.label5.Location = new System.Drawing.Point(262, 32);
            this.label5.Name = "label5";
            this.label5.Size = new System.Drawing.Size(67, 13);
            this.label5.TabIndex = 4;
            this.label5.Text = "Loại Tài Sản";
            this.label5.Visible = false;
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Location = new System.Drawing.Point(7, 6);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(61, 13);
            this.label3.TabIndex = 4;
            this.label3.Text = "Số Đơn DK";
            // 
            // txtOldRefNo
            // 
            this.txtOldRefNo.Location = new System.Drawing.Point(335, 3);
            this.txtOldRefNo.Name = "txtOldRefNo";
            this.txtOldRefNo.Size = new System.Drawing.Size(159, 20);
            this.txtOldRefNo.TabIndex = 7;
            this.txtOldRefNo.KeyUp += new System.Windows.Forms.KeyEventHandler(this.txtOldRefNo_KeyUp);
            this.txtOldRefNo.Leave += new System.EventHandler(this.txtOldRefNo_Leave);
            // 
            // txtAddress
            // 
            this.txtAddress.Location = new System.Drawing.Point(74, 82);
            this.txtAddress.Name = "txtAddress";
            this.txtAddress.Size = new System.Drawing.Size(420, 20);
            this.txtAddress.TabIndex = 11;
            this.txtAddress.TabStop = false;
            // 
            // txtRegisTransRefNo
            // 
            this.txtRegisTransRefNo.Enabled = false;
            this.txtRegisTransRefNo.Location = new System.Drawing.Point(74, 3);
            this.txtRegisTransRefNo.Name = "txtRegisTransRefNo";
            this.txtRegisTransRefNo.Size = new System.Drawing.Size(144, 20);
            this.txtRegisTransRefNo.TabIndex = 6;
            this.txtRegisTransRefNo.TabStop = false;
            // 
            // UEntryPL04
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.Controls.Add(this.tabControl1);
            this.Controls.Add(this.grWarranter);
            this.Controls.Add(this.grAssetOwner);
            this.Controls.Add(this.txtCQCN);
            this.Controls.Add(this.txtVoucherActionType);
            this.Controls.Add(this.txtAssetType);
            this.Controls.Add(this.label6);
            this.Controls.Add(this.label16);
            this.Controls.Add(this.label15);
            this.Controls.Add(this.label7);
            this.Controls.Add(this.label9);
            this.Controls.Add(this.label4);
            this.Controls.Add(this.label5);
            this.Controls.Add(this.label3);
            this.Controls.Add(this.txtOldRefNo);
            this.Controls.Add(this.txtAddress);
            this.Controls.Add(this.txtRegisTransRefNo);
            this.Name = "UEntryPL04";
            this.Size = new System.Drawing.Size(809, 448);
            this.tabControl1.ResumeLayout(false);
            this.tbXe.ResumeLayout(false);
            ((System.ComponentModel.ISupportInitialize)(this.grAsset)).EndInit();
            this.tbTau.ResumeLayout(false);
            ((System.ComponentModel.ISupportInitialize)(this.grAssetOther)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.grWarranter)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.grAssetOwner)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.TextBox txtRegisTransRefNo;
        private System.Windows.Forms.TextBox txtOldRefNo;
        private System.Windows.Forms.Label label4;
        private System.Windows.Forms.Label label5;
        private System.Windows.Forms.ComboBox txtAssetType;
        private System.Windows.Forms.Label label6;
        private System.Windows.Forms.ComboBox txtVoucherActionType;
        //private System.Windows.Forms.DataGridView grAsset;
        private CDataGridView grAsset;
        private Core.AutoComplete.UAutoComplete txtCQCN;
        private System.Windows.Forms.Label label9;
        private System.Windows.Forms.TextBox txtAddress;
        private System.Windows.Forms.Label label7;
        private CDataGridView grAssetOwner;
        private CDataGridView grWarranter;
        private System.Windows.Forms.Label label15;
        private System.Windows.Forms.Label label16;
        private System.Windows.Forms.TabControl tabControl1;
        private System.Windows.Forms.TabPage tbXe;
        private System.Windows.Forms.TabPage tbTau;
        private CDataGridView grAssetOther;
    }
}
