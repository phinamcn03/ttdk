using System;
using System.Collections.Generic;
using System.Text;
using FWS.VnAccounting.DataLayer.DataObjects.Base;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Core;
using FWS.VnAccounting.DataLayer.DataObjects.SQL;
using FWS.Framework.Log;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Report;

namespace FWS.VnAccounting.DataLayer.DataObjects.Report
{
    public class CReportDao:CDaoBase
    {
        public CReportList InitReport(string pInputValue)
        {
            try
            {
                return CallFunction<CReportList>(CSystemFunction.InitReport, pInputValue);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("CReportDao", ex.Message);
                return null;
            }
        }
    }
}
