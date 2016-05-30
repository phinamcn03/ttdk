using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using PMSA.iMarkets.Presentation.AppVersion.Main;
using System.Xml;
using System.Text.RegularExpressions;
using FWS.TTDKGDTS.ImportTool._Core;
using System.Windows.Forms;
using System.Globalization;
using FWS.TTDKGDTS.ImportTool.ServiceReference;
using FWS.TTDKGDTS.ImportTool._Global;
using FWS.VnAccounting.Service.Data.Utils;

namespace FWS.TTDKGDTS.ImportTool.Mods.Import
{
    public class CImport
    {
        const string CLIENT_KEY = "AFC1030C-0938-4D20-A2B9-6D70906FB2EE";
        const string URL_LOGIN ="dktructuyen.moj.gov.vn/public/login.aspx";
        const string URL_ENTERCUSTOMER = "dktructuyen.moj.gov.vn/secured/ca/changecustNr.aspx";
        const string URL_CUSTOMER = "dktructuyen.moj.gov.vn/secured/ca/clienthome.aspx";
        const string URL_VIEWDETAIL = "dktructuyen.moj.gov.vn/Secured/UCCFiling/PrintFiling.aspx";
        const string URL_DETAILEXAMPLE = "http://dktructuyen.moj.gov.vn/Secured/UCCFiling/PrintFiling.aspx?print=false&id=11757671";
        const string URL_QUERY = "dktructuyen.moj.gov.vn/Secured/Queries";
        const string URL_INDEX = "dktructuyen.moj.gov.vn/index.aspx";

