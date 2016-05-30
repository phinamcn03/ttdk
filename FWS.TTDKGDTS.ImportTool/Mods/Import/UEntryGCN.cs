using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Drawing;
using System.Data;
using System.Linq;
using System.Text;
using System.Windows.Forms;
using FWS.TTDKGDTS.ImportTool._Global;
using FWS.TTDKGDTS.ImportTool._Core;
using FWS.VnAccounting.Service.Data.Utils;
using FWS.TTDKGDTS.ImportTool.ServiceReference;
using FWS.TTDKGDTS.ImportTool._Base;

namespace FWS.TTDKGDTS.ImportTool.Mods.Import
{
    public partial class UEntryGCN : UBase
    {
        public bool HandleKeyDown = false;
        public UEntryGCN()
        {
            InitializeComponent();
        }
        public int RefType { get; set; }

        public string EmailKH
        {
            get { return txtEmail.Text; }
        }
        CTransaction CurrentTransaction = new CTransaction();
        
        public void InitControl(string RefNo, int refType)
        {
            InitGridColumn();
            RefType = refType;
            if (RefType == 26) return;
            //Kiem tra don co bi Block khong
            string inputValue = string.Format("<RequestParams Function='Transaction_Asset' Action=\"CheckAssetBlock\" RefType=\"21\" RefNo='{0}'/>", RefNo);
            inputValue = CXML.AddAuthenticate(inputValue);
            string datacsv = CServiceReference.CoreService.ExecuteAction(CSession.CLIENT_KEY, CXML.HtmlEnCode(inputValue));
            IList<CApplicationMessage> mess = CObjectMapper.FromCSV<CApplicationMessage>(datacsv, 1);

            if (mess != null && mess.Count > 0)
            {
                if (string.IsNullOrEmpty(mess[0].Result.ToString()) || mess[0].Result.Equals("0"))
                {
                    MessageBox.Show(mess[0].Description);
                }
            }
            else
            {
                MessageBox.Show("Có lỗi khi kiểm tra phong tỏa tài sản.");
            }
            //Lay du lieu tu so don dang ky
            //CCoreService service = new CCoreService();
            inputValue = string.Format("<RequestParams Function='GetTransaction_Asset' RefType='21' RefNo='{0}' Status='0,1' />", RefNo);
            inputValue = inputValue + string.Format("<RequestParams Function='GetTransaction_Asset' RefType='21' RefNo='{0}' Context='WarranterList'/>", RefNo);
            inputValue = inputValue + string.Format("<RequestParams Function='GetTransaction_Asset' RefType='21' RefNo='{0}' Context='AssetOwnerList'/>", RefNo);

            datacsv = CServiceReference.CoreService.GetContextData(CSession.CLIENT_KEY,CXML.HtmlEnCode( inputValue));

            IList<CTransaction> trans = CObjectMapper.FromCSV<CTransaction>(datacsv, 1);
            List<Person> warranter = CObjectMapper.FromCSV<Person>(datacsv, 2);
            List<Person> assetownner = CObjectMapper.FromCSV<Person>(datacsv, 3);

            if (warranter == null) warranter = new List<Person>();
            if (assetownner == null) assetownner = new List<Person>();
            
            if (trans.Count > 0)
            {
                trans[0].ReceiveDateTime = trans[0].ReceiveDateTime <= new DateTime(1901, 01, 01) ? trans[0].RefDate : trans[0].ReceiveDateTime;
                txtRefNo.Text = trans[0].RefNo;
                txtReceiveHour.Text = trans[0].ReceiveDateTime.Hour.ToString();
                txtReceiveMin.Text = trans[0].ReceiveDateTime.Minute.ToString();
                txtReceiveDay.Text = trans[0].ReceiveDateTime.Day.ToString();
                txtReceiveMonth.Text = trans[0].ReceiveDateTime.Month.ToString();
                txtReceiveYear.Text = trans[0].ReceiveDateTime.Year.ToString();

                //txtReceiveDateTime.Value = trans[0].ReceiveDateTime<new DateTime(1901,01,01)?DateTime.Now:trans[0].ReceiveDateTime;
                txtNumPagesAttachment.Value = trans[0].NumPagesAttachment <= 0 ? 2 : trans[0].NumPagesAttachment;
                //txtIDNo.Text = trans[0].AssetIDCardNo;
                txtPersonalCode.Text = trans[0].AssetPersonalCode;
                CurrentTransaction = trans[0];
                CurrentTransaction.WarranterList = warranter;
                CurrentTransaction.AssetOwnnerList = assetownner;

                txtOrgRefNo.Text = trans[0].OldRefNo;
                txtNumber.Text = trans[0].SoDonNhan;
                txtEmail.Text = trans[0].SendGCNEmail;
                //gia lap 
                //trans[0].FileNumber = "1024.pdf";

                lbAttachName.Text = trans[0].RefNo + ".pdf";
                CheckFileExists();

                BindingSource source = new BindingSource();
                source.DataSource = CurrentTransaction.WarranterList;
                grWarranter.DataSource = source;

                BindingSource ownnersource = new BindingSource();
                ownnersource.DataSource = CurrentTransaction.AssetOwnnerList;
                grAssetOwnner.DataSource = ownnersource;

                //Neu la don Xoa thi khong hien thi Ma ca nhan
                if (trans[0].Type == 95)
                {
                    pnPesonalCode.Visible = false;
                }
                else
                {
                    pnPesonalCode.Visible = true;
                }
            }
        }

