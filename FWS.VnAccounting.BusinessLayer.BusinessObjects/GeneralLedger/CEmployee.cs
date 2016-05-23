using System;
using System.Collections.Generic;
using System.Text;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Base;

namespace FWS.VnAccounting.BusinessLayer.BusinessObjects.GeneralLedger
{
    [Serializable]
    public class CEmployee : CObjectBase
    {
        public CEmployee()
        {
            CSVFields = new string[] { "ID", "Code", "Name", "FirstName", "MiddleName", "LastName", "PayrollAccount", "SecurityNo", "SocialInsuranceNo", "Sex", "BirthDate", "Address", "Tel","Phone","Fax", "Status", "CreatedDateTime", "CreatedBy", "LastUpdatedDateTime", "LastUpdatedBy" };
        }
        #region Public property

        public int ID { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public string FirstName { get; set; }
        public string MiddleName { get; set; }
        public string LastName { get; set; }
        public int PayrollAccountID { get; set; }
        public string PayrollAccount { get; set; }
        public string PayrollAccountCode { get; set; }
        public string PayrollAccountName { get; set; }
        public string SecurityNo { get; set; }
        public string Phone { get; set; }
        public string Fax { get; set; }
        public string TaxNo { get; set; }
        public string Email { get; set; }
        public string Website { get; set; }
        public string SocialInsuranceNo { get; set; }
        public bool? Sex { get; set; }
        public string SexString { get; set; }
        public DateTime? BirthDate { get; set; }
        public string Address { get; set; }
        public string Tel { get; set; }
        public int? Status { get; set; }
        public DateTime? CreatedDateTime { get; set; }
        public int? CreatedBy { get; set; }
        public string CreatedByName { get; set; }
        public DateTime? LastUpdatedDateTime { get; set; }
        public int? LastUpdatedBy { get; set; }
        public string LastUpdatedByName { get; set; }
        #endregion
    }
}
