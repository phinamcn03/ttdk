using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using FWS.TTDKGDTS.ImportTool._Global;

namespace FWS.TTDKGDTS.ImportTool.Mods.Import
{
    public class CTransaction
    {
        public CTransaction()
        {
            RefType = 21;
        }
        public int ID { get; set; }
        public int ClientID { get; set; }
        public string RefNo { get; set; }
        public int RefNumber { get; set; }
        public int RefType { get; set; }
        public DateTime RefDate { get; set; }
        public int ObjectID { get; set; }
        public string ObjectName { get; set; }
        public string ObjectAddress { get; set; }
        public string ObjectEmail { get; set; }
        public string ContactName { get; set; }
        public int AssetOwnerID { get; set; }
        public string AssetOwnerName { get; set; }
        public string AssetOwnerAddress { get; set; }
        public int AssetType { get; set; }
        public string AssetLicenseNumber { get; set; }
        public string AssetNumberPlate { get; set; }
        public int WarranterID { get; set; }
        public string WarranterCode { get; set; }
        public string WarranterName { get; set; }
        public string WarranterAddress { get; set; }
        public string WarranterEmail { get; set; }
        public string RegisTransRefNo { get; set; }
        public string OldRefNo { get; set; }
        public DateTime OldRefDate { get; set; }
        public string OrgRefNo { get; set; }
        public string ChildRefNo { get; set; }
        public string ContractNo { get; set; }
        public string ContractTypeName { get; set; }
        public int ContractType { get; set; }
        public int Type { get; set; }
        public string TypeName { get; set; }
        public double? Amount { get; set; }
        public string Description { get; set; }
        public string Note { get; set; }
        public int Status { get; set; }
        public int PayStatus { get; set; }
        public int PayMethod { get; set; }
        public string WebUserName { get; set; }
        public DateTime PrintDate { get; set; }
        public DateTime ExpiredDate { get; set; }
        public DateTime CreatedDateTime { get; set; }
        public int? CreatedBy { get; set; }
        public DateTime? LastUpdatedDateTime { get; set; }
        public int? LastUpdatedBy { get; set; }
        public int NumPagesAttachment { get; set; }
        public DateTime ReceiveDateTime { get; set; }
        public string AssetPersonalCode { get; set; }
        public int AssetIDCardType { get; set; }
        public string AssetIDCardNo { get; set; }
        public bool IsSendMail { get; set; }
        public bool IsSendMailKH { get; set; }
        public List<Person> WarranterList { get; set; }
        public List<Person> AssetOwnnerList { get; set; }
        public List<Asset> Assets { get; set; }
        public string SoDonNhan { get; set; }
        public string SendGCNEmail { get; set; }
        public DateTime SendGCNDateTime { get; set; }
        public string FileNumber { get; set; }
        public byte[] FileAttactContent { get; set; }

