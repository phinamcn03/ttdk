using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Text;

using FWS.VnAccounting.Presentation.WebApp.Mods.Items.Class;
using FWS.VnAccounting.Presentation.WebApp.Mods.Core.Class;
using FWS.VnAccounting.Presentation.WebApp.Mods.Core;

namespace FWS.VnAccounting.Presentation.WebApp.Mods.Items.Service
{
    /// <summary>
    /// Summary description for ProductService
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    // [System.Web.Script.Services.ScriptService]
    public class ProductService : System.Web.Services.WebService
    {
        CItemUI obj = new CItemUI();
        [WebMethod]
        public string HelloWorld()
        {
            return "Hello World";
        }
        [WebMethod]        
        public string UpdateInventoryProduct(string InputValue)
        {
            string input = CXmlPara.CreatePara(InputValue);            
            return obj.UpdateItem(input);
        }
        [WebMethod]
        public string DeleteInventoryProduct(string InputValue)
        {
            string input = CXmlPara.CreatePara(InputValue);
            return obj.DeleteItem(input);
        }
        [WebMethod]
        public string GetAccountList(string InputValue)
        {
            return obj.GetAccountList(InputValue);
        }
        [WebMethod]
        public string GetInventoryList(string InputValue)
        {
            return obj.GetItem(InputValue);
            }
        [WebMethod]
        public string GetInventoryListGroup(string InputValue)
        {
            ServiceREF.InventoryService.InventoryService service = new ServiceREF.InventoryService.InventoryService();
            ServiceREF.InventoryService.CItemGroup iItem = service.GetInventoryItemGroup(InputValue);
            StringBuilder ret = new StringBuilder();
            ret.Append("{");
            ret.AppendFormat("ID:'{0}',\n", iItem.ID);
            ret.AppendFormat("Code:'{0}',\n", iItem.Code);
            ret.AppendFormat("Name:'{0}',\n", iItem.Name);
            ret.AppendFormat("Active:'{0}',\n", iItem.Active);
            ret.AppendFormat("Description:'{0}'\n", iItem.Description);
            ret.Append("}");
            return ret.ToString();
        }
        [WebMethod]
        public string GetInventoryMethods(int currPage, int numberRowOfPage, string inputValue)
        {
            return obj.GetItemCostMethodList(1, "", currPage, numberRowOfPage);
        }
        [WebMethod]
        public string GetInventoryItemTypeList(int currPage, int numberRowOfPage, string inputValue)
        {
            return obj.GetItemTypeList(1, "", currPage, numberRowOfPage);
        }
        [WebMethod]
        public string GetInventoryProductLists(int currPage, int numberRowOfPage, string inputValue)
        {
            return obj.GetItems(1, "", currPage, numberRowOfPage, inputValue);
        }
        [WebMethod]
        public string GetInventoryProductGroupLists(int currPage, int numberRowOfPage, string inputValue)
        {
            return obj.GetGridItemGroups(1, "", currPage, numberRowOfPage, inputValue);
        }
        [WebMethod]
        public string UpdateInventoryProductGroup(string InputValue)
        {
            ServiceREF.InventoryService.InventoryService service = new ServiceREF.InventoryService.InventoryService();
            ServiceREF.InventoryService.CApplicationMessage message = service.UpdateInventoryItemGroup(InputValue);
            StringBuilder ret = new StringBuilder();
            ret.Append("{");
            ret.AppendFormat("ID:'{0}',\n", message.ID);
            ret.AppendFormat("Code:'{0}',\n", message.Code);
            ret.AppendFormat("Name:'{0}'\n", message.Name);
            ret.Append("}");
            return ret.ToString();
        }
        [WebMethod]
        public string DeleteInventoryProductGroup(string InputValue)
        {
            StringBuilder ret = new StringBuilder();
            ServiceREF.InventoryService.CApplicationMessage message=null;
            string[] str = InputValue.Split('^');
            for (int i = 0; i < str.Length; i++)
            {
                string pInput = string.Format("<InputValue UserID='{0}' ID='{1}' Action='DELETE'/>", 1, str[i]);
                ServiceREF.InventoryService.InventoryService service = new ServiceREF.InventoryService.InventoryService();
                message = service.UpdateInventoryItemGroup(pInput);
            
            }
            ret.Append("{");
            ret.AppendFormat("ID:'{0}',\n", message.ID);
            ret.AppendFormat("Code:'{0}',\n", message.Code);
            ret.AppendFormat("Name:'{0}'\n", message.Name);
            ret.Append("}");
            return ret.ToString();
        }
    }
}
