using System;
using System.Collections.Generic;
using System.Text;


namespace FWS.Framework.Report
{
    public class CReportConfig
    {
        #region Login Infomation

        public static string UserName_Login = System.Configuration.ConfigurationManager.AppSettings["FWS.Framework.Report.User"];
        public static string Password_Login = System.Configuration.ConfigurationManager.AppSettings["FWS.Framework.Report.Password"];
        public static string ServerIP_Login = System.Configuration.ConfigurationManager.AppSettings["FWS.Framework.Report.Server"];
        public static string Database_Login = System.Configuration.ConfigurationManager.AppSettings["FWS.Framework.Report.Database"];
        public static string TCPIPListen = System.Configuration.ConfigurationManager.AppSettings["FWS.Framework.Report.TCPIPListen"];
        public static string TCPPortListen = System.Configuration.ConfigurationManager.AppSettings["FWS.Framework.Report.TCPPortListen"];
        public static string UseWinservice = System.Configuration.ConfigurationManager.AppSettings["FWS.Service.Report.UseWinservice"];
        public static string WinServiceServer = System.Configuration.ConfigurationManager.AppSettings["FWS.Service.Report.WinServiceServer"];
        public static string RequestVerifyDatabase = System.Configuration.ConfigurationManager.AppSettings["FWS.Service.Report.RequestVerifyDatabase"];
        #endregion

        #region Configure Infomation

        public static bool IsDebug = false;
        public static string Report_Url = System.Configuration.ConfigurationManager.AppSettings["FWS.Framework.Report.FolderName"];
        public static string Images_Url = AppDomain.CurrentDomain.BaseDirectory + "Images";
        public static string ImagesWeb_Url = System.Configuration.ConfigurationManager.AppSettings["FWS.Framework.Report.ImageUrl"];

        #endregion
    }

    [Serializable]
    public struct CExportName
    {
        public const string Html = "html";
        public const string PDF = "pdf";
        public const string Document = "doc";
        public const string Excel = "excel";
        public const string Report = "rpt";
    }
    [Serializable]
    public struct CExportType
    {
        public const string Html = "html";
        public const string PDF = "pdf";
        public const string Document = "doc";
        public const string Excel = "xls";
        public const string Report = "rpt";
    }
    [Serializable]
    public struct CExportContentType
    {
        public const string Html = "text/html";
        public const string PDF = "application/pdf";
        public const string Document = "application/msword";
        public const string Excel = "application/vnd.ms-excel";
    }
}
