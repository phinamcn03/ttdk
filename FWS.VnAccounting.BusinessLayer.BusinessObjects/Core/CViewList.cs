using System;
using System.Collections.Generic;
using System.Text;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Base;

namespace FWS.VnAccounting.BusinessLayer.BusinessObjects.Core
{
    [Serializable]
    public class CViewList : CObjectBase
    {
        public CViewList()
        {
            CSVFields = new string[] { "ID", "Code", "Name", "ClientGroupID", "UserID", "PageID", "ReportID", "Status", "ZOrder", "AdditionalSQL", "CreatedDateTime", "CreatedBy", "LastUpdatedDateTime", "LastUpdatedID" };
        }
        #region Public property

        public int ID { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int? ClientGroupID { get; set; }
        public int? UserID { get; set; }
        public int? PageID { get; set; }
        public int? ReportID { get; set; }
        public int Status { get; set; }
        public int ZOrder { get; set; }
        public string AdditionalSQL { get; set; }
        public DateTime? CreatedDateTime { get; set; }
        public int? CreatedBy { get; set; }
        public DateTime? LastUpdatedDateTime { get; set; }
        public int? LastUpdatedID { get; set; }

        #endregion
    }
}