        private void InitGridColumn()
        {
            grWarranter.Columns.Clear();
            grWarranter.AutoGenerateColumns = false;
            DataGridViewButtonColumn btnColumn = new DataGridViewButtonColumn();
            btnColumn.Name = "colDelete";
            btnColumn.HeaderText = "";
            btnColumn.Text = "-";
            btnColumn.UseColumnTextForButtonValue = true;
            btnColumn.Width = 20;
            grWarranter.Columns.Add(btnColumn);
            //grAsset.Columns.Add(new DataGridViewTextBoxColumn() { Name = "colType", HeaderText = "Loai TS", DataPropertyName = "AssetTypeName",Width=60,CellTemplate=new DataGridViewTextBoxCell()});
            grWarranter.Columns.Add(new DataGridViewTextBoxColumn() { Name = "colIDNo", HeaderText = "Mã số KHTX", DataPropertyName = "ObjectCode", Width = 100, CellTemplate = new DataGridViewTextBoxCell() });
            grWarranter.Columns.Add(new DataGridViewTextBoxColumn() { Name = "colName", HeaderText = "Tên", DataPropertyName = "ObjectName", Width = 170, CellTemplate = new DataGridViewTextBoxCell() });
            grWarranter.Columns.Add(new DataGridViewTextBoxColumn() { Name = "colIDAddress", HeaderText = "Địa chỉ", DataPropertyName = "ObjectAddress", Width = 60, CellTemplate = new DataGridViewTextBoxCell(), AutoSizeMode = DataGridViewAutoSizeColumnMode.Fill });
            grWarranter.CellContentClick -= new DataGridViewCellEventHandler(grWarranter_CellContentClick);
            grWarranter.CellContentClick += new DataGridViewCellEventHandler(grWarranter_CellContentClick);

            grAssetOwnner.Columns.Clear();
            grAssetOwnner.AutoGenerateColumns = false;
            DataGridViewButtonColumn btnColumnAsset = new DataGridViewButtonColumn();
            btnColumnAsset.Name = "colDelete";
            btnColumnAsset.HeaderText = "";
            btnColumnAsset.Text = "-";
            btnColumnAsset.UseColumnTextForButtonValue = true;
            btnColumnAsset.Width = 20;
            grAssetOwnner.Columns.Add(btnColumnAsset);
            //grAsset.Columns.Add(new DataGridViewTextBoxColumn() { Name = "colType", HeaderText = "Loai TS", DataPropertyName = "AssetTypeName",Width=60,CellTemplate=new DataGridViewTextBoxCell()});
            grAssetOwnner.Columns.Add(new DataGridViewTextBoxColumn() { Name = "colObjectID", HeaderText = "ID", DataPropertyName = "ObjectIDCardNumber", Width = 80, CellTemplate = new DataGridViewTextBoxCell() });
            grAssetOwnner.Columns.Add(new DataGridViewTextBoxColumn() { Name = "colObjectName", HeaderText = "Tên", DataPropertyName = "ObjectName", Width = 150, CellTemplate = new DataGridViewTextBoxCell() });
            grAssetOwnner.Columns.Add(new DataGridViewTextBoxColumn() { Name = "colObjectAddress", HeaderText = "Địa chỉ", DataPropertyName = "ObjectAddress", Width = 200, CellTemplate = new DataGridViewTextBoxCell() });

            grAssetOwnner.CellContentClick -= new DataGridViewCellEventHandler(grAssetOwner_CellContentClick);
            grAssetOwnner.CellContentClick += new DataGridViewCellEventHandler(grAssetOwner_CellContentClick);


        }

