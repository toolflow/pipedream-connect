var Xo = (e) => {
  throw TypeError(e);
};
var ii = (e, t, n) => t.has(e) || Xo("Cannot " + n);
var v = (e, t, n) => (ii(e, t, "read from private field"), n ? n.call(e) : t.get(e)), q = (e, t, n) => t.has(e) ? Xo("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), X = (e, t, n, r) => (ii(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), le = (e, t, n) => (ii(e, t, "access private method"), n);
var hr = (e, t, n, r) => ({
  set _(i) {
    X(e, t, i, n);
  },
  get _() {
    return v(e, t, r);
  }
});
import { jsx as W, Fragment as Ql, jsxs as gt } from "react/jsx-runtime";
import * as te from "react";
import { createContext as Kn, useContext as Gn, useId as eo, useState as ve, useEffect as _t, useCallback as Ve, useLayoutEffect as ql, useRef as At, useMemo as pt, Component as ya, Fragment as Ai, forwardRef as Ia, Suspense as $l } from "react";
import { keyframes as Kl, jsx as j, css as Ca } from "@emotion/react";
import { createPortal as ec } from "react-dom";
typeof document > "u" && (globalThis.document = {
  createElement: () => {
  }
});
function tc({ prop: e }) {
  return /* @__PURE__ */ W("p", { className: `pd-alert-${e.alertType}`, children: e.content });
}
var dn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function va(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Er = { exports: {} };
Er.exports;
(function(e, t) {
  var n = 200, r = "__lodash_hash_undefined__", i = 1, o = 2, u = 9007199254740991, a = "[object Arguments]", s = "[object Array]", l = "[object AsyncFunction]", c = "[object Boolean]", d = "[object Date]", p = "[object Error]", f = "[object Function]", y = "[object GeneratorFunction]", m = "[object Map]", I = "[object Number]", C = "[object Null]", A = "[object Object]", E = "[object Promise]", S = "[object Proxy]", P = "[object RegExp]", w = "[object Set]", k = "[object String]", R = "[object Symbol]", T = "[object Undefined]", H = "[object WeakMap]", N = "[object ArrayBuffer]", O = "[object DataView]", K = "[object Float32Array]", ie = "[object Float64Array]", M = "[object Int8Array]", Y = "[object Int16Array]", _ = "[object Int32Array]", se = "[object Uint8Array]", me = "[object Uint8ClampedArray]", b = "[object Uint16Array]", Ce = "[object Uint32Array]", ae = /[\\^$.*+?()[\]{}|]/g, g = /^\[object .+?Constructor\]$/, pe = /^(?:0|[1-9]\d*)$/, ee = {};
  ee[K] = ee[ie] = ee[M] = ee[Y] = ee[_] = ee[se] = ee[me] = ee[b] = ee[Ce] = !0, ee[a] = ee[s] = ee[N] = ee[c] = ee[O] = ee[d] = ee[p] = ee[f] = ee[m] = ee[I] = ee[A] = ee[P] = ee[w] = ee[k] = ee[H] = !1;
  var de = typeof dn == "object" && dn && dn.Object === Object && dn, Fe = typeof self == "object" && self && self.Object === Object && self, D = de || Fe || Function("return this")(), z = t && !t.nodeType && t, U = z && !0 && e && !e.nodeType && e, fe = U && U.exports === z, Pe = fe && de.process, We = function() {
    try {
      return Pe && Pe.binding && Pe.binding("util");
    } catch {
    }
  }(), zt = We && We.isTypedArray;
  function an(h, x) {
    for (var G = -1, L = h == null ? 0 : h.length, Ie = 0, re = []; ++G < L; ) {
      var Ae = h[G];
      x(Ae, G, h) && (re[Ie++] = Ae);
    }
    return re;
  }
  function ir(h, x) {
    for (var G = -1, L = x.length, Ie = h.length; ++G < L; )
      h[Ie + G] = x[G];
    return h;
  }
  function or(h, x) {
    for (var G = -1, L = h == null ? 0 : h.length; ++G < L; )
      if (x(h[G], G, h))
        return !0;
    return !1;
  }
  function Jr(h, x) {
    for (var G = -1, L = Array(h); ++G < h; )
      L[G] = x(G);
    return L;
  }
  function ur(h) {
    return function(x) {
      return h(x);
    };
  }
  function ar(h, x) {
    return h.has(x);
  }
  function Yr(h, x) {
    return h == null ? void 0 : h[x];
  }
  function _r(h) {
    var x = -1, G = Array(h.size);
    return h.forEach(function(L, Ie) {
      G[++x] = [Ie, L];
    }), G;
  }
  function Ur(h, x) {
    return function(G) {
      return h(x(G));
    };
  }
  function Qr(h) {
    var x = -1, G = Array(h.size);
    return h.forEach(function(L) {
      G[++x] = L;
    }), G;
  }
  var qr = Array.prototype, F = Function.prototype, V = Object.prototype, Q = D["__core-js_shared__"], oe = F.toString, ue = V.hasOwnProperty, Le = function() {
    var h = /[^.]+$/.exec(Q && Q.keys && Q.keys.IE_PROTO || "");
    return h ? "Symbol(src)_1." + h : "";
  }(), ut = V.toString, et = RegExp(
    "^" + oe.call(ue).replace(ae, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), Et = fe ? D.Buffer : void 0, at = D.Symbol, Be = D.Uint8Array, yt = V.propertyIsEnumerable, tt = qr.splice, Ht = at ? at.toStringTag : void 0, Po = Object.getOwnPropertySymbols, el = Et ? Et.isBuffer : void 0, tl = Ur(Object.keys, Object), $r = sn(D, "DataView"), On = sn(D, "Map"), Kr = sn(D, "Promise"), ei = sn(D, "Set"), ti = sn(D, "WeakMap"), Tn = sn(Object, "create"), nl = jt($r), rl = jt(On), il = jt(Kr), ol = jt(ei), ul = jt(ti), Go = at ? at.prototype : void 0, ni = Go ? Go.valueOf : void 0;
  function Wt(h) {
    var x = -1, G = h == null ? 0 : h.length;
    for (this.clear(); ++x < G; ) {
      var L = h[x];
      this.set(L[0], L[1]);
    }
  }
  function al() {
    this.__data__ = Tn ? Tn(null) : {}, this.size = 0;
  }
  function sl(h) {
    var x = this.has(h) && delete this.__data__[h];
    return this.size -= x ? 1 : 0, x;
  }
  function ll(h) {
    var x = this.__data__;
    if (Tn) {
      var G = x[h];
      return G === r ? void 0 : G;
    }
    return ue.call(x, h) ? x[h] : void 0;
  }
  function cl(h) {
    var x = this.__data__;
    return Tn ? x[h] !== void 0 : ue.call(x, h);
  }
  function dl(h, x) {
    var G = this.__data__;
    return this.size += this.has(h) ? 0 : 1, G[h] = Tn && x === void 0 ? r : x, this;
  }
  Wt.prototype.clear = al, Wt.prototype.delete = sl, Wt.prototype.get = ll, Wt.prototype.has = cl, Wt.prototype.set = dl;
  function It(h) {
    var x = -1, G = h == null ? 0 : h.length;
    for (this.clear(); ++x < G; ) {
      var L = h[x];
      this.set(L[0], L[1]);
    }
  }
  function fl() {
    this.__data__ = [], this.size = 0;
  }
  function pl(h) {
    var x = this.__data__, G = lr(x, h);
    if (G < 0)
      return !1;
    var L = x.length - 1;
    return G == L ? x.pop() : tt.call(x, G, 1), --this.size, !0;
  }
  function hl(h) {
    var x = this.__data__, G = lr(x, h);
    return G < 0 ? void 0 : x[G][1];
  }
  function gl(h) {
    return lr(this.__data__, h) > -1;
  }
  function ml(h, x) {
    var G = this.__data__, L = lr(G, h);
    return L < 0 ? (++this.size, G.push([h, x])) : G[L][1] = x, this;
  }
  It.prototype.clear = fl, It.prototype.delete = pl, It.prototype.get = hl, It.prototype.has = gl, It.prototype.set = ml;
  function Zt(h) {
    var x = -1, G = h == null ? 0 : h.length;
    for (this.clear(); ++x < G; ) {
      var L = h[x];
      this.set(L[0], L[1]);
    }
  }
  function bl() {
    this.size = 0, this.__data__ = {
      hash: new Wt(),
      map: new (On || It)(),
      string: new Wt()
    };
  }
  function yl(h) {
    var x = cr(this, h).delete(h);
    return this.size -= x ? 1 : 0, x;
  }
  function Il(h) {
    return cr(this, h).get(h);
  }
  function Cl(h) {
    return cr(this, h).has(h);
  }
  function vl(h, x) {
    var G = cr(this, h), L = G.size;
    return G.set(h, x), this.size += G.size == L ? 0 : 1, this;
  }
  Zt.prototype.clear = bl, Zt.prototype.delete = yl, Zt.prototype.get = Il, Zt.prototype.has = Cl, Zt.prototype.set = vl;
  function sr(h) {
    var x = -1, G = h == null ? 0 : h.length;
    for (this.__data__ = new Zt(); ++x < G; )
      this.add(h[x]);
  }
  function xl(h) {
    return this.__data__.set(h, r), this;
  }
  function Al(h) {
    return this.__data__.has(h);
  }
  sr.prototype.add = sr.prototype.push = xl, sr.prototype.has = Al;
  function Ft(h) {
    var x = this.__data__ = new It(h);
    this.size = x.size;
  }
  function Sl() {
    this.__data__ = new It(), this.size = 0;
  }
  function wl(h) {
    var x = this.__data__, G = x.delete(h);
    return this.size = x.size, G;
  }
  function El(h) {
    return this.__data__.get(h);
  }
  function Fl(h) {
    return this.__data__.has(h);
  }
  function Pl(h, x) {
    var G = this.__data__;
    if (G instanceof It) {
      var L = G.__data__;
      if (!On || L.length < n - 1)
        return L.push([h, x]), this.size = ++G.size, this;
      G = this.__data__ = new Zt(L);
    }
    return G.set(h, x), this.size = G.size, this;
  }
  Ft.prototype.clear = Sl, Ft.prototype.delete = wl, Ft.prototype.get = El, Ft.prototype.has = Fl, Ft.prototype.set = Pl;
  function Gl(h, x) {
    var G = dr(h), L = !G && Zl(h), Ie = !G && !L && ri(h), re = !G && !L && !Ie && Mo(h), Ae = G || L || Ie || re, Ge = Ae ? Jr(h.length, String) : [], Re = Ge.length;
    for (var xe in h)
      ue.call(h, xe) && !(Ae && // Safari 9 has enumerable `arguments.length` in strict mode.
      (xe == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      Ie && (xe == "offset" || xe == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      re && (xe == "buffer" || xe == "byteLength" || xe == "byteOffset") || // Skip index properties.
      Ll(xe, Re))) && Ge.push(xe);
    return Ge;
  }
  function lr(h, x) {
    for (var G = h.length; G--; )
      if (To(h[G][0], x))
        return G;
    return -1;
  }
  function Rl(h, x, G) {
    var L = x(h);
    return dr(h) ? L : ir(L, G(h));
  }
  function Vn(h) {
    return h == null ? h === void 0 ? T : C : Ht && Ht in Object(h) ? Nl(h) : Wl(h);
  }
  function Ro(h) {
    return Dn(h) && Vn(h) == a;
  }
  function ko(h, x, G, L, Ie) {
    return h === x ? !0 : h == null || x == null || !Dn(h) && !Dn(x) ? h !== h && x !== x : kl(h, x, G, L, ko, Ie);
  }
  function kl(h, x, G, L, Ie, re) {
    var Ae = dr(h), Ge = dr(x), Re = Ae ? s : Pt(h), xe = Ge ? s : Pt(x);
    Re = Re == a ? A : Re, xe = xe == a ? A : xe;
    var Ze = Re == A, nt = xe == A, Oe = Re == xe;
    if (Oe && ri(h)) {
      if (!ri(x))
        return !1;
      Ae = !0, Ze = !1;
    }
    if (Oe && !Ze)
      return re || (re = new Ft()), Ae || Mo(h) ? Bo(h, x, G, L, Ie, re) : Vl(h, x, Re, G, L, Ie, re);
    if (!(G & i)) {
      var _e = Ze && ue.call(h, "__wrapped__"), Ue = nt && ue.call(x, "__wrapped__");
      if (_e || Ue) {
        var Gt = _e ? h.value() : h, Ct = Ue ? x.value() : x;
        return re || (re = new Ft()), Ie(Gt, Ct, G, L, re);
      }
    }
    return Oe ? (re || (re = new Ft()), Dl(h, x, G, L, Ie, re)) : !1;
  }
  function Bl(h) {
    if (!No(h) || zl(h))
      return !1;
    var x = Vo(h) ? et : g;
    return x.test(jt(h));
  }
  function Ol(h) {
    return Dn(h) && Do(h.length) && !!ee[Vn(h)];
  }
  function Tl(h) {
    if (!Hl(h))
      return tl(h);
    var x = [];
    for (var G in Object(h))
      ue.call(h, G) && G != "constructor" && x.push(G);
    return x;
  }
  function Bo(h, x, G, L, Ie, re) {
    var Ae = G & i, Ge = h.length, Re = x.length;
    if (Ge != Re && !(Ae && Re > Ge))
      return !1;
    var xe = re.get(h);
    if (xe && re.get(x))
      return xe == x;
    var Ze = -1, nt = !0, Oe = G & o ? new sr() : void 0;
    for (re.set(h, x), re.set(x, h); ++Ze < Ge; ) {
      var _e = h[Ze], Ue = x[Ze];
      if (L)
        var Gt = Ae ? L(Ue, _e, Ze, x, h, re) : L(_e, Ue, Ze, h, x, re);
      if (Gt !== void 0) {
        if (Gt)
          continue;
        nt = !1;
        break;
      }
      if (Oe) {
        if (!or(x, function(Ct, Jt) {
          if (!ar(Oe, Jt) && (_e === Ct || Ie(_e, Ct, G, L, re)))
            return Oe.push(Jt);
        })) {
          nt = !1;
          break;
        }
      } else if (!(_e === Ue || Ie(_e, Ue, G, L, re))) {
        nt = !1;
        break;
      }
    }
    return re.delete(h), re.delete(x), nt;
  }
  function Vl(h, x, G, L, Ie, re, Ae) {
    switch (G) {
      case O:
        if (h.byteLength != x.byteLength || h.byteOffset != x.byteOffset)
          return !1;
        h = h.buffer, x = x.buffer;
      case N:
        return !(h.byteLength != x.byteLength || !re(new Be(h), new Be(x)));
      case c:
      case d:
      case I:
        return To(+h, +x);
      case p:
        return h.name == x.name && h.message == x.message;
      case P:
      case k:
        return h == x + "";
      case m:
        var Ge = _r;
      case w:
        var Re = L & i;
        if (Ge || (Ge = Qr), h.size != x.size && !Re)
          return !1;
        var xe = Ae.get(h);
        if (xe)
          return xe == x;
        L |= o, Ae.set(h, x);
        var Ze = Bo(Ge(h), Ge(x), L, Ie, re, Ae);
        return Ae.delete(h), Ze;
      case R:
        if (ni)
          return ni.call(h) == ni.call(x);
    }
    return !1;
  }
  function Dl(h, x, G, L, Ie, re) {
    var Ae = G & i, Ge = Oo(h), Re = Ge.length, xe = Oo(x), Ze = xe.length;
    if (Re != Ze && !Ae)
      return !1;
    for (var nt = Re; nt--; ) {
      var Oe = Ge[nt];
      if (!(Ae ? Oe in x : ue.call(x, Oe)))
        return !1;
    }
    var _e = re.get(h);
    if (_e && re.get(x))
      return _e == x;
    var Ue = !0;
    re.set(h, x), re.set(x, h);
    for (var Gt = Ae; ++nt < Re; ) {
      Oe = Ge[nt];
      var Ct = h[Oe], Jt = x[Oe];
      if (L)
        var Lo = Ae ? L(Jt, Ct, Oe, x, h, re) : L(Ct, Jt, Oe, h, x, re);
      if (!(Lo === void 0 ? Ct === Jt || Ie(Ct, Jt, G, L, re) : Lo)) {
        Ue = !1;
        break;
      }
      Gt || (Gt = Oe == "constructor");
    }
    if (Ue && !Gt) {
      var fr = h.constructor, pr = x.constructor;
      fr != pr && "constructor" in h && "constructor" in x && !(typeof fr == "function" && fr instanceof fr && typeof pr == "function" && pr instanceof pr) && (Ue = !1);
    }
    return re.delete(h), re.delete(x), Ue;
  }
  function Oo(h) {
    return Rl(h, Yl, Ml);
  }
  function cr(h, x) {
    var G = h.__data__;
    return Xl(x) ? G[typeof x == "string" ? "string" : "hash"] : G.map;
  }
  function sn(h, x) {
    var G = Yr(h, x);
    return Bl(G) ? G : void 0;
  }
  function Nl(h) {
    var x = ue.call(h, Ht), G = h[Ht];
    try {
      h[Ht] = void 0;
      var L = !0;
    } catch {
    }
    var Ie = ut.call(h);
    return L && (x ? h[Ht] = G : delete h[Ht]), Ie;
  }
  var Ml = Po ? function(h) {
    return h == null ? [] : (h = Object(h), an(Po(h), function(x) {
      return yt.call(h, x);
    }));
  } : _l, Pt = Vn;
  ($r && Pt(new $r(new ArrayBuffer(1))) != O || On && Pt(new On()) != m || Kr && Pt(Kr.resolve()) != E || ei && Pt(new ei()) != w || ti && Pt(new ti()) != H) && (Pt = function(h) {
    var x = Vn(h), G = x == A ? h.constructor : void 0, L = G ? jt(G) : "";
    if (L)
      switch (L) {
        case nl:
          return O;
        case rl:
          return m;
        case il:
          return E;
        case ol:
          return w;
        case ul:
          return H;
      }
    return x;
  });
  function Ll(h, x) {
    return x = x ?? u, !!x && (typeof h == "number" || pe.test(h)) && h > -1 && h % 1 == 0 && h < x;
  }
  function Xl(h) {
    var x = typeof h;
    return x == "string" || x == "number" || x == "symbol" || x == "boolean" ? h !== "__proto__" : h === null;
  }
  function zl(h) {
    return !!Le && Le in h;
  }
  function Hl(h) {
    var x = h && h.constructor, G = typeof x == "function" && x.prototype || V;
    return h === G;
  }
  function Wl(h) {
    return ut.call(h);
  }
  function jt(h) {
    if (h != null) {
      try {
        return oe.call(h);
      } catch {
      }
      try {
        return h + "";
      } catch {
      }
    }
    return "";
  }
  function To(h, x) {
    return h === x || h !== h && x !== x;
  }
  var Zl = Ro(/* @__PURE__ */ function() {
    return arguments;
  }()) ? Ro : function(h) {
    return Dn(h) && ue.call(h, "callee") && !yt.call(h, "callee");
  }, dr = Array.isArray;
  function jl(h) {
    return h != null && Do(h.length) && !Vo(h);
  }
  var ri = el || Ul;
  function Jl(h, x) {
    return ko(h, x);
  }
  function Vo(h) {
    if (!No(h))
      return !1;
    var x = Vn(h);
    return x == f || x == y || x == l || x == S;
  }
  function Do(h) {
    return typeof h == "number" && h > -1 && h % 1 == 0 && h <= u;
  }
  function No(h) {
    var x = typeof h;
    return h != null && (x == "object" || x == "function");
  }
  function Dn(h) {
    return h != null && typeof h == "object";
  }
  var Mo = zt ? ur(zt) : Ol;
  function Yl(h) {
    return jl(h) ? Gl(h) : Tl(h);
  }
  function _l() {
    return [];
  }
  function Ul() {
    return !1;
  }
  e.exports = Jl;
})(Er, Er.exports);
var nc = Er.exports;
const rc = /* @__PURE__ */ va(nc);
var er = class {
  constructor() {
    this.listeners = /* @__PURE__ */ new Set(), this.subscribe = this.subscribe.bind(this);
  }
  subscribe(e) {
    return this.listeners.add(e), this.onSubscribe(), () => {
      this.listeners.delete(e), this.onUnsubscribe();
    };
  }
  hasListeners() {
    return this.listeners.size > 0;
  }
  onSubscribe() {
  }
  onUnsubscribe() {
  }
}, nn = typeof window > "u" || "Deno" in globalThis;
function qe() {
}
function ic(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Si(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function xa(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function fn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ot(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function zo(e, t) {
  const {
    type: n = "all",
    exact: r,
    fetchStatus: i,
    predicate: o,
    queryKey: u,
    stale: a
  } = e;
  if (u) {
    if (r) {
      if (t.queryHash !== to(u, t.options))
        return !1;
    } else if (!Yn(t.queryKey, u))
      return !1;
  }
  if (n !== "all") {
    const s = t.isActive();
    if (n === "active" && !s || n === "inactive" && s)
      return !1;
  }
  return !(typeof a == "boolean" && t.isStale() !== a || i && i !== t.state.fetchStatus || o && !o(t));
}
function Ho(e, t) {
  const { exact: n, status: r, predicate: i, mutationKey: o } = e;
  if (o) {
    if (!t.options.mutationKey)
      return !1;
    if (n) {
      if (Jn(t.options.mutationKey) !== Jn(o))
        return !1;
    } else if (!Yn(t.options.mutationKey, o))
      return !1;
  }
  return !(r && t.state.status !== r || i && !i(t));
}
function to(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || Jn)(e);
}
function Jn(e) {
  return JSON.stringify(
    e,
    (t, n) => Fi(n) ? Object.keys(n).sort().reduce((r, i) => (r[i] = n[i], r), {}) : n
  );
}
function Yn(e, t) {
  return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? !Object.keys(t).some((n) => !Yn(e[n], t[n])) : !1;
}
function wi(e, t) {
  if (e === t)
    return e;
  const n = Wo(e) && Wo(t);
  if (n || Fi(e) && Fi(t)) {
    const r = n ? e : Object.keys(e), i = r.length, o = n ? t : Object.keys(t), u = o.length, a = n ? [] : {};
    let s = 0;
    for (let l = 0; l < u; l++) {
      const c = n ? l : o[l];
      (!n && r.includes(c) || n) && e[c] === void 0 && t[c] === void 0 ? (a[c] = void 0, s++) : (a[c] = wi(e[c], t[c]), a[c] === e[c] && e[c] !== void 0 && s++);
    }
    return i === u && s === i ? e : a;
  }
  return t;
}
function Ei(e, t) {
  if (!t || Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function Wo(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Fi(e) {
  if (!Zo(e))
    return !1;
  const t = e.constructor;
  if (t === void 0)
    return !0;
  const n = t.prototype;
  return !(!Zo(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype);
}
function Zo(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function oc(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function Pi(e, t, n) {
  if (typeof n.structuralSharing == "function")
    return n.structuralSharing(e, t);
  if (n.structuralSharing !== !1) {
    if (process.env.NODE_ENV !== "production")
      try {
        return wi(e, t);
      } catch (r) {
        console.error(
          `Structural sharing requires data to be JSON serializable. To fix this, turn off structuralSharing or return JSON-serializable data from your queryFn. [${n.queryHash}]: ${r}`
        );
      }
    return wi(e, t);
  }
  return t;
}
function uc(e, t, n = 0) {
  const r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function ac(e, t, n = 0) {
  const r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var Fr = Symbol();
function Aa(e, t) {
  return process.env.NODE_ENV !== "production" && e.queryFn === Fr && console.error(
    `Attempted to invoke queryFn when set to skipToken. This is likely a configuration error. Query hash: '${e.queryHash}'`
  ), !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === Fr ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn;
}
var Ut, Bt, mn, la, sc = (la = class extends er {
  constructor() {
    super();
    q(this, Ut);
    q(this, Bt);
    q(this, mn);
    X(this, mn, (t) => {
      if (!nn && window.addEventListener) {
        const n = () => t();
        return window.addEventListener("visibilitychange", n, !1), () => {
          window.removeEventListener("visibilitychange", n);
        };
      }
    });
  }
  onSubscribe() {
    v(this, Bt) || this.setEventListener(v(this, mn));
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || ((t = v(this, Bt)) == null || t.call(this), X(this, Bt, void 0));
  }
  setEventListener(t) {
    var n;
    X(this, mn, t), (n = v(this, Bt)) == null || n.call(this), X(this, Bt, t((r) => {
      typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
    }));
  }
  setFocused(t) {
    v(this, Ut) !== t && (X(this, Ut, t), this.onFocus());
  }
  onFocus() {
    const t = this.isFocused();
    this.listeners.forEach((n) => {
      n(t);
    });
  }
  isFocused() {
    var t;
    return typeof v(this, Ut) == "boolean" ? v(this, Ut) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden";
  }
}, Ut = new WeakMap(), Bt = new WeakMap(), mn = new WeakMap(), la), no = new sc(), bn, Ot, yn, ca, lc = (ca = class extends er {
  constructor() {
    super();
    q(this, bn, !0);
    q(this, Ot);
    q(this, yn);
    X(this, yn, (t) => {
      if (!nn && window.addEventListener) {
        const n = () => t(!0), r = () => t(!1);
        return window.addEventListener("online", n, !1), window.addEventListener("offline", r, !1), () => {
          window.removeEventListener("online", n), window.removeEventListener("offline", r);
        };
      }
    });
  }
  onSubscribe() {
    v(this, Ot) || this.setEventListener(v(this, yn));
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || ((t = v(this, Ot)) == null || t.call(this), X(this, Ot, void 0));
  }
  setEventListener(t) {
    var n;
    X(this, yn, t), (n = v(this, Ot)) == null || n.call(this), X(this, Ot, t(this.setOnline.bind(this)));
  }
  setOnline(t) {
    v(this, bn) !== t && (X(this, bn, t), this.listeners.forEach((r) => {
      r(t);
    }));
  }
  isOnline() {
    return v(this, bn);
  }
}, bn = new WeakMap(), Ot = new WeakMap(), yn = new WeakMap(), ca), Pr = new lc();
function Gi() {
  let e, t;
  const n = new Promise((i, o) => {
    e = i, t = o;
  });
  n.status = "pending", n.catch(() => {
  });
  function r(i) {
    Object.assign(n, i), delete n.resolve, delete n.reject;
  }
  return n.resolve = (i) => {
    r({
      status: "fulfilled",
      value: i
    }), e(i);
  }, n.reject = (i) => {
    r({
      status: "rejected",
      reason: i
    }), t(i);
  }, n;
}
function cc(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function Sa(e) {
  return (e ?? "online") === "online" ? Pr.isOnline() : !0;
}
var wa = class extends Error {
  constructor(e) {
    super("CancelledError"), this.revert = e == null ? void 0 : e.revert, this.silent = e == null ? void 0 : e.silent;
  }
};
function oi(e) {
  return e instanceof wa;
}
function Ea(e) {
  let t = !1, n = 0, r = !1, i;
  const o = Gi(), u = (m) => {
    var I;
    r || (p(new wa(m)), (I = e.abort) == null || I.call(e));
  }, a = () => {
    t = !0;
  }, s = () => {
    t = !1;
  }, l = () => no.isFocused() && (e.networkMode === "always" || Pr.isOnline()) && e.canRun(), c = () => Sa(e.networkMode) && e.canRun(), d = (m) => {
    var I;
    r || (r = !0, (I = e.onSuccess) == null || I.call(e, m), i == null || i(), o.resolve(m));
  }, p = (m) => {
    var I;
    r || (r = !0, (I = e.onError) == null || I.call(e, m), i == null || i(), o.reject(m));
  }, f = () => new Promise((m) => {
    var I;
    i = (C) => {
      (r || l()) && m(C);
    }, (I = e.onPause) == null || I.call(e);
  }).then(() => {
    var m;
    i = void 0, r || (m = e.onContinue) == null || m.call(e);
  }), y = () => {
    if (r)
      return;
    let m;
    const I = n === 0 ? e.initialPromise : void 0;
    try {
      m = I ?? e.fn();
    } catch (C) {
      m = Promise.reject(C);
    }
    Promise.resolve(m).then(d).catch((C) => {
      var w;
      if (r)
        return;
      const A = e.retry ?? (nn ? 0 : 3), E = e.retryDelay ?? cc, S = typeof E == "function" ? E(n, C) : E, P = A === !0 || typeof A == "number" && n < A || typeof A == "function" && A(n, C);
      if (t || !P) {
        p(C);
        return;
      }
      n++, (w = e.onFail) == null || w.call(e, n, C), oc(S).then(() => l() ? void 0 : f()).then(() => {
        t ? p(C) : y();
      });
    });
  };
  return {
    promise: o,
    cancel: u,
    continue: () => (i == null || i(), o),
    cancelRetry: a,
    continueRetry: s,
    canStart: c,
    start: () => (c() ? y() : f().then(y), o)
  };
}
function dc() {
  let e = [], t = 0, n = (a) => {
    a();
  }, r = (a) => {
    a();
  }, i = (a) => setTimeout(a, 0);
  const o = (a) => {
    t ? e.push(a) : i(() => {
      n(a);
    });
  }, u = () => {
    const a = e;
    e = [], a.length && i(() => {
      r(() => {
        a.forEach((s) => {
          n(s);
        });
      });
    });
  };
  return {
    batch: (a) => {
      let s;
      t++;
      try {
        s = a();
      } finally {
        t--, t || u();
      }
      return s;
    },
    /**
     * All calls to the wrapped function will be batched.
     */
    batchCalls: (a) => (...s) => {
      o(() => {
        a(...s);
      });
    },
    schedule: o,
    /**
     * Use this method to set a custom notify function.
     * This can be used to for example wrap notifications with `React.act` while running tests.
     */
    setNotifyFunction: (a) => {
      n = a;
    },
    /**
     * Use this method to set a custom function to batch notifications together into a single tick.
     * By default React Query will use the batch function provided by ReactDOM or React Native.
     */
    setBatchNotifyFunction: (a) => {
      r = a;
    },
    setScheduler: (a) => {
      i = a;
    }
  };
}
var ke = dc(), Qt, da, Fa = (da = class {
  constructor() {
    q(this, Qt);
  }
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(), Si(this.gcTime) && X(this, Qt, setTimeout(() => {
      this.optionalRemove();
    }, this.gcTime));
  }
  updateGcTime(e) {
    this.gcTime = Math.max(
      this.gcTime || 0,
      e ?? (nn ? 1 / 0 : 5 * 60 * 1e3)
    );
  }
  clearGcTimeout() {
    v(this, Qt) && (clearTimeout(v(this, Qt)), X(this, Qt, void 0));
  }
}, Qt = new WeakMap(), da), In, Cn, Qe, Te, Un, qt, rt, vt, fa, fc = (fa = class extends Fa {
  constructor(t) {
    super();
    q(this, rt);
    q(this, In);
    q(this, Cn);
    q(this, Qe);
    q(this, Te);
    q(this, Un);
    q(this, qt);
    X(this, qt, !1), X(this, Un, t.defaultOptions), this.setOptions(t.options), this.observers = [], X(this, Qe, t.cache), this.queryKey = t.queryKey, this.queryHash = t.queryHash, X(this, In, pc(this.options)), this.state = t.state ?? v(this, In), this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  get promise() {
    var t;
    return (t = v(this, Te)) == null ? void 0 : t.promise;
  }
  setOptions(t) {
    this.options = { ...v(this, Un), ...t }, this.updateGcTime(this.options.gcTime);
  }
  optionalRemove() {
    !this.observers.length && this.state.fetchStatus === "idle" && v(this, Qe).remove(this);
  }
  setData(t, n) {
    const r = Pi(this.state.data, t, this.options);
    return le(this, rt, vt).call(this, {
      data: r,
      type: "success",
      dataUpdatedAt: n == null ? void 0 : n.updatedAt,
      manual: n == null ? void 0 : n.manual
    }), r;
  }
  setState(t, n) {
    le(this, rt, vt).call(this, { type: "setState", state: t, setStateOptions: n });
  }
  cancel(t) {
    var r, i;
    const n = (r = v(this, Te)) == null ? void 0 : r.promise;
    return (i = v(this, Te)) == null || i.cancel(t), n ? n.then(qe).catch(qe) : Promise.resolve();
  }
  destroy() {
    super.destroy(), this.cancel({ silent: !0 });
  }
  reset() {
    this.destroy(), this.setState(v(this, In));
  }
  isActive() {
    return this.observers.some(
      (t) => ot(t.options.enabled, this) !== !1
    );
  }
  isDisabled() {
    return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === Fr || this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
  }
  isStale() {
    return this.state.isInvalidated ? !0 : this.getObserversCount() > 0 ? this.observers.some(
      (t) => t.getCurrentResult().isStale
    ) : this.state.data === void 0;
  }
  isStaleByTime(t = 0) {
    return this.state.isInvalidated || this.state.data === void 0 || !xa(this.state.dataUpdatedAt, t);
  }
  onFocus() {
    var n;
    const t = this.observers.find((r) => r.shouldFetchOnWindowFocus());
    t == null || t.refetch({ cancelRefetch: !1 }), (n = v(this, Te)) == null || n.continue();
  }
  onOnline() {
    var n;
    const t = this.observers.find((r) => r.shouldFetchOnReconnect());
    t == null || t.refetch({ cancelRefetch: !1 }), (n = v(this, Te)) == null || n.continue();
  }
  addObserver(t) {
    this.observers.includes(t) || (this.observers.push(t), this.clearGcTimeout(), v(this, Qe).notify({ type: "observerAdded", query: this, observer: t }));
  }
  removeObserver(t) {
    this.observers.includes(t) && (this.observers = this.observers.filter((n) => n !== t), this.observers.length || (v(this, Te) && (v(this, qt) ? v(this, Te).cancel({ revert: !0 }) : v(this, Te).cancelRetry()), this.scheduleGc()), v(this, Qe).notify({ type: "observerRemoved", query: this, observer: t }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    this.state.isInvalidated || le(this, rt, vt).call(this, { type: "invalidate" });
  }
  fetch(t, n) {
    var s, l, c;
    if (this.state.fetchStatus !== "idle") {
      if (this.state.data !== void 0 && (n != null && n.cancelRefetch))
        this.cancel({ silent: !0 });
      else if (v(this, Te))
        return v(this, Te).continueRetry(), v(this, Te).promise;
    }
    if (t && this.setOptions(t), !this.options.queryFn) {
      const d = this.observers.find((p) => p.options.queryFn);
      d && this.setOptions(d.options);
    }
    process.env.NODE_ENV !== "production" && (Array.isArray(this.options.queryKey) || console.error(
      "As of v4, queryKey needs to be an Array. If you are using a string like 'repoData', please change it to an Array, e.g. ['repoData']"
    ));
    const r = new AbortController(), i = (d) => {
      Object.defineProperty(d, "signal", {
        enumerable: !0,
        get: () => (X(this, qt, !0), r.signal)
      });
    }, o = () => {
      const d = Aa(this.options, n), p = {
        queryKey: this.queryKey,
        meta: this.meta
      };
      return i(p), X(this, qt, !1), this.options.persister ? this.options.persister(
        d,
        p,
        this
      ) : d(p);
    }, u = {
      fetchOptions: n,
      options: this.options,
      queryKey: this.queryKey,
      state: this.state,
      fetchFn: o
    };
    i(u), (s = this.options.behavior) == null || s.onFetch(
      u,
      this
    ), X(this, Cn, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((l = u.fetchOptions) == null ? void 0 : l.meta)) && le(this, rt, vt).call(this, { type: "fetch", meta: (c = u.fetchOptions) == null ? void 0 : c.meta });
    const a = (d) => {
      var p, f, y, m;
      oi(d) && d.silent || le(this, rt, vt).call(this, {
        type: "error",
        error: d
      }), oi(d) || ((f = (p = v(this, Qe).config).onError) == null || f.call(
        p,
        d,
        this
      ), (m = (y = v(this, Qe).config).onSettled) == null || m.call(
        y,
        this.state.data,
        d,
        this
      )), this.scheduleGc();
    };
    return X(this, Te, Ea({
      initialPromise: n == null ? void 0 : n.initialPromise,
      fn: u.fetchFn,
      abort: r.abort.bind(r),
      onSuccess: (d) => {
        var p, f, y, m;
        if (d === void 0) {
          process.env.NODE_ENV !== "production" && console.error(
            `Query data cannot be undefined. Please make sure to return a value other than undefined from your query function. Affected query key: ${this.queryHash}`
          ), a(new Error(`${this.queryHash} data is undefined`));
          return;
        }
        try {
          this.setData(d);
        } catch (I) {
          a(I);
          return;
        }
        (f = (p = v(this, Qe).config).onSuccess) == null || f.call(p, d, this), (m = (y = v(this, Qe).config).onSettled) == null || m.call(
          y,
          d,
          this.state.error,
          this
        ), this.scheduleGc();
      },
      onError: a,
      onFail: (d, p) => {
        le(this, rt, vt).call(this, { type: "failed", failureCount: d, error: p });
      },
      onPause: () => {
        le(this, rt, vt).call(this, { type: "pause" });
      },
      onContinue: () => {
        le(this, rt, vt).call(this, { type: "continue" });
      },
      retry: u.options.retry,
      retryDelay: u.options.retryDelay,
      networkMode: u.options.networkMode,
      canRun: () => !0
    })), v(this, Te).start();
  }
}, In = new WeakMap(), Cn = new WeakMap(), Qe = new WeakMap(), Te = new WeakMap(), Un = new WeakMap(), qt = new WeakMap(), rt = new WeakSet(), vt = function(t) {
  const n = (r) => {
    switch (t.type) {
      case "failed":
        return {
          ...r,
          fetchFailureCount: t.failureCount,
          fetchFailureReason: t.error
        };
      case "pause":
        return {
          ...r,
          fetchStatus: "paused"
        };
      case "continue":
        return {
          ...r,
          fetchStatus: "fetching"
        };
      case "fetch":
        return {
          ...r,
          ...Pa(r.data, this.options),
          fetchMeta: t.meta ?? null
        };
      case "success":
        return {
          ...r,
          data: t.data,
          dataUpdateCount: r.dataUpdateCount + 1,
          dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
          error: null,
          isInvalidated: !1,
          status: "success",
          ...!t.manual && {
            fetchStatus: "idle",
            fetchFailureCount: 0,
            fetchFailureReason: null
          }
        };
      case "error":
        const i = t.error;
        return oi(i) && i.revert && v(this, Cn) ? { ...v(this, Cn), fetchStatus: "idle" } : {
          ...r,
          error: i,
          errorUpdateCount: r.errorUpdateCount + 1,
          errorUpdatedAt: Date.now(),
          fetchFailureCount: r.fetchFailureCount + 1,
          fetchFailureReason: i,
          fetchStatus: "idle",
          status: "error"
        };
      case "invalidate":
        return {
          ...r,
          isInvalidated: !0
        };
      case "setState":
        return {
          ...r,
          ...t.state
        };
    }
  };
  this.state = n(this.state), ke.batch(() => {
    this.observers.forEach((r) => {
      r.onQueryUpdate();
    }), v(this, Qe).notify({ query: this, type: "updated", action: t });
  });
}, fa);
function Pa(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: Sa(t.networkMode) ? "fetching" : "paused",
    ...e === void 0 && {
      error: null,
      status: "pending"
    }
  };
}
function pc(e) {
  const t = typeof e.initialData == "function" ? e.initialData() : e.initialData, n = t !== void 0, r = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? r ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? "success" : "pending",
    fetchStatus: "idle"
  };
}
var lt, pa, hc = (pa = class extends er {
  constructor(t = {}) {
    super();
    q(this, lt);
    this.config = t, X(this, lt, /* @__PURE__ */ new Map());
  }
  build(t, n, r) {
    const i = n.queryKey, o = n.queryHash ?? to(i, n);
    let u = this.get(o);
    return u || (u = new fc({
      cache: this,
      queryKey: i,
      queryHash: o,
      options: t.defaultQueryOptions(n),
      state: r,
      defaultOptions: t.getQueryDefaults(i)
    }), this.add(u)), u;
  }
  add(t) {
    v(this, lt).has(t.queryHash) || (v(this, lt).set(t.queryHash, t), this.notify({
      type: "added",
      query: t
    }));
  }
  remove(t) {
    const n = v(this, lt).get(t.queryHash);
    n && (t.destroy(), n === t && v(this, lt).delete(t.queryHash), this.notify({ type: "removed", query: t }));
  }
  clear() {
    ke.batch(() => {
      this.getAll().forEach((t) => {
        this.remove(t);
      });
    });
  }
  get(t) {
    return v(this, lt).get(t);
  }
  getAll() {
    return [...v(this, lt).values()];
  }
  find(t) {
    const n = { exact: !0, ...t };
    return this.getAll().find(
      (r) => zo(n, r)
    );
  }
  findAll(t = {}) {
    const n = this.getAll();
    return Object.keys(t).length > 0 ? n.filter((r) => zo(t, r)) : n;
  }
  notify(t) {
    ke.batch(() => {
      this.listeners.forEach((n) => {
        n(t);
      });
    });
  }
  onFocus() {
    ke.batch(() => {
      this.getAll().forEach((t) => {
        t.onFocus();
      });
    });
  }
  onOnline() {
    ke.batch(() => {
      this.getAll().forEach((t) => {
        t.onOnline();
      });
    });
  }
}, lt = new WeakMap(), pa), ct, Ne, $t, dt, kt, ha, gc = (ha = class extends Fa {
  constructor(t) {
    super();
    q(this, dt);
    q(this, ct);
    q(this, Ne);
    q(this, $t);
    this.mutationId = t.mutationId, X(this, Ne, t.mutationCache), X(this, ct, []), this.state = t.state || mc(), this.setOptions(t.options), this.scheduleGc();
  }
  setOptions(t) {
    this.options = t, this.updateGcTime(this.options.gcTime);
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(t) {
    v(this, ct).includes(t) || (v(this, ct).push(t), this.clearGcTimeout(), v(this, Ne).notify({
      type: "observerAdded",
      mutation: this,
      observer: t
    }));
  }
  removeObserver(t) {
    X(this, ct, v(this, ct).filter((n) => n !== t)), this.scheduleGc(), v(this, Ne).notify({
      type: "observerRemoved",
      mutation: this,
      observer: t
    });
  }
  optionalRemove() {
    v(this, ct).length || (this.state.status === "pending" ? this.scheduleGc() : v(this, Ne).remove(this));
  }
  continue() {
    var t;
    return ((t = v(this, $t)) == null ? void 0 : t.continue()) ?? // continuing a mutation assumes that variables are set, mutation must have been dehydrated before
    this.execute(this.state.variables);
  }
  async execute(t) {
    var i, o, u, a, s, l, c, d, p, f, y, m, I, C, A, E, S, P, w, k;
    X(this, $t, Ea({
      fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
      onFail: (R, T) => {
        le(this, dt, kt).call(this, { type: "failed", failureCount: R, error: T });
      },
      onPause: () => {
        le(this, dt, kt).call(this, { type: "pause" });
      },
      onContinue: () => {
        le(this, dt, kt).call(this, { type: "continue" });
      },
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => v(this, Ne).canRun(this)
    }));
    const n = this.state.status === "pending", r = !v(this, $t).canStart();
    try {
      if (!n) {
        le(this, dt, kt).call(this, { type: "pending", variables: t, isPaused: r }), await ((o = (i = v(this, Ne).config).onMutate) == null ? void 0 : o.call(
          i,
          t,
          this
        ));
        const T = await ((a = (u = this.options).onMutate) == null ? void 0 : a.call(u, t));
        T !== this.state.context && le(this, dt, kt).call(this, {
          type: "pending",
          context: T,
          variables: t,
          isPaused: r
        });
      }
      const R = await v(this, $t).start();
      return await ((l = (s = v(this, Ne).config).onSuccess) == null ? void 0 : l.call(
        s,
        R,
        t,
        this.state.context,
        this
      )), await ((d = (c = this.options).onSuccess) == null ? void 0 : d.call(c, R, t, this.state.context)), await ((f = (p = v(this, Ne).config).onSettled) == null ? void 0 : f.call(
        p,
        R,
        null,
        this.state.variables,
        this.state.context,
        this
      )), await ((m = (y = this.options).onSettled) == null ? void 0 : m.call(y, R, null, t, this.state.context)), le(this, dt, kt).call(this, { type: "success", data: R }), R;
    } catch (R) {
      try {
        throw await ((C = (I = v(this, Ne).config).onError) == null ? void 0 : C.call(
          I,
          R,
          t,
          this.state.context,
          this
        )), await ((E = (A = this.options).onError) == null ? void 0 : E.call(
          A,
          R,
          t,
          this.state.context
        )), await ((P = (S = v(this, Ne).config).onSettled) == null ? void 0 : P.call(
          S,
          void 0,
          R,
          this.state.variables,
          this.state.context,
          this
        )), await ((k = (w = this.options).onSettled) == null ? void 0 : k.call(
          w,
          void 0,
          R,
          t,
          this.state.context
        )), R;
      } finally {
        le(this, dt, kt).call(this, { type: "error", error: R });
      }
    } finally {
      v(this, Ne).runNext(this);
    }
  }
}, ct = new WeakMap(), Ne = new WeakMap(), $t = new WeakMap(), dt = new WeakSet(), kt = function(t) {
  const n = (r) => {
    switch (t.type) {
      case "failed":
        return {
          ...r,
          failureCount: t.failureCount,
          failureReason: t.error
        };
      case "pause":
        return {
          ...r,
          isPaused: !0
        };
      case "continue":
        return {
          ...r,
          isPaused: !1
        };
      case "pending":
        return {
          ...r,
          context: t.context,
          data: void 0,
          failureCount: 0,
          failureReason: null,
          error: null,
          isPaused: t.isPaused,
          status: "pending",
          variables: t.variables,
          submittedAt: Date.now()
        };
      case "success":
        return {
          ...r,
          data: t.data,
          failureCount: 0,
          failureReason: null,
          error: null,
          status: "success",
          isPaused: !1
        };
      case "error":
        return {
          ...r,
          data: void 0,
          error: t.error,
          failureCount: r.failureCount + 1,
          failureReason: t.error,
          isPaused: !1,
          status: "error"
        };
    }
  };
  this.state = n(this.state), ke.batch(() => {
    v(this, ct).forEach((r) => {
      r.onMutationUpdate(t);
    }), v(this, Ne).notify({
      mutation: this,
      type: "updated",
      action: t
    });
  });
}, ha);
function mc() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0
  };
}
var xt, it, Qn, ga, bc = (ga = class extends er {
  constructor(t = {}) {
    super();
    q(this, xt);
    q(this, it);
    q(this, Qn);
    this.config = t, X(this, xt, /* @__PURE__ */ new Set()), X(this, it, /* @__PURE__ */ new Map()), X(this, Qn, 0);
  }
  build(t, n, r) {
    const i = new gc({
      mutationCache: this,
      mutationId: ++hr(this, Qn)._,
      options: t.defaultMutationOptions(n),
      state: r
    });
    return this.add(i), i;
  }
  add(t) {
    v(this, xt).add(t);
    const n = gr(t);
    if (typeof n == "string") {
      const r = v(this, it).get(n);
      r ? r.push(t) : v(this, it).set(n, [t]);
    }
    this.notify({ type: "added", mutation: t });
  }
  remove(t) {
    if (v(this, xt).delete(t)) {
      const n = gr(t);
      if (typeof n == "string") {
        const r = v(this, it).get(n);
        if (r)
          if (r.length > 1) {
            const i = r.indexOf(t);
            i !== -1 && r.splice(i, 1);
          } else r[0] === t && v(this, it).delete(n);
      }
    }
    this.notify({ type: "removed", mutation: t });
  }
  canRun(t) {
    const n = gr(t);
    if (typeof n == "string") {
      const r = v(this, it).get(n), i = r == null ? void 0 : r.find(
        (o) => o.state.status === "pending"
      );
      return !i || i === t;
    } else
      return !0;
  }
  runNext(t) {
    var r;
    const n = gr(t);
    if (typeof n == "string") {
      const i = (r = v(this, it).get(n)) == null ? void 0 : r.find((o) => o !== t && o.state.isPaused);
      return (i == null ? void 0 : i.continue()) ?? Promise.resolve();
    } else
      return Promise.resolve();
  }
  clear() {
    ke.batch(() => {
      v(this, xt).forEach((t) => {
        this.notify({ type: "removed", mutation: t });
      }), v(this, xt).clear(), v(this, it).clear();
    });
  }
  getAll() {
    return Array.from(v(this, xt));
  }
  find(t) {
    const n = { exact: !0, ...t };
    return this.getAll().find(
      (r) => Ho(n, r)
    );
  }
  findAll(t = {}) {
    return this.getAll().filter((n) => Ho(t, n));
  }
  notify(t) {
    ke.batch(() => {
      this.listeners.forEach((n) => {
        n(t);
      });
    });
  }
  resumePausedMutations() {
    const t = this.getAll().filter((n) => n.state.isPaused);
    return ke.batch(
      () => Promise.all(
        t.map((n) => n.continue().catch(qe))
      )
    );
  }
}, xt = new WeakMap(), it = new WeakMap(), Qn = new WeakMap(), ga);
function gr(e) {
  var t;
  return (t = e.options.scope) == null ? void 0 : t.id;
}
function jo(e) {
  return {
    onFetch: (t, n) => {
      var c, d, p, f, y;
      const r = t.options, i = (p = (d = (c = t.fetchOptions) == null ? void 0 : c.meta) == null ? void 0 : d.fetchMore) == null ? void 0 : p.direction, o = ((f = t.state.data) == null ? void 0 : f.pages) || [], u = ((y = t.state.data) == null ? void 0 : y.pageParams) || [];
      let a = { pages: [], pageParams: [] }, s = 0;
      const l = async () => {
        let m = !1;
        const I = (E) => {
          Object.defineProperty(E, "signal", {
            enumerable: !0,
            get: () => (t.signal.aborted ? m = !0 : t.signal.addEventListener("abort", () => {
              m = !0;
            }), t.signal)
          });
        }, C = Aa(t.options, t.fetchOptions), A = async (E, S, P) => {
          if (m)
            return Promise.reject();
          if (S == null && E.pages.length)
            return Promise.resolve(E);
          const w = {
            queryKey: t.queryKey,
            pageParam: S,
            direction: P ? "backward" : "forward",
            meta: t.options.meta
          };
          I(w);
          const k = await C(
            w
          ), { maxPages: R } = t.options, T = P ? ac : uc;
          return {
            pages: T(E.pages, k, R),
            pageParams: T(E.pageParams, S, R)
          };
        };
        if (i && o.length) {
          const E = i === "backward", S = E ? yc : Jo, P = {
            pages: o,
            pageParams: u
          }, w = S(r, P);
          a = await A(P, w, E);
        } else {
          const E = e ?? o.length;
          do {
            const S = s === 0 ? u[0] ?? r.initialPageParam : Jo(r, a);
            if (s > 0 && S == null)
              break;
            a = await A(a, S), s++;
          } while (s < E);
        }
        return a;
      };
      t.options.persister ? t.fetchFn = () => {
        var m, I;
        return (I = (m = t.options).persister) == null ? void 0 : I.call(
          m,
          l,
          {
            queryKey: t.queryKey,
            meta: t.options.meta,
            signal: t.signal
          },
          n
        );
      } : t.fetchFn = l;
    }
  };
}
function Jo(e, { pages: t, pageParams: n }) {
  const r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(
    t[r],
    t,
    n[r],
    n
  ) : void 0;
}
function yc(e, { pages: t, pageParams: n }) {
  var r;
  return t.length > 0 ? (r = e.getPreviousPageParam) == null ? void 0 : r.call(e, t[0], t, n[0], n) : void 0;
}
var Se, Tt, Vt, vn, xn, Dt, An, Sn, ma, Ic = (ma = class {
  constructor(e = {}) {
    q(this, Se);
    q(this, Tt);
    q(this, Vt);
    q(this, vn);
    q(this, xn);
    q(this, Dt);
    q(this, An);
    q(this, Sn);
    X(this, Se, e.queryCache || new hc()), X(this, Tt, e.mutationCache || new bc()), X(this, Vt, e.defaultOptions || {}), X(this, vn, /* @__PURE__ */ new Map()), X(this, xn, /* @__PURE__ */ new Map()), X(this, Dt, 0);
  }
  mount() {
    hr(this, Dt)._++, v(this, Dt) === 1 && (X(this, An, no.subscribe(async (e) => {
      e && (await this.resumePausedMutations(), v(this, Se).onFocus());
    })), X(this, Sn, Pr.subscribe(async (e) => {
      e && (await this.resumePausedMutations(), v(this, Se).onOnline());
    })));
  }
  unmount() {
    var e, t;
    hr(this, Dt)._--, v(this, Dt) === 0 && ((e = v(this, An)) == null || e.call(this), X(this, An, void 0), (t = v(this, Sn)) == null || t.call(this), X(this, Sn, void 0));
  }
  isFetching(e) {
    return v(this, Se).findAll({ ...e, fetchStatus: "fetching" }).length;
  }
  isMutating(e) {
    return v(this, Tt).findAll({ ...e, status: "pending" }).length;
  }
  getQueryData(e) {
    var n;
    const t = this.defaultQueryOptions({ queryKey: e });
    return (n = v(this, Se).get(t.queryHash)) == null ? void 0 : n.state.data;
  }
  ensureQueryData(e) {
    const t = this.defaultQueryOptions(e), n = v(this, Se).build(this, t), r = n.state.data;
    return r === void 0 ? this.fetchQuery(e) : (e.revalidateIfStale && n.isStaleByTime(fn(t.staleTime, n)) && this.prefetchQuery(t), Promise.resolve(r));
  }
  getQueriesData(e) {
    return v(this, Se).findAll(e).map(({ queryKey: t, state: n }) => {
      const r = n.data;
      return [t, r];
    });
  }
  setQueryData(e, t, n) {
    const r = this.defaultQueryOptions({ queryKey: e }), i = v(this, Se).get(
      r.queryHash
    ), o = i == null ? void 0 : i.state.data, u = ic(t, o);
    if (u !== void 0)
      return v(this, Se).build(this, r).setData(u, { ...n, manual: !0 });
  }
  setQueriesData(e, t, n) {
    return ke.batch(
      () => v(this, Se).findAll(e).map(({ queryKey: r }) => [
        r,
        this.setQueryData(r, t, n)
      ])
    );
  }
  getQueryState(e) {
    var n;
    const t = this.defaultQueryOptions({ queryKey: e });
    return (n = v(this, Se).get(
      t.queryHash
    )) == null ? void 0 : n.state;
  }
  removeQueries(e) {
    const t = v(this, Se);
    ke.batch(() => {
      t.findAll(e).forEach((n) => {
        t.remove(n);
      });
    });
  }
  resetQueries(e, t) {
    const n = v(this, Se), r = {
      type: "active",
      ...e
    };
    return ke.batch(() => (n.findAll(e).forEach((i) => {
      i.reset();
    }), this.refetchQueries(r, t)));
  }
  cancelQueries(e, t = {}) {
    const n = { revert: !0, ...t }, r = ke.batch(
      () => v(this, Se).findAll(e).map((i) => i.cancel(n))
    );
    return Promise.all(r).then(qe).catch(qe);
  }
  invalidateQueries(e, t = {}) {
    return ke.batch(() => {
      if (v(this, Se).findAll(e).forEach((r) => {
        r.invalidate();
      }), (e == null ? void 0 : e.refetchType) === "none")
        return Promise.resolve();
      const n = {
        ...e,
        type: (e == null ? void 0 : e.refetchType) ?? (e == null ? void 0 : e.type) ?? "active"
      };
      return this.refetchQueries(n, t);
    });
  }
  refetchQueries(e, t = {}) {
    const n = {
      ...t,
      cancelRefetch: t.cancelRefetch ?? !0
    }, r = ke.batch(
      () => v(this, Se).findAll(e).filter((i) => !i.isDisabled()).map((i) => {
        let o = i.fetch(void 0, n);
        return n.throwOnError || (o = o.catch(qe)), i.state.fetchStatus === "paused" ? Promise.resolve() : o;
      })
    );
    return Promise.all(r).then(qe);
  }
  fetchQuery(e) {
    const t = this.defaultQueryOptions(e);
    t.retry === void 0 && (t.retry = !1);
    const n = v(this, Se).build(this, t);
    return n.isStaleByTime(
      fn(t.staleTime, n)
    ) ? n.fetch(t) : Promise.resolve(n.state.data);
  }
  prefetchQuery(e) {
    return this.fetchQuery(e).then(qe).catch(qe);
  }
  fetchInfiniteQuery(e) {
    return e.behavior = jo(e.pages), this.fetchQuery(e);
  }
  prefetchInfiniteQuery(e) {
    return this.fetchInfiniteQuery(e).then(qe).catch(qe);
  }
  ensureInfiniteQueryData(e) {
    return e.behavior = jo(e.pages), this.ensureQueryData(e);
  }
  resumePausedMutations() {
    return Pr.isOnline() ? v(this, Tt).resumePausedMutations() : Promise.resolve();
  }
  getQueryCache() {
    return v(this, Se);
  }
  getMutationCache() {
    return v(this, Tt);
  }
  getDefaultOptions() {
    return v(this, Vt);
  }
  setDefaultOptions(e) {
    X(this, Vt, e);
  }
  setQueryDefaults(e, t) {
    v(this, vn).set(Jn(e), {
      queryKey: e,
      defaultOptions: t
    });
  }
  getQueryDefaults(e) {
    const t = [...v(this, vn).values()], n = {};
    return t.forEach((r) => {
      Yn(e, r.queryKey) && Object.assign(n, r.defaultOptions);
    }), n;
  }
  setMutationDefaults(e, t) {
    v(this, xn).set(Jn(e), {
      mutationKey: e,
      defaultOptions: t
    });
  }
  getMutationDefaults(e) {
    const t = [...v(this, xn).values()];
    let n = {};
    return t.forEach((r) => {
      Yn(e, r.mutationKey) && (n = { ...n, ...r.defaultOptions });
    }), n;
  }
  defaultQueryOptions(e) {
    if (e._defaulted)
      return e;
    const t = {
      ...v(this, Vt).queries,
      ...this.getQueryDefaults(e.queryKey),
      ...e,
      _defaulted: !0
    };
    return t.queryHash || (t.queryHash = to(
      t.queryKey,
      t
    )), t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"), t.throwOnError === void 0 && (t.throwOnError = !!t.suspense), !t.networkMode && t.persister && (t.networkMode = "offlineFirst"), t.queryFn === Fr && (t.enabled = !1), t;
  }
  defaultMutationOptions(e) {
    return e != null && e._defaulted ? e : {
      ...v(this, Vt).mutations,
      ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
      ...e,
      _defaulted: !0
    };
  }
  clear() {
    v(this, Se).clear(), v(this, Tt).clear();
  }
}, Se = new WeakMap(), Tt = new WeakMap(), Vt = new WeakMap(), vn = new WeakMap(), xn = new WeakMap(), Dt = new WeakMap(), An = new WeakMap(), Sn = new WeakMap(), ma), ze, ce, qn, Me, Kt, wn, Nt, ft, $n, En, Fn, en, tn, Mt, Pn, ge, Xn, Ri, ki, Bi, Oi, Ti, Vi, Di, Ga, ba, Cc = (ba = class extends er {
  constructor(t, n) {
    super();
    q(this, ge);
    q(this, ze);
    q(this, ce);
    q(this, qn);
    q(this, Me);
    q(this, Kt);
    q(this, wn);
    q(this, Nt);
    q(this, ft);
    q(this, $n);
    q(this, En);
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    q(this, Fn);
    q(this, en);
    q(this, tn);
    q(this, Mt);
    q(this, Pn, /* @__PURE__ */ new Set());
    this.options = n, X(this, ze, t), X(this, ft, null), X(this, Nt, Gi()), this.options.experimental_prefetchInRender || v(this, Nt).reject(
      new Error("experimental_prefetchInRender feature flag is not enabled")
    ), this.bindMethods(), this.setOptions(n);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (v(this, ce).addObserver(this), Yo(v(this, ce), this.options) ? le(this, ge, Xn).call(this) : this.updateResult(), le(this, ge, Oi).call(this));
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return Ni(
      v(this, ce),
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return Ni(
      v(this, ce),
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), le(this, ge, Ti).call(this), le(this, ge, Vi).call(this), v(this, ce).removeObserver(this);
  }
  setOptions(t, n) {
    const r = this.options, i = v(this, ce);
    if (this.options = v(this, ze).defaultQueryOptions(t), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof ot(this.options.enabled, v(this, ce)) != "boolean")
      throw new Error(
        "Expected enabled to be a boolean or a callback that returns a boolean"
      );
    le(this, ge, Di).call(this), v(this, ce).setOptions(this.options), r._defaulted && !Ei(this.options, r) && v(this, ze).getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: v(this, ce),
      observer: this
    });
    const o = this.hasListeners();
    o && _o(
      v(this, ce),
      i,
      this.options,
      r
    ) && le(this, ge, Xn).call(this), this.updateResult(n), o && (v(this, ce) !== i || ot(this.options.enabled, v(this, ce)) !== ot(r.enabled, v(this, ce)) || fn(this.options.staleTime, v(this, ce)) !== fn(r.staleTime, v(this, ce))) && le(this, ge, Ri).call(this);
    const u = le(this, ge, ki).call(this);
    o && (v(this, ce) !== i || ot(this.options.enabled, v(this, ce)) !== ot(r.enabled, v(this, ce)) || u !== v(this, Mt)) && le(this, ge, Bi).call(this, u);
  }
  getOptimisticResult(t) {
    const n = v(this, ze).getQueryCache().build(v(this, ze), t), r = this.createResult(n, t);
    return xc(this, r) && (X(this, Me, r), X(this, wn, this.options), X(this, Kt, v(this, ce).state)), r;
  }
  getCurrentResult() {
    return v(this, Me);
  }
  trackResult(t, n) {
    const r = {};
    return Object.keys(t).forEach((i) => {
      Object.defineProperty(r, i, {
        configurable: !1,
        enumerable: !0,
        get: () => (this.trackProp(i), n == null || n(i), t[i])
      });
    }), r;
  }
  trackProp(t) {
    v(this, Pn).add(t);
  }
  getCurrentQuery() {
    return v(this, ce);
  }
  refetch({ ...t } = {}) {
    return this.fetch({
      ...t
    });
  }
  fetchOptimistic(t) {
    const n = v(this, ze).defaultQueryOptions(t), r = v(this, ze).getQueryCache().build(v(this, ze), n);
    return r.fetch().then(() => this.createResult(r, n));
  }
  fetch(t) {
    return le(this, ge, Xn).call(this, {
      ...t,
      cancelRefetch: t.cancelRefetch ?? !0
    }).then(() => (this.updateResult(), v(this, Me)));
  }
  createResult(t, n) {
    var R;
    const r = v(this, ce), i = this.options, o = v(this, Me), u = v(this, Kt), a = v(this, wn), l = t !== r ? t.state : v(this, qn), { state: c } = t;
    let d = { ...c }, p = !1, f;
    if (n._optimisticResults) {
      const T = this.hasListeners(), H = !T && Yo(t, n), N = T && _o(t, r, n, i);
      (H || N) && (d = {
        ...d,
        ...Pa(c.data, t.options)
      }), n._optimisticResults === "isRestoring" && (d.fetchStatus = "idle");
    }
    let { error: y, errorUpdatedAt: m, status: I } = d;
    if (n.select && d.data !== void 0)
      if (o && d.data === (u == null ? void 0 : u.data) && n.select === v(this, $n))
        f = v(this, En);
      else
        try {
          X(this, $n, n.select), f = n.select(d.data), f = Pi(o == null ? void 0 : o.data, f, n), X(this, En, f), X(this, ft, null);
        } catch (T) {
          X(this, ft, T);
        }
    else
      f = d.data;
    if (n.placeholderData !== void 0 && f === void 0 && I === "pending") {
      let T;
      if (o != null && o.isPlaceholderData && n.placeholderData === (a == null ? void 0 : a.placeholderData))
        T = o.data;
      else if (T = typeof n.placeholderData == "function" ? n.placeholderData(
        (R = v(this, Fn)) == null ? void 0 : R.state.data,
        v(this, Fn)
      ) : n.placeholderData, n.select && T !== void 0)
        try {
          T = n.select(T), X(this, ft, null);
        } catch (H) {
          X(this, ft, H);
        }
      T !== void 0 && (I = "success", f = Pi(
        o == null ? void 0 : o.data,
        T,
        n
      ), p = !0);
    }
    v(this, ft) && (y = v(this, ft), f = v(this, En), m = Date.now(), I = "error");
    const C = d.fetchStatus === "fetching", A = I === "pending", E = I === "error", S = A && C, P = f !== void 0, k = {
      status: I,
      fetchStatus: d.fetchStatus,
      isPending: A,
      isSuccess: I === "success",
      isError: E,
      isInitialLoading: S,
      isLoading: S,
      data: f,
      dataUpdatedAt: d.dataUpdatedAt,
      error: y,
      errorUpdatedAt: m,
      failureCount: d.fetchFailureCount,
      failureReason: d.fetchFailureReason,
      errorUpdateCount: d.errorUpdateCount,
      isFetched: d.dataUpdateCount > 0 || d.errorUpdateCount > 0,
      isFetchedAfterMount: d.dataUpdateCount > l.dataUpdateCount || d.errorUpdateCount > l.errorUpdateCount,
      isFetching: C,
      isRefetching: C && !A,
      isLoadingError: E && !P,
      isPaused: d.fetchStatus === "paused",
      isPlaceholderData: p,
      isRefetchError: E && P,
      isStale: ro(t, n),
      refetch: this.refetch,
      promise: v(this, Nt)
    };
    if (this.options.experimental_prefetchInRender) {
      const T = (O) => {
        k.status === "error" ? O.reject(k.error) : k.data !== void 0 && O.resolve(k.data);
      }, H = () => {
        const O = X(this, Nt, k.promise = Gi());
        T(O);
      }, N = v(this, Nt);
      switch (N.status) {
        case "pending":
          t.queryHash === r.queryHash && T(N);
          break;
        case "fulfilled":
          (k.status === "error" || k.data !== N.value) && H();
          break;
        case "rejected":
          (k.status !== "error" || k.error !== N.reason) && H();
          break;
      }
    }
    return k;
  }
  updateResult(t) {
    const n = v(this, Me), r = this.createResult(v(this, ce), this.options);
    if (X(this, Kt, v(this, ce).state), X(this, wn, this.options), v(this, Kt).data !== void 0 && X(this, Fn, v(this, ce)), Ei(r, n))
      return;
    X(this, Me, r);
    const i = {}, o = () => {
      if (!n)
        return !0;
      const { notifyOnChangeProps: u } = this.options, a = typeof u == "function" ? u() : u;
      if (a === "all" || !a && !v(this, Pn).size)
        return !0;
      const s = new Set(
        a ?? v(this, Pn)
      );
      return this.options.throwOnError && s.add("error"), Object.keys(v(this, Me)).some((l) => {
        const c = l;
        return v(this, Me)[c] !== n[c] && s.has(c);
      });
    };
    (t == null ? void 0 : t.listeners) !== !1 && o() && (i.listeners = !0), le(this, ge, Ga).call(this, { ...i, ...t });
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && le(this, ge, Oi).call(this);
  }
}, ze = new WeakMap(), ce = new WeakMap(), qn = new WeakMap(), Me = new WeakMap(), Kt = new WeakMap(), wn = new WeakMap(), Nt = new WeakMap(), ft = new WeakMap(), $n = new WeakMap(), En = new WeakMap(), Fn = new WeakMap(), en = new WeakMap(), tn = new WeakMap(), Mt = new WeakMap(), Pn = new WeakMap(), ge = new WeakSet(), Xn = function(t) {
  le(this, ge, Di).call(this);
  let n = v(this, ce).fetch(
    this.options,
    t
  );
  return t != null && t.throwOnError || (n = n.catch(qe)), n;
}, Ri = function() {
  le(this, ge, Ti).call(this);
  const t = fn(
    this.options.staleTime,
    v(this, ce)
  );
  if (nn || v(this, Me).isStale || !Si(t))
    return;
  const r = xa(v(this, Me).dataUpdatedAt, t) + 1;
  X(this, en, setTimeout(() => {
    v(this, Me).isStale || this.updateResult();
  }, r));
}, ki = function() {
  return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(v(this, ce)) : this.options.refetchInterval) ?? !1;
}, Bi = function(t) {
  le(this, ge, Vi).call(this), X(this, Mt, t), !(nn || ot(this.options.enabled, v(this, ce)) === !1 || !Si(v(this, Mt)) || v(this, Mt) === 0) && X(this, tn, setInterval(() => {
    (this.options.refetchIntervalInBackground || no.isFocused()) && le(this, ge, Xn).call(this);
  }, v(this, Mt)));
}, Oi = function() {
  le(this, ge, Ri).call(this), le(this, ge, Bi).call(this, le(this, ge, ki).call(this));
}, Ti = function() {
  v(this, en) && (clearTimeout(v(this, en)), X(this, en, void 0));
}, Vi = function() {
  v(this, tn) && (clearInterval(v(this, tn)), X(this, tn, void 0));
}, Di = function() {
  const t = v(this, ze).getQueryCache().build(v(this, ze), this.options);
  if (t === v(this, ce))
    return;
  const n = v(this, ce);
  X(this, ce, t), X(this, qn, t.state), this.hasListeners() && (n == null || n.removeObserver(this), t.addObserver(this));
}, Ga = function(t) {
  ke.batch(() => {
    t.listeners && this.listeners.forEach((n) => {
      n(v(this, Me));
    }), v(this, ze).getQueryCache().notify({
      query: v(this, ce),
      type: "observerResultsUpdated"
    });
  });
}, ba);
function vc(e, t) {
  return ot(t.enabled, e) !== !1 && e.state.data === void 0 && !(e.state.status === "error" && t.retryOnMount === !1);
}
function Yo(e, t) {
  return vc(e, t) || e.state.data !== void 0 && Ni(e, t, t.refetchOnMount);
}
function Ni(e, t, n) {
  if (ot(t.enabled, e) !== !1) {
    const r = typeof n == "function" ? n(e) : n;
    return r === "always" || r !== !1 && ro(e, t);
  }
  return !1;
}
function _o(e, t, n, r) {
  return (e !== t || ot(r.enabled, e) === !1) && (!n.suspense || e.state.status !== "error") && ro(e, n);
}
function ro(e, t) {
  return ot(t.enabled, e) !== !1 && e.isStaleByTime(fn(t.staleTime, e));
}
function xc(e, t) {
  return !Ei(e.getCurrentResult(), t);
}
var Ra = te.createContext(
  void 0
), Ac = (e) => {
  const t = te.useContext(Ra);
  if (!t)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return t;
}, Sc = ({
  client: e,
  children: t
}) => (te.useEffect(() => (e.mount(), () => {
  e.unmount();
}), [e]), /* @__PURE__ */ W(Ra.Provider, { value: e, children: t })), ka = te.createContext(!1), wc = () => te.useContext(ka);
ka.Provider;
function Ec() {
  let e = !1;
  return {
    clearReset: () => {
      e = !1;
    },
    reset: () => {
      e = !0;
    },
    isReset: () => e
  };
}
var Fc = te.createContext(Ec()), Pc = () => te.useContext(Fc);
function Gc(e, t) {
  return typeof e == "function" ? e(...t) : !!e;
}
function Uo() {
}
var Rc = (e, t) => {
  (e.suspense || e.throwOnError || e.experimental_prefetchInRender) && (t.isReset() || (e.retryOnMount = !1));
}, kc = (e) => {
  te.useEffect(() => {
    e.clearReset();
  }, [e]);
}, Bc = ({
  result: e,
  errorResetBoundary: t,
  throwOnError: n,
  query: r
}) => e.isError && !t.isReset() && !e.isFetching && r && Gc(n, [e.error, r]), Oc = (e) => {
  const t = e.staleTime;
  e.suspense && (e.staleTime = typeof t == "function" ? (...n) => Math.max(t(...n), 1e3) : Math.max(t ?? 1e3, 1e3), typeof e.gcTime == "number" && (e.gcTime = Math.max(e.gcTime, 1e3)));
}, Tc = (e, t) => e.isLoading && e.isFetching && !t, Vc = (e, t) => (e == null ? void 0 : e.suspense) && t.isPending, Qo = (e, t, n) => t.fetchOptimistic(e).catch(() => {
  n.clearReset();
});
function Dc(e, t, n) {
  var d, p, f, y, m;
  if (process.env.NODE_ENV !== "production" && (typeof e != "object" || Array.isArray(e)))
    throw new Error(
      'Bad argument type. Starting with v5, only the "Object" form is allowed when calling query related functions. Please use the error stack to find the culprit call. More info here: https://tanstack.com/query/latest/docs/react/guides/migrating-to-v5#supports-a-single-signature-one-object'
    );
  const r = Ac(), i = wc(), o = Pc(), u = r.defaultQueryOptions(e);
  (p = (d = r.getDefaultOptions().queries) == null ? void 0 : d._experimental_beforeQuery) == null || p.call(
    d,
    u
  ), u._optimisticResults = i ? "isRestoring" : "optimistic", Oc(u), Rc(u, o), kc(o);
  const a = !r.getQueryCache().get(u.queryHash), [s] = te.useState(
    () => new t(
      r,
      u
    )
  ), l = s.getOptimisticResult(u), c = !i && e.subscribed !== !1;
  if (te.useSyncExternalStore(
    te.useCallback(
      (I) => {
        const C = c ? s.subscribe(ke.batchCalls(I)) : Uo;
        return s.updateResult(), C;
      },
      [s, c]
    ),
    () => s.getCurrentResult(),
    () => s.getCurrentResult()
  ), te.useEffect(() => {
    s.setOptions(u, { listeners: !1 });
  }, [u, s]), Vc(u, l))
    throw Qo(u, s, o);
  if (Bc({
    result: l,
    errorResetBoundary: o,
    throwOnError: u.throwOnError,
    query: r.getQueryCache().get(u.queryHash)
  }))
    throw l.error;
  if ((y = (f = r.getDefaultOptions().queries) == null ? void 0 : f._experimental_afterQuery) == null || y.call(
    f,
    u,
    l
  ), u.experimental_prefetchInRender && !nn && Tc(l, i)) {
    const I = a ? (
      // Fetch immediately on render in order to ensure `.promise` is resolved even if the component is unmounted
      Qo(u, s, o)
    ) : (
      // subscribe to the "cache promise" so that we can finalize the currentThenable once data comes in
      (m = r.getQueryCache().get(u.queryHash)) == null ? void 0 : m.promise
    );
    I == null || I.catch(Uo).finally(() => {
      s.updateResult();
    });
  }
  return u.notifyOnChangeProps ? l : s.trackResult(l);
}
function on(e, t) {
  return Dc(e, Cc);
}
const Ba = Kn(
  void 0
), Lt = () => {
  const e = Gn(Ba);
  if (!e)
    throw new Error("Must be used inside FrontendClientProvider");
  return e;
}, _y = ({
  children: e,
  client: t
}) => {
  const n = new Ic({
    defaultOptions: {
      queries: {
        staleTime: 36e5,
        refetchOnWindowFocus: !1
      }
    }
  });
  return /* @__PURE__ */ W(Sc, { client: n, children: /* @__PURE__ */ W(Ba.Provider, { value: t, children: e }) });
};
function Oa(e) {
  return typeof e == "object" && e && "__lv" in e ? e.__lv.value : e;
}
function Nc(e) {
  if (typeof e == "object" && e && "selectedOptions" in e && Array.isArray(e.selectedOptions)) {
    const t = e.selectedOptions, n = [];
    for (const r of t)
      if (typeof r == "object" && r && "emitValue" in r) {
        const i = r.emitValue;
        typeof i == "object" && i && "__lv" in i ? n.push(i.__lv.value) : n.push(i);
      } else
        return [];
    return n;
  }
  return Array.isArray(e) ? e : [];
}
function Mc(e) {
  const t = Nc(e.value);
  if (!e.prop.default && typeof t > "u")
    return [
      "required"
    ];
  if (!e.prop.default && Array.isArray(t) && !t.length) return [
    "empty array"
  ];
}
function Lc(e) {
  const t = Oa(e.value);
  if (t == null || typeof t > "u") return [
    "required"
  ];
}
function Xc(e) {
  const {
    prop: t,
    value: n
  } = e, r = Oa(n);
  if (!t.default && (r == null || typeof r > "u")) return [
    "required"
  ];
  const i = typeof r == "number" ? r : parseInt(String(r));
  if (Number.isNaN(i)) return [
    "not a number"
  ];
  const o = [];
  return typeof t.min == "number" && i < t.min && o.push("number too small"), typeof t.max == "number" && i > t.max && o.push("number too big"), o;
}
function zc(e) {
  const {
    prop: t,
    value: n
  } = e;
  if (!t.default && (n == null || typeof n > "u")) return [
    "required"
  ];
}
function Hc(e) {
  const t = e.auth_type === "oauth", n = JSON.parse(e.custom_fields_json || "[]");
  if ("extracted_custom_fields_names" in e && e.extracted_custom_fields_names) {
    const r = (e.extracted_custom_fields_names || []).map(
      (i) => ({
        name: i
      })
    );
    n.push(...r);
  }
  return n.map((r) => ({
    ...r,
    // if oauth, treat all as optional (they are usually needed for getting access token)
    optional: r.optional || t
  }));
}
function Wc(e) {
  const {
    app: t,
    value: n
  } = e;
  if (!t)
    return [
      "app field not registered"
    ];
  if (!n)
    return [
      "no app configured"
    ];
  if (typeof n != "object")
    return [
      "not an app"
    ];
  const r = n;
  if ("authProvisionId" in r && !r.authProvisionId && t.auth_type) {
    const i = [];
    if (t.auth_type === "oauth" && !r.oauth_access_token && i.push("missing oauth token"), t.auth_type === "oauth" || t.auth_type === "keys") {
      const o = Hc(t), u = r;
      for (const a of o)
        !a.optional && !u[a.name] && i.push(`missing custom field: ${a.name}`);
    }
    return t.auth_type !== "none" && i.push("no auth provision configured"), i;
  }
}
const xr = [
  "$.service.db",
  "$.interface.http",
  "$.interface.apphook",
  "$.interface.timer"
  // TODO add support for this (cron string and timers)
], Ta = Kn(void 0), io = () => {
  const e = Gn(Ta);
  if (!e)
    throw new Error("Must be used inside provider");
  return e;
}, Zc = ({
  children: e,
  props: t
}) => {
  const n = Lt(), r = eo(), {
    component: i,
    configuredProps: o,
    propNames: u,
    userId: a
  } = t, s = i.key, [
    l,
    c
  ] = ve(0), [
    d,
    p
  ] = ve({}), [
    f,
    y
  ] = ve(!1), [
    m,
    I
  ] = ve({}), [
    C,
    A
  ] = ve({});
  _t(() => {
    A({});
  }, [
    i.key
  ]);
  const E = (D) => C[D.name];
  let S = o || {};
  const [
    P,
    w
  ] = ve(S), k = t.onUpdateConfiguredProps || w;
  t.onUpdateConfiguredProps || (S = P);
  const [
    R,
    T
  ] = ve(), [
    H,
    N
  ] = ve(), O = {
    userId: a,
    componentId: s,
    configuredProps: S,
    dynamicPropsId: R == null ? void 0 : R.id
  }, K = {
    ...O
  }, {
    isFetching: ie
    // TODO error
  } = on({
    queryKey: [
      "dynamicProps",
      K
    ],
    queryFn: async () => {
      var z;
      const { dynamicProps: D } = await n.componentReloadProps(O);
      return D && ((z = t.onUpdateDynamicProps) == null || z.call(t, D), T(D)), N(void 0), [];
    },
    enabled: H != null
    // TODO or props.dynamicPropsId && !dynamicProps
  }), [
    M,
    Y
  ] = ve([]);
  _t(() => {
    ee();
  }, [
    S
  ]);
  let _ = (R == null ? void 0 : R.configurableProps) || t.component.configurable_props || [];
  if (u != null && u.length) {
    const D = [];
    for (const z of _)
      u.findIndex((U) => z.name === U) >= 0 && D.push(z);
    _ = D;
  }
  H != null && (_ = _.slice(0, H + 1));
  const se = (D, z) => {
    const U = [];
    if (D.optional || D.hidden || D.disabled || xr.includes(D.type)) return [];
    if (D.type === "app") {
      const fe = d[D.name];
      if (fe) {
        const Pe = fe.extra.app;
        U.push(...Wc({
          prop: D,
          value: z,
          app: Pe
        }) ?? []);
      } else
        U.push("field not registered");
    } else D.type === "boolean" ? U.push(...Lc({
      prop: D,
      value: z
    }) ?? []) : D.type === "integer" ? U.push(...Xc({
      prop: D,
      value: z
    }) ?? []) : D.type === "string" ? U.push(...zc({
      prop: D,
      value: z
    }) ?? []) : D.type === "string[]" && U.push(...Mc({
      prop: D,
      value: z
    }) ?? []);
    return U;
  }, me = (D) => {
    let z;
    for (let U = 0; U < _.length; U++) {
      const fe = _[U];
      if (fe.hidden || fe.optional && !E(fe))
        continue;
      if (D[fe.name] === void 0 && z == null && (fe.type === "app" || fe.remoteOptions)) {
        z = U;
        break;
      }
    }
    c(z);
  }, b = (D) => {
    k(D), me(D);
    const z = {};
    for (let U = 0; U < _.length; U++) {
      const fe = _[U], Pe = D[fe.name], We = se(fe, Pe);
      We.length && (z[fe.name] = We);
    }
    I(z);
  };
  _t(() => {
    const D = {};
    for (const z of _) {
      if (z.hidden || xr.includes(z.type) || z.optional && !E(z))
        continue;
      const U = S[z.name];
      U === void 0 ? "default" in z && z.default != null && (D[z.name] = z.default) : z.type === "integer" && typeof U != "number" ? delete D[z.name] : D[z.name] = U;
    }
    rc(D, S) || b(D);
  }, [
    _
  ]);
  const [
    Ce,
    ae
  ] = ve(a);
  _t(() => {
    Ce !== a && (b({}), ae(a));
  }, [
    a
  ]);
  const g = (D, z) => {
    const U = _[D], fe = {
      ...S
    };
    z === void 0 ? delete fe[U.name] : fe[U.name] = z, k(fe), U.reloadProps && N(D), (U.type === "app" || U.remoteOptions) && me(fe);
    const Pe = se(U, z), We = {
      ...m
    };
    Pe.length ? We[U.name] = Pe : delete We[U.name], I(We);
  }, pe = (D, z) => {
    const U = {
      ...C
    };
    z ? U[D.name] = !0 : delete U[D.name];
    const fe = _.findIndex((Pe) => Pe.name === D.name);
    z ? (o == null ? void 0 : o[D.name]) !== void 0 ? g(
      fe,
      o[D.name]
    ) : "default" in D && D.default != null && g(fe, D.default) : g(fe, void 0), A(U);
  }, ee = () => {
    const D = [];
    for (const z of _) {
      if (!z || z.optional || z.hidden || xr.includes(z.type)) continue;
      const U = S[z.name];
      se(z, U).length && D.push(z.name);
    }
    Y(D);
  }, de = (D) => {
    p((z) => (z[D.prop.name] = D, z));
  }, Fe = {
    id: r,
    isValid: !Object.keys(m).length,
    // XXX want to expose more from errors
    props: t,
    userId: a,
    component: i,
    configurableProps: _,
    configuredProps: S,
    dynamicProps: R,
    dynamicPropsQueryIsFetching: ie,
    errors: m,
    fields: d,
    optionalPropIsEnabled: E,
    optionalPropSetEnabled: pe,
    propsNeedConfiguring: M,
    queryDisabledIdx: l,
    registerField: de,
    setConfiguredProp: g,
    setSubmitting: y,
    submitting: f
  };
  return /* @__PURE__ */ W(Ta.Provider, { value: Fe, children: e });
};
function rn(e) {
  "@babel/helpers - typeof";
  return rn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, rn(e);
}
function jc(e, t) {
  if (rn(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (rn(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Va(e) {
  var t = jc(e, "string");
  return rn(t) == "symbol" ? t : t + "";
}
function zn(e, t, n) {
  return (t = Va(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function qo(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Z(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? qo(Object(n), !0).forEach(function(r) {
      zn(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : qo(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Jc(e) {
  if (Array.isArray(e)) return e;
}
function Yc(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, i, o, u, a = [], s = !0, l = !1;
    try {
      if (o = (n = n.call(e)).next, t === 0) {
        if (Object(n) !== n) return;
        s = !1;
      } else for (; !(s = (r = o.call(n)).done) && (a.push(r.value), a.length !== t); s = !0) ;
    } catch (c) {
      l = !0, i = c;
    } finally {
      try {
        if (!s && n.return != null && (u = n.return(), Object(u) !== u)) return;
      } finally {
        if (l) throw i;
      }
    }
    return a;
  }
}
function Mi(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Da(e, t) {
  if (e) {
    if (typeof e == "string") return Mi(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Mi(e, t) : void 0;
  }
}
function _c() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function St(e, t) {
  return Jc(e) || Yc(e, t) || Da(e, t) || _c();
}
function Uc(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.includes(r)) continue;
    n[r] = e[r];
  }
  return n;
}
function bt(e, t) {
  if (e == null) return {};
  var n, r, i = Uc(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], t.includes(n) || {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  }
  return i;
}
var Qc = ["defaultInputValue", "defaultMenuIsOpen", "defaultValue", "inputValue", "menuIsOpen", "onChange", "onInputChange", "onMenuClose", "onMenuOpen", "value"];
function Na(e) {
  var t = e.defaultInputValue, n = t === void 0 ? "" : t, r = e.defaultMenuIsOpen, i = r === void 0 ? !1 : r, o = e.defaultValue, u = o === void 0 ? null : o, a = e.inputValue, s = e.menuIsOpen, l = e.onChange, c = e.onInputChange, d = e.onMenuClose, p = e.onMenuOpen, f = e.value, y = bt(e, Qc), m = ve(a !== void 0 ? a : n), I = St(m, 2), C = I[0], A = I[1], E = ve(s !== void 0 ? s : i), S = St(E, 2), P = S[0], w = S[1], k = ve(f !== void 0 ? f : u), R = St(k, 2), T = R[0], H = R[1], N = Ve(function(se, me) {
    typeof l == "function" && l(se, me), H(se);
  }, [l]), O = Ve(function(se, me) {
    var b;
    typeof c == "function" && (b = c(se, me)), A(b !== void 0 ? b : se);
  }, [c]), K = Ve(function() {
    typeof p == "function" && p(), w(!0);
  }, [p]), ie = Ve(function() {
    typeof d == "function" && d(), w(!1);
  }, [d]), M = a !== void 0 ? a : C, Y = s !== void 0 ? s : P, _ = f !== void 0 ? f : T;
  return Z(Z({}, y), {}, {
    inputValue: M,
    menuIsOpen: Y,
    onChange: N,
    onInputChange: O,
    onMenuClose: ie,
    onMenuOpen: K,
    value: _
  });
}
function J() {
  return J = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, J.apply(null, arguments);
}
function qc(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function $o(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Va(r.key), r);
  }
}
function $c(e, t, n) {
  return $o(e.prototype, t), $o(e, n), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function Li(e, t) {
  return Li = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, Li(e, t);
}
function Kc(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), t && Li(e, t);
}
function Gr(e) {
  return Gr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Gr(e);
}
function Ma() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Ma = function() {
    return !!e;
  })();
}
function ed(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function td(e, t) {
  if (t && (rn(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return ed(e);
}
function nd(e) {
  var t = Ma();
  return function() {
    var n, r = Gr(e);
    if (t) {
      var i = Gr(this).constructor;
      n = Reflect.construct(r, arguments, i);
    } else n = r.apply(this, arguments);
    return td(this, n);
  };
}
function rd(e) {
  if (Array.isArray(e)) return Mi(e);
}
function id(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function od() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function pn(e) {
  return rd(e) || id(e) || Da(e) || od();
}
function ud(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
    raw: {
      value: Object.freeze(t)
    }
  }));
}
const ad = Math.min, sd = Math.max, Rr = Math.round, mr = Math.floor, kr = (e) => ({
  x: e,
  y: e
});
function ld(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: i
  } = e;
  return {
    width: r,
    height: i,
    top: n,
    left: t,
    right: t + r,
    bottom: n + i,
    x: t,
    y: n
  };
}
function Xr() {
  return typeof window < "u";
}
function La(e) {
  return za(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function wt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Xa(e) {
  var t;
  return (t = (za(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function za(e) {
  return Xr() ? e instanceof Node || e instanceof wt(e).Node : !1;
}
function cd(e) {
  return Xr() ? e instanceof Element || e instanceof wt(e).Element : !1;
}
function oo(e) {
  return Xr() ? e instanceof HTMLElement || e instanceof wt(e).HTMLElement : !1;
}
function Ko(e) {
  return !Xr() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof wt(e).ShadowRoot;
}
function Ha(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: i
  } = uo(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(i);
}
function dd() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function fd(e) {
  return ["html", "body", "#document"].includes(La(e));
}
function uo(e) {
  return wt(e).getComputedStyle(e);
}
function pd(e) {
  if (La(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Ko(e) && e.host || // Fallback.
    Xa(e)
  );
  return Ko(t) ? t.host : t;
}
function Wa(e) {
  const t = pd(e);
  return fd(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : oo(t) && Ha(t) ? t : Wa(t);
}
function Br(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const i = Wa(e), o = i === ((r = e.ownerDocument) == null ? void 0 : r.body), u = wt(i);
  if (o) {
    const a = Xi(u);
    return t.concat(u, u.visualViewport || [], Ha(i) ? i : [], a && n ? Br(a) : []);
  }
  return t.concat(i, Br(i, [], n));
}
function Xi(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function hd(e) {
  const t = uo(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const i = oo(e), o = i ? e.offsetWidth : n, u = i ? e.offsetHeight : r, a = Rr(n) !== o || Rr(r) !== u;
  return a && (n = o, r = u), {
    width: n,
    height: r,
    $: a
  };
}
function ao(e) {
  return cd(e) ? e : e.contextElement;
}
function eu(e) {
  const t = ao(e);
  if (!oo(t))
    return kr(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: i,
    $: o
  } = hd(t);
  let u = (o ? Rr(n.width) : n.width) / r, a = (o ? Rr(n.height) : n.height) / i;
  return (!u || !Number.isFinite(u)) && (u = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: u,
    y: a
  };
}
const gd = /* @__PURE__ */ kr(0);
function md(e) {
  const t = wt(e);
  return !dd() || !t.visualViewport ? gd : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function bd(e, t, n) {
  return !1;
}
function tu(e, t, n, r) {
  t === void 0 && (t = !1);
  const i = e.getBoundingClientRect(), o = ao(e);
  let u = kr(1);
  t && (u = eu(e));
  const a = bd() ? md(o) : kr(0);
  let s = (i.left + a.x) / u.x, l = (i.top + a.y) / u.y, c = i.width / u.x, d = i.height / u.y;
  if (o) {
    const p = wt(o), f = r;
    let y = p, m = Xi(y);
    for (; m && r && f !== y; ) {
      const I = eu(m), C = m.getBoundingClientRect(), A = uo(m), E = C.left + (m.clientLeft + parseFloat(A.paddingLeft)) * I.x, S = C.top + (m.clientTop + parseFloat(A.paddingTop)) * I.y;
      s *= I.x, l *= I.y, c *= I.x, d *= I.y, s += E, l += S, y = wt(m), m = Xi(y);
    }
  }
  return ld({
    width: c,
    height: d,
    x: s,
    y: l
  });
}
function Za(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function yd(e, t) {
  let n = null, r;
  const i = Xa(e);
  function o() {
    var a;
    clearTimeout(r), (a = n) == null || a.disconnect(), n = null;
  }
  function u(a, s) {
    a === void 0 && (a = !1), s === void 0 && (s = 1), o();
    const l = e.getBoundingClientRect(), {
      left: c,
      top: d,
      width: p,
      height: f
    } = l;
    if (a || t(), !p || !f)
      return;
    const y = mr(d), m = mr(i.clientWidth - (c + p)), I = mr(i.clientHeight - (d + f)), C = mr(c), E = {
      rootMargin: -y + "px " + -m + "px " + -I + "px " + -C + "px",
      threshold: sd(0, ad(1, s)) || 1
    };
    let S = !0;
    function P(w) {
      const k = w[0].intersectionRatio;
      if (k !== s) {
        if (!S)
          return u();
        k ? u(!1, k) : r = setTimeout(() => {
          u(!1, 1e-7);
        }, 1e3);
      }
      k === 1 && !Za(l, e.getBoundingClientRect()) && u(), S = !1;
    }
    try {
      n = new IntersectionObserver(P, {
        ...E,
        // Handle <iframe>s
        root: i.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(P, E);
    }
    n.observe(e);
  }
  return u(!0), o;
}
function Id(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: o = !0,
    elementResize: u = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: s = !1
  } = r, l = ao(e), c = i || o ? [...l ? Br(l) : [], ...Br(t)] : [];
  c.forEach((C) => {
    i && C.addEventListener("scroll", n, {
      passive: !0
    }), o && C.addEventListener("resize", n);
  });
  const d = l && a ? yd(l, n) : null;
  let p = -1, f = null;
  u && (f = new ResizeObserver((C) => {
    let [A] = C;
    A && A.target === l && f && (f.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var E;
      (E = f) == null || E.observe(t);
    })), n();
  }), l && !s && f.observe(l), f.observe(t));
  let y, m = s ? tu(e) : null;
  s && I();
  function I() {
    const C = tu(e);
    m && !Za(m, C) && n(), m = C, y = requestAnimationFrame(I);
  }
  return n(), () => {
    var C;
    c.forEach((A) => {
      i && A.removeEventListener("scroll", n), o && A.removeEventListener("resize", n);
    }), d == null || d(), (C = f) == null || C.disconnect(), f = null, s && cancelAnimationFrame(y);
  };
}
var zi = ql, Cd = ["className", "clearValue", "cx", "getStyles", "getClassNames", "getValue", "hasValue", "isMulti", "isRtl", "options", "selectOption", "selectProps", "setValue", "theme"], Or = function() {
};
function vd(e, t) {
  return t ? t[0] === "-" ? e + t : e + "__" + t : e;
}
function xd(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
    r[i - 2] = arguments[i];
  var o = [].concat(r);
  if (t && e)
    for (var u in t)
      t.hasOwnProperty(u) && t[u] && o.push("".concat(vd(e, u)));
  return o.filter(function(a) {
    return a;
  }).map(function(a) {
    return String(a).trim();
  }).join(" ");
}
var Tr = function(t) {
  return kd(t) ? t.filter(Boolean) : rn(t) === "object" && t !== null ? [t] : [];
}, ja = function(t) {
  t.className, t.clearValue, t.cx, t.getStyles, t.getClassNames, t.getValue, t.hasValue, t.isMulti, t.isRtl, t.options, t.selectOption, t.selectProps, t.setValue, t.theme;
  var n = bt(t, Cd);
  return Z({}, n);
}, we = function(t, n, r) {
  var i = t.cx, o = t.getStyles, u = t.getClassNames, a = t.className;
  return {
    css: o(n, t),
    className: i(r ?? {}, u(n, t), a)
  };
};
function zr(e) {
  return [document.documentElement, document.body, window].indexOf(e) > -1;
}
function Ad(e) {
  return zr(e) ? window.innerHeight : e.clientHeight;
}
function Ja(e) {
  return zr(e) ? window.pageYOffset : e.scrollTop;
}
function Vr(e, t) {
  if (zr(e)) {
    window.scrollTo(0, t);
    return;
  }
  e.scrollTop = t;
}
function Sd(e) {
  var t = getComputedStyle(e), n = t.position === "absolute", r = /(auto|scroll)/;
  if (t.position === "fixed") return document.documentElement;
  for (var i = e; i = i.parentElement; )
    if (t = getComputedStyle(i), !(n && t.position === "static") && r.test(t.overflow + t.overflowY + t.overflowX))
      return i;
  return document.documentElement;
}
function wd(e, t, n, r) {
  return n * ((e = e / r - 1) * e * e + 1) + t;
}
function br(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 200, r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : Or, i = Ja(e), o = t - i, u = 10, a = 0;
  function s() {
    a += u;
    var l = wd(a, i, o, n);
    Vr(e, l), a < n ? window.requestAnimationFrame(s) : r(e);
  }
  s();
}
function nu(e, t) {
  var n = e.getBoundingClientRect(), r = t.getBoundingClientRect(), i = t.offsetHeight / 3;
  r.bottom + i > n.bottom ? Vr(e, Math.min(t.offsetTop + t.clientHeight - e.offsetHeight + i, e.scrollHeight)) : r.top - i < n.top && Vr(e, Math.max(t.offsetTop - i, 0));
}
function Ed(e) {
  var t = e.getBoundingClientRect();
  return {
    bottom: t.bottom,
    height: t.height,
    left: t.left,
    right: t.right,
    top: t.top,
    width: t.width
  };
}
function ru() {
  try {
    return document.createEvent("TouchEvent"), !0;
  } catch {
    return !1;
  }
}
function Fd() {
  try {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  } catch {
    return !1;
  }
}
var Ya = !1, Pd = {
  get passive() {
    return Ya = !0;
  }
}, yr = typeof window < "u" ? window : {};
yr.addEventListener && yr.removeEventListener && (yr.addEventListener("p", Or, Pd), yr.removeEventListener("p", Or, !1));
var Gd = Ya;
function Rd(e) {
  return e != null;
}
function kd(e) {
  return Array.isArray(e);
}
function Hn(e, t, n) {
  return e ? t : n;
}
var Bd = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
    r[i - 1] = arguments[i];
  var o = Object.entries(t).filter(function(u) {
    var a = St(u, 1), s = a[0];
    return !r.includes(s);
  });
  return o.reduce(function(u, a) {
    var s = St(a, 2), l = s[0], c = s[1];
    return u[l] = c, u;
  }, {});
}, Od = ["children", "innerProps"], Td = ["children", "innerProps"];
function Vd(e) {
  var t = e.maxHeight, n = e.menuEl, r = e.minHeight, i = e.placement, o = e.shouldScroll, u = e.isFixedPosition, a = e.controlHeight, s = Sd(n), l = {
    placement: "bottom",
    maxHeight: t
  };
  if (!n || !n.offsetParent) return l;
  var c = s.getBoundingClientRect(), d = c.height, p = n.getBoundingClientRect(), f = p.bottom, y = p.height, m = p.top, I = n.offsetParent.getBoundingClientRect(), C = I.top, A = u ? window.innerHeight : Ad(s), E = Ja(s), S = parseInt(getComputedStyle(n).marginBottom, 10), P = parseInt(getComputedStyle(n).marginTop, 10), w = C - P, k = A - m, R = w + E, T = d - E - m, H = f - A + E + S, N = E + m - P, O = 160;
  switch (i) {
    case "auto":
    case "bottom":
      if (k >= y)
        return {
          placement: "bottom",
          maxHeight: t
        };
      if (T >= y && !u)
        return o && br(s, H, O), {
          placement: "bottom",
          maxHeight: t
        };
      if (!u && T >= r || u && k >= r) {
        o && br(s, H, O);
        var K = u ? k - S : T - S;
        return {
          placement: "bottom",
          maxHeight: K
        };
      }
      if (i === "auto" || u) {
        var ie = t, M = u ? w : R;
        return M >= r && (ie = Math.min(M - S - a, t)), {
          placement: "top",
          maxHeight: ie
        };
      }
      if (i === "bottom")
        return o && Vr(s, H), {
          placement: "bottom",
          maxHeight: t
        };
      break;
    case "top":
      if (w >= y)
        return {
          placement: "top",
          maxHeight: t
        };
      if (R >= y && !u)
        return o && br(s, N, O), {
          placement: "top",
          maxHeight: t
        };
      if (!u && R >= r || u && w >= r) {
        var Y = t;
        return (!u && R >= r || u && w >= r) && (Y = u ? w - P : R - P), o && br(s, N, O), {
          placement: "top",
          maxHeight: Y
        };
      }
      return {
        placement: "bottom",
        maxHeight: t
      };
    default:
      throw new Error('Invalid placement provided "'.concat(i, '".'));
  }
  return l;
}
function Dd(e) {
  var t = {
    bottom: "top",
    top: "bottom"
  };
  return e ? t[e] : "bottom";
}
var _a = function(t) {
  return t === "auto" ? "bottom" : t;
}, Nd = function(t, n) {
  var r, i = t.placement, o = t.theme, u = o.borderRadius, a = o.spacing, s = o.colors;
  return Z((r = {
    label: "menu"
  }, zn(r, Dd(i), "100%"), zn(r, "position", "absolute"), zn(r, "width", "100%"), zn(r, "zIndex", 1), r), n ? {} : {
    backgroundColor: s.neutral0,
    borderRadius: u,
    boxShadow: "0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",
    marginBottom: a.menuGutter,
    marginTop: a.menuGutter
  });
}, Ua = /* @__PURE__ */ Kn(null), Md = function(t) {
  var n = t.children, r = t.minMenuHeight, i = t.maxMenuHeight, o = t.menuPlacement, u = t.menuPosition, a = t.menuShouldScrollIntoView, s = t.theme, l = Gn(Ua) || {}, c = l.setPortalPlacement, d = At(null), p = ve(i), f = St(p, 2), y = f[0], m = f[1], I = ve(null), C = St(I, 2), A = C[0], E = C[1], S = s.spacing.controlHeight;
  return zi(function() {
    var P = d.current;
    if (P) {
      var w = u === "fixed", k = a && !w, R = Vd({
        maxHeight: i,
        menuEl: P,
        minHeight: r,
        placement: o,
        shouldScroll: k,
        isFixedPosition: w,
        controlHeight: S
      });
      m(R.maxHeight), E(R.placement), c == null || c(R.placement);
    }
  }, [i, o, u, a, r, c, S]), n({
    ref: d,
    placerProps: Z(Z({}, t), {}, {
      placement: A || _a(o),
      maxHeight: y
    })
  });
}, Ld = function(t) {
  var n = t.children, r = t.innerRef, i = t.innerProps;
  return j("div", J({}, we(t, "menu", {
    menu: !0
  }), {
    ref: r
  }, i), n);
}, Xd = Ld, zd = function(t, n) {
  var r = t.maxHeight, i = t.theme.spacing.baseUnit;
  return Z({
    maxHeight: r,
    overflowY: "auto",
    position: "relative",
    // required for offset[Height, Top] > keyboard scroll
    WebkitOverflowScrolling: "touch"
  }, n ? {} : {
    paddingBottom: i,
    paddingTop: i
  });
}, Hd = function(t) {
  var n = t.children, r = t.innerProps, i = t.innerRef, o = t.isMulti;
  return j("div", J({}, we(t, "menuList", {
    "menu-list": !0,
    "menu-list--is-multi": o
  }), {
    ref: i
  }, r), n);
}, Qa = function(t, n) {
  var r = t.theme, i = r.spacing.baseUnit, o = r.colors;
  return Z({
    textAlign: "center"
  }, n ? {} : {
    color: o.neutral40,
    padding: "".concat(i * 2, "px ").concat(i * 3, "px")
  });
}, Wd = Qa, Zd = Qa, jd = function(t) {
  var n = t.children, r = n === void 0 ? "No options" : n, i = t.innerProps, o = bt(t, Od);
  return j("div", J({}, we(Z(Z({}, o), {}, {
    children: r,
    innerProps: i
  }), "noOptionsMessage", {
    "menu-notice": !0,
    "menu-notice--no-options": !0
  }), i), r);
}, Jd = function(t) {
  var n = t.children, r = n === void 0 ? "Loading..." : n, i = t.innerProps, o = bt(t, Td);
  return j("div", J({}, we(Z(Z({}, o), {}, {
    children: r,
    innerProps: i
  }), "loadingMessage", {
    "menu-notice": !0,
    "menu-notice--loading": !0
  }), i), r);
}, Yd = function(t) {
  var n = t.rect, r = t.offset, i = t.position;
  return {
    left: n.left,
    position: i,
    top: r,
    width: n.width,
    zIndex: 1
  };
}, _d = function(t) {
  var n = t.appendTo, r = t.children, i = t.controlElement, o = t.innerProps, u = t.menuPlacement, a = t.menuPosition, s = At(null), l = At(null), c = ve(_a(u)), d = St(c, 2), p = d[0], f = d[1], y = pt(function() {
    return {
      setPortalPlacement: f
    };
  }, []), m = ve(null), I = St(m, 2), C = I[0], A = I[1], E = Ve(function() {
    if (i) {
      var k = Ed(i), R = a === "fixed" ? 0 : window.pageYOffset, T = k[p] + R;
      (T !== (C == null ? void 0 : C.offset) || k.left !== (C == null ? void 0 : C.rect.left) || k.width !== (C == null ? void 0 : C.rect.width)) && A({
        offset: T,
        rect: k
      });
    }
  }, [i, a, p, C == null ? void 0 : C.offset, C == null ? void 0 : C.rect.left, C == null ? void 0 : C.rect.width]);
  zi(function() {
    E();
  }, [E]);
  var S = Ve(function() {
    typeof l.current == "function" && (l.current(), l.current = null), i && s.current && (l.current = Id(i, s.current, E, {
      elementResize: "ResizeObserver" in window
    }));
  }, [i, E]);
  zi(function() {
    S();
  }, [S]);
  var P = Ve(function(k) {
    s.current = k, S();
  }, [S]);
  if (!n && a !== "fixed" || !C) return null;
  var w = j("div", J({
    ref: P
  }, we(Z(Z({}, t), {}, {
    offset: C.offset,
    position: a,
    rect: C.rect
  }), "menuPortal", {
    "menu-portal": !0
  }), o), r);
  return j(Ua.Provider, {
    value: y
  }, n ? /* @__PURE__ */ ec(w, n) : w);
}, Ud = function(t) {
  var n = t.isDisabled, r = t.isRtl;
  return {
    label: "container",
    direction: r ? "rtl" : void 0,
    pointerEvents: n ? "none" : void 0,
    // cancel mouse events when disabled
    position: "relative"
  };
}, Qd = function(t) {
  var n = t.children, r = t.innerProps, i = t.isDisabled, o = t.isRtl;
  return j("div", J({}, we(t, "container", {
    "--is-disabled": i,
    "--is-rtl": o
  }), r), n);
}, qd = function(t, n) {
  var r = t.theme.spacing, i = t.isMulti, o = t.hasValue, u = t.selectProps.controlShouldRenderValue;
  return Z({
    alignItems: "center",
    display: i && o && u ? "flex" : "grid",
    flex: 1,
    flexWrap: "wrap",
    WebkitOverflowScrolling: "touch",
    position: "relative",
    overflow: "hidden"
  }, n ? {} : {
    padding: "".concat(r.baseUnit / 2, "px ").concat(r.baseUnit * 2, "px")
  });
}, $d = function(t) {
  var n = t.children, r = t.innerProps, i = t.isMulti, o = t.hasValue;
  return j("div", J({}, we(t, "valueContainer", {
    "value-container": !0,
    "value-container--is-multi": i,
    "value-container--has-value": o
  }), r), n);
}, Kd = function() {
  return {
    alignItems: "center",
    alignSelf: "stretch",
    display: "flex",
    flexShrink: 0
  };
}, ef = function(t) {
  var n = t.children, r = t.innerProps;
  return j("div", J({}, we(t, "indicatorsContainer", {
    indicators: !0
  }), r), n);
}, iu, tf = ["size"], nf = ["innerProps", "isRtl", "size"];
function rf() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var of = process.env.NODE_ENV === "production" ? {
  name: "8mmkcg",
  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"
} : {
  name: "tj5bde-Svg",
  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0;label:Svg;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCSSIsImZpbGUiOiJpbmRpY2F0b3JzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgSlNYLCBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3gsIGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuaW1wb3J0IHtcbiAgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWUsXG4gIENTU09iamVjdFdpdGhMYWJlbCxcbiAgR3JvdXBCYXNlLFxufSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBnZXRTdHlsZVByb3BzIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgSWNvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBTdmcgPSAoe1xuICBzaXplLFxuICAuLi5wcm9wc1xufTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzdmcnXSAmIHsgc2l6ZTogbnVtYmVyIH0pID0+IChcbiAgPHN2Z1xuICAgIGhlaWdodD17c2l6ZX1cbiAgICB3aWR0aD17c2l6ZX1cbiAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcbiAgICBjc3M9e3tcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBsaW5lSGVpZ2h0OiAxLFxuICAgICAgc3Ryb2tlOiAnY3VycmVudENvbG9yJyxcbiAgICAgIHN0cm9rZVdpZHRoOiAwLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IHR5cGUgQ3Jvc3NJY29uUHJvcHMgPSBKU1guSW50cmluc2ljRWxlbWVudHNbJ3N2ZyddICYgeyBzaXplPzogbnVtYmVyIH07XG5leHBvcnQgY29uc3QgQ3Jvc3NJY29uID0gKHByb3BzOiBDcm9zc0ljb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNMTQuMzQ4IDE0Ljg0OWMtMC40NjkgMC40NjktMS4yMjkgMC40NjktMS42OTcgMGwtMi42NTEtMy4wMzAtMi42NTEgMy4wMjljLTAuNDY5IDAuNDY5LTEuMjI5IDAuNDY5LTEuNjk3IDAtMC40NjktMC40NjktMC40NjktMS4yMjkgMC0xLjY5N2wyLjc1OC0zLjE1LTIuNzU5LTMuMTUyYy0wLjQ2OS0wLjQ2OS0wLjQ2OS0xLjIyOCAwLTEuNjk3czEuMjI4LTAuNDY5IDEuNjk3IDBsMi42NTIgMy4wMzEgMi42NTEtMy4wMzFjMC40NjktMC40NjkgMS4yMjgtMC40NjkgMS42OTcgMHMwLjQ2OSAxLjIyOSAwIDEuNjk3bC0yLjc1OCAzLjE1MiAyLjc1OCAzLjE1YzAuNDY5IDAuNDY5IDAuNDY5IDEuMjI5IDAgMS42OTh6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuZXhwb3J0IHR5cGUgRG93bkNoZXZyb25Qcm9wcyA9IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snc3ZnJ10gJiB7IHNpemU/OiBudW1iZXIgfTtcbmV4cG9ydCBjb25zdCBEb3duQ2hldnJvbiA9IChwcm9wczogRG93bkNoZXZyb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNNC41MTYgNy41NDhjMC40MzYtMC40NDYgMS4wNDMtMC40ODEgMS41NzYgMGwzLjkwOCAzLjc0NyAzLjkwOC0zLjc0N2MwLjUzMy0wLjQ4MSAxLjE0MS0wLjQ0NiAxLjU3NCAwIDAuNDM2IDAuNDQ1IDAuNDA4IDEuMTk3IDAgMS42MTUtMC40MDYgMC40MTgtNC42OTUgNC41MDItNC42OTUgNC41MDItMC4yMTcgMC4yMjMtMC41MDIgMC4zMzUtMC43ODcgMC4zMzVzLTAuNTctMC4xMTItMC43ODktMC4zMzVjMCAwLTQuMjg3LTQuMDg0LTQuNjk1LTQuNTAycy0wLjQzNi0xLjE3IDAtMS42MTV6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgQnV0dG9uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxcbiAgT3B0aW9uID0gdW5rbm93bixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4gPSBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+ID0gR3JvdXBCYXNlPE9wdGlvbj5cbj4gZXh0ZW5kcyBDb21tb25Qcm9wc0FuZENsYXNzTmFtZTxPcHRpb24sIElzTXVsdGksIEdyb3VwPiB7XG4gIC8qKiBUaGUgY2hpbGRyZW4gdG8gYmUgcmVuZGVyZWQgaW5zaWRlIHRoZSBpbmRpY2F0b3IuICovXG4gIGNoaWxkcmVuPzogUmVhY3ROb2RlO1xuICAvKiogUHJvcHMgdGhhdCB3aWxsIGJlIHBhc3NlZCBvbiB0byB0aGUgY2hpbGRyZW4uICovXG4gIGlubmVyUHJvcHM6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snZGl2J107XG4gIC8qKiBUaGUgZm9jdXNlZCBzdGF0ZSBvZiB0aGUgc2VsZWN0LiAqL1xuICBpc0ZvY3VzZWQ6IGJvb2xlYW47XG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG59XG5cbmNvbnN0IGJhc2VDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0ZvY3VzZWQsXG4gICAgdGhlbWU6IHtcbiAgICAgIHNwYWNpbmc6IHsgYmFzZVVuaXQgfSxcbiAgICAgIGNvbG9ycyxcbiAgICB9LFxuICB9OlxuICAgIHwgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuICAgIHwgQ2xlYXJJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPixcbiAgdW5zdHlsZWQ6IGJvb2xlYW5cbik6IENTU09iamVjdFdpdGhMYWJlbCA9PiAoe1xuICBsYWJlbDogJ2luZGljYXRvckNvbnRhaW5lcicsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgdHJhbnNpdGlvbjogJ2NvbG9yIDE1MG1zJyxcbiAgLi4uKHVuc3R5bGVkXG4gICAgPyB7fVxuICAgIDoge1xuICAgICAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw2MCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgICAgIHBhZGRpbmc6IGJhc2VVbml0ICogMixcbiAgICAgICAgJzpob3Zlcic6IHtcbiAgICAgICAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw4MCA6IGNvbG9ycy5uZXV0cmFsNDAsXG4gICAgICAgIH0sXG4gICAgICB9KSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZHJvcGRvd25JbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IERyb3Bkb3duSW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogRHJvcGRvd25JbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnZHJvcGRvd25JbmRpY2F0b3InLCB7XG4gICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgJ2Ryb3Bkb3duLWluZGljYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8RG93bkNoZXZyb24gLz59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIENsZWFySW5kaWNhdG9yUHJvcHM8XG4gIE9wdGlvbiA9IHVua25vd24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuID0gYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPiA9IEdyb3VwQmFzZTxPcHRpb24+XG4+IGV4dGVuZHMgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWU8T3B0aW9uLCBJc011bHRpLCBHcm91cD4ge1xuICAvKiogVGhlIGNoaWxkcmVuIHRvIGJlIHJlbmRlcmVkIGluc2lkZSB0aGUgaW5kaWNhdG9yLiAqL1xuICBjaGlsZHJlbj86IFJlYWN0Tm9kZTtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgY2xlYXJJbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IENsZWFySW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogQ2xlYXJJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnY2xlYXJJbmRpY2F0b3InLCB7XG4gICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgJ2NsZWFyLWluZGljYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8Q3Jvc3NJY29uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTZXBhcmF0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgaW50ZXJmYWNlIEluZGljYXRvclNlcGFyYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpbm5lclByb3BzPzogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzcGFuJ107XG59XG5cbmV4cG9ydCBjb25zdCBpbmRpY2F0b3JTZXBhcmF0b3JDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0Rpc2FibGVkLFxuICAgIHRoZW1lOiB7XG4gICAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gICAgICBjb2xvcnMsXG4gICAgfSxcbiAgfTogSW5kaWNhdG9yU2VwYXJhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4sXG4gIHVuc3R5bGVkOiBib29sZWFuXG4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdpbmRpY2F0b3JTZXBhcmF0b3InLFxuICBhbGlnblNlbGY6ICdzdHJldGNoJyxcbiAgd2lkdGg6IDEsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBpc0Rpc2FibGVkID8gY29sb3JzLm5ldXRyYWwxMCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogYmFzZVVuaXQgKiAyLFxuICAgICAgICBtYXJnaW5Ub3A6IGJhc2VVbml0ICogMixcbiAgICAgIH0pLFxufSk7XG5cbmV4cG9ydCBjb25zdCBJbmRpY2F0b3JTZXBhcmF0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHByb3BzOiBJbmRpY2F0b3JTZXBhcmF0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgaW5uZXJQcm9wcyB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPHNwYW5cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgey4uLmdldFN0eWxlUHJvcHMocHJvcHMsICdpbmRpY2F0b3JTZXBhcmF0b3InLCB7XG4gICAgICAgICdpbmRpY2F0b3Itc2VwYXJhdG9yJzogdHJ1ZSxcbiAgICAgIH0pfVxuICAgIC8+XG4gICk7XG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIExvYWRpbmdcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBsb2FkaW5nRG90QW5pbWF0aW9ucyA9IGtleWZyYW1lc2BcbiAgMCUsIDgwJSwgMTAwJSB7IG9wYWNpdHk6IDA7IH1cbiAgNDAlIHsgb3BhY2l0eTogMTsgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGxvYWRpbmdJbmRpY2F0b3JDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0ZvY3VzZWQsXG4gICAgc2l6ZSxcbiAgICB0aGVtZToge1xuICAgICAgY29sb3JzLFxuICAgICAgc3BhY2luZzogeyBiYXNlVW5pdCB9LFxuICAgIH0sXG4gIH06IExvYWRpbmdJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPixcbiAgdW5zdHlsZWQ6IGJvb2xlYW5cbik6IENTU09iamVjdFdpdGhMYWJlbCA9PiAoe1xuICBsYWJlbDogJ2xvYWRpbmdJbmRpY2F0b3InLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHRyYW5zaXRpb246ICdjb2xvciAxNTBtcycsXG4gIGFsaWduU2VsZjogJ2NlbnRlcicsXG4gIGZvbnRTaXplOiBzaXplLFxuICBsaW5lSGVpZ2h0OiAxLFxuICBtYXJnaW5SaWdodDogc2l6ZSxcbiAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgICAgICBwYWRkaW5nOiBiYXNlVW5pdCAqIDIsXG4gICAgICB9KSxcbn0pO1xuXG5pbnRlcmZhY2UgTG9hZGluZ0RvdFByb3BzIHtcbiAgZGVsYXk6IG51bWJlcjtcbiAgb2Zmc2V0OiBib29sZWFuO1xufVxuY29uc3QgTG9hZGluZ0RvdCA9ICh7IGRlbGF5LCBvZmZzZXQgfTogTG9hZGluZ0RvdFByb3BzKSA9PiAoXG4gIDxzcGFuXG4gICAgY3NzPXt7XG4gICAgICBhbmltYXRpb246IGAke2xvYWRpbmdEb3RBbmltYXRpb25zfSAxcyBlYXNlLWluLW91dCAke2RlbGF5fW1zIGluZmluaXRlO2AsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdjdXJyZW50Q29sb3InLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnMWVtJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgbWFyZ2luTGVmdDogb2Zmc2V0ID8gJzFlbScgOiB1bmRlZmluZWQsXG4gICAgICBoZWlnaHQ6ICcxZW0nLFxuICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICB3aWR0aDogJzFlbScsXG4gICAgfX1cbiAgLz5cbik7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGluZ0luZGljYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpc0Rpc2FibGVkOiBib29sZWFuO1xuICAvKiogU2V0IHNpemUgb2YgdGhlIGNvbnRhaW5lci4gKi9cbiAgc2l6ZTogbnVtYmVyO1xufVxuZXhwb3J0IGNvbnN0IExvYWRpbmdJbmRpY2F0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oe1xuICBpbm5lclByb3BzLFxuICBpc1J0bCxcbiAgc2l6ZSA9IDQsXG4gIC4uLnJlc3RQcm9wc1xufTogTG9hZGluZ0luZGljYXRvclByb3BzPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgey4uLmdldFN0eWxlUHJvcHMoXG4gICAgICAgIHsgLi4ucmVzdFByb3BzLCBpbm5lclByb3BzLCBpc1J0bCwgc2l6ZSB9LFxuICAgICAgICAnbG9hZGluZ0luZGljYXRvcicsXG4gICAgICAgIHtcbiAgICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICAgJ2xvYWRpbmctaW5kaWNhdG9yJzogdHJ1ZSxcbiAgICAgICAgfVxuICAgICAgKX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXswfSBvZmZzZXQ9e2lzUnRsfSAvPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezE2MH0gb2Zmc2V0IC8+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MzIwfSBvZmZzZXQ9eyFpc1J0bH0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXX0= */",
  toString: rf
}, qa = function(t) {
  var n = t.size, r = bt(t, tf);
  return j("svg", J({
    height: n,
    width: n,
    viewBox: "0 0 20 20",
    "aria-hidden": "true",
    focusable: "false",
    css: of
  }, r));
}, so = function(t) {
  return j(qa, J({
    size: 20
  }, t), j("path", {
    d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
  }));
}, $a = function(t) {
  return j(qa, J({
    size: 20
  }, t), j("path", {
    d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
  }));
}, Ka = function(t, n) {
  var r = t.isFocused, i = t.theme, o = i.spacing.baseUnit, u = i.colors;
  return Z({
    label: "indicatorContainer",
    display: "flex",
    transition: "color 150ms"
  }, n ? {} : {
    color: r ? u.neutral60 : u.neutral20,
    padding: o * 2,
    ":hover": {
      color: r ? u.neutral80 : u.neutral40
    }
  });
}, uf = Ka, af = function(t) {
  var n = t.children, r = t.innerProps;
  return j("div", J({}, we(t, "dropdownIndicator", {
    indicator: !0,
    "dropdown-indicator": !0
  }), r), n || j($a, null));
}, sf = Ka, lf = function(t) {
  var n = t.children, r = t.innerProps;
  return j("div", J({}, we(t, "clearIndicator", {
    indicator: !0,
    "clear-indicator": !0
  }), r), n || j(so, null));
}, cf = function(t, n) {
  var r = t.isDisabled, i = t.theme, o = i.spacing.baseUnit, u = i.colors;
  return Z({
    label: "indicatorSeparator",
    alignSelf: "stretch",
    width: 1
  }, n ? {} : {
    backgroundColor: r ? u.neutral10 : u.neutral20,
    marginBottom: o * 2,
    marginTop: o * 2
  });
}, df = function(t) {
  var n = t.innerProps;
  return j("span", J({}, n, we(t, "indicatorSeparator", {
    "indicator-separator": !0
  })));
}, ff = Kl(iu || (iu = ud([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))), pf = function(t, n) {
  var r = t.isFocused, i = t.size, o = t.theme, u = o.colors, a = o.spacing.baseUnit;
  return Z({
    label: "loadingIndicator",
    display: "flex",
    transition: "color 150ms",
    alignSelf: "center",
    fontSize: i,
    lineHeight: 1,
    marginRight: i,
    textAlign: "center",
    verticalAlign: "middle"
  }, n ? {} : {
    color: r ? u.neutral60 : u.neutral20,
    padding: a * 2
  });
}, ui = function(t) {
  var n = t.delay, r = t.offset;
  return j("span", {
    css: /* @__PURE__ */ Ca({
      animation: "".concat(ff, " 1s ease-in-out ").concat(n, "ms infinite;"),
      backgroundColor: "currentColor",
      borderRadius: "1em",
      display: "inline-block",
      marginLeft: r ? "1em" : void 0,
      height: "1em",
      verticalAlign: "top",
      width: "1em"
    }, process.env.NODE_ENV === "production" ? "" : ";label:LoadingDot;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1RSSIsImZpbGUiOiJpbmRpY2F0b3JzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgSlNYLCBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3gsIGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuaW1wb3J0IHtcbiAgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWUsXG4gIENTU09iamVjdFdpdGhMYWJlbCxcbiAgR3JvdXBCYXNlLFxufSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBnZXRTdHlsZVByb3BzIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgSWNvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBTdmcgPSAoe1xuICBzaXplLFxuICAuLi5wcm9wc1xufTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzdmcnXSAmIHsgc2l6ZTogbnVtYmVyIH0pID0+IChcbiAgPHN2Z1xuICAgIGhlaWdodD17c2l6ZX1cbiAgICB3aWR0aD17c2l6ZX1cbiAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcbiAgICBjc3M9e3tcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBsaW5lSGVpZ2h0OiAxLFxuICAgICAgc3Ryb2tlOiAnY3VycmVudENvbG9yJyxcbiAgICAgIHN0cm9rZVdpZHRoOiAwLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IHR5cGUgQ3Jvc3NJY29uUHJvcHMgPSBKU1guSW50cmluc2ljRWxlbWVudHNbJ3N2ZyddICYgeyBzaXplPzogbnVtYmVyIH07XG5leHBvcnQgY29uc3QgQ3Jvc3NJY29uID0gKHByb3BzOiBDcm9zc0ljb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNMTQuMzQ4IDE0Ljg0OWMtMC40NjkgMC40NjktMS4yMjkgMC40NjktMS42OTcgMGwtMi42NTEtMy4wMzAtMi42NTEgMy4wMjljLTAuNDY5IDAuNDY5LTEuMjI5IDAuNDY5LTEuNjk3IDAtMC40NjktMC40NjktMC40NjktMS4yMjkgMC0xLjY5N2wyLjc1OC0zLjE1LTIuNzU5LTMuMTUyYy0wLjQ2OS0wLjQ2OS0wLjQ2OS0xLjIyOCAwLTEuNjk3czEuMjI4LTAuNDY5IDEuNjk3IDBsMi42NTIgMy4wMzEgMi42NTEtMy4wMzFjMC40NjktMC40NjkgMS4yMjgtMC40NjkgMS42OTcgMHMwLjQ2OSAxLjIyOSAwIDEuNjk3bC0yLjc1OCAzLjE1MiAyLjc1OCAzLjE1YzAuNDY5IDAuNDY5IDAuNDY5IDEuMjI5IDAgMS42OTh6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuZXhwb3J0IHR5cGUgRG93bkNoZXZyb25Qcm9wcyA9IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snc3ZnJ10gJiB7IHNpemU/OiBudW1iZXIgfTtcbmV4cG9ydCBjb25zdCBEb3duQ2hldnJvbiA9IChwcm9wczogRG93bkNoZXZyb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNNC41MTYgNy41NDhjMC40MzYtMC40NDYgMS4wNDMtMC40ODEgMS41NzYgMGwzLjkwOCAzLjc0NyAzLjkwOC0zLjc0N2MwLjUzMy0wLjQ4MSAxLjE0MS0wLjQ0NiAxLjU3NCAwIDAuNDM2IDAuNDQ1IDAuNDA4IDEuMTk3IDAgMS42MTUtMC40MDYgMC40MTgtNC42OTUgNC41MDItNC42OTUgNC41MDItMC4yMTcgMC4yMjMtMC41MDIgMC4zMzUtMC43ODcgMC4zMzVzLTAuNTctMC4xMTItMC43ODktMC4zMzVjMCAwLTQuMjg3LTQuMDg0LTQuNjk1LTQuNTAycy0wLjQzNi0xLjE3IDAtMS42MTV6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgQnV0dG9uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxcbiAgT3B0aW9uID0gdW5rbm93bixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4gPSBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+ID0gR3JvdXBCYXNlPE9wdGlvbj5cbj4gZXh0ZW5kcyBDb21tb25Qcm9wc0FuZENsYXNzTmFtZTxPcHRpb24sIElzTXVsdGksIEdyb3VwPiB7XG4gIC8qKiBUaGUgY2hpbGRyZW4gdG8gYmUgcmVuZGVyZWQgaW5zaWRlIHRoZSBpbmRpY2F0b3IuICovXG4gIGNoaWxkcmVuPzogUmVhY3ROb2RlO1xuICAvKiogUHJvcHMgdGhhdCB3aWxsIGJlIHBhc3NlZCBvbiB0byB0aGUgY2hpbGRyZW4uICovXG4gIGlubmVyUHJvcHM6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snZGl2J107XG4gIC8qKiBUaGUgZm9jdXNlZCBzdGF0ZSBvZiB0aGUgc2VsZWN0LiAqL1xuICBpc0ZvY3VzZWQ6IGJvb2xlYW47XG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG59XG5cbmNvbnN0IGJhc2VDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0ZvY3VzZWQsXG4gICAgdGhlbWU6IHtcbiAgICAgIHNwYWNpbmc6IHsgYmFzZVVuaXQgfSxcbiAgICAgIGNvbG9ycyxcbiAgICB9LFxuICB9OlxuICAgIHwgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuICAgIHwgQ2xlYXJJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPixcbiAgdW5zdHlsZWQ6IGJvb2xlYW5cbik6IENTU09iamVjdFdpdGhMYWJlbCA9PiAoe1xuICBsYWJlbDogJ2luZGljYXRvckNvbnRhaW5lcicsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgdHJhbnNpdGlvbjogJ2NvbG9yIDE1MG1zJyxcbiAgLi4uKHVuc3R5bGVkXG4gICAgPyB7fVxuICAgIDoge1xuICAgICAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw2MCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgICAgIHBhZGRpbmc6IGJhc2VVbml0ICogMixcbiAgICAgICAgJzpob3Zlcic6IHtcbiAgICAgICAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw4MCA6IGNvbG9ycy5uZXV0cmFsNDAsXG4gICAgICAgIH0sXG4gICAgICB9KSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZHJvcGRvd25JbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IERyb3Bkb3duSW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogRHJvcGRvd25JbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnZHJvcGRvd25JbmRpY2F0b3InLCB7XG4gICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgJ2Ryb3Bkb3duLWluZGljYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8RG93bkNoZXZyb24gLz59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIENsZWFySW5kaWNhdG9yUHJvcHM8XG4gIE9wdGlvbiA9IHVua25vd24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuID0gYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPiA9IEdyb3VwQmFzZTxPcHRpb24+XG4+IGV4dGVuZHMgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWU8T3B0aW9uLCBJc011bHRpLCBHcm91cD4ge1xuICAvKiogVGhlIGNoaWxkcmVuIHRvIGJlIHJlbmRlcmVkIGluc2lkZSB0aGUgaW5kaWNhdG9yLiAqL1xuICBjaGlsZHJlbj86IFJlYWN0Tm9kZTtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgY2xlYXJJbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IENsZWFySW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogQ2xlYXJJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnY2xlYXJJbmRpY2F0b3InLCB7XG4gICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgJ2NsZWFyLWluZGljYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8Q3Jvc3NJY29uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTZXBhcmF0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgaW50ZXJmYWNlIEluZGljYXRvclNlcGFyYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpbm5lclByb3BzPzogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzcGFuJ107XG59XG5cbmV4cG9ydCBjb25zdCBpbmRpY2F0b3JTZXBhcmF0b3JDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0Rpc2FibGVkLFxuICAgIHRoZW1lOiB7XG4gICAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gICAgICBjb2xvcnMsXG4gICAgfSxcbiAgfTogSW5kaWNhdG9yU2VwYXJhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4sXG4gIHVuc3R5bGVkOiBib29sZWFuXG4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdpbmRpY2F0b3JTZXBhcmF0b3InLFxuICBhbGlnblNlbGY6ICdzdHJldGNoJyxcbiAgd2lkdGg6IDEsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBpc0Rpc2FibGVkID8gY29sb3JzLm5ldXRyYWwxMCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogYmFzZVVuaXQgKiAyLFxuICAgICAgICBtYXJnaW5Ub3A6IGJhc2VVbml0ICogMixcbiAgICAgIH0pLFxufSk7XG5cbmV4cG9ydCBjb25zdCBJbmRpY2F0b3JTZXBhcmF0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHByb3BzOiBJbmRpY2F0b3JTZXBhcmF0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgaW5uZXJQcm9wcyB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPHNwYW5cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgey4uLmdldFN0eWxlUHJvcHMocHJvcHMsICdpbmRpY2F0b3JTZXBhcmF0b3InLCB7XG4gICAgICAgICdpbmRpY2F0b3Itc2VwYXJhdG9yJzogdHJ1ZSxcbiAgICAgIH0pfVxuICAgIC8+XG4gICk7XG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIExvYWRpbmdcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBsb2FkaW5nRG90QW5pbWF0aW9ucyA9IGtleWZyYW1lc2BcbiAgMCUsIDgwJSwgMTAwJSB7IG9wYWNpdHk6IDA7IH1cbiAgNDAlIHsgb3BhY2l0eTogMTsgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGxvYWRpbmdJbmRpY2F0b3JDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0ZvY3VzZWQsXG4gICAgc2l6ZSxcbiAgICB0aGVtZToge1xuICAgICAgY29sb3JzLFxuICAgICAgc3BhY2luZzogeyBiYXNlVW5pdCB9LFxuICAgIH0sXG4gIH06IExvYWRpbmdJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPixcbiAgdW5zdHlsZWQ6IGJvb2xlYW5cbik6IENTU09iamVjdFdpdGhMYWJlbCA9PiAoe1xuICBsYWJlbDogJ2xvYWRpbmdJbmRpY2F0b3InLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHRyYW5zaXRpb246ICdjb2xvciAxNTBtcycsXG4gIGFsaWduU2VsZjogJ2NlbnRlcicsXG4gIGZvbnRTaXplOiBzaXplLFxuICBsaW5lSGVpZ2h0OiAxLFxuICBtYXJnaW5SaWdodDogc2l6ZSxcbiAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgICAgICBwYWRkaW5nOiBiYXNlVW5pdCAqIDIsXG4gICAgICB9KSxcbn0pO1xuXG5pbnRlcmZhY2UgTG9hZGluZ0RvdFByb3BzIHtcbiAgZGVsYXk6IG51bWJlcjtcbiAgb2Zmc2V0OiBib29sZWFuO1xufVxuY29uc3QgTG9hZGluZ0RvdCA9ICh7IGRlbGF5LCBvZmZzZXQgfTogTG9hZGluZ0RvdFByb3BzKSA9PiAoXG4gIDxzcGFuXG4gICAgY3NzPXt7XG4gICAgICBhbmltYXRpb246IGAke2xvYWRpbmdEb3RBbmltYXRpb25zfSAxcyBlYXNlLWluLW91dCAke2RlbGF5fW1zIGluZmluaXRlO2AsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdjdXJyZW50Q29sb3InLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnMWVtJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgbWFyZ2luTGVmdDogb2Zmc2V0ID8gJzFlbScgOiB1bmRlZmluZWQsXG4gICAgICBoZWlnaHQ6ICcxZW0nLFxuICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICB3aWR0aDogJzFlbScsXG4gICAgfX1cbiAgLz5cbik7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGluZ0luZGljYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpc0Rpc2FibGVkOiBib29sZWFuO1xuICAvKiogU2V0IHNpemUgb2YgdGhlIGNvbnRhaW5lci4gKi9cbiAgc2l6ZTogbnVtYmVyO1xufVxuZXhwb3J0IGNvbnN0IExvYWRpbmdJbmRpY2F0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oe1xuICBpbm5lclByb3BzLFxuICBpc1J0bCxcbiAgc2l6ZSA9IDQsXG4gIC4uLnJlc3RQcm9wc1xufTogTG9hZGluZ0luZGljYXRvclByb3BzPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgey4uLmdldFN0eWxlUHJvcHMoXG4gICAgICAgIHsgLi4ucmVzdFByb3BzLCBpbm5lclByb3BzLCBpc1J0bCwgc2l6ZSB9LFxuICAgICAgICAnbG9hZGluZ0luZGljYXRvcicsXG4gICAgICAgIHtcbiAgICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICAgJ2xvYWRpbmctaW5kaWNhdG9yJzogdHJ1ZSxcbiAgICAgICAgfVxuICAgICAgKX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXswfSBvZmZzZXQ9e2lzUnRsfSAvPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezE2MH0gb2Zmc2V0IC8+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MzIwfSBvZmZzZXQ9eyFpc1J0bH0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXX0= */")
  });
}, hf = function(t) {
  var n = t.innerProps, r = t.isRtl, i = t.size, o = i === void 0 ? 4 : i, u = bt(t, nf);
  return j("div", J({}, we(Z(Z({}, u), {}, {
    innerProps: n,
    isRtl: r,
    size: o
  }), "loadingIndicator", {
    indicator: !0,
    "loading-indicator": !0
  }), n), j(ui, {
    delay: 0,
    offset: r
  }), j(ui, {
    delay: 160,
    offset: !0
  }), j(ui, {
    delay: 320,
    offset: !r
  }));
}, gf = function(t, n) {
  var r = t.isDisabled, i = t.isFocused, o = t.theme, u = o.colors, a = o.borderRadius, s = o.spacing;
  return Z({
    label: "control",
    alignItems: "center",
    cursor: "default",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    minHeight: s.controlHeight,
    outline: "0 !important",
    position: "relative",
    transition: "all 100ms"
  }, n ? {} : {
    backgroundColor: r ? u.neutral5 : u.neutral0,
    borderColor: r ? u.neutral10 : i ? u.primary : u.neutral20,
    borderRadius: a,
    borderStyle: "solid",
    borderWidth: 1,
    boxShadow: i ? "0 0 0 1px ".concat(u.primary) : void 0,
    "&:hover": {
      borderColor: i ? u.primary : u.neutral30
    }
  });
}, mf = function(t) {
  var n = t.children, r = t.isDisabled, i = t.isFocused, o = t.innerRef, u = t.innerProps, a = t.menuIsOpen;
  return j("div", J({
    ref: o
  }, we(t, "control", {
    control: !0,
    "control--is-disabled": r,
    "control--is-focused": i,
    "control--menu-is-open": a
  }), u, {
    "aria-disabled": r || void 0
  }), n);
}, bf = mf, yf = ["data"], If = function(t, n) {
  var r = t.theme.spacing;
  return n ? {} : {
    paddingBottom: r.baseUnit * 2,
    paddingTop: r.baseUnit * 2
  };
}, Cf = function(t) {
  var n = t.children, r = t.cx, i = t.getStyles, o = t.getClassNames, u = t.Heading, a = t.headingProps, s = t.innerProps, l = t.label, c = t.theme, d = t.selectProps;
  return j("div", J({}, we(t, "group", {
    group: !0
  }), s), j(u, J({}, a, {
    selectProps: d,
    theme: c,
    getStyles: i,
    getClassNames: o,
    cx: r
  }), l), j("div", null, n));
}, vf = function(t, n) {
  var r = t.theme, i = r.colors, o = r.spacing;
  return Z({
    label: "group",
    cursor: "default",
    display: "block"
  }, n ? {} : {
    color: i.neutral40,
    fontSize: "75%",
    fontWeight: 500,
    marginBottom: "0.25em",
    paddingLeft: o.baseUnit * 3,
    paddingRight: o.baseUnit * 3,
    textTransform: "uppercase"
  });
}, xf = function(t) {
  var n = ja(t);
  n.data;
  var r = bt(n, yf);
  return j("div", J({}, we(t, "groupHeading", {
    "group-heading": !0
  }), r));
}, Af = Cf, Sf = ["innerRef", "isDisabled", "isHidden", "inputClassName"], wf = function(t, n) {
  var r = t.isDisabled, i = t.value, o = t.theme, u = o.spacing, a = o.colors;
  return Z(Z({
    visibility: r ? "hidden" : "visible",
    // force css to recompute when value change due to @emotion bug.
    // We can remove it whenever the bug is fixed.
    transform: i ? "translateZ(0)" : ""
  }, Ef), n ? {} : {
    margin: u.baseUnit / 2,
    paddingBottom: u.baseUnit / 2,
    paddingTop: u.baseUnit / 2,
    color: a.neutral80
  });
}, es = {
  gridArea: "1 / 2",
  font: "inherit",
  minWidth: "2px",
  border: 0,
  margin: 0,
  outline: 0,
  padding: 0
}, Ef = {
  flex: "1 1 auto",
  display: "inline-grid",
  gridArea: "1 / 1 / 2 / 3",
  gridTemplateColumns: "0 min-content",
  "&:after": Z({
    content: 'attr(data-value) " "',
    visibility: "hidden",
    whiteSpace: "pre"
  }, es)
}, Ff = function(t) {
  return Z({
    label: "input",
    color: "inherit",
    background: 0,
    opacity: t ? 0 : 1,
    width: "100%"
  }, es);
}, Pf = function(t) {
  var n = t.cx, r = t.value, i = ja(t), o = i.innerRef, u = i.isDisabled, a = i.isHidden, s = i.inputClassName, l = bt(i, Sf);
  return j("div", J({}, we(t, "input", {
    "input-container": !0
  }), {
    "data-value": r || ""
  }), j("input", J({
    className: n({
      input: !0
    }, s),
    ref: o,
    style: Ff(a),
    disabled: u
  }, l)));
}, Gf = Pf, Rf = function(t, n) {
  var r = t.theme, i = r.spacing, o = r.borderRadius, u = r.colors;
  return Z({
    label: "multiValue",
    display: "flex",
    minWidth: 0
  }, n ? {} : {
    backgroundColor: u.neutral10,
    borderRadius: o / 2,
    margin: i.baseUnit / 2
  });
}, kf = function(t, n) {
  var r = t.theme, i = r.borderRadius, o = r.colors, u = t.cropWithEllipsis;
  return Z({
    overflow: "hidden",
    textOverflow: u || u === void 0 ? "ellipsis" : void 0,
    whiteSpace: "nowrap"
  }, n ? {} : {
    borderRadius: i / 2,
    color: o.neutral80,
    fontSize: "85%",
    padding: 3,
    paddingLeft: 6
  });
}, Bf = function(t, n) {
  var r = t.theme, i = r.spacing, o = r.borderRadius, u = r.colors, a = t.isFocused;
  return Z({
    alignItems: "center",
    display: "flex"
  }, n ? {} : {
    borderRadius: o / 2,
    backgroundColor: a ? u.dangerLight : void 0,
    paddingLeft: i.baseUnit,
    paddingRight: i.baseUnit,
    ":hover": {
      backgroundColor: u.dangerLight,
      color: u.danger
    }
  });
}, ts = function(t) {
  var n = t.children, r = t.innerProps;
  return j("div", r, n);
}, Of = ts, Tf = ts;
function Vf(e) {
  var t = e.children, n = e.innerProps;
  return j("div", J({
    role: "button"
  }, n), t || j(so, {
    size: 14
  }));
}
var Df = function(t) {
  var n = t.children, r = t.components, i = t.data, o = t.innerProps, u = t.isDisabled, a = t.removeProps, s = t.selectProps, l = r.Container, c = r.Label, d = r.Remove;
  return j(l, {
    data: i,
    innerProps: Z(Z({}, we(t, "multiValue", {
      "multi-value": !0,
      "multi-value--is-disabled": u
    })), o),
    selectProps: s
  }, j(c, {
    data: i,
    innerProps: Z({}, we(t, "multiValueLabel", {
      "multi-value__label": !0
    })),
    selectProps: s
  }, n), j(d, {
    data: i,
    innerProps: Z(Z({}, we(t, "multiValueRemove", {
      "multi-value__remove": !0
    })), {}, {
      "aria-label": "Remove ".concat(n || "option")
    }, a),
    selectProps: s
  }));
}, Nf = Df, Mf = function(t, n) {
  var r = t.isDisabled, i = t.isFocused, o = t.isSelected, u = t.theme, a = u.spacing, s = u.colors;
  return Z({
    label: "option",
    cursor: "default",
    display: "block",
    fontSize: "inherit",
    width: "100%",
    userSelect: "none",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
  }, n ? {} : {
    backgroundColor: o ? s.primary : i ? s.primary25 : "transparent",
    color: r ? s.neutral20 : o ? s.neutral0 : "inherit",
    padding: "".concat(a.baseUnit * 2, "px ").concat(a.baseUnit * 3, "px"),
    // provide some affordance on touch devices
    ":active": {
      backgroundColor: r ? void 0 : o ? s.primary : s.primary50
    }
  });
}, Lf = function(t) {
  var n = t.children, r = t.isDisabled, i = t.isFocused, o = t.isSelected, u = t.innerRef, a = t.innerProps;
  return j("div", J({}, we(t, "option", {
    option: !0,
    "option--is-disabled": r,
    "option--is-focused": i,
    "option--is-selected": o
  }), {
    ref: u,
    "aria-disabled": r
  }, a), n);
}, Xf = Lf, zf = function(t, n) {
  var r = t.theme, i = r.spacing, o = r.colors;
  return Z({
    label: "placeholder",
    gridArea: "1 / 1 / 2 / 3"
  }, n ? {} : {
    color: o.neutral50,
    marginLeft: i.baseUnit / 2,
    marginRight: i.baseUnit / 2
  });
}, Hf = function(t) {
  var n = t.children, r = t.innerProps;
  return j("div", J({}, we(t, "placeholder", {
    placeholder: !0
  }), r), n);
}, Wf = Hf, Zf = function(t, n) {
  var r = t.isDisabled, i = t.theme, o = i.spacing, u = i.colors;
  return Z({
    label: "singleValue",
    gridArea: "1 / 1 / 2 / 3",
    maxWidth: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  }, n ? {} : {
    color: r ? u.neutral40 : u.neutral80,
    marginLeft: o.baseUnit / 2,
    marginRight: o.baseUnit / 2
  });
}, jf = function(t) {
  var n = t.children, r = t.isDisabled, i = t.innerProps;
  return j("div", J({}, we(t, "singleValue", {
    "single-value": !0,
    "single-value--is-disabled": r
  }), i), n);
}, Jf = jf, tr = {
  ClearIndicator: lf,
  Control: bf,
  DropdownIndicator: af,
  DownChevron: $a,
  CrossIcon: so,
  Group: Af,
  GroupHeading: xf,
  IndicatorsContainer: ef,
  IndicatorSeparator: df,
  Input: Gf,
  LoadingIndicator: hf,
  Menu: Xd,
  MenuList: Hd,
  MenuPortal: _d,
  LoadingMessage: Jd,
  NoOptionsMessage: jd,
  MultiValue: Nf,
  MultiValueContainer: Of,
  MultiValueLabel: Tf,
  MultiValueRemove: Vf,
  Option: Xf,
  Placeholder: Wf,
  SelectContainer: Qd,
  SingleValue: Jf,
  ValueContainer: $d
}, Yf = function(t) {
  return Z(Z({}, tr), t.components);
}, ou = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function _f(e, t) {
  return !!(e === t || ou(e) && ou(t));
}
function Uf(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (!_f(e[n], t[n]))
      return !1;
  return !0;
}
function Qf(e, t) {
  t === void 0 && (t = Uf);
  var n = null;
  function r() {
    for (var i = [], o = 0; o < arguments.length; o++)
      i[o] = arguments[o];
    if (n && n.lastThis === this && t(i, n.lastArgs))
      return n.lastResult;
    var u = e.apply(this, i);
    return n = {
      lastResult: u,
      lastArgs: i,
      lastThis: this
    }, u;
  }
  return r.clear = function() {
    n = null;
  }, r;
}
function qf() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var $f = process.env.NODE_ENV === "production" ? {
  name: "7pg0cj-a11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"
} : {
  name: "1f43avz-a11yText-A11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap;label:A11yText;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkExMXlUZXh0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPSSIsImZpbGUiOiJBMTF5VGV4dC50c3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IEpTWCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGpzeCB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuLy8gQXNzaXN0aXZlIHRleHQgdG8gZGVzY3JpYmUgdmlzdWFsIGVsZW1lbnRzLiBIaWRkZW4gZm9yIHNpZ2h0ZWQgdXNlcnMuXG5jb25zdCBBMTF5VGV4dCA9IChwcm9wczogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzcGFuJ10pID0+IChcbiAgPHNwYW5cbiAgICBjc3M9e3tcbiAgICAgIGxhYmVsOiAnYTExeVRleHQnLFxuICAgICAgekluZGV4OiA5OTk5LFxuICAgICAgYm9yZGVyOiAwLFxuICAgICAgY2xpcDogJ3JlY3QoMXB4LCAxcHgsIDFweCwgMXB4KScsXG4gICAgICBoZWlnaHQ6IDEsXG4gICAgICB3aWR0aDogMSxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgcGFkZGluZzogMCxcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQTExeVRleHQ7XG4iXX0= */",
  toString: qf
}, Kf = function(t) {
  return j("span", J({
    css: $f
  }, t));
}, uu = Kf, ep = {
  guidance: function(t) {
    var n = t.isSearchable, r = t.isMulti, i = t.tabSelectsValue, o = t.context, u = t.isInitialFocus;
    switch (o) {
      case "menu":
        return "Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(i ? ", press Tab to select the option and exit the menu" : "", ".");
      case "input":
        return u ? "".concat(t["aria-label"] || "Select", " is focused ").concat(n ? ",type to refine list" : "", ", press Down to open the menu, ").concat(r ? " press left to focus selected values" : "") : "";
      case "value":
        return "Use left and right to toggle between focused values, press Backspace to remove the currently focused value";
      default:
        return "";
    }
  },
  onChange: function(t) {
    var n = t.action, r = t.label, i = r === void 0 ? "" : r, o = t.labels, u = t.isDisabled;
    switch (n) {
      case "deselect-option":
      case "pop-value":
      case "remove-value":
        return "option ".concat(i, ", deselected.");
      case "clear":
        return "All selected options have been cleared.";
      case "initial-input-focus":
        return "option".concat(o.length > 1 ? "s" : "", " ").concat(o.join(","), ", selected.");
      case "select-option":
        return u ? "option ".concat(i, " is disabled. Select another option.") : "option ".concat(i, ", selected.");
      default:
        return "";
    }
  },
  onFocus: function(t) {
    var n = t.context, r = t.focused, i = t.options, o = t.label, u = o === void 0 ? "" : o, a = t.selectValue, s = t.isDisabled, l = t.isSelected, c = t.isAppleDevice, d = function(m, I) {
      return m && m.length ? "".concat(m.indexOf(I) + 1, " of ").concat(m.length) : "";
    };
    if (n === "value" && a)
      return "value ".concat(u, " focused, ").concat(d(a, r), ".");
    if (n === "menu" && c) {
      var p = s ? " disabled" : "", f = "".concat(l ? " selected" : "").concat(p);
      return "".concat(u).concat(f, ", ").concat(d(i, r), ".");
    }
    return "";
  },
  onFilter: function(t) {
    var n = t.inputValue, r = t.resultsMessage;
    return "".concat(r).concat(n ? " for search term " + n : "", ".");
  }
}, tp = function(t) {
  var n = t.ariaSelection, r = t.focusedOption, i = t.focusedValue, o = t.focusableOptions, u = t.isFocused, a = t.selectValue, s = t.selectProps, l = t.id, c = t.isAppleDevice, d = s.ariaLiveMessages, p = s.getOptionLabel, f = s.inputValue, y = s.isMulti, m = s.isOptionDisabled, I = s.isSearchable, C = s.menuIsOpen, A = s.options, E = s.screenReaderStatus, S = s.tabSelectsValue, P = s.isLoading, w = s["aria-label"], k = s["aria-live"], R = pt(function() {
    return Z(Z({}, ep), d || {});
  }, [d]), T = pt(function() {
    var M = "";
    if (n && R.onChange) {
      var Y = n.option, _ = n.options, se = n.removedValue, me = n.removedValues, b = n.value, Ce = function(D) {
        return Array.isArray(D) ? null : D;
      }, ae = se || Y || Ce(b), g = ae ? p(ae) : "", pe = _ || me || void 0, ee = pe ? pe.map(p) : [], de = Z({
        // multiSelected items are usually items that have already been selected
        // or set by the user as a default value so we assume they are not disabled
        isDisabled: ae && m(ae, a),
        label: g,
        labels: ee
      }, n);
      M = R.onChange(de);
    }
    return M;
  }, [n, R, m, a, p]), H = pt(function() {
    var M = "", Y = r || i, _ = !!(r && a && a.includes(r));
    if (Y && R.onFocus) {
      var se = {
        focused: Y,
        label: p(Y),
        isDisabled: m(Y, a),
        isSelected: _,
        options: o,
        context: Y === r ? "menu" : "value",
        selectValue: a,
        isAppleDevice: c
      };
      M = R.onFocus(se);
    }
    return M;
  }, [r, i, p, m, R, o, a, c]), N = pt(function() {
    var M = "";
    if (C && A.length && !P && R.onFilter) {
      var Y = E({
        count: o.length
      });
      M = R.onFilter({
        inputValue: f,
        resultsMessage: Y
      });
    }
    return M;
  }, [o, f, C, R, A, E, P]), O = (n == null ? void 0 : n.action) === "initial-input-focus", K = pt(function() {
    var M = "";
    if (R.guidance) {
      var Y = i ? "value" : C ? "menu" : "input";
      M = R.guidance({
        "aria-label": w,
        context: Y,
        isDisabled: r && m(r, a),
        isMulti: y,
        isSearchable: I,
        tabSelectsValue: S,
        isInitialFocus: O
      });
    }
    return M;
  }, [w, r, i, y, m, I, C, R, a, S, O]), ie = j(Ai, null, j("span", {
    id: "aria-selection"
  }, T), j("span", {
    id: "aria-focused"
  }, H), j("span", {
    id: "aria-results"
  }, N), j("span", {
    id: "aria-guidance"
  }, K));
  return j(Ai, null, j(uu, {
    id: l
  }, O && ie), j(uu, {
    "aria-live": k,
    "aria-atomic": "false",
    "aria-relevant": "additions text",
    role: "log"
  }, u && !O && ie));
}, np = tp, Hi = [{
  base: "A",
  letters: "AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"
}, {
  base: "AA",
  letters: "Ꜳ"
}, {
  base: "AE",
  letters: "ÆǼǢ"
}, {
  base: "AO",
  letters: "Ꜵ"
}, {
  base: "AU",
  letters: "Ꜷ"
}, {
  base: "AV",
  letters: "ꜸꜺ"
}, {
  base: "AY",
  letters: "Ꜽ"
}, {
  base: "B",
  letters: "BⒷＢḂḄḆɃƂƁ"
}, {
  base: "C",
  letters: "CⒸＣĆĈĊČÇḈƇȻꜾ"
}, {
  base: "D",
  letters: "DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"
}, {
  base: "DZ",
  letters: "ǱǄ"
}, {
  base: "Dz",
  letters: "ǲǅ"
}, {
  base: "E",
  letters: "EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"
}, {
  base: "F",
  letters: "FⒻＦḞƑꝻ"
}, {
  base: "G",
  letters: "GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"
}, {
  base: "H",
  letters: "HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"
}, {
  base: "I",
  letters: "IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"
}, {
  base: "J",
  letters: "JⒿＪĴɈ"
}, {
  base: "K",
  letters: "KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"
}, {
  base: "L",
  letters: "LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"
}, {
  base: "LJ",
  letters: "Ǉ"
}, {
  base: "Lj",
  letters: "ǈ"
}, {
  base: "M",
  letters: "MⓂＭḾṀṂⱮƜ"
}, {
  base: "N",
  letters: "NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"
}, {
  base: "NJ",
  letters: "Ǌ"
}, {
  base: "Nj",
  letters: "ǋ"
}, {
  base: "O",
  letters: "OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"
}, {
  base: "OI",
  letters: "Ƣ"
}, {
  base: "OO",
  letters: "Ꝏ"
}, {
  base: "OU",
  letters: "Ȣ"
}, {
  base: "P",
  letters: "PⓅＰṔṖƤⱣꝐꝒꝔ"
}, {
  base: "Q",
  letters: "QⓆＱꝖꝘɊ"
}, {
  base: "R",
  letters: "RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"
}, {
  base: "S",
  letters: "SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"
}, {
  base: "T",
  letters: "TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"
}, {
  base: "TZ",
  letters: "Ꜩ"
}, {
  base: "U",
  letters: "UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"
}, {
  base: "V",
  letters: "VⓋＶṼṾƲꝞɅ"
}, {
  base: "VY",
  letters: "Ꝡ"
}, {
  base: "W",
  letters: "WⓌＷẀẂŴẆẄẈⱲ"
}, {
  base: "X",
  letters: "XⓍＸẊẌ"
}, {
  base: "Y",
  letters: "YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"
}, {
  base: "Z",
  letters: "ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"
}, {
  base: "a",
  letters: "aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"
}, {
  base: "aa",
  letters: "ꜳ"
}, {
  base: "ae",
  letters: "æǽǣ"
}, {
  base: "ao",
  letters: "ꜵ"
}, {
  base: "au",
  letters: "ꜷ"
}, {
  base: "av",
  letters: "ꜹꜻ"
}, {
  base: "ay",
  letters: "ꜽ"
}, {
  base: "b",
  letters: "bⓑｂḃḅḇƀƃɓ"
}, {
  base: "c",
  letters: "cⓒｃćĉċčçḉƈȼꜿↄ"
}, {
  base: "d",
  letters: "dⓓｄḋďḍḑḓḏđƌɖɗꝺ"
}, {
  base: "dz",
  letters: "ǳǆ"
}, {
  base: "e",
  letters: "eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"
}, {
  base: "f",
  letters: "fⓕｆḟƒꝼ"
}, {
  base: "g",
  letters: "gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"
}, {
  base: "h",
  letters: "hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"
}, {
  base: "hv",
  letters: "ƕ"
}, {
  base: "i",
  letters: "iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"
}, {
  base: "j",
  letters: "jⓙｊĵǰɉ"
}, {
  base: "k",
  letters: "kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"
}, {
  base: "l",
  letters: "lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"
}, {
  base: "lj",
  letters: "ǉ"
}, {
  base: "m",
  letters: "mⓜｍḿṁṃɱɯ"
}, {
  base: "n",
  letters: "nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"
}, {
  base: "nj",
  letters: "ǌ"
}, {
  base: "o",
  letters: "oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"
}, {
  base: "oi",
  letters: "ƣ"
}, {
  base: "ou",
  letters: "ȣ"
}, {
  base: "oo",
  letters: "ꝏ"
}, {
  base: "p",
  letters: "pⓟｐṕṗƥᵽꝑꝓꝕ"
}, {
  base: "q",
  letters: "qⓠｑɋꝗꝙ"
}, {
  base: "r",
  letters: "rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"
}, {
  base: "s",
  letters: "sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"
}, {
  base: "t",
  letters: "tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"
}, {
  base: "tz",
  letters: "ꜩ"
}, {
  base: "u",
  letters: "uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"
}, {
  base: "v",
  letters: "vⓥｖṽṿʋꝟʌ"
}, {
  base: "vy",
  letters: "ꝡ"
}, {
  base: "w",
  letters: "wⓦｗẁẃŵẇẅẘẉⱳ"
}, {
  base: "x",
  letters: "xⓧｘẋẍ"
}, {
  base: "y",
  letters: "yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"
}, {
  base: "z",
  letters: "zⓩｚźẑżžẓẕƶȥɀⱬꝣ"
}], rp = new RegExp("[" + Hi.map(function(e) {
  return e.letters;
}).join("") + "]", "g"), ns = {};
for (var ai = 0; ai < Hi.length; ai++)
  for (var si = Hi[ai], li = 0; li < si.letters.length; li++)
    ns[si.letters[li]] = si.base;
var rs = function(t) {
  return t.replace(rp, function(n) {
    return ns[n];
  });
}, ip = Qf(rs), au = function(t) {
  return t.replace(/^\s+|\s+$/g, "");
}, op = function(t) {
  return "".concat(t.label, " ").concat(t.value);
}, up = function(t) {
  return function(n, r) {
    if (n.data.__isNew__) return !0;
    var i = Z({
      ignoreCase: !0,
      ignoreAccents: !0,
      stringify: op,
      trim: !0,
      matchFrom: "any"
    }, t), o = i.ignoreCase, u = i.ignoreAccents, a = i.stringify, s = i.trim, l = i.matchFrom, c = s ? au(r) : r, d = s ? au(a(n)) : a(n);
    return o && (c = c.toLowerCase(), d = d.toLowerCase()), u && (c = ip(c), d = rs(d)), l === "start" ? d.substr(0, c.length) === c : d.indexOf(c) > -1;
  };
}, ap = ["innerRef"];
function sp(e) {
  var t = e.innerRef, n = bt(e, ap), r = Bd(n, "onExited", "in", "enter", "exit", "appear");
  return j("input", J({
    ref: t
  }, r, {
    css: /* @__PURE__ */ Ca({
      label: "dummyInput",
      // get rid of any default styles
      background: 0,
      border: 0,
      // important! this hides the flashing cursor
      caretColor: "transparent",
      fontSize: "inherit",
      gridArea: "1 / 1 / 2 / 3",
      outline: 0,
      padding: 0,
      // important! without `width` browsers won't allow focus
      width: 1,
      // remove cursor on desktop
      color: "transparent",
      // remove cursor on mobile whilst maintaining "scroll into view" behaviour
      left: -100,
      opacity: 0,
      position: "relative",
      transform: "scale(.01)"
    }, process.env.NODE_ENV === "production" ? "" : ";label:DummyInput;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkR1bW15SW5wdXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCTSIsImZpbGUiOiJEdW1teUlucHV0LnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgSlNYLCBSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3ggfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5pbXBvcnQgeyByZW1vdmVQcm9wcyB9IGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRHVtbXlJbnB1dCh7XG4gIGlubmVyUmVmLFxuICAuLi5wcm9wc1xufTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydpbnB1dCddICYge1xuICByZWFkb25seSBpbm5lclJlZjogUmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xufSkge1xuICAvLyBSZW1vdmUgYW5pbWF0aW9uIHByb3BzIG5vdCBtZWFudCBmb3IgSFRNTCBlbGVtZW50c1xuICBjb25zdCBmaWx0ZXJlZFByb3BzID0gcmVtb3ZlUHJvcHMoXG4gICAgcHJvcHMsXG4gICAgJ29uRXhpdGVkJyxcbiAgICAnaW4nLFxuICAgICdlbnRlcicsXG4gICAgJ2V4aXQnLFxuICAgICdhcHBlYXInXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8aW5wdXRcbiAgICAgIHJlZj17aW5uZXJSZWZ9XG4gICAgICB7Li4uZmlsdGVyZWRQcm9wc31cbiAgICAgIGNzcz17e1xuICAgICAgICBsYWJlbDogJ2R1bW15SW5wdXQnLFxuICAgICAgICAvLyBnZXQgcmlkIG9mIGFueSBkZWZhdWx0IHN0eWxlc1xuICAgICAgICBiYWNrZ3JvdW5kOiAwLFxuICAgICAgICBib3JkZXI6IDAsXG4gICAgICAgIC8vIGltcG9ydGFudCEgdGhpcyBoaWRlcyB0aGUgZmxhc2hpbmcgY3Vyc29yXG4gICAgICAgIGNhcmV0Q29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgIGZvbnRTaXplOiAnaW5oZXJpdCcsXG4gICAgICAgIGdyaWRBcmVhOiAnMSAvIDEgLyAyIC8gMycsXG4gICAgICAgIG91dGxpbmU6IDAsXG4gICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgIC8vIGltcG9ydGFudCEgd2l0aG91dCBgd2lkdGhgIGJyb3dzZXJzIHdvbid0IGFsbG93IGZvY3VzXG4gICAgICAgIHdpZHRoOiAxLFxuXG4gICAgICAgIC8vIHJlbW92ZSBjdXJzb3Igb24gZGVza3RvcFxuICAgICAgICBjb2xvcjogJ3RyYW5zcGFyZW50JyxcblxuICAgICAgICAvLyByZW1vdmUgY3Vyc29yIG9uIG1vYmlsZSB3aGlsc3QgbWFpbnRhaW5pbmcgXCJzY3JvbGwgaW50byB2aWV3XCIgYmVoYXZpb3VyXG4gICAgICAgIGxlZnQ6IC0xMDAsXG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSguMDEpJyxcbiAgICAgIH19XG4gICAgLz5cbiAgKTtcbn1cbiJdfQ== */")
  }));
}
var lp = function(t) {
  t.cancelable && t.preventDefault(), t.stopPropagation();
};
function cp(e) {
  var t = e.isEnabled, n = e.onBottomArrive, r = e.onBottomLeave, i = e.onTopArrive, o = e.onTopLeave, u = At(!1), a = At(!1), s = At(0), l = At(null), c = Ve(function(I, C) {
    if (l.current !== null) {
      var A = l.current, E = A.scrollTop, S = A.scrollHeight, P = A.clientHeight, w = l.current, k = C > 0, R = S - P - E, T = !1;
      R > C && u.current && (r && r(I), u.current = !1), k && a.current && (o && o(I), a.current = !1), k && C > R ? (n && !u.current && n(I), w.scrollTop = S, T = !0, u.current = !0) : !k && -C > E && (i && !a.current && i(I), w.scrollTop = 0, T = !0, a.current = !0), T && lp(I);
    }
  }, [n, r, i, o]), d = Ve(function(I) {
    c(I, I.deltaY);
  }, [c]), p = Ve(function(I) {
    s.current = I.changedTouches[0].clientY;
  }, []), f = Ve(function(I) {
    var C = s.current - I.changedTouches[0].clientY;
    c(I, C);
  }, [c]), y = Ve(function(I) {
    if (I) {
      var C = Gd ? {
        passive: !1
      } : !1;
      I.addEventListener("wheel", d, C), I.addEventListener("touchstart", p, C), I.addEventListener("touchmove", f, C);
    }
  }, [f, p, d]), m = Ve(function(I) {
    I && (I.removeEventListener("wheel", d, !1), I.removeEventListener("touchstart", p, !1), I.removeEventListener("touchmove", f, !1));
  }, [f, p, d]);
  return _t(function() {
    if (t) {
      var I = l.current;
      return y(I), function() {
        m(I);
      };
    }
  }, [t, y, m]), function(I) {
    l.current = I;
  };
}
var su = ["boxSizing", "height", "overflow", "paddingRight", "position"], lu = {
  boxSizing: "border-box",
  // account for possible declaration `width: 100%;` on body
  overflow: "hidden",
  position: "relative",
  height: "100%"
};
function cu(e) {
  e.cancelable && e.preventDefault();
}
function du(e) {
  e.stopPropagation();
}
function fu() {
  var e = this.scrollTop, t = this.scrollHeight, n = e + this.offsetHeight;
  e === 0 ? this.scrollTop = 1 : n === t && (this.scrollTop = e - 1);
}
function pu() {
  return "ontouchstart" in window || navigator.maxTouchPoints;
}
var hu = !!(typeof window < "u" && window.document && window.document.createElement), Nn = 0, ln = {
  capture: !1,
  passive: !1
};
function dp(e) {
  var t = e.isEnabled, n = e.accountForScrollbars, r = n === void 0 ? !0 : n, i = At({}), o = At(null), u = Ve(function(s) {
    if (hu) {
      var l = document.body, c = l && l.style;
      if (r && su.forEach(function(y) {
        var m = c && c[y];
        i.current[y] = m;
      }), r && Nn < 1) {
        var d = parseInt(i.current.paddingRight, 10) || 0, p = document.body ? document.body.clientWidth : 0, f = window.innerWidth - p + d || 0;
        Object.keys(lu).forEach(function(y) {
          var m = lu[y];
          c && (c[y] = m);
        }), c && (c.paddingRight = "".concat(f, "px"));
      }
      l && pu() && (l.addEventListener("touchmove", cu, ln), s && (s.addEventListener("touchstart", fu, ln), s.addEventListener("touchmove", du, ln))), Nn += 1;
    }
  }, [r]), a = Ve(function(s) {
    if (hu) {
      var l = document.body, c = l && l.style;
      Nn = Math.max(Nn - 1, 0), r && Nn < 1 && su.forEach(function(d) {
        var p = i.current[d];
        c && (c[d] = p);
      }), l && pu() && (l.removeEventListener("touchmove", cu, ln), s && (s.removeEventListener("touchstart", fu, ln), s.removeEventListener("touchmove", du, ln)));
    }
  }, [r]);
  return _t(function() {
    if (t) {
      var s = o.current;
      return u(s), function() {
        a(s);
      };
    }
  }, [t, u, a]), function(s) {
    o.current = s;
  };
}
function fp() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var pp = function(t) {
  var n = t.target;
  return n.ownerDocument.activeElement && n.ownerDocument.activeElement.blur();
}, hp = process.env.NODE_ENV === "production" ? {
  name: "1kfdb0e",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0"
} : {
  name: "bp8cua-ScrollManager",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0;label:ScrollManager;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNjcm9sbE1hbmFnZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9EVSIsImZpbGUiOiJTY3JvbGxNYW5hZ2VyLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4IH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IHsgRnJhZ21lbnQsIFJlYWN0RWxlbWVudCwgUmVmQ2FsbGJhY2ssIE1vdXNlRXZlbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlU2Nyb2xsQ2FwdHVyZSBmcm9tICcuL3VzZVNjcm9sbENhcHR1cmUnO1xuaW1wb3J0IHVzZVNjcm9sbExvY2sgZnJvbSAnLi91c2VTY3JvbGxMb2NrJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcmVhZG9ubHkgY2hpbGRyZW46IChyZWY6IFJlZkNhbGxiYWNrPEhUTUxFbGVtZW50PikgPT4gUmVhY3RFbGVtZW50O1xuICByZWFkb25seSBsb2NrRW5hYmxlZDogYm9vbGVhbjtcbiAgcmVhZG9ubHkgY2FwdHVyZUVuYWJsZWQ6IGJvb2xlYW47XG4gIHJlYWRvbmx5IG9uQm90dG9tQXJyaXZlPzogKGV2ZW50OiBXaGVlbEV2ZW50IHwgVG91Y2hFdmVudCkgPT4gdm9pZDtcbiAgcmVhZG9ubHkgb25Cb3R0b21MZWF2ZT86IChldmVudDogV2hlZWxFdmVudCB8IFRvdWNoRXZlbnQpID0+IHZvaWQ7XG4gIHJlYWRvbmx5IG9uVG9wQXJyaXZlPzogKGV2ZW50OiBXaGVlbEV2ZW50IHwgVG91Y2hFdmVudCkgPT4gdm9pZDtcbiAgcmVhZG9ubHkgb25Ub3BMZWF2ZT86IChldmVudDogV2hlZWxFdmVudCB8IFRvdWNoRXZlbnQpID0+IHZvaWQ7XG59XG5cbmNvbnN0IGJsdXJTZWxlY3RJbnB1dCA9IChldmVudDogTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRGl2RWxlbWVudDtcbiAgcmV0dXJuIChcbiAgICBlbGVtZW50Lm93bmVyRG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJlxuICAgIChlbGVtZW50Lm93bmVyRG9jdW1lbnQuYWN0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCkuYmx1cigpXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTY3JvbGxNYW5hZ2VyKHtcbiAgY2hpbGRyZW4sXG4gIGxvY2tFbmFibGVkLFxuICBjYXB0dXJlRW5hYmxlZCA9IHRydWUsXG4gIG9uQm90dG9tQXJyaXZlLFxuICBvbkJvdHRvbUxlYXZlLFxuICBvblRvcEFycml2ZSxcbiAgb25Ub3BMZWF2ZSxcbn06IFByb3BzKSB7XG4gIGNvbnN0IHNldFNjcm9sbENhcHR1cmVUYXJnZXQgPSB1c2VTY3JvbGxDYXB0dXJlKHtcbiAgICBpc0VuYWJsZWQ6IGNhcHR1cmVFbmFibGVkLFxuICAgIG9uQm90dG9tQXJyaXZlLFxuICAgIG9uQm90dG9tTGVhdmUsXG4gICAgb25Ub3BBcnJpdmUsXG4gICAgb25Ub3BMZWF2ZSxcbiAgfSk7XG4gIGNvbnN0IHNldFNjcm9sbExvY2tUYXJnZXQgPSB1c2VTY3JvbGxMb2NrKHsgaXNFbmFibGVkOiBsb2NrRW5hYmxlZCB9KTtcblxuICBjb25zdCB0YXJnZXRSZWY6IFJlZkNhbGxiYWNrPEhUTUxFbGVtZW50PiA9IChlbGVtZW50KSA9PiB7XG4gICAgc2V0U2Nyb2xsQ2FwdHVyZVRhcmdldChlbGVtZW50KTtcbiAgICBzZXRTY3JvbGxMb2NrVGFyZ2V0KGVsZW1lbnQpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAge2xvY2tFbmFibGVkICYmIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIG9uQ2xpY2s9e2JsdXJTZWxlY3RJbnB1dH1cbiAgICAgICAgICBjc3M9e3sgcG9zaXRpb246ICdmaXhlZCcsIGxlZnQ6IDAsIGJvdHRvbTogMCwgcmlnaHQ6IDAsIHRvcDogMCB9fVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIHtjaGlsZHJlbih0YXJnZXRSZWYpfVxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59XG4iXX0= */",
  toString: fp
};
function gp(e) {
  var t = e.children, n = e.lockEnabled, r = e.captureEnabled, i = r === void 0 ? !0 : r, o = e.onBottomArrive, u = e.onBottomLeave, a = e.onTopArrive, s = e.onTopLeave, l = cp({
    isEnabled: i,
    onBottomArrive: o,
    onBottomLeave: u,
    onTopArrive: a,
    onTopLeave: s
  }), c = dp({
    isEnabled: n
  }), d = function(f) {
    l(f), c(f);
  };
  return j(Ai, null, n && j("div", {
    onClick: pp,
    css: hp
  }), t(d));
}
function mp() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var bp = process.env.NODE_ENV === "production" ? {
  name: "1a0ro4n-requiredInput",
  styles: "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"
} : {
  name: "5kkxb2-requiredInput-RequiredInput",
  styles: "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%;label:RequiredInput;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJlcXVpcmVkSW5wdXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNJIiwiZmlsZSI6IlJlcXVpcmVkSW5wdXQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBGb2N1c0V2ZW50SGFuZGxlciwgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3ggfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5cbmNvbnN0IFJlcXVpcmVkSW5wdXQ6IEZ1bmN0aW9uQ29tcG9uZW50PHtcbiAgcmVhZG9ubHkgbmFtZT86IHN0cmluZztcbiAgcmVhZG9ubHkgb25Gb2N1czogRm9jdXNFdmVudEhhbmRsZXI8SFRNTElucHV0RWxlbWVudD47XG59PiA9ICh7IG5hbWUsIG9uRm9jdXMgfSkgPT4gKFxuICA8aW5wdXRcbiAgICByZXF1aXJlZFxuICAgIG5hbWU9e25hbWV9XG4gICAgdGFiSW5kZXg9ey0xfVxuICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgb25Gb2N1cz17b25Gb2N1c31cbiAgICBjc3M9e3tcbiAgICAgIGxhYmVsOiAncmVxdWlyZWRJbnB1dCcsXG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBib3R0b206IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgIH19XG4gICAgLy8gUHJldmVudCBgU3dpdGNoaW5nIGZyb20gdW5jb250cm9sbGVkIHRvIGNvbnRyb2xsZWRgIGVycm9yXG4gICAgdmFsdWU9XCJcIlxuICAgIG9uQ2hhbmdlPXsoKSA9PiB7fX1cbiAgLz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFJlcXVpcmVkSW5wdXQ7XG4iXX0= */",
  toString: mp
}, yp = function(t) {
  var n = t.name, r = t.onFocus;
  return j("input", {
    required: !0,
    name: n,
    tabIndex: -1,
    "aria-hidden": "true",
    onFocus: r,
    css: bp,
    value: "",
    onChange: function() {
    }
  });
}, Ip = yp;
function lo(e) {
  var t;
  return typeof window < "u" && window.navigator != null ? e.test(((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.platform) || window.navigator.platform) : !1;
}
function Cp() {
  return lo(/^iPhone/i);
}
function is() {
  return lo(/^Mac/i);
}
function vp() {
  return lo(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  is() && navigator.maxTouchPoints > 1;
}
function xp() {
  return Cp() || vp();
}
function Ap() {
  return is() || xp();
}
var Sp = function(t) {
  return t.label;
}, os = function(t) {
  return t.label;
}, us = function(t) {
  return t.value;
}, wp = function(t) {
  return !!t.isDisabled;
}, Ep = {
  clearIndicator: sf,
  container: Ud,
  control: gf,
  dropdownIndicator: uf,
  group: If,
  groupHeading: vf,
  indicatorsContainer: Kd,
  indicatorSeparator: cf,
  input: wf,
  loadingIndicator: pf,
  loadingMessage: Zd,
  menu: Nd,
  menuList: zd,
  menuPortal: Yd,
  multiValue: Rf,
  multiValueLabel: kf,
  multiValueRemove: Bf,
  noOptionsMessage: Wd,
  option: Mf,
  placeholder: zf,
  singleValue: Zf,
  valueContainer: qd
};
function Fp(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = Z({}, e);
  return Object.keys(t).forEach(function(r) {
    var i = r;
    e[i] ? n[i] = function(o, u) {
      return t[i](e[i](o, u), u);
    } : n[i] = t[i];
  }), n;
}
var Pp = {
  primary: "#2684FF",
  primary75: "#4C9AFF",
  primary50: "#B2D4FF",
  primary25: "#DEEBFF",
  danger: "#DE350B",
  dangerLight: "#FFBDAD",
  neutral0: "hsl(0, 0%, 100%)",
  neutral5: "hsl(0, 0%, 95%)",
  neutral10: "hsl(0, 0%, 90%)",
  neutral20: "hsl(0, 0%, 80%)",
  neutral30: "hsl(0, 0%, 70%)",
  neutral40: "hsl(0, 0%, 60%)",
  neutral50: "hsl(0, 0%, 50%)",
  neutral60: "hsl(0, 0%, 40%)",
  neutral70: "hsl(0, 0%, 30%)",
  neutral80: "hsl(0, 0%, 20%)",
  neutral90: "hsl(0, 0%, 10%)"
}, Gp = 4, as = 4, Rp = 38, kp = as * 2, Bp = {
  baseUnit: as,
  controlHeight: Rp,
  menuGutter: kp
}, Wn = {
  borderRadius: Gp,
  colors: Pp,
  spacing: Bp
}, Op = {
  "aria-live": "polite",
  backspaceRemovesValue: !0,
  blurInputOnSelect: ru(),
  captureMenuScroll: !ru(),
  classNames: {},
  closeMenuOnSelect: !0,
  closeMenuOnScroll: !1,
  components: {},
  controlShouldRenderValue: !0,
  escapeClearsValue: !1,
  filterOption: up(),
  formatGroupLabel: Sp,
  getOptionLabel: os,
  getOptionValue: us,
  isDisabled: !1,
  isLoading: !1,
  isMulti: !1,
  isRtl: !1,
  isSearchable: !0,
  isOptionDisabled: wp,
  loadingMessage: function() {
    return "Loading...";
  },
  maxMenuHeight: 300,
  minMenuHeight: 140,
  menuIsOpen: !1,
  menuPlacement: "bottom",
  menuPosition: "absolute",
  menuShouldBlockScroll: !1,
  menuShouldScrollIntoView: !Fd(),
  noOptionsMessage: function() {
    return "No options";
  },
  openMenuOnFocus: !1,
  openMenuOnClick: !0,
  options: [],
  pageSize: 5,
  placeholder: "Select...",
  screenReaderStatus: function(t) {
    var n = t.count;
    return "".concat(n, " result").concat(n !== 1 ? "s" : "", " available");
  },
  styles: {},
  tabIndex: 0,
  tabSelectsValue: !0,
  unstyled: !1
};
function gu(e, t, n, r) {
  var i = cs(e, t, n), o = ds(e, t, n), u = ls(e, t), a = Dr(e, t);
  return {
    type: "option",
    data: t,
    isDisabled: i,
    isSelected: o,
    label: u,
    value: a,
    index: r
  };
}
function Ar(e, t) {
  return e.options.map(function(n, r) {
    if ("options" in n) {
      var i = n.options.map(function(u, a) {
        return gu(e, u, t, a);
      }).filter(function(u) {
        return bu(e, u);
      });
      return i.length > 0 ? {
        type: "group",
        data: n,
        options: i,
        index: r
      } : void 0;
    }
    var o = gu(e, n, t, r);
    return bu(e, o) ? o : void 0;
  }).filter(Rd);
}
function ss(e) {
  return e.reduce(function(t, n) {
    return n.type === "group" ? t.push.apply(t, pn(n.options.map(function(r) {
      return r.data;
    }))) : t.push(n.data), t;
  }, []);
}
function mu(e, t) {
  return e.reduce(function(n, r) {
    return r.type === "group" ? n.push.apply(n, pn(r.options.map(function(i) {
      return {
        data: i.data,
        id: "".concat(t, "-").concat(r.index, "-").concat(i.index)
      };
    }))) : n.push({
      data: r.data,
      id: "".concat(t, "-").concat(r.index)
    }), n;
  }, []);
}
function Tp(e, t) {
  return ss(Ar(e, t));
}
function bu(e, t) {
  var n = e.inputValue, r = n === void 0 ? "" : n, i = t.data, o = t.isSelected, u = t.label, a = t.value;
  return (!ps(e) || !o) && fs(e, {
    label: u,
    value: a,
    data: i
  }, r);
}
function Vp(e, t) {
  var n = e.focusedValue, r = e.selectValue, i = r.indexOf(n);
  if (i > -1) {
    var o = t.indexOf(n);
    if (o > -1)
      return n;
    if (i < t.length)
      return t[i];
  }
  return null;
}
function Dp(e, t) {
  var n = e.focusedOption;
  return n && t.indexOf(n) > -1 ? n : t[0];
}
var ci = function(t, n) {
  var r, i = (r = t.find(function(o) {
    return o.data === n;
  })) === null || r === void 0 ? void 0 : r.id;
  return i || null;
}, ls = function(t, n) {
  return t.getOptionLabel(n);
}, Dr = function(t, n) {
  return t.getOptionValue(n);
};
function cs(e, t, n) {
  return typeof e.isOptionDisabled == "function" ? e.isOptionDisabled(t, n) : !1;
}
function ds(e, t, n) {
  if (n.indexOf(t) > -1) return !0;
  if (typeof e.isOptionSelected == "function")
    return e.isOptionSelected(t, n);
  var r = Dr(e, t);
  return n.some(function(i) {
    return Dr(e, i) === r;
  });
}
function fs(e, t, n) {
  return e.filterOption ? e.filterOption(t, n) : !0;
}
var ps = function(t) {
  var n = t.hideSelectedOptions, r = t.isMulti;
  return n === void 0 ? r : n;
}, Np = 1, co = /* @__PURE__ */ function(e) {
  Kc(n, e);
  var t = nd(n);
  function n(r) {
    var i;
    if (qc(this, n), i = t.call(this, r), i.state = {
      ariaSelection: null,
      focusedOption: null,
      focusedOptionId: null,
      focusableOptionsWithIds: [],
      focusedValue: null,
      inputIsHidden: !1,
      isFocused: !1,
      selectValue: [],
      clearFocusValueOnUpdate: !1,
      prevWasFocused: !1,
      inputIsHiddenAfterUpdate: void 0,
      prevProps: void 0,
      instancePrefix: ""
    }, i.blockOptionHover = !1, i.isComposing = !1, i.commonProps = void 0, i.initialTouchX = 0, i.initialTouchY = 0, i.openAfterFocus = !1, i.scrollToFocusedOptionOnUpdate = !1, i.userIsDragging = void 0, i.isAppleDevice = Ap(), i.controlRef = null, i.getControlRef = function(s) {
      i.controlRef = s;
    }, i.focusedOptionRef = null, i.getFocusedOptionRef = function(s) {
      i.focusedOptionRef = s;
    }, i.menuListRef = null, i.getMenuListRef = function(s) {
      i.menuListRef = s;
    }, i.inputRef = null, i.getInputRef = function(s) {
      i.inputRef = s;
    }, i.focus = i.focusInput, i.blur = i.blurInput, i.onChange = function(s, l) {
      var c = i.props, d = c.onChange, p = c.name;
      l.name = p, i.ariaOnChange(s, l), d(s, l);
    }, i.setValue = function(s, l, c) {
      var d = i.props, p = d.closeMenuOnSelect, f = d.isMulti, y = d.inputValue;
      i.onInputChange("", {
        action: "set-value",
        prevInputValue: y
      }), p && (i.setState({
        inputIsHiddenAfterUpdate: !f
      }), i.onMenuClose()), i.setState({
        clearFocusValueOnUpdate: !0
      }), i.onChange(s, {
        action: l,
        option: c
      });
    }, i.selectOption = function(s) {
      var l = i.props, c = l.blurInputOnSelect, d = l.isMulti, p = l.name, f = i.state.selectValue, y = d && i.isOptionSelected(s, f), m = i.isOptionDisabled(s, f);
      if (y) {
        var I = i.getOptionValue(s);
        i.setValue(f.filter(function(C) {
          return i.getOptionValue(C) !== I;
        }), "deselect-option", s);
      } else if (!m)
        d ? i.setValue([].concat(pn(f), [s]), "select-option", s) : i.setValue(s, "select-option");
      else {
        i.ariaOnChange(s, {
          action: "select-option",
          option: s,
          name: p
        });
        return;
      }
      c && i.blurInput();
    }, i.removeValue = function(s) {
      var l = i.props.isMulti, c = i.state.selectValue, d = i.getOptionValue(s), p = c.filter(function(y) {
        return i.getOptionValue(y) !== d;
      }), f = Hn(l, p, p[0] || null);
      i.onChange(f, {
        action: "remove-value",
        removedValue: s
      }), i.focusInput();
    }, i.clearValue = function() {
      var s = i.state.selectValue;
      i.onChange(Hn(i.props.isMulti, [], null), {
        action: "clear",
        removedValues: s
      });
    }, i.popValue = function() {
      var s = i.props.isMulti, l = i.state.selectValue, c = l[l.length - 1], d = l.slice(0, l.length - 1), p = Hn(s, d, d[0] || null);
      c && i.onChange(p, {
        action: "pop-value",
        removedValue: c
      });
    }, i.getFocusedOptionId = function(s) {
      return ci(i.state.focusableOptionsWithIds, s);
    }, i.getFocusableOptionsWithIds = function() {
      return mu(Ar(i.props, i.state.selectValue), i.getElementId("option"));
    }, i.getValue = function() {
      return i.state.selectValue;
    }, i.cx = function() {
      for (var s = arguments.length, l = new Array(s), c = 0; c < s; c++)
        l[c] = arguments[c];
      return xd.apply(void 0, [i.props.classNamePrefix].concat(l));
    }, i.getOptionLabel = function(s) {
      return ls(i.props, s);
    }, i.getOptionValue = function(s) {
      return Dr(i.props, s);
    }, i.getStyles = function(s, l) {
      var c = i.props.unstyled, d = Ep[s](l, c);
      d.boxSizing = "border-box";
      var p = i.props.styles[s];
      return p ? p(d, l) : d;
    }, i.getClassNames = function(s, l) {
      var c, d;
      return (c = (d = i.props.classNames)[s]) === null || c === void 0 ? void 0 : c.call(d, l);
    }, i.getElementId = function(s) {
      return "".concat(i.state.instancePrefix, "-").concat(s);
    }, i.getComponents = function() {
      return Yf(i.props);
    }, i.buildCategorizedOptions = function() {
      return Ar(i.props, i.state.selectValue);
    }, i.getCategorizedOptions = function() {
      return i.props.menuIsOpen ? i.buildCategorizedOptions() : [];
    }, i.buildFocusableOptions = function() {
      return ss(i.buildCategorizedOptions());
    }, i.getFocusableOptions = function() {
      return i.props.menuIsOpen ? i.buildFocusableOptions() : [];
    }, i.ariaOnChange = function(s, l) {
      i.setState({
        ariaSelection: Z({
          value: s
        }, l)
      });
    }, i.onMenuMouseDown = function(s) {
      s.button === 0 && (s.stopPropagation(), s.preventDefault(), i.focusInput());
    }, i.onMenuMouseMove = function(s) {
      i.blockOptionHover = !1;
    }, i.onControlMouseDown = function(s) {
      if (!s.defaultPrevented) {
        var l = i.props.openMenuOnClick;
        i.state.isFocused ? i.props.menuIsOpen ? s.target.tagName !== "INPUT" && s.target.tagName !== "TEXTAREA" && i.onMenuClose() : l && i.openMenu("first") : (l && (i.openAfterFocus = !0), i.focusInput()), s.target.tagName !== "INPUT" && s.target.tagName !== "TEXTAREA" && s.preventDefault();
      }
    }, i.onDropdownIndicatorMouseDown = function(s) {
      if (!(s && s.type === "mousedown" && s.button !== 0) && !i.props.isDisabled) {
        var l = i.props, c = l.isMulti, d = l.menuIsOpen;
        i.focusInput(), d ? (i.setState({
          inputIsHiddenAfterUpdate: !c
        }), i.onMenuClose()) : i.openMenu("first"), s.preventDefault();
      }
    }, i.onClearIndicatorMouseDown = function(s) {
      s && s.type === "mousedown" && s.button !== 0 || (i.clearValue(), s.preventDefault(), i.openAfterFocus = !1, s.type === "touchend" ? i.focusInput() : setTimeout(function() {
        return i.focusInput();
      }));
    }, i.onScroll = function(s) {
      typeof i.props.closeMenuOnScroll == "boolean" ? s.target instanceof HTMLElement && zr(s.target) && i.props.onMenuClose() : typeof i.props.closeMenuOnScroll == "function" && i.props.closeMenuOnScroll(s) && i.props.onMenuClose();
    }, i.onCompositionStart = function() {
      i.isComposing = !0;
    }, i.onCompositionEnd = function() {
      i.isComposing = !1;
    }, i.onTouchStart = function(s) {
      var l = s.touches, c = l && l.item(0);
      c && (i.initialTouchX = c.clientX, i.initialTouchY = c.clientY, i.userIsDragging = !1);
    }, i.onTouchMove = function(s) {
      var l = s.touches, c = l && l.item(0);
      if (c) {
        var d = Math.abs(c.clientX - i.initialTouchX), p = Math.abs(c.clientY - i.initialTouchY), f = 5;
        i.userIsDragging = d > f || p > f;
      }
    }, i.onTouchEnd = function(s) {
      i.userIsDragging || (i.controlRef && !i.controlRef.contains(s.target) && i.menuListRef && !i.menuListRef.contains(s.target) && i.blurInput(), i.initialTouchX = 0, i.initialTouchY = 0);
    }, i.onControlTouchEnd = function(s) {
      i.userIsDragging || i.onControlMouseDown(s);
    }, i.onClearIndicatorTouchEnd = function(s) {
      i.userIsDragging || i.onClearIndicatorMouseDown(s);
    }, i.onDropdownIndicatorTouchEnd = function(s) {
      i.userIsDragging || i.onDropdownIndicatorMouseDown(s);
    }, i.handleInputChange = function(s) {
      var l = i.props.inputValue, c = s.currentTarget.value;
      i.setState({
        inputIsHiddenAfterUpdate: !1
      }), i.onInputChange(c, {
        action: "input-change",
        prevInputValue: l
      }), i.props.menuIsOpen || i.onMenuOpen();
    }, i.onInputFocus = function(s) {
      i.props.onFocus && i.props.onFocus(s), i.setState({
        inputIsHiddenAfterUpdate: !1,
        isFocused: !0
      }), (i.openAfterFocus || i.props.openMenuOnFocus) && i.openMenu("first"), i.openAfterFocus = !1;
    }, i.onInputBlur = function(s) {
      var l = i.props.inputValue;
      if (i.menuListRef && i.menuListRef.contains(document.activeElement)) {
        i.inputRef.focus();
        return;
      }
      i.props.onBlur && i.props.onBlur(s), i.onInputChange("", {
        action: "input-blur",
        prevInputValue: l
      }), i.onMenuClose(), i.setState({
        focusedValue: null,
        isFocused: !1
      });
    }, i.onOptionHover = function(s) {
      if (!(i.blockOptionHover || i.state.focusedOption === s)) {
        var l = i.getFocusableOptions(), c = l.indexOf(s);
        i.setState({
          focusedOption: s,
          focusedOptionId: c > -1 ? i.getFocusedOptionId(s) : null
        });
      }
    }, i.shouldHideSelectedOptions = function() {
      return ps(i.props);
    }, i.onValueInputFocus = function(s) {
      s.preventDefault(), s.stopPropagation(), i.focus();
    }, i.onKeyDown = function(s) {
      var l = i.props, c = l.isMulti, d = l.backspaceRemovesValue, p = l.escapeClearsValue, f = l.inputValue, y = l.isClearable, m = l.isDisabled, I = l.menuIsOpen, C = l.onKeyDown, A = l.tabSelectsValue, E = l.openMenuOnFocus, S = i.state, P = S.focusedOption, w = S.focusedValue, k = S.selectValue;
      if (!m && !(typeof C == "function" && (C(s), s.defaultPrevented))) {
        switch (i.blockOptionHover = !0, s.key) {
          case "ArrowLeft":
            if (!c || f) return;
            i.focusValue("previous");
            break;
          case "ArrowRight":
            if (!c || f) return;
            i.focusValue("next");
            break;
          case "Delete":
          case "Backspace":
            if (f) return;
            if (w)
              i.removeValue(w);
            else {
              if (!d) return;
              c ? i.popValue() : y && i.clearValue();
            }
            break;
          case "Tab":
            if (i.isComposing || s.shiftKey || !I || !A || !P || // don't capture the event if the menu opens on focus and the focused
            // option is already selected; it breaks the flow of navigation
            E && i.isOptionSelected(P, k))
              return;
            i.selectOption(P);
            break;
          case "Enter":
            if (s.keyCode === 229)
              break;
            if (I) {
              if (!P || i.isComposing) return;
              i.selectOption(P);
              break;
            }
            return;
          case "Escape":
            I ? (i.setState({
              inputIsHiddenAfterUpdate: !1
            }), i.onInputChange("", {
              action: "menu-close",
              prevInputValue: f
            }), i.onMenuClose()) : y && p && i.clearValue();
            break;
          case " ":
            if (f)
              return;
            if (!I) {
              i.openMenu("first");
              break;
            }
            if (!P) return;
            i.selectOption(P);
            break;
          case "ArrowUp":
            I ? i.focusOption("up") : i.openMenu("last");
            break;
          case "ArrowDown":
            I ? i.focusOption("down") : i.openMenu("first");
            break;
          case "PageUp":
            if (!I) return;
            i.focusOption("pageup");
            break;
          case "PageDown":
            if (!I) return;
            i.focusOption("pagedown");
            break;
          case "Home":
            if (!I) return;
            i.focusOption("first");
            break;
          case "End":
            if (!I) return;
            i.focusOption("last");
            break;
          default:
            return;
        }
        s.preventDefault();
      }
    }, i.state.instancePrefix = "react-select-" + (i.props.instanceId || ++Np), i.state.selectValue = Tr(r.value), r.menuIsOpen && i.state.selectValue.length) {
      var o = i.getFocusableOptionsWithIds(), u = i.buildFocusableOptions(), a = u.indexOf(i.state.selectValue[0]);
      i.state.focusableOptionsWithIds = o, i.state.focusedOption = u[a], i.state.focusedOptionId = ci(o, u[a]);
    }
    return i;
  }
  return $c(n, [{
    key: "componentDidMount",
    value: function() {
      this.startListeningComposition(), this.startListeningToTouch(), this.props.closeMenuOnScroll && document && document.addEventListener && document.addEventListener("scroll", this.onScroll, !0), this.props.autoFocus && this.focusInput(), this.props.menuIsOpen && this.state.focusedOption && this.menuListRef && this.focusedOptionRef && nu(this.menuListRef, this.focusedOptionRef);
    }
  }, {
    key: "componentDidUpdate",
    value: function(i) {
      var o = this.props, u = o.isDisabled, a = o.menuIsOpen, s = this.state.isFocused;
      // ensure focus is restored correctly when the control becomes enabled
      (s && !u && i.isDisabled || // ensure focus is on the Input when the menu opens
      s && a && !i.menuIsOpen) && this.focusInput(), s && u && !i.isDisabled ? this.setState({
        isFocused: !1
      }, this.onMenuClose) : !s && !u && i.isDisabled && this.inputRef === document.activeElement && this.setState({
        isFocused: !0
      }), this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate && (nu(this.menuListRef, this.focusedOptionRef), this.scrollToFocusedOptionOnUpdate = !1);
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.stopListeningComposition(), this.stopListeningToTouch(), document.removeEventListener("scroll", this.onScroll, !0);
    }
    // ==============================
    // Consumer Handlers
    // ==============================
  }, {
    key: "onMenuOpen",
    value: function() {
      this.props.onMenuOpen();
    }
  }, {
    key: "onMenuClose",
    value: function() {
      this.onInputChange("", {
        action: "menu-close",
        prevInputValue: this.props.inputValue
      }), this.props.onMenuClose();
    }
  }, {
    key: "onInputChange",
    value: function(i, o) {
      this.props.onInputChange(i, o);
    }
    // ==============================
    // Methods
    // ==============================
  }, {
    key: "focusInput",
    value: function() {
      this.inputRef && this.inputRef.focus();
    }
  }, {
    key: "blurInput",
    value: function() {
      this.inputRef && this.inputRef.blur();
    }
    // aliased for consumers
  }, {
    key: "openMenu",
    value: function(i) {
      var o = this, u = this.state, a = u.selectValue, s = u.isFocused, l = this.buildFocusableOptions(), c = i === "first" ? 0 : l.length - 1;
      if (!this.props.isMulti) {
        var d = l.indexOf(a[0]);
        d > -1 && (c = d);
      }
      this.scrollToFocusedOptionOnUpdate = !(s && this.menuListRef), this.setState({
        inputIsHiddenAfterUpdate: !1,
        focusedValue: null,
        focusedOption: l[c],
        focusedOptionId: this.getFocusedOptionId(l[c])
      }, function() {
        return o.onMenuOpen();
      });
    }
  }, {
    key: "focusValue",
    value: function(i) {
      var o = this.state, u = o.selectValue, a = o.focusedValue;
      if (this.props.isMulti) {
        this.setState({
          focusedOption: null
        });
        var s = u.indexOf(a);
        a || (s = -1);
        var l = u.length - 1, c = -1;
        if (u.length) {
          switch (i) {
            case "previous":
              s === 0 ? c = 0 : s === -1 ? c = l : c = s - 1;
              break;
            case "next":
              s > -1 && s < l && (c = s + 1);
              break;
          }
          this.setState({
            inputIsHidden: c !== -1,
            focusedValue: u[c]
          });
        }
      }
    }
  }, {
    key: "focusOption",
    value: function() {
      var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "first", o = this.props.pageSize, u = this.state.focusedOption, a = this.getFocusableOptions();
      if (a.length) {
        var s = 0, l = a.indexOf(u);
        u || (l = -1), i === "up" ? s = l > 0 ? l - 1 : a.length - 1 : i === "down" ? s = (l + 1) % a.length : i === "pageup" ? (s = l - o, s < 0 && (s = 0)) : i === "pagedown" ? (s = l + o, s > a.length - 1 && (s = a.length - 1)) : i === "last" && (s = a.length - 1), this.scrollToFocusedOptionOnUpdate = !0, this.setState({
          focusedOption: a[s],
          focusedValue: null,
          focusedOptionId: this.getFocusedOptionId(a[s])
        });
      }
    }
  }, {
    key: "getTheme",
    value: (
      // ==============================
      // Getters
      // ==============================
      function() {
        return this.props.theme ? typeof this.props.theme == "function" ? this.props.theme(Wn) : Z(Z({}, Wn), this.props.theme) : Wn;
      }
    )
  }, {
    key: "getCommonProps",
    value: function() {
      var i = this.clearValue, o = this.cx, u = this.getStyles, a = this.getClassNames, s = this.getValue, l = this.selectOption, c = this.setValue, d = this.props, p = d.isMulti, f = d.isRtl, y = d.options, m = this.hasValue();
      return {
        clearValue: i,
        cx: o,
        getStyles: u,
        getClassNames: a,
        getValue: s,
        hasValue: m,
        isMulti: p,
        isRtl: f,
        options: y,
        selectOption: l,
        selectProps: d,
        setValue: c,
        theme: this.getTheme()
      };
    }
  }, {
    key: "hasValue",
    value: function() {
      var i = this.state.selectValue;
      return i.length > 0;
    }
  }, {
    key: "hasOptions",
    value: function() {
      return !!this.getFocusableOptions().length;
    }
  }, {
    key: "isClearable",
    value: function() {
      var i = this.props, o = i.isClearable, u = i.isMulti;
      return o === void 0 ? u : o;
    }
  }, {
    key: "isOptionDisabled",
    value: function(i, o) {
      return cs(this.props, i, o);
    }
  }, {
    key: "isOptionSelected",
    value: function(i, o) {
      return ds(this.props, i, o);
    }
  }, {
    key: "filterOption",
    value: function(i, o) {
      return fs(this.props, i, o);
    }
  }, {
    key: "formatOptionLabel",
    value: function(i, o) {
      if (typeof this.props.formatOptionLabel == "function") {
        var u = this.props.inputValue, a = this.state.selectValue;
        return this.props.formatOptionLabel(i, {
          context: o,
          inputValue: u,
          selectValue: a
        });
      } else
        return this.getOptionLabel(i);
    }
  }, {
    key: "formatGroupLabel",
    value: function(i) {
      return this.props.formatGroupLabel(i);
    }
    // ==============================
    // Mouse Handlers
    // ==============================
  }, {
    key: "startListeningComposition",
    value: (
      // ==============================
      // Composition Handlers
      // ==============================
      function() {
        document && document.addEventListener && (document.addEventListener("compositionstart", this.onCompositionStart, !1), document.addEventListener("compositionend", this.onCompositionEnd, !1));
      }
    )
  }, {
    key: "stopListeningComposition",
    value: function() {
      document && document.removeEventListener && (document.removeEventListener("compositionstart", this.onCompositionStart), document.removeEventListener("compositionend", this.onCompositionEnd));
    }
  }, {
    key: "startListeningToTouch",
    value: (
      // ==============================
      // Touch Handlers
      // ==============================
      function() {
        document && document.addEventListener && (document.addEventListener("touchstart", this.onTouchStart, !1), document.addEventListener("touchmove", this.onTouchMove, !1), document.addEventListener("touchend", this.onTouchEnd, !1));
      }
    )
  }, {
    key: "stopListeningToTouch",
    value: function() {
      document && document.removeEventListener && (document.removeEventListener("touchstart", this.onTouchStart), document.removeEventListener("touchmove", this.onTouchMove), document.removeEventListener("touchend", this.onTouchEnd));
    }
  }, {
    key: "renderInput",
    value: (
      // ==============================
      // Renderers
      // ==============================
      function() {
        var i = this.props, o = i.isDisabled, u = i.isSearchable, a = i.inputId, s = i.inputValue, l = i.tabIndex, c = i.form, d = i.menuIsOpen, p = i.required, f = this.getComponents(), y = f.Input, m = this.state, I = m.inputIsHidden, C = m.ariaSelection, A = this.commonProps, E = a || this.getElementId("input"), S = Z(Z(Z({
          "aria-autocomplete": "list",
          "aria-expanded": d,
          "aria-haspopup": !0,
          "aria-errormessage": this.props["aria-errormessage"],
          "aria-invalid": this.props["aria-invalid"],
          "aria-label": this.props["aria-label"],
          "aria-labelledby": this.props["aria-labelledby"],
          "aria-required": p,
          role: "combobox",
          "aria-activedescendant": this.isAppleDevice ? void 0 : this.state.focusedOptionId || ""
        }, d && {
          "aria-controls": this.getElementId("listbox")
        }), !u && {
          "aria-readonly": !0
        }), this.hasValue() ? (C == null ? void 0 : C.action) === "initial-input-focus" && {
          "aria-describedby": this.getElementId("live-region")
        } : {
          "aria-describedby": this.getElementId("placeholder")
        });
        return u ? /* @__PURE__ */ te.createElement(y, J({}, A, {
          autoCapitalize: "none",
          autoComplete: "off",
          autoCorrect: "off",
          id: E,
          innerRef: this.getInputRef,
          isDisabled: o,
          isHidden: I,
          onBlur: this.onInputBlur,
          onChange: this.handleInputChange,
          onFocus: this.onInputFocus,
          spellCheck: "false",
          tabIndex: l,
          form: c,
          type: "text",
          value: s
        }, S)) : /* @__PURE__ */ te.createElement(sp, J({
          id: E,
          innerRef: this.getInputRef,
          onBlur: this.onInputBlur,
          onChange: Or,
          onFocus: this.onInputFocus,
          disabled: o,
          tabIndex: l,
          inputMode: "none",
          form: c,
          value: ""
        }, S));
      }
    )
  }, {
    key: "renderPlaceholderOrValue",
    value: function() {
      var i = this, o = this.getComponents(), u = o.MultiValue, a = o.MultiValueContainer, s = o.MultiValueLabel, l = o.MultiValueRemove, c = o.SingleValue, d = o.Placeholder, p = this.commonProps, f = this.props, y = f.controlShouldRenderValue, m = f.isDisabled, I = f.isMulti, C = f.inputValue, A = f.placeholder, E = this.state, S = E.selectValue, P = E.focusedValue, w = E.isFocused;
      if (!this.hasValue() || !y)
        return C ? null : /* @__PURE__ */ te.createElement(d, J({}, p, {
          key: "placeholder",
          isDisabled: m,
          isFocused: w,
          innerProps: {
            id: this.getElementId("placeholder")
          }
        }), A);
      if (I)
        return S.map(function(R, T) {
          var H = R === P, N = "".concat(i.getOptionLabel(R), "-").concat(i.getOptionValue(R));
          return /* @__PURE__ */ te.createElement(u, J({}, p, {
            components: {
              Container: a,
              Label: s,
              Remove: l
            },
            isFocused: H,
            isDisabled: m,
            key: N,
            index: T,
            removeProps: {
              onClick: function() {
                return i.removeValue(R);
              },
              onTouchEnd: function() {
                return i.removeValue(R);
              },
              onMouseDown: function(K) {
                K.preventDefault();
              }
            },
            data: R
          }), i.formatOptionLabel(R, "value"));
        });
      if (C)
        return null;
      var k = S[0];
      return /* @__PURE__ */ te.createElement(c, J({}, p, {
        data: k,
        isDisabled: m
      }), this.formatOptionLabel(k, "value"));
    }
  }, {
    key: "renderClearIndicator",
    value: function() {
      var i = this.getComponents(), o = i.ClearIndicator, u = this.commonProps, a = this.props, s = a.isDisabled, l = a.isLoading, c = this.state.isFocused;
      if (!this.isClearable() || !o || s || !this.hasValue() || l)
        return null;
      var d = {
        onMouseDown: this.onClearIndicatorMouseDown,
        onTouchEnd: this.onClearIndicatorTouchEnd,
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ te.createElement(o, J({}, u, {
        innerProps: d,
        isFocused: c
      }));
    }
  }, {
    key: "renderLoadingIndicator",
    value: function() {
      var i = this.getComponents(), o = i.LoadingIndicator, u = this.commonProps, a = this.props, s = a.isDisabled, l = a.isLoading, c = this.state.isFocused;
      if (!o || !l) return null;
      var d = {
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ te.createElement(o, J({}, u, {
        innerProps: d,
        isDisabled: s,
        isFocused: c
      }));
    }
  }, {
    key: "renderIndicatorSeparator",
    value: function() {
      var i = this.getComponents(), o = i.DropdownIndicator, u = i.IndicatorSeparator;
      if (!o || !u) return null;
      var a = this.commonProps, s = this.props.isDisabled, l = this.state.isFocused;
      return /* @__PURE__ */ te.createElement(u, J({}, a, {
        isDisabled: s,
        isFocused: l
      }));
    }
  }, {
    key: "renderDropdownIndicator",
    value: function() {
      var i = this.getComponents(), o = i.DropdownIndicator;
      if (!o) return null;
      var u = this.commonProps, a = this.props.isDisabled, s = this.state.isFocused, l = {
        onMouseDown: this.onDropdownIndicatorMouseDown,
        onTouchEnd: this.onDropdownIndicatorTouchEnd,
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ te.createElement(o, J({}, u, {
        innerProps: l,
        isDisabled: a,
        isFocused: s
      }));
    }
  }, {
    key: "renderMenu",
    value: function() {
      var i = this, o = this.getComponents(), u = o.Group, a = o.GroupHeading, s = o.Menu, l = o.MenuList, c = o.MenuPortal, d = o.LoadingMessage, p = o.NoOptionsMessage, f = o.Option, y = this.commonProps, m = this.state.focusedOption, I = this.props, C = I.captureMenuScroll, A = I.inputValue, E = I.isLoading, S = I.loadingMessage, P = I.minMenuHeight, w = I.maxMenuHeight, k = I.menuIsOpen, R = I.menuPlacement, T = I.menuPosition, H = I.menuPortalTarget, N = I.menuShouldBlockScroll, O = I.menuShouldScrollIntoView, K = I.noOptionsMessage, ie = I.onMenuScrollToTop, M = I.onMenuScrollToBottom;
      if (!k) return null;
      var Y = function(g, pe) {
        var ee = g.type, de = g.data, Fe = g.isDisabled, D = g.isSelected, z = g.label, U = g.value, fe = m === de, Pe = Fe ? void 0 : function() {
          return i.onOptionHover(de);
        }, We = Fe ? void 0 : function() {
          return i.selectOption(de);
        }, zt = "".concat(i.getElementId("option"), "-").concat(pe), an = {
          id: zt,
          onClick: We,
          onMouseMove: Pe,
          onMouseOver: Pe,
          tabIndex: -1,
          role: "option",
          "aria-selected": i.isAppleDevice ? void 0 : D
          // is not supported on Apple devices
        };
        return /* @__PURE__ */ te.createElement(f, J({}, y, {
          innerProps: an,
          data: de,
          isDisabled: Fe,
          isSelected: D,
          key: zt,
          label: z,
          type: ee,
          value: U,
          isFocused: fe,
          innerRef: fe ? i.getFocusedOptionRef : void 0
        }), i.formatOptionLabel(g.data, "menu"));
      }, _;
      if (this.hasOptions())
        _ = this.getCategorizedOptions().map(function(ae) {
          if (ae.type === "group") {
            var g = ae.data, pe = ae.options, ee = ae.index, de = "".concat(i.getElementId("group"), "-").concat(ee), Fe = "".concat(de, "-heading");
            return /* @__PURE__ */ te.createElement(u, J({}, y, {
              key: de,
              data: g,
              options: pe,
              Heading: a,
              headingProps: {
                id: Fe,
                data: ae.data
              },
              label: i.formatGroupLabel(ae.data)
            }), ae.options.map(function(D) {
              return Y(D, "".concat(ee, "-").concat(D.index));
            }));
          } else if (ae.type === "option")
            return Y(ae, "".concat(ae.index));
        });
      else if (E) {
        var se = S({
          inputValue: A
        });
        if (se === null) return null;
        _ = /* @__PURE__ */ te.createElement(d, y, se);
      } else {
        var me = K({
          inputValue: A
        });
        if (me === null) return null;
        _ = /* @__PURE__ */ te.createElement(p, y, me);
      }
      var b = {
        minMenuHeight: P,
        maxMenuHeight: w,
        menuPlacement: R,
        menuPosition: T,
        menuShouldScrollIntoView: O
      }, Ce = /* @__PURE__ */ te.createElement(Md, J({}, y, b), function(ae) {
        var g = ae.ref, pe = ae.placerProps, ee = pe.placement, de = pe.maxHeight;
        return /* @__PURE__ */ te.createElement(s, J({}, y, b, {
          innerRef: g,
          innerProps: {
            onMouseDown: i.onMenuMouseDown,
            onMouseMove: i.onMenuMouseMove
          },
          isLoading: E,
          placement: ee
        }), /* @__PURE__ */ te.createElement(gp, {
          captureEnabled: C,
          onTopArrive: ie,
          onBottomArrive: M,
          lockEnabled: N
        }, function(Fe) {
          return /* @__PURE__ */ te.createElement(l, J({}, y, {
            innerRef: function(z) {
              i.getMenuListRef(z), Fe(z);
            },
            innerProps: {
              role: "listbox",
              "aria-multiselectable": y.isMulti,
              id: i.getElementId("listbox")
            },
            isLoading: E,
            maxHeight: de,
            focusedOption: m
          }), _);
        }));
      });
      return H || T === "fixed" ? /* @__PURE__ */ te.createElement(c, J({}, y, {
        appendTo: H,
        controlElement: this.controlRef,
        menuPlacement: R,
        menuPosition: T
      }), Ce) : Ce;
    }
  }, {
    key: "renderFormField",
    value: function() {
      var i = this, o = this.props, u = o.delimiter, a = o.isDisabled, s = o.isMulti, l = o.name, c = o.required, d = this.state.selectValue;
      if (c && !this.hasValue() && !a)
        return /* @__PURE__ */ te.createElement(Ip, {
          name: l,
          onFocus: this.onValueInputFocus
        });
      if (!(!l || a))
        if (s)
          if (u) {
            var p = d.map(function(m) {
              return i.getOptionValue(m);
            }).join(u);
            return /* @__PURE__ */ te.createElement("input", {
              name: l,
              type: "hidden",
              value: p
            });
          } else {
            var f = d.length > 0 ? d.map(function(m, I) {
              return /* @__PURE__ */ te.createElement("input", {
                key: "i-".concat(I),
                name: l,
                type: "hidden",
                value: i.getOptionValue(m)
              });
            }) : /* @__PURE__ */ te.createElement("input", {
              name: l,
              type: "hidden",
              value: ""
            });
            return /* @__PURE__ */ te.createElement("div", null, f);
          }
        else {
          var y = d[0] ? this.getOptionValue(d[0]) : "";
          return /* @__PURE__ */ te.createElement("input", {
            name: l,
            type: "hidden",
            value: y
          });
        }
    }
  }, {
    key: "renderLiveRegion",
    value: function() {
      var i = this.commonProps, o = this.state, u = o.ariaSelection, a = o.focusedOption, s = o.focusedValue, l = o.isFocused, c = o.selectValue, d = this.getFocusableOptions();
      return /* @__PURE__ */ te.createElement(np, J({}, i, {
        id: this.getElementId("live-region"),
        ariaSelection: u,
        focusedOption: a,
        focusedValue: s,
        isFocused: l,
        selectValue: c,
        focusableOptions: d,
        isAppleDevice: this.isAppleDevice
      }));
    }
  }, {
    key: "render",
    value: function() {
      var i = this.getComponents(), o = i.Control, u = i.IndicatorsContainer, a = i.SelectContainer, s = i.ValueContainer, l = this.props, c = l.className, d = l.id, p = l.isDisabled, f = l.menuIsOpen, y = this.state.isFocused, m = this.commonProps = this.getCommonProps();
      return /* @__PURE__ */ te.createElement(a, J({}, m, {
        className: c,
        innerProps: {
          id: d,
          onKeyDown: this.onKeyDown
        },
        isDisabled: p,
        isFocused: y
      }), this.renderLiveRegion(), /* @__PURE__ */ te.createElement(o, J({}, m, {
        innerRef: this.getControlRef,
        innerProps: {
          onMouseDown: this.onControlMouseDown,
          onTouchEnd: this.onControlTouchEnd
        },
        isDisabled: p,
        isFocused: y,
        menuIsOpen: f
      }), /* @__PURE__ */ te.createElement(s, J({}, m, {
        isDisabled: p
      }), this.renderPlaceholderOrValue(), this.renderInput()), /* @__PURE__ */ te.createElement(u, J({}, m, {
        isDisabled: p
      }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(i, o) {
      var u = o.prevProps, a = o.clearFocusValueOnUpdate, s = o.inputIsHiddenAfterUpdate, l = o.ariaSelection, c = o.isFocused, d = o.prevWasFocused, p = o.instancePrefix, f = i.options, y = i.value, m = i.menuIsOpen, I = i.inputValue, C = i.isMulti, A = Tr(y), E = {};
      if (u && (y !== u.value || f !== u.options || m !== u.menuIsOpen || I !== u.inputValue)) {
        var S = m ? Tp(i, A) : [], P = m ? mu(Ar(i, A), "".concat(p, "-option")) : [], w = a ? Vp(o, A) : null, k = Dp(o, S), R = ci(P, k);
        E = {
          selectValue: A,
          focusedOption: k,
          focusedOptionId: R,
          focusableOptionsWithIds: P,
          focusedValue: w,
          clearFocusValueOnUpdate: !1
        };
      }
      var T = s != null && i !== u ? {
        inputIsHidden: s,
        inputIsHiddenAfterUpdate: void 0
      } : {}, H = l, N = c && d;
      return c && !N && (H = {
        value: Hn(C, A, A[0] || null),
        options: A,
        action: "initial-input-focus"
      }, N = !d), (l == null ? void 0 : l.action) === "initial-input-focus" && (H = null), Z(Z(Z({}, E), T), {}, {
        prevProps: i,
        ariaSelection: H,
        prevWasFocused: N
      });
    }
  }]), n;
}(ya);
co.defaultProps = Op;
var Mp = /* @__PURE__ */ Ia(function(e, t) {
  var n = Na(e);
  return /* @__PURE__ */ te.createElement(co, J({
    ref: t
  }, n));
}), Hr = Mp;
const Lp = Wn, fo = {
  borderRadius: 4,
  colors: {
    primary: "#2684FF",
    primary75: "#4C9AFF",
    primary50: "#B2D4FF",
    primary25: "#DEEBFF",
    danger: "#DE350B",
    dangerLight: "#FFBDAD",
    neutral0: "hsl(0, 0%, 100%)",
    neutral5: "hsl(0, 0%, 95%)",
    neutral10: "hsl(0, 0%, 90%)",
    neutral20: "hsl(0, 0%, 80%)",
    neutral30: "hsl(0, 0%, 70%)",
    neutral40: "hsl(0, 0%, 60%)",
    neutral50: "hsl(0, 0%, 50%)",
    neutral60: "hsl(0, 0%, 40%)",
    neutral70: "hsl(0, 0%, 30%)",
    neutral80: "hsl(0, 0%, 20%)",
    neutral90: "hsl(0, 0%, 10%)"
  },
  boxShadow: {
    button: "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px",
    card: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
    dropdown: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    input: "0 1px 2px 0 rgb(0 0 0 / 0.05)"
  },
  spacing: {
    baseUnit: 4,
    controlHeight: 32,
    menuGutter: 8
  }
}, Xp = {
  colors: {},
  spacing: {
    baseUnit: 4,
    controlHeight: 32,
    menuGutter: 8
  },
  boxShadow: {
    button: "none",
    input: "none",
    card: "none",
    dropdown: "none"
  }
};
function zp(e) {
  if (!e) return Wn;
  const t = typeof e == "function" ? e(fo) : e, {
    colors: n,
    spacing: r,
    borderRadius: i
  } = Wi(
    Lp,
    t
  );
  return {
    borderRadius: i,
    colors: n,
    spacing: r
  };
}
function Wi(e, ...t) {
  const n = {
    borderRadius: e.borderRadius,
    colors: {
      ...e.colors
    },
    spacing: {
      ...e.spacing
    },
    boxShadow: {
      ...e.boxShadow
    }
  };
  for (const r of t)
    r && (n.borderRadius = r.borderRadius ?? n.borderRadius, Object.assign(n.boxShadow, r.boxShadow), Object.assign(n.colors, r.colors), Object.assign(n.spacing, r.spacing));
  return n;
}
function Hp(e, t) {
  const n = {};
  return (e[e.length - 1] === "" ? [...e, ""] : e).join(
    (n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " ")
  ).trim();
}
const Wp = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, Zp = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, jp = {};
function yu(e, t) {
  return (jp.jsx ? Zp : Wp).test(e);
}
const Jp = /[ \t\n\f\r]/g;
function Yp(e) {
  return typeof e == "object" ? e.type === "text" ? Iu(e.value) : !1 : Iu(e);
}
function Iu(e) {
  return e.replace(Jp, "") === "";
}
class nr {
  /**
   * @constructor
   * @param {Properties} property
   * @param {Normal} normal
   * @param {string} [space]
   */
  constructor(t, n, r) {
    this.property = t, this.normal = n, r && (this.space = r);
  }
}
nr.prototype.property = {};
nr.prototype.normal = {};
nr.prototype.space = null;
function hs(e, t) {
  const n = {}, r = {};
  let i = -1;
  for (; ++i < e.length; )
    Object.assign(n, e[i].property), Object.assign(r, e[i].normal);
  return new nr(n, r, t);
}
function Zi(e) {
  return e.toLowerCase();
}
class Ke {
  /**
   * @constructor
   * @param {string} property
   * @param {string} attribute
   */
  constructor(t, n) {
    this.property = t, this.attribute = n;
  }
}
Ke.prototype.space = null;
Ke.prototype.boolean = !1;
Ke.prototype.booleanish = !1;
Ke.prototype.overloadedBoolean = !1;
Ke.prototype.number = !1;
Ke.prototype.commaSeparated = !1;
Ke.prototype.spaceSeparated = !1;
Ke.prototype.commaOrSpaceSeparated = !1;
Ke.prototype.mustUseProperty = !1;
Ke.prototype.defined = !1;
let _p = 0;
const ne = un(), Ee = un(), gs = un(), B = un(), be = un(), hn = un(), je = un();
function un() {
  return 2 ** ++_p;
}
const ji = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: ne,
  booleanish: Ee,
  commaOrSpaceSeparated: je,
  commaSeparated: hn,
  number: B,
  overloadedBoolean: gs,
  spaceSeparated: be
}, Symbol.toStringTag, { value: "Module" })), di = Object.keys(ji);
class po extends Ke {
  /**
   * @constructor
   * @param {string} property
   * @param {string} attribute
   * @param {number|null} [mask]
   * @param {string} [space]
   */
  constructor(t, n, r, i) {
    let o = -1;
    if (super(t, n), Cu(this, "space", i), typeof r == "number")
      for (; ++o < di.length; ) {
        const u = di[o];
        Cu(this, di[o], (r & ji[u]) === ji[u]);
      }
  }
}
po.prototype.defined = !0;
function Cu(e, t, n) {
  n && (e[t] = n);
}
const Up = {}.hasOwnProperty;
function Rn(e) {
  const t = {}, n = {};
  let r;
  for (r in e.properties)
    if (Up.call(e.properties, r)) {
      const i = e.properties[r], o = new po(
        r,
        e.transform(e.attributes || {}, r),
        i,
        e.space
      );
      e.mustUseProperty && e.mustUseProperty.includes(r) && (o.mustUseProperty = !0), t[r] = o, n[Zi(r)] = r, n[Zi(o.attribute)] = r;
    }
  return new nr(t, n, e.space);
}
const ms = Rn({
  space: "xlink",
  transform(e, t) {
    return "xlink:" + t.slice(5).toLowerCase();
  },
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null
  }
}), bs = Rn({
  space: "xml",
  transform(e, t) {
    return "xml:" + t.slice(3).toLowerCase();
  },
  properties: { xmlLang: null, xmlBase: null, xmlSpace: null }
});
function ys(e, t) {
  return t in e ? e[t] : t;
}
function Is(e, t) {
  return ys(e, t.toLowerCase());
}
const Cs = Rn({
  space: "xmlns",
  attributes: { xmlnsxlink: "xmlns:xlink" },
  transform: Is,
  properties: { xmlns: null, xmlnsXLink: null }
}), vs = Rn({
  transform(e, t) {
    return t === "role" ? t : "aria-" + t.slice(4).toLowerCase();
  },
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: Ee,
    ariaAutoComplete: null,
    ariaBusy: Ee,
    ariaChecked: Ee,
    ariaColCount: B,
    ariaColIndex: B,
    ariaColSpan: B,
    ariaControls: be,
    ariaCurrent: null,
    ariaDescribedBy: be,
    ariaDetails: null,
    ariaDisabled: Ee,
    ariaDropEffect: be,
    ariaErrorMessage: null,
    ariaExpanded: Ee,
    ariaFlowTo: be,
    ariaGrabbed: Ee,
    ariaHasPopup: null,
    ariaHidden: Ee,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: be,
    ariaLevel: B,
    ariaLive: null,
    ariaModal: Ee,
    ariaMultiLine: Ee,
    ariaMultiSelectable: Ee,
    ariaOrientation: null,
    ariaOwns: be,
    ariaPlaceholder: null,
    ariaPosInSet: B,
    ariaPressed: Ee,
    ariaReadOnly: Ee,
    ariaRelevant: null,
    ariaRequired: Ee,
    ariaRoleDescription: be,
    ariaRowCount: B,
    ariaRowIndex: B,
    ariaRowSpan: B,
    ariaSelected: Ee,
    ariaSetSize: B,
    ariaSort: null,
    ariaValueMax: B,
    ariaValueMin: B,
    ariaValueNow: B,
    ariaValueText: null,
    role: null
  }
}), Qp = Rn({
  space: "html",
  attributes: {
    acceptcharset: "accept-charset",
    classname: "class",
    htmlfor: "for",
    httpequiv: "http-equiv"
  },
  transform: Is,
  mustUseProperty: ["checked", "multiple", "muted", "selected"],
  properties: {
    // Standard Properties.
    abbr: null,
    accept: hn,
    acceptCharset: be,
    accessKey: be,
    action: null,
    allow: null,
    allowFullScreen: ne,
    allowPaymentRequest: ne,
    allowUserMedia: ne,
    alt: null,
    as: null,
    async: ne,
    autoCapitalize: null,
    autoComplete: be,
    autoFocus: ne,
    autoPlay: ne,
    blocking: be,
    capture: null,
    charSet: null,
    checked: ne,
    cite: null,
    className: be,
    cols: B,
    colSpan: null,
    content: null,
    contentEditable: Ee,
    controls: ne,
    controlsList: be,
    coords: B | hn,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: ne,
    defer: ne,
    dir: null,
    dirName: null,
    disabled: ne,
    download: gs,
    draggable: Ee,
    encType: null,
    enterKeyHint: null,
    fetchPriority: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: ne,
    formTarget: null,
    headers: be,
    height: B,
    hidden: ne,
    high: B,
    href: null,
    hrefLang: null,
    htmlFor: be,
    httpEquiv: be,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: ne,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: ne,
    itemId: null,
    itemProp: be,
    itemRef: be,
    itemScope: ne,
    itemType: be,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: ne,
    low: B,
    manifest: null,
    max: null,
    maxLength: B,
    media: null,
    method: null,
    min: null,
    minLength: B,
    multiple: ne,
    muted: ne,
    name: null,
    nonce: null,
    noModule: ne,
    noValidate: ne,
    onAbort: null,
    onAfterPrint: null,
    onAuxClick: null,
    onBeforeMatch: null,
    onBeforePrint: null,
    onBeforeToggle: null,
    onBeforeUnload: null,
    onBlur: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onContextLost: null,
    onContextMenu: null,
    onContextRestored: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFormData: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLanguageChange: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadEnd: null,
    onLoadStart: null,
    onMessage: null,
    onMessageError: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRejectionHandled: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onScrollEnd: null,
    onSecurityPolicyViolation: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onSlotChange: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnhandledRejection: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onWheel: null,
    open: ne,
    optimum: B,
    pattern: null,
    ping: be,
    placeholder: null,
    playsInline: ne,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: ne,
    referrerPolicy: null,
    rel: be,
    required: ne,
    reversed: ne,
    rows: B,
    rowSpan: B,
    sandbox: be,
    scope: null,
    scoped: ne,
    seamless: ne,
    selected: ne,
    shadowRootClonable: ne,
    shadowRootDelegatesFocus: ne,
    shadowRootMode: null,
    shape: null,
    size: B,
    sizes: null,
    slot: null,
    span: B,
    spellCheck: Ee,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: B,
    step: null,
    style: null,
    tabIndex: B,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: ne,
    useMap: null,
    value: Ee,
    width: B,
    wrap: null,
    writingSuggestions: null,
    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null,
    // Several. Use CSS `text-align` instead,
    aLink: null,
    // `<body>`. Use CSS `a:active {color}` instead
    archive: be,
    // `<object>`. List of URIs to archives
    axis: null,
    // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null,
    // `<body>`. Use CSS `background-image` instead
    bgColor: null,
    // `<body>` and table elements. Use CSS `background-color` instead
    border: B,
    // `<table>`. Use CSS `border-width` instead,
    borderColor: null,
    // `<table>`. Use CSS `border-color` instead,
    bottomMargin: B,
    // `<body>`
    cellPadding: null,
    // `<table>`
    cellSpacing: null,
    // `<table>`
    char: null,
    // Several table elements. When `align=char`, sets the character to align on
    charOff: null,
    // Several table elements. When `char`, offsets the alignment
    classId: null,
    // `<object>`
    clear: null,
    // `<br>`. Use CSS `clear` instead
    code: null,
    // `<object>`
    codeBase: null,
    // `<object>`
    codeType: null,
    // `<object>`
    color: null,
    // `<font>` and `<hr>`. Use CSS instead
    compact: ne,
    // Lists. Use CSS to reduce space between items instead
    declare: ne,
    // `<object>`
    event: null,
    // `<script>`
    face: null,
    // `<font>`. Use CSS instead
    frame: null,
    // `<table>`
    frameBorder: null,
    // `<iframe>`. Use CSS `border` instead
    hSpace: B,
    // `<img>` and `<object>`
    leftMargin: B,
    // `<body>`
    link: null,
    // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null,
    // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null,
    // `<img>`. Use a `<picture>`
    marginHeight: B,
    // `<body>`
    marginWidth: B,
    // `<body>`
    noResize: ne,
    // `<frame>`
    noHref: ne,
    // `<area>`. Use no href instead of an explicit `nohref`
    noShade: ne,
    // `<hr>`. Use background-color and height instead of borders
    noWrap: ne,
    // `<td>` and `<th>`
    object: null,
    // `<applet>`
    profile: null,
    // `<head>`
    prompt: null,
    // `<isindex>`
    rev: null,
    // `<link>`
    rightMargin: B,
    // `<body>`
    rules: null,
    // `<table>`
    scheme: null,
    // `<meta>`
    scrolling: Ee,
    // `<frame>`. Use overflow in the child context
    standby: null,
    // `<object>`
    summary: null,
    // `<table>`
    text: null,
    // `<body>`. Use CSS `color` instead
    topMargin: B,
    // `<body>`
    valueType: null,
    // `<param>`
    version: null,
    // `<html>`. Use a doctype.
    vAlign: null,
    // Several. Use CSS `vertical-align` instead
    vLink: null,
    // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: B,
    // `<img>` and `<object>`
    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: ne,
    disableRemotePlayback: ne,
    prefix: null,
    property: null,
    results: B,
    security: null,
    unselectable: null
  }
}), qp = Rn({
  space: "svg",
  attributes: {
    accentHeight: "accent-height",
    alignmentBaseline: "alignment-baseline",
    arabicForm: "arabic-form",
    baselineShift: "baseline-shift",
    capHeight: "cap-height",
    className: "class",
    clipPath: "clip-path",
    clipRule: "clip-rule",
    colorInterpolation: "color-interpolation",
    colorInterpolationFilters: "color-interpolation-filters",
    colorProfile: "color-profile",
    colorRendering: "color-rendering",
    crossOrigin: "crossorigin",
    dataType: "datatype",
    dominantBaseline: "dominant-baseline",
    enableBackground: "enable-background",
    fillOpacity: "fill-opacity",
    fillRule: "fill-rule",
    floodColor: "flood-color",
    floodOpacity: "flood-opacity",
    fontFamily: "font-family",
    fontSize: "font-size",
    fontSizeAdjust: "font-size-adjust",
    fontStretch: "font-stretch",
    fontStyle: "font-style",
    fontVariant: "font-variant",
    fontWeight: "font-weight",
    glyphName: "glyph-name",
    glyphOrientationHorizontal: "glyph-orientation-horizontal",
    glyphOrientationVertical: "glyph-orientation-vertical",
    hrefLang: "hreflang",
    horizAdvX: "horiz-adv-x",
    horizOriginX: "horiz-origin-x",
    horizOriginY: "horiz-origin-y",
    imageRendering: "image-rendering",
    letterSpacing: "letter-spacing",
    lightingColor: "lighting-color",
    markerEnd: "marker-end",
    markerMid: "marker-mid",
    markerStart: "marker-start",
    navDown: "nav-down",
    navDownLeft: "nav-down-left",
    navDownRight: "nav-down-right",
    navLeft: "nav-left",
    navNext: "nav-next",
    navPrev: "nav-prev",
    navRight: "nav-right",
    navUp: "nav-up",
    navUpLeft: "nav-up-left",
    navUpRight: "nav-up-right",
    onAbort: "onabort",
    onActivate: "onactivate",
    onAfterPrint: "onafterprint",
    onBeforePrint: "onbeforeprint",
    onBegin: "onbegin",
    onCancel: "oncancel",
    onCanPlay: "oncanplay",
    onCanPlayThrough: "oncanplaythrough",
    onChange: "onchange",
    onClick: "onclick",
    onClose: "onclose",
    onCopy: "oncopy",
    onCueChange: "oncuechange",
    onCut: "oncut",
    onDblClick: "ondblclick",
    onDrag: "ondrag",
    onDragEnd: "ondragend",
    onDragEnter: "ondragenter",
    onDragExit: "ondragexit",
    onDragLeave: "ondragleave",
    onDragOver: "ondragover",
    onDragStart: "ondragstart",
    onDrop: "ondrop",
    onDurationChange: "ondurationchange",
    onEmptied: "onemptied",
    onEnd: "onend",
    onEnded: "onended",
    onError: "onerror",
    onFocus: "onfocus",
    onFocusIn: "onfocusin",
    onFocusOut: "onfocusout",
    onHashChange: "onhashchange",
    onInput: "oninput",
    onInvalid: "oninvalid",
    onKeyDown: "onkeydown",
    onKeyPress: "onkeypress",
    onKeyUp: "onkeyup",
    onLoad: "onload",
    onLoadedData: "onloadeddata",
    onLoadedMetadata: "onloadedmetadata",
    onLoadStart: "onloadstart",
    onMessage: "onmessage",
    onMouseDown: "onmousedown",
    onMouseEnter: "onmouseenter",
    onMouseLeave: "onmouseleave",
    onMouseMove: "onmousemove",
    onMouseOut: "onmouseout",
    onMouseOver: "onmouseover",
    onMouseUp: "onmouseup",
    onMouseWheel: "onmousewheel",
    onOffline: "onoffline",
    onOnline: "ononline",
    onPageHide: "onpagehide",
    onPageShow: "onpageshow",
    onPaste: "onpaste",
    onPause: "onpause",
    onPlay: "onplay",
    onPlaying: "onplaying",
    onPopState: "onpopstate",
    onProgress: "onprogress",
    onRateChange: "onratechange",
    onRepeat: "onrepeat",
    onReset: "onreset",
    onResize: "onresize",
    onScroll: "onscroll",
    onSeeked: "onseeked",
    onSeeking: "onseeking",
    onSelect: "onselect",
    onShow: "onshow",
    onStalled: "onstalled",
    onStorage: "onstorage",
    onSubmit: "onsubmit",
    onSuspend: "onsuspend",
    onTimeUpdate: "ontimeupdate",
    onToggle: "ontoggle",
    onUnload: "onunload",
    onVolumeChange: "onvolumechange",
    onWaiting: "onwaiting",
    onZoom: "onzoom",
    overlinePosition: "overline-position",
    overlineThickness: "overline-thickness",
    paintOrder: "paint-order",
    panose1: "panose-1",
    pointerEvents: "pointer-events",
    referrerPolicy: "referrerpolicy",
    renderingIntent: "rendering-intent",
    shapeRendering: "shape-rendering",
    stopColor: "stop-color",
    stopOpacity: "stop-opacity",
    strikethroughPosition: "strikethrough-position",
    strikethroughThickness: "strikethrough-thickness",
    strokeDashArray: "stroke-dasharray",
    strokeDashOffset: "stroke-dashoffset",
    strokeLineCap: "stroke-linecap",
    strokeLineJoin: "stroke-linejoin",
    strokeMiterLimit: "stroke-miterlimit",
    strokeOpacity: "stroke-opacity",
    strokeWidth: "stroke-width",
    tabIndex: "tabindex",
    textAnchor: "text-anchor",
    textDecoration: "text-decoration",
    textRendering: "text-rendering",
    transformOrigin: "transform-origin",
    typeOf: "typeof",
    underlinePosition: "underline-position",
    underlineThickness: "underline-thickness",
    unicodeBidi: "unicode-bidi",
    unicodeRange: "unicode-range",
    unitsPerEm: "units-per-em",
    vAlphabetic: "v-alphabetic",
    vHanging: "v-hanging",
    vIdeographic: "v-ideographic",
    vMathematical: "v-mathematical",
    vectorEffect: "vector-effect",
    vertAdvY: "vert-adv-y",
    vertOriginX: "vert-origin-x",
    vertOriginY: "vert-origin-y",
    wordSpacing: "word-spacing",
    writingMode: "writing-mode",
    xHeight: "x-height",
    // These were camelcased in Tiny. Now lowercased in SVG 2
    playbackOrder: "playbackorder",
    timelineBegin: "timelinebegin"
  },
  transform: ys,
  properties: {
    about: je,
    accentHeight: B,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: B,
    amplitude: B,
    arabicForm: null,
    ascent: B,
    attributeName: null,
    attributeType: null,
    azimuth: B,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: B,
    by: null,
    calcMode: null,
    capHeight: B,
    className: be,
    clip: null,
    clipPath: null,
    clipPathUnits: null,
    clipRule: null,
    color: null,
    colorInterpolation: null,
    colorInterpolationFilters: null,
    colorProfile: null,
    colorRendering: null,
    content: null,
    contentScriptType: null,
    contentStyleType: null,
    crossOrigin: null,
    cursor: null,
    cx: null,
    cy: null,
    d: null,
    dataType: null,
    defaultAction: null,
    descent: B,
    diffuseConstant: B,
    direction: null,
    display: null,
    dur: null,
    divisor: B,
    dominantBaseline: null,
    download: ne,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: B,
    enableBackground: null,
    end: null,
    event: null,
    exponent: B,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: B,
    fillRule: null,
    filter: null,
    filterRes: null,
    filterUnits: null,
    floodColor: null,
    floodOpacity: null,
    focusable: null,
    focusHighlight: null,
    fontFamily: null,
    fontSize: null,
    fontSizeAdjust: null,
    fontStretch: null,
    fontStyle: null,
    fontVariant: null,
    fontWeight: null,
    format: null,
    fr: null,
    from: null,
    fx: null,
    fy: null,
    g1: hn,
    g2: hn,
    glyphName: hn,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: B,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: B,
    horizOriginX: B,
    horizOriginY: B,
    id: null,
    ideographic: B,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: B,
    k: B,
    k1: B,
    k2: B,
    k3: B,
    k4: B,
    kernelMatrix: je,
    kernelUnitLength: null,
    keyPoints: null,
    // SEMI_COLON_SEPARATED
    keySplines: null,
    // SEMI_COLON_SEPARATED
    keyTimes: null,
    // SEMI_COLON_SEPARATED
    kerning: null,
    lang: null,
    lengthAdjust: null,
    letterSpacing: null,
    lightingColor: null,
    limitingConeAngle: B,
    local: null,
    markerEnd: null,
    markerMid: null,
    markerStart: null,
    markerHeight: null,
    markerUnits: null,
    markerWidth: null,
    mask: null,
    maskContentUnits: null,
    maskUnits: null,
    mathematical: null,
    max: null,
    media: null,
    mediaCharacterEncoding: null,
    mediaContentEncodings: null,
    mediaSize: B,
    mediaTime: null,
    method: null,
    min: null,
    mode: null,
    name: null,
    navDown: null,
    navDownLeft: null,
    navDownRight: null,
    navLeft: null,
    navNext: null,
    navPrev: null,
    navRight: null,
    navUp: null,
    navUpLeft: null,
    navUpRight: null,
    numOctaves: null,
    observer: null,
    offset: null,
    onAbort: null,
    onActivate: null,
    onAfterPrint: null,
    onBeforePrint: null,
    onBegin: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnd: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFocusIn: null,
    onFocusOut: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadStart: null,
    onMessage: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onMouseWheel: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRepeat: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onShow: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onZoom: null,
    opacity: null,
    operator: null,
    order: null,
    orient: null,
    orientation: null,
    origin: null,
    overflow: null,
    overlay: null,
    overlinePosition: B,
    overlineThickness: B,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: B,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: be,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: B,
    pointsAtY: B,
    pointsAtZ: B,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: je,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: je,
    rev: je,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: je,
    requiredFeatures: je,
    requiredFonts: je,
    requiredFormats: je,
    resource: null,
    restart: null,
    result: null,
    rotate: null,
    rx: null,
    ry: null,
    scale: null,
    seed: null,
    shapeRendering: null,
    side: null,
    slope: null,
    snapshotTime: null,
    specularConstant: B,
    specularExponent: B,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: B,
    strikethroughThickness: B,
    string: null,
    stroke: null,
    strokeDashArray: je,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: B,
    strokeOpacity: B,
    strokeWidth: null,
    style: null,
    surfaceScale: B,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: je,
    tabIndex: B,
    tableValues: null,
    target: null,
    targetX: B,
    targetY: B,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: je,
    to: null,
    transform: null,
    transformOrigin: null,
    u1: null,
    u2: null,
    underlinePosition: B,
    underlineThickness: B,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: B,
    values: null,
    vAlphabetic: B,
    vMathematical: B,
    vectorEffect: null,
    vHanging: B,
    vIdeographic: B,
    version: null,
    vertAdvY: B,
    vertOriginX: B,
    vertOriginY: B,
    viewBox: null,
    viewTarget: null,
    visibility: null,
    width: null,
    widths: null,
    wordSpacing: null,
    writingMode: null,
    x: null,
    x1: null,
    x2: null,
    xChannelSelector: null,
    xHeight: B,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  }
}), $p = /^data[-\w.:]+$/i, vu = /-[a-z]/g, Kp = /[A-Z]/g;
function eh(e, t) {
  const n = Zi(t);
  let r = t, i = Ke;
  if (n in e.normal)
    return e.property[e.normal[n]];
  if (n.length > 4 && n.slice(0, 4) === "data" && $p.test(t)) {
    if (t.charAt(4) === "-") {
      const o = t.slice(5).replace(vu, nh);
      r = "data" + o.charAt(0).toUpperCase() + o.slice(1);
    } else {
      const o = t.slice(4);
      if (!vu.test(o)) {
        let u = o.replace(Kp, th);
        u.charAt(0) !== "-" && (u = "-" + u), t = "data" + u;
      }
    }
    i = po;
  }
  return new i(r, t);
}
function th(e) {
  return "-" + e.toLowerCase();
}
function nh(e) {
  return e.charAt(1).toUpperCase();
}
const rh = {
  classId: "classID",
  dataType: "datatype",
  itemId: "itemID",
  strokeDashArray: "strokeDasharray",
  strokeDashOffset: "strokeDashoffset",
  strokeLineCap: "strokeLinecap",
  strokeLineJoin: "strokeLinejoin",
  strokeMiterLimit: "strokeMiterlimit",
  typeOf: "typeof",
  xLinkActuate: "xlinkActuate",
  xLinkArcRole: "xlinkArcrole",
  xLinkHref: "xlinkHref",
  xLinkRole: "xlinkRole",
  xLinkShow: "xlinkShow",
  xLinkTitle: "xlinkTitle",
  xLinkType: "xlinkType",
  xmlnsXLink: "xmlnsXlink"
}, ih = hs([bs, ms, Cs, vs, Qp], "html"), ho = hs([bs, ms, Cs, vs, qp], "svg");
function oh(e) {
  return e.join(" ").trim();
}
var xs = {}, xu = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, uh = /\n/g, ah = /^\s*/, sh = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, lh = /^:\s*/, ch = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, dh = /^[;\s]*/, fh = /^\s+|\s+$/g, ph = `
`, Au = "/", Su = "*", Yt = "", hh = "comment", gh = "declaration", mh = function(e, t) {
  if (typeof e != "string")
    throw new TypeError("First argument must be a string");
  if (!e) return [];
  t = t || {};
  var n = 1, r = 1;
  function i(y) {
    var m = y.match(uh);
    m && (n += m.length);
    var I = y.lastIndexOf(ph);
    r = ~I ? y.length - I : r + y.length;
  }
  function o() {
    var y = { line: n, column: r };
    return function(m) {
      return m.position = new u(y), l(), m;
    };
  }
  function u(y) {
    this.start = y, this.end = { line: n, column: r }, this.source = t.source;
  }
  u.prototype.content = e;
  function a(y) {
    var m = new Error(
      t.source + ":" + n + ":" + r + ": " + y
    );
    if (m.reason = y, m.filename = t.source, m.line = n, m.column = r, m.source = e, !t.silent) throw m;
  }
  function s(y) {
    var m = y.exec(e);
    if (m) {
      var I = m[0];
      return i(I), e = e.slice(I.length), m;
    }
  }
  function l() {
    s(ah);
  }
  function c(y) {
    var m;
    for (y = y || []; m = d(); )
      m !== !1 && y.push(m);
    return y;
  }
  function d() {
    var y = o();
    if (!(Au != e.charAt(0) || Su != e.charAt(1))) {
      for (var m = 2; Yt != e.charAt(m) && (Su != e.charAt(m) || Au != e.charAt(m + 1)); )
        ++m;
      if (m += 2, Yt === e.charAt(m - 1))
        return a("End of comment missing");
      var I = e.slice(2, m - 2);
      return r += 2, i(I), e = e.slice(m), r += 2, y({
        type: hh,
        comment: I
      });
    }
  }
  function p() {
    var y = o(), m = s(sh);
    if (m) {
      if (d(), !s(lh)) return a("property missing ':'");
      var I = s(ch), C = y({
        type: gh,
        property: wu(m[0].replace(xu, Yt)),
        value: I ? wu(I[0].replace(xu, Yt)) : Yt
      });
      return s(dh), C;
    }
  }
  function f() {
    var y = [];
    c(y);
    for (var m; m = p(); )
      m !== !1 && (y.push(m), c(y));
    return y;
  }
  return l(), f();
};
function wu(e) {
  return e ? e.replace(fh, Yt) : Yt;
}
var bh = dn && dn.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(xs, "__esModule", { value: !0 });
var Eu = xs.default = Ih, yh = bh(mh);
function Ih(e, t) {
  var n = null;
  if (!e || typeof e != "string")
    return n;
  var r = (0, yh.default)(e), i = typeof t == "function";
  return r.forEach(function(o) {
    if (o.type === "declaration") {
      var u = o.property, a = o.value;
      i ? t(u, a, o) : a && (n = n || {}, n[u] = a);
    }
  }), n;
}
const Ch = Eu.default || Eu, As = Ss("end"), go = Ss("start");
function Ss(e) {
  return t;
  function t(n) {
    const r = n && n.position && n.position[e] || {};
    if (typeof r.line == "number" && r.line > 0 && typeof r.column == "number" && r.column > 0)
      return {
        line: r.line,
        column: r.column,
        offset: typeof r.offset == "number" && r.offset > -1 ? r.offset : void 0
      };
  }
}
function vh(e) {
  const t = go(e), n = As(e);
  if (t && n)
    return { start: t, end: n };
}
function Zn(e) {
  return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? Fu(e.position) : "start" in e || "end" in e ? Fu(e) : "line" in e || "column" in e ? Ji(e) : "";
}
function Ji(e) {
  return Pu(e && e.line) + ":" + Pu(e && e.column);
}
function Fu(e) {
  return Ji(e && e.start) + "-" + Ji(e && e.end);
}
function Pu(e) {
  return e && typeof e == "number" ? e : 1;
}
class De extends Error {
  /**
   * Create a message for `reason`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {Options | null | undefined} [options]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | Options | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns
   *   Instance of `VFileMessage`.
   */
  // eslint-disable-next-line complexity
  constructor(t, n, r) {
    super(), typeof n == "string" && (r = n, n = void 0);
    let i = "", o = {}, u = !1;
    if (n && ("line" in n && "column" in n ? o = { place: n } : "start" in n && "end" in n ? o = { place: n } : "type" in n ? o = {
      ancestors: [n],
      place: n.position
    } : o = { ...n }), typeof t == "string" ? i = t : !o.cause && t && (u = !0, i = t.message, o.cause = t), !o.ruleId && !o.source && typeof r == "string") {
      const s = r.indexOf(":");
      s === -1 ? o.ruleId = r : (o.source = r.slice(0, s), o.ruleId = r.slice(s + 1));
    }
    if (!o.place && o.ancestors && o.ancestors) {
      const s = o.ancestors[o.ancestors.length - 1];
      s && (o.place = s.position);
    }
    const a = o.place && "start" in o.place ? o.place.start : o.place;
    this.ancestors = o.ancestors || void 0, this.cause = o.cause || void 0, this.column = a ? a.column : void 0, this.fatal = void 0, this.file, this.message = i, this.line = a ? a.line : void 0, this.name = Zn(o.place) || "1:1", this.place = o.place || void 0, this.reason = this.message, this.ruleId = o.ruleId || void 0, this.source = o.source || void 0, this.stack = u && o.cause && typeof o.cause.stack == "string" ? o.cause.stack : "", this.actual, this.expected, this.note, this.url;
  }
}
De.prototype.file = "";
De.prototype.name = "";
De.prototype.reason = "";
De.prototype.message = "";
De.prototype.stack = "";
De.prototype.column = void 0;
De.prototype.line = void 0;
De.prototype.ancestors = void 0;
De.prototype.cause = void 0;
De.prototype.fatal = void 0;
De.prototype.place = void 0;
De.prototype.ruleId = void 0;
De.prototype.source = void 0;
const mo = {}.hasOwnProperty, xh = /* @__PURE__ */ new Map(), Ah = /[A-Z]/g, Sh = /-([a-z])/g, wh = /* @__PURE__ */ new Set(["table", "tbody", "thead", "tfoot", "tr"]), Eh = /* @__PURE__ */ new Set(["td", "th"]), ws = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function Fh(e, t) {
  if (!t || t.Fragment === void 0)
    throw new TypeError("Expected `Fragment` in options");
  const n = t.filePath || void 0;
  let r;
  if (t.development) {
    if (typeof t.jsxDEV != "function")
      throw new TypeError(
        "Expected `jsxDEV` in options when `development: true`"
      );
    r = Vh(n, t.jsxDEV);
  } else {
    if (typeof t.jsx != "function")
      throw new TypeError("Expected `jsx` in production options");
    if (typeof t.jsxs != "function")
      throw new TypeError("Expected `jsxs` in production options");
    r = Th(n, t.jsx, t.jsxs);
  }
  const i = {
    Fragment: t.Fragment,
    ancestors: [],
    components: t.components || {},
    create: r,
    elementAttributeNameCase: t.elementAttributeNameCase || "react",
    evaluater: t.createEvaluater ? t.createEvaluater() : void 0,
    filePath: n,
    ignoreInvalidStyle: t.ignoreInvalidStyle || !1,
    passKeys: t.passKeys !== !1,
    passNode: t.passNode || !1,
    schema: t.space === "svg" ? ho : ih,
    stylePropertyNameCase: t.stylePropertyNameCase || "dom",
    tableCellAlignToStyle: t.tableCellAlignToStyle !== !1
  }, o = Es(i, e, void 0);
  return o && typeof o != "string" ? o : i.create(
    e,
    i.Fragment,
    { children: o || void 0 },
    void 0
  );
}
function Es(e, t, n) {
  if (t.type === "element")
    return Ph(e, t, n);
  if (t.type === "mdxFlowExpression" || t.type === "mdxTextExpression")
    return Gh(e, t);
  if (t.type === "mdxJsxFlowElement" || t.type === "mdxJsxTextElement")
    return kh(e, t, n);
  if (t.type === "mdxjsEsm")
    return Rh(e, t);
  if (t.type === "root")
    return Bh(e, t, n);
  if (t.type === "text")
    return Oh(e, t);
}
function Ph(e, t, n) {
  const r = e.schema;
  let i = r;
  t.tagName.toLowerCase() === "svg" && r.space === "html" && (i = ho, e.schema = i), e.ancestors.push(t);
  const o = Ps(e, t.tagName, !1), u = Dh(e, t);
  let a = yo(e, t);
  return wh.has(t.tagName) && (a = a.filter(function(s) {
    return typeof s == "string" ? !Yp(s) : !0;
  })), Fs(e, u, o, t), bo(u, a), e.ancestors.pop(), e.schema = r, e.create(t, o, u, n);
}
function Gh(e, t) {
  if (t.data && t.data.estree && e.evaluater) {
    const r = t.data.estree.body[0];
    return r.type, /** @type {Child | undefined} */
    e.evaluater.evaluateExpression(r.expression);
  }
  _n(e, t.position);
}
function Rh(e, t) {
  if (t.data && t.data.estree && e.evaluater)
    return (
      /** @type {Child | undefined} */
      e.evaluater.evaluateProgram(t.data.estree)
    );
  _n(e, t.position);
}
function kh(e, t, n) {
  const r = e.schema;
  let i = r;
  t.name === "svg" && r.space === "html" && (i = ho, e.schema = i), e.ancestors.push(t);
  const o = t.name === null ? e.Fragment : Ps(e, t.name, !0), u = Nh(e, t), a = yo(e, t);
  return Fs(e, u, o, t), bo(u, a), e.ancestors.pop(), e.schema = r, e.create(t, o, u, n);
}
function Bh(e, t, n) {
  const r = {};
  return bo(r, yo(e, t)), e.create(t, e.Fragment, r, n);
}
function Oh(e, t) {
  return t.value;
}
function Fs(e, t, n, r) {
  typeof n != "string" && n !== e.Fragment && e.passNode && (t.node = r);
}
function bo(e, t) {
  if (t.length > 0) {
    const n = t.length > 1 ? t : t[0];
    n && (e.children = n);
  }
}
function Th(e, t, n) {
  return r;
  function r(i, o, u, a) {
    const l = Array.isArray(u.children) ? n : t;
    return a ? l(o, u, a) : l(o, u);
  }
}
function Vh(e, t) {
  return n;
  function n(r, i, o, u) {
    const a = Array.isArray(o.children), s = go(r);
    return t(
      i,
      o,
      u,
      a,
      {
        columnNumber: s ? s.column - 1 : void 0,
        fileName: e,
        lineNumber: s ? s.line : void 0
      },
      void 0
    );
  }
}
function Dh(e, t) {
  const n = {};
  let r, i;
  for (i in t.properties)
    if (i !== "children" && mo.call(t.properties, i)) {
      const o = Mh(e, i, t.properties[i]);
      if (o) {
        const [u, a] = o;
        e.tableCellAlignToStyle && u === "align" && typeof a == "string" && Eh.has(t.tagName) ? r = a : n[u] = a;
      }
    }
  if (r) {
    const o = (
      /** @type {Style} */
      n.style || (n.style = {})
    );
    o[e.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = r;
  }
  return n;
}
function Nh(e, t) {
  const n = {};
  for (const r of t.attributes)
    if (r.type === "mdxJsxExpressionAttribute")
      if (r.data && r.data.estree && e.evaluater) {
        const o = r.data.estree.body[0];
        o.type;
        const u = o.expression;
        u.type;
        const a = u.properties[0];
        a.type, Object.assign(
          n,
          e.evaluater.evaluateExpression(a.argument)
        );
      } else
        _n(e, t.position);
    else {
      const i = r.name;
      let o;
      if (r.value && typeof r.value == "object")
        if (r.value.data && r.value.data.estree && e.evaluater) {
          const a = r.value.data.estree.body[0];
          a.type, o = e.evaluater.evaluateExpression(a.expression);
        } else
          _n(e, t.position);
      else
        o = r.value === null ? !0 : r.value;
      n[i] = /** @type {Props[keyof Props]} */
      o;
    }
  return n;
}
function yo(e, t) {
  const n = [];
  let r = -1;
  const i = e.passKeys ? /* @__PURE__ */ new Map() : xh;
  for (; ++r < t.children.length; ) {
    const o = t.children[r];
    let u;
    if (e.passKeys) {
      const s = o.type === "element" ? o.tagName : o.type === "mdxJsxFlowElement" || o.type === "mdxJsxTextElement" ? o.name : void 0;
      if (s) {
        const l = i.get(s) || 0;
        u = s + "-" + l, i.set(s, l + 1);
      }
    }
    const a = Es(e, o, u);
    a !== void 0 && n.push(a);
  }
  return n;
}
function Mh(e, t, n) {
  const r = eh(e.schema, t);
  if (!(n == null || typeof n == "number" && Number.isNaN(n))) {
    if (Array.isArray(n) && (n = r.commaSeparated ? Hp(n) : oh(n)), r.property === "style") {
      let i = typeof n == "object" ? n : Lh(e, String(n));
      return e.stylePropertyNameCase === "css" && (i = Xh(i)), ["style", i];
    }
    return [
      e.elementAttributeNameCase === "react" && r.space ? rh[r.property] || r.property : r.attribute,
      n
    ];
  }
}
function Lh(e, t) {
  const n = {};
  try {
    Ch(t, r);
  } catch (i) {
    if (!e.ignoreInvalidStyle) {
      const o = (
        /** @type {Error} */
        i
      ), u = new De("Cannot parse `style` attribute", {
        ancestors: e.ancestors,
        cause: o,
        ruleId: "style",
        source: "hast-util-to-jsx-runtime"
      });
      throw u.file = e.filePath || void 0, u.url = ws + "#cannot-parse-style-attribute", u;
    }
  }
  return n;
  function r(i, o) {
    let u = i;
    u.slice(0, 2) !== "--" && (u.slice(0, 4) === "-ms-" && (u = "ms-" + u.slice(4)), u = u.replace(Sh, Hh)), n[u] = o;
  }
}
function Ps(e, t, n) {
  let r;
  if (!n)
    r = { type: "Literal", value: t };
  else if (t.includes(".")) {
    const i = t.split(".");
    let o = -1, u;
    for (; ++o < i.length; ) {
      const a = yu(i[o]) ? { type: "Identifier", name: i[o] } : { type: "Literal", value: i[o] };
      u = u ? {
        type: "MemberExpression",
        object: u,
        property: a,
        computed: !!(o && a.type === "Literal"),
        optional: !1
      } : a;
    }
    r = u;
  } else
    r = yu(t) && !/^[a-z]/.test(t) ? { type: "Identifier", name: t } : { type: "Literal", value: t };
  if (r.type === "Literal") {
    const i = (
      /** @type {keyof JSX.IntrinsicElements} */
      r.value
    );
    return mo.call(e.components, i) ? e.components[i] : i;
  }
  if (e.evaluater)
    return e.evaluater.evaluateExpression(r);
  _n(e);
}
function _n(e, t) {
  const n = new De(
    "Cannot handle MDX estrees without `createEvaluater`",
    {
      ancestors: e.ancestors,
      place: t,
      ruleId: "mdx-estree",
      source: "hast-util-to-jsx-runtime"
    }
  );
  throw n.file = e.filePath || void 0, n.url = ws + "#cannot-handle-mdx-estrees-without-createevaluater", n;
}
function Xh(e) {
  const t = {};
  let n;
  for (n in e)
    mo.call(e, n) && (t[zh(n)] = e[n]);
  return t;
}
function zh(e) {
  let t = e.replace(Ah, Wh);
  return t.slice(0, 3) === "ms-" && (t = "-" + t), t;
}
function Hh(e, t) {
  return t.toUpperCase();
}
function Wh(e) {
  return "-" + e.toLowerCase();
}
const fi = {
  action: ["form"],
  cite: ["blockquote", "del", "ins", "q"],
  data: ["object"],
  formAction: ["button", "input"],
  href: ["a", "area", "base", "link"],
  icon: ["menuitem"],
  itemId: null,
  manifest: ["html"],
  ping: ["a", "area"],
  poster: ["video"],
  src: [
    "audio",
    "embed",
    "iframe",
    "img",
    "input",
    "script",
    "source",
    "track",
    "video"
  ]
}, Zh = {};
function jh(e, t) {
  const n = Zh, r = typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0, i = typeof n.includeHtml == "boolean" ? n.includeHtml : !0;
  return Gs(e, r, i);
}
function Gs(e, t, n) {
  if (Jh(e)) {
    if ("value" in e)
      return e.type === "html" && !n ? "" : e.value;
    if (t && "alt" in e && e.alt)
      return e.alt;
    if ("children" in e)
      return Gu(e.children, t, n);
  }
  return Array.isArray(e) ? Gu(e, t, n) : "";
}
function Gu(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; )
    r[i] = Gs(e[i], t, n);
  return r.join("");
}
function Jh(e) {
  return !!(e && typeof e == "object");
}
const Ru = document.createElement("i");
function Io(e) {
  const t = "&" + e + ";";
  Ru.innerHTML = t;
  const n = Ru.textContent;
  return n.charCodeAt(n.length - 1) === 59 && e !== "semi" || n === t ? !1 : n;
}
function mt(e, t, n, r) {
  const i = e.length;
  let o = 0, u;
  if (t < 0 ? t = -t > i ? 0 : i + t : t = t > i ? i : t, n = n > 0 ? n : 0, r.length < 1e4)
    u = Array.from(r), u.unshift(t, n), e.splice(...u);
  else
    for (n && e.splice(t, n); o < r.length; )
      u = r.slice(o, o + 1e4), u.unshift(t, 0), e.splice(...u), o += 1e4, t += 1e4;
}
function $e(e, t) {
  return e.length > 0 ? (mt(e, e.length, 0, t), e) : t;
}
const ku = {}.hasOwnProperty;
function Yh(e) {
  const t = {};
  let n = -1;
  for (; ++n < e.length; )
    _h(t, e[n]);
  return t;
}
function _h(e, t) {
  let n;
  for (n in t) {
    const i = (ku.call(e, n) ? e[n] : void 0) || (e[n] = {}), o = t[n];
    let u;
    if (o)
      for (u in o) {
        ku.call(i, u) || (i[u] = []);
        const a = o[u];
        Uh(
          // @ts-expect-error Looks like a list.
          i[u],
          Array.isArray(a) ? a : a ? [a] : []
        );
      }
  }
}
function Uh(e, t) {
  let n = -1;
  const r = [];
  for (; ++n < t.length; )
    (t[n].add === "after" ? e : r).push(t[n]);
  mt(e, 0, 0, r);
}
function Rs(e, t) {
  const n = Number.parseInt(e, t);
  return (
    // C0 except for HT, LF, FF, CR, space.
    n < 9 || n === 11 || n > 13 && n < 32 || // Control character (DEL) of C0, and C1 controls.
    n > 126 && n < 160 || // Lone high surrogates and low surrogates.
    n > 55295 && n < 57344 || // Noncharacters.
    n > 64975 && n < 65008 || /* eslint-disable no-bitwise */
    (n & 65535) === 65535 || (n & 65535) === 65534 || /* eslint-enable no-bitwise */
    // Out of range
    n > 1114111 ? "�" : String.fromCodePoint(n)
  );
}
function gn(e) {
  return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const ht = Xt(/[A-Za-z]/), Je = Xt(/[\dA-Za-z]/), Qh = Xt(/[#-'*+\--9=?A-Z^-~]/);
function Yi(e) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    e !== null && (e < 32 || e === 127)
  );
}
const _i = Xt(/\d/), qh = Xt(/[\dA-Fa-f]/), $h = Xt(/[!-/:-@[-`{-~]/);
function $(e) {
  return e !== null && e < -2;
}
function He(e) {
  return e !== null && (e < 0 || e === 32);
}
function he(e) {
  return e === -2 || e === -1 || e === 32;
}
const Kh = Xt(new RegExp("\\p{P}|\\p{S}", "u")), eg = Xt(/\s/);
function Xt(e) {
  return t;
  function t(n) {
    return n !== null && n > -1 && e.test(String.fromCharCode(n));
  }
}
function kn(e) {
  const t = [];
  let n = -1, r = 0, i = 0;
  for (; ++n < e.length; ) {
    const o = e.charCodeAt(n);
    let u = "";
    if (o === 37 && Je(e.charCodeAt(n + 1)) && Je(e.charCodeAt(n + 2)))
      i = 2;
    else if (o < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o)) || (u = String.fromCharCode(o));
    else if (o > 55295 && o < 57344) {
      const a = e.charCodeAt(n + 1);
      o < 56320 && a > 56319 && a < 57344 ? (u = String.fromCharCode(o, a), i = 1) : u = "�";
    } else
      u = String.fromCharCode(o);
    u && (t.push(e.slice(r, n), encodeURIComponent(u)), r = n + i + 1, u = ""), i && (n += i, i = 0);
  }
  return t.join("") + e.slice(r);
}
function ye(e, t, n, r) {
  const i = r ? r - 1 : Number.POSITIVE_INFINITY;
  let o = 0;
  return u;
  function u(s) {
    return he(s) ? (e.enter(n), a(s)) : t(s);
  }
  function a(s) {
    return he(s) && o++ < i ? (e.consume(s), a) : (e.exit(n), t(s));
  }
}
const tg = {
  tokenize: ng
};
function ng(e) {
  const t = e.attempt(this.parser.constructs.contentInitial, r, i);
  let n;
  return t;
  function r(a) {
    if (a === null) {
      e.consume(a);
      return;
    }
    return e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), ye(e, t, "linePrefix");
  }
  function i(a) {
    return e.enter("paragraph"), o(a);
  }
  function o(a) {
    const s = e.enter("chunkText", {
      contentType: "text",
      previous: n
    });
    return n && (n.next = s), n = s, u(a);
  }
  function u(a) {
    if (a === null) {
      e.exit("chunkText"), e.exit("paragraph"), e.consume(a);
      return;
    }
    return $(a) ? (e.consume(a), e.exit("chunkText"), o) : (e.consume(a), u);
  }
}
const rg = {
  tokenize: ig
}, Bu = {
  tokenize: og
};
function ig(e) {
  const t = this, n = [];
  let r = 0, i, o, u;
  return a;
  function a(E) {
    if (r < n.length) {
      const S = n[r];
      return t.containerState = S[1], e.attempt(S[0].continuation, s, l)(E);
    }
    return l(E);
  }
  function s(E) {
    if (r++, t.containerState._closeFlow) {
      t.containerState._closeFlow = void 0, i && A();
      const S = t.events.length;
      let P = S, w;
      for (; P--; )
        if (t.events[P][0] === "exit" && t.events[P][1].type === "chunkFlow") {
          w = t.events[P][1].end;
          break;
        }
      C(r);
      let k = S;
      for (; k < t.events.length; )
        t.events[k][1].end = {
          ...w
        }, k++;
      return mt(t.events, P + 1, 0, t.events.slice(S)), t.events.length = k, l(E);
    }
    return a(E);
  }
  function l(E) {
    if (r === n.length) {
      if (!i)
        return p(E);
      if (i.currentConstruct && i.currentConstruct.concrete)
        return y(E);
      t.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack);
    }
    return t.containerState = {}, e.check(Bu, c, d)(E);
  }
  function c(E) {
    return i && A(), C(r), p(E);
  }
  function d(E) {
    return t.parser.lazy[t.now().line] = r !== n.length, u = t.now().offset, y(E);
  }
  function p(E) {
    return t.containerState = {}, e.attempt(Bu, f, y)(E);
  }
  function f(E) {
    return r++, n.push([t.currentConstruct, t.containerState]), p(E);
  }
  function y(E) {
    if (E === null) {
      i && A(), C(0), e.consume(E);
      return;
    }
    return i = i || t.parser.flow(t.now()), e.enter("chunkFlow", {
      _tokenizer: i,
      contentType: "flow",
      previous: o
    }), m(E);
  }
  function m(E) {
    if (E === null) {
      I(e.exit("chunkFlow"), !0), C(0), e.consume(E);
      return;
    }
    return $(E) ? (e.consume(E), I(e.exit("chunkFlow")), r = 0, t.interrupt = void 0, a) : (e.consume(E), m);
  }
  function I(E, S) {
    const P = t.sliceStream(E);
    if (S && P.push(null), E.previous = o, o && (o.next = E), o = E, i.defineSkip(E.start), i.write(P), t.parser.lazy[E.start.line]) {
      let w = i.events.length;
      for (; w--; )
        if (
          // The token starts before the line ending…
          i.events[w][1].start.offset < u && // …and either is not ended yet…
          (!i.events[w][1].end || // …or ends after it.
          i.events[w][1].end.offset > u)
        )
          return;
      const k = t.events.length;
      let R = k, T, H;
      for (; R--; )
        if (t.events[R][0] === "exit" && t.events[R][1].type === "chunkFlow") {
          if (T) {
            H = t.events[R][1].end;
            break;
          }
          T = !0;
        }
      for (C(r), w = k; w < t.events.length; )
        t.events[w][1].end = {
          ...H
        }, w++;
      mt(t.events, R + 1, 0, t.events.slice(k)), t.events.length = w;
    }
  }
  function C(E) {
    let S = n.length;
    for (; S-- > E; ) {
      const P = n[S];
      t.containerState = P[1], P[0].exit.call(t, e);
    }
    n.length = E;
  }
  function A() {
    i.write([null]), o = void 0, i = void 0, t.containerState._closeFlow = void 0;
  }
}
function og(e, t, n) {
  return ye(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function Ou(e) {
  if (e === null || He(e) || eg(e))
    return 1;
  if (Kh(e))
    return 2;
}
function Co(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; ) {
    const o = e[i].resolveAll;
    o && !r.includes(o) && (t = o(t, n), r.push(o));
  }
  return t;
}
const Ui = {
  name: "attention",
  resolveAll: ug,
  tokenize: ag
};
function ug(e, t) {
  let n = -1, r, i, o, u, a, s, l, c;
  for (; ++n < e.length; )
    if (e[n][0] === "enter" && e[n][1].type === "attentionSequence" && e[n][1]._close) {
      for (r = n; r--; )
        if (e[r][0] === "exit" && e[r][1].type === "attentionSequence" && e[r][1]._open && // If the markers are the same:
        t.sliceSerialize(e[r][1]).charCodeAt(0) === t.sliceSerialize(e[n][1]).charCodeAt(0)) {
          if ((e[r][1]._close || e[n][1]._open) && (e[n][1].end.offset - e[n][1].start.offset) % 3 && !((e[r][1].end.offset - e[r][1].start.offset + e[n][1].end.offset - e[n][1].start.offset) % 3))
            continue;
          s = e[r][1].end.offset - e[r][1].start.offset > 1 && e[n][1].end.offset - e[n][1].start.offset > 1 ? 2 : 1;
          const d = {
            ...e[r][1].end
          }, p = {
            ...e[n][1].start
          };
          Tu(d, -s), Tu(p, s), u = {
            type: s > 1 ? "strongSequence" : "emphasisSequence",
            start: d,
            end: {
              ...e[r][1].end
            }
          }, a = {
            type: s > 1 ? "strongSequence" : "emphasisSequence",
            start: {
              ...e[n][1].start
            },
            end: p
          }, o = {
            type: s > 1 ? "strongText" : "emphasisText",
            start: {
              ...e[r][1].end
            },
            end: {
              ...e[n][1].start
            }
          }, i = {
            type: s > 1 ? "strong" : "emphasis",
            start: {
              ...u.start
            },
            end: {
              ...a.end
            }
          }, e[r][1].end = {
            ...u.start
          }, e[n][1].start = {
            ...a.end
          }, l = [], e[r][1].end.offset - e[r][1].start.offset && (l = $e(l, [["enter", e[r][1], t], ["exit", e[r][1], t]])), l = $e(l, [["enter", i, t], ["enter", u, t], ["exit", u, t], ["enter", o, t]]), l = $e(l, Co(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t)), l = $e(l, [["exit", o, t], ["enter", a, t], ["exit", a, t], ["exit", i, t]]), e[n][1].end.offset - e[n][1].start.offset ? (c = 2, l = $e(l, [["enter", e[n][1], t], ["exit", e[n][1], t]])) : c = 0, mt(e, r - 1, n - r + 3, l), n = r + l.length - c - 2;
          break;
        }
    }
  for (n = -1; ++n < e.length; )
    e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
  return e;
}
function ag(e, t) {
  const n = this.parser.constructs.attentionMarkers.null, r = this.previous, i = Ou(r);
  let o;
  return u;
  function u(s) {
    return o = s, e.enter("attentionSequence"), a(s);
  }
  function a(s) {
    if (s === o)
      return e.consume(s), a;
    const l = e.exit("attentionSequence"), c = Ou(s), d = !c || c === 2 && i || n.includes(s), p = !i || i === 2 && c || n.includes(r);
    return l._open = !!(o === 42 ? d : d && (i || !p)), l._close = !!(o === 42 ? p : p && (c || !d)), t(s);
  }
}
function Tu(e, t) {
  e.column += t, e.offset += t, e._bufferIndex += t;
}
const sg = {
  name: "autolink",
  tokenize: lg
};
function lg(e, t, n) {
  let r = 0;
  return i;
  function i(f) {
    return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(f), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), o;
  }
  function o(f) {
    return ht(f) ? (e.consume(f), u) : f === 64 ? n(f) : l(f);
  }
  function u(f) {
    return f === 43 || f === 45 || f === 46 || Je(f) ? (r = 1, a(f)) : l(f);
  }
  function a(f) {
    return f === 58 ? (e.consume(f), r = 0, s) : (f === 43 || f === 45 || f === 46 || Je(f)) && r++ < 32 ? (e.consume(f), a) : (r = 0, l(f));
  }
  function s(f) {
    return f === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(f), e.exit("autolinkMarker"), e.exit("autolink"), t) : f === null || f === 32 || f === 60 || Yi(f) ? n(f) : (e.consume(f), s);
  }
  function l(f) {
    return f === 64 ? (e.consume(f), c) : Qh(f) ? (e.consume(f), l) : n(f);
  }
  function c(f) {
    return Je(f) ? d(f) : n(f);
  }
  function d(f) {
    return f === 46 ? (e.consume(f), r = 0, c) : f === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(f), e.exit("autolinkMarker"), e.exit("autolink"), t) : p(f);
  }
  function p(f) {
    if ((f === 45 || Je(f)) && r++ < 63) {
      const y = f === 45 ? p : d;
      return e.consume(f), y;
    }
    return n(f);
  }
}
const Wr = {
  partial: !0,
  tokenize: cg
};
function cg(e, t, n) {
  return r;
  function r(o) {
    return he(o) ? ye(e, i, "linePrefix")(o) : i(o);
  }
  function i(o) {
    return o === null || $(o) ? t(o) : n(o);
  }
}
const ks = {
  continuation: {
    tokenize: fg
  },
  exit: pg,
  name: "blockQuote",
  tokenize: dg
};
function dg(e, t, n) {
  const r = this;
  return i;
  function i(u) {
    if (u === 62) {
      const a = r.containerState;
      return a.open || (e.enter("blockQuote", {
        _container: !0
      }), a.open = !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(u), e.exit("blockQuoteMarker"), o;
    }
    return n(u);
  }
  function o(u) {
    return he(u) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(u), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(u));
  }
}
function fg(e, t, n) {
  const r = this;
  return i;
  function i(u) {
    return he(u) ? ye(e, o, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(u) : o(u);
  }
  function o(u) {
    return e.attempt(ks, t, n)(u);
  }
}
function pg(e) {
  e.exit("blockQuote");
}
const Bs = {
  name: "characterEscape",
  tokenize: hg
};
function hg(e, t, n) {
  return r;
  function r(o) {
    return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(o), e.exit("escapeMarker"), i;
  }
  function i(o) {
    return $h(o) ? (e.enter("characterEscapeValue"), e.consume(o), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(o);
  }
}
const Os = {
  name: "characterReference",
  tokenize: gg
};
function gg(e, t, n) {
  const r = this;
  let i = 0, o, u;
  return a;
  function a(d) {
    return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(d), e.exit("characterReferenceMarker"), s;
  }
  function s(d) {
    return d === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(d), e.exit("characterReferenceMarkerNumeric"), l) : (e.enter("characterReferenceValue"), o = 31, u = Je, c(d));
  }
  function l(d) {
    return d === 88 || d === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(d), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), o = 6, u = qh, c) : (e.enter("characterReferenceValue"), o = 7, u = _i, c(d));
  }
  function c(d) {
    if (d === 59 && i) {
      const p = e.exit("characterReferenceValue");
      return u === Je && !Io(r.sliceSerialize(p)) ? n(d) : (e.enter("characterReferenceMarker"), e.consume(d), e.exit("characterReferenceMarker"), e.exit("characterReference"), t);
    }
    return u(d) && i++ < o ? (e.consume(d), c) : n(d);
  }
}
const Vu = {
  partial: !0,
  tokenize: bg
}, Du = {
  concrete: !0,
  name: "codeFenced",
  tokenize: mg
};
function mg(e, t, n) {
  const r = this, i = {
    partial: !0,
    tokenize: P
  };
  let o = 0, u = 0, a;
  return s;
  function s(w) {
    return l(w);
  }
  function l(w) {
    const k = r.events[r.events.length - 1];
    return o = k && k[1].type === "linePrefix" ? k[2].sliceSerialize(k[1], !0).length : 0, a = w, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), c(w);
  }
  function c(w) {
    return w === a ? (u++, e.consume(w), c) : u < 3 ? n(w) : (e.exit("codeFencedFenceSequence"), he(w) ? ye(e, d, "whitespace")(w) : d(w));
  }
  function d(w) {
    return w === null || $(w) ? (e.exit("codeFencedFence"), r.interrupt ? t(w) : e.check(Vu, m, S)(w)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
      contentType: "string"
    }), p(w));
  }
  function p(w) {
    return w === null || $(w) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), d(w)) : he(w) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), ye(e, f, "whitespace")(w)) : w === 96 && w === a ? n(w) : (e.consume(w), p);
  }
  function f(w) {
    return w === null || $(w) ? d(w) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
      contentType: "string"
    }), y(w));
  }
  function y(w) {
    return w === null || $(w) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), d(w)) : w === 96 && w === a ? n(w) : (e.consume(w), y);
  }
  function m(w) {
    return e.attempt(i, S, I)(w);
  }
  function I(w) {
    return e.enter("lineEnding"), e.consume(w), e.exit("lineEnding"), C;
  }
  function C(w) {
    return o > 0 && he(w) ? ye(e, A, "linePrefix", o + 1)(w) : A(w);
  }
  function A(w) {
    return w === null || $(w) ? e.check(Vu, m, S)(w) : (e.enter("codeFlowValue"), E(w));
  }
  function E(w) {
    return w === null || $(w) ? (e.exit("codeFlowValue"), A(w)) : (e.consume(w), E);
  }
  function S(w) {
    return e.exit("codeFenced"), t(w);
  }
  function P(w, k, R) {
    let T = 0;
    return H;
    function H(M) {
      return w.enter("lineEnding"), w.consume(M), w.exit("lineEnding"), N;
    }
    function N(M) {
      return w.enter("codeFencedFence"), he(M) ? ye(w, O, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(M) : O(M);
    }
    function O(M) {
      return M === a ? (w.enter("codeFencedFenceSequence"), K(M)) : R(M);
    }
    function K(M) {
      return M === a ? (T++, w.consume(M), K) : T >= u ? (w.exit("codeFencedFenceSequence"), he(M) ? ye(w, ie, "whitespace")(M) : ie(M)) : R(M);
    }
    function ie(M) {
      return M === null || $(M) ? (w.exit("codeFencedFence"), k(M)) : R(M);
    }
  }
}
function bg(e, t, n) {
  const r = this;
  return i;
  function i(u) {
    return u === null ? n(u) : (e.enter("lineEnding"), e.consume(u), e.exit("lineEnding"), o);
  }
  function o(u) {
    return r.parser.lazy[r.now().line] ? n(u) : t(u);
  }
}
const pi = {
  name: "codeIndented",
  tokenize: Ig
}, yg = {
  partial: !0,
  tokenize: Cg
};
function Ig(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return e.enter("codeIndented"), ye(e, o, "linePrefix", 5)(l);
  }
  function o(l) {
    const c = r.events[r.events.length - 1];
    return c && c[1].type === "linePrefix" && c[2].sliceSerialize(c[1], !0).length >= 4 ? u(l) : n(l);
  }
  function u(l) {
    return l === null ? s(l) : $(l) ? e.attempt(yg, u, s)(l) : (e.enter("codeFlowValue"), a(l));
  }
  function a(l) {
    return l === null || $(l) ? (e.exit("codeFlowValue"), u(l)) : (e.consume(l), a);
  }
  function s(l) {
    return e.exit("codeIndented"), t(l);
  }
}
function Cg(e, t, n) {
  const r = this;
  return i;
  function i(u) {
    return r.parser.lazy[r.now().line] ? n(u) : $(u) ? (e.enter("lineEnding"), e.consume(u), e.exit("lineEnding"), i) : ye(e, o, "linePrefix", 5)(u);
  }
  function o(u) {
    const a = r.events[r.events.length - 1];
    return a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(u) : $(u) ? i(u) : n(u);
  }
}
const vg = {
  name: "codeText",
  previous: Ag,
  resolve: xg,
  tokenize: Sg
};
function xg(e) {
  let t = e.length - 4, n = 3, r, i;
  if ((e[n][1].type === "lineEnding" || e[n][1].type === "space") && (e[t][1].type === "lineEnding" || e[t][1].type === "space")) {
    for (r = n; ++r < t; )
      if (e[r][1].type === "codeTextData") {
        e[n][1].type = "codeTextPadding", e[t][1].type = "codeTextPadding", n += 2, t -= 2;
        break;
      }
  }
  for (r = n - 1, t++; ++r <= t; )
    i === void 0 ? r !== t && e[r][1].type !== "lineEnding" && (i = r) : (r === t || e[r][1].type === "lineEnding") && (e[i][1].type = "codeTextData", r !== i + 2 && (e[i][1].end = e[r - 1][1].end, e.splice(i + 2, r - i - 2), t -= r - i - 2, r = i + 2), i = void 0);
  return e;
}
function Ag(e) {
  return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function Sg(e, t, n) {
  let r = 0, i, o;
  return u;
  function u(d) {
    return e.enter("codeText"), e.enter("codeTextSequence"), a(d);
  }
  function a(d) {
    return d === 96 ? (e.consume(d), r++, a) : (e.exit("codeTextSequence"), s(d));
  }
  function s(d) {
    return d === null ? n(d) : d === 32 ? (e.enter("space"), e.consume(d), e.exit("space"), s) : d === 96 ? (o = e.enter("codeTextSequence"), i = 0, c(d)) : $(d) ? (e.enter("lineEnding"), e.consume(d), e.exit("lineEnding"), s) : (e.enter("codeTextData"), l(d));
  }
  function l(d) {
    return d === null || d === 32 || d === 96 || $(d) ? (e.exit("codeTextData"), s(d)) : (e.consume(d), l);
  }
  function c(d) {
    return d === 96 ? (e.consume(d), i++, c) : i === r ? (e.exit("codeTextSequence"), e.exit("codeText"), t(d)) : (o.type = "codeTextData", l(d));
  }
}
class wg {
  /**
   * @param {ReadonlyArray<T> | null | undefined} [initial]
   *   Initial items (optional).
   * @returns
   *   Splice buffer.
   */
  constructor(t) {
    this.left = t ? [...t] : [], this.right = [];
  }
  /**
   * Array access;
   * does not move the cursor.
   *
   * @param {number} index
   *   Index.
   * @return {T}
   *   Item.
   */
  get(t) {
    if (t < 0 || t >= this.left.length + this.right.length)
      throw new RangeError("Cannot access index `" + t + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
    return t < this.left.length ? this.left[t] : this.right[this.right.length - t + this.left.length - 1];
  }
  /**
   * The length of the splice buffer, one greater than the largest index in the
   * array.
   */
  get length() {
    return this.left.length + this.right.length;
  }
  /**
   * Remove and return `list[0]`;
   * moves the cursor to `0`.
   *
   * @returns {T | undefined}
   *   Item, optional.
   */
  shift() {
    return this.setCursor(0), this.right.pop();
  }
  /**
   * Slice the buffer to get an array;
   * does not move the cursor.
   *
   * @param {number} start
   *   Start.
   * @param {number | null | undefined} [end]
   *   End (optional).
   * @returns {Array<T>}
   *   Array of items.
   */
  slice(t, n) {
    const r = n ?? Number.POSITIVE_INFINITY;
    return r < this.left.length ? this.left.slice(t, r) : t > this.left.length ? this.right.slice(this.right.length - r + this.left.length, this.right.length - t + this.left.length).reverse() : this.left.slice(t).concat(this.right.slice(this.right.length - r + this.left.length).reverse());
  }
  /**
   * Mimics the behavior of Array.prototype.splice() except for the change of
   * interface necessary to avoid segfaults when patching in very large arrays.
   *
   * This operation moves cursor is moved to `start` and results in the cursor
   * placed after any inserted items.
   *
   * @param {number} start
   *   Start;
   *   zero-based index at which to start changing the array;
   *   negative numbers count backwards from the end of the array and values
   *   that are out-of bounds are clamped to the appropriate end of the array.
   * @param {number | null | undefined} [deleteCount=0]
   *   Delete count (default: `0`);
   *   maximum number of elements to delete, starting from start.
   * @param {Array<T> | null | undefined} [items=[]]
   *   Items to include in place of the deleted items (default: `[]`).
   * @return {Array<T>}
   *   Any removed items.
   */
  splice(t, n, r) {
    const i = n || 0;
    this.setCursor(Math.trunc(t));
    const o = this.right.splice(this.right.length - i, Number.POSITIVE_INFINITY);
    return r && Mn(this.left, r), o.reverse();
  }
  /**
   * Remove and return the highest-numbered item in the array, so
   * `list[list.length - 1]`;
   * Moves the cursor to `length`.
   *
   * @returns {T | undefined}
   *   Item, optional.
   */
  pop() {
    return this.setCursor(Number.POSITIVE_INFINITY), this.left.pop();
  }
  /**
   * Inserts a single item to the high-numbered side of the array;
   * moves the cursor to `length`.
   *
   * @param {T} item
   *   Item.
   * @returns {undefined}
   *   Nothing.
   */
  push(t) {
    this.setCursor(Number.POSITIVE_INFINITY), this.left.push(t);
  }
  /**
   * Inserts many items to the high-numbered side of the array.
   * Moves the cursor to `length`.
   *
   * @param {Array<T>} items
   *   Items.
   * @returns {undefined}
   *   Nothing.
   */
  pushMany(t) {
    this.setCursor(Number.POSITIVE_INFINITY), Mn(this.left, t);
  }
  /**
   * Inserts a single item to the low-numbered side of the array;
   * Moves the cursor to `0`.
   *
   * @param {T} item
   *   Item.
   * @returns {undefined}
   *   Nothing.
   */
  unshift(t) {
    this.setCursor(0), this.right.push(t);
  }
  /**
   * Inserts many items to the low-numbered side of the array;
   * moves the cursor to `0`.
   *
   * @param {Array<T>} items
   *   Items.
   * @returns {undefined}
   *   Nothing.
   */
  unshiftMany(t) {
    this.setCursor(0), Mn(this.right, t.reverse());
  }
  /**
   * Move the cursor to a specific position in the array. Requires
   * time proportional to the distance moved.
   *
   * If `n < 0`, the cursor will end up at the beginning.
   * If `n > length`, the cursor will end up at the end.
   *
   * @param {number} n
   *   Position.
   * @return {undefined}
   *   Nothing.
   */
  setCursor(t) {
    if (!(t === this.left.length || t > this.left.length && this.right.length === 0 || t < 0 && this.left.length === 0))
      if (t < this.left.length) {
        const n = this.left.splice(t, Number.POSITIVE_INFINITY);
        Mn(this.right, n.reverse());
      } else {
        const n = this.right.splice(this.left.length + this.right.length - t, Number.POSITIVE_INFINITY);
        Mn(this.left, n.reverse());
      }
  }
}
function Mn(e, t) {
  let n = 0;
  if (t.length < 1e4)
    e.push(...t);
  else
    for (; n < t.length; )
      e.push(...t.slice(n, n + 1e4)), n += 1e4;
}
function Ts(e) {
  const t = {};
  let n = -1, r, i, o, u, a, s, l;
  const c = new wg(e);
  for (; ++n < c.length; ) {
    for (; n in t; )
      n = t[n];
    if (r = c.get(n), n && r[1].type === "chunkFlow" && c.get(n - 1)[1].type === "listItemPrefix" && (s = r[1]._tokenizer.events, o = 0, o < s.length && s[o][1].type === "lineEndingBlank" && (o += 2), o < s.length && s[o][1].type === "content"))
      for (; ++o < s.length && s[o][1].type !== "content"; )
        s[o][1].type === "chunkText" && (s[o][1]._isInFirstContentOfListItem = !0, o++);
    if (r[0] === "enter")
      r[1].contentType && (Object.assign(t, Eg(c, n)), n = t[n], l = !0);
    else if (r[1]._container) {
      for (o = n, i = void 0; o--; )
        if (u = c.get(o), u[1].type === "lineEnding" || u[1].type === "lineEndingBlank")
          u[0] === "enter" && (i && (c.get(i)[1].type = "lineEndingBlank"), u[1].type = "lineEnding", i = o);
        else if (u[1].type !== "linePrefix") break;
      i && (r[1].end = {
        ...c.get(i)[1].start
      }, a = c.slice(i, n), a.unshift(r), c.splice(i, n - i + 1, a));
    }
  }
  return mt(e, 0, Number.POSITIVE_INFINITY, c.slice(0)), !l;
}
function Eg(e, t) {
  const n = e.get(t)[1], r = e.get(t)[2];
  let i = t - 1;
  const o = [], u = n._tokenizer || r.parser[n.contentType](n.start), a = u.events, s = [], l = {};
  let c, d, p = -1, f = n, y = 0, m = 0;
  const I = [m];
  for (; f; ) {
    for (; e.get(++i)[1] !== f; )
      ;
    o.push(i), f._tokenizer || (c = r.sliceStream(f), f.next || c.push(null), d && u.defineSkip(f.start), f._isInFirstContentOfListItem && (u._gfmTasklistFirstContentOfListItem = !0), u.write(c), f._isInFirstContentOfListItem && (u._gfmTasklistFirstContentOfListItem = void 0)), d = f, f = f.next;
  }
  for (f = n; ++p < a.length; )
    // Find a void token that includes a break.
    a[p][0] === "exit" && a[p - 1][0] === "enter" && a[p][1].type === a[p - 1][1].type && a[p][1].start.line !== a[p][1].end.line && (m = p + 1, I.push(m), f._tokenizer = void 0, f.previous = void 0, f = f.next);
  for (u.events = [], f ? (f._tokenizer = void 0, f.previous = void 0) : I.pop(), p = I.length; p--; ) {
    const C = a.slice(I[p], I[p + 1]), A = o.pop();
    s.push([A, A + C.length - 1]), e.splice(A, 2, C);
  }
  for (s.reverse(), p = -1; ++p < s.length; )
    l[y + s[p][0]] = y + s[p][1], y += s[p][1] - s[p][0] - 1;
  return l;
}
const Fg = {
  resolve: Gg,
  tokenize: Rg
}, Pg = {
  partial: !0,
  tokenize: kg
};
function Gg(e) {
  return Ts(e), e;
}
function Rg(e, t) {
  let n;
  return r;
  function r(a) {
    return e.enter("content"), n = e.enter("chunkContent", {
      contentType: "content"
    }), i(a);
  }
  function i(a) {
    return a === null ? o(a) : $(a) ? e.check(Pg, u, o)(a) : (e.consume(a), i);
  }
  function o(a) {
    return e.exit("chunkContent"), e.exit("content"), t(a);
  }
  function u(a) {
    return e.consume(a), e.exit("chunkContent"), n.next = e.enter("chunkContent", {
      contentType: "content",
      previous: n
    }), n = n.next, i;
  }
}
function kg(e, t, n) {
  const r = this;
  return i;
  function i(u) {
    return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(u), e.exit("lineEnding"), ye(e, o, "linePrefix");
  }
  function o(u) {
    if (u === null || $(u))
      return n(u);
    const a = r.events[r.events.length - 1];
    return !r.parser.constructs.disable.null.includes("codeIndented") && a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(u) : e.interrupt(r.parser.constructs.flow, n, t)(u);
  }
}
function Vs(e, t, n, r, i, o, u, a, s) {
  const l = s || Number.POSITIVE_INFINITY;
  let c = 0;
  return d;
  function d(C) {
    return C === 60 ? (e.enter(r), e.enter(i), e.enter(o), e.consume(C), e.exit(o), p) : C === null || C === 32 || C === 41 || Yi(C) ? n(C) : (e.enter(r), e.enter(u), e.enter(a), e.enter("chunkString", {
      contentType: "string"
    }), m(C));
  }
  function p(C) {
    return C === 62 ? (e.enter(o), e.consume(C), e.exit(o), e.exit(i), e.exit(r), t) : (e.enter(a), e.enter("chunkString", {
      contentType: "string"
    }), f(C));
  }
  function f(C) {
    return C === 62 ? (e.exit("chunkString"), e.exit(a), p(C)) : C === null || C === 60 || $(C) ? n(C) : (e.consume(C), C === 92 ? y : f);
  }
  function y(C) {
    return C === 60 || C === 62 || C === 92 ? (e.consume(C), f) : f(C);
  }
  function m(C) {
    return !c && (C === null || C === 41 || He(C)) ? (e.exit("chunkString"), e.exit(a), e.exit(u), e.exit(r), t(C)) : c < l && C === 40 ? (e.consume(C), c++, m) : C === 41 ? (e.consume(C), c--, m) : C === null || C === 32 || C === 40 || Yi(C) ? n(C) : (e.consume(C), C === 92 ? I : m);
  }
  function I(C) {
    return C === 40 || C === 41 || C === 92 ? (e.consume(C), m) : m(C);
  }
}
function Ds(e, t, n, r, i, o) {
  const u = this;
  let a = 0, s;
  return l;
  function l(f) {
    return e.enter(r), e.enter(i), e.consume(f), e.exit(i), e.enter(o), c;
  }
  function c(f) {
    return a > 999 || f === null || f === 91 || f === 93 && !s || // To do: remove in the future once we’ve switched from
    // `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
    // which doesn’t need this.
    // Hidden footnotes hook.
    /* c8 ignore next 3 */
    f === 94 && !a && "_hiddenFootnoteSupport" in u.parser.constructs ? n(f) : f === 93 ? (e.exit(o), e.enter(i), e.consume(f), e.exit(i), e.exit(r), t) : $(f) ? (e.enter("lineEnding"), e.consume(f), e.exit("lineEnding"), c) : (e.enter("chunkString", {
      contentType: "string"
    }), d(f));
  }
  function d(f) {
    return f === null || f === 91 || f === 93 || $(f) || a++ > 999 ? (e.exit("chunkString"), c(f)) : (e.consume(f), s || (s = !he(f)), f === 92 ? p : d);
  }
  function p(f) {
    return f === 91 || f === 92 || f === 93 ? (e.consume(f), a++, d) : d(f);
  }
}
function Ns(e, t, n, r, i, o) {
  let u;
  return a;
  function a(p) {
    return p === 34 || p === 39 || p === 40 ? (e.enter(r), e.enter(i), e.consume(p), e.exit(i), u = p === 40 ? 41 : p, s) : n(p);
  }
  function s(p) {
    return p === u ? (e.enter(i), e.consume(p), e.exit(i), e.exit(r), t) : (e.enter(o), l(p));
  }
  function l(p) {
    return p === u ? (e.exit(o), s(u)) : p === null ? n(p) : $(p) ? (e.enter("lineEnding"), e.consume(p), e.exit("lineEnding"), ye(e, l, "linePrefix")) : (e.enter("chunkString", {
      contentType: "string"
    }), c(p));
  }
  function c(p) {
    return p === u || p === null || $(p) ? (e.exit("chunkString"), l(p)) : (e.consume(p), p === 92 ? d : c);
  }
  function d(p) {
    return p === u || p === 92 ? (e.consume(p), c) : c(p);
  }
}
function jn(e, t) {
  let n;
  return r;
  function r(i) {
    return $(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), n = !0, r) : he(i) ? ye(e, r, n ? "linePrefix" : "lineSuffix")(i) : t(i);
  }
}
const Bg = {
  name: "definition",
  tokenize: Tg
}, Og = {
  partial: !0,
  tokenize: Vg
};
function Tg(e, t, n) {
  const r = this;
  let i;
  return o;
  function o(f) {
    return e.enter("definition"), u(f);
  }
  function u(f) {
    return Ds.call(
      r,
      e,
      a,
      // Note: we don’t need to reset the way `markdown-rs` does.
      n,
      "definitionLabel",
      "definitionLabelMarker",
      "definitionLabelString"
    )(f);
  }
  function a(f) {
    return i = gn(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), f === 58 ? (e.enter("definitionMarker"), e.consume(f), e.exit("definitionMarker"), s) : n(f);
  }
  function s(f) {
    return He(f) ? jn(e, l)(f) : l(f);
  }
  function l(f) {
    return Vs(
      e,
      c,
      // Note: we don’t need to reset the way `markdown-rs` does.
      n,
      "definitionDestination",
      "definitionDestinationLiteral",
      "definitionDestinationLiteralMarker",
      "definitionDestinationRaw",
      "definitionDestinationString"
    )(f);
  }
  function c(f) {
    return e.attempt(Og, d, d)(f);
  }
  function d(f) {
    return he(f) ? ye(e, p, "whitespace")(f) : p(f);
  }
  function p(f) {
    return f === null || $(f) ? (e.exit("definition"), r.parser.defined.push(i), t(f)) : n(f);
  }
}
function Vg(e, t, n) {
  return r;
  function r(a) {
    return He(a) ? jn(e, i)(a) : n(a);
  }
  function i(a) {
    return Ns(e, o, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(a);
  }
  function o(a) {
    return he(a) ? ye(e, u, "whitespace")(a) : u(a);
  }
  function u(a) {
    return a === null || $(a) ? t(a) : n(a);
  }
}
const Dg = {
  name: "hardBreakEscape",
  tokenize: Ng
};
function Ng(e, t, n) {
  return r;
  function r(o) {
    return e.enter("hardBreakEscape"), e.consume(o), i;
  }
  function i(o) {
    return $(o) ? (e.exit("hardBreakEscape"), t(o)) : n(o);
  }
}
const Mg = {
  name: "headingAtx",
  resolve: Lg,
  tokenize: Xg
};
function Lg(e, t) {
  let n = e.length - 2, r = 3, i, o;
  return e[r][1].type === "whitespace" && (r += 2), n - 2 > r && e[n][1].type === "whitespace" && (n -= 2), e[n][1].type === "atxHeadingSequence" && (r === n - 1 || n - 4 > r && e[n - 2][1].type === "whitespace") && (n -= r + 1 === n ? 2 : 4), n > r && (i = {
    type: "atxHeadingText",
    start: e[r][1].start,
    end: e[n][1].end
  }, o = {
    type: "chunkText",
    start: e[r][1].start,
    end: e[n][1].end,
    contentType: "text"
  }, mt(e, r, n - r + 1, [["enter", i, t], ["enter", o, t], ["exit", o, t], ["exit", i, t]])), e;
}
function Xg(e, t, n) {
  let r = 0;
  return i;
  function i(c) {
    return e.enter("atxHeading"), o(c);
  }
  function o(c) {
    return e.enter("atxHeadingSequence"), u(c);
  }
  function u(c) {
    return c === 35 && r++ < 6 ? (e.consume(c), u) : c === null || He(c) ? (e.exit("atxHeadingSequence"), a(c)) : n(c);
  }
  function a(c) {
    return c === 35 ? (e.enter("atxHeadingSequence"), s(c)) : c === null || $(c) ? (e.exit("atxHeading"), t(c)) : he(c) ? ye(e, a, "whitespace")(c) : (e.enter("atxHeadingText"), l(c));
  }
  function s(c) {
    return c === 35 ? (e.consume(c), s) : (e.exit("atxHeadingSequence"), a(c));
  }
  function l(c) {
    return c === null || c === 35 || He(c) ? (e.exit("atxHeadingText"), a(c)) : (e.consume(c), l);
  }
}
const zg = [
  "address",
  "article",
  "aside",
  "base",
  "basefont",
  "blockquote",
  "body",
  "caption",
  "center",
  "col",
  "colgroup",
  "dd",
  "details",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "iframe",
  "legend",
  "li",
  "link",
  "main",
  "menu",
  "menuitem",
  "nav",
  "noframes",
  "ol",
  "optgroup",
  "option",
  "p",
  "param",
  "search",
  "section",
  "summary",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "title",
  "tr",
  "track",
  "ul"
], Nu = ["pre", "script", "style", "textarea"], Hg = {
  concrete: !0,
  name: "htmlFlow",
  resolveTo: jg,
  tokenize: Jg
}, Wg = {
  partial: !0,
  tokenize: _g
}, Zg = {
  partial: !0,
  tokenize: Yg
};
function jg(e) {
  let t = e.length;
  for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"); )
    ;
  return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
}
function Jg(e, t, n) {
  const r = this;
  let i, o, u, a, s;
  return l;
  function l(g) {
    return c(g);
  }
  function c(g) {
    return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(g), d;
  }
  function d(g) {
    return g === 33 ? (e.consume(g), p) : g === 47 ? (e.consume(g), o = !0, m) : g === 63 ? (e.consume(g), i = 3, r.interrupt ? t : b) : ht(g) ? (e.consume(g), u = String.fromCharCode(g), I) : n(g);
  }
  function p(g) {
    return g === 45 ? (e.consume(g), i = 2, f) : g === 91 ? (e.consume(g), i = 5, a = 0, y) : ht(g) ? (e.consume(g), i = 4, r.interrupt ? t : b) : n(g);
  }
  function f(g) {
    return g === 45 ? (e.consume(g), r.interrupt ? t : b) : n(g);
  }
  function y(g) {
    const pe = "CDATA[";
    return g === pe.charCodeAt(a++) ? (e.consume(g), a === pe.length ? r.interrupt ? t : O : y) : n(g);
  }
  function m(g) {
    return ht(g) ? (e.consume(g), u = String.fromCharCode(g), I) : n(g);
  }
  function I(g) {
    if (g === null || g === 47 || g === 62 || He(g)) {
      const pe = g === 47, ee = u.toLowerCase();
      return !pe && !o && Nu.includes(ee) ? (i = 1, r.interrupt ? t(g) : O(g)) : zg.includes(u.toLowerCase()) ? (i = 6, pe ? (e.consume(g), C) : r.interrupt ? t(g) : O(g)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(g) : o ? A(g) : E(g));
    }
    return g === 45 || Je(g) ? (e.consume(g), u += String.fromCharCode(g), I) : n(g);
  }
  function C(g) {
    return g === 62 ? (e.consume(g), r.interrupt ? t : O) : n(g);
  }
  function A(g) {
    return he(g) ? (e.consume(g), A) : H(g);
  }
  function E(g) {
    return g === 47 ? (e.consume(g), H) : g === 58 || g === 95 || ht(g) ? (e.consume(g), S) : he(g) ? (e.consume(g), E) : H(g);
  }
  function S(g) {
    return g === 45 || g === 46 || g === 58 || g === 95 || Je(g) ? (e.consume(g), S) : P(g);
  }
  function P(g) {
    return g === 61 ? (e.consume(g), w) : he(g) ? (e.consume(g), P) : E(g);
  }
  function w(g) {
    return g === null || g === 60 || g === 61 || g === 62 || g === 96 ? n(g) : g === 34 || g === 39 ? (e.consume(g), s = g, k) : he(g) ? (e.consume(g), w) : R(g);
  }
  function k(g) {
    return g === s ? (e.consume(g), s = null, T) : g === null || $(g) ? n(g) : (e.consume(g), k);
  }
  function R(g) {
    return g === null || g === 34 || g === 39 || g === 47 || g === 60 || g === 61 || g === 62 || g === 96 || He(g) ? P(g) : (e.consume(g), R);
  }
  function T(g) {
    return g === 47 || g === 62 || he(g) ? E(g) : n(g);
  }
  function H(g) {
    return g === 62 ? (e.consume(g), N) : n(g);
  }
  function N(g) {
    return g === null || $(g) ? O(g) : he(g) ? (e.consume(g), N) : n(g);
  }
  function O(g) {
    return g === 45 && i === 2 ? (e.consume(g), Y) : g === 60 && i === 1 ? (e.consume(g), _) : g === 62 && i === 4 ? (e.consume(g), Ce) : g === 63 && i === 3 ? (e.consume(g), b) : g === 93 && i === 5 ? (e.consume(g), me) : $(g) && (i === 6 || i === 7) ? (e.exit("htmlFlowData"), e.check(Wg, ae, K)(g)) : g === null || $(g) ? (e.exit("htmlFlowData"), K(g)) : (e.consume(g), O);
  }
  function K(g) {
    return e.check(Zg, ie, ae)(g);
  }
  function ie(g) {
    return e.enter("lineEnding"), e.consume(g), e.exit("lineEnding"), M;
  }
  function M(g) {
    return g === null || $(g) ? K(g) : (e.enter("htmlFlowData"), O(g));
  }
  function Y(g) {
    return g === 45 ? (e.consume(g), b) : O(g);
  }
  function _(g) {
    return g === 47 ? (e.consume(g), u = "", se) : O(g);
  }
  function se(g) {
    if (g === 62) {
      const pe = u.toLowerCase();
      return Nu.includes(pe) ? (e.consume(g), Ce) : O(g);
    }
    return ht(g) && u.length < 8 ? (e.consume(g), u += String.fromCharCode(g), se) : O(g);
  }
  function me(g) {
    return g === 93 ? (e.consume(g), b) : O(g);
  }
  function b(g) {
    return g === 62 ? (e.consume(g), Ce) : g === 45 && i === 2 ? (e.consume(g), b) : O(g);
  }
  function Ce(g) {
    return g === null || $(g) ? (e.exit("htmlFlowData"), ae(g)) : (e.consume(g), Ce);
  }
  function ae(g) {
    return e.exit("htmlFlow"), t(g);
  }
}
function Yg(e, t, n) {
  const r = this;
  return i;
  function i(u) {
    return $(u) ? (e.enter("lineEnding"), e.consume(u), e.exit("lineEnding"), o) : n(u);
  }
  function o(u) {
    return r.parser.lazy[r.now().line] ? n(u) : t(u);
  }
}
function _g(e, t, n) {
  return r;
  function r(i) {
    return e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), e.attempt(Wr, t, n);
  }
}
const Ug = {
  name: "htmlText",
  tokenize: Qg
};
function Qg(e, t, n) {
  const r = this;
  let i, o, u;
  return a;
  function a(b) {
    return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(b), s;
  }
  function s(b) {
    return b === 33 ? (e.consume(b), l) : b === 47 ? (e.consume(b), P) : b === 63 ? (e.consume(b), E) : ht(b) ? (e.consume(b), R) : n(b);
  }
  function l(b) {
    return b === 45 ? (e.consume(b), c) : b === 91 ? (e.consume(b), o = 0, y) : ht(b) ? (e.consume(b), A) : n(b);
  }
  function c(b) {
    return b === 45 ? (e.consume(b), f) : n(b);
  }
  function d(b) {
    return b === null ? n(b) : b === 45 ? (e.consume(b), p) : $(b) ? (u = d, _(b)) : (e.consume(b), d);
  }
  function p(b) {
    return b === 45 ? (e.consume(b), f) : d(b);
  }
  function f(b) {
    return b === 62 ? Y(b) : b === 45 ? p(b) : d(b);
  }
  function y(b) {
    const Ce = "CDATA[";
    return b === Ce.charCodeAt(o++) ? (e.consume(b), o === Ce.length ? m : y) : n(b);
  }
  function m(b) {
    return b === null ? n(b) : b === 93 ? (e.consume(b), I) : $(b) ? (u = m, _(b)) : (e.consume(b), m);
  }
  function I(b) {
    return b === 93 ? (e.consume(b), C) : m(b);
  }
  function C(b) {
    return b === 62 ? Y(b) : b === 93 ? (e.consume(b), C) : m(b);
  }
  function A(b) {
    return b === null || b === 62 ? Y(b) : $(b) ? (u = A, _(b)) : (e.consume(b), A);
  }
  function E(b) {
    return b === null ? n(b) : b === 63 ? (e.consume(b), S) : $(b) ? (u = E, _(b)) : (e.consume(b), E);
  }
  function S(b) {
    return b === 62 ? Y(b) : E(b);
  }
  function P(b) {
    return ht(b) ? (e.consume(b), w) : n(b);
  }
  function w(b) {
    return b === 45 || Je(b) ? (e.consume(b), w) : k(b);
  }
  function k(b) {
    return $(b) ? (u = k, _(b)) : he(b) ? (e.consume(b), k) : Y(b);
  }
  function R(b) {
    return b === 45 || Je(b) ? (e.consume(b), R) : b === 47 || b === 62 || He(b) ? T(b) : n(b);
  }
  function T(b) {
    return b === 47 ? (e.consume(b), Y) : b === 58 || b === 95 || ht(b) ? (e.consume(b), H) : $(b) ? (u = T, _(b)) : he(b) ? (e.consume(b), T) : Y(b);
  }
  function H(b) {
    return b === 45 || b === 46 || b === 58 || b === 95 || Je(b) ? (e.consume(b), H) : N(b);
  }
  function N(b) {
    return b === 61 ? (e.consume(b), O) : $(b) ? (u = N, _(b)) : he(b) ? (e.consume(b), N) : T(b);
  }
  function O(b) {
    return b === null || b === 60 || b === 61 || b === 62 || b === 96 ? n(b) : b === 34 || b === 39 ? (e.consume(b), i = b, K) : $(b) ? (u = O, _(b)) : he(b) ? (e.consume(b), O) : (e.consume(b), ie);
  }
  function K(b) {
    return b === i ? (e.consume(b), i = void 0, M) : b === null ? n(b) : $(b) ? (u = K, _(b)) : (e.consume(b), K);
  }
  function ie(b) {
    return b === null || b === 34 || b === 39 || b === 60 || b === 61 || b === 96 ? n(b) : b === 47 || b === 62 || He(b) ? T(b) : (e.consume(b), ie);
  }
  function M(b) {
    return b === 47 || b === 62 || He(b) ? T(b) : n(b);
  }
  function Y(b) {
    return b === 62 ? (e.consume(b), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(b);
  }
  function _(b) {
    return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(b), e.exit("lineEnding"), se;
  }
  function se(b) {
    return he(b) ? ye(e, me, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(b) : me(b);
  }
  function me(b) {
    return e.enter("htmlTextData"), u(b);
  }
}
const vo = {
  name: "labelEnd",
  resolveAll: em,
  resolveTo: tm,
  tokenize: nm
}, qg = {
  tokenize: rm
}, $g = {
  tokenize: im
}, Kg = {
  tokenize: om
};
function em(e) {
  let t = -1;
  const n = [];
  for (; ++t < e.length; ) {
    const r = e[t][1];
    if (n.push(e[t]), r.type === "labelImage" || r.type === "labelLink" || r.type === "labelEnd") {
      const i = r.type === "labelImage" ? 4 : 2;
      r.type = "data", t += i;
    }
  }
  return e.length !== n.length && mt(e, 0, e.length, n), e;
}
function tm(e, t) {
  let n = e.length, r = 0, i, o, u, a;
  for (; n--; )
    if (i = e[n][1], o) {
      if (i.type === "link" || i.type === "labelLink" && i._inactive)
        break;
      e[n][0] === "enter" && i.type === "labelLink" && (i._inactive = !0);
    } else if (u) {
      if (e[n][0] === "enter" && (i.type === "labelImage" || i.type === "labelLink") && !i._balanced && (o = n, i.type !== "labelLink")) {
        r = 2;
        break;
      }
    } else i.type === "labelEnd" && (u = n);
  const s = {
    type: e[o][1].type === "labelLink" ? "link" : "image",
    start: {
      ...e[o][1].start
    },
    end: {
      ...e[e.length - 1][1].end
    }
  }, l = {
    type: "label",
    start: {
      ...e[o][1].start
    },
    end: {
      ...e[u][1].end
    }
  }, c = {
    type: "labelText",
    start: {
      ...e[o + r + 2][1].end
    },
    end: {
      ...e[u - 2][1].start
    }
  };
  return a = [["enter", s, t], ["enter", l, t]], a = $e(a, e.slice(o + 1, o + r + 3)), a = $e(a, [["enter", c, t]]), a = $e(a, Co(t.parser.constructs.insideSpan.null, e.slice(o + r + 4, u - 3), t)), a = $e(a, [["exit", c, t], e[u - 2], e[u - 1], ["exit", l, t]]), a = $e(a, e.slice(u + 1)), a = $e(a, [["exit", s, t]]), mt(e, o, e.length, a), e;
}
function nm(e, t, n) {
  const r = this;
  let i = r.events.length, o, u;
  for (; i--; )
    if ((r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") && !r.events[i][1]._balanced) {
      o = r.events[i][1];
      break;
    }
  return a;
  function a(p) {
    return o ? o._inactive ? d(p) : (u = r.parser.defined.includes(gn(r.sliceSerialize({
      start: o.end,
      end: r.now()
    }))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(p), e.exit("labelMarker"), e.exit("labelEnd"), s) : n(p);
  }
  function s(p) {
    return p === 40 ? e.attempt(qg, c, u ? c : d)(p) : p === 91 ? e.attempt($g, c, u ? l : d)(p) : u ? c(p) : d(p);
  }
  function l(p) {
    return e.attempt(Kg, c, d)(p);
  }
  function c(p) {
    return t(p);
  }
  function d(p) {
    return o._balanced = !0, n(p);
  }
}
function rm(e, t, n) {
  return r;
  function r(d) {
    return e.enter("resource"), e.enter("resourceMarker"), e.consume(d), e.exit("resourceMarker"), i;
  }
  function i(d) {
    return He(d) ? jn(e, o)(d) : o(d);
  }
  function o(d) {
    return d === 41 ? c(d) : Vs(e, u, a, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(d);
  }
  function u(d) {
    return He(d) ? jn(e, s)(d) : c(d);
  }
  function a(d) {
    return n(d);
  }
  function s(d) {
    return d === 34 || d === 39 || d === 40 ? Ns(e, l, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(d) : c(d);
  }
  function l(d) {
    return He(d) ? jn(e, c)(d) : c(d);
  }
  function c(d) {
    return d === 41 ? (e.enter("resourceMarker"), e.consume(d), e.exit("resourceMarker"), e.exit("resource"), t) : n(d);
  }
}
function im(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return Ds.call(r, e, o, u, "reference", "referenceMarker", "referenceString")(a);
  }
  function o(a) {
    return r.parser.defined.includes(gn(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(a) : n(a);
  }
  function u(a) {
    return n(a);
  }
}
function om(e, t, n) {
  return r;
  function r(o) {
    return e.enter("reference"), e.enter("referenceMarker"), e.consume(o), e.exit("referenceMarker"), i;
  }
  function i(o) {
    return o === 93 ? (e.enter("referenceMarker"), e.consume(o), e.exit("referenceMarker"), e.exit("reference"), t) : n(o);
  }
}
const um = {
  name: "labelStartImage",
  resolveAll: vo.resolveAll,
  tokenize: am
};
function am(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(a), e.exit("labelImageMarker"), o;
  }
  function o(a) {
    return a === 91 ? (e.enter("labelMarker"), e.consume(a), e.exit("labelMarker"), e.exit("labelImage"), u) : n(a);
  }
  function u(a) {
    return a === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(a) : t(a);
  }
}
const sm = {
  name: "labelStartLink",
  resolveAll: vo.resolveAll,
  tokenize: lm
};
function lm(e, t, n) {
  const r = this;
  return i;
  function i(u) {
    return e.enter("labelLink"), e.enter("labelMarker"), e.consume(u), e.exit("labelMarker"), e.exit("labelLink"), o;
  }
  function o(u) {
    return u === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(u) : t(u);
  }
}
const hi = {
  name: "lineEnding",
  tokenize: cm
};
function cm(e, t) {
  return n;
  function n(r) {
    return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), ye(e, t, "linePrefix");
  }
}
const Sr = {
  name: "thematicBreak",
  tokenize: dm
};
function dm(e, t, n) {
  let r = 0, i;
  return o;
  function o(l) {
    return e.enter("thematicBreak"), u(l);
  }
  function u(l) {
    return i = l, a(l);
  }
  function a(l) {
    return l === i ? (e.enter("thematicBreakSequence"), s(l)) : r >= 3 && (l === null || $(l)) ? (e.exit("thematicBreak"), t(l)) : n(l);
  }
  function s(l) {
    return l === i ? (e.consume(l), r++, s) : (e.exit("thematicBreakSequence"), he(l) ? ye(e, a, "whitespace")(l) : a(l));
  }
}
const Xe = {
  continuation: {
    tokenize: gm
  },
  exit: bm,
  name: "list",
  tokenize: hm
}, fm = {
  partial: !0,
  tokenize: ym
}, pm = {
  partial: !0,
  tokenize: mm
};
function hm(e, t, n) {
  const r = this, i = r.events[r.events.length - 1];
  let o = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0, u = 0;
  return a;
  function a(f) {
    const y = r.containerState.type || (f === 42 || f === 43 || f === 45 ? "listUnordered" : "listOrdered");
    if (y === "listUnordered" ? !r.containerState.marker || f === r.containerState.marker : _i(f)) {
      if (r.containerState.type || (r.containerState.type = y, e.enter(y, {
        _container: !0
      })), y === "listUnordered")
        return e.enter("listItemPrefix"), f === 42 || f === 45 ? e.check(Sr, n, l)(f) : l(f);
      if (!r.interrupt || f === 49)
        return e.enter("listItemPrefix"), e.enter("listItemValue"), s(f);
    }
    return n(f);
  }
  function s(f) {
    return _i(f) && ++u < 10 ? (e.consume(f), s) : (!r.interrupt || u < 2) && (r.containerState.marker ? f === r.containerState.marker : f === 41 || f === 46) ? (e.exit("listItemValue"), l(f)) : n(f);
  }
  function l(f) {
    return e.enter("listItemMarker"), e.consume(f), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || f, e.check(
      Wr,
      // Can’t be empty when interrupting.
      r.interrupt ? n : c,
      e.attempt(fm, p, d)
    );
  }
  function c(f) {
    return r.containerState.initialBlankLine = !0, o++, p(f);
  }
  function d(f) {
    return he(f) ? (e.enter("listItemPrefixWhitespace"), e.consume(f), e.exit("listItemPrefixWhitespace"), p) : n(f);
  }
  function p(f) {
    return r.containerState.size = o + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(f);
  }
}
function gm(e, t, n) {
  const r = this;
  return r.containerState._closeFlow = void 0, e.check(Wr, i, o);
  function i(a) {
    return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, ye(e, t, "listItemIndent", r.containerState.size + 1)(a);
  }
  function o(a) {
    return r.containerState.furtherBlankLines || !he(a) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, u(a)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(pm, t, u)(a));
  }
  function u(a) {
    return r.containerState._closeFlow = !0, r.interrupt = void 0, ye(e, e.attempt(Xe, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(a);
  }
}
function mm(e, t, n) {
  const r = this;
  return ye(e, i, "listItemIndent", r.containerState.size + 1);
  function i(o) {
    const u = r.events[r.events.length - 1];
    return u && u[1].type === "listItemIndent" && u[2].sliceSerialize(u[1], !0).length === r.containerState.size ? t(o) : n(o);
  }
}
function bm(e) {
  e.exit(this.containerState.type);
}
function ym(e, t, n) {
  const r = this;
  return ye(e, i, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
  function i(o) {
    const u = r.events[r.events.length - 1];
    return !he(o) && u && u[1].type === "listItemPrefixWhitespace" ? t(o) : n(o);
  }
}
const Mu = {
  name: "setextUnderline",
  resolveTo: Im,
  tokenize: Cm
};
function Im(e, t) {
  let n = e.length, r, i, o;
  for (; n--; )
    if (e[n][0] === "enter") {
      if (e[n][1].type === "content") {
        r = n;
        break;
      }
      e[n][1].type === "paragraph" && (i = n);
    } else
      e[n][1].type === "content" && e.splice(n, 1), !o && e[n][1].type === "definition" && (o = n);
  const u = {
    type: "setextHeading",
    start: {
      ...e[i][1].start
    },
    end: {
      ...e[e.length - 1][1].end
    }
  };
  return e[i][1].type = "setextHeadingText", o ? (e.splice(i, 0, ["enter", u, t]), e.splice(o + 1, 0, ["exit", e[r][1], t]), e[r][1].end = {
    ...e[o][1].end
  }) : e[r][1] = u, e.push(["exit", u, t]), e;
}
function Cm(e, t, n) {
  const r = this;
  let i;
  return o;
  function o(l) {
    let c = r.events.length, d;
    for (; c--; )
      if (r.events[c][1].type !== "lineEnding" && r.events[c][1].type !== "linePrefix" && r.events[c][1].type !== "content") {
        d = r.events[c][1].type === "paragraph";
        break;
      }
    return !r.parser.lazy[r.now().line] && (r.interrupt || d) ? (e.enter("setextHeadingLine"), i = l, u(l)) : n(l);
  }
  function u(l) {
    return e.enter("setextHeadingLineSequence"), a(l);
  }
  function a(l) {
    return l === i ? (e.consume(l), a) : (e.exit("setextHeadingLineSequence"), he(l) ? ye(e, s, "lineSuffix")(l) : s(l));
  }
  function s(l) {
    return l === null || $(l) ? (e.exit("setextHeadingLine"), t(l)) : n(l);
  }
}
const vm = {
  tokenize: xm
};
function xm(e) {
  const t = this, n = e.attempt(
    // Try to parse a blank line.
    Wr,
    r,
    // Try to parse initial flow (essentially, only code).
    e.attempt(this.parser.constructs.flowInitial, i, ye(e, e.attempt(this.parser.constructs.flow, i, e.attempt(Fg, i)), "linePrefix"))
  );
  return n;
  function r(o) {
    if (o === null) {
      e.consume(o);
      return;
    }
    return e.enter("lineEndingBlank"), e.consume(o), e.exit("lineEndingBlank"), t.currentConstruct = void 0, n;
  }
  function i(o) {
    if (o === null) {
      e.consume(o);
      return;
    }
    return e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), t.currentConstruct = void 0, n;
  }
}
const Am = {
  resolveAll: Ls()
}, Sm = Ms("string"), wm = Ms("text");
function Ms(e) {
  return {
    resolveAll: Ls(e === "text" ? Em : void 0),
    tokenize: t
  };
  function t(n) {
    const r = this, i = this.parser.constructs[e], o = n.attempt(i, u, a);
    return u;
    function u(c) {
      return l(c) ? o(c) : a(c);
    }
    function a(c) {
      if (c === null) {
        n.consume(c);
        return;
      }
      return n.enter("data"), n.consume(c), s;
    }
    function s(c) {
      return l(c) ? (n.exit("data"), o(c)) : (n.consume(c), s);
    }
    function l(c) {
      if (c === null)
        return !0;
      const d = i[c];
      let p = -1;
      if (d)
        for (; ++p < d.length; ) {
          const f = d[p];
          if (!f.previous || f.previous.call(r, r.previous))
            return !0;
        }
      return !1;
    }
  }
}
function Ls(e) {
  return t;
  function t(n, r) {
    let i = -1, o;
    for (; ++i <= n.length; )
      o === void 0 ? n[i] && n[i][1].type === "data" && (o = i, i++) : (!n[i] || n[i][1].type !== "data") && (i !== o + 2 && (n[o][1].end = n[i - 1][1].end, n.splice(o + 2, i - o - 2), i = o + 2), o = void 0);
    return e ? e(n, r) : n;
  }
}
function Em(e, t) {
  let n = 0;
  for (; ++n <= e.length; )
    if ((n === e.length || e[n][1].type === "lineEnding") && e[n - 1][1].type === "data") {
      const r = e[n - 1][1], i = t.sliceStream(r);
      let o = i.length, u = -1, a = 0, s;
      for (; o--; ) {
        const l = i[o];
        if (typeof l == "string") {
          for (u = l.length; l.charCodeAt(u - 1) === 32; )
            a++, u--;
          if (u) break;
          u = -1;
        } else if (l === -2)
          s = !0, a++;
        else if (l !== -1) {
          o++;
          break;
        }
      }
      if (a) {
        const l = {
          type: n === e.length || s || a < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            _bufferIndex: o ? u : r.start._bufferIndex + u,
            _index: r.start._index + o,
            line: r.end.line,
            column: r.end.column - a,
            offset: r.end.offset - a
          },
          end: {
            ...r.end
          }
        };
        r.end = {
          ...l.start
        }, r.start.offset === r.end.offset ? Object.assign(r, l) : (e.splice(n, 0, ["enter", l, t], ["exit", l, t]), n += 2);
      }
      n++;
    }
  return e;
}
const Fm = {
  42: Xe,
  43: Xe,
  45: Xe,
  48: Xe,
  49: Xe,
  50: Xe,
  51: Xe,
  52: Xe,
  53: Xe,
  54: Xe,
  55: Xe,
  56: Xe,
  57: Xe,
  62: ks
}, Pm = {
  91: Bg
}, Gm = {
  [-2]: pi,
  [-1]: pi,
  32: pi
}, Rm = {
  35: Mg,
  42: Sr,
  45: [Mu, Sr],
  60: Hg,
  61: Mu,
  95: Sr,
  96: Du,
  126: Du
}, km = {
  38: Os,
  92: Bs
}, Bm = {
  [-5]: hi,
  [-4]: hi,
  [-3]: hi,
  33: um,
  38: Os,
  42: Ui,
  60: [sg, Ug],
  91: sm,
  92: [Dg, Bs],
  93: vo,
  95: Ui,
  96: vg
}, Om = {
  null: [Ui, Am]
}, Tm = {
  null: [42, 95]
}, Vm = {
  null: []
}, Dm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  attentionMarkers: Tm,
  contentInitial: Pm,
  disable: Vm,
  document: Fm,
  flow: Rm,
  flowInitial: Gm,
  insideSpan: Om,
  string: km,
  text: Bm
}, Symbol.toStringTag, { value: "Module" }));
function Nm(e, t, n) {
  let r = {
    _bufferIndex: -1,
    _index: 0,
    line: n && n.line || 1,
    column: n && n.column || 1,
    offset: n && n.offset || 0
  };
  const i = {}, o = [];
  let u = [], a = [];
  const s = {
    attempt: k(P),
    check: k(w),
    consume: A,
    enter: E,
    exit: S,
    interrupt: k(w, {
      interrupt: !0
    })
  }, l = {
    code: null,
    containerState: {},
    defineSkip: m,
    events: [],
    now: y,
    parser: e,
    previous: null,
    sliceSerialize: p,
    sliceStream: f,
    write: d
  };
  let c = t.tokenize.call(l, s);
  return t.resolveAll && o.push(t), l;
  function d(N) {
    return u = $e(u, N), I(), u[u.length - 1] !== null ? [] : (R(t, 0), l.events = Co(o, l.events, l), l.events);
  }
  function p(N, O) {
    return Lm(f(N), O);
  }
  function f(N) {
    return Mm(u, N);
  }
  function y() {
    const {
      _bufferIndex: N,
      _index: O,
      line: K,
      column: ie,
      offset: M
    } = r;
    return {
      _bufferIndex: N,
      _index: O,
      line: K,
      column: ie,
      offset: M
    };
  }
  function m(N) {
    i[N.line] = N.column, H();
  }
  function I() {
    let N;
    for (; r._index < u.length; ) {
      const O = u[r._index];
      if (typeof O == "string")
        for (N = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === N && r._bufferIndex < O.length; )
          C(O.charCodeAt(r._bufferIndex));
      else
        C(O);
    }
  }
  function C(N) {
    c = c(N);
  }
  function A(N) {
    $(N) ? (r.line++, r.column = 1, r.offset += N === -3 ? 2 : 1, H()) : N !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === // Points w/ non-negative `_bufferIndex` reference
    // strings.
    /** @type {string} */
    u[r._index].length && (r._bufferIndex = -1, r._index++)), l.previous = N;
  }
  function E(N, O) {
    const K = O || {};
    return K.type = N, K.start = y(), l.events.push(["enter", K, l]), a.push(K), K;
  }
  function S(N) {
    const O = a.pop();
    return O.end = y(), l.events.push(["exit", O, l]), O;
  }
  function P(N, O) {
    R(N, O.from);
  }
  function w(N, O) {
    O.restore();
  }
  function k(N, O) {
    return K;
    function K(ie, M, Y) {
      let _, se, me, b;
      return Array.isArray(ie) ? (
        /* c8 ignore next 1 */
        ae(ie)
      ) : "tokenize" in ie ? (
        // Looks like a construct.
        ae([
          /** @type {Construct} */
          ie
        ])
      ) : Ce(ie);
      function Ce(de) {
        return Fe;
        function Fe(D) {
          const z = D !== null && de[D], U = D !== null && de.null, fe = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(z) ? z : z ? [z] : [],
            ...Array.isArray(U) ? U : U ? [U] : []
          ];
          return ae(fe)(D);
        }
      }
      function ae(de) {
        return _ = de, se = 0, de.length === 0 ? Y : g(de[se]);
      }
      function g(de) {
        return Fe;
        function Fe(D) {
          return b = T(), me = de, de.partial || (l.currentConstruct = de), de.name && l.parser.constructs.disable.null.includes(de.name) ? ee() : de.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            O ? Object.assign(Object.create(l), O) : l,
            s,
            pe,
            ee
          )(D);
        }
      }
      function pe(de) {
        return N(me, b), M;
      }
      function ee(de) {
        return b.restore(), ++se < _.length ? g(_[se]) : Y;
      }
    }
  }
  function R(N, O) {
    N.resolveAll && !o.includes(N) && o.push(N), N.resolve && mt(l.events, O, l.events.length - O, N.resolve(l.events.slice(O), l)), N.resolveTo && (l.events = N.resolveTo(l.events, l));
  }
  function T() {
    const N = y(), O = l.previous, K = l.currentConstruct, ie = l.events.length, M = Array.from(a);
    return {
      from: ie,
      restore: Y
    };
    function Y() {
      r = N, l.previous = O, l.currentConstruct = K, l.events.length = ie, a = M, H();
    }
  }
  function H() {
    r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1);
  }
}
function Mm(e, t) {
  const n = t.start._index, r = t.start._bufferIndex, i = t.end._index, o = t.end._bufferIndex;
  let u;
  if (n === i)
    u = [e[n].slice(r, o)];
  else {
    if (u = e.slice(n, i), r > -1) {
      const a = u[0];
      typeof a == "string" ? u[0] = a.slice(r) : u.shift();
    }
    o > 0 && u.push(e[i].slice(0, o));
  }
  return u;
}
function Lm(e, t) {
  let n = -1;
  const r = [];
  let i;
  for (; ++n < e.length; ) {
    const o = e[n];
    let u;
    if (typeof o == "string")
      u = o;
    else switch (o) {
      case -5: {
        u = "\r";
        break;
      }
      case -4: {
        u = `
`;
        break;
      }
      case -3: {
        u = `\r
`;
        break;
      }
      case -2: {
        u = t ? " " : "	";
        break;
      }
      case -1: {
        if (!t && i) continue;
        u = " ";
        break;
      }
      default:
        u = String.fromCharCode(o);
    }
    i = o === -2, r.push(u);
  }
  return r.join("");
}
function Xm(e) {
  const r = {
    constructs: (
      /** @type {FullNormalizedExtension} */
      Yh([Dm, ...(e || {}).extensions || []])
    ),
    content: i(tg),
    defined: [],
    document: i(rg),
    flow: i(vm),
    lazy: {},
    string: i(Sm),
    text: i(wm)
  };
  return r;
  function i(o) {
    return u;
    function u(a) {
      return Nm(r, o, a);
    }
  }
}
function zm(e) {
  for (; !Ts(e); )
    ;
  return e;
}
const Lu = /[\0\t\n\r]/g;
function Hm() {
  let e = 1, t = "", n = !0, r;
  return i;
  function i(o, u, a) {
    const s = [];
    let l, c, d, p, f;
    for (o = t + (typeof o == "string" ? o.toString() : new TextDecoder(u || void 0).decode(o)), d = 0, t = "", n && (o.charCodeAt(0) === 65279 && d++, n = void 0); d < o.length; ) {
      if (Lu.lastIndex = d, l = Lu.exec(o), p = l && l.index !== void 0 ? l.index : o.length, f = o.charCodeAt(p), !l) {
        t = o.slice(d);
        break;
      }
      if (f === 10 && d === p && r)
        s.push(-3), r = void 0;
      else
        switch (r && (s.push(-5), r = void 0), d < p && (s.push(o.slice(d, p)), e += p - d), f) {
          case 0: {
            s.push(65533), e++;
            break;
          }
          case 9: {
            for (c = Math.ceil(e / 4) * 4, s.push(-2); e++ < c; ) s.push(-1);
            break;
          }
          case 10: {
            s.push(-4), e = 1;
            break;
          }
          default:
            r = !0, e = 1;
        }
      d = p + 1;
    }
    return a && (r && s.push(-5), t && s.push(t), s.push(null)), s;
  }
}
const Wm = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function Zm(e) {
  return e.replace(Wm, jm);
}
function jm(e, t, n) {
  if (t)
    return t;
  if (n.charCodeAt(0) === 35) {
    const i = n.charCodeAt(1), o = i === 120 || i === 88;
    return Rs(n.slice(o ? 2 : 1), o ? 16 : 10);
  }
  return Io(n) || e;
}
const Xs = {}.hasOwnProperty;
function Jm(e, t, n) {
  return typeof t != "string" && (n = t, t = void 0), Ym(n)(zm(Xm(n).document().write(Hm()(e, t, !0))));
}
function Ym(e) {
  const t = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: o(ur),
      autolinkProtocol: T,
      autolinkEmail: T,
      atxHeading: o(an),
      blockQuote: o(U),
      characterEscape: T,
      characterReference: T,
      codeFenced: o(fe),
      codeFencedFenceInfo: u,
      codeFencedFenceMeta: u,
      codeIndented: o(fe, u),
      codeText: o(Pe, u),
      codeTextData: T,
      data: T,
      codeFlowValue: T,
      definition: o(We),
      definitionDestinationString: u,
      definitionLabelString: u,
      definitionTitleString: u,
      emphasis: o(zt),
      hardBreakEscape: o(ir),
      hardBreakTrailing: o(ir),
      htmlFlow: o(or, u),
      htmlFlowData: T,
      htmlText: o(or, u),
      htmlTextData: T,
      image: o(Jr),
      label: u,
      link: o(ur),
      listItem: o(Yr),
      listItemValue: p,
      listOrdered: o(ar, d),
      listUnordered: o(ar),
      paragraph: o(_r),
      reference: g,
      referenceString: u,
      resourceDestinationString: u,
      resourceTitleString: u,
      setextHeading: o(an),
      strong: o(Ur),
      thematicBreak: o(qr)
    },
    exit: {
      atxHeading: s(),
      atxHeadingSequence: P,
      autolink: s(),
      autolinkEmail: z,
      autolinkProtocol: D,
      blockQuote: s(),
      characterEscapeValue: H,
      characterReferenceMarkerHexadecimal: ee,
      characterReferenceMarkerNumeric: ee,
      characterReferenceValue: de,
      characterReference: Fe,
      codeFenced: s(I),
      codeFencedFence: m,
      codeFencedFenceInfo: f,
      codeFencedFenceMeta: y,
      codeFlowValue: H,
      codeIndented: s(C),
      codeText: s(M),
      codeTextData: H,
      data: H,
      definition: s(),
      definitionDestinationString: S,
      definitionLabelString: A,
      definitionTitleString: E,
      emphasis: s(),
      hardBreakEscape: s(O),
      hardBreakTrailing: s(O),
      htmlFlow: s(K),
      htmlFlowData: H,
      htmlText: s(ie),
      htmlTextData: H,
      image: s(_),
      label: me,
      labelText: se,
      lineEnding: N,
      link: s(Y),
      listItem: s(),
      listOrdered: s(),
      listUnordered: s(),
      paragraph: s(),
      referenceString: pe,
      resourceDestinationString: b,
      resourceTitleString: Ce,
      resource: ae,
      setextHeading: s(R),
      setextHeadingLineSequence: k,
      setextHeadingText: w,
      strong: s(),
      thematicBreak: s()
    }
  };
  zs(t, (e || {}).mdastExtensions || []);
  const n = {};
  return r;
  function r(F) {
    let V = {
      type: "root",
      children: []
    };
    const Q = {
      stack: [V],
      tokenStack: [],
      config: t,
      enter: a,
      exit: l,
      buffer: u,
      resume: c,
      data: n
    }, oe = [];
    let ue = -1;
    for (; ++ue < F.length; )
      if (F[ue][1].type === "listOrdered" || F[ue][1].type === "listUnordered")
        if (F[ue][0] === "enter")
          oe.push(ue);
        else {
          const Le = oe.pop();
          ue = i(F, Le, ue);
        }
    for (ue = -1; ++ue < F.length; ) {
      const Le = t[F[ue][0]];
      Xs.call(Le, F[ue][1].type) && Le[F[ue][1].type].call(Object.assign({
        sliceSerialize: F[ue][2].sliceSerialize
      }, Q), F[ue][1]);
    }
    if (Q.tokenStack.length > 0) {
      const Le = Q.tokenStack[Q.tokenStack.length - 1];
      (Le[1] || Xu).call(Q, void 0, Le[0]);
    }
    for (V.position = {
      start: Rt(F.length > 0 ? F[0][1].start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: Rt(F.length > 0 ? F[F.length - 2][1].end : {
        line: 1,
        column: 1,
        offset: 0
      })
    }, ue = -1; ++ue < t.transforms.length; )
      V = t.transforms[ue](V) || V;
    return V;
  }
  function i(F, V, Q) {
    let oe = V - 1, ue = -1, Le = !1, ut, et, Et, at;
    for (; ++oe <= Q; ) {
      const Be = F[oe];
      switch (Be[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          Be[0] === "enter" ? ue++ : ue--, at = void 0;
          break;
        }
        case "lineEndingBlank": {
          Be[0] === "enter" && (ut && !at && !ue && !Et && (Et = oe), at = void 0);
          break;
        }
        case "linePrefix":
        case "listItemValue":
        case "listItemMarker":
        case "listItemPrefix":
        case "listItemPrefixWhitespace":
          break;
        default:
          at = void 0;
      }
      if (!ue && Be[0] === "enter" && Be[1].type === "listItemPrefix" || ue === -1 && Be[0] === "exit" && (Be[1].type === "listUnordered" || Be[1].type === "listOrdered")) {
        if (ut) {
          let yt = oe;
          for (et = void 0; yt--; ) {
            const tt = F[yt];
            if (tt[1].type === "lineEnding" || tt[1].type === "lineEndingBlank") {
              if (tt[0] === "exit") continue;
              et && (F[et][1].type = "lineEndingBlank", Le = !0), tt[1].type = "lineEnding", et = yt;
            } else if (!(tt[1].type === "linePrefix" || tt[1].type === "blockQuotePrefix" || tt[1].type === "blockQuotePrefixWhitespace" || tt[1].type === "blockQuoteMarker" || tt[1].type === "listItemIndent")) break;
          }
          Et && (!et || Et < et) && (ut._spread = !0), ut.end = Object.assign({}, et ? F[et][1].start : Be[1].end), F.splice(et || oe, 0, ["exit", ut, Be[2]]), oe++, Q++;
        }
        if (Be[1].type === "listItemPrefix") {
          const yt = {
            type: "listItem",
            _spread: !1,
            start: Object.assign({}, Be[1].start),
            // @ts-expect-error: we’ll add `end` in a second.
            end: void 0
          };
          ut = yt, F.splice(oe, 0, ["enter", yt, Be[2]]), oe++, Q++, Et = void 0, at = !0;
        }
      }
    }
    return F[V][1]._spread = Le, Q;
  }
  function o(F, V) {
    return Q;
    function Q(oe) {
      a.call(this, F(oe), oe), V && V.call(this, oe);
    }
  }
  function u() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function a(F, V, Q) {
    this.stack[this.stack.length - 1].children.push(F), this.stack.push(F), this.tokenStack.push([V, Q || void 0]), F.position = {
      start: Rt(V.start),
      // @ts-expect-error: `end` will be patched later.
      end: void 0
    };
  }
  function s(F) {
    return V;
    function V(Q) {
      F && F.call(this, Q), l.call(this, Q);
    }
  }
  function l(F, V) {
    const Q = this.stack.pop(), oe = this.tokenStack.pop();
    if (oe)
      oe[0].type !== F.type && (V ? V.call(this, F, oe[0]) : (oe[1] || Xu).call(this, F, oe[0]));
    else throw new Error("Cannot close `" + F.type + "` (" + Zn({
      start: F.start,
      end: F.end
    }) + "): it’s not open");
    Q.position.end = Rt(F.end);
  }
  function c() {
    return jh(this.stack.pop());
  }
  function d() {
    this.data.expectingFirstListItemValue = !0;
  }
  function p(F) {
    if (this.data.expectingFirstListItemValue) {
      const V = this.stack[this.stack.length - 2];
      V.start = Number.parseInt(this.sliceSerialize(F), 10), this.data.expectingFirstListItemValue = void 0;
    }
  }
  function f() {
    const F = this.resume(), V = this.stack[this.stack.length - 1];
    V.lang = F;
  }
  function y() {
    const F = this.resume(), V = this.stack[this.stack.length - 1];
    V.meta = F;
  }
  function m() {
    this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
  }
  function I() {
    const F = this.resume(), V = this.stack[this.stack.length - 1];
    V.value = F.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
  }
  function C() {
    const F = this.resume(), V = this.stack[this.stack.length - 1];
    V.value = F.replace(/(\r?\n|\r)$/g, "");
  }
  function A(F) {
    const V = this.resume(), Q = this.stack[this.stack.length - 1];
    Q.label = V, Q.identifier = gn(this.sliceSerialize(F)).toLowerCase();
  }
  function E() {
    const F = this.resume(), V = this.stack[this.stack.length - 1];
    V.title = F;
  }
  function S() {
    const F = this.resume(), V = this.stack[this.stack.length - 1];
    V.url = F;
  }
  function P(F) {
    const V = this.stack[this.stack.length - 1];
    if (!V.depth) {
      const Q = this.sliceSerialize(F).length;
      V.depth = Q;
    }
  }
  function w() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function k(F) {
    const V = this.stack[this.stack.length - 1];
    V.depth = this.sliceSerialize(F).codePointAt(0) === 61 ? 1 : 2;
  }
  function R() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function T(F) {
    const Q = this.stack[this.stack.length - 1].children;
    let oe = Q[Q.length - 1];
    (!oe || oe.type !== "text") && (oe = Qr(), oe.position = {
      start: Rt(F.start),
      // @ts-expect-error: we’ll add `end` later.
      end: void 0
    }, Q.push(oe)), this.stack.push(oe);
  }
  function H(F) {
    const V = this.stack.pop();
    V.value += this.sliceSerialize(F), V.position.end = Rt(F.end);
  }
  function N(F) {
    const V = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const Q = V.children[V.children.length - 1];
      Q.position.end = Rt(F.end), this.data.atHardBreak = void 0;
      return;
    }
    !this.data.setextHeadingSlurpLineEnding && t.canContainEols.includes(V.type) && (T.call(this, F), H.call(this, F));
  }
  function O() {
    this.data.atHardBreak = !0;
  }
  function K() {
    const F = this.resume(), V = this.stack[this.stack.length - 1];
    V.value = F;
  }
  function ie() {
    const F = this.resume(), V = this.stack[this.stack.length - 1];
    V.value = F;
  }
  function M() {
    const F = this.resume(), V = this.stack[this.stack.length - 1];
    V.value = F;
  }
  function Y() {
    const F = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const V = this.data.referenceType || "shortcut";
      F.type += "Reference", F.referenceType = V, delete F.url, delete F.title;
    } else
      delete F.identifier, delete F.label;
    this.data.referenceType = void 0;
  }
  function _() {
    const F = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const V = this.data.referenceType || "shortcut";
      F.type += "Reference", F.referenceType = V, delete F.url, delete F.title;
    } else
      delete F.identifier, delete F.label;
    this.data.referenceType = void 0;
  }
  function se(F) {
    const V = this.sliceSerialize(F), Q = this.stack[this.stack.length - 2];
    Q.label = Zm(V), Q.identifier = gn(V).toLowerCase();
  }
  function me() {
    const F = this.stack[this.stack.length - 1], V = this.resume(), Q = this.stack[this.stack.length - 1];
    if (this.data.inReference = !0, Q.type === "link") {
      const oe = F.children;
      Q.children = oe;
    } else
      Q.alt = V;
  }
  function b() {
    const F = this.resume(), V = this.stack[this.stack.length - 1];
    V.url = F;
  }
  function Ce() {
    const F = this.resume(), V = this.stack[this.stack.length - 1];
    V.title = F;
  }
  function ae() {
    this.data.inReference = void 0;
  }
  function g() {
    this.data.referenceType = "collapsed";
  }
  function pe(F) {
    const V = this.resume(), Q = this.stack[this.stack.length - 1];
    Q.label = V, Q.identifier = gn(this.sliceSerialize(F)).toLowerCase(), this.data.referenceType = "full";
  }
  function ee(F) {
    this.data.characterReferenceType = F.type;
  }
  function de(F) {
    const V = this.sliceSerialize(F), Q = this.data.characterReferenceType;
    let oe;
    Q ? (oe = Rs(V, Q === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : oe = Io(V);
    const ue = this.stack[this.stack.length - 1];
    ue.value += oe;
  }
  function Fe(F) {
    const V = this.stack.pop();
    V.position.end = Rt(F.end);
  }
  function D(F) {
    H.call(this, F);
    const V = this.stack[this.stack.length - 1];
    V.url = this.sliceSerialize(F);
  }
  function z(F) {
    H.call(this, F);
    const V = this.stack[this.stack.length - 1];
    V.url = "mailto:" + this.sliceSerialize(F);
  }
  function U() {
    return {
      type: "blockquote",
      children: []
    };
  }
  function fe() {
    return {
      type: "code",
      lang: null,
      meta: null,
      value: ""
    };
  }
  function Pe() {
    return {
      type: "inlineCode",
      value: ""
    };
  }
  function We() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: ""
    };
  }
  function zt() {
    return {
      type: "emphasis",
      children: []
    };
  }
  function an() {
    return {
      type: "heading",
      // @ts-expect-error `depth` will be set later.
      depth: 0,
      children: []
    };
  }
  function ir() {
    return {
      type: "break"
    };
  }
  function or() {
    return {
      type: "html",
      value: ""
    };
  }
  function Jr() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null
    };
  }
  function ur() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function ar(F) {
    return {
      type: "list",
      ordered: F.type === "listOrdered",
      start: null,
      spread: F._spread,
      children: []
    };
  }
  function Yr(F) {
    return {
      type: "listItem",
      spread: F._spread,
      checked: null,
      children: []
    };
  }
  function _r() {
    return {
      type: "paragraph",
      children: []
    };
  }
  function Ur() {
    return {
      type: "strong",
      children: []
    };
  }
  function Qr() {
    return {
      type: "text",
      value: ""
    };
  }
  function qr() {
    return {
      type: "thematicBreak"
    };
  }
}
function Rt(e) {
  return {
    line: e.line,
    column: e.column,
    offset: e.offset
  };
}
function zs(e, t) {
  let n = -1;
  for (; ++n < t.length; ) {
    const r = t[n];
    Array.isArray(r) ? zs(e, r) : _m(e, r);
  }
}
function _m(e, t) {
  let n;
  for (n in t)
    if (Xs.call(t, n))
      switch (n) {
        case "canContainEols": {
          const r = t[n];
          r && e[n].push(...r);
          break;
        }
        case "transforms": {
          const r = t[n];
          r && e[n].push(...r);
          break;
        }
        case "enter":
        case "exit": {
          const r = t[n];
          r && Object.assign(e[n], r);
          break;
        }
      }
}
function Xu(e, t) {
  throw e ? new Error("Cannot close `" + e.type + "` (" + Zn({
    start: e.start,
    end: e.end
  }) + "): a different token (`" + t.type + "`, " + Zn({
    start: t.start,
    end: t.end
  }) + ") is open") : new Error("Cannot close document, a token (`" + t.type + "`, " + Zn({
    start: t.start,
    end: t.end
  }) + ") is still open");
}
function Um(e) {
  const t = this;
  t.parser = n;
  function n(r) {
    return Jm(r, {
      ...t.data("settings"),
      ...e,
      // Note: these options are not in the readme.
      // The goal is for them to be set by plugins on `data` instead of being
      // passed by users.
      extensions: t.data("micromarkExtensions") || [],
      mdastExtensions: t.data("fromMarkdownExtensions") || []
    });
  }
}
function Qm(e, t) {
  const n = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: e.wrap(e.all(t), !0)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function qm(e, t) {
  const n = { type: "element", tagName: "br", properties: {}, children: [] };
  return e.patch(t, n), [e.applyData(t, n), { type: "text", value: `
` }];
}
function $m(e, t) {
  const n = t.value ? t.value + `
` : "", r = {};
  t.lang && (r.className = ["language-" + t.lang]);
  let i = {
    type: "element",
    tagName: "code",
    properties: r,
    children: [{ type: "text", value: n }]
  };
  return t.meta && (i.data = { meta: t.meta }), e.patch(t, i), i = e.applyData(t, i), i = { type: "element", tagName: "pre", properties: {}, children: [i] }, e.patch(t, i), i;
}
function Km(e, t) {
  const n = {
    type: "element",
    tagName: "del",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function eb(e, t) {
  const n = {
    type: "element",
    tagName: "em",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function tb(e, t) {
  const n = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", r = String(t.identifier).toUpperCase(), i = kn(r.toLowerCase()), o = e.footnoteOrder.indexOf(r);
  let u, a = e.footnoteCounts.get(r);
  a === void 0 ? (a = 0, e.footnoteOrder.push(r), u = e.footnoteOrder.length) : u = o + 1, a += 1, e.footnoteCounts.set(r, a);
  const s = {
    type: "element",
    tagName: "a",
    properties: {
      href: "#" + n + "fn-" + i,
      id: n + "fnref-" + i + (a > 1 ? "-" + a : ""),
      dataFootnoteRef: !0,
      ariaDescribedBy: ["footnote-label"]
    },
    children: [{ type: "text", value: String(u) }]
  };
  e.patch(t, s);
  const l = {
    type: "element",
    tagName: "sup",
    properties: {},
    children: [s]
  };
  return e.patch(t, l), e.applyData(t, l);
}
function nb(e, t) {
  const n = {
    type: "element",
    tagName: "h" + t.depth,
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function rb(e, t) {
  if (e.options.allowDangerousHtml) {
    const n = { type: "raw", value: t.value };
    return e.patch(t, n), e.applyData(t, n);
  }
}
function Hs(e, t) {
  const n = t.referenceType;
  let r = "]";
  if (n === "collapsed" ? r += "[]" : n === "full" && (r += "[" + (t.label || t.identifier) + "]"), t.type === "imageReference")
    return [{ type: "text", value: "![" + t.alt + r }];
  const i = e.all(t), o = i[0];
  o && o.type === "text" ? o.value = "[" + o.value : i.unshift({ type: "text", value: "[" });
  const u = i[i.length - 1];
  return u && u.type === "text" ? u.value += r : i.push({ type: "text", value: r }), i;
}
function ib(e, t) {
  const n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
  if (!r)
    return Hs(e, t);
  const i = { src: kn(r.url || ""), alt: t.alt };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const o = { type: "element", tagName: "img", properties: i, children: [] };
  return e.patch(t, o), e.applyData(t, o);
}
function ob(e, t) {
  const n = { src: kn(t.url) };
  t.alt !== null && t.alt !== void 0 && (n.alt = t.alt), t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = { type: "element", tagName: "img", properties: n, children: [] };
  return e.patch(t, r), e.applyData(t, r);
}
function ub(e, t) {
  const n = { type: "text", value: t.value.replace(/\r?\n|\r/g, " ") };
  e.patch(t, n);
  const r = {
    type: "element",
    tagName: "code",
    properties: {},
    children: [n]
  };
  return e.patch(t, r), e.applyData(t, r);
}
function ab(e, t) {
  const n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
  if (!r)
    return Hs(e, t);
  const i = { href: kn(r.url || "") };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const o = {
    type: "element",
    tagName: "a",
    properties: i,
    children: e.all(t)
  };
  return e.patch(t, o), e.applyData(t, o);
}
function sb(e, t) {
  const n = { href: kn(t.url) };
  t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = {
    type: "element",
    tagName: "a",
    properties: n,
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function lb(e, t, n) {
  const r = e.all(t), i = n ? cb(n) : Ws(t), o = {}, u = [];
  if (typeof t.checked == "boolean") {
    const c = r[0];
    let d;
    c && c.type === "element" && c.tagName === "p" ? d = c : (d = { type: "element", tagName: "p", properties: {}, children: [] }, r.unshift(d)), d.children.length > 0 && d.children.unshift({ type: "text", value: " " }), d.children.unshift({
      type: "element",
      tagName: "input",
      properties: { type: "checkbox", checked: t.checked, disabled: !0 },
      children: []
    }), o.className = ["task-list-item"];
  }
  let a = -1;
  for (; ++a < r.length; ) {
    const c = r[a];
    (i || a !== 0 || c.type !== "element" || c.tagName !== "p") && u.push({ type: "text", value: `
` }), c.type === "element" && c.tagName === "p" && !i ? u.push(...c.children) : u.push(c);
  }
  const s = r[r.length - 1];
  s && (i || s.type !== "element" || s.tagName !== "p") && u.push({ type: "text", value: `
` });
  const l = { type: "element", tagName: "li", properties: o, children: u };
  return e.patch(t, l), e.applyData(t, l);
}
function cb(e) {
  let t = !1;
  if (e.type === "list") {
    t = e.spread || !1;
    const n = e.children;
    let r = -1;
    for (; !t && ++r < n.length; )
      t = Ws(n[r]);
  }
  return t;
}
function Ws(e) {
  const t = e.spread;
  return t ?? e.children.length > 1;
}
function db(e, t) {
  const n = {}, r = e.all(t);
  let i = -1;
  for (typeof t.start == "number" && t.start !== 1 && (n.start = t.start); ++i < r.length; ) {
    const u = r[i];
    if (u.type === "element" && u.tagName === "li" && u.properties && Array.isArray(u.properties.className) && u.properties.className.includes("task-list-item")) {
      n.className = ["contains-task-list"];
      break;
    }
  }
  const o = {
    type: "element",
    tagName: t.ordered ? "ol" : "ul",
    properties: n,
    children: e.wrap(r, !0)
  };
  return e.patch(t, o), e.applyData(t, o);
}
function fb(e, t) {
  const n = {
    type: "element",
    tagName: "p",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function pb(e, t) {
  const n = { type: "root", children: e.wrap(e.all(t)) };
  return e.patch(t, n), e.applyData(t, n);
}
function hb(e, t) {
  const n = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function gb(e, t) {
  const n = e.all(t), r = n.shift(), i = [];
  if (r) {
    const u = {
      type: "element",
      tagName: "thead",
      properties: {},
      children: e.wrap([r], !0)
    };
    e.patch(t.children[0], u), i.push(u);
  }
  if (n.length > 0) {
    const u = {
      type: "element",
      tagName: "tbody",
      properties: {},
      children: e.wrap(n, !0)
    }, a = go(t.children[1]), s = As(t.children[t.children.length - 1]);
    a && s && (u.position = { start: a, end: s }), i.push(u);
  }
  const o = {
    type: "element",
    tagName: "table",
    properties: {},
    children: e.wrap(i, !0)
  };
  return e.patch(t, o), e.applyData(t, o);
}
function mb(e, t, n) {
  const r = n ? n.children : void 0, o = (r ? r.indexOf(t) : 1) === 0 ? "th" : "td", u = n && n.type === "table" ? n.align : void 0, a = u ? u.length : t.children.length;
  let s = -1;
  const l = [];
  for (; ++s < a; ) {
    const d = t.children[s], p = {}, f = u ? u[s] : void 0;
    f && (p.align = f);
    let y = { type: "element", tagName: o, properties: p, children: [] };
    d && (y.children = e.all(d), e.patch(d, y), y = e.applyData(d, y)), l.push(y);
  }
  const c = {
    type: "element",
    tagName: "tr",
    properties: {},
    children: e.wrap(l, !0)
  };
  return e.patch(t, c), e.applyData(t, c);
}
function bb(e, t) {
  const n = {
    type: "element",
    tagName: "td",
    // Assume body cell.
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
const zu = 9, Hu = 32;
function yb(e) {
  const t = String(e), n = /\r?\n|\r/g;
  let r = n.exec(t), i = 0;
  const o = [];
  for (; r; )
    o.push(
      Wu(t.slice(i, r.index), i > 0, !0),
      r[0]
    ), i = r.index + r[0].length, r = n.exec(t);
  return o.push(Wu(t.slice(i), i > 0, !1)), o.join("");
}
function Wu(e, t, n) {
  let r = 0, i = e.length;
  if (t) {
    let o = e.codePointAt(r);
    for (; o === zu || o === Hu; )
      r++, o = e.codePointAt(r);
  }
  if (n) {
    let o = e.codePointAt(i - 1);
    for (; o === zu || o === Hu; )
      i--, o = e.codePointAt(i - 1);
  }
  return i > r ? e.slice(r, i) : "";
}
function Ib(e, t) {
  const n = { type: "text", value: yb(String(t.value)) };
  return e.patch(t, n), e.applyData(t, n);
}
function Cb(e, t) {
  const n = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return e.patch(t, n), e.applyData(t, n);
}
const vb = {
  blockquote: Qm,
  break: qm,
  code: $m,
  delete: Km,
  emphasis: eb,
  footnoteReference: tb,
  heading: nb,
  html: rb,
  imageReference: ib,
  image: ob,
  inlineCode: ub,
  linkReference: ab,
  link: sb,
  listItem: lb,
  list: db,
  paragraph: fb,
  // @ts-expect-error: root is different, but hard to type.
  root: pb,
  strong: hb,
  table: gb,
  tableCell: bb,
  tableRow: mb,
  text: Ib,
  thematicBreak: Cb,
  toml: Ir,
  yaml: Ir,
  definition: Ir,
  footnoteDefinition: Ir
};
function Ir() {
}
const Zs = -1, Zr = 0, Nr = 1, Mr = 2, xo = 3, Ao = 4, So = 5, wo = 6, js = 7, Js = 8, Zu = typeof self == "object" ? self : globalThis, xb = (e, t) => {
  const n = (i, o) => (e.set(o, i), i), r = (i) => {
    if (e.has(i))
      return e.get(i);
    const [o, u] = t[i];
    switch (o) {
      case Zr:
      case Zs:
        return n(u, i);
      case Nr: {
        const a = n([], i);
        for (const s of u)
          a.push(r(s));
        return a;
      }
      case Mr: {
        const a = n({}, i);
        for (const [s, l] of u)
          a[r(s)] = r(l);
        return a;
      }
      case xo:
        return n(new Date(u), i);
      case Ao: {
        const { source: a, flags: s } = u;
        return n(new RegExp(a, s), i);
      }
      case So: {
        const a = n(/* @__PURE__ */ new Map(), i);
        for (const [s, l] of u)
          a.set(r(s), r(l));
        return a;
      }
      case wo: {
        const a = n(/* @__PURE__ */ new Set(), i);
        for (const s of u)
          a.add(r(s));
        return a;
      }
      case js: {
        const { name: a, message: s } = u;
        return n(new Zu[a](s), i);
      }
      case Js:
        return n(BigInt(u), i);
      case "BigInt":
        return n(Object(BigInt(u)), i);
    }
    return n(new Zu[o](u), i);
  };
  return r;
}, ju = (e) => xb(/* @__PURE__ */ new Map(), e)(0), cn = "", { toString: Ab } = {}, { keys: Sb } = Object, Ln = (e) => {
  const t = typeof e;
  if (t !== "object" || !e)
    return [Zr, t];
  const n = Ab.call(e).slice(8, -1);
  switch (n) {
    case "Array":
      return [Nr, cn];
    case "Object":
      return [Mr, cn];
    case "Date":
      return [xo, cn];
    case "RegExp":
      return [Ao, cn];
    case "Map":
      return [So, cn];
    case "Set":
      return [wo, cn];
  }
  return n.includes("Array") ? [Nr, n] : n.includes("Error") ? [js, n] : [Mr, n];
}, Cr = ([e, t]) => e === Zr && (t === "function" || t === "symbol"), wb = (e, t, n, r) => {
  const i = (u, a) => {
    const s = r.push(u) - 1;
    return n.set(a, s), s;
  }, o = (u) => {
    if (n.has(u))
      return n.get(u);
    let [a, s] = Ln(u);
    switch (a) {
      case Zr: {
        let c = u;
        switch (s) {
          case "bigint":
            a = Js, c = u.toString();
            break;
          case "function":
          case "symbol":
            if (e)
              throw new TypeError("unable to serialize " + s);
            c = null;
            break;
          case "undefined":
            return i([Zs], u);
        }
        return i([a, c], u);
      }
      case Nr: {
        if (s)
          return i([s, [...u]], u);
        const c = [], d = i([a, c], u);
        for (const p of u)
          c.push(o(p));
        return d;
      }
      case Mr: {
        if (s)
          switch (s) {
            case "BigInt":
              return i([s, u.toString()], u);
            case "Boolean":
            case "Number":
            case "String":
              return i([s, u.valueOf()], u);
          }
        if (t && "toJSON" in u)
          return o(u.toJSON());
        const c = [], d = i([a, c], u);
        for (const p of Sb(u))
          (e || !Cr(Ln(u[p]))) && c.push([o(p), o(u[p])]);
        return d;
      }
      case xo:
        return i([a, u.toISOString()], u);
      case Ao: {
        const { source: c, flags: d } = u;
        return i([a, { source: c, flags: d }], u);
      }
      case So: {
        const c = [], d = i([a, c], u);
        for (const [p, f] of u)
          (e || !(Cr(Ln(p)) || Cr(Ln(f)))) && c.push([o(p), o(f)]);
        return d;
      }
      case wo: {
        const c = [], d = i([a, c], u);
        for (const p of u)
          (e || !Cr(Ln(p))) && c.push(o(p));
        return d;
      }
    }
    const { message: l } = u;
    return i([a, { name: s, message: l }], u);
  };
  return o;
}, Ju = (e, { json: t, lossy: n } = {}) => {
  const r = [];
  return wb(!(t || n), !!t, /* @__PURE__ */ new Map(), r)(e), r;
}, Lr = typeof structuredClone == "function" ? (
  /* c8 ignore start */
  (e, t) => t && ("json" in t || "lossy" in t) ? ju(Ju(e, t)) : structuredClone(e)
) : (e, t) => ju(Ju(e, t));
function Eb(e, t) {
  const n = [{ type: "text", value: "↩" }];
  return t > 1 && n.push({
    type: "element",
    tagName: "sup",
    properties: {},
    children: [{ type: "text", value: String(t) }]
  }), n;
}
function Fb(e, t) {
  return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
}
function Pb(e) {
  const t = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", n = e.options.footnoteBackContent || Eb, r = e.options.footnoteBackLabel || Fb, i = e.options.footnoteLabel || "Footnotes", o = e.options.footnoteLabelTagName || "h2", u = e.options.footnoteLabelProperties || {
    className: ["sr-only"]
  }, a = [];
  let s = -1;
  for (; ++s < e.footnoteOrder.length; ) {
    const l = e.footnoteById.get(
      e.footnoteOrder[s]
    );
    if (!l)
      continue;
    const c = e.all(l), d = String(l.identifier).toUpperCase(), p = kn(d.toLowerCase());
    let f = 0;
    const y = [], m = e.footnoteCounts.get(d);
    for (; m !== void 0 && ++f <= m; ) {
      y.length > 0 && y.push({ type: "text", value: " " });
      let A = typeof n == "string" ? n : n(s, f);
      typeof A == "string" && (A = { type: "text", value: A }), y.push({
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + t + "fnref-" + p + (f > 1 ? "-" + f : ""),
          dataFootnoteBackref: "",
          ariaLabel: typeof r == "string" ? r : r(s, f),
          className: ["data-footnote-backref"]
        },
        children: Array.isArray(A) ? A : [A]
      });
    }
    const I = c[c.length - 1];
    if (I && I.type === "element" && I.tagName === "p") {
      const A = I.children[I.children.length - 1];
      A && A.type === "text" ? A.value += " " : I.children.push({ type: "text", value: " " }), I.children.push(...y);
    } else
      c.push(...y);
    const C = {
      type: "element",
      tagName: "li",
      properties: { id: t + "fn-" + p },
      children: e.wrap(c, !0)
    };
    e.patch(l, C), a.push(C);
  }
  if (a.length !== 0)
    return {
      type: "element",
      tagName: "section",
      properties: { dataFootnotes: !0, className: ["footnotes"] },
      children: [
        {
          type: "element",
          tagName: o,
          properties: {
            ...Lr(u),
            id: "footnote-label"
          },
          children: [{ type: "text", value: i }]
        },
        { type: "text", value: `
` },
        {
          type: "element",
          tagName: "ol",
          properties: {},
          children: e.wrap(a, !0)
        },
        { type: "text", value: `
` }
      ]
    };
}
const Ys = (
  // Note: overloads in JSDoc can’t yet use different `@template`s.
  /**
   * @type {(
   *   (<Condition extends string>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & {type: Condition}) &
   *   (<Condition extends Props>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Condition) &
   *   (<Condition extends TestFunction>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Predicate<Condition, Node>) &
   *   ((test?: null | undefined) => (node?: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node) &
   *   ((test?: Test) => Check)
   * )}
   */
  /**
   * @param {Test} [test]
   * @returns {Check}
   */
  function(e) {
    if (e == null)
      return Bb;
    if (typeof e == "function")
      return jr(e);
    if (typeof e == "object")
      return Array.isArray(e) ? Gb(e) : Rb(e);
    if (typeof e == "string")
      return kb(e);
    throw new Error("Expected function, string, or object as test");
  }
);
function Gb(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.length; )
    t[n] = Ys(e[n]);
  return jr(r);
  function r(...i) {
    let o = -1;
    for (; ++o < t.length; )
      if (t[o].apply(this, i)) return !0;
    return !1;
  }
}
function Rb(e) {
  const t = (
    /** @type {Record<string, unknown>} */
    e
  );
  return jr(n);
  function n(r) {
    const i = (
      /** @type {Record<string, unknown>} */
      /** @type {unknown} */
      r
    );
    let o;
    for (o in e)
      if (i[o] !== t[o]) return !1;
    return !0;
  }
}
function kb(e) {
  return jr(t);
  function t(n) {
    return n && n.type === e;
  }
}
function jr(e) {
  return t;
  function t(n, r, i) {
    return !!(Ob(n) && e.call(
      this,
      n,
      typeof r == "number" ? r : void 0,
      i || void 0
    ));
  }
}
function Bb() {
  return !0;
}
function Ob(e) {
  return e !== null && typeof e == "object" && "type" in e;
}
const _s = [], Tb = !0, Yu = !1, Vb = "skip";
function Db(e, t, n, r) {
  let i;
  typeof t == "function" && typeof n != "function" ? (r = n, n = t) : i = t;
  const o = Ys(i), u = r ? -1 : 1;
  a(e, void 0, [])();
  function a(s, l, c) {
    const d = (
      /** @type {Record<string, unknown>} */
      s && typeof s == "object" ? s : {}
    );
    if (typeof d.type == "string") {
      const f = (
        // `hast`
        typeof d.tagName == "string" ? d.tagName : (
          // `xast`
          typeof d.name == "string" ? d.name : void 0
        )
      );
      Object.defineProperty(p, "name", {
        value: "node (" + (s.type + (f ? "<" + f + ">" : "")) + ")"
      });
    }
    return p;
    function p() {
      let f = _s, y, m, I;
      if ((!t || o(s, l, c[c.length - 1] || void 0)) && (f = Nb(n(s, c)), f[0] === Yu))
        return f;
      if ("children" in s && s.children) {
        const C = (
          /** @type {UnistParent} */
          s
        );
        if (C.children && f[0] !== Vb)
          for (m = (r ? C.children.length : -1) + u, I = c.concat(C); m > -1 && m < C.children.length; ) {
            const A = C.children[m];
            if (y = a(A, m, I)(), y[0] === Yu)
              return y;
            m = typeof y[1] == "number" ? y[1] : m + u;
          }
      }
      return f;
    }
  }
}
function Nb(e) {
  return Array.isArray(e) ? e : typeof e == "number" ? [Tb, e] : e == null ? _s : [e];
}
function Us(e, t, n, r) {
  let i, o, u;
  typeof t == "function" ? (o = void 0, u = t, i = n) : (o = t, u = n, i = r), Db(e, o, a, i);
  function a(s, l) {
    const c = l[l.length - 1], d = c ? c.children.indexOf(s) : void 0;
    return u(s, d, c);
  }
}
const Qi = {}.hasOwnProperty, Mb = {};
function Lb(e, t) {
  const n = t || Mb, r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), u = { ...vb, ...n.handlers }, a = {
    all: l,
    applyData: zb,
    definitionById: r,
    footnoteById: i,
    footnoteCounts: o,
    footnoteOrder: [],
    handlers: u,
    one: s,
    options: n,
    patch: Xb,
    wrap: Wb
  };
  return Us(e, function(c) {
    if (c.type === "definition" || c.type === "footnoteDefinition") {
      const d = c.type === "definition" ? r : i, p = String(c.identifier).toUpperCase();
      d.has(p) || d.set(p, c);
    }
  }), a;
  function s(c, d) {
    const p = c.type, f = a.handlers[p];
    if (Qi.call(a.handlers, p) && f)
      return f(a, c, d);
    if (a.options.passThrough && a.options.passThrough.includes(p)) {
      if ("children" in c) {
        const { children: m, ...I } = c, C = Lr(I);
        return C.children = a.all(c), C;
      }
      return Lr(c);
    }
    return (a.options.unknownHandler || Hb)(a, c, d);
  }
  function l(c) {
    const d = [];
    if ("children" in c) {
      const p = c.children;
      let f = -1;
      for (; ++f < p.length; ) {
        const y = a.one(p[f], c);
        if (y) {
          if (f && p[f - 1].type === "break" && (!Array.isArray(y) && y.type === "text" && (y.value = _u(y.value)), !Array.isArray(y) && y.type === "element")) {
            const m = y.children[0];
            m && m.type === "text" && (m.value = _u(m.value));
          }
          Array.isArray(y) ? d.push(...y) : d.push(y);
        }
      }
    }
    return d;
  }
}
function Xb(e, t) {
  e.position && (t.position = vh(e));
}
function zb(e, t) {
  let n = t;
  if (e && e.data) {
    const r = e.data.hName, i = e.data.hChildren, o = e.data.hProperties;
    if (typeof r == "string")
      if (n.type === "element")
        n.tagName = r;
      else {
        const u = "children" in n ? n.children : [n];
        n = { type: "element", tagName: r, properties: {}, children: u };
      }
    n.type === "element" && o && Object.assign(n.properties, Lr(o)), "children" in n && n.children && i !== null && i !== void 0 && (n.children = i);
  }
  return n;
}
function Hb(e, t) {
  const n = t.data || {}, r = "value" in t && !(Qi.call(n, "hProperties") || Qi.call(n, "hChildren")) ? { type: "text", value: t.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function Wb(e, t) {
  const n = [];
  let r = -1;
  for (t && n.push({ type: "text", value: `
` }); ++r < e.length; )
    r && n.push({ type: "text", value: `
` }), n.push(e[r]);
  return t && e.length > 0 && n.push({ type: "text", value: `
` }), n;
}
function _u(e) {
  let t = 0, n = e.charCodeAt(t);
  for (; n === 9 || n === 32; )
    t++, n = e.charCodeAt(t);
  return e.slice(t);
}
function Uu(e, t) {
  const n = Lb(e, t), r = n.one(e, void 0), i = Pb(n), o = Array.isArray(r) ? { type: "root", children: r } : r || { type: "root", children: [] };
  return i && o.children.push({ type: "text", value: `
` }, i), o;
}
function Zb(e, t) {
  return e && "run" in e ? async function(n, r) {
    const i = (
      /** @type {HastRoot} */
      Uu(n, { file: r, ...t })
    );
    await e.run(i, r);
  } : function(n, r) {
    return (
      /** @type {HastRoot} */
      Uu(n, { file: r, ...e || t })
    );
  };
}
function Qu(e) {
  if (e)
    throw e;
}
var wr = Object.prototype.hasOwnProperty, Qs = Object.prototype.toString, qu = Object.defineProperty, $u = Object.getOwnPropertyDescriptor, Ku = function(t) {
  return typeof Array.isArray == "function" ? Array.isArray(t) : Qs.call(t) === "[object Array]";
}, ea = function(t) {
  if (!t || Qs.call(t) !== "[object Object]")
    return !1;
  var n = wr.call(t, "constructor"), r = t.constructor && t.constructor.prototype && wr.call(t.constructor.prototype, "isPrototypeOf");
  if (t.constructor && !n && !r)
    return !1;
  var i;
  for (i in t)
    ;
  return typeof i > "u" || wr.call(t, i);
}, ta = function(t, n) {
  qu && n.name === "__proto__" ? qu(t, n.name, {
    enumerable: !0,
    configurable: !0,
    value: n.newValue,
    writable: !0
  }) : t[n.name] = n.newValue;
}, na = function(t, n) {
  if (n === "__proto__")
    if (wr.call(t, n)) {
      if ($u)
        return $u(t, n).value;
    } else return;
  return t[n];
}, jb = function e() {
  var t, n, r, i, o, u, a = arguments[0], s = 1, l = arguments.length, c = !1;
  for (typeof a == "boolean" && (c = a, a = arguments[1] || {}, s = 2), (a == null || typeof a != "object" && typeof a != "function") && (a = {}); s < l; ++s)
    if (t = arguments[s], t != null)
      for (n in t)
        r = na(a, n), i = na(t, n), a !== i && (c && i && (ea(i) || (o = Ku(i))) ? (o ? (o = !1, u = r && Ku(r) ? r : []) : u = r && ea(r) ? r : {}, ta(a, { name: n, newValue: e(c, u, i) })) : typeof i < "u" && ta(a, { name: n, newValue: i }));
  return a;
};
const gi = /* @__PURE__ */ va(jb);
function qi(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Jb() {
  const e = [], t = { run: n, use: r };
  return t;
  function n(...i) {
    let o = -1;
    const u = i.pop();
    if (typeof u != "function")
      throw new TypeError("Expected function as last argument, not " + u);
    a(null, ...i);
    function a(s, ...l) {
      const c = e[++o];
      let d = -1;
      if (s) {
        u(s);
        return;
      }
      for (; ++d < i.length; )
        (l[d] === null || l[d] === void 0) && (l[d] = i[d]);
      i = l, c ? Yb(c, a)(...l) : u(null, ...l);
    }
  }
  function r(i) {
    if (typeof i != "function")
      throw new TypeError(
        "Expected `middelware` to be a function, not " + i
      );
    return e.push(i), t;
  }
}
function Yb(e, t) {
  let n;
  return r;
  function r(...u) {
    const a = e.length > u.length;
    let s;
    a && u.push(i);
    try {
      s = e.apply(this, u);
    } catch (l) {
      const c = (
        /** @type {Error} */
        l
      );
      if (a && n)
        throw c;
      return i(c);
    }
    a || (s && s.then && typeof s.then == "function" ? s.then(o, i) : s instanceof Error ? i(s) : o(s));
  }
  function i(u, ...a) {
    n || (n = !0, t(u, ...a));
  }
  function o(u) {
    i(null, u);
  }
}
const st = { basename: _b, dirname: Ub, extname: Qb, join: qb, sep: "/" };
function _b(e, t) {
  if (t !== void 0 && typeof t != "string")
    throw new TypeError('"ext" argument must be a string');
  rr(e);
  let n = 0, r = -1, i = e.length, o;
  if (t === void 0 || t.length === 0 || t.length > e.length) {
    for (; i--; )
      if (e.codePointAt(i) === 47) {
        if (o) {
          n = i + 1;
          break;
        }
      } else r < 0 && (o = !0, r = i + 1);
    return r < 0 ? "" : e.slice(n, r);
  }
  if (t === e)
    return "";
  let u = -1, a = t.length - 1;
  for (; i--; )
    if (e.codePointAt(i) === 47) {
      if (o) {
        n = i + 1;
        break;
      }
    } else
      u < 0 && (o = !0, u = i + 1), a > -1 && (e.codePointAt(i) === t.codePointAt(a--) ? a < 0 && (r = i) : (a = -1, r = u));
  return n === r ? r = u : r < 0 && (r = e.length), e.slice(n, r);
}
function Ub(e) {
  if (rr(e), e.length === 0)
    return ".";
  let t = -1, n = e.length, r;
  for (; --n; )
    if (e.codePointAt(n) === 47) {
      if (r) {
        t = n;
        break;
      }
    } else r || (r = !0);
  return t < 0 ? e.codePointAt(0) === 47 ? "/" : "." : t === 1 && e.codePointAt(0) === 47 ? "//" : e.slice(0, t);
}
function Qb(e) {
  rr(e);
  let t = e.length, n = -1, r = 0, i = -1, o = 0, u;
  for (; t--; ) {
    const a = e.codePointAt(t);
    if (a === 47) {
      if (u) {
        r = t + 1;
        break;
      }
      continue;
    }
    n < 0 && (u = !0, n = t + 1), a === 46 ? i < 0 ? i = t : o !== 1 && (o = 1) : i > -1 && (o = -1);
  }
  return i < 0 || n < 0 || // We saw a non-dot character immediately before the dot.
  o === 0 || // The (right-most) trimmed path component is exactly `..`.
  o === 1 && i === n - 1 && i === r + 1 ? "" : e.slice(i, n);
}
function qb(...e) {
  let t = -1, n;
  for (; ++t < e.length; )
    rr(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
  return n === void 0 ? "." : $b(n);
}
function $b(e) {
  rr(e);
  const t = e.codePointAt(0) === 47;
  let n = Kb(e, !t);
  return n.length === 0 && !t && (n = "."), n.length > 0 && e.codePointAt(e.length - 1) === 47 && (n += "/"), t ? "/" + n : n;
}
function Kb(e, t) {
  let n = "", r = 0, i = -1, o = 0, u = -1, a, s;
  for (; ++u <= e.length; ) {
    if (u < e.length)
      a = e.codePointAt(u);
    else {
      if (a === 47)
        break;
      a = 47;
    }
    if (a === 47) {
      if (!(i === u - 1 || o === 1)) if (i !== u - 1 && o === 2) {
        if (n.length < 2 || r !== 2 || n.codePointAt(n.length - 1) !== 46 || n.codePointAt(n.length - 2) !== 46) {
          if (n.length > 2) {
            if (s = n.lastIndexOf("/"), s !== n.length - 1) {
              s < 0 ? (n = "", r = 0) : (n = n.slice(0, s), r = n.length - 1 - n.lastIndexOf("/")), i = u, o = 0;
              continue;
            }
          } else if (n.length > 0) {
            n = "", r = 0, i = u, o = 0;
            continue;
          }
        }
        t && (n = n.length > 0 ? n + "/.." : "..", r = 2);
      } else
        n.length > 0 ? n += "/" + e.slice(i + 1, u) : n = e.slice(i + 1, u), r = u - i - 1;
      i = u, o = 0;
    } else a === 46 && o > -1 ? o++ : o = -1;
  }
  return n;
}
function rr(e) {
  if (typeof e != "string")
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(e)
    );
}
const ey = { cwd: ty };
function ty() {
  return "/";
}
function $i(e) {
  return !!(e !== null && typeof e == "object" && "href" in e && e.href && "protocol" in e && e.protocol && // @ts-expect-error: indexing is fine.
  e.auth === void 0);
}
function ny(e) {
  if (typeof e == "string")
    e = new URL(e);
  else if (!$i(e)) {
    const t = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + e + "`"
    );
    throw t.code = "ERR_INVALID_ARG_TYPE", t;
  }
  if (e.protocol !== "file:") {
    const t = new TypeError("The URL must be of scheme file");
    throw t.code = "ERR_INVALID_URL_SCHEME", t;
  }
  return ry(e);
}
function ry(e) {
  if (e.hostname !== "") {
    const r = new TypeError(
      'File URL host must be "localhost" or empty on darwin'
    );
    throw r.code = "ERR_INVALID_FILE_URL_HOST", r;
  }
  const t = e.pathname;
  let n = -1;
  for (; ++n < t.length; )
    if (t.codePointAt(n) === 37 && t.codePointAt(n + 1) === 50) {
      const r = t.codePointAt(n + 2);
      if (r === 70 || r === 102) {
        const i = new TypeError(
          "File URL path must not include encoded / characters"
        );
        throw i.code = "ERR_INVALID_FILE_URL_PATH", i;
      }
    }
  return decodeURIComponent(t);
}
const mi = (
  /** @type {const} */
  [
    "history",
    "path",
    "basename",
    "stem",
    "extname",
    "dirname"
  ]
);
class qs {
  /**
   * Create a new virtual file.
   *
   * `options` is treated as:
   *
   * *   `string` or `Uint8Array` — `{value: options}`
   * *   `URL` — `{path: options}`
   * *   `VFile` — shallow copies its data over to the new file
   * *   `object` — all fields are shallow copied over to the new file
   *
   * Path related fields are set in the following order (least specific to
   * most specific): `history`, `path`, `basename`, `stem`, `extname`,
   * `dirname`.
   *
   * You cannot set `dirname` or `extname` without setting either `history`,
   * `path`, `basename`, or `stem` too.
   *
   * @param {Compatible | null | undefined} [value]
   *   File value.
   * @returns
   *   New instance.
   */
  constructor(t) {
    let n;
    t ? $i(t) ? n = { path: t } : typeof t == "string" || iy(t) ? n = { value: t } : n = t : n = {}, this.cwd = "cwd" in n ? "" : ey.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
    let r = -1;
    for (; ++r < mi.length; ) {
      const o = mi[r];
      o in n && n[o] !== void 0 && n[o] !== null && (this[o] = o === "history" ? [...n[o]] : n[o]);
    }
    let i;
    for (i in n)
      mi.includes(i) || (this[i] = n[i]);
  }
  /**
   * Get the basename (including extname) (example: `'index.min.js'`).
   *
   * @returns {string | undefined}
   *   Basename.
   */
  get basename() {
    return typeof this.path == "string" ? st.basename(this.path) : void 0;
  }
  /**
   * Set basename (including extname) (`'index.min.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} basename
   *   Basename.
   * @returns {undefined}
   *   Nothing.
   */
  set basename(t) {
    yi(t, "basename"), bi(t, "basename"), this.path = st.join(this.dirname || "", t);
  }
  /**
   * Get the parent path (example: `'~'`).
   *
   * @returns {string | undefined}
   *   Dirname.
   */
  get dirname() {
    return typeof this.path == "string" ? st.dirname(this.path) : void 0;
  }
  /**
   * Set the parent path (example: `'~'`).
   *
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} dirname
   *   Dirname.
   * @returns {undefined}
   *   Nothing.
   */
  set dirname(t) {
    ra(this.basename, "dirname"), this.path = st.join(t || "", this.basename);
  }
  /**
   * Get the extname (including dot) (example: `'.js'`).
   *
   * @returns {string | undefined}
   *   Extname.
   */
  get extname() {
    return typeof this.path == "string" ? st.extname(this.path) : void 0;
  }
  /**
   * Set the extname (including dot) (example: `'.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} extname
   *   Extname.
   * @returns {undefined}
   *   Nothing.
   */
  set extname(t) {
    if (bi(t, "extname"), ra(this.dirname, "extname"), t) {
      if (t.codePointAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (t.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = st.join(this.dirname, this.stem + (t || ""));
  }
  /**
   * Get the full path (example: `'~/index.min.js'`).
   *
   * @returns {string}
   *   Path.
   */
  get path() {
    return this.history[this.history.length - 1];
  }
  /**
   * Set the full path (example: `'~/index.min.js'`).
   *
   * Cannot be nullified.
   * You can set a file URL (a `URL` object with a `file:` protocol) which will
   * be turned into a path with `url.fileURLToPath`.
   *
   * @param {URL | string} path
   *   Path.
   * @returns {undefined}
   *   Nothing.
   */
  set path(t) {
    $i(t) && (t = ny(t)), yi(t, "path"), this.path !== t && this.history.push(t);
  }
  /**
   * Get the stem (basename w/o extname) (example: `'index.min'`).
   *
   * @returns {string | undefined}
   *   Stem.
   */
  get stem() {
    return typeof this.path == "string" ? st.basename(this.path, this.extname) : void 0;
  }
  /**
   * Set the stem (basename w/o extname) (example: `'index.min'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} stem
   *   Stem.
   * @returns {undefined}
   *   Nothing.
   */
  set stem(t) {
    yi(t, "stem"), bi(t, "stem"), this.path = st.join(this.dirname || "", t + (this.extname || ""));
  }
  // Normal prototypal methods.
  /**
   * Create a fatal message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `true` (error; file not usable)
   * and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {never}
   *   Never.
   * @throws {VFileMessage}
   *   Message.
   */
  fail(t, n, r) {
    const i = this.message(t, n, r);
    throw i.fatal = !0, i;
  }
  /**
   * Create an info message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `undefined` (info; change
   * likely not needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  info(t, n, r) {
    const i = this.message(t, n, r);
    return i.fatal = void 0, i;
  }
  /**
   * Create a message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `false` (warning; change may be
   * needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  message(t, n, r) {
    const i = new De(
      // @ts-expect-error: the overloads are fine.
      t,
      n,
      r
    );
    return this.path && (i.name = this.path + ":" + i.name, i.file = this.path), i.fatal = !1, this.messages.push(i), i;
  }
  /**
   * Serialize the file.
   *
   * > **Note**: which encodings are supported depends on the engine.
   * > For info on Node.js, see:
   * > <https://nodejs.org/api/util.html#whatwg-supported-encodings>.
   *
   * @param {string | null | undefined} [encoding='utf8']
   *   Character encoding to understand `value` as when it’s a `Uint8Array`
   *   (default: `'utf-8'`).
   * @returns {string}
   *   Serialized file.
   */
  toString(t) {
    return this.value === void 0 ? "" : typeof this.value == "string" ? this.value : new TextDecoder(t || void 0).decode(this.value);
  }
}
function bi(e, t) {
  if (e && e.includes(st.sep))
    throw new Error(
      "`" + t + "` cannot be a path: did not expect `" + st.sep + "`"
    );
}
function yi(e, t) {
  if (!e)
    throw new Error("`" + t + "` cannot be empty");
}
function ra(e, t) {
  if (!e)
    throw new Error("Setting `" + t + "` requires `path` to be set too");
}
function iy(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const oy = (
  /**
   * @type {new <Parameters extends Array<unknown>, Result>(property: string | symbol) => (...parameters: Parameters) => Result}
   */
  /** @type {unknown} */
  /**
   * @this {Function}
   * @param {string | symbol} property
   * @returns {(...parameters: Array<unknown>) => unknown}
   */
  function(e) {
    const r = (
      /** @type {Record<string | symbol, Function>} */
      // Prototypes do exist.
      // type-coverage:ignore-next-line
      this.constructor.prototype
    ), i = r[e], o = function() {
      return i.apply(o, arguments);
    };
    return Object.setPrototypeOf(o, r), o;
  }
), uy = {}.hasOwnProperty;
class Eo extends oy {
  /**
   * Create a processor.
   */
  constructor() {
    super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = Jb();
  }
  /**
   * Copy a processor.
   *
   * @deprecated
   *   This is a private internal method and should not be used.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   New *unfrozen* processor ({@linkcode Processor}) that is
   *   configured to work the same as its ancestor.
   *   When the descendant processor is configured in the future it does not
   *   affect the ancestral processor.
   */
  copy() {
    const t = (
      /** @type {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>} */
      new Eo()
    );
    let n = -1;
    for (; ++n < this.attachers.length; ) {
      const r = this.attachers[n];
      t.use(...r);
    }
    return t.data(gi(!0, {}, this.namespace)), t;
  }
  /**
   * Configure the processor with info available to all plugins.
   * Information is stored in an object.
   *
   * Typically, options can be given to a specific plugin, but sometimes it
   * makes sense to have information shared with several plugins.
   * For example, a list of HTML elements that are self-closing, which is
   * needed during all phases.
   *
   * > **Note**: setting information cannot occur on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * > **Note**: to register custom data in TypeScript, augment the
   * > {@linkcode Data} interface.
   *
   * @example
   *   This example show how to get and set info:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   const processor = unified().data('alpha', 'bravo')
   *
   *   processor.data('alpha') // => 'bravo'
   *
   *   processor.data() // => {alpha: 'bravo'}
   *
   *   processor.data({charlie: 'delta'})
   *
   *   processor.data() // => {charlie: 'delta'}
   *   ```
   *
   * @template {keyof Data} Key
   *
   * @overload
   * @returns {Data}
   *
   * @overload
   * @param {Data} dataset
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Key} key
   * @returns {Data[Key]}
   *
   * @overload
   * @param {Key} key
   * @param {Data[Key]} value
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @param {Data | Key} [key]
   *   Key to get or set, or entire dataset to set, or nothing to get the
   *   entire dataset (optional).
   * @param {Data[Key]} [value]
   *   Value to set (optional).
   * @returns {unknown}
   *   The current processor when setting, the value at `key` when getting, or
   *   the entire dataset when getting without key.
   */
  data(t, n) {
    return typeof t == "string" ? arguments.length === 2 ? (vi("data", this.frozen), this.namespace[t] = n, this) : uy.call(this.namespace, t) && this.namespace[t] || void 0 : t ? (vi("data", this.frozen), this.namespace = t, this) : this.namespace;
  }
  /**
   * Freeze a processor.
   *
   * Frozen processors are meant to be extended and not to be configured
   * directly.
   *
   * When a processor is frozen it cannot be unfrozen.
   * New processors working the same way can be created by calling the
   * processor.
   *
   * It’s possible to freeze processors explicitly by calling `.freeze()`.
   * Processors freeze automatically when `.parse()`, `.run()`, `.runSync()`,
   * `.stringify()`, `.process()`, or `.processSync()` are called.
   *
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   The current processor.
   */
  freeze() {
    if (this.frozen)
      return this;
    const t = (
      /** @type {Processor} */
      /** @type {unknown} */
      this
    );
    for (; ++this.freezeIndex < this.attachers.length; ) {
      const [n, ...r] = this.attachers[this.freezeIndex];
      if (r[0] === !1)
        continue;
      r[0] === !0 && (r[0] = void 0);
      const i = n.call(t, ...r);
      typeof i == "function" && this.transformers.use(i);
    }
    return this.frozen = !0, this.freezeIndex = Number.POSITIVE_INFINITY, this;
  }
  /**
   * Parse text to a syntax tree.
   *
   * > **Note**: `parse` freezes the processor if not already *frozen*.
   *
   * > **Note**: `parse` performs the parse phase, not the run phase or other
   * > phases.
   *
   * @param {Compatible | undefined} [file]
   *   file to parse (optional); typically `string` or `VFile`; any value
   *   accepted as `x` in `new VFile(x)`.
   * @returns {ParseTree extends undefined ? Node : ParseTree}
   *   Syntax tree representing `file`.
   */
  parse(t) {
    this.freeze();
    const n = vr(t), r = this.parser || this.Parser;
    return Ii("parse", r), r(String(n), n);
  }
  /**
   * Process the given file as configured on the processor.
   *
   * > **Note**: `process` freezes the processor if not already *frozen*.
   *
   * > **Note**: `process` performs the parse, run, and stringify phases.
   *
   * @overload
   * @param {Compatible | undefined} file
   * @param {ProcessCallback<VFileWithOutput<CompileResult>>} done
   * @returns {undefined}
   *
   * @overload
   * @param {Compatible | undefined} [file]
   * @returns {Promise<VFileWithOutput<CompileResult>>}
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`]; any value accepted as
   *   `x` in `new VFile(x)`.
   * @param {ProcessCallback<VFileWithOutput<CompileResult>> | undefined} [done]
   *   Callback (optional).
   * @returns {Promise<VFile> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise a promise, rejected with a fatal error or resolved with the
   *   processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  process(t, n) {
    const r = this;
    return this.freeze(), Ii("process", this.parser || this.Parser), Ci("process", this.compiler || this.Compiler), n ? i(void 0, n) : new Promise(i);
    function i(o, u) {
      const a = vr(t), s = (
        /** @type {HeadTree extends undefined ? Node : HeadTree} */
        /** @type {unknown} */
        r.parse(a)
      );
      r.run(s, a, function(c, d, p) {
        if (c || !d || !p)
          return l(c);
        const f = (
          /** @type {CompileTree extends undefined ? Node : CompileTree} */
          /** @type {unknown} */
          d
        ), y = r.stringify(f, p);
        ly(y) ? p.value = y : p.result = y, l(
          c,
          /** @type {VFileWithOutput<CompileResult>} */
          p
        );
      });
      function l(c, d) {
        c || !d ? u(c) : o ? o(d) : n(void 0, d);
      }
    }
  }
  /**
   * Process the given file as configured on the processor.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > **Note**: `processSync` freezes the processor if not already *frozen*.
   *
   * > **Note**: `processSync` performs the parse, run, and stringify phases.
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`; any value accepted as
   *   `x` in `new VFile(x)`.
   * @returns {VFileWithOutput<CompileResult>}
   *   The processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  processSync(t) {
    let n = !1, r;
    return this.freeze(), Ii("processSync", this.parser || this.Parser), Ci("processSync", this.compiler || this.Compiler), this.process(t, i), oa("processSync", "process", n), r;
    function i(o, u) {
      n = !0, Qu(o), r = u;
    }
  }
  /**
   * Run *transformers* on a syntax tree.
   *
   * > **Note**: `run` freezes the processor if not already *frozen*.
   *
   * > **Note**: `run` performs the run phase, not other phases.
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} file
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} [file]
   * @returns {Promise<TailTree extends undefined ? Node : TailTree>}
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {(
   *   RunCallback<TailTree extends undefined ? Node : TailTree> |
   *   Compatible
   * )} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} [done]
   *   Callback (optional).
   * @returns {Promise<TailTree extends undefined ? Node : TailTree> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise, a promise rejected with a fatal error or resolved with the
   *   transformed tree.
   */
  run(t, n, r) {
    ia(t), this.freeze();
    const i = this.transformers;
    return !r && typeof n == "function" && (r = n, n = void 0), r ? o(void 0, r) : new Promise(o);
    function o(u, a) {
      const s = vr(n);
      i.run(t, s, l);
      function l(c, d, p) {
        const f = (
          /** @type {TailTree extends undefined ? Node : TailTree} */
          d || t
        );
        c ? a(c) : u ? u(f) : r(void 0, f, p);
      }
    }
  }
  /**
   * Run *transformers* on a syntax tree.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > **Note**: `runSync` freezes the processor if not already *frozen*.
   *
   * > **Note**: `runSync` performs the run phase, not other phases.
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {TailTree extends undefined ? Node : TailTree}
   *   Transformed tree.
   */
  runSync(t, n) {
    let r = !1, i;
    return this.run(t, n, o), oa("runSync", "run", r), i;
    function o(u, a) {
      Qu(u), i = a, r = !0;
    }
  }
  /**
   * Compile a syntax tree.
   *
   * > **Note**: `stringify` freezes the processor if not already *frozen*.
   *
   * > **Note**: `stringify` performs the stringify phase, not the run phase
   * > or other phases.
   *
   * @param {CompileTree extends undefined ? Node : CompileTree} tree
   *   Tree to compile.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {CompileResult extends undefined ? Value : CompileResult}
   *   Textual representation of the tree (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most compilers
   *   > return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  stringify(t, n) {
    this.freeze();
    const r = vr(n), i = this.compiler || this.Compiler;
    return Ci("stringify", i), ia(t), i(t, r);
  }
  /**
   * Configure the processor to use a plugin, a list of usable values, or a
   * preset.
   *
   * If the processor is already using a plugin, the previous plugin
   * configuration is changed based on the options that are passed in.
   * In other words, the plugin is not added a second time.
   *
   * > **Note**: `use` cannot be called on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * @example
   *   There are many ways to pass plugins to `.use()`.
   *   This example gives an overview:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   unified()
   *     // Plugin with options:
   *     .use(pluginA, {x: true, y: true})
   *     // Passing the same plugin again merges configuration (to `{x: true, y: false, z: true}`):
   *     .use(pluginA, {y: false, z: true})
   *     // Plugins:
   *     .use([pluginB, pluginC])
   *     // Two plugins, the second with options:
   *     .use([pluginD, [pluginE, {}]])
   *     // Preset with plugins and settings:
   *     .use({plugins: [pluginF, [pluginG, {}]], settings: {position: false}})
   *     // Settings only:
   *     .use({settings: {position: false}})
   *   ```
   *
   * @template {Array<unknown>} [Parameters=[]]
   * @template {Node | string | undefined} [Input=undefined]
   * @template [Output=Input]
   *
   * @overload
   * @param {Preset | null | undefined} [preset]
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {PluggableList} list
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Plugin<Parameters, Input, Output>} plugin
   * @param {...(Parameters | [boolean])} parameters
   * @returns {UsePlugin<ParseTree, HeadTree, TailTree, CompileTree, CompileResult, Input, Output>}
   *
   * @param {PluggableList | Plugin | Preset | null | undefined} value
   *   Usable value.
   * @param {...unknown} parameters
   *   Parameters, when a plugin is given as a usable value.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   Current processor.
   */
  use(t, ...n) {
    const r = this.attachers, i = this.namespace;
    if (vi("use", this.frozen), t != null) if (typeof t == "function")
      s(t, n);
    else if (typeof t == "object")
      Array.isArray(t) ? a(t) : u(t);
    else
      throw new TypeError("Expected usable value, not `" + t + "`");
    return this;
    function o(l) {
      if (typeof l == "function")
        s(l, []);
      else if (typeof l == "object")
        if (Array.isArray(l)) {
          const [c, ...d] = (
            /** @type {PluginTuple<Array<unknown>>} */
            l
          );
          s(c, d);
        } else
          u(l);
      else
        throw new TypeError("Expected usable value, not `" + l + "`");
    }
    function u(l) {
      if (!("plugins" in l) && !("settings" in l))
        throw new Error(
          "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither"
        );
      a(l.plugins), l.settings && (i.settings = gi(!0, i.settings, l.settings));
    }
    function a(l) {
      let c = -1;
      if (l != null) if (Array.isArray(l))
        for (; ++c < l.length; ) {
          const d = l[c];
          o(d);
        }
      else
        throw new TypeError("Expected a list of plugins, not `" + l + "`");
    }
    function s(l, c) {
      let d = -1, p = -1;
      for (; ++d < r.length; )
        if (r[d][0] === l) {
          p = d;
          break;
        }
      if (p === -1)
        r.push([l, ...c]);
      else if (c.length > 0) {
        let [f, ...y] = c;
        const m = r[p][1];
        qi(m) && qi(f) && (f = gi(!0, m, f)), r[p] = [l, f, ...y];
      }
    }
  }
}
const ay = new Eo().freeze();
function Ii(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `parser`");
}
function Ci(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `compiler`");
}
function vi(e, t) {
  if (t)
    throw new Error(
      "Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function ia(e) {
  if (!qi(e) || typeof e.type != "string")
    throw new TypeError("Expected node, got `" + e + "`");
}
function oa(e, t, n) {
  if (!n)
    throw new Error(
      "`" + e + "` finished async. Use `" + t + "` instead"
    );
}
function vr(e) {
  return sy(e) ? e : new qs(e);
}
function sy(e) {
  return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function ly(e) {
  return typeof e == "string" || cy(e);
}
function cy(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const dy = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", ua = [], aa = { allowDangerousHtml: !0 }, fy = /^(https?|ircs?|mailto|xmpp)$/i, py = [
  { from: "astPlugins", id: "remove-buggy-html-in-markdown-parser" },
  { from: "allowDangerousHtml", id: "remove-buggy-html-in-markdown-parser" },
  {
    from: "allowNode",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "allowElement"
  },
  {
    from: "allowedTypes",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "allowedElements"
  },
  {
    from: "disallowedTypes",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "disallowedElements"
  },
  { from: "escapeHtml", id: "remove-buggy-html-in-markdown-parser" },
  { from: "includeElementIndex", id: "#remove-includeelementindex" },
  {
    from: "includeNodeIndex",
    id: "change-includenodeindex-to-includeelementindex"
  },
  { from: "linkTarget", id: "remove-linktarget" },
  { from: "plugins", id: "change-plugins-to-remarkplugins", to: "remarkPlugins" },
  { from: "rawSourcePos", id: "#remove-rawsourcepos" },
  { from: "renderers", id: "change-renderers-to-components", to: "components" },
  { from: "source", id: "change-source-to-children", to: "children" },
  { from: "sourcePos", id: "#remove-sourcepos" },
  { from: "transformImageUri", id: "#add-urltransform", to: "urlTransform" },
  { from: "transformLinkUri", id: "#add-urltransform", to: "urlTransform" }
];
function hy(e) {
  const t = e.allowedElements, n = e.allowElement, r = e.children || "", i = e.className, o = e.components, u = e.disallowedElements, a = e.rehypePlugins || ua, s = e.remarkPlugins || ua, l = e.remarkRehypeOptions ? { ...e.remarkRehypeOptions, ...aa } : aa, c = e.skipHtml, d = e.unwrapDisallowed, p = e.urlTransform || gy, f = ay().use(Um).use(s).use(Zb, l).use(a), y = new qs();
  typeof r == "string" && (y.value = r);
  for (const A of py)
    Object.hasOwn(e, A.from) && ("" + A.from + (A.to ? "use `" + A.to + "` instead" : "remove it") + dy + A.id, void 0);
  const m = f.parse(y);
  let I = f.runSync(m, y);
  return i && (I = {
    type: "element",
    tagName: "div",
    properties: { className: i },
    // Assume no doctypes.
    children: (
      /** @type {Array<ElementContent>} */
      I.type === "root" ? I.children : [I]
    )
  }), Us(I, C), Fh(I, {
    Fragment: Ql,
    // @ts-expect-error
    // React components are allowed to return numbers,
    // but not according to the types in hast-util-to-jsx-runtime
    components: o,
    ignoreInvalidStyle: !0,
    jsx: W,
    jsxs: gt,
    passKeys: !0,
    passNode: !0
  });
  function C(A, E, S) {
    if (A.type === "raw" && S && typeof E == "number")
      return c ? S.children.splice(E, 1) : S.children[E] = { type: "text", value: A.value }, E;
    if (A.type === "element") {
      let P;
      for (P in fi)
        if (Object.hasOwn(fi, P) && Object.hasOwn(A.properties, P)) {
          const w = A.properties[P], k = fi[P];
          (k === null || k.includes(A.tagName)) && (A.properties[P] = p(String(w || ""), P, A));
        }
    }
    if (A.type === "element") {
      let P = t ? !t.includes(A.tagName) : u ? u.includes(A.tagName) : !1;
      if (!P && n && typeof E == "number" && (P = !n(A, E, S)), P && S && typeof E == "number")
        return d && A.children ? S.children.splice(E, 1, ...A.children) : S.children.splice(E, 1), E;
    }
  }
}
function gy(e) {
  const t = e.indexOf(":"), n = e.indexOf("?"), r = e.indexOf("#"), i = e.indexOf("/");
  return (
    // If there is no protocol, it’s relative.
    t === -1 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
    i !== -1 && t > i || n !== -1 && t > n || r !== -1 && t > r || // It is a protocol, it should be allowed.
    fy.test(e.slice(0, t)) ? e : ""
  );
}
function my(e) {
  e.field || console.log("props", e);
  const {
    field: t,
    markdown: n
  } = e, { prop: r } = t, {
    getClassNames: i,
    getStyles: o,
    theme: u
  } = Ye(), a = {
    color: u.colors.neutral50,
    fontWeight: 400,
    fontSize: "0.75rem",
    gridArea: "description",
    textWrap: "balance",
    lineHeight: "1.5"
  };
  return r.type === "app" ? /* @__PURE__ */ W("p", { className: i("description", e), style: o("description", a, e), children: "Credentials are encrypted." }) : r.description ? /* @__PURE__ */ W("div", { className: i("description", e), style: o("description", a, e), children: /* @__PURE__ */ W(hy, { children: n }) }) : null;
}
function by(e) {
  const { errors: t } = e, {
    getProps: n,
    theme: r
  } = Ye(), i = {
    color: r.colors.danger,
    gridArea: "errors"
  };
  return t.length ? /* @__PURE__ */ W("ul", { ...n("errors", i, e), children: t.map((o) => /* @__PURE__ */ W("li", { ...n("error", i, e), children: o }, o)) }) : null;
}
function yy(e) {
  const {
    text: t,
    field: n
  } = e, { id: r } = n, {
    getProps: i,
    theme: o
  } = Ye(), u = {
    color: o.colors.neutral90,
    fontWeight: 450,
    gridArea: "label",
    lineHeight: "1.5"
  };
  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    /* @__PURE__ */ W("label", { htmlFor: r, ...i("label", u, e), children: t })
  );
}
const Iy = (e) => {
  const {
    prop: t,
    enabled: n,
    onClick: r
  } = e, {
    getProps: i,
    theme: o
  } = Ye(), u = {
    color: o.colors.neutral60,
    display: "inline-flex",
    alignItems: "center",
    padding: `${o.spacing.baseUnit}px ${o.spacing.baseUnit * 1.5}px ${o.spacing.baseUnit}px ${o.spacing.baseUnit * 2.5}px`,
    border: `1px solid ${o.colors.neutral30}`,
    borderRadius: o.borderRadius,
    cursor: "pointer",
    fontSize: "0.8125rem",
    fontWeight: 450,
    gap: o.spacing.baseUnit * 2,
    textWrap: "nowrap"
  };
  return /* @__PURE__ */ gt("button", { onClick: r, type: "button", ...i("optionalFieldButton", u, e), children: [
    /* @__PURE__ */ W("span", { children: n ? "-" : "+" }),
    /* @__PURE__ */ W("span", { style: {
      marginRight: 8
    }, children: t.label || t.name })
  ] });
}, $s = (e) => {
  const { onChange: t } = e, {
    getProps: n,
    theme: r
  } = Ye(), i = {
    backgroundColor: r.colors.primary,
    borderRadius: r.borderRadius,
    border: "solid 1px",
    borderColor: r.colors.primary25,
    color: r.colors.primary25,
    padding: "0.5rem",
    fontSize: "0.8125rem",
    fontWeight: "450",
    gridArea: "control",
    cursor: "pointer",
    width: "100%"
  };
  return /* @__PURE__ */ W("button", { onClick: t, type: "button", ...n("loadMoreButton", i, e), children: "Load More" });
}, Cy = {
  Description: my,
  Errors: by,
  Label: yy,
  OptionalFieldButton: Iy,
  Button: $s
}, Fo = Kn({
  // eslint-disable-line @typescript-eslint/no-explicit-any
  classNames: {},
  classNamePrefix: "",
  components: {},
  styles: {},
  theme: fo,
  unstyled: !1
});
function vy() {
  const e = Gn(Fo) ?? {}, t = zp(e.theme ?? {});
  function n() {
    return e.classNamePrefix ?? "";
  }
  function r(a) {
    var c;
    const s = `${(e == null ? void 0 : e.classNamePrefix) ?? "pd-"}${a}`, l = {
      ...((c = e.classNames) == null ? void 0 : c[a]) ?? {}
    };
    return typeof (l == null ? void 0 : l.container) == "function" && (l.container = typeof (l == null ? void 0 : l.container) == "function" ? (...d) => {
      var p;
      return [
        (p = l == null ? void 0 : l.container) == null ? void 0 : p.call(l, ...d),
        s
      ].join(" ");
    } : () => s), l;
  }
  function i(a, s) {
    var l;
    return {
      ...tr,
      ...s ?? {},
      ...((l = e == null ? void 0 : e.components) == null ? void 0 : l[a]) ?? {}
    };
  }
  function o(a, s) {
    var l;
    return Fp(((l = e.styles) == null ? void 0 : l[a]) ?? {}, s ?? {});
  }
  function u(a, s) {
    return {
      classNamePrefix: n(),
      classNames: r(a),
      components: i(a, s == null ? void 0 : s.components),
      styles: o(a, s == null ? void 0 : s.styles),
      theme: t
    };
  }
  return {
    getClassNamePrefix: n,
    getClassNames: r,
    getComponents: i,
    getProps: u,
    getStyles: o,
    theme: t
  };
}
function Ye() {
  const e = Gn(Fo) ?? {}, t = e.theme, n = e.unstyled ? Xp : fo, r = typeof t == "function" ? Wi(n, t(n)) : Wi(n, t);
  function i(s, l) {
    var p;
    const c = `${(e == null ? void 0 : e.classNamePrefix) ?? "pd-"}${s.toLowerCase()}`, d = (p = e.classNames) == null ? void 0 : p[s];
    if (typeof d == "function") {
      const f = d, y = {
        ...l ?? {},
        theme: r
      };
      return [
        c,
        f(y)
      ].filter(Boolean).join(" ");
    }
    return [
      c,
      d
    ].filter(Boolean).join(" ");
  }
  function o() {
    return {
      ...Cy,
      ...(e == null ? void 0 : e.components) ?? {}
    };
  }
  function u(s, l, c) {
    var p;
    const d = (p = e.styles) == null ? void 0 : p[s];
    if (typeof d == "function") {
      const f = d, y = {
        ...c ?? {},
        theme: r
      };
      return f(l, y);
    }
    return d ? {
      ...l,
      ...d
    } : l;
  }
  function a(s, l, c) {
    return {
      className: i(s, c),
      style: u(s, l, c)
    };
  }
  return {
    getClassNames: i,
    getComponents: o,
    getProps: a,
    getStyles: u,
    select: vy(),
    theme: r
  };
}
const Uy = ({
  children: e,
  ...t
}) => /* @__PURE__ */ W(Fo.Provider, { value: t, children: e }), Ks = Kn(void 0), Bn = () => {
  const e = Gn(Ks);
  if (!e)
    throw new Error("Must be used inside FormFieldContext.Provider");
  return e;
}, xy = (e, t) => {
  var i;
  const n = Lt(), r = on({
    ...t == null ? void 0 : t.useQueryOpts,
    queryKey: [
      "accounts",
      e
    ],
    queryFn: () => n.getAccounts(e)
  });
  return {
    ...r,
    accounts: ((i = r.data) == null ? void 0 : i.data) || []
  };
}, Ay = (e) => /* @__PURE__ */ W(tr.Option, { ...e, children: e.data.name });
function Sy({ app: e }) {
  const t = Lt(), n = Bn(), {
    id: r,
    prop: i,
    value: o,
    onChange: u
  } = n, {
    getProps: a,
    select: s,
    theme: l
  } = Ye(), c = {
    color: l.colors.neutral60,
    gridArea: "control"
  }, d = {
    backgroundColor: l.colors.primary,
    borderRadius: l.borderRadius,
    border: "solid 1px",
    borderColor: l.colors.primary25,
    color: l.colors.primary25,
    padding: "0.25rem 0.5rem",
    gridArea: "control"
  }, p = {
    components: {
      Option: Ay
    },
    styles: {
      control: (S) => ({
        ...S,
        gridArea: "control",
        boxShadow: l.boxShadow.input
      })
    }
  }, f = s.getProps("controlAppSelect", p), y = void 0, {
    isLoading: m,
    // TODO error
    accounts: I,
    refetch: C
  } = xy(
    {
      app: e.name_slug,
      oauth_app_id: y
    },
    {
      useQueryOpts: {
        enabled: !!e,
        suspense: !!e
      }
    }
  ), A = async () => {
    t.connectAccount({
      app: i.app,
      oauthAppId: y,
      onSuccess: async (S) => {
        await C(), u({
          authProvisionId: S.id
        });
      },
      onError: () => {
      }
    });
  }, E = pt(() => {
    let S = o;
    if (S != null) {
      for (const P of I)
        if (S.authProvisionId === P.id) {
          S = P;
          break;
        }
    }
    return S;
  }, [
    I,
    o
  ]);
  return /* @__PURE__ */ W("div", { ...a("controlApp", c, {
    app: e,
    ...n
  }), children: m ? `Loading ${e.name} accounts...` : I.length ? /* @__PURE__ */ W(
    Hr,
    {
      instanceId: r,
      value: E,
      options: [
        ...I,
        {
          id: "_new",
          name: `Connect new ${e.name} account...`
        }
      ],
      ...f,
      required: !0,
      placeholder: `Select ${e.name} account...`,
      isLoading: m,
      isClearable: !0,
      isSearchable: !0,
      getOptionLabel: (S) => S.name,
      getOptionValue: (S) => S.id,
      onChange: (S) => {
        S ? S.id === "_new" ? A() : u({
          authProvisionId: S.id
        }) : u(void 0);
      }
    }
  ) : /* @__PURE__ */ gt("button", { type: "button", ...a("connectButton", d, {
    app: e,
    ...n
  }), onClick: () => A(), children: [
    "Connect ",
    e.name
  ] }) });
}
function wy() {
  const e = Bn(), {
    id: t,
    value: n,
    onChange: r
  } = e, { getProps: i } = Ye();
  return /* @__PURE__ */ W("input", { id: t, type: "checkbox", ...i("controlBoolean", {
    width: "16px",
    height: "16px",
    gridArea: "control",
    margin: "0 0.5rem 0 0"
  }, e), checked: n ?? !1, onChange: (u) => r(u.target.checked) });
}
function Ey() {
  const e = Bn(), {
    id: t,
    onChange: n,
    prop: r,
    value: i
  } = e, {
    getProps: o,
    theme: u
  } = Ye(), a = {
    color: u.colors.neutral60,
    display: "block",
    border: "1px solid",
    borderColor: u.colors.neutral20,
    padding: 6,
    width: "100%",
    borderRadius: u.borderRadius,
    gridArea: "control",
    boxShadow: u.boxShadow.input
  };
  let s = "off", l = "text", c = (d) => d;
  switch (r.type) {
    case "string":
      break;
    case "integer":
      l = "number", c = (d) => d ? parseInt(d) : void 0;
      break;
    default:
      throw new Error("unexpected prop.type for ControlInput: " + r.type);
  }
  return "secret" in r && r.secret && (l = "password", s = "new-password"), /* @__PURE__ */ W(
    "input",
    {
      id: t,
      type: l,
      name: r.name,
      value: i ?? "",
      onChange: (d) => n(c(d.target.value)),
      ...o("controlInput", a, e),
      min: "min" in r ? r.min : void 0,
      max: "max" in r ? r.max : void 0,
      autoComplete: s,
      "data-lpignore": "true",
      "data-1p-ignore": "true",
      required: !r.optional
    }
  );
}
var Fy = ["allowCreateWhileLoading", "createOptionPosition", "formatCreateLabel", "isValidNewOption", "getNewOptionData", "onCreateOption", "options", "onChange"], sa = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = arguments.length > 1 ? arguments[1] : void 0, r = arguments.length > 2 ? arguments[2] : void 0, i = String(t).toLowerCase(), o = String(r.getOptionValue(n)).toLowerCase(), u = String(r.getOptionLabel(n)).toLowerCase();
  return o === i || u === i;
}, xi = {
  formatCreateLabel: function(t) {
    return 'Create "'.concat(t, '"');
  },
  isValidNewOption: function(t, n, r, i) {
    return !(!t || n.some(function(o) {
      return sa(t, o, i);
    }) || r.some(function(o) {
      return sa(t, o, i);
    }));
  },
  getNewOptionData: function(t, n) {
    return {
      label: n,
      value: t,
      __isNew__: !0
    };
  }
};
function Py(e) {
  var t = e.allowCreateWhileLoading, n = t === void 0 ? !1 : t, r = e.createOptionPosition, i = r === void 0 ? "last" : r, o = e.formatCreateLabel, u = o === void 0 ? xi.formatCreateLabel : o, a = e.isValidNewOption, s = a === void 0 ? xi.isValidNewOption : a, l = e.getNewOptionData, c = l === void 0 ? xi.getNewOptionData : l, d = e.onCreateOption, p = e.options, f = p === void 0 ? [] : p, y = e.onChange, m = bt(e, Fy), I = m.getOptionValue, C = I === void 0 ? us : I, A = m.getOptionLabel, E = A === void 0 ? os : A, S = m.inputValue, P = m.isLoading, w = m.isMulti, k = m.value, R = m.name, T = pt(function() {
    return s(S, Tr(k), f, {
      getOptionValue: C,
      getOptionLabel: E
    }) ? c(S, u(S)) : void 0;
  }, [u, c, E, C, S, s, f, k]), H = pt(function() {
    return (n || !P) && T ? i === "first" ? [T].concat(pn(f)) : [].concat(pn(f), [T]) : f;
  }, [n, i, P, T, f]), N = Ve(function(O, K) {
    if (K.action !== "select-option")
      return y(O, K);
    var ie = Array.isArray(O) ? O : [O];
    if (ie[ie.length - 1] === T) {
      if (d) d(S);
      else {
        var M = c(S, S), Y = {
          action: "create-option",
          name: R,
          option: M
        };
        y(Hn(w, [].concat(pn(Tr(k)), [M]), M), Y);
      }
      return;
    }
    y(O, K);
  }, [c, S, w, R, T, d, y, k]);
  return Z(Z({}, m), {}, {
    options: H,
    onChange: N
  });
}
var Gy = /* @__PURE__ */ Ia(function(e, t) {
  var n = Na(e), r = Py(n);
  return /* @__PURE__ */ te.createElement(co, J({
    ref: t
  }, r));
}), Ry = Gy;
function Ki({
  isCreatable: e,
  options: t,
  selectProps: n,
  showLoadMoreButton: r,
  onLoadMore: i
}) {
  const o = Bn(), {
    id: u,
    prop: a,
    value: s,
    onChange: l
  } = o, {
    select: c,
    theme: d
  } = Ye(), p = {
    styles: {
      container: (A) => ({
        ...A,
        gridArea: "control",
        boxShadow: d.boxShadow.input
      })
    }
  }, f = pt(() => {
    let A = s;
    if (A != null)
      if (Array.isArray(A)) {
        if (typeof A[0] != "object") {
          const E = [];
          for (const S of A) {
            let P = {
              label: S,
              value: S
            };
            for (const w of t)
              if (w.value === S) {
                P = w;
                break;
              }
            E.push(P);
          }
          A = E;
        }
      } else if (typeof A != "object") {
        if ((t == null ? void 0 : t[0]) && typeof t[0] == "object") {
          for (const S of t)
            if (S.value === s) {
              A = S;
              break;
            }
        }
      } else A.__lv && (A = A.__lv);
    return A;
  }, [
    s,
    t
  ]), y = ({
    // eslint-disable-next-line react/prop-types
    children: A,
    ...E
  }) => /* @__PURE__ */ gt(tr.MenuList, { ...E, children: [
    A,
    /* @__PURE__ */ W("div", { className: "pt-4", children: /* @__PURE__ */ W($s, { onChange: i }) })
  ] }), m = c.getProps("controlSelect", p);
  r && (m.components = {
    // eslint-disable-next-line react/prop-types
    ...m.components,
    MenuList: y
  });
  const I = (A) => {
    t.unshift({
      label: A,
      value: A
    });
  };
  return /* @__PURE__ */ W(
    e ? Ry : Hr,
    {
      inputId: u,
      instanceId: u,
      options: t,
      value: f,
      isMulti: a.type.endsWith("[]"),
      isClearable: !0,
      required: !a.optional,
      ...m,
      ...n,
      onCreateOption: I,
      onChange: (A) => {
        if (A)
          if (Array.isArray(A))
            if (typeof A[0] == "object" && "value" in A[0]) {
              const E = [];
              for (const S of A)
                a.withLabel ? E.push(S) : E.push(S.value);
              l(E);
            } else
              l(A);
          else if (typeof A == "object" && "value" in A)
            a.withLabel ? l({
              __lv: A
            }) : l(A.value);
          else
            throw new Error("unhandled option type");
        else
          l(void 0);
      }
    }
  );
}
function ky({ queryEnabled: e }) {
  const t = Lt(), {
    userId: n,
    component: r,
    configurableProps: i,
    configuredProps: o,
    dynamicProps: u,
    props: { disableQueryDisabling: a }
  } = io(), {
    idx: s,
    prop: l
  } = Bn(), [
    c,
    d
  ] = ve(""), [
    p,
    f
  ] = ve(0), [
    y,
    m
  ] = ve(!0), [
    I,
    C
  ] = ve(void 0), [
    A,
    E
  ] = ve({
    page: 0,
    prevContext: {},
    data: [],
    values: /* @__PURE__ */ new Set()
  }), S = {};
  for (let M = 0; M < s; M++) {
    const Y = i[M];
    S[Y.name] = o[Y.name];
  }
  const P = {
    userId: n,
    page: p,
    prevContext: I,
    componentId: r.key,
    propName: l.name,
    configuredProps: S,
    dynamicPropsId: u == null ? void 0 : u.id
  };
  l.useQuery && (P.query = c || "");
  const w = {
    ...P
  };
  delete w.dynamicPropsId;
  const [
    k,
    R
  ] = ve(), T = () => {
    f(A.page), C(A.prevContext), E({
      ...A,
      prevContext: {}
    });
  }, {
    isFetching: H,
    refetch: N
  } = on({
    queryKey: [
      "componentConfigure",
      w
    ],
    queryFn: async () => {
      R(void 0);
      const M = await t.componentConfigure(P), {
        options: Y,
        stringOptions: _,
        errors: se
      } = M;
      if (se != null && se.length) {
        try {
          R(JSON.parse(se[0]));
        } catch {
          R({
            name: "Error",
            message: se[0]
          });
        }
        return [];
      }
      let me = [];
      if (Y != null && Y.length && (me = Y), _ != null && _.length) {
        const g = [];
        for (const pe of _)
          g.push({
            label: pe,
            value: pe
          });
        me = g;
      }
      const b = [], Ce = new Set(A.values);
      for (const g of me || []) {
        const pe = typeof g == "string" ? g : g.value;
        Ce.has(pe) || (Ce.add(pe), b.push(g));
      }
      let ae = A.data;
      return b.length ? (ae = [
        ...A.data,
        ...b
      ], E({
        page: p + 1,
        prevContext: M.context,
        data: ae,
        values: Ce
      })) : m(!1), ae;
    },
    enabled: !!e
  }), O = () => !H && !k && y, K = k ? k.message : a ? "Click to configure" : e ? void 0 : "Configure props above first", ie = a ? !1 : !e;
  return /* @__PURE__ */ W(
    Ki,
    {
      isCreatable: !0,
      showLoadMoreButton: O(),
      onLoadMore: T,
      options: A.data,
      selectProps: {
        isLoading: H,
        placeholder: K,
        isDisabled: ie,
        inputValue: l.useQuery ? c : void 0,
        onInputChange(M) {
          l.useQuery && (d(M), N());
        },
        onMenuOpen() {
          a && !e && N();
        }
      }
    }
  );
}
function By(e) {
  const {
    field: t,
    form: n
  } = e, { queryDisabledIdx: r } = n, {
    prop: i,
    idx: o
  } = t, u = "app" in t.extra ? t.extra.app : void 0;
  if (i.remoteOptions || i.type === "$.discord.channel")
    return /* @__PURE__ */ W(ky, { queryEnabled: r == null || r >= o });
  if ("options" in i && i.options) {
    let a = i.options;
    return typeof a[0] != "object" && (a = a.map((s) => ({
      label: s,
      value: s
    }))), /* @__PURE__ */ W(Ki, { options: a, components: {
      IndicatorSeparator: () => null
    } });
  }
  if (i.type.endsWith("[][]"))
    throw new Error("Unsupported property type: " + i.type);
  if (i.type.endsWith("[]"))
    return /* @__PURE__ */ W(Ki, { isCreatable: !0, options: [], components: {
      IndicatorSeparator: () => null
    } });
  switch (i.type) {
    case "app":
      return /* @__PURE__ */ W(Sy, { app: u });
    case "boolean":
      return /* @__PURE__ */ W(wy, {});
    case "string":
    case "integer":
      return /* @__PURE__ */ W(Ey, {});
    default:
      throw new Error("Unsupported property type: " + i.type);
  }
}
function Oy(e) {
  const {
    form: t,
    field: n
  } = e, { prop: r } = n, {
    getProps: i,
    getComponents: o
  } = Ye(), u = {
    display: "grid",
    gridTemplateAreas: n.prop.type == "boolean" ? '"control label" "description description" "error error"' : '"label label" "control control" "description description" "error error"',
    gridTemplateColumns: "min-content auto",
    gap: "0.25rem 0",
    alignItems: "center",
    fontSize: "0.875rem"
  }, {
    Label: a,
    Description: s,
    Errors: l
  } = o(), c = [], d = "app" in n.extra ? n.extra.app : void 0;
  if (d && !d.auth_type)
    return null;
  let p = r.label || r.name;
  return d && (p = `Connect ${d.name} account`), /* @__PURE__ */ gt("div", { ...i("field", u, e), children: [
    /* @__PURE__ */ W(a, { text: p, field: n, form: t }),
    /* @__PURE__ */ W(By, { field: n, form: t }),
    /* @__PURE__ */ W(s, { markdown: r.description, field: n, form: t }),
    /* @__PURE__ */ W(l, { errors: c, field: n, form: t })
  ] });
}
const Ty = (e, t) => {
  var i;
  const n = Lt(), r = on({
    queryKey: [
      "app",
      e
    ],
    queryFn: () => n.app(e),
    ...t == null ? void 0 : t.useQueryOpts
  });
  return {
    ...r,
    app: (i = r.data) == null ? void 0 : i.data
  };
};
function Vy({
  prop: e,
  idx: t
}) {
  const n = io(), {
    id: r,
    configuredProps: i,
    registerField: o,
    setConfiguredProp: u
  } = n, a = e.type === "app" && "app" in e ? e.app : void 0, {
    // TODO error
    app: s
  } = Ty(a || "", {
    useQueryOpts: {
      enabled: !!a,
      suspense: !!a
      // this seems to work (this overrides enabled so don't just set to true)
    }
  }), c = {
    id: `pd${r}${e.name}`,
    prop: e,
    idx: t,
    value: i[e.name],
    onChange(d) {
      u(t, d);
    },
    extra: {
      app: s
      // XXX fix ts
    }
  };
  return _t(() => o(c), [
    c
  ]), /* @__PURE__ */ W(Ks.Provider, { value: c, children: /* @__PURE__ */ W(Oy, { field: c, form: n }) });
}
class Dy extends ya {
  constructor() {
    super(...arguments), this.state = {
      err: void 0
    };
  }
  static getDerivedStateFromError(t) {
    return {
      err: t
    };
  }
  render() {
    const { err: t } = this.state;
    return t ? this.props.fallback(t) : this.props.children;
  }
}
function Ny(e) {
  const { form: t } = e, {
    propsNeedConfiguring: n,
    submitting: r
  } = t, {
    getProps: i,
    theme: o
  } = Ye();
  return /* @__PURE__ */ W("input", { type: "submit", value: r ? "Submitting..." : "Submit", ...i("controlSubmit", ((a) => {
    var s;
    return {
      width: "fit-content",
      textTransform: "capitalize",
      backgroundColor: a ? o.colors.neutral10 : o.colors.primary,
      color: a ? o.colors.neutral40 : o.colors.neutral0,
      padding: `${o.spacing.baseUnit * 1.75}px ${o.spacing.baseUnit * 16}px`,
      borderRadius: o.borderRadius,
      boxShadow: (s = o.boxShadow) == null ? void 0 : s.button,
      cursor: "pointer",
      fontSize: "0.875rem",
      opacity: r ? 0.5 : void 0,
      margin: "0.5rem 0 0 0"
    };
  })(n.length || r), e), disabled: n.length || r });
}
function My() {
  const e = io(), {
    configurableProps: t,
    dynamicPropsQueryIsFetching: n,
    isValid: r,
    optionalPropIsEnabled: i,
    optionalPropSetEnabled: o,
    props: u,
    setSubmitting: a
  } = e, {
    hideOptionalProps: s,
    onSubmit: l
  } = u, {
    getComponents: c,
    getProps: d,
    theme: p
  } = Ye(), { OptionalFieldButton: f } = c(), y = {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem"
  }, m = {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.375rem"
  }, I = {
    fontWeight: 600,
    textTransform: "capitalize",
    color: p.colors.neutral60,
    fontSize: "0.875rem",
    lineHeight: "1.375",
    margin: "0 0 0.5rem 0"
  }, C = async (S) => {
    if (l && (S.preventDefault(), r)) {
      a(!0);
      try {
        await l(e);
      } finally {
        a(!1);
      }
    }
  }, A = [], E = [];
  for (let S = 0; S < t.length; S++) {
    const P = t[S];
    if (!P.hidden && !xr.includes(P.type)) {
      if (P.optional) {
        const w = i(P);
        if (E.push([
          P,
          w
        ]), !w)
          continue;
      }
      A.push([
        P,
        S
      ]);
    }
  }
  return /* @__PURE__ */ W(Dy, { fallback: (S) => /* @__PURE__ */ gt("p", { style: {
    color: "red"
  }, children: [
    "Error: ",
    S && typeof S == "object" && "message" in S && typeof S.message == "string" ? S.message : "Unknown"
  ] }), children: /* @__PURE__ */ W($l, { fallback: /* @__PURE__ */ W("p", { children: "Loading form..." }), children: /* @__PURE__ */ gt("form", { ...d("componentForm", y, u), onSubmit: C, children: [
    A.map(([
      S,
      P
    ]) => S.type === "alert" ? /* @__PURE__ */ W(tc, { prop: S }, S.name) : /* @__PURE__ */ W(Vy, { prop: S, idx: P }, S.name)),
    n && /* @__PURE__ */ W("p", { children: "Loading dynamic props..." }),
    !s && E.length ? /* @__PURE__ */ gt("div", { children: [
      /* @__PURE__ */ W("div", { ...d("heading", I, u), children: "Optional Props" }),
      /* @__PURE__ */ W("div", { ...d("optionalFields", m, u), children: E.map(([
        S,
        P
      ]) => /* @__PURE__ */ W(
        f,
        {
          prop: S,
          enabled: P,
          onClick: () => o(S, !P)
        },
        S.name
      )) })
    ] }) : null,
    l && /* @__PURE__ */ W(Ny, { form: e })
  ] }) }) });
}
function Ly(e) {
  return /* @__PURE__ */ W(Zc, { props: e, children: /* @__PURE__ */ W(My, {}) });
}
const Xy = ({ key: e }, t) => {
  var i;
  const n = Lt(), r = on({
    queryKey: [
      "component",
      e
    ],
    queryFn: () => n.component({
      key: e
    }),
    enabled: !!e,
    ...t == null ? void 0 : t.useQueryOpts
  });
  return {
    ...r,
    component: (i = r.data) == null ? void 0 : i.data
  };
};
function Qy(e) {
  const {
    isLoading: t,
    error: n,
    component: r
  } = Xy({
    key: e.componentKey
  });
  if (!e.componentKey)
    throw new Error("componentKey required");
  return t ? /* @__PURE__ */ W("p", { children: "Loading..." }) : n ? /* @__PURE__ */ gt("p", { children: [
    "Error: ",
    n.message
  ] }) : r ? /* @__PURE__ */ W(Ly, { component: r, ...e }) : /* @__PURE__ */ W("p", { children: "Component not found" });
}
function qy() {
  const e = Bn(), {
    id: t,
    onChange: n,
    value: r
  } = e, {
    getProps: i,
    theme: o
  } = Ye(), u = {
    display: "block",
    gridArea: "control",
    width: "100%",
    fontSize: "0.875rem",
    boxShadow: o.boxShadow.input
  };
  let a = r;
  return typeof a == "object" && (a = JSON.stringify(a)), /* @__PURE__ */ W(
    "textarea",
    {
      id: t,
      value: a,
      onChange: (s) => n(s.target.value),
      ...i("controlAny", u, e)
    }
  );
}
const zy = (e) => {
  var r;
  const t = Lt(), n = on({
    queryKey: [
      "apps",
      e
    ],
    queryFn: () => t.apps(e)
  });
  return {
    ...n,
    apps: (r = n.data) == null ? void 0 : r.data
  };
};
function $y({
  value: e,
  onChange: t
}) {
  const [
    n,
    r
  ] = ve(""), i = eo(), {
    isLoading: o,
    // TODO error
    apps: u
  } = zy({
    q: n
  }), { Option: a } = tr;
  return /* @__PURE__ */ W(
    Hr,
    {
      instanceId: i,
      className: "react-select-container text-sm",
      classNamePrefix: "react-select",
      components: {
        Option: (s) => /* @__PURE__ */ W(a, { ...s, children: /* @__PURE__ */ gt("div", { style: {
          display: "flex",
          gap: 10
        }, children: [
          /* @__PURE__ */ W(
            "img",
            {
              src: `https://pipedream.com/s.v0/${s.data.id}/logo/48`,
              style: {
                height: 24,
                width: 24
              },
              alt: s.data.name
            }
          ),
          /* @__PURE__ */ W("span", { style: {
            whiteSpace: "nowrap"
          }, children: s.data.name })
        ] }) }),
        IndicatorSeparator: () => null
      },
      options: u || [],
      getOptionLabel: (s) => s.name || s.name_slug,
      getOptionValue: (s) => s.name_slug,
      value: e,
      onChange: (s) => t == null ? void 0 : t(s || void 0),
      onInputChange: (s) => r(s),
      isLoading: o
    }
  );
}
const Hy = (e) => {
  var r;
  const t = Lt(), n = on({
    queryKey: [
      "components",
      e
    ],
    queryFn: () => t.components(e)
  });
  return {
    ...n,
    components: ((r = n.data) == null ? void 0 : r.data) || []
  };
};
function Ky({
  app: e,
  componentType: t,
  value: n,
  onChange: r
}) {
  const i = eo(), {
    isLoading: o,
    // TODO error
    components: u
  } = Hy({
    app: e == null ? void 0 : e.name_slug,
    componentType: t
  });
  return /* @__PURE__ */ W(
    Hr,
    {
      instanceId: i,
      className: "react-select-container text-sm",
      classNamePrefix: "react-select",
      options: u,
      getOptionLabel: (a) => a.name || a.key,
      getOptionValue: (a) => a.key,
      value: n,
      onChange: (a) => r == null ? void 0 : r(a || void 0),
      isLoading: o,
      components: {
        IndicatorSeparator: () => null
      }
    }
  );
}
export {
  tc as Alert,
  Ly as ComponentForm,
  Qy as ComponentFormContainer,
  By as Control,
  qy as ControlAny,
  Sy as ControlApp,
  wy as ControlBoolean,
  Ey as ControlInput,
  Ki as ControlSelect,
  Ny as ControlSubmit,
  Fo as CustomizationContext,
  Uy as CustomizeProvider,
  my as Description,
  Dy as ErrorBoundary,
  by as Errors,
  Oy as Field,
  Ta as FormContext,
  Zc as FormContextProvider,
  Ks as FormFieldContext,
  _y as FrontendClientProvider,
  My as InternalComponentForm,
  Vy as InternalField,
  yy as Label,
  Iy as OptionalFieldButton,
  ky as RemoteOptionsContainer,
  $y as SelectApp,
  Ky as SelectComponent,
  Cy as defaultComponents,
  fo as defaultTheme,
  zp as getReactSelectTheme,
  Wi as mergeTheme,
  xr as skippablePropTypes,
  Xp as unstyledTheme,
  xy as useAccounts,
  Ty as useApp,
  zy as useApps,
  Xy as useComponent,
  Hy as useComponents,
  Ye as useCustomize,
  io as useFormContext,
  Bn as useFormFieldContext,
  Lt as useFrontendClient
};
