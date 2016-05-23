using System;
using System.Collections.Generic;
using System.Text;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Base;

namespace FWS.VnAccounting.BusinessLayer.BusinessObjects.Core
{
    [Serializable]
    public class CDesignParameter : CObjectBase
    {
        public CDesignParameter()
        {
            CSVFields = new string[] { "ID", "VariableName", "VariableLabel", "SQLColumnName", "LanguageID", "VariableType", "ListFunction", "VisibleColumnName", "Status", "CreatedDateTime", "CreatedUserID", "LastUpdatedDateTime", "LastUpdatedUserID" };
        }
        #region Public property

        public int ID { get; set; }
        public string VariableName { get; set; }
        public string VariableLabel { get; set; }
        public string SQLColumnName { get; set; }
        public int? LanguageID { get; set; }
        public int VariableType { get; set; }
        public string DataCode { get; set; }
        public string FilterCode { get; set; }
        public string VisibleColumnName { get; set; }
        public int Status { get; set; }
        public DateTime? CreatedDateTime { get; set; }
        public int? CreatedUserID { get; set; }
        public DateTime? LastUpdatedDateTime { get; set; }
        public int? LastUpdatedUserID { get; set; }
        public string DefaultValue { get; set; }

        #endregion
    }
}
