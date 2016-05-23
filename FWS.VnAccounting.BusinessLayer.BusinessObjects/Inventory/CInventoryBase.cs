using System;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Base;

namespace FWS.VnAccounting.BusinessLayer.BusinessObjects.Inventory
{
    [Serializable]
    public class CInventoryBase: CObjectBase
    {
        public CInventoryBase():base()
        {
            CSVFields = new string[] { "ID", "Code", "Name", "CreatedBy", "CreatedDateTime", "LastUpdatedBy", "LastUpdatedDateTime", "Description", "Active" };
        }
        #region Public property

        public int ID { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
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
