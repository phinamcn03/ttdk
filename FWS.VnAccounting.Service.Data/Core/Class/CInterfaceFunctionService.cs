using System;
using System.Collections.Generic;
using System.Web;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Core;
using FWS.VnAccounting.DataLayer.DataObjects.Core;

namespace FWS.VnAccounting.Service.Data.Core.Class
{
    public class CInterfaceFunctionService
    {
        public string GetInterfaceFunctionInCSV(string InputValue)
        {
            IList<CInterfaceFunction> list = new CInterfaceFunctionDao().GetInterfaceFunction(InputValue);
            return CInterfaceFunction.ToCSV<CInterfaceFunction>(list);

        }

        public string GetInterfaceFunctionInJson(string InputValue)
        {
            IList<CInterfaceFunction> list = new CInterfaceFunctionDao().GetInterfaceFunction(InputValue);
            return CInterfaceFunction.ToJson<CInterfaceFunction>(list);

        }

        public List<CInterfaceFunction> GetInterfaceFunction(string InputValue)
        {
            IList<CInterfaceFunction> list = new CInterfaceFunctionDao().GetInterfaceFunction(InputValue);
            return (List<CInterfaceFunction>)(list);

        }

        public List<CInterfaceFunction> GetInterfaceFunctionByGroupID(string InputValue)
        {
            IList<CInterfaceFunction> list = new CInterfaceFunctionDao().GetInterfaceFunctionByGroupID(InputValue);
            return (List<CInterfaceFunction>)(list);

        }
        

        public string GetInterfaceFunctionByParentIDInCSV(string InputValue)
        {
            IList<CInterfaceFunction> list = new CInterfaceFunctionDao().GetInterfaceFunctionByParentID(InputValue);
            return CInterfaceFunction.ToCSV<CInterfaceFunction>(list);

        }

        public string GetInterfaceFunctionByParentIDInJson(string InputValue)
        {
            IList<CInterfaceFunction> list = new CInterfaceFunctionDao().GetInterfaceFunctionByParentID(InputValue);
            return CInterfaceFunction.ToJson<CInterfaceFunction>(list);

        }

        public List<CInterfaceFunction> GetInterfaceFunctionByParentID(string InputValue)
        {
            IList<CInterfaceFunction> list = new CInterfaceFunctionDao().GetInterfaceFunctionByParentID(InputValue);
            return (List<CInterfaceFunction>)(list);

        }

        public CApplicationMessage UpdateUserGroupInterfaceFunction(string InputValue)
        {
            return new CInterfaceFunctionDao().UpdateUserGroupInterfaceFunction(InputValue);           

        }
    }
}