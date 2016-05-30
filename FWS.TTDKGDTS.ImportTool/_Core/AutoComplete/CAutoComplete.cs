using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.ComponentModel;
using System.Windows.Forms;
using FWS.TTDKGDTS.ImportTool.BusinessObject;
using System.Drawing;

namespace FWS.TTDKGDTS.ImportTool._Core.AutoComplete
{
    public class AutoCompleteComboBox : System.Windows.Forms.TextBox
    {
        public event EventHandler SelectedIndexChanged;
        public event EventHandler SelectedValueChanged;

        private bool _isEditMode = false;

        public AutoCompleteComboBox()
        {
            this.Leave += new EventHandler(AutoCompleteComboBox_Leave);
            this.Disposed += new EventHandler(AutoCompleteComboBox_Disposed);
            this.KeyDown += new KeyEventHandler(AutoCompleteComboBox_KeyDown);
        }

        void AutoCompleteComboBox_KeyDown(object sender, KeyEventArgs e)
        {
            if (e.KeyCode == Keys.Down)
            {
                DoShowPopUp(true);
            }
            if (e.KeyCode == Keys.Enter)
            {
                if (_selectedItem != null) this.Text = ((CParaData)_selectedItem).Name;
                if (_IsShowingPopup) ClosePopUp();
            }
            if (e.KeyCode == Keys.Tab)
            {
                if (_selectedItem != null) this.Text = ((CParaData)_selectedItem).Name;
                if (_IsShowingPopup) ClosePopUp();
            }
            //throw new NotImplementedException();
        }

        void AutoCompleteComboBox_Disposed(object sender, EventArgs e)
        {
            if (popupForm != null && !popupForm.IsDisposed)
            {
                ClosePopUp();
            }
            //throw new NotImplementedException();
        }

        void AutoCompleteComboBox_Leave(object sender, EventArgs e)
        {
            try
            {
                //Neu Popup dang mo thi dong lai
                if (popupForm != null && !popupForm.IsDisposed && !popupForm.IsSelecting)
                {
                    ClosePopUp();
                }
                if (_selectedItem != null) this.Text = ((CParaData)_selectedItem).Name;
                
            }
            catch
            {
            }
            //throw new NotImplementedException();
        }

        private object _datasource = null;
        public object DataSource
        {
            get { return _datasource; }
            set
            {
                _datasource = value;
            }
        }

        private string _displayMember = "";
        public string DisplayMember
        {
            get { return _displayMember; }
            set
            {
                _displayMember = value;
            }
        }

        private string _valueMember = "";
        public string ValueMember
        {
            get { return _valueMember; }
            set
            {
                _valueMember = value;
            }
        }

        private object _selectedItem = null;
        public object SelectedItem
        {
            get { return _selectedItem; }
            set
            {
                _selectedItem = value;
            }
        }
        private object _selectedValue = null;
        public object SelectedValue
        {
            get { return _selectedValue; }
            set
            {
                _selectedValue = value;
                SetSelectedValue(value);
            }
        }
        protected override void OnTextChanged(EventArgs e)
        {
            try
            {
                base.OnTextChanged(e);
                if (!(_selectedItem != null && _selectedItem is CParaData && ((CParaData)_selectedItem).Name == this.Text))
                {
                    //_selectedItem = null;
                    // Show popup
                    if (!_IsShowingPopup)
                    {
                        DoShowPopUp();
                    }
                    else
                    {
                        popupForm.FilterString = this.Text;
                    }
                }
            }
            catch (Exception ex)
            {
                
            }
        }
        bool _IsShowingPopup = false;
        FDropDown popupForm = null;
        private void DoShowPopUp(bool enterSelect = false)
        {
            if (_datasource == null) return;

            if (_IsShowingPopup)
            {
                if (enterSelect)
                {
                    popupForm.EnterSelect();
                }
                return;
            }


            popupForm = new FDropDown();
            popupForm.DataSource = _datasource;
            popupForm.DisplayMember = _displayMember;
            popupForm.ValueMember = _valueMember;
            popupForm.FilterString = this.Text;
            popupForm.Width = this.Width;
            popupForm.Location = new Point(this.Parent.PointToScreen(this.Location).X, this.Parent.PointToScreen(this.Location).Y + this.Height);
            popupForm.TopMost = true;

            popupForm.SelectedValueChanged += new EventHandler(popup_SelectedValueChanged);
            popupForm.FormClosed += new FormClosedEventHandler(popup_FormClosed);
            popupForm.Show();
            _IsShowingPopup = true;

            if (enterSelect)
            {
                popupForm.EnterSelect();
            }
            else
            {
                this.Focus();
            }
        }

        private void ClosePopUp()
        {
            if (popupForm == null) return;
            if (popupForm.IsDisposed) return;
            if (_IsShowingPopup) popupForm.Close();
        }

        void popup_FormClosed(object sender, FormClosedEventArgs e)
        {
            _IsShowingPopup = false;
            if(_selectedItem !=null) this.Text = ((CParaData)_selectedItem).Name;
        }

        void popup_SelectedValueChanged(object sender, EventArgs e)
        {
            _selectedItem = ((FDropDown)sender).SelectedItem;
            _selectedValue = ((FDropDown)sender).SelectedValue;
            //throw new NotImplementedException();
        }

        void SetSelectedValue(object value)
        {
            if (_datasource == null) return;
            if (value == null) return;
            foreach (CParaData p in (List<CParaData>)_datasource)
            {
                if (p.ID.ToString() == value.ToString())
                {
                    _selectedItem = p;
                    this.Text = p.Name;
                }
            }
        }
    }
}
