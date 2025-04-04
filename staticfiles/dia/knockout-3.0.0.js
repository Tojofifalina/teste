// Knockout JavaScript library v3.0.0
// (c) Steven Sanderson - http://knockoutjs.com/
// License: MIT (http://www.opensource.org/licenses/mit-license.php)

(function () {
    (function (q) {
        var y = this || (0, eval)("this"), w = y.document, K = y.navigator, u = y.jQuery, B = y.JSON; (function (q) { "function" === typeof require && "object" === typeof exports && "object" === typeof module ? q(module.exports || exports) : "function" === typeof define && define.amd ? define(["exports"], q) : q(y.ko = {}) })(function (F) {
            function G(a, c) { return null === a || typeof a in N ? a === c : !1 } function H(b, c, d, e) {
                a.d[b] = {
                    init: function (b) { a.a.f.set(b, L, {}); return { controlsDescendantBindings: !0 } }, update: function (b, h, k, m, f) {
                        k = a.a.f.get(b, L); h = a.a.c(h());
                        m = !d !== !h; var p = !k.ob; if (p || c || m !== k.Db) p && (k.ob = a.a.Ya(a.e.childNodes(b), !0)), m ? (p || a.e.S(b, a.a.Ya(k.ob)), a.Ta(e ? e(f, h) : f, b)) : a.e.Z(b), k.Db = m
                    }
                }; a.g.Y[b] = !1; a.e.P[b] = !0
            } var a = "undefined" !== typeof F ? F : {}; a.b = function (b, c) { for (var d = b.split("."), e = a, g = 0; g < d.length - 1; g++)e = e[d[g]]; e[d[d.length - 1]] = c }; a.s = function (a, c, d) { a[c] = d }; a.version = "3.0.0"; a.b("version", a.version); a.a = function () {
                function b(a, b) { for (var f in a) a.hasOwnProperty(f) && b(f, a[f]) } function c(k, b) {
                    if ("input" !== a.a.v(k) || !k.type || "click" !=
                        b.toLowerCase()) return !1; var f = k.type; return "checkbox" == f || "radio" == f
                } var d = {}, e = {}; d[K && /Firefox\/2/i.test(K.userAgent) ? "KeyboardEvent" : "UIEvents"] = ["keyup", "keydown", "keypress"]; d.MouseEvents = "click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" "); b(d, function (a, b) { if (b.length) for (var f = 0, c = b.length; f < c; f++)e[b[f]] = a }); var g = { propertychange: !0 }, h = w && function () {
                    for (var a = 3, b = w.createElement("div"), f = b.getElementsByTagName("i"); b.innerHTML = "\x3c!--[if gt IE " +
                        ++a + "]><i></i><![endif]--\x3e", f[0];); return 4 < a ? a : q
                }(); return {
                    $a: ["authenticity_token", /^__RequestVerificationToken(_.*)?$/], n: function (a, b) { for (var f = 0, c = a.length; f < c; f++)b(a[f]) }, l: function (a, b) { if ("function" == typeof Array.prototype.indexOf) return Array.prototype.indexOf.call(a, b); for (var f = 0, c = a.length; f < c; f++)if (a[f] === b) return f; return -1 }, Ua: function (a, b, f) { for (var c = 0, d = a.length; c < d; c++)if (b.call(f, a[c])) return a[c]; return null }, ia: function (b, c) { var f = a.a.l(b, c); 0 <= f && b.splice(f, 1) }, Va: function (b) {
                        b =
                        b || []; for (var c = [], f = 0, d = b.length; f < d; f++)0 > a.a.l(c, b[f]) && c.push(b[f]); return c
                    }, ha: function (a, b) { a = a || []; for (var f = [], c = 0, d = a.length; c < d; c++)f.push(b(a[c])); return f }, ga: function (a, b) { a = a || []; for (var f = [], c = 0, d = a.length; c < d; c++)b(a[c]) && f.push(a[c]); return f }, X: function (a, b) { if (b instanceof Array) a.push.apply(a, b); else for (var f = 0, c = b.length; f < c; f++)a.push(b[f]); return a }, V: function (b, c, f) { var d = a.a.l(a.a.Ha(b), c); 0 > d ? f && b.push(c) : f || b.splice(d, 1) }, extend: function (a, b) {
                        if (b) for (var f in b) b.hasOwnProperty(f) &&
                            (a[f] = b[f]); return a
                    }, K: b, Da: function (a, b) { if (!a) return a; var f = {}, c; for (c in a) a.hasOwnProperty(c) && (f[c] = b(a[c], c, a)); return f }, wa: function (b) { for (; b.firstChild;)a.removeNode(b.firstChild) }, Vb: function (b) { b = a.a.Q(b); for (var c = w.createElement("div"), f = 0, d = b.length; f < d; f++)c.appendChild(a.L(b[f])); return c }, Ya: function (b, c) { for (var f = 0, d = b.length, e = []; f < d; f++) { var g = b[f].cloneNode(!0); e.push(c ? a.L(g) : g) } return e }, S: function (b, c) { a.a.wa(b); if (c) for (var f = 0, d = c.length; f < d; f++)b.appendChild(c[f]) }, nb: function (b,
                        c) { var f = b.nodeType ? [b] : b; if (0 < f.length) { for (var d = f[0], e = d.parentNode, g = 0, n = c.length; g < n; g++)e.insertBefore(c[g], d); g = 0; for (n = f.length; g < n; g++)a.removeNode(f[g]) } }, $: function (a, b) { if (a.length) { for (b = 8 === b.nodeType && b.parentNode || b; a.length && a[0].parentNode !== b;)a.splice(0, 1); if (1 < a.length) { var f = a[0], c = a[a.length - 1]; for (a.length = 0; f !== c;)if (a.push(f), f = f.nextSibling, !f) return; a.push(c) } } return a }, qb: function (a, b) { 7 > h ? a.setAttribute("selected", b) : a.selected = b }, la: function (a) {
                            return null === a || a ===
                                q ? "" : a.trim ? a.trim() : a.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
                        }, ec: function (b, c) { for (var f = [], d = (b || "").split(c), e = 0, g = d.length; e < g; e++) { var n = a.a.la(d[e]); "" !== n && f.push(n) } return f }, ac: function (a, b) { a = a || ""; return b.length > a.length ? !1 : a.substring(0, b.length) === b }, Gb: function (a, b) {
                            if (a === b) return !0; if (11 === a.nodeType) return !1; if (b.contains) return b.contains(3 === a.nodeType ? a.parentNode : a); if (b.compareDocumentPosition) return 16 == (b.compareDocumentPosition(a) & 16); for (; a && a != b;)a = a.parentNode;
                            return !!a
                        }, va: function (b) { return a.a.Gb(b, b.ownerDocument.documentElement) }, Ra: function (b) { return !!a.a.Ua(b, a.a.va) }, v: function (a) { return a && a.tagName && a.tagName.toLowerCase() }, r: function (b, d, f) {
                            var e = h && g[d]; if (e || "undefined" == typeof u) if (e || "function" != typeof b.addEventListener) if ("undefined" != typeof b.attachEvent) { var s = function (a) { f.call(b, a) }, l = "on" + d; b.attachEvent(l, s); a.a.C.ea(b, function () { b.detachEvent(l, s) }) } else throw Error("Browser doesn't support addEventListener or attachEvent"); else b.addEventListener(d,
                                f, !1); else { if (c(b, d)) { var n = f; f = function (a, b) { var f = this.checked; b && (this.checked = !0 !== b.Ab); n.call(this, a); this.checked = f } } u(b).bind(d, f) }
                        }, da: function (a, b) {
                            if (!a || !a.nodeType) throw Error("element must be a DOM node when calling triggerEvent"); if ("undefined" != typeof u) { var f = []; c(a, b) && f.push({ Ab: a.checked }); u(a).trigger(b, f) } else if ("function" == typeof w.createEvent) if ("function" == typeof a.dispatchEvent) f = w.createEvent(e[b] || "HTMLEvents"), f.initEvent(b, !0, !0, y, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, a), a.dispatchEvent(f);
                            else throw Error("The supplied element doesn't support dispatchEvent"); else if ("undefined" != typeof a.fireEvent) c(a, b) && (a.checked = !0 !== a.checked), a.fireEvent("on" + b); else throw Error("Browser doesn't support triggering events");
                        }, c: function (b) { return a.M(b) ? b() : b }, Ha: function (b) { return a.M(b) ? b.t() : b }, ma: function (b, c, f) { if (c) { var d = /\S+/g, e = b.className.match(d) || []; a.a.n(c.match(d), function (b) { a.a.V(e, b, f) }); b.className = e.join(" ") } }, Ma: function (b, c) {
                            var f = a.a.c(c); if (null === f || f === q) f = ""; var d = a.e.firstChild(b);
                            !d || 3 != d.nodeType || a.e.nextSibling(d) ? a.e.S(b, [w.createTextNode(f)]) : d.data = f; a.a.Jb(b)
                        }, pb: function (a, b) { a.name = b; if (7 >= h) try { a.mergeAttributes(w.createElement("<input name='" + a.name + "'/>"), !1) } catch (f) { } }, Jb: function (a) { 9 <= h && (a = 1 == a.nodeType ? a : a.parentNode, a.style && (a.style.zoom = a.style.zoom)) }, Hb: function (a) { if (h) { var b = a.style.width; a.style.width = 0; a.style.width = b } }, Zb: function (b, c) { b = a.a.c(b); c = a.a.c(c); for (var f = [], d = b; d <= c; d++)f.push(d); return f }, Q: function (a) {
                            for (var b = [], c = 0, d = a.length; c <
                                d; c++)b.push(a[c]); return b
                        }, cc: 6 === h, dc: 7 === h, ja: h, ab: function (b, c) { for (var f = a.a.Q(b.getElementsByTagName("input")).concat(a.a.Q(b.getElementsByTagName("textarea"))), d = "string" == typeof c ? function (a) { return a.name === c } : function (a) { return c.test(a.name) }, e = [], g = f.length - 1; 0 <= g; g--)d(f[g]) && e.push(f[g]); return e }, Wb: function (b) { return "string" == typeof b && (b = a.a.la(b)) ? B && B.parse ? B.parse(b) : (new Function("return " + b))() : null }, Na: function (b, c, f) {
                            if (!B || !B.stringify) throw Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");
                            return B.stringify(a.a.c(b), c, f)
                        }, Xb: function (c, d, f) {
                            f = f || {}; var e = f.params || {}, g = f.includeFields || this.$a, h = c; if ("object" == typeof c && "form" === a.a.v(c)) for (var h = c.action, n = g.length - 1; 0 <= n; n--)for (var r = a.a.ab(c, g[n]), v = r.length - 1; 0 <= v; v--)e[r[v].name] = r[v].value; d = a.a.c(d); var t = w.createElement("form"); t.style.display = "none"; t.action = h; t.method = "post"; for (var E in d) c = w.createElement("input"), c.name = E, c.value = a.a.Na(a.a.c(d[E])), t.appendChild(c); b(e, function (a, b) {
                                var c = w.createElement("input"); c.name =
                                    a; c.value = b; t.appendChild(c)
                            }); w.body.appendChild(t); f.submitter ? f.submitter(t) : t.submit(); setTimeout(function () { t.parentNode.removeChild(t) }, 0)
                        }
                }
            }(); a.b("utils", a.a); a.b("utils.arrayForEach", a.a.n); a.b("utils.arrayFirst", a.a.Ua); a.b("utils.arrayFilter", a.a.ga); a.b("utils.arrayGetDistinctValues", a.a.Va); a.b("utils.arrayIndexOf", a.a.l); a.b("utils.arrayMap", a.a.ha); a.b("utils.arrayPushAll", a.a.X); a.b("utils.arrayRemoveItem", a.a.ia); a.b("utils.extend", a.a.extend); a.b("utils.fieldsIncludedWithJsonPost",
                a.a.$a); a.b("utils.getFormFields", a.a.ab); a.b("utils.peekObservable", a.a.Ha); a.b("utils.postJson", a.a.Xb); a.b("utils.parseJson", a.a.Wb); a.b("utils.registerEventHandler", a.a.r); a.b("utils.stringifyJson", a.a.Na); a.b("utils.range", a.a.Zb); a.b("utils.toggleDomNodeCssClass", a.a.ma); a.b("utils.triggerEvent", a.a.da); a.b("utils.unwrapObservable", a.a.c); a.b("utils.objectForEach", a.a.K); a.b("utils.addOrRemoveItem", a.a.V); a.b("unwrap", a.a.c); Function.prototype.bind || (Function.prototype.bind = function (a) {
                    var c =
                        this, d = Array.prototype.slice.call(arguments); a = d.shift(); return function () { return c.apply(a, d.concat(Array.prototype.slice.call(arguments))) }
                }); a.a.f = new function () {
                    function a(b, h) { var k = b[d]; if (!k || "null" === k || !e[k]) { if (!h) return q; k = b[d] = "ko" + c++; e[k] = {} } return e[k] } var c = 0, d = "__ko__" + (new Date).getTime(), e = {}; return {
                        get: function (c, d) { var e = a(c, !1); return e === q ? q : e[d] }, set: function (c, d, e) { if (e !== q || a(c, !1) !== q) a(c, !0)[d] = e }, clear: function (a) { var b = a[d]; return b ? (delete e[b], a[d] = null, !0) : !1 }, D: function () {
                            return c++ +
                                d
                        }
                    }
                }; a.b("utils.domData", a.a.f); a.b("utils.domData.clear", a.a.f.clear); a.a.C = new function () {
                    function b(b, c) { var e = a.a.f.get(b, d); e === q && c && (e = [], a.a.f.set(b, d, e)); return e } function c(d) { var e = b(d, !1); if (e) for (var e = e.slice(0), m = 0; m < e.length; m++)e[m](d); a.a.f.clear(d); "function" == typeof u && "function" == typeof u.cleanData && u.cleanData([d]); if (g[d.nodeType]) for (e = d.firstChild; d = e;)e = d.nextSibling, 8 === d.nodeType && c(d) } var d = a.a.f.D(), e = { 1: !0, 8: !0, 9: !0 }, g = { 1: !0, 9: !0 }; return {
                        ea: function (a, c) {
                            if ("function" !=
                                typeof c) throw Error("Callback must be a function"); b(a, !0).push(c)
                        }, mb: function (c, e) { var g = b(c, !1); g && (a.a.ia(g, e), 0 == g.length && a.a.f.set(c, d, q)) }, L: function (b) { if (e[b.nodeType] && (c(b), g[b.nodeType])) { var d = []; a.a.X(d, b.getElementsByTagName("*")); for (var m = 0, f = d.length; m < f; m++)c(d[m]) } return b }, removeNode: function (b) { a.L(b); b.parentNode && b.parentNode.removeChild(b) }
                    }
                }; a.L = a.a.C.L; a.removeNode = a.a.C.removeNode; a.b("cleanNode", a.L); a.b("removeNode", a.removeNode); a.b("utils.domNodeDisposal", a.a.C);
            a.b("utils.domNodeDisposal.addDisposeCallback", a.a.C.ea); a.b("utils.domNodeDisposal.removeDisposeCallback", a.a.C.mb); (function () {
                a.a.Fa = function (b) {
                    var c; if ("undefined" != typeof u) if (u.parseHTML) c = u.parseHTML(b) || []; else { if ((c = u.clean([b])) && c[0]) { for (b = c[0]; b.parentNode && 11 !== b.parentNode.nodeType;)b = b.parentNode; b.parentNode && b.parentNode.removeChild(b) } } else {
                        var d = a.a.la(b).toLowerCase(); c = w.createElement("div"); d = d.match(/^<(thead|tbody|tfoot)/) && [1, "<table>", "</table>"] || !d.indexOf("<tr") && [2,
                            "<table><tbody>", "</tbody></table>"] || (!d.indexOf("<td") || !d.indexOf("<th")) && [3, "<table><tbody><tr>", "</tr></tbody></table>"] || [0, "", ""]; b = "ignored<div>" + d[1] + b + d[2] + "</div>"; for ("function" == typeof y.innerShiv ? c.appendChild(y.innerShiv(b)) : c.innerHTML = b; d[0]--;)c = c.lastChild; c = a.a.Q(c.lastChild.childNodes)
                    } return c
                }; a.a.Ka = function (b, c) { a.a.wa(b); c = a.a.c(c); if (null !== c && c !== q) if ("string" != typeof c && (c = c.toString()), "undefined" != typeof u) u(b).html(c); else for (var d = a.a.Fa(c), e = 0; e < d.length; e++)b.appendChild(d[e]) }
            })();
            a.b("utils.parseHtmlFragment", a.a.Fa); a.b("utils.setHtml", a.a.Ka); a.u = function () {
                function b(c, e) { if (c) if (8 == c.nodeType) { var g = a.u.jb(c.nodeValue); null != g && e.push({ Fb: c, Tb: g }) } else if (1 == c.nodeType) for (var g = 0, h = c.childNodes, k = h.length; g < k; g++)b(h[g], e) } var c = {}; return {
                    Ca: function (a) {
                        if ("function" != typeof a) throw Error("You can only pass a function to ko.memoization.memoize()"); var b = (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1) + (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1);
                        c[b] = a; return "\x3c!--[ko_memo:" + b + "]--\x3e"
                    }, ub: function (a, b) { var g = c[a]; if (g === q) throw Error("Couldn't find any memo with ID " + a + ". Perhaps it's already been unmemoized."); try { return g.apply(null, b || []), !0 } finally { delete c[a] } }, vb: function (c, e) { var g = []; b(c, g); for (var h = 0, k = g.length; h < k; h++) { var m = g[h].Fb, f = [m]; e && a.a.X(f, e); a.u.ub(g[h].Tb, f); m.nodeValue = ""; m.parentNode && m.parentNode.removeChild(m) } }, jb: function (a) { return (a = a.match(/^\[ko_memo\:(.*?)\]$/)) ? a[1] : null }
                }
            }(); a.b("memoization", a.u); a.b("memoization.memoize",
                a.u.Ca); a.b("memoization.unmemoize", a.u.ub); a.b("memoization.parseMemoText", a.u.jb); a.b("memoization.unmemoizeDomNodeAndDescendants", a.u.vb); a.xa = { throttle: function (b, c) { b.throttleEvaluation = c; var d = null; return a.h({ read: b, write: function (a) { clearTimeout(d); d = setTimeout(function () { b(a) }, c) } }) }, notify: function (a, c) { a.equalityComparer = "always" == c ? null : G } }; var N = { undefined: 1, "boolean": 1, number: 1, string: 1 }; a.b("extenders", a.xa); a.sb = function (b, c, d) {
                    this.target = b; this.qa = c; this.Eb = d; a.s(this, "dispose",
                        this.B)
                }; a.sb.prototype.B = function () { this.Qb = !0; this.Eb() }; a.ca = function () { this.F = {}; a.a.extend(this, a.ca.fn); a.s(this, "subscribe", this.T); a.s(this, "extend", this.extend); a.s(this, "getSubscriptionsCount", this.Lb) }; var I = "change"; a.ca.fn = {
                    T: function (b, c, d) { d = d || I; var e = new a.sb(this, c ? b.bind(c) : b, function () { a.a.ia(this.F[d], e) }.bind(this)); this.F[d] || (this.F[d] = []); this.F[d].push(e); return e }, notifySubscribers: function (b, c) {
                        c = c || I; if (this.cb(c)) try {
                            a.i.Wa(); for (var d = this.F[c].slice(0), e = 0, g; g = d[e]; ++e)g &&
                                !0 !== g.Qb && g.qa(b)
                        } finally { a.i.end() }
                    }, cb: function (a) { return this.F[a] && this.F[a].length }, Lb: function () { var b = 0; a.a.K(this.F, function (a, d) { b += d.length }); return b }, extend: function (b) { var c = this; b && a.a.K(b, function (b, e) { var g = a.xa[b]; "function" == typeof g && (c = g(c, e) || c) }); return c }
                }; a.fb = function (a) { return null != a && "function" == typeof a.T && "function" == typeof a.notifySubscribers }; a.b("subscribable", a.ca); a.b("isSubscribable", a.fb); a.i = function () {
                    var b = []; return {
                        Wa: function (a) { b.push(a && { qa: a, Za: [] }) },
                        end: function () { b.pop() }, lb: function (c) { if (!a.fb(c)) throw Error("Only subscribable things can act as dependencies"); if (0 < b.length) { var d = b[b.length - 1]; !d || 0 <= a.a.l(d.Za, c) || (d.Za.push(c), d.qa(c)) } }, p: function (a, d, e) { try { return b.push(null), a.apply(d, e || []) } finally { b.pop() } }
                    }
                }(); a.q = function (b) {
                    function c() { if (0 < arguments.length) return c.equalityComparer && c.equalityComparer(d, arguments[0]) || (c.O(), d = arguments[0], c.N()), this; a.i.lb(c); return d } var d = b; a.ca.call(c); c.t = function () { return d }; c.N = function () { c.notifySubscribers(d) };
                    c.O = function () { c.notifySubscribers(d, "beforeChange") }; a.a.extend(c, a.q.fn); a.s(c, "peek", c.t); a.s(c, "valueHasMutated", c.N); a.s(c, "valueWillMutate", c.O); return c
                }; a.q.fn = { equalityComparer: G }; var C = a.q.Yb = "__ko_proto__"; a.q.fn[C] = a.q; a.ya = function (b, c) { return null === b || b === q || b[C] === q ? !1 : b[C] === c ? !0 : a.ya(b[C], c) }; a.M = function (b) { return a.ya(b, a.q) }; a.gb = function (b) { return "function" == typeof b && b[C] === a.q || "function" == typeof b && b[C] === a.h && b.Nb ? !0 : !1 }; a.b("observable", a.q); a.b("isObservable", a.M); a.b("isWriteableObservable",
                    a.gb); a.ba = function (b) { b = b || []; if ("object" != typeof b || !("length" in b)) throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined."); b = a.q(b); a.a.extend(b, a.ba.fn); return b.extend({ trackArrayChanges: !0 }) }; a.ba.fn = {
                        remove: function (b) { for (var c = this.t(), d = [], e = "function" != typeof b || a.M(b) ? function (a) { return a === b } : b, g = 0; g < c.length; g++) { var h = c[g]; e(h) && (0 === d.length && this.O(), d.push(h), c.splice(g, 1), g--) } d.length && this.N(); return d }, removeAll: function (b) {
                            if (b ===
                                q) { var c = this.t(), d = c.slice(0); this.O(); c.splice(0, c.length); this.N(); return d } return b ? this.remove(function (c) { return 0 <= a.a.l(b, c) }) : []
                        }, destroy: function (b) { var c = this.t(), d = "function" != typeof b || a.M(b) ? function (a) { return a === b } : b; this.O(); for (var e = c.length - 1; 0 <= e; e--)d(c[e]) && (c[e]._destroy = !0); this.N() }, destroyAll: function (b) { return b === q ? this.destroy(function () { return !0 }) : b ? this.destroy(function (c) { return 0 <= a.a.l(b, c) }) : [] }, indexOf: function (b) { var c = this(); return a.a.l(c, b) }, replace: function (a,
                            c) { var d = this.indexOf(a); 0 <= d && (this.O(), this.t()[d] = c, this.N()) }
                    }; a.a.n("pop push reverse shift sort splice unshift".split(" "), function (b) { a.ba.fn[b] = function () { var a = this.t(); this.O(); this.Xa(a, b, arguments); a = a[b].apply(a, arguments); this.N(); return a } }); a.a.n(["slice"], function (b) { a.ba.fn[b] = function () { var a = this(); return a[b].apply(a, arguments) } }); a.b("observableArray", a.ba); var J = "arrayChange"; a.xa.trackArrayChanges = function (b) {
                        function c() {
                            if (!d) {
                                d = !0; var c = b.notifySubscribers; b.notifySubscribers =
                                    function (a, b) { b && b !== I || ++g; return c.apply(this, arguments) }; var m = [].concat(b.t() || []); e = null; b.T(function (c) { c = [].concat(c || []); if (b.cb(J)) { var d; if (!e || 1 < g) e = a.a.ra(m, c, { sparse: !0 }); d = e; d.length && b.notifySubscribers(d, J) } m = c; e = null; g = 0 })
                            }
                        } if (!b.Xa) {
                            var d = !1, e = null, g = 0, h = b.T; b.T = b.subscribe = function (a, b, f) { f === J && c(); return h.apply(this, arguments) }; b.Xa = function (a, b, c) {
                                function p(a, b, c) { h.push({ status: a, value: b, index: c }) } if (d && !g) {
                                    var h = [], l = a.length, n = c.length, r = 0; switch (b) {
                                        case "push": r = l; case "unshift": for (b =
                                            0; b < n; b++)p("added", c[b], r + b); break; case "pop": r = l - 1; case "shift": l && p("deleted", a[r], r); break; case "splice": b = Math.min(Math.max(0, 0 > c[0] ? l + c[0] : c[0]), l); for (var l = 1 === n ? l : Math.min(b + (c[1] || 0), l), n = b + n - 2, r = Math.max(l, n), v = 2; b < r; ++b, ++v)b < l && p("deleted", a[b], b), b < n && p("added", c[v], b); break; default: return
                                    }e = h
                                }
                            }
                        }
                    }; a.h = function (b, c, d) {
                        function e() { a.a.n(z, function (a) { a.B() }); z = [] } function g() { var a = k.throttleEvaluation; a && 0 <= a ? (clearTimeout(x), x = setTimeout(h, a)) : h() } function h() {
                            if (!s) {
                                if (E && E()) {
                                    if (!l) {
                                        D();
                                        p = !0; return
                                    }
                                } else l = !1; s = !0; try { var b = a.a.ha(z, function (a) { return a.target }); a.i.Wa(function (c) { var d; 0 <= (d = a.a.l(b, c)) ? b[d] = q : z.push(c.T(g)) }); for (var d = c ? n.call(c) : n(), e = b.length - 1; 0 <= e; e--)b[e] && z.splice(e, 1)[0].B(); p = !0; k.equalityComparer && k.equalityComparer(f, d) || (k.notifySubscribers(f, "beforeChange"), f = d, k.notifySubscribers(f)) } finally { a.i.end(), s = !1 } z.length || D()
                            }
                        } function k() {
                            if (0 < arguments.length) {
                                if ("function" === typeof r) r.apply(c, arguments); else throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");
                                return this
                            } p || h(); a.i.lb(k); return f
                        } function m() { return !p || 0 < z.length } var f, p = !1, s = !1, l = !1, n = b; n && "object" == typeof n ? (d = n, n = d.read) : (d = d || {}, n || (n = d.read)); if ("function" != typeof n) throw Error("Pass a function that returns the value of the ko.computed"); var r = d.write, v = d.disposeWhenNodeIsRemoved || d.I || null, t = d.disposeWhen || d.ua, E = t, D = e, z = [], x = null; c || (c = d.owner); k.t = function () { p || h(); return f }; k.Kb = function () { return z.length }; k.Nb = "function" === typeof d.write; k.B = function () { D() }; k.aa = m; a.ca.call(k);
                        a.a.extend(k, a.h.fn); a.s(k, "peek", k.t); a.s(k, "dispose", k.B); a.s(k, "isActive", k.aa); a.s(k, "getDependenciesCount", k.Kb); v && (l = !0, v.nodeType && (E = function () { return !a.a.va(v) || t && t() })); !0 !== d.deferEvaluation && h(); v && m() && (D = function () { a.a.C.mb(v, D); e() }, a.a.C.ea(v, D)); return k
                    }; a.Pb = function (b) { return a.ya(b, a.h) }; F = a.q.Yb; a.h[F] = a.q; a.h.fn = { equalityComparer: G }; a.h.fn[F] = a.h; a.b("dependentObservable", a.h); a.b("computed", a.h); a.b("isComputed", a.Pb); (function () {
                        function b(a, g, h) {
                            h = h || new d; a = g(a); if ("object" !=
                                typeof a || null === a || a === q || a instanceof Date || a instanceof String || a instanceof Number || a instanceof Boolean) return a; var k = a instanceof Array ? [] : {}; h.save(a, k); c(a, function (c) { var d = g(a[c]); switch (typeof d) { case "boolean": case "number": case "string": case "function": k[c] = d; break; case "object": case "undefined": var p = h.get(d); k[c] = p !== q ? p : b(d, g, h) } }); return k
                        } function c(a, b) { if (a instanceof Array) { for (var c = 0; c < a.length; c++)b(c); "function" == typeof a.toJSON && b("toJSON") } else for (c in a) b(c) } function d() {
                            this.keys =
                            []; this.Qa = []
                        } a.tb = function (c) { if (0 == arguments.length) throw Error("When calling ko.toJS, pass the object you want to convert."); return b(c, function (b) { for (var c = 0; a.M(b) && 10 > c; c++)b = b(); return b }) }; a.toJSON = function (b, c, d) { b = a.tb(b); return a.a.Na(b, c, d) }; d.prototype = { save: function (b, c) { var d = a.a.l(this.keys, b); 0 <= d ? this.Qa[d] = c : (this.keys.push(b), this.Qa.push(c)) }, get: function (b) { b = a.a.l(this.keys, b); return 0 <= b ? this.Qa[b] : q } }
                    })(); a.b("toJS", a.tb); a.b("toJSON", a.toJSON); (function () {
                        a.k = {
                            o: function (b) {
                                switch (a.a.v(b)) {
                                    case "option": return !0 ===
                                        b.__ko__hasDomDataOptionValue__ ? a.a.f.get(b, a.d.options.Ea) : 7 >= a.a.ja ? b.getAttributeNode("value") && b.getAttributeNode("value").specified ? b.value : b.text : b.value; case "select": return 0 <= b.selectedIndex ? a.k.o(b.options[b.selectedIndex]) : q; default: return b.value
                                }
                            }, na: function (b, c) {
                                switch (a.a.v(b)) {
                                    case "option": switch (typeof c) {
                                        case "string": a.a.f.set(b, a.d.options.Ea, q); "__ko__hasDomDataOptionValue__" in b && delete b.__ko__hasDomDataOptionValue__; b.value = c; break; default: a.a.f.set(b, a.d.options.Ea, c), b.__ko__hasDomDataOptionValue__ =
                                            !0, b.value = "number" === typeof c ? c : ""
                                    }break; case "select": "" === c && (c = q); if (null === c || c === q) b.selectedIndex = -1; for (var d = b.options.length - 1; 0 <= d; d--)if (a.k.o(b.options[d]) == c) { b.selectedIndex = d; break } 1 < b.size || -1 !== b.selectedIndex || (b.selectedIndex = 0); break; default: if (null === c || c === q) c = ""; b.value = c
                                }
                            }
                        }
                    })(); a.b("selectExtensions", a.k); a.b("selectExtensions.readValue", a.k.o); a.b("selectExtensions.writeValue", a.k.na); a.g = function () {
                        function b(b) {
                            b = a.a.la(b); 123 === b.charCodeAt(0) && (b = b.slice(1, -1)); var c =
                                [], d = b.match(e), k, l, n = 0; if (d) { d.push(","); for (var r = 0, v; v = d[r]; ++r) { var t = v.charCodeAt(0); if (44 === t) { if (0 >= n) { k && c.push(l ? { key: k, value: l.join("") } : { unknown: k }); k = l = n = 0; continue } } else if (58 === t) { if (!l) continue } else if (47 === t && r && 1 < v.length) (t = d[r - 1].match(g)) && !h[t[0]] && (b = b.substr(b.indexOf(v) + 1), d = b.match(e), d.push(","), r = -1, v = "/"); else if (40 === t || 123 === t || 91 === t) ++n; else if (41 === t || 125 === t || 93 === t) --n; else if (!k && !l) { k = 34 === t || 39 === t ? v.slice(1, -1) : v; continue } l ? l.push(v) : l = [v] } } return c
                        } var c = ["true",
                            "false", "null", "undefined"], d = /^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i, e = RegExp("\"(?:[^\"\\\\]|\\\\.)*\"|'(?:[^'\\\\]|\\\\.)*'|/(?:[^/\\\\]|\\\\.)*/w*|[^\\s:,/][^,\"'{}()/:[\\]]*[^\\s,\"'{}()/:[\\]]|[^\\s]", "g"), g = /[\])"'A-Za-z0-9_$]+$/, h = { "in": 1, "return": 1, "typeof": 1 }, k = {}; return {
                                Y: [], U: k, Ga: b, ka: function (e, f) {
                                    function g(b, f) {
                                        var e, r = a.getBindingHandler(b); if (r && r.preprocess ? f = r.preprocess(f, b, g) : 1) {
                                            if (r = k[b]) e = f, 0 <= a.a.l(c, e) ? e = !1 : (r = e.match(d), e = null === r ? !1 : r[1] ? "Object(" + r[1] + ")" +
                                                r[2] : e), r = e; r && l.push("'" + b + "':function(_z){" + e + "=_z}"); n && (f = "function(){return " + f + " }"); h.push("'" + b + "':" + f)
                                        }
                                    } f = f || {}; var h = [], l = [], n = f.valueAccessors, r = "string" === typeof e ? b(e) : e; a.a.n(r, function (a) { g(a.key || a.unknown, a.value) }); l.length && g("_ko_property_writers", "{" + l.join(",") + "}"); return h.join(",")
                                }, Sb: function (a, b) { for (var c = 0; c < a.length; c++)if (a[c].key == b) return !0; return !1 }, oa: function (b, c, d, e, k) { if (b && a.M(b)) !a.gb(b) || k && b.t() === e || b(e); else if ((b = c.get("_ko_property_writers")) && b[d]) b[d](e) }
                            }
                    }();
            a.b("expressionRewriting", a.g); a.b("expressionRewriting.bindingRewriteValidators", a.g.Y); a.b("expressionRewriting.parseObjectLiteral", a.g.Ga); a.b("expressionRewriting.preProcessBindings", a.g.ka); a.b("expressionRewriting._twoWayBindings", a.g.U); a.b("jsonExpressionRewriting", a.g); a.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson", a.g.ka); (function () {
                function b(a) { return 8 == a.nodeType && h.test(g ? a.text : a.nodeValue) } function c(a) { return 8 == a.nodeType && k.test(g ? a.text : a.nodeValue) } function d(a,
                    d) { for (var e = a, k = 1, n = []; e = e.nextSibling;) { if (c(e) && (k--, 0 === k)) return n; n.push(e); b(e) && k++ } if (!d) throw Error("Cannot find closing comment tag to match: " + a.nodeValue); return null } function e(a, b) { var c = d(a, b); return c ? 0 < c.length ? c[c.length - 1].nextSibling : a.nextSibling : null } var g = w && "\x3c!--test--\x3e" === w.createComment("test").text, h = g ? /^\x3c!--\s*ko(?:\s+([\s\S]+))?\s*--\x3e$/ : /^\s*ko(?:\s+([\s\S]+))?\s*$/, k = g ? /^\x3c!--\s*\/ko\s*--\x3e$/ : /^\s*\/ko\s*$/, m = { ul: !0, ol: !0 }; a.e = {
                        P: {}, childNodes: function (a) {
                            return b(a) ?
                                d(a) : a.childNodes
                        }, Z: function (c) { if (b(c)) { c = a.e.childNodes(c); for (var d = 0, e = c.length; d < e; d++)a.removeNode(c[d]) } else a.a.wa(c) }, S: function (c, d) { if (b(c)) { a.e.Z(c); for (var e = c.nextSibling, k = 0, n = d.length; k < n; k++)e.parentNode.insertBefore(d[k], e) } else a.a.S(c, d) }, kb: function (a, c) { b(a) ? a.parentNode.insertBefore(c, a.nextSibling) : a.firstChild ? a.insertBefore(c, a.firstChild) : a.appendChild(c) }, eb: function (c, d, e) {
                            e ? b(c) ? c.parentNode.insertBefore(d, e.nextSibling) : e.nextSibling ? c.insertBefore(d, e.nextSibling) :
                                c.appendChild(d) : a.e.kb(c, d)
                        }, firstChild: function (a) { return b(a) ? !a.nextSibling || c(a.nextSibling) ? null : a.nextSibling : a.firstChild }, nextSibling: function (a) { b(a) && (a = e(a)); return a.nextSibling && c(a.nextSibling) ? null : a.nextSibling }, Mb: b, bc: function (a) { return (a = (g ? a.text : a.nodeValue).match(h)) ? a[1] : null }, ib: function (d) {
                            if (m[a.a.v(d)]) {
                                var k = d.firstChild; if (k) {
                                    do if (1 === k.nodeType) {
                                        var g; g = k.firstChild; var h = null; if (g) {
                                            do if (h) h.push(g); else if (b(g)) { var n = e(g, !0); n ? g = n : h = [g] } else c(g) && (h = [g]); while (g =
                                                g.nextSibling)
                                        } if (g = h) for (h = k.nextSibling, n = 0; n < g.length; n++)h ? d.insertBefore(g[n], h) : d.appendChild(g[n])
                                    } while (k = k.nextSibling)
                                }
                            }
                        }
                    }
            })(); a.b("virtualElements", a.e); a.b("virtualElements.allowedBindings", a.e.P); a.b("virtualElements.emptyNode", a.e.Z); a.b("virtualElements.insertAfter", a.e.eb); a.b("virtualElements.prepend", a.e.kb); a.b("virtualElements.setDomNodeChildren", a.e.S); (function () {
                a.H = function () { this.zb = {} }; a.a.extend(a.H.prototype, {
                    nodeHasBindings: function (b) {
                        switch (b.nodeType) {
                            case 1: return null !=
                                b.getAttribute("data-bind"); case 8: return a.e.Mb(b); default: return !1
                        }
                    }, getBindings: function (a, c) { var d = this.getBindingsString(a, c); return d ? this.parseBindingsString(d, c, a) : null }, getBindingAccessors: function (a, c) { var d = this.getBindingsString(a, c); return d ? this.parseBindingsString(d, c, a, { valueAccessors: !0 }) : null }, getBindingsString: function (b) { switch (b.nodeType) { case 1: return b.getAttribute("data-bind"); case 8: return a.e.bc(b); default: return null } }, parseBindingsString: function (b, c, d, e) {
                        try {
                            var g = this.zb,
                            h = b + (e && e.valueAccessors || ""), k; if (!(k = g[h])) { var m, f = "with($context){with($data||{}){return{" + a.g.ka(b, e) + "}}}"; m = new Function("$context", "$element", f); k = g[h] = m } return k(c, d)
                        } catch (p) { throw p.message = "Unable to parse bindings.\nBindings value: " + b + "\nMessage: " + p.message, p; }
                    }
                }); a.H.instance = new a.H
            })(); a.b("bindingProvider", a.H); (function () {
                function b(a) { return function () { return a } } function c(a) { return a() } function d(b) { return a.a.Da(a.i.p(b), function (a, c) { return function () { return b()[c] } }) } function e(a,
                    b) { return d(this.getBindings.bind(this, a, b)) } function g(b, c, d) { var f, e = a.e.firstChild(c), k = a.H.instance, g = k.preprocessNode; if (g) { for (; f = e;)e = a.e.nextSibling(f), g.call(k, f); e = a.e.firstChild(c) } for (; f = e;)e = a.e.nextSibling(f), h(b, f, d) } function h(b, c, d) { var f = !0, e = 1 === c.nodeType; e && a.e.ib(c); if (e && d || a.H.instance.nodeHasBindings(c)) f = m(c, null, b, d).shouldBindDescendants; f && !p[a.a.v(c)] && g(b, c, !e) } function k(b) {
                        var c = [], d = {}, f = []; a.a.K(b, function D(e) {
                            if (!d[e]) {
                                var k = a.getBindingHandler(e); k && (k.after &&
                                    (f.push(e), a.a.n(k.after, function (c) { if (b[c]) { if (-1 !== a.a.l(f, c)) throw Error("Cannot combine the following bindings, because they have a cyclic dependency: " + f.join(", ")); D(c) } }), f.pop()), c.push({ key: e, bb: k })); d[e] = !0
                            }
                        }); return c
                    } function m(b, d, f, g) {
                        var h = a.a.f.get(b, s); if (!d) { if (h) throw Error("You cannot apply bindings multiple times to the same element."); a.a.f.set(b, s, !0) } !h && g && a.rb(b, f); var m; if (d && "function" !== typeof d) m = d; else {
                            var p = a.H.instance, l = p.getBindingAccessors || e; if (d || f.A) {
                                var A =
                                    a.h(function () { (m = d ? d(f, b) : l.call(p, b, f)) && f.A && f.A(); return m }, null, { I: b }); m && A.aa() || (A = null)
                            } else m = a.i.p(l, p, [b, f])
                        } var u; if (m) {
                            var w = A ? function (a) { return function () { return c(A()[a]) } } : function (a) { return m[a] }, y = function () { return a.a.Da(A ? A() : m, c) }; y.get = function (a) { return m[a] && c(w(a)) }; y.has = function (a) { return a in m }; g = k(m); a.a.n(g, function (c) {
                                var d = c.bb.init, e = c.bb.update, k = c.key; if (8 === b.nodeType && !a.e.P[k]) throw Error("The binding '" + k + "' cannot be used with virtual elements"); try {
                                    "function" ==
                                    typeof d && a.i.p(function () { var a = d(b, w(k), y, f.$data, f); if (a && a.controlsDescendantBindings) { if (u !== q) throw Error("Multiple bindings (" + u + " and " + k + ") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element."); u = k } }), "function" == typeof e && a.h(function () { e(b, w(k), y, f.$data, f) }, null, { I: b })
                                } catch (g) { throw g.message = 'Unable to process binding "' + k + ": " + m[k] + '"\nMessage: ' + g.message, g; }
                            })
                        } return { shouldBindDescendants: u === q }
                    } function f(b) {
                        return b &&
                            b instanceof a.G ? b : new a.G(b)
                    } a.d = {}; var p = { script: !0 }; a.getBindingHandler = function (b) { return a.d[b] }; a.G = function (b, c, d, f) {
                        var e = this, k = "function" == typeof b, g, h = a.h(function () { var g = k ? b() : b; c ? (c.A && c.A(), a.a.extend(e, c), h && (e.A = h)) : (e.$parents = [], e.$root = g, e.ko = a); e.$rawData = b; e.$data = g; d && (e[d] = g); f && f(e, c, g); return e.$data }, null, { ua: function () { return g && !a.a.Ra(g) }, I: !0 }); h.aa() && (e.A = h, h.equalityComparer = null, g = [], h.wb = function (b) {
                            g.push(b); a.a.C.ea(b, function (b) {
                                a.a.ia(g, b); g.length || (h.B(),
                                    e.A = h = q)
                            })
                        })
                    }; a.G.prototype.createChildContext = function (b, c, d) { return new a.G(b, this, c, function (a, b) { a.$parentContext = b; a.$parent = b.$data; a.$parents = (b.$parents || []).slice(0); a.$parents.unshift(a.$parent); d && d(a) }) }; a.G.prototype.extend = function (b) { return new a.G(this.$rawData, this, null, function (c) { a.a.extend(c, "function" == typeof b ? b() : b) }) }; var s = a.a.f.D(), l = a.a.f.D(); a.rb = function (b, c) { if (2 == arguments.length) a.a.f.set(b, l, c), c.A && c.A.wb(b); else return a.a.f.get(b, l) }; a.pa = function (b, c, d) {
                        1 === b.nodeType &&
                        a.e.ib(b); return m(b, c, f(d), !0)
                    }; a.xb = function (c, e, k) { k = f(k); return a.pa(c, "function" === typeof e ? d(e.bind(null, k, c)) : a.a.Da(e, b), k) }; a.Ta = function (a, b) { 1 !== b.nodeType && 8 !== b.nodeType || g(f(a), b, !0) }; a.Sa = function (a, b) { if (b && 1 !== b.nodeType && 8 !== b.nodeType) throw Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node"); b = b || y.document.body; h(f(a), b, !0) }; a.ta = function (b) { switch (b.nodeType) { case 1: case 8: var c = a.rb(b); if (c) return c; if (b.parentNode) return a.ta(b.parentNode) }return q };
                a.Cb = function (b) { return (b = a.ta(b)) ? b.$data : q }; a.b("bindingHandlers", a.d); a.b("applyBindings", a.Sa); a.b("applyBindingsToDescendants", a.Ta); a.b("applyBindingAccessorsToNode", a.pa); a.b("applyBindingsToNode", a.xb); a.b("contextFor", a.ta); a.b("dataFor", a.Cb)
            })(); var M = { "class": "className", "for": "htmlFor" }; a.d.attr = {
                update: function (b, c) {
                    var d = a.a.c(c()) || {}; a.a.K(d, function (c, d) {
                        d = a.a.c(d); var h = !1 === d || null === d || d === q; h && b.removeAttribute(c); 8 >= a.a.ja && c in M ? (c = M[c], h ? b.removeAttribute(c) : b[c] = d) : h || b.setAttribute(c,
                            d.toString()); "name" === c && a.a.pb(b, h ? "" : d.toString())
                    })
                }
            }; (function () {
                a.d.checked = {
                    after: ["value", "attr"], init: function (b, c, d) {
                        function e() { return d.has("checkedValue") ? a.a.c(d.get("checkedValue")) : b.value } function g() { var k = b.checked, g = s ? e() : k; if (l && (!m || k)) { var h = a.i.p(c); f ? p !== g ? (k && (a.a.V(h, g, !0), a.a.V(h, p, !1)), p = g) : a.a.V(h, g, k) : a.g.oa(h, d, "checked", g, !0) } } function h() { var d = a.a.c(c()); b.checked = f ? 0 <= a.a.l(d, e()) : k ? d : e() === d } var k = "checkbox" == b.type, m = "radio" == b.type; if (k || m) {
                            var f = k && a.a.c(c()) instanceof
                                Array, p = f ? e() : q, s = m || f, l = !1; m && !b.name && a.d.uniqueName.init(b, function () { return !0 }); a.h(g, null, { I: b }); a.a.r(b, "click", g); a.h(h, null, { I: b }); l = !0
                        }
                    }
                }; a.g.U.checked = !0; a.d.checkedValue = { update: function (b, c) { b.value = a.a.c(c()) } }
            })(); a.d.css = { update: function (b, c) { var d = a.a.c(c()); "object" == typeof d ? a.a.K(d, function (c, d) { d = a.a.c(d); a.a.ma(b, c, d) }) : (d = String(d || ""), a.a.ma(b, b.__ko__cssValue, !1), b.__ko__cssValue = d, a.a.ma(b, d, !0)) } }; a.d.enable = {
                update: function (b, c) {
                    var d = a.a.c(c()); d && b.disabled ? b.removeAttribute("disabled") :
                        d || b.disabled || (b.disabled = !0)
                }
            }; a.d.disable = { update: function (b, c) { a.d.enable.update(b, function () { return !a.a.c(c()) }) } }; a.d.event = { init: function (b, c, d, e, g) { var h = c() || {}; a.a.K(h, function (k) { "string" == typeof k && a.a.r(b, k, function (b) { var f, h = c()[k]; if (h) { try { var s = a.a.Q(arguments); e = g.$data; s.unshift(e); f = h.apply(e, s) } finally { !0 !== f && (b.preventDefault ? b.preventDefault() : b.returnValue = !1) } !1 === d.get(k + "Bubble") && (b.cancelBubble = !0, b.stopPropagation && b.stopPropagation()) } }) }) } }; a.d.foreach = {
                hb: function (b) {
                    return function () {
                        var c =
                            b(), d = a.a.Ha(c); if (!d || "number" == typeof d.length) return { foreach: c, templateEngine: a.J.Aa }; a.a.c(c); return { foreach: d.data, as: d.as, includeDestroyed: d.includeDestroyed, afterAdd: d.afterAdd, beforeRemove: d.beforeRemove, afterRender: d.afterRender, beforeMove: d.beforeMove, afterMove: d.afterMove, templateEngine: a.J.Aa }
                    }
                }, init: function (b, c) { return a.d.template.init(b, a.d.foreach.hb(c)) }, update: function (b, c, d, e, g) { return a.d.template.update(b, a.d.foreach.hb(c), d, e, g) }
            }; a.g.Y.foreach = !1; a.e.P.foreach = !0; a.d.hasfocus =
            {
                init: function (b, c, d) { function e(e) { b.__ko_hasfocusUpdating = !0; var g = b.ownerDocument; if ("activeElement" in g) { var f; try { f = g.activeElement } catch (h) { f = g.body } e = f === b } g = c(); a.g.oa(g, d, "hasfocus", e, !0); b.__ko_hasfocusLastValue = e; b.__ko_hasfocusUpdating = !1 } var g = e.bind(null, !0), h = e.bind(null, !1); a.a.r(b, "focus", g); a.a.r(b, "focusin", g); a.a.r(b, "blur", h); a.a.r(b, "focusout", h) }, update: function (b, c) {
                    var d = !!a.a.c(c()); b.__ko_hasfocusUpdating || b.__ko_hasfocusLastValue === d || (d ? b.focus() : b.blur(), a.i.p(a.a.da,
                        null, [b, d ? "focusin" : "focusout"]))
                }
            }; a.g.U.hasfocus = !0; a.d.hasFocus = a.d.hasfocus; a.g.U.hasFocus = !0; a.d.html = { init: function () { return { controlsDescendantBindings: !0 } }, update: function (b, c) { a.a.Ka(b, c()) } }; var L = a.a.f.D(); H("if"); H("ifnot", !1, !0); H("with", !0, !1, function (a, c) { return a.createChildContext(c) }); a.d.options = {
                init: function (b) { if ("select" !== a.a.v(b)) throw Error("options binding applies only to SELECT elements"); for (; 0 < b.length;)b.remove(0); return { controlsDescendantBindings: !0 } }, update: function (b,
                    c, d) {
                        function e() { return a.a.ga(b.options, function (a) { return a.selected }) } function g(a, b, c) { var d = typeof b; return "function" == d ? b(a) : "string" == d ? a[b] : c } function h(c, d) { if (p.length) { var f = 0 <= a.a.l(p, a.k.o(d[0])); a.a.qb(d[0], f); l && !f && a.i.p(a.a.da, null, [b, "change"]) } } var k = 0 != b.length && b.multiple ? b.scrollTop : null; c = a.a.c(c()); var m = d.get("optionsIncludeDestroyed"), f = {}, p; p = b.multiple ? a.a.ha(e(), a.k.o) : 0 <= b.selectedIndex ? [a.k.o(b.options[b.selectedIndex])] : []; if (c) {
                            "undefined" == typeof c.length && (c = [c]);
                            var s = a.a.ga(c, function (b) { return m || b === q || null === b || !a.a.c(b._destroy) }); d.has("optionsCaption") && (c = a.a.c(d.get("optionsCaption")), null !== c && c !== q && s.unshift(f))
                        } else c = []; var l = !1; c = h; d.has("optionsAfterRender") && (c = function (b, c) { h(0, c); a.i.p(d.get("optionsAfterRender"), null, [c[0], b !== f ? b : q]) }); a.a.Ja(b, s, function (b, c, e) {
                            e.length && (p = e[0].selected ? [a.k.o(e[0])] : [], l = !0); c = w.createElement("option"); b === f ? (a.a.Ma(c, d.get("optionsCaption")), a.k.na(c, q)) : (e = g(b, d.get("optionsValue"), b), a.k.na(c, a.a.c(e)),
                                b = g(b, d.get("optionsText"), e), a.a.Ma(c, b)); return [c]
                        }, null, c); (b.multiple ? p.length && e().length < p.length : p.length && 0 <= b.selectedIndex ? a.k.o(b.options[b.selectedIndex]) !== p[0] : p.length || 0 <= b.selectedIndex) && a.i.p(a.a.da, null, [b, "change"]); a.a.Hb(b); k && 20 < Math.abs(k - b.scrollTop) && (b.scrollTop = k)
                }
            }; a.d.options.Ea = a.a.f.D(); a.d.selectedOptions = {
                after: ["options", "foreach"], init: function (b, c, d) {
                    a.a.r(b, "change", function () {
                        var e = c(), g = []; a.a.n(b.getElementsByTagName("option"), function (b) { b.selected && g.push(a.k.o(b)) });
                        a.g.oa(e, d, "selectedOptions", g)
                    })
                }, update: function (b, c) { if ("select" != a.a.v(b)) throw Error("values binding applies only to SELECT elements"); var d = a.a.c(c()); d && "number" == typeof d.length && a.a.n(b.getElementsByTagName("option"), function (b) { var c = 0 <= a.a.l(d, a.k.o(b)); a.a.qb(b, c) }) }
            }; a.g.U.selectedOptions = !0; a.d.style = { update: function (b, c) { var d = a.a.c(c() || {}); a.a.K(d, function (c, d) { d = a.a.c(d); b.style[c] = d || "" }) } }; a.d.submit = {
                init: function (b, c, d, e, g) {
                    if ("function" != typeof c()) throw Error("The value for a submit binding must be a function");
                    a.a.r(b, "submit", function (a) { var d, e = c(); try { d = e.call(g.$data, b) } finally { !0 !== d && (a.preventDefault ? a.preventDefault() : a.returnValue = !1) } })
                }
            }; a.d.text = { init: function () { return { controlsDescendantBindings: !0 } }, update: function (b, c) { a.a.Ma(b, c()) } }; a.e.P.text = !0; a.d.uniqueName = { init: function (b, c) { if (c()) { var d = "ko_unique_" + ++a.d.uniqueName.Bb; a.a.pb(b, d) } } }; a.d.uniqueName.Bb = 0; a.d.value = {
                after: ["options", "foreach"], init: function (b, c, d) {
                    function e() { k = !1; var e = c(), f = a.k.o(b); a.g.oa(e, d, "value", f) } var g =
                        ["change"], h = d.get("valueUpdate"), k = !1; h && ("string" == typeof h && (h = [h]), a.a.X(g, h), g = a.a.Va(g)); !a.a.ja || "input" != b.tagName.toLowerCase() || "text" != b.type || "off" == b.autocomplete || b.form && "off" == b.form.autocomplete || -1 != a.a.l(g, "propertychange") || (a.a.r(b, "propertychange", function () { k = !0 }), a.a.r(b, "blur", function () { k && e() })); a.a.n(g, function (c) { var d = e; a.a.ac(c, "after") && (d = function () { setTimeout(e, 0) }, c = c.substring(5)); a.a.r(b, c, d) })
                }, update: function (b, c) {
                    var d = "select" === a.a.v(b), e = a.a.c(c()), g = a.k.o(b);
                    e !== g && (g = function () { a.k.na(b, e) }, g(), d && (e !== a.k.o(b) ? a.i.p(a.a.da, null, [b, "change"]) : setTimeout(g, 0)))
                }
            }; a.g.U.value = !0; a.d.visible = { update: function (b, c) { var d = a.a.c(c()), e = "none" != b.style.display; d && !e ? b.style.display = "" : !d && e && (b.style.display = "none") } }; (function (b) { a.d[b] = { init: function (c, d, e, g, h) { return a.d.event.init.call(this, c, function () { var a = {}; a[b] = d(); return a }, e, g, h) } } })("click"); a.w = function () { }; a.w.prototype.renderTemplateSource = function () {
                throw Error("Override renderTemplateSource");
            }; a.w.prototype.createJavaScriptEvaluatorBlock = function () { throw Error("Override createJavaScriptEvaluatorBlock"); }; a.w.prototype.makeTemplateSource = function (b, c) { if ("string" == typeof b) { c = c || w; var d = c.getElementById(b); if (!d) throw Error("Cannot find template with ID " + b); return new a.m.j(d) } if (1 == b.nodeType || 8 == b.nodeType) return new a.m.W(b); throw Error("Unknown template type: " + b); }; a.w.prototype.renderTemplate = function (a, c, d, e) {
                a = this.makeTemplateSource(a, e); return this.renderTemplateSource(a, c,
                    d)
            }; a.w.prototype.isTemplateRewritten = function (a, c) { return !1 === this.allowTemplateRewriting ? !0 : this.makeTemplateSource(a, c).data("isRewritten") }; a.w.prototype.rewriteTemplate = function (a, c, d) { a = this.makeTemplateSource(a, d); c = c(a.text()); a.text(c); a.data("isRewritten", !0) }; a.b("templateEngine", a.w); a.Oa = function () {
                function b(b, c, d, k) {
                    b = a.g.Ga(b); for (var m = a.g.Y, f = 0; f < b.length; f++) {
                        var p = b[f].key; if (m.hasOwnProperty(p)) {
                            var s = m[p]; if ("function" === typeof s) { if (p = s(b[f].value)) throw Error(p); } else if (!s) throw Error("This template engine does not support the '" +
                                p + "' binding within its templates");
                        }
                    } d = "ko.__tr_ambtns(function($context,$element){return(function(){return{ " + a.g.ka(b, { valueAccessors: !0 }) + " } })()},'" + d.toLowerCase() + "')"; return k.createJavaScriptEvaluatorBlock(d) + c
                } var c = /(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi, d = /\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g; return {
                    Ib: function (b, c, d) {
                        c.isTemplateRewritten(b, d) || c.rewriteTemplate(b, function (b) { return a.Oa.Ub(b, c) },
                            d)
                    }, Ub: function (a, g) { return a.replace(c, function (a, c, d, f, e) { return b(e, c, d, g) }).replace(d, function (a, c) { return b(c, "\x3c!-- ko --\x3e", "#comment", g) }) }, yb: function (b, c) { return a.u.Ca(function (d, k) { var m = d.nextSibling; m && m.nodeName.toLowerCase() === c && a.pa(m, b, k) }) }
                }
            }(); a.b("__tr_ambtns", a.Oa.yb); (function () {
                a.m = {}; a.m.j = function (a) { this.j = a }; a.m.j.prototype.text = function () {
                    var b = a.a.v(this.j), b = "script" === b ? "text" : "textarea" === b ? "value" : "innerHTML"; if (0 == arguments.length) return this.j[b]; var c = arguments[0];
                    "innerHTML" === b ? a.a.Ka(this.j, c) : this.j[b] = c
                }; var b = a.a.f.D() + "_"; a.m.j.prototype.data = function (c) { if (1 === arguments.length) return a.a.f.get(this.j, b + c); a.a.f.set(this.j, b + c, arguments[1]) }; var c = a.a.f.D(); a.m.W = function (a) { this.j = a }; a.m.W.prototype = new a.m.j; a.m.W.prototype.text = function () { if (0 == arguments.length) { var b = a.a.f.get(this.j, c) || {}; b.Pa === q && b.sa && (b.Pa = b.sa.innerHTML); return b.Pa } a.a.f.set(this.j, c, { Pa: arguments[0] }) }; a.m.j.prototype.nodes = function () {
                    if (0 == arguments.length) return (a.a.f.get(this.j,
                        c) || {}).sa; a.a.f.set(this.j, c, { sa: arguments[0] })
                }; a.b("templateSources", a.m); a.b("templateSources.domElement", a.m.j); a.b("templateSources.anonymousTemplate", a.m.W)
            })(); (function () {
                function b(b, c, d) { var e; for (c = a.e.nextSibling(c); b && (e = b) !== c;)b = a.e.nextSibling(e), d(e, b) } function c(c, d) {
                    if (c.length) {
                        var f = c[0], e = c[c.length - 1], g = f.parentNode, h = a.H.instance, n = h.preprocessNode; if (n) {
                            b(f, e, function (a, b) { var c = a.previousSibling, d = n.call(h, a); d && (a === f && (f = d[0] || b), a === e && (e = d[d.length - 1] || c)) }); c.length =
                                0; if (!f) return; f === e ? c.push(f) : (c.push(f, e), a.a.$(c, g))
                        } b(f, e, function (b) { 1 !== b.nodeType && 8 !== b.nodeType || a.Sa(d, b) }); b(f, e, function (b) { 1 !== b.nodeType && 8 !== b.nodeType || a.u.vb(b, [d]) }); a.a.$(c, g)
                    }
                } function d(a) { return a.nodeType ? a : 0 < a.length ? a[0] : null } function e(b, e, f, h, s) {
                    s = s || {}; var l = b && d(b), l = l && l.ownerDocument, n = s.templateEngine || g; a.Oa.Ib(f, n, l); f = n.renderTemplate(f, h, s, l); if ("number" != typeof f.length || 0 < f.length && "number" != typeof f[0].nodeType) throw Error("Template engine must return an array of DOM nodes");
                    l = !1; switch (e) { case "replaceChildren": a.e.S(b, f); l = !0; break; case "replaceNode": a.a.nb(b, f); l = !0; break; case "ignoreTargetNode": break; default: throw Error("Unknown renderMode: " + e); }l && (c(f, h), s.afterRender && a.i.p(s.afterRender, null, [f, h.$data])); return f
                } var g; a.La = function (b) { if (b != q && !(b instanceof a.w)) throw Error("templateEngine must inherit from ko.templateEngine"); g = b }; a.Ia = function (b, c, f, h, s) {
                    f = f || {}; if ((f.templateEngine || g) == q) throw Error("Set a template engine before calling renderTemplate");
                    s = s || "replaceChildren"; if (h) { var l = d(h); return a.h(function () { var g = c && c instanceof a.G ? c : new a.G(a.a.c(c)), r = "function" == typeof b ? b(g.$data, g) : b, g = e(h, s, r, g, f); "replaceNode" == s && (h = g, l = d(h)) }, null, { ua: function () { return !l || !a.a.va(l) }, I: l && "replaceNode" == s ? l.parentNode : l }) } return a.u.Ca(function (d) { a.Ia(b, c, f, d, "replaceNode") })
                }; a.$b = function (b, d, f, g, h) {
                    function l(a, b) { c(b, r); f.afterRender && f.afterRender(b, a) } function n(a, c) {
                        r = h.createChildContext(a, f.as, function (a) { a.$index = c }); var d = "function" ==
                            typeof b ? b(a, r) : b; return e(null, "ignoreTargetNode", d, r, f)
                    } var r; return a.h(function () { var b = a.a.c(d) || []; "undefined" == typeof b.length && (b = [b]); b = a.a.ga(b, function (b) { return f.includeDestroyed || b === q || null === b || !a.a.c(b._destroy) }); a.i.p(a.a.Ja, null, [g, b, n, f, l]) }, null, { I: g })
                }; var h = a.a.f.D(); a.d.template = {
                    init: function (b, c) { var d = a.a.c(c()); "string" == typeof d || d.name ? a.e.Z(b) : (d = a.e.childNodes(b), d = a.a.Vb(d), (new a.m.W(b)).nodes(d)); return { controlsDescendantBindings: !0 } }, update: function (b, c, d, e, g) {
                        c =
                        a.a.c(c()); d = {}; e = !0; var l, n = null; "string" != typeof c && (d = c, c = a.a.c(d.name), "if" in d && (e = a.a.c(d["if"])), e && "ifnot" in d && (e = !a.a.c(d.ifnot)), l = a.a.c(d.data)); "foreach" in d ? n = a.$b(c || b, e && d.foreach || [], d, b, g) : e ? (g = "data" in d ? g.createChildContext(l, d.as) : g, n = a.Ia(c || b, g, d, b)) : a.e.Z(b); g = n; (l = a.a.f.get(b, h)) && "function" == typeof l.B && l.B(); a.a.f.set(b, h, g && g.aa() ? g : q)
                    }
                }; a.g.Y.template = function (b) { b = a.g.Ga(b); return 1 == b.length && b[0].unknown || a.g.Sb(b, "name") ? null : "This template engine does not support anonymous templates nested within its templates" };
                a.e.P.template = !0
            })(); a.b("setTemplateEngine", a.La); a.b("renderTemplate", a.Ia); a.a.ra = function () {
                function a(b, d, e, g, h) {
                    var k = Math.min, m = Math.max, f = [], p, q = b.length, l, n = d.length, r = n - q || 1, v = q + n + 1, t, u, w; for (p = 0; p <= q; p++)for (u = t, f.push(t = []), w = k(n, p + r), l = m(0, p - 1); l <= w; l++)t[l] = l ? p ? b[p - 1] === d[l - 1] ? u[l - 1] : k(u[l] || v, t[l - 1] || v) + 1 : l + 1 : p + 1; k = []; m = []; r = []; p = q; for (l = n; p || l;)n = f[p][l] - 1, l && n === f[p][l - 1] ? m.push(k[k.length] = { status: e, value: d[--l], index: l }) : p && n === f[p - 1][l] ? r.push(k[k.length] = {
                        status: g, value: b[--p],
                        index: p
                    }) : (--l, --p, h.sparse || k.push({ status: "retained", value: d[l] })); if (m.length && r.length) { b = 10 * q; var z; for (d = e = 0; (h.dontLimitMoves || d < b) && (z = m[e]); e++) { for (g = 0; f = r[g]; g++)if (z.value === f.value) { z.moved = f.index; f.moved = z.index; r.splice(g, 1); d = g = 0; break } d += g } } return k.reverse()
                } return function (c, d, e) { e = "boolean" === typeof e ? { dontLimitMoves: e } : e || {}; c = c || []; d = d || []; return c.length <= d.length ? a(c, d, "added", "deleted", e) : a(d, c, "deleted", "added", e) }
            }(); a.b("utils.compareArrays", a.a.ra); (function () {
                function b(b,
                    c, g, h, k) { var m = [], f = a.h(function () { var f = c(g, k, a.a.$(m, b)) || []; 0 < m.length && (a.a.nb(m, f), h && a.i.p(h, null, [g, f, k])); m.splice(0, m.length); a.a.X(m, f) }, null, { I: b, ua: function () { return !a.a.Ra(m) } }); return { R: m, h: f.aa() ? f : q } } var c = a.a.f.D(); a.a.Ja = function (d, e, g, h, k) {
                        function m(b, c) { x = s[c]; t !== c && (z[b] = x); x.za(t++); a.a.$(x.R, d); r.push(x); w.push(x) } function f(b, c) { if (b) for (var d = 0, e = c.length; d < e; d++)c[d] && a.a.n(c[d].R, function (a) { b(a, d, c[d].fa) }) } e = e || []; h = h || {}; var p = a.a.f.get(d, c) === q, s = a.a.f.get(d, c) || [],
                            l = a.a.ha(s, function (a) { return a.fa }), n = a.a.ra(l, e, h.dontLimitMoves), r = [], v = 0, t = 0, u = [], w = []; e = []; for (var z = [], l = [], x, A = 0, y, B; y = n[A]; A++)switch (B = y.moved, y.status) { case "deleted": B === q && (x = s[v], x.h && x.h.B(), u.push.apply(u, a.a.$(x.R, d)), h.beforeRemove && (e[A] = x, w.push(x))); v++; break; case "retained": m(A, v++); break; case "added": B !== q ? m(A, B) : (x = { fa: y.value, za: a.q(t++) }, r.push(x), w.push(x), p || (l[A] = x)) }f(h.beforeMove, z); a.a.n(u, h.beforeRemove ? a.L : a.removeNode); for (var A = 0, p = a.e.firstChild(d), C; x = w[A]; A++) {
                                x.R ||
                                a.a.extend(x, b(d, g, x.fa, k, x.za)); for (v = 0; n = x.R[v]; p = n.nextSibling, C = n, v++)n !== p && a.e.eb(d, n, C); !x.Ob && k && (k(x.fa, x.R, x.za), x.Ob = !0)
                            } f(h.beforeRemove, e); f(h.afterMove, z); f(h.afterAdd, l); a.a.f.set(d, c, r)
                    }
            })(); a.b("utils.setDomNodeChildrenFromArrayMapping", a.a.Ja); a.J = function () { this.allowTemplateRewriting = !1 }; a.J.prototype = new a.w; a.J.prototype.renderTemplateSource = function (b) { var c = (9 > a.a.ja ? 0 : b.nodes) ? b.nodes() : null; if (c) return a.a.Q(c.cloneNode(!0).childNodes); b = b.text(); return a.a.Fa(b) }; a.J.Aa =
                new a.J; a.La(a.J.Aa); a.b("nativeTemplateEngine", a.J); (function () {
                    a.Ba = function () {
                        var a = this.Rb = function () { if ("undefined" == typeof u || !u.tmpl) return 0; try { if (0 <= u.tmpl.tag.tmpl.open.toString().indexOf("__")) return 2 } catch (a) { } return 1 }(); this.renderTemplateSource = function (b, e, g) {
                            g = g || {}; if (2 > a) throw Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later."); var h = b.data("precompiled"); h || (h = b.text() || "", h = u.template(null, "{{ko_with $item.koBindingContext}}" + h +
                                "{{/ko_with}}"), b.data("precompiled", h)); b = [e.$data]; e = u.extend({ koBindingContext: e }, g.templateOptions); e = u.tmpl(h, b, e); e.appendTo(w.createElement("div")); u.fragments = {}; return e
                        }; this.createJavaScriptEvaluatorBlock = function (a) { return "{{ko_code ((function() { return " + a + " })()) }}" }; this.addTemplate = function (a, b) { w.write("<script type='text/html' id='" + a + "'>" + b + "\x3c/script>") }; 0 < a && (u.tmpl.tag.ko_code = { open: "__.push($1 || '');" }, u.tmpl.tag.ko_with = { open: "with($1) {", close: "} " })
                    }; a.Ba.prototype =
                        new a.w; var b = new a.Ba; 0 < b.Rb && a.La(b); a.b("jqueryTmplTemplateEngine", a.Ba)
                })()
        })
    })();
})();
