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
using FWS.TTDKGDTS.ImportTool.BusinessObject;
using FWS.VnAccounting.Service.Data.Utils;
using System.Runtime.InteropServices;
using FWS.TTDKGDTS.ImportTool.ServiceReference;
using FWS.TTDKGDTS.ImportTool._Base;
using FWS.TTDKGDTS.ImportTool._Core.Grid;

namespace FWS.TTDKGDTS.ImportTool.Mods.Import
{
    public partial class UEntryPL03 : UBase
    {
        #region Contructor
        public UEntryPL03()
        {
            InitializeComponent();
            txtKHTX.SelectedItemChanged += new EventHandler(txtCQCN_SelectedItemChanged);
            
        }
        #endregion Contructor

        #region Properties and Variable
        public string Context = "";
        public CTransaction CurrentTransaction = new CTransaction();
        public CTransaction HTMLTransaction = null;
        List<CPerson> directionDataSource = null;
        IList<CParaData> gridAcctionType = null;
        List<CParaData> assetTypes = null;
        private bool isNew = false;
        private CheckBox ckSelectAssetHeader = null;
        public string Message = "";
        public string RefNo
        {
            get { return txtRefNo.Text; }
            set { }
        }
        public int ObjectID
        {
            get { return CurrentTransaction.ObjectID; }
        }
        public bool IsSendMail
        {
            get { return CurrentTransaction.IsSendMail; }
        }
        public bool IsSendMailKH
        {
            get { return CurrentTransaction.IsSendMailKH; }
        }
        #endregion Properties and Variable

        #region Private Method
        private void InitComboboxData()
        {
            CCoreService service = new CCoreService();
            string inputValue = "<InputValue UserID=\"14\" />";
            inputValue += "<RequestParams Function='GetPerson' FilterCode='BANK'/>";
            //inputValue += "<RequestParams Function='FilterParaData' ListFunction='VoucherActionType'/>";
            string datacsv = service.GetContextData(CSession.CLIENT_KEY, CXML.HtmlEnCode(inputValue));

           

            //directionDataSource = CObjectMapper.FromCSV<CParaData>(datacsv, 2);
            //txtDirection.DisplayMember = "Name";
            //txtDirection.ValueMember = "ID";
            //txtDirection.DataSource = directionDataSource;

            //IList<CParaData> actionlist = CObjectMapper.FromCSV<CParaData>(datacsv, 3); 
            //txtVoucherActionType.DisplayMember = "Name";
           // txtVoucherActionType.ValueMember = "Value";
            //txtVoucherActionType.DataSource = actionlist;
           

            directionDataSource = CObjectMapper.FromCSV<CPerson>(datacsv, 1);
            //txtDirection.DisplayMember = "Name";
            //txtDirection.ValueMember = "ID";
            //txtDirection.DataSource = directionDataSource;

            txtKHTX.Items.Clear();

            foreach (CPerson d in directionDataSource)
            {
                txtKHTX.Items.Add(new Core.AutoComplete.AutoCompleteEntry( d.Name,d.Code, d.Name,d.Address) {Value= d.ID,DisplayMemberSub=d.Code + " - "  +d.Address,Tag=d });
            }
        }

