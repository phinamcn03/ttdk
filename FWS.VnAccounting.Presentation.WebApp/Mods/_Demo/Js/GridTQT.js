var lastsel;
datePick = function (elem) {
    $(elem).autocomplete({
        source: ["aaaaa", "apple", "atom"],
        focus: function (event, ui) {
            log("focus: " + ui.item.label);
        },
        select: function (event, ui) {
            log("select: " + ui.item.label);
        },
        change: function (event, ui) {
            log("change: " + (ui.item ? ui.item.label : "<no item>"));
        }
    });
}
autoselect1 = function (elem) {
    //gs_StockName
    var sel = '<option value="">Select one...</option>'
		+ '<option value="ActionScript">ActionScript</option>'
		+ '<option value="AppleScript">AppleScript</option>'
        + '<option value="COBOL">COBOL</option>'
		+ '<option value="ColdFusion">ColdFusion</option>'
		+ '<option value="Erlang">Erlang</option>';
    $(elem).html(sel);
}
autoselect = function (elem) {
    var sel = ' <select id="combobox">'
		+ '<option value="">Select one...</option>'
		+ '<option value="ActionScript">ActionScript</option>'
		+ '<option value="AppleScript">AppleScript</option>'
        +'<option value="COBOL">COBOL</option>'
		+'<option value="ColdFusion">ColdFusion</option>'
		+'<option value="Erlang">Erlang</option>'
	+ '</select>';
    $(elem).parent().html(sel);
}
$(function () {
    var mydata = [
            { Code: "ST-0001", StockName: "Kho Việt Nam", ParentName: "", Description: "", Action: '<span class="ui-icon ui-icon-trash" style="display:inline-block;"></span></div>' + '/' + '<span class="ui-icon ui-icon-pencil" style="display:inline-block;"></span>' },
            { Code: "ST-0002", StockName: "Kho HCM", ParentName: "Kho Việt Nam", Description: "", Action: '<span class="ui-icon ui-icon-trash" style="display:inline-block;"></span></div>' + '/' + '<span class="ui-icon ui-icon-pencil" style="display:inline-block;"></span>' },
            { Code: "ST-0003", StockName: "Kho Hà Nội", ParentName: "Kho Việt Nam", Description: "", Action: '<span class="ui-icon ui-icon-trash" style="display:inline-block;"></span></div>' + '/' + '<span class="ui-icon ui-icon-pencil" style="display:inline-block;"></span>' },
            { Code: "ST-0004", StockName: "Kho HCM", ParentName: "Kho Việt Nam", Description: "", Action: '<span class="ui-icon ui-icon-trash" style="display:inline-block;"></span></div>' + '/' + '<span class="ui-icon ui-icon-pencil" style="display:inline-block;"></span>' },
            { Code: "ST-0005", StockName: "Kho Hải Phòng", ParentName: "Kho Việt Nam", Description: "", Action: '<span class="ui-icon ui-icon-trash" style="display:inline-block;"></span></div>' + '/' + '<span class="ui-icon ui-icon-pencil" style="display:inline-block;"></span>' },
            { Code: "ST-0006", StockName: "Kho Đà Nẵng", ParentName: "Kho Việt Nam", Description: "", Action: '<span class="ui-icon ui-icon-trash" style="display:inline-block;"></span></div>' + '/' + '<span class="ui-icon ui-icon-pencil" style="display:inline-block;"></span>' },
            { Code: "ST-0007", StockName: "Kho Nam Định", ParentName: "Kho Việt Nam", Description: "", Action: '<span class="ui-icon ui-icon-trash" style="display:inline-block;"></span></div>' + '/' + '<span class="ui-icon ui-icon-pencil" style="display:inline-block;"></span>' },
            { Code: "ST-0008", StockName: "Kho Thanh Hóa", ParentName: "Kho Việt Nam", Description: "", Action: '<span class="ui-icon ui-icon-trash" style="display:inline-block;"></span></div>' + '/' + '<span class="ui-icon ui-icon-pencil" style="display:inline-block;"></span>' },
            { Code: "ST-0009", StockName: "Kho Cao Bằng", ParentName: "Kho Việt Nam", Description: "", Action: '<span class="ui-icon ui-icon-trash" style="display:inline-block;"></span></div>' + '/' + '<span class="ui-icon ui-icon-pencil" style="display:inline-block;"></span>' },
            { Code: "ST-0007", StockName: "Kho Nam Định", ParentName: "Kho Việt Nam", Description: "", Action: '<span class="ui-icon ui-icon-trash" style="display:inline-block;"></span></div>' + '/' + '<span class="ui-icon ui-icon-pencil" style="display:inline-block;"></span>' },
            { Code: "ST-0008", StockName: "Kho Thanh Hóa", ParentName: "Kho Việt Nam", Description: "", Action: '<span class="ui-icon ui-icon-trash" style="display:inline-block;"></span></div>' + '/' + '<span class="ui-icon ui-icon-pencil" style="display:inline-block;"></span>' },
            { Code: "ST-0009", StockName: "Kho Cao Bằng", ParentName: "Kho Việt Nam", Description: "", Action: '<span class="ui-icon ui-icon-trash" style="display:inline-block;"></span></div>' + '/' + '<span class="ui-icon ui-icon-pencil" style="display:inline-block;"></span>' },
            { Code: "ST-0007", StockName: "Kho Nam Định", ParentName: "Kho Việt Nam", Description: "", Action: '<span class="ui-icon ui-icon-trash" style="display:inline-block;"></span></div>' + '/' + '<span class="ui-icon ui-icon-pencil" style="display:inline-block;"></span>' },
            { Code: "ST-0008", StockName: "Kho Thanh Hóa", ParentName: "Kho Việt Nam", Description: "", Action: '<span class="ui-icon ui-icon-trash" style="display:inline-block;"></span></div>' + '/' + '<span class="ui-icon ui-icon-pencil" style="display:inline-block;"></span>' },
            { Code: "ST-0009", StockName: "Kho Cao Bằng", ParentName: "Kho Việt Nam", Description: "", Action: '<span class="ui-icon ui-icon-trash" style="display:inline-block;"></span></div>' + '/' + '<span class="ui-icon ui-icon-pencil" style="display:inline-block;"></span>' },

            { Code: "ST-0010", StockName: "Kho Cao Bằng", ParentName: "Kho Việt Nam", Description: "", Action: '<span class="ui-icon ui-icon-trash" style="display:inline-block;"></span></div>' + '/' + '<span class="ui-icon ui-icon-pencil" style="display:inline-block;"></span>' }
         ];
    jQuery("#idGrid").jqGrid({
        data: mydata,
        datatype: "local",
        colNames: ['Code', 'Stock Name', 'Parent Name', 'Description', 'Action'],
        colModel: [
                { name: 'Code', index: 'id', width: 100, align: "center", search: true, searchoptions: {attr: { title: 'Select Date'}} },
                { name: 'StockName', index: 'invdate', width: 200, editable: true },
                { name: 'ParentName', index: 'name', width: 200, editable: true, search: true, stype: 'select', searchoptions: { dataInit: autoselect1, value: "1:All", attr: { title: 'Select Date'}} },
                { name: 'Description', index: 'amount', width: 300 },
                { name: 'Action', index: 'tax', width: 100, align: "center", search: false }
            ],
        height: 100,
        rowNum: 10,
        rowTotal: 50,
        pager: '#pGrid',
        sortname: 'id',
        loadonce: true,
        viewrecords: true,
        sortorder: "desc",
        onSelectRow: function (id) {
            if (id && id !== lastsel) {
                jQuery('#idGrid').jqGrid('restoreRow', lastsel);
                jQuery('#idGrid').jqGrid('editRow', id, true); lastsel = id;
            }
        },
        editurl: '../Mods/_Global/Service/GetDataJsonTree.ashx'
    });
    //  jQuery("#idGrid").jqGrid('navGrid', '#pGrid', {});

    $("#idGrid").jqGrid('navGrid', '#pGrid', { edit: false, add: false, del: false, search: false, refresh: false });
    //jQuery("#idGrid").jqGrid('inlineNav', "#pGrid");

    $("#idGrid").jqGrid('navButtonAdd', "#pGrid", { caption: "ADD", title: "Add", buttonicon: 'ui-icon-plus',
        onClickButton: function () {
            console.log($("#idGrid")[0]);
            alert($("#gs_Code").val()+"_"+$("#gs_StockName").val());
           // $("#idGrid")[0].toggleToolbar()
        }
    });
    $("#idGrid").jqGrid('navButtonAdd', "#pGrid", { caption: "Toggle", title: "Toggle Search Toolbar", buttonicon: 'ui-icon-pin-s',
        onClickButton: function () {
            $("#idGrid")[0].toggleToolbar()
        }
    });
    $("#idGrid").jqGrid('navButtonAdd', "#pGrid", { caption: "Clear", title: "Clear Search", buttonicon: 'ui-icon-refresh',
        onClickButton: function () {
            $("#idGrid")[0].clearToolbar()
        }
    });
    jQuery("#idGrid").jqGrid('filterToolbar');

    //    $("#idGrid_iladd").click(function () {
    //        $("#idGrid")[0].toggleToolbar()
    //    });

});

