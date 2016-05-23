using System;
using System.Collections.Generic;
using System.Web;
using System.Web.Services;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Nippon;
using FWS.VnAccounting.Service.Data.Core.Class;
using FWS.Framework.Utils;

namespace FWS.VnAccounting.Service.Data.Nippon
{
    /// <summary>
    /// Summary description for TrackingService
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]

    public class TrackingService : System.Web.Services.WebService
    {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="ClientKey"></param>
        /// <param name="InputValue">InputValue: <InputValue /><RequestParams Function="Nippon_ProductTracking" /></param>
        /// <returns></returns>
        [WebMethod]
        public List<CProjectTracking> GetProjectTraking(string ClientKey,string InputValue)
        {
            string data = new CCoreService().GetContextData(ClientKey, InputValue);
            List<CProjectTracking> list = CDataParser.FromCSV< CProjectTracking>(data, 1);
            
            return list;
            //return "Hello World";
        }
    }
}
