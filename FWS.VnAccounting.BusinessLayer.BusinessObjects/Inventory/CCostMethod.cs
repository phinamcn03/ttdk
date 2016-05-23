using System;
using System.Collections.Generic;
using System.Text;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Base;

namespace FWS.VnAccounting.BusinessLayer.BusinessObjects.Inventory
{
    [Serializable]
    public class CCostMethod : CObjectBase
    {
        public CCostMethod()
        {
            CSVFields = new string[] { "ID", "MethodID", "MethodName", "Status"};
        }
        #region Public property

        public int ID { get; set; }
        public string MethodID { get; set; }
        public string MethodName { get; set; }
        public int? Status { get; set; }
        public DateTime? CreateDateTime { get; set; }
        public int? CreatedBy { get; set; }
        public string CreatedByName { get; set; }
        public DateTime? LastUpdatedDateTime { get; set; }
        public int? LastUpdatedBy { get; set; }
        public string LastUpdatedByName { get; set; }
        #endregion
    }
}
