using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;
using FWS.TTDKGDTS.ImportTool.BusinessObject;

namespace FWS.TTDKGDTS.ImportTool._Core.AutoComplete
{
    public partial class FDropDown : Form
    {
        public FDropDown()
        {
            InitializeComponent();
            lsItems.SelectedIndexChanged += new EventHandler(lsItems_SelectedIndexChanged);
            lsItems.SelectedValueChanged += new EventHandler(lsItems_SelectedValueChanged);
            this.Leave += new EventHandler(FDropDown_Leave);
        }

        

        public event EventHandler SelectedIndexChanged;
        public event EventHandler SelectedValueChanged;

        private object _datasource = null;
        public object DataSource
        {
            get { return _datasource; }
            set { _datasource = value;
                SetDataSource(_datasource);
            }
        }

        private string _displayMember = "";
        public string DisplayMember
        {
            get { return _displayMember; }
            set { _displayMember = value;
             SetDataSource(_datasource);
            }
        }

        private string _valueMember = "";
        public string ValueMember
        {
            get { return _valueMember; }
            set { _valueMember = value;
                SetDataSource(_datasource);
            }
        }

        private object _selectedItem = null;
        public object SelectedItem
        {
            get { return _selectedItem; }
            set { _selectedItem = value;
            }
        }

        private object _selectedValue = null;
        public object SelectedValue
        {
            get { return _selectedValue; }
            set
            {
                _selectedValue = value;
            }
        }
        private string _filterString = "";
        public string FilterString
        {
            get { return _filterString; }
            set { _filterString = value; SetDataSource(_datasource); }

        }

        private bool _isSelecting = false;
        public bool IsSelecting
        {
            get { return _isSelecting; }
            
        }

        private void SetDataSource(object datasource)
        {
            List<CParaData> lsSource = new List<CParaData>(); 
            if(!string.IsNullOrEmpty(_filterString) && datasource !=null)
            {
                (datasource as List<CParaData>).ForEach(x=>{
                        if(x.Name.ToLower().Contains(_filterString.ToLower())) lsSource.Add(x);
                });
            }
            else
            {
                lsSource = datasource as List<CParaData>;
            }
            lsItems.DataSource = lsSource;
            lsItems.DisplayMember = _displayMember;
            lsItems.ValueMember = _valueMember;
        }
        #region lsItems events
        void lsItems_SelectedIndexChanged(object sender, EventArgs e)
        {
            _selectedItem = lsItems.SelectedItem;
            _selectedValue = lsItems.SelectedValue;
            if (SelectedIndexChanged != null)
                SelectedIndexChanged(this, e);
        }
        void lsItems_SelectedValueChanged(object sender, EventArgs e)
        {
            _selectedItem = lsItems.SelectedItem;
            _selectedValue = lsItems.SelectedValue;
            if (SelectedValueChanged != null)
            {
                SelectedValueChanged(this, e);
            }
        }

        private void lsItems_MouseClick(object sender, MouseEventArgs e)
        {
            this.Close();
        }
        
        private void lsItems_KeyDown(object sender, KeyEventArgs e)
        {
            if (e.KeyCode == Keys.Enter)
                this.Close();
        }
        #endregion

        private void FDropDown_Leave(object sender, EventArgs e)
        {
            _isSelecting = false;
            this.Close();
        }

        protected override void OnActivated(EventArgs e)
        {
            base.OnActivated(e);
            _isSelecting = true;
        }

        protected override void OnLostFocus(EventArgs e)
        {
            base.OnLostFocus(e);
            _isSelecting = false;
        }

        protected override void OnLeave(EventArgs e)
        {
            base.OnLeave(e);
            _isSelecting = false;
        }

        public void EnterSelect()
        {
            this.Activate();
        }
        
    }
}
