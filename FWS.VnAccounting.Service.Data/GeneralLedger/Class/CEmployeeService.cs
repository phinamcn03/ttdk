using System;
using System.Collections.Generic;
using System.Web;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.GeneralLedger;
using FWS.VnAccounting.DataLayer.DataObjects.GeneralLedger;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Core;

namespace FWS.VnAccounting.Service.Data.GeneralLedger.Class
{
    public class CEmployeeService
    {
        public List<CEmployee> GetEmployeeList(string InputValue, ref COutputValue Output)
        {
            return (List<CEmployee>)new CEmployeeDao().GetEmployeeList(InputValue, ref Output);
        }

        public CEmployee GetEmployee(string InputValue)
        {
            return new CEmployeeDao().GetEmployee(InputValue);
        }

        public CApplicationMessage UpdateEmployee(string InputValue)
        {
            return new CEmployeeDao().UpdateEmployee(InputValue);
        }
    }
}