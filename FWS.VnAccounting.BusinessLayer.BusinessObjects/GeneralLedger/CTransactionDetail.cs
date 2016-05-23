using System;
using System.Collections.Generic;
using System.Text;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Base;

namespace FWS.VnAccounting.BusinessLayer.BusinessObjects.GeneralLedger
{
    [Serializable]
    public class CTransactionDetail : CObjectBase
    {
        public CTransactionDetail()
        {
            CSVFields = new string[] { "ID", "TransactionID", "DebitAccount", "DebitAmount", "CreditAccount", "CreditAmount", "TaxRate", "Status", "Note", "CreatedDateTime", "CreatedBy", "LastUpdatedDateTime", "LastUpdatedBy" };
        }
        #region Public property

        public int ID { get; set; }
        public int TransactionID { get; set; }
        public int ItemID { get; set; }
        public string ItemCode { get; set; }
        public string ItemName { get; set; }
        public string UnitID { get; set; }
        public string UnitName { get; set; }
        public string StockID { get; set; }
        public string StockName { get; set; }
        public int? DebitAccount { get; set; }
        public string DebitAccountCode { get; set; }
        public string DebitAccountName { get; set; }
        public double? DebitAmount { get; set; }
        public int? CreditAccount { get; set; }
        public string CreditAccountCode { get; set; }
        public string CreditAccountName { get; set; }
        public double? CreditAmount { get; set; }
        public decimal Quantity { get; set; }
        public decimal Price { get; set; }
        public string RefNo { get; set; }
        public DateTime RefDate { get; set; }
        public int PartnerID { get; set; }
        public string PartnerName { get; set; }
        public decimal Amount { get; set; }
        public decimal TotalAmount { get; set; }
        public decimal ItemAmount { get; set; }
        public decimal PayedAmount { get; set; }
        public decimal UnPayAmount { get; set; }
        public decimal UPayAmount { get; set; }
        public decimal? TaxRate { get; set; }
        public int InputTaxAccount { get; set; }
        public string InputTaxAccountCode { get; set; }
        public string InputTaxAccountName { get; set; }
        public int OutputTaxAccount { get; set; }
        public string OutputTaxAccountCode { get; set; }
        public string OutputTaxAccountName { get; set; }
        public int InventoryAccount { get; set; }
        public string InventoryAccountCode { get; set; }
        public string InventoryAccountName { get; set; }

        public string TaxName { get; set; }
        public int? Status { get; set; }
        public string Note { get; set; }
        public DateTime? CreatedDateTime { get; set; }
        public int? CreatedBy { get; set; }
        public string CreatedByName { get; set; }
        public DateTime? LastUpdatedDateTime { get; set; }
        public int? LastUpdatedBy { get; set; }
        public string LastUpdatedByName { get; set; }

        #endregion
    }
}
