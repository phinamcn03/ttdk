using System;
using System.Collections.Generic;
using System.Text;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Core;
using FWS.VnAccounting.DataLayer.DataObjects.SQL;
using FWS.VnAccounting.DataLayer.DataObjects.Base;
using FWS.Framework.Log;
namespace FWS.VnAccounting.DataLayer.DataObjects.Core
{
    public class CUserGroupDao:CDaoBase
    {
        public IList<CUserGroup> GetUserGroupList(string pInputValue, ref COutputValue output)
        {
            try
            {
                IList<CUserGroup> list = CallFunctionWithList<CUserGroup>(CSystemFunction.GetUserGroup, pInputValue, ref output);
                return list;
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("CUserGroupDao", ex.Message);
                return null;
            }
        }
    }
}
