using System;
using System.Collections.Generic;
using System.Web;
using FWS.Framework.Utils;
using System.Data;
using FWS.VnAccounting.DataLayer.DataObjects.Core;
using FWS.VnAccounting.Service.Data.Utils;
using FWS.Framework.Log;

namespace FWS.VnAccounting.Service.Data.Core.Class
{
    public class CCoreService
    {
        public string GetContextData(string ClientKey, string inputValue)
        {

            inputValue =CXML.HtmlDecode(inputValue);
            CLogManager.WritePL("GetContextData", "End write response");
            DataSet ds = new CCoreDao().GetContextData(ClientKey,inputValue);
            CLogManager.WritePL("GetContextData", "End write response");
            return CDataParser.DataSetToCSV(ds);
            
        }

        public string ExecuteAction(string ClientKey, string inputValue)
        {

            inputValue = CXML.HtmlDecode(inputValue);

            DataSet ds = new CCoreDao().ExecuteAction(ClientKey, inputValue);
            return CDataParser.DataSetToCSV(ds);

        }
    }
}