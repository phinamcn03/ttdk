
using System;
using System.Collections.Generic;
using System.Web;
using System.Data;
using System.Text;
using System.Reflection;
using System.ComponentModel;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;

namespace FWS.Framework.Utils
{
    public class CDataParser
    {
        public static string DataSetToCSV(DataSet ds)
        {
            if (ds == null || ds.Tables.Count == 0) return "";

            StringBuilder sb = new StringBuilder();
            //To CSV table cuoi 
            sb.Append(DataTableToCSV(ds.Tables[ds.Tables.Count - 1]));
            //duyet qua cac table tru table cuoi
            for (int i = 0; i < ds.Tables.Count-1;i++ )
            {
                sb.Append("\n###\n");
                sb.Append(DataTableToCSV(ds.Tables[i]));
            }

            return sb.ToString();
        }

        public static string DataTableToCSV(DataTable tbl)
        {
            string Separator = ";";

            //********* Header **********
            string csvHeader = "";
            for (int i = 0; i < tbl.Columns.Count; i++)
            {
                csvHeader += tbl.Columns[i].ColumnName + Separator;
            }

            if (csvHeader.EndsWith(Separator))
            {
                csvHeader = csvHeader.Remove(csvHeader.Length - 1);
            }
            //******** Data **********

            string template = "{0}" + Separator;
            string stringTemplate = "\"{0}\"" + Separator;
            StringBuilder sbData = new StringBuilder();
            StringBuilder sbLine = new StringBuilder();
            for (int i = 0; i < tbl.Rows.Count; i++)
            {
                sbLine = new StringBuilder();
                for (int j = 0; j < tbl.Columns.Count; j++)
                {
                    object obj = tbl.Rows[i][j];
                    if (obj == DBNull.Value)
                    {
                        sbLine.Append(Separator);
                    }
                    else if (obj is DateTime)
                    {
                        sbLine.AppendFormat(stringTemplate, ((DateTime)obj).ToString("yyyy-MM-dd HH:mm:ss.fff"));
                    }
                    else if (obj is string)
                    {
                        sbLine.AppendFormat(template, Newtonsoft.Json.JsonConvert.SerializeObject(obj.ToString()));
                    }
                    else if (obj is byte[])
                    {
                        sbLine.AppendFormat(template, System.Convert.ToBase64String((byte[])obj, 0, ((byte[])obj).Length));
                    }
                    else
                    {
                        sbLine.AppendFormat(template, obj);
                    }
                }

                sbLine.Append("\n");
                sbLine.Replace(";\n", "\n");
                sbData.Append(sbLine);

            }
            string result = csvHeader + "\n" + sbData.ToString();

            if (result.EndsWith("\n"))
                result = result.Remove(result.Length - 1);
            return result;
        }

        private const char CSV_FIELD_SEPARATOR = ';';
        private const string CSV_DATA_SEPARATOR = "\n###\n";
        private const char CSV_ROW_SEPARATOR = '\n';

        public static T FromJson<T>(string json) where T : new()
        {
            try
            {
                JObject jsonObj = JsonConvert.DeserializeObject<JObject>(json);
                PropertyInfo[] properties = typeof(T).GetProperties();
                T returnobj = new T();
                for (int i = 0; i < properties.Length; i++)
                {
                    object obj = jsonObj[properties[i].Name];

                    SetPropertyValue(returnobj, properties[i].Name, obj);
                }

                return returnobj;
            }
            catch (Exception ex)
            {

            }
            return default(T);
        }
        public static T FromObject<T>(object obj) where T : new()
        {
            try
            {
                //JObject jsonObj = JsonConvert.DeserializeObject<JObject>(json);                
                PropertyInfo[] properties = obj.GetType().GetProperties();
                T returnobj = new T();
                for (int i = 0; i < properties.Length; i++)
                {
                    object objValue = properties[i].GetValue(obj, null);
                    SetPropertyValue(returnobj, properties[i].Name, objValue);
                }

                return returnobj;
            }
            catch (Exception ex)
            {

            }
            return default(T);
        }

        public static List<T> FromCSV<T>(string csv) where T : new()
        {
            return FromCSV<T>(csv, 0);
        }
        public static List<T> FromCSV<T>(string csv, int csvIndex) where T : new()
        {
            string[] csvarr = csv.Split(new string[] { CSV_DATA_SEPARATOR }, StringSplitOptions.None);
            if (csvIndex < 0 || csvarr.Length <= csvIndex) return null; //Index outof range

            if (string.IsNullOrEmpty(csvarr[csvIndex])) return null;//empty string

            string[] lines = csvarr[csvIndex].Split(CSV_ROW_SEPARATOR);
            if (lines.Length <= 1) return null;

            string[] csvfields = lines[0].Split(CSV_FIELD_SEPARATOR); //CSV field header
            List<T> list = new List<T>();
            //duyet du lieu csv tu dong thu 2 tro di (dong dau tien la header)
            for (int i = 1; i < lines.Length; i++)
            {
                T t = new T();
                string[] rows = ParseCsvRow(lines[i]);//.Split(';');
                for (int j = 0; j < rows.Length; j++)
                {
                    SetPropertyValue(t, csvfields[j], rows[j]);
                }
                list.Add(t);
            }
            return list;
        }

