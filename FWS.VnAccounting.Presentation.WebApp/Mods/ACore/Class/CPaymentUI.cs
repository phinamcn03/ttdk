using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using FWS.VnAccounting.Presentation.WebApp.Mods.Core;
using FWS.VnAccounting.Presentation.WebApp.Mods.Global;
using System.Text;

namespace FWS.VnAccounting.Presentation.WebApp.Mods.ACore.Class
{
    public class CPaymentUI
    {
        private ServiceREF.GeneralLedgerService.GeneralLedgerService gl_service = new ServiceREF.GeneralLedgerService.GeneralLedgerService();
        private ServiceREF.CoreService.CoreService core_service = new ServiceREF.CoreService.CoreService();

        public string GetGrid(int gridID, int currPage, int NumberRowOfPage, string exAttribute)
        {
            string InputValue = CXmlPara.CreatePara(new CPara[]{
                    new CPara("PageIndex", currPage.ToString()),
                    new CPara("NumberRowOfPage", NumberRowOfPage.ToString())
                },
                exAttribute
            );
            ServiceREF.GeneralLedgerService.COutputValue outputValue = new ServiceREF.GeneralLedgerService.COutputValue();
            ServiceREF.GeneralLedgerService.CTransaction[] list = gl_service.GetTransactionList(InputValue, ref outputValue);
            return CGrid.ToJsonForHandle<ServiceREF.GeneralLedgerService.CTransaction>(0, gridID, list, currPage, outputValue.TotalPage, outputValue.TotalRow);
        }
        public string UpdateTransaction(string exAttribute)
        {
            string _inputValue = CXmlPara.CreatePara(exAttribute);
            ServiceREF.GeneralLedgerService.CApplicationMessage message = gl_service.UpdateTransaction(_inputValue);
            return CJson.SerializeObject(message);
        }
        public string GetTemplate(string funcPara)
        {
            StringBuilder ret = new StringBuilder();
            string InputValue = CXmlPara.CreatePara(funcPara);

            ServiceREF.CoreService.CControl[] lst = core_service.GetControls(InputValue);
            ret.Append("[");
            foreach (ServiceREF.CoreService.CControl cp in lst)
            {
                ret.Append("{");
                ret.AppendFormat("'id':'{0}',", cp.ID);
                ret.AppendFormat("'text':'{0}',", cp.Caption);
                ret.AppendFormat("'value':'{0}'", cp.ID);
                ret.Append("}");
                if (cp != lst[lst.Length - 1])
                {
                    ret.Append(",");
                }
            }
            ret.Append("]");
            return ret.ToString();
        }
        public string GetRefType(string funcPara)
        {
            StringBuilder ret = new StringBuilder();
            string InputValue = CXmlPara.CreatePara(funcPara);
            ServiceREF.GeneralLedgerService.COutputValue outputValue = new ServiceREF.GeneralLedgerService.COutputValue();
            ServiceREF.GeneralLedgerService.CRefType[] lst = gl_service.GetRefTypeList(InputValue, ref outputValue);
            ret.Append("[");
            foreach (ServiceREF.GeneralLedgerService.CRefType cp in lst)
            {
                ret.Append("{");
                ret.AppendFormat("'id':'{0}',", cp.ID);
                ret.AppendFormat("'text':'{0}',", cp.Name);
                ret.AppendFormat("'value':'{0}'", cp.ID);
                ret.Append("}");
                if (cp != lst[lst.Length - 1])
                {
                    ret.Append(",");
                }
            }
            ret.Append("]");
            return ret.ToString();
        }
    }
}