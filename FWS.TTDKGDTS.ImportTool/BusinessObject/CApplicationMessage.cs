using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace FWS.TTDKGDTS.ImportTool.BusinessObject
{
    public class CApplicationMessage
    {
        public int ID { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public bool IsSuccessfull {
            get { 
                if (Result == null) return false;
                if (string.IsNullOrEmpty(Result.ToString())) return false;
                if (Result.ToString() == "0") return false;
                return true;
            }
            set { }
        }
        public object Result { get; set; }
    }
}
