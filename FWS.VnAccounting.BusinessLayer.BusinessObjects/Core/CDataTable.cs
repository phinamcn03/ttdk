using System;
using System.Collections.Generic;
using System.Text;
using System.Data;

namespace FWS.VnAccounting.BusinessLayer.BusinessObjects.Core
{
    public class CDataTable:DataTable
    {
        public string ToSCV(string Separator=";")
        {
            System.Text.StringBuilder sb = new System.Text.StringBuilder();
            string template = "{0}" + Separator;
            ///// Create Header
            for (int i = 0; i < Columns.Count; i++)
            {
                sb.AppendFormat(template, Columns[i].ColumnName);
            }
            sb.Append('\n');
            string stringTemplate = "\"{0}\"" + Separator;

            foreach (DataRow row in Rows)
            {
                System.Text.StringBuilder sbrow = new System.Text.StringBuilder();
                for (int i = 0; i < Columns.Count; i++)
                {
                    object obj = row[i];
                    if (obj is DateTime)
                    {
                        sbrow.AppendFormat(stringTemplate, ((DateTime)obj).ToString("yyyy-MM-dd HH:mm:ss.fff"));
                    }
                    else if (obj is string)
                    {
                        sbrow.AppendFormat(template, Newtonsoft.Json.JsonConvert.SerializeObject(obj.ToString()));
                    }
                    else
                    {
                        sbrow.AppendFormat(template, obj);
                    }
                }
                string rowData = sbrow.ToString();
                if (rowData.EndsWith(Separator))
                    rowData = rowData.Remove(rowData.Length - 1);

                sb.Append(rowData);
                sb.Append("/n");
            }
            return sb.ToString();
        }
    }
}
