using System;
using System.Collections.Generic;
using System.Text;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Base;

namespace FWS.VnAccounting.BusinessLayer.BusinessObjects.Inventory
{
    [Serializable]
    public class COutwardDetail : CObjectBase
    {
        public COutwardDetail()
        {
            CSVFields = new string[] { "MasterID", "ID", "ItemID", "ItemCode", "ItemName", "UnitName", "Quantity", "Price", "Amount", "StockID", "StockName", "CreditAccount", "CreditAccountName", "DebitAccount", "DebitAccountName", "ExpDate", "SerialNo", "Status", "Description", "CostMethod" };
        }
        #region Public property

        public int MasterID { get; set; }
        public int ID { get; set; }
        public int ItemID { get; set; }
        public string ItemCode { get; set; }
        public string ItemName { get; set; }
        public int UnitID { get; set; }
        public string UnitName { get; set; }
        public double Quantity { get; set; }
        public double Price { get; set; }
        public double Amount { get; set; }
        public int StockID { get; set; }
        public string StockName { get; set; }
        public int? CreditAccount { get; set; }
        public string CreditAccountName { get; set; }
        public int? DebitAccount { get; set; }
        public string DebitAccountName { get; set; }
        public DateTime? ExpDate { get; set; }
        public string SerialNo { get; set; }
        public int Status { get; set; }
        public string Description { get; set; }
        public string CostMethod { get; set; }
        public string CreatedByName { get; set; }
        public string LastUpdatedByName { get; set; }
        #endregion
    }
}
