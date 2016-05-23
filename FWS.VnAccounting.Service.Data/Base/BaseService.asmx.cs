using System;
using System.Collections.Generic;
using System.Web;
using System.Web.Services;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Core;
using FWS.VnAccounting.Service.Data.Base.Class;

namespace FWS.VnAccounting.Service.Data.Base
{
    /// <summary>
    /// Summary description for BaseService
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]

    public class BaseService : System.Web.Services.WebService
    {

        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\" GroupCode=\"Object|Customer|Vendor|Employee|FixedAsset\" /&gt;")]
        public List<CGroupBase> GetGroupBaseList(string InputValue,ref COutputValue OutputValue)
        {
            return new CGroupBaseService().GetGroupBaseList(InputValue,ref OutputValue);
        }

        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\" GroupCode=\"Object|Customer|Vendor|Employee|FixedAsset\" /&gt;")]
        public CGroupBase GetGroupBase(string InputValue)
        {
            return new CGroupBaseService().GetGroupBase(InputValue);
        }

        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\" GroupCode=\"Object|Customer|Vendor|Employee|FixedAsset\" /&gt;")]
        public CApplicationMessage UpdateGroupBase(string InputValue)
        {
            return new CGroupBaseService().UpdateGroupBase(InputValue);
        }
    }
}
