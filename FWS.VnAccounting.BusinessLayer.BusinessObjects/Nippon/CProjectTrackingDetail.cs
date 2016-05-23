using System;
using System.Collections.Generic;
using System.Text;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Base;

namespace FWS.VnAccounting.BusinessLayer.BusinessObjects.Nippon
{
    [Serializable]
    public class CProjectTrackingDetail : CObjectBase
    {
        public CProjectTrackingDetail()
        {
        }
        #region Public property

        public int ID { get; set; }
        public int? ProjectTrackingID { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public int? Duration { get; set; }
        public int? IsCompleted { get; set; }
        public string Users { get; set; }
        public int? Status { get; set; }
        public DateTime? CreatedDateTime { get; set; }
        public int? CreatedBy { get; set; }
        public DateTime? LastUpdatedDateTime { get; set; }
        public int? LastUpdatedBy { get; set; }

        #endregion
    }
}
