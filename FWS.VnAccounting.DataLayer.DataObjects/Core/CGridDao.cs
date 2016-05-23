using System;
using System.Collections.Generic;
using System.Text;
using FWS.VnAccounting.DataLayer.DataObjects.Base;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Core;
using FWS.VnAccounting.DataLayer.DataObjects.SQL;
using FWS.Framework.Log;
using System.Data;

namespace FWS.VnAccounting.DataLayer.DataObjects.Core
{
    public class CGridDao:CDaoBase
    {
        public IList<CGridConfig> GetGridConfig(string pInputValue)
        {
            try
            {
                return CallFunctionWithList<CGridConfig>(CSystemFunction.GetConfigGrid, pInputValue);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("CApplicationDao", ex.Message);
                return null;
            }
        }
        public IList<CGridColumnConfig> GetGridConfigColumn(string pInputValue)
        {
            try
            {
                return CallFunctionWithList<CGridColumnConfig>(CSystemFunction.GetConfigGridColumn, pInputValue);
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("CApplicationDao", ex.Message);
                return null;
            }
        }

        public CDataTable GetGridData(string pInputValue)
        {
            try
            {
                CDataTable ctbl =new CDataTable();
                ctbl = CallFunctionWithDataTable(CSystemFunction.GetGridData, pInputValue);
                
                return ctbl;
            }
            catch (Exception ex)
            {
                CLogManager.WriteDAL("CApplicationDao", ex.Message);
                return null;
            }
        }
    }
}
