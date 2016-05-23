using System;
using System.Collections.Generic;
using System.Text;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Base;

namespace FWS.VnAccounting.BusinessLayer.BusinessObjects.GeneralLedger
{
    [Serializable]
    public class CTransaction : CObjectBase
    {
        public CTransaction()
        {
            CSVFields = new string[] { "ID", "Code", "ClientGroupID", "RefType", "RefID", "Amount", "IsBalance", "IsPosted", "IsCancel", "RefDate", "ExchangeRate", "CurrencyID", "Note", "PostedDate", "PostedBy", "CancelDate", "CancelBy", "CreatedDateTime", "CreatedBy", "LastUpdatedDateTime", "LastUpdatedBy" };
        }
        #region Public property

        public int ID { get; set; }
        public string RefNo { get; set; }
        public int? ClientGroupID { get; set; }
        public int? RefType { get; set; }
        public string RefTypeName { get; set; }
        public int? PartnerID { get; set; }
        public string PartnerCode { get; set; }
        public string PartnerName { get; set; }
        public string ContactName { get; set; }
        public int ObjectType { get; set; }
        public int? RefID { get; set; }
        public int TransactionMasterID { get; set; }
        public int TransactionDetailID { get; set; }
        public decimal Amount { get; set; }
        public decimal TotalAmount { get; set; }
        public decimal PayAmount { get; set; }
        public decimal UnPayAmount { get; set; }
        public decimal PayedAmount { get; set; }
        public string Description { get; set; }
        public bool IsBalance { get; set; }
        public bool IsPosted { get; set; }
        public bool IsCancel { get; set; }
        public DateTime? RefDate { get; set; }
        public double? ExchangeRate { get; set; }
        public int? CurrencyID { get; set; }
        public string Note { get; set; }
        public DateTime? PostedDate { get; set; }
        public int? PostedBy { get; set; }
        public string PostedByName { get; set; }
        public DateTime? CancelDate { get; set; }
        public int? CancelBy { get; set; }
        public string CancelByName { get; set; }
        public DateTime? CreatedDateTime { get; set; }
        public int? CreatedBy { get; set; }
        public string CreatedByName { get; set; }
        public DateTime? LastUpdatedDateTime { get; set; }
        public int? LastUpdatedBy { get; set; }
        public string LastUpdatedByName { get; set; }
        public int Status { get; set; }
        public string StatusString { get; set; }
        #endregion
    }
}
