using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

using System.Xml;
using System.Collections;
using System.Text.RegularExpressions;
namespace FWS.VnAccounting.Presentation.WebApp.Mods.Core
{
    public class CPara
    {
        public string Name{get;set;}
        public string Value { get; set; }
        public CPara(string name, string value)
        {
            Name = name;
            Value = value;
        }
    }

    public class CXmlPara : CXml
    {
        protected static string TagName = "InputValue";
        public CXmlPara()
        {

        }

        public static string CreatePara()
        {
            return CreatePara("");
        }

        public static string CreatePara(string pPara)
        {
            return CreatePara(pPara, "");
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="pPara"><InputValue ID="0" RefDate="null" ObjectID="142" ObjectName="CÔNG TY XĂNG DẦU KHU VỰC II" ObjectType="1" RefType="9" RefNo="PCK0255" InwardStockID="9" OutwardStockID="9" Description="1111" Action="INSERT"/><Detail ID="1" ItemID="4" Quantity="100" Price="1" Description="13123" Action="INSERT"/></param>
        /// <param name="exAttr"></param>
        /// <returns></returns>
        public static string CreatePara(string pPara, string exAttr)
        {
            //pPara = "<InputValue ID=\"0\" RefDate=\"null\" ObjectID=\"142\" ObjectName=\"CÔNG TY XĂNG DẦU KHU VỰC II\" ObjectType=\"1\" RefType=\"9\" RefNo=\"PCK0255\" InwardStockID=\"9\" OutwardStockID=\"9\" Description=\"1111\" Action=\"INSERT\"/><Detail ID=\"1\" ItemID=\"4\" Quantity=\"100\" Price=\"1\" Description=\"13123\" Action=\"INSERT\"/>";
            string inputPattern = @"<InputValue[\s\S]*?(<\/InputValue>|\/>)";
            Match m = Regex.Match(pPara, inputPattern, RegexOptions.Compiled | RegexOptions.Multiline | RegexOptions.IgnoreCase);
            if (m.Success)
            {
                string inputValue = m.Value;
                string strRet = AddMetaToInputValue(inputValue);
                //m.Result(strRet);
                return Regex.Replace(pPara, inputPattern, strRet);
            }
            return "";
        }

        private static string AddMetaToInputValue(string pInputValue)
        {
            CSession session = new CSession();
            XmlDocument doc = new XmlDocument();
            try
            {
                doc.LoadXml(pInputValue);
                XmlElement rootNode = doc.DocumentElement; // Lay InputValue node

                //Tao 2 attribute userId va Session
                if (!rootNode.HasAttribute("UserID"))
                {
                    XmlAttribute userAttr = doc.CreateAttribute("UserID");
                    userAttr.Value = session.UserID.ToString();
                    rootNode.Attributes.Append(userAttr);
                }
                if (!rootNode.HasAttribute("Session"))
                {
                    XmlAttribute sessionAttr = doc.CreateAttribute("Session");
                    sessionAttr.Value = session.Session;
                    rootNode.Attributes.Append(sessionAttr);
                }
                //them vao InputValue, neu InputValue co attribute UserID hoac Session se bi loi.
            }
            catch (XmlException)
            {
                //invalid input
            }
            return doc.OuterXml;
        }

        public static string CreatePara(KeyValuePair<string, string>[] funcPara)
        {
            return CreatePara(funcPara, "");
        }
        public static string CreatePara(CPara[] funcPara, string exAttr)
        {
            List<KeyValuePair<string, string>> Para = new List<KeyValuePair<string, string>>();
            foreach (CPara para in funcPara)
                Para.Add(new KeyValuePair<string, string>(para.Name, para.Value));

            return CreatePara(Para.ToArray(), exAttr);
        }

        public static string CreatePara(KeyValuePair<string, string>[] funcPara, string exAttr)
        {
            string ret = string.Format("<{0} />", TagName);
            try
            {
                //Add UserInfo -----------------------------------------------------------                
                CSession session = new CSession();
                List<KeyValuePair<string, string>> list = new List<KeyValuePair<string, string>>();
                KeyValuePair<string, string>[] sysPara = new KeyValuePair<string, string>[]
                    {
                        new KeyValuePair<string, string>("UserID", session.UserID.ToString()),
                        new KeyValuePair<string, string>("Session", session.Session),
                    };

                list.AddRange(sysPara);
                list.AddRange(funcPara);
                sysPara = list.ToArray<KeyValuePair<string, string>>();
                //-------------------------------------------------------------------------

                XmlNode node = CXml.CreateNode(TagName, sysPara);
                ret = node.OuterXml;
                if (exAttr != "")
                    ret = ret.Replace("/>", exAttr + "/>");
            }
            catch
            {
            }
            return ret;
        }
    }
}