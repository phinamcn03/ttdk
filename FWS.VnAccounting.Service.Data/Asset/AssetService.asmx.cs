using System;
using System.Collections.Generic;
using System.Web;
using System.Web.Services;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Asset;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Core;
using FWS.VnAccounting.Service.Data.Asset.Class;
using FWS.Framework.Log;
using System.IO;
using System.Configuration;

namespace FWS.VnAccounting.Service.Data.Asset
{
    /// <summary>
    /// Summary description for AssetService
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]

    public class AssetService : System.Web.Services.WebService
    {

        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\" AssetType=\"FixedAsset\"")]
        public List<CAsset> GetAssetList(string InputValue, ref COutputValue OutputValue)
        {
            return new CAssetService().GetAssetList(InputValue, ref OutputValue);
        }

        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\" ID=\"1\" AssetType=\"FixedAsset\"")]
        public CAsset GetAsset(string InputValue)
        {
            return new CAssetService().GetAsset(InputValue);
        }

        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\" ID=\"1\" AssetType=\"FixedAsset\"")]
        public CApplicationMessage UpdateAsset(string InputValue)
        {
            return new CAssetService().UpdateAsset(InputValue);
        }

        [WebMethod]
        public string UpdateAndSendReport(string ClientKey, string InputValue)
        {
            try
            {
                CApplicationMessage result = new CMessageToCustomer().UpdateAndSendReport(ClientKey, InputValue);
                List<CApplicationMessage> list = new List<CApplicationMessage>();
                list.Add(result);
                return CApplicationMessage.ToCSV<CApplicationMessage>(list);
            }
            catch (Exception ex)
            {
                CLogManager.WriteSL("UpdateAndSendReport", ex.ToString());
                List<CApplicationMessage> list = new List<CApplicationMessage>();
                list.Add(new CApplicationMessage() {Name = "",Description=ex.Message,Result = 0 });
                return CApplicationMessage.ToCSV<CApplicationMessage>(list);

            }
        }

        [WebMethod]
        public string SendGCN(string ClientKey, string InputValue)
        {
            try
            {
                CApplicationMessage result = new CMessageToCustomer().SendGCN(ClientKey, InputValue);
                List<CApplicationMessage> list = new List<CApplicationMessage>();
                list.Add(result);
                return CApplicationMessage.ToCSV<CApplicationMessage>(list);
            }
            catch (Exception ex)
            {
                CLogManager.WriteSL("SendGCN", ex.ToString());
                List<CApplicationMessage> list = new List<CApplicationMessage>();
                list.Add(new CApplicationMessage() { Name = "", Description = ex.Message, Result = 0 });
                return CApplicationMessage.ToCSV<CApplicationMessage>(list);

            }
        }

        [WebMethod]
        public string SendReport(string ClientKey, string InputValue)
        {
            try
            {
                CApplicationMessage result = new CMessageToCustomer().SendReport(ClientKey, InputValue);
                List<CApplicationMessage> list = new List<CApplicationMessage>();
                list.Add(result);
                return CApplicationMessage.ToCSV<CApplicationMessage>(list);
            }
            catch (Exception ex)
            {
                CLogManager.WriteSL("SendReport", ex.ToString());
                List<CApplicationMessage> list = new List<CApplicationMessage>();
                list.Add(new CApplicationMessage() { Name = "", Description = ex.Message, Result = 0 });
                return CApplicationMessage.ToCSV<CApplicationMessage>(list);

            }
        }
        [WebMethod]
        public bool CheckScanFileExists(string filename)
        {
            FileInfo attachInfo = new FileInfo(Path.Combine(ConfigurationManager.AppSettings["FWS.VnAccounting.AttachmentFolder"], filename + ".pdf"));
            if (attachInfo.Exists)
                return true;
            return false;
        }
    }
}
