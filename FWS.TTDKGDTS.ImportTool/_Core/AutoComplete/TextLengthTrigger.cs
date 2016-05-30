using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace FWS.TTDKGDTS.ImportTool.Core.AutoComplete
{
    /// <summary>
    /// Summary description for TextLengthTrigger.
    /// </summary>
    [Serializable]
    public class TextLengthTrigger : AutoCompleteTrigger
    {
        private int textLength = 1;
        public int TextLength
        {
            get
            {
                return this.textLength;
            }
            set
            {
                this.textLength = value;
            }
        }

        public TextLengthTrigger()
        {
        }

        public TextLengthTrigger(int length)
        {
            this.textLength = length;
        }

        public override TriggerState OnTextChanged(string text)
        {
            if (text.Length >= this.TextLength)
                return TriggerState.Show;
            else if (text.Length < this.TextLength)
                return TriggerState.Hide;

            return TriggerState.None;
        }


    }
}
