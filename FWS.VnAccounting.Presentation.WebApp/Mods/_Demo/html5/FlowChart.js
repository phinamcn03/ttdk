Raphael.fn.arrow = function (x1, y1, x2, y2, size, color) {
    var angle = Math.atan2(x1-x2, y2-y1);
    angle = (angle / (2 * Math.PI)) * 360;
    var arrowPath = this.path('M' + x2 + ' ' + y2 + ' L' + (x2 - size) + ' ' + (y2 - size) + ' L' + (x2 - size) + ' ' + (y2 + size) + ' L' + x2 + ' ' + y2 ).attr('stroke', color).attr('fill', color).rotate((90+angle), x2, y2); 
    arrowPath._size = size;
    arrowPath._color = color;
    return arrowPath;
}
Raphael.fn.connection = function (obj1, obj2, line, bg, arrowEnd) {
    if (obj1.line && obj1.from && obj1.to) {
        line = obj1;
        obj1 = line.from;
        obj2 = line.to;
    }
    var bb1 = obj1.getBBox(),
        bb2 = obj2.getBBox(),
        p = [{ x: bb1.x + bb1.width / 2, y: bb1.y - 1 },
        { x: bb1.x + bb1.width / 2, y: bb1.y + bb1.height + 1 },
        { x: bb1.x - 1, y: bb1.y + bb1.height / 2 },
        { x: bb1.x + bb1.width + 1, y: bb1.y + bb1.height / 2 },
        { x: bb2.x + bb2.width / 2, y: bb2.y - 1 },
        { x: bb2.x + bb2.width / 2, y: bb2.y + bb2.height + 1 },
        { x: bb2.x - 1, y: bb2.y + bb2.height / 2 },
        { x: bb2.x + bb2.width + 1, y: bb2.y + bb2.height / 2}],
        d = {}, dis = [];

    for (var i = 0; i < 4; i++) {
        for (var j = 4; j < 8; j++) {
            var dx = Math.abs(p[i].x - p[j].x),
                dy = Math.abs(p[i].y - p[j].y);
            if ((i == j - 4) || (((i != 3 && j != 6) || p[i].x < p[j].x) && ((i != 2 && j != 7) || p[i].x > p[j].x) && ((i != 0 && j != 5) || p[i].y > p[j].y) && ((i != 1 && j != 4) || p[i].y < p[j].y))) {
                dis.push(dx + dy);
                d[dis[dis.length - 1]] = [i, j];
            }
        }
    }
    if (dis.length == 0) {
        var res = [0, 4];
    } else {
        res = d[Math.min.apply(Math, dis)];
    }
    var x1 = p[res[0]].x,
        y1 = p[res[0]].y,
        x4 = p[res[1]].x,
        y4 = p[res[1]].y;
    dx = Math.max(Math.abs(x1 - x4) / 2, 10);
    dy = Math.max(Math.abs(y1 - y4) / 2, 10);
    var x2 = [x1, x1, x1 - dx, x1 + dx][res[0]].toFixed(3),
        y2 = [y1 - dy, y1 + dy, y1, y1][res[0]].toFixed(3),
        x3 = [0, 0, 0, 0, x4, x4, x4 - dx, x4 + dx][res[1]].toFixed(3),
        y3 = [0, 0, 0, 0, y1 + dy, y1 - dy, y4, y4][res[1]].toFixed(3);
    var path = ["M", x1.toFixed(3), y1.toFixed(3), "C", x2, y2, x3, y3, x4.toFixed(3), y4.toFixed(3)].join(",");
    var ret = null;
    if (line && line.line) {
        line.bg && line.bg.attr({ path: path });
        line.line.attr({ path: path });       

        //dlt::begin
        if(line && line.arrowEnd){
            var arrow = line.arrowEnd;
            var size = arrow._size;
            var color = arrow._color;

            arrow.remove();
            //var arr = this.arrow(bb1.x + bb1.width, bb1.y + bb1.height/2 , bb2.x, bb2.y + bb2.height/2, size, color);            
            var arr = this.arrow(x3, y3, x4, y4, size, color);
            line.arrowEnd = arr;
        }
        //dlt::end

        return;
    } else {
        var color = typeof line == "string" ? line : "#000";
        ret = {
            bg: bg && bg.split && this.path(path).attr({ stroke: bg.split("|")[0], fill: "none", "stroke-width": bg.split("|")[1] || 3 }),
            line: this.path(path).attr({ stroke: color, fill: "none" }),
            from: obj1,
            to: obj2
        };
    }
        
    //dlt::begin
    if(arrowEnd)
    {
        //var arr = this.arrow(bb1.x + bb1.width, bb1.y + bb1.height/2 , bb2.x, bb2.y + bb2.height/2, 5, color);
        var size = 5;
        var arr = this.arrow(x3, y3, x4, y4, size, color);
        ret.arrowEnd = arr;
    }    
    //dlt::end

    return ret;
};