        void grAssetOwner_CellContentClick(object sender, DataGridViewCellEventArgs e)
        {
            if (e.ColumnIndex == 0)
            {
                //delete row
                grAssetOwnner.Rows.Remove(grAssetOwnner.Rows[e.RowIndex]);
            }
        }
        void grWarranter_CellContentClick(object sender, DataGridViewCellEventArgs e)
        {
            if (e.ColumnIndex == 0)
            {
                //delete row
                grWarranter.Rows.Remove(grWarranter.Rows[e.RowIndex]);
            }
        }
        public bool UpdateTransaction()
        {
            UpdateSoDonNhan();

            CurrentTransaction.ReceiveDateTime = GetReceiveDateTime();// txtReceiveDateTime.Value;
            CurrentTransaction.NumPagesAttachment = (int)txtNumPagesAttachment.Value;
            //CurrentTransaction.AssetIDCardNo = txtIDNo.Text;
            CurrentTransaction.AssetPersonalCode = txtPersonalCode.Text;

            string requestparams = CurrentTransaction.GetRequestParams("Function='Transaction_Asset' Action='UPDATEGCN'");
            CCoreService service = new CCoreService();
            requestparams = CXML.AddAuthenticate(requestparams);
            string messageCSV = service.ExecuteAction(CSession.CLIENT_KEY, CXML.HtmlEnCode( requestparams));
            IList<FWS.TTDKGDTS.ImportTool.BusinessObject.CApplicationMessage> message = CObjectMapper.FromCSV<FWS.TTDKGDTS.ImportTool.BusinessObject.CApplicationMessage>(messageCSV, 1);

            if (message[0].Result == null || message[0].Result.ToString() == "" || message[0].Result.ToString() == "0")
            {
                MessageBox.Show(message[0].Description);
                return false;
            }
            return true;

        }

        private DateTime GetReceiveDateTime()
        {
            try
            {
                DateTime d = new DateTime();
                string s = string.Format("{0}-{1}-{2} {3}:{4}", txtReceiveYear.Text
                                            , txtReceiveMonth.Text
                                            , txtReceiveDay.Text
                                            , txtReceiveHour.Text
                                            , txtReceiveMin.Text);
                d = DateTime.Parse(s);
                return d;
            }
            catch
            {
                throw new Exception("Ngày giờ nhập không đúng.");
            }

        }

        private void txtReceiveHour_KeyDown(object sender, KeyEventArgs e)
        {
            try
            {
                int value = 0;
                if(string.IsNullOrEmpty(((TextBox)sender).Text)) return;
                if(!int.TryParse(((TextBox)sender).Text,out value))
                {
                    e.Handled = true;
                }
                
            }
            catch
            {
                
            }
        }

        private void GetInfoByOriginalRefNo(string OrgRefNo)
        {
            if (string.IsNullOrEmpty(OrgRefNo)) return;

            CCoreService service = new CCoreService();
            string inputValue = string.Format("<InputValue UserID=\"{1}\" /><RequestParams Function='GetTransaction_Asset' RefType='22' RegisTransRefNo='{0}'/>", OrgRefNo, CSession.UserID);
            inputValue = inputValue + string.Format("<RequestParams Function=\"GetTransaction_Asset\" RefType=\"21\" RefNo=\"{0}\" Context=\"AssetOwnerList\"/>", OrgRefNo);
            inputValue = inputValue + string.Format("<RequestParams Function=\"GetTransaction_Asset\" RefType=\"21\" RefNo=\"{0}\" Context=\"AssetOwnerList\"/>", CurrentTransaction.RefNo);
            inputValue = inputValue + string.Format("<RequestParams Function=\"GetTransaction_Asset\" RefType=\"21\" RefNo=\"{0}\" Context=\"WarranterList\"/>", OrgRefNo);
            inputValue = inputValue + string.Format("<RequestParams Function=\"GetTransaction_Asset\" RefType=\"21\" RefNo=\"{0}\" Context=\"WarranterList\"/>", CurrentTransaction.RefNo);
            string datacsv = service.GetContextData(CSession.CLIENT_KEY, CXML.HtmlEnCode(inputValue));

            IList<CTransaction> trans = CObjectMapper.FromCSV<CTransaction>(datacsv, 1);
            List<Person> OrgAssetOwner = CObjectMapper.FromCSV<Person>(datacsv, 2);
            if (OrgAssetOwner == null) OrgAssetOwner = new List<Person>();
            List<Person> AssetOwner = CObjectMapper.FromCSV<Person>(datacsv, 3);
            if (AssetOwner == null) AssetOwner = new List<Person>();
            List<Person> OrgWarraner = CObjectMapper.FromCSV<Person>(datacsv, 4);
            if (OrgWarraner == null) OrgWarraner = new List<Person>();
            List<Person> Warraner = CObjectMapper.FromCSV<Person>(datacsv, 5);
            if (Warraner == null) Warraner = new List<Person>();

            if (trans != null && trans.Count > 0)
            {
                if (string.IsNullOrEmpty(txtPersonalCode.Text))
                {
                    txtPersonalCode.Text = trans[0].AssetPersonalCode;
                }
                //txtAssetType.SelectedValue = trans[0].AssetType.ToString();
                //txtDirection.SelectedValue = trans[0].ObjectID;
                //txtCQCN.SelectedValue = trans[0].ObjectID;
                if (Warraner == null || Warraner.Count == 0)
                {
                    CurrentTransaction.WarranterList = OrgWarraner;
                    BindingSource source = new BindingSource();
                    source.DataSource = CurrentTransaction.WarranterList;
                    grWarranter.DataSource = source;

                }
                if (AssetOwner == null || AssetOwner.Count == 0)
                {
                    CurrentTransaction.AssetOwnnerList = OrgAssetOwner;
                    BindingSource source = new BindingSource();
                    source.DataSource = CurrentTransaction.AssetOwnnerList;
                    grAssetOwnner.DataSource = source;
                }

                //CurrentTransaction.AssetOwnnerList = asset;
                
            }

        }

