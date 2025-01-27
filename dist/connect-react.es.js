var Ho = (e) => {
  throw TypeError(e);
};
var ri = (e, t, n) => t.has(e) || Ho("Cannot " + n);
var v = (e, t, n) => (ri(e, t, "read from private field"), n ? n.call(e) : t.get(e)), K = (e, t, n) => t.has(e) ? Ho("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), W = (e, t, n, r) => (ri(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), le = (e, t, n) => (ri(e, t, "access private method"), n);
var hr = (e, t, n, r) => ({
  set _(i) {
    W(e, t, i, n);
  },
  get _() {
    return v(e, t, r);
  }
});
import { jsx as j, Fragment as ha, jsxs as gt } from "react/jsx-runtime";
import * as ne from "react";
import { createContext as Kn, useContext as Fn, useId as to, useState as ve, useEffect as Yt, useCallback as Ve, useLayoutEffect as jl, useRef as At, useMemo as pt, Component as ga, Fragment as Si, forwardRef as ma, Suspense as Jl } from "react";
import { keyframes as Yl, jsx as Y, css as ba } from "@emotion/react";
import { createPortal as _l } from "react-dom";
typeof document > "u" && (globalThis.document = {
  createElement: () => {
  }
});
function Ul({ prop: e }) {
  return /* @__PURE__ */ j("p", { className: `pd-alert-${e.alertType}`, children: e.content });
}
var gr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function no(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ln = { exports: {} };
Ln.exports;
var Wo;
function Ql() {
  return Wo || (Wo = 1, function(e, t) {
    var n = 200, r = "__lodash_hash_undefined__", i = 1, o = 2, u = 9007199254740991, a = "[object Arguments]", s = "[object Array]", l = "[object AsyncFunction]", c = "[object Boolean]", d = "[object Date]", p = "[object Error]", f = "[object Function]", C = "[object GeneratorFunction]", m = "[object Map]", y = "[object Number]", I = "[object Null]", x = "[object Object]", E = "[object Promise]", S = "[object Proxy]", P = "[object RegExp]", w = "[object Set]", k = "[object String]", G = "[object Symbol]", T = "[object Undefined]", H = "[object WeakMap]", V = "[object ArrayBuffer]", B = "[object DataView]", X = "[object Float32Array]", L = "[object Float64Array]", M = "[object Int8Array]", _ = "[object Int16Array]", Q = "[object Int32Array]", se = "[object Uint8Array]", me = "[object Uint8ClampedArray]", b = "[object Uint16Array]", Ce = "[object Uint32Array]", ae = /[\\^$.*+?()[\]{}|]/g, g = /^\[object .+?Constructor\]$/, pe = /^(?:0|[1-9]\d*)$/, te = {};
    te[X] = te[L] = te[M] = te[_] = te[Q] = te[se] = te[me] = te[b] = te[Ce] = !0, te[a] = te[s] = te[V] = te[c] = te[B] = te[d] = te[p] = te[f] = te[m] = te[y] = te[x] = te[P] = te[w] = te[k] = te[H] = !1;
    var de = typeof gr == "object" && gr && gr.Object === Object && gr, Fe = typeof self == "object" && self && self.Object === Object && self, N = de || Fe || Function("return this")(), Z = t && !t.nodeType && t, q = Z && !0 && e && !e.nodeType && e, fe = q && q.exports === Z, Pe = fe && de.process, We = function() {
      try {
        return Pe && Pe.binding && Pe.binding("util");
      } catch {
      }
    }(), zt = We && We.isTypedArray;
    function un(h, A) {
      for (var R = -1, z = h == null ? 0 : h.length, Ie = 0, ie = []; ++R < z; ) {
        var Ae = h[R];
        A(Ae, R, h) && (ie[Ie++] = Ae);
      }
      return ie;
    }
    function ir(h, A) {
      for (var R = -1, z = A.length, Ie = h.length; ++R < z; )
        h[Ie + R] = A[R];
      return h;
    }
    function or(h, A) {
      for (var R = -1, z = h == null ? 0 : h.length; ++R < z; )
        if (A(h[R], R, h))
          return !0;
      return !1;
    }
    function jr(h, A) {
      for (var R = -1, z = Array(h); ++R < h; )
        z[R] = A(R);
      return z;
    }
    function ur(h) {
      return function(A) {
        return h(A);
      };
    }
    function ar(h, A) {
      return h.has(A);
    }
    function Jr(h, A) {
      return h == null ? void 0 : h[A];
    }
    function Yr(h) {
      var A = -1, R = Array(h.size);
      return h.forEach(function(z, Ie) {
        R[++A] = [Ie, z];
      }), R;
    }
    function _r(h, A) {
      return function(R) {
        return h(A(R));
      };
    }
    function Ur(h) {
      var A = -1, R = Array(h.size);
      return h.forEach(function(z) {
        R[++A] = z;
      }), R;
    }
    var Qr = Array.prototype, F = Function.prototype, D = Object.prototype, $ = N["__core-js_shared__"], oe = F.toString, ue = D.hasOwnProperty, Le = function() {
      var h = /[^.]+$/.exec($ && $.keys && $.keys.IE_PROTO || "");
      return h ? "Symbol(src)_1." + h : "";
    }(), ut = D.toString, et = RegExp(
      "^" + oe.call(ue).replace(ae, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    ), Et = fe ? N.Buffer : void 0, at = N.Symbol, Be = N.Uint8Array, yt = D.propertyIsEnumerable, tt = Qr.splice, Ht = at ? at.toStringTag : void 0, Ro = Object.getOwnPropertySymbols, Us = Et ? Et.isBuffer : void 0, Qs = _r(Object.keys, Object), qr = an(N, "DataView"), kn = an(N, "Map"), $r = an(N, "Promise"), Kr = an(N, "Set"), ei = an(N, "WeakMap"), Bn = an(Object, "create"), qs = jt(qr), $s = jt(kn), Ks = jt($r), el = jt(Kr), tl = jt(ei), ko = at ? at.prototype : void 0, ti = ko ? ko.valueOf : void 0;
    function Wt(h) {
      var A = -1, R = h == null ? 0 : h.length;
      for (this.clear(); ++A < R; ) {
        var z = h[A];
        this.set(z[0], z[1]);
      }
    }
    function nl() {
      this.__data__ = Bn ? Bn(null) : {}, this.size = 0;
    }
    function rl(h) {
      var A = this.has(h) && delete this.__data__[h];
      return this.size -= A ? 1 : 0, A;
    }
    function il(h) {
      var A = this.__data__;
      if (Bn) {
        var R = A[h];
        return R === r ? void 0 : R;
      }
      return ue.call(A, h) ? A[h] : void 0;
    }
    function ol(h) {
      var A = this.__data__;
      return Bn ? A[h] !== void 0 : ue.call(A, h);
    }
    function ul(h, A) {
      var R = this.__data__;
      return this.size += this.has(h) ? 0 : 1, R[h] = Bn && A === void 0 ? r : A, this;
    }
    Wt.prototype.clear = nl, Wt.prototype.delete = rl, Wt.prototype.get = il, Wt.prototype.has = ol, Wt.prototype.set = ul;
    function It(h) {
      var A = -1, R = h == null ? 0 : h.length;
      for (this.clear(); ++A < R; ) {
        var z = h[A];
        this.set(z[0], z[1]);
      }
    }
    function al() {
      this.__data__ = [], this.size = 0;
    }
    function sl(h) {
      var A = this.__data__, R = lr(A, h);
      if (R < 0)
        return !1;
      var z = A.length - 1;
      return R == z ? A.pop() : tt.call(A, R, 1), --this.size, !0;
    }
    function ll(h) {
      var A = this.__data__, R = lr(A, h);
      return R < 0 ? void 0 : A[R][1];
    }
    function cl(h) {
      return lr(this.__data__, h) > -1;
    }
    function dl(h, A) {
      var R = this.__data__, z = lr(R, h);
      return z < 0 ? (++this.size, R.push([h, A])) : R[z][1] = A, this;
    }
    It.prototype.clear = al, It.prototype.delete = sl, It.prototype.get = ll, It.prototype.has = cl, It.prototype.set = dl;
    function Zt(h) {
      var A = -1, R = h == null ? 0 : h.length;
      for (this.clear(); ++A < R; ) {
        var z = h[A];
        this.set(z[0], z[1]);
      }
    }
    function fl() {
      this.size = 0, this.__data__ = {
        hash: new Wt(),
        map: new (kn || It)(),
        string: new Wt()
      };
    }
    function pl(h) {
      var A = cr(this, h).delete(h);
      return this.size -= A ? 1 : 0, A;
    }
    function hl(h) {
      return cr(this, h).get(h);
    }
    function gl(h) {
      return cr(this, h).has(h);
    }
    function ml(h, A) {
      var R = cr(this, h), z = R.size;
      return R.set(h, A), this.size += R.size == z ? 0 : 1, this;
    }
    Zt.prototype.clear = fl, Zt.prototype.delete = pl, Zt.prototype.get = hl, Zt.prototype.has = gl, Zt.prototype.set = ml;
    function sr(h) {
      var A = -1, R = h == null ? 0 : h.length;
      for (this.__data__ = new Zt(); ++A < R; )
        this.add(h[A]);
    }
    function bl(h) {
      return this.__data__.set(h, r), this;
    }
    function yl(h) {
      return this.__data__.has(h);
    }
    sr.prototype.add = sr.prototype.push = bl, sr.prototype.has = yl;
    function Ft(h) {
      var A = this.__data__ = new It(h);
      this.size = A.size;
    }
    function Il() {
      this.__data__ = new It(), this.size = 0;
    }
    function Cl(h) {
      var A = this.__data__, R = A.delete(h);
      return this.size = A.size, R;
    }
    function vl(h) {
      return this.__data__.get(h);
    }
    function xl(h) {
      return this.__data__.has(h);
    }
    function Al(h, A) {
      var R = this.__data__;
      if (R instanceof It) {
        var z = R.__data__;
        if (!kn || z.length < n - 1)
          return z.push([h, A]), this.size = ++R.size, this;
        R = this.__data__ = new Zt(z);
      }
      return R.set(h, A), this.size = R.size, this;
    }
    Ft.prototype.clear = Il, Ft.prototype.delete = Cl, Ft.prototype.get = vl, Ft.prototype.has = xl, Ft.prototype.set = Al;
    function Sl(h, A) {
      var R = dr(h), z = !R && Ll(h), Ie = !R && !z && ni(h), ie = !R && !z && !Ie && Xo(h), Ae = R || z || Ie || ie, Ge = Ae ? jr(h.length, String) : [], Re = Ge.length;
      for (var xe in h)
        ue.call(h, xe) && !(Ae && // Safari 9 has enumerable `arguments.length` in strict mode.
        (xe == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
        Ie && (xe == "offset" || xe == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
        ie && (xe == "buffer" || xe == "byteLength" || xe == "byteOffset") || // Skip index properties.
        Tl(xe, Re))) && Ge.push(xe);
      return Ge;
    }
    function lr(h, A) {
      for (var R = h.length; R--; )
        if (Do(h[R][0], A))
          return R;
      return -1;
    }
    function wl(h, A, R) {
      var z = A(h);
      return dr(h) ? z : ir(z, R(h));
    }
    function On(h) {
      return h == null ? h === void 0 ? T : I : Ht && Ht in Object(h) ? Bl(h) : Ml(h);
    }
    function Bo(h) {
      return Tn(h) && On(h) == a;
    }
    function Oo(h, A, R, z, Ie) {
      return h === A ? !0 : h == null || A == null || !Tn(h) && !Tn(A) ? h !== h && A !== A : El(h, A, R, z, Oo, Ie);
    }
    function El(h, A, R, z, Ie, ie) {
      var Ae = dr(h), Ge = dr(A), Re = Ae ? s : Pt(h), xe = Ge ? s : Pt(A);
      Re = Re == a ? x : Re, xe = xe == a ? x : xe;
      var Ze = Re == x, nt = xe == x, Oe = Re == xe;
      if (Oe && ni(h)) {
        if (!ni(A))
          return !1;
        Ae = !0, Ze = !1;
      }
      if (Oe && !Ze)
        return ie || (ie = new Ft()), Ae || Xo(h) ? To(h, A, R, z, Ie, ie) : Rl(h, A, Re, R, z, Ie, ie);
      if (!(R & i)) {
        var _e = Ze && ue.call(h, "__wrapped__"), Ue = nt && ue.call(A, "__wrapped__");
        if (_e || Ue) {
          var Gt = _e ? h.value() : h, Ct = Ue ? A.value() : A;
          return ie || (ie = new Ft()), Ie(Gt, Ct, R, z, ie);
        }
      }
      return Oe ? (ie || (ie = new Ft()), kl(h, A, R, z, Ie, ie)) : !1;
    }
    function Fl(h) {
      if (!Lo(h) || Dl(h))
        return !1;
      var A = No(h) ? et : g;
      return A.test(jt(h));
    }
    function Pl(h) {
      return Tn(h) && Mo(h.length) && !!te[On(h)];
    }
    function Gl(h) {
      if (!Nl(h))
        return Qs(h);
      var A = [];
      for (var R in Object(h))
        ue.call(h, R) && R != "constructor" && A.push(R);
      return A;
    }
    function To(h, A, R, z, Ie, ie) {
      var Ae = R & i, Ge = h.length, Re = A.length;
      if (Ge != Re && !(Ae && Re > Ge))
        return !1;
      var xe = ie.get(h);
      if (xe && ie.get(A))
        return xe == A;
      var Ze = -1, nt = !0, Oe = R & o ? new sr() : void 0;
      for (ie.set(h, A), ie.set(A, h); ++Ze < Ge; ) {
        var _e = h[Ze], Ue = A[Ze];
        if (z)
          var Gt = Ae ? z(Ue, _e, Ze, A, h, ie) : z(_e, Ue, Ze, h, A, ie);
        if (Gt !== void 0) {
          if (Gt)
            continue;
          nt = !1;
          break;
        }
        if (Oe) {
          if (!or(A, function(Ct, Jt) {
            if (!ar(Oe, Jt) && (_e === Ct || Ie(_e, Ct, R, z, ie)))
              return Oe.push(Jt);
          })) {
            nt = !1;
            break;
          }
        } else if (!(_e === Ue || Ie(_e, Ue, R, z, ie))) {
          nt = !1;
          break;
        }
      }
      return ie.delete(h), ie.delete(A), nt;
    }
    function Rl(h, A, R, z, Ie, ie, Ae) {
      switch (R) {
        case B:
          if (h.byteLength != A.byteLength || h.byteOffset != A.byteOffset)
            return !1;
          h = h.buffer, A = A.buffer;
        case V:
          return !(h.byteLength != A.byteLength || !ie(new Be(h), new Be(A)));
        case c:
        case d:
        case y:
          return Do(+h, +A);
        case p:
          return h.name == A.name && h.message == A.message;
        case P:
        case k:
          return h == A + "";
        case m:
          var Ge = Yr;
        case w:
          var Re = z & i;
          if (Ge || (Ge = Ur), h.size != A.size && !Re)
            return !1;
          var xe = Ae.get(h);
          if (xe)
            return xe == A;
          z |= o, Ae.set(h, A);
          var Ze = To(Ge(h), Ge(A), z, Ie, ie, Ae);
          return Ae.delete(h), Ze;
        case G:
          if (ti)
            return ti.call(h) == ti.call(A);
      }
      return !1;
    }
    function kl(h, A, R, z, Ie, ie) {
      var Ae = R & i, Ge = Vo(h), Re = Ge.length, xe = Vo(A), Ze = xe.length;
      if (Re != Ze && !Ae)
        return !1;
      for (var nt = Re; nt--; ) {
        var Oe = Ge[nt];
        if (!(Ae ? Oe in A : ue.call(A, Oe)))
          return !1;
      }
      var _e = ie.get(h);
      if (_e && ie.get(A))
        return _e == A;
      var Ue = !0;
      ie.set(h, A), ie.set(A, h);
      for (var Gt = Ae; ++nt < Re; ) {
        Oe = Ge[nt];
        var Ct = h[Oe], Jt = A[Oe];
        if (z)
          var zo = Ae ? z(Jt, Ct, Oe, A, h, ie) : z(Ct, Jt, Oe, h, A, ie);
        if (!(zo === void 0 ? Ct === Jt || Ie(Ct, Jt, R, z, ie) : zo)) {
          Ue = !1;
          break;
        }
        Gt || (Gt = Oe == "constructor");
      }
      if (Ue && !Gt) {
        var fr = h.constructor, pr = A.constructor;
        fr != pr && "constructor" in h && "constructor" in A && !(typeof fr == "function" && fr instanceof fr && typeof pr == "function" && pr instanceof pr) && (Ue = !1);
      }
      return ie.delete(h), ie.delete(A), Ue;
    }
    function Vo(h) {
      return wl(h, Hl, Ol);
    }
    function cr(h, A) {
      var R = h.__data__;
      return Vl(A) ? R[typeof A == "string" ? "string" : "hash"] : R.map;
    }
    function an(h, A) {
      var R = Jr(h, A);
      return Fl(R) ? R : void 0;
    }
    function Bl(h) {
      var A = ue.call(h, Ht), R = h[Ht];
      try {
        h[Ht] = void 0;
        var z = !0;
      } catch {
      }
      var Ie = ut.call(h);
      return z && (A ? h[Ht] = R : delete h[Ht]), Ie;
    }
    var Ol = Ro ? function(h) {
      return h == null ? [] : (h = Object(h), un(Ro(h), function(A) {
        return yt.call(h, A);
      }));
    } : Wl, Pt = On;
    (qr && Pt(new qr(new ArrayBuffer(1))) != B || kn && Pt(new kn()) != m || $r && Pt($r.resolve()) != E || Kr && Pt(new Kr()) != w || ei && Pt(new ei()) != H) && (Pt = function(h) {
      var A = On(h), R = A == x ? h.constructor : void 0, z = R ? jt(R) : "";
      if (z)
        switch (z) {
          case qs:
            return B;
          case $s:
            return m;
          case Ks:
            return E;
          case el:
            return w;
          case tl:
            return H;
        }
      return A;
    });
    function Tl(h, A) {
      return A = A ?? u, !!A && (typeof h == "number" || pe.test(h)) && h > -1 && h % 1 == 0 && h < A;
    }
    function Vl(h) {
      var A = typeof h;
      return A == "string" || A == "number" || A == "symbol" || A == "boolean" ? h !== "__proto__" : h === null;
    }
    function Dl(h) {
      return !!Le && Le in h;
    }
    function Nl(h) {
      var A = h && h.constructor, R = typeof A == "function" && A.prototype || D;
      return h === R;
    }
    function Ml(h) {
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
    function Do(h, A) {
      return h === A || h !== h && A !== A;
    }
    var Ll = Bo(/* @__PURE__ */ function() {
      return arguments;
    }()) ? Bo : function(h) {
      return Tn(h) && ue.call(h, "callee") && !yt.call(h, "callee");
    }, dr = Array.isArray;
    function Xl(h) {
      return h != null && Mo(h.length) && !No(h);
    }
    var ni = Us || Zl;
    function zl(h, A) {
      return Oo(h, A);
    }
    function No(h) {
      if (!Lo(h))
        return !1;
      var A = On(h);
      return A == f || A == C || A == l || A == S;
    }
    function Mo(h) {
      return typeof h == "number" && h > -1 && h % 1 == 0 && h <= u;
    }
    function Lo(h) {
      var A = typeof h;
      return h != null && (A == "object" || A == "function");
    }
    function Tn(h) {
      return h != null && typeof h == "object";
    }
    var Xo = zt ? ur(zt) : Pl;
    function Hl(h) {
      return Xl(h) ? Sl(h) : Gl(h);
    }
    function Wl() {
      return [];
    }
    function Zl() {
      return !1;
    }
    e.exports = zl;
  }(Ln, Ln.exports)), Ln.exports;
}
var ql = Ql();
const $l = /* @__PURE__ */ no(ql);
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
}, tn = typeof window > "u" || "Deno" in globalThis;
function qe() {
}
function Kl(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function wi(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function ya(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function cn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ot(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Zo(e, t) {
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
      if (t.queryHash !== ro(u, t.options))
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
function jo(e, t) {
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
function ro(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || Jn)(e);
}
function Jn(e) {
  return JSON.stringify(
    e,
    (t, n) => Pi(n) ? Object.keys(n).sort().reduce((r, i) => (r[i] = n[i], r), {}) : n
  );
}
function Yn(e, t) {
  return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? !Object.keys(t).some((n) => !Yn(e[n], t[n])) : !1;
}
function Ei(e, t) {
  if (e === t)
    return e;
  const n = Jo(e) && Jo(t);
  if (n || Pi(e) && Pi(t)) {
    const r = n ? e : Object.keys(e), i = r.length, o = n ? t : Object.keys(t), u = o.length, a = n ? [] : {};
    let s = 0;
    for (let l = 0; l < u; l++) {
      const c = n ? l : o[l];
      (!n && r.includes(c) || n) && e[c] === void 0 && t[c] === void 0 ? (a[c] = void 0, s++) : (a[c] = Ei(e[c], t[c]), a[c] === e[c] && e[c] !== void 0 && s++);
    }
    return i === u && s === i ? e : a;
  }
  return t;
}
function Fi(e, t) {
  if (!t || Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function Jo(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Pi(e) {
  if (!Yo(e))
    return !1;
  const t = e.constructor;
  if (t === void 0)
    return !0;
  const n = t.prototype;
  return !(!Yo(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype);
}
function Yo(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function ec(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function Gi(e, t, n) {
  if (typeof n.structuralSharing == "function")
    return n.structuralSharing(e, t);
  if (n.structuralSharing !== !1) {
    if (process.env.NODE_ENV !== "production")
      try {
        return Ei(e, t);
      } catch (r) {
        console.error(
          `Structural sharing requires data to be JSON serializable. To fix this, turn off structuralSharing or return JSON-serializable data from your queryFn. [${n.queryHash}]: ${r}`
        );
      }
    return Ei(e, t);
  }
  return t;
}
function tc(e, t, n = 0) {
  const r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function nc(e, t, n = 0) {
  const r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var Er = Symbol();
function Ia(e, t) {
  return process.env.NODE_ENV !== "production" && e.queryFn === Er && console.error(
    `Attempted to invoke queryFn when set to skipToken. This is likely a configuration error. Query hash: '${e.queryHash}'`
  ), !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === Er ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn;
}
var _t, Bt, hn, oa, rc = (oa = class extends er {
  constructor() {
    super();
    K(this, _t);
    K(this, Bt);
    K(this, hn);
    W(this, hn, (t) => {
      if (!tn && window.addEventListener) {
        const n = () => t();
        return window.addEventListener("visibilitychange", n, !1), () => {
          window.removeEventListener("visibilitychange", n);
        };
      }
    });
  }
  onSubscribe() {
    v(this, Bt) || this.setEventListener(v(this, hn));
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || ((t = v(this, Bt)) == null || t.call(this), W(this, Bt, void 0));
  }
  setEventListener(t) {
    var n;
    W(this, hn, t), (n = v(this, Bt)) == null || n.call(this), W(this, Bt, t((r) => {
      typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
    }));
  }
  setFocused(t) {
    v(this, _t) !== t && (W(this, _t, t), this.onFocus());
  }
  onFocus() {
    const t = this.isFocused();
    this.listeners.forEach((n) => {
      n(t);
    });
  }
  isFocused() {
    var t;
    return typeof v(this, _t) == "boolean" ? v(this, _t) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden";
  }
}, _t = new WeakMap(), Bt = new WeakMap(), hn = new WeakMap(), oa), io = new rc(), gn, Ot, mn, ua, ic = (ua = class extends er {
  constructor() {
    super();
    K(this, gn, !0);
    K(this, Ot);
    K(this, mn);
    W(this, mn, (t) => {
      if (!tn && window.addEventListener) {
        const n = () => t(!0), r = () => t(!1);
        return window.addEventListener("online", n, !1), window.addEventListener("offline", r, !1), () => {
          window.removeEventListener("online", n), window.removeEventListener("offline", r);
        };
      }
    });
  }
  onSubscribe() {
    v(this, Ot) || this.setEventListener(v(this, mn));
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || ((t = v(this, Ot)) == null || t.call(this), W(this, Ot, void 0));
  }
  setEventListener(t) {
    var n;
    W(this, mn, t), (n = v(this, Ot)) == null || n.call(this), W(this, Ot, t(this.setOnline.bind(this)));
  }
  setOnline(t) {
    v(this, gn) !== t && (W(this, gn, t), this.listeners.forEach((r) => {
      r(t);
    }));
  }
  isOnline() {
    return v(this, gn);
  }
}, gn = new WeakMap(), Ot = new WeakMap(), mn = new WeakMap(), ua), Fr = new ic();
function Ri() {
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
function oc(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function Ca(e) {
  return (e ?? "online") === "online" ? Fr.isOnline() : !0;
}
var va = class extends Error {
  constructor(e) {
    super("CancelledError"), this.revert = e == null ? void 0 : e.revert, this.silent = e == null ? void 0 : e.silent;
  }
};
function ii(e) {
  return e instanceof va;
}
function xa(e) {
  let t = !1, n = 0, r = !1, i;
  const o = Ri(), u = (m) => {
    var y;
    r || (p(new va(m)), (y = e.abort) == null || y.call(e));
  }, a = () => {
    t = !0;
  }, s = () => {
    t = !1;
  }, l = () => io.isFocused() && (e.networkMode === "always" || Fr.isOnline()) && e.canRun(), c = () => Ca(e.networkMode) && e.canRun(), d = (m) => {
    var y;
    r || (r = !0, (y = e.onSuccess) == null || y.call(e, m), i == null || i(), o.resolve(m));
  }, p = (m) => {
    var y;
    r || (r = !0, (y = e.onError) == null || y.call(e, m), i == null || i(), o.reject(m));
  }, f = () => new Promise((m) => {
    var y;
    i = (I) => {
      (r || l()) && m(I);
    }, (y = e.onPause) == null || y.call(e);
  }).then(() => {
    var m;
    i = void 0, r || (m = e.onContinue) == null || m.call(e);
  }), C = () => {
    if (r)
      return;
    let m;
    const y = n === 0 ? e.initialPromise : void 0;
    try {
      m = y ?? e.fn();
    } catch (I) {
      m = Promise.reject(I);
    }
    Promise.resolve(m).then(d).catch((I) => {
      var w;
      if (r)
        return;
      const x = e.retry ?? (tn ? 0 : 3), E = e.retryDelay ?? oc, S = typeof E == "function" ? E(n, I) : E, P = x === !0 || typeof x == "number" && n < x || typeof x == "function" && x(n, I);
      if (t || !P) {
        p(I);
        return;
      }
      n++, (w = e.onFail) == null || w.call(e, n, I), ec(S).then(() => l() ? void 0 : f()).then(() => {
        t ? p(I) : C();
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
    start: () => (c() ? C() : f().then(C), o)
  };
}
function uc() {
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
var ke = uc(), Ut, aa, Aa = (aa = class {
  constructor() {
    K(this, Ut);
  }
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(), wi(this.gcTime) && W(this, Ut, setTimeout(() => {
      this.optionalRemove();
    }, this.gcTime));
  }
  updateGcTime(e) {
    this.gcTime = Math.max(
      this.gcTime || 0,
      e ?? (tn ? 1 / 0 : 5 * 60 * 1e3)
    );
  }
  clearGcTimeout() {
    v(this, Ut) && (clearTimeout(v(this, Ut)), W(this, Ut, void 0));
  }
}, Ut = new WeakMap(), aa), bn, yn, Qe, Te, Un, Qt, rt, vt, sa, ac = (sa = class extends Aa {
  constructor(t) {
    super();
    K(this, rt);
    K(this, bn);
    K(this, yn);
    K(this, Qe);
    K(this, Te);
    K(this, Un);
    K(this, Qt);
    W(this, Qt, !1), W(this, Un, t.defaultOptions), this.setOptions(t.options), this.observers = [], W(this, Qe, t.cache), this.queryKey = t.queryKey, this.queryHash = t.queryHash, W(this, bn, sc(this.options)), this.state = t.state ?? v(this, bn), this.scheduleGc();
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
    const r = Gi(this.state.data, t, this.options);
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
    this.destroy(), this.setState(v(this, bn));
  }
  isActive() {
    return this.observers.some(
      (t) => ot(t.options.enabled, this) !== !1
    );
  }
  isDisabled() {
    return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === Er || this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
  }
  isStale() {
    return this.state.isInvalidated ? !0 : this.getObserversCount() > 0 ? this.observers.some(
      (t) => t.getCurrentResult().isStale
    ) : this.state.data === void 0;
  }
  isStaleByTime(t = 0) {
    return this.state.isInvalidated || this.state.data === void 0 || !ya(this.state.dataUpdatedAt, t);
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
    this.observers.includes(t) && (this.observers = this.observers.filter((n) => n !== t), this.observers.length || (v(this, Te) && (v(this, Qt) ? v(this, Te).cancel({ revert: !0 }) : v(this, Te).cancelRetry()), this.scheduleGc()), v(this, Qe).notify({ type: "observerRemoved", query: this, observer: t }));
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
        get: () => (W(this, Qt, !0), r.signal)
      });
    }, o = () => {
      const d = Ia(this.options, n), p = {
        queryKey: this.queryKey,
        meta: this.meta
      };
      return i(p), W(this, Qt, !1), this.options.persister ? this.options.persister(
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
    ), W(this, yn, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((l = u.fetchOptions) == null ? void 0 : l.meta)) && le(this, rt, vt).call(this, { type: "fetch", meta: (c = u.fetchOptions) == null ? void 0 : c.meta });
    const a = (d) => {
      var p, f, C, m;
      ii(d) && d.silent || le(this, rt, vt).call(this, {
        type: "error",
        error: d
      }), ii(d) || ((f = (p = v(this, Qe).config).onError) == null || f.call(
        p,
        d,
        this
      ), (m = (C = v(this, Qe).config).onSettled) == null || m.call(
        C,
        this.state.data,
        d,
        this
      )), this.scheduleGc();
    };
    return W(this, Te, xa({
      initialPromise: n == null ? void 0 : n.initialPromise,
      fn: u.fetchFn,
      abort: r.abort.bind(r),
      onSuccess: (d) => {
        var p, f, C, m;
        if (d === void 0) {
          process.env.NODE_ENV !== "production" && console.error(
            `Query data cannot be undefined. Please make sure to return a value other than undefined from your query function. Affected query key: ${this.queryHash}`
          ), a(new Error(`${this.queryHash} data is undefined`));
          return;
        }
        try {
          this.setData(d);
        } catch (y) {
          a(y);
          return;
        }
        (f = (p = v(this, Qe).config).onSuccess) == null || f.call(p, d, this), (m = (C = v(this, Qe).config).onSettled) == null || m.call(
          C,
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
}, bn = new WeakMap(), yn = new WeakMap(), Qe = new WeakMap(), Te = new WeakMap(), Un = new WeakMap(), Qt = new WeakMap(), rt = new WeakSet(), vt = function(t) {
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
          ...Sa(r.data, this.options),
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
        return ii(i) && i.revert && v(this, yn) ? { ...v(this, yn), fetchStatus: "idle" } : {
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
}, sa);
function Sa(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: Ca(t.networkMode) ? "fetching" : "paused",
    ...e === void 0 && {
      error: null,
      status: "pending"
    }
  };
}
function sc(e) {
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
var lt, la, lc = (la = class extends er {
  constructor(t = {}) {
    super();
    K(this, lt);
    this.config = t, W(this, lt, /* @__PURE__ */ new Map());
  }
  build(t, n, r) {
    const i = n.queryKey, o = n.queryHash ?? ro(i, n);
    let u = this.get(o);
    return u || (u = new ac({
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
      (r) => Zo(n, r)
    );
  }
  findAll(t = {}) {
    const n = this.getAll();
    return Object.keys(t).length > 0 ? n.filter((r) => Zo(t, r)) : n;
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
}, lt = new WeakMap(), la), ct, Ne, qt, dt, kt, ca, cc = (ca = class extends Aa {
  constructor(t) {
    super();
    K(this, dt);
    K(this, ct);
    K(this, Ne);
    K(this, qt);
    this.mutationId = t.mutationId, W(this, Ne, t.mutationCache), W(this, ct, []), this.state = t.state || dc(), this.setOptions(t.options), this.scheduleGc();
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
    W(this, ct, v(this, ct).filter((n) => n !== t)), this.scheduleGc(), v(this, Ne).notify({
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
    return ((t = v(this, qt)) == null ? void 0 : t.continue()) ?? // continuing a mutation assumes that variables are set, mutation must have been dehydrated before
    this.execute(this.state.variables);
  }
  async execute(t) {
    var i, o, u, a, s, l, c, d, p, f, C, m, y, I, x, E, S, P, w, k;
    W(this, qt, xa({
      fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
      onFail: (G, T) => {
        le(this, dt, kt).call(this, { type: "failed", failureCount: G, error: T });
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
    const n = this.state.status === "pending", r = !v(this, qt).canStart();
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
      const G = await v(this, qt).start();
      return await ((l = (s = v(this, Ne).config).onSuccess) == null ? void 0 : l.call(
        s,
        G,
        t,
        this.state.context,
        this
      )), await ((d = (c = this.options).onSuccess) == null ? void 0 : d.call(c, G, t, this.state.context)), await ((f = (p = v(this, Ne).config).onSettled) == null ? void 0 : f.call(
        p,
        G,
        null,
        this.state.variables,
        this.state.context,
        this
      )), await ((m = (C = this.options).onSettled) == null ? void 0 : m.call(C, G, null, t, this.state.context)), le(this, dt, kt).call(this, { type: "success", data: G }), G;
    } catch (G) {
      try {
        throw await ((I = (y = v(this, Ne).config).onError) == null ? void 0 : I.call(
          y,
          G,
          t,
          this.state.context,
          this
        )), await ((E = (x = this.options).onError) == null ? void 0 : E.call(
          x,
          G,
          t,
          this.state.context
        )), await ((P = (S = v(this, Ne).config).onSettled) == null ? void 0 : P.call(
          S,
          void 0,
          G,
          this.state.variables,
          this.state.context,
          this
        )), await ((k = (w = this.options).onSettled) == null ? void 0 : k.call(
          w,
          void 0,
          G,
          t,
          this.state.context
        )), G;
      } finally {
        le(this, dt, kt).call(this, { type: "error", error: G });
      }
    } finally {
      v(this, Ne).runNext(this);
    }
  }
}, ct = new WeakMap(), Ne = new WeakMap(), qt = new WeakMap(), dt = new WeakSet(), kt = function(t) {
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
}, ca);
function dc() {
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
var xt, it, Qn, da, fc = (da = class extends er {
  constructor(t = {}) {
    super();
    K(this, xt);
    K(this, it);
    K(this, Qn);
    this.config = t, W(this, xt, /* @__PURE__ */ new Set()), W(this, it, /* @__PURE__ */ new Map()), W(this, Qn, 0);
  }
  build(t, n, r) {
    const i = new cc({
      mutationCache: this,
      mutationId: ++hr(this, Qn)._,
      options: t.defaultMutationOptions(n),
      state: r
    });
    return this.add(i), i;
  }
  add(t) {
    v(this, xt).add(t);
    const n = mr(t);
    if (typeof n == "string") {
      const r = v(this, it).get(n);
      r ? r.push(t) : v(this, it).set(n, [t]);
    }
    this.notify({ type: "added", mutation: t });
  }
  remove(t) {
    if (v(this, xt).delete(t)) {
      const n = mr(t);
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
    const n = mr(t);
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
    const n = mr(t);
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
      (r) => jo(n, r)
    );
  }
  findAll(t = {}) {
    return this.getAll().filter((n) => jo(t, n));
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
}, xt = new WeakMap(), it = new WeakMap(), Qn = new WeakMap(), da);
function mr(e) {
  var t;
  return (t = e.options.scope) == null ? void 0 : t.id;
}
function _o(e) {
  return {
    onFetch: (t, n) => {
      var c, d, p, f, C;
      const r = t.options, i = (p = (d = (c = t.fetchOptions) == null ? void 0 : c.meta) == null ? void 0 : d.fetchMore) == null ? void 0 : p.direction, o = ((f = t.state.data) == null ? void 0 : f.pages) || [], u = ((C = t.state.data) == null ? void 0 : C.pageParams) || [];
      let a = { pages: [], pageParams: [] }, s = 0;
      const l = async () => {
        let m = !1;
        const y = (E) => {
          Object.defineProperty(E, "signal", {
            enumerable: !0,
            get: () => (t.signal.aborted ? m = !0 : t.signal.addEventListener("abort", () => {
              m = !0;
            }), t.signal)
          });
        }, I = Ia(t.options, t.fetchOptions), x = async (E, S, P) => {
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
          y(w);
          const k = await I(
            w
          ), { maxPages: G } = t.options, T = P ? nc : tc;
          return {
            pages: T(E.pages, k, G),
            pageParams: T(E.pageParams, S, G)
          };
        };
        if (i && o.length) {
          const E = i === "backward", S = E ? pc : Uo, P = {
            pages: o,
            pageParams: u
          }, w = S(r, P);
          a = await x(P, w, E);
        } else {
          const E = e ?? o.length;
          do {
            const S = s === 0 ? u[0] ?? r.initialPageParam : Uo(r, a);
            if (s > 0 && S == null)
              break;
            a = await x(a, S), s++;
          } while (s < E);
        }
        return a;
      };
      t.options.persister ? t.fetchFn = () => {
        var m, y;
        return (y = (m = t.options).persister) == null ? void 0 : y.call(
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
function Uo(e, { pages: t, pageParams: n }) {
  const r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(
    t[r],
    t,
    n[r],
    n
  ) : void 0;
}
function pc(e, { pages: t, pageParams: n }) {
  var r;
  return t.length > 0 ? (r = e.getPreviousPageParam) == null ? void 0 : r.call(e, t[0], t, n[0], n) : void 0;
}
var Se, Tt, Vt, In, Cn, Dt, vn, xn, fa, hc = (fa = class {
  constructor(e = {}) {
    K(this, Se);
    K(this, Tt);
    K(this, Vt);
    K(this, In);
    K(this, Cn);
    K(this, Dt);
    K(this, vn);
    K(this, xn);
    W(this, Se, e.queryCache || new lc()), W(this, Tt, e.mutationCache || new fc()), W(this, Vt, e.defaultOptions || {}), W(this, In, /* @__PURE__ */ new Map()), W(this, Cn, /* @__PURE__ */ new Map()), W(this, Dt, 0);
  }
  mount() {
    hr(this, Dt)._++, v(this, Dt) === 1 && (W(this, vn, io.subscribe(async (e) => {
      e && (await this.resumePausedMutations(), v(this, Se).onFocus());
    })), W(this, xn, Fr.subscribe(async (e) => {
      e && (await this.resumePausedMutations(), v(this, Se).onOnline());
    })));
  }
  unmount() {
    var e, t;
    hr(this, Dt)._--, v(this, Dt) === 0 && ((e = v(this, vn)) == null || e.call(this), W(this, vn, void 0), (t = v(this, xn)) == null || t.call(this), W(this, xn, void 0));
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
    return r === void 0 ? this.fetchQuery(e) : (e.revalidateIfStale && n.isStaleByTime(cn(t.staleTime, n)) && this.prefetchQuery(t), Promise.resolve(r));
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
    ), o = i == null ? void 0 : i.state.data, u = Kl(t, o);
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
      cn(t.staleTime, n)
    ) ? n.fetch(t) : Promise.resolve(n.state.data);
  }
  prefetchQuery(e) {
    return this.fetchQuery(e).then(qe).catch(qe);
  }
  fetchInfiniteQuery(e) {
    return e.behavior = _o(e.pages), this.fetchQuery(e);
  }
  prefetchInfiniteQuery(e) {
    return this.fetchInfiniteQuery(e).then(qe).catch(qe);
  }
  ensureInfiniteQueryData(e) {
    return e.behavior = _o(e.pages), this.ensureQueryData(e);
  }
  resumePausedMutations() {
    return Fr.isOnline() ? v(this, Tt).resumePausedMutations() : Promise.resolve();
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
    W(this, Vt, e);
  }
  setQueryDefaults(e, t) {
    v(this, In).set(Jn(e), {
      queryKey: e,
      defaultOptions: t
    });
  }
  getQueryDefaults(e) {
    const t = [...v(this, In).values()], n = {};
    return t.forEach((r) => {
      Yn(e, r.queryKey) && Object.assign(n, r.defaultOptions);
    }), n;
  }
  setMutationDefaults(e, t) {
    v(this, Cn).set(Jn(e), {
      mutationKey: e,
      defaultOptions: t
    });
  }
  getMutationDefaults(e) {
    const t = [...v(this, Cn).values()];
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
    return t.queryHash || (t.queryHash = ro(
      t.queryKey,
      t
    )), t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"), t.throwOnError === void 0 && (t.throwOnError = !!t.suspense), !t.networkMode && t.persister && (t.networkMode = "offlineFirst"), t.queryFn === Er && (t.enabled = !1), t;
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
}, Se = new WeakMap(), Tt = new WeakMap(), Vt = new WeakMap(), In = new WeakMap(), Cn = new WeakMap(), Dt = new WeakMap(), vn = new WeakMap(), xn = new WeakMap(), fa), ze, ce, qn, Me, $t, An, Nt, ft, $n, Sn, wn, Kt, en, Mt, En, ge, Xn, ki, Bi, Oi, Ti, Vi, Di, Ni, wa, pa, gc = (pa = class extends er {
  constructor(t, n) {
    super();
    K(this, ge);
    K(this, ze);
    K(this, ce);
    K(this, qn);
    K(this, Me);
    K(this, $t);
    K(this, An);
    K(this, Nt);
    K(this, ft);
    K(this, $n);
    K(this, Sn);
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    K(this, wn);
    K(this, Kt);
    K(this, en);
    K(this, Mt);
    K(this, En, /* @__PURE__ */ new Set());
    this.options = n, W(this, ze, t), W(this, ft, null), W(this, Nt, Ri()), this.options.experimental_prefetchInRender || v(this, Nt).reject(
      new Error("experimental_prefetchInRender feature flag is not enabled")
    ), this.bindMethods(), this.setOptions(n);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (v(this, ce).addObserver(this), Qo(v(this, ce), this.options) ? le(this, ge, Xn).call(this) : this.updateResult(), le(this, ge, Ti).call(this));
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return Mi(
      v(this, ce),
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return Mi(
      v(this, ce),
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), le(this, ge, Vi).call(this), le(this, ge, Di).call(this), v(this, ce).removeObserver(this);
  }
  setOptions(t, n) {
    const r = this.options, i = v(this, ce);
    if (this.options = v(this, ze).defaultQueryOptions(t), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof ot(this.options.enabled, v(this, ce)) != "boolean")
      throw new Error(
        "Expected enabled to be a boolean or a callback that returns a boolean"
      );
    le(this, ge, Ni).call(this), v(this, ce).setOptions(this.options), r._defaulted && !Fi(this.options, r) && v(this, ze).getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: v(this, ce),
      observer: this
    });
    const o = this.hasListeners();
    o && qo(
      v(this, ce),
      i,
      this.options,
      r
    ) && le(this, ge, Xn).call(this), this.updateResult(n), o && (v(this, ce) !== i || ot(this.options.enabled, v(this, ce)) !== ot(r.enabled, v(this, ce)) || cn(this.options.staleTime, v(this, ce)) !== cn(r.staleTime, v(this, ce))) && le(this, ge, ki).call(this);
    const u = le(this, ge, Bi).call(this);
    o && (v(this, ce) !== i || ot(this.options.enabled, v(this, ce)) !== ot(r.enabled, v(this, ce)) || u !== v(this, Mt)) && le(this, ge, Oi).call(this, u);
  }
  getOptimisticResult(t) {
    const n = v(this, ze).getQueryCache().build(v(this, ze), t), r = this.createResult(n, t);
    return bc(this, r) && (W(this, Me, r), W(this, An, this.options), W(this, $t, v(this, ce).state)), r;
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
    v(this, En).add(t);
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
    var G;
    const r = v(this, ce), i = this.options, o = v(this, Me), u = v(this, $t), a = v(this, An), l = t !== r ? t.state : v(this, qn), { state: c } = t;
    let d = { ...c }, p = !1, f;
    if (n._optimisticResults) {
      const T = this.hasListeners(), H = !T && Qo(t, n), V = T && qo(t, r, n, i);
      (H || V) && (d = {
        ...d,
        ...Sa(c.data, t.options)
      }), n._optimisticResults === "isRestoring" && (d.fetchStatus = "idle");
    }
    let { error: C, errorUpdatedAt: m, status: y } = d;
    if (n.select && d.data !== void 0)
      if (o && d.data === (u == null ? void 0 : u.data) && n.select === v(this, $n))
        f = v(this, Sn);
      else
        try {
          W(this, $n, n.select), f = n.select(d.data), f = Gi(o == null ? void 0 : o.data, f, n), W(this, Sn, f), W(this, ft, null);
        } catch (T) {
          W(this, ft, T);
        }
    else
      f = d.data;
    if (n.placeholderData !== void 0 && f === void 0 && y === "pending") {
      let T;
      if (o != null && o.isPlaceholderData && n.placeholderData === (a == null ? void 0 : a.placeholderData))
        T = o.data;
      else if (T = typeof n.placeholderData == "function" ? n.placeholderData(
        (G = v(this, wn)) == null ? void 0 : G.state.data,
        v(this, wn)
      ) : n.placeholderData, n.select && T !== void 0)
        try {
          T = n.select(T), W(this, ft, null);
        } catch (H) {
          W(this, ft, H);
        }
      T !== void 0 && (y = "success", f = Gi(
        o == null ? void 0 : o.data,
        T,
        n
      ), p = !0);
    }
    v(this, ft) && (C = v(this, ft), f = v(this, Sn), m = Date.now(), y = "error");
    const I = d.fetchStatus === "fetching", x = y === "pending", E = y === "error", S = x && I, P = f !== void 0, k = {
      status: y,
      fetchStatus: d.fetchStatus,
      isPending: x,
      isSuccess: y === "success",
      isError: E,
      isInitialLoading: S,
      isLoading: S,
      data: f,
      dataUpdatedAt: d.dataUpdatedAt,
      error: C,
      errorUpdatedAt: m,
      failureCount: d.fetchFailureCount,
      failureReason: d.fetchFailureReason,
      errorUpdateCount: d.errorUpdateCount,
      isFetched: d.dataUpdateCount > 0 || d.errorUpdateCount > 0,
      isFetchedAfterMount: d.dataUpdateCount > l.dataUpdateCount || d.errorUpdateCount > l.errorUpdateCount,
      isFetching: I,
      isRefetching: I && !x,
      isLoadingError: E && !P,
      isPaused: d.fetchStatus === "paused",
      isPlaceholderData: p,
      isRefetchError: E && P,
      isStale: oo(t, n),
      refetch: this.refetch,
      promise: v(this, Nt)
    };
    if (this.options.experimental_prefetchInRender) {
      const T = (B) => {
        k.status === "error" ? B.reject(k.error) : k.data !== void 0 && B.resolve(k.data);
      }, H = () => {
        const B = W(this, Nt, k.promise = Ri());
        T(B);
      }, V = v(this, Nt);
      switch (V.status) {
        case "pending":
          t.queryHash === r.queryHash && T(V);
          break;
        case "fulfilled":
          (k.status === "error" || k.data !== V.value) && H();
          break;
        case "rejected":
          (k.status !== "error" || k.error !== V.reason) && H();
          break;
      }
    }
    return k;
  }
  updateResult(t) {
    const n = v(this, Me), r = this.createResult(v(this, ce), this.options);
    if (W(this, $t, v(this, ce).state), W(this, An, this.options), v(this, $t).data !== void 0 && W(this, wn, v(this, ce)), Fi(r, n))
      return;
    W(this, Me, r);
    const i = {}, o = () => {
      if (!n)
        return !0;
      const { notifyOnChangeProps: u } = this.options, a = typeof u == "function" ? u() : u;
      if (a === "all" || !a && !v(this, En).size)
        return !0;
      const s = new Set(
        a ?? v(this, En)
      );
      return this.options.throwOnError && s.add("error"), Object.keys(v(this, Me)).some((l) => {
        const c = l;
        return v(this, Me)[c] !== n[c] && s.has(c);
      });
    };
    (t == null ? void 0 : t.listeners) !== !1 && o() && (i.listeners = !0), le(this, ge, wa).call(this, { ...i, ...t });
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && le(this, ge, Ti).call(this);
  }
}, ze = new WeakMap(), ce = new WeakMap(), qn = new WeakMap(), Me = new WeakMap(), $t = new WeakMap(), An = new WeakMap(), Nt = new WeakMap(), ft = new WeakMap(), $n = new WeakMap(), Sn = new WeakMap(), wn = new WeakMap(), Kt = new WeakMap(), en = new WeakMap(), Mt = new WeakMap(), En = new WeakMap(), ge = new WeakSet(), Xn = function(t) {
  le(this, ge, Ni).call(this);
  let n = v(this, ce).fetch(
    this.options,
    t
  );
  return t != null && t.throwOnError || (n = n.catch(qe)), n;
}, ki = function() {
  le(this, ge, Vi).call(this);
  const t = cn(
    this.options.staleTime,
    v(this, ce)
  );
  if (tn || v(this, Me).isStale || !wi(t))
    return;
  const r = ya(v(this, Me).dataUpdatedAt, t) + 1;
  W(this, Kt, setTimeout(() => {
    v(this, Me).isStale || this.updateResult();
  }, r));
}, Bi = function() {
  return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(v(this, ce)) : this.options.refetchInterval) ?? !1;
}, Oi = function(t) {
  le(this, ge, Di).call(this), W(this, Mt, t), !(tn || ot(this.options.enabled, v(this, ce)) === !1 || !wi(v(this, Mt)) || v(this, Mt) === 0) && W(this, en, setInterval(() => {
    (this.options.refetchIntervalInBackground || io.isFocused()) && le(this, ge, Xn).call(this);
  }, v(this, Mt)));
}, Ti = function() {
  le(this, ge, ki).call(this), le(this, ge, Oi).call(this, le(this, ge, Bi).call(this));
}, Vi = function() {
  v(this, Kt) && (clearTimeout(v(this, Kt)), W(this, Kt, void 0));
}, Di = function() {
  v(this, en) && (clearInterval(v(this, en)), W(this, en, void 0));
}, Ni = function() {
  const t = v(this, ze).getQueryCache().build(v(this, ze), this.options);
  if (t === v(this, ce))
    return;
  const n = v(this, ce);
  W(this, ce, t), W(this, qn, t.state), this.hasListeners() && (n == null || n.removeObserver(this), t.addObserver(this));
}, wa = function(t) {
  ke.batch(() => {
    t.listeners && this.listeners.forEach((n) => {
      n(v(this, Me));
    }), v(this, ze).getQueryCache().notify({
      query: v(this, ce),
      type: "observerResultsUpdated"
    });
  });
}, pa);
function mc(e, t) {
  return ot(t.enabled, e) !== !1 && e.state.data === void 0 && !(e.state.status === "error" && t.retryOnMount === !1);
}
function Qo(e, t) {
  return mc(e, t) || e.state.data !== void 0 && Mi(e, t, t.refetchOnMount);
}
function Mi(e, t, n) {
  if (ot(t.enabled, e) !== !1) {
    const r = typeof n == "function" ? n(e) : n;
    return r === "always" || r !== !1 && oo(e, t);
  }
  return !1;
}
function qo(e, t, n, r) {
  return (e !== t || ot(r.enabled, e) === !1) && (!n.suspense || e.state.status !== "error") && oo(e, n);
}
function oo(e, t) {
  return ot(t.enabled, e) !== !1 && e.isStaleByTime(cn(t.staleTime, e));
}
function bc(e, t) {
  return !Fi(e.getCurrentResult(), t);
}
var Ea = ne.createContext(
  void 0
), yc = (e) => {
  const t = ne.useContext(Ea);
  if (!t)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return t;
}, Ic = ({
  client: e,
  children: t
}) => (ne.useEffect(() => (e.mount(), () => {
  e.unmount();
}), [e]), /* @__PURE__ */ j(Ea.Provider, { value: e, children: t })), Fa = ne.createContext(!1), Cc = () => ne.useContext(Fa);
Fa.Provider;
function vc() {
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
var xc = ne.createContext(vc()), Ac = () => ne.useContext(xc);
function Sc(e, t) {
  return typeof e == "function" ? e(...t) : !!e;
}
function $o() {
}
var wc = (e, t) => {
  (e.suspense || e.throwOnError || e.experimental_prefetchInRender) && (t.isReset() || (e.retryOnMount = !1));
}, Ec = (e) => {
  ne.useEffect(() => {
    e.clearReset();
  }, [e]);
}, Fc = ({
  result: e,
  errorResetBoundary: t,
  throwOnError: n,
  query: r
}) => e.isError && !t.isReset() && !e.isFetching && r && Sc(n, [e.error, r]), Pc = (e) => {
  const t = e.staleTime;
  e.suspense && (e.staleTime = typeof t == "function" ? (...n) => Math.max(t(...n), 1e3) : Math.max(t ?? 1e3, 1e3), typeof e.gcTime == "number" && (e.gcTime = Math.max(e.gcTime, 1e3)));
}, Gc = (e, t) => e.isLoading && e.isFetching && !t, Rc = (e, t) => (e == null ? void 0 : e.suspense) && t.isPending, Ko = (e, t, n) => t.fetchOptimistic(e).catch(() => {
  n.clearReset();
});
function kc(e, t, n) {
  var d, p, f, C, m;
  if (process.env.NODE_ENV !== "production" && (typeof e != "object" || Array.isArray(e)))
    throw new Error(
      'Bad argument type. Starting with v5, only the "Object" form is allowed when calling query related functions. Please use the error stack to find the culprit call. More info here: https://tanstack.com/query/latest/docs/react/guides/migrating-to-v5#supports-a-single-signature-one-object'
    );
  const r = yc(), i = Cc(), o = Ac(), u = r.defaultQueryOptions(e);
  (p = (d = r.getDefaultOptions().queries) == null ? void 0 : d._experimental_beforeQuery) == null || p.call(
    d,
    u
  ), u._optimisticResults = i ? "isRestoring" : "optimistic", Pc(u), wc(u, o), Ec(o);
  const a = !r.getQueryCache().get(u.queryHash), [s] = ne.useState(
    () => new t(
      r,
      u
    )
  ), l = s.getOptimisticResult(u), c = !i && e.subscribed !== !1;
  if (ne.useSyncExternalStore(
    ne.useCallback(
      (y) => {
        const I = c ? s.subscribe(ke.batchCalls(y)) : $o;
        return s.updateResult(), I;
      },
      [s, c]
    ),
    () => s.getCurrentResult(),
    () => s.getCurrentResult()
  ), ne.useEffect(() => {
    s.setOptions(u, { listeners: !1 });
  }, [u, s]), Rc(u, l))
    throw Ko(u, s, o);
  if (Fc({
    result: l,
    errorResetBoundary: o,
    throwOnError: u.throwOnError,
    query: r.getQueryCache().get(u.queryHash)
  }))
    throw l.error;
  if ((C = (f = r.getDefaultOptions().queries) == null ? void 0 : f._experimental_afterQuery) == null || C.call(
    f,
    u,
    l
  ), u.experimental_prefetchInRender && !tn && Gc(l, i)) {
    const y = a ? (
      // Fetch immediately on render in order to ensure `.promise` is resolved even if the component is unmounted
      Ko(u, s, o)
    ) : (
      // subscribe to the "cache promise" so that we can finalize the currentThenable once data comes in
      (m = r.getQueryCache().get(u.queryHash)) == null ? void 0 : m.promise
    );
    y == null || y.catch($o).finally(() => {
      s.updateResult();
    });
  }
  return u.notifyOnChangeProps ? l : s.trackResult(l);
}
function rn(e, t) {
  return kc(e, gc);
}
const Pa = Kn(
  void 0
), Lt = () => {
  const e = Fn(Pa);
  if (!e)
    throw new Error("Must be used inside FrontendClientProvider");
  return e;
}, By = ({
  children: e,
  client: t
}) => {
  const n = new hc({
    defaultOptions: {
      queries: {
        staleTime: 36e5,
        refetchOnWindowFocus: !1
      }
    }
  });
  return /* @__PURE__ */ j(Ic, { client: n, children: /* @__PURE__ */ j(Pa.Provider, { value: t, children: e }) });
};
function Ga(e) {
  return typeof e == "object" && e && "__lv" in e ? e.__lv.value : e;
}
function Bc(e) {
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
function Oc(e) {
  const t = Bc(e.value);
  if (!e.prop.default && typeof t > "u")
    return [
      "required"
    ];
  if (!e.prop.default && Array.isArray(t) && !t.length) return [
    "empty array"
  ];
}
function Tc(e) {
  const t = Ga(e.value);
  if (t == null || typeof t > "u") return [
    "required"
  ];
}
function Vc(e) {
  const {
    prop: t,
    value: n
  } = e, r = Ga(n);
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
function Dc(e) {
  const {
    prop: t,
    value: n
  } = e;
  if (!t.default && (n == null || typeof n > "u")) return [
    "required"
  ];
}
function Nc(e) {
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
function Mc(e) {
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
      const o = Nc(t), u = r;
      for (const a of o)
        !a.optional && !u[a.name] && i.push(`missing custom field: ${a.name}`);
    }
    return t.auth_type !== "none" && i.push("no auth provision configured"), i;
  }
}
const Ar = [
  "$.service.db",
  "$.interface.http",
  "$.interface.apphook",
  "$.interface.timer"
  // TODO add support for this (cron string and timers)
], Ra = Kn(void 0), uo = () => {
  const e = Fn(Ra);
  if (!e)
    throw new Error("Must be used inside provider");
  return e;
}, Lc = ({
  children: e,
  props: t
}) => {
  const n = Lt(), r = to(), {
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
    C
  ] = ve(!1), [
    m,
    y
  ] = ve({}), [
    I,
    x
  ] = ve({});
  Yt(() => {
    x({});
  }, [
    i.key
  ]);
  const E = (N) => I[N.name];
  let S = o || {};
  const [
    P,
    w
  ] = ve(S), k = t.onUpdateConfiguredProps || w;
  t.onUpdateConfiguredProps || (S = P);
  const [
    G,
    T
  ] = ve(), [
    H,
    V
  ] = ve(), B = {
    userId: a,
    componentId: s,
    configuredProps: S,
    dynamicPropsId: G == null ? void 0 : G.id
  }, X = {
    ...B
  }, {
    isFetching: L
    // TODO error
  } = rn({
    queryKey: [
      "dynamicProps",
      X
    ],
    queryFn: async () => {
      var Z;
      const { dynamicProps: N } = await n.componentReloadProps(B);
      return N && ((Z = t.onUpdateDynamicProps) == null || Z.call(t, N), T(N)), V(void 0), [];
    },
    enabled: H != null
    // TODO or props.dynamicPropsId && !dynamicProps
  }), [
    M,
    _
  ] = ve([]);
  Yt(() => {
    te();
  }, [
    S
  ]);
  let Q = (G == null ? void 0 : G.configurableProps) || t.component.configurable_props || [];
  if (u != null && u.length) {
    const N = [];
    for (const Z of Q)
      u.findIndex((q) => Z.name === q) >= 0 && N.push(Z);
    Q = N;
  }
  H != null && (Q = Q.slice(0, H + 1));
  const se = (N, Z) => {
    const q = [];
    if (N.optional || N.hidden || N.disabled || Ar.includes(N.type)) return [];
    if (N.type === "app") {
      const fe = d[N.name];
      if (fe) {
        const Pe = fe.extra.app;
        q.push(...Mc({
          prop: N,
          value: Z,
          app: Pe
        }) ?? []);
      } else
        q.push("field not registered");
    } else N.type === "boolean" ? q.push(...Tc({
      prop: N,
      value: Z
    }) ?? []) : N.type === "integer" ? q.push(...Vc({
      prop: N,
      value: Z
    }) ?? []) : N.type === "string" ? q.push(...Dc({
      prop: N,
      value: Z
    }) ?? []) : N.type === "string[]" && q.push(...Oc({
      prop: N,
      value: Z
    }) ?? []);
    return q;
  }, me = (N) => {
    let Z;
    for (let q = 0; q < Q.length; q++) {
      const fe = Q[q];
      if (fe.hidden || fe.optional && !E(fe))
        continue;
      if (N[fe.name] === void 0 && Z == null && (fe.type === "app" || fe.remoteOptions)) {
        Z = q;
        break;
      }
    }
    c(Z);
  }, b = (N) => {
    k(N), me(N);
    const Z = {};
    for (let q = 0; q < Q.length; q++) {
      const fe = Q[q], Pe = N[fe.name], We = se(fe, Pe);
      We.length && (Z[fe.name] = We);
    }
    y(Z);
  };
  Yt(() => {
    const N = {};
    for (const Z of Q) {
      if (Z.hidden || Ar.includes(Z.type) || Z.optional && !E(Z))
        continue;
      const q = S[Z.name];
      q === void 0 ? "default" in Z && Z.default != null && (N[Z.name] = Z.default) : Z.type === "integer" && typeof q != "number" ? delete N[Z.name] : N[Z.name] = q;
    }
    $l(N, S) || b(N);
  }, [
    Q
  ]);
  const [
    Ce,
    ae
  ] = ve(a);
  Yt(() => {
    Ce !== a && (b({}), ae(a));
  }, [
    a
  ]);
  const g = (N, Z) => {
    const q = Q[N], fe = {
      ...S
    };
    Z === void 0 ? delete fe[q.name] : fe[q.name] = Z, k(fe), q.reloadProps && V(N), (q.type === "app" || q.remoteOptions) && me(fe);
    const Pe = se(q, Z), We = {
      ...m
    };
    Pe.length ? We[q.name] = Pe : delete We[q.name], y(We);
  }, pe = (N, Z) => {
    const q = {
      ...I
    };
    Z ? q[N.name] = !0 : delete q[N.name];
    const fe = Q.findIndex((Pe) => Pe.name === N.name);
    Z ? (o == null ? void 0 : o[N.name]) !== void 0 ? g(
      fe,
      o[N.name]
    ) : "default" in N && N.default != null && g(fe, N.default) : g(fe, void 0), x(q);
  }, te = () => {
    const N = [];
    for (const Z of Q) {
      if (!Z || Z.optional || Z.hidden || Ar.includes(Z.type)) continue;
      const q = S[Z.name];
      se(Z, q).length && N.push(Z.name);
    }
    _(N);
  }, de = (N) => {
    p((Z) => (Z[N.prop.name] = N, Z));
  }, Fe = {
    id: r,
    isValid: !Object.keys(m).length,
    // XXX want to expose more from errors
    props: t,
    userId: a,
    component: i,
    configurableProps: Q,
    configuredProps: S,
    dynamicProps: G,
    dynamicPropsQueryIsFetching: L,
    errors: m,
    fields: d,
    optionalPropIsEnabled: E,
    optionalPropSetEnabled: pe,
    propsNeedConfiguring: M,
    queryDisabledIdx: l,
    registerField: de,
    setConfiguredProp: g,
    setSubmitting: C,
    submitting: f
  };
  return /* @__PURE__ */ j(Ra.Provider, { value: Fe, children: e });
};
function nn(e) {
  "@babel/helpers - typeof";
  return nn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, nn(e);
}
function Xc(e, t) {
  if (nn(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (nn(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ka(e) {
  var t = Xc(e, "string");
  return nn(t) == "symbol" ? t : t + "";
}
function zn(e, t, n) {
  return (t = ka(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function eu(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function J(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? eu(Object(n), !0).forEach(function(r) {
      zn(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : eu(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function zc(e) {
  if (Array.isArray(e)) return e;
}
function Hc(e, t) {
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
function Li(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Ba(e, t) {
  if (e) {
    if (typeof e == "string") return Li(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Li(e, t) : void 0;
  }
}
function Wc() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function St(e, t) {
  return zc(e) || Hc(e, t) || Ba(e, t) || Wc();
}
function Zc(e, t) {
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
  var n, r, i = Zc(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], t.includes(n) || {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  }
  return i;
}
var jc = ["defaultInputValue", "defaultMenuIsOpen", "defaultValue", "inputValue", "menuIsOpen", "onChange", "onInputChange", "onMenuClose", "onMenuOpen", "value"];
function Oa(e) {
  var t = e.defaultInputValue, n = t === void 0 ? "" : t, r = e.defaultMenuIsOpen, i = r === void 0 ? !1 : r, o = e.defaultValue, u = o === void 0 ? null : o, a = e.inputValue, s = e.menuIsOpen, l = e.onChange, c = e.onInputChange, d = e.onMenuClose, p = e.onMenuOpen, f = e.value, C = bt(e, jc), m = ve(a !== void 0 ? a : n), y = St(m, 2), I = y[0], x = y[1], E = ve(s !== void 0 ? s : i), S = St(E, 2), P = S[0], w = S[1], k = ve(f !== void 0 ? f : u), G = St(k, 2), T = G[0], H = G[1], V = Ve(function(se, me) {
    typeof l == "function" && l(se, me), H(se);
  }, [l]), B = Ve(function(se, me) {
    var b;
    typeof c == "function" && (b = c(se, me)), x(b !== void 0 ? b : se);
  }, [c]), X = Ve(function() {
    typeof p == "function" && p(), w(!0);
  }, [p]), L = Ve(function() {
    typeof d == "function" && d(), w(!1);
  }, [d]), M = a !== void 0 ? a : I, _ = s !== void 0 ? s : P, Q = f !== void 0 ? f : T;
  return J(J({}, C), {}, {
    inputValue: M,
    menuIsOpen: _,
    onChange: V,
    onInputChange: B,
    onMenuClose: L,
    onMenuOpen: X,
    value: Q
  });
}
function U() {
  return U = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, U.apply(null, arguments);
}
function Jc(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function tu(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, ka(r.key), r);
  }
}
function Yc(e, t, n) {
  return tu(e.prototype, t), tu(e, n), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function Xi(e, t) {
  return Xi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, Xi(e, t);
}
function _c(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), t && Xi(e, t);
}
function Pr(e) {
  return Pr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Pr(e);
}
function Ta() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Ta = function() {
    return !!e;
  })();
}
function Uc(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Qc(e, t) {
  if (t && (nn(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return Uc(e);
}
function qc(e) {
  var t = Ta();
  return function() {
    var n, r = Pr(e);
    if (t) {
      var i = Pr(this).constructor;
      n = Reflect.construct(r, arguments, i);
    } else n = r.apply(this, arguments);
    return Qc(this, n);
  };
}
function $c(e) {
  if (Array.isArray(e)) return Li(e);
}
function Kc(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function ed() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function dn(e) {
  return $c(e) || Kc(e) || Ba(e) || ed();
}
function td(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
    raw: {
      value: Object.freeze(t)
    }
  }));
}
const nd = Math.min, rd = Math.max, Gr = Math.round, br = Math.floor, Rr = (e) => ({
  x: e,
  y: e
});
function id(e) {
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
function Lr() {
  return typeof window < "u";
}
function Va(e) {
  return Na(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function wt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Da(e) {
  var t;
  return (t = (Na(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Na(e) {
  return Lr() ? e instanceof Node || e instanceof wt(e).Node : !1;
}
function od(e) {
  return Lr() ? e instanceof Element || e instanceof wt(e).Element : !1;
}
function ao(e) {
  return Lr() ? e instanceof HTMLElement || e instanceof wt(e).HTMLElement : !1;
}
function nu(e) {
  return !Lr() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof wt(e).ShadowRoot;
}
function Ma(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: i
  } = so(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(i);
}
function ud() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function ad(e) {
  return ["html", "body", "#document"].includes(Va(e));
}
function so(e) {
  return wt(e).getComputedStyle(e);
}
function sd(e) {
  if (Va(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    nu(e) && e.host || // Fallback.
    Da(e)
  );
  return nu(t) ? t.host : t;
}
function La(e) {
  const t = sd(e);
  return ad(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ao(t) && Ma(t) ? t : La(t);
}
function kr(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const i = La(e), o = i === ((r = e.ownerDocument) == null ? void 0 : r.body), u = wt(i);
  if (o) {
    const a = zi(u);
    return t.concat(u, u.visualViewport || [], Ma(i) ? i : [], a && n ? kr(a) : []);
  }
  return t.concat(i, kr(i, [], n));
}
function zi(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function ld(e) {
  const t = so(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const i = ao(e), o = i ? e.offsetWidth : n, u = i ? e.offsetHeight : r, a = Gr(n) !== o || Gr(r) !== u;
  return a && (n = o, r = u), {
    width: n,
    height: r,
    $: a
  };
}
function lo(e) {
  return od(e) ? e : e.contextElement;
}
function ru(e) {
  const t = lo(e);
  if (!ao(t))
    return Rr(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: i,
    $: o
  } = ld(t);
  let u = (o ? Gr(n.width) : n.width) / r, a = (o ? Gr(n.height) : n.height) / i;
  return (!u || !Number.isFinite(u)) && (u = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: u,
    y: a
  };
}
const cd = /* @__PURE__ */ Rr(0);
function dd(e) {
  const t = wt(e);
  return !ud() || !t.visualViewport ? cd : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function fd(e, t, n) {
  return !1;
}
function iu(e, t, n, r) {
  t === void 0 && (t = !1);
  const i = e.getBoundingClientRect(), o = lo(e);
  let u = Rr(1);
  t && (u = ru(e));
  const a = fd() ? dd(o) : Rr(0);
  let s = (i.left + a.x) / u.x, l = (i.top + a.y) / u.y, c = i.width / u.x, d = i.height / u.y;
  if (o) {
    const p = wt(o), f = r;
    let C = p, m = zi(C);
    for (; m && r && f !== C; ) {
      const y = ru(m), I = m.getBoundingClientRect(), x = so(m), E = I.left + (m.clientLeft + parseFloat(x.paddingLeft)) * y.x, S = I.top + (m.clientTop + parseFloat(x.paddingTop)) * y.y;
      s *= y.x, l *= y.y, c *= y.x, d *= y.y, s += E, l += S, C = wt(m), m = zi(C);
    }
  }
  return id({
    width: c,
    height: d,
    x: s,
    y: l
  });
}
function Xa(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function pd(e, t) {
  let n = null, r;
  const i = Da(e);
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
    const C = br(d), m = br(i.clientWidth - (c + p)), y = br(i.clientHeight - (d + f)), I = br(c), E = {
      rootMargin: -C + "px " + -m + "px " + -y + "px " + -I + "px",
      threshold: rd(0, nd(1, s)) || 1
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
      k === 1 && !Xa(l, e.getBoundingClientRect()) && u(), S = !1;
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
function hd(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: o = !0,
    elementResize: u = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: s = !1
  } = r, l = lo(e), c = i || o ? [...l ? kr(l) : [], ...kr(t)] : [];
  c.forEach((I) => {
    i && I.addEventListener("scroll", n, {
      passive: !0
    }), o && I.addEventListener("resize", n);
  });
  const d = l && a ? pd(l, n) : null;
  let p = -1, f = null;
  u && (f = new ResizeObserver((I) => {
    let [x] = I;
    x && x.target === l && f && (f.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var E;
      (E = f) == null || E.observe(t);
    })), n();
  }), l && !s && f.observe(l), f.observe(t));
  let C, m = s ? iu(e) : null;
  s && y();
  function y() {
    const I = iu(e);
    m && !Xa(m, I) && n(), m = I, C = requestAnimationFrame(y);
  }
  return n(), () => {
    var I;
    c.forEach((x) => {
      i && x.removeEventListener("scroll", n), o && x.removeEventListener("resize", n);
    }), d == null || d(), (I = f) == null || I.disconnect(), f = null, s && cancelAnimationFrame(C);
  };
}
var Hi = jl, gd = ["className", "clearValue", "cx", "getStyles", "getClassNames", "getValue", "hasValue", "isMulti", "isRtl", "options", "selectOption", "selectProps", "setValue", "theme"], Br = function() {
};
function md(e, t) {
  return t ? t[0] === "-" ? e + t : e + "__" + t : e;
}
function bd(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
    r[i - 2] = arguments[i];
  var o = [].concat(r);
  if (t && e)
    for (var u in t)
      t.hasOwnProperty(u) && t[u] && o.push("".concat(md(e, u)));
  return o.filter(function(a) {
    return a;
  }).map(function(a) {
    return String(a).trim();
  }).join(" ");
}
var Or = function(t) {
  return Ed(t) ? t.filter(Boolean) : nn(t) === "object" && t !== null ? [t] : [];
}, za = function(t) {
  t.className, t.clearValue, t.cx, t.getStyles, t.getClassNames, t.getValue, t.hasValue, t.isMulti, t.isRtl, t.options, t.selectOption, t.selectProps, t.setValue, t.theme;
  var n = bt(t, gd);
  return J({}, n);
}, we = function(t, n, r) {
  var i = t.cx, o = t.getStyles, u = t.getClassNames, a = t.className;
  return {
    css: o(n, t),
    className: i(r ?? {}, u(n, t), a)
  };
};
function Xr(e) {
  return [document.documentElement, document.body, window].indexOf(e) > -1;
}
function yd(e) {
  return Xr(e) ? window.innerHeight : e.clientHeight;
}
function Ha(e) {
  return Xr(e) ? window.pageYOffset : e.scrollTop;
}
function Tr(e, t) {
  if (Xr(e)) {
    window.scrollTo(0, t);
    return;
  }
  e.scrollTop = t;
}
function Id(e) {
  var t = getComputedStyle(e), n = t.position === "absolute", r = /(auto|scroll)/;
  if (t.position === "fixed") return document.documentElement;
  for (var i = e; i = i.parentElement; )
    if (t = getComputedStyle(i), !(n && t.position === "static") && r.test(t.overflow + t.overflowY + t.overflowX))
      return i;
  return document.documentElement;
}
function Cd(e, t, n, r) {
  return n * ((e = e / r - 1) * e * e + 1) + t;
}
function yr(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 200, r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : Br, i = Ha(e), o = t - i, u = 10, a = 0;
  function s() {
    a += u;
    var l = Cd(a, i, o, n);
    Tr(e, l), a < n ? window.requestAnimationFrame(s) : r(e);
  }
  s();
}
function ou(e, t) {
  var n = e.getBoundingClientRect(), r = t.getBoundingClientRect(), i = t.offsetHeight / 3;
  r.bottom + i > n.bottom ? Tr(e, Math.min(t.offsetTop + t.clientHeight - e.offsetHeight + i, e.scrollHeight)) : r.top - i < n.top && Tr(e, Math.max(t.offsetTop - i, 0));
}
function vd(e) {
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
function uu() {
  try {
    return document.createEvent("TouchEvent"), !0;
  } catch {
    return !1;
  }
}
function xd() {
  try {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  } catch {
    return !1;
  }
}
var Wa = !1, Ad = {
  get passive() {
    return Wa = !0;
  }
}, Ir = typeof window < "u" ? window : {};
Ir.addEventListener && Ir.removeEventListener && (Ir.addEventListener("p", Br, Ad), Ir.removeEventListener("p", Br, !1));
var Sd = Wa;
function wd(e) {
  return e != null;
}
function Ed(e) {
  return Array.isArray(e);
}
function Hn(e, t, n) {
  return e ? t : n;
}
var Fd = function(t) {
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
}, Pd = ["children", "innerProps"], Gd = ["children", "innerProps"];
function Rd(e) {
  var t = e.maxHeight, n = e.menuEl, r = e.minHeight, i = e.placement, o = e.shouldScroll, u = e.isFixedPosition, a = e.controlHeight, s = Id(n), l = {
    placement: "bottom",
    maxHeight: t
  };
  if (!n || !n.offsetParent) return l;
  var c = s.getBoundingClientRect(), d = c.height, p = n.getBoundingClientRect(), f = p.bottom, C = p.height, m = p.top, y = n.offsetParent.getBoundingClientRect(), I = y.top, x = u ? window.innerHeight : yd(s), E = Ha(s), S = parseInt(getComputedStyle(n).marginBottom, 10), P = parseInt(getComputedStyle(n).marginTop, 10), w = I - P, k = x - m, G = w + E, T = d - E - m, H = f - x + E + S, V = E + m - P, B = 160;
  switch (i) {
    case "auto":
    case "bottom":
      if (k >= C)
        return {
          placement: "bottom",
          maxHeight: t
        };
      if (T >= C && !u)
        return o && yr(s, H, B), {
          placement: "bottom",
          maxHeight: t
        };
      if (!u && T >= r || u && k >= r) {
        o && yr(s, H, B);
        var X = u ? k - S : T - S;
        return {
          placement: "bottom",
          maxHeight: X
        };
      }
      if (i === "auto" || u) {
        var L = t, M = u ? w : G;
        return M >= r && (L = Math.min(M - S - a, t)), {
          placement: "top",
          maxHeight: L
        };
      }
      if (i === "bottom")
        return o && Tr(s, H), {
          placement: "bottom",
          maxHeight: t
        };
      break;
    case "top":
      if (w >= C)
        return {
          placement: "top",
          maxHeight: t
        };
      if (G >= C && !u)
        return o && yr(s, V, B), {
          placement: "top",
          maxHeight: t
        };
      if (!u && G >= r || u && w >= r) {
        var _ = t;
        return (!u && G >= r || u && w >= r) && (_ = u ? w - P : G - P), o && yr(s, V, B), {
          placement: "top",
          maxHeight: _
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
function kd(e) {
  var t = {
    bottom: "top",
    top: "bottom"
  };
  return e ? t[e] : "bottom";
}
var Za = function(t) {
  return t === "auto" ? "bottom" : t;
}, Bd = function(t, n) {
  var r, i = t.placement, o = t.theme, u = o.borderRadius, a = o.spacing, s = o.colors;
  return J((r = {
    label: "menu"
  }, zn(r, kd(i), "100%"), zn(r, "position", "absolute"), zn(r, "width", "100%"), zn(r, "zIndex", 1), r), n ? {} : {
    backgroundColor: s.neutral0,
    borderRadius: u,
    boxShadow: "0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",
    marginBottom: a.menuGutter,
    marginTop: a.menuGutter
  });
}, ja = /* @__PURE__ */ Kn(null), Od = function(t) {
  var n = t.children, r = t.minMenuHeight, i = t.maxMenuHeight, o = t.menuPlacement, u = t.menuPosition, a = t.menuShouldScrollIntoView, s = t.theme, l = Fn(ja) || {}, c = l.setPortalPlacement, d = At(null), p = ve(i), f = St(p, 2), C = f[0], m = f[1], y = ve(null), I = St(y, 2), x = I[0], E = I[1], S = s.spacing.controlHeight;
  return Hi(function() {
    var P = d.current;
    if (P) {
      var w = u === "fixed", k = a && !w, G = Rd({
        maxHeight: i,
        menuEl: P,
        minHeight: r,
        placement: o,
        shouldScroll: k,
        isFixedPosition: w,
        controlHeight: S
      });
      m(G.maxHeight), E(G.placement), c == null || c(G.placement);
    }
  }, [i, o, u, a, r, c, S]), n({
    ref: d,
    placerProps: J(J({}, t), {}, {
      placement: x || Za(o),
      maxHeight: C
    })
  });
}, Td = function(t) {
  var n = t.children, r = t.innerRef, i = t.innerProps;
  return Y("div", U({}, we(t, "menu", {
    menu: !0
  }), {
    ref: r
  }, i), n);
}, Vd = Td, Dd = function(t, n) {
  var r = t.maxHeight, i = t.theme.spacing.baseUnit;
  return J({
    maxHeight: r,
    overflowY: "auto",
    position: "relative",
    // required for offset[Height, Top] > keyboard scroll
    WebkitOverflowScrolling: "touch"
  }, n ? {} : {
    paddingBottom: i,
    paddingTop: i
  });
}, Nd = function(t) {
  var n = t.children, r = t.innerProps, i = t.innerRef, o = t.isMulti;
  return Y("div", U({}, we(t, "menuList", {
    "menu-list": !0,
    "menu-list--is-multi": o
  }), {
    ref: i
  }, r), n);
}, Ja = function(t, n) {
  var r = t.theme, i = r.spacing.baseUnit, o = r.colors;
  return J({
    textAlign: "center"
  }, n ? {} : {
    color: o.neutral40,
    padding: "".concat(i * 2, "px ").concat(i * 3, "px")
  });
}, Md = Ja, Ld = Ja, Xd = function(t) {
  var n = t.children, r = n === void 0 ? "No options" : n, i = t.innerProps, o = bt(t, Pd);
  return Y("div", U({}, we(J(J({}, o), {}, {
    children: r,
    innerProps: i
  }), "noOptionsMessage", {
    "menu-notice": !0,
    "menu-notice--no-options": !0
  }), i), r);
}, zd = function(t) {
  var n = t.children, r = n === void 0 ? "Loading..." : n, i = t.innerProps, o = bt(t, Gd);
  return Y("div", U({}, we(J(J({}, o), {}, {
    children: r,
    innerProps: i
  }), "loadingMessage", {
    "menu-notice": !0,
    "menu-notice--loading": !0
  }), i), r);
}, Hd = function(t) {
  var n = t.rect, r = t.offset, i = t.position;
  return {
    left: n.left,
    position: i,
    top: r,
    width: n.width,
    zIndex: 1
  };
}, Wd = function(t) {
  var n = t.appendTo, r = t.children, i = t.controlElement, o = t.innerProps, u = t.menuPlacement, a = t.menuPosition, s = At(null), l = At(null), c = ve(Za(u)), d = St(c, 2), p = d[0], f = d[1], C = pt(function() {
    return {
      setPortalPlacement: f
    };
  }, []), m = ve(null), y = St(m, 2), I = y[0], x = y[1], E = Ve(function() {
    if (i) {
      var k = vd(i), G = a === "fixed" ? 0 : window.pageYOffset, T = k[p] + G;
      (T !== (I == null ? void 0 : I.offset) || k.left !== (I == null ? void 0 : I.rect.left) || k.width !== (I == null ? void 0 : I.rect.width)) && x({
        offset: T,
        rect: k
      });
    }
  }, [i, a, p, I == null ? void 0 : I.offset, I == null ? void 0 : I.rect.left, I == null ? void 0 : I.rect.width]);
  Hi(function() {
    E();
  }, [E]);
  var S = Ve(function() {
    typeof l.current == "function" && (l.current(), l.current = null), i && s.current && (l.current = hd(i, s.current, E, {
      elementResize: "ResizeObserver" in window
    }));
  }, [i, E]);
  Hi(function() {
    S();
  }, [S]);
  var P = Ve(function(k) {
    s.current = k, S();
  }, [S]);
  if (!n && a !== "fixed" || !I) return null;
  var w = Y("div", U({
    ref: P
  }, we(J(J({}, t), {}, {
    offset: I.offset,
    position: a,
    rect: I.rect
  }), "menuPortal", {
    "menu-portal": !0
  }), o), r);
  return Y(ja.Provider, {
    value: C
  }, n ? /* @__PURE__ */ _l(w, n) : w);
}, Zd = function(t) {
  var n = t.isDisabled, r = t.isRtl;
  return {
    label: "container",
    direction: r ? "rtl" : void 0,
    pointerEvents: n ? "none" : void 0,
    // cancel mouse events when disabled
    position: "relative"
  };
}, jd = function(t) {
  var n = t.children, r = t.innerProps, i = t.isDisabled, o = t.isRtl;
  return Y("div", U({}, we(t, "container", {
    "--is-disabled": i,
    "--is-rtl": o
  }), r), n);
}, Jd = function(t, n) {
  var r = t.theme.spacing, i = t.isMulti, o = t.hasValue, u = t.selectProps.controlShouldRenderValue;
  return J({
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
}, Yd = function(t) {
  var n = t.children, r = t.innerProps, i = t.isMulti, o = t.hasValue;
  return Y("div", U({}, we(t, "valueContainer", {
    "value-container": !0,
    "value-container--is-multi": i,
    "value-container--has-value": o
  }), r), n);
}, _d = function() {
  return {
    alignItems: "center",
    alignSelf: "stretch",
    display: "flex",
    flexShrink: 0
  };
}, Ud = function(t) {
  var n = t.children, r = t.innerProps;
  return Y("div", U({}, we(t, "indicatorsContainer", {
    indicators: !0
  }), r), n);
}, au, Qd = ["size"], qd = ["innerProps", "isRtl", "size"];
function $d() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var Kd = process.env.NODE_ENV === "production" ? {
  name: "8mmkcg",
  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"
} : {
  name: "tj5bde-Svg",
  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0;label:Svg;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCSSIsImZpbGUiOiJpbmRpY2F0b3JzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgSlNYLCBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3gsIGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuaW1wb3J0IHtcbiAgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWUsXG4gIENTU09iamVjdFdpdGhMYWJlbCxcbiAgR3JvdXBCYXNlLFxufSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBnZXRTdHlsZVByb3BzIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgSWNvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBTdmcgPSAoe1xuICBzaXplLFxuICAuLi5wcm9wc1xufTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzdmcnXSAmIHsgc2l6ZTogbnVtYmVyIH0pID0+IChcbiAgPHN2Z1xuICAgIGhlaWdodD17c2l6ZX1cbiAgICB3aWR0aD17c2l6ZX1cbiAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcbiAgICBjc3M9e3tcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBsaW5lSGVpZ2h0OiAxLFxuICAgICAgc3Ryb2tlOiAnY3VycmVudENvbG9yJyxcbiAgICAgIHN0cm9rZVdpZHRoOiAwLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IHR5cGUgQ3Jvc3NJY29uUHJvcHMgPSBKU1guSW50cmluc2ljRWxlbWVudHNbJ3N2ZyddICYgeyBzaXplPzogbnVtYmVyIH07XG5leHBvcnQgY29uc3QgQ3Jvc3NJY29uID0gKHByb3BzOiBDcm9zc0ljb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNMTQuMzQ4IDE0Ljg0OWMtMC40NjkgMC40NjktMS4yMjkgMC40NjktMS42OTcgMGwtMi42NTEtMy4wMzAtMi42NTEgMy4wMjljLTAuNDY5IDAuNDY5LTEuMjI5IDAuNDY5LTEuNjk3IDAtMC40NjktMC40NjktMC40NjktMS4yMjkgMC0xLjY5N2wyLjc1OC0zLjE1LTIuNzU5LTMuMTUyYy0wLjQ2OS0wLjQ2OS0wLjQ2OS0xLjIyOCAwLTEuNjk3czEuMjI4LTAuNDY5IDEuNjk3IDBsMi42NTIgMy4wMzEgMi42NTEtMy4wMzFjMC40NjktMC40NjkgMS4yMjgtMC40NjkgMS42OTcgMHMwLjQ2OSAxLjIyOSAwIDEuNjk3bC0yLjc1OCAzLjE1MiAyLjc1OCAzLjE1YzAuNDY5IDAuNDY5IDAuNDY5IDEuMjI5IDAgMS42OTh6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuZXhwb3J0IHR5cGUgRG93bkNoZXZyb25Qcm9wcyA9IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snc3ZnJ10gJiB7IHNpemU/OiBudW1iZXIgfTtcbmV4cG9ydCBjb25zdCBEb3duQ2hldnJvbiA9IChwcm9wczogRG93bkNoZXZyb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNNC41MTYgNy41NDhjMC40MzYtMC40NDYgMS4wNDMtMC40ODEgMS41NzYgMGwzLjkwOCAzLjc0NyAzLjkwOC0zLjc0N2MwLjUzMy0wLjQ4MSAxLjE0MS0wLjQ0NiAxLjU3NCAwIDAuNDM2IDAuNDQ1IDAuNDA4IDEuMTk3IDAgMS42MTUtMC40MDYgMC40MTgtNC42OTUgNC41MDItNC42OTUgNC41MDItMC4yMTcgMC4yMjMtMC41MDIgMC4zMzUtMC43ODcgMC4zMzVzLTAuNTctMC4xMTItMC43ODktMC4zMzVjMCAwLTQuMjg3LTQuMDg0LTQuNjk1LTQuNTAycy0wLjQzNi0xLjE3IDAtMS42MTV6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgQnV0dG9uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxcbiAgT3B0aW9uID0gdW5rbm93bixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4gPSBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+ID0gR3JvdXBCYXNlPE9wdGlvbj5cbj4gZXh0ZW5kcyBDb21tb25Qcm9wc0FuZENsYXNzTmFtZTxPcHRpb24sIElzTXVsdGksIEdyb3VwPiB7XG4gIC8qKiBUaGUgY2hpbGRyZW4gdG8gYmUgcmVuZGVyZWQgaW5zaWRlIHRoZSBpbmRpY2F0b3IuICovXG4gIGNoaWxkcmVuPzogUmVhY3ROb2RlO1xuICAvKiogUHJvcHMgdGhhdCB3aWxsIGJlIHBhc3NlZCBvbiB0byB0aGUgY2hpbGRyZW4uICovXG4gIGlubmVyUHJvcHM6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snZGl2J107XG4gIC8qKiBUaGUgZm9jdXNlZCBzdGF0ZSBvZiB0aGUgc2VsZWN0LiAqL1xuICBpc0ZvY3VzZWQ6IGJvb2xlYW47XG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG59XG5cbmNvbnN0IGJhc2VDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0ZvY3VzZWQsXG4gICAgdGhlbWU6IHtcbiAgICAgIHNwYWNpbmc6IHsgYmFzZVVuaXQgfSxcbiAgICAgIGNvbG9ycyxcbiAgICB9LFxuICB9OlxuICAgIHwgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuICAgIHwgQ2xlYXJJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPixcbiAgdW5zdHlsZWQ6IGJvb2xlYW5cbik6IENTU09iamVjdFdpdGhMYWJlbCA9PiAoe1xuICBsYWJlbDogJ2luZGljYXRvckNvbnRhaW5lcicsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgdHJhbnNpdGlvbjogJ2NvbG9yIDE1MG1zJyxcbiAgLi4uKHVuc3R5bGVkXG4gICAgPyB7fVxuICAgIDoge1xuICAgICAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw2MCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgICAgIHBhZGRpbmc6IGJhc2VVbml0ICogMixcbiAgICAgICAgJzpob3Zlcic6IHtcbiAgICAgICAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw4MCA6IGNvbG9ycy5uZXV0cmFsNDAsXG4gICAgICAgIH0sXG4gICAgICB9KSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZHJvcGRvd25JbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IERyb3Bkb3duSW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogRHJvcGRvd25JbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnZHJvcGRvd25JbmRpY2F0b3InLCB7XG4gICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgJ2Ryb3Bkb3duLWluZGljYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8RG93bkNoZXZyb24gLz59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIENsZWFySW5kaWNhdG9yUHJvcHM8XG4gIE9wdGlvbiA9IHVua25vd24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuID0gYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPiA9IEdyb3VwQmFzZTxPcHRpb24+XG4+IGV4dGVuZHMgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWU8T3B0aW9uLCBJc011bHRpLCBHcm91cD4ge1xuICAvKiogVGhlIGNoaWxkcmVuIHRvIGJlIHJlbmRlcmVkIGluc2lkZSB0aGUgaW5kaWNhdG9yLiAqL1xuICBjaGlsZHJlbj86IFJlYWN0Tm9kZTtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgY2xlYXJJbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IENsZWFySW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogQ2xlYXJJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnY2xlYXJJbmRpY2F0b3InLCB7XG4gICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgJ2NsZWFyLWluZGljYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8Q3Jvc3NJY29uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTZXBhcmF0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgaW50ZXJmYWNlIEluZGljYXRvclNlcGFyYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpbm5lclByb3BzPzogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzcGFuJ107XG59XG5cbmV4cG9ydCBjb25zdCBpbmRpY2F0b3JTZXBhcmF0b3JDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0Rpc2FibGVkLFxuICAgIHRoZW1lOiB7XG4gICAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gICAgICBjb2xvcnMsXG4gICAgfSxcbiAgfTogSW5kaWNhdG9yU2VwYXJhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4sXG4gIHVuc3R5bGVkOiBib29sZWFuXG4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdpbmRpY2F0b3JTZXBhcmF0b3InLFxuICBhbGlnblNlbGY6ICdzdHJldGNoJyxcbiAgd2lkdGg6IDEsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBpc0Rpc2FibGVkID8gY29sb3JzLm5ldXRyYWwxMCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogYmFzZVVuaXQgKiAyLFxuICAgICAgICBtYXJnaW5Ub3A6IGJhc2VVbml0ICogMixcbiAgICAgIH0pLFxufSk7XG5cbmV4cG9ydCBjb25zdCBJbmRpY2F0b3JTZXBhcmF0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHByb3BzOiBJbmRpY2F0b3JTZXBhcmF0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgaW5uZXJQcm9wcyB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPHNwYW5cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgey4uLmdldFN0eWxlUHJvcHMocHJvcHMsICdpbmRpY2F0b3JTZXBhcmF0b3InLCB7XG4gICAgICAgICdpbmRpY2F0b3Itc2VwYXJhdG9yJzogdHJ1ZSxcbiAgICAgIH0pfVxuICAgIC8+XG4gICk7XG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIExvYWRpbmdcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBsb2FkaW5nRG90QW5pbWF0aW9ucyA9IGtleWZyYW1lc2BcbiAgMCUsIDgwJSwgMTAwJSB7IG9wYWNpdHk6IDA7IH1cbiAgNDAlIHsgb3BhY2l0eTogMTsgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGxvYWRpbmdJbmRpY2F0b3JDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0ZvY3VzZWQsXG4gICAgc2l6ZSxcbiAgICB0aGVtZToge1xuICAgICAgY29sb3JzLFxuICAgICAgc3BhY2luZzogeyBiYXNlVW5pdCB9LFxuICAgIH0sXG4gIH06IExvYWRpbmdJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPixcbiAgdW5zdHlsZWQ6IGJvb2xlYW5cbik6IENTU09iamVjdFdpdGhMYWJlbCA9PiAoe1xuICBsYWJlbDogJ2xvYWRpbmdJbmRpY2F0b3InLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHRyYW5zaXRpb246ICdjb2xvciAxNTBtcycsXG4gIGFsaWduU2VsZjogJ2NlbnRlcicsXG4gIGZvbnRTaXplOiBzaXplLFxuICBsaW5lSGVpZ2h0OiAxLFxuICBtYXJnaW5SaWdodDogc2l6ZSxcbiAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgICAgICBwYWRkaW5nOiBiYXNlVW5pdCAqIDIsXG4gICAgICB9KSxcbn0pO1xuXG5pbnRlcmZhY2UgTG9hZGluZ0RvdFByb3BzIHtcbiAgZGVsYXk6IG51bWJlcjtcbiAgb2Zmc2V0OiBib29sZWFuO1xufVxuY29uc3QgTG9hZGluZ0RvdCA9ICh7IGRlbGF5LCBvZmZzZXQgfTogTG9hZGluZ0RvdFByb3BzKSA9PiAoXG4gIDxzcGFuXG4gICAgY3NzPXt7XG4gICAgICBhbmltYXRpb246IGAke2xvYWRpbmdEb3RBbmltYXRpb25zfSAxcyBlYXNlLWluLW91dCAke2RlbGF5fW1zIGluZmluaXRlO2AsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdjdXJyZW50Q29sb3InLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnMWVtJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgbWFyZ2luTGVmdDogb2Zmc2V0ID8gJzFlbScgOiB1bmRlZmluZWQsXG4gICAgICBoZWlnaHQ6ICcxZW0nLFxuICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICB3aWR0aDogJzFlbScsXG4gICAgfX1cbiAgLz5cbik7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGluZ0luZGljYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpc0Rpc2FibGVkOiBib29sZWFuO1xuICAvKiogU2V0IHNpemUgb2YgdGhlIGNvbnRhaW5lci4gKi9cbiAgc2l6ZTogbnVtYmVyO1xufVxuZXhwb3J0IGNvbnN0IExvYWRpbmdJbmRpY2F0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oe1xuICBpbm5lclByb3BzLFxuICBpc1J0bCxcbiAgc2l6ZSA9IDQsXG4gIC4uLnJlc3RQcm9wc1xufTogTG9hZGluZ0luZGljYXRvclByb3BzPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgey4uLmdldFN0eWxlUHJvcHMoXG4gICAgICAgIHsgLi4ucmVzdFByb3BzLCBpbm5lclByb3BzLCBpc1J0bCwgc2l6ZSB9LFxuICAgICAgICAnbG9hZGluZ0luZGljYXRvcicsXG4gICAgICAgIHtcbiAgICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICAgJ2xvYWRpbmctaW5kaWNhdG9yJzogdHJ1ZSxcbiAgICAgICAgfVxuICAgICAgKX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXswfSBvZmZzZXQ9e2lzUnRsfSAvPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezE2MH0gb2Zmc2V0IC8+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MzIwfSBvZmZzZXQ9eyFpc1J0bH0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXX0= */",
  toString: $d
}, Ya = function(t) {
  var n = t.size, r = bt(t, Qd);
  return Y("svg", U({
    height: n,
    width: n,
    viewBox: "0 0 20 20",
    "aria-hidden": "true",
    focusable: "false",
    css: Kd
  }, r));
}, co = function(t) {
  return Y(Ya, U({
    size: 20
  }, t), Y("path", {
    d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
  }));
}, _a = function(t) {
  return Y(Ya, U({
    size: 20
  }, t), Y("path", {
    d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
  }));
}, Ua = function(t, n) {
  var r = t.isFocused, i = t.theme, o = i.spacing.baseUnit, u = i.colors;
  return J({
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
}, ef = Ua, tf = function(t) {
  var n = t.children, r = t.innerProps;
  return Y("div", U({}, we(t, "dropdownIndicator", {
    indicator: !0,
    "dropdown-indicator": !0
  }), r), n || Y(_a, null));
}, nf = Ua, rf = function(t) {
  var n = t.children, r = t.innerProps;
  return Y("div", U({}, we(t, "clearIndicator", {
    indicator: !0,
    "clear-indicator": !0
  }), r), n || Y(co, null));
}, of = function(t, n) {
  var r = t.isDisabled, i = t.theme, o = i.spacing.baseUnit, u = i.colors;
  return J({
    label: "indicatorSeparator",
    alignSelf: "stretch",
    width: 1
  }, n ? {} : {
    backgroundColor: r ? u.neutral10 : u.neutral20,
    marginBottom: o * 2,
    marginTop: o * 2
  });
}, uf = function(t) {
  var n = t.innerProps;
  return Y("span", U({}, n, we(t, "indicatorSeparator", {
    "indicator-separator": !0
  })));
}, af = Yl(au || (au = td([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))), sf = function(t, n) {
  var r = t.isFocused, i = t.size, o = t.theme, u = o.colors, a = o.spacing.baseUnit;
  return J({
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
}, oi = function(t) {
  var n = t.delay, r = t.offset;
  return Y("span", {
    css: /* @__PURE__ */ ba({
      animation: "".concat(af, " 1s ease-in-out ").concat(n, "ms infinite;"),
      backgroundColor: "currentColor",
      borderRadius: "1em",
      display: "inline-block",
      marginLeft: r ? "1em" : void 0,
      height: "1em",
      verticalAlign: "top",
      width: "1em"
    }, process.env.NODE_ENV === "production" ? "" : ";label:LoadingDot;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1RSSIsImZpbGUiOiJpbmRpY2F0b3JzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgSlNYLCBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3gsIGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuaW1wb3J0IHtcbiAgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWUsXG4gIENTU09iamVjdFdpdGhMYWJlbCxcbiAgR3JvdXBCYXNlLFxufSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBnZXRTdHlsZVByb3BzIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgSWNvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBTdmcgPSAoe1xuICBzaXplLFxuICAuLi5wcm9wc1xufTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzdmcnXSAmIHsgc2l6ZTogbnVtYmVyIH0pID0+IChcbiAgPHN2Z1xuICAgIGhlaWdodD17c2l6ZX1cbiAgICB3aWR0aD17c2l6ZX1cbiAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcbiAgICBjc3M9e3tcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBsaW5lSGVpZ2h0OiAxLFxuICAgICAgc3Ryb2tlOiAnY3VycmVudENvbG9yJyxcbiAgICAgIHN0cm9rZVdpZHRoOiAwLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IHR5cGUgQ3Jvc3NJY29uUHJvcHMgPSBKU1guSW50cmluc2ljRWxlbWVudHNbJ3N2ZyddICYgeyBzaXplPzogbnVtYmVyIH07XG5leHBvcnQgY29uc3QgQ3Jvc3NJY29uID0gKHByb3BzOiBDcm9zc0ljb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNMTQuMzQ4IDE0Ljg0OWMtMC40NjkgMC40NjktMS4yMjkgMC40NjktMS42OTcgMGwtMi42NTEtMy4wMzAtMi42NTEgMy4wMjljLTAuNDY5IDAuNDY5LTEuMjI5IDAuNDY5LTEuNjk3IDAtMC40NjktMC40NjktMC40NjktMS4yMjkgMC0xLjY5N2wyLjc1OC0zLjE1LTIuNzU5LTMuMTUyYy0wLjQ2OS0wLjQ2OS0wLjQ2OS0xLjIyOCAwLTEuNjk3czEuMjI4LTAuNDY5IDEuNjk3IDBsMi42NTIgMy4wMzEgMi42NTEtMy4wMzFjMC40NjktMC40NjkgMS4yMjgtMC40NjkgMS42OTcgMHMwLjQ2OSAxLjIyOSAwIDEuNjk3bC0yLjc1OCAzLjE1MiAyLjc1OCAzLjE1YzAuNDY5IDAuNDY5IDAuNDY5IDEuMjI5IDAgMS42OTh6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuZXhwb3J0IHR5cGUgRG93bkNoZXZyb25Qcm9wcyA9IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snc3ZnJ10gJiB7IHNpemU/OiBudW1iZXIgfTtcbmV4cG9ydCBjb25zdCBEb3duQ2hldnJvbiA9IChwcm9wczogRG93bkNoZXZyb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNNC41MTYgNy41NDhjMC40MzYtMC40NDYgMS4wNDMtMC40ODEgMS41NzYgMGwzLjkwOCAzLjc0NyAzLjkwOC0zLjc0N2MwLjUzMy0wLjQ4MSAxLjE0MS0wLjQ0NiAxLjU3NCAwIDAuNDM2IDAuNDQ1IDAuNDA4IDEuMTk3IDAgMS42MTUtMC40MDYgMC40MTgtNC42OTUgNC41MDItNC42OTUgNC41MDItMC4yMTcgMC4yMjMtMC41MDIgMC4zMzUtMC43ODcgMC4zMzVzLTAuNTctMC4xMTItMC43ODktMC4zMzVjMCAwLTQuMjg3LTQuMDg0LTQuNjk1LTQuNTAycy0wLjQzNi0xLjE3IDAtMS42MTV6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgQnV0dG9uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxcbiAgT3B0aW9uID0gdW5rbm93bixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4gPSBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+ID0gR3JvdXBCYXNlPE9wdGlvbj5cbj4gZXh0ZW5kcyBDb21tb25Qcm9wc0FuZENsYXNzTmFtZTxPcHRpb24sIElzTXVsdGksIEdyb3VwPiB7XG4gIC8qKiBUaGUgY2hpbGRyZW4gdG8gYmUgcmVuZGVyZWQgaW5zaWRlIHRoZSBpbmRpY2F0b3IuICovXG4gIGNoaWxkcmVuPzogUmVhY3ROb2RlO1xuICAvKiogUHJvcHMgdGhhdCB3aWxsIGJlIHBhc3NlZCBvbiB0byB0aGUgY2hpbGRyZW4uICovXG4gIGlubmVyUHJvcHM6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snZGl2J107XG4gIC8qKiBUaGUgZm9jdXNlZCBzdGF0ZSBvZiB0aGUgc2VsZWN0LiAqL1xuICBpc0ZvY3VzZWQ6IGJvb2xlYW47XG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG59XG5cbmNvbnN0IGJhc2VDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0ZvY3VzZWQsXG4gICAgdGhlbWU6IHtcbiAgICAgIHNwYWNpbmc6IHsgYmFzZVVuaXQgfSxcbiAgICAgIGNvbG9ycyxcbiAgICB9LFxuICB9OlxuICAgIHwgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuICAgIHwgQ2xlYXJJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPixcbiAgdW5zdHlsZWQ6IGJvb2xlYW5cbik6IENTU09iamVjdFdpdGhMYWJlbCA9PiAoe1xuICBsYWJlbDogJ2luZGljYXRvckNvbnRhaW5lcicsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgdHJhbnNpdGlvbjogJ2NvbG9yIDE1MG1zJyxcbiAgLi4uKHVuc3R5bGVkXG4gICAgPyB7fVxuICAgIDoge1xuICAgICAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw2MCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgICAgIHBhZGRpbmc6IGJhc2VVbml0ICogMixcbiAgICAgICAgJzpob3Zlcic6IHtcbiAgICAgICAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw4MCA6IGNvbG9ycy5uZXV0cmFsNDAsXG4gICAgICAgIH0sXG4gICAgICB9KSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZHJvcGRvd25JbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IERyb3Bkb3duSW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogRHJvcGRvd25JbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnZHJvcGRvd25JbmRpY2F0b3InLCB7XG4gICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgJ2Ryb3Bkb3duLWluZGljYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8RG93bkNoZXZyb24gLz59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIENsZWFySW5kaWNhdG9yUHJvcHM8XG4gIE9wdGlvbiA9IHVua25vd24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuID0gYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPiA9IEdyb3VwQmFzZTxPcHRpb24+XG4+IGV4dGVuZHMgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWU8T3B0aW9uLCBJc011bHRpLCBHcm91cD4ge1xuICAvKiogVGhlIGNoaWxkcmVuIHRvIGJlIHJlbmRlcmVkIGluc2lkZSB0aGUgaW5kaWNhdG9yLiAqL1xuICBjaGlsZHJlbj86IFJlYWN0Tm9kZTtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgY2xlYXJJbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IENsZWFySW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogQ2xlYXJJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnY2xlYXJJbmRpY2F0b3InLCB7XG4gICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgJ2NsZWFyLWluZGljYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8Q3Jvc3NJY29uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTZXBhcmF0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgaW50ZXJmYWNlIEluZGljYXRvclNlcGFyYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpbm5lclByb3BzPzogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzcGFuJ107XG59XG5cbmV4cG9ydCBjb25zdCBpbmRpY2F0b3JTZXBhcmF0b3JDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0Rpc2FibGVkLFxuICAgIHRoZW1lOiB7XG4gICAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gICAgICBjb2xvcnMsXG4gICAgfSxcbiAgfTogSW5kaWNhdG9yU2VwYXJhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4sXG4gIHVuc3R5bGVkOiBib29sZWFuXG4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdpbmRpY2F0b3JTZXBhcmF0b3InLFxuICBhbGlnblNlbGY6ICdzdHJldGNoJyxcbiAgd2lkdGg6IDEsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBpc0Rpc2FibGVkID8gY29sb3JzLm5ldXRyYWwxMCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogYmFzZVVuaXQgKiAyLFxuICAgICAgICBtYXJnaW5Ub3A6IGJhc2VVbml0ICogMixcbiAgICAgIH0pLFxufSk7XG5cbmV4cG9ydCBjb25zdCBJbmRpY2F0b3JTZXBhcmF0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHByb3BzOiBJbmRpY2F0b3JTZXBhcmF0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgaW5uZXJQcm9wcyB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPHNwYW5cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgey4uLmdldFN0eWxlUHJvcHMocHJvcHMsICdpbmRpY2F0b3JTZXBhcmF0b3InLCB7XG4gICAgICAgICdpbmRpY2F0b3Itc2VwYXJhdG9yJzogdHJ1ZSxcbiAgICAgIH0pfVxuICAgIC8+XG4gICk7XG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIExvYWRpbmdcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBsb2FkaW5nRG90QW5pbWF0aW9ucyA9IGtleWZyYW1lc2BcbiAgMCUsIDgwJSwgMTAwJSB7IG9wYWNpdHk6IDA7IH1cbiAgNDAlIHsgb3BhY2l0eTogMTsgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGxvYWRpbmdJbmRpY2F0b3JDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0ZvY3VzZWQsXG4gICAgc2l6ZSxcbiAgICB0aGVtZToge1xuICAgICAgY29sb3JzLFxuICAgICAgc3BhY2luZzogeyBiYXNlVW5pdCB9LFxuICAgIH0sXG4gIH06IExvYWRpbmdJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPixcbiAgdW5zdHlsZWQ6IGJvb2xlYW5cbik6IENTU09iamVjdFdpdGhMYWJlbCA9PiAoe1xuICBsYWJlbDogJ2xvYWRpbmdJbmRpY2F0b3InLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHRyYW5zaXRpb246ICdjb2xvciAxNTBtcycsXG4gIGFsaWduU2VsZjogJ2NlbnRlcicsXG4gIGZvbnRTaXplOiBzaXplLFxuICBsaW5lSGVpZ2h0OiAxLFxuICBtYXJnaW5SaWdodDogc2l6ZSxcbiAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgICAgICBwYWRkaW5nOiBiYXNlVW5pdCAqIDIsXG4gICAgICB9KSxcbn0pO1xuXG5pbnRlcmZhY2UgTG9hZGluZ0RvdFByb3BzIHtcbiAgZGVsYXk6IG51bWJlcjtcbiAgb2Zmc2V0OiBib29sZWFuO1xufVxuY29uc3QgTG9hZGluZ0RvdCA9ICh7IGRlbGF5LCBvZmZzZXQgfTogTG9hZGluZ0RvdFByb3BzKSA9PiAoXG4gIDxzcGFuXG4gICAgY3NzPXt7XG4gICAgICBhbmltYXRpb246IGAke2xvYWRpbmdEb3RBbmltYXRpb25zfSAxcyBlYXNlLWluLW91dCAke2RlbGF5fW1zIGluZmluaXRlO2AsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdjdXJyZW50Q29sb3InLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnMWVtJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgbWFyZ2luTGVmdDogb2Zmc2V0ID8gJzFlbScgOiB1bmRlZmluZWQsXG4gICAgICBoZWlnaHQ6ICcxZW0nLFxuICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICB3aWR0aDogJzFlbScsXG4gICAgfX1cbiAgLz5cbik7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGluZ0luZGljYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpc0Rpc2FibGVkOiBib29sZWFuO1xuICAvKiogU2V0IHNpemUgb2YgdGhlIGNvbnRhaW5lci4gKi9cbiAgc2l6ZTogbnVtYmVyO1xufVxuZXhwb3J0IGNvbnN0IExvYWRpbmdJbmRpY2F0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oe1xuICBpbm5lclByb3BzLFxuICBpc1J0bCxcbiAgc2l6ZSA9IDQsXG4gIC4uLnJlc3RQcm9wc1xufTogTG9hZGluZ0luZGljYXRvclByb3BzPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgey4uLmdldFN0eWxlUHJvcHMoXG4gICAgICAgIHsgLi4ucmVzdFByb3BzLCBpbm5lclByb3BzLCBpc1J0bCwgc2l6ZSB9LFxuICAgICAgICAnbG9hZGluZ0luZGljYXRvcicsXG4gICAgICAgIHtcbiAgICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICAgJ2xvYWRpbmctaW5kaWNhdG9yJzogdHJ1ZSxcbiAgICAgICAgfVxuICAgICAgKX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXswfSBvZmZzZXQ9e2lzUnRsfSAvPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezE2MH0gb2Zmc2V0IC8+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MzIwfSBvZmZzZXQ9eyFpc1J0bH0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXX0= */")
  });
}, lf = function(t) {
  var n = t.innerProps, r = t.isRtl, i = t.size, o = i === void 0 ? 4 : i, u = bt(t, qd);
  return Y("div", U({}, we(J(J({}, u), {}, {
    innerProps: n,
    isRtl: r,
    size: o
  }), "loadingIndicator", {
    indicator: !0,
    "loading-indicator": !0
  }), n), Y(oi, {
    delay: 0,
    offset: r
  }), Y(oi, {
    delay: 160,
    offset: !0
  }), Y(oi, {
    delay: 320,
    offset: !r
  }));
}, cf = function(t, n) {
  var r = t.isDisabled, i = t.isFocused, o = t.theme, u = o.colors, a = o.borderRadius, s = o.spacing;
  return J({
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
}, df = function(t) {
  var n = t.children, r = t.isDisabled, i = t.isFocused, o = t.innerRef, u = t.innerProps, a = t.menuIsOpen;
  return Y("div", U({
    ref: o
  }, we(t, "control", {
    control: !0,
    "control--is-disabled": r,
    "control--is-focused": i,
    "control--menu-is-open": a
  }), u, {
    "aria-disabled": r || void 0
  }), n);
}, ff = df, pf = ["data"], hf = function(t, n) {
  var r = t.theme.spacing;
  return n ? {} : {
    paddingBottom: r.baseUnit * 2,
    paddingTop: r.baseUnit * 2
  };
}, gf = function(t) {
  var n = t.children, r = t.cx, i = t.getStyles, o = t.getClassNames, u = t.Heading, a = t.headingProps, s = t.innerProps, l = t.label, c = t.theme, d = t.selectProps;
  return Y("div", U({}, we(t, "group", {
    group: !0
  }), s), Y(u, U({}, a, {
    selectProps: d,
    theme: c,
    getStyles: i,
    getClassNames: o,
    cx: r
  }), l), Y("div", null, n));
}, mf = function(t, n) {
  var r = t.theme, i = r.colors, o = r.spacing;
  return J({
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
}, bf = function(t) {
  var n = za(t);
  n.data;
  var r = bt(n, pf);
  return Y("div", U({}, we(t, "groupHeading", {
    "group-heading": !0
  }), r));
}, yf = gf, If = ["innerRef", "isDisabled", "isHidden", "inputClassName"], Cf = function(t, n) {
  var r = t.isDisabled, i = t.value, o = t.theme, u = o.spacing, a = o.colors;
  return J(J({
    visibility: r ? "hidden" : "visible",
    // force css to recompute when value change due to @emotion bug.
    // We can remove it whenever the bug is fixed.
    transform: i ? "translateZ(0)" : ""
  }, vf), n ? {} : {
    margin: u.baseUnit / 2,
    paddingBottom: u.baseUnit / 2,
    paddingTop: u.baseUnit / 2,
    color: a.neutral80
  });
}, Qa = {
  gridArea: "1 / 2",
  font: "inherit",
  minWidth: "2px",
  border: 0,
  margin: 0,
  outline: 0,
  padding: 0
}, vf = {
  flex: "1 1 auto",
  display: "inline-grid",
  gridArea: "1 / 1 / 2 / 3",
  gridTemplateColumns: "0 min-content",
  "&:after": J({
    content: 'attr(data-value) " "',
    visibility: "hidden",
    whiteSpace: "pre"
  }, Qa)
}, xf = function(t) {
  return J({
    label: "input",
    color: "inherit",
    background: 0,
    opacity: t ? 0 : 1,
    width: "100%"
  }, Qa);
}, Af = function(t) {
  var n = t.cx, r = t.value, i = za(t), o = i.innerRef, u = i.isDisabled, a = i.isHidden, s = i.inputClassName, l = bt(i, If);
  return Y("div", U({}, we(t, "input", {
    "input-container": !0
  }), {
    "data-value": r || ""
  }), Y("input", U({
    className: n({
      input: !0
    }, s),
    ref: o,
    style: xf(a),
    disabled: u
  }, l)));
}, Sf = Af, wf = function(t, n) {
  var r = t.theme, i = r.spacing, o = r.borderRadius, u = r.colors;
  return J({
    label: "multiValue",
    display: "flex",
    minWidth: 0
  }, n ? {} : {
    backgroundColor: u.neutral10,
    borderRadius: o / 2,
    margin: i.baseUnit / 2
  });
}, Ef = function(t, n) {
  var r = t.theme, i = r.borderRadius, o = r.colors, u = t.cropWithEllipsis;
  return J({
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
}, Ff = function(t, n) {
  var r = t.theme, i = r.spacing, o = r.borderRadius, u = r.colors, a = t.isFocused;
  return J({
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
}, qa = function(t) {
  var n = t.children, r = t.innerProps;
  return Y("div", r, n);
}, Pf = qa, Gf = qa;
function Rf(e) {
  var t = e.children, n = e.innerProps;
  return Y("div", U({
    role: "button"
  }, n), t || Y(co, {
    size: 14
  }));
}
var kf = function(t) {
  var n = t.children, r = t.components, i = t.data, o = t.innerProps, u = t.isDisabled, a = t.removeProps, s = t.selectProps, l = r.Container, c = r.Label, d = r.Remove;
  return Y(l, {
    data: i,
    innerProps: J(J({}, we(t, "multiValue", {
      "multi-value": !0,
      "multi-value--is-disabled": u
    })), o),
    selectProps: s
  }, Y(c, {
    data: i,
    innerProps: J({}, we(t, "multiValueLabel", {
      "multi-value__label": !0
    })),
    selectProps: s
  }, n), Y(d, {
    data: i,
    innerProps: J(J({}, we(t, "multiValueRemove", {
      "multi-value__remove": !0
    })), {}, {
      "aria-label": "Remove ".concat(n || "option")
    }, a),
    selectProps: s
  }));
}, Bf = kf, Of = function(t, n) {
  var r = t.isDisabled, i = t.isFocused, o = t.isSelected, u = t.theme, a = u.spacing, s = u.colors;
  return J({
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
}, Tf = function(t) {
  var n = t.children, r = t.isDisabled, i = t.isFocused, o = t.isSelected, u = t.innerRef, a = t.innerProps;
  return Y("div", U({}, we(t, "option", {
    option: !0,
    "option--is-disabled": r,
    "option--is-focused": i,
    "option--is-selected": o
  }), {
    ref: u,
    "aria-disabled": r
  }, a), n);
}, Vf = Tf, Df = function(t, n) {
  var r = t.theme, i = r.spacing, o = r.colors;
  return J({
    label: "placeholder",
    gridArea: "1 / 1 / 2 / 3"
  }, n ? {} : {
    color: o.neutral50,
    marginLeft: i.baseUnit / 2,
    marginRight: i.baseUnit / 2
  });
}, Nf = function(t) {
  var n = t.children, r = t.innerProps;
  return Y("div", U({}, we(t, "placeholder", {
    placeholder: !0
  }), r), n);
}, Mf = Nf, Lf = function(t, n) {
  var r = t.isDisabled, i = t.theme, o = i.spacing, u = i.colors;
  return J({
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
}, Xf = function(t) {
  var n = t.children, r = t.isDisabled, i = t.innerProps;
  return Y("div", U({}, we(t, "singleValue", {
    "single-value": !0,
    "single-value--is-disabled": r
  }), i), n);
}, zf = Xf, tr = {
  ClearIndicator: rf,
  Control: ff,
  DropdownIndicator: tf,
  DownChevron: _a,
  CrossIcon: co,
  Group: yf,
  GroupHeading: bf,
  IndicatorsContainer: Ud,
  IndicatorSeparator: uf,
  Input: Sf,
  LoadingIndicator: lf,
  Menu: Vd,
  MenuList: Nd,
  MenuPortal: Wd,
  LoadingMessage: zd,
  NoOptionsMessage: Xd,
  MultiValue: Bf,
  MultiValueContainer: Pf,
  MultiValueLabel: Gf,
  MultiValueRemove: Rf,
  Option: Vf,
  Placeholder: Mf,
  SelectContainer: jd,
  SingleValue: zf,
  ValueContainer: Yd
}, Hf = function(t) {
  return J(J({}, tr), t.components);
}, su = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function Wf(e, t) {
  return !!(e === t || su(e) && su(t));
}
function Zf(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (!Wf(e[n], t[n]))
      return !1;
  return !0;
}
function jf(e, t) {
  t === void 0 && (t = Zf);
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
function Jf() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var Yf = process.env.NODE_ENV === "production" ? {
  name: "7pg0cj-a11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"
} : {
  name: "1f43avz-a11yText-A11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap;label:A11yText;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkExMXlUZXh0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPSSIsImZpbGUiOiJBMTF5VGV4dC50c3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IEpTWCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGpzeCB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuLy8gQXNzaXN0aXZlIHRleHQgdG8gZGVzY3JpYmUgdmlzdWFsIGVsZW1lbnRzLiBIaWRkZW4gZm9yIHNpZ2h0ZWQgdXNlcnMuXG5jb25zdCBBMTF5VGV4dCA9IChwcm9wczogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzcGFuJ10pID0+IChcbiAgPHNwYW5cbiAgICBjc3M9e3tcbiAgICAgIGxhYmVsOiAnYTExeVRleHQnLFxuICAgICAgekluZGV4OiA5OTk5LFxuICAgICAgYm9yZGVyOiAwLFxuICAgICAgY2xpcDogJ3JlY3QoMXB4LCAxcHgsIDFweCwgMXB4KScsXG4gICAgICBoZWlnaHQ6IDEsXG4gICAgICB3aWR0aDogMSxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgcGFkZGluZzogMCxcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQTExeVRleHQ7XG4iXX0= */",
  toString: Jf
}, _f = function(t) {
  return Y("span", U({
    css: Yf
  }, t));
}, lu = _f, Uf = {
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
    var n = t.context, r = t.focused, i = t.options, o = t.label, u = o === void 0 ? "" : o, a = t.selectValue, s = t.isDisabled, l = t.isSelected, c = t.isAppleDevice, d = function(m, y) {
      return m && m.length ? "".concat(m.indexOf(y) + 1, " of ").concat(m.length) : "";
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
}, Qf = function(t) {
  var n = t.ariaSelection, r = t.focusedOption, i = t.focusedValue, o = t.focusableOptions, u = t.isFocused, a = t.selectValue, s = t.selectProps, l = t.id, c = t.isAppleDevice, d = s.ariaLiveMessages, p = s.getOptionLabel, f = s.inputValue, C = s.isMulti, m = s.isOptionDisabled, y = s.isSearchable, I = s.menuIsOpen, x = s.options, E = s.screenReaderStatus, S = s.tabSelectsValue, P = s.isLoading, w = s["aria-label"], k = s["aria-live"], G = pt(function() {
    return J(J({}, Uf), d || {});
  }, [d]), T = pt(function() {
    var M = "";
    if (n && G.onChange) {
      var _ = n.option, Q = n.options, se = n.removedValue, me = n.removedValues, b = n.value, Ce = function(N) {
        return Array.isArray(N) ? null : N;
      }, ae = se || _ || Ce(b), g = ae ? p(ae) : "", pe = Q || me || void 0, te = pe ? pe.map(p) : [], de = J({
        // multiSelected items are usually items that have already been selected
        // or set by the user as a default value so we assume they are not disabled
        isDisabled: ae && m(ae, a),
        label: g,
        labels: te
      }, n);
      M = G.onChange(de);
    }
    return M;
  }, [n, G, m, a, p]), H = pt(function() {
    var M = "", _ = r || i, Q = !!(r && a && a.includes(r));
    if (_ && G.onFocus) {
      var se = {
        focused: _,
        label: p(_),
        isDisabled: m(_, a),
        isSelected: Q,
        options: o,
        context: _ === r ? "menu" : "value",
        selectValue: a,
        isAppleDevice: c
      };
      M = G.onFocus(se);
    }
    return M;
  }, [r, i, p, m, G, o, a, c]), V = pt(function() {
    var M = "";
    if (I && x.length && !P && G.onFilter) {
      var _ = E({
        count: o.length
      });
      M = G.onFilter({
        inputValue: f,
        resultsMessage: _
      });
    }
    return M;
  }, [o, f, I, G, x, E, P]), B = (n == null ? void 0 : n.action) === "initial-input-focus", X = pt(function() {
    var M = "";
    if (G.guidance) {
      var _ = i ? "value" : I ? "menu" : "input";
      M = G.guidance({
        "aria-label": w,
        context: _,
        isDisabled: r && m(r, a),
        isMulti: C,
        isSearchable: y,
        tabSelectsValue: S,
        isInitialFocus: B
      });
    }
    return M;
  }, [w, r, i, C, m, y, I, G, a, S, B]), L = Y(Si, null, Y("span", {
    id: "aria-selection"
  }, T), Y("span", {
    id: "aria-focused"
  }, H), Y("span", {
    id: "aria-results"
  }, V), Y("span", {
    id: "aria-guidance"
  }, X));
  return Y(Si, null, Y(lu, {
    id: l
  }, B && L), Y(lu, {
    "aria-live": k,
    "aria-atomic": "false",
    "aria-relevant": "additions text",
    role: "log"
  }, u && !B && L));
}, qf = Qf, Wi = [{
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
}], $f = new RegExp("[" + Wi.map(function(e) {
  return e.letters;
}).join("") + "]", "g"), $a = {};
for (var ui = 0; ui < Wi.length; ui++)
  for (var ai = Wi[ui], si = 0; si < ai.letters.length; si++)
    $a[ai.letters[si]] = ai.base;
var Ka = function(t) {
  return t.replace($f, function(n) {
    return $a[n];
  });
}, Kf = jf(Ka), cu = function(t) {
  return t.replace(/^\s+|\s+$/g, "");
}, ep = function(t) {
  return "".concat(t.label, " ").concat(t.value);
}, tp = function(t) {
  return function(n, r) {
    if (n.data.__isNew__) return !0;
    var i = J({
      ignoreCase: !0,
      ignoreAccents: !0,
      stringify: ep,
      trim: !0,
      matchFrom: "any"
    }, t), o = i.ignoreCase, u = i.ignoreAccents, a = i.stringify, s = i.trim, l = i.matchFrom, c = s ? cu(r) : r, d = s ? cu(a(n)) : a(n);
    return o && (c = c.toLowerCase(), d = d.toLowerCase()), u && (c = Kf(c), d = Ka(d)), l === "start" ? d.substr(0, c.length) === c : d.indexOf(c) > -1;
  };
}, np = ["innerRef"];
function rp(e) {
  var t = e.innerRef, n = bt(e, np), r = Fd(n, "onExited", "in", "enter", "exit", "appear");
  return Y("input", U({
    ref: t
  }, r, {
    css: /* @__PURE__ */ ba({
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
var ip = function(t) {
  t.cancelable && t.preventDefault(), t.stopPropagation();
};
function op(e) {
  var t = e.isEnabled, n = e.onBottomArrive, r = e.onBottomLeave, i = e.onTopArrive, o = e.onTopLeave, u = At(!1), a = At(!1), s = At(0), l = At(null), c = Ve(function(y, I) {
    if (l.current !== null) {
      var x = l.current, E = x.scrollTop, S = x.scrollHeight, P = x.clientHeight, w = l.current, k = I > 0, G = S - P - E, T = !1;
      G > I && u.current && (r && r(y), u.current = !1), k && a.current && (o && o(y), a.current = !1), k && I > G ? (n && !u.current && n(y), w.scrollTop = S, T = !0, u.current = !0) : !k && -I > E && (i && !a.current && i(y), w.scrollTop = 0, T = !0, a.current = !0), T && ip(y);
    }
  }, [n, r, i, o]), d = Ve(function(y) {
    c(y, y.deltaY);
  }, [c]), p = Ve(function(y) {
    s.current = y.changedTouches[0].clientY;
  }, []), f = Ve(function(y) {
    var I = s.current - y.changedTouches[0].clientY;
    c(y, I);
  }, [c]), C = Ve(function(y) {
    if (y) {
      var I = Sd ? {
        passive: !1
      } : !1;
      y.addEventListener("wheel", d, I), y.addEventListener("touchstart", p, I), y.addEventListener("touchmove", f, I);
    }
  }, [f, p, d]), m = Ve(function(y) {
    y && (y.removeEventListener("wheel", d, !1), y.removeEventListener("touchstart", p, !1), y.removeEventListener("touchmove", f, !1));
  }, [f, p, d]);
  return Yt(function() {
    if (t) {
      var y = l.current;
      return C(y), function() {
        m(y);
      };
    }
  }, [t, C, m]), function(y) {
    l.current = y;
  };
}
var du = ["boxSizing", "height", "overflow", "paddingRight", "position"], fu = {
  boxSizing: "border-box",
  // account for possible declaration `width: 100%;` on body
  overflow: "hidden",
  position: "relative",
  height: "100%"
};
function pu(e) {
  e.cancelable && e.preventDefault();
}
function hu(e) {
  e.stopPropagation();
}
function gu() {
  var e = this.scrollTop, t = this.scrollHeight, n = e + this.offsetHeight;
  e === 0 ? this.scrollTop = 1 : n === t && (this.scrollTop = e - 1);
}
function mu() {
  return "ontouchstart" in window || navigator.maxTouchPoints;
}
var bu = !!(typeof window < "u" && window.document && window.document.createElement), Vn = 0, sn = {
  capture: !1,
  passive: !1
};
function up(e) {
  var t = e.isEnabled, n = e.accountForScrollbars, r = n === void 0 ? !0 : n, i = At({}), o = At(null), u = Ve(function(s) {
    if (bu) {
      var l = document.body, c = l && l.style;
      if (r && du.forEach(function(C) {
        var m = c && c[C];
        i.current[C] = m;
      }), r && Vn < 1) {
        var d = parseInt(i.current.paddingRight, 10) || 0, p = document.body ? document.body.clientWidth : 0, f = window.innerWidth - p + d || 0;
        Object.keys(fu).forEach(function(C) {
          var m = fu[C];
          c && (c[C] = m);
        }), c && (c.paddingRight = "".concat(f, "px"));
      }
      l && mu() && (l.addEventListener("touchmove", pu, sn), s && (s.addEventListener("touchstart", gu, sn), s.addEventListener("touchmove", hu, sn))), Vn += 1;
    }
  }, [r]), a = Ve(function(s) {
    if (bu) {
      var l = document.body, c = l && l.style;
      Vn = Math.max(Vn - 1, 0), r && Vn < 1 && du.forEach(function(d) {
        var p = i.current[d];
        c && (c[d] = p);
      }), l && mu() && (l.removeEventListener("touchmove", pu, sn), s && (s.removeEventListener("touchstart", gu, sn), s.removeEventListener("touchmove", hu, sn)));
    }
  }, [r]);
  return Yt(function() {
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
function ap() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var sp = function(t) {
  var n = t.target;
  return n.ownerDocument.activeElement && n.ownerDocument.activeElement.blur();
}, lp = process.env.NODE_ENV === "production" ? {
  name: "1kfdb0e",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0"
} : {
  name: "bp8cua-ScrollManager",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0;label:ScrollManager;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNjcm9sbE1hbmFnZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9EVSIsImZpbGUiOiJTY3JvbGxNYW5hZ2VyLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4IH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IHsgRnJhZ21lbnQsIFJlYWN0RWxlbWVudCwgUmVmQ2FsbGJhY2ssIE1vdXNlRXZlbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlU2Nyb2xsQ2FwdHVyZSBmcm9tICcuL3VzZVNjcm9sbENhcHR1cmUnO1xuaW1wb3J0IHVzZVNjcm9sbExvY2sgZnJvbSAnLi91c2VTY3JvbGxMb2NrJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcmVhZG9ubHkgY2hpbGRyZW46IChyZWY6IFJlZkNhbGxiYWNrPEhUTUxFbGVtZW50PikgPT4gUmVhY3RFbGVtZW50O1xuICByZWFkb25seSBsb2NrRW5hYmxlZDogYm9vbGVhbjtcbiAgcmVhZG9ubHkgY2FwdHVyZUVuYWJsZWQ6IGJvb2xlYW47XG4gIHJlYWRvbmx5IG9uQm90dG9tQXJyaXZlPzogKGV2ZW50OiBXaGVlbEV2ZW50IHwgVG91Y2hFdmVudCkgPT4gdm9pZDtcbiAgcmVhZG9ubHkgb25Cb3R0b21MZWF2ZT86IChldmVudDogV2hlZWxFdmVudCB8IFRvdWNoRXZlbnQpID0+IHZvaWQ7XG4gIHJlYWRvbmx5IG9uVG9wQXJyaXZlPzogKGV2ZW50OiBXaGVlbEV2ZW50IHwgVG91Y2hFdmVudCkgPT4gdm9pZDtcbiAgcmVhZG9ubHkgb25Ub3BMZWF2ZT86IChldmVudDogV2hlZWxFdmVudCB8IFRvdWNoRXZlbnQpID0+IHZvaWQ7XG59XG5cbmNvbnN0IGJsdXJTZWxlY3RJbnB1dCA9IChldmVudDogTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRGl2RWxlbWVudDtcbiAgcmV0dXJuIChcbiAgICBlbGVtZW50Lm93bmVyRG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJlxuICAgIChlbGVtZW50Lm93bmVyRG9jdW1lbnQuYWN0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCkuYmx1cigpXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTY3JvbGxNYW5hZ2VyKHtcbiAgY2hpbGRyZW4sXG4gIGxvY2tFbmFibGVkLFxuICBjYXB0dXJlRW5hYmxlZCA9IHRydWUsXG4gIG9uQm90dG9tQXJyaXZlLFxuICBvbkJvdHRvbUxlYXZlLFxuICBvblRvcEFycml2ZSxcbiAgb25Ub3BMZWF2ZSxcbn06IFByb3BzKSB7XG4gIGNvbnN0IHNldFNjcm9sbENhcHR1cmVUYXJnZXQgPSB1c2VTY3JvbGxDYXB0dXJlKHtcbiAgICBpc0VuYWJsZWQ6IGNhcHR1cmVFbmFibGVkLFxuICAgIG9uQm90dG9tQXJyaXZlLFxuICAgIG9uQm90dG9tTGVhdmUsXG4gICAgb25Ub3BBcnJpdmUsXG4gICAgb25Ub3BMZWF2ZSxcbiAgfSk7XG4gIGNvbnN0IHNldFNjcm9sbExvY2tUYXJnZXQgPSB1c2VTY3JvbGxMb2NrKHsgaXNFbmFibGVkOiBsb2NrRW5hYmxlZCB9KTtcblxuICBjb25zdCB0YXJnZXRSZWY6IFJlZkNhbGxiYWNrPEhUTUxFbGVtZW50PiA9IChlbGVtZW50KSA9PiB7XG4gICAgc2V0U2Nyb2xsQ2FwdHVyZVRhcmdldChlbGVtZW50KTtcbiAgICBzZXRTY3JvbGxMb2NrVGFyZ2V0KGVsZW1lbnQpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAge2xvY2tFbmFibGVkICYmIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIG9uQ2xpY2s9e2JsdXJTZWxlY3RJbnB1dH1cbiAgICAgICAgICBjc3M9e3sgcG9zaXRpb246ICdmaXhlZCcsIGxlZnQ6IDAsIGJvdHRvbTogMCwgcmlnaHQ6IDAsIHRvcDogMCB9fVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIHtjaGlsZHJlbih0YXJnZXRSZWYpfVxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59XG4iXX0= */",
  toString: ap
};
function cp(e) {
  var t = e.children, n = e.lockEnabled, r = e.captureEnabled, i = r === void 0 ? !0 : r, o = e.onBottomArrive, u = e.onBottomLeave, a = e.onTopArrive, s = e.onTopLeave, l = op({
    isEnabled: i,
    onBottomArrive: o,
    onBottomLeave: u,
    onTopArrive: a,
    onTopLeave: s
  }), c = up({
    isEnabled: n
  }), d = function(f) {
    l(f), c(f);
  };
  return Y(Si, null, n && Y("div", {
    onClick: sp,
    css: lp
  }), t(d));
}
function dp() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var fp = process.env.NODE_ENV === "production" ? {
  name: "1a0ro4n-requiredInput",
  styles: "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"
} : {
  name: "5kkxb2-requiredInput-RequiredInput",
  styles: "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%;label:RequiredInput;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJlcXVpcmVkSW5wdXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNJIiwiZmlsZSI6IlJlcXVpcmVkSW5wdXQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBGb2N1c0V2ZW50SGFuZGxlciwgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3ggfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5cbmNvbnN0IFJlcXVpcmVkSW5wdXQ6IEZ1bmN0aW9uQ29tcG9uZW50PHtcbiAgcmVhZG9ubHkgbmFtZT86IHN0cmluZztcbiAgcmVhZG9ubHkgb25Gb2N1czogRm9jdXNFdmVudEhhbmRsZXI8SFRNTElucHV0RWxlbWVudD47XG59PiA9ICh7IG5hbWUsIG9uRm9jdXMgfSkgPT4gKFxuICA8aW5wdXRcbiAgICByZXF1aXJlZFxuICAgIG5hbWU9e25hbWV9XG4gICAgdGFiSW5kZXg9ey0xfVxuICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgb25Gb2N1cz17b25Gb2N1c31cbiAgICBjc3M9e3tcbiAgICAgIGxhYmVsOiAncmVxdWlyZWRJbnB1dCcsXG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBib3R0b206IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgIH19XG4gICAgLy8gUHJldmVudCBgU3dpdGNoaW5nIGZyb20gdW5jb250cm9sbGVkIHRvIGNvbnRyb2xsZWRgIGVycm9yXG4gICAgdmFsdWU9XCJcIlxuICAgIG9uQ2hhbmdlPXsoKSA9PiB7fX1cbiAgLz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFJlcXVpcmVkSW5wdXQ7XG4iXX0= */",
  toString: dp
}, pp = function(t) {
  var n = t.name, r = t.onFocus;
  return Y("input", {
    required: !0,
    name: n,
    tabIndex: -1,
    "aria-hidden": "true",
    onFocus: r,
    css: fp,
    value: "",
    onChange: function() {
    }
  });
}, hp = pp;
function fo(e) {
  var t;
  return typeof window < "u" && window.navigator != null ? e.test(((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.platform) || window.navigator.platform) : !1;
}
function gp() {
  return fo(/^iPhone/i);
}
function es() {
  return fo(/^Mac/i);
}
function mp() {
  return fo(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  es() && navigator.maxTouchPoints > 1;
}
function bp() {
  return gp() || mp();
}
function yp() {
  return es() || bp();
}
var Ip = function(t) {
  return t.label;
}, ts = function(t) {
  return t.label;
}, ns = function(t) {
  return t.value;
}, Cp = function(t) {
  return !!t.isDisabled;
}, vp = {
  clearIndicator: nf,
  container: Zd,
  control: cf,
  dropdownIndicator: ef,
  group: hf,
  groupHeading: mf,
  indicatorsContainer: _d,
  indicatorSeparator: of,
  input: Cf,
  loadingIndicator: sf,
  loadingMessage: Ld,
  menu: Bd,
  menuList: Dd,
  menuPortal: Hd,
  multiValue: wf,
  multiValueLabel: Ef,
  multiValueRemove: Ff,
  noOptionsMessage: Md,
  option: Of,
  placeholder: Df,
  singleValue: Lf,
  valueContainer: Jd
};
function xp(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = J({}, e);
  return Object.keys(t).forEach(function(r) {
    var i = r;
    e[i] ? n[i] = function(o, u) {
      return t[i](e[i](o, u), u);
    } : n[i] = t[i];
  }), n;
}
var Ap = {
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
}, Sp = 4, rs = 4, wp = 38, Ep = rs * 2, Fp = {
  baseUnit: rs,
  controlHeight: wp,
  menuGutter: Ep
}, Wn = {
  borderRadius: Sp,
  colors: Ap,
  spacing: Fp
}, Pp = {
  "aria-live": "polite",
  backspaceRemovesValue: !0,
  blurInputOnSelect: uu(),
  captureMenuScroll: !uu(),
  classNames: {},
  closeMenuOnSelect: !0,
  closeMenuOnScroll: !1,
  components: {},
  controlShouldRenderValue: !0,
  escapeClearsValue: !1,
  filterOption: tp(),
  formatGroupLabel: Ip,
  getOptionLabel: ts,
  getOptionValue: ns,
  isDisabled: !1,
  isLoading: !1,
  isMulti: !1,
  isRtl: !1,
  isSearchable: !0,
  isOptionDisabled: Cp,
  loadingMessage: function() {
    return "Loading...";
  },
  maxMenuHeight: 300,
  minMenuHeight: 140,
  menuIsOpen: !1,
  menuPlacement: "bottom",
  menuPosition: "absolute",
  menuShouldBlockScroll: !1,
  menuShouldScrollIntoView: !xd(),
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
function yu(e, t, n, r) {
  var i = us(e, t, n), o = as(e, t, n), u = os(e, t), a = Vr(e, t);
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
function Sr(e, t) {
  return e.options.map(function(n, r) {
    if ("options" in n) {
      var i = n.options.map(function(u, a) {
        return yu(e, u, t, a);
      }).filter(function(u) {
        return Cu(e, u);
      });
      return i.length > 0 ? {
        type: "group",
        data: n,
        options: i,
        index: r
      } : void 0;
    }
    var o = yu(e, n, t, r);
    return Cu(e, o) ? o : void 0;
  }).filter(wd);
}
function is(e) {
  return e.reduce(function(t, n) {
    return n.type === "group" ? t.push.apply(t, dn(n.options.map(function(r) {
      return r.data;
    }))) : t.push(n.data), t;
  }, []);
}
function Iu(e, t) {
  return e.reduce(function(n, r) {
    return r.type === "group" ? n.push.apply(n, dn(r.options.map(function(i) {
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
function Gp(e, t) {
  return is(Sr(e, t));
}
function Cu(e, t) {
  var n = e.inputValue, r = n === void 0 ? "" : n, i = t.data, o = t.isSelected, u = t.label, a = t.value;
  return (!ls(e) || !o) && ss(e, {
    label: u,
    value: a,
    data: i
  }, r);
}
function Rp(e, t) {
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
function kp(e, t) {
  var n = e.focusedOption;
  return n && t.indexOf(n) > -1 ? n : t[0];
}
var li = function(t, n) {
  var r, i = (r = t.find(function(o) {
    return o.data === n;
  })) === null || r === void 0 ? void 0 : r.id;
  return i || null;
}, os = function(t, n) {
  return t.getOptionLabel(n);
}, Vr = function(t, n) {
  return t.getOptionValue(n);
};
function us(e, t, n) {
  return typeof e.isOptionDisabled == "function" ? e.isOptionDisabled(t, n) : !1;
}
function as(e, t, n) {
  if (n.indexOf(t) > -1) return !0;
  if (typeof e.isOptionSelected == "function")
    return e.isOptionSelected(t, n);
  var r = Vr(e, t);
  return n.some(function(i) {
    return Vr(e, i) === r;
  });
}
function ss(e, t, n) {
  return e.filterOption ? e.filterOption(t, n) : !0;
}
var ls = function(t) {
  var n = t.hideSelectedOptions, r = t.isMulti;
  return n === void 0 ? r : n;
}, Bp = 1, po = /* @__PURE__ */ function(e) {
  _c(n, e);
  var t = qc(n);
  function n(r) {
    var i;
    if (Jc(this, n), i = t.call(this, r), i.state = {
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
    }, i.blockOptionHover = !1, i.isComposing = !1, i.commonProps = void 0, i.initialTouchX = 0, i.initialTouchY = 0, i.openAfterFocus = !1, i.scrollToFocusedOptionOnUpdate = !1, i.userIsDragging = void 0, i.isAppleDevice = yp(), i.controlRef = null, i.getControlRef = function(s) {
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
      var d = i.props, p = d.closeMenuOnSelect, f = d.isMulti, C = d.inputValue;
      i.onInputChange("", {
        action: "set-value",
        prevInputValue: C
      }), p && (i.setState({
        inputIsHiddenAfterUpdate: !f
      }), i.onMenuClose()), i.setState({
        clearFocusValueOnUpdate: !0
      }), i.onChange(s, {
        action: l,
        option: c
      });
    }, i.selectOption = function(s) {
      var l = i.props, c = l.blurInputOnSelect, d = l.isMulti, p = l.name, f = i.state.selectValue, C = d && i.isOptionSelected(s, f), m = i.isOptionDisabled(s, f);
      if (C) {
        var y = i.getOptionValue(s);
        i.setValue(f.filter(function(I) {
          return i.getOptionValue(I) !== y;
        }), "deselect-option", s);
      } else if (!m)
        d ? i.setValue([].concat(dn(f), [s]), "select-option", s) : i.setValue(s, "select-option");
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
      var l = i.props.isMulti, c = i.state.selectValue, d = i.getOptionValue(s), p = c.filter(function(C) {
        return i.getOptionValue(C) !== d;
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
      return li(i.state.focusableOptionsWithIds, s);
    }, i.getFocusableOptionsWithIds = function() {
      return Iu(Sr(i.props, i.state.selectValue), i.getElementId("option"));
    }, i.getValue = function() {
      return i.state.selectValue;
    }, i.cx = function() {
      for (var s = arguments.length, l = new Array(s), c = 0; c < s; c++)
        l[c] = arguments[c];
      return bd.apply(void 0, [i.props.classNamePrefix].concat(l));
    }, i.getOptionLabel = function(s) {
      return os(i.props, s);
    }, i.getOptionValue = function(s) {
      return Vr(i.props, s);
    }, i.getStyles = function(s, l) {
      var c = i.props.unstyled, d = vp[s](l, c);
      d.boxSizing = "border-box";
      var p = i.props.styles[s];
      return p ? p(d, l) : d;
    }, i.getClassNames = function(s, l) {
      var c, d;
      return (c = (d = i.props.classNames)[s]) === null || c === void 0 ? void 0 : c.call(d, l);
    }, i.getElementId = function(s) {
      return "".concat(i.state.instancePrefix, "-").concat(s);
    }, i.getComponents = function() {
      return Hf(i.props);
    }, i.buildCategorizedOptions = function() {
      return Sr(i.props, i.state.selectValue);
    }, i.getCategorizedOptions = function() {
      return i.props.menuIsOpen ? i.buildCategorizedOptions() : [];
    }, i.buildFocusableOptions = function() {
      return is(i.buildCategorizedOptions());
    }, i.getFocusableOptions = function() {
      return i.props.menuIsOpen ? i.buildFocusableOptions() : [];
    }, i.ariaOnChange = function(s, l) {
      i.setState({
        ariaSelection: J({
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
      typeof i.props.closeMenuOnScroll == "boolean" ? s.target instanceof HTMLElement && Xr(s.target) && i.props.onMenuClose() : typeof i.props.closeMenuOnScroll == "function" && i.props.closeMenuOnScroll(s) && i.props.onMenuClose();
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
      return ls(i.props);
    }, i.onValueInputFocus = function(s) {
      s.preventDefault(), s.stopPropagation(), i.focus();
    }, i.onKeyDown = function(s) {
      var l = i.props, c = l.isMulti, d = l.backspaceRemovesValue, p = l.escapeClearsValue, f = l.inputValue, C = l.isClearable, m = l.isDisabled, y = l.menuIsOpen, I = l.onKeyDown, x = l.tabSelectsValue, E = l.openMenuOnFocus, S = i.state, P = S.focusedOption, w = S.focusedValue, k = S.selectValue;
      if (!m && !(typeof I == "function" && (I(s), s.defaultPrevented))) {
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
              c ? i.popValue() : C && i.clearValue();
            }
            break;
          case "Tab":
            if (i.isComposing || s.shiftKey || !y || !x || !P || // don't capture the event if the menu opens on focus and the focused
            // option is already selected; it breaks the flow of navigation
            E && i.isOptionSelected(P, k))
              return;
            i.selectOption(P);
            break;
          case "Enter":
            if (s.keyCode === 229)
              break;
            if (y) {
              if (!P || i.isComposing) return;
              i.selectOption(P);
              break;
            }
            return;
          case "Escape":
            y ? (i.setState({
              inputIsHiddenAfterUpdate: !1
            }), i.onInputChange("", {
              action: "menu-close",
              prevInputValue: f
            }), i.onMenuClose()) : C && p && i.clearValue();
            break;
          case " ":
            if (f)
              return;
            if (!y) {
              i.openMenu("first");
              break;
            }
            if (!P) return;
            i.selectOption(P);
            break;
          case "ArrowUp":
            y ? i.focusOption("up") : i.openMenu("last");
            break;
          case "ArrowDown":
            y ? i.focusOption("down") : i.openMenu("first");
            break;
          case "PageUp":
            if (!y) return;
            i.focusOption("pageup");
            break;
          case "PageDown":
            if (!y) return;
            i.focusOption("pagedown");
            break;
          case "Home":
            if (!y) return;
            i.focusOption("first");
            break;
          case "End":
            if (!y) return;
            i.focusOption("last");
            break;
          default:
            return;
        }
        s.preventDefault();
      }
    }, i.state.instancePrefix = "react-select-" + (i.props.instanceId || ++Bp), i.state.selectValue = Or(r.value), r.menuIsOpen && i.state.selectValue.length) {
      var o = i.getFocusableOptionsWithIds(), u = i.buildFocusableOptions(), a = u.indexOf(i.state.selectValue[0]);
      i.state.focusableOptionsWithIds = o, i.state.focusedOption = u[a], i.state.focusedOptionId = li(o, u[a]);
    }
    return i;
  }
  return Yc(n, [{
    key: "componentDidMount",
    value: function() {
      this.startListeningComposition(), this.startListeningToTouch(), this.props.closeMenuOnScroll && document && document.addEventListener && document.addEventListener("scroll", this.onScroll, !0), this.props.autoFocus && this.focusInput(), this.props.menuIsOpen && this.state.focusedOption && this.menuListRef && this.focusedOptionRef && ou(this.menuListRef, this.focusedOptionRef);
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
      }), this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate && (ou(this.menuListRef, this.focusedOptionRef), this.scrollToFocusedOptionOnUpdate = !1);
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
        return this.props.theme ? typeof this.props.theme == "function" ? this.props.theme(Wn) : J(J({}, Wn), this.props.theme) : Wn;
      }
    )
  }, {
    key: "getCommonProps",
    value: function() {
      var i = this.clearValue, o = this.cx, u = this.getStyles, a = this.getClassNames, s = this.getValue, l = this.selectOption, c = this.setValue, d = this.props, p = d.isMulti, f = d.isRtl, C = d.options, m = this.hasValue();
      return {
        clearValue: i,
        cx: o,
        getStyles: u,
        getClassNames: a,
        getValue: s,
        hasValue: m,
        isMulti: p,
        isRtl: f,
        options: C,
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
      return us(this.props, i, o);
    }
  }, {
    key: "isOptionSelected",
    value: function(i, o) {
      return as(this.props, i, o);
    }
  }, {
    key: "filterOption",
    value: function(i, o) {
      return ss(this.props, i, o);
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
        var i = this.props, o = i.isDisabled, u = i.isSearchable, a = i.inputId, s = i.inputValue, l = i.tabIndex, c = i.form, d = i.menuIsOpen, p = i.required, f = this.getComponents(), C = f.Input, m = this.state, y = m.inputIsHidden, I = m.ariaSelection, x = this.commonProps, E = a || this.getElementId("input"), S = J(J(J({
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
        }), this.hasValue() ? (I == null ? void 0 : I.action) === "initial-input-focus" && {
          "aria-describedby": this.getElementId("live-region")
        } : {
          "aria-describedby": this.getElementId("placeholder")
        });
        return u ? /* @__PURE__ */ ne.createElement(C, U({}, x, {
          autoCapitalize: "none",
          autoComplete: "off",
          autoCorrect: "off",
          id: E,
          innerRef: this.getInputRef,
          isDisabled: o,
          isHidden: y,
          onBlur: this.onInputBlur,
          onChange: this.handleInputChange,
          onFocus: this.onInputFocus,
          spellCheck: "false",
          tabIndex: l,
          form: c,
          type: "text",
          value: s
        }, S)) : /* @__PURE__ */ ne.createElement(rp, U({
          id: E,
          innerRef: this.getInputRef,
          onBlur: this.onInputBlur,
          onChange: Br,
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
      var i = this, o = this.getComponents(), u = o.MultiValue, a = o.MultiValueContainer, s = o.MultiValueLabel, l = o.MultiValueRemove, c = o.SingleValue, d = o.Placeholder, p = this.commonProps, f = this.props, C = f.controlShouldRenderValue, m = f.isDisabled, y = f.isMulti, I = f.inputValue, x = f.placeholder, E = this.state, S = E.selectValue, P = E.focusedValue, w = E.isFocused;
      if (!this.hasValue() || !C)
        return I ? null : /* @__PURE__ */ ne.createElement(d, U({}, p, {
          key: "placeholder",
          isDisabled: m,
          isFocused: w,
          innerProps: {
            id: this.getElementId("placeholder")
          }
        }), x);
      if (y)
        return S.map(function(G, T) {
          var H = G === P, V = "".concat(i.getOptionLabel(G), "-").concat(i.getOptionValue(G));
          return /* @__PURE__ */ ne.createElement(u, U({}, p, {
            components: {
              Container: a,
              Label: s,
              Remove: l
            },
            isFocused: H,
            isDisabled: m,
            key: V,
            index: T,
            removeProps: {
              onClick: function() {
                return i.removeValue(G);
              },
              onTouchEnd: function() {
                return i.removeValue(G);
              },
              onMouseDown: function(X) {
                X.preventDefault();
              }
            },
            data: G
          }), i.formatOptionLabel(G, "value"));
        });
      if (I)
        return null;
      var k = S[0];
      return /* @__PURE__ */ ne.createElement(c, U({}, p, {
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
      return /* @__PURE__ */ ne.createElement(o, U({}, u, {
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
      return /* @__PURE__ */ ne.createElement(o, U({}, u, {
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
      return /* @__PURE__ */ ne.createElement(u, U({}, a, {
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
      return /* @__PURE__ */ ne.createElement(o, U({}, u, {
        innerProps: l,
        isDisabled: a,
        isFocused: s
      }));
    }
  }, {
    key: "renderMenu",
    value: function() {
      var i = this, o = this.getComponents(), u = o.Group, a = o.GroupHeading, s = o.Menu, l = o.MenuList, c = o.MenuPortal, d = o.LoadingMessage, p = o.NoOptionsMessage, f = o.Option, C = this.commonProps, m = this.state.focusedOption, y = this.props, I = y.captureMenuScroll, x = y.inputValue, E = y.isLoading, S = y.loadingMessage, P = y.minMenuHeight, w = y.maxMenuHeight, k = y.menuIsOpen, G = y.menuPlacement, T = y.menuPosition, H = y.menuPortalTarget, V = y.menuShouldBlockScroll, B = y.menuShouldScrollIntoView, X = y.noOptionsMessage, L = y.onMenuScrollToTop, M = y.onMenuScrollToBottom;
      if (!k) return null;
      var _ = function(g, pe) {
        var te = g.type, de = g.data, Fe = g.isDisabled, N = g.isSelected, Z = g.label, q = g.value, fe = m === de, Pe = Fe ? void 0 : function() {
          return i.onOptionHover(de);
        }, We = Fe ? void 0 : function() {
          return i.selectOption(de);
        }, zt = "".concat(i.getElementId("option"), "-").concat(pe), un = {
          id: zt,
          onClick: We,
          onMouseMove: Pe,
          onMouseOver: Pe,
          tabIndex: -1,
          role: "option",
          "aria-selected": i.isAppleDevice ? void 0 : N
          // is not supported on Apple devices
        };
        return /* @__PURE__ */ ne.createElement(f, U({}, C, {
          innerProps: un,
          data: de,
          isDisabled: Fe,
          isSelected: N,
          key: zt,
          label: Z,
          type: te,
          value: q,
          isFocused: fe,
          innerRef: fe ? i.getFocusedOptionRef : void 0
        }), i.formatOptionLabel(g.data, "menu"));
      }, Q;
      if (this.hasOptions())
        Q = this.getCategorizedOptions().map(function(ae) {
          if (ae.type === "group") {
            var g = ae.data, pe = ae.options, te = ae.index, de = "".concat(i.getElementId("group"), "-").concat(te), Fe = "".concat(de, "-heading");
            return /* @__PURE__ */ ne.createElement(u, U({}, C, {
              key: de,
              data: g,
              options: pe,
              Heading: a,
              headingProps: {
                id: Fe,
                data: ae.data
              },
              label: i.formatGroupLabel(ae.data)
            }), ae.options.map(function(N) {
              return _(N, "".concat(te, "-").concat(N.index));
            }));
          } else if (ae.type === "option")
            return _(ae, "".concat(ae.index));
        });
      else if (E) {
        var se = S({
          inputValue: x
        });
        if (se === null) return null;
        Q = /* @__PURE__ */ ne.createElement(d, C, se);
      } else {
        var me = X({
          inputValue: x
        });
        if (me === null) return null;
        Q = /* @__PURE__ */ ne.createElement(p, C, me);
      }
      var b = {
        minMenuHeight: P,
        maxMenuHeight: w,
        menuPlacement: G,
        menuPosition: T,
        menuShouldScrollIntoView: B
      }, Ce = /* @__PURE__ */ ne.createElement(Od, U({}, C, b), function(ae) {
        var g = ae.ref, pe = ae.placerProps, te = pe.placement, de = pe.maxHeight;
        return /* @__PURE__ */ ne.createElement(s, U({}, C, b, {
          innerRef: g,
          innerProps: {
            onMouseDown: i.onMenuMouseDown,
            onMouseMove: i.onMenuMouseMove
          },
          isLoading: E,
          placement: te
        }), /* @__PURE__ */ ne.createElement(cp, {
          captureEnabled: I,
          onTopArrive: L,
          onBottomArrive: M,
          lockEnabled: V
        }, function(Fe) {
          return /* @__PURE__ */ ne.createElement(l, U({}, C, {
            innerRef: function(Z) {
              i.getMenuListRef(Z), Fe(Z);
            },
            innerProps: {
              role: "listbox",
              "aria-multiselectable": C.isMulti,
              id: i.getElementId("listbox")
            },
            isLoading: E,
            maxHeight: de,
            focusedOption: m
          }), Q);
        }));
      });
      return H || T === "fixed" ? /* @__PURE__ */ ne.createElement(c, U({}, C, {
        appendTo: H,
        controlElement: this.controlRef,
        menuPlacement: G,
        menuPosition: T
      }), Ce) : Ce;
    }
  }, {
    key: "renderFormField",
    value: function() {
      var i = this, o = this.props, u = o.delimiter, a = o.isDisabled, s = o.isMulti, l = o.name, c = o.required, d = this.state.selectValue;
      if (c && !this.hasValue() && !a)
        return /* @__PURE__ */ ne.createElement(hp, {
          name: l,
          onFocus: this.onValueInputFocus
        });
      if (!(!l || a))
        if (s)
          if (u) {
            var p = d.map(function(m) {
              return i.getOptionValue(m);
            }).join(u);
            return /* @__PURE__ */ ne.createElement("input", {
              name: l,
              type: "hidden",
              value: p
            });
          } else {
            var f = d.length > 0 ? d.map(function(m, y) {
              return /* @__PURE__ */ ne.createElement("input", {
                key: "i-".concat(y),
                name: l,
                type: "hidden",
                value: i.getOptionValue(m)
              });
            }) : /* @__PURE__ */ ne.createElement("input", {
              name: l,
              type: "hidden",
              value: ""
            });
            return /* @__PURE__ */ ne.createElement("div", null, f);
          }
        else {
          var C = d[0] ? this.getOptionValue(d[0]) : "";
          return /* @__PURE__ */ ne.createElement("input", {
            name: l,
            type: "hidden",
            value: C
          });
        }
    }
  }, {
    key: "renderLiveRegion",
    value: function() {
      var i = this.commonProps, o = this.state, u = o.ariaSelection, a = o.focusedOption, s = o.focusedValue, l = o.isFocused, c = o.selectValue, d = this.getFocusableOptions();
      return /* @__PURE__ */ ne.createElement(qf, U({}, i, {
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
      var i = this.getComponents(), o = i.Control, u = i.IndicatorsContainer, a = i.SelectContainer, s = i.ValueContainer, l = this.props, c = l.className, d = l.id, p = l.isDisabled, f = l.menuIsOpen, C = this.state.isFocused, m = this.commonProps = this.getCommonProps();
      return /* @__PURE__ */ ne.createElement(a, U({}, m, {
        className: c,
        innerProps: {
          id: d,
          onKeyDown: this.onKeyDown
        },
        isDisabled: p,
        isFocused: C
      }), this.renderLiveRegion(), /* @__PURE__ */ ne.createElement(o, U({}, m, {
        innerRef: this.getControlRef,
        innerProps: {
          onMouseDown: this.onControlMouseDown,
          onTouchEnd: this.onControlTouchEnd
        },
        isDisabled: p,
        isFocused: C,
        menuIsOpen: f
      }), /* @__PURE__ */ ne.createElement(s, U({}, m, {
        isDisabled: p
      }), this.renderPlaceholderOrValue(), this.renderInput()), /* @__PURE__ */ ne.createElement(u, U({}, m, {
        isDisabled: p
      }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(i, o) {
      var u = o.prevProps, a = o.clearFocusValueOnUpdate, s = o.inputIsHiddenAfterUpdate, l = o.ariaSelection, c = o.isFocused, d = o.prevWasFocused, p = o.instancePrefix, f = i.options, C = i.value, m = i.menuIsOpen, y = i.inputValue, I = i.isMulti, x = Or(C), E = {};
      if (u && (C !== u.value || f !== u.options || m !== u.menuIsOpen || y !== u.inputValue)) {
        var S = m ? Gp(i, x) : [], P = m ? Iu(Sr(i, x), "".concat(p, "-option")) : [], w = a ? Rp(o, x) : null, k = kp(o, S), G = li(P, k);
        E = {
          selectValue: x,
          focusedOption: k,
          focusedOptionId: G,
          focusableOptionsWithIds: P,
          focusedValue: w,
          clearFocusValueOnUpdate: !1
        };
      }
      var T = s != null && i !== u ? {
        inputIsHidden: s,
        inputIsHiddenAfterUpdate: void 0
      } : {}, H = l, V = c && d;
      return c && !V && (H = {
        value: Hn(I, x, x[0] || null),
        options: x,
        action: "initial-input-focus"
      }, V = !d), (l == null ? void 0 : l.action) === "initial-input-focus" && (H = null), J(J(J({}, E), T), {}, {
        prevProps: i,
        ariaSelection: H,
        prevWasFocused: V
      });
    }
  }]), n;
}(ga);
po.defaultProps = Pp;
var Op = /* @__PURE__ */ ma(function(e, t) {
  var n = Oa(e);
  return /* @__PURE__ */ ne.createElement(po, U({
    ref: t
  }, n));
}), zr = Op;
const Tp = Wn, ho = {
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
}, Vp = {
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
function Dp(e) {
  if (!e) return Wn;
  const t = typeof e == "function" ? e(ho) : e, {
    colors: n,
    spacing: r,
    borderRadius: i
  } = Zi(
    Tp,
    t
  );
  return {
    borderRadius: i,
    colors: n,
    spacing: r
  };
}
function Zi(e, ...t) {
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
const cs = Kn(void 0), Pn = () => {
  const e = Fn(cs);
  if (!e)
    throw new Error("Must be used inside FormFieldContext.Provider");
  return e;
};
function ds(e) {
  const t = Pn(), { id: n, onChange: r, prop: i, value: o } = t, { getProps: u, theme: a } = Ye(), s = {
    color: a.colors.neutral60,
    display: "block",
    border: "8px solid",
    borderColor: a.colors.neutral20,
    padding: 6,
    width: "100%",
    borderRadius: a.borderRadius,
    gridArea: "control",
    boxShadow: a.boxShadow.input
  };
  let l = "off", c = "text", d = (f) => f;
  switch (i.type) {
    case "string":
      break;
    case "integer":
      c = "number", d = (f) => f ? parseInt(f) : void 0;
      break;
    default:
      throw new Error("unexpected prop.type for ControlInput: " + i.type);
  }
  if ("secret" in i && i.secret && (c = "password", l = "new-password"), e.customInput)
    return /* @__PURE__ */ j(ha, { children: e.customInput });
  const p = {
    id: n,
    name: i.name,
    value: o ?? "",
    onChange: (f) => r(d(f.target.value)),
    type: c,
    min: "min" in i ? i.min : void 0,
    max: "max" in i ? i.max : void 0,
    required: !i.optional,
    autoComplete: l,
    placeholder: "test",
    baseStyles: s,
    formFieldContext: t
  };
  if (e.component) {
    const f = e.component;
    return /* @__PURE__ */ j(
      f,
      {
        ...p
      }
    );
  }
  return (
    // <input
    //   id={id}
    //   type={inputType}
    //   name={prop.name}
    //   value={value ?? ""}
    //   onChange={(e) => onChange(toOnChangeValue(e.target.value))}
    //   {...getProps("controlInput", baseStyles, formFieldContextProps)}
    //   min={"min" in prop ? prop.min : undefined}
    //   max={"max" in prop ? prop.max : undefined}
    //   placeholder="test"
    //   autoComplete={autoComplete}
    //   data-lpignore="true"
    //   data-1p-ignore="true"
    //   required={!prop.optional}
    // />
    /* @__PURE__ */ j(
      "input",
      {
        ...p,
        ...u("controlInput", s, t),
        "data-lpignore": "true",
        "data-1p-ignore": "true"
      }
    )
  );
}
function Np(e, t) {
  const n = {};
  return (e[e.length - 1] === "" ? [...e, ""] : e).join(
    (n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " ")
  ).trim();
}
const Mp = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, Lp = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, Xp = {};
function vu(e, t) {
  return (Xp.jsx ? Lp : Mp).test(e);
}
const zp = /[ \t\n\f\r]/g;
function Hp(e) {
  return typeof e == "object" ? e.type === "text" ? xu(e.value) : !1 : xu(e);
}
function xu(e) {
  return e.replace(zp, "") === "";
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
function fs(e, t) {
  const n = {}, r = {};
  let i = -1;
  for (; ++i < e.length; )
    Object.assign(n, e[i].property), Object.assign(r, e[i].normal);
  return new nr(n, r, t);
}
function ji(e) {
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
let Wp = 0;
const re = on(), Ee = on(), ps = on(), O = on(), be = on(), fn = on(), je = on();
function on() {
  return 2 ** ++Wp;
}
const Ji = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: re,
  booleanish: Ee,
  commaOrSpaceSeparated: je,
  commaSeparated: fn,
  number: O,
  overloadedBoolean: ps,
  spaceSeparated: be
}, Symbol.toStringTag, { value: "Module" })), ci = Object.keys(Ji);
class go extends Ke {
  /**
   * @constructor
   * @param {string} property
   * @param {string} attribute
   * @param {number|null} [mask]
   * @param {string} [space]
   */
  constructor(t, n, r, i) {
    let o = -1;
    if (super(t, n), Au(this, "space", i), typeof r == "number")
      for (; ++o < ci.length; ) {
        const u = ci[o];
        Au(this, ci[o], (r & Ji[u]) === Ji[u]);
      }
  }
}
go.prototype.defined = !0;
function Au(e, t, n) {
  n && (e[t] = n);
}
const Zp = {}.hasOwnProperty;
function Gn(e) {
  const t = {}, n = {};
  let r;
  for (r in e.properties)
    if (Zp.call(e.properties, r)) {
      const i = e.properties[r], o = new go(
        r,
        e.transform(e.attributes || {}, r),
        i,
        e.space
      );
      e.mustUseProperty && e.mustUseProperty.includes(r) && (o.mustUseProperty = !0), t[r] = o, n[ji(r)] = r, n[ji(o.attribute)] = r;
    }
  return new nr(t, n, e.space);
}
const hs = Gn({
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
}), gs = Gn({
  space: "xml",
  transform(e, t) {
    return "xml:" + t.slice(3).toLowerCase();
  },
  properties: { xmlLang: null, xmlBase: null, xmlSpace: null }
});
function ms(e, t) {
  return t in e ? e[t] : t;
}
function bs(e, t) {
  return ms(e, t.toLowerCase());
}
const ys = Gn({
  space: "xmlns",
  attributes: { xmlnsxlink: "xmlns:xlink" },
  transform: bs,
  properties: { xmlns: null, xmlnsXLink: null }
}), Is = Gn({
  transform(e, t) {
    return t === "role" ? t : "aria-" + t.slice(4).toLowerCase();
  },
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: Ee,
    ariaAutoComplete: null,
    ariaBusy: Ee,
    ariaChecked: Ee,
    ariaColCount: O,
    ariaColIndex: O,
    ariaColSpan: O,
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
    ariaLevel: O,
    ariaLive: null,
    ariaModal: Ee,
    ariaMultiLine: Ee,
    ariaMultiSelectable: Ee,
    ariaOrientation: null,
    ariaOwns: be,
    ariaPlaceholder: null,
    ariaPosInSet: O,
    ariaPressed: Ee,
    ariaReadOnly: Ee,
    ariaRelevant: null,
    ariaRequired: Ee,
    ariaRoleDescription: be,
    ariaRowCount: O,
    ariaRowIndex: O,
    ariaRowSpan: O,
    ariaSelected: Ee,
    ariaSetSize: O,
    ariaSort: null,
    ariaValueMax: O,
    ariaValueMin: O,
    ariaValueNow: O,
    ariaValueText: null,
    role: null
  }
}), jp = Gn({
  space: "html",
  attributes: {
    acceptcharset: "accept-charset",
    classname: "class",
    htmlfor: "for",
    httpequiv: "http-equiv"
  },
  transform: bs,
  mustUseProperty: ["checked", "multiple", "muted", "selected"],
  properties: {
    // Standard Properties.
    abbr: null,
    accept: fn,
    acceptCharset: be,
    accessKey: be,
    action: null,
    allow: null,
    allowFullScreen: re,
    allowPaymentRequest: re,
    allowUserMedia: re,
    alt: null,
    as: null,
    async: re,
    autoCapitalize: null,
    autoComplete: be,
    autoFocus: re,
    autoPlay: re,
    blocking: be,
    capture: null,
    charSet: null,
    checked: re,
    cite: null,
    className: be,
    cols: O,
    colSpan: null,
    content: null,
    contentEditable: Ee,
    controls: re,
    controlsList: be,
    coords: O | fn,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: re,
    defer: re,
    dir: null,
    dirName: null,
    disabled: re,
    download: ps,
    draggable: Ee,
    encType: null,
    enterKeyHint: null,
    fetchPriority: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: re,
    formTarget: null,
    headers: be,
    height: O,
    hidden: re,
    high: O,
    href: null,
    hrefLang: null,
    htmlFor: be,
    httpEquiv: be,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: re,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: re,
    itemId: null,
    itemProp: be,
    itemRef: be,
    itemScope: re,
    itemType: be,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: re,
    low: O,
    manifest: null,
    max: null,
    maxLength: O,
    media: null,
    method: null,
    min: null,
    minLength: O,
    multiple: re,
    muted: re,
    name: null,
    nonce: null,
    noModule: re,
    noValidate: re,
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
    open: re,
    optimum: O,
    pattern: null,
    ping: be,
    placeholder: null,
    playsInline: re,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: re,
    referrerPolicy: null,
    rel: be,
    required: re,
    reversed: re,
    rows: O,
    rowSpan: O,
    sandbox: be,
    scope: null,
    scoped: re,
    seamless: re,
    selected: re,
    shadowRootClonable: re,
    shadowRootDelegatesFocus: re,
    shadowRootMode: null,
    shape: null,
    size: O,
    sizes: null,
    slot: null,
    span: O,
    spellCheck: Ee,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: O,
    step: null,
    style: null,
    tabIndex: O,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: re,
    useMap: null,
    value: Ee,
    width: O,
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
    border: O,
    // `<table>`. Use CSS `border-width` instead,
    borderColor: null,
    // `<table>`. Use CSS `border-color` instead,
    bottomMargin: O,
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
    compact: re,
    // Lists. Use CSS to reduce space between items instead
    declare: re,
    // `<object>`
    event: null,
    // `<script>`
    face: null,
    // `<font>`. Use CSS instead
    frame: null,
    // `<table>`
    frameBorder: null,
    // `<iframe>`. Use CSS `border` instead
    hSpace: O,
    // `<img>` and `<object>`
    leftMargin: O,
    // `<body>`
    link: null,
    // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null,
    // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null,
    // `<img>`. Use a `<picture>`
    marginHeight: O,
    // `<body>`
    marginWidth: O,
    // `<body>`
    noResize: re,
    // `<frame>`
    noHref: re,
    // `<area>`. Use no href instead of an explicit `nohref`
    noShade: re,
    // `<hr>`. Use background-color and height instead of borders
    noWrap: re,
    // `<td>` and `<th>`
    object: null,
    // `<applet>`
    profile: null,
    // `<head>`
    prompt: null,
    // `<isindex>`
    rev: null,
    // `<link>`
    rightMargin: O,
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
    topMargin: O,
    // `<body>`
    valueType: null,
    // `<param>`
    version: null,
    // `<html>`. Use a doctype.
    vAlign: null,
    // Several. Use CSS `vertical-align` instead
    vLink: null,
    // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: O,
    // `<img>` and `<object>`
    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: re,
    disableRemotePlayback: re,
    prefix: null,
    property: null,
    results: O,
    security: null,
    unselectable: null
  }
}), Jp = Gn({
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
  transform: ms,
  properties: {
    about: je,
    accentHeight: O,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: O,
    amplitude: O,
    arabicForm: null,
    ascent: O,
    attributeName: null,
    attributeType: null,
    azimuth: O,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: O,
    by: null,
    calcMode: null,
    capHeight: O,
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
    descent: O,
    diffuseConstant: O,
    direction: null,
    display: null,
    dur: null,
    divisor: O,
    dominantBaseline: null,
    download: re,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: O,
    enableBackground: null,
    end: null,
    event: null,
    exponent: O,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: O,
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
    g1: fn,
    g2: fn,
    glyphName: fn,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: O,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: O,
    horizOriginX: O,
    horizOriginY: O,
    id: null,
    ideographic: O,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: O,
    k: O,
    k1: O,
    k2: O,
    k3: O,
    k4: O,
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
    limitingConeAngle: O,
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
    mediaSize: O,
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
    overlinePosition: O,
    overlineThickness: O,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: O,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: be,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: O,
    pointsAtY: O,
    pointsAtZ: O,
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
    specularConstant: O,
    specularExponent: O,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: O,
    strikethroughThickness: O,
    string: null,
    stroke: null,
    strokeDashArray: je,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: O,
    strokeOpacity: O,
    strokeWidth: null,
    style: null,
    surfaceScale: O,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: je,
    tabIndex: O,
    tableValues: null,
    target: null,
    targetX: O,
    targetY: O,
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
    underlinePosition: O,
    underlineThickness: O,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: O,
    values: null,
    vAlphabetic: O,
    vMathematical: O,
    vectorEffect: null,
    vHanging: O,
    vIdeographic: O,
    version: null,
    vertAdvY: O,
    vertOriginX: O,
    vertOriginY: O,
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
    xHeight: O,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  }
}), Yp = /^data[-\w.:]+$/i, Su = /-[a-z]/g, _p = /[A-Z]/g;
function Up(e, t) {
  const n = ji(t);
  let r = t, i = Ke;
  if (n in e.normal)
    return e.property[e.normal[n]];
  if (n.length > 4 && n.slice(0, 4) === "data" && Yp.test(t)) {
    if (t.charAt(4) === "-") {
      const o = t.slice(5).replace(Su, qp);
      r = "data" + o.charAt(0).toUpperCase() + o.slice(1);
    } else {
      const o = t.slice(4);
      if (!Su.test(o)) {
        let u = o.replace(_p, Qp);
        u.charAt(0) !== "-" && (u = "-" + u), t = "data" + u;
      }
    }
    i = go;
  }
  return new i(r, t);
}
function Qp(e) {
  return "-" + e.toLowerCase();
}
function qp(e) {
  return e.charAt(1).toUpperCase();
}
const $p = {
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
}, Kp = fs([gs, hs, ys, Is, jp], "html"), mo = fs([gs, hs, ys, Is, Jp], "svg");
function eh(e) {
  return e.join(" ").trim();
}
var Dn = {}, di, wu;
function th() {
  if (wu) return di;
  wu = 1;
  var e = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, t = /\n/g, n = /^\s*/, r = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, i = /^:\s*/, o = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, u = /^[;\s]*/, a = /^\s+|\s+$/g, s = `
`, l = "/", c = "*", d = "", p = "comment", f = "declaration";
  di = function(m, y) {
    if (typeof m != "string")
      throw new TypeError("First argument must be a string");
    if (!m) return [];
    y = y || {};
    var I = 1, x = 1;
    function E(X) {
      var L = X.match(t);
      L && (I += L.length);
      var M = X.lastIndexOf(s);
      x = ~M ? X.length - M : x + X.length;
    }
    function S() {
      var X = { line: I, column: x };
      return function(L) {
        return L.position = new P(X), G(), L;
      };
    }
    function P(X) {
      this.start = X, this.end = { line: I, column: x }, this.source = y.source;
    }
    P.prototype.content = m;
    function w(X) {
      var L = new Error(
        y.source + ":" + I + ":" + x + ": " + X
      );
      if (L.reason = X, L.filename = y.source, L.line = I, L.column = x, L.source = m, !y.silent) throw L;
    }
    function k(X) {
      var L = X.exec(m);
      if (L) {
        var M = L[0];
        return E(M), m = m.slice(M.length), L;
      }
    }
    function G() {
      k(n);
    }
    function T(X) {
      var L;
      for (X = X || []; L = H(); )
        L !== !1 && X.push(L);
      return X;
    }
    function H() {
      var X = S();
      if (!(l != m.charAt(0) || c != m.charAt(1))) {
        for (var L = 2; d != m.charAt(L) && (c != m.charAt(L) || l != m.charAt(L + 1)); )
          ++L;
        if (L += 2, d === m.charAt(L - 1))
          return w("End of comment missing");
        var M = m.slice(2, L - 2);
        return x += 2, E(M), m = m.slice(L), x += 2, X({
          type: p,
          comment: M
        });
      }
    }
    function V() {
      var X = S(), L = k(r);
      if (L) {
        if (H(), !k(i)) return w("property missing ':'");
        var M = k(o), _ = X({
          type: f,
          property: C(L[0].replace(e, d)),
          value: M ? C(M[0].replace(e, d)) : d
        });
        return k(u), _;
      }
    }
    function B() {
      var X = [];
      T(X);
      for (var L; L = V(); )
        L !== !1 && (X.push(L), T(X));
      return X;
    }
    return G(), B();
  };
  function C(m) {
    return m ? m.replace(a, d) : d;
  }
  return di;
}
var Eu;
function nh() {
  if (Eu) return Dn;
  Eu = 1;
  var e = Dn.__importDefault || function(r) {
    return r && r.__esModule ? r : { default: r };
  };
  Object.defineProperty(Dn, "__esModule", { value: !0 }), Dn.default = n;
  var t = e(th());
  function n(r, i) {
    var o = null;
    if (!r || typeof r != "string")
      return o;
    var u = (0, t.default)(r), a = typeof i == "function";
    return u.forEach(function(s) {
      if (s.type === "declaration") {
        var l = s.property, c = s.value;
        a ? i(l, c, s) : c && (o = o || {}, o[l] = c);
      }
    }), o;
  }
  return Dn;
}
var rh = nh();
const Fu = /* @__PURE__ */ no(rh), ih = Fu.default || Fu, Cs = vs("end"), bo = vs("start");
function vs(e) {
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
function oh(e) {
  const t = bo(e), n = Cs(e);
  if (t && n)
    return { start: t, end: n };
}
function Zn(e) {
  return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? Pu(e.position) : "start" in e || "end" in e ? Pu(e) : "line" in e || "column" in e ? Yi(e) : "";
}
function Yi(e) {
  return Gu(e && e.line) + ":" + Gu(e && e.column);
}
function Pu(e) {
  return Yi(e && e.start) + "-" + Yi(e && e.end);
}
function Gu(e) {
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
const yo = {}.hasOwnProperty, uh = /* @__PURE__ */ new Map(), ah = /[A-Z]/g, sh = /-([a-z])/g, lh = /* @__PURE__ */ new Set(["table", "tbody", "thead", "tfoot", "tr"]), ch = /* @__PURE__ */ new Set(["td", "th"]), xs = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function dh(e, t) {
  if (!t || t.Fragment === void 0)
    throw new TypeError("Expected `Fragment` in options");
  const n = t.filePath || void 0;
  let r;
  if (t.development) {
    if (typeof t.jsxDEV != "function")
      throw new TypeError(
        "Expected `jsxDEV` in options when `development: true`"
      );
    r = Ih(n, t.jsxDEV);
  } else {
    if (typeof t.jsx != "function")
      throw new TypeError("Expected `jsx` in production options");
    if (typeof t.jsxs != "function")
      throw new TypeError("Expected `jsxs` in production options");
    r = yh(n, t.jsx, t.jsxs);
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
    schema: t.space === "svg" ? mo : Kp,
    stylePropertyNameCase: t.stylePropertyNameCase || "dom",
    tableCellAlignToStyle: t.tableCellAlignToStyle !== !1
  }, o = As(i, e, void 0);
  return o && typeof o != "string" ? o : i.create(
    e,
    i.Fragment,
    { children: o || void 0 },
    void 0
  );
}
function As(e, t, n) {
  if (t.type === "element")
    return fh(e, t, n);
  if (t.type === "mdxFlowExpression" || t.type === "mdxTextExpression")
    return ph(e, t);
  if (t.type === "mdxJsxFlowElement" || t.type === "mdxJsxTextElement")
    return gh(e, t, n);
  if (t.type === "mdxjsEsm")
    return hh(e, t);
  if (t.type === "root")
    return mh(e, t, n);
  if (t.type === "text")
    return bh(e, t);
}
function fh(e, t, n) {
  const r = e.schema;
  let i = r;
  t.tagName.toLowerCase() === "svg" && r.space === "html" && (i = mo, e.schema = i), e.ancestors.push(t);
  const o = ws(e, t.tagName, !1), u = Ch(e, t);
  let a = Co(e, t);
  return lh.has(t.tagName) && (a = a.filter(function(s) {
    return typeof s == "string" ? !Hp(s) : !0;
  })), Ss(e, u, o, t), Io(u, a), e.ancestors.pop(), e.schema = r, e.create(t, o, u, n);
}
function ph(e, t) {
  if (t.data && t.data.estree && e.evaluater) {
    const r = t.data.estree.body[0];
    return r.type, /** @type {Child | undefined} */
    e.evaluater.evaluateExpression(r.expression);
  }
  _n(e, t.position);
}
function hh(e, t) {
  if (t.data && t.data.estree && e.evaluater)
    return (
      /** @type {Child | undefined} */
      e.evaluater.evaluateProgram(t.data.estree)
    );
  _n(e, t.position);
}
function gh(e, t, n) {
  const r = e.schema;
  let i = r;
  t.name === "svg" && r.space === "html" && (i = mo, e.schema = i), e.ancestors.push(t);
  const o = t.name === null ? e.Fragment : ws(e, t.name, !0), u = vh(e, t), a = Co(e, t);
  return Ss(e, u, o, t), Io(u, a), e.ancestors.pop(), e.schema = r, e.create(t, o, u, n);
}
function mh(e, t, n) {
  const r = {};
  return Io(r, Co(e, t)), e.create(t, e.Fragment, r, n);
}
function bh(e, t) {
  return t.value;
}
function Ss(e, t, n, r) {
  typeof n != "string" && n !== e.Fragment && e.passNode && (t.node = r);
}
function Io(e, t) {
  if (t.length > 0) {
    const n = t.length > 1 ? t : t[0];
    n && (e.children = n);
  }
}
function yh(e, t, n) {
  return r;
  function r(i, o, u, a) {
    const l = Array.isArray(u.children) ? n : t;
    return a ? l(o, u, a) : l(o, u);
  }
}
function Ih(e, t) {
  return n;
  function n(r, i, o, u) {
    const a = Array.isArray(o.children), s = bo(r);
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
function Ch(e, t) {
  const n = {};
  let r, i;
  for (i in t.properties)
    if (i !== "children" && yo.call(t.properties, i)) {
      const o = xh(e, i, t.properties[i]);
      if (o) {
        const [u, a] = o;
        e.tableCellAlignToStyle && u === "align" && typeof a == "string" && ch.has(t.tagName) ? r = a : n[u] = a;
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
function vh(e, t) {
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
function Co(e, t) {
  const n = [];
  let r = -1;
  const i = e.passKeys ? /* @__PURE__ */ new Map() : uh;
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
    const a = As(e, o, u);
    a !== void 0 && n.push(a);
  }
  return n;
}
function xh(e, t, n) {
  const r = Up(e.schema, t);
  if (!(n == null || typeof n == "number" && Number.isNaN(n))) {
    if (Array.isArray(n) && (n = r.commaSeparated ? Np(n) : eh(n)), r.property === "style") {
      let i = typeof n == "object" ? n : Ah(e, String(n));
      return e.stylePropertyNameCase === "css" && (i = Sh(i)), ["style", i];
    }
    return [
      e.elementAttributeNameCase === "react" && r.space ? $p[r.property] || r.property : r.attribute,
      n
    ];
  }
}
function Ah(e, t) {
  const n = {};
  try {
    ih(t, r);
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
      throw u.file = e.filePath || void 0, u.url = xs + "#cannot-parse-style-attribute", u;
    }
  }
  return n;
  function r(i, o) {
    let u = i;
    u.slice(0, 2) !== "--" && (u.slice(0, 4) === "-ms-" && (u = "ms-" + u.slice(4)), u = u.replace(sh, Eh)), n[u] = o;
  }
}
function ws(e, t, n) {
  let r;
  if (!n)
    r = { type: "Literal", value: t };
  else if (t.includes(".")) {
    const i = t.split(".");
    let o = -1, u;
    for (; ++o < i.length; ) {
      const a = vu(i[o]) ? { type: "Identifier", name: i[o] } : { type: "Literal", value: i[o] };
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
    r = vu(t) && !/^[a-z]/.test(t) ? { type: "Identifier", name: t } : { type: "Literal", value: t };
  if (r.type === "Literal") {
    const i = (
      /** @type {keyof JSX.IntrinsicElements} */
      r.value
    );
    return yo.call(e.components, i) ? e.components[i] : i;
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
  throw n.file = e.filePath || void 0, n.url = xs + "#cannot-handle-mdx-estrees-without-createevaluater", n;
}
function Sh(e) {
  const t = {};
  let n;
  for (n in e)
    yo.call(e, n) && (t[wh(n)] = e[n]);
  return t;
}
function wh(e) {
  let t = e.replace(ah, Fh);
  return t.slice(0, 3) === "ms-" && (t = "-" + t), t;
}
function Eh(e, t) {
  return t.toUpperCase();
}
function Fh(e) {
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
}, Ph = {};
function Gh(e, t) {
  const n = Ph, r = typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0, i = typeof n.includeHtml == "boolean" ? n.includeHtml : !0;
  return Es(e, r, i);
}
function Es(e, t, n) {
  if (Rh(e)) {
    if ("value" in e)
      return e.type === "html" && !n ? "" : e.value;
    if (t && "alt" in e && e.alt)
      return e.alt;
    if ("children" in e)
      return Ru(e.children, t, n);
  }
  return Array.isArray(e) ? Ru(e, t, n) : "";
}
function Ru(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; )
    r[i] = Es(e[i], t, n);
  return r.join("");
}
function Rh(e) {
  return !!(e && typeof e == "object");
}
const ku = document.createElement("i");
function vo(e) {
  const t = "&" + e + ";";
  ku.innerHTML = t;
  const n = ku.textContent;
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
const Bu = {}.hasOwnProperty;
function kh(e) {
  const t = {};
  let n = -1;
  for (; ++n < e.length; )
    Bh(t, e[n]);
  return t;
}
function Bh(e, t) {
  let n;
  for (n in t) {
    const i = (Bu.call(e, n) ? e[n] : void 0) || (e[n] = {}), o = t[n];
    let u;
    if (o)
      for (u in o) {
        Bu.call(i, u) || (i[u] = []);
        const a = o[u];
        Oh(
          // @ts-expect-error Looks like a list.
          i[u],
          Array.isArray(a) ? a : a ? [a] : []
        );
      }
  }
}
function Oh(e, t) {
  let n = -1;
  const r = [];
  for (; ++n < t.length; )
    (t[n].add === "after" ? e : r).push(t[n]);
  mt(e, 0, 0, r);
}
function Fs(e, t) {
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
function pn(e) {
  return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const ht = Xt(/[A-Za-z]/), Je = Xt(/[\dA-Za-z]/), Th = Xt(/[#-'*+\--9=?A-Z^-~]/);
function _i(e) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    e !== null && (e < 32 || e === 127)
  );
}
const Ui = Xt(/\d/), Vh = Xt(/[\dA-Fa-f]/), Dh = Xt(/[!-/:-@[-`{-~]/);
function ee(e) {
  return e !== null && e < -2;
}
function He(e) {
  return e !== null && (e < 0 || e === 32);
}
function he(e) {
  return e === -2 || e === -1 || e === 32;
}
const Nh = Xt(new RegExp("\\p{P}|\\p{S}", "u")), Mh = Xt(/\s/);
function Xt(e) {
  return t;
  function t(n) {
    return n !== null && n > -1 && e.test(String.fromCharCode(n));
  }
}
function Rn(e) {
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
const Lh = {
  tokenize: Xh
};
function Xh(e) {
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
    return ee(a) ? (e.consume(a), e.exit("chunkText"), o) : (e.consume(a), u);
  }
}
const zh = {
  tokenize: Hh
}, Ou = {
  tokenize: Wh
};
function Hh(e) {
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
      t.containerState._closeFlow = void 0, i && x();
      const S = t.events.length;
      let P = S, w;
      for (; P--; )
        if (t.events[P][0] === "exit" && t.events[P][1].type === "chunkFlow") {
          w = t.events[P][1].end;
          break;
        }
      I(r);
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
        return C(E);
      t.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack);
    }
    return t.containerState = {}, e.check(Ou, c, d)(E);
  }
  function c(E) {
    return i && x(), I(r), p(E);
  }
  function d(E) {
    return t.parser.lazy[t.now().line] = r !== n.length, u = t.now().offset, C(E);
  }
  function p(E) {
    return t.containerState = {}, e.attempt(Ou, f, C)(E);
  }
  function f(E) {
    return r++, n.push([t.currentConstruct, t.containerState]), p(E);
  }
  function C(E) {
    if (E === null) {
      i && x(), I(0), e.consume(E);
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
      y(e.exit("chunkFlow"), !0), I(0), e.consume(E);
      return;
    }
    return ee(E) ? (e.consume(E), y(e.exit("chunkFlow")), r = 0, t.interrupt = void 0, a) : (e.consume(E), m);
  }
  function y(E, S) {
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
      let G = k, T, H;
      for (; G--; )
        if (t.events[G][0] === "exit" && t.events[G][1].type === "chunkFlow") {
          if (T) {
            H = t.events[G][1].end;
            break;
          }
          T = !0;
        }
      for (I(r), w = k; w < t.events.length; )
        t.events[w][1].end = {
          ...H
        }, w++;
      mt(t.events, G + 1, 0, t.events.slice(k)), t.events.length = w;
    }
  }
  function I(E) {
    let S = n.length;
    for (; S-- > E; ) {
      const P = n[S];
      t.containerState = P[1], P[0].exit.call(t, e);
    }
    n.length = E;
  }
  function x() {
    i.write([null]), o = void 0, i = void 0, t.containerState._closeFlow = void 0;
  }
}
function Wh(e, t, n) {
  return ye(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function Tu(e) {
  if (e === null || He(e) || Mh(e))
    return 1;
  if (Nh(e))
    return 2;
}
function xo(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; ) {
    const o = e[i].resolveAll;
    o && !r.includes(o) && (t = o(t, n), r.push(o));
  }
  return t;
}
const Qi = {
  name: "attention",
  resolveAll: Zh,
  tokenize: jh
};
function Zh(e, t) {
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
          Vu(d, -s), Vu(p, s), u = {
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
          }, l = [], e[r][1].end.offset - e[r][1].start.offset && (l = $e(l, [["enter", e[r][1], t], ["exit", e[r][1], t]])), l = $e(l, [["enter", i, t], ["enter", u, t], ["exit", u, t], ["enter", o, t]]), l = $e(l, xo(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t)), l = $e(l, [["exit", o, t], ["enter", a, t], ["exit", a, t], ["exit", i, t]]), e[n][1].end.offset - e[n][1].start.offset ? (c = 2, l = $e(l, [["enter", e[n][1], t], ["exit", e[n][1], t]])) : c = 0, mt(e, r - 1, n - r + 3, l), n = r + l.length - c - 2;
          break;
        }
    }
  for (n = -1; ++n < e.length; )
    e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
  return e;
}
function jh(e, t) {
  const n = this.parser.constructs.attentionMarkers.null, r = this.previous, i = Tu(r);
  let o;
  return u;
  function u(s) {
    return o = s, e.enter("attentionSequence"), a(s);
  }
  function a(s) {
    if (s === o)
      return e.consume(s), a;
    const l = e.exit("attentionSequence"), c = Tu(s), d = !c || c === 2 && i || n.includes(s), p = !i || i === 2 && c || n.includes(r);
    return l._open = !!(o === 42 ? d : d && (i || !p)), l._close = !!(o === 42 ? p : p && (c || !d)), t(s);
  }
}
function Vu(e, t) {
  e.column += t, e.offset += t, e._bufferIndex += t;
}
const Jh = {
  name: "autolink",
  tokenize: Yh
};
function Yh(e, t, n) {
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
    return f === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(f), e.exit("autolinkMarker"), e.exit("autolink"), t) : f === null || f === 32 || f === 60 || _i(f) ? n(f) : (e.consume(f), s);
  }
  function l(f) {
    return f === 64 ? (e.consume(f), c) : Th(f) ? (e.consume(f), l) : n(f);
  }
  function c(f) {
    return Je(f) ? d(f) : n(f);
  }
  function d(f) {
    return f === 46 ? (e.consume(f), r = 0, c) : f === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(f), e.exit("autolinkMarker"), e.exit("autolink"), t) : p(f);
  }
  function p(f) {
    if ((f === 45 || Je(f)) && r++ < 63) {
      const C = f === 45 ? p : d;
      return e.consume(f), C;
    }
    return n(f);
  }
}
const Hr = {
  partial: !0,
  tokenize: _h
};
function _h(e, t, n) {
  return r;
  function r(o) {
    return he(o) ? ye(e, i, "linePrefix")(o) : i(o);
  }
  function i(o) {
    return o === null || ee(o) ? t(o) : n(o);
  }
}
const Ps = {
  continuation: {
    tokenize: Qh
  },
  exit: qh,
  name: "blockQuote",
  tokenize: Uh
};
function Uh(e, t, n) {
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
function Qh(e, t, n) {
  const r = this;
  return i;
  function i(u) {
    return he(u) ? ye(e, o, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(u) : o(u);
  }
  function o(u) {
    return e.attempt(Ps, t, n)(u);
  }
}
function qh(e) {
  e.exit("blockQuote");
}
const Gs = {
  name: "characterEscape",
  tokenize: $h
};
function $h(e, t, n) {
  return r;
  function r(o) {
    return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(o), e.exit("escapeMarker"), i;
  }
  function i(o) {
    return Dh(o) ? (e.enter("characterEscapeValue"), e.consume(o), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(o);
  }
}
const Rs = {
  name: "characterReference",
  tokenize: Kh
};
function Kh(e, t, n) {
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
    return d === 88 || d === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(d), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), o = 6, u = Vh, c) : (e.enter("characterReferenceValue"), o = 7, u = Ui, c(d));
  }
  function c(d) {
    if (d === 59 && i) {
      const p = e.exit("characterReferenceValue");
      return u === Je && !vo(r.sliceSerialize(p)) ? n(d) : (e.enter("characterReferenceMarker"), e.consume(d), e.exit("characterReferenceMarker"), e.exit("characterReference"), t);
    }
    return u(d) && i++ < o ? (e.consume(d), c) : n(d);
  }
}
const Du = {
  partial: !0,
  tokenize: tg
}, Nu = {
  concrete: !0,
  name: "codeFenced",
  tokenize: eg
};
function eg(e, t, n) {
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
    return w === null || ee(w) ? (e.exit("codeFencedFence"), r.interrupt ? t(w) : e.check(Du, m, S)(w)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
      contentType: "string"
    }), p(w));
  }
  function p(w) {
    return w === null || ee(w) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), d(w)) : he(w) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), ye(e, f, "whitespace")(w)) : w === 96 && w === a ? n(w) : (e.consume(w), p);
  }
  function f(w) {
    return w === null || ee(w) ? d(w) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
      contentType: "string"
    }), C(w));
  }
  function C(w) {
    return w === null || ee(w) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), d(w)) : w === 96 && w === a ? n(w) : (e.consume(w), C);
  }
  function m(w) {
    return e.attempt(i, S, y)(w);
  }
  function y(w) {
    return e.enter("lineEnding"), e.consume(w), e.exit("lineEnding"), I;
  }
  function I(w) {
    return o > 0 && he(w) ? ye(e, x, "linePrefix", o + 1)(w) : x(w);
  }
  function x(w) {
    return w === null || ee(w) ? e.check(Du, m, S)(w) : (e.enter("codeFlowValue"), E(w));
  }
  function E(w) {
    return w === null || ee(w) ? (e.exit("codeFlowValue"), x(w)) : (e.consume(w), E);
  }
  function S(w) {
    return e.exit("codeFenced"), t(w);
  }
  function P(w, k, G) {
    let T = 0;
    return H;
    function H(M) {
      return w.enter("lineEnding"), w.consume(M), w.exit("lineEnding"), V;
    }
    function V(M) {
      return w.enter("codeFencedFence"), he(M) ? ye(w, B, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(M) : B(M);
    }
    function B(M) {
      return M === a ? (w.enter("codeFencedFenceSequence"), X(M)) : G(M);
    }
    function X(M) {
      return M === a ? (T++, w.consume(M), X) : T >= u ? (w.exit("codeFencedFenceSequence"), he(M) ? ye(w, L, "whitespace")(M) : L(M)) : G(M);
    }
    function L(M) {
      return M === null || ee(M) ? (w.exit("codeFencedFence"), k(M)) : G(M);
    }
  }
}
function tg(e, t, n) {
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
  tokenize: rg
}, ng = {
  partial: !0,
  tokenize: ig
};
function rg(e, t, n) {
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
    return l === null ? s(l) : ee(l) ? e.attempt(ng, u, s)(l) : (e.enter("codeFlowValue"), a(l));
  }
  function a(l) {
    return l === null || ee(l) ? (e.exit("codeFlowValue"), u(l)) : (e.consume(l), a);
  }
  function s(l) {
    return e.exit("codeIndented"), t(l);
  }
}
function ig(e, t, n) {
  const r = this;
  return i;
  function i(u) {
    return r.parser.lazy[r.now().line] ? n(u) : ee(u) ? (e.enter("lineEnding"), e.consume(u), e.exit("lineEnding"), i) : ye(e, o, "linePrefix", 5)(u);
  }
  function o(u) {
    const a = r.events[r.events.length - 1];
    return a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(u) : ee(u) ? i(u) : n(u);
  }
}
const og = {
  name: "codeText",
  previous: ag,
  resolve: ug,
  tokenize: sg
};
function ug(e) {
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
function ag(e) {
  return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function sg(e, t, n) {
  let r = 0, i, o;
  return u;
  function u(d) {
    return e.enter("codeText"), e.enter("codeTextSequence"), a(d);
  }
  function a(d) {
    return d === 96 ? (e.consume(d), r++, a) : (e.exit("codeTextSequence"), s(d));
  }
  function s(d) {
    return d === null ? n(d) : d === 32 ? (e.enter("space"), e.consume(d), e.exit("space"), s) : d === 96 ? (o = e.enter("codeTextSequence"), i = 0, c(d)) : ee(d) ? (e.enter("lineEnding"), e.consume(d), e.exit("lineEnding"), s) : (e.enter("codeTextData"), l(d));
  }
  function l(d) {
    return d === null || d === 32 || d === 96 || ee(d) ? (e.exit("codeTextData"), s(d)) : (e.consume(d), l);
  }
  function c(d) {
    return d === 96 ? (e.consume(d), i++, c) : i === r ? (e.exit("codeTextSequence"), e.exit("codeText"), t(d)) : (o.type = "codeTextData", l(d));
  }
}
class lg {
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
    return r && Nn(this.left, r), o.reverse();
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
    this.setCursor(Number.POSITIVE_INFINITY), Nn(this.left, t);
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
    this.setCursor(0), Nn(this.right, t.reverse());
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
        Nn(this.right, n.reverse());
      } else {
        const n = this.right.splice(this.left.length + this.right.length - t, Number.POSITIVE_INFINITY);
        Nn(this.left, n.reverse());
      }
  }
}
function Nn(e, t) {
  let n = 0;
  if (t.length < 1e4)
    e.push(...t);
  else
    for (; n < t.length; )
      e.push(...t.slice(n, n + 1e4)), n += 1e4;
}
function ks(e) {
  const t = {};
  let n = -1, r, i, o, u, a, s, l;
  const c = new lg(e);
  for (; ++n < c.length; ) {
    for (; n in t; )
      n = t[n];
    if (r = c.get(n), n && r[1].type === "chunkFlow" && c.get(n - 1)[1].type === "listItemPrefix" && (s = r[1]._tokenizer.events, o = 0, o < s.length && s[o][1].type === "lineEndingBlank" && (o += 2), o < s.length && s[o][1].type === "content"))
      for (; ++o < s.length && s[o][1].type !== "content"; )
        s[o][1].type === "chunkText" && (s[o][1]._isInFirstContentOfListItem = !0, o++);
    if (r[0] === "enter")
      r[1].contentType && (Object.assign(t, cg(c, n)), n = t[n], l = !0);
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
function cg(e, t) {
  const n = e.get(t)[1], r = e.get(t)[2];
  let i = t - 1;
  const o = [], u = n._tokenizer || r.parser[n.contentType](n.start), a = u.events, s = [], l = {};
  let c, d, p = -1, f = n, C = 0, m = 0;
  const y = [m];
  for (; f; ) {
    for (; e.get(++i)[1] !== f; )
      ;
    o.push(i), f._tokenizer || (c = r.sliceStream(f), f.next || c.push(null), d && u.defineSkip(f.start), f._isInFirstContentOfListItem && (u._gfmTasklistFirstContentOfListItem = !0), u.write(c), f._isInFirstContentOfListItem && (u._gfmTasklistFirstContentOfListItem = void 0)), d = f, f = f.next;
  }
  for (f = n; ++p < a.length; )
    // Find a void token that includes a break.
    a[p][0] === "exit" && a[p - 1][0] === "enter" && a[p][1].type === a[p - 1][1].type && a[p][1].start.line !== a[p][1].end.line && (m = p + 1, y.push(m), f._tokenizer = void 0, f.previous = void 0, f = f.next);
  for (u.events = [], f ? (f._tokenizer = void 0, f.previous = void 0) : y.pop(), p = y.length; p--; ) {
    const I = a.slice(y[p], y[p + 1]), x = o.pop();
    s.push([x, x + I.length - 1]), e.splice(x, 2, I);
  }
  for (s.reverse(), p = -1; ++p < s.length; )
    l[C + s[p][0]] = C + s[p][1], C += s[p][1] - s[p][0] - 1;
  return l;
}
const dg = {
  resolve: pg,
  tokenize: hg
}, fg = {
  partial: !0,
  tokenize: gg
};
function pg(e) {
  return ks(e), e;
}
function hg(e, t) {
  let n;
  return r;
  function r(a) {
    return e.enter("content"), n = e.enter("chunkContent", {
      contentType: "content"
    }), i(a);
  }
  function i(a) {
    return a === null ? o(a) : ee(a) ? e.check(fg, u, o)(a) : (e.consume(a), i);
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
function gg(e, t, n) {
  const r = this;
  return i;
  function i(u) {
    return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(u), e.exit("lineEnding"), ye(e, o, "linePrefix");
  }
  function o(u) {
    if (u === null || ee(u))
      return n(u);
    const a = r.events[r.events.length - 1];
    return !r.parser.constructs.disable.null.includes("codeIndented") && a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(u) : e.interrupt(r.parser.constructs.flow, n, t)(u);
  }
}
function Bs(e, t, n, r, i, o, u, a, s) {
  const l = s || Number.POSITIVE_INFINITY;
  let c = 0;
  return d;
  function d(I) {
    return I === 60 ? (e.enter(r), e.enter(i), e.enter(o), e.consume(I), e.exit(o), p) : I === null || I === 32 || I === 41 || _i(I) ? n(I) : (e.enter(r), e.enter(u), e.enter(a), e.enter("chunkString", {
      contentType: "string"
    }), m(I));
  }
  function p(I) {
    return I === 62 ? (e.enter(o), e.consume(I), e.exit(o), e.exit(i), e.exit(r), t) : (e.enter(a), e.enter("chunkString", {
      contentType: "string"
    }), f(I));
  }
  function f(I) {
    return I === 62 ? (e.exit("chunkString"), e.exit(a), p(I)) : I === null || I === 60 || ee(I) ? n(I) : (e.consume(I), I === 92 ? C : f);
  }
  function C(I) {
    return I === 60 || I === 62 || I === 92 ? (e.consume(I), f) : f(I);
  }
  function m(I) {
    return !c && (I === null || I === 41 || He(I)) ? (e.exit("chunkString"), e.exit(a), e.exit(u), e.exit(r), t(I)) : c < l && I === 40 ? (e.consume(I), c++, m) : I === 41 ? (e.consume(I), c--, m) : I === null || I === 32 || I === 40 || _i(I) ? n(I) : (e.consume(I), I === 92 ? y : m);
  }
  function y(I) {
    return I === 40 || I === 41 || I === 92 ? (e.consume(I), m) : m(I);
  }
}
function Os(e, t, n, r, i, o) {
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
    f === 94 && !a && "_hiddenFootnoteSupport" in u.parser.constructs ? n(f) : f === 93 ? (e.exit(o), e.enter(i), e.consume(f), e.exit(i), e.exit(r), t) : ee(f) ? (e.enter("lineEnding"), e.consume(f), e.exit("lineEnding"), c) : (e.enter("chunkString", {
      contentType: "string"
    }), d(f));
  }
  function d(f) {
    return f === null || f === 91 || f === 93 || ee(f) || a++ > 999 ? (e.exit("chunkString"), c(f)) : (e.consume(f), s || (s = !he(f)), f === 92 ? p : d);
  }
  function p(f) {
    return f === 91 || f === 92 || f === 93 ? (e.consume(f), a++, d) : d(f);
  }
}
function Ts(e, t, n, r, i, o) {
  let u;
  return a;
  function a(p) {
    return p === 34 || p === 39 || p === 40 ? (e.enter(r), e.enter(i), e.consume(p), e.exit(i), u = p === 40 ? 41 : p, s) : n(p);
  }
  function s(p) {
    return p === u ? (e.enter(i), e.consume(p), e.exit(i), e.exit(r), t) : (e.enter(o), l(p));
  }
  function l(p) {
    return p === u ? (e.exit(o), s(u)) : p === null ? n(p) : ee(p) ? (e.enter("lineEnding"), e.consume(p), e.exit("lineEnding"), ye(e, l, "linePrefix")) : (e.enter("chunkString", {
      contentType: "string"
    }), c(p));
  }
  function c(p) {
    return p === u || p === null || ee(p) ? (e.exit("chunkString"), l(p)) : (e.consume(p), p === 92 ? d : c);
  }
  function d(p) {
    return p === u || p === 92 ? (e.consume(p), c) : c(p);
  }
}
function jn(e, t) {
  let n;
  return r;
  function r(i) {
    return ee(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), n = !0, r) : he(i) ? ye(e, r, n ? "linePrefix" : "lineSuffix")(i) : t(i);
  }
}
const mg = {
  name: "definition",
  tokenize: yg
}, bg = {
  partial: !0,
  tokenize: Ig
};
function yg(e, t, n) {
  const r = this;
  let i;
  return o;
  function o(f) {
    return e.enter("definition"), u(f);
  }
  function u(f) {
    return Os.call(
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
    return i = pn(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), f === 58 ? (e.enter("definitionMarker"), e.consume(f), e.exit("definitionMarker"), s) : n(f);
  }
  function s(f) {
    return He(f) ? jn(e, l)(f) : l(f);
  }
  function l(f) {
    return Bs(
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
    return e.attempt(bg, d, d)(f);
  }
  function d(f) {
    return he(f) ? ye(e, p, "whitespace")(f) : p(f);
  }
  function p(f) {
    return f === null || ee(f) ? (e.exit("definition"), r.parser.defined.push(i), t(f)) : n(f);
  }
}
function Ig(e, t, n) {
  return r;
  function r(a) {
    return He(a) ? jn(e, i)(a) : n(a);
  }
  function i(a) {
    return Ts(e, o, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(a);
  }
  function o(a) {
    return he(a) ? ye(e, u, "whitespace")(a) : u(a);
  }
  function u(a) {
    return a === null || ee(a) ? t(a) : n(a);
  }
}
const Cg = {
  name: "hardBreakEscape",
  tokenize: vg
};
function vg(e, t, n) {
  return r;
  function r(o) {
    return e.enter("hardBreakEscape"), e.consume(o), i;
  }
  function i(o) {
    return ee(o) ? (e.exit("hardBreakEscape"), t(o)) : n(o);
  }
}
const xg = {
  name: "headingAtx",
  resolve: Ag,
  tokenize: Sg
};
function Ag(e, t) {
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
function Sg(e, t, n) {
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
    return c === 35 ? (e.enter("atxHeadingSequence"), s(c)) : c === null || ee(c) ? (e.exit("atxHeading"), t(c)) : he(c) ? ye(e, a, "whitespace")(c) : (e.enter("atxHeadingText"), l(c));
  }
  function s(c) {
    return c === 35 ? (e.consume(c), s) : (e.exit("atxHeadingSequence"), a(c));
  }
  function l(c) {
    return c === null || c === 35 || He(c) ? (e.exit("atxHeadingText"), a(c)) : (e.consume(c), l);
  }
}
const wg = [
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
], Mu = ["pre", "script", "style", "textarea"], Eg = {
  concrete: !0,
  name: "htmlFlow",
  resolveTo: Gg,
  tokenize: Rg
}, Fg = {
  partial: !0,
  tokenize: Bg
}, Pg = {
  partial: !0,
  tokenize: kg
};
function Gg(e) {
  let t = e.length;
  for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"); )
    ;
  return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
}
function Rg(e, t, n) {
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
    return g === 33 ? (e.consume(g), p) : g === 47 ? (e.consume(g), o = !0, m) : g === 63 ? (e.consume(g), i = 3, r.interrupt ? t : b) : ht(g) ? (e.consume(g), u = String.fromCharCode(g), y) : n(g);
  }
  function p(g) {
    return g === 45 ? (e.consume(g), i = 2, f) : g === 91 ? (e.consume(g), i = 5, a = 0, C) : ht(g) ? (e.consume(g), i = 4, r.interrupt ? t : b) : n(g);
  }
  function f(g) {
    return g === 45 ? (e.consume(g), r.interrupt ? t : b) : n(g);
  }
  function C(g) {
    const pe = "CDATA[";
    return g === pe.charCodeAt(a++) ? (e.consume(g), a === pe.length ? r.interrupt ? t : B : C) : n(g);
  }
  function m(g) {
    return ht(g) ? (e.consume(g), u = String.fromCharCode(g), y) : n(g);
  }
  function y(g) {
    if (g === null || g === 47 || g === 62 || He(g)) {
      const pe = g === 47, te = u.toLowerCase();
      return !pe && !o && Mu.includes(te) ? (i = 1, r.interrupt ? t(g) : B(g)) : wg.includes(u.toLowerCase()) ? (i = 6, pe ? (e.consume(g), I) : r.interrupt ? t(g) : B(g)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(g) : o ? x(g) : E(g));
    }
    return g === 45 || Je(g) ? (e.consume(g), u += String.fromCharCode(g), y) : n(g);
  }
  function I(g) {
    return g === 62 ? (e.consume(g), r.interrupt ? t : B) : n(g);
  }
  function x(g) {
    return he(g) ? (e.consume(g), x) : H(g);
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
    return g === null || g === 60 || g === 61 || g === 62 || g === 96 ? n(g) : g === 34 || g === 39 ? (e.consume(g), s = g, k) : he(g) ? (e.consume(g), w) : G(g);
  }
  function k(g) {
    return g === s ? (e.consume(g), s = null, T) : g === null || ee(g) ? n(g) : (e.consume(g), k);
  }
  function G(g) {
    return g === null || g === 34 || g === 39 || g === 47 || g === 60 || g === 61 || g === 62 || g === 96 || He(g) ? P(g) : (e.consume(g), G);
  }
  function T(g) {
    return g === 47 || g === 62 || he(g) ? E(g) : n(g);
  }
  function H(g) {
    return g === 62 ? (e.consume(g), V) : n(g);
  }
  function V(g) {
    return g === null || ee(g) ? B(g) : he(g) ? (e.consume(g), V) : n(g);
  }
  function B(g) {
    return g === 45 && i === 2 ? (e.consume(g), _) : g === 60 && i === 1 ? (e.consume(g), Q) : g === 62 && i === 4 ? (e.consume(g), Ce) : g === 63 && i === 3 ? (e.consume(g), b) : g === 93 && i === 5 ? (e.consume(g), me) : ee(g) && (i === 6 || i === 7) ? (e.exit("htmlFlowData"), e.check(Fg, ae, X)(g)) : g === null || ee(g) ? (e.exit("htmlFlowData"), X(g)) : (e.consume(g), B);
  }
  function X(g) {
    return e.check(Pg, L, ae)(g);
  }
  function L(g) {
    return e.enter("lineEnding"), e.consume(g), e.exit("lineEnding"), M;
  }
  function M(g) {
    return g === null || ee(g) ? X(g) : (e.enter("htmlFlowData"), B(g));
  }
  function _(g) {
    return g === 45 ? (e.consume(g), b) : B(g);
  }
  function Q(g) {
    return g === 47 ? (e.consume(g), u = "", se) : B(g);
  }
  function se(g) {
    if (g === 62) {
      const pe = u.toLowerCase();
      return Mu.includes(pe) ? (e.consume(g), Ce) : B(g);
    }
    return ht(g) && u.length < 8 ? (e.consume(g), u += String.fromCharCode(g), se) : B(g);
  }
  function me(g) {
    return g === 93 ? (e.consume(g), b) : B(g);
  }
  function b(g) {
    return g === 62 ? (e.consume(g), Ce) : g === 45 && i === 2 ? (e.consume(g), b) : B(g);
  }
  function Ce(g) {
    return g === null || ee(g) ? (e.exit("htmlFlowData"), ae(g)) : (e.consume(g), Ce);
  }
  function ae(g) {
    return e.exit("htmlFlow"), t(g);
  }
}
function kg(e, t, n) {
  const r = this;
  return i;
  function i(u) {
    return ee(u) ? (e.enter("lineEnding"), e.consume(u), e.exit("lineEnding"), o) : n(u);
  }
  function o(u) {
    return r.parser.lazy[r.now().line] ? n(u) : t(u);
  }
}
function Bg(e, t, n) {
  return r;
  function r(i) {
    return e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), e.attempt(Hr, t, n);
  }
}
const Og = {
  name: "htmlText",
  tokenize: Tg
};
function Tg(e, t, n) {
  const r = this;
  let i, o, u;
  return a;
  function a(b) {
    return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(b), s;
  }
  function s(b) {
    return b === 33 ? (e.consume(b), l) : b === 47 ? (e.consume(b), P) : b === 63 ? (e.consume(b), E) : ht(b) ? (e.consume(b), G) : n(b);
  }
  function l(b) {
    return b === 45 ? (e.consume(b), c) : b === 91 ? (e.consume(b), o = 0, C) : ht(b) ? (e.consume(b), x) : n(b);
  }
  function c(b) {
    return b === 45 ? (e.consume(b), f) : n(b);
  }
  function d(b) {
    return b === null ? n(b) : b === 45 ? (e.consume(b), p) : ee(b) ? (u = d, Q(b)) : (e.consume(b), d);
  }
  function p(b) {
    return b === 45 ? (e.consume(b), f) : d(b);
  }
  function f(b) {
    return b === 62 ? _(b) : b === 45 ? p(b) : d(b);
  }
  function C(b) {
    const Ce = "CDATA[";
    return b === Ce.charCodeAt(o++) ? (e.consume(b), o === Ce.length ? m : C) : n(b);
  }
  function m(b) {
    return b === null ? n(b) : b === 93 ? (e.consume(b), y) : ee(b) ? (u = m, Q(b)) : (e.consume(b), m);
  }
  function y(b) {
    return b === 93 ? (e.consume(b), I) : m(b);
  }
  function I(b) {
    return b === 62 ? _(b) : b === 93 ? (e.consume(b), I) : m(b);
  }
  function x(b) {
    return b === null || b === 62 ? _(b) : ee(b) ? (u = x, Q(b)) : (e.consume(b), x);
  }
  function E(b) {
    return b === null ? n(b) : b === 63 ? (e.consume(b), S) : ee(b) ? (u = E, Q(b)) : (e.consume(b), E);
  }
  function S(b) {
    return b === 62 ? _(b) : E(b);
  }
  function P(b) {
    return ht(b) ? (e.consume(b), w) : n(b);
  }
  function w(b) {
    return b === 45 || Je(b) ? (e.consume(b), w) : k(b);
  }
  function k(b) {
    return ee(b) ? (u = k, Q(b)) : he(b) ? (e.consume(b), k) : _(b);
  }
  function G(b) {
    return b === 45 || Je(b) ? (e.consume(b), G) : b === 47 || b === 62 || He(b) ? T(b) : n(b);
  }
  function T(b) {
    return b === 47 ? (e.consume(b), _) : b === 58 || b === 95 || ht(b) ? (e.consume(b), H) : ee(b) ? (u = T, Q(b)) : he(b) ? (e.consume(b), T) : _(b);
  }
  function H(b) {
    return b === 45 || b === 46 || b === 58 || b === 95 || Je(b) ? (e.consume(b), H) : V(b);
  }
  function V(b) {
    return b === 61 ? (e.consume(b), B) : ee(b) ? (u = V, Q(b)) : he(b) ? (e.consume(b), V) : T(b);
  }
  function B(b) {
    return b === null || b === 60 || b === 61 || b === 62 || b === 96 ? n(b) : b === 34 || b === 39 ? (e.consume(b), i = b, X) : ee(b) ? (u = B, Q(b)) : he(b) ? (e.consume(b), B) : (e.consume(b), L);
  }
  function X(b) {
    return b === i ? (e.consume(b), i = void 0, M) : b === null ? n(b) : ee(b) ? (u = X, Q(b)) : (e.consume(b), X);
  }
  function L(b) {
    return b === null || b === 34 || b === 39 || b === 60 || b === 61 || b === 96 ? n(b) : b === 47 || b === 62 || He(b) ? T(b) : (e.consume(b), L);
  }
  function M(b) {
    return b === 47 || b === 62 || He(b) ? T(b) : n(b);
  }
  function _(b) {
    return b === 62 ? (e.consume(b), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(b);
  }
  function Q(b) {
    return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(b), e.exit("lineEnding"), se;
  }
  function se(b) {
    return he(b) ? ye(e, me, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(b) : me(b);
  }
  function me(b) {
    return e.enter("htmlTextData"), u(b);
  }
}
const Ao = {
  name: "labelEnd",
  resolveAll: Mg,
  resolveTo: Lg,
  tokenize: Xg
}, Vg = {
  tokenize: zg
}, Dg = {
  tokenize: Hg
}, Ng = {
  tokenize: Wg
};
function Mg(e) {
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
function Lg(e, t) {
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
  return a = [["enter", s, t], ["enter", l, t]], a = $e(a, e.slice(o + 1, o + r + 3)), a = $e(a, [["enter", c, t]]), a = $e(a, xo(t.parser.constructs.insideSpan.null, e.slice(o + r + 4, u - 3), t)), a = $e(a, [["exit", c, t], e[u - 2], e[u - 1], ["exit", l, t]]), a = $e(a, e.slice(u + 1)), a = $e(a, [["exit", s, t]]), mt(e, o, e.length, a), e;
}
function Xg(e, t, n) {
  const r = this;
  let i = r.events.length, o, u;
  for (; i--; )
    if ((r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") && !r.events[i][1]._balanced) {
      o = r.events[i][1];
      break;
    }
  return a;
  function a(p) {
    return o ? o._inactive ? d(p) : (u = r.parser.defined.includes(pn(r.sliceSerialize({
      start: o.end,
      end: r.now()
    }))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(p), e.exit("labelMarker"), e.exit("labelEnd"), s) : n(p);
  }
  function s(p) {
    return p === 40 ? e.attempt(Vg, c, u ? c : d)(p) : p === 91 ? e.attempt(Dg, c, u ? l : d)(p) : u ? c(p) : d(p);
  }
  function l(p) {
    return e.attempt(Ng, c, d)(p);
  }
  function c(p) {
    return t(p);
  }
  function d(p) {
    return o._balanced = !0, n(p);
  }
}
function zg(e, t, n) {
  return r;
  function r(d) {
    return e.enter("resource"), e.enter("resourceMarker"), e.consume(d), e.exit("resourceMarker"), i;
  }
  function i(d) {
    return He(d) ? jn(e, o)(d) : o(d);
  }
  function o(d) {
    return d === 41 ? c(d) : Bs(e, u, a, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(d);
  }
  function u(d) {
    return He(d) ? jn(e, s)(d) : c(d);
  }
  function a(d) {
    return n(d);
  }
  function s(d) {
    return d === 34 || d === 39 || d === 40 ? Ts(e, l, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(d) : c(d);
  }
  function l(d) {
    return He(d) ? jn(e, c)(d) : c(d);
  }
  function c(d) {
    return d === 41 ? (e.enter("resourceMarker"), e.consume(d), e.exit("resourceMarker"), e.exit("resource"), t) : n(d);
  }
}
function Hg(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return Os.call(r, e, o, u, "reference", "referenceMarker", "referenceString")(a);
  }
  function o(a) {
    return r.parser.defined.includes(pn(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(a) : n(a);
  }
  function u(a) {
    return n(a);
  }
}
function Wg(e, t, n) {
  return r;
  function r(o) {
    return e.enter("reference"), e.enter("referenceMarker"), e.consume(o), e.exit("referenceMarker"), i;
  }
  function i(o) {
    return o === 93 ? (e.enter("referenceMarker"), e.consume(o), e.exit("referenceMarker"), e.exit("reference"), t) : n(o);
  }
}
const Zg = {
  name: "labelStartImage",
  resolveAll: Ao.resolveAll,
  tokenize: jg
};
function jg(e, t, n) {
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
const Jg = {
  name: "labelStartLink",
  resolveAll: Ao.resolveAll,
  tokenize: Yg
};
function Yg(e, t, n) {
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
  tokenize: _g
};
function _g(e, t) {
  return n;
  function n(r) {
    return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), ye(e, t, "linePrefix");
  }
}
const wr = {
  name: "thematicBreak",
  tokenize: Ug
};
function Ug(e, t, n) {
  let r = 0, i;
  return o;
  function o(l) {
    return e.enter("thematicBreak"), u(l);
  }
  function u(l) {
    return i = l, a(l);
  }
  function a(l) {
    return l === i ? (e.enter("thematicBreakSequence"), s(l)) : r >= 3 && (l === null || ee(l)) ? (e.exit("thematicBreak"), t(l)) : n(l);
  }
  function s(l) {
    return l === i ? (e.consume(l), r++, s) : (e.exit("thematicBreakSequence"), he(l) ? ye(e, a, "whitespace")(l) : a(l));
  }
}
const Xe = {
  continuation: {
    tokenize: Kg
  },
  exit: tm,
  name: "list",
  tokenize: $g
}, Qg = {
  partial: !0,
  tokenize: nm
}, qg = {
  partial: !0,
  tokenize: em
};
function $g(e, t, n) {
  const r = this, i = r.events[r.events.length - 1];
  let o = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0, u = 0;
  return a;
  function a(f) {
    const C = r.containerState.type || (f === 42 || f === 43 || f === 45 ? "listUnordered" : "listOrdered");
    if (C === "listUnordered" ? !r.containerState.marker || f === r.containerState.marker : Ui(f)) {
      if (r.containerState.type || (r.containerState.type = C, e.enter(C, {
        _container: !0
      })), C === "listUnordered")
        return e.enter("listItemPrefix"), f === 42 || f === 45 ? e.check(wr, n, l)(f) : l(f);
      if (!r.interrupt || f === 49)
        return e.enter("listItemPrefix"), e.enter("listItemValue"), s(f);
    }
    return n(f);
  }
  function s(f) {
    return Ui(f) && ++u < 10 ? (e.consume(f), s) : (!r.interrupt || u < 2) && (r.containerState.marker ? f === r.containerState.marker : f === 41 || f === 46) ? (e.exit("listItemValue"), l(f)) : n(f);
  }
  function l(f) {
    return e.enter("listItemMarker"), e.consume(f), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || f, e.check(
      Hr,
      // Can’t be empty when interrupting.
      r.interrupt ? n : c,
      e.attempt(Qg, p, d)
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
function Kg(e, t, n) {
  const r = this;
  return r.containerState._closeFlow = void 0, e.check(Hr, i, o);
  function i(a) {
    return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, ye(e, t, "listItemIndent", r.containerState.size + 1)(a);
  }
  function o(a) {
    return r.containerState.furtherBlankLines || !he(a) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, u(a)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(qg, t, u)(a));
  }
  function u(a) {
    return r.containerState._closeFlow = !0, r.interrupt = void 0, ye(e, e.attempt(Xe, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(a);
  }
}
function em(e, t, n) {
  const r = this;
  return ye(e, i, "listItemIndent", r.containerState.size + 1);
  function i(o) {
    const u = r.events[r.events.length - 1];
    return u && u[1].type === "listItemIndent" && u[2].sliceSerialize(u[1], !0).length === r.containerState.size ? t(o) : n(o);
  }
}
function tm(e) {
  e.exit(this.containerState.type);
}
function nm(e, t, n) {
  const r = this;
  return ye(e, i, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
  function i(o) {
    const u = r.events[r.events.length - 1];
    return !he(o) && u && u[1].type === "listItemPrefixWhitespace" ? t(o) : n(o);
  }
}
const Lu = {
  name: "setextUnderline",
  resolveTo: rm,
  tokenize: im
};
function rm(e, t) {
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
function im(e, t, n) {
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
    return l === null || ee(l) ? (e.exit("setextHeadingLine"), t(l)) : n(l);
  }
}
const om = {
  tokenize: um
};
function um(e) {
  const t = this, n = e.attempt(
    // Try to parse a blank line.
    Hr,
    r,
    // Try to parse initial flow (essentially, only code).
    e.attempt(this.parser.constructs.flowInitial, i, ye(e, e.attempt(this.parser.constructs.flow, i, e.attempt(dg, i)), "linePrefix"))
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
const am = {
  resolveAll: Ds()
}, sm = Vs("string"), lm = Vs("text");
function Vs(e) {
  return {
    resolveAll: Ds(e === "text" ? cm : void 0),
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
function Ds(e) {
  return t;
  function t(n, r) {
    let i = -1, o;
    for (; ++i <= n.length; )
      o === void 0 ? n[i] && n[i][1].type === "data" && (o = i, i++) : (!n[i] || n[i][1].type !== "data") && (i !== o + 2 && (n[o][1].end = n[i - 1][1].end, n.splice(o + 2, i - o - 2), i = o + 2), o = void 0);
    return e ? e(n, r) : n;
  }
}
function cm(e, t) {
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
const dm = {
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
  62: Ps
}, fm = {
  91: mg
}, pm = {
  [-2]: pi,
  [-1]: pi,
  32: pi
}, hm = {
  35: xg,
  42: wr,
  45: [Lu, wr],
  60: Eg,
  61: Lu,
  95: wr,
  96: Nu,
  126: Nu
}, gm = {
  38: Rs,
  92: Gs
}, mm = {
  [-5]: hi,
  [-4]: hi,
  [-3]: hi,
  33: Zg,
  38: Rs,
  42: Qi,
  60: [Jh, Og],
  91: Jg,
  92: [Cg, Gs],
  93: Ao,
  95: Qi,
  96: og
}, bm = {
  null: [Qi, am]
}, ym = {
  null: [42, 95]
}, Im = {
  null: []
}, Cm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  attentionMarkers: ym,
  contentInitial: fm,
  disable: Im,
  document: dm,
  flow: hm,
  flowInitial: pm,
  insideSpan: bm,
  string: gm,
  text: mm
}, Symbol.toStringTag, { value: "Module" }));
function vm(e, t, n) {
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
    consume: x,
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
    now: C,
    parser: e,
    previous: null,
    sliceSerialize: p,
    sliceStream: f,
    write: d
  };
  let c = t.tokenize.call(l, s);
  return t.resolveAll && o.push(t), l;
  function d(V) {
    return u = $e(u, V), y(), u[u.length - 1] !== null ? [] : (G(t, 0), l.events = xo(o, l.events, l), l.events);
  }
  function p(V, B) {
    return Am(f(V), B);
  }
  function f(V) {
    return xm(u, V);
  }
  function C() {
    const {
      _bufferIndex: V,
      _index: B,
      line: X,
      column: L,
      offset: M
    } = r;
    return {
      _bufferIndex: V,
      _index: B,
      line: X,
      column: L,
      offset: M
    };
  }
  function m(V) {
    i[V.line] = V.column, H();
  }
  function y() {
    let V;
    for (; r._index < u.length; ) {
      const B = u[r._index];
      if (typeof B == "string")
        for (V = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === V && r._bufferIndex < B.length; )
          I(B.charCodeAt(r._bufferIndex));
      else
        I(B);
    }
  }
  function I(V) {
    c = c(V);
  }
  function x(V) {
    ee(V) ? (r.line++, r.column = 1, r.offset += V === -3 ? 2 : 1, H()) : V !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === // Points w/ non-negative `_bufferIndex` reference
    // strings.
    /** @type {string} */
    u[r._index].length && (r._bufferIndex = -1, r._index++)), l.previous = V;
  }
  function E(V, B) {
    const X = B || {};
    return X.type = V, X.start = C(), l.events.push(["enter", X, l]), a.push(X), X;
  }
  function S(V) {
    const B = a.pop();
    return B.end = C(), l.events.push(["exit", B, l]), B;
  }
  function P(V, B) {
    G(V, B.from);
  }
  function w(V, B) {
    B.restore();
  }
  function k(V, B) {
    return X;
    function X(L, M, _) {
      let Q, se, me, b;
      return Array.isArray(L) ? (
        /* c8 ignore next 1 */
        ae(L)
      ) : "tokenize" in L ? (
        // Looks like a construct.
        ae([
          /** @type {Construct} */
          L
        ])
      ) : Ce(L);
      function Ce(de) {
        return Fe;
        function Fe(N) {
          const Z = N !== null && de[N], q = N !== null && de.null, fe = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(Z) ? Z : Z ? [Z] : [],
            ...Array.isArray(q) ? q : q ? [q] : []
          ];
          return ae(fe)(N);
        }
      }
      function ae(de) {
        return Q = de, se = 0, de.length === 0 ? _ : g(de[se]);
      }
      function g(de) {
        return Fe;
        function Fe(N) {
          return b = T(), me = de, de.partial || (l.currentConstruct = de), de.name && l.parser.constructs.disable.null.includes(de.name) ? te() : de.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            B ? Object.assign(Object.create(l), B) : l,
            s,
            pe,
            te
          )(N);
        }
      }
      function pe(de) {
        return V(me, b), M;
      }
      function te(de) {
        return b.restore(), ++se < Q.length ? g(Q[se]) : _;
      }
    }
  }
  function G(V, B) {
    V.resolveAll && !o.includes(V) && o.push(V), V.resolve && mt(l.events, B, l.events.length - B, V.resolve(l.events.slice(B), l)), V.resolveTo && (l.events = V.resolveTo(l.events, l));
  }
  function T() {
    const V = C(), B = l.previous, X = l.currentConstruct, L = l.events.length, M = Array.from(a);
    return {
      from: L,
      restore: _
    };
    function _() {
      r = V, l.previous = B, l.currentConstruct = X, l.events.length = L, a = M, H();
    }
  }
  function H() {
    r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1);
  }
}
function xm(e, t) {
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
function Am(e, t) {
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
function Sm(e) {
  const r = {
    constructs: (
      /** @type {FullNormalizedExtension} */
      kh([Cm, ...(e || {}).extensions || []])
    ),
    content: i(Lh),
    defined: [],
    document: i(zh),
    flow: i(om),
    lazy: {},
    string: i(sm),
    text: i(lm)
  };
  return r;
  function i(o) {
    return u;
    function u(a) {
      return vm(r, o, a);
    }
  }
}
function wm(e) {
  for (; !ks(e); )
    ;
  return e;
}
const Xu = /[\0\t\n\r]/g;
function Em() {
  let e = 1, t = "", n = !0, r;
  return i;
  function i(o, u, a) {
    const s = [];
    let l, c, d, p, f;
    for (o = t + (typeof o == "string" ? o.toString() : new TextDecoder(u || void 0).decode(o)), d = 0, t = "", n && (o.charCodeAt(0) === 65279 && d++, n = void 0); d < o.length; ) {
      if (Xu.lastIndex = d, l = Xu.exec(o), p = l && l.index !== void 0 ? l.index : o.length, f = o.charCodeAt(p), !l) {
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
const Fm = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function Pm(e) {
  return e.replace(Fm, Gm);
}
function Gm(e, t, n) {
  if (t)
    return t;
  if (n.charCodeAt(0) === 35) {
    const i = n.charCodeAt(1), o = i === 120 || i === 88;
    return Fs(n.slice(o ? 2 : 1), o ? 16 : 10);
  }
  return vo(n) || e;
}
const Ns = {}.hasOwnProperty;
function Rm(e, t, n) {
  return typeof t != "string" && (n = t, t = void 0), km(n)(wm(Sm(n).document().write(Em()(e, t, !0))));
}
function km(e) {
  const t = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: o(ur),
      autolinkProtocol: T,
      autolinkEmail: T,
      atxHeading: o(un),
      blockQuote: o(q),
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
      image: o(jr),
      label: u,
      link: o(ur),
      listItem: o(Jr),
      listItemValue: p,
      listOrdered: o(ar, d),
      listUnordered: o(ar),
      paragraph: o(Yr),
      reference: g,
      referenceString: u,
      resourceDestinationString: u,
      resourceTitleString: u,
      setextHeading: o(un),
      strong: o(_r),
      thematicBreak: o(Qr)
    },
    exit: {
      atxHeading: s(),
      atxHeadingSequence: P,
      autolink: s(),
      autolinkEmail: Z,
      autolinkProtocol: N,
      blockQuote: s(),
      characterEscapeValue: H,
      characterReferenceMarkerHexadecimal: te,
      characterReferenceMarkerNumeric: te,
      characterReferenceValue: de,
      characterReference: Fe,
      codeFenced: s(y),
      codeFencedFence: m,
      codeFencedFenceInfo: f,
      codeFencedFenceMeta: C,
      codeFlowValue: H,
      codeIndented: s(I),
      codeText: s(M),
      codeTextData: H,
      data: H,
      definition: s(),
      definitionDestinationString: S,
      definitionLabelString: x,
      definitionTitleString: E,
      emphasis: s(),
      hardBreakEscape: s(B),
      hardBreakTrailing: s(B),
      htmlFlow: s(X),
      htmlFlowData: H,
      htmlText: s(L),
      htmlTextData: H,
      image: s(Q),
      label: me,
      labelText: se,
      lineEnding: V,
      link: s(_),
      listItem: s(),
      listOrdered: s(),
      listUnordered: s(),
      paragraph: s(),
      referenceString: pe,
      resourceDestinationString: b,
      resourceTitleString: Ce,
      resource: ae,
      setextHeading: s(G),
      setextHeadingLineSequence: k,
      setextHeadingText: w,
      strong: s(),
      thematicBreak: s()
    }
  };
  Ms(t, (e || {}).mdastExtensions || []);
  const n = {};
  return r;
  function r(F) {
    let D = {
      type: "root",
      children: []
    };
    const $ = {
      stack: [D],
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
      Ns.call(Le, F[ue][1].type) && Le[F[ue][1].type].call(Object.assign({
        sliceSerialize: F[ue][2].sliceSerialize
      }, $), F[ue][1]);
    }
    if ($.tokenStack.length > 0) {
      const Le = $.tokenStack[$.tokenStack.length - 1];
      (Le[1] || zu).call($, void 0, Le[0]);
    }
    for (D.position = {
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
      D = t.transforms[ue](D) || D;
    return D;
  }
  function i(F, D, $) {
    let oe = D - 1, ue = -1, Le = !1, ut, et, Et, at;
    for (; ++oe <= $; ) {
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
          Et && (!et || Et < et) && (ut._spread = !0), ut.end = Object.assign({}, et ? F[et][1].start : Be[1].end), F.splice(et || oe, 0, ["exit", ut, Be[2]]), oe++, $++;
        }
        if (Be[1].type === "listItemPrefix") {
          const yt = {
            type: "listItem",
            _spread: !1,
            start: Object.assign({}, Be[1].start),
            // @ts-expect-error: we’ll add `end` in a second.
            end: void 0
          };
          ut = yt, F.splice(oe, 0, ["enter", yt, Be[2]]), oe++, $++, Et = void 0, at = !0;
        }
      }
    }
    return F[D][1]._spread = Le, $;
  }
  function o(F, D) {
    return $;
    function $(oe) {
      a.call(this, F(oe), oe), D && D.call(this, oe);
    }
  }
  function u() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function a(F, D, $) {
    this.stack[this.stack.length - 1].children.push(F), this.stack.push(F), this.tokenStack.push([D, $ || void 0]), F.position = {
      start: Rt(D.start),
      // @ts-expect-error: `end` will be patched later.
      end: void 0
    };
  }
  function s(F) {
    return D;
    function D($) {
      F && F.call(this, $), l.call(this, $);
    }
  }
  function l(F, D) {
    const $ = this.stack.pop(), oe = this.tokenStack.pop();
    if (oe)
      oe[0].type !== F.type && (D ? D.call(this, F, oe[0]) : (oe[1] || zu).call(this, F, oe[0]));
    else throw new Error("Cannot close `" + F.type + "` (" + Zn({
      start: F.start,
      end: F.end
    }) + "): it’s not open");
    $.position.end = Rt(F.end);
  }
  function c() {
    return Gh(this.stack.pop());
  }
  function d() {
    this.data.expectingFirstListItemValue = !0;
  }
  function p(F) {
    if (this.data.expectingFirstListItemValue) {
      const D = this.stack[this.stack.length - 2];
      D.start = Number.parseInt(this.sliceSerialize(F), 10), this.data.expectingFirstListItemValue = void 0;
    }
  }
  function f() {
    const F = this.resume(), D = this.stack[this.stack.length - 1];
    D.lang = F;
  }
  function C() {
    const F = this.resume(), D = this.stack[this.stack.length - 1];
    D.meta = F;
  }
  function m() {
    this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
  }
  function y() {
    const F = this.resume(), D = this.stack[this.stack.length - 1];
    D.value = F.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
  }
  function I() {
    const F = this.resume(), D = this.stack[this.stack.length - 1];
    D.value = F.replace(/(\r?\n|\r)$/g, "");
  }
  function x(F) {
    const D = this.resume(), $ = this.stack[this.stack.length - 1];
    $.label = D, $.identifier = pn(this.sliceSerialize(F)).toLowerCase();
  }
  function E() {
    const F = this.resume(), D = this.stack[this.stack.length - 1];
    D.title = F;
  }
  function S() {
    const F = this.resume(), D = this.stack[this.stack.length - 1];
    D.url = F;
  }
  function P(F) {
    const D = this.stack[this.stack.length - 1];
    if (!D.depth) {
      const $ = this.sliceSerialize(F).length;
      D.depth = $;
    }
  }
  function w() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function k(F) {
    const D = this.stack[this.stack.length - 1];
    D.depth = this.sliceSerialize(F).codePointAt(0) === 61 ? 1 : 2;
  }
  function G() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function T(F) {
    const $ = this.stack[this.stack.length - 1].children;
    let oe = $[$.length - 1];
    (!oe || oe.type !== "text") && (oe = Ur(), oe.position = {
      start: Rt(F.start),
      // @ts-expect-error: we’ll add `end` later.
      end: void 0
    }, $.push(oe)), this.stack.push(oe);
  }
  function H(F) {
    const D = this.stack.pop();
    D.value += this.sliceSerialize(F), D.position.end = Rt(F.end);
  }
  function V(F) {
    const D = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const $ = D.children[D.children.length - 1];
      $.position.end = Rt(F.end), this.data.atHardBreak = void 0;
      return;
    }
    !this.data.setextHeadingSlurpLineEnding && t.canContainEols.includes(D.type) && (T.call(this, F), H.call(this, F));
  }
  function B() {
    this.data.atHardBreak = !0;
  }
  function X() {
    const F = this.resume(), D = this.stack[this.stack.length - 1];
    D.value = F;
  }
  function L() {
    const F = this.resume(), D = this.stack[this.stack.length - 1];
    D.value = F;
  }
  function M() {
    const F = this.resume(), D = this.stack[this.stack.length - 1];
    D.value = F;
  }
  function _() {
    const F = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const D = this.data.referenceType || "shortcut";
      F.type += "Reference", F.referenceType = D, delete F.url, delete F.title;
    } else
      delete F.identifier, delete F.label;
    this.data.referenceType = void 0;
  }
  function Q() {
    const F = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const D = this.data.referenceType || "shortcut";
      F.type += "Reference", F.referenceType = D, delete F.url, delete F.title;
    } else
      delete F.identifier, delete F.label;
    this.data.referenceType = void 0;
  }
  function se(F) {
    const D = this.sliceSerialize(F), $ = this.stack[this.stack.length - 2];
    $.label = Pm(D), $.identifier = pn(D).toLowerCase();
  }
  function me() {
    const F = this.stack[this.stack.length - 1], D = this.resume(), $ = this.stack[this.stack.length - 1];
    if (this.data.inReference = !0, $.type === "link") {
      const oe = F.children;
      $.children = oe;
    } else
      $.alt = D;
  }
  function b() {
    const F = this.resume(), D = this.stack[this.stack.length - 1];
    D.url = F;
  }
  function Ce() {
    const F = this.resume(), D = this.stack[this.stack.length - 1];
    D.title = F;
  }
  function ae() {
    this.data.inReference = void 0;
  }
  function g() {
    this.data.referenceType = "collapsed";
  }
  function pe(F) {
    const D = this.resume(), $ = this.stack[this.stack.length - 1];
    $.label = D, $.identifier = pn(this.sliceSerialize(F)).toLowerCase(), this.data.referenceType = "full";
  }
  function te(F) {
    this.data.characterReferenceType = F.type;
  }
  function de(F) {
    const D = this.sliceSerialize(F), $ = this.data.characterReferenceType;
    let oe;
    $ ? (oe = Fs(D, $ === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : oe = vo(D);
    const ue = this.stack[this.stack.length - 1];
    ue.value += oe;
  }
  function Fe(F) {
    const D = this.stack.pop();
    D.position.end = Rt(F.end);
  }
  function N(F) {
    H.call(this, F);
    const D = this.stack[this.stack.length - 1];
    D.url = this.sliceSerialize(F);
  }
  function Z(F) {
    H.call(this, F);
    const D = this.stack[this.stack.length - 1];
    D.url = "mailto:" + this.sliceSerialize(F);
  }
  function q() {
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
  function un() {
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
  function jr() {
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
  function Jr(F) {
    return {
      type: "listItem",
      spread: F._spread,
      checked: null,
      children: []
    };
  }
  function Yr() {
    return {
      type: "paragraph",
      children: []
    };
  }
  function _r() {
    return {
      type: "strong",
      children: []
    };
  }
  function Ur() {
    return {
      type: "text",
      value: ""
    };
  }
  function Qr() {
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
function Ms(e, t) {
  let n = -1;
  for (; ++n < t.length; ) {
    const r = t[n];
    Array.isArray(r) ? Ms(e, r) : Bm(e, r);
  }
}
function Bm(e, t) {
  let n;
  for (n in t)
    if (Ns.call(t, n))
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
function zu(e, t) {
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
function Om(e) {
  const t = this;
  t.parser = n;
  function n(r) {
    return Rm(r, {
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
function Tm(e, t) {
  const n = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: e.wrap(e.all(t), !0)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Vm(e, t) {
  const n = { type: "element", tagName: "br", properties: {}, children: [] };
  return e.patch(t, n), [e.applyData(t, n), { type: "text", value: `
` }];
}
function Dm(e, t) {
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
function Nm(e, t) {
  const n = {
    type: "element",
    tagName: "del",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Mm(e, t) {
  const n = {
    type: "element",
    tagName: "em",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Lm(e, t) {
  const n = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", r = String(t.identifier).toUpperCase(), i = Rn(r.toLowerCase()), o = e.footnoteOrder.indexOf(r);
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
function Xm(e, t) {
  const n = {
    type: "element",
    tagName: "h" + t.depth,
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function zm(e, t) {
  if (e.options.allowDangerousHtml) {
    const n = { type: "raw", value: t.value };
    return e.patch(t, n), e.applyData(t, n);
  }
}
function Ls(e, t) {
  const n = t.referenceType;
  let r = "]";
  if (n === "collapsed" ? r += "[]" : n === "full" && (r += "[" + (t.label || t.identifier) + "]"), t.type === "imageReference")
    return [{ type: "text", value: "![" + t.alt + r }];
  const i = e.all(t), o = i[0];
  o && o.type === "text" ? o.value = "[" + o.value : i.unshift({ type: "text", value: "[" });
  const u = i[i.length - 1];
  return u && u.type === "text" ? u.value += r : i.push({ type: "text", value: r }), i;
}
function Hm(e, t) {
  const n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
  if (!r)
    return Ls(e, t);
  const i = { src: Rn(r.url || ""), alt: t.alt };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const o = { type: "element", tagName: "img", properties: i, children: [] };
  return e.patch(t, o), e.applyData(t, o);
}
function Wm(e, t) {
  const n = { src: Rn(t.url) };
  t.alt !== null && t.alt !== void 0 && (n.alt = t.alt), t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = { type: "element", tagName: "img", properties: n, children: [] };
  return e.patch(t, r), e.applyData(t, r);
}
function Zm(e, t) {
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
function jm(e, t) {
  const n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
  if (!r)
    return Ls(e, t);
  const i = { href: Rn(r.url || "") };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const o = {
    type: "element",
    tagName: "a",
    properties: i,
    children: e.all(t)
  };
  return e.patch(t, o), e.applyData(t, o);
}
function Jm(e, t) {
  const n = { href: Rn(t.url) };
  t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = {
    type: "element",
    tagName: "a",
    properties: n,
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function Ym(e, t, n) {
  const r = e.all(t), i = n ? _m(n) : Xs(t), o = {}, u = [];
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
function _m(e) {
  let t = !1;
  if (e.type === "list") {
    t = e.spread || !1;
    const n = e.children;
    let r = -1;
    for (; !t && ++r < n.length; )
      t = Xs(n[r]);
  }
  return t;
}
function Xs(e) {
  const t = e.spread;
  return t ?? e.children.length > 1;
}
function Um(e, t) {
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
function Qm(e, t) {
  const n = {
    type: "element",
    tagName: "p",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function qm(e, t) {
  const n = { type: "root", children: e.wrap(e.all(t)) };
  return e.patch(t, n), e.applyData(t, n);
}
function $m(e, t) {
  const n = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Km(e, t) {
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
    }, a = bo(t.children[1]), s = Cs(t.children[t.children.length - 1]);
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
function eb(e, t, n) {
  const r = n ? n.children : void 0, o = (r ? r.indexOf(t) : 1) === 0 ? "th" : "td", u = n && n.type === "table" ? n.align : void 0, a = u ? u.length : t.children.length;
  let s = -1;
  const l = [];
  for (; ++s < a; ) {
    const d = t.children[s], p = {}, f = u ? u[s] : void 0;
    f && (p.align = f);
    let C = { type: "element", tagName: o, properties: p, children: [] };
    d && (C.children = e.all(d), e.patch(d, C), C = e.applyData(d, C)), l.push(C);
  }
  const c = {
    type: "element",
    tagName: "tr",
    properties: {},
    children: e.wrap(l, !0)
  };
  return e.patch(t, c), e.applyData(t, c);
}
function tb(e, t) {
  const n = {
    type: "element",
    tagName: "td",
    // Assume body cell.
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
const Hu = 9, Wu = 32;
function nb(e) {
  const t = String(e), n = /\r?\n|\r/g;
  let r = n.exec(t), i = 0;
  const o = [];
  for (; r; )
    o.push(
      Zu(t.slice(i, r.index), i > 0, !0),
      r[0]
    ), i = r.index + r[0].length, r = n.exec(t);
  return o.push(Zu(t.slice(i), i > 0, !1)), o.join("");
}
function Zu(e, t, n) {
  let r = 0, i = e.length;
  if (t) {
    let o = e.codePointAt(r);
    for (; o === Hu || o === Wu; )
      r++, o = e.codePointAt(r);
  }
  if (n) {
    let o = e.codePointAt(i - 1);
    for (; o === Hu || o === Wu; )
      i--, o = e.codePointAt(i - 1);
  }
  return i > r ? e.slice(r, i) : "";
}
function rb(e, t) {
  const n = { type: "text", value: nb(String(t.value)) };
  return e.patch(t, n), e.applyData(t, n);
}
function ib(e, t) {
  const n = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return e.patch(t, n), e.applyData(t, n);
}
const ob = {
  blockquote: Tm,
  break: Vm,
  code: Dm,
  delete: Nm,
  emphasis: Mm,
  footnoteReference: Lm,
  heading: Xm,
  html: zm,
  imageReference: Hm,
  image: Wm,
  inlineCode: Zm,
  linkReference: jm,
  link: Jm,
  listItem: Ym,
  list: Um,
  paragraph: Qm,
  // @ts-expect-error: root is different, but hard to type.
  root: qm,
  strong: $m,
  table: Km,
  tableCell: tb,
  tableRow: eb,
  text: rb,
  thematicBreak: ib,
  toml: Cr,
  yaml: Cr,
  definition: Cr,
  footnoteDefinition: Cr
};
function Cr() {
}
const zs = -1, Wr = 0, Dr = 1, Nr = 2, So = 3, wo = 4, Eo = 5, Fo = 6, Hs = 7, Ws = 8, ju = typeof self == "object" ? self : globalThis, ub = (e, t) => {
  const n = (i, o) => (e.set(o, i), i), r = (i) => {
    if (e.has(i))
      return e.get(i);
    const [o, u] = t[i];
    switch (o) {
      case Wr:
      case zs:
        return n(u, i);
      case Dr: {
        const a = n([], i);
        for (const s of u)
          a.push(r(s));
        return a;
      }
      case Nr: {
        const a = n({}, i);
        for (const [s, l] of u)
          a[r(s)] = r(l);
        return a;
      }
      case So:
        return n(new Date(u), i);
      case wo: {
        const { source: a, flags: s } = u;
        return n(new RegExp(a, s), i);
      }
      case Eo: {
        const a = n(/* @__PURE__ */ new Map(), i);
        for (const [s, l] of u)
          a.set(r(s), r(l));
        return a;
      }
      case Fo: {
        const a = n(/* @__PURE__ */ new Set(), i);
        for (const s of u)
          a.add(r(s));
        return a;
      }
      case Hs: {
        const { name: a, message: s } = u;
        return n(new ju[a](s), i);
      }
      case Ws:
        return n(BigInt(u), i);
      case "BigInt":
        return n(Object(BigInt(u)), i);
    }
    return n(new ju[o](u), i);
  };
  return r;
}, Ju = (e) => ub(/* @__PURE__ */ new Map(), e)(0), ln = "", { toString: ab } = {}, { keys: sb } = Object, Mn = (e) => {
  const t = typeof e;
  if (t !== "object" || !e)
    return [Wr, t];
  const n = ab.call(e).slice(8, -1);
  switch (n) {
    case "Array":
      return [Dr, ln];
    case "Object":
      return [Nr, ln];
    case "Date":
      return [So, ln];
    case "RegExp":
      return [wo, ln];
    case "Map":
      return [Eo, ln];
    case "Set":
      return [Fo, ln];
  }
  return n.includes("Array") ? [Dr, n] : n.includes("Error") ? [Hs, n] : [Nr, n];
}, vr = ([e, t]) => e === Wr && (t === "function" || t === "symbol"), lb = (e, t, n, r) => {
  const i = (u, a) => {
    const s = r.push(u) - 1;
    return n.set(a, s), s;
  }, o = (u) => {
    if (n.has(u))
      return n.get(u);
    let [a, s] = Mn(u);
    switch (a) {
      case Wr: {
        let c = u;
        switch (s) {
          case "bigint":
            a = Ws, c = u.toString();
            break;
          case "function":
          case "symbol":
            if (e)
              throw new TypeError("unable to serialize " + s);
            c = null;
            break;
          case "undefined":
            return i([zs], u);
        }
        return i([a, c], u);
      }
      case Dr: {
        if (s)
          return i([s, [...u]], u);
        const c = [], d = i([a, c], u);
        for (const p of u)
          c.push(o(p));
        return d;
      }
      case Nr: {
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
        for (const p of sb(u))
          (e || !vr(Mn(u[p]))) && c.push([o(p), o(u[p])]);
        return d;
      }
      case So:
        return i([a, u.toISOString()], u);
      case wo: {
        const { source: c, flags: d } = u;
        return i([a, { source: c, flags: d }], u);
      }
      case Eo: {
        const c = [], d = i([a, c], u);
        for (const [p, f] of u)
          (e || !(vr(Mn(p)) || vr(Mn(f)))) && c.push([o(p), o(f)]);
        return d;
      }
      case Fo: {
        const c = [], d = i([a, c], u);
        for (const p of u)
          (e || !vr(Mn(p))) && c.push(o(p));
        return d;
      }
    }
    const { message: l } = u;
    return i([a, { name: s, message: l }], u);
  };
  return o;
}, Yu = (e, { json: t, lossy: n } = {}) => {
  const r = [];
  return lb(!(t || n), !!t, /* @__PURE__ */ new Map(), r)(e), r;
}, Mr = typeof structuredClone == "function" ? (
  /* c8 ignore start */
  (e, t) => t && ("json" in t || "lossy" in t) ? Ju(Yu(e, t)) : structuredClone(e)
) : (e, t) => Ju(Yu(e, t));
function cb(e, t) {
  const n = [{ type: "text", value: "↩" }];
  return t > 1 && n.push({
    type: "element",
    tagName: "sup",
    properties: {},
    children: [{ type: "text", value: String(t) }]
  }), n;
}
function db(e, t) {
  return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
}
function fb(e) {
  const t = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", n = e.options.footnoteBackContent || cb, r = e.options.footnoteBackLabel || db, i = e.options.footnoteLabel || "Footnotes", o = e.options.footnoteLabelTagName || "h2", u = e.options.footnoteLabelProperties || {
    className: ["sr-only"]
  }, a = [];
  let s = -1;
  for (; ++s < e.footnoteOrder.length; ) {
    const l = e.footnoteById.get(
      e.footnoteOrder[s]
    );
    if (!l)
      continue;
    const c = e.all(l), d = String(l.identifier).toUpperCase(), p = Rn(d.toLowerCase());
    let f = 0;
    const C = [], m = e.footnoteCounts.get(d);
    for (; m !== void 0 && ++f <= m; ) {
      C.length > 0 && C.push({ type: "text", value: " " });
      let x = typeof n == "string" ? n : n(s, f);
      typeof x == "string" && (x = { type: "text", value: x }), C.push({
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + t + "fnref-" + p + (f > 1 ? "-" + f : ""),
          dataFootnoteBackref: "",
          ariaLabel: typeof r == "string" ? r : r(s, f),
          className: ["data-footnote-backref"]
        },
        children: Array.isArray(x) ? x : [x]
      });
    }
    const y = c[c.length - 1];
    if (y && y.type === "element" && y.tagName === "p") {
      const x = y.children[y.children.length - 1];
      x && x.type === "text" ? x.value += " " : y.children.push({ type: "text", value: " " }), y.children.push(...C);
    } else
      c.push(...C);
    const I = {
      type: "element",
      tagName: "li",
      properties: { id: t + "fn-" + p },
      children: e.wrap(c, !0)
    };
    e.patch(l, I), a.push(I);
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
            ...Mr(u),
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
const Zs = (
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
      return mb;
    if (typeof e == "function")
      return Zr(e);
    if (typeof e == "object")
      return Array.isArray(e) ? pb(e) : hb(e);
    if (typeof e == "string")
      return gb(e);
    throw new Error("Expected function, string, or object as test");
  }
);
function pb(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.length; )
    t[n] = Zs(e[n]);
  return Zr(r);
  function r(...i) {
    let o = -1;
    for (; ++o < t.length; )
      if (t[o].apply(this, i)) return !0;
    return !1;
  }
}
function hb(e) {
  const t = (
    /** @type {Record<string, unknown>} */
    e
  );
  return Zr(n);
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
function gb(e) {
  return Zr(t);
  function t(n) {
    return n && n.type === e;
  }
}
function Zr(e) {
  return t;
  function t(n, r, i) {
    return !!(bb(n) && e.call(
      this,
      n,
      typeof r == "number" ? r : void 0,
      i || void 0
    ));
  }
}
function mb() {
  return !0;
}
function bb(e) {
  return e !== null && typeof e == "object" && "type" in e;
}
const js = [], yb = !0, _u = !1, Ib = "skip";
function Cb(e, t, n, r) {
  let i;
  typeof t == "function" && typeof n != "function" ? (r = n, n = t) : i = t;
  const o = Zs(i), u = r ? -1 : 1;
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
      let f = js, C, m, y;
      if ((!t || o(s, l, c[c.length - 1] || void 0)) && (f = vb(n(s, c)), f[0] === _u))
        return f;
      if ("children" in s && s.children) {
        const I = (
          /** @type {UnistParent} */
          s
        );
        if (I.children && f[0] !== Ib)
          for (m = (r ? I.children.length : -1) + u, y = c.concat(I); m > -1 && m < I.children.length; ) {
            const x = I.children[m];
            if (C = a(x, m, y)(), C[0] === _u)
              return C;
            m = typeof C[1] == "number" ? C[1] : m + u;
          }
      }
      return f;
    }
  }
}
function vb(e) {
  return Array.isArray(e) ? e : typeof e == "number" ? [yb, e] : e == null ? js : [e];
}
function Js(e, t, n, r) {
  let i, o, u;
  typeof t == "function" ? (o = void 0, u = t, i = n) : (o = t, u = n, i = r), Cb(e, o, a, i);
  function a(s, l) {
    const c = l[l.length - 1], d = c ? c.children.indexOf(s) : void 0;
    return u(s, d, c);
  }
}
const qi = {}.hasOwnProperty, xb = {};
function Ab(e, t) {
  const n = t || xb, r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), u = { ...ob, ...n.handlers }, a = {
    all: l,
    applyData: wb,
    definitionById: r,
    footnoteById: i,
    footnoteCounts: o,
    footnoteOrder: [],
    handlers: u,
    one: s,
    options: n,
    patch: Sb,
    wrap: Fb
  };
  return Js(e, function(c) {
    if (c.type === "definition" || c.type === "footnoteDefinition") {
      const d = c.type === "definition" ? r : i, p = String(c.identifier).toUpperCase();
      d.has(p) || d.set(p, c);
    }
  }), a;
  function s(c, d) {
    const p = c.type, f = a.handlers[p];
    if (qi.call(a.handlers, p) && f)
      return f(a, c, d);
    if (a.options.passThrough && a.options.passThrough.includes(p)) {
      if ("children" in c) {
        const { children: m, ...y } = c, I = Mr(y);
        return I.children = a.all(c), I;
      }
      return Mr(c);
    }
    return (a.options.unknownHandler || Eb)(a, c, d);
  }
  function l(c) {
    const d = [];
    if ("children" in c) {
      const p = c.children;
      let f = -1;
      for (; ++f < p.length; ) {
        const C = a.one(p[f], c);
        if (C) {
          if (f && p[f - 1].type === "break" && (!Array.isArray(C) && C.type === "text" && (C.value = Uu(C.value)), !Array.isArray(C) && C.type === "element")) {
            const m = C.children[0];
            m && m.type === "text" && (m.value = Uu(m.value));
          }
          Array.isArray(C) ? d.push(...C) : d.push(C);
        }
      }
    }
    return d;
  }
}
function Sb(e, t) {
  e.position && (t.position = oh(e));
}
function wb(e, t) {
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
    n.type === "element" && o && Object.assign(n.properties, Mr(o)), "children" in n && n.children && i !== null && i !== void 0 && (n.children = i);
  }
  return n;
}
function Eb(e, t) {
  const n = t.data || {}, r = "value" in t && !(qi.call(n, "hProperties") || qi.call(n, "hChildren")) ? { type: "text", value: t.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function Fb(e, t) {
  const n = [];
  let r = -1;
  for (t && n.push({ type: "text", value: `
` }); ++r < e.length; )
    r && n.push({ type: "text", value: `
` }), n.push(e[r]);
  return t && e.length > 0 && n.push({ type: "text", value: `
` }), n;
}
function Uu(e) {
  let t = 0, n = e.charCodeAt(t);
  for (; n === 9 || n === 32; )
    t++, n = e.charCodeAt(t);
  return e.slice(t);
}
function Qu(e, t) {
  const n = Ab(e, t), r = n.one(e, void 0), i = fb(n), o = Array.isArray(r) ? { type: "root", children: r } : r || { type: "root", children: [] };
  return i && o.children.push({ type: "text", value: `
` }, i), o;
}
function Pb(e, t) {
  return e && "run" in e ? async function(n, r) {
    const i = (
      /** @type {HastRoot} */
      Qu(n, { file: r, ...t })
    );
    await e.run(i, r);
  } : function(n, r) {
    return (
      /** @type {HastRoot} */
      Qu(n, { file: r, ...e || t })
    );
  };
}
function qu(e) {
  if (e)
    throw e;
}
var gi, $u;
function Gb() {
  if ($u) return gi;
  $u = 1;
  var e = Object.prototype.hasOwnProperty, t = Object.prototype.toString, n = Object.defineProperty, r = Object.getOwnPropertyDescriptor, i = function(l) {
    return typeof Array.isArray == "function" ? Array.isArray(l) : t.call(l) === "[object Array]";
  }, o = function(l) {
    if (!l || t.call(l) !== "[object Object]")
      return !1;
    var c = e.call(l, "constructor"), d = l.constructor && l.constructor.prototype && e.call(l.constructor.prototype, "isPrototypeOf");
    if (l.constructor && !c && !d)
      return !1;
    var p;
    for (p in l)
      ;
    return typeof p > "u" || e.call(l, p);
  }, u = function(l, c) {
    n && c.name === "__proto__" ? n(l, c.name, {
      enumerable: !0,
      configurable: !0,
      value: c.newValue,
      writable: !0
    }) : l[c.name] = c.newValue;
  }, a = function(l, c) {
    if (c === "__proto__")
      if (e.call(l, c)) {
        if (r)
          return r(l, c).value;
      } else return;
    return l[c];
  };
  return gi = function s() {
    var l, c, d, p, f, C, m = arguments[0], y = 1, I = arguments.length, x = !1;
    for (typeof m == "boolean" && (x = m, m = arguments[1] || {}, y = 2), (m == null || typeof m != "object" && typeof m != "function") && (m = {}); y < I; ++y)
      if (l = arguments[y], l != null)
        for (c in l)
          d = a(m, c), p = a(l, c), m !== p && (x && p && (o(p) || (f = i(p))) ? (f ? (f = !1, C = d && i(d) ? d : []) : C = d && o(d) ? d : {}, u(m, { name: c, newValue: s(x, C, p) })) : typeof p < "u" && u(m, { name: c, newValue: p }));
    return m;
  }, gi;
}
var Rb = Gb();
const mi = /* @__PURE__ */ no(Rb);
function $i(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function kb() {
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
      i = l, c ? Bb(c, a)(...l) : u(null, ...l);
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
function Bb(e, t) {
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
const st = { basename: Ob, dirname: Tb, extname: Vb, join: Db, sep: "/" };
function Ob(e, t) {
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
function Tb(e) {
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
function Vb(e) {
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
function Db(...e) {
  let t = -1, n;
  for (; ++t < e.length; )
    rr(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
  return n === void 0 ? "." : Nb(n);
}
function Nb(e) {
  rr(e);
  const t = e.codePointAt(0) === 47;
  let n = Mb(e, !t);
  return n.length === 0 && !t && (n = "."), n.length > 0 && e.codePointAt(e.length - 1) === 47 && (n += "/"), t ? "/" + n : n;
}
function Mb(e, t) {
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
const Lb = { cwd: Xb };
function Xb() {
  return "/";
}
function Ki(e) {
  return !!(e !== null && typeof e == "object" && "href" in e && e.href && "protocol" in e && e.protocol && // @ts-expect-error: indexing is fine.
  e.auth === void 0);
}
function zb(e) {
  if (typeof e == "string")
    e = new URL(e);
  else if (!Ki(e)) {
    const t = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + e + "`"
    );
    throw t.code = "ERR_INVALID_ARG_TYPE", t;
  }
  if (e.protocol !== "file:") {
    const t = new TypeError("The URL must be of scheme file");
    throw t.code = "ERR_INVALID_URL_SCHEME", t;
  }
  return Hb(e);
}
function Hb(e) {
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
const bi = (
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
class Ys {
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
    t ? Ki(t) ? n = { path: t } : typeof t == "string" || Wb(t) ? n = { value: t } : n = t : n = {}, this.cwd = "cwd" in n ? "" : Lb.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
    let r = -1;
    for (; ++r < bi.length; ) {
      const o = bi[r];
      o in n && n[o] !== void 0 && n[o] !== null && (this[o] = o === "history" ? [...n[o]] : n[o]);
    }
    let i;
    for (i in n)
      bi.includes(i) || (this[i] = n[i]);
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
    Ii(t, "basename"), yi(t, "basename"), this.path = st.join(this.dirname || "", t);
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
    Ku(this.basename, "dirname"), this.path = st.join(t || "", this.basename);
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
    if (yi(t, "extname"), Ku(this.dirname, "extname"), t) {
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
    Ki(t) && (t = zb(t)), Ii(t, "path"), this.path !== t && this.history.push(t);
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
    Ii(t, "stem"), yi(t, "stem"), this.path = st.join(this.dirname || "", t + (this.extname || ""));
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
function yi(e, t) {
  if (e && e.includes(st.sep))
    throw new Error(
      "`" + t + "` cannot be a path: did not expect `" + st.sep + "`"
    );
}
function Ii(e, t) {
  if (!e)
    throw new Error("`" + t + "` cannot be empty");
}
function Ku(e, t) {
  if (!e)
    throw new Error("Setting `" + t + "` requires `path` to be set too");
}
function Wb(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const Zb = (
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
), jb = {}.hasOwnProperty;
class Po extends Zb {
  /**
   * Create a processor.
   */
  constructor() {
    super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = kb();
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
      new Po()
    );
    let n = -1;
    for (; ++n < this.attachers.length; ) {
      const r = this.attachers[n];
      t.use(...r);
    }
    return t.data(mi(!0, {}, this.namespace)), t;
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
    return typeof t == "string" ? arguments.length === 2 ? (xi("data", this.frozen), this.namespace[t] = n, this) : jb.call(this.namespace, t) && this.namespace[t] || void 0 : t ? (xi("data", this.frozen), this.namespace = t, this) : this.namespace;
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
    const n = xr(t), r = this.parser || this.Parser;
    return Ci("parse", r), r(String(n), n);
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
    return this.freeze(), Ci("process", this.parser || this.Parser), vi("process", this.compiler || this.Compiler), n ? i(void 0, n) : new Promise(i);
    function i(o, u) {
      const a = xr(t), s = (
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
        ), C = r.stringify(f, p);
        _b(C) ? p.value = C : p.result = C, l(
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
    return this.freeze(), Ci("processSync", this.parser || this.Parser), vi("processSync", this.compiler || this.Compiler), this.process(t, i), ta("processSync", "process", n), r;
    function i(o, u) {
      n = !0, qu(o), r = u;
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
    ea(t), this.freeze();
    const i = this.transformers;
    return !r && typeof n == "function" && (r = n, n = void 0), r ? o(void 0, r) : new Promise(o);
    function o(u, a) {
      const s = xr(n);
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
    return this.run(t, n, o), ta("runSync", "run", r), i;
    function o(u, a) {
      qu(u), i = a, r = !0;
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
    const r = xr(n), i = this.compiler || this.Compiler;
    return vi("stringify", i), ea(t), i(t, r);
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
    if (xi("use", this.frozen), t != null) if (typeof t == "function")
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
      a(l.plugins), l.settings && (i.settings = mi(!0, i.settings, l.settings));
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
        let [f, ...C] = c;
        const m = r[p][1];
        $i(m) && $i(f) && (f = mi(!0, m, f)), r[p] = [l, f, ...C];
      }
    }
  }
}
const Jb = new Po().freeze();
function Ci(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `parser`");
}
function vi(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `compiler`");
}
function xi(e, t) {
  if (t)
    throw new Error(
      "Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function ea(e) {
  if (!$i(e) || typeof e.type != "string")
    throw new TypeError("Expected node, got `" + e + "`");
}
function ta(e, t, n) {
  if (!n)
    throw new Error(
      "`" + e + "` finished async. Use `" + t + "` instead"
    );
}
function xr(e) {
  return Yb(e) ? e : new Ys(e);
}
function Yb(e) {
  return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function _b(e) {
  return typeof e == "string" || Ub(e);
}
function Ub(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const Qb = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", na = [], ra = { allowDangerousHtml: !0 }, qb = /^(https?|ircs?|mailto|xmpp)$/i, $b = [
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
function Kb(e) {
  const t = e.allowedElements, n = e.allowElement, r = e.children || "", i = e.className, o = e.components, u = e.disallowedElements, a = e.rehypePlugins || na, s = e.remarkPlugins || na, l = e.remarkRehypeOptions ? { ...e.remarkRehypeOptions, ...ra } : ra, c = e.skipHtml, d = e.unwrapDisallowed, p = e.urlTransform || ey, f = Jb().use(Om).use(s).use(Pb, l).use(a), C = new Ys();
  typeof r == "string" && (C.value = r);
  for (const x of $b)
    Object.hasOwn(e, x.from) && ("" + x.from + (x.to ? "use `" + x.to + "` instead" : "remove it") + Qb + x.id, void 0);
  const m = f.parse(C);
  let y = f.runSync(m, C);
  return i && (y = {
    type: "element",
    tagName: "div",
    properties: { className: i },
    // Assume no doctypes.
    children: (
      /** @type {Array<ElementContent>} */
      y.type === "root" ? y.children : [y]
    )
  }), Js(y, I), dh(y, {
    Fragment: ha,
    // @ts-expect-error
    // React components are allowed to return numbers,
    // but not according to the types in hast-util-to-jsx-runtime
    components: o,
    ignoreInvalidStyle: !0,
    jsx: j,
    jsxs: gt,
    passKeys: !0,
    passNode: !0
  });
  function I(x, E, S) {
    if (x.type === "raw" && S && typeof E == "number")
      return c ? S.children.splice(E, 1) : S.children[E] = { type: "text", value: x.value }, E;
    if (x.type === "element") {
      let P;
      for (P in fi)
        if (Object.hasOwn(fi, P) && Object.hasOwn(x.properties, P)) {
          const w = x.properties[P], k = fi[P];
          (k === null || k.includes(x.tagName)) && (x.properties[P] = p(String(w || ""), P, x));
        }
    }
    if (x.type === "element") {
      let P = t ? !t.includes(x.tagName) : u ? u.includes(x.tagName) : !1;
      if (!P && n && typeof E == "number" && (P = !n(x, E, S)), P && S && typeof E == "number")
        return d && x.children ? S.children.splice(E, 1, ...x.children) : S.children.splice(E, 1), E;
    }
  }
}
function ey(e) {
  const t = e.indexOf(":"), n = e.indexOf("?"), r = e.indexOf("#"), i = e.indexOf("/");
  return (
    // If there is no protocol, it’s relative.
    t === -1 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
    i !== -1 && t > i || n !== -1 && t > n || r !== -1 && t > r || // It is a protocol, it should be allowed.
    qb.test(e.slice(0, t)) ? e : ""
  );
}
function ty(e) {
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
  return r.type === "app" ? /* @__PURE__ */ j("p", { className: i("description", e), style: o("description", a, e), children: "Credentials are encrypted." }) : r.description ? /* @__PURE__ */ j("div", { className: i("description", e), style: o("description", a, e), children: /* @__PURE__ */ j(Kb, { children: n }) }) : null;
}
function ny(e) {
  const { errors: t } = e, {
    getProps: n,
    theme: r
  } = Ye(), i = {
    color: r.colors.danger,
    gridArea: "errors"
  };
  return t.length ? /* @__PURE__ */ j("ul", { ...n("errors", i, e), children: t.map((o) => /* @__PURE__ */ j("li", { ...n("error", i, e), children: o }, o)) }) : null;
}
function ry(e) {
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
    /* @__PURE__ */ j("label", { htmlFor: r, ...i("label", u, e), children: t })
  );
}
const iy = (e) => {
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
    /* @__PURE__ */ j("span", { children: n ? "-" : "+" }),
    /* @__PURE__ */ j("span", { style: {
      marginRight: 8
    }, children: t.label || t.name })
  ] });
}, _s = (e) => {
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
  return /* @__PURE__ */ j("button", { onClick: t, type: "button", ...n("loadMoreButton", i, e), children: "Load More" });
}, oy = {
  Description: ty,
  Errors: ny,
  Label: ry,
  OptionalFieldButton: iy,
  Button: _s,
  ControlInput: ds
}, Go = Kn({
  // eslint-disable-line @typescript-eslint/no-explicit-any
  classNames: {},
  classNamePrefix: "",
  components: {},
  styles: {},
  theme: ho,
  unstyled: !1
});
function uy() {
  const e = Fn(Go) ?? {}, t = Dp(e.theme ?? {});
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
    return xp(((l = e.styles) == null ? void 0 : l[a]) ?? {}, s ?? {});
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
  const e = Fn(Go) ?? {}, t = e.theme, n = e.unstyled ? Vp : ho, r = typeof t == "function" ? Zi(n, t(n)) : Zi(n, t);
  function i(s, l) {
    var p;
    const c = `${(e == null ? void 0 : e.classNamePrefix) ?? "pd-"}${s.toLowerCase()}`, d = (p = e.classNames) == null ? void 0 : p[s];
    if (typeof d == "function") {
      const f = d, C = {
        ...l ?? {},
        theme: r
      };
      return [
        c,
        f(C)
      ].filter(Boolean).join(" ");
    }
    return [
      c,
      d
    ].filter(Boolean).join(" ");
  }
  function o() {
    return {
      ...oy,
      ...(e == null ? void 0 : e.components) ?? {}
    };
  }
  function u(s, l, c) {
    var p;
    const d = (p = e.styles) == null ? void 0 : p[s];
    if (typeof d == "function") {
      const f = d, C = {
        ...c ?? {},
        theme: r
      };
      return f(l, C);
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
    select: uy(),
    theme: r
  };
}
const Oy = ({
  children: e,
  ...t
}) => /* @__PURE__ */ j(Go.Provider, { value: t, children: e }), ay = (e, t) => {
  var i;
  const n = Lt(), r = rn({
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
}, sy = (e) => /* @__PURE__ */ j(tr.Option, { ...e, children: e.data.name });
function ly({ app: e }) {
  const t = Lt(), n = Pn(), {
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
      Option: sy
    },
    styles: {
      control: (S) => ({
        ...S,
        gridArea: "control",
        boxShadow: l.boxShadow.input
      })
    }
  }, f = s.getProps("controlAppSelect", p), C = void 0, {
    isLoading: m,
    // TODO error
    accounts: y,
    refetch: I
  } = ay(
    {
      app: e.name_slug,
      oauth_app_id: C
    },
    {
      useQueryOpts: {
        enabled: !!e,
        suspense: !!e
      }
    }
  ), x = async () => {
    t.connectAccount({
      app: i.app,
      oauthAppId: C,
      onSuccess: async (S) => {
        await I(), u({
          authProvisionId: S.id
        });
      },
      onError: () => {
      }
    });
  }, E = pt(() => {
    let S = o;
    if (S != null) {
      for (const P of y)
        if (S.authProvisionId === P.id) {
          S = P;
          break;
        }
    }
    return S;
  }, [
    y,
    o
  ]);
  return /* @__PURE__ */ j("div", { ...a("controlApp", c, {
    app: e,
    ...n
  }), children: m ? `Loading ${e.name} accounts...` : y.length ? /* @__PURE__ */ j(
    zr,
    {
      instanceId: r,
      value: E,
      options: [
        ...y,
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
        S ? S.id === "_new" ? x() : u({
          authProvisionId: S.id
        }) : u(void 0);
      }
    }
  ) : /* @__PURE__ */ gt("button", { type: "button", ...a("connectButton", d, {
    app: e,
    ...n
  }), onClick: () => x(), children: [
    "Connect ",
    e.name
  ] }) });
}
function cy() {
  const e = Pn(), {
    id: t,
    value: n,
    onChange: r
  } = e, { getProps: i } = Ye();
  return /* @__PURE__ */ j("input", { id: t, type: "checkbox", ...i("controlBoolean", {
    width: "16px",
    height: "16px",
    gridArea: "control",
    margin: "0 0.5rem 0 0"
  }, e), checked: n ?? !1, onChange: (u) => r(u.target.checked) });
}
var dy = ["allowCreateWhileLoading", "createOptionPosition", "formatCreateLabel", "isValidNewOption", "getNewOptionData", "onCreateOption", "options", "onChange"], ia = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = arguments.length > 1 ? arguments[1] : void 0, r = arguments.length > 2 ? arguments[2] : void 0, i = String(t).toLowerCase(), o = String(r.getOptionValue(n)).toLowerCase(), u = String(r.getOptionLabel(n)).toLowerCase();
  return o === i || u === i;
}, Ai = {
  formatCreateLabel: function(t) {
    return 'Create "'.concat(t, '"');
  },
  isValidNewOption: function(t, n, r, i) {
    return !(!t || n.some(function(o) {
      return ia(t, o, i);
    }) || r.some(function(o) {
      return ia(t, o, i);
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
function fy(e) {
  var t = e.allowCreateWhileLoading, n = t === void 0 ? !1 : t, r = e.createOptionPosition, i = r === void 0 ? "last" : r, o = e.formatCreateLabel, u = o === void 0 ? Ai.formatCreateLabel : o, a = e.isValidNewOption, s = a === void 0 ? Ai.isValidNewOption : a, l = e.getNewOptionData, c = l === void 0 ? Ai.getNewOptionData : l, d = e.onCreateOption, p = e.options, f = p === void 0 ? [] : p, C = e.onChange, m = bt(e, dy), y = m.getOptionValue, I = y === void 0 ? ns : y, x = m.getOptionLabel, E = x === void 0 ? ts : x, S = m.inputValue, P = m.isLoading, w = m.isMulti, k = m.value, G = m.name, T = pt(function() {
    return s(S, Or(k), f, {
      getOptionValue: I,
      getOptionLabel: E
    }) ? c(S, u(S)) : void 0;
  }, [u, c, E, I, S, s, f, k]), H = pt(function() {
    return (n || !P) && T ? i === "first" ? [T].concat(dn(f)) : [].concat(dn(f), [T]) : f;
  }, [n, i, P, T, f]), V = Ve(function(B, X) {
    if (X.action !== "select-option")
      return C(B, X);
    var L = Array.isArray(B) ? B : [B];
    if (L[L.length - 1] === T) {
      if (d) d(S);
      else {
        var M = c(S, S), _ = {
          action: "create-option",
          name: G,
          option: M
        };
        C(Hn(w, [].concat(dn(Or(k)), [M]), M), _);
      }
      return;
    }
    C(B, X);
  }, [c, S, w, G, T, d, C, k]);
  return J(J({}, m), {}, {
    options: H,
    onChange: V
  });
}
var py = /* @__PURE__ */ ma(function(e, t) {
  var n = Oa(e), r = fy(n);
  return /* @__PURE__ */ ne.createElement(po, U({
    ref: t
  }, r));
}), hy = py;
function eo({
  isCreatable: e,
  options: t,
  selectProps: n,
  showLoadMoreButton: r,
  onLoadMore: i
}) {
  const o = Pn(), {
    id: u,
    prop: a,
    value: s,
    onChange: l
  } = o, {
    select: c,
    theme: d
  } = Ye(), p = {
    styles: {
      container: (x) => ({
        ...x,
        gridArea: "control",
        boxShadow: d.boxShadow.input
      })
    }
  }, f = pt(() => {
    let x = s;
    if (x != null)
      if (Array.isArray(x)) {
        if (typeof x[0] != "object") {
          const E = [];
          for (const S of x) {
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
          x = E;
        }
      } else if (typeof x != "object") {
        if ((t == null ? void 0 : t[0]) && typeof t[0] == "object") {
          for (const S of t)
            if (S.value === s) {
              x = S;
              break;
            }
        }
      } else x.__lv && (x = x.__lv);
    return x;
  }, [
    s,
    t
  ]), C = ({
    // eslint-disable-next-line react/prop-types
    children: x,
    ...E
  }) => /* @__PURE__ */ gt(tr.MenuList, { ...E, children: [
    x,
    /* @__PURE__ */ j("div", { className: "pt-4", children: /* @__PURE__ */ j(_s, { onChange: i }) })
  ] }), m = c.getProps("controlSelect", p);
  r && (m.components = {
    // eslint-disable-next-line react/prop-types
    ...m.components,
    MenuList: C
  });
  const y = (x) => {
    t.unshift({
      label: x,
      value: x
    });
  };
  return /* @__PURE__ */ j(
    e ? hy : zr,
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
      onCreateOption: y,
      onChange: (x) => {
        if (x)
          if (Array.isArray(x))
            if (typeof x[0] == "object" && "value" in x[0]) {
              const E = [];
              for (const S of x)
                a.withLabel ? E.push(S) : E.push(S.value);
              l(E);
            } else
              l(x);
          else if (typeof x == "object" && "value" in x)
            a.withLabel ? l({
              __lv: x
            }) : l(x.value);
          else
            throw new Error("unhandled option type");
        else
          l(void 0);
      }
    }
  );
}
function gy({ queryEnabled: e }) {
  const t = Lt(), {
    userId: n,
    component: r,
    configurableProps: i,
    configuredProps: o,
    dynamicProps: u,
    props: { disableQueryDisabling: a }
  } = uo(), {
    idx: s,
    prop: l
  } = Pn(), [
    c,
    d
  ] = ve(""), [
    p,
    f
  ] = ve(0), [
    C,
    m
  ] = ve(!0), [
    y,
    I
  ] = ve(void 0), [
    x,
    E
  ] = ve({
    page: 0,
    prevContext: {},
    data: [],
    values: /* @__PURE__ */ new Set()
  }), S = {};
  for (let M = 0; M < s; M++) {
    const _ = i[M];
    S[_.name] = o[_.name];
  }
  const P = {
    userId: n,
    page: p,
    prevContext: y,
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
    G
  ] = ve(), T = () => {
    f(x.page), I(x.prevContext), E({
      ...x,
      prevContext: {}
    });
  }, {
    isFetching: H,
    refetch: V
  } = rn({
    queryKey: [
      "componentConfigure",
      w
    ],
    queryFn: async () => {
      G(void 0);
      const M = await t.componentConfigure(P), {
        options: _,
        stringOptions: Q,
        errors: se
      } = M;
      if (se != null && se.length) {
        try {
          G(JSON.parse(se[0]));
        } catch {
          G({
            name: "Error",
            message: se[0]
          });
        }
        return [];
      }
      let me = [];
      if (_ != null && _.length && (me = _), Q != null && Q.length) {
        const g = [];
        for (const pe of Q)
          g.push({
            label: pe,
            value: pe
          });
        me = g;
      }
      const b = [], Ce = new Set(x.values);
      for (const g of me || []) {
        const pe = typeof g == "string" ? g : g.value;
        Ce.has(pe) || (Ce.add(pe), b.push(g));
      }
      let ae = x.data;
      return b.length ? (ae = [
        ...x.data,
        ...b
      ], E({
        page: p + 1,
        prevContext: M.context,
        data: ae,
        values: Ce
      })) : m(!1), ae;
    },
    enabled: !!e
  }), B = () => !H && !k && C, X = k ? k.message : a ? "Click to configure" : e ? void 0 : "Configure props above first", L = a ? !1 : !e;
  return /* @__PURE__ */ j(
    eo,
    {
      isCreatable: !0,
      showLoadMoreButton: B(),
      onLoadMore: T,
      options: x.data,
      selectProps: {
        isLoading: H,
        placeholder: X,
        isDisabled: L,
        inputValue: l.useQuery ? c : void 0,
        onInputChange(M) {
          l.useQuery && (d(M), V());
        },
        onMenuOpen() {
          a && !e && V();
        }
      }
    }
  );
}
function my(e) {
  const {
    field: t,
    form: n
  } = e, { queryDisabledIdx: r } = n, {
    prop: i,
    idx: o
  } = t, u = "app" in t.extra ? t.extra.app : void 0;
  if (i.remoteOptions || i.type === "$.discord.channel")
    return /* @__PURE__ */ j(gy, { queryEnabled: r == null || r >= o });
  if ("options" in i && i.options) {
    let a = i.options;
    return typeof a[0] != "object" && (a = a.map((s) => ({
      label: s,
      value: s
    }))), /* @__PURE__ */ j(eo, { options: a, components: {
      IndicatorSeparator: () => null
    } });
  }
  if (i.type.endsWith("[][]"))
    throw new Error("Unsupported property type: " + i.type);
  if (i.type.endsWith("[]"))
    return /* @__PURE__ */ j(eo, { isCreatable: !0, options: [], components: {
      IndicatorSeparator: () => null
    } });
  switch (i.type) {
    // problem with this is that it should be the JSON value, but if it is at any point
    // not a valid json value, it should just be the string so the value is not lost... so it's just very odd
    // without a more stringent JSON builder type component
    // case "any":
    //   return <ControlAny />
    case "app":
      return /* @__PURE__ */ j(ly, { app: u });
    case "boolean":
      return /* @__PURE__ */ j(cy, {});
    case "string":
    case "integer":
      return /* @__PURE__ */ j(ds, {});
    default:
      throw new Error("Unsupported property type: " + i.type);
  }
}
function by(e) {
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
    /* @__PURE__ */ j(a, { text: p, field: n, form: t }),
    /* @__PURE__ */ j(my, { field: n, form: t }),
    /* @__PURE__ */ j(s, { markdown: r.description, field: n, form: t }),
    /* @__PURE__ */ j(l, { errors: c, field: n, form: t })
  ] });
}
const yy = (e, t) => {
  var i;
  const n = Lt(), r = rn({
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
function Iy({
  prop: e,
  idx: t
}) {
  const n = uo(), {
    id: r,
    configuredProps: i,
    registerField: o,
    setConfiguredProp: u
  } = n, a = e.type === "app" && "app" in e ? e.app : void 0, {
    // TODO error
    app: s
  } = yy(a || "", {
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
  return Yt(() => o(c), [
    c
  ]), /* @__PURE__ */ j(cs.Provider, { value: c, children: /* @__PURE__ */ j(by, { field: c, form: n }) });
}
class Cy extends ga {
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
function vy(e) {
  const { form: t } = e, {
    propsNeedConfiguring: n,
    submitting: r
  } = t, {
    getProps: i,
    theme: o
  } = Ye();
  return /* @__PURE__ */ j("input", { type: "submit", value: r ? "Submitting..." : "Submit", ...i("controlSubmit", ((a) => {
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
function xy() {
  const e = uo(), {
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
  } = Ye(), { OptionalFieldButton: f } = c(), C = {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem"
  }, m = {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.375rem"
  }, y = {
    fontWeight: 600,
    textTransform: "capitalize",
    color: p.colors.neutral60,
    fontSize: "0.875rem",
    lineHeight: "1.375",
    margin: "0 0 0.5rem 0"
  }, I = async (S) => {
    if (l && (S.preventDefault(), r)) {
      a(!0);
      try {
        await l(e);
      } finally {
        a(!1);
      }
    }
  }, x = [], E = [];
  for (let S = 0; S < t.length; S++) {
    const P = t[S];
    if (!P.hidden && !Ar.includes(P.type)) {
      if (P.optional) {
        const w = i(P);
        if (E.push([
          P,
          w
        ]), !w)
          continue;
      }
      x.push([
        P,
        S
      ]);
    }
  }
  return /* @__PURE__ */ j(Cy, { fallback: (S) => /* @__PURE__ */ gt("p", { style: {
    color: "red"
  }, children: [
    "Error: ",
    S && typeof S == "object" && "message" in S && typeof S.message == "string" ? S.message : "Unknown"
  ] }), children: /* @__PURE__ */ j(Jl, { fallback: /* @__PURE__ */ j("p", { children: "Loading form..." }), children: /* @__PURE__ */ gt("form", { ...d("componentForm", C, u), onSubmit: I, children: [
    x.map(([
      S,
      P
    ]) => S.type === "alert" ? /* @__PURE__ */ j(Ul, { prop: S }, S.name) : /* @__PURE__ */ j(Iy, { prop: S, idx: P }, S.name)),
    n && /* @__PURE__ */ j("p", { children: "Loading dynamic props..." }),
    !s && E.length ? /* @__PURE__ */ gt("div", { children: [
      /* @__PURE__ */ j("div", { ...d("heading", y, u), children: "Optional Props" }),
      /* @__PURE__ */ j("div", { ...d("optionalFields", m, u), children: E.map(([
        S,
        P
      ]) => /* @__PURE__ */ j(
        f,
        {
          prop: S,
          enabled: P,
          onClick: () => o(S, !P)
        },
        S.name
      )) })
    ] }) : null,
    l && /* @__PURE__ */ j(vy, { form: e })
  ] }) }) });
}
function Ay(e) {
  return /* @__PURE__ */ j(Lc, { props: e, children: /* @__PURE__ */ j(xy, {}) });
}
const Sy = ({ key: e }, t) => {
  var i;
  const n = Lt(), r = rn({
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
function Ty(e) {
  const {
    isLoading: t,
    error: n,
    component: r
  } = Sy({
    key: e.componentKey
  });
  if (!e.componentKey)
    throw new Error("componentKey required");
  return t ? /* @__PURE__ */ j("p", { children: "Loading..." }) : n ? /* @__PURE__ */ gt("p", { children: [
    "Error: ",
    n.message
  ] }) : r ? /* @__PURE__ */ j(Ay, { component: r, ...e }) : /* @__PURE__ */ j("p", { children: "Component not found" });
}
function Vy() {
  const e = Pn(), {
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
  return typeof a == "object" && (a = JSON.stringify(a)), /* @__PURE__ */ j(
    "textarea",
    {
      id: t,
      value: a,
      onChange: (s) => n(s.target.value),
      ...i("controlAny", u, e)
    }
  );
}
const wy = (e) => {
  var r;
  const t = Lt(), n = rn({
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
function Dy({
  value: e,
  onChange: t
}) {
  const [
    n,
    r
  ] = ve(""), i = to(), {
    isLoading: o,
    // TODO error
    apps: u
  } = wy({
    q: n
  }), { Option: a } = tr;
  return /* @__PURE__ */ j(
    zr,
    {
      instanceId: i,
      className: "react-select-container text-sm",
      classNamePrefix: "react-select",
      components: {
        Option: (s) => /* @__PURE__ */ j(a, { ...s, children: /* @__PURE__ */ gt("div", { style: {
          display: "flex",
          gap: 10
        }, children: [
          /* @__PURE__ */ j(
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
          /* @__PURE__ */ j("span", { style: {
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
const Ey = (e) => {
  var r;
  const t = Lt(), n = rn({
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
function Ny({
  app: e,
  componentType: t,
  value: n,
  onChange: r
}) {
  const i = to(), {
    isLoading: o,
    // TODO error
    components: u
  } = Ey({
    app: e == null ? void 0 : e.name_slug,
    componentType: t
  });
  return /* @__PURE__ */ j(
    zr,
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
  Ul as Alert,
  Ay as ComponentForm,
  Ty as ComponentFormContainer,
  my as Control,
  Vy as ControlAny,
  ly as ControlApp,
  cy as ControlBoolean,
  ds as ControlInput,
  eo as ControlSelect,
  vy as ControlSubmit,
  Go as CustomizationContext,
  Oy as CustomizeProvider,
  ty as Description,
  Cy as ErrorBoundary,
  ny as Errors,
  by as Field,
  Ra as FormContext,
  Lc as FormContextProvider,
  cs as FormFieldContext,
  By as FrontendClientProvider,
  xy as InternalComponentForm,
  Iy as InternalField,
  ry as Label,
  iy as OptionalFieldButton,
  gy as RemoteOptionsContainer,
  Dy as SelectApp,
  Ny as SelectComponent,
  oy as defaultComponents,
  ho as defaultTheme,
  Dp as getReactSelectTheme,
  Zi as mergeTheme,
  Ar as skippablePropTypes,
  Vp as unstyledTheme,
  ay as useAccounts,
  yy as useApp,
  wy as useApps,
  Sy as useComponent,
  Ey as useComponents,
  Ye as useCustomize,
  uo as useFormContext,
  Pn as useFormFieldContext,
  Lt as useFrontendClient
};
