using FWS.TTDKGDTS.ImportTool._Core.Grid;
namespace FWS.TTDKGDTS.ImportTool.Mods.Import
{
    partial class UEntryPL03
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
            this.pnDate = new System.Windows.Forms.Panel();
            this.txtYear = new System.Windows.Forms.TextBox();
            this.txtMonth = new System.Windows.Forms.TextBox();
            this.txtDay = new System.Windows.Forms.TextBox();
            this.txtMin = new System.Windows.Forms.TextBox();
            this.txtHour = new System.Windows.Forms.TextBox();
            this.label12 = new System.Windows.Forms.Label();
            this.label10 = new System.Windows.Forms.Label();
            this.label8 = new System.Windows.Forms.Label();
            this.txtKHTX = new FWS.TTDKGDTS.ImportTool.Core.AutoComplete.UAutoComplete();
            this.label7 = new System.Windows.Forms.Label();
            this.label9 = new System.Windows.Forms.Label();
            this.label3 = new System.Windows.Forms.Label();
            this.txtAddress = new System.Windows.Forms.TextBox();
            this.txtRegisTransRefNo = new System.Windows.Forms.TextBox();
            this.label2 = new System.Windows.Forms.Label();
            this.label1 = new System.Windows.Forms.Label();
            this.txtRefNo = new System.Windows.Forms.TextBox();
            this.txtReason = new System.Windows.Forms.TextBox();
            this.label11 = new System.Windows.Forms.Label();
            this.txtEmail = new System.Windows.Forms.TextBox();
            this.label4 = new System.Windows.Forms.Label();
            this.btnSendEmail = new System.Windows.Forms.Button();
            this.pnDate.SuspendLayout();
            this.SuspendLayout();
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
            // txtKHTX
            // 
            this.txtKHTX.BackColor = System.Drawing.SystemColors.HighlightText;
            this.txtKHTX.BorderColor = System.Drawing.Color.LightSteelBlue;
            this.txtKHTX.Location = new System.Drawing.Point(85, 70);
            this.txtKHTX.Margin = new System.Windows.Forms.Padding(0);
            this.txtKHTX.Name = "txtKHTX";
            this.txtKHTX.PopupWidth = -1;
            this.txtKHTX.SelectedItem = null;
            this.txtKHTX.SelectedItemBackColor = System.Drawing.SystemColors.Highlight;
            this.txtKHTX.SelectedItemForeColor = System.Drawing.SystemColors.HighlightText;
            this.txtKHTX.SelectedValue = null;
            this.txtKHTX.Size = new System.Drawing.Size(551, 20);
            this.txtKHTX.TabIndex = 10;
            // 
            // label7
            // 
            this.label7.AutoSize = true;
            this.label7.Location = new System.Drawing.Point(30, 99);
            this.label7.Name = "label7";
            this.label7.Size = new System.Drawing.Size(40, 13);
            this.label7.TabIndex = 4;
            this.label7.Text = "Địa chỉ";
            // 
            // label9
            // 
            this.label9.AutoSize = true;
            this.label9.Location = new System.Drawing.Point(6, 77);
            this.label9.Name = "label9";
            this.label9.Size = new System.Drawing.Size(65, 13);
            this.label9.TabIndex = 4;
            this.label9.Text = "Khách hàng";
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Location = new System.Drawing.Point(9, 41);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(61, 13);
            this.label3.TabIndex = 4;
            this.label3.Text = "Số Đơn DK";
            // 
            // txtAddress
            // 
            this.txtAddress.Location = new System.Drawing.Point(85, 96);
            this.txtAddress.Name = "txtAddress";
            this.txtAddress.Size = new System.Drawing.Size(551, 20);
            this.txtAddress.TabIndex = 11;
            this.txtAddress.TabStop = false;
            // 
            // txtRegisTransRefNo
            // 
            this.txtRegisTransRefNo.Enabled = false;
            this.txtRegisTransRefNo.Location = new System.Drawing.Point(85, 38);
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
            this.label1.Location = new System.Drawing.Point(2, 15);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(69, 13);
            this.label1.TabIndex = 1;
            this.label1.Text = "Số Công văn";
            // 
            // txtRefNo
            // 
            this.txtRefNo.Location = new System.Drawing.Point(85, 12);
            this.txtRefNo.Name = "txtRefNo";
            this.txtRefNo.Size = new System.Drawing.Size(144, 20);
            this.txtRefNo.TabIndex = 0;
            this.txtRefNo.TabStop = false;
            // 
            // txtReason
            // 
            this.txtReason.Location = new System.Drawing.Point(3, 164);
            this.txtReason.Multiline = true;
            this.txtReason.Name = "txtReason";
            this.txtReason.Size = new System.Drawing.Size(633, 105);
            this.txtReason.TabIndex = 20;
            this.txtReason.TabStop = false;
            // 
            // label11
            // 
            this.label11.AutoSize = true;
            this.label11.Location = new System.Drawing.Point(0, 148);
            this.label11.Name = "label11";
            this.label11.Size = new System.Drawing.Size(69, 13);
            this.label11.TabIndex = 4;
            this.label11.Text = "Lý do cụ thể:";
            // 
            // txtEmail
            // 
            this.txtEmail.Location = new System.Drawing.Point(85, 122);
            this.txtEmail.Name = "txtEmail";
            this.txtEmail.Size = new System.Drawing.Size(179, 20);
            this.txtEmail.TabIndex = 11;
            this.txtEmail.TabStop = false;
            this.txtEmail.Text = "tt_csdl@moj.gov.vn";
            // 
            // label4
            // 
            this.label4.AutoSize = true;
            this.label4.Location = new System.Drawing.Point(-2, 125);
            this.label4.Name = "label4";
            this.label4.Size = new System.Drawing.Size(74, 13);
            this.label4.TabIndex = 4;
            this.label4.Text = "Email gửi đến:";
            // 
            // btnSendEmail
            // 
            this.btnSendEmail.Location = new System.Drawing.Point(283, 120);
            this.btnSendEmail.Name = "btnSendEmail";
            this.btnSendEmail.Size = new System.Drawing.Size(103, 23);
            this.btnSendEmail.TabIndex = 21;
            this.btnSendEmail.Text = "Gửi";
            this.btnSendEmail.UseVisualStyleBackColor = true;
            this.btnSendEmail.Click += new System.EventHandler(this.btnSendEmail_Click);
            // 
            // UEntryPL03
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.Controls.Add(this.btnSendEmail);
            this.Controls.Add(this.txtReason);
            this.Controls.Add(this.pnDate);
            this.Controls.Add(this.txtKHTX);
            this.Controls.Add(this.label11);
            this.Controls.Add(this.label4);
            this.Controls.Add(this.label7);
            this.Controls.Add(this.label9);
            this.Controls.Add(this.label3);
            this.Controls.Add(this.txtEmail);
            this.Controls.Add(this.txtAddress);
            this.Controls.Add(this.txtRegisTransRefNo);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.txtRefNo);
            this.Name = "UEntryPL03";
            this.Size = new System.Drawing.Size(651, 291);
            this.pnDate.ResumeLayout(false);
            this.pnDate.PerformLayout();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.TextBox txtRefNo;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.TextBox txtRegisTransRefNo;
        private Core.AutoComplete.UAutoComplete txtKHTX;
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
        private System.Windows.Forms.Panel pnDate;
        private System.Windows.Forms.TextBox txtReason;
        private System.Windows.Forms.Label label11;
        private System.Windows.Forms.TextBox txtEmail;
        private System.Windows.Forms.Label label4;
        private System.Windows.Forms.Button btnSendEmail;
    }
}