        public string GetRequestParams(string additionAttribute="")
        {
            StringBuilder sb = new StringBuilder();
            //sb.AppendFormat("<InputValue ClientKey=\"{0}\" UserID=\"{1}\" />", CSession.CLIENT_KEY, CSession.UserID);
            sb.Append("<RequestParams ");
            sb.Append(additionAttribute);
            if (ID > 0) sb.Append(string.Format(" ID=\"{0}\"", ID));
            sb.Append(string.Format(" RefNo=\"{0}\"", HtmlEncode(RefNo)));
            sb.Append(string.Format(" RefNumber=\"{0}\"",RefNumber));
            sb.Append(string.Format(" RefType=\"{0}\"", RefType));
            if (RefDate > new DateTime(1900, 01, 01)) sb.Append(string.Format(" RefDate=\"{0}\"", RefDate.ToString("yyyy-MM-dd HH:mm:ss")));
            sb.Append(string.Format(" ObjectID=\"{0}\"", ObjectID));
            sb.Append(string.Format(" ObjectName=\"{0}\"",HtmlEncode(ObjectName)));
            sb.Append(string.Format(" ObjectAddress=\"{0}\"", HtmlEncode(ObjectAddress)));
            sb.Append(string.Format(" ObjectEmail=\"{0}\"", HtmlEncode(ObjectEmail)));
            sb.Append(string.Format(" ContactName=\"{0}\"", HtmlEncode(ContactName)));
            sb.Append(string.Format(" AssetOwnerID=\"{0}\"", AssetOwnerID));
            sb.Append(string.Format(" AssetOwnerName=\"{0}\"", HtmlEncode(AssetOwnerName)));
            sb.Append(string.Format(" AssetOwnerAddress=\"{0}\"", HtmlEncode(AssetOwnerAddress)));
            sb.Append(string.Format(" AssetType=\"{0}\"", AssetType));
            sb.Append(string.Format(" AssetLicenseNumber=\"{0}\"", HtmlEncode(AssetLicenseNumber)));
            sb.Append(string.Format(" AssetNumberPlate=\"{0}\"", HtmlEncode(AssetNumberPlate)));
            sb.Append(string.Format(" ContractNo=\"{0}\"", HtmlEncode(ContractNo)));
            sb.Append(string.Format(" ContractType=\"{0}\"", ContractType));
            sb.Append(string.Format(" ContractTypeName=\"{0}\"", ContractTypeName));
            sb.Append(string.Format(" WebUserName=\"{0}\"", HtmlEncode(WebUserName)));
            if(WarranterID >0) sb.Append(string.Format(" WarranterID=\"{0}\"", WarranterID));
            sb.Append(string.Format(" WarranterCode=\"{0}\"", HtmlEncode(WarranterCode)));
            sb.Append(string.Format(" FileNumber=\"{0}\"", HtmlEncode(FileNumber)));

            if (WarranterID <= 0 && string.IsNullOrEmpty(WarranterCode) && WarranterList != null && WarranterList.Count > 0)
            {
                
                sb.Append(string.Format(" WarranterName=\"{0}\"", HtmlEncode(WarranterList[0].ObjectName)));
                sb.Append(string.Format(" WarranterAddress=\"{0}\"", HtmlEncode(WarranterList[0].ObjectAddress)));
            }
            else
            {
                sb.Append(string.Format(" WarranterName=\"{0}\"", HtmlEncode(WarranterName)));
                sb.Append(string.Format(" WarranterAddress=\"{0}\"", HtmlEncode(WarranterAddress)));
               
            } 
            sb.Append(string.Format(" WarranterEmail=\"{0}\"", HtmlEncode(WarranterEmail)));
            sb.Append(string.Format(" RegisTransRefNo=\"{0}\"", HtmlEncode(RegisTransRefNo)));
            sb.Append(string.Format(" OldRefNo=\"{0}\"", HtmlEncode(OldRefNo)));
            sb.Append(string.Format(" OrgRefNo=\"{0}\"", HtmlEncode(OrgRefNo)));
            if (OldRefDate > new DateTime(1900, 01, 01)) sb.Append(string.Format(" OldRefDate=\"{0}\"", OldRefDate.ToString("yyyy-MM-dd HH:mm:ss")));
            //sb.Append(string.Format(" OldRefDate=\"{0}\"", HtmlEncode(OldRefDate)));
            sb.Append(string.Format(" Type=\"{0}\"", Type));
            sb.Append(string.Format(" TypeName=\"{0}\"", HtmlEncode(TypeName)));
            sb.Append(string.Format(" Description=\"{0}\"", HtmlEncode(Description)));
            if (RefType == 28)
            {
                sb.Append(string.Format(" Note=\"{0}\"", HtmlEncode(Note)));
            }
            else
            {
                sb.Append(string.Format(" Note=\"{0}\"", HtmlEncode("")));
            }
            sb.Append(string.Format(" Status=\"{0}\"", HtmlEncode(Status.ToString())));
            if (PrintDate > new DateTime(1900, 01, 01)) sb.Append(string.Format(" PrintDate = \"{0}\"", PrintDate.ToString("yyyy-MM-dd HH:mm:ss")));
            if (ExpiredDate > new DateTime(1900, 01, 01)) sb.Append(string.Format(" ExpiredDate = \"{0}\"", ExpiredDate.ToString("yyyy-MM-dd HH:mm:ss")));
            if (ReceiveDateTime > new DateTime(1900, 01, 01)) sb.Append(string.Format(" ReceiveDateTime = \"{0}\"", ReceiveDateTime.ToString("yyyy-MM-dd HH:mm:ss")));
            sb.Append(string.Format(" NumPagesAttachment=\"{0}\"", NumPagesAttachment));
            if (AssetPersonalCode != null) sb.Append(string.Format(" AssetPersonalCode=\"{0}\"", HtmlEncode(AssetPersonalCode)));
            if (AssetIDCardNo != null) sb.Append(string.Format(" AssetIDCardNo=\"{0}\"", HtmlEncode(AssetIDCardNo)));
            
            sb.Append(" >");
            if (WarranterList != null)
            {
                for (int i = 0; i < WarranterList.Count; i++)
                {
                    sb.Append("<Warranter ");
                    if (WarranterList[i].ID > 0) sb.Append(string.Format(" ID=\"{0}\"", WarranterList[i].ID));
                    sb.Append(string.Format(" Code=\"{0}\"", HtmlEncode(WarranterList[i].ObjectCode)));
                    sb.Append(string.Format(" Name=\"{0}\"", HtmlEncode(WarranterList[i].ObjectName)));
                    sb.Append(string.Format(" Address=\"{0}\"", HtmlEncode(WarranterList[i].ObjectAddress)));

                    sb.Append("/>");
                }
            }
            if (AssetOwnnerList != null)
            {
                for (int i = 0; i < AssetOwnnerList.Count; i++)
                {
                    sb.Append("<AssetOwnner ");
                    if (AssetOwnnerList[i].ID > 0) sb.Append(string.Format(" ID=\"{0}\"", AssetOwnnerList[i].ID));
                    sb.Append(string.Format(" Code=\"{0}\"", HtmlEncode(AssetOwnnerList[i].ObjectCode)));
                    sb.Append(string.Format(" Name=\"{0}\"", HtmlEncode(AssetOwnnerList[i].ObjectName)));
                    sb.Append(string.Format(" Address=\"{0}\"", HtmlEncode(AssetOwnnerList[i].ObjectAddress)));
                    sb.Append(string.Format(" IDCardNumber=\"{0}\"", HtmlEncode(AssetOwnnerList[i].ObjectIDCardNumber)));
                    sb.Append("/>");
                }
            }
            if (Assets != null)
            {
                for (int i = 0; i < Assets.Count; i++)
                {
                    if (!string.IsNullOrEmpty(Assets[i].AssetLicenseNumber) || !string.IsNullOrEmpty(Assets[i].AssetDescription) || !string.IsNullOrEmpty(Assets[i].AssetNumberPlate))
                    {
                        sb.Append("<Asset ");
                        if (Assets[i].ID > 0) sb.Append(string.Format(" ID=\"{0}\"", Assets[i].ID));
                        sb.Append(string.Format(" Type=\"{0}\"", Assets[i].AssetType));
                        sb.Append(string.Format(" LicenseNumber=\"{0}\"", HtmlEncode(Assets[i].AssetLicenseNumber)));
                        sb.Append(string.Format(" NumberPlate=\"{0}\"", HtmlEncode(Assets[i].AssetNumberPlate)));
                        sb.Append(string.Format(" Description=\"{0}\"", HtmlEncode(Assets[i].AssetDescription)));
                        sb.Append(string.Format(" AssetName=\"{0}\"", HtmlEncode(Assets[i].AssetName)));
                        sb.Append(string.Format(" Selected=\"{0}\"", Assets[i].Selected?1:0));
                        sb.Append(string.Format(" RegisType=\"{0}\"", Assets[i].RegisType));
                        sb.Append(string.Format(" IsModify=\"{0}\"", Assets[i].IsModify?1:0));
                        sb.Append(string.Format(" ModifyNote=\"{0}\"", HtmlEncode(Assets[i].ModifyNote)));
                        sb.Append("/>");
                    }
                }
            }
            sb.Append(" </RequestParams>");
            return sb.ToString();
        }

