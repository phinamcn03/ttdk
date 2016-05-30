using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Xml;
namespace FWS.VnAccounting.Presentation.WebApp.Mods.Core
{
    public class CXml
    {
        public static XmlNode CreateNode(string nodeName, KeyValuePair<string, string>[] arrAttr)
        {   
            //XmlDocument doc = new XmlDocument();

            //return note;
            XmlDocument doc = new XmlDocument();
            XmlNode node = doc.CreateNode(XmlNodeType.Element,nodeName,"");

            XmlElement element = (XmlElement)node;

            foreach(KeyValuePair<string, string> attr in arrAttr)
            {
                 XmlAttribute att = (XmlAttribute)doc.CreateAttribute(attr.Key);
                 att.Value = attr.Value;
                node.Attributes.Append(att);
            }
            return node;
        }
    }
}