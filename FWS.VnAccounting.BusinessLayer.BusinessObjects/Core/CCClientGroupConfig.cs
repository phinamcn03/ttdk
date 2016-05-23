using System;
using System.Collections.Generic;
using System.Text;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Base;

namespace FWS.VnAccounting.BusinessLayer.BusinessObjects.Core
{
    [Serializable]
    public class CClientGroupConfig : CObjectBase
    {
        public CClientGroupConfig()
        {
            CSVFields = new string[] { "ID", "ClientGroupID", "Code", "Name", "Value", "ValueEx1", "ValueEx2", "ZOrder", "CreatedDateTime", "CreatedBy", "LastUpdatedDateTime", "LastUpdatedBy" };
        }
        #region Public property

        public int ID { get; set; }
        public int? ClientGroupID { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public string Value { get; set; }
        public string ValueEx1 { get; set; }
        public string ValueEx2 { get; set; }
        public int? ZOrder { get; set; }
        public DateTime? CreatedDateTime { get; set; }
        public int? CreatedBy { get; set; }
        public DateTime? LastUpdatedDateTime { get; set; }
        public int? LastUpdatedBy { get; set; }

        #endregion
    }
}
