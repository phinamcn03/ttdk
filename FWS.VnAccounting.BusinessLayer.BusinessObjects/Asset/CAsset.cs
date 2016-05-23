using System;
using System.Collections.Generic;
using System.Text;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Base;

namespace FWS.VnAccounting.BusinessLayer.BusinessObjects.Asset
{

    [Serializable]
    public class CAsset : CObjectBase
    {
	    public CAsset()
	    {
		    CSVFields = new string[]{"ID","Code","Name","Description","ProductionYear","MadeIn","SerialNumber","PurchasedDate","UsedDate","Accessories","GuaranteeDuration","TransactionID","TransactionDetailID","OriginalCost","CurrencyID","Category","Status","Secondhand","DesposedDate","DesposedAmount","DesposedReason","DepartmentID","EmployeeID","AssetAccount","DepreciationAccount","ExpenseAccount","OriginalLifeTime","DepreciationMethod","CreatedDateTime","CreatedBy","LastUpdatedDateTime","LastUpdatedBy"};
	    }
	    #region Public property
 
	    public int ID { get; set;}
	    public string Code { get; set;}
	    public string Name { get; set;}
	    public string Description { get; set;}
	    public string ProductionYear { get; set;}
	    public string MadeIn { get; set;}
	    public string SerialNumber { get; set;}
	    public DateTime PurchasedDate { get; set;}
        public DateTime UsedDate { get; set; }
	    public string Accessories { get; set;}
	    public int? GuaranteeDuration { get; set;}
	    public int? TransactionID { get; set;}
	    public int? TransactionDetailID { get; set;}
	    public double? OriginalCost { get; set;}
	    public int? CurrencyID { get; set;}
        public string CurrencyCode { get; set; }
	    public int? Category { get; set;}
        public string CategoryName { get; set; }
	    public int? Status { get; set;}
        public string StatusString { get; set; }
	    public bool? Secondhand { get; set;}
        public DateTime DesposedDate { get; set; }
	    public double? DesposedAmount { get; set;}
	    public string DesposedReason { get; set;}
	    public int? DepartmentID { get; set;}
        public string DepartmentName { get; set; }
	    public int? EmployeeID { get; set;}
        public string EmployeeName { get; set; }
	    public int? AssetAccount { get; set;}
        public string AssetAccountCode { get; set; }
	    public int? DepreciationAccount { get; set;}
        public string DepreciationAccountCode { get; set; }
	    public int? ExpenseAccount { get; set;}
        public string ExpenseAccountCode { get; set; }
	    public double? OriginalLifeTime { get; set;}
	    public int? DepreciationMethod { get; set;}
        public string DepreciationMethodName { get; set; }
	    public DateTime? CreatedDateTime { get; set;}
	    public int? CreatedBy { get; set;}
        public string CreatedByName { get; set; }
	    public int? LastUpdatedDateTime { get; set;}
	    public int? LastUpdatedBy { get; set;}
        public string LastUpdatedByName { get; set; }
	    #endregion
    }

}
