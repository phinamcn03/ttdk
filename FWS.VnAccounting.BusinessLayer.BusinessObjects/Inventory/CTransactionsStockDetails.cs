using System; 
using System.Collections.Generic; 
using System.Text; 
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Base;

namespace FWS.VnAccounting.BusinessLayer.BusinessObjects.Inventory
{
    [Serializable]
    public class CTransactionsStockDetails : CObjectBase
    {
        public CTransactionsStockDetails()
        {
            CSVFields = new string[] { "ID", "TransactionStockID", "StockID", "ItemID", "Quantity", "Price", "Amount", "ExpDate", "SerialNo", "Status", "Description", "CreatedDateTime", "CreatedBy", "LastUpdatedDateTime", "LastUpdatedBy" };
        }
        #region Public property

        public int ID { get; set; }
        public int TransactionStockID { get; set; }
        public int? StockID { get; set; }
        public string StockName { get; set; }
        public int ItemID { get; set; }
        public string ItemCode { get; set; }
        public string ItemName { get; set; }
        public int UnitID { get; set; }
        public string UnitName { get; set; }
        public double Quantity { get; set; }
        public double? Price { get; set; }
        public double? Amount { get; set; }
        public DateTime? ExpDate { get; set; }
        public string SerialNo { get; set; }
        public int Status { get; set; }
        public string Description { get; set; }
        public DateTime CreatedDateTime { get; set; }
        public int? CreatedBy { get; set; }
        public DateTime? LastUpdatedDateTime { get; set; }
        public int? LastUpdatedBy { get; set; }

        #endregion
    }
}
