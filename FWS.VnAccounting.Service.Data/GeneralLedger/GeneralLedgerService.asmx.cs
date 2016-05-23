using System;
using System.Collections.Generic;
using System.Web;
using System.Web.Services;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.GeneralLedger;
using FWS.VnAccounting.Service.Data.GeneralLedger.Class;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Core;

namespace FWS.VnAccounting.Service.Data.GeneralLedger
{
    /// <summary>
    /// Summary description for GeneralLedgerService
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]

    public class GeneralLedgerService : System.Web.Services.WebService
    {
        #region Account
        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\" /&gt;")]
        public List<CAccountList> GetAccountList(string InputValue, ref COutputValue Output)
        {
            return new CAccountListService().GetAccountList(InputValue, ref Output);
        }

        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\" /&gt;")]
        public string GetAccountListInCSV(string InputValue, ref string PageInfo)
        {
            return new CAccountListService().GetAccountListInCSV(InputValue, ref PageInfo);
        }

        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\" ID=\"1\" /&gt;")]
        public CAccountList GetAccount(string InputValue)
        {
            return new CAccountListService().GetAccount(InputValue);
        }

        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\" ID=\"1\" Code=\"111\" Name=\"Tiền mặt\" /&gt;")]
        public CApplicationMessage UpdateAccount(string InputValue)
        {
            return new CAccountListService().UpdateAccount(InputValue);
        }
        #endregion

        #region Employee
        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\" PageIndex=\"1\" RowsPerPage=\"10\" /&gt;")]
        public List<CEmployee> GetEmployeeList(string InputValue, ref COutputValue Output)
        {
            return new CEmployeeService().GetEmployeeList(InputValue, ref Output);
        }

        
        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\" ID=\"1\" /&gt;")]
        public CEmployee GetEmployee(string InputValue)
        {
            return new CEmployeeService().GetEmployee(InputValue);
        }

        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\" Action=\"UPDATE\" ID=\"1\" Code=\"NV001\" Name=\"Nguyen Van A\" /&gt;")]
        public CApplicationMessage UpdateEmployee(string InputValue)
        {
            return new CEmployeeService().UpdateEmployee(InputValue);
        }
        #endregion

        #region Transaction
        [WebMethod(Description = "InputValue=&lt;InputValue UserID = \"1\" Code=\"PT001\" RefType=\"1\" RefDate=\"2012-01-10\" Amount=\"20000\" IsBalance=\"1\" ExchangeRate=\"1\" CurrencyID=\"1\" Note=\"Phieu thu\"/&gt;"+
                                            "&lt;Detail DebitAccount=\"41\" DebitAccountCode=\"152\" DebitAmount=\"10000\" CreditAccount=\"7\" CreditAccountCode=\"111\" CreditAmount=\"10000\" TaxRate=\"0\" Note=\"Bang hang thu tien\" /&gt;"+
                                            "&lt;Detail DebitAccount=\"41\" DebitAccountCode=\"152\" DebitAmount=\"10000\" CreditAccount=\"11\" CreditAccountCode=\"112\" CreditAmount=\"10000\" TaxRate=\"0\" Note=\"Bang hang thu tien\" /&gt;")]
        public CApplicationMessage CreateTransaction(string InputValue)
        {
            return new CTrasactionService().CreateTransaction(InputValue);
        }
        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\" TransactionID=\"1\" /&gt;")]
        public CApplicationMessage CancelTransaction(string InputValue)
        {
            return new CTrasactionService().CancelTransaction(InputValue);
        }
        [WebMethod(Description = "InputValue=&lt;InputValue UserID = \"1\" ID=\"1\" Code=\"PT001\" RefType=\"1\" RefDate=\"2012-01-10\" Amount=\"20000\" IsBalance=\"1\" ExchangeRate=\"1\" CurrencyID=\"1\" Note=\"Phieu thu\"/&gt;" +
                                            "&lt;ItemDetail ItemID=\"1\" Quantity=\"152\" Price=\"10000\" Amount=\"7\" CreditAccountID=\"1\"  TaxRate=\"0\" Note=\"Bang hang thu tien\" /&gt;" +
                                            "&lt;AccountDetail DebitAccount=\"41\" DebitAccountCode=\"152\" DebitAmount=\"10000\" CreditAccount=\"7\" CreditAccountCode=\"111\" CreditAmount=\"10000\" TaxRate=\"0\" Note=\"Bang hang thu tien\" /&gt;" +
                                            "&lt;AccountDetail DebitAccount=\"41\" DebitAccountCode=\"152\" DebitAmount=\"10000\" CreditAccount=\"11\" CreditAccountCode=\"112\" CreditAmount=\"10000\" TaxRate=\"0\" Note=\"Bang hang thu tien\" /&gt;")]
        public CApplicationMessage UpdateTransaction(string InputValue)
        {
            return new CTrasactionService().UpdateTransaction(InputValue);
        }
        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\" PageIndex=\"1\" RowsPerPage=\"10\" /&gt;")]
        public List<CTransaction> GetTransactionList(string InputValue, ref COutputValue Output)
        {
            return new CTrasactionService().GetTransactionList(InputValue, ref Output);
        }
        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\" ID=\"1\" /&gt;")]
        public CTransaction GetTransaction(string InputValue)
        {
            return new CTrasactionService().GetTransaction(InputValue);
        }
        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\" TransactionID=\"1\" /&gt;")]
        public List<CTransactionDetail> GetTransactionDetail(string InputValue)
        {
            return new CTrasactionService().GetTransactionDetail(InputValue);
        }

        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\" TransactionID=\"1\" /&gt;")]
        public List<CTransactionAccountDetail> GetTransactionAccountDetail(string InputValue)
        {
            return new CTrasactionService().GetTransactionAccountDetail(InputValue);
        }
        #endregion

        #region General
        [WebMethod(Description = "InputValue=&lt;InputValue UserID=\"1\" Session=\"ED45A7F1-9FB8-4D82-9D48-1B2238DC666C\" RefGroup=\"AR\" /&gt;")]
        public List<CRefType> GetRefTypeList(string InputValue, ref COutputValue Output)
        {
            return new CRefTypeService().GetRefTypeList(InputValue, ref Output);
        }
        #endregion
    }
}
