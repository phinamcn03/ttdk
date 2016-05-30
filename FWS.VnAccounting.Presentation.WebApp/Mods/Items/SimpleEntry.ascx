<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="SimpleEntry.ascx.cs" Inherits="FWS.VnAccounting.Presentation.WebApp.Mods.Items.SimpleEntry" %>
<asp:Literal runat="server" ID="ltrScriptClient"></asp:Literal>
<script type="text/javascript" src="<%= Page.ResolveUrl("../Mods/Items/Service/SimpleHandler.ashx?instant=" + Instant) %>"></script>
<div class="easyui-layout" fit="true" id="<%=Instant + "-Content"%>">
    <div region="center" border="false" style="border: 1px solid #ccc;">
        <fieldset class="border-layout-form">
            <div>                    
                <label id="<%=Instant + "-lblCode"%>">Mã</label>
                <input type="text" id="<%=Instant + "-txtCode"%>"style="width:300px;"/>
            </div>
            <div>
                <label id="<%=Instant + "-lblName"%>">Tên</label>
                <input type="text" id="<%=Instant + "-txtName"%>" style="width:300px;"/>
            </div>
            <div class="cproductgroup">
                <label id="<%=Instant + "-lblDesc"%>">Diễn giải:</label>
                <input type="text" id="<%=Instant + "-txtDesc"%>" style="width:300px;" />
            </div>
        </fieldset>
    </div>
    <div region="south" class="border-layout-form-action">
        <a class="easyui-linkbutton" iconcls="icon-save" href="javascript:void(0)" id="<%=Instant + "-btnSave"%>">Lưu</a>
        <a class="easyui-linkbutton" iconcls="icon-cancel" href="javascript:void(0)" id="<%=Instant + "-btnCancel"%>">Hủy</a>
    </div>
</div>