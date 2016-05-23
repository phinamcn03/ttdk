using System;
using System.Collections.Generic;
using System.Text;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Base;

namespace FWS.VnAccounting.BusinessLayer.BusinessObjects.GeneralLedger
{
    [Serializable]
    public class CAccountList : CObjectBase
    {
        public CAccountList()
        {
            CSVFields = new string[] { "ID", "Code", "Name", "ParentID", "Status", "Level", "Type" };
        }
        #region Public property

        public int ID { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public string DisplayName { get; set; }
        public int? ParentID { get; set; }
        public int? Status { get; set; }
        public int? Level { get; set; }
        public int? Type { get; set; }
        public bool IsDefault { get; set; }
        public int ChildCount { get; set; }
        public DateTime? CreatedDateTime { get; set; }
        public int? CreatedBy { get; set; }
        public DateTime? LastUpdatedDateTime { get; set; }
        public int? LastUpdatedBy { get; set; }

        #endregion
    }
}