var data = {
    items: [
        {
            code: 'NK',
            caption: 'Nhập kho',
            icon: 'icon/InStock.png',
            x: 40,
            y: 40,
        },
        {
            code: 'XK',
            caption: 'Xuất kho',
            icon: 'icon/OutStock.png',
            x: 40,
            y: 170,
        },
        {
            code: 'CK',
            caption: 'Chuyển kho',
            icon: 'icon/Transfer.png',
            x: 40,
            y: 300,
        },
        {
            code: 'TGXK',
            caption: 'Tính giá xuất kho',
            icon: 'icon/Adjust.png',
            drag: 1,
            x: 240,
            y: 170,
        },
        {
            code: 'BC',
            caption: 'Báo cáo tồn kho',
            icon: 'icon/Report.png',
            drag: 1,
            x: 440,
            y: 170,
        },


        {
            code: 'KHO',
            caption: 'Kho',
            icon: 'icon/Stock.png',
            drag: 0,
            x: 40,
            y: 450,
        },
        {
            code: 'NHANVIEN',
            caption: 'Nhân viên',
            icon: 'icon/Employee.png',
            drag: 0,
            x: 240,
            y: 450,
        },
        {
            code: 'NHACC',
            caption: 'Nhà cung cấp',
            icon: 'icon/Vendor.png',
            x: 440,
            y: 450,
        },
        {
            code: 'BCTH',
            caption: 'Báo cáo tổng hợp',
            icon: 'icon/Report1.png',
            x: 640,
            y: 450,
        },
    ],
    connections: [
        {
            from: 'CK',
            to: 'TGXK',
            color: '#aaa',
        },
        {
            from: 'NK',
            to: 'TGXK',
            color: '#aaa'
        },
        {
            from: 'XK',
            to: 'TGXK',
            arrowEnd: 1
        },

        {
            from: 'TGXK',
            to: 'BC',
            color: '#f00',
            arrowEnd: 1
        }
    ]
};

//------------------------------------------------------------------------------------------------
//
//------------------------------------------------------------------------------------------------
var _connections = [];
function CFlowChart(r, data) {
    //DATA ------------------------------------------------------
    this._r = r;
    this._data = data;

    this._items = [];
    

    //METHOD ----------------------------------------------------
    this.getItem = function (code) {
        for (i in this._items) {
            var item = this._items[i];
            if (item.code == code) {
                return item;
            }
        }
        return null;
    };    

    //DRAGING ----------------------------------------------------
    this._move = function (dx, dy) {
        this.attr({ x: this.ox + dx, y: this.oy + dy });
        this.pair.attr({ x: this.ox + dx + this.attrs.width / 2, y: this.oy + dy + this.attrs.height + 10 });

        for (i in _connections) {
            var con = _connections[i];
            if(con.codefrom == this.code || con.codeto == this.code)
                r.connection(con);
        }

        //r.clear();
    };
    this._start = function () {
        this.ox = this.attr("x");
        this.oy = this.attr("y");

        if (this.pair) {
            this.pair.ox = this.ox;
            this.pair.oy = this.oy;
        }
        this.animate({ r: 70, opacity: 1 }, 500, ">");
    };
    this._up = function () {
        this.animate({ r: 50, opacity: .7 }, 500, ">");        
    };
    
    this.init = function () {
        var data = this._data;

        //Create items
        for (i in data.items) {
            var d = data.items[i];
            d.w = 110;
            d.h = 110;
            var img = r.image(d.icon, d.x, d.y, d.w, d.h);
            img.code = d.code;
            img.attr({ cursor: 'pointer', opacity: .7 });
            if(d.drag)
                img.drag(this._move, this._start, this._up);
            this._items.push(img);

            var text = r.text(d.x + d.w / 2, d.y + d.h + 10, d.caption);
            text.code = d.code;
            text.attr({ opacity: 1, 'font-size': 11, 'color': '#f00' });

            // Associate the elements
            img.pair = text;
            text.pair = img;

            //Hover -----------------
            img.hover(function(){
                    this.attr({opacity: 1 });
                },
                function(){
                    this.attr({opacity: .5 });
                }
            );

            //Click event -----------
            img.mousedown(function(){
                this.attr({ x: this.attrs.x + 2, y: this.attrs.y + 2 });
            });
            img.mouseup(function(){
                this.attr({ x: this.attrs.x - 2, y: this.attrs.y - 2 });
            });
        }

        //Create connections
        for (i in data.connections) {
            var c = data.connections[i];
            var item1 = this.getItem(c.from);
            var item2 = this.getItem(c.to);
            var color = '#00f';
            if (c.color) {
                color = c.color;
            }
            var con = r.connection(item1, item2, color, color + '|2', c.arrowEnd);
            con.codefrom = c.from;
            con.codeto = c.to;
            _connections.push(con);
        }
    };
}

//------------------------------------------------------------------------------------------------
//
//------------------------------------------------------------------------------------------------
var r;
window.onload = function () {    
    r = Raphael("holder", 800, 600);
    var fc = new CFlowChart(r, data);
    fc.init();    
};