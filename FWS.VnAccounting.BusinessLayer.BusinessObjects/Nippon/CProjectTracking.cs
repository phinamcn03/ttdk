using System;
using System.Collections.Generic;
using System.Text;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Base;

namespace FWS.VnAccounting.BusinessLayer.BusinessObjects.Nippon
{
    [Serializable]
    public class CProjectTracking : CObjectBase
    {
        public CProjectTracking()
        {
        }
        #region Public property

        public int ID { get; set; }
        public int ParentID { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public int IsCompleted { get; set; }
        public string StepCompleted { get; set; }
        public string SupplierName { get; set; }
        public int SupplierID { get; set; }
        public DateTime FromDate { get; set; }
        public DateTime ToDate { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public decimal QuantityOrder { get; set; }
        public decimal UnitPrice { get; set; }
        public int Status { get; set; }
        public DateTime CreatedDateTime { get; set; }
        public int CreatedBy { get; set; }
        public DateTime LastUpdatedDateTime { get; set; }
        public int LastUpdatedBy { get; set; }

        #endregion
    }
}
