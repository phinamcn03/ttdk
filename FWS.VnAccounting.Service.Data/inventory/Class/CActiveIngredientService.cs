using System;
using System.Collections.Generic;
using System.Web;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Inventory;
using FWS.VnAccounting.DataLayer.DataObjects.Inventory;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Core;
using FWS.VnAccounting.DataLayer.DataObjects.SQL;

namespace FWS.VnAccounting.Service.Data.Inventory.Class
{
    public class CActiveIngredientService
    {
        public string GetInventoryBaseListInCSV(string InputValue, ref string PageInfo)
        {            
            COutputValue pInfo = new COutputValue();
            IList<CInventoryBase> list = new CInventoryBaseDao().GetInventoryBaseList(CSystemFunction.GetInventoryActiveIngredient, InputValue, ref pInfo);
            PageInfo = pInfo.ToCSV();
            return CInventoryBase.ToCSV<CInventoryBase>(list);
        }
        public List<CActiveIngredient> GetInventoryBaseList(string InputValue, ref COutputValue Output)
        {
            IList<CInventoryBase> list = new CInventoryBaseDao().GetInventoryBaseList(CSystemFunction.GetInventoryActiveIngredient, InputValue, ref Output);
            List<CActiveIngredient> listRet = new List<CActiveIngredient>(list.Count);
            foreach (CInventoryBase inv in list)
            {
                CActiveIngredient obj = new CActiveIngredient(inv);
                listRet.Add(obj);
            }
            
            return listRet;
        }
       
        public CActiveIngredient GetInventoryBase(string InputValue)
        {
            CInventoryBase obj = new CInventoryBaseDao().GetInventoryBase(CSystemFunction.GetInventoryActiveIngredient, InputValue);

            return new CActiveIngredient(obj);
        }
        public CApplicationMessage UpdateInventoryBase(string InputValue)
        {
            CApplicationMessage list = new CInventoryBaseDao().UpdateInventoryBase(CSystemFunction.GetInventoryActiveIngredient, InputValue);
            return list;//<CItems>(list);
        }
    }
}