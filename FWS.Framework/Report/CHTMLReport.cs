using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using FWS.Framework.Report;
using System.IO;
using System.Data;

namespace FWS.Framework.Report
{
    public class CHTMLReport
    {
        public CReport GetReport(CReport report)
        {
            string reportfullPath = Path.Combine(CReportConfig.Report_Url, report.ReportUrl);
            if (!File.Exists(reportfullPath))
            {
                report.Description = "Template not found.";
            }
            string htmlContent = File.ReadAllText(reportfullPath);

            htmlContent = SetReportData(htmlContent, null);
            report.Content = ExportToPdf(htmlContent);
            return report;
        }

        private string SetReportData(string reportBody, DataSet datasource)
        {
            //file template noi nao can du lieu thi dinh dang [TableNumber.DATAFIELD] exp: [1.Note]
            //Duyet lay cac field can map trong template
            int findIndex = reportBody.IndexOf('[',0);
            int endIndex = 0;
            while (findIndex > 0)
            {
                endIndex = reportBody.IndexOf(']', findIndex);
                if (findIndex < endIndex)
                {
                    //lay ra tableNumber va fieldName
                    string map = reportBody.Substring(findIndex+1, endIndex - findIndex-1);
                    int tableNumber = -1;
                    if (map.Contains(".")) int.TryParse(map.Substring(0, map.IndexOf('.')), out tableNumber);
                    else tableNumber = 0;

                    string mapField = "";
                    if (map.Contains(".")) map.Substring(map.IndexOf('.'));
                    else mapField = map;

                    //lay gia tri tu datasource ra
                    string fieldValue = "";
                    if (datasource != null && datasource.Tables.Count > tableNumber && tableNumber >= 0 && datasource.Tables[tableNumber].Rows.Count >0)
                    {
                        if (datasource.Tables[tableNumber].Columns.Contains(mapField))
                        {
                            fieldValue = datasource.Tables[tableNumber].Rows[0][mapField].ToString();
                        }
                    }

                    reportBody = reportBody.Replace('[' + map + ']', fieldValue);
                    findIndex += fieldValue.Length;
                }

                findIndex = reportBody.IndexOf('[', findIndex + 1);
            }

            return reportBody;
        }

        private byte[] ExportToPdf(string html, bool isUsePageNumber = true)
        {
            string tempdir = @"D:\temp";
            string tempfileName = Guid.NewGuid().ToString();
            string pdftempFile = Path.Combine(tempdir, tempfileName + ".pdf");
            string htmltempFile = Path.Combine(tempdir, tempfileName + ".html");
            
            //Save html to temp file
            File.WriteAllText(htmltempFile, html);
            
            //Convert to pdf
            string sLandScape = ""; // "--landscape";
            string m_sWaterMark = "";
            string sFontSize = ""; //"--fontsize 12"
            string sPageNumber = "−−nup 1 ";
            System.Diagnostics.Process pProcess = new System.Diagnostics.Process();
            pProcess.StartInfo.FileName = HttpContext.Current.Server.MapPath(".") + "\\ghtmldoc.exe";
            string arg = "--webpage --quiet " + sPageNumber + sFontSize + m_sWaterMark + " --bodyfont Arial " + sLandScape + " -t pdf14 -f " + pdftempFile + " " + htmltempFile;
            pProcess.StartInfo.Arguments = arg;// "--webpage --quiet " + sFontSize + m_sWaterMark + " --bodyfont Times " + sLandScape + " -t pdf14 -f " + sFileName + ".pdf " + sFileName + ".html";
            pProcess.StartInfo.WorkingDirectory = HttpContext.Current.Server.MapPath(".");

            pProcess.Start();
            pProcess.WaitForExit();
            byte[] fileContent = File.ReadAllBytes(pdftempFile);
            //Delete temp file
            if(File.Exists(pdftempFile)) File.Delete(pdftempFile);
            if (File.Exists(htmltempFile)) File.Delete(htmltempFile);
            return fileContent;
        }
    }
}