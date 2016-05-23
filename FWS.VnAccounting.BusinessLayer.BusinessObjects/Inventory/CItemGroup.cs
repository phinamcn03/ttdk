using System;
using System.Collections.Generic;
using System.Text;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Base;

namespace FWS.VnAccounting.BusinessLayer.BusinessObjects.Core
{
    [Serializable]
    public class CItemGroup : CObjectBase
    {
        public CItemGroup()
        {
            CSVFields = new string[] { "ID", "Code", "Name", "ParentID","ParentName", "Level", "CreatedBy", "CreatedByName", "CreatedDateTime", "LastUpdatedBy", "LastUpdatedDateTime", "Description", "Active" };
        }
        #region Public property

        public int ID { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public int? ParentID { get; set; }
        public string ParentName { get; set; }
        public int Level { get; set; }
        public int? CreatedBy { get; set; }
        public string CreatedByName { get; set; }
        public DateTime? CreatedDateTime { get; set; }
        public int? LastUpdatedBy { get; set; }
        public string LastUpdatedByName { get; set; }
        public DateTime? LastUpdatedDateTime { get; set; }
        public string Description { get; set; }
        public bool Active { get; set; }

        #endregion
    }
}
