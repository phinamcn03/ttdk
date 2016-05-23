using System;
using System.Collections.Generic;
using System.Web;
using FWS.VnAccounting.DataLayer.DataObjects.Core;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Core;

namespace FWS.VnAccounting.Service.Data.Core.Class
{
    public class CPersonService
    {
        public List<CPerson> GetPersonList(string InputValue, ref COutputValue OutputValue)
        {
            IList<CPerson> list = new CPersonDao().GetPersonList(InputValue,ref OutputValue);
            return (List<CPerson>)(list);

        }

        public CPerson GetPerson(string pInputValue)
        {
           return new CPersonDao().GetPerson(pInputValue);
           
        }

        public List<CPersonRole> GetPersonRoleList(string InputValue, ref COutputValue OutputValue)
        {
            return (List < CPersonRole > )new CPersonDao().GetPersonRoleList(InputValue, ref OutputValue);
        }
        public CPersonRole GetPersonRole(string InputValue)
        {
            return new CPersonDao().GetPersonRole(InputValue);
        }
        public CApplicationMessage UpdatePersonRole(string InputValue)
        {
            return new CPersonDao().UpdatePersonRole(InputValue);
        }
    }
}