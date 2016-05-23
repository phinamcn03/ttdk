using System; 
using System.Collections.Generic; 
using System.Text; 
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Base; 
 
namespace FWS.VnAccounting.BusinessLayer.BusinessObjects.Inventory
{
[Serializable]
public class CInwardDetail : CObjectBase
{
	public CInwardDetail()
	{
        CSVFields = new string[] { "ID", "MasterID", "StockID", "ItemID", "ItemCode", "Quantity", "Price", "Amount", "ExpDate", "SerialNo", "CreditAccount", "DebitAccount", "Description" };
	}
	#region Public property
 
	public int ID { get; set;}
	public int MasterID { get; set;}
	public int StockID { get; set;}
    public string StockName { get; set; }
	public int ItemID { get; set;}
    public string ItemCode { get; set; }
    public string ItemName { get; set; }
    public int UnitID { get; set; }
    public string UnitName { get; set; }
	public double Quantity { get; set;}
	public double Price { get; set;}
	public double Amount { get; set;}
	public DateTime? ExpDate { get; set;}
	public string SerialNo { get; set;}
	public int CreditAccount { get; set;}
    public string CreditAccountCode { get; set; }
    public string CreditAccountName { get; set; }
	public int DebitAccount { get; set;}
    public string DebitAccountCode { get; set; }
    public string DebitAccountName { get; set; }
	public string Description { get; set;}
    public string CreatedByName { get; set; }
    public string LastUpdatedByName { get; set; }

	#endregion
}
}
