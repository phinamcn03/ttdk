using System;
using System.Collections.Generic;
using System.Text;
using System.Data;
using FWS.VnAccounting.DataLayer.DataObjects.Base;
using FWS.VnAccounting.DataLayer.DataObjects.SQL;

namespace FWS.VnAccounting.DataLayer.DataObjects.Core
{
    public class CCoreDao : CDaoBase
    {
        public DataSet GetContextData(string ClientKey,string inputValue)
        {
            return CallFunctionV2(CSystemFunction.GetContextData,ClientKey, inputValue);
        }

        public DataSet ExecuteAction(string ClientKey, string inputValue)
        {
            return CallFunctionV2(CSystemFunction.ExecuteAction, ClientKey, inputValue);
        }
    }
}
