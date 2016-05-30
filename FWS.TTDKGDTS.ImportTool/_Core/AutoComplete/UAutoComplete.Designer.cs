namespace FWS.TTDKGDTS.ImportTool.Core.AutoComplete
{
    partial class UAutoComplete
    {
        /// <summary> 
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary> 
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Component Designer generated code

        /// <summary> 
        /// Required method for Designer support - do not modify 
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.autoCompleteTextBox1 = new FWS.TTDKGDTS.ImportTool.Core.AutoComplete.AutoCompleteTextBox();
            this.SuspendLayout();
            // 
            // autoCompleteTextBox1
            // 
            this.autoCompleteTextBox1.Dock = System.Windows.Forms.DockStyle.Fill;
            this.autoCompleteTextBox1.Location = new System.Drawing.Point(0, 0);
            this.autoCompleteTextBox1.Name = "autoCompleteTextBox1";
            this.autoCompleteTextBox1.PopupBorderStyle = System.Windows.Forms.BorderStyle.FixedSingle;
            this.autoCompleteTextBox1.PopupOffset = new System.Drawing.Point(12, 4);
            this.autoCompleteTextBox1.PopupSelectionBackColor = System.Drawing.SystemColors.Highlight;
            this.autoCompleteTextBox1.PopupSelectionForeColor = System.Drawing.SystemColors.HighlightText;
            this.autoCompleteTextBox1.PopupWidth = -1;
            this.autoCompleteTextBox1.SelectedItem = null;
            this.autoCompleteTextBox1.SelectedValue = null;
            this.autoCompleteTextBox1.Size = new System.Drawing.Size(143, 20);
            this.autoCompleteTextBox1.TabIndex = 0;
            this.autoCompleteTextBox1.SizeChanged += new System.EventHandler(this.TextBox_SizeChanged);
            // 
            // UAutoComplete
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.SystemColors.Control;
            this.Controls.Add(this.autoCompleteTextBox1);
            this.Margin = new System.Windows.Forms.Padding(0);
            this.Name = "UAutoComplete";
            this.Size = new System.Drawing.Size(143, 23);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private Core.AutoComplete.AutoCompleteTextBox autoCompleteTextBox1;
    }
}
