using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;
using FWS.TTDKGDTS.ImportTool._Base;
using FWS.TTDKGDTS.ImportTool._Global;
using FWS.TTDKGDTS.ImportTool.ServiceReference;
using FWS.TTDKGDTS.ImportTool._Core;

namespace FWS.TTDKGDTS.ImportTool.Mods.Import
{
    public partial class FOldRefNo : FBase
    {
        public CTransaction CurrentTransaction = null;
        public FOldRefNo()
        {
            InitializeComponent();
        }

        public string OldRefNo
        {
            get { return txtOldRefNo.Text.Trim(); }
            set { txtOldRefNo.Text = value; }
        }

        private void btnOK_Click(object sender, EventArgs e)
        {
            //Kiem tra so don co dung la don dang ky ban dau hay don thay doi cua don dk ban dau ko
            try
            {
                if (string.IsNullOrEmpty(txtOldRefNo.Text.Trim()))
                {
                    ShowError("Số đơn nhập vào không hợp lệ.");
                    return;
                }
                CCoreService service = new CCoreService();
                string inputValue = string.Format("<RequestParams Function=\"GetTransaction_Asset\" RefType=\"21\" RefNo=\"{0}\" Context=\"{1}\" />", txtOldRefNo.Text, "CHECKSCSS");
                string datacsv = service.GetContextData(CSession.CLIENT_KEY, inputValue);
                IList<CTransaction> trans = CObjectMapper.FromCSV<CTransaction>(datacsv, 1);
                if (trans != null && trans.Count > 0)
                {
                    if (!trans[0].RefNo.Trim().Equals(CurrentTransaction.OrgRefNo.Trim(), StringComparison.OrdinalIgnoreCase)
                        && (string.IsNullOrEmpty(trans[0].OrgRefNo) || !trans[0].OrgRefNo.Trim().Equals(CurrentTransaction.OrgRefNo.Trim(), StringComparison.OrdinalIgnoreCase)))
                    {
                        ShowError("Số đơn nhập vào không hợp lệ.");
                        //this.DialogResult = System.Windows.Forms.DialogResult.Cancel;

                        return;
                    }
                    this.DialogResult = System.Windows.Forms.DialogResult.OK;
                    this.Close();
                    return;

                }
                else
                {
                    if (MessageBox.Show("Số đơn nhập vào không tồn tại trong hệ thống. Hệ thống sẽ tự động tạo đơn và tính phí theo số đơn này?", "", MessageBoxButtons.YesNo, MessageBoxIcon.Question) == System.Windows.Forms.DialogResult.Yes)
                    {
                        this.DialogResult = System.Windows.Forms.DialogResult.OK;
                        this.Close();
                        return;
                    }
                    return;
                }
            }
            catch (Exception ex)
            {
                ShowError(ex.Message);
                this.DialogResult = System.Windows.Forms.DialogResult.Cancel;
                this.Close();
                return;
            }
        }
    }
}
