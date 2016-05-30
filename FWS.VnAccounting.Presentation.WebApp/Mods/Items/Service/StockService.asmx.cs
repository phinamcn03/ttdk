using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using ServiceREF.InventoryService;
using FWS.VnAccounting.Presentation.WebApp.Mods.Core;
using System.Text;

namespace FWS.VnAccounting.Presentation.WebApp.Mods.Items.Service
{
    /// <summary>
    /// Summary description for StockService
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    // [System.Web.Script.Services.ScriptService]
    public class StockService : System.Web.Services.WebService
    {
        CStockUI obj = new CStockUI();
        InventoryService service = new InventoryService();
        [WebMethod]
        public string GetInventoryStockList(int currPage, int numberRowOfPage, string inputValue)
        {
            return obj.GetItems(currPage, numberRowOfPage, inputValue);
        }

        [WebMethod]
        public string GetStock(string InputValue)
        {
            return obj.GetItem(InputValue);
        }
        [WebMethod]
        public string GetStockList(string InputValue)
        {
            //return obj.GetItems(InputValue);
            string strInputValue = CXmlPara.CreatePara(InputValue);
            
            COutputValue pageinfo = new COutputValue();
            CStock[] list = service.GetInventoryStockList(strInputValue, ref pageinfo);
            
            StringBuilder ret = new StringBuilder();
            ret.Append("[");
            foreach (CStock stock in list)
            {
                if (stock != null)
                {
                    ret.Append("{");
                    ret.AppendFormat("ID:'{0}',\n", stock.ID);
                    ret.AppendFormat("Code:'{0}',\n", stock.Code);
                    ret.AppendFormat("Name:'{0}',\n", stock.Name);
                    ret.AppendFormat("ParentID:'{0}',\n", stock.ParentID);
                    ret.AppendFormat("Description:'{0}'\n", stock.Description);
                    ret.Append("}");
                    if (stock != list[list.Length - 1])
                        ret.Append(",");
                }
            }
            ret.Append("]");
            return ret.ToString();

        }
        [WebMethod]
        public string Update(string InputValue)
        {
            return obj.UpdateItem(InputValue);
        }
    }
}