        /*
        private void InitAssetOwnnerGridColumn()
        {
            grAssetOwner.Columns.Clear();
            grAssetOwner.AutoGenerateColumns = false;
            DataGridViewButtonColumn btnColumn = new DataGridViewButtonColumn();
            btnColumn.Name = "colDelete";
            btnColumn.HeaderText = "";
            btnColumn.Text = "-";
            btnColumn.UseColumnTextForButtonValue = true;
            btnColumn.Width = 20;
            grAssetOwner.Columns.Add(btnColumn);
            //grAsset.Columns.Add(new DataGridViewTextBoxColumn() { Name = "colType", HeaderText = "Loai TS", DataPropertyName = "AssetTypeName",Width=60,CellTemplate=new DataGridViewTextBoxCell()});
            grAssetOwner.Columns.Add(new DataGridViewTextBoxColumn() { Name = "colObjectID", HeaderText = "ID", DataPropertyName = "ObjectIDCardNumber", Width = 80, CellTemplate = new DataGridViewTextBoxCell() });
            grAssetOwner.Columns.Add(new DataGridViewTextBoxColumn() { Name = "colObjectName", HeaderText = "Tên", DataPropertyName = "ObjectName", Width = 150, CellTemplate = new DataGridViewTextBoxCell() });
            grAssetOwner.Columns.Add(new DataGridViewTextBoxColumn() { Name = "colObjectAddress", HeaderText = "Địa chỉ", DataPropertyName = "ObjectAddress", Width = 200, CellTemplate = new DataGridViewTextBoxCell() });

            grAssetOwner.CellContentClick -= new DataGridViewCellEventHandler(grAssetOwner_CellContentClick);
            grAssetOwner.CellContentClick += new DataGridViewCellEventHandler(grAssetOwner_CellContentClick);
        }
        private void InitWarranterGridColumn()
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
            grWarranter.Columns.Add(new DataGridViewTextBoxColumn() { Name = "colAssetName", HeaderText = "Mã KHTX", DataPropertyName = "ObjectCode", Width = 80, CellTemplate = new DataGridViewTextBoxCell() });
            grWarranter.Columns.Add(new DataGridViewTextBoxColumn() { Name = "colLicenseNumber", HeaderText = "Tên", DataPropertyName = "ObjectName", Width = 150, CellTemplate = new DataGridViewTextBoxCell() });
            grWarranter.Columns.Add(new DataGridViewTextBoxColumn() { Name = "colNumberPlate", HeaderText = "Địa chỉ", DataPropertyName = "ObjectAddress", Width = 200, CellTemplate = new DataGridViewTextBoxCell() });

            grWarranter.CellContentClick -= new DataGridViewCellEventHandler(grWarranter_CellContentClick);
            grWarranter.CellContentClick += new DataGridViewCellEventHandler(grWarranter_CellContentClick);
        }
       */
        /*
        private void InitGridColumnTrain()
        {
            grAssetTrain.Columns.Clear();
            grAssetTrain.AutoGenerateColumns = false;
            DataGridViewButtonColumn btnColumn = new DataGridViewButtonColumn();
            btnColumn.Name = "colDelete";
            btnColumn.HeaderText = "";
            btnColumn.Text = "-";
            btnColumn.UseColumnTextForButtonValue = true;
            btnColumn.Width = 20;
            grAssetTrain.Columns.Add(btnColumn);

            DataGridViewComboBoxColumn colRegisType = new DataGridViewComboBoxColumn();
            colRegisType.Name = "colRegisType";
            colRegisType.HeaderText = "Thêm/Bớt";
            colRegisType.DataPropertyName = "RegisType";
            colRegisType.Width = 100;
            colRegisType.CellTemplate = new DataGridViewComboBoxCell();
            colRegisType.Visible = true;
            colRegisType.DisplayMember = "Name";
            colRegisType.ValueMember = "ID";
            colRegisType.DataSource = gridAcctionType;
            grAssetTrain.EditMode = DataGridViewEditMode.EditOnEnter;

            DataGridViewCheckBoxColumn colSelected = new DataGridViewCheckBoxColumn() { Name = "colSelectToPrint", HeaderText = "...", DataPropertyName = "Selected", Width = 30, CellTemplate = new DataGridViewCheckBoxCell(), Visible = true, Resizable = DataGridViewTriState.False };
            //AssetName
            DataGridViewComboBoxColumn colAssetName = new DataGridViewComboBoxColumn();
            colAssetName.Name = "colAssetName";
            colAssetName.HeaderText = "Tên tài sản";
            colAssetName.DataPropertyName = "AssetName";
            colAssetName.Width = 150;
            colAssetName.CellTemplate = new DataGridViewComboBoxCell();
            colAssetName.Visible = true;
            colAssetName.DisplayMember = "Name";
            colAssetName.ValueMember = "Name";
            colAssetName.DataSource = assetTypes;

            grAssetTrain.Columns.Add(colSelected);
            grAssetTrain.Columns.Add(new DataGridViewTextBoxColumn() { Name = "colAssetName", HeaderText = "Tên tài sản", DataPropertyName = "AssetName", Width = 130, CellTemplate = new DataGridViewTextBoxCell() });
            grAssetTrain.Columns.Add(new DataGridViewTextBoxColumn() { Name = "colDescription", HeaderText = "Diễn giải", DataPropertyName = "AssetDescription", AutoSizeMode = DataGridViewAutoSizeColumnMode.Fill, CellTemplate = new DataGridViewTextBoxCell() });
            grAssetTrain.Columns.Add(new DataGridViewTextBoxColumn() { Name = "colID", HeaderText = "ID", DataPropertyName = "ID", Width = 100, CellTemplate = new DataGridViewTextBoxCell(), Visible = false });

            grAssetTrain.Columns.Add(colRegisType);
            grAssetTrain.Columns.Add(new DataGridViewTextBoxColumn() { Name = "colRefNo", HeaderText = "Số TB", DataPropertyName = "RefNo", Width = 100, CellTemplate = new DataGridViewTextBoxCell(), Visible = true, ReadOnly = true });

            grAssetTrain.CellContentClick -= new DataGridViewCellEventHandler(grAsset_CellContentClick);
            grAssetTrain.CellContentClick += new DataGridViewCellEventHandler(grAsset_CellContentClick);

            grAssetTrain.CellEnter -= new DataGridViewCellEventHandler(grAsset_CellEnter);
            grAssetTrain.CellEnter += new DataGridViewCellEventHandler(grAsset_CellEnter);
            
            grAssetTrain.AllowUserToDeleteRows = true;
            grAssetTrain.AllowUserToAddRows = true;

            InitSelectAssetHeader(grAssetTrain, colSelected);
        }
        
        */
       
      
        private DateTime GetRefDateTime()
        {
            try
            {
                DateTime d = new DateTime();
                string s = string.Format("{0}-{1}-{2} {3}:{4}", txtYear.Text
                                            , txtMonth.Text
                                            , txtDay.Text
                                            , txtHour.Text
                                            , txtMin.Text);
                d = DateTime.Parse(s);
                return d;
            }
            catch
            {
                throw new Exception("Ngày giờ nhập không đúng.");
            }

        }

