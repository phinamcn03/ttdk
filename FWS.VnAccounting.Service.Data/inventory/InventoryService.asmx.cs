using System;
using System.Collections.Generic;
using System.Web;
using System.Web.Services;
using FWS.VnAccounting.Service.Data.Inventory.Class;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Inventory;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Core;

namespace FWS.VnAccounting.Service.Data.Inventory
{
    /// <summary>
    /// Summary description for InventoryService
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]

    public class InventoryService : System.Web.Services.WebService
    {

        #region Inventory Items
        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\" /&gt;")]
        public string GetInventoryItemsListInCSV(string InputValue, ref string PageInfo)
        {
            return new CItemService().GetInventoryItemsListInCSV(InputValue, ref PageInfo);
        }
        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\" /&gt;")]
        public List<CItems> GetInventoryItemsList(string InputValue, ref COutputValue Output)
        {
            return new CItemService().GetInventoryItemsList(InputValue, ref Output);
        }
        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\" ID=\"1\" /&gt;")]
        public CItems GetInventoryItem(string InputValue)
        {
            return new CItemService().GetInventoryItem(InputValue);
        }
        [WebMethod]
        public CApplicationMessage UpdateInventoryItem(string InputValue)
        {
            return new CItemService().UpdateInventoryItem(InputValue);
            
        }
        #endregion

        #region Item Group
        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\" /&gt;")]
        public string GetInventoryItemGroupListInCSV(string InputValue, ref string PageInfo)
        {
            return new CItemService().GetInventoryItemGroupListInCSV(InputValue, ref PageInfo);
        }
        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\" /&gt;")]
        public List<CItemGroup> GetInventoryItemGroupList(string InputValue, ref COutputValue Output)
        {
            return new CItemService().GetInventoryItemGroupList(InputValue, ref Output);
        }
        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\" ID=\"1\" /&gt;")]
        public CItemGroup GetInventoryItemGroup(string InputValue)
        {
            return new CItemService().GetInventoryItemGroup(InputValue);
        }
        [WebMethod]
        public CApplicationMessage UpdateInventoryItemGroup(string InputValue)
        {
            return new CItemService().UpdateInventoryItemGroup(InputValue);

        }
        #endregion

        #region Stock
        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\" /&gt;")]
        public string GetInventoryStockListInCSV(string InputValue, ref string PageInfo)
        {
            return new CStockService().GetInventoryStockListInCSV(InputValue, ref PageInfo);
        }
        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\" /&gt;")]
        public List<CStock> GetInventoryStockList(string InputValue, ref COutputValue Output)
        {
            return new CStockService().GetInventoryStockList(InputValue, ref Output);
        }
        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\" ID=\"1\" /&gt;")]
        public CStock GetInventoryStock(string InputValue)
        {
            return new CStockService().GetInventoryStock(InputValue);
        }
        [WebMethod]
        public CApplicationMessage UpdateInventoryStock(string InputValue)
        {
            return new CStockService().UpdateInventoryStock(InputValue);
        }
        #endregion


        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\" /&gt;")]
        public string GetInventoryTaxListInCSV(string InputValue, ref string PageInfo)
        {
            return new CTaxService().GetInventoryTaxListInCSV(InputValue, ref PageInfo);
        }
        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\" /&gt;")]
        public List<CTax> GetInventoryTaxList(string InputValue, ref COutputValue Output)
        {
            return new CTaxService().GetInventoryTaxList(InputValue, ref Output);
        }
        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\" ID=\"1\" /&gt;")]
        public CTax GetInventoryTax(string InputValue)
        {
            return new CTaxService().GetInventoryTax(InputValue);
        }
        [WebMethod]
        public CApplicationMessage UpdateInventoryTax(string InputValue)
        {
            return new CTaxService().UpdateInventoryTax(InputValue);
        }

        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\" Code=\"SearchCode\" Name =\"SearchName\"/&gt;")]
        public string GetInventoryUnitListInCSV(string InputValue, ref string PageInfo)
        {
            return new CUnitService().GetInventoryUnitListInCSV(InputValue, ref PageInfo);
        }
        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\" Code=\"SearchCode\" Name =\"SearchName\" /&gt;")]
        public List<CUnit> GetInventoryUnitList(string InputValue, ref COutputValue Output)
        {
            return new CUnitService().GetInventoryUnitList(InputValue,ref Output);
        }
        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\" ID=\"1\" /&gt;")]
        public CUnit GetInventoryUnit(string InputValue)
        {
            return new CUnitService().GetInventoryUnit(InputValue);
        }
        [WebMethod(Description = "Insert And Update Inventory Unit\n InputValue: &lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\" ID=\"1\" Code=\"abc\" .... &gt; ")]
        public CApplicationMessage UpdateInventoryUnit(string InputValue)
        {
            return new CUnitService().UpdateInventoryUnit(InputValue);
        }

        #region CostMethod

        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\" Code=\"SearchCode\" Name =\"SearchName\" /&gt;")]
        public List<CCostMethod> GetCostMethodList(string InputValue, ref COutputValue Output)
        {
            return new CCostMethodService().GetCostMethodList(InputValue, ref Output);
        }
        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\" ID=\"1\" /&gt;")]
        public CCostMethod GetCostMethod(string InputValue)
        {
            return null;// new CUnitService().GetInventoryUnit(InputValue);
        }
        [WebMethod(Description = "Insert And Update Inventory Unit\n InputValue: &lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\" ID=\"1\" Code=\"abc\" .... &gt; ")]
        public CApplicationMessage UpdateCostMethod(string InputValue)
        {
            return null;// new CUnitService().UpdateInventoryUnit(InputValue);
        }
        #endregion

        #region ItemType

        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\" Code=\"SearchCode\" Name =\"SearchName\" /&gt;")]
        public List<CItemType> GetItemTypeList(string InputValue, ref COutputValue Output)
        {
            return new CItemTypeService().GetItemTypeList(InputValue, ref Output);
        }
        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\" ID=\"1\" /&gt;")]
        public CItemType GetItemType(string InputValue)
        {
            return null;// new CUnitService().GetInventoryUnit(InputValue);
        }
        [WebMethod(Description = "Insert And Update Inventory Unit\n InputValue: &lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\" ID=\"1\" Code=\"abc\" .... &gt; ")]
        public CApplicationMessage UpdateItemType(string InputValue)
        {
            return null;// new CUnitService().UpdateInventoryUnit(InputValue);
        }
        #endregion


        #region Inward
        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\" Code=\"SearchCode\" Name =\"SearchName\" /&gt;")]
        public List<CInward> GetInwardList(string InputValue, ref COutputValue Output)
        {
            return new CInwardService().GetInwardList(InputValue, ref Output);
        }

       
        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\" Code=\"SearchCode\" Name =\"SearchName\" /&gt;")]
        public CInward GetInward(string InputValue)
        {
            return new CInwardService().GetInward(InputValue);
        }
        [WebMethod(Description = "InputValue=&lt;InputValue&gt;&lt;Master UserID=\"1\" ID=\"8\" Code=\"IN/0005\" InwardDate=\"1/1/2012\" ObjectID=\"1\" ObjectType=\"1\" RefType=\"1\" Amount=\"410\" Description=\"Update\" Action=\"DELETE\"/&gt;&lt;Detail ID=\"7\" StockID=\"1\" ItemID=\"1\" Quantity=\"1\" Price=\"200\" Amount=\"200\" CreditAccount=\"8\" DebitAccount=\"49\" Description=\"Update\" Action=\"UPDATE\"/&gt;&lt;Detail StockID=\"1\" ItemID=\"1\" Quantity=\"1\" Price=\"210\" Amount=\"210\" CreditAccount=\"8\" DebitAccount=\"49\" Description=\"INSERT\" Action=\"INSERT\"/&gt;&lt;/InputValue&gt;")]
        public CApplicationMessage UpdateInward(string InputValue)
        {
            return new CInwardService().UpdateInward(InputValue);
            
        }

        [WebMethod(Description = "InputValue=&lt;InputValue UserID = \"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\" TransID=\"28\"/&gt;")]
        public CApplicationMessage PostInward(string InputValue)
        {
            return new CInwardService().PostInward(InputValue);

        }

        [WebMethod(Description = "InputValue=&lt;InputValue&gt;&lt;UserID = \"1\" TransID=\"28\"/&gt;&lt;/InputValue&gt;")]
        public CApplicationMessage UnPostInward(string InputValue)
        {
            return new CInwardService().UnPostInward(InputValue);

        }
        #endregion

        #region InwardDetail
        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\" Code=\"SearchCode\" Name =\"SearchName\" /&gt;")]
        public List<CInwardDetail> GetInwardDetailList(string InputValue, ref COutputValue Output)
        {
           return new CInwardService().GetInwardDetailList(InputValue, ref Output);
         
        }
        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\" Code=\"SearchCode\" Name =\"SearchName\" /&gt;")]
        public List<CInwardDetail> GetInwardDetailListTest(string InputValue)
        {
            COutputValue Output = new COutputValue();
            return new CInwardService().GetInwardDetailList(InputValue, ref Output);

        }
        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\" Code=\"SearchCode\" Name =\"SearchName\" /&gt;")]
        public CInwardDetail GetInwardDetail(string InputValue)
        {
             return new CInwardService().GetInwardDetail(InputValue);
        }
        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\" Code=\"SearchCode\" Name =\"SearchName\" /&gt;")]
        public CApplicationMessage UpdateInwardDetail(string InputValue)
        {
             return new CInwardService().UpdateInwardDetail(InputValue);
        }
        #endregion

        #region Outward
        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\" Code=\"SearchCode\" Name =\"SearchName\" /&gt;")]
        public List<COutward> GetOutwardList(string InputValue, ref COutputValue Output)
        {
            return new COutwardService().GetOutwardList(InputValue, ref Output);
        }


        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\" Code=\"SearchCode\" Name =\"SearchName\" /&gt;")]
        public COutward GetOutward(string InputValue)
        {
            return new COutwardService().GetOutward(InputValue);
        }
        [WebMethod(Description = "InputValue=&lt;InputValue&gt;&lt;Master UserID=\"1\" ID=\"8\" Code=\"IN/0005\" OutwardDate=\"1/1/2012\" ObjectID=\"1\" ObjectType=\"1\" RefType=\"1\" Amount=\"410\" Description=\"Update\" Action=\"DELETE\"/&gt;&lt;Detail ID=\"7\" StockID=\"1\" ItemID=\"1\" Quantity=\"1\" Price=\"200\" Amount=\"200\" CreditAccount=\"8\" DebitAccount=\"49\" Description=\"Update\" Action=\"UPDATE\"/&gt;&lt;Detail StockID=\"1\" ItemID=\"1\" Quantity=\"1\" Price=\"210\" Amount=\"210\" CreditAccount=\"8\" DebitAccount=\"49\" Description=\"INSERT\" Action=\"INSERT\"/&gt;&lt;/InputValue&gt;")]
        public CApplicationMessage UpdateOutward(string InputValue)
        {
            return new COutwardService().UpdateOutward(InputValue);

        }
        #endregion

        #region OutwardDetail
        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\" Code=\"SearchCode\" Name =\"SearchName\" /&gt;")]
        public List<COutwardDetail> GetOutwardDetailList(string InputValue, ref COutputValue Output)
        {
            return new COutwardService().GetOutwardDetailList(InputValue, ref Output);

        }
        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\" Code=\"SearchCode\" Name =\"SearchName\" /&gt;")]
        public List<COutwardDetail> GetOutwardDetailListTest(string InputValue)
        {
            COutputValue Output = new COutputValue();
            return new COutwardService().GetOutwardDetailList(InputValue, ref Output);

        }
        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\" Code=\"SearchCode\" Name =\"SearchName\" /&gt;")]
        public COutwardDetail GetOutwardDetail(string InputValue)
        {
            return new COutwardService().GetOutwardDetail(InputValue);
        }
        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\" Code=\"SearchCode\" Name =\"SearchName\" /&gt;")]
        public CApplicationMessage UpdateOutwardDetail(string InputValue)
        {
            return new COutwardService().UpdateOutwardDetail(InputValue);
        }




        [WebMethod(Description = "InputValue=&lt;InputValue UserID = \"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\" TransID=\"28\"/&gt;")]
        public CApplicationMessage PostOutward(string InputValue)
        {
            return new COutwardService().PostOutward(InputValue);

        }

        [WebMethod(Description = "InputValue=&lt;InputValue&gt;&lt;UserID = \"1\" TransID=\"28\"/&gt;&lt;/InputValue&gt;")]
        public CApplicationMessage UnPostOutward(string InputValue)
        {
            return new COutwardService().UnPostOutward(InputValue);

        }


        #endregion


        #region Transfer
        [WebMethod(Description = "InputValue=&lt;InputValue&gt;&lt;Master UserID=\"1\" ID=\"8\" Code=\"IN/0005\" TransferDate=\"1/1/2012\" ObjectID=\"1\" ObjectType=\"1\" RefType=\"1\" Amount=\"410\" Description=\"Update\" Action=\"DELETE\"/&gt;&lt;Detail ID=\"7\" ToStock=\"1\" FromStock=\"2\" ItemID=\"1\" Quantity=\"1\" Price=\"200\" Amount=\"200\" CreditAccount=\"8\" DebitAccount=\"49\" Description=\"Update\" Action=\"UPDATE\"/&gt;&lt;Detail StockID=\"1\" ItemID=\"1\" Quantity=\"1\" Price=\"210\" Amount=\"210\" CreditAccount=\"8\" DebitAccount=\"49\" Description=\"INSERT\" Action=\"INSERT\"/&gt;&lt;/InputValue&gt;")]
        public CApplicationMessage UpdateTransfer(string InputValue)
        {
            return new CTransferService().UpdateTransfer(InputValue);

        }

        [WebMethod(Description = "InputValue=&lt;InputValue&gt;&lt;Master UserID=\"1\" ID=\"8\" Code=\"IN/0005\" TransferDate=\"1/1/2012\" ObjectID=\"1\" ObjectType=\"1\" RefType=\"1\" Amount=\"410\" Description=\"Update\" Action=\"DELETE\"/&gt;&lt;Detail ID=\"7\" ToStock=\"1\" FromStock=\"2\" ItemID=\"1\" Quantity=\"1\" Price=\"200\" Amount=\"200\" CreditAccount=\"8\" DebitAccount=\"49\" Description=\"Update\" Action=\"UPDATE\"/&gt;&lt;Detail StockID=\"1\" ItemID=\"1\" Quantity=\"1\" Price=\"210\" Amount=\"210\" CreditAccount=\"8\" DebitAccount=\"49\" Description=\"INSERT\" Action=\"INSERT\"/&gt;&lt;/InputValue&gt;")]
        public CTransactionsStock GetTransfer(string InputValue)
        {
            return new CTransferService().GetTransfer(InputValue);

        }
        [WebMethod(Description = "InputValue=&lt;InputValue&gt;&lt;Master UserID=\"1\" ID=\"8\" Code=\"IN/0005\" TransferDate=\"1/1/2012\" ObjectID=\"1\" ObjectType=\"1\" RefType=\"1\" Amount=\"410\" Description=\"Update\" Action=\"DELETE\"/&gt;&lt;Detail ID=\"7\" ToStock=\"1\" FromStock=\"2\" ItemID=\"1\" Quantity=\"1\" Price=\"200\" Amount=\"200\" CreditAccount=\"8\" DebitAccount=\"49\" Description=\"Update\" Action=\"UPDATE\"/&gt;&lt;Detail StockID=\"1\" ItemID=\"1\" Quantity=\"1\" Price=\"210\" Amount=\"210\" CreditAccount=\"8\" DebitAccount=\"49\" Description=\"INSERT\" Action=\"INSERT\"/&gt;&lt;/InputValue&gt;")]
        public List<CTransactionsStock> GetTransferList(string InputValue,ref COutputValue Output)
        {
            return new CTransferService().GetTransferList(InputValue, ref Output);

        }

        [WebMethod(Description = "InputValue=&lt;InputValue&gt;&lt;Master UserID=\"1\" ID=\"8\" Code=\"IN/0005\" TransferDate=\"1/1/2012\" ObjectID=\"1\" ObjectType=\"1\" RefType=\"1\" Amount=\"410\" Description=\"Update\" Action=\"DELETE\"/&gt;&lt;Detail ID=\"7\" ToStock=\"1\" FromStock=\"2\" ItemID=\"1\" Quantity=\"1\" Price=\"200\" Amount=\"200\" CreditAccount=\"8\" DebitAccount=\"49\" Description=\"Update\" Action=\"UPDATE\"/&gt;&lt;Detail StockID=\"1\" ItemID=\"1\" Quantity=\"1\" Price=\"210\" Amount=\"210\" CreditAccount=\"8\" DebitAccount=\"49\" Description=\"INSERT\" Action=\"INSERT\"/&gt;&lt;/InputValue&gt;")]
        public List<CTransactionsStockDetails> GetTransferDetails(string InputValue, ref COutputValue Output)
        {
            return new CTransferService().GetTransferDetails(InputValue, ref Output);

        }
        #endregion Transfer

        /*
        #region Active Ingredient - lbnam - 2013-06-20
        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\" Code=\"SearchCode\" Name =\"SearchName\"/&gt;")]
        public string GetInventoryActiveIngredientListInCSV(string InputValue, ref string PageInfo)
        {
            return new CActiveIngredientService().GetInventoryBaseListInCSV(InputValue, ref PageInfo);
        }
        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\" Code=\"SearchCode\" Name =\"SearchName\" /&gt;")]
        public List<CActiveIngredient> GetInventoryActiveIngredientList(string InputValue, ref COutputValue Output)
        {
            return new CActiveIngredientService().GetInventoryBaseList(InputValue, ref Output);
        }
        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\" ID=\"1\" /&gt;")]
        public CActiveIngredient GetInventoryActiveIngredient(string InputValue)
        {
            return new CActiveIngredientService().GetInventoryBase(InputValue);
        }
        [WebMethod(Description = "Insert And Update Inventory Unit\n InputValue: &lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\" ID=\"1\" Code=\"abc\" .... &gt; ")]
        public CApplicationMessage UpdateInventoryActiveIngredient(string InputValue)
        {
            return new CActiveIngredientService().UpdateInventoryBase(InputValue);
        }
        #endregion
        */
    }
}
