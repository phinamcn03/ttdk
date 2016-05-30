<%@ WebHandler Language="C#" Class="GetDataJsonTree" %>

using System.Text;
using System.Web;
using System.Xml;
using FWS.Framework.Log;

public class GetDataJsonTree : IHttpHandler
{
    public bool IsReusable
    {
        get { return false; }
    }

    public void ProcessRequest(HttpContext context)
    {
        context.Response.ContentType = "application/json";
        context.Response.ContentEncoding = Encoding.UTF8;
        string inputValue = "";
        if (context.Request.QueryString["inputValue"] != null)
        {
            inputValue = HttpUtility.UrlDecode(context.Request.QueryString["inputValue"]);
        }

        string id = "";
        if (context.Request.Form["id"] != null)
        {
            id = context.Request.Form["id"];
        }
        StringBuilder ret = new StringBuilder();
        ServiceREF.CoreService.CoreService service = new ServiceREF.CoreService.CoreService();
        string test = "";
        if (!string.IsNullOrEmpty(id) && !string.IsNullOrEmpty(inputValue))
        {
            XmlDocument document = new XmlDocument();
            document.LoadXml(inputValue);
            XmlNodeList nodeList = document.GetElementsByTagName("InputValue");
            if (nodeList.Count > 0)
            {
                XmlNode node = nodeList[0];
                XmlAttribute ModuleID = document.CreateAttribute("ModuleID");
                ModuleID.Value = id;
                node.Attributes.Append(ModuleID);
                inputValue = document.InnerXml;
            }
            test = inputValue;
        }
        ServiceREF.CoreService.CInterfaceFunction[] list = service.GetInterfaceFunctionInObject(inputValue);
        ret.Append("[");
        if (list.Length > 0)
        {
            
            foreach (var item in list)
            {
                string state = "open";
                
                if (item.ChildCount != 0)
                {
                    state = "closed";
                }
                else
                {
                    state = "open";
                }
                ret.Append("{\n");
                ret.AppendFormat("'id':'{0}',\n", item.ID);
                ret.AppendFormat("'text':'{0}',\n", item.Name);                
                ret.AppendFormat("'state':'{0}',\n", state);
                ret.Append("'attributes':{");
                ret.AppendFormat("'filterID':'{0}',", item.FilterID);                
                ret.AppendFormat("'childCount':{0},", item.ChildCount);
                ret.AppendFormat("'url':'{0}',", item.LinkURL);
                ret.AppendFormat("'openType':'{0}',", item.OpenType);
                ret.AppendFormat("'isLoad':'{0}'", item.IsLoad == true ? 1 : 0);
                ret.Append("}\n");
                ret.Append("}");
                if (item != list[list.Length - 1])
                {
                    ret.Append(",\n");
                }
            }
            
        }
        ret.Append("]");
        string jsonReturn = "";
        if (ret.Length > 0)
        {
            jsonReturn = ret.ToString().Replace("'", "\"");
        }

        context.Response.Write(jsonReturn);
    }
}