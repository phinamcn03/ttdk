using System;
using System.Collections.Generic;
using System.Text;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Base;

namespace FWS.VnAccounting.BusinessLayer.BusinessObjects.Inventory
{
    [Serializable]
    public class CItems : CObjectBase
    {
        public CItems()
        {
            CSVFields = new string[] { "ID", "Code", "Name", "ItemTypeID", "ItemTypeName", "GroupID", "GroupName", "SalePrice", "CostMethod", "CreditAccount", "CreditAccountName", "DebitAccount", "DebitAccountName", "Input_Tax_Account", "Input_Tax_Account_Name", "Output_Tax_Account", "Output_Tax_Account_Name", "TaxID", "TaxName", "UnitID", "UnitName", "Description", "Status", "ClientID", "CreatedBy", "CreateByName", "CreatedDateTime", "LastUpdatedBy", "LastUpdateByName", "LastUpdatedDateTime" };
        }
        #region Public property

        public int ID { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public string ItemTypeID { get; set; }
        public string ItemTypeName { get; set; }
        public int GroupID { get; set; }
        public string GroupName { get; set; }
        public double SalePrice { get; set; }
        public int CostMethod { get; set; }
        public int CreditAccount { get; set; }
        public string CreditAccountName { get; set; }
        public int DebitAccount { get; set; }
        public string DebitAccountName { get; set; }
        public int? Input_Tax_Account { get; set; }
        public string Input_Tax_Account_Name { get; set; }
        public int? Output_Tax_Account { get; set; }
        public string Output_Tax_Account_Name { get; set; }
        public int TaxID { get; set; }
        public string TaxName { get; set; }
        public int UnitID { get; set; }
        public string UnitName { get; set; }
        public string Description { get; set; }
        public int Status { get; set; }
        public int ClientID { get; set; }
        public int? CreatedBy { get; set; }
        public string CreatedByName { get; set; }
        public DateTime? CreatedDateTime { get; set; }
        public int? LastUpdatedBy { get; set; }
        public string LastUpdatedByName { get; set; }
        public DateTime? LastUpdatedDateTime { get; set; }
        public int ActivePrincipleID { get; set; }
        public string ActivePrincipleName { get; set; }
        public string Concentration { get; set; }
        public string UsingNote { get; set; }
        public int ProprietaryID { get; set; }
        public int ProprietaryName { get; set; }
        public decimal HealthInsurancePercent { get; set; }
        public string SerialNo { get; set; }
        public DateTime? ExpDate { get; set; }
        public int ManufactureID { get;set; }
        public string ManufactureName { get; set; }
        public int MadeInCountryID { get; set; }
        public string MadeInCountryName { get; set; }
        public decimal OutwardAmount { get; set; }
        public decimal InwardAmount { get; set; }
        public int BYTGroupID { get; set; }
        public int BYTGroupName { get; set; }
        public int Pack1OddUnitID { get; set; }
        public int Pack1EvenUnitID { get; set; }
        public decimal Pack1Quantity	 { get; set; }
        public int Pack2OddUnitID	 { get; set; }
        public int Pack2EvenUnitID { get; set; }
        public decimal Pack2Quantity { get; set; }
        public int Pack3OddUnitID	 { get; set; }
        public int Pack3EvenUnitID { get; set; }
        public decimal Pack3Quantity { get; set; }

        #endregion
    }
}
