using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ServiceREF.CoreService;
using FWS.VnAccounting.Presentation.WebApp.Mods.Core;

namespace FWS.VnAccounting.Presentation.WebApp.Mods.Accounts
{
    public class ConfigUI : CBaseItemUI
    {
        ServiceREF.CoreService.CoreService service = null;
        public ConfigUI()
        {
            service = new ServiceREF.CoreService.CoreService();
        }
        public string GetGrid(int currPage, int NumberRowOfPage, string exAttribute)
        {
            string InputValue = CXmlPara.CreatePara(new CPara[]{
                    new CPara("PageIndex", currPage.ToString()),
                    new CPara("RowsPerPage", NumberRowOfPage.ToString()),
                }, exAttribute);

            COutputValue outputValue = new COutputValue();
            CClientGroupConfig[] list = service.GetClientGroupConfig(InputValue, ref outputValue);
            int totalPage = outputValue.TotalPage;
            int totalRow = outputValue.TotalRow;
            return CGrid.ToJsonForHandle<CClientGroupConfig>(1, 22, list, currPage, totalPage, totalRow);
        }
        public string Update(string InputValue)
        {
            string strInputValue = CreatePara(InputValue);
            CApplicationMessage message = service.UpdateClientGroupConfig(strInputValue);
            return CJson.SerializeObject(message);
        }

    }
}