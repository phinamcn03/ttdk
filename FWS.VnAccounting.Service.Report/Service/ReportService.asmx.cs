using System;
using System.Collections.Generic;
using System.Web;
using System.Web.Services;
using FWS.Framework.Report;
using FWS.Framework.Log;

namespace FWS.VnAccounting.Service.Report.Service
{
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    [Serializable]

    public class ReportService : System.Web.Services.WebService
    {
        [WebMethod(Description = "<InputValue UserID=\"1\" ReportID=\"1\" />")]
        public CReport GetReport(int userid, string sessionno, int languageid, string xmlData, string exportType)
        {
            return CReportUI.GetReport(userid, sessionno, languageid, xmlData, exportType);
        }

        [WebMethod]
        public string GetDicrectory()
        {
            return CReportFunction.GetDirrectoryInfo(AppDomain.CurrentDomain.BaseDirectory + System.Configuration.ConfigurationManager.AppSettings["FWS.Framework.Report.FolderName"]);
        }
        [WebMethod]
        public string CreateFolder(string pFolderName)
        {
            return CReportFunction.CreateFolder(pFolderName);
        }
        [WebMethod]
        public string SaveFile(byte[] pBuffer, string pLocalion, string pFileName)
        {
            return CReportFunction.SaveReport(pBuffer, pLocalion, pFileName);
        }
        [WebMethod]
        public string DeleteFile(string pFileName, string pLocation)
        {
            return CReportFunction.DeleteReport(pFileName, pLocation);
        }
    }
}
