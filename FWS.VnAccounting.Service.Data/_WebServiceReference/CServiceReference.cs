using System;
using System.Collections.Generic;
using System.Web;
using FWS.VnAccounting.Service.Data.WebServiceReference.Soap;

namespace FWS.VnAccounting.Service.Data.WebServiceReference
{
    public class CServiceReference
    {
        public static CCallcenter Callcenter
        {
            get {
                string url = System.Configuration.ConfigurationManager.AppSettings["FWS.VnAccounting.Service.Callcenter"];
                url += "/CallcenterService.asmx";
                return new CCallcenter() { Url = url };
            }
        }

        public static CReportService ServiceReport
        {
            get { 
                return new CReportService(); }
        }
    }
}