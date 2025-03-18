var Hd = (e) => {
  throw TypeError(e);
};
var yl = (e, t, r) => t.has(e) || Hd("Cannot " + r);
var O = (e, t, r) => (yl(e, t, "read from private field"), r ? r.call(e) : t.get(e)), Ce = (e, t, r) => t.has(e) ? Hd("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), se = (e, t, r, u) => (yl(e, t, "write to private field"), u ? u.call(e, r) : t.set(e, r), r), ze = (e, t, r) => (yl(e, t, "access private method"), r);
var ps = (e, t, r, u) => ({
  set _(o) {
    se(e, t, o, r);
  },
  get _() {
    return O(e, t, u);
  }
});
import { jsx as le, jsxs as Mn, Fragment as R1 } from "react/jsx-runtime";
import * as Pe from "react";
import { useState as et, useCallback as Gt, useLayoutEffect as P1, useRef as yr, useMemo as Qn, createContext as Ku, useContext as iu, Component as bh, Fragment as Vl, useEffect as qn, forwardRef as yh, useId as mc, Suspense as O1 } from "react";
import { keyframes as T1, jsx as ge, css as vh } from "@emotion/react";
import { createPortal as B1 } from "react-dom";
typeof document > "u" && (globalThis.document = {
  createElement: () => {
  }
});
function di(e) {
  "@babel/helpers - typeof";
  return di = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, di(e);
}
function _1(e, t) {
  if (di(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var u = r.call(e, t || "default");
    if (di(u) != "object") return u;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ih(e) {
  var t = _1(e, "string");
  return di(t) == "symbol" ? t : t + "";
}
function Mu(e, t, r) {
  return (t = Ih(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function zd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(e);
    t && (u = u.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, u);
  }
  return r;
}
function de(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? zd(Object(r), !0).forEach(function(u) {
      Mu(e, u, r[u]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : zd(Object(r)).forEach(function(u) {
      Object.defineProperty(e, u, Object.getOwnPropertyDescriptor(r, u));
    });
  }
  return e;
}
function G1(e) {
  if (Array.isArray(e)) return e;
}
function L1(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var u, o, a, l, c = [], f = !0, p = !1;
    try {
      if (a = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r) return;
        f = !1;
      } else for (; !(f = (u = a.call(r)).done) && (c.push(u.value), c.length !== t); f = !0) ;
    } catch (h) {
      p = !0, o = h;
    } finally {
      try {
        if (!f && r.return != null && (l = r.return(), Object(l) !== l)) return;
      } finally {
        if (p) throw o;
      }
    }
    return c;
  }
}
function Wl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, u = Array(t); r < t; r++) u[r] = e[r];
  return u;
}
function Ch(e, t) {
  if (e) {
    if (typeof e == "string") return Wl(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Wl(e, t) : void 0;
  }
}
function k1() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function vr(e, t) {
  return G1(e) || L1(e, t) || Ch(e, t) || k1();
}
function D1(e, t) {
  if (e == null) return {};
  var r = {};
  for (var u in e) if ({}.hasOwnProperty.call(e, u)) {
    if (t.includes(u)) continue;
    r[u] = e[u];
  }
  return r;
}
function er(e, t) {
  if (e == null) return {};
  var r, u, o = D1(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (u = 0; u < a.length; u++) r = a[u], t.includes(r) || {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
var M1 = ["defaultInputValue", "defaultMenuIsOpen", "defaultValue", "inputValue", "menuIsOpen", "onChange", "onInputChange", "onMenuClose", "onMenuOpen", "value"];
function xh(e) {
  var t = e.defaultInputValue, r = t === void 0 ? "" : t, u = e.defaultMenuIsOpen, o = u === void 0 ? !1 : u, a = e.defaultValue, l = a === void 0 ? null : a, c = e.inputValue, f = e.menuIsOpen, p = e.onChange, h = e.onInputChange, g = e.onMenuClose, v = e.onMenuOpen, b = e.value, P = er(e, M1), A = et(c !== void 0 ? c : r), E = vr(A, 2), F = E[0], k = E[1], L = et(f !== void 0 ? f : o), D = vr(L, 2), H = D[0], G = D[1], z = et(b !== void 0 ? b : l), N = vr(z, 2), V = N[0], ne = N[1], Q = Gt(function(Se, je) {
    typeof p == "function" && p(Se, je), ne(Se);
  }, [p]), j = Gt(function(Se, je) {
    var S;
    typeof h == "function" && (S = h(Se, je)), k(S !== void 0 ? S : Se);
  }, [h]), te = Gt(function() {
    typeof v == "function" && v(), G(!0);
  }, [v]), ee = Gt(function() {
    typeof g == "function" && g(), G(!1);
  }, [g]), K = c !== void 0 ? c : F, pe = f !== void 0 ? f : H, fe = b !== void 0 ? b : V;
  return de(de({}, P), {}, {
    inputValue: K,
    menuIsOpen: pe,
    onChange: Q,
    onInputChange: j,
    onMenuClose: ee,
    onMenuOpen: te,
    value: fe
  });
}
function ye() {
  return ye = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var u in r) ({}).hasOwnProperty.call(r, u) && (e[u] = r[u]);
    }
    return e;
  }, ye.apply(null, arguments);
}
function N1(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Zd(e, t) {
  for (var r = 0; r < t.length; r++) {
    var u = t[r];
    u.enumerable = u.enumerable || !1, u.configurable = !0, "value" in u && (u.writable = !0), Object.defineProperty(e, Ih(u.key), u);
  }
}
function V1(e, t, r) {
  return Zd(e.prototype, t), Zd(e, r), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function Xl(e, t) {
  return Xl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, u) {
    return r.__proto__ = u, r;
  }, Xl(e, t);
}
function W1(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), t && Xl(e, t);
}
function As(e) {
  return As = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, As(e);
}
function Ah() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Ah = function() {
    return !!e;
  })();
}
function X1(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function H1(e, t) {
  if (t && (di(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return X1(e);
}
function z1(e) {
  var t = Ah();
  return function() {
    var r, u = As(e);
    if (t) {
      var o = As(this).constructor;
      r = Reflect.construct(u, arguments, o);
    } else r = u.apply(this, arguments);
    return H1(this, r);
  };
}
function Z1(e) {
  if (Array.isArray(e)) return Wl(e);
}
function Y1(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function J1() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Wi(e) {
  return Z1(e) || Y1(e) || Ch(e) || J1();
}
function U1(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
    raw: {
      value: Object.freeze(t)
    }
  }));
}
const j1 = Math.min, Q1 = Math.max, ws = Math.round, hs = Math.floor, Ss = (e) => ({
  x: e,
  y: e
});
function q1(e) {
  const {
    x: t,
    y: r,
    width: u,
    height: o
  } = e;
  return {
    width: u,
    height: o,
    top: r,
    left: t,
    right: t + u,
    bottom: r + o,
    x: t,
    y: r
  };
}
function ks() {
  return typeof window < "u";
}
function wh(e) {
  return Eh(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ir(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Sh(e) {
  var t;
  return (t = (Eh(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Eh(e) {
  return ks() ? e instanceof Node || e instanceof Ir(e).Node : !1;
}
function $1(e) {
  return ks() ? e instanceof Element || e instanceof Ir(e).Element : !1;
}
function bc(e) {
  return ks() ? e instanceof HTMLElement || e instanceof Ir(e).HTMLElement : !1;
}
function Yd(e) {
  return !ks() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ir(e).ShadowRoot;
}
function Fh(e) {
  const {
    overflow: t,
    overflowX: r,
    overflowY: u,
    display: o
  } = yc(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + u + r) && !["inline", "contents"].includes(o);
}
function K1() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function eC(e) {
  return ["html", "body", "#document"].includes(wh(e));
}
function yc(e) {
  return Ir(e).getComputedStyle(e);
}
function tC(e) {
  if (wh(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Yd(e) && e.host || // Fallback.
    Sh(e)
  );
  return Yd(t) ? t.host : t;
}
function Rh(e) {
  const t = tC(e);
  return eC(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : bc(t) && Fh(t) ? t : Rh(t);
}
function Es(e, t, r) {
  var u;
  t === void 0 && (t = []), r === void 0 && (r = !0);
  const o = Rh(e), a = o === ((u = e.ownerDocument) == null ? void 0 : u.body), l = Ir(o);
  if (a) {
    const c = Hl(l);
    return t.concat(l, l.visualViewport || [], Fh(o) ? o : [], c && r ? Es(c) : []);
  }
  return t.concat(o, Es(o, [], r));
}
function Hl(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function nC(e) {
  const t = yc(e);
  let r = parseFloat(t.width) || 0, u = parseFloat(t.height) || 0;
  const o = bc(e), a = o ? e.offsetWidth : r, l = o ? e.offsetHeight : u, c = ws(r) !== a || ws(u) !== l;
  return c && (r = a, u = l), {
    width: r,
    height: u,
    $: c
  };
}
function vc(e) {
  return $1(e) ? e : e.contextElement;
}
function Jd(e) {
  const t = vc(e);
  if (!bc(t))
    return Ss(1);
  const r = t.getBoundingClientRect(), {
    width: u,
    height: o,
    $: a
  } = nC(t);
  let l = (a ? ws(r.width) : r.width) / u, c = (a ? ws(r.height) : r.height) / o;
  return (!l || !Number.isFinite(l)) && (l = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: l,
    y: c
  };
}
const rC = /* @__PURE__ */ Ss(0);
function iC(e) {
  const t = Ir(e);
  return !K1() || !t.visualViewport ? rC : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function uC(e, t, r) {
  return !1;
}
function Ud(e, t, r, u) {
  t === void 0 && (t = !1);
  const o = e.getBoundingClientRect(), a = vc(e);
  let l = Ss(1);
  t && (l = Jd(e));
  const c = uC() ? iC(a) : Ss(0);
  let f = (o.left + c.x) / l.x, p = (o.top + c.y) / l.y, h = o.width / l.x, g = o.height / l.y;
  if (a) {
    const v = Ir(a), b = u;
    let P = v, A = Hl(P);
    for (; A && u && b !== P; ) {
      const E = Jd(A), F = A.getBoundingClientRect(), k = yc(A), L = F.left + (A.clientLeft + parseFloat(k.paddingLeft)) * E.x, D = F.top + (A.clientTop + parseFloat(k.paddingTop)) * E.y;
      f *= E.x, p *= E.y, h *= E.x, g *= E.y, f += L, p += D, P = Ir(A), A = Hl(P);
    }
  }
  return q1({
    width: h,
    height: g,
    x: f,
    y: p
  });
}
function Ph(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function oC(e, t) {
  let r = null, u;
  const o = Sh(e);
  function a() {
    var c;
    clearTimeout(u), (c = r) == null || c.disconnect(), r = null;
  }
  function l(c, f) {
    c === void 0 && (c = !1), f === void 0 && (f = 1), a();
    const p = e.getBoundingClientRect(), {
      left: h,
      top: g,
      width: v,
      height: b
    } = p;
    if (c || t(), !v || !b)
      return;
    const P = hs(g), A = hs(o.clientWidth - (h + v)), E = hs(o.clientHeight - (g + b)), F = hs(h), L = {
      rootMargin: -P + "px " + -A + "px " + -E + "px " + -F + "px",
      threshold: Q1(0, j1(1, f)) || 1
    };
    let D = !0;
    function H(G) {
      const z = G[0].intersectionRatio;
      if (z !== f) {
        if (!D)
          return l();
        z ? l(!1, z) : u = setTimeout(() => {
          l(!1, 1e-7);
        }, 1e3);
      }
      z === 1 && !Ph(p, e.getBoundingClientRect()) && l(), D = !1;
    }
    try {
      r = new IntersectionObserver(H, {
        ...L,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      r = new IntersectionObserver(H, L);
    }
    r.observe(e);
  }
  return l(!0), a;
}
function sC(e, t, r, u) {
  u === void 0 && (u = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: l = typeof ResizeObserver == "function",
    layoutShift: c = typeof IntersectionObserver == "function",
    animationFrame: f = !1
  } = u, p = vc(e), h = o || a ? [...p ? Es(p) : [], ...Es(t)] : [];
  h.forEach((F) => {
    o && F.addEventListener("scroll", r, {
      passive: !0
    }), a && F.addEventListener("resize", r);
  });
  const g = p && c ? oC(p, r) : null;
  let v = -1, b = null;
  l && (b = new ResizeObserver((F) => {
    let [k] = F;
    k && k.target === p && b && (b.unobserve(t), cancelAnimationFrame(v), v = requestAnimationFrame(() => {
      var L;
      (L = b) == null || L.observe(t);
    })), r();
  }), p && !f && b.observe(p), b.observe(t));
  let P, A = f ? Ud(e) : null;
  f && E();
  function E() {
    const F = Ud(e);
    A && !Ph(A, F) && r(), A = F, P = requestAnimationFrame(E);
  }
  return r(), () => {
    var F;
    h.forEach((k) => {
      o && k.removeEventListener("scroll", r), a && k.removeEventListener("resize", r);
    }), g == null || g(), (F = b) == null || F.disconnect(), b = null, f && cancelAnimationFrame(P);
  };
}
var zl = P1, aC = ["className", "clearValue", "cx", "getStyles", "getClassNames", "getValue", "hasValue", "isMulti", "isRtl", "options", "selectOption", "selectProps", "setValue", "theme"], Fs = function() {
};
function lC(e, t) {
  return t ? t[0] === "-" ? e + t : e + "__" + t : e;
}
function cC(e, t) {
  for (var r = arguments.length, u = new Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++)
    u[o - 2] = arguments[o];
  var a = [].concat(u);
  if (t && e)
    for (var l in t)
      t.hasOwnProperty(l) && t[l] && a.push("".concat(lC(e, l)));
  return a.filter(function(c) {
    return c;
  }).map(function(c) {
    return String(c).trim();
  }).join(" ");
}
var Rs = function(t) {
  return vC(t) ? t.filter(Boolean) : di(t) === "object" && t !== null ? [t] : [];
}, Oh = function(t) {
  t.className, t.clearValue, t.cx, t.getStyles, t.getClassNames, t.getValue, t.hasValue, t.isMulti, t.isRtl, t.options, t.selectOption, t.selectProps, t.setValue, t.theme;
  var r = er(t, aC);
  return de({}, r);
}, ht = function(t, r, u) {
  var o = t.cx, a = t.getStyles, l = t.getClassNames, c = t.className;
  return {
    css: a(r, t),
    className: o(u ?? {}, l(r, t), c)
  };
};
function Ds(e) {
  return [document.documentElement, document.body, window].indexOf(e) > -1;
}
function fC(e) {
  return Ds(e) ? window.innerHeight : e.clientHeight;
}
function Th(e) {
  return Ds(e) ? window.pageYOffset : e.scrollTop;
}
function Ps(e, t) {
  if (Ds(e)) {
    window.scrollTo(0, t);
    return;
  }
  e.scrollTop = t;
}
function dC(e) {
  var t = getComputedStyle(e), r = t.position === "absolute", u = /(auto|scroll)/;
  if (t.position === "fixed") return document.documentElement;
  for (var o = e; o = o.parentElement; )
    if (t = getComputedStyle(o), !(r && t.position === "static") && u.test(t.overflow + t.overflowY + t.overflowX))
      return o;
  return document.documentElement;
}
function pC(e, t, r, u) {
  return r * ((e = e / u - 1) * e * e + 1) + t;
}
function gs(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 200, u = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : Fs, o = Th(e), a = t - o, l = 10, c = 0;
  function f() {
    c += l;
    var p = pC(c, o, a, r);
    Ps(e, p), c < r ? window.requestAnimationFrame(f) : u(e);
  }
  f();
}
function jd(e, t) {
  var r = e.getBoundingClientRect(), u = t.getBoundingClientRect(), o = t.offsetHeight / 3;
  u.bottom + o > r.bottom ? Ps(e, Math.min(t.offsetTop + t.clientHeight - e.offsetHeight + o, e.scrollHeight)) : u.top - o < r.top && Ps(e, Math.max(t.offsetTop - o, 0));
}
function hC(e) {
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
function Qd() {
  try {
    return document.createEvent("TouchEvent"), !0;
  } catch {
    return !1;
  }
}
function gC() {
  try {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  } catch {
    return !1;
  }
}
var Bh = !1, mC = {
  get passive() {
    return Bh = !0;
  }
}, ms = typeof window < "u" ? window : {};
ms.addEventListener && ms.removeEventListener && (ms.addEventListener("p", Fs, mC), ms.removeEventListener("p", Fs, !1));
var bC = Bh;
function yC(e) {
  return e != null;
}
function vC(e) {
  return Array.isArray(e);
}
function Nu(e, t, r) {
  return e ? t : r;
}
var IC = function(t) {
  for (var r = arguments.length, u = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
    u[o - 1] = arguments[o];
  var a = Object.entries(t).filter(function(l) {
    var c = vr(l, 1), f = c[0];
    return !u.includes(f);
  });
  return a.reduce(function(l, c) {
    var f = vr(c, 2), p = f[0], h = f[1];
    return l[p] = h, l;
  }, {});
}, CC = ["children", "innerProps"], xC = ["children", "innerProps"];
function AC(e) {
  var t = e.maxHeight, r = e.menuEl, u = e.minHeight, o = e.placement, a = e.shouldScroll, l = e.isFixedPosition, c = e.controlHeight, f = dC(r), p = {
    placement: "bottom",
    maxHeight: t
  };
  if (!r || !r.offsetParent) return p;
  var h = f.getBoundingClientRect(), g = h.height, v = r.getBoundingClientRect(), b = v.bottom, P = v.height, A = v.top, E = r.offsetParent.getBoundingClientRect(), F = E.top, k = l ? window.innerHeight : fC(f), L = Th(f), D = parseInt(getComputedStyle(r).marginBottom, 10), H = parseInt(getComputedStyle(r).marginTop, 10), G = F - H, z = k - A, N = G + L, V = g - L - A, ne = b - k + L + D, Q = L + A - H, j = 160;
  switch (o) {
    case "auto":
    case "bottom":
      if (z >= P)
        return {
          placement: "bottom",
          maxHeight: t
        };
      if (V >= P && !l)
        return a && gs(f, ne, j), {
          placement: "bottom",
          maxHeight: t
        };
      if (!l && V >= u || l && z >= u) {
        a && gs(f, ne, j);
        var te = l ? z - D : V - D;
        return {
          placement: "bottom",
          maxHeight: te
        };
      }
      if (o === "auto" || l) {
        var ee = t, K = l ? G : N;
        return K >= u && (ee = Math.min(K - D - c, t)), {
          placement: "top",
          maxHeight: ee
        };
      }
      if (o === "bottom")
        return a && Ps(f, ne), {
          placement: "bottom",
          maxHeight: t
        };
      break;
    case "top":
      if (G >= P)
        return {
          placement: "top",
          maxHeight: t
        };
      if (N >= P && !l)
        return a && gs(f, Q, j), {
          placement: "top",
          maxHeight: t
        };
      if (!l && N >= u || l && G >= u) {
        var pe = t;
        return (!l && N >= u || l && G >= u) && (pe = l ? G - H : N - H), a && gs(f, Q, j), {
          placement: "top",
          maxHeight: pe
        };
      }
      return {
        placement: "bottom",
        maxHeight: t
      };
    default:
      throw new Error('Invalid placement provided "'.concat(o, '".'));
  }
  return p;
}
function wC(e) {
  var t = {
    bottom: "top",
    top: "bottom"
  };
  return e ? t[e] : "bottom";
}
var _h = function(t) {
  return t === "auto" ? "bottom" : t;
}, SC = function(t, r) {
  var u, o = t.placement, a = t.theme, l = a.borderRadius, c = a.spacing, f = a.colors;
  return de((u = {
    label: "menu"
  }, Mu(u, wC(o), "100%"), Mu(u, "position", "absolute"), Mu(u, "width", "100%"), Mu(u, "zIndex", 1), u), r ? {} : {
    backgroundColor: f.neutral0,
    borderRadius: l,
    boxShadow: "0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",
    marginBottom: c.menuGutter,
    marginTop: c.menuGutter
  });
}, Gh = /* @__PURE__ */ Ku(null), EC = function(t) {
  var r = t.children, u = t.minMenuHeight, o = t.maxMenuHeight, a = t.menuPlacement, l = t.menuPosition, c = t.menuShouldScrollIntoView, f = t.theme, p = iu(Gh) || {}, h = p.setPortalPlacement, g = yr(null), v = et(o), b = vr(v, 2), P = b[0], A = b[1], E = et(null), F = vr(E, 2), k = F[0], L = F[1], D = f.spacing.controlHeight;
  return zl(function() {
    var H = g.current;
    if (H) {
      var G = l === "fixed", z = c && !G, N = AC({
        maxHeight: o,
        menuEl: H,
        minHeight: u,
        placement: a,
        shouldScroll: z,
        isFixedPosition: G,
        controlHeight: D
      });
      A(N.maxHeight), L(N.placement), h == null || h(N.placement);
    }
  }, [o, a, l, c, u, h, D]), r({
    ref: g,
    placerProps: de(de({}, t), {}, {
      placement: k || _h(a),
      maxHeight: P
    })
  });
}, FC = function(t) {
  var r = t.children, u = t.innerRef, o = t.innerProps;
  return ge("div", ye({}, ht(t, "menu", {
    menu: !0
  }), {
    ref: u
  }, o), r);
}, RC = FC, PC = function(t, r) {
  var u = t.maxHeight, o = t.theme.spacing.baseUnit;
  return de({
    maxHeight: u,
    overflowY: "auto",
    position: "relative",
    // required for offset[Height, Top] > keyboard scroll
    WebkitOverflowScrolling: "touch"
  }, r ? {} : {
    paddingBottom: o,
    paddingTop: o
  });
}, OC = function(t) {
  var r = t.children, u = t.innerProps, o = t.innerRef, a = t.isMulti;
  return ge("div", ye({}, ht(t, "menuList", {
    "menu-list": !0,
    "menu-list--is-multi": a
  }), {
    ref: o
  }, u), r);
}, Lh = function(t, r) {
  var u = t.theme, o = u.spacing.baseUnit, a = u.colors;
  return de({
    textAlign: "center"
  }, r ? {} : {
    color: a.neutral40,
    padding: "".concat(o * 2, "px ").concat(o * 3, "px")
  });
}, TC = Lh, BC = Lh, _C = function(t) {
  var r = t.children, u = r === void 0 ? "No options" : r, o = t.innerProps, a = er(t, CC);
  return ge("div", ye({}, ht(de(de({}, a), {}, {
    children: u,
    innerProps: o
  }), "noOptionsMessage", {
    "menu-notice": !0,
    "menu-notice--no-options": !0
  }), o), u);
}, GC = function(t) {
  var r = t.children, u = r === void 0 ? "Loading..." : r, o = t.innerProps, a = er(t, xC);
  return ge("div", ye({}, ht(de(de({}, a), {}, {
    children: u,
    innerProps: o
  }), "loadingMessage", {
    "menu-notice": !0,
    "menu-notice--loading": !0
  }), o), u);
}, LC = function(t) {
  var r = t.rect, u = t.offset, o = t.position;
  return {
    left: r.left,
    position: o,
    top: u,
    width: r.width,
    zIndex: 1
  };
}, kC = function(t) {
  var r = t.appendTo, u = t.children, o = t.controlElement, a = t.innerProps, l = t.menuPlacement, c = t.menuPosition, f = yr(null), p = yr(null), h = et(_h(l)), g = vr(h, 2), v = g[0], b = g[1], P = Qn(function() {
    return {
      setPortalPlacement: b
    };
  }, []), A = et(null), E = vr(A, 2), F = E[0], k = E[1], L = Gt(function() {
    if (o) {
      var z = hC(o), N = c === "fixed" ? 0 : window.pageYOffset, V = z[v] + N;
      (V !== (F == null ? void 0 : F.offset) || z.left !== (F == null ? void 0 : F.rect.left) || z.width !== (F == null ? void 0 : F.rect.width)) && k({
        offset: V,
        rect: z
      });
    }
  }, [o, c, v, F == null ? void 0 : F.offset, F == null ? void 0 : F.rect.left, F == null ? void 0 : F.rect.width]);
  zl(function() {
    L();
  }, [L]);
  var D = Gt(function() {
    typeof p.current == "function" && (p.current(), p.current = null), o && f.current && (p.current = sC(o, f.current, L, {
      elementResize: "ResizeObserver" in window
    }));
  }, [o, L]);
  zl(function() {
    D();
  }, [D]);
  var H = Gt(function(z) {
    f.current = z, D();
  }, [D]);
  if (!r && c !== "fixed" || !F) return null;
  var G = ge("div", ye({
    ref: H
  }, ht(de(de({}, t), {}, {
    offset: F.offset,
    position: c,
    rect: F.rect
  }), "menuPortal", {
    "menu-portal": !0
  }), a), u);
  return ge(Gh.Provider, {
    value: P
  }, r ? /* @__PURE__ */ B1(G, r) : G);
}, DC = function(t) {
  var r = t.isDisabled, u = t.isRtl;
  return {
    label: "container",
    direction: u ? "rtl" : void 0,
    pointerEvents: r ? "none" : void 0,
    // cancel mouse events when disabled
    position: "relative"
  };
}, MC = function(t) {
  var r = t.children, u = t.innerProps, o = t.isDisabled, a = t.isRtl;
  return ge("div", ye({}, ht(t, "container", {
    "--is-disabled": o,
    "--is-rtl": a
  }), u), r);
}, NC = function(t, r) {
  var u = t.theme.spacing, o = t.isMulti, a = t.hasValue, l = t.selectProps.controlShouldRenderValue;
  return de({
    alignItems: "center",
    display: o && a && l ? "flex" : "grid",
    flex: 1,
    flexWrap: "wrap",
    WebkitOverflowScrolling: "touch",
    position: "relative",
    overflow: "hidden"
  }, r ? {} : {
    padding: "".concat(u.baseUnit / 2, "px ").concat(u.baseUnit * 2, "px")
  });
}, VC = function(t) {
  var r = t.children, u = t.innerProps, o = t.isMulti, a = t.hasValue;
  return ge("div", ye({}, ht(t, "valueContainer", {
    "value-container": !0,
    "value-container--is-multi": o,
    "value-container--has-value": a
  }), u), r);
}, WC = function() {
  return {
    alignItems: "center",
    alignSelf: "stretch",
    display: "flex",
    flexShrink: 0
  };
}, XC = function(t) {
  var r = t.children, u = t.innerProps;
  return ge("div", ye({}, ht(t, "indicatorsContainer", {
    indicators: !0
  }), u), r);
}, qd, HC = ["size"], zC = ["innerProps", "isRtl", "size"];
function ZC() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var YC = process.env.NODE_ENV === "production" ? {
  name: "8mmkcg",
  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"
} : {
  name: "tj5bde-Svg",
  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0;label:Svg;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCSSIsImZpbGUiOiJpbmRpY2F0b3JzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgSlNYLCBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3gsIGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuaW1wb3J0IHtcbiAgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWUsXG4gIENTU09iamVjdFdpdGhMYWJlbCxcbiAgR3JvdXBCYXNlLFxufSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBnZXRTdHlsZVByb3BzIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgSWNvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBTdmcgPSAoe1xuICBzaXplLFxuICAuLi5wcm9wc1xufTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzdmcnXSAmIHsgc2l6ZTogbnVtYmVyIH0pID0+IChcbiAgPHN2Z1xuICAgIGhlaWdodD17c2l6ZX1cbiAgICB3aWR0aD17c2l6ZX1cbiAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcbiAgICBjc3M9e3tcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBsaW5lSGVpZ2h0OiAxLFxuICAgICAgc3Ryb2tlOiAnY3VycmVudENvbG9yJyxcbiAgICAgIHN0cm9rZVdpZHRoOiAwLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IHR5cGUgQ3Jvc3NJY29uUHJvcHMgPSBKU1guSW50cmluc2ljRWxlbWVudHNbJ3N2ZyddICYgeyBzaXplPzogbnVtYmVyIH07XG5leHBvcnQgY29uc3QgQ3Jvc3NJY29uID0gKHByb3BzOiBDcm9zc0ljb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNMTQuMzQ4IDE0Ljg0OWMtMC40NjkgMC40NjktMS4yMjkgMC40NjktMS42OTcgMGwtMi42NTEtMy4wMzAtMi42NTEgMy4wMjljLTAuNDY5IDAuNDY5LTEuMjI5IDAuNDY5LTEuNjk3IDAtMC40NjktMC40NjktMC40NjktMS4yMjkgMC0xLjY5N2wyLjc1OC0zLjE1LTIuNzU5LTMuMTUyYy0wLjQ2OS0wLjQ2OS0wLjQ2OS0xLjIyOCAwLTEuNjk3czEuMjI4LTAuNDY5IDEuNjk3IDBsMi42NTIgMy4wMzEgMi42NTEtMy4wMzFjMC40NjktMC40NjkgMS4yMjgtMC40NjkgMS42OTcgMHMwLjQ2OSAxLjIyOSAwIDEuNjk3bC0yLjc1OCAzLjE1MiAyLjc1OCAzLjE1YzAuNDY5IDAuNDY5IDAuNDY5IDEuMjI5IDAgMS42OTh6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuZXhwb3J0IHR5cGUgRG93bkNoZXZyb25Qcm9wcyA9IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snc3ZnJ10gJiB7IHNpemU/OiBudW1iZXIgfTtcbmV4cG9ydCBjb25zdCBEb3duQ2hldnJvbiA9IChwcm9wczogRG93bkNoZXZyb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNNC41MTYgNy41NDhjMC40MzYtMC40NDYgMS4wNDMtMC40ODEgMS41NzYgMGwzLjkwOCAzLjc0NyAzLjkwOC0zLjc0N2MwLjUzMy0wLjQ4MSAxLjE0MS0wLjQ0NiAxLjU3NCAwIDAuNDM2IDAuNDQ1IDAuNDA4IDEuMTk3IDAgMS42MTUtMC40MDYgMC40MTgtNC42OTUgNC41MDItNC42OTUgNC41MDItMC4yMTcgMC4yMjMtMC41MDIgMC4zMzUtMC43ODcgMC4zMzVzLTAuNTctMC4xMTItMC43ODktMC4zMzVjMCAwLTQuMjg3LTQuMDg0LTQuNjk1LTQuNTAycy0wLjQzNi0xLjE3IDAtMS42MTV6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgQnV0dG9uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxcbiAgT3B0aW9uID0gdW5rbm93bixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4gPSBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+ID0gR3JvdXBCYXNlPE9wdGlvbj5cbj4gZXh0ZW5kcyBDb21tb25Qcm9wc0FuZENsYXNzTmFtZTxPcHRpb24sIElzTXVsdGksIEdyb3VwPiB7XG4gIC8qKiBUaGUgY2hpbGRyZW4gdG8gYmUgcmVuZGVyZWQgaW5zaWRlIHRoZSBpbmRpY2F0b3IuICovXG4gIGNoaWxkcmVuPzogUmVhY3ROb2RlO1xuICAvKiogUHJvcHMgdGhhdCB3aWxsIGJlIHBhc3NlZCBvbiB0byB0aGUgY2hpbGRyZW4uICovXG4gIGlubmVyUHJvcHM6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snZGl2J107XG4gIC8qKiBUaGUgZm9jdXNlZCBzdGF0ZSBvZiB0aGUgc2VsZWN0LiAqL1xuICBpc0ZvY3VzZWQ6IGJvb2xlYW47XG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG59XG5cbmNvbnN0IGJhc2VDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0ZvY3VzZWQsXG4gICAgdGhlbWU6IHtcbiAgICAgIHNwYWNpbmc6IHsgYmFzZVVuaXQgfSxcbiAgICAgIGNvbG9ycyxcbiAgICB9LFxuICB9OlxuICAgIHwgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuICAgIHwgQ2xlYXJJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPixcbiAgdW5zdHlsZWQ6IGJvb2xlYW5cbik6IENTU09iamVjdFdpdGhMYWJlbCA9PiAoe1xuICBsYWJlbDogJ2luZGljYXRvckNvbnRhaW5lcicsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgdHJhbnNpdGlvbjogJ2NvbG9yIDE1MG1zJyxcbiAgLi4uKHVuc3R5bGVkXG4gICAgPyB7fVxuICAgIDoge1xuICAgICAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw2MCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgICAgIHBhZGRpbmc6IGJhc2VVbml0ICogMixcbiAgICAgICAgJzpob3Zlcic6IHtcbiAgICAgICAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw4MCA6IGNvbG9ycy5uZXV0cmFsNDAsXG4gICAgICAgIH0sXG4gICAgICB9KSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZHJvcGRvd25JbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IERyb3Bkb3duSW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogRHJvcGRvd25JbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnZHJvcGRvd25JbmRpY2F0b3InLCB7XG4gICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgJ2Ryb3Bkb3duLWluZGljYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8RG93bkNoZXZyb24gLz59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIENsZWFySW5kaWNhdG9yUHJvcHM8XG4gIE9wdGlvbiA9IHVua25vd24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuID0gYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPiA9IEdyb3VwQmFzZTxPcHRpb24+XG4+IGV4dGVuZHMgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWU8T3B0aW9uLCBJc011bHRpLCBHcm91cD4ge1xuICAvKiogVGhlIGNoaWxkcmVuIHRvIGJlIHJlbmRlcmVkIGluc2lkZSB0aGUgaW5kaWNhdG9yLiAqL1xuICBjaGlsZHJlbj86IFJlYWN0Tm9kZTtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgY2xlYXJJbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IENsZWFySW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogQ2xlYXJJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnY2xlYXJJbmRpY2F0b3InLCB7XG4gICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgJ2NsZWFyLWluZGljYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8Q3Jvc3NJY29uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTZXBhcmF0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgaW50ZXJmYWNlIEluZGljYXRvclNlcGFyYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpbm5lclByb3BzPzogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzcGFuJ107XG59XG5cbmV4cG9ydCBjb25zdCBpbmRpY2F0b3JTZXBhcmF0b3JDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0Rpc2FibGVkLFxuICAgIHRoZW1lOiB7XG4gICAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gICAgICBjb2xvcnMsXG4gICAgfSxcbiAgfTogSW5kaWNhdG9yU2VwYXJhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4sXG4gIHVuc3R5bGVkOiBib29sZWFuXG4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdpbmRpY2F0b3JTZXBhcmF0b3InLFxuICBhbGlnblNlbGY6ICdzdHJldGNoJyxcbiAgd2lkdGg6IDEsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBpc0Rpc2FibGVkID8gY29sb3JzLm5ldXRyYWwxMCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogYmFzZVVuaXQgKiAyLFxuICAgICAgICBtYXJnaW5Ub3A6IGJhc2VVbml0ICogMixcbiAgICAgIH0pLFxufSk7XG5cbmV4cG9ydCBjb25zdCBJbmRpY2F0b3JTZXBhcmF0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHByb3BzOiBJbmRpY2F0b3JTZXBhcmF0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgaW5uZXJQcm9wcyB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPHNwYW5cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgey4uLmdldFN0eWxlUHJvcHMocHJvcHMsICdpbmRpY2F0b3JTZXBhcmF0b3InLCB7XG4gICAgICAgICdpbmRpY2F0b3Itc2VwYXJhdG9yJzogdHJ1ZSxcbiAgICAgIH0pfVxuICAgIC8+XG4gICk7XG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIExvYWRpbmdcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBsb2FkaW5nRG90QW5pbWF0aW9ucyA9IGtleWZyYW1lc2BcbiAgMCUsIDgwJSwgMTAwJSB7IG9wYWNpdHk6IDA7IH1cbiAgNDAlIHsgb3BhY2l0eTogMTsgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGxvYWRpbmdJbmRpY2F0b3JDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0ZvY3VzZWQsXG4gICAgc2l6ZSxcbiAgICB0aGVtZToge1xuICAgICAgY29sb3JzLFxuICAgICAgc3BhY2luZzogeyBiYXNlVW5pdCB9LFxuICAgIH0sXG4gIH06IExvYWRpbmdJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPixcbiAgdW5zdHlsZWQ6IGJvb2xlYW5cbik6IENTU09iamVjdFdpdGhMYWJlbCA9PiAoe1xuICBsYWJlbDogJ2xvYWRpbmdJbmRpY2F0b3InLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHRyYW5zaXRpb246ICdjb2xvciAxNTBtcycsXG4gIGFsaWduU2VsZjogJ2NlbnRlcicsXG4gIGZvbnRTaXplOiBzaXplLFxuICBsaW5lSGVpZ2h0OiAxLFxuICBtYXJnaW5SaWdodDogc2l6ZSxcbiAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgICAgICBwYWRkaW5nOiBiYXNlVW5pdCAqIDIsXG4gICAgICB9KSxcbn0pO1xuXG5pbnRlcmZhY2UgTG9hZGluZ0RvdFByb3BzIHtcbiAgZGVsYXk6IG51bWJlcjtcbiAgb2Zmc2V0OiBib29sZWFuO1xufVxuY29uc3QgTG9hZGluZ0RvdCA9ICh7IGRlbGF5LCBvZmZzZXQgfTogTG9hZGluZ0RvdFByb3BzKSA9PiAoXG4gIDxzcGFuXG4gICAgY3NzPXt7XG4gICAgICBhbmltYXRpb246IGAke2xvYWRpbmdEb3RBbmltYXRpb25zfSAxcyBlYXNlLWluLW91dCAke2RlbGF5fW1zIGluZmluaXRlO2AsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdjdXJyZW50Q29sb3InLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnMWVtJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgbWFyZ2luTGVmdDogb2Zmc2V0ID8gJzFlbScgOiB1bmRlZmluZWQsXG4gICAgICBoZWlnaHQ6ICcxZW0nLFxuICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICB3aWR0aDogJzFlbScsXG4gICAgfX1cbiAgLz5cbik7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGluZ0luZGljYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpc0Rpc2FibGVkOiBib29sZWFuO1xuICAvKiogU2V0IHNpemUgb2YgdGhlIGNvbnRhaW5lci4gKi9cbiAgc2l6ZTogbnVtYmVyO1xufVxuZXhwb3J0IGNvbnN0IExvYWRpbmdJbmRpY2F0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oe1xuICBpbm5lclByb3BzLFxuICBpc1J0bCxcbiAgc2l6ZSA9IDQsXG4gIC4uLnJlc3RQcm9wc1xufTogTG9hZGluZ0luZGljYXRvclByb3BzPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgey4uLmdldFN0eWxlUHJvcHMoXG4gICAgICAgIHsgLi4ucmVzdFByb3BzLCBpbm5lclByb3BzLCBpc1J0bCwgc2l6ZSB9LFxuICAgICAgICAnbG9hZGluZ0luZGljYXRvcicsXG4gICAgICAgIHtcbiAgICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICAgJ2xvYWRpbmctaW5kaWNhdG9yJzogdHJ1ZSxcbiAgICAgICAgfVxuICAgICAgKX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXswfSBvZmZzZXQ9e2lzUnRsfSAvPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezE2MH0gb2Zmc2V0IC8+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MzIwfSBvZmZzZXQ9eyFpc1J0bH0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXX0= */",
  toString: ZC
}, kh = function(t) {
  var r = t.size, u = er(t, HC);
  return ge("svg", ye({
    height: r,
    width: r,
    viewBox: "0 0 20 20",
    "aria-hidden": "true",
    focusable: "false",
    css: YC
  }, u));
}, Ic = function(t) {
  return ge(kh, ye({
    size: 20
  }, t), ge("path", {
    d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
  }));
}, Dh = function(t) {
  return ge(kh, ye({
    size: 20
  }, t), ge("path", {
    d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
  }));
}, Mh = function(t, r) {
  var u = t.isFocused, o = t.theme, a = o.spacing.baseUnit, l = o.colors;
  return de({
    label: "indicatorContainer",
    display: "flex",
    transition: "color 150ms"
  }, r ? {} : {
    color: u ? l.neutral60 : l.neutral20,
    padding: a * 2,
    ":hover": {
      color: u ? l.neutral80 : l.neutral40
    }
  });
}, JC = Mh, UC = function(t) {
  var r = t.children, u = t.innerProps;
  return ge("div", ye({}, ht(t, "dropdownIndicator", {
    indicator: !0,
    "dropdown-indicator": !0
  }), u), r || ge(Dh, null));
}, jC = Mh, QC = function(t) {
  var r = t.children, u = t.innerProps;
  return ge("div", ye({}, ht(t, "clearIndicator", {
    indicator: !0,
    "clear-indicator": !0
  }), u), r || ge(Ic, null));
}, qC = function(t, r) {
  var u = t.isDisabled, o = t.theme, a = o.spacing.baseUnit, l = o.colors;
  return de({
    label: "indicatorSeparator",
    alignSelf: "stretch",
    width: 1
  }, r ? {} : {
    backgroundColor: u ? l.neutral10 : l.neutral20,
    marginBottom: a * 2,
    marginTop: a * 2
  });
}, $C = function(t) {
  var r = t.innerProps;
  return ge("span", ye({}, r, ht(t, "indicatorSeparator", {
    "indicator-separator": !0
  })));
}, KC = T1(qd || (qd = U1([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))), ex = function(t, r) {
  var u = t.isFocused, o = t.size, a = t.theme, l = a.colors, c = a.spacing.baseUnit;
  return de({
    label: "loadingIndicator",
    display: "flex",
    transition: "color 150ms",
    alignSelf: "center",
    fontSize: o,
    lineHeight: 1,
    marginRight: o,
    textAlign: "center",
    verticalAlign: "middle"
  }, r ? {} : {
    color: u ? l.neutral60 : l.neutral20,
    padding: c * 2
  });
}, vl = function(t) {
  var r = t.delay, u = t.offset;
  return ge("span", {
    css: /* @__PURE__ */ vh({
      animation: "".concat(KC, " 1s ease-in-out ").concat(r, "ms infinite;"),
      backgroundColor: "currentColor",
      borderRadius: "1em",
      display: "inline-block",
      marginLeft: u ? "1em" : void 0,
      height: "1em",
      verticalAlign: "top",
      width: "1em"
    }, process.env.NODE_ENV === "production" ? "" : ";label:LoadingDot;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1RSSIsImZpbGUiOiJpbmRpY2F0b3JzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgSlNYLCBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3gsIGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuaW1wb3J0IHtcbiAgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWUsXG4gIENTU09iamVjdFdpdGhMYWJlbCxcbiAgR3JvdXBCYXNlLFxufSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBnZXRTdHlsZVByb3BzIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgSWNvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBTdmcgPSAoe1xuICBzaXplLFxuICAuLi5wcm9wc1xufTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzdmcnXSAmIHsgc2l6ZTogbnVtYmVyIH0pID0+IChcbiAgPHN2Z1xuICAgIGhlaWdodD17c2l6ZX1cbiAgICB3aWR0aD17c2l6ZX1cbiAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcbiAgICBjc3M9e3tcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBsaW5lSGVpZ2h0OiAxLFxuICAgICAgc3Ryb2tlOiAnY3VycmVudENvbG9yJyxcbiAgICAgIHN0cm9rZVdpZHRoOiAwLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IHR5cGUgQ3Jvc3NJY29uUHJvcHMgPSBKU1guSW50cmluc2ljRWxlbWVudHNbJ3N2ZyddICYgeyBzaXplPzogbnVtYmVyIH07XG5leHBvcnQgY29uc3QgQ3Jvc3NJY29uID0gKHByb3BzOiBDcm9zc0ljb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNMTQuMzQ4IDE0Ljg0OWMtMC40NjkgMC40NjktMS4yMjkgMC40NjktMS42OTcgMGwtMi42NTEtMy4wMzAtMi42NTEgMy4wMjljLTAuNDY5IDAuNDY5LTEuMjI5IDAuNDY5LTEuNjk3IDAtMC40NjktMC40NjktMC40NjktMS4yMjkgMC0xLjY5N2wyLjc1OC0zLjE1LTIuNzU5LTMuMTUyYy0wLjQ2OS0wLjQ2OS0wLjQ2OS0xLjIyOCAwLTEuNjk3czEuMjI4LTAuNDY5IDEuNjk3IDBsMi42NTIgMy4wMzEgMi42NTEtMy4wMzFjMC40NjktMC40NjkgMS4yMjgtMC40NjkgMS42OTcgMHMwLjQ2OSAxLjIyOSAwIDEuNjk3bC0yLjc1OCAzLjE1MiAyLjc1OCAzLjE1YzAuNDY5IDAuNDY5IDAuNDY5IDEuMjI5IDAgMS42OTh6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuZXhwb3J0IHR5cGUgRG93bkNoZXZyb25Qcm9wcyA9IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snc3ZnJ10gJiB7IHNpemU/OiBudW1iZXIgfTtcbmV4cG9ydCBjb25zdCBEb3duQ2hldnJvbiA9IChwcm9wczogRG93bkNoZXZyb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNNC41MTYgNy41NDhjMC40MzYtMC40NDYgMS4wNDMtMC40ODEgMS41NzYgMGwzLjkwOCAzLjc0NyAzLjkwOC0zLjc0N2MwLjUzMy0wLjQ4MSAxLjE0MS0wLjQ0NiAxLjU3NCAwIDAuNDM2IDAuNDQ1IDAuNDA4IDEuMTk3IDAgMS42MTUtMC40MDYgMC40MTgtNC42OTUgNC41MDItNC42OTUgNC41MDItMC4yMTcgMC4yMjMtMC41MDIgMC4zMzUtMC43ODcgMC4zMzVzLTAuNTctMC4xMTItMC43ODktMC4zMzVjMCAwLTQuMjg3LTQuMDg0LTQuNjk1LTQuNTAycy0wLjQzNi0xLjE3IDAtMS42MTV6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgQnV0dG9uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxcbiAgT3B0aW9uID0gdW5rbm93bixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4gPSBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+ID0gR3JvdXBCYXNlPE9wdGlvbj5cbj4gZXh0ZW5kcyBDb21tb25Qcm9wc0FuZENsYXNzTmFtZTxPcHRpb24sIElzTXVsdGksIEdyb3VwPiB7XG4gIC8qKiBUaGUgY2hpbGRyZW4gdG8gYmUgcmVuZGVyZWQgaW5zaWRlIHRoZSBpbmRpY2F0b3IuICovXG4gIGNoaWxkcmVuPzogUmVhY3ROb2RlO1xuICAvKiogUHJvcHMgdGhhdCB3aWxsIGJlIHBhc3NlZCBvbiB0byB0aGUgY2hpbGRyZW4uICovXG4gIGlubmVyUHJvcHM6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snZGl2J107XG4gIC8qKiBUaGUgZm9jdXNlZCBzdGF0ZSBvZiB0aGUgc2VsZWN0LiAqL1xuICBpc0ZvY3VzZWQ6IGJvb2xlYW47XG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG59XG5cbmNvbnN0IGJhc2VDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0ZvY3VzZWQsXG4gICAgdGhlbWU6IHtcbiAgICAgIHNwYWNpbmc6IHsgYmFzZVVuaXQgfSxcbiAgICAgIGNvbG9ycyxcbiAgICB9LFxuICB9OlxuICAgIHwgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuICAgIHwgQ2xlYXJJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPixcbiAgdW5zdHlsZWQ6IGJvb2xlYW5cbik6IENTU09iamVjdFdpdGhMYWJlbCA9PiAoe1xuICBsYWJlbDogJ2luZGljYXRvckNvbnRhaW5lcicsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgdHJhbnNpdGlvbjogJ2NvbG9yIDE1MG1zJyxcbiAgLi4uKHVuc3R5bGVkXG4gICAgPyB7fVxuICAgIDoge1xuICAgICAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw2MCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgICAgIHBhZGRpbmc6IGJhc2VVbml0ICogMixcbiAgICAgICAgJzpob3Zlcic6IHtcbiAgICAgICAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw4MCA6IGNvbG9ycy5uZXV0cmFsNDAsXG4gICAgICAgIH0sXG4gICAgICB9KSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZHJvcGRvd25JbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IERyb3Bkb3duSW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogRHJvcGRvd25JbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnZHJvcGRvd25JbmRpY2F0b3InLCB7XG4gICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgJ2Ryb3Bkb3duLWluZGljYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8RG93bkNoZXZyb24gLz59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIENsZWFySW5kaWNhdG9yUHJvcHM8XG4gIE9wdGlvbiA9IHVua25vd24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuID0gYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPiA9IEdyb3VwQmFzZTxPcHRpb24+XG4+IGV4dGVuZHMgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWU8T3B0aW9uLCBJc011bHRpLCBHcm91cD4ge1xuICAvKiogVGhlIGNoaWxkcmVuIHRvIGJlIHJlbmRlcmVkIGluc2lkZSB0aGUgaW5kaWNhdG9yLiAqL1xuICBjaGlsZHJlbj86IFJlYWN0Tm9kZTtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgY2xlYXJJbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IENsZWFySW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogQ2xlYXJJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnY2xlYXJJbmRpY2F0b3InLCB7XG4gICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgJ2NsZWFyLWluZGljYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8Q3Jvc3NJY29uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTZXBhcmF0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgaW50ZXJmYWNlIEluZGljYXRvclNlcGFyYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpbm5lclByb3BzPzogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzcGFuJ107XG59XG5cbmV4cG9ydCBjb25zdCBpbmRpY2F0b3JTZXBhcmF0b3JDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0Rpc2FibGVkLFxuICAgIHRoZW1lOiB7XG4gICAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gICAgICBjb2xvcnMsXG4gICAgfSxcbiAgfTogSW5kaWNhdG9yU2VwYXJhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4sXG4gIHVuc3R5bGVkOiBib29sZWFuXG4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdpbmRpY2F0b3JTZXBhcmF0b3InLFxuICBhbGlnblNlbGY6ICdzdHJldGNoJyxcbiAgd2lkdGg6IDEsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBpc0Rpc2FibGVkID8gY29sb3JzLm5ldXRyYWwxMCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogYmFzZVVuaXQgKiAyLFxuICAgICAgICBtYXJnaW5Ub3A6IGJhc2VVbml0ICogMixcbiAgICAgIH0pLFxufSk7XG5cbmV4cG9ydCBjb25zdCBJbmRpY2F0b3JTZXBhcmF0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHByb3BzOiBJbmRpY2F0b3JTZXBhcmF0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgaW5uZXJQcm9wcyB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPHNwYW5cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgey4uLmdldFN0eWxlUHJvcHMocHJvcHMsICdpbmRpY2F0b3JTZXBhcmF0b3InLCB7XG4gICAgICAgICdpbmRpY2F0b3Itc2VwYXJhdG9yJzogdHJ1ZSxcbiAgICAgIH0pfVxuICAgIC8+XG4gICk7XG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIExvYWRpbmdcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBsb2FkaW5nRG90QW5pbWF0aW9ucyA9IGtleWZyYW1lc2BcbiAgMCUsIDgwJSwgMTAwJSB7IG9wYWNpdHk6IDA7IH1cbiAgNDAlIHsgb3BhY2l0eTogMTsgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGxvYWRpbmdJbmRpY2F0b3JDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0ZvY3VzZWQsXG4gICAgc2l6ZSxcbiAgICB0aGVtZToge1xuICAgICAgY29sb3JzLFxuICAgICAgc3BhY2luZzogeyBiYXNlVW5pdCB9LFxuICAgIH0sXG4gIH06IExvYWRpbmdJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPixcbiAgdW5zdHlsZWQ6IGJvb2xlYW5cbik6IENTU09iamVjdFdpdGhMYWJlbCA9PiAoe1xuICBsYWJlbDogJ2xvYWRpbmdJbmRpY2F0b3InLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHRyYW5zaXRpb246ICdjb2xvciAxNTBtcycsXG4gIGFsaWduU2VsZjogJ2NlbnRlcicsXG4gIGZvbnRTaXplOiBzaXplLFxuICBsaW5lSGVpZ2h0OiAxLFxuICBtYXJnaW5SaWdodDogc2l6ZSxcbiAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgICAgICBwYWRkaW5nOiBiYXNlVW5pdCAqIDIsXG4gICAgICB9KSxcbn0pO1xuXG5pbnRlcmZhY2UgTG9hZGluZ0RvdFByb3BzIHtcbiAgZGVsYXk6IG51bWJlcjtcbiAgb2Zmc2V0OiBib29sZWFuO1xufVxuY29uc3QgTG9hZGluZ0RvdCA9ICh7IGRlbGF5LCBvZmZzZXQgfTogTG9hZGluZ0RvdFByb3BzKSA9PiAoXG4gIDxzcGFuXG4gICAgY3NzPXt7XG4gICAgICBhbmltYXRpb246IGAke2xvYWRpbmdEb3RBbmltYXRpb25zfSAxcyBlYXNlLWluLW91dCAke2RlbGF5fW1zIGluZmluaXRlO2AsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdjdXJyZW50Q29sb3InLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnMWVtJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgbWFyZ2luTGVmdDogb2Zmc2V0ID8gJzFlbScgOiB1bmRlZmluZWQsXG4gICAgICBoZWlnaHQ6ICcxZW0nLFxuICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICB3aWR0aDogJzFlbScsXG4gICAgfX1cbiAgLz5cbik7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGluZ0luZGljYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpc0Rpc2FibGVkOiBib29sZWFuO1xuICAvKiogU2V0IHNpemUgb2YgdGhlIGNvbnRhaW5lci4gKi9cbiAgc2l6ZTogbnVtYmVyO1xufVxuZXhwb3J0IGNvbnN0IExvYWRpbmdJbmRpY2F0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oe1xuICBpbm5lclByb3BzLFxuICBpc1J0bCxcbiAgc2l6ZSA9IDQsXG4gIC4uLnJlc3RQcm9wc1xufTogTG9hZGluZ0luZGljYXRvclByb3BzPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgey4uLmdldFN0eWxlUHJvcHMoXG4gICAgICAgIHsgLi4ucmVzdFByb3BzLCBpbm5lclByb3BzLCBpc1J0bCwgc2l6ZSB9LFxuICAgICAgICAnbG9hZGluZ0luZGljYXRvcicsXG4gICAgICAgIHtcbiAgICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICAgJ2xvYWRpbmctaW5kaWNhdG9yJzogdHJ1ZSxcbiAgICAgICAgfVxuICAgICAgKX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXswfSBvZmZzZXQ9e2lzUnRsfSAvPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezE2MH0gb2Zmc2V0IC8+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MzIwfSBvZmZzZXQ9eyFpc1J0bH0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXX0= */")
  });
}, tx = function(t) {
  var r = t.innerProps, u = t.isRtl, o = t.size, a = o === void 0 ? 4 : o, l = er(t, zC);
  return ge("div", ye({}, ht(de(de({}, l), {}, {
    innerProps: r,
    isRtl: u,
    size: a
  }), "loadingIndicator", {
    indicator: !0,
    "loading-indicator": !0
  }), r), ge(vl, {
    delay: 0,
    offset: u
  }), ge(vl, {
    delay: 160,
    offset: !0
  }), ge(vl, {
    delay: 320,
    offset: !u
  }));
}, nx = function(t, r) {
  var u = t.isDisabled, o = t.isFocused, a = t.theme, l = a.colors, c = a.borderRadius, f = a.spacing;
  return de({
    label: "control",
    alignItems: "center",
    cursor: "default",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    minHeight: f.controlHeight,
    outline: "0 !important",
    position: "relative",
    transition: "all 100ms"
  }, r ? {} : {
    backgroundColor: u ? l.neutral5 : l.neutral0,
    borderColor: u ? l.neutral10 : o ? l.primary : l.neutral20,
    borderRadius: c,
    borderStyle: "solid",
    borderWidth: 1,
    boxShadow: o ? "0 0 0 1px ".concat(l.primary) : void 0,
    "&:hover": {
      borderColor: o ? l.primary : l.neutral30
    }
  });
}, rx = function(t) {
  var r = t.children, u = t.isDisabled, o = t.isFocused, a = t.innerRef, l = t.innerProps, c = t.menuIsOpen;
  return ge("div", ye({
    ref: a
  }, ht(t, "control", {
    control: !0,
    "control--is-disabled": u,
    "control--is-focused": o,
    "control--menu-is-open": c
  }), l, {
    "aria-disabled": u || void 0
  }), r);
}, ix = rx, ux = ["data"], ox = function(t, r) {
  var u = t.theme.spacing;
  return r ? {} : {
    paddingBottom: u.baseUnit * 2,
    paddingTop: u.baseUnit * 2
  };
}, sx = function(t) {
  var r = t.children, u = t.cx, o = t.getStyles, a = t.getClassNames, l = t.Heading, c = t.headingProps, f = t.innerProps, p = t.label, h = t.theme, g = t.selectProps;
  return ge("div", ye({}, ht(t, "group", {
    group: !0
  }), f), ge(l, ye({}, c, {
    selectProps: g,
    theme: h,
    getStyles: o,
    getClassNames: a,
    cx: u
  }), p), ge("div", null, r));
}, ax = function(t, r) {
  var u = t.theme, o = u.colors, a = u.spacing;
  return de({
    label: "group",
    cursor: "default",
    display: "block"
  }, r ? {} : {
    color: o.neutral40,
    fontSize: "75%",
    fontWeight: 500,
    marginBottom: "0.25em",
    paddingLeft: a.baseUnit * 3,
    paddingRight: a.baseUnit * 3,
    textTransform: "uppercase"
  });
}, lx = function(t) {
  var r = Oh(t);
  r.data;
  var u = er(r, ux);
  return ge("div", ye({}, ht(t, "groupHeading", {
    "group-heading": !0
  }), u));
}, cx = sx, fx = ["innerRef", "isDisabled", "isHidden", "inputClassName"], dx = function(t, r) {
  var u = t.isDisabled, o = t.value, a = t.theme, l = a.spacing, c = a.colors;
  return de(de({
    visibility: u ? "hidden" : "visible",
    // force css to recompute when value change due to @emotion bug.
    // We can remove it whenever the bug is fixed.
    transform: o ? "translateZ(0)" : ""
  }, px), r ? {} : {
    margin: l.baseUnit / 2,
    paddingBottom: l.baseUnit / 2,
    paddingTop: l.baseUnit / 2,
    color: c.neutral80
  });
}, Nh = {
  gridArea: "1 / 2",
  font: "inherit",
  minWidth: "2px",
  border: 0,
  margin: 0,
  outline: 0,
  padding: 0
}, px = {
  flex: "1 1 auto",
  display: "inline-grid",
  gridArea: "1 / 1 / 2 / 3",
  gridTemplateColumns: "0 min-content",
  "&:after": de({
    content: 'attr(data-value) " "',
    visibility: "hidden",
    whiteSpace: "pre"
  }, Nh)
}, hx = function(t) {
  return de({
    label: "input",
    color: "inherit",
    background: 0,
    opacity: t ? 0 : 1,
    width: "100%"
  }, Nh);
}, gx = function(t) {
  var r = t.cx, u = t.value, o = Oh(t), a = o.innerRef, l = o.isDisabled, c = o.isHidden, f = o.inputClassName, p = er(o, fx);
  return ge("div", ye({}, ht(t, "input", {
    "input-container": !0
  }), {
    "data-value": u || ""
  }), ge("input", ye({
    className: r({
      input: !0
    }, f),
    ref: a,
    style: hx(c),
    disabled: l
  }, p)));
}, mx = gx, bx = function(t, r) {
  var u = t.theme, o = u.spacing, a = u.borderRadius, l = u.colors;
  return de({
    label: "multiValue",
    display: "flex",
    minWidth: 0
  }, r ? {} : {
    backgroundColor: l.neutral10,
    borderRadius: a / 2,
    margin: o.baseUnit / 2
  });
}, yx = function(t, r) {
  var u = t.theme, o = u.borderRadius, a = u.colors, l = t.cropWithEllipsis;
  return de({
    overflow: "hidden",
    textOverflow: l || l === void 0 ? "ellipsis" : void 0,
    whiteSpace: "nowrap"
  }, r ? {} : {
    borderRadius: o / 2,
    color: a.neutral80,
    fontSize: "85%",
    padding: 3,
    paddingLeft: 6
  });
}, vx = function(t, r) {
  var u = t.theme, o = u.spacing, a = u.borderRadius, l = u.colors, c = t.isFocused;
  return de({
    alignItems: "center",
    display: "flex"
  }, r ? {} : {
    borderRadius: a / 2,
    backgroundColor: c ? l.dangerLight : void 0,
    paddingLeft: o.baseUnit,
    paddingRight: o.baseUnit,
    ":hover": {
      backgroundColor: l.dangerLight,
      color: l.danger
    }
  });
}, Vh = function(t) {
  var r = t.children, u = t.innerProps;
  return ge("div", u, r);
}, Ix = Vh, Cx = Vh;
function xx(e) {
  var t = e.children, r = e.innerProps;
  return ge("div", ye({
    role: "button"
  }, r), t || ge(Ic, {
    size: 14
  }));
}
var Ax = function(t) {
  var r = t.children, u = t.components, o = t.data, a = t.innerProps, l = t.isDisabled, c = t.removeProps, f = t.selectProps, p = u.Container, h = u.Label, g = u.Remove;
  return ge(p, {
    data: o,
    innerProps: de(de({}, ht(t, "multiValue", {
      "multi-value": !0,
      "multi-value--is-disabled": l
    })), a),
    selectProps: f
  }, ge(h, {
    data: o,
    innerProps: de({}, ht(t, "multiValueLabel", {
      "multi-value__label": !0
    })),
    selectProps: f
  }, r), ge(g, {
    data: o,
    innerProps: de(de({}, ht(t, "multiValueRemove", {
      "multi-value__remove": !0
    })), {}, {
      "aria-label": "Remove ".concat(r || "option")
    }, c),
    selectProps: f
  }));
}, wx = Ax, Sx = function(t, r) {
  var u = t.isDisabled, o = t.isFocused, a = t.isSelected, l = t.theme, c = l.spacing, f = l.colors;
  return de({
    label: "option",
    cursor: "default",
    display: "block",
    fontSize: "inherit",
    width: "100%",
    userSelect: "none",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
  }, r ? {} : {
    backgroundColor: a ? f.primary : o ? f.primary25 : "transparent",
    color: u ? f.neutral20 : a ? f.neutral0 : "inherit",
    padding: "".concat(c.baseUnit * 2, "px ").concat(c.baseUnit * 3, "px"),
    // provide some affordance on touch devices
    ":active": {
      backgroundColor: u ? void 0 : a ? f.primary : f.primary50
    }
  });
}, Ex = function(t) {
  var r = t.children, u = t.isDisabled, o = t.isFocused, a = t.isSelected, l = t.innerRef, c = t.innerProps;
  return ge("div", ye({}, ht(t, "option", {
    option: !0,
    "option--is-disabled": u,
    "option--is-focused": o,
    "option--is-selected": a
  }), {
    ref: l,
    "aria-disabled": u
  }, c), r);
}, Fx = Ex, Rx = function(t, r) {
  var u = t.theme, o = u.spacing, a = u.colors;
  return de({
    label: "placeholder",
    gridArea: "1 / 1 / 2 / 3"
  }, r ? {} : {
    color: a.neutral50,
    marginLeft: o.baseUnit / 2,
    marginRight: o.baseUnit / 2
  });
}, Px = function(t) {
  var r = t.children, u = t.innerProps;
  return ge("div", ye({}, ht(t, "placeholder", {
    placeholder: !0
  }), u), r);
}, Ox = Px, Tx = function(t, r) {
  var u = t.isDisabled, o = t.theme, a = o.spacing, l = o.colors;
  return de({
    label: "singleValue",
    gridArea: "1 / 1 / 2 / 3",
    maxWidth: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  }, r ? {} : {
    color: u ? l.neutral40 : l.neutral80,
    marginLeft: a.baseUnit / 2,
    marginRight: a.baseUnit / 2
  });
}, Bx = function(t) {
  var r = t.children, u = t.isDisabled, o = t.innerProps;
  return ge("div", ye({}, ht(t, "singleValue", {
    "single-value": !0,
    "single-value--is-disabled": u
  }), o), r);
}, _x = Bx, eo = {
  ClearIndicator: QC,
  Control: ix,
  DropdownIndicator: UC,
  DownChevron: Dh,
  CrossIcon: Ic,
  Group: cx,
  GroupHeading: lx,
  IndicatorsContainer: XC,
  IndicatorSeparator: $C,
  Input: mx,
  LoadingIndicator: tx,
  Menu: RC,
  MenuList: OC,
  MenuPortal: kC,
  LoadingMessage: GC,
  NoOptionsMessage: _C,
  MultiValue: wx,
  MultiValueContainer: Ix,
  MultiValueLabel: Cx,
  MultiValueRemove: xx,
  Option: Fx,
  Placeholder: Ox,
  SelectContainer: MC,
  SingleValue: _x,
  ValueContainer: VC
}, Gx = function(t) {
  return de(de({}, eo), t.components);
}, $d = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function Lx(e, t) {
  return !!(e === t || $d(e) && $d(t));
}
function kx(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (!Lx(e[r], t[r]))
      return !1;
  return !0;
}
function Dx(e, t) {
  t === void 0 && (t = kx);
  var r = null;
  function u() {
    for (var o = [], a = 0; a < arguments.length; a++)
      o[a] = arguments[a];
    if (r && r.lastThis === this && t(o, r.lastArgs))
      return r.lastResult;
    var l = e.apply(this, o);
    return r = {
      lastResult: l,
      lastArgs: o,
      lastThis: this
    }, l;
  }
  return u.clear = function() {
    r = null;
  }, u;
}
function Mx() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var Nx = process.env.NODE_ENV === "production" ? {
  name: "7pg0cj-a11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"
} : {
  name: "1f43avz-a11yText-A11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap;label:A11yText;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkExMXlUZXh0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPSSIsImZpbGUiOiJBMTF5VGV4dC50c3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IEpTWCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGpzeCB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuLy8gQXNzaXN0aXZlIHRleHQgdG8gZGVzY3JpYmUgdmlzdWFsIGVsZW1lbnRzLiBIaWRkZW4gZm9yIHNpZ2h0ZWQgdXNlcnMuXG5jb25zdCBBMTF5VGV4dCA9IChwcm9wczogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzcGFuJ10pID0+IChcbiAgPHNwYW5cbiAgICBjc3M9e3tcbiAgICAgIGxhYmVsOiAnYTExeVRleHQnLFxuICAgICAgekluZGV4OiA5OTk5LFxuICAgICAgYm9yZGVyOiAwLFxuICAgICAgY2xpcDogJ3JlY3QoMXB4LCAxcHgsIDFweCwgMXB4KScsXG4gICAgICBoZWlnaHQ6IDEsXG4gICAgICB3aWR0aDogMSxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgcGFkZGluZzogMCxcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQTExeVRleHQ7XG4iXX0= */",
  toString: Mx
}, Vx = function(t) {
  return ge("span", ye({
    css: Nx
  }, t));
}, Kd = Vx, Wx = {
  guidance: function(t) {
    var r = t.isSearchable, u = t.isMulti, o = t.tabSelectsValue, a = t.context, l = t.isInitialFocus;
    switch (a) {
      case "menu":
        return "Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(o ? ", press Tab to select the option and exit the menu" : "", ".");
      case "input":
        return l ? "".concat(t["aria-label"] || "Select", " is focused ").concat(r ? ",type to refine list" : "", ", press Down to open the menu, ").concat(u ? " press left to focus selected values" : "") : "";
      case "value":
        return "Use left and right to toggle between focused values, press Backspace to remove the currently focused value";
      default:
        return "";
    }
  },
  onChange: function(t) {
    var r = t.action, u = t.label, o = u === void 0 ? "" : u, a = t.labels, l = t.isDisabled;
    switch (r) {
      case "deselect-option":
      case "pop-value":
      case "remove-value":
        return "option ".concat(o, ", deselected.");
      case "clear":
        return "All selected options have been cleared.";
      case "initial-input-focus":
        return "option".concat(a.length > 1 ? "s" : "", " ").concat(a.join(","), ", selected.");
      case "select-option":
        return l ? "option ".concat(o, " is disabled. Select another option.") : "option ".concat(o, ", selected.");
      default:
        return "";
    }
  },
  onFocus: function(t) {
    var r = t.context, u = t.focused, o = t.options, a = t.label, l = a === void 0 ? "" : a, c = t.selectValue, f = t.isDisabled, p = t.isSelected, h = t.isAppleDevice, g = function(A, E) {
      return A && A.length ? "".concat(A.indexOf(E) + 1, " of ").concat(A.length) : "";
    };
    if (r === "value" && c)
      return "value ".concat(l, " focused, ").concat(g(c, u), ".");
    if (r === "menu" && h) {
      var v = f ? " disabled" : "", b = "".concat(p ? " selected" : "").concat(v);
      return "".concat(l).concat(b, ", ").concat(g(o, u), ".");
    }
    return "";
  },
  onFilter: function(t) {
    var r = t.inputValue, u = t.resultsMessage;
    return "".concat(u).concat(r ? " for search term " + r : "", ".");
  }
}, Xx = function(t) {
  var r = t.ariaSelection, u = t.focusedOption, o = t.focusedValue, a = t.focusableOptions, l = t.isFocused, c = t.selectValue, f = t.selectProps, p = t.id, h = t.isAppleDevice, g = f.ariaLiveMessages, v = f.getOptionLabel, b = f.inputValue, P = f.isMulti, A = f.isOptionDisabled, E = f.isSearchable, F = f.menuIsOpen, k = f.options, L = f.screenReaderStatus, D = f.tabSelectsValue, H = f.isLoading, G = f["aria-label"], z = f["aria-live"], N = Qn(function() {
    return de(de({}, Wx), g || {});
  }, [g]), V = Qn(function() {
    var K = "";
    if (r && N.onChange) {
      var pe = r.option, fe = r.options, Se = r.removedValue, je = r.removedValues, S = r.value, We = function(Me) {
        return Array.isArray(Me) ? null : Me;
      }, Le = Se || pe || We(S), w = Le ? v(Le) : "", Ye = fe || je || void 0, me = Ye ? Ye.map(v) : [], ke = de({
        // multiSelected items are usually items that have already been selected
        // or set by the user as a default value so we assume they are not disabled
        isDisabled: Le && A(Le, c),
        label: w,
        labels: me
      }, r);
      K = N.onChange(ke);
    }
    return K;
  }, [r, N, A, c, v]), ne = Qn(function() {
    var K = "", pe = u || o, fe = !!(u && c && c.includes(u));
    if (pe && N.onFocus) {
      var Se = {
        focused: pe,
        label: v(pe),
        isDisabled: A(pe, c),
        isSelected: fe,
        options: a,
        context: pe === u ? "menu" : "value",
        selectValue: c,
        isAppleDevice: h
      };
      K = N.onFocus(Se);
    }
    return K;
  }, [u, o, v, A, N, a, c, h]), Q = Qn(function() {
    var K = "";
    if (F && k.length && !H && N.onFilter) {
      var pe = L({
        count: a.length
      });
      K = N.onFilter({
        inputValue: b,
        resultsMessage: pe
      });
    }
    return K;
  }, [a, b, F, N, k, L, H]), j = (r == null ? void 0 : r.action) === "initial-input-focus", te = Qn(function() {
    var K = "";
    if (N.guidance) {
      var pe = o ? "value" : F ? "menu" : "input";
      K = N.guidance({
        "aria-label": G,
        context: pe,
        isDisabled: u && A(u, c),
        isMulti: P,
        isSearchable: E,
        tabSelectsValue: D,
        isInitialFocus: j
      });
    }
    return K;
  }, [G, u, o, P, A, E, F, N, c, D, j]), ee = ge(Vl, null, ge("span", {
    id: "aria-selection"
  }, V), ge("span", {
    id: "aria-focused"
  }, ne), ge("span", {
    id: "aria-results"
  }, Q), ge("span", {
    id: "aria-guidance"
  }, te));
  return ge(Vl, null, ge(Kd, {
    id: p
  }, j && ee), ge(Kd, {
    "aria-live": z,
    "aria-atomic": "false",
    "aria-relevant": "additions text",
    role: "log"
  }, l && !j && ee));
}, Hx = Xx, Zl = [{
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
}], zx = new RegExp("[" + Zl.map(function(e) {
  return e.letters;
}).join("") + "]", "g"), Wh = {};
for (var Il = 0; Il < Zl.length; Il++)
  for (var Cl = Zl[Il], xl = 0; xl < Cl.letters.length; xl++)
    Wh[Cl.letters[xl]] = Cl.base;
var Xh = function(t) {
  return t.replace(zx, function(r) {
    return Wh[r];
  });
}, Zx = Dx(Xh), ep = function(t) {
  return t.replace(/^\s+|\s+$/g, "");
}, Yx = function(t) {
  return "".concat(t.label, " ").concat(t.value);
}, Jx = function(t) {
  return function(r, u) {
    if (r.data.__isNew__) return !0;
    var o = de({
      ignoreCase: !0,
      ignoreAccents: !0,
      stringify: Yx,
      trim: !0,
      matchFrom: "any"
    }, t), a = o.ignoreCase, l = o.ignoreAccents, c = o.stringify, f = o.trim, p = o.matchFrom, h = f ? ep(u) : u, g = f ? ep(c(r)) : c(r);
    return a && (h = h.toLowerCase(), g = g.toLowerCase()), l && (h = Zx(h), g = Xh(g)), p === "start" ? g.substr(0, h.length) === h : g.indexOf(h) > -1;
  };
}, Ux = ["innerRef"];
function jx(e) {
  var t = e.innerRef, r = er(e, Ux), u = IC(r, "onExited", "in", "enter", "exit", "appear");
  return ge("input", ye({
    ref: t
  }, u, {
    css: /* @__PURE__ */ vh({
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
var Qx = function(t) {
  t.cancelable && t.preventDefault(), t.stopPropagation();
};
function qx(e) {
  var t = e.isEnabled, r = e.onBottomArrive, u = e.onBottomLeave, o = e.onTopArrive, a = e.onTopLeave, l = yr(!1), c = yr(!1), f = yr(0), p = yr(null), h = Gt(function(E, F) {
    if (p.current !== null) {
      var k = p.current, L = k.scrollTop, D = k.scrollHeight, H = k.clientHeight, G = p.current, z = F > 0, N = D - H - L, V = !1;
      N > F && l.current && (u && u(E), l.current = !1), z && c.current && (a && a(E), c.current = !1), z && F > N ? (r && !l.current && r(E), G.scrollTop = D, V = !0, l.current = !0) : !z && -F > L && (o && !c.current && o(E), G.scrollTop = 0, V = !0, c.current = !0), V && Qx(E);
    }
  }, [r, u, o, a]), g = Gt(function(E) {
    h(E, E.deltaY);
  }, [h]), v = Gt(function(E) {
    f.current = E.changedTouches[0].clientY;
  }, []), b = Gt(function(E) {
    var F = f.current - E.changedTouches[0].clientY;
    h(E, F);
  }, [h]), P = Gt(function(E) {
    if (E) {
      var F = bC ? {
        passive: !1
      } : !1;
      E.addEventListener("wheel", g, F), E.addEventListener("touchstart", v, F), E.addEventListener("touchmove", b, F);
    }
  }, [b, v, g]), A = Gt(function(E) {
    E && (E.removeEventListener("wheel", g, !1), E.removeEventListener("touchstart", v, !1), E.removeEventListener("touchmove", b, !1));
  }, [b, v, g]);
  return qn(function() {
    if (t) {
      var E = p.current;
      return P(E), function() {
        A(E);
      };
    }
  }, [t, P, A]), function(E) {
    p.current = E;
  };
}
var tp = ["boxSizing", "height", "overflow", "paddingRight", "position"], np = {
  boxSizing: "border-box",
  // account for possible declaration `width: 100%;` on body
  overflow: "hidden",
  position: "relative",
  height: "100%"
};
function rp(e) {
  e.cancelable && e.preventDefault();
}
function ip(e) {
  e.stopPropagation();
}
function up() {
  var e = this.scrollTop, t = this.scrollHeight, r = e + this.offsetHeight;
  e === 0 ? this.scrollTop = 1 : r === t && (this.scrollTop = e - 1);
}
function op() {
  return "ontouchstart" in window || navigator.maxTouchPoints;
}
var sp = !!(typeof window < "u" && window.document && window.document.createElement), Gu = 0, Ni = {
  capture: !1,
  passive: !1
};
function $x(e) {
  var t = e.isEnabled, r = e.accountForScrollbars, u = r === void 0 ? !0 : r, o = yr({}), a = yr(null), l = Gt(function(f) {
    if (sp) {
      var p = document.body, h = p && p.style;
      if (u && tp.forEach(function(P) {
        var A = h && h[P];
        o.current[P] = A;
      }), u && Gu < 1) {
        var g = parseInt(o.current.paddingRight, 10) || 0, v = document.body ? document.body.clientWidth : 0, b = window.innerWidth - v + g || 0;
        Object.keys(np).forEach(function(P) {
          var A = np[P];
          h && (h[P] = A);
        }), h && (h.paddingRight = "".concat(b, "px"));
      }
      p && op() && (p.addEventListener("touchmove", rp, Ni), f && (f.addEventListener("touchstart", up, Ni), f.addEventListener("touchmove", ip, Ni))), Gu += 1;
    }
  }, [u]), c = Gt(function(f) {
    if (sp) {
      var p = document.body, h = p && p.style;
      Gu = Math.max(Gu - 1, 0), u && Gu < 1 && tp.forEach(function(g) {
        var v = o.current[g];
        h && (h[g] = v);
      }), p && op() && (p.removeEventListener("touchmove", rp, Ni), f && (f.removeEventListener("touchstart", up, Ni), f.removeEventListener("touchmove", ip, Ni)));
    }
  }, [u]);
  return qn(function() {
    if (t) {
      var f = a.current;
      return l(f), function() {
        c(f);
      };
    }
  }, [t, l, c]), function(f) {
    a.current = f;
  };
}
function Kx() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var eA = function(t) {
  var r = t.target;
  return r.ownerDocument.activeElement && r.ownerDocument.activeElement.blur();
}, tA = process.env.NODE_ENV === "production" ? {
  name: "1kfdb0e",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0"
} : {
  name: "bp8cua-ScrollManager",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0;label:ScrollManager;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNjcm9sbE1hbmFnZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9EVSIsImZpbGUiOiJTY3JvbGxNYW5hZ2VyLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4IH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IHsgRnJhZ21lbnQsIFJlYWN0RWxlbWVudCwgUmVmQ2FsbGJhY2ssIE1vdXNlRXZlbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlU2Nyb2xsQ2FwdHVyZSBmcm9tICcuL3VzZVNjcm9sbENhcHR1cmUnO1xuaW1wb3J0IHVzZVNjcm9sbExvY2sgZnJvbSAnLi91c2VTY3JvbGxMb2NrJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcmVhZG9ubHkgY2hpbGRyZW46IChyZWY6IFJlZkNhbGxiYWNrPEhUTUxFbGVtZW50PikgPT4gUmVhY3RFbGVtZW50O1xuICByZWFkb25seSBsb2NrRW5hYmxlZDogYm9vbGVhbjtcbiAgcmVhZG9ubHkgY2FwdHVyZUVuYWJsZWQ6IGJvb2xlYW47XG4gIHJlYWRvbmx5IG9uQm90dG9tQXJyaXZlPzogKGV2ZW50OiBXaGVlbEV2ZW50IHwgVG91Y2hFdmVudCkgPT4gdm9pZDtcbiAgcmVhZG9ubHkgb25Cb3R0b21MZWF2ZT86IChldmVudDogV2hlZWxFdmVudCB8IFRvdWNoRXZlbnQpID0+IHZvaWQ7XG4gIHJlYWRvbmx5IG9uVG9wQXJyaXZlPzogKGV2ZW50OiBXaGVlbEV2ZW50IHwgVG91Y2hFdmVudCkgPT4gdm9pZDtcbiAgcmVhZG9ubHkgb25Ub3BMZWF2ZT86IChldmVudDogV2hlZWxFdmVudCB8IFRvdWNoRXZlbnQpID0+IHZvaWQ7XG59XG5cbmNvbnN0IGJsdXJTZWxlY3RJbnB1dCA9IChldmVudDogTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRGl2RWxlbWVudDtcbiAgcmV0dXJuIChcbiAgICBlbGVtZW50Lm93bmVyRG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJlxuICAgIChlbGVtZW50Lm93bmVyRG9jdW1lbnQuYWN0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCkuYmx1cigpXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTY3JvbGxNYW5hZ2VyKHtcbiAgY2hpbGRyZW4sXG4gIGxvY2tFbmFibGVkLFxuICBjYXB0dXJlRW5hYmxlZCA9IHRydWUsXG4gIG9uQm90dG9tQXJyaXZlLFxuICBvbkJvdHRvbUxlYXZlLFxuICBvblRvcEFycml2ZSxcbiAgb25Ub3BMZWF2ZSxcbn06IFByb3BzKSB7XG4gIGNvbnN0IHNldFNjcm9sbENhcHR1cmVUYXJnZXQgPSB1c2VTY3JvbGxDYXB0dXJlKHtcbiAgICBpc0VuYWJsZWQ6IGNhcHR1cmVFbmFibGVkLFxuICAgIG9uQm90dG9tQXJyaXZlLFxuICAgIG9uQm90dG9tTGVhdmUsXG4gICAgb25Ub3BBcnJpdmUsXG4gICAgb25Ub3BMZWF2ZSxcbiAgfSk7XG4gIGNvbnN0IHNldFNjcm9sbExvY2tUYXJnZXQgPSB1c2VTY3JvbGxMb2NrKHsgaXNFbmFibGVkOiBsb2NrRW5hYmxlZCB9KTtcblxuICBjb25zdCB0YXJnZXRSZWY6IFJlZkNhbGxiYWNrPEhUTUxFbGVtZW50PiA9IChlbGVtZW50KSA9PiB7XG4gICAgc2V0U2Nyb2xsQ2FwdHVyZVRhcmdldChlbGVtZW50KTtcbiAgICBzZXRTY3JvbGxMb2NrVGFyZ2V0KGVsZW1lbnQpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAge2xvY2tFbmFibGVkICYmIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIG9uQ2xpY2s9e2JsdXJTZWxlY3RJbnB1dH1cbiAgICAgICAgICBjc3M9e3sgcG9zaXRpb246ICdmaXhlZCcsIGxlZnQ6IDAsIGJvdHRvbTogMCwgcmlnaHQ6IDAsIHRvcDogMCB9fVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIHtjaGlsZHJlbih0YXJnZXRSZWYpfVxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59XG4iXX0= */",
  toString: Kx
};
function nA(e) {
  var t = e.children, r = e.lockEnabled, u = e.captureEnabled, o = u === void 0 ? !0 : u, a = e.onBottomArrive, l = e.onBottomLeave, c = e.onTopArrive, f = e.onTopLeave, p = qx({
    isEnabled: o,
    onBottomArrive: a,
    onBottomLeave: l,
    onTopArrive: c,
    onTopLeave: f
  }), h = $x({
    isEnabled: r
  }), g = function(b) {
    p(b), h(b);
  };
  return ge(Vl, null, r && ge("div", {
    onClick: eA,
    css: tA
  }), t(g));
}
function rA() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var iA = process.env.NODE_ENV === "production" ? {
  name: "1a0ro4n-requiredInput",
  styles: "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"
} : {
  name: "5kkxb2-requiredInput-RequiredInput",
  styles: "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%;label:RequiredInput;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJlcXVpcmVkSW5wdXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNJIiwiZmlsZSI6IlJlcXVpcmVkSW5wdXQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBGb2N1c0V2ZW50SGFuZGxlciwgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3ggfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5cbmNvbnN0IFJlcXVpcmVkSW5wdXQ6IEZ1bmN0aW9uQ29tcG9uZW50PHtcbiAgcmVhZG9ubHkgbmFtZT86IHN0cmluZztcbiAgcmVhZG9ubHkgb25Gb2N1czogRm9jdXNFdmVudEhhbmRsZXI8SFRNTElucHV0RWxlbWVudD47XG59PiA9ICh7IG5hbWUsIG9uRm9jdXMgfSkgPT4gKFxuICA8aW5wdXRcbiAgICByZXF1aXJlZFxuICAgIG5hbWU9e25hbWV9XG4gICAgdGFiSW5kZXg9ey0xfVxuICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgb25Gb2N1cz17b25Gb2N1c31cbiAgICBjc3M9e3tcbiAgICAgIGxhYmVsOiAncmVxdWlyZWRJbnB1dCcsXG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBib3R0b206IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgIH19XG4gICAgLy8gUHJldmVudCBgU3dpdGNoaW5nIGZyb20gdW5jb250cm9sbGVkIHRvIGNvbnRyb2xsZWRgIGVycm9yXG4gICAgdmFsdWU9XCJcIlxuICAgIG9uQ2hhbmdlPXsoKSA9PiB7fX1cbiAgLz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFJlcXVpcmVkSW5wdXQ7XG4iXX0= */",
  toString: rA
}, uA = function(t) {
  var r = t.name, u = t.onFocus;
  return ge("input", {
    required: !0,
    name: r,
    tabIndex: -1,
    "aria-hidden": "true",
    onFocus: u,
    css: iA,
    value: "",
    onChange: function() {
    }
  });
}, oA = uA;
function Cc(e) {
  var t;
  return typeof window < "u" && window.navigator != null ? e.test(((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.platform) || window.navigator.platform) : !1;
}
function sA() {
  return Cc(/^iPhone/i);
}
function Hh() {
  return Cc(/^Mac/i);
}
function aA() {
  return Cc(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  Hh() && navigator.maxTouchPoints > 1;
}
function lA() {
  return sA() || aA();
}
function cA() {
  return Hh() || lA();
}
var fA = function(t) {
  return t.label;
}, zh = function(t) {
  return t.label;
}, Zh = function(t) {
  return t.value;
}, dA = function(t) {
  return !!t.isDisabled;
}, pA = {
  clearIndicator: jC,
  container: DC,
  control: nx,
  dropdownIndicator: JC,
  group: ox,
  groupHeading: ax,
  indicatorsContainer: WC,
  indicatorSeparator: qC,
  input: dx,
  loadingIndicator: ex,
  loadingMessage: BC,
  menu: SC,
  menuList: PC,
  menuPortal: LC,
  multiValue: bx,
  multiValueLabel: yx,
  multiValueRemove: vx,
  noOptionsMessage: TC,
  option: Sx,
  placeholder: Rx,
  singleValue: Tx,
  valueContainer: NC
};
function hA(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = de({}, e);
  return Object.keys(t).forEach(function(u) {
    var o = u;
    e[o] ? r[o] = function(a, l) {
      return t[o](e[o](a, l), l);
    } : r[o] = t[o];
  }), r;
}
var gA = {
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
}, mA = 4, Yh = 4, bA = 38, yA = Yh * 2, vA = {
  baseUnit: Yh,
  controlHeight: bA,
  menuGutter: yA
}, Hu = {
  borderRadius: mA,
  colors: gA,
  spacing: vA
}, IA = {
  "aria-live": "polite",
  backspaceRemovesValue: !0,
  blurInputOnSelect: Qd(),
  captureMenuScroll: !Qd(),
  classNames: {},
  closeMenuOnSelect: !0,
  closeMenuOnScroll: !1,
  components: {},
  controlShouldRenderValue: !0,
  escapeClearsValue: !1,
  filterOption: Jx(),
  formatGroupLabel: fA,
  getOptionLabel: zh,
  getOptionValue: Zh,
  isDisabled: !1,
  isLoading: !1,
  isMulti: !1,
  isRtl: !1,
  isSearchable: !0,
  isOptionDisabled: dA,
  loadingMessage: function() {
    return "Loading...";
  },
  maxMenuHeight: 300,
  minMenuHeight: 140,
  menuIsOpen: !1,
  menuPlacement: "bottom",
  menuPosition: "absolute",
  menuShouldBlockScroll: !1,
  menuShouldScrollIntoView: !gC(),
  noOptionsMessage: function() {
    return "No options";
  },
  openMenuOnFocus: !1,
  openMenuOnClick: !0,
  options: [],
  pageSize: 5,
  placeholder: "Select...",
  screenReaderStatus: function(t) {
    var r = t.count;
    return "".concat(r, " result").concat(r !== 1 ? "s" : "", " available");
  },
  styles: {},
  tabIndex: 0,
  tabSelectsValue: !0,
  unstyled: !1
};
function ap(e, t, r, u) {
  var o = jh(e, t, r), a = Qh(e, t, r), l = Uh(e, t), c = Os(e, t);
  return {
    type: "option",
    data: t,
    isDisabled: o,
    isSelected: a,
    label: l,
    value: c,
    index: u
  };
}
function Cs(e, t) {
  return e.options.map(function(r, u) {
    if ("options" in r) {
      var o = r.options.map(function(l, c) {
        return ap(e, l, t, c);
      }).filter(function(l) {
        return cp(e, l);
      });
      return o.length > 0 ? {
        type: "group",
        data: r,
        options: o,
        index: u
      } : void 0;
    }
    var a = ap(e, r, t, u);
    return cp(e, a) ? a : void 0;
  }).filter(yC);
}
function Jh(e) {
  return e.reduce(function(t, r) {
    return r.type === "group" ? t.push.apply(t, Wi(r.options.map(function(u) {
      return u.data;
    }))) : t.push(r.data), t;
  }, []);
}
function lp(e, t) {
  return e.reduce(function(r, u) {
    return u.type === "group" ? r.push.apply(r, Wi(u.options.map(function(o) {
      return {
        data: o.data,
        id: "".concat(t, "-").concat(u.index, "-").concat(o.index)
      };
    }))) : r.push({
      data: u.data,
      id: "".concat(t, "-").concat(u.index)
    }), r;
  }, []);
}
function CA(e, t) {
  return Jh(Cs(e, t));
}
function cp(e, t) {
  var r = e.inputValue, u = r === void 0 ? "" : r, o = t.data, a = t.isSelected, l = t.label, c = t.value;
  return (!$h(e) || !a) && qh(e, {
    label: l,
    value: c,
    data: o
  }, u);
}
function xA(e, t) {
  var r = e.focusedValue, u = e.selectValue, o = u.indexOf(r);
  if (o > -1) {
    var a = t.indexOf(r);
    if (a > -1)
      return r;
    if (o < t.length)
      return t[o];
  }
  return null;
}
function AA(e, t) {
  var r = e.focusedOption;
  return r && t.indexOf(r) > -1 ? r : t[0];
}
var Al = function(t, r) {
  var u, o = (u = t.find(function(a) {
    return a.data === r;
  })) === null || u === void 0 ? void 0 : u.id;
  return o || null;
}, Uh = function(t, r) {
  return t.getOptionLabel(r);
}, Os = function(t, r) {
  return t.getOptionValue(r);
};
function jh(e, t, r) {
  return typeof e.isOptionDisabled == "function" ? e.isOptionDisabled(t, r) : !1;
}
function Qh(e, t, r) {
  if (r.indexOf(t) > -1) return !0;
  if (typeof e.isOptionSelected == "function")
    return e.isOptionSelected(t, r);
  var u = Os(e, t);
  return r.some(function(o) {
    return Os(e, o) === u;
  });
}
function qh(e, t, r) {
  return e.filterOption ? e.filterOption(t, r) : !0;
}
var $h = function(t) {
  var r = t.hideSelectedOptions, u = t.isMulti;
  return r === void 0 ? u : r;
}, wA = 1, xc = /* @__PURE__ */ function(e) {
  W1(r, e);
  var t = z1(r);
  function r(u) {
    var o;
    if (N1(this, r), o = t.call(this, u), o.state = {
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
    }, o.blockOptionHover = !1, o.isComposing = !1, o.commonProps = void 0, o.initialTouchX = 0, o.initialTouchY = 0, o.openAfterFocus = !1, o.scrollToFocusedOptionOnUpdate = !1, o.userIsDragging = void 0, o.isAppleDevice = cA(), o.controlRef = null, o.getControlRef = function(f) {
      o.controlRef = f;
    }, o.focusedOptionRef = null, o.getFocusedOptionRef = function(f) {
      o.focusedOptionRef = f;
    }, o.menuListRef = null, o.getMenuListRef = function(f) {
      o.menuListRef = f;
    }, o.inputRef = null, o.getInputRef = function(f) {
      o.inputRef = f;
    }, o.focus = o.focusInput, o.blur = o.blurInput, o.onChange = function(f, p) {
      var h = o.props, g = h.onChange, v = h.name;
      p.name = v, o.ariaOnChange(f, p), g(f, p);
    }, o.setValue = function(f, p, h) {
      var g = o.props, v = g.closeMenuOnSelect, b = g.isMulti, P = g.inputValue;
      o.onInputChange("", {
        action: "set-value",
        prevInputValue: P
      }), v && (o.setState({
        inputIsHiddenAfterUpdate: !b
      }), o.onMenuClose()), o.setState({
        clearFocusValueOnUpdate: !0
      }), o.onChange(f, {
        action: p,
        option: h
      });
    }, o.selectOption = function(f) {
      var p = o.props, h = p.blurInputOnSelect, g = p.isMulti, v = p.name, b = o.state.selectValue, P = g && o.isOptionSelected(f, b), A = o.isOptionDisabled(f, b);
      if (P) {
        var E = o.getOptionValue(f);
        o.setValue(b.filter(function(F) {
          return o.getOptionValue(F) !== E;
        }), "deselect-option", f);
      } else if (!A)
        g ? o.setValue([].concat(Wi(b), [f]), "select-option", f) : o.setValue(f, "select-option");
      else {
        o.ariaOnChange(f, {
          action: "select-option",
          option: f,
          name: v
        });
        return;
      }
      h && o.blurInput();
    }, o.removeValue = function(f) {
      var p = o.props.isMulti, h = o.state.selectValue, g = o.getOptionValue(f), v = h.filter(function(P) {
        return o.getOptionValue(P) !== g;
      }), b = Nu(p, v, v[0] || null);
      o.onChange(b, {
        action: "remove-value",
        removedValue: f
      }), o.focusInput();
    }, o.clearValue = function() {
      var f = o.state.selectValue;
      o.onChange(Nu(o.props.isMulti, [], null), {
        action: "clear",
        removedValues: f
      });
    }, o.popValue = function() {
      var f = o.props.isMulti, p = o.state.selectValue, h = p[p.length - 1], g = p.slice(0, p.length - 1), v = Nu(f, g, g[0] || null);
      h && o.onChange(v, {
        action: "pop-value",
        removedValue: h
      });
    }, o.getFocusedOptionId = function(f) {
      return Al(o.state.focusableOptionsWithIds, f);
    }, o.getFocusableOptionsWithIds = function() {
      return lp(Cs(o.props, o.state.selectValue), o.getElementId("option"));
    }, o.getValue = function() {
      return o.state.selectValue;
    }, o.cx = function() {
      for (var f = arguments.length, p = new Array(f), h = 0; h < f; h++)
        p[h] = arguments[h];
      return cC.apply(void 0, [o.props.classNamePrefix].concat(p));
    }, o.getOptionLabel = function(f) {
      return Uh(o.props, f);
    }, o.getOptionValue = function(f) {
      return Os(o.props, f);
    }, o.getStyles = function(f, p) {
      var h = o.props.unstyled, g = pA[f](p, h);
      g.boxSizing = "border-box";
      var v = o.props.styles[f];
      return v ? v(g, p) : g;
    }, o.getClassNames = function(f, p) {
      var h, g;
      return (h = (g = o.props.classNames)[f]) === null || h === void 0 ? void 0 : h.call(g, p);
    }, o.getElementId = function(f) {
      return "".concat(o.state.instancePrefix, "-").concat(f);
    }, o.getComponents = function() {
      return Gx(o.props);
    }, o.buildCategorizedOptions = function() {
      return Cs(o.props, o.state.selectValue);
    }, o.getCategorizedOptions = function() {
      return o.props.menuIsOpen ? o.buildCategorizedOptions() : [];
    }, o.buildFocusableOptions = function() {
      return Jh(o.buildCategorizedOptions());
    }, o.getFocusableOptions = function() {
      return o.props.menuIsOpen ? o.buildFocusableOptions() : [];
    }, o.ariaOnChange = function(f, p) {
      o.setState({
        ariaSelection: de({
          value: f
        }, p)
      });
    }, o.onMenuMouseDown = function(f) {
      f.button === 0 && (f.stopPropagation(), f.preventDefault(), o.focusInput());
    }, o.onMenuMouseMove = function(f) {
      o.blockOptionHover = !1;
    }, o.onControlMouseDown = function(f) {
      if (!f.defaultPrevented) {
        var p = o.props.openMenuOnClick;
        o.state.isFocused ? o.props.menuIsOpen ? f.target.tagName !== "INPUT" && f.target.tagName !== "TEXTAREA" && o.onMenuClose() : p && o.openMenu("first") : (p && (o.openAfterFocus = !0), o.focusInput()), f.target.tagName !== "INPUT" && f.target.tagName !== "TEXTAREA" && f.preventDefault();
      }
    }, o.onDropdownIndicatorMouseDown = function(f) {
      if (!(f && f.type === "mousedown" && f.button !== 0) && !o.props.isDisabled) {
        var p = o.props, h = p.isMulti, g = p.menuIsOpen;
        o.focusInput(), g ? (o.setState({
          inputIsHiddenAfterUpdate: !h
        }), o.onMenuClose()) : o.openMenu("first"), f.preventDefault();
      }
    }, o.onClearIndicatorMouseDown = function(f) {
      f && f.type === "mousedown" && f.button !== 0 || (o.clearValue(), f.preventDefault(), o.openAfterFocus = !1, f.type === "touchend" ? o.focusInput() : setTimeout(function() {
        return o.focusInput();
      }));
    }, o.onScroll = function(f) {
      typeof o.props.closeMenuOnScroll == "boolean" ? f.target instanceof HTMLElement && Ds(f.target) && o.props.onMenuClose() : typeof o.props.closeMenuOnScroll == "function" && o.props.closeMenuOnScroll(f) && o.props.onMenuClose();
    }, o.onCompositionStart = function() {
      o.isComposing = !0;
    }, o.onCompositionEnd = function() {
      o.isComposing = !1;
    }, o.onTouchStart = function(f) {
      var p = f.touches, h = p && p.item(0);
      h && (o.initialTouchX = h.clientX, o.initialTouchY = h.clientY, o.userIsDragging = !1);
    }, o.onTouchMove = function(f) {
      var p = f.touches, h = p && p.item(0);
      if (h) {
        var g = Math.abs(h.clientX - o.initialTouchX), v = Math.abs(h.clientY - o.initialTouchY), b = 5;
        o.userIsDragging = g > b || v > b;
      }
    }, o.onTouchEnd = function(f) {
      o.userIsDragging || (o.controlRef && !o.controlRef.contains(f.target) && o.menuListRef && !o.menuListRef.contains(f.target) && o.blurInput(), o.initialTouchX = 0, o.initialTouchY = 0);
    }, o.onControlTouchEnd = function(f) {
      o.userIsDragging || o.onControlMouseDown(f);
    }, o.onClearIndicatorTouchEnd = function(f) {
      o.userIsDragging || o.onClearIndicatorMouseDown(f);
    }, o.onDropdownIndicatorTouchEnd = function(f) {
      o.userIsDragging || o.onDropdownIndicatorMouseDown(f);
    }, o.handleInputChange = function(f) {
      var p = o.props.inputValue, h = f.currentTarget.value;
      o.setState({
        inputIsHiddenAfterUpdate: !1
      }), o.onInputChange(h, {
        action: "input-change",
        prevInputValue: p
      }), o.props.menuIsOpen || o.onMenuOpen();
    }, o.onInputFocus = function(f) {
      o.props.onFocus && o.props.onFocus(f), o.setState({
        inputIsHiddenAfterUpdate: !1,
        isFocused: !0
      }), (o.openAfterFocus || o.props.openMenuOnFocus) && o.openMenu("first"), o.openAfterFocus = !1;
    }, o.onInputBlur = function(f) {
      var p = o.props.inputValue;
      if (o.menuListRef && o.menuListRef.contains(document.activeElement)) {
        o.inputRef.focus();
        return;
      }
      o.props.onBlur && o.props.onBlur(f), o.onInputChange("", {
        action: "input-blur",
        prevInputValue: p
      }), o.onMenuClose(), o.setState({
        focusedValue: null,
        isFocused: !1
      });
    }, o.onOptionHover = function(f) {
      if (!(o.blockOptionHover || o.state.focusedOption === f)) {
        var p = o.getFocusableOptions(), h = p.indexOf(f);
        o.setState({
          focusedOption: f,
          focusedOptionId: h > -1 ? o.getFocusedOptionId(f) : null
        });
      }
    }, o.shouldHideSelectedOptions = function() {
      return $h(o.props);
    }, o.onValueInputFocus = function(f) {
      f.preventDefault(), f.stopPropagation(), o.focus();
    }, o.onKeyDown = function(f) {
      var p = o.props, h = p.isMulti, g = p.backspaceRemovesValue, v = p.escapeClearsValue, b = p.inputValue, P = p.isClearable, A = p.isDisabled, E = p.menuIsOpen, F = p.onKeyDown, k = p.tabSelectsValue, L = p.openMenuOnFocus, D = o.state, H = D.focusedOption, G = D.focusedValue, z = D.selectValue;
      if (!A && !(typeof F == "function" && (F(f), f.defaultPrevented))) {
        switch (o.blockOptionHover = !0, f.key) {
          case "ArrowLeft":
            if (!h || b) return;
            o.focusValue("previous");
            break;
          case "ArrowRight":
            if (!h || b) return;
            o.focusValue("next");
            break;
          case "Delete":
          case "Backspace":
            if (b) return;
            if (G)
              o.removeValue(G);
            else {
              if (!g) return;
              h ? o.popValue() : P && o.clearValue();
            }
            break;
          case "Tab":
            if (o.isComposing || f.shiftKey || !E || !k || !H || // don't capture the event if the menu opens on focus and the focused
            // option is already selected; it breaks the flow of navigation
            L && o.isOptionSelected(H, z))
              return;
            o.selectOption(H);
            break;
          case "Enter":
            if (f.keyCode === 229)
              break;
            if (E) {
              if (!H || o.isComposing) return;
              o.selectOption(H);
              break;
            }
            return;
          case "Escape":
            E ? (o.setState({
              inputIsHiddenAfterUpdate: !1
            }), o.onInputChange("", {
              action: "menu-close",
              prevInputValue: b
            }), o.onMenuClose()) : P && v && o.clearValue();
            break;
          case " ":
            if (b)
              return;
            if (!E) {
              o.openMenu("first");
              break;
            }
            if (!H) return;
            o.selectOption(H);
            break;
          case "ArrowUp":
            E ? o.focusOption("up") : o.openMenu("last");
            break;
          case "ArrowDown":
            E ? o.focusOption("down") : o.openMenu("first");
            break;
          case "PageUp":
            if (!E) return;
            o.focusOption("pageup");
            break;
          case "PageDown":
            if (!E) return;
            o.focusOption("pagedown");
            break;
          case "Home":
            if (!E) return;
            o.focusOption("first");
            break;
          case "End":
            if (!E) return;
            o.focusOption("last");
            break;
          default:
            return;
        }
        f.preventDefault();
      }
    }, o.state.instancePrefix = "react-select-" + (o.props.instanceId || ++wA), o.state.selectValue = Rs(u.value), u.menuIsOpen && o.state.selectValue.length) {
      var a = o.getFocusableOptionsWithIds(), l = o.buildFocusableOptions(), c = l.indexOf(o.state.selectValue[0]);
      o.state.focusableOptionsWithIds = a, o.state.focusedOption = l[c], o.state.focusedOptionId = Al(a, l[c]);
    }
    return o;
  }
  return V1(r, [{
    key: "componentDidMount",
    value: function() {
      this.startListeningComposition(), this.startListeningToTouch(), this.props.closeMenuOnScroll && document && document.addEventListener && document.addEventListener("scroll", this.onScroll, !0), this.props.autoFocus && this.focusInput(), this.props.menuIsOpen && this.state.focusedOption && this.menuListRef && this.focusedOptionRef && jd(this.menuListRef, this.focusedOptionRef);
    }
  }, {
    key: "componentDidUpdate",
    value: function(o) {
      var a = this.props, l = a.isDisabled, c = a.menuIsOpen, f = this.state.isFocused;
      // ensure focus is restored correctly when the control becomes enabled
      (f && !l && o.isDisabled || // ensure focus is on the Input when the menu opens
      f && c && !o.menuIsOpen) && this.focusInput(), f && l && !o.isDisabled ? this.setState({
        isFocused: !1
      }, this.onMenuClose) : !f && !l && o.isDisabled && this.inputRef === document.activeElement && this.setState({
        isFocused: !0
      }), this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate && (jd(this.menuListRef, this.focusedOptionRef), this.scrollToFocusedOptionOnUpdate = !1);
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
    value: function(o, a) {
      this.props.onInputChange(o, a);
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
    value: function(o) {
      var a = this, l = this.state, c = l.selectValue, f = l.isFocused, p = this.buildFocusableOptions(), h = o === "first" ? 0 : p.length - 1;
      if (!this.props.isMulti) {
        var g = p.indexOf(c[0]);
        g > -1 && (h = g);
      }
      this.scrollToFocusedOptionOnUpdate = !(f && this.menuListRef), this.setState({
        inputIsHiddenAfterUpdate: !1,
        focusedValue: null,
        focusedOption: p[h],
        focusedOptionId: this.getFocusedOptionId(p[h])
      }, function() {
        return a.onMenuOpen();
      });
    }
  }, {
    key: "focusValue",
    value: function(o) {
      var a = this.state, l = a.selectValue, c = a.focusedValue;
      if (this.props.isMulti) {
        this.setState({
          focusedOption: null
        });
        var f = l.indexOf(c);
        c || (f = -1);
        var p = l.length - 1, h = -1;
        if (l.length) {
          switch (o) {
            case "previous":
              f === 0 ? h = 0 : f === -1 ? h = p : h = f - 1;
              break;
            case "next":
              f > -1 && f < p && (h = f + 1);
              break;
          }
          this.setState({
            inputIsHidden: h !== -1,
            focusedValue: l[h]
          });
        }
      }
    }
  }, {
    key: "focusOption",
    value: function() {
      var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "first", a = this.props.pageSize, l = this.state.focusedOption, c = this.getFocusableOptions();
      if (c.length) {
        var f = 0, p = c.indexOf(l);
        l || (p = -1), o === "up" ? f = p > 0 ? p - 1 : c.length - 1 : o === "down" ? f = (p + 1) % c.length : o === "pageup" ? (f = p - a, f < 0 && (f = 0)) : o === "pagedown" ? (f = p + a, f > c.length - 1 && (f = c.length - 1)) : o === "last" && (f = c.length - 1), this.scrollToFocusedOptionOnUpdate = !0, this.setState({
          focusedOption: c[f],
          focusedValue: null,
          focusedOptionId: this.getFocusedOptionId(c[f])
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
        return this.props.theme ? typeof this.props.theme == "function" ? this.props.theme(Hu) : de(de({}, Hu), this.props.theme) : Hu;
      }
    )
  }, {
    key: "getCommonProps",
    value: function() {
      var o = this.clearValue, a = this.cx, l = this.getStyles, c = this.getClassNames, f = this.getValue, p = this.selectOption, h = this.setValue, g = this.props, v = g.isMulti, b = g.isRtl, P = g.options, A = this.hasValue();
      return {
        clearValue: o,
        cx: a,
        getStyles: l,
        getClassNames: c,
        getValue: f,
        hasValue: A,
        isMulti: v,
        isRtl: b,
        options: P,
        selectOption: p,
        selectProps: g,
        setValue: h,
        theme: this.getTheme()
      };
    }
  }, {
    key: "hasValue",
    value: function() {
      var o = this.state.selectValue;
      return o.length > 0;
    }
  }, {
    key: "hasOptions",
    value: function() {
      return !!this.getFocusableOptions().length;
    }
  }, {
    key: "isClearable",
    value: function() {
      var o = this.props, a = o.isClearable, l = o.isMulti;
      return a === void 0 ? l : a;
    }
  }, {
    key: "isOptionDisabled",
    value: function(o, a) {
      return jh(this.props, o, a);
    }
  }, {
    key: "isOptionSelected",
    value: function(o, a) {
      return Qh(this.props, o, a);
    }
  }, {
    key: "filterOption",
    value: function(o, a) {
      return qh(this.props, o, a);
    }
  }, {
    key: "formatOptionLabel",
    value: function(o, a) {
      if (typeof this.props.formatOptionLabel == "function") {
        var l = this.props.inputValue, c = this.state.selectValue;
        return this.props.formatOptionLabel(o, {
          context: a,
          inputValue: l,
          selectValue: c
        });
      } else
        return this.getOptionLabel(o);
    }
  }, {
    key: "formatGroupLabel",
    value: function(o) {
      return this.props.formatGroupLabel(o);
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
        var o = this.props, a = o.isDisabled, l = o.isSearchable, c = o.inputId, f = o.inputValue, p = o.tabIndex, h = o.form, g = o.menuIsOpen, v = o.required, b = this.getComponents(), P = b.Input, A = this.state, E = A.inputIsHidden, F = A.ariaSelection, k = this.commonProps, L = c || this.getElementId("input"), D = de(de(de({
          "aria-autocomplete": "list",
          "aria-expanded": g,
          "aria-haspopup": !0,
          "aria-errormessage": this.props["aria-errormessage"],
          "aria-invalid": this.props["aria-invalid"],
          "aria-label": this.props["aria-label"],
          "aria-labelledby": this.props["aria-labelledby"],
          "aria-required": v,
          role: "combobox",
          "aria-activedescendant": this.isAppleDevice ? void 0 : this.state.focusedOptionId || ""
        }, g && {
          "aria-controls": this.getElementId("listbox")
        }), !l && {
          "aria-readonly": !0
        }), this.hasValue() ? (F == null ? void 0 : F.action) === "initial-input-focus" && {
          "aria-describedby": this.getElementId("live-region")
        } : {
          "aria-describedby": this.getElementId("placeholder")
        });
        return l ? /* @__PURE__ */ Pe.createElement(P, ye({}, k, {
          autoCapitalize: "none",
          autoComplete: "off",
          autoCorrect: "off",
          id: L,
          innerRef: this.getInputRef,
          isDisabled: a,
          isHidden: E,
          onBlur: this.onInputBlur,
          onChange: this.handleInputChange,
          onFocus: this.onInputFocus,
          spellCheck: "false",
          tabIndex: p,
          form: h,
          type: "text",
          value: f
        }, D)) : /* @__PURE__ */ Pe.createElement(jx, ye({
          id: L,
          innerRef: this.getInputRef,
          onBlur: this.onInputBlur,
          onChange: Fs,
          onFocus: this.onInputFocus,
          disabled: a,
          tabIndex: p,
          inputMode: "none",
          form: h,
          value: ""
        }, D));
      }
    )
  }, {
    key: "renderPlaceholderOrValue",
    value: function() {
      var o = this, a = this.getComponents(), l = a.MultiValue, c = a.MultiValueContainer, f = a.MultiValueLabel, p = a.MultiValueRemove, h = a.SingleValue, g = a.Placeholder, v = this.commonProps, b = this.props, P = b.controlShouldRenderValue, A = b.isDisabled, E = b.isMulti, F = b.inputValue, k = b.placeholder, L = this.state, D = L.selectValue, H = L.focusedValue, G = L.isFocused;
      if (!this.hasValue() || !P)
        return F ? null : /* @__PURE__ */ Pe.createElement(g, ye({}, v, {
          key: "placeholder",
          isDisabled: A,
          isFocused: G,
          innerProps: {
            id: this.getElementId("placeholder")
          }
        }), k);
      if (E)
        return D.map(function(N, V) {
          var ne = N === H, Q = "".concat(o.getOptionLabel(N), "-").concat(o.getOptionValue(N));
          return /* @__PURE__ */ Pe.createElement(l, ye({}, v, {
            components: {
              Container: c,
              Label: f,
              Remove: p
            },
            isFocused: ne,
            isDisabled: A,
            key: Q,
            index: V,
            removeProps: {
              onClick: function() {
                return o.removeValue(N);
              },
              onTouchEnd: function() {
                return o.removeValue(N);
              },
              onMouseDown: function(te) {
                te.preventDefault();
              }
            },
            data: N
          }), o.formatOptionLabel(N, "value"));
        });
      if (F)
        return null;
      var z = D[0];
      return /* @__PURE__ */ Pe.createElement(h, ye({}, v, {
        data: z,
        isDisabled: A
      }), this.formatOptionLabel(z, "value"));
    }
  }, {
    key: "renderClearIndicator",
    value: function() {
      var o = this.getComponents(), a = o.ClearIndicator, l = this.commonProps, c = this.props, f = c.isDisabled, p = c.isLoading, h = this.state.isFocused;
      if (!this.isClearable() || !a || f || !this.hasValue() || p)
        return null;
      var g = {
        onMouseDown: this.onClearIndicatorMouseDown,
        onTouchEnd: this.onClearIndicatorTouchEnd,
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ Pe.createElement(a, ye({}, l, {
        innerProps: g,
        isFocused: h
      }));
    }
  }, {
    key: "renderLoadingIndicator",
    value: function() {
      var o = this.getComponents(), a = o.LoadingIndicator, l = this.commonProps, c = this.props, f = c.isDisabled, p = c.isLoading, h = this.state.isFocused;
      if (!a || !p) return null;
      var g = {
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ Pe.createElement(a, ye({}, l, {
        innerProps: g,
        isDisabled: f,
        isFocused: h
      }));
    }
  }, {
    key: "renderIndicatorSeparator",
    value: function() {
      var o = this.getComponents(), a = o.DropdownIndicator, l = o.IndicatorSeparator;
      if (!a || !l) return null;
      var c = this.commonProps, f = this.props.isDisabled, p = this.state.isFocused;
      return /* @__PURE__ */ Pe.createElement(l, ye({}, c, {
        isDisabled: f,
        isFocused: p
      }));
    }
  }, {
    key: "renderDropdownIndicator",
    value: function() {
      var o = this.getComponents(), a = o.DropdownIndicator;
      if (!a) return null;
      var l = this.commonProps, c = this.props.isDisabled, f = this.state.isFocused, p = {
        onMouseDown: this.onDropdownIndicatorMouseDown,
        onTouchEnd: this.onDropdownIndicatorTouchEnd,
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ Pe.createElement(a, ye({}, l, {
        innerProps: p,
        isDisabled: c,
        isFocused: f
      }));
    }
  }, {
    key: "renderMenu",
    value: function() {
      var o = this, a = this.getComponents(), l = a.Group, c = a.GroupHeading, f = a.Menu, p = a.MenuList, h = a.MenuPortal, g = a.LoadingMessage, v = a.NoOptionsMessage, b = a.Option, P = this.commonProps, A = this.state.focusedOption, E = this.props, F = E.captureMenuScroll, k = E.inputValue, L = E.isLoading, D = E.loadingMessage, H = E.minMenuHeight, G = E.maxMenuHeight, z = E.menuIsOpen, N = E.menuPlacement, V = E.menuPosition, ne = E.menuPortalTarget, Q = E.menuShouldBlockScroll, j = E.menuShouldScrollIntoView, te = E.noOptionsMessage, ee = E.onMenuScrollToTop, K = E.onMenuScrollToBottom;
      if (!z) return null;
      var pe = function(w, Ye) {
        var me = w.type, ke = w.data, yt = w.isDisabled, Me = w.isSelected, ft = w.label, Dt = w.value, ue = A === ke, ae = yt ? void 0 : function() {
          return o.onOptionHover(ke);
        }, Ae = yt ? void 0 : function() {
          return o.selectOption(ke);
        }, Ee = "".concat(o.getElementId("option"), "-").concat(Ye), vt = {
          id: Ee,
          onClick: Ae,
          onMouseMove: ae,
          onMouseOver: ae,
          tabIndex: -1,
          role: "option",
          "aria-selected": o.isAppleDevice ? void 0 : Me
          // is not supported on Apple devices
        };
        return /* @__PURE__ */ Pe.createElement(b, ye({}, P, {
          innerProps: vt,
          data: ke,
          isDisabled: yt,
          isSelected: Me,
          key: Ee,
          label: ft,
          type: me,
          value: Dt,
          isFocused: ue,
          innerRef: ue ? o.getFocusedOptionRef : void 0
        }), o.formatOptionLabel(w.data, "menu"));
      }, fe;
      if (this.hasOptions())
        fe = this.getCategorizedOptions().map(function(Le) {
          if (Le.type === "group") {
            var w = Le.data, Ye = Le.options, me = Le.index, ke = "".concat(o.getElementId("group"), "-").concat(me), yt = "".concat(ke, "-heading");
            return /* @__PURE__ */ Pe.createElement(l, ye({}, P, {
              key: ke,
              data: w,
              options: Ye,
              Heading: c,
              headingProps: {
                id: yt,
                data: Le.data
              },
              label: o.formatGroupLabel(Le.data)
            }), Le.options.map(function(Me) {
              return pe(Me, "".concat(me, "-").concat(Me.index));
            }));
          } else if (Le.type === "option")
            return pe(Le, "".concat(Le.index));
        });
      else if (L) {
        var Se = D({
          inputValue: k
        });
        if (Se === null) return null;
        fe = /* @__PURE__ */ Pe.createElement(g, P, Se);
      } else {
        var je = te({
          inputValue: k
        });
        if (je === null) return null;
        fe = /* @__PURE__ */ Pe.createElement(v, P, je);
      }
      var S = {
        minMenuHeight: H,
        maxMenuHeight: G,
        menuPlacement: N,
        menuPosition: V,
        menuShouldScrollIntoView: j
      }, We = /* @__PURE__ */ Pe.createElement(EC, ye({}, P, S), function(Le) {
        var w = Le.ref, Ye = Le.placerProps, me = Ye.placement, ke = Ye.maxHeight;
        return /* @__PURE__ */ Pe.createElement(f, ye({}, P, S, {
          innerRef: w,
          innerProps: {
            onMouseDown: o.onMenuMouseDown,
            onMouseMove: o.onMenuMouseMove
          },
          isLoading: L,
          placement: me
        }), /* @__PURE__ */ Pe.createElement(nA, {
          captureEnabled: F,
          onTopArrive: ee,
          onBottomArrive: K,
          lockEnabled: Q
        }, function(yt) {
          return /* @__PURE__ */ Pe.createElement(p, ye({}, P, {
            innerRef: function(ft) {
              o.getMenuListRef(ft), yt(ft);
            },
            innerProps: {
              role: "listbox",
              "aria-multiselectable": P.isMulti,
              id: o.getElementId("listbox")
            },
            isLoading: L,
            maxHeight: ke,
            focusedOption: A
          }), fe);
        }));
      });
      return ne || V === "fixed" ? /* @__PURE__ */ Pe.createElement(h, ye({}, P, {
        appendTo: ne,
        controlElement: this.controlRef,
        menuPlacement: N,
        menuPosition: V
      }), We) : We;
    }
  }, {
    key: "renderFormField",
    value: function() {
      var o = this, a = this.props, l = a.delimiter, c = a.isDisabled, f = a.isMulti, p = a.name, h = a.required, g = this.state.selectValue;
      if (h && !this.hasValue() && !c)
        return /* @__PURE__ */ Pe.createElement(oA, {
          name: p,
          onFocus: this.onValueInputFocus
        });
      if (!(!p || c))
        if (f)
          if (l) {
            var v = g.map(function(A) {
              return o.getOptionValue(A);
            }).join(l);
            return /* @__PURE__ */ Pe.createElement("input", {
              name: p,
              type: "hidden",
              value: v
            });
          } else {
            var b = g.length > 0 ? g.map(function(A, E) {
              return /* @__PURE__ */ Pe.createElement("input", {
                key: "i-".concat(E),
                name: p,
                type: "hidden",
                value: o.getOptionValue(A)
              });
            }) : /* @__PURE__ */ Pe.createElement("input", {
              name: p,
              type: "hidden",
              value: ""
            });
            return /* @__PURE__ */ Pe.createElement("div", null, b);
          }
        else {
          var P = g[0] ? this.getOptionValue(g[0]) : "";
          return /* @__PURE__ */ Pe.createElement("input", {
            name: p,
            type: "hidden",
            value: P
          });
        }
    }
  }, {
    key: "renderLiveRegion",
    value: function() {
      var o = this.commonProps, a = this.state, l = a.ariaSelection, c = a.focusedOption, f = a.focusedValue, p = a.isFocused, h = a.selectValue, g = this.getFocusableOptions();
      return /* @__PURE__ */ Pe.createElement(Hx, ye({}, o, {
        id: this.getElementId("live-region"),
        ariaSelection: l,
        focusedOption: c,
        focusedValue: f,
        isFocused: p,
        selectValue: h,
        focusableOptions: g,
        isAppleDevice: this.isAppleDevice
      }));
    }
  }, {
    key: "render",
    value: function() {
      var o = this.getComponents(), a = o.Control, l = o.IndicatorsContainer, c = o.SelectContainer, f = o.ValueContainer, p = this.props, h = p.className, g = p.id, v = p.isDisabled, b = p.menuIsOpen, P = this.state.isFocused, A = this.commonProps = this.getCommonProps();
      return /* @__PURE__ */ Pe.createElement(c, ye({}, A, {
        className: h,
        innerProps: {
          id: g,
          onKeyDown: this.onKeyDown
        },
        isDisabled: v,
        isFocused: P
      }), this.renderLiveRegion(), /* @__PURE__ */ Pe.createElement(a, ye({}, A, {
        innerRef: this.getControlRef,
        innerProps: {
          onMouseDown: this.onControlMouseDown,
          onTouchEnd: this.onControlTouchEnd
        },
        isDisabled: v,
        isFocused: P,
        menuIsOpen: b
      }), /* @__PURE__ */ Pe.createElement(f, ye({}, A, {
        isDisabled: v
      }), this.renderPlaceholderOrValue(), this.renderInput()), /* @__PURE__ */ Pe.createElement(l, ye({}, A, {
        isDisabled: v
      }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(o, a) {
      var l = a.prevProps, c = a.clearFocusValueOnUpdate, f = a.inputIsHiddenAfterUpdate, p = a.ariaSelection, h = a.isFocused, g = a.prevWasFocused, v = a.instancePrefix, b = o.options, P = o.value, A = o.menuIsOpen, E = o.inputValue, F = o.isMulti, k = Rs(P), L = {};
      if (l && (P !== l.value || b !== l.options || A !== l.menuIsOpen || E !== l.inputValue)) {
        var D = A ? CA(o, k) : [], H = A ? lp(Cs(o, k), "".concat(v, "-option")) : [], G = c ? xA(a, k) : null, z = AA(a, D), N = Al(H, z);
        L = {
          selectValue: k,
          focusedOption: z,
          focusedOptionId: N,
          focusableOptionsWithIds: H,
          focusedValue: G,
          clearFocusValueOnUpdate: !1
        };
      }
      var V = f != null && o !== l ? {
        inputIsHidden: f,
        inputIsHiddenAfterUpdate: void 0
      } : {}, ne = p, Q = h && g;
      return h && !Q && (ne = {
        value: Nu(F, k, k[0] || null),
        options: k,
        action: "initial-input-focus"
      }, Q = !g), (p == null ? void 0 : p.action) === "initial-input-focus" && (ne = null), de(de(de({}, L), V), {}, {
        prevProps: o,
        ariaSelection: ne,
        prevWasFocused: Q
      });
    }
  }]), r;
}(bh);
xc.defaultProps = IA;
var SA = /* @__PURE__ */ yh(function(e, t) {
  var r = xh(e);
  return /* @__PURE__ */ Pe.createElement(xc, ye({
    ref: t
  }, r));
}), Ms = SA;
const EA = Hu, Ac = {
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
}, FA = {
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
function RA(e) {
  if (!e) return Hu;
  const t = typeof e == "function" ? e(Ac) : e, {
    colors: r,
    spacing: u,
    borderRadius: o
  } = Yl(
    EA,
    t
  );
  return {
    borderRadius: o,
    colors: r,
    spacing: u
  };
}
function Yl(e, ...t) {
  const r = {
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
  for (const u of t)
    u && (r.borderRadius = u.borderRadius ?? r.borderRadius, Object.assign(r.boxShadow, u.boxShadow), Object.assign(r.colors, u.colors), Object.assign(r.spacing, u.spacing));
  return r;
}
var to = class {
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
}, pi = typeof window > "u" || "Deno" in globalThis;
function En() {
}
function PA(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Jl(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function Kh(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Xi(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Dn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function fp(e, t) {
  const {
    type: r = "all",
    exact: u,
    fetchStatus: o,
    predicate: a,
    queryKey: l,
    stale: c
  } = e;
  if (l) {
    if (u) {
      if (t.queryHash !== wc(l, t.options))
        return !1;
    } else if (!Ju(t.queryKey, l))
      return !1;
  }
  if (r !== "all") {
    const f = t.isActive();
    if (r === "active" && !f || r === "inactive" && f)
      return !1;
  }
  return !(typeof c == "boolean" && t.isStale() !== c || o && o !== t.state.fetchStatus || a && !a(t));
}
function dp(e, t) {
  const { exact: r, status: u, predicate: o, mutationKey: a } = e;
  if (a) {
    if (!t.options.mutationKey)
      return !1;
    if (r) {
      if (Yu(t.options.mutationKey) !== Yu(a))
        return !1;
    } else if (!Ju(t.options.mutationKey, a))
      return !1;
  }
  return !(u && t.state.status !== u || o && !o(t));
}
function wc(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || Yu)(e);
}
function Yu(e) {
  return JSON.stringify(
    e,
    (t, r) => Ql(r) ? Object.keys(r).sort().reduce((u, o) => (u[o] = r[o], u), {}) : r
  );
}
function Ju(e, t) {
  return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? !Object.keys(t).some((r) => !Ju(e[r], t[r])) : !1;
}
function Ul(e, t) {
  if (e === t)
    return e;
  const r = pp(e) && pp(t);
  if (r || Ql(e) && Ql(t)) {
    const u = r ? e : Object.keys(e), o = u.length, a = r ? t : Object.keys(t), l = a.length, c = r ? [] : {};
    let f = 0;
    for (let p = 0; p < l; p++) {
      const h = r ? p : a[p];
      (!r && u.includes(h) || r) && e[h] === void 0 && t[h] === void 0 ? (c[h] = void 0, f++) : (c[h] = Ul(e[h], t[h]), c[h] === e[h] && e[h] !== void 0 && f++);
    }
    return o === l && f === o ? e : c;
  }
  return t;
}
function jl(e, t) {
  if (!t || Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const r in e)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function pp(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Ql(e) {
  if (!hp(e))
    return !1;
  const t = e.constructor;
  if (t === void 0)
    return !0;
  const r = t.prototype;
  return !(!hp(r) || !r.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype);
}
function hp(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function OA(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function ql(e, t, r) {
  if (typeof r.structuralSharing == "function")
    return r.structuralSharing(e, t);
  if (r.structuralSharing !== !1) {
    if (process.env.NODE_ENV !== "production")
      try {
        return Ul(e, t);
      } catch (u) {
        console.error(
          `Structural sharing requires data to be JSON serializable. To fix this, turn off structuralSharing or return JSON-serializable data from your queryFn. [${r.queryHash}]: ${u}`
        );
      }
    return Ul(e, t);
  }
  return t;
}
function TA(e, t, r = 0) {
  const u = [...e, t];
  return r && u.length > r ? u.slice(1) : u;
}
function BA(e, t, r = 0) {
  const u = [t, ...e];
  return r && u.length > r ? u.slice(0, -1) : u;
}
var Ts = Symbol();
function eg(e, t) {
  return process.env.NODE_ENV !== "production" && e.queryFn === Ts && console.error(
    `Attempted to invoke queryFn when set to skipToken. This is likely a configuration error. Query hash: '${e.queryHash}'`
  ), !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === Ts ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn;
}
var ui, Gr, Zi, ah, _A = (ah = class extends to {
  constructor() {
    super();
    Ce(this, ui);
    Ce(this, Gr);
    Ce(this, Zi);
    se(this, Zi, (t) => {
      if (!pi && window.addEventListener) {
        const r = () => t();
        return window.addEventListener("visibilitychange", r, !1), () => {
          window.removeEventListener("visibilitychange", r);
        };
      }
    });
  }
  onSubscribe() {
    O(this, Gr) || this.setEventListener(O(this, Zi));
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || ((t = O(this, Gr)) == null || t.call(this), se(this, Gr, void 0));
  }
  setEventListener(t) {
    var r;
    se(this, Zi, t), (r = O(this, Gr)) == null || r.call(this), se(this, Gr, t((u) => {
      typeof u == "boolean" ? this.setFocused(u) : this.onFocus();
    }));
  }
  setFocused(t) {
    O(this, ui) !== t && (se(this, ui, t), this.onFocus());
  }
  onFocus() {
    const t = this.isFocused();
    this.listeners.forEach((r) => {
      r(t);
    });
  }
  isFocused() {
    var t;
    return typeof O(this, ui) == "boolean" ? O(this, ui) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden";
  }
}, ui = new WeakMap(), Gr = new WeakMap(), Zi = new WeakMap(), ah), Sc = new _A(), Yi, Lr, Ji, lh, GA = (lh = class extends to {
  constructor() {
    super();
    Ce(this, Yi, !0);
    Ce(this, Lr);
    Ce(this, Ji);
    se(this, Ji, (t) => {
      if (!pi && window.addEventListener) {
        const r = () => t(!0), u = () => t(!1);
        return window.addEventListener("online", r, !1), window.addEventListener("offline", u, !1), () => {
          window.removeEventListener("online", r), window.removeEventListener("offline", u);
        };
      }
    });
  }
  onSubscribe() {
    O(this, Lr) || this.setEventListener(O(this, Ji));
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || ((t = O(this, Lr)) == null || t.call(this), se(this, Lr, void 0));
  }
  setEventListener(t) {
    var r;
    se(this, Ji, t), (r = O(this, Lr)) == null || r.call(this), se(this, Lr, t(this.setOnline.bind(this)));
  }
  setOnline(t) {
    O(this, Yi) !== t && (se(this, Yi, t), this.listeners.forEach((u) => {
      u(t);
    }));
  }
  isOnline() {
    return O(this, Yi);
  }
}, Yi = new WeakMap(), Lr = new WeakMap(), Ji = new WeakMap(), lh), Bs = new GA();
function $l() {
  let e, t;
  const r = new Promise((o, a) => {
    e = o, t = a;
  });
  r.status = "pending", r.catch(() => {
  });
  function u(o) {
    Object.assign(r, o), delete r.resolve, delete r.reject;
  }
  return r.resolve = (o) => {
    u({
      status: "fulfilled",
      value: o
    }), e(o);
  }, r.reject = (o) => {
    u({
      status: "rejected",
      reason: o
    }), t(o);
  }, r;
}
function LA(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function tg(e) {
  return (e ?? "online") === "online" ? Bs.isOnline() : !0;
}
var ng = class extends Error {
  constructor(e) {
    super("CancelledError"), this.revert = e == null ? void 0 : e.revert, this.silent = e == null ? void 0 : e.silent;
  }
};
function wl(e) {
  return e instanceof ng;
}
function rg(e) {
  let t = !1, r = 0, u = !1, o;
  const a = $l(), l = (A) => {
    var E;
    u || (v(new ng(A)), (E = e.abort) == null || E.call(e));
  }, c = () => {
    t = !0;
  }, f = () => {
    t = !1;
  }, p = () => Sc.isFocused() && (e.networkMode === "always" || Bs.isOnline()) && e.canRun(), h = () => tg(e.networkMode) && e.canRun(), g = (A) => {
    var E;
    u || (u = !0, (E = e.onSuccess) == null || E.call(e, A), o == null || o(), a.resolve(A));
  }, v = (A) => {
    var E;
    u || (u = !0, (E = e.onError) == null || E.call(e, A), o == null || o(), a.reject(A));
  }, b = () => new Promise((A) => {
    var E;
    o = (F) => {
      (u || p()) && A(F);
    }, (E = e.onPause) == null || E.call(e);
  }).then(() => {
    var A;
    o = void 0, u || (A = e.onContinue) == null || A.call(e);
  }), P = () => {
    if (u)
      return;
    let A;
    const E = r === 0 ? e.initialPromise : void 0;
    try {
      A = E ?? e.fn();
    } catch (F) {
      A = Promise.reject(F);
    }
    Promise.resolve(A).then(g).catch((F) => {
      var G;
      if (u)
        return;
      const k = e.retry ?? (pi ? 0 : 3), L = e.retryDelay ?? LA, D = typeof L == "function" ? L(r, F) : L, H = k === !0 || typeof k == "number" && r < k || typeof k == "function" && k(r, F);
      if (t || !H) {
        v(F);
        return;
      }
      r++, (G = e.onFail) == null || G.call(e, r, F), OA(D).then(() => p() ? void 0 : b()).then(() => {
        t ? v(F) : P();
      });
    });
  };
  return {
    promise: a,
    cancel: l,
    continue: () => (o == null || o(), a),
    cancelRetry: c,
    continueRetry: f,
    canStart: h,
    start: () => (h() ? P() : b().then(P), a)
  };
}
function kA() {
  let e = [], t = 0, r = (c) => {
    c();
  }, u = (c) => {
    c();
  }, o = (c) => setTimeout(c, 0);
  const a = (c) => {
    t ? e.push(c) : o(() => {
      r(c);
    });
  }, l = () => {
    const c = e;
    e = [], c.length && o(() => {
      u(() => {
        c.forEach((f) => {
          r(f);
        });
      });
    });
  };
  return {
    batch: (c) => {
      let f;
      t++;
      try {
        f = c();
      } finally {
        t--, t || l();
      }
      return f;
    },
    /**
     * All calls to the wrapped function will be batched.
     */
    batchCalls: (c) => (...f) => {
      a(() => {
        c(...f);
      });
    },
    schedule: a,
    /**
     * Use this method to set a custom notify function.
     * This can be used to for example wrap notifications with `React.act` while running tests.
     */
    setNotifyFunction: (c) => {
      r = c;
    },
    /**
     * Use this method to set a custom function to batch notifications together into a single tick.
     * By default React Query will use the batch function provided by ReactDOM or React Native.
     */
    setBatchNotifyFunction: (c) => {
      u = c;
    },
    setScheduler: (c) => {
      o = c;
    }
  };
}
var Ot = kA(), oi, ch, ig = (ch = class {
  constructor() {
    Ce(this, oi);
  }
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(), Jl(this.gcTime) && se(this, oi, setTimeout(() => {
      this.optionalRemove();
    }, this.gcTime));
  }
  updateGcTime(e) {
    this.gcTime = Math.max(
      this.gcTime || 0,
      e ?? (pi ? 1 / 0 : 5 * 60 * 1e3)
    );
  }
  clearGcTimeout() {
    O(this, oi) && (clearTimeout(O(this, oi)), se(this, oi, void 0));
  }
}, oi = new WeakMap(), ch), Ui, ji, Sn, _t, ju, si, Ln, mr, fh, DA = (fh = class extends ig {
  constructor(t) {
    super();
    Ce(this, Ln);
    Ce(this, Ui);
    Ce(this, ji);
    Ce(this, Sn);
    Ce(this, _t);
    Ce(this, ju);
    Ce(this, si);
    se(this, si, !1), se(this, ju, t.defaultOptions), this.setOptions(t.options), this.observers = [], se(this, Sn, t.cache), this.queryKey = t.queryKey, this.queryHash = t.queryHash, se(this, Ui, MA(this.options)), this.state = t.state ?? O(this, Ui), this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  get promise() {
    var t;
    return (t = O(this, _t)) == null ? void 0 : t.promise;
  }
  setOptions(t) {
    this.options = { ...O(this, ju), ...t }, this.updateGcTime(this.options.gcTime);
  }
  optionalRemove() {
    !this.observers.length && this.state.fetchStatus === "idle" && O(this, Sn).remove(this);
  }
  setData(t, r) {
    const u = ql(this.state.data, t, this.options);
    return ze(this, Ln, mr).call(this, {
      data: u,
      type: "success",
      dataUpdatedAt: r == null ? void 0 : r.updatedAt,
      manual: r == null ? void 0 : r.manual
    }), u;
  }
  setState(t, r) {
    ze(this, Ln, mr).call(this, { type: "setState", state: t, setStateOptions: r });
  }
  cancel(t) {
    var u, o;
    const r = (u = O(this, _t)) == null ? void 0 : u.promise;
    return (o = O(this, _t)) == null || o.cancel(t), r ? r.then(En).catch(En) : Promise.resolve();
  }
  destroy() {
    super.destroy(), this.cancel({ silent: !0 });
  }
  reset() {
    this.destroy(), this.setState(O(this, Ui));
  }
  isActive() {
    return this.observers.some(
      (t) => Dn(t.options.enabled, this) !== !1
    );
  }
  isDisabled() {
    return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === Ts || this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
  }
  isStale() {
    return this.state.isInvalidated ? !0 : this.getObserversCount() > 0 ? this.observers.some(
      (t) => t.getCurrentResult().isStale
    ) : this.state.data === void 0;
  }
  isStaleByTime(t = 0) {
    return this.state.isInvalidated || this.state.data === void 0 || !Kh(this.state.dataUpdatedAt, t);
  }
  onFocus() {
    var r;
    const t = this.observers.find((u) => u.shouldFetchOnWindowFocus());
    t == null || t.refetch({ cancelRefetch: !1 }), (r = O(this, _t)) == null || r.continue();
  }
  onOnline() {
    var r;
    const t = this.observers.find((u) => u.shouldFetchOnReconnect());
    t == null || t.refetch({ cancelRefetch: !1 }), (r = O(this, _t)) == null || r.continue();
  }
  addObserver(t) {
    this.observers.includes(t) || (this.observers.push(t), this.clearGcTimeout(), O(this, Sn).notify({ type: "observerAdded", query: this, observer: t }));
  }
  removeObserver(t) {
    this.observers.includes(t) && (this.observers = this.observers.filter((r) => r !== t), this.observers.length || (O(this, _t) && (O(this, si) ? O(this, _t).cancel({ revert: !0 }) : O(this, _t).cancelRetry()), this.scheduleGc()), O(this, Sn).notify({ type: "observerRemoved", query: this, observer: t }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    this.state.isInvalidated || ze(this, Ln, mr).call(this, { type: "invalidate" });
  }
  fetch(t, r) {
    var f, p, h;
    if (this.state.fetchStatus !== "idle") {
      if (this.state.data !== void 0 && (r != null && r.cancelRefetch))
        this.cancel({ silent: !0 });
      else if (O(this, _t))
        return O(this, _t).continueRetry(), O(this, _t).promise;
    }
    if (t && this.setOptions(t), !this.options.queryFn) {
      const g = this.observers.find((v) => v.options.queryFn);
      g && this.setOptions(g.options);
    }
    process.env.NODE_ENV !== "production" && (Array.isArray(this.options.queryKey) || console.error(
      "As of v4, queryKey needs to be an Array. If you are using a string like 'repoData', please change it to an Array, e.g. ['repoData']"
    ));
    const u = new AbortController(), o = (g) => {
      Object.defineProperty(g, "signal", {
        enumerable: !0,
        get: () => (se(this, si, !0), u.signal)
      });
    }, a = () => {
      const g = eg(this.options, r), v = {
        queryKey: this.queryKey,
        meta: this.meta
      };
      return o(v), se(this, si, !1), this.options.persister ? this.options.persister(
        g,
        v,
        this
      ) : g(v);
    }, l = {
      fetchOptions: r,
      options: this.options,
      queryKey: this.queryKey,
      state: this.state,
      fetchFn: a
    };
    o(l), (f = this.options.behavior) == null || f.onFetch(
      l,
      this
    ), se(this, ji, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((p = l.fetchOptions) == null ? void 0 : p.meta)) && ze(this, Ln, mr).call(this, { type: "fetch", meta: (h = l.fetchOptions) == null ? void 0 : h.meta });
    const c = (g) => {
      var v, b, P, A;
      wl(g) && g.silent || ze(this, Ln, mr).call(this, {
        type: "error",
        error: g
      }), wl(g) || ((b = (v = O(this, Sn).config).onError) == null || b.call(
        v,
        g,
        this
      ), (A = (P = O(this, Sn).config).onSettled) == null || A.call(
        P,
        this.state.data,
        g,
        this
      )), this.scheduleGc();
    };
    return se(this, _t, rg({
      initialPromise: r == null ? void 0 : r.initialPromise,
      fn: l.fetchFn,
      abort: u.abort.bind(u),
      onSuccess: (g) => {
        var v, b, P, A;
        if (g === void 0) {
          process.env.NODE_ENV !== "production" && console.error(
            `Query data cannot be undefined. Please make sure to return a value other than undefined from your query function. Affected query key: ${this.queryHash}`
          ), c(new Error(`${this.queryHash} data is undefined`));
          return;
        }
        try {
          this.setData(g);
        } catch (E) {
          c(E);
          return;
        }
        (b = (v = O(this, Sn).config).onSuccess) == null || b.call(v, g, this), (A = (P = O(this, Sn).config).onSettled) == null || A.call(
          P,
          g,
          this.state.error,
          this
        ), this.scheduleGc();
      },
      onError: c,
      onFail: (g, v) => {
        ze(this, Ln, mr).call(this, { type: "failed", failureCount: g, error: v });
      },
      onPause: () => {
        ze(this, Ln, mr).call(this, { type: "pause" });
      },
      onContinue: () => {
        ze(this, Ln, mr).call(this, { type: "continue" });
      },
      retry: l.options.retry,
      retryDelay: l.options.retryDelay,
      networkMode: l.options.networkMode,
      canRun: () => !0
    })), O(this, _t).start();
  }
}, Ui = new WeakMap(), ji = new WeakMap(), Sn = new WeakMap(), _t = new WeakMap(), ju = new WeakMap(), si = new WeakMap(), Ln = new WeakSet(), mr = function(t) {
  const r = (u) => {
    switch (t.type) {
      case "failed":
        return {
          ...u,
          fetchFailureCount: t.failureCount,
          fetchFailureReason: t.error
        };
      case "pause":
        return {
          ...u,
          fetchStatus: "paused"
        };
      case "continue":
        return {
          ...u,
          fetchStatus: "fetching"
        };
      case "fetch":
        return {
          ...u,
          ...ug(u.data, this.options),
          fetchMeta: t.meta ?? null
        };
      case "success":
        return {
          ...u,
          data: t.data,
          dataUpdateCount: u.dataUpdateCount + 1,
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
        const o = t.error;
        return wl(o) && o.revert && O(this, ji) ? { ...O(this, ji), fetchStatus: "idle" } : {
          ...u,
          error: o,
          errorUpdateCount: u.errorUpdateCount + 1,
          errorUpdatedAt: Date.now(),
          fetchFailureCount: u.fetchFailureCount + 1,
          fetchFailureReason: o,
          fetchStatus: "idle",
          status: "error"
        };
      case "invalidate":
        return {
          ...u,
          isInvalidated: !0
        };
      case "setState":
        return {
          ...u,
          ...t.state
        };
    }
  };
  this.state = r(this.state), Ot.batch(() => {
    this.observers.forEach((u) => {
      u.onQueryUpdate();
    }), O(this, Sn).notify({ query: this, type: "updated", action: t });
  });
}, fh);
function ug(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: tg(t.networkMode) ? "fetching" : "paused",
    ...e === void 0 && {
      error: null,
      status: "pending"
    }
  };
}
function MA(e) {
  const t = typeof e.initialData == "function" ? e.initialData() : e.initialData, r = t !== void 0, u = r ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: r ? u ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: r ? "success" : "pending",
    fetchStatus: "idle"
  };
}
var Yn, dh, NA = (dh = class extends to {
  constructor(t = {}) {
    super();
    Ce(this, Yn);
    this.config = t, se(this, Yn, /* @__PURE__ */ new Map());
  }
  build(t, r, u) {
    const o = r.queryKey, a = r.queryHash ?? wc(o, r);
    let l = this.get(a);
    return l || (l = new DA({
      cache: this,
      queryKey: o,
      queryHash: a,
      options: t.defaultQueryOptions(r),
      state: u,
      defaultOptions: t.getQueryDefaults(o)
    }), this.add(l)), l;
  }
  add(t) {
    O(this, Yn).has(t.queryHash) || (O(this, Yn).set(t.queryHash, t), this.notify({
      type: "added",
      query: t
    }));
  }
  remove(t) {
    const r = O(this, Yn).get(t.queryHash);
    r && (t.destroy(), r === t && O(this, Yn).delete(t.queryHash), this.notify({ type: "removed", query: t }));
  }
  clear() {
    Ot.batch(() => {
      this.getAll().forEach((t) => {
        this.remove(t);
      });
    });
  }
  get(t) {
    return O(this, Yn).get(t);
  }
  getAll() {
    return [...O(this, Yn).values()];
  }
  find(t) {
    const r = { exact: !0, ...t };
    return this.getAll().find(
      (u) => fp(r, u)
    );
  }
  findAll(t = {}) {
    const r = this.getAll();
    return Object.keys(t).length > 0 ? r.filter((u) => fp(t, u)) : r;
  }
  notify(t) {
    Ot.batch(() => {
      this.listeners.forEach((r) => {
        r(t);
      });
    });
  }
  onFocus() {
    Ot.batch(() => {
      this.getAll().forEach((t) => {
        t.onFocus();
      });
    });
  }
  onOnline() {
    Ot.batch(() => {
      this.getAll().forEach((t) => {
        t.onOnline();
      });
    });
  }
}, Yn = new WeakMap(), dh), Jn, zt, ai, Un, _r, ph, VA = (ph = class extends ig {
  constructor(t) {
    super();
    Ce(this, Un);
    Ce(this, Jn);
    Ce(this, zt);
    Ce(this, ai);
    this.mutationId = t.mutationId, se(this, zt, t.mutationCache), se(this, Jn, []), this.state = t.state || WA(), this.setOptions(t.options), this.scheduleGc();
  }
  setOptions(t) {
    this.options = t, this.updateGcTime(this.options.gcTime);
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(t) {
    O(this, Jn).includes(t) || (O(this, Jn).push(t), this.clearGcTimeout(), O(this, zt).notify({
      type: "observerAdded",
      mutation: this,
      observer: t
    }));
  }
  removeObserver(t) {
    se(this, Jn, O(this, Jn).filter((r) => r !== t)), this.scheduleGc(), O(this, zt).notify({
      type: "observerRemoved",
      mutation: this,
      observer: t
    });
  }
  optionalRemove() {
    O(this, Jn).length || (this.state.status === "pending" ? this.scheduleGc() : O(this, zt).remove(this));
  }
  continue() {
    var t;
    return ((t = O(this, ai)) == null ? void 0 : t.continue()) ?? // continuing a mutation assumes that variables are set, mutation must have been dehydrated before
    this.execute(this.state.variables);
  }
  async execute(t) {
    var o, a, l, c, f, p, h, g, v, b, P, A, E, F, k, L, D, H, G, z;
    se(this, ai, rg({
      fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
      onFail: (N, V) => {
        ze(this, Un, _r).call(this, { type: "failed", failureCount: N, error: V });
      },
      onPause: () => {
        ze(this, Un, _r).call(this, { type: "pause" });
      },
      onContinue: () => {
        ze(this, Un, _r).call(this, { type: "continue" });
      },
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => O(this, zt).canRun(this)
    }));
    const r = this.state.status === "pending", u = !O(this, ai).canStart();
    try {
      if (!r) {
        ze(this, Un, _r).call(this, { type: "pending", variables: t, isPaused: u }), await ((a = (o = O(this, zt).config).onMutate) == null ? void 0 : a.call(
          o,
          t,
          this
        ));
        const V = await ((c = (l = this.options).onMutate) == null ? void 0 : c.call(l, t));
        V !== this.state.context && ze(this, Un, _r).call(this, {
          type: "pending",
          context: V,
          variables: t,
          isPaused: u
        });
      }
      const N = await O(this, ai).start();
      return await ((p = (f = O(this, zt).config).onSuccess) == null ? void 0 : p.call(
        f,
        N,
        t,
        this.state.context,
        this
      )), await ((g = (h = this.options).onSuccess) == null ? void 0 : g.call(h, N, t, this.state.context)), await ((b = (v = O(this, zt).config).onSettled) == null ? void 0 : b.call(
        v,
        N,
        null,
        this.state.variables,
        this.state.context,
        this
      )), await ((A = (P = this.options).onSettled) == null ? void 0 : A.call(P, N, null, t, this.state.context)), ze(this, Un, _r).call(this, { type: "success", data: N }), N;
    } catch (N) {
      try {
        throw await ((F = (E = O(this, zt).config).onError) == null ? void 0 : F.call(
          E,
          N,
          t,
          this.state.context,
          this
        )), await ((L = (k = this.options).onError) == null ? void 0 : L.call(
          k,
          N,
          t,
          this.state.context
        )), await ((H = (D = O(this, zt).config).onSettled) == null ? void 0 : H.call(
          D,
          void 0,
          N,
          this.state.variables,
          this.state.context,
          this
        )), await ((z = (G = this.options).onSettled) == null ? void 0 : z.call(
          G,
          void 0,
          N,
          t,
          this.state.context
        )), N;
      } finally {
        ze(this, Un, _r).call(this, { type: "error", error: N });
      }
    } finally {
      O(this, zt).runNext(this);
    }
  }
}, Jn = new WeakMap(), zt = new WeakMap(), ai = new WeakMap(), Un = new WeakSet(), _r = function(t) {
  const r = (u) => {
    switch (t.type) {
      case "failed":
        return {
          ...u,
          failureCount: t.failureCount,
          failureReason: t.error
        };
      case "pause":
        return {
          ...u,
          isPaused: !0
        };
      case "continue":
        return {
          ...u,
          isPaused: !1
        };
      case "pending":
        return {
          ...u,
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
          ...u,
          data: t.data,
          failureCount: 0,
          failureReason: null,
          error: null,
          status: "success",
          isPaused: !1
        };
      case "error":
        return {
          ...u,
          data: void 0,
          error: t.error,
          failureCount: u.failureCount + 1,
          failureReason: t.error,
          isPaused: !1,
          status: "error"
        };
    }
  };
  this.state = r(this.state), Ot.batch(() => {
    O(this, Jn).forEach((u) => {
      u.onMutationUpdate(t);
    }), O(this, zt).notify({
      mutation: this,
      type: "updated",
      action: t
    });
  });
}, ph);
function WA() {
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
var br, kn, Qu, hh, XA = (hh = class extends to {
  constructor(t = {}) {
    super();
    Ce(this, br);
    Ce(this, kn);
    Ce(this, Qu);
    this.config = t, se(this, br, /* @__PURE__ */ new Set()), se(this, kn, /* @__PURE__ */ new Map()), se(this, Qu, 0);
  }
  build(t, r, u) {
    const o = new VA({
      mutationCache: this,
      mutationId: ++ps(this, Qu)._,
      options: t.defaultMutationOptions(r),
      state: u
    });
    return this.add(o), o;
  }
  add(t) {
    O(this, br).add(t);
    const r = bs(t);
    if (typeof r == "string") {
      const u = O(this, kn).get(r);
      u ? u.push(t) : O(this, kn).set(r, [t]);
    }
    this.notify({ type: "added", mutation: t });
  }
  remove(t) {
    if (O(this, br).delete(t)) {
      const r = bs(t);
      if (typeof r == "string") {
        const u = O(this, kn).get(r);
        if (u)
          if (u.length > 1) {
            const o = u.indexOf(t);
            o !== -1 && u.splice(o, 1);
          } else u[0] === t && O(this, kn).delete(r);
      }
    }
    this.notify({ type: "removed", mutation: t });
  }
  canRun(t) {
    const r = bs(t);
    if (typeof r == "string") {
      const u = O(this, kn).get(r), o = u == null ? void 0 : u.find(
        (a) => a.state.status === "pending"
      );
      return !o || o === t;
    } else
      return !0;
  }
  runNext(t) {
    var u;
    const r = bs(t);
    if (typeof r == "string") {
      const o = (u = O(this, kn).get(r)) == null ? void 0 : u.find((a) => a !== t && a.state.isPaused);
      return (o == null ? void 0 : o.continue()) ?? Promise.resolve();
    } else
      return Promise.resolve();
  }
  clear() {
    Ot.batch(() => {
      O(this, br).forEach((t) => {
        this.notify({ type: "removed", mutation: t });
      }), O(this, br).clear(), O(this, kn).clear();
    });
  }
  getAll() {
    return Array.from(O(this, br));
  }
  find(t) {
    const r = { exact: !0, ...t };
    return this.getAll().find(
      (u) => dp(r, u)
    );
  }
  findAll(t = {}) {
    return this.getAll().filter((r) => dp(t, r));
  }
  notify(t) {
    Ot.batch(() => {
      this.listeners.forEach((r) => {
        r(t);
      });
    });
  }
  resumePausedMutations() {
    const t = this.getAll().filter((r) => r.state.isPaused);
    return Ot.batch(
      () => Promise.all(
        t.map((r) => r.continue().catch(En))
      )
    );
  }
}, br = new WeakMap(), kn = new WeakMap(), Qu = new WeakMap(), hh);
function bs(e) {
  var t;
  return (t = e.options.scope) == null ? void 0 : t.id;
}
function gp(e) {
  return {
    onFetch: (t, r) => {
      var h, g, v, b, P;
      const u = t.options, o = (v = (g = (h = t.fetchOptions) == null ? void 0 : h.meta) == null ? void 0 : g.fetchMore) == null ? void 0 : v.direction, a = ((b = t.state.data) == null ? void 0 : b.pages) || [], l = ((P = t.state.data) == null ? void 0 : P.pageParams) || [];
      let c = { pages: [], pageParams: [] }, f = 0;
      const p = async () => {
        let A = !1;
        const E = (L) => {
          Object.defineProperty(L, "signal", {
            enumerable: !0,
            get: () => (t.signal.aborted ? A = !0 : t.signal.addEventListener("abort", () => {
              A = !0;
            }), t.signal)
          });
        }, F = eg(t.options, t.fetchOptions), k = async (L, D, H) => {
          if (A)
            return Promise.reject();
          if (D == null && L.pages.length)
            return Promise.resolve(L);
          const G = {
            queryKey: t.queryKey,
            pageParam: D,
            direction: H ? "backward" : "forward",
            meta: t.options.meta
          };
          E(G);
          const z = await F(
            G
          ), { maxPages: N } = t.options, V = H ? BA : TA;
          return {
            pages: V(L.pages, z, N),
            pageParams: V(L.pageParams, D, N)
          };
        };
        if (o && a.length) {
          const L = o === "backward", D = L ? HA : mp, H = {
            pages: a,
            pageParams: l
          }, G = D(u, H);
          c = await k(H, G, L);
        } else {
          const L = e ?? a.length;
          do {
            const D = f === 0 ? l[0] ?? u.initialPageParam : mp(u, c);
            if (f > 0 && D == null)
              break;
            c = await k(c, D), f++;
          } while (f < L);
        }
        return c;
      };
      t.options.persister ? t.fetchFn = () => {
        var A, E;
        return (E = (A = t.options).persister) == null ? void 0 : E.call(
          A,
          p,
          {
            queryKey: t.queryKey,
            meta: t.options.meta,
            signal: t.signal
          },
          r
        );
      } : t.fetchFn = p;
    }
  };
}
function mp(e, { pages: t, pageParams: r }) {
  const u = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(
    t[u],
    t,
    r[u],
    r
  ) : void 0;
}
function HA(e, { pages: t, pageParams: r }) {
  var u;
  return t.length > 0 ? (u = e.getPreviousPageParam) == null ? void 0 : u.call(e, t[0], t, r[0], r) : void 0;
}
var pt, kr, Dr, Qi, qi, Mr, $i, Ki, gh, zA = (gh = class {
  constructor(e = {}) {
    Ce(this, pt);
    Ce(this, kr);
    Ce(this, Dr);
    Ce(this, Qi);
    Ce(this, qi);
    Ce(this, Mr);
    Ce(this, $i);
    Ce(this, Ki);
    se(this, pt, e.queryCache || new NA()), se(this, kr, e.mutationCache || new XA()), se(this, Dr, e.defaultOptions || {}), se(this, Qi, /* @__PURE__ */ new Map()), se(this, qi, /* @__PURE__ */ new Map()), se(this, Mr, 0);
  }
  mount() {
    ps(this, Mr)._++, O(this, Mr) === 1 && (se(this, $i, Sc.subscribe(async (e) => {
      e && (await this.resumePausedMutations(), O(this, pt).onFocus());
    })), se(this, Ki, Bs.subscribe(async (e) => {
      e && (await this.resumePausedMutations(), O(this, pt).onOnline());
    })));
  }
  unmount() {
    var e, t;
    ps(this, Mr)._--, O(this, Mr) === 0 && ((e = O(this, $i)) == null || e.call(this), se(this, $i, void 0), (t = O(this, Ki)) == null || t.call(this), se(this, Ki, void 0));
  }
  isFetching(e) {
    return O(this, pt).findAll({ ...e, fetchStatus: "fetching" }).length;
  }
  isMutating(e) {
    return O(this, kr).findAll({ ...e, status: "pending" }).length;
  }
  getQueryData(e) {
    var r;
    const t = this.defaultQueryOptions({ queryKey: e });
    return (r = O(this, pt).get(t.queryHash)) == null ? void 0 : r.state.data;
  }
  ensureQueryData(e) {
    const t = this.defaultQueryOptions(e), r = O(this, pt).build(this, t), u = r.state.data;
    return u === void 0 ? this.fetchQuery(e) : (e.revalidateIfStale && r.isStaleByTime(Xi(t.staleTime, r)) && this.prefetchQuery(t), Promise.resolve(u));
  }
  getQueriesData(e) {
    return O(this, pt).findAll(e).map(({ queryKey: t, state: r }) => {
      const u = r.data;
      return [t, u];
    });
  }
  setQueryData(e, t, r) {
    const u = this.defaultQueryOptions({ queryKey: e }), o = O(this, pt).get(
      u.queryHash
    ), a = o == null ? void 0 : o.state.data, l = PA(t, a);
    if (l !== void 0)
      return O(this, pt).build(this, u).setData(l, { ...r, manual: !0 });
  }
  setQueriesData(e, t, r) {
    return Ot.batch(
      () => O(this, pt).findAll(e).map(({ queryKey: u }) => [
        u,
        this.setQueryData(u, t, r)
      ])
    );
  }
  getQueryState(e) {
    var r;
    const t = this.defaultQueryOptions({ queryKey: e });
    return (r = O(this, pt).get(
      t.queryHash
    )) == null ? void 0 : r.state;
  }
  removeQueries(e) {
    const t = O(this, pt);
    Ot.batch(() => {
      t.findAll(e).forEach((r) => {
        t.remove(r);
      });
    });
  }
  resetQueries(e, t) {
    const r = O(this, pt), u = {
      type: "active",
      ...e
    };
    return Ot.batch(() => (r.findAll(e).forEach((o) => {
      o.reset();
    }), this.refetchQueries(u, t)));
  }
  cancelQueries(e, t = {}) {
    const r = { revert: !0, ...t }, u = Ot.batch(
      () => O(this, pt).findAll(e).map((o) => o.cancel(r))
    );
    return Promise.all(u).then(En).catch(En);
  }
  invalidateQueries(e, t = {}) {
    return Ot.batch(() => {
      if (O(this, pt).findAll(e).forEach((u) => {
        u.invalidate();
      }), (e == null ? void 0 : e.refetchType) === "none")
        return Promise.resolve();
      const r = {
        ...e,
        type: (e == null ? void 0 : e.refetchType) ?? (e == null ? void 0 : e.type) ?? "active"
      };
      return this.refetchQueries(r, t);
    });
  }
  refetchQueries(e, t = {}) {
    const r = {
      ...t,
      cancelRefetch: t.cancelRefetch ?? !0
    }, u = Ot.batch(
      () => O(this, pt).findAll(e).filter((o) => !o.isDisabled()).map((o) => {
        let a = o.fetch(void 0, r);
        return r.throwOnError || (a = a.catch(En)), o.state.fetchStatus === "paused" ? Promise.resolve() : a;
      })
    );
    return Promise.all(u).then(En);
  }
  fetchQuery(e) {
    const t = this.defaultQueryOptions(e);
    t.retry === void 0 && (t.retry = !1);
    const r = O(this, pt).build(this, t);
    return r.isStaleByTime(
      Xi(t.staleTime, r)
    ) ? r.fetch(t) : Promise.resolve(r.state.data);
  }
  prefetchQuery(e) {
    return this.fetchQuery(e).then(En).catch(En);
  }
  fetchInfiniteQuery(e) {
    return e.behavior = gp(e.pages), this.fetchQuery(e);
  }
  prefetchInfiniteQuery(e) {
    return this.fetchInfiniteQuery(e).then(En).catch(En);
  }
  ensureInfiniteQueryData(e) {
    return e.behavior = gp(e.pages), this.ensureQueryData(e);
  }
  resumePausedMutations() {
    return Bs.isOnline() ? O(this, kr).resumePausedMutations() : Promise.resolve();
  }
  getQueryCache() {
    return O(this, pt);
  }
  getMutationCache() {
    return O(this, kr);
  }
  getDefaultOptions() {
    return O(this, Dr);
  }
  setDefaultOptions(e) {
    se(this, Dr, e);
  }
  setQueryDefaults(e, t) {
    O(this, Qi).set(Yu(e), {
      queryKey: e,
      defaultOptions: t
    });
  }
  getQueryDefaults(e) {
    const t = [...O(this, Qi).values()], r = {};
    return t.forEach((u) => {
      Ju(e, u.queryKey) && Object.assign(r, u.defaultOptions);
    }), r;
  }
  setMutationDefaults(e, t) {
    O(this, qi).set(Yu(e), {
      mutationKey: e,
      defaultOptions: t
    });
  }
  getMutationDefaults(e) {
    const t = [...O(this, qi).values()];
    let r = {};
    return t.forEach((u) => {
      Ju(e, u.mutationKey) && (r = { ...r, ...u.defaultOptions });
    }), r;
  }
  defaultQueryOptions(e) {
    if (e._defaulted)
      return e;
    const t = {
      ...O(this, Dr).queries,
      ...this.getQueryDefaults(e.queryKey),
      ...e,
      _defaulted: !0
    };
    return t.queryHash || (t.queryHash = wc(
      t.queryKey,
      t
    )), t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"), t.throwOnError === void 0 && (t.throwOnError = !!t.suspense), !t.networkMode && t.persister && (t.networkMode = "offlineFirst"), t.queryFn === Ts && (t.enabled = !1), t;
  }
  defaultMutationOptions(e) {
    return e != null && e._defaulted ? e : {
      ...O(this, Dr).mutations,
      ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
      ...e,
      _defaulted: !0
    };
  }
  clear() {
    O(this, pt).clear(), O(this, kr).clear();
  }
}, pt = new WeakMap(), kr = new WeakMap(), Dr = new WeakMap(), Qi = new WeakMap(), qi = new WeakMap(), Mr = new WeakMap(), $i = new WeakMap(), Ki = new WeakMap(), gh), tn, Ze, qu, Zt, li, eu, Nr, jn, $u, tu, nu, ci, fi, Vr, ru, qe, Vu, Kl, ec, tc, nc, rc, ic, uc, og, mh, ZA = (mh = class extends to {
  constructor(t, r) {
    super();
    Ce(this, qe);
    Ce(this, tn);
    Ce(this, Ze);
    Ce(this, qu);
    Ce(this, Zt);
    Ce(this, li);
    Ce(this, eu);
    Ce(this, Nr);
    Ce(this, jn);
    Ce(this, $u);
    Ce(this, tu);
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    Ce(this, nu);
    Ce(this, ci);
    Ce(this, fi);
    Ce(this, Vr);
    Ce(this, ru, /* @__PURE__ */ new Set());
    this.options = r, se(this, tn, t), se(this, jn, null), se(this, Nr, $l()), this.options.experimental_prefetchInRender || O(this, Nr).reject(
      new Error("experimental_prefetchInRender feature flag is not enabled")
    ), this.bindMethods(), this.setOptions(r);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (O(this, Ze).addObserver(this), bp(O(this, Ze), this.options) ? ze(this, qe, Vu).call(this) : this.updateResult(), ze(this, qe, nc).call(this));
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return oc(
      O(this, Ze),
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return oc(
      O(this, Ze),
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), ze(this, qe, rc).call(this), ze(this, qe, ic).call(this), O(this, Ze).removeObserver(this);
  }
  setOptions(t, r) {
    const u = this.options, o = O(this, Ze);
    if (this.options = O(this, tn).defaultQueryOptions(t), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof Dn(this.options.enabled, O(this, Ze)) != "boolean")
      throw new Error(
        "Expected enabled to be a boolean or a callback that returns a boolean"
      );
    ze(this, qe, uc).call(this), O(this, Ze).setOptions(this.options), u._defaulted && !jl(this.options, u) && O(this, tn).getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: O(this, Ze),
      observer: this
    });
    const a = this.hasListeners();
    a && yp(
      O(this, Ze),
      o,
      this.options,
      u
    ) && ze(this, qe, Vu).call(this), this.updateResult(r), a && (O(this, Ze) !== o || Dn(this.options.enabled, O(this, Ze)) !== Dn(u.enabled, O(this, Ze)) || Xi(this.options.staleTime, O(this, Ze)) !== Xi(u.staleTime, O(this, Ze))) && ze(this, qe, Kl).call(this);
    const l = ze(this, qe, ec).call(this);
    a && (O(this, Ze) !== o || Dn(this.options.enabled, O(this, Ze)) !== Dn(u.enabled, O(this, Ze)) || l !== O(this, Vr)) && ze(this, qe, tc).call(this, l);
  }
  getOptimisticResult(t) {
    const r = O(this, tn).getQueryCache().build(O(this, tn), t), u = this.createResult(r, t);
    return JA(this, u) && (se(this, Zt, u), se(this, eu, this.options), se(this, li, O(this, Ze).state)), u;
  }
  getCurrentResult() {
    return O(this, Zt);
  }
  trackResult(t, r) {
    const u = {};
    return Object.keys(t).forEach((o) => {
      Object.defineProperty(u, o, {
        configurable: !1,
        enumerable: !0,
        get: () => (this.trackProp(o), r == null || r(o), t[o])
      });
    }), u;
  }
  trackProp(t) {
    O(this, ru).add(t);
  }
  getCurrentQuery() {
    return O(this, Ze);
  }
  refetch({ ...t } = {}) {
    return this.fetch({
      ...t
    });
  }
  fetchOptimistic(t) {
    const r = O(this, tn).defaultQueryOptions(t), u = O(this, tn).getQueryCache().build(O(this, tn), r);
    return u.fetch().then(() => this.createResult(u, r));
  }
  fetch(t) {
    return ze(this, qe, Vu).call(this, {
      ...t,
      cancelRefetch: t.cancelRefetch ?? !0
    }).then(() => (this.updateResult(), O(this, Zt)));
  }
  createResult(t, r) {
    var N;
    const u = O(this, Ze), o = this.options, a = O(this, Zt), l = O(this, li), c = O(this, eu), p = t !== u ? t.state : O(this, qu), { state: h } = t;
    let g = { ...h }, v = !1, b;
    if (r._optimisticResults) {
      const V = this.hasListeners(), ne = !V && bp(t, r), Q = V && yp(t, u, r, o);
      (ne || Q) && (g = {
        ...g,
        ...ug(h.data, t.options)
      }), r._optimisticResults === "isRestoring" && (g.fetchStatus = "idle");
    }
    let { error: P, errorUpdatedAt: A, status: E } = g;
    if (r.select && g.data !== void 0)
      if (a && g.data === (l == null ? void 0 : l.data) && r.select === O(this, $u))
        b = O(this, tu);
      else
        try {
          se(this, $u, r.select), b = r.select(g.data), b = ql(a == null ? void 0 : a.data, b, r), se(this, tu, b), se(this, jn, null);
        } catch (V) {
          se(this, jn, V);
        }
    else
      b = g.data;
    if (r.placeholderData !== void 0 && b === void 0 && E === "pending") {
      let V;
      if (a != null && a.isPlaceholderData && r.placeholderData === (c == null ? void 0 : c.placeholderData))
        V = a.data;
      else if (V = typeof r.placeholderData == "function" ? r.placeholderData(
        (N = O(this, nu)) == null ? void 0 : N.state.data,
        O(this, nu)
      ) : r.placeholderData, r.select && V !== void 0)
        try {
          V = r.select(V), se(this, jn, null);
        } catch (ne) {
          se(this, jn, ne);
        }
      V !== void 0 && (E = "success", b = ql(
        a == null ? void 0 : a.data,
        V,
        r
      ), v = !0);
    }
    O(this, jn) && (P = O(this, jn), b = O(this, tu), A = Date.now(), E = "error");
    const F = g.fetchStatus === "fetching", k = E === "pending", L = E === "error", D = k && F, H = b !== void 0, z = {
      status: E,
      fetchStatus: g.fetchStatus,
      isPending: k,
      isSuccess: E === "success",
      isError: L,
      isInitialLoading: D,
      isLoading: D,
      data: b,
      dataUpdatedAt: g.dataUpdatedAt,
      error: P,
      errorUpdatedAt: A,
      failureCount: g.fetchFailureCount,
      failureReason: g.fetchFailureReason,
      errorUpdateCount: g.errorUpdateCount,
      isFetched: g.dataUpdateCount > 0 || g.errorUpdateCount > 0,
      isFetchedAfterMount: g.dataUpdateCount > p.dataUpdateCount || g.errorUpdateCount > p.errorUpdateCount,
      isFetching: F,
      isRefetching: F && !k,
      isLoadingError: L && !H,
      isPaused: g.fetchStatus === "paused",
      isPlaceholderData: v,
      isRefetchError: L && H,
      isStale: Ec(t, r),
      refetch: this.refetch,
      promise: O(this, Nr)
    };
    if (this.options.experimental_prefetchInRender) {
      const V = (j) => {
        z.status === "error" ? j.reject(z.error) : z.data !== void 0 && j.resolve(z.data);
      }, ne = () => {
        const j = se(this, Nr, z.promise = $l());
        V(j);
      }, Q = O(this, Nr);
      switch (Q.status) {
        case "pending":
          t.queryHash === u.queryHash && V(Q);
          break;
        case "fulfilled":
          (z.status === "error" || z.data !== Q.value) && ne();
          break;
        case "rejected":
          (z.status !== "error" || z.error !== Q.reason) && ne();
          break;
      }
    }
    return z;
  }
  updateResult(t) {
    const r = O(this, Zt), u = this.createResult(O(this, Ze), this.options);
    if (se(this, li, O(this, Ze).state), se(this, eu, this.options), O(this, li).data !== void 0 && se(this, nu, O(this, Ze)), jl(u, r))
      return;
    se(this, Zt, u);
    const o = {}, a = () => {
      if (!r)
        return !0;
      const { notifyOnChangeProps: l } = this.options, c = typeof l == "function" ? l() : l;
      if (c === "all" || !c && !O(this, ru).size)
        return !0;
      const f = new Set(
        c ?? O(this, ru)
      );
      return this.options.throwOnError && f.add("error"), Object.keys(O(this, Zt)).some((p) => {
        const h = p;
        return O(this, Zt)[h] !== r[h] && f.has(h);
      });
    };
    (t == null ? void 0 : t.listeners) !== !1 && a() && (o.listeners = !0), ze(this, qe, og).call(this, { ...o, ...t });
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && ze(this, qe, nc).call(this);
  }
}, tn = new WeakMap(), Ze = new WeakMap(), qu = new WeakMap(), Zt = new WeakMap(), li = new WeakMap(), eu = new WeakMap(), Nr = new WeakMap(), jn = new WeakMap(), $u = new WeakMap(), tu = new WeakMap(), nu = new WeakMap(), ci = new WeakMap(), fi = new WeakMap(), Vr = new WeakMap(), ru = new WeakMap(), qe = new WeakSet(), Vu = function(t) {
  ze(this, qe, uc).call(this);
  let r = O(this, Ze).fetch(
    this.options,
    t
  );
  return t != null && t.throwOnError || (r = r.catch(En)), r;
}, Kl = function() {
  ze(this, qe, rc).call(this);
  const t = Xi(
    this.options.staleTime,
    O(this, Ze)
  );
  if (pi || O(this, Zt).isStale || !Jl(t))
    return;
  const u = Kh(O(this, Zt).dataUpdatedAt, t) + 1;
  se(this, ci, setTimeout(() => {
    O(this, Zt).isStale || this.updateResult();
  }, u));
}, ec = function() {
  return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(O(this, Ze)) : this.options.refetchInterval) ?? !1;
}, tc = function(t) {
  ze(this, qe, ic).call(this), se(this, Vr, t), !(pi || Dn(this.options.enabled, O(this, Ze)) === !1 || !Jl(O(this, Vr)) || O(this, Vr) === 0) && se(this, fi, setInterval(() => {
    (this.options.refetchIntervalInBackground || Sc.isFocused()) && ze(this, qe, Vu).call(this);
  }, O(this, Vr)));
}, nc = function() {
  ze(this, qe, Kl).call(this), ze(this, qe, tc).call(this, ze(this, qe, ec).call(this));
}, rc = function() {
  O(this, ci) && (clearTimeout(O(this, ci)), se(this, ci, void 0));
}, ic = function() {
  O(this, fi) && (clearInterval(O(this, fi)), se(this, fi, void 0));
}, uc = function() {
  const t = O(this, tn).getQueryCache().build(O(this, tn), this.options);
  if (t === O(this, Ze))
    return;
  const r = O(this, Ze);
  se(this, Ze, t), se(this, qu, t.state), this.hasListeners() && (r == null || r.removeObserver(this), t.addObserver(this));
}, og = function(t) {
  Ot.batch(() => {
    t.listeners && this.listeners.forEach((r) => {
      r(O(this, Zt));
    }), O(this, tn).getQueryCache().notify({
      query: O(this, Ze),
      type: "observerResultsUpdated"
    });
  });
}, mh);
function YA(e, t) {
  return Dn(t.enabled, e) !== !1 && e.state.data === void 0 && !(e.state.status === "error" && t.retryOnMount === !1);
}
function bp(e, t) {
  return YA(e, t) || e.state.data !== void 0 && oc(e, t, t.refetchOnMount);
}
function oc(e, t, r) {
  if (Dn(t.enabled, e) !== !1) {
    const u = typeof r == "function" ? r(e) : r;
    return u === "always" || u !== !1 && Ec(e, t);
  }
  return !1;
}
function yp(e, t, r, u) {
  return (e !== t || Dn(u.enabled, e) === !1) && (!r.suspense || e.state.status !== "error") && Ec(e, r);
}
function Ec(e, t) {
  return Dn(t.enabled, e) !== !1 && e.isStaleByTime(Xi(t.staleTime, e));
}
function JA(e, t) {
  return !jl(e.getCurrentResult(), t);
}
var sg = Pe.createContext(
  void 0
), UA = (e) => {
  const t = Pe.useContext(sg);
  if (!t)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return t;
}, jA = ({
  client: e,
  children: t
}) => (Pe.useEffect(() => (e.mount(), () => {
  e.unmount();
}), [e]), /* @__PURE__ */ le(sg.Provider, { value: e, children: t })), ag = Pe.createContext(!1), QA = () => Pe.useContext(ag);
ag.Provider;
function qA() {
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
var $A = Pe.createContext(qA()), KA = () => Pe.useContext($A);
function ew(e, t) {
  return typeof e == "function" ? e(...t) : !!e;
}
function vp() {
}
var tw = (e, t) => {
  (e.suspense || e.throwOnError || e.experimental_prefetchInRender) && (t.isReset() || (e.retryOnMount = !1));
}, nw = (e) => {
  Pe.useEffect(() => {
    e.clearReset();
  }, [e]);
}, rw = ({
  result: e,
  errorResetBoundary: t,
  throwOnError: r,
  query: u
}) => e.isError && !t.isReset() && !e.isFetching && u && ew(r, [e.error, u]), iw = (e) => {
  const t = e.staleTime;
  e.suspense && (e.staleTime = typeof t == "function" ? (...r) => Math.max(t(...r), 1e3) : Math.max(t ?? 1e3, 1e3), typeof e.gcTime == "number" && (e.gcTime = Math.max(e.gcTime, 1e3)));
}, uw = (e, t) => e.isLoading && e.isFetching && !t, ow = (e, t) => (e == null ? void 0 : e.suspense) && t.isPending, Ip = (e, t, r) => t.fetchOptimistic(e).catch(() => {
  r.clearReset();
});
function sw(e, t, r) {
  var g, v, b, P, A;
  if (process.env.NODE_ENV !== "production" && (typeof e != "object" || Array.isArray(e)))
    throw new Error(
      'Bad argument type. Starting with v5, only the "Object" form is allowed when calling query related functions. Please use the error stack to find the culprit call. More info here: https://tanstack.com/query/latest/docs/react/guides/migrating-to-v5#supports-a-single-signature-one-object'
    );
  const u = UA(), o = QA(), a = KA(), l = u.defaultQueryOptions(e);
  (v = (g = u.getDefaultOptions().queries) == null ? void 0 : g._experimental_beforeQuery) == null || v.call(
    g,
    l
  ), l._optimisticResults = o ? "isRestoring" : "optimistic", iw(l), tw(l, a), nw(a);
  const c = !u.getQueryCache().get(l.queryHash), [f] = Pe.useState(
    () => new t(
      u,
      l
    )
  ), p = f.getOptimisticResult(l), h = !o && e.subscribed !== !1;
  if (Pe.useSyncExternalStore(
    Pe.useCallback(
      (E) => {
        const F = h ? f.subscribe(Ot.batchCalls(E)) : vp;
        return f.updateResult(), F;
      },
      [f, h]
    ),
    () => f.getCurrentResult(),
    () => f.getCurrentResult()
  ), Pe.useEffect(() => {
    f.setOptions(l, { listeners: !1 });
  }, [l, f]), ow(l, p))
    throw Ip(l, f, a);
  if (rw({
    result: p,
    errorResetBoundary: a,
    throwOnError: l.throwOnError,
    query: u.getQueryCache().get(l.queryHash)
  }))
    throw p.error;
  if ((P = (b = u.getDefaultOptions().queries) == null ? void 0 : b._experimental_afterQuery) == null || P.call(
    b,
    l,
    p
  ), l.experimental_prefetchInRender && !pi && uw(p, o)) {
    const E = c ? (
      // Fetch immediately on render in order to ensure `.promise` is resolved even if the component is unmounted
      Ip(l, f, a)
    ) : (
      // subscribe to the "cache promise" so that we can finalize the currentThenable once data comes in
      (A = u.getQueryCache().get(l.queryHash)) == null ? void 0 : A.promise
    );
    E == null || E.catch(vp).finally(() => {
      f.updateResult();
    });
  }
  return l.notifyOnChangeProps ? p : f.trackResult(p);
}
function hi(e, t) {
  return sw(e, ZA);
}
const lg = Ku(
  void 0
), Xr = () => {
  const e = iu(lg);
  if (!e)
    throw new Error("Must be used inside FrontendClientProvider");
  return e;
}, IR = ({
  children: e,
  client: t
}) => {
  const r = new zA({
    defaultOptions: {
      queries: {
        staleTime: 36e5,
        refetchOnWindowFocus: !1
      }
    }
  });
  return /* @__PURE__ */ le(jA, { client: r, children: /* @__PURE__ */ le(lg.Provider, { value: t, children: e }) });
}, aw = (e, t) => {
  var o;
  const r = Xr(), u = hi({
    ...t == null ? void 0 : t.useQueryOpts,
    queryKey: [
      "accounts",
      e
    ],
    queryFn: () => r.getAccounts(e)
  });
  return {
    ...u,
    accounts: ((o = u.data) == null ? void 0 : o.data) || []
  };
}, cg = Ku(void 0), uu = () => {
  const e = iu(cg);
  if (!e)
    throw new Error("Must be used inside FormFieldContext.Provider");
  return e;
}, lw = (e) => /* @__PURE__ */ le(eo.Option, { ...e, children: e.data.name });
function cw({ app: e }) {
  const t = Xr(), r = uu(), {
    id: u,
    prop: o,
    value: a,
    onChange: l
  } = r, {
    getProps: c,
    select: f,
    theme: p
  } = kt(), h = {
    color: p.colors.neutral60,
    gridArea: "control"
  }, g = {
    backgroundColor: p.colors.primary,
    borderRadius: p.borderRadius,
    border: "solid 1px",
    borderColor: p.colors.primary25,
    color: p.colors.primary25,
    padding: "0.25rem 0.5rem",
    gridArea: "control"
  }, v = {
    components: {
      Option: lw
    },
    styles: {
      control: (D) => ({
        ...D,
        gridArea: "control",
        boxShadow: p.boxShadow.input
      })
    }
  }, b = f.getProps("controlAppSelect", v), P = void 0, {
    isLoading: A,
    // TODO error
    accounts: E,
    refetch: F
  } = aw(
    {
      app: e.name_slug,
      oauth_app_id: P
    },
    {
      useQueryOpts: {
        enabled: !!e,
        suspense: !!e
      }
    }
  ), k = async () => {
    t.connectAccount({
      app: o.app,
      oauthAppId: P,
      onSuccess: async (D) => {
        await F(), l({
          authProvisionId: D.id
        });
      },
      onError: () => {
      }
    });
  }, L = Qn(() => {
    let D = a;
    if (D != null) {
      for (const H of E)
        if (D.authProvisionId === H.id) {
          D = H;
          break;
        }
    }
    return D;
  }, [
    E,
    a
  ]);
  return /* @__PURE__ */ le("div", { ...c("controlApp", h, {
    app: e,
    ...r
  }), children: A ? `Loading ${e.name} accounts...` : E.length ? /* @__PURE__ */ le(
    Ms,
    {
      instanceId: u,
      value: L,
      options: [
        ...E,
        {
          id: "_new",
          name: `Connect new ${e.name} account...`
        }
      ],
      ...b,
      required: !0,
      placeholder: `Select ${e.name} account...`,
      isLoading: A,
      isClearable: !0,
      isSearchable: !0,
      getOptionLabel: (D) => D.name,
      getOptionValue: (D) => D.id,
      onChange: (D) => {
        D ? D.id === "_new" ? k() : l({
          authProvisionId: D.id
        }) : l(void 0);
      }
    }
  ) : /* @__PURE__ */ Mn("button", { type: "button", ...c("connectButton", g, {
    app: e,
    ...r
  }), onClick: () => k(), children: [
    "Connect ",
    e.name
  ] }) });
}
function fw(e) {
  const t = uu(), {
    id: r,
    value: u,
    onChange: o,
    prop: a
  } = t, { getProps: l } = kt(), c = {
    width: "16px",
    height: "16px",
    gridArea: "control",
    margin: "0 0.5rem 0 0"
  }, f = {
    id: r,
    checked: u ?? !1,
    onChange: (p) => o(p),
    required: !a.optional,
    baseStyles: c,
    formFieldContext: t
  };
  if (e.component) {
    const p = e.component;
    return /* @__PURE__ */ le(
      p,
      {
        ...f,
        ...l("controlBoolean", c, t)
      }
    );
  }
  return /* @__PURE__ */ le("input", { id: r, type: "checkbox", ...l("controlBoolean", c, t), checked: u ?? !1, onChange: (p) => o(p.target.checked) });
}
function dw(e) {
  const t = uu(), { id: r, onChange: u, prop: o, value: a } = t, { getProps: l, theme: c } = kt(), f = {
    color: c.colors.neutral60,
    display: "block",
    border: "1px solid",
    borderColor: c.colors.neutral20,
    padding: 6,
    width: "100%",
    minWidth: "400px",
    borderRadius: c.borderRadius,
    gridArea: "control",
    boxShadow: c.boxShadow.input
  };
  let p = "off", h = "text", g = (b) => b;
  switch (o.type) {
    case "string":
      break;
    case "integer":
      h = "number", g = (b) => b ? parseInt(b) : void 0;
      break;
    default:
      throw new Error("unexpected prop.type for ControlInput: " + o.type);
  }
  "secret" in o && o.secret && (h = "password", p = "new-password");
  const v = {
    id: r,
    name: o.name,
    value: a ?? "",
    onChange: (b) => u(g(b.target.value)),
    type: h,
    min: "min" in o ? o.min : void 0,
    max: "max" in o ? o.max : void 0,
    required: !o.optional,
    autoComplete: p,
    placeholder: "test",
    baseStyles: f,
    formFieldContext: t
  };
  if (e.component) {
    const b = e.component;
    return /* @__PURE__ */ le(
      b,
      {
        ...v,
        ...l("controlInput", f, t)
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
    /* @__PURE__ */ le(
      "input",
      {
        ...v,
        ...l("controlInput", f, t),
        "data-lpignore": "true",
        "data-1p-ignore": "true"
      }
    )
  );
}
var pw = ["allowCreateWhileLoading", "createOptionPosition", "formatCreateLabel", "isValidNewOption", "getNewOptionData", "onCreateOption", "options", "onChange"], Cp = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", r = arguments.length > 1 ? arguments[1] : void 0, u = arguments.length > 2 ? arguments[2] : void 0, o = String(t).toLowerCase(), a = String(u.getOptionValue(r)).toLowerCase(), l = String(u.getOptionLabel(r)).toLowerCase();
  return a === o || l === o;
}, Sl = {
  formatCreateLabel: function(t) {
    return 'Create "'.concat(t, '"');
  },
  isValidNewOption: function(t, r, u, o) {
    return !(!t || r.some(function(a) {
      return Cp(t, a, o);
    }) || u.some(function(a) {
      return Cp(t, a, o);
    }));
  },
  getNewOptionData: function(t, r) {
    return {
      label: r,
      value: t,
      __isNew__: !0
    };
  }
};
function hw(e) {
  var t = e.allowCreateWhileLoading, r = t === void 0 ? !1 : t, u = e.createOptionPosition, o = u === void 0 ? "last" : u, a = e.formatCreateLabel, l = a === void 0 ? Sl.formatCreateLabel : a, c = e.isValidNewOption, f = c === void 0 ? Sl.isValidNewOption : c, p = e.getNewOptionData, h = p === void 0 ? Sl.getNewOptionData : p, g = e.onCreateOption, v = e.options, b = v === void 0 ? [] : v, P = e.onChange, A = er(e, pw), E = A.getOptionValue, F = E === void 0 ? Zh : E, k = A.getOptionLabel, L = k === void 0 ? zh : k, D = A.inputValue, H = A.isLoading, G = A.isMulti, z = A.value, N = A.name, V = Qn(function() {
    return f(D, Rs(z), b, {
      getOptionValue: F,
      getOptionLabel: L
    }) ? h(D, l(D)) : void 0;
  }, [l, h, L, F, D, f, b, z]), ne = Qn(function() {
    return (r || !H) && V ? o === "first" ? [V].concat(Wi(b)) : [].concat(Wi(b), [V]) : b;
  }, [r, o, H, V, b]), Q = Gt(function(j, te) {
    if (te.action !== "select-option")
      return P(j, te);
    var ee = Array.isArray(j) ? j : [j];
    if (ee[ee.length - 1] === V) {
      if (g) g(D);
      else {
        var K = h(D, D), pe = {
          action: "create-option",
          name: N,
          option: K
        };
        P(Nu(G, [].concat(Wi(Rs(z)), [K]), K), pe);
      }
      return;
    }
    P(j, te);
  }, [h, D, G, N, V, g, P, z]);
  return de(de({}, A), {}, {
    options: ne,
    onChange: Q
  });
}
var gw = /* @__PURE__ */ yh(function(e, t) {
  var r = xh(e), u = hw(r);
  return /* @__PURE__ */ Pe.createElement(xc, ye({
    ref: t
  }, u));
}), mw = gw;
const fg = (e) => {
  const { onChange: t } = e, {
    getProps: r,
    theme: u
  } = kt(), o = {
    backgroundColor: u.colors.primary,
    borderRadius: u.borderRadius,
    border: "solid 1px",
    borderColor: u.colors.primary25,
    color: u.colors.primary25,
    padding: "0.5rem",
    fontSize: "0.8125rem",
    fontWeight: "450",
    gridArea: "control",
    cursor: "pointer",
    width: "100%"
  };
  return /* @__PURE__ */ le("button", { onClick: t, type: "button", ...r("loadMoreButton", o, e), children: "Load More" });
};
function dg({
  isCreatable: e,
  options: t,
  selectProps: r,
  showLoadMoreButton: u,
  onLoadMore: o,
  component: a
}) {
  const l = uu(), {
    id: c,
    prop: f,
    value: p,
    onChange: h
  } = l, {
    select: g,
    theme: v
  } = kt(), [
    b,
    P
  ] = et(t), [
    A,
    E
  ] = et(p);
  qn(() => {
    P(t);
  }, [
    t
  ]), qn(() => {
    E(p);
  }, [
    p
  ]);
  const F = {
    styles: {
      container: (V) => ({
        ...V,
        gridArea: "control",
        boxShadow: v.boxShadow.input
      })
    }
  }, k = Qn(() => {
    let V = A;
    if (V != null)
      if (Array.isArray(V)) {
        if (typeof V[0] != "object") {
          const ne = [];
          for (const Q of V) {
            let j = {
              label: Q,
              value: Q
            };
            for (const te of b)
              if (te.value === Q) {
                j = te;
                break;
              }
            ne.push(j);
          }
          V = ne;
        }
      } else if (typeof V != "object")
        if ((b == null ? void 0 : b[0]) && typeof b[0] == "object") {
          for (const Q of b)
            if (Q.value === A) {
              V = Q;
              break;
            }
        } else
          V = {
            label: A,
            value: A
          };
      else V.__lv && (V = V.__lv);
    return V;
  }, [
    A,
    b
  ]), L = ({
    // eslint-disable-next-line react/prop-types
    children: V,
    ...ne
  }) => /* @__PURE__ */ Mn(eo.MenuList, { ...ne, children: [
    V,
    /* @__PURE__ */ le("div", { className: "pt-4", children: /* @__PURE__ */ le(fg, { onChange: () => o == null ? void 0 : o() }) })
  ] }), D = g.getProps("controlSelect", F);
  u && (D.components = {
    // eslint-disable-next-line react/prop-types
    ...D.components,
    MenuList: L
  });
  const H = (V) => {
    const ne = (ee) => typeof ee == "object" ? ee : {
      label: ee,
      value: ee
    }, Q = ne(V);
    let j = Q;
    const te = b ? [
      Q,
      ...b
    ] : [
      Q
    ];
    P(te), f.type.endsWith("[]") && (Array.isArray(A) ? j = [
      ...A.map(ne),
      Q
    ] : j = [
      Q
    ]), E(j), G(j);
  }, G = (V) => {
    if (V)
      if (Array.isArray(V))
        typeof V[0] == "object" && "value" in V[0] ? h({
          __lv: V
        }) : h(V);
      else if (typeof V == "object" && "value" in V)
        h({
          __lv: V
        });
      else
        throw new Error("unhandled option type");
    else
      h(void 0);
  };
  f.remoteOptions;
  const z = {
    inputId: c,
    instanceId: c,
    options: b,
    value: k,
    isMulti: f.type.endsWith("[]"),
    isClearable: !0,
    required: !f.optional,
    onCreateOption: H,
    onChange: G,
    baseStyles: F.styles,
    formFieldContext: l
  };
  return a ? /* @__PURE__ */ le(
    a,
    {
      ...z,
      ...g.getProps("controlSelect", F)
    }
  ) : /* @__PURE__ */ le(
    e ? mw : Ms,
    {
      inputId: c,
      instanceId: c,
      options: b,
      value: k,
      isMulti: f.type.endsWith("[]"),
      isClearable: !0,
      required: !f.optional,
      ...D,
      ...r,
      onCreateOption: H,
      onChange: G
    }
  );
}
function bw(e, t) {
  const r = {};
  return (e[e.length - 1] === "" ? [...e, ""] : e).join(
    (r.padRight ? " " : "") + "," + (r.padLeft === !1 ? "" : " ")
  ).trim();
}
const yw = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, vw = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, Iw = {};
function xp(e, t) {
  return (Iw.jsx ? vw : yw).test(e);
}
const Cw = /[ \t\n\f\r]/g;
function xw(e) {
  return typeof e == "object" ? e.type === "text" ? Ap(e.value) : !1 : Ap(e);
}
function Ap(e) {
  return e.replace(Cw, "") === "";
}
class no {
  /**
   * @constructor
   * @param {Properties} property
   * @param {Normal} normal
   * @param {string} [space]
   */
  constructor(t, r, u) {
    this.property = t, this.normal = r, u && (this.space = u);
  }
}
no.prototype.property = {};
no.prototype.normal = {};
no.prototype.space = null;
function pg(e, t) {
  const r = {}, u = {};
  let o = -1;
  for (; ++o < e.length; )
    Object.assign(r, e[o].property), Object.assign(u, e[o].normal);
  return new no(r, u, t);
}
function sc(e) {
  return e.toLowerCase();
}
class Rn {
  /**
   * @constructor
   * @param {string} property
   * @param {string} attribute
   */
  constructor(t, r) {
    this.property = t, this.attribute = r;
  }
}
Rn.prototype.space = null;
Rn.prototype.boolean = !1;
Rn.prototype.booleanish = !1;
Rn.prototype.overloadedBoolean = !1;
Rn.prototype.number = !1;
Rn.prototype.commaSeparated = !1;
Rn.prototype.spaceSeparated = !1;
Rn.prototype.commaOrSpaceSeparated = !1;
Rn.prototype.mustUseProperty = !1;
Rn.prototype.defined = !1;
let Aw = 0;
const Be = gi(), At = gi(), hg = gi(), q = gi(), ut = gi(), Hi = gi(), pn = gi();
function gi() {
  return 2 ** ++Aw;
}
const ac = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: Be,
  booleanish: At,
  commaOrSpaceSeparated: pn,
  commaSeparated: Hi,
  number: q,
  overloadedBoolean: hg,
  spaceSeparated: ut
}, Symbol.toStringTag, { value: "Module" })), El = Object.keys(ac);
class Fc extends Rn {
  /**
   * @constructor
   * @param {string} property
   * @param {string} attribute
   * @param {number|null} [mask]
   * @param {string} [space]
   */
  constructor(t, r, u, o) {
    let a = -1;
    if (super(t, r), wp(this, "space", o), typeof u == "number")
      for (; ++a < El.length; ) {
        const l = El[a];
        wp(this, El[a], (u & ac[l]) === ac[l]);
      }
  }
}
Fc.prototype.defined = !0;
function wp(e, t, r) {
  r && (e[t] = r);
}
const ww = {}.hasOwnProperty;
function ou(e) {
  const t = {}, r = {};
  let u;
  for (u in e.properties)
    if (ww.call(e.properties, u)) {
      const o = e.properties[u], a = new Fc(
        u,
        e.transform(e.attributes || {}, u),
        o,
        e.space
      );
      e.mustUseProperty && e.mustUseProperty.includes(u) && (a.mustUseProperty = !0), t[u] = a, r[sc(u)] = u, r[sc(a.attribute)] = u;
    }
  return new no(t, r, e.space);
}
const gg = ou({
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
}), mg = ou({
  space: "xml",
  transform(e, t) {
    return "xml:" + t.slice(3).toLowerCase();
  },
  properties: { xmlLang: null, xmlBase: null, xmlSpace: null }
});
function bg(e, t) {
  return t in e ? e[t] : t;
}
function yg(e, t) {
  return bg(e, t.toLowerCase());
}
const vg = ou({
  space: "xmlns",
  attributes: { xmlnsxlink: "xmlns:xlink" },
  transform: yg,
  properties: { xmlns: null, xmlnsXLink: null }
}), Ig = ou({
  transform(e, t) {
    return t === "role" ? t : "aria-" + t.slice(4).toLowerCase();
  },
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: At,
    ariaAutoComplete: null,
    ariaBusy: At,
    ariaChecked: At,
    ariaColCount: q,
    ariaColIndex: q,
    ariaColSpan: q,
    ariaControls: ut,
    ariaCurrent: null,
    ariaDescribedBy: ut,
    ariaDetails: null,
    ariaDisabled: At,
    ariaDropEffect: ut,
    ariaErrorMessage: null,
    ariaExpanded: At,
    ariaFlowTo: ut,
    ariaGrabbed: At,
    ariaHasPopup: null,
    ariaHidden: At,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: ut,
    ariaLevel: q,
    ariaLive: null,
    ariaModal: At,
    ariaMultiLine: At,
    ariaMultiSelectable: At,
    ariaOrientation: null,
    ariaOwns: ut,
    ariaPlaceholder: null,
    ariaPosInSet: q,
    ariaPressed: At,
    ariaReadOnly: At,
    ariaRelevant: null,
    ariaRequired: At,
    ariaRoleDescription: ut,
    ariaRowCount: q,
    ariaRowIndex: q,
    ariaRowSpan: q,
    ariaSelected: At,
    ariaSetSize: q,
    ariaSort: null,
    ariaValueMax: q,
    ariaValueMin: q,
    ariaValueNow: q,
    ariaValueText: null,
    role: null
  }
}), Sw = ou({
  space: "html",
  attributes: {
    acceptcharset: "accept-charset",
    classname: "class",
    htmlfor: "for",
    httpequiv: "http-equiv"
  },
  transform: yg,
  mustUseProperty: ["checked", "multiple", "muted", "selected"],
  properties: {
    // Standard Properties.
    abbr: null,
    accept: Hi,
    acceptCharset: ut,
    accessKey: ut,
    action: null,
    allow: null,
    allowFullScreen: Be,
    allowPaymentRequest: Be,
    allowUserMedia: Be,
    alt: null,
    as: null,
    async: Be,
    autoCapitalize: null,
    autoComplete: ut,
    autoFocus: Be,
    autoPlay: Be,
    blocking: ut,
    capture: null,
    charSet: null,
    checked: Be,
    cite: null,
    className: ut,
    cols: q,
    colSpan: null,
    content: null,
    contentEditable: At,
    controls: Be,
    controlsList: ut,
    coords: q | Hi,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: Be,
    defer: Be,
    dir: null,
    dirName: null,
    disabled: Be,
    download: hg,
    draggable: At,
    encType: null,
    enterKeyHint: null,
    fetchPriority: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: Be,
    formTarget: null,
    headers: ut,
    height: q,
    hidden: Be,
    high: q,
    href: null,
    hrefLang: null,
    htmlFor: ut,
    httpEquiv: ut,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: Be,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: Be,
    itemId: null,
    itemProp: ut,
    itemRef: ut,
    itemScope: Be,
    itemType: ut,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: Be,
    low: q,
    manifest: null,
    max: null,
    maxLength: q,
    media: null,
    method: null,
    min: null,
    minLength: q,
    multiple: Be,
    muted: Be,
    name: null,
    nonce: null,
    noModule: Be,
    noValidate: Be,
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
    open: Be,
    optimum: q,
    pattern: null,
    ping: ut,
    placeholder: null,
    playsInline: Be,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: Be,
    referrerPolicy: null,
    rel: ut,
    required: Be,
    reversed: Be,
    rows: q,
    rowSpan: q,
    sandbox: ut,
    scope: null,
    scoped: Be,
    seamless: Be,
    selected: Be,
    shadowRootClonable: Be,
    shadowRootDelegatesFocus: Be,
    shadowRootMode: null,
    shape: null,
    size: q,
    sizes: null,
    slot: null,
    span: q,
    spellCheck: At,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: q,
    step: null,
    style: null,
    tabIndex: q,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: Be,
    useMap: null,
    value: At,
    width: q,
    wrap: null,
    writingSuggestions: null,
    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null,
    // Several. Use CSS `text-align` instead,
    aLink: null,
    // `<body>`. Use CSS `a:active {color}` instead
    archive: ut,
    // `<object>`. List of URIs to archives
    axis: null,
    // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null,
    // `<body>`. Use CSS `background-image` instead
    bgColor: null,
    // `<body>` and table elements. Use CSS `background-color` instead
    border: q,
    // `<table>`. Use CSS `border-width` instead,
    borderColor: null,
    // `<table>`. Use CSS `border-color` instead,
    bottomMargin: q,
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
    compact: Be,
    // Lists. Use CSS to reduce space between items instead
    declare: Be,
    // `<object>`
    event: null,
    // `<script>`
    face: null,
    // `<font>`. Use CSS instead
    frame: null,
    // `<table>`
    frameBorder: null,
    // `<iframe>`. Use CSS `border` instead
    hSpace: q,
    // `<img>` and `<object>`
    leftMargin: q,
    // `<body>`
    link: null,
    // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null,
    // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null,
    // `<img>`. Use a `<picture>`
    marginHeight: q,
    // `<body>`
    marginWidth: q,
    // `<body>`
    noResize: Be,
    // `<frame>`
    noHref: Be,
    // `<area>`. Use no href instead of an explicit `nohref`
    noShade: Be,
    // `<hr>`. Use background-color and height instead of borders
    noWrap: Be,
    // `<td>` and `<th>`
    object: null,
    // `<applet>`
    profile: null,
    // `<head>`
    prompt: null,
    // `<isindex>`
    rev: null,
    // `<link>`
    rightMargin: q,
    // `<body>`
    rules: null,
    // `<table>`
    scheme: null,
    // `<meta>`
    scrolling: At,
    // `<frame>`. Use overflow in the child context
    standby: null,
    // `<object>`
    summary: null,
    // `<table>`
    text: null,
    // `<body>`. Use CSS `color` instead
    topMargin: q,
    // `<body>`
    valueType: null,
    // `<param>`
    version: null,
    // `<html>`. Use a doctype.
    vAlign: null,
    // Several. Use CSS `vertical-align` instead
    vLink: null,
    // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: q,
    // `<img>` and `<object>`
    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: Be,
    disableRemotePlayback: Be,
    prefix: null,
    property: null,
    results: q,
    security: null,
    unselectable: null
  }
}), Ew = ou({
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
  transform: bg,
  properties: {
    about: pn,
    accentHeight: q,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: q,
    amplitude: q,
    arabicForm: null,
    ascent: q,
    attributeName: null,
    attributeType: null,
    azimuth: q,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: q,
    by: null,
    calcMode: null,
    capHeight: q,
    className: ut,
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
    descent: q,
    diffuseConstant: q,
    direction: null,
    display: null,
    dur: null,
    divisor: q,
    dominantBaseline: null,
    download: Be,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: q,
    enableBackground: null,
    end: null,
    event: null,
    exponent: q,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: q,
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
    g1: Hi,
    g2: Hi,
    glyphName: Hi,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: q,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: q,
    horizOriginX: q,
    horizOriginY: q,
    id: null,
    ideographic: q,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: q,
    k: q,
    k1: q,
    k2: q,
    k3: q,
    k4: q,
    kernelMatrix: pn,
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
    limitingConeAngle: q,
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
    mediaSize: q,
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
    overlinePosition: q,
    overlineThickness: q,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: q,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: ut,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: q,
    pointsAtY: q,
    pointsAtZ: q,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: pn,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: pn,
    rev: pn,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: pn,
    requiredFeatures: pn,
    requiredFonts: pn,
    requiredFormats: pn,
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
    specularConstant: q,
    specularExponent: q,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: q,
    strikethroughThickness: q,
    string: null,
    stroke: null,
    strokeDashArray: pn,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: q,
    strokeOpacity: q,
    strokeWidth: null,
    style: null,
    surfaceScale: q,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: pn,
    tabIndex: q,
    tableValues: null,
    target: null,
    targetX: q,
    targetY: q,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: pn,
    to: null,
    transform: null,
    transformOrigin: null,
    u1: null,
    u2: null,
    underlinePosition: q,
    underlineThickness: q,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: q,
    values: null,
    vAlphabetic: q,
    vMathematical: q,
    vectorEffect: null,
    vHanging: q,
    vIdeographic: q,
    version: null,
    vertAdvY: q,
    vertOriginX: q,
    vertOriginY: q,
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
    xHeight: q,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  }
}), Fw = /^data[-\w.:]+$/i, Sp = /-[a-z]/g, Rw = /[A-Z]/g;
function Pw(e, t) {
  const r = sc(t);
  let u = t, o = Rn;
  if (r in e.normal)
    return e.property[e.normal[r]];
  if (r.length > 4 && r.slice(0, 4) === "data" && Fw.test(t)) {
    if (t.charAt(4) === "-") {
      const a = t.slice(5).replace(Sp, Tw);
      u = "data" + a.charAt(0).toUpperCase() + a.slice(1);
    } else {
      const a = t.slice(4);
      if (!Sp.test(a)) {
        let l = a.replace(Rw, Ow);
        l.charAt(0) !== "-" && (l = "-" + l), t = "data" + l;
      }
    }
    o = Fc;
  }
  return new o(u, t);
}
function Ow(e) {
  return "-" + e.toLowerCase();
}
function Tw(e) {
  return e.charAt(1).toUpperCase();
}
const Bw = {
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
}, _w = pg([mg, gg, vg, Ig, Sw], "html"), Rc = pg([mg, gg, vg, Ig, Ew], "svg");
function Gw(e) {
  return e.join(" ").trim();
}
var Wr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ns(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Lu = {}, Fl, Ep;
function Lw() {
  if (Ep) return Fl;
  Ep = 1;
  var e = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, t = /\n/g, r = /^\s*/, u = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, o = /^:\s*/, a = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, l = /^[;\s]*/, c = /^\s+|\s+$/g, f = `
`, p = "/", h = "*", g = "", v = "comment", b = "declaration";
  Fl = function(A, E) {
    if (typeof A != "string")
      throw new TypeError("First argument must be a string");
    if (!A) return [];
    E = E || {};
    var F = 1, k = 1;
    function L(te) {
      var ee = te.match(t);
      ee && (F += ee.length);
      var K = te.lastIndexOf(f);
      k = ~K ? te.length - K : k + te.length;
    }
    function D() {
      var te = { line: F, column: k };
      return function(ee) {
        return ee.position = new H(te), N(), ee;
      };
    }
    function H(te) {
      this.start = te, this.end = { line: F, column: k }, this.source = E.source;
    }
    H.prototype.content = A;
    function G(te) {
      var ee = new Error(
        E.source + ":" + F + ":" + k + ": " + te
      );
      if (ee.reason = te, ee.filename = E.source, ee.line = F, ee.column = k, ee.source = A, !E.silent) throw ee;
    }
    function z(te) {
      var ee = te.exec(A);
      if (ee) {
        var K = ee[0];
        return L(K), A = A.slice(K.length), ee;
      }
    }
    function N() {
      z(r);
    }
    function V(te) {
      var ee;
      for (te = te || []; ee = ne(); )
        ee !== !1 && te.push(ee);
      return te;
    }
    function ne() {
      var te = D();
      if (!(p != A.charAt(0) || h != A.charAt(1))) {
        for (var ee = 2; g != A.charAt(ee) && (h != A.charAt(ee) || p != A.charAt(ee + 1)); )
          ++ee;
        if (ee += 2, g === A.charAt(ee - 1))
          return G("End of comment missing");
        var K = A.slice(2, ee - 2);
        return k += 2, L(K), A = A.slice(ee), k += 2, te({
          type: v,
          comment: K
        });
      }
    }
    function Q() {
      var te = D(), ee = z(u);
      if (ee) {
        if (ne(), !z(o)) return G("property missing ':'");
        var K = z(a), pe = te({
          type: b,
          property: P(ee[0].replace(e, g)),
          value: K ? P(K[0].replace(e, g)) : g
        });
        return z(l), pe;
      }
    }
    function j() {
      var te = [];
      V(te);
      for (var ee; ee = Q(); )
        ee !== !1 && (te.push(ee), V(te));
      return te;
    }
    return N(), j();
  };
  function P(A) {
    return A ? A.replace(c, g) : g;
  }
  return Fl;
}
var Fp;
function kw() {
  if (Fp) return Lu;
  Fp = 1;
  var e = Lu.__importDefault || function(u) {
    return u && u.__esModule ? u : { default: u };
  };
  Object.defineProperty(Lu, "__esModule", { value: !0 }), Lu.default = r;
  var t = e(Lw());
  function r(u, o) {
    var a = null;
    if (!u || typeof u != "string")
      return a;
    var l = (0, t.default)(u), c = typeof o == "function";
    return l.forEach(function(f) {
      if (f.type === "declaration") {
        var p = f.property, h = f.value;
        c ? o(p, h, f) : h && (a = a || {}, a[p] = h);
      }
    }), a;
  }
  return Lu;
}
var Dw = kw();
const Rp = /* @__PURE__ */ Ns(Dw), Mw = Rp.default || Rp, Cg = xg("end"), Pc = xg("start");
function xg(e) {
  return t;
  function t(r) {
    const u = r && r.position && r.position[e] || {};
    if (typeof u.line == "number" && u.line > 0 && typeof u.column == "number" && u.column > 0)
      return {
        line: u.line,
        column: u.column,
        offset: typeof u.offset == "number" && u.offset > -1 ? u.offset : void 0
      };
  }
}
function Nw(e) {
  const t = Pc(e), r = Cg(e);
  if (t && r)
    return { start: t, end: r };
}
function zu(e) {
  return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? Pp(e.position) : "start" in e || "end" in e ? Pp(e) : "line" in e || "column" in e ? lc(e) : "";
}
function lc(e) {
  return Op(e && e.line) + ":" + Op(e && e.column);
}
function Pp(e) {
  return lc(e && e.start) + "-" + lc(e && e.end);
}
function Op(e) {
  return e && typeof e == "number" ? e : 1;
}
class Lt extends Error {
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
  constructor(t, r, u) {
    super(), typeof r == "string" && (u = r, r = void 0);
    let o = "", a = {}, l = !1;
    if (r && ("line" in r && "column" in r ? a = { place: r } : "start" in r && "end" in r ? a = { place: r } : "type" in r ? a = {
      ancestors: [r],
      place: r.position
    } : a = { ...r }), typeof t == "string" ? o = t : !a.cause && t && (l = !0, o = t.message, a.cause = t), !a.ruleId && !a.source && typeof u == "string") {
      const f = u.indexOf(":");
      f === -1 ? a.ruleId = u : (a.source = u.slice(0, f), a.ruleId = u.slice(f + 1));
    }
    if (!a.place && a.ancestors && a.ancestors) {
      const f = a.ancestors[a.ancestors.length - 1];
      f && (a.place = f.position);
    }
    const c = a.place && "start" in a.place ? a.place.start : a.place;
    this.ancestors = a.ancestors || void 0, this.cause = a.cause || void 0, this.column = c ? c.column : void 0, this.fatal = void 0, this.file, this.message = o, this.line = c ? c.line : void 0, this.name = zu(a.place) || "1:1", this.place = a.place || void 0, this.reason = this.message, this.ruleId = a.ruleId || void 0, this.source = a.source || void 0, this.stack = l && a.cause && typeof a.cause.stack == "string" ? a.cause.stack : "", this.actual, this.expected, this.note, this.url;
  }
}
Lt.prototype.file = "";
Lt.prototype.name = "";
Lt.prototype.reason = "";
Lt.prototype.message = "";
Lt.prototype.stack = "";
Lt.prototype.column = void 0;
Lt.prototype.line = void 0;
Lt.prototype.ancestors = void 0;
Lt.prototype.cause = void 0;
Lt.prototype.fatal = void 0;
Lt.prototype.place = void 0;
Lt.prototype.ruleId = void 0;
Lt.prototype.source = void 0;
const Oc = {}.hasOwnProperty, Vw = /* @__PURE__ */ new Map(), Ww = /[A-Z]/g, Xw = /-([a-z])/g, Hw = /* @__PURE__ */ new Set(["table", "tbody", "thead", "tfoot", "tr"]), zw = /* @__PURE__ */ new Set(["td", "th"]), Ag = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function Zw(e, t) {
  if (!t || t.Fragment === void 0)
    throw new TypeError("Expected `Fragment` in options");
  const r = t.filePath || void 0;
  let u;
  if (t.development) {
    if (typeof t.jsxDEV != "function")
      throw new TypeError(
        "Expected `jsxDEV` in options when `development: true`"
      );
    u = Kw(r, t.jsxDEV);
  } else {
    if (typeof t.jsx != "function")
      throw new TypeError("Expected `jsx` in production options");
    if (typeof t.jsxs != "function")
      throw new TypeError("Expected `jsxs` in production options");
    u = $w(r, t.jsx, t.jsxs);
  }
  const o = {
    Fragment: t.Fragment,
    ancestors: [],
    components: t.components || {},
    create: u,
    elementAttributeNameCase: t.elementAttributeNameCase || "react",
    evaluater: t.createEvaluater ? t.createEvaluater() : void 0,
    filePath: r,
    ignoreInvalidStyle: t.ignoreInvalidStyle || !1,
    passKeys: t.passKeys !== !1,
    passNode: t.passNode || !1,
    schema: t.space === "svg" ? Rc : _w,
    stylePropertyNameCase: t.stylePropertyNameCase || "dom",
    tableCellAlignToStyle: t.tableCellAlignToStyle !== !1
  }, a = wg(o, e, void 0);
  return a && typeof a != "string" ? a : o.create(
    e,
    o.Fragment,
    { children: a || void 0 },
    void 0
  );
}
function wg(e, t, r) {
  if (t.type === "element")
    return Yw(e, t, r);
  if (t.type === "mdxFlowExpression" || t.type === "mdxTextExpression")
    return Jw(e, t);
  if (t.type === "mdxJsxFlowElement" || t.type === "mdxJsxTextElement")
    return jw(e, t, r);
  if (t.type === "mdxjsEsm")
    return Uw(e, t);
  if (t.type === "root")
    return Qw(e, t, r);
  if (t.type === "text")
    return qw(e, t);
}
function Yw(e, t, r) {
  const u = e.schema;
  let o = u;
  t.tagName.toLowerCase() === "svg" && u.space === "html" && (o = Rc, e.schema = o), e.ancestors.push(t);
  const a = Eg(e, t.tagName, !1), l = eS(e, t);
  let c = Bc(e, t);
  return Hw.has(t.tagName) && (c = c.filter(function(f) {
    return typeof f == "string" ? !xw(f) : !0;
  })), Sg(e, l, a, t), Tc(l, c), e.ancestors.pop(), e.schema = u, e.create(t, a, l, r);
}
function Jw(e, t) {
  if (t.data && t.data.estree && e.evaluater) {
    const u = t.data.estree.body[0];
    return u.type, /** @type {Child | undefined} */
    e.evaluater.evaluateExpression(u.expression);
  }
  Uu(e, t.position);
}
function Uw(e, t) {
  if (t.data && t.data.estree && e.evaluater)
    return (
      /** @type {Child | undefined} */
      e.evaluater.evaluateProgram(t.data.estree)
    );
  Uu(e, t.position);
}
function jw(e, t, r) {
  const u = e.schema;
  let o = u;
  t.name === "svg" && u.space === "html" && (o = Rc, e.schema = o), e.ancestors.push(t);
  const a = t.name === null ? e.Fragment : Eg(e, t.name, !0), l = tS(e, t), c = Bc(e, t);
  return Sg(e, l, a, t), Tc(l, c), e.ancestors.pop(), e.schema = u, e.create(t, a, l, r);
}
function Qw(e, t, r) {
  const u = {};
  return Tc(u, Bc(e, t)), e.create(t, e.Fragment, u, r);
}
function qw(e, t) {
  return t.value;
}
function Sg(e, t, r, u) {
  typeof r != "string" && r !== e.Fragment && e.passNode && (t.node = u);
}
function Tc(e, t) {
  if (t.length > 0) {
    const r = t.length > 1 ? t : t[0];
    r && (e.children = r);
  }
}
function $w(e, t, r) {
  return u;
  function u(o, a, l, c) {
    const p = Array.isArray(l.children) ? r : t;
    return c ? p(a, l, c) : p(a, l);
  }
}
function Kw(e, t) {
  return r;
  function r(u, o, a, l) {
    const c = Array.isArray(a.children), f = Pc(u);
    return t(
      o,
      a,
      l,
      c,
      {
        columnNumber: f ? f.column - 1 : void 0,
        fileName: e,
        lineNumber: f ? f.line : void 0
      },
      void 0
    );
  }
}
function eS(e, t) {
  const r = {};
  let u, o;
  for (o in t.properties)
    if (o !== "children" && Oc.call(t.properties, o)) {
      const a = nS(e, o, t.properties[o]);
      if (a) {
        const [l, c] = a;
        e.tableCellAlignToStyle && l === "align" && typeof c == "string" && zw.has(t.tagName) ? u = c : r[l] = c;
      }
    }
  if (u) {
    const a = (
      /** @type {Style} */
      r.style || (r.style = {})
    );
    a[e.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = u;
  }
  return r;
}
function tS(e, t) {
  const r = {};
  for (const u of t.attributes)
    if (u.type === "mdxJsxExpressionAttribute")
      if (u.data && u.data.estree && e.evaluater) {
        const a = u.data.estree.body[0];
        a.type;
        const l = a.expression;
        l.type;
        const c = l.properties[0];
        c.type, Object.assign(
          r,
          e.evaluater.evaluateExpression(c.argument)
        );
      } else
        Uu(e, t.position);
    else {
      const o = u.name;
      let a;
      if (u.value && typeof u.value == "object")
        if (u.value.data && u.value.data.estree && e.evaluater) {
          const c = u.value.data.estree.body[0];
          c.type, a = e.evaluater.evaluateExpression(c.expression);
        } else
          Uu(e, t.position);
      else
        a = u.value === null ? !0 : u.value;
      r[o] = /** @type {Props[keyof Props]} */
      a;
    }
  return r;
}
function Bc(e, t) {
  const r = [];
  let u = -1;
  const o = e.passKeys ? /* @__PURE__ */ new Map() : Vw;
  for (; ++u < t.children.length; ) {
    const a = t.children[u];
    let l;
    if (e.passKeys) {
      const f = a.type === "element" ? a.tagName : a.type === "mdxJsxFlowElement" || a.type === "mdxJsxTextElement" ? a.name : void 0;
      if (f) {
        const p = o.get(f) || 0;
        l = f + "-" + p, o.set(f, p + 1);
      }
    }
    const c = wg(e, a, l);
    c !== void 0 && r.push(c);
  }
  return r;
}
function nS(e, t, r) {
  const u = Pw(e.schema, t);
  if (!(r == null || typeof r == "number" && Number.isNaN(r))) {
    if (Array.isArray(r) && (r = u.commaSeparated ? bw(r) : Gw(r)), u.property === "style") {
      let o = typeof r == "object" ? r : rS(e, String(r));
      return e.stylePropertyNameCase === "css" && (o = iS(o)), ["style", o];
    }
    return [
      e.elementAttributeNameCase === "react" && u.space ? Bw[u.property] || u.property : u.attribute,
      r
    ];
  }
}
function rS(e, t) {
  const r = {};
  try {
    Mw(t, u);
  } catch (o) {
    if (!e.ignoreInvalidStyle) {
      const a = (
        /** @type {Error} */
        o
      ), l = new Lt("Cannot parse `style` attribute", {
        ancestors: e.ancestors,
        cause: a,
        ruleId: "style",
        source: "hast-util-to-jsx-runtime"
      });
      throw l.file = e.filePath || void 0, l.url = Ag + "#cannot-parse-style-attribute", l;
    }
  }
  return r;
  function u(o, a) {
    let l = o;
    l.slice(0, 2) !== "--" && (l.slice(0, 4) === "-ms-" && (l = "ms-" + l.slice(4)), l = l.replace(Xw, oS)), r[l] = a;
  }
}
function Eg(e, t, r) {
  let u;
  if (!r)
    u = { type: "Literal", value: t };
  else if (t.includes(".")) {
    const o = t.split(".");
    let a = -1, l;
    for (; ++a < o.length; ) {
      const c = xp(o[a]) ? { type: "Identifier", name: o[a] } : { type: "Literal", value: o[a] };
      l = l ? {
        type: "MemberExpression",
        object: l,
        property: c,
        computed: !!(a && c.type === "Literal"),
        optional: !1
      } : c;
    }
    u = l;
  } else
    u = xp(t) && !/^[a-z]/.test(t) ? { type: "Identifier", name: t } : { type: "Literal", value: t };
  if (u.type === "Literal") {
    const o = (
      /** @type {keyof JSX.IntrinsicElements} */
      u.value
    );
    return Oc.call(e.components, o) ? e.components[o] : o;
  }
  if (e.evaluater)
    return e.evaluater.evaluateExpression(u);
  Uu(e);
}
function Uu(e, t) {
  const r = new Lt(
    "Cannot handle MDX estrees without `createEvaluater`",
    {
      ancestors: e.ancestors,
      place: t,
      ruleId: "mdx-estree",
      source: "hast-util-to-jsx-runtime"
    }
  );
  throw r.file = e.filePath || void 0, r.url = Ag + "#cannot-handle-mdx-estrees-without-createevaluater", r;
}
function iS(e) {
  const t = {};
  let r;
  for (r in e)
    Oc.call(e, r) && (t[uS(r)] = e[r]);
  return t;
}
function uS(e) {
  let t = e.replace(Ww, sS);
  return t.slice(0, 3) === "ms-" && (t = "-" + t), t;
}
function oS(e, t) {
  return t.toUpperCase();
}
function sS(e) {
  return "-" + e.toLowerCase();
}
const Rl = {
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
}, aS = {};
function lS(e, t) {
  const r = aS, u = typeof r.includeImageAlt == "boolean" ? r.includeImageAlt : !0, o = typeof r.includeHtml == "boolean" ? r.includeHtml : !0;
  return Fg(e, u, o);
}
function Fg(e, t, r) {
  if (cS(e)) {
    if ("value" in e)
      return e.type === "html" && !r ? "" : e.value;
    if (t && "alt" in e && e.alt)
      return e.alt;
    if ("children" in e)
      return Tp(e.children, t, r);
  }
  return Array.isArray(e) ? Tp(e, t, r) : "";
}
function Tp(e, t, r) {
  const u = [];
  let o = -1;
  for (; ++o < e.length; )
    u[o] = Fg(e[o], t, r);
  return u.join("");
}
function cS(e) {
  return !!(e && typeof e == "object");
}
const Bp = document.createElement("i");
function _c(e) {
  const t = "&" + e + ";";
  Bp.innerHTML = t;
  const r = Bp.textContent;
  return r.charCodeAt(r.length - 1) === 59 && e !== "semi" || r === t ? !1 : r;
}
function Kn(e, t, r, u) {
  const o = e.length;
  let a = 0, l;
  if (t < 0 ? t = -t > o ? 0 : o + t : t = t > o ? o : t, r = r > 0 ? r : 0, u.length < 1e4)
    l = Array.from(u), l.unshift(t, r), e.splice(...l);
  else
    for (r && e.splice(t, r); a < u.length; )
      l = u.slice(a, a + 1e4), l.unshift(t, 0), e.splice(...l), a += 1e4, t += 1e4;
}
function Fn(e, t) {
  return e.length > 0 ? (Kn(e, e.length, 0, t), e) : t;
}
const _p = {}.hasOwnProperty;
function fS(e) {
  const t = {};
  let r = -1;
  for (; ++r < e.length; )
    dS(t, e[r]);
  return t;
}
function dS(e, t) {
  let r;
  for (r in t) {
    const o = (_p.call(e, r) ? e[r] : void 0) || (e[r] = {}), a = t[r];
    let l;
    if (a)
      for (l in a) {
        _p.call(o, l) || (o[l] = []);
        const c = a[l];
        pS(
          // @ts-expect-error Looks like a list.
          o[l],
          Array.isArray(c) ? c : c ? [c] : []
        );
      }
  }
}
function pS(e, t) {
  let r = -1;
  const u = [];
  for (; ++r < t.length; )
    (t[r].add === "after" ? e : u).push(t[r]);
  Kn(e, 0, 0, u);
}
function Rg(e, t) {
  const r = Number.parseInt(e, t);
  return (
    // C0 except for HT, LF, FF, CR, space.
    r < 9 || r === 11 || r > 13 && r < 32 || // Control character (DEL) of C0, and C1 controls.
    r > 126 && r < 160 || // Lone high surrogates and low surrogates.
    r > 55295 && r < 57344 || // Noncharacters.
    r > 64975 && r < 65008 || /* eslint-disable no-bitwise */
    (r & 65535) === 65535 || (r & 65535) === 65534 || /* eslint-enable no-bitwise */
    // Out of range
    r > 1114111 ? "�" : String.fromCodePoint(r)
  );
}
function zi(e) {
  return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const $n = Hr(/[A-Za-z]/), hn = Hr(/[\dA-Za-z]/), hS = Hr(/[#-'*+\--9=?A-Z^-~]/);
function cc(e) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    e !== null && (e < 32 || e === 127)
  );
}
const fc = Hr(/\d/), gS = Hr(/[\dA-Fa-f]/), mS = Hr(/[!-/:-@[-`{-~]/);
function xe(e) {
  return e !== null && e < -2;
}
function nn(e) {
  return e !== null && (e < 0 || e === 32);
}
function Ue(e) {
  return e === -2 || e === -1 || e === 32;
}
const bS = Hr(new RegExp("\\p{P}|\\p{S}", "u")), yS = Hr(/\s/);
function Hr(e) {
  return t;
  function t(r) {
    return r !== null && r > -1 && e.test(String.fromCharCode(r));
  }
}
function su(e) {
  const t = [];
  let r = -1, u = 0, o = 0;
  for (; ++r < e.length; ) {
    const a = e.charCodeAt(r);
    let l = "";
    if (a === 37 && hn(e.charCodeAt(r + 1)) && hn(e.charCodeAt(r + 2)))
      o = 2;
    else if (a < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a)) || (l = String.fromCharCode(a));
    else if (a > 55295 && a < 57344) {
      const c = e.charCodeAt(r + 1);
      a < 56320 && c > 56319 && c < 57344 ? (l = String.fromCharCode(a, c), o = 1) : l = "�";
    } else
      l = String.fromCharCode(a);
    l && (t.push(e.slice(u, r), encodeURIComponent(l)), u = r + o + 1, l = ""), o && (r += o, o = 0);
  }
  return t.join("") + e.slice(u);
}
function ot(e, t, r, u) {
  const o = u ? u - 1 : Number.POSITIVE_INFINITY;
  let a = 0;
  return l;
  function l(f) {
    return Ue(f) ? (e.enter(r), c(f)) : t(f);
  }
  function c(f) {
    return Ue(f) && a++ < o ? (e.consume(f), c) : (e.exit(r), t(f));
  }
}
const vS = {
  tokenize: IS
};
function IS(e) {
  const t = e.attempt(this.parser.constructs.contentInitial, u, o);
  let r;
  return t;
  function u(c) {
    if (c === null) {
      e.consume(c);
      return;
    }
    return e.enter("lineEnding"), e.consume(c), e.exit("lineEnding"), ot(e, t, "linePrefix");
  }
  function o(c) {
    return e.enter("paragraph"), a(c);
  }
  function a(c) {
    const f = e.enter("chunkText", {
      contentType: "text",
      previous: r
    });
    return r && (r.next = f), r = f, l(c);
  }
  function l(c) {
    if (c === null) {
      e.exit("chunkText"), e.exit("paragraph"), e.consume(c);
      return;
    }
    return xe(c) ? (e.consume(c), e.exit("chunkText"), a) : (e.consume(c), l);
  }
}
const CS = {
  tokenize: xS
}, Gp = {
  tokenize: AS
};
function xS(e) {
  const t = this, r = [];
  let u = 0, o, a, l;
  return c;
  function c(L) {
    if (u < r.length) {
      const D = r[u];
      return t.containerState = D[1], e.attempt(D[0].continuation, f, p)(L);
    }
    return p(L);
  }
  function f(L) {
    if (u++, t.containerState._closeFlow) {
      t.containerState._closeFlow = void 0, o && k();
      const D = t.events.length;
      let H = D, G;
      for (; H--; )
        if (t.events[H][0] === "exit" && t.events[H][1].type === "chunkFlow") {
          G = t.events[H][1].end;
          break;
        }
      F(u);
      let z = D;
      for (; z < t.events.length; )
        t.events[z][1].end = {
          ...G
        }, z++;
      return Kn(t.events, H + 1, 0, t.events.slice(D)), t.events.length = z, p(L);
    }
    return c(L);
  }
  function p(L) {
    if (u === r.length) {
      if (!o)
        return v(L);
      if (o.currentConstruct && o.currentConstruct.concrete)
        return P(L);
      t.interrupt = !!(o.currentConstruct && !o._gfmTableDynamicInterruptHack);
    }
    return t.containerState = {}, e.check(Gp, h, g)(L);
  }
  function h(L) {
    return o && k(), F(u), v(L);
  }
  function g(L) {
    return t.parser.lazy[t.now().line] = u !== r.length, l = t.now().offset, P(L);
  }
  function v(L) {
    return t.containerState = {}, e.attempt(Gp, b, P)(L);
  }
  function b(L) {
    return u++, r.push([t.currentConstruct, t.containerState]), v(L);
  }
  function P(L) {
    if (L === null) {
      o && k(), F(0), e.consume(L);
      return;
    }
    return o = o || t.parser.flow(t.now()), e.enter("chunkFlow", {
      _tokenizer: o,
      contentType: "flow",
      previous: a
    }), A(L);
  }
  function A(L) {
    if (L === null) {
      E(e.exit("chunkFlow"), !0), F(0), e.consume(L);
      return;
    }
    return xe(L) ? (e.consume(L), E(e.exit("chunkFlow")), u = 0, t.interrupt = void 0, c) : (e.consume(L), A);
  }
  function E(L, D) {
    const H = t.sliceStream(L);
    if (D && H.push(null), L.previous = a, a && (a.next = L), a = L, o.defineSkip(L.start), o.write(H), t.parser.lazy[L.start.line]) {
      let G = o.events.length;
      for (; G--; )
        if (
          // The token starts before the line ending…
          o.events[G][1].start.offset < l && // …and either is not ended yet…
          (!o.events[G][1].end || // …or ends after it.
          o.events[G][1].end.offset > l)
        )
          return;
      const z = t.events.length;
      let N = z, V, ne;
      for (; N--; )
        if (t.events[N][0] === "exit" && t.events[N][1].type === "chunkFlow") {
          if (V) {
            ne = t.events[N][1].end;
            break;
          }
          V = !0;
        }
      for (F(u), G = z; G < t.events.length; )
        t.events[G][1].end = {
          ...ne
        }, G++;
      Kn(t.events, N + 1, 0, t.events.slice(z)), t.events.length = G;
    }
  }
  function F(L) {
    let D = r.length;
    for (; D-- > L; ) {
      const H = r[D];
      t.containerState = H[1], H[0].exit.call(t, e);
    }
    r.length = L;
  }
  function k() {
    o.write([null]), a = void 0, o = void 0, t.containerState._closeFlow = void 0;
  }
}
function AS(e, t, r) {
  return ot(e, e.attempt(this.parser.constructs.document, t, r), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function Lp(e) {
  if (e === null || nn(e) || yS(e))
    return 1;
  if (bS(e))
    return 2;
}
function Gc(e, t, r) {
  const u = [];
  let o = -1;
  for (; ++o < e.length; ) {
    const a = e[o].resolveAll;
    a && !u.includes(a) && (t = a(t, r), u.push(a));
  }
  return t;
}
const dc = {
  name: "attention",
  resolveAll: wS,
  tokenize: SS
};
function wS(e, t) {
  let r = -1, u, o, a, l, c, f, p, h;
  for (; ++r < e.length; )
    if (e[r][0] === "enter" && e[r][1].type === "attentionSequence" && e[r][1]._close) {
      for (u = r; u--; )
        if (e[u][0] === "exit" && e[u][1].type === "attentionSequence" && e[u][1]._open && // If the markers are the same:
        t.sliceSerialize(e[u][1]).charCodeAt(0) === t.sliceSerialize(e[r][1]).charCodeAt(0)) {
          if ((e[u][1]._close || e[r][1]._open) && (e[r][1].end.offset - e[r][1].start.offset) % 3 && !((e[u][1].end.offset - e[u][1].start.offset + e[r][1].end.offset - e[r][1].start.offset) % 3))
            continue;
          f = e[u][1].end.offset - e[u][1].start.offset > 1 && e[r][1].end.offset - e[r][1].start.offset > 1 ? 2 : 1;
          const g = {
            ...e[u][1].end
          }, v = {
            ...e[r][1].start
          };
          kp(g, -f), kp(v, f), l = {
            type: f > 1 ? "strongSequence" : "emphasisSequence",
            start: g,
            end: {
              ...e[u][1].end
            }
          }, c = {
            type: f > 1 ? "strongSequence" : "emphasisSequence",
            start: {
              ...e[r][1].start
            },
            end: v
          }, a = {
            type: f > 1 ? "strongText" : "emphasisText",
            start: {
              ...e[u][1].end
            },
            end: {
              ...e[r][1].start
            }
          }, o = {
            type: f > 1 ? "strong" : "emphasis",
            start: {
              ...l.start
            },
            end: {
              ...c.end
            }
          }, e[u][1].end = {
            ...l.start
          }, e[r][1].start = {
            ...c.end
          }, p = [], e[u][1].end.offset - e[u][1].start.offset && (p = Fn(p, [["enter", e[u][1], t], ["exit", e[u][1], t]])), p = Fn(p, [["enter", o, t], ["enter", l, t], ["exit", l, t], ["enter", a, t]]), p = Fn(p, Gc(t.parser.constructs.insideSpan.null, e.slice(u + 1, r), t)), p = Fn(p, [["exit", a, t], ["enter", c, t], ["exit", c, t], ["exit", o, t]]), e[r][1].end.offset - e[r][1].start.offset ? (h = 2, p = Fn(p, [["enter", e[r][1], t], ["exit", e[r][1], t]])) : h = 0, Kn(e, u - 1, r - u + 3, p), r = u + p.length - h - 2;
          break;
        }
    }
  for (r = -1; ++r < e.length; )
    e[r][1].type === "attentionSequence" && (e[r][1].type = "data");
  return e;
}
function SS(e, t) {
  const r = this.parser.constructs.attentionMarkers.null, u = this.previous, o = Lp(u);
  let a;
  return l;
  function l(f) {
    return a = f, e.enter("attentionSequence"), c(f);
  }
  function c(f) {
    if (f === a)
      return e.consume(f), c;
    const p = e.exit("attentionSequence"), h = Lp(f), g = !h || h === 2 && o || r.includes(f), v = !o || o === 2 && h || r.includes(u);
    return p._open = !!(a === 42 ? g : g && (o || !v)), p._close = !!(a === 42 ? v : v && (h || !g)), t(f);
  }
}
function kp(e, t) {
  e.column += t, e.offset += t, e._bufferIndex += t;
}
const ES = {
  name: "autolink",
  tokenize: FS
};
function FS(e, t, r) {
  let u = 0;
  return o;
  function o(b) {
    return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(b), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), a;
  }
  function a(b) {
    return $n(b) ? (e.consume(b), l) : b === 64 ? r(b) : p(b);
  }
  function l(b) {
    return b === 43 || b === 45 || b === 46 || hn(b) ? (u = 1, c(b)) : p(b);
  }
  function c(b) {
    return b === 58 ? (e.consume(b), u = 0, f) : (b === 43 || b === 45 || b === 46 || hn(b)) && u++ < 32 ? (e.consume(b), c) : (u = 0, p(b));
  }
  function f(b) {
    return b === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(b), e.exit("autolinkMarker"), e.exit("autolink"), t) : b === null || b === 32 || b === 60 || cc(b) ? r(b) : (e.consume(b), f);
  }
  function p(b) {
    return b === 64 ? (e.consume(b), h) : hS(b) ? (e.consume(b), p) : r(b);
  }
  function h(b) {
    return hn(b) ? g(b) : r(b);
  }
  function g(b) {
    return b === 46 ? (e.consume(b), u = 0, h) : b === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(b), e.exit("autolinkMarker"), e.exit("autolink"), t) : v(b);
  }
  function v(b) {
    if ((b === 45 || hn(b)) && u++ < 63) {
      const P = b === 45 ? v : g;
      return e.consume(b), P;
    }
    return r(b);
  }
}
const Vs = {
  partial: !0,
  tokenize: RS
};
function RS(e, t, r) {
  return u;
  function u(a) {
    return Ue(a) ? ot(e, o, "linePrefix")(a) : o(a);
  }
  function o(a) {
    return a === null || xe(a) ? t(a) : r(a);
  }
}
const Pg = {
  continuation: {
    tokenize: OS
  },
  exit: TS,
  name: "blockQuote",
  tokenize: PS
};
function PS(e, t, r) {
  const u = this;
  return o;
  function o(l) {
    if (l === 62) {
      const c = u.containerState;
      return c.open || (e.enter("blockQuote", {
        _container: !0
      }), c.open = !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(l), e.exit("blockQuoteMarker"), a;
    }
    return r(l);
  }
  function a(l) {
    return Ue(l) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(l), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(l));
  }
}
function OS(e, t, r) {
  const u = this;
  return o;
  function o(l) {
    return Ue(l) ? ot(e, a, "linePrefix", u.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(l) : a(l);
  }
  function a(l) {
    return e.attempt(Pg, t, r)(l);
  }
}
function TS(e) {
  e.exit("blockQuote");
}
const Og = {
  name: "characterEscape",
  tokenize: BS
};
function BS(e, t, r) {
  return u;
  function u(a) {
    return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(a), e.exit("escapeMarker"), o;
  }
  function o(a) {
    return mS(a) ? (e.enter("characterEscapeValue"), e.consume(a), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : r(a);
  }
}
const Tg = {
  name: "characterReference",
  tokenize: _S
};
function _S(e, t, r) {
  const u = this;
  let o = 0, a, l;
  return c;
  function c(g) {
    return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(g), e.exit("characterReferenceMarker"), f;
  }
  function f(g) {
    return g === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(g), e.exit("characterReferenceMarkerNumeric"), p) : (e.enter("characterReferenceValue"), a = 31, l = hn, h(g));
  }
  function p(g) {
    return g === 88 || g === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(g), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), a = 6, l = gS, h) : (e.enter("characterReferenceValue"), a = 7, l = fc, h(g));
  }
  function h(g) {
    if (g === 59 && o) {
      const v = e.exit("characterReferenceValue");
      return l === hn && !_c(u.sliceSerialize(v)) ? r(g) : (e.enter("characterReferenceMarker"), e.consume(g), e.exit("characterReferenceMarker"), e.exit("characterReference"), t);
    }
    return l(g) && o++ < a ? (e.consume(g), h) : r(g);
  }
}
const Dp = {
  partial: !0,
  tokenize: LS
}, Mp = {
  concrete: !0,
  name: "codeFenced",
  tokenize: GS
};
function GS(e, t, r) {
  const u = this, o = {
    partial: !0,
    tokenize: H
  };
  let a = 0, l = 0, c;
  return f;
  function f(G) {
    return p(G);
  }
  function p(G) {
    const z = u.events[u.events.length - 1];
    return a = z && z[1].type === "linePrefix" ? z[2].sliceSerialize(z[1], !0).length : 0, c = G, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), h(G);
  }
  function h(G) {
    return G === c ? (l++, e.consume(G), h) : l < 3 ? r(G) : (e.exit("codeFencedFenceSequence"), Ue(G) ? ot(e, g, "whitespace")(G) : g(G));
  }
  function g(G) {
    return G === null || xe(G) ? (e.exit("codeFencedFence"), u.interrupt ? t(G) : e.check(Dp, A, D)(G)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
      contentType: "string"
    }), v(G));
  }
  function v(G) {
    return G === null || xe(G) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), g(G)) : Ue(G) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), ot(e, b, "whitespace")(G)) : G === 96 && G === c ? r(G) : (e.consume(G), v);
  }
  function b(G) {
    return G === null || xe(G) ? g(G) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
      contentType: "string"
    }), P(G));
  }
  function P(G) {
    return G === null || xe(G) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), g(G)) : G === 96 && G === c ? r(G) : (e.consume(G), P);
  }
  function A(G) {
    return e.attempt(o, D, E)(G);
  }
  function E(G) {
    return e.enter("lineEnding"), e.consume(G), e.exit("lineEnding"), F;
  }
  function F(G) {
    return a > 0 && Ue(G) ? ot(e, k, "linePrefix", a + 1)(G) : k(G);
  }
  function k(G) {
    return G === null || xe(G) ? e.check(Dp, A, D)(G) : (e.enter("codeFlowValue"), L(G));
  }
  function L(G) {
    return G === null || xe(G) ? (e.exit("codeFlowValue"), k(G)) : (e.consume(G), L);
  }
  function D(G) {
    return e.exit("codeFenced"), t(G);
  }
  function H(G, z, N) {
    let V = 0;
    return ne;
    function ne(K) {
      return G.enter("lineEnding"), G.consume(K), G.exit("lineEnding"), Q;
    }
    function Q(K) {
      return G.enter("codeFencedFence"), Ue(K) ? ot(G, j, "linePrefix", u.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(K) : j(K);
    }
    function j(K) {
      return K === c ? (G.enter("codeFencedFenceSequence"), te(K)) : N(K);
    }
    function te(K) {
      return K === c ? (V++, G.consume(K), te) : V >= l ? (G.exit("codeFencedFenceSequence"), Ue(K) ? ot(G, ee, "whitespace")(K) : ee(K)) : N(K);
    }
    function ee(K) {
      return K === null || xe(K) ? (G.exit("codeFencedFence"), z(K)) : N(K);
    }
  }
}
function LS(e, t, r) {
  const u = this;
  return o;
  function o(l) {
    return l === null ? r(l) : (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), a);
  }
  function a(l) {
    return u.parser.lazy[u.now().line] ? r(l) : t(l);
  }
}
const Pl = {
  name: "codeIndented",
  tokenize: DS
}, kS = {
  partial: !0,
  tokenize: MS
};
function DS(e, t, r) {
  const u = this;
  return o;
  function o(p) {
    return e.enter("codeIndented"), ot(e, a, "linePrefix", 5)(p);
  }
  function a(p) {
    const h = u.events[u.events.length - 1];
    return h && h[1].type === "linePrefix" && h[2].sliceSerialize(h[1], !0).length >= 4 ? l(p) : r(p);
  }
  function l(p) {
    return p === null ? f(p) : xe(p) ? e.attempt(kS, l, f)(p) : (e.enter("codeFlowValue"), c(p));
  }
  function c(p) {
    return p === null || xe(p) ? (e.exit("codeFlowValue"), l(p)) : (e.consume(p), c);
  }
  function f(p) {
    return e.exit("codeIndented"), t(p);
  }
}
function MS(e, t, r) {
  const u = this;
  return o;
  function o(l) {
    return u.parser.lazy[u.now().line] ? r(l) : xe(l) ? (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), o) : ot(e, a, "linePrefix", 5)(l);
  }
  function a(l) {
    const c = u.events[u.events.length - 1];
    return c && c[1].type === "linePrefix" && c[2].sliceSerialize(c[1], !0).length >= 4 ? t(l) : xe(l) ? o(l) : r(l);
  }
}
const NS = {
  name: "codeText",
  previous: WS,
  resolve: VS,
  tokenize: XS
};
function VS(e) {
  let t = e.length - 4, r = 3, u, o;
  if ((e[r][1].type === "lineEnding" || e[r][1].type === "space") && (e[t][1].type === "lineEnding" || e[t][1].type === "space")) {
    for (u = r; ++u < t; )
      if (e[u][1].type === "codeTextData") {
        e[r][1].type = "codeTextPadding", e[t][1].type = "codeTextPadding", r += 2, t -= 2;
        break;
      }
  }
  for (u = r - 1, t++; ++u <= t; )
    o === void 0 ? u !== t && e[u][1].type !== "lineEnding" && (o = u) : (u === t || e[u][1].type === "lineEnding") && (e[o][1].type = "codeTextData", u !== o + 2 && (e[o][1].end = e[u - 1][1].end, e.splice(o + 2, u - o - 2), t -= u - o - 2, u = o + 2), o = void 0);
  return e;
}
function WS(e) {
  return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function XS(e, t, r) {
  let u = 0, o, a;
  return l;
  function l(g) {
    return e.enter("codeText"), e.enter("codeTextSequence"), c(g);
  }
  function c(g) {
    return g === 96 ? (e.consume(g), u++, c) : (e.exit("codeTextSequence"), f(g));
  }
  function f(g) {
    return g === null ? r(g) : g === 32 ? (e.enter("space"), e.consume(g), e.exit("space"), f) : g === 96 ? (a = e.enter("codeTextSequence"), o = 0, h(g)) : xe(g) ? (e.enter("lineEnding"), e.consume(g), e.exit("lineEnding"), f) : (e.enter("codeTextData"), p(g));
  }
  function p(g) {
    return g === null || g === 32 || g === 96 || xe(g) ? (e.exit("codeTextData"), f(g)) : (e.consume(g), p);
  }
  function h(g) {
    return g === 96 ? (e.consume(g), o++, h) : o === u ? (e.exit("codeTextSequence"), e.exit("codeText"), t(g)) : (a.type = "codeTextData", p(g));
  }
}
class HS {
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
  slice(t, r) {
    const u = r ?? Number.POSITIVE_INFINITY;
    return u < this.left.length ? this.left.slice(t, u) : t > this.left.length ? this.right.slice(this.right.length - u + this.left.length, this.right.length - t + this.left.length).reverse() : this.left.slice(t).concat(this.right.slice(this.right.length - u + this.left.length).reverse());
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
  splice(t, r, u) {
    const o = r || 0;
    this.setCursor(Math.trunc(t));
    const a = this.right.splice(this.right.length - o, Number.POSITIVE_INFINITY);
    return u && ku(this.left, u), a.reverse();
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
    this.setCursor(Number.POSITIVE_INFINITY), ku(this.left, t);
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
    this.setCursor(0), ku(this.right, t.reverse());
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
        const r = this.left.splice(t, Number.POSITIVE_INFINITY);
        ku(this.right, r.reverse());
      } else {
        const r = this.right.splice(this.left.length + this.right.length - t, Number.POSITIVE_INFINITY);
        ku(this.left, r.reverse());
      }
  }
}
function ku(e, t) {
  let r = 0;
  if (t.length < 1e4)
    e.push(...t);
  else
    for (; r < t.length; )
      e.push(...t.slice(r, r + 1e4)), r += 1e4;
}
function Bg(e) {
  const t = {};
  let r = -1, u, o, a, l, c, f, p;
  const h = new HS(e);
  for (; ++r < h.length; ) {
    for (; r in t; )
      r = t[r];
    if (u = h.get(r), r && u[1].type === "chunkFlow" && h.get(r - 1)[1].type === "listItemPrefix" && (f = u[1]._tokenizer.events, a = 0, a < f.length && f[a][1].type === "lineEndingBlank" && (a += 2), a < f.length && f[a][1].type === "content"))
      for (; ++a < f.length && f[a][1].type !== "content"; )
        f[a][1].type === "chunkText" && (f[a][1]._isInFirstContentOfListItem = !0, a++);
    if (u[0] === "enter")
      u[1].contentType && (Object.assign(t, zS(h, r)), r = t[r], p = !0);
    else if (u[1]._container) {
      for (a = r, o = void 0; a--; )
        if (l = h.get(a), l[1].type === "lineEnding" || l[1].type === "lineEndingBlank")
          l[0] === "enter" && (o && (h.get(o)[1].type = "lineEndingBlank"), l[1].type = "lineEnding", o = a);
        else if (l[1].type !== "linePrefix") break;
      o && (u[1].end = {
        ...h.get(o)[1].start
      }, c = h.slice(o, r), c.unshift(u), h.splice(o, r - o + 1, c));
    }
  }
  return Kn(e, 0, Number.POSITIVE_INFINITY, h.slice(0)), !p;
}
function zS(e, t) {
  const r = e.get(t)[1], u = e.get(t)[2];
  let o = t - 1;
  const a = [], l = r._tokenizer || u.parser[r.contentType](r.start), c = l.events, f = [], p = {};
  let h, g, v = -1, b = r, P = 0, A = 0;
  const E = [A];
  for (; b; ) {
    for (; e.get(++o)[1] !== b; )
      ;
    a.push(o), b._tokenizer || (h = u.sliceStream(b), b.next || h.push(null), g && l.defineSkip(b.start), b._isInFirstContentOfListItem && (l._gfmTasklistFirstContentOfListItem = !0), l.write(h), b._isInFirstContentOfListItem && (l._gfmTasklistFirstContentOfListItem = void 0)), g = b, b = b.next;
  }
  for (b = r; ++v < c.length; )
    // Find a void token that includes a break.
    c[v][0] === "exit" && c[v - 1][0] === "enter" && c[v][1].type === c[v - 1][1].type && c[v][1].start.line !== c[v][1].end.line && (A = v + 1, E.push(A), b._tokenizer = void 0, b.previous = void 0, b = b.next);
  for (l.events = [], b ? (b._tokenizer = void 0, b.previous = void 0) : E.pop(), v = E.length; v--; ) {
    const F = c.slice(E[v], E[v + 1]), k = a.pop();
    f.push([k, k + F.length - 1]), e.splice(k, 2, F);
  }
  for (f.reverse(), v = -1; ++v < f.length; )
    p[P + f[v][0]] = P + f[v][1], P += f[v][1] - f[v][0] - 1;
  return p;
}
const ZS = {
  resolve: JS,
  tokenize: US
}, YS = {
  partial: !0,
  tokenize: jS
};
function JS(e) {
  return Bg(e), e;
}
function US(e, t) {
  let r;
  return u;
  function u(c) {
    return e.enter("content"), r = e.enter("chunkContent", {
      contentType: "content"
    }), o(c);
  }
  function o(c) {
    return c === null ? a(c) : xe(c) ? e.check(YS, l, a)(c) : (e.consume(c), o);
  }
  function a(c) {
    return e.exit("chunkContent"), e.exit("content"), t(c);
  }
  function l(c) {
    return e.consume(c), e.exit("chunkContent"), r.next = e.enter("chunkContent", {
      contentType: "content",
      previous: r
    }), r = r.next, o;
  }
}
function jS(e, t, r) {
  const u = this;
  return o;
  function o(l) {
    return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), ot(e, a, "linePrefix");
  }
  function a(l) {
    if (l === null || xe(l))
      return r(l);
    const c = u.events[u.events.length - 1];
    return !u.parser.constructs.disable.null.includes("codeIndented") && c && c[1].type === "linePrefix" && c[2].sliceSerialize(c[1], !0).length >= 4 ? t(l) : e.interrupt(u.parser.constructs.flow, r, t)(l);
  }
}
function _g(e, t, r, u, o, a, l, c, f) {
  const p = f || Number.POSITIVE_INFINITY;
  let h = 0;
  return g;
  function g(F) {
    return F === 60 ? (e.enter(u), e.enter(o), e.enter(a), e.consume(F), e.exit(a), v) : F === null || F === 32 || F === 41 || cc(F) ? r(F) : (e.enter(u), e.enter(l), e.enter(c), e.enter("chunkString", {
      contentType: "string"
    }), A(F));
  }
  function v(F) {
    return F === 62 ? (e.enter(a), e.consume(F), e.exit(a), e.exit(o), e.exit(u), t) : (e.enter(c), e.enter("chunkString", {
      contentType: "string"
    }), b(F));
  }
  function b(F) {
    return F === 62 ? (e.exit("chunkString"), e.exit(c), v(F)) : F === null || F === 60 || xe(F) ? r(F) : (e.consume(F), F === 92 ? P : b);
  }
  function P(F) {
    return F === 60 || F === 62 || F === 92 ? (e.consume(F), b) : b(F);
  }
  function A(F) {
    return !h && (F === null || F === 41 || nn(F)) ? (e.exit("chunkString"), e.exit(c), e.exit(l), e.exit(u), t(F)) : h < p && F === 40 ? (e.consume(F), h++, A) : F === 41 ? (e.consume(F), h--, A) : F === null || F === 32 || F === 40 || cc(F) ? r(F) : (e.consume(F), F === 92 ? E : A);
  }
  function E(F) {
    return F === 40 || F === 41 || F === 92 ? (e.consume(F), A) : A(F);
  }
}
function Gg(e, t, r, u, o, a) {
  const l = this;
  let c = 0, f;
  return p;
  function p(b) {
    return e.enter(u), e.enter(o), e.consume(b), e.exit(o), e.enter(a), h;
  }
  function h(b) {
    return c > 999 || b === null || b === 91 || b === 93 && !f || // To do: remove in the future once we’ve switched from
    // `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
    // which doesn’t need this.
    // Hidden footnotes hook.
    /* c8 ignore next 3 */
    b === 94 && !c && "_hiddenFootnoteSupport" in l.parser.constructs ? r(b) : b === 93 ? (e.exit(a), e.enter(o), e.consume(b), e.exit(o), e.exit(u), t) : xe(b) ? (e.enter("lineEnding"), e.consume(b), e.exit("lineEnding"), h) : (e.enter("chunkString", {
      contentType: "string"
    }), g(b));
  }
  function g(b) {
    return b === null || b === 91 || b === 93 || xe(b) || c++ > 999 ? (e.exit("chunkString"), h(b)) : (e.consume(b), f || (f = !Ue(b)), b === 92 ? v : g);
  }
  function v(b) {
    return b === 91 || b === 92 || b === 93 ? (e.consume(b), c++, g) : g(b);
  }
}
function Lg(e, t, r, u, o, a) {
  let l;
  return c;
  function c(v) {
    return v === 34 || v === 39 || v === 40 ? (e.enter(u), e.enter(o), e.consume(v), e.exit(o), l = v === 40 ? 41 : v, f) : r(v);
  }
  function f(v) {
    return v === l ? (e.enter(o), e.consume(v), e.exit(o), e.exit(u), t) : (e.enter(a), p(v));
  }
  function p(v) {
    return v === l ? (e.exit(a), f(l)) : v === null ? r(v) : xe(v) ? (e.enter("lineEnding"), e.consume(v), e.exit("lineEnding"), ot(e, p, "linePrefix")) : (e.enter("chunkString", {
      contentType: "string"
    }), h(v));
  }
  function h(v) {
    return v === l || v === null || xe(v) ? (e.exit("chunkString"), p(v)) : (e.consume(v), v === 92 ? g : h);
  }
  function g(v) {
    return v === l || v === 92 ? (e.consume(v), h) : h(v);
  }
}
function Zu(e, t) {
  let r;
  return u;
  function u(o) {
    return xe(o) ? (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), r = !0, u) : Ue(o) ? ot(e, u, r ? "linePrefix" : "lineSuffix")(o) : t(o);
  }
}
const QS = {
  name: "definition",
  tokenize: $S
}, qS = {
  partial: !0,
  tokenize: KS
};
function $S(e, t, r) {
  const u = this;
  let o;
  return a;
  function a(b) {
    return e.enter("definition"), l(b);
  }
  function l(b) {
    return Gg.call(
      u,
      e,
      c,
      // Note: we don’t need to reset the way `markdown-rs` does.
      r,
      "definitionLabel",
      "definitionLabelMarker",
      "definitionLabelString"
    )(b);
  }
  function c(b) {
    return o = zi(u.sliceSerialize(u.events[u.events.length - 1][1]).slice(1, -1)), b === 58 ? (e.enter("definitionMarker"), e.consume(b), e.exit("definitionMarker"), f) : r(b);
  }
  function f(b) {
    return nn(b) ? Zu(e, p)(b) : p(b);
  }
  function p(b) {
    return _g(
      e,
      h,
      // Note: we don’t need to reset the way `markdown-rs` does.
      r,
      "definitionDestination",
      "definitionDestinationLiteral",
      "definitionDestinationLiteralMarker",
      "definitionDestinationRaw",
      "definitionDestinationString"
    )(b);
  }
  function h(b) {
    return e.attempt(qS, g, g)(b);
  }
  function g(b) {
    return Ue(b) ? ot(e, v, "whitespace")(b) : v(b);
  }
  function v(b) {
    return b === null || xe(b) ? (e.exit("definition"), u.parser.defined.push(o), t(b)) : r(b);
  }
}
function KS(e, t, r) {
  return u;
  function u(c) {
    return nn(c) ? Zu(e, o)(c) : r(c);
  }
  function o(c) {
    return Lg(e, a, r, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(c);
  }
  function a(c) {
    return Ue(c) ? ot(e, l, "whitespace")(c) : l(c);
  }
  function l(c) {
    return c === null || xe(c) ? t(c) : r(c);
  }
}
const eE = {
  name: "hardBreakEscape",
  tokenize: tE
};
function tE(e, t, r) {
  return u;
  function u(a) {
    return e.enter("hardBreakEscape"), e.consume(a), o;
  }
  function o(a) {
    return xe(a) ? (e.exit("hardBreakEscape"), t(a)) : r(a);
  }
}
const nE = {
  name: "headingAtx",
  resolve: rE,
  tokenize: iE
};
function rE(e, t) {
  let r = e.length - 2, u = 3, o, a;
  return e[u][1].type === "whitespace" && (u += 2), r - 2 > u && e[r][1].type === "whitespace" && (r -= 2), e[r][1].type === "atxHeadingSequence" && (u === r - 1 || r - 4 > u && e[r - 2][1].type === "whitespace") && (r -= u + 1 === r ? 2 : 4), r > u && (o = {
    type: "atxHeadingText",
    start: e[u][1].start,
    end: e[r][1].end
  }, a = {
    type: "chunkText",
    start: e[u][1].start,
    end: e[r][1].end,
    contentType: "text"
  }, Kn(e, u, r - u + 1, [["enter", o, t], ["enter", a, t], ["exit", a, t], ["exit", o, t]])), e;
}
function iE(e, t, r) {
  let u = 0;
  return o;
  function o(h) {
    return e.enter("atxHeading"), a(h);
  }
  function a(h) {
    return e.enter("atxHeadingSequence"), l(h);
  }
  function l(h) {
    return h === 35 && u++ < 6 ? (e.consume(h), l) : h === null || nn(h) ? (e.exit("atxHeadingSequence"), c(h)) : r(h);
  }
  function c(h) {
    return h === 35 ? (e.enter("atxHeadingSequence"), f(h)) : h === null || xe(h) ? (e.exit("atxHeading"), t(h)) : Ue(h) ? ot(e, c, "whitespace")(h) : (e.enter("atxHeadingText"), p(h));
  }
  function f(h) {
    return h === 35 ? (e.consume(h), f) : (e.exit("atxHeadingSequence"), c(h));
  }
  function p(h) {
    return h === null || h === 35 || nn(h) ? (e.exit("atxHeadingText"), c(h)) : (e.consume(h), p);
  }
}
const uE = [
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
], Np = ["pre", "script", "style", "textarea"], oE = {
  concrete: !0,
  name: "htmlFlow",
  resolveTo: lE,
  tokenize: cE
}, sE = {
  partial: !0,
  tokenize: dE
}, aE = {
  partial: !0,
  tokenize: fE
};
function lE(e) {
  let t = e.length;
  for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"); )
    ;
  return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
}
function cE(e, t, r) {
  const u = this;
  let o, a, l, c, f;
  return p;
  function p(w) {
    return h(w);
  }
  function h(w) {
    return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(w), g;
  }
  function g(w) {
    return w === 33 ? (e.consume(w), v) : w === 47 ? (e.consume(w), a = !0, A) : w === 63 ? (e.consume(w), o = 3, u.interrupt ? t : S) : $n(w) ? (e.consume(w), l = String.fromCharCode(w), E) : r(w);
  }
  function v(w) {
    return w === 45 ? (e.consume(w), o = 2, b) : w === 91 ? (e.consume(w), o = 5, c = 0, P) : $n(w) ? (e.consume(w), o = 4, u.interrupt ? t : S) : r(w);
  }
  function b(w) {
    return w === 45 ? (e.consume(w), u.interrupt ? t : S) : r(w);
  }
  function P(w) {
    const Ye = "CDATA[";
    return w === Ye.charCodeAt(c++) ? (e.consume(w), c === Ye.length ? u.interrupt ? t : j : P) : r(w);
  }
  function A(w) {
    return $n(w) ? (e.consume(w), l = String.fromCharCode(w), E) : r(w);
  }
  function E(w) {
    if (w === null || w === 47 || w === 62 || nn(w)) {
      const Ye = w === 47, me = l.toLowerCase();
      return !Ye && !a && Np.includes(me) ? (o = 1, u.interrupt ? t(w) : j(w)) : uE.includes(l.toLowerCase()) ? (o = 6, Ye ? (e.consume(w), F) : u.interrupt ? t(w) : j(w)) : (o = 7, u.interrupt && !u.parser.lazy[u.now().line] ? r(w) : a ? k(w) : L(w));
    }
    return w === 45 || hn(w) ? (e.consume(w), l += String.fromCharCode(w), E) : r(w);
  }
  function F(w) {
    return w === 62 ? (e.consume(w), u.interrupt ? t : j) : r(w);
  }
  function k(w) {
    return Ue(w) ? (e.consume(w), k) : ne(w);
  }
  function L(w) {
    return w === 47 ? (e.consume(w), ne) : w === 58 || w === 95 || $n(w) ? (e.consume(w), D) : Ue(w) ? (e.consume(w), L) : ne(w);
  }
  function D(w) {
    return w === 45 || w === 46 || w === 58 || w === 95 || hn(w) ? (e.consume(w), D) : H(w);
  }
  function H(w) {
    return w === 61 ? (e.consume(w), G) : Ue(w) ? (e.consume(w), H) : L(w);
  }
  function G(w) {
    return w === null || w === 60 || w === 61 || w === 62 || w === 96 ? r(w) : w === 34 || w === 39 ? (e.consume(w), f = w, z) : Ue(w) ? (e.consume(w), G) : N(w);
  }
  function z(w) {
    return w === f ? (e.consume(w), f = null, V) : w === null || xe(w) ? r(w) : (e.consume(w), z);
  }
  function N(w) {
    return w === null || w === 34 || w === 39 || w === 47 || w === 60 || w === 61 || w === 62 || w === 96 || nn(w) ? H(w) : (e.consume(w), N);
  }
  function V(w) {
    return w === 47 || w === 62 || Ue(w) ? L(w) : r(w);
  }
  function ne(w) {
    return w === 62 ? (e.consume(w), Q) : r(w);
  }
  function Q(w) {
    return w === null || xe(w) ? j(w) : Ue(w) ? (e.consume(w), Q) : r(w);
  }
  function j(w) {
    return w === 45 && o === 2 ? (e.consume(w), pe) : w === 60 && o === 1 ? (e.consume(w), fe) : w === 62 && o === 4 ? (e.consume(w), We) : w === 63 && o === 3 ? (e.consume(w), S) : w === 93 && o === 5 ? (e.consume(w), je) : xe(w) && (o === 6 || o === 7) ? (e.exit("htmlFlowData"), e.check(sE, Le, te)(w)) : w === null || xe(w) ? (e.exit("htmlFlowData"), te(w)) : (e.consume(w), j);
  }
  function te(w) {
    return e.check(aE, ee, Le)(w);
  }
  function ee(w) {
    return e.enter("lineEnding"), e.consume(w), e.exit("lineEnding"), K;
  }
  function K(w) {
    return w === null || xe(w) ? te(w) : (e.enter("htmlFlowData"), j(w));
  }
  function pe(w) {
    return w === 45 ? (e.consume(w), S) : j(w);
  }
  function fe(w) {
    return w === 47 ? (e.consume(w), l = "", Se) : j(w);
  }
  function Se(w) {
    if (w === 62) {
      const Ye = l.toLowerCase();
      return Np.includes(Ye) ? (e.consume(w), We) : j(w);
    }
    return $n(w) && l.length < 8 ? (e.consume(w), l += String.fromCharCode(w), Se) : j(w);
  }
  function je(w) {
    return w === 93 ? (e.consume(w), S) : j(w);
  }
  function S(w) {
    return w === 62 ? (e.consume(w), We) : w === 45 && o === 2 ? (e.consume(w), S) : j(w);
  }
  function We(w) {
    return w === null || xe(w) ? (e.exit("htmlFlowData"), Le(w)) : (e.consume(w), We);
  }
  function Le(w) {
    return e.exit("htmlFlow"), t(w);
  }
}
function fE(e, t, r) {
  const u = this;
  return o;
  function o(l) {
    return xe(l) ? (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), a) : r(l);
  }
  function a(l) {
    return u.parser.lazy[u.now().line] ? r(l) : t(l);
  }
}
function dE(e, t, r) {
  return u;
  function u(o) {
    return e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), e.attempt(Vs, t, r);
  }
}
const pE = {
  name: "htmlText",
  tokenize: hE
};
function hE(e, t, r) {
  const u = this;
  let o, a, l;
  return c;
  function c(S) {
    return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(S), f;
  }
  function f(S) {
    return S === 33 ? (e.consume(S), p) : S === 47 ? (e.consume(S), H) : S === 63 ? (e.consume(S), L) : $n(S) ? (e.consume(S), N) : r(S);
  }
  function p(S) {
    return S === 45 ? (e.consume(S), h) : S === 91 ? (e.consume(S), a = 0, P) : $n(S) ? (e.consume(S), k) : r(S);
  }
  function h(S) {
    return S === 45 ? (e.consume(S), b) : r(S);
  }
  function g(S) {
    return S === null ? r(S) : S === 45 ? (e.consume(S), v) : xe(S) ? (l = g, fe(S)) : (e.consume(S), g);
  }
  function v(S) {
    return S === 45 ? (e.consume(S), b) : g(S);
  }
  function b(S) {
    return S === 62 ? pe(S) : S === 45 ? v(S) : g(S);
  }
  function P(S) {
    const We = "CDATA[";
    return S === We.charCodeAt(a++) ? (e.consume(S), a === We.length ? A : P) : r(S);
  }
  function A(S) {
    return S === null ? r(S) : S === 93 ? (e.consume(S), E) : xe(S) ? (l = A, fe(S)) : (e.consume(S), A);
  }
  function E(S) {
    return S === 93 ? (e.consume(S), F) : A(S);
  }
  function F(S) {
    return S === 62 ? pe(S) : S === 93 ? (e.consume(S), F) : A(S);
  }
  function k(S) {
    return S === null || S === 62 ? pe(S) : xe(S) ? (l = k, fe(S)) : (e.consume(S), k);
  }
  function L(S) {
    return S === null ? r(S) : S === 63 ? (e.consume(S), D) : xe(S) ? (l = L, fe(S)) : (e.consume(S), L);
  }
  function D(S) {
    return S === 62 ? pe(S) : L(S);
  }
  function H(S) {
    return $n(S) ? (e.consume(S), G) : r(S);
  }
  function G(S) {
    return S === 45 || hn(S) ? (e.consume(S), G) : z(S);
  }
  function z(S) {
    return xe(S) ? (l = z, fe(S)) : Ue(S) ? (e.consume(S), z) : pe(S);
  }
  function N(S) {
    return S === 45 || hn(S) ? (e.consume(S), N) : S === 47 || S === 62 || nn(S) ? V(S) : r(S);
  }
  function V(S) {
    return S === 47 ? (e.consume(S), pe) : S === 58 || S === 95 || $n(S) ? (e.consume(S), ne) : xe(S) ? (l = V, fe(S)) : Ue(S) ? (e.consume(S), V) : pe(S);
  }
  function ne(S) {
    return S === 45 || S === 46 || S === 58 || S === 95 || hn(S) ? (e.consume(S), ne) : Q(S);
  }
  function Q(S) {
    return S === 61 ? (e.consume(S), j) : xe(S) ? (l = Q, fe(S)) : Ue(S) ? (e.consume(S), Q) : V(S);
  }
  function j(S) {
    return S === null || S === 60 || S === 61 || S === 62 || S === 96 ? r(S) : S === 34 || S === 39 ? (e.consume(S), o = S, te) : xe(S) ? (l = j, fe(S)) : Ue(S) ? (e.consume(S), j) : (e.consume(S), ee);
  }
  function te(S) {
    return S === o ? (e.consume(S), o = void 0, K) : S === null ? r(S) : xe(S) ? (l = te, fe(S)) : (e.consume(S), te);
  }
  function ee(S) {
    return S === null || S === 34 || S === 39 || S === 60 || S === 61 || S === 96 ? r(S) : S === 47 || S === 62 || nn(S) ? V(S) : (e.consume(S), ee);
  }
  function K(S) {
    return S === 47 || S === 62 || nn(S) ? V(S) : r(S);
  }
  function pe(S) {
    return S === 62 ? (e.consume(S), e.exit("htmlTextData"), e.exit("htmlText"), t) : r(S);
  }
  function fe(S) {
    return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(S), e.exit("lineEnding"), Se;
  }
  function Se(S) {
    return Ue(S) ? ot(e, je, "linePrefix", u.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(S) : je(S);
  }
  function je(S) {
    return e.enter("htmlTextData"), l(S);
  }
}
const Lc = {
  name: "labelEnd",
  resolveAll: yE,
  resolveTo: vE,
  tokenize: IE
}, gE = {
  tokenize: CE
}, mE = {
  tokenize: xE
}, bE = {
  tokenize: AE
};
function yE(e) {
  let t = -1;
  const r = [];
  for (; ++t < e.length; ) {
    const u = e[t][1];
    if (r.push(e[t]), u.type === "labelImage" || u.type === "labelLink" || u.type === "labelEnd") {
      const o = u.type === "labelImage" ? 4 : 2;
      u.type = "data", t += o;
    }
  }
  return e.length !== r.length && Kn(e, 0, e.length, r), e;
}
function vE(e, t) {
  let r = e.length, u = 0, o, a, l, c;
  for (; r--; )
    if (o = e[r][1], a) {
      if (o.type === "link" || o.type === "labelLink" && o._inactive)
        break;
      e[r][0] === "enter" && o.type === "labelLink" && (o._inactive = !0);
    } else if (l) {
      if (e[r][0] === "enter" && (o.type === "labelImage" || o.type === "labelLink") && !o._balanced && (a = r, o.type !== "labelLink")) {
        u = 2;
        break;
      }
    } else o.type === "labelEnd" && (l = r);
  const f = {
    type: e[a][1].type === "labelLink" ? "link" : "image",
    start: {
      ...e[a][1].start
    },
    end: {
      ...e[e.length - 1][1].end
    }
  }, p = {
    type: "label",
    start: {
      ...e[a][1].start
    },
    end: {
      ...e[l][1].end
    }
  }, h = {
    type: "labelText",
    start: {
      ...e[a + u + 2][1].end
    },
    end: {
      ...e[l - 2][1].start
    }
  };
  return c = [["enter", f, t], ["enter", p, t]], c = Fn(c, e.slice(a + 1, a + u + 3)), c = Fn(c, [["enter", h, t]]), c = Fn(c, Gc(t.parser.constructs.insideSpan.null, e.slice(a + u + 4, l - 3), t)), c = Fn(c, [["exit", h, t], e[l - 2], e[l - 1], ["exit", p, t]]), c = Fn(c, e.slice(l + 1)), c = Fn(c, [["exit", f, t]]), Kn(e, a, e.length, c), e;
}
function IE(e, t, r) {
  const u = this;
  let o = u.events.length, a, l;
  for (; o--; )
    if ((u.events[o][1].type === "labelImage" || u.events[o][1].type === "labelLink") && !u.events[o][1]._balanced) {
      a = u.events[o][1];
      break;
    }
  return c;
  function c(v) {
    return a ? a._inactive ? g(v) : (l = u.parser.defined.includes(zi(u.sliceSerialize({
      start: a.end,
      end: u.now()
    }))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(v), e.exit("labelMarker"), e.exit("labelEnd"), f) : r(v);
  }
  function f(v) {
    return v === 40 ? e.attempt(gE, h, l ? h : g)(v) : v === 91 ? e.attempt(mE, h, l ? p : g)(v) : l ? h(v) : g(v);
  }
  function p(v) {
    return e.attempt(bE, h, g)(v);
  }
  function h(v) {
    return t(v);
  }
  function g(v) {
    return a._balanced = !0, r(v);
  }
}
function CE(e, t, r) {
  return u;
  function u(g) {
    return e.enter("resource"), e.enter("resourceMarker"), e.consume(g), e.exit("resourceMarker"), o;
  }
  function o(g) {
    return nn(g) ? Zu(e, a)(g) : a(g);
  }
  function a(g) {
    return g === 41 ? h(g) : _g(e, l, c, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(g);
  }
  function l(g) {
    return nn(g) ? Zu(e, f)(g) : h(g);
  }
  function c(g) {
    return r(g);
  }
  function f(g) {
    return g === 34 || g === 39 || g === 40 ? Lg(e, p, r, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(g) : h(g);
  }
  function p(g) {
    return nn(g) ? Zu(e, h)(g) : h(g);
  }
  function h(g) {
    return g === 41 ? (e.enter("resourceMarker"), e.consume(g), e.exit("resourceMarker"), e.exit("resource"), t) : r(g);
  }
}
function xE(e, t, r) {
  const u = this;
  return o;
  function o(c) {
    return Gg.call(u, e, a, l, "reference", "referenceMarker", "referenceString")(c);
  }
  function a(c) {
    return u.parser.defined.includes(zi(u.sliceSerialize(u.events[u.events.length - 1][1]).slice(1, -1))) ? t(c) : r(c);
  }
  function l(c) {
    return r(c);
  }
}
function AE(e, t, r) {
  return u;
  function u(a) {
    return e.enter("reference"), e.enter("referenceMarker"), e.consume(a), e.exit("referenceMarker"), o;
  }
  function o(a) {
    return a === 93 ? (e.enter("referenceMarker"), e.consume(a), e.exit("referenceMarker"), e.exit("reference"), t) : r(a);
  }
}
const wE = {
  name: "labelStartImage",
  resolveAll: Lc.resolveAll,
  tokenize: SE
};
function SE(e, t, r) {
  const u = this;
  return o;
  function o(c) {
    return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(c), e.exit("labelImageMarker"), a;
  }
  function a(c) {
    return c === 91 ? (e.enter("labelMarker"), e.consume(c), e.exit("labelMarker"), e.exit("labelImage"), l) : r(c);
  }
  function l(c) {
    return c === 94 && "_hiddenFootnoteSupport" in u.parser.constructs ? r(c) : t(c);
  }
}
const EE = {
  name: "labelStartLink",
  resolveAll: Lc.resolveAll,
  tokenize: FE
};
function FE(e, t, r) {
  const u = this;
  return o;
  function o(l) {
    return e.enter("labelLink"), e.enter("labelMarker"), e.consume(l), e.exit("labelMarker"), e.exit("labelLink"), a;
  }
  function a(l) {
    return l === 94 && "_hiddenFootnoteSupport" in u.parser.constructs ? r(l) : t(l);
  }
}
const Ol = {
  name: "lineEnding",
  tokenize: RE
};
function RE(e, t) {
  return r;
  function r(u) {
    return e.enter("lineEnding"), e.consume(u), e.exit("lineEnding"), ot(e, t, "linePrefix");
  }
}
const xs = {
  name: "thematicBreak",
  tokenize: PE
};
function PE(e, t, r) {
  let u = 0, o;
  return a;
  function a(p) {
    return e.enter("thematicBreak"), l(p);
  }
  function l(p) {
    return o = p, c(p);
  }
  function c(p) {
    return p === o ? (e.enter("thematicBreakSequence"), f(p)) : u >= 3 && (p === null || xe(p)) ? (e.exit("thematicBreak"), t(p)) : r(p);
  }
  function f(p) {
    return p === o ? (e.consume(p), u++, f) : (e.exit("thematicBreakSequence"), Ue(p) ? ot(e, c, "whitespace")(p) : c(p));
  }
}
const en = {
  continuation: {
    tokenize: _E
  },
  exit: LE,
  name: "list",
  tokenize: BE
}, OE = {
  partial: !0,
  tokenize: kE
}, TE = {
  partial: !0,
  tokenize: GE
};
function BE(e, t, r) {
  const u = this, o = u.events[u.events.length - 1];
  let a = o && o[1].type === "linePrefix" ? o[2].sliceSerialize(o[1], !0).length : 0, l = 0;
  return c;
  function c(b) {
    const P = u.containerState.type || (b === 42 || b === 43 || b === 45 ? "listUnordered" : "listOrdered");
    if (P === "listUnordered" ? !u.containerState.marker || b === u.containerState.marker : fc(b)) {
      if (u.containerState.type || (u.containerState.type = P, e.enter(P, {
        _container: !0
      })), P === "listUnordered")
        return e.enter("listItemPrefix"), b === 42 || b === 45 ? e.check(xs, r, p)(b) : p(b);
      if (!u.interrupt || b === 49)
        return e.enter("listItemPrefix"), e.enter("listItemValue"), f(b);
    }
    return r(b);
  }
  function f(b) {
    return fc(b) && ++l < 10 ? (e.consume(b), f) : (!u.interrupt || l < 2) && (u.containerState.marker ? b === u.containerState.marker : b === 41 || b === 46) ? (e.exit("listItemValue"), p(b)) : r(b);
  }
  function p(b) {
    return e.enter("listItemMarker"), e.consume(b), e.exit("listItemMarker"), u.containerState.marker = u.containerState.marker || b, e.check(
      Vs,
      // Can’t be empty when interrupting.
      u.interrupt ? r : h,
      e.attempt(OE, v, g)
    );
  }
  function h(b) {
    return u.containerState.initialBlankLine = !0, a++, v(b);
  }
  function g(b) {
    return Ue(b) ? (e.enter("listItemPrefixWhitespace"), e.consume(b), e.exit("listItemPrefixWhitespace"), v) : r(b);
  }
  function v(b) {
    return u.containerState.size = a + u.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(b);
  }
}
function _E(e, t, r) {
  const u = this;
  return u.containerState._closeFlow = void 0, e.check(Vs, o, a);
  function o(c) {
    return u.containerState.furtherBlankLines = u.containerState.furtherBlankLines || u.containerState.initialBlankLine, ot(e, t, "listItemIndent", u.containerState.size + 1)(c);
  }
  function a(c) {
    return u.containerState.furtherBlankLines || !Ue(c) ? (u.containerState.furtherBlankLines = void 0, u.containerState.initialBlankLine = void 0, l(c)) : (u.containerState.furtherBlankLines = void 0, u.containerState.initialBlankLine = void 0, e.attempt(TE, t, l)(c));
  }
  function l(c) {
    return u.containerState._closeFlow = !0, u.interrupt = void 0, ot(e, e.attempt(en, t, r), "linePrefix", u.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(c);
  }
}
function GE(e, t, r) {
  const u = this;
  return ot(e, o, "listItemIndent", u.containerState.size + 1);
  function o(a) {
    const l = u.events[u.events.length - 1];
    return l && l[1].type === "listItemIndent" && l[2].sliceSerialize(l[1], !0).length === u.containerState.size ? t(a) : r(a);
  }
}
function LE(e) {
  e.exit(this.containerState.type);
}
function kE(e, t, r) {
  const u = this;
  return ot(e, o, "listItemPrefixWhitespace", u.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
  function o(a) {
    const l = u.events[u.events.length - 1];
    return !Ue(a) && l && l[1].type === "listItemPrefixWhitespace" ? t(a) : r(a);
  }
}
const Vp = {
  name: "setextUnderline",
  resolveTo: DE,
  tokenize: ME
};
function DE(e, t) {
  let r = e.length, u, o, a;
  for (; r--; )
    if (e[r][0] === "enter") {
      if (e[r][1].type === "content") {
        u = r;
        break;
      }
      e[r][1].type === "paragraph" && (o = r);
    } else
      e[r][1].type === "content" && e.splice(r, 1), !a && e[r][1].type === "definition" && (a = r);
  const l = {
    type: "setextHeading",
    start: {
      ...e[o][1].start
    },
    end: {
      ...e[e.length - 1][1].end
    }
  };
  return e[o][1].type = "setextHeadingText", a ? (e.splice(o, 0, ["enter", l, t]), e.splice(a + 1, 0, ["exit", e[u][1], t]), e[u][1].end = {
    ...e[a][1].end
  }) : e[u][1] = l, e.push(["exit", l, t]), e;
}
function ME(e, t, r) {
  const u = this;
  let o;
  return a;
  function a(p) {
    let h = u.events.length, g;
    for (; h--; )
      if (u.events[h][1].type !== "lineEnding" && u.events[h][1].type !== "linePrefix" && u.events[h][1].type !== "content") {
        g = u.events[h][1].type === "paragraph";
        break;
      }
    return !u.parser.lazy[u.now().line] && (u.interrupt || g) ? (e.enter("setextHeadingLine"), o = p, l(p)) : r(p);
  }
  function l(p) {
    return e.enter("setextHeadingLineSequence"), c(p);
  }
  function c(p) {
    return p === o ? (e.consume(p), c) : (e.exit("setextHeadingLineSequence"), Ue(p) ? ot(e, f, "lineSuffix")(p) : f(p));
  }
  function f(p) {
    return p === null || xe(p) ? (e.exit("setextHeadingLine"), t(p)) : r(p);
  }
}
const NE = {
  tokenize: VE
};
function VE(e) {
  const t = this, r = e.attempt(
    // Try to parse a blank line.
    Vs,
    u,
    // Try to parse initial flow (essentially, only code).
    e.attempt(this.parser.constructs.flowInitial, o, ot(e, e.attempt(this.parser.constructs.flow, o, e.attempt(ZS, o)), "linePrefix"))
  );
  return r;
  function u(a) {
    if (a === null) {
      e.consume(a);
      return;
    }
    return e.enter("lineEndingBlank"), e.consume(a), e.exit("lineEndingBlank"), t.currentConstruct = void 0, r;
  }
  function o(a) {
    if (a === null) {
      e.consume(a);
      return;
    }
    return e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), t.currentConstruct = void 0, r;
  }
}
const WE = {
  resolveAll: Dg()
}, XE = kg("string"), HE = kg("text");
function kg(e) {
  return {
    resolveAll: Dg(e === "text" ? zE : void 0),
    tokenize: t
  };
  function t(r) {
    const u = this, o = this.parser.constructs[e], a = r.attempt(o, l, c);
    return l;
    function l(h) {
      return p(h) ? a(h) : c(h);
    }
    function c(h) {
      if (h === null) {
        r.consume(h);
        return;
      }
      return r.enter("data"), r.consume(h), f;
    }
    function f(h) {
      return p(h) ? (r.exit("data"), a(h)) : (r.consume(h), f);
    }
    function p(h) {
      if (h === null)
        return !0;
      const g = o[h];
      let v = -1;
      if (g)
        for (; ++v < g.length; ) {
          const b = g[v];
          if (!b.previous || b.previous.call(u, u.previous))
            return !0;
        }
      return !1;
    }
  }
}
function Dg(e) {
  return t;
  function t(r, u) {
    let o = -1, a;
    for (; ++o <= r.length; )
      a === void 0 ? r[o] && r[o][1].type === "data" && (a = o, o++) : (!r[o] || r[o][1].type !== "data") && (o !== a + 2 && (r[a][1].end = r[o - 1][1].end, r.splice(a + 2, o - a - 2), o = a + 2), a = void 0);
    return e ? e(r, u) : r;
  }
}
function zE(e, t) {
  let r = 0;
  for (; ++r <= e.length; )
    if ((r === e.length || e[r][1].type === "lineEnding") && e[r - 1][1].type === "data") {
      const u = e[r - 1][1], o = t.sliceStream(u);
      let a = o.length, l = -1, c = 0, f;
      for (; a--; ) {
        const p = o[a];
        if (typeof p == "string") {
          for (l = p.length; p.charCodeAt(l - 1) === 32; )
            c++, l--;
          if (l) break;
          l = -1;
        } else if (p === -2)
          f = !0, c++;
        else if (p !== -1) {
          a++;
          break;
        }
      }
      if (c) {
        const p = {
          type: r === e.length || f || c < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            _bufferIndex: a ? l : u.start._bufferIndex + l,
            _index: u.start._index + a,
            line: u.end.line,
            column: u.end.column - c,
            offset: u.end.offset - c
          },
          end: {
            ...u.end
          }
        };
        u.end = {
          ...p.start
        }, u.start.offset === u.end.offset ? Object.assign(u, p) : (e.splice(r, 0, ["enter", p, t], ["exit", p, t]), r += 2);
      }
      r++;
    }
  return e;
}
const ZE = {
  42: en,
  43: en,
  45: en,
  48: en,
  49: en,
  50: en,
  51: en,
  52: en,
  53: en,
  54: en,
  55: en,
  56: en,
  57: en,
  62: Pg
}, YE = {
  91: QS
}, JE = {
  [-2]: Pl,
  [-1]: Pl,
  32: Pl
}, UE = {
  35: nE,
  42: xs,
  45: [Vp, xs],
  60: oE,
  61: Vp,
  95: xs,
  96: Mp,
  126: Mp
}, jE = {
  38: Tg,
  92: Og
}, QE = {
  [-5]: Ol,
  [-4]: Ol,
  [-3]: Ol,
  33: wE,
  38: Tg,
  42: dc,
  60: [ES, pE],
  91: EE,
  92: [eE, Og],
  93: Lc,
  95: dc,
  96: NS
}, qE = {
  null: [dc, WE]
}, $E = {
  null: [42, 95]
}, KE = {
  null: []
}, e2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  attentionMarkers: $E,
  contentInitial: YE,
  disable: KE,
  document: ZE,
  flow: UE,
  flowInitial: JE,
  insideSpan: qE,
  string: jE,
  text: QE
}, Symbol.toStringTag, { value: "Module" }));
function t2(e, t, r) {
  let u = {
    _bufferIndex: -1,
    _index: 0,
    line: r && r.line || 1,
    column: r && r.column || 1,
    offset: r && r.offset || 0
  };
  const o = {}, a = [];
  let l = [], c = [];
  const f = {
    attempt: z(H),
    check: z(G),
    consume: k,
    enter: L,
    exit: D,
    interrupt: z(G, {
      interrupt: !0
    })
  }, p = {
    code: null,
    containerState: {},
    defineSkip: A,
    events: [],
    now: P,
    parser: e,
    previous: null,
    sliceSerialize: v,
    sliceStream: b,
    write: g
  };
  let h = t.tokenize.call(p, f);
  return t.resolveAll && a.push(t), p;
  function g(Q) {
    return l = Fn(l, Q), E(), l[l.length - 1] !== null ? [] : (N(t, 0), p.events = Gc(a, p.events, p), p.events);
  }
  function v(Q, j) {
    return r2(b(Q), j);
  }
  function b(Q) {
    return n2(l, Q);
  }
  function P() {
    const {
      _bufferIndex: Q,
      _index: j,
      line: te,
      column: ee,
      offset: K
    } = u;
    return {
      _bufferIndex: Q,
      _index: j,
      line: te,
      column: ee,
      offset: K
    };
  }
  function A(Q) {
    o[Q.line] = Q.column, ne();
  }
  function E() {
    let Q;
    for (; u._index < l.length; ) {
      const j = l[u._index];
      if (typeof j == "string")
        for (Q = u._index, u._bufferIndex < 0 && (u._bufferIndex = 0); u._index === Q && u._bufferIndex < j.length; )
          F(j.charCodeAt(u._bufferIndex));
      else
        F(j);
    }
  }
  function F(Q) {
    h = h(Q);
  }
  function k(Q) {
    xe(Q) ? (u.line++, u.column = 1, u.offset += Q === -3 ? 2 : 1, ne()) : Q !== -1 && (u.column++, u.offset++), u._bufferIndex < 0 ? u._index++ : (u._bufferIndex++, u._bufferIndex === // Points w/ non-negative `_bufferIndex` reference
    // strings.
    /** @type {string} */
    l[u._index].length && (u._bufferIndex = -1, u._index++)), p.previous = Q;
  }
  function L(Q, j) {
    const te = j || {};
    return te.type = Q, te.start = P(), p.events.push(["enter", te, p]), c.push(te), te;
  }
  function D(Q) {
    const j = c.pop();
    return j.end = P(), p.events.push(["exit", j, p]), j;
  }
  function H(Q, j) {
    N(Q, j.from);
  }
  function G(Q, j) {
    j.restore();
  }
  function z(Q, j) {
    return te;
    function te(ee, K, pe) {
      let fe, Se, je, S;
      return Array.isArray(ee) ? (
        /* c8 ignore next 1 */
        Le(ee)
      ) : "tokenize" in ee ? (
        // Looks like a construct.
        Le([
          /** @type {Construct} */
          ee
        ])
      ) : We(ee);
      function We(ke) {
        return yt;
        function yt(Me) {
          const ft = Me !== null && ke[Me], Dt = Me !== null && ke.null, ue = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(ft) ? ft : ft ? [ft] : [],
            ...Array.isArray(Dt) ? Dt : Dt ? [Dt] : []
          ];
          return Le(ue)(Me);
        }
      }
      function Le(ke) {
        return fe = ke, Se = 0, ke.length === 0 ? pe : w(ke[Se]);
      }
      function w(ke) {
        return yt;
        function yt(Me) {
          return S = V(), je = ke, ke.partial || (p.currentConstruct = ke), ke.name && p.parser.constructs.disable.null.includes(ke.name) ? me() : ke.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            j ? Object.assign(Object.create(p), j) : p,
            f,
            Ye,
            me
          )(Me);
        }
      }
      function Ye(ke) {
        return Q(je, S), K;
      }
      function me(ke) {
        return S.restore(), ++Se < fe.length ? w(fe[Se]) : pe;
      }
    }
  }
  function N(Q, j) {
    Q.resolveAll && !a.includes(Q) && a.push(Q), Q.resolve && Kn(p.events, j, p.events.length - j, Q.resolve(p.events.slice(j), p)), Q.resolveTo && (p.events = Q.resolveTo(p.events, p));
  }
  function V() {
    const Q = P(), j = p.previous, te = p.currentConstruct, ee = p.events.length, K = Array.from(c);
    return {
      from: ee,
      restore: pe
    };
    function pe() {
      u = Q, p.previous = j, p.currentConstruct = te, p.events.length = ee, c = K, ne();
    }
  }
  function ne() {
    u.line in o && u.column < 2 && (u.column = o[u.line], u.offset += o[u.line] - 1);
  }
}
function n2(e, t) {
  const r = t.start._index, u = t.start._bufferIndex, o = t.end._index, a = t.end._bufferIndex;
  let l;
  if (r === o)
    l = [e[r].slice(u, a)];
  else {
    if (l = e.slice(r, o), u > -1) {
      const c = l[0];
      typeof c == "string" ? l[0] = c.slice(u) : l.shift();
    }
    a > 0 && l.push(e[o].slice(0, a));
  }
  return l;
}
function r2(e, t) {
  let r = -1;
  const u = [];
  let o;
  for (; ++r < e.length; ) {
    const a = e[r];
    let l;
    if (typeof a == "string")
      l = a;
    else switch (a) {
      case -5: {
        l = "\r";
        break;
      }
      case -4: {
        l = `
`;
        break;
      }
      case -3: {
        l = `\r
`;
        break;
      }
      case -2: {
        l = t ? " " : "	";
        break;
      }
      case -1: {
        if (!t && o) continue;
        l = " ";
        break;
      }
      default:
        l = String.fromCharCode(a);
    }
    o = a === -2, u.push(l);
  }
  return u.join("");
}
function i2(e) {
  const u = {
    constructs: (
      /** @type {FullNormalizedExtension} */
      fS([e2, ...(e || {}).extensions || []])
    ),
    content: o(vS),
    defined: [],
    document: o(CS),
    flow: o(NE),
    lazy: {},
    string: o(XE),
    text: o(HE)
  };
  return u;
  function o(a) {
    return l;
    function l(c) {
      return t2(u, a, c);
    }
  }
}
function u2(e) {
  for (; !Bg(e); )
    ;
  return e;
}
const Wp = /[\0\t\n\r]/g;
function o2() {
  let e = 1, t = "", r = !0, u;
  return o;
  function o(a, l, c) {
    const f = [];
    let p, h, g, v, b;
    for (a = t + (typeof a == "string" ? a.toString() : new TextDecoder(l || void 0).decode(a)), g = 0, t = "", r && (a.charCodeAt(0) === 65279 && g++, r = void 0); g < a.length; ) {
      if (Wp.lastIndex = g, p = Wp.exec(a), v = p && p.index !== void 0 ? p.index : a.length, b = a.charCodeAt(v), !p) {
        t = a.slice(g);
        break;
      }
      if (b === 10 && g === v && u)
        f.push(-3), u = void 0;
      else
        switch (u && (f.push(-5), u = void 0), g < v && (f.push(a.slice(g, v)), e += v - g), b) {
          case 0: {
            f.push(65533), e++;
            break;
          }
          case 9: {
            for (h = Math.ceil(e / 4) * 4, f.push(-2); e++ < h; ) f.push(-1);
            break;
          }
          case 10: {
            f.push(-4), e = 1;
            break;
          }
          default:
            u = !0, e = 1;
        }
      g = v + 1;
    }
    return c && (u && f.push(-5), t && f.push(t), f.push(null)), f;
  }
}
const s2 = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function a2(e) {
  return e.replace(s2, l2);
}
function l2(e, t, r) {
  if (t)
    return t;
  if (r.charCodeAt(0) === 35) {
    const o = r.charCodeAt(1), a = o === 120 || o === 88;
    return Rg(r.slice(a ? 2 : 1), a ? 16 : 10);
  }
  return _c(r) || e;
}
const Mg = {}.hasOwnProperty;
function c2(e, t, r) {
  return typeof t != "string" && (r = t, t = void 0), f2(r)(u2(i2(r).document().write(o2()(e, t, !0))));
}
function f2(e) {
  const t = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: a(bi),
      autolinkProtocol: V,
      autolinkEmail: V,
      atxHeading: a(vt),
      blockQuote: a(Dt),
      characterEscape: V,
      characterReference: V,
      codeFenced: a(ue),
      codeFencedFenceInfo: l,
      codeFencedFenceMeta: l,
      codeIndented: a(ue, l),
      codeText: a(ae, l),
      codeTextData: V,
      data: V,
      codeFlowValue: V,
      definition: a(Ae),
      definitionDestinationString: l,
      definitionLabelString: l,
      definitionTitleString: l,
      emphasis: a(Ee),
      hardBreakEscape: a(rn),
      hardBreakTrailing: a(rn),
      htmlFlow: a(Yt, l),
      htmlFlowData: V,
      htmlText: a(Yt, l),
      htmlTextData: V,
      image: a(mi),
      label: l,
      link: a(bi),
      listItem: a(Mt),
      listItemValue: v,
      listOrdered: a(Nn, g),
      listUnordered: a(Nn),
      paragraph: a(tr),
      reference: w,
      referenceString: l,
      resourceDestinationString: l,
      resourceTitleString: l,
      setextHeading: a(vt),
      strong: a(Cr),
      thematicBreak: a(nr)
    },
    exit: {
      atxHeading: f(),
      atxHeadingSequence: H,
      autolink: f(),
      autolinkEmail: ft,
      autolinkProtocol: Me,
      blockQuote: f(),
      characterEscapeValue: ne,
      characterReferenceMarkerHexadecimal: me,
      characterReferenceMarkerNumeric: me,
      characterReferenceValue: ke,
      characterReference: yt,
      codeFenced: f(E),
      codeFencedFence: A,
      codeFencedFenceInfo: b,
      codeFencedFenceMeta: P,
      codeFlowValue: ne,
      codeIndented: f(F),
      codeText: f(K),
      codeTextData: ne,
      data: ne,
      definition: f(),
      definitionDestinationString: D,
      definitionLabelString: k,
      definitionTitleString: L,
      emphasis: f(),
      hardBreakEscape: f(j),
      hardBreakTrailing: f(j),
      htmlFlow: f(te),
      htmlFlowData: ne,
      htmlText: f(ee),
      htmlTextData: ne,
      image: f(fe),
      label: je,
      labelText: Se,
      lineEnding: Q,
      link: f(pe),
      listItem: f(),
      listOrdered: f(),
      listUnordered: f(),
      paragraph: f(),
      referenceString: Ye,
      resourceDestinationString: S,
      resourceTitleString: We,
      resource: Le,
      setextHeading: f(N),
      setextHeadingLineSequence: z,
      setextHeadingText: G,
      strong: f(),
      thematicBreak: f()
    }
  };
  Ng(t, (e || {}).mdastExtensions || []);
  const r = {};
  return u;
  function u(X) {
    let $ = {
      type: "root",
      children: []
    };
    const he = {
      stack: [$],
      tokenStack: [],
      config: t,
      enter: c,
      exit: p,
      buffer: l,
      resume: h,
      data: r
    }, Oe = [];
    let Te = -1;
    for (; ++Te < X.length; )
      if (X[Te][1].type === "listOrdered" || X[Te][1].type === "listUnordered")
        if (X[Te][0] === "enter")
          Oe.push(Te);
        else {
          const Et = Oe.pop();
          Te = o(X, Et, Te);
        }
    for (Te = -1; ++Te < X.length; ) {
      const Et = t[X[Te][0]];
      Mg.call(Et, X[Te][1].type) && Et[X[Te][1].type].call(Object.assign({
        sliceSerialize: X[Te][2].sliceSerialize
      }, he), X[Te][1]);
    }
    if (he.tokenStack.length > 0) {
      const Et = he.tokenStack[he.tokenStack.length - 1];
      (Et[1] || Xp).call(he, void 0, Et[0]);
    }
    for ($.position = {
      start: Br(X.length > 0 ? X[0][1].start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: Br(X.length > 0 ? X[X.length - 2][1].end : {
        line: 1,
        column: 1,
        offset: 0
      })
    }, Te = -1; ++Te < t.transforms.length; )
      $ = t.transforms[Te]($) || $;
    return $;
  }
  function o(X, $, he) {
    let Oe = $ - 1, Te = -1, Et = !1, Jt, Nt, gn, Ut;
    for (; ++Oe <= he; ) {
      const It = X[Oe];
      switch (It[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          It[0] === "enter" ? Te++ : Te--, Ut = void 0;
          break;
        }
        case "lineEndingBlank": {
          It[0] === "enter" && (Jt && !Ut && !Te && !gn && (gn = Oe), Ut = void 0);
          break;
        }
        case "linePrefix":
        case "listItemValue":
        case "listItemMarker":
        case "listItemPrefix":
        case "listItemPrefixWhitespace":
          break;
        default:
          Ut = void 0;
      }
      if (!Te && It[0] === "enter" && It[1].type === "listItemPrefix" || Te === -1 && It[0] === "exit" && (It[1].type === "listUnordered" || It[1].type === "listOrdered")) {
        if (Jt) {
          let un = Oe;
          for (Nt = void 0; un--; ) {
            const on = X[un];
            if (on[1].type === "lineEnding" || on[1].type === "lineEndingBlank") {
              if (on[0] === "exit") continue;
              Nt && (X[Nt][1].type = "lineEndingBlank", Et = !0), on[1].type = "lineEnding", Nt = un;
            } else if (!(on[1].type === "linePrefix" || on[1].type === "blockQuotePrefix" || on[1].type === "blockQuotePrefixWhitespace" || on[1].type === "blockQuoteMarker" || on[1].type === "listItemIndent")) break;
          }
          gn && (!Nt || gn < Nt) && (Jt._spread = !0), Jt.end = Object.assign({}, Nt ? X[Nt][1].start : It[1].end), X.splice(Nt || Oe, 0, ["exit", Jt, It[2]]), Oe++, he++;
        }
        if (It[1].type === "listItemPrefix") {
          const un = {
            type: "listItem",
            _spread: !1,
            start: Object.assign({}, It[1].start),
            // @ts-expect-error: we’ll add `end` in a second.
            end: void 0
          };
          Jt = un, X.splice(Oe, 0, ["enter", un, It[2]]), Oe++, he++, gn = void 0, Ut = !0;
        }
      }
    }
    return X[$][1]._spread = Et, he;
  }
  function a(X, $) {
    return he;
    function he(Oe) {
      c.call(this, X(Oe), Oe), $ && $.call(this, Oe);
    }
  }
  function l() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function c(X, $, he) {
    this.stack[this.stack.length - 1].children.push(X), this.stack.push(X), this.tokenStack.push([$, he || void 0]), X.position = {
      start: Br($.start),
      // @ts-expect-error: `end` will be patched later.
      end: void 0
    };
  }
  function f(X) {
    return $;
    function $(he) {
      X && X.call(this, he), p.call(this, he);
    }
  }
  function p(X, $) {
    const he = this.stack.pop(), Oe = this.tokenStack.pop();
    if (Oe)
      Oe[0].type !== X.type && ($ ? $.call(this, X, Oe[0]) : (Oe[1] || Xp).call(this, X, Oe[0]));
    else throw new Error("Cannot close `" + X.type + "` (" + zu({
      start: X.start,
      end: X.end
    }) + "): it’s not open");
    he.position.end = Br(X.end);
  }
  function h() {
    return lS(this.stack.pop());
  }
  function g() {
    this.data.expectingFirstListItemValue = !0;
  }
  function v(X) {
    if (this.data.expectingFirstListItemValue) {
      const $ = this.stack[this.stack.length - 2];
      $.start = Number.parseInt(this.sliceSerialize(X), 10), this.data.expectingFirstListItemValue = void 0;
    }
  }
  function b() {
    const X = this.resume(), $ = this.stack[this.stack.length - 1];
    $.lang = X;
  }
  function P() {
    const X = this.resume(), $ = this.stack[this.stack.length - 1];
    $.meta = X;
  }
  function A() {
    this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
  }
  function E() {
    const X = this.resume(), $ = this.stack[this.stack.length - 1];
    $.value = X.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
  }
  function F() {
    const X = this.resume(), $ = this.stack[this.stack.length - 1];
    $.value = X.replace(/(\r?\n|\r)$/g, "");
  }
  function k(X) {
    const $ = this.resume(), he = this.stack[this.stack.length - 1];
    he.label = $, he.identifier = zi(this.sliceSerialize(X)).toLowerCase();
  }
  function L() {
    const X = this.resume(), $ = this.stack[this.stack.length - 1];
    $.title = X;
  }
  function D() {
    const X = this.resume(), $ = this.stack[this.stack.length - 1];
    $.url = X;
  }
  function H(X) {
    const $ = this.stack[this.stack.length - 1];
    if (!$.depth) {
      const he = this.sliceSerialize(X).length;
      $.depth = he;
    }
  }
  function G() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function z(X) {
    const $ = this.stack[this.stack.length - 1];
    $.depth = this.sliceSerialize(X).codePointAt(0) === 61 ? 1 : 2;
  }
  function N() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function V(X) {
    const he = this.stack[this.stack.length - 1].children;
    let Oe = he[he.length - 1];
    (!Oe || Oe.type !== "text") && (Oe = au(), Oe.position = {
      start: Br(X.start),
      // @ts-expect-error: we’ll add `end` later.
      end: void 0
    }, he.push(Oe)), this.stack.push(Oe);
  }
  function ne(X) {
    const $ = this.stack.pop();
    $.value += this.sliceSerialize(X), $.position.end = Br(X.end);
  }
  function Q(X) {
    const $ = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const he = $.children[$.children.length - 1];
      he.position.end = Br(X.end), this.data.atHardBreak = void 0;
      return;
    }
    !this.data.setextHeadingSlurpLineEnding && t.canContainEols.includes($.type) && (V.call(this, X), ne.call(this, X));
  }
  function j() {
    this.data.atHardBreak = !0;
  }
  function te() {
    const X = this.resume(), $ = this.stack[this.stack.length - 1];
    $.value = X;
  }
  function ee() {
    const X = this.resume(), $ = this.stack[this.stack.length - 1];
    $.value = X;
  }
  function K() {
    const X = this.resume(), $ = this.stack[this.stack.length - 1];
    $.value = X;
  }
  function pe() {
    const X = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const $ = this.data.referenceType || "shortcut";
      X.type += "Reference", X.referenceType = $, delete X.url, delete X.title;
    } else
      delete X.identifier, delete X.label;
    this.data.referenceType = void 0;
  }
  function fe() {
    const X = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const $ = this.data.referenceType || "shortcut";
      X.type += "Reference", X.referenceType = $, delete X.url, delete X.title;
    } else
      delete X.identifier, delete X.label;
    this.data.referenceType = void 0;
  }
  function Se(X) {
    const $ = this.sliceSerialize(X), he = this.stack[this.stack.length - 2];
    he.label = a2($), he.identifier = zi($).toLowerCase();
  }
  function je() {
    const X = this.stack[this.stack.length - 1], $ = this.resume(), he = this.stack[this.stack.length - 1];
    if (this.data.inReference = !0, he.type === "link") {
      const Oe = X.children;
      he.children = Oe;
    } else
      he.alt = $;
  }
  function S() {
    const X = this.resume(), $ = this.stack[this.stack.length - 1];
    $.url = X;
  }
  function We() {
    const X = this.resume(), $ = this.stack[this.stack.length - 1];
    $.title = X;
  }
  function Le() {
    this.data.inReference = void 0;
  }
  function w() {
    this.data.referenceType = "collapsed";
  }
  function Ye(X) {
    const $ = this.resume(), he = this.stack[this.stack.length - 1];
    he.label = $, he.identifier = zi(this.sliceSerialize(X)).toLowerCase(), this.data.referenceType = "full";
  }
  function me(X) {
    this.data.characterReferenceType = X.type;
  }
  function ke(X) {
    const $ = this.sliceSerialize(X), he = this.data.characterReferenceType;
    let Oe;
    he ? (Oe = Rg($, he === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : Oe = _c($);
    const Te = this.stack[this.stack.length - 1];
    Te.value += Oe;
  }
  function yt(X) {
    const $ = this.stack.pop();
    $.position.end = Br(X.end);
  }
  function Me(X) {
    ne.call(this, X);
    const $ = this.stack[this.stack.length - 1];
    $.url = this.sliceSerialize(X);
  }
  function ft(X) {
    ne.call(this, X);
    const $ = this.stack[this.stack.length - 1];
    $.url = "mailto:" + this.sliceSerialize(X);
  }
  function Dt() {
    return {
      type: "blockquote",
      children: []
    };
  }
  function ue() {
    return {
      type: "code",
      lang: null,
      meta: null,
      value: ""
    };
  }
  function ae() {
    return {
      type: "inlineCode",
      value: ""
    };
  }
  function Ae() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: ""
    };
  }
  function Ee() {
    return {
      type: "emphasis",
      children: []
    };
  }
  function vt() {
    return {
      type: "heading",
      // @ts-expect-error `depth` will be set later.
      depth: 0,
      children: []
    };
  }
  function rn() {
    return {
      type: "break"
    };
  }
  function Yt() {
    return {
      type: "html",
      value: ""
    };
  }
  function mi() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null
    };
  }
  function bi() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function Nn(X) {
    return {
      type: "list",
      ordered: X.type === "listOrdered",
      start: null,
      spread: X._spread,
      children: []
    };
  }
  function Mt(X) {
    return {
      type: "listItem",
      spread: X._spread,
      checked: null,
      children: []
    };
  }
  function tr() {
    return {
      type: "paragraph",
      children: []
    };
  }
  function Cr() {
    return {
      type: "strong",
      children: []
    };
  }
  function au() {
    return {
      type: "text",
      value: ""
    };
  }
  function nr() {
    return {
      type: "thematicBreak"
    };
  }
}
function Br(e) {
  return {
    line: e.line,
    column: e.column,
    offset: e.offset
  };
}
function Ng(e, t) {
  let r = -1;
  for (; ++r < t.length; ) {
    const u = t[r];
    Array.isArray(u) ? Ng(e, u) : d2(e, u);
  }
}
function d2(e, t) {
  let r;
  for (r in t)
    if (Mg.call(t, r))
      switch (r) {
        case "canContainEols": {
          const u = t[r];
          u && e[r].push(...u);
          break;
        }
        case "transforms": {
          const u = t[r];
          u && e[r].push(...u);
          break;
        }
        case "enter":
        case "exit": {
          const u = t[r];
          u && Object.assign(e[r], u);
          break;
        }
      }
}
function Xp(e, t) {
  throw e ? new Error("Cannot close `" + e.type + "` (" + zu({
    start: e.start,
    end: e.end
  }) + "): a different token (`" + t.type + "`, " + zu({
    start: t.start,
    end: t.end
  }) + ") is open") : new Error("Cannot close document, a token (`" + t.type + "`, " + zu({
    start: t.start,
    end: t.end
  }) + ") is still open");
}
function p2(e) {
  const t = this;
  t.parser = r;
  function r(u) {
    return c2(u, {
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
function h2(e, t) {
  const r = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: e.wrap(e.all(t), !0)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function g2(e, t) {
  const r = { type: "element", tagName: "br", properties: {}, children: [] };
  return e.patch(t, r), [e.applyData(t, r), { type: "text", value: `
` }];
}
function m2(e, t) {
  const r = t.value ? t.value + `
` : "", u = {};
  t.lang && (u.className = ["language-" + t.lang]);
  let o = {
    type: "element",
    tagName: "code",
    properties: u,
    children: [{ type: "text", value: r }]
  };
  return t.meta && (o.data = { meta: t.meta }), e.patch(t, o), o = e.applyData(t, o), o = { type: "element", tagName: "pre", properties: {}, children: [o] }, e.patch(t, o), o;
}
function b2(e, t) {
  const r = {
    type: "element",
    tagName: "del",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function y2(e, t) {
  const r = {
    type: "element",
    tagName: "em",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function v2(e, t) {
  const r = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", u = String(t.identifier).toUpperCase(), o = su(u.toLowerCase()), a = e.footnoteOrder.indexOf(u);
  let l, c = e.footnoteCounts.get(u);
  c === void 0 ? (c = 0, e.footnoteOrder.push(u), l = e.footnoteOrder.length) : l = a + 1, c += 1, e.footnoteCounts.set(u, c);
  const f = {
    type: "element",
    tagName: "a",
    properties: {
      href: "#" + r + "fn-" + o,
      id: r + "fnref-" + o + (c > 1 ? "-" + c : ""),
      dataFootnoteRef: !0,
      ariaDescribedBy: ["footnote-label"]
    },
    children: [{ type: "text", value: String(l) }]
  };
  e.patch(t, f);
  const p = {
    type: "element",
    tagName: "sup",
    properties: {},
    children: [f]
  };
  return e.patch(t, p), e.applyData(t, p);
}
function I2(e, t) {
  const r = {
    type: "element",
    tagName: "h" + t.depth,
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function C2(e, t) {
  if (e.options.allowDangerousHtml) {
    const r = { type: "raw", value: t.value };
    return e.patch(t, r), e.applyData(t, r);
  }
}
function Vg(e, t) {
  const r = t.referenceType;
  let u = "]";
  if (r === "collapsed" ? u += "[]" : r === "full" && (u += "[" + (t.label || t.identifier) + "]"), t.type === "imageReference")
    return [{ type: "text", value: "![" + t.alt + u }];
  const o = e.all(t), a = o[0];
  a && a.type === "text" ? a.value = "[" + a.value : o.unshift({ type: "text", value: "[" });
  const l = o[o.length - 1];
  return l && l.type === "text" ? l.value += u : o.push({ type: "text", value: u }), o;
}
function x2(e, t) {
  const r = String(t.identifier).toUpperCase(), u = e.definitionById.get(r);
  if (!u)
    return Vg(e, t);
  const o = { src: su(u.url || ""), alt: t.alt };
  u.title !== null && u.title !== void 0 && (o.title = u.title);
  const a = { type: "element", tagName: "img", properties: o, children: [] };
  return e.patch(t, a), e.applyData(t, a);
}
function A2(e, t) {
  const r = { src: su(t.url) };
  t.alt !== null && t.alt !== void 0 && (r.alt = t.alt), t.title !== null && t.title !== void 0 && (r.title = t.title);
  const u = { type: "element", tagName: "img", properties: r, children: [] };
  return e.patch(t, u), e.applyData(t, u);
}
function w2(e, t) {
  const r = { type: "text", value: t.value.replace(/\r?\n|\r/g, " ") };
  e.patch(t, r);
  const u = {
    type: "element",
    tagName: "code",
    properties: {},
    children: [r]
  };
  return e.patch(t, u), e.applyData(t, u);
}
function S2(e, t) {
  const r = String(t.identifier).toUpperCase(), u = e.definitionById.get(r);
  if (!u)
    return Vg(e, t);
  const o = { href: su(u.url || "") };
  u.title !== null && u.title !== void 0 && (o.title = u.title);
  const a = {
    type: "element",
    tagName: "a",
    properties: o,
    children: e.all(t)
  };
  return e.patch(t, a), e.applyData(t, a);
}
function E2(e, t) {
  const r = { href: su(t.url) };
  t.title !== null && t.title !== void 0 && (r.title = t.title);
  const u = {
    type: "element",
    tagName: "a",
    properties: r,
    children: e.all(t)
  };
  return e.patch(t, u), e.applyData(t, u);
}
function F2(e, t, r) {
  const u = e.all(t), o = r ? R2(r) : Wg(t), a = {}, l = [];
  if (typeof t.checked == "boolean") {
    const h = u[0];
    let g;
    h && h.type === "element" && h.tagName === "p" ? g = h : (g = { type: "element", tagName: "p", properties: {}, children: [] }, u.unshift(g)), g.children.length > 0 && g.children.unshift({ type: "text", value: " " }), g.children.unshift({
      type: "element",
      tagName: "input",
      properties: { type: "checkbox", checked: t.checked, disabled: !0 },
      children: []
    }), a.className = ["task-list-item"];
  }
  let c = -1;
  for (; ++c < u.length; ) {
    const h = u[c];
    (o || c !== 0 || h.type !== "element" || h.tagName !== "p") && l.push({ type: "text", value: `
` }), h.type === "element" && h.tagName === "p" && !o ? l.push(...h.children) : l.push(h);
  }
  const f = u[u.length - 1];
  f && (o || f.type !== "element" || f.tagName !== "p") && l.push({ type: "text", value: `
` });
  const p = { type: "element", tagName: "li", properties: a, children: l };
  return e.patch(t, p), e.applyData(t, p);
}
function R2(e) {
  let t = !1;
  if (e.type === "list") {
    t = e.spread || !1;
    const r = e.children;
    let u = -1;
    for (; !t && ++u < r.length; )
      t = Wg(r[u]);
  }
  return t;
}
function Wg(e) {
  const t = e.spread;
  return t ?? e.children.length > 1;
}
function P2(e, t) {
  const r = {}, u = e.all(t);
  let o = -1;
  for (typeof t.start == "number" && t.start !== 1 && (r.start = t.start); ++o < u.length; ) {
    const l = u[o];
    if (l.type === "element" && l.tagName === "li" && l.properties && Array.isArray(l.properties.className) && l.properties.className.includes("task-list-item")) {
      r.className = ["contains-task-list"];
      break;
    }
  }
  const a = {
    type: "element",
    tagName: t.ordered ? "ol" : "ul",
    properties: r,
    children: e.wrap(u, !0)
  };
  return e.patch(t, a), e.applyData(t, a);
}
function O2(e, t) {
  const r = {
    type: "element",
    tagName: "p",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function T2(e, t) {
  const r = { type: "root", children: e.wrap(e.all(t)) };
  return e.patch(t, r), e.applyData(t, r);
}
function B2(e, t) {
  const r = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function _2(e, t) {
  const r = e.all(t), u = r.shift(), o = [];
  if (u) {
    const l = {
      type: "element",
      tagName: "thead",
      properties: {},
      children: e.wrap([u], !0)
    };
    e.patch(t.children[0], l), o.push(l);
  }
  if (r.length > 0) {
    const l = {
      type: "element",
      tagName: "tbody",
      properties: {},
      children: e.wrap(r, !0)
    }, c = Pc(t.children[1]), f = Cg(t.children[t.children.length - 1]);
    c && f && (l.position = { start: c, end: f }), o.push(l);
  }
  const a = {
    type: "element",
    tagName: "table",
    properties: {},
    children: e.wrap(o, !0)
  };
  return e.patch(t, a), e.applyData(t, a);
}
function G2(e, t, r) {
  const u = r ? r.children : void 0, a = (u ? u.indexOf(t) : 1) === 0 ? "th" : "td", l = r && r.type === "table" ? r.align : void 0, c = l ? l.length : t.children.length;
  let f = -1;
  const p = [];
  for (; ++f < c; ) {
    const g = t.children[f], v = {}, b = l ? l[f] : void 0;
    b && (v.align = b);
    let P = { type: "element", tagName: a, properties: v, children: [] };
    g && (P.children = e.all(g), e.patch(g, P), P = e.applyData(g, P)), p.push(P);
  }
  const h = {
    type: "element",
    tagName: "tr",
    properties: {},
    children: e.wrap(p, !0)
  };
  return e.patch(t, h), e.applyData(t, h);
}
function L2(e, t) {
  const r = {
    type: "element",
    tagName: "td",
    // Assume body cell.
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
const Hp = 9, zp = 32;
function k2(e) {
  const t = String(e), r = /\r?\n|\r/g;
  let u = r.exec(t), o = 0;
  const a = [];
  for (; u; )
    a.push(
      Zp(t.slice(o, u.index), o > 0, !0),
      u[0]
    ), o = u.index + u[0].length, u = r.exec(t);
  return a.push(Zp(t.slice(o), o > 0, !1)), a.join("");
}
function Zp(e, t, r) {
  let u = 0, o = e.length;
  if (t) {
    let a = e.codePointAt(u);
    for (; a === Hp || a === zp; )
      u++, a = e.codePointAt(u);
  }
  if (r) {
    let a = e.codePointAt(o - 1);
    for (; a === Hp || a === zp; )
      o--, a = e.codePointAt(o - 1);
  }
  return o > u ? e.slice(u, o) : "";
}
function D2(e, t) {
  const r = { type: "text", value: k2(String(t.value)) };
  return e.patch(t, r), e.applyData(t, r);
}
function M2(e, t) {
  const r = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return e.patch(t, r), e.applyData(t, r);
}
const N2 = {
  blockquote: h2,
  break: g2,
  code: m2,
  delete: b2,
  emphasis: y2,
  footnoteReference: v2,
  heading: I2,
  html: C2,
  imageReference: x2,
  image: A2,
  inlineCode: w2,
  linkReference: S2,
  link: E2,
  listItem: F2,
  list: P2,
  paragraph: O2,
  // @ts-expect-error: root is different, but hard to type.
  root: T2,
  strong: B2,
  table: _2,
  tableCell: L2,
  tableRow: G2,
  text: D2,
  thematicBreak: M2,
  toml: ys,
  yaml: ys,
  definition: ys,
  footnoteDefinition: ys
};
function ys() {
}
const Xg = -1, Ws = 0, _s = 1, Gs = 2, kc = 3, Dc = 4, Mc = 5, Nc = 6, Hg = 7, zg = 8, Yp = typeof self == "object" ? self : globalThis, V2 = (e, t) => {
  const r = (o, a) => (e.set(a, o), o), u = (o) => {
    if (e.has(o))
      return e.get(o);
    const [a, l] = t[o];
    switch (a) {
      case Ws:
      case Xg:
        return r(l, o);
      case _s: {
        const c = r([], o);
        for (const f of l)
          c.push(u(f));
        return c;
      }
      case Gs: {
        const c = r({}, o);
        for (const [f, p] of l)
          c[u(f)] = u(p);
        return c;
      }
      case kc:
        return r(new Date(l), o);
      case Dc: {
        const { source: c, flags: f } = l;
        return r(new RegExp(c, f), o);
      }
      case Mc: {
        const c = r(/* @__PURE__ */ new Map(), o);
        for (const [f, p] of l)
          c.set(u(f), u(p));
        return c;
      }
      case Nc: {
        const c = r(/* @__PURE__ */ new Set(), o);
        for (const f of l)
          c.add(u(f));
        return c;
      }
      case Hg: {
        const { name: c, message: f } = l;
        return r(new Yp[c](f), o);
      }
      case zg:
        return r(BigInt(l), o);
      case "BigInt":
        return r(Object(BigInt(l)), o);
    }
    return r(new Yp[a](l), o);
  };
  return u;
}, Jp = (e) => V2(/* @__PURE__ */ new Map(), e)(0), Vi = "", { toString: W2 } = {}, { keys: X2 } = Object, Du = (e) => {
  const t = typeof e;
  if (t !== "object" || !e)
    return [Ws, t];
  const r = W2.call(e).slice(8, -1);
  switch (r) {
    case "Array":
      return [_s, Vi];
    case "Object":
      return [Gs, Vi];
    case "Date":
      return [kc, Vi];
    case "RegExp":
      return [Dc, Vi];
    case "Map":
      return [Mc, Vi];
    case "Set":
      return [Nc, Vi];
  }
  return r.includes("Array") ? [_s, r] : r.includes("Error") ? [Hg, r] : [Gs, r];
}, vs = ([e, t]) => e === Ws && (t === "function" || t === "symbol"), H2 = (e, t, r, u) => {
  const o = (l, c) => {
    const f = u.push(l) - 1;
    return r.set(c, f), f;
  }, a = (l) => {
    if (r.has(l))
      return r.get(l);
    let [c, f] = Du(l);
    switch (c) {
      case Ws: {
        let h = l;
        switch (f) {
          case "bigint":
            c = zg, h = l.toString();
            break;
          case "function":
          case "symbol":
            if (e)
              throw new TypeError("unable to serialize " + f);
            h = null;
            break;
          case "undefined":
            return o([Xg], l);
        }
        return o([c, h], l);
      }
      case _s: {
        if (f)
          return o([f, [...l]], l);
        const h = [], g = o([c, h], l);
        for (const v of l)
          h.push(a(v));
        return g;
      }
      case Gs: {
        if (f)
          switch (f) {
            case "BigInt":
              return o([f, l.toString()], l);
            case "Boolean":
            case "Number":
            case "String":
              return o([f, l.valueOf()], l);
          }
        if (t && "toJSON" in l)
          return a(l.toJSON());
        const h = [], g = o([c, h], l);
        for (const v of X2(l))
          (e || !vs(Du(l[v]))) && h.push([a(v), a(l[v])]);
        return g;
      }
      case kc:
        return o([c, l.toISOString()], l);
      case Dc: {
        const { source: h, flags: g } = l;
        return o([c, { source: h, flags: g }], l);
      }
      case Mc: {
        const h = [], g = o([c, h], l);
        for (const [v, b] of l)
          (e || !(vs(Du(v)) || vs(Du(b)))) && h.push([a(v), a(b)]);
        return g;
      }
      case Nc: {
        const h = [], g = o([c, h], l);
        for (const v of l)
          (e || !vs(Du(v))) && h.push(a(v));
        return g;
      }
    }
    const { message: p } = l;
    return o([c, { name: f, message: p }], l);
  };
  return a;
}, Up = (e, { json: t, lossy: r } = {}) => {
  const u = [];
  return H2(!(t || r), !!t, /* @__PURE__ */ new Map(), u)(e), u;
}, Ls = typeof structuredClone == "function" ? (
  /* c8 ignore start */
  (e, t) => t && ("json" in t || "lossy" in t) ? Jp(Up(e, t)) : structuredClone(e)
) : (e, t) => Jp(Up(e, t));
function z2(e, t) {
  const r = [{ type: "text", value: "↩" }];
  return t > 1 && r.push({
    type: "element",
    tagName: "sup",
    properties: {},
    children: [{ type: "text", value: String(t) }]
  }), r;
}
function Z2(e, t) {
  return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
}
function Y2(e) {
  const t = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", r = e.options.footnoteBackContent || z2, u = e.options.footnoteBackLabel || Z2, o = e.options.footnoteLabel || "Footnotes", a = e.options.footnoteLabelTagName || "h2", l = e.options.footnoteLabelProperties || {
    className: ["sr-only"]
  }, c = [];
  let f = -1;
  for (; ++f < e.footnoteOrder.length; ) {
    const p = e.footnoteById.get(
      e.footnoteOrder[f]
    );
    if (!p)
      continue;
    const h = e.all(p), g = String(p.identifier).toUpperCase(), v = su(g.toLowerCase());
    let b = 0;
    const P = [], A = e.footnoteCounts.get(g);
    for (; A !== void 0 && ++b <= A; ) {
      P.length > 0 && P.push({ type: "text", value: " " });
      let k = typeof r == "string" ? r : r(f, b);
      typeof k == "string" && (k = { type: "text", value: k }), P.push({
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + t + "fnref-" + v + (b > 1 ? "-" + b : ""),
          dataFootnoteBackref: "",
          ariaLabel: typeof u == "string" ? u : u(f, b),
          className: ["data-footnote-backref"]
        },
        children: Array.isArray(k) ? k : [k]
      });
    }
    const E = h[h.length - 1];
    if (E && E.type === "element" && E.tagName === "p") {
      const k = E.children[E.children.length - 1];
      k && k.type === "text" ? k.value += " " : E.children.push({ type: "text", value: " " }), E.children.push(...P);
    } else
      h.push(...P);
    const F = {
      type: "element",
      tagName: "li",
      properties: { id: t + "fn-" + v },
      children: e.wrap(h, !0)
    };
    e.patch(p, F), c.push(F);
  }
  if (c.length !== 0)
    return {
      type: "element",
      tagName: "section",
      properties: { dataFootnotes: !0, className: ["footnotes"] },
      children: [
        {
          type: "element",
          tagName: a,
          properties: {
            ...Ls(l),
            id: "footnote-label"
          },
          children: [{ type: "text", value: o }]
        },
        { type: "text", value: `
` },
        {
          type: "element",
          tagName: "ol",
          properties: {},
          children: e.wrap(c, !0)
        },
        { type: "text", value: `
` }
      ]
    };
}
const Zg = (
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
      return Q2;
    if (typeof e == "function")
      return Xs(e);
    if (typeof e == "object")
      return Array.isArray(e) ? J2(e) : U2(e);
    if (typeof e == "string")
      return j2(e);
    throw new Error("Expected function, string, or object as test");
  }
);
function J2(e) {
  const t = [];
  let r = -1;
  for (; ++r < e.length; )
    t[r] = Zg(e[r]);
  return Xs(u);
  function u(...o) {
    let a = -1;
    for (; ++a < t.length; )
      if (t[a].apply(this, o)) return !0;
    return !1;
  }
}
function U2(e) {
  const t = (
    /** @type {Record<string, unknown>} */
    e
  );
  return Xs(r);
  function r(u) {
    const o = (
      /** @type {Record<string, unknown>} */
      /** @type {unknown} */
      u
    );
    let a;
    for (a in e)
      if (o[a] !== t[a]) return !1;
    return !0;
  }
}
function j2(e) {
  return Xs(t);
  function t(r) {
    return r && r.type === e;
  }
}
function Xs(e) {
  return t;
  function t(r, u, o) {
    return !!(q2(r) && e.call(
      this,
      r,
      typeof u == "number" ? u : void 0,
      o || void 0
    ));
  }
}
function Q2() {
  return !0;
}
function q2(e) {
  return e !== null && typeof e == "object" && "type" in e;
}
const Yg = [], $2 = !0, jp = !1, K2 = "skip";
function eF(e, t, r, u) {
  let o;
  typeof t == "function" && typeof r != "function" ? (u = r, r = t) : o = t;
  const a = Zg(o), l = u ? -1 : 1;
  c(e, void 0, [])();
  function c(f, p, h) {
    const g = (
      /** @type {Record<string, unknown>} */
      f && typeof f == "object" ? f : {}
    );
    if (typeof g.type == "string") {
      const b = (
        // `hast`
        typeof g.tagName == "string" ? g.tagName : (
          // `xast`
          typeof g.name == "string" ? g.name : void 0
        )
      );
      Object.defineProperty(v, "name", {
        value: "node (" + (f.type + (b ? "<" + b + ">" : "")) + ")"
      });
    }
    return v;
    function v() {
      let b = Yg, P, A, E;
      if ((!t || a(f, p, h[h.length - 1] || void 0)) && (b = tF(r(f, h)), b[0] === jp))
        return b;
      if ("children" in f && f.children) {
        const F = (
          /** @type {UnistParent} */
          f
        );
        if (F.children && b[0] !== K2)
          for (A = (u ? F.children.length : -1) + l, E = h.concat(F); A > -1 && A < F.children.length; ) {
            const k = F.children[A];
            if (P = c(k, A, E)(), P[0] === jp)
              return P;
            A = typeof P[1] == "number" ? P[1] : A + l;
          }
      }
      return b;
    }
  }
}
function tF(e) {
  return Array.isArray(e) ? e : typeof e == "number" ? [$2, e] : e == null ? Yg : [e];
}
function Jg(e, t, r, u) {
  let o, a, l;
  typeof t == "function" ? (a = void 0, l = t, o = r) : (a = t, l = r, o = u), eF(e, a, c, o);
  function c(f, p) {
    const h = p[p.length - 1], g = h ? h.children.indexOf(f) : void 0;
    return l(f, g, h);
  }
}
const pc = {}.hasOwnProperty, nF = {};
function rF(e, t) {
  const r = t || nF, u = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), l = { ...N2, ...r.handlers }, c = {
    all: p,
    applyData: uF,
    definitionById: u,
    footnoteById: o,
    footnoteCounts: a,
    footnoteOrder: [],
    handlers: l,
    one: f,
    options: r,
    patch: iF,
    wrap: sF
  };
  return Jg(e, function(h) {
    if (h.type === "definition" || h.type === "footnoteDefinition") {
      const g = h.type === "definition" ? u : o, v = String(h.identifier).toUpperCase();
      g.has(v) || g.set(v, h);
    }
  }), c;
  function f(h, g) {
    const v = h.type, b = c.handlers[v];
    if (pc.call(c.handlers, v) && b)
      return b(c, h, g);
    if (c.options.passThrough && c.options.passThrough.includes(v)) {
      if ("children" in h) {
        const { children: A, ...E } = h, F = Ls(E);
        return F.children = c.all(h), F;
      }
      return Ls(h);
    }
    return (c.options.unknownHandler || oF)(c, h, g);
  }
  function p(h) {
    const g = [];
    if ("children" in h) {
      const v = h.children;
      let b = -1;
      for (; ++b < v.length; ) {
        const P = c.one(v[b], h);
        if (P) {
          if (b && v[b - 1].type === "break" && (!Array.isArray(P) && P.type === "text" && (P.value = Qp(P.value)), !Array.isArray(P) && P.type === "element")) {
            const A = P.children[0];
            A && A.type === "text" && (A.value = Qp(A.value));
          }
          Array.isArray(P) ? g.push(...P) : g.push(P);
        }
      }
    }
    return g;
  }
}
function iF(e, t) {
  e.position && (t.position = Nw(e));
}
function uF(e, t) {
  let r = t;
  if (e && e.data) {
    const u = e.data.hName, o = e.data.hChildren, a = e.data.hProperties;
    if (typeof u == "string")
      if (r.type === "element")
        r.tagName = u;
      else {
        const l = "children" in r ? r.children : [r];
        r = { type: "element", tagName: u, properties: {}, children: l };
      }
    r.type === "element" && a && Object.assign(r.properties, Ls(a)), "children" in r && r.children && o !== null && o !== void 0 && (r.children = o);
  }
  return r;
}
function oF(e, t) {
  const r = t.data || {}, u = "value" in t && !(pc.call(r, "hProperties") || pc.call(r, "hChildren")) ? { type: "text", value: t.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, u), e.applyData(t, u);
}
function sF(e, t) {
  const r = [];
  let u = -1;
  for (t && r.push({ type: "text", value: `
` }); ++u < e.length; )
    u && r.push({ type: "text", value: `
` }), r.push(e[u]);
  return t && e.length > 0 && r.push({ type: "text", value: `
` }), r;
}
function Qp(e) {
  let t = 0, r = e.charCodeAt(t);
  for (; r === 9 || r === 32; )
    t++, r = e.charCodeAt(t);
  return e.slice(t);
}
function qp(e, t) {
  const r = rF(e, t), u = r.one(e, void 0), o = Y2(r), a = Array.isArray(u) ? { type: "root", children: u } : u || { type: "root", children: [] };
  return o && a.children.push({ type: "text", value: `
` }, o), a;
}
function aF(e, t) {
  return e && "run" in e ? async function(r, u) {
    const o = (
      /** @type {HastRoot} */
      qp(r, { file: u, ...t })
    );
    await e.run(o, u);
  } : function(r, u) {
    return (
      /** @type {HastRoot} */
      qp(r, { file: u, ...e || t })
    );
  };
}
function $p(e) {
  if (e)
    throw e;
}
var Tl, Kp;
function lF() {
  if (Kp) return Tl;
  Kp = 1;
  var e = Object.prototype.hasOwnProperty, t = Object.prototype.toString, r = Object.defineProperty, u = Object.getOwnPropertyDescriptor, o = function(p) {
    return typeof Array.isArray == "function" ? Array.isArray(p) : t.call(p) === "[object Array]";
  }, a = function(p) {
    if (!p || t.call(p) !== "[object Object]")
      return !1;
    var h = e.call(p, "constructor"), g = p.constructor && p.constructor.prototype && e.call(p.constructor.prototype, "isPrototypeOf");
    if (p.constructor && !h && !g)
      return !1;
    var v;
    for (v in p)
      ;
    return typeof v > "u" || e.call(p, v);
  }, l = function(p, h) {
    r && h.name === "__proto__" ? r(p, h.name, {
      enumerable: !0,
      configurable: !0,
      value: h.newValue,
      writable: !0
    }) : p[h.name] = h.newValue;
  }, c = function(p, h) {
    if (h === "__proto__")
      if (e.call(p, h)) {
        if (u)
          return u(p, h).value;
      } else return;
    return p[h];
  };
  return Tl = function f() {
    var p, h, g, v, b, P, A = arguments[0], E = 1, F = arguments.length, k = !1;
    for (typeof A == "boolean" && (k = A, A = arguments[1] || {}, E = 2), (A == null || typeof A != "object" && typeof A != "function") && (A = {}); E < F; ++E)
      if (p = arguments[E], p != null)
        for (h in p)
          g = c(A, h), v = c(p, h), A !== v && (k && v && (a(v) || (b = o(v))) ? (b ? (b = !1, P = g && o(g) ? g : []) : P = g && a(g) ? g : {}, l(A, { name: h, newValue: f(k, P, v) })) : typeof v < "u" && l(A, { name: h, newValue: v }));
    return A;
  }, Tl;
}
var cF = lF();
const Bl = /* @__PURE__ */ Ns(cF);
function hc(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function fF() {
  const e = [], t = { run: r, use: u };
  return t;
  function r(...o) {
    let a = -1;
    const l = o.pop();
    if (typeof l != "function")
      throw new TypeError("Expected function as last argument, not " + l);
    c(null, ...o);
    function c(f, ...p) {
      const h = e[++a];
      let g = -1;
      if (f) {
        l(f);
        return;
      }
      for (; ++g < o.length; )
        (p[g] === null || p[g] === void 0) && (p[g] = o[g]);
      o = p, h ? dF(h, c)(...p) : l(null, ...p);
    }
  }
  function u(o) {
    if (typeof o != "function")
      throw new TypeError(
        "Expected `middelware` to be a function, not " + o
      );
    return e.push(o), t;
  }
}
function dF(e, t) {
  let r;
  return u;
  function u(...l) {
    const c = e.length > l.length;
    let f;
    c && l.push(o);
    try {
      f = e.apply(this, l);
    } catch (p) {
      const h = (
        /** @type {Error} */
        p
      );
      if (c && r)
        throw h;
      return o(h);
    }
    c || (f && f.then && typeof f.then == "function" ? f.then(a, o) : f instanceof Error ? o(f) : a(f));
  }
  function o(l, ...c) {
    r || (r = !0, t(l, ...c));
  }
  function a(l) {
    o(null, l);
  }
}
const Zn = { basename: pF, dirname: hF, extname: gF, join: mF, sep: "/" };
function pF(e, t) {
  if (t !== void 0 && typeof t != "string")
    throw new TypeError('"ext" argument must be a string');
  ro(e);
  let r = 0, u = -1, o = e.length, a;
  if (t === void 0 || t.length === 0 || t.length > e.length) {
    for (; o--; )
      if (e.codePointAt(o) === 47) {
        if (a) {
          r = o + 1;
          break;
        }
      } else u < 0 && (a = !0, u = o + 1);
    return u < 0 ? "" : e.slice(r, u);
  }
  if (t === e)
    return "";
  let l = -1, c = t.length - 1;
  for (; o--; )
    if (e.codePointAt(o) === 47) {
      if (a) {
        r = o + 1;
        break;
      }
    } else
      l < 0 && (a = !0, l = o + 1), c > -1 && (e.codePointAt(o) === t.codePointAt(c--) ? c < 0 && (u = o) : (c = -1, u = l));
  return r === u ? u = l : u < 0 && (u = e.length), e.slice(r, u);
}
function hF(e) {
  if (ro(e), e.length === 0)
    return ".";
  let t = -1, r = e.length, u;
  for (; --r; )
    if (e.codePointAt(r) === 47) {
      if (u) {
        t = r;
        break;
      }
    } else u || (u = !0);
  return t < 0 ? e.codePointAt(0) === 47 ? "/" : "." : t === 1 && e.codePointAt(0) === 47 ? "//" : e.slice(0, t);
}
function gF(e) {
  ro(e);
  let t = e.length, r = -1, u = 0, o = -1, a = 0, l;
  for (; t--; ) {
    const c = e.codePointAt(t);
    if (c === 47) {
      if (l) {
        u = t + 1;
        break;
      }
      continue;
    }
    r < 0 && (l = !0, r = t + 1), c === 46 ? o < 0 ? o = t : a !== 1 && (a = 1) : o > -1 && (a = -1);
  }
  return o < 0 || r < 0 || // We saw a non-dot character immediately before the dot.
  a === 0 || // The (right-most) trimmed path component is exactly `..`.
  a === 1 && o === r - 1 && o === u + 1 ? "" : e.slice(o, r);
}
function mF(...e) {
  let t = -1, r;
  for (; ++t < e.length; )
    ro(e[t]), e[t] && (r = r === void 0 ? e[t] : r + "/" + e[t]);
  return r === void 0 ? "." : bF(r);
}
function bF(e) {
  ro(e);
  const t = e.codePointAt(0) === 47;
  let r = yF(e, !t);
  return r.length === 0 && !t && (r = "."), r.length > 0 && e.codePointAt(e.length - 1) === 47 && (r += "/"), t ? "/" + r : r;
}
function yF(e, t) {
  let r = "", u = 0, o = -1, a = 0, l = -1, c, f;
  for (; ++l <= e.length; ) {
    if (l < e.length)
      c = e.codePointAt(l);
    else {
      if (c === 47)
        break;
      c = 47;
    }
    if (c === 47) {
      if (!(o === l - 1 || a === 1)) if (o !== l - 1 && a === 2) {
        if (r.length < 2 || u !== 2 || r.codePointAt(r.length - 1) !== 46 || r.codePointAt(r.length - 2) !== 46) {
          if (r.length > 2) {
            if (f = r.lastIndexOf("/"), f !== r.length - 1) {
              f < 0 ? (r = "", u = 0) : (r = r.slice(0, f), u = r.length - 1 - r.lastIndexOf("/")), o = l, a = 0;
              continue;
            }
          } else if (r.length > 0) {
            r = "", u = 0, o = l, a = 0;
            continue;
          }
        }
        t && (r = r.length > 0 ? r + "/.." : "..", u = 2);
      } else
        r.length > 0 ? r += "/" + e.slice(o + 1, l) : r = e.slice(o + 1, l), u = l - o - 1;
      o = l, a = 0;
    } else c === 46 && a > -1 ? a++ : a = -1;
  }
  return r;
}
function ro(e) {
  if (typeof e != "string")
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(e)
    );
}
const vF = { cwd: IF };
function IF() {
  return "/";
}
function gc(e) {
  return !!(e !== null && typeof e == "object" && "href" in e && e.href && "protocol" in e && e.protocol && // @ts-expect-error: indexing is fine.
  e.auth === void 0);
}
function CF(e) {
  if (typeof e == "string")
    e = new URL(e);
  else if (!gc(e)) {
    const t = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + e + "`"
    );
    throw t.code = "ERR_INVALID_ARG_TYPE", t;
  }
  if (e.protocol !== "file:") {
    const t = new TypeError("The URL must be of scheme file");
    throw t.code = "ERR_INVALID_URL_SCHEME", t;
  }
  return xF(e);
}
function xF(e) {
  if (e.hostname !== "") {
    const u = new TypeError(
      'File URL host must be "localhost" or empty on darwin'
    );
    throw u.code = "ERR_INVALID_FILE_URL_HOST", u;
  }
  const t = e.pathname;
  let r = -1;
  for (; ++r < t.length; )
    if (t.codePointAt(r) === 37 && t.codePointAt(r + 1) === 50) {
      const u = t.codePointAt(r + 2);
      if (u === 70 || u === 102) {
        const o = new TypeError(
          "File URL path must not include encoded / characters"
        );
        throw o.code = "ERR_INVALID_FILE_URL_PATH", o;
      }
    }
  return decodeURIComponent(t);
}
const _l = (
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
class Ug {
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
    let r;
    t ? gc(t) ? r = { path: t } : typeof t == "string" || AF(t) ? r = { value: t } : r = t : r = {}, this.cwd = "cwd" in r ? "" : vF.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
    let u = -1;
    for (; ++u < _l.length; ) {
      const a = _l[u];
      a in r && r[a] !== void 0 && r[a] !== null && (this[a] = a === "history" ? [...r[a]] : r[a]);
    }
    let o;
    for (o in r)
      _l.includes(o) || (this[o] = r[o]);
  }
  /**
   * Get the basename (including extname) (example: `'index.min.js'`).
   *
   * @returns {string | undefined}
   *   Basename.
   */
  get basename() {
    return typeof this.path == "string" ? Zn.basename(this.path) : void 0;
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
    Ll(t, "basename"), Gl(t, "basename"), this.path = Zn.join(this.dirname || "", t);
  }
  /**
   * Get the parent path (example: `'~'`).
   *
   * @returns {string | undefined}
   *   Dirname.
   */
  get dirname() {
    return typeof this.path == "string" ? Zn.dirname(this.path) : void 0;
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
    eh(this.basename, "dirname"), this.path = Zn.join(t || "", this.basename);
  }
  /**
   * Get the extname (including dot) (example: `'.js'`).
   *
   * @returns {string | undefined}
   *   Extname.
   */
  get extname() {
    return typeof this.path == "string" ? Zn.extname(this.path) : void 0;
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
    if (Gl(t, "extname"), eh(this.dirname, "extname"), t) {
      if (t.codePointAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (t.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = Zn.join(this.dirname, this.stem + (t || ""));
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
    gc(t) && (t = CF(t)), Ll(t, "path"), this.path !== t && this.history.push(t);
  }
  /**
   * Get the stem (basename w/o extname) (example: `'index.min'`).
   *
   * @returns {string | undefined}
   *   Stem.
   */
  get stem() {
    return typeof this.path == "string" ? Zn.basename(this.path, this.extname) : void 0;
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
    Ll(t, "stem"), Gl(t, "stem"), this.path = Zn.join(this.dirname || "", t + (this.extname || ""));
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
  fail(t, r, u) {
    const o = this.message(t, r, u);
    throw o.fatal = !0, o;
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
  info(t, r, u) {
    const o = this.message(t, r, u);
    return o.fatal = void 0, o;
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
  message(t, r, u) {
    const o = new Lt(
      // @ts-expect-error: the overloads are fine.
      t,
      r,
      u
    );
    return this.path && (o.name = this.path + ":" + o.name, o.file = this.path), o.fatal = !1, this.messages.push(o), o;
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
function Gl(e, t) {
  if (e && e.includes(Zn.sep))
    throw new Error(
      "`" + t + "` cannot be a path: did not expect `" + Zn.sep + "`"
    );
}
function Ll(e, t) {
  if (!e)
    throw new Error("`" + t + "` cannot be empty");
}
function eh(e, t) {
  if (!e)
    throw new Error("Setting `" + t + "` requires `path` to be set too");
}
function AF(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const wF = (
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
    const u = (
      /** @type {Record<string | symbol, Function>} */
      // Prototypes do exist.
      // type-coverage:ignore-next-line
      this.constructor.prototype
    ), o = u[e], a = function() {
      return o.apply(a, arguments);
    };
    return Object.setPrototypeOf(a, u), a;
  }
), SF = {}.hasOwnProperty;
class Vc extends wF {
  /**
   * Create a processor.
   */
  constructor() {
    super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = fF();
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
      new Vc()
    );
    let r = -1;
    for (; ++r < this.attachers.length; ) {
      const u = this.attachers[r];
      t.use(...u);
    }
    return t.data(Bl(!0, {}, this.namespace)), t;
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
  data(t, r) {
    return typeof t == "string" ? arguments.length === 2 ? (Ml("data", this.frozen), this.namespace[t] = r, this) : SF.call(this.namespace, t) && this.namespace[t] || void 0 : t ? (Ml("data", this.frozen), this.namespace = t, this) : this.namespace;
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
      const [r, ...u] = this.attachers[this.freezeIndex];
      if (u[0] === !1)
        continue;
      u[0] === !0 && (u[0] = void 0);
      const o = r.call(t, ...u);
      typeof o == "function" && this.transformers.use(o);
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
    const r = Is(t), u = this.parser || this.Parser;
    return kl("parse", u), u(String(r), r);
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
  process(t, r) {
    const u = this;
    return this.freeze(), kl("process", this.parser || this.Parser), Dl("process", this.compiler || this.Compiler), r ? o(void 0, r) : new Promise(o);
    function o(a, l) {
      const c = Is(t), f = (
        /** @type {HeadTree extends undefined ? Node : HeadTree} */
        /** @type {unknown} */
        u.parse(c)
      );
      u.run(f, c, function(h, g, v) {
        if (h || !g || !v)
          return p(h);
        const b = (
          /** @type {CompileTree extends undefined ? Node : CompileTree} */
          /** @type {unknown} */
          g
        ), P = u.stringify(b, v);
        RF(P) ? v.value = P : v.result = P, p(
          h,
          /** @type {VFileWithOutput<CompileResult>} */
          v
        );
      });
      function p(h, g) {
        h || !g ? l(h) : a ? a(g) : r(void 0, g);
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
    let r = !1, u;
    return this.freeze(), kl("processSync", this.parser || this.Parser), Dl("processSync", this.compiler || this.Compiler), this.process(t, o), nh("processSync", "process", r), u;
    function o(a, l) {
      r = !0, $p(a), u = l;
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
  run(t, r, u) {
    th(t), this.freeze();
    const o = this.transformers;
    return !u && typeof r == "function" && (u = r, r = void 0), u ? a(void 0, u) : new Promise(a);
    function a(l, c) {
      const f = Is(r);
      o.run(t, f, p);
      function p(h, g, v) {
        const b = (
          /** @type {TailTree extends undefined ? Node : TailTree} */
          g || t
        );
        h ? c(h) : l ? l(b) : u(void 0, b, v);
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
  runSync(t, r) {
    let u = !1, o;
    return this.run(t, r, a), nh("runSync", "run", u), o;
    function a(l, c) {
      $p(l), o = c, u = !0;
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
  stringify(t, r) {
    this.freeze();
    const u = Is(r), o = this.compiler || this.Compiler;
    return Dl("stringify", o), th(t), o(t, u);
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
  use(t, ...r) {
    const u = this.attachers, o = this.namespace;
    if (Ml("use", this.frozen), t != null) if (typeof t == "function")
      f(t, r);
    else if (typeof t == "object")
      Array.isArray(t) ? c(t) : l(t);
    else
      throw new TypeError("Expected usable value, not `" + t + "`");
    return this;
    function a(p) {
      if (typeof p == "function")
        f(p, []);
      else if (typeof p == "object")
        if (Array.isArray(p)) {
          const [h, ...g] = (
            /** @type {PluginTuple<Array<unknown>>} */
            p
          );
          f(h, g);
        } else
          l(p);
      else
        throw new TypeError("Expected usable value, not `" + p + "`");
    }
    function l(p) {
      if (!("plugins" in p) && !("settings" in p))
        throw new Error(
          "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither"
        );
      c(p.plugins), p.settings && (o.settings = Bl(!0, o.settings, p.settings));
    }
    function c(p) {
      let h = -1;
      if (p != null) if (Array.isArray(p))
        for (; ++h < p.length; ) {
          const g = p[h];
          a(g);
        }
      else
        throw new TypeError("Expected a list of plugins, not `" + p + "`");
    }
    function f(p, h) {
      let g = -1, v = -1;
      for (; ++g < u.length; )
        if (u[g][0] === p) {
          v = g;
          break;
        }
      if (v === -1)
        u.push([p, ...h]);
      else if (h.length > 0) {
        let [b, ...P] = h;
        const A = u[v][1];
        hc(A) && hc(b) && (b = Bl(!0, A, b)), u[v] = [p, b, ...P];
      }
    }
  }
}
const EF = new Vc().freeze();
function kl(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `parser`");
}
function Dl(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `compiler`");
}
function Ml(e, t) {
  if (t)
    throw new Error(
      "Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function th(e) {
  if (!hc(e) || typeof e.type != "string")
    throw new TypeError("Expected node, got `" + e + "`");
}
function nh(e, t, r) {
  if (!r)
    throw new Error(
      "`" + e + "` finished async. Use `" + t + "` instead"
    );
}
function Is(e) {
  return FF(e) ? e : new Ug(e);
}
function FF(e) {
  return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function RF(e) {
  return typeof e == "string" || PF(e);
}
function PF(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const OF = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", rh = [], ih = { allowDangerousHtml: !0 }, TF = /^(https?|ircs?|mailto|xmpp)$/i, BF = [
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
function _F(e) {
  const t = e.allowedElements, r = e.allowElement, u = e.children || "", o = e.className, a = e.components, l = e.disallowedElements, c = e.rehypePlugins || rh, f = e.remarkPlugins || rh, p = e.remarkRehypeOptions ? { ...e.remarkRehypeOptions, ...ih } : ih, h = e.skipHtml, g = e.unwrapDisallowed, v = e.urlTransform || GF, b = EF().use(p2).use(f).use(aF, p).use(c), P = new Ug();
  typeof u == "string" && (P.value = u);
  for (const k of BF)
    Object.hasOwn(e, k.from) && ("" + k.from + (k.to ? "use `" + k.to + "` instead" : "remove it") + OF + k.id, void 0);
  const A = b.parse(P);
  let E = b.runSync(A, P);
  return o && (E = {
    type: "element",
    tagName: "div",
    properties: { className: o },
    // Assume no doctypes.
    children: (
      /** @type {Array<ElementContent>} */
      E.type === "root" ? E.children : [E]
    )
  }), Jg(E, F), Zw(E, {
    Fragment: R1,
    // @ts-expect-error
    // React components are allowed to return numbers,
    // but not according to the types in hast-util-to-jsx-runtime
    components: a,
    ignoreInvalidStyle: !0,
    jsx: le,
    jsxs: Mn,
    passKeys: !0,
    passNode: !0
  });
  function F(k, L, D) {
    if (k.type === "raw" && D && typeof L == "number")
      return h ? D.children.splice(L, 1) : D.children[L] = { type: "text", value: k.value }, L;
    if (k.type === "element") {
      let H;
      for (H in Rl)
        if (Object.hasOwn(Rl, H) && Object.hasOwn(k.properties, H)) {
          const G = k.properties[H], z = Rl[H];
          (z === null || z.includes(k.tagName)) && (k.properties[H] = v(String(G || ""), H, k));
        }
    }
    if (k.type === "element") {
      let H = t ? !t.includes(k.tagName) : l ? l.includes(k.tagName) : !1;
      if (!H && r && typeof L == "number" && (H = !r(k, L, D)), H && D && typeof L == "number")
        return g && k.children ? D.children.splice(L, 1, ...k.children) : D.children.splice(L, 1), L;
    }
  }
}
function GF(e) {
  const t = e.indexOf(":"), r = e.indexOf("?"), u = e.indexOf("#"), o = e.indexOf("/");
  return (
    // If there is no protocol, it’s relative.
    t === -1 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
    o !== -1 && t > o || r !== -1 && t > r || u !== -1 && t > u || // It is a protocol, it should be allowed.
    TF.test(e.slice(0, t)) ? e : ""
  );
}
function LF(e) {
  e.field;
  const {
    field: t,
    markdown: r
  } = e, { prop: u } = t, {
    getClassNames: o,
    getStyles: a,
    theme: l
  } = kt(), c = {
    color: l.colors.neutral50,
    fontWeight: 400,
    fontSize: "0.75rem",
    gridArea: "description",
    textWrap: "balance",
    lineHeight: "1.5"
  };
  return u.type === "app" ? /* @__PURE__ */ le("p", { className: o("description", e), style: a("description", c, e), children: "Credentials are encrypted." }) : u.description ? /* @__PURE__ */ le("div", { className: o("description", e), style: a("description", c, e), children: /* @__PURE__ */ le(_F, { children: r }) }) : null;
}
function kF(e) {
  const { errors: t } = e, {
    getProps: r,
    theme: u
  } = kt(), o = {
    color: u.colors.danger,
    gridArea: "errors"
  };
  return t.length ? /* @__PURE__ */ le("ul", { ...r("errors", o, e), children: t.map((a) => /* @__PURE__ */ le("li", { ...r("error", o, e), children: a }, a)) }) : null;
}
function DF(e) {
  const {
    text: t,
    field: r
  } = e, { id: u } = r, {
    getProps: o,
    theme: a
  } = kt(), l = {
    color: a.colors.neutral90,
    fontWeight: 450,
    gridArea: "label",
    lineHeight: "1.5"
  };
  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    /* @__PURE__ */ le("label", { htmlFor: u, ...o("label", l, e), children: t })
  );
}
const MF = (e) => {
  const {
    prop: t,
    enabled: r,
    onClick: u,
    component: o
  } = e, {
    getProps: a,
    theme: l
  } = kt(), c = {
    color: l.colors.neutral60,
    display: "inline-flex",
    alignItems: "center",
    padding: `${l.spacing.baseUnit}px ${l.spacing.baseUnit * 1.5}px ${l.spacing.baseUnit}px ${l.spacing.baseUnit * 2.5}px`,
    border: `1px solid ${l.colors.neutral30}`,
    borderRadius: l.borderRadius,
    cursor: "pointer",
    fontSize: "0.8125rem",
    fontWeight: 450,
    gap: l.spacing.baseUnit * 2,
    textWrap: "nowrap"
  };
  return o ? /* @__PURE__ */ le(
    o,
    {
      prop: t,
      enabled: r,
      onClick: u,
      baseStyles: c,
      ...a("optionalFieldButton", c, e)
    }
  ) : /* @__PURE__ */ Mn("button", { onClick: u, type: "button", ...a("optionalFieldButton", c, e), children: [
    /* @__PURE__ */ le("span", { children: r ? "-" : "+" }),
    /* @__PURE__ */ le("span", { style: {
      marginRight: 8
    }, children: t.label || t.name })
  ] });
}, NF = {
  Alert: WF,
  Description: LF,
  Errors: kF,
  Label: DF,
  OptionalFieldButton: MF,
  OptionalFieldsContainer: ({ children: e, baseStyles: t, title: r, expanded: u, onToggle: o }) => /* @__PURE__ */ Mn("div", { style: t, children: [
    /* @__PURE__ */ Mn("button", { onClick: o, children: [
      r,
      " ",
      u ? "▼" : "▶"
    ] }),
    e
  ] }),
  Button: fg,
  ControlInput: dw,
  ControlApp: cw,
  ControlSelect: dg,
  ControlBoolean: fw
}, Wc = Ku({
  // eslint-disable-line @typescript-eslint/no-explicit-any
  classNames: {},
  classNamePrefix: "",
  components: {},
  styles: {},
  theme: Ac,
  unstyled: !1
});
function VF() {
  const e = iu(Wc) ?? {}, t = RA(e.theme ?? {});
  function r() {
    return e.classNamePrefix ?? "";
  }
  function u(c) {
    var h;
    const f = `${(e == null ? void 0 : e.classNamePrefix) ?? "pd-"}${c}`, p = {
      ...((h = e.classNames) == null ? void 0 : h[c]) ?? {}
    };
    return typeof (p == null ? void 0 : p.container) == "function" && (p.container = typeof (p == null ? void 0 : p.container) == "function" ? (...g) => {
      var v;
      return [
        (v = p == null ? void 0 : p.container) == null ? void 0 : v.call(p, ...g),
        f
      ].join(" ");
    } : () => f), p;
  }
  function o(c, f) {
    var p;
    return {
      ...eo,
      ...f ?? {},
      ...((p = e == null ? void 0 : e.components) == null ? void 0 : p[c]) ?? {}
    };
  }
  function a(c, f) {
    var p;
    return hA(((p = e.styles) == null ? void 0 : p[c]) ?? {}, f ?? {});
  }
  function l(c, f) {
    return {
      classNamePrefix: r(),
      classNames: u(c),
      components: o(c, f == null ? void 0 : f.components),
      styles: a(c, f == null ? void 0 : f.styles),
      theme: t
    };
  }
  return {
    getClassNamePrefix: r,
    getClassNames: u,
    getComponents: o,
    getProps: l,
    getStyles: a,
    theme: t
  };
}
function kt() {
  const e = iu(Wc) ?? {}, t = e.theme, r = e.unstyled ? FA : Ac, u = typeof t == "function" ? Yl(r, t(r)) : Yl(r, t);
  function o(f, p) {
    var v;
    const h = `${(e == null ? void 0 : e.classNamePrefix) ?? "pd-"}${f.toLowerCase()}`, g = (v = e.classNames) == null ? void 0 : v[f];
    if (typeof g == "function") {
      const b = g, P = {
        ...p ?? {},
        theme: u
      };
      return [
        h,
        b(P)
      ].filter(Boolean).join(" ");
    }
    return [
      h,
      g
    ].filter(Boolean).join(" ");
  }
  function a() {
    return {
      ...NF,
      ...(e == null ? void 0 : e.components) ?? {}
    };
  }
  function l(f, p, h) {
    var v;
    const g = (v = e.styles) == null ? void 0 : v[f];
    if (typeof g == "function") {
      const b = g, P = {
        ...h ?? {},
        theme: u
      };
      return b(p, P);
    }
    return g ? {
      ...p,
      ...g
    } : p;
  }
  function c(f, p, h) {
    return {
      className: o(f, h),
      style: l(f, p, h)
    };
  }
  return {
    getClassNames: o,
    getComponents: a,
    getProps: c,
    getStyles: l,
    select: VF(),
    theme: u
  };
}
const CR = ({
  children: e,
  ...t
}) => /* @__PURE__ */ le(Wc.Provider, { value: t, children: e });
function WF({ prop: e, component: t }) {
  const { getProps: r } = kt(), u = {
    padding: "1rem",
    borderRadius: "4px",
    marginBottom: "1rem"
  };
  return t ? /* @__PURE__ */ le(t, { prop: e, baseStyles: u, ...r("alert", u, { prop: e, baseStyles: u }) }) : /* @__PURE__ */ le("p", { ...r("alert", u, { prop: e, baseStyles: u }), className: `pd-alert-${e.alertType}`, children: e.content });
}
var Wu = { exports: {} };
Wu.exports;
var uh;
function XF() {
  return uh || (uh = 1, function(e, t) {
    var r = 200, u = "__lodash_hash_undefined__", o = 1, a = 2, l = 9007199254740991, c = "[object Arguments]", f = "[object Array]", p = "[object AsyncFunction]", h = "[object Boolean]", g = "[object Date]", v = "[object Error]", b = "[object Function]", P = "[object GeneratorFunction]", A = "[object Map]", E = "[object Number]", F = "[object Null]", k = "[object Object]", L = "[object Promise]", D = "[object Proxy]", H = "[object RegExp]", G = "[object Set]", z = "[object String]", N = "[object Symbol]", V = "[object Undefined]", ne = "[object WeakMap]", Q = "[object ArrayBuffer]", j = "[object DataView]", te = "[object Float32Array]", ee = "[object Float64Array]", K = "[object Int8Array]", pe = "[object Int16Array]", fe = "[object Int32Array]", Se = "[object Uint8Array]", je = "[object Uint8ClampedArray]", S = "[object Uint16Array]", We = "[object Uint32Array]", Le = /[\\^$.*+?()[\]{}|]/g, w = /^\[object .+?Constructor\]$/, Ye = /^(?:0|[1-9]\d*)$/, me = {};
    me[te] = me[ee] = me[K] = me[pe] = me[fe] = me[Se] = me[je] = me[S] = me[We] = !0, me[c] = me[f] = me[Q] = me[h] = me[j] = me[g] = me[v] = me[b] = me[A] = me[E] = me[k] = me[H] = me[G] = me[z] = me[ne] = !1;
    var ke = typeof Wr == "object" && Wr && Wr.Object === Object && Wr, yt = typeof self == "object" && self && self.Object === Object && self, Me = ke || yt || Function("return this")(), ft = t && !t.nodeType && t, Dt = ft && !0 && e && !e.nodeType && e, ue = Dt && Dt.exports === ft, ae = ue && ke.process, Ae = function() {
      try {
        return ae && ae.binding && ae.binding("util");
      } catch {
      }
    }(), Ee = Ae && Ae.isTypedArray;
    function vt(C, B) {
      for (var J = -1, ie = C == null ? 0 : C.length, nt = 0, Fe = []; ++J < ie; ) {
        var st = C[J];
        B(st, J, C) && (Fe[nt++] = st);
      }
      return Fe;
    }
    function rn(C, B) {
      for (var J = -1, ie = B.length, nt = C.length; ++J < ie; )
        C[nt + J] = B[J];
      return C;
    }
    function Yt(C, B) {
      for (var J = -1, ie = C == null ? 0 : C.length; ++J < ie; )
        if (B(C[J], J, C))
          return !0;
      return !1;
    }
    function mi(C, B) {
      for (var J = -1, ie = Array(C); ++J < C; )
        ie[J] = B(J);
      return ie;
    }
    function bi(C) {
      return function(B) {
        return C(B);
      };
    }
    function Nn(C, B) {
      return C.has(B);
    }
    function Mt(C, B) {
      return C == null ? void 0 : C[B];
    }
    function tr(C) {
      var B = -1, J = Array(C.size);
      return C.forEach(function(ie, nt) {
        J[++B] = [nt, ie];
      }), J;
    }
    function Cr(C, B) {
      return function(J) {
        return C(B(J));
      };
    }
    function au(C) {
      var B = -1, J = Array(C.size);
      return C.forEach(function(ie) {
        J[++B] = ie;
      }), J;
    }
    var nr = Array.prototype, X = Function.prototype, $ = Object.prototype, he = Me["__core-js_shared__"], Oe = X.toString, Te = $.hasOwnProperty, Et = function() {
      var C = /[^.]+$/.exec(he && he.keys && he.keys.IE_PROTO || "");
      return C ? "Symbol(src)_1." + C : "";
    }(), Jt = $.toString, Nt = RegExp(
      "^" + Oe.call(Te).replace(Le, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    ), gn = ue ? Me.Buffer : void 0, Ut = Me.Symbol, It = Me.Uint8Array, un = $.propertyIsEnumerable, on = nr.splice, rr = Ut ? Ut.toStringTag : void 0, io = Object.getOwnPropertySymbols, uo = gn ? gn.isBuffer : void 0, oo = Cr(Object.keys, Object), lu = sn(Me, "DataView"), zr = sn(Me, "Map"), cu = sn(Me, "Promise"), fu = sn(Me, "Set"), yi = sn(Me, "WeakMap"), Zr = sn(Object, "create"), Hs = or(lu), zs = or(zr), du = or(cu), Zs = or(fu), pu = or(yi), so = Ut ? Ut.prototype : void 0, hu = so ? so.valueOf : void 0;
    function ir(C) {
      var B = -1, J = C == null ? 0 : C.length;
      for (this.clear(); ++B < J; ) {
        var ie = C[B];
        this.set(ie[0], ie[1]);
      }
    }
    function Ys() {
      this.__data__ = Zr ? Zr(null) : {}, this.size = 0;
    }
    function Js(C) {
      var B = this.has(C) && delete this.__data__[C];
      return this.size -= B ? 1 : 0, B;
    }
    function Us(C) {
      var B = this.__data__;
      if (Zr) {
        var J = B[C];
        return J === u ? void 0 : J;
      }
      return Te.call(B, C) ? B[C] : void 0;
    }
    function js(C) {
      var B = this.__data__;
      return Zr ? B[C] !== void 0 : Te.call(B, C);
    }
    function Qs(C, B) {
      var J = this.__data__;
      return this.size += this.has(C) ? 0 : 1, J[C] = Zr && B === void 0 ? u : B, this;
    }
    ir.prototype.clear = Ys, ir.prototype.delete = Js, ir.prototype.get = Us, ir.prototype.has = js, ir.prototype.set = Qs;
    function mn(C) {
      var B = -1, J = C == null ? 0 : C.length;
      for (this.clear(); ++B < J; ) {
        var ie = C[B];
        this.set(ie[0], ie[1]);
      }
    }
    function qs() {
      this.__data__ = [], this.size = 0;
    }
    function $s(C) {
      var B = this.__data__, J = Yr(B, C);
      if (J < 0)
        return !1;
      var ie = B.length - 1;
      return J == ie ? B.pop() : on.call(B, J, 1), --this.size, !0;
    }
    function Ks(C) {
      var B = this.__data__, J = Yr(B, C);
      return J < 0 ? void 0 : B[J][1];
    }
    function ea(C) {
      return Yr(this.__data__, C) > -1;
    }
    function ta(C, B) {
      var J = this.__data__, ie = Yr(J, C);
      return ie < 0 ? (++this.size, J.push([C, B])) : J[ie][1] = B, this;
    }
    mn.prototype.clear = qs, mn.prototype.delete = $s, mn.prototype.get = Ks, mn.prototype.has = ea, mn.prototype.set = ta;
    function ur(C) {
      var B = -1, J = C == null ? 0 : C.length;
      for (this.clear(); ++B < J; ) {
        var ie = C[B];
        this.set(ie[0], ie[1]);
      }
    }
    function vi() {
      this.size = 0, this.__data__ = {
        hash: new ir(),
        map: new (zr || mn)(),
        string: new ir()
      };
    }
    function na(C) {
      var B = xr(this, C).delete(C);
      return this.size -= B ? 1 : 0, B;
    }
    function Ii(C) {
      return xr(this, C).get(C);
    }
    function ra(C) {
      return xr(this, C).has(C);
    }
    function ia(C, B) {
      var J = xr(this, C), ie = J.size;
      return J.set(C, B), this.size += J.size == ie ? 0 : 1, this;
    }
    ur.prototype.clear = vi, ur.prototype.delete = na, ur.prototype.get = Ii, ur.prototype.has = ra, ur.prototype.set = ia;
    function Ci(C) {
      var B = -1, J = C == null ? 0 : C.length;
      for (this.__data__ = new ur(); ++B < J; )
        this.add(C[B]);
    }
    function ao(C) {
      return this.__data__.set(C, u), this;
    }
    function lo(C) {
      return this.__data__.has(C);
    }
    Ci.prototype.add = Ci.prototype.push = ao, Ci.prototype.has = lo;
    function Pn(C) {
      var B = this.__data__ = new mn(C);
      this.size = B.size;
    }
    function ua() {
      this.__data__ = new mn(), this.size = 0;
    }
    function oa(C) {
      var B = this.__data__, J = B.delete(C);
      return this.size = B.size, J;
    }
    function sa(C) {
      return this.__data__.get(C);
    }
    function aa(C) {
      return this.__data__.has(C);
    }
    function co(C, B) {
      var J = this.__data__;
      if (J instanceof mn) {
        var ie = J.__data__;
        if (!zr || ie.length < r - 1)
          return ie.push([C, B]), this.size = ++J.size, this;
        J = this.__data__ = new ur(ie);
      }
      return J.set(C, B), this.size = J.size, this;
    }
    Pn.prototype.clear = ua, Pn.prototype.delete = oa, Pn.prototype.get = sa, Pn.prototype.has = aa, Pn.prototype.set = co;
    function fo(C, B) {
      var J = wi(C), ie = !J && wo(C), nt = !J && !ie && bu(C), Fe = !J && !ie && !nt && Fo(C), st = J || ie || nt || Fe, Ct = st ? mi(C.length, String) : [], Xe = Ct.length;
      for (var rt in C)
        Te.call(C, rt) && !(st && // Safari 9 has enumerable `arguments.length` in strict mode.
        (rt == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
        nt && (rt == "offset" || rt == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
        Fe && (rt == "buffer" || rt == "byteLength" || rt == "byteOffset") || // Skip index properties.
        vo(rt, Xe))) && Ct.push(rt);
      return Ct;
    }
    function Yr(C, B) {
      for (var J = C.length; J--; )
        if (Ao(C[J][0], B))
          return J;
      return -1;
    }
    function gu(C, B, J) {
      var ie = B(C);
      return wi(C) ? ie : rn(ie, J(C));
    }
    function Jr(C) {
      return C == null ? C === void 0 ? V : F : rr && rr in Object(C) ? bo(C) : fa(C);
    }
    function mu(C) {
      return jr(C) && Jr(C) == c;
    }
    function Ur(C, B, J, ie, nt) {
      return C === B ? !0 : C == null || B == null || !jr(C) && !jr(B) ? C !== C && B !== B : po(C, B, J, ie, Ur, nt);
    }
    function po(C, B, J, ie, nt, Fe) {
      var st = wi(C), Ct = wi(B), Xe = st ? f : Vn(C), rt = Ct ? f : Vn(B);
      Xe = Xe == c ? k : Xe, rt = rt == c ? k : rt;
      var gt = Xe == k, jt = rt == k, xt = Xe == rt;
      if (xt && bu(C)) {
        if (!bu(B))
          return !1;
        st = !0, gt = !1;
      }
      if (xt && !gt)
        return Fe || (Fe = new Pn()), st || Fo(C) ? xi(C, B, J, ie, nt, Fe) : ca(C, B, Xe, J, ie, nt, Fe);
      if (!(J & o)) {
        var at = gt && Te.call(C, "__wrapped__"), Vt = jt && Te.call(B, "__wrapped__");
        if (at || Vt) {
          var On = at ? C.value() : C, bn = Vt ? B.value() : B;
          return Fe || (Fe = new Pn()), nt(On, bn, J, ie, Fe);
        }
      }
      return xt ? (Fe || (Fe = new Pn()), mo(C, B, J, ie, nt, Fe)) : !1;
    }
    function la(C) {
      if (!Eo(C) || Co(C))
        return !1;
      var B = Si(C) ? Nt : w;
      return B.test(or(C));
    }
    function ho(C) {
      return jr(C) && So(C.length) && !!me[Jr(C)];
    }
    function go(C) {
      if (!xo(C))
        return oo(C);
      var B = [];
      for (var J in Object(C))
        Te.call(C, J) && J != "constructor" && B.push(J);
      return B;
    }
    function xi(C, B, J, ie, nt, Fe) {
      var st = J & o, Ct = C.length, Xe = B.length;
      if (Ct != Xe && !(st && Xe > Ct))
        return !1;
      var rt = Fe.get(C);
      if (rt && Fe.get(B))
        return rt == B;
      var gt = -1, jt = !0, xt = J & a ? new Ci() : void 0;
      for (Fe.set(C, B), Fe.set(B, C); ++gt < Ct; ) {
        var at = C[gt], Vt = B[gt];
        if (ie)
          var On = st ? ie(Vt, at, gt, B, C, Fe) : ie(at, Vt, gt, C, B, Fe);
        if (On !== void 0) {
          if (On)
            continue;
          jt = !1;
          break;
        }
        if (xt) {
          if (!Yt(B, function(bn, Wn) {
            if (!Nn(xt, Wn) && (at === bn || nt(at, bn, J, ie, Fe)))
              return xt.push(Wn);
          })) {
            jt = !1;
            break;
          }
        } else if (!(at === Vt || nt(at, Vt, J, ie, Fe))) {
          jt = !1;
          break;
        }
      }
      return Fe.delete(C), Fe.delete(B), jt;
    }
    function ca(C, B, J, ie, nt, Fe, st) {
      switch (J) {
        case j:
          if (C.byteLength != B.byteLength || C.byteOffset != B.byteOffset)
            return !1;
          C = C.buffer, B = B.buffer;
        case Q:
          return !(C.byteLength != B.byteLength || !Fe(new It(C), new It(B)));
        case h:
        case g:
        case E:
          return Ao(+C, +B);
        case v:
          return C.name == B.name && C.message == B.message;
        case H:
        case z:
          return C == B + "";
        case A:
          var Ct = tr;
        case G:
          var Xe = ie & o;
          if (Ct || (Ct = au), C.size != B.size && !Xe)
            return !1;
          var rt = st.get(C);
          if (rt)
            return rt == B;
          ie |= a, st.set(C, B);
          var gt = xi(Ct(C), Ct(B), ie, nt, Fe, st);
          return st.delete(C), gt;
        case N:
          if (hu)
            return hu.call(C) == hu.call(B);
      }
      return !1;
    }
    function mo(C, B, J, ie, nt, Fe) {
      var st = J & o, Ct = Ai(C), Xe = Ct.length, rt = Ai(B), gt = rt.length;
      if (Xe != gt && !st)
        return !1;
      for (var jt = Xe; jt--; ) {
        var xt = Ct[jt];
        if (!(st ? xt in B : Te.call(B, xt)))
          return !1;
      }
      var at = Fe.get(C);
      if (at && Fe.get(B))
        return at == B;
      var Vt = !0;
      Fe.set(C, B), Fe.set(B, C);
      for (var On = st; ++jt < Xe; ) {
        xt = Ct[jt];
        var bn = C[xt], Wn = B[xt];
        if (ie)
          var yu = st ? ie(Wn, bn, xt, B, C, Fe) : ie(bn, Wn, xt, C, B, Fe);
        if (!(yu === void 0 ? bn === Wn || nt(bn, Wn, J, ie, Fe) : yu)) {
          Vt = !1;
          break;
        }
        On || (On = xt == "constructor");
      }
      if (Vt && !On) {
        var Qr = C.constructor, Ft = B.constructor;
        Qr != Ft && "constructor" in C && "constructor" in B && !(typeof Qr == "function" && Qr instanceof Qr && typeof Ft == "function" && Ft instanceof Ft) && (Vt = !1);
      }
      return Fe.delete(C), Fe.delete(B), Vt;
    }
    function Ai(C) {
      return gu(C, ha, yo);
    }
    function xr(C, B) {
      var J = C.__data__;
      return Io(B) ? J[typeof B == "string" ? "string" : "hash"] : J.map;
    }
    function sn(C, B) {
      var J = Mt(C, B);
      return la(J) ? J : void 0;
    }
    function bo(C) {
      var B = Te.call(C, rr), J = C[rr];
      try {
        C[rr] = void 0;
        var ie = !0;
      } catch {
      }
      var nt = Jt.call(C);
      return ie && (B ? C[rr] = J : delete C[rr]), nt;
    }
    var yo = io ? function(C) {
      return C == null ? [] : (C = Object(C), vt(io(C), function(B) {
        return un.call(C, B);
      }));
    } : tt, Vn = Jr;
    (lu && Vn(new lu(new ArrayBuffer(1))) != j || zr && Vn(new zr()) != A || cu && Vn(cu.resolve()) != L || fu && Vn(new fu()) != G || yi && Vn(new yi()) != ne) && (Vn = function(C) {
      var B = Jr(C), J = B == k ? C.constructor : void 0, ie = J ? or(J) : "";
      if (ie)
        switch (ie) {
          case Hs:
            return j;
          case zs:
            return A;
          case du:
            return L;
          case Zs:
            return G;
          case pu:
            return ne;
        }
      return B;
    });
    function vo(C, B) {
      return B = B ?? l, !!B && (typeof C == "number" || Ye.test(C)) && C > -1 && C % 1 == 0 && C < B;
    }
    function Io(C) {
      var B = typeof C;
      return B == "string" || B == "number" || B == "symbol" || B == "boolean" ? C !== "__proto__" : C === null;
    }
    function Co(C) {
      return !!Et && Et in C;
    }
    function xo(C) {
      var B = C && C.constructor, J = typeof B == "function" && B.prototype || $;
      return C === J;
    }
    function fa(C) {
      return Jt.call(C);
    }
    function or(C) {
      if (C != null) {
        try {
          return Oe.call(C);
        } catch {
        }
        try {
          return C + "";
        } catch {
        }
      }
      return "";
    }
    function Ao(C, B) {
      return C === B || C !== C && B !== B;
    }
    var wo = mu(/* @__PURE__ */ function() {
      return arguments;
    }()) ? mu : function(C) {
      return jr(C) && Te.call(C, "callee") && !un.call(C, "callee");
    }, wi = Array.isArray;
    function da(C) {
      return C != null && So(C.length) && !Si(C);
    }
    var bu = uo || Ke;
    function pa(C, B) {
      return Ur(C, B);
    }
    function Si(C) {
      if (!Eo(C))
        return !1;
      var B = Jr(C);
      return B == b || B == P || B == p || B == D;
    }
    function So(C) {
      return typeof C == "number" && C > -1 && C % 1 == 0 && C <= l;
    }
    function Eo(C) {
      var B = typeof C;
      return C != null && (B == "object" || B == "function");
    }
    function jr(C) {
      return C != null && typeof C == "object";
    }
    var Fo = Ee ? bi(Ee) : ho;
    function ha(C) {
      return da(C) ? fo(C) : go(C);
    }
    function tt() {
      return [];
    }
    function Ke() {
      return !1;
    }
    e.exports = pa;
  }(Wu, Wu.exports)), Wu.exports;
}
var HF = XF();
const zF = /* @__PURE__ */ Ns(HF);
function jg(e) {
  return typeof e == "object" && e && "__lv" in e ? e.__lv.value : e;
}
function ZF(e) {
  if (typeof e == "object" && e && "selectedOptions" in e && Array.isArray(e.selectedOptions)) {
    const t = e.selectedOptions, r = [];
    for (const u of t)
      if (typeof u == "object" && u && "emitValue" in u) {
        const o = u.emitValue;
        typeof o == "object" && o && "__lv" in o ? r.push(o.__lv.value) : r.push(o);
      } else
        return [];
    return r;
  }
  return e && typeof e == "object" && Array.isArray(e.__lv) ? e.__lv : Array.isArray(e) ? e : [];
}
function YF(e) {
  const t = ZF(e.value);
  if (!e.prop.default && typeof t > "u")
    return [
      "required"
    ];
  if (!e.prop.default && Array.isArray(t) && !t.length) return [
    "empty array"
  ];
}
function JF(e) {
  const t = jg(e.value);
  if (t == null || typeof t > "u") return [
    "required"
  ];
}
function UF(e) {
  const {
    prop: t,
    value: r
  } = e, u = jg(r);
  if (!t.default && (u == null || typeof u > "u")) return [
    "required"
  ];
  const o = typeof u == "number" ? u : parseInt(String(u));
  if (Number.isNaN(o)) return [
    "not a number"
  ];
  const a = [];
  return typeof t.min == "number" && o < t.min && a.push("number too small"), typeof t.max == "number" && o > t.max && a.push("number too big"), a;
}
function jF(e) {
  const {
    prop: t,
    value: r
  } = e;
  if (!t.default && (r == null || typeof r > "u")) return [
    "required"
  ];
}
function QF(e) {
  const t = e.auth_type === "oauth", r = JSON.parse(e.custom_fields_json || "[]");
  if ("extracted_custom_fields_names" in e && e.extracted_custom_fields_names) {
    const u = (e.extracted_custom_fields_names || []).map(
      (o) => ({
        name: o
      })
    );
    r.push(...u);
  }
  return r.map((u) => ({
    ...u,
    // if oauth, treat all as optional (they are usually needed for getting access token)
    optional: u.optional || t
  }));
}
function qF(e) {
  const {
    app: t,
    value: r
  } = e;
  if (!t)
    return [
      "app field not registered"
    ];
  if (!r)
    return [
      "no app configured"
    ];
  if (typeof r != "object")
    return [
      "not an app"
    ];
  const u = r;
  if ("authProvisionId" in u && !u.authProvisionId && t.auth_type) {
    const o = [];
    if (t.auth_type === "oauth" && !u.oauth_access_token && o.push("missing oauth token"), t.auth_type === "oauth" || t.auth_type === "keys") {
      const a = QF(t), l = u;
      for (const c of a)
        !c.optional && !l[c.name] && o.push(`missing custom field: ${c.name}`);
    }
    return t.auth_type !== "none" && o.push("no auth provision configured"), o;
  }
}
var Xu = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var $F = Xu.exports, oh;
function KF() {
  return oh || (oh = 1, function(e, t) {
    (function() {
      var r, u = "4.17.21", o = 200, a = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", l = "Expected a function", c = "Invalid `variable` option passed into `_.template`", f = "__lodash_hash_undefined__", p = 500, h = "__lodash_placeholder__", g = 1, v = 2, b = 4, P = 1, A = 2, E = 1, F = 2, k = 4, L = 8, D = 16, H = 32, G = 64, z = 128, N = 256, V = 512, ne = 30, Q = "...", j = 800, te = 16, ee = 1, K = 2, pe = 3, fe = 1 / 0, Se = 9007199254740991, je = 17976931348623157e292, S = NaN, We = 4294967295, Le = We - 1, w = We >>> 1, Ye = [
        ["ary", z],
        ["bind", E],
        ["bindKey", F],
        ["curry", L],
        ["curryRight", D],
        ["flip", V],
        ["partial", H],
        ["partialRight", G],
        ["rearg", N]
      ], me = "[object Arguments]", ke = "[object Array]", yt = "[object AsyncFunction]", Me = "[object Boolean]", ft = "[object Date]", Dt = "[object DOMException]", ue = "[object Error]", ae = "[object Function]", Ae = "[object GeneratorFunction]", Ee = "[object Map]", vt = "[object Number]", rn = "[object Null]", Yt = "[object Object]", mi = "[object Promise]", bi = "[object Proxy]", Nn = "[object RegExp]", Mt = "[object Set]", tr = "[object String]", Cr = "[object Symbol]", au = "[object Undefined]", nr = "[object WeakMap]", X = "[object WeakSet]", $ = "[object ArrayBuffer]", he = "[object DataView]", Oe = "[object Float32Array]", Te = "[object Float64Array]", Et = "[object Int8Array]", Jt = "[object Int16Array]", Nt = "[object Int32Array]", gn = "[object Uint8Array]", Ut = "[object Uint8ClampedArray]", It = "[object Uint16Array]", un = "[object Uint32Array]", on = /\b__p \+= '';/g, rr = /\b(__p \+=) '' \+/g, io = /(__e\(.*?\)|\b__t\)) \+\n'';/g, uo = /&(?:amp|lt|gt|quot|#39);/g, oo = /[&<>"']/g, lu = RegExp(uo.source), zr = RegExp(oo.source), cu = /<%-([\s\S]+?)%>/g, fu = /<%([\s\S]+?)%>/g, yi = /<%=([\s\S]+?)%>/g, Zr = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Hs = /^\w*$/, zs = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, du = /[\\^$.*+?()[\]{}|]/g, Zs = RegExp(du.source), pu = /^\s+/, so = /\s/, hu = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, ir = /\{\n\/\* \[wrapped with (.+)\] \*/, Ys = /,? & /, Js = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Us = /[()=,{}\[\]\/\s]/, js = /\\(\\)?/g, Qs = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, mn = /\w*$/, qs = /^[-+]0x[0-9a-f]+$/i, $s = /^0b[01]+$/i, Ks = /^\[object .+?Constructor\]$/, ea = /^0o[0-7]+$/i, ta = /^(?:0|[1-9]\d*)$/, ur = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, vi = /($^)/, na = /['\n\r\u2028\u2029\\]/g, Ii = "\\ud800-\\udfff", ra = "\\u0300-\\u036f", ia = "\\ufe20-\\ufe2f", Ci = "\\u20d0-\\u20ff", ao = ra + ia + Ci, lo = "\\u2700-\\u27bf", Pn = "a-z\\xdf-\\xf6\\xf8-\\xff", ua = "\\xac\\xb1\\xd7\\xf7", oa = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", sa = "\\u2000-\\u206f", aa = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", co = "A-Z\\xc0-\\xd6\\xd8-\\xde", fo = "\\ufe0e\\ufe0f", Yr = ua + oa + sa + aa, gu = "['’]", Jr = "[" + Ii + "]", mu = "[" + Yr + "]", Ur = "[" + ao + "]", po = "\\d+", la = "[" + lo + "]", ho = "[" + Pn + "]", go = "[^" + Ii + Yr + po + lo + Pn + co + "]", xi = "\\ud83c[\\udffb-\\udfff]", ca = "(?:" + Ur + "|" + xi + ")", mo = "[^" + Ii + "]", Ai = "(?:\\ud83c[\\udde6-\\uddff]){2}", xr = "[\\ud800-\\udbff][\\udc00-\\udfff]", sn = "[" + co + "]", bo = "\\u200d", yo = "(?:" + ho + "|" + go + ")", Vn = "(?:" + sn + "|" + go + ")", vo = "(?:" + gu + "(?:d|ll|m|re|s|t|ve))?", Io = "(?:" + gu + "(?:D|LL|M|RE|S|T|VE))?", Co = ca + "?", xo = "[" + fo + "]?", fa = "(?:" + bo + "(?:" + [mo, Ai, xr].join("|") + ")" + xo + Co + ")*", or = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Ao = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", wo = xo + Co + fa, wi = "(?:" + [la, Ai, xr].join("|") + ")" + wo, da = "(?:" + [mo + Ur + "?", Ur, Ai, xr, Jr].join("|") + ")", bu = RegExp(gu, "g"), pa = RegExp(Ur, "g"), Si = RegExp(xi + "(?=" + xi + ")|" + da + wo, "g"), So = RegExp([
        sn + "?" + ho + "+" + vo + "(?=" + [mu, sn, "$"].join("|") + ")",
        Vn + "+" + Io + "(?=" + [mu, sn + yo, "$"].join("|") + ")",
        sn + "?" + yo + "+" + vo,
        sn + "+" + Io,
        Ao,
        or,
        po,
        wi
      ].join("|"), "g"), Eo = RegExp("[" + bo + Ii + ao + fo + "]"), jr = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Fo = [
        "Array",
        "Buffer",
        "DataView",
        "Date",
        "Error",
        "Float32Array",
        "Float64Array",
        "Function",
        "Int8Array",
        "Int16Array",
        "Int32Array",
        "Map",
        "Math",
        "Object",
        "Promise",
        "RegExp",
        "Set",
        "String",
        "Symbol",
        "TypeError",
        "Uint8Array",
        "Uint8ClampedArray",
        "Uint16Array",
        "Uint32Array",
        "WeakMap",
        "_",
        "clearTimeout",
        "isFinite",
        "parseInt",
        "setTimeout"
      ], ha = -1, tt = {};
      tt[Oe] = tt[Te] = tt[Et] = tt[Jt] = tt[Nt] = tt[gn] = tt[Ut] = tt[It] = tt[un] = !0, tt[me] = tt[ke] = tt[$] = tt[Me] = tt[he] = tt[ft] = tt[ue] = tt[ae] = tt[Ee] = tt[vt] = tt[Yt] = tt[Nn] = tt[Mt] = tt[tr] = tt[nr] = !1;
      var Ke = {};
      Ke[me] = Ke[ke] = Ke[$] = Ke[he] = Ke[Me] = Ke[ft] = Ke[Oe] = Ke[Te] = Ke[Et] = Ke[Jt] = Ke[Nt] = Ke[Ee] = Ke[vt] = Ke[Yt] = Ke[Nn] = Ke[Mt] = Ke[tr] = Ke[Cr] = Ke[gn] = Ke[Ut] = Ke[It] = Ke[un] = !0, Ke[ue] = Ke[ae] = Ke[nr] = !1;
      var C = {
        // Latin-1 Supplement block.
        À: "A",
        Á: "A",
        Â: "A",
        Ã: "A",
        Ä: "A",
        Å: "A",
        à: "a",
        á: "a",
        â: "a",
        ã: "a",
        ä: "a",
        å: "a",
        Ç: "C",
        ç: "c",
        Ð: "D",
        ð: "d",
        È: "E",
        É: "E",
        Ê: "E",
        Ë: "E",
        è: "e",
        é: "e",
        ê: "e",
        ë: "e",
        Ì: "I",
        Í: "I",
        Î: "I",
        Ï: "I",
        ì: "i",
        í: "i",
        î: "i",
        ï: "i",
        Ñ: "N",
        ñ: "n",
        Ò: "O",
        Ó: "O",
        Ô: "O",
        Õ: "O",
        Ö: "O",
        Ø: "O",
        ò: "o",
        ó: "o",
        ô: "o",
        õ: "o",
        ö: "o",
        ø: "o",
        Ù: "U",
        Ú: "U",
        Û: "U",
        Ü: "U",
        ù: "u",
        ú: "u",
        û: "u",
        ü: "u",
        Ý: "Y",
        ý: "y",
        ÿ: "y",
        Æ: "Ae",
        æ: "ae",
        Þ: "Th",
        þ: "th",
        ß: "ss",
        // Latin Extended-A block.
        Ā: "A",
        Ă: "A",
        Ą: "A",
        ā: "a",
        ă: "a",
        ą: "a",
        Ć: "C",
        Ĉ: "C",
        Ċ: "C",
        Č: "C",
        ć: "c",
        ĉ: "c",
        ċ: "c",
        č: "c",
        Ď: "D",
        Đ: "D",
        ď: "d",
        đ: "d",
        Ē: "E",
        Ĕ: "E",
        Ė: "E",
        Ę: "E",
        Ě: "E",
        ē: "e",
        ĕ: "e",
        ė: "e",
        ę: "e",
        ě: "e",
        Ĝ: "G",
        Ğ: "G",
        Ġ: "G",
        Ģ: "G",
        ĝ: "g",
        ğ: "g",
        ġ: "g",
        ģ: "g",
        Ĥ: "H",
        Ħ: "H",
        ĥ: "h",
        ħ: "h",
        Ĩ: "I",
        Ī: "I",
        Ĭ: "I",
        Į: "I",
        İ: "I",
        ĩ: "i",
        ī: "i",
        ĭ: "i",
        į: "i",
        ı: "i",
        Ĵ: "J",
        ĵ: "j",
        Ķ: "K",
        ķ: "k",
        ĸ: "k",
        Ĺ: "L",
        Ļ: "L",
        Ľ: "L",
        Ŀ: "L",
        Ł: "L",
        ĺ: "l",
        ļ: "l",
        ľ: "l",
        ŀ: "l",
        ł: "l",
        Ń: "N",
        Ņ: "N",
        Ň: "N",
        Ŋ: "N",
        ń: "n",
        ņ: "n",
        ň: "n",
        ŋ: "n",
        Ō: "O",
        Ŏ: "O",
        Ő: "O",
        ō: "o",
        ŏ: "o",
        ő: "o",
        Ŕ: "R",
        Ŗ: "R",
        Ř: "R",
        ŕ: "r",
        ŗ: "r",
        ř: "r",
        Ś: "S",
        Ŝ: "S",
        Ş: "S",
        Š: "S",
        ś: "s",
        ŝ: "s",
        ş: "s",
        š: "s",
        Ţ: "T",
        Ť: "T",
        Ŧ: "T",
        ţ: "t",
        ť: "t",
        ŧ: "t",
        Ũ: "U",
        Ū: "U",
        Ŭ: "U",
        Ů: "U",
        Ű: "U",
        Ų: "U",
        ũ: "u",
        ū: "u",
        ŭ: "u",
        ů: "u",
        ű: "u",
        ų: "u",
        Ŵ: "W",
        ŵ: "w",
        Ŷ: "Y",
        ŷ: "y",
        Ÿ: "Y",
        Ź: "Z",
        Ż: "Z",
        Ž: "Z",
        ź: "z",
        ż: "z",
        ž: "z",
        Ĳ: "IJ",
        ĳ: "ij",
        Œ: "Oe",
        œ: "oe",
        ŉ: "'n",
        ſ: "s"
      }, B = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }, J = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      }, ie = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      }, nt = parseFloat, Fe = parseInt, st = typeof Wr == "object" && Wr && Wr.Object === Object && Wr, Ct = typeof self == "object" && self && self.Object === Object && self, Xe = st || Ct || Function("return this")(), rt = t && !t.nodeType && t, gt = rt && !0 && e && !e.nodeType && e, jt = gt && gt.exports === rt, xt = jt && st.process, at = function() {
        try {
          var T = gt && gt.require && gt.require("util").types;
          return T || xt && xt.binding && xt.binding("util");
        } catch {
        }
      }(), Vt = at && at.isArrayBuffer, On = at && at.isDate, bn = at && at.isMap, Wn = at && at.isRegExp, yu = at && at.isSet, Qr = at && at.isTypedArray;
      function Ft(T, W, M) {
        switch (M.length) {
          case 0:
            return T.call(W);
          case 1:
            return T.call(W, M[0]);
          case 2:
            return T.call(W, M[0], M[1]);
          case 3:
            return T.call(W, M[0], M[1], M[2]);
        }
        return T.apply(W, M);
      }
      function qg(T, W, M, oe) {
        for (var we = -1, Je = T == null ? 0 : T.length; ++we < Je; ) {
          var wt = T[we];
          W(oe, wt, M(wt), T);
        }
        return oe;
      }
      function yn(T, W) {
        for (var M = -1, oe = T == null ? 0 : T.length; ++M < oe && W(T[M], M, T) !== !1; )
          ;
        return T;
      }
      function $g(T, W) {
        for (var M = T == null ? 0 : T.length; M-- && W(T[M], M, T) !== !1; )
          ;
        return T;
      }
      function Hc(T, W) {
        for (var M = -1, oe = T == null ? 0 : T.length; ++M < oe; )
          if (!W(T[M], M, T))
            return !1;
        return !0;
      }
      function Ar(T, W) {
        for (var M = -1, oe = T == null ? 0 : T.length, we = 0, Je = []; ++M < oe; ) {
          var wt = T[M];
          W(wt, M, T) && (Je[we++] = wt);
        }
        return Je;
      }
      function Ro(T, W) {
        var M = T == null ? 0 : T.length;
        return !!M && Ei(T, W, 0) > -1;
      }
      function ga(T, W, M) {
        for (var oe = -1, we = T == null ? 0 : T.length; ++oe < we; )
          if (M(W, T[oe]))
            return !0;
        return !1;
      }
      function lt(T, W) {
        for (var M = -1, oe = T == null ? 0 : T.length, we = Array(oe); ++M < oe; )
          we[M] = W(T[M], M, T);
        return we;
      }
      function wr(T, W) {
        for (var M = -1, oe = W.length, we = T.length; ++M < oe; )
          T[we + M] = W[M];
        return T;
      }
      function ma(T, W, M, oe) {
        var we = -1, Je = T == null ? 0 : T.length;
        for (oe && Je && (M = T[++we]); ++we < Je; )
          M = W(M, T[we], we, T);
        return M;
      }
      function Kg(T, W, M, oe) {
        var we = T == null ? 0 : T.length;
        for (oe && we && (M = T[--we]); we--; )
          M = W(M, T[we], we, T);
        return M;
      }
      function ba(T, W) {
        for (var M = -1, oe = T == null ? 0 : T.length; ++M < oe; )
          if (W(T[M], M, T))
            return !0;
        return !1;
      }
      var em = ya("length");
      function tm(T) {
        return T.split("");
      }
      function nm(T) {
        return T.match(Js) || [];
      }
      function zc(T, W, M) {
        var oe;
        return M(T, function(we, Je, wt) {
          if (W(we, Je, wt))
            return oe = Je, !1;
        }), oe;
      }
      function Po(T, W, M, oe) {
        for (var we = T.length, Je = M + (oe ? 1 : -1); oe ? Je-- : ++Je < we; )
          if (W(T[Je], Je, T))
            return Je;
        return -1;
      }
      function Ei(T, W, M) {
        return W === W ? hm(T, W, M) : Po(T, Zc, M);
      }
      function rm(T, W, M, oe) {
        for (var we = M - 1, Je = T.length; ++we < Je; )
          if (oe(T[we], W))
            return we;
        return -1;
      }
      function Zc(T) {
        return T !== T;
      }
      function Yc(T, W) {
        var M = T == null ? 0 : T.length;
        return M ? Ia(T, W) / M : S;
      }
      function ya(T) {
        return function(W) {
          return W == null ? r : W[T];
        };
      }
      function va(T) {
        return function(W) {
          return T == null ? r : T[W];
        };
      }
      function Jc(T, W, M, oe, we) {
        return we(T, function(Je, wt, it) {
          M = oe ? (oe = !1, Je) : W(M, Je, wt, it);
        }), M;
      }
      function im(T, W) {
        var M = T.length;
        for (T.sort(W); M--; )
          T[M] = T[M].value;
        return T;
      }
      function Ia(T, W) {
        for (var M, oe = -1, we = T.length; ++oe < we; ) {
          var Je = W(T[oe]);
          Je !== r && (M = M === r ? Je : M + Je);
        }
        return M;
      }
      function Ca(T, W) {
        for (var M = -1, oe = Array(T); ++M < T; )
          oe[M] = W(M);
        return oe;
      }
      function um(T, W) {
        return lt(W, function(M) {
          return [M, T[M]];
        });
      }
      function Uc(T) {
        return T && T.slice(0, $c(T) + 1).replace(pu, "");
      }
      function an(T) {
        return function(W) {
          return T(W);
        };
      }
      function xa(T, W) {
        return lt(W, function(M) {
          return T[M];
        });
      }
      function vu(T, W) {
        return T.has(W);
      }
      function jc(T, W) {
        for (var M = -1, oe = T.length; ++M < oe && Ei(W, T[M], 0) > -1; )
          ;
        return M;
      }
      function Qc(T, W) {
        for (var M = T.length; M-- && Ei(W, T[M], 0) > -1; )
          ;
        return M;
      }
      function om(T, W) {
        for (var M = T.length, oe = 0; M--; )
          T[M] === W && ++oe;
        return oe;
      }
      var sm = va(C), am = va(B);
      function lm(T) {
        return "\\" + ie[T];
      }
      function cm(T, W) {
        return T == null ? r : T[W];
      }
      function Fi(T) {
        return Eo.test(T);
      }
      function fm(T) {
        return jr.test(T);
      }
      function dm(T) {
        for (var W, M = []; !(W = T.next()).done; )
          M.push(W.value);
        return M;
      }
      function Aa(T) {
        var W = -1, M = Array(T.size);
        return T.forEach(function(oe, we) {
          M[++W] = [we, oe];
        }), M;
      }
      function qc(T, W) {
        return function(M) {
          return T(W(M));
        };
      }
      function Sr(T, W) {
        for (var M = -1, oe = T.length, we = 0, Je = []; ++M < oe; ) {
          var wt = T[M];
          (wt === W || wt === h) && (T[M] = h, Je[we++] = M);
        }
        return Je;
      }
      function Oo(T) {
        var W = -1, M = Array(T.size);
        return T.forEach(function(oe) {
          M[++W] = oe;
        }), M;
      }
      function pm(T) {
        var W = -1, M = Array(T.size);
        return T.forEach(function(oe) {
          M[++W] = [oe, oe];
        }), M;
      }
      function hm(T, W, M) {
        for (var oe = M - 1, we = T.length; ++oe < we; )
          if (T[oe] === W)
            return oe;
        return -1;
      }
      function gm(T, W, M) {
        for (var oe = M + 1; oe--; )
          if (T[oe] === W)
            return oe;
        return oe;
      }
      function Ri(T) {
        return Fi(T) ? bm(T) : em(T);
      }
      function Tn(T) {
        return Fi(T) ? ym(T) : tm(T);
      }
      function $c(T) {
        for (var W = T.length; W-- && so.test(T.charAt(W)); )
          ;
        return W;
      }
      var mm = va(J);
      function bm(T) {
        for (var W = Si.lastIndex = 0; Si.test(T); )
          ++W;
        return W;
      }
      function ym(T) {
        return T.match(Si) || [];
      }
      function vm(T) {
        return T.match(So) || [];
      }
      var Im = function T(W) {
        W = W == null ? Xe : Pi.defaults(Xe.Object(), W, Pi.pick(Xe, Fo));
        var M = W.Array, oe = W.Date, we = W.Error, Je = W.Function, wt = W.Math, it = W.Object, wa = W.RegExp, Cm = W.String, vn = W.TypeError, To = M.prototype, xm = Je.prototype, Oi = it.prototype, Bo = W["__core-js_shared__"], _o = xm.toString, $e = Oi.hasOwnProperty, Am = 0, Kc = function() {
          var n = /[^.]+$/.exec(Bo && Bo.keys && Bo.keys.IE_PROTO || "");
          return n ? "Symbol(src)_1." + n : "";
        }(), Go = Oi.toString, wm = _o.call(it), Sm = Xe._, Em = wa(
          "^" + _o.call($e).replace(du, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        ), Lo = jt ? W.Buffer : r, Er = W.Symbol, ko = W.Uint8Array, ef = Lo ? Lo.allocUnsafe : r, Do = qc(it.getPrototypeOf, it), tf = it.create, nf = Oi.propertyIsEnumerable, Mo = To.splice, rf = Er ? Er.isConcatSpreadable : r, Iu = Er ? Er.iterator : r, qr = Er ? Er.toStringTag : r, No = function() {
          try {
            var n = ni(it, "defineProperty");
            return n({}, "", {}), n;
          } catch {
          }
        }(), Fm = W.clearTimeout !== Xe.clearTimeout && W.clearTimeout, Rm = oe && oe.now !== Xe.Date.now && oe.now, Pm = W.setTimeout !== Xe.setTimeout && W.setTimeout, Vo = wt.ceil, Wo = wt.floor, Sa = it.getOwnPropertySymbols, Om = Lo ? Lo.isBuffer : r, uf = W.isFinite, Tm = To.join, Bm = qc(it.keys, it), St = wt.max, Tt = wt.min, _m = oe.now, Gm = W.parseInt, of = wt.random, Lm = To.reverse, Ea = ni(W, "DataView"), Cu = ni(W, "Map"), Fa = ni(W, "Promise"), Ti = ni(W, "Set"), xu = ni(W, "WeakMap"), Au = ni(it, "create"), Xo = xu && new xu(), Bi = {}, km = ri(Ea), Dm = ri(Cu), Mm = ri(Fa), Nm = ri(Ti), Vm = ri(xu), Ho = Er ? Er.prototype : r, wu = Ho ? Ho.valueOf : r, sf = Ho ? Ho.toString : r;
        function y(n) {
          if (dt(n) && !Re(n) && !(n instanceof Ve)) {
            if (n instanceof In)
              return n;
            if ($e.call(n, "__wrapped__"))
              return ad(n);
          }
          return new In(n);
        }
        var _i = /* @__PURE__ */ function() {
          function n() {
          }
          return function(i) {
            if (!ct(i))
              return {};
            if (tf)
              return tf(i);
            n.prototype = i;
            var s = new n();
            return n.prototype = r, s;
          };
        }();
        function zo() {
        }
        function In(n, i) {
          this.__wrapped__ = n, this.__actions__ = [], this.__chain__ = !!i, this.__index__ = 0, this.__values__ = r;
        }
        y.templateSettings = {
          /**
           * Used to detect `data` property values to be HTML-escaped.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          escape: cu,
          /**
           * Used to detect code to be evaluated.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          evaluate: fu,
          /**
           * Used to detect `data` property values to inject.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          interpolate: yi,
          /**
           * Used to reference the data object in the template text.
           *
           * @memberOf _.templateSettings
           * @type {string}
           */
          variable: "",
          /**
           * Used to import variables into the compiled template.
           *
           * @memberOf _.templateSettings
           * @type {Object}
           */
          imports: {
            /**
             * A reference to the `lodash` function.
             *
             * @memberOf _.templateSettings.imports
             * @type {Function}
             */
            _: y
          }
        }, y.prototype = zo.prototype, y.prototype.constructor = y, In.prototype = _i(zo.prototype), In.prototype.constructor = In;
        function Ve(n) {
          this.__wrapped__ = n, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = We, this.__views__ = [];
        }
        function Wm() {
          var n = new Ve(this.__wrapped__);
          return n.__actions__ = Qt(this.__actions__), n.__dir__ = this.__dir__, n.__filtered__ = this.__filtered__, n.__iteratees__ = Qt(this.__iteratees__), n.__takeCount__ = this.__takeCount__, n.__views__ = Qt(this.__views__), n;
        }
        function Xm() {
          if (this.__filtered__) {
            var n = new Ve(this);
            n.__dir__ = -1, n.__filtered__ = !0;
          } else
            n = this.clone(), n.__dir__ *= -1;
          return n;
        }
        function Hm() {
          var n = this.__wrapped__.value(), i = this.__dir__, s = Re(n), d = i < 0, m = s ? n.length : 0, I = ty(0, m, this.__views__), x = I.start, R = I.end, _ = R - x, Z = d ? R : x - 1, Y = this.__iteratees__, U = Y.length, re = 0, ce = Tt(_, this.__takeCount__);
          if (!s || !d && m == _ && ce == _)
            return Tf(n, this.__actions__);
          var ve = [];
          e:
            for (; _-- && re < ce; ) {
              Z += i;
              for (var Ge = -1, Ie = n[Z]; ++Ge < U; ) {
                var Ne = Y[Ge], He = Ne.iteratee, fn = Ne.type, Ht = He(Ie);
                if (fn == K)
                  Ie = Ht;
                else if (!Ht) {
                  if (fn == ee)
                    continue e;
                  break e;
                }
              }
              ve[re++] = Ie;
            }
          return ve;
        }
        Ve.prototype = _i(zo.prototype), Ve.prototype.constructor = Ve;
        function $r(n) {
          var i = -1, s = n == null ? 0 : n.length;
          for (this.clear(); ++i < s; ) {
            var d = n[i];
            this.set(d[0], d[1]);
          }
        }
        function zm() {
          this.__data__ = Au ? Au(null) : {}, this.size = 0;
        }
        function Zm(n) {
          var i = this.has(n) && delete this.__data__[n];
          return this.size -= i ? 1 : 0, i;
        }
        function Ym(n) {
          var i = this.__data__;
          if (Au) {
            var s = i[n];
            return s === f ? r : s;
          }
          return $e.call(i, n) ? i[n] : r;
        }
        function Jm(n) {
          var i = this.__data__;
          return Au ? i[n] !== r : $e.call(i, n);
        }
        function Um(n, i) {
          var s = this.__data__;
          return this.size += this.has(n) ? 0 : 1, s[n] = Au && i === r ? f : i, this;
        }
        $r.prototype.clear = zm, $r.prototype.delete = Zm, $r.prototype.get = Ym, $r.prototype.has = Jm, $r.prototype.set = Um;
        function sr(n) {
          var i = -1, s = n == null ? 0 : n.length;
          for (this.clear(); ++i < s; ) {
            var d = n[i];
            this.set(d[0], d[1]);
          }
        }
        function jm() {
          this.__data__ = [], this.size = 0;
        }
        function Qm(n) {
          var i = this.__data__, s = Zo(i, n);
          if (s < 0)
            return !1;
          var d = i.length - 1;
          return s == d ? i.pop() : Mo.call(i, s, 1), --this.size, !0;
        }
        function qm(n) {
          var i = this.__data__, s = Zo(i, n);
          return s < 0 ? r : i[s][1];
        }
        function $m(n) {
          return Zo(this.__data__, n) > -1;
        }
        function Km(n, i) {
          var s = this.__data__, d = Zo(s, n);
          return d < 0 ? (++this.size, s.push([n, i])) : s[d][1] = i, this;
        }
        sr.prototype.clear = jm, sr.prototype.delete = Qm, sr.prototype.get = qm, sr.prototype.has = $m, sr.prototype.set = Km;
        function ar(n) {
          var i = -1, s = n == null ? 0 : n.length;
          for (this.clear(); ++i < s; ) {
            var d = n[i];
            this.set(d[0], d[1]);
          }
        }
        function eb() {
          this.size = 0, this.__data__ = {
            hash: new $r(),
            map: new (Cu || sr)(),
            string: new $r()
          };
        }
        function tb(n) {
          var i = rs(this, n).delete(n);
          return this.size -= i ? 1 : 0, i;
        }
        function nb(n) {
          return rs(this, n).get(n);
        }
        function rb(n) {
          return rs(this, n).has(n);
        }
        function ib(n, i) {
          var s = rs(this, n), d = s.size;
          return s.set(n, i), this.size += s.size == d ? 0 : 1, this;
        }
        ar.prototype.clear = eb, ar.prototype.delete = tb, ar.prototype.get = nb, ar.prototype.has = rb, ar.prototype.set = ib;
        function Kr(n) {
          var i = -1, s = n == null ? 0 : n.length;
          for (this.__data__ = new ar(); ++i < s; )
            this.add(n[i]);
        }
        function ub(n) {
          return this.__data__.set(n, f), this;
        }
        function ob(n) {
          return this.__data__.has(n);
        }
        Kr.prototype.add = Kr.prototype.push = ub, Kr.prototype.has = ob;
        function Bn(n) {
          var i = this.__data__ = new sr(n);
          this.size = i.size;
        }
        function sb() {
          this.__data__ = new sr(), this.size = 0;
        }
        function ab(n) {
          var i = this.__data__, s = i.delete(n);
          return this.size = i.size, s;
        }
        function lb(n) {
          return this.__data__.get(n);
        }
        function cb(n) {
          return this.__data__.has(n);
        }
        function fb(n, i) {
          var s = this.__data__;
          if (s instanceof sr) {
            var d = s.__data__;
            if (!Cu || d.length < o - 1)
              return d.push([n, i]), this.size = ++s.size, this;
            s = this.__data__ = new ar(d);
          }
          return s.set(n, i), this.size = s.size, this;
        }
        Bn.prototype.clear = sb, Bn.prototype.delete = ab, Bn.prototype.get = lb, Bn.prototype.has = cb, Bn.prototype.set = fb;
        function af(n, i) {
          var s = Re(n), d = !s && ii(n), m = !s && !d && Tr(n), I = !s && !d && !m && Di(n), x = s || d || m || I, R = x ? Ca(n.length, Cm) : [], _ = R.length;
          for (var Z in n)
            (i || $e.call(n, Z)) && !(x && // Safari 9 has enumerable `arguments.length` in strict mode.
            (Z == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            m && (Z == "offset" || Z == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            I && (Z == "buffer" || Z == "byteLength" || Z == "byteOffset") || // Skip index properties.
            dr(Z, _))) && R.push(Z);
          return R;
        }
        function lf(n) {
          var i = n.length;
          return i ? n[Ma(0, i - 1)] : r;
        }
        function db(n, i) {
          return is(Qt(n), ei(i, 0, n.length));
        }
        function pb(n) {
          return is(Qt(n));
        }
        function Ra(n, i, s) {
          (s !== r && !_n(n[i], s) || s === r && !(i in n)) && lr(n, i, s);
        }
        function Su(n, i, s) {
          var d = n[i];
          (!($e.call(n, i) && _n(d, s)) || s === r && !(i in n)) && lr(n, i, s);
        }
        function Zo(n, i) {
          for (var s = n.length; s--; )
            if (_n(n[s][0], i))
              return s;
          return -1;
        }
        function hb(n, i, s, d) {
          return Fr(n, function(m, I, x) {
            i(d, m, s(m), x);
          }), d;
        }
        function cf(n, i) {
          return n && Hn(i, Rt(i), n);
        }
        function gb(n, i) {
          return n && Hn(i, $t(i), n);
        }
        function lr(n, i, s) {
          i == "__proto__" && No ? No(n, i, {
            configurable: !0,
            enumerable: !0,
            value: s,
            writable: !0
          }) : n[i] = s;
        }
        function Pa(n, i) {
          for (var s = -1, d = i.length, m = M(d), I = n == null; ++s < d; )
            m[s] = I ? r : ll(n, i[s]);
          return m;
        }
        function ei(n, i, s) {
          return n === n && (s !== r && (n = n <= s ? n : s), i !== r && (n = n >= i ? n : i)), n;
        }
        function Cn(n, i, s, d, m, I) {
          var x, R = i & g, _ = i & v, Z = i & b;
          if (s && (x = m ? s(n, d, m, I) : s(n)), x !== r)
            return x;
          if (!ct(n))
            return n;
          var Y = Re(n);
          if (Y) {
            if (x = ry(n), !R)
              return Qt(n, x);
          } else {
            var U = Bt(n), re = U == ae || U == Ae;
            if (Tr(n))
              return Gf(n, R);
            if (U == Yt || U == me || re && !m) {
              if (x = _ || re ? {} : Kf(n), !R)
                return _ ? Yb(n, gb(x, n)) : Zb(n, cf(x, n));
            } else {
              if (!Ke[U])
                return m ? n : {};
              x = iy(n, U, R);
            }
          }
          I || (I = new Bn());
          var ce = I.get(n);
          if (ce)
            return ce;
          I.set(n, x), Rd(n) ? n.forEach(function(Ie) {
            x.add(Cn(Ie, i, s, Ie, n, I));
          }) : Ed(n) && n.forEach(function(Ie, Ne) {
            x.set(Ne, Cn(Ie, i, s, Ne, n, I));
          });
          var ve = Z ? _ ? ja : Ua : _ ? $t : Rt, Ge = Y ? r : ve(n);
          return yn(Ge || n, function(Ie, Ne) {
            Ge && (Ne = Ie, Ie = n[Ne]), Su(x, Ne, Cn(Ie, i, s, Ne, n, I));
          }), x;
        }
        function mb(n) {
          var i = Rt(n);
          return function(s) {
            return ff(s, n, i);
          };
        }
        function ff(n, i, s) {
          var d = s.length;
          if (n == null)
            return !d;
          for (n = it(n); d--; ) {
            var m = s[d], I = i[m], x = n[m];
            if (x === r && !(m in n) || !I(x))
              return !1;
          }
          return !0;
        }
        function df(n, i, s) {
          if (typeof n != "function")
            throw new vn(l);
          return Bu(function() {
            n.apply(r, s);
          }, i);
        }
        function Eu(n, i, s, d) {
          var m = -1, I = Ro, x = !0, R = n.length, _ = [], Z = i.length;
          if (!R)
            return _;
          s && (i = lt(i, an(s))), d ? (I = ga, x = !1) : i.length >= o && (I = vu, x = !1, i = new Kr(i));
          e:
            for (; ++m < R; ) {
              var Y = n[m], U = s == null ? Y : s(Y);
              if (Y = d || Y !== 0 ? Y : 0, x && U === U) {
                for (var re = Z; re--; )
                  if (i[re] === U)
                    continue e;
                _.push(Y);
              } else I(i, U, d) || _.push(Y);
            }
          return _;
        }
        var Fr = Nf(Xn), pf = Nf(Ta, !0);
        function bb(n, i) {
          var s = !0;
          return Fr(n, function(d, m, I) {
            return s = !!i(d, m, I), s;
          }), s;
        }
        function Yo(n, i, s) {
          for (var d = -1, m = n.length; ++d < m; ) {
            var I = n[d], x = i(I);
            if (x != null && (R === r ? x === x && !cn(x) : s(x, R)))
              var R = x, _ = I;
          }
          return _;
        }
        function yb(n, i, s, d) {
          var m = n.length;
          for (s = _e(s), s < 0 && (s = -s > m ? 0 : m + s), d = d === r || d > m ? m : _e(d), d < 0 && (d += m), d = s > d ? 0 : Od(d); s < d; )
            n[s++] = i;
          return n;
        }
        function hf(n, i) {
          var s = [];
          return Fr(n, function(d, m, I) {
            i(d, m, I) && s.push(d);
          }), s;
        }
        function Pt(n, i, s, d, m) {
          var I = -1, x = n.length;
          for (s || (s = oy), m || (m = []); ++I < x; ) {
            var R = n[I];
            i > 0 && s(R) ? i > 1 ? Pt(R, i - 1, s, d, m) : wr(m, R) : d || (m[m.length] = R);
          }
          return m;
        }
        var Oa = Vf(), gf = Vf(!0);
        function Xn(n, i) {
          return n && Oa(n, i, Rt);
        }
        function Ta(n, i) {
          return n && gf(n, i, Rt);
        }
        function Jo(n, i) {
          return Ar(i, function(s) {
            return pr(n[s]);
          });
        }
        function ti(n, i) {
          i = Pr(i, n);
          for (var s = 0, d = i.length; n != null && s < d; )
            n = n[zn(i[s++])];
          return s && s == d ? n : r;
        }
        function mf(n, i, s) {
          var d = i(n);
          return Re(n) ? d : wr(d, s(n));
        }
        function Wt(n) {
          return n == null ? n === r ? au : rn : qr && qr in it(n) ? ey(n) : py(n);
        }
        function Ba(n, i) {
          return n > i;
        }
        function vb(n, i) {
          return n != null && $e.call(n, i);
        }
        function Ib(n, i) {
          return n != null && i in it(n);
        }
        function Cb(n, i, s) {
          return n >= Tt(i, s) && n < St(i, s);
        }
        function _a(n, i, s) {
          for (var d = s ? ga : Ro, m = n[0].length, I = n.length, x = I, R = M(I), _ = 1 / 0, Z = []; x--; ) {
            var Y = n[x];
            x && i && (Y = lt(Y, an(i))), _ = Tt(Y.length, _), R[x] = !s && (i || m >= 120 && Y.length >= 120) ? new Kr(x && Y) : r;
          }
          Y = n[0];
          var U = -1, re = R[0];
          e:
            for (; ++U < m && Z.length < _; ) {
              var ce = Y[U], ve = i ? i(ce) : ce;
              if (ce = s || ce !== 0 ? ce : 0, !(re ? vu(re, ve) : d(Z, ve, s))) {
                for (x = I; --x; ) {
                  var Ge = R[x];
                  if (!(Ge ? vu(Ge, ve) : d(n[x], ve, s)))
                    continue e;
                }
                re && re.push(ve), Z.push(ce);
              }
            }
          return Z;
        }
        function xb(n, i, s, d) {
          return Xn(n, function(m, I, x) {
            i(d, s(m), I, x);
          }), d;
        }
        function Fu(n, i, s) {
          i = Pr(i, n), n = rd(n, i);
          var d = n == null ? n : n[zn(An(i))];
          return d == null ? r : Ft(d, n, s);
        }
        function bf(n) {
          return dt(n) && Wt(n) == me;
        }
        function Ab(n) {
          return dt(n) && Wt(n) == $;
        }
        function wb(n) {
          return dt(n) && Wt(n) == ft;
        }
        function Ru(n, i, s, d, m) {
          return n === i ? !0 : n == null || i == null || !dt(n) && !dt(i) ? n !== n && i !== i : Sb(n, i, s, d, Ru, m);
        }
        function Sb(n, i, s, d, m, I) {
          var x = Re(n), R = Re(i), _ = x ? ke : Bt(n), Z = R ? ke : Bt(i);
          _ = _ == me ? Yt : _, Z = Z == me ? Yt : Z;
          var Y = _ == Yt, U = Z == Yt, re = _ == Z;
          if (re && Tr(n)) {
            if (!Tr(i))
              return !1;
            x = !0, Y = !1;
          }
          if (re && !Y)
            return I || (I = new Bn()), x || Di(n) ? Qf(n, i, s, d, m, I) : $b(n, i, _, s, d, m, I);
          if (!(s & P)) {
            var ce = Y && $e.call(n, "__wrapped__"), ve = U && $e.call(i, "__wrapped__");
            if (ce || ve) {
              var Ge = ce ? n.value() : n, Ie = ve ? i.value() : i;
              return I || (I = new Bn()), m(Ge, Ie, s, d, I);
            }
          }
          return re ? (I || (I = new Bn()), Kb(n, i, s, d, m, I)) : !1;
        }
        function Eb(n) {
          return dt(n) && Bt(n) == Ee;
        }
        function Ga(n, i, s, d) {
          var m = s.length, I = m, x = !d;
          if (n == null)
            return !I;
          for (n = it(n); m--; ) {
            var R = s[m];
            if (x && R[2] ? R[1] !== n[R[0]] : !(R[0] in n))
              return !1;
          }
          for (; ++m < I; ) {
            R = s[m];
            var _ = R[0], Z = n[_], Y = R[1];
            if (x && R[2]) {
              if (Z === r && !(_ in n))
                return !1;
            } else {
              var U = new Bn();
              if (d)
                var re = d(Z, Y, _, n, i, U);
              if (!(re === r ? Ru(Y, Z, P | A, d, U) : re))
                return !1;
            }
          }
          return !0;
        }
        function yf(n) {
          if (!ct(n) || ay(n))
            return !1;
          var i = pr(n) ? Em : Ks;
          return i.test(ri(n));
        }
        function Fb(n) {
          return dt(n) && Wt(n) == Nn;
        }
        function Rb(n) {
          return dt(n) && Bt(n) == Mt;
        }
        function Pb(n) {
          return dt(n) && cs(n.length) && !!tt[Wt(n)];
        }
        function vf(n) {
          return typeof n == "function" ? n : n == null ? Kt : typeof n == "object" ? Re(n) ? xf(n[0], n[1]) : Cf(n) : Wd(n);
        }
        function La(n) {
          if (!Tu(n))
            return Bm(n);
          var i = [];
          for (var s in it(n))
            $e.call(n, s) && s != "constructor" && i.push(s);
          return i;
        }
        function Ob(n) {
          if (!ct(n))
            return dy(n);
          var i = Tu(n), s = [];
          for (var d in n)
            d == "constructor" && (i || !$e.call(n, d)) || s.push(d);
          return s;
        }
        function ka(n, i) {
          return n < i;
        }
        function If(n, i) {
          var s = -1, d = qt(n) ? M(n.length) : [];
          return Fr(n, function(m, I, x) {
            d[++s] = i(m, I, x);
          }), d;
        }
        function Cf(n) {
          var i = qa(n);
          return i.length == 1 && i[0][2] ? td(i[0][0], i[0][1]) : function(s) {
            return s === n || Ga(s, n, i);
          };
        }
        function xf(n, i) {
          return Ka(n) && ed(i) ? td(zn(n), i) : function(s) {
            var d = ll(s, n);
            return d === r && d === i ? cl(s, n) : Ru(i, d, P | A);
          };
        }
        function Uo(n, i, s, d, m) {
          n !== i && Oa(i, function(I, x) {
            if (m || (m = new Bn()), ct(I))
              Tb(n, i, x, s, Uo, d, m);
            else {
              var R = d ? d(tl(n, x), I, x + "", n, i, m) : r;
              R === r && (R = I), Ra(n, x, R);
            }
          }, $t);
        }
        function Tb(n, i, s, d, m, I, x) {
          var R = tl(n, s), _ = tl(i, s), Z = x.get(_);
          if (Z) {
            Ra(n, s, Z);
            return;
          }
          var Y = I ? I(R, _, s + "", n, i, x) : r, U = Y === r;
          if (U) {
            var re = Re(_), ce = !re && Tr(_), ve = !re && !ce && Di(_);
            Y = _, re || ce || ve ? Re(R) ? Y = R : mt(R) ? Y = Qt(R) : ce ? (U = !1, Y = Gf(_, !0)) : ve ? (U = !1, Y = Lf(_, !0)) : Y = [] : _u(_) || ii(_) ? (Y = R, ii(R) ? Y = Td(R) : (!ct(R) || pr(R)) && (Y = Kf(_))) : U = !1;
          }
          U && (x.set(_, Y), m(Y, _, d, I, x), x.delete(_)), Ra(n, s, Y);
        }
        function Af(n, i) {
          var s = n.length;
          if (s)
            return i += i < 0 ? s : 0, dr(i, s) ? n[i] : r;
        }
        function wf(n, i, s) {
          i.length ? i = lt(i, function(I) {
            return Re(I) ? function(x) {
              return ti(x, I.length === 1 ? I[0] : I);
            } : I;
          }) : i = [Kt];
          var d = -1;
          i = lt(i, an(be()));
          var m = If(n, function(I, x, R) {
            var _ = lt(i, function(Z) {
              return Z(I);
            });
            return { criteria: _, index: ++d, value: I };
          });
          return im(m, function(I, x) {
            return zb(I, x, s);
          });
        }
        function Bb(n, i) {
          return Sf(n, i, function(s, d) {
            return cl(n, d);
          });
        }
        function Sf(n, i, s) {
          for (var d = -1, m = i.length, I = {}; ++d < m; ) {
            var x = i[d], R = ti(n, x);
            s(R, x) && Pu(I, Pr(x, n), R);
          }
          return I;
        }
        function _b(n) {
          return function(i) {
            return ti(i, n);
          };
        }
        function Da(n, i, s, d) {
          var m = d ? rm : Ei, I = -1, x = i.length, R = n;
          for (n === i && (i = Qt(i)), s && (R = lt(n, an(s))); ++I < x; )
            for (var _ = 0, Z = i[I], Y = s ? s(Z) : Z; (_ = m(R, Y, _, d)) > -1; )
              R !== n && Mo.call(R, _, 1), Mo.call(n, _, 1);
          return n;
        }
        function Ef(n, i) {
          for (var s = n ? i.length : 0, d = s - 1; s--; ) {
            var m = i[s];
            if (s == d || m !== I) {
              var I = m;
              dr(m) ? Mo.call(n, m, 1) : Wa(n, m);
            }
          }
          return n;
        }
        function Ma(n, i) {
          return n + Wo(of() * (i - n + 1));
        }
        function Gb(n, i, s, d) {
          for (var m = -1, I = St(Vo((i - n) / (s || 1)), 0), x = M(I); I--; )
            x[d ? I : ++m] = n, n += s;
          return x;
        }
        function Na(n, i) {
          var s = "";
          if (!n || i < 1 || i > Se)
            return s;
          do
            i % 2 && (s += n), i = Wo(i / 2), i && (n += n);
          while (i);
          return s;
        }
        function De(n, i) {
          return nl(nd(n, i, Kt), n + "");
        }
        function Lb(n) {
          return lf(Mi(n));
        }
        function kb(n, i) {
          var s = Mi(n);
          return is(s, ei(i, 0, s.length));
        }
        function Pu(n, i, s, d) {
          if (!ct(n))
            return n;
          i = Pr(i, n);
          for (var m = -1, I = i.length, x = I - 1, R = n; R != null && ++m < I; ) {
            var _ = zn(i[m]), Z = s;
            if (_ === "__proto__" || _ === "constructor" || _ === "prototype")
              return n;
            if (m != x) {
              var Y = R[_];
              Z = d ? d(Y, _, R) : r, Z === r && (Z = ct(Y) ? Y : dr(i[m + 1]) ? [] : {});
            }
            Su(R, _, Z), R = R[_];
          }
          return n;
        }
        var Ff = Xo ? function(n, i) {
          return Xo.set(n, i), n;
        } : Kt, Db = No ? function(n, i) {
          return No(n, "toString", {
            configurable: !0,
            enumerable: !1,
            value: dl(i),
            writable: !0
          });
        } : Kt;
        function Mb(n) {
          return is(Mi(n));
        }
        function xn(n, i, s) {
          var d = -1, m = n.length;
          i < 0 && (i = -i > m ? 0 : m + i), s = s > m ? m : s, s < 0 && (s += m), m = i > s ? 0 : s - i >>> 0, i >>>= 0;
          for (var I = M(m); ++d < m; )
            I[d] = n[d + i];
          return I;
        }
        function Nb(n, i) {
          var s;
          return Fr(n, function(d, m, I) {
            return s = i(d, m, I), !s;
          }), !!s;
        }
        function jo(n, i, s) {
          var d = 0, m = n == null ? d : n.length;
          if (typeof i == "number" && i === i && m <= w) {
            for (; d < m; ) {
              var I = d + m >>> 1, x = n[I];
              x !== null && !cn(x) && (s ? x <= i : x < i) ? d = I + 1 : m = I;
            }
            return m;
          }
          return Va(n, i, Kt, s);
        }
        function Va(n, i, s, d) {
          var m = 0, I = n == null ? 0 : n.length;
          if (I === 0)
            return 0;
          i = s(i);
          for (var x = i !== i, R = i === null, _ = cn(i), Z = i === r; m < I; ) {
            var Y = Wo((m + I) / 2), U = s(n[Y]), re = U !== r, ce = U === null, ve = U === U, Ge = cn(U);
            if (x)
              var Ie = d || ve;
            else Z ? Ie = ve && (d || re) : R ? Ie = ve && re && (d || !ce) : _ ? Ie = ve && re && !ce && (d || !Ge) : ce || Ge ? Ie = !1 : Ie = d ? U <= i : U < i;
            Ie ? m = Y + 1 : I = Y;
          }
          return Tt(I, Le);
        }
        function Rf(n, i) {
          for (var s = -1, d = n.length, m = 0, I = []; ++s < d; ) {
            var x = n[s], R = i ? i(x) : x;
            if (!s || !_n(R, _)) {
              var _ = R;
              I[m++] = x === 0 ? 0 : x;
            }
          }
          return I;
        }
        function Pf(n) {
          return typeof n == "number" ? n : cn(n) ? S : +n;
        }
        function ln(n) {
          if (typeof n == "string")
            return n;
          if (Re(n))
            return lt(n, ln) + "";
          if (cn(n))
            return sf ? sf.call(n) : "";
          var i = n + "";
          return i == "0" && 1 / n == -1 / 0 ? "-0" : i;
        }
        function Rr(n, i, s) {
          var d = -1, m = Ro, I = n.length, x = !0, R = [], _ = R;
          if (s)
            x = !1, m = ga;
          else if (I >= o) {
            var Z = i ? null : Qb(n);
            if (Z)
              return Oo(Z);
            x = !1, m = vu, _ = new Kr();
          } else
            _ = i ? [] : R;
          e:
            for (; ++d < I; ) {
              var Y = n[d], U = i ? i(Y) : Y;
              if (Y = s || Y !== 0 ? Y : 0, x && U === U) {
                for (var re = _.length; re--; )
                  if (_[re] === U)
                    continue e;
                i && _.push(U), R.push(Y);
              } else m(_, U, s) || (_ !== R && _.push(U), R.push(Y));
            }
          return R;
        }
        function Wa(n, i) {
          return i = Pr(i, n), n = rd(n, i), n == null || delete n[zn(An(i))];
        }
        function Of(n, i, s, d) {
          return Pu(n, i, s(ti(n, i)), d);
        }
        function Qo(n, i, s, d) {
          for (var m = n.length, I = d ? m : -1; (d ? I-- : ++I < m) && i(n[I], I, n); )
            ;
          return s ? xn(n, d ? 0 : I, d ? I + 1 : m) : xn(n, d ? I + 1 : 0, d ? m : I);
        }
        function Tf(n, i) {
          var s = n;
          return s instanceof Ve && (s = s.value()), ma(i, function(d, m) {
            return m.func.apply(m.thisArg, wr([d], m.args));
          }, s);
        }
        function Xa(n, i, s) {
          var d = n.length;
          if (d < 2)
            return d ? Rr(n[0]) : [];
          for (var m = -1, I = M(d); ++m < d; )
            for (var x = n[m], R = -1; ++R < d; )
              R != m && (I[m] = Eu(I[m] || x, n[R], i, s));
          return Rr(Pt(I, 1), i, s);
        }
        function Bf(n, i, s) {
          for (var d = -1, m = n.length, I = i.length, x = {}; ++d < m; ) {
            var R = d < I ? i[d] : r;
            s(x, n[d], R);
          }
          return x;
        }
        function Ha(n) {
          return mt(n) ? n : [];
        }
        function za(n) {
          return typeof n == "function" ? n : Kt;
        }
        function Pr(n, i) {
          return Re(n) ? n : Ka(n, i) ? [n] : sd(Qe(n));
        }
        var Vb = De;
        function Or(n, i, s) {
          var d = n.length;
          return s = s === r ? d : s, !i && s >= d ? n : xn(n, i, s);
        }
        var _f = Fm || function(n) {
          return Xe.clearTimeout(n);
        };
        function Gf(n, i) {
          if (i)
            return n.slice();
          var s = n.length, d = ef ? ef(s) : new n.constructor(s);
          return n.copy(d), d;
        }
        function Za(n) {
          var i = new n.constructor(n.byteLength);
          return new ko(i).set(new ko(n)), i;
        }
        function Wb(n, i) {
          var s = i ? Za(n.buffer) : n.buffer;
          return new n.constructor(s, n.byteOffset, n.byteLength);
        }
        function Xb(n) {
          var i = new n.constructor(n.source, mn.exec(n));
          return i.lastIndex = n.lastIndex, i;
        }
        function Hb(n) {
          return wu ? it(wu.call(n)) : {};
        }
        function Lf(n, i) {
          var s = i ? Za(n.buffer) : n.buffer;
          return new n.constructor(s, n.byteOffset, n.length);
        }
        function kf(n, i) {
          if (n !== i) {
            var s = n !== r, d = n === null, m = n === n, I = cn(n), x = i !== r, R = i === null, _ = i === i, Z = cn(i);
            if (!R && !Z && !I && n > i || I && x && _ && !R && !Z || d && x && _ || !s && _ || !m)
              return 1;
            if (!d && !I && !Z && n < i || Z && s && m && !d && !I || R && s && m || !x && m || !_)
              return -1;
          }
          return 0;
        }
        function zb(n, i, s) {
          for (var d = -1, m = n.criteria, I = i.criteria, x = m.length, R = s.length; ++d < x; ) {
            var _ = kf(m[d], I[d]);
            if (_) {
              if (d >= R)
                return _;
              var Z = s[d];
              return _ * (Z == "desc" ? -1 : 1);
            }
          }
          return n.index - i.index;
        }
        function Df(n, i, s, d) {
          for (var m = -1, I = n.length, x = s.length, R = -1, _ = i.length, Z = St(I - x, 0), Y = M(_ + Z), U = !d; ++R < _; )
            Y[R] = i[R];
          for (; ++m < x; )
            (U || m < I) && (Y[s[m]] = n[m]);
          for (; Z--; )
            Y[R++] = n[m++];
          return Y;
        }
        function Mf(n, i, s, d) {
          for (var m = -1, I = n.length, x = -1, R = s.length, _ = -1, Z = i.length, Y = St(I - R, 0), U = M(Y + Z), re = !d; ++m < Y; )
            U[m] = n[m];
          for (var ce = m; ++_ < Z; )
            U[ce + _] = i[_];
          for (; ++x < R; )
            (re || m < I) && (U[ce + s[x]] = n[m++]);
          return U;
        }
        function Qt(n, i) {
          var s = -1, d = n.length;
          for (i || (i = M(d)); ++s < d; )
            i[s] = n[s];
          return i;
        }
        function Hn(n, i, s, d) {
          var m = !s;
          s || (s = {});
          for (var I = -1, x = i.length; ++I < x; ) {
            var R = i[I], _ = d ? d(s[R], n[R], R, s, n) : r;
            _ === r && (_ = n[R]), m ? lr(s, R, _) : Su(s, R, _);
          }
          return s;
        }
        function Zb(n, i) {
          return Hn(n, $a(n), i);
        }
        function Yb(n, i) {
          return Hn(n, qf(n), i);
        }
        function qo(n, i) {
          return function(s, d) {
            var m = Re(s) ? qg : hb, I = i ? i() : {};
            return m(s, n, be(d, 2), I);
          };
        }
        function Gi(n) {
          return De(function(i, s) {
            var d = -1, m = s.length, I = m > 1 ? s[m - 1] : r, x = m > 2 ? s[2] : r;
            for (I = n.length > 3 && typeof I == "function" ? (m--, I) : r, x && Xt(s[0], s[1], x) && (I = m < 3 ? r : I, m = 1), i = it(i); ++d < m; ) {
              var R = s[d];
              R && n(i, R, d, I);
            }
            return i;
          });
        }
        function Nf(n, i) {
          return function(s, d) {
            if (s == null)
              return s;
            if (!qt(s))
              return n(s, d);
            for (var m = s.length, I = i ? m : -1, x = it(s); (i ? I-- : ++I < m) && d(x[I], I, x) !== !1; )
              ;
            return s;
          };
        }
        function Vf(n) {
          return function(i, s, d) {
            for (var m = -1, I = it(i), x = d(i), R = x.length; R--; ) {
              var _ = x[n ? R : ++m];
              if (s(I[_], _, I) === !1)
                break;
            }
            return i;
          };
        }
        function Jb(n, i, s) {
          var d = i & E, m = Ou(n);
          function I() {
            var x = this && this !== Xe && this instanceof I ? m : n;
            return x.apply(d ? s : this, arguments);
          }
          return I;
        }
        function Wf(n) {
          return function(i) {
            i = Qe(i);
            var s = Fi(i) ? Tn(i) : r, d = s ? s[0] : i.charAt(0), m = s ? Or(s, 1).join("") : i.slice(1);
            return d[n]() + m;
          };
        }
        function Li(n) {
          return function(i) {
            return ma(Nd(Md(i).replace(bu, "")), n, "");
          };
        }
        function Ou(n) {
          return function() {
            var i = arguments;
            switch (i.length) {
              case 0:
                return new n();
              case 1:
                return new n(i[0]);
              case 2:
                return new n(i[0], i[1]);
              case 3:
                return new n(i[0], i[1], i[2]);
              case 4:
                return new n(i[0], i[1], i[2], i[3]);
              case 5:
                return new n(i[0], i[1], i[2], i[3], i[4]);
              case 6:
                return new n(i[0], i[1], i[2], i[3], i[4], i[5]);
              case 7:
                return new n(i[0], i[1], i[2], i[3], i[4], i[5], i[6]);
            }
            var s = _i(n.prototype), d = n.apply(s, i);
            return ct(d) ? d : s;
          };
        }
        function Ub(n, i, s) {
          var d = Ou(n);
          function m() {
            for (var I = arguments.length, x = M(I), R = I, _ = ki(m); R--; )
              x[R] = arguments[R];
            var Z = I < 3 && x[0] !== _ && x[I - 1] !== _ ? [] : Sr(x, _);
            if (I -= Z.length, I < s)
              return Yf(
                n,
                i,
                $o,
                m.placeholder,
                r,
                x,
                Z,
                r,
                r,
                s - I
              );
            var Y = this && this !== Xe && this instanceof m ? d : n;
            return Ft(Y, this, x);
          }
          return m;
        }
        function Xf(n) {
          return function(i, s, d) {
            var m = it(i);
            if (!qt(i)) {
              var I = be(s, 3);
              i = Rt(i), s = function(R) {
                return I(m[R], R, m);
              };
            }
            var x = n(i, s, d);
            return x > -1 ? m[I ? i[x] : x] : r;
          };
        }
        function Hf(n) {
          return fr(function(i) {
            var s = i.length, d = s, m = In.prototype.thru;
            for (n && i.reverse(); d--; ) {
              var I = i[d];
              if (typeof I != "function")
                throw new vn(l);
              if (m && !x && ns(I) == "wrapper")
                var x = new In([], !0);
            }
            for (d = x ? d : s; ++d < s; ) {
              I = i[d];
              var R = ns(I), _ = R == "wrapper" ? Qa(I) : r;
              _ && el(_[0]) && _[1] == (z | L | H | N) && !_[4].length && _[9] == 1 ? x = x[ns(_[0])].apply(x, _[3]) : x = I.length == 1 && el(I) ? x[R]() : x.thru(I);
            }
            return function() {
              var Z = arguments, Y = Z[0];
              if (x && Z.length == 1 && Re(Y))
                return x.plant(Y).value();
              for (var U = 0, re = s ? i[U].apply(this, Z) : Y; ++U < s; )
                re = i[U].call(this, re);
              return re;
            };
          });
        }
        function $o(n, i, s, d, m, I, x, R, _, Z) {
          var Y = i & z, U = i & E, re = i & F, ce = i & (L | D), ve = i & V, Ge = re ? r : Ou(n);
          function Ie() {
            for (var Ne = arguments.length, He = M(Ne), fn = Ne; fn--; )
              He[fn] = arguments[fn];
            if (ce)
              var Ht = ki(Ie), dn = om(He, Ht);
            if (d && (He = Df(He, d, m, ce)), I && (He = Mf(He, I, x, ce)), Ne -= dn, ce && Ne < Z) {
              var bt = Sr(He, Ht);
              return Yf(
                n,
                i,
                $o,
                Ie.placeholder,
                s,
                He,
                bt,
                R,
                _,
                Z - Ne
              );
            }
            var Gn = U ? s : this, gr = re ? Gn[n] : n;
            return Ne = He.length, R ? He = hy(He, R) : ve && Ne > 1 && He.reverse(), Y && _ < Ne && (He.length = _), this && this !== Xe && this instanceof Ie && (gr = Ge || Ou(gr)), gr.apply(Gn, He);
          }
          return Ie;
        }
        function zf(n, i) {
          return function(s, d) {
            return xb(s, n, i(d), {});
          };
        }
        function Ko(n, i) {
          return function(s, d) {
            var m;
            if (s === r && d === r)
              return i;
            if (s !== r && (m = s), d !== r) {
              if (m === r)
                return d;
              typeof s == "string" || typeof d == "string" ? (s = ln(s), d = ln(d)) : (s = Pf(s), d = Pf(d)), m = n(s, d);
            }
            return m;
          };
        }
        function Ya(n) {
          return fr(function(i) {
            return i = lt(i, an(be())), De(function(s) {
              var d = this;
              return n(i, function(m) {
                return Ft(m, d, s);
              });
            });
          });
        }
        function es(n, i) {
          i = i === r ? " " : ln(i);
          var s = i.length;
          if (s < 2)
            return s ? Na(i, n) : i;
          var d = Na(i, Vo(n / Ri(i)));
          return Fi(i) ? Or(Tn(d), 0, n).join("") : d.slice(0, n);
        }
        function jb(n, i, s, d) {
          var m = i & E, I = Ou(n);
          function x() {
            for (var R = -1, _ = arguments.length, Z = -1, Y = d.length, U = M(Y + _), re = this && this !== Xe && this instanceof x ? I : n; ++Z < Y; )
              U[Z] = d[Z];
            for (; _--; )
              U[Z++] = arguments[++R];
            return Ft(re, m ? s : this, U);
          }
          return x;
        }
        function Zf(n) {
          return function(i, s, d) {
            return d && typeof d != "number" && Xt(i, s, d) && (s = d = r), i = hr(i), s === r ? (s = i, i = 0) : s = hr(s), d = d === r ? i < s ? 1 : -1 : hr(d), Gb(i, s, d, n);
          };
        }
        function ts(n) {
          return function(i, s) {
            return typeof i == "string" && typeof s == "string" || (i = wn(i), s = wn(s)), n(i, s);
          };
        }
        function Yf(n, i, s, d, m, I, x, R, _, Z) {
          var Y = i & L, U = Y ? x : r, re = Y ? r : x, ce = Y ? I : r, ve = Y ? r : I;
          i |= Y ? H : G, i &= ~(Y ? G : H), i & k || (i &= -4);
          var Ge = [
            n,
            i,
            m,
            ce,
            U,
            ve,
            re,
            R,
            _,
            Z
          ], Ie = s.apply(r, Ge);
          return el(n) && id(Ie, Ge), Ie.placeholder = d, ud(Ie, n, i);
        }
        function Ja(n) {
          var i = wt[n];
          return function(s, d) {
            if (s = wn(s), d = d == null ? 0 : Tt(_e(d), 292), d && uf(s)) {
              var m = (Qe(s) + "e").split("e"), I = i(m[0] + "e" + (+m[1] + d));
              return m = (Qe(I) + "e").split("e"), +(m[0] + "e" + (+m[1] - d));
            }
            return i(s);
          };
        }
        var Qb = Ti && 1 / Oo(new Ti([, -0]))[1] == fe ? function(n) {
          return new Ti(n);
        } : gl;
        function Jf(n) {
          return function(i) {
            var s = Bt(i);
            return s == Ee ? Aa(i) : s == Mt ? pm(i) : um(i, n(i));
          };
        }
        function cr(n, i, s, d, m, I, x, R) {
          var _ = i & F;
          if (!_ && typeof n != "function")
            throw new vn(l);
          var Z = d ? d.length : 0;
          if (Z || (i &= -97, d = m = r), x = x === r ? x : St(_e(x), 0), R = R === r ? R : _e(R), Z -= m ? m.length : 0, i & G) {
            var Y = d, U = m;
            d = m = r;
          }
          var re = _ ? r : Qa(n), ce = [
            n,
            i,
            s,
            d,
            m,
            Y,
            U,
            I,
            x,
            R
          ];
          if (re && fy(ce, re), n = ce[0], i = ce[1], s = ce[2], d = ce[3], m = ce[4], R = ce[9] = ce[9] === r ? _ ? 0 : n.length : St(ce[9] - Z, 0), !R && i & (L | D) && (i &= -25), !i || i == E)
            var ve = Jb(n, i, s);
          else i == L || i == D ? ve = Ub(n, i, R) : (i == H || i == (E | H)) && !m.length ? ve = jb(n, i, s, d) : ve = $o.apply(r, ce);
          var Ge = re ? Ff : id;
          return ud(Ge(ve, ce), n, i);
        }
        function Uf(n, i, s, d) {
          return n === r || _n(n, Oi[s]) && !$e.call(d, s) ? i : n;
        }
        function jf(n, i, s, d, m, I) {
          return ct(n) && ct(i) && (I.set(i, n), Uo(n, i, r, jf, I), I.delete(i)), n;
        }
        function qb(n) {
          return _u(n) ? r : n;
        }
        function Qf(n, i, s, d, m, I) {
          var x = s & P, R = n.length, _ = i.length;
          if (R != _ && !(x && _ > R))
            return !1;
          var Z = I.get(n), Y = I.get(i);
          if (Z && Y)
            return Z == i && Y == n;
          var U = -1, re = !0, ce = s & A ? new Kr() : r;
          for (I.set(n, i), I.set(i, n); ++U < R; ) {
            var ve = n[U], Ge = i[U];
            if (d)
              var Ie = x ? d(Ge, ve, U, i, n, I) : d(ve, Ge, U, n, i, I);
            if (Ie !== r) {
              if (Ie)
                continue;
              re = !1;
              break;
            }
            if (ce) {
              if (!ba(i, function(Ne, He) {
                if (!vu(ce, He) && (ve === Ne || m(ve, Ne, s, d, I)))
                  return ce.push(He);
              })) {
                re = !1;
                break;
              }
            } else if (!(ve === Ge || m(ve, Ge, s, d, I))) {
              re = !1;
              break;
            }
          }
          return I.delete(n), I.delete(i), re;
        }
        function $b(n, i, s, d, m, I, x) {
          switch (s) {
            case he:
              if (n.byteLength != i.byteLength || n.byteOffset != i.byteOffset)
                return !1;
              n = n.buffer, i = i.buffer;
            case $:
              return !(n.byteLength != i.byteLength || !I(new ko(n), new ko(i)));
            case Me:
            case ft:
            case vt:
              return _n(+n, +i);
            case ue:
              return n.name == i.name && n.message == i.message;
            case Nn:
            case tr:
              return n == i + "";
            case Ee:
              var R = Aa;
            case Mt:
              var _ = d & P;
              if (R || (R = Oo), n.size != i.size && !_)
                return !1;
              var Z = x.get(n);
              if (Z)
                return Z == i;
              d |= A, x.set(n, i);
              var Y = Qf(R(n), R(i), d, m, I, x);
              return x.delete(n), Y;
            case Cr:
              if (wu)
                return wu.call(n) == wu.call(i);
          }
          return !1;
        }
        function Kb(n, i, s, d, m, I) {
          var x = s & P, R = Ua(n), _ = R.length, Z = Ua(i), Y = Z.length;
          if (_ != Y && !x)
            return !1;
          for (var U = _; U--; ) {
            var re = R[U];
            if (!(x ? re in i : $e.call(i, re)))
              return !1;
          }
          var ce = I.get(n), ve = I.get(i);
          if (ce && ve)
            return ce == i && ve == n;
          var Ge = !0;
          I.set(n, i), I.set(i, n);
          for (var Ie = x; ++U < _; ) {
            re = R[U];
            var Ne = n[re], He = i[re];
            if (d)
              var fn = x ? d(He, Ne, re, i, n, I) : d(Ne, He, re, n, i, I);
            if (!(fn === r ? Ne === He || m(Ne, He, s, d, I) : fn)) {
              Ge = !1;
              break;
            }
            Ie || (Ie = re == "constructor");
          }
          if (Ge && !Ie) {
            var Ht = n.constructor, dn = i.constructor;
            Ht != dn && "constructor" in n && "constructor" in i && !(typeof Ht == "function" && Ht instanceof Ht && typeof dn == "function" && dn instanceof dn) && (Ge = !1);
          }
          return I.delete(n), I.delete(i), Ge;
        }
        function fr(n) {
          return nl(nd(n, r, fd), n + "");
        }
        function Ua(n) {
          return mf(n, Rt, $a);
        }
        function ja(n) {
          return mf(n, $t, qf);
        }
        var Qa = Xo ? function(n) {
          return Xo.get(n);
        } : gl;
        function ns(n) {
          for (var i = n.name + "", s = Bi[i], d = $e.call(Bi, i) ? s.length : 0; d--; ) {
            var m = s[d], I = m.func;
            if (I == null || I == n)
              return m.name;
          }
          return i;
        }
        function ki(n) {
          var i = $e.call(y, "placeholder") ? y : n;
          return i.placeholder;
        }
        function be() {
          var n = y.iteratee || pl;
          return n = n === pl ? vf : n, arguments.length ? n(arguments[0], arguments[1]) : n;
        }
        function rs(n, i) {
          var s = n.__data__;
          return sy(i) ? s[typeof i == "string" ? "string" : "hash"] : s.map;
        }
        function qa(n) {
          for (var i = Rt(n), s = i.length; s--; ) {
            var d = i[s], m = n[d];
            i[s] = [d, m, ed(m)];
          }
          return i;
        }
        function ni(n, i) {
          var s = cm(n, i);
          return yf(s) ? s : r;
        }
        function ey(n) {
          var i = $e.call(n, qr), s = n[qr];
          try {
            n[qr] = r;
            var d = !0;
          } catch {
          }
          var m = Go.call(n);
          return d && (i ? n[qr] = s : delete n[qr]), m;
        }
        var $a = Sa ? function(n) {
          return n == null ? [] : (n = it(n), Ar(Sa(n), function(i) {
            return nf.call(n, i);
          }));
        } : ml, qf = Sa ? function(n) {
          for (var i = []; n; )
            wr(i, $a(n)), n = Do(n);
          return i;
        } : ml, Bt = Wt;
        (Ea && Bt(new Ea(new ArrayBuffer(1))) != he || Cu && Bt(new Cu()) != Ee || Fa && Bt(Fa.resolve()) != mi || Ti && Bt(new Ti()) != Mt || xu && Bt(new xu()) != nr) && (Bt = function(n) {
          var i = Wt(n), s = i == Yt ? n.constructor : r, d = s ? ri(s) : "";
          if (d)
            switch (d) {
              case km:
                return he;
              case Dm:
                return Ee;
              case Mm:
                return mi;
              case Nm:
                return Mt;
              case Vm:
                return nr;
            }
          return i;
        });
        function ty(n, i, s) {
          for (var d = -1, m = s.length; ++d < m; ) {
            var I = s[d], x = I.size;
            switch (I.type) {
              case "drop":
                n += x;
                break;
              case "dropRight":
                i -= x;
                break;
              case "take":
                i = Tt(i, n + x);
                break;
              case "takeRight":
                n = St(n, i - x);
                break;
            }
          }
          return { start: n, end: i };
        }
        function ny(n) {
          var i = n.match(ir);
          return i ? i[1].split(Ys) : [];
        }
        function $f(n, i, s) {
          i = Pr(i, n);
          for (var d = -1, m = i.length, I = !1; ++d < m; ) {
            var x = zn(i[d]);
            if (!(I = n != null && s(n, x)))
              break;
            n = n[x];
          }
          return I || ++d != m ? I : (m = n == null ? 0 : n.length, !!m && cs(m) && dr(x, m) && (Re(n) || ii(n)));
        }
        function ry(n) {
          var i = n.length, s = new n.constructor(i);
          return i && typeof n[0] == "string" && $e.call(n, "index") && (s.index = n.index, s.input = n.input), s;
        }
        function Kf(n) {
          return typeof n.constructor == "function" && !Tu(n) ? _i(Do(n)) : {};
        }
        function iy(n, i, s) {
          var d = n.constructor;
          switch (i) {
            case $:
              return Za(n);
            case Me:
            case ft:
              return new d(+n);
            case he:
              return Wb(n, s);
            case Oe:
            case Te:
            case Et:
            case Jt:
            case Nt:
            case gn:
            case Ut:
            case It:
            case un:
              return Lf(n, s);
            case Ee:
              return new d();
            case vt:
            case tr:
              return new d(n);
            case Nn:
              return Xb(n);
            case Mt:
              return new d();
            case Cr:
              return Hb(n);
          }
        }
        function uy(n, i) {
          var s = i.length;
          if (!s)
            return n;
          var d = s - 1;
          return i[d] = (s > 1 ? "& " : "") + i[d], i = i.join(s > 2 ? ", " : " "), n.replace(hu, `{
/* [wrapped with ` + i + `] */
`);
        }
        function oy(n) {
          return Re(n) || ii(n) || !!(rf && n && n[rf]);
        }
        function dr(n, i) {
          var s = typeof n;
          return i = i ?? Se, !!i && (s == "number" || s != "symbol" && ta.test(n)) && n > -1 && n % 1 == 0 && n < i;
        }
        function Xt(n, i, s) {
          if (!ct(s))
            return !1;
          var d = typeof i;
          return (d == "number" ? qt(s) && dr(i, s.length) : d == "string" && i in s) ? _n(s[i], n) : !1;
        }
        function Ka(n, i) {
          if (Re(n))
            return !1;
          var s = typeof n;
          return s == "number" || s == "symbol" || s == "boolean" || n == null || cn(n) ? !0 : Hs.test(n) || !Zr.test(n) || i != null && n in it(i);
        }
        function sy(n) {
          var i = typeof n;
          return i == "string" || i == "number" || i == "symbol" || i == "boolean" ? n !== "__proto__" : n === null;
        }
        function el(n) {
          var i = ns(n), s = y[i];
          if (typeof s != "function" || !(i in Ve.prototype))
            return !1;
          if (n === s)
            return !0;
          var d = Qa(s);
          return !!d && n === d[0];
        }
        function ay(n) {
          return !!Kc && Kc in n;
        }
        var ly = Bo ? pr : bl;
        function Tu(n) {
          var i = n && n.constructor, s = typeof i == "function" && i.prototype || Oi;
          return n === s;
        }
        function ed(n) {
          return n === n && !ct(n);
        }
        function td(n, i) {
          return function(s) {
            return s == null ? !1 : s[n] === i && (i !== r || n in it(s));
          };
        }
        function cy(n) {
          var i = as(n, function(d) {
            return s.size === p && s.clear(), d;
          }), s = i.cache;
          return i;
        }
        function fy(n, i) {
          var s = n[1], d = i[1], m = s | d, I = m < (E | F | z), x = d == z && s == L || d == z && s == N && n[7].length <= i[8] || d == (z | N) && i[7].length <= i[8] && s == L;
          if (!(I || x))
            return n;
          d & E && (n[2] = i[2], m |= s & E ? 0 : k);
          var R = i[3];
          if (R) {
            var _ = n[3];
            n[3] = _ ? Df(_, R, i[4]) : R, n[4] = _ ? Sr(n[3], h) : i[4];
          }
          return R = i[5], R && (_ = n[5], n[5] = _ ? Mf(_, R, i[6]) : R, n[6] = _ ? Sr(n[5], h) : i[6]), R = i[7], R && (n[7] = R), d & z && (n[8] = n[8] == null ? i[8] : Tt(n[8], i[8])), n[9] == null && (n[9] = i[9]), n[0] = i[0], n[1] = m, n;
        }
        function dy(n) {
          var i = [];
          if (n != null)
            for (var s in it(n))
              i.push(s);
          return i;
        }
        function py(n) {
          return Go.call(n);
        }
        function nd(n, i, s) {
          return i = St(i === r ? n.length - 1 : i, 0), function() {
            for (var d = arguments, m = -1, I = St(d.length - i, 0), x = M(I); ++m < I; )
              x[m] = d[i + m];
            m = -1;
            for (var R = M(i + 1); ++m < i; )
              R[m] = d[m];
            return R[i] = s(x), Ft(n, this, R);
          };
        }
        function rd(n, i) {
          return i.length < 2 ? n : ti(n, xn(i, 0, -1));
        }
        function hy(n, i) {
          for (var s = n.length, d = Tt(i.length, s), m = Qt(n); d--; ) {
            var I = i[d];
            n[d] = dr(I, s) ? m[I] : r;
          }
          return n;
        }
        function tl(n, i) {
          if (!(i === "constructor" && typeof n[i] == "function") && i != "__proto__")
            return n[i];
        }
        var id = od(Ff), Bu = Pm || function(n, i) {
          return Xe.setTimeout(n, i);
        }, nl = od(Db);
        function ud(n, i, s) {
          var d = i + "";
          return nl(n, uy(d, gy(ny(d), s)));
        }
        function od(n) {
          var i = 0, s = 0;
          return function() {
            var d = _m(), m = te - (d - s);
            if (s = d, m > 0) {
              if (++i >= j)
                return arguments[0];
            } else
              i = 0;
            return n.apply(r, arguments);
          };
        }
        function is(n, i) {
          var s = -1, d = n.length, m = d - 1;
          for (i = i === r ? d : i; ++s < i; ) {
            var I = Ma(s, m), x = n[I];
            n[I] = n[s], n[s] = x;
          }
          return n.length = i, n;
        }
        var sd = cy(function(n) {
          var i = [];
          return n.charCodeAt(0) === 46 && i.push(""), n.replace(zs, function(s, d, m, I) {
            i.push(m ? I.replace(js, "$1") : d || s);
          }), i;
        });
        function zn(n) {
          if (typeof n == "string" || cn(n))
            return n;
          var i = n + "";
          return i == "0" && 1 / n == -1 / 0 ? "-0" : i;
        }
        function ri(n) {
          if (n != null) {
            try {
              return _o.call(n);
            } catch {
            }
            try {
              return n + "";
            } catch {
            }
          }
          return "";
        }
        function gy(n, i) {
          return yn(Ye, function(s) {
            var d = "_." + s[0];
            i & s[1] && !Ro(n, d) && n.push(d);
          }), n.sort();
        }
        function ad(n) {
          if (n instanceof Ve)
            return n.clone();
          var i = new In(n.__wrapped__, n.__chain__);
          return i.__actions__ = Qt(n.__actions__), i.__index__ = n.__index__, i.__values__ = n.__values__, i;
        }
        function my(n, i, s) {
          (s ? Xt(n, i, s) : i === r) ? i = 1 : i = St(_e(i), 0);
          var d = n == null ? 0 : n.length;
          if (!d || i < 1)
            return [];
          for (var m = 0, I = 0, x = M(Vo(d / i)); m < d; )
            x[I++] = xn(n, m, m += i);
          return x;
        }
        function by(n) {
          for (var i = -1, s = n == null ? 0 : n.length, d = 0, m = []; ++i < s; ) {
            var I = n[i];
            I && (m[d++] = I);
          }
          return m;
        }
        function yy() {
          var n = arguments.length;
          if (!n)
            return [];
          for (var i = M(n - 1), s = arguments[0], d = n; d--; )
            i[d - 1] = arguments[d];
          return wr(Re(s) ? Qt(s) : [s], Pt(i, 1));
        }
        var vy = De(function(n, i) {
          return mt(n) ? Eu(n, Pt(i, 1, mt, !0)) : [];
        }), Iy = De(function(n, i) {
          var s = An(i);
          return mt(s) && (s = r), mt(n) ? Eu(n, Pt(i, 1, mt, !0), be(s, 2)) : [];
        }), Cy = De(function(n, i) {
          var s = An(i);
          return mt(s) && (s = r), mt(n) ? Eu(n, Pt(i, 1, mt, !0), r, s) : [];
        });
        function xy(n, i, s) {
          var d = n == null ? 0 : n.length;
          return d ? (i = s || i === r ? 1 : _e(i), xn(n, i < 0 ? 0 : i, d)) : [];
        }
        function Ay(n, i, s) {
          var d = n == null ? 0 : n.length;
          return d ? (i = s || i === r ? 1 : _e(i), i = d - i, xn(n, 0, i < 0 ? 0 : i)) : [];
        }
        function wy(n, i) {
          return n && n.length ? Qo(n, be(i, 3), !0, !0) : [];
        }
        function Sy(n, i) {
          return n && n.length ? Qo(n, be(i, 3), !0) : [];
        }
        function Ey(n, i, s, d) {
          var m = n == null ? 0 : n.length;
          return m ? (s && typeof s != "number" && Xt(n, i, s) && (s = 0, d = m), yb(n, i, s, d)) : [];
        }
        function ld(n, i, s) {
          var d = n == null ? 0 : n.length;
          if (!d)
            return -1;
          var m = s == null ? 0 : _e(s);
          return m < 0 && (m = St(d + m, 0)), Po(n, be(i, 3), m);
        }
        function cd(n, i, s) {
          var d = n == null ? 0 : n.length;
          if (!d)
            return -1;
          var m = d - 1;
          return s !== r && (m = _e(s), m = s < 0 ? St(d + m, 0) : Tt(m, d - 1)), Po(n, be(i, 3), m, !0);
        }
        function fd(n) {
          var i = n == null ? 0 : n.length;
          return i ? Pt(n, 1) : [];
        }
        function Fy(n) {
          var i = n == null ? 0 : n.length;
          return i ? Pt(n, fe) : [];
        }
        function Ry(n, i) {
          var s = n == null ? 0 : n.length;
          return s ? (i = i === r ? 1 : _e(i), Pt(n, i)) : [];
        }
        function Py(n) {
          for (var i = -1, s = n == null ? 0 : n.length, d = {}; ++i < s; ) {
            var m = n[i];
            d[m[0]] = m[1];
          }
          return d;
        }
        function dd(n) {
          return n && n.length ? n[0] : r;
        }
        function Oy(n, i, s) {
          var d = n == null ? 0 : n.length;
          if (!d)
            return -1;
          var m = s == null ? 0 : _e(s);
          return m < 0 && (m = St(d + m, 0)), Ei(n, i, m);
        }
        function Ty(n) {
          var i = n == null ? 0 : n.length;
          return i ? xn(n, 0, -1) : [];
        }
        var By = De(function(n) {
          var i = lt(n, Ha);
          return i.length && i[0] === n[0] ? _a(i) : [];
        }), _y = De(function(n) {
          var i = An(n), s = lt(n, Ha);
          return i === An(s) ? i = r : s.pop(), s.length && s[0] === n[0] ? _a(s, be(i, 2)) : [];
        }), Gy = De(function(n) {
          var i = An(n), s = lt(n, Ha);
          return i = typeof i == "function" ? i : r, i && s.pop(), s.length && s[0] === n[0] ? _a(s, r, i) : [];
        });
        function Ly(n, i) {
          return n == null ? "" : Tm.call(n, i);
        }
        function An(n) {
          var i = n == null ? 0 : n.length;
          return i ? n[i - 1] : r;
        }
        function ky(n, i, s) {
          var d = n == null ? 0 : n.length;
          if (!d)
            return -1;
          var m = d;
          return s !== r && (m = _e(s), m = m < 0 ? St(d + m, 0) : Tt(m, d - 1)), i === i ? gm(n, i, m) : Po(n, Zc, m, !0);
        }
        function Dy(n, i) {
          return n && n.length ? Af(n, _e(i)) : r;
        }
        var My = De(pd);
        function pd(n, i) {
          return n && n.length && i && i.length ? Da(n, i) : n;
        }
        function Ny(n, i, s) {
          return n && n.length && i && i.length ? Da(n, i, be(s, 2)) : n;
        }
        function Vy(n, i, s) {
          return n && n.length && i && i.length ? Da(n, i, r, s) : n;
        }
        var Wy = fr(function(n, i) {
          var s = n == null ? 0 : n.length, d = Pa(n, i);
          return Ef(n, lt(i, function(m) {
            return dr(m, s) ? +m : m;
          }).sort(kf)), d;
        });
        function Xy(n, i) {
          var s = [];
          if (!(n && n.length))
            return s;
          var d = -1, m = [], I = n.length;
          for (i = be(i, 3); ++d < I; ) {
            var x = n[d];
            i(x, d, n) && (s.push(x), m.push(d));
          }
          return Ef(n, m), s;
        }
        function rl(n) {
          return n == null ? n : Lm.call(n);
        }
        function Hy(n, i, s) {
          var d = n == null ? 0 : n.length;
          return d ? (s && typeof s != "number" && Xt(n, i, s) ? (i = 0, s = d) : (i = i == null ? 0 : _e(i), s = s === r ? d : _e(s)), xn(n, i, s)) : [];
        }
        function zy(n, i) {
          return jo(n, i);
        }
        function Zy(n, i, s) {
          return Va(n, i, be(s, 2));
        }
        function Yy(n, i) {
          var s = n == null ? 0 : n.length;
          if (s) {
            var d = jo(n, i);
            if (d < s && _n(n[d], i))
              return d;
          }
          return -1;
        }
        function Jy(n, i) {
          return jo(n, i, !0);
        }
        function Uy(n, i, s) {
          return Va(n, i, be(s, 2), !0);
        }
        function jy(n, i) {
          var s = n == null ? 0 : n.length;
          if (s) {
            var d = jo(n, i, !0) - 1;
            if (_n(n[d], i))
              return d;
          }
          return -1;
        }
        function Qy(n) {
          return n && n.length ? Rf(n) : [];
        }
        function qy(n, i) {
          return n && n.length ? Rf(n, be(i, 2)) : [];
        }
        function $y(n) {
          var i = n == null ? 0 : n.length;
          return i ? xn(n, 1, i) : [];
        }
        function Ky(n, i, s) {
          return n && n.length ? (i = s || i === r ? 1 : _e(i), xn(n, 0, i < 0 ? 0 : i)) : [];
        }
        function e0(n, i, s) {
          var d = n == null ? 0 : n.length;
          return d ? (i = s || i === r ? 1 : _e(i), i = d - i, xn(n, i < 0 ? 0 : i, d)) : [];
        }
        function t0(n, i) {
          return n && n.length ? Qo(n, be(i, 3), !1, !0) : [];
        }
        function n0(n, i) {
          return n && n.length ? Qo(n, be(i, 3)) : [];
        }
        var r0 = De(function(n) {
          return Rr(Pt(n, 1, mt, !0));
        }), i0 = De(function(n) {
          var i = An(n);
          return mt(i) && (i = r), Rr(Pt(n, 1, mt, !0), be(i, 2));
        }), u0 = De(function(n) {
          var i = An(n);
          return i = typeof i == "function" ? i : r, Rr(Pt(n, 1, mt, !0), r, i);
        });
        function o0(n) {
          return n && n.length ? Rr(n) : [];
        }
        function s0(n, i) {
          return n && n.length ? Rr(n, be(i, 2)) : [];
        }
        function a0(n, i) {
          return i = typeof i == "function" ? i : r, n && n.length ? Rr(n, r, i) : [];
        }
        function il(n) {
          if (!(n && n.length))
            return [];
          var i = 0;
          return n = Ar(n, function(s) {
            if (mt(s))
              return i = St(s.length, i), !0;
          }), Ca(i, function(s) {
            return lt(n, ya(s));
          });
        }
        function hd(n, i) {
          if (!(n && n.length))
            return [];
          var s = il(n);
          return i == null ? s : lt(s, function(d) {
            return Ft(i, r, d);
          });
        }
        var l0 = De(function(n, i) {
          return mt(n) ? Eu(n, i) : [];
        }), c0 = De(function(n) {
          return Xa(Ar(n, mt));
        }), f0 = De(function(n) {
          var i = An(n);
          return mt(i) && (i = r), Xa(Ar(n, mt), be(i, 2));
        }), d0 = De(function(n) {
          var i = An(n);
          return i = typeof i == "function" ? i : r, Xa(Ar(n, mt), r, i);
        }), p0 = De(il);
        function h0(n, i) {
          return Bf(n || [], i || [], Su);
        }
        function g0(n, i) {
          return Bf(n || [], i || [], Pu);
        }
        var m0 = De(function(n) {
          var i = n.length, s = i > 1 ? n[i - 1] : r;
          return s = typeof s == "function" ? (n.pop(), s) : r, hd(n, s);
        });
        function gd(n) {
          var i = y(n);
          return i.__chain__ = !0, i;
        }
        function b0(n, i) {
          return i(n), n;
        }
        function us(n, i) {
          return i(n);
        }
        var y0 = fr(function(n) {
          var i = n.length, s = i ? n[0] : 0, d = this.__wrapped__, m = function(I) {
            return Pa(I, n);
          };
          return i > 1 || this.__actions__.length || !(d instanceof Ve) || !dr(s) ? this.thru(m) : (d = d.slice(s, +s + (i ? 1 : 0)), d.__actions__.push({
            func: us,
            args: [m],
            thisArg: r
          }), new In(d, this.__chain__).thru(function(I) {
            return i && !I.length && I.push(r), I;
          }));
        });
        function v0() {
          return gd(this);
        }
        function I0() {
          return new In(this.value(), this.__chain__);
        }
        function C0() {
          this.__values__ === r && (this.__values__ = Pd(this.value()));
          var n = this.__index__ >= this.__values__.length, i = n ? r : this.__values__[this.__index__++];
          return { done: n, value: i };
        }
        function x0() {
          return this;
        }
        function A0(n) {
          for (var i, s = this; s instanceof zo; ) {
            var d = ad(s);
            d.__index__ = 0, d.__values__ = r, i ? m.__wrapped__ = d : i = d;
            var m = d;
            s = s.__wrapped__;
          }
          return m.__wrapped__ = n, i;
        }
        function w0() {
          var n = this.__wrapped__;
          if (n instanceof Ve) {
            var i = n;
            return this.__actions__.length && (i = new Ve(this)), i = i.reverse(), i.__actions__.push({
              func: us,
              args: [rl],
              thisArg: r
            }), new In(i, this.__chain__);
          }
          return this.thru(rl);
        }
        function S0() {
          return Tf(this.__wrapped__, this.__actions__);
        }
        var E0 = qo(function(n, i, s) {
          $e.call(n, s) ? ++n[s] : lr(n, s, 1);
        });
        function F0(n, i, s) {
          var d = Re(n) ? Hc : bb;
          return s && Xt(n, i, s) && (i = r), d(n, be(i, 3));
        }
        function R0(n, i) {
          var s = Re(n) ? Ar : hf;
          return s(n, be(i, 3));
        }
        var P0 = Xf(ld), O0 = Xf(cd);
        function T0(n, i) {
          return Pt(os(n, i), 1);
        }
        function B0(n, i) {
          return Pt(os(n, i), fe);
        }
        function _0(n, i, s) {
          return s = s === r ? 1 : _e(s), Pt(os(n, i), s);
        }
        function md(n, i) {
          var s = Re(n) ? yn : Fr;
          return s(n, be(i, 3));
        }
        function bd(n, i) {
          var s = Re(n) ? $g : pf;
          return s(n, be(i, 3));
        }
        var G0 = qo(function(n, i, s) {
          $e.call(n, s) ? n[s].push(i) : lr(n, s, [i]);
        });
        function L0(n, i, s, d) {
          n = qt(n) ? n : Mi(n), s = s && !d ? _e(s) : 0;
          var m = n.length;
          return s < 0 && (s = St(m + s, 0)), fs(n) ? s <= m && n.indexOf(i, s) > -1 : !!m && Ei(n, i, s) > -1;
        }
        var k0 = De(function(n, i, s) {
          var d = -1, m = typeof i == "function", I = qt(n) ? M(n.length) : [];
          return Fr(n, function(x) {
            I[++d] = m ? Ft(i, x, s) : Fu(x, i, s);
          }), I;
        }), D0 = qo(function(n, i, s) {
          lr(n, s, i);
        });
        function os(n, i) {
          var s = Re(n) ? lt : If;
          return s(n, be(i, 3));
        }
        function M0(n, i, s, d) {
          return n == null ? [] : (Re(i) || (i = i == null ? [] : [i]), s = d ? r : s, Re(s) || (s = s == null ? [] : [s]), wf(n, i, s));
        }
        var N0 = qo(function(n, i, s) {
          n[s ? 0 : 1].push(i);
        }, function() {
          return [[], []];
        });
        function V0(n, i, s) {
          var d = Re(n) ? ma : Jc, m = arguments.length < 3;
          return d(n, be(i, 4), s, m, Fr);
        }
        function W0(n, i, s) {
          var d = Re(n) ? Kg : Jc, m = arguments.length < 3;
          return d(n, be(i, 4), s, m, pf);
        }
        function X0(n, i) {
          var s = Re(n) ? Ar : hf;
          return s(n, ls(be(i, 3)));
        }
        function H0(n) {
          var i = Re(n) ? lf : Lb;
          return i(n);
        }
        function z0(n, i, s) {
          (s ? Xt(n, i, s) : i === r) ? i = 1 : i = _e(i);
          var d = Re(n) ? db : kb;
          return d(n, i);
        }
        function Z0(n) {
          var i = Re(n) ? pb : Mb;
          return i(n);
        }
        function Y0(n) {
          if (n == null)
            return 0;
          if (qt(n))
            return fs(n) ? Ri(n) : n.length;
          var i = Bt(n);
          return i == Ee || i == Mt ? n.size : La(n).length;
        }
        function J0(n, i, s) {
          var d = Re(n) ? ba : Nb;
          return s && Xt(n, i, s) && (i = r), d(n, be(i, 3));
        }
        var U0 = De(function(n, i) {
          if (n == null)
            return [];
          var s = i.length;
          return s > 1 && Xt(n, i[0], i[1]) ? i = [] : s > 2 && Xt(i[0], i[1], i[2]) && (i = [i[0]]), wf(n, Pt(i, 1), []);
        }), ss = Rm || function() {
          return Xe.Date.now();
        };
        function j0(n, i) {
          if (typeof i != "function")
            throw new vn(l);
          return n = _e(n), function() {
            if (--n < 1)
              return i.apply(this, arguments);
          };
        }
        function yd(n, i, s) {
          return i = s ? r : i, i = n && i == null ? n.length : i, cr(n, z, r, r, r, r, i);
        }
        function vd(n, i) {
          var s;
          if (typeof i != "function")
            throw new vn(l);
          return n = _e(n), function() {
            return --n > 0 && (s = i.apply(this, arguments)), n <= 1 && (i = r), s;
          };
        }
        var ul = De(function(n, i, s) {
          var d = E;
          if (s.length) {
            var m = Sr(s, ki(ul));
            d |= H;
          }
          return cr(n, d, i, s, m);
        }), Id = De(function(n, i, s) {
          var d = E | F;
          if (s.length) {
            var m = Sr(s, ki(Id));
            d |= H;
          }
          return cr(i, d, n, s, m);
        });
        function Cd(n, i, s) {
          i = s ? r : i;
          var d = cr(n, L, r, r, r, r, r, i);
          return d.placeholder = Cd.placeholder, d;
        }
        function xd(n, i, s) {
          i = s ? r : i;
          var d = cr(n, D, r, r, r, r, r, i);
          return d.placeholder = xd.placeholder, d;
        }
        function Ad(n, i, s) {
          var d, m, I, x, R, _, Z = 0, Y = !1, U = !1, re = !0;
          if (typeof n != "function")
            throw new vn(l);
          i = wn(i) || 0, ct(s) && (Y = !!s.leading, U = "maxWait" in s, I = U ? St(wn(s.maxWait) || 0, i) : I, re = "trailing" in s ? !!s.trailing : re);
          function ce(bt) {
            var Gn = d, gr = m;
            return d = m = r, Z = bt, x = n.apply(gr, Gn), x;
          }
          function ve(bt) {
            return Z = bt, R = Bu(Ne, i), Y ? ce(bt) : x;
          }
          function Ge(bt) {
            var Gn = bt - _, gr = bt - Z, Xd = i - Gn;
            return U ? Tt(Xd, I - gr) : Xd;
          }
          function Ie(bt) {
            var Gn = bt - _, gr = bt - Z;
            return _ === r || Gn >= i || Gn < 0 || U && gr >= I;
          }
          function Ne() {
            var bt = ss();
            if (Ie(bt))
              return He(bt);
            R = Bu(Ne, Ge(bt));
          }
          function He(bt) {
            return R = r, re && d ? ce(bt) : (d = m = r, x);
          }
          function fn() {
            R !== r && _f(R), Z = 0, d = _ = m = R = r;
          }
          function Ht() {
            return R === r ? x : He(ss());
          }
          function dn() {
            var bt = ss(), Gn = Ie(bt);
            if (d = arguments, m = this, _ = bt, Gn) {
              if (R === r)
                return ve(_);
              if (U)
                return _f(R), R = Bu(Ne, i), ce(_);
            }
            return R === r && (R = Bu(Ne, i)), x;
          }
          return dn.cancel = fn, dn.flush = Ht, dn;
        }
        var Q0 = De(function(n, i) {
          return df(n, 1, i);
        }), q0 = De(function(n, i, s) {
          return df(n, wn(i) || 0, s);
        });
        function $0(n) {
          return cr(n, V);
        }
        function as(n, i) {
          if (typeof n != "function" || i != null && typeof i != "function")
            throw new vn(l);
          var s = function() {
            var d = arguments, m = i ? i.apply(this, d) : d[0], I = s.cache;
            if (I.has(m))
              return I.get(m);
            var x = n.apply(this, d);
            return s.cache = I.set(m, x) || I, x;
          };
          return s.cache = new (as.Cache || ar)(), s;
        }
        as.Cache = ar;
        function ls(n) {
          if (typeof n != "function")
            throw new vn(l);
          return function() {
            var i = arguments;
            switch (i.length) {
              case 0:
                return !n.call(this);
              case 1:
                return !n.call(this, i[0]);
              case 2:
                return !n.call(this, i[0], i[1]);
              case 3:
                return !n.call(this, i[0], i[1], i[2]);
            }
            return !n.apply(this, i);
          };
        }
        function K0(n) {
          return vd(2, n);
        }
        var ev = Vb(function(n, i) {
          i = i.length == 1 && Re(i[0]) ? lt(i[0], an(be())) : lt(Pt(i, 1), an(be()));
          var s = i.length;
          return De(function(d) {
            for (var m = -1, I = Tt(d.length, s); ++m < I; )
              d[m] = i[m].call(this, d[m]);
            return Ft(n, this, d);
          });
        }), ol = De(function(n, i) {
          var s = Sr(i, ki(ol));
          return cr(n, H, r, i, s);
        }), wd = De(function(n, i) {
          var s = Sr(i, ki(wd));
          return cr(n, G, r, i, s);
        }), tv = fr(function(n, i) {
          return cr(n, N, r, r, r, i);
        });
        function nv(n, i) {
          if (typeof n != "function")
            throw new vn(l);
          return i = i === r ? i : _e(i), De(n, i);
        }
        function rv(n, i) {
          if (typeof n != "function")
            throw new vn(l);
          return i = i == null ? 0 : St(_e(i), 0), De(function(s) {
            var d = s[i], m = Or(s, 0, i);
            return d && wr(m, d), Ft(n, this, m);
          });
        }
        function iv(n, i, s) {
          var d = !0, m = !0;
          if (typeof n != "function")
            throw new vn(l);
          return ct(s) && (d = "leading" in s ? !!s.leading : d, m = "trailing" in s ? !!s.trailing : m), Ad(n, i, {
            leading: d,
            maxWait: i,
            trailing: m
          });
        }
        function uv(n) {
          return yd(n, 1);
        }
        function ov(n, i) {
          return ol(za(i), n);
        }
        function sv() {
          if (!arguments.length)
            return [];
          var n = arguments[0];
          return Re(n) ? n : [n];
        }
        function av(n) {
          return Cn(n, b);
        }
        function lv(n, i) {
          return i = typeof i == "function" ? i : r, Cn(n, b, i);
        }
        function cv(n) {
          return Cn(n, g | b);
        }
        function fv(n, i) {
          return i = typeof i == "function" ? i : r, Cn(n, g | b, i);
        }
        function dv(n, i) {
          return i == null || ff(n, i, Rt(i));
        }
        function _n(n, i) {
          return n === i || n !== n && i !== i;
        }
        var pv = ts(Ba), hv = ts(function(n, i) {
          return n >= i;
        }), ii = bf(/* @__PURE__ */ function() {
          return arguments;
        }()) ? bf : function(n) {
          return dt(n) && $e.call(n, "callee") && !nf.call(n, "callee");
        }, Re = M.isArray, gv = Vt ? an(Vt) : Ab;
        function qt(n) {
          return n != null && cs(n.length) && !pr(n);
        }
        function mt(n) {
          return dt(n) && qt(n);
        }
        function mv(n) {
          return n === !0 || n === !1 || dt(n) && Wt(n) == Me;
        }
        var Tr = Om || bl, bv = On ? an(On) : wb;
        function yv(n) {
          return dt(n) && n.nodeType === 1 && !_u(n);
        }
        function vv(n) {
          if (n == null)
            return !0;
          if (qt(n) && (Re(n) || typeof n == "string" || typeof n.splice == "function" || Tr(n) || Di(n) || ii(n)))
            return !n.length;
          var i = Bt(n);
          if (i == Ee || i == Mt)
            return !n.size;
          if (Tu(n))
            return !La(n).length;
          for (var s in n)
            if ($e.call(n, s))
              return !1;
          return !0;
        }
        function Iv(n, i) {
          return Ru(n, i);
        }
        function Cv(n, i, s) {
          s = typeof s == "function" ? s : r;
          var d = s ? s(n, i) : r;
          return d === r ? Ru(n, i, r, s) : !!d;
        }
        function sl(n) {
          if (!dt(n))
            return !1;
          var i = Wt(n);
          return i == ue || i == Dt || typeof n.message == "string" && typeof n.name == "string" && !_u(n);
        }
        function xv(n) {
          return typeof n == "number" && uf(n);
        }
        function pr(n) {
          if (!ct(n))
            return !1;
          var i = Wt(n);
          return i == ae || i == Ae || i == yt || i == bi;
        }
        function Sd(n) {
          return typeof n == "number" && n == _e(n);
        }
        function cs(n) {
          return typeof n == "number" && n > -1 && n % 1 == 0 && n <= Se;
        }
        function ct(n) {
          var i = typeof n;
          return n != null && (i == "object" || i == "function");
        }
        function dt(n) {
          return n != null && typeof n == "object";
        }
        var Ed = bn ? an(bn) : Eb;
        function Av(n, i) {
          return n === i || Ga(n, i, qa(i));
        }
        function wv(n, i, s) {
          return s = typeof s == "function" ? s : r, Ga(n, i, qa(i), s);
        }
        function Sv(n) {
          return Fd(n) && n != +n;
        }
        function Ev(n) {
          if (ly(n))
            throw new we(a);
          return yf(n);
        }
        function Fv(n) {
          return n === null;
        }
        function Rv(n) {
          return n == null;
        }
        function Fd(n) {
          return typeof n == "number" || dt(n) && Wt(n) == vt;
        }
        function _u(n) {
          if (!dt(n) || Wt(n) != Yt)
            return !1;
          var i = Do(n);
          if (i === null)
            return !0;
          var s = $e.call(i, "constructor") && i.constructor;
          return typeof s == "function" && s instanceof s && _o.call(s) == wm;
        }
        var al = Wn ? an(Wn) : Fb;
        function Pv(n) {
          return Sd(n) && n >= -9007199254740991 && n <= Se;
        }
        var Rd = yu ? an(yu) : Rb;
        function fs(n) {
          return typeof n == "string" || !Re(n) && dt(n) && Wt(n) == tr;
        }
        function cn(n) {
          return typeof n == "symbol" || dt(n) && Wt(n) == Cr;
        }
        var Di = Qr ? an(Qr) : Pb;
        function Ov(n) {
          return n === r;
        }
        function Tv(n) {
          return dt(n) && Bt(n) == nr;
        }
        function Bv(n) {
          return dt(n) && Wt(n) == X;
        }
        var _v = ts(ka), Gv = ts(function(n, i) {
          return n <= i;
        });
        function Pd(n) {
          if (!n)
            return [];
          if (qt(n))
            return fs(n) ? Tn(n) : Qt(n);
          if (Iu && n[Iu])
            return dm(n[Iu]());
          var i = Bt(n), s = i == Ee ? Aa : i == Mt ? Oo : Mi;
          return s(n);
        }
        function hr(n) {
          if (!n)
            return n === 0 ? n : 0;
          if (n = wn(n), n === fe || n === -1 / 0) {
            var i = n < 0 ? -1 : 1;
            return i * je;
          }
          return n === n ? n : 0;
        }
        function _e(n) {
          var i = hr(n), s = i % 1;
          return i === i ? s ? i - s : i : 0;
        }
        function Od(n) {
          return n ? ei(_e(n), 0, We) : 0;
        }
        function wn(n) {
          if (typeof n == "number")
            return n;
          if (cn(n))
            return S;
          if (ct(n)) {
            var i = typeof n.valueOf == "function" ? n.valueOf() : n;
            n = ct(i) ? i + "" : i;
          }
          if (typeof n != "string")
            return n === 0 ? n : +n;
          n = Uc(n);
          var s = $s.test(n);
          return s || ea.test(n) ? Fe(n.slice(2), s ? 2 : 8) : qs.test(n) ? S : +n;
        }
        function Td(n) {
          return Hn(n, $t(n));
        }
        function Lv(n) {
          return n ? ei(_e(n), -9007199254740991, Se) : n === 0 ? n : 0;
        }
        function Qe(n) {
          return n == null ? "" : ln(n);
        }
        var kv = Gi(function(n, i) {
          if (Tu(i) || qt(i)) {
            Hn(i, Rt(i), n);
            return;
          }
          for (var s in i)
            $e.call(i, s) && Su(n, s, i[s]);
        }), Bd = Gi(function(n, i) {
          Hn(i, $t(i), n);
        }), ds = Gi(function(n, i, s, d) {
          Hn(i, $t(i), n, d);
        }), Dv = Gi(function(n, i, s, d) {
          Hn(i, Rt(i), n, d);
        }), Mv = fr(Pa);
        function Nv(n, i) {
          var s = _i(n);
          return i == null ? s : cf(s, i);
        }
        var Vv = De(function(n, i) {
          n = it(n);
          var s = -1, d = i.length, m = d > 2 ? i[2] : r;
          for (m && Xt(i[0], i[1], m) && (d = 1); ++s < d; )
            for (var I = i[s], x = $t(I), R = -1, _ = x.length; ++R < _; ) {
              var Z = x[R], Y = n[Z];
              (Y === r || _n(Y, Oi[Z]) && !$e.call(n, Z)) && (n[Z] = I[Z]);
            }
          return n;
        }), Wv = De(function(n) {
          return n.push(r, jf), Ft(_d, r, n);
        });
        function Xv(n, i) {
          return zc(n, be(i, 3), Xn);
        }
        function Hv(n, i) {
          return zc(n, be(i, 3), Ta);
        }
        function zv(n, i) {
          return n == null ? n : Oa(n, be(i, 3), $t);
        }
        function Zv(n, i) {
          return n == null ? n : gf(n, be(i, 3), $t);
        }
        function Yv(n, i) {
          return n && Xn(n, be(i, 3));
        }
        function Jv(n, i) {
          return n && Ta(n, be(i, 3));
        }
        function Uv(n) {
          return n == null ? [] : Jo(n, Rt(n));
        }
        function jv(n) {
          return n == null ? [] : Jo(n, $t(n));
        }
        function ll(n, i, s) {
          var d = n == null ? r : ti(n, i);
          return d === r ? s : d;
        }
        function Qv(n, i) {
          return n != null && $f(n, i, vb);
        }
        function cl(n, i) {
          return n != null && $f(n, i, Ib);
        }
        var qv = zf(function(n, i, s) {
          i != null && typeof i.toString != "function" && (i = Go.call(i)), n[i] = s;
        }, dl(Kt)), $v = zf(function(n, i, s) {
          i != null && typeof i.toString != "function" && (i = Go.call(i)), $e.call(n, i) ? n[i].push(s) : n[i] = [s];
        }, be), Kv = De(Fu);
        function Rt(n) {
          return qt(n) ? af(n) : La(n);
        }
        function $t(n) {
          return qt(n) ? af(n, !0) : Ob(n);
        }
        function eI(n, i) {
          var s = {};
          return i = be(i, 3), Xn(n, function(d, m, I) {
            lr(s, i(d, m, I), d);
          }), s;
        }
        function tI(n, i) {
          var s = {};
          return i = be(i, 3), Xn(n, function(d, m, I) {
            lr(s, m, i(d, m, I));
          }), s;
        }
        var nI = Gi(function(n, i, s) {
          Uo(n, i, s);
        }), _d = Gi(function(n, i, s, d) {
          Uo(n, i, s, d);
        }), rI = fr(function(n, i) {
          var s = {};
          if (n == null)
            return s;
          var d = !1;
          i = lt(i, function(I) {
            return I = Pr(I, n), d || (d = I.length > 1), I;
          }), Hn(n, ja(n), s), d && (s = Cn(s, g | v | b, qb));
          for (var m = i.length; m--; )
            Wa(s, i[m]);
          return s;
        });
        function iI(n, i) {
          return Gd(n, ls(be(i)));
        }
        var uI = fr(function(n, i) {
          return n == null ? {} : Bb(n, i);
        });
        function Gd(n, i) {
          if (n == null)
            return {};
          var s = lt(ja(n), function(d) {
            return [d];
          });
          return i = be(i), Sf(n, s, function(d, m) {
            return i(d, m[0]);
          });
        }
        function oI(n, i, s) {
          i = Pr(i, n);
          var d = -1, m = i.length;
          for (m || (m = 1, n = r); ++d < m; ) {
            var I = n == null ? r : n[zn(i[d])];
            I === r && (d = m, I = s), n = pr(I) ? I.call(n) : I;
          }
          return n;
        }
        function sI(n, i, s) {
          return n == null ? n : Pu(n, i, s);
        }
        function aI(n, i, s, d) {
          return d = typeof d == "function" ? d : r, n == null ? n : Pu(n, i, s, d);
        }
        var Ld = Jf(Rt), kd = Jf($t);
        function lI(n, i, s) {
          var d = Re(n), m = d || Tr(n) || Di(n);
          if (i = be(i, 4), s == null) {
            var I = n && n.constructor;
            m ? s = d ? new I() : [] : ct(n) ? s = pr(I) ? _i(Do(n)) : {} : s = {};
          }
          return (m ? yn : Xn)(n, function(x, R, _) {
            return i(s, x, R, _);
          }), s;
        }
        function cI(n, i) {
          return n == null ? !0 : Wa(n, i);
        }
        function fI(n, i, s) {
          return n == null ? n : Of(n, i, za(s));
        }
        function dI(n, i, s, d) {
          return d = typeof d == "function" ? d : r, n == null ? n : Of(n, i, za(s), d);
        }
        function Mi(n) {
          return n == null ? [] : xa(n, Rt(n));
        }
        function pI(n) {
          return n == null ? [] : xa(n, $t(n));
        }
        function hI(n, i, s) {
          return s === r && (s = i, i = r), s !== r && (s = wn(s), s = s === s ? s : 0), i !== r && (i = wn(i), i = i === i ? i : 0), ei(wn(n), i, s);
        }
        function gI(n, i, s) {
          return i = hr(i), s === r ? (s = i, i = 0) : s = hr(s), n = wn(n), Cb(n, i, s);
        }
        function mI(n, i, s) {
          if (s && typeof s != "boolean" && Xt(n, i, s) && (i = s = r), s === r && (typeof i == "boolean" ? (s = i, i = r) : typeof n == "boolean" && (s = n, n = r)), n === r && i === r ? (n = 0, i = 1) : (n = hr(n), i === r ? (i = n, n = 0) : i = hr(i)), n > i) {
            var d = n;
            n = i, i = d;
          }
          if (s || n % 1 || i % 1) {
            var m = of();
            return Tt(n + m * (i - n + nt("1e-" + ((m + "").length - 1))), i);
          }
          return Ma(n, i);
        }
        var bI = Li(function(n, i, s) {
          return i = i.toLowerCase(), n + (s ? Dd(i) : i);
        });
        function Dd(n) {
          return fl(Qe(n).toLowerCase());
        }
        function Md(n) {
          return n = Qe(n), n && n.replace(ur, sm).replace(pa, "");
        }
        function yI(n, i, s) {
          n = Qe(n), i = ln(i);
          var d = n.length;
          s = s === r ? d : ei(_e(s), 0, d);
          var m = s;
          return s -= i.length, s >= 0 && n.slice(s, m) == i;
        }
        function vI(n) {
          return n = Qe(n), n && zr.test(n) ? n.replace(oo, am) : n;
        }
        function II(n) {
          return n = Qe(n), n && Zs.test(n) ? n.replace(du, "\\$&") : n;
        }
        var CI = Li(function(n, i, s) {
          return n + (s ? "-" : "") + i.toLowerCase();
        }), xI = Li(function(n, i, s) {
          return n + (s ? " " : "") + i.toLowerCase();
        }), AI = Wf("toLowerCase");
        function wI(n, i, s) {
          n = Qe(n), i = _e(i);
          var d = i ? Ri(n) : 0;
          if (!i || d >= i)
            return n;
          var m = (i - d) / 2;
          return es(Wo(m), s) + n + es(Vo(m), s);
        }
        function SI(n, i, s) {
          n = Qe(n), i = _e(i);
          var d = i ? Ri(n) : 0;
          return i && d < i ? n + es(i - d, s) : n;
        }
        function EI(n, i, s) {
          n = Qe(n), i = _e(i);
          var d = i ? Ri(n) : 0;
          return i && d < i ? es(i - d, s) + n : n;
        }
        function FI(n, i, s) {
          return s || i == null ? i = 0 : i && (i = +i), Gm(Qe(n).replace(pu, ""), i || 0);
        }
        function RI(n, i, s) {
          return (s ? Xt(n, i, s) : i === r) ? i = 1 : i = _e(i), Na(Qe(n), i);
        }
        function PI() {
          var n = arguments, i = Qe(n[0]);
          return n.length < 3 ? i : i.replace(n[1], n[2]);
        }
        var OI = Li(function(n, i, s) {
          return n + (s ? "_" : "") + i.toLowerCase();
        });
        function TI(n, i, s) {
          return s && typeof s != "number" && Xt(n, i, s) && (i = s = r), s = s === r ? We : s >>> 0, s ? (n = Qe(n), n && (typeof i == "string" || i != null && !al(i)) && (i = ln(i), !i && Fi(n)) ? Or(Tn(n), 0, s) : n.split(i, s)) : [];
        }
        var BI = Li(function(n, i, s) {
          return n + (s ? " " : "") + fl(i);
        });
        function _I(n, i, s) {
          return n = Qe(n), s = s == null ? 0 : ei(_e(s), 0, n.length), i = ln(i), n.slice(s, s + i.length) == i;
        }
        function GI(n, i, s) {
          var d = y.templateSettings;
          s && Xt(n, i, s) && (i = r), n = Qe(n), i = ds({}, i, d, Uf);
          var m = ds({}, i.imports, d.imports, Uf), I = Rt(m), x = xa(m, I), R, _, Z = 0, Y = i.interpolate || vi, U = "__p += '", re = wa(
            (i.escape || vi).source + "|" + Y.source + "|" + (Y === yi ? Qs : vi).source + "|" + (i.evaluate || vi).source + "|$",
            "g"
          ), ce = "//# sourceURL=" + ($e.call(i, "sourceURL") ? (i.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++ha + "]") + `
`;
          n.replace(re, function(Ie, Ne, He, fn, Ht, dn) {
            return He || (He = fn), U += n.slice(Z, dn).replace(na, lm), Ne && (R = !0, U += `' +
__e(` + Ne + `) +
'`), Ht && (_ = !0, U += `';
` + Ht + `;
__p += '`), He && (U += `' +
((__t = (` + He + `)) == null ? '' : __t) +
'`), Z = dn + Ie.length, Ie;
          }), U += `';
`;
          var ve = $e.call(i, "variable") && i.variable;
          if (!ve)
            U = `with (obj) {
` + U + `
}
`;
          else if (Us.test(ve))
            throw new we(c);
          U = (_ ? U.replace(on, "") : U).replace(rr, "$1").replace(io, "$1;"), U = "function(" + (ve || "obj") + `) {
` + (ve ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (R ? ", __e = _.escape" : "") + (_ ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + U + `return __p
}`;
          var Ge = Vd(function() {
            return Je(I, ce + "return " + U).apply(r, x);
          });
          if (Ge.source = U, sl(Ge))
            throw Ge;
          return Ge;
        }
        function LI(n) {
          return Qe(n).toLowerCase();
        }
        function kI(n) {
          return Qe(n).toUpperCase();
        }
        function DI(n, i, s) {
          if (n = Qe(n), n && (s || i === r))
            return Uc(n);
          if (!n || !(i = ln(i)))
            return n;
          var d = Tn(n), m = Tn(i), I = jc(d, m), x = Qc(d, m) + 1;
          return Or(d, I, x).join("");
        }
        function MI(n, i, s) {
          if (n = Qe(n), n && (s || i === r))
            return n.slice(0, $c(n) + 1);
          if (!n || !(i = ln(i)))
            return n;
          var d = Tn(n), m = Qc(d, Tn(i)) + 1;
          return Or(d, 0, m).join("");
        }
        function NI(n, i, s) {
          if (n = Qe(n), n && (s || i === r))
            return n.replace(pu, "");
          if (!n || !(i = ln(i)))
            return n;
          var d = Tn(n), m = jc(d, Tn(i));
          return Or(d, m).join("");
        }
        function VI(n, i) {
          var s = ne, d = Q;
          if (ct(i)) {
            var m = "separator" in i ? i.separator : m;
            s = "length" in i ? _e(i.length) : s, d = "omission" in i ? ln(i.omission) : d;
          }
          n = Qe(n);
          var I = n.length;
          if (Fi(n)) {
            var x = Tn(n);
            I = x.length;
          }
          if (s >= I)
            return n;
          var R = s - Ri(d);
          if (R < 1)
            return d;
          var _ = x ? Or(x, 0, R).join("") : n.slice(0, R);
          if (m === r)
            return _ + d;
          if (x && (R += _.length - R), al(m)) {
            if (n.slice(R).search(m)) {
              var Z, Y = _;
              for (m.global || (m = wa(m.source, Qe(mn.exec(m)) + "g")), m.lastIndex = 0; Z = m.exec(Y); )
                var U = Z.index;
              _ = _.slice(0, U === r ? R : U);
            }
          } else if (n.indexOf(ln(m), R) != R) {
            var re = _.lastIndexOf(m);
            re > -1 && (_ = _.slice(0, re));
          }
          return _ + d;
        }
        function WI(n) {
          return n = Qe(n), n && lu.test(n) ? n.replace(uo, mm) : n;
        }
        var XI = Li(function(n, i, s) {
          return n + (s ? " " : "") + i.toUpperCase();
        }), fl = Wf("toUpperCase");
        function Nd(n, i, s) {
          return n = Qe(n), i = s ? r : i, i === r ? fm(n) ? vm(n) : nm(n) : n.match(i) || [];
        }
        var Vd = De(function(n, i) {
          try {
            return Ft(n, r, i);
          } catch (s) {
            return sl(s) ? s : new we(s);
          }
        }), HI = fr(function(n, i) {
          return yn(i, function(s) {
            s = zn(s), lr(n, s, ul(n[s], n));
          }), n;
        });
        function zI(n) {
          var i = n == null ? 0 : n.length, s = be();
          return n = i ? lt(n, function(d) {
            if (typeof d[1] != "function")
              throw new vn(l);
            return [s(d[0]), d[1]];
          }) : [], De(function(d) {
            for (var m = -1; ++m < i; ) {
              var I = n[m];
              if (Ft(I[0], this, d))
                return Ft(I[1], this, d);
            }
          });
        }
        function ZI(n) {
          return mb(Cn(n, g));
        }
        function dl(n) {
          return function() {
            return n;
          };
        }
        function YI(n, i) {
          return n == null || n !== n ? i : n;
        }
        var JI = Hf(), UI = Hf(!0);
        function Kt(n) {
          return n;
        }
        function pl(n) {
          return vf(typeof n == "function" ? n : Cn(n, g));
        }
        function jI(n) {
          return Cf(Cn(n, g));
        }
        function QI(n, i) {
          return xf(n, Cn(i, g));
        }
        var qI = De(function(n, i) {
          return function(s) {
            return Fu(s, n, i);
          };
        }), $I = De(function(n, i) {
          return function(s) {
            return Fu(n, s, i);
          };
        });
        function hl(n, i, s) {
          var d = Rt(i), m = Jo(i, d);
          s == null && !(ct(i) && (m.length || !d.length)) && (s = i, i = n, n = this, m = Jo(i, Rt(i)));
          var I = !(ct(s) && "chain" in s) || !!s.chain, x = pr(n);
          return yn(m, function(R) {
            var _ = i[R];
            n[R] = _, x && (n.prototype[R] = function() {
              var Z = this.__chain__;
              if (I || Z) {
                var Y = n(this.__wrapped__), U = Y.__actions__ = Qt(this.__actions__);
                return U.push({ func: _, args: arguments, thisArg: n }), Y.__chain__ = Z, Y;
              }
              return _.apply(n, wr([this.value()], arguments));
            });
          }), n;
        }
        function KI() {
          return Xe._ === this && (Xe._ = Sm), this;
        }
        function gl() {
        }
        function e1(n) {
          return n = _e(n), De(function(i) {
            return Af(i, n);
          });
        }
        var t1 = Ya(lt), n1 = Ya(Hc), r1 = Ya(ba);
        function Wd(n) {
          return Ka(n) ? ya(zn(n)) : _b(n);
        }
        function i1(n) {
          return function(i) {
            return n == null ? r : ti(n, i);
          };
        }
        var u1 = Zf(), o1 = Zf(!0);
        function ml() {
          return [];
        }
        function bl() {
          return !1;
        }
        function s1() {
          return {};
        }
        function a1() {
          return "";
        }
        function l1() {
          return !0;
        }
        function c1(n, i) {
          if (n = _e(n), n < 1 || n > Se)
            return [];
          var s = We, d = Tt(n, We);
          i = be(i), n -= We;
          for (var m = Ca(d, i); ++s < n; )
            i(s);
          return m;
        }
        function f1(n) {
          return Re(n) ? lt(n, zn) : cn(n) ? [n] : Qt(sd(Qe(n)));
        }
        function d1(n) {
          var i = ++Am;
          return Qe(n) + i;
        }
        var p1 = Ko(function(n, i) {
          return n + i;
        }, 0), h1 = Ja("ceil"), g1 = Ko(function(n, i) {
          return n / i;
        }, 1), m1 = Ja("floor");
        function b1(n) {
          return n && n.length ? Yo(n, Kt, Ba) : r;
        }
        function y1(n, i) {
          return n && n.length ? Yo(n, be(i, 2), Ba) : r;
        }
        function v1(n) {
          return Yc(n, Kt);
        }
        function I1(n, i) {
          return Yc(n, be(i, 2));
        }
        function C1(n) {
          return n && n.length ? Yo(n, Kt, ka) : r;
        }
        function x1(n, i) {
          return n && n.length ? Yo(n, be(i, 2), ka) : r;
        }
        var A1 = Ko(function(n, i) {
          return n * i;
        }, 1), w1 = Ja("round"), S1 = Ko(function(n, i) {
          return n - i;
        }, 0);
        function E1(n) {
          return n && n.length ? Ia(n, Kt) : 0;
        }
        function F1(n, i) {
          return n && n.length ? Ia(n, be(i, 2)) : 0;
        }
        return y.after = j0, y.ary = yd, y.assign = kv, y.assignIn = Bd, y.assignInWith = ds, y.assignWith = Dv, y.at = Mv, y.before = vd, y.bind = ul, y.bindAll = HI, y.bindKey = Id, y.castArray = sv, y.chain = gd, y.chunk = my, y.compact = by, y.concat = yy, y.cond = zI, y.conforms = ZI, y.constant = dl, y.countBy = E0, y.create = Nv, y.curry = Cd, y.curryRight = xd, y.debounce = Ad, y.defaults = Vv, y.defaultsDeep = Wv, y.defer = Q0, y.delay = q0, y.difference = vy, y.differenceBy = Iy, y.differenceWith = Cy, y.drop = xy, y.dropRight = Ay, y.dropRightWhile = wy, y.dropWhile = Sy, y.fill = Ey, y.filter = R0, y.flatMap = T0, y.flatMapDeep = B0, y.flatMapDepth = _0, y.flatten = fd, y.flattenDeep = Fy, y.flattenDepth = Ry, y.flip = $0, y.flow = JI, y.flowRight = UI, y.fromPairs = Py, y.functions = Uv, y.functionsIn = jv, y.groupBy = G0, y.initial = Ty, y.intersection = By, y.intersectionBy = _y, y.intersectionWith = Gy, y.invert = qv, y.invertBy = $v, y.invokeMap = k0, y.iteratee = pl, y.keyBy = D0, y.keys = Rt, y.keysIn = $t, y.map = os, y.mapKeys = eI, y.mapValues = tI, y.matches = jI, y.matchesProperty = QI, y.memoize = as, y.merge = nI, y.mergeWith = _d, y.method = qI, y.methodOf = $I, y.mixin = hl, y.negate = ls, y.nthArg = e1, y.omit = rI, y.omitBy = iI, y.once = K0, y.orderBy = M0, y.over = t1, y.overArgs = ev, y.overEvery = n1, y.overSome = r1, y.partial = ol, y.partialRight = wd, y.partition = N0, y.pick = uI, y.pickBy = Gd, y.property = Wd, y.propertyOf = i1, y.pull = My, y.pullAll = pd, y.pullAllBy = Ny, y.pullAllWith = Vy, y.pullAt = Wy, y.range = u1, y.rangeRight = o1, y.rearg = tv, y.reject = X0, y.remove = Xy, y.rest = nv, y.reverse = rl, y.sampleSize = z0, y.set = sI, y.setWith = aI, y.shuffle = Z0, y.slice = Hy, y.sortBy = U0, y.sortedUniq = Qy, y.sortedUniqBy = qy, y.split = TI, y.spread = rv, y.tail = $y, y.take = Ky, y.takeRight = e0, y.takeRightWhile = t0, y.takeWhile = n0, y.tap = b0, y.throttle = iv, y.thru = us, y.toArray = Pd, y.toPairs = Ld, y.toPairsIn = kd, y.toPath = f1, y.toPlainObject = Td, y.transform = lI, y.unary = uv, y.union = r0, y.unionBy = i0, y.unionWith = u0, y.uniq = o0, y.uniqBy = s0, y.uniqWith = a0, y.unset = cI, y.unzip = il, y.unzipWith = hd, y.update = fI, y.updateWith = dI, y.values = Mi, y.valuesIn = pI, y.without = l0, y.words = Nd, y.wrap = ov, y.xor = c0, y.xorBy = f0, y.xorWith = d0, y.zip = p0, y.zipObject = h0, y.zipObjectDeep = g0, y.zipWith = m0, y.entries = Ld, y.entriesIn = kd, y.extend = Bd, y.extendWith = ds, hl(y, y), y.add = p1, y.attempt = Vd, y.camelCase = bI, y.capitalize = Dd, y.ceil = h1, y.clamp = hI, y.clone = av, y.cloneDeep = cv, y.cloneDeepWith = fv, y.cloneWith = lv, y.conformsTo = dv, y.deburr = Md, y.defaultTo = YI, y.divide = g1, y.endsWith = yI, y.eq = _n, y.escape = vI, y.escapeRegExp = II, y.every = F0, y.find = P0, y.findIndex = ld, y.findKey = Xv, y.findLast = O0, y.findLastIndex = cd, y.findLastKey = Hv, y.floor = m1, y.forEach = md, y.forEachRight = bd, y.forIn = zv, y.forInRight = Zv, y.forOwn = Yv, y.forOwnRight = Jv, y.get = ll, y.gt = pv, y.gte = hv, y.has = Qv, y.hasIn = cl, y.head = dd, y.identity = Kt, y.includes = L0, y.indexOf = Oy, y.inRange = gI, y.invoke = Kv, y.isArguments = ii, y.isArray = Re, y.isArrayBuffer = gv, y.isArrayLike = qt, y.isArrayLikeObject = mt, y.isBoolean = mv, y.isBuffer = Tr, y.isDate = bv, y.isElement = yv, y.isEmpty = vv, y.isEqual = Iv, y.isEqualWith = Cv, y.isError = sl, y.isFinite = xv, y.isFunction = pr, y.isInteger = Sd, y.isLength = cs, y.isMap = Ed, y.isMatch = Av, y.isMatchWith = wv, y.isNaN = Sv, y.isNative = Ev, y.isNil = Rv, y.isNull = Fv, y.isNumber = Fd, y.isObject = ct, y.isObjectLike = dt, y.isPlainObject = _u, y.isRegExp = al, y.isSafeInteger = Pv, y.isSet = Rd, y.isString = fs, y.isSymbol = cn, y.isTypedArray = Di, y.isUndefined = Ov, y.isWeakMap = Tv, y.isWeakSet = Bv, y.join = Ly, y.kebabCase = CI, y.last = An, y.lastIndexOf = ky, y.lowerCase = xI, y.lowerFirst = AI, y.lt = _v, y.lte = Gv, y.max = b1, y.maxBy = y1, y.mean = v1, y.meanBy = I1, y.min = C1, y.minBy = x1, y.stubArray = ml, y.stubFalse = bl, y.stubObject = s1, y.stubString = a1, y.stubTrue = l1, y.multiply = A1, y.nth = Dy, y.noConflict = KI, y.noop = gl, y.now = ss, y.pad = wI, y.padEnd = SI, y.padStart = EI, y.parseInt = FI, y.random = mI, y.reduce = V0, y.reduceRight = W0, y.repeat = RI, y.replace = PI, y.result = oI, y.round = w1, y.runInContext = T, y.sample = H0, y.size = Y0, y.snakeCase = OI, y.some = J0, y.sortedIndex = zy, y.sortedIndexBy = Zy, y.sortedIndexOf = Yy, y.sortedLastIndex = Jy, y.sortedLastIndexBy = Uy, y.sortedLastIndexOf = jy, y.startCase = BI, y.startsWith = _I, y.subtract = S1, y.sum = E1, y.sumBy = F1, y.template = GI, y.times = c1, y.toFinite = hr, y.toInteger = _e, y.toLength = Od, y.toLower = LI, y.toNumber = wn, y.toSafeInteger = Lv, y.toString = Qe, y.toUpper = kI, y.trim = DI, y.trimEnd = MI, y.trimStart = NI, y.truncate = VI, y.unescape = WI, y.uniqueId = d1, y.upperCase = XI, y.upperFirst = fl, y.each = md, y.eachRight = bd, y.first = dd, hl(y, function() {
          var n = {};
          return Xn(y, function(i, s) {
            $e.call(y.prototype, s) || (n[s] = i);
          }), n;
        }(), { chain: !1 }), y.VERSION = u, yn(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(n) {
          y[n].placeholder = y;
        }), yn(["drop", "take"], function(n, i) {
          Ve.prototype[n] = function(s) {
            s = s === r ? 1 : St(_e(s), 0);
            var d = this.__filtered__ && !i ? new Ve(this) : this.clone();
            return d.__filtered__ ? d.__takeCount__ = Tt(s, d.__takeCount__) : d.__views__.push({
              size: Tt(s, We),
              type: n + (d.__dir__ < 0 ? "Right" : "")
            }), d;
          }, Ve.prototype[n + "Right"] = function(s) {
            return this.reverse()[n](s).reverse();
          };
        }), yn(["filter", "map", "takeWhile"], function(n, i) {
          var s = i + 1, d = s == ee || s == pe;
          Ve.prototype[n] = function(m) {
            var I = this.clone();
            return I.__iteratees__.push({
              iteratee: be(m, 3),
              type: s
            }), I.__filtered__ = I.__filtered__ || d, I;
          };
        }), yn(["head", "last"], function(n, i) {
          var s = "take" + (i ? "Right" : "");
          Ve.prototype[n] = function() {
            return this[s](1).value()[0];
          };
        }), yn(["initial", "tail"], function(n, i) {
          var s = "drop" + (i ? "" : "Right");
          Ve.prototype[n] = function() {
            return this.__filtered__ ? new Ve(this) : this[s](1);
          };
        }), Ve.prototype.compact = function() {
          return this.filter(Kt);
        }, Ve.prototype.find = function(n) {
          return this.filter(n).head();
        }, Ve.prototype.findLast = function(n) {
          return this.reverse().find(n);
        }, Ve.prototype.invokeMap = De(function(n, i) {
          return typeof n == "function" ? new Ve(this) : this.map(function(s) {
            return Fu(s, n, i);
          });
        }), Ve.prototype.reject = function(n) {
          return this.filter(ls(be(n)));
        }, Ve.prototype.slice = function(n, i) {
          n = _e(n);
          var s = this;
          return s.__filtered__ && (n > 0 || i < 0) ? new Ve(s) : (n < 0 ? s = s.takeRight(-n) : n && (s = s.drop(n)), i !== r && (i = _e(i), s = i < 0 ? s.dropRight(-i) : s.take(i - n)), s);
        }, Ve.prototype.takeRightWhile = function(n) {
          return this.reverse().takeWhile(n).reverse();
        }, Ve.prototype.toArray = function() {
          return this.take(We);
        }, Xn(Ve.prototype, function(n, i) {
          var s = /^(?:filter|find|map|reject)|While$/.test(i), d = /^(?:head|last)$/.test(i), m = y[d ? "take" + (i == "last" ? "Right" : "") : i], I = d || /^find/.test(i);
          m && (y.prototype[i] = function() {
            var x = this.__wrapped__, R = d ? [1] : arguments, _ = x instanceof Ve, Z = R[0], Y = _ || Re(x), U = function(Ne) {
              var He = m.apply(y, wr([Ne], R));
              return d && re ? He[0] : He;
            };
            Y && s && typeof Z == "function" && Z.length != 1 && (_ = Y = !1);
            var re = this.__chain__, ce = !!this.__actions__.length, ve = I && !re, Ge = _ && !ce;
            if (!I && Y) {
              x = Ge ? x : new Ve(this);
              var Ie = n.apply(x, R);
              return Ie.__actions__.push({ func: us, args: [U], thisArg: r }), new In(Ie, re);
            }
            return ve && Ge ? n.apply(this, R) : (Ie = this.thru(U), ve ? d ? Ie.value()[0] : Ie.value() : Ie);
          });
        }), yn(["pop", "push", "shift", "sort", "splice", "unshift"], function(n) {
          var i = To[n], s = /^(?:push|sort|unshift)$/.test(n) ? "tap" : "thru", d = /^(?:pop|shift)$/.test(n);
          y.prototype[n] = function() {
            var m = arguments;
            if (d && !this.__chain__) {
              var I = this.value();
              return i.apply(Re(I) ? I : [], m);
            }
            return this[s](function(x) {
              return i.apply(Re(x) ? x : [], m);
            });
          };
        }), Xn(Ve.prototype, function(n, i) {
          var s = y[i];
          if (s) {
            var d = s.name + "";
            $e.call(Bi, d) || (Bi[d] = []), Bi[d].push({ name: i, func: s });
          }
        }), Bi[$o(r, F).name] = [{
          name: "wrapper",
          func: r
        }], Ve.prototype.clone = Wm, Ve.prototype.reverse = Xm, Ve.prototype.value = Hm, y.prototype.at = y0, y.prototype.chain = v0, y.prototype.commit = I0, y.prototype.next = C0, y.prototype.plant = A0, y.prototype.reverse = w0, y.prototype.toJSON = y.prototype.valueOf = y.prototype.value = S0, y.prototype.first = y.prototype.head, Iu && (y.prototype[Iu] = x0), y;
      }, Pi = Im();
      gt ? ((gt.exports = Pi)._ = Pi, rt._ = Pi) : Xe._ = Pi;
    }).call($F);
  }(Xu, Xu.exports)), Xu.exports;
}
var eR = KF();
const tR = /* @__PURE__ */ Ns(eR), Nl = [
  "$.service.db",
  "$.interface.http",
  "$.interface.apphook",
  "$.interface.timer"
  // TODO add support for this (cron string and timers)
], Qg = Ku(void 0), Xc = () => {
  const e = iu(Qg);
  if (!e)
    throw new Error("Must be used inside provider");
  return e;
}, nR = ({
  children: e,
  props: t
}) => {
  const r = Xr(), u = mc(), {
    component: o,
    configuredProps: a,
    propNames: l,
    userId: c
  } = t, f = o.key, [
    p,
    h
  ] = et(0), [
    g,
    v
  ] = et({}), [
    b,
    P
  ] = et(!1), [
    A,
    E
  ] = et({}), [
    F,
    k
  ] = et({});
  qn(() => {
    k({});
  }, [
    o.key
  ]);
  const L = (ue) => F[ue.name];
  let D = a || {};
  const [
    H,
    G
  ] = et(D), z = t.onUpdateConfiguredProps || G;
  t.onUpdateConfiguredProps || (D = H);
  const [
    N,
    V
  ] = et(), [
    ne,
    Q
  ] = et(), j = {
    userId: c,
    componentId: f,
    configuredProps: D,
    dynamicPropsId: N == null ? void 0 : N.id
  }, te = {
    ...j
  }, {
    isFetching: ee
    // TODO error
  } = hi({
    queryKey: [
      "dynamicProps",
      te
    ],
    queryFn: async () => {
      var ae;
      const { dynamicProps: ue } = await r.componentReloadProps(j);
      return ue && ((ae = t.onUpdateDynamicProps) == null || ae.call(t, ue), V(ue)), Q(void 0), [];
    },
    enabled: ne != null
    // TODO or props.dynamicPropsId && !dynamicProps
  }), [
    K,
    pe
  ] = et([]);
  qn(() => {
    Me();
  }, [
    D
  ]);
  let fe = (N == null ? void 0 : N.configurableProps) || t.component.configurable_props || [];
  if (l != null && l.length) {
    const ue = [];
    for (const ae of fe)
      l.findIndex((Ae) => ae.name === Ae) >= 0 && ue.push(ae);
    fe = ue;
  }
  ne != null && (fe = fe.slice(0, ne + 1));
  const Se = (ue, ae) => {
    const Ae = [];
    if (ue.optional || ue.hidden || ue.disabled || Nl.includes(ue.type)) return [];
    if (ue.type === "app") {
      const Ee = g[ue.name];
      if (Ee) {
        const vt = Ee.extra.app;
        Ae.push(...qF({
          prop: ue,
          value: ae,
          app: vt
        }) ?? []);
      } else
        Ae.push("field not registered");
    } else ue.type === "boolean" ? Ae.push(...JF({
      prop: ue,
      value: ae
    }) ?? []) : ue.type === "integer" ? Ae.push(...UF({
      prop: ue,
      value: ae
    }) ?? []) : ue.type === "string" ? Ae.push(...jF({
      prop: ue,
      value: ae
    }) ?? []) : ue.type === "string[]" && Ae.push(...YF({
      prop: ue,
      value: ae
    }) ?? []);
    return Ae;
  }, je = (ue) => {
    let ae;
    for (let Ae = 0; Ae < fe.length; Ae++) {
      const Ee = fe[Ae];
      if (Ee.hidden || Ee.optional && !L(Ee))
        continue;
      if (ue[Ee.name] === void 0 && ae == null && (Ee.type === "app" || Ee.remoteOptions)) {
        ae = Ae;
        break;
      }
    }
    h(ae);
  }, S = (ue) => {
    z(ue), je(ue);
    const ae = {};
    for (let Ae = 0; Ae < fe.length; Ae++) {
      const Ee = fe[Ae], vt = ue[Ee.name], rn = Se(Ee, vt);
      rn.length && (ae[Ee.name] = rn);
    }
    E(ae);
  };
  qn(() => {
    je(H);
  }, [
    H
  ]), qn(() => {
    const ue = {};
    for (const ae of fe) {
      if (ae.hidden || Nl.includes(ae.type) || ae.optional && !L(ae))
        continue;
      const Ae = D[ae.name];
      Ae === void 0 ? "default" in ae && ae.default != null && (ue[ae.name] = ae.default) : ae.type === "integer" && typeof Ae != "number" ? delete ue[ae.name] : ue[ae.name] = Ae;
    }
    zF(ue, D) || S(ue);
  }, [
    fe
  ]);
  const [
    We,
    Le
  ] = et(c);
  qn(() => {
    We !== c && (S({}), Le(c));
  }, [
    c
  ]);
  const w = (ue, ae) => {
    const Ae = fe[ue], Ee = {
      ...D
    };
    ae === void 0 ? delete Ee[Ae.name] : Ee[Ae.name] = ae, z(Ee), Ae.reloadProps && Q(ue), (Ae.type === "app" || Ae.remoteOptions) && je(Ee);
    const vt = Se(Ae, ae), rn = {
      ...A
    };
    vt.length ? rn[Ae.name] = vt : delete rn[Ae.name], E(rn);
  }, [Ye, me] = et({}), ke = (ue, ae) => {
    me((Ee) => ({
      ...Ee,
      [ue.name]: ae
    }));
    const Ae = fe.findIndex((Ee) => Ee.name === ue.name);
    w(Ae, ae);
  }, yt = (ue) => Ye[ue.name] ?? !1, Me = () => {
    const ue = [];
    for (const ae of fe) {
      if (!ae || ae.optional || ae.hidden || Nl.includes(ae.type)) continue;
      const Ae = D[ae.name];
      Se(ae, Ae).length && ue.push(ae.name);
    }
    K && tR.isEqual(ue, K) || pe(ue);
  }, ft = (ue) => {
    v((ae) => (ae[ue.prop.name] = ue, ae)), Me();
  }, Dt = {
    id: u,
    isValid: !Object.keys(A).length,
    // XXX want to expose more from errors
    props: t,
    userId: c,
    component: o,
    configurableProps: fe,
    configuredProps: D,
    dynamicProps: N,
    dynamicPropsQueryIsFetching: ee,
    errors: A,
    fields: g,
    optionalPropIsEnabled: L,
    optionalPropSetEnabled: ke,
    getOptionalPropValue: yt,
    propsNeedConfiguring: K,
    queryDisabledIdx: p,
    registerField: ft,
    setConfiguredProp: w,
    setSubmitting: P,
    submitting: b
  };
  return /* @__PURE__ */ le(Qg.Provider, { value: Dt, children: e });
}, rR = (e) => {
  const { getComponents: t } = kt(), { ControlSelect: r } = t();
  return /* @__PURE__ */ le(r, { ...e });
};
function iR({ queryEnabled: e }) {
  const t = Xr(), {
    userId: r,
    component: u,
    configurableProps: o,
    configuredProps: a,
    dynamicProps: l,
    props: { disableQueryDisabling: c }
  } = Xc(), {
    idx: f,
    prop: p
  } = uu(), [
    h,
    g
  ] = et(""), [
    v,
    b
  ] = et(0), [
    P,
    A
  ] = et(!0), [
    E,
    F
  ] = et(void 0), [
    k,
    L
  ] = et({
    page: 0,
    prevContext: {},
    data: [],
    values: /* @__PURE__ */ new Set()
  }), D = {};
  for (let K = 0; K < f; K++) {
    const pe = o[K];
    D[pe.name] = a[pe.name];
  }
  const H = {
    userId: r,
    page: v,
    prevContext: E,
    componentId: u.key,
    propName: p.name,
    configuredProps: D,
    dynamicPropsId: l == null ? void 0 : l.id
  };
  p.useQuery && (H.query = h || "");
  const G = {
    ...H
  };
  delete G.dynamicPropsId;
  const [
    z,
    N
  ] = et(), V = () => {
    b(k.page), F(k.prevContext), L({
      ...k,
      prevContext: {}
    });
  }, {
    isFetching: ne,
    refetch: Q
  } = hi({
    queryKey: [
      "componentConfigure",
      G
    ],
    queryFn: async () => {
      N(void 0);
      const K = await t.componentConfigure(H), {
        options: pe,
        stringOptions: fe,
        errors: Se
      } = K;
      if (Se != null && Se.length) {
        try {
          N(JSON.parse(Se[0]));
        } catch {
          N({
            name: "Error",
            message: Se[0]
          });
        }
        return [];
      }
      let je = [];
      if (pe != null && pe.length && (je = pe), fe != null && fe.length) {
        const w = [];
        for (const Ye of fe)
          w.push({
            label: Ye,
            value: Ye
          });
        je = w;
      }
      const S = [], We = new Set(k.values);
      for (const w of je || []) {
        const Ye = typeof w == "string" ? w : w.value;
        We.has(Ye) || (We.add(Ye), S.push(w));
      }
      let Le = k.data;
      return S.length ? (Le = [
        ...k.data,
        ...S
      ], L({
        page: v + 1,
        prevContext: K.context,
        data: Le,
        values: We
      })) : A(!1), Le;
    },
    enabled: !!e
  }), j = () => !ne && !z && P, te = z ? z.message : c ? "Click to configure" : e ? void 0 : "Configure props above first", ee = c ? !1 : !e;
  return /* @__PURE__ */ le(
    dg,
    {
      isCreatable: !0,
      showLoadMoreButton: j(),
      onLoadMore: V,
      options: k.data,
      component: rR,
      selectProps: {
        isLoading: ne,
        placeholder: te,
        isDisabled: ee,
        inputValue: p.useQuery ? h : void 0,
        onInputChange(K) {
          p.useQuery && (g(K), Q());
        },
        onMenuOpen() {
          c && !e && Q();
        }
      }
    }
  );
}
function uR(e) {
  const { field: t, form: r } = e, { queryDisabledIdx: u } = r, { prop: o, idx: a } = t, { getComponents: l } = kt(), { ControlInput: c } = l(), { ControlApp: f } = l(), { ControlSelect: p } = l(), { ControlBoolean: h } = l(), g = "app" in t.extra ? t.extra.app : void 0;
  if (o.remoteOptions || o.type === "$.discord.channel")
    return /* @__PURE__ */ le(
      iR,
      {
        queryEnabled: u == null || u >= a,
        component: p
      }
    );
  if ("options" in o && o.options) {
    let v = o.options;
    return typeof v[0] != "object" && (v = v.map((b) => ({
      label: b,
      value: b
    }))), /* @__PURE__ */ le(
      p,
      {
        options: v.map((b) => ({
          label: String(b),
          value: b
        })),
        selectProps: {
          components: {
            IndicatorSeparator: () => null
          }
        }
      }
    );
  }
  if (o.type.endsWith("[][]"))
    throw new Error("Unsupported property type: " + o.type);
  if (o.type.endsWith("[]"))
    return /* @__PURE__ */ le(
      p,
      {
        isCreatable: !0,
        options: [],
        selectProps: {
          components: {
            IndicatorSeparator: () => null
          }
        }
      }
    );
  switch (o.type) {
    // problem with this is that it should be the JSON value, but if it is at any point
    // not a valid json value, it should just be the string so the value is not lost... so it's just very odd
    // without a more stringent JSON builder type component
    // case "any":
    //   return <ControlAny />
    case "app":
      return /* @__PURE__ */ le(f, { app: g });
    case "boolean":
      return /* @__PURE__ */ le(h, {});
    case "string":
    case "integer":
      return /* @__PURE__ */ le(c, {});
    default:
      throw new Error("Unsupported property type: " + o.type);
  }
}
function oR(e) {
  const {
    form: t,
    field: r
  } = e, { prop: u } = r, {
    getProps: o,
    getComponents: a
  } = kt(), l = {
    display: "grid",
    gridTemplateAreas: r.prop.type == "boolean" ? '"control label" "description description" "error error"' : '"label label" "control control" "description description" "error error"',
    gridTemplateColumns: "min-content auto",
    gap: "0.25rem 0",
    alignItems: "center",
    fontSize: "0.875rem"
  }, {
    Label: c,
    Description: f,
    Errors: p
  } = a(), h = [], g = "app" in r.extra ? r.extra.app : void 0;
  if (g && !g.auth_type)
    return null;
  let v = u.label || u.name;
  return g && (v = `Connect ${g.name} account`), /* @__PURE__ */ Mn("div", { ...o("field", l, e), children: [
    /* @__PURE__ */ le(c, { text: v, field: r, form: t }),
    /* @__PURE__ */ le(uR, { field: r, form: t }),
    /* @__PURE__ */ le(f, { markdown: u.description, field: r, form: t }),
    /* @__PURE__ */ le(p, { errors: h, field: r, form: t })
  ] });
}
const sR = (e, t) => {
  var o;
  const r = Xr(), u = hi({
    queryKey: [
      "app",
      e
    ],
    queryFn: () => r.app(e),
    ...t == null ? void 0 : t.useQueryOpts
  });
  return {
    ...u,
    app: (o = u.data) == null ? void 0 : o.data
  };
};
function sh({
  prop: e,
  idx: t
}) {
  const r = Xc(), {
    id: u,
    configuredProps: o,
    registerField: a,
    setConfiguredProp: l
  } = r, c = e.type === "app" && "app" in e ? e.app : void 0, {
    // TODO error
    app: f
  } = sR(c || "", {
    useQueryOpts: {
      enabled: !!c,
      suspense: !!c
      // this seems to work (this overrides enabled so don't just set to true)
    }
  }), h = {
    id: `pd${u}${e.name}`,
    prop: e,
    idx: t,
    value: o[e.name],
    onChange(g) {
      l(t, g);
    },
    extra: {
      app: f
      // XXX fix ts
    }
  };
  return qn(() => a(h), [
    h
  ]), /* @__PURE__ */ le(cg.Provider, { value: h, children: /* @__PURE__ */ le(oR, { field: h, form: r }) });
}
class aR extends bh {
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
function lR(e) {
  const { form: t } = e, {
    propsNeedConfiguring: r,
    submitting: u
  } = t, {
    getProps: o,
    theme: a
  } = kt();
  return /* @__PURE__ */ le("input", { type: "submit", value: u ? "Submitting..." : "Submit", ...o("controlSubmit", ((c) => {
    var f;
    return {
      width: "fit-content",
      textTransform: "capitalize",
      backgroundColor: c ? a.colors.neutral10 : a.colors.primary,
      color: c ? a.colors.neutral40 : a.colors.neutral0,
      padding: `${a.spacing.baseUnit * 1.75}px ${a.spacing.baseUnit * 16}px`,
      borderRadius: a.borderRadius,
      boxShadow: (f = a.boxShadow) == null ? void 0 : f.button,
      cursor: "pointer",
      fontSize: "0.875rem",
      opacity: u ? 0.5 : void 0,
      margin: "0.5rem 0 0 0"
    };
  })(r.length || u), e), disabled: r.length || u });
}
function cR() {
  const e = Xc(), {
    configurableProps: t,
    dynamicPropsQueryIsFetching: r,
    isValid: u,
    optionalPropIsEnabled: o,
    optionalPropSetEnabled: a,
    getOptionalPropValue: l,
    props: c,
    setSubmitting: f
  } = e, {
    hideOptionalProps: p,
    onSubmit: h
  } = c, {
    getComponents: g,
    getProps: v,
    theme: b
  } = kt(), { OptionalFieldButton: P, OptionalFieldsContainer: A, Alert: E } = g(), F = {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem"
  }, k = {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.375rem"
  };
  b.colors.neutral60;
  const [L, D] = et(!1), H = async (N) => {
    if (h && (N.preventDefault(), u)) {
      f(!0);
      try {
        await h(e);
      } finally {
        f(!1);
      }
    }
  }, G = [], z = [];
  for (const [N, V] of t.entries())
    V.optional ? (z.push([V, o(V)]), G.push([V, N])) : V.hidden || G.push([V, N]);
  return /* @__PURE__ */ le(aR, { fallback: (N) => /* @__PURE__ */ Mn("p", { style: { color: "red" }, children: [
    "Error: ",
    N && typeof N == "object" && "message" in N && typeof N.message == "string" ? N.message : "Unknown"
  ] }), children: /* @__PURE__ */ le(O1, { fallback: /* @__PURE__ */ le("p", { children: "Loading form..." }), children: /* @__PURE__ */ Mn("form", { ...v("componentForm", F, c), onSubmit: H, children: [
    G.filter(([N]) => !N.optional).map(([N, V]) => N.type === "alert" ? /* @__PURE__ */ le(E, { prop: N }, N.name) : /* @__PURE__ */ le(sh, { prop: N, idx: V }, N.name)),
    A ? /* @__PURE__ */ le(
      A,
      {
        baseStyles: k,
        title: "Optional Fields",
        expanded: L,
        onToggle: () => D(!L),
        children: L && G.filter(([N]) => N.optional).map(([N, V]) => /* @__PURE__ */ le(sh, { prop: N, idx: V }, N.name))
      }
    ) : null,
    r && /* @__PURE__ */ le("p", { children: "Loading dynamic props..." }),
    h && /* @__PURE__ */ le(lR, { form: e })
  ] }) }) });
}
function fR(e) {
  return /* @__PURE__ */ le(nR, { props: e, children: /* @__PURE__ */ le(cR, {}) });
}
const dR = ({ key: e }, t) => {
  var o;
  const r = Xr(), u = hi({
    queryKey: [
      "component",
      e
    ],
    queryFn: () => r.component({
      key: e
    }),
    enabled: !!e,
    ...t == null ? void 0 : t.useQueryOpts
  });
  return {
    ...u,
    component: (o = u.data) == null ? void 0 : o.data
  };
};
function xR(e) {
  const {
    isLoading: t,
    error: r,
    component: u
  } = dR({
    key: e.componentKey
  });
  if (!e.componentKey)
    throw new Error("componentKey required");
  return t ? /* @__PURE__ */ le("p", { children: "Loading..." }) : r ? /* @__PURE__ */ Mn("p", { children: [
    "Error: ",
    r.message
  ] }) : u ? /* @__PURE__ */ le(fR, { component: u, ...e }) : /* @__PURE__ */ le("p", { children: "Component not found" });
}
function AR() {
  const e = uu(), {
    id: t,
    onChange: r,
    value: u
  } = e, {
    getProps: o,
    theme: a
  } = kt(), l = {
    display: "block",
    gridArea: "control",
    width: "100%",
    fontSize: "0.875rem",
    boxShadow: a.boxShadow.input
  };
  let c = u;
  return typeof c == "object" && (c = JSON.stringify(c)), /* @__PURE__ */ le(
    "textarea",
    {
      id: t,
      value: c,
      onChange: (f) => r(f.target.value),
      ...o("controlAny", l, e)
    }
  );
}
const pR = (e) => {
  var u;
  const t = Xr(), r = hi({
    queryKey: [
      "apps",
      e
    ],
    queryFn: () => t.apps(e)
  });
  return {
    ...r,
    apps: (u = r.data) == null ? void 0 : u.data
  };
};
function wR({
  value: e,
  onChange: t
}) {
  const [
    r,
    u
  ] = et(""), o = mc(), {
    isLoading: a,
    // TODO error
    apps: l
  } = pR({
    q: r
  }), { Option: c } = eo;
  return /* @__PURE__ */ le(
    Ms,
    {
      instanceId: o,
      className: "react-select-container text-sm",
      classNamePrefix: "react-select",
      components: {
        Option: (f) => /* @__PURE__ */ le(c, { ...f, children: /* @__PURE__ */ Mn("div", { style: {
          display: "flex",
          gap: 10
        }, children: [
          /* @__PURE__ */ le(
            "img",
            {
              src: `https://pipedream.com/s.v0/${f.data.id}/logo/48`,
              style: {
                height: 24,
                width: 24
              },
              alt: f.data.name
            }
          ),
          /* @__PURE__ */ le("span", { style: {
            whiteSpace: "nowrap"
          }, children: f.data.name })
        ] }) }),
        IndicatorSeparator: () => null
      },
      options: l || [],
      getOptionLabel: (f) => f.name || f.name_slug,
      getOptionValue: (f) => f.name_slug,
      value: e,
      onChange: (f) => t == null ? void 0 : t(f || void 0),
      onInputChange: (f) => u(f),
      isLoading: a
    }
  );
}
const hR = (e) => {
  var u;
  const t = Xr(), r = hi({
    queryKey: [
      "components",
      e
    ],
    queryFn: () => t.components(e)
  });
  return {
    ...r,
    components: ((u = r.data) == null ? void 0 : u.data) || []
  };
};
function SR({
  app: e,
  componentType: t,
  value: r,
  onChange: u
}) {
  const o = mc(), {
    isLoading: a,
    // TODO error
    components: l
  } = hR({
    app: e == null ? void 0 : e.name_slug,
    componentType: t
  });
  return /* @__PURE__ */ le(
    Ms,
    {
      instanceId: o,
      className: "react-select-container text-sm",
      classNamePrefix: "react-select",
      options: l,
      getOptionLabel: (c) => c.name || c.key,
      getOptionValue: (c) => c.key,
      value: r,
      onChange: (c) => u == null ? void 0 : u(c || void 0),
      isLoading: a,
      components: {
        IndicatorSeparator: () => null
      }
    }
  );
}
export {
  WF as Alert,
  fR as ComponentForm,
  xR as ComponentFormContainer,
  uR as Control,
  AR as ControlAny,
  cw as ControlApp,
  fw as ControlBoolean,
  dw as ControlInput,
  dg as ControlSelect,
  lR as ControlSubmit,
  Wc as CustomizationContext,
  CR as CustomizeProvider,
  LF as Description,
  aR as ErrorBoundary,
  kF as Errors,
  oR as Field,
  Qg as FormContext,
  nR as FormContextProvider,
  cg as FormFieldContext,
  IR as FrontendClientProvider,
  cR as InternalComponentForm,
  sh as InternalField,
  DF as Label,
  MF as OptionalFieldButton,
  iR as RemoteOptionsContainer,
  wR as SelectApp,
  SR as SelectComponent,
  NF as defaultComponents,
  Ac as defaultTheme,
  RA as getReactSelectTheme,
  Yl as mergeTheme,
  Nl as skippablePropTypes,
  FA as unstyledTheme,
  aw as useAccounts,
  sR as useApp,
  pR as useApps,
  dR as useComponent,
  hR as useComponents,
  kt as useCustomize,
  Xc as useFormContext,
  uu as useFormFieldContext,
  Xr as useFrontendClient
};