        private void SetRefDateTime(DateTime datetime)
        {
            txtHour.Text = datetime.Hour.ToString();
            txtMin.Text = datetime.Minute.ToString();
            txtDay.Text = datetime.Day.ToString();
            txtMonth.Text = datetime.Month.ToString();
            txtYear.Text = datetime.Year.ToString();
        }


        #endregion

        #region Event Handler

       

        void txtCQCN_SelectedItemChanged(object sender, EventArgs e)
        {
            if (txtKHTX.SelectedItem == null) return;
            if (txtKHTX.SelectedItem.Tag == null) return;
            if (txtKHTX.SelectedItem.Tag is CPerson)
            {
                CPerson p = txtKHTX.SelectedItem.Tag as CPerson;

                txtAddress.Text = p.Address;
               // txtObjectEmail.Text = p.Email;
                //throw new NotImplementedException();
            }

        }

       

        private void comboKeyPressed(ComboBox combo)
        {
            combo.DroppedDown = true;

            object[] originalList = (object[])combo.Tag;
            if (originalList == null)
            {
                // backup original list
                originalList = new object[combo.Items.Count];
                combo.Items.CopyTo(originalList, 0);
                combo.Tag = originalList;
            }

            // prepare list of matching items
            string s = combo.Text.ToLower();
            IEnumerable<object> newList = originalList;
            if (s.Length > 0)
            {
                newList = originalList.Where(item => item.ToString().ToLower().Contains(s));
            }

            // clear list (loop through it, otherwise the cursor would move to the beginning of the textbox...)
            while (combo.Items.Count > 0)
            {
                combo.Items.RemoveAt(0);
            }

            // re-set list
            combo.Items.AddRange(newList.ToArray());
        }

