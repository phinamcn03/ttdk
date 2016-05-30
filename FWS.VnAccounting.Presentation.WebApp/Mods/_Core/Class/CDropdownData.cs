using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Text;

using ServiceREF.CoreService;
namespace FWS.VnAccounting.Presentation.WebApp.Mods.Core
{
    public class CDropdownData
    {
        private ServiceREF.CoreService.CoreService core_service = new ServiceREF.CoreService.CoreService();
        CSession session = new CSession();
        public string GetTemplate(string funcPara)//GetObjectType
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
        public string GetObjectType(string funcPara)
        {
            string _inputValue = string.Format("<InputValue TableName=\"inv.Inward\" ColumnName=\"{0}\"/>", funcPara);
            CIntDefination[] lst = core_service.GetIntDefinationList(_inputValue);
            StringBuilder ret = new StringBuilder();
            ret.Append("[");
            foreach (CIntDefination cp in lst)
            {
                ret.Append("{");
                ret.AppendFormat("'id':'{0}',", cp.ID);
                ret.AppendFormat("'text':'{0}',", cp.Name);
                ret.AppendFormat("'value':'{0}'", cp.DataValue);
                ret.Append("}");
                if (cp != lst[lst.Length - 1])
                {
                    ret.Append(",");
                }
            }
            ret.Append("]");
            return ret.ToString();
        }//CurrencyType

        public string CurrencyType(string funcPara)
        {
            string _inputValue = string.Format("<InputValue UserID=\"{0}\" Session=\"{1}\"  />", session.UserID,session.Session);

            ServiceREF.Cash.CurrencyService objCurr = new ServiceREF.Cash.CurrencyService();
            ServiceREF.Cash.COutputValue pageinfo = new  ServiceREF.Cash.COutputValue();
            ServiceREF.Cash.CCurrency[] lst = objCurr.GetCurrencyList(_inputValue, ref pageinfo);
            StringBuilder ret = new StringBuilder();
            ret.Append("[");
            foreach (var cp in lst)
            {
                ret.Append("{");
                ret.AppendFormat("'ExchangeRate':'{0}',", cp.ExchangeRate);
                ret.AppendFormat("'text':'{0}',", cp.Code);
                ret.AppendFormat("'value':'{0}'", cp.ID);
                ret.Append("}");
                if (cp != lst[lst.Length - 1])
                {
                    ret.Append(",");
                }
            }
            ret.Append("]");
            return ret.ToString();
        }//

        public string GetNextRefNo(string pRefType)
        {
            pRefType = pRefType == "" ? "4" : pRefType;
            string InputValue = CXmlPara.CreatePara(new CPara[]{
                    new CPara("RefDate", DateTime.Now.ToString("yyyy-MM-dd")),
                    new CPara("RefType", pRefType)
                },
                ""
            );
            CRefNo refno = core_service.GetNextRefNo(InputValue);
            return CJson.SerializeObject(refno);
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
        public string GetTransaction(string funcPara)
        {
            StringBuilder ret = new StringBuilder();
            string InputValue = CXmlPara.CreatePara(funcPara);
            ServiceREF.GeneralLedgerService.GeneralLedgerService gl_service = new ServiceREF.GeneralLedgerService.GeneralLedgerService();
            ServiceREF.GeneralLedgerService.CTransaction item = gl_service.GetTransaction(funcPara);
            if (item != null)
            {
                DateTime date = DateTime.Now;
                if (item.RefDate != null)
                    date = (DateTime)item.RefDate;
                ret.AppendFormat("{0}|{1}|{2}|{3}|{4}|{5}|{6}|{7}|{8}|{9}|{10}\n",
                                                item.ID, item.RefNo, item.RefTypeName,
                                                date.ToString("yyyy-MM-dd"), item.PartnerName, item.Amount, item.PartnerID, item.RefID,
                                                item.IsPosted, item.IsCancel, item.IsBalance);
            }
            return ret.ToString();
        }//GetPersonList
        public string GetPersonList(string funcPara)
        {
            StringBuilder ret = new StringBuilder();

            ServiceREF.CoreService.CoreService service = new ServiceREF.CoreService.CoreService();

            string InputValue = CXmlPara.CreatePara(funcPara);

            ServiceREF.CoreService.COutputValue temp = new ServiceREF.CoreService.COutputValue();

            ServiceREF.CoreService.CPerson[] list = service.GetPersonList(funcPara, ref temp);

            foreach (var item in list)
            {
                if (item != null)
                {

                    if (item != null)
                        ret.AppendFormat("{0}|{1}|{2}\n",
                                                        item.Code, item.Name, item.ID);
                }
            }
            return ret.ToString();
        }//
    }
}