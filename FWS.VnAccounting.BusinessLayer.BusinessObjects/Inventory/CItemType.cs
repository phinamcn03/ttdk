using System;
using System.Collections.Generic;
using System.Text;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Base;

namespace FWS.VnAccounting.BusinessLayer.BusinessObjects.Inventory
{
    [Serializable]
    public class CItemType : CObjectBase
    {
        public CItemType()
        {
            CSVFields = new string[] { "ID", "Code", "Name", "Descripion" };
        }
        #region Public property

        public string ID { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public string Descripion { get; set; }
        public string CreatedByName { get; set; }
        public string LastUpdatedByName { get; set; }

        #endregion
    }
}
