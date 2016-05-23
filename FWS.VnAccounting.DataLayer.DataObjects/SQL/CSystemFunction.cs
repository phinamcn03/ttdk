using System;
using System.Collections.Generic;
using System.Text;

namespace FWS.VnAccounting.DataLayer.DataObjects.SQL
{
    public class CSystemFunction
    {
        public static int GetApplicationByUserID = 1;
        public static int GetInterfaceFunctionByUserID = 2;
        public static int GetModuleByUserID = 3;
        public static int Login = 7;
        public static int UpdateItem = 17;

        public static int GetItemList = 12;
        public static int CancelTransaction = 19;
        public static int CreateTransaction = 25;
        public static int GetInterfaceFunctionByParentID = 35;
        public static int GetConfigGridColumn = 37;
        public static int GetConfigGrid = 38;
        public static int GetVendorList = 10;
        public static int GetCustomerList = 11;
        public static int UpdateVendor = 15;
        public static int UpdateCustomer = 16;
        public static int UpdateInventoryItem = 28;
        public static int UpdateInventoryItemGroup = 34;
        public static int UpdateInventoryStock = 27;
        public static int UpdateInventoryTax = 40;
        public static int UpdateInventoryUnit = 41;
        //public static int UpdateInventoryActiveIngredient = 0;

        public static int GetInventoryItems = 42;
        public static int GetInventoryStock = 43;
        public static int GetInventoryItemGroup = 44;
        public static int GetInventoryUnit = 45;        
        public static int GetInventoryTax = 46;
        //public static int GetInventoryActiveIngredient = 0;

        public static int GetAccountList = 53;
        public static int UpdateAccountList = 54;
        public static int GetCurrencyList = 49;
        public static int GetCustomerGroupList = 51;
        public static int UpdateCustomerGroup = 52;
        public static int UpdateCurrency = 55;
        public static int GetVendorGroupList = 56;
        public static int UpdateVendorGroup = 57;
        public static int GetCostMethod = 58;
        public static int GetItemType = 59;
        public static int GetEmployee = 60;
        public static int UpdateEmployee = 61;
        public static int GetTransaction = 64;
        public static int UpdateTransaction = 65;
        public static int GetTransactionDetail = 66;

        public static int UpdateInward = 71;
        public static int GetInwardList = 70;
        public static int UpdateInwardDetail = 65;
        public static int GetInwardDetailList = 76;


        public static int UpdateOutward = 84;
        public static int GetOutwardList = 74;
        public static int UpdateOutwardDetail = 82;
        public static int GetOutwardDetailList = 77;


        public static int PostInward = 106;
        public static int UnPostInward = 109;
        public static int PostOutward = 143;
        public static int UnPostOutward = 159;

        public static int GetTransfer = 133;
        

        public static int InitReport = 86;

        public static int GetIntDefination = 85;
        public static int GetTransactionAccountDetail = 93;
        public static int GetNextRefNo = 94;
        public static int GetClientGroupConfig = 95;
        public static int UpdateClientGroupConfig = 96;
        public static int GetTransferStockDetail = 196;
        public static int GetControls = 98;

        public static int GetInterfaceFunctionByGroupID = 97;
        public static int GetUserGroup = 107;
        public static int GetPerson = 101;
        public static int UpdateUserGroupInterfaceFunction = 110;
        public static int GetRefType = 111;
        public static int GetViewList = 116;
        public static int GetViewDesignParameter = 117;
        public static int UpdateTransferInventory= 118;
        public static int GetEmployeeDepartment = 125;
        public static int UpdatePersonRole = 126;
        public static int GetLanguage = 128;
        public static int GetClientGroup = 129;
        public static int GetPersonRole = 139;
        public static int GetControlData = 151;
        public static int GetGroup = 161;
        public static int UpdateGroup = 162;
        public static int GetFixedAsset = 163;
        public static int GetGridData = 165;
        public static int UpdateFixedAsset = 169;
        public static int GetContextData = 199;
        public static int ExecuteAction = 222;
    }
}
