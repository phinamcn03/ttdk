using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;

using System.Web.Script.Services;
using FWS.Framework.Web.TemplateController;
namespace FWS.VnAccounting.Presentation.WebApp.Mods._Global.Service
{
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    [System.Web.Script.Services.ScriptService]
    public class TemplateController : System.Web.Services.WebService
    {
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public object[] ExecuteCommand(string commandName, string callbackMethod, object data)
        {
            object[] result = new object[2];
            try
            {
                Dictionary<string, object> param = (Dictionary<string, object>)data;
                //string actionView = (string)param["actionView"];
                //Authorize here

                result[0] = CCommand.Create(commandName).Execute(data);
                result[1] = callbackMethod;
            }
            catch (Exception ex)
            {
                // TODO: add logging functionality 
                throw;
            }
            return result;
        }
    }
}
