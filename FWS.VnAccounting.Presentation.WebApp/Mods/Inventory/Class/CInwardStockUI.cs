using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ServiceREF.InventoryService;
using ServiceREF.GeneralLedgerService;
using System.Text;
using FWS.VnAccounting.Presentation.WebApp.Mods.Global;
using FWS.VnAccounting.Presentation.WebApp.Mods.Core;
using ServiceREF.CoreService;
namespace FWS.VnAccounting.Presentation.WebApp.Mods.Inventory.Class
{
    public class CInwardStockUI
    {
        #region private Information

        private InventoryService iv_service;
        private ServiceREF.CoreService.CoreService core_service;
        private GeneralLedgerService gl_service;

        #endregion

        public CInwardStockUI()
        {
            iv_service = new InventoryService();
            core_service = new ServiceREF.CoreService.CoreService();
            gl_service = new GeneralLedgerService();
        }
        #region InwardStock
        
      
        #endregion

        #region InwardStockEntry

      
        #endregion

        #region Defination

      
        
        #endregion
    }
}