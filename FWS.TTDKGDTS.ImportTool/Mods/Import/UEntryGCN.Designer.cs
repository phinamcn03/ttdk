namespace FWS.TTDKGDTS.ImportTool.Mods.Import
{
    partial class UEntryGCN
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
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(UEntryGCN));
            this.label1 = new System.Windows.Forms.Label();
            this.txtRefNo = new System.Windows.Forms.TextBox();
            this.label2 = new System.Windows.Forms.Label();
            this.label3 = new System.Windows.Forms.Label();
            this.txtNumPagesAttachment = new System.Windows.Forms.NumericUpDown();
            this.label5 = new System.Windows.Forms.Label();
            this.txtPersonalCode = new System.Windows.Forms.TextBox();
            this.txtReceiveHour = new System.Windows.Forms.TextBox();
            this.txtReceiveMin = new System.Windows.Forms.TextBox();
            this.txtReceiveDay = new System.Windows.Forms.TextBox();
            this.txtReceiveMonth = new System.Windows.Forms.TextBox();
            this.txtReceiveYear = new System.Windows.Forms.TextBox();
            this.label6 = new System.Windows.Forms.Label();
            this.label7 = new System.Windows.Forms.Label();
            this.label8 = new System.Windows.Forms.Label();
            this.panel1 = new System.Windows.Forms.Panel();
            this.label4 = new System.Windows.Forms.Label();
            this.label9 = new System.Windows.Forms.Label();
            this.txtOrgRefNo = new System.Windows.Forms.TextBox();
            this.pnPesonalCode = new System.Windows.Forms.Panel();
            this.label10 = new System.Windows.Forms.Label();
            this.label11 = new System.Windows.Forms.Label();
            this.txtNumber = new System.Windows.Forms.TextBox();
            this.label12 = new System.Windows.Forms.Label();
            this.txtEmail = new System.Windows.Forms.TextBox();
            this.grAssetOwnner = new FWS.TTDKGDTS.ImportTool._Core.Grid.CDataGridView();
            this.grWarranter = new FWS.TTDKGDTS.ImportTool._Core.Grid.CDataGridView();
            this.btnSendEmail = new System.Windows.Forms.Button();
            this.pnAttachment = new System.Windows.Forms.Panel();
            this.pictureBox1 = new System.Windows.Forms.PictureBox();
            this.lbAttachName = new System.Windows.Forms.Label();
            ((System.ComponentModel.ISupportInitialize)(this.txtNumPagesAttachment)).BeginInit();
            this.panel1.SuspendLayout();
            this.pnPesonalCode.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.grAssetOwnner)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.grWarranter)).BeginInit();
            this.pnAttachment.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).BeginInit();
            this.SuspendLayout();
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Font = new System.Drawing.Font("Tahoma", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label1.Location = new System.Drawing.Point(89, 12);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(133, 23);
            this.label1.TabIndex = 0;
            this.label1.Text = "Ngày giờ nhận";
            // 
            // txtRefNo
            // 
            this.txtRefNo.Enabled = false;
            this.txtRefNo.Font = new System.Drawing.Font("Tahoma", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.txtRefNo.Location = new System.Drawing.Point(246, 51);
            this.txtRefNo.Name = "txtRefNo";
            this.txtRefNo.Size = new System.Drawing.Size(290, 30);
            this.txtRefNo.TabIndex = 4;
            this.txtRefNo.Enter += new System.EventHandler(this.TextBoxt_Enter);
            this.txtRefNo.Leave += new System.EventHandler(this.txtOrgRefNo_Leave);
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Font = new System.Drawing.Font("Tahoma", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label2.Location = new System.Drawing.Point(118, 54);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(104, 23);
            this.label2.TabIndex = 0;
            this.label2.Text = "Số đăng ký";
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Font = new System.Drawing.Font("Tahoma", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label3.Location = new System.Drawing.Point(56, 135);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(166, 23);
            this.label3.TabIndex = 0;
            this.label3.Text = "Số trang kèm theo";
            // 
            // txtNumPagesAttachment
            // 
            this.txtNumPagesAttachment.Font = new System.Drawing.Font("Tahoma", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.txtNumPagesAttachment.Location = new System.Drawing.Point(246, 132);
            this.txtNumPagesAttachment.Name = "txtNumPagesAttachment";
            this.txtNumPagesAttachment.Size = new System.Drawing.Size(74, 30);
            this.txtNumPagesAttachment.TabIndex = 6;
            this.txtNumPagesAttachment.TextAlign = System.Windows.Forms.HorizontalAlignment.Right;
            this.txtNumPagesAttachment.Value = new decimal(new int[] {
            2,
            0,
            0,
            0});
            this.txtNumPagesAttachment.Enter += new System.EventHandler(this.TextBoxt_Enter);
            // 
            // label5
            // 
            this.label5.AutoSize = true;
            this.label5.Font = new System.Drawing.Font("Tahoma", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label5.Location = new System.Drawing.Point(3, 0);
            this.label5.Name = "label5";
            this.label5.Size = new System.Drawing.Size(109, 23);
            this.label5.TabIndex = 0;
            this.label5.Text = "Mã cá nhân";
            // 
            // txtPersonalCode
            // 
            this.txtPersonalCode.Font = new System.Drawing.Font("Tahoma", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.txtPersonalCode.Location = new System.Drawing.Point(118, 0);
            this.txtPersonalCode.Name = "txtPersonalCode";
            this.txtPersonalCode.Size = new System.Drawing.Size(92, 30);
            this.txtPersonalCode.TabIndex = 8;
            this.txtPersonalCode.TabStop = false;
            this.txtPersonalCode.Enter += new System.EventHandler(this.TextBoxt_Enter);
            // 
            // txtReceiveHour
            // 
            this.txtReceiveHour.Font = new System.Drawing.Font("Tahoma", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.txtReceiveHour.Location = new System.Drawing.Point(246, 9);
            this.txtReceiveHour.MaxLength = 2;
            this.txtReceiveHour.Name = "txtReceiveHour";
            this.txtReceiveHour.Size = new System.Drawing.Size(33, 30);
            this.txtReceiveHour.TabIndex = 0;
            this.txtReceiveHour.Enter += new System.EventHandler(this.TextBoxt_Enter);
            this.txtReceiveHour.KeyDown += new System.Windows.Forms.KeyEventHandler(this.txtReceiveHour_KeyDown);
            // 
            // txtReceiveMin
            // 
            this.txtReceiveMin.Font = new System.Drawing.Font("Tahoma", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.txtReceiveMin.Location = new System.Drawing.Point(287, 9);
            this.txtReceiveMin.Name = "txtReceiveMin";
            this.txtReceiveMin.Size = new System.Drawing.Size(33, 30);
            this.txtReceiveMin.TabIndex = 1;
            this.txtReceiveMin.Enter += new System.EventHandler(this.TextBoxt_Enter);
            // 
            // txtReceiveDay
            // 
            this.txtReceiveDay.Font = new System.Drawing.Font("Tahoma", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.txtReceiveDay.Location = new System.Drawing.Point(333, 9);
            this.txtReceiveDay.Name = "txtReceiveDay";
            this.txtReceiveDay.Size = new System.Drawing.Size(33, 30);
            this.txtReceiveDay.TabIndex = 2;
            this.txtReceiveDay.Enter += new System.EventHandler(this.TextBoxt_Enter);
            // 
            // txtReceiveMonth
            // 
            this.txtReceiveMonth.Font = new System.Drawing.Font("Tahoma", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.txtReceiveMonth.Location = new System.Drawing.Point(19, 10);
            this.txtReceiveMonth.Name = "txtReceiveMonth";
            this.txtReceiveMonth.Size = new System.Drawing.Size(33, 30);
            this.txtReceiveMonth.TabIndex = 3;
            this.txtReceiveMonth.TabStop = false;
            this.txtReceiveMonth.Enter += new System.EventHandler(this.TextBoxt_Enter);
            // 
            // txtReceiveYear
            // 
            this.txtReceiveYear.Font = new System.Drawing.Font("Tahoma", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.txtReceiveYear.Location = new System.Drawing.Point(66, 10);
            this.txtReceiveYear.Name = "txtReceiveYear";
            this.txtReceiveYear.Size = new System.Drawing.Size(62, 30);
            this.txtReceiveYear.TabIndex = 4;
            this.txtReceiveYear.TabStop = false;
            this.txtReceiveYear.Enter += new System.EventHandler(this.TextBoxt_Enter);
            // 
            // label6
            // 
            this.label6.AutoSize = true;
            this.label6.Font = new System.Drawing.Font("Microsoft Sans Serif", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label6.Location = new System.Drawing.Point(276, 12);
            this.label6.Name = "label6";
            this.label6.Size = new System.Drawing.Size(15, 24);
            this.label6.TabIndex = 5;
            this.label6.Text = ":";
            // 
            // label7
            // 
            this.label7.AutoSize = true;
            this.label7.Font = new System.Drawing.Font("Microsoft Sans Serif", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label7.Location = new System.Drawing.Point(4, 12);
            this.label7.Name = "label7";
            this.label7.Size = new System.Drawing.Size(15, 24);
            this.label7.TabIndex = 5;
            this.label7.Text = "/";
            // 
            // label8
            // 
            this.label8.AutoSize = true;
            this.label8.Font = new System.Drawing.Font("Microsoft Sans Serif", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label8.Location = new System.Drawing.Point(53, 13);
            this.label8.Name = "label8";
            this.label8.Size = new System.Drawing.Size(15, 24);
            this.label8.TabIndex = 5;
            this.label8.Text = "/";
            // 
            // panel1
            // 
            this.panel1.Controls.Add(this.txtReceiveYear);
            this.panel1.Controls.Add(this.txtReceiveMonth);
            this.panel1.Controls.Add(this.label8);
            this.panel1.Controls.Add(this.label7);
            this.panel1.Location = new System.Drawing.Point(368, -1);
            this.panel1.Name = "panel1";
            this.panel1.Size = new System.Drawing.Size(135, 47);
            this.panel1.TabIndex = 2;
            // 
            // label4
            // 
            this.label4.AutoSize = true;
            this.label4.Font = new System.Drawing.Font("Tahoma", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label4.Location = new System.Drawing.Point(8, 241);
            this.label4.Name = "label4";
            this.label4.Size = new System.Drawing.Size(290, 23);
            this.label4.TabIndex = 0;
            this.label4.Text = "Thông tin người yêu cầu đăng ký";
            // 
            // label9
            // 
            this.label9.AutoSize = true;
            this.label9.Font = new System.Drawing.Font("Tahoma", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label9.Location = new System.Drawing.Point(43, 93);
            this.label9.Name = "label9";
            this.label9.Size = new System.Drawing.Size(180, 23);
            this.label9.TabIndex = 0;
            this.label9.Text = "Số đăng ký ban đầu";
            // 
            // txtOrgRefNo
            // 
            this.txtOrgRefNo.Font = new System.Drawing.Font("Tahoma", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.txtOrgRefNo.Location = new System.Drawing.Point(246, 90);
            this.txtOrgRefNo.Name = "txtOrgRefNo";
            this.txtOrgRefNo.Size = new System.Drawing.Size(290, 30);
            this.txtOrgRefNo.TabIndex = 5;
            this.txtOrgRefNo.KeyUp += new System.Windows.Forms.KeyEventHandler(this.txtOrgRefNo_KeyUp);
            this.txtOrgRefNo.Leave += new System.EventHandler(this.txtOrgRefNo_Leave);
            // 
            // pnPesonalCode
            // 
            this.pnPesonalCode.Controls.Add(this.txtPersonalCode);
            this.pnPesonalCode.Controls.Add(this.label5);
            this.pnPesonalCode.Location = new System.Drawing.Point(326, 132);
            this.pnPesonalCode.Name = "pnPesonalCode";
            this.pnPesonalCode.Size = new System.Drawing.Size(222, 38);
            this.pnPesonalCode.TabIndex = 8;
            // 
            // label10
            // 
            this.label10.AutoSize = true;
            this.label10.Font = new System.Drawing.Font("Tahoma", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label10.Location = new System.Drawing.Point(3, 356);
            this.label10.Name = "label10";
            this.label10.Size = new System.Drawing.Size(209, 23);
            this.label10.TabIndex = 0;
            this.label10.Text = "Thông tin bên bảo đảm";
            // 
            // label11
            // 
            this.label11.AutoSize = true;
            this.label11.Font = new System.Drawing.Font("Tahoma", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label11.Location = new System.Drawing.Point(8, 180);
            this.label11.Name = "label11";
            this.label11.Size = new System.Drawing.Size(87, 23);
            this.label11.TabIndex = 0;
            this.label11.Text = "Số nhận:";
            // 
            // txtNumber
            // 
            this.txtNumber.Font = new System.Drawing.Font("Tahoma", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.txtNumber.Location = new System.Drawing.Point(101, 177);
            this.txtNumber.Name = "txtNumber";
            this.txtNumber.Size = new System.Drawing.Size(70, 30);
            this.txtNumber.TabIndex = 9;
            this.txtNumber.KeyDown += new System.Windows.Forms.KeyEventHandler(this.txtNumber_KeyDown);
            this.txtNumber.KeyUp += new System.Windows.Forms.KeyEventHandler(this.textBox1_KeyUp);
            // 
            // label12
            // 
            this.label12.AutoSize = true;
            this.label12.Font = new System.Drawing.Font("Tahoma", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label12.Location = new System.Drawing.Point(177, 180);
            this.label12.Name = "label12";
            this.label12.Size = new System.Drawing.Size(62, 23);
            this.label12.TabIndex = 0;
            this.label12.Text = "Email:";
            // 
            // txtEmail
            // 
            this.txtEmail.Font = new System.Drawing.Font("Tahoma", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.txtEmail.Location = new System.Drawing.Point(246, 177);
            this.txtEmail.Name = "txtEmail";
            this.txtEmail.Size = new System.Drawing.Size(209, 30);
            this.txtEmail.TabIndex = 10;
            // 
            // grAssetOwnner
            // 
            this.grAssetOwnner.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.grAssetOwnner.Location = new System.Drawing.Point(12, 382);
            this.grAssetOwnner.Name = "grAssetOwnner";
            this.grAssetOwnner.Size = new System.Drawing.Size(536, 83);
            this.grAssetOwnner.TabIndex = 13;
            this.grAssetOwnner.TabStop = false;
            // 
            // grWarranter
            // 
            this.grWarranter.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.grWarranter.Location = new System.Drawing.Point(12, 267);
            this.grWarranter.Name = "grWarranter";
            this.grWarranter.Size = new System.Drawing.Size(536, 86);
            this.grWarranter.TabIndex = 12;
            this.grWarranter.TabStop = false;
            // 
            // btnSendEmail
            // 
            this.btnSendEmail.Location = new System.Drawing.Point(461, 176);
            this.btnSendEmail.Name = "btnSendEmail";
            this.btnSendEmail.Size = new System.Drawing.Size(75, 31);
            this.btnSendEmail.TabIndex = 11;
            this.btnSendEmail.Text = "Gửi Email";
            this.btnSendEmail.UseVisualStyleBackColor = true;
            this.btnSendEmail.Click += new System.EventHandler(this.btnSendEmail_Click);
            // 
            // pnAttachment
            // 
            this.pnAttachment.BackColor = System.Drawing.SystemColors.ControlLight;
            this.pnAttachment.Controls.Add(this.pictureBox1);
            this.pnAttachment.Controls.Add(this.lbAttachName);
            this.pnAttachment.Location = new System.Drawing.Point(246, 213);
            this.pnAttachment.Name = "pnAttachment";
            this.pnAttachment.Size = new System.Drawing.Size(209, 23);
            this.pnAttachment.TabIndex = 22;
            this.pnAttachment.Visible = false;
            // 
            // pictureBox1
            // 
            this.pictureBox1.Image = ((System.Drawing.Image)(resources.GetObject("pictureBox1.Image")));
            this.pictureBox1.Location = new System.Drawing.Point(3, 3);
            this.pictureBox1.Name = "pictureBox1";
            this.pictureBox1.Size = new System.Drawing.Size(22, 19);
            this.pictureBox1.TabIndex = 1;
            this.pictureBox1.TabStop = false;
            // 
            // lbAttachName
            // 
            this.lbAttachName.AutoSize = true;
            this.lbAttachName.Location = new System.Drawing.Point(31, 4);
            this.lbAttachName.Name = "lbAttachName";
            this.lbAttachName.Size = new System.Drawing.Size(69, 13);
            this.lbAttachName.TabIndex = 0;
            this.lbAttachName.Text = "Không có file";
            // 
            // UEntryGCN
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.Controls.Add(this.pnAttachment);
            this.Controls.Add(this.btnSendEmail);
            this.Controls.Add(this.txtEmail);
            this.Controls.Add(this.txtNumber);
            this.Controls.Add(this.pnPesonalCode);
            this.Controls.Add(this.grAssetOwnner);
            this.Controls.Add(this.txtReceiveDay);
            this.Controls.Add(this.grWarranter);
            this.Controls.Add(this.panel1);
            this.Controls.Add(this.txtNumPagesAttachment);
            this.Controls.Add(this.txtReceiveMin);
            this.Controls.Add(this.txtReceiveHour);
            this.Controls.Add(this.txtRefNo);
            this.Controls.Add(this.label10);
            this.Controls.Add(this.label4);
            this.Controls.Add(this.label3);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.label12);
            this.Controls.Add(this.label6);
            this.Controls.Add(this.label11);
            this.Controls.Add(this.label9);
            this.Controls.Add(this.txtOrgRefNo);
            this.Name = "UEntryGCN";
            this.Size = new System.Drawing.Size(551, 470);
            ((System.ComponentModel.ISupportInitialize)(this.txtNumPagesAttachment)).EndInit();
            this.panel1.ResumeLayout(false);
            this.panel1.PerformLayout();
            this.pnPesonalCode.ResumeLayout(false);
            this.pnPesonalCode.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.grAssetOwnner)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.grWarranter)).EndInit();
            this.pnAttachment.ResumeLayout(false);
            this.pnAttachment.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.TextBox txtRefNo;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.NumericUpDown txtNumPagesAttachment;
        private System.Windows.Forms.Label label5;
        private System.Windows.Forms.TextBox txtPersonalCode;
        private System.Windows.Forms.TextBox txtReceiveHour;
        private System.Windows.Forms.TextBox txtReceiveMin;
        private System.Windows.Forms.TextBox txtReceiveDay;
        private System.Windows.Forms.TextBox txtReceiveMonth;
        private System.Windows.Forms.TextBox txtReceiveYear;
        private System.Windows.Forms.Label label6;
        private System.Windows.Forms.Label label7;
        private System.Windows.Forms.Label label8;
        private System.Windows.Forms.Panel panel1;
        //private System.Windows.Forms.DataGridView grAssetOwner;
        private FWS.TTDKGDTS.ImportTool._Core.Grid.CDataGridView grWarranter;
        private System.Windows.Forms.Label label4;
        private System.Windows.Forms.Label label9;
        private System.Windows.Forms.TextBox txtOrgRefNo;
        private System.Windows.Forms.Panel pnPesonalCode;
        private _Core.Grid.CDataGridView grAssetOwnner;
        private System.Windows.Forms.Label label10;
        private System.Windows.Forms.Label label11;
        private System.Windows.Forms.TextBox txtNumber;
        private System.Windows.Forms.Label label12;
        private System.Windows.Forms.TextBox txtEmail;
        private System.Windows.Forms.Button btnSendEmail;
        private System.Windows.Forms.Panel pnAttachment;
        private System.Windows.Forms.PictureBox pictureBox1;
        private System.Windows.Forms.Label lbAttachName;
    }
}
