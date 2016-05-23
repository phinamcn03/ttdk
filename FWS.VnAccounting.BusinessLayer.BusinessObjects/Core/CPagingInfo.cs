using System;
using System.Collections.Generic;
using System.Text;
using FWS.VnAccounting.BusinessLayer.BusinessObjects.Base;

namespace FWS.VnAccounting.BusinessLayer.BusinessObjects.Core
{
    [Serializable]
    public class CPagingInfo : CObjectBase
    {
        public int TotalPage { get; set; }
        public int PageIndex { get; set; }
        public int MaxRow { get; set; }
        public string SortColumn { get; set; }
        public string SortType { get; set; }
        public int TotalRow { get; set; }

        public CPagingInfo() { }
        public CPagingInfo(int numPage,int currentPage,int rowPerPage) {
            this.TotalPage = numPage;
            this.PageIndex = currentPage;
            this.MaxRow = rowPerPage;
        }
    }
}
