using System;
using System.Collections.Generic;
using System.Text;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Base;

namespace FWS.VnAccounting.BusinessLayer.BusinessObjects.Core
{
   
    [Serializable]
    public class CResource : CObjectBase
    {
	    public CResource()
	    {
		    CSVFields = new string[]{"ID","IDKey","Type","Code","Name","Description","Summary","Detail","ParentID","ParentKey","ParentName","Value","ChildCount","Level","ZOrder","LinkURL","ThumbnailImage","Image","ActiveImage","DisableImage","XmlAttribute","SysZOrder"};
	    }
	    #region Public property
 
	    public int ID { get; set;}
	    public string IDKey { get; set;}
	    public int Type { get; set;}
	    public string Code { get; set;}
	    public string Name { get; set;}
	    public string Description { get; set;}
	    public string Summary { get; set;}
	    public string Detail { get; set;}
	    public int? ParentID { get; set;}
	    public string ParentKey { get; set;}
	    public string ParentName { get; set;}
	    public string Value { get; set;}
        public string Value1 { get; set; }
        public string Value2 { get; set; }
        public string Value3 { get; set; }
	    public int ChildCount { get; set;}
	    public int Level { get; set;}
	    public string ZOrder { get; set;}
	    public string LinkURL { get; set;}
	    public string ThumbnailImage { get; set;}
	    public string Image { get; set;}
	    public string ActiveImage { get; set;}
	    public string DisableImage { get; set;}
	    public string XmlAttribute { get; set;}
	    public string SysZOrder { get; set;}

	    #endregion

    }

}
