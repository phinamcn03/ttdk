using System;
using System.Collections.Generic;
using System.Text;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Base;

namespace FWS.VnAccounting.BusinessLayer.BusinessObjects.Core
{
    [Serializable]
    public class CIntDefination : CObjectBase
    {
        public CIntDefination()
        {
            CSVFields = new string[] { "ID", "Code", "Name", "TableName", "ColumnName", "DataValue", "CreatedDateTime", "CreatedBy", "LastUpdatedDateTime", "LastUpdatedBy" };
        }
        #region Public property

        public int ID { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public string TableName { get; set; }
        public string ColumnName { get; set; }
        public int DataValue { get; set; }
        
        #endregion
    }
}