        public UCefSharpBrowser browser = null;
        public EPage CheckPage()
        {
            if (browser == null) return EPage.NONE;
            string url = browser.GetRequestUrl();
           
            if (browser.GetRequestUrl().Contains(URL_LOGIN)) return EPage.LOGIN;
            if (browser.GetRequestUrl().Contains(URL_CUSTOMER)) return EPage.CUSTOMER;
            if (browser.GetRequestUrl().Contains(URL_VIEWDETAIL)) return EPage.VIEWDETAIL;
            if (browser.GetRequestUrl().Contains(URL_ENTERCUSTOMER)) return EPage.ENTERWARRANTERCODE;
            if (browser.GetRequestUrl().Contains(URL_INDEX)) return EPage.INDEX;
            return EPage.NONE;
        }
        public bool IsQueryPage()
        {
            if (browser == null) return false;
            string url = browser.GetRequestUrl();
            if (url.Contains(URL_QUERY)) return true;
            return false;
        }
        public void ExtractTransactionData(ref CTransaction trans)
        {
            if (trans == null) trans = new CTransaction();
            string dom = browser.GetDocument();
            //Neu la don CCTT
            string namePartern = "[.]*<span id=\"ctl00_cphBody_show_results_title\">GCN kết quả tra cứu thông tin</span>[.]*";
            Regex reg = new Regex(namePartern, RegexOptions.IgnoreCase);

            int RefType = GetRefType();
            trans.RefType = RefType;
            if (RefType == 26)
            {
                ExtractCCTT(ref trans);
                return;
            }

            //========================

            //dom = "ABCDEF<span id=\"ucFilingDetailReview_ucFilerName_lblvalue\" class=\"FormControlNoEditLabel\">Ngân Hàng TMCP Xuất Nhập Khẩu Việt Nam Sở Giao Dịch I</span>aaafdsafe";
            namePartern = "[.]*<span id=\"[a-zA-Z0-9_]*FilingDetailReview_ucFilerName_lblvalue\"[^>]*>([^>]*)</span>[.]*";
            reg = new Regex(namePartern, RegexOptions.IgnoreCase);
            if (reg.IsMatch(dom))
            {
                Match m = reg.Match(dom);
                trans.WarranterName = m.Groups[1].Value;
            }
            //<span id="ucFilingDetailReview_ucFilerAddress">66 Phó Đức Chính, phường Nguyễn Thái Bình,&nbsp;Quận 1, Hồ Chí Minh,&nbsp;Việt Nam</span>
            namePartern = "[.]*<span id=\"[a-zA-Z0-9_]*FilingDetailReview_ucFilerAddress\"[^>]*>([^>]*)</span>[.]*";
            reg = new Regex(namePartern, RegexOptions.IgnoreCase);
            if (reg.IsMatch(dom))
            {
                Match m = reg.Match(dom);
                trans.WarranterAddress =m.Groups[1].Value;
            }
            //<span id="ucFilingDetailReview_ucNoticeType_lblvalue" class="FormControlNoEditLabel">Đăng ký giao dịch bảo đảm/Hợp đồng</span>
            namePartern = "[.]*<span id=\"[a-zA-Z0-9_]*FilingDetailReview_ucNoticeType_lblvalue\"[^>]*>([^>]*)</span>[.]*";
            reg = new Regex(namePartern, RegexOptions.IgnoreCase);
            if (reg.IsMatch(dom))
            {
                Match m = reg.Match(dom);
                trans.TypeName = m.Groups[1].Value;
            }

            //<span id="ucFilingDetailReview_ucNoticeType_lblvalue" class="FormControlNoEditLabel">Đăng ký giao dịch bảo đảm/Hợp đồng</span>
            namePartern = "[.]*<span id=\"[a-zA-Z0-9_]*FilingDetailReview_ucNoticeType_lblvalue\"[^>]*>([^>]*)</span>[.]*";
            reg = new Regex(namePartern, RegexOptions.IgnoreCase);
            if (reg.IsMatch(dom))
            {
                Match m = reg.Match(dom);
                trans.TypeName = m.Groups[1].Value;
            }

            //<span id="ucFilingDetailReview_ucFilingNumber_lblvalue" class="FormControlNoEditLabel">1146070105</span>
            namePartern = "[.]*<span id=\"[a-zA-Z0-9_]*FilingDetailReview_ucFilingNumber_lblvalue\"[^>]*>([^>]*)</span>[.]*";
            reg = new Regex(namePartern, RegexOptions.IgnoreCase);
            if (reg.IsMatch(dom))
            {
                Match m = reg.Match(dom);
                trans.RefNo = m.Groups[1].Value;
            }

            namePartern = "[.]*<span id=\"[a-zA-Z0-9_]*FilingDetailReview_ucOriginalFilingNumber_lblvalue\"[^>]*>([^>]*)</span>[.]*";
            reg = new Regex(namePartern, RegexOptions.IgnoreCase);
            if (reg.IsMatch(dom))
            {
                Match m = reg.Match(dom);
                trans.OldRefNo = m.Groups[1].Value;
                trans.OrgRefNo = trans.OldRefNo;
            }
            //<span id="ucFilingDetailReview_ucOriginalFilingDate_lblvalue" class="FormControlNoEditLabel">13/11/2009 11:00</span>
            //<span id="ctl00_cphBody_FilingDetailReview_ucOriginalFilingDate_lblvalue" class="FormControlNoEditLabel">09/03/2012 16:23</span>
            namePartern = "[.]*<span id=\"[a-zA-Z0-9_]*FilingDetailReview_ucOriginalFilingDate_lblvalue\"[^>]*>([^>]*)</span>[.]*";
            reg = new Regex(namePartern, RegexOptions.IgnoreCase);
            if (reg.IsMatch(dom))
            {
                Match m = reg.Match(dom);

                DateTimeFormatInfo dateformat = new DateTimeFormatInfo();
                dateformat.SetAllDateTimePatterns(new string[] { "dd/MM/yyyy HH:mm", "dd/MM/yyyy", "dd MM yyyy" }, 'd');
                dateformat.SetAllDateTimePatterns(new string[] { "dd/MM/yyyy HH:mm", "dd/MM/yyyy", "dd MM yyyy" }, 'D');
                CultureInfo culture = new CultureInfo("vi-VN");

                trans.OldRefDate = DateTime.Parse(m.Groups[1].Value, dateformat);

            }

            //<span id="ucFilingDetailReview_ucFilingDate_lblvalue" class="FormControlNoEditLabel">01/07/2013 09:06</span>
            namePartern = "[.]*<span id=\"[a-zA-Z0-9_]*FilingDetailReview_ucFilingDate_lblvalue\"[^>]*>([^>]*)</span>[.]*";
            reg = new Regex(namePartern, RegexOptions.IgnoreCase);
            if (reg.IsMatch(dom))
            {
                Match m = reg.Match(dom);
                //DateTimeFormatInfo dateformat = new DateTimeFormatInfo();
                //dateformat.SetAllDateTimePatterns(new string[]{"dd/MM/yyyy HH:mm","dd/MM/yyyy","dd MM yyyy"},'d');
                //dateformat.SetAllDateTimePatterns(new string[] { "dd/MM/yyyy HH:mm", "dd/MM/yyyy", "dd MM yyyy" }, 'D');
                //CultureInfo culture = new CultureInfo("vi-VN");
                trans.RefDate = ParseDateTime(m.Groups[1].Value);
                //trans.RefDate = DateTime.Parse(m.Groups[1].Value, dateformat);
            }

            // ContractNo
            //ucFilingDetailReview_ucReferenceNumber_lblvalue
            namePartern = "[.]*<span id=\"[a-zA-Z0-9_]*FilingDetailReview_ucReferenceNumber_lblvalue\"[^>]*>([^>]*)</span>[.]*";
            reg = new Regex(namePartern, RegexOptions.IgnoreCase);
            if (reg.IsMatch(dom))
            {
                Match m = reg.Match(dom);
                trans.ContractNo = m.Groups[1].Value;
            }

            // ContractType
            //<span id="ucFilingDetailReview_ucSecuredInterestType_lblvalue" class="FormControlNoEditLabel">Hợp đồng cho thuê tài chính</span>
            namePartern = "[.]*<span id=\"[a-zA-Z0-9_]*FilingDetailReview_ucSecuredInterestType_lblvalue\"[^>]*>([^>]*)</span>[.]*";
            reg = new Regex(namePartern, RegexOptions.IgnoreCase);
            if (reg.IsMatch(dom))
            {
                Match m = reg.Match(dom);
                trans.ContractTypeName = m.Groups[1].Value;
            }

            //<span id="ucFilingDetailReview_ucFilingDate_lblvalue" class="FormControlNoEditLabel">01/07/2013 09:06</span>
            namePartern = "[.]*<span id=\"[a-zA-Z0-9_]*txtCollateral_lblvalue\"[^>]*>([^>]*)</span>[.]*";
            reg = new Regex(namePartern, RegexOptions.IgnoreCase);
            if (reg.IsMatch(dom))
            {
                Match m = reg.Match(dom);
                trans.Note =m.Groups[1].Value;
            }
            /*
            <table class="GridView" cellspacing="0" rules="all" border="1" id="ucDebtorReview_gv" style="font-family:Khmer OS,Verdana;width:100%;border-collapse:collapse;">
			<tbody>
             <tr class="GridViewHeader">
				<th scope="col">Phân loại chủ thể</th>
              <th scope="col">Số giấy tờ chứng minh tư cách pháp lý</th>
              <th scope="col">Tên</th>
              <th scope="col">Địa chỉ</th>
			</tr><tr class="GridViewRow">
				<td>Tổ chức có đăng ký kinh doanh trong nước</td>
              <td>Mã số thuế: 0307979603</td>
             <td>Công Ty Cổ Phần Tân Thành đô City Ford</td>
              <td>260 QL13, phường 26, Bình Thạnh,  Hồ Chí Minh, Việt Nam</td>
			</tr>
		</tbody></table>
             * */
            //<span id="ucFilingDetailReview_ucFilingDate_lblvalue" class="FormControlNoEditLabel">01/07/2013 09:06</span>
            //dom = "defg <t>abc</t><t id=\"a\">def</t> vfe";
            namePartern = "<table[^>]*id=\"[a-zA-Z0-9_]*DebtorReview_gv\"[^>]*>(((?!</table).)*)</table>";
            //namePartern = "<t id=\"a\">(((?!t).)*)</t>";
            reg = new Regex(namePartern, RegexOptions.IgnoreCase);
           
            dom = dom.Replace("\n", "");
            dom = dom.Replace("\r", "");
            if (reg.IsMatch(dom))
            {
                Match m = reg.Match(dom);
                string table = m.Groups[0].Value;
                table = PrepareHtmlToXml(table);
                //table = table.Replace("<br>", "&lt;br&gt;");
                //table = table.Replace("&nbsp;", "&#xA0;");
                XmlDocument doc = new XmlDocument();
                doc.LoadXml(table);
                trans.AssetOwnnerList = new List<Person>();
                trans.AssetOwnerName = "";
                XmlNodeList list = doc.SelectNodes("/table/tbody/tr");
                for (int i = 2; i <= list.Count; i++)
                {
                    string IdCardNo = doc.SelectSingleNode(string.Format("/table/tbody/tr[{0}]/td[2]", i)).InnerText;

                    if (IdCardNo.Contains(':')) IdCardNo = IdCardNo.Split(':')[1].Trim();
                    else if(IdCardNo.Contains("Số hộ chiếu"))
                    {
                        if(IdCardNo.Contains("<br>")) IdCardNo = IdCardNo.Substring(0,IdCardNo.IndexOf("<br>"));
                        IdCardNo = IdCardNo.Replace("Số hộ chiếu","").Trim();
                    }
                    else IdCardNo = "";

                    trans.AssetOwnnerList.Add(new Person()
                    {
                        ObjectName = doc.SelectSingleNode(string.Format("/table/tbody/tr[{0}]/td[3]", i)).InnerText,
                        ObjectIDCardNumber = IdCardNo,
                        ObjectAddress = doc.SelectSingleNode(string.Format("/table/tbody/tr[{0}]/td[4]", i)).InnerText
                    });

                    trans.AssetOwnerName += (string.IsNullOrEmpty(trans.AssetOwnerName) ? "" : " & ") + trans.AssetOwnnerList[i - 2].ObjectName;
                    trans.AssetIDCardNo = IdCardNo;
                }

                
            }

            namePartern = "<table[^>]*id=\"[a-zA-Z0-9_]*SecuredPartyReview_gv\"[^>]*>(((?!</table).)*)</table>";
            //namePartern = "<t id=\"a\">(((?!t).)*)</t>";
            reg = new Regex(namePartern, RegexOptions.IgnoreCase);
            
            dom = dom.Replace("\n", "");
            dom = dom.Replace("\r", "");
            if (reg.IsMatch(dom))
            {
                Match m = reg.Match(dom);
                string table = m.Groups[0].Value;
                table = PrepareHtmlToXml(table);
                //table = table.Replace("<br>", "&lt;br&gt;");
                XmlDocument doc = new XmlDocument();
                doc.LoadXml(table);
                trans.WarranterList = new List<Person>();
                XmlNodeList list = doc.SelectNodes("/table/tbody/tr");
                for (int i = 2; i <= list.Count; i++)
                {
                    trans.WarranterList.Add(new Person()
                    {
                        ObjectName = doc.SelectSingleNode(string.Format("/table/tbody/tr[{0}]/td[1]", i)).InnerText,
                        ObjectAddress = doc.SelectSingleNode(string.Format("/table/tbody/tr[{0}]/td[2]", i)).InnerText
                    });
                }

            }
            else
            {
                //ctl00_cphBody_gvAuthorizingPartyReview_gv
                namePartern = "<table[^>]*id=\"[a-zA-Z0-9_]*gvAuthorizingPartyReview_gv\"[^>]*>(((?!</table).)*)</table>";
                reg = new Regex(namePartern, RegexOptions.IgnoreCase);

                dom = dom.Replace("\n", "");
                dom = dom.Replace("\r", "");
                if (reg.IsMatch(dom))
                {
                    Match m = reg.Match(dom);
                    string table = m.Groups[0].Value;
                    table = PrepareHtmlToXml(table);
                    //table = table.Replace("<br>", "&lt;bt&gt;");
                    XmlDocument doc = new XmlDocument();
                    doc.LoadXml(table);
                    trans.WarranterList = new List<Person>();
                    XmlNodeList list = doc.SelectNodes("/table/tbody/tr");
                    for (int i = 2; i <= list.Count; i++)
                    {
                        trans.WarranterList.Add(new Person()
                        {
                            ObjectName = doc.SelectSingleNode(string.Format("/table/tbody/tr[{0}]/td[1]", i)).InnerText,
                            ObjectAddress = doc.SelectSingleNode(string.Format("/table/tbody/tr[{0}]/td[2]", i)).InnerText
                        });
                    }

                }
            }

            // Neu trong danh sach Warranter  co ten = ten KH thi gan Ma KHTX cho warranter do
            if (trans.WarranterList != null)
            {
                bool isMatchWarranterCode = false;
                for (int i = 0; i < trans.WarranterList.Count; i++)
                {
                    if (trans.WarranterList[i].ObjectName.Trim().Equals(trans.WarranterName.Trim(), StringComparison.OrdinalIgnoreCase))
                    {
                        trans.WarranterList[i].ObjectCode = trans.WarranterCode;
                        isMatchWarranterCode = true;
                    }

                }
                if (!isMatchWarranterCode && trans.WarranterList != null && trans.WarranterList.Count >0)
                {
                    trans.WarranterList[0].ObjectCode = trans.WarranterCode;
                }
            }

            namePartern = "<table[^>]*id=\"[a-zA-Z0-9_]*SerialNumberReview_gv\"[^>]*>(((?!</table).)*)</table>";
            //namePartern = "<t id=\"a\">(((?!t).)*)</t>";
            reg = new Regex(namePartern, RegexOptions.IgnoreCase);

            dom = dom.Replace("\n", "");
            dom = dom.Replace("\r", "");
            if (reg.IsMatch(dom))
            {
                Match m = reg.Match(dom);
                string table = m.Groups[0].Value;
                table = PrepareHtmlToXml(table);
                //table = table.Replace("<br>", "&lt;br&gt;");
                XmlDocument doc = new XmlDocument();
                doc.LoadXml(table);
                trans.AssetLicenseNumber = doc.SelectSingleNode("/table/tbody/tr[2]/td[1]").InnerText;
                trans.Assets = new List<Asset>();
                XmlNodeList list = doc.SelectNodes("/table/tbody/tr");

                for (int i = 2; i <= list.Count; i++)
                {
                    trans.Assets.Add(new Asset()
                    {
                        AssetLicenseNumber = doc.SelectSingleNode(string.Format("/table/tbody/tr[{0}]/td[1]", i)).InnerText
                    });
                }
            }

            namePartern = "[.]*<span id=\"[a-zA-Z0-9_]*lblPINBefore\"[^>]*>([^>]*)</span>[.]*";
            reg = new Regex(namePartern, RegexOptions.IgnoreCase);
            if (reg.IsMatch(dom))
            {
                Match m = reg.Match(dom);
                string str =  m.Groups[1].Value;
                string[] arrs = str.Split(':');
                if (arrs.Length > 1) trans.AssetPersonalCode = arrs[1];

            }
        }

