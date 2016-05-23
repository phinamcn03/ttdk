using System;
using System.Collections.Generic;
using System.Web;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Inventory;
using FWS.VnAccounting.DataLayer.DataObjects.Inventory;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Core;

namespace FWS.VnAccounting.Service.Data.Inventory.Class
{
    public class CInwardService
    {
        #region Inward
        public List<CInward> GetInwardList(string InputValue, ref COutputValue Output)
        {
            IList<CInward> list = new CInwardDao().GetInwardList(InputValue, ref Output);
            return (List<CInward>)list;
        }
        public CInward GetInward(string InputValue)
        {
            CInward list = new CInwardDao().GetInward(InputValue);
            return list;
        }
        public CApplicationMessage UpdateInward(string InputValue)
        {
            CApplicationMessage list = new CInwardDao().UpdateInward(InputValue);
            return list;//<CItems>(list);
        }

        public CApplicationMessage PostInward(string InputValue)
        {
            CApplicationMessage list = new CInwardDao().PostInward(InputValue);
            return list;//<CItems>(list);
        }

        public CApplicationMessage UnPostInward(string InputValue)
        {
            CApplicationMessage list = new CInwardDao().UnPostInward(InputValue);
            return list;//<CItems>(list);
        }
       
        #endregion

        #region InwardDetail
        public List<CInwardDetail> GetInwardDetailList(string InputValue, ref COutputValue Output)
        {
            IList<CInwardDetail> list = new CInwardDao().GetInwardDetailList(InputValue, ref Output);
            
            return (List<CInwardDetail>)list;
        }
        public CInwardDetail GetInwardDetail(string InputValue)
        {
            CInwardDetail list = new CInwardDao().GetInwardDetail(InputValue);
            return list;
        }
        public CApplicationMessage UpdateInwardDetail(string InputValue)
        {
            CApplicationMessage list = new CInwardDao().UpdateInwardDetail(InputValue);
            return list;//<CItems>(list);
        }
        #endregion
    }
}