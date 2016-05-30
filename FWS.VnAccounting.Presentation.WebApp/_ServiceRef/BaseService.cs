using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ServiceREF.Base
{

    /// <remarks/>
    [System.CodeDom.Compiler.GeneratedCodeAttribute("wsdl", "2.0.50727.42")]
    [System.SerializableAttribute()]
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    [System.Xml.Serialization.XmlTypeAttribute(Namespace = "http://tempuri.org/")]
    public partial class COutputValue : CObjectBase
    {

        private int totalPageField;

        private int totalRowField;

        private string codeField;

        private string nameField;

        private string descriptionField;

        private string resultField;

        private bool isSuccessfullField;

        /// <remarks/>
        public int TotalPage
        {
            get
            {
                return this.totalPageField;
            }
            set
            {
                this.totalPageField = value;
            }
        }

        /// <remarks/>
        public int TotalRow
        {
            get
            {
                return this.totalRowField;
            }
            set
            {
                this.totalRowField = value;
            }
        }

        /// <remarks/>
        public string Code
        {
            get
            {
                return this.codeField;
            }
            set
            {
                this.codeField = value;
            }
        }

        /// <remarks/>
        public string Name
        {
            get
            {
                return this.nameField;
            }
            set
            {
                this.nameField = value;
            }
        }

        /// <remarks/>
        public string Description
        {
            get
            {
                return this.descriptionField;
            }
            set
            {
                this.descriptionField = value;
            }
        }

        /// <remarks/>
        public string Result
        {
            get
            {
                return this.resultField;
            }
            set
            {
                this.resultField = value;
            }
        }

        /// <remarks/>
        public bool IsSuccessfull
        {
            get
            {
                return this.isSuccessfullField;
            }
            set
            {
                this.isSuccessfullField = value;
            }
        }
    }

    /// <remarks/>
    [System.Xml.Serialization.XmlIncludeAttribute(typeof(CApplicationMessage))]
    [System.Xml.Serialization.XmlIncludeAttribute(typeof(CGroupBase))]
    [System.Xml.Serialization.XmlIncludeAttribute(typeof(COutputValue))]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("wsdl", "2.0.50727.42")]
    [System.SerializableAttribute()]
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    [System.Xml.Serialization.XmlTypeAttribute(Namespace = "http://tempuri.org/")]
    public partial class CObjectBase
    {

        private string extendField;

        /// <remarks/>
        public string Extend
        {
            get
            {
                return this.extendField;
            }
            set
            {
                this.extendField = value;
            }
        }
    }

    /// <remarks/>
    [System.CodeDom.Compiler.GeneratedCodeAttribute("wsdl", "2.0.50727.42")]
    [System.SerializableAttribute()]
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    [System.Xml.Serialization.XmlTypeAttribute(Namespace = "http://tempuri.org/")]
    public partial class CApplicationMessage : CObjectBase
    {

        private int idField;

        private string codeField;

        private string nameField;

        private string descriptionField;

        private int typeField;

        private bool isSuccessfullField;

        private object resultField;

        private System.Nullable<System.DateTime> createdDateTimeField;

        private System.Nullable<int> createdByField;

        private System.Nullable<System.DateTime> lastUpdatedDateTimeField;

        private System.Nullable<int> lastUpdatedByField;

        private string jsonStringField;

        /// <remarks/>
        public int ID
        {
            get
            {
                return this.idField;
            }
            set
            {
                this.idField = value;
            }
        }

        /// <remarks/>
        public string Code
        {
            get
            {
                return this.codeField;
            }
            set
            {
                this.codeField = value;
            }
        }

        /// <remarks/>
        public string Name
        {
            get
            {
                return this.nameField;
            }
            set
            {
                this.nameField = value;
            }
        }

        /// <remarks/>
        public string Description
        {
            get
            {
                return this.descriptionField;
            }
            set
            {
                this.descriptionField = value;
            }
        }

        /// <remarks/>
        public int Type
        {
            get
            {
                return this.typeField;
            }
            set
            {
                this.typeField = value;
            }
        }

        /// <remarks/>
        public bool IsSuccessfull
        {
            get
            {
                return this.isSuccessfullField;
            }
            set
            {
                this.isSuccessfullField = value;
            }
        }

        /// <remarks/>
        public object Result
        {
            get
            {
                return this.resultField;
            }
            set
            {
                this.resultField = value;
            }
        }

        /// <remarks/>
        [System.Xml.Serialization.XmlElementAttribute(IsNullable = true)]
        public System.Nullable<System.DateTime> CreatedDateTime
        {
            get
            {
                return this.createdDateTimeField;
            }
            set
            {
                this.createdDateTimeField = value;
            }
        }

        /// <remarks/>
        [System.Xml.Serialization.XmlElementAttribute(IsNullable = true)]
        public System.Nullable<int> CreatedBy
        {
            get
            {
                return this.createdByField;
            }
            set
            {
                this.createdByField = value;
            }
        }

        /// <remarks/>
        [System.Xml.Serialization.XmlElementAttribute(IsNullable = true)]
        public System.Nullable<System.DateTime> LastUpdatedDateTime
        {
            get
            {
                return this.lastUpdatedDateTimeField;
            }
            set
            {
                this.lastUpdatedDateTimeField = value;
            }
        }

        /// <remarks/>
        [System.Xml.Serialization.XmlElementAttribute(IsNullable = true)]
        public System.Nullable<int> LastUpdatedBy
        {
            get
            {
                return this.lastUpdatedByField;
            }
            set
            {
                this.lastUpdatedByField = value;
            }
        }

        /// <remarks/>
        public string JsonString
        {
            get
            {
                return this.jsonStringField;
            }
            set
            {
                this.jsonStringField = value;
            }
        }
    }

    /// <remarks/>
    [System.CodeDom.Compiler.GeneratedCodeAttribute("wsdl", "2.0.50727.42")]
    [System.SerializableAttribute()]
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    [System.Xml.Serialization.XmlTypeAttribute(Namespace = "http://tempuri.org/")]
    public partial class CGroupBase : CObjectBase
    {

        private int idField;

        private System.Nullable<int> clientGroupIDField;

        private string codeField;

        private string nameField;

        private System.Nullable<int> parentIDField;

        private System.Nullable<int> statusField;

        private System.Nullable<int> rootIDField;

        private System.Nullable<System.DateTime> createdDateTimeField;

        private System.Nullable<int> createdByField;

        private System.Nullable<System.DateTime> lastUpdatedDateTimeField;

        private System.Nullable<int> lastUpdatedByField;

        private int childCountField;

        private int levelField;

        /// <remarks/>
        public int ID
        {
            get
            {
                return this.idField;
            }
            set
            {
                this.idField = value;
            }
        }

        /// <remarks/>
        [System.Xml.Serialization.XmlElementAttribute(IsNullable = true)]
        public System.Nullable<int> ClientGroupID
        {
            get
            {
                return this.clientGroupIDField;
            }
            set
            {
                this.clientGroupIDField = value;
            }
        }

        /// <remarks/>
        public string Code
        {
            get
            {
                return this.codeField;
            }
            set
            {
                this.codeField = value;
            }
        }

        /// <remarks/>
        public string Name
        {
            get
            {
                return this.nameField;
            }
            set
            {
                this.nameField = value;
            }
        }

        /// <remarks/>
        [System.Xml.Serialization.XmlElementAttribute(IsNullable = true)]
        public System.Nullable<int> ParentID
        {
            get
            {
                return this.parentIDField;
            }
            set
            {
                this.parentIDField = value;
            }
        }

        /// <remarks/>
        [System.Xml.Serialization.XmlElementAttribute(IsNullable = true)]
        public System.Nullable<int> Status
        {
            get
            {
                return this.statusField;
            }
            set
            {
                this.statusField = value;
            }
        }

        /// <remarks/>
        [System.Xml.Serialization.XmlElementAttribute(IsNullable = true)]
        public System.Nullable<int> RootID
        {
            get
            {
                return this.rootIDField;
            }
            set
            {
                this.rootIDField = value;
            }
        }

        /// <remarks/>
        [System.Xml.Serialization.XmlElementAttribute(IsNullable = true)]
        public System.Nullable<System.DateTime> CreatedDateTime
        {
            get
            {
                return this.createdDateTimeField;
            }
            set
            {
                this.createdDateTimeField = value;
            }
        }

        /// <remarks/>
        [System.Xml.Serialization.XmlElementAttribute(IsNullable = true)]
        public System.Nullable<int> CreatedBy
        {
            get
            {
                return this.createdByField;
            }
            set
            {
                this.createdByField = value;
            }
        }

        /// <remarks/>
        [System.Xml.Serialization.XmlElementAttribute(IsNullable = true)]
        public System.Nullable<System.DateTime> LastUpdatedDateTime
        {
            get
            {
                return this.lastUpdatedDateTimeField;
            }
            set
            {
                this.lastUpdatedDateTimeField = value;
            }
        }

        /// <remarks/>
        [System.Xml.Serialization.XmlElementAttribute(IsNullable = true)]
        public System.Nullable<int> LastUpdatedBy
        {
            get
            {
                return this.lastUpdatedByField;
            }
            set
            {
                this.lastUpdatedByField = value;
            }
        }

        /// <remarks/>
        public int ChildCount
        {
            get
            {
                return this.childCountField;
            }
            set
            {
                this.childCountField = value;
            }
        }

        /// <remarks/>
        public int Level
        {
            get
            {
                return this.levelField;
            }
            set
            {
                this.levelField = value;
            }
        }
    }

    /// <remarks/>
    [System.CodeDom.Compiler.GeneratedCodeAttribute("wsdl", "2.0.50727.42")]
    public delegate void GetGroupBaseListCompletedEventHandler(object sender, GetGroupBaseListCompletedEventArgs e);

    /// <remarks/>
    [System.CodeDom.Compiler.GeneratedCodeAttribute("wsdl", "2.0.50727.42")]
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    public partial class GetGroupBaseListCompletedEventArgs : System.ComponentModel.AsyncCompletedEventArgs
    {

        private object[] results;

        internal GetGroupBaseListCompletedEventArgs(object[] results, System.Exception exception, bool cancelled, object userState) :
            base(exception, cancelled, userState)
        {
            this.results = results;
        }

        /// <remarks/>
        public CGroupBase[] Result
        {
            get
            {
                this.RaiseExceptionIfNecessary();
                return ((CGroupBase[])(this.results[0]));
            }
        }

        /// <remarks/>
        public COutputValue OutputValue
        {
            get
            {
                this.RaiseExceptionIfNecessary();
                return ((COutputValue)(this.results[1]));
            }
        }
    }

    /// <remarks/>
    [System.CodeDom.Compiler.GeneratedCodeAttribute("wsdl", "2.0.50727.42")]
    public delegate void GetGroupBaseCompletedEventHandler(object sender, GetGroupBaseCompletedEventArgs e);

    /// <remarks/>
    [System.CodeDom.Compiler.GeneratedCodeAttribute("wsdl", "2.0.50727.42")]
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    public partial class GetGroupBaseCompletedEventArgs : System.ComponentModel.AsyncCompletedEventArgs
    {

        private object[] results;

        internal GetGroupBaseCompletedEventArgs(object[] results, System.Exception exception, bool cancelled, object userState) :
            base(exception, cancelled, userState)
        {
            this.results = results;
        }

        /// <remarks/>
        public CGroupBase Result
        {
            get
            {
                this.RaiseExceptionIfNecessary();
                return ((CGroupBase)(this.results[0]));
            }
        }
    }

    /// <remarks/>
    [System.CodeDom.Compiler.GeneratedCodeAttribute("wsdl", "2.0.50727.42")]
    public delegate void UpdateGroupBaseCompletedEventHandler(object sender, UpdateGroupBaseCompletedEventArgs e);

    /// <remarks/>
    [System.CodeDom.Compiler.GeneratedCodeAttribute("wsdl", "2.0.50727.42")]
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    public partial class UpdateGroupBaseCompletedEventArgs : System.ComponentModel.AsyncCompletedEventArgs
    {

        private object[] results;

        internal UpdateGroupBaseCompletedEventArgs(object[] results, System.Exception exception, bool cancelled, object userState) :
            base(exception, cancelled, userState)
        {
            this.results = results;
        }

        /// <remarks/>
        public CApplicationMessage Result
        {
            get
            {
                this.RaiseExceptionIfNecessary();
                return ((CApplicationMessage)(this.results[0]));
            }
        }
    }


}