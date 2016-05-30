﻿
//===============================================================================================
// Mod:     Core
// Author:  thien.l.do
// Ref:     http://splitterjsobj.sourceforge.net/
//          Use: jquery.splitter.js            
// Edit:    
// Create:  2011-06-22
// Modify:  yyyy-MM-dd

/*
Split_er javascript object by Brian W
Version 1.2.0; Released 09/17/2010; MIT license
Minimized by Google Closure Compiler, Simple option
http://code.google.com/closure/compiler/
For unminimized code with extensive comments,
download at http://sourceforge.net/projects/splitterjsobj/files/
For live demo w/ examples & additional documentation:
http://splitterjsobj.sourceforge.net/
*/

function Splitter() { function v(a, c) { if (typeof a == "string") return a; return c && (a === undefined || a === null) ? "" : "" + a } function S(a, c) { for (var d = [], f = a.length, g = 0; g < f; g++) d[g] = a[g] instanceof Array ? S(a[g], c[g]) : a[g] + c[g]; return d } function T(a, c) { if (c === undefined) c = true; if (a.global == c) return a; var d = c ? "g" : ""; if (a.ignoreCase) d += "i"; if (a.multiline) d += "m"; if (a.sticky) d += "y"; return RegExp(a.source, d) } function ja(a, c) { var d = RegExp("([" + (c == 1 ? "\\(\\)\\{\\}\\[\\]\\|\\^\\$\\*\\?\\+\\.\\\\" : c == 2 ? "\\^\\-\\]\\\\" : "\\S\\s") + "])", "g"); return a.replace(d, "\\$1") } function G(a, c, d) { a = a; for (var f = 0, g, e = c.length - 1; f < e; f++) { g = c[f]; if (a[g] === undefined) a[g] = []; a = a[g] } a[c[f]] = d } function ka(a, c, d) { if (!(d.length < 2)) { a = a.slice(d.index); a.replace(c, function () { for (var f = arguments.length - 2; f > 0; f--) if (arguments[f] === undefined) d[f] = undefined }) } } function U(a, c) { if (a === undefined || b.multiLevels === null) var d = b.substringDelimiters; else { c = c[a]; d = b.substringDelimiters[a] } return S(c, d) } function V(a) { var c = +b.escCharPreprocess; if (c >= b.escCharPreprocessOptions.all) a = b.evalEscSequences(a, "", b.quoteChars, b.escChar); else if (c >= b.escCharPreprocessOptions.limited) a = b.evalEscSequences(a, b.quoteChars + b.escChar, "", b.escChar); return a } function W(a, c, d, f, g, e, i) { function o(x, H) { var X; L[y] = D; Y[y] = x; Z[y] = H; $[y] = z + e; aa[y] = X = a.substring(z, h); M && g(D, X, x, H, z, e); y++ } function t(x, H) { x = Math.floor(x); if (isNaN(x) && H !== undefined) x = H; return x } b.clearAll(); var j = v(b.quoteChars, true), B, C = false, A = false, u = false, r, p; if (c === undefined || c === null) c = null; else if (Object.prototype.toString.call(c) == "[object RegExp]") { if (C = b.applyNonCompliantExecNpcgFix && b.browserIsNonCompliantExecNpcg) B = T(c, false); c = T(c); A = true } else { c = v(c, true); if (u = j && c == j) c = ""; r = c; p = [c] } d = d === undefined ? -1 : +d + 0 >>> 0 || 0; f = !!f; var M = Object.prototype.toString.call(g) == "[object Function]"; e = e || 0; var s = a.length, J = !!b.nestedQuotes, ba = +b.exposeQuotes < b.exposeQuotesOptions.all, la = +b.exposeQuotes < b.exposeQuotesOptions.nested, E = b.escCharProcess >= 1 ? v(b.escChar, true).charAt(0) : "", ca = b.escCharProcess >= b.escCharProcessOptions.all, ma = Math.floor(b.escCharProcess) == b.escCharProcessOptions.allQuotes, da = b.dblQuoteEsc >= 1 && j, ea = b.dblQuoteEsc >= b.dblQuoteEscOptions.allQuotes, N = !!(j || E), fa = N ? t(b.optimizationBeginsAt, -1) : 0; if (fa < 0) var K = s; else { K = N ? t(b.optimizationEndsAt, 0) : 1; K = Math.max(K, 1) } for (var I = "", O = "", l = 0; l < j.length; l++) { var m = j.charAt(l); I += m; O += j.charAt(++l) || m } var L = [], aa = [], Y = [], Z = [], $ = [], y = 0, D = "", z = 0, k = "", ga, F, P, Q = {}, q = c === null ? s : -1, ha = b.exceptionLevel(2) >= 1, na = !i && b.exceptionLevel(3) >= 1; i = !i && b.exceptionLevel(4) >= 1; var R = false, w = 0, h = 0; if (d != 0) for (; h < s; h += 1 + w, w = 0) { if (h > q) if (A) { if (c.lastIndex != h) c.lastIndex = h; p = c.exec(a); if (p == null) q = s; else { r = p[0]; q = p.index; p.input = undefined; C && ka(a, B, p) } } else if (u) q = s; else { q = a.indexOf(c, h); if (q == -1) q = s } if (R) { if (q != h && b.exceptions.add(4, h + e)) return b.errorRetval; R = false } if (h <= q - K && h >= z + fa) { m = a.substring(h, q); if (N) { if (Q[k] === undefined) { l = da && ea ? j : k ? F + (J ? k : "") : ha ? j : I; l = ja(E + l, 2); Q[k] = RegExp("^[^" + l + "]*") } m = Q[k].exec(m)[0] } D += m; h += m.length; if (h == s) break } if (h == q && (!k || f)) if (r || h > z) { o(r, p); z = h += r.length; D = ""; if (y == d) break; h--; k = ""; continue } var n = a.charAt(h); if (n == E) { if (ca) w = h + 1 < s; else if (j) { m = ma ? j : k ? F + (J ? k : "") : I; for (l = h + 1; a.charAt(l) == E; l++); w = -1 < m.indexOf(a.charAt(l)) && l < s } if (w) { m = a.charAt(h + 1); if (ca && -1 == (j + E).indexOf(m)) { m = b.evalEscSequence(a.substring(h + 1), "", E); n = m[0]; w = m[1].length } else n = m } } else if (da && n == a.charAt(h + 1)) w = ea ? -1 < j.indexOf(n) : k ? n == F || n == k && J : -1 < I.indexOf(n); if (k) { if ((n == F || n == k && J) && !w) { if (n == F) { if (--P == 0) { k = ""; if (u) q = h + 1; else R = i } } else P++; if (k ? la : ba) continue } } else if (!w) if (-1 < (l = I.indexOf(n))) { if (h != z) if (u) { q = h--; continue } else if (na && b.exceptions.add(3, h + e)) return b.errorRetval; k = n; P = 1; ga = h; F = O.charAt(l); if (ba) continue } else if (ha && -1 < O.indexOf(n)) if (b.exceptions.add(2, h + e)) return b.errorRetval; D += n } if (h < s) { D = a.substring(z); h = s } else k && !f && b.exceptions.add(1, ga + e); if (a || !b.matchEmptyStringReturnEmptyArray || u || (A ? !c.test("") : c) || c === null) o("", [""]); if (b.isError()) return b.errorRetval; b.substrings = L; b.substringsRaw = aa; b.substringDelimiters = Y; b.substringDelimiterCaptures = Z; b.substringIndexes = $; b.levelCounts = [y]; return L } function ia(a, c, d, f, g, e, i, o, t, j, B, C, A, u) { if (e == 0) i = c.length - 1; var r = c[e]; W(a, r[0], r[1], r[2], r[3], g, e < i); f && f(g, e, o); if (!(b.isError() || b.substrings.length == 0 && e == 0)) { if (e == 0) { if (i == 0) return; j = []; B = []; C = []; A = []; u = []; o = []; t = []; a = i + 1; for (g = 0; g < a; g++) t[g] = 0; t = t } t[e] += b.substrings.length; if (d || e == i) { if (d) o[0] = e; G(j, o, b.substrings); G(B, o, b.substringsRaw); G(C, o, b.substringDelimiters); G(A, o, b.substringDelimiterCaptures); G(u, o, b.substringIndexes) } a = e + 1; if (!(a > i)) { g = b.substringsRaw; r = b.substringIndexes; for (var p = 0, M = g.length; p < M; p++) { o.push(p); ia(g[p], c, d, f, r[p], a, i, o, t, j, B, C, A, u); if (b.isError()) return; o.pop() } if (!(e > 0)) { b.substrings = j; b.substringsRaw = B; b.substringDelimiters = C; b.substringDelimiterCaptures = A; b.substringIndexes = u; b.levelCounts = t; if (d) b.multiLevels = i + 1 } } } } var b = this; this.evalEscSequence = function (a, c) { var d = /^(?:(u[\dA-Fa-f]{4}|x[\dA-Fa-f]{2})|([0-3][0-7]{0,2}|[4-7][0-7]?)|(\r?\n|\r)|[\S\s]?)/.exec(a.substring(0, 5)), f; return [d[1] ? String.fromCharCode(parseInt(d[0].substring(1), 16)) : d[2] ? String.fromCharCode(parseInt(d[0], 8)) : d[3] ? "" : 0 < (f = "-btnvfr".indexOf(d[0])) ? String.fromCharCode(7 + f) : d[0] || c, d[0]] }; this.evalEscSequences = function (a, c, d, f) { if (f === undefined) f = "\\"; else { f = v(f, true); if (!f) return a; f = f.charAt(0) } c = v(c, true); d = v(d, true); a = v(a); for (var g = "", e = 0, i; ;) { i = a.indexOf(f, e); if (i == -1) break; g += a.substring(e, i); i++; e = a.charAt(i); if (-1 < c.indexOf(e)) { g += f + e; e = i + 1 } else if (-1 < d.indexOf(e)) { g += e; e = i + 1 } else { e = this.evalEscSequence(a.substring(i), f, f); g += e[0]; e = i + e[1].length } } return g + a.substring(e) }; this.browserIsNonCompliantExecNpcg = /()??/.exec("")[1] !== undefined; this.applyNonCompliantExecNpcgFix = true; this.exceptions = new (function () { this.exceptionLevelOptions = { none: 0, warning: 1, error: 2 }; this.definedExceptions = []; this.definedExceptions[1] = { message: "Pos %1: Unclosed quote", level: this.exceptionLevelOptions.error }; this.definedExceptions[2] = { message: "Pos %1: Closing quote with no prior opening quote", level: this.exceptionLevelOptions.none }; this.definedExceptions[3] = { message: "Pos %1: Opening quote is not immediately preceded by a delimiter or beginning of input", level: this.exceptionLevelOptions.none }; this.definedExceptions[4] = { message: "Pos %1: Char following closing quote is not the first char of a delimiter", level: this.exceptionLevelOptions.none }; this.editDefinedException = function (a, c, d) { a = this.definedExceptions[a]; if (c !== undefined) a.message = c; if (d !== undefined) a.level = d }; this.clear = function () { this.items = []; this.lastError = null }; this.clear(); this.add = function (a, c) { var d = this.definedExceptions[a], f = d.level; if (f < this.exceptionLevelOptions.warning) return false; for (var g = this.items, e = g.length - 1; e >= 0; e--) if (g[e].number === a && g[e].pos === c && g[e].level === f) return g[e].isError; d = d.message; for (e = arguments.length - 1; e >= 1; e--) d = d.replace("%" + e, arguments[e]); f = { number: a, message: d, pos: c, level: f, isError: f >= this.exceptionLevelOptions.error }; g.push(f); if (f.isError) this.lastError = f; Object.prototype.toString.call(this.callback) == "[object Function]" && this.callback(f); return f.isError } }); this.exceptionLevel = function (a, c) { c !== undefined && this.exceptions.editDefinedException(a, undefined, c); return this.exceptions.definedExceptions[a].level }; this.error = function () { return this.exceptions.lastError }; this.isError = function () { return this.error() != null }; this.defaults = {}; this.resetProperties = function () { for (var a in this.defaults) if (this.defaults.hasOwnProperty(a)) this[a] = this.defaults[a] }; this.defaults.quoteChars = '""\u2018\u2019\u201c\u201d'; this.quoteChars = this.defaults.quoteChars; this.defaults.escChar = "\\"; this.escChar = this.defaults.escChar; this.escCharProcessOptions = { none: 0, effectiveQuotes: 1, allQuotes: 2, all: 3 }; this.defaults.escCharProcess = this.escCharProcessOptions.all; this.escCharProcess = this.defaults.escCharProcess; this.dblQuoteEscOptions = { none: 0, effectiveQuotes: 1, allQuotes: 2 }; this.defaults.dblQuoteEsc = this.dblQuoteEscOptions.none; this.dblQuoteEsc = this.defaults.dblQuoteEsc; this.defaults.nestedQuotes = true; this.nestedQuotes = this.defaults.nestedQuotes; this.exposeQuotesOptions = { none: 0, nested: 1, all: 2 }; this.defaults.exposeQuotes = this.exposeQuotesOptions.nested; this.exposeQuotes = this.defaults.exposeQuotes; this.escCharPreprocessOptions = { none: 0, limited: 1, all: 2 }; this.defaults.escCharPreprocess = this.escCharPreprocessOptions.none; this.escCharPreprocess = this.defaults.escCharPreprocess; this.matchEmptyStringReturnEmptyArray = true; this.defaults.optimizationBeginsAt = 0; this.optimizationBeginsAt = this.defaults.optimizationBeginsAt; this.defaults.optimizationEndsAt = 2; this.optimizationEndsAt = this.defaults.optimizationEndsAt; this.saveMultiLevels = true; this.errorRetval = []; this.substrings = []; this.substringsRaw = []; this.substringDelimiters = []; this.substringDelimiterCaptures = []; this.substringIndexes = []; this.substringsDelimited = function (a) { return U(a, this.substrings) }; this.substringsRawDelimited = function (a) { return U(a, this.substringsRaw) }; this.input = this.multiLevels = this.levelCounts = null; this.clearAll = function () { this.substrings = []; this.substringsRaw = []; this.substringDelimiters = []; this.substringDelimiterCaptures = []; this.substringIndexes = []; this.multiLevels = this.substringsCount = null }; this.split = function (a, c, d, f, g) { this.exceptions.clear(); a = v(a); if (+b.escCharPreprocess >= b.escCharPreprocessOptions.limited) a = V(a); this.input = a; return W(a, c, d, f, g) }; this.splitNlevels = function (a, c, d) { this.exceptions.clear(); a = v(a); if (+b.escCharPreprocess >= b.escCharPreprocessOptions.limited) a = V(a); this.input = a; if (Object.prototype.toString.call(d) != "[object Function]") d = false; if (c === undefined || c === null || c.length == 0) c = [[]]; ia(a, c, !!this.saveMultiLevels, d, 0, 0); return this.isError() ? this.errorRetval : this.substrings } };

