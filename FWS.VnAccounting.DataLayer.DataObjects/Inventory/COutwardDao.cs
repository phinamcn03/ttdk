using System;
using System.Collections.Generic;
using System.Text;
using FWS.VnAccounting.DataLayer.DataObjects.Base;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Inventory;
using FWS.Framework.Log;
using FWS.VnAccounting.DataLayer.DataObjects.SQL;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Core;

namespace FWS.VnAccounting.DataLayer.DataObjects.Inventory
{
    public class COutwardDao : CDaoBase
    {
        public IList<COutward> GetOutwardList(string pInputValue, ref COutputValue pOutput)
        {
            try
            {
                return CallFunctionWithList<COutward>(CSystemFunction.GetOutwardList, pInputValue, ref pOutput);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("CItemsDao", ex.Message);
                return null;
            }
        }

        public COutward GetOutward(string pInputValue)
        {
            try
            {
                return CallFunction<COutward>(CSystemFunction.GetOutwardList, pInputValue);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("CItemsDao", ex.Message);
                return null;
            }
        }

        public CApplicationMessage UpdateOutward(string pInputValue)
        {
            try
            {
                return CallFunction<CApplicationMessage>(CSystemFunction.UpdateOutward, pInputValue);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("CItemsDao", ex.Message);
                return null;
            }
        }

        public IList<COutwardDetail> GetOutwardDetailList(string pInputValue, ref COutputValue pOutput)
        {
            try
            {
                return CallFunctionWithList<COutwardDetail>(CSystemFunction.GetOutwardDetailList, pInputValue, ref pOutput);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("CItemsDao", ex.Message);
                return null;
            }
        }

        public COutwardDetail GetOutwardDetail(string pInputValue)
        {
            try
            {
                return CallFunction<COutwardDetail>(CSystemFunction.GetOutwardDetailList, pInputValue);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("CItemsDao", ex.Message);
                return null;
            }
        }

        public CApplicationMessage UpdateOutwardDetail(string pInputValue)
        {
            try
            {
                return CallFunction<CApplicationMessage>(CSystemFunction.UpdateOutwardDetail, pInputValue);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("CItemsDao", ex.Message);
                return null;
            }
        }

        public CApplicationMessage PostOutward(string pInputValue)
        {
            try
            {
                return CallFunction<CApplicationMessage>(CSystemFunction.PostOutward, pInputValue);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("CItemsDao", ex.Message);
                return null;
            }
        }
        public CApplicationMessage UnPostOutward(string pInputValue)
        {
            try
            {
                return CallFunction<CApplicationMessage>(CSystemFunction.UnPostOutward, pInputValue);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("CItemsDao", ex.Message);
                return null;
            }
        }
    }

}
