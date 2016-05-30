using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;
using FWS.TTDKGDTS.ImportTool._Base;

namespace FWS.TTDKGDTS.ImportTool.Mods.Import
{
    public partial class FEntryTBGT : FBase
    {
        public FEntryTBGT()
        {
            InitializeComponent();
        }
        public string Action = "";
        public string Context = "";
        public string RefNo = "";
        public int ObjectID = 0;
        public bool IsSendMail = false;
        public bool IsSendMailKH = false;
        public CTransaction CurrentTransaction;
        public CTransaction HTMLTransaction;
        public void InitForm(string regisTransRefNo)
        {
            try
            {
                uEntryTBGT1.Context = this.Context;
                uEntryTBGT1.HTMLTransaction = this.HTMLTransaction;
                uEntryTBGT1.InitControl(regisTransRefNo);
                
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
            }
        }

        private void btnOK_Click(object sender, EventArgs e)
        {
            try
            {
                uEntryTBGT1.ProcessAsset();

                if (!uEntryTBGT1.ValidateInput())
                {
                    ShowError(uEntryTBGT1.Message);
                    return;
                }
                if (uEntryTBGT1.UpdateTransaction())
                {
                    this.RefNo = uEntryTBGT1.RefNo;
                    this.ObjectID = uEntryTBGT1.ObjectID;
                    Action = "OK";
                    IsSendMail = uEntryTBGT1.IsSendMail;
                    IsSendMailKH = uEntryTBGT1.IsSendMailKH;
                    CurrentTransaction = uEntryTBGT1.CurrentTransaction;
                    this.DialogResult = System.Windows.Forms.DialogResult.OK;
                    this.Close();
                }
                else
                {
                    if (!string.IsNullOrEmpty(uEntryTBGT1.Message))
                    {
                        ShowError(uEntryTBGT1.Message);
                    }
                    return;
                }

            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
            }
        }

        private void uEntryTBGT1_Load(object sender, EventArgs e)
        {

        }

        private void btnCancel_Click(object sender, EventArgs e)
        {
            Action = "CANCEL";
            this.Close();
        }
               
    }
}
