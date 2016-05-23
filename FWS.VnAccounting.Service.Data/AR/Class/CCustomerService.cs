using System;
using System.Collections.Generic;
using System.Web;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.AR;
using FWS.VnAccounting.DataLayer.DataObjects.AR;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Core;

namespace FWS.VnAccounting.Service.Data.Customer
{
    public class CCustomerService
    {
        public List<CCustomer> GetCustomerList(string InputValue, ref COutputValue pOutput)
        {
            IList<CCustomer> list = new CCustomerDao().GetCustomerList(InputValue,ref pOutput);
            return (List<CCustomer>)(list);
        }
        public CCustomer GetCustomer(string InputValue)
        {
            return new CCustomerDao().GetCustomer(InputValue);
        }
        public CApplicationMessage UpdateCustomer(string InputValue)
        {
            CApplicationMessage list = new CCustomerDao().UpdateCustomer(InputValue);
            return list;//<CItems>(list);
        }

        public List<CCustomerGroup> GetCustomerGroupList(string InputValue,ref COutputValue Output)
        {
            IList<CCustomerGroup> list = new CCustomerDao().GetCustomerGroupList(InputValue,ref Output);
            return (List<CCustomerGroup>)(list);
        }
        public CCustomerGroup GetCustomerGroup(string InputValue)
        {
            return new CCustomerDao().GetCustomerGroup(InputValue);
        }
        public CApplicationMessage UpdateCustomerGroup(string InputValue)
        {
            CApplicationMessage list = new CCustomerDao().UpdateCustomerGroup(InputValue);
            return list;//<CItems>(list);
        }
    }
}