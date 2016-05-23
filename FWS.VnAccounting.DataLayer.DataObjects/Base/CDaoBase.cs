using System;
using System.Collections.Generic;
using System.Text;
using System.Data;
using System.Data.SqlClient;
using FWS.Framework.Database;
using System.Diagnostics;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Core;
using FWS.Framework.Log;

namespace FWS.VnAccounting.DataLayer.DataObjects.Base
{
    public class CDaoBase
    {
        protected static string sConnectionString = "Data Source=(local);Initial Catalog=vtnt_Asset;MultipleActiveResultSets=True;Max Pool Size=500;User ID=vtnt_asset;Password=vtnt@12;Connection Timeout=900";
        //protected static string sConnectionString = "Data Source=112.213.89.158;Initial Catalog=vtnt_wh;MultipleActiveResultSets=True;Max Pool Size=500;User ID=vtnt_wh;Password=abc@123;Connection Timeout=900";
        protected SqlConnection conn = null;
        protected SqlCommand command;
        protected SqlDataAdapter adapter;
        private const string CALLFUNCTIONSTORENAME = "core.usp_SYS_VRF_CallFunction";
        private const string CALLFUNCTIONSTORENAMEV2 = "vcore.usp_SYS_VRF_CallFunctionV2";
        private int ConnectionTimeout = 1200;
        public CDaoBase()
        {
            sConnectionString = System.Configuration.ConfigurationManager.AppSettings["ConnectionString"];

            conn = new SqlConnection(sConnectionString);
            //conn.ConnectionTimeout = 900;
        }

        /// <summary>
        /// Open Sql Connection
        /// </summary>
        private void OpenConnection()
        {
            
            if (conn == null) conn = new SqlConnection(sConnectionString);
            if (conn.State == ConnectionState.Closed)
            {
                conn.Open();
            }
           
        }

        /// <summary>
        /// Close Sql Connection
        /// </summary>
        private void CloseConnection()
        {
            if (conn == null) conn = new SqlConnection(sConnectionString);
            if (conn.State != ConnectionState.Closed)
            {
                conn.Close();
            }
        }
        /// <summary>
        /// Excecute store by FunctionID
        /// </summary>
        /// <param name="functionID"></param>
        /// <param name="inputValue"></param>
        /// <returns></returns>
        protected DataSet CallFunction(int functionID, string inputValue)
        {
            try
            {
                command = new SqlCommand(CALLFUNCTIONSTORENAME,conn);
                command.CommandType = CommandType.StoredProcedure;
                command.Parameters.Clear();
                command.Parameters.AddWithValue("@InputValue", inputValue);
                command.Parameters.AddWithValue("@FunctionID", functionID);
                command.CommandTimeout = ConnectionTimeout;

                adapter = new SqlDataAdapter(command);
                DataSet ds = new DataSet();
                adapter.Fill(ds);
                return ds;
            }
            catch (Exception ex)
            {
                string stack = GetStackTrace(new StackTrace());
                FWS.Framework.Log.CLogManager.WriteDAL("CallFunction",stack + "::::" + ex.Message);
                throw ex;
            }
        }
        protected CDataTable CallFunctionWithDataTable(int functionID, string inputValue)
        {
            try
            {
                command = new SqlCommand(CALLFUNCTIONSTORENAME, conn);
                command.CommandType = CommandType.StoredProcedure;
                command.Parameters.Clear();
                command.Parameters.AddWithValue("@InputValue", inputValue);
                command.Parameters.AddWithValue("@FunctionID", functionID);
                command.CommandTimeout = ConnectionTimeout;

                adapter = new SqlDataAdapter(command);
                CDataTable ds = new CDataTable();
                adapter.Fill(ds);
                return ds;
            }
            catch (Exception ex)
            {
                string stack = GetStackTrace(new StackTrace());
                FWS.Framework.Log.CLogManager.WriteDAL("CallFunction", stack + "::::" + ex.Message);
                throw ex;
            }
        }
        protected IList<T> CallFunctionWithList<T>(int functionID, string inputValue) where T:new()
        {
            try
            {
                DataSet ds = CallFunction(functionID, inputValue);
                //List<T> list = new List<T>();
                if (ds == null) return null;
                if (ds.Tables.Count == 0) return null;
                return CDb.MapList<T>(ds.Tables[0]);
            }
            catch (Exception ex)
            {
            }
            return null;
        }
        protected IList<T> CallFunctionWithList<T>(int functionID, string inputValue,ref COutputValue output) where T : new()
        {

            try
            {
                DataSet ds = CallFunction(functionID, inputValue);
                //List<T> list = new List<T>();
                if (ds == null) return null;
                if (ds.Tables.Count == 0) return null;

                IList<T> list = CDb.MapList<T>(ds.Tables[0]);
                if (ds.Tables.Count > 1)
                    output = CDb.Map<COutputValue>(ds.Tables[1]);

                return list;
            }
            catch (Exception ex)
            {
                output = new COutputValue() { Code = "SYSTEM_ERROR", Name = "Error", Description = ex.Message };
            }
            return null;
        }
        protected T CallFunction<T>(int functionID, string inputValue) where T : new()
        {
            try
            {
                DataSet ds = CallFunction(functionID, inputValue);
                //List<T> list = new List<T>();
                if (ds == null) return default(T);
                if (ds.Tables.Count == 0) return default(T);

                return CDb.Map<T>(ds.Tables[0]);
            }
            catch (Exception ex)
            {
                CLogManager.WritePL("CallFunction", ex.Message + " " + ex.StackTrace);
                if (typeof(T) ==typeof( CApplicationMessage))
                {
                    return CDb.Map<T>("<Message Code=\"SYSTEM_ERROR\" Name = \"Unknow Error\" Result=\"0\" Description = \""+ex.Message+"\" />");
                    //return (T)new CApplicationMessage() { Code = "SYSTEM_ERROR", Name = "Unknow Error", Description = ex.Message };
                }
            }
            return default(T);
        }

