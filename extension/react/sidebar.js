function Ku(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var ho = { exports: {} }, oa = {};
var ed;
function Ig() {
  if (ed) return oa;
  ed = 1;
  var i = /* @__PURE__ */ Symbol.for("react.transitional.element"), a = /* @__PURE__ */ Symbol.for("react.fragment");
  function r(c, s, f) {
    var h = null;
    if (f !== void 0 && (h = "" + f), s.key !== void 0 && (h = "" + s.key), "key" in s) {
      f = {};
      for (var p in s)
        p !== "key" && (f[p] = s[p]);
    } else f = s;
    return s = f.ref, {
      $$typeof: i,
      type: c,
      key: h,
      ref: s !== void 0 ? s : null,
      props: f
    };
  }
  return oa.Fragment = a, oa.jsx = r, oa.jsxs = r, oa;
}
var nd;
function Wg() {
  return nd || (nd = 1, ho.exports = Ig()), ho.exports;
}
var q = Wg(), mo = { exports: {} }, sa = {}, po = { exports: {} }, yo = {};
var ld;
function $g() {
  return ld || (ld = 1, (function(i) {
    function a(N, V) {
      var et = N.length;
      N.push(V);
      t: for (; 0 < et; ) {
        var gt = et - 1 >>> 1, A = N[gt];
        if (0 < s(A, V))
          N[gt] = V, N[et] = A, et = gt;
        else break t;
      }
    }
    function r(N) {
      return N.length === 0 ? null : N[0];
    }
    function c(N) {
      if (N.length === 0) return null;
      var V = N[0], et = N.pop();
      if (et !== V) {
        N[0] = et;
        t: for (var gt = 0, A = N.length, z = A >>> 1; gt < z; ) {
          var U = 2 * (gt + 1) - 1, b = N[U], J = U + 1, rt = N[J];
          if (0 > s(b, et))
            J < A && 0 > s(rt, b) ? (N[gt] = rt, N[J] = et, gt = J) : (N[gt] = b, N[U] = et, gt = U);
          else if (J < A && 0 > s(rt, et))
            N[gt] = rt, N[J] = et, gt = J;
          else break t;
        }
      }
      return V;
    }
    function s(N, V) {
      var et = N.sortIndex - V.sortIndex;
      return et !== 0 ? et : N.id - V.id;
    }
    if (i.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var f = performance;
      i.unstable_now = function() {
        return f.now();
      };
    } else {
      var h = Date, p = h.now();
      i.unstable_now = function() {
        return h.now() - p;
      };
    }
    var g = [], d = [], v = 1, S = null, E = 3, x = !1, Y = !1, G = !1, F = !1, R = typeof setTimeout == "function" ? setTimeout : null, nt = typeof clearTimeout == "function" ? clearTimeout : null, Q = typeof setImmediate < "u" ? setImmediate : null;
    function st(N) {
      for (var V = r(d); V !== null; ) {
        if (V.callback === null) c(d);
        else if (V.startTime <= N)
          c(d), V.sortIndex = V.expirationTime, a(g, V);
        else break;
        V = r(d);
      }
    }
    function vt(N) {
      if (G = !1, st(N), !Y)
        if (r(g) !== null)
          Y = !0, L || (L = !0, I());
        else {
          var V = r(d);
          V !== null && Z(vt, V.startTime - N);
        }
    }
    var L = !1, W = -1, mt = 5, dt = -1;
    function zt() {
      return F ? !0 : !(i.unstable_now() - dt < mt);
    }
    function P() {
      if (F = !1, L) {
        var N = i.unstable_now();
        dt = N;
        var V = !0;
        try {
          t: {
            Y = !1, G && (G = !1, nt(W), W = -1), x = !0;
            var et = E;
            try {
              e: {
                for (st(N), S = r(g); S !== null && !(S.expirationTime > N && zt()); ) {
                  var gt = S.callback;
                  if (typeof gt == "function") {
                    S.callback = null, E = S.priorityLevel;
                    var A = gt(
                      S.expirationTime <= N
                    );
                    if (N = i.unstable_now(), typeof A == "function") {
                      S.callback = A, st(N), V = !0;
                      break e;
                    }
                    S === r(g) && c(g), st(N);
                  } else c(g);
                  S = r(g);
                }
                if (S !== null) V = !0;
                else {
                  var z = r(d);
                  z !== null && Z(
                    vt,
                    z.startTime - N
                  ), V = !1;
                }
              }
              break t;
            } finally {
              S = null, E = et, x = !1;
            }
            V = void 0;
          }
        } finally {
          V ? I() : L = !1;
        }
      }
    }
    var I;
    if (typeof Q == "function")
      I = function() {
        Q(P);
      };
    else if (typeof MessageChannel < "u") {
      var _t = new MessageChannel(), lt = _t.port2;
      _t.port1.onmessage = P, I = function() {
        lt.postMessage(null);
      };
    } else
      I = function() {
        R(P, 0);
      };
    function Z(N, V) {
      W = R(function() {
        N(i.unstable_now());
      }, V);
    }
    i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(N) {
      N.callback = null;
    }, i.unstable_forceFrameRate = function(N) {
      0 > N || 125 < N ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : mt = 0 < N ? Math.floor(1e3 / N) : 5;
    }, i.unstable_getCurrentPriorityLevel = function() {
      return E;
    }, i.unstable_next = function(N) {
      switch (E) {
        case 1:
        case 2:
        case 3:
          var V = 3;
          break;
        default:
          V = E;
      }
      var et = E;
      E = V;
      try {
        return N();
      } finally {
        E = et;
      }
    }, i.unstable_requestPaint = function() {
      F = !0;
    }, i.unstable_runWithPriority = function(N, V) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var et = E;
      E = N;
      try {
        return V();
      } finally {
        E = et;
      }
    }, i.unstable_scheduleCallback = function(N, V, et) {
      var gt = i.unstable_now();
      switch (typeof et == "object" && et !== null ? (et = et.delay, et = typeof et == "number" && 0 < et ? gt + et : gt) : et = gt, N) {
        case 1:
          var A = -1;
          break;
        case 2:
          A = 250;
          break;
        case 5:
          A = 1073741823;
          break;
        case 4:
          A = 1e4;
          break;
        default:
          A = 5e3;
      }
      return A = et + A, N = {
        id: v++,
        callback: V,
        priorityLevel: N,
        startTime: et,
        expirationTime: A,
        sortIndex: -1
      }, et > gt ? (N.sortIndex = et, a(d, N), r(g) === null && N === r(d) && (G ? (nt(W), W = -1) : G = !0, Z(vt, et - gt))) : (N.sortIndex = A, a(g, N), Y || x || (Y = !0, L || (L = !0, I()))), N;
    }, i.unstable_shouldYield = zt, i.unstable_wrapCallback = function(N) {
      var V = E;
      return function() {
        var et = E;
        E = V;
        try {
          return N.apply(this, arguments);
        } finally {
          E = et;
        }
      };
    };
  })(yo)), yo;
}
var id;
function Pg() {
  return id || (id = 1, po.exports = $g()), po.exports;
}
var go = { exports: {} }, ft = {};
var ad;
function t1() {
  if (ad) return ft;
  ad = 1;
  var i = /* @__PURE__ */ Symbol.for("react.transitional.element"), a = /* @__PURE__ */ Symbol.for("react.portal"), r = /* @__PURE__ */ Symbol.for("react.fragment"), c = /* @__PURE__ */ Symbol.for("react.strict_mode"), s = /* @__PURE__ */ Symbol.for("react.profiler"), f = /* @__PURE__ */ Symbol.for("react.consumer"), h = /* @__PURE__ */ Symbol.for("react.context"), p = /* @__PURE__ */ Symbol.for("react.forward_ref"), g = /* @__PURE__ */ Symbol.for("react.suspense"), d = /* @__PURE__ */ Symbol.for("react.memo"), v = /* @__PURE__ */ Symbol.for("react.lazy"), S = /* @__PURE__ */ Symbol.for("react.activity"), E = Symbol.iterator;
  function x(z) {
    return z === null || typeof z != "object" ? null : (z = E && z[E] || z["@@iterator"], typeof z == "function" ? z : null);
  }
  var Y = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, G = Object.assign, F = {};
  function R(z, U, b) {
    this.props = z, this.context = U, this.refs = F, this.updater = b || Y;
  }
  R.prototype.isReactComponent = {}, R.prototype.setState = function(z, U) {
    if (typeof z != "object" && typeof z != "function" && z != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, z, U, "setState");
  }, R.prototype.forceUpdate = function(z) {
    this.updater.enqueueForceUpdate(this, z, "forceUpdate");
  };
  function nt() {
  }
  nt.prototype = R.prototype;
  function Q(z, U, b) {
    this.props = z, this.context = U, this.refs = F, this.updater = b || Y;
  }
  var st = Q.prototype = new nt();
  st.constructor = Q, G(st, R.prototype), st.isPureReactComponent = !0;
  var vt = Array.isArray;
  function L() {
  }
  var W = { H: null, A: null, T: null, S: null }, mt = Object.prototype.hasOwnProperty;
  function dt(z, U, b) {
    var J = b.ref;
    return {
      $$typeof: i,
      type: z,
      key: U,
      ref: J !== void 0 ? J : null,
      props: b
    };
  }
  function zt(z, U) {
    return dt(z.type, U, z.props);
  }
  function P(z) {
    return typeof z == "object" && z !== null && z.$$typeof === i;
  }
  function I(z) {
    var U = { "=": "=0", ":": "=2" };
    return "$" + z.replace(/[=:]/g, function(b) {
      return U[b];
    });
  }
  var _t = /\/+/g;
  function lt(z, U) {
    return typeof z == "object" && z !== null && z.key != null ? I("" + z.key) : U.toString(36);
  }
  function Z(z) {
    switch (z.status) {
      case "fulfilled":
        return z.value;
      case "rejected":
        throw z.reason;
      default:
        switch (typeof z.status == "string" ? z.then(L, L) : (z.status = "pending", z.then(
          function(U) {
            z.status === "pending" && (z.status = "fulfilled", z.value = U);
          },
          function(U) {
            z.status === "pending" && (z.status = "rejected", z.reason = U);
          }
        )), z.status) {
          case "fulfilled":
            return z.value;
          case "rejected":
            throw z.reason;
        }
    }
    throw z;
  }
  function N(z, U, b, J, rt) {
    var it = typeof z;
    (it === "undefined" || it === "boolean") && (z = null);
    var Et = !1;
    if (z === null) Et = !0;
    else
      switch (it) {
        case "bigint":
        case "string":
        case "number":
          Et = !0;
          break;
        case "object":
          switch (z.$$typeof) {
            case i:
            case a:
              Et = !0;
              break;
            case v:
              return Et = z._init, N(
                Et(z._payload),
                U,
                b,
                J,
                rt
              );
          }
      }
    if (Et)
      return rt = rt(z), Et = J === "" ? "." + lt(z, 0) : J, vt(rt) ? (b = "", Et != null && (b = Et.replace(_t, "$&/") + "/"), N(rt, U, b, "", function(He) {
        return He;
      })) : rt != null && (P(rt) && (rt = zt(
        rt,
        b + (rt.key == null || z && z.key === rt.key ? "" : ("" + rt.key).replace(
          _t,
          "$&/"
        ) + "/") + Et
      )), U.push(rt)), 1;
    Et = 0;
    var Qt = J === "" ? "." : J + ":";
    if (vt(z))
      for (var Ut = 0; Ut < z.length; Ut++)
        J = z[Ut], it = Qt + lt(J, Ut), Et += N(
          J,
          U,
          b,
          it,
          rt
        );
    else if (Ut = x(z), typeof Ut == "function")
      for (z = Ut.call(z), Ut = 0; !(J = z.next()).done; )
        J = J.value, it = Qt + lt(J, Ut++), Et += N(
          J,
          U,
          b,
          it,
          rt
        );
    else if (it === "object") {
      if (typeof z.then == "function")
        return N(
          Z(z),
          U,
          b,
          J,
          rt
        );
      throw U = String(z), Error(
        "Objects are not valid as a React child (found: " + (U === "[object Object]" ? "object with keys {" + Object.keys(z).join(", ") + "}" : U) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return Et;
  }
  function V(z, U, b) {
    if (z == null) return z;
    var J = [], rt = 0;
    return N(z, J, "", "", function(it) {
      return U.call(b, it, rt++);
    }), J;
  }
  function et(z) {
    if (z._status === -1) {
      var U = z._result;
      U = U(), U.then(
        function(b) {
          (z._status === 0 || z._status === -1) && (z._status = 1, z._result = b);
        },
        function(b) {
          (z._status === 0 || z._status === -1) && (z._status = 2, z._result = b);
        }
      ), z._status === -1 && (z._status = 0, z._result = U);
    }
    if (z._status === 1) return z._result.default;
    throw z._result;
  }
  var gt = typeof reportError == "function" ? reportError : function(z) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var U = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof z == "object" && z !== null && typeof z.message == "string" ? String(z.message) : String(z),
        error: z
      });
      if (!window.dispatchEvent(U)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", z);
      return;
    }
    console.error(z);
  }, A = {
    map: V,
    forEach: function(z, U, b) {
      V(
        z,
        function() {
          U.apply(this, arguments);
        },
        b
      );
    },
    count: function(z) {
      var U = 0;
      return V(z, function() {
        U++;
      }), U;
    },
    toArray: function(z) {
      return V(z, function(U) {
        return U;
      }) || [];
    },
    only: function(z) {
      if (!P(z))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return z;
    }
  };
  return ft.Activity = S, ft.Children = A, ft.Component = R, ft.Fragment = r, ft.Profiler = s, ft.PureComponent = Q, ft.StrictMode = c, ft.Suspense = g, ft.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = W, ft.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(z) {
      return W.H.useMemoCache(z);
    }
  }, ft.cache = function(z) {
    return function() {
      return z.apply(null, arguments);
    };
  }, ft.cacheSignal = function() {
    return null;
  }, ft.cloneElement = function(z, U, b) {
    if (z == null)
      throw Error(
        "The argument must be a React element, but you passed " + z + "."
      );
    var J = G({}, z.props), rt = z.key;
    if (U != null)
      for (it in U.key !== void 0 && (rt = "" + U.key), U)
        !mt.call(U, it) || it === "key" || it === "__self" || it === "__source" || it === "ref" && U.ref === void 0 || (J[it] = U[it]);
    var it = arguments.length - 2;
    if (it === 1) J.children = b;
    else if (1 < it) {
      for (var Et = Array(it), Qt = 0; Qt < it; Qt++)
        Et[Qt] = arguments[Qt + 2];
      J.children = Et;
    }
    return dt(z.type, rt, J);
  }, ft.createContext = function(z) {
    return z = {
      $$typeof: h,
      _currentValue: z,
      _currentValue2: z,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, z.Provider = z, z.Consumer = {
      $$typeof: f,
      _context: z
    }, z;
  }, ft.createElement = function(z, U, b) {
    var J, rt = {}, it = null;
    if (U != null)
      for (J in U.key !== void 0 && (it = "" + U.key), U)
        mt.call(U, J) && J !== "key" && J !== "__self" && J !== "__source" && (rt[J] = U[J]);
    var Et = arguments.length - 2;
    if (Et === 1) rt.children = b;
    else if (1 < Et) {
      for (var Qt = Array(Et), Ut = 0; Ut < Et; Ut++)
        Qt[Ut] = arguments[Ut + 2];
      rt.children = Qt;
    }
    if (z && z.defaultProps)
      for (J in Et = z.defaultProps, Et)
        rt[J] === void 0 && (rt[J] = Et[J]);
    return dt(z, it, rt);
  }, ft.createRef = function() {
    return { current: null };
  }, ft.forwardRef = function(z) {
    return { $$typeof: p, render: z };
  }, ft.isValidElement = P, ft.lazy = function(z) {
    return {
      $$typeof: v,
      _payload: { _status: -1, _result: z },
      _init: et
    };
  }, ft.memo = function(z, U) {
    return {
      $$typeof: d,
      type: z,
      compare: U === void 0 ? null : U
    };
  }, ft.startTransition = function(z) {
    var U = W.T, b = {};
    W.T = b;
    try {
      var J = z(), rt = W.S;
      rt !== null && rt(b, J), typeof J == "object" && J !== null && typeof J.then == "function" && J.then(L, gt);
    } catch (it) {
      gt(it);
    } finally {
      U !== null && b.types !== null && (U.types = b.types), W.T = U;
    }
  }, ft.unstable_useCacheRefresh = function() {
    return W.H.useCacheRefresh();
  }, ft.use = function(z) {
    return W.H.use(z);
  }, ft.useActionState = function(z, U, b) {
    return W.H.useActionState(z, U, b);
  }, ft.useCallback = function(z, U) {
    return W.H.useCallback(z, U);
  }, ft.useContext = function(z) {
    return W.H.useContext(z);
  }, ft.useDebugValue = function() {
  }, ft.useDeferredValue = function(z, U) {
    return W.H.useDeferredValue(z, U);
  }, ft.useEffect = function(z, U) {
    return W.H.useEffect(z, U);
  }, ft.useEffectEvent = function(z) {
    return W.H.useEffectEvent(z);
  }, ft.useId = function() {
    return W.H.useId();
  }, ft.useImperativeHandle = function(z, U, b) {
    return W.H.useImperativeHandle(z, U, b);
  }, ft.useInsertionEffect = function(z, U) {
    return W.H.useInsertionEffect(z, U);
  }, ft.useLayoutEffect = function(z, U) {
    return W.H.useLayoutEffect(z, U);
  }, ft.useMemo = function(z, U) {
    return W.H.useMemo(z, U);
  }, ft.useOptimistic = function(z, U) {
    return W.H.useOptimistic(z, U);
  }, ft.useReducer = function(z, U, b) {
    return W.H.useReducer(z, U, b);
  }, ft.useRef = function(z) {
    return W.H.useRef(z);
  }, ft.useState = function(z) {
    return W.H.useState(z);
  }, ft.useSyncExternalStore = function(z, U, b) {
    return W.H.useSyncExternalStore(
      z,
      U,
      b
    );
  }, ft.useTransition = function() {
    return W.H.useTransition();
  }, ft.version = "19.2.4", ft;
}
var ud;
function Xo() {
  return ud || (ud = 1, go.exports = t1()), go.exports;
}
var vo = { exports: {} }, he = {};
var rd;
function e1() {
  if (rd) return he;
  rd = 1;
  var i = Xo();
  function a(g) {
    var d = "https://react.dev/errors/" + g;
    if (1 < arguments.length) {
      d += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var v = 2; v < arguments.length; v++)
        d += "&args[]=" + encodeURIComponent(arguments[v]);
    }
    return "Minified React error #" + g + "; visit " + d + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function r() {
  }
  var c = {
    d: {
      f: r,
      r: function() {
        throw Error(a(522));
      },
      D: r,
      C: r,
      L: r,
      m: r,
      X: r,
      S: r,
      M: r
    },
    p: 0,
    findDOMNode: null
  }, s = /* @__PURE__ */ Symbol.for("react.portal");
  function f(g, d, v) {
    var S = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: s,
      key: S == null ? null : "" + S,
      children: g,
      containerInfo: d,
      implementation: v
    };
  }
  var h = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function p(g, d) {
    if (g === "font") return "";
    if (typeof d == "string")
      return d === "use-credentials" ? d : "";
  }
  return he.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = c, he.createPortal = function(g, d) {
    var v = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!d || d.nodeType !== 1 && d.nodeType !== 9 && d.nodeType !== 11)
      throw Error(a(299));
    return f(g, d, null, v);
  }, he.flushSync = function(g) {
    var d = h.T, v = c.p;
    try {
      if (h.T = null, c.p = 2, g) return g();
    } finally {
      h.T = d, c.p = v, c.d.f();
    }
  }, he.preconnect = function(g, d) {
    typeof g == "string" && (d ? (d = d.crossOrigin, d = typeof d == "string" ? d === "use-credentials" ? d : "" : void 0) : d = null, c.d.C(g, d));
  }, he.prefetchDNS = function(g) {
    typeof g == "string" && c.d.D(g);
  }, he.preinit = function(g, d) {
    if (typeof g == "string" && d && typeof d.as == "string") {
      var v = d.as, S = p(v, d.crossOrigin), E = typeof d.integrity == "string" ? d.integrity : void 0, x = typeof d.fetchPriority == "string" ? d.fetchPriority : void 0;
      v === "style" ? c.d.S(
        g,
        typeof d.precedence == "string" ? d.precedence : void 0,
        {
          crossOrigin: S,
          integrity: E,
          fetchPriority: x
        }
      ) : v === "script" && c.d.X(g, {
        crossOrigin: S,
        integrity: E,
        fetchPriority: x,
        nonce: typeof d.nonce == "string" ? d.nonce : void 0
      });
    }
  }, he.preinitModule = function(g, d) {
    if (typeof g == "string")
      if (typeof d == "object" && d !== null) {
        if (d.as == null || d.as === "script") {
          var v = p(
            d.as,
            d.crossOrigin
          );
          c.d.M(g, {
            crossOrigin: v,
            integrity: typeof d.integrity == "string" ? d.integrity : void 0,
            nonce: typeof d.nonce == "string" ? d.nonce : void 0
          });
        }
      } else d == null && c.d.M(g);
  }, he.preload = function(g, d) {
    if (typeof g == "string" && typeof d == "object" && d !== null && typeof d.as == "string") {
      var v = d.as, S = p(v, d.crossOrigin);
      c.d.L(g, v, {
        crossOrigin: S,
        integrity: typeof d.integrity == "string" ? d.integrity : void 0,
        nonce: typeof d.nonce == "string" ? d.nonce : void 0,
        type: typeof d.type == "string" ? d.type : void 0,
        fetchPriority: typeof d.fetchPriority == "string" ? d.fetchPriority : void 0,
        referrerPolicy: typeof d.referrerPolicy == "string" ? d.referrerPolicy : void 0,
        imageSrcSet: typeof d.imageSrcSet == "string" ? d.imageSrcSet : void 0,
        imageSizes: typeof d.imageSizes == "string" ? d.imageSizes : void 0,
        media: typeof d.media == "string" ? d.media : void 0
      });
    }
  }, he.preloadModule = function(g, d) {
    if (typeof g == "string")
      if (d) {
        var v = p(d.as, d.crossOrigin);
        c.d.m(g, {
          as: typeof d.as == "string" && d.as !== "script" ? d.as : void 0,
          crossOrigin: v,
          integrity: typeof d.integrity == "string" ? d.integrity : void 0
        });
      } else c.d.m(g);
  }, he.requestFormReset = function(g) {
    c.d.r(g);
  }, he.unstable_batchedUpdates = function(g, d) {
    return g(d);
  }, he.useFormState = function(g, d, v) {
    return h.H.useFormState(g, d, v);
  }, he.useFormStatus = function() {
    return h.H.useHostTransitionStatus();
  }, he.version = "19.2.4", he;
}
var cd;
function n1() {
  if (cd) return vo.exports;
  cd = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (a) {
        console.error(a);
      }
  }
  return i(), vo.exports = e1(), vo.exports;
}
var od;
function l1() {
  if (od) return sa;
  od = 1;
  var i = Pg(), a = Xo(), r = n1();
  function c(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        e += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function s(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function f(t) {
    var e = t, n = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do
        e = t, (e.flags & 4098) !== 0 && (n = e.return), t = e.return;
      while (t);
    }
    return e.tag === 3 ? n : null;
  }
  function h(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function p(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function g(t) {
    if (f(t) !== t)
      throw Error(c(188));
  }
  function d(t) {
    var e = t.alternate;
    if (!e) {
      if (e = f(t), e === null) throw Error(c(188));
      return e !== t ? null : t;
    }
    for (var n = t, l = e; ; ) {
      var u = n.return;
      if (u === null) break;
      var o = u.alternate;
      if (o === null) {
        if (l = u.return, l !== null) {
          n = l;
          continue;
        }
        break;
      }
      if (u.child === o.child) {
        for (o = u.child; o; ) {
          if (o === n) return g(u), t;
          if (o === l) return g(u), e;
          o = o.sibling;
        }
        throw Error(c(188));
      }
      if (n.return !== l.return) n = u, l = o;
      else {
        for (var m = !1, y = u.child; y; ) {
          if (y === n) {
            m = !0, n = u, l = o;
            break;
          }
          if (y === l) {
            m = !0, l = u, n = o;
            break;
          }
          y = y.sibling;
        }
        if (!m) {
          for (y = o.child; y; ) {
            if (y === n) {
              m = !0, n = o, l = u;
              break;
            }
            if (y === l) {
              m = !0, l = o, n = u;
              break;
            }
            y = y.sibling;
          }
          if (!m) throw Error(c(189));
        }
      }
      if (n.alternate !== l) throw Error(c(190));
    }
    if (n.tag !== 3) throw Error(c(188));
    return n.stateNode.current === n ? t : e;
  }
  function v(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (e = v(t), e !== null) return e;
      t = t.sibling;
    }
    return null;
  }
  var S = Object.assign, E = /* @__PURE__ */ Symbol.for("react.element"), x = /* @__PURE__ */ Symbol.for("react.transitional.element"), Y = /* @__PURE__ */ Symbol.for("react.portal"), G = /* @__PURE__ */ Symbol.for("react.fragment"), F = /* @__PURE__ */ Symbol.for("react.strict_mode"), R = /* @__PURE__ */ Symbol.for("react.profiler"), nt = /* @__PURE__ */ Symbol.for("react.consumer"), Q = /* @__PURE__ */ Symbol.for("react.context"), st = /* @__PURE__ */ Symbol.for("react.forward_ref"), vt = /* @__PURE__ */ Symbol.for("react.suspense"), L = /* @__PURE__ */ Symbol.for("react.suspense_list"), W = /* @__PURE__ */ Symbol.for("react.memo"), mt = /* @__PURE__ */ Symbol.for("react.lazy"), dt = /* @__PURE__ */ Symbol.for("react.activity"), zt = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), P = Symbol.iterator;
  function I(t) {
    return t === null || typeof t != "object" ? null : (t = P && t[P] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var _t = /* @__PURE__ */ Symbol.for("react.client.reference");
  function lt(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === _t ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case G:
        return "Fragment";
      case R:
        return "Profiler";
      case F:
        return "StrictMode";
      case vt:
        return "Suspense";
      case L:
        return "SuspenseList";
      case dt:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case Y:
          return "Portal";
        case Q:
          return t.displayName || "Context";
        case nt:
          return (t._context.displayName || "Context") + ".Consumer";
        case st:
          var e = t.render;
          return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case W:
          return e = t.displayName || null, e !== null ? e : lt(t.type) || "Memo";
        case mt:
          e = t._payload, t = t._init;
          try {
            return lt(t(e));
          } catch {
          }
      }
    return null;
  }
  var Z = Array.isArray, N = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, V = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, et = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, gt = [], A = -1;
  function z(t) {
    return { current: t };
  }
  function U(t) {
    0 > A || (t.current = gt[A], gt[A] = null, A--);
  }
  function b(t, e) {
    A++, gt[A] = t.current, t.current = e;
  }
  var J = z(null), rt = z(null), it = z(null), Et = z(null);
  function Qt(t, e) {
    switch (b(it, e), b(rt, t), b(J, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? Tm(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI)
          e = Tm(e), t = zm(e, t);
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    U(J), b(J, t);
  }
  function Ut() {
    U(J), U(rt), U(it);
  }
  function He(t) {
    t.memoizedState !== null && b(Et, t);
    var e = J.current, n = zm(e, t.type);
    e !== n && (b(rt, t), b(J, n));
  }
  function on(t) {
    rt.current === t && (U(J), U(rt)), Et.current === t && (U(Et), aa._currentValue = et);
  }
  var yi, xa;
  function sn(t) {
    if (yi === void 0)
      try {
        throw Error();
      } catch (n) {
        var e = n.stack.trim().match(/\n( *(at )?)/);
        yi = e && e[1] || "", xa = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + yi + t + xa;
  }
  var El = !1;
  function Al(t, e) {
    if (!t || El) return "";
    El = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function() {
          try {
            if (e) {
              var H = function() {
                throw Error();
              };
              if (Object.defineProperty(H.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(H, []);
                } catch (w) {
                  var D = w;
                }
                Reflect.construct(t, [], H);
              } else {
                try {
                  H.call();
                } catch (w) {
                  D = w;
                }
                t.call(H.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (w) {
                D = w;
              }
              (H = t()) && typeof H.catch == "function" && H.catch(function() {
              });
            }
          } catch (w) {
            if (w && D && typeof w.stack == "string")
              return [w.stack, D.stack];
          }
          return [null, null];
        }
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name"
      );
      u && u.configurable && Object.defineProperty(
        l.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var o = l.DetermineComponentFrameRoot(), m = o[0], y = o[1];
      if (m && y) {
        var T = m.split(`
`), M = y.split(`
`);
        for (u = l = 0; l < T.length && !T[l].includes("DetermineComponentFrameRoot"); )
          l++;
        for (; u < M.length && !M[u].includes(
          "DetermineComponentFrameRoot"
        ); )
          u++;
        if (l === T.length || u === M.length)
          for (l = T.length - 1, u = M.length - 1; 1 <= l && 0 <= u && T[l] !== M[u]; )
            u--;
        for (; 1 <= l && 0 <= u; l--, u--)
          if (T[l] !== M[u]) {
            if (l !== 1 || u !== 1)
              do
                if (l--, u--, 0 > u || T[l] !== M[u]) {
                  var k = `
` + T[l].replace(" at new ", " at ");
                  return t.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", t.displayName)), k;
                }
              while (1 <= l && 0 <= u);
            break;
          }
      }
    } finally {
      El = !1, Error.prepareStackTrace = n;
    }
    return (n = t ? t.displayName || t.name : "") ? sn(n) : "";
  }
  function Ea(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return sn(t.type);
      case 16:
        return sn("Lazy");
      case 13:
        return t.child !== e && e !== null ? sn("Suspense Fallback") : sn("Suspense");
      case 19:
        return sn("SuspenseList");
      case 0:
      case 15:
        return Al(t.type, !1);
      case 11:
        return Al(t.type.render, !1);
      case 1:
        return Al(t.type, !0);
      case 31:
        return sn("Activity");
      default:
        return "";
    }
  }
  function Aa(t) {
    try {
      var e = "", n = null;
      do
        e += Ea(t, n), n = t, t = t.return;
      while (t);
      return e;
    } catch (l) {
      return `
Error generating stack: ` + l.message + `
` + l.stack;
    }
  }
  var Tl = Object.prototype.hasOwnProperty, zl = i.unstable_scheduleCallback, gi = i.unstable_cancelCallback, Wu = i.unstable_shouldYield, $u = i.unstable_requestPaint, de = i.unstable_now, Pu = i.unstable_getCurrentPriorityLevel, j = i.unstable_ImmediatePriority, K = i.unstable_UserBlockingPriority, ct = i.unstable_NormalPriority, St = i.unstable_LowPriority, wt = i.unstable_IdlePriority, Oe = i.log, fn = i.unstable_setDisableYieldValue, pe = null, ne = null;
  function ge(t) {
    if (typeof Oe == "function" && fn(t), ne && typeof ne.setStrictMode == "function")
      try {
        ne.setStrictMode(pe, t);
      } catch {
      }
  }
  var Lt = Math.clz32 ? Math.clz32 : jp, Dn = Math.log, Ie = Math.LN2;
  function jp(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (Dn(t) / Ie | 0) | 0;
  }
  var Ta = 256, za = 262144, Ca = 4194304;
  function ll(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return t & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function _a(t, e, n) {
    var l = t.pendingLanes;
    if (l === 0) return 0;
    var u = 0, o = t.suspendedLanes, m = t.pingedLanes;
    t = t.warmLanes;
    var y = l & 134217727;
    return y !== 0 ? (l = y & ~o, l !== 0 ? u = ll(l) : (m &= y, m !== 0 ? u = ll(m) : n || (n = y & ~t, n !== 0 && (u = ll(n))))) : (y = l & ~o, y !== 0 ? u = ll(y) : m !== 0 ? u = ll(m) : n || (n = l & ~t, n !== 0 && (u = ll(n)))), u === 0 ? 0 : e !== 0 && e !== u && (e & o) === 0 && (o = u & -u, n = e & -e, o >= n || o === 32 && (n & 4194048) !== 0) ? e : u;
  }
  function vi(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function Bp(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function is() {
    var t = Ca;
    return Ca <<= 1, (Ca & 62914560) === 0 && (Ca = 4194304), t;
  }
  function tr(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function Si(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function Hp(t, e, n, l, u, o) {
    var m = t.pendingLanes;
    t.pendingLanes = n, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= n, t.entangledLanes &= n, t.errorRecoveryDisabledLanes &= n, t.shellSuspendCounter = 0;
    var y = t.entanglements, T = t.expirationTimes, M = t.hiddenUpdates;
    for (n = m & ~n; 0 < n; ) {
      var k = 31 - Lt(n), H = 1 << k;
      y[k] = 0, T[k] = -1;
      var D = M[k];
      if (D !== null)
        for (M[k] = null, k = 0; k < D.length; k++) {
          var w = D[k];
          w !== null && (w.lane &= -536870913);
        }
      n &= ~H;
    }
    l !== 0 && as(t, l, 0), o !== 0 && u === 0 && t.tag !== 0 && (t.suspendedLanes |= o & ~(m & ~e));
  }
  function as(t, e, n) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var l = 31 - Lt(e);
    t.entangledLanes |= e, t.entanglements[l] = t.entanglements[l] | 1073741824 | n & 261930;
  }
  function us(t, e) {
    var n = t.entangledLanes |= e;
    for (t = t.entanglements; n; ) {
      var l = 31 - Lt(n), u = 1 << l;
      u & e | t[l] & e && (t[l] |= e), n &= ~u;
    }
  }
  function rs(t, e) {
    var n = e & -e;
    return n = (n & 42) !== 0 ? 1 : er(n), (n & (t.suspendedLanes | e)) !== 0 ? 0 : n;
  }
  function er(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function nr(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function cs() {
    var t = V.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : Jm(t.type));
  }
  function os(t, e) {
    var n = V.p;
    try {
      return V.p = t, e();
    } finally {
      V.p = n;
    }
  }
  var Nn = Math.random().toString(36).slice(2), re = "__reactFiber$" + Nn, ve = "__reactProps$" + Nn, Cl = "__reactContainer$" + Nn, lr = "__reactEvents$" + Nn, Lp = "__reactListeners$" + Nn, qp = "__reactHandles$" + Nn, ss = "__reactResources$" + Nn, bi = "__reactMarker$" + Nn;
  function ir(t) {
    delete t[re], delete t[ve], delete t[lr], delete t[Lp], delete t[qp];
  }
  function _l(t) {
    var e = t[re];
    if (e) return e;
    for (var n = t.parentNode; n; ) {
      if (e = n[Cl] || n[re]) {
        if (n = e.alternate, e.child !== null || n !== null && n.child !== null)
          for (t = wm(t); t !== null; ) {
            if (n = t[re]) return n;
            t = wm(t);
          }
        return e;
      }
      t = n, n = t.parentNode;
    }
    return null;
  }
  function Ol(t) {
    if (t = t[re] || t[Cl]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function xi(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(c(33));
  }
  function Ml(t) {
    var e = t[ss];
    return e || (e = t[ss] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function ie(t) {
    t[bi] = !0;
  }
  var fs = /* @__PURE__ */ new Set(), hs = {};
  function il(t, e) {
    Dl(t, e), Dl(t + "Capture", e);
  }
  function Dl(t, e) {
    for (hs[t] = e, t = 0; t < e.length; t++)
      fs.add(e[t]);
  }
  var Yp = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), ms = {}, ds = {};
  function Vp(t) {
    return Tl.call(ds, t) ? !0 : Tl.call(ms, t) ? !1 : Yp.test(t) ? ds[t] = !0 : (ms[t] = !0, !1);
  }
  function Oa(t, e, n) {
    if (Vp(e))
      if (n === null) t.removeAttribute(e);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var l = e.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + n);
      }
  }
  function Ma(t, e, n) {
    if (n === null) t.removeAttribute(e);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + n);
    }
  }
  function hn(t, e, n, l) {
    if (l === null) t.removeAttribute(n);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(n);
          return;
      }
      t.setAttributeNS(e, n, "" + l);
    }
  }
  function Le(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function ps(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function Xp(t, e, n) {
    var l = Object.getOwnPropertyDescriptor(
      t.constructor.prototype,
      e
    );
    if (!t.hasOwnProperty(e) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var u = l.get, o = l.set;
      return Object.defineProperty(t, e, {
        configurable: !0,
        get: function() {
          return u.call(this);
        },
        set: function(m) {
          n = "" + m, o.call(this, m);
        }
      }), Object.defineProperty(t, e, {
        enumerable: l.enumerable
      }), {
        getValue: function() {
          return n;
        },
        setValue: function(m) {
          n = "" + m;
        },
        stopTracking: function() {
          t._valueTracker = null, delete t[e];
        }
      };
    }
  }
  function ar(t) {
    if (!t._valueTracker) {
      var e = ps(t) ? "checked" : "value";
      t._valueTracker = Xp(
        t,
        e,
        "" + t[e]
      );
    }
  }
  function ys(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(), l = "";
    return t && (l = ps(t) ? t.checked ? "true" : "false" : t.value), t = l, t !== n ? (e.setValue(t), !0) : !1;
  }
  function Da(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var Gp = /[\n"\\]/g;
  function qe(t) {
    return t.replace(
      Gp,
      function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function ur(t, e, n, l, u, o, m, y) {
    t.name = "", m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? t.type = m : t.removeAttribute("type"), e != null ? m === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + Le(e)) : t.value !== "" + Le(e) && (t.value = "" + Le(e)) : m !== "submit" && m !== "reset" || t.removeAttribute("value"), e != null ? rr(t, m, Le(e)) : n != null ? rr(t, m, Le(n)) : l != null && t.removeAttribute("value"), u == null && o != null && (t.defaultChecked = !!o), u != null && (t.checked = u && typeof u != "function" && typeof u != "symbol"), y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" ? t.name = "" + Le(y) : t.removeAttribute("name");
  }
  function gs(t, e, n, l, u, o, m, y) {
    if (o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" && (t.type = o), e != null || n != null) {
      if (!(o !== "submit" && o !== "reset" || e != null)) {
        ar(t);
        return;
      }
      n = n != null ? "" + Le(n) : "", e = e != null ? "" + Le(e) : n, y || e === t.value || (t.value = e), t.defaultValue = e;
    }
    l = l ?? u, l = typeof l != "function" && typeof l != "symbol" && !!l, t.checked = y ? t.checked : !!l, t.defaultChecked = !!l, m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" && (t.name = m), ar(t);
  }
  function rr(t, e, n) {
    e === "number" && Da(t.ownerDocument) === t || t.defaultValue === "" + n || (t.defaultValue = "" + n);
  }
  function Nl(t, e, n, l) {
    if (t = t.options, e) {
      e = {};
      for (var u = 0; u < n.length; u++)
        e["$" + n[u]] = !0;
      for (n = 0; n < t.length; n++)
        u = e.hasOwnProperty("$" + t[n].value), t[n].selected !== u && (t[n].selected = u), u && l && (t[n].defaultSelected = !0);
    } else {
      for (n = "" + Le(n), e = null, u = 0; u < t.length; u++) {
        if (t[u].value === n) {
          t[u].selected = !0, l && (t[u].defaultSelected = !0);
          return;
        }
        e !== null || t[u].disabled || (e = t[u]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function vs(t, e, n) {
    if (e != null && (e = "" + Le(e), e !== t.value && (t.value = e), n == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = n != null ? "" + Le(n) : "";
  }
  function Ss(t, e, n, l) {
    if (e == null) {
      if (l != null) {
        if (n != null) throw Error(c(92));
        if (Z(l)) {
          if (1 < l.length) throw Error(c(93));
          l = l[0];
        }
        n = l;
      }
      n == null && (n = ""), e = n;
    }
    n = Le(e), t.defaultValue = n, l = t.textContent, l === n && l !== "" && l !== null && (t.value = l), ar(t);
  }
  function wl(t, e) {
    if (e) {
      var n = t.firstChild;
      if (n && n === t.lastChild && n.nodeType === 3) {
        n.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var Qp = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function bs(t, e, n) {
    var l = e.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? l ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : l ? t.setProperty(e, n) : typeof n != "number" || n === 0 || Qp.has(e) ? e === "float" ? t.cssFloat = n : t[e] = ("" + n).trim() : t[e] = n + "px";
  }
  function xs(t, e, n) {
    if (e != null && typeof e != "object")
      throw Error(c(62));
    if (t = t.style, n != null) {
      for (var l in n)
        !n.hasOwnProperty(l) || e != null && e.hasOwnProperty(l) || (l.indexOf("--") === 0 ? t.setProperty(l, "") : l === "float" ? t.cssFloat = "" : t[l] = "");
      for (var u in e)
        l = e[u], e.hasOwnProperty(u) && n[u] !== l && bs(t, u, l);
    } else
      for (var o in e)
        e.hasOwnProperty(o) && bs(t, o, e[o]);
  }
  function cr(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Zp = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), Kp = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Na(t) {
    return Kp.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function mn() {
  }
  var or = null;
  function sr(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var Rl = null, kl = null;
  function Es(t) {
    var e = Ol(t);
    if (e && (t = e.stateNode)) {
      var n = t[ve] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (ur(
            t,
            n.value,
            n.defaultValue,
            n.defaultValue,
            n.checked,
            n.defaultChecked,
            n.type,
            n.name
          ), e = n.name, n.type === "radio" && e != null) {
            for (n = t; n.parentNode; ) n = n.parentNode;
            for (n = n.querySelectorAll(
              'input[name="' + qe(
                "" + e
              ) + '"][type="radio"]'
            ), e = 0; e < n.length; e++) {
              var l = n[e];
              if (l !== t && l.form === t.form) {
                var u = l[ve] || null;
                if (!u) throw Error(c(90));
                ur(
                  l,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name
                );
              }
            }
            for (e = 0; e < n.length; e++)
              l = n[e], l.form === t.form && ys(l);
          }
          break t;
        case "textarea":
          vs(t, n.value, n.defaultValue);
          break t;
        case "select":
          e = n.value, e != null && Nl(t, !!n.multiple, e, !1);
      }
    }
  }
  var fr = !1;
  function As(t, e, n) {
    if (fr) return t(e, n);
    fr = !0;
    try {
      var l = t(e);
      return l;
    } finally {
      if (fr = !1, (Rl !== null || kl !== null) && (vu(), Rl && (e = Rl, t = kl, kl = Rl = null, Es(e), t)))
        for (e = 0; e < t.length; e++) Es(t[e]);
    }
  }
  function Ei(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var l = n[ve] || null;
    if (l === null) return null;
    n = l[e];
    t: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (l = !l.disabled) || (t = t.type, l = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !l;
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (n && typeof n != "function")
      throw Error(
        c(231, e, typeof n)
      );
    return n;
  }
  var dn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), hr = !1;
  if (dn)
    try {
      var Ai = {};
      Object.defineProperty(Ai, "passive", {
        get: function() {
          hr = !0;
        }
      }), window.addEventListener("test", Ai, Ai), window.removeEventListener("test", Ai, Ai);
    } catch {
      hr = !1;
    }
  var wn = null, mr = null, wa = null;
  function Ts() {
    if (wa) return wa;
    var t, e = mr, n = e.length, l, u = "value" in wn ? wn.value : wn.textContent, o = u.length;
    for (t = 0; t < n && e[t] === u[t]; t++) ;
    var m = n - t;
    for (l = 1; l <= m && e[n - l] === u[o - l]; l++) ;
    return wa = u.slice(t, 1 < l ? 1 - l : void 0);
  }
  function Ra(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function ka() {
    return !0;
  }
  function zs() {
    return !1;
  }
  function Se(t) {
    function e(n, l, u, o, m) {
      this._reactName = n, this._targetInst = u, this.type = l, this.nativeEvent = o, this.target = m, this.currentTarget = null;
      for (var y in t)
        t.hasOwnProperty(y) && (n = t[y], this[y] = n ? n(o) : o[y]);
      return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? ka : zs, this.isPropagationStopped = zs, this;
    }
    return S(e.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = ka);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = ka);
      },
      persist: function() {
      },
      isPersistent: ka
    }), e;
  }
  var al = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Ua = Se(al), Ti = S({}, al, { view: 0, detail: 0 }), Jp = Se(Ti), dr, pr, zi, ja = S({}, Ti, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: gr,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== zi && (zi && t.type === "mousemove" ? (dr = t.screenX - zi.screenX, pr = t.screenY - zi.screenY) : pr = dr = 0, zi = t), dr);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : pr;
    }
  }), Cs = Se(ja), Fp = S({}, ja, { dataTransfer: 0 }), Ip = Se(Fp), Wp = S({}, Ti, { relatedTarget: 0 }), yr = Se(Wp), $p = S({}, al, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Pp = Se($p), ty = S({}, al, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), ey = Se(ty), ny = S({}, al, { data: 0 }), _s = Se(ny), ly = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, iy = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, ay = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function uy(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = ay[t]) ? !!e[t] : !1;
  }
  function gr() {
    return uy;
  }
  var ry = S({}, Ti, {
    key: function(t) {
      if (t.key) {
        var e = ly[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = Ra(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? iy[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: gr,
    charCode: function(t) {
      return t.type === "keypress" ? Ra(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? Ra(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), cy = Se(ry), oy = S({}, ja, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), Os = Se(oy), sy = S({}, Ti, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: gr
  }), fy = Se(sy), hy = S({}, al, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), my = Se(hy), dy = S({}, ja, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), py = Se(dy), yy = S({}, al, {
    newState: 0,
    oldState: 0
  }), gy = Se(yy), vy = [9, 13, 27, 32], vr = dn && "CompositionEvent" in window, Ci = null;
  dn && "documentMode" in document && (Ci = document.documentMode);
  var Sy = dn && "TextEvent" in window && !Ci, Ms = dn && (!vr || Ci && 8 < Ci && 11 >= Ci), Ds = " ", Ns = !1;
  function ws(t, e) {
    switch (t) {
      case "keyup":
        return vy.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Rs(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var Ul = !1;
  function by(t, e) {
    switch (t) {
      case "compositionend":
        return Rs(e);
      case "keypress":
        return e.which !== 32 ? null : (Ns = !0, Ds);
      case "textInput":
        return t = e.data, t === Ds && Ns ? null : t;
      default:
        return null;
    }
  }
  function xy(t, e) {
    if (Ul)
      return t === "compositionend" || !vr && ws(t, e) ? (t = Ts(), wa = mr = wn = null, Ul = !1, t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
          if (e.char && 1 < e.char.length)
            return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return Ms && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var Ey = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function ks(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!Ey[t.type] : e === "textarea";
  }
  function Us(t, e, n, l) {
    Rl ? kl ? kl.push(l) : kl = [l] : Rl = l, e = zu(e, "onChange"), 0 < e.length && (n = new Ua(
      "onChange",
      "change",
      null,
      n,
      l
    ), t.push({ event: n, listeners: e }));
  }
  var _i = null, Oi = null;
  function Ay(t) {
    vm(t, 0);
  }
  function Ba(t) {
    var e = xi(t);
    if (ys(e)) return t;
  }
  function js(t, e) {
    if (t === "change") return e;
  }
  var Bs = !1;
  if (dn) {
    var Sr;
    if (dn) {
      var br = "oninput" in document;
      if (!br) {
        var Hs = document.createElement("div");
        Hs.setAttribute("oninput", "return;"), br = typeof Hs.oninput == "function";
      }
      Sr = br;
    } else Sr = !1;
    Bs = Sr && (!document.documentMode || 9 < document.documentMode);
  }
  function Ls() {
    _i && (_i.detachEvent("onpropertychange", qs), Oi = _i = null);
  }
  function qs(t) {
    if (t.propertyName === "value" && Ba(Oi)) {
      var e = [];
      Us(
        e,
        Oi,
        t,
        sr(t)
      ), As(Ay, e);
    }
  }
  function Ty(t, e, n) {
    t === "focusin" ? (Ls(), _i = e, Oi = n, _i.attachEvent("onpropertychange", qs)) : t === "focusout" && Ls();
  }
  function zy(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Ba(Oi);
  }
  function Cy(t, e) {
    if (t === "click") return Ba(e);
  }
  function _y(t, e) {
    if (t === "input" || t === "change")
      return Ba(e);
  }
  function Oy(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var Me = typeof Object.is == "function" ? Object.is : Oy;
  function Mi(t, e) {
    if (Me(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
      return !1;
    var n = Object.keys(t), l = Object.keys(e);
    if (n.length !== l.length) return !1;
    for (l = 0; l < n.length; l++) {
      var u = n[l];
      if (!Tl.call(e, u) || !Me(t[u], e[u]))
        return !1;
    }
    return !0;
  }
  function Ys(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Vs(t, e) {
    var n = Ys(t);
    t = 0;
    for (var l; n; ) {
      if (n.nodeType === 3) {
        if (l = t + n.textContent.length, t <= e && l >= e)
          return { node: n, offset: e - t };
        t = l;
      }
      t: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break t;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Ys(n);
    }
  }
  function Xs(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Xs(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
  }
  function Gs(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = Da(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var n = typeof e.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) t = e.contentWindow;
      else break;
      e = Da(t.document);
    }
    return e;
  }
  function xr(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var My = dn && "documentMode" in document && 11 >= document.documentMode, jl = null, Er = null, Di = null, Ar = !1;
  function Qs(t, e, n) {
    var l = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Ar || jl == null || jl !== Da(l) || (l = jl, "selectionStart" in l && xr(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
      anchorNode: l.anchorNode,
      anchorOffset: l.anchorOffset,
      focusNode: l.focusNode,
      focusOffset: l.focusOffset
    }), Di && Mi(Di, l) || (Di = l, l = zu(Er, "onSelect"), 0 < l.length && (e = new Ua(
      "onSelect",
      "select",
      null,
      e,
      n
    ), t.push({ event: e, listeners: l }), e.target = jl)));
  }
  function ul(t, e) {
    var n = {};
    return n[t.toLowerCase()] = e.toLowerCase(), n["Webkit" + t] = "webkit" + e, n["Moz" + t] = "moz" + e, n;
  }
  var Bl = {
    animationend: ul("Animation", "AnimationEnd"),
    animationiteration: ul("Animation", "AnimationIteration"),
    animationstart: ul("Animation", "AnimationStart"),
    transitionrun: ul("Transition", "TransitionRun"),
    transitionstart: ul("Transition", "TransitionStart"),
    transitioncancel: ul("Transition", "TransitionCancel"),
    transitionend: ul("Transition", "TransitionEnd")
  }, Tr = {}, Zs = {};
  dn && (Zs = document.createElement("div").style, "AnimationEvent" in window || (delete Bl.animationend.animation, delete Bl.animationiteration.animation, delete Bl.animationstart.animation), "TransitionEvent" in window || delete Bl.transitionend.transition);
  function rl(t) {
    if (Tr[t]) return Tr[t];
    if (!Bl[t]) return t;
    var e = Bl[t], n;
    for (n in e)
      if (e.hasOwnProperty(n) && n in Zs)
        return Tr[t] = e[n];
    return t;
  }
  var Ks = rl("animationend"), Js = rl("animationiteration"), Fs = rl("animationstart"), Dy = rl("transitionrun"), Ny = rl("transitionstart"), wy = rl("transitioncancel"), Is = rl("transitionend"), Ws = /* @__PURE__ */ new Map(), zr = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  zr.push("scrollEnd");
  function We(t, e) {
    Ws.set(t, e), il(e, [t]);
  }
  var Ha = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var e = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(e)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  }, Ye = [], Hl = 0, Cr = 0;
  function La() {
    for (var t = Hl, e = Cr = Hl = 0; e < t; ) {
      var n = Ye[e];
      Ye[e++] = null;
      var l = Ye[e];
      Ye[e++] = null;
      var u = Ye[e];
      Ye[e++] = null;
      var o = Ye[e];
      if (Ye[e++] = null, l !== null && u !== null) {
        var m = l.pending;
        m === null ? u.next = u : (u.next = m.next, m.next = u), l.pending = u;
      }
      o !== 0 && $s(n, u, o);
    }
  }
  function qa(t, e, n, l) {
    Ye[Hl++] = t, Ye[Hl++] = e, Ye[Hl++] = n, Ye[Hl++] = l, Cr |= l, t.lanes |= l, t = t.alternate, t !== null && (t.lanes |= l);
  }
  function _r(t, e, n, l) {
    return qa(t, e, n, l), Ya(t);
  }
  function cl(t, e) {
    return qa(t, null, null, e), Ya(t);
  }
  function $s(t, e, n) {
    t.lanes |= n;
    var l = t.alternate;
    l !== null && (l.lanes |= n);
    for (var u = !1, o = t.return; o !== null; )
      o.childLanes |= n, l = o.alternate, l !== null && (l.childLanes |= n), o.tag === 22 && (t = o.stateNode, t === null || t._visibility & 1 || (u = !0)), t = o, o = o.return;
    return t.tag === 3 ? (o = t.stateNode, u && e !== null && (u = 31 - Lt(n), t = o.hiddenUpdates, l = t[u], l === null ? t[u] = [e] : l.push(e), e.lane = n | 536870912), o) : null;
  }
  function Ya(t) {
    if (50 < $i)
      throw $i = 0, jc = null, Error(c(185));
    for (var e = t.return; e !== null; )
      t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var Ll = {};
  function Ry(t, e, n, l) {
    this.tag = t, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function De(t, e, n, l) {
    return new Ry(t, e, n, l);
  }
  function Or(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function pn(t, e) {
    var n = t.alternate;
    return n === null ? (n = De(
      t.tag,
      e,
      t.key,
      t.mode
    ), n.elementType = t.elementType, n.type = t.type, n.stateNode = t.stateNode, n.alternate = t, t.alternate = n) : (n.pendingProps = e, n.type = t.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = t.flags & 65011712, n.childLanes = t.childLanes, n.lanes = t.lanes, n.child = t.child, n.memoizedProps = t.memoizedProps, n.memoizedState = t.memoizedState, n.updateQueue = t.updateQueue, e = t.dependencies, n.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, n.sibling = t.sibling, n.index = t.index, n.ref = t.ref, n.refCleanup = t.refCleanup, n;
  }
  function Ps(t, e) {
    t.flags &= 65011714;
    var n = t.alternate;
    return n === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = n.childLanes, t.lanes = n.lanes, t.child = n.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = n.memoizedProps, t.memoizedState = n.memoizedState, t.updateQueue = n.updateQueue, t.type = n.type, e = n.dependencies, t.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), t;
  }
  function Va(t, e, n, l, u, o) {
    var m = 0;
    if (l = t, typeof t == "function") Or(t) && (m = 1);
    else if (typeof t == "string")
      m = Hg(
        t,
        n,
        J.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (t) {
        case dt:
          return t = De(31, n, e, u), t.elementType = dt, t.lanes = o, t;
        case G:
          return ol(n.children, u, o, e);
        case F:
          m = 8, u |= 24;
          break;
        case R:
          return t = De(12, n, e, u | 2), t.elementType = R, t.lanes = o, t;
        case vt:
          return t = De(13, n, e, u), t.elementType = vt, t.lanes = o, t;
        case L:
          return t = De(19, n, e, u), t.elementType = L, t.lanes = o, t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case Q:
                m = 10;
                break t;
              case nt:
                m = 9;
                break t;
              case st:
                m = 11;
                break t;
              case W:
                m = 14;
                break t;
              case mt:
                m = 16, l = null;
                break t;
            }
          m = 29, n = Error(
            c(130, t === null ? "null" : typeof t, "")
          ), l = null;
      }
    return e = De(m, n, e, u), e.elementType = t, e.type = l, e.lanes = o, e;
  }
  function ol(t, e, n, l) {
    return t = De(7, t, l, e), t.lanes = n, t;
  }
  function Mr(t, e, n) {
    return t = De(6, t, null, e), t.lanes = n, t;
  }
  function tf(t) {
    var e = De(18, null, null, 0);
    return e.stateNode = t, e;
  }
  function Dr(t, e, n) {
    return e = De(
      4,
      t.children !== null ? t.children : [],
      t.key,
      e
    ), e.lanes = n, e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    }, e;
  }
  var ef = /* @__PURE__ */ new WeakMap();
  function Ve(t, e) {
    if (typeof t == "object" && t !== null) {
      var n = ef.get(t);
      return n !== void 0 ? n : (e = {
        value: t,
        source: e,
        stack: Aa(e)
      }, ef.set(t, e), e);
    }
    return {
      value: t,
      source: e,
      stack: Aa(e)
    };
  }
  var ql = [], Yl = 0, Xa = null, Ni = 0, Xe = [], Ge = 0, Rn = null, tn = 1, en = "";
  function yn(t, e) {
    ql[Yl++] = Ni, ql[Yl++] = Xa, Xa = t, Ni = e;
  }
  function nf(t, e, n) {
    Xe[Ge++] = tn, Xe[Ge++] = en, Xe[Ge++] = Rn, Rn = t;
    var l = tn;
    t = en;
    var u = 32 - Lt(l) - 1;
    l &= ~(1 << u), n += 1;
    var o = 32 - Lt(e) + u;
    if (30 < o) {
      var m = u - u % 5;
      o = (l & (1 << m) - 1).toString(32), l >>= m, u -= m, tn = 1 << 32 - Lt(e) + u | n << u | l, en = o + t;
    } else
      tn = 1 << o | n << u | l, en = t;
  }
  function Nr(t) {
    t.return !== null && (yn(t, 1), nf(t, 1, 0));
  }
  function wr(t) {
    for (; t === Xa; )
      Xa = ql[--Yl], ql[Yl] = null, Ni = ql[--Yl], ql[Yl] = null;
    for (; t === Rn; )
      Rn = Xe[--Ge], Xe[Ge] = null, en = Xe[--Ge], Xe[Ge] = null, tn = Xe[--Ge], Xe[Ge] = null;
  }
  function lf(t, e) {
    Xe[Ge++] = tn, Xe[Ge++] = en, Xe[Ge++] = Rn, tn = e.id, en = e.overflow, Rn = t;
  }
  var ce = null, Xt = null, Ct = !1, kn = null, Qe = !1, Rr = Error(c(519));
  function Un(t) {
    var e = Error(
      c(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw wi(Ve(e, t)), Rr;
  }
  function af(t) {
    var e = t.stateNode, n = t.type, l = t.memoizedProps;
    switch (e[re] = t, e[ve] = l, n) {
      case "dialog":
        xt("cancel", e), xt("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        xt("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < ta.length; n++)
          xt(ta[n], e);
        break;
      case "source":
        xt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        xt("error", e), xt("load", e);
        break;
      case "details":
        xt("toggle", e);
        break;
      case "input":
        xt("invalid", e), gs(
          e,
          l.value,
          l.defaultValue,
          l.checked,
          l.defaultChecked,
          l.type,
          l.name,
          !0
        );
        break;
      case "select":
        xt("invalid", e);
        break;
      case "textarea":
        xt("invalid", e), Ss(e, l.value, l.defaultValue, l.children);
    }
    n = l.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || e.textContent === "" + n || l.suppressHydrationWarning === !0 || Em(e.textContent, n) ? (l.popover != null && (xt("beforetoggle", e), xt("toggle", e)), l.onScroll != null && xt("scroll", e), l.onScrollEnd != null && xt("scrollend", e), l.onClick != null && (e.onclick = mn), e = !0) : e = !1, e || Un(t, !0);
  }
  function uf(t) {
    for (ce = t.return; ce; )
      switch (ce.tag) {
        case 5:
        case 31:
        case 13:
          Qe = !1;
          return;
        case 27:
        case 3:
          Qe = !0;
          return;
        default:
          ce = ce.return;
      }
  }
  function Vl(t) {
    if (t !== ce) return !1;
    if (!Ct) return uf(t), Ct = !0, !1;
    var e = t.tag, n;
    if ((n = e !== 3 && e !== 27) && ((n = e === 5) && (n = t.type, n = !(n !== "form" && n !== "button") || Wc(t.type, t.memoizedProps)), n = !n), n && Xt && Un(t), uf(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(c(317));
      Xt = Nm(t);
    } else if (e === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(c(317));
      Xt = Nm(t);
    } else
      e === 27 ? (e = Xt, Fn(t.type) ? (t = no, no = null, Xt = t) : Xt = e) : Xt = ce ? Ke(t.stateNode.nextSibling) : null;
    return !0;
  }
  function sl() {
    Xt = ce = null, Ct = !1;
  }
  function kr() {
    var t = kn;
    return t !== null && (Ae === null ? Ae = t : Ae.push.apply(
      Ae,
      t
    ), kn = null), t;
  }
  function wi(t) {
    kn === null ? kn = [t] : kn.push(t);
  }
  var Ur = z(null), fl = null, gn = null;
  function jn(t, e, n) {
    b(Ur, e._currentValue), e._currentValue = n;
  }
  function vn(t) {
    t._currentValue = Ur.current, U(Ur);
  }
  function jr(t, e, n) {
    for (; t !== null; ) {
      var l = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, l !== null && (l.childLanes |= e)) : l !== null && (l.childLanes & e) !== e && (l.childLanes |= e), t === n) break;
      t = t.return;
    }
  }
  function Br(t, e, n, l) {
    var u = t.child;
    for (u !== null && (u.return = t); u !== null; ) {
      var o = u.dependencies;
      if (o !== null) {
        var m = u.child;
        o = o.firstContext;
        t: for (; o !== null; ) {
          var y = o;
          o = u;
          for (var T = 0; T < e.length; T++)
            if (y.context === e[T]) {
              o.lanes |= n, y = o.alternate, y !== null && (y.lanes |= n), jr(
                o.return,
                n,
                t
              ), l || (m = null);
              break t;
            }
          o = y.next;
        }
      } else if (u.tag === 18) {
        if (m = u.return, m === null) throw Error(c(341));
        m.lanes |= n, o = m.alternate, o !== null && (o.lanes |= n), jr(m, n, t), m = null;
      } else m = u.child;
      if (m !== null) m.return = u;
      else
        for (m = u; m !== null; ) {
          if (m === t) {
            m = null;
            break;
          }
          if (u = m.sibling, u !== null) {
            u.return = m.return, m = u;
            break;
          }
          m = m.return;
        }
      u = m;
    }
  }
  function Xl(t, e, n, l) {
    t = null;
    for (var u = e, o = !1; u !== null; ) {
      if (!o) {
        if ((u.flags & 524288) !== 0) o = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var m = u.alternate;
        if (m === null) throw Error(c(387));
        if (m = m.memoizedProps, m !== null) {
          var y = u.type;
          Me(u.pendingProps.value, m.value) || (t !== null ? t.push(y) : t = [y]);
        }
      } else if (u === Et.current) {
        if (m = u.alternate, m === null) throw Error(c(387));
        m.memoizedState.memoizedState !== u.memoizedState.memoizedState && (t !== null ? t.push(aa) : t = [aa]);
      }
      u = u.return;
    }
    t !== null && Br(
      e,
      t,
      n,
      l
    ), e.flags |= 262144;
  }
  function Ga(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!Me(
        t.context._currentValue,
        t.memoizedValue
      ))
        return !0;
      t = t.next;
    }
    return !1;
  }
  function hl(t) {
    fl = t, gn = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function oe(t) {
    return rf(fl, t);
  }
  function Qa(t, e) {
    return fl === null && hl(t), rf(t, e);
  }
  function rf(t, e) {
    var n = e._currentValue;
    if (e = { context: e, memoizedValue: n, next: null }, gn === null) {
      if (t === null) throw Error(c(308));
      gn = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288;
    } else gn = gn.next = e;
    return n;
  }
  var ky = typeof AbortController < "u" ? AbortController : function() {
    var t = [], e = this.signal = {
      aborted: !1,
      addEventListener: function(n, l) {
        t.push(l);
      }
    };
    this.abort = function() {
      e.aborted = !0, t.forEach(function(n) {
        return n();
      });
    };
  }, Uy = i.unstable_scheduleCallback, jy = i.unstable_NormalPriority, Wt = {
    $$typeof: Q,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Hr() {
    return {
      controller: new ky(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Ri(t) {
    t.refCount--, t.refCount === 0 && Uy(jy, function() {
      t.controller.abort();
    });
  }
  var ki = null, Lr = 0, Gl = 0, Ql = null;
  function By(t, e) {
    if (ki === null) {
      var n = ki = [];
      Lr = 0, Gl = Vc(), Ql = {
        status: "pending",
        value: void 0,
        then: function(l) {
          n.push(l);
        }
      };
    }
    return Lr++, e.then(cf, cf), e;
  }
  function cf() {
    if (--Lr === 0 && ki !== null) {
      Ql !== null && (Ql.status = "fulfilled");
      var t = ki;
      ki = null, Gl = 0, Ql = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function Hy(t, e) {
    var n = [], l = {
      status: "pending",
      value: null,
      reason: null,
      then: function(u) {
        n.push(u);
      }
    };
    return t.then(
      function() {
        l.status = "fulfilled", l.value = e;
        for (var u = 0; u < n.length; u++) (0, n[u])(e);
      },
      function(u) {
        for (l.status = "rejected", l.reason = u, u = 0; u < n.length; u++)
          (0, n[u])(void 0);
      }
    ), l;
  }
  var of = N.S;
  N.S = function(t, e) {
    Zh = de(), typeof e == "object" && e !== null && typeof e.then == "function" && By(t, e), of !== null && of(t, e);
  };
  var ml = z(null);
  function qr() {
    var t = ml.current;
    return t !== null ? t : qt.pooledCache;
  }
  function Za(t, e) {
    e === null ? b(ml, ml.current) : b(ml, e.pool);
  }
  function sf() {
    var t = qr();
    return t === null ? null : { parent: Wt._currentValue, pool: t };
  }
  var Zl = Error(c(460)), Yr = Error(c(474)), Ka = Error(c(542)), Ja = { then: function() {
  } };
  function ff(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function hf(t, e, n) {
    switch (n = t[n], n === void 0 ? t.push(e) : n !== e && (e.then(mn, mn), e = n), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, df(t), t;
      default:
        if (typeof e.status == "string") e.then(mn, mn);
        else {
          if (t = qt, t !== null && 100 < t.shellSuspendCounter)
            throw Error(c(482));
          t = e, t.status = "pending", t.then(
            function(l) {
              if (e.status === "pending") {
                var u = e;
                u.status = "fulfilled", u.value = l;
              }
            },
            function(l) {
              if (e.status === "pending") {
                var u = e;
                u.status = "rejected", u.reason = l;
              }
            }
          );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw t = e.reason, df(t), t;
        }
        throw pl = e, Zl;
    }
  }
  function dl(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? (pl = n, Zl) : n;
    }
  }
  var pl = null;
  function mf() {
    if (pl === null) throw Error(c(459));
    var t = pl;
    return pl = null, t;
  }
  function df(t) {
    if (t === Zl || t === Ka)
      throw Error(c(483));
  }
  var Kl = null, Ui = 0;
  function Fa(t) {
    var e = Ui;
    return Ui += 1, Kl === null && (Kl = []), hf(Kl, t, e);
  }
  function ji(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function Ia(t, e) {
    throw e.$$typeof === E ? Error(c(525)) : (t = Object.prototype.toString.call(e), Error(
      c(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t
      )
    ));
  }
  function pf(t) {
    function e(_, C) {
      if (t) {
        var O = _.deletions;
        O === null ? (_.deletions = [C], _.flags |= 16) : O.push(C);
      }
    }
    function n(_, C) {
      if (!t) return null;
      for (; C !== null; )
        e(_, C), C = C.sibling;
      return null;
    }
    function l(_) {
      for (var C = /* @__PURE__ */ new Map(); _ !== null; )
        _.key !== null ? C.set(_.key, _) : C.set(_.index, _), _ = _.sibling;
      return C;
    }
    function u(_, C) {
      return _ = pn(_, C), _.index = 0, _.sibling = null, _;
    }
    function o(_, C, O) {
      return _.index = O, t ? (O = _.alternate, O !== null ? (O = O.index, O < C ? (_.flags |= 67108866, C) : O) : (_.flags |= 67108866, C)) : (_.flags |= 1048576, C);
    }
    function m(_) {
      return t && _.alternate === null && (_.flags |= 67108866), _;
    }
    function y(_, C, O, B) {
      return C === null || C.tag !== 6 ? (C = Mr(O, _.mode, B), C.return = _, C) : (C = u(C, O), C.return = _, C);
    }
    function T(_, C, O, B) {
      var at = O.type;
      return at === G ? k(
        _,
        C,
        O.props.children,
        B,
        O.key
      ) : C !== null && (C.elementType === at || typeof at == "object" && at !== null && at.$$typeof === mt && dl(at) === C.type) ? (C = u(C, O.props), ji(C, O), C.return = _, C) : (C = Va(
        O.type,
        O.key,
        O.props,
        null,
        _.mode,
        B
      ), ji(C, O), C.return = _, C);
    }
    function M(_, C, O, B) {
      return C === null || C.tag !== 4 || C.stateNode.containerInfo !== O.containerInfo || C.stateNode.implementation !== O.implementation ? (C = Dr(O, _.mode, B), C.return = _, C) : (C = u(C, O.children || []), C.return = _, C);
    }
    function k(_, C, O, B, at) {
      return C === null || C.tag !== 7 ? (C = ol(
        O,
        _.mode,
        B,
        at
      ), C.return = _, C) : (C = u(C, O), C.return = _, C);
    }
    function H(_, C, O) {
      if (typeof C == "string" && C !== "" || typeof C == "number" || typeof C == "bigint")
        return C = Mr(
          "" + C,
          _.mode,
          O
        ), C.return = _, C;
      if (typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case x:
            return O = Va(
              C.type,
              C.key,
              C.props,
              null,
              _.mode,
              O
            ), ji(O, C), O.return = _, O;
          case Y:
            return C = Dr(
              C,
              _.mode,
              O
            ), C.return = _, C;
          case mt:
            return C = dl(C), H(_, C, O);
        }
        if (Z(C) || I(C))
          return C = ol(
            C,
            _.mode,
            O,
            null
          ), C.return = _, C;
        if (typeof C.then == "function")
          return H(_, Fa(C), O);
        if (C.$$typeof === Q)
          return H(
            _,
            Qa(_, C),
            O
          );
        Ia(_, C);
      }
      return null;
    }
    function D(_, C, O, B) {
      var at = C !== null ? C.key : null;
      if (typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint")
        return at !== null ? null : y(_, C, "" + O, B);
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case x:
            return O.key === at ? T(_, C, O, B) : null;
          case Y:
            return O.key === at ? M(_, C, O, B) : null;
          case mt:
            return O = dl(O), D(_, C, O, B);
        }
        if (Z(O) || I(O))
          return at !== null ? null : k(_, C, O, B, null);
        if (typeof O.then == "function")
          return D(
            _,
            C,
            Fa(O),
            B
          );
        if (O.$$typeof === Q)
          return D(
            _,
            C,
            Qa(_, O),
            B
          );
        Ia(_, O);
      }
      return null;
    }
    function w(_, C, O, B, at) {
      if (typeof B == "string" && B !== "" || typeof B == "number" || typeof B == "bigint")
        return _ = _.get(O) || null, y(C, _, "" + B, at);
      if (typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case x:
            return _ = _.get(
              B.key === null ? O : B.key
            ) || null, T(C, _, B, at);
          case Y:
            return _ = _.get(
              B.key === null ? O : B.key
            ) || null, M(C, _, B, at);
          case mt:
            return B = dl(B), w(
              _,
              C,
              O,
              B,
              at
            );
        }
        if (Z(B) || I(B))
          return _ = _.get(O) || null, k(C, _, B, at, null);
        if (typeof B.then == "function")
          return w(
            _,
            C,
            O,
            Fa(B),
            at
          );
        if (B.$$typeof === Q)
          return w(
            _,
            C,
            O,
            Qa(C, B),
            at
          );
        Ia(C, B);
      }
      return null;
    }
    function $(_, C, O, B) {
      for (var at = null, Ot = null, tt = C, pt = C = 0, Tt = null; tt !== null && pt < O.length; pt++) {
        tt.index > pt ? (Tt = tt, tt = null) : Tt = tt.sibling;
        var Mt = D(
          _,
          tt,
          O[pt],
          B
        );
        if (Mt === null) {
          tt === null && (tt = Tt);
          break;
        }
        t && tt && Mt.alternate === null && e(_, tt), C = o(Mt, C, pt), Ot === null ? at = Mt : Ot.sibling = Mt, Ot = Mt, tt = Tt;
      }
      if (pt === O.length)
        return n(_, tt), Ct && yn(_, pt), at;
      if (tt === null) {
        for (; pt < O.length; pt++)
          tt = H(_, O[pt], B), tt !== null && (C = o(
            tt,
            C,
            pt
          ), Ot === null ? at = tt : Ot.sibling = tt, Ot = tt);
        return Ct && yn(_, pt), at;
      }
      for (tt = l(tt); pt < O.length; pt++)
        Tt = w(
          tt,
          _,
          pt,
          O[pt],
          B
        ), Tt !== null && (t && Tt.alternate !== null && tt.delete(
          Tt.key === null ? pt : Tt.key
        ), C = o(
          Tt,
          C,
          pt
        ), Ot === null ? at = Tt : Ot.sibling = Tt, Ot = Tt);
      return t && tt.forEach(function(tl) {
        return e(_, tl);
      }), Ct && yn(_, pt), at;
    }
    function ut(_, C, O, B) {
      if (O == null) throw Error(c(151));
      for (var at = null, Ot = null, tt = C, pt = C = 0, Tt = null, Mt = O.next(); tt !== null && !Mt.done; pt++, Mt = O.next()) {
        tt.index > pt ? (Tt = tt, tt = null) : Tt = tt.sibling;
        var tl = D(_, tt, Mt.value, B);
        if (tl === null) {
          tt === null && (tt = Tt);
          break;
        }
        t && tt && tl.alternate === null && e(_, tt), C = o(tl, C, pt), Ot === null ? at = tl : Ot.sibling = tl, Ot = tl, tt = Tt;
      }
      if (Mt.done)
        return n(_, tt), Ct && yn(_, pt), at;
      if (tt === null) {
        for (; !Mt.done; pt++, Mt = O.next())
          Mt = H(_, Mt.value, B), Mt !== null && (C = o(Mt, C, pt), Ot === null ? at = Mt : Ot.sibling = Mt, Ot = Mt);
        return Ct && yn(_, pt), at;
      }
      for (tt = l(tt); !Mt.done; pt++, Mt = O.next())
        Mt = w(tt, _, pt, Mt.value, B), Mt !== null && (t && Mt.alternate !== null && tt.delete(Mt.key === null ? pt : Mt.key), C = o(Mt, C, pt), Ot === null ? at = Mt : Ot.sibling = Mt, Ot = Mt);
      return t && tt.forEach(function(Fg) {
        return e(_, Fg);
      }), Ct && yn(_, pt), at;
    }
    function Ht(_, C, O, B) {
      if (typeof O == "object" && O !== null && O.type === G && O.key === null && (O = O.props.children), typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case x:
            t: {
              for (var at = O.key; C !== null; ) {
                if (C.key === at) {
                  if (at = O.type, at === G) {
                    if (C.tag === 7) {
                      n(
                        _,
                        C.sibling
                      ), B = u(
                        C,
                        O.props.children
                      ), B.return = _, _ = B;
                      break t;
                    }
                  } else if (C.elementType === at || typeof at == "object" && at !== null && at.$$typeof === mt && dl(at) === C.type) {
                    n(
                      _,
                      C.sibling
                    ), B = u(C, O.props), ji(B, O), B.return = _, _ = B;
                    break t;
                  }
                  n(_, C);
                  break;
                } else e(_, C);
                C = C.sibling;
              }
              O.type === G ? (B = ol(
                O.props.children,
                _.mode,
                B,
                O.key
              ), B.return = _, _ = B) : (B = Va(
                O.type,
                O.key,
                O.props,
                null,
                _.mode,
                B
              ), ji(B, O), B.return = _, _ = B);
            }
            return m(_);
          case Y:
            t: {
              for (at = O.key; C !== null; ) {
                if (C.key === at)
                  if (C.tag === 4 && C.stateNode.containerInfo === O.containerInfo && C.stateNode.implementation === O.implementation) {
                    n(
                      _,
                      C.sibling
                    ), B = u(C, O.children || []), B.return = _, _ = B;
                    break t;
                  } else {
                    n(_, C);
                    break;
                  }
                else e(_, C);
                C = C.sibling;
              }
              B = Dr(O, _.mode, B), B.return = _, _ = B;
            }
            return m(_);
          case mt:
            return O = dl(O), Ht(
              _,
              C,
              O,
              B
            );
        }
        if (Z(O))
          return $(
            _,
            C,
            O,
            B
          );
        if (I(O)) {
          if (at = I(O), typeof at != "function") throw Error(c(150));
          return O = at.call(O), ut(
            _,
            C,
            O,
            B
          );
        }
        if (typeof O.then == "function")
          return Ht(
            _,
            C,
            Fa(O),
            B
          );
        if (O.$$typeof === Q)
          return Ht(
            _,
            C,
            Qa(_, O),
            B
          );
        Ia(_, O);
      }
      return typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint" ? (O = "" + O, C !== null && C.tag === 6 ? (n(_, C.sibling), B = u(C, O), B.return = _, _ = B) : (n(_, C), B = Mr(O, _.mode, B), B.return = _, _ = B), m(_)) : n(_, C);
    }
    return function(_, C, O, B) {
      try {
        Ui = 0;
        var at = Ht(
          _,
          C,
          O,
          B
        );
        return Kl = null, at;
      } catch (tt) {
        if (tt === Zl || tt === Ka) throw tt;
        var Ot = De(29, tt, null, _.mode);
        return Ot.lanes = B, Ot.return = _, Ot;
      }
    };
  }
  var yl = pf(!0), yf = pf(!1), Bn = !1;
  function Vr(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Xr(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function Hn(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Ln(t, e, n) {
    var l = t.updateQueue;
    if (l === null) return null;
    if (l = l.shared, (Dt & 2) !== 0) {
      var u = l.pending;
      return u === null ? e.next = e : (e.next = u.next, u.next = e), l.pending = e, e = Ya(t), $s(t, null, n), e;
    }
    return qa(t, l, e, n), Ya(t);
  }
  function Bi(t, e, n) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (n & 4194048) !== 0)) {
      var l = e.lanes;
      l &= t.pendingLanes, n |= l, e.lanes = n, us(t, n);
    }
  }
  function Gr(t, e) {
    var n = t.updateQueue, l = t.alternate;
    if (l !== null && (l = l.updateQueue, n === l)) {
      var u = null, o = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var m = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null
          };
          o === null ? u = o = m : o = o.next = m, n = n.next;
        } while (n !== null);
        o === null ? u = o = e : o = o.next = e;
      } else u = o = e;
      n = {
        baseState: l.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: o,
        shared: l.shared,
        callbacks: l.callbacks
      }, t.updateQueue = n;
      return;
    }
    t = n.lastBaseUpdate, t === null ? n.firstBaseUpdate = e : t.next = e, n.lastBaseUpdate = e;
  }
  var Qr = !1;
  function Hi() {
    if (Qr) {
      var t = Ql;
      if (t !== null) throw t;
    }
  }
  function Li(t, e, n, l) {
    Qr = !1;
    var u = t.updateQueue;
    Bn = !1;
    var o = u.firstBaseUpdate, m = u.lastBaseUpdate, y = u.shared.pending;
    if (y !== null) {
      u.shared.pending = null;
      var T = y, M = T.next;
      T.next = null, m === null ? o = M : m.next = M, m = T;
      var k = t.alternate;
      k !== null && (k = k.updateQueue, y = k.lastBaseUpdate, y !== m && (y === null ? k.firstBaseUpdate = M : y.next = M, k.lastBaseUpdate = T));
    }
    if (o !== null) {
      var H = u.baseState;
      m = 0, k = M = T = null, y = o;
      do {
        var D = y.lane & -536870913, w = D !== y.lane;
        if (w ? (At & D) === D : (l & D) === D) {
          D !== 0 && D === Gl && (Qr = !0), k !== null && (k = k.next = {
            lane: 0,
            tag: y.tag,
            payload: y.payload,
            callback: null,
            next: null
          });
          t: {
            var $ = t, ut = y;
            D = e;
            var Ht = n;
            switch (ut.tag) {
              case 1:
                if ($ = ut.payload, typeof $ == "function") {
                  H = $.call(Ht, H, D);
                  break t;
                }
                H = $;
                break t;
              case 3:
                $.flags = $.flags & -65537 | 128;
              case 0:
                if ($ = ut.payload, D = typeof $ == "function" ? $.call(Ht, H, D) : $, D == null) break t;
                H = S({}, H, D);
                break t;
              case 2:
                Bn = !0;
            }
          }
          D = y.callback, D !== null && (t.flags |= 64, w && (t.flags |= 8192), w = u.callbacks, w === null ? u.callbacks = [D] : w.push(D));
        } else
          w = {
            lane: D,
            tag: y.tag,
            payload: y.payload,
            callback: y.callback,
            next: null
          }, k === null ? (M = k = w, T = H) : k = k.next = w, m |= D;
        if (y = y.next, y === null) {
          if (y = u.shared.pending, y === null)
            break;
          w = y, y = w.next, w.next = null, u.lastBaseUpdate = w, u.shared.pending = null;
        }
      } while (!0);
      k === null && (T = H), u.baseState = T, u.firstBaseUpdate = M, u.lastBaseUpdate = k, o === null && (u.shared.lanes = 0), Gn |= m, t.lanes = m, t.memoizedState = H;
    }
  }
  function gf(t, e) {
    if (typeof t != "function")
      throw Error(c(191, t));
    t.call(e);
  }
  function vf(t, e) {
    var n = t.callbacks;
    if (n !== null)
      for (t.callbacks = null, t = 0; t < n.length; t++)
        gf(n[t], e);
  }
  var Jl = z(null), Wa = z(0);
  function Sf(t, e) {
    t = _n, b(Wa, t), b(Jl, e), _n = t | e.baseLanes;
  }
  function Zr() {
    b(Wa, _n), b(Jl, Jl.current);
  }
  function Kr() {
    _n = Wa.current, U(Jl), U(Wa);
  }
  var Ne = z(null), Ze = null;
  function qn(t) {
    var e = t.alternate;
    b(Ft, Ft.current & 1), b(Ne, t), Ze === null && (e === null || Jl.current !== null || e.memoizedState !== null) && (Ze = t);
  }
  function Jr(t) {
    b(Ft, Ft.current), b(Ne, t), Ze === null && (Ze = t);
  }
  function bf(t) {
    t.tag === 22 ? (b(Ft, Ft.current), b(Ne, t), Ze === null && (Ze = t)) : Yn();
  }
  function Yn() {
    b(Ft, Ft.current), b(Ne, Ne.current);
  }
  function we(t) {
    U(Ne), Ze === t && (Ze = null), U(Ft);
  }
  var Ft = z(0);
  function $a(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || to(n) || eo(n)))
          return e;
      } else if (e.tag === 19 && (e.memoizedProps.revealOrder === "forwards" || e.memoizedProps.revealOrder === "backwards" || e.memoizedProps.revealOrder === "unstable_legacy-backwards" || e.memoizedProps.revealOrder === "together")) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    return null;
  }
  var Sn = 0, ht = null, jt = null, $t = null, Pa = !1, Fl = !1, gl = !1, tu = 0, qi = 0, Il = null, Ly = 0;
  function Kt() {
    throw Error(c(321));
  }
  function Fr(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
      if (!Me(t[n], e[n])) return !1;
    return !0;
  }
  function Ir(t, e, n, l, u, o) {
    return Sn = o, ht = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, N.H = t === null || t.memoizedState === null ? lh : fc, gl = !1, o = n(l, u), gl = !1, Fl && (o = Ef(
      e,
      n,
      l,
      u
    )), xf(t), o;
  }
  function xf(t) {
    N.H = Xi;
    var e = jt !== null && jt.next !== null;
    if (Sn = 0, $t = jt = ht = null, Pa = !1, qi = 0, Il = null, e) throw Error(c(300));
    t === null || Pt || (t = t.dependencies, t !== null && Ga(t) && (Pt = !0));
  }
  function Ef(t, e, n, l) {
    ht = t;
    var u = 0;
    do {
      if (Fl && (Il = null), qi = 0, Fl = !1, 25 <= u) throw Error(c(301));
      if (u += 1, $t = jt = null, t.updateQueue != null) {
        var o = t.updateQueue;
        o.lastEffect = null, o.events = null, o.stores = null, o.memoCache != null && (o.memoCache.index = 0);
      }
      N.H = ih, o = e(n, l);
    } while (Fl);
    return o;
  }
  function qy() {
    var t = N.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? Yi(e) : e, t = t.useState()[0], (jt !== null ? jt.memoizedState : null) !== t && (ht.flags |= 1024), e;
  }
  function Wr() {
    var t = tu !== 0;
    return tu = 0, t;
  }
  function $r(t, e, n) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~n;
  }
  function Pr(t) {
    if (Pa) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      Pa = !1;
    }
    Sn = 0, $t = jt = ht = null, Fl = !1, qi = tu = 0, Il = null;
  }
  function ye() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return $t === null ? ht.memoizedState = $t = t : $t = $t.next = t, $t;
  }
  function It() {
    if (jt === null) {
      var t = ht.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = jt.next;
    var e = $t === null ? ht.memoizedState : $t.next;
    if (e !== null)
      $t = e, jt = t;
    else {
      if (t === null)
        throw ht.alternate === null ? Error(c(467)) : Error(c(310));
      jt = t, t = {
        memoizedState: jt.memoizedState,
        baseState: jt.baseState,
        baseQueue: jt.baseQueue,
        queue: jt.queue,
        next: null
      }, $t === null ? ht.memoizedState = $t = t : $t = $t.next = t;
    }
    return $t;
  }
  function eu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Yi(t) {
    var e = qi;
    return qi += 1, Il === null && (Il = []), t = hf(Il, t, e), e = ht, ($t === null ? e.memoizedState : $t.next) === null && (e = e.alternate, N.H = e === null || e.memoizedState === null ? lh : fc), t;
  }
  function nu(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Yi(t);
      if (t.$$typeof === Q) return oe(t);
    }
    throw Error(c(438, String(t)));
  }
  function tc(t) {
    var e = null, n = ht.updateQueue;
    if (n !== null && (e = n.memoCache), e == null) {
      var l = ht.alternate;
      l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (e = {
        data: l.data.map(function(u) {
          return u.slice();
        }),
        index: 0
      })));
    }
    if (e == null && (e = { data: [], index: 0 }), n === null && (n = eu(), ht.updateQueue = n), n.memoCache = e, n = e.data[e.index], n === void 0)
      for (n = e.data[e.index] = Array(t), l = 0; l < t; l++)
        n[l] = zt;
    return e.index++, n;
  }
  function bn(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function lu(t) {
    var e = It();
    return ec(e, jt, t);
  }
  function ec(t, e, n) {
    var l = t.queue;
    if (l === null) throw Error(c(311));
    l.lastRenderedReducer = n;
    var u = t.baseQueue, o = l.pending;
    if (o !== null) {
      if (u !== null) {
        var m = u.next;
        u.next = o.next, o.next = m;
      }
      e.baseQueue = u = o, l.pending = null;
    }
    if (o = t.baseState, u === null) t.memoizedState = o;
    else {
      e = u.next;
      var y = m = null, T = null, M = e, k = !1;
      do {
        var H = M.lane & -536870913;
        if (H !== M.lane ? (At & H) === H : (Sn & H) === H) {
          var D = M.revertLane;
          if (D === 0)
            T !== null && (T = T.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: M.action,
              hasEagerState: M.hasEagerState,
              eagerState: M.eagerState,
              next: null
            }), H === Gl && (k = !0);
          else if ((Sn & D) === D) {
            M = M.next, D === Gl && (k = !0);
            continue;
          } else
            H = {
              lane: 0,
              revertLane: M.revertLane,
              gesture: null,
              action: M.action,
              hasEagerState: M.hasEagerState,
              eagerState: M.eagerState,
              next: null
            }, T === null ? (y = T = H, m = o) : T = T.next = H, ht.lanes |= D, Gn |= D;
          H = M.action, gl && n(o, H), o = M.hasEagerState ? M.eagerState : n(o, H);
        } else
          D = {
            lane: H,
            revertLane: M.revertLane,
            gesture: M.gesture,
            action: M.action,
            hasEagerState: M.hasEagerState,
            eagerState: M.eagerState,
            next: null
          }, T === null ? (y = T = D, m = o) : T = T.next = D, ht.lanes |= H, Gn |= H;
        M = M.next;
      } while (M !== null && M !== e);
      if (T === null ? m = o : T.next = y, !Me(o, t.memoizedState) && (Pt = !0, k && (n = Ql, n !== null)))
        throw n;
      t.memoizedState = o, t.baseState = m, t.baseQueue = T, l.lastRenderedState = o;
    }
    return u === null && (l.lanes = 0), [t.memoizedState, l.dispatch];
  }
  function nc(t) {
    var e = It(), n = e.queue;
    if (n === null) throw Error(c(311));
    n.lastRenderedReducer = t;
    var l = n.dispatch, u = n.pending, o = e.memoizedState;
    if (u !== null) {
      n.pending = null;
      var m = u = u.next;
      do
        o = t(o, m.action), m = m.next;
      while (m !== u);
      Me(o, e.memoizedState) || (Pt = !0), e.memoizedState = o, e.baseQueue === null && (e.baseState = o), n.lastRenderedState = o;
    }
    return [o, l];
  }
  function Af(t, e, n) {
    var l = ht, u = It(), o = Ct;
    if (o) {
      if (n === void 0) throw Error(c(407));
      n = n();
    } else n = e();
    var m = !Me(
      (jt || u).memoizedState,
      n
    );
    if (m && (u.memoizedState = n, Pt = !0), u = u.queue, ac(Cf.bind(null, l, u, t), [
      t
    ]), u.getSnapshot !== e || m || $t !== null && $t.memoizedState.tag & 1) {
      if (l.flags |= 2048, Wl(
        9,
        { destroy: void 0 },
        zf.bind(
          null,
          l,
          u,
          n,
          e
        ),
        null
      ), qt === null) throw Error(c(349));
      o || (Sn & 127) !== 0 || Tf(l, e, n);
    }
    return n;
  }
  function Tf(t, e, n) {
    t.flags |= 16384, t = { getSnapshot: e, value: n }, e = ht.updateQueue, e === null ? (e = eu(), ht.updateQueue = e, e.stores = [t]) : (n = e.stores, n === null ? e.stores = [t] : n.push(t));
  }
  function zf(t, e, n, l) {
    e.value = n, e.getSnapshot = l, _f(e) && Of(t);
  }
  function Cf(t, e, n) {
    return n(function() {
      _f(e) && Of(t);
    });
  }
  function _f(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !Me(t, n);
    } catch {
      return !0;
    }
  }
  function Of(t) {
    var e = cl(t, 2);
    e !== null && Te(e, t, 2);
  }
  function lc(t) {
    var e = ye();
    if (typeof t == "function") {
      var n = t;
      if (t = n(), gl) {
        ge(!0);
        try {
          n();
        } finally {
          ge(!1);
        }
      }
    }
    return e.memoizedState = e.baseState = t, e.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: bn,
      lastRenderedState: t
    }, e;
  }
  function Mf(t, e, n, l) {
    return t.baseState = n, ec(
      t,
      jt,
      typeof l == "function" ? l : bn
    );
  }
  function Yy(t, e, n, l, u) {
    if (uu(t)) throw Error(c(485));
    if (t = e.action, t !== null) {
      var o = {
        payload: u,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(m) {
          o.listeners.push(m);
        }
      };
      N.T !== null ? n(!0) : o.isTransition = !1, l(o), n = e.pending, n === null ? (o.next = e.pending = o, Df(e, o)) : (o.next = n.next, e.pending = n.next = o);
    }
  }
  function Df(t, e) {
    var n = e.action, l = e.payload, u = t.state;
    if (e.isTransition) {
      var o = N.T, m = {};
      N.T = m;
      try {
        var y = n(u, l), T = N.S;
        T !== null && T(m, y), Nf(t, e, y);
      } catch (M) {
        ic(t, e, M);
      } finally {
        o !== null && m.types !== null && (o.types = m.types), N.T = o;
      }
    } else
      try {
        o = n(u, l), Nf(t, e, o);
      } catch (M) {
        ic(t, e, M);
      }
  }
  function Nf(t, e, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(l) {
        wf(t, e, l);
      },
      function(l) {
        return ic(t, e, l);
      }
    ) : wf(t, e, n);
  }
  function wf(t, e, n) {
    e.status = "fulfilled", e.value = n, Rf(e), t.state = n, e = t.pending, e !== null && (n = e.next, n === e ? t.pending = null : (n = n.next, e.next = n, Df(t, n)));
  }
  function ic(t, e, n) {
    var l = t.pending;
    if (t.pending = null, l !== null) {
      l = l.next;
      do
        e.status = "rejected", e.reason = n, Rf(e), e = e.next;
      while (e !== l);
    }
    t.action = null;
  }
  function Rf(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function kf(t, e) {
    return e;
  }
  function Uf(t, e) {
    if (Ct) {
      var n = qt.formState;
      if (n !== null) {
        t: {
          var l = ht;
          if (Ct) {
            if (Xt) {
              e: {
                for (var u = Xt, o = Qe; u.nodeType !== 8; ) {
                  if (!o) {
                    u = null;
                    break e;
                  }
                  if (u = Ke(
                    u.nextSibling
                  ), u === null) {
                    u = null;
                    break e;
                  }
                }
                o = u.data, u = o === "F!" || o === "F" ? u : null;
              }
              if (u) {
                Xt = Ke(
                  u.nextSibling
                ), l = u.data === "F!";
                break t;
              }
            }
            Un(l);
          }
          l = !1;
        }
        l && (e = n[0]);
      }
    }
    return n = ye(), n.memoizedState = n.baseState = e, l = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: kf,
      lastRenderedState: e
    }, n.queue = l, n = th.bind(
      null,
      ht,
      l
    ), l.dispatch = n, l = lc(!1), o = sc.bind(
      null,
      ht,
      !1,
      l.queue
    ), l = ye(), u = {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    }, l.queue = u, n = Yy.bind(
      null,
      ht,
      u,
      o,
      n
    ), u.dispatch = n, l.memoizedState = t, [e, n, !1];
  }
  function jf(t) {
    var e = It();
    return Bf(e, jt, t);
  }
  function Bf(t, e, n) {
    if (e = ec(
      t,
      e,
      kf
    )[0], t = lu(bn)[0], typeof e == "object" && e !== null && typeof e.then == "function")
      try {
        var l = Yi(e);
      } catch (m) {
        throw m === Zl ? Ka : m;
      }
    else l = e;
    e = It();
    var u = e.queue, o = u.dispatch;
    return n !== e.memoizedState && (ht.flags |= 2048, Wl(
      9,
      { destroy: void 0 },
      Vy.bind(null, u, n),
      null
    )), [l, o, t];
  }
  function Vy(t, e) {
    t.action = e;
  }
  function Hf(t) {
    var e = It(), n = jt;
    if (n !== null)
      return Bf(e, n, t);
    It(), e = e.memoizedState, n = It();
    var l = n.queue.dispatch;
    return n.memoizedState = t, [e, l, !1];
  }
  function Wl(t, e, n, l) {
    return t = { tag: t, create: n, deps: l, inst: e, next: null }, e = ht.updateQueue, e === null && (e = eu(), ht.updateQueue = e), n = e.lastEffect, n === null ? e.lastEffect = t.next = t : (l = n.next, n.next = t, t.next = l, e.lastEffect = t), t;
  }
  function Lf() {
    return It().memoizedState;
  }
  function iu(t, e, n, l) {
    var u = ye();
    ht.flags |= t, u.memoizedState = Wl(
      1 | e,
      { destroy: void 0 },
      n,
      l === void 0 ? null : l
    );
  }
  function au(t, e, n, l) {
    var u = It();
    l = l === void 0 ? null : l;
    var o = u.memoizedState.inst;
    jt !== null && l !== null && Fr(l, jt.memoizedState.deps) ? u.memoizedState = Wl(e, o, n, l) : (ht.flags |= t, u.memoizedState = Wl(
      1 | e,
      o,
      n,
      l
    ));
  }
  function qf(t, e) {
    iu(8390656, 8, t, e);
  }
  function ac(t, e) {
    au(2048, 8, t, e);
  }
  function Xy(t) {
    ht.flags |= 4;
    var e = ht.updateQueue;
    if (e === null)
      e = eu(), ht.updateQueue = e, e.events = [t];
    else {
      var n = e.events;
      n === null ? e.events = [t] : n.push(t);
    }
  }
  function Yf(t) {
    var e = It().memoizedState;
    return Xy({ ref: e, nextImpl: t }), function() {
      if ((Dt & 2) !== 0) throw Error(c(440));
      return e.impl.apply(void 0, arguments);
    };
  }
  function Vf(t, e) {
    return au(4, 2, t, e);
  }
  function Xf(t, e) {
    return au(4, 4, t, e);
  }
  function Gf(t, e) {
    if (typeof e == "function") {
      t = t();
      var n = e(t);
      return function() {
        typeof n == "function" ? n() : e(null);
      };
    }
    if (e != null)
      return t = t(), e.current = t, function() {
        e.current = null;
      };
  }
  function Qf(t, e, n) {
    n = n != null ? n.concat([t]) : null, au(4, 4, Gf.bind(null, e, t), n);
  }
  function uc() {
  }
  function Zf(t, e) {
    var n = It();
    e = e === void 0 ? null : e;
    var l = n.memoizedState;
    return e !== null && Fr(e, l[1]) ? l[0] : (n.memoizedState = [t, e], t);
  }
  function Kf(t, e) {
    var n = It();
    e = e === void 0 ? null : e;
    var l = n.memoizedState;
    if (e !== null && Fr(e, l[1]))
      return l[0];
    if (l = t(), gl) {
      ge(!0);
      try {
        t();
      } finally {
        ge(!1);
      }
    }
    return n.memoizedState = [l, e], l;
  }
  function rc(t, e, n) {
    return n === void 0 || (Sn & 1073741824) !== 0 && (At & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = n, t = Jh(), ht.lanes |= t, Gn |= t, n);
  }
  function Jf(t, e, n, l) {
    return Me(n, e) ? n : Jl.current !== null ? (t = rc(t, n, l), Me(t, e) || (Pt = !0), t) : (Sn & 42) === 0 || (Sn & 1073741824) !== 0 && (At & 261930) === 0 ? (Pt = !0, t.memoizedState = n) : (t = Jh(), ht.lanes |= t, Gn |= t, e);
  }
  function Ff(t, e, n, l, u) {
    var o = V.p;
    V.p = o !== 0 && 8 > o ? o : 8;
    var m = N.T, y = {};
    N.T = y, sc(t, !1, e, n);
    try {
      var T = u(), M = N.S;
      if (M !== null && M(y, T), T !== null && typeof T == "object" && typeof T.then == "function") {
        var k = Hy(
          T,
          l
        );
        Vi(
          t,
          e,
          k,
          Ue(t)
        );
      } else
        Vi(
          t,
          e,
          l,
          Ue(t)
        );
    } catch (H) {
      Vi(
        t,
        e,
        { then: function() {
        }, status: "rejected", reason: H },
        Ue()
      );
    } finally {
      V.p = o, m !== null && y.types !== null && (m.types = y.types), N.T = m;
    }
  }
  function Gy() {
  }
  function cc(t, e, n, l) {
    if (t.tag !== 5) throw Error(c(476));
    var u = If(t).queue;
    Ff(
      t,
      u,
      e,
      et,
      n === null ? Gy : function() {
        return Wf(t), n(l);
      }
    );
  }
  function If(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: et,
      baseState: et,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: bn,
        lastRenderedState: et
      },
      next: null
    };
    var n = {};
    return e.next = {
      memoizedState: n,
      baseState: n,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: bn,
        lastRenderedState: n
      },
      next: null
    }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
  }
  function Wf(t) {
    var e = If(t);
    e.next === null && (e = t.alternate.memoizedState), Vi(
      t,
      e.next.queue,
      {},
      Ue()
    );
  }
  function oc() {
    return oe(aa);
  }
  function $f() {
    return It().memoizedState;
  }
  function Pf() {
    return It().memoizedState;
  }
  function Qy(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = Ue();
          t = Hn(n);
          var l = Ln(e, t, n);
          l !== null && (Te(l, e, n), Bi(l, e, n)), e = { cache: Hr() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function Zy(t, e, n) {
    var l = Ue();
    n = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, uu(t) ? eh(e, n) : (n = _r(t, e, n, l), n !== null && (Te(n, t, l), nh(n, e, l)));
  }
  function th(t, e, n) {
    var l = Ue();
    Vi(t, e, n, l);
  }
  function Vi(t, e, n, l) {
    var u = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (uu(t)) eh(e, u);
    else {
      var o = t.alternate;
      if (t.lanes === 0 && (o === null || o.lanes === 0) && (o = e.lastRenderedReducer, o !== null))
        try {
          var m = e.lastRenderedState, y = o(m, n);
          if (u.hasEagerState = !0, u.eagerState = y, Me(y, m))
            return qa(t, e, u, 0), qt === null && La(), !1;
        } catch {
        }
      if (n = _r(t, e, u, l), n !== null)
        return Te(n, t, l), nh(n, e, l), !0;
    }
    return !1;
  }
  function sc(t, e, n, l) {
    if (l = {
      lane: 2,
      revertLane: Vc(),
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, uu(t)) {
      if (e) throw Error(c(479));
    } else
      e = _r(
        t,
        n,
        l,
        2
      ), e !== null && Te(e, t, 2);
  }
  function uu(t) {
    var e = t.alternate;
    return t === ht || e !== null && e === ht;
  }
  function eh(t, e) {
    Fl = Pa = !0;
    var n = t.pending;
    n === null ? e.next = e : (e.next = n.next, n.next = e), t.pending = e;
  }
  function nh(t, e, n) {
    if ((n & 4194048) !== 0) {
      var l = e.lanes;
      l &= t.pendingLanes, n |= l, e.lanes = n, us(t, n);
    }
  }
  var Xi = {
    readContext: oe,
    use: nu,
    useCallback: Kt,
    useContext: Kt,
    useEffect: Kt,
    useImperativeHandle: Kt,
    useLayoutEffect: Kt,
    useInsertionEffect: Kt,
    useMemo: Kt,
    useReducer: Kt,
    useRef: Kt,
    useState: Kt,
    useDebugValue: Kt,
    useDeferredValue: Kt,
    useTransition: Kt,
    useSyncExternalStore: Kt,
    useId: Kt,
    useHostTransitionStatus: Kt,
    useFormState: Kt,
    useActionState: Kt,
    useOptimistic: Kt,
    useMemoCache: Kt,
    useCacheRefresh: Kt
  };
  Xi.useEffectEvent = Kt;
  var lh = {
    readContext: oe,
    use: nu,
    useCallback: function(t, e) {
      return ye().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    },
    useContext: oe,
    useEffect: qf,
    useImperativeHandle: function(t, e, n) {
      n = n != null ? n.concat([t]) : null, iu(
        4194308,
        4,
        Gf.bind(null, e, t),
        n
      );
    },
    useLayoutEffect: function(t, e) {
      return iu(4194308, 4, t, e);
    },
    useInsertionEffect: function(t, e) {
      iu(4, 2, t, e);
    },
    useMemo: function(t, e) {
      var n = ye();
      e = e === void 0 ? null : e;
      var l = t();
      if (gl) {
        ge(!0);
        try {
          t();
        } finally {
          ge(!1);
        }
      }
      return n.memoizedState = [l, e], l;
    },
    useReducer: function(t, e, n) {
      var l = ye();
      if (n !== void 0) {
        var u = n(e);
        if (gl) {
          ge(!0);
          try {
            n(e);
          } finally {
            ge(!1);
          }
        }
      } else u = e;
      return l.memoizedState = l.baseState = u, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: u
      }, l.queue = t, t = t.dispatch = Zy.bind(
        null,
        ht,
        t
      ), [l.memoizedState, t];
    },
    useRef: function(t) {
      var e = ye();
      return t = { current: t }, e.memoizedState = t;
    },
    useState: function(t) {
      t = lc(t);
      var e = t.queue, n = th.bind(null, ht, e);
      return e.dispatch = n, [t.memoizedState, n];
    },
    useDebugValue: uc,
    useDeferredValue: function(t, e) {
      var n = ye();
      return rc(n, t, e);
    },
    useTransition: function() {
      var t = lc(!1);
      return t = Ff.bind(
        null,
        ht,
        t.queue,
        !0,
        !1
      ), ye().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, e, n) {
      var l = ht, u = ye();
      if (Ct) {
        if (n === void 0)
          throw Error(c(407));
        n = n();
      } else {
        if (n = e(), qt === null)
          throw Error(c(349));
        (At & 127) !== 0 || Tf(l, e, n);
      }
      u.memoizedState = n;
      var o = { value: n, getSnapshot: e };
      return u.queue = o, qf(Cf.bind(null, l, o, t), [
        t
      ]), l.flags |= 2048, Wl(
        9,
        { destroy: void 0 },
        zf.bind(
          null,
          l,
          o,
          n,
          e
        ),
        null
      ), n;
    },
    useId: function() {
      var t = ye(), e = qt.identifierPrefix;
      if (Ct) {
        var n = en, l = tn;
        n = (l & ~(1 << 32 - Lt(l) - 1)).toString(32) + n, e = "_" + e + "R_" + n, n = tu++, 0 < n && (e += "H" + n.toString(32)), e += "_";
      } else
        n = Ly++, e = "_" + e + "r_" + n.toString(32) + "_";
      return t.memoizedState = e;
    },
    useHostTransitionStatus: oc,
    useFormState: Uf,
    useActionState: Uf,
    useOptimistic: function(t) {
      var e = ye();
      e.memoizedState = e.baseState = t;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return e.queue = n, e = sc.bind(
        null,
        ht,
        !0,
        n
      ), n.dispatch = e, [t, e];
    },
    useMemoCache: tc,
    useCacheRefresh: function() {
      return ye().memoizedState = Qy.bind(
        null,
        ht
      );
    },
    useEffectEvent: function(t) {
      var e = ye(), n = { impl: t };
      return e.memoizedState = n, function() {
        if ((Dt & 2) !== 0)
          throw Error(c(440));
        return n.impl.apply(void 0, arguments);
      };
    }
  }, fc = {
    readContext: oe,
    use: nu,
    useCallback: Zf,
    useContext: oe,
    useEffect: ac,
    useImperativeHandle: Qf,
    useInsertionEffect: Vf,
    useLayoutEffect: Xf,
    useMemo: Kf,
    useReducer: lu,
    useRef: Lf,
    useState: function() {
      return lu(bn);
    },
    useDebugValue: uc,
    useDeferredValue: function(t, e) {
      var n = It();
      return Jf(
        n,
        jt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = lu(bn)[0], e = It().memoizedState;
      return [
        typeof t == "boolean" ? t : Yi(t),
        e
      ];
    },
    useSyncExternalStore: Af,
    useId: $f,
    useHostTransitionStatus: oc,
    useFormState: jf,
    useActionState: jf,
    useOptimistic: function(t, e) {
      var n = It();
      return Mf(n, jt, t, e);
    },
    useMemoCache: tc,
    useCacheRefresh: Pf
  };
  fc.useEffectEvent = Yf;
  var ih = {
    readContext: oe,
    use: nu,
    useCallback: Zf,
    useContext: oe,
    useEffect: ac,
    useImperativeHandle: Qf,
    useInsertionEffect: Vf,
    useLayoutEffect: Xf,
    useMemo: Kf,
    useReducer: nc,
    useRef: Lf,
    useState: function() {
      return nc(bn);
    },
    useDebugValue: uc,
    useDeferredValue: function(t, e) {
      var n = It();
      return jt === null ? rc(n, t, e) : Jf(
        n,
        jt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = nc(bn)[0], e = It().memoizedState;
      return [
        typeof t == "boolean" ? t : Yi(t),
        e
      ];
    },
    useSyncExternalStore: Af,
    useId: $f,
    useHostTransitionStatus: oc,
    useFormState: Hf,
    useActionState: Hf,
    useOptimistic: function(t, e) {
      var n = It();
      return jt !== null ? Mf(n, jt, t, e) : (n.baseState = t, [t, n.queue.dispatch]);
    },
    useMemoCache: tc,
    useCacheRefresh: Pf
  };
  ih.useEffectEvent = Yf;
  function hc(t, e, n, l) {
    e = t.memoizedState, n = n(l, e), n = n == null ? e : S({}, e, n), t.memoizedState = n, t.lanes === 0 && (t.updateQueue.baseState = n);
  }
  var mc = {
    enqueueSetState: function(t, e, n) {
      t = t._reactInternals;
      var l = Ue(), u = Hn(l);
      u.payload = e, n != null && (u.callback = n), e = Ln(t, u, l), e !== null && (Te(e, t, l), Bi(e, t, l));
    },
    enqueueReplaceState: function(t, e, n) {
      t = t._reactInternals;
      var l = Ue(), u = Hn(l);
      u.tag = 1, u.payload = e, n != null && (u.callback = n), e = Ln(t, u, l), e !== null && (Te(e, t, l), Bi(e, t, l));
    },
    enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var n = Ue(), l = Hn(n);
      l.tag = 2, e != null && (l.callback = e), e = Ln(t, l, n), e !== null && (Te(e, t, n), Bi(e, t, n));
    }
  };
  function ah(t, e, n, l, u, o, m) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(l, o, m) : e.prototype && e.prototype.isPureReactComponent ? !Mi(n, l) || !Mi(u, o) : !0;
  }
  function uh(t, e, n, l) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, l), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, l), e.state !== t && mc.enqueueReplaceState(e, e.state, null);
  }
  function vl(t, e) {
    var n = e;
    if ("ref" in e) {
      n = {};
      for (var l in e)
        l !== "ref" && (n[l] = e[l]);
    }
    if (t = t.defaultProps) {
      n === e && (n = S({}, n));
      for (var u in t)
        n[u] === void 0 && (n[u] = t[u]);
    }
    return n;
  }
  function rh(t) {
    Ha(t);
  }
  function ch(t) {
    console.error(t);
  }
  function oh(t) {
    Ha(t);
  }
  function ru(t, e) {
    try {
      var n = t.onUncaughtError;
      n(e.value, { componentStack: e.stack });
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  function sh(t, e, n) {
    try {
      var l = t.onCaughtError;
      l(n.value, {
        componentStack: n.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null
      });
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  function dc(t, e, n) {
    return n = Hn(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      ru(t, e);
    }, n;
  }
  function fh(t) {
    return t = Hn(t), t.tag = 3, t;
  }
  function hh(t, e, n, l) {
    var u = n.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var o = l.value;
      t.payload = function() {
        return u(o);
      }, t.callback = function() {
        sh(e, n, l);
      };
    }
    var m = n.stateNode;
    m !== null && typeof m.componentDidCatch == "function" && (t.callback = function() {
      sh(e, n, l), typeof u != "function" && (Qn === null ? Qn = /* @__PURE__ */ new Set([this]) : Qn.add(this));
      var y = l.stack;
      this.componentDidCatch(l.value, {
        componentStack: y !== null ? y : ""
      });
    });
  }
  function Ky(t, e, n, l, u) {
    if (n.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (e = n.alternate, e !== null && Xl(
        e,
        n,
        u,
        !0
      ), n = Ne.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
            return Ze === null ? Su() : n.alternate === null && Jt === 0 && (Jt = 3), n.flags &= -257, n.flags |= 65536, n.lanes = u, l === Ja ? n.flags |= 16384 : (e = n.updateQueue, e === null ? n.updateQueue = /* @__PURE__ */ new Set([l]) : e.add(l), Lc(t, l, u)), !1;
          case 22:
            return n.flags |= 65536, l === Ja ? n.flags |= 16384 : (e = n.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([l])
            }, n.updateQueue = e) : (n = e.retryQueue, n === null ? e.retryQueue = /* @__PURE__ */ new Set([l]) : n.add(l)), Lc(t, l, u)), !1;
        }
        throw Error(c(435, n.tag));
      }
      return Lc(t, l, u), Su(), !1;
    }
    if (Ct)
      return e = Ne.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = u, l !== Rr && (t = Error(c(422), { cause: l }), wi(Ve(t, n)))) : (l !== Rr && (e = Error(c(423), {
        cause: l
      }), wi(
        Ve(e, n)
      )), t = t.current.alternate, t.flags |= 65536, u &= -u, t.lanes |= u, l = Ve(l, n), u = dc(
        t.stateNode,
        l,
        u
      ), Gr(t, u), Jt !== 4 && (Jt = 2)), !1;
    var o = Error(c(520), { cause: l });
    if (o = Ve(o, n), Wi === null ? Wi = [o] : Wi.push(o), Jt !== 4 && (Jt = 2), e === null) return !0;
    l = Ve(l, n), n = e;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, t = u & -u, n.lanes |= t, t = dc(n.stateNode, l, t), Gr(n, t), !1;
        case 1:
          if (e = n.type, o = n.stateNode, (n.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || o !== null && typeof o.componentDidCatch == "function" && (Qn === null || !Qn.has(o))))
            return n.flags |= 65536, u &= -u, n.lanes |= u, u = fh(u), hh(
              u,
              t,
              n,
              l
            ), Gr(n, u), !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var pc = Error(c(461)), Pt = !1;
  function se(t, e, n, l) {
    e.child = t === null ? yf(e, null, n, l) : yl(
      e,
      t.child,
      n,
      l
    );
  }
  function mh(t, e, n, l, u) {
    n = n.render;
    var o = e.ref;
    if ("ref" in l) {
      var m = {};
      for (var y in l)
        y !== "ref" && (m[y] = l[y]);
    } else m = l;
    return hl(e), l = Ir(
      t,
      e,
      n,
      m,
      o,
      u
    ), y = Wr(), t !== null && !Pt ? ($r(t, e, u), xn(t, e, u)) : (Ct && y && Nr(e), e.flags |= 1, se(t, e, l, u), e.child);
  }
  function dh(t, e, n, l, u) {
    if (t === null) {
      var o = n.type;
      return typeof o == "function" && !Or(o) && o.defaultProps === void 0 && n.compare === null ? (e.tag = 15, e.type = o, ph(
        t,
        e,
        o,
        l,
        u
      )) : (t = Va(
        n.type,
        null,
        l,
        e,
        e.mode,
        u
      ), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (o = t.child, !Ac(t, u)) {
      var m = o.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Mi, n(m, l) && t.ref === e.ref)
        return xn(t, e, u);
    }
    return e.flags |= 1, t = pn(o, l), t.ref = e.ref, t.return = e, e.child = t;
  }
  function ph(t, e, n, l, u) {
    if (t !== null) {
      var o = t.memoizedProps;
      if (Mi(o, l) && t.ref === e.ref)
        if (Pt = !1, e.pendingProps = l = o, Ac(t, u))
          (t.flags & 131072) !== 0 && (Pt = !0);
        else
          return e.lanes = t.lanes, xn(t, e, u);
    }
    return yc(
      t,
      e,
      n,
      l,
      u
    );
  }
  function yh(t, e, n, l) {
    var u = l.children, o = t !== null ? t.memoizedState : null;
    if (t === null && e.stateNode === null && (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), l.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (o = o !== null ? o.baseLanes | n : n, t !== null) {
          for (l = e.child = t.child, u = 0; l !== null; )
            u = u | l.lanes | l.childLanes, l = l.sibling;
          l = u & ~o;
        } else l = 0, e.child = null;
        return gh(
          t,
          e,
          o,
          n,
          l
        );
      }
      if ((n & 536870912) !== 0)
        e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && Za(
          e,
          o !== null ? o.cachePool : null
        ), o !== null ? Sf(e, o) : Zr(), bf(e);
      else
        return l = e.lanes = 536870912, gh(
          t,
          e,
          o !== null ? o.baseLanes | n : n,
          n,
          l
        );
    } else
      o !== null ? (Za(e, o.cachePool), Sf(e, o), Yn(), e.memoizedState = null) : (t !== null && Za(e, null), Zr(), Yn());
    return se(t, e, u, n), e.child;
  }
  function Gi(t, e) {
    return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), e.sibling;
  }
  function gh(t, e, n, l, u) {
    var o = qr();
    return o = o === null ? null : { parent: Wt._currentValue, pool: o }, e.memoizedState = {
      baseLanes: n,
      cachePool: o
    }, t !== null && Za(e, null), Zr(), bf(e), t !== null && Xl(t, e, l, !0), e.childLanes = u, null;
  }
  function cu(t, e) {
    return e = su(
      { mode: e.mode, children: e.children },
      t.mode
    ), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function vh(t, e, n) {
    return yl(e, t.child, null, n), t = cu(e, e.pendingProps), t.flags |= 2, we(e), e.memoizedState = null, t;
  }
  function Jy(t, e, n) {
    var l = e.pendingProps, u = (e.flags & 128) !== 0;
    if (e.flags &= -129, t === null) {
      if (Ct) {
        if (l.mode === "hidden")
          return t = cu(e, l), e.lanes = 536870912, Gi(null, t);
        if (Jr(e), (t = Xt) ? (t = Dm(
          t,
          Qe
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: Rn !== null ? { id: tn, overflow: en } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = tf(t), n.return = e, e.child = n, ce = e, Xt = null)) : t = null, t === null) throw Un(e);
        return e.lanes = 536870912, null;
      }
      return cu(e, l);
    }
    var o = t.memoizedState;
    if (o !== null) {
      var m = o.dehydrated;
      if (Jr(e), u)
        if (e.flags & 256)
          e.flags &= -257, e = vh(
            t,
            e,
            n
          );
        else if (e.memoizedState !== null)
          e.child = t.child, e.flags |= 128, e = null;
        else throw Error(c(558));
      else if (Pt || Xl(t, e, n, !1), u = (n & t.childLanes) !== 0, Pt || u) {
        if (l = qt, l !== null && (m = rs(l, n), m !== 0 && m !== o.retryLane))
          throw o.retryLane = m, cl(t, m), Te(l, t, m), pc;
        Su(), e = vh(
          t,
          e,
          n
        );
      } else
        t = o.treeContext, Xt = Ke(m.nextSibling), ce = e, Ct = !0, kn = null, Qe = !1, t !== null && lf(e, t), e = cu(e, l), e.flags |= 4096;
      return e;
    }
    return t = pn(t.child, {
      mode: l.mode,
      children: l.children
    }), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function ou(t, e) {
    var n = e.ref;
    if (n === null)
      t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object")
        throw Error(c(284));
      (t === null || t.ref !== n) && (e.flags |= 4194816);
    }
  }
  function yc(t, e, n, l, u) {
    return hl(e), n = Ir(
      t,
      e,
      n,
      l,
      void 0,
      u
    ), l = Wr(), t !== null && !Pt ? ($r(t, e, u), xn(t, e, u)) : (Ct && l && Nr(e), e.flags |= 1, se(t, e, n, u), e.child);
  }
  function Sh(t, e, n, l, u, o) {
    return hl(e), e.updateQueue = null, n = Ef(
      e,
      l,
      n,
      u
    ), xf(t), l = Wr(), t !== null && !Pt ? ($r(t, e, o), xn(t, e, o)) : (Ct && l && Nr(e), e.flags |= 1, se(t, e, n, o), e.child);
  }
  function bh(t, e, n, l, u) {
    if (hl(e), e.stateNode === null) {
      var o = Ll, m = n.contextType;
      typeof m == "object" && m !== null && (o = oe(m)), o = new n(l, o), e.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, o.updater = mc, e.stateNode = o, o._reactInternals = e, o = e.stateNode, o.props = l, o.state = e.memoizedState, o.refs = {}, Vr(e), m = n.contextType, o.context = typeof m == "object" && m !== null ? oe(m) : Ll, o.state = e.memoizedState, m = n.getDerivedStateFromProps, typeof m == "function" && (hc(
        e,
        n,
        m,
        l
      ), o.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (m = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), m !== o.state && mc.enqueueReplaceState(o, o.state, null), Li(e, l, o, u), Hi(), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308), l = !0;
    } else if (t === null) {
      o = e.stateNode;
      var y = e.memoizedProps, T = vl(n, y);
      o.props = T;
      var M = o.context, k = n.contextType;
      m = Ll, typeof k == "object" && k !== null && (m = oe(k));
      var H = n.getDerivedStateFromProps;
      k = typeof H == "function" || typeof o.getSnapshotBeforeUpdate == "function", y = e.pendingProps !== y, k || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (y || M !== m) && uh(
        e,
        o,
        l,
        m
      ), Bn = !1;
      var D = e.memoizedState;
      o.state = D, Li(e, l, o, u), Hi(), M = e.memoizedState, y || D !== M || Bn ? (typeof H == "function" && (hc(
        e,
        n,
        H,
        l
      ), M = e.memoizedState), (T = Bn || ah(
        e,
        n,
        T,
        l,
        D,
        M,
        m
      )) ? (k || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = l, e.memoizedState = M), o.props = l, o.state = M, o.context = m, l = T) : (typeof o.componentDidMount == "function" && (e.flags |= 4194308), l = !1);
    } else {
      o = e.stateNode, Xr(t, e), m = e.memoizedProps, k = vl(n, m), o.props = k, H = e.pendingProps, D = o.context, M = n.contextType, T = Ll, typeof M == "object" && M !== null && (T = oe(M)), y = n.getDerivedStateFromProps, (M = typeof y == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (m !== H || D !== T) && uh(
        e,
        o,
        l,
        T
      ), Bn = !1, D = e.memoizedState, o.state = D, Li(e, l, o, u), Hi();
      var w = e.memoizedState;
      m !== H || D !== w || Bn || t !== null && t.dependencies !== null && Ga(t.dependencies) ? (typeof y == "function" && (hc(
        e,
        n,
        y,
        l
      ), w = e.memoizedState), (k = Bn || ah(
        e,
        n,
        k,
        l,
        D,
        w,
        T
      ) || t !== null && t.dependencies !== null && Ga(t.dependencies)) ? (M || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(l, w, T), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(
        l,
        w,
        T
      )), typeof o.componentDidUpdate == "function" && (e.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || m === t.memoizedProps && D === t.memoizedState || (e.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || m === t.memoizedProps && D === t.memoizedState || (e.flags |= 1024), e.memoizedProps = l, e.memoizedState = w), o.props = l, o.state = w, o.context = T, l = k) : (typeof o.componentDidUpdate != "function" || m === t.memoizedProps && D === t.memoizedState || (e.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || m === t.memoizedProps && D === t.memoizedState || (e.flags |= 1024), l = !1);
    }
    return o = l, ou(t, e), l = (e.flags & 128) !== 0, o || l ? (o = e.stateNode, n = l && typeof n.getDerivedStateFromError != "function" ? null : o.render(), e.flags |= 1, t !== null && l ? (e.child = yl(
      e,
      t.child,
      null,
      u
    ), e.child = yl(
      e,
      null,
      n,
      u
    )) : se(t, e, n, u), e.memoizedState = o.state, t = e.child) : t = xn(
      t,
      e,
      u
    ), t;
  }
  function xh(t, e, n, l) {
    return sl(), e.flags |= 256, se(t, e, n, l), e.child;
  }
  var gc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function vc(t) {
    return { baseLanes: t, cachePool: sf() };
  }
  function Sc(t, e, n) {
    return t = t !== null ? t.childLanes & ~n : 0, e && (t |= ke), t;
  }
  function Eh(t, e, n) {
    var l = e.pendingProps, u = !1, o = (e.flags & 128) !== 0, m;
    if ((m = o) || (m = t !== null && t.memoizedState === null ? !1 : (Ft.current & 2) !== 0), m && (u = !0, e.flags &= -129), m = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (Ct) {
        if (u ? qn(e) : Yn(), (t = Xt) ? (t = Dm(
          t,
          Qe
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: Rn !== null ? { id: tn, overflow: en } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = tf(t), n.return = e, e.child = n, ce = e, Xt = null)) : t = null, t === null) throw Un(e);
        return eo(t) ? e.lanes = 32 : e.lanes = 536870912, null;
      }
      var y = l.children;
      return l = l.fallback, u ? (Yn(), u = e.mode, y = su(
        { mode: "hidden", children: y },
        u
      ), l = ol(
        l,
        u,
        n,
        null
      ), y.return = e, l.return = e, y.sibling = l, e.child = y, l = e.child, l.memoizedState = vc(n), l.childLanes = Sc(
        t,
        m,
        n
      ), e.memoizedState = gc, Gi(null, l)) : (qn(e), bc(e, y));
    }
    var T = t.memoizedState;
    if (T !== null && (y = T.dehydrated, y !== null)) {
      if (o)
        e.flags & 256 ? (qn(e), e.flags &= -257, e = xc(
          t,
          e,
          n
        )) : e.memoizedState !== null ? (Yn(), e.child = t.child, e.flags |= 128, e = null) : (Yn(), y = l.fallback, u = e.mode, l = su(
          { mode: "visible", children: l.children },
          u
        ), y = ol(
          y,
          u,
          n,
          null
        ), y.flags |= 2, l.return = e, y.return = e, l.sibling = y, e.child = l, yl(
          e,
          t.child,
          null,
          n
        ), l = e.child, l.memoizedState = vc(n), l.childLanes = Sc(
          t,
          m,
          n
        ), e.memoizedState = gc, e = Gi(null, l));
      else if (qn(e), eo(y)) {
        if (m = y.nextSibling && y.nextSibling.dataset, m) var M = m.dgst;
        m = M, l = Error(c(419)), l.stack = "", l.digest = m, wi({ value: l, source: null, stack: null }), e = xc(
          t,
          e,
          n
        );
      } else if (Pt || Xl(t, e, n, !1), m = (n & t.childLanes) !== 0, Pt || m) {
        if (m = qt, m !== null && (l = rs(m, n), l !== 0 && l !== T.retryLane))
          throw T.retryLane = l, cl(t, l), Te(m, t, l), pc;
        to(y) || Su(), e = xc(
          t,
          e,
          n
        );
      } else
        to(y) ? (e.flags |= 192, e.child = t.child, e = null) : (t = T.treeContext, Xt = Ke(
          y.nextSibling
        ), ce = e, Ct = !0, kn = null, Qe = !1, t !== null && lf(e, t), e = bc(
          e,
          l.children
        ), e.flags |= 4096);
      return e;
    }
    return u ? (Yn(), y = l.fallback, u = e.mode, T = t.child, M = T.sibling, l = pn(T, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = T.subtreeFlags & 65011712, M !== null ? y = pn(
      M,
      y
    ) : (y = ol(
      y,
      u,
      n,
      null
    ), y.flags |= 2), y.return = e, l.return = e, l.sibling = y, e.child = l, Gi(null, l), l = e.child, y = t.child.memoizedState, y === null ? y = vc(n) : (u = y.cachePool, u !== null ? (T = Wt._currentValue, u = u.parent !== T ? { parent: T, pool: T } : u) : u = sf(), y = {
      baseLanes: y.baseLanes | n,
      cachePool: u
    }), l.memoizedState = y, l.childLanes = Sc(
      t,
      m,
      n
    ), e.memoizedState = gc, Gi(t.child, l)) : (qn(e), n = t.child, t = n.sibling, n = pn(n, {
      mode: "visible",
      children: l.children
    }), n.return = e, n.sibling = null, t !== null && (m = e.deletions, m === null ? (e.deletions = [t], e.flags |= 16) : m.push(t)), e.child = n, e.memoizedState = null, n);
  }
  function bc(t, e) {
    return e = su(
      { mode: "visible", children: e },
      t.mode
    ), e.return = t, t.child = e;
  }
  function su(t, e) {
    return t = De(22, t, null, e), t.lanes = 0, t;
  }
  function xc(t, e, n) {
    return yl(e, t.child, null, n), t = bc(
      e,
      e.pendingProps.children
    ), t.flags |= 2, e.memoizedState = null, t;
  }
  function Ah(t, e, n) {
    t.lanes |= e;
    var l = t.alternate;
    l !== null && (l.lanes |= e), jr(t.return, e, n);
  }
  function Ec(t, e, n, l, u, o) {
    var m = t.memoizedState;
    m === null ? t.memoizedState = {
      isBackwards: e,
      rendering: null,
      renderingStartTime: 0,
      last: l,
      tail: n,
      tailMode: u,
      treeForkCount: o
    } : (m.isBackwards = e, m.rendering = null, m.renderingStartTime = 0, m.last = l, m.tail = n, m.tailMode = u, m.treeForkCount = o);
  }
  function Th(t, e, n) {
    var l = e.pendingProps, u = l.revealOrder, o = l.tail;
    l = l.children;
    var m = Ft.current, y = (m & 2) !== 0;
    if (y ? (m = m & 1 | 2, e.flags |= 128) : m &= 1, b(Ft, m), se(t, e, l, n), l = Ct ? Ni : 0, !y && t !== null && (t.flags & 128) !== 0)
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13)
          t.memoizedState !== null && Ah(t, n, e);
        else if (t.tag === 19)
          Ah(t, n, e);
        else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            break t;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    switch (u) {
      case "forwards":
        for (n = e.child, u = null; n !== null; )
          t = n.alternate, t !== null && $a(t) === null && (u = n), n = n.sibling;
        n = u, n === null ? (u = e.child, e.child = null) : (u = n.sibling, n.sibling = null), Ec(
          e,
          !1,
          u,
          n,
          o,
          l
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (n = null, u = e.child, e.child = null; u !== null; ) {
          if (t = u.alternate, t !== null && $a(t) === null) {
            e.child = u;
            break;
          }
          t = u.sibling, u.sibling = n, n = u, u = t;
        }
        Ec(
          e,
          !0,
          n,
          null,
          o,
          l
        );
        break;
      case "together":
        Ec(
          e,
          !1,
          null,
          null,
          void 0,
          l
        );
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function xn(t, e, n) {
    if (t !== null && (e.dependencies = t.dependencies), Gn |= e.lanes, (n & e.childLanes) === 0)
      if (t !== null) {
        if (Xl(
          t,
          e,
          n,
          !1
        ), (n & e.childLanes) === 0)
          return null;
      } else return null;
    if (t !== null && e.child !== t.child)
      throw Error(c(153));
    if (e.child !== null) {
      for (t = e.child, n = pn(t, t.pendingProps), e.child = n, n.return = e; t.sibling !== null; )
        t = t.sibling, n = n.sibling = pn(t, t.pendingProps), n.return = e;
      n.sibling = null;
    }
    return e.child;
  }
  function Ac(t, e) {
    return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && Ga(t)));
  }
  function Fy(t, e, n) {
    switch (e.tag) {
      case 3:
        Qt(e, e.stateNode.containerInfo), jn(e, Wt, t.memoizedState.cache), sl();
        break;
      case 27:
      case 5:
        He(e);
        break;
      case 4:
        Qt(e, e.stateNode.containerInfo);
        break;
      case 10:
        jn(
          e,
          e.type,
          e.memoizedProps.value
        );
        break;
      case 31:
        if (e.memoizedState !== null)
          return e.flags |= 128, Jr(e), null;
        break;
      case 13:
        var l = e.memoizedState;
        if (l !== null)
          return l.dehydrated !== null ? (qn(e), e.flags |= 128, null) : (n & e.child.childLanes) !== 0 ? Eh(t, e, n) : (qn(e), t = xn(
            t,
            e,
            n
          ), t !== null ? t.sibling : null);
        qn(e);
        break;
      case 19:
        var u = (t.flags & 128) !== 0;
        if (l = (n & e.childLanes) !== 0, l || (Xl(
          t,
          e,
          n,
          !1
        ), l = (n & e.childLanes) !== 0), u) {
          if (l)
            return Th(
              t,
              e,
              n
            );
          e.flags |= 128;
        }
        if (u = e.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), b(Ft, Ft.current), l) break;
        return null;
      case 22:
        return e.lanes = 0, yh(
          t,
          e,
          n,
          e.pendingProps
        );
      case 24:
        jn(e, Wt, t.memoizedState.cache);
    }
    return xn(t, e, n);
  }
  function zh(t, e, n) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps)
        Pt = !0;
      else {
        if (!Ac(t, n) && (e.flags & 128) === 0)
          return Pt = !1, Fy(
            t,
            e,
            n
          );
        Pt = (t.flags & 131072) !== 0;
      }
    else
      Pt = !1, Ct && (e.flags & 1048576) !== 0 && nf(e, Ni, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          var l = e.pendingProps;
          if (t = dl(e.elementType), e.type = t, typeof t == "function")
            Or(t) ? (l = vl(t, l), e.tag = 1, e = bh(
              null,
              e,
              t,
              l,
              n
            )) : (e.tag = 0, e = yc(
              null,
              e,
              t,
              l,
              n
            ));
          else {
            if (t != null) {
              var u = t.$$typeof;
              if (u === st) {
                e.tag = 11, e = mh(
                  null,
                  e,
                  t,
                  l,
                  n
                );
                break t;
              } else if (u === W) {
                e.tag = 14, e = dh(
                  null,
                  e,
                  t,
                  l,
                  n
                );
                break t;
              }
            }
            throw e = lt(t) || t, Error(c(306, e, ""));
          }
        }
        return e;
      case 0:
        return yc(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 1:
        return l = e.type, u = vl(
          l,
          e.pendingProps
        ), bh(
          t,
          e,
          l,
          u,
          n
        );
      case 3:
        t: {
          if (Qt(
            e,
            e.stateNode.containerInfo
          ), t === null) throw Error(c(387));
          l = e.pendingProps;
          var o = e.memoizedState;
          u = o.element, Xr(t, e), Li(e, l, null, n);
          var m = e.memoizedState;
          if (l = m.cache, jn(e, Wt, l), l !== o.cache && Br(
            e,
            [Wt],
            n,
            !0
          ), Hi(), l = m.element, o.isDehydrated)
            if (o = {
              element: l,
              isDehydrated: !1,
              cache: m.cache
            }, e.updateQueue.baseState = o, e.memoizedState = o, e.flags & 256) {
              e = xh(
                t,
                e,
                l,
                n
              );
              break t;
            } else if (l !== u) {
              u = Ve(
                Error(c(424)),
                e
              ), wi(u), e = xh(
                t,
                e,
                l,
                n
              );
              break t;
            } else
              for (t = e.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, Xt = Ke(t.firstChild), ce = e, Ct = !0, kn = null, Qe = !0, n = yf(
                e,
                null,
                l,
                n
              ), e.child = n; n; )
                n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (sl(), l === u) {
              e = xn(
                t,
                e,
                n
              );
              break t;
            }
            se(t, e, l, n);
          }
          e = e.child;
        }
        return e;
      case 26:
        return ou(t, e), t === null ? (n = jm(
          e.type,
          null,
          e.pendingProps,
          null
        )) ? e.memoizedState = n : Ct || (n = e.type, t = e.pendingProps, l = Cu(
          it.current
        ).createElement(n), l[re] = e, l[ve] = t, fe(l, n, t), ie(l), e.stateNode = l) : e.memoizedState = jm(
          e.type,
          t.memoizedProps,
          e.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return He(e), t === null && Ct && (l = e.stateNode = Rm(
          e.type,
          e.pendingProps,
          it.current
        ), ce = e, Qe = !0, u = Xt, Fn(e.type) ? (no = u, Xt = Ke(l.firstChild)) : Xt = u), se(
          t,
          e,
          e.pendingProps.children,
          n
        ), ou(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && Ct && ((u = l = Xt) && (l = zg(
          l,
          e.type,
          e.pendingProps,
          Qe
        ), l !== null ? (e.stateNode = l, ce = e, Xt = Ke(l.firstChild), Qe = !1, u = !0) : u = !1), u || Un(e)), He(e), u = e.type, o = e.pendingProps, m = t !== null ? t.memoizedProps : null, l = o.children, Wc(u, o) ? l = null : m !== null && Wc(u, m) && (e.flags |= 32), e.memoizedState !== null && (u = Ir(
          t,
          e,
          qy,
          null,
          null,
          n
        ), aa._currentValue = u), ou(t, e), se(t, e, l, n), e.child;
      case 6:
        return t === null && Ct && ((t = n = Xt) && (n = Cg(
          n,
          e.pendingProps,
          Qe
        ), n !== null ? (e.stateNode = n, ce = e, Xt = null, t = !0) : t = !1), t || Un(e)), null;
      case 13:
        return Eh(t, e, n);
      case 4:
        return Qt(
          e,
          e.stateNode.containerInfo
        ), l = e.pendingProps, t === null ? e.child = yl(
          e,
          null,
          l,
          n
        ) : se(t, e, l, n), e.child;
      case 11:
        return mh(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 7:
        return se(
          t,
          e,
          e.pendingProps,
          n
        ), e.child;
      case 8:
        return se(
          t,
          e,
          e.pendingProps.children,
          n
        ), e.child;
      case 12:
        return se(
          t,
          e,
          e.pendingProps.children,
          n
        ), e.child;
      case 10:
        return l = e.pendingProps, jn(e, e.type, l.value), se(t, e, l.children, n), e.child;
      case 9:
        return u = e.type._context, l = e.pendingProps.children, hl(e), u = oe(u), l = l(u), e.flags |= 1, se(t, e, l, n), e.child;
      case 14:
        return dh(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 15:
        return ph(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 19:
        return Th(t, e, n);
      case 31:
        return Jy(t, e, n);
      case 22:
        return yh(
          t,
          e,
          n,
          e.pendingProps
        );
      case 24:
        return hl(e), l = oe(Wt), t === null ? (u = qr(), u === null && (u = qt, o = Hr(), u.pooledCache = o, o.refCount++, o !== null && (u.pooledCacheLanes |= n), u = o), e.memoizedState = { parent: l, cache: u }, Vr(e), jn(e, Wt, u)) : ((t.lanes & n) !== 0 && (Xr(t, e), Li(e, null, null, n), Hi()), u = t.memoizedState, o = e.memoizedState, u.parent !== l ? (u = { parent: l, cache: l }, e.memoizedState = u, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = u), jn(e, Wt, l)) : (l = o.cache, jn(e, Wt, l), l !== u.cache && Br(
          e,
          [Wt],
          n,
          !0
        ))), se(
          t,
          e,
          e.pendingProps.children,
          n
        ), e.child;
      case 29:
        throw e.pendingProps;
    }
    throw Error(c(156, e.tag));
  }
  function En(t) {
    t.flags |= 4;
  }
  function Tc(t, e, n, l, u) {
    if ((e = (t.mode & 32) !== 0) && (e = !1), e) {
      if (t.flags |= 16777216, (u & 335544128) === u)
        if (t.stateNode.complete) t.flags |= 8192;
        else if ($h()) t.flags |= 8192;
        else
          throw pl = Ja, Yr;
    } else t.flags &= -16777217;
  }
  function Ch(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !Ym(e))
      if ($h()) t.flags |= 8192;
      else
        throw pl = Ja, Yr;
  }
  function fu(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? is() : 536870912, t.lanes |= e, ei |= e);
  }
  function Qi(t, e) {
    if (!Ct)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var n = null; e !== null; )
            e.alternate !== null && (n = e), e = e.sibling;
          n === null ? t.tail = null : n.sibling = null;
          break;
        case "collapsed":
          n = t.tail;
          for (var l = null; n !== null; )
            n.alternate !== null && (l = n), n = n.sibling;
          l === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : l.sibling = null;
      }
  }
  function Gt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child, n = 0, l = 0;
    if (e)
      for (var u = t.child; u !== null; )
        n |= u.lanes | u.childLanes, l |= u.subtreeFlags & 65011712, l |= u.flags & 65011712, u.return = t, u = u.sibling;
    else
      for (u = t.child; u !== null; )
        n |= u.lanes | u.childLanes, l |= u.subtreeFlags, l |= u.flags, u.return = t, u = u.sibling;
    return t.subtreeFlags |= l, t.childLanes = n, e;
  }
  function Iy(t, e, n) {
    var l = e.pendingProps;
    switch (wr(e), e.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Gt(e), null;
      case 1:
        return Gt(e), null;
      case 3:
        return n = e.stateNode, l = null, t !== null && (l = t.memoizedState.cache), e.memoizedState.cache !== l && (e.flags |= 2048), vn(Wt), Ut(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (t === null || t.child === null) && (Vl(e) ? En(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, kr())), Gt(e), null;
      case 26:
        var u = e.type, o = e.memoizedState;
        return t === null ? (En(e), o !== null ? (Gt(e), Ch(e, o)) : (Gt(e), Tc(
          e,
          u,
          null,
          l,
          n
        ))) : o ? o !== t.memoizedState ? (En(e), Gt(e), Ch(e, o)) : (Gt(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== l && En(e), Gt(e), Tc(
          e,
          u,
          t,
          l,
          n
        )), null;
      case 27:
        if (on(e), n = it.current, u = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== l && En(e);
        else {
          if (!l) {
            if (e.stateNode === null)
              throw Error(c(166));
            return Gt(e), null;
          }
          t = J.current, Vl(e) ? af(e) : (t = Rm(u, l, n), e.stateNode = t, En(e));
        }
        return Gt(e), null;
      case 5:
        if (on(e), u = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== l && En(e);
        else {
          if (!l) {
            if (e.stateNode === null)
              throw Error(c(166));
            return Gt(e), null;
          }
          if (o = J.current, Vl(e))
            af(e);
          else {
            var m = Cu(
              it.current
            );
            switch (o) {
              case 1:
                o = m.createElementNS(
                  "http://www.w3.org/2000/svg",
                  u
                );
                break;
              case 2:
                o = m.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  u
                );
                break;
              default:
                switch (u) {
                  case "svg":
                    o = m.createElementNS(
                      "http://www.w3.org/2000/svg",
                      u
                    );
                    break;
                  case "math":
                    o = m.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u
                    );
                    break;
                  case "script":
                    o = m.createElement("div"), o.innerHTML = "<script><\/script>", o = o.removeChild(
                      o.firstChild
                    );
                    break;
                  case "select":
                    o = typeof l.is == "string" ? m.createElement("select", {
                      is: l.is
                    }) : m.createElement("select"), l.multiple ? o.multiple = !0 : l.size && (o.size = l.size);
                    break;
                  default:
                    o = typeof l.is == "string" ? m.createElement(u, { is: l.is }) : m.createElement(u);
                }
            }
            o[re] = e, o[ve] = l;
            t: for (m = e.child; m !== null; ) {
              if (m.tag === 5 || m.tag === 6)
                o.appendChild(m.stateNode);
              else if (m.tag !== 4 && m.tag !== 27 && m.child !== null) {
                m.child.return = m, m = m.child;
                continue;
              }
              if (m === e) break t;
              for (; m.sibling === null; ) {
                if (m.return === null || m.return === e)
                  break t;
                m = m.return;
              }
              m.sibling.return = m.return, m = m.sibling;
            }
            e.stateNode = o;
            t: switch (fe(o, u, l), u) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!l.autoFocus;
                break t;
              case "img":
                l = !0;
                break t;
              default:
                l = !1;
            }
            l && En(e);
          }
        }
        return Gt(e), Tc(
          e,
          e.type,
          t === null ? null : t.memoizedProps,
          e.pendingProps,
          n
        ), null;
      case 6:
        if (t && e.stateNode != null)
          t.memoizedProps !== l && En(e);
        else {
          if (typeof l != "string" && e.stateNode === null)
            throw Error(c(166));
          if (t = it.current, Vl(e)) {
            if (t = e.stateNode, n = e.memoizedProps, l = null, u = ce, u !== null)
              switch (u.tag) {
                case 27:
                case 5:
                  l = u.memoizedProps;
              }
            t[re] = e, t = !!(t.nodeValue === n || l !== null && l.suppressHydrationWarning === !0 || Em(t.nodeValue, n)), t || Un(e, !0);
          } else
            t = Cu(t).createTextNode(
              l
            ), t[re] = e, e.stateNode = t;
        }
        return Gt(e), null;
      case 31:
        if (n = e.memoizedState, t === null || t.memoizedState !== null) {
          if (l = Vl(e), n !== null) {
            if (t === null) {
              if (!l) throw Error(c(318));
              if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(c(557));
              t[re] = e;
            } else
              sl(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            Gt(e), t = !1;
          } else
            n = kr(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), t = !0;
          if (!t)
            return e.flags & 256 ? (we(e), e) : (we(e), null);
          if ((e.flags & 128) !== 0)
            throw Error(c(558));
        }
        return Gt(e), null;
      case 13:
        if (l = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (u = Vl(e), l !== null && l.dehydrated !== null) {
            if (t === null) {
              if (!u) throw Error(c(318));
              if (u = e.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(c(317));
              u[re] = e;
            } else
              sl(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            Gt(e), u = !1;
          } else
            u = kr(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = u), u = !0;
          if (!u)
            return e.flags & 256 ? (we(e), e) : (we(e), null);
        }
        return we(e), (e.flags & 128) !== 0 ? (e.lanes = n, e) : (n = l !== null, t = t !== null && t.memoizedState !== null, n && (l = e.child, u = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (u = l.alternate.memoizedState.cachePool.pool), o = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (o = l.memoizedState.cachePool.pool), o !== u && (l.flags |= 2048)), n !== t && n && (e.child.flags |= 8192), fu(e, e.updateQueue), Gt(e), null);
      case 4:
        return Ut(), t === null && Zc(e.stateNode.containerInfo), Gt(e), null;
      case 10:
        return vn(e.type), Gt(e), null;
      case 19:
        if (U(Ft), l = e.memoizedState, l === null) return Gt(e), null;
        if (u = (e.flags & 128) !== 0, o = l.rendering, o === null)
          if (u) Qi(l, !1);
          else {
            if (Jt !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = e.child; t !== null; ) {
                if (o = $a(t), o !== null) {
                  for (e.flags |= 128, Qi(l, !1), t = o.updateQueue, e.updateQueue = t, fu(e, t), e.subtreeFlags = 0, t = n, n = e.child; n !== null; )
                    Ps(n, t), n = n.sibling;
                  return b(
                    Ft,
                    Ft.current & 1 | 2
                  ), Ct && yn(e, l.treeForkCount), e.child;
                }
                t = t.sibling;
              }
            l.tail !== null && de() > yu && (e.flags |= 128, u = !0, Qi(l, !1), e.lanes = 4194304);
          }
        else {
          if (!u)
            if (t = $a(o), t !== null) {
              if (e.flags |= 128, u = !0, t = t.updateQueue, e.updateQueue = t, fu(e, t), Qi(l, !0), l.tail === null && l.tailMode === "hidden" && !o.alternate && !Ct)
                return Gt(e), null;
            } else
              2 * de() - l.renderingStartTime > yu && n !== 536870912 && (e.flags |= 128, u = !0, Qi(l, !1), e.lanes = 4194304);
          l.isBackwards ? (o.sibling = e.child, e.child = o) : (t = l.last, t !== null ? t.sibling = o : e.child = o, l.last = o);
        }
        return l.tail !== null ? (t = l.tail, l.rendering = t, l.tail = t.sibling, l.renderingStartTime = de(), t.sibling = null, n = Ft.current, b(
          Ft,
          u ? n & 1 | 2 : n & 1
        ), Ct && yn(e, l.treeForkCount), t) : (Gt(e), null);
      case 22:
      case 23:
        return we(e), Kr(), l = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== l && (e.flags |= 8192) : l && (e.flags |= 8192), l ? (n & 536870912) !== 0 && (e.flags & 128) === 0 && (Gt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : Gt(e), n = e.updateQueue, n !== null && fu(e, n.retryQueue), n = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), l = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), l !== n && (e.flags |= 2048), t !== null && U(ml), null;
      case 24:
        return n = null, t !== null && (n = t.memoizedState.cache), e.memoizedState.cache !== n && (e.flags |= 2048), vn(Wt), Gt(e), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(c(156, e.tag));
  }
  function Wy(t, e) {
    switch (wr(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return vn(Wt), Ut(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return on(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if (we(e), e.alternate === null)
            throw Error(c(340));
          sl();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 13:
        if (we(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null)
            throw Error(c(340));
          sl();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return U(Ft), null;
      case 4:
        return Ut(), null;
      case 10:
        return vn(e.type), null;
      case 22:
      case 23:
        return we(e), Kr(), t !== null && U(ml), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return vn(Wt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function _h(t, e) {
    switch (wr(e), e.tag) {
      case 3:
        vn(Wt), Ut();
        break;
      case 26:
      case 27:
      case 5:
        on(e);
        break;
      case 4:
        Ut();
        break;
      case 31:
        e.memoizedState !== null && we(e);
        break;
      case 13:
        we(e);
        break;
      case 19:
        U(Ft);
        break;
      case 10:
        vn(e.type);
        break;
      case 22:
      case 23:
        we(e), Kr(), t !== null && U(ml);
        break;
      case 24:
        vn(Wt);
    }
  }
  function Zi(t, e) {
    try {
      var n = e.updateQueue, l = n !== null ? n.lastEffect : null;
      if (l !== null) {
        var u = l.next;
        n = u;
        do {
          if ((n.tag & t) === t) {
            l = void 0;
            var o = n.create, m = n.inst;
            l = o(), m.destroy = l;
          }
          n = n.next;
        } while (n !== u);
      }
    } catch (y) {
      kt(e, e.return, y);
    }
  }
  function Vn(t, e, n) {
    try {
      var l = e.updateQueue, u = l !== null ? l.lastEffect : null;
      if (u !== null) {
        var o = u.next;
        l = o;
        do {
          if ((l.tag & t) === t) {
            var m = l.inst, y = m.destroy;
            if (y !== void 0) {
              m.destroy = void 0, u = e;
              var T = n, M = y;
              try {
                M();
              } catch (k) {
                kt(
                  u,
                  T,
                  k
                );
              }
            }
          }
          l = l.next;
        } while (l !== o);
      }
    } catch (k) {
      kt(e, e.return, k);
    }
  }
  function Oh(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        vf(e, n);
      } catch (l) {
        kt(t, t.return, l);
      }
    }
  }
  function Mh(t, e, n) {
    n.props = vl(
      t.type,
      t.memoizedProps
    ), n.state = t.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (l) {
      kt(t, e, l);
    }
  }
  function Ki(t, e) {
    try {
      var n = t.ref;
      if (n !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var l = t.stateNode;
            break;
          case 30:
            l = t.stateNode;
            break;
          default:
            l = t.stateNode;
        }
        typeof n == "function" ? t.refCleanup = n(l) : n.current = l;
      }
    } catch (u) {
      kt(t, e, u);
    }
  }
  function nn(t, e) {
    var n = t.ref, l = t.refCleanup;
    if (n !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (u) {
          kt(t, e, u);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (u) {
          kt(t, e, u);
        }
      else n.current = null;
  }
  function Dh(t) {
    var e = t.type, n = t.memoizedProps, l = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && l.focus();
          break t;
        case "img":
          n.src ? l.src = n.src : n.srcSet && (l.srcset = n.srcSet);
      }
    } catch (u) {
      kt(t, t.return, u);
    }
  }
  function zc(t, e, n) {
    try {
      var l = t.stateNode;
      Sg(l, t.type, n, e), l[ve] = e;
    } catch (u) {
      kt(t, t.return, u);
    }
  }
  function Nh(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Fn(t.type) || t.tag === 4;
  }
  function Cc(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || Nh(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && Fn(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function _c(t, e, n) {
    var l = t.tag;
    if (l === 5 || l === 6)
      t = t.stateNode, e ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(t, e) : (e = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, e.appendChild(t), n = n._reactRootContainer, n != null || e.onclick !== null || (e.onclick = mn));
    else if (l !== 4 && (l === 27 && Fn(t.type) && (n = t.stateNode, e = null), t = t.child, t !== null))
      for (_c(t, e, n), t = t.sibling; t !== null; )
        _c(t, e, n), t = t.sibling;
  }
  function hu(t, e, n) {
    var l = t.tag;
    if (l === 5 || l === 6)
      t = t.stateNode, e ? n.insertBefore(t, e) : n.appendChild(t);
    else if (l !== 4 && (l === 27 && Fn(t.type) && (n = t.stateNode), t = t.child, t !== null))
      for (hu(t, e, n), t = t.sibling; t !== null; )
        hu(t, e, n), t = t.sibling;
  }
  function wh(t) {
    var e = t.stateNode, n = t.memoizedProps;
    try {
      for (var l = t.type, u = e.attributes; u.length; )
        e.removeAttributeNode(u[0]);
      fe(e, l, n), e[re] = t, e[ve] = n;
    } catch (o) {
      kt(t, t.return, o);
    }
  }
  var An = !1, te = !1, Oc = !1, Rh = typeof WeakSet == "function" ? WeakSet : Set, ae = null;
  function $y(t, e) {
    if (t = t.containerInfo, Fc = Ru, t = Gs(t), xr(t)) {
      if ("selectionStart" in t)
        var n = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
      else
        t: {
          n = (n = t.ownerDocument) && n.defaultView || window;
          var l = n.getSelection && n.getSelection();
          if (l && l.rangeCount !== 0) {
            n = l.anchorNode;
            var u = l.anchorOffset, o = l.focusNode;
            l = l.focusOffset;
            try {
              n.nodeType, o.nodeType;
            } catch {
              n = null;
              break t;
            }
            var m = 0, y = -1, T = -1, M = 0, k = 0, H = t, D = null;
            e: for (; ; ) {
              for (var w; H !== n || u !== 0 && H.nodeType !== 3 || (y = m + u), H !== o || l !== 0 && H.nodeType !== 3 || (T = m + l), H.nodeType === 3 && (m += H.nodeValue.length), (w = H.firstChild) !== null; )
                D = H, H = w;
              for (; ; ) {
                if (H === t) break e;
                if (D === n && ++M === u && (y = m), D === o && ++k === l && (T = m), (w = H.nextSibling) !== null) break;
                H = D, D = H.parentNode;
              }
              H = w;
            }
            n = y === -1 || T === -1 ? null : { start: y, end: T };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Ic = { focusedElem: t, selectionRange: n }, Ru = !1, ae = e; ae !== null; )
      if (e = ae, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null)
        t.return = e, ae = t;
      else
        for (; ae !== null; ) {
          switch (e = ae, o = e.alternate, t = e.flags, e.tag) {
            case 0:
              if ((t & 4) !== 0 && (t = e.updateQueue, t = t !== null ? t.events : null, t !== null))
                for (n = 0; n < t.length; n++)
                  u = t[n], u.ref.impl = u.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && o !== null) {
                t = void 0, n = e, u = o.memoizedProps, o = o.memoizedState, l = n.stateNode;
                try {
                  var $ = vl(
                    n.type,
                    u
                  );
                  t = l.getSnapshotBeforeUpdate(
                    $,
                    o
                  ), l.__reactInternalSnapshotBeforeUpdate = t;
                } catch (ut) {
                  kt(
                    n,
                    n.return,
                    ut
                  );
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (t = e.stateNode.containerInfo, n = t.nodeType, n === 9)
                  Pc(t);
                else if (n === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Pc(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(c(163));
          }
          if (t = e.sibling, t !== null) {
            t.return = e.return, ae = t;
            break;
          }
          ae = e.return;
        }
  }
  function kh(t, e, n) {
    var l = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        zn(t, n), l & 4 && Zi(5, n);
        break;
      case 1:
        if (zn(t, n), l & 4)
          if (t = n.stateNode, e === null)
            try {
              t.componentDidMount();
            } catch (m) {
              kt(n, n.return, m);
            }
          else {
            var u = vl(
              n.type,
              e.memoizedProps
            );
            e = e.memoizedState;
            try {
              t.componentDidUpdate(
                u,
                e,
                t.__reactInternalSnapshotBeforeUpdate
              );
            } catch (m) {
              kt(
                n,
                n.return,
                m
              );
            }
          }
        l & 64 && Oh(n), l & 512 && Ki(n, n.return);
        break;
      case 3:
        if (zn(t, n), l & 64 && (t = n.updateQueue, t !== null)) {
          if (e = null, n.child !== null)
            switch (n.child.tag) {
              case 27:
              case 5:
                e = n.child.stateNode;
                break;
              case 1:
                e = n.child.stateNode;
            }
          try {
            vf(t, e);
          } catch (m) {
            kt(n, n.return, m);
          }
        }
        break;
      case 27:
        e === null && l & 4 && wh(n);
      case 26:
      case 5:
        zn(t, n), e === null && l & 4 && Dh(n), l & 512 && Ki(n, n.return);
        break;
      case 12:
        zn(t, n);
        break;
      case 31:
        zn(t, n), l & 4 && Bh(t, n);
        break;
      case 13:
        zn(t, n), l & 4 && Hh(t, n), l & 64 && (t = n.memoizedState, t !== null && (t = t.dehydrated, t !== null && (n = rg.bind(
          null,
          n
        ), _g(t, n))));
        break;
      case 22:
        if (l = n.memoizedState !== null || An, !l) {
          e = e !== null && e.memoizedState !== null || te, u = An;
          var o = te;
          An = l, (te = e) && !o ? Cn(
            t,
            n,
            (n.subtreeFlags & 8772) !== 0
          ) : zn(t, n), An = u, te = o;
        }
        break;
      case 30:
        break;
      default:
        zn(t, n);
    }
  }
  function Uh(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, Uh(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && ir(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var Zt = null, be = !1;
  function Tn(t, e, n) {
    for (n = n.child; n !== null; )
      jh(t, e, n), n = n.sibling;
  }
  function jh(t, e, n) {
    if (ne && typeof ne.onCommitFiberUnmount == "function")
      try {
        ne.onCommitFiberUnmount(pe, n);
      } catch {
      }
    switch (n.tag) {
      case 26:
        te || nn(n, e), Tn(
          t,
          e,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        te || nn(n, e);
        var l = Zt, u = be;
        Fn(n.type) && (Zt = n.stateNode, be = !1), Tn(
          t,
          e,
          n
        ), na(n.stateNode), Zt = l, be = u;
        break;
      case 5:
        te || nn(n, e);
      case 6:
        if (l = Zt, u = be, Zt = null, Tn(
          t,
          e,
          n
        ), Zt = l, be = u, Zt !== null)
          if (be)
            try {
              (Zt.nodeType === 9 ? Zt.body : Zt.nodeName === "HTML" ? Zt.ownerDocument.body : Zt).removeChild(n.stateNode);
            } catch (o) {
              kt(
                n,
                e,
                o
              );
            }
          else
            try {
              Zt.removeChild(n.stateNode);
            } catch (o) {
              kt(
                n,
                e,
                o
              );
            }
        break;
      case 18:
        Zt !== null && (be ? (t = Zt, Om(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          n.stateNode
        ), oi(t)) : Om(Zt, n.stateNode));
        break;
      case 4:
        l = Zt, u = be, Zt = n.stateNode.containerInfo, be = !0, Tn(
          t,
          e,
          n
        ), Zt = l, be = u;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Vn(2, n, e), te || Vn(4, n, e), Tn(
          t,
          e,
          n
        );
        break;
      case 1:
        te || (nn(n, e), l = n.stateNode, typeof l.componentWillUnmount == "function" && Mh(
          n,
          e,
          l
        )), Tn(
          t,
          e,
          n
        );
        break;
      case 21:
        Tn(
          t,
          e,
          n
        );
        break;
      case 22:
        te = (l = te) || n.memoizedState !== null, Tn(
          t,
          e,
          n
        ), te = l;
        break;
      default:
        Tn(
          t,
          e,
          n
        );
    }
  }
  function Bh(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        oi(t);
      } catch (n) {
        kt(e, e.return, n);
      }
    }
  }
  function Hh(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        oi(t);
      } catch (n) {
        kt(e, e.return, n);
      }
  }
  function Py(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new Rh()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new Rh()), e;
      default:
        throw Error(c(435, t.tag));
    }
  }
  function mu(t, e) {
    var n = Py(t);
    e.forEach(function(l) {
      if (!n.has(l)) {
        n.add(l);
        var u = cg.bind(null, t, l);
        l.then(u, u);
      }
    });
  }
  function xe(t, e) {
    var n = e.deletions;
    if (n !== null)
      for (var l = 0; l < n.length; l++) {
        var u = n[l], o = t, m = e, y = m;
        t: for (; y !== null; ) {
          switch (y.tag) {
            case 27:
              if (Fn(y.type)) {
                Zt = y.stateNode, be = !1;
                break t;
              }
              break;
            case 5:
              Zt = y.stateNode, be = !1;
              break t;
            case 3:
            case 4:
              Zt = y.stateNode.containerInfo, be = !0;
              break t;
          }
          y = y.return;
        }
        if (Zt === null) throw Error(c(160));
        jh(o, m, u), Zt = null, be = !1, o = u.alternate, o !== null && (o.return = null), u.return = null;
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; )
        Lh(e, t), e = e.sibling;
  }
  var $e = null;
  function Lh(t, e) {
    var n = t.alternate, l = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        xe(e, t), Ee(t), l & 4 && (Vn(3, t, t.return), Zi(3, t), Vn(5, t, t.return));
        break;
      case 1:
        xe(e, t), Ee(t), l & 512 && (te || n === null || nn(n, n.return)), l & 64 && An && (t = t.updateQueue, t !== null && (l = t.callbacks, l !== null && (n = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = n === null ? l : n.concat(l))));
        break;
      case 26:
        var u = $e;
        if (xe(e, t), Ee(t), l & 512 && (te || n === null || nn(n, n.return)), l & 4) {
          var o = n !== null ? n.memoizedState : null;
          if (l = t.memoizedState, n === null)
            if (l === null)
              if (t.stateNode === null) {
                t: {
                  l = t.type, n = t.memoizedProps, u = u.ownerDocument || u;
                  e: switch (l) {
                    case "title":
                      o = u.getElementsByTagName("title")[0], (!o || o[bi] || o[re] || o.namespaceURI === "http://www.w3.org/2000/svg" || o.hasAttribute("itemprop")) && (o = u.createElement(l), u.head.insertBefore(
                        o,
                        u.querySelector("head > title")
                      )), fe(o, l, n), o[re] = t, ie(o), l = o;
                      break t;
                    case "link":
                      var m = Lm(
                        "link",
                        "href",
                        u
                      ).get(l + (n.href || ""));
                      if (m) {
                        for (var y = 0; y < m.length; y++)
                          if (o = m[y], o.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && o.getAttribute("rel") === (n.rel == null ? null : n.rel) && o.getAttribute("title") === (n.title == null ? null : n.title) && o.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                            m.splice(y, 1);
                            break e;
                          }
                      }
                      o = u.createElement(l), fe(o, l, n), u.head.appendChild(o);
                      break;
                    case "meta":
                      if (m = Lm(
                        "meta",
                        "content",
                        u
                      ).get(l + (n.content || ""))) {
                        for (y = 0; y < m.length; y++)
                          if (o = m[y], o.getAttribute("content") === (n.content == null ? null : "" + n.content) && o.getAttribute("name") === (n.name == null ? null : n.name) && o.getAttribute("property") === (n.property == null ? null : n.property) && o.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && o.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                            m.splice(y, 1);
                            break e;
                          }
                      }
                      o = u.createElement(l), fe(o, l, n), u.head.appendChild(o);
                      break;
                    default:
                      throw Error(c(468, l));
                  }
                  o[re] = t, ie(o), l = o;
                }
                t.stateNode = l;
              } else
                qm(
                  u,
                  t.type,
                  t.stateNode
                );
            else
              t.stateNode = Hm(
                u,
                l,
                t.memoizedProps
              );
          else
            o !== l ? (o === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : o.count--, l === null ? qm(
              u,
              t.type,
              t.stateNode
            ) : Hm(
              u,
              l,
              t.memoizedProps
            )) : l === null && t.stateNode !== null && zc(
              t,
              t.memoizedProps,
              n.memoizedProps
            );
        }
        break;
      case 27:
        xe(e, t), Ee(t), l & 512 && (te || n === null || nn(n, n.return)), n !== null && l & 4 && zc(
          t,
          t.memoizedProps,
          n.memoizedProps
        );
        break;
      case 5:
        if (xe(e, t), Ee(t), l & 512 && (te || n === null || nn(n, n.return)), t.flags & 32) {
          u = t.stateNode;
          try {
            wl(u, "");
          } catch ($) {
            kt(t, t.return, $);
          }
        }
        l & 4 && t.stateNode != null && (u = t.memoizedProps, zc(
          t,
          u,
          n !== null ? n.memoizedProps : u
        )), l & 1024 && (Oc = !0);
        break;
      case 6:
        if (xe(e, t), Ee(t), l & 4) {
          if (t.stateNode === null)
            throw Error(c(162));
          l = t.memoizedProps, n = t.stateNode;
          try {
            n.nodeValue = l;
          } catch ($) {
            kt(t, t.return, $);
          }
        }
        break;
      case 3:
        if (Mu = null, u = $e, $e = _u(e.containerInfo), xe(e, t), $e = u, Ee(t), l & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
            oi(e.containerInfo);
          } catch ($) {
            kt(t, t.return, $);
          }
        Oc && (Oc = !1, qh(t));
        break;
      case 4:
        l = $e, $e = _u(
          t.stateNode.containerInfo
        ), xe(e, t), Ee(t), $e = l;
        break;
      case 12:
        xe(e, t), Ee(t);
        break;
      case 31:
        xe(e, t), Ee(t), l & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, mu(t, l)));
        break;
      case 13:
        xe(e, t), Ee(t), t.child.flags & 8192 && t.memoizedState !== null != (n !== null && n.memoizedState !== null) && (pu = de()), l & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, mu(t, l)));
        break;
      case 22:
        u = t.memoizedState !== null;
        var T = n !== null && n.memoizedState !== null, M = An, k = te;
        if (An = M || u, te = k || T, xe(e, t), te = k, An = M, Ee(t), l & 8192)
          t: for (e = t.stateNode, e._visibility = u ? e._visibility & -2 : e._visibility | 1, u && (n === null || T || An || te || Sl(t)), n = null, e = t; ; ) {
            if (e.tag === 5 || e.tag === 26) {
              if (n === null) {
                T = n = e;
                try {
                  if (o = T.stateNode, u)
                    m = o.style, typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none";
                  else {
                    y = T.stateNode;
                    var H = T.memoizedProps.style, D = H != null && H.hasOwnProperty("display") ? H.display : null;
                    y.style.display = D == null || typeof D == "boolean" ? "" : ("" + D).trim();
                  }
                } catch ($) {
                  kt(T, T.return, $);
                }
              }
            } else if (e.tag === 6) {
              if (n === null) {
                T = e;
                try {
                  T.stateNode.nodeValue = u ? "" : T.memoizedProps;
                } catch ($) {
                  kt(T, T.return, $);
                }
              }
            } else if (e.tag === 18) {
              if (n === null) {
                T = e;
                try {
                  var w = T.stateNode;
                  u ? Mm(w, !0) : Mm(T.stateNode, !1);
                } catch ($) {
                  kt(T, T.return, $);
                }
              }
            } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              n === e && (n = null), e = e.return;
            }
            n === e && (n = null), e.sibling.return = e.return, e = e.sibling;
          }
        l & 4 && (l = t.updateQueue, l !== null && (n = l.retryQueue, n !== null && (l.retryQueue = null, mu(t, n))));
        break;
      case 19:
        xe(e, t), Ee(t), l & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, mu(t, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        xe(e, t), Ee(t);
    }
  }
  function Ee(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var n, l = t.return; l !== null; ) {
          if (Nh(l)) {
            n = l;
            break;
          }
          l = l.return;
        }
        if (n == null) throw Error(c(160));
        switch (n.tag) {
          case 27:
            var u = n.stateNode, o = Cc(t);
            hu(t, o, u);
            break;
          case 5:
            var m = n.stateNode;
            n.flags & 32 && (wl(m, ""), n.flags &= -33);
            var y = Cc(t);
            hu(t, y, m);
            break;
          case 3:
          case 4:
            var T = n.stateNode.containerInfo, M = Cc(t);
            _c(
              t,
              M,
              T
            );
            break;
          default:
            throw Error(c(161));
        }
      } catch (k) {
        kt(t, t.return, k);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function qh(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        qh(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
      }
  }
  function zn(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; )
        kh(t, e.alternate, e), e = e.sibling;
  }
  function Sl(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Vn(4, e, e.return), Sl(e);
          break;
        case 1:
          nn(e, e.return);
          var n = e.stateNode;
          typeof n.componentWillUnmount == "function" && Mh(
            e,
            e.return,
            n
          ), Sl(e);
          break;
        case 27:
          na(e.stateNode);
        case 26:
        case 5:
          nn(e, e.return), Sl(e);
          break;
        case 22:
          e.memoizedState === null && Sl(e);
          break;
        case 30:
          Sl(e);
          break;
        default:
          Sl(e);
      }
      t = t.sibling;
    }
  }
  function Cn(t, e, n) {
    for (n = n && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var l = e.alternate, u = t, o = e, m = o.flags;
      switch (o.tag) {
        case 0:
        case 11:
        case 15:
          Cn(
            u,
            o,
            n
          ), Zi(4, o);
          break;
        case 1:
          if (Cn(
            u,
            o,
            n
          ), l = o, u = l.stateNode, typeof u.componentDidMount == "function")
            try {
              u.componentDidMount();
            } catch (M) {
              kt(l, l.return, M);
            }
          if (l = o, u = l.updateQueue, u !== null) {
            var y = l.stateNode;
            try {
              var T = u.shared.hiddenCallbacks;
              if (T !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < T.length; u++)
                  gf(T[u], y);
            } catch (M) {
              kt(l, l.return, M);
            }
          }
          n && m & 64 && Oh(o), Ki(o, o.return);
          break;
        case 27:
          wh(o);
        case 26:
        case 5:
          Cn(
            u,
            o,
            n
          ), n && l === null && m & 4 && Dh(o), Ki(o, o.return);
          break;
        case 12:
          Cn(
            u,
            o,
            n
          );
          break;
        case 31:
          Cn(
            u,
            o,
            n
          ), n && m & 4 && Bh(u, o);
          break;
        case 13:
          Cn(
            u,
            o,
            n
          ), n && m & 4 && Hh(u, o);
          break;
        case 22:
          o.memoizedState === null && Cn(
            u,
            o,
            n
          ), Ki(o, o.return);
          break;
        case 30:
          break;
        default:
          Cn(
            u,
            o,
            n
          );
      }
      e = e.sibling;
    }
  }
  function Mc(t, e) {
    var n = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== n && (t != null && t.refCount++, n != null && Ri(n));
  }
  function Dc(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Ri(t));
  }
  function Pe(t, e, n, l) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Yh(
          t,
          e,
          n,
          l
        ), e = e.sibling;
  }
  function Yh(t, e, n, l) {
    var u = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Pe(
          t,
          e,
          n,
          l
        ), u & 2048 && Zi(9, e);
        break;
      case 1:
        Pe(
          t,
          e,
          n,
          l
        );
        break;
      case 3:
        Pe(
          t,
          e,
          n,
          l
        ), u & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Ri(t)));
        break;
      case 12:
        if (u & 2048) {
          Pe(
            t,
            e,
            n,
            l
          ), t = e.stateNode;
          try {
            var o = e.memoizedProps, m = o.id, y = o.onPostCommit;
            typeof y == "function" && y(
              m,
              e.alternate === null ? "mount" : "update",
              t.passiveEffectDuration,
              -0
            );
          } catch (T) {
            kt(e, e.return, T);
          }
        } else
          Pe(
            t,
            e,
            n,
            l
          );
        break;
      case 31:
        Pe(
          t,
          e,
          n,
          l
        );
        break;
      case 13:
        Pe(
          t,
          e,
          n,
          l
        );
        break;
      case 23:
        break;
      case 22:
        o = e.stateNode, m = e.alternate, e.memoizedState !== null ? o._visibility & 2 ? Pe(
          t,
          e,
          n,
          l
        ) : Ji(t, e) : o._visibility & 2 ? Pe(
          t,
          e,
          n,
          l
        ) : (o._visibility |= 2, $l(
          t,
          e,
          n,
          l,
          (e.subtreeFlags & 10256) !== 0 || !1
        )), u & 2048 && Mc(m, e);
        break;
      case 24:
        Pe(
          t,
          e,
          n,
          l
        ), u & 2048 && Dc(e.alternate, e);
        break;
      default:
        Pe(
          t,
          e,
          n,
          l
        );
    }
  }
  function $l(t, e, n, l, u) {
    for (u = u && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null; ) {
      var o = t, m = e, y = n, T = l, M = m.flags;
      switch (m.tag) {
        case 0:
        case 11:
        case 15:
          $l(
            o,
            m,
            y,
            T,
            u
          ), Zi(8, m);
          break;
        case 23:
          break;
        case 22:
          var k = m.stateNode;
          m.memoizedState !== null ? k._visibility & 2 ? $l(
            o,
            m,
            y,
            T,
            u
          ) : Ji(
            o,
            m
          ) : (k._visibility |= 2, $l(
            o,
            m,
            y,
            T,
            u
          )), u && M & 2048 && Mc(
            m.alternate,
            m
          );
          break;
        case 24:
          $l(
            o,
            m,
            y,
            T,
            u
          ), u && M & 2048 && Dc(m.alternate, m);
          break;
        default:
          $l(
            o,
            m,
            y,
            T,
            u
          );
      }
      e = e.sibling;
    }
  }
  function Ji(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var n = t, l = e, u = l.flags;
        switch (l.tag) {
          case 22:
            Ji(n, l), u & 2048 && Mc(
              l.alternate,
              l
            );
            break;
          case 24:
            Ji(n, l), u & 2048 && Dc(l.alternate, l);
            break;
          default:
            Ji(n, l);
        }
        e = e.sibling;
      }
  }
  var Fi = 8192;
  function Pl(t, e, n) {
    if (t.subtreeFlags & Fi)
      for (t = t.child; t !== null; )
        Vh(
          t,
          e,
          n
        ), t = t.sibling;
  }
  function Vh(t, e, n) {
    switch (t.tag) {
      case 26:
        Pl(
          t,
          e,
          n
        ), t.flags & Fi && t.memoizedState !== null && Lg(
          n,
          $e,
          t.memoizedState,
          t.memoizedProps
        );
        break;
      case 5:
        Pl(
          t,
          e,
          n
        );
        break;
      case 3:
      case 4:
        var l = $e;
        $e = _u(t.stateNode.containerInfo), Pl(
          t,
          e,
          n
        ), $e = l;
        break;
      case 22:
        t.memoizedState === null && (l = t.alternate, l !== null && l.memoizedState !== null ? (l = Fi, Fi = 16777216, Pl(
          t,
          e,
          n
        ), Fi = l) : Pl(
          t,
          e,
          n
        ));
        break;
      default:
        Pl(
          t,
          e,
          n
        );
    }
  }
  function Xh(t) {
    var e = t.alternate;
    if (e !== null && (t = e.child, t !== null)) {
      e.child = null;
      do
        e = t.sibling, t.sibling = null, t = e;
      while (t !== null);
    }
  }
  function Ii(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var l = e[n];
          ae = l, Qh(
            l,
            t
          );
        }
      Xh(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Gh(t), t = t.sibling;
  }
  function Gh(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Ii(t), t.flags & 2048 && Vn(9, t, t.return);
        break;
      case 3:
        Ii(t);
        break;
      case 12:
        Ii(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, du(t)) : Ii(t);
        break;
      default:
        Ii(t);
    }
  }
  function du(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var l = e[n];
          ae = l, Qh(
            l,
            t
          );
        }
      Xh(t);
    }
    for (t = t.child; t !== null; ) {
      switch (e = t, e.tag) {
        case 0:
        case 11:
        case 15:
          Vn(8, e, e.return), du(e);
          break;
        case 22:
          n = e.stateNode, n._visibility & 2 && (n._visibility &= -3, du(e));
          break;
        default:
          du(e);
      }
      t = t.sibling;
    }
  }
  function Qh(t, e) {
    for (; ae !== null; ) {
      var n = ae;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Vn(8, n, e);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var l = n.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          Ri(n.memoizedState.cache);
      }
      if (l = n.child, l !== null) l.return = n, ae = l;
      else
        t: for (n = t; ae !== null; ) {
          l = ae;
          var u = l.sibling, o = l.return;
          if (Uh(l), l === n) {
            ae = null;
            break t;
          }
          if (u !== null) {
            u.return = o, ae = u;
            break t;
          }
          ae = o;
        }
    }
  }
  var tg = {
    getCacheForType: function(t) {
      var e = oe(Wt), n = e.data.get(t);
      return n === void 0 && (n = t(), e.data.set(t, n)), n;
    },
    cacheSignal: function() {
      return oe(Wt).controller.signal;
    }
  }, eg = typeof WeakMap == "function" ? WeakMap : Map, Dt = 0, qt = null, bt = null, At = 0, Rt = 0, Re = null, Xn = !1, ti = !1, Nc = !1, _n = 0, Jt = 0, Gn = 0, bl = 0, wc = 0, ke = 0, ei = 0, Wi = null, Ae = null, Rc = !1, pu = 0, Zh = 0, yu = 1 / 0, gu = null, Qn = null, le = 0, Zn = null, ni = null, On = 0, kc = 0, Uc = null, Kh = null, $i = 0, jc = null;
  function Ue() {
    return (Dt & 2) !== 0 && At !== 0 ? At & -At : N.T !== null ? Vc() : cs();
  }
  function Jh() {
    if (ke === 0)
      if ((At & 536870912) === 0 || Ct) {
        var t = za;
        za <<= 1, (za & 3932160) === 0 && (za = 262144), ke = t;
      } else ke = 536870912;
    return t = Ne.current, t !== null && (t.flags |= 32), ke;
  }
  function Te(t, e, n) {
    (t === qt && (Rt === 2 || Rt === 9) || t.cancelPendingCommit !== null) && (li(t, 0), Kn(
      t,
      At,
      ke,
      !1
    )), Si(t, n), ((Dt & 2) === 0 || t !== qt) && (t === qt && ((Dt & 2) === 0 && (bl |= n), Jt === 4 && Kn(
      t,
      At,
      ke,
      !1
    )), ln(t));
  }
  function Fh(t, e, n) {
    if ((Dt & 6) !== 0) throw Error(c(327));
    var l = !n && (e & 127) === 0 && (e & t.expiredLanes) === 0 || vi(t, e), u = l ? ig(t, e) : Hc(t, e, !0), o = l;
    do {
      if (u === 0) {
        ti && !l && Kn(t, e, 0, !1);
        break;
      } else {
        if (n = t.current.alternate, o && !ng(n)) {
          u = Hc(t, e, !1), o = !1;
          continue;
        }
        if (u === 2) {
          if (o = e, t.errorRecoveryDisabledLanes & o)
            var m = 0;
          else
            m = t.pendingLanes & -536870913, m = m !== 0 ? m : m & 536870912 ? 536870912 : 0;
          if (m !== 0) {
            e = m;
            t: {
              var y = t;
              u = Wi;
              var T = y.current.memoizedState.isDehydrated;
              if (T && (li(y, m).flags |= 256), m = Hc(
                y,
                m,
                !1
              ), m !== 2) {
                if (Nc && !T) {
                  y.errorRecoveryDisabledLanes |= o, bl |= o, u = 4;
                  break t;
                }
                o = Ae, Ae = u, o !== null && (Ae === null ? Ae = o : Ae.push.apply(
                  Ae,
                  o
                ));
              }
              u = m;
            }
            if (o = !1, u !== 2) continue;
          }
        }
        if (u === 1) {
          li(t, 0), Kn(t, e, 0, !0);
          break;
        }
        t: {
          switch (l = t, o = u, o) {
            case 0:
            case 1:
              throw Error(c(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              Kn(
                l,
                e,
                ke,
                !Xn
              );
              break t;
            case 2:
              Ae = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(c(329));
          }
          if ((e & 62914560) === e && (u = pu + 300 - de(), 10 < u)) {
            if (Kn(
              l,
              e,
              ke,
              !Xn
            ), _a(l, 0, !0) !== 0) break t;
            On = e, l.timeoutHandle = Cm(
              Ih.bind(
                null,
                l,
                n,
                Ae,
                gu,
                Rc,
                e,
                ke,
                bl,
                ei,
                Xn,
                o,
                "Throttled",
                -0,
                0
              ),
              u
            );
            break t;
          }
          Ih(
            l,
            n,
            Ae,
            gu,
            Rc,
            e,
            ke,
            bl,
            ei,
            Xn,
            o,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    ln(t);
  }
  function Ih(t, e, n, l, u, o, m, y, T, M, k, H, D, w) {
    if (t.timeoutHandle = -1, H = e.subtreeFlags, H & 8192 || (H & 16785408) === 16785408) {
      H = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: mn
      }, Vh(
        e,
        o,
        H
      );
      var $ = (o & 62914560) === o ? pu - de() : (o & 4194048) === o ? Zh - de() : 0;
      if ($ = qg(
        H,
        $
      ), $ !== null) {
        On = o, t.cancelPendingCommit = $(
          im.bind(
            null,
            t,
            e,
            o,
            n,
            l,
            u,
            m,
            y,
            T,
            k,
            H,
            null,
            D,
            w
          )
        ), Kn(t, o, m, !M);
        return;
      }
    }
    im(
      t,
      e,
      o,
      n,
      l,
      u,
      m,
      y,
      T
    );
  }
  function ng(t) {
    for (var e = t; ; ) {
      var n = e.tag;
      if ((n === 0 || n === 11 || n === 15) && e.flags & 16384 && (n = e.updateQueue, n !== null && (n = n.stores, n !== null)))
        for (var l = 0; l < n.length; l++) {
          var u = n[l], o = u.getSnapshot;
          u = u.value;
          try {
            if (!Me(o(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (n = e.child, e.subtreeFlags & 16384 && n !== null)
        n.return = e, e = n;
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    }
    return !0;
  }
  function Kn(t, e, n, l) {
    e &= ~wc, e &= ~bl, t.suspendedLanes |= e, t.pingedLanes &= ~e, l && (t.warmLanes |= e), l = t.expirationTimes;
    for (var u = e; 0 < u; ) {
      var o = 31 - Lt(u), m = 1 << o;
      l[o] = -1, u &= ~m;
    }
    n !== 0 && as(t, n, e);
  }
  function vu() {
    return (Dt & 6) === 0 ? (Pi(0), !1) : !0;
  }
  function Bc() {
    if (bt !== null) {
      if (Rt === 0)
        var t = bt.return;
      else
        t = bt, gn = fl = null, Pr(t), Kl = null, Ui = 0, t = bt;
      for (; t !== null; )
        _h(t.alternate, t), t = t.return;
      bt = null;
    }
  }
  function li(t, e) {
    var n = t.timeoutHandle;
    n !== -1 && (t.timeoutHandle = -1, Eg(n)), n = t.cancelPendingCommit, n !== null && (t.cancelPendingCommit = null, n()), On = 0, Bc(), qt = t, bt = n = pn(t.current, null), At = e, Rt = 0, Re = null, Xn = !1, ti = vi(t, e), Nc = !1, ei = ke = wc = bl = Gn = Jt = 0, Ae = Wi = null, Rc = !1, (e & 8) !== 0 && (e |= e & 32);
    var l = t.entangledLanes;
    if (l !== 0)
      for (t = t.entanglements, l &= e; 0 < l; ) {
        var u = 31 - Lt(l), o = 1 << u;
        e |= t[u], l &= ~o;
      }
    return _n = e, La(), n;
  }
  function Wh(t, e) {
    ht = null, N.H = Xi, e === Zl || e === Ka ? (e = mf(), Rt = 3) : e === Yr ? (e = mf(), Rt = 4) : Rt = e === pc ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, Re = e, bt === null && (Jt = 1, ru(
      t,
      Ve(e, t.current)
    ));
  }
  function $h() {
    var t = Ne.current;
    return t === null ? !0 : (At & 4194048) === At ? Ze === null : (At & 62914560) === At || (At & 536870912) !== 0 ? t === Ze : !1;
  }
  function Ph() {
    var t = N.H;
    return N.H = Xi, t === null ? Xi : t;
  }
  function tm() {
    var t = N.A;
    return N.A = tg, t;
  }
  function Su() {
    Jt = 4, Xn || (At & 4194048) !== At && Ne.current !== null || (ti = !0), (Gn & 134217727) === 0 && (bl & 134217727) === 0 || qt === null || Kn(
      qt,
      At,
      ke,
      !1
    );
  }
  function Hc(t, e, n) {
    var l = Dt;
    Dt |= 2;
    var u = Ph(), o = tm();
    (qt !== t || At !== e) && (gu = null, li(t, e)), e = !1;
    var m = Jt;
    t: do
      try {
        if (Rt !== 0 && bt !== null) {
          var y = bt, T = Re;
          switch (Rt) {
            case 8:
              Bc(), m = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Ne.current === null && (e = !0);
              var M = Rt;
              if (Rt = 0, Re = null, ii(t, y, T, M), n && ti) {
                m = 0;
                break t;
              }
              break;
            default:
              M = Rt, Rt = 0, Re = null, ii(t, y, T, M);
          }
        }
        lg(), m = Jt;
        break;
      } catch (k) {
        Wh(t, k);
      }
    while (!0);
    return e && t.shellSuspendCounter++, gn = fl = null, Dt = l, N.H = u, N.A = o, bt === null && (qt = null, At = 0, La()), m;
  }
  function lg() {
    for (; bt !== null; ) em(bt);
  }
  function ig(t, e) {
    var n = Dt;
    Dt |= 2;
    var l = Ph(), u = tm();
    qt !== t || At !== e ? (gu = null, yu = de() + 500, li(t, e)) : ti = vi(
      t,
      e
    );
    t: do
      try {
        if (Rt !== 0 && bt !== null) {
          e = bt;
          var o = Re;
          e: switch (Rt) {
            case 1:
              Rt = 0, Re = null, ii(t, e, o, 1);
              break;
            case 2:
            case 9:
              if (ff(o)) {
                Rt = 0, Re = null, nm(e);
                break;
              }
              e = function() {
                Rt !== 2 && Rt !== 9 || qt !== t || (Rt = 7), ln(t);
              }, o.then(e, e);
              break t;
            case 3:
              Rt = 7;
              break t;
            case 4:
              Rt = 5;
              break t;
            case 7:
              ff(o) ? (Rt = 0, Re = null, nm(e)) : (Rt = 0, Re = null, ii(t, e, o, 7));
              break;
            case 5:
              var m = null;
              switch (bt.tag) {
                case 26:
                  m = bt.memoizedState;
                case 5:
                case 27:
                  var y = bt;
                  if (m ? Ym(m) : y.stateNode.complete) {
                    Rt = 0, Re = null;
                    var T = y.sibling;
                    if (T !== null) bt = T;
                    else {
                      var M = y.return;
                      M !== null ? (bt = M, bu(M)) : bt = null;
                    }
                    break e;
                  }
              }
              Rt = 0, Re = null, ii(t, e, o, 5);
              break;
            case 6:
              Rt = 0, Re = null, ii(t, e, o, 6);
              break;
            case 8:
              Bc(), Jt = 6;
              break t;
            default:
              throw Error(c(462));
          }
        }
        ag();
        break;
      } catch (k) {
        Wh(t, k);
      }
    while (!0);
    return gn = fl = null, N.H = l, N.A = u, Dt = n, bt !== null ? 0 : (qt = null, At = 0, La(), Jt);
  }
  function ag() {
    for (; bt !== null && !Wu(); )
      em(bt);
  }
  function em(t) {
    var e = zh(t.alternate, t, _n);
    t.memoizedProps = t.pendingProps, e === null ? bu(t) : bt = e;
  }
  function nm(t) {
    var e = t, n = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = Sh(
          n,
          e,
          e.pendingProps,
          e.type,
          void 0,
          At
        );
        break;
      case 11:
        e = Sh(
          n,
          e,
          e.pendingProps,
          e.type.render,
          e.ref,
          At
        );
        break;
      case 5:
        Pr(e);
      default:
        _h(n, e), e = bt = Ps(e, _n), e = zh(n, e, _n);
    }
    t.memoizedProps = t.pendingProps, e === null ? bu(t) : bt = e;
  }
  function ii(t, e, n, l) {
    gn = fl = null, Pr(e), Kl = null, Ui = 0;
    var u = e.return;
    try {
      if (Ky(
        t,
        u,
        e,
        n,
        At
      )) {
        Jt = 1, ru(
          t,
          Ve(n, t.current)
        ), bt = null;
        return;
      }
    } catch (o) {
      if (u !== null) throw bt = u, o;
      Jt = 1, ru(
        t,
        Ve(n, t.current)
      ), bt = null;
      return;
    }
    e.flags & 32768 ? (Ct || l === 1 ? t = !0 : ti || (At & 536870912) !== 0 ? t = !1 : (Xn = t = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = Ne.current, l !== null && l.tag === 13 && (l.flags |= 16384))), lm(e, t)) : bu(e);
  }
  function bu(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        lm(
          e,
          Xn
        );
        return;
      }
      t = e.return;
      var n = Iy(
        e.alternate,
        e,
        _n
      );
      if (n !== null) {
        bt = n;
        return;
      }
      if (e = e.sibling, e !== null) {
        bt = e;
        return;
      }
      bt = e = t;
    } while (e !== null);
    Jt === 0 && (Jt = 5);
  }
  function lm(t, e) {
    do {
      var n = Wy(t.alternate, t);
      if (n !== null) {
        n.flags &= 32767, bt = n;
        return;
      }
      if (n = t.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !e && (t = t.sibling, t !== null)) {
        bt = t;
        return;
      }
      bt = t = n;
    } while (t !== null);
    Jt = 6, bt = null;
  }
  function im(t, e, n, l, u, o, m, y, T) {
    t.cancelPendingCommit = null;
    do
      xu();
    while (le !== 0);
    if ((Dt & 6) !== 0) throw Error(c(327));
    if (e !== null) {
      if (e === t.current) throw Error(c(177));
      if (o = e.lanes | e.childLanes, o |= Cr, Hp(
        t,
        n,
        o,
        m,
        y,
        T
      ), t === qt && (bt = qt = null, At = 0), ni = e, Zn = t, On = n, kc = o, Uc = u, Kh = l, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, og(ct, function() {
        return om(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), l = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || l) {
        l = N.T, N.T = null, u = V.p, V.p = 2, m = Dt, Dt |= 4;
        try {
          $y(t, e, n);
        } finally {
          Dt = m, V.p = u, N.T = l;
        }
      }
      le = 1, am(), um(), rm();
    }
  }
  function am() {
    if (le === 1) {
      le = 0;
      var t = Zn, e = ni, n = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || n) {
        n = N.T, N.T = null;
        var l = V.p;
        V.p = 2;
        var u = Dt;
        Dt |= 4;
        try {
          Lh(e, t);
          var o = Ic, m = Gs(t.containerInfo), y = o.focusedElem, T = o.selectionRange;
          if (m !== y && y && y.ownerDocument && Xs(
            y.ownerDocument.documentElement,
            y
          )) {
            if (T !== null && xr(y)) {
              var M = T.start, k = T.end;
              if (k === void 0 && (k = M), "selectionStart" in y)
                y.selectionStart = M, y.selectionEnd = Math.min(
                  k,
                  y.value.length
                );
              else {
                var H = y.ownerDocument || document, D = H && H.defaultView || window;
                if (D.getSelection) {
                  var w = D.getSelection(), $ = y.textContent.length, ut = Math.min(T.start, $), Ht = T.end === void 0 ? ut : Math.min(T.end, $);
                  !w.extend && ut > Ht && (m = Ht, Ht = ut, ut = m);
                  var _ = Vs(
                    y,
                    ut
                  ), C = Vs(
                    y,
                    Ht
                  );
                  if (_ && C && (w.rangeCount !== 1 || w.anchorNode !== _.node || w.anchorOffset !== _.offset || w.focusNode !== C.node || w.focusOffset !== C.offset)) {
                    var O = H.createRange();
                    O.setStart(_.node, _.offset), w.removeAllRanges(), ut > Ht ? (w.addRange(O), w.extend(C.node, C.offset)) : (O.setEnd(C.node, C.offset), w.addRange(O));
                  }
                }
              }
            }
            for (H = [], w = y; w = w.parentNode; )
              w.nodeType === 1 && H.push({
                element: w,
                left: w.scrollLeft,
                top: w.scrollTop
              });
            for (typeof y.focus == "function" && y.focus(), y = 0; y < H.length; y++) {
              var B = H[y];
              B.element.scrollLeft = B.left, B.element.scrollTop = B.top;
            }
          }
          Ru = !!Fc, Ic = Fc = null;
        } finally {
          Dt = u, V.p = l, N.T = n;
        }
      }
      t.current = e, le = 2;
    }
  }
  function um() {
    if (le === 2) {
      le = 0;
      var t = Zn, e = ni, n = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || n) {
        n = N.T, N.T = null;
        var l = V.p;
        V.p = 2;
        var u = Dt;
        Dt |= 4;
        try {
          kh(t, e.alternate, e);
        } finally {
          Dt = u, V.p = l, N.T = n;
        }
      }
      le = 3;
    }
  }
  function rm() {
    if (le === 4 || le === 3) {
      le = 0, $u();
      var t = Zn, e = ni, n = On, l = Kh;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? le = 5 : (le = 0, ni = Zn = null, cm(t, t.pendingLanes));
      var u = t.pendingLanes;
      if (u === 0 && (Qn = null), nr(n), e = e.stateNode, ne && typeof ne.onCommitFiberRoot == "function")
        try {
          ne.onCommitFiberRoot(
            pe,
            e,
            void 0,
            (e.current.flags & 128) === 128
          );
        } catch {
        }
      if (l !== null) {
        e = N.T, u = V.p, V.p = 2, N.T = null;
        try {
          for (var o = t.onRecoverableError, m = 0; m < l.length; m++) {
            var y = l[m];
            o(y.value, {
              componentStack: y.stack
            });
          }
        } finally {
          N.T = e, V.p = u;
        }
      }
      (On & 3) !== 0 && xu(), ln(t), u = t.pendingLanes, (n & 261930) !== 0 && (u & 42) !== 0 ? t === jc ? $i++ : ($i = 0, jc = t) : $i = 0, Pi(0);
    }
  }
  function cm(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, Ri(e)));
  }
  function xu() {
    return am(), um(), rm(), om();
  }
  function om() {
    if (le !== 5) return !1;
    var t = Zn, e = kc;
    kc = 0;
    var n = nr(On), l = N.T, u = V.p;
    try {
      V.p = 32 > n ? 32 : n, N.T = null, n = Uc, Uc = null;
      var o = Zn, m = On;
      if (le = 0, ni = Zn = null, On = 0, (Dt & 6) !== 0) throw Error(c(331));
      var y = Dt;
      if (Dt |= 4, Gh(o.current), Yh(
        o,
        o.current,
        m,
        n
      ), Dt = y, Pi(0, !1), ne && typeof ne.onPostCommitFiberRoot == "function")
        try {
          ne.onPostCommitFiberRoot(pe, o);
        } catch {
        }
      return !0;
    } finally {
      V.p = u, N.T = l, cm(t, e);
    }
  }
  function sm(t, e, n) {
    e = Ve(n, e), e = dc(t.stateNode, e, 2), t = Ln(t, e, 2), t !== null && (Si(t, 2), ln(t));
  }
  function kt(t, e, n) {
    if (t.tag === 3)
      sm(t, t, n);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          sm(
            e,
            t,
            n
          );
          break;
        } else if (e.tag === 1) {
          var l = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (Qn === null || !Qn.has(l))) {
            t = Ve(n, t), n = fh(2), l = Ln(e, n, 2), l !== null && (hh(
              n,
              l,
              e,
              t
            ), Si(l, 2), ln(l));
            break;
          }
        }
        e = e.return;
      }
  }
  function Lc(t, e, n) {
    var l = t.pingCache;
    if (l === null) {
      l = t.pingCache = new eg();
      var u = /* @__PURE__ */ new Set();
      l.set(e, u);
    } else
      u = l.get(e), u === void 0 && (u = /* @__PURE__ */ new Set(), l.set(e, u));
    u.has(n) || (Nc = !0, u.add(n), t = ug.bind(null, t, e, n), e.then(t, t));
  }
  function ug(t, e, n) {
    var l = t.pingCache;
    l !== null && l.delete(e), t.pingedLanes |= t.suspendedLanes & n, t.warmLanes &= ~n, qt === t && (At & n) === n && (Jt === 4 || Jt === 3 && (At & 62914560) === At && 300 > de() - pu ? (Dt & 2) === 0 && li(t, 0) : wc |= n, ei === At && (ei = 0)), ln(t);
  }
  function fm(t, e) {
    e === 0 && (e = is()), t = cl(t, e), t !== null && (Si(t, e), ln(t));
  }
  function rg(t) {
    var e = t.memoizedState, n = 0;
    e !== null && (n = e.retryLane), fm(t, n);
  }
  function cg(t, e) {
    var n = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var l = t.stateNode, u = t.memoizedState;
        u !== null && (n = u.retryLane);
        break;
      case 19:
        l = t.stateNode;
        break;
      case 22:
        l = t.stateNode._retryCache;
        break;
      default:
        throw Error(c(314));
    }
    l !== null && l.delete(e), fm(t, n);
  }
  function og(t, e) {
    return zl(t, e);
  }
  var Eu = null, ai = null, qc = !1, Au = !1, Yc = !1, Jn = 0;
  function ln(t) {
    t !== ai && t.next === null && (ai === null ? Eu = ai = t : ai = ai.next = t), Au = !0, qc || (qc = !0, fg());
  }
  function Pi(t, e) {
    if (!Yc && Au) {
      Yc = !0;
      do
        for (var n = !1, l = Eu; l !== null; ) {
          if (t !== 0) {
            var u = l.pendingLanes;
            if (u === 0) var o = 0;
            else {
              var m = l.suspendedLanes, y = l.pingedLanes;
              o = (1 << 31 - Lt(42 | t) + 1) - 1, o &= u & ~(m & ~y), o = o & 201326741 ? o & 201326741 | 1 : o ? o | 2 : 0;
            }
            o !== 0 && (n = !0, pm(l, o));
          } else
            o = At, o = _a(
              l,
              l === qt ? o : 0,
              l.cancelPendingCommit !== null || l.timeoutHandle !== -1
            ), (o & 3) === 0 || vi(l, o) || (n = !0, pm(l, o));
          l = l.next;
        }
      while (n);
      Yc = !1;
    }
  }
  function sg() {
    hm();
  }
  function hm() {
    Au = qc = !1;
    var t = 0;
    Jn !== 0 && xg() && (t = Jn);
    for (var e = de(), n = null, l = Eu; l !== null; ) {
      var u = l.next, o = mm(l, e);
      o === 0 ? (l.next = null, n === null ? Eu = u : n.next = u, u === null && (ai = n)) : (n = l, (t !== 0 || (o & 3) !== 0) && (Au = !0)), l = u;
    }
    le !== 0 && le !== 5 || Pi(t), Jn !== 0 && (Jn = 0);
  }
  function mm(t, e) {
    for (var n = t.suspendedLanes, l = t.pingedLanes, u = t.expirationTimes, o = t.pendingLanes & -62914561; 0 < o; ) {
      var m = 31 - Lt(o), y = 1 << m, T = u[m];
      T === -1 ? ((y & n) === 0 || (y & l) !== 0) && (u[m] = Bp(y, e)) : T <= e && (t.expiredLanes |= y), o &= ~y;
    }
    if (e = qt, n = At, n = _a(
      t,
      t === e ? n : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), l = t.callbackNode, n === 0 || t === e && (Rt === 2 || Rt === 9) || t.cancelPendingCommit !== null)
      return l !== null && l !== null && gi(l), t.callbackNode = null, t.callbackPriority = 0;
    if ((n & 3) === 0 || vi(t, n)) {
      if (e = n & -n, e === t.callbackPriority) return e;
      switch (l !== null && gi(l), nr(n)) {
        case 2:
        case 8:
          n = K;
          break;
        case 32:
          n = ct;
          break;
        case 268435456:
          n = wt;
          break;
        default:
          n = ct;
      }
      return l = dm.bind(null, t), n = zl(n, l), t.callbackPriority = e, t.callbackNode = n, e;
    }
    return l !== null && l !== null && gi(l), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function dm(t, e) {
    if (le !== 0 && le !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var n = t.callbackNode;
    if (xu() && t.callbackNode !== n)
      return null;
    var l = At;
    return l = _a(
      t,
      t === qt ? l : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), l === 0 ? null : (Fh(t, l, e), mm(t, de()), t.callbackNode != null && t.callbackNode === n ? dm.bind(null, t) : null);
  }
  function pm(t, e) {
    if (xu()) return null;
    Fh(t, e, !0);
  }
  function fg() {
    Ag(function() {
      (Dt & 6) !== 0 ? zl(
        j,
        sg
      ) : hm();
    });
  }
  function Vc() {
    if (Jn === 0) {
      var t = Gl;
      t === 0 && (t = Ta, Ta <<= 1, (Ta & 261888) === 0 && (Ta = 256)), Jn = t;
    }
    return Jn;
  }
  function ym(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Na("" + t);
  }
  function gm(t, e) {
    var n = e.ownerDocument.createElement("input");
    return n.name = e.name, n.value = e.value, t.id && n.setAttribute("form", t.id), e.parentNode.insertBefore(n, e), t = new FormData(t), n.parentNode.removeChild(n), t;
  }
  function hg(t, e, n, l, u) {
    if (e === "submit" && n && n.stateNode === u) {
      var o = ym(
        (u[ve] || null).action
      ), m = l.submitter;
      m && (e = (e = m[ve] || null) ? ym(e.formAction) : m.getAttribute("formAction"), e !== null && (o = e, m = null));
      var y = new Ua(
        "action",
        "action",
        null,
        l,
        u
      );
      t.push({
        event: y,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (l.defaultPrevented) {
                if (Jn !== 0) {
                  var T = m ? gm(u, m) : new FormData(u);
                  cc(
                    n,
                    {
                      pending: !0,
                      data: T,
                      method: u.method,
                      action: o
                    },
                    null,
                    T
                  );
                }
              } else
                typeof o == "function" && (y.preventDefault(), T = m ? gm(u, m) : new FormData(u), cc(
                  n,
                  {
                    pending: !0,
                    data: T,
                    method: u.method,
                    action: o
                  },
                  o,
                  T
                ));
            },
            currentTarget: u
          }
        ]
      });
    }
  }
  for (var Xc = 0; Xc < zr.length; Xc++) {
    var Gc = zr[Xc], mg = Gc.toLowerCase(), dg = Gc[0].toUpperCase() + Gc.slice(1);
    We(
      mg,
      "on" + dg
    );
  }
  We(Ks, "onAnimationEnd"), We(Js, "onAnimationIteration"), We(Fs, "onAnimationStart"), We("dblclick", "onDoubleClick"), We("focusin", "onFocus"), We("focusout", "onBlur"), We(Dy, "onTransitionRun"), We(Ny, "onTransitionStart"), We(wy, "onTransitionCancel"), We(Is, "onTransitionEnd"), Dl("onMouseEnter", ["mouseout", "mouseover"]), Dl("onMouseLeave", ["mouseout", "mouseover"]), Dl("onPointerEnter", ["pointerout", "pointerover"]), Dl("onPointerLeave", ["pointerout", "pointerover"]), il(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), il(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), il("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), il(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), il(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), il(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var ta = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), pg = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ta)
  );
  function vm(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
      var l = t[n], u = l.event;
      l = l.listeners;
      t: {
        var o = void 0;
        if (e)
          for (var m = l.length - 1; 0 <= m; m--) {
            var y = l[m], T = y.instance, M = y.currentTarget;
            if (y = y.listener, T !== o && u.isPropagationStopped())
              break t;
            o = y, u.currentTarget = M;
            try {
              o(u);
            } catch (k) {
              Ha(k);
            }
            u.currentTarget = null, o = T;
          }
        else
          for (m = 0; m < l.length; m++) {
            if (y = l[m], T = y.instance, M = y.currentTarget, y = y.listener, T !== o && u.isPropagationStopped())
              break t;
            o = y, u.currentTarget = M;
            try {
              o(u);
            } catch (k) {
              Ha(k);
            }
            u.currentTarget = null, o = T;
          }
      }
    }
  }
  function xt(t, e) {
    var n = e[lr];
    n === void 0 && (n = e[lr] = /* @__PURE__ */ new Set());
    var l = t + "__bubble";
    n.has(l) || (Sm(e, t, 2, !1), n.add(l));
  }
  function Qc(t, e, n) {
    var l = 0;
    e && (l |= 4), Sm(
      n,
      t,
      l,
      e
    );
  }
  var Tu = "_reactListening" + Math.random().toString(36).slice(2);
  function Zc(t) {
    if (!t[Tu]) {
      t[Tu] = !0, fs.forEach(function(n) {
        n !== "selectionchange" && (pg.has(n) || Qc(n, !1, t), Qc(n, !0, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Tu] || (e[Tu] = !0, Qc("selectionchange", !1, e));
    }
  }
  function Sm(t, e, n, l) {
    switch (Jm(e)) {
      case 2:
        var u = Xg;
        break;
      case 8:
        u = Gg;
        break;
      default:
        u = ro;
    }
    n = u.bind(
      null,
      e,
      n,
      t
    ), u = void 0, !hr || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (u = !0), l ? u !== void 0 ? t.addEventListener(e, n, {
      capture: !0,
      passive: u
    }) : t.addEventListener(e, n, !0) : u !== void 0 ? t.addEventListener(e, n, {
      passive: u
    }) : t.addEventListener(e, n, !1);
  }
  function Kc(t, e, n, l, u) {
    var o = l;
    if ((e & 1) === 0 && (e & 2) === 0 && l !== null)
      t: for (; ; ) {
        if (l === null) return;
        var m = l.tag;
        if (m === 3 || m === 4) {
          var y = l.stateNode.containerInfo;
          if (y === u) break;
          if (m === 4)
            for (m = l.return; m !== null; ) {
              var T = m.tag;
              if ((T === 3 || T === 4) && m.stateNode.containerInfo === u)
                return;
              m = m.return;
            }
          for (; y !== null; ) {
            if (m = _l(y), m === null) return;
            if (T = m.tag, T === 5 || T === 6 || T === 26 || T === 27) {
              l = o = m;
              continue t;
            }
            y = y.parentNode;
          }
        }
        l = l.return;
      }
    As(function() {
      var M = o, k = sr(n), H = [];
      t: {
        var D = Ws.get(t);
        if (D !== void 0) {
          var w = Ua, $ = t;
          switch (t) {
            case "keypress":
              if (Ra(n) === 0) break t;
            case "keydown":
            case "keyup":
              w = cy;
              break;
            case "focusin":
              $ = "focus", w = yr;
              break;
            case "focusout":
              $ = "blur", w = yr;
              break;
            case "beforeblur":
            case "afterblur":
              w = yr;
              break;
            case "click":
              if (n.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              w = Cs;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              w = Ip;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              w = fy;
              break;
            case Ks:
            case Js:
            case Fs:
              w = Pp;
              break;
            case Is:
              w = my;
              break;
            case "scroll":
            case "scrollend":
              w = Jp;
              break;
            case "wheel":
              w = py;
              break;
            case "copy":
            case "cut":
            case "paste":
              w = ey;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              w = Os;
              break;
            case "toggle":
            case "beforetoggle":
              w = gy;
          }
          var ut = (e & 4) !== 0, Ht = !ut && (t === "scroll" || t === "scrollend"), _ = ut ? D !== null ? D + "Capture" : null : D;
          ut = [];
          for (var C = M, O; C !== null; ) {
            var B = C;
            if (O = B.stateNode, B = B.tag, B !== 5 && B !== 26 && B !== 27 || O === null || _ === null || (B = Ei(C, _), B != null && ut.push(
              ea(C, B, O)
            )), Ht) break;
            C = C.return;
          }
          0 < ut.length && (D = new w(
            D,
            $,
            null,
            n,
            k
          ), H.push({ event: D, listeners: ut }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (D = t === "mouseover" || t === "pointerover", w = t === "mouseout" || t === "pointerout", D && n !== or && ($ = n.relatedTarget || n.fromElement) && (_l($) || $[Cl]))
            break t;
          if ((w || D) && (D = k.window === k ? k : (D = k.ownerDocument) ? D.defaultView || D.parentWindow : window, w ? ($ = n.relatedTarget || n.toElement, w = M, $ = $ ? _l($) : null, $ !== null && (Ht = f($), ut = $.tag, $ !== Ht || ut !== 5 && ut !== 27 && ut !== 6) && ($ = null)) : (w = null, $ = M), w !== $)) {
            if (ut = Cs, B = "onMouseLeave", _ = "onMouseEnter", C = "mouse", (t === "pointerout" || t === "pointerover") && (ut = Os, B = "onPointerLeave", _ = "onPointerEnter", C = "pointer"), Ht = w == null ? D : xi(w), O = $ == null ? D : xi($), D = new ut(
              B,
              C + "leave",
              w,
              n,
              k
            ), D.target = Ht, D.relatedTarget = O, B = null, _l(k) === M && (ut = new ut(
              _,
              C + "enter",
              $,
              n,
              k
            ), ut.target = O, ut.relatedTarget = Ht, B = ut), Ht = B, w && $)
              e: {
                for (ut = yg, _ = w, C = $, O = 0, B = _; B; B = ut(B))
                  O++;
                B = 0;
                for (var at = C; at; at = ut(at))
                  B++;
                for (; 0 < O - B; )
                  _ = ut(_), O--;
                for (; 0 < B - O; )
                  C = ut(C), B--;
                for (; O--; ) {
                  if (_ === C || C !== null && _ === C.alternate) {
                    ut = _;
                    break e;
                  }
                  _ = ut(_), C = ut(C);
                }
                ut = null;
              }
            else ut = null;
            w !== null && bm(
              H,
              D,
              w,
              ut,
              !1
            ), $ !== null && Ht !== null && bm(
              H,
              Ht,
              $,
              ut,
              !0
            );
          }
        }
        t: {
          if (D = M ? xi(M) : window, w = D.nodeName && D.nodeName.toLowerCase(), w === "select" || w === "input" && D.type === "file")
            var Ot = js;
          else if (ks(D))
            if (Bs)
              Ot = _y;
            else {
              Ot = zy;
              var tt = Ty;
            }
          else
            w = D.nodeName, !w || w.toLowerCase() !== "input" || D.type !== "checkbox" && D.type !== "radio" ? M && cr(M.elementType) && (Ot = js) : Ot = Cy;
          if (Ot && (Ot = Ot(t, M))) {
            Us(
              H,
              Ot,
              n,
              k
            );
            break t;
          }
          tt && tt(t, D, M), t === "focusout" && M && D.type === "number" && M.memoizedProps.value != null && rr(D, "number", D.value);
        }
        switch (tt = M ? xi(M) : window, t) {
          case "focusin":
            (ks(tt) || tt.contentEditable === "true") && (jl = tt, Er = M, Di = null);
            break;
          case "focusout":
            Di = Er = jl = null;
            break;
          case "mousedown":
            Ar = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Ar = !1, Qs(H, n, k);
            break;
          case "selectionchange":
            if (My) break;
          case "keydown":
          case "keyup":
            Qs(H, n, k);
        }
        var pt;
        if (vr)
          t: {
            switch (t) {
              case "compositionstart":
                var Tt = "onCompositionStart";
                break t;
              case "compositionend":
                Tt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                Tt = "onCompositionUpdate";
                break t;
            }
            Tt = void 0;
          }
        else
          Ul ? ws(t, n) && (Tt = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (Tt = "onCompositionStart");
        Tt && (Ms && n.locale !== "ko" && (Ul || Tt !== "onCompositionStart" ? Tt === "onCompositionEnd" && Ul && (pt = Ts()) : (wn = k, mr = "value" in wn ? wn.value : wn.textContent, Ul = !0)), tt = zu(M, Tt), 0 < tt.length && (Tt = new _s(
          Tt,
          t,
          null,
          n,
          k
        ), H.push({ event: Tt, listeners: tt }), pt ? Tt.data = pt : (pt = Rs(n), pt !== null && (Tt.data = pt)))), (pt = Sy ? by(t, n) : xy(t, n)) && (Tt = zu(M, "onBeforeInput"), 0 < Tt.length && (tt = new _s(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          k
        ), H.push({
          event: tt,
          listeners: Tt
        }), tt.data = pt)), hg(
          H,
          t,
          M,
          n,
          k
        );
      }
      vm(H, e);
    });
  }
  function ea(t, e, n) {
    return {
      instance: t,
      listener: e,
      currentTarget: n
    };
  }
  function zu(t, e) {
    for (var n = e + "Capture", l = []; t !== null; ) {
      var u = t, o = u.stateNode;
      if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || o === null || (u = Ei(t, n), u != null && l.unshift(
        ea(t, u, o)
      ), u = Ei(t, e), u != null && l.push(
        ea(t, u, o)
      )), t.tag === 3) return l;
      t = t.return;
    }
    return [];
  }
  function yg(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function bm(t, e, n, l, u) {
    for (var o = e._reactName, m = []; n !== null && n !== l; ) {
      var y = n, T = y.alternate, M = y.stateNode;
      if (y = y.tag, T !== null && T === l) break;
      y !== 5 && y !== 26 && y !== 27 || M === null || (T = M, u ? (M = Ei(n, o), M != null && m.unshift(
        ea(n, M, T)
      )) : u || (M = Ei(n, o), M != null && m.push(
        ea(n, M, T)
      ))), n = n.return;
    }
    m.length !== 0 && t.push({ event: e, listeners: m });
  }
  var gg = /\r\n?/g, vg = /\u0000|\uFFFD/g;
  function xm(t) {
    return (typeof t == "string" ? t : "" + t).replace(gg, `
`).replace(vg, "");
  }
  function Em(t, e) {
    return e = xm(e), xm(t) === e;
  }
  function Bt(t, e, n, l, u, o) {
    switch (n) {
      case "children":
        typeof l == "string" ? e === "body" || e === "textarea" && l === "" || wl(t, l) : (typeof l == "number" || typeof l == "bigint") && e !== "body" && wl(t, "" + l);
        break;
      case "className":
        Ma(t, "class", l);
        break;
      case "tabIndex":
        Ma(t, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ma(t, n, l);
        break;
      case "style":
        xs(t, l, o);
        break;
      case "data":
        if (e !== "object") {
          Ma(t, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (e !== "a" || n !== "href")) {
          t.removeAttribute(n);
          break;
        }
        if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean") {
          t.removeAttribute(n);
          break;
        }
        l = Na("" + l), t.setAttribute(n, l);
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          t.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof o == "function" && (n === "formAction" ? (e !== "input" && Bt(t, e, "name", u.name, u, null), Bt(
            t,
            e,
            "formEncType",
            u.formEncType,
            u,
            null
          ), Bt(
            t,
            e,
            "formMethod",
            u.formMethod,
            u,
            null
          ), Bt(
            t,
            e,
            "formTarget",
            u.formTarget,
            u,
            null
          )) : (Bt(t, e, "encType", u.encType, u, null), Bt(t, e, "method", u.method, u, null), Bt(t, e, "target", u.target, u, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          t.removeAttribute(n);
          break;
        }
        l = Na("" + l), t.setAttribute(n, l);
        break;
      case "onClick":
        l != null && (t.onclick = mn);
        break;
      case "onScroll":
        l != null && xt("scroll", t);
        break;
      case "onScrollEnd":
        l != null && xt("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(c(61));
          if (n = l.__html, n != null) {
            if (u.children != null) throw Error(c(60));
            t.innerHTML = n;
          }
        }
        break;
      case "multiple":
        t.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        t.muted = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (l == null || typeof l == "function" || typeof l == "boolean" || typeof l == "symbol") {
          t.removeAttribute("xlink:href");
          break;
        }
        n = Na("" + l), t.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          n
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        l != null && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(n, "" + l) : t.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        l && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(n, "") : t.removeAttribute(n);
        break;
      case "capture":
      case "download":
        l === !0 ? t.setAttribute(n, "") : l !== !1 && l != null && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(n, l) : t.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null && typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l ? t.setAttribute(n, l) : t.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l) ? t.removeAttribute(n) : t.setAttribute(n, l);
        break;
      case "popover":
        xt("beforetoggle", t), xt("toggle", t), Oa(t, "popover", l);
        break;
      case "xlinkActuate":
        hn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          l
        );
        break;
      case "xlinkArcrole":
        hn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          l
        );
        break;
      case "xlinkRole":
        hn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          l
        );
        break;
      case "xlinkShow":
        hn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          l
        );
        break;
      case "xlinkTitle":
        hn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          l
        );
        break;
      case "xlinkType":
        hn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          l
        );
        break;
      case "xmlBase":
        hn(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          l
        );
        break;
      case "xmlLang":
        hn(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          l
        );
        break;
      case "xmlSpace":
        hn(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          l
        );
        break;
      case "is":
        Oa(t, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = Zp.get(n) || n, Oa(t, n, l));
    }
  }
  function Jc(t, e, n, l, u, o) {
    switch (n) {
      case "style":
        xs(t, l, o);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(c(61));
          if (n = l.__html, n != null) {
            if (u.children != null) throw Error(c(60));
            t.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof l == "string" ? wl(t, l) : (typeof l == "number" || typeof l == "bigint") && wl(t, "" + l);
        break;
      case "onScroll":
        l != null && xt("scroll", t);
        break;
      case "onScrollEnd":
        l != null && xt("scrollend", t);
        break;
      case "onClick":
        l != null && (t.onclick = mn);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!hs.hasOwnProperty(n))
          t: {
            if (n[0] === "o" && n[1] === "n" && (u = n.endsWith("Capture"), e = n.slice(2, u ? n.length - 7 : void 0), o = t[ve] || null, o = o != null ? o[n] : null, typeof o == "function" && t.removeEventListener(e, o, u), typeof l == "function")) {
              typeof o != "function" && o !== null && (n in t ? t[n] = null : t.hasAttribute(n) && t.removeAttribute(n)), t.addEventListener(e, l, u);
              break t;
            }
            n in t ? t[n] = l : l === !0 ? t.setAttribute(n, "") : Oa(t, n, l);
          }
    }
  }
  function fe(t, e, n) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        xt("error", t), xt("load", t);
        var l = !1, u = !1, o;
        for (o in n)
          if (n.hasOwnProperty(o)) {
            var m = n[o];
            if (m != null)
              switch (o) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(c(137, e));
                default:
                  Bt(t, e, o, m, n, null);
              }
          }
        u && Bt(t, e, "srcSet", n.srcSet, n, null), l && Bt(t, e, "src", n.src, n, null);
        return;
      case "input":
        xt("invalid", t);
        var y = o = m = u = null, T = null, M = null;
        for (l in n)
          if (n.hasOwnProperty(l)) {
            var k = n[l];
            if (k != null)
              switch (l) {
                case "name":
                  u = k;
                  break;
                case "type":
                  m = k;
                  break;
                case "checked":
                  T = k;
                  break;
                case "defaultChecked":
                  M = k;
                  break;
                case "value":
                  o = k;
                  break;
                case "defaultValue":
                  y = k;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (k != null)
                    throw Error(c(137, e));
                  break;
                default:
                  Bt(t, e, l, k, n, null);
              }
          }
        gs(
          t,
          o,
          y,
          T,
          M,
          m,
          u,
          !1
        );
        return;
      case "select":
        xt("invalid", t), l = m = o = null;
        for (u in n)
          if (n.hasOwnProperty(u) && (y = n[u], y != null))
            switch (u) {
              case "value":
                o = y;
                break;
              case "defaultValue":
                m = y;
                break;
              case "multiple":
                l = y;
              default:
                Bt(t, e, u, y, n, null);
            }
        e = o, n = m, t.multiple = !!l, e != null ? Nl(t, !!l, e, !1) : n != null && Nl(t, !!l, n, !0);
        return;
      case "textarea":
        xt("invalid", t), o = u = l = null;
        for (m in n)
          if (n.hasOwnProperty(m) && (y = n[m], y != null))
            switch (m) {
              case "value":
                l = y;
                break;
              case "defaultValue":
                u = y;
                break;
              case "children":
                o = y;
                break;
              case "dangerouslySetInnerHTML":
                if (y != null) throw Error(c(91));
                break;
              default:
                Bt(t, e, m, y, n, null);
            }
        Ss(t, l, u, o);
        return;
      case "option":
        for (T in n)
          n.hasOwnProperty(T) && (l = n[T], l != null) && (T === "selected" ? t.selected = l && typeof l != "function" && typeof l != "symbol" : Bt(t, e, T, l, n, null));
        return;
      case "dialog":
        xt("beforetoggle", t), xt("toggle", t), xt("cancel", t), xt("close", t);
        break;
      case "iframe":
      case "object":
        xt("load", t);
        break;
      case "video":
      case "audio":
        for (l = 0; l < ta.length; l++)
          xt(ta[l], t);
        break;
      case "image":
        xt("error", t), xt("load", t);
        break;
      case "details":
        xt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        xt("error", t), xt("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (M in n)
          if (n.hasOwnProperty(M) && (l = n[M], l != null))
            switch (M) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(c(137, e));
              default:
                Bt(t, e, M, l, n, null);
            }
        return;
      default:
        if (cr(e)) {
          for (k in n)
            n.hasOwnProperty(k) && (l = n[k], l !== void 0 && Jc(
              t,
              e,
              k,
              l,
              n,
              void 0
            ));
          return;
        }
    }
    for (y in n)
      n.hasOwnProperty(y) && (l = n[y], l != null && Bt(t, e, y, l, n, null));
  }
  function Sg(t, e, n, l) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var u = null, o = null, m = null, y = null, T = null, M = null, k = null;
        for (w in n) {
          var H = n[w];
          if (n.hasOwnProperty(w) && H != null)
            switch (w) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                T = H;
              default:
                l.hasOwnProperty(w) || Bt(t, e, w, null, l, H);
            }
        }
        for (var D in l) {
          var w = l[D];
          if (H = n[D], l.hasOwnProperty(D) && (w != null || H != null))
            switch (D) {
              case "type":
                o = w;
                break;
              case "name":
                u = w;
                break;
              case "checked":
                M = w;
                break;
              case "defaultChecked":
                k = w;
                break;
              case "value":
                m = w;
                break;
              case "defaultValue":
                y = w;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (w != null)
                  throw Error(c(137, e));
                break;
              default:
                w !== H && Bt(
                  t,
                  e,
                  D,
                  w,
                  l,
                  H
                );
            }
        }
        ur(
          t,
          m,
          y,
          T,
          M,
          k,
          o,
          u
        );
        return;
      case "select":
        w = m = y = D = null;
        for (o in n)
          if (T = n[o], n.hasOwnProperty(o) && T != null)
            switch (o) {
              case "value":
                break;
              case "multiple":
                w = T;
              default:
                l.hasOwnProperty(o) || Bt(
                  t,
                  e,
                  o,
                  null,
                  l,
                  T
                );
            }
        for (u in l)
          if (o = l[u], T = n[u], l.hasOwnProperty(u) && (o != null || T != null))
            switch (u) {
              case "value":
                D = o;
                break;
              case "defaultValue":
                y = o;
                break;
              case "multiple":
                m = o;
              default:
                o !== T && Bt(
                  t,
                  e,
                  u,
                  o,
                  l,
                  T
                );
            }
        e = y, n = m, l = w, D != null ? Nl(t, !!n, D, !1) : !!l != !!n && (e != null ? Nl(t, !!n, e, !0) : Nl(t, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        w = D = null;
        for (y in n)
          if (u = n[y], n.hasOwnProperty(y) && u != null && !l.hasOwnProperty(y))
            switch (y) {
              case "value":
                break;
              case "children":
                break;
              default:
                Bt(t, e, y, null, l, u);
            }
        for (m in l)
          if (u = l[m], o = n[m], l.hasOwnProperty(m) && (u != null || o != null))
            switch (m) {
              case "value":
                D = u;
                break;
              case "defaultValue":
                w = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(c(91));
                break;
              default:
                u !== o && Bt(t, e, m, u, l, o);
            }
        vs(t, D, w);
        return;
      case "option":
        for (var $ in n)
          D = n[$], n.hasOwnProperty($) && D != null && !l.hasOwnProperty($) && ($ === "selected" ? t.selected = !1 : Bt(
            t,
            e,
            $,
            null,
            l,
            D
          ));
        for (T in l)
          D = l[T], w = n[T], l.hasOwnProperty(T) && D !== w && (D != null || w != null) && (T === "selected" ? t.selected = D && typeof D != "function" && typeof D != "symbol" : Bt(
            t,
            e,
            T,
            D,
            l,
            w
          ));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var ut in n)
          D = n[ut], n.hasOwnProperty(ut) && D != null && !l.hasOwnProperty(ut) && Bt(t, e, ut, null, l, D);
        for (M in l)
          if (D = l[M], w = n[M], l.hasOwnProperty(M) && D !== w && (D != null || w != null))
            switch (M) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (D != null)
                  throw Error(c(137, e));
                break;
              default:
                Bt(
                  t,
                  e,
                  M,
                  D,
                  l,
                  w
                );
            }
        return;
      default:
        if (cr(e)) {
          for (var Ht in n)
            D = n[Ht], n.hasOwnProperty(Ht) && D !== void 0 && !l.hasOwnProperty(Ht) && Jc(
              t,
              e,
              Ht,
              void 0,
              l,
              D
            );
          for (k in l)
            D = l[k], w = n[k], !l.hasOwnProperty(k) || D === w || D === void 0 && w === void 0 || Jc(
              t,
              e,
              k,
              D,
              l,
              w
            );
          return;
        }
    }
    for (var _ in n)
      D = n[_], n.hasOwnProperty(_) && D != null && !l.hasOwnProperty(_) && Bt(t, e, _, null, l, D);
    for (H in l)
      D = l[H], w = n[H], !l.hasOwnProperty(H) || D === w || D == null && w == null || Bt(t, e, H, D, l, w);
  }
  function Am(t) {
    switch (t) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function bg() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, e = 0, n = performance.getEntriesByType("resource"), l = 0; l < n.length; l++) {
        var u = n[l], o = u.transferSize, m = u.initiatorType, y = u.duration;
        if (o && y && Am(m)) {
          for (m = 0, y = u.responseEnd, l += 1; l < n.length; l++) {
            var T = n[l], M = T.startTime;
            if (M > y) break;
            var k = T.transferSize, H = T.initiatorType;
            k && Am(H) && (T = T.responseEnd, m += k * (T < y ? 1 : (y - M) / (T - M)));
          }
          if (--l, e += 8 * (o + m) / (u.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var Fc = null, Ic = null;
  function Cu(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Tm(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function zm(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function Wc(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var $c = null;
  function xg() {
    var t = window.event;
    return t && t.type === "popstate" ? t === $c ? !1 : ($c = t, !0) : ($c = null, !1);
  }
  var Cm = typeof setTimeout == "function" ? setTimeout : void 0, Eg = typeof clearTimeout == "function" ? clearTimeout : void 0, _m = typeof Promise == "function" ? Promise : void 0, Ag = typeof queueMicrotask == "function" ? queueMicrotask : typeof _m < "u" ? function(t) {
    return _m.resolve(null).then(t).catch(Tg);
  } : Cm;
  function Tg(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function Fn(t) {
    return t === "head";
  }
  function Om(t, e) {
    var n = e, l = 0;
    do {
      var u = n.nextSibling;
      if (t.removeChild(n), u && u.nodeType === 8)
        if (n = u.data, n === "/$" || n === "/&") {
          if (l === 0) {
            t.removeChild(u), oi(e);
            return;
          }
          l--;
        } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&")
          l++;
        else if (n === "html")
          na(t.ownerDocument.documentElement);
        else if (n === "head") {
          n = t.ownerDocument.head, na(n);
          for (var o = n.firstChild; o; ) {
            var m = o.nextSibling, y = o.nodeName;
            o[bi] || y === "SCRIPT" || y === "STYLE" || y === "LINK" && o.rel.toLowerCase() === "stylesheet" || n.removeChild(o), o = m;
          }
        } else
          n === "body" && na(t.ownerDocument.body);
      n = u;
    } while (n);
    oi(e);
  }
  function Mm(t, e) {
    var n = t;
    t = 0;
    do {
      var l = n.nextSibling;
      if (n.nodeType === 1 ? e ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (e ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), l && l.nodeType === 8)
        if (n = l.data, n === "/$") {
          if (t === 0) break;
          t--;
        } else
          n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || t++;
      n = l;
    } while (n);
  }
  function Pc(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var n = e;
      switch (e = e.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Pc(n), ir(n);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(n);
    }
  }
  function zg(t, e, n, l) {
    for (; t.nodeType === 1; ) {
      var u = n;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!l && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (l) {
        if (!t[bi])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (o = t.getAttribute("rel"), o === "stylesheet" && t.hasAttribute("data-precedence"))
                break;
              if (o !== u.rel || t.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) || t.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) || t.getAttribute("title") !== (u.title == null ? null : u.title))
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (o = t.getAttribute("src"), (o !== (u.src == null ? null : u.src) || t.getAttribute("type") !== (u.type == null ? null : u.type) || t.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin)) && o && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var o = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && t.getAttribute("name") === o)
          return t;
      } else return t;
      if (t = Ke(t.nextSibling), t === null) break;
    }
    return null;
  }
  function Cg(t, e, n) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !n || (t = Ke(t.nextSibling), t === null)) return null;
    return t;
  }
  function Dm(t, e) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Ke(t.nextSibling), t === null)) return null;
    return t;
  }
  function to(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function eo(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function _g(t, e) {
    var n = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || n.readyState !== "loading")
      e();
    else {
      var l = function() {
        e(), n.removeEventListener("DOMContentLoaded", l);
      };
      n.addEventListener("DOMContentLoaded", l), t._reactRetry = l;
    }
  }
  function Ke(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (e = t.data, e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&" || e === "F!" || e === "F")
          break;
        if (e === "/$" || e === "/&") return null;
      }
    }
    return t;
  }
  var no = null;
  function Nm(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "/$" || n === "/&") {
          if (e === 0)
            return Ke(t.nextSibling);
          e--;
        } else
          n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function wm(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
          if (e === 0) return t;
          e--;
        } else n !== "/$" && n !== "/&" || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function Rm(t, e, n) {
    switch (e = Cu(n), t) {
      case "html":
        if (t = e.documentElement, !t) throw Error(c(452));
        return t;
      case "head":
        if (t = e.head, !t) throw Error(c(453));
        return t;
      case "body":
        if (t = e.body, !t) throw Error(c(454));
        return t;
      default:
        throw Error(c(451));
    }
  }
  function na(t) {
    for (var e = t.attributes; e.length; )
      t.removeAttributeNode(e[0]);
    ir(t);
  }
  var Je = /* @__PURE__ */ new Map(), km = /* @__PURE__ */ new Set();
  function _u(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var Mn = V.d;
  V.d = {
    f: Og,
    r: Mg,
    D: Dg,
    C: Ng,
    L: wg,
    m: Rg,
    X: Ug,
    S: kg,
    M: jg
  };
  function Og() {
    var t = Mn.f(), e = vu();
    return t || e;
  }
  function Mg(t) {
    var e = Ol(t);
    e !== null && e.tag === 5 && e.type === "form" ? Wf(e) : Mn.r(t);
  }
  var ui = typeof document > "u" ? null : document;
  function Um(t, e, n) {
    var l = ui;
    if (l && typeof e == "string" && e) {
      var u = qe(e);
      u = 'link[rel="' + t + '"][href="' + u + '"]', typeof n == "string" && (u += '[crossorigin="' + n + '"]'), km.has(u) || (km.add(u), t = { rel: t, crossOrigin: n, href: e }, l.querySelector(u) === null && (e = l.createElement("link"), fe(e, "link", t), ie(e), l.head.appendChild(e)));
    }
  }
  function Dg(t) {
    Mn.D(t), Um("dns-prefetch", t, null);
  }
  function Ng(t, e) {
    Mn.C(t, e), Um("preconnect", t, e);
  }
  function wg(t, e, n) {
    Mn.L(t, e, n);
    var l = ui;
    if (l && t && e) {
      var u = 'link[rel="preload"][as="' + qe(e) + '"]';
      e === "image" && n && n.imageSrcSet ? (u += '[imagesrcset="' + qe(
        n.imageSrcSet
      ) + '"]', typeof n.imageSizes == "string" && (u += '[imagesizes="' + qe(
        n.imageSizes
      ) + '"]')) : u += '[href="' + qe(t) + '"]';
      var o = u;
      switch (e) {
        case "style":
          o = ri(t);
          break;
        case "script":
          o = ci(t);
      }
      Je.has(o) || (t = S(
        {
          rel: "preload",
          href: e === "image" && n && n.imageSrcSet ? void 0 : t,
          as: e
        },
        n
      ), Je.set(o, t), l.querySelector(u) !== null || e === "style" && l.querySelector(la(o)) || e === "script" && l.querySelector(ia(o)) || (e = l.createElement("link"), fe(e, "link", t), ie(e), l.head.appendChild(e)));
    }
  }
  function Rg(t, e) {
    Mn.m(t, e);
    var n = ui;
    if (n && t) {
      var l = e && typeof e.as == "string" ? e.as : "script", u = 'link[rel="modulepreload"][as="' + qe(l) + '"][href="' + qe(t) + '"]', o = u;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          o = ci(t);
      }
      if (!Je.has(o) && (t = S({ rel: "modulepreload", href: t }, e), Je.set(o, t), n.querySelector(u) === null)) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(ia(o)))
              return;
        }
        l = n.createElement("link"), fe(l, "link", t), ie(l), n.head.appendChild(l);
      }
    }
  }
  function kg(t, e, n) {
    Mn.S(t, e, n);
    var l = ui;
    if (l && t) {
      var u = Ml(l).hoistableStyles, o = ri(t);
      e = e || "default";
      var m = u.get(o);
      if (!m) {
        var y = { loading: 0, preload: null };
        if (m = l.querySelector(
          la(o)
        ))
          y.loading = 5;
        else {
          t = S(
            { rel: "stylesheet", href: t, "data-precedence": e },
            n
          ), (n = Je.get(o)) && lo(t, n);
          var T = m = l.createElement("link");
          ie(T), fe(T, "link", t), T._p = new Promise(function(M, k) {
            T.onload = M, T.onerror = k;
          }), T.addEventListener("load", function() {
            y.loading |= 1;
          }), T.addEventListener("error", function() {
            y.loading |= 2;
          }), y.loading |= 4, Ou(m, e, l);
        }
        m = {
          type: "stylesheet",
          instance: m,
          count: 1,
          state: y
        }, u.set(o, m);
      }
    }
  }
  function Ug(t, e) {
    Mn.X(t, e);
    var n = ui;
    if (n && t) {
      var l = Ml(n).hoistableScripts, u = ci(t), o = l.get(u);
      o || (o = n.querySelector(ia(u)), o || (t = S({ src: t, async: !0 }, e), (e = Je.get(u)) && io(t, e), o = n.createElement("script"), ie(o), fe(o, "link", t), n.head.appendChild(o)), o = {
        type: "script",
        instance: o,
        count: 1,
        state: null
      }, l.set(u, o));
    }
  }
  function jg(t, e) {
    Mn.M(t, e);
    var n = ui;
    if (n && t) {
      var l = Ml(n).hoistableScripts, u = ci(t), o = l.get(u);
      o || (o = n.querySelector(ia(u)), o || (t = S({ src: t, async: !0, type: "module" }, e), (e = Je.get(u)) && io(t, e), o = n.createElement("script"), ie(o), fe(o, "link", t), n.head.appendChild(o)), o = {
        type: "script",
        instance: o,
        count: 1,
        state: null
      }, l.set(u, o));
    }
  }
  function jm(t, e, n, l) {
    var u = (u = it.current) ? _u(u) : null;
    if (!u) throw Error(c(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (e = ri(n.href), n = Ml(
          u
        ).hoistableStyles, l = n.get(e), l || (l = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, n.set(e, l)), l) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          t = ri(n.href);
          var o = Ml(
            u
          ).hoistableStyles, m = o.get(t);
          if (m || (u = u.ownerDocument || u, m = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, o.set(t, m), (o = u.querySelector(
            la(t)
          )) && !o._p && (m.instance = o, m.state.loading = 5), Je.has(t) || (n = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, Je.set(t, n), o || Bg(
            u,
            t,
            n,
            m.state
          ))), e && l === null)
            throw Error(c(528, ""));
          return m;
        }
        if (e && l !== null)
          throw Error(c(529, ""));
        return null;
      case "script":
        return e = n.async, n = n.src, typeof n == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = ci(n), n = Ml(
          u
        ).hoistableScripts, l = n.get(e), l || (l = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, n.set(e, l)), l) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(c(444, t));
    }
  }
  function ri(t) {
    return 'href="' + qe(t) + '"';
  }
  function la(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Bm(t) {
    return S({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function Bg(t, e, n, l) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? l.loading = 1 : (e = t.createElement("link"), l.preload = e, e.addEventListener("load", function() {
      return l.loading |= 1;
    }), e.addEventListener("error", function() {
      return l.loading |= 2;
    }), fe(e, "link", n), ie(e), t.head.appendChild(e));
  }
  function ci(t) {
    return '[src="' + qe(t) + '"]';
  }
  function ia(t) {
    return "script[async]" + t;
  }
  function Hm(t, e, n) {
    if (e.count++, e.instance === null)
      switch (e.type) {
        case "style":
          var l = t.querySelector(
            'style[data-href~="' + qe(n.href) + '"]'
          );
          if (l)
            return e.instance = l, ie(l), l;
          var u = S({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null
          });
          return l = (t.ownerDocument || t).createElement(
            "style"
          ), ie(l), fe(l, "style", u), Ou(l, n.precedence, t), e.instance = l;
        case "stylesheet":
          u = ri(n.href);
          var o = t.querySelector(
            la(u)
          );
          if (o)
            return e.state.loading |= 4, e.instance = o, ie(o), o;
          l = Bm(n), (u = Je.get(u)) && lo(l, u), o = (t.ownerDocument || t).createElement("link"), ie(o);
          var m = o;
          return m._p = new Promise(function(y, T) {
            m.onload = y, m.onerror = T;
          }), fe(o, "link", l), e.state.loading |= 4, Ou(o, n.precedence, t), e.instance = o;
        case "script":
          return o = ci(n.src), (u = t.querySelector(
            ia(o)
          )) ? (e.instance = u, ie(u), u) : (l = n, (u = Je.get(o)) && (l = S({}, n), io(l, u)), t = t.ownerDocument || t, u = t.createElement("script"), ie(u), fe(u, "link", l), t.head.appendChild(u), e.instance = u);
        case "void":
          return null;
        default:
          throw Error(c(443, e.type));
      }
    else
      e.type === "stylesheet" && (e.state.loading & 4) === 0 && (l = e.instance, e.state.loading |= 4, Ou(l, n.precedence, t));
    return e.instance;
  }
  function Ou(t, e, n) {
    for (var l = n.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), u = l.length ? l[l.length - 1] : null, o = u, m = 0; m < l.length; m++) {
      var y = l[m];
      if (y.dataset.precedence === e) o = y;
      else if (o !== u) break;
    }
    o ? o.parentNode.insertBefore(t, o.nextSibling) : (e = n.nodeType === 9 ? n.head : n, e.insertBefore(t, e.firstChild));
  }
  function lo(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function io(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var Mu = null;
  function Lm(t, e, n) {
    if (Mu === null) {
      var l = /* @__PURE__ */ new Map(), u = Mu = /* @__PURE__ */ new Map();
      u.set(n, l);
    } else
      u = Mu, l = u.get(n), l || (l = /* @__PURE__ */ new Map(), u.set(n, l));
    if (l.has(t)) return l;
    for (l.set(t, null), n = n.getElementsByTagName(t), u = 0; u < n.length; u++) {
      var o = n[u];
      if (!(o[bi] || o[re] || t === "link" && o.getAttribute("rel") === "stylesheet") && o.namespaceURI !== "http://www.w3.org/2000/svg") {
        var m = o.getAttribute(e) || "";
        m = t + m;
        var y = l.get(m);
        y ? y.push(o) : l.set(m, [o]);
      }
    }
    return l;
  }
  function qm(t, e, n) {
    t = t.ownerDocument || t, t.head.insertBefore(
      n,
      e === "title" ? t.querySelector("head > title") : null
    );
  }
  function Hg(t, e, n) {
    if (n === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "")
          break;
        return !0;
      case "link":
        if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError)
          break;
        return e.rel === "stylesheet" ? (t = e.disabled, typeof e.precedence == "string" && t == null) : !0;
      case "script":
        if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string")
          return !0;
    }
    return !1;
  }
  function Ym(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function Lg(t, e, n, l) {
    if (n.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var u = ri(l.href), o = e.querySelector(
          la(u)
        );
        if (o) {
          e = o._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = Du.bind(t), e.then(t, t)), n.state.loading |= 4, n.instance = o, ie(o);
          return;
        }
        o = e.ownerDocument || e, l = Bm(l), (u = Je.get(u)) && lo(l, u), o = o.createElement("link"), ie(o);
        var m = o;
        m._p = new Promise(function(y, T) {
          m.onload = y, m.onerror = T;
        }), fe(o, "link", l), n.instance = o;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(n, e), (e = n.state.preload) && (n.state.loading & 3) === 0 && (t.count++, n = Du.bind(t), e.addEventListener("load", n), e.addEventListener("error", n));
    }
  }
  var ao = 0;
  function qg(t, e) {
    return t.stylesheets && t.count === 0 && wu(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(n) {
      var l = setTimeout(function() {
        if (t.stylesheets && wu(t, t.stylesheets), t.unsuspend) {
          var o = t.unsuspend;
          t.unsuspend = null, o();
        }
      }, 6e4 + e);
      0 < t.imgBytes && ao === 0 && (ao = 62500 * bg());
      var u = setTimeout(
        function() {
          if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && wu(t, t.stylesheets), t.unsuspend)) {
            var o = t.unsuspend;
            t.unsuspend = null, o();
          }
        },
        (t.imgBytes > ao ? 50 : 800) + e
      );
      return t.unsuspend = n, function() {
        t.unsuspend = null, clearTimeout(l), clearTimeout(u);
      };
    } : null;
  }
  function Du() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) wu(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var Nu = null;
  function wu(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, Nu = /* @__PURE__ */ new Map(), e.forEach(Yg, t), Nu = null, Du.call(t));
  }
  function Yg(t, e) {
    if (!(e.state.loading & 4)) {
      var n = Nu.get(t);
      if (n) var l = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), Nu.set(t, n);
        for (var u = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), o = 0; o < u.length; o++) {
          var m = u[o];
          (m.nodeName === "LINK" || m.getAttribute("media") !== "not all") && (n.set(m.dataset.precedence, m), l = m);
        }
        l && n.set(null, l);
      }
      u = e.instance, m = u.getAttribute("data-precedence"), o = n.get(m) || l, o === l && n.set(null, u), n.set(m, u), this.count++, l = Du.bind(this), u.addEventListener("load", l), u.addEventListener("error", l), o ? o.parentNode.insertBefore(u, o.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(u, t.firstChild)), e.state.loading |= 4;
    }
  }
  var aa = {
    $$typeof: Q,
    Provider: null,
    Consumer: null,
    _currentValue: et,
    _currentValue2: et,
    _threadCount: 0
  };
  function Vg(t, e, n, l, u, o, m, y, T) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = tr(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = tr(0), this.hiddenUpdates = tr(null), this.identifierPrefix = l, this.onUncaughtError = u, this.onCaughtError = o, this.onRecoverableError = m, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = T, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Vm(t, e, n, l, u, o, m, y, T, M, k, H) {
    return t = new Vg(
      t,
      e,
      n,
      m,
      T,
      M,
      k,
      H,
      y
    ), e = 1, o === !0 && (e |= 24), o = De(3, null, null, e), t.current = o, o.stateNode = t, e = Hr(), e.refCount++, t.pooledCache = e, e.refCount++, o.memoizedState = {
      element: l,
      isDehydrated: n,
      cache: e
    }, Vr(o), t;
  }
  function Xm(t) {
    return t ? (t = Ll, t) : Ll;
  }
  function Gm(t, e, n, l, u, o) {
    u = Xm(u), l.context === null ? l.context = u : l.pendingContext = u, l = Hn(e), l.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (l.callback = o), n = Ln(t, l, e), n !== null && (Te(n, t, e), Bi(n, t, e));
  }
  function Qm(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function uo(t, e) {
    Qm(t, e), (t = t.alternate) && Qm(t, e);
  }
  function Zm(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = cl(t, 67108864);
      e !== null && Te(e, t, 67108864), uo(t, 67108864);
    }
  }
  function Km(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Ue();
      e = er(e);
      var n = cl(t, e);
      n !== null && Te(n, t, e), uo(t, e);
    }
  }
  var Ru = !0;
  function Xg(t, e, n, l) {
    var u = N.T;
    N.T = null;
    var o = V.p;
    try {
      V.p = 2, ro(t, e, n, l);
    } finally {
      V.p = o, N.T = u;
    }
  }
  function Gg(t, e, n, l) {
    var u = N.T;
    N.T = null;
    var o = V.p;
    try {
      V.p = 8, ro(t, e, n, l);
    } finally {
      V.p = o, N.T = u;
    }
  }
  function ro(t, e, n, l) {
    if (Ru) {
      var u = co(l);
      if (u === null)
        Kc(
          t,
          e,
          l,
          ku,
          n
        ), Fm(t, l);
      else if (Zg(
        u,
        t,
        e,
        n,
        l
      ))
        l.stopPropagation();
      else if (Fm(t, l), e & 4 && -1 < Qg.indexOf(t)) {
        for (; u !== null; ) {
          var o = Ol(u);
          if (o !== null)
            switch (o.tag) {
              case 3:
                if (o = o.stateNode, o.current.memoizedState.isDehydrated) {
                  var m = ll(o.pendingLanes);
                  if (m !== 0) {
                    var y = o;
                    for (y.pendingLanes |= 2, y.entangledLanes |= 2; m; ) {
                      var T = 1 << 31 - Lt(m);
                      y.entanglements[1] |= T, m &= ~T;
                    }
                    ln(o), (Dt & 6) === 0 && (yu = de() + 500, Pi(0));
                  }
                }
                break;
              case 31:
              case 13:
                y = cl(o, 2), y !== null && Te(y, o, 2), vu(), uo(o, 2);
            }
          if (o = co(l), o === null && Kc(
            t,
            e,
            l,
            ku,
            n
          ), o === u) break;
          u = o;
        }
        u !== null && l.stopPropagation();
      } else
        Kc(
          t,
          e,
          l,
          null,
          n
        );
    }
  }
  function co(t) {
    return t = sr(t), oo(t);
  }
  var ku = null;
  function oo(t) {
    if (ku = null, t = _l(t), t !== null) {
      var e = f(t);
      if (e === null) t = null;
      else {
        var n = e.tag;
        if (n === 13) {
          if (t = h(e), t !== null) return t;
          t = null;
        } else if (n === 31) {
          if (t = p(e), t !== null) return t;
          t = null;
        } else if (n === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return ku = t, null;
  }
  function Jm(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Pu()) {
          case j:
            return 2;
          case K:
            return 8;
          case ct:
          case St:
            return 32;
          case wt:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var so = !1, In = null, Wn = null, $n = null, ua = /* @__PURE__ */ new Map(), ra = /* @__PURE__ */ new Map(), Pn = [], Qg = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Fm(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        In = null;
        break;
      case "dragenter":
      case "dragleave":
        Wn = null;
        break;
      case "mouseover":
      case "mouseout":
        $n = null;
        break;
      case "pointerover":
      case "pointerout":
        ua.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ra.delete(e.pointerId);
    }
  }
  function ca(t, e, n, l, u, o) {
    return t === null || t.nativeEvent !== o ? (t = {
      blockedOn: e,
      domEventName: n,
      eventSystemFlags: l,
      nativeEvent: o,
      targetContainers: [u]
    }, e !== null && (e = Ol(e), e !== null && Zm(e)), t) : (t.eventSystemFlags |= l, e = t.targetContainers, u !== null && e.indexOf(u) === -1 && e.push(u), t);
  }
  function Zg(t, e, n, l, u) {
    switch (e) {
      case "focusin":
        return In = ca(
          In,
          t,
          e,
          n,
          l,
          u
        ), !0;
      case "dragenter":
        return Wn = ca(
          Wn,
          t,
          e,
          n,
          l,
          u
        ), !0;
      case "mouseover":
        return $n = ca(
          $n,
          t,
          e,
          n,
          l,
          u
        ), !0;
      case "pointerover":
        var o = u.pointerId;
        return ua.set(
          o,
          ca(
            ua.get(o) || null,
            t,
            e,
            n,
            l,
            u
          )
        ), !0;
      case "gotpointercapture":
        return o = u.pointerId, ra.set(
          o,
          ca(
            ra.get(o) || null,
            t,
            e,
            n,
            l,
            u
          )
        ), !0;
    }
    return !1;
  }
  function Im(t) {
    var e = _l(t.target);
    if (e !== null) {
      var n = f(e);
      if (n !== null) {
        if (e = n.tag, e === 13) {
          if (e = h(n), e !== null) {
            t.blockedOn = e, os(t.priority, function() {
              Km(n);
            });
            return;
          }
        } else if (e === 31) {
          if (e = p(n), e !== null) {
            t.blockedOn = e, os(t.priority, function() {
              Km(n);
            });
            return;
          }
        } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Uu(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var n = co(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var l = new n.constructor(
          n.type,
          n
        );
        or = l, n.target.dispatchEvent(l), or = null;
      } else
        return e = Ol(n), e !== null && Zm(e), t.blockedOn = n, !1;
      e.shift();
    }
    return !0;
  }
  function Wm(t, e, n) {
    Uu(t) && n.delete(e);
  }
  function Kg() {
    so = !1, In !== null && Uu(In) && (In = null), Wn !== null && Uu(Wn) && (Wn = null), $n !== null && Uu($n) && ($n = null), ua.forEach(Wm), ra.forEach(Wm);
  }
  function ju(t, e) {
    t.blockedOn === e && (t.blockedOn = null, so || (so = !0, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      Kg
    )));
  }
  var Bu = null;
  function $m(t) {
    Bu !== t && (Bu = t, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      function() {
        Bu === t && (Bu = null);
        for (var e = 0; e < t.length; e += 3) {
          var n = t[e], l = t[e + 1], u = t[e + 2];
          if (typeof l != "function") {
            if (oo(l || n) === null)
              continue;
            break;
          }
          var o = Ol(n);
          o !== null && (t.splice(e, 3), e -= 3, cc(
            o,
            {
              pending: !0,
              data: u,
              method: n.method,
              action: l
            },
            l,
            u
          ));
        }
      }
    ));
  }
  function oi(t) {
    function e(T) {
      return ju(T, t);
    }
    In !== null && ju(In, t), Wn !== null && ju(Wn, t), $n !== null && ju($n, t), ua.forEach(e), ra.forEach(e);
    for (var n = 0; n < Pn.length; n++) {
      var l = Pn[n];
      l.blockedOn === t && (l.blockedOn = null);
    }
    for (; 0 < Pn.length && (n = Pn[0], n.blockedOn === null); )
      Im(n), n.blockedOn === null && Pn.shift();
    if (n = (t.ownerDocument || t).$$reactFormReplay, n != null)
      for (l = 0; l < n.length; l += 3) {
        var u = n[l], o = n[l + 1], m = u[ve] || null;
        if (typeof o == "function")
          m || $m(n);
        else if (m) {
          var y = null;
          if (o && o.hasAttribute("formAction")) {
            if (u = o, m = o[ve] || null)
              y = m.formAction;
            else if (oo(u) !== null) continue;
          } else y = m.action;
          typeof y == "function" ? n[l + 1] = y : (n.splice(l, 3), l -= 3), $m(n);
        }
      }
  }
  function Pm() {
    function t(o) {
      o.canIntercept && o.info === "react-transition" && o.intercept({
        handler: function() {
          return new Promise(function(m) {
            return u = m;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function e() {
      u !== null && (u(), u = null), l || setTimeout(n, 20);
    }
    function n() {
      if (!l && !navigation.transition) {
        var o = navigation.currentEntry;
        o && o.url != null && navigation.navigate(o.url, {
          state: o.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var l = !1, u = null;
      return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", e), navigation.addEventListener("navigateerror", e), setTimeout(n, 100), function() {
        l = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", e), navigation.removeEventListener("navigateerror", e), u !== null && (u(), u = null);
      };
    }
  }
  function fo(t) {
    this._internalRoot = t;
  }
  Hu.prototype.render = fo.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(c(409));
    var n = e.current, l = Ue();
    Gm(n, l, t, e, null, null);
  }, Hu.prototype.unmount = fo.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      Gm(t.current, 2, null, t, null, null), vu(), e[Cl] = null;
    }
  };
  function Hu(t) {
    this._internalRoot = t;
  }
  Hu.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = cs();
      t = { blockedOn: null, target: t, priority: e };
      for (var n = 0; n < Pn.length && e !== 0 && e < Pn[n].priority; n++) ;
      Pn.splice(n, 0, t), n === 0 && Im(t);
    }
  };
  var td = a.version;
  if (td !== "19.2.4")
    throw Error(
      c(
        527,
        td,
        "19.2.4"
      )
    );
  V.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function" ? Error(c(188)) : (t = Object.keys(t).join(","), Error(c(268, t)));
    return t = d(e), t = t !== null ? v(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var Jg = {
    bundleType: 0,
    version: "19.2.4",
    rendererPackageName: "react-dom",
    currentDispatcherRef: N,
    reconcilerVersion: "19.2.4"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Lu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Lu.isDisabled && Lu.supportsFiber)
      try {
        pe = Lu.inject(
          Jg
        ), ne = Lu;
      } catch {
      }
  }
  return sa.createRoot = function(t, e) {
    if (!s(t)) throw Error(c(299));
    var n = !1, l = "", u = rh, o = ch, m = oh;
    return e != null && (e.unstable_strictMode === !0 && (n = !0), e.identifierPrefix !== void 0 && (l = e.identifierPrefix), e.onUncaughtError !== void 0 && (u = e.onUncaughtError), e.onCaughtError !== void 0 && (o = e.onCaughtError), e.onRecoverableError !== void 0 && (m = e.onRecoverableError)), e = Vm(
      t,
      1,
      !1,
      null,
      null,
      n,
      l,
      null,
      u,
      o,
      m,
      Pm
    ), t[Cl] = e.current, Zc(t), new fo(e);
  }, sa.hydrateRoot = function(t, e, n) {
    if (!s(t)) throw Error(c(299));
    var l = !1, u = "", o = rh, m = ch, y = oh, T = null;
    return n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (u = n.identifierPrefix), n.onUncaughtError !== void 0 && (o = n.onUncaughtError), n.onCaughtError !== void 0 && (m = n.onCaughtError), n.onRecoverableError !== void 0 && (y = n.onRecoverableError), n.formState !== void 0 && (T = n.formState)), e = Vm(
      t,
      1,
      !0,
      e,
      n ?? null,
      l,
      u,
      T,
      o,
      m,
      y,
      Pm
    ), e.context = Xm(null), n = e.current, l = Ue(), l = er(l), u = Hn(l), u.callback = null, Ln(n, u, l), n = l, e.current.lanes = n, Si(e, n), ln(e), t[Cl] = e.current, Zc(t), new Hu(e);
  }, sa.version = "19.2.4", sa;
}
var sd;
function i1() {
  if (sd) return mo.exports;
  sd = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (a) {
        console.error(a);
      }
  }
  return i(), mo.exports = l1(), mo.exports;
}
var a1 = i1();
const u1 = /* @__PURE__ */ Ku(a1);
var un = Xo();
const qu = /* @__PURE__ */ Ku(un), fd = (i) => {
  let a;
  const r = /* @__PURE__ */ new Set(), c = (d, v) => {
    const S = typeof d == "function" ? d(a) : d;
    if (!Object.is(S, a)) {
      const E = a;
      a = v ?? (typeof S != "object" || S === null) ? S : Object.assign({}, a, S), r.forEach((x) => x(a, E));
    }
  }, s = () => a, p = { setState: c, getState: s, getInitialState: () => g, subscribe: (d) => (r.add(d), () => r.delete(d)) }, g = a = i(c, s, p);
  return p;
}, r1 = ((i) => i ? fd(i) : fd), c1 = (i) => i;
function o1(i, a = c1) {
  const r = qu.useSyncExternalStore(
    i.subscribe,
    qu.useCallback(() => a(i.getState()), [i, a]),
    qu.useCallback(() => a(i.getInitialState()), [i, a])
  );
  return qu.useDebugValue(r), r;
}
const s1 = (i) => {
  const a = r1(i), r = (c) => o1(a, c);
  return Object.assign(r, a), r;
}, f1 = ((i) => s1), h1 = (i) => (a, r, c) => {
  const s = c.subscribe;
  return c.subscribe = ((h, p, g) => {
    let d = h;
    if (p) {
      const v = g?.equalityFn || Object.is;
      let S = h(c.getState());
      d = (E) => {
        const x = h(E);
        if (!v(S, x)) {
          const Y = S;
          p(S = x, Y);
        }
      }, g?.fireImmediately && p(S, S);
    }
    return s(d);
  }), i(a, r, c);
}, m1 = h1, d1 = {
  theme: "light",
  voiceEnabled: !1,
  automationEnabled: !1,
  memoryEnabled: !0,
  fontSize: 14
}, hd = [
  {
    id: "web-copilot",
    name: "Web Copilot",
    description: "Analyze and interact with web pages",
    icon: "🌐",
    enabled: !0
  },
  {
    id: "chat",
    name: "Chat",
    description: "Conversational AI assistant",
    icon: "💬",
    enabled: !0
  },
  {
    id: "automation",
    name: "Automation",
    description: "Automate repetitive tasks",
    icon: "⚙️",
    enabled: !1
  },
  {
    id: "voice",
    name: "Voice",
    description: "Voice-powered interactions",
    icon: "🎙️",
    enabled: !1
  },
  {
    id: "memory",
    name: "Memory",
    description: "Remember facts and preferences",
    icon: "💾",
    enabled: !0
  },
  {
    id: "research",
    name: "Research",
    description: "Deep research and analysis",
    icon: "🔍",
    enabled: !1
  }
], p1 = [
  {
    id: "email",
    name: "Email Access",
    description: "Send and manage emails",
    enabled: !1,
    riskLevel: "high"
  },
  {
    id: "calendar",
    name: "Calendar Access",
    description: "Access and modify calendar events",
    enabled: !1,
    riskLevel: "high"
  },
  {
    id: "drive",
    name: "Drive Access",
    description: "Create and modify documents",
    enabled: !1,
    riskLevel: "high"
  },
  {
    id: "tab_control",
    name: "Tab Control",
    description: "Open and close browser tabs",
    enabled: !0,
    riskLevel: "medium"
  },
  {
    id: "page_interaction",
    name: "Page Interaction",
    description: "Interact with page elements",
    enabled: !0,
    riskLevel: "medium"
  }
], ue = f1()(
  m1((i, a) => ({
    // Initial State
    availableAgents: hd,
    activeAgent: null,
    agentLoading: !1,
    currentSession: null,
    sessions: /* @__PURE__ */ new Map(),
    sessionId: null,
    messages: [],
    isTyping: !1,
    memoryEntries: [],
    shortTermMemory: [],
    settings: d1,
    permissions: p1,
    sidebarOpen: !1,
    showAgentLauncher: !1,
    confirmationPending: null,
    // Agent Management
    initializeAgents: () => {
      i({ availableAgents: hd });
    },
    setActiveAgent: (r) => {
      i({ activeAgent: r }), r && i({ showAgentLauncher: !1 });
    },
    setAgentLoading: (r) => {
      i({ agentLoading: r });
    },
    // Session Management
    createSession: (r, c, s) => {
      const f = `session_${Date.now()}`, h = {
        sessionId: f,
        tabId: r,
        pageUrl: c,
        pageTitle: s,
        messages: [],
        createdAt: Date.now(),
        updatedAt: Date.now()
      }, p = new Map(a().sessions);
      p.set(f, h), i({
        sessionId: f,
        currentSession: h,
        sessions: p,
        messages: []
      });
    },
    setCurrentSession: (r) => {
      const c = a().sessions.get(r);
      c && i({
        sessionId: r,
        currentSession: c,
        messages: c.messages
      });
    },
    addMessage: (r) => {
      const c = [...a().messages, r];
      i({ messages: c });
      const { sessionId: s, sessions: f } = a();
      if (s) {
        const h = f.get(s);
        if (h) {
          const p = {
            ...h,
            messages: c,
            updatedAt: Date.now()
          }, g = new Map(f);
          g.set(s, p), i({
            currentSession: p,
            sessions: g
          });
        }
      }
    },
    clearMessages: () => {
      i({ messages: [] });
    },
    updateSessionSummary: (r) => {
      const { sessionId: c, sessions: s } = a();
      if (c) {
        const f = s.get(c);
        if (f) {
          const h = { ...f, summary: r, updatedAt: Date.now() }, p = new Map(s);
          p.set(c, h), i({
            currentSession: h,
            sessions: p
          });
        }
      }
    },
    // Memory
    addMemoryEntry: (r) => {
      i((c) => ({
        memoryEntries: [...c.memoryEntries, r]
      }));
    },
    removeMemoryEntry: (r) => {
      i((c) => ({
        memoryEntries: c.memoryEntries.filter((s) => s.id !== r)
      }));
    },
    addShortTermMemory: (r) => {
      i((c) => ({
        shortTermMemory: [r, ...c.shortTermMemory].slice(0, 50)
        // Limit to 50 items
      }));
    },
    clearShortTermMemory: () => {
      i({ shortTermMemory: [] });
    },
    // Settings
    updateSettings: (r) => {
      i((c) => ({
        settings: { ...c.settings, ...r }
      }));
    },
    togglePermission: (r) => {
      i((c) => ({
        permissions: c.permissions.map(
          (s) => s.id === r ? { ...s, enabled: !s.enabled } : s
        )
      }));
    },
    // UI
    setSidebarOpen: (r) => {
      i({ sidebarOpen: r });
    },
    setShowAgentLauncher: (r) => {
      i({ showAgentLauncher: r });
    },
    requestConfirmation: (r, c, s) => {
      i({
        confirmationPending: {
          action: r,
          message: c,
          onConfirm: s,
          onCancel: () => i({ confirmationPending: null })
        }
      });
    },
    cancelConfirmation: () => {
      i({ confirmationPending: null });
    }
  }))
), y1 = () => ue((i) => i.activeAgent), g1 = () => ue((i) => i.messages), v1 = () => ue((i) => i.sidebarOpen), S1 = () => ue((i) => i.agentLoading), tp = () => ue((i) => i.showAgentLauncher), b1 = ({ children: i }) => {
  const a = v1(), r = ue((p) => p.setSidebarOpen), { setShowAgentLauncher: c, setActiveAgent: s } = ue(), f = () => {
    c(!0), s(null);
  }, h = () => {
    r(!1);
  };
  return /* @__PURE__ */ q.jsxs(q.Fragment, { children: [
    !a && /* @__PURE__ */ q.jsx(
      "button",
      {
        className: "psi-launcher",
        onClick: () => r(!0),
        title: "Open Project Psi",
        children: "Ψ"
      }
    ),
    /* @__PURE__ */ q.jsxs("div", { className: `psi-sidebar ${a ? "open" : ""}`, children: [
      /* @__PURE__ */ q.jsxs("div", { className: "psi-header", children: [
        /* @__PURE__ */ q.jsxs("div", { className: "psi-title-alpha", children: [
          /* @__PURE__ */ q.jsx(
            "button",
            {
              className: "psi-home-btn",
              onClick: f,
              title: "Back to agent launcher",
              children: "⌂"
            }
          ),
          /* @__PURE__ */ q.jsx("span", { children: "Project Psi" }),
          /* @__PURE__ */ q.jsx("span", { className: "psi-alpha-badge", title: "Alpha Development Phase", children: "α" })
        ] }),
        /* @__PURE__ */ q.jsx(
          "button",
          {
            className: "psi-close-btn",
            onClick: h,
            title: "Close sidebar",
            children: "✕"
          }
        )
      ] }),
      /* @__PURE__ */ q.jsx("div", { className: "psi-content", children: i })
    ] }),
    a && /* @__PURE__ */ q.jsx("div", { className: "psi-overlay", onClick: h })
  ] });
}, x1 = () => {
  const i = tp(), a = ue((h) => h.availableAgents), { setActiveAgent: r, setShowAgentLauncher: c } = ue();
  if (!i)
    return null;
  const s = (h) => {
    r(h), c(!1);
  }, f = (h) => {
    h.target === h.currentTarget && c(!1);
  };
  return /* @__PURE__ */ q.jsx("div", { className: "psi-launcher-overlay", onClick: f, children: /* @__PURE__ */ q.jsxs("div", { className: "psi-launcher-container", children: [
    /* @__PURE__ */ q.jsxs("div", { className: "psi-launcher-center", children: [
      /* @__PURE__ */ q.jsx("div", { className: "psi-launcher-icon", children: "Ψ" }),
      /* @__PURE__ */ q.jsx("div", { className: "psi-launcher-text", children: "Select Agent" })
    ] }),
    /* @__PURE__ */ q.jsx("div", { className: "psi-launcher-agents", children: a.map((h, p) => {
      const g = a.length, d = p / g * Math.PI * 2 - Math.PI / 2, v = 120, S = Math.cos(d) * v, E = Math.sin(d) * v;
      return /* @__PURE__ */ q.jsxs(
        "button",
        {
          className: `psi-launcher-agent ${h.enabled ? "enabled" : "disabled"}`,
          style: {
            transform: `translate(calc(-50% + ${S}px), calc(-50% + ${E}px))`
          },
          onClick: () => h.enabled && s(h.id),
          title: h.description,
          disabled: !h.enabled,
          children: [
            /* @__PURE__ */ q.jsx("div", { className: "psi-agent-btn-icon", children: h.icon }),
            /* @__PURE__ */ q.jsx("div", { className: "psi-agent-btn-name", children: h.name })
          ]
        },
        h.id
      );
    }) })
  ] }) });
}, md = () => {
  const i = ue((f) => f.availableAgents), { setActiveAgent: a, setShowAgentLauncher: r } = ue(), c = i.filter((f) => f.enabled), s = (f) => {
    a(f.id), r(!1);
  };
  return /* @__PURE__ */ q.jsxs("div", { className: "psi-home-view", children: [
    /* @__PURE__ */ q.jsxs("div", { className: "psi-home-header", children: [
      /* @__PURE__ */ q.jsx("h2", { children: "Welcome to Project Psi" }),
      /* @__PURE__ */ q.jsx("p", { children: "Your AI browser copilot" })
    ] }),
    /* @__PURE__ */ q.jsxs("div", { className: "psi-home-agents", children: [
      /* @__PURE__ */ q.jsx("h3", { children: "Available Agents" }),
      /* @__PURE__ */ q.jsx("div", { className: "psi-agent-grid", children: c.map((f) => /* @__PURE__ */ q.jsxs(
        "button",
        {
          className: "psi-agent-card",
          onClick: () => s(f),
          children: [
            /* @__PURE__ */ q.jsx("div", { className: "psi-agent-card-icon", children: f.icon }),
            /* @__PURE__ */ q.jsxs("div", { className: "psi-agent-card-content", children: [
              /* @__PURE__ */ q.jsx("h4", { children: f.name }),
              /* @__PURE__ */ q.jsx("p", { children: f.description })
            ] }),
            /* @__PURE__ */ q.jsx("div", { className: "psi-agent-card-arrow", children: "→" })
          ]
        },
        f.id
      )) })
    ] }),
    /* @__PURE__ */ q.jsxs("div", { className: "psi-home-features", children: [
      /* @__PURE__ */ q.jsx("h3", { children: "Features" }),
      /* @__PURE__ */ q.jsxs("ul", { children: [
        /* @__PURE__ */ q.jsx("li", { children: "Multi-agent AI system" }),
        /* @__PURE__ */ q.jsx("li", { children: "Long-term memory" }),
        /* @__PURE__ */ q.jsx("li", { children: "Automation workflow" }),
        /* @__PURE__ */ q.jsx("li", { children: "Voice interaction (coming soon)" }),
        /* @__PURE__ */ q.jsx("li", { children: "Tool-based reasoning" })
      ] })
    ] }),
    /* @__PURE__ */ q.jsx("div", { className: "psi-home-footer", children: /* @__PURE__ */ q.jsx("p", { children: "Built on Qwen 3 8B via Ollama" }) })
  ] });
};
function E1(i, a) {
  const r = {};
  return (i[i.length - 1] === "" ? [...i, ""] : i).join(
    (r.padRight ? " " : "") + "," + (r.padLeft === !1 ? "" : " ")
  ).trim();
}
const A1 = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, T1 = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, z1 = {};
function dd(i, a) {
  return (z1.jsx ? T1 : A1).test(i);
}
const C1 = /[ \t\n\f\r]/g;
function _1(i) {
  return typeof i == "object" ? i.type === "text" ? pd(i.value) : !1 : pd(i);
}
function pd(i) {
  return i.replace(C1, "") === "";
}
class Sa {
  /**
   * @param {SchemaType['property']} property
   *   Property.
   * @param {SchemaType['normal']} normal
   *   Normal.
   * @param {Space | undefined} [space]
   *   Space.
   * @returns
   *   Schema.
   */
  constructor(a, r, c) {
    this.normal = r, this.property = a, c && (this.space = c);
  }
}
Sa.prototype.normal = {};
Sa.prototype.property = {};
Sa.prototype.space = void 0;
function ep(i, a) {
  const r = {}, c = {};
  for (const s of i)
    Object.assign(r, s.property), Object.assign(c, s.normal);
  return new Sa(r, c, a);
}
function Ro(i) {
  return i.toLowerCase();
}
class _e {
  /**
   * @param {string} property
   *   Property.
   * @param {string} attribute
   *   Attribute.
   * @returns
   *   Info.
   */
  constructor(a, r) {
    this.attribute = r, this.property = a;
  }
}
_e.prototype.attribute = "";
_e.prototype.booleanish = !1;
_e.prototype.boolean = !1;
_e.prototype.commaOrSpaceSeparated = !1;
_e.prototype.commaSeparated = !1;
_e.prototype.defined = !1;
_e.prototype.mustUseProperty = !1;
_e.prototype.number = !1;
_e.prototype.overloadedBoolean = !1;
_e.prototype.property = "";
_e.prototype.spaceSeparated = !1;
_e.prototype.space = void 0;
let O1 = 0;
const yt = xl(), ee = xl(), ko = xl(), X = xl(), Yt = xl(), hi = xl(), je = xl();
function xl() {
  return 2 ** ++O1;
}
const Uo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: yt,
  booleanish: ee,
  commaOrSpaceSeparated: je,
  commaSeparated: hi,
  number: X,
  overloadedBoolean: ko,
  spaceSeparated: Yt
}, Symbol.toStringTag, { value: "Module" })), So = (
  /** @type {ReadonlyArray<keyof typeof types>} */
  Object.keys(Uo)
);
class Go extends _e {
  /**
   * @constructor
   * @param {string} property
   *   Property.
   * @param {string} attribute
   *   Attribute.
   * @param {number | null | undefined} [mask]
   *   Mask.
   * @param {Space | undefined} [space]
   *   Space.
   * @returns
   *   Info.
   */
  constructor(a, r, c, s) {
    let f = -1;
    if (super(a, r), yd(this, "space", s), typeof c == "number")
      for (; ++f < So.length; ) {
        const h = So[f];
        yd(this, So[f], (c & Uo[h]) === Uo[h]);
      }
  }
}
Go.prototype.defined = !0;
function yd(i, a, r) {
  r && (i[a] = r);
}
function di(i) {
  const a = {}, r = {};
  for (const [c, s] of Object.entries(i.properties)) {
    const f = new Go(
      c,
      i.transform(i.attributes || {}, c),
      s,
      i.space
    );
    i.mustUseProperty && i.mustUseProperty.includes(c) && (f.mustUseProperty = !0), a[c] = f, r[Ro(c)] = c, r[Ro(f.attribute)] = c;
  }
  return new Sa(a, r, i.space);
}
const np = di({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: ee,
    ariaAutoComplete: null,
    ariaBusy: ee,
    ariaChecked: ee,
    ariaColCount: X,
    ariaColIndex: X,
    ariaColSpan: X,
    ariaControls: Yt,
    ariaCurrent: null,
    ariaDescribedBy: Yt,
    ariaDetails: null,
    ariaDisabled: ee,
    ariaDropEffect: Yt,
    ariaErrorMessage: null,
    ariaExpanded: ee,
    ariaFlowTo: Yt,
    ariaGrabbed: ee,
    ariaHasPopup: null,
    ariaHidden: ee,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: Yt,
    ariaLevel: X,
    ariaLive: null,
    ariaModal: ee,
    ariaMultiLine: ee,
    ariaMultiSelectable: ee,
    ariaOrientation: null,
    ariaOwns: Yt,
    ariaPlaceholder: null,
    ariaPosInSet: X,
    ariaPressed: ee,
    ariaReadOnly: ee,
    ariaRelevant: null,
    ariaRequired: ee,
    ariaRoleDescription: Yt,
    ariaRowCount: X,
    ariaRowIndex: X,
    ariaRowSpan: X,
    ariaSelected: ee,
    ariaSetSize: X,
    ariaSort: null,
    ariaValueMax: X,
    ariaValueMin: X,
    ariaValueNow: X,
    ariaValueText: null,
    role: null
  },
  transform(i, a) {
    return a === "role" ? a : "aria-" + a.slice(4).toLowerCase();
  }
});
function lp(i, a) {
  return a in i ? i[a] : a;
}
function ip(i, a) {
  return lp(i, a.toLowerCase());
}
const M1 = di({
  attributes: {
    acceptcharset: "accept-charset",
    classname: "class",
    htmlfor: "for",
    httpequiv: "http-equiv"
  },
  mustUseProperty: ["checked", "multiple", "muted", "selected"],
  properties: {
    // Standard Properties.
    abbr: null,
    accept: hi,
    acceptCharset: Yt,
    accessKey: Yt,
    action: null,
    allow: null,
    allowFullScreen: yt,
    allowPaymentRequest: yt,
    allowUserMedia: yt,
    alt: null,
    as: null,
    async: yt,
    autoCapitalize: null,
    autoComplete: Yt,
    autoFocus: yt,
    autoPlay: yt,
    blocking: Yt,
    capture: null,
    charSet: null,
    checked: yt,
    cite: null,
    className: Yt,
    cols: X,
    colSpan: null,
    content: null,
    contentEditable: ee,
    controls: yt,
    controlsList: Yt,
    coords: X | hi,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: yt,
    defer: yt,
    dir: null,
    dirName: null,
    disabled: yt,
    download: ko,
    draggable: ee,
    encType: null,
    enterKeyHint: null,
    fetchPriority: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: yt,
    formTarget: null,
    headers: Yt,
    height: X,
    hidden: ko,
    high: X,
    href: null,
    hrefLang: null,
    htmlFor: Yt,
    httpEquiv: Yt,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: yt,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: yt,
    itemId: null,
    itemProp: Yt,
    itemRef: Yt,
    itemScope: yt,
    itemType: Yt,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: yt,
    low: X,
    manifest: null,
    max: null,
    maxLength: X,
    media: null,
    method: null,
    min: null,
    minLength: X,
    multiple: yt,
    muted: yt,
    name: null,
    nonce: null,
    noModule: yt,
    noValidate: yt,
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
    open: yt,
    optimum: X,
    pattern: null,
    ping: Yt,
    placeholder: null,
    playsInline: yt,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: yt,
    referrerPolicy: null,
    rel: Yt,
    required: yt,
    reversed: yt,
    rows: X,
    rowSpan: X,
    sandbox: Yt,
    scope: null,
    scoped: yt,
    seamless: yt,
    selected: yt,
    shadowRootClonable: yt,
    shadowRootDelegatesFocus: yt,
    shadowRootMode: null,
    shape: null,
    size: X,
    sizes: null,
    slot: null,
    span: X,
    spellCheck: ee,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: X,
    step: null,
    style: null,
    tabIndex: X,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: yt,
    useMap: null,
    value: ee,
    width: X,
    wrap: null,
    writingSuggestions: null,
    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null,
    // Several. Use CSS `text-align` instead,
    aLink: null,
    // `<body>`. Use CSS `a:active {color}` instead
    archive: Yt,
    // `<object>`. List of URIs to archives
    axis: null,
    // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null,
    // `<body>`. Use CSS `background-image` instead
    bgColor: null,
    // `<body>` and table elements. Use CSS `background-color` instead
    border: X,
    // `<table>`. Use CSS `border-width` instead,
    borderColor: null,
    // `<table>`. Use CSS `border-color` instead,
    bottomMargin: X,
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
    compact: yt,
    // Lists. Use CSS to reduce space between items instead
    declare: yt,
    // `<object>`
    event: null,
    // `<script>`
    face: null,
    // `<font>`. Use CSS instead
    frame: null,
    // `<table>`
    frameBorder: null,
    // `<iframe>`. Use CSS `border` instead
    hSpace: X,
    // `<img>` and `<object>`
    leftMargin: X,
    // `<body>`
    link: null,
    // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null,
    // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null,
    // `<img>`. Use a `<picture>`
    marginHeight: X,
    // `<body>`
    marginWidth: X,
    // `<body>`
    noResize: yt,
    // `<frame>`
    noHref: yt,
    // `<area>`. Use no href instead of an explicit `nohref`
    noShade: yt,
    // `<hr>`. Use background-color and height instead of borders
    noWrap: yt,
    // `<td>` and `<th>`
    object: null,
    // `<applet>`
    profile: null,
    // `<head>`
    prompt: null,
    // `<isindex>`
    rev: null,
    // `<link>`
    rightMargin: X,
    // `<body>`
    rules: null,
    // `<table>`
    scheme: null,
    // `<meta>`
    scrolling: ee,
    // `<frame>`. Use overflow in the child context
    standby: null,
    // `<object>`
    summary: null,
    // `<table>`
    text: null,
    // `<body>`. Use CSS `color` instead
    topMargin: X,
    // `<body>`
    valueType: null,
    // `<param>`
    version: null,
    // `<html>`. Use a doctype.
    vAlign: null,
    // Several. Use CSS `vertical-align` instead
    vLink: null,
    // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: X,
    // `<img>` and `<object>`
    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: yt,
    disableRemotePlayback: yt,
    prefix: null,
    property: null,
    results: X,
    security: null,
    unselectable: null
  },
  space: "html",
  transform: ip
}), D1 = di({
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
  properties: {
    about: je,
    accentHeight: X,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: X,
    amplitude: X,
    arabicForm: null,
    ascent: X,
    attributeName: null,
    attributeType: null,
    azimuth: X,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: X,
    by: null,
    calcMode: null,
    capHeight: X,
    className: Yt,
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
    descent: X,
    diffuseConstant: X,
    direction: null,
    display: null,
    dur: null,
    divisor: X,
    dominantBaseline: null,
    download: yt,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: X,
    enableBackground: null,
    end: null,
    event: null,
    exponent: X,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: X,
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
    g1: hi,
    g2: hi,
    glyphName: hi,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: X,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: X,
    horizOriginX: X,
    horizOriginY: X,
    id: null,
    ideographic: X,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: X,
    k: X,
    k1: X,
    k2: X,
    k3: X,
    k4: X,
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
    limitingConeAngle: X,
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
    mediaSize: X,
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
    overlinePosition: X,
    overlineThickness: X,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: X,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: Yt,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: X,
    pointsAtY: X,
    pointsAtZ: X,
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
    specularConstant: X,
    specularExponent: X,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: X,
    strikethroughThickness: X,
    string: null,
    stroke: null,
    strokeDashArray: je,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: X,
    strokeOpacity: X,
    strokeWidth: null,
    style: null,
    surfaceScale: X,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: je,
    tabIndex: X,
    tableValues: null,
    target: null,
    targetX: X,
    targetY: X,
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
    underlinePosition: X,
    underlineThickness: X,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: X,
    values: null,
    vAlphabetic: X,
    vMathematical: X,
    vectorEffect: null,
    vHanging: X,
    vIdeographic: X,
    version: null,
    vertAdvY: X,
    vertOriginX: X,
    vertOriginY: X,
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
    xHeight: X,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  },
  space: "svg",
  transform: lp
}), ap = di({
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null
  },
  space: "xlink",
  transform(i, a) {
    return "xlink:" + a.slice(5).toLowerCase();
  }
}), up = di({
  attributes: { xmlnsxlink: "xmlns:xlink" },
  properties: { xmlnsXLink: null, xmlns: null },
  space: "xmlns",
  transform: ip
}), rp = di({
  properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
  space: "xml",
  transform(i, a) {
    return "xml:" + a.slice(3).toLowerCase();
  }
}), N1 = {
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
}, w1 = /[A-Z]/g, gd = /-[a-z]/g, R1 = /^data[-\w.:]+$/i;
function k1(i, a) {
  const r = Ro(a);
  let c = a, s = _e;
  if (r in i.normal)
    return i.property[i.normal[r]];
  if (r.length > 4 && r.slice(0, 4) === "data" && R1.test(a)) {
    if (a.charAt(4) === "-") {
      const f = a.slice(5).replace(gd, j1);
      c = "data" + f.charAt(0).toUpperCase() + f.slice(1);
    } else {
      const f = a.slice(4);
      if (!gd.test(f)) {
        let h = f.replace(w1, U1);
        h.charAt(0) !== "-" && (h = "-" + h), a = "data" + h;
      }
    }
    s = Go;
  }
  return new s(c, a);
}
function U1(i) {
  return "-" + i.toLowerCase();
}
function j1(i) {
  return i.charAt(1).toUpperCase();
}
const B1 = ep([np, M1, ap, up, rp], "html"), Qo = ep([np, D1, ap, up, rp], "svg");
function H1(i) {
  return i.join(" ").trim();
}
var si = {}, bo, vd;
function L1() {
  if (vd) return bo;
  vd = 1;
  var i = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, a = /\n/g, r = /^\s*/, c = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, s = /^:\s*/, f = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, h = /^[;\s]*/, p = /^\s+|\s+$/g, g = `
`, d = "/", v = "*", S = "", E = "comment", x = "declaration";
  function Y(F, R) {
    if (typeof F != "string")
      throw new TypeError("First argument must be a string");
    if (!F) return [];
    R = R || {};
    var nt = 1, Q = 1;
    function st(lt) {
      var Z = lt.match(a);
      Z && (nt += Z.length);
      var N = lt.lastIndexOf(g);
      Q = ~N ? lt.length - N : Q + lt.length;
    }
    function vt() {
      var lt = { line: nt, column: Q };
      return function(Z) {
        return Z.position = new L(lt), dt(), Z;
      };
    }
    function L(lt) {
      this.start = lt, this.end = { line: nt, column: Q }, this.source = R.source;
    }
    L.prototype.content = F;
    function W(lt) {
      var Z = new Error(
        R.source + ":" + nt + ":" + Q + ": " + lt
      );
      if (Z.reason = lt, Z.filename = R.source, Z.line = nt, Z.column = Q, Z.source = F, !R.silent) throw Z;
    }
    function mt(lt) {
      var Z = lt.exec(F);
      if (Z) {
        var N = Z[0];
        return st(N), F = F.slice(N.length), Z;
      }
    }
    function dt() {
      mt(r);
    }
    function zt(lt) {
      var Z;
      for (lt = lt || []; Z = P(); )
        Z !== !1 && lt.push(Z);
      return lt;
    }
    function P() {
      var lt = vt();
      if (!(d != F.charAt(0) || v != F.charAt(1))) {
        for (var Z = 2; S != F.charAt(Z) && (v != F.charAt(Z) || d != F.charAt(Z + 1)); )
          ++Z;
        if (Z += 2, S === F.charAt(Z - 1))
          return W("End of comment missing");
        var N = F.slice(2, Z - 2);
        return Q += 2, st(N), F = F.slice(Z), Q += 2, lt({
          type: E,
          comment: N
        });
      }
    }
    function I() {
      var lt = vt(), Z = mt(c);
      if (Z) {
        if (P(), !mt(s)) return W("property missing ':'");
        var N = mt(f), V = lt({
          type: x,
          property: G(Z[0].replace(i, S)),
          value: N ? G(N[0].replace(i, S)) : S
        });
        return mt(h), V;
      }
    }
    function _t() {
      var lt = [];
      zt(lt);
      for (var Z; Z = I(); )
        Z !== !1 && (lt.push(Z), zt(lt));
      return lt;
    }
    return dt(), _t();
  }
  function G(F) {
    return F ? F.replace(p, S) : S;
  }
  return bo = Y, bo;
}
var Sd;
function q1() {
  if (Sd) return si;
  Sd = 1;
  var i = si && si.__importDefault || function(c) {
    return c && c.__esModule ? c : { default: c };
  };
  Object.defineProperty(si, "__esModule", { value: !0 }), si.default = r;
  const a = i(L1());
  function r(c, s) {
    let f = null;
    if (!c || typeof c != "string")
      return f;
    const h = (0, a.default)(c), p = typeof s == "function";
    return h.forEach((g) => {
      if (g.type !== "declaration")
        return;
      const { property: d, value: v } = g;
      p ? s(d, v, g) : v && (f = f || {}, f[d] = v);
    }), f;
  }
  return si;
}
var fa = {}, bd;
function Y1() {
  if (bd) return fa;
  bd = 1, Object.defineProperty(fa, "__esModule", { value: !0 }), fa.camelCase = void 0;
  var i = /^--[a-zA-Z0-9_-]+$/, a = /-([a-z])/g, r = /^[^-]+$/, c = /^-(webkit|moz|ms|o|khtml)-/, s = /^-(ms)-/, f = function(d) {
    return !d || r.test(d) || i.test(d);
  }, h = function(d, v) {
    return v.toUpperCase();
  }, p = function(d, v) {
    return "".concat(v, "-");
  }, g = function(d, v) {
    return v === void 0 && (v = {}), f(d) ? d : (d = d.toLowerCase(), v.reactCompat ? d = d.replace(s, p) : d = d.replace(c, p), d.replace(a, h));
  };
  return fa.camelCase = g, fa;
}
var ha, xd;
function V1() {
  if (xd) return ha;
  xd = 1;
  var i = ha && ha.__importDefault || function(s) {
    return s && s.__esModule ? s : { default: s };
  }, a = i(q1()), r = Y1();
  function c(s, f) {
    var h = {};
    return !s || typeof s != "string" || (0, a.default)(s, function(p, g) {
      p && g && (h[(0, r.camelCase)(p, f)] = g);
    }), h;
  }
  return c.default = c, ha = c, ha;
}
var X1 = V1();
const G1 = /* @__PURE__ */ Ku(X1), cp = op("end"), Zo = op("start");
function op(i) {
  return a;
  function a(r) {
    const c = r && r.position && r.position[i] || {};
    if (typeof c.line == "number" && c.line > 0 && typeof c.column == "number" && c.column > 0)
      return {
        line: c.line,
        column: c.column,
        offset: typeof c.offset == "number" && c.offset > -1 ? c.offset : void 0
      };
  }
}
function Q1(i) {
  const a = Zo(i), r = cp(i);
  if (a && r)
    return { start: a, end: r };
}
function pa(i) {
  return !i || typeof i != "object" ? "" : "position" in i || "type" in i ? Ed(i.position) : "start" in i || "end" in i ? Ed(i) : "line" in i || "column" in i ? jo(i) : "";
}
function jo(i) {
  return Ad(i && i.line) + ":" + Ad(i && i.column);
}
function Ed(i) {
  return jo(i && i.start) + "-" + jo(i && i.end);
}
function Ad(i) {
  return i && typeof i == "number" ? i : 1;
}
class me extends Error {
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
  constructor(a, r, c) {
    super(), typeof r == "string" && (c = r, r = void 0);
    let s = "", f = {}, h = !1;
    if (r && ("line" in r && "column" in r ? f = { place: r } : "start" in r && "end" in r ? f = { place: r } : "type" in r ? f = {
      ancestors: [r],
      place: r.position
    } : f = { ...r }), typeof a == "string" ? s = a : !f.cause && a && (h = !0, s = a.message, f.cause = a), !f.ruleId && !f.source && typeof c == "string") {
      const g = c.indexOf(":");
      g === -1 ? f.ruleId = c : (f.source = c.slice(0, g), f.ruleId = c.slice(g + 1));
    }
    if (!f.place && f.ancestors && f.ancestors) {
      const g = f.ancestors[f.ancestors.length - 1];
      g && (f.place = g.position);
    }
    const p = f.place && "start" in f.place ? f.place.start : f.place;
    this.ancestors = f.ancestors || void 0, this.cause = f.cause || void 0, this.column = p ? p.column : void 0, this.fatal = void 0, this.file = "", this.message = s, this.line = p ? p.line : void 0, this.name = pa(f.place) || "1:1", this.place = f.place || void 0, this.reason = this.message, this.ruleId = f.ruleId || void 0, this.source = f.source || void 0, this.stack = h && f.cause && typeof f.cause.stack == "string" ? f.cause.stack : "", this.actual = void 0, this.expected = void 0, this.note = void 0, this.url = void 0;
  }
}
me.prototype.file = "";
me.prototype.name = "";
me.prototype.reason = "";
me.prototype.message = "";
me.prototype.stack = "";
me.prototype.column = void 0;
me.prototype.line = void 0;
me.prototype.ancestors = void 0;
me.prototype.cause = void 0;
me.prototype.fatal = void 0;
me.prototype.place = void 0;
me.prototype.ruleId = void 0;
me.prototype.source = void 0;
const Ko = {}.hasOwnProperty, Z1 = /* @__PURE__ */ new Map(), K1 = /[A-Z]/g, J1 = /* @__PURE__ */ new Set(["table", "tbody", "thead", "tfoot", "tr"]), F1 = /* @__PURE__ */ new Set(["td", "th"]), sp = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function I1(i, a) {
  if (!a || a.Fragment === void 0)
    throw new TypeError("Expected `Fragment` in options");
  const r = a.filePath || void 0;
  let c;
  if (a.development) {
    if (typeof a.jsxDEV != "function")
      throw new TypeError(
        "Expected `jsxDEV` in options when `development: true`"
      );
    c = i0(r, a.jsxDEV);
  } else {
    if (typeof a.jsx != "function")
      throw new TypeError("Expected `jsx` in production options");
    if (typeof a.jsxs != "function")
      throw new TypeError("Expected `jsxs` in production options");
    c = l0(r, a.jsx, a.jsxs);
  }
  const s = {
    Fragment: a.Fragment,
    ancestors: [],
    components: a.components || {},
    create: c,
    elementAttributeNameCase: a.elementAttributeNameCase || "react",
    evaluater: a.createEvaluater ? a.createEvaluater() : void 0,
    filePath: r,
    ignoreInvalidStyle: a.ignoreInvalidStyle || !1,
    passKeys: a.passKeys !== !1,
    passNode: a.passNode || !1,
    schema: a.space === "svg" ? Qo : B1,
    stylePropertyNameCase: a.stylePropertyNameCase || "dom",
    tableCellAlignToStyle: a.tableCellAlignToStyle !== !1
  }, f = fp(s, i, void 0);
  return f && typeof f != "string" ? f : s.create(
    i,
    s.Fragment,
    { children: f || void 0 },
    void 0
  );
}
function fp(i, a, r) {
  if (a.type === "element")
    return W1(i, a, r);
  if (a.type === "mdxFlowExpression" || a.type === "mdxTextExpression")
    return $1(i, a);
  if (a.type === "mdxJsxFlowElement" || a.type === "mdxJsxTextElement")
    return t0(i, a, r);
  if (a.type === "mdxjsEsm")
    return P1(i, a);
  if (a.type === "root")
    return e0(i, a, r);
  if (a.type === "text")
    return n0(i, a);
}
function W1(i, a, r) {
  const c = i.schema;
  let s = c;
  a.tagName.toLowerCase() === "svg" && c.space === "html" && (s = Qo, i.schema = s), i.ancestors.push(a);
  const f = mp(i, a.tagName, !1), h = a0(i, a);
  let p = Fo(i, a);
  return J1.has(a.tagName) && (p = p.filter(function(g) {
    return typeof g == "string" ? !_1(g) : !0;
  })), hp(i, h, f, a), Jo(h, p), i.ancestors.pop(), i.schema = c, i.create(a, f, h, r);
}
function $1(i, a) {
  if (a.data && a.data.estree && i.evaluater) {
    const c = a.data.estree.body[0];
    return c.type, /** @type {Child | undefined} */
    i.evaluater.evaluateExpression(c.expression);
  }
  va(i, a.position);
}
function P1(i, a) {
  if (a.data && a.data.estree && i.evaluater)
    return (
      /** @type {Child | undefined} */
      i.evaluater.evaluateProgram(a.data.estree)
    );
  va(i, a.position);
}
function t0(i, a, r) {
  const c = i.schema;
  let s = c;
  a.name === "svg" && c.space === "html" && (s = Qo, i.schema = s), i.ancestors.push(a);
  const f = a.name === null ? i.Fragment : mp(i, a.name, !0), h = u0(i, a), p = Fo(i, a);
  return hp(i, h, f, a), Jo(h, p), i.ancestors.pop(), i.schema = c, i.create(a, f, h, r);
}
function e0(i, a, r) {
  const c = {};
  return Jo(c, Fo(i, a)), i.create(a, i.Fragment, c, r);
}
function n0(i, a) {
  return a.value;
}
function hp(i, a, r, c) {
  typeof r != "string" && r !== i.Fragment && i.passNode && (a.node = c);
}
function Jo(i, a) {
  if (a.length > 0) {
    const r = a.length > 1 ? a : a[0];
    r && (i.children = r);
  }
}
function l0(i, a, r) {
  return c;
  function c(s, f, h, p) {
    const d = Array.isArray(h.children) ? r : a;
    return p ? d(f, h, p) : d(f, h);
  }
}
function i0(i, a) {
  return r;
  function r(c, s, f, h) {
    const p = Array.isArray(f.children), g = Zo(c);
    return a(
      s,
      f,
      h,
      p,
      {
        columnNumber: g ? g.column - 1 : void 0,
        fileName: i,
        lineNumber: g ? g.line : void 0
      },
      void 0
    );
  }
}
function a0(i, a) {
  const r = {};
  let c, s;
  for (s in a.properties)
    if (s !== "children" && Ko.call(a.properties, s)) {
      const f = r0(i, s, a.properties[s]);
      if (f) {
        const [h, p] = f;
        i.tableCellAlignToStyle && h === "align" && typeof p == "string" && F1.has(a.tagName) ? c = p : r[h] = p;
      }
    }
  if (c) {
    const f = (
      /** @type {Style} */
      r.style || (r.style = {})
    );
    f[i.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = c;
  }
  return r;
}
function u0(i, a) {
  const r = {};
  for (const c of a.attributes)
    if (c.type === "mdxJsxExpressionAttribute")
      if (c.data && c.data.estree && i.evaluater) {
        const f = c.data.estree.body[0];
        f.type;
        const h = f.expression;
        h.type;
        const p = h.properties[0];
        p.type, Object.assign(
          r,
          i.evaluater.evaluateExpression(p.argument)
        );
      } else
        va(i, a.position);
    else {
      const s = c.name;
      let f;
      if (c.value && typeof c.value == "object")
        if (c.value.data && c.value.data.estree && i.evaluater) {
          const p = c.value.data.estree.body[0];
          p.type, f = i.evaluater.evaluateExpression(p.expression);
        } else
          va(i, a.position);
      else
        f = c.value === null ? !0 : c.value;
      r[s] = /** @type {Props[keyof Props]} */
      f;
    }
  return r;
}
function Fo(i, a) {
  const r = [];
  let c = -1;
  const s = i.passKeys ? /* @__PURE__ */ new Map() : Z1;
  for (; ++c < a.children.length; ) {
    const f = a.children[c];
    let h;
    if (i.passKeys) {
      const g = f.type === "element" ? f.tagName : f.type === "mdxJsxFlowElement" || f.type === "mdxJsxTextElement" ? f.name : void 0;
      if (g) {
        const d = s.get(g) || 0;
        h = g + "-" + d, s.set(g, d + 1);
      }
    }
    const p = fp(i, f, h);
    p !== void 0 && r.push(p);
  }
  return r;
}
function r0(i, a, r) {
  const c = k1(i.schema, a);
  if (!(r == null || typeof r == "number" && Number.isNaN(r))) {
    if (Array.isArray(r) && (r = c.commaSeparated ? E1(r) : H1(r)), c.property === "style") {
      let s = typeof r == "object" ? r : c0(i, String(r));
      return i.stylePropertyNameCase === "css" && (s = o0(s)), ["style", s];
    }
    return [
      i.elementAttributeNameCase === "react" && c.space ? N1[c.property] || c.property : c.attribute,
      r
    ];
  }
}
function c0(i, a) {
  try {
    return G1(a, { reactCompat: !0 });
  } catch (r) {
    if (i.ignoreInvalidStyle)
      return {};
    const c = (
      /** @type {Error} */
      r
    ), s = new me("Cannot parse `style` attribute", {
      ancestors: i.ancestors,
      cause: c,
      ruleId: "style",
      source: "hast-util-to-jsx-runtime"
    });
    throw s.file = i.filePath || void 0, s.url = sp + "#cannot-parse-style-attribute", s;
  }
}
function mp(i, a, r) {
  let c;
  if (!r)
    c = { type: "Literal", value: a };
  else if (a.includes(".")) {
    const s = a.split(".");
    let f = -1, h;
    for (; ++f < s.length; ) {
      const p = dd(s[f]) ? { type: "Identifier", name: s[f] } : { type: "Literal", value: s[f] };
      h = h ? {
        type: "MemberExpression",
        object: h,
        property: p,
        computed: !!(f && p.type === "Literal"),
        optional: !1
      } : p;
    }
    c = h;
  } else
    c = dd(a) && !/^[a-z]/.test(a) ? { type: "Identifier", name: a } : { type: "Literal", value: a };
  if (c.type === "Literal") {
    const s = (
      /** @type {string | number} */
      c.value
    );
    return Ko.call(i.components, s) ? i.components[s] : s;
  }
  if (i.evaluater)
    return i.evaluater.evaluateExpression(c);
  va(i);
}
function va(i, a) {
  const r = new me(
    "Cannot handle MDX estrees without `createEvaluater`",
    {
      ancestors: i.ancestors,
      place: a,
      ruleId: "mdx-estree",
      source: "hast-util-to-jsx-runtime"
    }
  );
  throw r.file = i.filePath || void 0, r.url = sp + "#cannot-handle-mdx-estrees-without-createevaluater", r;
}
function o0(i) {
  const a = {};
  let r;
  for (r in i)
    Ko.call(i, r) && (a[s0(r)] = i[r]);
  return a;
}
function s0(i) {
  let a = i.replace(K1, f0);
  return a.slice(0, 3) === "ms-" && (a = "-" + a), a;
}
function f0(i) {
  return "-" + i.toLowerCase();
}
const xo = {
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
}, h0 = {};
function m0(i, a) {
  const r = h0, c = typeof r.includeImageAlt == "boolean" ? r.includeImageAlt : !0, s = typeof r.includeHtml == "boolean" ? r.includeHtml : !0;
  return dp(i, c, s);
}
function dp(i, a, r) {
  if (d0(i)) {
    if ("value" in i)
      return i.type === "html" && !r ? "" : i.value;
    if (a && "alt" in i && i.alt)
      return i.alt;
    if ("children" in i)
      return Td(i.children, a, r);
  }
  return Array.isArray(i) ? Td(i, a, r) : "";
}
function Td(i, a, r) {
  const c = [];
  let s = -1;
  for (; ++s < i.length; )
    c[s] = dp(i[s], a, r);
  return c.join("");
}
function d0(i) {
  return !!(i && typeof i == "object");
}
const zd = document.createElement("i");
function Io(i) {
  const a = "&" + i + ";";
  zd.innerHTML = a;
  const r = zd.textContent;
  return r.charCodeAt(r.length - 1) === 59 && i !== "semi" || r === a ? !1 : r;
}
function cn(i, a, r, c) {
  const s = i.length;
  let f = 0, h;
  if (a < 0 ? a = -a > s ? 0 : s + a : a = a > s ? s : a, r = r > 0 ? r : 0, c.length < 1e4)
    h = Array.from(c), h.unshift(a, r), i.splice(...h);
  else
    for (r && i.splice(a, r); f < c.length; )
      h = c.slice(f, f + 1e4), h.unshift(a, 0), i.splice(...h), f += 1e4, a += 1e4;
}
function Fe(i, a) {
  return i.length > 0 ? (cn(i, i.length, 0, a), i) : a;
}
const Cd = {}.hasOwnProperty;
function p0(i) {
  const a = {};
  let r = -1;
  for (; ++r < i.length; )
    y0(a, i[r]);
  return a;
}
function y0(i, a) {
  let r;
  for (r in a) {
    const s = (Cd.call(i, r) ? i[r] : void 0) || (i[r] = {}), f = a[r];
    let h;
    if (f)
      for (h in f) {
        Cd.call(s, h) || (s[h] = []);
        const p = f[h];
        g0(
          // @ts-expect-error Looks like a list.
          s[h],
          Array.isArray(p) ? p : p ? [p] : []
        );
      }
  }
}
function g0(i, a) {
  let r = -1;
  const c = [];
  for (; ++r < a.length; )
    (a[r].add === "after" ? i : c).push(a[r]);
  cn(i, 0, 0, c);
}
function pp(i, a) {
  const r = Number.parseInt(i, a);
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
function mi(i) {
  return i.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const rn = nl(/[A-Za-z]/), Be = nl(/[\dA-Za-z]/), v0 = nl(/[#-'*+\--9=?A-Z^-~]/);
function Bo(i) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    i !== null && (i < 32 || i === 127)
  );
}
const Ho = nl(/\d/), S0 = nl(/[\dA-Fa-f]/), b0 = nl(/[!-/:-@[-`{-~]/);
function ot(i) {
  return i !== null && i < -2;
}
function Ce(i) {
  return i !== null && (i < 0 || i === 32);
}
function Nt(i) {
  return i === -2 || i === -1 || i === 32;
}
const x0 = nl(new RegExp("\\p{P}|\\p{S}", "u")), E0 = nl(/\s/);
function nl(i) {
  return a;
  function a(r) {
    return r !== null && r > -1 && i.test(String.fromCharCode(r));
  }
}
function pi(i) {
  const a = [];
  let r = -1, c = 0, s = 0;
  for (; ++r < i.length; ) {
    const f = i.charCodeAt(r);
    let h = "";
    if (f === 37 && Be(i.charCodeAt(r + 1)) && Be(i.charCodeAt(r + 2)))
      s = 2;
    else if (f < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(f)) || (h = String.fromCharCode(f));
    else if (f > 55295 && f < 57344) {
      const p = i.charCodeAt(r + 1);
      f < 56320 && p > 56319 && p < 57344 ? (h = String.fromCharCode(f, p), s = 1) : h = "�";
    } else
      h = String.fromCharCode(f);
    h && (a.push(i.slice(c, r), encodeURIComponent(h)), c = r + s + 1, h = ""), s && (r += s, s = 0);
  }
  return a.join("") + i.slice(c);
}
function Vt(i, a, r, c) {
  const s = c ? c - 1 : Number.POSITIVE_INFINITY;
  let f = 0;
  return h;
  function h(g) {
    return Nt(g) ? (i.enter(r), p(g)) : a(g);
  }
  function p(g) {
    return Nt(g) && f++ < s ? (i.consume(g), p) : (i.exit(r), a(g));
  }
}
const A0 = {
  tokenize: T0
};
function T0(i) {
  const a = i.attempt(this.parser.constructs.contentInitial, c, s);
  let r;
  return a;
  function c(p) {
    if (p === null) {
      i.consume(p);
      return;
    }
    return i.enter("lineEnding"), i.consume(p), i.exit("lineEnding"), Vt(i, a, "linePrefix");
  }
  function s(p) {
    return i.enter("paragraph"), f(p);
  }
  function f(p) {
    const g = i.enter("chunkText", {
      contentType: "text",
      previous: r
    });
    return r && (r.next = g), r = g, h(p);
  }
  function h(p) {
    if (p === null) {
      i.exit("chunkText"), i.exit("paragraph"), i.consume(p);
      return;
    }
    return ot(p) ? (i.consume(p), i.exit("chunkText"), f) : (i.consume(p), h);
  }
}
const z0 = {
  tokenize: C0
}, _d = {
  tokenize: _0
};
function C0(i) {
  const a = this, r = [];
  let c = 0, s, f, h;
  return p;
  function p(Q) {
    if (c < r.length) {
      const st = r[c];
      return a.containerState = st[1], i.attempt(st[0].continuation, g, d)(Q);
    }
    return d(Q);
  }
  function g(Q) {
    if (c++, a.containerState._closeFlow) {
      a.containerState._closeFlow = void 0, s && nt();
      const st = a.events.length;
      let vt = st, L;
      for (; vt--; )
        if (a.events[vt][0] === "exit" && a.events[vt][1].type === "chunkFlow") {
          L = a.events[vt][1].end;
          break;
        }
      R(c);
      let W = st;
      for (; W < a.events.length; )
        a.events[W][1].end = {
          ...L
        }, W++;
      return cn(a.events, vt + 1, 0, a.events.slice(st)), a.events.length = W, d(Q);
    }
    return p(Q);
  }
  function d(Q) {
    if (c === r.length) {
      if (!s)
        return E(Q);
      if (s.currentConstruct && s.currentConstruct.concrete)
        return Y(Q);
      a.interrupt = !!(s.currentConstruct && !s._gfmTableDynamicInterruptHack);
    }
    return a.containerState = {}, i.check(_d, v, S)(Q);
  }
  function v(Q) {
    return s && nt(), R(c), E(Q);
  }
  function S(Q) {
    return a.parser.lazy[a.now().line] = c !== r.length, h = a.now().offset, Y(Q);
  }
  function E(Q) {
    return a.containerState = {}, i.attempt(_d, x, Y)(Q);
  }
  function x(Q) {
    return c++, r.push([a.currentConstruct, a.containerState]), E(Q);
  }
  function Y(Q) {
    if (Q === null) {
      s && nt(), R(0), i.consume(Q);
      return;
    }
    return s = s || a.parser.flow(a.now()), i.enter("chunkFlow", {
      _tokenizer: s,
      contentType: "flow",
      previous: f
    }), G(Q);
  }
  function G(Q) {
    if (Q === null) {
      F(i.exit("chunkFlow"), !0), R(0), i.consume(Q);
      return;
    }
    return ot(Q) ? (i.consume(Q), F(i.exit("chunkFlow")), c = 0, a.interrupt = void 0, p) : (i.consume(Q), G);
  }
  function F(Q, st) {
    const vt = a.sliceStream(Q);
    if (st && vt.push(null), Q.previous = f, f && (f.next = Q), f = Q, s.defineSkip(Q.start), s.write(vt), a.parser.lazy[Q.start.line]) {
      let L = s.events.length;
      for (; L--; )
        if (
          // The token starts before the line ending…
          s.events[L][1].start.offset < h && // …and either is not ended yet…
          (!s.events[L][1].end || // …or ends after it.
          s.events[L][1].end.offset > h)
        )
          return;
      const W = a.events.length;
      let mt = W, dt, zt;
      for (; mt--; )
        if (a.events[mt][0] === "exit" && a.events[mt][1].type === "chunkFlow") {
          if (dt) {
            zt = a.events[mt][1].end;
            break;
          }
          dt = !0;
        }
      for (R(c), L = W; L < a.events.length; )
        a.events[L][1].end = {
          ...zt
        }, L++;
      cn(a.events, mt + 1, 0, a.events.slice(W)), a.events.length = L;
    }
  }
  function R(Q) {
    let st = r.length;
    for (; st-- > Q; ) {
      const vt = r[st];
      a.containerState = vt[1], vt[0].exit.call(a, i);
    }
    r.length = Q;
  }
  function nt() {
    s.write([null]), f = void 0, s = void 0, a.containerState._closeFlow = void 0;
  }
}
function _0(i, a, r) {
  return Vt(i, i.attempt(this.parser.constructs.document, a, r), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function Od(i) {
  if (i === null || Ce(i) || E0(i))
    return 1;
  if (x0(i))
    return 2;
}
function Wo(i, a, r) {
  const c = [];
  let s = -1;
  for (; ++s < i.length; ) {
    const f = i[s].resolveAll;
    f && !c.includes(f) && (a = f(a, r), c.push(f));
  }
  return a;
}
const Lo = {
  name: "attention",
  resolveAll: O0,
  tokenize: M0
};
function O0(i, a) {
  let r = -1, c, s, f, h, p, g, d, v;
  for (; ++r < i.length; )
    if (i[r][0] === "enter" && i[r][1].type === "attentionSequence" && i[r][1]._close) {
      for (c = r; c--; )
        if (i[c][0] === "exit" && i[c][1].type === "attentionSequence" && i[c][1]._open && // If the markers are the same:
        a.sliceSerialize(i[c][1]).charCodeAt(0) === a.sliceSerialize(i[r][1]).charCodeAt(0)) {
          if ((i[c][1]._close || i[r][1]._open) && (i[r][1].end.offset - i[r][1].start.offset) % 3 && !((i[c][1].end.offset - i[c][1].start.offset + i[r][1].end.offset - i[r][1].start.offset) % 3))
            continue;
          g = i[c][1].end.offset - i[c][1].start.offset > 1 && i[r][1].end.offset - i[r][1].start.offset > 1 ? 2 : 1;
          const S = {
            ...i[c][1].end
          }, E = {
            ...i[r][1].start
          };
          Md(S, -g), Md(E, g), h = {
            type: g > 1 ? "strongSequence" : "emphasisSequence",
            start: S,
            end: {
              ...i[c][1].end
            }
          }, p = {
            type: g > 1 ? "strongSequence" : "emphasisSequence",
            start: {
              ...i[r][1].start
            },
            end: E
          }, f = {
            type: g > 1 ? "strongText" : "emphasisText",
            start: {
              ...i[c][1].end
            },
            end: {
              ...i[r][1].start
            }
          }, s = {
            type: g > 1 ? "strong" : "emphasis",
            start: {
              ...h.start
            },
            end: {
              ...p.end
            }
          }, i[c][1].end = {
            ...h.start
          }, i[r][1].start = {
            ...p.end
          }, d = [], i[c][1].end.offset - i[c][1].start.offset && (d = Fe(d, [["enter", i[c][1], a], ["exit", i[c][1], a]])), d = Fe(d, [["enter", s, a], ["enter", h, a], ["exit", h, a], ["enter", f, a]]), d = Fe(d, Wo(a.parser.constructs.insideSpan.null, i.slice(c + 1, r), a)), d = Fe(d, [["exit", f, a], ["enter", p, a], ["exit", p, a], ["exit", s, a]]), i[r][1].end.offset - i[r][1].start.offset ? (v = 2, d = Fe(d, [["enter", i[r][1], a], ["exit", i[r][1], a]])) : v = 0, cn(i, c - 1, r - c + 3, d), r = c + d.length - v - 2;
          break;
        }
    }
  for (r = -1; ++r < i.length; )
    i[r][1].type === "attentionSequence" && (i[r][1].type = "data");
  return i;
}
function M0(i, a) {
  const r = this.parser.constructs.attentionMarkers.null, c = this.previous, s = Od(c);
  let f;
  return h;
  function h(g) {
    return f = g, i.enter("attentionSequence"), p(g);
  }
  function p(g) {
    if (g === f)
      return i.consume(g), p;
    const d = i.exit("attentionSequence"), v = Od(g), S = !v || v === 2 && s || r.includes(g), E = !s || s === 2 && v || r.includes(c);
    return d._open = !!(f === 42 ? S : S && (s || !E)), d._close = !!(f === 42 ? E : E && (v || !S)), a(g);
  }
}
function Md(i, a) {
  i.column += a, i.offset += a, i._bufferIndex += a;
}
const D0 = {
  name: "autolink",
  tokenize: N0
};
function N0(i, a, r) {
  let c = 0;
  return s;
  function s(x) {
    return i.enter("autolink"), i.enter("autolinkMarker"), i.consume(x), i.exit("autolinkMarker"), i.enter("autolinkProtocol"), f;
  }
  function f(x) {
    return rn(x) ? (i.consume(x), h) : x === 64 ? r(x) : d(x);
  }
  function h(x) {
    return x === 43 || x === 45 || x === 46 || Be(x) ? (c = 1, p(x)) : d(x);
  }
  function p(x) {
    return x === 58 ? (i.consume(x), c = 0, g) : (x === 43 || x === 45 || x === 46 || Be(x)) && c++ < 32 ? (i.consume(x), p) : (c = 0, d(x));
  }
  function g(x) {
    return x === 62 ? (i.exit("autolinkProtocol"), i.enter("autolinkMarker"), i.consume(x), i.exit("autolinkMarker"), i.exit("autolink"), a) : x === null || x === 32 || x === 60 || Bo(x) ? r(x) : (i.consume(x), g);
  }
  function d(x) {
    return x === 64 ? (i.consume(x), v) : v0(x) ? (i.consume(x), d) : r(x);
  }
  function v(x) {
    return Be(x) ? S(x) : r(x);
  }
  function S(x) {
    return x === 46 ? (i.consume(x), c = 0, v) : x === 62 ? (i.exit("autolinkProtocol").type = "autolinkEmail", i.enter("autolinkMarker"), i.consume(x), i.exit("autolinkMarker"), i.exit("autolink"), a) : E(x);
  }
  function E(x) {
    if ((x === 45 || Be(x)) && c++ < 63) {
      const Y = x === 45 ? E : S;
      return i.consume(x), Y;
    }
    return r(x);
  }
}
const Ju = {
  partial: !0,
  tokenize: w0
};
function w0(i, a, r) {
  return c;
  function c(f) {
    return Nt(f) ? Vt(i, s, "linePrefix")(f) : s(f);
  }
  function s(f) {
    return f === null || ot(f) ? a(f) : r(f);
  }
}
const yp = {
  continuation: {
    tokenize: k0
  },
  exit: U0,
  name: "blockQuote",
  tokenize: R0
};
function R0(i, a, r) {
  const c = this;
  return s;
  function s(h) {
    if (h === 62) {
      const p = c.containerState;
      return p.open || (i.enter("blockQuote", {
        _container: !0
      }), p.open = !0), i.enter("blockQuotePrefix"), i.enter("blockQuoteMarker"), i.consume(h), i.exit("blockQuoteMarker"), f;
    }
    return r(h);
  }
  function f(h) {
    return Nt(h) ? (i.enter("blockQuotePrefixWhitespace"), i.consume(h), i.exit("blockQuotePrefixWhitespace"), i.exit("blockQuotePrefix"), a) : (i.exit("blockQuotePrefix"), a(h));
  }
}
function k0(i, a, r) {
  const c = this;
  return s;
  function s(h) {
    return Nt(h) ? Vt(i, f, "linePrefix", c.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(h) : f(h);
  }
  function f(h) {
    return i.attempt(yp, a, r)(h);
  }
}
function U0(i) {
  i.exit("blockQuote");
}
const gp = {
  name: "characterEscape",
  tokenize: j0
};
function j0(i, a, r) {
  return c;
  function c(f) {
    return i.enter("characterEscape"), i.enter("escapeMarker"), i.consume(f), i.exit("escapeMarker"), s;
  }
  function s(f) {
    return b0(f) ? (i.enter("characterEscapeValue"), i.consume(f), i.exit("characterEscapeValue"), i.exit("characterEscape"), a) : r(f);
  }
}
const vp = {
  name: "characterReference",
  tokenize: B0
};
function B0(i, a, r) {
  const c = this;
  let s = 0, f, h;
  return p;
  function p(S) {
    return i.enter("characterReference"), i.enter("characterReferenceMarker"), i.consume(S), i.exit("characterReferenceMarker"), g;
  }
  function g(S) {
    return S === 35 ? (i.enter("characterReferenceMarkerNumeric"), i.consume(S), i.exit("characterReferenceMarkerNumeric"), d) : (i.enter("characterReferenceValue"), f = 31, h = Be, v(S));
  }
  function d(S) {
    return S === 88 || S === 120 ? (i.enter("characterReferenceMarkerHexadecimal"), i.consume(S), i.exit("characterReferenceMarkerHexadecimal"), i.enter("characterReferenceValue"), f = 6, h = S0, v) : (i.enter("characterReferenceValue"), f = 7, h = Ho, v(S));
  }
  function v(S) {
    if (S === 59 && s) {
      const E = i.exit("characterReferenceValue");
      return h === Be && !Io(c.sliceSerialize(E)) ? r(S) : (i.enter("characterReferenceMarker"), i.consume(S), i.exit("characterReferenceMarker"), i.exit("characterReference"), a);
    }
    return h(S) && s++ < f ? (i.consume(S), v) : r(S);
  }
}
const Dd = {
  partial: !0,
  tokenize: L0
}, Nd = {
  concrete: !0,
  name: "codeFenced",
  tokenize: H0
};
function H0(i, a, r) {
  const c = this, s = {
    partial: !0,
    tokenize: vt
  };
  let f = 0, h = 0, p;
  return g;
  function g(L) {
    return d(L);
  }
  function d(L) {
    const W = c.events[c.events.length - 1];
    return f = W && W[1].type === "linePrefix" ? W[2].sliceSerialize(W[1], !0).length : 0, p = L, i.enter("codeFenced"), i.enter("codeFencedFence"), i.enter("codeFencedFenceSequence"), v(L);
  }
  function v(L) {
    return L === p ? (h++, i.consume(L), v) : h < 3 ? r(L) : (i.exit("codeFencedFenceSequence"), Nt(L) ? Vt(i, S, "whitespace")(L) : S(L));
  }
  function S(L) {
    return L === null || ot(L) ? (i.exit("codeFencedFence"), c.interrupt ? a(L) : i.check(Dd, G, st)(L)) : (i.enter("codeFencedFenceInfo"), i.enter("chunkString", {
      contentType: "string"
    }), E(L));
  }
  function E(L) {
    return L === null || ot(L) ? (i.exit("chunkString"), i.exit("codeFencedFenceInfo"), S(L)) : Nt(L) ? (i.exit("chunkString"), i.exit("codeFencedFenceInfo"), Vt(i, x, "whitespace")(L)) : L === 96 && L === p ? r(L) : (i.consume(L), E);
  }
  function x(L) {
    return L === null || ot(L) ? S(L) : (i.enter("codeFencedFenceMeta"), i.enter("chunkString", {
      contentType: "string"
    }), Y(L));
  }
  function Y(L) {
    return L === null || ot(L) ? (i.exit("chunkString"), i.exit("codeFencedFenceMeta"), S(L)) : L === 96 && L === p ? r(L) : (i.consume(L), Y);
  }
  function G(L) {
    return i.attempt(s, st, F)(L);
  }
  function F(L) {
    return i.enter("lineEnding"), i.consume(L), i.exit("lineEnding"), R;
  }
  function R(L) {
    return f > 0 && Nt(L) ? Vt(i, nt, "linePrefix", f + 1)(L) : nt(L);
  }
  function nt(L) {
    return L === null || ot(L) ? i.check(Dd, G, st)(L) : (i.enter("codeFlowValue"), Q(L));
  }
  function Q(L) {
    return L === null || ot(L) ? (i.exit("codeFlowValue"), nt(L)) : (i.consume(L), Q);
  }
  function st(L) {
    return i.exit("codeFenced"), a(L);
  }
  function vt(L, W, mt) {
    let dt = 0;
    return zt;
    function zt(Z) {
      return L.enter("lineEnding"), L.consume(Z), L.exit("lineEnding"), P;
    }
    function P(Z) {
      return L.enter("codeFencedFence"), Nt(Z) ? Vt(L, I, "linePrefix", c.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(Z) : I(Z);
    }
    function I(Z) {
      return Z === p ? (L.enter("codeFencedFenceSequence"), _t(Z)) : mt(Z);
    }
    function _t(Z) {
      return Z === p ? (dt++, L.consume(Z), _t) : dt >= h ? (L.exit("codeFencedFenceSequence"), Nt(Z) ? Vt(L, lt, "whitespace")(Z) : lt(Z)) : mt(Z);
    }
    function lt(Z) {
      return Z === null || ot(Z) ? (L.exit("codeFencedFence"), W(Z)) : mt(Z);
    }
  }
}
function L0(i, a, r) {
  const c = this;
  return s;
  function s(h) {
    return h === null ? r(h) : (i.enter("lineEnding"), i.consume(h), i.exit("lineEnding"), f);
  }
  function f(h) {
    return c.parser.lazy[c.now().line] ? r(h) : a(h);
  }
}
const Eo = {
  name: "codeIndented",
  tokenize: Y0
}, q0 = {
  partial: !0,
  tokenize: V0
};
function Y0(i, a, r) {
  const c = this;
  return s;
  function s(d) {
    return i.enter("codeIndented"), Vt(i, f, "linePrefix", 5)(d);
  }
  function f(d) {
    const v = c.events[c.events.length - 1];
    return v && v[1].type === "linePrefix" && v[2].sliceSerialize(v[1], !0).length >= 4 ? h(d) : r(d);
  }
  function h(d) {
    return d === null ? g(d) : ot(d) ? i.attempt(q0, h, g)(d) : (i.enter("codeFlowValue"), p(d));
  }
  function p(d) {
    return d === null || ot(d) ? (i.exit("codeFlowValue"), h(d)) : (i.consume(d), p);
  }
  function g(d) {
    return i.exit("codeIndented"), a(d);
  }
}
function V0(i, a, r) {
  const c = this;
  return s;
  function s(h) {
    return c.parser.lazy[c.now().line] ? r(h) : ot(h) ? (i.enter("lineEnding"), i.consume(h), i.exit("lineEnding"), s) : Vt(i, f, "linePrefix", 5)(h);
  }
  function f(h) {
    const p = c.events[c.events.length - 1];
    return p && p[1].type === "linePrefix" && p[2].sliceSerialize(p[1], !0).length >= 4 ? a(h) : ot(h) ? s(h) : r(h);
  }
}
const X0 = {
  name: "codeText",
  previous: Q0,
  resolve: G0,
  tokenize: Z0
};
function G0(i) {
  let a = i.length - 4, r = 3, c, s;
  if ((i[r][1].type === "lineEnding" || i[r][1].type === "space") && (i[a][1].type === "lineEnding" || i[a][1].type === "space")) {
    for (c = r; ++c < a; )
      if (i[c][1].type === "codeTextData") {
        i[r][1].type = "codeTextPadding", i[a][1].type = "codeTextPadding", r += 2, a -= 2;
        break;
      }
  }
  for (c = r - 1, a++; ++c <= a; )
    s === void 0 ? c !== a && i[c][1].type !== "lineEnding" && (s = c) : (c === a || i[c][1].type === "lineEnding") && (i[s][1].type = "codeTextData", c !== s + 2 && (i[s][1].end = i[c - 1][1].end, i.splice(s + 2, c - s - 2), a -= c - s - 2, c = s + 2), s = void 0);
  return i;
}
function Q0(i) {
  return i !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function Z0(i, a, r) {
  let c = 0, s, f;
  return h;
  function h(S) {
    return i.enter("codeText"), i.enter("codeTextSequence"), p(S);
  }
  function p(S) {
    return S === 96 ? (i.consume(S), c++, p) : (i.exit("codeTextSequence"), g(S));
  }
  function g(S) {
    return S === null ? r(S) : S === 32 ? (i.enter("space"), i.consume(S), i.exit("space"), g) : S === 96 ? (f = i.enter("codeTextSequence"), s = 0, v(S)) : ot(S) ? (i.enter("lineEnding"), i.consume(S), i.exit("lineEnding"), g) : (i.enter("codeTextData"), d(S));
  }
  function d(S) {
    return S === null || S === 32 || S === 96 || ot(S) ? (i.exit("codeTextData"), g(S)) : (i.consume(S), d);
  }
  function v(S) {
    return S === 96 ? (i.consume(S), s++, v) : s === c ? (i.exit("codeTextSequence"), i.exit("codeText"), a(S)) : (f.type = "codeTextData", d(S));
  }
}
class K0 {
  /**
   * @param {ReadonlyArray<T> | null | undefined} [initial]
   *   Initial items (optional).
   * @returns
   *   Splice buffer.
   */
  constructor(a) {
    this.left = a ? [...a] : [], this.right = [];
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
  get(a) {
    if (a < 0 || a >= this.left.length + this.right.length)
      throw new RangeError("Cannot access index `" + a + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
    return a < this.left.length ? this.left[a] : this.right[this.right.length - a + this.left.length - 1];
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
  slice(a, r) {
    const c = r ?? Number.POSITIVE_INFINITY;
    return c < this.left.length ? this.left.slice(a, c) : a > this.left.length ? this.right.slice(this.right.length - c + this.left.length, this.right.length - a + this.left.length).reverse() : this.left.slice(a).concat(this.right.slice(this.right.length - c + this.left.length).reverse());
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
  splice(a, r, c) {
    const s = r || 0;
    this.setCursor(Math.trunc(a));
    const f = this.right.splice(this.right.length - s, Number.POSITIVE_INFINITY);
    return c && ma(this.left, c), f.reverse();
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
  push(a) {
    this.setCursor(Number.POSITIVE_INFINITY), this.left.push(a);
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
  pushMany(a) {
    this.setCursor(Number.POSITIVE_INFINITY), ma(this.left, a);
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
  unshift(a) {
    this.setCursor(0), this.right.push(a);
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
  unshiftMany(a) {
    this.setCursor(0), ma(this.right, a.reverse());
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
  setCursor(a) {
    if (!(a === this.left.length || a > this.left.length && this.right.length === 0 || a < 0 && this.left.length === 0))
      if (a < this.left.length) {
        const r = this.left.splice(a, Number.POSITIVE_INFINITY);
        ma(this.right, r.reverse());
      } else {
        const r = this.right.splice(this.left.length + this.right.length - a, Number.POSITIVE_INFINITY);
        ma(this.left, r.reverse());
      }
  }
}
function ma(i, a) {
  let r = 0;
  if (a.length < 1e4)
    i.push(...a);
  else
    for (; r < a.length; )
      i.push(...a.slice(r, r + 1e4)), r += 1e4;
}
function Sp(i) {
  const a = {};
  let r = -1, c, s, f, h, p, g, d;
  const v = new K0(i);
  for (; ++r < v.length; ) {
    for (; r in a; )
      r = a[r];
    if (c = v.get(r), r && c[1].type === "chunkFlow" && v.get(r - 1)[1].type === "listItemPrefix" && (g = c[1]._tokenizer.events, f = 0, f < g.length && g[f][1].type === "lineEndingBlank" && (f += 2), f < g.length && g[f][1].type === "content"))
      for (; ++f < g.length && g[f][1].type !== "content"; )
        g[f][1].type === "chunkText" && (g[f][1]._isInFirstContentOfListItem = !0, f++);
    if (c[0] === "enter")
      c[1].contentType && (Object.assign(a, J0(v, r)), r = a[r], d = !0);
    else if (c[1]._container) {
      for (f = r, s = void 0; f--; )
        if (h = v.get(f), h[1].type === "lineEnding" || h[1].type === "lineEndingBlank")
          h[0] === "enter" && (s && (v.get(s)[1].type = "lineEndingBlank"), h[1].type = "lineEnding", s = f);
        else if (!(h[1].type === "linePrefix" || h[1].type === "listItemIndent")) break;
      s && (c[1].end = {
        ...v.get(s)[1].start
      }, p = v.slice(s, r), p.unshift(c), v.splice(s, r - s + 1, p));
    }
  }
  return cn(i, 0, Number.POSITIVE_INFINITY, v.slice(0)), !d;
}
function J0(i, a) {
  const r = i.get(a)[1], c = i.get(a)[2];
  let s = a - 1;
  const f = [];
  let h = r._tokenizer;
  h || (h = c.parser[r.contentType](r.start), r._contentTypeTextTrailing && (h._contentTypeTextTrailing = !0));
  const p = h.events, g = [], d = {};
  let v, S, E = -1, x = r, Y = 0, G = 0;
  const F = [G];
  for (; x; ) {
    for (; i.get(++s)[1] !== x; )
      ;
    f.push(s), x._tokenizer || (v = c.sliceStream(x), x.next || v.push(null), S && h.defineSkip(x.start), x._isInFirstContentOfListItem && (h._gfmTasklistFirstContentOfListItem = !0), h.write(v), x._isInFirstContentOfListItem && (h._gfmTasklistFirstContentOfListItem = void 0)), S = x, x = x.next;
  }
  for (x = r; ++E < p.length; )
    // Find a void token that includes a break.
    p[E][0] === "exit" && p[E - 1][0] === "enter" && p[E][1].type === p[E - 1][1].type && p[E][1].start.line !== p[E][1].end.line && (G = E + 1, F.push(G), x._tokenizer = void 0, x.previous = void 0, x = x.next);
  for (h.events = [], x ? (x._tokenizer = void 0, x.previous = void 0) : F.pop(), E = F.length; E--; ) {
    const R = p.slice(F[E], F[E + 1]), nt = f.pop();
    g.push([nt, nt + R.length - 1]), i.splice(nt, 2, R);
  }
  for (g.reverse(), E = -1; ++E < g.length; )
    d[Y + g[E][0]] = Y + g[E][1], Y += g[E][1] - g[E][0] - 1;
  return d;
}
const F0 = {
  resolve: W0,
  tokenize: $0
}, I0 = {
  partial: !0,
  tokenize: P0
};
function W0(i) {
  return Sp(i), i;
}
function $0(i, a) {
  let r;
  return c;
  function c(p) {
    return i.enter("content"), r = i.enter("chunkContent", {
      contentType: "content"
    }), s(p);
  }
  function s(p) {
    return p === null ? f(p) : ot(p) ? i.check(I0, h, f)(p) : (i.consume(p), s);
  }
  function f(p) {
    return i.exit("chunkContent"), i.exit("content"), a(p);
  }
  function h(p) {
    return i.consume(p), i.exit("chunkContent"), r.next = i.enter("chunkContent", {
      contentType: "content",
      previous: r
    }), r = r.next, s;
  }
}
function P0(i, a, r) {
  const c = this;
  return s;
  function s(h) {
    return i.exit("chunkContent"), i.enter("lineEnding"), i.consume(h), i.exit("lineEnding"), Vt(i, f, "linePrefix");
  }
  function f(h) {
    if (h === null || ot(h))
      return r(h);
    const p = c.events[c.events.length - 1];
    return !c.parser.constructs.disable.null.includes("codeIndented") && p && p[1].type === "linePrefix" && p[2].sliceSerialize(p[1], !0).length >= 4 ? a(h) : i.interrupt(c.parser.constructs.flow, r, a)(h);
  }
}
function bp(i, a, r, c, s, f, h, p, g) {
  const d = g || Number.POSITIVE_INFINITY;
  let v = 0;
  return S;
  function S(R) {
    return R === 60 ? (i.enter(c), i.enter(s), i.enter(f), i.consume(R), i.exit(f), E) : R === null || R === 32 || R === 41 || Bo(R) ? r(R) : (i.enter(c), i.enter(h), i.enter(p), i.enter("chunkString", {
      contentType: "string"
    }), G(R));
  }
  function E(R) {
    return R === 62 ? (i.enter(f), i.consume(R), i.exit(f), i.exit(s), i.exit(c), a) : (i.enter(p), i.enter("chunkString", {
      contentType: "string"
    }), x(R));
  }
  function x(R) {
    return R === 62 ? (i.exit("chunkString"), i.exit(p), E(R)) : R === null || R === 60 || ot(R) ? r(R) : (i.consume(R), R === 92 ? Y : x);
  }
  function Y(R) {
    return R === 60 || R === 62 || R === 92 ? (i.consume(R), x) : x(R);
  }
  function G(R) {
    return !v && (R === null || R === 41 || Ce(R)) ? (i.exit("chunkString"), i.exit(p), i.exit(h), i.exit(c), a(R)) : v < d && R === 40 ? (i.consume(R), v++, G) : R === 41 ? (i.consume(R), v--, G) : R === null || R === 32 || R === 40 || Bo(R) ? r(R) : (i.consume(R), R === 92 ? F : G);
  }
  function F(R) {
    return R === 40 || R === 41 || R === 92 ? (i.consume(R), G) : G(R);
  }
}
function xp(i, a, r, c, s, f) {
  const h = this;
  let p = 0, g;
  return d;
  function d(x) {
    return i.enter(c), i.enter(s), i.consume(x), i.exit(s), i.enter(f), v;
  }
  function v(x) {
    return p > 999 || x === null || x === 91 || x === 93 && !g || // To do: remove in the future once we’ve switched from
    // `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
    // which doesn’t need this.
    // Hidden footnotes hook.
    /* c8 ignore next 3 */
    x === 94 && !p && "_hiddenFootnoteSupport" in h.parser.constructs ? r(x) : x === 93 ? (i.exit(f), i.enter(s), i.consume(x), i.exit(s), i.exit(c), a) : ot(x) ? (i.enter("lineEnding"), i.consume(x), i.exit("lineEnding"), v) : (i.enter("chunkString", {
      contentType: "string"
    }), S(x));
  }
  function S(x) {
    return x === null || x === 91 || x === 93 || ot(x) || p++ > 999 ? (i.exit("chunkString"), v(x)) : (i.consume(x), g || (g = !Nt(x)), x === 92 ? E : S);
  }
  function E(x) {
    return x === 91 || x === 92 || x === 93 ? (i.consume(x), p++, S) : S(x);
  }
}
function Ep(i, a, r, c, s, f) {
  let h;
  return p;
  function p(E) {
    return E === 34 || E === 39 || E === 40 ? (i.enter(c), i.enter(s), i.consume(E), i.exit(s), h = E === 40 ? 41 : E, g) : r(E);
  }
  function g(E) {
    return E === h ? (i.enter(s), i.consume(E), i.exit(s), i.exit(c), a) : (i.enter(f), d(E));
  }
  function d(E) {
    return E === h ? (i.exit(f), g(h)) : E === null ? r(E) : ot(E) ? (i.enter("lineEnding"), i.consume(E), i.exit("lineEnding"), Vt(i, d, "linePrefix")) : (i.enter("chunkString", {
      contentType: "string"
    }), v(E));
  }
  function v(E) {
    return E === h || E === null || ot(E) ? (i.exit("chunkString"), d(E)) : (i.consume(E), E === 92 ? S : v);
  }
  function S(E) {
    return E === h || E === 92 ? (i.consume(E), v) : v(E);
  }
}
function ya(i, a) {
  let r;
  return c;
  function c(s) {
    return ot(s) ? (i.enter("lineEnding"), i.consume(s), i.exit("lineEnding"), r = !0, c) : Nt(s) ? Vt(i, c, r ? "linePrefix" : "lineSuffix")(s) : a(s);
  }
}
const tv = {
  name: "definition",
  tokenize: nv
}, ev = {
  partial: !0,
  tokenize: lv
};
function nv(i, a, r) {
  const c = this;
  let s;
  return f;
  function f(x) {
    return i.enter("definition"), h(x);
  }
  function h(x) {
    return xp.call(
      c,
      i,
      p,
      // Note: we don’t need to reset the way `markdown-rs` does.
      r,
      "definitionLabel",
      "definitionLabelMarker",
      "definitionLabelString"
    )(x);
  }
  function p(x) {
    return s = mi(c.sliceSerialize(c.events[c.events.length - 1][1]).slice(1, -1)), x === 58 ? (i.enter("definitionMarker"), i.consume(x), i.exit("definitionMarker"), g) : r(x);
  }
  function g(x) {
    return Ce(x) ? ya(i, d)(x) : d(x);
  }
  function d(x) {
    return bp(
      i,
      v,
      // Note: we don’t need to reset the way `markdown-rs` does.
      r,
      "definitionDestination",
      "definitionDestinationLiteral",
      "definitionDestinationLiteralMarker",
      "definitionDestinationRaw",
      "definitionDestinationString"
    )(x);
  }
  function v(x) {
    return i.attempt(ev, S, S)(x);
  }
  function S(x) {
    return Nt(x) ? Vt(i, E, "whitespace")(x) : E(x);
  }
  function E(x) {
    return x === null || ot(x) ? (i.exit("definition"), c.parser.defined.push(s), a(x)) : r(x);
  }
}
function lv(i, a, r) {
  return c;
  function c(p) {
    return Ce(p) ? ya(i, s)(p) : r(p);
  }
  function s(p) {
    return Ep(i, f, r, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(p);
  }
  function f(p) {
    return Nt(p) ? Vt(i, h, "whitespace")(p) : h(p);
  }
  function h(p) {
    return p === null || ot(p) ? a(p) : r(p);
  }
}
const iv = {
  name: "hardBreakEscape",
  tokenize: av
};
function av(i, a, r) {
  return c;
  function c(f) {
    return i.enter("hardBreakEscape"), i.consume(f), s;
  }
  function s(f) {
    return ot(f) ? (i.exit("hardBreakEscape"), a(f)) : r(f);
  }
}
const uv = {
  name: "headingAtx",
  resolve: rv,
  tokenize: cv
};
function rv(i, a) {
  let r = i.length - 2, c = 3, s, f;
  return i[c][1].type === "whitespace" && (c += 2), r - 2 > c && i[r][1].type === "whitespace" && (r -= 2), i[r][1].type === "atxHeadingSequence" && (c === r - 1 || r - 4 > c && i[r - 2][1].type === "whitespace") && (r -= c + 1 === r ? 2 : 4), r > c && (s = {
    type: "atxHeadingText",
    start: i[c][1].start,
    end: i[r][1].end
  }, f = {
    type: "chunkText",
    start: i[c][1].start,
    end: i[r][1].end,
    contentType: "text"
  }, cn(i, c, r - c + 1, [["enter", s, a], ["enter", f, a], ["exit", f, a], ["exit", s, a]])), i;
}
function cv(i, a, r) {
  let c = 0;
  return s;
  function s(v) {
    return i.enter("atxHeading"), f(v);
  }
  function f(v) {
    return i.enter("atxHeadingSequence"), h(v);
  }
  function h(v) {
    return v === 35 && c++ < 6 ? (i.consume(v), h) : v === null || Ce(v) ? (i.exit("atxHeadingSequence"), p(v)) : r(v);
  }
  function p(v) {
    return v === 35 ? (i.enter("atxHeadingSequence"), g(v)) : v === null || ot(v) ? (i.exit("atxHeading"), a(v)) : Nt(v) ? Vt(i, p, "whitespace")(v) : (i.enter("atxHeadingText"), d(v));
  }
  function g(v) {
    return v === 35 ? (i.consume(v), g) : (i.exit("atxHeadingSequence"), p(v));
  }
  function d(v) {
    return v === null || v === 35 || Ce(v) ? (i.exit("atxHeadingText"), p(v)) : (i.consume(v), d);
  }
}
const ov = [
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
], wd = ["pre", "script", "style", "textarea"], sv = {
  concrete: !0,
  name: "htmlFlow",
  resolveTo: mv,
  tokenize: dv
}, fv = {
  partial: !0,
  tokenize: yv
}, hv = {
  partial: !0,
  tokenize: pv
};
function mv(i) {
  let a = i.length;
  for (; a-- && !(i[a][0] === "enter" && i[a][1].type === "htmlFlow"); )
    ;
  return a > 1 && i[a - 2][1].type === "linePrefix" && (i[a][1].start = i[a - 2][1].start, i[a + 1][1].start = i[a - 2][1].start, i.splice(a - 2, 2)), i;
}
function dv(i, a, r) {
  const c = this;
  let s, f, h, p, g;
  return d;
  function d(b) {
    return v(b);
  }
  function v(b) {
    return i.enter("htmlFlow"), i.enter("htmlFlowData"), i.consume(b), S;
  }
  function S(b) {
    return b === 33 ? (i.consume(b), E) : b === 47 ? (i.consume(b), f = !0, G) : b === 63 ? (i.consume(b), s = 3, c.interrupt ? a : A) : rn(b) ? (i.consume(b), h = String.fromCharCode(b), F) : r(b);
  }
  function E(b) {
    return b === 45 ? (i.consume(b), s = 2, x) : b === 91 ? (i.consume(b), s = 5, p = 0, Y) : rn(b) ? (i.consume(b), s = 4, c.interrupt ? a : A) : r(b);
  }
  function x(b) {
    return b === 45 ? (i.consume(b), c.interrupt ? a : A) : r(b);
  }
  function Y(b) {
    const J = "CDATA[";
    return b === J.charCodeAt(p++) ? (i.consume(b), p === J.length ? c.interrupt ? a : I : Y) : r(b);
  }
  function G(b) {
    return rn(b) ? (i.consume(b), h = String.fromCharCode(b), F) : r(b);
  }
  function F(b) {
    if (b === null || b === 47 || b === 62 || Ce(b)) {
      const J = b === 47, rt = h.toLowerCase();
      return !J && !f && wd.includes(rt) ? (s = 1, c.interrupt ? a(b) : I(b)) : ov.includes(h.toLowerCase()) ? (s = 6, J ? (i.consume(b), R) : c.interrupt ? a(b) : I(b)) : (s = 7, c.interrupt && !c.parser.lazy[c.now().line] ? r(b) : f ? nt(b) : Q(b));
    }
    return b === 45 || Be(b) ? (i.consume(b), h += String.fromCharCode(b), F) : r(b);
  }
  function R(b) {
    return b === 62 ? (i.consume(b), c.interrupt ? a : I) : r(b);
  }
  function nt(b) {
    return Nt(b) ? (i.consume(b), nt) : zt(b);
  }
  function Q(b) {
    return b === 47 ? (i.consume(b), zt) : b === 58 || b === 95 || rn(b) ? (i.consume(b), st) : Nt(b) ? (i.consume(b), Q) : zt(b);
  }
  function st(b) {
    return b === 45 || b === 46 || b === 58 || b === 95 || Be(b) ? (i.consume(b), st) : vt(b);
  }
  function vt(b) {
    return b === 61 ? (i.consume(b), L) : Nt(b) ? (i.consume(b), vt) : Q(b);
  }
  function L(b) {
    return b === null || b === 60 || b === 61 || b === 62 || b === 96 ? r(b) : b === 34 || b === 39 ? (i.consume(b), g = b, W) : Nt(b) ? (i.consume(b), L) : mt(b);
  }
  function W(b) {
    return b === g ? (i.consume(b), g = null, dt) : b === null || ot(b) ? r(b) : (i.consume(b), W);
  }
  function mt(b) {
    return b === null || b === 34 || b === 39 || b === 47 || b === 60 || b === 61 || b === 62 || b === 96 || Ce(b) ? vt(b) : (i.consume(b), mt);
  }
  function dt(b) {
    return b === 47 || b === 62 || Nt(b) ? Q(b) : r(b);
  }
  function zt(b) {
    return b === 62 ? (i.consume(b), P) : r(b);
  }
  function P(b) {
    return b === null || ot(b) ? I(b) : Nt(b) ? (i.consume(b), P) : r(b);
  }
  function I(b) {
    return b === 45 && s === 2 ? (i.consume(b), N) : b === 60 && s === 1 ? (i.consume(b), V) : b === 62 && s === 4 ? (i.consume(b), z) : b === 63 && s === 3 ? (i.consume(b), A) : b === 93 && s === 5 ? (i.consume(b), gt) : ot(b) && (s === 6 || s === 7) ? (i.exit("htmlFlowData"), i.check(fv, U, _t)(b)) : b === null || ot(b) ? (i.exit("htmlFlowData"), _t(b)) : (i.consume(b), I);
  }
  function _t(b) {
    return i.check(hv, lt, U)(b);
  }
  function lt(b) {
    return i.enter("lineEnding"), i.consume(b), i.exit("lineEnding"), Z;
  }
  function Z(b) {
    return b === null || ot(b) ? _t(b) : (i.enter("htmlFlowData"), I(b));
  }
  function N(b) {
    return b === 45 ? (i.consume(b), A) : I(b);
  }
  function V(b) {
    return b === 47 ? (i.consume(b), h = "", et) : I(b);
  }
  function et(b) {
    if (b === 62) {
      const J = h.toLowerCase();
      return wd.includes(J) ? (i.consume(b), z) : I(b);
    }
    return rn(b) && h.length < 8 ? (i.consume(b), h += String.fromCharCode(b), et) : I(b);
  }
  function gt(b) {
    return b === 93 ? (i.consume(b), A) : I(b);
  }
  function A(b) {
    return b === 62 ? (i.consume(b), z) : b === 45 && s === 2 ? (i.consume(b), A) : I(b);
  }
  function z(b) {
    return b === null || ot(b) ? (i.exit("htmlFlowData"), U(b)) : (i.consume(b), z);
  }
  function U(b) {
    return i.exit("htmlFlow"), a(b);
  }
}
function pv(i, a, r) {
  const c = this;
  return s;
  function s(h) {
    return ot(h) ? (i.enter("lineEnding"), i.consume(h), i.exit("lineEnding"), f) : r(h);
  }
  function f(h) {
    return c.parser.lazy[c.now().line] ? r(h) : a(h);
  }
}
function yv(i, a, r) {
  return c;
  function c(s) {
    return i.enter("lineEnding"), i.consume(s), i.exit("lineEnding"), i.attempt(Ju, a, r);
  }
}
const gv = {
  name: "htmlText",
  tokenize: vv
};
function vv(i, a, r) {
  const c = this;
  let s, f, h;
  return p;
  function p(A) {
    return i.enter("htmlText"), i.enter("htmlTextData"), i.consume(A), g;
  }
  function g(A) {
    return A === 33 ? (i.consume(A), d) : A === 47 ? (i.consume(A), vt) : A === 63 ? (i.consume(A), Q) : rn(A) ? (i.consume(A), mt) : r(A);
  }
  function d(A) {
    return A === 45 ? (i.consume(A), v) : A === 91 ? (i.consume(A), f = 0, Y) : rn(A) ? (i.consume(A), nt) : r(A);
  }
  function v(A) {
    return A === 45 ? (i.consume(A), x) : r(A);
  }
  function S(A) {
    return A === null ? r(A) : A === 45 ? (i.consume(A), E) : ot(A) ? (h = S, V(A)) : (i.consume(A), S);
  }
  function E(A) {
    return A === 45 ? (i.consume(A), x) : S(A);
  }
  function x(A) {
    return A === 62 ? N(A) : A === 45 ? E(A) : S(A);
  }
  function Y(A) {
    const z = "CDATA[";
    return A === z.charCodeAt(f++) ? (i.consume(A), f === z.length ? G : Y) : r(A);
  }
  function G(A) {
    return A === null ? r(A) : A === 93 ? (i.consume(A), F) : ot(A) ? (h = G, V(A)) : (i.consume(A), G);
  }
  function F(A) {
    return A === 93 ? (i.consume(A), R) : G(A);
  }
  function R(A) {
    return A === 62 ? N(A) : A === 93 ? (i.consume(A), R) : G(A);
  }
  function nt(A) {
    return A === null || A === 62 ? N(A) : ot(A) ? (h = nt, V(A)) : (i.consume(A), nt);
  }
  function Q(A) {
    return A === null ? r(A) : A === 63 ? (i.consume(A), st) : ot(A) ? (h = Q, V(A)) : (i.consume(A), Q);
  }
  function st(A) {
    return A === 62 ? N(A) : Q(A);
  }
  function vt(A) {
    return rn(A) ? (i.consume(A), L) : r(A);
  }
  function L(A) {
    return A === 45 || Be(A) ? (i.consume(A), L) : W(A);
  }
  function W(A) {
    return ot(A) ? (h = W, V(A)) : Nt(A) ? (i.consume(A), W) : N(A);
  }
  function mt(A) {
    return A === 45 || Be(A) ? (i.consume(A), mt) : A === 47 || A === 62 || Ce(A) ? dt(A) : r(A);
  }
  function dt(A) {
    return A === 47 ? (i.consume(A), N) : A === 58 || A === 95 || rn(A) ? (i.consume(A), zt) : ot(A) ? (h = dt, V(A)) : Nt(A) ? (i.consume(A), dt) : N(A);
  }
  function zt(A) {
    return A === 45 || A === 46 || A === 58 || A === 95 || Be(A) ? (i.consume(A), zt) : P(A);
  }
  function P(A) {
    return A === 61 ? (i.consume(A), I) : ot(A) ? (h = P, V(A)) : Nt(A) ? (i.consume(A), P) : dt(A);
  }
  function I(A) {
    return A === null || A === 60 || A === 61 || A === 62 || A === 96 ? r(A) : A === 34 || A === 39 ? (i.consume(A), s = A, _t) : ot(A) ? (h = I, V(A)) : Nt(A) ? (i.consume(A), I) : (i.consume(A), lt);
  }
  function _t(A) {
    return A === s ? (i.consume(A), s = void 0, Z) : A === null ? r(A) : ot(A) ? (h = _t, V(A)) : (i.consume(A), _t);
  }
  function lt(A) {
    return A === null || A === 34 || A === 39 || A === 60 || A === 61 || A === 96 ? r(A) : A === 47 || A === 62 || Ce(A) ? dt(A) : (i.consume(A), lt);
  }
  function Z(A) {
    return A === 47 || A === 62 || Ce(A) ? dt(A) : r(A);
  }
  function N(A) {
    return A === 62 ? (i.consume(A), i.exit("htmlTextData"), i.exit("htmlText"), a) : r(A);
  }
  function V(A) {
    return i.exit("htmlTextData"), i.enter("lineEnding"), i.consume(A), i.exit("lineEnding"), et;
  }
  function et(A) {
    return Nt(A) ? Vt(i, gt, "linePrefix", c.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(A) : gt(A);
  }
  function gt(A) {
    return i.enter("htmlTextData"), h(A);
  }
}
const $o = {
  name: "labelEnd",
  resolveAll: Ev,
  resolveTo: Av,
  tokenize: Tv
}, Sv = {
  tokenize: zv
}, bv = {
  tokenize: Cv
}, xv = {
  tokenize: _v
};
function Ev(i) {
  let a = -1;
  const r = [];
  for (; ++a < i.length; ) {
    const c = i[a][1];
    if (r.push(i[a]), c.type === "labelImage" || c.type === "labelLink" || c.type === "labelEnd") {
      const s = c.type === "labelImage" ? 4 : 2;
      c.type = "data", a += s;
    }
  }
  return i.length !== r.length && cn(i, 0, i.length, r), i;
}
function Av(i, a) {
  let r = i.length, c = 0, s, f, h, p;
  for (; r--; )
    if (s = i[r][1], f) {
      if (s.type === "link" || s.type === "labelLink" && s._inactive)
        break;
      i[r][0] === "enter" && s.type === "labelLink" && (s._inactive = !0);
    } else if (h) {
      if (i[r][0] === "enter" && (s.type === "labelImage" || s.type === "labelLink") && !s._balanced && (f = r, s.type !== "labelLink")) {
        c = 2;
        break;
      }
    } else s.type === "labelEnd" && (h = r);
  const g = {
    type: i[f][1].type === "labelLink" ? "link" : "image",
    start: {
      ...i[f][1].start
    },
    end: {
      ...i[i.length - 1][1].end
    }
  }, d = {
    type: "label",
    start: {
      ...i[f][1].start
    },
    end: {
      ...i[h][1].end
    }
  }, v = {
    type: "labelText",
    start: {
      ...i[f + c + 2][1].end
    },
    end: {
      ...i[h - 2][1].start
    }
  };
  return p = [["enter", g, a], ["enter", d, a]], p = Fe(p, i.slice(f + 1, f + c + 3)), p = Fe(p, [["enter", v, a]]), p = Fe(p, Wo(a.parser.constructs.insideSpan.null, i.slice(f + c + 4, h - 3), a)), p = Fe(p, [["exit", v, a], i[h - 2], i[h - 1], ["exit", d, a]]), p = Fe(p, i.slice(h + 1)), p = Fe(p, [["exit", g, a]]), cn(i, f, i.length, p), i;
}
function Tv(i, a, r) {
  const c = this;
  let s = c.events.length, f, h;
  for (; s--; )
    if ((c.events[s][1].type === "labelImage" || c.events[s][1].type === "labelLink") && !c.events[s][1]._balanced) {
      f = c.events[s][1];
      break;
    }
  return p;
  function p(E) {
    return f ? f._inactive ? S(E) : (h = c.parser.defined.includes(mi(c.sliceSerialize({
      start: f.end,
      end: c.now()
    }))), i.enter("labelEnd"), i.enter("labelMarker"), i.consume(E), i.exit("labelMarker"), i.exit("labelEnd"), g) : r(E);
  }
  function g(E) {
    return E === 40 ? i.attempt(Sv, v, h ? v : S)(E) : E === 91 ? i.attempt(bv, v, h ? d : S)(E) : h ? v(E) : S(E);
  }
  function d(E) {
    return i.attempt(xv, v, S)(E);
  }
  function v(E) {
    return a(E);
  }
  function S(E) {
    return f._balanced = !0, r(E);
  }
}
function zv(i, a, r) {
  return c;
  function c(S) {
    return i.enter("resource"), i.enter("resourceMarker"), i.consume(S), i.exit("resourceMarker"), s;
  }
  function s(S) {
    return Ce(S) ? ya(i, f)(S) : f(S);
  }
  function f(S) {
    return S === 41 ? v(S) : bp(i, h, p, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(S);
  }
  function h(S) {
    return Ce(S) ? ya(i, g)(S) : v(S);
  }
  function p(S) {
    return r(S);
  }
  function g(S) {
    return S === 34 || S === 39 || S === 40 ? Ep(i, d, r, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(S) : v(S);
  }
  function d(S) {
    return Ce(S) ? ya(i, v)(S) : v(S);
  }
  function v(S) {
    return S === 41 ? (i.enter("resourceMarker"), i.consume(S), i.exit("resourceMarker"), i.exit("resource"), a) : r(S);
  }
}
function Cv(i, a, r) {
  const c = this;
  return s;
  function s(p) {
    return xp.call(c, i, f, h, "reference", "referenceMarker", "referenceString")(p);
  }
  function f(p) {
    return c.parser.defined.includes(mi(c.sliceSerialize(c.events[c.events.length - 1][1]).slice(1, -1))) ? a(p) : r(p);
  }
  function h(p) {
    return r(p);
  }
}
function _v(i, a, r) {
  return c;
  function c(f) {
    return i.enter("reference"), i.enter("referenceMarker"), i.consume(f), i.exit("referenceMarker"), s;
  }
  function s(f) {
    return f === 93 ? (i.enter("referenceMarker"), i.consume(f), i.exit("referenceMarker"), i.exit("reference"), a) : r(f);
  }
}
const Ov = {
  name: "labelStartImage",
  resolveAll: $o.resolveAll,
  tokenize: Mv
};
function Mv(i, a, r) {
  const c = this;
  return s;
  function s(p) {
    return i.enter("labelImage"), i.enter("labelImageMarker"), i.consume(p), i.exit("labelImageMarker"), f;
  }
  function f(p) {
    return p === 91 ? (i.enter("labelMarker"), i.consume(p), i.exit("labelMarker"), i.exit("labelImage"), h) : r(p);
  }
  function h(p) {
    return p === 94 && "_hiddenFootnoteSupport" in c.parser.constructs ? r(p) : a(p);
  }
}
const Dv = {
  name: "labelStartLink",
  resolveAll: $o.resolveAll,
  tokenize: Nv
};
function Nv(i, a, r) {
  const c = this;
  return s;
  function s(h) {
    return i.enter("labelLink"), i.enter("labelMarker"), i.consume(h), i.exit("labelMarker"), i.exit("labelLink"), f;
  }
  function f(h) {
    return h === 94 && "_hiddenFootnoteSupport" in c.parser.constructs ? r(h) : a(h);
  }
}
const Ao = {
  name: "lineEnding",
  tokenize: wv
};
function wv(i, a) {
  return r;
  function r(c) {
    return i.enter("lineEnding"), i.consume(c), i.exit("lineEnding"), Vt(i, a, "linePrefix");
  }
}
const Gu = {
  name: "thematicBreak",
  tokenize: Rv
};
function Rv(i, a, r) {
  let c = 0, s;
  return f;
  function f(d) {
    return i.enter("thematicBreak"), h(d);
  }
  function h(d) {
    return s = d, p(d);
  }
  function p(d) {
    return d === s ? (i.enter("thematicBreakSequence"), g(d)) : c >= 3 && (d === null || ot(d)) ? (i.exit("thematicBreak"), a(d)) : r(d);
  }
  function g(d) {
    return d === s ? (i.consume(d), c++, g) : (i.exit("thematicBreakSequence"), Nt(d) ? Vt(i, p, "whitespace")(d) : p(d));
  }
}
const ze = {
  continuation: {
    tokenize: Bv
  },
  exit: Lv,
  name: "list",
  tokenize: jv
}, kv = {
  partial: !0,
  tokenize: qv
}, Uv = {
  partial: !0,
  tokenize: Hv
};
function jv(i, a, r) {
  const c = this, s = c.events[c.events.length - 1];
  let f = s && s[1].type === "linePrefix" ? s[2].sliceSerialize(s[1], !0).length : 0, h = 0;
  return p;
  function p(x) {
    const Y = c.containerState.type || (x === 42 || x === 43 || x === 45 ? "listUnordered" : "listOrdered");
    if (Y === "listUnordered" ? !c.containerState.marker || x === c.containerState.marker : Ho(x)) {
      if (c.containerState.type || (c.containerState.type = Y, i.enter(Y, {
        _container: !0
      })), Y === "listUnordered")
        return i.enter("listItemPrefix"), x === 42 || x === 45 ? i.check(Gu, r, d)(x) : d(x);
      if (!c.interrupt || x === 49)
        return i.enter("listItemPrefix"), i.enter("listItemValue"), g(x);
    }
    return r(x);
  }
  function g(x) {
    return Ho(x) && ++h < 10 ? (i.consume(x), g) : (!c.interrupt || h < 2) && (c.containerState.marker ? x === c.containerState.marker : x === 41 || x === 46) ? (i.exit("listItemValue"), d(x)) : r(x);
  }
  function d(x) {
    return i.enter("listItemMarker"), i.consume(x), i.exit("listItemMarker"), c.containerState.marker = c.containerState.marker || x, i.check(
      Ju,
      // Can’t be empty when interrupting.
      c.interrupt ? r : v,
      i.attempt(kv, E, S)
    );
  }
  function v(x) {
    return c.containerState.initialBlankLine = !0, f++, E(x);
  }
  function S(x) {
    return Nt(x) ? (i.enter("listItemPrefixWhitespace"), i.consume(x), i.exit("listItemPrefixWhitespace"), E) : r(x);
  }
  function E(x) {
    return c.containerState.size = f + c.sliceSerialize(i.exit("listItemPrefix"), !0).length, a(x);
  }
}
function Bv(i, a, r) {
  const c = this;
  return c.containerState._closeFlow = void 0, i.check(Ju, s, f);
  function s(p) {
    return c.containerState.furtherBlankLines = c.containerState.furtherBlankLines || c.containerState.initialBlankLine, Vt(i, a, "listItemIndent", c.containerState.size + 1)(p);
  }
  function f(p) {
    return c.containerState.furtherBlankLines || !Nt(p) ? (c.containerState.furtherBlankLines = void 0, c.containerState.initialBlankLine = void 0, h(p)) : (c.containerState.furtherBlankLines = void 0, c.containerState.initialBlankLine = void 0, i.attempt(Uv, a, h)(p));
  }
  function h(p) {
    return c.containerState._closeFlow = !0, c.interrupt = void 0, Vt(i, i.attempt(ze, a, r), "linePrefix", c.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(p);
  }
}
function Hv(i, a, r) {
  const c = this;
  return Vt(i, s, "listItemIndent", c.containerState.size + 1);
  function s(f) {
    const h = c.events[c.events.length - 1];
    return h && h[1].type === "listItemIndent" && h[2].sliceSerialize(h[1], !0).length === c.containerState.size ? a(f) : r(f);
  }
}
function Lv(i) {
  i.exit(this.containerState.type);
}
function qv(i, a, r) {
  const c = this;
  return Vt(i, s, "listItemPrefixWhitespace", c.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
  function s(f) {
    const h = c.events[c.events.length - 1];
    return !Nt(f) && h && h[1].type === "listItemPrefixWhitespace" ? a(f) : r(f);
  }
}
const Rd = {
  name: "setextUnderline",
  resolveTo: Yv,
  tokenize: Vv
};
function Yv(i, a) {
  let r = i.length, c, s, f;
  for (; r--; )
    if (i[r][0] === "enter") {
      if (i[r][1].type === "content") {
        c = r;
        break;
      }
      i[r][1].type === "paragraph" && (s = r);
    } else
      i[r][1].type === "content" && i.splice(r, 1), !f && i[r][1].type === "definition" && (f = r);
  const h = {
    type: "setextHeading",
    start: {
      ...i[c][1].start
    },
    end: {
      ...i[i.length - 1][1].end
    }
  };
  return i[s][1].type = "setextHeadingText", f ? (i.splice(s, 0, ["enter", h, a]), i.splice(f + 1, 0, ["exit", i[c][1], a]), i[c][1].end = {
    ...i[f][1].end
  }) : i[c][1] = h, i.push(["exit", h, a]), i;
}
function Vv(i, a, r) {
  const c = this;
  let s;
  return f;
  function f(d) {
    let v = c.events.length, S;
    for (; v--; )
      if (c.events[v][1].type !== "lineEnding" && c.events[v][1].type !== "linePrefix" && c.events[v][1].type !== "content") {
        S = c.events[v][1].type === "paragraph";
        break;
      }
    return !c.parser.lazy[c.now().line] && (c.interrupt || S) ? (i.enter("setextHeadingLine"), s = d, h(d)) : r(d);
  }
  function h(d) {
    return i.enter("setextHeadingLineSequence"), p(d);
  }
  function p(d) {
    return d === s ? (i.consume(d), p) : (i.exit("setextHeadingLineSequence"), Nt(d) ? Vt(i, g, "lineSuffix")(d) : g(d));
  }
  function g(d) {
    return d === null || ot(d) ? (i.exit("setextHeadingLine"), a(d)) : r(d);
  }
}
const Xv = {
  tokenize: Gv
};
function Gv(i) {
  const a = this, r = i.attempt(
    // Try to parse a blank line.
    Ju,
    c,
    // Try to parse initial flow (essentially, only code).
    i.attempt(this.parser.constructs.flowInitial, s, Vt(i, i.attempt(this.parser.constructs.flow, s, i.attempt(F0, s)), "linePrefix"))
  );
  return r;
  function c(f) {
    if (f === null) {
      i.consume(f);
      return;
    }
    return i.enter("lineEndingBlank"), i.consume(f), i.exit("lineEndingBlank"), a.currentConstruct = void 0, r;
  }
  function s(f) {
    if (f === null) {
      i.consume(f);
      return;
    }
    return i.enter("lineEnding"), i.consume(f), i.exit("lineEnding"), a.currentConstruct = void 0, r;
  }
}
const Qv = {
  resolveAll: Tp()
}, Zv = Ap("string"), Kv = Ap("text");
function Ap(i) {
  return {
    resolveAll: Tp(i === "text" ? Jv : void 0),
    tokenize: a
  };
  function a(r) {
    const c = this, s = this.parser.constructs[i], f = r.attempt(s, h, p);
    return h;
    function h(v) {
      return d(v) ? f(v) : p(v);
    }
    function p(v) {
      if (v === null) {
        r.consume(v);
        return;
      }
      return r.enter("data"), r.consume(v), g;
    }
    function g(v) {
      return d(v) ? (r.exit("data"), f(v)) : (r.consume(v), g);
    }
    function d(v) {
      if (v === null)
        return !0;
      const S = s[v];
      let E = -1;
      if (S)
        for (; ++E < S.length; ) {
          const x = S[E];
          if (!x.previous || x.previous.call(c, c.previous))
            return !0;
        }
      return !1;
    }
  }
}
function Tp(i) {
  return a;
  function a(r, c) {
    let s = -1, f;
    for (; ++s <= r.length; )
      f === void 0 ? r[s] && r[s][1].type === "data" && (f = s, s++) : (!r[s] || r[s][1].type !== "data") && (s !== f + 2 && (r[f][1].end = r[s - 1][1].end, r.splice(f + 2, s - f - 2), s = f + 2), f = void 0);
    return i ? i(r, c) : r;
  }
}
function Jv(i, a) {
  let r = 0;
  for (; ++r <= i.length; )
    if ((r === i.length || i[r][1].type === "lineEnding") && i[r - 1][1].type === "data") {
      const c = i[r - 1][1], s = a.sliceStream(c);
      let f = s.length, h = -1, p = 0, g;
      for (; f--; ) {
        const d = s[f];
        if (typeof d == "string") {
          for (h = d.length; d.charCodeAt(h - 1) === 32; )
            p++, h--;
          if (h) break;
          h = -1;
        } else if (d === -2)
          g = !0, p++;
        else if (d !== -1) {
          f++;
          break;
        }
      }
      if (a._contentTypeTextTrailing && r === i.length && (p = 0), p) {
        const d = {
          type: r === i.length || g || p < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            _bufferIndex: f ? h : c.start._bufferIndex + h,
            _index: c.start._index + f,
            line: c.end.line,
            column: c.end.column - p,
            offset: c.end.offset - p
          },
          end: {
            ...c.end
          }
        };
        c.end = {
          ...d.start
        }, c.start.offset === c.end.offset ? Object.assign(c, d) : (i.splice(r, 0, ["enter", d, a], ["exit", d, a]), r += 2);
      }
      r++;
    }
  return i;
}
const Fv = {
  42: ze,
  43: ze,
  45: ze,
  48: ze,
  49: ze,
  50: ze,
  51: ze,
  52: ze,
  53: ze,
  54: ze,
  55: ze,
  56: ze,
  57: ze,
  62: yp
}, Iv = {
  91: tv
}, Wv = {
  [-2]: Eo,
  [-1]: Eo,
  32: Eo
}, $v = {
  35: uv,
  42: Gu,
  45: [Rd, Gu],
  60: sv,
  61: Rd,
  95: Gu,
  96: Nd,
  126: Nd
}, Pv = {
  38: vp,
  92: gp
}, tS = {
  [-5]: Ao,
  [-4]: Ao,
  [-3]: Ao,
  33: Ov,
  38: vp,
  42: Lo,
  60: [D0, gv],
  91: Dv,
  92: [iv, gp],
  93: $o,
  95: Lo,
  96: X0
}, eS = {
  null: [Lo, Qv]
}, nS = {
  null: [42, 95]
}, lS = {
  null: []
}, iS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  attentionMarkers: nS,
  contentInitial: Iv,
  disable: lS,
  document: Fv,
  flow: $v,
  flowInitial: Wv,
  insideSpan: eS,
  string: Pv,
  text: tS
}, Symbol.toStringTag, { value: "Module" }));
function aS(i, a, r) {
  let c = {
    _bufferIndex: -1,
    _index: 0,
    line: r && r.line || 1,
    column: r && r.column || 1,
    offset: r && r.offset || 0
  };
  const s = {}, f = [];
  let h = [], p = [];
  const g = {
    attempt: W(vt),
    check: W(L),
    consume: nt,
    enter: Q,
    exit: st,
    interrupt: W(L, {
      interrupt: !0
    })
  }, d = {
    code: null,
    containerState: {},
    defineSkip: G,
    events: [],
    now: Y,
    parser: i,
    previous: null,
    sliceSerialize: E,
    sliceStream: x,
    write: S
  };
  let v = a.tokenize.call(d, g);
  return a.resolveAll && f.push(a), d;
  function S(P) {
    return h = Fe(h, P), F(), h[h.length - 1] !== null ? [] : (mt(a, 0), d.events = Wo(f, d.events, d), d.events);
  }
  function E(P, I) {
    return rS(x(P), I);
  }
  function x(P) {
    return uS(h, P);
  }
  function Y() {
    const {
      _bufferIndex: P,
      _index: I,
      line: _t,
      column: lt,
      offset: Z
    } = c;
    return {
      _bufferIndex: P,
      _index: I,
      line: _t,
      column: lt,
      offset: Z
    };
  }
  function G(P) {
    s[P.line] = P.column, zt();
  }
  function F() {
    let P;
    for (; c._index < h.length; ) {
      const I = h[c._index];
      if (typeof I == "string")
        for (P = c._index, c._bufferIndex < 0 && (c._bufferIndex = 0); c._index === P && c._bufferIndex < I.length; )
          R(I.charCodeAt(c._bufferIndex));
      else
        R(I);
    }
  }
  function R(P) {
    v = v(P);
  }
  function nt(P) {
    ot(P) ? (c.line++, c.column = 1, c.offset += P === -3 ? 2 : 1, zt()) : P !== -1 && (c.column++, c.offset++), c._bufferIndex < 0 ? c._index++ : (c._bufferIndex++, c._bufferIndex === // Points w/ non-negative `_bufferIndex` reference
    // strings.
    /** @type {string} */
    h[c._index].length && (c._bufferIndex = -1, c._index++)), d.previous = P;
  }
  function Q(P, I) {
    const _t = I || {};
    return _t.type = P, _t.start = Y(), d.events.push(["enter", _t, d]), p.push(_t), _t;
  }
  function st(P) {
    const I = p.pop();
    return I.end = Y(), d.events.push(["exit", I, d]), I;
  }
  function vt(P, I) {
    mt(P, I.from);
  }
  function L(P, I) {
    I.restore();
  }
  function W(P, I) {
    return _t;
    function _t(lt, Z, N) {
      let V, et, gt, A;
      return Array.isArray(lt) ? (
        /* c8 ignore next 1 */
        U(lt)
      ) : "tokenize" in lt ? (
        // Looks like a construct.
        U([
          /** @type {Construct} */
          lt
        ])
      ) : z(lt);
      function z(it) {
        return Et;
        function Et(Qt) {
          const Ut = Qt !== null && it[Qt], He = Qt !== null && it.null, on = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(Ut) ? Ut : Ut ? [Ut] : [],
            ...Array.isArray(He) ? He : He ? [He] : []
          ];
          return U(on)(Qt);
        }
      }
      function U(it) {
        return V = it, et = 0, it.length === 0 ? N : b(it[et]);
      }
      function b(it) {
        return Et;
        function Et(Qt) {
          return A = dt(), gt = it, it.partial || (d.currentConstruct = it), it.name && d.parser.constructs.disable.null.includes(it.name) ? rt() : it.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            I ? Object.assign(Object.create(d), I) : d,
            g,
            J,
            rt
          )(Qt);
        }
      }
      function J(it) {
        return P(gt, A), Z;
      }
      function rt(it) {
        return A.restore(), ++et < V.length ? b(V[et]) : N;
      }
    }
  }
  function mt(P, I) {
    P.resolveAll && !f.includes(P) && f.push(P), P.resolve && cn(d.events, I, d.events.length - I, P.resolve(d.events.slice(I), d)), P.resolveTo && (d.events = P.resolveTo(d.events, d));
  }
  function dt() {
    const P = Y(), I = d.previous, _t = d.currentConstruct, lt = d.events.length, Z = Array.from(p);
    return {
      from: lt,
      restore: N
    };
    function N() {
      c = P, d.previous = I, d.currentConstruct = _t, d.events.length = lt, p = Z, zt();
    }
  }
  function zt() {
    c.line in s && c.column < 2 && (c.column = s[c.line], c.offset += s[c.line] - 1);
  }
}
function uS(i, a) {
  const r = a.start._index, c = a.start._bufferIndex, s = a.end._index, f = a.end._bufferIndex;
  let h;
  if (r === s)
    h = [i[r].slice(c, f)];
  else {
    if (h = i.slice(r, s), c > -1) {
      const p = h[0];
      typeof p == "string" ? h[0] = p.slice(c) : h.shift();
    }
    f > 0 && h.push(i[s].slice(0, f));
  }
  return h;
}
function rS(i, a) {
  let r = -1;
  const c = [];
  let s;
  for (; ++r < i.length; ) {
    const f = i[r];
    let h;
    if (typeof f == "string")
      h = f;
    else switch (f) {
      case -5: {
        h = "\r";
        break;
      }
      case -4: {
        h = `
`;
        break;
      }
      case -3: {
        h = `\r
`;
        break;
      }
      case -2: {
        h = a ? " " : "	";
        break;
      }
      case -1: {
        if (!a && s) continue;
        h = " ";
        break;
      }
      default:
        h = String.fromCharCode(f);
    }
    s = f === -2, c.push(h);
  }
  return c.join("");
}
function cS(i) {
  const c = {
    constructs: (
      /** @type {FullNormalizedExtension} */
      p0([iS, ...(i || {}).extensions || []])
    ),
    content: s(A0),
    defined: [],
    document: s(z0),
    flow: s(Xv),
    lazy: {},
    string: s(Zv),
    text: s(Kv)
  };
  return c;
  function s(f) {
    return h;
    function h(p) {
      return aS(c, f, p);
    }
  }
}
function oS(i) {
  for (; !Sp(i); )
    ;
  return i;
}
const kd = /[\0\t\n\r]/g;
function sS() {
  let i = 1, a = "", r = !0, c;
  return s;
  function s(f, h, p) {
    const g = [];
    let d, v, S, E, x;
    for (f = a + (typeof f == "string" ? f.toString() : new TextDecoder(h || void 0).decode(f)), S = 0, a = "", r && (f.charCodeAt(0) === 65279 && S++, r = void 0); S < f.length; ) {
      if (kd.lastIndex = S, d = kd.exec(f), E = d && d.index !== void 0 ? d.index : f.length, x = f.charCodeAt(E), !d) {
        a = f.slice(S);
        break;
      }
      if (x === 10 && S === E && c)
        g.push(-3), c = void 0;
      else
        switch (c && (g.push(-5), c = void 0), S < E && (g.push(f.slice(S, E)), i += E - S), x) {
          case 0: {
            g.push(65533), i++;
            break;
          }
          case 9: {
            for (v = Math.ceil(i / 4) * 4, g.push(-2); i++ < v; ) g.push(-1);
            break;
          }
          case 10: {
            g.push(-4), i = 1;
            break;
          }
          default:
            c = !0, i = 1;
        }
      S = E + 1;
    }
    return p && (c && g.push(-5), a && g.push(a), g.push(null)), g;
  }
}
const fS = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function hS(i) {
  return i.replace(fS, mS);
}
function mS(i, a, r) {
  if (a)
    return a;
  if (r.charCodeAt(0) === 35) {
    const s = r.charCodeAt(1), f = s === 120 || s === 88;
    return pp(r.slice(f ? 2 : 1), f ? 16 : 10);
  }
  return Io(r) || i;
}
const zp = {}.hasOwnProperty;
function dS(i, a, r) {
  return typeof a != "string" && (r = a, a = void 0), pS(r)(oS(cS(r).document().write(sS()(i, a, !0))));
}
function pS(i) {
  const a = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: f(Tl),
      autolinkProtocol: dt,
      autolinkEmail: dt,
      atxHeading: f(El),
      blockQuote: f(He),
      characterEscape: dt,
      characterReference: dt,
      codeFenced: f(on),
      codeFencedFenceInfo: h,
      codeFencedFenceMeta: h,
      codeIndented: f(on, h),
      codeText: f(yi, h),
      codeTextData: dt,
      data: dt,
      codeFlowValue: dt,
      definition: f(xa),
      definitionDestinationString: h,
      definitionLabelString: h,
      definitionTitleString: h,
      emphasis: f(sn),
      hardBreakEscape: f(Al),
      hardBreakTrailing: f(Al),
      htmlFlow: f(Ea, h),
      htmlFlowData: dt,
      htmlText: f(Ea, h),
      htmlTextData: dt,
      image: f(Aa),
      label: h,
      link: f(Tl),
      listItem: f(gi),
      listItemValue: E,
      listOrdered: f(zl, S),
      listUnordered: f(zl),
      paragraph: f(Wu),
      reference: b,
      referenceString: h,
      resourceDestinationString: h,
      resourceTitleString: h,
      setextHeading: f(El),
      strong: f($u),
      thematicBreak: f(Pu)
    },
    exit: {
      atxHeading: g(),
      atxHeadingSequence: vt,
      autolink: g(),
      autolinkEmail: Ut,
      autolinkProtocol: Qt,
      blockQuote: g(),
      characterEscapeValue: zt,
      characterReferenceMarkerHexadecimal: rt,
      characterReferenceMarkerNumeric: rt,
      characterReferenceValue: it,
      characterReference: Et,
      codeFenced: g(F),
      codeFencedFence: G,
      codeFencedFenceInfo: x,
      codeFencedFenceMeta: Y,
      codeFlowValue: zt,
      codeIndented: g(R),
      codeText: g(Z),
      codeTextData: zt,
      data: zt,
      definition: g(),
      definitionDestinationString: st,
      definitionLabelString: nt,
      definitionTitleString: Q,
      emphasis: g(),
      hardBreakEscape: g(I),
      hardBreakTrailing: g(I),
      htmlFlow: g(_t),
      htmlFlowData: zt,
      htmlText: g(lt),
      htmlTextData: zt,
      image: g(V),
      label: gt,
      labelText: et,
      lineEnding: P,
      link: g(N),
      listItem: g(),
      listOrdered: g(),
      listUnordered: g(),
      paragraph: g(),
      referenceString: J,
      resourceDestinationString: A,
      resourceTitleString: z,
      resource: U,
      setextHeading: g(mt),
      setextHeadingLineSequence: W,
      setextHeadingText: L,
      strong: g(),
      thematicBreak: g()
    }
  };
  Cp(a, (i || {}).mdastExtensions || []);
  const r = {};
  return c;
  function c(j) {
    let K = {
      type: "root",
      children: []
    };
    const ct = {
      stack: [K],
      tokenStack: [],
      config: a,
      enter: p,
      exit: d,
      buffer: h,
      resume: v,
      data: r
    }, St = [];
    let wt = -1;
    for (; ++wt < j.length; )
      if (j[wt][1].type === "listOrdered" || j[wt][1].type === "listUnordered")
        if (j[wt][0] === "enter")
          St.push(wt);
        else {
          const Oe = St.pop();
          wt = s(j, Oe, wt);
        }
    for (wt = -1; ++wt < j.length; ) {
      const Oe = a[j[wt][0]];
      zp.call(Oe, j[wt][1].type) && Oe[j[wt][1].type].call(Object.assign({
        sliceSerialize: j[wt][2].sliceSerialize
      }, ct), j[wt][1]);
    }
    if (ct.tokenStack.length > 0) {
      const Oe = ct.tokenStack[ct.tokenStack.length - 1];
      (Oe[1] || Ud).call(ct, void 0, Oe[0]);
    }
    for (K.position = {
      start: el(j.length > 0 ? j[0][1].start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: el(j.length > 0 ? j[j.length - 2][1].end : {
        line: 1,
        column: 1,
        offset: 0
      })
    }, wt = -1; ++wt < a.transforms.length; )
      K = a.transforms[wt](K) || K;
    return K;
  }
  function s(j, K, ct) {
    let St = K - 1, wt = -1, Oe = !1, fn, pe, ne, ge;
    for (; ++St <= ct; ) {
      const Lt = j[St];
      switch (Lt[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          Lt[0] === "enter" ? wt++ : wt--, ge = void 0;
          break;
        }
        case "lineEndingBlank": {
          Lt[0] === "enter" && (fn && !ge && !wt && !ne && (ne = St), ge = void 0);
          break;
        }
        case "linePrefix":
        case "listItemValue":
        case "listItemMarker":
        case "listItemPrefix":
        case "listItemPrefixWhitespace":
          break;
        default:
          ge = void 0;
      }
      if (!wt && Lt[0] === "enter" && Lt[1].type === "listItemPrefix" || wt === -1 && Lt[0] === "exit" && (Lt[1].type === "listUnordered" || Lt[1].type === "listOrdered")) {
        if (fn) {
          let Dn = St;
          for (pe = void 0; Dn--; ) {
            const Ie = j[Dn];
            if (Ie[1].type === "lineEnding" || Ie[1].type === "lineEndingBlank") {
              if (Ie[0] === "exit") continue;
              pe && (j[pe][1].type = "lineEndingBlank", Oe = !0), Ie[1].type = "lineEnding", pe = Dn;
            } else if (!(Ie[1].type === "linePrefix" || Ie[1].type === "blockQuotePrefix" || Ie[1].type === "blockQuotePrefixWhitespace" || Ie[1].type === "blockQuoteMarker" || Ie[1].type === "listItemIndent")) break;
          }
          ne && (!pe || ne < pe) && (fn._spread = !0), fn.end = Object.assign({}, pe ? j[pe][1].start : Lt[1].end), j.splice(pe || St, 0, ["exit", fn, Lt[2]]), St++, ct++;
        }
        if (Lt[1].type === "listItemPrefix") {
          const Dn = {
            type: "listItem",
            _spread: !1,
            start: Object.assign({}, Lt[1].start),
            // @ts-expect-error: we’ll add `end` in a second.
            end: void 0
          };
          fn = Dn, j.splice(St, 0, ["enter", Dn, Lt[2]]), St++, ct++, ne = void 0, ge = !0;
        }
      }
    }
    return j[K][1]._spread = Oe, ct;
  }
  function f(j, K) {
    return ct;
    function ct(St) {
      p.call(this, j(St), St), K && K.call(this, St);
    }
  }
  function h() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function p(j, K, ct) {
    this.stack[this.stack.length - 1].children.push(j), this.stack.push(j), this.tokenStack.push([K, ct || void 0]), j.position = {
      start: el(K.start),
      // @ts-expect-error: `end` will be patched later.
      end: void 0
    };
  }
  function g(j) {
    return K;
    function K(ct) {
      j && j.call(this, ct), d.call(this, ct);
    }
  }
  function d(j, K) {
    const ct = this.stack.pop(), St = this.tokenStack.pop();
    if (St)
      St[0].type !== j.type && (K ? K.call(this, j, St[0]) : (St[1] || Ud).call(this, j, St[0]));
    else throw new Error("Cannot close `" + j.type + "` (" + pa({
      start: j.start,
      end: j.end
    }) + "): it’s not open");
    ct.position.end = el(j.end);
  }
  function v() {
    return m0(this.stack.pop());
  }
  function S() {
    this.data.expectingFirstListItemValue = !0;
  }
  function E(j) {
    if (this.data.expectingFirstListItemValue) {
      const K = this.stack[this.stack.length - 2];
      K.start = Number.parseInt(this.sliceSerialize(j), 10), this.data.expectingFirstListItemValue = void 0;
    }
  }
  function x() {
    const j = this.resume(), K = this.stack[this.stack.length - 1];
    K.lang = j;
  }
  function Y() {
    const j = this.resume(), K = this.stack[this.stack.length - 1];
    K.meta = j;
  }
  function G() {
    this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
  }
  function F() {
    const j = this.resume(), K = this.stack[this.stack.length - 1];
    K.value = j.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
  }
  function R() {
    const j = this.resume(), K = this.stack[this.stack.length - 1];
    K.value = j.replace(/(\r?\n|\r)$/g, "");
  }
  function nt(j) {
    const K = this.resume(), ct = this.stack[this.stack.length - 1];
    ct.label = K, ct.identifier = mi(this.sliceSerialize(j)).toLowerCase();
  }
  function Q() {
    const j = this.resume(), K = this.stack[this.stack.length - 1];
    K.title = j;
  }
  function st() {
    const j = this.resume(), K = this.stack[this.stack.length - 1];
    K.url = j;
  }
  function vt(j) {
    const K = this.stack[this.stack.length - 1];
    if (!K.depth) {
      const ct = this.sliceSerialize(j).length;
      K.depth = ct;
    }
  }
  function L() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function W(j) {
    const K = this.stack[this.stack.length - 1];
    K.depth = this.sliceSerialize(j).codePointAt(0) === 61 ? 1 : 2;
  }
  function mt() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function dt(j) {
    const ct = this.stack[this.stack.length - 1].children;
    let St = ct[ct.length - 1];
    (!St || St.type !== "text") && (St = de(), St.position = {
      start: el(j.start),
      // @ts-expect-error: we’ll add `end` later.
      end: void 0
    }, ct.push(St)), this.stack.push(St);
  }
  function zt(j) {
    const K = this.stack.pop();
    K.value += this.sliceSerialize(j), K.position.end = el(j.end);
  }
  function P(j) {
    const K = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const ct = K.children[K.children.length - 1];
      ct.position.end = el(j.end), this.data.atHardBreak = void 0;
      return;
    }
    !this.data.setextHeadingSlurpLineEnding && a.canContainEols.includes(K.type) && (dt.call(this, j), zt.call(this, j));
  }
  function I() {
    this.data.atHardBreak = !0;
  }
  function _t() {
    const j = this.resume(), K = this.stack[this.stack.length - 1];
    K.value = j;
  }
  function lt() {
    const j = this.resume(), K = this.stack[this.stack.length - 1];
    K.value = j;
  }
  function Z() {
    const j = this.resume(), K = this.stack[this.stack.length - 1];
    K.value = j;
  }
  function N() {
    const j = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const K = this.data.referenceType || "shortcut";
      j.type += "Reference", j.referenceType = K, delete j.url, delete j.title;
    } else
      delete j.identifier, delete j.label;
    this.data.referenceType = void 0;
  }
  function V() {
    const j = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const K = this.data.referenceType || "shortcut";
      j.type += "Reference", j.referenceType = K, delete j.url, delete j.title;
    } else
      delete j.identifier, delete j.label;
    this.data.referenceType = void 0;
  }
  function et(j) {
    const K = this.sliceSerialize(j), ct = this.stack[this.stack.length - 2];
    ct.label = hS(K), ct.identifier = mi(K).toLowerCase();
  }
  function gt() {
    const j = this.stack[this.stack.length - 1], K = this.resume(), ct = this.stack[this.stack.length - 1];
    if (this.data.inReference = !0, ct.type === "link") {
      const St = j.children;
      ct.children = St;
    } else
      ct.alt = K;
  }
  function A() {
    const j = this.resume(), K = this.stack[this.stack.length - 1];
    K.url = j;
  }
  function z() {
    const j = this.resume(), K = this.stack[this.stack.length - 1];
    K.title = j;
  }
  function U() {
    this.data.inReference = void 0;
  }
  function b() {
    this.data.referenceType = "collapsed";
  }
  function J(j) {
    const K = this.resume(), ct = this.stack[this.stack.length - 1];
    ct.label = K, ct.identifier = mi(this.sliceSerialize(j)).toLowerCase(), this.data.referenceType = "full";
  }
  function rt(j) {
    this.data.characterReferenceType = j.type;
  }
  function it(j) {
    const K = this.sliceSerialize(j), ct = this.data.characterReferenceType;
    let St;
    ct ? (St = pp(K, ct === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : St = Io(K);
    const wt = this.stack[this.stack.length - 1];
    wt.value += St;
  }
  function Et(j) {
    const K = this.stack.pop();
    K.position.end = el(j.end);
  }
  function Qt(j) {
    zt.call(this, j);
    const K = this.stack[this.stack.length - 1];
    K.url = this.sliceSerialize(j);
  }
  function Ut(j) {
    zt.call(this, j);
    const K = this.stack[this.stack.length - 1];
    K.url = "mailto:" + this.sliceSerialize(j);
  }
  function He() {
    return {
      type: "blockquote",
      children: []
    };
  }
  function on() {
    return {
      type: "code",
      lang: null,
      meta: null,
      value: ""
    };
  }
  function yi() {
    return {
      type: "inlineCode",
      value: ""
    };
  }
  function xa() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: ""
    };
  }
  function sn() {
    return {
      type: "emphasis",
      children: []
    };
  }
  function El() {
    return {
      type: "heading",
      // @ts-expect-error `depth` will be set later.
      depth: 0,
      children: []
    };
  }
  function Al() {
    return {
      type: "break"
    };
  }
  function Ea() {
    return {
      type: "html",
      value: ""
    };
  }
  function Aa() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null
    };
  }
  function Tl() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function zl(j) {
    return {
      type: "list",
      ordered: j.type === "listOrdered",
      start: null,
      spread: j._spread,
      children: []
    };
  }
  function gi(j) {
    return {
      type: "listItem",
      spread: j._spread,
      checked: null,
      children: []
    };
  }
  function Wu() {
    return {
      type: "paragraph",
      children: []
    };
  }
  function $u() {
    return {
      type: "strong",
      children: []
    };
  }
  function de() {
    return {
      type: "text",
      value: ""
    };
  }
  function Pu() {
    return {
      type: "thematicBreak"
    };
  }
}
function el(i) {
  return {
    line: i.line,
    column: i.column,
    offset: i.offset
  };
}
function Cp(i, a) {
  let r = -1;
  for (; ++r < a.length; ) {
    const c = a[r];
    Array.isArray(c) ? Cp(i, c) : yS(i, c);
  }
}
function yS(i, a) {
  let r;
  for (r in a)
    if (zp.call(a, r))
      switch (r) {
        case "canContainEols": {
          const c = a[r];
          c && i[r].push(...c);
          break;
        }
        case "transforms": {
          const c = a[r];
          c && i[r].push(...c);
          break;
        }
        case "enter":
        case "exit": {
          const c = a[r];
          c && Object.assign(i[r], c);
          break;
        }
      }
}
function Ud(i, a) {
  throw i ? new Error("Cannot close `" + i.type + "` (" + pa({
    start: i.start,
    end: i.end
  }) + "): a different token (`" + a.type + "`, " + pa({
    start: a.start,
    end: a.end
  }) + ") is open") : new Error("Cannot close document, a token (`" + a.type + "`, " + pa({
    start: a.start,
    end: a.end
  }) + ") is still open");
}
function gS(i) {
  const a = this;
  a.parser = r;
  function r(c) {
    return dS(c, {
      ...a.data("settings"),
      ...i,
      // Note: these options are not in the readme.
      // The goal is for them to be set by plugins on `data` instead of being
      // passed by users.
      extensions: a.data("micromarkExtensions") || [],
      mdastExtensions: a.data("fromMarkdownExtensions") || []
    });
  }
}
function vS(i, a) {
  const r = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: i.wrap(i.all(a), !0)
  };
  return i.patch(a, r), i.applyData(a, r);
}
function SS(i, a) {
  const r = { type: "element", tagName: "br", properties: {}, children: [] };
  return i.patch(a, r), [i.applyData(a, r), { type: "text", value: `
` }];
}
function bS(i, a) {
  const r = a.value ? a.value + `
` : "", c = {}, s = a.lang ? a.lang.split(/\s+/) : [];
  s.length > 0 && (c.className = ["language-" + s[0]]);
  let f = {
    type: "element",
    tagName: "code",
    properties: c,
    children: [{ type: "text", value: r }]
  };
  return a.meta && (f.data = { meta: a.meta }), i.patch(a, f), f = i.applyData(a, f), f = { type: "element", tagName: "pre", properties: {}, children: [f] }, i.patch(a, f), f;
}
function xS(i, a) {
  const r = {
    type: "element",
    tagName: "del",
    properties: {},
    children: i.all(a)
  };
  return i.patch(a, r), i.applyData(a, r);
}
function ES(i, a) {
  const r = {
    type: "element",
    tagName: "em",
    properties: {},
    children: i.all(a)
  };
  return i.patch(a, r), i.applyData(a, r);
}
function AS(i, a) {
  const r = typeof i.options.clobberPrefix == "string" ? i.options.clobberPrefix : "user-content-", c = String(a.identifier).toUpperCase(), s = pi(c.toLowerCase()), f = i.footnoteOrder.indexOf(c);
  let h, p = i.footnoteCounts.get(c);
  p === void 0 ? (p = 0, i.footnoteOrder.push(c), h = i.footnoteOrder.length) : h = f + 1, p += 1, i.footnoteCounts.set(c, p);
  const g = {
    type: "element",
    tagName: "a",
    properties: {
      href: "#" + r + "fn-" + s,
      id: r + "fnref-" + s + (p > 1 ? "-" + p : ""),
      dataFootnoteRef: !0,
      ariaDescribedBy: ["footnote-label"]
    },
    children: [{ type: "text", value: String(h) }]
  };
  i.patch(a, g);
  const d = {
    type: "element",
    tagName: "sup",
    properties: {},
    children: [g]
  };
  return i.patch(a, d), i.applyData(a, d);
}
function TS(i, a) {
  const r = {
    type: "element",
    tagName: "h" + a.depth,
    properties: {},
    children: i.all(a)
  };
  return i.patch(a, r), i.applyData(a, r);
}
function zS(i, a) {
  if (i.options.allowDangerousHtml) {
    const r = { type: "raw", value: a.value };
    return i.patch(a, r), i.applyData(a, r);
  }
}
function _p(i, a) {
  const r = a.referenceType;
  let c = "]";
  if (r === "collapsed" ? c += "[]" : r === "full" && (c += "[" + (a.label || a.identifier) + "]"), a.type === "imageReference")
    return [{ type: "text", value: "![" + a.alt + c }];
  const s = i.all(a), f = s[0];
  f && f.type === "text" ? f.value = "[" + f.value : s.unshift({ type: "text", value: "[" });
  const h = s[s.length - 1];
  return h && h.type === "text" ? h.value += c : s.push({ type: "text", value: c }), s;
}
function CS(i, a) {
  const r = String(a.identifier).toUpperCase(), c = i.definitionById.get(r);
  if (!c)
    return _p(i, a);
  const s = { src: pi(c.url || ""), alt: a.alt };
  c.title !== null && c.title !== void 0 && (s.title = c.title);
  const f = { type: "element", tagName: "img", properties: s, children: [] };
  return i.patch(a, f), i.applyData(a, f);
}
function _S(i, a) {
  const r = { src: pi(a.url) };
  a.alt !== null && a.alt !== void 0 && (r.alt = a.alt), a.title !== null && a.title !== void 0 && (r.title = a.title);
  const c = { type: "element", tagName: "img", properties: r, children: [] };
  return i.patch(a, c), i.applyData(a, c);
}
function OS(i, a) {
  const r = { type: "text", value: a.value.replace(/\r?\n|\r/g, " ") };
  i.patch(a, r);
  const c = {
    type: "element",
    tagName: "code",
    properties: {},
    children: [r]
  };
  return i.patch(a, c), i.applyData(a, c);
}
function MS(i, a) {
  const r = String(a.identifier).toUpperCase(), c = i.definitionById.get(r);
  if (!c)
    return _p(i, a);
  const s = { href: pi(c.url || "") };
  c.title !== null && c.title !== void 0 && (s.title = c.title);
  const f = {
    type: "element",
    tagName: "a",
    properties: s,
    children: i.all(a)
  };
  return i.patch(a, f), i.applyData(a, f);
}
function DS(i, a) {
  const r = { href: pi(a.url) };
  a.title !== null && a.title !== void 0 && (r.title = a.title);
  const c = {
    type: "element",
    tagName: "a",
    properties: r,
    children: i.all(a)
  };
  return i.patch(a, c), i.applyData(a, c);
}
function NS(i, a, r) {
  const c = i.all(a), s = r ? wS(r) : Op(a), f = {}, h = [];
  if (typeof a.checked == "boolean") {
    const v = c[0];
    let S;
    v && v.type === "element" && v.tagName === "p" ? S = v : (S = { type: "element", tagName: "p", properties: {}, children: [] }, c.unshift(S)), S.children.length > 0 && S.children.unshift({ type: "text", value: " " }), S.children.unshift({
      type: "element",
      tagName: "input",
      properties: { type: "checkbox", checked: a.checked, disabled: !0 },
      children: []
    }), f.className = ["task-list-item"];
  }
  let p = -1;
  for (; ++p < c.length; ) {
    const v = c[p];
    (s || p !== 0 || v.type !== "element" || v.tagName !== "p") && h.push({ type: "text", value: `
` }), v.type === "element" && v.tagName === "p" && !s ? h.push(...v.children) : h.push(v);
  }
  const g = c[c.length - 1];
  g && (s || g.type !== "element" || g.tagName !== "p") && h.push({ type: "text", value: `
` });
  const d = { type: "element", tagName: "li", properties: f, children: h };
  return i.patch(a, d), i.applyData(a, d);
}
function wS(i) {
  let a = !1;
  if (i.type === "list") {
    a = i.spread || !1;
    const r = i.children;
    let c = -1;
    for (; !a && ++c < r.length; )
      a = Op(r[c]);
  }
  return a;
}
function Op(i) {
  const a = i.spread;
  return a ?? i.children.length > 1;
}
function RS(i, a) {
  const r = {}, c = i.all(a);
  let s = -1;
  for (typeof a.start == "number" && a.start !== 1 && (r.start = a.start); ++s < c.length; ) {
    const h = c[s];
    if (h.type === "element" && h.tagName === "li" && h.properties && Array.isArray(h.properties.className) && h.properties.className.includes("task-list-item")) {
      r.className = ["contains-task-list"];
      break;
    }
  }
  const f = {
    type: "element",
    tagName: a.ordered ? "ol" : "ul",
    properties: r,
    children: i.wrap(c, !0)
  };
  return i.patch(a, f), i.applyData(a, f);
}
function kS(i, a) {
  const r = {
    type: "element",
    tagName: "p",
    properties: {},
    children: i.all(a)
  };
  return i.patch(a, r), i.applyData(a, r);
}
function US(i, a) {
  const r = { type: "root", children: i.wrap(i.all(a)) };
  return i.patch(a, r), i.applyData(a, r);
}
function jS(i, a) {
  const r = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: i.all(a)
  };
  return i.patch(a, r), i.applyData(a, r);
}
function BS(i, a) {
  const r = i.all(a), c = r.shift(), s = [];
  if (c) {
    const h = {
      type: "element",
      tagName: "thead",
      properties: {},
      children: i.wrap([c], !0)
    };
    i.patch(a.children[0], h), s.push(h);
  }
  if (r.length > 0) {
    const h = {
      type: "element",
      tagName: "tbody",
      properties: {},
      children: i.wrap(r, !0)
    }, p = Zo(a.children[1]), g = cp(a.children[a.children.length - 1]);
    p && g && (h.position = { start: p, end: g }), s.push(h);
  }
  const f = {
    type: "element",
    tagName: "table",
    properties: {},
    children: i.wrap(s, !0)
  };
  return i.patch(a, f), i.applyData(a, f);
}
function HS(i, a, r) {
  const c = r ? r.children : void 0, f = (c ? c.indexOf(a) : 1) === 0 ? "th" : "td", h = r && r.type === "table" ? r.align : void 0, p = h ? h.length : a.children.length;
  let g = -1;
  const d = [];
  for (; ++g < p; ) {
    const S = a.children[g], E = {}, x = h ? h[g] : void 0;
    x && (E.align = x);
    let Y = { type: "element", tagName: f, properties: E, children: [] };
    S && (Y.children = i.all(S), i.patch(S, Y), Y = i.applyData(S, Y)), d.push(Y);
  }
  const v = {
    type: "element",
    tagName: "tr",
    properties: {},
    children: i.wrap(d, !0)
  };
  return i.patch(a, v), i.applyData(a, v);
}
function LS(i, a) {
  const r = {
    type: "element",
    tagName: "td",
    // Assume body cell.
    properties: {},
    children: i.all(a)
  };
  return i.patch(a, r), i.applyData(a, r);
}
const jd = 9, Bd = 32;
function qS(i) {
  const a = String(i), r = /\r?\n|\r/g;
  let c = r.exec(a), s = 0;
  const f = [];
  for (; c; )
    f.push(
      Hd(a.slice(s, c.index), s > 0, !0),
      c[0]
    ), s = c.index + c[0].length, c = r.exec(a);
  return f.push(Hd(a.slice(s), s > 0, !1)), f.join("");
}
function Hd(i, a, r) {
  let c = 0, s = i.length;
  if (a) {
    let f = i.codePointAt(c);
    for (; f === jd || f === Bd; )
      c++, f = i.codePointAt(c);
  }
  if (r) {
    let f = i.codePointAt(s - 1);
    for (; f === jd || f === Bd; )
      s--, f = i.codePointAt(s - 1);
  }
  return s > c ? i.slice(c, s) : "";
}
function YS(i, a) {
  const r = { type: "text", value: qS(String(a.value)) };
  return i.patch(a, r), i.applyData(a, r);
}
function VS(i, a) {
  const r = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return i.patch(a, r), i.applyData(a, r);
}
const XS = {
  blockquote: vS,
  break: SS,
  code: bS,
  delete: xS,
  emphasis: ES,
  footnoteReference: AS,
  heading: TS,
  html: zS,
  imageReference: CS,
  image: _S,
  inlineCode: OS,
  linkReference: MS,
  link: DS,
  listItem: NS,
  list: RS,
  paragraph: kS,
  // @ts-expect-error: root is different, but hard to type.
  root: US,
  strong: jS,
  table: BS,
  tableCell: LS,
  tableRow: HS,
  text: YS,
  thematicBreak: VS,
  toml: Yu,
  yaml: Yu,
  definition: Yu,
  footnoteDefinition: Yu
};
function Yu() {
}
const Mp = -1, Fu = 0, ga = 1, Qu = 2, Po = 3, ts = 4, es = 5, ns = 6, Dp = 7, Np = 8, Ld = typeof self == "object" ? self : globalThis, GS = (i, a) => {
  const r = (s, f) => (i.set(f, s), s), c = (s) => {
    if (i.has(s))
      return i.get(s);
    const [f, h] = a[s];
    switch (f) {
      case Fu:
      case Mp:
        return r(h, s);
      case ga: {
        const p = r([], s);
        for (const g of h)
          p.push(c(g));
        return p;
      }
      case Qu: {
        const p = r({}, s);
        for (const [g, d] of h)
          p[c(g)] = c(d);
        return p;
      }
      case Po:
        return r(new Date(h), s);
      case ts: {
        const { source: p, flags: g } = h;
        return r(new RegExp(p, g), s);
      }
      case es: {
        const p = r(/* @__PURE__ */ new Map(), s);
        for (const [g, d] of h)
          p.set(c(g), c(d));
        return p;
      }
      case ns: {
        const p = r(/* @__PURE__ */ new Set(), s);
        for (const g of h)
          p.add(c(g));
        return p;
      }
      case Dp: {
        const { name: p, message: g } = h;
        return r(new Ld[p](g), s);
      }
      case Np:
        return r(BigInt(h), s);
      case "BigInt":
        return r(Object(BigInt(h)), s);
      case "ArrayBuffer":
        return r(new Uint8Array(h).buffer, h);
      case "DataView": {
        const { buffer: p } = new Uint8Array(h);
        return r(new DataView(p), h);
      }
    }
    return r(new Ld[f](h), s);
  };
  return c;
}, qd = (i) => GS(/* @__PURE__ */ new Map(), i)(0), fi = "", { toString: QS } = {}, { keys: ZS } = Object, da = (i) => {
  const a = typeof i;
  if (a !== "object" || !i)
    return [Fu, a];
  const r = QS.call(i).slice(8, -1);
  switch (r) {
    case "Array":
      return [ga, fi];
    case "Object":
      return [Qu, fi];
    case "Date":
      return [Po, fi];
    case "RegExp":
      return [ts, fi];
    case "Map":
      return [es, fi];
    case "Set":
      return [ns, fi];
    case "DataView":
      return [ga, r];
  }
  return r.includes("Array") ? [ga, r] : r.includes("Error") ? [Dp, r] : [Qu, r];
}, Vu = ([i, a]) => i === Fu && (a === "function" || a === "symbol"), KS = (i, a, r, c) => {
  const s = (h, p) => {
    const g = c.push(h) - 1;
    return r.set(p, g), g;
  }, f = (h) => {
    if (r.has(h))
      return r.get(h);
    let [p, g] = da(h);
    switch (p) {
      case Fu: {
        let v = h;
        switch (g) {
          case "bigint":
            p = Np, v = h.toString();
            break;
          case "function":
          case "symbol":
            if (i)
              throw new TypeError("unable to serialize " + g);
            v = null;
            break;
          case "undefined":
            return s([Mp], h);
        }
        return s([p, v], h);
      }
      case ga: {
        if (g) {
          let E = h;
          return g === "DataView" ? E = new Uint8Array(h.buffer) : g === "ArrayBuffer" && (E = new Uint8Array(h)), s([g, [...E]], h);
        }
        const v = [], S = s([p, v], h);
        for (const E of h)
          v.push(f(E));
        return S;
      }
      case Qu: {
        if (g)
          switch (g) {
            case "BigInt":
              return s([g, h.toString()], h);
            case "Boolean":
            case "Number":
            case "String":
              return s([g, h.valueOf()], h);
          }
        if (a && "toJSON" in h)
          return f(h.toJSON());
        const v = [], S = s([p, v], h);
        for (const E of ZS(h))
          (i || !Vu(da(h[E]))) && v.push([f(E), f(h[E])]);
        return S;
      }
      case Po:
        return s([p, h.toISOString()], h);
      case ts: {
        const { source: v, flags: S } = h;
        return s([p, { source: v, flags: S }], h);
      }
      case es: {
        const v = [], S = s([p, v], h);
        for (const [E, x] of h)
          (i || !(Vu(da(E)) || Vu(da(x)))) && v.push([f(E), f(x)]);
        return S;
      }
      case ns: {
        const v = [], S = s([p, v], h);
        for (const E of h)
          (i || !Vu(da(E))) && v.push(f(E));
        return S;
      }
    }
    const { message: d } = h;
    return s([p, { name: g, message: d }], h);
  };
  return f;
}, Yd = (i, { json: a, lossy: r } = {}) => {
  const c = [];
  return KS(!(a || r), !!a, /* @__PURE__ */ new Map(), c)(i), c;
}, Zu = typeof structuredClone == "function" ? (
  /* c8 ignore start */
  (i, a) => a && ("json" in a || "lossy" in a) ? qd(Yd(i, a)) : structuredClone(i)
) : (i, a) => qd(Yd(i, a));
function JS(i, a) {
  const r = [{ type: "text", value: "↩" }];
  return a > 1 && r.push({
    type: "element",
    tagName: "sup",
    properties: {},
    children: [{ type: "text", value: String(a) }]
  }), r;
}
function FS(i, a) {
  return "Back to reference " + (i + 1) + (a > 1 ? "-" + a : "");
}
function IS(i) {
  const a = typeof i.options.clobberPrefix == "string" ? i.options.clobberPrefix : "user-content-", r = i.options.footnoteBackContent || JS, c = i.options.footnoteBackLabel || FS, s = i.options.footnoteLabel || "Footnotes", f = i.options.footnoteLabelTagName || "h2", h = i.options.footnoteLabelProperties || {
    className: ["sr-only"]
  }, p = [];
  let g = -1;
  for (; ++g < i.footnoteOrder.length; ) {
    const d = i.footnoteById.get(
      i.footnoteOrder[g]
    );
    if (!d)
      continue;
    const v = i.all(d), S = String(d.identifier).toUpperCase(), E = pi(S.toLowerCase());
    let x = 0;
    const Y = [], G = i.footnoteCounts.get(S);
    for (; G !== void 0 && ++x <= G; ) {
      Y.length > 0 && Y.push({ type: "text", value: " " });
      let nt = typeof r == "string" ? r : r(g, x);
      typeof nt == "string" && (nt = { type: "text", value: nt }), Y.push({
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + a + "fnref-" + E + (x > 1 ? "-" + x : ""),
          dataFootnoteBackref: "",
          ariaLabel: typeof c == "string" ? c : c(g, x),
          className: ["data-footnote-backref"]
        },
        children: Array.isArray(nt) ? nt : [nt]
      });
    }
    const F = v[v.length - 1];
    if (F && F.type === "element" && F.tagName === "p") {
      const nt = F.children[F.children.length - 1];
      nt && nt.type === "text" ? nt.value += " " : F.children.push({ type: "text", value: " " }), F.children.push(...Y);
    } else
      v.push(...Y);
    const R = {
      type: "element",
      tagName: "li",
      properties: { id: a + "fn-" + E },
      children: i.wrap(v, !0)
    };
    i.patch(d, R), p.push(R);
  }
  if (p.length !== 0)
    return {
      type: "element",
      tagName: "section",
      properties: { dataFootnotes: !0, className: ["footnotes"] },
      children: [
        {
          type: "element",
          tagName: f,
          properties: {
            ...Zu(h),
            id: "footnote-label"
          },
          children: [{ type: "text", value: s }]
        },
        { type: "text", value: `
` },
        {
          type: "element",
          tagName: "ol",
          properties: {},
          children: i.wrap(p, !0)
        },
        { type: "text", value: `
` }
      ]
    };
}
const wp = (
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
  (function(i) {
    if (i == null)
      return tb;
    if (typeof i == "function")
      return Iu(i);
    if (typeof i == "object")
      return Array.isArray(i) ? WS(i) : (
        // Cast because `ReadonlyArray` goes into the above but `isArray`
        // narrows to `Array`.
        $S(
          /** @type {Props} */
          i
        )
      );
    if (typeof i == "string")
      return PS(i);
    throw new Error("Expected function, string, or object as test");
  })
);
function WS(i) {
  const a = [];
  let r = -1;
  for (; ++r < i.length; )
    a[r] = wp(i[r]);
  return Iu(c);
  function c(...s) {
    let f = -1;
    for (; ++f < a.length; )
      if (a[f].apply(this, s)) return !0;
    return !1;
  }
}
function $S(i) {
  const a = (
    /** @type {Record<string, unknown>} */
    i
  );
  return Iu(r);
  function r(c) {
    const s = (
      /** @type {Record<string, unknown>} */
      /** @type {unknown} */
      c
    );
    let f;
    for (f in i)
      if (s[f] !== a[f]) return !1;
    return !0;
  }
}
function PS(i) {
  return Iu(a);
  function a(r) {
    return r && r.type === i;
  }
}
function Iu(i) {
  return a;
  function a(r, c, s) {
    return !!(eb(r) && i.call(
      this,
      r,
      typeof c == "number" ? c : void 0,
      s || void 0
    ));
  }
}
function tb() {
  return !0;
}
function eb(i) {
  return i !== null && typeof i == "object" && "type" in i;
}
const Rp = [], nb = !0, Vd = !1, lb = "skip";
function ib(i, a, r, c) {
  let s;
  typeof a == "function" && typeof r != "function" ? (c = r, r = a) : s = a;
  const f = wp(s), h = c ? -1 : 1;
  p(i, void 0, [])();
  function p(g, d, v) {
    const S = (
      /** @type {Record<string, unknown>} */
      g && typeof g == "object" ? g : {}
    );
    if (typeof S.type == "string") {
      const x = (
        // `hast`
        typeof S.tagName == "string" ? S.tagName : (
          // `xast`
          typeof S.name == "string" ? S.name : void 0
        )
      );
      Object.defineProperty(E, "name", {
        value: "node (" + (g.type + (x ? "<" + x + ">" : "")) + ")"
      });
    }
    return E;
    function E() {
      let x = Rp, Y, G, F;
      if ((!a || f(g, d, v[v.length - 1] || void 0)) && (x = ab(r(g, v)), x[0] === Vd))
        return x;
      if ("children" in g && g.children) {
        const R = (
          /** @type {UnistParent} */
          g
        );
        if (R.children && x[0] !== lb)
          for (G = (c ? R.children.length : -1) + h, F = v.concat(R); G > -1 && G < R.children.length; ) {
            const nt = R.children[G];
            if (Y = p(nt, G, F)(), Y[0] === Vd)
              return Y;
            G = typeof Y[1] == "number" ? Y[1] : G + h;
          }
      }
      return x;
    }
  }
}
function ab(i) {
  return Array.isArray(i) ? i : typeof i == "number" ? [nb, i] : i == null ? Rp : [i];
}
function kp(i, a, r, c) {
  let s, f, h;
  typeof a == "function" && typeof r != "function" ? (f = void 0, h = a, s = r) : (f = a, h = r, s = c), ib(i, f, p, s);
  function p(g, d) {
    const v = d[d.length - 1], S = v ? v.children.indexOf(g) : void 0;
    return h(g, S, v);
  }
}
const qo = {}.hasOwnProperty, ub = {};
function rb(i, a) {
  const r = a || ub, c = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), h = { ...XS, ...r.handlers }, p = {
    all: d,
    applyData: ob,
    definitionById: c,
    footnoteById: s,
    footnoteCounts: f,
    footnoteOrder: [],
    handlers: h,
    one: g,
    options: r,
    patch: cb,
    wrap: fb
  };
  return kp(i, function(v) {
    if (v.type === "definition" || v.type === "footnoteDefinition") {
      const S = v.type === "definition" ? c : s, E = String(v.identifier).toUpperCase();
      S.has(E) || S.set(E, v);
    }
  }), p;
  function g(v, S) {
    const E = v.type, x = p.handlers[E];
    if (qo.call(p.handlers, E) && x)
      return x(p, v, S);
    if (p.options.passThrough && p.options.passThrough.includes(E)) {
      if ("children" in v) {
        const { children: G, ...F } = v, R = Zu(F);
        return R.children = p.all(v), R;
      }
      return Zu(v);
    }
    return (p.options.unknownHandler || sb)(p, v, S);
  }
  function d(v) {
    const S = [];
    if ("children" in v) {
      const E = v.children;
      let x = -1;
      for (; ++x < E.length; ) {
        const Y = p.one(E[x], v);
        if (Y) {
          if (x && E[x - 1].type === "break" && (!Array.isArray(Y) && Y.type === "text" && (Y.value = Xd(Y.value)), !Array.isArray(Y) && Y.type === "element")) {
            const G = Y.children[0];
            G && G.type === "text" && (G.value = Xd(G.value));
          }
          Array.isArray(Y) ? S.push(...Y) : S.push(Y);
        }
      }
    }
    return S;
  }
}
function cb(i, a) {
  i.position && (a.position = Q1(i));
}
function ob(i, a) {
  let r = a;
  if (i && i.data) {
    const c = i.data.hName, s = i.data.hChildren, f = i.data.hProperties;
    if (typeof c == "string")
      if (r.type === "element")
        r.tagName = c;
      else {
        const h = "children" in r ? r.children : [r];
        r = { type: "element", tagName: c, properties: {}, children: h };
      }
    r.type === "element" && f && Object.assign(r.properties, Zu(f)), "children" in r && r.children && s !== null && s !== void 0 && (r.children = s);
  }
  return r;
}
function sb(i, a) {
  const r = a.data || {}, c = "value" in a && !(qo.call(r, "hProperties") || qo.call(r, "hChildren")) ? { type: "text", value: a.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: i.all(a)
  };
  return i.patch(a, c), i.applyData(a, c);
}
function fb(i, a) {
  const r = [];
  let c = -1;
  for (a && r.push({ type: "text", value: `
` }); ++c < i.length; )
    c && r.push({ type: "text", value: `
` }), r.push(i[c]);
  return a && i.length > 0 && r.push({ type: "text", value: `
` }), r;
}
function Xd(i) {
  let a = 0, r = i.charCodeAt(a);
  for (; r === 9 || r === 32; )
    a++, r = i.charCodeAt(a);
  return i.slice(a);
}
function Gd(i, a) {
  const r = rb(i, a), c = r.one(i, void 0), s = IS(r), f = Array.isArray(c) ? { type: "root", children: c } : c || { type: "root", children: [] };
  return s && f.children.push({ type: "text", value: `
` }, s), f;
}
function hb(i, a) {
  return i && "run" in i ? async function(r, c) {
    const s = (
      /** @type {HastRoot} */
      Gd(r, { file: c, ...a })
    );
    await i.run(s, c);
  } : function(r, c) {
    return (
      /** @type {HastRoot} */
      Gd(r, { file: c, ...i || a })
    );
  };
}
function Qd(i) {
  if (i)
    throw i;
}
var To, Zd;
function mb() {
  if (Zd) return To;
  Zd = 1;
  var i = Object.prototype.hasOwnProperty, a = Object.prototype.toString, r = Object.defineProperty, c = Object.getOwnPropertyDescriptor, s = function(d) {
    return typeof Array.isArray == "function" ? Array.isArray(d) : a.call(d) === "[object Array]";
  }, f = function(d) {
    if (!d || a.call(d) !== "[object Object]")
      return !1;
    var v = i.call(d, "constructor"), S = d.constructor && d.constructor.prototype && i.call(d.constructor.prototype, "isPrototypeOf");
    if (d.constructor && !v && !S)
      return !1;
    var E;
    for (E in d)
      ;
    return typeof E > "u" || i.call(d, E);
  }, h = function(d, v) {
    r && v.name === "__proto__" ? r(d, v.name, {
      enumerable: !0,
      configurable: !0,
      value: v.newValue,
      writable: !0
    }) : d[v.name] = v.newValue;
  }, p = function(d, v) {
    if (v === "__proto__")
      if (i.call(d, v)) {
        if (c)
          return c(d, v).value;
      } else return;
    return d[v];
  };
  return To = function g() {
    var d, v, S, E, x, Y, G = arguments[0], F = 1, R = arguments.length, nt = !1;
    for (typeof G == "boolean" && (nt = G, G = arguments[1] || {}, F = 2), (G == null || typeof G != "object" && typeof G != "function") && (G = {}); F < R; ++F)
      if (d = arguments[F], d != null)
        for (v in d)
          S = p(G, v), E = p(d, v), G !== E && (nt && E && (f(E) || (x = s(E))) ? (x ? (x = !1, Y = S && s(S) ? S : []) : Y = S && f(S) ? S : {}, h(G, { name: v, newValue: g(nt, Y, E) })) : typeof E < "u" && h(G, { name: v, newValue: E }));
    return G;
  }, To;
}
var db = mb();
const zo = /* @__PURE__ */ Ku(db);
function Yo(i) {
  if (typeof i != "object" || i === null)
    return !1;
  const a = Object.getPrototypeOf(i);
  return (a === null || a === Object.prototype || Object.getPrototypeOf(a) === null) && !(Symbol.toStringTag in i) && !(Symbol.iterator in i);
}
function pb() {
  const i = [], a = { run: r, use: c };
  return a;
  function r(...s) {
    let f = -1;
    const h = s.pop();
    if (typeof h != "function")
      throw new TypeError("Expected function as last argument, not " + h);
    p(null, ...s);
    function p(g, ...d) {
      const v = i[++f];
      let S = -1;
      if (g) {
        h(g);
        return;
      }
      for (; ++S < s.length; )
        (d[S] === null || d[S] === void 0) && (d[S] = s[S]);
      s = d, v ? yb(v, p)(...d) : h(null, ...d);
    }
  }
  function c(s) {
    if (typeof s != "function")
      throw new TypeError(
        "Expected `middelware` to be a function, not " + s
      );
    return i.push(s), a;
  }
}
function yb(i, a) {
  let r;
  return c;
  function c(...h) {
    const p = i.length > h.length;
    let g;
    p && h.push(s);
    try {
      g = i.apply(this, h);
    } catch (d) {
      const v = (
        /** @type {Error} */
        d
      );
      if (p && r)
        throw v;
      return s(v);
    }
    p || (g && g.then && typeof g.then == "function" ? g.then(f, s) : g instanceof Error ? s(g) : f(g));
  }
  function s(h, ...p) {
    r || (r = !0, a(h, ...p));
  }
  function f(h) {
    s(null, h);
  }
}
const an = { basename: gb, dirname: vb, extname: Sb, join: bb, sep: "/" };
function gb(i, a) {
  if (a !== void 0 && typeof a != "string")
    throw new TypeError('"ext" argument must be a string');
  ba(i);
  let r = 0, c = -1, s = i.length, f;
  if (a === void 0 || a.length === 0 || a.length > i.length) {
    for (; s--; )
      if (i.codePointAt(s) === 47) {
        if (f) {
          r = s + 1;
          break;
        }
      } else c < 0 && (f = !0, c = s + 1);
    return c < 0 ? "" : i.slice(r, c);
  }
  if (a === i)
    return "";
  let h = -1, p = a.length - 1;
  for (; s--; )
    if (i.codePointAt(s) === 47) {
      if (f) {
        r = s + 1;
        break;
      }
    } else
      h < 0 && (f = !0, h = s + 1), p > -1 && (i.codePointAt(s) === a.codePointAt(p--) ? p < 0 && (c = s) : (p = -1, c = h));
  return r === c ? c = h : c < 0 && (c = i.length), i.slice(r, c);
}
function vb(i) {
  if (ba(i), i.length === 0)
    return ".";
  let a = -1, r = i.length, c;
  for (; --r; )
    if (i.codePointAt(r) === 47) {
      if (c) {
        a = r;
        break;
      }
    } else c || (c = !0);
  return a < 0 ? i.codePointAt(0) === 47 ? "/" : "." : a === 1 && i.codePointAt(0) === 47 ? "//" : i.slice(0, a);
}
function Sb(i) {
  ba(i);
  let a = i.length, r = -1, c = 0, s = -1, f = 0, h;
  for (; a--; ) {
    const p = i.codePointAt(a);
    if (p === 47) {
      if (h) {
        c = a + 1;
        break;
      }
      continue;
    }
    r < 0 && (h = !0, r = a + 1), p === 46 ? s < 0 ? s = a : f !== 1 && (f = 1) : s > -1 && (f = -1);
  }
  return s < 0 || r < 0 || // We saw a non-dot character immediately before the dot.
  f === 0 || // The (right-most) trimmed path component is exactly `..`.
  f === 1 && s === r - 1 && s === c + 1 ? "" : i.slice(s, r);
}
function bb(...i) {
  let a = -1, r;
  for (; ++a < i.length; )
    ba(i[a]), i[a] && (r = r === void 0 ? i[a] : r + "/" + i[a]);
  return r === void 0 ? "." : xb(r);
}
function xb(i) {
  ba(i);
  const a = i.codePointAt(0) === 47;
  let r = Eb(i, !a);
  return r.length === 0 && !a && (r = "."), r.length > 0 && i.codePointAt(i.length - 1) === 47 && (r += "/"), a ? "/" + r : r;
}
function Eb(i, a) {
  let r = "", c = 0, s = -1, f = 0, h = -1, p, g;
  for (; ++h <= i.length; ) {
    if (h < i.length)
      p = i.codePointAt(h);
    else {
      if (p === 47)
        break;
      p = 47;
    }
    if (p === 47) {
      if (!(s === h - 1 || f === 1)) if (s !== h - 1 && f === 2) {
        if (r.length < 2 || c !== 2 || r.codePointAt(r.length - 1) !== 46 || r.codePointAt(r.length - 2) !== 46) {
          if (r.length > 2) {
            if (g = r.lastIndexOf("/"), g !== r.length - 1) {
              g < 0 ? (r = "", c = 0) : (r = r.slice(0, g), c = r.length - 1 - r.lastIndexOf("/")), s = h, f = 0;
              continue;
            }
          } else if (r.length > 0) {
            r = "", c = 0, s = h, f = 0;
            continue;
          }
        }
        a && (r = r.length > 0 ? r + "/.." : "..", c = 2);
      } else
        r.length > 0 ? r += "/" + i.slice(s + 1, h) : r = i.slice(s + 1, h), c = h - s - 1;
      s = h, f = 0;
    } else p === 46 && f > -1 ? f++ : f = -1;
  }
  return r;
}
function ba(i) {
  if (typeof i != "string")
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(i)
    );
}
const Ab = { cwd: Tb };
function Tb() {
  return "/";
}
function Vo(i) {
  return !!(i !== null && typeof i == "object" && "href" in i && i.href && "protocol" in i && i.protocol && // @ts-expect-error: indexing is fine.
  i.auth === void 0);
}
function zb(i) {
  if (typeof i == "string")
    i = new URL(i);
  else if (!Vo(i)) {
    const a = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + i + "`"
    );
    throw a.code = "ERR_INVALID_ARG_TYPE", a;
  }
  if (i.protocol !== "file:") {
    const a = new TypeError("The URL must be of scheme file");
    throw a.code = "ERR_INVALID_URL_SCHEME", a;
  }
  return Cb(i);
}
function Cb(i) {
  if (i.hostname !== "") {
    const c = new TypeError(
      'File URL host must be "localhost" or empty on darwin'
    );
    throw c.code = "ERR_INVALID_FILE_URL_HOST", c;
  }
  const a = i.pathname;
  let r = -1;
  for (; ++r < a.length; )
    if (a.codePointAt(r) === 37 && a.codePointAt(r + 1) === 50) {
      const c = a.codePointAt(r + 2);
      if (c === 70 || c === 102) {
        const s = new TypeError(
          "File URL path must not include encoded / characters"
        );
        throw s.code = "ERR_INVALID_FILE_URL_PATH", s;
      }
    }
  return decodeURIComponent(a);
}
const Co = (
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
class Up {
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
  constructor(a) {
    let r;
    a ? Vo(a) ? r = { path: a } : typeof a == "string" || _b(a) ? r = { value: a } : r = a : r = {}, this.cwd = "cwd" in r ? "" : Ab.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
    let c = -1;
    for (; ++c < Co.length; ) {
      const f = Co[c];
      f in r && r[f] !== void 0 && r[f] !== null && (this[f] = f === "history" ? [...r[f]] : r[f]);
    }
    let s;
    for (s in r)
      Co.includes(s) || (this[s] = r[s]);
  }
  /**
   * Get the basename (including extname) (example: `'index.min.js'`).
   *
   * @returns {string | undefined}
   *   Basename.
   */
  get basename() {
    return typeof this.path == "string" ? an.basename(this.path) : void 0;
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
  set basename(a) {
    Oo(a, "basename"), _o(a, "basename"), this.path = an.join(this.dirname || "", a);
  }
  /**
   * Get the parent path (example: `'~'`).
   *
   * @returns {string | undefined}
   *   Dirname.
   */
  get dirname() {
    return typeof this.path == "string" ? an.dirname(this.path) : void 0;
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
  set dirname(a) {
    Kd(this.basename, "dirname"), this.path = an.join(a || "", this.basename);
  }
  /**
   * Get the extname (including dot) (example: `'.js'`).
   *
   * @returns {string | undefined}
   *   Extname.
   */
  get extname() {
    return typeof this.path == "string" ? an.extname(this.path) : void 0;
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
  set extname(a) {
    if (_o(a, "extname"), Kd(this.dirname, "extname"), a) {
      if (a.codePointAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (a.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = an.join(this.dirname, this.stem + (a || ""));
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
  set path(a) {
    Vo(a) && (a = zb(a)), Oo(a, "path"), this.path !== a && this.history.push(a);
  }
  /**
   * Get the stem (basename w/o extname) (example: `'index.min'`).
   *
   * @returns {string | undefined}
   *   Stem.
   */
  get stem() {
    return typeof this.path == "string" ? an.basename(this.path, this.extname) : void 0;
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
  set stem(a) {
    Oo(a, "stem"), _o(a, "stem"), this.path = an.join(this.dirname || "", a + (this.extname || ""));
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
  fail(a, r, c) {
    const s = this.message(a, r, c);
    throw s.fatal = !0, s;
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
  info(a, r, c) {
    const s = this.message(a, r, c);
    return s.fatal = void 0, s;
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
  message(a, r, c) {
    const s = new me(
      // @ts-expect-error: the overloads are fine.
      a,
      r,
      c
    );
    return this.path && (s.name = this.path + ":" + s.name, s.file = this.path), s.fatal = !1, this.messages.push(s), s;
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
  toString(a) {
    return this.value === void 0 ? "" : typeof this.value == "string" ? this.value : new TextDecoder(a || void 0).decode(this.value);
  }
}
function _o(i, a) {
  if (i && i.includes(an.sep))
    throw new Error(
      "`" + a + "` cannot be a path: did not expect `" + an.sep + "`"
    );
}
function Oo(i, a) {
  if (!i)
    throw new Error("`" + a + "` cannot be empty");
}
function Kd(i, a) {
  if (!i)
    throw new Error("Setting `" + a + "` requires `path` to be set too");
}
function _b(i) {
  return !!(i && typeof i == "object" && "byteLength" in i && "byteOffset" in i);
}
const Ob = (
  /**
   * @type {new <Parameters extends Array<unknown>, Result>(property: string | symbol) => (...parameters: Parameters) => Result}
   */
  /** @type {unknown} */
  /**
   * @this {Function}
   * @param {string | symbol} property
   * @returns {(...parameters: Array<unknown>) => unknown}
   */
  (function(i) {
    const c = (
      /** @type {Record<string | symbol, Function>} */
      // Prototypes do exist.
      // type-coverage:ignore-next-line
      this.constructor.prototype
    ), s = c[i], f = function() {
      return s.apply(f, arguments);
    };
    return Object.setPrototypeOf(f, c), f;
  })
), Mb = {}.hasOwnProperty;
class ls extends Ob {
  /**
   * Create a processor.
   */
  constructor() {
    super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = pb();
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
    const a = (
      /** @type {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>} */
      new ls()
    );
    let r = -1;
    for (; ++r < this.attachers.length; ) {
      const c = this.attachers[r];
      a.use(...c);
    }
    return a.data(zo(!0, {}, this.namespace)), a;
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
  data(a, r) {
    return typeof a == "string" ? arguments.length === 2 ? (No("data", this.frozen), this.namespace[a] = r, this) : Mb.call(this.namespace, a) && this.namespace[a] || void 0 : a ? (No("data", this.frozen), this.namespace = a, this) : this.namespace;
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
    const a = (
      /** @type {Processor} */
      /** @type {unknown} */
      this
    );
    for (; ++this.freezeIndex < this.attachers.length; ) {
      const [r, ...c] = this.attachers[this.freezeIndex];
      if (c[0] === !1)
        continue;
      c[0] === !0 && (c[0] = void 0);
      const s = r.call(a, ...c);
      typeof s == "function" && this.transformers.use(s);
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
  parse(a) {
    this.freeze();
    const r = Xu(a), c = this.parser || this.Parser;
    return Mo("parse", c), c(String(r), r);
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
  process(a, r) {
    const c = this;
    return this.freeze(), Mo("process", this.parser || this.Parser), Do("process", this.compiler || this.Compiler), r ? s(void 0, r) : new Promise(s);
    function s(f, h) {
      const p = Xu(a), g = (
        /** @type {HeadTree extends undefined ? Node : HeadTree} */
        /** @type {unknown} */
        c.parse(p)
      );
      c.run(g, p, function(v, S, E) {
        if (v || !S || !E)
          return d(v);
        const x = (
          /** @type {CompileTree extends undefined ? Node : CompileTree} */
          /** @type {unknown} */
          S
        ), Y = c.stringify(x, E);
        wb(Y) ? E.value = Y : E.result = Y, d(
          v,
          /** @type {VFileWithOutput<CompileResult>} */
          E
        );
      });
      function d(v, S) {
        v || !S ? h(v) : f ? f(S) : r(void 0, S);
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
  processSync(a) {
    let r = !1, c;
    return this.freeze(), Mo("processSync", this.parser || this.Parser), Do("processSync", this.compiler || this.Compiler), this.process(a, s), Fd("processSync", "process", r), c;
    function s(f, h) {
      r = !0, Qd(f), c = h;
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
  run(a, r, c) {
    Jd(a), this.freeze();
    const s = this.transformers;
    return !c && typeof r == "function" && (c = r, r = void 0), c ? f(void 0, c) : new Promise(f);
    function f(h, p) {
      const g = Xu(r);
      s.run(a, g, d);
      function d(v, S, E) {
        const x = (
          /** @type {TailTree extends undefined ? Node : TailTree} */
          S || a
        );
        v ? p(v) : h ? h(x) : c(void 0, x, E);
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
  runSync(a, r) {
    let c = !1, s;
    return this.run(a, r, f), Fd("runSync", "run", c), s;
    function f(h, p) {
      Qd(h), s = p, c = !0;
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
  stringify(a, r) {
    this.freeze();
    const c = Xu(r), s = this.compiler || this.Compiler;
    return Do("stringify", s), Jd(a), s(a, c);
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
  use(a, ...r) {
    const c = this.attachers, s = this.namespace;
    if (No("use", this.frozen), a != null) if (typeof a == "function")
      g(a, r);
    else if (typeof a == "object")
      Array.isArray(a) ? p(a) : h(a);
    else
      throw new TypeError("Expected usable value, not `" + a + "`");
    return this;
    function f(d) {
      if (typeof d == "function")
        g(d, []);
      else if (typeof d == "object")
        if (Array.isArray(d)) {
          const [v, ...S] = (
            /** @type {PluginTuple<Array<unknown>>} */
            d
          );
          g(v, S);
        } else
          h(d);
      else
        throw new TypeError("Expected usable value, not `" + d + "`");
    }
    function h(d) {
      if (!("plugins" in d) && !("settings" in d))
        throw new Error(
          "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither"
        );
      p(d.plugins), d.settings && (s.settings = zo(!0, s.settings, d.settings));
    }
    function p(d) {
      let v = -1;
      if (d != null) if (Array.isArray(d))
        for (; ++v < d.length; ) {
          const S = d[v];
          f(S);
        }
      else
        throw new TypeError("Expected a list of plugins, not `" + d + "`");
    }
    function g(d, v) {
      let S = -1, E = -1;
      for (; ++S < c.length; )
        if (c[S][0] === d) {
          E = S;
          break;
        }
      if (E === -1)
        c.push([d, ...v]);
      else if (v.length > 0) {
        let [x, ...Y] = v;
        const G = c[E][1];
        Yo(G) && Yo(x) && (x = zo(!0, G, x)), c[E] = [d, x, ...Y];
      }
    }
  }
}
const Db = new ls().freeze();
function Mo(i, a) {
  if (typeof a != "function")
    throw new TypeError("Cannot `" + i + "` without `parser`");
}
function Do(i, a) {
  if (typeof a != "function")
    throw new TypeError("Cannot `" + i + "` without `compiler`");
}
function No(i, a) {
  if (a)
    throw new Error(
      "Cannot call `" + i + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function Jd(i) {
  if (!Yo(i) || typeof i.type != "string")
    throw new TypeError("Expected node, got `" + i + "`");
}
function Fd(i, a, r) {
  if (!r)
    throw new Error(
      "`" + i + "` finished async. Use `" + a + "` instead"
    );
}
function Xu(i) {
  return Nb(i) ? i : new Up(i);
}
function Nb(i) {
  return !!(i && typeof i == "object" && "message" in i && "messages" in i);
}
function wb(i) {
  return typeof i == "string" || Rb(i);
}
function Rb(i) {
  return !!(i && typeof i == "object" && "byteLength" in i && "byteOffset" in i);
}
const kb = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", Id = [], Wd = { allowDangerousHtml: !0 }, Ub = /^(https?|ircs?|mailto|xmpp)$/i, jb = [
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
  { from: "className", id: "remove-classname" },
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
function $d(i) {
  const a = Bb(i), r = Hb(i);
  return Lb(a.runSync(a.parse(r), r), i);
}
function Bb(i) {
  const a = i.rehypePlugins || Id, r = i.remarkPlugins || Id, c = i.remarkRehypeOptions ? { ...i.remarkRehypeOptions, ...Wd } : Wd;
  return Db().use(gS).use(r).use(hb, c).use(a);
}
function Hb(i) {
  const a = i.children || "", r = new Up();
  return typeof a == "string" && (r.value = a), r;
}
function Lb(i, a) {
  const r = a.allowedElements, c = a.allowElement, s = a.components, f = a.disallowedElements, h = a.skipHtml, p = a.unwrapDisallowed, g = a.urlTransform || qb;
  for (const v of jb)
    Object.hasOwn(a, v.from) && ("" + v.from + (v.to ? "use `" + v.to + "` instead" : "remove it") + kb + v.id, void 0);
  return kp(i, d), I1(i, {
    Fragment: q.Fragment,
    components: s,
    ignoreInvalidStyle: !0,
    jsx: q.jsx,
    jsxs: q.jsxs,
    passKeys: !0,
    passNode: !0
  });
  function d(v, S, E) {
    if (v.type === "raw" && E && typeof S == "number")
      return h ? E.children.splice(S, 1) : E.children[S] = { type: "text", value: v.value }, S;
    if (v.type === "element") {
      let x;
      for (x in xo)
        if (Object.hasOwn(xo, x) && Object.hasOwn(v.properties, x)) {
          const Y = v.properties[x], G = xo[x];
          (G === null || G.includes(v.tagName)) && (v.properties[x] = g(String(Y || ""), x, v));
        }
    }
    if (v.type === "element") {
      let x = r ? !r.includes(v.tagName) : f ? f.includes(v.tagName) : !1;
      if (!x && c && typeof S == "number" && (x = !c(v, S, E)), x && E && typeof S == "number")
        return p && v.children ? E.children.splice(S, 1, ...v.children) : E.children.splice(S, 1), S;
    }
  }
}
function qb(i) {
  const a = i.indexOf(":"), r = i.indexOf("?"), c = i.indexOf("#"), s = i.indexOf("/");
  return (
    // If there is no protocol, it’s relative.
    a === -1 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
    s !== -1 && a > s || r !== -1 && a > r || c !== -1 && a > c || // It is a protocol, it should be allowed.
    Ub.test(i.slice(0, a)) ? i : ""
  );
}
class wo {
  /**
   * Send a message to the background script
   */
  static async sendMessage(a, r) {
    return new Promise((c, s) => {
      try {
        chrome.runtime.sendMessage(
          { type: a, payload: r },
          (f) => {
            chrome.runtime.lastError ? s(new Error(chrome.runtime.lastError.message)) : c(f);
          }
        );
      } catch (f) {
        s(f);
      }
    });
  }
  /**
   * Execute a tool via the background script
   */
  static async executeTool(a, r, c) {
    return this.sendMessage("EXECUTE_TOOL", {
      sessionId: a,
      tool: r,
      input: c
    });
  }
  /**
   * Get page content
   */
  static async getPageContent() {
    return this.sendMessage("SCRAPE_PAGE");
  }
  /**
   * Summarize the current page
   */
  static async summarizePage(a) {
    return (await this.executeTool(a, "summarize_page", {})).data;
  }
  /**
   * Ask a question about the current page
   */
  static async askAboutPage(a, r) {
    return (await this.executeTool(a, "answer_question", {
      question: r
    })).data;
  }
  /**
   * Create a new session
   */
  static async createSession(a, r, c) {
    return (await this.sendMessage("CREATE_SESSION", {
      tabId: a,
      pageUrl: r,
      pageTitle: c
    })).sessionId;
  }
  /**
   * Save memory entry
   */
  static async saveMemory(a, r, c) {
    await this.executeTool(a, "remember_fact", {
      content: r,
      type: c
    });
  }
  /**
   * Send automation action (requires confirmation)
   */
  static async executeAutomation(a, r, c, s = !0) {
    return s ? this.sendMessage("CONFIRM_AUTOMATION", {
      sessionId: a,
      tool: r,
      params: c
    }) : this.executeTool(a, r, c);
  }
}
const Yb = () => ({
  executeTool: async (c, s, f) => {
    try {
      return await wo.executeTool(c, s, f);
    } catch (h) {
      throw console.error(`Tool execution failed: ${s}`, h), h;
    }
  },
  ask: async (c, s) => {
    try {
      return await wo.askAboutPage(c, s);
    } catch (f) {
      throw console.error("Failed to ask question", f), f;
    }
  },
  summarize: async (c) => {
    try {
      return await wo.summarizePage(c);
    } catch (s) {
      throw console.error("Failed to summarize page", s), s;
    }
  }
}), Pd = () => {
  const [i, a] = un.useState("summary"), [r, c] = un.useState('Click "Analyze Page" to generate a summary.'), [s, f] = un.useState(""), [h, p] = un.useState(!1), g = g1(), d = S1(), v = ue((R) => R.sessionId), { setAgentLoading: S, addMessage: E } = ue(), { summarize: x, ask: Y } = Yb();
  un.useEffect(() => {
    i === "chat" && document.querySelector(".psi-copilot-input input")?.focus();
  }, [i]);
  const G = async () => {
    if (v) {
      p(!0), S(!0), c("Analyzing page...");
      try {
        const R = await x(v);
        c(R || "No summary generated."), ue.setState((nt) => ({
          shortTermMemory: [`Summarized: ${R?.substring(0, 100)}...`, ...nt.shortTermMemory].slice(0, 50)
        }));
      } catch (R) {
        c(
          `Error: ${R instanceof Error ? R.message : "Failed to summarize page"}`
        );
      } finally {
        p(!1), S(!1);
      }
    }
  }, F = async () => {
    if (!s.trim() || !v) return;
    const R = s;
    f(""), p(!0), S(!0);
    const nt = {
      id: `msg_${Date.now()}`,
      role: "user",
      content: R,
      timestamp: Date.now()
    };
    E(nt);
    try {
      const Q = await Y(v, R), st = {
        id: `msg_${Date.now()}_response`,
        role: "assistant",
        content: Q || "No response generated.",
        timestamp: Date.now()
      };
      E(st);
    } catch (Q) {
      const st = {
        id: `msg_${Date.now()}_error`,
        role: "assistant",
        content: `Error: ${Q instanceof Error ? Q.message : "Failed to get response"}`,
        timestamp: Date.now()
      };
      E(st);
    } finally {
      p(!1), S(!1);
    }
  };
  return /* @__PURE__ */ q.jsxs("div", { className: "psi-copilot", children: [
    /* @__PURE__ */ q.jsxs("div", { className: "psi-copilot-tabs", children: [
      /* @__PURE__ */ q.jsx(
        "button",
        {
          className: `psi-copilot-tab ${i === "summary" ? "active" : ""}`,
          onClick: () => a("summary"),
          children: "Summary"
        }
      ),
      /* @__PURE__ */ q.jsx(
        "button",
        {
          className: `psi-copilot-tab ${i === "chat" ? "active" : ""}`,
          onClick: () => a("chat"),
          children: "Chat"
        }
      )
    ] }),
    i === "summary" && /* @__PURE__ */ q.jsxs("div", { className: "psi-copilot-view", children: [
      /* @__PURE__ */ q.jsx("div", { className: "psi-copilot-body psi-markdown", children: /* @__PURE__ */ q.jsx($d, { children: r }) }),
      /* @__PURE__ */ q.jsx(
        "button",
        {
          className: "psi-copilot-action-btn",
          onClick: G,
          disabled: h || d,
          children: h || d ? "Analyzing..." : "Analyze Page"
        }
      )
    ] }),
    i === "chat" && /* @__PURE__ */ q.jsxs("div", { className: "psi-copilot-view psi-copilot-chat", children: [
      /* @__PURE__ */ q.jsx("div", { className: "psi-copilot-messages", children: g.length === 0 ? /* @__PURE__ */ q.jsx("div", { className: "psi-copilot-empty", children: /* @__PURE__ */ q.jsx("p", { children: "Start a conversation about this page" }) }) : g.map((R) => /* @__PURE__ */ q.jsx("div", { className: `psi-copilot-msg ${R.role}`, children: /* @__PURE__ */ q.jsx("div", { className: "psi-msg-content psi-markdown", children: /* @__PURE__ */ q.jsx($d, { children: R.content }) }) }, R.id)) }),
      /* @__PURE__ */ q.jsxs("div", { className: "psi-copilot-input", children: [
        /* @__PURE__ */ q.jsx(
          "input",
          {
            type: "text",
            placeholder: "Ask about this page...",
            value: s,
            onChange: (R) => f(R.target.value),
            onKeyDown: (R) => {
              R.key === "Enter" && !R.shiftKey && !h && !d && F();
            },
            disabled: h || d
          }
        ),
        /* @__PURE__ */ q.jsx(
          "button",
          {
            onClick: F,
            disabled: !s.trim() || h || d,
            children: h || d ? "..." : "→"
          }
        )
      ] })
    ] })
  ] });
}, Vb = () => {
  const [i, a] = un.useState("short"), [r, c] = un.useState(""), [s, f] = un.useState("fact"), h = ue((E) => E.memoryEntries), p = ue((E) => E.shortTermMemory), { addMemoryEntry: g, removeMemoryEntry: d } = ue(), v = () => {
    if (!r.trim()) return;
    const E = {
      id: `mem_${Date.now()}`,
      type: s,
      content: r,
      relatedEntities: [],
      createdAt: Date.now(),
      updatedAt: Date.now(),
      importance: "medium"
    };
    g(E), c("");
  }, S = (E) => {
    switch (E) {
      case "fact":
        return "[INSIGHT]";
      case "preference":
        return "[STARRED]";
      case "task":
        return "✓";
      default:
        return "[NOTE]";
    }
  };
  return /* @__PURE__ */ q.jsxs("div", { className: "psi-memory", children: [
    /* @__PURE__ */ q.jsxs("div", { className: "psi-memory-tabs", children: [
      /* @__PURE__ */ q.jsx(
        "button",
        {
          className: `psi-memory-tab ${i === "short" ? "active" : ""}`,
          onClick: () => a("short"),
          children: "Short-term"
        }
      ),
      /* @__PURE__ */ q.jsx(
        "button",
        {
          className: `psi-memory-tab ${i === "long" ? "active" : ""}`,
          onClick: () => a("long"),
          children: "Long-term"
        }
      )
    ] }),
    i === "short" && /* @__PURE__ */ q.jsxs("div", { className: "psi-memory-view", children: [
      /* @__PURE__ */ q.jsx("div", { className: "psi-memory-info", children: /* @__PURE__ */ q.jsxs("p", { children: [
        "Recent interactions and context (",
        p.length,
        " items)"
      ] }) }),
      /* @__PURE__ */ q.jsx("div", { className: "psi-memory-list", children: p.length === 0 ? /* @__PURE__ */ q.jsx("p", { className: "psi-memory-empty", children: "No recent memory yet" }) : p.map((E, x) => /* @__PURE__ */ q.jsx("div", { className: "psi-memory-item", children: /* @__PURE__ */ q.jsxs("span", { title: E, children: [
        E.substring(0, 60),
        "..."
      ] }) }, x)) })
    ] }),
    i === "long" && /* @__PURE__ */ q.jsxs("div", { className: "psi-memory-view", children: [
      /* @__PURE__ */ q.jsxs("div", { className: "psi-memory-input-area", children: [
        /* @__PURE__ */ q.jsxs("div", { className: "psi-memory-input-group", children: [
          /* @__PURE__ */ q.jsx(
            "input",
            {
              type: "text",
              placeholder: "Add a fact, preference, or task...",
              value: r,
              onChange: (E) => c(E.target.value),
              onKeyDown: (E) => {
                E.key === "Enter" && v();
              }
            }
          ),
          /* @__PURE__ */ q.jsxs(
            "select",
            {
              value: s,
              onChange: (E) => f(E.target.value),
              children: [
                /* @__PURE__ */ q.jsx("option", { value: "fact", children: "Fact" }),
                /* @__PURE__ */ q.jsx("option", { value: "preference", children: "Preference" }),
                /* @__PURE__ */ q.jsx("option", { value: "task", children: "Task" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ q.jsx("button", { onClick: v, disabled: !r.trim(), children: "Save" })
      ] }),
      /* @__PURE__ */ q.jsx("div", { className: "psi-memory-list", children: h.length === 0 ? /* @__PURE__ */ q.jsx("p", { className: "psi-memory-empty", children: "No saved memories yet" }) : h.map((E) => /* @__PURE__ */ q.jsxs("div", { className: "psi-memory-item", children: [
        /* @__PURE__ */ q.jsxs("div", { className: "psi-memory-item-header", children: [
          /* @__PURE__ */ q.jsx("span", { className: "psi-memory-item-icon", children: S(E.type) }),
          /* @__PURE__ */ q.jsx("span", { className: "psi-memory-item-type", children: E.type })
        ] }),
        /* @__PURE__ */ q.jsx("div", { className: "psi-memory-item-content", children: E.content }),
        /* @__PURE__ */ q.jsx(
          "button",
          {
            className: "psi-memory-delete-btn",
            onClick: () => d(E.id),
            children: "✕"
          }
        )
      ] }, E.id)) })
    ] })
  ] });
};
function Xb() {
  const i = y1(), a = tp(), { initializeAgents: r, setSidebarOpen: c, createSession: s } = ue();
  un.useEffect(() => {
    r(), chrome.runtime.sendMessage(
      { type: "GET_CURRENT_TAB" },
      (h) => {
        h?.tab && (s(h.tab.id, h.tab.url, h.tab.title), c(!0));
      }
    );
  }, []);
  const f = () => {
    if (a)
      return /* @__PURE__ */ q.jsx(md, {});
    switch (i) {
      case "web-copilot":
        return /* @__PURE__ */ q.jsx(Pd, {});
      case "chat":
        return /* @__PURE__ */ q.jsx(Pd, {});
      // Use same copilot for now
      case "memory":
        return /* @__PURE__ */ q.jsx(Vb, {});
      case "automation":
        return /* @__PURE__ */ q.jsxs("div", { className: "psi-coming-soon", children: [
          /* @__PURE__ */ q.jsx("h3", { children: "Automation" }),
          /* @__PURE__ */ q.jsx("p", { children: "Automation workflows coming soon..." })
        ] });
      case "voice":
        return /* @__PURE__ */ q.jsxs("div", { className: "psi-coming-soon", children: [
          /* @__PURE__ */ q.jsx("h3", { children: "Voice Agent" }),
          /* @__PURE__ */ q.jsx("p", { children: "Voice interaction coming soon..." })
        ] });
      case "research":
        return /* @__PURE__ */ q.jsxs("div", { className: "psi-coming-soon", children: [
          /* @__PURE__ */ q.jsx("h3", { children: "Research Agent" }),
          /* @__PURE__ */ q.jsx("p", { children: "Deep research capabilities coming soon..." })
        ] });
      default:
        return /* @__PURE__ */ q.jsx(md, {});
    }
  };
  return /* @__PURE__ */ q.jsxs(q.Fragment, { children: [
    /* @__PURE__ */ q.jsx(b1, { children: f() }),
    /* @__PURE__ */ q.jsx(x1, {})
  ] });
}
function Gb(i) {
  u1.createRoot(i).render(/* @__PURE__ */ q.jsx(Xb, {}));
}
export {
  Gb as mountSidebar
};
