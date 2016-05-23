using System; 
using System.Collections.Generic; 
using System.Text; 
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Base;

namespace FWS.VnAccounting.BusinessLayer.BusinessObjects.Inventory
{
    [Serializable]
    public class CTransactionsStock : CObjectBase
    {
        public CTransactionsStock()
        {
            CSVFields = new string[] { "ID", "ClientID", "RefDate", "RefType", "RefNo", "ObjectType", "ObjectID", "ObjectName", "ReferenceID", "InwardStock", "OutwardStock", "InwardID", "OutwardID", "Description", "IsPosted", "IsCancel", "PostedBy", "CancelBy", "Status", "CreatedDateTime", "CreatedBy", "LastUpdatedDateTime", "LastUpdatedBy" };
        }
        #region Public property

        public int ID { get; set; }
        public int ClientID { get; set; }
        public DateTime RefDate { get; set; }
        public int RefType { get; set; }
        public string RefTypeName { get; set; }
        public string RefNo { get; set; }
        public int ObjectType { get; set; }
        public int ObjectID { get; set; }
        public string ObjectName { get; set; }
        public string ReferenceID { get; set; }
        public int InwardStock { get; set; }
        public string InwardStockName { get; set; }
        public int OutwardStock { get; set; }
        public string OutwardStockName { get; set; }
        public int InwardID { get; set; }
        public string InwardRefNo { get; set; }
        public int OutwardID { get; set; }
        public string OutwardRefNo { get; set; }
        public string Description { get; set; }
        public int IsPosted { get; set; }
        public int IsCancel { get; set; }
        public int PostedBy { get; set; }
        public string PostedByName { get; set; }
        public int CancelBy { get; set; }
        public string CancelByName { get; set; }
        public int Status { get; set; }
        public string StatusName { get; set; }
        public DateTime CreatedDateTime { get; set; }
        
        public int? CreatedBy { get; set; }
        public string CreatedByName { get; set; }
        public DateTime? LastUpdatedDateTime { get; set; }
        public int? LastUpdatedBy { get; set; }
        public string LastUpdatedByName { get; set; }

        #endregion
    }
}
