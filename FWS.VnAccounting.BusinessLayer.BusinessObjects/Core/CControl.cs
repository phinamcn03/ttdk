using System;
using System.Collections.Generic;
using System.Text;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Base;

namespace FWS.VnAccounting.BusinessLayer.BusinessObjects.Core
{
    [Serializable]
    public class CControl : CObjectBase
    {
        public CControl()
        {
            CSVFields = new string[] { "ID", "CustomControl", "Code", "Name", "ToolTip", "ParentID", "ZOrder", "IsDefault", "CreatedDateTime", "CreatedBy", "LastUpdatedDateTime", "LastUpdatedBy" };
        }
        #region Public property

        public int ID { get; set; }
        public string CustomControl { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public string Caption { get; set; }
        public string ToolTip { get; set; }
        public int? ParentID { get; set; }
        public int? ZOrder { get; set; }
        public bool? IsDefault { get; set; }
        public DateTime CreatedDateTime { get; set; }
        public int? CreatedBy { get; set; }
        public DateTime? LastUpdatedDateTime { get; set; }
        public int? LastUpdatedBy { get; set; }

        #endregion
    }
}
