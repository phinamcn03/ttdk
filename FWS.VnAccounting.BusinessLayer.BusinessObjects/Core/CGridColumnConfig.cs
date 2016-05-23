using System;
using System.Collections.Generic;
using System.Text;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Base;

namespace FWS.VnAccounting.BusinessLayer.BusinessObjects.Core
{
    [Serializable]
    public class CGridColumnConfig :CObjectBase
    {
        #region Public property

        public int ID { get; set; }
        public int? GridConfigID { get; set; }
        public int? GridType { get; set; }
        public string Code { get; set; }
        public int? ZOrder { get; set; }
        public int? FreezeIndex { get; set; }
        public string Heading { get; set; }
        public string DataType { get; set; }
        public string DataAlign { get; set; }
        public bool? IsDynamic { get; set; }
        public bool? IsEditable { get; set; }
        public bool? IsHidden { get; set; }
        public bool? IsSystem { get; set; }
        public string FontName { get; set; }
        public string FontType { get; set; }
        public float? FontSize { get; set; }
        public bool? FontBold { get; set; }
        public bool? FontItalic { get; set; }
        public string FontColor { get; set; }
        public string Format { get; set; }
        public string BackColor { get; set; }
        public float? Width { get; set; }
        public bool? AutoWidth { get; set; }
        public float? Height { get; set; }
        public bool? AutoHeight { get; set; }
        public string AltBackColor { get; set; }
        public string Name { get; set; }
        public int? GridID { get; set; }
        public string EditOptions { get; set; }
        public bool? Sortable { get; set; }
        public string Index { get; set; }
        public string Classes { get; set; }
        public bool? Resizable { get; set; }
        public string ConditionStyleName { get; set; }
        public string AdditionAttribute { get; set; }
        public string iCSS { get; set; }
        public string SummaryType { get; set; }
        public string SummaryTemplate { get; set; }
        public string DataMappingName { get; set; }
        public string DataManipulation { get; set; }
        public string SortName { get; set; }
        public string SortOrder { get; set; }
        public bool CellEdit { get; set; }
        public string CellSubmit { get; set; }
        public bool? Frozen { get; set; }
        

        public override string ToString()
        {
            StringBuilder strRet = new StringBuilder();
            strRet.Append("{");
            //ZOrder int
            if (ZOrder != null)
            {
                strRet.AppendFormat("order:{0}", ZOrder.ToString());
            }
            //Heading string
            if (Name != string.Empty)
            {
                strRet.AppendFormat(", name:'{0}'", Name);
                //strRet.AppendFormat(", index:'{0}'", ZOrder.ToString());
                strRet.AppendFormat(", index:'{0}'", DataMappingName);
            }
            //DataType
            if (DataType != string.Empty)
            {
                strRet.AppendFormat(", sorttype:'{0}'", DataType);
            }
            //DataAlign
            if (DataAlign != string.Empty)
            {
                strRet.AppendFormat(", align:'{0}'", DataAlign);
            }
            //width
            if (Width != null)
            {
                strRet.AppendFormat(", width:{0}", Width.ToString());
            }
            //IsSortable
            if (Sortable != null)
            {
                strRet.AppendFormat(", sortable:{0}", (bool)Sortable ? "true" : "false");
            }
            //IsEditable
            if (IsEditable != null)
            {
                strRet.AppendFormat(", editable:{0}", (bool)IsEditable ? "true" : "false");
            }
            //EditOptions
            if (EditOptions != string.Empty)
            {
                strRet.AppendFormat(", editoptions:{0}", EditOptions);
            }
            //FreezeIndex int
            if (Index != string.Empty)
            {
                strRet.AppendFormat(", index:'{0}'", Index);
            }
            //FreezeIndex int
            if (IsHidden != null)
            {
                strRet.AppendFormat(", hidden:{0}", IsHidden.ToString().ToLower());
            }
            if (Format != string.Empty)
            {
                strRet.AppendFormat(", formatter: {0}", Format);
                strRet.AppendFormat(", sformatter: '{0}'", Format);
            }
            if (Resizable != null)
            {
                strRet.AppendFormat(", resizable:{0}", Resizable.ToString().ToLower());
            }
            if (Classes != string.Empty)
            {
                strRet.AppendFormat(", classes: '{0}'", Classes);
            }
            if (IsDynamic != null)
            {
                strRet.AppendFormat(", isdynamic:{0}", (bool)IsDynamic ? "true" : "false");
            }
            if (Frozen != null)
            {
                strRet.AppendFormat(", frozen:{0}", (bool)Frozen ? "true" : "false");
            }
            if (SummaryType != string.Empty)
            {
                if (SummaryType.Contains("fn:"))
                {
                    strRet.AppendFormat(", summaryType: {0}", SummaryType.Replace("fn:", ""));
                }
                else
                {
                    strRet.AppendFormat(", summaryType: '{0}'", SummaryType);
                }
            }
            if (SummaryTemplate != string.Empty)
            {
                strRet.AppendFormat(", summaryTpl: '{0}'", SummaryTemplate);
            }
            if (ConditionStyleName != string.Empty)
            {
                strRet.AppendFormat(", ConditionStyleName: '{0}'", ConditionStyleName);
            }
            if (FontItalic != null)
            {
                strRet.AppendFormat(", FontItalic:{0}", (bool)FontItalic ? "true" : "false");
            }
            if (FontBold != null)
            {
                strRet.AppendFormat(", FontBold:{0}", (bool)FontBold ? "true" : "false");
            }
            if (FontColor != string.Empty)
            {
                strRet.AppendFormat(", FontColor: '{0}'", FontColor);
            }
            if (BackColor != string.Empty)
            {
                strRet.AppendFormat(", BackColor: '{0}'", BackColor);
            }
            if (iCSS != string.Empty)
            {
                strRet.AppendFormat(", iCSS: '{0}'", iCSS);
            }
           

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
            strRet.Append("}");
            return strRet.ToString();
        }
        #endregion
    }
}
