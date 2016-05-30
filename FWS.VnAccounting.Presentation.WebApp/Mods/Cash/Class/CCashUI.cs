using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ServiceREF.GeneralLedgerService;
using FWS.VnAccounting.Presentation.WebApp.Mods.Core;
using FWS.VnAccounting.Presentation.WebApp.Mods.Global;

namespace FWS.VnAccounting.Presentation.WebApp.Mods.Cash
{
    public class CCashUI
    {
        GeneralLedgerService GLS = new GeneralLedgerService();
        public string UpdateTransaction(string input)
        {
            CApplicationMessage message = GLS.UpdateTransaction(input);
            return CJson.SerializeObject(message);
        }
        public string GetGridInvoice(int gridID, int currPage, int NumberRowOfPage, string exAttribute)
        {
            string InputValue = CXmlPara.CreatePara(new CPara[]{
                    new CPara("PageIndex", currPage.ToString()),
                    new CPara("NumberRowOfPage", NumberRowOfPage.ToString())
                },
                exAttribute
            );
            ServiceREF.GeneralLedgerService.COutputValue outputValue = new ServiceREF.GeneralLedgerService.COutputValue();
            ServiceREF.GeneralLedgerService.CTransaction[] list = GLS.GetTransactionList(InputValue, ref outputValue);
            return CGrid.ToJsonForHandle<ServiceREF.GeneralLedgerService.CTransaction>(0, gridID, list, currPage, outputValue.TotalPage, outputValue.TotalRow);
        }
        public string GetGridTransaction(int gridID, int currPage, int NumberRowOfPage, string exAttribute)
        {
            string InputValue = CXmlPara.CreatePara(new CPara[]{
                    new CPara("PageIndex", currPage.ToString()),
                    new CPara("NumberRowOfPage", NumberRowOfPage.ToString())
                },
                exAttribute
            );
            ServiceREF.GeneralLedgerService.COutputValue outputValue = new ServiceREF.GeneralLedgerService.COutputValue();
            ServiceREF.GeneralLedgerService.CTransactionDetail[] list = GLS.GetTransactionDetail(InputValue);
            return CGrid.ToJsonForHandle<ServiceREF.GeneralLedgerService.CTransactionDetail>(0, gridID, list, currPage, outputValue.TotalPage, outputValue.TotalRow);
        }
        public string GetTransaction(string exAttribute)
        {
            string InputValue = CXmlPara.CreatePara(exAttribute);
            ServiceREF.GeneralLedgerService.CTransaction item = GLS.GetTransaction(InputValue);
            return CJson.SerializeObject(item);
        }
    }
}