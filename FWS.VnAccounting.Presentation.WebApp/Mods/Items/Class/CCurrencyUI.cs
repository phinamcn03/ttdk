using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Text;
using FWS.VnAccounting.Presentation.WebApp.Mods.Core;
using FWS.VnAccounting.Presentation.WebApp.Mods.Global;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Core;

namespace FWS.VnAccounting.Presentation.WebApp.Mods.Items.Class
{
    public class CCurrencyUI: CBaseItemUI
    {
        ServiceREF.Cash.CurrencyService service;
        public CCurrencyUI()
        {
            service = new ServiceREF.Cash.CurrencyService();
        }
        public string GetGrid(int userId, string session, int currPage, int NumberRowOfPage, string funcPara)
        {
            string ret = "";
            string InputValue = CXmlPara.CreatePara(new CPara[]
                {
                    new CPara("PageIndex", currPage.ToString()),
                    new CPara("RowsPerPage", NumberRowOfPage.ToString()),
                },
                funcPara
            );

            ServiceREF.Cash.COutputValue outputValue = new ServiceREF.Cash.COutputValue();
            ServiceREF.Cash.CCurrency[] list = service.GetCurrencyList(InputValue, ref outputValue);
            
            ret = CGrid.ToJsonForHandle<ServiceREF.Cash.CCurrency>(1,10, list, currPage, outputValue.TotalPage, outputValue.TotalRow);         
            return ret;
        }
        protected string GetItem(ServiceREF.Cash.CCurrency item)
        {
            return CJson.SerializeObject(item);
        }
        public string UpdateCurrency(string InputValue)
        {
            string strInputValue = CreatePara(InputValue);
            ServiceREF.Cash.CApplicationMessage message = service.UpdateCurrency(strInputValue);
            return CJson.SerializeObject(message);
        }
        public string GetCurrency(string InputValue)
        {
            string strInputValue = CreatePara(InputValue);
            ServiceREF.Cash.CCurrency message = service.GetCurrency(strInputValue);
            return CJson.SerializeObject(message);
        }
    }
}