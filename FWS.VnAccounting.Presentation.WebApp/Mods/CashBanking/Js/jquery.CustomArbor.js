/*
* jquery.CustonArbor.js
* Author: sang.t.phan
*/

// data test
var data = {
    "nodes": {
        "Phiếu thu": {
            "color": "#ccc",
            "width": 30,
            "shape": "circle",
            "image": "icon.png",
            "onclick": "function (dragged) { }"
        },
        "Giấy báo có": {
            "color": "#ce0",
            "width": 20,
            "shape": "circle",
            "image": "icon.png"
        },
        "Phiếu thu 2 tỉ giá": {
            "shape": "circle",
            "image": "icon.png"
        },
        "Giấy báo có 2 tỉ giá": {
            "shape": "circle",
            "image": "icon.png"
        },
        "Giấy báo nợ 2 tỉ giá": {
            "shape": "circle",
            "image": "icon.png"
        },
        "Phiếu chi 2 tỉ giá": {
            "shape": "circle",
            "image": "icon.png"
        },
        "Giấy báo nợ": {
            "shape": "circle",
            "image": "icon.png"
        },
        "Phiếu chi": {
            "shape": "circle",
            "image": "icon.png"
        }
    },
    "edges": {
        "Phiếu thu": {
            "Giấy báo có": {},
            "Phiếu chi": {}
        },
        "Giấy báo có": {
            "Giấy báo nợ": {},
            "Phiếu thu 2 tỉ giá": {}
        },
        "Phiếu thu 2 tỉ giá": {
            "Giấy báo có 2 tỉ giá": {},
            "Phiếu chi 2 tỉ giá": {}
        },
        "Giấy báo nợ 2 tỉ giá": {
            "Giấy báo có 2 tỉ giá": {},
            "Phiếu chi 2 tỉ giá": {}
        },
        "Giấy báo nợ": {
            "Phiếu chi": {},
            "Phiếu chi 2 tỉ giá": {},
            "Giấy báo có": {}
        }
    }
};

