using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using FWS.TTDKGDTS.ImportTool.ServiceReference.Soap;

namespace FWS.TTDKGDTS.ImportTool.ServiceReference
{
    public class CServiceReference
    {
        public static CCoreService CoreService
        {
            get{return new CCoreService();}
            
        }

        public static CAssetService AssetService
        {
            get { return new CAssetService() { Timeout = 30*60*1000}; }
        }
    }
}
