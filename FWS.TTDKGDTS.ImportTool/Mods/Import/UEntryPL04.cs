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
    public partial class UEntryPL04 : UBase
    {
        #region Contructor
        public UEntryPL04()
        {
            InitializeComponent();
            txtCQCN.SelectedItemChanged += new EventHandler(txtCQCN_SelectedItemChanged);
            
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
            string inputValue = "<InputValue UserID=\"14\" /><RequestParams Function='FilterParaData' ListFunction='AssetType'/>";
            inputValue += "<RequestParams Function='GetPerson' FilterCode='CQCN'/>";
            inputValue += "<RequestParams Function='FilterParaData' ListFunction='VoucherActionType'/>";
            string datacsv = service.GetContextData(CSession.CLIENT_KEY, CXML.HtmlEnCode(inputValue));

            assetTypes = CObjectMapper.FromCSV<CParaData>(datacsv, 1);
            txtAssetType.DisplayMember = "Name";
            txtAssetType.ValueMember = "Value";
            txtAssetType.DataSource = assetTypes;

            //directionDataSource = CObjectMapper.FromCSV<CParaData>(datacsv, 2);
            //txtDirection.DisplayMember = "Name";
            //txtDirection.ValueMember = "ID";
            //txtDirection.DataSource = directionDataSource;

            IList<CParaData> actionlist = CObjectMapper.FromCSV<CParaData>(datacsv, 3); 
            txtVoucherActionType.DisplayMember = "Name";
            txtVoucherActionType.ValueMember = "Value";
            txtVoucherActionType.DataSource = actionlist;
           

            directionDataSource = CObjectMapper.FromCSV<CPerson>(datacsv, 2);
            //txtDirection.DisplayMember = "Name";
            //txtDirection.ValueMember = "ID";
            //txtDirection.DataSource = directionDataSource;

            txtCQCN.Items.Clear();

            foreach (CPerson d in directionDataSource)
            {
                txtCQCN.Items.Add(new Core.AutoComplete.AutoCompleteEntry(d.Name, d.Name,d.Address) {Value= d.ID,DisplayMemberSub=d.Address,Tag=d });
            }
        }

        private void InitGridColumnCar()
        {
            grAsset.Columns.Clear();
            grAsset.AutoGenerateColumns = false;
            DataGridViewButtonColumn btnColumn = new DataGridViewButtonColumn();
            
            btnColumn.Name = "colDelete";
            btnColumn.HeaderText = "";
            btnColumn.Text = "-";
            btnColumn.UseColumnTextForButtonValue = true;
            btnColumn.Width = 20;

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
            grAsset.EditMode = DataGridViewEditMode.EditOnEnter;

            DataGridViewCheckBoxColumn colSelected = new DataGridViewCheckBoxColumn() { Name = "colSelectToPrint", HeaderText = "...", DataPropertyName = "Selected", Width = 30, CellTemplate = new DataGridViewCheckBoxCell(), Visible = true, Resizable = DataGridViewTriState.True };
            DataGridViewCheckBoxColumn colIsModify = new DataGridViewCheckBoxColumn() { Name = "colIsModify", HeaderText = "C.T", DataPropertyName = "IsModify", Width = 30, CellTemplate = new DataGridViewCheckBoxCell(), Visible = true, Resizable = DataGridViewTriState.True };
            //AssetName
            DataGridViewComboBoxColumn colAssetName = new DataGridViewComboBoxColumn();
            colAssetName.Name = "colAssetName";
            colAssetName.HeaderText = "Tên tài sản";
            colAssetName.DataPropertyName = "AssetName";
            colAssetName.Width = 130;
            colAssetName.CellTemplate = new DataGridViewComboBoxCell();
            colAssetName.Visible = true;
            colAssetName.DisplayMember = "Name";
            colAssetName.ValueMember = "Name";
            colAssetName.DataSource = assetTypes;

            //grAsset.Columns.Add(btnColumn);
            //grAsset.Columns.Add(new DataGridViewTextBoxColumn() { Name = "colType", HeaderText = "Loai TS", DataPropertyName = "AssetTypeName",Width=60,CellTemplate=new DataGridViewTextBoxCell()});
            grAsset.Columns.Add(colSelected);
            grAsset.Columns.Add(colIsModify);
            // grAsset.Columns.Add(colAssetName);
            grAsset.Columns.Add(new DataGridViewTextBoxColumn() { Name = "colAssetName", HeaderText = "Tên tài sản", DataPropertyName = "AssetName", Width = 130, CellTemplate = new DataGridViewTextBoxCell() });
            grAsset.Columns.Add(new DataGridViewTextBoxColumn() { Name = "colLicenseNumber", HeaderText = "Số khung", DataPropertyName = "AssetLicenseNumber", Width = 130, CellTemplate = new DataGridViewTextBoxCell(),ReadOnly=true });
            grAsset.Columns.Add(new DataGridViewTextBoxColumn() { Name = "colNumberPlate", HeaderText = "Biển số xe", DataPropertyName = "AssetNumberPlate", Width = 100, CellTemplate = new DataGridViewTextBoxCell() });
            grAsset.Columns.Add(new DataGridViewTextBoxColumn() { Name = "colID", HeaderText = "ID", DataPropertyName = "ID", Width = 100, CellTemplate = new DataGridViewTextBoxCell(),Visible = false });
            grAsset.Columns.Add(new DataGridViewTextBoxColumn() { Name = "colModifyNote", HeaderText = "Nội dung cải tạo", DataPropertyName = "ModifyNote", Width = 250, CellTemplate = new DataGridViewTextBoxCell() });
            grAsset.Columns.Add(colRegisType);
            grAsset.Columns.Add(new DataGridViewTextBoxColumn() { Name = "colRefNo", HeaderText = "Số TB", DataPropertyName = "RefNo", Width = 100, CellTemplate = new DataGridViewTextBoxCell(), Visible = true, ReadOnly = true });
            grAsset.CellContentClick -= new DataGridViewCellEventHandler(grAsset_CellContentClick);
            grAsset.CellEnter -= new DataGridViewCellEventHandler(grAsset_CellEnter);
            grAsset.CellEnter += new DataGridViewCellEventHandler(grAsset_CellEnter);
            //grAsset.CellContentClick += new DataGridViewCellEventHandler(grAsset_CellContentClick);
            grAsset.AllowUserToAddRows = false;
            grAsset.AllowUserToDeleteRows = false;

            InitSelectAssetHeader(grAsset,colSelected);
        }

        void grAsset_CellEnter(object sender, DataGridViewCellEventArgs e)
        {
            if (grAsset.Columns[e.ColumnIndex] is DataGridViewComboBoxColumn)
            {
                SendKeys.Send("{F4}");
            }
            //if( grAsset[e.ColumnIndex, e.RowIndex].EditType.ToString() == "System.Windows.Forms.DataGridViewComboBoxEditingControl")
            //{
            //    SendKeys.Send("{F4}");
            //}
            //throw new NotImplementedException();
        }
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
        private void InitGridColumnOther()
        {
            grAssetOther.Columns.Clear();
            grAssetOther.AutoGenerateColumns = false;
            DataGridViewButtonColumn btnColumn = new DataGridViewButtonColumn();
            btnColumn.Name = "colDelete";
            btnColumn.HeaderText = "";
            btnColumn.Text = "-";
            btnColumn.UseColumnTextForButtonValue = true;
            btnColumn.Width = 20;
            grAssetOther.Columns.Add(btnColumn);

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
            grAssetOther.EditMode = DataGridViewEditMode.EditOnEnter;

            DataGridViewCheckBoxColumn colSelected = new DataGridViewCheckBoxColumn() { Name = "colSelectToPrint", HeaderText = "...", DataPropertyName = "Selected", Width = 30, CellTemplate = new DataGridViewCheckBoxCell(), Visible = true,Resizable = DataGridViewTriState.False };
            DataGridViewCheckBoxColumn colIsModify = new DataGridViewCheckBoxColumn() { Name = "colIsModify", HeaderText = "C.T", DataPropertyName = "IsModify", Width = 30, CellTemplate = new DataGridViewCheckBoxCell(), Visible = true, Resizable = DataGridViewTriState.True };
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

            grAssetOther.Columns.Add(colSelected);
            grAssetOther.Columns.Add(colIsModify);
            //grAssetOther.Columns.Add(colAssetName);
            //grAsset.Columns.Add(new DataGridViewTextBoxColumn() { Name = "colType", HeaderText = "Loai TS", DataPropertyName = "AssetTypeName",Width=60,CellTemplate=new DataGridViewTextBoxCell()});
            grAssetOther.Columns.Add(new DataGridViewTextBoxColumn() { Name = "colAssetName", HeaderText = "Tên tài sản", DataPropertyName = "AssetName", Width = 130, CellTemplate = new DataGridViewTextBoxCell() });
            grAssetOther.Columns.Add(new DataGridViewTextBoxColumn() { Name = "colDescription", HeaderText = "Diễn giải", DataPropertyName = "AssetDescription", AutoSizeMode = DataGridViewAutoSizeColumnMode.Fill, CellTemplate = new DataGridViewTextBoxCell() });
            grAssetOther.Columns.Add(new DataGridViewTextBoxColumn() { Name = "colID", HeaderText = "ID", DataPropertyName = "ID", Width = 100, CellTemplate = new DataGridViewTextBoxCell(), Visible = false });
            grAssetOther.Columns.Add(new DataGridViewTextBoxColumn() { Name = "colModifyNote", HeaderText = "Nội dung cải tạo", DataPropertyName = "ModifyNote", Width = 250, CellTemplate = new DataGridViewTextBoxCell() });

            grAssetOther.Columns.Add(colRegisType);
            grAssetOther.Columns.Add(new DataGridViewTextBoxColumn() { Name = "colRefNo", HeaderText = "Số TB", DataPropertyName = "RefNo", Width = 100, CellTemplate = new DataGridViewTextBoxCell(), Visible = true, ReadOnly = true });

            grAssetOther.CellContentClick -= new DataGridViewCellEventHandler(grAsset_CellContentClick);
            grAssetOther.CellContentClick += new DataGridViewCellEventHandler(grAsset_CellContentClick);

            grAssetOther.CellEnter -= new DataGridViewCellEventHandler(grAsset_CellEnter);
            grAssetOther.CellEnter += new DataGridViewCellEventHandler(grAsset_CellEnter);
            //grAssetOther.CellValueChanged += grAssetOther_CellValueChanged;
            grAssetOther.AllowUserToDeleteRows = true;
            grAssetOther.AllowUserToAddRows = true;

            InitSelectAssetHeader(grAssetOther,colSelected);
        }
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
        private void InitSelectAssetHeader(CDataGridView grid, DataGridViewCheckBoxColumn c1)
        {
            CheckBox chkAssetHeader = new CheckBox();
            if(ckSelectAssetHeader ==null) ckSelectAssetHeader = new CheckBox();
            //Get the column header cell bounds
            Rectangle rect =
                grid.GetCellDisplayRectangle(0, -1, true);
            chkAssetHeader.Size = new Size(18, 18);
            chkAssetHeader.Margin = new System.Windows.Forms.Padding(3);
            //Change the location of the CheckBox to make it stay on the header
            chkAssetHeader.Location = new Point(6, 3);
            chkAssetHeader.CheckedChanged -= new EventHandler(chkAssetHeader_CheckedChanged);
            chkAssetHeader.CheckedChanged += new EventHandler(chkAssetHeader_CheckedChanged);
            //Add the CheckBox into the DataGridView
            if (!grid.Controls.Contains(chkAssetHeader))
            {
                grid.Controls.Add(chkAssetHeader);
            }
        }

        void chkAssetHeader_CheckedChanged(object sender, EventArgs e)
        {
            CheckBox chk = sender as CheckBox;
            CDataGridView grid = null;
            if(chk.Parent !=null) grid = chk.Parent as CDataGridView;
            if (grid != null)
            {
                for (int j = 0; j < grid.RowCount; j++)
                {
                    grid.Rows[j].Cells["colSelectToPrint"].Value = chk.Checked;
                }
                grid.EndEdit();
            }
            TabPage tb = grid.Parent as TabPage;
            if (tb != null)
            {
                tb.Text = GetAssetTabTile(tb, grid);
            }
        }

        private void GetInfoByOriginalRefNo(string OrgRefNo)
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
            if (asset == null) asset = new List<Asset>();
            if (ownner == null) ownner = new List<Person>();

            if (trans != null && trans.Count > 0)
            {
                txtAssetType.SelectedValue = trans[0].AssetType.ToString();
                //txtDirection.SelectedValue = trans[0].ObjectID;
                txtCQCN.SelectedValue = trans[0].ObjectID;
                if (CurrentTransaction.Assets == null || CurrentTransaction.Assets.Count == 0)
                    CurrentTransaction.Assets = asset;

                if(CurrentTransaction.AssetOwnerID ==0 && !string.IsNullOrEmpty(CurrentTransaction.AssetOwnerName))
                    CurrentTransaction.AssetOwnerID = trans[0].AssetOwnerID;

                if(string.IsNullOrEmpty(CurrentTransaction.AssetOwnerName))
                    CurrentTransaction.AssetOwnerName = trans[0].AssetOwnerName;

                if (string.IsNullOrEmpty(CurrentTransaction.AssetPersonalCode))
                    CurrentTransaction.AssetPersonalCode = trans[0].AssetPersonalCode;

                if(CurrentTransaction.AssetOwnnerList == null || CurrentTransaction.AssetOwnnerList.Count ==0)
                    CurrentTransaction.AssetOwnnerList = ownner;

                SetAssetToGrid();
                //BindingSource source = new BindingSource();
                //source.DataSource = CurrentTransaction.Assets;
                //grAsset.DataSource = source;

                BindingSource OwnnerSource = new BindingSource();
                OwnnerSource.DataSource = CurrentTransaction.AssetOwnnerList;
                grAssetOwner.DataSource = OwnnerSource;
            }

        }

      
        private void SetDefaultAssetName(CDataGridView grid)
        {
            if (grid == null) return;
            if (grid.DataSource == null) return;
            if (!(grid.DataSource is BindingSource)) return;
            BindingSource source = grid.DataSource as BindingSource;
            if (!(source.DataSource is List<Asset>)) return;
            List<Asset> assets = source.DataSource as List<Asset>;

            string defaultCar = "Ôtô";
            string defaultShip = "Tàu";
            string defaultTrain = "Đầu kéo";
            //string defaultName = "";
            //if (CurrentTransaction.AssetType == 0) defaultName = defaultCar;
            //if (CurrentTransaction.AssetType == 1) defaultName = defaultShip;
            //if (CurrentTransaction.AssetType == 2) defaultName = defaultTrain;

            //defaultName = ((CParaData)txtAssetType.SelectedItem).Name;

            for (int i = 0; i < assets.Count; i++)
            {
                if (assets[i].AssetType == 0 && grid.Equals(grAssetOther))
                {
                    assets[i].AssetType = 1;
                }
                //if (assets[i].AssetType == 0 && grid.Equals(grAssetTrain))
                //{
                //    assets[i].AssetType = 2;
                //}
                if (string.IsNullOrEmpty(assets[i].AssetName)
                    || IsDefaultName(assets[i].AssetName))
                {

                    switch (getParentAssetType(assets[i].AssetType))
                    {
                        case 0: assets[i].AssetName = defaultCar; break;
                        case 1: assets[i].AssetName = defaultShip; break;
                        case 2: assets[i].AssetName = defaultTrain; break;
                        default: assets[i].AssetName = defaultCar; break;
                    }
                    //assets[i].AssetName = defaultName;
                }
            }


        }

        private bool IsDefaultName(string name)
        {
            if (txtAssetType.DataSource != null && txtAssetType.DataSource is IList<CParaData>)
            {
                for (int i = 0; i < ((IList<CParaData>)txtAssetType.DataSource).Count; i++)
                {
                    if (((IList<CParaData>)txtAssetType.DataSource)[i].Name.Trim().Equals(name.Trim(), StringComparison.OrdinalIgnoreCase))
                    {
                        return true;
                    }
                }
            }
            return false;
        }
        #endregion

        #region Event Handler

        void grAsset_CellContentClick(object sender, DataGridViewCellEventArgs e)
        {
            try
            {
                if (e.ColumnIndex == 0)
                {
                    //delete row
                    object objID = grAsset.Rows[e.RowIndex].Cells["colID"].Value;
                    int id = 0;
                    if (objID != null) int.TryParse(objID.ToString(), out id);
                    if (id == 0)
                    {
                        grAsset.Rows.Remove(grAsset.Rows[e.RowIndex]);
                    }
                    else
                    {
                        ShowError("Dòng này đã được lưu trước đó, không thể xóa.");
                    }
                }
                if (e.ColumnIndex == 1)//cot select
                {
                    
                    CDataGridView grid = sender as CDataGridView;
                    //grid.RefreshEdit();
                    //grid.Refresh();
                    grid.CommitEdit(DataGridViewDataErrorContexts.Commit);
                    //grid.UpdateCellValue(e.ColumnIndex, e.RowIndex);
                    if (grid != null)
                    {
                        TabPage tb = grid.Parent as TabPage;
                        if (tb != null)
                        {
                            tb.Text = GetAssetTabTile(tb, grid);
                        }
                    }
                }
                
            }
            catch (Exception ex)
            {
                ShowError(ex.Message);
            }
        }
        void grAssetOwner_CellContentClick(object sender, DataGridViewCellEventArgs e)
        {
            try
            {
                if (e.ColumnIndex == 0)
                {
                    //delete row
                    grAssetOwner.Rows.Remove(grAssetOwner.Rows[e.RowIndex]);
                }
            }
            catch (Exception ex)
            {
                ShowError(ex.Message);
            }
        }
        
        void grAssetTrain_CellContentClick(object sender, DataGridViewCellEventArgs e)
        {
            try
            {
                if (e.ColumnIndex == 0)
                {
                    //delete row
                    //grAssetTrain.Rows.Remove(grAssetTrain.Rows[e.RowIndex]);
                }
            }
            catch (Exception ex)
            {
                ShowError(ex.Message);
            }
        }

        void grWarranter_CellContentClick(object sender, DataGridViewCellEventArgs e)
        {
            try{
                if (e.ColumnIndex == 0)
                {
                    //delete row
                    
                    grWarranter.Rows.Remove(grWarranter.Rows[e.RowIndex]);
                }
            }
            catch (Exception ex)
            {
                ShowError(ex.Message);
            }
        }

        void txtCQCN_SelectedItemChanged(object sender, EventArgs e)
        {
            if (txtCQCN.SelectedItem == null) return;
            if (txtCQCN.SelectedItem.Tag == null) return;
            if (txtCQCN.SelectedItem.Tag is CPerson)
            {
                CPerson p = txtCQCN.SelectedItem.Tag as CPerson;

                txtAddress.Text = p.Address;
                //txtObjectEmail.Text = p.Email;
                //throw new NotImplementedException();
            }

        }

        private void txtOldRefNo_Leave(object sender, EventArgs e)
        {
            try
            {
                GetInfoByOriginalRefNo(txtOldRefNo.Text);
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
            }
        }
        /*
        private void btnAddNewRow_Click(object sender, EventArgs e)
        {
            try
            {
                if (CurrentTransaction.Assets == null)
                {
                    CurrentTransaction.Assets = new List<Asset>();
                    SetAssetToGrid();
                    //BindingSource source = new BindingSource();
                    //source.DataSource = CurrentTransaction.Assets;
                    //grAsset.DataSource = source;
                }

                CurrentTransaction.Assets.Add(new Asset());
                ((BindingSource)grAsset.DataSource).ResetBindings(false);
                //grAsset.EndEdit();
                //grAsset.Rows.Add(1);
            }
            catch (Exception ex)
            {

            }
        }
        */
        private void txtOldRefNo_KeyUp(object sender, KeyEventArgs e)
        {
            try
            {
                if (e.KeyCode == Keys.Enter)
                {
                    GetInfoByOriginalRefNo(txtOldRefNo.Text);
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
            }
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

        private void txtAssetType_SelectedIndexChanged(object sender, EventArgs e)
        {
            return;
            /*
            try
            {
                if (txtAssetType.SelectedItem is CParaData)
                {
                    if (((CParaData)txtAssetType.SelectedItem).Value1.Equals("0"))
                    {
                        InitGridColumnCar();
                    }
                    else
                    {
                        InitGridColumnOther();
                    }
                }

                CurrentTransaction.AssetType = int.Parse(txtAssetType.SelectedValue.ToString());
                SetDefaultAssetName();

                BindingSource source = new BindingSource();
                source.DataSource = CurrentTransaction.Assets;

                grAsset.DataSource = source;
                txtVoucherActionType_SelectedIndexChanged(null, null);

            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
            }
             * */
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

        #endregion Event Handler

        #region Publish Methods
        public void InitControl(string RegisTransRefNo)
        {
            //Lay du lieu tu so don dang ky
            InitComboboxData();
            //InitGridColumn();
            CCoreService service = new CCoreService();
            string inputValue = string.Format("<RequestParams Function='GetTransaction_Asset' RefType='22' RegisTransRefNo='{0}' Context=\"{1}\" />", RegisTransRefNo,Context);
            //inputValue = string.Format("<RequestParams Function='GetTransaction_Asset' RefType='21' RefNo='{0}' />", RegisTransRefNo);
            inputValue = inputValue + string.Format("<RequestParams Function='GetTransaction_Asset' RefType='21' RefNo='{0}' Context='AssetsList'/>", RegisTransRefNo);
            inputValue = inputValue + string.Format("<RequestParams Function='GetTransaction_Asset' RefType='21' RefNo='{0}' Context='WarranterList'/>", RegisTransRefNo);
            inputValue = inputValue + string.Format("<RequestParams Function='GetTransaction_Asset' RefType='21' RefNo='{0}' Context='AssetOwnerList'/>", RegisTransRefNo);
            inputValue = inputValue + "<RequestParams Function='FilterParaData' ListFunction='VoucherActionType'/>";
            string datacsv = service.GetContextData(CSession.CLIENT_KEY, inputValue);
            IList<CTransaction> trans = CObjectMapper.FromCSV<CTransaction>(datacsv, 1);
            List<Asset> assets = CObjectMapper.FromCSV<Asset>(datacsv, 2);
            if (assets == null) assets = new List<Asset>();

            //Neu la don SCSS thì dữ liệu load lên là dữ liệu của đơn gốc chưa được sửa chữa
            //Phải lấy dữ liệu của đơn scss trong HTML chỉnh sửa lại
            if (trans.Count > 0 && HTMLTransaction != null
                && HTMLTransaction.TypeName.ToLower().Trim() == "Sửa chữa sai sót")
            {
                if (HTMLTransaction.Assets != null && HTMLTransaction.Assets.Count > 0)
                {
                    for (int i = 0; i < HTMLTransaction.Assets.Count; i++)
                    {
                        for (int j = 0; j < assets.Count; j++)
                        {
                            if ( HTMLTransaction.Assets[i].Status ==0 && assets[j].Status==0 
                                && HTMLTransaction.Assets[i].AssetLicenseNumber.Equals(assets[j].AssetLicenseNumber,StringComparison.OrdinalIgnoreCase))
                            {
                                //Danh dau la da map
                                HTMLTransaction.Assets[i].Status = 1;
                                assets[j].Status = 1;
                            }
                        }
                    }

                    for (int i = 0; i < HTMLTransaction.Assets.Count; i++)
                    {
                        if (HTMLTransaction.Assets[i].Status == 0)
                        {
                            for (int j = 0; j < assets.Count; j++)
                            {
                                if (assets[j].Status == 0)
                                {
                                    assets[j].AssetLicenseNumber = HTMLTransaction.Assets[i].AssetLicenseNumber;
                                    //Danh dau la da map
                                    HTMLTransaction.Assets[i].Status = 1;
                                    assets[j].Status = 1;
                                }
                            }
                        }
                    }
                    //Them moi vao neu ko map voi cai nao
                    for (int i = 0; i < HTMLTransaction.Assets.Count; i++)
                    {
                        if (HTMLTransaction.Assets[i].Status == 0)
                        {
                            Asset asset = new Asset();
                            asset.AssetDescription = HTMLTransaction.Assets[i].AssetDescription;
                            asset.AssetLicenseNumber = HTMLTransaction.Assets[i].AssetLicenseNumber;
                            asset.AssetName = HTMLTransaction.Assets[i].AssetName;
                            asset.AssetNumberPlate = HTMLTransaction.Assets[i].AssetNumberPlate;
                            asset.AssetType = HTMLTransaction.Assets[i].AssetType;
                            asset.AssetTypeName = HTMLTransaction.Assets[i].AssetTypeName;
                            asset.IsModify = HTMLTransaction.Assets[i].IsModify;
                            asset.ModifyNote = HTMLTransaction.Assets[i].ModifyNote;
                            assets.Add(asset);
                        }
                    }

                }
            }

            //Mac dinh check all
            assets.ForEach(x=>x.Selected= true);
            //for (int i = 0; i < assets.Count; i++)
            //{
            //    assets[i].Selected = true;
            //}

            List<Person> waranter = CObjectMapper.FromCSV<Person>(datacsv, 3);
            if (waranter == null) waranter = new List<Person>();
            List<Person> ownner = CObjectMapper.FromCSV<Person>(datacsv, 4);
            if (ownner == null) ownner = new List<Person>();

            IList<CParaData> actionlist = CObjectMapper.FromCSV<CParaData>(datacsv, 5);
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
                InitGridColumnCar();
                InitGridColumnOther();
                //InitGridColumnTrain();
                /*
                if (trans[0].AssetType == 0) //Oto
                {
                    InitGridColumnCar();

                }
                else
                {
                    InitGridColumnOther();
                }
                 * */
                InitAssetOwnnerGridColumn();
                InitWarranterGridColumn();
                //Neu RefNo = Empty thi lay RefNo moi tu va enable textbox cho phep edit RefNo
                //Khoa lai chuc nang Edit RefNo 
                if (string.IsNullOrEmpty(trans[0].ChildRefNo))
                {
                    inputValue = string.Format("<InputValue RefType='22' RefDate='{0}'/>", DateTime.Now.ToString("yyyy-MM-dd"));
                    CRefNo objRefNo = service.GetNextRefNo(inputValue);
                    trans[0].ChildRefNo = objRefNo.RefNo;
                    //txtRefNo.Enabled = false;
                    //pnDate.Enabled = false;
                    isNew = true;
                }
                else
                {
                    //txtRefNo.Enabled = false;
                    //pnDate.Enabled = false;
                    isNew = false;
                }
                //txtRefNo.Text = trans[0].ChildRefNo;

                //SetRefDateTime(trans[0].RefDate);
                //txtRefDate.Value = trans[0].RefDate;


                txtRegisTransRefNo.Text = trans[0].RegisTransRefNo;
                txtOldRefNo.Text = trans[0].OldRefNo;
                txtAssetType.SelectedValue = trans[0].AssetType.ToString();
                //txtDirection.SelectedValue = trans[0].ObjectID.ToString();
                txtCQCN.SelectedValue = trans[0].ObjectID;
                txtVoucherActionType.SelectedValue = trans[0].Type.ToString();
                //txtObjectEmail.Text = trans[0].ObjectEmail;
                //txtWarranterEmail.Text = trans[0].WarranterEmail;
                //lbAttachName.Text = trans[0].FileNumber;
                CurrentTransaction = trans[0];
                trans[0].Assets = assets;
                trans[0].AssetOwnnerList = ownner;
                trans[0].WarranterList = waranter;

                
                SetAssetToGrid();
                SetDefaultAssetName(grAsset);
                SetDefaultAssetName(grAssetOther);
                BindingSource Ownnersource = new BindingSource();
                Ownnersource.DataSource = CurrentTransaction.AssetOwnnerList;
                grAssetOwner.DataSource = Ownnersource;

                BindingSource warrantersource = new BindingSource();
                warrantersource.DataSource = CurrentTransaction.WarranterList;
                grWarranter.DataSource = warrantersource;
            }
            //raise su kien de sua du lieu cot loai dang ky
            txtVoucherActionType_SelectedIndexChanged(null, null);

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
            //if (isNew)
            //{
            //    string inputValue = string.Format("<InputValue RefType='22' RefDate='{0}'/>", DateTime.Now.ToString("yyyy-MM-dd"));
            //    CRefNo objRefNo = CServiceReference.CoreService.GetNextRefNo(inputValue);
            //    

            //}
            //CurrentTransaction.OldRefNo = txtOldRefNo.Text;
            //CurrentTransaction.AssetType = int.Parse(txtAssetType.SelectedValue.ToString());
           
            CurrentTransaction.Type = int.Parse(txtVoucherActionType.SelectedValue.ToString());
            
            if (txtCQCN.SelectedItem != null)
            {
                CurrentTransaction.ObjectID = (int)txtCQCN.SelectedItem.Value;
                CurrentTransaction.ObjectName = txtCQCN.Text;
                CurrentTransaction.ObjectAddress = txtAddress.Text;
                //CurrentTransaction.ObjectEmail = txtObjectEmail.Text;
            }
            else
            {
                CurrentTransaction.ObjectID = 0;
                CurrentTransaction.ObjectName = txtCQCN.Text;
                CurrentTransaction.ObjectAddress = txtAddress.Text;
                //CurrentTransaction.ObjectEmail = txtObjectEmail.Text;
            }

            //CurrentTransaction.IsSendMail = chkSendMail.Checked;
            ///CurrentTransaction.IsSendMailKH = chkSendEmailKH.Checked;
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

            //CCoreService service = new CCoreService();
            string reGetAssetAInputValue =  string.Format("<RequestParams Function='GetTransaction_Asset' RefType='21' RefNo='{0}' Context='AssetsList'/>", CurrentTransaction.RegisTransRefNo);
            string datacsv = service.GetContextData(CSession.CLIENT_KEY, reGetAssetAInputValue);
            List<Asset> assets = CObjectMapper.FromCSV<Asset>(datacsv, 1);
            if (CurrentTransaction != null && CurrentTransaction.Assets != null && assets != null)
            {
                for (int i = 0; i < CurrentTransaction.Assets.Count; i++)
                {
                    for (int j = 0; j < assets.Count; j++)
                    {
                        if (((CParaData)txtAssetType.SelectedItem).Value1.Equals("0"))
                        {
                            if (CurrentTransaction.Assets[i].AssetLicenseNumber == assets[j].AssetLicenseNumber)
                            {
                                assets[j].Selected = CurrentTransaction.Assets[i].Selected;
                            }
                        }
                        else
                        {
                            if (CurrentTransaction.Assets[i].AssetDescription == assets[j].AssetDescription)
                            {
                                assets[j].Selected = CurrentTransaction.Assets[i].Selected;
                            }
                        }
                        
                    }
                }
                CurrentTransaction.Assets = assets;
            }
            return true;

        }

        public bool ValidateInput()
        {
            if (txtVoucherActionType.SelectedValue ==null )
            {
                Message = "Xin hãy chọn loại đăng ký.";
                return false;
            }
            if (string.IsNullOrEmpty(txtCQCN.Text))
            {
                Message = "Xin hãy chọn cơ quan công an trước.";
                return false;
            }

            if (this.CurrentTransaction.Assets == null || this.CurrentTransaction.Assets.Count == 0)
            {
                Message = "Không có tài sản nào.";
                return false;
            }
            //Neu không chọn tài sản nào để in
            if (this.CurrentTransaction.Assets != null || this.CurrentTransaction.Assets.Count > 0)
            {
                int selectedCount = this.CurrentTransaction.Assets.Count(x => x.Selected);
                if (selectedCount == 0)
                {
                    Message = "Không tài sản nào được chọn.";
                    return false;
                }
            }

           

            if (txtVoucherActionType.SelectedValue ==null)
            {
                Message = "Phải chọn loại đăng ký.";
                txtVoucherActionType.Focus();
                return false;
            }

            

            return true;
        }

        public void ProcessAsset()
        {
            //Process AssetList
            CurrentTransaction.Assets.Clear();
            List<Asset> assetCars = ((BindingSource)grAsset.DataSource).DataSource as List<Asset>;
            assetCars.ForEach((x) =>
            {
                x.AssetType =0;
                CurrentTransaction.Assets.Add(x);
            });
            List<Asset> assetOther = ((BindingSource)grAssetOther.DataSource).DataSource as List<Asset>;
            assetOther.ForEach((x) =>
            {
                x.AssetType = 1;
                CurrentTransaction.Assets.Add(x);
            });
            //List<Asset> assetTrain = ((BindingSource)grAssetTrain.DataSource).DataSource as List<Asset>;
            //assetOther.ForEach((x) =>
            //{
            //    x.AssetType = 2;
             //   CurrentTransaction.Assets.Add(x);
            //});
        }

        private void SetAssetToGrid()
        {
            List<Asset> assetCars = new List<Asset>();
            List<Asset> assetOther = new List<Asset>();
            List<Asset> assetTrain = new List<Asset>();
            CurrentTransaction.Assets.ForEach((x) =>
            {
                if (getParentAssetType(x.AssetType) == 0)
                {
                    assetCars.Add(x);
                }
                else if (getParentAssetType(x.AssetType) == 1)
                {
                    assetOther.Add(x);
                }
                else if (getParentAssetType(x.AssetType) == 2)
                {
                    assetTrain.Add(x);
                }
            });

            BindingSource source = new BindingSource();
            source.DataSource = assetCars;// CurrentTransaction.Assets;
            grAsset.DataSource = source;
            tbXe.Text = GetAssetTabTile(tbXe, grAsset);

            BindingSource sourceOther = new BindingSource();
            sourceOther.DataSource = assetOther;// CurrentTransaction.Assets;
            grAssetOther.DataSource = sourceOther;
            tbTau.Text = GetAssetTabTile(tbTau, grAssetOther);

            //BindingSource sourceTrain = new BindingSource();
            //sourceTrain.DataSource = assetTrain;// CurrentTransaction.Assets;
            //grAssetTrain.DataSource = sourceTrain;
            ///tbTrain.Text = GetAssetTabTile(tbTrain, grAssetTrain);
        }


        #endregion Publish Methods

        private void grAsset_UserAddedRow(object sender, DataGridViewRowEventArgs e)
        {
            SetDefaultAssetName(grAsset);
           
        }

        private void txtVoucherActionType_SelectedIndexChanged(object sender, EventArgs e)
        {
            try
            {
                //Neu don thay doi thi moi hien thi cot Them/Bot len
                
                if (txtVoucherActionType.SelectedValue != null && txtVoucherActionType.SelectedValue.Equals("94"))
                {
                    
                    if (grAsset.Columns.Contains("colRegisType"))
                    {
                        grAsset.Columns["colRegisType"].Visible = true;
                        for (int i = 0; i < grAsset.Rows.Count; i++)
                        {
                            if (grAsset.Rows[i].Cells["colRegisType"].Value == null || grAsset.Rows[i].Cells["colRegisType"].Value.Equals(0))
                            {
                                grAsset.Rows[i].Cells["colRegisType"].Value = 93;
                            }
                        }
                    }
                    if (grAssetOther.Columns.Contains("colRegisType"))
                    {
                        grAssetOther.Columns["colRegisType"].Visible = true;
                        for (int i = 0; i < grAssetOther.Rows.Count; i++)
                        {
                            if (grAssetOther.Rows[i].Cells["colRegisType"].Value == null || grAssetOther.Rows[i].Cells["colRegisType"].Value.Equals(0))
                            {
                                grAssetOther.Rows[i].Cells["colRegisType"].Value = 93;
                            }
                        }
                    }
                }
                else
                {
                    if (grAsset.Columns.Contains("colRegisType"))
                    {
                        grAsset.Columns["colRegisType"].Visible = false;
                    }
                    if (grAssetOther.Columns.Contains("colRegisType"))
                    {
                        grAssetOther.Columns["colRegisType"].Visible = false;
                    }
                }
            }
            catch (Exception ex)
            {
                ShowError(ex.Message);
            }
        }

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

        private int getParentAssetType(int assetType)
        {
            if (assetTypes == null || assetTypes.Count == 0) return 0;
            int result = 0;
            assetTypes.ForEach((x) =>
            {
                if (x.Value == assetType.ToString()) {
                    if (string.IsNullOrEmpty(x.Value1)) result =  int.Parse(x.Value);
                    else result = int.Parse(x.Value1); 
                }
            });
            return result;
        }

        private void grAssetOther_UserAddedRow(object sender, DataGridViewRowEventArgs e)
        {
            
            SetDefaultAssetName(grAssetOther);
        }

        private void grAssetTrain_UserAddedRow(object sender, DataGridViewRowEventArgs e)
        {
            //SetDefaultAssetName(grAssetTrain);
        }

        
    }
}