(function ($) {
    $.widget("ui.combobox", {
        _create: function () {
            var self = this,
					select = this.element.hide(),
					selected = select.children(":selected"),
					value = selected.val() ? selected.text() : "";
            var input = this.input = $("<input>")
					.insertAfter(select)
					.val(value)
					.autocomplete({
					    delay: 0,
					    minLength: 0,
					    source: function (request, response) {
					        var matcher = new RegExp($.ui.autocomplete.escapeRegex(request.term), "i");
					        response(select.children("option").map(function () {
					            var text = $(this).text();
					            if (this.value && (!request.term || matcher.test(text)))
					                return {
					                    label: text.replace(
											new RegExp(
												"(?![^&;]+;)(?!<[^<>]*)(" +
												$.ui.autocomplete.escapeRegex(request.term) +
												")(?![^<>]*>)(?![^&;]+;)", "gi"
											), "<strong>$1</strong>"),
					                    value: text,
					                    option: this
					                };
					        }));
					    },
					    select: function (event, ui) {
					        ui.item.option.selected = true;
					        self._trigger("selected", event, {
					            item: ui.item.option
					        });
					    },
					    change: function (event, ui) {
					        if (!ui.item) {
					            var matcher = new RegExp("^" + $.ui.autocomplete.escapeRegex($(this).val()) + "$", "i"),
									valid = false;
					            select.children("option").each(function () {
					                if ($(this).text().match(matcher)) {
					                    this.selected = valid = true;
					                    return false;
					                }
					            });
					            if (!valid) {
					                // remove invalid value, as it didn't match anything
					                $(this).val("");
					                select.val("");
					                input.data("autocomplete").term = "";
					                return false;
					            }
					        }
					    }
					})
					//.addClass("ui-widget ui-widget-content ui-corner-left");

            input.data("autocomplete")._renderItem = function (ul, item) {
                return $("<li></li>")
						.data("item.autocomplete", item)
						.append("<a>" + item.label + "</a>")
						.appendTo(ul);
            };

            this.button = $("<button type='button'>&nbsp;</button>")
					.attr("tabIndex", -1)
					.attr("title", "Show All Items")
					.insertAfter(input)
					.button({
					    icons: {
					        primary: "ui-icon-triangle-1-s"
					    },
					    text: false
					})
					.removeClass("ui-corner-all")
					//.addClass("ui-corner-right ui-button-icon")
					.click(function () {
					    // close if already visible
					    if (input.autocomplete("widget").is(":visible")) {
					        input.autocomplete("close");
					        return;
					    }

					    // work around a bug (likely same cause as #5265)
					    $(this).blur();

					    // pass empty string as value to search for, displaying all results
					    input.autocomplete("search", "");
					    input.focus();
					});
        },

        destroy: function () {
            this.input.remove();
            this.button.remove();
            this.element.show();
            $.Widget.prototype.destroy.call(this);
        }
    });
})(jQuery);

$(function () {
    $("#gs_ParentName").combobox();
    $("#toggle").click(function () {
        $("#gs_ParentName").toggle();
    });
});