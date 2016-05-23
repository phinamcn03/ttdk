using System;
using System.Collections.Generic;
using System.Text;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Base;

namespace FWS.VnAccounting.BusinessLayer.BusinessObjects.Core
{
    [Serializable]
    public class CGridConfig : CObjectBase
    {
        #region Public property

        public int ID { get; set; }
        /// <summary>
        /// 0 or Null: standand, 1: TreeGrid
        /// </summary>
        public int? GridType { get; set; }
        public string Code { get; set; }
        public string Caption { get; set; }
        public bool? IsDynamic { get; set; }
        public bool? IsMultiSelect { get; set; }
        public string Height { get; set; }
        public string DataType { get; set; }
        public string URL { get; set; }
        public string MType { get; set; }
        public string Width { get; set; }
        public string ForceFit { get; set; }
        public int? RowNum { get; set; }
        public string Sortable { get; set; }
        public string AdditionAttribute { get; set; }
        public bool? RowNumber { get; set; }
        public string RowNumWidth { get; set; }
        public bool? SubGrid { get; set; }
        public bool? FooterSummary { get; set; }
        public int FixedColumn { get; set; }
        public bool AllowEdit { get; set; }
        public bool AllowAddRow { get; set; }
        public bool AllowDelete { get; set; }
        public int NumberEmptyRow { get; set; }

        public override string ToString()
        {
            StringBuilder strRet = new StringBuilder();
            strRet.Append("_emptyField: ''");
            if (DataType != string.Empty)
            {
                strRet.AppendFormat(", datatype:'{0}'", DataType);
            }
            if (GridType != null)
            {
                strRet.AppendFormat(", GridType:'{0}'", GridType.ToString());
            }
            if (URL != string.Empty)
            {
                strRet.AppendFormat(", url:'{0}'", URL);
            }
            if (MType != string.Empty)
            {
                strRet.AppendFormat(", mtype:'{0}'", MType.Trim());
            }
            if (Height != null)
            {
                strRet.AppendFormat(", height:'{0}'", Height.ToString());
            }
            if (Sortable != string.Empty)
            {
                strRet.AppendFormat(", sortable:'{0}'", Sortable);
            }
            if (Width != null)
            {
                strRet.AppendFormat(", width:'{0}'", Width);
            }
            if (IsDynamic != null)
            {
                strRet.AppendFormat(", isdynamic:{0}", (bool)IsDynamic ? "true" : "false");
            }
            if (IsMultiSelect != null)
            {
                strRet.AppendFormat(", multiselect:{0}", (bool)IsMultiSelect ? "true" : "false");
            }
            if (Caption != string.Empty)
            {
                strRet.AppendFormat(", caption:'{0}'", Caption);
            }
            if (ForceFit != string.Empty)
            {
                strRet.AppendFormat(", forceFit:'{0}'", ForceFit);
            }
            if (RowNum != null)
            {
                strRet.AppendFormat(", rowNum:{0}", RowNum);
            }
            if (RowNumber != null)
            {
                strRet.AppendFormat(", rownumbers:{0}", (bool)RowNumber ? "true" : "false");
            }
            if (RowNumWidth != string.Empty)
            {
                strRet.AppendFormat(", rownumWidth:{0}", RowNumWidth);
            }
            if (SubGrid != null)
            {
                strRet.AppendFormat(", subGrid:{0}", (bool)RowNumber ? "true" : "false");
            }
            if (FooterSummary != null)
            {
                strRet.AppendFormat(", footerSummary:{0}", (bool)FooterSummary ? "true" : "false");
            }
            // column != 0 => fixed column
            if (FixedColumn != 0)
            {
                strRet.AppendFormat(", fixedcolumn:{0}", FixedColumn);
            }
            strRet.AppendFormat(", allowEdit:{0}", AllowEdit ? "true" : "false");
            strRet.AppendFormat(", allowDelete:{0}", AllowDelete ? "true" : "false");
            strRet.AppendFormat(", allowAddRow:{0}", AllowAddRow ? "true" : "false");
            strRet.AppendFormat(", numberEmptyRow:{0}", NumberEmptyRow);

            if (AdditionAttribute != string.Empty && AdditionAttribute != null)
            {
                string[] arr = AdditionAttribute.Split(',');
                if (arr.Length > 0)
                {
                    for (int i = 0; i < arr.Length; i++)
                    {
                        strRet.AppendFormat(", {0}: {1}", arr[i].Split(':')[0], arr[i].Split(':')[1]);
                    }
                }
            }
            return strRet.ToString();
        }

        #endregion
    }
}
