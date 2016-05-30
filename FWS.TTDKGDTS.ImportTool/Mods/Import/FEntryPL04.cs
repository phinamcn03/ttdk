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
    public partial class FEntryPL04 : FBase
    {
        public FEntryPL04()
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
                uEntryPL041.Context = this.Context;
                uEntryPL041.HTMLTransaction = this.HTMLTransaction;
                uEntryPL041.InitControl(regisTransRefNo);
                
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
                uEntryPL041.ProcessAsset();

                if (!uEntryPL041.ValidateInput())
                {
                    ShowError(uEntryPL041.Message);
                    return;
                }
                if (uEntryPL041.UpdateTransaction())
                {
                    //this.RefNo = uEntryPL041.RefNo;
                    this.ObjectID = uEntryPL041.ObjectID;
                    Action = "OK";
                    //IsSendMail = uEntryPL041.IsSendMail;
                    //IsSendMailKH = uEntryPL041.IsSendMailKH;
                    CurrentTransaction = uEntryPL041.CurrentTransaction;
                    this.DialogResult = System.Windows.Forms.DialogResult.OK;
                    this.Close();
                }
                else
                {
                    if (!string.IsNullOrEmpty(uEntryPL041.Message))
                    {
                        ShowError(uEntryPL041.Message);
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
