<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="ItemEntry.ascx.cs" Inherits="FWS.VnAccounting.Presentation.WebApp.Mods.Items.ItemEntry" %>
<asp:Literal runat="server" ID="ltrScriptClient"></asp:Literal>
<script type="text/javascript" src="<%= Page.ResolveUrl("../Mods/Items/Js/Mods.Items.ProductEntry.js") %>"></script>
<div class="easyui-layout" fit="true" id="ItemEntry-Content">
    <div region="center" border="false" style="overflow: hidden;">
        <fieldset class="border-layout-form" style="height:100%">
            <div style="padding: 0;">
                <!--tabs-->
                <div id="item-tabs" class="SubTab ui-tabs">
                    <ul>
                        <li><a href="#tab-general"><span>General</span></a></li>
                        <li><a href="#tab-pharmacy"><span>Pharmacy</span></a></li>
                        <li><a href="#tab-ncc"><span>Nhà cung cấp</span></a></li>
                        <li><a href="#tab-cunghoatchat"><span>Cùng hóa chất</span></a></li>
                        <li><a href="#tab-tonkho"><span>Chi tiết tồn kho</span></a></li>
                    </ul>
                    <div id="tab-general" class="item-tab">
                        <div class="easyui-layout" style="height: 146px;">
                            <div region="west" border="false" style="width: 350px;">
                                <fieldset class="border-layout-subform">
                                    <div>
                                        <label style="width: 90px;">
                                            Code:</label>
                                        <input type="text" id="ItemEntry-txtCode" style="width: 240px;" />
                                    </div>
                                    <div>
                                        <label style="width: 90px;">
                                            Unit name:</label>
                                        <select id="ItemEntry-cboUnit" style="width: 240px;">
                                        </select>
                                    </div>
                                    <div>
                                        <label style="width: 90px;">
                                            Tax name:</label>
                                        <select id="ItemEntry-cboTax" style="width: 240px;">
                                        </select>
                                    </div>
                                    <div>
                                        <label style="width: 90px;">
                                            Manufacture:</label>
                                        <select id="ItemEntry-cboManufacture" style="width: 240px;">
                                        </select>
                                    </div>
                                    <div>
                                        <label style="width: 90px;">
                                            Cost method:</label>
                                        <select id="ItemEntry-cboCostMethod" style="width: 240px;">
                                        </select>
                                    </div>
                                </fieldset>
                            </div>
                            <div region="center" border="false" style="width: 250px;">
                                <fieldset class="border-layout-subform">
                                    <div>
                                        <label style="width: 90px;">
                                            Item name:</label>
                                        <input type="text" id="ItemEntry-txtName" style="width: 240px;" />
                                    </div>
                                    <div>
                                        <label style="width: 90px;">
                                            Group Name:</label>
                                        <select id="ItemEntry-cboGroup" class="easyui-combotree" style="width: 240px;">
                                        </select>
                                    </div>
                                    <div>
                                        <label style="width: 90px;">
                                            Item type:</label>
                                        <select style="width: 240px;" id="ItemEntry-cboType">
                                        </select>
                                    </div>
                                    <div>
                                        <label style="width: 90px;">
                                            Made in:</label>
                                        <select style="width: 240px;" id="ItemEntry-cboMadeIn">
                                        </select>
                                    </div>
                                    <div>
                                        <label style="width: 90px;">
                                            Price:</label>
                                        <input type="text" id="ItemEntry-txtPrice" style="width: 240px;" />
                                    </div>
                                </fieldset>
                            </div>
                        </div>
                        <div style="margin: 2px; padding: 2px; margin-left: 20px;">
                            <fieldset class="border-layout-subform">
                                <legend>Quy cách đóng gói</legend>
                                <div>
                                    <label style="float: left; width: 74px; margin-left: 8px;">
                                        Quy cách 1:</label>
                                    <select id="ItemEntry-Pack1EvenUnit" class="easyui-combotree" style="width: 100px;
                                        margin: 0 4px;">
                                    </select>
                                    <span style="float: left;">&nbsp;=&nbsp;</span>
                                    <input type="text" id="ItemEntry-Pack1Quantity" style="width: 50px; margin: 0 4px" />
                                    <select id="ItemEntry-Pack1OddUnit" class="easyui-combotree" style="width: 100px;
                                        margin: 0 4px;">
                                    </select>
                                </div>
                                <div>
                                    <label style="float: left; width: 74px; margin-left: 8px;">
                                        Quy cách 2:</label>
                                    <select id="ItemEntry-Pack2EvenUnit" class="easyui-combotree" style="width: 100px;
                                        margin: 0 4px;">
                                    </select>
                                    <span style="float: left;">&nbsp;=&nbsp;</span>
                                    <input type="text" id="ItemEntry-Pack2Quantity" style="width: 50px; margin: 0 4px" />
                                    <select id="ItemEntry-Pack2OddUnit" class="easyui-combotree" style="width: 100px;
                                        margin: 0 4px;">
                                    </select>
                                </div>
                                <div>
                                    <label style="float: left; width: 74px; margin-left: 8px;">
                                        Quy cách 3:</label>
                                    <select id="ItemEntry-Pack3EvenUnit" class="easyui-combotree" style="width: 100px;
                                        margin: 0 4px;">
                                    </select>
                                    <span style="float: left;">&nbsp;=&nbsp;</span>
                                    <input type="text" id="ItemEntry-Pack3Quantity" style="width: 50px; margin: 0 4px" />
                                    <select id="ItemEntry-Pack3OddUnit" class="easyui-combotree" style="width: 100px;
                                        margin: 0 4px;">
                                    </select>
                                </div>
                            </fieldset>
                        </div>
                        <div style="margin: 4px;">
                            <label style="float: left; width: 86px; margin: 4px;">
                                Description:</label>
                            <input type="text" id="ItemEntry-txtDesc" style="width: 590px;" />
                        </div>
                    </div>
                    <div id="tab-pharmacy" class="item-tab">
                        <div class="easyui-layout" style="height: 250px;">
                            <div region="center" border="false" style="width: 350px;">
                                <fieldset class="border-layout-subform">
                                    <div>
                                        <label style="width: 90px;">
                                            Nhóm dược tính:</label>
                                        <select id="ItemEntry-cboBYTGroup" class="easyui-combotree" style="width: 240px;">
                                        </select>
                                        <label style="width: 90px;">
                                            Dạng bào chế:</label>
                                        <input type="text" id="ItemEntry-txtDbc" style="width: 240px;" />
                                    </div>
                                    <div>
                                        <label style="width: 90px;">
                                            Hoạt chất:</label>
                                        <select style="width: 240px;" id="ItemEntry-cboActivePrinciple">
                                        </select>
                                    </div>
                                    <div>
                                        <label style="width: 90px;">
                                            Biệt dược:</label>
                                        <select style="width: 240px;" id="ItemEntry-cboProprietaryName">
                                        </select>
                                    </div>
                                    <div>
                                        <label style="width: 90px;">
                                            Bảo Hiểm YT:</label>
                                        <input type="text" id="ItemEntry-txtHealthInsurancePercent" style="width: 240px;" />
                                    </div>
                                    <div>
                                        <label style="width: 90px;">
                                            Liều dùng:</label>
                                        <input type="text" id="ItemEntry-txtUsingNote" style="width: 240px;" />
                                    </div>
                                </fieldset>
                            </div>
                        </div>
                    </div>
                    <div id="tab-ncc" class="item-tab">
                        <input id="btnAddNewVendor" type="button" value="Thêm NCC" />    
                        <div class="easyui-layout" style="height: 230px;">
                            <div region="center" border="false" style="width: 690px;">
                                <fieldset class="border-layout-list">
                                    <table id="Vendor_Grid" class="SkinGrid">
                                    </table>
                                    <div id="Vendor_gridpage"></div>
                                </fieldset>
                                
                            </div>                            
                        </div>
                    </div>
                    <div id="tab-cunghoatchat" class="item-tab">
                        <div class="easyui-layout" style="height: 280px;">
                            <div region="center" border="false" style="width: 690px;">
                                <table id="ActivePrinciple_Grid" class="SkinGrid"></table>
                                <div id="ActivePrinciple_GridPage"></div>
                            </div>
                        </div>
                    </div>
                    <div id="tab-tonkho" class="item-tab">
                        <div class="easyui-layout" style="height: 280px;">
                            <div region="center" border="false" style="width: 690px;">
                                <table id="TonKho_Grid" class="SkinGrid"></table>
                                <div id="TonKho_GridPage"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--end tabs -->
            </div>
        </fieldset>
    </div>
    <div region="south" class="border-layout-form-action">
        <a id="ItemEntry-btnAddNew" class="easyui-linkbutton" iconcls="icon-save" href="javascript:void(0)">
            Save</a> <a id="ItemEntry-btnCancel" class="easyui-linkbutton" iconcls="icon-cancel"
                href="javascript:void(0)">Cancel</a> <a id="ItemEntry-btnSearch" href="javascript:void(0);"
                    class="easyui-linkbutton" iconcls="icon-search" style="display: none;">Tìm kiếm</a>
    </div>

    <form style="display:none"> 
      <table> 
        <tr id='trv_name'>  
          <td> Name</td> <td id="v_name"><span>content of"myfield"</span></td> 
        </tr>
      </table> 
    </form>
</div>