        public void ExtractCCTT(ref CTransaction trans)
        {
            if (trans == null) trans = new CTransaction();
            string dom = browser.GetDocument();

            trans.RefType = 26;
            string note = browser.GetElementsByTagID("SearchOutPut");
            trans.Note = note;
           

            //<span id="ctl00_cphBody_order_results_searchcertdocumentnumber">1987733</span>
            string namePartern = "[.]*<span id=\"[a-zA-Z0-9_]*order_results_searchcertdocumentnumber\"[^>]*>([^>]*)</span>[.]*";
            Regex reg = new Regex(namePartern, RegexOptions.IgnoreCase);
            if (reg.IsMatch(dom))
            {
                Match m = reg.Match(dom);
                trans.RefNo = m.Groups[1].Value;
            }
            //< span id = "ctl00_cphBody_order_results_requestingparty" > Công Ty Luật Frasers </ span >
            namePartern = "[.]*<span id=\"[a-zA-Z0-9_]*order_results_requestingparty\"[^>]*>([^>]*)</span>[.]*";
            reg = new Regex(namePartern, RegexOptions.IgnoreCase);
            if (reg.IsMatch(dom))
            {
                Match m = reg.Match(dom);
                trans.ContactName = m.Groups[1].Value;
            }

            //<span id="ctl00_cphBody_order_results_searchdatetime">11/04/2014 14:20</span>
            //ctl00_cphBody_order_results_searchdatetime
            namePartern = "[.]*<span id=\"[a-zA-Z0-9_]*order_results_searchdatetime\"[^>]*>([^>]*)</span>[.]*";
            reg = new Regex(namePartern, RegexOptions.IgnoreCase);
            if (reg.IsMatch(dom))
            {
                Match m = reg.Match(dom);
                trans.RefDate = ParseDateTime(m.Groups[1].Value);
            }
            //<span id="ctl00_cphBody_show_results_title">GCN kết quả tra cứu thông tin</span>
        }

