using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Text;
using System.IO;
using FWS.Framework.Log;

namespace FWS.VnAccounting.Presentation.WebApp.Mods.Report
{
    public class CReportServiceUI
    {
        public static string GetHtmlFunction(string requestFrom)
        {
            StringBuilder ret = new StringBuilder();
            //add css
            ret.Append("<link href='Css/Mods.Report.Html.css' rel='stylesheet' type='text/css' />\r\n");
            //add script
            ret.AppendFormat("<script type='text/javascript'>var requestfrom={0};</script>\r\n", requestFrom);
            ret.Append("<script type='text/javascript' src='../../Js/jq/jquery.min.lastest.js'></script>\r\n");
            ret.Append("<script type='text/javascript' src='Js/Mods.Report.Html.js'></script>\r\n");

            return ret.ToString();
        }
        public static string SaveFile(byte[] buffer, string location, string filename)
        {
            StringBuilder ret = new StringBuilder();
            string temp = "{{\"Code\":\"{0}\", \"Desc\":\"{1}\"}}";
            try
            {
                if (filename != "") //New
                {
                    string url = AppDomain.CurrentDomain.BaseDirectory + "Mods/Report/Images/";
                    if (location != "")
                        url += "\\" + location;
                    url += "\\" + filename;
                    if (buffer.Length > 0)
                    {
                        using (FileStream fs = new FileStream(url, FileMode.Create))
                        {
                            fs.Write(buffer, 0, buffer.Length);
                        }
                    }
                    ret.AppendFormat(temp, "00", "Create file successful!");
                }
                else //Edit
                {
                    ret.AppendFormat(temp, "00", "Update file successful!");
                }
            }
            catch (Exception ex)
            {
                ret.AppendFormat(temp, "99", "Error system!!!");
                CLogManager.WritePL("ReportFunction.GetDirrectory", ex.Message);
            }
            return ret.ToString();
        }
    }
}