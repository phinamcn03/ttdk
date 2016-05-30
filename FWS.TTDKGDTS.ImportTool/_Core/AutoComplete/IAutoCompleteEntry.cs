using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace FWS.TTDKGDTS.ImportTool.Core.AutoComplete
{
    /// <summary>
    /// Summary description for IAutoCompleteEntry.
    /// </summary>
    public interface IAutoCompleteEntry
    {
        string[] MatchStrings
        {
            get;
        }

    }
}
