using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Windows.Forms;

namespace FWS.TTDKGDTS.ImportTool.Core.AutoComplete
{
    /// <summary>
    /// Summary description for AutoCompleteTrigger.
    /// </summary>
    [Serializable]
    public abstract class AutoCompleteTrigger
    {
        public virtual TriggerState OnTextChanged(string text)
        {
            return TriggerState.None;
        }

        public virtual TriggerState OnCommandKey(Keys keyData)
        {
            return TriggerState.None;
        }
    }
}
