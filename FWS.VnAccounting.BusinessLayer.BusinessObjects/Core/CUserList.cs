using System;
using System.Collections.Generic;
using System.Text;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Base;

namespace FWS.VnAccounting.BusinessLayer.BusinessObjects.Core
{
    [Serializable]
    public class CUserList : CObjectBase
    {
        public CUserList()
        {
            CSVFields = new string[] { "ID", "LoginName", "Password", "Session", "FullName", "UserGroupID", "Status", "ClientGroupID", "LanguageID", "LastActionDateTime", "CreatedDateTime", "CreatedBy", "LastUpdatedDateTime", "LastUpdatedBy" };
        }
        #region Public property

        public int ID { get; set; }
        public string LoginName { get; set; }
        public string Password { get; set; }
        public string Session { get; set; }
        public string FullName { get; set; }
        public int? UserGroupID { get; set; }
        public int Status { get; set; }
        public int? ClientGroupID { get; set; }
        public int? LanguageID { get; set; }
        public DateTime? LastActionDateTime { get; set; }
        public DateTime? CreatedDateTime { get; set; }
        public int? CreatedBy { get; set; }
        public DateTime? LastUpdatedDateTime { get; set; }
        public int? LastUpdatedBy { get; set; }

        #endregion
    }
}
