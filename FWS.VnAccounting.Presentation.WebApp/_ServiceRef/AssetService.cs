using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ServiceREF.Asset
{

    /// <remarks/>
    [System.CodeDom.Compiler.GeneratedCodeAttribute("wsdl", "2.0.50727.42")]
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    [System.Web.Services.WebServiceBindingAttribute(Name = "AssetServiceSoap", Namespace = "http://tempuri.org/")]
    [System.Xml.Serialization.XmlIncludeAttribute(typeof(CObjectBase))]
    public partial class AssetService : System.Web.Services.Protocols.SoapHttpClientProtocol
    {

        private System.Threading.SendOrPostCallback GetAssetListOperationCompleted;

        private System.Threading.SendOrPostCallback GetAssetOperationCompleted;

        private System.Threading.SendOrPostCallback UpdateAssetOperationCompleted;

        private System.Threading.SendOrPostCallback UpdateAndSendReportOperationCompleted;

        /// <remarks/>
        public AssetService()
        {
            string urlSetting = System.Configuration.ConfigurationManager.AppSettings["FWS.VnAccounting.Service.Data"] + "/Asset/AssetService.asmx";
            //string urlSetting = System.Configuration.ConfigurationManager.AppSettings["AssetService"];
            if ((urlSetting != null))
            {
                this.Url = urlSetting;
            }
            else
            {
                this.Url = "http://localhost/FWS.VnAccounting.Service.Data/Asset/AssetService.asmx";
            }
        }

        /// <remarks/>
        public event GetAssetListCompletedEventHandler GetAssetListCompleted;

        /// <remarks/>
        public event GetAssetCompletedEventHandler GetAssetCompleted;

        /// <remarks/>
        public event UpdateAssetCompletedEventHandler UpdateAssetCompleted;

        /// <remarks/>
        public event UpdateAndSendReportCompletedEventHandler UpdateAndSendReportCompleted;

        /// <remarks/>
        [System.Web.Services.Protocols.SoapDocumentMethodAttribute("http://tempuri.org/GetAssetList", RequestNamespace = "http://tempuri.org/", ResponseNamespace = "http://tempuri.org/", Use = System.Web.Services.Description.SoapBindingUse.Literal, ParameterStyle = System.Web.Services.Protocols.SoapParameterStyle.Wrapped)]
        public CAsset[] GetAssetList(string InputValue, ref COutputValue OutputValue)
        {
            object[] results = this.Invoke("GetAssetList", new object[] {
                    InputValue,
                    OutputValue});
            OutputValue = ((COutputValue)(results[1]));
            return ((CAsset[])(results[0]));
        }

        /// <remarks/>
        public System.IAsyncResult BeginGetAssetList(string InputValue, COutputValue OutputValue, System.AsyncCallback callback, object asyncState)
        {
            return this.BeginInvoke("GetAssetList", new object[] {
                    InputValue,
                    OutputValue}, callback, asyncState);
        }

        /// <remarks/>
        public CAsset[] EndGetAssetList(System.IAsyncResult asyncResult, out COutputValue OutputValue)
        {
            object[] results = this.EndInvoke(asyncResult);
            OutputValue = ((COutputValue)(results[1]));
            return ((CAsset[])(results[0]));
        }

        /// <remarks/>
        public void GetAssetListAsync(string InputValue, COutputValue OutputValue)
        {
            this.GetAssetListAsync(InputValue, OutputValue, null);
        }

        /// <remarks/>
        public void GetAssetListAsync(string InputValue, COutputValue OutputValue, object userState)
        {
            if ((this.GetAssetListOperationCompleted == null))
            {
                this.GetAssetListOperationCompleted = new System.Threading.SendOrPostCallback(this.OnGetAssetListOperationCompleted);
            }
            this.InvokeAsync("GetAssetList", new object[] {
                    InputValue,
                    OutputValue}, this.GetAssetListOperationCompleted, userState);
        }

        private void OnGetAssetListOperationCompleted(object arg)
        {
            if ((this.GetAssetListCompleted != null))
            {
                System.Web.Services.Protocols.InvokeCompletedEventArgs invokeArgs = ((System.Web.Services.Protocols.InvokeCompletedEventArgs)(arg));
                this.GetAssetListCompleted(this, new GetAssetListCompletedEventArgs(invokeArgs.Results, invokeArgs.Error, invokeArgs.Cancelled, invokeArgs.UserState));
            }
        }

        /// <remarks/>
        [System.Web.Services.Protocols.SoapDocumentMethodAttribute("http://tempuri.org/GetAsset", RequestNamespace = "http://tempuri.org/", ResponseNamespace = "http://tempuri.org/", Use = System.Web.Services.Description.SoapBindingUse.Literal, ParameterStyle = System.Web.Services.Protocols.SoapParameterStyle.Wrapped)]
        public CAsset GetAsset(string InputValue)
        {
            object[] results = this.Invoke("GetAsset", new object[] {
                    InputValue});
            return ((CAsset)(results[0]));
        }

        /// <remarks/>
        public System.IAsyncResult BeginGetAsset(string InputValue, System.AsyncCallback callback, object asyncState)
        {
            return this.BeginInvoke("GetAsset", new object[] {
                    InputValue}, callback, asyncState);
        }

        /// <remarks/>
        public CAsset EndGetAsset(System.IAsyncResult asyncResult)
        {
            object[] results = this.EndInvoke(asyncResult);
            return ((CAsset)(results[0]));
        }

        /// <remarks/>
        public void GetAssetAsync(string InputValue)
        {
            this.GetAssetAsync(InputValue, null);
        }

        /// <remarks/>
        public void GetAssetAsync(string InputValue, object userState)
        {
            if ((this.GetAssetOperationCompleted == null))
            {
                this.GetAssetOperationCompleted = new System.Threading.SendOrPostCallback(this.OnGetAssetOperationCompleted);
            }
            this.InvokeAsync("GetAsset", new object[] {
                    InputValue}, this.GetAssetOperationCompleted, userState);
        }

        private void OnGetAssetOperationCompleted(object arg)
        {
            if ((this.GetAssetCompleted != null))
            {
                System.Web.Services.Protocols.InvokeCompletedEventArgs invokeArgs = ((System.Web.Services.Protocols.InvokeCompletedEventArgs)(arg));
                this.GetAssetCompleted(this, new GetAssetCompletedEventArgs(invokeArgs.Results, invokeArgs.Error, invokeArgs.Cancelled, invokeArgs.UserState));
            }
        }

        /// <remarks/>
        [System.Web.Services.Protocols.SoapDocumentMethodAttribute("http://tempuri.org/UpdateAsset", RequestNamespace = "http://tempuri.org/", ResponseNamespace = "http://tempuri.org/", Use = System.Web.Services.Description.SoapBindingUse.Literal, ParameterStyle = System.Web.Services.Protocols.SoapParameterStyle.Wrapped)]
        public CApplicationMessage UpdateAsset(string InputValue)
        {
            object[] results = this.Invoke("UpdateAsset", new object[] {
                    InputValue});
            return ((CApplicationMessage)(results[0]));
        }

        /// <remarks/>
        public System.IAsyncResult BeginUpdateAsset(string InputValue, System.AsyncCallback callback, object asyncState)
        {
            return this.BeginInvoke("UpdateAsset", new object[] {
                    InputValue}, callback, asyncState);
        }

        /// <remarks/>
        public CApplicationMessage EndUpdateAsset(System.IAsyncResult asyncResult)
        {
            object[] results = this.EndInvoke(asyncResult);
            return ((CApplicationMessage)(results[0]));
        }

        /// <remarks/>
        public void UpdateAssetAsync(string InputValue)
        {
            this.UpdateAssetAsync(InputValue, null);
        }

        /// <remarks/>
        public void UpdateAssetAsync(string InputValue, object userState)
        {
            if ((this.UpdateAssetOperationCompleted == null))
            {
                this.UpdateAssetOperationCompleted = new System.Threading.SendOrPostCallback(this.OnUpdateAssetOperationCompleted);
            }
            this.InvokeAsync("UpdateAsset", new object[] {
                    InputValue}, this.UpdateAssetOperationCompleted, userState);
        }

        private void OnUpdateAssetOperationCompleted(object arg)
        {
            if ((this.UpdateAssetCompleted != null))
            {
                System.Web.Services.Protocols.InvokeCompletedEventArgs invokeArgs = ((System.Web.Services.Protocols.InvokeCompletedEventArgs)(arg));
                this.UpdateAssetCompleted(this, new UpdateAssetCompletedEventArgs(invokeArgs.Results, invokeArgs.Error, invokeArgs.Cancelled, invokeArgs.UserState));
            }
        }

        /// <remarks/>
        [System.Web.Services.Protocols.SoapDocumentMethodAttribute("http://tempuri.org/UpdateAndSendReport", RequestNamespace = "http://tempuri.org/", ResponseNamespace = "http://tempuri.org/", Use = System.Web.Services.Description.SoapBindingUse.Literal, ParameterStyle = System.Web.Services.Protocols.SoapParameterStyle.Wrapped)]
        public string UpdateAndSendReport(string ClientKey, string InputValue)
        {
            object[] results = this.Invoke("UpdateAndSendReport", new object[] {
                    ClientKey,
                    InputValue});
            return ((string)(results[0]));
        }

        /// <remarks/>
        public System.IAsyncResult BeginUpdateAndSendReport(string ClientKey, string InputValue, System.AsyncCallback callback, object asyncState)
        {
            return this.BeginInvoke("UpdateAndSendReport", new object[] {
                    ClientKey,
                    InputValue}, callback, asyncState);
        }

        /// <remarks/>
        public CApplicationMessage EndUpdateAndSendReport(System.IAsyncResult asyncResult)
        {
            object[] results = this.EndInvoke(asyncResult);
            return ((CApplicationMessage)(results[0]));
        }

        /// <remarks/>
        public void UpdateAndSendReportAsync(string ClientKey, string InputValue)
        {
            this.UpdateAndSendReportAsync(ClientKey, InputValue, null);
        }

        /// <remarks/>
        public void UpdateAndSendReportAsync(string ClientKey, string InputValue, object userState)
        {
            if ((this.UpdateAndSendReportOperationCompleted == null))
            {
                this.UpdateAndSendReportOperationCompleted = new System.Threading.SendOrPostCallback(this.OnUpdateAndSendReportOperationCompleted);
            }
            this.InvokeAsync("UpdateAndSendReport", new object[] {
                    ClientKey,
                    InputValue}, this.UpdateAndSendReportOperationCompleted, userState);
        }

        private void OnUpdateAndSendReportOperationCompleted(object arg)
        {
            if ((this.UpdateAndSendReportCompleted != null))
            {
                System.Web.Services.Protocols.InvokeCompletedEventArgs invokeArgs = ((System.Web.Services.Protocols.InvokeCompletedEventArgs)(arg));
                this.UpdateAndSendReportCompleted(this, new UpdateAndSendReportCompletedEventArgs(invokeArgs.Results, invokeArgs.Error, invokeArgs.Cancelled, invokeArgs.UserState));
            }
        }

        /// <remarks/>
        public new void CancelAsync(object userState)
        {
            base.CancelAsync(userState);
        }
    }

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
    [System.Xml.Serialization.XmlIncludeAttribute(typeof(CAsset))]
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
    public partial class CAsset : CObjectBase
    {

        private int idField;

        private string codeField;

        private string nameField;

        private string descriptionField;

        private string productionYearField;

        private string madeInField;

        private string serialNumberField;

        private System.DateTime purchasedDateField;

        private System.DateTime usedDateField;

        private string accessoriesField;

        private System.Nullable<int> guaranteeDurationField;

        private System.Nullable<int> transactionIDField;

        private System.Nullable<int> transactionDetailIDField;

        private System.Nullable<double> originalCostField;

        private System.Nullable<int> currencyIDField;

        private string currencyCodeField;

        private System.Nullable<int> categoryField;

        private string categoryNameField;

        private System.Nullable<int> statusField;

        private string statusStringField;

        private System.Nullable<bool> secondhandField;

        private System.DateTime desposedDateField;

        private System.Nullable<double> desposedAmountField;

        private string desposedReasonField;

        private System.Nullable<int> departmentIDField;

        private string departmentNameField;

        private System.Nullable<int> employeeIDField;

        private string employeeNameField;

        private System.Nullable<int> assetAccountField;

        private string assetAccountCodeField;

        private System.Nullable<int> depreciationAccountField;

        private string depreciationAccountCodeField;

        private System.Nullable<int> expenseAccountField;

        private string expenseAccountCodeField;

        private System.Nullable<double> originalLifeTimeField;

        private System.Nullable<int> depreciationMethodField;

        private string depreciationMethodNameField;

        private System.Nullable<System.DateTime> createdDateTimeField;

        private System.Nullable<int> createdByField;

        private string createdByNameField;

        private System.Nullable<int> lastUpdatedDateTimeField;

        private System.Nullable<int> lastUpdatedByField;

        private string lastUpdatedByNameField;

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
        public string ProductionYear
        {
            get
            {
                return this.productionYearField;
            }
            set
            {
                this.productionYearField = value;
            }
        }

        /// <remarks/>
        public string MadeIn
        {
            get
            {
                return this.madeInField;
            }
            set
            {
                this.madeInField = value;
            }
        }

        /// <remarks/>
        public string SerialNumber
        {
            get
            {
                return this.serialNumberField;
            }
            set
            {
                this.serialNumberField = value;
            }
        }

        /// <remarks/>
        public System.DateTime PurchasedDate
        {
            get
            {
                return this.purchasedDateField;
            }
            set
            {
                this.purchasedDateField = value;
            }
        }

        /// <remarks/>
        public System.DateTime UsedDate
        {
            get
            {
                return this.usedDateField;
            }
            set
            {
                this.usedDateField = value;
            }
        }

        /// <remarks/>
        public string Accessories
        {
            get
            {
                return this.accessoriesField;
            }
            set
            {
                this.accessoriesField = value;
            }
        }

        /// <remarks/>
        [System.Xml.Serialization.XmlElementAttribute(IsNullable = true)]
        public System.Nullable<int> GuaranteeDuration
        {
            get
            {
                return this.guaranteeDurationField;
            }
            set
            {
                this.guaranteeDurationField = value;
            }
        }

        /// <remarks/>
        [System.Xml.Serialization.XmlElementAttribute(IsNullable = true)]
        public System.Nullable<int> TransactionID
        {
            get
            {
                return this.transactionIDField;
            }
            set
            {
                this.transactionIDField = value;
            }
        }

        /// <remarks/>
        [System.Xml.Serialization.XmlElementAttribute(IsNullable = true)]
        public System.Nullable<int> TransactionDetailID
        {
            get
            {
                return this.transactionDetailIDField;
            }
            set
            {
                this.transactionDetailIDField = value;
            }
        }

        /// <remarks/>
        [System.Xml.Serialization.XmlElementAttribute(IsNullable = true)]
        public System.Nullable<double> OriginalCost
        {
            get
            {
                return this.originalCostField;
            }
            set
            {
                this.originalCostField = value;
            }
        }

        /// <remarks/>
        [System.Xml.Serialization.XmlElementAttribute(IsNullable = true)]
        public System.Nullable<int> CurrencyID
        {
            get
            {
                return this.currencyIDField;
            }
            set
            {
                this.currencyIDField = value;
            }
        }

        /// <remarks/>
        public string CurrencyCode
        {
            get
            {
                return this.currencyCodeField;
            }
            set
            {
                this.currencyCodeField = value;
            }
        }

        /// <remarks/>
        [System.Xml.Serialization.XmlElementAttribute(IsNullable = true)]
        public System.Nullable<int> Category
        {
            get
            {
                return this.categoryField;
            }
            set
            {
                this.categoryField = value;
            }
        }

        /// <remarks/>
        public string CategoryName
        {
            get
            {
                return this.categoryNameField;
            }
            set
            {
                this.categoryNameField = value;
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
        public string StatusString
        {
            get
            {
                return this.statusStringField;
            }
            set
            {
                this.statusStringField = value;
            }
        }

        /// <remarks/>
        [System.Xml.Serialization.XmlElementAttribute(IsNullable = true)]
        public System.Nullable<bool> Secondhand
        {
            get
            {
                return this.secondhandField;
            }
            set
            {
                this.secondhandField = value;
            }
        }

        /// <remarks/>
        public System.DateTime DesposedDate
        {
            get
            {
                return this.desposedDateField;
            }
            set
            {
                this.desposedDateField = value;
            }
        }

        /// <remarks/>
        [System.Xml.Serialization.XmlElementAttribute(IsNullable = true)]
        public System.Nullable<double> DesposedAmount
        {
            get
            {
                return this.desposedAmountField;
            }
            set
            {
                this.desposedAmountField = value;
            }
        }

        /// <remarks/>
        public string DesposedReason
        {
            get
            {
                return this.desposedReasonField;
            }
            set
            {
                this.desposedReasonField = value;
            }
        }

        /// <remarks/>
        [System.Xml.Serialization.XmlElementAttribute(IsNullable = true)]
        public System.Nullable<int> DepartmentID
        {
            get
            {
                return this.departmentIDField;
            }
            set
            {
                this.departmentIDField = value;
            }
        }

        /// <remarks/>
        public string DepartmentName
        {
            get
            {
                return this.departmentNameField;
            }
            set
            {
                this.departmentNameField = value;
            }
        }

        /// <remarks/>
        [System.Xml.Serialization.XmlElementAttribute(IsNullable = true)]
        public System.Nullable<int> EmployeeID
        {
            get
            {
                return this.employeeIDField;
            }
            set
            {
                this.employeeIDField = value;
            }
        }

        /// <remarks/>
        public string EmployeeName
        {
            get
            {
                return this.employeeNameField;
            }
            set
            {
                this.employeeNameField = value;
            }
        }

        /// <remarks/>
        [System.Xml.Serialization.XmlElementAttribute(IsNullable = true)]
        public System.Nullable<int> AssetAccount
        {
            get
            {
                return this.assetAccountField;
            }
            set
            {
                this.assetAccountField = value;
            }
        }

        /// <remarks/>
        public string AssetAccountCode
        {
            get
            {
                return this.assetAccountCodeField;
            }
            set
            {
                this.assetAccountCodeField = value;
            }
        }

        /// <remarks/>
        [System.Xml.Serialization.XmlElementAttribute(IsNullable = true)]
        public System.Nullable<int> DepreciationAccount
        {
            get
            {
                return this.depreciationAccountField;
            }
            set
            {
                this.depreciationAccountField = value;
            }
        }

        /// <remarks/>
        public string DepreciationAccountCode
        {
            get
            {
                return this.depreciationAccountCodeField;
            }
            set
            {
                this.depreciationAccountCodeField = value;
            }
        }

        /// <remarks/>
        [System.Xml.Serialization.XmlElementAttribute(IsNullable = true)]
        public System.Nullable<int> ExpenseAccount
        {
            get
            {
                return this.expenseAccountField;
            }
            set
            {
                this.expenseAccountField = value;
            }
        }

        /// <remarks/>
        public string ExpenseAccountCode
        {
            get
            {
                return this.expenseAccountCodeField;
            }
            set
            {
                this.expenseAccountCodeField = value;
            }
        }

        /// <remarks/>
        [System.Xml.Serialization.XmlElementAttribute(IsNullable = true)]
        public System.Nullable<double> OriginalLifeTime
        {
            get
            {
                return this.originalLifeTimeField;
            }
            set
            {
                this.originalLifeTimeField = value;
            }
        }

        /// <remarks/>
        [System.Xml.Serialization.XmlElementAttribute(IsNullable = true)]
        public System.Nullable<int> DepreciationMethod
        {
            get
            {
                return this.depreciationMethodField;
            }
            set
            {
                this.depreciationMethodField = value;
            }
        }

        /// <remarks/>
        public string DepreciationMethodName
        {
            get
            {
                return this.depreciationMethodNameField;
            }
            set
            {
                this.depreciationMethodNameField = value;
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
        public string CreatedByName
        {
            get
            {
                return this.createdByNameField;
            }
            set
            {
                this.createdByNameField = value;
            }
        }

        /// <remarks/>
        [System.Xml.Serialization.XmlElementAttribute(IsNullable = true)]
        public System.Nullable<int> LastUpdatedDateTime
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
        public string LastUpdatedByName
        {
            get
            {
                return this.lastUpdatedByNameField;
            }
            set
            {
                this.lastUpdatedByNameField = value;
            }
        }
    }

    /// <remarks/>
    [System.CodeDom.Compiler.GeneratedCodeAttribute("wsdl", "2.0.50727.42")]
    public delegate void GetAssetListCompletedEventHandler(object sender, GetAssetListCompletedEventArgs e);

    /// <remarks/>
    [System.CodeDom.Compiler.GeneratedCodeAttribute("wsdl", "2.0.50727.42")]
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    public partial class GetAssetListCompletedEventArgs : System.ComponentModel.AsyncCompletedEventArgs
    {

        private object[] results;

        internal GetAssetListCompletedEventArgs(object[] results, System.Exception exception, bool cancelled, object userState) :
            base(exception, cancelled, userState)
        {
            this.results = results;
        }

        /// <remarks/>
        public CAsset[] Result
        {
            get
            {
                this.RaiseExceptionIfNecessary();
                return ((CAsset[])(this.results[0]));
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
    public delegate void GetAssetCompletedEventHandler(object sender, GetAssetCompletedEventArgs e);

    /// <remarks/>
    [System.CodeDom.Compiler.GeneratedCodeAttribute("wsdl", "2.0.50727.42")]
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    public partial class GetAssetCompletedEventArgs : System.ComponentModel.AsyncCompletedEventArgs
    {

        private object[] results;

        internal GetAssetCompletedEventArgs(object[] results, System.Exception exception, bool cancelled, object userState) :
            base(exception, cancelled, userState)
        {
            this.results = results;
        }

        /// <remarks/>
        public CAsset Result
        {
            get
            {
                this.RaiseExceptionIfNecessary();
                return ((CAsset)(this.results[0]));
            }
        }
    }

    /// <remarks/>
    [System.CodeDom.Compiler.GeneratedCodeAttribute("wsdl", "2.0.50727.42")]
    public delegate void UpdateAssetCompletedEventHandler(object sender, UpdateAssetCompletedEventArgs e);

    /// <remarks/>
    [System.CodeDom.Compiler.GeneratedCodeAttribute("wsdl", "2.0.50727.42")]
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    public partial class UpdateAssetCompletedEventArgs : System.ComponentModel.AsyncCompletedEventArgs
    {

        private object[] results;

        internal UpdateAssetCompletedEventArgs(object[] results, System.Exception exception, bool cancelled, object userState) :
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

    /// <remarks/>
    [System.CodeDom.Compiler.GeneratedCodeAttribute("wsdl", "2.0.50727.42")]
    public delegate void UpdateAndSendReportCompletedEventHandler(object sender, UpdateAndSendReportCompletedEventArgs e);

    /// <remarks/>
    [System.CodeDom.Compiler.GeneratedCodeAttribute("wsdl", "2.0.50727.42")]
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    public partial class UpdateAndSendReportCompletedEventArgs : System.ComponentModel.AsyncCompletedEventArgs
    {

        private object[] results;

        internal UpdateAndSendReportCompletedEventArgs(object[] results, System.Exception exception, bool cancelled, object userState) :
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