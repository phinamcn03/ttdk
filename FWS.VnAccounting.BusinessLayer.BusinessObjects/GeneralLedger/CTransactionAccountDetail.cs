using System;
using System.Collections.Generic;
using System.Text;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Base;

namespace FWS.VnAccounting.BusinessLayer.BusinessObjects.GeneralLedger
{
    [Serializable]
    public class CTransactionAccountDetail:CObjectBase
    {
        public int ID { get; set; }
        public int TransactionID { get; set; }
        public int? DebitAccount { get; set; }
        public string DebitAccountCode { get; set; }
        public string DebitAccountName { get; set; }
        public double? DebitAmount { get; set; }
        public int? CreditAccount { get; set; }
        public string CreditAccountCode { get; set; }
        public string CreditAccountName { get; set; }
        public double? CreditAmount { get; set; }
        public string Notes { get; set; }
    }
}
