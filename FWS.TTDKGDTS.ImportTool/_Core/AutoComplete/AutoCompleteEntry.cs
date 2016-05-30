using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using FWS.TTDKGDTS.ImportTool._Core.AutoComplete;

namespace FWS.TTDKGDTS.ImportTool.Core.AutoComplete
{
    /// <summary>
    /// Summary description for AutoCompleteDictionaryEntry.
    /// </summary>
    [Serializable]
    public class AutoCompleteEntry : IAutoCompleteEntry
    {

        private string[] matchStrings;
        public string[] MatchStrings
        {
            get
            {
                if (this.matchStrings == null)
                {
                    this.matchStrings = new string[] { this.DisplayName };
                }
                return this.matchStrings;
            }
        }

        private string displayName = string.Empty;
        public string DisplayName
        {
            get
            {
                return this.displayName;
            }
            set
            {
                this.displayName = value;
            }
        }
        public string DisplayMemberSub { get; set; }
        public object Value
        {
            get;
            set;
        }
        public object Tag { get; set; }

        public AutoCompleteEntry()
        {
        }

        

        public AutoCompleteEntry(string name, params string[] matchList)
        {
            this.displayName = name;
            for (int i = 0; i < matchList.Length; i++)
            {
                matchList[i] = CStringUtils.RemoveUnicodeChar(matchList[i]);
            }
            this.matchStrings = matchList;
        }

        public override string ToString()
        {
            return this.DisplayName;
        }

    }
}
