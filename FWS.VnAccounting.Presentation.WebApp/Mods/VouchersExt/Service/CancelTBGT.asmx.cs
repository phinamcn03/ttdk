using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using FWS.VnAccounting.Presentation.WebApp.Mods.Core;
using System.Text;

namespace FWS.VnAccounting.Presentation.WebApp.Mods.VouchersExt.Service
{
    /// <summary>
    /// Summary description for ResultMsg
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    // [System.Web.Script.Services.ScriptService]
    public class CancelTBGT : System.Web.Services.WebService
    {

        [WebMethod]
        public string ActionResult(string ClientKey, string inputValue)
        {
          //  CSession session = new CSession();
         //   string _inputValue = string.Format("<InputValue UserID=\"{0}\" Session=\"{1}\"  />", session.UserID, session.Session);
            ServiceREF.Asset.AssetService service = new ServiceREF.Asset.AssetService();
            //string result = service.UpdateAndSendReport(ClientKey, inputValue);
            List<ServiceREF.Asset.CApplicationMessage> message = new List<ServiceREF.Asset.CApplicationMessage>();// CObjectMapper.FromCSV<ServiceREF.Asset.CApplicationMessage>(result);
            ServiceREF.Asset.CApplicationMessage updateResult = SaveTransaction(ClientKey, inputValue);
            //Neu save thanh cong thi gui email
            
            
            message.Add(updateResult);
            StringBuilder ret = new StringBuilder();
            if (message != null && message.Count > 0)
            {
                ret.Append("{");
                ret.AppendFormat("ID:'{0}',\n", message[0].ID);
                ret.AppendFormat("Code:'{0}',\n", message[0].Code);
                ret.AppendFormat("Name:'{0}',\n", message[0].Name);
                ret.AppendFormat("Description:'{0}',\n", message[0].Description);
                ret.AppendFormat("Result:'{0}',\n", message[0].Result);
                ret.AppendFormat("IsSuccessfull:'{0}'\n", message[0].IsSuccessfull);
                ret.Append("}");
            }
            return ret.ToString();
        }
        [WebMethod]
        public string GetInfo(string ClientKey, string inputValue)
        {
            //  CSession session = new CSession();
            //   string _inputValue = string.Format("<InputValue UserID=\"{0}\" Session=\"{1}\"  />", session.UserID, session.Session);
            ServiceREF.CoreService.CoreService service = new ServiceREF.CoreService.CoreService();
            string result = service.GetContextData(ClientKey, inputValue);
            //List<ServiceREF.Asset.CApplicationMessage> message = CObjectMapper.FromCSV<ServiceREF.Asset.CApplicationMessage>(result);

            //StringBuilder ret = new StringBuilder();
            //if (message != null && message.Count > 0)
            //{
            //    ret.Append("{");
            //    ret.AppendFormat("ID:'{0}',\n", message[0].ID);
            //    ret.AppendFormat("Code:'{0}',\n", message[0].Code);
            //    ret.AppendFormat("Name:'{0}',\n", message[0].Name);
            //    ret.AppendFormat("Description:'{0}',\n", message[0].Description);
            //    ret.AppendFormat("Result:'{0}',\n", message[0].Result);
            //    ret.AppendFormat("IsSuccessfull:'{0}'\n", message[0].IsSuccessfull);
            //    ret.Append("}");
            //}
            return result;
        }

        private ServiceREF.Asset.CApplicationMessage SaveTransaction(string ClientKey,string inputValue)
        {
            ServiceREF.CoreService.CoreService service = new ServiceREF.CoreService.CoreService();
            string result = service.ExecuteAction(ClientKey, inputValue);
            List<ServiceREF.Asset.CApplicationMessage> message = CObjectMapper.FromCSV<ServiceREF.Asset.CApplicationMessage>(result);
            return message[1];
        }
    }
}
