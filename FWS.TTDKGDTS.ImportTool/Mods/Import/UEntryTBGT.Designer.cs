using FWS.TTDKGDTS.ImportTool._Core.Grid;
namespace FWS.TTDKGDTS.ImportTool.Mods.Import
{
    partial class UEntryTBGT
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
            this.pnDate = new System.Windows.Forms.Panel();
            this.txtYear = new System.Windows.Forms.TextBox();
            this.txtMonth = new System.Windows.Forms.TextBox();
            this.txtDay = new System.Windows.Forms.TextBox();
            this.txtMin = new System.Windows.Forms.TextBox();
            this.txtHour = new System.Windows.Forms.TextBox();
            this.label12 = new System.Windows.Forms.Label();
            this.label10 = new System.Windows.Forms.Label();
            this.label8 = new System.Windows.Forms.Label();
            this.chkSendEmailKH = new System.Windows.Forms.CheckBox();
            this.chkSendMail = new System.Windows.Forms.CheckBox();
            this.txtCQCN = new FWS.TTDKGDTS.ImportTool.Core.AutoComplete.UAutoComplete();
            this.txtVoucherActionType = new System.Windows.Forms.ComboBox();
            this.txtAssetType = new System.Windows.Forms.ComboBox();
            this.label6 = new System.Windows.Forms.Label();
            this.label16 = new System.Windows.Forms.Label();
            this.label15 = new System.Windows.Forms.Label();
            this.label13 = new System.Windows.Forms.Label();
            this.label11 = new System.Windows.Forms.Label();
            this.label7 = new System.Windows.Forms.Label();
            this.label9 = new System.Windows.Forms.Label();
            this.label4 = new System.Windows.Forms.Label();
            this.label5 = new System.Windows.Forms.Label();
            this.label3 = new System.Windows.Forms.Label();
            this.txtOldRefNo = new System.Windows.Forms.TextBox();
            this.txtWarranterEmail = new System.Windows.Forms.TextBox();
            this.txtObjectEmail = new System.Windows.Forms.TextBox();
            this.txtAddress = new System.Windows.Forms.TextBox();
            this.txtRegisTransRefNo = new System.Windows.Forms.TextBox();
            this.label2 = new System.Windows.Forms.Label();
            this.label1 = new System.Windows.Forms.Label();
            this.txtRefNo = new System.Windows.Forms.TextBox();
            this.groupBox1 = new System.Windows.Forms.GroupBox();
            this.label14 = new System.Windows.Forms.Label();
            this.tabControl1.SuspendLayout();
            this.tbXe.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.grAsset)).BeginInit();
            this.tbTau.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.grAssetOther)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.grWarranter)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.grAssetOwner)).BeginInit();
            this.pnDate.SuspendLayout();
            this.groupBox1.SuspendLayout();
            this.SuspendLayout();
            // 
            // tabControl1
            // 
            this.tabControl1.Controls.Add(this.tbXe);
            this.tabControl1.Controls.Add(this.tbTau);
            this.tabControl1.Location = new System.Drawing.Point(10, 194);
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
            this.grWarranter.Location = new System.Drawing.Point(10, 441);
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
            this.grAssetOwner.Location = new System.Drawing.Point(10, 341);
            this.grAssetOwner.Name = "grAssetOwner";
            this.grAssetOwner.RowHeadersVisible = false;
            this.grAssetOwner.RowHeadersWidth = 10;
            this.grAssetOwner.RowHeadersWidthSizeMode = System.Windows.Forms.DataGridViewRowHeadersWidthSizeMode.DisableResizing;
            this.grAssetOwner.Size = new System.Drawing.Size(796, 81);
            this.grAssetOwner.TabIndex = 18;
            this.grAssetOwner.TabStop = false;
            // 
            // pnDate
            // 
            this.pnDate.Controls.Add(this.txtYear);
            this.pnDate.Controls.Add(this.txtMonth);
            this.pnDate.Controls.Add(this.txtDay);
            this.pnDate.Controls.Add(this.txtMin);
            this.pnDate.Controls.Add(this.txtHour);
            this.pnDate.Controls.Add(this.label12);
            this.pnDate.Controls.Add(this.label10);
            this.pnDate.Controls.Add(this.label8);
            this.pnDate.Enabled = false;
            this.pnDate.Location = new System.Drawing.Point(335, 0);
            this.pnDate.Name = "pnDate";
            this.pnDate.Size = new System.Drawing.Size(165, 35);
            this.pnDate.TabIndex = 1;
            // 
            // txtYear
            // 
            this.txtYear.Location = new System.Drawing.Point(123, 12);
            this.txtYear.Name = "txtYear";
            this.txtYear.Size = new System.Drawing.Size(34, 20);
            this.txtYear.TabIndex = 5;
            this.txtYear.TabStop = false;
            this.txtYear.Text = "2013";
            this.txtYear.Enter += new System.EventHandler(this.TextBox_Enter);
            // 
            // txtMonth
            // 
            this.txtMonth.Location = new System.Drawing.Point(91, 12);
            this.txtMonth.Name = "txtMonth";
            this.txtMonth.Size = new System.Drawing.Size(25, 20);
            this.txtMonth.TabIndex = 4;
            this.txtMonth.TabStop = false;
            this.txtMonth.Text = "12";
            this.txtMonth.Enter += new System.EventHandler(this.TextBox_Enter);
            // 
            // txtDay
            // 
            this.txtDay.Location = new System.Drawing.Point(60, 12);
            this.txtDay.Name = "txtDay";
            this.txtDay.Size = new System.Drawing.Size(24, 20);
            this.txtDay.TabIndex = 3;
            this.txtDay.TabStop = false;
            this.txtDay.Text = "31";
            this.txtDay.Enter += new System.EventHandler(this.TextBox_Enter);
            // 
            // txtMin
            // 
            this.txtMin.Location = new System.Drawing.Point(30, 12);
            this.txtMin.Name = "txtMin";
            this.txtMin.Size = new System.Drawing.Size(21, 20);
            this.txtMin.TabIndex = 2;
            this.txtMin.Text = "29";
            this.txtMin.Enter += new System.EventHandler(this.TextBox_Enter);
            // 
            // txtHour
            // 
            this.txtHour.Location = new System.Drawing.Point(0, 12);
            this.txtHour.Name = "txtHour";
            this.txtHour.Size = new System.Drawing.Size(21, 20);
            this.txtHour.TabIndex = 1;
            this.txtHour.Text = "10";
            this.txtHour.Enter += new System.EventHandler(this.TextBox_Enter);
            // 
            // label12
            // 
            this.label12.AutoSize = true;
            this.label12.Location = new System.Drawing.Point(82, 15);
            this.label12.Name = "label12";
            this.label12.Size = new System.Drawing.Size(12, 13);
            this.label12.TabIndex = 1;
            this.label12.Text = "/";
            // 
            // label10
            // 
            this.label10.AutoSize = true;
            this.label10.Location = new System.Drawing.Point(114, 15);
            this.label10.Name = "label10";
            this.label10.Size = new System.Drawing.Size(12, 13);
            this.label10.TabIndex = 1;
            this.label10.Text = "/";
            // 
            // label8
            // 
            this.label8.AutoSize = true;
            this.label8.Location = new System.Drawing.Point(21, 14);
            this.label8.Name = "label8";
            this.label8.Size = new System.Drawing.Size(10, 13);
            this.label8.TabIndex = 1;
            this.label8.Text = ":";
            // 
            // chkSendEmailKH
            // 
            this.chkSendEmailKH.AutoSize = true;
            this.chkSendEmailKH.Location = new System.Drawing.Point(353, 171);
            this.chkSendEmailKH.Name = "chkSendEmailKH";
            this.chkSendEmailKH.Size = new System.Drawing.Size(69, 17);
            this.chkSendEmailKH.TabIndex = 16;
            this.chkSendEmailKH.TabStop = false;
            this.chkSendEmailKH.Text = "Gửi email";
            this.chkSendEmailKH.UseVisualStyleBackColor = true;
            // 
            // chkSendMail
            // 
            this.chkSendMail.AutoSize = true;
            this.chkSendMail.Location = new System.Drawing.Point(353, 146);
            this.chkSendMail.Name = "chkSendMail";
            this.chkSendMail.Size = new System.Drawing.Size(69, 17);
            this.chkSendMail.TabIndex = 13;
            this.chkSendMail.TabStop = false;
            this.chkSendMail.Text = "Gửi email";
            this.chkSendMail.UseVisualStyleBackColor = true;
            // 
            // txtCQCN
            // 
            this.txtCQCN.BackColor = System.Drawing.SystemColors.HighlightText;
            this.txtCQCN.BorderColor = System.Drawing.Color.LightSteelBlue;
            this.txtCQCN.Location = new System.Drawing.Point(74, 91);
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
            this.txtVoucherActionType.Location = new System.Drawing.Point(74, 64);
            this.txtVoucherActionType.Name = "txtVoucherActionType";
            this.txtVoucherActionType.Size = new System.Drawing.Size(144, 21);
            this.txtVoucherActionType.TabIndex = 8;
            this.txtVoucherActionType.SelectedIndexChanged += new System.EventHandler(this.txtVoucherActionType_SelectedIndexChanged);
            // 
            // txtAssetType
            // 
            this.txtAssetType.FormattingEnabled = true;
            this.txtAssetType.Location = new System.Drawing.Point(335, 64);
            this.txtAssetType.Name = "txtAssetType";
            this.txtAssetType.Size = new System.Drawing.Size(159, 21);
            this.txtAssetType.TabIndex = 9;
            this.txtAssetType.Visible = false;
            this.txtAssetType.SelectedIndexChanged += new System.EventHandler(this.txtAssetType_SelectedIndexChanged);
            // 
            // label6
            // 
            this.label6.AutoSize = true;
            this.label6.Location = new System.Drawing.Point(2, 67);
            this.label6.Name = "label6";
            this.label6.Size = new System.Drawing.Size(69, 13);
            this.label6.TabIndex = 4;
            this.label6.Text = "Loại đăng ký";
            // 
            // label16
            // 
            this.label16.AutoSize = true;
            this.label16.Location = new System.Drawing.Point(7, 425);
            this.label16.Name = "label16";
            this.label16.Size = new System.Drawing.Size(145, 13);
            this.label16.TabIndex = 4;
            this.label16.Text = "Thông tin bên nhận bảo đảm";
            // 
            // label15
            // 
            this.label15.AutoSize = true;
            this.label15.Location = new System.Drawing.Point(7, 325);
            this.label15.Name = "label15";
            this.label15.Size = new System.Drawing.Size(118, 13);
            this.label15.TabIndex = 4;
            this.label15.Text = "Thông tin bên bảo đảm";
            // 
            // label13
            // 
            this.label13.AutoSize = true;
            this.label13.Location = new System.Drawing.Point(18, 173);
            this.label13.Name = "label13";
            this.label13.Size = new System.Drawing.Size(50, 13);
            this.label13.TabIndex = 4;
            this.label13.Text = "Email KH";
            // 
            // label11
            // 
            this.label11.AutoSize = true;
            this.label11.Location = new System.Drawing.Point(7, 146);
            this.label11.Name = "label11";
            this.label11.Size = new System.Drawing.Size(64, 13);
            this.label11.TabIndex = 4;
            this.label11.Text = "Email CSGT";
            // 
            // label7
            // 
            this.label7.AutoSize = true;
            this.label7.Location = new System.Drawing.Point(30, 120);
            this.label7.Name = "label7";
            this.label7.Size = new System.Drawing.Size(40, 13);
            this.label7.TabIndex = 4;
            this.label7.Text = "Địa chỉ";
            // 
            // label9
            // 
            this.label9.AutoSize = true;
            this.label9.Location = new System.Drawing.Point(23, 91);
            this.label9.Name = "label9";
            this.label9.Size = new System.Drawing.Size(47, 13);
            this.label9.TabIndex = 4;
            this.label9.Text = "Công an";
            // 
            // label4
            // 
            this.label4.AutoSize = true;
            this.label4.Location = new System.Drawing.Point(250, 41);
            this.label4.Name = "label4";
            this.label4.Size = new System.Drawing.Size(82, 13);
            this.label4.TabIndex = 4;
            this.label4.Text = "Số ĐK Ban đầu";
            // 
            // label5
            // 
            this.label5.AutoSize = true;
            this.label5.Location = new System.Drawing.Point(262, 67);
            this.label5.Name = "label5";
            this.label5.Size = new System.Drawing.Size(67, 13);
            this.label5.TabIndex = 4;
            this.label5.Text = "Loại Tài Sản";
            this.label5.Visible = false;
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Location = new System.Drawing.Point(7, 41);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(61, 13);
            this.label3.TabIndex = 4;
            this.label3.Text = "Số Đơn DK";
            // 
            // txtOldRefNo
            // 
            this.txtOldRefNo.Location = new System.Drawing.Point(335, 38);
            this.txtOldRefNo.Name = "txtOldRefNo";
            this.txtOldRefNo.Size = new System.Drawing.Size(159, 20);
            this.txtOldRefNo.TabIndex = 7;
            this.txtOldRefNo.KeyUp += new System.Windows.Forms.KeyEventHandler(this.txtOldRefNo_KeyUp);
            this.txtOldRefNo.Leave += new System.EventHandler(this.txtOldRefNo_Leave);
            // 
            // txtWarranterEmail
            // 
            this.txtWarranterEmail.Location = new System.Drawing.Point(74, 169);
            this.txtWarranterEmail.Name = "txtWarranterEmail";
            this.txtWarranterEmail.Size = new System.Drawing.Size(273, 20);
            this.txtWarranterEmail.TabIndex = 15;
            // 
            // txtObjectEmail
            // 
            this.txtObjectEmail.Location = new System.Drawing.Point(74, 143);
            this.txtObjectEmail.Name = "txtObjectEmail";
            this.txtObjectEmail.Size = new System.Drawing.Size(273, 20);
            this.txtObjectEmail.TabIndex = 12;
            // 
            // txtAddress
            // 
            this.txtAddress.Location = new System.Drawing.Point(74, 117);
            this.txtAddress.Name = "txtAddress";
            this.txtAddress.Size = new System.Drawing.Size(420, 20);
            this.txtAddress.TabIndex = 11;
            this.txtAddress.TabStop = false;
            // 
            // txtRegisTransRefNo
            // 
            this.txtRegisTransRefNo.Enabled = false;
            this.txtRegisTransRefNo.Location = new System.Drawing.Point(74, 38);
            this.txtRegisTransRefNo.Name = "txtRegisTransRefNo";
            this.txtRegisTransRefNo.Size = new System.Drawing.Size(144, 20);
            this.txtRegisTransRefNo.TabIndex = 6;
            this.txtRegisTransRefNo.TabStop = false;
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Location = new System.Drawing.Point(280, 15);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(49, 13);
            this.label2.TabIndex = 1;
            this.label2.Text = "Ngày giờ";
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(16, 14);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(52, 13);
            this.label1.TabIndex = 1;
            this.label1.Text = "Số TBGT";
            // 
            // txtRefNo
            // 
            this.txtRefNo.Location = new System.Drawing.Point(74, 11);
            this.txtRefNo.Name = "txtRefNo";
            this.txtRefNo.Size = new System.Drawing.Size(144, 20);
            this.txtRefNo.TabIndex = 0;
            this.txtRefNo.TabStop = false;
            // 
            // groupBox1
            // 
            this.groupBox1.Controls.Add(this.label14);
            this.groupBox1.Location = new System.Drawing.Point(506, 8);
            this.groupBox1.Name = "groupBox1";
            this.groupBox1.Size = new System.Drawing.Size(295, 178);
            this.groupBox1.TabIndex = 21;
            this.groupBox1.TabStop = false;
            this.groupBox1.Text = "Diễn giải";
            // 
            // label14
            // 
            this.label14.AutoSize = true;
            this.label14.Location = new System.Drawing.Point(6, 30);
            this.label14.Name = "label14";
            this.label14.Size = new System.Drawing.Size(209, 13);
            this.label14.TabIndex = 2;
            this.label14.Text = "Cột C.T: Cải tạo, check vào nếu xe cải tạo";
            // 
            // UEntryTBGT
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.Controls.Add(this.groupBox1);
            this.Controls.Add(this.tabControl1);
            this.Controls.Add(this.grWarranter);
            this.Controls.Add(this.grAssetOwner);
            this.Controls.Add(this.pnDate);
            this.Controls.Add(this.chkSendEmailKH);
            this.Controls.Add(this.chkSendMail);
            this.Controls.Add(this.txtCQCN);
            this.Controls.Add(this.txtVoucherActionType);
            this.Controls.Add(this.txtAssetType);
            this.Controls.Add(this.label6);
            this.Controls.Add(this.label16);
            this.Controls.Add(this.label15);
            this.Controls.Add(this.label13);
            this.Controls.Add(this.label11);
            this.Controls.Add(this.label7);
            this.Controls.Add(this.label9);
            this.Controls.Add(this.label4);
            this.Controls.Add(this.label5);
            this.Controls.Add(this.label3);
            this.Controls.Add(this.txtOldRefNo);
            this.Controls.Add(this.txtWarranterEmail);
            this.Controls.Add(this.txtObjectEmail);
            this.Controls.Add(this.txtAddress);
            this.Controls.Add(this.txtRegisTransRefNo);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.txtRefNo);
            this.Name = "UEntryTBGT";
            this.Size = new System.Drawing.Size(809, 523);
            this.tabControl1.ResumeLayout(false);
            this.tbXe.ResumeLayout(false);
            ((System.ComponentModel.ISupportInitialize)(this.grAsset)).EndInit();
            this.tbTau.ResumeLayout(false);
            ((System.ComponentModel.ISupportInitialize)(this.grAssetOther)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.grWarranter)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.grAssetOwner)).EndInit();
            this.pnDate.ResumeLayout(false);
            this.pnDate.PerformLayout();
            this.groupBox1.ResumeLayout(false);
            this.groupBox1.PerformLayout();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.TextBox txtRefNo;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Label label2;
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
        private System.Windows.Forms.TextBox txtHour;
        private System.Windows.Forms.TextBox txtMin;
        private System.Windows.Forms.TextBox txtDay;
        private System.Windows.Forms.TextBox txtMonth;
        private System.Windows.Forms.TextBox txtYear;
        private System.Windows.Forms.Label label8;
        private System.Windows.Forms.Label label10;
        private System.Windows.Forms.Label label12;
        private System.Windows.Forms.TextBox txtObjectEmail;
        private System.Windows.Forms.Label label11;
        private System.Windows.Forms.CheckBox chkSendMail;
        private System.Windows.Forms.TextBox txtWarranterEmail;
        private System.Windows.Forms.Label label13;
        private System.Windows.Forms.Panel pnDate;
        private CDataGridView grAssetOwner;
        private CDataGridView grWarranter;
        private System.Windows.Forms.Label label15;
        private System.Windows.Forms.Label label16;
        private System.Windows.Forms.CheckBox chkSendEmailKH;
        private System.Windows.Forms.TabControl tabControl1;
        private System.Windows.Forms.TabPage tbXe;
        private System.Windows.Forms.TabPage tbTau;
        private CDataGridView grAssetOther;
        private System.Windows.Forms.GroupBox groupBox1;
        private System.Windows.Forms.Label label14;
    }
}
