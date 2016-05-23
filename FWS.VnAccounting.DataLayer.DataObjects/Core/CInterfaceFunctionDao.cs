using System;
using System.Collections.Generic;
using System.Text;
using FWS.VnAccounting.DataLayer.DataObjects.Base;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Core;
using FWS.VnAccounting.DataLayer.DataObjects.SQL;
using FWS.Framework.Log;
using System.Diagnostics;
namespace FWS.VnAccounting.DataLayer.DataObjects.Core
{
    public class CInterfaceFunctionDao:CDaoBase
    {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="pInputValue"><InputValue UserID="1"></param>
        /// <returns></returns>
        public IList<CInterfaceFunction> GetInterfaceFunction(string pInputValue)
        {
            try
            {
                return CallFunctionWithList<CInterfaceFunction>(CSystemFunction.GetInterfaceFunctionByUserID, pInputValue);
            }
            catch (Exception ex)
            {
                string stack = GetStackTrace(new StackTrace());
                CLogManager.WriteDAL("CInterfaceFunctionDao",stack + ":::"+ ex.Message);
                return null;
            }
        }

        public IList<CInterfaceFunction> GetInterfaceFunctionByGroupID(string pInputValue)
        {
            try
            {
                return CallFunctionWithList<CInterfaceFunction>(CSystemFunction.GetInterfaceFunctionByGroupID, pInputValue);
            }
            catch (Exception ex)
            {
                string stack = GetStackTrace(new StackTrace());
                CLogManager.WriteDAL("CInterfaceFunctionDao", stack + ":::" + ex.Message);
                return null;
            }
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="pInputValue"><InputValue UserID="1" ParentID="1"></param>
        /// <returns></returns>
        public IList<CInterfaceFunction> GetInterfaceFunctionByParentID(string pInputValue)
        {
            try
            {
                return CallFunctionWithList<CInterfaceFunction>(CSystemFunction.GetInterfaceFunctionByParentID, pInputValue);
            }
            catch (Exception ex)
            {
                string stack = GetStackTrace(new StackTrace());
                CLogManager.WriteDAL("CInterfaceFunctionDao", stack + ":::" + ex.Message);
                return null;
            }
        }

        public CApplicationMessage UpdateUserGroupInterfaceFunction(string pInputValue)
        {
            try
            {
                return CallFunction<CApplicationMessage>(CSystemFunction.UpdateUserGroupInterfaceFunction, pInputValue);
            }
            catch (Exception ex)
            {
                string stack = GetStackTrace(new StackTrace());
                CLogManager.WriteDAL("CInterfaceFunctionDao", stack + ":::" + ex.Message);
                return null;
            }
        }
    }
}
