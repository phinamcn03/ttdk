using System;
using System.Collections.Generic;
using System.Text;

namespace FWS.VnAccounting.BusinessLayer.BusinessObjects.Asset
{
    public class CTransactions
    {
        public int ID { get; set; }
        public string RefNo { get; set; }
        public string RegisTransRefNo { get; set; }
        public int Level { get; set; }
        public byte[] ReportContent { get; set; }
    }
}