//================================================================================================
//EXAMPLE:
/*
var data = '' +
'album; artist; price\n' +
'"late\\"ralus"; "tool"; 13.00\n' +
'"aenima"; "tool"; 12.00\n' +
'"10,000 days"; "tool"; 14.00\n' +
'"down in it"; "nine, inch   nails"; 3.00\n' +
'"broken"; "nine;inch   nails"; 6.00';
//Or 
//data = 'Get data from service in success event';
var obj = data.CSV2JSON();
console.log(obj);
*/
//================================================================================================
var CCSV_SeperatorData = '\n###\n';
function CCSV(data) {
    this.Header = [];
    this.Data = [];
    this.Options = {
        SeperatorColumn: ';',   //!This is important option
        SeperatorRow: '\n'      //!This is important option
    };

    this.ToJSON = function (headers, data) {
        var obj = {};
        try {
            for (i = 0; i < headers.length; i++) {
                obj[headers[i]] = data[i];
            }
        }
        catch (e) {
            if (console) {
                console.log('::ERROR in CCSV.ToJSON()');
                console.log('  ' + e);
                console.log('  Data: ' + data);
            }
        }
        return obj;
    };
    this.Init = function () {
        try {
            //debugger;
            var splitter = new Splitter();
            var Delimiters = [[/\r?\n/, undefined, false, undefined], [/\s*;\s*/, undefined, false, undefined]];
            var arrData = splitter.splitNlevels(data, Delimiters)[1];

            if (arrData.length > 0) {
                this.Header = arrData[0];
            }
            var i = 1;
            for (i = 1; i < arrData.length; i++) {
                var obj = this.ToJSON(this.Header, arrData[i]);
                this.Data.push(obj);
            }
        }
        catch (e) {
            if (console) {
                console.log('::ERROR in CCSV.Init()');
                console.log(e);
            }
            return null;
        }
    }
    this.Init();
}

String.prototype.CSV2JSON = function (seperator) {
    var csvData = this;
    var csvObj = new CCSV(csvData);
    return csvObj.Data;
}


String.prototype.CSV2JSON2 = function (seperator) {
    var csvDatas = this;
    var csvData = csvDatas.split(CCSV_SeperatorData);
    var ret = [];
    for (j = 0; j < csvData.length; j++) {
        var csvObj = new CCSV(csvData[j]);
        ret.push(csvObj.Data);
    }
    return ret;
}