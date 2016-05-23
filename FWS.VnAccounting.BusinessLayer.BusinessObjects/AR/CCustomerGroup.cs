using System; 
using System.Collections.Generic; 
using System.Text; 
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Base; 
 
namespace FWS.VnAccounting.BusinessLayer.BusinessObjects.AR
{
[Serializable]
public class CCustomerGroup : CObjectBase
{
	public CCustomerGroup()
	{
		CSVFields = new string[]{"ID","Code","Name","Status","CreatedDateTime","CreatedBy","LastUpdatedDateTime","LastUpdatedBy"};
	}
	#region Public property
 
	public int ID { get; set;}
	public string Code { get; set;}
	public string Name { get; set;}
	public int Status { get; set;}
	public DateTime? CreatedDateTime { get; set;}
	public int? CreatedBy { get; set;}
    public string CreatedByName { get; set; }
	public DateTime? LastUpdatedDateTime { get; set;}
	public int? LastUpdatedBy { get; set;}
    public string LastUpdatedByName { get; set; }
	#endregion
}
}
