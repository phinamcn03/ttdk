using System;
using System.Collections.Generic;
using System.Text;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Base;

namespace FWS.VnAccounting.BusinessLayer.BusinessObjects.Core
{
    public class COutputValue:CObjectBase
    {
        public int TotalPage { get; set; }
        public int TotalRow { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Result { get; set; }
        public bool IsSuccessfull
        {
            get
            {
                if (Result == null || Result.ToString() == "0" || string.IsNullOrEmpty(Result.ToString())) return false;
                return true;
            }
            set { }
        }
    }
}
