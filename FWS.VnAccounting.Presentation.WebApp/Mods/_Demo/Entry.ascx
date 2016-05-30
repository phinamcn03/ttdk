<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="Entry.ascx.cs" Inherits="FWS.VnAccounting.Presentation.WebApp.Mods.Entry.Entry1" %>
<script type="text/javascript">
    $(function () {
        $('#win_taikhoan').window({
            width: 500,
            height: 250,
            modal: true
        });
    });
</script>
<style type="text/css">
    fieldset
    {
        border: 0;
    }
    fieldset > div
    {
        padding: 5px;
    }
    fieldset label
    {
        width: 115px;
        display: inline-block;
    }
    fieldset input[type=text], fieldset select
    {
        width: 330px;
        display: inline-block;
    }
    fieldset input[type=text], fieldset textarea, fieldset select, fieldset button
    {
        height: 22px;
        -ms-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        border: solid 1px #999;
    }
</style>
<div id="win_taikhoan" title="Tài khoản">
    <fieldset>
        <div>
            <label>Mã tài khoản:</label>
            <input type="text" />
        </div>
        <div>
            <label>Tài khoản mẹ:</label>
            <select>
                <option></option>
            </select>
        </div>
        <div>
            <label>Tên tài khoản:</label>
            <input type="text" />
        </div>
        <div>
            <label>Tên tài khoản 2:</label>
            <input type="text" />
        </div>
        <div>
            <label>Là tài khoản công nợ:</label>
            <input type="checkbox" />
        </div>
        <div>
            <label>Là tài khoản sổ cái:</label>
            <input type="checkbox" />
        </div>
    </fieldset>
</div>
