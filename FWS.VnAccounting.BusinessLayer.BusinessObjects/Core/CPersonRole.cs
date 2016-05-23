using System;
using System.Collections.Generic;
using System.Text;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Base;

namespace FWS.VnAccounting.BusinessLayer.BusinessObjects.Core
{
    [Serializable]
    public class CPersonRole : CObjectBase
    {
        public CPersonRole()
        {
            CSVFields = new string[] { "ID", "ClientGroupID", "Code", "Name", "ParentID", "Status", "RootID", "CreatedDateTime", "CreatedBy", "LastUpdatedDateTime", "LastUpdatedBy" };
        }
        #region Public property

        public int ID { get; set; }
        public int? ClientGroupID { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public int? ParentID { get; set; }
        public int? Status { get; set; }
        public int? RootID { get; set; }
        public DateTime? CreatedDateTime { get; set; }
        public int? CreatedBy { get; set; }
        public DateTime? LastUpdatedDateTime { get; set; }
        public int? LastUpdatedBy { get; set; }
        public int ChildCount { get; set; }
        public int Level { get; set; }
        #endregion
    }
}
