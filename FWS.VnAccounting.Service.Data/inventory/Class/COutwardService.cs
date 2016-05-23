using System;
using System.Collections.Generic;
using System.Web;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Inventory;
using FWS.VnAccounting.DataLayer.DataObjects.Inventory;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Core;

namespace FWS.VnAccounting.Service.Data.Inventory.Class
{
    public class COutwardService
    {
        #region Outward
        public List<COutward> GetOutwardList(string InputValue, ref COutputValue Output)
        {
            IList<COutward> list = new COutwardDao().GetOutwardList(InputValue, ref Output);
            return (List<COutward>)list;
        }
        public COutward GetOutward(string InputValue)
        {
            COutward list = new COutwardDao().GetOutward(InputValue);
            return list;
        }
        public CApplicationMessage UpdateOutward(string InputValue)
        {
            CApplicationMessage list = new COutwardDao().UpdateOutward(InputValue);
            return list;//<CItems>(list);
        }
        #endregion

        #region OutwardDetail
        public List<COutwardDetail> GetOutwardDetailList(string InputValue, ref COutputValue Output)
        {
            IList<COutwardDetail> list = new COutwardDao().GetOutwardDetailList(InputValue, ref Output);
            
            return (List<COutwardDetail>)list;
        }
        public COutwardDetail GetOutwardDetail(string InputValue)
        {
            COutwardDetail list = new COutwardDao().GetOutwardDetail(InputValue);
            return list;
        }
        public CApplicationMessage UpdateOutwardDetail(string InputValue)
        {
            CApplicationMessage list = new COutwardDao().UpdateOutwardDetail(InputValue);
            return list;//<CItems>(list);
        }
        public CApplicationMessage PostOutward(string InputValue)
        {
            CApplicationMessage list = new COutwardDao().PostOutward(InputValue);
            return list;//<CItems>(list);
        }

        public CApplicationMessage UnPostOutward(string InputValue)
        {
            CApplicationMessage list = new COutwardDao().UnPostOutward(InputValue);
            return list;//<CItems>(list);
        }
        #endregion
    }
}