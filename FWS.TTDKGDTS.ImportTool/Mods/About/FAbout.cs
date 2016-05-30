using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;
using FWS.TTDKGDTS.ImportTool._Base;

namespace FWS.TTDKGDTS.ImportTool.Mods.About
{
    public partial class FAbout : FBase
    {
        public FAbout()
        {
            InitializeComponent();
        }

        private void FAbout_Load(object sender, EventArgs e)
        {
            try
            {
                lbVersion.Text = Application.ProductVersion;
            }
            catch
            {
            }
        }
    }
}
