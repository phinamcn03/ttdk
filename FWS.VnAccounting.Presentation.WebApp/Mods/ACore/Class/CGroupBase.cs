using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using FWS.VnAccounting.Presentation.WebApp.Mods.Core;
using FWS.VnAccounting.Presentation.WebApp.Mods.Global;

namespace FWS.VnAccounting.Presentation.WebApp.Mods.ACore.Class
{
    public class CGroupBase
    {
        private ServiceREF.CustomerService.CustomerService customerService;
        private ServiceREF.InventoryService.InventoryService inventoryService;
        private ServiceREF.VendorService.VendorService vendorService;

        public CGroupBase()
        {
            customerService = new ServiceREF.CustomerService.CustomerService();
            inventoryService = new ServiceREF.InventoryService.InventoryService();
            vendorService = new ServiceREF.VendorService.VendorService();
        }

        public string GetGrid(int gridID, string instant, int currPage, int NumberRowOfPage, string exAttribute)
        {
            string InputValue = CXmlPara.CreatePara(new CPara[]{
                    new CPara("PageIndex", currPage.ToString()),
                    new CPara("NumberRowOfPage", NumberRowOfPage.ToString())
                },
                exAttribute
            );

            switch (instant)
            {
                case "Customer":
                    ServiceREF.CustomerService.COutputValue coutputValue = new ServiceREF.CustomerService.COutputValue();
                    ServiceREF.CustomerService.CCustomerGroup[] clist = customerService.GetCustomerGroupList(InputValue, ref coutputValue);
                    return CGrid.ToJsonForHandle<ServiceREF.CustomerService.CCustomerGroup>(0, gridID, clist, currPage, coutputValue.TotalPage, coutputValue.TotalRow);
                case "Product":
                    ServiceREF.InventoryService.COutputValue poutputValue = new ServiceREF.InventoryService.COutputValue();
                    ServiceREF.InventoryService.CItemGroup[] plist = inventoryService.GetInventoryItemGroupList(InputValue, ref poutputValue);
                    return CGrid.ToJsonForHandle<ServiceREF.InventoryService.CItemGroup>(0, gridID, plist, currPage, poutputValue.TotalPage, poutputValue.TotalRow);
                case "Vendor":
                    ServiceREF.VendorService.COutputValue vpageinfo = new ServiceREF.VendorService.COutputValue();
                    ServiceREF.VendorService.CVendorGroup[] vlist = vendorService.GetVendorGroupList(InputValue, ref vpageinfo);
                    return CGrid.ToJsonForHandle<ServiceREF.VendorService.CVendorGroup>(0, gridID, vlist, currPage, vpageinfo.TotalPage, vpageinfo.TotalRow);
            }
            return "{}";
        }

        public string UpdateAction(string funcPara, string instant)
        {
            string InputValue = CXmlPara.CreatePara(funcPara);
            switch (instant)
            {
                case "Customer":
                    ServiceREF.CustomerService.CApplicationMessage cmessage = customerService.UpdateCustomerGroup(InputValue);
                    return CJson.SerializeObject(cmessage);
                case "Product":
                    ServiceREF.InventoryService.CApplicationMessage imessage = inventoryService.UpdateInventoryItemGroup(InputValue);
                    return CJson.SerializeObject(imessage);
                case "Vendor":
                    ServiceREF.VendorService.CApplicationMessage vmessage = vendorService.UpdateVendorGroup(InputValue);
                    return CJson.SerializeObject(vmessage);
            }
            return "[{}]";
        }
        public string GetItem(string funcPara, string instant)
        {
            string InputValue = CXmlPara.CreatePara(funcPara);
            switch (instant)
            {
                case "Customer":
                    ServiceREF.CustomerService.CCustomerGroup customer = customerService.GetCustomerGroup(InputValue);
                    return CJson.SerializeObject(customer);
                case "Product":
                    ServiceREF.InventoryService.CItemGroup product = inventoryService.GetInventoryItemGroup(InputValue);
                    return CJson.SerializeObject(product);
                case "Vendor":
                    ServiceREF.VendorService.CVendorGroup vendor = vendorService.GetVendorGroup(InputValue);
                    return CJson.SerializeObject(vendor);
            }
            return "[{}]";
        }
    }
}