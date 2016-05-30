using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Windows.Forms;
using FWS.TTDKGDTS.ImportTool.Core.AutoComplete;

namespace FWS.TTDKGDTS.ImportTool._Core
{
    public class CListBox:ListBox
    {
        private UListBoxItemTemplate ItemTemplate = new UListBoxItemTemplate();
        public CListBox()
        {
            DrawMode = DrawMode.OwnerDrawFixed;
            ItemHeight = ItemTemplate.Height;
        }

        protected void OnDrawItem11111(DrawItemEventArgs e)
        {
            base.OnDrawItem(e);

            const TextFormatFlags flags = TextFormatFlags.Left | TextFormatFlags.VerticalCenter;

            if (e.Index >= 0)
            {
                e.DrawBackground();
                
                foreach (Control ctl in ItemTemplate.Controls)
                {
                    if (ctl is Label)
                    {
                        //flags = ((Label)ctl).TextAlign == System.Drawing.ContentAlignment.
                        var textRect = e.Bounds;
                        textRect.Location = ctl.Location;
                        textRect.Height = ctl.Height;
                        textRect.X += ctl.Padding.Left;
                        textRect.Width -= ctl.Padding.Left + ctl.Padding.Right;
                        string itemText = "AddressListBox";
                        if (!DesignMode)
                        {
                            if (Items[0] is IAutoCompleteEntry)
                            {
                                if (ctl.Name == "DisplayName")
                                {
                                    itemText = ((AutoCompleteEntry)Items[0]).DisplayName;
                                }
                                if (ctl.Name == "DisplayAddress")
                                {
                                    itemText = ((AutoCompleteEntry)Items[0]).DisplayMemberSub;
                                }
                            }
                        }
                        
                        TextRenderer.DrawText(e.Graphics, itemText, ctl.Font, textRect, ctl.ForeColor, flags);
                    }
                }
                //e.Graphics.DrawRectangle(Pens.Red, 2, e.Bounds.Y + 2, 14, 14); // Simulate an icon.

                //var textRect = e.Bounds;
                //textRect.X += 20;
                //textRect.Width -= 20;
                //string itemText = DesignMode ? "AddressListBox" : Items[e.Index].ToString();
                //TextRenderer.DrawText(e.Graphics, itemText, e.Font, textRect, e.ForeColor, flags);
                e.DrawFocusRectangle();
            }
        }
    }
}
