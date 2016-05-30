using System;
using System.Collections.Generic;
using System.Web;
using System.Web.Services;

using System.Web.Script.Services;
using FWS.Framework.Web.TemplateController;
using System.Text;
namespace FWS.VnAccounting.Presentation.WebApp.Mods._Demo
{
    /// <summary>
    /// Summary description for TemplateControllerService
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.Web.Script.Services.ScriptService]
    [System.ComponentModel.ToolboxItem(false)]
    public class TemplateControllerService : System.Web.Services.WebService
    {

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Xml)]
        public string HelloWorld(string name)
        {
            return "Hello World, " + name + " at time " + DateTime.Now.ToString("HH:mm:ss ttt");
        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public object[] ExecuteCommand1(string commandName, string targetMethod, object data)
        {
            try
            {
                object[] result = new object[4];
                result[0] = CCommand.Create(commandName).Execute(data);
                result[1] = targetMethod;
                result[2] = commandName;
                result[3] = data;
                return result;
            }
            catch (Exception ex)
            {
                // TODO: add logging functionality 
                throw;
            }
        }

        [WebMethod]

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
        [WebMethod]
        public string Datass(string q)
        {
            string result="January|Tháng một\nFebruary|Tháng hai\nMarch|Tháng ba\nApril|Tháng tư\nMay|Tháng năm\nJune|Tháng sáu\nJuly|Tháng bảy\nAugust|Tháng tám\nSeptember|Tháng chín\nOctober|Tháng mười\nNovember|Tháng mười một\nDecember|Tháng mười hai";
            return result;
        }
        public string generateRandomString(int length)
        {
            //Initiate objects & vars    
            Random random = new Random();
            String randomString = "";
            int randNumber;

            //Loop ‘length’ times to generate a random number or character
            for (int i = 0; i < length; i++)
            {
                randNumber = random.Next(97, 123); //char {a-z}
                randomString = randomString + (char)randNumber;
            }
            //return the random string
            return randomString;

        }
    }
}
