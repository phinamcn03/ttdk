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
    public partial class FEntryGCN : FBase
    {
       
        public FEntryGCN()
        {
            InitializeComponent();
        }
        public string EmailKH
        {
            get { return uEntryGCN1.EmailKH; }
        }
        public string Action = "";
        public void InitForm(string RefNo,int RefType)
        {
            uEntryGCN1.InitControl(RefNo,RefType);

            
        }

        private void btnOK_Click(object sender, EventArgs e)
        {
            try
            {
                if (uEntryGCN1.UpdateTransaction())
                {
                    Action = "OK";
                    this.DialogResult = System.Windows.Forms.DialogResult.OK;
                    this.Close();
                }

            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
            }
        }

        private void btnCancel_Click(object sender, EventArgs e)
        {
            this.Close();
        }

        private void FEntryGCN_Load(object sender, EventArgs e)
        {
            if (uEntryGCN1.RefType == 26)
            {
                Action = "OK";
                this.DialogResult = System.Windows.Forms.DialogResult.OK;
                this.Close();
            }
        }

        private void FEntryGCN_KeyPress(object sender, KeyPressEventArgs e)
        {
            try
            {
                if (e.KeyChar == (char)Keys.Enter)
                {
                    e.Handled = true;
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
            }
        }

        private void FEntryGCN_KeyUp(object sender, KeyEventArgs e)
        {
            try
            {
                if (e.KeyCode == Keys.Enter)
                {
                    if (!uEntryGCN1.HandleKeyDown)
                    {
                        btnOK_Click(btnOK, null);
                    }
                    else
                    {
                        uEntryGCN1.HandleKeyDown = false;
                    }
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
            }
        }
    }
}
