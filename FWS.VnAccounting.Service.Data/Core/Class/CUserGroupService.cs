using System;
using System.Collections.Generic;
using System.Web;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Core;
using FWS.VnAccounting.DataLayer.DataObjects.Core;
namespace FWS.VnAccounting.Service.Data.Core.Class
{
    public class CUserGroupService
    {
        public List<CUserGroup> GetUserGroupList(string InputValue, ref COutputValue OutputValue)
        {
            return (List<CUserGroup>)new CUserGroupDao().GetUserGroupList(InputValue, ref OutputValue);
        }
    }
}