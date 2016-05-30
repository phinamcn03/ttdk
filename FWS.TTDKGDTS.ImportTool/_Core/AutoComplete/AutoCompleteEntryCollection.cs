using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Collections;
using System.ComponentModel.Design;

namespace FWS.TTDKGDTS.ImportTool.Core.AutoComplete
{
    /// <summary>
    /// Summary description for AutoCompleteDictionary.
    /// </summary>
    [Serializable]
    public class AutoCompleteEntryCollection : CollectionBase
    {
        public class AutoCompleteEntryCollectionEditor : CollectionEditor
        {
            public AutoCompleteEntryCollectionEditor(Type type)
                : base(type)
            {
            }

            protected override bool CanSelectMultipleInstances()
            {
                return false;
            }

            protected override Type CreateCollectionItemType()
            {
                return typeof(AutoCompleteEntry);
            }
        }

        public IAutoCompleteEntry this[int index]
        {
            get
            {
                return this.InnerList[index] as AutoCompleteEntry;
            }
        }

        public void Add(IAutoCompleteEntry entry)
        {
            this.InnerList.Add(entry);
        }

        public void AddRange(ICollection col)
        {
            this.InnerList.AddRange(col);
        }

        public void Add(AutoCompleteEntry entry)
        {
            this.InnerList.Add(entry);
        }

        public object[] ToObjectArray()
        {
            return this.InnerList.ToArray();
        }

    }
}
