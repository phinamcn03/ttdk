using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace FWS.TTDKGDTS.ImportTool.BusinessObject
{
    public class CParaData
    {
        public int ID { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public string Value { get; set; }
        public string Value1 { get; set; }
        public string Value2 { get; set; }
        public string Value3 {get;set;}
        public bool IsDefault { get; set; }
    }
}