        private void TextBox_Enter(object sender, EventArgs e)
        {
            try
            {
                if (sender is TextBox)
                {
                    ((TextBox)sender).SelectAll();
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
            }
        }
        #endregion Event Handler

        #region Publish Methods
        public void InitControl(string RegisTransRefNo)
        {
            //Lay du lieu tu so don dang ky
            InitComboboxData();
            //InitGridColumn();
            CCoreService service = new CCoreService();
            string inputValue = string.Format("<RequestParams Function='GetTransaction_Asset' RefType='28' RegisTransRefNo='{0}' Context=\"{1}\" />", RegisTransRefNo,"TOOL_PRINT");
            //inputValue = string.Format("<RequestParams Function='GetTransaction_Asset' RefType='21' RefNo='{0}' />", RegisTransRefNo);
            //inputValue = inputValue + string.Format("<RequestParams Function='GetTransaction_Asset' RefType='21' RefNo='{0}' Context='AssetsList'/>", RegisTransRefNo);
            inputValue = inputValue + string.Format("<RequestParams Function='GetTransaction_Asset' RefType='21' RefNo='{0}' Context='WarranterList'/>", RegisTransRefNo);
            //inputValue = inputValue + string.Format("<RequestParams Function='GetTransaction_Asset' RefType='21' RefNo='{0}' Context='AssetOwnerList'/>", RegisTransRefNo);
            inputValue = inputValue + "<RequestParams Function='FilterParaData' ListFunction='VoucherActionType'/>";
            string datacsv = service.GetContextData(CSession.CLIENT_KEY, inputValue);
            IList<CTransaction> trans = CObjectMapper.FromCSV<CTransaction>(datacsv, 1);
            
            List<Person> waranter = CObjectMapper.FromCSV<Person>(datacsv, 2);
            if (waranter == null) waranter = new List<Person>();
            
            IList<CParaData> actionlist = CObjectMapper.FromCSV<CParaData>(datacsv, 3);
            gridAcctionType = new List<CParaData>();
            gridAcctionType.Add(new CParaData(){Name="...",ID=0,Value="0"});
            foreach (CParaData para in actionlist)
            {
                if (para.ID == 93 || para.ID == 95)
                {
                    gridAcctionType.Add(para);
                }
            }

            if (trans!=null && trans.Count > 0)
            {
               
                //InitAssetOwnnerGridColumn();
                //InitWarranterGridColumn();
                //Neu RefNo = Empty thi lay RefNo moi tu va enable textbox cho phep edit RefNo
                //Khoa lai chuc nang Edit RefNo 
                if (string.IsNullOrEmpty(trans[0].RefNo))
                {
                    inputValue = string.Format("<InputValue RefType='28' RefDate='{0}'/>", DateTime.Now.ToString("yyyy-MM-dd"));
                    CRefNo objRefNo = service.GetNextRefNo(inputValue);
                    trans[0].RefNo = objRefNo.RefNo;
                    txtRefNo.Enabled = false;
                    pnDate.Enabled = false;
                    isNew = true;
                }
                else
                {
                    txtRefNo.Enabled = false;
                    pnDate.Enabled = false;
                    isNew = false;
                }
                txtRefNo.Text = trans[0].RefNo;

                SetRefDateTime(trans[0].RefDate);
                //txtRefDate.Value = trans[0].RefDate;


                txtRegisTransRefNo.Text = trans[0].RegisTransRefNo;
                //txtOldRefNo.Text = trans[0].OldRefNo;
                //txtAssetType.SelectedValue = trans[0].AssetType.ToString();
                //txtDirection.SelectedValue = trans[0].ObjectID.ToString();
                if (trans[0].WarranterID > 0)
                {
                    txtKHTX.SelectedValue = trans[0].WarranterID;
                    txtAddress.Text = trans[0].WarranterAddress;
                }else if(trans[0].ID > 0)
                {
                    txtKHTX.Text = trans[0].WarranterName;
                    txtAddress.Text = trans[0].WarranterAddress;
                }
                else
                {
                    if(waranter !=null && waranter.Count>0)
                    {
                        txtKHTX.Text = waranter[0].ObjectName;
                        txtAddress.Text = waranter[0].ObjectAddress;
                    }
                }
                txtReason.Text = trans[0].Note;
                //txtVoucherActionType.SelectedValue = trans[0].Type.ToString();
                
                //txtObjectEmail.Text = trans[0].ObjectEmail;
                //txtWarranterEmail.Text = trans[0].WarranterEmail;
                //lbAttachName.Text = trans[0].FileNumber;
                CurrentTransaction = trans[0];
                //trans[0].Assets = assets;
               
                
                //SetAssetToGrid();
                //SetDefaultAssetName(grAsset);
                //SetDefaultAssetName(grAssetOther);
                //BindingSource Ownnersource = new BindingSource();
                //Ownnersource.DataSource = CurrentTransaction.AssetOwnnerList;
                //grAssetOwner.DataSource = Ownnersource;

                //BindingSource warrantersource = new BindingSource();
                //warrantersource.DataSource = CurrentTransaction.WarranterList;
                //grWarranter.DataSource = warrantersource;
            }
            //raise su kien de sua du lieu cot loai dang ky
            //txtVoucherActionType_SelectedIndexChanged(null, null);

            //Mac dinh check all
            if (ckSelectAssetHeader != null)
            {
                ckSelectAssetHeader.Checked = true;
                //ckSelectAssetHeader_CheckedChanged(null, null);
            }
        }

        public bool UpdateTransaction()
        {

            // == Kiem tra RefNo truoc neu refno moi
            if (isNew)
            {
                string inputValue = string.Format("<InputValue RefType='28' RefDate='{0}'/>", DateTime.Now.ToString("yyyy-MM-dd"));
                CRefNo objRefNo = CServiceReference.CoreService.GetNextRefNo(inputValue);
                int compareResult = string.Compare(objRefNo.RefNo, txtRefNo.Text ,true );
                if (compareResult >0)
                {
                    DialogResult dr= ShowQuestion("Số công văn đã thay đổi, số mới là:" + objRefNo.RefNo +". Bạn có muốn in với số mới không?");
                    if (dr == DialogResult.Yes)
                    {
                        txtRefNo.Text  = objRefNo.RefNo;
                    }
                    else
                    {
                        return false;
                    }
                }

            }
           // CurrentTransaction.OldRefNo = txtOldRefNo.Text;
            //CurrentTransaction.AssetType = int.Parse(txtAssetType.SelectedValue.ToString());
            CurrentTransaction.RefDate = GetRefDateTime();
            //CurrentTransaction.RefNo = txtRefNo.Text;// CurrentTransaction.RegisTransRefNo;
            //CurrentTransaction.RefType = 21;
            //CurrentTransaction.Type = int.Parse(txtVoucherActionType.SelectedValue.ToString());
            //CurrentTransaction.ObjectID = int.Parse(txtDirection.SelectedValue.ToString());
            CurrentTransaction.Note = txtReason.Text;
            CurrentTransaction.SendGCNEmail = txtEmail.Text;
            if (txtKHTX.SelectedItem != null)
            {
                CurrentTransaction.WarranterID = (int)txtKHTX.SelectedItem.Value;
                CurrentTransaction.WarranterName = txtKHTX.Text;
                CurrentTransaction.WarranterAddress = txtAddress.Text;
                //CurrentTransaction.ObjectEmail = txtObjectEmail.Text;
            }
            else
            {
                CurrentTransaction.WarranterID = 0;
                CurrentTransaction.WarranterName = txtKHTX.Text;
                CurrentTransaction.WarranterAddress = txtAddress.Text;
                //CurrentTransaction.ObjectEmail = txtObjectEmail.Text;
            }

            //CurrentTransaction.IsSendMail = chkSendMail.Checked;
            //CurrentTransaction.IsSendMailKH = chkSendEmailKH.Checked;
            //CurrentTransaction.WarranterEmail = txtWarranterEmail.Text;

            
            string requestparams = CurrentTransaction.GetRequestParams("Function='Transaction_Asset' Action='UPDATE' Context='TOOL'");
            CCoreService service = new CCoreService();
            requestparams = CXML.AddAuthenticate(requestparams);
            string messageCSV = service.ExecuteAction(CSession.CLIENT_KEY, CXML.HtmlEnCode(requestparams));
            IList<FWS.TTDKGDTS.ImportTool.BusinessObject.CApplicationMessage> message = CObjectMapper.FromCSV<FWS.TTDKGDTS.ImportTool.BusinessObject.CApplicationMessage>(messageCSV, 1);

            if (message[0].Result == null || message[0].Result.ToString().Equals("") || message[0].Result.ToString().Equals("0"))
            {
                Message = message[0].Description;
                //MessageBox.Show(message[0].Description);
                return false;
            }

            return true;

        }

        public bool ValidateInput()
        {
           
            if (string.IsNullOrEmpty(txtKHTX.Text))
            {
                Message = "Xin hãy chọn bên bảo đảm.";
                return false;
            }
            

            return true;
        }

        public void ProcessAsset()
        {
          
            //List<Asset> assetTrain = ((BindingSource)grAssetTrain.DataSource).DataSource as List<Asset>;
            //assetOther.ForEach((x) =>
            //{
            //    x.AssetType = 2;
             //   CurrentTransaction.Assets.Add(x);
            //});
        }



        #endregion Publish Methods

        /// <summary>
        /// Tra ve trang thai dong trong luoi cua tab
        /// 
        /// </summary>
        /// <param name="tb"></param>
        /// <param name="grid"></param>
        /// <returns>TabName [x/y]</returns>
        private string GetAssetTabTile(TabPage tb, CDataGridView grid)
        {
            string s = "";
            string tabName = tb.Text;
            return tabName;
            /*
            if (tabName.Contains("[") && tabName.Contains("]"))
            {
                tabName = tabName.Substring(0, tabName.IndexOf("[")).Trim() ;
            }
            int totalRow = 0;
            int selectedCount = 0;
            if (grid.DataSource == null) return tabName;
            BindingSource source = grid.DataSource as BindingSource;
            List<Asset> list = source.DataSource as List<Asset>;
            totalRow = list.Count;
            selectedCount = list.Count((x) => { return x.Selected; });

            s = string.Format("{0} [{1}/{2}]",tabName, totalRow, selectedCount);
            return s;
             * */
        }


        private void SendEmail()
        {
            string context = "HANOI_TBHUY";
            //int ReportID = 18;
            //Luu thong tin
            //UpdateInfo();

            if (UpdateTransaction())
            {

                string inputValue = "<RequestParams Context=\"{0}\" RegisTransRefNo=\"{1}\" ViewID=\"35\" ViewerID=\"25\" RefNo=\"{2}\" ObjectID=\"{3}\" Email=\"{4}\" IncludeSign=\"1\"/>";
                inputValue = string.Format(inputValue, context, CXML.HtmlEnCode(this.CurrentTransaction.RegisTransRefNo), CXML.HtmlEnCode(this.RefNo), this.ObjectID, txtEmail.Text);
                inputValue = CXML.AddAuthenticate(inputValue);

                string result = CServiceReference.AssetService.SendReport(CSession.CLIENT_KEY, inputValue);
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
            else
            {
                ShowError(Message);
            }
        }

        private BusinessObject.CApplicationMessage UpdateInfo()
        {
            string inputValue = "<RequestParams RefType=\"28\" Context=\"TOOL\" Function=\"Transaction_Asset\" Action=\"UpdateSendEmail\" ID=\"{0}\" Email=\"{1}\" />";
            inputValue = string.Format(inputValue, this.CurrentTransaction.ID,  txtEmail.Text);
            inputValue = CXML.AddAuthenticate(inputValue);
            string result = CServiceReference.CoreService.ExecuteAction(CSession.CLIENT_KEY, inputValue);
            List<BusinessObject.CApplicationMessage> mess = CObjectMapper.FromCSV<BusinessObject.CApplicationMessage>(result);
            if (mess != null && mess.Count > 0) return mess[0];
            return null;
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
    }
}
