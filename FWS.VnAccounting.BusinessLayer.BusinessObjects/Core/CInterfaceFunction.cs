using System;
using System.Collections.Generic;
using System.Text;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Base;

namespace FWS.VnAccounting.BusinessLayer.BusinessObjects.Core
{
    [Serializable]
    public class CInterfaceFunction : CObjectBase
    {
        public CInterfaceFunction()
        {
            CSVFields = new string[] { "ID", "Code", "Name", "ParentID", "ZOrder", "Status", "IsDefault", "FilterID", "IsLoad", "LinkURL", "CreatedDateTime", "CreatedBy", "LastUpdatedDateTime", "LastUpdatedBy", "ChildCount","Insert","Update","Delete" };
        }
        #region Public property

        public int ID { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public int? ParentID { get; set; }
        public int? ZOrder { get; set; }
        public int Status { get; set; }
        public bool? IsDefault { get; set; }
        public bool? IsLoad { get; set; }
        public string FilterID { get; set; }
        public string LinkURL { get; set; }
        public DateTime? CreatedDateTime { get; set; }
        public int? CreatedBy { get; set; }
        public DateTime? LastUpdatedDateTime { get; set; }
        public int? LastUpdatedBy { get; set; }
        public int? ChildCount { get; set; }
        public int? IsUsed { get; set; }
        public int OpenType { get; set; }
        /// <remarks/>
        public int Insert { get; set; }
        /// <remarks/>
        public int Update { get; set; }

        public int Delete { get; set; }
        #endregion
    }
}
