using System;
using System.Collections.Generic;
using System.Text;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Base;

namespace FWS.VnAccounting.BusinessLayer.BusinessObjects.Core
{
    [Serializable]
    public class CModule : CObjectBase
    {
        public CModule()
        {
            CSVFields = new string[] { "ID", "Code", "Name", "ParentID", "ApplicationID", "IsDefault", "ChildCount","LinkURL" };
        }
        #region Public property

        public int ID { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public int? ApplicationID { get; set; }
        public int? ZOrder { get; set; }
        public int Status { get; set; }
        public DateTime? CreatedDateTime { get; set; }
        public int? CreatedBy { get; set; }
        public DateTime? LastUpdatedDateTime { get; set; }
        public int? LastUpdatedBy { get; set; }
        public bool IsDefault { get; set; }
        public int ChildCount { get; set; }
        public string LinkURL { get; set; }
        #endregion
    }
}
