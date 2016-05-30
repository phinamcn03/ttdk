using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;

namespace FWS.TTDKGDTS.ImportTool._Core.AutoComplete
{
    public class CStringUtils
    {
        public static string RemoveUnicodeChar(string str)
        {
            Regex v_reg_regex = new Regex("\\p{IsCombiningDiacriticalMarks}+");
            string v_str_FormD = str.Normalize(NormalizationForm.FormD);
            return v_reg_regex.Replace(v_str_FormD, String.Empty).Replace('\u0111', 'd').Replace('\u0110', 'D');
        }
    }
}