(function ($) {

    var Renderer = function (canvas) {
        var canvas = $(canvas).get(0);
        var ctx = canvas.getContext("2d");
        var particleSystem;

        var that = {
            init: function (system) {
                //
                // the particle system will call the init function once, right before the
                // first frame is to be drawn. it's a good place to set up the canvas and
                // to pass the canvas size to the particle system
                //
                // save a reference to the particle system for use in the .redraw() loop
                particleSystem = system;

                // inform the system of the screen dimensions so it can map coords for us.
                // if the canvas is ever resized, screenSize should be called again with
                // the new dimensions
                particleSystem.screenSize(canvas.width, canvas.height);
                particleSystem.screenPadding(80); // leave an extra 80px of whitespace per side

                // set up some event handlers to allow for node-dragging
                that.initMouseHandling();
            },
            redraw: function () {
                // 
                // redraw will be called repeatedly during the run whenever the node positions
                // change. the new positions for the nodes can be accessed by looking at the
                // .p attribute of a given node. however the p.x & p.y values are in the coordinates
                // of the particle system rather than the screen. you can either map them to
                // the screen yourself, or use the convenience iterators .eachNode (and .eachEdge)
                // which allow you to step through the actual node objects but also pass an
                // x,y point in the screen's coordinate system
                // 
                ctx.fillStyle = "white";
                ctx.fillRect(0, 0, canvas.width, canvas.height);

                particleSystem.eachEdge(function (edge, pt1, pt2) {
                    // edge: {source:Node, target:Node, length:#, data:{}}
                    // pt1:  {x:#, y:#}  source position in screen coords
                    // pt2:  {x:#, y:#}  target position in screen coords

                    // draw a line from pt1 to pt2
                    ctx.strokeStyle = "rgba(0,0,0, .333)";
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(pt1.x, pt1.y);
                    ctx.lineTo(pt2.x, pt2.y);
                    ctx.stroke();
                })

                particleSystem.eachNode(function (node, pt) {
                    // node: {mass:#, p:{x,y}, name:"", data:{}}
                    // pt:   {x:#, y:#}  node position in screen coords

                    // draw a rectangle centered at pt
                    // chieu rong cua node
                    var w = (node.data.width) ? node.data.width : 15;
                    // mau cua node
                    ctx.fillStyle = (node.data.color) ? node.data.color : "red";

                    // hinh dang hien thi cua node
                    switch (node.data.shape) {
                        case "circle":
                            ctx.beginPath();
                            ctx.arc(pt.x - w / 2, pt.y - w / 2, w, 0, Math.PI * 2, true);
                            ctx.closePath();
                            ctx.fill();
                            break;
                        default:
                            ctx.fillRect(pt.x - w / 2, pt.y - w / 2, w, w);
                            break;
                    }

                    if (node.data.image && node.data.image != '') {
                        var img = new Image();
                        img.src = node.data.image;
                        img.onload = function () {
                            ctx.drawImage(img, pt.x - w, pt.y - w);
                        }
                    }

                    ctx.fillText(node.name || "", pt.x, pt.y + 20);
                })
            },
            initMouseHandling: function () {
                // no-nonsense drag and drop (thanks springy.js)
                var dragged = null;

                // set up a handler object that will initially listen for mousedowns then
                // for moves and mouseups while dragging
                var handler = {
                    clicked: function (e) {
                        var pos = $(canvas).offset();
                        _mouseP = arbor.Point(e.pageX - pos.left, e.pageY - pos.top);
                        dragged = particleSystem.nearest(_mouseP);

                        if (dragged && dragged.node !== null) {
                            // while we're dragging, don't let physics move the node
                            //dragged.node.fixed = true;
                            if (typeof dragged.node.data.onclick == 'function') {
                                dragged.node.data.onclick(dragged);
                            }
                        }

                        $(canvas).bind('mousemove', handler.dragged);
                        $(window).bind('mouseup', handler.dropped);

                        return false;
                    },
                    dragged: function (e) {
                        var pos = $(canvas).offset();
                        var s = arbor.Point(e.pageX - pos.left, e.pageY - pos.top);
                        if (dragged && dragged.node !== null) {
                            var p = particleSystem.fromScreen(s);
                            dragged.node.p = p;
                        }
                        return false;
                    },
                    dropped: function (e) {
                        if (dragged === null || dragged.node === undefined) return;
                        if (dragged.node !== null) dragged.node.fixed = false;
                        dragged.node.tempMass = 1000;
                        dragged = null;
                        $(canvas).unbind('mousemove', handler.dragged);
                        $(window).unbind('mouseup', handler.dropped);
                        _mouseP = null;
                        return false;
                    }
                }

                // start listening
                $(canvas).mousedown(handler.clicked);
            }
        };
        return that;
    };

    $.fn.InitCustomArbor = function (options) {
        var container = this;
        var _default = {
            url: ''
        };
        $.extend(_default, options, true);
        var sys = arbor.ParticleSystem(1000, 600, 0.5); // create the system with sensible repulsion/stiffness/friction
        sys.parameters({ gravity: true }); // use center-gravity to make the graph settle nicely (ymmv)
        sys.renderer = Renderer(container); // our newly created renderer will have its .init() method called shortly by sys...

        // add some nodes to the graph and watch it go...
        /*
        sys.addEdge('a', 'b');
        sys.addEdge('a', 'c');
        sys.addEdge('a', 'd');
        sys.addEdge('a', 'e');
        //sys.addNode('f', { alone: true, mass: .25 });
        */

        // load the raw data into the particle system as is (since it's already formatted correctly for .merge)
        if (options.url != '') {
            /*
            $.getJSON(_default.url, function (data) {
                var nodes = data.nodes;
                $.each(nodes, function (index, item) {
                    item.onclick = function (dragged) {
                        console.log(dragged);
                    };
                });
                sys.merge({ nodes: nodes, edges: data.edges });
            });
            */
            /*
            FWS.System.IO.Ajax({
                url: _default.url,
                success: function (data, textStatus, jqXHR) {
                    console.log(data);
                    var nodes = data.nodes;
                    $.each(nodes, function (index, item) {
                        item.onclick = function (dragged) {
                            console.log(dragged);
                        };
                    });
                    sys.merge({ nodes: nodes, edges: data.edges });
                }
            });
            */
            var nodes = data.nodes;
                $.each(nodes, function (index, item) {
                    item.onclick = function (dragged) {
                        console.log(dragged);
                    };
                });
                sys.merge({ nodes: nodes, edges: data.edges });
        }
    };
})(jQuery)