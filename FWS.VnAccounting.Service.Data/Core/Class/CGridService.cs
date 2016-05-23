using System;
using System.Collections.Generic;
using System.Web;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Core;
using FWS.VnAccounting.DataLayer.DataObjects.Core;

namespace FWS.VnAccounting.Service.Data.Core.Class
{
    public class CGridService
    {
        public List<CGridConfig> GetGridConfig(string InputValue)
        {
            IList<CGridConfig> list = new CGridDao().GetGridConfig(InputValue);
            return (List<CGridConfig>)list;

        }

        public string GetGridConfigInString(string InputValue)
        {
            IList<CGridConfig> list = new CGridDao().GetGridConfig(InputValue);
            return CGridConfig.ToCSV<CGridConfig>(list);

        }
        public List<CGridColumnConfig> GetGridConfigColumn(string InputValue)
        {
            IList<CGridColumnConfig> list = new CGridDao().GetGridConfigColumn(InputValue);
            return (List<CGridColumnConfig>)list;

        }
        public string GetGridConfigColumnInString(string InputValue)
        {
            IList<CGridColumnConfig> list = new CGridDao().GetGridConfigColumn(InputValue);
            return CGridColumnConfig.ToCSV<CGridColumnConfig>(list);

        }

        public string GetGridData(string pInputValue)
        {
            CDataTable ctbl = new CGridDao().GetGridData(pInputValue);
            return ctbl.ToSCV();
        }
    }
}