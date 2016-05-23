﻿using System;
using System.Collections.Generic;
using System.Text;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Base;

namespace FWS.VnAccounting.BusinessLayer.BusinessObjects.Inventory
{
    [Serializable]
    public class COutward : CObjectBase
    {
        public COutward()
        {
            CSVFields = new string[] { "ID", "Code", "VoucherDate", "ObjectID", "ObjectType", "Amount", "RefID", "RefType", "Posted", "PostedBy", "PostedDate", "FiscalID", "ClassID", "Status", "ClientID", "Description", "CreatedBy", "CreatedDateTime", "LastUpdatedBy", "LastUpdatedDateTime" };
        }
        #region Public property

        public int ID { get; set; }
        public string Code { get; set; }
        public DateTime VoucherDate { get; set; }
        public int? ObjectID { get; set; }
        public int? ObjectType { get; set; }
        public string ObjectName { get; set; }
        public double Amount { get; set; }
        public int? RefID { get; set; }
        public int RefType { get; set; }
        public bool Posted { get; set; }
        public int? PostedBy { get; set; }
        public string PostedByName { get; set; }
        public DateTime? PostedDate { get; set; }
        public int FiscalID { get; set; }
        public int ClassID { get; set; }
        public int Status { get; set; }
        public string StatusName { get; set; }
        public int ClientID { get; set; }
        public string Description { get; set; }
        public int CreatedBy { get; set; }
        public DateTime? CreatedDateTime { get; set; }
        public int? LastUpdatedBy { get; set; }
        public DateTime? LastUpdatedDateTime { get; set; }
        public string CreatedByName { get; set; }
        public string LastUpdatedByName { get; set; }
        public int StockID { get; set; }
        public string StockName { get; set; }
        #endregion
    }
}