        /// <summary>
        /// Sets an object's property with the specified value,
        /// coercing that value to the appropriate type if possible.
        /// </summary>
        /// <param name="target">Object containing the property to set.</param>
        /// <param name="propertyName">Name of the property to set.</param>
        /// <param name="value">Value to set into the property.</param>
        public static void SetPropertyValue(object target, string propertyName, object value)
        {
            string className = target.GetType().ToString();
            try
            {
                PropertyInfo propertyInfo = target.GetType().GetProperty(propertyName);
                if (propertyInfo == null)
                    return;

                if (value == null)
                    propertyInfo.SetValue(target, value, null);
                else
                {
                    Type pType = GetPropertyType(propertyInfo.PropertyType);
                    Type vType = GetPropertyType(value.GetType());
                    if (pType.Equals(vType))
                    {
                        // types match, just copy value
                        propertyInfo.SetValue(target, value, null);
                    }
                    else
                    {
                        // types don't match, try to coerce
                        if (pType.Equals(typeof(Guid)))
                            propertyInfo.SetValue(target, new Guid(value.ToString()), null);
                        else if (pType.Equals(typeof(byte[])) && vType.Equals(typeof(string)))
                            propertyInfo.SetValue(target, Convert.FromBase64String(value.ToString()), null);
                        else if (pType.IsEnum && vType.Equals(typeof(string)))
                            propertyInfo.SetValue(target, Enum.Parse(pType, value.ToString()), null);
                        else if (value == "" && vType.Equals(typeof(string)))
                            propertyInfo.SetValue(target, null, null);
                        else
                            propertyInfo.SetValue(target, Convert.ChangeType(value, pType), null);
                    }
                }
            }
            catch (Exception ex)
            {
                string info = string.Format("Database.DataMapper.SetPropertyValue[class:{0} property:{1}]", className, propertyName);
                //CLogManager.WriteFW(info, ex.Message);
            }
        }
        public static PropertyInfo[] GetSourceProperties(Type sourceType)
        {
            List<PropertyInfo> result = new List<PropertyInfo>();
            PropertyDescriptorCollection props =
                TypeDescriptor.GetProperties(sourceType);
            foreach (PropertyDescriptor item in props)
                if (item.IsBrowsable)
                    result.Add(sourceType.GetProperty(item.Name));
            return result.ToArray();
        }

        /// <summary>
        /// Returns a property's type, dealing with
        /// Nullable(Of T) if necessary.
        /// </summary>
        /// <param name="propertyType">Type of the
        /// property as returned by reflection.</param>
        private static Type GetPropertyType(Type propertyType)
        {
            Type type = propertyType;
            if (type.IsGenericType &&
                (type.GetGenericTypeDefinition() == typeof(Nullable<>)))
                return Nullable.GetUnderlyingType(type);
            return type;
        }

        public static string[] ParseCsvRow(string r)
        {

            string[] c;
            string t;
            List<string> resp = new List<string>();
            bool cont = false;
            string cs = "";

            c = r.Split(new char[] { CSV_FIELD_SEPARATOR }, StringSplitOptions.None);

            foreach (string y in c)
            {
                string x = y;


                if (cont)
                {
                    // End of field
                    if (x.EndsWith("\""))
                    {
                        cs += CSV_FIELD_SEPARATOR + x.Substring(0, x.Length - 1);
                        resp.Add(cs);
                        cs = "";
                        cont = false;
                        continue;

                    }
                    else
                    {
                        // Field still not ended
                        cs += CSV_FIELD_SEPARATOR + x;
                        continue;
                    }
                }

                // Fully encapsulated with no comma within
                if (x.StartsWith("\"") && x.EndsWith("\""))
                {
                    if ((x.EndsWith("\"\"") && !x.EndsWith("\"\"\"")) && x != "\"\"")
                    {
                        cont = true;
                        cs = x;
                        continue;
                    }

                    resp.Add(x.Substring(1, x.Length - 2));
                    continue;
                }

                // Start of encapsulation but comma has split it into at least next field
                if (x.StartsWith("\"") && !x.EndsWith("\""))
                {
                    cont = true;
                    cs += x.Substring(1);
                    continue;
                }

                // Non encapsulated complete field
                resp.Add(x);

            }

            return resp.ToArray();

        }
    }
}