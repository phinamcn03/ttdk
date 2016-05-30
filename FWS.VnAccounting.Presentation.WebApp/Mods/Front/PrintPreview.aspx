<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="PrintPreview.aspx.cs" Inherits="PMSA.iMarkets.Presentation.WebApp.Mods.Grid.PrintPreview" ValidateRequest="false" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="content-type" content="text/plain; charset=UTF-8" />
    <title>Export Preview</title>
    <link href="../_core.hst/dist/jquery.handsontable.full.css" rel="stylesheet" type="text/css" />
    <link href="../_core.hst/css/handsontable.core.css" rel="stylesheet" type="text/css" />
    <link href="../_core.hst/css/Mods.CoreFilter.Grid.css" rel="stylesheet" type="text/css" />
    <script src="../Js/jq/jquery.min.1.9.1.js" type="text/javascript"></script>    
    <script type="text/javascript">
        function _preview(html) {
            $('#preview-content').html(html);
            $('#preview-content table.htCore colgroup').remove();
        };
        function _print() {
            window.setTimeout(function () {
                window.print();
            }, 500);
        };
        function _clear() {
            $('#data,#filetype').val('');
        };
        function _export(type, data, callback) {
            var _data = data;
            if (typeof _data == 'undefined' || _data == null) {
                var table_div = document.getElementById('preview-content');
                _data = table_div.innerHTML;
            }
            $('#data').val('\uFEFF' + _data);
            if (type) { $('#filetype').val(type); }
            $('#frmPreview').submit();
            window.setTimeout(function () {
                if (callback) callback();
            }, 7000);
        };
    </script>
    <style type="text/css">
        body
        {
            background: #fff;
        }
        #preview-content, #preview-content table
        {
            margin: 0 auto;
        }
        #preview-content div.title
        {
            font-size: 40px;
            text-align: center;
            padding: 100px;
        }
    </style>
</head>
<body>
    <form id="frmPreview" runat="server" action="PrintPreview" method="post">
    <div id="preview-content">
        <div class="title">
            Waiting for preview...</div>
    </div>
    <input type="hidden" id="data" name="data" />
    <input type="hidden" id="filetype" name="filetype" />
    </form>
</body>
</html>
