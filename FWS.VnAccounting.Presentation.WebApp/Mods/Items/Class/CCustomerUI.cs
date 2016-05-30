using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Text;

using ServiceREF.CustomerService;
using FWS.VnAccounting.Presentation.WebApp.Mods.Core;
using FWS.VnAccounting.Presentation.WebApp.Mods.Global;
namespace FWS.VnAccounting.Presentation.WebApp.Mods.Items
{
    public class CCustomerUI : CBaseItemUI
    {
        CustomerService service = null;
        public CCustomerUI()
        {
            service = new CustomerService();
        }
        public string GetGrid(int userId, string session, int currPage, int NumberRowOfPage, string exAttribute)
        {
            string InputValue = CXmlPara.CreatePara(new CPara[]{
                    new CPara("PageIndex", currPage.ToString()),
                    new CPara("RowsPerPage", NumberRowOfPage.ToString()),
                },
                exAttribute
            );

            COutputValue outputValue = new COutputValue();
            CCustomer[] list = service.GetCustomerList(InputValue, ref outputValue);
            return CGrid.ToJsonForHandle<CCustomer>(1, 6, list, currPage, outputValue.TotalPage, outputValue.TotalRow);
        }
        public string GetCustomerList(string funcPara)
        {
            string InputValue = CreatePara(funcPara);
            COutputValue outputValue = new COutputValue();
            CCustomer[] list = service.GetCustomerList(InputValue, ref outputValue);
            return CJson.SerializeObject(list);
        }
        public string GetCustomer(string InputValue)
        {
            string strInputValue = CreatePara(InputValue);
            CCustomer customer = service.GetCustomer(strInputValue);
            return CJson.SerializeObject(customer);
        }
        public string Update(string InputValue)
        {
            string strInputValue = CreatePara(InputValue);
            CApplicationMessage message = service.UpdateItem(strInputValue);
            return CJson.SerializeObject(message);
        }
    }
}