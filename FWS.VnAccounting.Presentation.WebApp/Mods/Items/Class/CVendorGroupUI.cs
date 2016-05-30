using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

using System.Text;
using FWS.VnAccounting.Presentation.WebApp.Mods.Core;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.AP;
using ServiceREF.VendorService;
using FWS.Framework.Log;


namespace FWS.VnAccounting.Presentation.WebApp.Mods.Items
{
    public class CVendorGroupUI
    {
        ServiceREF.VendorService.VendorService service;
        public CVendorGroupUI()
        {
            service = new ServiceREF.VendorService.VendorService();
        }
        public string GetItem(int userID, string session, string funcPara)
        {
            //string pInput = string.Format("<InputValue UserID=\"{0}\" Session=\"{1}\" {2}/>", userID, session, funcPara);
            string InputValue = CXmlPara.CreatePara(funcPara);

            ServiceREF.VendorService.CVendorGroup vendorGroup = service.GetVendorGroup(InputValue);
            StringBuilder ret = new StringBuilder();
            if (vendorGroup != null)
            {
                ret.Append("{");
                ret.AppendFormat("ID:'{0}',\n", vendorGroup.ID);
                ret.AppendFormat("Code:'{0}',\n", vendorGroup.Code);
                ret.AppendFormat("Name:'{0}'\n", vendorGroup.Name);
                ret.Append("}");
            }
            else
            {
                ret.Append("{}");
            }
            return ret.ToString();
        }
        public string GetItems(int userID, string session, string funcPara)
        {            
            //string InputValue = string.Format("<InputValue UserID=\"{0}\" Session=\"{1}\" {2}/>", userID, session, inputValue);
            string InputValue = CXmlPara.CreatePara(funcPara);

            COutputValue pageinfo = new COutputValue();
            ServiceREF.VendorService.CVendorGroup[] list = service.GetVendorGroupList(InputValue, ref pageinfo);
            StringBuilder ret = new StringBuilder();
            ret.Append("[");
            foreach (ServiceREF.VendorService.CVendorGroup vendorGroup in list)
            {
                if (vendorGroup != null)
                {
                    ret.Append("{");
                    ret.AppendFormat("ID:'{0}',\n", vendorGroup.ID);
                    ret.AppendFormat("Code:'{0}',\n", vendorGroup.Code);
                    ret.AppendFormat("Name:'{0}'\n", vendorGroup.Name);
                    ret.Append("}");
                    if (vendorGroup != list[list.Length - 1])
                        ret.Append(",");
                }
            }
            ret.Append("]");
            return ret.ToString();
        }

        public string GetItem(int userId, string session, int Page, int numPage, int totalRows, string inputValue)
        {
            return "";
        }
        public string GetItems(int userId, string session, int currPage, int NumberRowOfPage, string funcPara)
        {            
            //string InputValue = string.Format("<InputValue PageIndex='{0}' RowsPerPage='{1}' {2}/>", currPage, NumberRowOfPage, inputValue);
            string InputValue = CXmlPara.CreatePara(new CPara[]
                {
                    new CPara("PageIndex", currPage.ToString()),
                    new CPara("RowsPerPage", NumberRowOfPage.ToString()),
                },
                funcPara
            );

            COutputValue pageinfo = new COutputValue();
            ServiceREF.VendorService.CVendorGroup[] list = service.GetVendorGroupList(InputValue, ref pageinfo);
            StringBuilder ret = new StringBuilder();
            try
            {
                string format = "\"ID\":\"{0}\", \"Code\":\"{1}\", \"Name\":\"{2}\", \"Status\":\"{3}\"";
                ret.Append("{");
                ret.AppendFormat("\"currpage\":\"{0}\",\"totalpages\":\"{1}\",\"totalrecords\":\"{2}\",\"invdata\":[", currPage, pageinfo.TotalPage, pageinfo.TotalRow);
                for (int i = 0; i < list.Length; i++)
                {
                    string item = string.Format(format, list[i].ID, list[i].Code, list[i].Name, list[i].Status);
                    ret.Append("{" + item + "}");
                    if (i < list.Length - 1)
                        ret.Append(",");
                }
                ret.Append("]}");
            }
            catch (Exception ex)
            {
                ret.Append(ex.ToString());
            }
            return ret.ToString();
        }
        public string UpdateItem(int userID, string session, string funcPara)
        {
            //string pInput = string.Format("<InputValue UserID=\"{0}\" Session=\"{1}\" {2}/>", userID, session, inputValue);
            string InputValue = CXmlPara.CreatePara(funcPara);

            ServiceREF.VendorService.CApplicationMessage message = service.UpdateVendorGroup(InputValue);
            StringBuilder ret = new StringBuilder();
            ret.Append("{");
            ret.AppendFormat("Code:'{0}',\n", message.Code);
            ret.AppendFormat("Name:'{0}'\n", message.Name);
            ret.Append("}");
            return ret.ToString();
        }
    }
}