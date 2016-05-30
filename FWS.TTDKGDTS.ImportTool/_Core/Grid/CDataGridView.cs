using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Windows.Forms;

namespace FWS.TTDKGDTS.ImportTool._Core.Grid
{
    public class CDataGridView:DataGridView
    {
        public CDataGridView():base()
        {
            
        }
        protected override void OnKeyPress(KeyPressEventArgs e)
        {
            base.OnKeyPress(e);
            
           
        }
        protected override void OnKeyDown(KeyEventArgs e)
        {
            base.OnKeyDown(e);
            //Ctrl +C
            if (e.Control && e.KeyCode == Keys.C )
            {
                CopyToClipboard();
            }

            if (e.Control && e.KeyCode == Keys.V)
            {
                PasteClipboardValue();
            }
        }
        #region Private Function
        private void CopyToClipboard()
        {
            //Copy to clipboard
            DataObject dataObj = this.GetClipboardContent();
            if (dataObj != null)
                Clipboard.SetDataObject(dataObj);
        }

        private void PasteClipboardValue()
        {
            //Show Error if no cell is selected
            if (this.SelectedCells.Count == 0)
            {
                MessageBox.Show("Please select a cell", "Paste",
                MessageBoxButtons.OK, MessageBoxIcon.Warning);
                return;
            }

            //Get the starting Cell
            DataGridViewCell startCell = GetStartCell(this);
            //Get the clipboard value in a dictionary
            Dictionary<int, Dictionary<int, string>> cbValue =
                    ClipBoardValues(Clipboard.GetText());

            int iRowIndex = startCell.RowIndex;
            foreach (int rowKey in cbValue.Keys)
            {
                int iColIndex = startCell.ColumnIndex;
                foreach (int cellKey in cbValue[rowKey].Keys)
                {
                    //if column is ReadOnly. do not paste
                    if (this.Columns[iColIndex].ReadOnly) continue;
                    //Check if the index is within the limit
                    if (iColIndex <= this.Columns.Count - 1
                    && iRowIndex <= this.Rows.Count - 1)
                    {
                        
                        DataGridViewRow row = this.Rows[iRowIndex];
                        if (row.IsNewRow)
                        {
                            BindingSource source = (BindingSource) this.DataSource;
                            //source.AddNew();
                            source.ResetBindings(false);
                            //DataGridViewRow rowCopy =(DataGridViewRow) row.Clone();
                            //this.
                        }
                        DataGridViewCell cell = this[iColIndex, iRowIndex];
                        //Copy to selected cells if 'chkPasteToSelectedCells' is checked
                        //if ((chkPasteToSelectedCells.Checked && cell.Selected) ||
                        //    (!chkPasteToSelectedCells.Checked))
                            cell.Value = cbValue[rowKey][cellKey];
                    }
                    iColIndex++;
                }
                iRowIndex++;
            }
        }

        private DataGridViewCell GetStartCell(DataGridView dgView)
        {
            //get the smallest row,column index
            if (dgView.SelectedCells.Count == 0)
                return null;

            int rowIndex = dgView.Rows.Count - 1;
            int colIndex = dgView.Columns.Count - 1;

            foreach (DataGridViewCell dgvCell in dgView.SelectedCells)
            {
                if (dgvCell.RowIndex < rowIndex)
                    rowIndex = dgvCell.RowIndex;
                if (dgvCell.ColumnIndex < colIndex)
                    colIndex = dgvCell.ColumnIndex;
            }

            return dgView[colIndex, rowIndex];
        }

        private Dictionary<int, Dictionary<int, string>> ClipBoardValues(string clipboardValue)
        {
            Dictionary<int, Dictionary<int, string>>
            copyValues = new Dictionary<int, Dictionary<int, string>>();

            String[] lines = clipboardValue.Split('\n');

            for (int i = 0; i <= lines.Length - 1; i++)
            {
                copyValues[i] = new Dictionary<int, string>();
                String[] lineContent = lines[i].Split('\t');

                //if an empty cell value copied, then set the dictionary with an empty string
                //else Set value to dictionary
                if (lineContent.Length == 0)
                    copyValues[i][0] = string.Empty;
                else
                {
                    for (int j = 0; j <= lineContent.Length - 1; j++)
                        copyValues[i][j] = lineContent[j];
                }
            }
            return copyValues;
        }

        #endregion Private Function
    }
}
