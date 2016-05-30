using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;
using System.Resources;

namespace FWS.TTDKGDTS.ImportTool._Base
{
    public partial class FBase : Form
    {
        public FBase()
        {
            InitializeComponent();
            this.Icon = FWS.TTDKGDTS.ImportTool.Properties.Resources.TTDKLogo;
        }
        protected void ShowInfo(string message)
        {
            MessageBox.Show(message, "", MessageBoxButtons.OK, MessageBoxIcon.Information);
        }
        protected void ShowError(string message)
        {
            MessageBox.Show(message, "", MessageBoxButtons.OK, MessageBoxIcon.Error);
        }
    }
}
