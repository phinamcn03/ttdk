using System;
using System.Collections.Generic;
using System.Text;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Base;

namespace FWS.VnAccounting.BusinessLayer.BusinessObjects.Report
{
    [Serializable]
    public class CReportList : CObjectBase
    {
        #region Public property

        public int ID { get; set; }
        public int? ClientGroupID { get; set; }
        public string ClientGroupCode { get; set; }
        public string ClientGroupName { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public string Session { get; set; }
        public int UserID { get; set; }
        public string Description { get; set; }
        public int? LanguageID { get; set; }
        public int? DefaultLanguageID { get; set; }
        public string ReportLocation { get; set; }
        public string ReportFileName { get; set; }
        public int Type { get; set; }
        public int FunctionType { get; set; }
        public string FunctionTypeString { get; set; }
        public int FunctionCall { get; set; }
        public int FunctionID { get; set; }
        public string AdditionalSQL { get; set; }
        public DateTime? CreatedDateTime { get; set; }
        public int? CreatedUserID { get; set; }
        public DateTime? UpdatedDateTime { get; set; }
        public int? UpdatedUserID { get; set; }
        public int? CreatedSystemID { get; set; }
        public int? UpdatedSystemID { get; set; }
        public int Status { get; set; }
        public bool Checked { get; set; }
        public string ReportHeaderTitle { get; set; }
        public string RunTimeParameters { get; set; }
        public int CountryID { get; set; }
        public string OutputFormat { get; set; }
        #endregion
    }
}
