﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using FWS.VnAccounting.Presentation.WebApp.Mods.Core;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Core;
using System.Text;

namespace FWS.VnAccounting.Presentation.WebApp.Mods.Items.Service
{
    /// <summary>
    /// Summary description for ReceiptService
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    // [System.Web.Script.Services.ScriptService]
    public class ReceiptService : System.Web.Services.WebService
    {
        [WebMethod]
        public string GetContextData(string clientKey, string inputValue)
        {
            StringBuilder ret = new StringBuilder();
            string result = null;
            ServiceREF.CoreService.CoreService service = new ServiceREF.CoreService.CoreService();
            result = service.GetContextData(clientKey, inputValue);
            List<CResource> resList = CObjectMapper.FromCSV<CResource>(result, 1);
            ret.Append("[");
            foreach (var item in resList)
            {
                ret.Append("{");
                ret.AppendFormat("'id':'{0}',", item.ID);
                ret.AppendFormat("'text':'{0}',", item.Name);
                ret.AppendFormat("'value':'{0}'", item.ID);
                ret.Append("}");
                if (item != resList[resList.Count - 1])
                {
                    ret.Append(",");
                }
            }
            ret.Append("]");

            return ret.ToString();
        }
    }
}