        public string ExtractRefNo()
        {
            //if (trans == null) trans = new CTransaction();
            string dom = browser.GetDocument();

            //<span id="ucFilingDetailReview_ucFilingNumber_lblvalue" class="FormControlNoEditLabel">1146070105</span>
            string namePartern = "[.]*<span id=\"[a-zA-Z0-9_]*FilingDetailReview_ucFilingNumber_lblvalue\"[^>]*>([^>]*)</span>[.]*";
            Regex reg = new Regex(namePartern, RegexOptions.IgnoreCase);
            if (reg.IsMatch(dom))
            {
                Match m = reg.Match(dom);
                return m.Groups[1].Value;
            }
            return "";
        }

        public int GetRefType()
        {
            string dom = browser.GetDocument();

            //Neu lay duoc RefNo la don bao dam
            string RefNo = ExtractRefNo();
            if(!string.IsNullOrEmpty(RefNo))
            {
                return 21;
            }
            //Neu la don CCTT

            string namePartern = "[.]*<span id=\"ctl00_cphBody_show_results_title\">GCN kết quả tra cứu thông tin</span>[.]*";
            Regex reg = new Regex(namePartern, RegexOptions.IgnoreCase);
            if (reg.IsMatch(dom))
            {
                //Don CCTT
                return 26;
            }
            namePartern = "[.]*<table id=\"SearchOutPut\">[.]*";
            reg = new Regex(namePartern, RegexOptions.IgnoreCase);
            if (reg.IsMatch(dom))
            {
                //Don CCTT
                return 26;
            }
            //<span id="ctl00_cphBody_order_results_searchcertdocumentnumber">1987733</span>
            namePartern = "[.]*<span id=\"[a-zA-Z0-9_]*order_results_searchcertdocumentnumber\">[.]*";
            reg = new Regex(namePartern, RegexOptions.IgnoreCase);
            if (reg.IsMatch(dom))
            {
                //Don CCTT
                return 26;
            }
            //Don DK
            return 0;
        }
        public void ExtractInfo(ref CTransaction trans)
        {
            if (CheckPage() == EPage.CUSTOMER)
            {
                trans = new CTransaction();

                // Neu la trang tu bien lai
                //<span id="ctl00_cphBody_SessionDtls_txtAccountBalance_lbl" 
                bool isFromReceipt = false;
                string dom = browser.GetDocument();
                dom = dom.Replace("\n", "").Replace("\r", "");
                string namePartern = "[.]*<span id=\"ctl00_cphBody_SessionDtls_txtAccountBalance_lbl\"[.]*";
                Regex reg = new Regex(namePartern, RegexOptions.IgnoreCase);
                if (reg.IsMatch(dom))
                {
                    isFromReceipt = true;
                }

                //Neu la trang Home
                //<tr id="ctl00_cphBody_trRegistrarClientBatch">
                bool isHomePage = false;
                namePartern = "[.]*<tr id=\"ctl00_cphBody_trRegistrarClientBatch\"[.]*";
                reg = new Regex(namePartern, RegexOptions.IgnoreCase);
                if (reg.IsMatch(dom))
                {
                    isHomePage = true;
                }

                //<span id="ctl00_cphBody_lblClientHomeIntro">Từ màn hình này, bạn có thể chuyển sang các màn hình được liệt kê dưới đây. Sau khi hoàn thành mỗi giao dịch, bạn sẽ được chuyển trở lại màn hình này để có thể lựa chọn các giao dịch tiếp theo hoặc Đăng xuất. Mỗi giao dịch và lệ phí, phí của giao dịch đó sẽ được đưa vào Chi tiết giao dịch phía dưới và cũng sẽ được hiển thị trong bản sao kê hàng tháng. <br>Số khách hàng của người dùng đang đăng nhập là : <b>100166152</b></span>
                if (!isFromReceipt && !isHomePage)
                {
                    namePartern = "[.]*<span id=\"ctl00_cphBody_lblClientHomeIntro\"[^>]*>[^<>]*<br>[^<>]*<b>([^>]*)</b>[^<>]*</span>[.]*";
                    reg = new Regex(namePartern, RegexOptions.IgnoreCase);
                    if (reg.IsMatch(dom))
                    {
                        Match m = reg.Match(dom);
                        trans.WarranterCode = m.Groups[1].Value;

                        //if (m.Groups[1].Value.Trim() != "100166152")
                        //{
                        //    trans.WarranterCode = m.Groups[1].Value;
                        //}
                        //else
                        //{
                        //    trans.WarranterCode = "";
                        //}
                    }
                }
                else
                {
                    trans.WarranterCode = "";
                }
                namePartern = "[.]*<td id=\"ctl00_PageHeader1_tdLoginInfo\"[^>]*>(((?!<font)(?!<td)(?!</td).)*)<font [^>]*>([^>]*)</font>(((?!</font)(?!<td)(?!</td).)*)</td>[.]*";
                reg = new Regex(namePartern, RegexOptions.IgnoreCase);
                if (reg.IsMatch(dom))
                {
                    Match m = reg.Match(dom);
                    string loginInfo = m.Groups[3].Value;

                    trans.WebUserName = loginInfo.Split('|')[0].Replace("Người dùng", "").Trim();
                }
                
            }
        }

