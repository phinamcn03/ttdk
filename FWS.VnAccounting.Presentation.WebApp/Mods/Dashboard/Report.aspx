<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Report.aspx.cs" Inherits="FWS.VnAccounting.Presentation.WebApp.Mods.Dashboard.Report" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Report Preview</title>
    <script src="../../Mods/_core.hst/Js/jquery.core.js" type="text/javascript"></script>
    <script type="text/javascript">
        function fnPostToHandler(params) {
            var form = $('<form>');
            form.attr('action', '../../Mods/Report/ReportViewer.ashx');
            form.attr('method', 'POST');

            var addParam = function (paramName, paramValue) {
                var input = $('<input type="hidden">');
                input.attr({ 'id': paramName,
                    'name': paramName,
                    'value': paramValue
                });
                form.append(input);
            };

            // Params is an Array.
            if (params instanceof Array) {
                for (var i = 0; i < params.length; i++) {
                    addParam(i, params[i]);
                }
            }
            // Params is an Associative array or Object.
            if (typeof params == 'object') {
                for (var key in params) {
                    if (!$.isFunction(params[key]))
                        addParam(key, params[key]);
                }
            }
            // Submit the form, then remove it from the page
            form.appendTo(document.body);
            form.submit();
            form.remove();

            if ($.isFunction(params.success))
                params.success();
        };
    </script>
</head>
<body>
    <div style=" margin: auto; font-size: 24px; text-align: center; margin-top: 200px;">
        Report loading...
    </div>
</body>
</html>
