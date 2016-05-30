/*
* Author: sang.t.phan
* Created Date: 2011/12/30
*/
function SelectAccordion(modid) {
    var modTitle = $("#Accordion-Menu div[moduleid='" + modid + "']").attr("modtitle");
    if (modTitle != null) {
        $("#Accordion-Menu").accordion("select", modTitle);
    }
}
function SelectTree(nodeId) {
    var $current = $("#Accordion-Menu").accordion("getSelected");
    var tree = $current.find("ul.tree");
    tree.tree('select', $("div[node-id='1']"));
}

function CInterfaceFunction() {
    var thisObj = this;
    this.FilterRun = {};
    this.InitHash = function () {
        var hash = location.hash || "";
        var fn_GetAppID = function (appCode) {
            return $('#Navigation').find("a[applicationcode='" + appCode + "']").attr("applicationid") || "0";
        };
        var fn_InitModule = function (appCode) {
            var appID = fn_GetAppID(appCode);
            //console.log('fn_InitModule', appCode);
            thisObj.InitModule('#Accordion-Menu', { applicationId: appID });
            fn_SetAppActive(appCode);
        };
        var fn_SetAppActive = function (appCode) {
            $("#Navigation").find('a').removeClass('active');
            $('#Navigation').find("a[applicationcode='" + appCode + "']").addClass("active");
        };
        if (hash) {
            //console.log(hash);
            if (hash.indexOf("Mods/Dashboard") != -1) {
                fn_InitModule("Dashboard");
            }
            if (hash.indexOf("Mods/Items") != -1) {
                fn_InitModule("List");
            }
            else if (hash.indexOf("Mods/AR") != -1) {
                fn_InitModule("SaleAr");
            }
            else if (hash.indexOf("Mods/AP") != -1) {
                fn_InitModule("PurchasesAP");
            }
            else if (hash.indexOf("Mods/Inventory") != -1) {
                fn_InitModule("Inventory");
            }
            else if (hash.indexOf("Mods/Report") != -1) {
                fn_InitModule("Report");
            }
            else if (hash.indexOf("Mods/Cash") != -1 || hash.indexOf("Mods/Asset") != -1) {
                fn_InitModule("CashBanking");
            }
            else if (hash.indexOf("Mods/Report") != -1) {
                fn_InitModule("Report");
            }
            else if (hash.indexOf("Mods/Accounts") != -1) {
                fn_InitModule("Tools");
            }
        }
        else {
            fn_InitModule("List");
        }
    };
    this.InitApp = function (container) {
        //console.log('InitApp', container);
        var userID = FWS.System.Core.UserID();
        if (!userID) {
            return false;
        }
        thisObj.FilterRun = {};

        FWS.System.IO.Ajax({
            url: '../Mods/_Core/Service/CoreService.asmx/GetInterfaceFunctionByParentIDInJson',
            type: 'POST',
            data: {
                InputValue: $.string.Format('<InputValue UserID="{0}" ParentID="0"/>', userID)
            },
            success: function (data, textStatus, jqXHR) {
                data = $(data).find('string').text();
                data = eval("(" + data + ")");
                data = data.d;
                $(container).html("<ul></ul>");
                var template = '<li><a href="javascript:void(0)" applicationid="{0}" applicationcode="{1}" class="{2}"><span>{3}</span></a></li>';
                var _html = '', active = '';
                $.each(data, function (index, item) {
                    var isDefault = item.IsDefault || "false";
                    //console.log('::InitApp', item);
                    isDefault = isDefault.toLowerCase();
                    if (isDefault == 'true') {
                        active = 'active';
                    }
                    else {
                        active = '';
                    }
                    _html += $.string.Format('<li><a href="javascript:void(0)" applicationid="{0}" applicationcode="{1}" class="{2}" filterid={4}><span>{3}</span></a></li>',
                                                item.ID, item.Code, active, item.Name, item.filterID);
                });
                $(container).find('ul').html(_html);
                /* Event Click */
                $(container + ' ul li a').unbind("click");
                $(container + ' ul li a').click(function () {
                    location.hash = "";
                    $(container).find('a').removeClass('active');
                    $(this).addClass('active');
                    var applicationId = $(this).attr("applicationid");
                    thisObj.InitModule('#Accordion-Menu', { applicationId: applicationId });
                });
                /* Default Init Hash */
                thisObj.InitHash();
            }
        });
    };
    this.InitModule = function (container, opts) {
        //console.log('InitModule', container, opts);
        var _options = {
            applicationId: 0
        };
        $.extend(true, _options, opts);
        var userID = FWS.System.Core.UserID() || '';
        var inputValue = $.string.Format('<InputValue UserID="{0}" ParentID="{1}"/>', userID, _options.applicationId);
        FWS.System.IO.Ajax({
            url: '../Mods/_Core/Service/CoreService.asmx/GetInterfaceFunctionByParentIDInJson',
            type: 'POST',
            data: { 'InputValue': inputValue },
            success: function (data, textStatus, jqXHR) {
                data = $(data).find('string').text();
                data = eval("(" + data + ")");
                data = data.d;
                var _html = '';
                $.each(data, function (index, item) {
                    //console.log('::InitModule', item);
                    var isDefault = item.IsDefault || "false";
                    var FilterID = item.FilterID || '1';
                    var isSelected = "";
                    isDefault = isDefault.toLowerCase();
                    if (isDefault == 'true')
                        isSelected = 'selected="true"';
                    var isLoad = item.isLoad || "false";
                    isLoad = isLoad.toLowerCase() == "true" ? 1 : 0;
                    _html += $.string.Format('<div url="{0}" moduleid="{1}" title="{2}" modTitle="{2}" isLoad="{3}" {4} filterid={5}></div>',
                    item.LinkURL, item.ID, item.Name, isLoad, isSelected, item.FilterID);
                });
                if ($(container).hasClass("accordion")) {
                    $("<div id='" + $(container).attr("id") + "'></div>").insertAfter(container);
                    $(container).remove();
                }
                $(container).html(_html).attr("applicationID", _options.applicationId);
                $(container).accordion({
                    animate: true,
                    fit: true,
                    border: false,
                    onSelect: function (title) {
                        var $current = $(this).accordion("getSelected");
                        var moduleUrl = $current.attr("url");
                        var moduleID = $current.attr('moduleid');
                        var filterID = $current.attr('filteriD');
                        var moduleTitle = $current.attr('modtitle');
                        if ($current.find("ul.tree").length) {
                            var optContent = {
                                template: moduleUrl,
                                filterID: filterID,
                                id: "Mod-" + moduleID,
                                title: moduleTitle
                            };
                            //console.log('::InitModule', optContent);
                            FWS.Web.Core.LoadContent(optContent);
                            return false;
                        }

                        var inputValue = encodeURIComponent($.string.Format('<InputValue UserID="{0}" ModuleID="{1}" />', userID, moduleID));
                        $current.html("<ul></ul>");
                        $current.find("ul").tree({
                            url: "../Mods/_Global/Service/GetDataJsonTree.ashx?inputValue=" + inputValue,
                            animate: true,
                            onBeforeSelect: function (node) {
                                var $tree = $(this);
                                var $selected = $tree.tree('getSelected');
                                if ($selected) {
                                    if ($selected.id == node.id) {
                                        return false;
                                    }
                                }
                                var ifuncID = node.id;
                                var filterID = node.attributes.filterID;
                                var ifuncUrl = node.attributes.url;
                                var ifuncTitle = node.text;
                                var ifuncIsLoad = node.attributes.isLoad;
                                var ifuncOpenType = node.attributes.openType;

                                var optContent = {
                                    'template': ifuncUrl,
                                    'id': "IFunc-" + ifuncID,
                                    'filterID': filterID,
                                    'isLoad': ifuncIsLoad,
                                    'title': ifuncTitle,
                                    'openType': ifuncOpenType,
                                    'callbackComplete': function () {
                                        //console.log('::callbackComplete::', thisObj.FilterRun[filterID]);
                                        if (typeof filterID != 'undefined' && filterID != '' && typeof thisObj.FilterRun[filterID] == 'undefined') {
                                            thisObj.FilterRun[filterID] = node;

                                            var gfilter = new CFilter({ FilterID: filterID.toString() });
                                            gfilter.auto({
                                                success: function (data) {
                                                    if (data) {
                                                        if (data.ID) {
                                                            if (data.AutoRun == '1') {
                                                                gfilter.autorun({
                                                                    success: function (data) {
                                                                        FWS.System.IO.AjaxOverlay.Show();
                                                                        if (typeof data == 'object')
                                                                            data.success = FWS.System.IO.AjaxOverlay.Hide;
                                                                        $.callFrameFunction("#IFunc-" + ifuncID + ' iframe.vtntFrame', 'filterData', data);
                                                                    }
                                                                });
                                                            }
                                                            if (data.AutoShow == '1') {
                                                                $('#ContentCoreMain-Layout #FWS-Main-Filter').trigger('click');
                                                            }
                                                        }
                                                        if (data.ViewerType == 'GRID') {
                                                            $('#ContentCoreMain-Layout #FWS-Main-Export').show();
                                                            //node.attributes.isexport = true;
                                                            thisObj.FilterRun[filterID].attributes.isexport = true;
                                                        }
                                                        else {
                                                            $('#ContentCoreMain-Layout #FWS-Main-Export').hide();
                                                            //node.attributes.isexport = false;
                                                            thisObj.FilterRun[filterID].attributes.isexport = false;
                                                        }
                                                    }
                                                }
                                            });
                                        }
                                    }
                                };
                                if (typeof filterID != 'undefined' && filterID != '' && typeof thisObj.FilterRun[filterID] != 'undefined' && thisObj.FilterRun[filterID].attributes) {
                                    if (thisObj.FilterRun[filterID].attributes.isexport) {
                                        $('#ContentCoreMain-Layout #FWS-Main-Export').show();
                                    }
                                    else {
                                        $('#ContentCoreMain-Layout #FWS-Main-Export').hide();
                                    }
                                }

                                switch (ifuncOpenType) {
                                    case "0":
                                        FWS.Web.Core.LoadContent(optContent);
                                        break;
                                    case "10":
                                        FWS.Web.Core.LoadPopup(optContent);
                                        break;
                                    case "11":
                                        FWS.Web.Core.LoadPopup(optContent);
                                        break;
                                    default:
                                        break;
                                }
                            },
                            onSelect: function (node) {
                            },
                            onLoadSuccess: function (node, data) {
                                var $tree = $(this);
                                var hash = location.hash || "";
                                if (hash.length) {
                                    hash = hash.replace("#", "");
                                    var $nodeID = null;
                                    $.each(data, function (index, item) {
                                        var url = item.attributes.url;
                                        if (url == hash) {
                                            $nodeID = $tree.find(".tree-node[node-id='" + item.id + "']");
                                        }
                                    });
                                    if ($nodeID) {
                                        $nodeID.click();
                                    }
                                    else {
                                        var optContent = {
                                            template: moduleUrl,
                                            id: "Mod-" + moduleID,
                                            title: moduleTitle
                                        };
                                        //console.log('::InitModule [2]', optContent);
                                        FWS.Web.Core.LoadContent(optContent);
                                    }
                                }
                                else {
                                    // $tree.find("li:eq(0) .tree-node").click();
                                    var optContent = {
                                        template: moduleUrl,
                                        id: "Mod-" + moduleID,
                                        title: moduleTitle
                                    };
                                    //console.log('::InitModule [3]', optContent);
                                    FWS.Web.Core.LoadContent(optContent);
                                }
                                FWS.System.IO.AjaxOverlay.Hide();
                            },
                            onBeforeLoad: function (node, param) {
                                if (!node)
                                    FWS.System.IO.AjaxOverlay.Show();
                            },
                            onLoadError: function () {
                                FWS.System.IO.AjaxOverlay.Hide();
                            }
                        });
                    }
                });
            }
        });
    };
    this.SelectIFunc = function (opts) {
        var options = {
            appCode: '',
            appURL: '',
            caption: ''
        }
        $.extend(true, options, opts);
        location.hash = options.appURL;
        thisObj.InitHash();
    };
};