        private string HtmlEncode(string value)
        {
            if (string.IsNullOrEmpty(value)) return value;

            value = System.Web.HttpUtility.HtmlDecode(value);
            value = System.Web.HttpUtility.HtmlEncode(value);
            //value = value.Replace("&", "&#38;");
            //value = value.Replace("\"", "&quot;");
            //value = value.Replace("'", "&apos;");
            //value = value.Replace(">", "&gt;");
            //value = value.Replace("<", "&lt;");
            return value;
            //return System.Web.HttpUtility.HtmlEncode(value);
        }

        public void ClearInfo()
        {
            ID = 0;
            RefNo = "";
            //RefType = 0;
            //RefNumber = 0;
            ObjectID = 0;
            ObjectName = "";
            ObjectAddress = "";
            ObjectEmail = "";
            AssetOwnerID = 0;
            AssetOwnerName = "";
            AssetOwnerAddress = "";
            AssetNumberPlate = "";
            AssetPersonalCode = "";
            AssetLicenseNumber = "";

            WarranterID = 0;
            //WarranterName = ""; 
            //WarranterCode = ""; -- KHong xoa du lieu cua WarranterCode
            WarranterAddress = "";
            WarranterEmail = "";
            RegisTransRefNo = "";
            OldRefNo = "";
            OldRefDate = new DateTime();
            ContractNo = "";
            ContractType = 0;
            ContractTypeName = "";
            AssetIDCardNo = "";
            AssetIDCardType = 0;
            IsSendMail = false;
            IsSendMailKH = false;
            NumPagesAttachment = 0;
            Note = "";
            Description = "";
            Amount = 0;

            WarranterList = new List<Person>();
            AssetOwnnerList = new List<Person>();
            Assets = new List<Asset>();
        }
    }

    public class Person
    {
        public int ID { get; set; }
        public int ObjectID { get; set; }
        public string ObjectCode { get; set; }
        public string ObjectName { get; set; }
        public string ObjectAddress { get; set; }
        public string ObjectIDCardNumber { get; set; }
    }

    public class Asset
    {
        public Asset()
        {
            Selected = true;
        }
        public int ID { get; set; }
        public int AssetType { get; set; }
        public string AssetTypeName { get; set; }
        public string AssetLicenseNumber { get; set; }
        public string AssetNumberPlate { get; set; }
        public string AssetDescription { get; set; }
        public string AssetName { get; set; }
        public bool Selected { get; set; }
        public int RegisType { get; set; }
        public string RefNo { get; set; }
        public int Status { get; set; }

        public bool IsModify { get; set; }
        public string ModifyNote { get; set; }
    }
}
