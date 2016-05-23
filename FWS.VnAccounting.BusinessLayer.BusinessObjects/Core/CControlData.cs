using System;
using System.Collections.Generic;
using System.Text;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Base;

namespace FWS.VnAccounting.BusinessLayer.BusinessObjects.Core
{
    public class CControlData:CObjectBase
    {
        public int ID { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public string DisplayName { get; set; }
        public string Value { get; set; }
        public int ChildCount { get; set; }
        public int ParentID { get; set; }

    }
}
