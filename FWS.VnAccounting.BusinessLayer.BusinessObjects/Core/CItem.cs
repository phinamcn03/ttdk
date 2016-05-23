using System;
using System.Collections.Generic;
using System.Text;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Base;
namespace FWS.VnAccounting.BusinessLayer.BusinessObjects.Core
{
    [Serializable]
    public class CItem : CObjectBase
    {
        public CItem()
        {
            CSVFields = new string[] { "ID", "Code", "Name", "Name2", "ContactName", "Address", "TaxNo", "Phone", "Phone2", "Fax", "Email", "WebSite", "Type", "Status", "CreatedDateTime", "CreatedBy", "LastUpdatedDateTime", "LastUpdatedBy" };
        }
        #region Public property

        public int ID { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public string Name2 { get; set; }
        public string ContactName { get; set; }
        public string Address { get; set; }
        public string TaxNo { get; set; }
        public string Phone { get; set; }
        public string Phone2 { get; set; }
        public string Fax { get; set; }
        public string Email { get; set; }
        public string WebSite { get; set; }
        public int? Type { get; set; }
        public int Status { get; set; }
       
        public DateTime CreatedDateTime { get; set; }
        public int? CreatedBy { get; set; }
        public string CreatedByName { get; set; }
        public DateTime? LastUpdatedDateTime { get; set; }
        public int? LastUpdatedBy { get; set; }
        public string LastUpdatedByName { get; set; }
        #endregion
    }
}
