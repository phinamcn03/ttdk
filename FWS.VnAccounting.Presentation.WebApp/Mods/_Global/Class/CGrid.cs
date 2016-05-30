using System;
using System.Collections.Generic;
using System.Web;
using System.Text;
using FWS.Framework.Log;

using System.Reflection;
using ServiceREF.GridService;
using FWS.VnAccounting.Presentation.WebApp.Mods.Core;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Core;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Base;
using Newtonsoft.Json.Converters;
namespace FWS.VnAccounting.Presentation.WebApp.Mods.Global
{
    public class CGrid_DEL
    {
        private static string strColNames = "";
        private static GridService service = new GridService();

        #region Grid Config control
        
        /// <summary>
        /// public function
        /// </summary>
        /// <param name="templateid"></param>
        /// <param name="languageId"></param>
        /// <param name="cModel"></param>
        /// <param name="cNames"></param>
        /// <param name="cOption"></param>
        /// <returns></returns>
        public static string CreateGridConfig(int userId, int gridId, int languageId, string cModel, string cNames, string cOption)
        {
            StringBuilder sb = new StringBuilder();
            string colModels = GetModelsConfig(userId, gridId, languageId);
            string gridConfig = GetGridConfig(userId, gridId);
            sb.Append("//Server Grid Config\n");
            sb.AppendFormat("var {0} = [\n", cModel);
            sb.Append(colModels);
            sb.Append("];\n");

            sb.AppendFormat("var {0} = [\n", cNames);
            sb.Append(strColNames);
            sb.Append("];\n");

            sb.AppendFormat("var {0} = ", cOption);
            sb.Append("{\n");
            sb.Append(gridConfig);
            sb.Append("};\n");

            return sb.ToString();
        }

        public static CGridColumnConfig[] GetColumnNameGrid(int userId, int gridId)
        {
            CGridColumnConfig[] ret = null;
            try
            {
                string inputValue = string.Format("<InputValue UserID='{0}' GridID='{1}' />", userId, gridId);
                ret = service.GetGridConfigColumn(inputValue);
            }
            catch (Exception ex)
            {
                CLogManager.WritePL("PMSA.iMarkets.Presentation.WebApp.Mods.PriceBoard.Class.GetModelsConfig", ex.Message);
            }
            return ret;
        }

        private static string GetModelsConfig(int userId, int gridId, int languageId)
        {
            string ret = "";
            try
            {
                string inputValue = string.Format("<InputValue UserID='{0}' GridID='{1}' />", userId, gridId);
                CGridColumnConfig[] lst = service.GetGridConfigColumn(inputValue);
                strColNames = "";
                foreach (CGridColumnConfig cfg in lst)
                {
                    ret += cfg.ToString();
                    strColNames += "'" + cfg.Heading + "'";
                    if (cfg != lst[lst.Length - 1])
                    {
                        ret += ",\n";
                        strColNames += ",";
                    }
                }
            }
            catch (Exception ex)
            {
                CLogManager.WritePL("PMSA.iMarkets.Presentation.WebApp.Mods.PriceBoard.Class.GetModelsConfig", ex.Message);
            }
            return ret;
        }
        
        /// <summary>
        /// public function
        /// </summary>
        /// <param name="templateid"></param>
        /// <param name="language"></param>
        /// <returns></returns>
        private static string GetGridConfig(int userId, int gridId)
        {
            string ret = "";
            try
            {
                string inputValue = string.Format("<InputValue UserID='{0}' GridID='{1}' />", userId.ToString(), gridId.ToString());
                CGridConfig[] lst = service.GetGridConfig(inputValue);
                foreach (CGridConfig cfgtable in lst)
                {
                    ret += cfgtable.ToString();
                }
            }
            catch (Exception ex)
            {
                CLogManager.WritePL("PMSA.iMarkets.Presentation.WebApp.Mods.PriceBoard.Class.GetGridConfig", ex.Message);
            }
            return ret;
        }

        public static string ToJsonForHandle<T>(int userId, int gridId, IList<T> list, int currentPage, int numPage, int totalRow) where T : new()   
        {
            CGridColumnConfig[] grid = CGrid.GetColumnNameGrid(userId, gridId);
            StringBuilder strRet = new StringBuilder();
            strRet.AppendFormat("{{\"currpage\":\"{0}\",\"totalpages\":\"{1}\",\"totalrecords\":\"{2}\",\"invdata\":[", currentPage, numPage, totalRow);
            for (int j = 0; j < list.Count; j++)
            {
                string strObj = "";
                for (int i = 0; i < grid.Length; i++)
                {
                    string modelName = grid[i].Name;
                    string value = "";
                    PropertyInfo propertyInfo = list[j].GetType().GetProperty(grid[i].DataMappingName);
                    if (propertyInfo != null && propertyInfo.GetValue(list[j], null) != null)
                    {
                        /*if (list[j][grid[i].DataMappingName].GetType() == DateTime.Now.GetType())
                        {
                            value = "\"" + FormatDate((DateTime)list[j][grid[i].DataMappingName], "yyyy-MM-dd HH:mm:ss") + "\"";
                        }
                        else
                        {*/
                        value = Newtonsoft.Json.JsonConvert.SerializeObject(propertyInfo.GetValue(list[j], null), new IsoDateTimeConverter());
                        //}
                    }
                    else
                    {
                        value = "\"\"";
                    }
                    string strFormatHandle = "\"{0}\":{1}";
                    strObj += string.Format(strFormatHandle, modelName, value);
                    if (i < grid.Length - 1)
                        strObj += ",";
                }
                strRet.Append("{" + strObj + "}");
                if (j < list.Count - 1)
                    strRet.Append(",");
            }
            strRet.Append("]}");
            return strRet.ToString();
        }
        #endregion
    }
}