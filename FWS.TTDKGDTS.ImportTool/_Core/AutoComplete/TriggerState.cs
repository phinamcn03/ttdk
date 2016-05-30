using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace FWS.TTDKGDTS.ImportTool.Core.AutoComplete
{
    /// <summary>
    /// Summary description for TriggerState.
    /// </summary>
    [Serializable]
    public enum TriggerState : int
    {
        None = 0,
        Show = 1,
        ShowAndConsume = 2,
        Hide = 3,
        HideAndConsume = 4,
        Select = 5,
        SelectAndConsume = 6
    }
}
