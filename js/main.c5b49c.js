! function(e) {
    var n = {};

    function t(r) { if (n[r]) return n[r].exports; var f = n[r] = { i: r, l: !1, exports: {} }; return e[r].call(f.exports, f, f.exports, t), f.l = !0, f.exports }
    t.m = e, t.c = n, t.d = function(e, n, r) { t.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: r }) }, t.r = function(e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, t.t = function(e, n) {
        if (1 & n && (e = t(e)), 8 & n) return e;
        if (4 & n && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (t.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), 2 & n && "string" != typeof e)
            for (var f in e) t.d(r, f, function(n) { return e[n] }.bind(null, f));
        return r
    }, t.n = function(e) { var n = e && e.__esModule ? function() { return e.default } : function() { return e }; return t.d(n, "a", n), n }, t.o = function(e, n) { return Object.prototype.hasOwnProperty.call(e, n) }, t.p = "./", t(t.s = 1)
}([function(e, n, t) {
    var r;
    e.exports = function() {
        var e = Math.max,
            n = Math.sqrt,
            t = Math.abs,
            f = Math.floor;
        return function e(n, t, f) {
            function o(i, c) {
                if (!t[i]) {
                    if (!n[i]) { var u = "function" == typeof r && r; if (!c && u) return r(i, !0); if (a) return a(i, !0); var d = new Error("Cannot find module '" + i + "'"); throw d.code = "MODULE_NOT_FOUND", d }
                    var s = t[i] = { exports: {} };
                    n[i][0].call(s.exports, function(e) { var t = n[i][1][e]; return o(t || e) }, s, s.exports, e, n, t, f)
                }
                return t[i].exports
            }
            for (var a = "function" == typeof r && r, i = 0; i < f.length; i++) o(f[i]);
            return o
        }({
            "./lib/trianglify.js": [function(e, n) {
                function t(e) {
                    function n(e, n, t) { return (e - n[0]) * (t[1] - t[0]) / (n[1] - n[0]) + t[0] }

                    function t(e) { return { x: (e[0][0] + e[1][0] + e[2][0]) / 3, y: (e[0][1] + e[1][1] + e[2][1]) / 3 } }

                    function i() { if (e.palette instanceof Array) return e.palette[f(s() * e.palette.length)]; var n = Object.keys(e.palette); return e.palette[n[f(s() * n.length)]] }
                    var s, l;
                    if (e = function(e, n) {
                            var t = {};
                            for (var r in e) t[r] = e[r];
                            for (r in n) {
                                if (!e.hasOwnProperty(r)) throw new Error(r + " is not a configuration option for Trianglify. Check your spelling?");
                                t[r] = n[r]
                            }
                            return t
                        }(d, e), s = o(e.seed), "random" === e.x_colors && (e.x_colors = i()), "random" === e.y_colors && (e.y_colors = i()), "match_x" === e.y_colors && (e.y_colors = e.x_colors), !(0 < e.width && 0 < e.height)) throw new Error("Width and height must be numbers greater than 0");
                    if (2 > e.cell_size) throw new Error("Cell size must be greater than 2.");
                    if (e.color_function) l = function(n, t) { return a(e.color_function(n, t)) };
                    else {
                        var h = a.scale(e.x_colors).mode(e.color_space),
                            b = a.scale(e.y_colors).mode(e.color_space);
                        l = function(n, t) { return a.interpolate(h(n), b(t), .5, e.color_space) }
                    }
                    for (var g = e.width, p = e.height, m = f((g + 4 * e.cell_size) / e.cell_size), v = f((p + 4 * e.cell_size) / e.cell_size), y = (m * e.cell_size - g) / 2, w = (v * e.cell_size - p) / 2, x = e.cell_size * e.variance / 2, _ = function(e) { return n(e, [-y, g + y], [0, 1]) }, k = function(e) { return n(e, [-w, p + w], [0, 1]) }, j = e.points || c(g, p, y, w, e.cell_size, x, s), z = new r(j).triangles, E = [], S = function(e) { return j[e] }, A = 0; A < z.length; A += 3) {
                        var B = [z[A], z[A + 1], z[A + 2]].map(S),
                            N = t(B),
                            P = l(_(N.x), k(N.y)).hex();
                        E.push([P, B])
                    }
                    return u(E, e)
                }
                var r = e("delaunator"),
                    o = e("seedrandom"),
                    a = e("chroma-js"),
                    i = e("./colorbrewer"),
                    c = e("./points"),
                    u = e("./pattern"),
                    d = { width: 600, height: 400, cell_size: 75, variance: .75, seed: null, x_colors: "random", y_colors: "match_x", palette: i, color_space: "lab", color_function: null, stroke_width: 1.51, points: void 0 };
                t.colorbrewer = i, t.defaults = d, n.exports = t
            }, { "./colorbrewer": "/home/fmauneko/code/trianglify/lib/colorbrewer.js", "./pattern": "/home/fmauneko/code/trianglify/lib/pattern.js", "./points": "/home/fmauneko/code/trianglify/lib/points.js", "chroma-js": "/home/fmauneko/code/trianglify/node_modules/chroma-js/chroma.js", delaunator: "/home/fmauneko/code/trianglify/node_modules/delaunator/index.js", seedrandom: "/home/fmauneko/code/trianglify/node_modules/seedrandom/index.js" }],
            "/home/fmauneko/code/trianglify/lib/colorbrewer.js": [function(e, n) { n.exports = { YlGn: ["#ffffe5", "#f7fcb9", "#d9f0a3", "#addd8e", "#78c679", "#41ab5d", "#238443", "#006837", "#004529"], YlGnBu: ["#ffffd9", "#edf8b1", "#c7e9b4", "#7fcdbb", "#41b6c4", "#1d91c0", "#225ea8", "#253494", "#081d58"], GnBu: ["#f7fcf0", "#e0f3db", "#ccebc5", "#a8ddb5", "#7bccc4", "#4eb3d3", "#2b8cbe", "#0868ac", "#084081"], BuGn: ["#f7fcfd", "#e5f5f9", "#ccece6", "#99d8c9", "#66c2a4", "#41ae76", "#238b45", "#006d2c", "#00441b"], PuBuGn: ["#fff7fb", "#ece2f0", "#d0d1e6", "#a6bddb", "#67a9cf", "#3690c0", "#02818a", "#016c59", "#014636"], PuBu: ["#fff7fb", "#ece7f2", "#d0d1e6", "#a6bddb", "#74a9cf", "#3690c0", "#0570b0", "#045a8d", "#023858"], BuPu: ["#f7fcfd", "#e0ecf4", "#bfd3e6", "#9ebcda", "#8c96c6", "#8c6bb1", "#88419d", "#810f7c", "#4d004b"], RdPu: ["#fff7f3", "#fde0dd", "#fcc5c0", "#fa9fb5", "#f768a1", "#dd3497", "#ae017e", "#7a0177", "#49006a"], PuRd: ["#f7f4f9", "#e7e1ef", "#d4b9da", "#c994c7", "#df65b0", "#e7298a", "#ce1256", "#980043", "#67001f"], OrRd: ["#fff7ec", "#fee8c8", "#fdd49e", "#fdbb84", "#fc8d59", "#ef6548", "#d7301f", "#b30000", "#7f0000"], YlOrRd: ["#ffffcc", "#ffeda0", "#fed976", "#feb24c", "#fd8d3c", "#fc4e2a", "#e31a1c", "#bd0026", "#800026"], YlOrBr: ["#ffffe5", "#fff7bc", "#fee391", "#fec44f", "#fe9929", "#ec7014", "#cc4c02", "#993404", "#662506"], Purples: ["#fcfbfd", "#efedf5", "#dadaeb", "#bcbddc", "#9e9ac8", "#807dba", "#6a51a3", "#54278f", "#3f007d"], Blues: ["#f7fbff", "#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#08519c", "#08306b"], Greens: ["#f7fcf5", "#e5f5e0", "#c7e9c0", "#a1d99b", "#74c476", "#41ab5d", "#238b45", "#006d2c", "#00441b"], Oranges: ["#fff5eb", "#fee6ce", "#fdd0a2", "#fdae6b", "#fd8d3c", "#f16913", "#d94801", "#a63603", "#7f2704"], Reds: ["#fff5f0", "#fee0d2", "#fcbba1", "#fc9272", "#fb6a4a", "#ef3b2c", "#cb181d", "#a50f15", "#67000d"], Greys: ["#ffffff", "#f0f0f0", "#d9d9d9", "#bdbdbd", "#969696", "#737373", "#525252", "#252525", "#000000"], PuOr: ["#7f3b08", "#b35806", "#e08214", "#fdb863", "#fee0b6", "#f7f7f7", "#d8daeb", "#b2abd2", "#8073ac", "#542788", "#2d004b"], BrBG: ["#543005", "#8c510a", "#bf812d", "#dfc27d", "#f6e8c3", "#f5f5f5", "#c7eae5", "#80cdc1", "#35978f", "#01665e", "#003c30"], PRGn: ["#40004b", "#762a83", "#9970ab", "#c2a5cf", "#e7d4e8", "#f7f7f7", "#d9f0d3", "#a6dba0", "#5aae61", "#1b7837", "#00441b"], PiYG: ["#8e0152", "#c51b7d", "#de77ae", "#f1b6da", "#fde0ef", "#f7f7f7", "#e6f5d0", "#b8e186", "#7fbc41", "#4d9221", "#276419"], RdBu: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#f7f7f7", "#d1e5f0", "#92c5de", "#4393c3", "#2166ac", "#053061"], RdGy: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#ffffff", "#e0e0e0", "#bababa", "#878787", "#4d4d4d", "#1a1a1a"], RdYlBu: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee090", "#ffffbf", "#e0f3f8", "#abd9e9", "#74add1", "#4575b4", "#313695"], Spectral: ["#9e0142", "#d53e4f", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#e6f598", "#abdda4", "#66c2a5", "#3288bd", "#5e4fa2"], RdYlGn: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#d9ef8b", "#a6d96a", "#66bd63", "#1a9850", "#006837"] } }, {}],
            "/home/fmauneko/code/trianglify/lib/pattern.js": [function(e, n) {
                (function(t) {
                    var r = "undefined" == typeof document ? e("jsdom").jsdom("<html/>") : document;
                    n.exports = function(n, f) {
                        function o(o) {
                            var a;
                            if ("object" == typeof t && "object" == typeof t.versions && void 0 !== t.versions.node) try { e("canvas") } catch (e) { throw Error("The optional node-canvas dependency is needed for Trianglify to render using canvas in node.") }
                            return o || (o = r.createElement("canvas")), o.setAttribute("width", f.width), o.setAttribute("height", f.height), (a = o.getContext("2d")).canvas.width = f.width, a.canvas.height = f.height, n.forEach(function(e) { a.fillStyle = a.strokeStyle = e[0], a.lineWidth = f.stroke_width, a.beginPath(), a.moveTo.apply(a, e[1][0]), a.lineTo.apply(a, e[1][1]), a.lineTo.apply(a, e[1][2]), a.fill(), a.stroke() }), o
                        }
                        return {
                            polys: n,
                            opts: f,
                            svg: function(e) {
                                var t = r.createElementNS("http://www.w3.org/2000/svg", "svg");
                                return t.setAttribute("width", f.width), t.setAttribute("height", f.height), e && e.includeNamespace && t.setAttribute("xmlns", "http://www.w3.org/2000/svg"), n.forEach(function(e) {
                                    var n = r.createElementNS("http://www.w3.org/2000/svg", "path");
                                    n.setAttribute("d", "M" + e[1].join("L") + "Z"), n.setAttribute("fill", e[0]), n.setAttribute("stroke", e[0]), n.setAttribute("stroke-width", f.stroke_width), t.appendChild(n)
                                }), t
                            },
                            canvas: o,
                            png: function() { return o().toDataURL("image/png") }
                        }
                    }
                }).call(this, e("_process"))
            }, { _process: "/home/fmauneko/code/trianglify/node_modules/process/browser.js", canvas: "/home/fmauneko/code/trianglify/node_modules/browser-resolve/empty.js", jsdom: "/home/fmauneko/code/trianglify/node_modules/browser-resolve/empty.js" }],
            "/home/fmauneko/code/trianglify/lib/points.js": [function(e, n) {
                n.exports = function(e, n, t, r, o, a, i) {
                    for (var c = .5 * o, u = 2 * a, d = -a, s = [], l = -t; l < e + t; l += o)
                        for (var h = -r; h < n + r; h += o) {
                            var b = l + c + (i() * u + d),
                                g = h + c + (i() * u + d);
                            s.push([f(b), f(g)])
                        }
                    return s
                }
            }, {}],
            "/home/fmauneko/code/trianglify/node_modules/browser-resolve/empty.js": [function() {}, {}],
            "/home/fmauneko/code/trianglify/node_modules/chroma-js/chroma.js": [function(r, o, a) {
                (function() {
                    var r, i, c, u, d, s, l, h, b, g, p, m, v, y, w, x, _, k, j, z, E, S, A, B, N, P, M, G, O, R, L, q, C, T = Number.MAX_VALUE,
                        Y = Math.min,
                        D = Math.cos,
                        I = Math.pow,
                        U = Math.PI,
                        X = Number.NaN,
                        F = Math.round;
                    l = function(e, n, t, f) { return new r(e, n, t, f) }, void 0 !== o && null !== o && null != o.exports && (o.exports = l), (void 0 !== a && null !== a ? a : this).chroma = l, l.color = function(e, n, t, f) { return new r(e, n, t, f) }, l.hsl = function(e, n, t, f) { return new r(e, n, t, f, "hsl") }, l.hsv = function(e, n, t, f) { return new r(e, n, t, f, "hsv") }, l.rgb = function(e, n, t, f) { return new r(e, n, t, f, "rgb") }, l.hex = function(e) { return new r(e) }, l.css = function(e) { return new r(e) }, l.lab = function(e, n, t) { return new r(e, n, t, "lab") }, l.lch = function(e, n, t) { return new r(e, n, t, "lch") }, l.hsi = function(e, n, t) { return new r(e, n, t, "hsi") }, l.gl = function(e, n, t, f) { return new r(255 * e, 255 * n, 255 * t, f, "gl") }, l.mix = l.interpolate = function(e, n, t, f) { return null == e || null == n ? "#000" : ("string" === R(e) && (e = new r(e)), "string" === R(n) && (n = new r(n)), e.interpolate(t, n, f)) }, l.contrast = function(e, n) { var t, f; return "string" === R(e) && (e = new r(e)), "string" === R(n) && (n = new r(n)), t = e.luminance(), f = n.luminance(), t > f ? (t + .05) / (f + .05) : (f + .05) / (t + .05) }, l.luminance = function(e) { return l(e).luminance() }, l._Color = r, r = function() {
                        function e() {
                            var e, n, t, r, f, o, a, i, c, u, d, s, l, b, g;
                            for (f = this, t = [], c = 0, u = arguments.length; c < u; c++) null != (n = arguments[c]) && t.push(n);
                            if (0 === t.length) o = (d = [255, 0, 255, 1, "rgb"])[0], a = d[1], i = d[2], e = d[3], r = d[4];
                            else if ("array" === R(t[0])) {
                                if (3 === t[0].length) s = t[0], o = s[0], a = s[1], i = s[2], e = 1;
                                else {
                                    if (4 !== t[0].length) throw "unknown input argument";
                                    l = t[0], o = l[0], a = l[1], i = l[2], e = l[3]
                                }
                                r = null == (b = t[1]) ? "rgb" : b
                            } else "string" === R(t[0]) ? (o = t[0], r = "hex") : "object" === R(t[0]) ? (g = t[0]._rgb, o = g[0], a = g[1], i = g[2], e = g[3], r = "rgb") : 3 <= t.length && (o = t[0], a = t[1], i = t[2]);
                            3 === t.length ? (r = "rgb", e = 1) : 4 === t.length ? "string" === R(t[3]) ? (r = t[3], e = 1) : "number" === R(t[3]) && (r = "rgb", e = t[3]) : 5 === t.length && (e = t[3], r = t[4]), null == e && (e = 1), "rgb" === r ? f._rgb = [o, a, i, e] : "gl" === r ? f._rgb = [255 * o, 255 * a, 255 * i, e] : "hsl" === r ? (f._rgb = v(o, a, i), f._rgb[3] = e) : "hsv" === r ? (f._rgb = y(o, a, i), f._rgb[3] = e) : "hex" === r ? f._rgb = p(o) : "lab" === r ? (f._rgb = x(o, a, i), f._rgb[3] = e) : "lch" === r ? (f._rgb = j(o, a, i), f._rgb[3] = e) : "hsi" === r && (f._rgb = m(o, a, i), f._rgb[3] = e), h(f._rgb)
                        }
                        return e.prototype.rgb = function() { return this._rgb.slice(0, 3) }, e.prototype.rgba = function() { return this._rgb }, e.prototype.hex = function() { return A(this._rgb) }, e.prototype.toString = function() { return this.name() }, e.prototype.hsl = function() { return N(this._rgb) }, e.prototype.hsv = function() { return P(this._rgb) }, e.prototype.lab = function() { return M(this._rgb) }, e.prototype.lch = function() { return G(this._rgb) }, e.prototype.hsi = function() { return B(this._rgb) }, e.prototype.gl = function() { return [this._rgb[0] / 255, this._rgb[1] / 255, this._rgb[2] / 255, this._rgb[3]] }, e.prototype.luminance = function(n, r) { var f, o, a, i; return null == r && (r = "rgb"), arguments.length ? (0 === n && (this._rgb = [0, 0, 0, this._rgb[3]]), 1 === n && (this._rgb = [255, 255, 255, this._rgb[3]]), f = E(this._rgb), o = 1e-7, a = 20, i = function(e, f) { var c, u; return u = e.interpolate(.5, f, r), c = u.luminance(), t(n - c) < o || !a-- ? u : c > n ? i(e, u) : i(u, f) }, this._rgb = (f > n ? i(new e("black"), this) : i(this, new e("white"))).rgba(), this) : E(this._rgb) }, e.prototype.name = function() {
                            var e, n;
                            for (n in e = this.hex(), l.colors)
                                if (e === l.colors[n]) return n;
                            return e
                        }, e.prototype.alpha = function(e) { return arguments.length ? (this._rgb[3] = e, this) : this._rgb[3] }, e.prototype.css = function(e) { var n, t, r, f; return null == e && (e = "rgb"), r = (t = this)._rgb, 3 === e.length && 1 > r[3] && (e += "a"), "rgb" === e ? e + "(" + r.slice(0, 3).map(Math.round).join(",") + ")" : "rgba" === e ? e + "(" + r.slice(0, 3).map(Math.round).join(",") + "," + r[3] + ")" : "hsl" === e || "hsla" === e ? (n = t.hsl(), f = function(e) { return F(100 * e) / 100 }, n[0] = f(n[0]), n[1] = f(100 * n[1]) + "%", n[2] = f(100 * n[2]) + "%", 4 === e.length && (n[3] = r[3]), e + "(" + n.join(",") + ")") : void 0 }, e.prototype.interpolate = function(n, t, r) {
                            var f, o, a, i, c, u, d, s, l, h, b, g, p;
                            if (d = this, null == r && (r = "rgb"), "string" === R(t) && (t = new e(t)), "hsl" === r || "hsv" === r || "lch" === r || "hsi" === r) "hsl" === r ? (g = d.hsl(), p = t.hsl()) : "hsv" === r ? (g = d.hsv(), p = t.hsv()) : "hsi" === r ? (g = d.hsi(), p = t.hsi()) : "lch" === r && (g = d.lch(), p = t.lch()), "h" === r.substr(0, 1) ? (o = g[0], h = g[1], c = g[2], a = p[0], b = p[1], u = p[2]) : (c = g[0], h = g[1], o = g[2], u = p[0], b = p[1], a = p[2]), isNaN(o) || isNaN(a) ? isNaN(o) ? isNaN(a) ? f = X : (f = a, (1 === c || 0 === c) && "hsv" !== r && (l = b)) : (f = o, (1 === u || 0 === u) && "hsv" !== r && (l = h)) : f = o + n * (a > o && 180 < a - o ? a - (o + 360) : a < o && 180 < o - a ? a + 360 - o : a - o), null == l && (l = h + n * (b - h)), i = c + n * (u - c), s = "h" === r.substr(0, 1) ? new e(f, l, i, r) : new e(i, l, f, r);
                            else if ("rgb" === r) g = d._rgb, p = t._rgb, s = new e(g[0] + n * (p[0] - g[0]), g[1] + n * (p[1] - g[1]), g[2] + n * (p[2] - g[2]), r);
                            else {
                                if ("lab" !== r) throw "color mode " + r + " is not supported";
                                g = d.lab(), p = t.lab(), s = new e(g[0] + n * (p[0] - g[0]), g[1] + n * (p[1] - g[1]), g[2] + n * (p[2] - g[2]), r)
                            }
                            return s.alpha(d.alpha() + n * (t.alpha() - d.alpha())), s
                        }, e.prototype.premultiply = function() { var e, n; return n = this.rgb(), e = this.alpha(), l(n[0] * e, n[1] * e, n[2] * e, e) }, e.prototype.darken = function(e) { var n, t; return null == e && (e = 20), (n = (t = this).lch())[0] -= e, l.lch(n).alpha(t.alpha()) }, e.prototype.darker = function(e) { return this.darken(e) }, e.prototype.brighten = function(e) { return null == e && (e = 20), this.darken(-e) }, e.prototype.brighter = function(e) { return this.brighten(e) }, e.prototype.saturate = function(e) { var n, t; return null == e && (e = 20), (n = (t = this).lch())[1] += e, l.lch(n).alpha(t.alpha()) }, e.prototype.desaturate = function(e) { return null == e && (e = 20), this.saturate(-e) }, e
                    }(), h = function(e) { for (var n in e) 3 > n ? (0 > e[n] && (e[n] = 0), 255 < e[n] && (e[n] = 255)) : 3 === n && (0 > e[n] && (e[n] = 0), 1 < e[n] && (e[n] = 1)); return e }, g = function(e) {
                        var n, t, r, f, o, a, i, c;
                        if (e = e.toLowerCase(), null != l.colors && l.colors[e]) return p(l.colors[e]);
                        if (r = e.match(/rgb\(\s*(\-?\d+),\s*(\-?\d+)\s*,\s*(\-?\d+)\s*\)/)) {
                            for (f = r.slice(1, 4), t = o = 0; 2 >= o; t = ++o) f[t] = +f[t];
                            f[3] = 1
                        } else if (r = e.match(/rgba\(\s*(\-?\d+),\s*(\-?\d+)\s*,\s*(\-?\d+)\s*,\s*([01]|[01]?\.\d+)\)/))
                            for (f = r.slice(1, 5), t = a = 0; 3 >= a; t = ++a) f[t] = +f[t];
                        else if (r = e.match(/rgb\(\s*(\-?\d+(?:\.\d+)?)%,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*\)/)) {
                            for (f = r.slice(1, 4), t = i = 0; 2 >= i; t = ++i) f[t] = F(2.55 * f[t]);
                            f[3] = 1
                        } else if (r = e.match(/rgba\(\s*(\-?\d+(?:\.\d+)?)%,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)/)) {
                            for (f = r.slice(1, 5), t = c = 0; 2 >= c; t = ++c) f[t] = F(2.55 * f[t]);
                            f[3] = +f[3]
                        } else(r = e.match(/hsl\(\s*(\-?\d+(?:\.\d+)?),\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*\)/)) ? ((n = r.slice(1, 4))[1] *= .01, n[2] *= .01, (f = v(n))[3] = 1) : (r = e.match(/hsla\(\s*(\-?\d+(?:\.\d+)?),\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)/)) && ((n = r.slice(1, 4))[1] *= .01, n[2] *= .01, (f = v(n))[3] = +r[4]);
                        return f
                    }, p = function(e) { var n, t; if (e.match(/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)) return (4 === e.length || 7 === e.length) && (e = e.substr(1)), 3 === e.length && (e = (e = e.split(""))[0] + e[0] + e[1] + e[1] + e[2] + e[2]), [(t = parseInt(e, 16)) >> 16, 255 & t >> 8, 255 & t, 1]; if (e.match(/^#?([A-Fa-f0-9]{8})$/)) return 9 === e.length && (e = e.substr(1)), [255 & (t = parseInt(e, 16)) >> 24, 255 & t >> 16, 255 & t >> 8, 255 & t]; if (n = g(e)) return n; throw "unknown color: " + e }, m = function(e, n, t) { var r, f, o, a; return a = L(arguments), e = a[0], n = a[1], t = a[2], (e /= 360) < 1 / 3 ? (r = (1 - n) / 3, o = (1 + n * b(c * e) / b(i - c * e)) / 3, f = 1 - (r + o)) : e < 2 / 3 ? (o = (1 - n) / 3, f = (1 + n * b(c * (e -= 1 / 3)) / b(i - c * e)) / 3, r = 1 - (o + f)) : (f = (1 - n) / 3, r = (1 + n * b(c * (e -= 2 / 3)) / b(i - c * e)) / 3, o = 1 - (f + r)), o = z(t * o * 3), f = z(t * f * 3), r = z(t * r * 3), [255 * o, 255 * f, 255 * r] }, v = function() {
                        var e, n, t, r, f, o, a, i, c, u, d, s, l, h;
                        if (l = L(arguments), r = l[0], i = l[1], o = l[2], 0 === i) a = t = e = 255 * o;
                        else {
                            for (d = [0, 0, 0], n = [0, 0, 0], c = 2 * o - (u = .5 > o ? o * (1 + i) : o + i - o * i), r /= 360, d[0] = r + 1 / 3, d[1] = r, d[2] = r - 1 / 3, f = s = 0; 2 >= s; f = ++s) 0 > d[f] && (d[f] += 1), 1 < d[f] && (d[f] -= 1), n[f] = 1 > 6 * d[f] ? c + 6 * (u - c) * d[f] : 1 > 2 * d[f] ? u : 2 > 3 * d[f] ? c + (u - c) * (2 / 3 - d[f]) * 6 : c;
                            h = [F(255 * n[0]), F(255 * n[1]), F(255 * n[2])], a = h[0], t = h[1], e = h[2]
                        }
                        return [a, t, e]
                    }, y = function() { var e, n, t, r, o, a, i, c, u, d, s, l, h, b, g, p, m, v; return l = L(arguments), r = l[0], u = l[1], s = l[2], s *= 255, 0 === u ? c = t = e = s : (360 === r && (r = 0), 360 < r && (r -= 360), 0 > r && (r += 360), o = f(r /= 60), a = s * (1 - u), i = s * (1 - u * (n = r - o)), d = s * (1 - u * (1 - n)), 0 === o ? (c = (h = [s, d, a])[0], t = h[1], e = h[2]) : 1 === o ? (c = (b = [i, s, a])[0], t = b[1], e = b[2]) : 2 === o ? (c = (g = [a, s, d])[0], t = g[1], e = g[2]) : 3 === o ? (c = (p = [a, i, s])[0], t = p[1], e = p[2]) : 4 === o ? (c = (m = [d, a, s])[0], t = m[1], e = m[2]) : 5 === o && (c = (v = [s, a, i])[0], t = v[1], e = v[2])), c = F(c), t = F(t), e = F(e), [c, t, e] }, u = .95047, d = 1.08883, w = function() { var e, t, r, f, o, a; return a = L(arguments), o = a[0], e = a[1], t = a[2], r = n(e * e + t * t), f = Math.atan2(t, e) / U * 180, [o, r, f] }, x = function(e, n, t) { var r, f, o, a, i, c, s; return void 0 !== e && 3 === e.length && (e = (c = e)[0], n = c[1], t = c[2]), void 0 !== e && 3 === e.length && (e = (s = e)[0], n = s[1], t = s[2]), i = (a = (e + 16) / 116) - t / 200, o = _(o = a + n / 500) * u, a = 1 * _(a), i = _(i) * d, f = C(3.2404542 * o - 1.5371385 * a - .4985314 * i), r = C(-.969266 * o + 1.8760108 * a + .041556 * i), t = C(.0556434 * o - .2040259 * a + 1.0572252 * i), [z(f, 0, 255), z(r, 0, 255), z(t, 0, 255), 1] }, _ = function(e) { return .206893034 < e ? e * e * e : (e - 4 / 29) / 7.787037 }, C = function(e) { return F(255 * (.00304 >= e ? 12.92 * e : 1.055 * I(e, 1 / 2.4) - .055)) }, k = function() { var e, n, t, r; return r = L(arguments), t = r[0], e = r[1], n = r[2], [t, D(n = n * U / 180) * e, Math.sin(n) * e] }, j = function(e, n, t) { var r, f, o, a, i, c, u; return c = k(e, n, t), r = c[0], f = c[1], o = c[2], u = x(r, f, o), i = u[0], a = u[1], o = u[2], [z(i, 0, 255), z(a, 0, 255), z(o, 0, 255)] }, E = function(e, n, t) { var r; return r = L(arguments), e = r[0], n = r[1], t = r[2], e = S(e), n = S(n), t = S(t), .2126 * e + .7152 * n + .0722 * t }, S = function(e) { return .03928 >= (e /= 255) ? e / 12.92 : I((e + .055) / 1.055, 2.4) }, A = function() { var e, n, t, r, f; return f = L(arguments), t = f[0], n = f[1], e = f[2], "#" + (r = "000000" + (t << 16 | n << 8 | e).toString(16)).substr(r.length - 6) }, B = function() { var e, t, r, f, o, a, i, c, u; return u = L(arguments), i = u[0], r = u[1], t = u[2], e = 2 * U, a = Y(i /= 255, r /= 255, t /= 255), 0 == (c = 1 - a / (o = (i + r + t) / 3)) ? f = 0 : (f = (i - r + (i - t)) / 2, f /= n((i - r) * (i - r) + (i - t) * (r - t)), f = Math.acos(f), t > r && (f = e - f), f /= e), [360 * f, c, o] }, N = function(n, t, r) { var f, o, a, i, c, u; return void 0 !== n && 3 <= n.length && (n = (u = n)[0], t = u[1], r = u[2]), i = Y(n /= 255, t /= 255, r /= 255), a = e(n, t, r), o = (a + i) / 2, a === i ? (c = 0, f = X) : c = .5 > o ? (a - i) / (a + i) : (a - i) / (2 - a - i), n === a ? f = (t - r) / (a - i) : t === a ? f = 2 + (r - n) / (a - i) : r === a && (f = 4 + (n - t) / (a - i)), 0 > (f *= 60) && (f += 360), [f, c, o] }, P = function() { var n, t, r, f, o, a, i, c, u; return u = L(arguments), i = u[0], r = u[1], n = u[2], a = Y(i, r, n), o = e(i, r, n), t = o - a, 0 === o ? (f = X, c = 0) : (c = t / o, i === o && (f = (r - n) / t), r === o && (f = 2 + (n - i) / t), n === o && (f = 4 + (i - r) / t), 0 > (f *= 60) && (f += 360)), [f, c, o / 255] }, M = function() { var e, n, t, r, f, o, a; return a = L(arguments), t = a[0], n = a[1], e = a[2], t = O(t), n = O(n), e = O(e), r = q((.4124564 * t + .3575761 * n + .1804375 * e) / u), f = q((.2126729 * t + .7151522 * n + .072175 * e) / 1), o = q((.0193339 * t + .119192 * n + .9503041 * e) / d), [116 * f - 16, 500 * (r - f), 200 * (f - o)] }, O = function(e) { return .04045 >= (e /= 255) ? e / 12.92 : I((e + .055) / 1.055, 2.4) }, q = function(e) { return .008856 < e ? I(e, 1 / 3) : 7.787037 * e + 4 / 29 }, G = function() { var e, n, t, r, f, o, a; return o = L(arguments), f = o[0], t = o[1], n = o[2], a = M(f, t, n), r = a[0], e = a[1], n = a[2], w(r, e, n) }, l.scale = function(n, r) {
                        var o, a, i, c, u, d, s, h, b, g, p, m, v, y, w, x, _, k, j;
                        return y = "rgb", w = l("#ccc"), j = 0, p = [0, 1], b = [], _ = !1, k = [], v = 0, m = 1, g = !1, x = 0, h = {}, u = function(e, n) {
                            var t, r, f, o, a, i, u;
                            if (null == e && (e = ["#ddd", "#222"]), null != e && "string" === R(e) && null != (null == (a = l.brewer) ? void 0 : a[e]) && (e = l.brewer[e]), "array" === R(e)) {
                                for (e = e.slice(0), t = f = 0, i = e.length - 1; 0 <= i ? f <= i : f >= i; t = 0 <= i ? ++f : --f) r = e[t], "string" === R(r) && (e[t] = l(r));
                                if (null != n) k = n;
                                else
                                    for (k = [], t = o = 0, u = e.length - 1; 0 <= u ? o <= u : o >= u; t = 0 <= u ? ++o : --o) k.push(t / (e.length - 1))
                            }
                            return c(), b = e
                        }, d = function(e) { return null == e && (e = []), p = e, v = e[0], m = e[e.length - 1], c(), x = 2 === e.length ? 0 : e.length - 1 }, a = function(e) { var n, t; if (null != p) { for (t = p.length - 1, n = 0; n < t && e >= p[n];) n++; return n - 1 } return 0 }, s = function(e) { return e }, i = function(n, t) {
                            var r, o, i, c, u, d, g, _;
                            if (null == t && (t = !1), isNaN(n)) return w;
                            if (t ? d = n : 2 < p.length ? (r = a(n), d = r / (x - 1)) : (d = v === m ? 0 : (n - v) / (m - v), d = Y(1, e(0, d = (n - v) / (m - v)))), t || (d = s(d)), c = f(1e4 * d), h[c]) o = h[c];
                            else {
                                if ("array" === R(b))
                                    for (i = g = 0, _ = k.length - 1; 0 <= _ ? g <= _ : g >= _; i = 0 <= _ ? ++g : --g) { if (u = k[i], d <= u) { o = b[i]; break } if (d >= u && i === k.length - 1) { o = b[i]; break } if (d > u && d < k[i + 1]) { d = (d - u) / (k[i + 1] - u), o = l.interpolate(b[i], b[i + 1], d, y); break } } else "function" === R(b) && (o = b(d));
                                h[c] = o
                            }
                            return o
                        }, c = function() { return h = {} }, u(n, r), (o = function(e) { var n; return n = i(e), _ && n[_] ? n[_]() : n }).domain = function(e, n, t, r) { var f; return null == t && (t = "e"), arguments.length ? (null != n && (f = l.analyze(e, r), e = 0 === n ? [f.min, f.max] : l.limits(f, t, n)), d(e), o) : p }, o.mode = function(e) { return arguments.length ? (y = e, c(), o) : y }, o.range = function(e, n) { return u(e, n), o }, o.out = function(e) { return _ = e, o }, o.spread = function(e) { return arguments.length ? (j = e, o) : j }, o.correctLightness = function(e) { return arguments.length ? (g = e, c(), s = g ? function(e) { var n, r, f, o, a, c, u, d, s; for (n = i(0, !0).lab()[0], r = i(1, !0).lab()[0], u = n > r, f = i(e, !0).lab()[0], o = f - (a = n + (r - n) * e), d = 0, s = 1, c = 20; .01 < t(o) && 0 < c--;) u && (o *= -1), 0 > o ? (d = e, e += .5 * (s - e)) : (s = e, e += .5 * (d - e)), f = i(e, !0).lab()[0], o = f - a; return e } : function(e) { return e }, o) : g }, o.colors = function(e) {
                            var t, r, f, a, i, c;
                            if (null == e && (e = "hex"), n = [], r = [], 2 < p.length)
                                for (t = f = 1, c = p.length; 1 <= c ? f < c : f > c; t = 1 <= c ? ++f : --f) r.push(.5 * (p[t - 1] + p[t]));
                            else r = p;
                            for (a = 0, i = r.length; a < i; a++) t = r[a], n.push(o(t)[e]());
                            return n
                        }, o
                    }, null == l.scales && (l.scales = {}), l.scales.cool = function() { return l.scale([l.hsl(180, 1, .9), l.hsl(250, .7, .4)]) }, l.scales.hot = function() { return l.scale(["#000", "#f00", "#ff0", "#fff"], [0, .25, .75, 1]).mode("rgb") }, l.analyze = function(e, n, t) {
                        var r, f, o, a, i, c, u;
                        if (o = { min: T, max: -1 * T, sum: 0, values: [], count: 0 }, null == t && (t = function() { return !0 }), r = function(e) { null == e || isNaN(e) || (o.values.push(e), o.sum += e, e < o.min && (o.min = e), e > o.max && (o.max = e), o.count += 1) }, i = function(e, f) { if (t(e, f)) return null != n && "function" === R(n) ? r(n(e)) : null != n && "string" === R(n) || "number" === R(n) ? r(e[n]) : r(e) }, "array" === R(e))
                            for (c = 0, u = e.length; c < u; c++) a = e[c], i(a);
                        else
                            for (f in e) a = e[f], i(a, f);
                        return o.domain = [o.min, o.max], o.limits = function(e, n) { return l.limits(o, e, n) }, o
                    }, l.limits = function(e, n, r) {
                        var o, a, i, c, u, d, s, h, b, g, p, m, v, y, w, x, _, k, j, z, E, S, A, B, N, P, M, G, O, L, q, C, Y, D, U, X, F, K, W, H, V, $, J, Z, Q, ee, ne, te, re, fe, oe, ae, ie, ce, ue, de = Math.log,
                            se = Math.LOG10E;
                        if (null == n && (n = "equal"), null == r && (r = 7), "array" === R(e) && (e = l.analyze(e)), v = e.min, p = e.max, e.sum, N = e.values.sort(function(e, n) { return e - n }), g = [], "c" === n.substr(0, 1) && (g.push(v), g.push(p)), "e" === n.substr(0, 1)) {
                            for (g.push(v), s = P = 1, X = r - 1; 1 <= X ? P <= X : P >= X; s = 1 <= X ? ++P : --P) g.push(v + s / r * (p - v));
                            g.push(p)
                        } else if ("l" === n.substr(0, 1)) {
                            if (0 >= v) throw "Logarithmic scales are only possible for values > 0";
                            for (y = se * de(v), m = se * de(p), g.push(v), s = M = 1, J = r - 1; 1 <= J ? M <= J : M >= J; s = 1 <= J ? ++M : --M) g.push(I(10, y + s / r * (m - y)));
                            g.push(p)
                        } else if ("q" === n.substr(0, 1)) {
                            for (g.push(v), s = G = 1, Z = r - 1; 1 <= Z ? G <= Z : G >= Z; s = 1 <= Z ? ++G : --G) j = N.length * s / r, (z = f(j)) === j ? g.push(N[z]) : (E = j - z, g.push(N[z] * E + N[z + 1] * (1 - E)));
                            g.push(p)
                        } else if ("k" === n.substr(0, 1)) {
                            for (x = N.length, o = Array(x), u = Array(r), S = !0, _ = 0, i = null, (i = []).push(v), s = O = 1, Q = r - 1; 1 <= Q ? O <= Q : O >= Q; s = 1 <= Q ? ++O : --O) i.push(v + s / r * (p - v));
                            for (i.push(p); S;) {
                                for (h = L = 0, ee = r - 1; 0 <= ee ? L <= ee : L >= ee; h = 0 <= ee ? ++L : --L) u[h] = 0;
                                for (s = q = 0, ne = x - 1; 0 <= ne ? q <= ne : q >= ne; s = 0 <= ne ? ++q : --q) {
                                    for (B = N[s], w = T, h = C = 0, te = r - 1; 0 <= te ? C <= te : C >= te; h = 0 <= te ? ++C : --C)(d = t(i[h] - B)) < w && (w = d, a = h);
                                    u[a]++, o[s] = a
                                }
                                for (k = Array(r), h = Y = 0, re = r - 1; 0 <= re ? Y <= re : Y >= re; h = 0 <= re ? ++Y : --Y) k[h] = null;
                                for (s = D = 0, fe = x - 1; 0 <= fe ? D <= fe : D >= fe; s = 0 <= fe ? ++D : --D) c = o[s], null === k[c] ? k[c] = N[s] : k[c] += N[s];
                                for (h = U = 0, F = r - 1; 0 <= F ? U <= F : U >= F; h = 0 <= F ? ++U : --U) k[h] *= 1 / u[h];
                                for (S = !1, h = oe = 0, K = r - 1; 0 <= K ? oe <= K : oe >= K; h = 0 <= K ? ++oe : --oe)
                                    if (k[h] !== i[s]) { S = !0; break }
                                i = k, 200 < ++_ && (S = !1)
                            }
                            for (b = {}, h = ae = 0, W = r - 1; 0 <= W ? ae <= W : ae >= W; h = 0 <= W ? ++ae : --ae) b[h] = [];
                            for (s = ie = 0, H = x - 1; 0 <= H ? ie <= H : ie >= H; s = 0 <= H ? ++ie : --ie) c = o[s], b[c].push(N[s]);
                            for (A = [], h = ce = 0, V = r - 1; 0 <= V ? ce <= V : ce >= V; h = 0 <= V ? ++ce : --ce) A.push(b[h][0]), A.push(b[h][b[h].length - 1]);
                            for (A = A.sort(function(e, n) { return e - n }), g.push(A[0]), s = ue = 1, $ = A.length - 1; ue <= $; s = ue += 2) isNaN(A[s]) || g.push(A[s])
                        }
                        return g
                    }, l.brewer = { OrRd: ["#fff7ec", "#fee8c8", "#fdd49e", "#fdbb84", "#fc8d59", "#ef6548", "#d7301f", "#b30000", "#7f0000"], PuBu: ["#fff7fb", "#ece7f2", "#d0d1e6", "#a6bddb", "#74a9cf", "#3690c0", "#0570b0", "#045a8d", "#023858"], BuPu: ["#f7fcfd", "#e0ecf4", "#bfd3e6", "#9ebcda", "#8c96c6", "#8c6bb1", "#88419d", "#810f7c", "#4d004b"], Oranges: ["#fff5eb", "#fee6ce", "#fdd0a2", "#fdae6b", "#fd8d3c", "#f16913", "#d94801", "#a63603", "#7f2704"], BuGn: ["#f7fcfd", "#e5f5f9", "#ccece6", "#99d8c9", "#66c2a4", "#41ae76", "#238b45", "#006d2c", "#00441b"], YlOrBr: ["#ffffe5", "#fff7bc", "#fee391", "#fec44f", "#fe9929", "#ec7014", "#cc4c02", "#993404", "#662506"], YlGn: ["#ffffe5", "#f7fcb9", "#d9f0a3", "#addd8e", "#78c679", "#41ab5d", "#238443", "#006837", "#004529"], Reds: ["#fff5f0", "#fee0d2", "#fcbba1", "#fc9272", "#fb6a4a", "#ef3b2c", "#cb181d", "#a50f15", "#67000d"], RdPu: ["#fff7f3", "#fde0dd", "#fcc5c0", "#fa9fb5", "#f768a1", "#dd3497", "#ae017e", "#7a0177", "#49006a"], Greens: ["#f7fcf5", "#e5f5e0", "#c7e9c0", "#a1d99b", "#74c476", "#41ab5d", "#238b45", "#006d2c", "#00441b"], YlGnBu: ["#ffffd9", "#edf8b1", "#c7e9b4", "#7fcdbb", "#41b6c4", "#1d91c0", "#225ea8", "#253494", "#081d58"], Purples: ["#fcfbfd", "#efedf5", "#dadaeb", "#bcbddc", "#9e9ac8", "#807dba", "#6a51a3", "#54278f", "#3f007d"], GnBu: ["#f7fcf0", "#e0f3db", "#ccebc5", "#a8ddb5", "#7bccc4", "#4eb3d3", "#2b8cbe", "#0868ac", "#084081"], Greys: ["#ffffff", "#f0f0f0", "#d9d9d9", "#bdbdbd", "#969696", "#737373", "#525252", "#252525", "#000000"], YlOrRd: ["#ffffcc", "#ffeda0", "#fed976", "#feb24c", "#fd8d3c", "#fc4e2a", "#e31a1c", "#bd0026", "#800026"], PuRd: ["#f7f4f9", "#e7e1ef", "#d4b9da", "#c994c7", "#df65b0", "#e7298a", "#ce1256", "#980043", "#67001f"], Blues: ["#f7fbff", "#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#08519c", "#08306b"], PuBuGn: ["#fff7fb", "#ece2f0", "#d0d1e6", "#a6bddb", "#67a9cf", "#3690c0", "#02818a", "#016c59", "#014636"], Spectral: ["#9e0142", "#d53e4f", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#e6f598", "#abdda4", "#66c2a5", "#3288bd", "#5e4fa2"], RdYlGn: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#d9ef8b", "#a6d96a", "#66bd63", "#1a9850", "#006837"], RdBu: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#f7f7f7", "#d1e5f0", "#92c5de", "#4393c3", "#2166ac", "#053061"], PiYG: ["#8e0152", "#c51b7d", "#de77ae", "#f1b6da", "#fde0ef", "#f7f7f7", "#e6f5d0", "#b8e186", "#7fbc41", "#4d9221", "#276419"], PRGn: ["#40004b", "#762a83", "#9970ab", "#c2a5cf", "#e7d4e8", "#f7f7f7", "#d9f0d3", "#a6dba0", "#5aae61", "#1b7837", "#00441b"], RdYlBu: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee090", "#ffffbf", "#e0f3f8", "#abd9e9", "#74add1", "#4575b4", "#313695"], BrBG: ["#543005", "#8c510a", "#bf812d", "#dfc27d", "#f6e8c3", "#f5f5f5", "#c7eae5", "#80cdc1", "#35978f", "#01665e", "#003c30"], RdGy: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#ffffff", "#e0e0e0", "#bababa", "#878787", "#4d4d4d", "#1a1a1a"], PuOr: ["#7f3b08", "#b35806", "#e08214", "#fdb863", "#fee0b6", "#f7f7f7", "#d8daeb", "#b2abd2", "#8073ac", "#542788", "#2d004b"], Set2: ["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854", "#ffd92f", "#e5c494", "#b3b3b3"], Accent: ["#7fc97f", "#beaed4", "#fdc086", "#ffff99", "#386cb0", "#f0027f", "#bf5b17", "#666666"], Set1: ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ffff33", "#a65628", "#f781bf", "#999999"], Set3: ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#b3de69", "#fccde5", "#d9d9d9", "#bc80bd", "#ccebc5", "#ffed6f"], Dark2: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d", "#666666"], Paired: ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f", "#ff7f00", "#cab2d6", "#6a3d9a", "#ffff99", "#b15928"], Pastel2: ["#b3e2cd", "#fdcdac", "#cbd5e8", "#f4cae4", "#e6f5c9", "#fff2ae", "#f1e2cc", "#cccccc"], Pastel1: ["#fbb4ae", "#b3cde3", "#ccebc5", "#decbe4", "#fed9a6", "#ffffcc", "#e5d8bd", "#fddaec", "#f2f2f2"] }, l.colors = { indigo: "#4b0082", gold: "#ffd700", hotpink: "#ff69b4", firebrick: "#b22222", indianred: "#cd5c5c", yellow: "#ffff00", mistyrose: "#ffe4e1", darkolivegreen: "#556b2f", olive: "#808000", darkseagreen: "#8fbc8f", pink: "#ffc0cb", tomato: "#ff6347", lightcoral: "#f08080", orangered: "#ff4500", navajowhite: "#ffdead", lime: "#00ff00", palegreen: "#98fb98", darkslategrey: "#2f4f4f", greenyellow: "#adff2f", burlywood: "#deb887", seashell: "#fff5ee", mediumspringgreen: "#00fa9a", fuchsia: "#ff00ff", papayawhip: "#ffefd5", blanchedalmond: "#ffebcd", chartreuse: "#7fff00", dimgray: "#696969", black: "#000000", peachpuff: "#ffdab9", springgreen: "#00ff7f", aquamarine: "#7fffd4", white: "#ffffff", orange: "#ffa500", lightsalmon: "#ffa07a", darkslategray: "#2f4f4f", brown: "#a52a2a", ivory: "#fffff0", dodgerblue: "#1e90ff", peru: "#cd853f", lawngreen: "#7cfc00", chocolate: "#d2691e", crimson: "#dc143c", forestgreen: "#228b22", darkgrey: "#a9a9a9", lightseagreen: "#20b2aa", cyan: "#00ffff", mintcream: "#f5fffa", silver: "#c0c0c0", antiquewhite: "#faebd7", mediumorchid: "#ba55d3", skyblue: "#87ceeb", gray: "#808080", darkturquoise: "#00ced1", goldenrod: "#daa520", darkgreen: "#006400", floralwhite: "#fffaf0", darkviolet: "#9400d3", darkgray: "#a9a9a9", moccasin: "#ffe4b5", saddlebrown: "#8b4513", grey: "#808080", darkslateblue: "#483d8b", lightskyblue: "#87cefa", lightpink: "#ffb6c1", mediumvioletred: "#c71585", slategrey: "#708090", red: "#ff0000", deeppink: "#ff1493", limegreen: "#32cd32", darkmagenta: "#8b008b", palegoldenrod: "#eee8aa", plum: "#dda0dd", turquoise: "#40e0d0", lightgrey: "#d3d3d3", lightgoldenrodyellow: "#fafad2", darkgoldenrod: "#b8860b", lavender: "#e6e6fa", maroon: "#800000", yellowgreen: "#9acd32", sandybrown: "#f4a460", thistle: "#d8bfd8", violet: "#ee82ee", navy: "#000080", magenta: "#ff00ff", dimgrey: "#696969", tan: "#d2b48c", rosybrown: "#bc8f8f", olivedrab: "#6b8e23", blue: "#0000ff", lightblue: "#add8e6", ghostwhite: "#f8f8ff", honeydew: "#f0fff0", cornflowerblue: "#6495ed", slateblue: "#6a5acd", linen: "#faf0e6", darkblue: "#00008b", powderblue: "#b0e0e6", seagreen: "#2e8b57", darkkhaki: "#bdb76b", snow: "#fffafa", sienna: "#a0522d", mediumblue: "#0000cd", royalblue: "#4169e1", lightcyan: "#e0ffff", green: "#008000", mediumpurple: "#9370db", midnightblue: "#191970", cornsilk: "#fff8dc", paleturquoise: "#afeeee", bisque: "#ffe4c4", slategray: "#708090", darkcyan: "#008b8b", khaki: "#f0e68c", wheat: "#f5deb3", teal: "#008080", darkorchid: "#9932cc", deepskyblue: "#00bfff", salmon: "#fa8072", darkred: "#8b0000", steelblue: "#4682b4", palevioletred: "#db7093", lightslategray: "#778899", aliceblue: "#f0f8ff", lightslategrey: "#778899", lightgreen: "#90ee90", orchid: "#da70d6", gainsboro: "#dcdcdc", mediumseagreen: "#3cb371", lightgray: "#d3d3d3", mediumturquoise: "#48d1cc", lemonchiffon: "#fffacd", cadetblue: "#5f9ea0", lightyellow: "#ffffe0", lavenderblush: "#fff0f5", coral: "#ff7f50", purple: "#800080", aqua: "#00ffff", whitesmoke: "#f5f5f5", mediumslateblue: "#7b68ee", darkorange: "#ff8c00", mediumaquamarine: "#66cdaa", darksalmon: "#e9967a", beige: "#f5f5dc", blueviolet: "#8a2be2", azure: "#f0ffff", lightsteelblue: "#b0c4de", oldlace: "#fdf5e6" }, R = function() { var e, n, t, r, f; for (e = {}, t = 0, r = (f = ["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Undefined", "Null"]).length; t < r; t++) e["[object " + (n = f[t]) + "]"] = n.toLowerCase(); return function(n) { var t; return t = Object.prototype.toString.call(n), e[t] || "object" } }(), z = function(e, n, t) { return null == n && (n = 0), null == t && (t = 1), e < n && (e = n), e > t && (e = t), e }, L = function(e) { return 3 <= e.length ? e : e[0] }, c = 2 * U, i = U / 3, b = D, s = function(e) { var n, t, r, f, o, a, i, c, u, d, h; return 2 === (e = function() { var n, t, r; for (r = [], n = 0, t = e.length; n < t; n++) f = e[n], r.push(l(f)); return r }()).length ? (u = function() { var n, t, r; for (r = [], n = 0, t = e.length; n < t; n++) f = e[n], r.push(f.lab()); return r }(), o = u[0], a = u[1], n = function(e) { var n, t; return t = function() { var t, r; for (r = [], n = t = 0; 2 >= t; n = ++t) r.push(o[n] + e * (a[n] - o[n])); return r }(), l.lab.apply(l, t) }) : 3 === e.length ? (d = function() { var n, t, r; for (r = [], n = 0, t = e.length; n < t; n++) f = e[n], r.push(f.lab()); return r }(), o = d[0], a = d[1], i = d[2], n = function(e) { var n, t; return t = function() { var t, r; for (r = [], n = t = 0; 2 >= t; n = ++t) r.push((1 - e) * (1 - e) * o[n] + 2 * (1 - e) * e * a[n] + e * e * i[n]); return r }(), l.lab.apply(l, t) }) : 4 === e.length ? (h = function() { var n, t, r; for (r = [], n = 0, t = e.length; n < t; n++) f = e[n], r.push(f.lab()); return r }(), o = h[0], a = h[1], i = h[2], c = h[3], n = function(e) { var n, t; return t = function() { var t, r; for (r = [], n = t = 0; 2 >= t; n = ++t) r.push((1 - e) * (1 - e) * (1 - e) * o[n] + 3 * (1 - e) * (1 - e) * e * a[n] + 3 * (1 - e) * e * e * i[n] + e * e * e * c[n]); return r }(), l.lab.apply(l, t) }) : 5 === e.length && (t = s(e.slice(0, 3)), r = s(e.slice(2, 5)), n = function(e) { return .5 > e ? t(2 * e) : r(2 * (e - .5)) }), n }, l.interpolate.bezier = s
                }).call(this)
            }, {}],
            "/home/fmauneko/code/trianglify/node_modules/delaunator/index.js": [function(e, r) {
                "use strict";

                function o(e, t, r) {
                    t || (t = b), r || (r = g);
                    for (var f = 1 / 0, o = 1 / 0, l = -1 / 0, h = -1 / 0, p = this.coords = [], m = this.ids = new Uint32Array(e.length), v = 0; v < e.length; v++) {
                        var y = e[v],
                            w = t(y),
                            x = r(y);
                        m[v] = v, p[2 * v] = w, p[2 * v + 1] = x, w < f && (f = w), x < o && (o = x), w > l && (l = w), x > h && (h = x)
                    }
                    var _, k, j, z = (f + l) / 2,
                        E = (o + h) / 2,
                        S = 1 / 0;
                    for (v = 0; v < e.length; v++) {
                        var A = a(z, E, p[2 * v], p[2 * v + 1]);
                        A < S && (_ = v, S = A)
                    }
                    for (S = 1 / 0, v = 0; v < e.length; v++) v !== _ && (A = a(p[2 * _], p[2 * _ + 1], p[2 * v], p[2 * v + 1])) < S && 0 < A && (k = v, S = A);
                    var B = 1 / 0;
                    for (v = 0; v < e.length; v++)
                        if (v !== _ && v !== k) {
                            var N = c(p[2 * _], p[2 * _ + 1], p[2 * k], p[2 * k + 1], p[2 * v], p[2 * v + 1]);
                            N < B && (j = v, B = N)
                        }
                    if (B === 1 / 0) throw new Error("No Delaunay triangulation exists for this input.");
                    if (0 > i(p[2 * _], p[2 * _ + 1], p[2 * k], p[2 * k + 1], p[2 * j], p[2 * j + 1])) {
                        var P = k;
                        k = j, j = P
                    }
                    var M = p[2 * _],
                        G = p[2 * _ + 1],
                        O = p[2 * k],
                        R = p[2 * k + 1],
                        L = p[2 * j],
                        q = p[2 * j + 1],
                        C = function(e, n, t, r, f, o) {
                            var a = (t -= e) * t + (r -= n) * r,
                                i = (f -= e) * f + (o -= n) * o,
                                c = t * o - r * f;
                            return { x: e + .5 * (o * a - r * i) / c, y: n + .5 * (t * i - f * a) / c }
                        }(M, G, O, R, L, q);
                    for (this._cx = C.x, this._cy = C.y, s(m, p, 0, m.length - 1, C.x, C.y), this._hashSize = Math.ceil(n(e.length)), this._hash = [], v = 0; v < this._hashSize; v++) this._hash[v] = null;
                    var T = this.hull = u(p, _);
                    this._hashEdge(T), T.t = 0, T = u(p, k, T), this._hashEdge(T), T.t = 1, T = u(p, j, T), this._hashEdge(T), T.t = 2;
                    var Y = 2 * e.length - 5,
                        D = this.triangles = new Uint32Array(3 * Y),
                        I = this.halfedges = new Int32Array(3 * Y);
                    this.trianglesLen = 0, this._addTriangle(_, k, j, -1, -1, -1);
                    for (var U, X, F = 0; F < m.length; F++)
                        if (v = m[F], w = p[2 * v], x = p[2 * v + 1], !(w === U && x === X || (U = w, X = x, w === M && x === G || w === O && x === R || w === L && x === q))) {
                            var K, W = this._hashKey(w, x),
                                H = W;
                            do { K = this._hash[H], H = (H + 1) % this._hashSize } while ((!K || K.removed) && H !== W);
                            for (T = K; 0 <= i(w, x, T.x, T.y, T.next.x, T.next.y);)
                                if ((T = T.next) === K) throw new Error("Something is wrong with the input points.");
                            var V = T === K,
                                $ = this._addTriangle(T.i, v, T.next.i, -1, -1, T.t);
                            T.t = $, (T = u(p, v, T)).t = this._legalize($ + 2), T.prev.prev.t === I[$ + 1] && (T.prev.prev.t = $ + 2);
                            for (var J = T.next; 0 > i(w, x, J.x, J.y, J.next.x, J.next.y);) $ = this._addTriangle(J.i, v, J.next.i, J.prev.t, -1, J.t), J.prev.t = this._legalize($ + 2), this.hull = d(J), J = J.next;
                            if (V)
                                for (J = T.prev; 0 > i(w, x, J.prev.x, J.prev.y, J.x, J.y);) $ = this._addTriangle(J.prev.i, v, J.i, -1, J.t, J.prev.t), this._legalize($ + 2), J.prev.t = $, this.hull = d(J), J = J.prev;
                            this._hashEdge(T), this._hashEdge(T.prev)
                        }
                    this.triangles = D.subarray(0, this.trianglesLen), this.halfedges = I.subarray(0, this.trianglesLen)
                }

                function a(e, n, t, r) {
                    var f = e - t,
                        o = n - r;
                    return f * f + o * o
                }

                function i(e, n, t, r, f, o) { return (r - n) * (f - t) - (t - e) * (o - r) }

                function c(e, n, t, r, f, o) {
                    var a = (t -= e) * t + (r -= n) * r,
                        i = (f -= e) * f + (o -= n) * o;
                    if (0 == a || 0 == i) return 1 / 0;
                    var c = t * o - r * f;
                    if (0 == c) return 1 / 0;
                    var u = .5 * (o * a - r * i) / c,
                        d = .5 * (t * i - f * a) / c;
                    return u * u + d * d
                }

                function u(e, n, t) { var r = { i: n, x: e[2 * n], y: e[2 * n + 1], t: 0, prev: null, next: null, removed: !1 }; return t ? (r.next = t.next, r.prev = t, t.next.prev = r, t.next = r) : (r.prev = r, r.next = r), r }

                function d(e) { return e.prev.next = e.next, e.next.prev = e.prev, e.removed = !0, e.prev }

                function s(e, n, t, r, f, o) {
                    var a, i, c;
                    if (20 >= r - t)
                        for (a = t + 1; a <= r; a++) {
                            for (c = e[a], i = a - 1; i >= t && 0 < l(n, e[i], c, f, o);) e[i + 1] = e[i--];
                            e[i + 1] = c
                        } else {
                            for (i = r, h(e, t + r >> 1, a = t + 1), 0 < l(n, e[t], e[r], f, o) && h(e, t, r), 0 < l(n, e[a], e[r], f, o) && h(e, a, r), 0 < l(n, e[t], e[a], f, o) && h(e, t, a), c = e[a];;) {
                                do { a++ } while (0 > l(n, e[a], c, f, o));
                                do { i-- } while (0 < l(n, e[i], c, f, o));
                                if (i < a) break;
                                h(e, a, i)
                            }
                            e[t + 1] = e[i], e[i] = c, r - a + 1 >= i - t ? (s(e, n, a, r, f, o), s(e, n, t, i - 1, f, o)) : (s(e, n, t, i - 1, f, o), s(e, n, a, r, f, o))
                        }
                }

                function l(e, n, t, r, f) {
                    var o = a(e[2 * n], e[2 * n + 1], r, f),
                        i = a(e[2 * t], e[2 * t + 1], r, f);
                    return o - i || e[2 * n] - e[2 * t] || e[2 * n + 1] - e[2 * t + 1]
                }

                function h(e, n, t) {
                    var r = e[n];
                    e[n] = e[t], e[t] = r
                }

                function b(e) { return e[0] }

                function g(e) { return e[1] }
                r.exports = o, o.prototype = {
                    _hashEdge: function(e) { this._hash[this._hashKey(e.x, e.y)] = e },
                    _hashKey: function(e, n) {
                        var r = e - this._cx,
                            o = n - this._cy,
                            a = 1 - r / (t(r) + t(o));
                        return f((2 + (0 > o ? -a : a)) / 4 * this._hashSize)
                    },
                    _legalize: function(e) {
                        var n = this.triangles,
                            t = this.coords,
                            r = this.halfedges,
                            f = r[e],
                            o = e - e % 3,
                            a = f - f % 3,
                            i = o + (e + 2) % 3,
                            c = a + (f + 2) % 3,
                            u = n[i],
                            d = n[e],
                            s = n[o + (e + 1) % 3],
                            l = n[c],
                            h = function(e, n, t, r, f, o, a, i) {
                                var c = (t -= a) * t + (r -= i) * r,
                                    u = (f -= a) * f + (o -= i) * o;
                                return 0 > (e -= a) * (r * u - c * o) - (n -= i) * (t * u - c * f) + (e * e + n * n) * (t * o - r * f)
                            }(t[2 * u], t[2 * u + 1], t[2 * d], t[2 * d + 1], t[2 * s], t[2 * s + 1], t[2 * l], t[2 * l + 1]);
                        return h ? (n[e] = l, n[f] = u, this._link(e, r[c]), this._link(f, r[i]), this._link(i, c), this._legalize(e), this._legalize(a + (f + 1) % 3)) : i
                    },
                    _link: function(e, n) { this.halfedges[e] = n, -1 !== n && (this.halfedges[n] = e) },
                    _addTriangle: function(e, n, t, r, f, o) { var a = this.trianglesLen; return this.triangles[a] = e, this.triangles[a + 1] = n, this.triangles[a + 2] = t, this._link(a, r), this._link(a + 1, f), this._link(a + 2, o), this.trianglesLen += 3, a }
                }
            }, {}],
            "/home/fmauneko/code/trianglify/node_modules/process/browser.js": [function(e, n) {
                function t() {
                    if (!a) {
                        a = !0;
                        for (var e, n = o.length; n;) {
                            e = o, o = [];
                            for (var t = -1; ++t < n;) e[t]();
                            n = o.length
                        }
                        a = !1
                    }
                }

                function r() {}
                var f = n.exports = {},
                    o = [],
                    a = !1;
                f.nextTick = function(e) { o.push(e), a || setTimeout(t, 0) }, f.title = "browser", f.browser = !0, f.env = {}, f.argv = [], f.version = "", f.versions = {}, f.on = r, f.addListener = r, f.once = r, f.off = r, f.removeListener = r, f.removeAllListeners = r, f.emit = r, f.binding = function() { throw new Error("process.binding is not supported") }, f.cwd = function() { return "/" }, f.chdir = function() { throw new Error("process.chdir is not supported") }, f.umask = function() { return 0 }
            }, {}],
            "/home/fmauneko/code/trianglify/node_modules/seedrandom/index.js": [function(e, n) {
                var t = e("./lib/alea"),
                    r = e("./lib/xor128"),
                    f = e("./lib/xorwow"),
                    o = e("./lib/xorshift7"),
                    a = e("./lib/xor4096"),
                    i = e("./lib/tychei"),
                    c = e("./seedrandom");
                c.alea = t, c.xor128 = r, c.xorwow = f, c.xorshift7 = o, c.xor4096 = a, c.tychei = i, n.exports = c
            }, { "./lib/alea": "/home/fmauneko/code/trianglify/node_modules/seedrandom/lib/alea.js", "./lib/tychei": "/home/fmauneko/code/trianglify/node_modules/seedrandom/lib/tychei.js", "./lib/xor128": "/home/fmauneko/code/trianglify/node_modules/seedrandom/lib/xor128.js", "./lib/xor4096": "/home/fmauneko/code/trianglify/node_modules/seedrandom/lib/xor4096.js", "./lib/xorshift7": "/home/fmauneko/code/trianglify/node_modules/seedrandom/lib/xorshift7.js", "./lib/xorwow": "/home/fmauneko/code/trianglify/node_modules/seedrandom/lib/xorwow.js", "./seedrandom": "/home/fmauneko/code/trianglify/node_modules/seedrandom/seedrandom.js" }],
            "/home/fmauneko/code/trianglify/node_modules/seedrandom/lib/alea.js": [function(e, n) {
                ! function(e, n, t) {
                    function r(e, n) { return n.c = e.c, n.s0 = e.s0, n.s1 = e.s1, n.s2 = e.s2, n }

                    function f(e, n) {
                        var t = new function(e) {
                                var n = this,
                                    t = function() {
                                        var e = 4022871197;
                                        return function(n) {
                                            n = n.toString();
                                            for (var t = 0; t < n.length; t++) {
                                                var r = .02519603282416938 * (e += n.charCodeAt(t));
                                                r -= e = r >>> 0, e = (r *= e) >>> 0, e += 4294967296 * (r -= e)
                                            }
                                            return 2.3283064365386963e-10 * (e >>> 0)
                                        }
                                    }();
                                n.next = function() { var e = 2091639 * n.s0 + 2.3283064365386963e-10 * n.c; return n.s0 = n.s1, n.s1 = n.s2, n.s2 = e - (n.c = 0 | e) }, n.c = 1, n.s0 = t(" "), n.s1 = t(" "), n.s2 = t(" "), n.s0 -= t(e), 0 > n.s0 && (n.s0 += 1), n.s1 -= t(e), 0 > n.s1 && (n.s1 += 1), n.s2 -= t(e), 0 > n.s2 && (n.s2 += 1), t = null
                            }(e),
                            f = n && n.state,
                            o = t.next;
                        return o.int32 = function() { return 0 | 4294967296 * t.next() }, o.double = function() { return o() + 1.1102230246251565e-16 * (0 | 2097152 * o()) }, o.quick = o, f && ("object" == typeof f && r(f, t), o.state = function() { return r(t, {}) }), o
                    }
                    n && n.exports ? n.exports = f : t && t.amd ? t(function() { return f }) : this.alea = f
                }(0, "object" == typeof n && n, !1)
            }, {}],
            "/home/fmauneko/code/trianglify/node_modules/seedrandom/lib/tychei.js": [function(e, n) {
                ! function(e, n, t) {
                    function r(e) {
                        var n = this,
                            t = "";
                        n.next = function() {
                            var e = n.b,
                                t = n.c,
                                r = n.d,
                                f = n.a;
                            return e = e << 25 ^ e >>> 7 ^ t, t = 0 | t - r, r = r << 24 ^ r >>> 8 ^ f, f = 0 | f - e, n.b = e = e << 20 ^ e >>> 12 ^ t, n.c = t = 0 | t - r, n.d = r << 16 ^ t >>> 16 ^ f, n.a = 0 | f - e
                        }, n.a = 0, n.b = 0, n.c = -1640531527, n.d = 1367130551, e === f(e) ? (n.a = 0 | e / 4294967296, n.b = 0 | e) : t += e;
                        for (var r = 0; r < t.length + 20; r++) n.b ^= 0 | t.charCodeAt(r), n.next()
                    }

                    function o(e, n) { return n.a = e.a, n.b = e.b, n.c = e.c, n.d = e.d, n }

                    function a(e, n) {
                        var t = new r(e),
                            f = n && n.state,
                            a = function() { return (t.next() >>> 0) / 4294967296 };
                        return a.double = function() {
                            do {
                                var e = t.next() >>> 11,
                                    n = (t.next() >>> 0) / 4294967296,
                                    r = (e + n) / 2097152
                            } while (0 === r);
                            return r
                        }, a.int32 = t.next, a.quick = a, f && ("object" == typeof f && o(f, t), a.state = function() { return o(t, {}) }), a
                    }
                    n && n.exports ? n.exports = a : t && t.amd ? t(function() { return a }) : this.tychei = a
                }(0, "object" == typeof n && n, !1)
            }, {}],
            "/home/fmauneko/code/trianglify/node_modules/seedrandom/lib/xor128.js": [function(e, n) {
                ! function(e, n, t) {
                    function r(e, n) { return n.x = e.x, n.y = e.y, n.z = e.z, n.w = e.w, n }

                    function f(e, n) {
                        var t = new function(e) {
                                var n = this,
                                    t = "";
                                n.x = 0, n.y = 0, n.z = 0, n.w = 0, n.next = function() { var e = n.x ^ n.x << 11; return n.x = n.y, n.y = n.z, n.z = n.w, n.w ^= n.w >>> 19 ^ e ^ e >>> 8 }, e === (0 | e) ? n.x = e : t += e;
                                for (var r = 0; r < t.length + 64; r++) n.x ^= 0 | t.charCodeAt(r), n.next()
                            }(e),
                            f = n && n.state,
                            o = function() { return (t.next() >>> 0) / 4294967296 };
                        return o.double = function() {
                            do {
                                var e = t.next() >>> 11,
                                    n = (t.next() >>> 0) / 4294967296,
                                    r = (e + n) / 2097152
                            } while (0 === r);
                            return r
                        }, o.int32 = t.next, o.quick = o, f && ("object" == typeof f && r(f, t), o.state = function() { return r(t, {}) }), o
                    }
                    n && n.exports ? n.exports = f : t && t.amd ? t(function() { return f }) : this.xor128 = f
                }(0, "object" == typeof n && n, !1)
            }, {}],
            "/home/fmauneko/code/trianglify/node_modules/seedrandom/lib/xor4096.js": [function(n, t) {
                ! function(n, t, r) {
                    function f(n) {
                        var t = this;
                        t.next = function() {
                                var e, n, r = t.w,
                                    f = t.X,
                                    o = t.i;
                                return t.w = r = 0 | r + 1640531527, n = f[127 & o + 34], e = f[o = 127 & o + 1], n ^= n << 13, e ^= e << 17, n ^= n >>> 15, e ^= e >>> 12, n = f[o] = n ^ e, t.i = o, 0 | n + (r ^ r >>> 16)
                            },
                            function(n, t) {
                                var r, f, o, a, i, c = [],
                                    u = 128;
                                for (t === (0 | t) ? (f = t, t = null) : (f = 0, u = e(u, (t += "\0").length)), o = 0, a = -32; a < u; ++a) t && (f ^= t.charCodeAt((a + 32) % t.length)), 0 === a && (i = f), f ^= f << 10, f ^= f >>> 15, f ^= f << 4, f ^= f >>> 13, 0 <= a && (i = 0 | i + 1640531527, r = c[127 & a] ^= f + i, o = 0 == r ? o + 1 : 0);
                                for (128 <= o && (c[127 & (t && t.length || 0)] = -1), o = 127, a = 512; 0 < a; --a) f = c[127 & o + 34], r = c[o = 127 & o + 1], f ^= f << 13, r ^= r << 17, f ^= f >>> 15, r ^= r >>> 12, c[o] = f ^ r;
                                n.w = i, n.X = c, n.i = o
                            }(t, n)
                    }

                    function o(e, n) { return n.i = e.i, n.w = e.w, n.X = e.X.slice(), n }

                    function a(e, n) {
                        null == e && (e = +new Date);
                        var t = new f(e),
                            r = n && n.state,
                            a = function() { return (t.next() >>> 0) / 4294967296 };
                        return a.double = function() {
                            do {
                                var e = t.next() >>> 11,
                                    n = (t.next() >>> 0) / 4294967296,
                                    r = (e + n) / 2097152
                            } while (0 === r);
                            return r
                        }, a.int32 = t.next, a.quick = a, r && (r.X && o(r, t), a.state = function() { return o(t, {}) }), a
                    }
                    t && t.exports ? t.exports = a : r && r.amd ? r(function() { return a }) : this.xor4096 = a
                }(0, "object" == typeof t && t, !1)
            }, {}],
            "/home/fmauneko/code/trianglify/node_modules/seedrandom/lib/xorshift7.js": [function(e, n) {
                ! function(e, n, t) {
                    function r(e, n) { return n.x = e.x.slice(), n.i = e.i, n }

                    function f(e, n) {
                        null == e && (e = +new Date);
                        var t = new function(e) {
                                var n = this;
                                n.next = function() {
                                        var e, t, r = n.x,
                                            f = n.i;
                                        return e = r[f], t = (e ^= e >>> 7) ^ e << 24, e = r[7 & f + 1], t ^= e ^ e >>> 10, e = r[7 & f + 3], t ^= e ^ e >>> 3, e = r[7 & f + 4], t ^= e ^ e << 7, e = r[7 & f + 7], t ^= (e ^= e << 13) ^ e << 9, r[f] = t, n.i = 7 & f + 1, t
                                    },
                                    function(e, n) {
                                        var t, r = [];
                                        if (n === (0 | n)) r[0] = n;
                                        else
                                            for (n = "" + n, t = 0; t < n.length; ++t) r[7 & t] = r[7 & t] << 15 ^ n.charCodeAt(t) + r[7 & t + 1] << 13;
                                        for (; 8 > r.length;) r.push(0);
                                        for (t = 0; 8 > t && 0 === r[t]; ++t);
                                        for (8 == t ? r[7] = -1 : r[t], e.x = r, e.i = 0, t = 256; 0 < t; --t) e.next()
                                    }(n, e)
                            }(e),
                            f = n && n.state,
                            o = function() { return (t.next() >>> 0) / 4294967296 };
                        return o.double = function() {
                            do {
                                var e = t.next() >>> 11,
                                    n = (t.next() >>> 0) / 4294967296,
                                    r = (e + n) / 2097152
                            } while (0 === r);
                            return r
                        }, o.int32 = t.next, o.quick = o, f && (f.x && r(f, t), o.state = function() { return r(t, {}) }), o
                    }
                    n && n.exports ? n.exports = f : t && t.amd ? t(function() { return f }) : this.xorshift7 = f
                }(0, "object" == typeof n && n, !1)
            }, {}],
            "/home/fmauneko/code/trianglify/node_modules/seedrandom/lib/xorwow.js": [function(e, n) {
                ! function(e, n, t) {
                    function r(e, n) { return n.x = e.x, n.y = e.y, n.z = e.z, n.w = e.w, n.v = e.v, n.d = e.d, n }

                    function f(e, n) {
                        var t = new function(e) {
                                var n = this,
                                    t = "";
                                n.next = function() { var e = n.x ^ n.x >>> 2; return n.x = n.y, n.y = n.z, n.z = n.w, n.w = n.v, 0 | (n.d = 0 | n.d + 362437) + (n.v = n.v ^ n.v << 4 ^ e ^ e << 1) }, n.x = 0, n.y = 0, n.z = 0, n.w = 0, n.v = 0, e === (0 | e) ? n.x = e : t += e;
                                for (var r = 0; r < t.length + 64; r++) n.x ^= 0 | t.charCodeAt(r), r == t.length && (n.d = n.x << 10 ^ n.x >>> 4), n.next()
                            }(e),
                            f = n && n.state,
                            o = function() { return (t.next() >>> 0) / 4294967296 };
                        return o.double = function() {
                            do {
                                var e = t.next() >>> 11,
                                    n = (t.next() >>> 0) / 4294967296,
                                    r = (e + n) / 2097152
                            } while (0 === r);
                            return r
                        }, o.int32 = t.next, o.quick = o, f && ("object" == typeof f && r(f, t), o.state = function() { return r(t, {}) }), o
                    }
                    n && n.exports ? n.exports = f : t && t.amd ? t(function() { return f }) : this.xorwow = f
                }(0, "object" == typeof n && n, !1)
            }, {}],
            "/home/fmauneko/code/trianglify/node_modules/seedrandom/seedrandom.js": [function(e, n) {
                ! function(t, r) {
                    function f(e, n, f) {
                        var d = [],
                            s = i(function e(n, t) {
                                var r, f = [],
                                    o = typeof n;
                                if (t && "object" == o)
                                    for (r in n) try { f.push(e(n[r], t - 1)) } catch (t) {}
                                return f.length ? f : "string" == o ? n : n + "\0"
                            }((n = 1 == n ? { entropy: !0 } : n || {}).entropy ? [e, u(t)] : null == e ? c() : e, 3), d),
                            v = new o(d),
                            y = function() { for (var e = v.g(h), n = g, t = 0; e < p;) e = (e + t) * l, n *= l, t = v.g(1); for (; e >= m;) e /= 2, n /= 2, t >>>= 1; return (e + t) / n };
                        return y.int32 = function() { return 0 | v.g(4) }, y.quick = function() { return v.g(4) / 4294967296 }, y.double = y, i(u(v.S), t), (n.pass || f || function(e, n, t, f) { return f && (f.S && a(f, v), e.state = function() { return a(v, {}) }), t ? (r[b] = e, n) : e })(y, s, "global" in n ? n.global : this == r, n.state)
                    }

                    function o(e) {
                        var n, t = e.length,
                            r = this,
                            f = 0,
                            o = r.i = r.j = 0,
                            a = r.S = [];
                        for (t || (e = [t++]); f < l;) a[f] = f++;
                        for (f = 0; f < l; f++) a[f] = a[o = v & o + e[f % t] + (n = a[f])], a[o] = n;
                        (r.g = function(e) { for (var n, t = 0, f = r.i, o = r.j, a = r.S; e--;) n = a[f = v & f + 1], t = t * l + a[v & (a[f] = a[o = v & o + n]) + (a[o] = n)]; return r.i = f, r.j = o, t })(l)
                    }

                    function a(e, n) { return n.i = e.i, n.j = e.j, n.S = e.S.slice(), n }

                    function i(e, n) { for (var t, r = e + "", f = 0; f < r.length;) n[v & f] = v & (t ^= 19 * n[v & f]) + r.charCodeAt(f++); return u(n) }

                    function c() {
                        try { var e; return d && (e = d.randomBytes) ? e = e(l) : (e = new Uint8Array(l), (s.crypto || s.msCrypto).getRandomValues(e)), u(e) } catch (e) {
                            var n = s.navigator,
                                r = n && n.plugins;
                            return [+new Date, s, r, s.screen, u(t)]
                        }
                    }

                    function u(e) { return String.fromCharCode.apply(0, e) }
                    var d, s = this,
                        l = 256,
                        h = 6,
                        b = "random",
                        g = r.pow(l, h),
                        p = r.pow(2, 52),
                        m = 2 * p,
                        v = l - 1;
                    if (r["seed" + b] = f, i(r.random(), t), "object" == typeof n && n.exports) { n.exports = f; try { d = e("crypto") } catch (e) {} }
                }([], Math)
            }, { crypto: !1 }]
        }, {}, ["./lib/trianglify.js"])("./lib/trianglify.js")
    }()
}, function(e, n, t) {
    "use strict";
    t.r(n);
    t(6);
    var r = t(0),
        f = t.n(r);
    const o = f()({ width: window.innerWidth, height: 230, variance: .56, cell_size: 46, x_colors: "random", y_colors: "match_x", palette: f.a.colorbrewer, color_space: "lab", color_function: !1, stroke_width: 1.2, seed: window.location.href }),
        a = document.querySelector(".navbar-header");
    a && (document.body.insertBefore(o.canvas(), a), function() {
        const e = document.getElementById("pattern-placeholder");
        e.parentElement.removeChild(e)
    }(), document.addEventListener("scroll", function() {
        const e = window.pageYOffset;
        e > 128 && a.classList.add("fixed-header"), e <= 128 && a.classList.remove("fixed-header")
    }));
    "hufangyun.com" == window.location.host && "https:" != window.location.protocol && (window.location.protocol = "https");
    var i;
    ! function() {
        var e = document.createElement("script");
        e.src = "https://hm.baidu.com/hm.js?ae46047b557574a12bba544bea130043";
        var n = document.getElementsByTagName("script")[0];
        n.parentNode.insertBefore(e, n)
    }();
    var c = document.getElementById("search");
    c && c.addEventListener("input", function(e) {
        var n = this.value.trim();
        if (n) {
            var t = new RegExp(n.replace(/[ ]/g, "|"), "gmi");
            ! function(e) {
                if (i) e(i);
                else {
                    var n = new XMLHttpRequest;
                    n.open("GET", "/content.json", !0), n.onload = function() {
                        if (this.status >= 200 && this.status < 300) {
                            var n = JSON.parse(this.response);
                            i = n instanceof Array ? n : n.posts, e(i)
                        } else console.error(this.statusText)
                    }, n.onerror = function() { console.error(this.statusText) }, n.send()
                }
            }(function(e) {
                ! function(e) {
                    var n = "";
                    if (e.length) {
                        (n = e.map(function(e, n) { return 0 == n ? "<li><a href=" + window.location.origin + "/" + e.path + ">" + e.title + '</a><span class="search-enter"> 🚀 </span></li>' : "<li><a href=" + window.location.origin + "/" + e.path + ">" + e.title + "</a></li>" })) && (document.querySelector(".search-result-box").style.display = "block");
                        var t = document.getElementById("search-result");
                        t.innerHTML = n.join("")
                    }
                }(e.filter(function(e) { return function(e, n) { return function(e, n) { return n.lastIndex = 0, n.test(e) }(e.title, n) }(e, t) })), document.addEventListener("keydown", e => {
                    var n = e.keyCode;
                    if (13 == n) {
                        var t = document.getElementById("search-result"),
                            r = t.firstChild,
                            f = r && r.firstChild,
                            o = f && f.href;
                        window.location.href = o
                    }
                })
            }), e.preventDefault()
        }
    }), daovoice("init", { app_id: "a215f205" }), daovoice("update")
}, , , , , function(e, n) {}]);