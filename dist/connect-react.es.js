var zd = (e) => {
  throw TypeError(e);
};
var vl = (e, t, r) => t.has(e) || zd("Cannot " + r);
var O = (e, t, r) => (vl(e, t, "read from private field"), r ? r.call(e) : t.get(e)), xe = (e, t, r) => t.has(e) ? zd("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), le = (e, t, r, u) => (vl(e, t, "write to private field"), u ? u.call(e, r) : t.set(e, r), r), Ze = (e, t, r) => (vl(e, t, "access private method"), r);
var ps = (e, t, r, u) => ({
  set _(o) {
    le(e, t, o, r);
  },
  get _() {
    return O(e, t, u);
  }
});
import { jsx as ue, jsxs as vr, Fragment as As } from "react/jsx-runtime";
import * as Oe from "react";
import { useState as et, useCallback as Lt, useLayoutEffect as P1, useRef as $n, useMemo as Qn, createContext as Ku, useContext as uu, Component as yh, Fragment as Wl, useEffect as Mn, forwardRef as vh, useId as bc, Suspense as O1 } from "react";
import { keyframes as T1, jsx as me, css as Ih } from "@emotion/react";
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
function Ch(e) {
  var t = _1(e, "string");
  return di(t) == "symbol" ? t : t + "";
}
function Mu(e, t, r) {
  return (t = Ch(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function Zd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(e);
    t && (u = u.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, u);
  }
  return r;
}
function he(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Zd(Object(r), !0).forEach(function(u) {
      Mu(e, u, r[u]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Zd(Object(r)).forEach(function(u) {
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
function Xl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, u = Array(t); r < t; r++) u[r] = e[r];
  return u;
}
function xh(e, t) {
  if (e) {
    if (typeof e == "string") return Xl(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Xl(e, t) : void 0;
  }
}
function k1() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function yr(e, t) {
  return G1(e) || L1(e, t) || xh(e, t) || k1();
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
function Ah(e) {
  var t = e.defaultInputValue, r = t === void 0 ? "" : t, u = e.defaultMenuIsOpen, o = u === void 0 ? !1 : u, a = e.defaultValue, l = a === void 0 ? null : a, c = e.inputValue, f = e.menuIsOpen, p = e.onChange, h = e.onInputChange, g = e.onMenuClose, v = e.onMenuOpen, b = e.value, P = er(e, M1), A = et(c !== void 0 ? c : r), E = yr(A, 2), F = E[0], k = E[1], L = et(f !== void 0 ? f : o), D = yr(L, 2), X = D[0], G = D[1], H = et(b !== void 0 ? b : l), z = yr(H, 2), N = z[0], re = z[1], J = Lt(function(de, We) {
    typeof p == "function" && p(de, We), re(de);
  }, [p]), j = Lt(function(de, We) {
    var w;
    typeof h == "function" && (w = h(de, We)), k(w !== void 0 ? w : de);
  }, [h]), ne = Lt(function() {
    typeof v == "function" && v(), G(!0);
  }, [v]), $ = Lt(function() {
    typeof g == "function" && g(), G(!1);
  }, [g]), te = c !== void 0 ? c : F, pe = f !== void 0 ? f : X, ee = b !== void 0 ? b : N;
  return he(he({}, P), {}, {
    inputValue: te,
    menuIsOpen: pe,
    onChange: J,
    onInputChange: j,
    onMenuClose: $,
    onMenuOpen: ne,
    value: ee
  });
}
function ve() {
  return ve = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var u in r) ({}).hasOwnProperty.call(r, u) && (e[u] = r[u]);
    }
    return e;
  }, ve.apply(null, arguments);
}
function N1(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Yd(e, t) {
  for (var r = 0; r < t.length; r++) {
    var u = t[r];
    u.enumerable = u.enumerable || !1, u.configurable = !0, "value" in u && (u.writable = !0), Object.defineProperty(e, Ch(u.key), u);
  }
}
function V1(e, t, r) {
  return Yd(e.prototype, t), Yd(e, r), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function Hl(e, t) {
  return Hl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, u) {
    return r.__proto__ = u, r;
  }, Hl(e, t);
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
  }), t && Hl(e, t);
}
function ws(e) {
  return ws = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, ws(e);
}
function wh() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (wh = function() {
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
  var t = wh();
  return function() {
    var r, u = ws(e);
    if (t) {
      var o = ws(this).constructor;
      r = Reflect.construct(u, arguments, o);
    } else r = u.apply(this, arguments);
    return H1(this, r);
  };
}
function Z1(e) {
  if (Array.isArray(e)) return Xl(e);
}
function Y1(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function J1() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Xi(e) {
  return Z1(e) || Y1(e) || xh(e) || J1();
}
function U1(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
    raw: {
      value: Object.freeze(t)
    }
  }));
}
const j1 = Math.min, Q1 = Math.max, Ss = Math.round, hs = Math.floor, Es = (e) => ({
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
function Ds() {
  return typeof window < "u";
}
function Sh(e) {
  return Fh(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ir(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Eh(e) {
  var t;
  return (t = (Fh(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Fh(e) {
  return Ds() ? e instanceof Node || e instanceof Ir(e).Node : !1;
}
function $1(e) {
  return Ds() ? e instanceof Element || e instanceof Ir(e).Element : !1;
}
function yc(e) {
  return Ds() ? e instanceof HTMLElement || e instanceof Ir(e).HTMLElement : !1;
}
function Jd(e) {
  return !Ds() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ir(e).ShadowRoot;
}
function Rh(e) {
  const {
    overflow: t,
    overflowX: r,
    overflowY: u,
    display: o
  } = vc(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + u + r) && !["inline", "contents"].includes(o);
}
function K1() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function eC(e) {
  return ["html", "body", "#document"].includes(Sh(e));
}
function vc(e) {
  return Ir(e).getComputedStyle(e);
}
function tC(e) {
  if (Sh(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Jd(e) && e.host || // Fallback.
    Eh(e)
  );
  return Jd(t) ? t.host : t;
}
function Ph(e) {
  const t = tC(e);
  return eC(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : yc(t) && Rh(t) ? t : Ph(t);
}
function Fs(e, t, r) {
  var u;
  t === void 0 && (t = []), r === void 0 && (r = !0);
  const o = Ph(e), a = o === ((u = e.ownerDocument) == null ? void 0 : u.body), l = Ir(o);
  if (a) {
    const c = zl(l);
    return t.concat(l, l.visualViewport || [], Rh(o) ? o : [], c && r ? Fs(c) : []);
  }
  return t.concat(o, Fs(o, [], r));
}
function zl(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function nC(e) {
  const t = vc(e);
  let r = parseFloat(t.width) || 0, u = parseFloat(t.height) || 0;
  const o = yc(e), a = o ? e.offsetWidth : r, l = o ? e.offsetHeight : u, c = Ss(r) !== a || Ss(u) !== l;
  return c && (r = a, u = l), {
    width: r,
    height: u,
    $: c
  };
}
function Ic(e) {
  return $1(e) ? e : e.contextElement;
}
function Ud(e) {
  const t = Ic(e);
  if (!yc(t))
    return Es(1);
  const r = t.getBoundingClientRect(), {
    width: u,
    height: o,
    $: a
  } = nC(t);
  let l = (a ? Ss(r.width) : r.width) / u, c = (a ? Ss(r.height) : r.height) / o;
  return (!l || !Number.isFinite(l)) && (l = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: l,
    y: c
  };
}
const rC = /* @__PURE__ */ Es(0);
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
function jd(e, t, r, u) {
  t === void 0 && (t = !1);
  const o = e.getBoundingClientRect(), a = Ic(e);
  let l = Es(1);
  t && (l = Ud(e));
  const c = uC() ? iC(a) : Es(0);
  let f = (o.left + c.x) / l.x, p = (o.top + c.y) / l.y, h = o.width / l.x, g = o.height / l.y;
  if (a) {
    const v = Ir(a), b = u;
    let P = v, A = zl(P);
    for (; A && u && b !== P; ) {
      const E = Ud(A), F = A.getBoundingClientRect(), k = vc(A), L = F.left + (A.clientLeft + parseFloat(k.paddingLeft)) * E.x, D = F.top + (A.clientTop + parseFloat(k.paddingTop)) * E.y;
      f *= E.x, p *= E.y, h *= E.x, g *= E.y, f += L, p += D, P = Ir(A), A = zl(P);
    }
  }
  return q1({
    width: h,
    height: g,
    x: f,
    y: p
  });
}
function Oh(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function oC(e, t) {
  let r = null, u;
  const o = Eh(e);
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
    function X(G) {
      const H = G[0].intersectionRatio;
      if (H !== f) {
        if (!D)
          return l();
        H ? l(!1, H) : u = setTimeout(() => {
          l(!1, 1e-7);
        }, 1e3);
      }
      H === 1 && !Oh(p, e.getBoundingClientRect()) && l(), D = !1;
    }
    try {
      r = new IntersectionObserver(X, {
        ...L,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      r = new IntersectionObserver(X, L);
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
  } = u, p = Ic(e), h = o || a ? [...p ? Fs(p) : [], ...Fs(t)] : [];
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
  let P, A = f ? jd(e) : null;
  f && E();
  function E() {
    const F = jd(e);
    A && !Oh(A, F) && r(), A = F, P = requestAnimationFrame(E);
  }
  return r(), () => {
    var F;
    h.forEach((k) => {
      o && k.removeEventListener("scroll", r), a && k.removeEventListener("resize", r);
    }), g == null || g(), (F = b) == null || F.disconnect(), b = null, f && cancelAnimationFrame(P);
  };
}
var Zl = P1, aC = ["className", "clearValue", "cx", "getStyles", "getClassNames", "getValue", "hasValue", "isMulti", "isRtl", "options", "selectOption", "selectProps", "setValue", "theme"], Rs = function() {
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
var Ps = function(t) {
  return vC(t) ? t.filter(Boolean) : di(t) === "object" && t !== null ? [t] : [];
}, Th = function(t) {
  t.className, t.clearValue, t.cx, t.getStyles, t.getClassNames, t.getValue, t.hasValue, t.isMulti, t.isRtl, t.options, t.selectOption, t.selectProps, t.setValue, t.theme;
  var r = er(t, aC);
  return he({}, r);
}, ht = function(t, r, u) {
  var o = t.cx, a = t.getStyles, l = t.getClassNames, c = t.className;
  return {
    css: a(r, t),
    className: o(u ?? {}, l(r, t), c)
  };
};
function Ms(e) {
  return [document.documentElement, document.body, window].indexOf(e) > -1;
}
function fC(e) {
  return Ms(e) ? window.innerHeight : e.clientHeight;
}
function Bh(e) {
  return Ms(e) ? window.pageYOffset : e.scrollTop;
}
function Os(e, t) {
  if (Ms(e)) {
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
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 200, u = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : Rs, o = Bh(e), a = t - o, l = 10, c = 0;
  function f() {
    c += l;
    var p = pC(c, o, a, r);
    Os(e, p), c < r ? window.requestAnimationFrame(f) : u(e);
  }
  f();
}
function Qd(e, t) {
  var r = e.getBoundingClientRect(), u = t.getBoundingClientRect(), o = t.offsetHeight / 3;
  u.bottom + o > r.bottom ? Os(e, Math.min(t.offsetTop + t.clientHeight - e.offsetHeight + o, e.scrollHeight)) : u.top - o < r.top && Os(e, Math.max(t.offsetTop - o, 0));
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
function qd() {
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
var _h = !1, mC = {
  get passive() {
    return _h = !0;
  }
}, ms = typeof window < "u" ? window : {};
ms.addEventListener && ms.removeEventListener && (ms.addEventListener("p", Rs, mC), ms.removeEventListener("p", Rs, !1));
var bC = _h;
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
    var c = yr(l, 1), f = c[0];
    return !u.includes(f);
  });
  return a.reduce(function(l, c) {
    var f = yr(c, 2), p = f[0], h = f[1];
    return l[p] = h, l;
  }, {});
}, CC = ["children", "innerProps"], xC = ["children", "innerProps"];
function AC(e) {
  var t = e.maxHeight, r = e.menuEl, u = e.minHeight, o = e.placement, a = e.shouldScroll, l = e.isFixedPosition, c = e.controlHeight, f = dC(r), p = {
    placement: "bottom",
    maxHeight: t
  };
  if (!r || !r.offsetParent) return p;
  var h = f.getBoundingClientRect(), g = h.height, v = r.getBoundingClientRect(), b = v.bottom, P = v.height, A = v.top, E = r.offsetParent.getBoundingClientRect(), F = E.top, k = l ? window.innerHeight : fC(f), L = Bh(f), D = parseInt(getComputedStyle(r).marginBottom, 10), X = parseInt(getComputedStyle(r).marginTop, 10), G = F - X, H = k - A, z = G + L, N = g - L - A, re = b - k + L + D, J = L + A - X, j = 160;
  switch (o) {
    case "auto":
    case "bottom":
      if (H >= P)
        return {
          placement: "bottom",
          maxHeight: t
        };
      if (N >= P && !l)
        return a && gs(f, re, j), {
          placement: "bottom",
          maxHeight: t
        };
      if (!l && N >= u || l && H >= u) {
        a && gs(f, re, j);
        var ne = l ? H - D : N - D;
        return {
          placement: "bottom",
          maxHeight: ne
        };
      }
      if (o === "auto" || l) {
        var $ = t, te = l ? G : z;
        return te >= u && ($ = Math.min(te - D - c, t)), {
          placement: "top",
          maxHeight: $
        };
      }
      if (o === "bottom")
        return a && Os(f, re), {
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
      if (z >= P && !l)
        return a && gs(f, J, j), {
          placement: "top",
          maxHeight: t
        };
      if (!l && z >= u || l && G >= u) {
        var pe = t;
        return (!l && z >= u || l && G >= u) && (pe = l ? G - X : z - X), a && gs(f, J, j), {
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
var Gh = function(t) {
  return t === "auto" ? "bottom" : t;
}, SC = function(t, r) {
  var u, o = t.placement, a = t.theme, l = a.borderRadius, c = a.spacing, f = a.colors;
  return he((u = {
    label: "menu"
  }, Mu(u, wC(o), "100%"), Mu(u, "position", "absolute"), Mu(u, "width", "100%"), Mu(u, "zIndex", 1), u), r ? {} : {
    backgroundColor: f.neutral0,
    borderRadius: l,
    boxShadow: "0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",
    marginBottom: c.menuGutter,
    marginTop: c.menuGutter
  });
}, Lh = /* @__PURE__ */ Ku(null), EC = function(t) {
  var r = t.children, u = t.minMenuHeight, o = t.maxMenuHeight, a = t.menuPlacement, l = t.menuPosition, c = t.menuShouldScrollIntoView, f = t.theme, p = uu(Lh) || {}, h = p.setPortalPlacement, g = $n(null), v = et(o), b = yr(v, 2), P = b[0], A = b[1], E = et(null), F = yr(E, 2), k = F[0], L = F[1], D = f.spacing.controlHeight;
  return Zl(function() {
    var X = g.current;
    if (X) {
      var G = l === "fixed", H = c && !G, z = AC({
        maxHeight: o,
        menuEl: X,
        minHeight: u,
        placement: a,
        shouldScroll: H,
        isFixedPosition: G,
        controlHeight: D
      });
      A(z.maxHeight), L(z.placement), h == null || h(z.placement);
    }
  }, [o, a, l, c, u, h, D]), r({
    ref: g,
    placerProps: he(he({}, t), {}, {
      placement: k || Gh(a),
      maxHeight: P
    })
  });
}, FC = function(t) {
  var r = t.children, u = t.innerRef, o = t.innerProps;
  return me("div", ve({}, ht(t, "menu", {
    menu: !0
  }), {
    ref: u
  }, o), r);
}, RC = FC, PC = function(t, r) {
  var u = t.maxHeight, o = t.theme.spacing.baseUnit;
  return he({
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
  return me("div", ve({}, ht(t, "menuList", {
    "menu-list": !0,
    "menu-list--is-multi": a
  }), {
    ref: o
  }, u), r);
}, kh = function(t, r) {
  var u = t.theme, o = u.spacing.baseUnit, a = u.colors;
  return he({
    textAlign: "center"
  }, r ? {} : {
    color: a.neutral40,
    padding: "".concat(o * 2, "px ").concat(o * 3, "px")
  });
}, TC = kh, BC = kh, _C = function(t) {
  var r = t.children, u = r === void 0 ? "No options" : r, o = t.innerProps, a = er(t, CC);
  return me("div", ve({}, ht(he(he({}, a), {}, {
    children: u,
    innerProps: o
  }), "noOptionsMessage", {
    "menu-notice": !0,
    "menu-notice--no-options": !0
  }), o), u);
}, GC = function(t) {
  var r = t.children, u = r === void 0 ? "Loading..." : r, o = t.innerProps, a = er(t, xC);
  return me("div", ve({}, ht(he(he({}, a), {}, {
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
  var r = t.appendTo, u = t.children, o = t.controlElement, a = t.innerProps, l = t.menuPlacement, c = t.menuPosition, f = $n(null), p = $n(null), h = et(Gh(l)), g = yr(h, 2), v = g[0], b = g[1], P = Qn(function() {
    return {
      setPortalPlacement: b
    };
  }, []), A = et(null), E = yr(A, 2), F = E[0], k = E[1], L = Lt(function() {
    if (o) {
      var H = hC(o), z = c === "fixed" ? 0 : window.pageYOffset, N = H[v] + z;
      (N !== (F == null ? void 0 : F.offset) || H.left !== (F == null ? void 0 : F.rect.left) || H.width !== (F == null ? void 0 : F.rect.width)) && k({
        offset: N,
        rect: H
      });
    }
  }, [o, c, v, F == null ? void 0 : F.offset, F == null ? void 0 : F.rect.left, F == null ? void 0 : F.rect.width]);
  Zl(function() {
    L();
  }, [L]);
  var D = Lt(function() {
    typeof p.current == "function" && (p.current(), p.current = null), o && f.current && (p.current = sC(o, f.current, L, {
      elementResize: "ResizeObserver" in window
    }));
  }, [o, L]);
  Zl(function() {
    D();
  }, [D]);
  var X = Lt(function(H) {
    f.current = H, D();
  }, [D]);
  if (!r && c !== "fixed" || !F) return null;
  var G = me("div", ve({
    ref: X
  }, ht(he(he({}, t), {}, {
    offset: F.offset,
    position: c,
    rect: F.rect
  }), "menuPortal", {
    "menu-portal": !0
  }), a), u);
  return me(Lh.Provider, {
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
  return me("div", ve({}, ht(t, "container", {
    "--is-disabled": o,
    "--is-rtl": a
  }), u), r);
}, NC = function(t, r) {
  var u = t.theme.spacing, o = t.isMulti, a = t.hasValue, l = t.selectProps.controlShouldRenderValue;
  return he({
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
  return me("div", ve({}, ht(t, "valueContainer", {
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
  return me("div", ve({}, ht(t, "indicatorsContainer", {
    indicators: !0
  }), u), r);
}, $d, HC = ["size"], zC = ["innerProps", "isRtl", "size"];
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
}, Dh = function(t) {
  var r = t.size, u = er(t, HC);
  return me("svg", ve({
    height: r,
    width: r,
    viewBox: "0 0 20 20",
    "aria-hidden": "true",
    focusable: "false",
    css: YC
  }, u));
}, Cc = function(t) {
  return me(Dh, ve({
    size: 20
  }, t), me("path", {
    d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
  }));
}, Mh = function(t) {
  return me(Dh, ve({
    size: 20
  }, t), me("path", {
    d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
  }));
}, Nh = function(t, r) {
  var u = t.isFocused, o = t.theme, a = o.spacing.baseUnit, l = o.colors;
  return he({
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
}, JC = Nh, UC = function(t) {
  var r = t.children, u = t.innerProps;
  return me("div", ve({}, ht(t, "dropdownIndicator", {
    indicator: !0,
    "dropdown-indicator": !0
  }), u), r || me(Mh, null));
}, jC = Nh, QC = function(t) {
  var r = t.children, u = t.innerProps;
  return me("div", ve({}, ht(t, "clearIndicator", {
    indicator: !0,
    "clear-indicator": !0
  }), u), r || me(Cc, null));
}, qC = function(t, r) {
  var u = t.isDisabled, o = t.theme, a = o.spacing.baseUnit, l = o.colors;
  return he({
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
  return me("span", ve({}, r, ht(t, "indicatorSeparator", {
    "indicator-separator": !0
  })));
}, KC = T1($d || ($d = U1([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))), ex = function(t, r) {
  var u = t.isFocused, o = t.size, a = t.theme, l = a.colors, c = a.spacing.baseUnit;
  return he({
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
}, Il = function(t) {
  var r = t.delay, u = t.offset;
  return me("span", {
    css: /* @__PURE__ */ Ih({
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
  return me("div", ve({}, ht(he(he({}, l), {}, {
    innerProps: r,
    isRtl: u,
    size: a
  }), "loadingIndicator", {
    indicator: !0,
    "loading-indicator": !0
  }), r), me(Il, {
    delay: 0,
    offset: u
  }), me(Il, {
    delay: 160,
    offset: !0
  }), me(Il, {
    delay: 320,
    offset: !u
  }));
}, nx = function(t, r) {
  var u = t.isDisabled, o = t.isFocused, a = t.theme, l = a.colors, c = a.borderRadius, f = a.spacing;
  return he({
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
  return me("div", ve({
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
  return me("div", ve({}, ht(t, "group", {
    group: !0
  }), f), me(l, ve({}, c, {
    selectProps: g,
    theme: h,
    getStyles: o,
    getClassNames: a,
    cx: u
  }), p), me("div", null, r));
}, ax = function(t, r) {
  var u = t.theme, o = u.colors, a = u.spacing;
  return he({
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
  var r = Th(t);
  r.data;
  var u = er(r, ux);
  return me("div", ve({}, ht(t, "groupHeading", {
    "group-heading": !0
  }), u));
}, cx = sx, fx = ["innerRef", "isDisabled", "isHidden", "inputClassName"], dx = function(t, r) {
  var u = t.isDisabled, o = t.value, a = t.theme, l = a.spacing, c = a.colors;
  return he(he({
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
}, Vh = {
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
  "&:after": he({
    content: 'attr(data-value) " "',
    visibility: "hidden",
    whiteSpace: "pre"
  }, Vh)
}, hx = function(t) {
  return he({
    label: "input",
    color: "inherit",
    background: 0,
    opacity: t ? 0 : 1,
    width: "100%"
  }, Vh);
}, gx = function(t) {
  var r = t.cx, u = t.value, o = Th(t), a = o.innerRef, l = o.isDisabled, c = o.isHidden, f = o.inputClassName, p = er(o, fx);
  return me("div", ve({}, ht(t, "input", {
    "input-container": !0
  }), {
    "data-value": u || ""
  }), me("input", ve({
    className: r({
      input: !0
    }, f),
    ref: a,
    style: hx(c),
    disabled: l
  }, p)));
}, mx = gx, bx = function(t, r) {
  var u = t.theme, o = u.spacing, a = u.borderRadius, l = u.colors;
  return he({
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
  return he({
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
  return he({
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
}, Wh = function(t) {
  var r = t.children, u = t.innerProps;
  return me("div", u, r);
}, Ix = Wh, Cx = Wh;
function xx(e) {
  var t = e.children, r = e.innerProps;
  return me("div", ve({
    role: "button"
  }, r), t || me(Cc, {
    size: 14
  }));
}
var Ax = function(t) {
  var r = t.children, u = t.components, o = t.data, a = t.innerProps, l = t.isDisabled, c = t.removeProps, f = t.selectProps, p = u.Container, h = u.Label, g = u.Remove;
  return me(p, {
    data: o,
    innerProps: he(he({}, ht(t, "multiValue", {
      "multi-value": !0,
      "multi-value--is-disabled": l
    })), a),
    selectProps: f
  }, me(h, {
    data: o,
    innerProps: he({}, ht(t, "multiValueLabel", {
      "multi-value__label": !0
    })),
    selectProps: f
  }, r), me(g, {
    data: o,
    innerProps: he(he({}, ht(t, "multiValueRemove", {
      "multi-value__remove": !0
    })), {}, {
      "aria-label": "Remove ".concat(r || "option")
    }, c),
    selectProps: f
  }));
}, wx = Ax, Sx = function(t, r) {
  var u = t.isDisabled, o = t.isFocused, a = t.isSelected, l = t.theme, c = l.spacing, f = l.colors;
  return he({
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
  return me("div", ve({}, ht(t, "option", {
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
  return he({
    label: "placeholder",
    gridArea: "1 / 1 / 2 / 3"
  }, r ? {} : {
    color: a.neutral50,
    marginLeft: o.baseUnit / 2,
    marginRight: o.baseUnit / 2
  });
}, Px = function(t) {
  var r = t.children, u = t.innerProps;
  return me("div", ve({}, ht(t, "placeholder", {
    placeholder: !0
  }), u), r);
}, Ox = Px, Tx = function(t, r) {
  var u = t.isDisabled, o = t.theme, a = o.spacing, l = o.colors;
  return he({
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
  return me("div", ve({}, ht(t, "singleValue", {
    "single-value": !0,
    "single-value--is-disabled": u
  }), o), r);
}, _x = Bx, eo = {
  ClearIndicator: QC,
  Control: ix,
  DropdownIndicator: UC,
  DownChevron: Mh,
  CrossIcon: Cc,
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
  return he(he({}, eo), t.components);
}, Kd = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function Lx(e, t) {
  return !!(e === t || Kd(e) && Kd(t));
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
  return me("span", ve({
    css: Nx
  }, t));
}, ep = Vx, Wx = {
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
  var r = t.ariaSelection, u = t.focusedOption, o = t.focusedValue, a = t.focusableOptions, l = t.isFocused, c = t.selectValue, f = t.selectProps, p = t.id, h = t.isAppleDevice, g = f.ariaLiveMessages, v = f.getOptionLabel, b = f.inputValue, P = f.isMulti, A = f.isOptionDisabled, E = f.isSearchable, F = f.menuIsOpen, k = f.options, L = f.screenReaderStatus, D = f.tabSelectsValue, X = f.isLoading, G = f["aria-label"], H = f["aria-live"], z = Qn(function() {
    return he(he({}, Wx), g || {});
  }, [g]), N = Qn(function() {
    var te = "";
    if (r && z.onChange) {
      var pe = r.option, ee = r.options, de = r.removedValue, We = r.removedValues, w = r.value, ke = function(Ne) {
        return Array.isArray(Ne) ? null : Ne;
      }, Ee = de || pe || ke(w), S = Ee ? v(Ee) : "", Je = ee || We || void 0, be = Je ? Je.map(v) : [], De = he({
        // multiSelected items are usually items that have already been selected
        // or set by the user as a default value so we assume they are not disabled
        isDisabled: Ee && A(Ee, c),
        label: S,
        labels: be
      }, r);
      te = z.onChange(De);
    }
    return te;
  }, [r, z, A, c, v]), re = Qn(function() {
    var te = "", pe = u || o, ee = !!(u && c && c.includes(u));
    if (pe && z.onFocus) {
      var de = {
        focused: pe,
        label: v(pe),
        isDisabled: A(pe, c),
        isSelected: ee,
        options: a,
        context: pe === u ? "menu" : "value",
        selectValue: c,
        isAppleDevice: h
      };
      te = z.onFocus(de);
    }
    return te;
  }, [u, o, v, A, z, a, c, h]), J = Qn(function() {
    var te = "";
    if (F && k.length && !X && z.onFilter) {
      var pe = L({
        count: a.length
      });
      te = z.onFilter({
        inputValue: b,
        resultsMessage: pe
      });
    }
    return te;
  }, [a, b, F, z, k, L, X]), j = (r == null ? void 0 : r.action) === "initial-input-focus", ne = Qn(function() {
    var te = "";
    if (z.guidance) {
      var pe = o ? "value" : F ? "menu" : "input";
      te = z.guidance({
        "aria-label": G,
        context: pe,
        isDisabled: u && A(u, c),
        isMulti: P,
        isSearchable: E,
        tabSelectsValue: D,
        isInitialFocus: j
      });
    }
    return te;
  }, [G, u, o, P, A, E, F, z, c, D, j]), $ = me(Wl, null, me("span", {
    id: "aria-selection"
  }, N), me("span", {
    id: "aria-focused"
  }, re), me("span", {
    id: "aria-results"
  }, J), me("span", {
    id: "aria-guidance"
  }, ne));
  return me(Wl, null, me(ep, {
    id: p
  }, j && $), me(ep, {
    "aria-live": H,
    "aria-atomic": "false",
    "aria-relevant": "additions text",
    role: "log"
  }, l && !j && $));
}, Hx = Xx, Yl = [{
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
}], zx = new RegExp("[" + Yl.map(function(e) {
  return e.letters;
}).join("") + "]", "g"), Xh = {};
for (var Cl = 0; Cl < Yl.length; Cl++)
  for (var xl = Yl[Cl], Al = 0; Al < xl.letters.length; Al++)
    Xh[xl.letters[Al]] = xl.base;
var Hh = function(t) {
  return t.replace(zx, function(r) {
    return Xh[r];
  });
}, Zx = Dx(Hh), tp = function(t) {
  return t.replace(/^\s+|\s+$/g, "");
}, Yx = function(t) {
  return "".concat(t.label, " ").concat(t.value);
}, Jx = function(t) {
  return function(r, u) {
    if (r.data.__isNew__) return !0;
    var o = he({
      ignoreCase: !0,
      ignoreAccents: !0,
      stringify: Yx,
      trim: !0,
      matchFrom: "any"
    }, t), a = o.ignoreCase, l = o.ignoreAccents, c = o.stringify, f = o.trim, p = o.matchFrom, h = f ? tp(u) : u, g = f ? tp(c(r)) : c(r);
    return a && (h = h.toLowerCase(), g = g.toLowerCase()), l && (h = Zx(h), g = Hh(g)), p === "start" ? g.substr(0, h.length) === h : g.indexOf(h) > -1;
  };
}, Ux = ["innerRef"];
function jx(e) {
  var t = e.innerRef, r = er(e, Ux), u = IC(r, "onExited", "in", "enter", "exit", "appear");
  return me("input", ve({
    ref: t
  }, u, {
    css: /* @__PURE__ */ Ih({
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
  var t = e.isEnabled, r = e.onBottomArrive, u = e.onBottomLeave, o = e.onTopArrive, a = e.onTopLeave, l = $n(!1), c = $n(!1), f = $n(0), p = $n(null), h = Lt(function(E, F) {
    if (p.current !== null) {
      var k = p.current, L = k.scrollTop, D = k.scrollHeight, X = k.clientHeight, G = p.current, H = F > 0, z = D - X - L, N = !1;
      z > F && l.current && (u && u(E), l.current = !1), H && c.current && (a && a(E), c.current = !1), H && F > z ? (r && !l.current && r(E), G.scrollTop = D, N = !0, l.current = !0) : !H && -F > L && (o && !c.current && o(E), G.scrollTop = 0, N = !0, c.current = !0), N && Qx(E);
    }
  }, [r, u, o, a]), g = Lt(function(E) {
    h(E, E.deltaY);
  }, [h]), v = Lt(function(E) {
    f.current = E.changedTouches[0].clientY;
  }, []), b = Lt(function(E) {
    var F = f.current - E.changedTouches[0].clientY;
    h(E, F);
  }, [h]), P = Lt(function(E) {
    if (E) {
      var F = bC ? {
        passive: !1
      } : !1;
      E.addEventListener("wheel", g, F), E.addEventListener("touchstart", v, F), E.addEventListener("touchmove", b, F);
    }
  }, [b, v, g]), A = Lt(function(E) {
    E && (E.removeEventListener("wheel", g, !1), E.removeEventListener("touchstart", v, !1), E.removeEventListener("touchmove", b, !1));
  }, [b, v, g]);
  return Mn(function() {
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
var np = ["boxSizing", "height", "overflow", "paddingRight", "position"], rp = {
  boxSizing: "border-box",
  // account for possible declaration `width: 100%;` on body
  overflow: "hidden",
  position: "relative",
  height: "100%"
};
function ip(e) {
  e.cancelable && e.preventDefault();
}
function up(e) {
  e.stopPropagation();
}
function op() {
  var e = this.scrollTop, t = this.scrollHeight, r = e + this.offsetHeight;
  e === 0 ? this.scrollTop = 1 : r === t && (this.scrollTop = e - 1);
}
function sp() {
  return "ontouchstart" in window || navigator.maxTouchPoints;
}
var ap = !!(typeof window < "u" && window.document && window.document.createElement), Gu = 0, Vi = {
  capture: !1,
  passive: !1
};
function $x(e) {
  var t = e.isEnabled, r = e.accountForScrollbars, u = r === void 0 ? !0 : r, o = $n({}), a = $n(null), l = Lt(function(f) {
    if (ap) {
      var p = document.body, h = p && p.style;
      if (u && np.forEach(function(P) {
        var A = h && h[P];
        o.current[P] = A;
      }), u && Gu < 1) {
        var g = parseInt(o.current.paddingRight, 10) || 0, v = document.body ? document.body.clientWidth : 0, b = window.innerWidth - v + g || 0;
        Object.keys(rp).forEach(function(P) {
          var A = rp[P];
          h && (h[P] = A);
        }), h && (h.paddingRight = "".concat(b, "px"));
      }
      p && sp() && (p.addEventListener("touchmove", ip, Vi), f && (f.addEventListener("touchstart", op, Vi), f.addEventListener("touchmove", up, Vi))), Gu += 1;
    }
  }, [u]), c = Lt(function(f) {
    if (ap) {
      var p = document.body, h = p && p.style;
      Gu = Math.max(Gu - 1, 0), u && Gu < 1 && np.forEach(function(g) {
        var v = o.current[g];
        h && (h[g] = v);
      }), p && sp() && (p.removeEventListener("touchmove", ip, Vi), f && (f.removeEventListener("touchstart", op, Vi), f.removeEventListener("touchmove", up, Vi)));
    }
  }, [u]);
  return Mn(function() {
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
  return me(Wl, null, r && me("div", {
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
  return me("input", {
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
function xc(e) {
  var t;
  return typeof window < "u" && window.navigator != null ? e.test(((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.platform) || window.navigator.platform) : !1;
}
function sA() {
  return xc(/^iPhone/i);
}
function zh() {
  return xc(/^Mac/i);
}
function aA() {
  return xc(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  zh() && navigator.maxTouchPoints > 1;
}
function lA() {
  return sA() || aA();
}
function cA() {
  return zh() || lA();
}
var fA = function(t) {
  return t.label;
}, Zh = function(t) {
  return t.label;
}, Yh = function(t) {
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
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = he({}, e);
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
}, mA = 4, Jh = 4, bA = 38, yA = Jh * 2, vA = {
  baseUnit: Jh,
  controlHeight: bA,
  menuGutter: yA
}, Hu = {
  borderRadius: mA,
  colors: gA,
  spacing: vA
}, IA = {
  "aria-live": "polite",
  backspaceRemovesValue: !0,
  blurInputOnSelect: qd(),
  captureMenuScroll: !qd(),
  classNames: {},
  closeMenuOnSelect: !0,
  closeMenuOnScroll: !1,
  components: {},
  controlShouldRenderValue: !0,
  escapeClearsValue: !1,
  filterOption: Jx(),
  formatGroupLabel: fA,
  getOptionLabel: Zh,
  getOptionValue: Yh,
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
function lp(e, t, r, u) {
  var o = Qh(e, t, r), a = qh(e, t, r), l = jh(e, t), c = Ts(e, t);
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
        return lp(e, l, t, c);
      }).filter(function(l) {
        return fp(e, l);
      });
      return o.length > 0 ? {
        type: "group",
        data: r,
        options: o,
        index: u
      } : void 0;
    }
    var a = lp(e, r, t, u);
    return fp(e, a) ? a : void 0;
  }).filter(yC);
}
function Uh(e) {
  return e.reduce(function(t, r) {
    return r.type === "group" ? t.push.apply(t, Xi(r.options.map(function(u) {
      return u.data;
    }))) : t.push(r.data), t;
  }, []);
}
function cp(e, t) {
  return e.reduce(function(r, u) {
    return u.type === "group" ? r.push.apply(r, Xi(u.options.map(function(o) {
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
  return Uh(Cs(e, t));
}
function fp(e, t) {
  var r = e.inputValue, u = r === void 0 ? "" : r, o = t.data, a = t.isSelected, l = t.label, c = t.value;
  return (!Kh(e) || !a) && $h(e, {
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
var wl = function(t, r) {
  var u, o = (u = t.find(function(a) {
    return a.data === r;
  })) === null || u === void 0 ? void 0 : u.id;
  return o || null;
}, jh = function(t, r) {
  return t.getOptionLabel(r);
}, Ts = function(t, r) {
  return t.getOptionValue(r);
};
function Qh(e, t, r) {
  return typeof e.isOptionDisabled == "function" ? e.isOptionDisabled(t, r) : !1;
}
function qh(e, t, r) {
  if (r.indexOf(t) > -1) return !0;
  if (typeof e.isOptionSelected == "function")
    return e.isOptionSelected(t, r);
  var u = Ts(e, t);
  return r.some(function(o) {
    return Ts(e, o) === u;
  });
}
function $h(e, t, r) {
  return e.filterOption ? e.filterOption(t, r) : !0;
}
var Kh = function(t) {
  var r = t.hideSelectedOptions, u = t.isMulti;
  return r === void 0 ? u : r;
}, wA = 1, Ac = /* @__PURE__ */ function(e) {
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
        g ? o.setValue([].concat(Xi(b), [f]), "select-option", f) : o.setValue(f, "select-option");
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
      return wl(o.state.focusableOptionsWithIds, f);
    }, o.getFocusableOptionsWithIds = function() {
      return cp(Cs(o.props, o.state.selectValue), o.getElementId("option"));
    }, o.getValue = function() {
      return o.state.selectValue;
    }, o.cx = function() {
      for (var f = arguments.length, p = new Array(f), h = 0; h < f; h++)
        p[h] = arguments[h];
      return cC.apply(void 0, [o.props.classNamePrefix].concat(p));
    }, o.getOptionLabel = function(f) {
      return jh(o.props, f);
    }, o.getOptionValue = function(f) {
      return Ts(o.props, f);
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
      return Uh(o.buildCategorizedOptions());
    }, o.getFocusableOptions = function() {
      return o.props.menuIsOpen ? o.buildFocusableOptions() : [];
    }, o.ariaOnChange = function(f, p) {
      o.setState({
        ariaSelection: he({
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
      typeof o.props.closeMenuOnScroll == "boolean" ? f.target instanceof HTMLElement && Ms(f.target) && o.props.onMenuClose() : typeof o.props.closeMenuOnScroll == "function" && o.props.closeMenuOnScroll(f) && o.props.onMenuClose();
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
      return Kh(o.props);
    }, o.onValueInputFocus = function(f) {
      f.preventDefault(), f.stopPropagation(), o.focus();
    }, o.onKeyDown = function(f) {
      var p = o.props, h = p.isMulti, g = p.backspaceRemovesValue, v = p.escapeClearsValue, b = p.inputValue, P = p.isClearable, A = p.isDisabled, E = p.menuIsOpen, F = p.onKeyDown, k = p.tabSelectsValue, L = p.openMenuOnFocus, D = o.state, X = D.focusedOption, G = D.focusedValue, H = D.selectValue;
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
            if (o.isComposing || f.shiftKey || !E || !k || !X || // don't capture the event if the menu opens on focus and the focused
            // option is already selected; it breaks the flow of navigation
            L && o.isOptionSelected(X, H))
              return;
            o.selectOption(X);
            break;
          case "Enter":
            if (f.keyCode === 229)
              break;
            if (E) {
              if (!X || o.isComposing) return;
              o.selectOption(X);
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
            if (!X) return;
            o.selectOption(X);
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
    }, o.state.instancePrefix = "react-select-" + (o.props.instanceId || ++wA), o.state.selectValue = Ps(u.value), u.menuIsOpen && o.state.selectValue.length) {
      var a = o.getFocusableOptionsWithIds(), l = o.buildFocusableOptions(), c = l.indexOf(o.state.selectValue[0]);
      o.state.focusableOptionsWithIds = a, o.state.focusedOption = l[c], o.state.focusedOptionId = wl(a, l[c]);
    }
    return o;
  }
  return V1(r, [{
    key: "componentDidMount",
    value: function() {
      this.startListeningComposition(), this.startListeningToTouch(), this.props.closeMenuOnScroll && document && document.addEventListener && document.addEventListener("scroll", this.onScroll, !0), this.props.autoFocus && this.focusInput(), this.props.menuIsOpen && this.state.focusedOption && this.menuListRef && this.focusedOptionRef && Qd(this.menuListRef, this.focusedOptionRef);
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
      }), this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate && (Qd(this.menuListRef, this.focusedOptionRef), this.scrollToFocusedOptionOnUpdate = !1);
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
        return this.props.theme ? typeof this.props.theme == "function" ? this.props.theme(Hu) : he(he({}, Hu), this.props.theme) : Hu;
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
      return Qh(this.props, o, a);
    }
  }, {
    key: "isOptionSelected",
    value: function(o, a) {
      return qh(this.props, o, a);
    }
  }, {
    key: "filterOption",
    value: function(o, a) {
      return $h(this.props, o, a);
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
        var o = this.props, a = o.isDisabled, l = o.isSearchable, c = o.inputId, f = o.inputValue, p = o.tabIndex, h = o.form, g = o.menuIsOpen, v = o.required, b = this.getComponents(), P = b.Input, A = this.state, E = A.inputIsHidden, F = A.ariaSelection, k = this.commonProps, L = c || this.getElementId("input"), D = he(he(he({
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
        return l ? /* @__PURE__ */ Oe.createElement(P, ve({}, k, {
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
        }, D)) : /* @__PURE__ */ Oe.createElement(jx, ve({
          id: L,
          innerRef: this.getInputRef,
          onBlur: this.onInputBlur,
          onChange: Rs,
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
      var o = this, a = this.getComponents(), l = a.MultiValue, c = a.MultiValueContainer, f = a.MultiValueLabel, p = a.MultiValueRemove, h = a.SingleValue, g = a.Placeholder, v = this.commonProps, b = this.props, P = b.controlShouldRenderValue, A = b.isDisabled, E = b.isMulti, F = b.inputValue, k = b.placeholder, L = this.state, D = L.selectValue, X = L.focusedValue, G = L.isFocused;
      if (!this.hasValue() || !P)
        return F ? null : /* @__PURE__ */ Oe.createElement(g, ve({}, v, {
          key: "placeholder",
          isDisabled: A,
          isFocused: G,
          innerProps: {
            id: this.getElementId("placeholder")
          }
        }), k);
      if (E)
        return D.map(function(z, N) {
          var re = z === X, J = "".concat(o.getOptionLabel(z), "-").concat(o.getOptionValue(z));
          return /* @__PURE__ */ Oe.createElement(l, ve({}, v, {
            components: {
              Container: c,
              Label: f,
              Remove: p
            },
            isFocused: re,
            isDisabled: A,
            key: J,
            index: N,
            removeProps: {
              onClick: function() {
                return o.removeValue(z);
              },
              onTouchEnd: function() {
                return o.removeValue(z);
              },
              onMouseDown: function(ne) {
                ne.preventDefault();
              }
            },
            data: z
          }), o.formatOptionLabel(z, "value"));
        });
      if (F)
        return null;
      var H = D[0];
      return /* @__PURE__ */ Oe.createElement(h, ve({}, v, {
        data: H,
        isDisabled: A
      }), this.formatOptionLabel(H, "value"));
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
      return /* @__PURE__ */ Oe.createElement(a, ve({}, l, {
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
      return /* @__PURE__ */ Oe.createElement(a, ve({}, l, {
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
      return /* @__PURE__ */ Oe.createElement(l, ve({}, c, {
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
      return /* @__PURE__ */ Oe.createElement(a, ve({}, l, {
        innerProps: p,
        isDisabled: c,
        isFocused: f
      }));
    }
  }, {
    key: "renderMenu",
    value: function() {
      var o = this, a = this.getComponents(), l = a.Group, c = a.GroupHeading, f = a.Menu, p = a.MenuList, h = a.MenuPortal, g = a.LoadingMessage, v = a.NoOptionsMessage, b = a.Option, P = this.commonProps, A = this.state.focusedOption, E = this.props, F = E.captureMenuScroll, k = E.inputValue, L = E.isLoading, D = E.loadingMessage, X = E.minMenuHeight, G = E.maxMenuHeight, H = E.menuIsOpen, z = E.menuPlacement, N = E.menuPosition, re = E.menuPortalTarget, J = E.menuShouldBlockScroll, j = E.menuShouldScrollIntoView, ne = E.noOptionsMessage, $ = E.onMenuScrollToTop, te = E.onMenuScrollToBottom;
      if (!H) return null;
      var pe = function(S, Je) {
        var be = S.type, De = S.data, yt = S.isDisabled, Ne = S.isSelected, ft = S.label, Dt = S.value, se = A === De, ce = yt ? void 0 : function() {
          return o.onOptionHover(De);
        }, we = yt ? void 0 : function() {
          return o.selectOption(De);
        }, Fe = "".concat(o.getElementId("option"), "-").concat(Je), vt = {
          id: Fe,
          onClick: we,
          onMouseMove: ce,
          onMouseOver: ce,
          tabIndex: -1,
          role: "option",
          "aria-selected": o.isAppleDevice ? void 0 : Ne
          // is not supported on Apple devices
        };
        return /* @__PURE__ */ Oe.createElement(b, ve({}, P, {
          innerProps: vt,
          data: De,
          isDisabled: yt,
          isSelected: Ne,
          key: Fe,
          label: ft,
          type: be,
          value: Dt,
          isFocused: se,
          innerRef: se ? o.getFocusedOptionRef : void 0
        }), o.formatOptionLabel(S.data, "menu"));
      }, ee;
      if (this.hasOptions())
        ee = this.getCategorizedOptions().map(function(Ee) {
          if (Ee.type === "group") {
            var S = Ee.data, Je = Ee.options, be = Ee.index, De = "".concat(o.getElementId("group"), "-").concat(be), yt = "".concat(De, "-heading");
            return /* @__PURE__ */ Oe.createElement(l, ve({}, P, {
              key: De,
              data: S,
              options: Je,
              Heading: c,
              headingProps: {
                id: yt,
                data: Ee.data
              },
              label: o.formatGroupLabel(Ee.data)
            }), Ee.options.map(function(Ne) {
              return pe(Ne, "".concat(be, "-").concat(Ne.index));
            }));
          } else if (Ee.type === "option")
            return pe(Ee, "".concat(Ee.index));
        });
      else if (L) {
        var de = D({
          inputValue: k
        });
        if (de === null) return null;
        ee = /* @__PURE__ */ Oe.createElement(g, P, de);
      } else {
        var We = ne({
          inputValue: k
        });
        if (We === null) return null;
        ee = /* @__PURE__ */ Oe.createElement(v, P, We);
      }
      var w = {
        minMenuHeight: X,
        maxMenuHeight: G,
        menuPlacement: z,
        menuPosition: N,
        menuShouldScrollIntoView: j
      }, ke = /* @__PURE__ */ Oe.createElement(EC, ve({}, P, w), function(Ee) {
        var S = Ee.ref, Je = Ee.placerProps, be = Je.placement, De = Je.maxHeight;
        return /* @__PURE__ */ Oe.createElement(f, ve({}, P, w, {
          innerRef: S,
          innerProps: {
            onMouseDown: o.onMenuMouseDown,
            onMouseMove: o.onMenuMouseMove
          },
          isLoading: L,
          placement: be
        }), /* @__PURE__ */ Oe.createElement(nA, {
          captureEnabled: F,
          onTopArrive: $,
          onBottomArrive: te,
          lockEnabled: J
        }, function(yt) {
          return /* @__PURE__ */ Oe.createElement(p, ve({}, P, {
            innerRef: function(ft) {
              o.getMenuListRef(ft), yt(ft);
            },
            innerProps: {
              role: "listbox",
              "aria-multiselectable": P.isMulti,
              id: o.getElementId("listbox")
            },
            isLoading: L,
            maxHeight: De,
            focusedOption: A
          }), ee);
        }));
      });
      return re || N === "fixed" ? /* @__PURE__ */ Oe.createElement(h, ve({}, P, {
        appendTo: re,
        controlElement: this.controlRef,
        menuPlacement: z,
        menuPosition: N
      }), ke) : ke;
    }
  }, {
    key: "renderFormField",
    value: function() {
      var o = this, a = this.props, l = a.delimiter, c = a.isDisabled, f = a.isMulti, p = a.name, h = a.required, g = this.state.selectValue;
      if (h && !this.hasValue() && !c)
        return /* @__PURE__ */ Oe.createElement(oA, {
          name: p,
          onFocus: this.onValueInputFocus
        });
      if (!(!p || c))
        if (f)
          if (l) {
            var v = g.map(function(A) {
              return o.getOptionValue(A);
            }).join(l);
            return /* @__PURE__ */ Oe.createElement("input", {
              name: p,
              type: "hidden",
              value: v
            });
          } else {
            var b = g.length > 0 ? g.map(function(A, E) {
              return /* @__PURE__ */ Oe.createElement("input", {
                key: "i-".concat(E),
                name: p,
                type: "hidden",
                value: o.getOptionValue(A)
              });
            }) : /* @__PURE__ */ Oe.createElement("input", {
              name: p,
              type: "hidden",
              value: ""
            });
            return /* @__PURE__ */ Oe.createElement("div", null, b);
          }
        else {
          var P = g[0] ? this.getOptionValue(g[0]) : "";
          return /* @__PURE__ */ Oe.createElement("input", {
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
      return /* @__PURE__ */ Oe.createElement(Hx, ve({}, o, {
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
      return /* @__PURE__ */ Oe.createElement(c, ve({}, A, {
        className: h,
        innerProps: {
          id: g,
          onKeyDown: this.onKeyDown
        },
        isDisabled: v,
        isFocused: P
      }), this.renderLiveRegion(), /* @__PURE__ */ Oe.createElement(a, ve({}, A, {
        innerRef: this.getControlRef,
        innerProps: {
          onMouseDown: this.onControlMouseDown,
          onTouchEnd: this.onControlTouchEnd
        },
        isDisabled: v,
        isFocused: P,
        menuIsOpen: b
      }), /* @__PURE__ */ Oe.createElement(f, ve({}, A, {
        isDisabled: v
      }), this.renderPlaceholderOrValue(), this.renderInput()), /* @__PURE__ */ Oe.createElement(l, ve({}, A, {
        isDisabled: v
      }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(o, a) {
      var l = a.prevProps, c = a.clearFocusValueOnUpdate, f = a.inputIsHiddenAfterUpdate, p = a.ariaSelection, h = a.isFocused, g = a.prevWasFocused, v = a.instancePrefix, b = o.options, P = o.value, A = o.menuIsOpen, E = o.inputValue, F = o.isMulti, k = Ps(P), L = {};
      if (l && (P !== l.value || b !== l.options || A !== l.menuIsOpen || E !== l.inputValue)) {
        var D = A ? CA(o, k) : [], X = A ? cp(Cs(o, k), "".concat(v, "-option")) : [], G = c ? xA(a, k) : null, H = AA(a, D), z = wl(X, H);
        L = {
          selectValue: k,
          focusedOption: H,
          focusedOptionId: z,
          focusableOptionsWithIds: X,
          focusedValue: G,
          clearFocusValueOnUpdate: !1
        };
      }
      var N = f != null && o !== l ? {
        inputIsHidden: f,
        inputIsHiddenAfterUpdate: void 0
      } : {}, re = p, J = h && g;
      return h && !J && (re = {
        value: Nu(F, k, k[0] || null),
        options: k,
        action: "initial-input-focus"
      }, J = !g), (p == null ? void 0 : p.action) === "initial-input-focus" && (re = null), he(he(he({}, L), N), {}, {
        prevProps: o,
        ariaSelection: re,
        prevWasFocused: J
      });
    }
  }]), r;
}(yh);
Ac.defaultProps = IA;
var SA = /* @__PURE__ */ vh(function(e, t) {
  var r = Ah(e);
  return /* @__PURE__ */ Oe.createElement(Ac, ve({
    ref: t
  }, r));
}), Ns = SA;
const EA = Hu, wc = {
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
  const t = typeof e == "function" ? e(wc) : e, {
    colors: r,
    spacing: u,
    borderRadius: o
  } = Jl(
    EA,
    t
  );
  return {
    borderRadius: o,
    colors: r,
    spacing: u
  };
}
function Jl(e, ...t) {
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
function Ul(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function eg(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Hi(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Dn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function dp(e, t) {
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
      if (t.queryHash !== Sc(l, t.options))
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
function pp(e, t) {
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
function Sc(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || Yu)(e);
}
function Yu(e) {
  return JSON.stringify(
    e,
    (t, r) => ql(r) ? Object.keys(r).sort().reduce((u, o) => (u[o] = r[o], u), {}) : r
  );
}
function Ju(e, t) {
  return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? !Object.keys(t).some((r) => !Ju(e[r], t[r])) : !1;
}
function jl(e, t) {
  if (e === t)
    return e;
  const r = hp(e) && hp(t);
  if (r || ql(e) && ql(t)) {
    const u = r ? e : Object.keys(e), o = u.length, a = r ? t : Object.keys(t), l = a.length, c = r ? [] : {};
    let f = 0;
    for (let p = 0; p < l; p++) {
      const h = r ? p : a[p];
      (!r && u.includes(h) || r) && e[h] === void 0 && t[h] === void 0 ? (c[h] = void 0, f++) : (c[h] = jl(e[h], t[h]), c[h] === e[h] && e[h] !== void 0 && f++);
    }
    return o === l && f === o ? e : c;
  }
  return t;
}
function Ql(e, t) {
  if (!t || Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const r in e)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function hp(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function ql(e) {
  if (!gp(e))
    return !1;
  const t = e.constructor;
  if (t === void 0)
    return !0;
  const r = t.prototype;
  return !(!gp(r) || !r.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype);
}
function gp(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function OA(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function $l(e, t, r) {
  if (typeof r.structuralSharing == "function")
    return r.structuralSharing(e, t);
  if (r.structuralSharing !== !1) {
    if (process.env.NODE_ENV !== "production")
      try {
        return jl(e, t);
      } catch (u) {
        console.error(
          `Structural sharing requires data to be JSON serializable. To fix this, turn off structuralSharing or return JSON-serializable data from your queryFn. [${r.queryHash}]: ${u}`
        );
      }
    return jl(e, t);
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
var Bs = Symbol();
function tg(e, t) {
  return process.env.NODE_ENV !== "production" && e.queryFn === Bs && console.error(
    `Attempted to invoke queryFn when set to skipToken. This is likely a configuration error. Query hash: '${e.queryHash}'`
  ), !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === Bs ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn;
}
var ui, Gr, Yi, lh, _A = (lh = class extends to {
  constructor() {
    super();
    xe(this, ui);
    xe(this, Gr);
    xe(this, Yi);
    le(this, Yi, (t) => {
      if (!pi && window.addEventListener) {
        const r = () => t();
        return window.addEventListener("visibilitychange", r, !1), () => {
          window.removeEventListener("visibilitychange", r);
        };
      }
    });
  }
  onSubscribe() {
    O(this, Gr) || this.setEventListener(O(this, Yi));
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || ((t = O(this, Gr)) == null || t.call(this), le(this, Gr, void 0));
  }
  setEventListener(t) {
    var r;
    le(this, Yi, t), (r = O(this, Gr)) == null || r.call(this), le(this, Gr, t((u) => {
      typeof u == "boolean" ? this.setFocused(u) : this.onFocus();
    }));
  }
  setFocused(t) {
    O(this, ui) !== t && (le(this, ui, t), this.onFocus());
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
}, ui = new WeakMap(), Gr = new WeakMap(), Yi = new WeakMap(), lh), Ec = new _A(), Ji, Lr, Ui, ch, GA = (ch = class extends to {
  constructor() {
    super();
    xe(this, Ji, !0);
    xe(this, Lr);
    xe(this, Ui);
    le(this, Ui, (t) => {
      if (!pi && window.addEventListener) {
        const r = () => t(!0), u = () => t(!1);
        return window.addEventListener("online", r, !1), window.addEventListener("offline", u, !1), () => {
          window.removeEventListener("online", r), window.removeEventListener("offline", u);
        };
      }
    });
  }
  onSubscribe() {
    O(this, Lr) || this.setEventListener(O(this, Ui));
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || ((t = O(this, Lr)) == null || t.call(this), le(this, Lr, void 0));
  }
  setEventListener(t) {
    var r;
    le(this, Ui, t), (r = O(this, Lr)) == null || r.call(this), le(this, Lr, t(this.setOnline.bind(this)));
  }
  setOnline(t) {
    O(this, Ji) !== t && (le(this, Ji, t), this.listeners.forEach((u) => {
      u(t);
    }));
  }
  isOnline() {
    return O(this, Ji);
  }
}, Ji = new WeakMap(), Lr = new WeakMap(), Ui = new WeakMap(), ch), _s = new GA();
function Kl() {
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
function ng(e) {
  return (e ?? "online") === "online" ? _s.isOnline() : !0;
}
var rg = class extends Error {
  constructor(e) {
    super("CancelledError"), this.revert = e == null ? void 0 : e.revert, this.silent = e == null ? void 0 : e.silent;
  }
};
function Sl(e) {
  return e instanceof rg;
}
function ig(e) {
  let t = !1, r = 0, u = !1, o;
  const a = Kl(), l = (A) => {
    var E;
    u || (v(new rg(A)), (E = e.abort) == null || E.call(e));
  }, c = () => {
    t = !0;
  }, f = () => {
    t = !1;
  }, p = () => Ec.isFocused() && (e.networkMode === "always" || _s.isOnline()) && e.canRun(), h = () => ng(e.networkMode) && e.canRun(), g = (A) => {
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
      const k = e.retry ?? (pi ? 0 : 3), L = e.retryDelay ?? LA, D = typeof L == "function" ? L(r, F) : L, X = k === !0 || typeof k == "number" && r < k || typeof k == "function" && k(r, F);
      if (t || !X) {
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
var Ot = kA(), oi, fh, ug = (fh = class {
  constructor() {
    xe(this, oi);
  }
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(), Ul(this.gcTime) && le(this, oi, setTimeout(() => {
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
    O(this, oi) && (clearTimeout(O(this, oi)), le(this, oi, void 0));
  }
}, oi = new WeakMap(), fh), ji, Qi, Sn, Gt, ju, si, Ln, mr, dh, DA = (dh = class extends ug {
  constructor(t) {
    super();
    xe(this, Ln);
    xe(this, ji);
    xe(this, Qi);
    xe(this, Sn);
    xe(this, Gt);
    xe(this, ju);
    xe(this, si);
    le(this, si, !1), le(this, ju, t.defaultOptions), this.setOptions(t.options), this.observers = [], le(this, Sn, t.cache), this.queryKey = t.queryKey, this.queryHash = t.queryHash, le(this, ji, MA(this.options)), this.state = t.state ?? O(this, ji), this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  get promise() {
    var t;
    return (t = O(this, Gt)) == null ? void 0 : t.promise;
  }
  setOptions(t) {
    this.options = { ...O(this, ju), ...t }, this.updateGcTime(this.options.gcTime);
  }
  optionalRemove() {
    !this.observers.length && this.state.fetchStatus === "idle" && O(this, Sn).remove(this);
  }
  setData(t, r) {
    const u = $l(this.state.data, t, this.options);
    return Ze(this, Ln, mr).call(this, {
      data: u,
      type: "success",
      dataUpdatedAt: r == null ? void 0 : r.updatedAt,
      manual: r == null ? void 0 : r.manual
    }), u;
  }
  setState(t, r) {
    Ze(this, Ln, mr).call(this, { type: "setState", state: t, setStateOptions: r });
  }
  cancel(t) {
    var u, o;
    const r = (u = O(this, Gt)) == null ? void 0 : u.promise;
    return (o = O(this, Gt)) == null || o.cancel(t), r ? r.then(En).catch(En) : Promise.resolve();
  }
  destroy() {
    super.destroy(), this.cancel({ silent: !0 });
  }
  reset() {
    this.destroy(), this.setState(O(this, ji));
  }
  isActive() {
    return this.observers.some(
      (t) => Dn(t.options.enabled, this) !== !1
    );
  }
  isDisabled() {
    return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === Bs || this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
  }
  isStale() {
    return this.state.isInvalidated ? !0 : this.getObserversCount() > 0 ? this.observers.some(
      (t) => t.getCurrentResult().isStale
    ) : this.state.data === void 0;
  }
  isStaleByTime(t = 0) {
    return this.state.isInvalidated || this.state.data === void 0 || !eg(this.state.dataUpdatedAt, t);
  }
  onFocus() {
    var r;
    const t = this.observers.find((u) => u.shouldFetchOnWindowFocus());
    t == null || t.refetch({ cancelRefetch: !1 }), (r = O(this, Gt)) == null || r.continue();
  }
  onOnline() {
    var r;
    const t = this.observers.find((u) => u.shouldFetchOnReconnect());
    t == null || t.refetch({ cancelRefetch: !1 }), (r = O(this, Gt)) == null || r.continue();
  }
  addObserver(t) {
    this.observers.includes(t) || (this.observers.push(t), this.clearGcTimeout(), O(this, Sn).notify({ type: "observerAdded", query: this, observer: t }));
  }
  removeObserver(t) {
    this.observers.includes(t) && (this.observers = this.observers.filter((r) => r !== t), this.observers.length || (O(this, Gt) && (O(this, si) ? O(this, Gt).cancel({ revert: !0 }) : O(this, Gt).cancelRetry()), this.scheduleGc()), O(this, Sn).notify({ type: "observerRemoved", query: this, observer: t }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    this.state.isInvalidated || Ze(this, Ln, mr).call(this, { type: "invalidate" });
  }
  fetch(t, r) {
    var f, p, h;
    if (this.state.fetchStatus !== "idle") {
      if (this.state.data !== void 0 && (r != null && r.cancelRefetch))
        this.cancel({ silent: !0 });
      else if (O(this, Gt))
        return O(this, Gt).continueRetry(), O(this, Gt).promise;
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
        get: () => (le(this, si, !0), u.signal)
      });
    }, a = () => {
      const g = tg(this.options, r), v = {
        queryKey: this.queryKey,
        meta: this.meta
      };
      return o(v), le(this, si, !1), this.options.persister ? this.options.persister(
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
    ), le(this, Qi, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((p = l.fetchOptions) == null ? void 0 : p.meta)) && Ze(this, Ln, mr).call(this, { type: "fetch", meta: (h = l.fetchOptions) == null ? void 0 : h.meta });
    const c = (g) => {
      var v, b, P, A;
      Sl(g) && g.silent || Ze(this, Ln, mr).call(this, {
        type: "error",
        error: g
      }), Sl(g) || ((b = (v = O(this, Sn).config).onError) == null || b.call(
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
    return le(this, Gt, ig({
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
        Ze(this, Ln, mr).call(this, { type: "failed", failureCount: g, error: v });
      },
      onPause: () => {
        Ze(this, Ln, mr).call(this, { type: "pause" });
      },
      onContinue: () => {
        Ze(this, Ln, mr).call(this, { type: "continue" });
      },
      retry: l.options.retry,
      retryDelay: l.options.retryDelay,
      networkMode: l.options.networkMode,
      canRun: () => !0
    })), O(this, Gt).start();
  }
}, ji = new WeakMap(), Qi = new WeakMap(), Sn = new WeakMap(), Gt = new WeakMap(), ju = new WeakMap(), si = new WeakMap(), Ln = new WeakSet(), mr = function(t) {
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
          ...og(u.data, this.options),
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
        return Sl(o) && o.revert && O(this, Qi) ? { ...O(this, Qi), fetchStatus: "idle" } : {
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
}, dh);
function og(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: ng(t.networkMode) ? "fetching" : "paused",
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
var Yn, ph, NA = (ph = class extends to {
  constructor(t = {}) {
    super();
    xe(this, Yn);
    this.config = t, le(this, Yn, /* @__PURE__ */ new Map());
  }
  build(t, r, u) {
    const o = r.queryKey, a = r.queryHash ?? Sc(o, r);
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
      (u) => dp(r, u)
    );
  }
  findAll(t = {}) {
    const r = this.getAll();
    return Object.keys(t).length > 0 ? r.filter((u) => dp(t, u)) : r;
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
}, Yn = new WeakMap(), ph), Jn, zt, ai, Un, _r, hh, VA = (hh = class extends ug {
  constructor(t) {
    super();
    xe(this, Un);
    xe(this, Jn);
    xe(this, zt);
    xe(this, ai);
    this.mutationId = t.mutationId, le(this, zt, t.mutationCache), le(this, Jn, []), this.state = t.state || WA(), this.setOptions(t.options), this.scheduleGc();
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
    le(this, Jn, O(this, Jn).filter((r) => r !== t)), this.scheduleGc(), O(this, zt).notify({
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
    var o, a, l, c, f, p, h, g, v, b, P, A, E, F, k, L, D, X, G, H;
    le(this, ai, ig({
      fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
      onFail: (z, N) => {
        Ze(this, Un, _r).call(this, { type: "failed", failureCount: z, error: N });
      },
      onPause: () => {
        Ze(this, Un, _r).call(this, { type: "pause" });
      },
      onContinue: () => {
        Ze(this, Un, _r).call(this, { type: "continue" });
      },
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => O(this, zt).canRun(this)
    }));
    const r = this.state.status === "pending", u = !O(this, ai).canStart();
    try {
      if (!r) {
        Ze(this, Un, _r).call(this, { type: "pending", variables: t, isPaused: u }), await ((a = (o = O(this, zt).config).onMutate) == null ? void 0 : a.call(
          o,
          t,
          this
        ));
        const N = await ((c = (l = this.options).onMutate) == null ? void 0 : c.call(l, t));
        N !== this.state.context && Ze(this, Un, _r).call(this, {
          type: "pending",
          context: N,
          variables: t,
          isPaused: u
        });
      }
      const z = await O(this, ai).start();
      return await ((p = (f = O(this, zt).config).onSuccess) == null ? void 0 : p.call(
        f,
        z,
        t,
        this.state.context,
        this
      )), await ((g = (h = this.options).onSuccess) == null ? void 0 : g.call(h, z, t, this.state.context)), await ((b = (v = O(this, zt).config).onSettled) == null ? void 0 : b.call(
        v,
        z,
        null,
        this.state.variables,
        this.state.context,
        this
      )), await ((A = (P = this.options).onSettled) == null ? void 0 : A.call(P, z, null, t, this.state.context)), Ze(this, Un, _r).call(this, { type: "success", data: z }), z;
    } catch (z) {
      try {
        throw await ((F = (E = O(this, zt).config).onError) == null ? void 0 : F.call(
          E,
          z,
          t,
          this.state.context,
          this
        )), await ((L = (k = this.options).onError) == null ? void 0 : L.call(
          k,
          z,
          t,
          this.state.context
        )), await ((X = (D = O(this, zt).config).onSettled) == null ? void 0 : X.call(
          D,
          void 0,
          z,
          this.state.variables,
          this.state.context,
          this
        )), await ((H = (G = this.options).onSettled) == null ? void 0 : H.call(
          G,
          void 0,
          z,
          t,
          this.state.context
        )), z;
      } finally {
        Ze(this, Un, _r).call(this, { type: "error", error: z });
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
}, hh);
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
var br, kn, Qu, gh, XA = (gh = class extends to {
  constructor(t = {}) {
    super();
    xe(this, br);
    xe(this, kn);
    xe(this, Qu);
    this.config = t, le(this, br, /* @__PURE__ */ new Set()), le(this, kn, /* @__PURE__ */ new Map()), le(this, Qu, 0);
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
      (u) => pp(r, u)
    );
  }
  findAll(t = {}) {
    return this.getAll().filter((r) => pp(t, r));
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
}, br = new WeakMap(), kn = new WeakMap(), Qu = new WeakMap(), gh);
function bs(e) {
  var t;
  return (t = e.options.scope) == null ? void 0 : t.id;
}
function mp(e) {
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
        }, F = tg(t.options, t.fetchOptions), k = async (L, D, X) => {
          if (A)
            return Promise.reject();
          if (D == null && L.pages.length)
            return Promise.resolve(L);
          const G = {
            queryKey: t.queryKey,
            pageParam: D,
            direction: X ? "backward" : "forward",
            meta: t.options.meta
          };
          E(G);
          const H = await F(
            G
          ), { maxPages: z } = t.options, N = X ? BA : TA;
          return {
            pages: N(L.pages, H, z),
            pageParams: N(L.pageParams, D, z)
          };
        };
        if (o && a.length) {
          const L = o === "backward", D = L ? HA : bp, X = {
            pages: a,
            pageParams: l
          }, G = D(u, X);
          c = await k(X, G, L);
        } else {
          const L = e ?? a.length;
          do {
            const D = f === 0 ? l[0] ?? u.initialPageParam : bp(u, c);
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
function bp(e, { pages: t, pageParams: r }) {
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
var pt, kr, Dr, qi, $i, Mr, Ki, eu, mh, zA = (mh = class {
  constructor(e = {}) {
    xe(this, pt);
    xe(this, kr);
    xe(this, Dr);
    xe(this, qi);
    xe(this, $i);
    xe(this, Mr);
    xe(this, Ki);
    xe(this, eu);
    le(this, pt, e.queryCache || new NA()), le(this, kr, e.mutationCache || new XA()), le(this, Dr, e.defaultOptions || {}), le(this, qi, /* @__PURE__ */ new Map()), le(this, $i, /* @__PURE__ */ new Map()), le(this, Mr, 0);
  }
  mount() {
    ps(this, Mr)._++, O(this, Mr) === 1 && (le(this, Ki, Ec.subscribe(async (e) => {
      e && (await this.resumePausedMutations(), O(this, pt).onFocus());
    })), le(this, eu, _s.subscribe(async (e) => {
      e && (await this.resumePausedMutations(), O(this, pt).onOnline());
    })));
  }
  unmount() {
    var e, t;
    ps(this, Mr)._--, O(this, Mr) === 0 && ((e = O(this, Ki)) == null || e.call(this), le(this, Ki, void 0), (t = O(this, eu)) == null || t.call(this), le(this, eu, void 0));
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
    return u === void 0 ? this.fetchQuery(e) : (e.revalidateIfStale && r.isStaleByTime(Hi(t.staleTime, r)) && this.prefetchQuery(t), Promise.resolve(u));
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
      Hi(t.staleTime, r)
    ) ? r.fetch(t) : Promise.resolve(r.state.data);
  }
  prefetchQuery(e) {
    return this.fetchQuery(e).then(En).catch(En);
  }
  fetchInfiniteQuery(e) {
    return e.behavior = mp(e.pages), this.fetchQuery(e);
  }
  prefetchInfiniteQuery(e) {
    return this.fetchInfiniteQuery(e).then(En).catch(En);
  }
  ensureInfiniteQueryData(e) {
    return e.behavior = mp(e.pages), this.ensureQueryData(e);
  }
  resumePausedMutations() {
    return _s.isOnline() ? O(this, kr).resumePausedMutations() : Promise.resolve();
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
    le(this, Dr, e);
  }
  setQueryDefaults(e, t) {
    O(this, qi).set(Yu(e), {
      queryKey: e,
      defaultOptions: t
    });
  }
  getQueryDefaults(e) {
    const t = [...O(this, qi).values()], r = {};
    return t.forEach((u) => {
      Ju(e, u.queryKey) && Object.assign(r, u.defaultOptions);
    }), r;
  }
  setMutationDefaults(e, t) {
    O(this, $i).set(Yu(e), {
      mutationKey: e,
      defaultOptions: t
    });
  }
  getMutationDefaults(e) {
    const t = [...O(this, $i).values()];
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
    return t.queryHash || (t.queryHash = Sc(
      t.queryKey,
      t
    )), t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"), t.throwOnError === void 0 && (t.throwOnError = !!t.suspense), !t.networkMode && t.persister && (t.networkMode = "offlineFirst"), t.queryFn === Bs && (t.enabled = !1), t;
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
}, pt = new WeakMap(), kr = new WeakMap(), Dr = new WeakMap(), qi = new WeakMap(), $i = new WeakMap(), Mr = new WeakMap(), Ki = new WeakMap(), eu = new WeakMap(), mh), tn, Ye, qu, Zt, li, tu, Nr, jn, $u, nu, ru, ci, fi, Vr, iu, qe, Vu, ec, tc, nc, rc, ic, uc, oc, sg, bh, ZA = (bh = class extends to {
  constructor(t, r) {
    super();
    xe(this, qe);
    xe(this, tn);
    xe(this, Ye);
    xe(this, qu);
    xe(this, Zt);
    xe(this, li);
    xe(this, tu);
    xe(this, Nr);
    xe(this, jn);
    xe(this, $u);
    xe(this, nu);
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    xe(this, ru);
    xe(this, ci);
    xe(this, fi);
    xe(this, Vr);
    xe(this, iu, /* @__PURE__ */ new Set());
    this.options = r, le(this, tn, t), le(this, jn, null), le(this, Nr, Kl()), this.options.experimental_prefetchInRender || O(this, Nr).reject(
      new Error("experimental_prefetchInRender feature flag is not enabled")
    ), this.bindMethods(), this.setOptions(r);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (O(this, Ye).addObserver(this), yp(O(this, Ye), this.options) ? Ze(this, qe, Vu).call(this) : this.updateResult(), Ze(this, qe, rc).call(this));
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return sc(
      O(this, Ye),
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return sc(
      O(this, Ye),
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), Ze(this, qe, ic).call(this), Ze(this, qe, uc).call(this), O(this, Ye).removeObserver(this);
  }
  setOptions(t, r) {
    const u = this.options, o = O(this, Ye);
    if (this.options = O(this, tn).defaultQueryOptions(t), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof Dn(this.options.enabled, O(this, Ye)) != "boolean")
      throw new Error(
        "Expected enabled to be a boolean or a callback that returns a boolean"
      );
    Ze(this, qe, oc).call(this), O(this, Ye).setOptions(this.options), u._defaulted && !Ql(this.options, u) && O(this, tn).getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: O(this, Ye),
      observer: this
    });
    const a = this.hasListeners();
    a && vp(
      O(this, Ye),
      o,
      this.options,
      u
    ) && Ze(this, qe, Vu).call(this), this.updateResult(r), a && (O(this, Ye) !== o || Dn(this.options.enabled, O(this, Ye)) !== Dn(u.enabled, O(this, Ye)) || Hi(this.options.staleTime, O(this, Ye)) !== Hi(u.staleTime, O(this, Ye))) && Ze(this, qe, ec).call(this);
    const l = Ze(this, qe, tc).call(this);
    a && (O(this, Ye) !== o || Dn(this.options.enabled, O(this, Ye)) !== Dn(u.enabled, O(this, Ye)) || l !== O(this, Vr)) && Ze(this, qe, nc).call(this, l);
  }
  getOptimisticResult(t) {
    const r = O(this, tn).getQueryCache().build(O(this, tn), t), u = this.createResult(r, t);
    return JA(this, u) && (le(this, Zt, u), le(this, tu, this.options), le(this, li, O(this, Ye).state)), u;
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
    O(this, iu).add(t);
  }
  getCurrentQuery() {
    return O(this, Ye);
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
    return Ze(this, qe, Vu).call(this, {
      ...t,
      cancelRefetch: t.cancelRefetch ?? !0
    }).then(() => (this.updateResult(), O(this, Zt)));
  }
  createResult(t, r) {
    var z;
    const u = O(this, Ye), o = this.options, a = O(this, Zt), l = O(this, li), c = O(this, tu), p = t !== u ? t.state : O(this, qu), { state: h } = t;
    let g = { ...h }, v = !1, b;
    if (r._optimisticResults) {
      const N = this.hasListeners(), re = !N && yp(t, r), J = N && vp(t, u, r, o);
      (re || J) && (g = {
        ...g,
        ...og(h.data, t.options)
      }), r._optimisticResults === "isRestoring" && (g.fetchStatus = "idle");
    }
    let { error: P, errorUpdatedAt: A, status: E } = g;
    if (r.select && g.data !== void 0)
      if (a && g.data === (l == null ? void 0 : l.data) && r.select === O(this, $u))
        b = O(this, nu);
      else
        try {
          le(this, $u, r.select), b = r.select(g.data), b = $l(a == null ? void 0 : a.data, b, r), le(this, nu, b), le(this, jn, null);
        } catch (N) {
          le(this, jn, N);
        }
    else
      b = g.data;
    if (r.placeholderData !== void 0 && b === void 0 && E === "pending") {
      let N;
      if (a != null && a.isPlaceholderData && r.placeholderData === (c == null ? void 0 : c.placeholderData))
        N = a.data;
      else if (N = typeof r.placeholderData == "function" ? r.placeholderData(
        (z = O(this, ru)) == null ? void 0 : z.state.data,
        O(this, ru)
      ) : r.placeholderData, r.select && N !== void 0)
        try {
          N = r.select(N), le(this, jn, null);
        } catch (re) {
          le(this, jn, re);
        }
      N !== void 0 && (E = "success", b = $l(
        a == null ? void 0 : a.data,
        N,
        r
      ), v = !0);
    }
    O(this, jn) && (P = O(this, jn), b = O(this, nu), A = Date.now(), E = "error");
    const F = g.fetchStatus === "fetching", k = E === "pending", L = E === "error", D = k && F, X = b !== void 0, H = {
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
      isLoadingError: L && !X,
      isPaused: g.fetchStatus === "paused",
      isPlaceholderData: v,
      isRefetchError: L && X,
      isStale: Fc(t, r),
      refetch: this.refetch,
      promise: O(this, Nr)
    };
    if (this.options.experimental_prefetchInRender) {
      const N = (j) => {
        H.status === "error" ? j.reject(H.error) : H.data !== void 0 && j.resolve(H.data);
      }, re = () => {
        const j = le(this, Nr, H.promise = Kl());
        N(j);
      }, J = O(this, Nr);
      switch (J.status) {
        case "pending":
          t.queryHash === u.queryHash && N(J);
          break;
        case "fulfilled":
          (H.status === "error" || H.data !== J.value) && re();
          break;
        case "rejected":
          (H.status !== "error" || H.error !== J.reason) && re();
          break;
      }
    }
    return H;
  }
  updateResult(t) {
    const r = O(this, Zt), u = this.createResult(O(this, Ye), this.options);
    if (le(this, li, O(this, Ye).state), le(this, tu, this.options), O(this, li).data !== void 0 && le(this, ru, O(this, Ye)), Ql(u, r))
      return;
    le(this, Zt, u);
    const o = {}, a = () => {
      if (!r)
        return !0;
      const { notifyOnChangeProps: l } = this.options, c = typeof l == "function" ? l() : l;
      if (c === "all" || !c && !O(this, iu).size)
        return !0;
      const f = new Set(
        c ?? O(this, iu)
      );
      return this.options.throwOnError && f.add("error"), Object.keys(O(this, Zt)).some((p) => {
        const h = p;
        return O(this, Zt)[h] !== r[h] && f.has(h);
      });
    };
    (t == null ? void 0 : t.listeners) !== !1 && a() && (o.listeners = !0), Ze(this, qe, sg).call(this, { ...o, ...t });
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && Ze(this, qe, rc).call(this);
  }
}, tn = new WeakMap(), Ye = new WeakMap(), qu = new WeakMap(), Zt = new WeakMap(), li = new WeakMap(), tu = new WeakMap(), Nr = new WeakMap(), jn = new WeakMap(), $u = new WeakMap(), nu = new WeakMap(), ru = new WeakMap(), ci = new WeakMap(), fi = new WeakMap(), Vr = new WeakMap(), iu = new WeakMap(), qe = new WeakSet(), Vu = function(t) {
  Ze(this, qe, oc).call(this);
  let r = O(this, Ye).fetch(
    this.options,
    t
  );
  return t != null && t.throwOnError || (r = r.catch(En)), r;
}, ec = function() {
  Ze(this, qe, ic).call(this);
  const t = Hi(
    this.options.staleTime,
    O(this, Ye)
  );
  if (pi || O(this, Zt).isStale || !Ul(t))
    return;
  const u = eg(O(this, Zt).dataUpdatedAt, t) + 1;
  le(this, ci, setTimeout(() => {
    O(this, Zt).isStale || this.updateResult();
  }, u));
}, tc = function() {
  return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(O(this, Ye)) : this.options.refetchInterval) ?? !1;
}, nc = function(t) {
  Ze(this, qe, uc).call(this), le(this, Vr, t), !(pi || Dn(this.options.enabled, O(this, Ye)) === !1 || !Ul(O(this, Vr)) || O(this, Vr) === 0) && le(this, fi, setInterval(() => {
    (this.options.refetchIntervalInBackground || Ec.isFocused()) && Ze(this, qe, Vu).call(this);
  }, O(this, Vr)));
}, rc = function() {
  Ze(this, qe, ec).call(this), Ze(this, qe, nc).call(this, Ze(this, qe, tc).call(this));
}, ic = function() {
  O(this, ci) && (clearTimeout(O(this, ci)), le(this, ci, void 0));
}, uc = function() {
  O(this, fi) && (clearInterval(O(this, fi)), le(this, fi, void 0));
}, oc = function() {
  const t = O(this, tn).getQueryCache().build(O(this, tn), this.options);
  if (t === O(this, Ye))
    return;
  const r = O(this, Ye);
  le(this, Ye, t), le(this, qu, t.state), this.hasListeners() && (r == null || r.removeObserver(this), t.addObserver(this));
}, sg = function(t) {
  Ot.batch(() => {
    t.listeners && this.listeners.forEach((r) => {
      r(O(this, Zt));
    }), O(this, tn).getQueryCache().notify({
      query: O(this, Ye),
      type: "observerResultsUpdated"
    });
  });
}, bh);
function YA(e, t) {
  return Dn(t.enabled, e) !== !1 && e.state.data === void 0 && !(e.state.status === "error" && t.retryOnMount === !1);
}
function yp(e, t) {
  return YA(e, t) || e.state.data !== void 0 && sc(e, t, t.refetchOnMount);
}
function sc(e, t, r) {
  if (Dn(t.enabled, e) !== !1) {
    const u = typeof r == "function" ? r(e) : r;
    return u === "always" || u !== !1 && Fc(e, t);
  }
  return !1;
}
function vp(e, t, r, u) {
  return (e !== t || Dn(u.enabled, e) === !1) && (!r.suspense || e.state.status !== "error") && Fc(e, r);
}
function Fc(e, t) {
  return Dn(t.enabled, e) !== !1 && e.isStaleByTime(Hi(t.staleTime, e));
}
function JA(e, t) {
  return !Ql(e.getCurrentResult(), t);
}
var ag = Oe.createContext(
  void 0
), UA = (e) => {
  const t = Oe.useContext(ag);
  if (!t)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return t;
}, jA = ({
  client: e,
  children: t
}) => (Oe.useEffect(() => (e.mount(), () => {
  e.unmount();
}), [e]), /* @__PURE__ */ ue(ag.Provider, { value: e, children: t })), lg = Oe.createContext(!1), QA = () => Oe.useContext(lg);
lg.Provider;
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
var $A = Oe.createContext(qA()), KA = () => Oe.useContext($A);
function ew(e, t) {
  return typeof e == "function" ? e(...t) : !!e;
}
function Ip() {
}
var tw = (e, t) => {
  (e.suspense || e.throwOnError || e.experimental_prefetchInRender) && (t.isReset() || (e.retryOnMount = !1));
}, nw = (e) => {
  Oe.useEffect(() => {
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
}, uw = (e, t) => e.isLoading && e.isFetching && !t, ow = (e, t) => (e == null ? void 0 : e.suspense) && t.isPending, Cp = (e, t, r) => t.fetchOptimistic(e).catch(() => {
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
  const c = !u.getQueryCache().get(l.queryHash), [f] = Oe.useState(
    () => new t(
      u,
      l
    )
  ), p = f.getOptimisticResult(l), h = !o && e.subscribed !== !1;
  if (Oe.useSyncExternalStore(
    Oe.useCallback(
      (E) => {
        const F = h ? f.subscribe(Ot.batchCalls(E)) : Ip;
        return f.updateResult(), F;
      },
      [f, h]
    ),
    () => f.getCurrentResult(),
    () => f.getCurrentResult()
  ), Oe.useEffect(() => {
    f.setOptions(l, { listeners: !1 });
  }, [l, f]), ow(l, p))
    throw Cp(l, f, a);
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
      Cp(l, f, a)
    ) : (
      // subscribe to the "cache promise" so that we can finalize the currentThenable once data comes in
      (A = u.getQueryCache().get(l.queryHash)) == null ? void 0 : A.promise
    );
    E == null || E.catch(Ip).finally(() => {
      f.updateResult();
    });
  }
  return l.notifyOnChangeProps ? p : f.trackResult(p);
}
function hi(e, t) {
  return sw(e, ZA);
}
const cg = Ku(
  void 0
), Xr = () => {
  const e = uu(cg);
  if (!e)
    throw new Error("Must be used inside FrontendClientProvider");
  return e;
}, wR = ({
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
  return /* @__PURE__ */ ue(jA, { client: r, children: /* @__PURE__ */ ue(cg.Provider, { value: t, children: e }) });
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
}, fg = Ku(void 0), gi = () => {
  const e = uu(fg);
  if (!e)
    throw new Error("Must be used inside FormFieldContext.Provider");
  return e;
}, lw = (e) => /* @__PURE__ */ ue(eo.Option, { ...e, children: e.data.name });
function cw({ app: e }) {
  const t = Xr(), r = gi(), {
    id: u,
    prop: o,
    value: a,
    onChange: l
  } = r, {
    getProps: c,
    select: f,
    theme: p
  } = Tt(), h = {
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
      for (const X of E)
        if (D.authProvisionId === X.id) {
          D = X;
          break;
        }
    }
    return D;
  }, [
    E,
    a
  ]);
  return /* @__PURE__ */ ue("div", { ...c("controlApp", h, {
    app: e,
    ...r
  }), children: A ? `Loading ${e.name} accounts...` : E.length ? /* @__PURE__ */ ue(
    Ns,
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
  ) : /* @__PURE__ */ vr("button", { type: "button", ...c("connectButton", g, {
    app: e,
    ...r
  }), onClick: () => k(), children: [
    "Connect ",
    e.name
  ] }) });
}
function fw(e) {
  const t = gi(), {
    id: r,
    value: u,
    onChange: o,
    prop: a
  } = t, { getProps: l } = Tt(), c = {
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
    return /* @__PURE__ */ ue(
      p,
      {
        ...f,
        ...l("controlBoolean", c, t)
      }
    );
  }
  return /* @__PURE__ */ ue("input", { id: r, type: "checkbox", ...l("controlBoolean", c, t), checked: u ?? !1, onChange: (p) => o(p.target.checked) });
}
function dw(e) {
  const t = gi(), { id: r, onChange: u, prop: o, value: a } = t, { getProps: l, theme: c } = Tt(), f = {
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
    return /* @__PURE__ */ ue(
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
    /* @__PURE__ */ ue(
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
var pw = ["allowCreateWhileLoading", "createOptionPosition", "formatCreateLabel", "isValidNewOption", "getNewOptionData", "onCreateOption", "options", "onChange"], xp = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", r = arguments.length > 1 ? arguments[1] : void 0, u = arguments.length > 2 ? arguments[2] : void 0, o = String(t).toLowerCase(), a = String(u.getOptionValue(r)).toLowerCase(), l = String(u.getOptionLabel(r)).toLowerCase();
  return a === o || l === o;
}, El = {
  formatCreateLabel: function(t) {
    return 'Create "'.concat(t, '"');
  },
  isValidNewOption: function(t, r, u, o) {
    return !(!t || r.some(function(a) {
      return xp(t, a, o);
    }) || u.some(function(a) {
      return xp(t, a, o);
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
  var t = e.allowCreateWhileLoading, r = t === void 0 ? !1 : t, u = e.createOptionPosition, o = u === void 0 ? "last" : u, a = e.formatCreateLabel, l = a === void 0 ? El.formatCreateLabel : a, c = e.isValidNewOption, f = c === void 0 ? El.isValidNewOption : c, p = e.getNewOptionData, h = p === void 0 ? El.getNewOptionData : p, g = e.onCreateOption, v = e.options, b = v === void 0 ? [] : v, P = e.onChange, A = er(e, pw), E = A.getOptionValue, F = E === void 0 ? Yh : E, k = A.getOptionLabel, L = k === void 0 ? Zh : k, D = A.inputValue, X = A.isLoading, G = A.isMulti, H = A.value, z = A.name, N = Qn(function() {
    return f(D, Ps(H), b, {
      getOptionValue: F,
      getOptionLabel: L
    }) ? h(D, l(D)) : void 0;
  }, [l, h, L, F, D, f, b, H]), re = Qn(function() {
    return (r || !X) && N ? o === "first" ? [N].concat(Xi(b)) : [].concat(Xi(b), [N]) : b;
  }, [r, o, X, N, b]), J = Lt(function(j, ne) {
    if (ne.action !== "select-option")
      return P(j, ne);
    var $ = Array.isArray(j) ? j : [j];
    if ($[$.length - 1] === N) {
      if (g) g(D);
      else {
        var te = h(D, D), pe = {
          action: "create-option",
          name: z,
          option: te
        };
        P(Nu(G, [].concat(Xi(Ps(H)), [te]), te), pe);
      }
      return;
    }
    P(j, ne);
  }, [h, D, G, z, N, g, P, H]);
  return he(he({}, A), {}, {
    options: re,
    onChange: J
  });
}
var gw = /* @__PURE__ */ vh(function(e, t) {
  var r = Ah(e), u = hw(r);
  return /* @__PURE__ */ Oe.createElement(Ac, ve({
    ref: t
  }, u));
}), mw = gw;
const dg = (e) => {
  const { onChange: t } = e, {
    getProps: r,
    theme: u
  } = Tt(), o = {
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
  return /* @__PURE__ */ ue("button", { onClick: t, type: "button", ...r("loadMoreButton", o, e), children: "Load More" });
};
function pg({
  isCreatable: e,
  options: t,
  selectProps: r,
  showLoadMoreButton: u,
  onLoadMore: o,
  component: a
}) {
  const l = gi(), {
    id: c,
    prop: f,
    value: p,
    onChange: h
  } = l, {
    select: g,
    theme: v
  } = Tt(), [
    b,
    P
  ] = et(t), [
    A,
    E
  ] = et(p);
  Mn(() => {
    P(t);
  }, [
    t
  ]), Mn(() => {
    E(p);
  }, [
    p
  ]);
  const F = {
    styles: {
      container: (N) => ({
        ...N,
        gridArea: "control",
        boxShadow: v.boxShadow.input
      })
    }
  }, k = Qn(() => {
    let N = A;
    if (N != null)
      if (Array.isArray(N)) {
        if (typeof N[0] != "object") {
          const re = [];
          for (const J of N) {
            let j = {
              label: J,
              value: J
            };
            for (const ne of b)
              if (ne.value === J) {
                j = ne;
                break;
              }
            re.push(j);
          }
          N = re;
        }
      } else if (typeof N != "object")
        if ((b == null ? void 0 : b[0]) && typeof b[0] == "object") {
          for (const J of b)
            if (J.value === A) {
              N = J;
              break;
            }
        } else
          N = {
            label: A,
            value: A
          };
      else N.__lv && (N = N.__lv);
    return N;
  }, [
    A,
    b
  ]), L = ({
    // eslint-disable-next-line react/prop-types
    children: N,
    ...re
  }) => /* @__PURE__ */ vr(eo.MenuList, { ...re, children: [
    N,
    /* @__PURE__ */ ue("div", { className: "pt-4", children: /* @__PURE__ */ ue(dg, { onChange: () => o == null ? void 0 : o() }) })
  ] }), D = g.getProps("controlSelect", F);
  u && (D.components = {
    // eslint-disable-next-line react/prop-types
    ...D.components,
    MenuList: L
  });
  const X = (N) => {
    const re = ($) => typeof $ == "object" ? $ : {
      label: $,
      value: $
    }, J = re(N);
    let j = J;
    const ne = b ? [
      J,
      ...b
    ] : [
      J
    ];
    P(ne), f.type.endsWith("[]") && (Array.isArray(A) ? j = [
      ...A.map(re),
      J
    ] : j = [
      J
    ]), E(j), G(j);
  }, G = (N) => {
    if (N)
      if (Array.isArray(N))
        typeof N[0] == "object" && "value" in N[0] ? h({
          __lv: N
        }) : h(N);
      else if (typeof N == "object" && "value" in N)
        h({
          __lv: N
        });
      else
        throw new Error("unhandled option type");
    else
      h(void 0);
  };
  f.remoteOptions;
  const H = {
    inputId: c,
    instanceId: c,
    options: b,
    value: k,
    isMulti: f.type.endsWith("[]"),
    isClearable: !0,
    required: !f.optional,
    onCreateOption: X,
    onChange: G,
    baseStyles: F.styles,
    formFieldContext: l
  };
  return a ? /* @__PURE__ */ ue(
    a,
    {
      ...H,
      ...g.getProps("controlSelect", F)
    }
  ) : /* @__PURE__ */ ue(
    e ? mw : Ns,
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
      onCreateOption: X,
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
function Ap(e, t) {
  return (Iw.jsx ? vw : yw).test(e);
}
const Cw = /[ \t\n\f\r]/g;
function xw(e) {
  return typeof e == "object" ? e.type === "text" ? wp(e.value) : !1 : wp(e);
}
function wp(e) {
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
function hg(e, t) {
  const r = {}, u = {};
  let o = -1;
  for (; ++o < e.length; )
    Object.assign(r, e[o].property), Object.assign(u, e[o].normal);
  return new no(r, u, t);
}
function ac(e) {
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
const _e = mi(), At = mi(), gg = mi(), q = mi(), ut = mi(), zi = mi(), pn = mi();
function mi() {
  return 2 ** ++Aw;
}
const lc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: _e,
  booleanish: At,
  commaOrSpaceSeparated: pn,
  commaSeparated: zi,
  number: q,
  overloadedBoolean: gg,
  spaceSeparated: ut
}, Symbol.toStringTag, { value: "Module" })), Fl = Object.keys(lc);
class Rc extends Rn {
  /**
   * @constructor
   * @param {string} property
   * @param {string} attribute
   * @param {number|null} [mask]
   * @param {string} [space]
   */
  constructor(t, r, u, o) {
    let a = -1;
    if (super(t, r), Sp(this, "space", o), typeof u == "number")
      for (; ++a < Fl.length; ) {
        const l = Fl[a];
        Sp(this, Fl[a], (u & lc[l]) === lc[l]);
      }
  }
}
Rc.prototype.defined = !0;
function Sp(e, t, r) {
  r && (e[t] = r);
}
const ww = {}.hasOwnProperty;
function ou(e) {
  const t = {}, r = {};
  let u;
  for (u in e.properties)
    if (ww.call(e.properties, u)) {
      const o = e.properties[u], a = new Rc(
        u,
        e.transform(e.attributes || {}, u),
        o,
        e.space
      );
      e.mustUseProperty && e.mustUseProperty.includes(u) && (a.mustUseProperty = !0), t[u] = a, r[ac(u)] = u, r[ac(a.attribute)] = u;
    }
  return new no(t, r, e.space);
}
const mg = ou({
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
}), bg = ou({
  space: "xml",
  transform(e, t) {
    return "xml:" + t.slice(3).toLowerCase();
  },
  properties: { xmlLang: null, xmlBase: null, xmlSpace: null }
});
function yg(e, t) {
  return t in e ? e[t] : t;
}
function vg(e, t) {
  return yg(e, t.toLowerCase());
}
const Ig = ou({
  space: "xmlns",
  attributes: { xmlnsxlink: "xmlns:xlink" },
  transform: vg,
  properties: { xmlns: null, xmlnsXLink: null }
}), Cg = ou({
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
  transform: vg,
  mustUseProperty: ["checked", "multiple", "muted", "selected"],
  properties: {
    // Standard Properties.
    abbr: null,
    accept: zi,
    acceptCharset: ut,
    accessKey: ut,
    action: null,
    allow: null,
    allowFullScreen: _e,
    allowPaymentRequest: _e,
    allowUserMedia: _e,
    alt: null,
    as: null,
    async: _e,
    autoCapitalize: null,
    autoComplete: ut,
    autoFocus: _e,
    autoPlay: _e,
    blocking: ut,
    capture: null,
    charSet: null,
    checked: _e,
    cite: null,
    className: ut,
    cols: q,
    colSpan: null,
    content: null,
    contentEditable: At,
    controls: _e,
    controlsList: ut,
    coords: q | zi,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: _e,
    defer: _e,
    dir: null,
    dirName: null,
    disabled: _e,
    download: gg,
    draggable: At,
    encType: null,
    enterKeyHint: null,
    fetchPriority: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: _e,
    formTarget: null,
    headers: ut,
    height: q,
    hidden: _e,
    high: q,
    href: null,
    hrefLang: null,
    htmlFor: ut,
    httpEquiv: ut,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: _e,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: _e,
    itemId: null,
    itemProp: ut,
    itemRef: ut,
    itemScope: _e,
    itemType: ut,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: _e,
    low: q,
    manifest: null,
    max: null,
    maxLength: q,
    media: null,
    method: null,
    min: null,
    minLength: q,
    multiple: _e,
    muted: _e,
    name: null,
    nonce: null,
    noModule: _e,
    noValidate: _e,
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
    open: _e,
    optimum: q,
    pattern: null,
    ping: ut,
    placeholder: null,
    playsInline: _e,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: _e,
    referrerPolicy: null,
    rel: ut,
    required: _e,
    reversed: _e,
    rows: q,
    rowSpan: q,
    sandbox: ut,
    scope: null,
    scoped: _e,
    seamless: _e,
    selected: _e,
    shadowRootClonable: _e,
    shadowRootDelegatesFocus: _e,
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
    typeMustMatch: _e,
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
    compact: _e,
    // Lists. Use CSS to reduce space between items instead
    declare: _e,
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
    noResize: _e,
    // `<frame>`
    noHref: _e,
    // `<area>`. Use no href instead of an explicit `nohref`
    noShade: _e,
    // `<hr>`. Use background-color and height instead of borders
    noWrap: _e,
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
    disablePictureInPicture: _e,
    disableRemotePlayback: _e,
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
  transform: yg,
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
    download: _e,
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
    g1: zi,
    g2: zi,
    glyphName: zi,
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
}), Fw = /^data[-\w.:]+$/i, Ep = /-[a-z]/g, Rw = /[A-Z]/g;
function Pw(e, t) {
  const r = ac(t);
  let u = t, o = Rn;
  if (r in e.normal)
    return e.property[e.normal[r]];
  if (r.length > 4 && r.slice(0, 4) === "data" && Fw.test(t)) {
    if (t.charAt(4) === "-") {
      const a = t.slice(5).replace(Ep, Tw);
      u = "data" + a.charAt(0).toUpperCase() + a.slice(1);
    } else {
      const a = t.slice(4);
      if (!Ep.test(a)) {
        let l = a.replace(Rw, Ow);
        l.charAt(0) !== "-" && (l = "-" + l), t = "data" + l;
      }
    }
    o = Rc;
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
}, _w = hg([bg, mg, Ig, Cg, Sw], "html"), Pc = hg([bg, mg, Ig, Cg, Ew], "svg");
function Gw(e) {
  return e.join(" ").trim();
}
var Wr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Vs(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Lu = {}, Rl, Fp;
function Lw() {
  if (Fp) return Rl;
  Fp = 1;
  var e = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, t = /\n/g, r = /^\s*/, u = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, o = /^:\s*/, a = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, l = /^[;\s]*/, c = /^\s+|\s+$/g, f = `
`, p = "/", h = "*", g = "", v = "comment", b = "declaration";
  Rl = function(A, E) {
    if (typeof A != "string")
      throw new TypeError("First argument must be a string");
    if (!A) return [];
    E = E || {};
    var F = 1, k = 1;
    function L(ne) {
      var $ = ne.match(t);
      $ && (F += $.length);
      var te = ne.lastIndexOf(f);
      k = ~te ? ne.length - te : k + ne.length;
    }
    function D() {
      var ne = { line: F, column: k };
      return function($) {
        return $.position = new X(ne), z(), $;
      };
    }
    function X(ne) {
      this.start = ne, this.end = { line: F, column: k }, this.source = E.source;
    }
    X.prototype.content = A;
    function G(ne) {
      var $ = new Error(
        E.source + ":" + F + ":" + k + ": " + ne
      );
      if ($.reason = ne, $.filename = E.source, $.line = F, $.column = k, $.source = A, !E.silent) throw $;
    }
    function H(ne) {
      var $ = ne.exec(A);
      if ($) {
        var te = $[0];
        return L(te), A = A.slice(te.length), $;
      }
    }
    function z() {
      H(r);
    }
    function N(ne) {
      var $;
      for (ne = ne || []; $ = re(); )
        $ !== !1 && ne.push($);
      return ne;
    }
    function re() {
      var ne = D();
      if (!(p != A.charAt(0) || h != A.charAt(1))) {
        for (var $ = 2; g != A.charAt($) && (h != A.charAt($) || p != A.charAt($ + 1)); )
          ++$;
        if ($ += 2, g === A.charAt($ - 1))
          return G("End of comment missing");
        var te = A.slice(2, $ - 2);
        return k += 2, L(te), A = A.slice($), k += 2, ne({
          type: v,
          comment: te
        });
      }
    }
    function J() {
      var ne = D(), $ = H(u);
      if ($) {
        if (re(), !H(o)) return G("property missing ':'");
        var te = H(a), pe = ne({
          type: b,
          property: P($[0].replace(e, g)),
          value: te ? P(te[0].replace(e, g)) : g
        });
        return H(l), pe;
      }
    }
    function j() {
      var ne = [];
      N(ne);
      for (var $; $ = J(); )
        $ !== !1 && (ne.push($), N(ne));
      return ne;
    }
    return z(), j();
  };
  function P(A) {
    return A ? A.replace(c, g) : g;
  }
  return Rl;
}
var Rp;
function kw() {
  if (Rp) return Lu;
  Rp = 1;
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
const Pp = /* @__PURE__ */ Vs(Dw), Mw = Pp.default || Pp, xg = Ag("end"), Oc = Ag("start");
function Ag(e) {
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
  const t = Oc(e), r = xg(e);
  if (t && r)
    return { start: t, end: r };
}
function zu(e) {
  return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? Op(e.position) : "start" in e || "end" in e ? Op(e) : "line" in e || "column" in e ? cc(e) : "";
}
function cc(e) {
  return Tp(e && e.line) + ":" + Tp(e && e.column);
}
function Op(e) {
  return cc(e && e.start) + "-" + cc(e && e.end);
}
function Tp(e) {
  return e && typeof e == "number" ? e : 1;
}
class kt extends Error {
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
kt.prototype.file = "";
kt.prototype.name = "";
kt.prototype.reason = "";
kt.prototype.message = "";
kt.prototype.stack = "";
kt.prototype.column = void 0;
kt.prototype.line = void 0;
kt.prototype.ancestors = void 0;
kt.prototype.cause = void 0;
kt.prototype.fatal = void 0;
kt.prototype.place = void 0;
kt.prototype.ruleId = void 0;
kt.prototype.source = void 0;
const Tc = {}.hasOwnProperty, Vw = /* @__PURE__ */ new Map(), Ww = /[A-Z]/g, Xw = /-([a-z])/g, Hw = /* @__PURE__ */ new Set(["table", "tbody", "thead", "tfoot", "tr"]), zw = /* @__PURE__ */ new Set(["td", "th"]), wg = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
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
    schema: t.space === "svg" ? Pc : _w,
    stylePropertyNameCase: t.stylePropertyNameCase || "dom",
    tableCellAlignToStyle: t.tableCellAlignToStyle !== !1
  }, a = Sg(o, e, void 0);
  return a && typeof a != "string" ? a : o.create(
    e,
    o.Fragment,
    { children: a || void 0 },
    void 0
  );
}
function Sg(e, t, r) {
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
  t.tagName.toLowerCase() === "svg" && u.space === "html" && (o = Pc, e.schema = o), e.ancestors.push(t);
  const a = Fg(e, t.tagName, !1), l = eS(e, t);
  let c = _c(e, t);
  return Hw.has(t.tagName) && (c = c.filter(function(f) {
    return typeof f == "string" ? !xw(f) : !0;
  })), Eg(e, l, a, t), Bc(l, c), e.ancestors.pop(), e.schema = u, e.create(t, a, l, r);
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
  t.name === "svg" && u.space === "html" && (o = Pc, e.schema = o), e.ancestors.push(t);
  const a = t.name === null ? e.Fragment : Fg(e, t.name, !0), l = tS(e, t), c = _c(e, t);
  return Eg(e, l, a, t), Bc(l, c), e.ancestors.pop(), e.schema = u, e.create(t, a, l, r);
}
function Qw(e, t, r) {
  const u = {};
  return Bc(u, _c(e, t)), e.create(t, e.Fragment, u, r);
}
function qw(e, t) {
  return t.value;
}
function Eg(e, t, r, u) {
  typeof r != "string" && r !== e.Fragment && e.passNode && (t.node = u);
}
function Bc(e, t) {
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
    const c = Array.isArray(a.children), f = Oc(u);
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
    if (o !== "children" && Tc.call(t.properties, o)) {
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
function _c(e, t) {
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
    const c = Sg(e, a, l);
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
      ), l = new kt("Cannot parse `style` attribute", {
        ancestors: e.ancestors,
        cause: a,
        ruleId: "style",
        source: "hast-util-to-jsx-runtime"
      });
      throw l.file = e.filePath || void 0, l.url = wg + "#cannot-parse-style-attribute", l;
    }
  }
  return r;
  function u(o, a) {
    let l = o;
    l.slice(0, 2) !== "--" && (l.slice(0, 4) === "-ms-" && (l = "ms-" + l.slice(4)), l = l.replace(Xw, oS)), r[l] = a;
  }
}
function Fg(e, t, r) {
  let u;
  if (!r)
    u = { type: "Literal", value: t };
  else if (t.includes(".")) {
    const o = t.split(".");
    let a = -1, l;
    for (; ++a < o.length; ) {
      const c = Ap(o[a]) ? { type: "Identifier", name: o[a] } : { type: "Literal", value: o[a] };
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
    u = Ap(t) && !/^[a-z]/.test(t) ? { type: "Identifier", name: t } : { type: "Literal", value: t };
  if (u.type === "Literal") {
    const o = (
      /** @type {keyof JSX.IntrinsicElements} */
      u.value
    );
    return Tc.call(e.components, o) ? e.components[o] : o;
  }
  if (e.evaluater)
    return e.evaluater.evaluateExpression(u);
  Uu(e);
}
function Uu(e, t) {
  const r = new kt(
    "Cannot handle MDX estrees without `createEvaluater`",
    {
      ancestors: e.ancestors,
      place: t,
      ruleId: "mdx-estree",
      source: "hast-util-to-jsx-runtime"
    }
  );
  throw r.file = e.filePath || void 0, r.url = wg + "#cannot-handle-mdx-estrees-without-createevaluater", r;
}
function iS(e) {
  const t = {};
  let r;
  for (r in e)
    Tc.call(e, r) && (t[uS(r)] = e[r]);
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
const Pl = {
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
  return Rg(e, u, o);
}
function Rg(e, t, r) {
  if (cS(e)) {
    if ("value" in e)
      return e.type === "html" && !r ? "" : e.value;
    if (t && "alt" in e && e.alt)
      return e.alt;
    if ("children" in e)
      return Bp(e.children, t, r);
  }
  return Array.isArray(e) ? Bp(e, t, r) : "";
}
function Bp(e, t, r) {
  const u = [];
  let o = -1;
  for (; ++o < e.length; )
    u[o] = Rg(e[o], t, r);
  return u.join("");
}
function cS(e) {
  return !!(e && typeof e == "object");
}
const _p = document.createElement("i");
function Gc(e) {
  const t = "&" + e + ";";
  _p.innerHTML = t;
  const r = _p.textContent;
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
const Gp = {}.hasOwnProperty;
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
    const o = (Gp.call(e, r) ? e[r] : void 0) || (e[r] = {}), a = t[r];
    let l;
    if (a)
      for (l in a) {
        Gp.call(o, l) || (o[l] = []);
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
function Pg(e, t) {
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
function Zi(e) {
  return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const qn = Hr(/[A-Za-z]/), hn = Hr(/[\dA-Za-z]/), hS = Hr(/[#-'*+\--9=?A-Z^-~]/);
function fc(e) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    e !== null && (e < 32 || e === 127)
  );
}
const dc = Hr(/\d/), gS = Hr(/[\dA-Fa-f]/), mS = Hr(/[!-/:-@[-`{-~]/);
function Ae(e) {
  return e !== null && e < -2;
}
function nn(e) {
  return e !== null && (e < 0 || e === 32);
}
function je(e) {
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
    return je(f) ? (e.enter(r), c(f)) : t(f);
  }
  function c(f) {
    return je(f) && a++ < o ? (e.consume(f), c) : (e.exit(r), t(f));
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
    return Ae(c) ? (e.consume(c), e.exit("chunkText"), a) : (e.consume(c), l);
  }
}
const CS = {
  tokenize: xS
}, Lp = {
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
      let X = D, G;
      for (; X--; )
        if (t.events[X][0] === "exit" && t.events[X][1].type === "chunkFlow") {
          G = t.events[X][1].end;
          break;
        }
      F(u);
      let H = D;
      for (; H < t.events.length; )
        t.events[H][1].end = {
          ...G
        }, H++;
      return Kn(t.events, X + 1, 0, t.events.slice(D)), t.events.length = H, p(L);
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
    return t.containerState = {}, e.check(Lp, h, g)(L);
  }
  function h(L) {
    return o && k(), F(u), v(L);
  }
  function g(L) {
    return t.parser.lazy[t.now().line] = u !== r.length, l = t.now().offset, P(L);
  }
  function v(L) {
    return t.containerState = {}, e.attempt(Lp, b, P)(L);
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
    return Ae(L) ? (e.consume(L), E(e.exit("chunkFlow")), u = 0, t.interrupt = void 0, c) : (e.consume(L), A);
  }
  function E(L, D) {
    const X = t.sliceStream(L);
    if (D && X.push(null), L.previous = a, a && (a.next = L), a = L, o.defineSkip(L.start), o.write(X), t.parser.lazy[L.start.line]) {
      let G = o.events.length;
      for (; G--; )
        if (
          // The token starts before the line ending…
          o.events[G][1].start.offset < l && // …and either is not ended yet…
          (!o.events[G][1].end || // …or ends after it.
          o.events[G][1].end.offset > l)
        )
          return;
      const H = t.events.length;
      let z = H, N, re;
      for (; z--; )
        if (t.events[z][0] === "exit" && t.events[z][1].type === "chunkFlow") {
          if (N) {
            re = t.events[z][1].end;
            break;
          }
          N = !0;
        }
      for (F(u), G = H; G < t.events.length; )
        t.events[G][1].end = {
          ...re
        }, G++;
      Kn(t.events, z + 1, 0, t.events.slice(H)), t.events.length = G;
    }
  }
  function F(L) {
    let D = r.length;
    for (; D-- > L; ) {
      const X = r[D];
      t.containerState = X[1], X[0].exit.call(t, e);
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
function kp(e) {
  if (e === null || nn(e) || yS(e))
    return 1;
  if (bS(e))
    return 2;
}
function Lc(e, t, r) {
  const u = [];
  let o = -1;
  for (; ++o < e.length; ) {
    const a = e[o].resolveAll;
    a && !u.includes(a) && (t = a(t, r), u.push(a));
  }
  return t;
}
const pc = {
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
          Dp(g, -f), Dp(v, f), l = {
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
          }, p = [], e[u][1].end.offset - e[u][1].start.offset && (p = Fn(p, [["enter", e[u][1], t], ["exit", e[u][1], t]])), p = Fn(p, [["enter", o, t], ["enter", l, t], ["exit", l, t], ["enter", a, t]]), p = Fn(p, Lc(t.parser.constructs.insideSpan.null, e.slice(u + 1, r), t)), p = Fn(p, [["exit", a, t], ["enter", c, t], ["exit", c, t], ["exit", o, t]]), e[r][1].end.offset - e[r][1].start.offset ? (h = 2, p = Fn(p, [["enter", e[r][1], t], ["exit", e[r][1], t]])) : h = 0, Kn(e, u - 1, r - u + 3, p), r = u + p.length - h - 2;
          break;
        }
    }
  for (r = -1; ++r < e.length; )
    e[r][1].type === "attentionSequence" && (e[r][1].type = "data");
  return e;
}
function SS(e, t) {
  const r = this.parser.constructs.attentionMarkers.null, u = this.previous, o = kp(u);
  let a;
  return l;
  function l(f) {
    return a = f, e.enter("attentionSequence"), c(f);
  }
  function c(f) {
    if (f === a)
      return e.consume(f), c;
    const p = e.exit("attentionSequence"), h = kp(f), g = !h || h === 2 && o || r.includes(f), v = !o || o === 2 && h || r.includes(u);
    return p._open = !!(a === 42 ? g : g && (o || !v)), p._close = !!(a === 42 ? v : v && (h || !g)), t(f);
  }
}
function Dp(e, t) {
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
    return qn(b) ? (e.consume(b), l) : b === 64 ? r(b) : p(b);
  }
  function l(b) {
    return b === 43 || b === 45 || b === 46 || hn(b) ? (u = 1, c(b)) : p(b);
  }
  function c(b) {
    return b === 58 ? (e.consume(b), u = 0, f) : (b === 43 || b === 45 || b === 46 || hn(b)) && u++ < 32 ? (e.consume(b), c) : (u = 0, p(b));
  }
  function f(b) {
    return b === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(b), e.exit("autolinkMarker"), e.exit("autolink"), t) : b === null || b === 32 || b === 60 || fc(b) ? r(b) : (e.consume(b), f);
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
const Ws = {
  partial: !0,
  tokenize: RS
};
function RS(e, t, r) {
  return u;
  function u(a) {
    return je(a) ? ot(e, o, "linePrefix")(a) : o(a);
  }
  function o(a) {
    return a === null || Ae(a) ? t(a) : r(a);
  }
}
const Og = {
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
    return je(l) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(l), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(l));
  }
}
function OS(e, t, r) {
  const u = this;
  return o;
  function o(l) {
    return je(l) ? ot(e, a, "linePrefix", u.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(l) : a(l);
  }
  function a(l) {
    return e.attempt(Og, t, r)(l);
  }
}
function TS(e) {
  e.exit("blockQuote");
}
const Tg = {
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
const Bg = {
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
    return g === 88 || g === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(g), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), a = 6, l = gS, h) : (e.enter("characterReferenceValue"), a = 7, l = dc, h(g));
  }
  function h(g) {
    if (g === 59 && o) {
      const v = e.exit("characterReferenceValue");
      return l === hn && !Gc(u.sliceSerialize(v)) ? r(g) : (e.enter("characterReferenceMarker"), e.consume(g), e.exit("characterReferenceMarker"), e.exit("characterReference"), t);
    }
    return l(g) && o++ < a ? (e.consume(g), h) : r(g);
  }
}
const Mp = {
  partial: !0,
  tokenize: LS
}, Np = {
  concrete: !0,
  name: "codeFenced",
  tokenize: GS
};
function GS(e, t, r) {
  const u = this, o = {
    partial: !0,
    tokenize: X
  };
  let a = 0, l = 0, c;
  return f;
  function f(G) {
    return p(G);
  }
  function p(G) {
    const H = u.events[u.events.length - 1];
    return a = H && H[1].type === "linePrefix" ? H[2].sliceSerialize(H[1], !0).length : 0, c = G, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), h(G);
  }
  function h(G) {
    return G === c ? (l++, e.consume(G), h) : l < 3 ? r(G) : (e.exit("codeFencedFenceSequence"), je(G) ? ot(e, g, "whitespace")(G) : g(G));
  }
  function g(G) {
    return G === null || Ae(G) ? (e.exit("codeFencedFence"), u.interrupt ? t(G) : e.check(Mp, A, D)(G)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
      contentType: "string"
    }), v(G));
  }
  function v(G) {
    return G === null || Ae(G) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), g(G)) : je(G) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), ot(e, b, "whitespace")(G)) : G === 96 && G === c ? r(G) : (e.consume(G), v);
  }
  function b(G) {
    return G === null || Ae(G) ? g(G) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
      contentType: "string"
    }), P(G));
  }
  function P(G) {
    return G === null || Ae(G) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), g(G)) : G === 96 && G === c ? r(G) : (e.consume(G), P);
  }
  function A(G) {
    return e.attempt(o, D, E)(G);
  }
  function E(G) {
    return e.enter("lineEnding"), e.consume(G), e.exit("lineEnding"), F;
  }
  function F(G) {
    return a > 0 && je(G) ? ot(e, k, "linePrefix", a + 1)(G) : k(G);
  }
  function k(G) {
    return G === null || Ae(G) ? e.check(Mp, A, D)(G) : (e.enter("codeFlowValue"), L(G));
  }
  function L(G) {
    return G === null || Ae(G) ? (e.exit("codeFlowValue"), k(G)) : (e.consume(G), L);
  }
  function D(G) {
    return e.exit("codeFenced"), t(G);
  }
  function X(G, H, z) {
    let N = 0;
    return re;
    function re(te) {
      return G.enter("lineEnding"), G.consume(te), G.exit("lineEnding"), J;
    }
    function J(te) {
      return G.enter("codeFencedFence"), je(te) ? ot(G, j, "linePrefix", u.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(te) : j(te);
    }
    function j(te) {
      return te === c ? (G.enter("codeFencedFenceSequence"), ne(te)) : z(te);
    }
    function ne(te) {
      return te === c ? (N++, G.consume(te), ne) : N >= l ? (G.exit("codeFencedFenceSequence"), je(te) ? ot(G, $, "whitespace")(te) : $(te)) : z(te);
    }
    function $(te) {
      return te === null || Ae(te) ? (G.exit("codeFencedFence"), H(te)) : z(te);
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
const Ol = {
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
    return p === null ? f(p) : Ae(p) ? e.attempt(kS, l, f)(p) : (e.enter("codeFlowValue"), c(p));
  }
  function c(p) {
    return p === null || Ae(p) ? (e.exit("codeFlowValue"), l(p)) : (e.consume(p), c);
  }
  function f(p) {
    return e.exit("codeIndented"), t(p);
  }
}
function MS(e, t, r) {
  const u = this;
  return o;
  function o(l) {
    return u.parser.lazy[u.now().line] ? r(l) : Ae(l) ? (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), o) : ot(e, a, "linePrefix", 5)(l);
  }
  function a(l) {
    const c = u.events[u.events.length - 1];
    return c && c[1].type === "linePrefix" && c[2].sliceSerialize(c[1], !0).length >= 4 ? t(l) : Ae(l) ? o(l) : r(l);
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
    return g === null ? r(g) : g === 32 ? (e.enter("space"), e.consume(g), e.exit("space"), f) : g === 96 ? (a = e.enter("codeTextSequence"), o = 0, h(g)) : Ae(g) ? (e.enter("lineEnding"), e.consume(g), e.exit("lineEnding"), f) : (e.enter("codeTextData"), p(g));
  }
  function p(g) {
    return g === null || g === 32 || g === 96 || Ae(g) ? (e.exit("codeTextData"), f(g)) : (e.consume(g), p);
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
function _g(e) {
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
  return _g(e), e;
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
    return c === null ? a(c) : Ae(c) ? e.check(YS, l, a)(c) : (e.consume(c), o);
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
    if (l === null || Ae(l))
      return r(l);
    const c = u.events[u.events.length - 1];
    return !u.parser.constructs.disable.null.includes("codeIndented") && c && c[1].type === "linePrefix" && c[2].sliceSerialize(c[1], !0).length >= 4 ? t(l) : e.interrupt(u.parser.constructs.flow, r, t)(l);
  }
}
function Gg(e, t, r, u, o, a, l, c, f) {
  const p = f || Number.POSITIVE_INFINITY;
  let h = 0;
  return g;
  function g(F) {
    return F === 60 ? (e.enter(u), e.enter(o), e.enter(a), e.consume(F), e.exit(a), v) : F === null || F === 32 || F === 41 || fc(F) ? r(F) : (e.enter(u), e.enter(l), e.enter(c), e.enter("chunkString", {
      contentType: "string"
    }), A(F));
  }
  function v(F) {
    return F === 62 ? (e.enter(a), e.consume(F), e.exit(a), e.exit(o), e.exit(u), t) : (e.enter(c), e.enter("chunkString", {
      contentType: "string"
    }), b(F));
  }
  function b(F) {
    return F === 62 ? (e.exit("chunkString"), e.exit(c), v(F)) : F === null || F === 60 || Ae(F) ? r(F) : (e.consume(F), F === 92 ? P : b);
  }
  function P(F) {
    return F === 60 || F === 62 || F === 92 ? (e.consume(F), b) : b(F);
  }
  function A(F) {
    return !h && (F === null || F === 41 || nn(F)) ? (e.exit("chunkString"), e.exit(c), e.exit(l), e.exit(u), t(F)) : h < p && F === 40 ? (e.consume(F), h++, A) : F === 41 ? (e.consume(F), h--, A) : F === null || F === 32 || F === 40 || fc(F) ? r(F) : (e.consume(F), F === 92 ? E : A);
  }
  function E(F) {
    return F === 40 || F === 41 || F === 92 ? (e.consume(F), A) : A(F);
  }
}
function Lg(e, t, r, u, o, a) {
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
    b === 94 && !c && "_hiddenFootnoteSupport" in l.parser.constructs ? r(b) : b === 93 ? (e.exit(a), e.enter(o), e.consume(b), e.exit(o), e.exit(u), t) : Ae(b) ? (e.enter("lineEnding"), e.consume(b), e.exit("lineEnding"), h) : (e.enter("chunkString", {
      contentType: "string"
    }), g(b));
  }
  function g(b) {
    return b === null || b === 91 || b === 93 || Ae(b) || c++ > 999 ? (e.exit("chunkString"), h(b)) : (e.consume(b), f || (f = !je(b)), b === 92 ? v : g);
  }
  function v(b) {
    return b === 91 || b === 92 || b === 93 ? (e.consume(b), c++, g) : g(b);
  }
}
function kg(e, t, r, u, o, a) {
  let l;
  return c;
  function c(v) {
    return v === 34 || v === 39 || v === 40 ? (e.enter(u), e.enter(o), e.consume(v), e.exit(o), l = v === 40 ? 41 : v, f) : r(v);
  }
  function f(v) {
    return v === l ? (e.enter(o), e.consume(v), e.exit(o), e.exit(u), t) : (e.enter(a), p(v));
  }
  function p(v) {
    return v === l ? (e.exit(a), f(l)) : v === null ? r(v) : Ae(v) ? (e.enter("lineEnding"), e.consume(v), e.exit("lineEnding"), ot(e, p, "linePrefix")) : (e.enter("chunkString", {
      contentType: "string"
    }), h(v));
  }
  function h(v) {
    return v === l || v === null || Ae(v) ? (e.exit("chunkString"), p(v)) : (e.consume(v), v === 92 ? g : h);
  }
  function g(v) {
    return v === l || v === 92 ? (e.consume(v), h) : h(v);
  }
}
function Zu(e, t) {
  let r;
  return u;
  function u(o) {
    return Ae(o) ? (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), r = !0, u) : je(o) ? ot(e, u, r ? "linePrefix" : "lineSuffix")(o) : t(o);
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
    return Lg.call(
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
    return o = Zi(u.sliceSerialize(u.events[u.events.length - 1][1]).slice(1, -1)), b === 58 ? (e.enter("definitionMarker"), e.consume(b), e.exit("definitionMarker"), f) : r(b);
  }
  function f(b) {
    return nn(b) ? Zu(e, p)(b) : p(b);
  }
  function p(b) {
    return Gg(
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
    return je(b) ? ot(e, v, "whitespace")(b) : v(b);
  }
  function v(b) {
    return b === null || Ae(b) ? (e.exit("definition"), u.parser.defined.push(o), t(b)) : r(b);
  }
}
function KS(e, t, r) {
  return u;
  function u(c) {
    return nn(c) ? Zu(e, o)(c) : r(c);
  }
  function o(c) {
    return kg(e, a, r, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(c);
  }
  function a(c) {
    return je(c) ? ot(e, l, "whitespace")(c) : l(c);
  }
  function l(c) {
    return c === null || Ae(c) ? t(c) : r(c);
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
    return Ae(a) ? (e.exit("hardBreakEscape"), t(a)) : r(a);
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
    return h === 35 ? (e.enter("atxHeadingSequence"), f(h)) : h === null || Ae(h) ? (e.exit("atxHeading"), t(h)) : je(h) ? ot(e, c, "whitespace")(h) : (e.enter("atxHeadingText"), p(h));
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
], Vp = ["pre", "script", "style", "textarea"], oE = {
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
  function p(S) {
    return h(S);
  }
  function h(S) {
    return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(S), g;
  }
  function g(S) {
    return S === 33 ? (e.consume(S), v) : S === 47 ? (e.consume(S), a = !0, A) : S === 63 ? (e.consume(S), o = 3, u.interrupt ? t : w) : qn(S) ? (e.consume(S), l = String.fromCharCode(S), E) : r(S);
  }
  function v(S) {
    return S === 45 ? (e.consume(S), o = 2, b) : S === 91 ? (e.consume(S), o = 5, c = 0, P) : qn(S) ? (e.consume(S), o = 4, u.interrupt ? t : w) : r(S);
  }
  function b(S) {
    return S === 45 ? (e.consume(S), u.interrupt ? t : w) : r(S);
  }
  function P(S) {
    const Je = "CDATA[";
    return S === Je.charCodeAt(c++) ? (e.consume(S), c === Je.length ? u.interrupt ? t : j : P) : r(S);
  }
  function A(S) {
    return qn(S) ? (e.consume(S), l = String.fromCharCode(S), E) : r(S);
  }
  function E(S) {
    if (S === null || S === 47 || S === 62 || nn(S)) {
      const Je = S === 47, be = l.toLowerCase();
      return !Je && !a && Vp.includes(be) ? (o = 1, u.interrupt ? t(S) : j(S)) : uE.includes(l.toLowerCase()) ? (o = 6, Je ? (e.consume(S), F) : u.interrupt ? t(S) : j(S)) : (o = 7, u.interrupt && !u.parser.lazy[u.now().line] ? r(S) : a ? k(S) : L(S));
    }
    return S === 45 || hn(S) ? (e.consume(S), l += String.fromCharCode(S), E) : r(S);
  }
  function F(S) {
    return S === 62 ? (e.consume(S), u.interrupt ? t : j) : r(S);
  }
  function k(S) {
    return je(S) ? (e.consume(S), k) : re(S);
  }
  function L(S) {
    return S === 47 ? (e.consume(S), re) : S === 58 || S === 95 || qn(S) ? (e.consume(S), D) : je(S) ? (e.consume(S), L) : re(S);
  }
  function D(S) {
    return S === 45 || S === 46 || S === 58 || S === 95 || hn(S) ? (e.consume(S), D) : X(S);
  }
  function X(S) {
    return S === 61 ? (e.consume(S), G) : je(S) ? (e.consume(S), X) : L(S);
  }
  function G(S) {
    return S === null || S === 60 || S === 61 || S === 62 || S === 96 ? r(S) : S === 34 || S === 39 ? (e.consume(S), f = S, H) : je(S) ? (e.consume(S), G) : z(S);
  }
  function H(S) {
    return S === f ? (e.consume(S), f = null, N) : S === null || Ae(S) ? r(S) : (e.consume(S), H);
  }
  function z(S) {
    return S === null || S === 34 || S === 39 || S === 47 || S === 60 || S === 61 || S === 62 || S === 96 || nn(S) ? X(S) : (e.consume(S), z);
  }
  function N(S) {
    return S === 47 || S === 62 || je(S) ? L(S) : r(S);
  }
  function re(S) {
    return S === 62 ? (e.consume(S), J) : r(S);
  }
  function J(S) {
    return S === null || Ae(S) ? j(S) : je(S) ? (e.consume(S), J) : r(S);
  }
  function j(S) {
    return S === 45 && o === 2 ? (e.consume(S), pe) : S === 60 && o === 1 ? (e.consume(S), ee) : S === 62 && o === 4 ? (e.consume(S), ke) : S === 63 && o === 3 ? (e.consume(S), w) : S === 93 && o === 5 ? (e.consume(S), We) : Ae(S) && (o === 6 || o === 7) ? (e.exit("htmlFlowData"), e.check(sE, Ee, ne)(S)) : S === null || Ae(S) ? (e.exit("htmlFlowData"), ne(S)) : (e.consume(S), j);
  }
  function ne(S) {
    return e.check(aE, $, Ee)(S);
  }
  function $(S) {
    return e.enter("lineEnding"), e.consume(S), e.exit("lineEnding"), te;
  }
  function te(S) {
    return S === null || Ae(S) ? ne(S) : (e.enter("htmlFlowData"), j(S));
  }
  function pe(S) {
    return S === 45 ? (e.consume(S), w) : j(S);
  }
  function ee(S) {
    return S === 47 ? (e.consume(S), l = "", de) : j(S);
  }
  function de(S) {
    if (S === 62) {
      const Je = l.toLowerCase();
      return Vp.includes(Je) ? (e.consume(S), ke) : j(S);
    }
    return qn(S) && l.length < 8 ? (e.consume(S), l += String.fromCharCode(S), de) : j(S);
  }
  function We(S) {
    return S === 93 ? (e.consume(S), w) : j(S);
  }
  function w(S) {
    return S === 62 ? (e.consume(S), ke) : S === 45 && o === 2 ? (e.consume(S), w) : j(S);
  }
  function ke(S) {
    return S === null || Ae(S) ? (e.exit("htmlFlowData"), Ee(S)) : (e.consume(S), ke);
  }
  function Ee(S) {
    return e.exit("htmlFlow"), t(S);
  }
}
function fE(e, t, r) {
  const u = this;
  return o;
  function o(l) {
    return Ae(l) ? (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), a) : r(l);
  }
  function a(l) {
    return u.parser.lazy[u.now().line] ? r(l) : t(l);
  }
}
function dE(e, t, r) {
  return u;
  function u(o) {
    return e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), e.attempt(Ws, t, r);
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
  function c(w) {
    return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(w), f;
  }
  function f(w) {
    return w === 33 ? (e.consume(w), p) : w === 47 ? (e.consume(w), X) : w === 63 ? (e.consume(w), L) : qn(w) ? (e.consume(w), z) : r(w);
  }
  function p(w) {
    return w === 45 ? (e.consume(w), h) : w === 91 ? (e.consume(w), a = 0, P) : qn(w) ? (e.consume(w), k) : r(w);
  }
  function h(w) {
    return w === 45 ? (e.consume(w), b) : r(w);
  }
  function g(w) {
    return w === null ? r(w) : w === 45 ? (e.consume(w), v) : Ae(w) ? (l = g, ee(w)) : (e.consume(w), g);
  }
  function v(w) {
    return w === 45 ? (e.consume(w), b) : g(w);
  }
  function b(w) {
    return w === 62 ? pe(w) : w === 45 ? v(w) : g(w);
  }
  function P(w) {
    const ke = "CDATA[";
    return w === ke.charCodeAt(a++) ? (e.consume(w), a === ke.length ? A : P) : r(w);
  }
  function A(w) {
    return w === null ? r(w) : w === 93 ? (e.consume(w), E) : Ae(w) ? (l = A, ee(w)) : (e.consume(w), A);
  }
  function E(w) {
    return w === 93 ? (e.consume(w), F) : A(w);
  }
  function F(w) {
    return w === 62 ? pe(w) : w === 93 ? (e.consume(w), F) : A(w);
  }
  function k(w) {
    return w === null || w === 62 ? pe(w) : Ae(w) ? (l = k, ee(w)) : (e.consume(w), k);
  }
  function L(w) {
    return w === null ? r(w) : w === 63 ? (e.consume(w), D) : Ae(w) ? (l = L, ee(w)) : (e.consume(w), L);
  }
  function D(w) {
    return w === 62 ? pe(w) : L(w);
  }
  function X(w) {
    return qn(w) ? (e.consume(w), G) : r(w);
  }
  function G(w) {
    return w === 45 || hn(w) ? (e.consume(w), G) : H(w);
  }
  function H(w) {
    return Ae(w) ? (l = H, ee(w)) : je(w) ? (e.consume(w), H) : pe(w);
  }
  function z(w) {
    return w === 45 || hn(w) ? (e.consume(w), z) : w === 47 || w === 62 || nn(w) ? N(w) : r(w);
  }
  function N(w) {
    return w === 47 ? (e.consume(w), pe) : w === 58 || w === 95 || qn(w) ? (e.consume(w), re) : Ae(w) ? (l = N, ee(w)) : je(w) ? (e.consume(w), N) : pe(w);
  }
  function re(w) {
    return w === 45 || w === 46 || w === 58 || w === 95 || hn(w) ? (e.consume(w), re) : J(w);
  }
  function J(w) {
    return w === 61 ? (e.consume(w), j) : Ae(w) ? (l = J, ee(w)) : je(w) ? (e.consume(w), J) : N(w);
  }
  function j(w) {
    return w === null || w === 60 || w === 61 || w === 62 || w === 96 ? r(w) : w === 34 || w === 39 ? (e.consume(w), o = w, ne) : Ae(w) ? (l = j, ee(w)) : je(w) ? (e.consume(w), j) : (e.consume(w), $);
  }
  function ne(w) {
    return w === o ? (e.consume(w), o = void 0, te) : w === null ? r(w) : Ae(w) ? (l = ne, ee(w)) : (e.consume(w), ne);
  }
  function $(w) {
    return w === null || w === 34 || w === 39 || w === 60 || w === 61 || w === 96 ? r(w) : w === 47 || w === 62 || nn(w) ? N(w) : (e.consume(w), $);
  }
  function te(w) {
    return w === 47 || w === 62 || nn(w) ? N(w) : r(w);
  }
  function pe(w) {
    return w === 62 ? (e.consume(w), e.exit("htmlTextData"), e.exit("htmlText"), t) : r(w);
  }
  function ee(w) {
    return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(w), e.exit("lineEnding"), de;
  }
  function de(w) {
    return je(w) ? ot(e, We, "linePrefix", u.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(w) : We(w);
  }
  function We(w) {
    return e.enter("htmlTextData"), l(w);
  }
}
const kc = {
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
  return c = [["enter", f, t], ["enter", p, t]], c = Fn(c, e.slice(a + 1, a + u + 3)), c = Fn(c, [["enter", h, t]]), c = Fn(c, Lc(t.parser.constructs.insideSpan.null, e.slice(a + u + 4, l - 3), t)), c = Fn(c, [["exit", h, t], e[l - 2], e[l - 1], ["exit", p, t]]), c = Fn(c, e.slice(l + 1)), c = Fn(c, [["exit", f, t]]), Kn(e, a, e.length, c), e;
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
    return a ? a._inactive ? g(v) : (l = u.parser.defined.includes(Zi(u.sliceSerialize({
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
    return g === 41 ? h(g) : Gg(e, l, c, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(g);
  }
  function l(g) {
    return nn(g) ? Zu(e, f)(g) : h(g);
  }
  function c(g) {
    return r(g);
  }
  function f(g) {
    return g === 34 || g === 39 || g === 40 ? kg(e, p, r, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(g) : h(g);
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
    return Lg.call(u, e, a, l, "reference", "referenceMarker", "referenceString")(c);
  }
  function a(c) {
    return u.parser.defined.includes(Zi(u.sliceSerialize(u.events[u.events.length - 1][1]).slice(1, -1))) ? t(c) : r(c);
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
  resolveAll: kc.resolveAll,
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
  resolveAll: kc.resolveAll,
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
const Tl = {
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
    return p === o ? (e.enter("thematicBreakSequence"), f(p)) : u >= 3 && (p === null || Ae(p)) ? (e.exit("thematicBreak"), t(p)) : r(p);
  }
  function f(p) {
    return p === o ? (e.consume(p), u++, f) : (e.exit("thematicBreakSequence"), je(p) ? ot(e, c, "whitespace")(p) : c(p));
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
    if (P === "listUnordered" ? !u.containerState.marker || b === u.containerState.marker : dc(b)) {
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
    return dc(b) && ++l < 10 ? (e.consume(b), f) : (!u.interrupt || l < 2) && (u.containerState.marker ? b === u.containerState.marker : b === 41 || b === 46) ? (e.exit("listItemValue"), p(b)) : r(b);
  }
  function p(b) {
    return e.enter("listItemMarker"), e.consume(b), e.exit("listItemMarker"), u.containerState.marker = u.containerState.marker || b, e.check(
      Ws,
      // Can’t be empty when interrupting.
      u.interrupt ? r : h,
      e.attempt(OE, v, g)
    );
  }
  function h(b) {
    return u.containerState.initialBlankLine = !0, a++, v(b);
  }
  function g(b) {
    return je(b) ? (e.enter("listItemPrefixWhitespace"), e.consume(b), e.exit("listItemPrefixWhitespace"), v) : r(b);
  }
  function v(b) {
    return u.containerState.size = a + u.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(b);
  }
}
function _E(e, t, r) {
  const u = this;
  return u.containerState._closeFlow = void 0, e.check(Ws, o, a);
  function o(c) {
    return u.containerState.furtherBlankLines = u.containerState.furtherBlankLines || u.containerState.initialBlankLine, ot(e, t, "listItemIndent", u.containerState.size + 1)(c);
  }
  function a(c) {
    return u.containerState.furtherBlankLines || !je(c) ? (u.containerState.furtherBlankLines = void 0, u.containerState.initialBlankLine = void 0, l(c)) : (u.containerState.furtherBlankLines = void 0, u.containerState.initialBlankLine = void 0, e.attempt(TE, t, l)(c));
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
    return !je(a) && l && l[1].type === "listItemPrefixWhitespace" ? t(a) : r(a);
  }
}
const Wp = {
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
    return p === o ? (e.consume(p), c) : (e.exit("setextHeadingLineSequence"), je(p) ? ot(e, f, "lineSuffix")(p) : f(p));
  }
  function f(p) {
    return p === null || Ae(p) ? (e.exit("setextHeadingLine"), t(p)) : r(p);
  }
}
const NE = {
  tokenize: VE
};
function VE(e) {
  const t = this, r = e.attempt(
    // Try to parse a blank line.
    Ws,
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
  resolveAll: Mg()
}, XE = Dg("string"), HE = Dg("text");
function Dg(e) {
  return {
    resolveAll: Mg(e === "text" ? zE : void 0),
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
function Mg(e) {
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
  62: Og
}, YE = {
  91: QS
}, JE = {
  [-2]: Ol,
  [-1]: Ol,
  32: Ol
}, UE = {
  35: nE,
  42: xs,
  45: [Wp, xs],
  60: oE,
  61: Wp,
  95: xs,
  96: Np,
  126: Np
}, jE = {
  38: Bg,
  92: Tg
}, QE = {
  [-5]: Tl,
  [-4]: Tl,
  [-3]: Tl,
  33: wE,
  38: Bg,
  42: pc,
  60: [ES, pE],
  91: EE,
  92: [eE, Tg],
  93: kc,
  95: pc,
  96: NS
}, qE = {
  null: [pc, WE]
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
    attempt: H(X),
    check: H(G),
    consume: k,
    enter: L,
    exit: D,
    interrupt: H(G, {
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
  function g(J) {
    return l = Fn(l, J), E(), l[l.length - 1] !== null ? [] : (z(t, 0), p.events = Lc(a, p.events, p), p.events);
  }
  function v(J, j) {
    return r2(b(J), j);
  }
  function b(J) {
    return n2(l, J);
  }
  function P() {
    const {
      _bufferIndex: J,
      _index: j,
      line: ne,
      column: $,
      offset: te
    } = u;
    return {
      _bufferIndex: J,
      _index: j,
      line: ne,
      column: $,
      offset: te
    };
  }
  function A(J) {
    o[J.line] = J.column, re();
  }
  function E() {
    let J;
    for (; u._index < l.length; ) {
      const j = l[u._index];
      if (typeof j == "string")
        for (J = u._index, u._bufferIndex < 0 && (u._bufferIndex = 0); u._index === J && u._bufferIndex < j.length; )
          F(j.charCodeAt(u._bufferIndex));
      else
        F(j);
    }
  }
  function F(J) {
    h = h(J);
  }
  function k(J) {
    Ae(J) ? (u.line++, u.column = 1, u.offset += J === -3 ? 2 : 1, re()) : J !== -1 && (u.column++, u.offset++), u._bufferIndex < 0 ? u._index++ : (u._bufferIndex++, u._bufferIndex === // Points w/ non-negative `_bufferIndex` reference
    // strings.
    /** @type {string} */
    l[u._index].length && (u._bufferIndex = -1, u._index++)), p.previous = J;
  }
  function L(J, j) {
    const ne = j || {};
    return ne.type = J, ne.start = P(), p.events.push(["enter", ne, p]), c.push(ne), ne;
  }
  function D(J) {
    const j = c.pop();
    return j.end = P(), p.events.push(["exit", j, p]), j;
  }
  function X(J, j) {
    z(J, j.from);
  }
  function G(J, j) {
    j.restore();
  }
  function H(J, j) {
    return ne;
    function ne($, te, pe) {
      let ee, de, We, w;
      return Array.isArray($) ? (
        /* c8 ignore next 1 */
        Ee($)
      ) : "tokenize" in $ ? (
        // Looks like a construct.
        Ee([
          /** @type {Construct} */
          $
        ])
      ) : ke($);
      function ke(De) {
        return yt;
        function yt(Ne) {
          const ft = Ne !== null && De[Ne], Dt = Ne !== null && De.null, se = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(ft) ? ft : ft ? [ft] : [],
            ...Array.isArray(Dt) ? Dt : Dt ? [Dt] : []
          ];
          return Ee(se)(Ne);
        }
      }
      function Ee(De) {
        return ee = De, de = 0, De.length === 0 ? pe : S(De[de]);
      }
      function S(De) {
        return yt;
        function yt(Ne) {
          return w = N(), We = De, De.partial || (p.currentConstruct = De), De.name && p.parser.constructs.disable.null.includes(De.name) ? be() : De.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            j ? Object.assign(Object.create(p), j) : p,
            f,
            Je,
            be
          )(Ne);
        }
      }
      function Je(De) {
        return J(We, w), te;
      }
      function be(De) {
        return w.restore(), ++de < ee.length ? S(ee[de]) : pe;
      }
    }
  }
  function z(J, j) {
    J.resolveAll && !a.includes(J) && a.push(J), J.resolve && Kn(p.events, j, p.events.length - j, J.resolve(p.events.slice(j), p)), J.resolveTo && (p.events = J.resolveTo(p.events, p));
  }
  function N() {
    const J = P(), j = p.previous, ne = p.currentConstruct, $ = p.events.length, te = Array.from(c);
    return {
      from: $,
      restore: pe
    };
    function pe() {
      u = J, p.previous = j, p.currentConstruct = ne, p.events.length = $, c = te, re();
    }
  }
  function re() {
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
  for (; !_g(e); )
    ;
  return e;
}
const Xp = /[\0\t\n\r]/g;
function o2() {
  let e = 1, t = "", r = !0, u;
  return o;
  function o(a, l, c) {
    const f = [];
    let p, h, g, v, b;
    for (a = t + (typeof a == "string" ? a.toString() : new TextDecoder(l || void 0).decode(a)), g = 0, t = "", r && (a.charCodeAt(0) === 65279 && g++, r = void 0); g < a.length; ) {
      if (Xp.lastIndex = g, p = Xp.exec(a), v = p && p.index !== void 0 ? p.index : a.length, b = a.charCodeAt(v), !p) {
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
    return Pg(r.slice(a ? 2 : 1), a ? 16 : 10);
  }
  return Gc(r) || e;
}
const Ng = {}.hasOwnProperty;
function c2(e, t, r) {
  return typeof t != "string" && (r = t, t = void 0), f2(r)(u2(i2(r).document().write(o2()(e, t, !0))));
}
function f2(e) {
  const t = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: a(yi),
      autolinkProtocol: N,
      autolinkEmail: N,
      atxHeading: a(vt),
      blockQuote: a(Dt),
      characterEscape: N,
      characterReference: N,
      codeFenced: a(se),
      codeFencedFenceInfo: l,
      codeFencedFenceMeta: l,
      codeIndented: a(se, l),
      codeText: a(ce, l),
      codeTextData: N,
      data: N,
      codeFlowValue: N,
      definition: a(we),
      definitionDestinationString: l,
      definitionLabelString: l,
      definitionTitleString: l,
      emphasis: a(Fe),
      hardBreakEscape: a(rn),
      hardBreakTrailing: a(rn),
      htmlFlow: a(Yt, l),
      htmlFlowData: N,
      htmlText: a(Yt, l),
      htmlTextData: N,
      image: a(bi),
      label: l,
      link: a(yi),
      listItem: a(Mt),
      listItemValue: v,
      listOrdered: a(Nn, g),
      listUnordered: a(Nn),
      paragraph: a(tr),
      reference: S,
      referenceString: l,
      resourceDestinationString: l,
      resourceTitleString: l,
      setextHeading: a(vt),
      strong: a(Cr),
      thematicBreak: a(nr)
    },
    exit: {
      atxHeading: f(),
      atxHeadingSequence: X,
      autolink: f(),
      autolinkEmail: ft,
      autolinkProtocol: Ne,
      blockQuote: f(),
      characterEscapeValue: re,
      characterReferenceMarkerHexadecimal: be,
      characterReferenceMarkerNumeric: be,
      characterReferenceValue: De,
      characterReference: yt,
      codeFenced: f(E),
      codeFencedFence: A,
      codeFencedFenceInfo: b,
      codeFencedFenceMeta: P,
      codeFlowValue: re,
      codeIndented: f(F),
      codeText: f(te),
      codeTextData: re,
      data: re,
      definition: f(),
      definitionDestinationString: D,
      definitionLabelString: k,
      definitionTitleString: L,
      emphasis: f(),
      hardBreakEscape: f(j),
      hardBreakTrailing: f(j),
      htmlFlow: f(ne),
      htmlFlowData: re,
      htmlText: f($),
      htmlTextData: re,
      image: f(ee),
      label: We,
      labelText: de,
      lineEnding: J,
      link: f(pe),
      listItem: f(),
      listOrdered: f(),
      listUnordered: f(),
      paragraph: f(),
      referenceString: Je,
      resourceDestinationString: w,
      resourceTitleString: ke,
      resource: Ee,
      setextHeading: f(z),
      setextHeadingLineSequence: H,
      setextHeadingText: G,
      strong: f(),
      thematicBreak: f()
    }
  };
  Vg(t, (e || {}).mdastExtensions || []);
  const r = {};
  return u;
  function u(W) {
    let K = {
      type: "root",
      children: []
    };
    const ge = {
      stack: [K],
      tokenStack: [],
      config: t,
      enter: c,
      exit: p,
      buffer: l,
      resume: h,
      data: r
    }, Te = [];
    let Be = -1;
    for (; ++Be < W.length; )
      if (W[Be][1].type === "listOrdered" || W[Be][1].type === "listUnordered")
        if (W[Be][0] === "enter")
          Te.push(Be);
        else {
          const Et = Te.pop();
          Be = o(W, Et, Be);
        }
    for (Be = -1; ++Be < W.length; ) {
      const Et = t[W[Be][0]];
      Ng.call(Et, W[Be][1].type) && Et[W[Be][1].type].call(Object.assign({
        sliceSerialize: W[Be][2].sliceSerialize
      }, ge), W[Be][1]);
    }
    if (ge.tokenStack.length > 0) {
      const Et = ge.tokenStack[ge.tokenStack.length - 1];
      (Et[1] || Hp).call(ge, void 0, Et[0]);
    }
    for (K.position = {
      start: Br(W.length > 0 ? W[0][1].start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: Br(W.length > 0 ? W[W.length - 2][1].end : {
        line: 1,
        column: 1,
        offset: 0
      })
    }, Be = -1; ++Be < t.transforms.length; )
      K = t.transforms[Be](K) || K;
    return K;
  }
  function o(W, K, ge) {
    let Te = K - 1, Be = -1, Et = !1, Jt, Nt, gn, Ut;
    for (; ++Te <= ge; ) {
      const It = W[Te];
      switch (It[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          It[0] === "enter" ? Be++ : Be--, Ut = void 0;
          break;
        }
        case "lineEndingBlank": {
          It[0] === "enter" && (Jt && !Ut && !Be && !gn && (gn = Te), Ut = void 0);
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
      if (!Be && It[0] === "enter" && It[1].type === "listItemPrefix" || Be === -1 && It[0] === "exit" && (It[1].type === "listUnordered" || It[1].type === "listOrdered")) {
        if (Jt) {
          let un = Te;
          for (Nt = void 0; un--; ) {
            const on = W[un];
            if (on[1].type === "lineEnding" || on[1].type === "lineEndingBlank") {
              if (on[0] === "exit") continue;
              Nt && (W[Nt][1].type = "lineEndingBlank", Et = !0), on[1].type = "lineEnding", Nt = un;
            } else if (!(on[1].type === "linePrefix" || on[1].type === "blockQuotePrefix" || on[1].type === "blockQuotePrefixWhitespace" || on[1].type === "blockQuoteMarker" || on[1].type === "listItemIndent")) break;
          }
          gn && (!Nt || gn < Nt) && (Jt._spread = !0), Jt.end = Object.assign({}, Nt ? W[Nt][1].start : It[1].end), W.splice(Nt || Te, 0, ["exit", Jt, It[2]]), Te++, ge++;
        }
        if (It[1].type === "listItemPrefix") {
          const un = {
            type: "listItem",
            _spread: !1,
            start: Object.assign({}, It[1].start),
            // @ts-expect-error: we’ll add `end` in a second.
            end: void 0
          };
          Jt = un, W.splice(Te, 0, ["enter", un, It[2]]), Te++, ge++, gn = void 0, Ut = !0;
        }
      }
    }
    return W[K][1]._spread = Et, ge;
  }
  function a(W, K) {
    return ge;
    function ge(Te) {
      c.call(this, W(Te), Te), K && K.call(this, Te);
    }
  }
  function l() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function c(W, K, ge) {
    this.stack[this.stack.length - 1].children.push(W), this.stack.push(W), this.tokenStack.push([K, ge || void 0]), W.position = {
      start: Br(K.start),
      // @ts-expect-error: `end` will be patched later.
      end: void 0
    };
  }
  function f(W) {
    return K;
    function K(ge) {
      W && W.call(this, ge), p.call(this, ge);
    }
  }
  function p(W, K) {
    const ge = this.stack.pop(), Te = this.tokenStack.pop();
    if (Te)
      Te[0].type !== W.type && (K ? K.call(this, W, Te[0]) : (Te[1] || Hp).call(this, W, Te[0]));
    else throw new Error("Cannot close `" + W.type + "` (" + zu({
      start: W.start,
      end: W.end
    }) + "): it’s not open");
    ge.position.end = Br(W.end);
  }
  function h() {
    return lS(this.stack.pop());
  }
  function g() {
    this.data.expectingFirstListItemValue = !0;
  }
  function v(W) {
    if (this.data.expectingFirstListItemValue) {
      const K = this.stack[this.stack.length - 2];
      K.start = Number.parseInt(this.sliceSerialize(W), 10), this.data.expectingFirstListItemValue = void 0;
    }
  }
  function b() {
    const W = this.resume(), K = this.stack[this.stack.length - 1];
    K.lang = W;
  }
  function P() {
    const W = this.resume(), K = this.stack[this.stack.length - 1];
    K.meta = W;
  }
  function A() {
    this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
  }
  function E() {
    const W = this.resume(), K = this.stack[this.stack.length - 1];
    K.value = W.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
  }
  function F() {
    const W = this.resume(), K = this.stack[this.stack.length - 1];
    K.value = W.replace(/(\r?\n|\r)$/g, "");
  }
  function k(W) {
    const K = this.resume(), ge = this.stack[this.stack.length - 1];
    ge.label = K, ge.identifier = Zi(this.sliceSerialize(W)).toLowerCase();
  }
  function L() {
    const W = this.resume(), K = this.stack[this.stack.length - 1];
    K.title = W;
  }
  function D() {
    const W = this.resume(), K = this.stack[this.stack.length - 1];
    K.url = W;
  }
  function X(W) {
    const K = this.stack[this.stack.length - 1];
    if (!K.depth) {
      const ge = this.sliceSerialize(W).length;
      K.depth = ge;
    }
  }
  function G() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function H(W) {
    const K = this.stack[this.stack.length - 1];
    K.depth = this.sliceSerialize(W).codePointAt(0) === 61 ? 1 : 2;
  }
  function z() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function N(W) {
    const ge = this.stack[this.stack.length - 1].children;
    let Te = ge[ge.length - 1];
    (!Te || Te.type !== "text") && (Te = au(), Te.position = {
      start: Br(W.start),
      // @ts-expect-error: we’ll add `end` later.
      end: void 0
    }, ge.push(Te)), this.stack.push(Te);
  }
  function re(W) {
    const K = this.stack.pop();
    K.value += this.sliceSerialize(W), K.position.end = Br(W.end);
  }
  function J(W) {
    const K = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const ge = K.children[K.children.length - 1];
      ge.position.end = Br(W.end), this.data.atHardBreak = void 0;
      return;
    }
    !this.data.setextHeadingSlurpLineEnding && t.canContainEols.includes(K.type) && (N.call(this, W), re.call(this, W));
  }
  function j() {
    this.data.atHardBreak = !0;
  }
  function ne() {
    const W = this.resume(), K = this.stack[this.stack.length - 1];
    K.value = W;
  }
  function $() {
    const W = this.resume(), K = this.stack[this.stack.length - 1];
    K.value = W;
  }
  function te() {
    const W = this.resume(), K = this.stack[this.stack.length - 1];
    K.value = W;
  }
  function pe() {
    const W = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const K = this.data.referenceType || "shortcut";
      W.type += "Reference", W.referenceType = K, delete W.url, delete W.title;
    } else
      delete W.identifier, delete W.label;
    this.data.referenceType = void 0;
  }
  function ee() {
    const W = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const K = this.data.referenceType || "shortcut";
      W.type += "Reference", W.referenceType = K, delete W.url, delete W.title;
    } else
      delete W.identifier, delete W.label;
    this.data.referenceType = void 0;
  }
  function de(W) {
    const K = this.sliceSerialize(W), ge = this.stack[this.stack.length - 2];
    ge.label = a2(K), ge.identifier = Zi(K).toLowerCase();
  }
  function We() {
    const W = this.stack[this.stack.length - 1], K = this.resume(), ge = this.stack[this.stack.length - 1];
    if (this.data.inReference = !0, ge.type === "link") {
      const Te = W.children;
      ge.children = Te;
    } else
      ge.alt = K;
  }
  function w() {
    const W = this.resume(), K = this.stack[this.stack.length - 1];
    K.url = W;
  }
  function ke() {
    const W = this.resume(), K = this.stack[this.stack.length - 1];
    K.title = W;
  }
  function Ee() {
    this.data.inReference = void 0;
  }
  function S() {
    this.data.referenceType = "collapsed";
  }
  function Je(W) {
    const K = this.resume(), ge = this.stack[this.stack.length - 1];
    ge.label = K, ge.identifier = Zi(this.sliceSerialize(W)).toLowerCase(), this.data.referenceType = "full";
  }
  function be(W) {
    this.data.characterReferenceType = W.type;
  }
  function De(W) {
    const K = this.sliceSerialize(W), ge = this.data.characterReferenceType;
    let Te;
    ge ? (Te = Pg(K, ge === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : Te = Gc(K);
    const Be = this.stack[this.stack.length - 1];
    Be.value += Te;
  }
  function yt(W) {
    const K = this.stack.pop();
    K.position.end = Br(W.end);
  }
  function Ne(W) {
    re.call(this, W);
    const K = this.stack[this.stack.length - 1];
    K.url = this.sliceSerialize(W);
  }
  function ft(W) {
    re.call(this, W);
    const K = this.stack[this.stack.length - 1];
    K.url = "mailto:" + this.sliceSerialize(W);
  }
  function Dt() {
    return {
      type: "blockquote",
      children: []
    };
  }
  function se() {
    return {
      type: "code",
      lang: null,
      meta: null,
      value: ""
    };
  }
  function ce() {
    return {
      type: "inlineCode",
      value: ""
    };
  }
  function we() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: ""
    };
  }
  function Fe() {
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
  function bi() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null
    };
  }
  function yi() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function Nn(W) {
    return {
      type: "list",
      ordered: W.type === "listOrdered",
      start: null,
      spread: W._spread,
      children: []
    };
  }
  function Mt(W) {
    return {
      type: "listItem",
      spread: W._spread,
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
function Vg(e, t) {
  let r = -1;
  for (; ++r < t.length; ) {
    const u = t[r];
    Array.isArray(u) ? Vg(e, u) : d2(e, u);
  }
}
function d2(e, t) {
  let r;
  for (r in t)
    if (Ng.call(t, r))
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
function Hp(e, t) {
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
function Wg(e, t) {
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
    return Wg(e, t);
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
    return Wg(e, t);
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
  const u = e.all(t), o = r ? R2(r) : Xg(t), a = {}, l = [];
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
      t = Xg(r[u]);
  }
  return t;
}
function Xg(e) {
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
    }, c = Oc(t.children[1]), f = xg(t.children[t.children.length - 1]);
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
const zp = 9, Zp = 32;
function k2(e) {
  const t = String(e), r = /\r?\n|\r/g;
  let u = r.exec(t), o = 0;
  const a = [];
  for (; u; )
    a.push(
      Yp(t.slice(o, u.index), o > 0, !0),
      u[0]
    ), o = u.index + u[0].length, u = r.exec(t);
  return a.push(Yp(t.slice(o), o > 0, !1)), a.join("");
}
function Yp(e, t, r) {
  let u = 0, o = e.length;
  if (t) {
    let a = e.codePointAt(u);
    for (; a === zp || a === Zp; )
      u++, a = e.codePointAt(u);
  }
  if (r) {
    let a = e.codePointAt(o - 1);
    for (; a === zp || a === Zp; )
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
const Hg = -1, Xs = 0, Gs = 1, Ls = 2, Dc = 3, Mc = 4, Nc = 5, Vc = 6, zg = 7, Zg = 8, Jp = typeof self == "object" ? self : globalThis, V2 = (e, t) => {
  const r = (o, a) => (e.set(a, o), o), u = (o) => {
    if (e.has(o))
      return e.get(o);
    const [a, l] = t[o];
    switch (a) {
      case Xs:
      case Hg:
        return r(l, o);
      case Gs: {
        const c = r([], o);
        for (const f of l)
          c.push(u(f));
        return c;
      }
      case Ls: {
        const c = r({}, o);
        for (const [f, p] of l)
          c[u(f)] = u(p);
        return c;
      }
      case Dc:
        return r(new Date(l), o);
      case Mc: {
        const { source: c, flags: f } = l;
        return r(new RegExp(c, f), o);
      }
      case Nc: {
        const c = r(/* @__PURE__ */ new Map(), o);
        for (const [f, p] of l)
          c.set(u(f), u(p));
        return c;
      }
      case Vc: {
        const c = r(/* @__PURE__ */ new Set(), o);
        for (const f of l)
          c.add(u(f));
        return c;
      }
      case zg: {
        const { name: c, message: f } = l;
        return r(new Jp[c](f), o);
      }
      case Zg:
        return r(BigInt(l), o);
      case "BigInt":
        return r(Object(BigInt(l)), o);
    }
    return r(new Jp[a](l), o);
  };
  return u;
}, Up = (e) => V2(/* @__PURE__ */ new Map(), e)(0), Wi = "", { toString: W2 } = {}, { keys: X2 } = Object, Du = (e) => {
  const t = typeof e;
  if (t !== "object" || !e)
    return [Xs, t];
  const r = W2.call(e).slice(8, -1);
  switch (r) {
    case "Array":
      return [Gs, Wi];
    case "Object":
      return [Ls, Wi];
    case "Date":
      return [Dc, Wi];
    case "RegExp":
      return [Mc, Wi];
    case "Map":
      return [Nc, Wi];
    case "Set":
      return [Vc, Wi];
  }
  return r.includes("Array") ? [Gs, r] : r.includes("Error") ? [zg, r] : [Ls, r];
}, vs = ([e, t]) => e === Xs && (t === "function" || t === "symbol"), H2 = (e, t, r, u) => {
  const o = (l, c) => {
    const f = u.push(l) - 1;
    return r.set(c, f), f;
  }, a = (l) => {
    if (r.has(l))
      return r.get(l);
    let [c, f] = Du(l);
    switch (c) {
      case Xs: {
        let h = l;
        switch (f) {
          case "bigint":
            c = Zg, h = l.toString();
            break;
          case "function":
          case "symbol":
            if (e)
              throw new TypeError("unable to serialize " + f);
            h = null;
            break;
          case "undefined":
            return o([Hg], l);
        }
        return o([c, h], l);
      }
      case Gs: {
        if (f)
          return o([f, [...l]], l);
        const h = [], g = o([c, h], l);
        for (const v of l)
          h.push(a(v));
        return g;
      }
      case Ls: {
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
      case Dc:
        return o([c, l.toISOString()], l);
      case Mc: {
        const { source: h, flags: g } = l;
        return o([c, { source: h, flags: g }], l);
      }
      case Nc: {
        const h = [], g = o([c, h], l);
        for (const [v, b] of l)
          (e || !(vs(Du(v)) || vs(Du(b)))) && h.push([a(v), a(b)]);
        return g;
      }
      case Vc: {
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
}, jp = (e, { json: t, lossy: r } = {}) => {
  const u = [];
  return H2(!(t || r), !!t, /* @__PURE__ */ new Map(), u)(e), u;
}, ks = typeof structuredClone == "function" ? (
  /* c8 ignore start */
  (e, t) => t && ("json" in t || "lossy" in t) ? Up(jp(e, t)) : structuredClone(e)
) : (e, t) => Up(jp(e, t));
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
            ...ks(l),
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
const Yg = (
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
      return Hs(e);
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
    t[r] = Yg(e[r]);
  return Hs(u);
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
  return Hs(r);
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
  return Hs(t);
  function t(r) {
    return r && r.type === e;
  }
}
function Hs(e) {
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
const Jg = [], $2 = !0, Qp = !1, K2 = "skip";
function eF(e, t, r, u) {
  let o;
  typeof t == "function" && typeof r != "function" ? (u = r, r = t) : o = t;
  const a = Yg(o), l = u ? -1 : 1;
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
      let b = Jg, P, A, E;
      if ((!t || a(f, p, h[h.length - 1] || void 0)) && (b = tF(r(f, h)), b[0] === Qp))
        return b;
      if ("children" in f && f.children) {
        const F = (
          /** @type {UnistParent} */
          f
        );
        if (F.children && b[0] !== K2)
          for (A = (u ? F.children.length : -1) + l, E = h.concat(F); A > -1 && A < F.children.length; ) {
            const k = F.children[A];
            if (P = c(k, A, E)(), P[0] === Qp)
              return P;
            A = typeof P[1] == "number" ? P[1] : A + l;
          }
      }
      return b;
    }
  }
}
function tF(e) {
  return Array.isArray(e) ? e : typeof e == "number" ? [$2, e] : e == null ? Jg : [e];
}
function Ug(e, t, r, u) {
  let o, a, l;
  typeof t == "function" ? (a = void 0, l = t, o = r) : (a = t, l = r, o = u), eF(e, a, c, o);
  function c(f, p) {
    const h = p[p.length - 1], g = h ? h.children.indexOf(f) : void 0;
    return l(f, g, h);
  }
}
const hc = {}.hasOwnProperty, nF = {};
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
  return Ug(e, function(h) {
    if (h.type === "definition" || h.type === "footnoteDefinition") {
      const g = h.type === "definition" ? u : o, v = String(h.identifier).toUpperCase();
      g.has(v) || g.set(v, h);
    }
  }), c;
  function f(h, g) {
    const v = h.type, b = c.handlers[v];
    if (hc.call(c.handlers, v) && b)
      return b(c, h, g);
    if (c.options.passThrough && c.options.passThrough.includes(v)) {
      if ("children" in h) {
        const { children: A, ...E } = h, F = ks(E);
        return F.children = c.all(h), F;
      }
      return ks(h);
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
          if (b && v[b - 1].type === "break" && (!Array.isArray(P) && P.type === "text" && (P.value = qp(P.value)), !Array.isArray(P) && P.type === "element")) {
            const A = P.children[0];
            A && A.type === "text" && (A.value = qp(A.value));
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
    r.type === "element" && a && Object.assign(r.properties, ks(a)), "children" in r && r.children && o !== null && o !== void 0 && (r.children = o);
  }
  return r;
}
function oF(e, t) {
  const r = t.data || {}, u = "value" in t && !(hc.call(r, "hProperties") || hc.call(r, "hChildren")) ? { type: "text", value: t.value } : {
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
function qp(e) {
  let t = 0, r = e.charCodeAt(t);
  for (; r === 9 || r === 32; )
    t++, r = e.charCodeAt(t);
  return e.slice(t);
}
function $p(e, t) {
  const r = rF(e, t), u = r.one(e, void 0), o = Y2(r), a = Array.isArray(u) ? { type: "root", children: u } : u || { type: "root", children: [] };
  return o && a.children.push({ type: "text", value: `
` }, o), a;
}
function aF(e, t) {
  return e && "run" in e ? async function(r, u) {
    const o = (
      /** @type {HastRoot} */
      $p(r, { file: u, ...t })
    );
    await e.run(o, u);
  } : function(r, u) {
    return (
      /** @type {HastRoot} */
      $p(r, { file: u, ...e || t })
    );
  };
}
function Kp(e) {
  if (e)
    throw e;
}
var Bl, eh;
function lF() {
  if (eh) return Bl;
  eh = 1;
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
  return Bl = function f() {
    var p, h, g, v, b, P, A = arguments[0], E = 1, F = arguments.length, k = !1;
    for (typeof A == "boolean" && (k = A, A = arguments[1] || {}, E = 2), (A == null || typeof A != "object" && typeof A != "function") && (A = {}); E < F; ++E)
      if (p = arguments[E], p != null)
        for (h in p)
          g = c(A, h), v = c(p, h), A !== v && (k && v && (a(v) || (b = o(v))) ? (b ? (b = !1, P = g && o(g) ? g : []) : P = g && a(g) ? g : {}, l(A, { name: h, newValue: f(k, P, v) })) : typeof v < "u" && l(A, { name: h, newValue: v }));
    return A;
  }, Bl;
}
var cF = lF();
const _l = /* @__PURE__ */ Vs(cF);
function gc(e) {
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
function mc(e) {
  return !!(e !== null && typeof e == "object" && "href" in e && e.href && "protocol" in e && e.protocol && // @ts-expect-error: indexing is fine.
  e.auth === void 0);
}
function CF(e) {
  if (typeof e == "string")
    e = new URL(e);
  else if (!mc(e)) {
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
const Gl = (
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
class jg {
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
    t ? mc(t) ? r = { path: t } : typeof t == "string" || AF(t) ? r = { value: t } : r = t : r = {}, this.cwd = "cwd" in r ? "" : vF.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
    let u = -1;
    for (; ++u < Gl.length; ) {
      const a = Gl[u];
      a in r && r[a] !== void 0 && r[a] !== null && (this[a] = a === "history" ? [...r[a]] : r[a]);
    }
    let o;
    for (o in r)
      Gl.includes(o) || (this[o] = r[o]);
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
    kl(t, "basename"), Ll(t, "basename"), this.path = Zn.join(this.dirname || "", t);
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
    th(this.basename, "dirname"), this.path = Zn.join(t || "", this.basename);
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
    if (Ll(t, "extname"), th(this.dirname, "extname"), t) {
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
    mc(t) && (t = CF(t)), kl(t, "path"), this.path !== t && this.history.push(t);
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
    kl(t, "stem"), Ll(t, "stem"), this.path = Zn.join(this.dirname || "", t + (this.extname || ""));
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
    const o = new kt(
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
function Ll(e, t) {
  if (e && e.includes(Zn.sep))
    throw new Error(
      "`" + t + "` cannot be a path: did not expect `" + Zn.sep + "`"
    );
}
function kl(e, t) {
  if (!e)
    throw new Error("`" + t + "` cannot be empty");
}
function th(e, t) {
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
class Wc extends wF {
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
      new Wc()
    );
    let r = -1;
    for (; ++r < this.attachers.length; ) {
      const u = this.attachers[r];
      t.use(...u);
    }
    return t.data(_l(!0, {}, this.namespace)), t;
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
    return typeof t == "string" ? arguments.length === 2 ? (Nl("data", this.frozen), this.namespace[t] = r, this) : SF.call(this.namespace, t) && this.namespace[t] || void 0 : t ? (Nl("data", this.frozen), this.namespace = t, this) : this.namespace;
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
    return Dl("parse", u), u(String(r), r);
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
    return this.freeze(), Dl("process", this.parser || this.Parser), Ml("process", this.compiler || this.Compiler), r ? o(void 0, r) : new Promise(o);
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
    return this.freeze(), Dl("processSync", this.parser || this.Parser), Ml("processSync", this.compiler || this.Compiler), this.process(t, o), rh("processSync", "process", r), u;
    function o(a, l) {
      r = !0, Kp(a), u = l;
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
    nh(t), this.freeze();
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
    return this.run(t, r, a), rh("runSync", "run", u), o;
    function a(l, c) {
      Kp(l), o = c, u = !0;
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
    return Ml("stringify", o), nh(t), o(t, u);
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
    if (Nl("use", this.frozen), t != null) if (typeof t == "function")
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
      c(p.plugins), p.settings && (o.settings = _l(!0, o.settings, p.settings));
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
        gc(A) && gc(b) && (b = _l(!0, A, b)), u[v] = [p, b, ...P];
      }
    }
  }
}
const EF = new Wc().freeze();
function Dl(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `parser`");
}
function Ml(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `compiler`");
}
function Nl(e, t) {
  if (t)
    throw new Error(
      "Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function nh(e) {
  if (!gc(e) || typeof e.type != "string")
    throw new TypeError("Expected node, got `" + e + "`");
}
function rh(e, t, r) {
  if (!r)
    throw new Error(
      "`" + e + "` finished async. Use `" + t + "` instead"
    );
}
function Is(e) {
  return FF(e) ? e : new jg(e);
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
const OF = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", ih = [], uh = { allowDangerousHtml: !0 }, TF = /^(https?|ircs?|mailto|xmpp)$/i, BF = [
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
  const t = e.allowedElements, r = e.allowElement, u = e.children || "", o = e.className, a = e.components, l = e.disallowedElements, c = e.rehypePlugins || ih, f = e.remarkPlugins || ih, p = e.remarkRehypeOptions ? { ...e.remarkRehypeOptions, ...uh } : uh, h = e.skipHtml, g = e.unwrapDisallowed, v = e.urlTransform || GF, b = EF().use(p2).use(f).use(aF, p).use(c), P = new jg();
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
  }), Ug(E, F), Zw(E, {
    Fragment: As,
    // @ts-expect-error
    // React components are allowed to return numbers,
    // but not according to the types in hast-util-to-jsx-runtime
    components: a,
    ignoreInvalidStyle: !0,
    jsx: ue,
    jsxs: vr,
    passKeys: !0,
    passNode: !0
  });
  function F(k, L, D) {
    if (k.type === "raw" && D && typeof L == "number")
      return h ? D.children.splice(L, 1) : D.children[L] = { type: "text", value: k.value }, L;
    if (k.type === "element") {
      let X;
      for (X in Pl)
        if (Object.hasOwn(Pl, X) && Object.hasOwn(k.properties, X)) {
          const G = k.properties[X], H = Pl[X];
          (H === null || H.includes(k.tagName)) && (k.properties[X] = v(String(G || ""), X, k));
        }
    }
    if (k.type === "element") {
      let X = t ? !t.includes(k.tagName) : l ? l.includes(k.tagName) : !1;
      if (!X && r && typeof L == "number" && (X = !r(k, L, D)), X && D && typeof L == "number")
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
  } = Tt(), c = {
    color: l.colors.neutral50,
    fontWeight: 400,
    fontSize: "0.75rem",
    gridArea: "description",
    textWrap: "balance",
    lineHeight: "1.5"
  };
  return u.type === "app" ? /* @__PURE__ */ ue("p", { className: o("description", e), style: a("description", c, e), children: "Credentials are encrypted." }) : u.description ? /* @__PURE__ */ ue("div", { className: o("description", e), style: a("description", c, e), children: /* @__PURE__ */ ue(_F, { children: r }) }) : null;
}
function kF(e) {
  const { errors: t } = e, {
    getProps: r,
    theme: u
  } = Tt(), o = {
    color: u.colors.danger,
    gridArea: "errors"
  };
  return t.length ? /* @__PURE__ */ ue("ul", { ...r("errors", o, e), children: t.map((a) => /* @__PURE__ */ ue("li", { ...r("error", o, e), children: a }, a)) }) : null;
}
function DF(e) {
  const {
    text: t,
    field: r
  } = e, { id: u } = r, {
    getProps: o,
    theme: a
  } = Tt(), l = {
    color: a.colors.neutral90,
    fontWeight: 450,
    gridArea: "label",
    lineHeight: "1.5"
  };
  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    /* @__PURE__ */ ue("label", { htmlFor: u, ...o("label", l, e), children: t })
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
  } = Tt(), c = {
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
  return o ? /* @__PURE__ */ ue(
    o,
    {
      prop: t,
      enabled: r,
      onClick: u,
      baseStyles: c,
      ...a("optionalFieldButton", c, e)
    }
  ) : /* @__PURE__ */ vr("button", { onClick: u, type: "button", ...a("optionalFieldButton", c, e), children: [
    /* @__PURE__ */ ue("span", { children: r ? "-" : "+" }),
    /* @__PURE__ */ ue("span", { style: {
      marginRight: 8
    }, children: t.label || t.name })
  ] });
};
function NF(e) {
  return /* @__PURE__ */ ue(As, {});
}
function VF() {
  return /* @__PURE__ */ ue("p", { children: "Loading form..." });
}
function WF() {
  return /* @__PURE__ */ ue("p", { children: "Loading dynamic properties" });
}
function XF(e) {
  const t = gi(), { id: r, onChange: u, prop: o, value: a } = t, { getProps: l, theme: c } = Tt(), f = {
    color: c.colors.neutral60,
    display: "block",
    border: "1px solid",
    borderColor: c.colors.neutral20,
    padding: 6,
    width: "100%",
    minWidth: "400px",
    minHeight: "120px",
    borderRadius: c.borderRadius,
    gridArea: "control",
    boxShadow: c.boxShadow.input,
    fontFamily: "monospace",
    fontSize: "0.875rem",
    resize: "vertical"
  }, p = {
    id: r,
    name: o.name,
    value: a ?? "",
    onChange: (h) => u(h.target.value),
    required: !o.optional,
    baseStyles: f,
    formFieldContext: t
  };
  if (e.component) {
    const h = e.component;
    return /* @__PURE__ */ ue(
      h,
      {
        ...p,
        ...l("controlHttpRequest", f, t)
      }
    );
  }
  return /* @__PURE__ */ ue(
    "textarea",
    {
      ...p,
      ...l("controlHttpRequest", f, t),
      placeholder: "Enter HTTP request configuration (JSON format)",
      "data-lpignore": "true",
      "data-1p-ignore": "true"
    }
  );
}
const HF = {
  Alert: ZF,
  Description: LF,
  Errors: kF,
  Label: DF,
  OptionalFieldButton: MF,
  ControlObject: NF,
  OptionalFieldsContainer: ({ children: e, baseStyles: t, title: r, expanded: u, onToggle: o }) => /* @__PURE__ */ ue(As, {}),
  OverrideField: ({ prop: e, value: t, appName: r }) => /* @__PURE__ */ ue(As, {}),
  Button: dg,
  ControlInput: dw,
  ControlApp: cw,
  ControlSelect: pg,
  ControlBoolean: fw,
  LoaderComponent: VF,
  DynamicLoaderComponent: WF,
  ControlHttpRequest: XF
}, Xc = Ku({
  // eslint-disable-line @typescript-eslint/no-explicit-any
  classNames: {},
  classNamePrefix: "",
  components: {},
  styles: {},
  theme: wc,
  unstyled: !1
});
function zF() {
  const e = uu(Xc) ?? {}, t = RA(e.theme ?? {});
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
function Tt() {
  const e = uu(Xc) ?? {}, t = e.theme, r = e.unstyled ? FA : wc, u = typeof t == "function" ? Jl(r, t(r)) : Jl(r, t);
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
      ...HF,
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
    select: zF(),
    theme: u
  };
}
const SR = ({
  children: e,
  ...t
}) => /* @__PURE__ */ ue(Xc.Provider, { value: t, children: e });
function ZF({ prop: e, component: t }) {
  const { getProps: r } = Tt(), u = {
    padding: "1rem",
    borderRadius: "4px",
    marginBottom: "1rem"
  };
  return t ? /* @__PURE__ */ ue(t, { prop: e, baseStyles: u, ...r("alert", u, { prop: e, baseStyles: u }) }) : /* @__PURE__ */ ue("p", { ...r("alert", u, { prop: e, baseStyles: u }), className: `pd-alert-${e.alertType}`, children: e.content });
}
var Wu = { exports: {} };
Wu.exports;
var oh;
function YF() {
  return oh || (oh = 1, function(e, t) {
    var r = 200, u = "__lodash_hash_undefined__", o = 1, a = 2, l = 9007199254740991, c = "[object Arguments]", f = "[object Array]", p = "[object AsyncFunction]", h = "[object Boolean]", g = "[object Date]", v = "[object Error]", b = "[object Function]", P = "[object GeneratorFunction]", A = "[object Map]", E = "[object Number]", F = "[object Null]", k = "[object Object]", L = "[object Promise]", D = "[object Proxy]", X = "[object RegExp]", G = "[object Set]", H = "[object String]", z = "[object Symbol]", N = "[object Undefined]", re = "[object WeakMap]", J = "[object ArrayBuffer]", j = "[object DataView]", ne = "[object Float32Array]", $ = "[object Float64Array]", te = "[object Int8Array]", pe = "[object Int16Array]", ee = "[object Int32Array]", de = "[object Uint8Array]", We = "[object Uint8ClampedArray]", w = "[object Uint16Array]", ke = "[object Uint32Array]", Ee = /[\\^$.*+?()[\]{}|]/g, S = /^\[object .+?Constructor\]$/, Je = /^(?:0|[1-9]\d*)$/, be = {};
    be[ne] = be[$] = be[te] = be[pe] = be[ee] = be[de] = be[We] = be[w] = be[ke] = !0, be[c] = be[f] = be[J] = be[h] = be[j] = be[g] = be[v] = be[b] = be[A] = be[E] = be[k] = be[X] = be[G] = be[H] = be[re] = !1;
    var De = typeof Wr == "object" && Wr && Wr.Object === Object && Wr, yt = typeof self == "object" && self && self.Object === Object && self, Ne = De || yt || Function("return this")(), ft = t && !t.nodeType && t, Dt = ft && !0 && e && !e.nodeType && e, se = Dt && Dt.exports === ft, ce = se && De.process, we = function() {
      try {
        return ce && ce.binding && ce.binding("util");
      } catch {
      }
    }(), Fe = we && we.isTypedArray;
    function vt(C, B) {
      for (var U = -1, oe = C == null ? 0 : C.length, nt = 0, Re = []; ++U < oe; ) {
        var st = C[U];
        B(st, U, C) && (Re[nt++] = st);
      }
      return Re;
    }
    function rn(C, B) {
      for (var U = -1, oe = B.length, nt = C.length; ++U < oe; )
        C[nt + U] = B[U];
      return C;
    }
    function Yt(C, B) {
      for (var U = -1, oe = C == null ? 0 : C.length; ++U < oe; )
        if (B(C[U], U, C))
          return !0;
      return !1;
    }
    function bi(C, B) {
      for (var U = -1, oe = Array(C); ++U < C; )
        oe[U] = B(U);
      return oe;
    }
    function yi(C) {
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
      var B = -1, U = Array(C.size);
      return C.forEach(function(oe, nt) {
        U[++B] = [nt, oe];
      }), U;
    }
    function Cr(C, B) {
      return function(U) {
        return C(B(U));
      };
    }
    function au(C) {
      var B = -1, U = Array(C.size);
      return C.forEach(function(oe) {
        U[++B] = oe;
      }), U;
    }
    var nr = Array.prototype, W = Function.prototype, K = Object.prototype, ge = Ne["__core-js_shared__"], Te = W.toString, Be = K.hasOwnProperty, Et = function() {
      var C = /[^.]+$/.exec(ge && ge.keys && ge.keys.IE_PROTO || "");
      return C ? "Symbol(src)_1." + C : "";
    }(), Jt = K.toString, Nt = RegExp(
      "^" + Te.call(Be).replace(Ee, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    ), gn = se ? Ne.Buffer : void 0, Ut = Ne.Symbol, It = Ne.Uint8Array, un = K.propertyIsEnumerable, on = nr.splice, rr = Ut ? Ut.toStringTag : void 0, io = Object.getOwnPropertySymbols, uo = gn ? gn.isBuffer : void 0, oo = Cr(Object.keys, Object), lu = sn(Ne, "DataView"), zr = sn(Ne, "Map"), cu = sn(Ne, "Promise"), fu = sn(Ne, "Set"), vi = sn(Ne, "WeakMap"), Zr = sn(Object, "create"), zs = or(lu), Zs = or(zr), du = or(cu), Ys = or(fu), pu = or(vi), so = Ut ? Ut.prototype : void 0, hu = so ? so.valueOf : void 0;
    function ir(C) {
      var B = -1, U = C == null ? 0 : C.length;
      for (this.clear(); ++B < U; ) {
        var oe = C[B];
        this.set(oe[0], oe[1]);
      }
    }
    function Js() {
      this.__data__ = Zr ? Zr(null) : {}, this.size = 0;
    }
    function Us(C) {
      var B = this.has(C) && delete this.__data__[C];
      return this.size -= B ? 1 : 0, B;
    }
    function js(C) {
      var B = this.__data__;
      if (Zr) {
        var U = B[C];
        return U === u ? void 0 : U;
      }
      return Be.call(B, C) ? B[C] : void 0;
    }
    function Qs(C) {
      var B = this.__data__;
      return Zr ? B[C] !== void 0 : Be.call(B, C);
    }
    function qs(C, B) {
      var U = this.__data__;
      return this.size += this.has(C) ? 0 : 1, U[C] = Zr && B === void 0 ? u : B, this;
    }
    ir.prototype.clear = Js, ir.prototype.delete = Us, ir.prototype.get = js, ir.prototype.has = Qs, ir.prototype.set = qs;
    function mn(C) {
      var B = -1, U = C == null ? 0 : C.length;
      for (this.clear(); ++B < U; ) {
        var oe = C[B];
        this.set(oe[0], oe[1]);
      }
    }
    function $s() {
      this.__data__ = [], this.size = 0;
    }
    function Ks(C) {
      var B = this.__data__, U = Yr(B, C);
      if (U < 0)
        return !1;
      var oe = B.length - 1;
      return U == oe ? B.pop() : on.call(B, U, 1), --this.size, !0;
    }
    function ea(C) {
      var B = this.__data__, U = Yr(B, C);
      return U < 0 ? void 0 : B[U][1];
    }
    function ta(C) {
      return Yr(this.__data__, C) > -1;
    }
    function na(C, B) {
      var U = this.__data__, oe = Yr(U, C);
      return oe < 0 ? (++this.size, U.push([C, B])) : U[oe][1] = B, this;
    }
    mn.prototype.clear = $s, mn.prototype.delete = Ks, mn.prototype.get = ea, mn.prototype.has = ta, mn.prototype.set = na;
    function ur(C) {
      var B = -1, U = C == null ? 0 : C.length;
      for (this.clear(); ++B < U; ) {
        var oe = C[B];
        this.set(oe[0], oe[1]);
      }
    }
    function Ii() {
      this.size = 0, this.__data__ = {
        hash: new ir(),
        map: new (zr || mn)(),
        string: new ir()
      };
    }
    function ra(C) {
      var B = xr(this, C).delete(C);
      return this.size -= B ? 1 : 0, B;
    }
    function Ci(C) {
      return xr(this, C).get(C);
    }
    function ia(C) {
      return xr(this, C).has(C);
    }
    function ua(C, B) {
      var U = xr(this, C), oe = U.size;
      return U.set(C, B), this.size += U.size == oe ? 0 : 1, this;
    }
    ur.prototype.clear = Ii, ur.prototype.delete = ra, ur.prototype.get = Ci, ur.prototype.has = ia, ur.prototype.set = ua;
    function xi(C) {
      var B = -1, U = C == null ? 0 : C.length;
      for (this.__data__ = new ur(); ++B < U; )
        this.add(C[B]);
    }
    function ao(C) {
      return this.__data__.set(C, u), this;
    }
    function lo(C) {
      return this.__data__.has(C);
    }
    xi.prototype.add = xi.prototype.push = ao, xi.prototype.has = lo;
    function Pn(C) {
      var B = this.__data__ = new mn(C);
      this.size = B.size;
    }
    function oa() {
      this.__data__ = new mn(), this.size = 0;
    }
    function sa(C) {
      var B = this.__data__, U = B.delete(C);
      return this.size = B.size, U;
    }
    function aa(C) {
      return this.__data__.get(C);
    }
    function la(C) {
      return this.__data__.has(C);
    }
    function co(C, B) {
      var U = this.__data__;
      if (U instanceof mn) {
        var oe = U.__data__;
        if (!zr || oe.length < r - 1)
          return oe.push([C, B]), this.size = ++U.size, this;
        U = this.__data__ = new ur(oe);
      }
      return U.set(C, B), this.size = U.size, this;
    }
    Pn.prototype.clear = oa, Pn.prototype.delete = sa, Pn.prototype.get = aa, Pn.prototype.has = la, Pn.prototype.set = co;
    function fo(C, B) {
      var U = Si(C), oe = !U && wo(C), nt = !U && !oe && bu(C), Re = !U && !oe && !nt && Fo(C), st = U || oe || nt || Re, Ct = st ? bi(C.length, String) : [], He = Ct.length;
      for (var rt in C)
        Be.call(C, rt) && !(st && // Safari 9 has enumerable `arguments.length` in strict mode.
        (rt == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
        nt && (rt == "offset" || rt == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
        Re && (rt == "buffer" || rt == "byteLength" || rt == "byteOffset") || // Skip index properties.
        vo(rt, He))) && Ct.push(rt);
      return Ct;
    }
    function Yr(C, B) {
      for (var U = C.length; U--; )
        if (Ao(C[U][0], B))
          return U;
      return -1;
    }
    function gu(C, B, U) {
      var oe = B(C);
      return Si(C) ? oe : rn(oe, U(C));
    }
    function Jr(C) {
      return C == null ? C === void 0 ? N : F : rr && rr in Object(C) ? bo(C) : da(C);
    }
    function mu(C) {
      return jr(C) && Jr(C) == c;
    }
    function Ur(C, B, U, oe, nt) {
      return C === B ? !0 : C == null || B == null || !jr(C) && !jr(B) ? C !== C && B !== B : po(C, B, U, oe, Ur, nt);
    }
    function po(C, B, U, oe, nt, Re) {
      var st = Si(C), Ct = Si(B), He = st ? f : Vn(C), rt = Ct ? f : Vn(B);
      He = He == c ? k : He, rt = rt == c ? k : rt;
      var gt = He == k, jt = rt == k, xt = He == rt;
      if (xt && bu(C)) {
        if (!bu(B))
          return !1;
        st = !0, gt = !1;
      }
      if (xt && !gt)
        return Re || (Re = new Pn()), st || Fo(C) ? Ai(C, B, U, oe, nt, Re) : fa(C, B, He, U, oe, nt, Re);
      if (!(U & o)) {
        var at = gt && Be.call(C, "__wrapped__"), Vt = jt && Be.call(B, "__wrapped__");
        if (at || Vt) {
          var On = at ? C.value() : C, bn = Vt ? B.value() : B;
          return Re || (Re = new Pn()), nt(On, bn, U, oe, Re);
        }
      }
      return xt ? (Re || (Re = new Pn()), mo(C, B, U, oe, nt, Re)) : !1;
    }
    function ca(C) {
      if (!Eo(C) || Co(C))
        return !1;
      var B = Ei(C) ? Nt : S;
      return B.test(or(C));
    }
    function ho(C) {
      return jr(C) && So(C.length) && !!be[Jr(C)];
    }
    function go(C) {
      if (!xo(C))
        return oo(C);
      var B = [];
      for (var U in Object(C))
        Be.call(C, U) && U != "constructor" && B.push(U);
      return B;
    }
    function Ai(C, B, U, oe, nt, Re) {
      var st = U & o, Ct = C.length, He = B.length;
      if (Ct != He && !(st && He > Ct))
        return !1;
      var rt = Re.get(C);
      if (rt && Re.get(B))
        return rt == B;
      var gt = -1, jt = !0, xt = U & a ? new xi() : void 0;
      for (Re.set(C, B), Re.set(B, C); ++gt < Ct; ) {
        var at = C[gt], Vt = B[gt];
        if (oe)
          var On = st ? oe(Vt, at, gt, B, C, Re) : oe(at, Vt, gt, C, B, Re);
        if (On !== void 0) {
          if (On)
            continue;
          jt = !1;
          break;
        }
        if (xt) {
          if (!Yt(B, function(bn, Wn) {
            if (!Nn(xt, Wn) && (at === bn || nt(at, bn, U, oe, Re)))
              return xt.push(Wn);
          })) {
            jt = !1;
            break;
          }
        } else if (!(at === Vt || nt(at, Vt, U, oe, Re))) {
          jt = !1;
          break;
        }
      }
      return Re.delete(C), Re.delete(B), jt;
    }
    function fa(C, B, U, oe, nt, Re, st) {
      switch (U) {
        case j:
          if (C.byteLength != B.byteLength || C.byteOffset != B.byteOffset)
            return !1;
          C = C.buffer, B = B.buffer;
        case J:
          return !(C.byteLength != B.byteLength || !Re(new It(C), new It(B)));
        case h:
        case g:
        case E:
          return Ao(+C, +B);
        case v:
          return C.name == B.name && C.message == B.message;
        case X:
        case H:
          return C == B + "";
        case A:
          var Ct = tr;
        case G:
          var He = oe & o;
          if (Ct || (Ct = au), C.size != B.size && !He)
            return !1;
          var rt = st.get(C);
          if (rt)
            return rt == B;
          oe |= a, st.set(C, B);
          var gt = Ai(Ct(C), Ct(B), oe, nt, Re, st);
          return st.delete(C), gt;
        case z:
          if (hu)
            return hu.call(C) == hu.call(B);
      }
      return !1;
    }
    function mo(C, B, U, oe, nt, Re) {
      var st = U & o, Ct = wi(C), He = Ct.length, rt = wi(B), gt = rt.length;
      if (He != gt && !st)
        return !1;
      for (var jt = He; jt--; ) {
        var xt = Ct[jt];
        if (!(st ? xt in B : Be.call(B, xt)))
          return !1;
      }
      var at = Re.get(C);
      if (at && Re.get(B))
        return at == B;
      var Vt = !0;
      Re.set(C, B), Re.set(B, C);
      for (var On = st; ++jt < He; ) {
        xt = Ct[jt];
        var bn = C[xt], Wn = B[xt];
        if (oe)
          var yu = st ? oe(Wn, bn, xt, B, C, Re) : oe(bn, Wn, xt, C, B, Re);
        if (!(yu === void 0 ? bn === Wn || nt(bn, Wn, U, oe, Re) : yu)) {
          Vt = !1;
          break;
        }
        On || (On = xt == "constructor");
      }
      if (Vt && !On) {
        var Qr = C.constructor, Ft = B.constructor;
        Qr != Ft && "constructor" in C && "constructor" in B && !(typeof Qr == "function" && Qr instanceof Qr && typeof Ft == "function" && Ft instanceof Ft) && (Vt = !1);
      }
      return Re.delete(C), Re.delete(B), Vt;
    }
    function wi(C) {
      return gu(C, ga, yo);
    }
    function xr(C, B) {
      var U = C.__data__;
      return Io(B) ? U[typeof B == "string" ? "string" : "hash"] : U.map;
    }
    function sn(C, B) {
      var U = Mt(C, B);
      return ca(U) ? U : void 0;
    }
    function bo(C) {
      var B = Be.call(C, rr), U = C[rr];
      try {
        C[rr] = void 0;
        var oe = !0;
      } catch {
      }
      var nt = Jt.call(C);
      return oe && (B ? C[rr] = U : delete C[rr]), nt;
    }
    var yo = io ? function(C) {
      return C == null ? [] : (C = Object(C), vt(io(C), function(B) {
        return un.call(C, B);
      }));
    } : tt, Vn = Jr;
    (lu && Vn(new lu(new ArrayBuffer(1))) != j || zr && Vn(new zr()) != A || cu && Vn(cu.resolve()) != L || fu && Vn(new fu()) != G || vi && Vn(new vi()) != re) && (Vn = function(C) {
      var B = Jr(C), U = B == k ? C.constructor : void 0, oe = U ? or(U) : "";
      if (oe)
        switch (oe) {
          case zs:
            return j;
          case Zs:
            return A;
          case du:
            return L;
          case Ys:
            return G;
          case pu:
            return re;
        }
      return B;
    });
    function vo(C, B) {
      return B = B ?? l, !!B && (typeof C == "number" || Je.test(C)) && C > -1 && C % 1 == 0 && C < B;
    }
    function Io(C) {
      var B = typeof C;
      return B == "string" || B == "number" || B == "symbol" || B == "boolean" ? C !== "__proto__" : C === null;
    }
    function Co(C) {
      return !!Et && Et in C;
    }
    function xo(C) {
      var B = C && C.constructor, U = typeof B == "function" && B.prototype || K;
      return C === U;
    }
    function da(C) {
      return Jt.call(C);
    }
    function or(C) {
      if (C != null) {
        try {
          return Te.call(C);
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
      return jr(C) && Be.call(C, "callee") && !un.call(C, "callee");
    }, Si = Array.isArray;
    function pa(C) {
      return C != null && So(C.length) && !Ei(C);
    }
    var bu = uo || Ke;
    function ha(C, B) {
      return Ur(C, B);
    }
    function Ei(C) {
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
    var Fo = Fe ? yi(Fe) : ho;
    function ga(C) {
      return pa(C) ? fo(C) : go(C);
    }
    function tt() {
      return [];
    }
    function Ke() {
      return !1;
    }
    e.exports = ha;
  }(Wu, Wu.exports)), Wu.exports;
}
var JF = YF();
const UF = /* @__PURE__ */ Vs(JF);
function Qg(e) {
  return typeof e == "object" && e && "__lv" in e ? e.__lv.value : e;
}
function jF(e) {
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
function QF(e) {
  const t = jF(e.value);
  if (!e.prop.default && typeof t > "u")
    return [
      "required"
    ];
  if (!e.prop.default && Array.isArray(t) && !t.length) return [
    "empty array"
  ];
}
function qF(e) {
  const t = Qg(e.value);
  if (t == null || typeof t > "u") return [
    "required"
  ];
}
function $F(e) {
  const {
    prop: t,
    value: r
  } = e, u = Qg(r);
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
function KF(e) {
  const {
    prop: t,
    value: r
  } = e;
  if (!t.default && (r == null || typeof r > "u")) return [
    "required"
  ];
}
function eR(e) {
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
function tR(e) {
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
      const a = eR(t), l = u;
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
var nR = Xu.exports, sh;
function rR() {
  return sh || (sh = 1, function(e, t) {
    (function() {
      var r, u = "4.17.21", o = 200, a = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", l = "Expected a function", c = "Invalid `variable` option passed into `_.template`", f = "__lodash_hash_undefined__", p = 500, h = "__lodash_placeholder__", g = 1, v = 2, b = 4, P = 1, A = 2, E = 1, F = 2, k = 4, L = 8, D = 16, X = 32, G = 64, H = 128, z = 256, N = 512, re = 30, J = "...", j = 800, ne = 16, $ = 1, te = 2, pe = 3, ee = 1 / 0, de = 9007199254740991, We = 17976931348623157e292, w = NaN, ke = 4294967295, Ee = ke - 1, S = ke >>> 1, Je = [
        ["ary", H],
        ["bind", E],
        ["bindKey", F],
        ["curry", L],
        ["curryRight", D],
        ["flip", N],
        ["partial", X],
        ["partialRight", G],
        ["rearg", z]
      ], be = "[object Arguments]", De = "[object Array]", yt = "[object AsyncFunction]", Ne = "[object Boolean]", ft = "[object Date]", Dt = "[object DOMException]", se = "[object Error]", ce = "[object Function]", we = "[object GeneratorFunction]", Fe = "[object Map]", vt = "[object Number]", rn = "[object Null]", Yt = "[object Object]", bi = "[object Promise]", yi = "[object Proxy]", Nn = "[object RegExp]", Mt = "[object Set]", tr = "[object String]", Cr = "[object Symbol]", au = "[object Undefined]", nr = "[object WeakMap]", W = "[object WeakSet]", K = "[object ArrayBuffer]", ge = "[object DataView]", Te = "[object Float32Array]", Be = "[object Float64Array]", Et = "[object Int8Array]", Jt = "[object Int16Array]", Nt = "[object Int32Array]", gn = "[object Uint8Array]", Ut = "[object Uint8ClampedArray]", It = "[object Uint16Array]", un = "[object Uint32Array]", on = /\b__p \+= '';/g, rr = /\b(__p \+=) '' \+/g, io = /(__e\(.*?\)|\b__t\)) \+\n'';/g, uo = /&(?:amp|lt|gt|quot|#39);/g, oo = /[&<>"']/g, lu = RegExp(uo.source), zr = RegExp(oo.source), cu = /<%-([\s\S]+?)%>/g, fu = /<%([\s\S]+?)%>/g, vi = /<%=([\s\S]+?)%>/g, Zr = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, zs = /^\w*$/, Zs = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, du = /[\\^$.*+?()[\]{}|]/g, Ys = RegExp(du.source), pu = /^\s+/, so = /\s/, hu = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, ir = /\{\n\/\* \[wrapped with (.+)\] \*/, Js = /,? & /, Us = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, js = /[()=,{}\[\]\/\s]/, Qs = /\\(\\)?/g, qs = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, mn = /\w*$/, $s = /^[-+]0x[0-9a-f]+$/i, Ks = /^0b[01]+$/i, ea = /^\[object .+?Constructor\]$/, ta = /^0o[0-7]+$/i, na = /^(?:0|[1-9]\d*)$/, ur = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Ii = /($^)/, ra = /['\n\r\u2028\u2029\\]/g, Ci = "\\ud800-\\udfff", ia = "\\u0300-\\u036f", ua = "\\ufe20-\\ufe2f", xi = "\\u20d0-\\u20ff", ao = ia + ua + xi, lo = "\\u2700-\\u27bf", Pn = "a-z\\xdf-\\xf6\\xf8-\\xff", oa = "\\xac\\xb1\\xd7\\xf7", sa = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", aa = "\\u2000-\\u206f", la = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", co = "A-Z\\xc0-\\xd6\\xd8-\\xde", fo = "\\ufe0e\\ufe0f", Yr = oa + sa + aa + la, gu = "['’]", Jr = "[" + Ci + "]", mu = "[" + Yr + "]", Ur = "[" + ao + "]", po = "\\d+", ca = "[" + lo + "]", ho = "[" + Pn + "]", go = "[^" + Ci + Yr + po + lo + Pn + co + "]", Ai = "\\ud83c[\\udffb-\\udfff]", fa = "(?:" + Ur + "|" + Ai + ")", mo = "[^" + Ci + "]", wi = "(?:\\ud83c[\\udde6-\\uddff]){2}", xr = "[\\ud800-\\udbff][\\udc00-\\udfff]", sn = "[" + co + "]", bo = "\\u200d", yo = "(?:" + ho + "|" + go + ")", Vn = "(?:" + sn + "|" + go + ")", vo = "(?:" + gu + "(?:d|ll|m|re|s|t|ve))?", Io = "(?:" + gu + "(?:D|LL|M|RE|S|T|VE))?", Co = fa + "?", xo = "[" + fo + "]?", da = "(?:" + bo + "(?:" + [mo, wi, xr].join("|") + ")" + xo + Co + ")*", or = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Ao = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", wo = xo + Co + da, Si = "(?:" + [ca, wi, xr].join("|") + ")" + wo, pa = "(?:" + [mo + Ur + "?", Ur, wi, xr, Jr].join("|") + ")", bu = RegExp(gu, "g"), ha = RegExp(Ur, "g"), Ei = RegExp(Ai + "(?=" + Ai + ")|" + pa + wo, "g"), So = RegExp([
        sn + "?" + ho + "+" + vo + "(?=" + [mu, sn, "$"].join("|") + ")",
        Vn + "+" + Io + "(?=" + [mu, sn + yo, "$"].join("|") + ")",
        sn + "?" + yo + "+" + vo,
        sn + "+" + Io,
        Ao,
        or,
        po,
        Si
      ].join("|"), "g"), Eo = RegExp("[" + bo + Ci + ao + fo + "]"), jr = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Fo = [
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
      ], ga = -1, tt = {};
      tt[Te] = tt[Be] = tt[Et] = tt[Jt] = tt[Nt] = tt[gn] = tt[Ut] = tt[It] = tt[un] = !0, tt[be] = tt[De] = tt[K] = tt[Ne] = tt[ge] = tt[ft] = tt[se] = tt[ce] = tt[Fe] = tt[vt] = tt[Yt] = tt[Nn] = tt[Mt] = tt[tr] = tt[nr] = !1;
      var Ke = {};
      Ke[be] = Ke[De] = Ke[K] = Ke[ge] = Ke[Ne] = Ke[ft] = Ke[Te] = Ke[Be] = Ke[Et] = Ke[Jt] = Ke[Nt] = Ke[Fe] = Ke[vt] = Ke[Yt] = Ke[Nn] = Ke[Mt] = Ke[tr] = Ke[Cr] = Ke[gn] = Ke[Ut] = Ke[It] = Ke[un] = !0, Ke[se] = Ke[ce] = Ke[nr] = !1;
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
      }, U = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      }, oe = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      }, nt = parseFloat, Re = parseInt, st = typeof Wr == "object" && Wr && Wr.Object === Object && Wr, Ct = typeof self == "object" && self && self.Object === Object && self, He = st || Ct || Function("return this")(), rt = t && !t.nodeType && t, gt = rt && !0 && e && !e.nodeType && e, jt = gt && gt.exports === rt, xt = jt && st.process, at = function() {
        try {
          var T = gt && gt.require && gt.require("util").types;
          return T || xt && xt.binding && xt.binding("util");
        } catch {
        }
      }(), Vt = at && at.isArrayBuffer, On = at && at.isDate, bn = at && at.isMap, Wn = at && at.isRegExp, yu = at && at.isSet, Qr = at && at.isTypedArray;
      function Ft(T, V, M) {
        switch (M.length) {
          case 0:
            return T.call(V);
          case 1:
            return T.call(V, M[0]);
          case 2:
            return T.call(V, M[0], M[1]);
          case 3:
            return T.call(V, M[0], M[1], M[2]);
        }
        return T.apply(V, M);
      }
      function $g(T, V, M, ae) {
        for (var Se = -1, Ue = T == null ? 0 : T.length; ++Se < Ue; ) {
          var wt = T[Se];
          V(ae, wt, M(wt), T);
        }
        return ae;
      }
      function yn(T, V) {
        for (var M = -1, ae = T == null ? 0 : T.length; ++M < ae && V(T[M], M, T) !== !1; )
          ;
        return T;
      }
      function Kg(T, V) {
        for (var M = T == null ? 0 : T.length; M-- && V(T[M], M, T) !== !1; )
          ;
        return T;
      }
      function zc(T, V) {
        for (var M = -1, ae = T == null ? 0 : T.length; ++M < ae; )
          if (!V(T[M], M, T))
            return !1;
        return !0;
      }
      function Ar(T, V) {
        for (var M = -1, ae = T == null ? 0 : T.length, Se = 0, Ue = []; ++M < ae; ) {
          var wt = T[M];
          V(wt, M, T) && (Ue[Se++] = wt);
        }
        return Ue;
      }
      function Ro(T, V) {
        var M = T == null ? 0 : T.length;
        return !!M && Fi(T, V, 0) > -1;
      }
      function ma(T, V, M) {
        for (var ae = -1, Se = T == null ? 0 : T.length; ++ae < Se; )
          if (M(V, T[ae]))
            return !0;
        return !1;
      }
      function lt(T, V) {
        for (var M = -1, ae = T == null ? 0 : T.length, Se = Array(ae); ++M < ae; )
          Se[M] = V(T[M], M, T);
        return Se;
      }
      function wr(T, V) {
        for (var M = -1, ae = V.length, Se = T.length; ++M < ae; )
          T[Se + M] = V[M];
        return T;
      }
      function ba(T, V, M, ae) {
        var Se = -1, Ue = T == null ? 0 : T.length;
        for (ae && Ue && (M = T[++Se]); ++Se < Ue; )
          M = V(M, T[Se], Se, T);
        return M;
      }
      function em(T, V, M, ae) {
        var Se = T == null ? 0 : T.length;
        for (ae && Se && (M = T[--Se]); Se--; )
          M = V(M, T[Se], Se, T);
        return M;
      }
      function ya(T, V) {
        for (var M = -1, ae = T == null ? 0 : T.length; ++M < ae; )
          if (V(T[M], M, T))
            return !0;
        return !1;
      }
      var tm = va("length");
      function nm(T) {
        return T.split("");
      }
      function rm(T) {
        return T.match(Us) || [];
      }
      function Zc(T, V, M) {
        var ae;
        return M(T, function(Se, Ue, wt) {
          if (V(Se, Ue, wt))
            return ae = Ue, !1;
        }), ae;
      }
      function Po(T, V, M, ae) {
        for (var Se = T.length, Ue = M + (ae ? 1 : -1); ae ? Ue-- : ++Ue < Se; )
          if (V(T[Ue], Ue, T))
            return Ue;
        return -1;
      }
      function Fi(T, V, M) {
        return V === V ? gm(T, V, M) : Po(T, Yc, M);
      }
      function im(T, V, M, ae) {
        for (var Se = M - 1, Ue = T.length; ++Se < Ue; )
          if (ae(T[Se], V))
            return Se;
        return -1;
      }
      function Yc(T) {
        return T !== T;
      }
      function Jc(T, V) {
        var M = T == null ? 0 : T.length;
        return M ? Ca(T, V) / M : w;
      }
      function va(T) {
        return function(V) {
          return V == null ? r : V[T];
        };
      }
      function Ia(T) {
        return function(V) {
          return T == null ? r : T[V];
        };
      }
      function Uc(T, V, M, ae, Se) {
        return Se(T, function(Ue, wt, it) {
          M = ae ? (ae = !1, Ue) : V(M, Ue, wt, it);
        }), M;
      }
      function um(T, V) {
        var M = T.length;
        for (T.sort(V); M--; )
          T[M] = T[M].value;
        return T;
      }
      function Ca(T, V) {
        for (var M, ae = -1, Se = T.length; ++ae < Se; ) {
          var Ue = V(T[ae]);
          Ue !== r && (M = M === r ? Ue : M + Ue);
        }
        return M;
      }
      function xa(T, V) {
        for (var M = -1, ae = Array(T); ++M < T; )
          ae[M] = V(M);
        return ae;
      }
      function om(T, V) {
        return lt(V, function(M) {
          return [M, T[M]];
        });
      }
      function jc(T) {
        return T && T.slice(0, Kc(T) + 1).replace(pu, "");
      }
      function an(T) {
        return function(V) {
          return T(V);
        };
      }
      function Aa(T, V) {
        return lt(V, function(M) {
          return T[M];
        });
      }
      function vu(T, V) {
        return T.has(V);
      }
      function Qc(T, V) {
        for (var M = -1, ae = T.length; ++M < ae && Fi(V, T[M], 0) > -1; )
          ;
        return M;
      }
      function qc(T, V) {
        for (var M = T.length; M-- && Fi(V, T[M], 0) > -1; )
          ;
        return M;
      }
      function sm(T, V) {
        for (var M = T.length, ae = 0; M--; )
          T[M] === V && ++ae;
        return ae;
      }
      var am = Ia(C), lm = Ia(B);
      function cm(T) {
        return "\\" + oe[T];
      }
      function fm(T, V) {
        return T == null ? r : T[V];
      }
      function Ri(T) {
        return Eo.test(T);
      }
      function dm(T) {
        return jr.test(T);
      }
      function pm(T) {
        for (var V, M = []; !(V = T.next()).done; )
          M.push(V.value);
        return M;
      }
      function wa(T) {
        var V = -1, M = Array(T.size);
        return T.forEach(function(ae, Se) {
          M[++V] = [Se, ae];
        }), M;
      }
      function $c(T, V) {
        return function(M) {
          return T(V(M));
        };
      }
      function Sr(T, V) {
        for (var M = -1, ae = T.length, Se = 0, Ue = []; ++M < ae; ) {
          var wt = T[M];
          (wt === V || wt === h) && (T[M] = h, Ue[Se++] = M);
        }
        return Ue;
      }
      function Oo(T) {
        var V = -1, M = Array(T.size);
        return T.forEach(function(ae) {
          M[++V] = ae;
        }), M;
      }
      function hm(T) {
        var V = -1, M = Array(T.size);
        return T.forEach(function(ae) {
          M[++V] = [ae, ae];
        }), M;
      }
      function gm(T, V, M) {
        for (var ae = M - 1, Se = T.length; ++ae < Se; )
          if (T[ae] === V)
            return ae;
        return -1;
      }
      function mm(T, V, M) {
        for (var ae = M + 1; ae--; )
          if (T[ae] === V)
            return ae;
        return ae;
      }
      function Pi(T) {
        return Ri(T) ? ym(T) : tm(T);
      }
      function Tn(T) {
        return Ri(T) ? vm(T) : nm(T);
      }
      function Kc(T) {
        for (var V = T.length; V-- && so.test(T.charAt(V)); )
          ;
        return V;
      }
      var bm = Ia(U);
      function ym(T) {
        for (var V = Ei.lastIndex = 0; Ei.test(T); )
          ++V;
        return V;
      }
      function vm(T) {
        return T.match(Ei) || [];
      }
      function Im(T) {
        return T.match(So) || [];
      }
      var Cm = function T(V) {
        V = V == null ? He : Oi.defaults(He.Object(), V, Oi.pick(He, Fo));
        var M = V.Array, ae = V.Date, Se = V.Error, Ue = V.Function, wt = V.Math, it = V.Object, Sa = V.RegExp, xm = V.String, vn = V.TypeError, To = M.prototype, Am = Ue.prototype, Ti = it.prototype, Bo = V["__core-js_shared__"], _o = Am.toString, $e = Ti.hasOwnProperty, wm = 0, ef = function() {
          var n = /[^.]+$/.exec(Bo && Bo.keys && Bo.keys.IE_PROTO || "");
          return n ? "Symbol(src)_1." + n : "";
        }(), Go = Ti.toString, Sm = _o.call(it), Em = He._, Fm = Sa(
          "^" + _o.call($e).replace(du, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        ), Lo = jt ? V.Buffer : r, Er = V.Symbol, ko = V.Uint8Array, tf = Lo ? Lo.allocUnsafe : r, Do = $c(it.getPrototypeOf, it), nf = it.create, rf = Ti.propertyIsEnumerable, Mo = To.splice, uf = Er ? Er.isConcatSpreadable : r, Iu = Er ? Er.iterator : r, qr = Er ? Er.toStringTag : r, No = function() {
          try {
            var n = ni(it, "defineProperty");
            return n({}, "", {}), n;
          } catch {
          }
        }(), Rm = V.clearTimeout !== He.clearTimeout && V.clearTimeout, Pm = ae && ae.now !== He.Date.now && ae.now, Om = V.setTimeout !== He.setTimeout && V.setTimeout, Vo = wt.ceil, Wo = wt.floor, Ea = it.getOwnPropertySymbols, Tm = Lo ? Lo.isBuffer : r, of = V.isFinite, Bm = To.join, _m = $c(it.keys, it), St = wt.max, Bt = wt.min, Gm = ae.now, Lm = V.parseInt, sf = wt.random, km = To.reverse, Fa = ni(V, "DataView"), Cu = ni(V, "Map"), Ra = ni(V, "Promise"), Bi = ni(V, "Set"), xu = ni(V, "WeakMap"), Au = ni(it, "create"), Xo = xu && new xu(), _i = {}, Dm = ri(Fa), Mm = ri(Cu), Nm = ri(Ra), Vm = ri(Bi), Wm = ri(xu), Ho = Er ? Er.prototype : r, wu = Ho ? Ho.valueOf : r, af = Ho ? Ho.toString : r;
        function y(n) {
          if (dt(n) && !Pe(n) && !(n instanceof Xe)) {
            if (n instanceof In)
              return n;
            if ($e.call(n, "__wrapped__"))
              return ld(n);
          }
          return new In(n);
        }
        var Gi = /* @__PURE__ */ function() {
          function n() {
          }
          return function(i) {
            if (!ct(i))
              return {};
            if (nf)
              return nf(i);
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
          interpolate: vi,
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
        }, y.prototype = zo.prototype, y.prototype.constructor = y, In.prototype = Gi(zo.prototype), In.prototype.constructor = In;
        function Xe(n) {
          this.__wrapped__ = n, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = ke, this.__views__ = [];
        }
        function Xm() {
          var n = new Xe(this.__wrapped__);
          return n.__actions__ = Qt(this.__actions__), n.__dir__ = this.__dir__, n.__filtered__ = this.__filtered__, n.__iteratees__ = Qt(this.__iteratees__), n.__takeCount__ = this.__takeCount__, n.__views__ = Qt(this.__views__), n;
        }
        function Hm() {
          if (this.__filtered__) {
            var n = new Xe(this);
            n.__dir__ = -1, n.__filtered__ = !0;
          } else
            n = this.clone(), n.__dir__ *= -1;
          return n;
        }
        function zm() {
          var n = this.__wrapped__.value(), i = this.__dir__, s = Pe(n), d = i < 0, m = s ? n.length : 0, I = ny(0, m, this.__views__), x = I.start, R = I.end, _ = R - x, Z = d ? R : x - 1, Y = this.__iteratees__, Q = Y.length, ie = 0, fe = Bt(_, this.__takeCount__);
          if (!s || !d && m == _ && fe == _)
            return Bf(n, this.__actions__);
          var Ie = [];
          e:
            for (; _-- && ie < fe; ) {
              Z += i;
              for (var Le = -1, Ce = n[Z]; ++Le < Q; ) {
                var Ve = Y[Le], ze = Ve.iteratee, fn = Ve.type, Ht = ze(Ce);
                if (fn == te)
                  Ce = Ht;
                else if (!Ht) {
                  if (fn == $)
                    continue e;
                  break e;
                }
              }
              Ie[ie++] = Ce;
            }
          return Ie;
        }
        Xe.prototype = Gi(zo.prototype), Xe.prototype.constructor = Xe;
        function $r(n) {
          var i = -1, s = n == null ? 0 : n.length;
          for (this.clear(); ++i < s; ) {
            var d = n[i];
            this.set(d[0], d[1]);
          }
        }
        function Zm() {
          this.__data__ = Au ? Au(null) : {}, this.size = 0;
        }
        function Ym(n) {
          var i = this.has(n) && delete this.__data__[n];
          return this.size -= i ? 1 : 0, i;
        }
        function Jm(n) {
          var i = this.__data__;
          if (Au) {
            var s = i[n];
            return s === f ? r : s;
          }
          return $e.call(i, n) ? i[n] : r;
        }
        function Um(n) {
          var i = this.__data__;
          return Au ? i[n] !== r : $e.call(i, n);
        }
        function jm(n, i) {
          var s = this.__data__;
          return this.size += this.has(n) ? 0 : 1, s[n] = Au && i === r ? f : i, this;
        }
        $r.prototype.clear = Zm, $r.prototype.delete = Ym, $r.prototype.get = Jm, $r.prototype.has = Um, $r.prototype.set = jm;
        function sr(n) {
          var i = -1, s = n == null ? 0 : n.length;
          for (this.clear(); ++i < s; ) {
            var d = n[i];
            this.set(d[0], d[1]);
          }
        }
        function Qm() {
          this.__data__ = [], this.size = 0;
        }
        function qm(n) {
          var i = this.__data__, s = Zo(i, n);
          if (s < 0)
            return !1;
          var d = i.length - 1;
          return s == d ? i.pop() : Mo.call(i, s, 1), --this.size, !0;
        }
        function $m(n) {
          var i = this.__data__, s = Zo(i, n);
          return s < 0 ? r : i[s][1];
        }
        function Km(n) {
          return Zo(this.__data__, n) > -1;
        }
        function eb(n, i) {
          var s = this.__data__, d = Zo(s, n);
          return d < 0 ? (++this.size, s.push([n, i])) : s[d][1] = i, this;
        }
        sr.prototype.clear = Qm, sr.prototype.delete = qm, sr.prototype.get = $m, sr.prototype.has = Km, sr.prototype.set = eb;
        function ar(n) {
          var i = -1, s = n == null ? 0 : n.length;
          for (this.clear(); ++i < s; ) {
            var d = n[i];
            this.set(d[0], d[1]);
          }
        }
        function tb() {
          this.size = 0, this.__data__ = {
            hash: new $r(),
            map: new (Cu || sr)(),
            string: new $r()
          };
        }
        function nb(n) {
          var i = rs(this, n).delete(n);
          return this.size -= i ? 1 : 0, i;
        }
        function rb(n) {
          return rs(this, n).get(n);
        }
        function ib(n) {
          return rs(this, n).has(n);
        }
        function ub(n, i) {
          var s = rs(this, n), d = s.size;
          return s.set(n, i), this.size += s.size == d ? 0 : 1, this;
        }
        ar.prototype.clear = tb, ar.prototype.delete = nb, ar.prototype.get = rb, ar.prototype.has = ib, ar.prototype.set = ub;
        function Kr(n) {
          var i = -1, s = n == null ? 0 : n.length;
          for (this.__data__ = new ar(); ++i < s; )
            this.add(n[i]);
        }
        function ob(n) {
          return this.__data__.set(n, f), this;
        }
        function sb(n) {
          return this.__data__.has(n);
        }
        Kr.prototype.add = Kr.prototype.push = ob, Kr.prototype.has = sb;
        function Bn(n) {
          var i = this.__data__ = new sr(n);
          this.size = i.size;
        }
        function ab() {
          this.__data__ = new sr(), this.size = 0;
        }
        function lb(n) {
          var i = this.__data__, s = i.delete(n);
          return this.size = i.size, s;
        }
        function cb(n) {
          return this.__data__.get(n);
        }
        function fb(n) {
          return this.__data__.has(n);
        }
        function db(n, i) {
          var s = this.__data__;
          if (s instanceof sr) {
            var d = s.__data__;
            if (!Cu || d.length < o - 1)
              return d.push([n, i]), this.size = ++s.size, this;
            s = this.__data__ = new ar(d);
          }
          return s.set(n, i), this.size = s.size, this;
        }
        Bn.prototype.clear = ab, Bn.prototype.delete = lb, Bn.prototype.get = cb, Bn.prototype.has = fb, Bn.prototype.set = db;
        function lf(n, i) {
          var s = Pe(n), d = !s && ii(n), m = !s && !d && Tr(n), I = !s && !d && !m && Mi(n), x = s || d || m || I, R = x ? xa(n.length, xm) : [], _ = R.length;
          for (var Z in n)
            (i || $e.call(n, Z)) && !(x && // Safari 9 has enumerable `arguments.length` in strict mode.
            (Z == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            m && (Z == "offset" || Z == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            I && (Z == "buffer" || Z == "byteLength" || Z == "byteOffset") || // Skip index properties.
            dr(Z, _))) && R.push(Z);
          return R;
        }
        function cf(n) {
          var i = n.length;
          return i ? n[Na(0, i - 1)] : r;
        }
        function pb(n, i) {
          return is(Qt(n), ei(i, 0, n.length));
        }
        function hb(n) {
          return is(Qt(n));
        }
        function Pa(n, i, s) {
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
        function gb(n, i, s, d) {
          return Fr(n, function(m, I, x) {
            i(d, m, s(m), x);
          }), d;
        }
        function ff(n, i) {
          return n && Hn(i, Rt(i), n);
        }
        function mb(n, i) {
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
        function Oa(n, i) {
          for (var s = -1, d = i.length, m = M(d), I = n == null; ++s < d; )
            m[s] = I ? r : cl(n, i[s]);
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
          var Y = Pe(n);
          if (Y) {
            if (x = iy(n), !R)
              return Qt(n, x);
          } else {
            var Q = _t(n), ie = Q == ce || Q == we;
            if (Tr(n))
              return Lf(n, R);
            if (Q == Yt || Q == be || ie && !m) {
              if (x = _ || ie ? {} : ed(n), !R)
                return _ ? Jb(n, mb(x, n)) : Yb(n, ff(x, n));
            } else {
              if (!Ke[Q])
                return m ? n : {};
              x = uy(n, Q, R);
            }
          }
          I || (I = new Bn());
          var fe = I.get(n);
          if (fe)
            return fe;
          I.set(n, x), Pd(n) ? n.forEach(function(Ce) {
            x.add(Cn(Ce, i, s, Ce, n, I));
          }) : Fd(n) && n.forEach(function(Ce, Ve) {
            x.set(Ve, Cn(Ce, i, s, Ve, n, I));
          });
          var Ie = Z ? _ ? Qa : ja : _ ? $t : Rt, Le = Y ? r : Ie(n);
          return yn(Le || n, function(Ce, Ve) {
            Le && (Ve = Ce, Ce = n[Ve]), Su(x, Ve, Cn(Ce, i, s, Ve, n, I));
          }), x;
        }
        function bb(n) {
          var i = Rt(n);
          return function(s) {
            return df(s, n, i);
          };
        }
        function df(n, i, s) {
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
        function pf(n, i, s) {
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
          s && (i = lt(i, an(s))), d ? (I = ma, x = !1) : i.length >= o && (I = vu, x = !1, i = new Kr(i));
          e:
            for (; ++m < R; ) {
              var Y = n[m], Q = s == null ? Y : s(Y);
              if (Y = d || Y !== 0 ? Y : 0, x && Q === Q) {
                for (var ie = Z; ie--; )
                  if (i[ie] === Q)
                    continue e;
                _.push(Y);
              } else I(i, Q, d) || _.push(Y);
            }
          return _;
        }
        var Fr = Vf(Xn), hf = Vf(Ba, !0);
        function yb(n, i) {
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
        function vb(n, i, s, d) {
          var m = n.length;
          for (s = Ge(s), s < 0 && (s = -s > m ? 0 : m + s), d = d === r || d > m ? m : Ge(d), d < 0 && (d += m), d = s > d ? 0 : Td(d); s < d; )
            n[s++] = i;
          return n;
        }
        function gf(n, i) {
          var s = [];
          return Fr(n, function(d, m, I) {
            i(d, m, I) && s.push(d);
          }), s;
        }
        function Pt(n, i, s, d, m) {
          var I = -1, x = n.length;
          for (s || (s = sy), m || (m = []); ++I < x; ) {
            var R = n[I];
            i > 0 && s(R) ? i > 1 ? Pt(R, i - 1, s, d, m) : wr(m, R) : d || (m[m.length] = R);
          }
          return m;
        }
        var Ta = Wf(), mf = Wf(!0);
        function Xn(n, i) {
          return n && Ta(n, i, Rt);
        }
        function Ba(n, i) {
          return n && mf(n, i, Rt);
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
        function bf(n, i, s) {
          var d = i(n);
          return Pe(n) ? d : wr(d, s(n));
        }
        function Wt(n) {
          return n == null ? n === r ? au : rn : qr && qr in it(n) ? ty(n) : hy(n);
        }
        function _a(n, i) {
          return n > i;
        }
        function Ib(n, i) {
          return n != null && $e.call(n, i);
        }
        function Cb(n, i) {
          return n != null && i in it(n);
        }
        function xb(n, i, s) {
          return n >= Bt(i, s) && n < St(i, s);
        }
        function Ga(n, i, s) {
          for (var d = s ? ma : Ro, m = n[0].length, I = n.length, x = I, R = M(I), _ = 1 / 0, Z = []; x--; ) {
            var Y = n[x];
            x && i && (Y = lt(Y, an(i))), _ = Bt(Y.length, _), R[x] = !s && (i || m >= 120 && Y.length >= 120) ? new Kr(x && Y) : r;
          }
          Y = n[0];
          var Q = -1, ie = R[0];
          e:
            for (; ++Q < m && Z.length < _; ) {
              var fe = Y[Q], Ie = i ? i(fe) : fe;
              if (fe = s || fe !== 0 ? fe : 0, !(ie ? vu(ie, Ie) : d(Z, Ie, s))) {
                for (x = I; --x; ) {
                  var Le = R[x];
                  if (!(Le ? vu(Le, Ie) : d(n[x], Ie, s)))
                    continue e;
                }
                ie && ie.push(Ie), Z.push(fe);
              }
            }
          return Z;
        }
        function Ab(n, i, s, d) {
          return Xn(n, function(m, I, x) {
            i(d, s(m), I, x);
          }), d;
        }
        function Fu(n, i, s) {
          i = Pr(i, n), n = id(n, i);
          var d = n == null ? n : n[zn(An(i))];
          return d == null ? r : Ft(d, n, s);
        }
        function yf(n) {
          return dt(n) && Wt(n) == be;
        }
        function wb(n) {
          return dt(n) && Wt(n) == K;
        }
        function Sb(n) {
          return dt(n) && Wt(n) == ft;
        }
        function Ru(n, i, s, d, m) {
          return n === i ? !0 : n == null || i == null || !dt(n) && !dt(i) ? n !== n && i !== i : Eb(n, i, s, d, Ru, m);
        }
        function Eb(n, i, s, d, m, I) {
          var x = Pe(n), R = Pe(i), _ = x ? De : _t(n), Z = R ? De : _t(i);
          _ = _ == be ? Yt : _, Z = Z == be ? Yt : Z;
          var Y = _ == Yt, Q = Z == Yt, ie = _ == Z;
          if (ie && Tr(n)) {
            if (!Tr(i))
              return !1;
            x = !0, Y = !1;
          }
          if (ie && !Y)
            return I || (I = new Bn()), x || Mi(n) ? qf(n, i, s, d, m, I) : Kb(n, i, _, s, d, m, I);
          if (!(s & P)) {
            var fe = Y && $e.call(n, "__wrapped__"), Ie = Q && $e.call(i, "__wrapped__");
            if (fe || Ie) {
              var Le = fe ? n.value() : n, Ce = Ie ? i.value() : i;
              return I || (I = new Bn()), m(Le, Ce, s, d, I);
            }
          }
          return ie ? (I || (I = new Bn()), ey(n, i, s, d, m, I)) : !1;
        }
        function Fb(n) {
          return dt(n) && _t(n) == Fe;
        }
        function La(n, i, s, d) {
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
              var Q = new Bn();
              if (d)
                var ie = d(Z, Y, _, n, i, Q);
              if (!(ie === r ? Ru(Y, Z, P | A, d, Q) : ie))
                return !1;
            }
          }
          return !0;
        }
        function vf(n) {
          if (!ct(n) || ly(n))
            return !1;
          var i = pr(n) ? Fm : ea;
          return i.test(ri(n));
        }
        function Rb(n) {
          return dt(n) && Wt(n) == Nn;
        }
        function Pb(n) {
          return dt(n) && _t(n) == Mt;
        }
        function Ob(n) {
          return dt(n) && cs(n.length) && !!tt[Wt(n)];
        }
        function If(n) {
          return typeof n == "function" ? n : n == null ? Kt : typeof n == "object" ? Pe(n) ? Af(n[0], n[1]) : xf(n) : Xd(n);
        }
        function ka(n) {
          if (!Tu(n))
            return _m(n);
          var i = [];
          for (var s in it(n))
            $e.call(n, s) && s != "constructor" && i.push(s);
          return i;
        }
        function Tb(n) {
          if (!ct(n))
            return py(n);
          var i = Tu(n), s = [];
          for (var d in n)
            d == "constructor" && (i || !$e.call(n, d)) || s.push(d);
          return s;
        }
        function Da(n, i) {
          return n < i;
        }
        function Cf(n, i) {
          var s = -1, d = qt(n) ? M(n.length) : [];
          return Fr(n, function(m, I, x) {
            d[++s] = i(m, I, x);
          }), d;
        }
        function xf(n) {
          var i = $a(n);
          return i.length == 1 && i[0][2] ? nd(i[0][0], i[0][1]) : function(s) {
            return s === n || La(s, n, i);
          };
        }
        function Af(n, i) {
          return el(n) && td(i) ? nd(zn(n), i) : function(s) {
            var d = cl(s, n);
            return d === r && d === i ? fl(s, n) : Ru(i, d, P | A);
          };
        }
        function Uo(n, i, s, d, m) {
          n !== i && Ta(i, function(I, x) {
            if (m || (m = new Bn()), ct(I))
              Bb(n, i, x, s, Uo, d, m);
            else {
              var R = d ? d(nl(n, x), I, x + "", n, i, m) : r;
              R === r && (R = I), Pa(n, x, R);
            }
          }, $t);
        }
        function Bb(n, i, s, d, m, I, x) {
          var R = nl(n, s), _ = nl(i, s), Z = x.get(_);
          if (Z) {
            Pa(n, s, Z);
            return;
          }
          var Y = I ? I(R, _, s + "", n, i, x) : r, Q = Y === r;
          if (Q) {
            var ie = Pe(_), fe = !ie && Tr(_), Ie = !ie && !fe && Mi(_);
            Y = _, ie || fe || Ie ? Pe(R) ? Y = R : mt(R) ? Y = Qt(R) : fe ? (Q = !1, Y = Lf(_, !0)) : Ie ? (Q = !1, Y = kf(_, !0)) : Y = [] : _u(_) || ii(_) ? (Y = R, ii(R) ? Y = Bd(R) : (!ct(R) || pr(R)) && (Y = ed(_))) : Q = !1;
          }
          Q && (x.set(_, Y), m(Y, _, d, I, x), x.delete(_)), Pa(n, s, Y);
        }
        function wf(n, i) {
          var s = n.length;
          if (s)
            return i += i < 0 ? s : 0, dr(i, s) ? n[i] : r;
        }
        function Sf(n, i, s) {
          i.length ? i = lt(i, function(I) {
            return Pe(I) ? function(x) {
              return ti(x, I.length === 1 ? I[0] : I);
            } : I;
          }) : i = [Kt];
          var d = -1;
          i = lt(i, an(ye()));
          var m = Cf(n, function(I, x, R) {
            var _ = lt(i, function(Z) {
              return Z(I);
            });
            return { criteria: _, index: ++d, value: I };
          });
          return um(m, function(I, x) {
            return Zb(I, x, s);
          });
        }
        function _b(n, i) {
          return Ef(n, i, function(s, d) {
            return fl(n, d);
          });
        }
        function Ef(n, i, s) {
          for (var d = -1, m = i.length, I = {}; ++d < m; ) {
            var x = i[d], R = ti(n, x);
            s(R, x) && Pu(I, Pr(x, n), R);
          }
          return I;
        }
        function Gb(n) {
          return function(i) {
            return ti(i, n);
          };
        }
        function Ma(n, i, s, d) {
          var m = d ? im : Fi, I = -1, x = i.length, R = n;
          for (n === i && (i = Qt(i)), s && (R = lt(n, an(s))); ++I < x; )
            for (var _ = 0, Z = i[I], Y = s ? s(Z) : Z; (_ = m(R, Y, _, d)) > -1; )
              R !== n && Mo.call(R, _, 1), Mo.call(n, _, 1);
          return n;
        }
        function Ff(n, i) {
          for (var s = n ? i.length : 0, d = s - 1; s--; ) {
            var m = i[s];
            if (s == d || m !== I) {
              var I = m;
              dr(m) ? Mo.call(n, m, 1) : Xa(n, m);
            }
          }
          return n;
        }
        function Na(n, i) {
          return n + Wo(sf() * (i - n + 1));
        }
        function Lb(n, i, s, d) {
          for (var m = -1, I = St(Vo((i - n) / (s || 1)), 0), x = M(I); I--; )
            x[d ? I : ++m] = n, n += s;
          return x;
        }
        function Va(n, i) {
          var s = "";
          if (!n || i < 1 || i > de)
            return s;
          do
            i % 2 && (s += n), i = Wo(i / 2), i && (n += n);
          while (i);
          return s;
        }
        function Me(n, i) {
          return rl(rd(n, i, Kt), n + "");
        }
        function kb(n) {
          return cf(Ni(n));
        }
        function Db(n, i) {
          var s = Ni(n);
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
        var Rf = Xo ? function(n, i) {
          return Xo.set(n, i), n;
        } : Kt, Mb = No ? function(n, i) {
          return No(n, "toString", {
            configurable: !0,
            enumerable: !1,
            value: pl(i),
            writable: !0
          });
        } : Kt;
        function Nb(n) {
          return is(Ni(n));
        }
        function xn(n, i, s) {
          var d = -1, m = n.length;
          i < 0 && (i = -i > m ? 0 : m + i), s = s > m ? m : s, s < 0 && (s += m), m = i > s ? 0 : s - i >>> 0, i >>>= 0;
          for (var I = M(m); ++d < m; )
            I[d] = n[d + i];
          return I;
        }
        function Vb(n, i) {
          var s;
          return Fr(n, function(d, m, I) {
            return s = i(d, m, I), !s;
          }), !!s;
        }
        function jo(n, i, s) {
          var d = 0, m = n == null ? d : n.length;
          if (typeof i == "number" && i === i && m <= S) {
            for (; d < m; ) {
              var I = d + m >>> 1, x = n[I];
              x !== null && !cn(x) && (s ? x <= i : x < i) ? d = I + 1 : m = I;
            }
            return m;
          }
          return Wa(n, i, Kt, s);
        }
        function Wa(n, i, s, d) {
          var m = 0, I = n == null ? 0 : n.length;
          if (I === 0)
            return 0;
          i = s(i);
          for (var x = i !== i, R = i === null, _ = cn(i), Z = i === r; m < I; ) {
            var Y = Wo((m + I) / 2), Q = s(n[Y]), ie = Q !== r, fe = Q === null, Ie = Q === Q, Le = cn(Q);
            if (x)
              var Ce = d || Ie;
            else Z ? Ce = Ie && (d || ie) : R ? Ce = Ie && ie && (d || !fe) : _ ? Ce = Ie && ie && !fe && (d || !Le) : fe || Le ? Ce = !1 : Ce = d ? Q <= i : Q < i;
            Ce ? m = Y + 1 : I = Y;
          }
          return Bt(I, Ee);
        }
        function Pf(n, i) {
          for (var s = -1, d = n.length, m = 0, I = []; ++s < d; ) {
            var x = n[s], R = i ? i(x) : x;
            if (!s || !_n(R, _)) {
              var _ = R;
              I[m++] = x === 0 ? 0 : x;
            }
          }
          return I;
        }
        function Of(n) {
          return typeof n == "number" ? n : cn(n) ? w : +n;
        }
        function ln(n) {
          if (typeof n == "string")
            return n;
          if (Pe(n))
            return lt(n, ln) + "";
          if (cn(n))
            return af ? af.call(n) : "";
          var i = n + "";
          return i == "0" && 1 / n == -1 / 0 ? "-0" : i;
        }
        function Rr(n, i, s) {
          var d = -1, m = Ro, I = n.length, x = !0, R = [], _ = R;
          if (s)
            x = !1, m = ma;
          else if (I >= o) {
            var Z = i ? null : qb(n);
            if (Z)
              return Oo(Z);
            x = !1, m = vu, _ = new Kr();
          } else
            _ = i ? [] : R;
          e:
            for (; ++d < I; ) {
              var Y = n[d], Q = i ? i(Y) : Y;
              if (Y = s || Y !== 0 ? Y : 0, x && Q === Q) {
                for (var ie = _.length; ie--; )
                  if (_[ie] === Q)
                    continue e;
                i && _.push(Q), R.push(Y);
              } else m(_, Q, s) || (_ !== R && _.push(Q), R.push(Y));
            }
          return R;
        }
        function Xa(n, i) {
          return i = Pr(i, n), n = id(n, i), n == null || delete n[zn(An(i))];
        }
        function Tf(n, i, s, d) {
          return Pu(n, i, s(ti(n, i)), d);
        }
        function Qo(n, i, s, d) {
          for (var m = n.length, I = d ? m : -1; (d ? I-- : ++I < m) && i(n[I], I, n); )
            ;
          return s ? xn(n, d ? 0 : I, d ? I + 1 : m) : xn(n, d ? I + 1 : 0, d ? m : I);
        }
        function Bf(n, i) {
          var s = n;
          return s instanceof Xe && (s = s.value()), ba(i, function(d, m) {
            return m.func.apply(m.thisArg, wr([d], m.args));
          }, s);
        }
        function Ha(n, i, s) {
          var d = n.length;
          if (d < 2)
            return d ? Rr(n[0]) : [];
          for (var m = -1, I = M(d); ++m < d; )
            for (var x = n[m], R = -1; ++R < d; )
              R != m && (I[m] = Eu(I[m] || x, n[R], i, s));
          return Rr(Pt(I, 1), i, s);
        }
        function _f(n, i, s) {
          for (var d = -1, m = n.length, I = i.length, x = {}; ++d < m; ) {
            var R = d < I ? i[d] : r;
            s(x, n[d], R);
          }
          return x;
        }
        function za(n) {
          return mt(n) ? n : [];
        }
        function Za(n) {
          return typeof n == "function" ? n : Kt;
        }
        function Pr(n, i) {
          return Pe(n) ? n : el(n, i) ? [n] : ad(Qe(n));
        }
        var Wb = Me;
        function Or(n, i, s) {
          var d = n.length;
          return s = s === r ? d : s, !i && s >= d ? n : xn(n, i, s);
        }
        var Gf = Rm || function(n) {
          return He.clearTimeout(n);
        };
        function Lf(n, i) {
          if (i)
            return n.slice();
          var s = n.length, d = tf ? tf(s) : new n.constructor(s);
          return n.copy(d), d;
        }
        function Ya(n) {
          var i = new n.constructor(n.byteLength);
          return new ko(i).set(new ko(n)), i;
        }
        function Xb(n, i) {
          var s = i ? Ya(n.buffer) : n.buffer;
          return new n.constructor(s, n.byteOffset, n.byteLength);
        }
        function Hb(n) {
          var i = new n.constructor(n.source, mn.exec(n));
          return i.lastIndex = n.lastIndex, i;
        }
        function zb(n) {
          return wu ? it(wu.call(n)) : {};
        }
        function kf(n, i) {
          var s = i ? Ya(n.buffer) : n.buffer;
          return new n.constructor(s, n.byteOffset, n.length);
        }
        function Df(n, i) {
          if (n !== i) {
            var s = n !== r, d = n === null, m = n === n, I = cn(n), x = i !== r, R = i === null, _ = i === i, Z = cn(i);
            if (!R && !Z && !I && n > i || I && x && _ && !R && !Z || d && x && _ || !s && _ || !m)
              return 1;
            if (!d && !I && !Z && n < i || Z && s && m && !d && !I || R && s && m || !x && m || !_)
              return -1;
          }
          return 0;
        }
        function Zb(n, i, s) {
          for (var d = -1, m = n.criteria, I = i.criteria, x = m.length, R = s.length; ++d < x; ) {
            var _ = Df(m[d], I[d]);
            if (_) {
              if (d >= R)
                return _;
              var Z = s[d];
              return _ * (Z == "desc" ? -1 : 1);
            }
          }
          return n.index - i.index;
        }
        function Mf(n, i, s, d) {
          for (var m = -1, I = n.length, x = s.length, R = -1, _ = i.length, Z = St(I - x, 0), Y = M(_ + Z), Q = !d; ++R < _; )
            Y[R] = i[R];
          for (; ++m < x; )
            (Q || m < I) && (Y[s[m]] = n[m]);
          for (; Z--; )
            Y[R++] = n[m++];
          return Y;
        }
        function Nf(n, i, s, d) {
          for (var m = -1, I = n.length, x = -1, R = s.length, _ = -1, Z = i.length, Y = St(I - R, 0), Q = M(Y + Z), ie = !d; ++m < Y; )
            Q[m] = n[m];
          for (var fe = m; ++_ < Z; )
            Q[fe + _] = i[_];
          for (; ++x < R; )
            (ie || m < I) && (Q[fe + s[x]] = n[m++]);
          return Q;
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
        function Yb(n, i) {
          return Hn(n, Ka(n), i);
        }
        function Jb(n, i) {
          return Hn(n, $f(n), i);
        }
        function qo(n, i) {
          return function(s, d) {
            var m = Pe(s) ? $g : gb, I = i ? i() : {};
            return m(s, n, ye(d, 2), I);
          };
        }
        function Li(n) {
          return Me(function(i, s) {
            var d = -1, m = s.length, I = m > 1 ? s[m - 1] : r, x = m > 2 ? s[2] : r;
            for (I = n.length > 3 && typeof I == "function" ? (m--, I) : r, x && Xt(s[0], s[1], x) && (I = m < 3 ? r : I, m = 1), i = it(i); ++d < m; ) {
              var R = s[d];
              R && n(i, R, d, I);
            }
            return i;
          });
        }
        function Vf(n, i) {
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
        function Wf(n) {
          return function(i, s, d) {
            for (var m = -1, I = it(i), x = d(i), R = x.length; R--; ) {
              var _ = x[n ? R : ++m];
              if (s(I[_], _, I) === !1)
                break;
            }
            return i;
          };
        }
        function Ub(n, i, s) {
          var d = i & E, m = Ou(n);
          function I() {
            var x = this && this !== He && this instanceof I ? m : n;
            return x.apply(d ? s : this, arguments);
          }
          return I;
        }
        function Xf(n) {
          return function(i) {
            i = Qe(i);
            var s = Ri(i) ? Tn(i) : r, d = s ? s[0] : i.charAt(0), m = s ? Or(s, 1).join("") : i.slice(1);
            return d[n]() + m;
          };
        }
        function ki(n) {
          return function(i) {
            return ba(Vd(Nd(i).replace(bu, "")), n, "");
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
            var s = Gi(n.prototype), d = n.apply(s, i);
            return ct(d) ? d : s;
          };
        }
        function jb(n, i, s) {
          var d = Ou(n);
          function m() {
            for (var I = arguments.length, x = M(I), R = I, _ = Di(m); R--; )
              x[R] = arguments[R];
            var Z = I < 3 && x[0] !== _ && x[I - 1] !== _ ? [] : Sr(x, _);
            if (I -= Z.length, I < s)
              return Jf(
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
            var Y = this && this !== He && this instanceof m ? d : n;
            return Ft(Y, this, x);
          }
          return m;
        }
        function Hf(n) {
          return function(i, s, d) {
            var m = it(i);
            if (!qt(i)) {
              var I = ye(s, 3);
              i = Rt(i), s = function(R) {
                return I(m[R], R, m);
              };
            }
            var x = n(i, s, d);
            return x > -1 ? m[I ? i[x] : x] : r;
          };
        }
        function zf(n) {
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
              var R = ns(I), _ = R == "wrapper" ? qa(I) : r;
              _ && tl(_[0]) && _[1] == (H | L | X | z) && !_[4].length && _[9] == 1 ? x = x[ns(_[0])].apply(x, _[3]) : x = I.length == 1 && tl(I) ? x[R]() : x.thru(I);
            }
            return function() {
              var Z = arguments, Y = Z[0];
              if (x && Z.length == 1 && Pe(Y))
                return x.plant(Y).value();
              for (var Q = 0, ie = s ? i[Q].apply(this, Z) : Y; ++Q < s; )
                ie = i[Q].call(this, ie);
              return ie;
            };
          });
        }
        function $o(n, i, s, d, m, I, x, R, _, Z) {
          var Y = i & H, Q = i & E, ie = i & F, fe = i & (L | D), Ie = i & N, Le = ie ? r : Ou(n);
          function Ce() {
            for (var Ve = arguments.length, ze = M(Ve), fn = Ve; fn--; )
              ze[fn] = arguments[fn];
            if (fe)
              var Ht = Di(Ce), dn = sm(ze, Ht);
            if (d && (ze = Mf(ze, d, m, fe)), I && (ze = Nf(ze, I, x, fe)), Ve -= dn, fe && Ve < Z) {
              var bt = Sr(ze, Ht);
              return Jf(
                n,
                i,
                $o,
                Ce.placeholder,
                s,
                ze,
                bt,
                R,
                _,
                Z - Ve
              );
            }
            var Gn = Q ? s : this, gr = ie ? Gn[n] : n;
            return Ve = ze.length, R ? ze = gy(ze, R) : Ie && Ve > 1 && ze.reverse(), Y && _ < Ve && (ze.length = _), this && this !== He && this instanceof Ce && (gr = Le || Ou(gr)), gr.apply(Gn, ze);
          }
          return Ce;
        }
        function Zf(n, i) {
          return function(s, d) {
            return Ab(s, n, i(d), {});
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
              typeof s == "string" || typeof d == "string" ? (s = ln(s), d = ln(d)) : (s = Of(s), d = Of(d)), m = n(s, d);
            }
            return m;
          };
        }
        function Ja(n) {
          return fr(function(i) {
            return i = lt(i, an(ye())), Me(function(s) {
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
            return s ? Va(i, n) : i;
          var d = Va(i, Vo(n / Pi(i)));
          return Ri(i) ? Or(Tn(d), 0, n).join("") : d.slice(0, n);
        }
        function Qb(n, i, s, d) {
          var m = i & E, I = Ou(n);
          function x() {
            for (var R = -1, _ = arguments.length, Z = -1, Y = d.length, Q = M(Y + _), ie = this && this !== He && this instanceof x ? I : n; ++Z < Y; )
              Q[Z] = d[Z];
            for (; _--; )
              Q[Z++] = arguments[++R];
            return Ft(ie, m ? s : this, Q);
          }
          return x;
        }
        function Yf(n) {
          return function(i, s, d) {
            return d && typeof d != "number" && Xt(i, s, d) && (s = d = r), i = hr(i), s === r ? (s = i, i = 0) : s = hr(s), d = d === r ? i < s ? 1 : -1 : hr(d), Lb(i, s, d, n);
          };
        }
        function ts(n) {
          return function(i, s) {
            return typeof i == "string" && typeof s == "string" || (i = wn(i), s = wn(s)), n(i, s);
          };
        }
        function Jf(n, i, s, d, m, I, x, R, _, Z) {
          var Y = i & L, Q = Y ? x : r, ie = Y ? r : x, fe = Y ? I : r, Ie = Y ? r : I;
          i |= Y ? X : G, i &= ~(Y ? G : X), i & k || (i &= -4);
          var Le = [
            n,
            i,
            m,
            fe,
            Q,
            Ie,
            ie,
            R,
            _,
            Z
          ], Ce = s.apply(r, Le);
          return tl(n) && ud(Ce, Le), Ce.placeholder = d, od(Ce, n, i);
        }
        function Ua(n) {
          var i = wt[n];
          return function(s, d) {
            if (s = wn(s), d = d == null ? 0 : Bt(Ge(d), 292), d && of(s)) {
              var m = (Qe(s) + "e").split("e"), I = i(m[0] + "e" + (+m[1] + d));
              return m = (Qe(I) + "e").split("e"), +(m[0] + "e" + (+m[1] - d));
            }
            return i(s);
          };
        }
        var qb = Bi && 1 / Oo(new Bi([, -0]))[1] == ee ? function(n) {
          return new Bi(n);
        } : ml;
        function Uf(n) {
          return function(i) {
            var s = _t(i);
            return s == Fe ? wa(i) : s == Mt ? hm(i) : om(i, n(i));
          };
        }
        function cr(n, i, s, d, m, I, x, R) {
          var _ = i & F;
          if (!_ && typeof n != "function")
            throw new vn(l);
          var Z = d ? d.length : 0;
          if (Z || (i &= -97, d = m = r), x = x === r ? x : St(Ge(x), 0), R = R === r ? R : Ge(R), Z -= m ? m.length : 0, i & G) {
            var Y = d, Q = m;
            d = m = r;
          }
          var ie = _ ? r : qa(n), fe = [
            n,
            i,
            s,
            d,
            m,
            Y,
            Q,
            I,
            x,
            R
          ];
          if (ie && dy(fe, ie), n = fe[0], i = fe[1], s = fe[2], d = fe[3], m = fe[4], R = fe[9] = fe[9] === r ? _ ? 0 : n.length : St(fe[9] - Z, 0), !R && i & (L | D) && (i &= -25), !i || i == E)
            var Ie = Ub(n, i, s);
          else i == L || i == D ? Ie = jb(n, i, R) : (i == X || i == (E | X)) && !m.length ? Ie = Qb(n, i, s, d) : Ie = $o.apply(r, fe);
          var Le = ie ? Rf : ud;
          return od(Le(Ie, fe), n, i);
        }
        function jf(n, i, s, d) {
          return n === r || _n(n, Ti[s]) && !$e.call(d, s) ? i : n;
        }
        function Qf(n, i, s, d, m, I) {
          return ct(n) && ct(i) && (I.set(i, n), Uo(n, i, r, Qf, I), I.delete(i)), n;
        }
        function $b(n) {
          return _u(n) ? r : n;
        }
        function qf(n, i, s, d, m, I) {
          var x = s & P, R = n.length, _ = i.length;
          if (R != _ && !(x && _ > R))
            return !1;
          var Z = I.get(n), Y = I.get(i);
          if (Z && Y)
            return Z == i && Y == n;
          var Q = -1, ie = !0, fe = s & A ? new Kr() : r;
          for (I.set(n, i), I.set(i, n); ++Q < R; ) {
            var Ie = n[Q], Le = i[Q];
            if (d)
              var Ce = x ? d(Le, Ie, Q, i, n, I) : d(Ie, Le, Q, n, i, I);
            if (Ce !== r) {
              if (Ce)
                continue;
              ie = !1;
              break;
            }
            if (fe) {
              if (!ya(i, function(Ve, ze) {
                if (!vu(fe, ze) && (Ie === Ve || m(Ie, Ve, s, d, I)))
                  return fe.push(ze);
              })) {
                ie = !1;
                break;
              }
            } else if (!(Ie === Le || m(Ie, Le, s, d, I))) {
              ie = !1;
              break;
            }
          }
          return I.delete(n), I.delete(i), ie;
        }
        function Kb(n, i, s, d, m, I, x) {
          switch (s) {
            case ge:
              if (n.byteLength != i.byteLength || n.byteOffset != i.byteOffset)
                return !1;
              n = n.buffer, i = i.buffer;
            case K:
              return !(n.byteLength != i.byteLength || !I(new ko(n), new ko(i)));
            case Ne:
            case ft:
            case vt:
              return _n(+n, +i);
            case se:
              return n.name == i.name && n.message == i.message;
            case Nn:
            case tr:
              return n == i + "";
            case Fe:
              var R = wa;
            case Mt:
              var _ = d & P;
              if (R || (R = Oo), n.size != i.size && !_)
                return !1;
              var Z = x.get(n);
              if (Z)
                return Z == i;
              d |= A, x.set(n, i);
              var Y = qf(R(n), R(i), d, m, I, x);
              return x.delete(n), Y;
            case Cr:
              if (wu)
                return wu.call(n) == wu.call(i);
          }
          return !1;
        }
        function ey(n, i, s, d, m, I) {
          var x = s & P, R = ja(n), _ = R.length, Z = ja(i), Y = Z.length;
          if (_ != Y && !x)
            return !1;
          for (var Q = _; Q--; ) {
            var ie = R[Q];
            if (!(x ? ie in i : $e.call(i, ie)))
              return !1;
          }
          var fe = I.get(n), Ie = I.get(i);
          if (fe && Ie)
            return fe == i && Ie == n;
          var Le = !0;
          I.set(n, i), I.set(i, n);
          for (var Ce = x; ++Q < _; ) {
            ie = R[Q];
            var Ve = n[ie], ze = i[ie];
            if (d)
              var fn = x ? d(ze, Ve, ie, i, n, I) : d(Ve, ze, ie, n, i, I);
            if (!(fn === r ? Ve === ze || m(Ve, ze, s, d, I) : fn)) {
              Le = !1;
              break;
            }
            Ce || (Ce = ie == "constructor");
          }
          if (Le && !Ce) {
            var Ht = n.constructor, dn = i.constructor;
            Ht != dn && "constructor" in n && "constructor" in i && !(typeof Ht == "function" && Ht instanceof Ht && typeof dn == "function" && dn instanceof dn) && (Le = !1);
          }
          return I.delete(n), I.delete(i), Le;
        }
        function fr(n) {
          return rl(rd(n, r, dd), n + "");
        }
        function ja(n) {
          return bf(n, Rt, Ka);
        }
        function Qa(n) {
          return bf(n, $t, $f);
        }
        var qa = Xo ? function(n) {
          return Xo.get(n);
        } : ml;
        function ns(n) {
          for (var i = n.name + "", s = _i[i], d = $e.call(_i, i) ? s.length : 0; d--; ) {
            var m = s[d], I = m.func;
            if (I == null || I == n)
              return m.name;
          }
          return i;
        }
        function Di(n) {
          var i = $e.call(y, "placeholder") ? y : n;
          return i.placeholder;
        }
        function ye() {
          var n = y.iteratee || hl;
          return n = n === hl ? If : n, arguments.length ? n(arguments[0], arguments[1]) : n;
        }
        function rs(n, i) {
          var s = n.__data__;
          return ay(i) ? s[typeof i == "string" ? "string" : "hash"] : s.map;
        }
        function $a(n) {
          for (var i = Rt(n), s = i.length; s--; ) {
            var d = i[s], m = n[d];
            i[s] = [d, m, td(m)];
          }
          return i;
        }
        function ni(n, i) {
          var s = fm(n, i);
          return vf(s) ? s : r;
        }
        function ty(n) {
          var i = $e.call(n, qr), s = n[qr];
          try {
            n[qr] = r;
            var d = !0;
          } catch {
          }
          var m = Go.call(n);
          return d && (i ? n[qr] = s : delete n[qr]), m;
        }
        var Ka = Ea ? function(n) {
          return n == null ? [] : (n = it(n), Ar(Ea(n), function(i) {
            return rf.call(n, i);
          }));
        } : bl, $f = Ea ? function(n) {
          for (var i = []; n; )
            wr(i, Ka(n)), n = Do(n);
          return i;
        } : bl, _t = Wt;
        (Fa && _t(new Fa(new ArrayBuffer(1))) != ge || Cu && _t(new Cu()) != Fe || Ra && _t(Ra.resolve()) != bi || Bi && _t(new Bi()) != Mt || xu && _t(new xu()) != nr) && (_t = function(n) {
          var i = Wt(n), s = i == Yt ? n.constructor : r, d = s ? ri(s) : "";
          if (d)
            switch (d) {
              case Dm:
                return ge;
              case Mm:
                return Fe;
              case Nm:
                return bi;
              case Vm:
                return Mt;
              case Wm:
                return nr;
            }
          return i;
        });
        function ny(n, i, s) {
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
                i = Bt(i, n + x);
                break;
              case "takeRight":
                n = St(n, i - x);
                break;
            }
          }
          return { start: n, end: i };
        }
        function ry(n) {
          var i = n.match(ir);
          return i ? i[1].split(Js) : [];
        }
        function Kf(n, i, s) {
          i = Pr(i, n);
          for (var d = -1, m = i.length, I = !1; ++d < m; ) {
            var x = zn(i[d]);
            if (!(I = n != null && s(n, x)))
              break;
            n = n[x];
          }
          return I || ++d != m ? I : (m = n == null ? 0 : n.length, !!m && cs(m) && dr(x, m) && (Pe(n) || ii(n)));
        }
        function iy(n) {
          var i = n.length, s = new n.constructor(i);
          return i && typeof n[0] == "string" && $e.call(n, "index") && (s.index = n.index, s.input = n.input), s;
        }
        function ed(n) {
          return typeof n.constructor == "function" && !Tu(n) ? Gi(Do(n)) : {};
        }
        function uy(n, i, s) {
          var d = n.constructor;
          switch (i) {
            case K:
              return Ya(n);
            case Ne:
            case ft:
              return new d(+n);
            case ge:
              return Xb(n, s);
            case Te:
            case Be:
            case Et:
            case Jt:
            case Nt:
            case gn:
            case Ut:
            case It:
            case un:
              return kf(n, s);
            case Fe:
              return new d();
            case vt:
            case tr:
              return new d(n);
            case Nn:
              return Hb(n);
            case Mt:
              return new d();
            case Cr:
              return zb(n);
          }
        }
        function oy(n, i) {
          var s = i.length;
          if (!s)
            return n;
          var d = s - 1;
          return i[d] = (s > 1 ? "& " : "") + i[d], i = i.join(s > 2 ? ", " : " "), n.replace(hu, `{
/* [wrapped with ` + i + `] */
`);
        }
        function sy(n) {
          return Pe(n) || ii(n) || !!(uf && n && n[uf]);
        }
        function dr(n, i) {
          var s = typeof n;
          return i = i ?? de, !!i && (s == "number" || s != "symbol" && na.test(n)) && n > -1 && n % 1 == 0 && n < i;
        }
        function Xt(n, i, s) {
          if (!ct(s))
            return !1;
          var d = typeof i;
          return (d == "number" ? qt(s) && dr(i, s.length) : d == "string" && i in s) ? _n(s[i], n) : !1;
        }
        function el(n, i) {
          if (Pe(n))
            return !1;
          var s = typeof n;
          return s == "number" || s == "symbol" || s == "boolean" || n == null || cn(n) ? !0 : zs.test(n) || !Zr.test(n) || i != null && n in it(i);
        }
        function ay(n) {
          var i = typeof n;
          return i == "string" || i == "number" || i == "symbol" || i == "boolean" ? n !== "__proto__" : n === null;
        }
        function tl(n) {
          var i = ns(n), s = y[i];
          if (typeof s != "function" || !(i in Xe.prototype))
            return !1;
          if (n === s)
            return !0;
          var d = qa(s);
          return !!d && n === d[0];
        }
        function ly(n) {
          return !!ef && ef in n;
        }
        var cy = Bo ? pr : yl;
        function Tu(n) {
          var i = n && n.constructor, s = typeof i == "function" && i.prototype || Ti;
          return n === s;
        }
        function td(n) {
          return n === n && !ct(n);
        }
        function nd(n, i) {
          return function(s) {
            return s == null ? !1 : s[n] === i && (i !== r || n in it(s));
          };
        }
        function fy(n) {
          var i = as(n, function(d) {
            return s.size === p && s.clear(), d;
          }), s = i.cache;
          return i;
        }
        function dy(n, i) {
          var s = n[1], d = i[1], m = s | d, I = m < (E | F | H), x = d == H && s == L || d == H && s == z && n[7].length <= i[8] || d == (H | z) && i[7].length <= i[8] && s == L;
          if (!(I || x))
            return n;
          d & E && (n[2] = i[2], m |= s & E ? 0 : k);
          var R = i[3];
          if (R) {
            var _ = n[3];
            n[3] = _ ? Mf(_, R, i[4]) : R, n[4] = _ ? Sr(n[3], h) : i[4];
          }
          return R = i[5], R && (_ = n[5], n[5] = _ ? Nf(_, R, i[6]) : R, n[6] = _ ? Sr(n[5], h) : i[6]), R = i[7], R && (n[7] = R), d & H && (n[8] = n[8] == null ? i[8] : Bt(n[8], i[8])), n[9] == null && (n[9] = i[9]), n[0] = i[0], n[1] = m, n;
        }
        function py(n) {
          var i = [];
          if (n != null)
            for (var s in it(n))
              i.push(s);
          return i;
        }
        function hy(n) {
          return Go.call(n);
        }
        function rd(n, i, s) {
          return i = St(i === r ? n.length - 1 : i, 0), function() {
            for (var d = arguments, m = -1, I = St(d.length - i, 0), x = M(I); ++m < I; )
              x[m] = d[i + m];
            m = -1;
            for (var R = M(i + 1); ++m < i; )
              R[m] = d[m];
            return R[i] = s(x), Ft(n, this, R);
          };
        }
        function id(n, i) {
          return i.length < 2 ? n : ti(n, xn(i, 0, -1));
        }
        function gy(n, i) {
          for (var s = n.length, d = Bt(i.length, s), m = Qt(n); d--; ) {
            var I = i[d];
            n[d] = dr(I, s) ? m[I] : r;
          }
          return n;
        }
        function nl(n, i) {
          if (!(i === "constructor" && typeof n[i] == "function") && i != "__proto__")
            return n[i];
        }
        var ud = sd(Rf), Bu = Om || function(n, i) {
          return He.setTimeout(n, i);
        }, rl = sd(Mb);
        function od(n, i, s) {
          var d = i + "";
          return rl(n, oy(d, my(ry(d), s)));
        }
        function sd(n) {
          var i = 0, s = 0;
          return function() {
            var d = Gm(), m = ne - (d - s);
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
            var I = Na(s, m), x = n[I];
            n[I] = n[s], n[s] = x;
          }
          return n.length = i, n;
        }
        var ad = fy(function(n) {
          var i = [];
          return n.charCodeAt(0) === 46 && i.push(""), n.replace(Zs, function(s, d, m, I) {
            i.push(m ? I.replace(Qs, "$1") : d || s);
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
        function my(n, i) {
          return yn(Je, function(s) {
            var d = "_." + s[0];
            i & s[1] && !Ro(n, d) && n.push(d);
          }), n.sort();
        }
        function ld(n) {
          if (n instanceof Xe)
            return n.clone();
          var i = new In(n.__wrapped__, n.__chain__);
          return i.__actions__ = Qt(n.__actions__), i.__index__ = n.__index__, i.__values__ = n.__values__, i;
        }
        function by(n, i, s) {
          (s ? Xt(n, i, s) : i === r) ? i = 1 : i = St(Ge(i), 0);
          var d = n == null ? 0 : n.length;
          if (!d || i < 1)
            return [];
          for (var m = 0, I = 0, x = M(Vo(d / i)); m < d; )
            x[I++] = xn(n, m, m += i);
          return x;
        }
        function yy(n) {
          for (var i = -1, s = n == null ? 0 : n.length, d = 0, m = []; ++i < s; ) {
            var I = n[i];
            I && (m[d++] = I);
          }
          return m;
        }
        function vy() {
          var n = arguments.length;
          if (!n)
            return [];
          for (var i = M(n - 1), s = arguments[0], d = n; d--; )
            i[d - 1] = arguments[d];
          return wr(Pe(s) ? Qt(s) : [s], Pt(i, 1));
        }
        var Iy = Me(function(n, i) {
          return mt(n) ? Eu(n, Pt(i, 1, mt, !0)) : [];
        }), Cy = Me(function(n, i) {
          var s = An(i);
          return mt(s) && (s = r), mt(n) ? Eu(n, Pt(i, 1, mt, !0), ye(s, 2)) : [];
        }), xy = Me(function(n, i) {
          var s = An(i);
          return mt(s) && (s = r), mt(n) ? Eu(n, Pt(i, 1, mt, !0), r, s) : [];
        });
        function Ay(n, i, s) {
          var d = n == null ? 0 : n.length;
          return d ? (i = s || i === r ? 1 : Ge(i), xn(n, i < 0 ? 0 : i, d)) : [];
        }
        function wy(n, i, s) {
          var d = n == null ? 0 : n.length;
          return d ? (i = s || i === r ? 1 : Ge(i), i = d - i, xn(n, 0, i < 0 ? 0 : i)) : [];
        }
        function Sy(n, i) {
          return n && n.length ? Qo(n, ye(i, 3), !0, !0) : [];
        }
        function Ey(n, i) {
          return n && n.length ? Qo(n, ye(i, 3), !0) : [];
        }
        function Fy(n, i, s, d) {
          var m = n == null ? 0 : n.length;
          return m ? (s && typeof s != "number" && Xt(n, i, s) && (s = 0, d = m), vb(n, i, s, d)) : [];
        }
        function cd(n, i, s) {
          var d = n == null ? 0 : n.length;
          if (!d)
            return -1;
          var m = s == null ? 0 : Ge(s);
          return m < 0 && (m = St(d + m, 0)), Po(n, ye(i, 3), m);
        }
        function fd(n, i, s) {
          var d = n == null ? 0 : n.length;
          if (!d)
            return -1;
          var m = d - 1;
          return s !== r && (m = Ge(s), m = s < 0 ? St(d + m, 0) : Bt(m, d - 1)), Po(n, ye(i, 3), m, !0);
        }
        function dd(n) {
          var i = n == null ? 0 : n.length;
          return i ? Pt(n, 1) : [];
        }
        function Ry(n) {
          var i = n == null ? 0 : n.length;
          return i ? Pt(n, ee) : [];
        }
        function Py(n, i) {
          var s = n == null ? 0 : n.length;
          return s ? (i = i === r ? 1 : Ge(i), Pt(n, i)) : [];
        }
        function Oy(n) {
          for (var i = -1, s = n == null ? 0 : n.length, d = {}; ++i < s; ) {
            var m = n[i];
            d[m[0]] = m[1];
          }
          return d;
        }
        function pd(n) {
          return n && n.length ? n[0] : r;
        }
        function Ty(n, i, s) {
          var d = n == null ? 0 : n.length;
          if (!d)
            return -1;
          var m = s == null ? 0 : Ge(s);
          return m < 0 && (m = St(d + m, 0)), Fi(n, i, m);
        }
        function By(n) {
          var i = n == null ? 0 : n.length;
          return i ? xn(n, 0, -1) : [];
        }
        var _y = Me(function(n) {
          var i = lt(n, za);
          return i.length && i[0] === n[0] ? Ga(i) : [];
        }), Gy = Me(function(n) {
          var i = An(n), s = lt(n, za);
          return i === An(s) ? i = r : s.pop(), s.length && s[0] === n[0] ? Ga(s, ye(i, 2)) : [];
        }), Ly = Me(function(n) {
          var i = An(n), s = lt(n, za);
          return i = typeof i == "function" ? i : r, i && s.pop(), s.length && s[0] === n[0] ? Ga(s, r, i) : [];
        });
        function ky(n, i) {
          return n == null ? "" : Bm.call(n, i);
        }
        function An(n) {
          var i = n == null ? 0 : n.length;
          return i ? n[i - 1] : r;
        }
        function Dy(n, i, s) {
          var d = n == null ? 0 : n.length;
          if (!d)
            return -1;
          var m = d;
          return s !== r && (m = Ge(s), m = m < 0 ? St(d + m, 0) : Bt(m, d - 1)), i === i ? mm(n, i, m) : Po(n, Yc, m, !0);
        }
        function My(n, i) {
          return n && n.length ? wf(n, Ge(i)) : r;
        }
        var Ny = Me(hd);
        function hd(n, i) {
          return n && n.length && i && i.length ? Ma(n, i) : n;
        }
        function Vy(n, i, s) {
          return n && n.length && i && i.length ? Ma(n, i, ye(s, 2)) : n;
        }
        function Wy(n, i, s) {
          return n && n.length && i && i.length ? Ma(n, i, r, s) : n;
        }
        var Xy = fr(function(n, i) {
          var s = n == null ? 0 : n.length, d = Oa(n, i);
          return Ff(n, lt(i, function(m) {
            return dr(m, s) ? +m : m;
          }).sort(Df)), d;
        });
        function Hy(n, i) {
          var s = [];
          if (!(n && n.length))
            return s;
          var d = -1, m = [], I = n.length;
          for (i = ye(i, 3); ++d < I; ) {
            var x = n[d];
            i(x, d, n) && (s.push(x), m.push(d));
          }
          return Ff(n, m), s;
        }
        function il(n) {
          return n == null ? n : km.call(n);
        }
        function zy(n, i, s) {
          var d = n == null ? 0 : n.length;
          return d ? (s && typeof s != "number" && Xt(n, i, s) ? (i = 0, s = d) : (i = i == null ? 0 : Ge(i), s = s === r ? d : Ge(s)), xn(n, i, s)) : [];
        }
        function Zy(n, i) {
          return jo(n, i);
        }
        function Yy(n, i, s) {
          return Wa(n, i, ye(s, 2));
        }
        function Jy(n, i) {
          var s = n == null ? 0 : n.length;
          if (s) {
            var d = jo(n, i);
            if (d < s && _n(n[d], i))
              return d;
          }
          return -1;
        }
        function Uy(n, i) {
          return jo(n, i, !0);
        }
        function jy(n, i, s) {
          return Wa(n, i, ye(s, 2), !0);
        }
        function Qy(n, i) {
          var s = n == null ? 0 : n.length;
          if (s) {
            var d = jo(n, i, !0) - 1;
            if (_n(n[d], i))
              return d;
          }
          return -1;
        }
        function qy(n) {
          return n && n.length ? Pf(n) : [];
        }
        function $y(n, i) {
          return n && n.length ? Pf(n, ye(i, 2)) : [];
        }
        function Ky(n) {
          var i = n == null ? 0 : n.length;
          return i ? xn(n, 1, i) : [];
        }
        function e0(n, i, s) {
          return n && n.length ? (i = s || i === r ? 1 : Ge(i), xn(n, 0, i < 0 ? 0 : i)) : [];
        }
        function t0(n, i, s) {
          var d = n == null ? 0 : n.length;
          return d ? (i = s || i === r ? 1 : Ge(i), i = d - i, xn(n, i < 0 ? 0 : i, d)) : [];
        }
        function n0(n, i) {
          return n && n.length ? Qo(n, ye(i, 3), !1, !0) : [];
        }
        function r0(n, i) {
          return n && n.length ? Qo(n, ye(i, 3)) : [];
        }
        var i0 = Me(function(n) {
          return Rr(Pt(n, 1, mt, !0));
        }), u0 = Me(function(n) {
          var i = An(n);
          return mt(i) && (i = r), Rr(Pt(n, 1, mt, !0), ye(i, 2));
        }), o0 = Me(function(n) {
          var i = An(n);
          return i = typeof i == "function" ? i : r, Rr(Pt(n, 1, mt, !0), r, i);
        });
        function s0(n) {
          return n && n.length ? Rr(n) : [];
        }
        function a0(n, i) {
          return n && n.length ? Rr(n, ye(i, 2)) : [];
        }
        function l0(n, i) {
          return i = typeof i == "function" ? i : r, n && n.length ? Rr(n, r, i) : [];
        }
        function ul(n) {
          if (!(n && n.length))
            return [];
          var i = 0;
          return n = Ar(n, function(s) {
            if (mt(s))
              return i = St(s.length, i), !0;
          }), xa(i, function(s) {
            return lt(n, va(s));
          });
        }
        function gd(n, i) {
          if (!(n && n.length))
            return [];
          var s = ul(n);
          return i == null ? s : lt(s, function(d) {
            return Ft(i, r, d);
          });
        }
        var c0 = Me(function(n, i) {
          return mt(n) ? Eu(n, i) : [];
        }), f0 = Me(function(n) {
          return Ha(Ar(n, mt));
        }), d0 = Me(function(n) {
          var i = An(n);
          return mt(i) && (i = r), Ha(Ar(n, mt), ye(i, 2));
        }), p0 = Me(function(n) {
          var i = An(n);
          return i = typeof i == "function" ? i : r, Ha(Ar(n, mt), r, i);
        }), h0 = Me(ul);
        function g0(n, i) {
          return _f(n || [], i || [], Su);
        }
        function m0(n, i) {
          return _f(n || [], i || [], Pu);
        }
        var b0 = Me(function(n) {
          var i = n.length, s = i > 1 ? n[i - 1] : r;
          return s = typeof s == "function" ? (n.pop(), s) : r, gd(n, s);
        });
        function md(n) {
          var i = y(n);
          return i.__chain__ = !0, i;
        }
        function y0(n, i) {
          return i(n), n;
        }
        function us(n, i) {
          return i(n);
        }
        var v0 = fr(function(n) {
          var i = n.length, s = i ? n[0] : 0, d = this.__wrapped__, m = function(I) {
            return Oa(I, n);
          };
          return i > 1 || this.__actions__.length || !(d instanceof Xe) || !dr(s) ? this.thru(m) : (d = d.slice(s, +s + (i ? 1 : 0)), d.__actions__.push({
            func: us,
            args: [m],
            thisArg: r
          }), new In(d, this.__chain__).thru(function(I) {
            return i && !I.length && I.push(r), I;
          }));
        });
        function I0() {
          return md(this);
        }
        function C0() {
          return new In(this.value(), this.__chain__);
        }
        function x0() {
          this.__values__ === r && (this.__values__ = Od(this.value()));
          var n = this.__index__ >= this.__values__.length, i = n ? r : this.__values__[this.__index__++];
          return { done: n, value: i };
        }
        function A0() {
          return this;
        }
        function w0(n) {
          for (var i, s = this; s instanceof zo; ) {
            var d = ld(s);
            d.__index__ = 0, d.__values__ = r, i ? m.__wrapped__ = d : i = d;
            var m = d;
            s = s.__wrapped__;
          }
          return m.__wrapped__ = n, i;
        }
        function S0() {
          var n = this.__wrapped__;
          if (n instanceof Xe) {
            var i = n;
            return this.__actions__.length && (i = new Xe(this)), i = i.reverse(), i.__actions__.push({
              func: us,
              args: [il],
              thisArg: r
            }), new In(i, this.__chain__);
          }
          return this.thru(il);
        }
        function E0() {
          return Bf(this.__wrapped__, this.__actions__);
        }
        var F0 = qo(function(n, i, s) {
          $e.call(n, s) ? ++n[s] : lr(n, s, 1);
        });
        function R0(n, i, s) {
          var d = Pe(n) ? zc : yb;
          return s && Xt(n, i, s) && (i = r), d(n, ye(i, 3));
        }
        function P0(n, i) {
          var s = Pe(n) ? Ar : gf;
          return s(n, ye(i, 3));
        }
        var O0 = Hf(cd), T0 = Hf(fd);
        function B0(n, i) {
          return Pt(os(n, i), 1);
        }
        function _0(n, i) {
          return Pt(os(n, i), ee);
        }
        function G0(n, i, s) {
          return s = s === r ? 1 : Ge(s), Pt(os(n, i), s);
        }
        function bd(n, i) {
          var s = Pe(n) ? yn : Fr;
          return s(n, ye(i, 3));
        }
        function yd(n, i) {
          var s = Pe(n) ? Kg : hf;
          return s(n, ye(i, 3));
        }
        var L0 = qo(function(n, i, s) {
          $e.call(n, s) ? n[s].push(i) : lr(n, s, [i]);
        });
        function k0(n, i, s, d) {
          n = qt(n) ? n : Ni(n), s = s && !d ? Ge(s) : 0;
          var m = n.length;
          return s < 0 && (s = St(m + s, 0)), fs(n) ? s <= m && n.indexOf(i, s) > -1 : !!m && Fi(n, i, s) > -1;
        }
        var D0 = Me(function(n, i, s) {
          var d = -1, m = typeof i == "function", I = qt(n) ? M(n.length) : [];
          return Fr(n, function(x) {
            I[++d] = m ? Ft(i, x, s) : Fu(x, i, s);
          }), I;
        }), M0 = qo(function(n, i, s) {
          lr(n, s, i);
        });
        function os(n, i) {
          var s = Pe(n) ? lt : Cf;
          return s(n, ye(i, 3));
        }
        function N0(n, i, s, d) {
          return n == null ? [] : (Pe(i) || (i = i == null ? [] : [i]), s = d ? r : s, Pe(s) || (s = s == null ? [] : [s]), Sf(n, i, s));
        }
        var V0 = qo(function(n, i, s) {
          n[s ? 0 : 1].push(i);
        }, function() {
          return [[], []];
        });
        function W0(n, i, s) {
          var d = Pe(n) ? ba : Uc, m = arguments.length < 3;
          return d(n, ye(i, 4), s, m, Fr);
        }
        function X0(n, i, s) {
          var d = Pe(n) ? em : Uc, m = arguments.length < 3;
          return d(n, ye(i, 4), s, m, hf);
        }
        function H0(n, i) {
          var s = Pe(n) ? Ar : gf;
          return s(n, ls(ye(i, 3)));
        }
        function z0(n) {
          var i = Pe(n) ? cf : kb;
          return i(n);
        }
        function Z0(n, i, s) {
          (s ? Xt(n, i, s) : i === r) ? i = 1 : i = Ge(i);
          var d = Pe(n) ? pb : Db;
          return d(n, i);
        }
        function Y0(n) {
          var i = Pe(n) ? hb : Nb;
          return i(n);
        }
        function J0(n) {
          if (n == null)
            return 0;
          if (qt(n))
            return fs(n) ? Pi(n) : n.length;
          var i = _t(n);
          return i == Fe || i == Mt ? n.size : ka(n).length;
        }
        function U0(n, i, s) {
          var d = Pe(n) ? ya : Vb;
          return s && Xt(n, i, s) && (i = r), d(n, ye(i, 3));
        }
        var j0 = Me(function(n, i) {
          if (n == null)
            return [];
          var s = i.length;
          return s > 1 && Xt(n, i[0], i[1]) ? i = [] : s > 2 && Xt(i[0], i[1], i[2]) && (i = [i[0]]), Sf(n, Pt(i, 1), []);
        }), ss = Pm || function() {
          return He.Date.now();
        };
        function Q0(n, i) {
          if (typeof i != "function")
            throw new vn(l);
          return n = Ge(n), function() {
            if (--n < 1)
              return i.apply(this, arguments);
          };
        }
        function vd(n, i, s) {
          return i = s ? r : i, i = n && i == null ? n.length : i, cr(n, H, r, r, r, r, i);
        }
        function Id(n, i) {
          var s;
          if (typeof i != "function")
            throw new vn(l);
          return n = Ge(n), function() {
            return --n > 0 && (s = i.apply(this, arguments)), n <= 1 && (i = r), s;
          };
        }
        var ol = Me(function(n, i, s) {
          var d = E;
          if (s.length) {
            var m = Sr(s, Di(ol));
            d |= X;
          }
          return cr(n, d, i, s, m);
        }), Cd = Me(function(n, i, s) {
          var d = E | F;
          if (s.length) {
            var m = Sr(s, Di(Cd));
            d |= X;
          }
          return cr(i, d, n, s, m);
        });
        function xd(n, i, s) {
          i = s ? r : i;
          var d = cr(n, L, r, r, r, r, r, i);
          return d.placeholder = xd.placeholder, d;
        }
        function Ad(n, i, s) {
          i = s ? r : i;
          var d = cr(n, D, r, r, r, r, r, i);
          return d.placeholder = Ad.placeholder, d;
        }
        function wd(n, i, s) {
          var d, m, I, x, R, _, Z = 0, Y = !1, Q = !1, ie = !0;
          if (typeof n != "function")
            throw new vn(l);
          i = wn(i) || 0, ct(s) && (Y = !!s.leading, Q = "maxWait" in s, I = Q ? St(wn(s.maxWait) || 0, i) : I, ie = "trailing" in s ? !!s.trailing : ie);
          function fe(bt) {
            var Gn = d, gr = m;
            return d = m = r, Z = bt, x = n.apply(gr, Gn), x;
          }
          function Ie(bt) {
            return Z = bt, R = Bu(Ve, i), Y ? fe(bt) : x;
          }
          function Le(bt) {
            var Gn = bt - _, gr = bt - Z, Hd = i - Gn;
            return Q ? Bt(Hd, I - gr) : Hd;
          }
          function Ce(bt) {
            var Gn = bt - _, gr = bt - Z;
            return _ === r || Gn >= i || Gn < 0 || Q && gr >= I;
          }
          function Ve() {
            var bt = ss();
            if (Ce(bt))
              return ze(bt);
            R = Bu(Ve, Le(bt));
          }
          function ze(bt) {
            return R = r, ie && d ? fe(bt) : (d = m = r, x);
          }
          function fn() {
            R !== r && Gf(R), Z = 0, d = _ = m = R = r;
          }
          function Ht() {
            return R === r ? x : ze(ss());
          }
          function dn() {
            var bt = ss(), Gn = Ce(bt);
            if (d = arguments, m = this, _ = bt, Gn) {
              if (R === r)
                return Ie(_);
              if (Q)
                return Gf(R), R = Bu(Ve, i), fe(_);
            }
            return R === r && (R = Bu(Ve, i)), x;
          }
          return dn.cancel = fn, dn.flush = Ht, dn;
        }
        var q0 = Me(function(n, i) {
          return pf(n, 1, i);
        }), $0 = Me(function(n, i, s) {
          return pf(n, wn(i) || 0, s);
        });
        function K0(n) {
          return cr(n, N);
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
        function ev(n) {
          return Id(2, n);
        }
        var tv = Wb(function(n, i) {
          i = i.length == 1 && Pe(i[0]) ? lt(i[0], an(ye())) : lt(Pt(i, 1), an(ye()));
          var s = i.length;
          return Me(function(d) {
            for (var m = -1, I = Bt(d.length, s); ++m < I; )
              d[m] = i[m].call(this, d[m]);
            return Ft(n, this, d);
          });
        }), sl = Me(function(n, i) {
          var s = Sr(i, Di(sl));
          return cr(n, X, r, i, s);
        }), Sd = Me(function(n, i) {
          var s = Sr(i, Di(Sd));
          return cr(n, G, r, i, s);
        }), nv = fr(function(n, i) {
          return cr(n, z, r, r, r, i);
        });
        function rv(n, i) {
          if (typeof n != "function")
            throw new vn(l);
          return i = i === r ? i : Ge(i), Me(n, i);
        }
        function iv(n, i) {
          if (typeof n != "function")
            throw new vn(l);
          return i = i == null ? 0 : St(Ge(i), 0), Me(function(s) {
            var d = s[i], m = Or(s, 0, i);
            return d && wr(m, d), Ft(n, this, m);
          });
        }
        function uv(n, i, s) {
          var d = !0, m = !0;
          if (typeof n != "function")
            throw new vn(l);
          return ct(s) && (d = "leading" in s ? !!s.leading : d, m = "trailing" in s ? !!s.trailing : m), wd(n, i, {
            leading: d,
            maxWait: i,
            trailing: m
          });
        }
        function ov(n) {
          return vd(n, 1);
        }
        function sv(n, i) {
          return sl(Za(i), n);
        }
        function av() {
          if (!arguments.length)
            return [];
          var n = arguments[0];
          return Pe(n) ? n : [n];
        }
        function lv(n) {
          return Cn(n, b);
        }
        function cv(n, i) {
          return i = typeof i == "function" ? i : r, Cn(n, b, i);
        }
        function fv(n) {
          return Cn(n, g | b);
        }
        function dv(n, i) {
          return i = typeof i == "function" ? i : r, Cn(n, g | b, i);
        }
        function pv(n, i) {
          return i == null || df(n, i, Rt(i));
        }
        function _n(n, i) {
          return n === i || n !== n && i !== i;
        }
        var hv = ts(_a), gv = ts(function(n, i) {
          return n >= i;
        }), ii = yf(/* @__PURE__ */ function() {
          return arguments;
        }()) ? yf : function(n) {
          return dt(n) && $e.call(n, "callee") && !rf.call(n, "callee");
        }, Pe = M.isArray, mv = Vt ? an(Vt) : wb;
        function qt(n) {
          return n != null && cs(n.length) && !pr(n);
        }
        function mt(n) {
          return dt(n) && qt(n);
        }
        function bv(n) {
          return n === !0 || n === !1 || dt(n) && Wt(n) == Ne;
        }
        var Tr = Tm || yl, yv = On ? an(On) : Sb;
        function vv(n) {
          return dt(n) && n.nodeType === 1 && !_u(n);
        }
        function Iv(n) {
          if (n == null)
            return !0;
          if (qt(n) && (Pe(n) || typeof n == "string" || typeof n.splice == "function" || Tr(n) || Mi(n) || ii(n)))
            return !n.length;
          var i = _t(n);
          if (i == Fe || i == Mt)
            return !n.size;
          if (Tu(n))
            return !ka(n).length;
          for (var s in n)
            if ($e.call(n, s))
              return !1;
          return !0;
        }
        function Cv(n, i) {
          return Ru(n, i);
        }
        function xv(n, i, s) {
          s = typeof s == "function" ? s : r;
          var d = s ? s(n, i) : r;
          return d === r ? Ru(n, i, r, s) : !!d;
        }
        function al(n) {
          if (!dt(n))
            return !1;
          var i = Wt(n);
          return i == se || i == Dt || typeof n.message == "string" && typeof n.name == "string" && !_u(n);
        }
        function Av(n) {
          return typeof n == "number" && of(n);
        }
        function pr(n) {
          if (!ct(n))
            return !1;
          var i = Wt(n);
          return i == ce || i == we || i == yt || i == yi;
        }
        function Ed(n) {
          return typeof n == "number" && n == Ge(n);
        }
        function cs(n) {
          return typeof n == "number" && n > -1 && n % 1 == 0 && n <= de;
        }
        function ct(n) {
          var i = typeof n;
          return n != null && (i == "object" || i == "function");
        }
        function dt(n) {
          return n != null && typeof n == "object";
        }
        var Fd = bn ? an(bn) : Fb;
        function wv(n, i) {
          return n === i || La(n, i, $a(i));
        }
        function Sv(n, i, s) {
          return s = typeof s == "function" ? s : r, La(n, i, $a(i), s);
        }
        function Ev(n) {
          return Rd(n) && n != +n;
        }
        function Fv(n) {
          if (cy(n))
            throw new Se(a);
          return vf(n);
        }
        function Rv(n) {
          return n === null;
        }
        function Pv(n) {
          return n == null;
        }
        function Rd(n) {
          return typeof n == "number" || dt(n) && Wt(n) == vt;
        }
        function _u(n) {
          if (!dt(n) || Wt(n) != Yt)
            return !1;
          var i = Do(n);
          if (i === null)
            return !0;
          var s = $e.call(i, "constructor") && i.constructor;
          return typeof s == "function" && s instanceof s && _o.call(s) == Sm;
        }
        var ll = Wn ? an(Wn) : Rb;
        function Ov(n) {
          return Ed(n) && n >= -9007199254740991 && n <= de;
        }
        var Pd = yu ? an(yu) : Pb;
        function fs(n) {
          return typeof n == "string" || !Pe(n) && dt(n) && Wt(n) == tr;
        }
        function cn(n) {
          return typeof n == "symbol" || dt(n) && Wt(n) == Cr;
        }
        var Mi = Qr ? an(Qr) : Ob;
        function Tv(n) {
          return n === r;
        }
        function Bv(n) {
          return dt(n) && _t(n) == nr;
        }
        function _v(n) {
          return dt(n) && Wt(n) == W;
        }
        var Gv = ts(Da), Lv = ts(function(n, i) {
          return n <= i;
        });
        function Od(n) {
          if (!n)
            return [];
          if (qt(n))
            return fs(n) ? Tn(n) : Qt(n);
          if (Iu && n[Iu])
            return pm(n[Iu]());
          var i = _t(n), s = i == Fe ? wa : i == Mt ? Oo : Ni;
          return s(n);
        }
        function hr(n) {
          if (!n)
            return n === 0 ? n : 0;
          if (n = wn(n), n === ee || n === -1 / 0) {
            var i = n < 0 ? -1 : 1;
            return i * We;
          }
          return n === n ? n : 0;
        }
        function Ge(n) {
          var i = hr(n), s = i % 1;
          return i === i ? s ? i - s : i : 0;
        }
        function Td(n) {
          return n ? ei(Ge(n), 0, ke) : 0;
        }
        function wn(n) {
          if (typeof n == "number")
            return n;
          if (cn(n))
            return w;
          if (ct(n)) {
            var i = typeof n.valueOf == "function" ? n.valueOf() : n;
            n = ct(i) ? i + "" : i;
          }
          if (typeof n != "string")
            return n === 0 ? n : +n;
          n = jc(n);
          var s = Ks.test(n);
          return s || ta.test(n) ? Re(n.slice(2), s ? 2 : 8) : $s.test(n) ? w : +n;
        }
        function Bd(n) {
          return Hn(n, $t(n));
        }
        function kv(n) {
          return n ? ei(Ge(n), -9007199254740991, de) : n === 0 ? n : 0;
        }
        function Qe(n) {
          return n == null ? "" : ln(n);
        }
        var Dv = Li(function(n, i) {
          if (Tu(i) || qt(i)) {
            Hn(i, Rt(i), n);
            return;
          }
          for (var s in i)
            $e.call(i, s) && Su(n, s, i[s]);
        }), _d = Li(function(n, i) {
          Hn(i, $t(i), n);
        }), ds = Li(function(n, i, s, d) {
          Hn(i, $t(i), n, d);
        }), Mv = Li(function(n, i, s, d) {
          Hn(i, Rt(i), n, d);
        }), Nv = fr(Oa);
        function Vv(n, i) {
          var s = Gi(n);
          return i == null ? s : ff(s, i);
        }
        var Wv = Me(function(n, i) {
          n = it(n);
          var s = -1, d = i.length, m = d > 2 ? i[2] : r;
          for (m && Xt(i[0], i[1], m) && (d = 1); ++s < d; )
            for (var I = i[s], x = $t(I), R = -1, _ = x.length; ++R < _; ) {
              var Z = x[R], Y = n[Z];
              (Y === r || _n(Y, Ti[Z]) && !$e.call(n, Z)) && (n[Z] = I[Z]);
            }
          return n;
        }), Xv = Me(function(n) {
          return n.push(r, Qf), Ft(Gd, r, n);
        });
        function Hv(n, i) {
          return Zc(n, ye(i, 3), Xn);
        }
        function zv(n, i) {
          return Zc(n, ye(i, 3), Ba);
        }
        function Zv(n, i) {
          return n == null ? n : Ta(n, ye(i, 3), $t);
        }
        function Yv(n, i) {
          return n == null ? n : mf(n, ye(i, 3), $t);
        }
        function Jv(n, i) {
          return n && Xn(n, ye(i, 3));
        }
        function Uv(n, i) {
          return n && Ba(n, ye(i, 3));
        }
        function jv(n) {
          return n == null ? [] : Jo(n, Rt(n));
        }
        function Qv(n) {
          return n == null ? [] : Jo(n, $t(n));
        }
        function cl(n, i, s) {
          var d = n == null ? r : ti(n, i);
          return d === r ? s : d;
        }
        function qv(n, i) {
          return n != null && Kf(n, i, Ib);
        }
        function fl(n, i) {
          return n != null && Kf(n, i, Cb);
        }
        var $v = Zf(function(n, i, s) {
          i != null && typeof i.toString != "function" && (i = Go.call(i)), n[i] = s;
        }, pl(Kt)), Kv = Zf(function(n, i, s) {
          i != null && typeof i.toString != "function" && (i = Go.call(i)), $e.call(n, i) ? n[i].push(s) : n[i] = [s];
        }, ye), eI = Me(Fu);
        function Rt(n) {
          return qt(n) ? lf(n) : ka(n);
        }
        function $t(n) {
          return qt(n) ? lf(n, !0) : Tb(n);
        }
        function tI(n, i) {
          var s = {};
          return i = ye(i, 3), Xn(n, function(d, m, I) {
            lr(s, i(d, m, I), d);
          }), s;
        }
        function nI(n, i) {
          var s = {};
          return i = ye(i, 3), Xn(n, function(d, m, I) {
            lr(s, m, i(d, m, I));
          }), s;
        }
        var rI = Li(function(n, i, s) {
          Uo(n, i, s);
        }), Gd = Li(function(n, i, s, d) {
          Uo(n, i, s, d);
        }), iI = fr(function(n, i) {
          var s = {};
          if (n == null)
            return s;
          var d = !1;
          i = lt(i, function(I) {
            return I = Pr(I, n), d || (d = I.length > 1), I;
          }), Hn(n, Qa(n), s), d && (s = Cn(s, g | v | b, $b));
          for (var m = i.length; m--; )
            Xa(s, i[m]);
          return s;
        });
        function uI(n, i) {
          return Ld(n, ls(ye(i)));
        }
        var oI = fr(function(n, i) {
          return n == null ? {} : _b(n, i);
        });
        function Ld(n, i) {
          if (n == null)
            return {};
          var s = lt(Qa(n), function(d) {
            return [d];
          });
          return i = ye(i), Ef(n, s, function(d, m) {
            return i(d, m[0]);
          });
        }
        function sI(n, i, s) {
          i = Pr(i, n);
          var d = -1, m = i.length;
          for (m || (m = 1, n = r); ++d < m; ) {
            var I = n == null ? r : n[zn(i[d])];
            I === r && (d = m, I = s), n = pr(I) ? I.call(n) : I;
          }
          return n;
        }
        function aI(n, i, s) {
          return n == null ? n : Pu(n, i, s);
        }
        function lI(n, i, s, d) {
          return d = typeof d == "function" ? d : r, n == null ? n : Pu(n, i, s, d);
        }
        var kd = Uf(Rt), Dd = Uf($t);
        function cI(n, i, s) {
          var d = Pe(n), m = d || Tr(n) || Mi(n);
          if (i = ye(i, 4), s == null) {
            var I = n && n.constructor;
            m ? s = d ? new I() : [] : ct(n) ? s = pr(I) ? Gi(Do(n)) : {} : s = {};
          }
          return (m ? yn : Xn)(n, function(x, R, _) {
            return i(s, x, R, _);
          }), s;
        }
        function fI(n, i) {
          return n == null ? !0 : Xa(n, i);
        }
        function dI(n, i, s) {
          return n == null ? n : Tf(n, i, Za(s));
        }
        function pI(n, i, s, d) {
          return d = typeof d == "function" ? d : r, n == null ? n : Tf(n, i, Za(s), d);
        }
        function Ni(n) {
          return n == null ? [] : Aa(n, Rt(n));
        }
        function hI(n) {
          return n == null ? [] : Aa(n, $t(n));
        }
        function gI(n, i, s) {
          return s === r && (s = i, i = r), s !== r && (s = wn(s), s = s === s ? s : 0), i !== r && (i = wn(i), i = i === i ? i : 0), ei(wn(n), i, s);
        }
        function mI(n, i, s) {
          return i = hr(i), s === r ? (s = i, i = 0) : s = hr(s), n = wn(n), xb(n, i, s);
        }
        function bI(n, i, s) {
          if (s && typeof s != "boolean" && Xt(n, i, s) && (i = s = r), s === r && (typeof i == "boolean" ? (s = i, i = r) : typeof n == "boolean" && (s = n, n = r)), n === r && i === r ? (n = 0, i = 1) : (n = hr(n), i === r ? (i = n, n = 0) : i = hr(i)), n > i) {
            var d = n;
            n = i, i = d;
          }
          if (s || n % 1 || i % 1) {
            var m = sf();
            return Bt(n + m * (i - n + nt("1e-" + ((m + "").length - 1))), i);
          }
          return Na(n, i);
        }
        var yI = ki(function(n, i, s) {
          return i = i.toLowerCase(), n + (s ? Md(i) : i);
        });
        function Md(n) {
          return dl(Qe(n).toLowerCase());
        }
        function Nd(n) {
          return n = Qe(n), n && n.replace(ur, am).replace(ha, "");
        }
        function vI(n, i, s) {
          n = Qe(n), i = ln(i);
          var d = n.length;
          s = s === r ? d : ei(Ge(s), 0, d);
          var m = s;
          return s -= i.length, s >= 0 && n.slice(s, m) == i;
        }
        function II(n) {
          return n = Qe(n), n && zr.test(n) ? n.replace(oo, lm) : n;
        }
        function CI(n) {
          return n = Qe(n), n && Ys.test(n) ? n.replace(du, "\\$&") : n;
        }
        var xI = ki(function(n, i, s) {
          return n + (s ? "-" : "") + i.toLowerCase();
        }), AI = ki(function(n, i, s) {
          return n + (s ? " " : "") + i.toLowerCase();
        }), wI = Xf("toLowerCase");
        function SI(n, i, s) {
          n = Qe(n), i = Ge(i);
          var d = i ? Pi(n) : 0;
          if (!i || d >= i)
            return n;
          var m = (i - d) / 2;
          return es(Wo(m), s) + n + es(Vo(m), s);
        }
        function EI(n, i, s) {
          n = Qe(n), i = Ge(i);
          var d = i ? Pi(n) : 0;
          return i && d < i ? n + es(i - d, s) : n;
        }
        function FI(n, i, s) {
          n = Qe(n), i = Ge(i);
          var d = i ? Pi(n) : 0;
          return i && d < i ? es(i - d, s) + n : n;
        }
        function RI(n, i, s) {
          return s || i == null ? i = 0 : i && (i = +i), Lm(Qe(n).replace(pu, ""), i || 0);
        }
        function PI(n, i, s) {
          return (s ? Xt(n, i, s) : i === r) ? i = 1 : i = Ge(i), Va(Qe(n), i);
        }
        function OI() {
          var n = arguments, i = Qe(n[0]);
          return n.length < 3 ? i : i.replace(n[1], n[2]);
        }
        var TI = ki(function(n, i, s) {
          return n + (s ? "_" : "") + i.toLowerCase();
        });
        function BI(n, i, s) {
          return s && typeof s != "number" && Xt(n, i, s) && (i = s = r), s = s === r ? ke : s >>> 0, s ? (n = Qe(n), n && (typeof i == "string" || i != null && !ll(i)) && (i = ln(i), !i && Ri(n)) ? Or(Tn(n), 0, s) : n.split(i, s)) : [];
        }
        var _I = ki(function(n, i, s) {
          return n + (s ? " " : "") + dl(i);
        });
        function GI(n, i, s) {
          return n = Qe(n), s = s == null ? 0 : ei(Ge(s), 0, n.length), i = ln(i), n.slice(s, s + i.length) == i;
        }
        function LI(n, i, s) {
          var d = y.templateSettings;
          s && Xt(n, i, s) && (i = r), n = Qe(n), i = ds({}, i, d, jf);
          var m = ds({}, i.imports, d.imports, jf), I = Rt(m), x = Aa(m, I), R, _, Z = 0, Y = i.interpolate || Ii, Q = "__p += '", ie = Sa(
            (i.escape || Ii).source + "|" + Y.source + "|" + (Y === vi ? qs : Ii).source + "|" + (i.evaluate || Ii).source + "|$",
            "g"
          ), fe = "//# sourceURL=" + ($e.call(i, "sourceURL") ? (i.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++ga + "]") + `
`;
          n.replace(ie, function(Ce, Ve, ze, fn, Ht, dn) {
            return ze || (ze = fn), Q += n.slice(Z, dn).replace(ra, cm), Ve && (R = !0, Q += `' +
__e(` + Ve + `) +
'`), Ht && (_ = !0, Q += `';
` + Ht + `;
__p += '`), ze && (Q += `' +
((__t = (` + ze + `)) == null ? '' : __t) +
'`), Z = dn + Ce.length, Ce;
          }), Q += `';
`;
          var Ie = $e.call(i, "variable") && i.variable;
          if (!Ie)
            Q = `with (obj) {
` + Q + `
}
`;
          else if (js.test(Ie))
            throw new Se(c);
          Q = (_ ? Q.replace(on, "") : Q).replace(rr, "$1").replace(io, "$1;"), Q = "function(" + (Ie || "obj") + `) {
` + (Ie ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (R ? ", __e = _.escape" : "") + (_ ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + Q + `return __p
}`;
          var Le = Wd(function() {
            return Ue(I, fe + "return " + Q).apply(r, x);
          });
          if (Le.source = Q, al(Le))
            throw Le;
          return Le;
        }
        function kI(n) {
          return Qe(n).toLowerCase();
        }
        function DI(n) {
          return Qe(n).toUpperCase();
        }
        function MI(n, i, s) {
          if (n = Qe(n), n && (s || i === r))
            return jc(n);
          if (!n || !(i = ln(i)))
            return n;
          var d = Tn(n), m = Tn(i), I = Qc(d, m), x = qc(d, m) + 1;
          return Or(d, I, x).join("");
        }
        function NI(n, i, s) {
          if (n = Qe(n), n && (s || i === r))
            return n.slice(0, Kc(n) + 1);
          if (!n || !(i = ln(i)))
            return n;
          var d = Tn(n), m = qc(d, Tn(i)) + 1;
          return Or(d, 0, m).join("");
        }
        function VI(n, i, s) {
          if (n = Qe(n), n && (s || i === r))
            return n.replace(pu, "");
          if (!n || !(i = ln(i)))
            return n;
          var d = Tn(n), m = Qc(d, Tn(i));
          return Or(d, m).join("");
        }
        function WI(n, i) {
          var s = re, d = J;
          if (ct(i)) {
            var m = "separator" in i ? i.separator : m;
            s = "length" in i ? Ge(i.length) : s, d = "omission" in i ? ln(i.omission) : d;
          }
          n = Qe(n);
          var I = n.length;
          if (Ri(n)) {
            var x = Tn(n);
            I = x.length;
          }
          if (s >= I)
            return n;
          var R = s - Pi(d);
          if (R < 1)
            return d;
          var _ = x ? Or(x, 0, R).join("") : n.slice(0, R);
          if (m === r)
            return _ + d;
          if (x && (R += _.length - R), ll(m)) {
            if (n.slice(R).search(m)) {
              var Z, Y = _;
              for (m.global || (m = Sa(m.source, Qe(mn.exec(m)) + "g")), m.lastIndex = 0; Z = m.exec(Y); )
                var Q = Z.index;
              _ = _.slice(0, Q === r ? R : Q);
            }
          } else if (n.indexOf(ln(m), R) != R) {
            var ie = _.lastIndexOf(m);
            ie > -1 && (_ = _.slice(0, ie));
          }
          return _ + d;
        }
        function XI(n) {
          return n = Qe(n), n && lu.test(n) ? n.replace(uo, bm) : n;
        }
        var HI = ki(function(n, i, s) {
          return n + (s ? " " : "") + i.toUpperCase();
        }), dl = Xf("toUpperCase");
        function Vd(n, i, s) {
          return n = Qe(n), i = s ? r : i, i === r ? dm(n) ? Im(n) : rm(n) : n.match(i) || [];
        }
        var Wd = Me(function(n, i) {
          try {
            return Ft(n, r, i);
          } catch (s) {
            return al(s) ? s : new Se(s);
          }
        }), zI = fr(function(n, i) {
          return yn(i, function(s) {
            s = zn(s), lr(n, s, ol(n[s], n));
          }), n;
        });
        function ZI(n) {
          var i = n == null ? 0 : n.length, s = ye();
          return n = i ? lt(n, function(d) {
            if (typeof d[1] != "function")
              throw new vn(l);
            return [s(d[0]), d[1]];
          }) : [], Me(function(d) {
            for (var m = -1; ++m < i; ) {
              var I = n[m];
              if (Ft(I[0], this, d))
                return Ft(I[1], this, d);
            }
          });
        }
        function YI(n) {
          return bb(Cn(n, g));
        }
        function pl(n) {
          return function() {
            return n;
          };
        }
        function JI(n, i) {
          return n == null || n !== n ? i : n;
        }
        var UI = zf(), jI = zf(!0);
        function Kt(n) {
          return n;
        }
        function hl(n) {
          return If(typeof n == "function" ? n : Cn(n, g));
        }
        function QI(n) {
          return xf(Cn(n, g));
        }
        function qI(n, i) {
          return Af(n, Cn(i, g));
        }
        var $I = Me(function(n, i) {
          return function(s) {
            return Fu(s, n, i);
          };
        }), KI = Me(function(n, i) {
          return function(s) {
            return Fu(n, s, i);
          };
        });
        function gl(n, i, s) {
          var d = Rt(i), m = Jo(i, d);
          s == null && !(ct(i) && (m.length || !d.length)) && (s = i, i = n, n = this, m = Jo(i, Rt(i)));
          var I = !(ct(s) && "chain" in s) || !!s.chain, x = pr(n);
          return yn(m, function(R) {
            var _ = i[R];
            n[R] = _, x && (n.prototype[R] = function() {
              var Z = this.__chain__;
              if (I || Z) {
                var Y = n(this.__wrapped__), Q = Y.__actions__ = Qt(this.__actions__);
                return Q.push({ func: _, args: arguments, thisArg: n }), Y.__chain__ = Z, Y;
              }
              return _.apply(n, wr([this.value()], arguments));
            });
          }), n;
        }
        function e1() {
          return He._ === this && (He._ = Em), this;
        }
        function ml() {
        }
        function t1(n) {
          return n = Ge(n), Me(function(i) {
            return wf(i, n);
          });
        }
        var n1 = Ja(lt), r1 = Ja(zc), i1 = Ja(ya);
        function Xd(n) {
          return el(n) ? va(zn(n)) : Gb(n);
        }
        function u1(n) {
          return function(i) {
            return n == null ? r : ti(n, i);
          };
        }
        var o1 = Yf(), s1 = Yf(!0);
        function bl() {
          return [];
        }
        function yl() {
          return !1;
        }
        function a1() {
          return {};
        }
        function l1() {
          return "";
        }
        function c1() {
          return !0;
        }
        function f1(n, i) {
          if (n = Ge(n), n < 1 || n > de)
            return [];
          var s = ke, d = Bt(n, ke);
          i = ye(i), n -= ke;
          for (var m = xa(d, i); ++s < n; )
            i(s);
          return m;
        }
        function d1(n) {
          return Pe(n) ? lt(n, zn) : cn(n) ? [n] : Qt(ad(Qe(n)));
        }
        function p1(n) {
          var i = ++wm;
          return Qe(n) + i;
        }
        var h1 = Ko(function(n, i) {
          return n + i;
        }, 0), g1 = Ua("ceil"), m1 = Ko(function(n, i) {
          return n / i;
        }, 1), b1 = Ua("floor");
        function y1(n) {
          return n && n.length ? Yo(n, Kt, _a) : r;
        }
        function v1(n, i) {
          return n && n.length ? Yo(n, ye(i, 2), _a) : r;
        }
        function I1(n) {
          return Jc(n, Kt);
        }
        function C1(n, i) {
          return Jc(n, ye(i, 2));
        }
        function x1(n) {
          return n && n.length ? Yo(n, Kt, Da) : r;
        }
        function A1(n, i) {
          return n && n.length ? Yo(n, ye(i, 2), Da) : r;
        }
        var w1 = Ko(function(n, i) {
          return n * i;
        }, 1), S1 = Ua("round"), E1 = Ko(function(n, i) {
          return n - i;
        }, 0);
        function F1(n) {
          return n && n.length ? Ca(n, Kt) : 0;
        }
        function R1(n, i) {
          return n && n.length ? Ca(n, ye(i, 2)) : 0;
        }
        return y.after = Q0, y.ary = vd, y.assign = Dv, y.assignIn = _d, y.assignInWith = ds, y.assignWith = Mv, y.at = Nv, y.before = Id, y.bind = ol, y.bindAll = zI, y.bindKey = Cd, y.castArray = av, y.chain = md, y.chunk = by, y.compact = yy, y.concat = vy, y.cond = ZI, y.conforms = YI, y.constant = pl, y.countBy = F0, y.create = Vv, y.curry = xd, y.curryRight = Ad, y.debounce = wd, y.defaults = Wv, y.defaultsDeep = Xv, y.defer = q0, y.delay = $0, y.difference = Iy, y.differenceBy = Cy, y.differenceWith = xy, y.drop = Ay, y.dropRight = wy, y.dropRightWhile = Sy, y.dropWhile = Ey, y.fill = Fy, y.filter = P0, y.flatMap = B0, y.flatMapDeep = _0, y.flatMapDepth = G0, y.flatten = dd, y.flattenDeep = Ry, y.flattenDepth = Py, y.flip = K0, y.flow = UI, y.flowRight = jI, y.fromPairs = Oy, y.functions = jv, y.functionsIn = Qv, y.groupBy = L0, y.initial = By, y.intersection = _y, y.intersectionBy = Gy, y.intersectionWith = Ly, y.invert = $v, y.invertBy = Kv, y.invokeMap = D0, y.iteratee = hl, y.keyBy = M0, y.keys = Rt, y.keysIn = $t, y.map = os, y.mapKeys = tI, y.mapValues = nI, y.matches = QI, y.matchesProperty = qI, y.memoize = as, y.merge = rI, y.mergeWith = Gd, y.method = $I, y.methodOf = KI, y.mixin = gl, y.negate = ls, y.nthArg = t1, y.omit = iI, y.omitBy = uI, y.once = ev, y.orderBy = N0, y.over = n1, y.overArgs = tv, y.overEvery = r1, y.overSome = i1, y.partial = sl, y.partialRight = Sd, y.partition = V0, y.pick = oI, y.pickBy = Ld, y.property = Xd, y.propertyOf = u1, y.pull = Ny, y.pullAll = hd, y.pullAllBy = Vy, y.pullAllWith = Wy, y.pullAt = Xy, y.range = o1, y.rangeRight = s1, y.rearg = nv, y.reject = H0, y.remove = Hy, y.rest = rv, y.reverse = il, y.sampleSize = Z0, y.set = aI, y.setWith = lI, y.shuffle = Y0, y.slice = zy, y.sortBy = j0, y.sortedUniq = qy, y.sortedUniqBy = $y, y.split = BI, y.spread = iv, y.tail = Ky, y.take = e0, y.takeRight = t0, y.takeRightWhile = n0, y.takeWhile = r0, y.tap = y0, y.throttle = uv, y.thru = us, y.toArray = Od, y.toPairs = kd, y.toPairsIn = Dd, y.toPath = d1, y.toPlainObject = Bd, y.transform = cI, y.unary = ov, y.union = i0, y.unionBy = u0, y.unionWith = o0, y.uniq = s0, y.uniqBy = a0, y.uniqWith = l0, y.unset = fI, y.unzip = ul, y.unzipWith = gd, y.update = dI, y.updateWith = pI, y.values = Ni, y.valuesIn = hI, y.without = c0, y.words = Vd, y.wrap = sv, y.xor = f0, y.xorBy = d0, y.xorWith = p0, y.zip = h0, y.zipObject = g0, y.zipObjectDeep = m0, y.zipWith = b0, y.entries = kd, y.entriesIn = Dd, y.extend = _d, y.extendWith = ds, gl(y, y), y.add = h1, y.attempt = Wd, y.camelCase = yI, y.capitalize = Md, y.ceil = g1, y.clamp = gI, y.clone = lv, y.cloneDeep = fv, y.cloneDeepWith = dv, y.cloneWith = cv, y.conformsTo = pv, y.deburr = Nd, y.defaultTo = JI, y.divide = m1, y.endsWith = vI, y.eq = _n, y.escape = II, y.escapeRegExp = CI, y.every = R0, y.find = O0, y.findIndex = cd, y.findKey = Hv, y.findLast = T0, y.findLastIndex = fd, y.findLastKey = zv, y.floor = b1, y.forEach = bd, y.forEachRight = yd, y.forIn = Zv, y.forInRight = Yv, y.forOwn = Jv, y.forOwnRight = Uv, y.get = cl, y.gt = hv, y.gte = gv, y.has = qv, y.hasIn = fl, y.head = pd, y.identity = Kt, y.includes = k0, y.indexOf = Ty, y.inRange = mI, y.invoke = eI, y.isArguments = ii, y.isArray = Pe, y.isArrayBuffer = mv, y.isArrayLike = qt, y.isArrayLikeObject = mt, y.isBoolean = bv, y.isBuffer = Tr, y.isDate = yv, y.isElement = vv, y.isEmpty = Iv, y.isEqual = Cv, y.isEqualWith = xv, y.isError = al, y.isFinite = Av, y.isFunction = pr, y.isInteger = Ed, y.isLength = cs, y.isMap = Fd, y.isMatch = wv, y.isMatchWith = Sv, y.isNaN = Ev, y.isNative = Fv, y.isNil = Pv, y.isNull = Rv, y.isNumber = Rd, y.isObject = ct, y.isObjectLike = dt, y.isPlainObject = _u, y.isRegExp = ll, y.isSafeInteger = Ov, y.isSet = Pd, y.isString = fs, y.isSymbol = cn, y.isTypedArray = Mi, y.isUndefined = Tv, y.isWeakMap = Bv, y.isWeakSet = _v, y.join = ky, y.kebabCase = xI, y.last = An, y.lastIndexOf = Dy, y.lowerCase = AI, y.lowerFirst = wI, y.lt = Gv, y.lte = Lv, y.max = y1, y.maxBy = v1, y.mean = I1, y.meanBy = C1, y.min = x1, y.minBy = A1, y.stubArray = bl, y.stubFalse = yl, y.stubObject = a1, y.stubString = l1, y.stubTrue = c1, y.multiply = w1, y.nth = My, y.noConflict = e1, y.noop = ml, y.now = ss, y.pad = SI, y.padEnd = EI, y.padStart = FI, y.parseInt = RI, y.random = bI, y.reduce = W0, y.reduceRight = X0, y.repeat = PI, y.replace = OI, y.result = sI, y.round = S1, y.runInContext = T, y.sample = z0, y.size = J0, y.snakeCase = TI, y.some = U0, y.sortedIndex = Zy, y.sortedIndexBy = Yy, y.sortedIndexOf = Jy, y.sortedLastIndex = Uy, y.sortedLastIndexBy = jy, y.sortedLastIndexOf = Qy, y.startCase = _I, y.startsWith = GI, y.subtract = E1, y.sum = F1, y.sumBy = R1, y.template = LI, y.times = f1, y.toFinite = hr, y.toInteger = Ge, y.toLength = Td, y.toLower = kI, y.toNumber = wn, y.toSafeInteger = kv, y.toString = Qe, y.toUpper = DI, y.trim = MI, y.trimEnd = NI, y.trimStart = VI, y.truncate = WI, y.unescape = XI, y.uniqueId = p1, y.upperCase = HI, y.upperFirst = dl, y.each = bd, y.eachRight = yd, y.first = pd, gl(y, function() {
          var n = {};
          return Xn(y, function(i, s) {
            $e.call(y.prototype, s) || (n[s] = i);
          }), n;
        }(), { chain: !1 }), y.VERSION = u, yn(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(n) {
          y[n].placeholder = y;
        }), yn(["drop", "take"], function(n, i) {
          Xe.prototype[n] = function(s) {
            s = s === r ? 1 : St(Ge(s), 0);
            var d = this.__filtered__ && !i ? new Xe(this) : this.clone();
            return d.__filtered__ ? d.__takeCount__ = Bt(s, d.__takeCount__) : d.__views__.push({
              size: Bt(s, ke),
              type: n + (d.__dir__ < 0 ? "Right" : "")
            }), d;
          }, Xe.prototype[n + "Right"] = function(s) {
            return this.reverse()[n](s).reverse();
          };
        }), yn(["filter", "map", "takeWhile"], function(n, i) {
          var s = i + 1, d = s == $ || s == pe;
          Xe.prototype[n] = function(m) {
            var I = this.clone();
            return I.__iteratees__.push({
              iteratee: ye(m, 3),
              type: s
            }), I.__filtered__ = I.__filtered__ || d, I;
          };
        }), yn(["head", "last"], function(n, i) {
          var s = "take" + (i ? "Right" : "");
          Xe.prototype[n] = function() {
            return this[s](1).value()[0];
          };
        }), yn(["initial", "tail"], function(n, i) {
          var s = "drop" + (i ? "" : "Right");
          Xe.prototype[n] = function() {
            return this.__filtered__ ? new Xe(this) : this[s](1);
          };
        }), Xe.prototype.compact = function() {
          return this.filter(Kt);
        }, Xe.prototype.find = function(n) {
          return this.filter(n).head();
        }, Xe.prototype.findLast = function(n) {
          return this.reverse().find(n);
        }, Xe.prototype.invokeMap = Me(function(n, i) {
          return typeof n == "function" ? new Xe(this) : this.map(function(s) {
            return Fu(s, n, i);
          });
        }), Xe.prototype.reject = function(n) {
          return this.filter(ls(ye(n)));
        }, Xe.prototype.slice = function(n, i) {
          n = Ge(n);
          var s = this;
          return s.__filtered__ && (n > 0 || i < 0) ? new Xe(s) : (n < 0 ? s = s.takeRight(-n) : n && (s = s.drop(n)), i !== r && (i = Ge(i), s = i < 0 ? s.dropRight(-i) : s.take(i - n)), s);
        }, Xe.prototype.takeRightWhile = function(n) {
          return this.reverse().takeWhile(n).reverse();
        }, Xe.prototype.toArray = function() {
          return this.take(ke);
        }, Xn(Xe.prototype, function(n, i) {
          var s = /^(?:filter|find|map|reject)|While$/.test(i), d = /^(?:head|last)$/.test(i), m = y[d ? "take" + (i == "last" ? "Right" : "") : i], I = d || /^find/.test(i);
          m && (y.prototype[i] = function() {
            var x = this.__wrapped__, R = d ? [1] : arguments, _ = x instanceof Xe, Z = R[0], Y = _ || Pe(x), Q = function(Ve) {
              var ze = m.apply(y, wr([Ve], R));
              return d && ie ? ze[0] : ze;
            };
            Y && s && typeof Z == "function" && Z.length != 1 && (_ = Y = !1);
            var ie = this.__chain__, fe = !!this.__actions__.length, Ie = I && !ie, Le = _ && !fe;
            if (!I && Y) {
              x = Le ? x : new Xe(this);
              var Ce = n.apply(x, R);
              return Ce.__actions__.push({ func: us, args: [Q], thisArg: r }), new In(Ce, ie);
            }
            return Ie && Le ? n.apply(this, R) : (Ce = this.thru(Q), Ie ? d ? Ce.value()[0] : Ce.value() : Ce);
          });
        }), yn(["pop", "push", "shift", "sort", "splice", "unshift"], function(n) {
          var i = To[n], s = /^(?:push|sort|unshift)$/.test(n) ? "tap" : "thru", d = /^(?:pop|shift)$/.test(n);
          y.prototype[n] = function() {
            var m = arguments;
            if (d && !this.__chain__) {
              var I = this.value();
              return i.apply(Pe(I) ? I : [], m);
            }
            return this[s](function(x) {
              return i.apply(Pe(x) ? x : [], m);
            });
          };
        }), Xn(Xe.prototype, function(n, i) {
          var s = y[i];
          if (s) {
            var d = s.name + "";
            $e.call(_i, d) || (_i[d] = []), _i[d].push({ name: i, func: s });
          }
        }), _i[$o(r, F).name] = [{
          name: "wrapper",
          func: r
        }], Xe.prototype.clone = Xm, Xe.prototype.reverse = Hm, Xe.prototype.value = zm, y.prototype.at = v0, y.prototype.chain = I0, y.prototype.commit = C0, y.prototype.next = x0, y.prototype.plant = w0, y.prototype.reverse = S0, y.prototype.toJSON = y.prototype.valueOf = y.prototype.value = E0, y.prototype.first = y.prototype.head, Iu && (y.prototype[Iu] = A0), y;
      }, Oi = Cm();
      gt ? ((gt.exports = Oi)._ = Oi, rt._ = Oi) : He._ = Oi;
    }).call(nR);
  }(Xu, Xu.exports)), Xu.exports;
}
var iR = rR();
const uR = /* @__PURE__ */ Vs(iR), Vl = [
  "$.service.db",
  "$.interface.http",
  "$.interface.apphook",
  "$.interface.timer"
  // TODO add support for this (cron string and timers)
], qg = Ku(void 0), Hc = () => {
  const e = uu(qg);
  if (!e)
    throw new Error("Must be used inside provider");
  return e;
}, oR = ({
  children: e,
  props: t
}) => {
  const r = Xr(), u = bc(), {
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
  Mn(() => {
    k({});
  }, [
    o.key
  ]);
  const L = (se) => F[se.name];
  let D = a || {};
  const [
    X,
    G
  ] = et(D), H = t.onUpdateConfiguredProps || G;
  t.onUpdateConfiguredProps || (D = X);
  const [
    z,
    N
  ] = et(), [
    re,
    J
  ] = et(), j = {
    userId: c,
    componentId: f,
    configuredProps: D,
    dynamicPropsId: z == null ? void 0 : z.id
  }, ne = {
    ...j
  }, {
    isFetching: $
    // TODO error
  } = hi({
    queryKey: [
      "dynamicProps",
      ne
    ],
    queryFn: async () => {
      var ce;
      const { dynamicProps: se } = await r.componentReloadProps(j);
      return se && ((ce = t.onUpdateDynamicProps) == null || ce.call(t, se), N(se)), J(void 0), [];
    },
    enabled: re != null
    // TODO or props.dynamicPropsId && !dynamicProps
  }), [
    te,
    pe
  ] = et([]);
  Mn(() => {
    Ne();
  }, [
    D
  ]);
  let ee = (z == null ? void 0 : z.configurableProps) || t.component.configurable_props || [];
  if (l != null && l.length) {
    const se = [];
    for (const ce of ee)
      l.findIndex((we) => ce.name === we) >= 0 && se.push(ce);
    ee = se;
  }
  re != null && (ee = ee.slice(0, re + 1));
  const de = (se, ce) => {
    const we = [];
    if (se.optional || se.hidden || se.disabled || Vl.includes(se.type)) return [];
    if (se.type === "app") {
      const Fe = g[se.name];
      if (Fe) {
        const vt = Fe.extra.app;
        we.push(...tR({
          prop: se,
          value: ce,
          app: vt
        }) ?? []);
      } else
        we.push("field not registered");
    } else se.type === "boolean" ? we.push(...qF({
      prop: se,
      value: ce
    }) ?? []) : se.type === "integer" ? we.push(...$F({
      prop: se,
      value: ce
    }) ?? []) : se.type === "string" ? we.push(...KF({
      prop: se,
      value: ce
    }) ?? []) : se.type === "string[]" && we.push(...QF({
      prop: se,
      value: ce
    }) ?? []);
    return we;
  }, We = (se) => {
    let ce;
    for (let we = 0; we < ee.length; we++) {
      const Fe = ee[we];
      if (Fe.hidden || Fe.optional && !L(Fe))
        continue;
      if (se[Fe.name] === void 0 && ce == null && (Fe.type === "app" || Fe.remoteOptions)) {
        ce = we;
        break;
      }
    }
    h(ce);
  }, w = (se) => {
    H(se), We(se);
    const ce = {};
    for (let we = 0; we < ee.length; we++) {
      const Fe = ee[we], vt = se[Fe.name], rn = de(Fe, vt);
      rn.length && (ce[Fe.name] = rn);
    }
    E(ce);
  };
  Mn(() => {
    We(X);
  }, [
    X
  ]), Mn(() => {
    const se = {};
    for (const ce of ee) {
      if (ce.hidden || Vl.includes(ce.type) || ce.optional && !L(ce))
        continue;
      const we = D[ce.name];
      we === void 0 ? "default" in ce && ce.default != null && (se[ce.name] = ce.default) : ce.type === "integer" && typeof we != "number" ? delete se[ce.name] : se[ce.name] = we;
    }
    UF(se, D) || w(se);
  }, [
    ee
  ]);
  const [
    ke,
    Ee
  ] = et(c);
  Mn(() => {
    ke !== c && (w({}), Ee(c));
  }, [
    c
  ]);
  const S = (se, ce) => {
    const we = ee[se], Fe = {
      ...D
    };
    ce === void 0 ? delete Fe[we.name] : Fe[we.name] = ce, H(Fe), we.reloadProps && J(se), (we.type === "app" || we.remoteOptions) && We(Fe);
    const vt = de(we, ce), rn = {
      ...A
    };
    vt.length ? rn[we.name] = vt : delete rn[we.name], E(rn);
  }, [Je, be] = et({}), De = (se, ce) => {
    be((Fe) => ({
      ...Fe,
      [se.name]: ce
    }));
    const we = ee.findIndex((Fe) => Fe.name === se.name);
    S(we, ce);
  }, yt = (se) => Je[se.name] ?? !1, Ne = () => {
    const se = [];
    for (const ce of ee) {
      if (!ce || ce.optional || ce.hidden || Vl.includes(ce.type)) continue;
      const we = D[ce.name];
      de(ce, we).length && se.push(ce.name);
    }
    te && uR.isEqual(se, te) || pe(se);
  }, ft = (se) => {
    v((ce) => (ce[se.prop.name] = se, ce)), Ne();
  }, Dt = {
    id: u,
    isValid: !Object.keys(A).length,
    // XXX want to expose more from errors
    props: {
      ...t,
      overrideProps: t.overrideProps
    },
    userId: c,
    component: o,
    configurableProps: ee,
    configuredProps: D,
    dynamicProps: z,
    dynamicPropsQueryIsFetching: $,
    errors: A,
    fields: g,
    optionalPropIsEnabled: L,
    optionalPropSetEnabled: De,
    getOptionalPropValue: yt,
    propsNeedConfiguring: te,
    queryDisabledIdx: p,
    registerField: ft,
    setConfiguredProp: S,
    setSubmitting: P,
    submitting: b
  };
  return /* @__PURE__ */ ue(qg.Provider, { value: Dt, children: e });
}, sR = (e) => {
  const { getComponents: t } = Tt(), { ControlSelect: r } = t();
  return /* @__PURE__ */ ue(r, { ...e });
};
function aR({ queryEnabled: e }) {
  const t = Xr(), {
    userId: r,
    component: u,
    configurableProps: o,
    configuredProps: a,
    dynamicProps: l,
    props: { disableQueryDisabling: c }
  } = Hc(), {
    idx: f,
    prop: p
  } = gi(), [
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
  for (let te = 0; te < f; te++) {
    const pe = o[te];
    D[pe.name] = a[pe.name];
  }
  const X = {
    userId: r,
    page: v,
    prevContext: E,
    componentId: u.key,
    propName: p.name,
    configuredProps: D,
    dynamicPropsId: l == null ? void 0 : l.id
  };
  p.useQuery && (X.query = h || "");
  const G = {
    ...X
  };
  delete G.dynamicPropsId;
  const [
    H,
    z
  ] = et(), N = () => {
    b(k.page), F(k.prevContext), L({
      ...k,
      prevContext: {}
    });
  }, {
    isFetching: re,
    refetch: J
  } = hi({
    queryKey: [
      "componentConfigure",
      G
    ],
    queryFn: async () => {
      z(void 0);
      const te = await t.componentConfigure(X), {
        options: pe,
        stringOptions: ee,
        errors: de
      } = te;
      if (de != null && de.length) {
        try {
          z(JSON.parse(de[0]));
        } catch {
          z({
            name: "Error",
            message: de[0]
          });
        }
        return [];
      }
      let We = [];
      if (pe != null && pe.length && (We = pe), ee != null && ee.length) {
        const S = [];
        for (const Je of ee)
          S.push({
            label: Je,
            value: Je
          });
        We = S;
      }
      const w = [], ke = new Set(k.values);
      for (const S of We || []) {
        const Je = typeof S == "string" ? S : S.value;
        ke.has(Je) || (ke.add(Je), w.push(S));
      }
      let Ee = k.data;
      return w.length ? (Ee = [
        ...k.data,
        ...w
      ], L({
        page: v + 1,
        prevContext: te.context,
        data: Ee,
        values: ke
      })) : A(!1), Ee;
    },
    enabled: !!e
  }), j = () => !re && !H && P, ne = H ? H.message : c ? "Click to configure" : e ? void 0 : "Configure props above first", $ = c ? !1 : !e;
  return /* @__PURE__ */ ue(
    pg,
    {
      isCreatable: !0,
      showLoadMoreButton: j(),
      onLoadMore: N,
      options: k.data,
      component: sR,
      selectProps: {
        isLoading: re,
        placeholder: ne,
        isDisabled: $,
        inputValue: p.useQuery ? h : void 0,
        onInputChange(te) {
          p.useQuery && (g(te), J());
        },
        onMenuOpen() {
          c && !e && J();
        }
      }
    }
  );
}
function lR(e) {
  const { field: t, form: r } = e, { queryDisabledIdx: u } = r, { prop: o, idx: a } = t, { getComponents: l } = Tt(), { ControlInput: c } = l(), { ControlApp: f } = l(), { ControlSelect: p } = l(), { ControlBoolean: h } = l(), { ControlObject: g } = l(), { ControlHttpRequest: v } = l(), b = "app" in t.extra ? t.extra.app : void 0;
  if (o.remoteOptions || o.type === "$.discord.channel")
    return /* @__PURE__ */ ue(
      aR,
      {
        queryEnabled: u == null || u >= a,
        component: p
      }
    );
  if ("options" in o && o.options) {
    let P = o.options;
    return typeof P[0] != "object" && (P = P.map((A) => ({
      label: A,
      value: A
    }))), /* @__PURE__ */ ue(
      p,
      {
        options: P.map((A) => ({
          label: String(A),
          value: A
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
    return /* @__PURE__ */ ue(
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
      return /* @__PURE__ */ ue(f, { app: b });
    case "boolean":
      return /* @__PURE__ */ ue(h, {});
    case "string":
    case "integer":
      return /* @__PURE__ */ ue(c, {});
    case "object":
      return /* @__PURE__ */ ue(g, {});
    case "http_request":
      return /* @__PURE__ */ ue(v, {});
    default:
      throw new Error("Unsupported property type: " + o.type);
  }
}
function cR(e) {
  const {
    form: t,
    field: r
  } = e, { prop: u } = r, {
    getProps: o,
    getComponents: a
  } = Tt(), l = {
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
  return g && (v = `Connect ${g.name} account`), /* @__PURE__ */ vr("div", { ...o("field", l, e), children: [
    /* @__PURE__ */ ue(c, { text: v, field: r, form: t }),
    /* @__PURE__ */ ue(lR, { field: r, form: t }),
    /* @__PURE__ */ ue(f, { markdown: u.description, field: r, form: t }),
    /* @__PURE__ */ ue(p, { errors: h, field: r, form: t })
  ] });
}
const fR = (e, t) => {
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
function ah({
  prop: e,
  idx: t
}) {
  const r = Hc(), {
    id: u,
    configuredProps: o,
    registerField: a,
    setConfiguredProp: l
  } = r, c = e.type === "app" && "app" in e ? e.app : void 0, {
    // TODO error
    app: f
  } = fR(c || "", {
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
  return Mn(() => a(h), [
    h
  ]), /* @__PURE__ */ ue(fg.Provider, { value: h, children: /* @__PURE__ */ ue(cR, { field: h, form: r }) });
}
class dR extends yh {
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
function pR(e) {
  const { form: t } = e, {
    propsNeedConfiguring: r,
    submitting: u
  } = t, {
    getProps: o,
    theme: a
  } = Tt();
  return /* @__PURE__ */ ue("input", { type: "submit", value: u ? "Submitting..." : "Submit", ...o("controlSubmit", ((c) => {
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
function hR() {
  var pe;
  const e = Hc(), {
    configurableProps: t,
    dynamicPropsQueryIsFetching: r,
    isValid: u,
    optionalPropIsEnabled: o,
    optionalPropSetEnabled: a,
    getOptionalPropValue: l,
    props: c,
    setSubmitting: f,
    setConfiguredProp: p
  } = e, {
    hideOptionalProps: h,
    onSubmit: g,
    overrideProps: v
  } = c, {
    getComponents: b,
    getProps: P,
    theme: A
  } = Tt(), { OptionalFieldButton: E, LoaderComponent: F, DynamicLoaderComponent: k, OptionalFieldsContainer: L, Alert: D, OverrideField: X } = b(), G = {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem"
  }, H = {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.375rem"
  };
  A.colors.neutral60;
  const [z, N] = et(!1), re = t.find((ee) => ee.type === "app"), J = re == null ? void 0 : re.app, j = $n(!1);
  Mn(() => {
    if (!j.current && v && J && v[J]) {
      const ee = v[J], We = Object.entries(ee).map(([w, ke]) => {
        const Ee = t.findIndex((S) => S.name === w);
        return { propName: w, propIndex: Ee, value: ke };
      }).filter(({ propIndex: w }) => w !== -1).reduce((w, { propName: ke, value: Ee }) => (w[ke] = Ee, w), {});
      if (c.onUpdateConfiguredProps) {
        const w = {
          ...e.configuredProps,
          ...We
        };
        c.onUpdateConfiguredProps(w);
      }
      j.current = !0;
    }
  }, [J, v, t]);
  const ne = async (ee) => {
    if (g && (ee.preventDefault(), u)) {
      f(!0);
      try {
        await g(e);
      } finally {
        f(!1);
      }
    }
  }, $ = [], te = [];
  for (const [ee, de] of t.entries())
    J && ((pe = v == null ? void 0 : v[J]) == null ? void 0 : pe[de.name]) !== void 0 || (de.optional ? (te.push([de, o(de)]), $.push([de, ee])) : de.hidden || $.push([de, ee]));
  return /* @__PURE__ */ ue(dR, { fallback: (ee) => /* @__PURE__ */ vr("p", { style: { color: "red" }, children: [
    "Error: ",
    ee && typeof ee == "object" && "message" in ee && typeof ee.message == "string" ? ee.message : "Unknown"
  ] }), children: /* @__PURE__ */ ue(O1, { fallback: /* @__PURE__ */ ue(F, {}), children: /* @__PURE__ */ vr("form", { ...P("componentForm", G, c), onSubmit: ne, children: [
    $.filter(([ee]) => !ee.optional).map(([ee, de]) => ee.type === "alert" ? /* @__PURE__ */ ue(D, { prop: ee }, ee.name) : /* @__PURE__ */ ue(ah, { prop: ee, idx: de }, ee.name)),
    L && $.some(([ee]) => ee.optional) ? /* @__PURE__ */ ue(
      L,
      {
        baseStyles: H,
        title: "Optional Fields",
        expanded: z,
        onToggle: () => N(!z),
        children: z && $.filter(([ee]) => ee.optional).map(([ee, de]) => /* @__PURE__ */ ue(ah, { prop: ee, idx: de }, ee.name))
      }
    ) : null,
    r && /* @__PURE__ */ ue(k, {}),
    g && /* @__PURE__ */ ue(pR, { form: e }),
    J && (v == null ? void 0 : v[J]) && Object.entries(v[J]).map(([ee, de]) => {
      const We = t.find((w) => w.name === ee);
      return We ? /* @__PURE__ */ ue(X, { prop: We, value: de, appName: J }, ee) : null;
    })
  ] }) }) });
}
function gR(e) {
  return /* @__PURE__ */ ue(oR, { props: e, children: /* @__PURE__ */ ue(hR, {}) });
}
const mR = ({ key: e }, t) => {
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
function ER(e) {
  const {
    isLoading: t,
    error: r,
    component: u
  } = mR({
    key: e.componentKey
  });
  if (!e.componentKey)
    throw new Error("componentKey required");
  return t ? /* @__PURE__ */ ue("p", { children: "Loading..." }) : r ? /* @__PURE__ */ vr("p", { children: [
    "Error: ",
    r.message
  ] }) : u ? /* @__PURE__ */ ue(gR, { component: u, ...e }) : /* @__PURE__ */ ue("p", { children: "Component not found" });
}
function FR() {
  const e = gi(), {
    id: t,
    onChange: r,
    value: u
  } = e, {
    getProps: o,
    theme: a
  } = Tt(), l = {
    display: "block",
    gridArea: "control",
    width: "100%",
    fontSize: "0.875rem",
    boxShadow: a.boxShadow.input
  };
  let c = u;
  return typeof c == "object" && (c = JSON.stringify(c)), /* @__PURE__ */ ue(
    "textarea",
    {
      id: t,
      value: c,
      onChange: (f) => r(f.target.value),
      ...o("controlAny", l, e)
    }
  );
}
const bR = (e) => {
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
function RR({
  value: e,
  onChange: t
}) {
  const [
    r,
    u
  ] = et(""), o = bc(), {
    isLoading: a,
    // TODO error
    apps: l
  } = bR({
    q: r
  }), { Option: c } = eo;
  return /* @__PURE__ */ ue(
    Ns,
    {
      instanceId: o,
      className: "react-select-container text-sm",
      classNamePrefix: "react-select",
      components: {
        Option: (f) => /* @__PURE__ */ ue(c, { ...f, children: /* @__PURE__ */ vr("div", { style: {
          display: "flex",
          gap: 10
        }, children: [
          /* @__PURE__ */ ue(
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
          /* @__PURE__ */ ue("span", { style: {
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
const yR = (e) => {
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
function PR({
  app: e,
  componentType: t,
  value: r,
  onChange: u
}) {
  const o = bc(), {
    isLoading: a,
    // TODO error
    components: l
  } = yR({
    app: e == null ? void 0 : e.name_slug,
    componentType: t
  });
  return /* @__PURE__ */ ue(
    Ns,
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
  ZF as Alert,
  gR as ComponentForm,
  ER as ComponentFormContainer,
  lR as Control,
  FR as ControlAny,
  cw as ControlApp,
  fw as ControlBoolean,
  XF as ControlHttpRequest,
  dw as ControlInput,
  pg as ControlSelect,
  pR as ControlSubmit,
  Xc as CustomizationContext,
  SR as CustomizeProvider,
  LF as Description,
  dR as ErrorBoundary,
  kF as Errors,
  cR as Field,
  qg as FormContext,
  oR as FormContextProvider,
  fg as FormFieldContext,
  wR as FrontendClientProvider,
  hR as InternalComponentForm,
  ah as InternalField,
  DF as Label,
  MF as OptionalFieldButton,
  aR as RemoteOptionsContainer,
  RR as SelectApp,
  PR as SelectComponent,
  HF as defaultComponents,
  wc as defaultTheme,
  RA as getReactSelectTheme,
  Jl as mergeTheme,
  Vl as skippablePropTypes,
  FA as unstyledTheme,
  aw as useAccounts,
  fR as useApp,
  bR as useApps,
  mR as useComponent,
  yR as useComponents,
  Tt as useCustomize,
  Hc as useFormContext,
  gi as useFormFieldContext,
  Xr as useFrontendClient
};
