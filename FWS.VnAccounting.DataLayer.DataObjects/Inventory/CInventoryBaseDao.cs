using System;
using System.Collections.Generic;
using System.Text;
using FWS.VnAccounting.DataLayer.DataObjects.Base;
using FWS.Framework.Log;
using FWS.VnAccounting.DataLayer.DataObjects.SQL;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Inventory;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Core;

namespace FWS.VnAccounting.DataLayer.DataObjects.Inventory
{
    public class CInventoryBaseDao: CDaoBase
    {
        public IList<CInventoryBase> GetInventoryBaseList(int fBase, string pInputValue, ref COutputValue pOutput)
        {
            try
            {
                return CallFunctionWithList<CInventoryBase>(fBase, pInputValue, ref pOutput);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL(string.Format("CInventoryBaseDao_{0}", fBase), ex.Message);
                return null;
            }
            
        }

        /* tam thoi ko co Base
        public IList<CInventoryBase> GetInventoryBaseList(string pInputValue, ref COutputValue pOutput)
        {
            return this.GetInventoryBaseList(CSystemFunction.GetInventoryBase, pInputValue, ref pOutput);            
        }
        

        public CInventoryBase GetInventoryBase(string pInputValue)
        {
            return CallFunction<CInventoryBase>(CSystemFunction.GetInventoryActiveIngredient, pInputValue);
        }
        */
        public CInventoryBase GetInventoryBase(int fBase, string pInputValue)
        {
            try
            {
                return CallFunction<CInventoryBase>(fBase, pInputValue);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL(string.Format("CInventoryBaseDao_{0}", fBase), ex.Message);
                return null;
            }
        }
        /*
        public CApplicationMessage UpdateInventoryBase(string pInputValue)
        {
            return UpdateInventoryBase(CSystemFunction.UpdateInventoryBase, pInputValue);
        }*/

        public CApplicationMessage UpdateInventoryBase(int fBase, string pInputValue)
        {
            try
            {
                return CallFunction<CApplicationMessage>(fBase, pInputValue);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL(string.Format("CInventoryBaseDao_{0}",fBase), ex.Message);
                return null;
            }
        }
    }
}
