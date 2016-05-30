using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using FWS.VnAccounting.Presentation.WebApp.Mods.Global;
using FWS.Framework.Log;
using System.Text;

namespace FWS.VnAccounting.Presentation.WebApp.Mods.Core.Class
{
    public class CEmployeeDepartmentUI
    {
        private static ServiceREF.CoreService.CoreService core_service = new ServiceREF.CoreService.CoreService();
        public static string GetPersonRole(string exAttribute)
        {
            string InputValue = CXmlPara.CreatePara(exAttribute);
            ServiceREF.CoreService.CPersonRole item = core_service.GetPersonRole(InputValue);
            return CJson.SerializeObject(item);
        }

        public static string Update(string exAttribute)
        {
            string inputValue = CXmlPara.CreatePara(exAttribute);
            ServiceREF.CoreService.CApplicationMessage message = core_service.UpdatePersonRole(inputValue);
            StringBuilder ret = new StringBuilder();
            try
            {
                ret.Append("{");
                ret.AppendFormat("IsSuccess:'{0}',\n", message.IsSuccessfull);
                ret.AppendFormat("Code:'{0}',\n", message.Code);
                ret.AppendFormat("Name:'{0}',\n", message.Name);
                ret.AppendFormat("Result:'{0}',\n", message.Result);
                ret.AppendFormat("Description:'{0}'\n", message.Description);
                ret.Append("}");
            }
            catch (Exception ex)
            {
                CLogManager.Write("CEmployeeDepartmentUI:Update", ex.ToString(), "Account");
            }
            return ret.ToString();
        }

        public static string LoadData(string pInputValue)
        {
            string inputValue = string.Format(" ParentID=\"{0}\" ", pInputValue);
            return LoadTreeData(inputValue);
        }
        private static string LoadTreeData(string exAttribute)
        {
            string inputValue = CXmlPara.CreatePara(new CPara[] { new CPara("FilterCode", "Employee") }, exAttribute);

            ServiceREF.CoreService.COutputValue outputValue = new ServiceREF.CoreService.COutputValue();
            ServiceREF.CoreService.CPersonRole[] list = core_service.GetPersonRoleList(inputValue, ref outputValue);
            StringBuilder ret = new StringBuilder();
            if (list != null && list.Length > 0)
            {
                ret.Append("[");
                foreach (var item in list)
                {
                    string state = "open";
                    if (item.ChildCount != 0)
                        state = "closed";
                    else
                        state = "open";
                    ret.Append("{\n");
                    ret.AppendFormat("'id':'{0}',\n", item.ID);
                    ret.AppendFormat("'text':'{0}',\n", item.Code + " - " + item.Name);
                    ret.AppendFormat("'state':'{0}',\n", state);
                    ret.Append("'attributes':{");
                    ret.AppendFormat("'url':'{0}',", "../Mods/Core/Service/EmployeeDepartment.ashx?inputValue=" + item.ID);
                    ret.AppendFormat("'isLoad':'{0}'", 1);
                    ret.Append("}\n");
                    ret.Append("}");
                    if (item != list[list.Length - 1])
                    {
                        ret.Append(",\n");
                    }
                }
                ret.Append("]");
            }
            string jsonReturn = "";
            if (ret.Length > 0)
            {
                jsonReturn = ret.ToString().Replace("'", "\"");
            }
            return jsonReturn;
        }

        public static string LoadGrid(int pType, string pInputValue, int pLevel)
        {
            string inputValue = "";
            int parentId = 0;
            if (pType == 1)
            {
                inputValue = string.Format(" ParentID=\"{0}\" ", pInputValue);
                parentId = int.Parse(pInputValue);
            }
            else
                inputValue = pInputValue;
            return LoadTreeGrid(inputValue, pLevel, parentId);
        }

        private static string LoadTreeGrid(string exAttribute, int pLevel, int pParentId)
        {
            string inputValue = CXmlPara.CreatePara(new CPara[] { new CPara("FilterCode", "Employee") }, exAttribute);

            ServiceREF.CoreService.COutputValue outputValue = new ServiceREF.CoreService.COutputValue();
            ServiceREF.CoreService.CPersonRole[] list = core_service.GetPersonRoleList(inputValue, ref outputValue);

            StringBuilder ret = new StringBuilder();
            try
            {
                string format = "\"ID\":\"{0}\", \"Code\":\"{1}\", \"Name\":\"{2}\", \"parent_id\":\"{3}\", \"level\":\"{4}\", \"isLeaf\":\"{5}\", \"expanded\":\"{6}\", \"loaded\":\"{6}\"";

                ret.AppendFormat("{{\"page\":\"{0}\",\"total\":\"{1}\",\"records\":\"{2}\",\"invdata\":[", 1, outputValue.TotalPage, outputValue.TotalRow);
                for (int i = 0; i < list.Length; i++)
                {
                    string isLeaf = list[i].ChildCount > 0 ? "false" : "true";
                    int _level = 0;
                    if (list[i].Level > 0)
                        _level = list[i].Level - 1;
                    else if (pParentId > 0)
                        _level = pLevel + 1;
                    string item = string.Format(format, list[i].ID, list[i].Code, list[i].Name, list[i].ParentID, _level, isLeaf, "false");
                    ret.Append("{" + item + "}");
                    if (i < list.Length - 1)
                        ret.Append(",");
                }
                ret.Append("]}");
            }
            catch (Exception ex)
            {
                CLogManager.Write("ChartAccountUI:GetItems(int, string, string)", ex.ToString(), "Account");
            }
            return ret.ToString();
        }
    }
}