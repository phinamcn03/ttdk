using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ServiceREF.CoreService;
using FWS.VnAccounting.Presentation.WebApp.Mods.Core;

namespace FWS.VnAccounting.Presentation.WebApp.Mods.AP.Class
{
    public class PurchaseInvoiceUI
    {
        ServiceREF.GeneralLedgerService.GeneralLedgerService core_service = new ServiceREF.GeneralLedgerService.GeneralLedgerService();
        public string GetGrid(int currPage, int NumberRowOfPage, string exAttribute)
        {
            string InputValue = CXmlPara.CreatePara(new CPara[]{
                    new CPara("PageIndex", currPage.ToString()),
                    new CPara("NumberRowOfPage", NumberRowOfPage.ToString())
                },
                ""
            );
            
            //return CJson.SerializeObject(refno);
            return "";
        }
    }
}