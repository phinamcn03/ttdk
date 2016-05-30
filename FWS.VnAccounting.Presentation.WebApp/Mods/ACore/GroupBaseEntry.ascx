<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="GroupBaseEntry.ascx.cs" Inherits="FWS.VnAccounting.Presentation.WebApp.Mods.ACore.GroupBaseEntry" %>
<asp:Literal runat="server" ID="ltrScriptClient"></asp:Literal>
<script type="text/javascript" src="<%= Page.ResolveUrl("../Mods/ACore/Service/GroupBaseEntryHandler.ashx?instantid=" + InstantID) %>"></script>
<div class="easyui-layout" fit="true" id="<%=InstantID + "GroupEntry-Content"%>">
    <div region="center" border="false" style="border: 1px solid #ccc;">
        <fieldset class="border-layout-form">
            <div>                    
                <label id="<%=InstantID + "-lblGroupEntryCode"%>">Mã</label>
                <input type="text" id="<%=InstantID + "-txtGroupEntryCode"%>"style="width:300px;"/>
            </div>
            <div>
                <label id="<%=InstantID + "-lblGroupEntryName"%>">Tên</label>
                <input type="text" id="<%=InstantID + "-txtGroupEntryName"%>" style="width:300px;"/>
            </div>
            <div style="display:none;" class="cproductgroup">
                <label id="<%=InstantID + "-lblGroupEntryDesc"%>">Diễn giải:</label>
                <input type="text" id="<%=InstantID + "-txtGroupEntryDesc"%>" style="width:300px;" />
            </div>
        </fieldset>
    </div>
    <div region="south" class="border-layout-form-action">
        <a class="easyui-linkbutton" iconcls="icon-save" href="javascript:void(0)" id="<%=InstantID + "BaseEntry-btnSave"%>">Lưu</a>
        <a class="easyui-linkbutton" iconcls="icon-cancel" href="javascript:void(0)" id="<%=InstantID + "BaseEntry-btnCancel"%>">Hủy</a>
    </div>
</div>