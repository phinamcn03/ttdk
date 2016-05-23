using System;
using System.Collections.Generic;
using System.Text;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Core;
using FWS.VnAccounting.DataLayer.DataObjects.SQL;
using FWS.VnAccounting.DataLayer.DataObjects.Base;
using FWS.Framework.Log;

namespace FWS.VnAccounting.DataLayer.DataObjects.Core
{
    public class CUserDao:CDaoBase
    {
        public CUserList Login(string pInputValue, ref COutputValue message)
        {
            try
            {
                IList<CUserList> userlist = CallFunctionWithList<CUserList>(CSystemFunction.Login, pInputValue, ref message);
                if (userlist != null && userlist.Count > 0)
                    return userlist[0];

                return null;
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("CControlDao", ex.Message);
                return null;
            }
        }
    }
}