        private void GetInfoByOriginalRefNo_1(string OrgRefNo)
        {
            if (string.IsNullOrEmpty(OrgRefNo)) return;

            CCoreService service = new CCoreService();
            string inputValue = string.Format("<InputValue UserID=\"{1}\" /><RequestParams Function='GetTransaction_Asset' RefType='22' RegisTransRefNo='{0}'/>", OrgRefNo, CSession.UserID);
            inputValue = inputValue + string.Format("<RequestParams Function=\"GetTransaction_Asset\" RefType=\"21\" RefNo=\"{0}\" Context=\"AssetsList\"/>", OrgRefNo);
            inputValue = inputValue + string.Format("<RequestParams Function=\"GetTransaction_Asset\" RefType=\"21\" RefNo=\"{0}\" Context=\"AssetOwnerList\"/>", OrgRefNo);
            string datacsv = service.GetContextData(CSession.CLIENT_KEY, CXML.HtmlEnCode(inputValue));

            IList<CTransaction> trans = CObjectMapper.FromCSV<CTransaction>(datacsv, 1);
            List<Asset> asset = CObjectMapper.FromCSV<Asset>(datacsv, 2);
            List<Person> ownner = CObjectMapper.FromCSV<Person>(datacsv, 3);
            if (trans != null && trans.Count > 0)
            {
                if (CurrentTransaction.Assets == null || CurrentTransaction.Assets.Count == 0)
                    CurrentTransaction.Assets = asset;

                if (CurrentTransaction.AssetOwnerID == 0 && !string.IsNullOrEmpty(CurrentTransaction.AssetOwnerName))
                    CurrentTransaction.AssetOwnerID = trans[0].AssetOwnerID;

                if (string.IsNullOrEmpty(CurrentTransaction.AssetOwnerName))
                    CurrentTransaction.AssetOwnerName = trans[0].AssetOwnerName;

                if (string.IsNullOrEmpty(CurrentTransaction.AssetPersonalCode))
                    CurrentTransaction.AssetPersonalCode = trans[0].AssetPersonalCode;

                if (CurrentTransaction.AssetOwnnerList == null || CurrentTransaction.AssetOwnnerList.Count == 0)
                    CurrentTransaction.AssetOwnnerList = ownner;

                BindingSource source = new BindingSource();
                source.DataSource = CurrentTransaction.AssetOwnnerList;
                grAssetOwnner.DataSource = source;
            }

        }

        private void txtOrgRefNo_Leave(object sender, EventArgs e)
        {
            try
            {
                GetInfoByOriginalRefNo(txtOrgRefNo.Text);
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
            }
        }

