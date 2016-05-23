using System;
using System.Collections.Generic;
using System.Text;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Base;

namespace FWS.VnAccounting.BusinessLayer.BusinessObjects.Core
{
    [Serializable]
    public class CRefNo:CObjectBase
    {
        public int ID { get; set; }
        public int RefType { get; set; }
        public string RefNo { get; set; }
        public int LastNumber { get; set; }
        public string Template { get; set; }

    }
}
