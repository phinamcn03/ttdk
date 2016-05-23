using System;
using System.Collections.Generic;
using System.Text;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Base;

namespace FWS.VnAccounting.BusinessLayer.BusinessObjects.Inventory
{
    [Serializable]
    public class CStock : CObjectBase
    {
        public CStock()
        {
            CSVFields = new string[] { "ID", "Code", "Name", "ParentID", "Level", "Description", "CreatedBy", "CreatedDateTime", "LastUpdatedBy", "LastUpdatedDateTime", "Active" };
        }
        #region Public property

        public int ID { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public int? ParentID { get; set; }
        public string ParentName { get; set; }
        public int Level { get; set; }
        public string Description { get; set; }
        public int? CreatedBy { get; set; }
        public string CreatedByName { get; set; }
        public DateTime? CreatedDateTime { get; set; }
        public int? LastUpdatedBy { get; set; }
        public string LastUpdatedByName { get; set; }
        public DateTime? LastUpdatedDateTime { get; set; }
        public bool Active { get; set; }

        #endregion
    }
}
