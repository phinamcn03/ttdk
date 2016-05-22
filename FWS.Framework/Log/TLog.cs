using System;
using System.Data;
using System.Configuration;
using System.Web;

using System.Xml;
using System.IO;
using System.Reflection;
namespace FWS.Framework.Log
{
    class TLog
    {
        public static bool IsLog = true;
        public static bool LogByHour = false;   //default: true >>> by day
        public static string LogDir = "";

        public static string LogFilePath
        {
            get
            {
                string today = DateTime.Now.ToString("yyyyMMdd");
                if (LogByHour)
                    today = DateTime.Now.ToString("yyyyMMdd") + "\\" + DateTime.Now.ToString("HH");
                return LogDir + "\\" + today;
            }
        }
        //public static void WriteDebug(String pLogInfo, String pLogDetail)
        //{
        //    Log("Bug", LogFilePath + "_Bug.xml", pLogInfo, pLogDetail, "DEBUG");
        //}
        //public static void WriteErr(String pLogInfo, String pLogDetail)
        //{
        //    Log("Err", LogFilePath + "_Err.xml", pLogInfo, pLogDetail, "ERROR");
        //}
        //public static void WriteInfo(String pLogInfo, String pLogDetail)
        //{
        //    Log("Info", LogFilePath + "_Info.xml", pLogInfo, pLogDetail, "INFOMATION");
        //}
        //public static void WriteInfo(String pLogInfo, String pLogDetail, string pTag)
        //{
        //    Log("Info", LogFilePath + String.Format("_Info_{0}.xml", pTag),
        //        pLogInfo, pLogDetail, "INFOMATION");
        //}

        /// <summary>
        /// Write log
        /// </summary>
        /// <param name="logTitle"></param>
        /// <param name="logDetail"></param>
        /// <param name="group"></param>
        public static void Write(string logTitle, string logDetail, string group)
        {
            string logfile = string.Format("{0}_{1}.xml", LogFilePath, group);
            Log("Log", logfile, logTitle, logDetail, "Logs");
        }
        private static void Log(string elementTag, string logFile, string logTitle, string logDetail, string pRootName)
        {
            if (!IsLog) return;
            if (!logFile.Contains(":"))
            {
                string binPath = Path.GetDirectoryName(Assembly.GetAssembly(typeof(TLog)).CodeBase);
                binPath = binPath.Replace("file:\\", "");
                logFile = binPath + logFile;
            }

            try
            {
                XmlDocument docXml = new XmlDocument();
                try
                {
                    docXml.Load(logFile);
                }
                catch
                {
                    docXml = new XmlDocument();
                }

                XmlElement root = docXml.DocumentElement;
                if ((root == null))
                {
                    root = docXml.CreateElement(pRootName);
                    docXml.AppendChild(root);
                }

                XmlElement The = docXml.CreateElement(elementTag);
                The.SetAttribute("At", DateTime.Now.ToString("dd\\/MM\\/yyyy HH:mm:ss"));
                The.SetAttribute("Title", logTitle);
                The.SetAttribute("Detail", logDetail);
                root.AppendChild(The);

                DirectoryInfo dir = Directory.GetParent(logFile);
                if (!dir.Exists)
                    Directory.CreateDirectory(dir.FullName);

                docXml.Save(logFile);
            }
            catch
            {
            }
        }
    }
}