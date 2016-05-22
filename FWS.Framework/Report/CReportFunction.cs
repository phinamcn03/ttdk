using System;
using System.Collections.Generic;
using System.Text;

using System.IO;
using FWS.Framework.Log;

namespace FWS.Framework.Report
{
    public class CReportFunction
    {
        #region Report Document



        #endregion

        #region Directory

        public static string GetDirrectoryInfo(string pDirectoryUrl)
        {
            StringBuilder ret = new StringBuilder();
            try
            {
                string[] dir = Directory.GetDirectories(pDirectoryUrl);
                ret.Append("{");
                if (dir.Length > 0)
                {
                    for (int i = 0; i < dir.Length; i++)
                    {
                        DirectoryInfo dirInfo = new DirectoryInfo(dir[i]);
                        ret.AppendFormat("[\"Name\":\"{0}\"]", dirInfo.Name);
                        if (i != dir.Length - 1)
                            ret.Append(",");
                    }
                }
                ret.Append("}");
            }
            catch (Exception ex)
            {
                CLogManager.WritePL("ReportFunction.GetDirrectoryInfo", ex.Message);
            }
            return ret.ToString();
        }

        public static List<CReportImage> GetListImagesBySession(string pSessionName)
        {
            List<CReportImage> list = new List<CReportImage>();
            try
            {
                DirectoryInfo dirInfo = new DirectoryInfo(CReportConfig.Images_Url);
                if (dirInfo.Exists)
                {
                    FileInfo[] files = dirInfo.GetFiles();
                    foreach (FileInfo file in files)
                    {
                        if (file.Name.IndexOf(pSessionName) != -1)
                        {
                            byte[] content = GetBytesFromFile(file.FullName);
                            CReportImage image = new CReportImage();
                            image.Content = content;
                            image.FileName = file.Name;
                            image.Location = file.DirectoryName;
                            list.Add(image);
                            File.Delete(file.FullName);
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                CLogManager.WritePL("ReportFunction.GetFilesByName", ex.Message);
            }
            return list;
        }

        #endregion

        #region Folder Configure

        public static string CreateFolder(string pFolderName)
        {
            StringBuilder ret = new StringBuilder();
            string template = "{{\"Code\":\"{0}\", \"Desc\":\"{1}\"}}";
            try
            {
                string path = CReportConfig.Report_Url + "/" + pFolderName;
                DirectoryInfo dirInfo = new DirectoryInfo(path);
                if (!dirInfo.Exists)
                {
                    DirectoryInfo dir = Directory.CreateDirectory(path);
                    if (dir.Exists)
                        ret.AppendFormat(template, "00", "Folder create successful!");
                    else
                        ret.AppendFormat(template, "11", "Folder create false!");
                }
                else
                    ret.AppendFormat(template, "01", "Folder is exist!");
            }
            catch (Exception ex)
            {
                ret.AppendFormat(template, "99", "Error system!!!: " + ex.Message);
                CLogManager.WritePL("ReportFunction.CreateFolder", ex.Message);
            }
            return ret.ToString();
        }

        #endregion

        #region File Process

        public static void CopyImageToWeb(string pFileName)
        {
            try
            {
                FileInfo fileInfo = new FileInfo(pFileName);
                fileInfo.CopyTo(Path.Combine(CReportConfig.ImagesWeb_Url, fileInfo.Name), true);
                File.Delete(pFileName);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public static string SaveReport(byte[] pBuffer, string pLocation, string pFileName)
        {
            StringBuilder ret = new StringBuilder();
            string template = "{0}|{1}";
            try
            {
                if (pFileName != "") //New
                {
                    DeleteReport(pFileName, pLocation);
                    string url = CReportConfig.Report_Url;
                    if (pLocation != "")
                        url += "\\" + pLocation;
                    url += "\\" + pFileName;
                    if (pBuffer.Length > 0)
                    {
                        using (FileStream fs = new FileStream(url, FileMode.Create))
                        {
                            fs.Write(pBuffer, 0, pBuffer.Length);
                            fs.Flush();
                            fs.Close();
                        }
                    }
                    ret.AppendFormat(template, "00", "Create file successful!");
                }
                else //Edit
                {
                    ret.AppendFormat(template, "01", "Update file successful!");
                }
            }
            catch (Exception ex)
            {
                ret.AppendFormat(template, "99", "Error system!!!" + ex.Message);
                CLogManager.WritePL("ReportFunction.SaveReport", ex.Message);
            }
            return ret.ToString();
        }

        public static string DeleteReport(string pFileName, string pLocation)
        {
            string ret = "09";
            try
            {
                string _path = "";
                if (pLocation.Trim() == "")
                    _path = CReportConfig.Report_Url;
                else
                    _path = CReportConfig.Report_Url + pLocation + "/";
                _path = Path.Combine(_path, pFileName);
                if (CReportConfig.IsDebug)
                    CLogManager.Write("ReportFunction.DeleteReport", "Filename: " + _path, "Report");
                if (File.Exists(_path))
                {
                    File.Delete(_path);
                    ret = "00|Delete " + pFileName + " sucessful";
                }
                else
                    ret = "01|File " + pFileName + " not exits";
            }
            catch (Exception ex)
            {
                ret = "99|Delete file " + pFileName + " error.";
                CLogManager.WritePL("ReportFunction.DeleteReport", ex.Message);
            }
            return ret;
        }

        public static byte[] GetBytesFromFile(string filename)
        {
            byte[] buffer = null;
            try
            {
                FileStream fs = new FileStream(filename, FileMode.Open, FileAccess.Read, FileShare.Read);
                buffer = StreamToByteArray(fs);
                fs.Close();
                File.Delete(filename);
            }
            catch (Exception ex)
            {
                CLogManager.WritePL("ReportFunction.GetBytesFromFile", ex.Message);
            }
            return buffer;
        }
        #endregion

        #region Convert Stream to Byte[] Data

        public static byte[] StreamToByteArray(Stream inputStream)
        {
            if (!inputStream.CanRead)
                throw new ArgumentException();
            if (inputStream.CanSeek)
                inputStream.Seek(0, SeekOrigin.Begin);
            byte[] output = new byte[inputStream.Length];
            int bytesRead = inputStream.Read(output, 0, output.Length);
            return output;
        }

        #endregion
    }
}
