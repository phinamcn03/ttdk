using System;
using System.Collections.Generic;
using System.Text;
using System.Reflection;
using System.Xml.Serialization;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Core;

namespace FWS.VnAccounting.BusinessLayer.BusinessObjects.Base
{
    [Serializable]
    public class CObjectBase
    {
       
        protected string[] CSVFields = null;
        public string Extend { get; set; }
        [XmlIgnore]
        public object this[string propertyName]
        {
            get
            {
                PropertyInfo info = this.GetType().GetProperty(propertyName);
                if (info == null) return null;
                object obj = info.GetValue(this, null);
                return obj;
            }
        }
        public virtual string ToCSV(string Separator = ";")
        {
            if (CSVFields == null || CSVFields.Length == 0)
                return "";
            string template = "{0}" + Separator;
            string stringTemplate = "\"{0}\"" + Separator;
            System.Text.StringBuilder sb = new System.Text.StringBuilder();
            for (int i = 0; i < CSVFields.Length; i++)
            {
                PropertyInfo pro = this.GetType().GetProperty(CSVFields[i]);
                if (pro != null)
                {
                    object obj = pro.GetValue(this, null);
                    if (obj is DateTime)
                    {
                        sb.AppendFormat(stringTemplate, ((DateTime)obj).ToString("yyyy-MM-dd HH:mm:ss.fff"));
                    }
                    else if (obj is string)
                    {
                        sb.AppendFormat(template, Newtonsoft.Json.JsonConvert.SerializeObject(obj.ToString()));
                    }
                    else
                    {
                        sb.AppendFormat(template, obj);
                    }
                }
                else
                {
                    sb.AppendFormat(template, "");
                }
            }
            template = sb.ToString();
            if (template.EndsWith(Separator))
                template = template.Remove(template.Length - 1);
            return template;
        }
        //public virtual string ToCSV(IList<CConfigGrid> grid, string Separator = ";")
        //{
        //    if (grid == null || grid.Count == 0)
        //        return "";
        //    string template = "{0}" + Separator;
        //    string stringTemplate = "\"{0}\"" + Separator;
        //    System.Text.StringBuilder sb = new System.Text.StringBuilder();
        //    for (int i = 0; i < grid.Count; i++)
        //    {
        //        if (grid[i].IsHidden == true)
        //            continue;
        //        PropertyInfo pro = this.GetType().GetProperty(grid[i].DataMappingName);
        //        if (pro != null)
        //        {
        //            object obj = pro.GetValue(this, null);
        //            if (obj is DateTime)
        //            {
        //                sb.AppendFormat(stringTemplate, ((DateTime)obj).ToString("yyyy-MM-dd HH:mm:ss.fff"));
        //            }
        //            else if (obj is string)
        //            {
        //                sb.AppendFormat(template, Newtonsoft.Json.JsonConvert.SerializeObject(obj.ToString()));
        //            }
        //            else
        //            {
        //                sb.AppendFormat(template, obj);
        //            }
        //        }
        //    }
        //    template = sb.ToString();
        //    if (template.EndsWith(Separator))
        //        template = template.Remove(template.Length - 1);
        //    return template;
        //}

        public static string ToCSV<T>(IList<T> list, string Separator = ";", bool isContentHeader = true) where T : CObjectBase
        {
            string result = "";
            StringBuilder sb = new StringBuilder();
            if (isContentHeader)
            {
                if (list == null || list.Count == 0 || (list.Count > 0 && list[0].CSVFields == null))
                {
                    PropertyInfo[] properties = typeof(T).GetProperties();
                    for (int i = 0; i < properties.Length; i++)
                    {
                        //sb.Append(properties[i].Name).Append(Separator);
                        result += properties[i].Name + Separator;
                    }

                    if (result.EndsWith(Separator))
                        result = result.Remove(result.Length - 1);
                }
                else
                {
                    string[] properties = list[0].CSVFields;
                    for (int i = 0; i < properties.Length; i++)
                    {
                        //sb.Append(properties[i]).Append(Separator);
                        result += properties[i] + Separator;
                    }
                    if (result.EndsWith(Separator))
                        result = result.Remove(result.Length - 1);
                }
                if (!string.IsNullOrEmpty(result))
                    result += "\n";
            }
            //IList<CObjectBase> objectList = list as IList<CObjectBase>;
            sb.Append(result);
            for (int i = 0; i < list.Count; i++)
            {
                sb.Append((list[i]).ToCSV(Separator)).Append("\n");
                //result = result + (list[i]).ToCSV(Separator) + "\n";
            }
            result = sb.ToString();
            if (result.EndsWith("\n"))
                result = result.Remove(result.Length - 1);
            return result;
        }
        public string ToJson()
        {

            return Newtonsoft.Json.JsonConvert.SerializeObject(this);
        }

