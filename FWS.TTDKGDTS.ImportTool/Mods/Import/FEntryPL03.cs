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
    public partial class FEntryPL03 : FBase
    {
        public FEntryPL03()
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
                uEntryPL031.Context = this.Context;
                uEntryPL031.HTMLTransaction = this.HTMLTransaction;
                uEntryPL031.InitControl(regisTransRefNo);
                
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
                uEntryPL031.ProcessAsset();

                if (!uEntryPL031.ValidateInput())
                {
                    ShowError(uEntryPL031.Message);
                    return;
                }
                if (uEntryPL031.UpdateTransaction())
                {
                    this.RefNo = uEntryPL031.RefNo;
                    this.ObjectID = uEntryPL031.ObjectID;
                    Action = "OK";
                    IsSendMail = uEntryPL031.IsSendMail;
                    IsSendMailKH = uEntryPL031.IsSendMailKH;
                    CurrentTransaction = uEntryPL031.CurrentTransaction;
                    this.DialogResult = System.Windows.Forms.DialogResult.OK;
                    this.Close();
                }
                else
                {
                    if (!string.IsNullOrEmpty(uEntryPL031.Message))
                    {
                        ShowError(uEntryPL031.Message);
                    }
                    return;
                }

            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
            }
        }

        private void uEntryPL031_Load(object sender, EventArgs e)
        {

        }

        private void btnCancel_Click(object sender, EventArgs e)
        {
            Action = "CANCEL";
            this.Close();
        }
               
    }
}
