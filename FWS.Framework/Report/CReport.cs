using System;
using System.Collections.Generic;
using System.Text;
using CrystalDecisions.CrystalReports.Engine;
using System.IO;
using FWS.Framework.Log;
using CrystalDecisions.Shared;

namespace FWS.Framework.Report
{
    [Serializable]
    public class CReport
    {
        #region Private infomation

        public string ReportUrl;
        public string Name = DateTime.Now.ToString("yyyyMMddHHmmssfff");
        public string Title;
        public string ExportName = CExportName.PDF;
        public string ExportType = CExportType.PDF;
        public string Description;
        public byte[] Content;
        public List<CReportImage> ListReportImage = new List<CReportImage>();
        public string Session;

        #endregion

        public CReport()
        {

        }
        public CReport(string pName, string pTitle, string pReportUrl)
        {
            Name = pName;
            Title = pTitle;
            ReportUrl = pReportUrl;
        }
        public CReport(string pName, string pTitle, string pReportUrl, string pExportTo)
        {
            Name = pName;
            Title = pTitle;
            ReportUrl = pReportUrl;
            ExportName = pExportTo;

            switch (pExportTo.ToLower())
            {
                case CExportName.PDF:
                    ExportType = CExportType.PDF;
                    break;
                case CExportName.Html:
                    ExportType = CExportType.Html;
                    break;
                case CExportName.Excel:
                    ExportType = CExportType.Excel;
                    break;
                case CExportName.Document:
                    ExportType = CExportType.Document;
                    break;
                case CExportName.Report:
                    ExportType = CExportType.Report;
                    break;
                default:
                    ExportType = CExportType.PDF;
                    break;
            }
        }

        public CReport GetReportContent(int pUserID, string pReportSession, int pLanguageID,int ReportID)
        {
            CReport _report = new CReport();
            _report.Name = this.Name;
            _report.Title = this.Title;
            _report.ReportUrl = this.ReportUrl;
            _report.ExportName = this.ExportName;
            _report.ExportType = this.ExportType;
            _report.Session = pReportSession;

            try
            {
                //Neu file template la HTML
                if (_report.ReportUrl.EndsWith(".htm") || _report.ReportUrl.EndsWith(".html"))
                {
                    return new CHTMLReport().GetReport(_report);
                }

                string _htmlFileName = "";
                if (_report.ReportUrl.Trim() != "" && _report.ReportUrl.ToLower().IndexOf("rpt") != -1)
                {
                    CLogManager.WritePL("CReport.GetReportContent", "Beg GetReportDocument ");
                    ReportDocument _reportDoc = GetReportDocument(_report.ReportUrl);
                    CLogManager.WritePL("CReport.GetReportContent", "End GetReportDocument ");
                    SetReportParameter(_reportDoc, pUserID, pReportSession, pLanguageID);
                    CLogManager.WritePL("CReport.GetReportContent", "End SetReportParameter ");
                    if (_reportDoc != null)
                    {
                        /*if (_reportDoc.ParameterFields.Count > 0)
                        {
                            for (int i = 0; i < _reportDoc.ParameterFields.Count; i++)
                            {
                                switch (_reportDoc.ParameterFields[i].Name.ToLower())
                                {
                                    case "@userid":
                                        _reportDoc.SetParameterValue(_reportDoc.ParameterFields[i].Name, pUserID);
                                        break;
                                    case "@session":
                                        //su dung cho du lieu la Table, Store, Function
                                        _reportDoc.SetParameterValue(_reportDoc.ParameterFields[i].Name, "" + pReportSession.Replace("'", "") + "");
                                        //Su dung cho du lieu la Command
                                        //reportDoc.SetParameterValue(reportDoc.ParameterFields[i].Name, "'" + rpl.Session.Replace("'", "") + "'");
                                        break;
                                    case "@languageid":
                                        _reportDoc.SetParameterValue(_reportDoc.ParameterFields[i].Name, pLanguageID);
                                        break;
                                    default:
                                        if (_reportDoc.ParameterFields[i].DefaultValues != null && _reportDoc.ParameterFields[i].DefaultValues.Count > 0)
                                            _reportDoc.SetParameterValue(_reportDoc.ParameterFields[i].Name, _reportDoc.ParameterFields[i].DefaultValues[0]);
                                        break;
                                }
                            }
                        }
                     * */
                       
                        _reportDoc.PrintOptions.Dispose();
                        Stream _stream = null;
                        CLogManager.WritePL("CReport.GetReportContent", "Beg Export ");
                        switch (this.ExportName.ToLower())
                        {
                            case CExportName.Document:
                                _report.ExportName = CExportContentType.Document;
                                _stream = _reportDoc.ExportToStream(ExportFormatType.WordForWindows);
                                _reportDoc.Close();
                                break;
                            case CExportName.Excel:
                                _report.ExportName = CExportContentType.Excel;
                                _stream = _reportDoc.ExportToStream(ExportFormatType.Excel);

                                _reportDoc.Close();
                                break;
                            case CExportName.Html:
                                _report.ExportName = CExportContentType.Html;
                                _htmlFileName = AppDomain.CurrentDomain.BaseDirectory + pReportSession + ".htm";
                                /*Export to HTML*/
                                _reportDoc.ExportToDisk(ExportFormatType.HTML40, _htmlFileName); /*Sinh ra the DIV*/
                                //reportDoc.ExportToDisk(ExportFormatType.HTML32, filename); /*Sinh ra the Table*/
                                _reportDoc.Close();

                                /*Get HTML Content to byte array*/
                                _report.Content = CReportFunction.GetBytesFromFile(_htmlFileName);
                                _report.ListReportImage = CReportFunction.GetListImagesBySession(pReportSession);
                                break;
                            case CExportName.Report:
                                _report.ExportName = CExportContentType.Document;
                                _stream = _reportDoc.ExportToStream(ExportFormatType.CrystalReport);
                                _reportDoc.Close();
                                break;
                            default: //PDF
                                _report.ExportName = CExportContentType.PDF;
                                _stream = _reportDoc.ExportToStream(ExportFormatType.PortableDocFormat);
                                _reportDoc.Close();
                                break;
                        }
                        CLogManager.WritePL("CReport.GetReportContent", "End Export ");
                        if (_stream != null && _htmlFileName == "") //Not HTML
                            _report.Content = CReportFunction.StreamToByteArray(_stream);
                    }
                    else
                    {
                        _report.Description = "03 - Report file is not exits Or Load report data fail.";
                        CLogManager.WritePL("User:" + pUserID, "ReportSession" + pReportSession + ", 03 - Report file is not exits Or Load report fail.");
                    }
                }
                else
                {
                    _report.Description = "01 - ReportFileName is null. Check database again!";
                    CLogManager.WritePL("User:" + pUserID, "ReportID " + pReportSession + ", 01 - ReportFileName is null. Check database again!");
                }
            }
            catch (Exception ex)
            {
                CLogManager.WritePL("CReport.GetReportContent Ex", ex.ToString() + ex.StackTrace);
            }
            return _report;
        }

