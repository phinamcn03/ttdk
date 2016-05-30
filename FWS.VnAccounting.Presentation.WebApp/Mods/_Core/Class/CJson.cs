using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

using System.Text;
using System.Reflection;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
namespace FWS.VnAccounting.Presentation.WebApp.Mods.Core
{
    public class CJson
    {
        protected CPara[] _ArrPara = null;
        public CJson(params CPara[] arrPara)
        {
            _ArrPara = arrPara;
        }
        public string ToJson()
        {
            StringBuilder ret = new StringBuilder();
            ret.Append("{");
            foreach (CPara para in _ArrPara)
            {
                ret.AppendFormat("\n\t{0} : \"{1}\"", para.Name, para.Value);
                if (_ArrPara.Length > 0 && para != _ArrPara[_ArrPara.Length - 1])
                    ret.Append(",");
            }
            ret.Append("\n}");
            return ret.ToString();
        }

        #region "CJSon Static"
        public static string SerializeObject(object obj, params CPara[] attrMap)
        {
            if (obj is object[]) 
                return SerializeList((object[])obj, attrMap);
            else if (obj is IList<object>)
                return SerializeList(((IList<object>)obj).ToArray(), attrMap);
            else
                return SerializeEntity(obj, attrMap);
        }
        protected static string SerializeEntity(object obj, params CPara[] attrMap)
        {
            string mappedAttr = "";
            StringBuilder sb = new StringBuilder();
            sb.Append("{");
            try
            {
                PropertyInfo[] properties = obj.GetType().GetProperties();
                foreach (PropertyInfo p in properties)
                {
                    object propertiesValue = p.GetValue(obj, null);
                    mappedAttr = p.Name;
                    if (attrMap != null)
                    {
                        foreach (CPara para in attrMap)
                        {
                            if (para.Name == p.Name)
                                mappedAttr = para.Value;
                        }
                    }

                    if (propertiesValue != null)
                    {
                        sb.AppendFormat("\"{0}\"", mappedAttr);
                        if (propertiesValue is DateTime)
                            sb.AppendFormat(":\"{0}\",", ((DateTime)propertiesValue).ToString("yyyy-MM-dd HH:mm:ss"));
                        else if (propertiesValue is string)
                        {
                            //string s = HttpContext.Current.Server.HtmlEncode(propertiesValue.ToString());
                            sb.AppendFormat(":{0},", Newtonsoft.Json.JsonConvert.SerializeObject(propertiesValue.ToString()));
                        }
                        else
                            sb.AppendFormat(":\"{0}\",", propertiesValue);
                    }
                }

                if (sb.ToString().EndsWith(",")) sb.Remove(sb.Length - 1, 1);
                sb.Append("}");
            }
            catch
            {
            }
            return sb.ToString();
        }
        protected static string SerializeList(object[] arrObj, params CPara[] attrMap)
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("[");
            if (arrObj != null)
            {
                foreach (object obj in arrObj)
                {
                    sb.Append(SerializeEntity(obj, attrMap));
                    sb.Append(",");
                }
            }
            if (sb.ToString().EndsWith(",")) sb.Remove(sb.Length - 1, 1);
            sb.Append("]");
            return sb.ToString();
        }
        #endregion

    }
}