        public void ExtractLoginInfo()
        {
            string dom = browser.GetDocument();
            string namePartern = "[.]*<td id=\"ctl00_PageHeader1_tdLoginInfo\"[^>]*>(((?!<font)(?!<td)(?!</td).)*)<font [^>]*>([^>]*)</font>(((?!</font)(?!<td)(?!</td).)*)</td>[.]*";
            Regex reg = new Regex(namePartern, RegexOptions.IgnoreCase);
            if (reg.IsMatch(dom))
            {
                Match m = reg.Match(dom);
                string loginInfo = m.Groups[3].Value;

                CSession.WebUserName = loginInfo.Split('|')[0].Replace("Người dùng", "").Trim();
            }
        }

        private BusinessObject.CApplicationMessage InsertTransaction(CTransaction trans)
        {
            try
            {
                string requestParams = trans.GetRequestParams(" Function=\"Transaction_Asset\" Action=\"IMPORTTOOL\" ");
                //XmlDocument doc = new XmlDocument();
                //doc.LoadXml(requestParams);
                //CCoreService service = new CCoreService();
                requestParams = CXML.AddAuthenticate(requestParams);
                string result = CServiceReference.CoreService.ExecuteAction(CLIENT_KEY, FWS.VnAccounting.Service.Data.Utils.CXML.HtmlEnCode(requestParams));
                List<BusinessObject.CApplicationMessage> message = CObjectMapper.FromCSV<BusinessObject.CApplicationMessage>(result, 1);
                if (message[0].IsSuccessfull)
                {
                    //trans.ID = int.Parse(message[0].Result.ToString());
                    return message[0];
                }
                //MessageBox.Show(message[0].Description);
                return message[0];
            }
            catch (Exception ex)
            {
                return new BusinessObject.CApplicationMessage()
                {
                    Description = ex.Message
                };
            }
        }