        private static ReportDocument GetReportDocument(string pReportName)
        {
            ReportDocument _reportDoc = new ReportDocument();
            try
            {
                if (pReportName.Trim() != "")
                {
                    string reportUrl = Path.Combine(CReportConfig.Report_Url, pReportName);
                    CLogManager.WritePL("CReport.GetReportDocument Inf", "File report " + reportUrl + "");
                    FileInfo _file = new FileInfo(reportUrl);
                    if (_file.Exists)
                    {
                        _reportDoc.Load(reportUrl,OpenReportMethod.OpenReportByTempCopy);
                        if (_reportDoc.DataSourceConnections != null && _reportDoc.DataSourceConnections.Count > 0)
                        {
                            for (int i = 0; i < _reportDoc.DataSourceConnections.Count; i++)
                            {
                                _reportDoc.DataSourceConnections[i].SetConnection(CReportConfig.ServerIP_Login, CReportConfig.Database_Login, false);// _reportDoc.DataSourceConnections[i].DatabaseName, false);
                                _reportDoc.DataSourceConnections[i].SetLogon(CReportConfig.UserName_Login, CReportConfig.Password_Login);
                            }
                        }
                        //Verify database co the khong can thiet, nen dua vao option de tang toc do
                        if (CReportConfig.RequestVerifyDatabase == "1")
                        {
                            _reportDoc.VerifyDatabase();
                        }
                    }
                    else
                    {
                        CLogManager.WritePL("CReport.GetReportDocument Inf", "File report " + pReportName + " not found.");
                    }
                }
            }
            catch (Exception ex)
            {
                CLogManager.WritePL("CReport.GetReportDocument Ex", ex.ToString());
            }
            return _reportDoc;
        }

        private void SetReportParameter(ReportDocument _reportDoc, int pUserID, string pReportSession, int pLanguageID)
        {
            if (_reportDoc == null) return;

            try
            {
                if (_reportDoc.ParameterFields.Count > 0)
                {
                    for (int i = 0; i < _reportDoc.ParameterFields.Count; i++)
                    {
                        switch (_reportDoc.ParameterFields[i].Name.ToLower())
                        {
                            case "@userid":
                                _reportDoc.SetParameterValue(i, pUserID);
                                break;
                            case "@session":
                                //su dung cho du lieu la Table, Store, Function
                                _reportDoc.SetParameterValue(i, "" + pReportSession.Replace("'", "") + "");
                                //Su dung cho du lieu la Command
                                //reportDoc.SetParameterValue(reportDoc.ParameterFields[i].Name, "'" + rpl.Session.Replace("'", "") + "'");
                                break;
                            case "@languageid":
                                _reportDoc.SetParameterValue(i, pLanguageID);
                                break;
                            default:
                                if (_reportDoc.ParameterFields[i].DefaultValues != null && _reportDoc.ParameterFields[i].DefaultValues.Count > 0)
                                    _reportDoc.SetParameterValue(i, _reportDoc.ParameterFields[i].DefaultValues[0]);
                                else
                                    _reportDoc.SetParameterValue(_reportDoc.ParameterFields[i].Name, null);
                                break;
                        }
                    }
                    //Verifydatabase
                    //_reportDoc.VerifyDatabase();
                }
            }
            catch (Exception ex)
            {
                CLogManager.WritePL("CReport.SetReportParameter Ex", ex.ToString() + ex.StackTrace);
            }
            //if (_reportDoc.IsSubreport) return;
            //for (int i = 0; i < _reportDoc.Subreports.Count; i++)
            //{
            //    SetReportParameter(_reportDoc.Subreports[i], pUserID, pReportSession, pLanguageID);
            //}

        }
    }
}

        


