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
    public class CInwardDao : CDaoBase
    {
        public IList<CInward> GetInwardList(string pInputValue, ref COutputValue pOutput)
        {
            try
            {
                return CallFunctionWithList<CInward>(CSystemFunction.GetInwardList, pInputValue, ref pOutput);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("CItemsDao", ex.Message);
                return null;
            }
        }

        public CInward GetInward(string pInputValue)
        {
            try
            {
                return CallFunction<CInward>(CSystemFunction.GetInwardList, pInputValue);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("CItemsDao", ex.Message);
                return null;
            }
        }

        public CApplicationMessage UpdateInward(string pInputValue)
        {
            try
            {
                return CallFunction<CApplicationMessage>(CSystemFunction.UpdateInward, pInputValue);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("CItemsDao", ex.Message);
                return null;
            }
        }

        public IList<CInwardDetail> GetInwardDetailList(string pInputValue, ref COutputValue pOutput)
        {
            try
            {
                return CallFunctionWithList<CInwardDetail>(CSystemFunction.GetInwardDetailList, pInputValue, ref pOutput);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("CItemsDao", ex.Message);
                return null;
            }
        }

        public CInwardDetail GetInwardDetail(string pInputValue)
        {
            try
            {
                return CallFunction<CInwardDetail>(CSystemFunction.GetInwardDetailList, pInputValue);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("CItemsDao", ex.Message);
                return null;
            }
        }

        public CApplicationMessage UpdateInwardDetail(string pInputValue)
        {
            try
            {
                return CallFunction<CApplicationMessage>(CSystemFunction.UpdateInwardDetail, pInputValue);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("CItemsDao", ex.Message);
                return null;
            }
        }

        public CApplicationMessage PostInward(string pInputValue)
        {
            try
            {
                return CallFunction<CApplicationMessage>(CSystemFunction.PostInward, pInputValue);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("CItemsDao", ex.Message);
                return null;
            }
        }
        public CApplicationMessage UnPostInward(string pInputValue)
        {
            try
            {
                return CallFunction<CApplicationMessage>(CSystemFunction.UnPostInward, pInputValue);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("CItemsDao", ex.Message);
                return null;
            }
        }
    }
}