        protected string GetStackTrace(StackTrace trace)
        {
            string stack = "";
            for (int i = trace.FrameCount-1; i >= 0; i--)
            {
                string methodName = trace.GetFrame(i).GetMethod().Name;
                string moduleName = trace.GetFrame(i).GetMethod().ReflectedType.Name;
                stack = stack + "/" + moduleName + "." + methodName;
            }
            return stack;
        }
         
        /// <summary>
        /// Excecute store by FunctionID
        /// Ham tra ve cau truc gom 1 hoac nhieu datatable
        /// DataTable cuoi luon la mot ApplicationMessage
        /// Khi tra ve tren giao dien thi dua table ApplicationMessage len dau tien
        /// 
        /// Data1                           ApplicationMessage
        /// Data2                   ===>    Data1
        /// ApplicationMessage              Data2
        /// 
        /// Nguyen nhan: Tren giao dien yeu can table ApplicationMessage la table dau tien
        /// Con duoi database thi phai tra ve o cuoi 
        /// do khong handle duoc ket qua tra ve cua cac store
        /// </summary>
        /// <param name="functionID"></param>
        /// <param name="inputValue"></param>
        /// <returns></returns>
        protected DataSet CallFunctionV2(int functionID, string ClientKey, string inputValue)
        {
            try
            {
                command = new SqlCommand(CALLFUNCTIONSTORENAMEV2, conn);
                command.CommandType = CommandType.StoredProcedure;
                command.Parameters.Clear();
                command.Parameters.AddWithValue("@InputValue", inputValue);
                command.Parameters.AddWithValue("@ClientKey", ClientKey);
                command.Parameters.AddWithValue("@FunctionID", functionID);
                command.CommandTimeout = ConnectionTimeout;

                adapter = new SqlDataAdapter(command);
                DataSet ds = new DataSet();
                adapter.Fill(ds);
                //Neu ket qua chi co 1 table hoac khong co thi khong xu ly
                if (ds == null || ds.Tables.Count < 2) return ds;

                //Neu ket qua co tu 2 table tro len thi dua table cuoi len thanh table dau tien
                //DataTable tbl = ds.Tables[ds.Tables.Count - 1];
                //ds.Tables.Remove(tbl);

                return ds;
            }
            catch (Exception ex)
            {
                string stack = GetStackTrace(new StackTrace());
                //FWS.Framework.Log.CLogManager.WriteDAL("CallFunction", stack + "::::" + ex.Message);
                throw ex;
            }
        }
    }
}
