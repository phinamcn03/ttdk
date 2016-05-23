using System;
using System.Collections.Generic;
using System.Text;

namespace FWS.VnAccounting.BusinessLayer.BusinessObjects.Inventory
{
    [Serializable]
    public class CActiveIngredient: CInventoryBase
    {
        
        public CActiveIngredient()
        {            
        }
        public CActiveIngredient(CInventoryBase oBase)            
        {
            this.Active = oBase.Active;
            this.Code = oBase.Code;
            this.CreatedBy = oBase.CreatedBy;
            this.CreatedByName = oBase.CreatedByName;
            this.CreatedDateTime = oBase.CreatedDateTime;
            this.Description = oBase.Description;
            this.Extend = oBase.Extend;
            this.ID = oBase.ID;
            this.LastUpdatedBy = oBase.LastUpdatedBy;
            this.LastUpdatedByName = oBase.LastUpdatedByName;
            this.LastUpdatedDateTime = oBase.LastUpdatedDateTime;
            this.Name = oBase.Name;
        }
    }
}
