using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Drawing;
using System.Data;
using System.Linq;
using System.Text;
using System.Windows.Forms;

namespace FWS.TTDKGDTS.ImportTool.Core.AutoComplete
{
    public partial class UAutoComplete : UserControl
    {
        public event EventHandler SelectedItemChanged;

        public UAutoComplete()
        {
           // this.SetStyle(ControlStyles.AllPaintingInWmPaint, true);
           // this.SetStyle(ControlStyles.UserPaint, true);
            this.SetStyle(ControlStyles.DoubleBuffer, true);
            this.SetStyle(ControlStyles.ResizeRedraw, true);
            InitializeComponent();
            autoCompleteTextBox1.SelectedItemChanged += new EventHandler(autoCompleteTextBox1_SelectedItemChanged);
        }

        void autoCompleteTextBox1_SelectedItemChanged(object sender, EventArgs e)
        {
            OnSelectedItemChanged();
            //throw new NotImplementedException();
        }

        private void TextBox_SizeChanged(object sender, System.EventArgs e)
        {
            AutoCompleteTextBox tb = sender as AutoCompleteTextBox;

            this.Height = tb.Height;
        }

        protected override void OnPaint(PaintEventArgs e)
        {
            base.OnPaint(e);

            //Rectangle rect = this.ClientRectangle;
            //rect.Width -= 1;
            //rect.Height -= 1;
            //Pen p = new Pen(this.BorderColor);
            //e.Graphics.DrawRectangle(p, rect);

            //p = new Pen(Color.FromArgb(100, this.BorderColor));
            //rect.Inflate(-1, -1);
            //e.Graphics.DrawRectangle(p, rect);

            //p = new Pen(Color.FromArgb(45, this.BorderColor));
            //rect.Inflate(-1, -1);
            //e.Graphics.DrawRectangle(p, rect);

            //p = new Pen(Color.FromArgb(15, this.BorderColor));
            //rect.Inflate(-1, -1);
            //e.Graphics.DrawRectangle(p, rect);

        }

        private Color borderColor = Color.LightSteelBlue;
        public Color BorderColor
        {
            get
            {
                return this.borderColor;
            }
            set
            {
                if (this.borderColor != value)
                {
                    this.borderColor = value;
                    this.Invalidate();
                }
            }
        }

        public Color SelectedItemBackColor
        {
            get
            {
                return this.autoCompleteTextBox1.PopupSelectionBackColor;
            }
            set
            {
                this.autoCompleteTextBox1.PopupSelectionBackColor = value;
            }
        }

        public Color SelectedItemForeColor
        {
            get
            {
                return this.autoCompleteTextBox1.PopupSelectionForeColor;
            }
            set
            {
                this.autoCompleteTextBox1.PopupSelectionForeColor = value;
            }
        }

        [System.ComponentModel.Editor(typeof(AutoCompleteEntryCollection.AutoCompleteEntryCollectionEditor), typeof(System.Drawing.Design.UITypeEditor))]
        [DesignerSerializationVisibility(DesignerSerializationVisibility.Hidden)]
        [Browsable(false)]
        public AutoCompleteEntryCollection Items
        {
            get
            {
                return this.autoCompleteTextBox1.Items;
            }
            set
            {
                this.autoCompleteTextBox1.Items = value;
            }
        }

        [System.ComponentModel.Editor(typeof(AutoCompleteTriggerCollection.AutoCompleteTriggerCollectionEditor), typeof(System.Drawing.Design.UITypeEditor))]
        [DesignerSerializationVisibility(DesignerSerializationVisibility.Hidden)]
        [Browsable(false)]
        public AutoCompleteTriggerCollection Triggers
        {
            get
            {
                return this.autoCompleteTextBox1.Triggers;
            }
            set
            {
                this.autoCompleteTextBox1.Triggers = value;
            }
        }

        [Browsable(true)]
        public override string Text
        {
            get
            {
                return this.autoCompleteTextBox1.Text;
            }
            set
            {
                this.autoCompleteTextBox1.Text = value;
            }
        }

        [Browsable(false)]
        public AutoCompleteEntry SelectedItem
        {
            get { return this.autoCompleteTextBox1.SelectedItem; }
            set { this.autoCompleteTextBox1.SelectedItem = value;
            OnSelectedItemChanged();
            }
        }

        [Browsable(false)]
        public object SelectedValue
        {
            get { return this.autoCompleteTextBox1.SelectedValue; }
            set { this.autoCompleteTextBox1.SelectedValue = value; }
        }
        public override Color ForeColor
        {
            get
            {
                return this.autoCompleteTextBox1.ForeColor;
            }
            set
            {
                this.autoCompleteTextBox1.ForeColor = value;
            }
        }

        public override ContextMenu ContextMenu
        {
            get
            {
                return this.autoCompleteTextBox1.ContextMenu;
            }
            set
            {
                this.autoCompleteTextBox1.ContextMenu = value;
            }
        }

        public int PopupWidth
        {
            get
            {
                return this.autoCompleteTextBox1.PopupWidth;
            }
            set
            {
                this.autoCompleteTextBox1.PopupWidth = value;
            }
        }

        private void OnSelectedItemChanged()
        {
            if (SelectedItemChanged != null)
            {
                SelectedItemChanged(this, null);
            }
        }

    }
}
