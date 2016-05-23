using System;
using System.Collections.Generic;
using System.Web;
using FWS.VnAccounting.DataLayer.DataObjects.Core;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Core;
namespace FWS.VnAccounting.Service.Data.Core.Class
{
    public class CControlService
    {
        public List<CControl> GetControls(string InputValue)
        {
            return (List < CControl > )new CControlDao().GetControls(InputValue);
        }

        public List<CControlData> GetControlData(string InputValue)
        {
            return (List<CControlData>)new CControlDao().GetControlData(InputValue);
        }
    }
}