        private void txtOrgRefNo_KeyUp(object sender, KeyEventArgs e)
        {
            try
            {
                if (e.KeyCode == Keys.Enter)
                {
                    GetInfoByOriginalRefNo(txtOrgRefNo.Text);
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
            }
        }

        private void TextBoxt_Enter(object sender, EventArgs e)
        {
            try
            {
                if (sender is TextBox)
                {
                    ((TextBox)sender).SelectAll();
                }
                if (sender is NumericUpDown)
                {
                    ((NumericUpDown)sender).Select(0, 100);
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
            }
        }

        private void textBox1_KeyUp(object sender, KeyEventArgs e)
        {
           
        }

        private void txtNumber_KeyDown(object sender, KeyEventArgs e)
        {
            try
            {
                
                if (e.KeyCode == Keys.Enter||e.KeyCode == Keys.Tab)
                {
                    string inputValue = "<RequestParams Function=\"::R|DOC|Items_NhanDon\" Number=\"{0}\" FromDate=\"{1}\" />";
                    inputValue = string.Format(inputValue, txtNumber.Text, string.Format("{0}-{1}-{2}", txtReceiveYear.Text, txtReceiveMonth.Text, txtReceiveDay.Text));
                    inputValue = CXML.AddAuthenticate(inputValue);
                    string data = CServiceReference.CoreService.GetContextData(CSession.CLIENT_KEY, inputValue);
                    List<CNhanDon> list = CObjectMapper.FromCSV<CNhanDon>(data, 1);
                    if (list != null && list.Count > 0)
                    {
                        txtEmail.Text = list[0].Email;
                    }
                    else
                    {
                        txtEmail.Text = "";
                    }
                    txtEmail.Focus();
                    HandleKeyDown = true;
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
            }
        }

        private void btnSendEmail_Click(object sender, EventArgs e)
        {
            try
            {
                btnSendEmail.Enabled = false;
                btnSendEmail.Text = "Đang gửi...";
                Application.DoEvents();
                SendEmail();

            }
            catch (Exception ex)
            {
                ShowError(ex.Message);
            }
            finally
            {
                btnSendEmail.Text = "Gửi Email";
                btnSendEmail.Enabled = true;
            }
        }

        private void SendEmail()
        {
            string context = "";
            int ReportID = 18;
            //Luu thong tin
            UpdateSoDonNhan();

            string inputValue = "<RequestParams RefType=\"{6}\" Context=\"{3}\" RefNo=\"{0}\" ViewID=\"38\" ViewerID=\"{5}\" ID=\"{4}\" IncludeSign=\"1\" Email=\"{7}\" SoNhanDon=\"{8}\" FileNumber=\"{9}\"/>";
            inputValue = string.Format(inputValue, CXML.HtmlEnCode(this.CurrentTransaction.RefNo), CSession.UserID, CSession.CLIENT_KEY, context, this.CurrentTransaction.ID, ReportID, this.CurrentTransaction.RefType, EmailKH,txtNumber.Text,this.CurrentTransaction.FileNumber);
            inputValue = CXML.AddAuthenticate(inputValue);

            string result = CServiceReference.AssetService.SendGCN(CSession.CLIENT_KEY, inputValue);
            //FWS.TTDKGDTS.ImportTool.ServiceReference.Soap.CApplicationMessage message = CServiceReference.AssetService.UpdateAndSendReport(CSession.CLIENT_KEY, inputValue);
            BusinessObject.CApplicationMessage message = CObjectMapper.FromCSV<BusinessObject.CApplicationMessage>(result)[0];

            if (message.IsSuccessfull)
            {
                
                ShowInfo(message.Description);
            }
            else
            {
                ShowError(message.Description);
            }
        }

        private CApplicationMessage UpdateSoDonNhan()
        {
            string inputValue = "<RequestParams RefType=\"21\" Context=\"TOOL\" Function=\"Transaction_Asset\" Action=\"UpdateGCNEmail\" RefNo=\"{0}\" ID=\"{1}\" SoDonNhan=\"{2}\" SendGCNEmail=\"{3}\"/>";
            inputValue = string.Format(inputValue, CXML.HtmlEnCode(this.CurrentTransaction.RefNo), this.CurrentTransaction.ID, txtNumber.Text, txtEmail.Text);
            inputValue = CXML.AddAuthenticate(inputValue);
            string  result=  CServiceReference.CoreService.ExecuteAction(CSession.CLIENT_KEY, inputValue);
            List<CApplicationMessage> mess = CObjectMapper.FromCSV<CApplicationMessage>(result);
            if (mess != null && mess.Count > 0) return mess[0];
            return null;
        }

        private void CheckFileExists()
        {
            try {
                pnAttachment.Visible = CServiceReference.AssetService.CheckScanFileExists(CurrentTransaction.RefNo);
                Console.WriteLine("RefNo::"+CurrentTransaction.RefNo);
            }
            catch(Exception)
            {
                lbAttachName.Text = "Error check file";
                pnAttachment.Visible = true;
            }
        }
    }
}