        public bool IsTransactionExists(CTransaction trans)
        {
            try
            {
                string requestParams = "<RequestParams Function=\"GetTransaction_Asset\" RefType=\"{0}\" RefNo=\"{1}\"/>";
                requestParams = string.Format(requestParams, trans.RefType, trans.RefNo);
                //CCoreService service = new CCoreService();
                string result = CServiceReference.CoreService.GetContextData(CLIENT_KEY, FWS.VnAccounting.Service.Data.Utils.CXML.HtmlEnCode(requestParams));
                List<CTransaction> message = CObjectMapper.FromCSV<CTransaction>(result, 1);
                if (message != null && message.Count > 0 && !string.IsNullOrEmpty(message[0].RefNo))
                {
                    return true;
                }
                return false;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public BusinessObject.CApplicationMessage SaveTransaction(CTransaction trans, bool isTempSave = false)
        {
            //if (!CheckSaveStep()) return new BusinessObject.CApplicationMessage() { Description = "Không thể lưu ở trang này" };
            //CTransaction trans=new CTransaction();



            //if (trans == null) trans = new CTransaction();
            //trans.ClearInfo();
            //ExtractTransactionData(ref trans);
            if (isTempSave)
            {
                trans.Status = 1;
            }
            BusinessObject.CApplicationMessage result = InsertTransaction(trans);

            trans.Status = 0;
            return result;
        }

        private bool CheckSaveStep()
        {
            //1. Trang hien tai phai la trang bao cao
            string requestUrl = browser.GetRequestUrl();
            if (CheckPage() != EPage.VIEWDETAIL) // !requestUrl.Contains("dktructuyen.moj.gov.vn/Secured/UCCFiling/PrintFiling.aspx"))
            {
                MessageBox.Show("Mở chi tiết trước khi in hoặc lưu");
                return false;
            }
            
            return true;
        }

        private string PrepareHtmlToXml(string html)
        {
            html = html.Replace("<br>", "&lt;br&gt;");
            html = html.Replace("&nbsp;", "&#xA0;");

            return html;
        }

        private DateTime ParseDateTime(string value)
        {
            DateTimeFormatInfo dateformat = new DateTimeFormatInfo();
            dateformat.SetAllDateTimePatterns(new string[] { "dd/MM/yyyy HH:mm", "dd/MM/yyyy", "dd MM yyyy" }, 'd');
            dateformat.SetAllDateTimePatterns(new string[] { "dd/MM/yyyy HH:mm", "dd/MM/yyyy", "dd MM yyyy" }, 'D');
            CultureInfo culture = new CultureInfo("vi-VN");

            return DateTime.Parse(value, dateformat);
        }
    }


}
