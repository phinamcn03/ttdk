using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Drawing;
using System.Data;
using System.Text;
using System.Windows.Forms;

namespace FWS.TTDKGDTS.ImportTool._Base
{
    public partial class UBase : UserControl
    {
        public UBase()
        {
            InitializeComponent();
        }

        protected void ShowInfo(string message)
        {
            MessageBox.Show(message, "", MessageBoxButtons.OK, MessageBoxIcon.Information);

        }
        protected void ShowError(string message)
        {
            MessageBox.Show(message, "", MessageBoxButtons.OK, MessageBoxIcon.Error);
        }

        protected DialogResult ShowQuestion(string message)
        {
            return MessageBox.Show(message, "", MessageBoxButtons.YesNo, MessageBoxIcon.Question);

        }

    }
}
