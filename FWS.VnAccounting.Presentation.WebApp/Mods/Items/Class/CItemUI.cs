using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

using System.Text;
using ServiceREF.InventoryService;
using FWS.VnAccounting.Presentation.WebApp.Mods.Core;
using FWS.VnAccounting.Presentation.WebApp.Mods.Global;
namespace FWS.VnAccounting.Presentation.WebApp.Mods.Items.Class
{
    public class CItemUI
    {
        ServiceREF.InventoryService.InventoryService service;
        public CItemUI()
        {
            service = new ServiceREF.InventoryService.InventoryService();
        }
        public string GetItem(string InputValue)
        {
            CItems item = service.GetInventoryItem(InputValue);
            return CJson.SerializeObject(item);
        }
        public string GetItemGroup(string InputValue)
        {
            CItemGroup item = service.GetInventoryItemGroup(InputValue);
            return CJson.SerializeObject(item);
        }
        public string GetItems(int userId, string session, int currPage, int NumberRowOfPage, string funcPara)
        {
            //string InputValue = string.Format("<InputValue PageIndex='{0}' RowsPerPage='{1}' {2} />", currPage, NumberRowOfPage, funcPara);
            string InputValue = CXmlPara.CreatePara(new CPara[]
                {
                    new CPara("PageIndex", currPage.ToString()),
                    new CPara("RowsPerPage", NumberRowOfPage.ToString()),
                },
                funcPara
            );
            COutputValue outputValue = new COutputValue();
            CItems[] list = service.GetInventoryItemsList(InputValue, ref outputValue);
            return CGrid.ToJsonForHandle<CItems>(1, 3, list, currPage, outputValue.TotalPage, outputValue.TotalRow);
        }
        public string GetItemGroups(int userId, string session, int currPage, int NumberRowOfPage, string funcPara)
        {            
            //string pInput = string.Format("<InputValue PageIndex='{0}' RowsPerPage='{1}' {2}/>", currPage, NumberRowOfPage, inputValue);
            string InputValue = CXmlPara.CreatePara(new CPara[]
                {
                    new CPara("PageIndex", currPage.ToString()),
                    new CPara("RowsPerPage", NumberRowOfPage.ToString()),
                },
                funcPara
            );

            COutputValue pageinfo = new COutputValue();
            CItemGroup[] list = service.GetInventoryItemGroupList(InputValue, ref pageinfo);
            StringBuilder ret = new StringBuilder();
            try
            {
                string format = "\"ID\":\"{0}\", \"Code\":\"{1}\", \"Name\":\"{2}\", \"Description\":\"{3}\", \"CreatedBy\":\"{4}\", \"Action\":\"{5}\"";
                               
                ret.Append("{");
                ret.AppendFormat("\"currpage\":\"{0}\",\"totalpages\":\"{1}\",\"totalrecords\":\"{2}\",\"invdata\":[", currPage, pageinfo.TotalPage, pageinfo.TotalRow);
                for (int i = 0; i < list.Length; i++)
                {
                    string item = string.Format(format, list[i].ID, list[i].Code, list[i].Name, list[i].Description, list[i].CreatedByName.ToString(), list[i].Active);
                    ret.Append("{" + item + "}");
                    if (i < list.Length - 1)
                        ret.Append(",");
                }
                ret.Append("]}");
            }
            catch (Exception)
            {

            }
            return ret.ToString();
        }
        public string GetGridItemGroups(int userId, string session, int currPage, int NumberRowOfPage, string funcPara)
        {
            string result = "";            
            //string InputValue = string.Format("<InputValue PageIndex='{0}' RowsPerPage='{1}' {2}/>", currPage, NumberRowOfPage, funcPara);
            string InputValue = CXmlPara.CreatePara(new KeyValuePair<string, string>[]
                {
                    new KeyValuePair<string, string>("PageIndex", currPage.ToString()),
                    new KeyValuePair<string, string>("RowsPerPage", NumberRowOfPage.ToString()),
                },
                funcPara
            );

            COutputValue outputValue = new COutputValue();
            CItemGroup[] list = service.GetInventoryItemGroupList(InputValue, ref outputValue);
            result = CGrid.ToJsonForHandle<CItemGroup>(userId, 4, list, currPage, outputValue.TotalPage, outputValue.TotalRow);

            return result;
        }
        public string GetItemCostMethodList(int userId, string session, int currPage, int NumberRowOfPage)
        {            
            //string pInput = string.Format("<InputValue PageIndex='{0}' RowsPerPage='{1}' />", currPage, NumberRowOfPage);
            string InputValue = CXmlPara.CreatePara(new KeyValuePair<string, string>[]
                {
                    new KeyValuePair<string, string>("PageIndex", currPage.ToString()),
                    new KeyValuePair<string, string>("RowsPerPage", NumberRowOfPage.ToString()),
                }
            );

            COutputValue pageinfo = new COutputValue();
            CCostMethod[] list = service.GetCostMethodList(InputValue, ref pageinfo);
            StringBuilder ret = new StringBuilder();
            try
            {
                string format = "\"ID\":\"{0}\", \"Code\":\"{1}\", \"Name\":\"{2}\"";

                ret.Append("{");
                ret.AppendFormat("\"currpage\":\"{0}\",\"totalpages\":\"{1}\",\"totalrecords\":\"{2}\",\"invdata\":[", currPage, pageinfo.TotalPage, pageinfo.TotalRow);
                for (int i = 0; i < list.Length; i++)
                {
                    string item = string.Format(format, list[i].ID, list[i].MethodID, list[i].MethodName);
                    ret.Append("{" + item + "}");
                    if (i < list.Length - 1)
                        ret.Append(",");
                }
                ret.Append("]}");
            }
            catch (Exception)
            {

            }
            return ret.ToString();
        }
        public string GetItemTypeList(int userId, string session, int currPage, int NumberRowOfPage)
        {            
            //string pInput = string.Format("<InputValue PageIndex='{0}' RowsPerPage='{1}' />", currPage, NumberRowOfPage);
            string InputValue = CXmlPara.CreatePara(new KeyValuePair<string, string>[]
                {
                    new KeyValuePair<string, string>("PageIndex", currPage.ToString()),
                    new KeyValuePair<string, string>("RowsPerPage", NumberRowOfPage.ToString()),
                }
            );

            COutputValue pageinfo = new COutputValue();
            CItemType[] list = service.GetItemTypeList(InputValue, ref pageinfo);
            StringBuilder ret = new StringBuilder();
            try
            {
                string format = "\"ID\":\"{0}\", \"Code\":\"{1}\", \"Name\":\"{2}\"";

                ret.Append("{");
                ret.AppendFormat("\"page\":\"{0}\",\"total\":\"{1}\",\"records\":\"{2}\",\"invdata\":[", currPage, pageinfo.TotalPage, pageinfo.TotalRow);
                for (int i = 0; i < list.Length; i++)
                {
                    string item = string.Format(format, list[i].ID, list[i].Code, list[i].Name);
                    ret.Append("{" + item + "}");
                    if (i < list.Length - 1)
                        ret.Append(",");
                }
                ret.Append("]}");
            }
            catch (Exception)
            {

            }
            return ret.ToString();
        }
        public string UpdateItem(string InputValue)
        {
            ServiceREF.InventoryService.CApplicationMessage message = service.UpdateInventoryItem(InputValue);
            return CJson.SerializeObject(message);
        }
        public string DeleteItem(string InputValue)
        {
            ServiceREF.InventoryService.CApplicationMessage message = service.UpdateInventoryItem(InputValue);
            return CJson.SerializeObject(message);
        }
        public string UpdateItemGroup(string InputValue)
        {
            ServiceREF.InventoryService.CApplicationMessage message = service.UpdateInventoryItemGroup(InputValue);
            return CJson.SerializeObject(message);
        }
        public string GetAccountList(string Input)
        {
            ServiceREF.GeneralLedgerService.GeneralLedgerService GLS = new ServiceREF.GeneralLedgerService.GeneralLedgerService();
            ServiceREF.GeneralLedgerService.COutputValue pageinfo = new ServiceREF.GeneralLedgerService.COutputValue();
            ServiceREF.GeneralLedgerService.CAccountList[] list = GLS.GetAccountList(Input, ref pageinfo);
            StringBuilder ret = new StringBuilder();
            if (list != null && list.Length > 0)
            {
                foreach (var item in list)
                {
                    ret.AppendFormat("{0}|{1}|{2}\n", item.ID, item.Code, item.DisplayName);
                }

            }
            string result = string.Empty;
            if (ret.Length > 0)
            {
                result = ret.ToString(0, ret.Length - 1);
            }
            return result;
        }
    }
}