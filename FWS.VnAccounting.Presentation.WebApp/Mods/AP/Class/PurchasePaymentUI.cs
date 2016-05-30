using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using FWS.VnAccounting.Presentation.WebApp.Mods.Core;
using FWS.VnAccounting.Presentation.WebApp.Mods.Global;

namespace FWS.VnAccounting.Presentation.WebApp.Mods.AP.Class
{
    public class PurchasePaymentUI
    {
        ServiceREF.GeneralLedgerService.GeneralLedgerService service = new ServiceREF.GeneralLedgerService.GeneralLedgerService();
        public string GetGrid(int currPage, int NumberRowOfPage, string exAttribute)
        {
            string InputValue = CXmlPara.CreatePara(new CPara[]{
                    new CPara("PageIndex", currPage.ToString()),
                    new CPara("NumberRowOfPage", NumberRowOfPage.ToString())
                },
                exAttribute
            );
            ServiceREF.GeneralLedgerService.COutputValue outputValue = new ServiceREF.GeneralLedgerService.COutputValue();
            ServiceREF.GeneralLedgerService.CTransaction[] list = service.GetTransactionList(InputValue, ref outputValue);
            return CGrid.ToJsonForHandle<ServiceREF.GeneralLedgerService.CTransaction>(0, 20, list, currPage, outputValue.TotalPage, outputValue.TotalRow);
        }
        public string Add(int currPage, int NumberRowOfPage, string exAttribute)
        {
            string InputValue = CXmlPara.CreatePara(new CPara[]{
                    new CPara("PageIndex", currPage.ToString()),
                    new CPara("NumberRowOfPage", NumberRowOfPage.ToString())
                },
                exAttribute
            );
            ServiceREF.GeneralLedgerService.CApplicationMessage message = service.CreateTransaction(InputValue);
            return message.Code;   
        }

    }
}