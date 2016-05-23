using System;
using System.Collections.Generic;
using System.Text;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Base;

namespace FWS.VnAccounting.BusinessLayer.BusinessObjects.Core
{
    [Serializable]
    public class CPerson : CObjectBase
    {
        public CPerson()
        {
            CSVFields = new string[] { "ID", "Code", "Name", "Name2", "ContactName", "Address", "TaxNo", "Phone", "Phone2", "Fax", "Email", "WebSite", "PayrollAccountID", "Type", "CustomerGroupID", "Status", "IsCustomer", "IsVendor", "IsEmployee", "CreatedDateTime", "CreatedBy", "LastUpdatedDateTime", "LastUpdatedBy" };
        }
        #region Public property

        public int ID { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public string Name2 { get; set; }
        public string ContactName { get; set; }
        public string FirstName { get; set; }
        public string MiddleName { get; set; }
        public string LastName { get; set; }
        public int? Gender { get; set; }
        public string Address { get; set; }
        public string TaxNo { get; set; }
        public string SocialInsuranceNo { get; set; }
        public string IDCardNo { get; set; }
        public string Phone { get; set; }
        public string Phone2 { get; set; }
        public string Fax { get; set; }
        public string Email { get; set; }
        public string WebSite { get; set; }
        public int? PayrollAccountID { get; set; }
        public string PayrollAccountCode { get; set; }
        public string PayrollAccountName { get; set; }
        public string PayrollAccountDisplayName { get; set; }
        public int? Type { get; set; }
        public int? CustomerGroupID { get; set; }
        public int Status { get; set; }
        public DateTime CreatedDateTime { get; set; }
        public int? CreatedBy { get; set; }
        public string CreatedByName { get; set; }
        public DateTime? LastUpdatedDateTime { get; set; }
        public int? LastUpdatedBy { get; set; }


        #endregion
    }
}
