using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FWS.VnAccounting.Presentation.WebApp.Mods.Core
{
    public class CRefType
    {
        public const int SALE_ORDER = 1;
        public const int SALE_INVOICE = 2;
        public const int SALE_RETURN = 3;
        public const int PURCHASE_ORDER = 4;
        public const int PURCHASE_INVOICE = 5;
        public const int PURCHASE_RETURN = 6;
        public const int INV_INWARD = 7;
        public const int INV_OUTWARD = 8;
        public const int INV_TRANSFER = 9;
        public const int INV_ADJUSTMENT = 10;
        public const int CASH_RECEIPT = 11;
        public const int CASH_PAYMENT = 12;
        public const int BANK_RECEIPT = 13;
        public const int BANK_PAYMENT = 14;
        public const int CUSTUMER_PAYMENT = 15;
        public const int VENDOR_PAYMENT = 16;
        //public static int InWard =11;
        //public static int OutWard = 12;
        //public static int StockTransfer = 13;

        //public static int PurchaseOrder = 2;
        //public static int SaleInvoice = 3;
        //public static int SaleReturn = 4;
        //public static int CashReceipt = 5;
        //public static int PurchaseInvoice = 8;
        //public static int PurchaseReturn = 9;
        //public static int BankReceipt = 18;
        //public static int BankPayment = 19;
    }
}