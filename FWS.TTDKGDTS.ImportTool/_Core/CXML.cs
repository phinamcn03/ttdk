using System;
using System.Collections.Generic;
using System.Web;
using FWS.TTDKGDTS.ImportTool._Global;
using System.Xml;

namespace FWS.VnAccounting.Service.Data.Utils
{
    public class CXML
    {
        public static string HtmlDecode(string xmlString)
        {
            return System.Web.HttpUtility.HtmlDecode(xmlString);
        }

        public static string HtmlEnCode(string xmlString)
        {
            return System.Web.HttpUtility.HtmlEncode(xmlString);
        }
        public static string AddAuthenticate(string xmlString)
        {
            if (!xmlString.Contains("<InputValue "))
            {
                string xmlAuthenticate =string.Format( "<InputValue UserID=\"{0}\" WebUserName=\"{1}\" ClientKey=\"{2}\" />",CSession.UserID,CSession.WebUserName,CSession.CLIENT_KEY);
                xmlString = xmlAuthenticate + xmlString;
            }
            return xmlString;
        }

        public static string GetXmlNodeValue(string xmlString, string xpath)
        {

            if (string.IsNullOrEmpty(xmlString))
            {
                return null;
            }
            XmlDocument doc = new XmlDocument();

            try
            {
                string localXml = "<Root>" + xmlString + "</Root>";
                xpath = "Root/" + xpath;
                doc.LoadXml(localXml);
                return doc.SelectSingleNode(xpath).Value;

            }
            catch
            {
                return null;
            }
            finally
            {
                doc = null;
            }
        }

        public static string AddXmlAttribute(string xmlString, string xpath, string attrName, string value)
        {

            if (string.IsNullOrEmpty(xmlString))
            {
                return null;
            }
            XmlDocument doc = new XmlDocument();

            try
            {
                string localXml = "<Root>" + xmlString + "</Root>";
                xpath = "Root/" + xpath;
                doc.LoadXml(localXml);
                XmlNodeList nodes = doc.SelectNodes(xpath);
                if (nodes.Count > 0)
                {
                    XmlElement element = (XmlElement)nodes[0];
                    element.SetAttribute(attrName, value);
                }
                XmlElement root = doc.DocumentElement;

                return root.InnerXml;

            }
            catch
            {
                return null;
            }
            finally
            {
                doc = null;
            }
        }
        public static string Query(string xmlString, string xpath)
        {

            if (string.IsNullOrEmpty(xmlString))
            {
                return null;
            }
            XmlDocument doc = new XmlDocument();

            try
            {
                string localXml = "<Root>" + xmlString + "</Root>";
                //xpath = "Root/" + xpath;
                doc.LoadXml(localXml);
                string result = "";
                string[] xpathSubs = xpath.Split(',');
                foreach (string sub in xpathSubs)
                {
                    string xpathSub = "Root/" + sub;
                    XmlNodeList nodes = doc.SelectNodes(xpathSub);

                    foreach (XmlNode node in nodes)
                    {
                        result += node.OuterXml;
                    }
                }
                return result;
            }
            catch
            {
                return "";
            }
            finally
            {
                doc = null;
            }
        }
    }
}