        public static string ToJson<T>(IList<T> list) where T:CObjectBase
        {
            StringBuilder strRet = new StringBuilder();
            strRet.Append("{d:[");
            for (int j = 0; j < list.Count; j++)
            {
                string strObj = "";
                for (int i = 0; i < list[j].CSVFields.Length; i++)
                {
                    string modelName = list[j].CSVFields[i];
                    string value = "";
                    if (list[j][list[j].CSVFields[i]] != null)
                    {
                        if (list[j][list[j].CSVFields[i]].GetType() == DateTime.Now.GetType())
                        {
                            value = "\"" + FormatDate((DateTime)list[j][list[j].CSVFields[i]], "yyyy-MM-dd HH:mm:ss") + "\"";
                        }
                        else
                        {
                            value = Newtonsoft.Json.JsonConvert.SerializeObject(list[j][list[j].CSVFields[i]].ToString());
                        }
                    }
                    else
                    {
                        value = "\"\"";
                    }
                    string strFormatHandle = "\"{0}\":{1}";
                    strObj += string.Format(strFormatHandle, modelName, value);
                    if (i < list[j].CSVFields.Length - 1)
                        strObj += ",";
                }
                strRet.Append("{" + strObj + "}");
                if (j < list.Count - 1)
                    strRet.Append(",");
            }
            strRet.Append("]}");
            return strRet.ToString();
        }

        public static string FormatDate(DateTime? date, string outFormat)
        {
            string str = "";
            if (date == null)
                str = "";
            else
            {
                str = ((DateTime)date).ToString(outFormat);
            }
            return str;
        }


        public static string ToJsonForHandle<T>(IList<CGridColumnConfig> grid, IList<T> list, CPagingInfo pageInfo) where T : CObjectBase
        {
            StringBuilder strRet = new StringBuilder();
            strRet.AppendFormat("{{\"page\":\"{0}\",\"total\":\"{1}\",\"records\":\"{2}\",\"invdata\":[", pageInfo.PageIndex, pageInfo.MaxRow, pageInfo.TotalRow);
            //strRet.AppendFormat("{{\"currpage\":\"{0}\",\"totalpages\":\"{1}\",\"totalrecords\":\"{2}\",\"invdata\":[", pageInfo.CurrentPage, pageInfo.NumPage, pageInfo.RowPerPage);
            for (int j = 0; j < list.Count; j++)
            {
                string strObj = "";
                for (int i = 0; i < grid.Count; i++)
                {
                    string modelName = grid[i].Name;
                    string value = "";
                    if (list[j][grid[i].DataMappingName] != null)
                    {
                        if (list[j][grid[i].DataMappingName].GetType() == DateTime.Now.GetType())
                        {
                            value = "\"" + FormatDate((DateTime)list[j][grid[i].DataMappingName], "yyyy-MM-dd HH:mm:ss") + "\"";
                        }
                        else
                        {
                            value = Newtonsoft.Json.JsonConvert.SerializeObject(list[j][grid[i].DataMappingName].ToString());
                        }
                    }
                    else
                    {
                        value = "\"\"";
                    }
                    string strFormatHandle = "\"{0}\":{1}";
                    strObj += string.Format(strFormatHandle, modelName, value);
                    if (i < grid.Count - 1)
                        strObj += ",";
                }
                strRet.Append("{" + strObj + "}");
                if (j < list.Count - 1)
                    strRet.Append(",");
            }
            strRet.Append("]}");
            return strRet.ToString();
        }
        public static string ToJsonForHandle<T>(IList<CGridColumnConfig> grid, IList<T> list, string totalpages, string currpage, string totalrecord, string info) where T : CObjectBase
        {
            StringBuilder strRet = new StringBuilder();
            strRet.Append("{\"totalpages\": \"" + totalpages + "\",");
            strRet.Append("\"currpage\": \"" + currpage + "\",");
            strRet.Append("\"totalrecords\": \"" + totalrecord + "\",");
            if (info != "")
                strRet.Append("\"info\": \"" + info + "\",");
            strRet.Append("\"invdata\" : [");
            for (int j = 0; j < list.Count; j++)
            {
                string strObj = "";
                for (int i = 0; i < grid.Count; i++)
                {
                    string modelName = grid[i].Name;
                    string value = "";
                    if (list[j][grid[i].DataMappingName] != null)
                    {
                        if (list[j][grid[i].DataMappingName].GetType() == DateTime.Now.GetType())
                        {
                            value = FormatDate((DateTime)list[j][grid[i].DataMappingName], "yyyy-MM-dd HH:mm:ss");
                        }
                        else
                        {
                            value = list[j][grid[i].DataMappingName].ToString();
                        }
                    }
                    string strFormatHandle = "\"{0}\":\"{1}\"";
                    strObj += string.Format(strFormatHandle, modelName, value);
                    if (i < grid.Count - 1)
                        strObj += ",";
                }

                strRet.Append("{" + strObj + "}");
                if (j < list.Count - 1)
                    strRet.Append(",");
            }
            strRet.Append("]}");
            return strRet.ToString();
        }
        public static string ToJsonForHandle<T>(IList<CGridColumnConfig> grid, IList<T> list, string totalpages, string currpage, string totalrecord) where T : CObjectBase
        {
            return ToJsonForHandle(grid, list, totalpages, currpage, totalrecord, "");
        }

    }
}
