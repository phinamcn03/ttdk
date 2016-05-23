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
    public class CTransferDao : CDaoBase
    {
        public IList<CTransactionsStock> GetTransferList(string pInputValue, ref COutputValue pOutput)
        {
            try
            {
                return CallFunctionWithList<CTransactionsStock>(CSystemFunction.GetTransfer, pInputValue, ref pOutput);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("GetTransferList", ex.Message);
                return null;
            }
        }
        public IList<CTransactionsStockDetails> GetTransferDetails(string pInputValue, ref COutputValue pOutput)
        {
            try
            {
                return CallFunctionWithList<CTransactionsStockDetails>(CSystemFunction.GetTransferStockDetail, pInputValue, ref pOutput);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("GetTransferDetails", ex.Message);
                return null;
            }
        }
        public CTransactionsStock GetTransfer(string pInputValue)
        {
            try
            {
                return CallFunction<CTransactionsStock>(CSystemFunction.GetTransfer, pInputValue);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("GetTransfer", ex.Message);
                return null;
            }
        }

        public CApplicationMessage UpdateTransfer(string pInputValue)
        {
            try
            {
                return CallFunction<CApplicationMessage>(CSystemFunction.UpdateTransferInventory, pInputValue);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("UpdateTransfer", ex.Message);
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
                CLogManager.WriteDAL("GetInwardDetailList", ex.Message);
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
                CLogManager.WriteDAL("GetInwardDetail", ex.Message);
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
                CLogManager.WriteDAL("UpdateInwardDetail", ex.Message);
                return null;
            }
        }
    }
}
