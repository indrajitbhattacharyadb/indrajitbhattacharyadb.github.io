if (window.pbjs && window.pbjs.libLoaded)
  try {
    console.log('first load')
    window.pbjs.getConfig("debug");
  } catch (e) {}
else
  !(function () {
    console.log('first else block')
    var e,
      n = {
        5706: function (e, n, t) {
          t.d(n, {
            Pd: function () {
              return d;
            },
            Th: function () {
              return s;
            },
            _U: function () {
              return f;
            },
          });
          var r = t(5730),
            i = t(4358),
            o = t(265),
            a = t(4614),
            u = (0, t(8640).R)(),
            c = "outstream";
          function s(e) {
            var n = this,
              t = e.url,
              o = e.config,
              a = e.id,
              u = e.callback,
              s = e.loaded,
              d = e.adUnitCode,
              f = e.renderNow;
            (this.url = t),
              (this.config = o),
              (this.handlers = {}),
              (this.id = a),
              (this.renderNow = f),
              (this.loaded = s),
              (this.cmd = []),
              (this.push = function (e) {
                "function" == typeof e
                  ? n.loaded
                    ? e.call()
                    : n.cmd.push(e)
                  : (0, i.H)(
                      "Commands given to Renderer.push must be wrapped in a function"
                    );
              }),
              (this.callback =
                u ||
                function () {
                  (n.loaded = !0), n.process();
                }),
              (this.render = function () {
                var e = this,
                  n = arguments,
                  o = function () {
                    e._render
                      ? e._render.apply(e, n)
                      : (0, i.yN)(
                          "No render function was provided, please use .setRender on the renderer"
                        );
                  };
                l(d)
                  ? ((0, i.yN)(
                      "External Js not loaded by Renderer since renderer url and callback is already defined on adUnit ".concat(
                        d
                      )
                    ),
                    o())
                  : f
                  ? o()
                  : (this.cmd.unshift(o),
                    (0, r.B)(t, c, this.callback, this.documentContext));
              }.bind(this));
          }
          function d(e) {
            return !(!e || (!e.url && !e.renderNow));
          }
          function f(e, n, t) {
            var r = null;
            e.config &&
              e.config.documentResolver &&
              (r = e.config.documentResolver(n, document, t)),
              r || (r = document),
              (e.documentContext = r),
              e.render(n, e.documentContext);
          }
          function l(e) {
            var n = u.adUnits,
              t = (0, a.sE)(n, function (n) {
                return n.code === e;
              });
            if (!t) return !1;
            var r = (0, o.Z)(t, "renderer"),
              i = !!(r && r.url && r.render),
              c = (0, o.Z)(t, "mediaTypes.video.renderer"),
              s = !!(c && c.url && c.render);
            return !!((i && !0 !== r.backupOnly) || (s && !0 !== c.backupOnly));
          }
          (s.install = function (e) {
            return new s({
              url: e.url,
              config: e.config,
              id: e.id,
              callback: e.callback,
              loaded: e.loaded,
              adUnitCode: e.adUnitCode,
              renderNow: e.renderNow,
            });
          }),
            (s.prototype.getConfig = function () {
              return this.config;
            }),
            (s.prototype.setRender = function (e) {
              this._render = e;
            }),
            (s.prototype.setEventHandlers = function (e) {
              this.handlers = e;
            }),
            (s.prototype.handleVideoEvent = function (e) {
              var n = e.id,
                t = e.eventName;
              "function" == typeof this.handlers[t] && this.handlers[t](),
                (0, i.ji)(
                  "Prebid Renderer event for id ".concat(n, " type ").concat(t)
                );
            }),
            (s.prototype.process = function () {
              for (; this.cmd.length > 0; )
                try {
                  this.cmd.shift().call();
                } catch (e) {
                  (0, i.H)("Error processing Renderer command: ", e);
                }
            });
        },
        4947: function (e, n, t) {
          t.d(n, {
            Jt: function () {
              return d;
            },
            K$: function () {
              return i;
            },
            S1: function () {
              return r;
            },
            UE: function () {
              return o;
            },
            e: function () {
              return u;
            },
            g0: function () {
              return s;
            },
            oK: function () {
              return c;
            },
            x$: function () {
              return a;
            },
          });
          var r = "accessDevice",
            i = "syncUser",
            o = "fetchBids",
            a = "reportAnalytics",
            u = "transmitEids",
            c = "transmitUfpd",
            s = "transmitPreciseGeo",
            d = "transmitTid";
        },
        286: function (e, n, t) {
          t.d(n, {
            T: function () {
              return i;
            },
          });
          var r = t(2931),
            i = (0, t(6310).Oj)(function (e) {
              return r.ZP.resolveAlias(e);
            });
        },
        9633: function (e, n, t) {
          t.d(n, {
            UL: function () {
              return i;
            },
            _U: function () {
              return o;
            },
            wu: function () {
              return r;
            },
          });
          var r = "prebid",
            i = "bidder",
            o = "analytics";
        },
        6310: function (e, n, t) {
          t.d(n, {
            $k: function () {
              return u;
            },
            Hw: function () {
              return p;
            },
            IV: function () {
              return g;
            },
            JR: function () {
              return a;
            },
            Ki: function () {
              return s;
            },
            Oj: function () {
              return v;
            },
            Qf: function () {
              return f;
            },
            bL: function () {
              return d;
            },
            bp: function () {
              return c;
            },
            cx: function () {
              return l;
            },
          });
          var r = t(4942),
            i = t(9633),
            o = t(2797),
            a = "component",
            u = a + "Type",
            c = a + "Name",
            s = "adapterCode",
            d = "storageType",
            f = "configName",
            l = "syncType",
            g = "syncUrl",
            p = "_config";
          function v(e) {
            return function (n, t, o) {
              var d,
                f =
                  ((d = {}),
                  (0, r.Z)(d, u, n),
                  (0, r.Z)(d, c, t),
                  (0, r.Z)(d, a, "".concat(n, ".").concat(t)),
                  d);
              return n === i.UL && (f[s] = e(t)), h(Object.assign(f, o));
            };
          }
          var h = (0, o.z3)("sync", function (e) {
            return e;
          });
        },
        571: function (e, n, t) {
          t.d(n, {
            oB: function () {
              return d;
            },
            xD: function () {
              return f;
            },
          });
          var r = t(3324),
            i = t(4358),
            o = t(6310);
          function a(e, n) {
            var t =
              ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
              e["@@iterator"];
            if (!t) {
              if (
                Array.isArray(e) ||
                (t = (function (e, n) {
                  if (e) {
                    if ("string" == typeof e) return u(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    return (
                      "Object" === t &&
                        e.constructor &&
                        (t = e.constructor.name),
                      "Map" === t || "Set" === t
                        ? Array.from(e)
                        : "Arguments" === t ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                        ? u(e, n)
                        : void 0
                    );
                  }
                })(e)) ||
                (n && e && "number" == typeof e.length)
              ) {
                t && (e = t);
                var r = 0,
                  i = function () {};
                return {
                  s: i,
                  n: function () {
                    return r >= e.length
                      ? { done: !0 }
                      : { done: !1, value: e[r++] };
                  },
                  e: function (e) {
                    throw e;
                  },
                  f: i,
                };
              }
              throw new TypeError(
                "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            }
            var o,
              a = !0,
              c = !1;
            return {
              s: function () {
                t = t.call(e);
              },
              n: function () {
                var e = t.next();
                return (a = e.done), e;
              },
              e: function (e) {
                (c = !0), (o = e);
              },
              f: function () {
                try {
                  a || null == t.return || t.return();
                } finally {
                  if (c) throw o;
                }
              },
            };
          }
          function u(e, n) {
            (null == n || n > e.length) && (n = e.length);
            for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
            return r;
          }
          var c = (function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : (0, i.qp)("Activity control:"),
                n = {};
              function t(e) {
                return (n[e] = n[e] || []);
              }
              function u(n, t, r, i) {
                var a;
                try {
                  a = r(i);
                } catch (r) {
                  e.logError(
                    "Exception in rule ".concat(t, " for '").concat(n, "'"),
                    r
                  ),
                    (a = { allow: !1, reason: r });
                }
                return (
                  a &&
                  Object.assign({ activity: n, name: t, component: i[o.JR] }, a)
                );
              }
              var c = {},
                s = 1e3;
              function d(n) {
                var t = n.activity,
                  r = n.name,
                  i = n.allow,
                  o = n.reason,
                  a = n.component,
                  u = ""
                    .concat(r, " ")
                    .concat(i ? "allowed" : "denied", " '")
                    .concat(t, "' for '")
                    .concat(a, "'")
                    .concat(o ? ":" : ""),
                  d = c.hasOwnProperty(u);
                if (
                  (d && clearTimeout(c[u]),
                  (c[u] = setTimeout(function () {
                    return delete c[u];
                  }, s)),
                  !d)
                ) {
                  var f = [u];
                  o && f.push(o), (i ? e.logInfo : e.logWarn).apply(e, f);
                }
              }
              return [
                function (e, n, i) {
                  var o =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : 10,
                    a = t(e),
                    u = a.findIndex(function (e) {
                      var n = (0, r.Z)(e, 1)[0];
                      return o < n;
                    }),
                    c = [o, n, i];
                  return (
                    a.splice(u < 0 ? a.length : u, 0, c),
                    function () {
                      var e = a.indexOf(c);
                      e >= 0 && a.splice(e, 1);
                    }
                  );
                },
                function (e, n) {
                  var i,
                    o,
                    c,
                    s = a(t(e));
                  try {
                    for (s.s(); !(c = s.n()).done; ) {
                      var f = (0, r.Z)(c.value, 3),
                        l = f[0],
                        g = f[1],
                        p = f[2];
                      if (i !== l && o) break;
                      i = l;
                      var v = u(e, g, p, n);
                      if (v) {
                        if (!v.allow) return d(v), !1;
                        o = v;
                      }
                    }
                  } catch (e) {
                    s.e(e);
                  } finally {
                    s.f();
                  }
                  return o && d(o), !0;
                },
              ];
            })(),
            s = (0, r.Z)(c, 2),
            d = s[0],
            f = s[1];
        },
        3667: function (e, n, t) {
          t.d(n, {
            Pm: function () {
              return h;
            },
            XD: function () {
              return m;
            },
            bL: function () {
              return b;
            },
          });
          var r = t(4358),
            i = t(265),
            o = t(2021),
            a = t(5644),
            u = t(3193),
            c = t(5706),
            s = t(4679),
            d = t(1176),
            f = a.FP,
            l = f.AD_RENDER_FAILED,
            g = f.AD_RENDER_SUCCEEDED,
            p = f.STALE_RENDER,
            v = f.BID_WON;
          function h(e) {
            var n = e.reason,
              t = e.message,
              i = e.bid,
              a = e.id,
              u = { reason: n, message: t };
            i && (u.bid = i),
              a && (u.adId = a),
              (0, r.H)("Error rendering ad (id: ".concat(a, "): ").concat(t)),
              o.j8(l, u);
          }
          function b(e) {
            var n = e.doc,
              t = e.bid,
              r = e.id,
              i = { doc: n };
            t && (i.bid = t), r && (i.adId = r), o.j8(g, i);
          }
          function m(e, n) {
            var t = n.adId,
              f = n.options,
              l = n.bidResponse;
            if (null != l) {
              if (
                l.status !== a.UE.fe ||
                ((0, r.yN)("Ad id ".concat(t, " has been rendered before")),
                o.j8(p, l),
                !(0, i.Z)(
                  u.vc.getConfig("auctionOptions"),
                  "suppressStaleRender"
                ))
              ) {
                try {
                  var g = l.adId,
                    b = l.ad,
                    m = l.adUrl,
                    y = l.width,
                    w = l.height,
                    C = l.renderer,
                    A = l.cpm,
                    T = l.originalCpm,
                    E = l.mediaType;
                  if ((0, c.Pd)(C)) (0, c._U)(C, l);
                  else if (g) {
                    if (E === s.pX)
                      return void h({
                        reason: a.q_.Sn,
                        message: "Cannot render video ad",
                        bid: l,
                        id: g,
                      });
                    var O = {
                      AUCTION_PRICE: T || A,
                      CLICKTHROUGH: (null == f ? void 0 : f.clickUrl) || "",
                    };
                    e({
                      ad: (0, r.No)(b, O),
                      adUrl: (0, r.No)(m, O),
                      adId: g,
                      width: y,
                      height: w,
                    });
                  }
                } catch (e) {
                  return void h({
                    reason: a.q_.XW,
                    message: e.message,
                    id: t,
                    bid: l,
                  });
                }
                d.K.addWinningBid(l), o.j8(v, l);
              }
            } else
              h({
                reason: a.q_.WT,
                message: "Cannot find ad '".concat(t, "'"),
                id: t,
              });
          }
        },
        875: function (e, n, t) {
          t.d(n, {
            f: function () {
              return a;
            },
          });
          var r = t(265),
            i = {};
          function o(e, n, t) {
            var r = (function (e, n) {
              var t = (i[e] = i[e] || { bidders: {} });
              return n ? (t.bidders[n] = t.bidders[n] || {}) : t;
            })(e, t);
            return (r[n] = (r[n] || 0) + 1), r[n];
          }
          var a = {
            incrementRequestsCounter: function (e) {
              return o(e, "requestsCounter");
            },
            incrementBidderRequestsCounter: function (e, n) {
              return o(e, "requestsCounter", n);
            },
            incrementBidderWinsCounter: function (e, n) {
              return o(e, "winsCounter", n);
            },
            getRequestsCounter: function (e) {
              return (0, r.Z)(i, "".concat(e, ".requestsCounter")) || 0;
            },
            getBidderRequestsCounter: function (e, n) {
              return (
                (0, r.Z)(
                  i,
                  "".concat(e, ".bidders.").concat(n, ".requestsCounter")
                ) || 0
              );
            },
            getBidderWinsCounter: function (e, n) {
              return (
                (0, r.Z)(
                  i,
                  "".concat(e, ".bidders.").concat(n, ".winsCounter")
                ) || 0
              );
            },
          };
        },
        2931: function (e, n, t) {
          t.d(n, {
            ZP: function () {
              return Ce;
            },
            uV: function () {
              return ve;
            },
          });
          var r = t(9062),
            i = t(3324),
            o = t(4942),
            a = t(4358),
            u = t(265),
            c = t(59),
            s = t(1002);
          function d(e) {
            var n = e;
            return {
              callBids: function () {},
              setBidderCode: function (e) {
                n = e;
              },
              getBidderCode: function () {
                return n;
              },
            };
          }
          var f = t(3193),
            l = t(9626),
            g = t(1974),
            p = t(154),
            v = t(5644),
            h = t(2021),
            b = t(4614),
            m = t(2797),
            y = t(1176),
            w = t(5975),
            C = t(9128),
            A = t(571),
            T = t(286),
            E = t(9633),
            O = t(4947),
            k = ["cpm", "ttl", "creativeId", "netRevenue", "currency"],
            j = ["auctionId", "transactionId"];
          function I(e) {
            return Object.assign(new d(e.code), {
              getSpec: function () {
                return Object.freeze(Object.assign({}, e));
              },
              registerSyncs: n,
              callBids: function (t, r, o, u, s, d) {
                if (Array.isArray(t.bids)) {
                  var g = (function (e) {
                      if ((0, A.xD)(O.Jt, (0, T.T)(E.UL, e)))
                        return {
                          bidRequest: function (e) {
                            return e;
                          },
                          bidderRequest: function (e) {
                            return e;
                          },
                        };
                      function n(e, n, t) {
                        return j.includes(n) ? null : Reflect.get(e, n, t);
                      }
                      function t(e, n) {
                        var t = new Proxy(e, n);
                        return (
                          Object.entries(e)
                            .filter(function (e) {
                              var n = (0, i.Z)(e, 2);
                              return n[0], "function" == typeof n[1];
                            })
                            .forEach(function (n) {
                              var r = (0, i.Z)(n, 2),
                                o = r[0],
                                a = r[1];
                              return (t[o] = a.bind(e));
                            }),
                          t
                        );
                      }
                      var r = (0, a.HP)(
                        function (e) {
                          return t(e, { get: n });
                        },
                        function (e) {
                          return e.bidId;
                        }
                      );
                      return {
                        bidRequest: r,
                        bidderRequest: function (e) {
                          return t(e, {
                            get: function (t, i, o) {
                              return "bids" === i ? e.bids.map(r) : n(t, i, o);
                            },
                          });
                        },
                      };
                    })(t.bidderCode),
                    m = {},
                    I = [],
                    S = P(t).measureTime("validate", function () {
                      return t.bids.filter(function (n) {
                        return (function (n) {
                          return (
                            !!e.isBidRequestValid(n) ||
                            ((0, a.yN)(
                              "Invalid bid sent to bidder "
                                .concat(e.code, ": ")
                                .concat(JSON.stringify(n))
                            ),
                            !1)
                          );
                        })(g.bidRequest(n));
                      });
                    });
                  if (0 !== S.length) {
                    var D = {};
                    S.forEach(function (e) {
                      (D[e.bidId] = e),
                        e.adUnitCode || (e.adUnitCode = e.placementCode);
                    }),
                      B(e, S.map(g.bidRequest), g.bidderRequest(t), u, d, {
                        onRequest: function (e) {
                          return h.j8(v.FP.BEFORE_BIDDER_HTTP, t, e);
                        },
                        onResponse: function (n) {
                          s(e.code), I.push(n);
                        },
                        onFledgeAuctionConfigs: function (e) {
                          e.forEach(function (e) {
                            var n = D[e.bidId];
                            n
                              ? U(n, e.config)
                              : (0, a.yN)(
                                  "Received fledge auction configuration for an unknown bidId",
                                  e
                                );
                          });
                        },
                        onError: function (n, r) {
                          s(e.code),
                            Ce.callBidderError(e.code, r, t),
                            h.j8(v.FP.BIDDER_ERROR, {
                              error: r,
                              bidderRequest: t,
                            }),
                            (0, a.H)(
                              "Server call for "
                                .concat(e.code, " failed: ")
                                .concat(n, " ")
                                .concat(r.status, ". Continuing without bids.")
                            );
                        },
                        onBid: function (n) {
                          var t = D[n.requestId];
                          if (t) {
                            if (
                              ((n.adapterCode = t.bidder),
                              (function (e, n) {
                                var t =
                                    w.S.get(n, "allowAlternateBidderCodes") ||
                                    !1,
                                  r = w.S.get(n, "allowedAlternateBidderCodes");
                                return !!(
                                  e &&
                                  n &&
                                  n !== e &&
                                  ((r = (0, a.kJ)(r)
                                    ? r
                                        .map(function (e) {
                                          return e.trim().toLowerCase();
                                        })
                                        .filter(function (e) {
                                          return !!e;
                                        })
                                        .filter(a.tT)
                                    : r),
                                  !t ||
                                    ((0, a.kJ)(r) &&
                                      "*" !== r[0] &&
                                      !r.includes(e)))
                                );
                              })(n.bidderCode, t.bidder))
                            )
                              return (
                                (0, a.yN)(
                                  ""
                                    .concat(
                                      n.bidderCode,
                                      " is not a registered partner or known bidder of "
                                    )
                                    .concat(
                                      t.bidder,
                                      ", hence continuing without bid. If you wish to support this bidder, please mark allowAlternateBidderCodes as true in bidderSettings."
                                    )
                                ),
                                void r.reject(t.adUnitCode, n, v.Gw.Dg)
                              );
                            (n.originalCpm = n.cpm),
                              (n.originalCurrency = n.currency),
                              (n.meta =
                                n.meta || Object.assign({}, n[t.bidder]));
                            var i = Object.assign(
                              (0, l.m)(v.Q_.Q, t),
                              n,
                              (0, a.ei)(t, j)
                            );
                            !(function (e, n) {
                              var t = (0, C.Bf)(n.metrics);
                              t.checkpoint("addBidResponse"),
                                (m[e] = !0),
                                t.measureTime(
                                  "addBidResponse.validate",
                                  function () {
                                    return (function (e, n) {
                                      var t = (
                                          arguments.length > 2 &&
                                          void 0 !== arguments[2]
                                            ? arguments[2]
                                            : {}
                                        ).index,
                                        r = void 0 === t ? y.K.index : t;
                                      function i() {
                                        var e = Object.keys(n);
                                        return k.every(function (t) {
                                          return (
                                            (0, b.q9)(e, t) &&
                                            !(0, b.q9)([void 0, null], n[t])
                                          );
                                        });
                                      }
                                      function o(e) {
                                        return "Invalid bid from "
                                          .concat(
                                            n.bidderCode,
                                            ". Ignoring bid: "
                                          )
                                          .concat(e);
                                      }
                                      return e
                                        ? n
                                          ? i()
                                            ? "native" !== n.mediaType ||
                                              (0, c.r4)(n, { index: r })
                                              ? "video" !== n.mediaType ||
                                                (0, p.Dn)(n, { index: r })
                                                ? !(
                                                    "banner" === n.mediaType &&
                                                    !R(e, n, { index: r }) &&
                                                    ((0, a.H)(
                                                      o(
                                                        "Banner bids require a width and height"
                                                      )
                                                    ),
                                                    1)
                                                  )
                                                : ((0, a.H)(
                                                    o(
                                                      "Video bid does not have required vastUrl or renderer property"
                                                    )
                                                  ),
                                                  !1)
                                              : ((0, a.H)(
                                                  o(
                                                    "Native bid missing some required properties."
                                                  )
                                                ),
                                                !1)
                                            : ((0, a.H)(
                                                o(
                                                  "Bidder ".concat(
                                                    n.bidderCode,
                                                    " is missing required params. Check http://prebid.org/dev-docs/bidder-adapter-1.html for list of params."
                                                  )
                                                )
                                              ),
                                              !1)
                                          : ((0, a.yN)(
                                              "Some adapter tried to add an undefined bid for ".concat(
                                                e,
                                                "."
                                              )
                                            ),
                                            !1)
                                        : ((0, a.yN)(
                                            "No adUnitCode was supplied to addBidResponse."
                                          ),
                                          !1);
                                    })(e, n);
                                  }
                                )
                                  ? r(e, n)
                                  : r.reject(e, n, v.Gw.UI);
                            })(t.adUnitCode, i);
                          } else
                            (0, a.yN)(
                              "Bidder "
                                .concat(
                                  e.code,
                                  " made bid for unknown request ID: "
                                )
                                .concat(n.requestId, ". Ignoring.")
                            ),
                              r.reject(null, n, v.Gw.Gp);
                        },
                        onCompletion: x,
                      });
                  } else x();
                }
                function x() {
                  o(),
                    f.vc.runWithBidder(e.code, function () {
                      h.j8(v.FP.BIDDER_DONE, t),
                        n(I, t.gdprConsent, t.uspConsent, t.gppConsent);
                    });
                }
              },
            });
            function n(n, t, r, i) {
              S(e, n, t, r, i);
            }
          }
          var B = (0, m.z3)(
              "sync",
              function (e, n, t, r, i, o) {
                var u = o.onRequest,
                  c = o.onResponse,
                  d = o.onFledgeAuctionConfigs,
                  f = o.onError,
                  l = o.onBid,
                  g = o.onCompletion,
                  p = P(t);
                g = p.startTiming("total").stopBefore(g);
                var v = p.measureTime("buildRequests", function () {
                  return e.buildRequests(n, t);
                });
                if (v && 0 !== v.length) {
                  Array.isArray(v) || (v = [v]);
                  var h = (0, a.yx)(g, v.length);
                  v.forEach(function (n) {
                    var t = p.fork();
                    function o(e) {
                      null != e && (e.metrics = t.fork().renameWith()), l(e);
                    }
                    var g = i(function (r, i) {
                        b();
                        try {
                          r = JSON.parse(r);
                        } catch (e) {}
                        (r = {
                          body: r,
                          headers: { get: i.getResponseHeader.bind(i) },
                        }),
                          c(r);
                        try {
                          r = t.measureTime("interpretResponse", function () {
                            return e.interpretResponse(r, n);
                          });
                        } catch (n) {
                          return (
                            (0, a.H)(
                              "Bidder ".concat(
                                e.code,
                                " failed to interpret the server's response. Continuing without bids"
                              ),
                              null,
                              n
                            ),
                            void h()
                          );
                        }
                        var u;
                        r && (0, a.kJ)(r.fledgeAuctionConfigs)
                          ? (d(r.fledgeAuctionConfigs), (u = r.bids))
                          : (u = r),
                          u && ((0, a.kJ)(u) ? u.forEach(o) : o(u)),
                          h();
                      }),
                      v = i(function (e, n) {
                        b(), f(e, n), h();
                      });
                    u(n);
                    var b = t.startTiming("net");
                    function m(t) {
                      var r,
                        i = n.options;
                      return Object.assign(t, i, {
                        browsingTopics:
                          !(
                            null != i &&
                            i.hasOwnProperty("browsingTopics") &&
                            !i.browsingTopics
                          ) &&
                          (null === (r = w.S.get(e.code, "topicsHeader")) ||
                            void 0 === r ||
                            r) &&
                          (0, A.xD)(O.oK, (0, T.T)(E.UL, e.code)),
                      });
                    }
                    switch (n.method) {
                      case "GET":
                        r(
                          "".concat(n.url).concat(
                            (function (e) {
                              return e
                                ? "?".concat(
                                    "object" === (0, s.Z)(e) ? (0, a.Re)(e) : e
                                  )
                                : "";
                            })(n.data)
                          ),
                          { success: g, error: v },
                          void 0,
                          m({ method: "GET", withCredentials: !0 })
                        );
                        break;
                      case "POST":
                        r(
                          n.url,
                          { success: g, error: v },
                          "string" == typeof n.data
                            ? n.data
                            : JSON.stringify(n.data),
                          m({
                            method: "POST",
                            contentType: "text/plain",
                            withCredentials: !0,
                          })
                        );
                        break;
                      default:
                        (0, a.yN)(
                          "Skipping invalid request from "
                            .concat(e.code, ". Request type ")
                            .concat(n.type, " must be GET or POST")
                        ),
                          h();
                    }
                  });
                } else g();
              },
              "processBidderRequests"
            ),
            S = (0, m.z3)(
              "async",
              function (e, n, t, r, i) {
                var o = f.vc.getConfig("userSync.aliasSyncEnabled");
                if (e.getUserSyncs && (o || !Ce.aliasRegistry[e.code])) {
                  var a = f.vc.getConfig("userSync.filterSettings"),
                    u = e.getUserSyncs(
                      {
                        iframeEnabled: !(!a || (!a.iframe && !a.all)),
                        pixelEnabled: !(!a || (!a.image && !a.all)),
                      },
                      n,
                      t,
                      r,
                      i
                    );
                  u &&
                    (Array.isArray(u) || (u = [u]),
                    u.forEach(function (n) {
                      g.k_.registerSync(n.type, e.code, n.url);
                    }),
                    g.k_.bidderDone(e.code));
                }
              },
              "registerSyncs"
            ),
            U = (0, m.z3)("sync", function (e, n) {}, "addComponentAuction");
          function R(e, n) {
            var t =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              r = t.index,
              o = void 0 === r ? y.K.index : r;
            if (
              (n.width || 0 === parseInt(n.width, 10)) &&
              (n.height || 0 === parseInt(n.height, 10))
            )
              return (
                (n.width = parseInt(n.width, 10)),
                (n.height = parseInt(n.height, 10)),
                !0
              );
            var u = o.getBidRequest(n),
              c = o.getMediaTypes(n),
              s = (u && u.sizes) || (c && c.banner && c.banner.sizes),
              d = (0, a.sF)(s);
            if (1 === d.length) {
              var f = d[0].split("x"),
                l = (0, i.Z)(f, 2),
                g = l[0],
                p = l[1];
              return (
                (n.width = parseInt(g, 10)), (n.height = parseInt(p, 10)), !0
              );
            }
            return !1;
          }
          function P(e) {
            return (0, C.Bf)(e.metrics).renameWith(function (n) {
              return [
                "adapter.client.".concat(n),
                "adapters.client.".concat(e.bidderCode, ".").concat(n),
              ];
            });
          }
          var D = t(8928),
            x = t(875),
            Z = t(5102),
            _ = t(2513),
            N = t(6310);
          function q(e, n) {
            var t =
              ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
              e["@@iterator"];
            if (!t) {
              if (
                Array.isArray(e) ||
                (t = (function (e, n) {
                  if (e) {
                    if ("string" == typeof e) return H(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    return (
                      "Object" === t &&
                        e.constructor &&
                        (t = e.constructor.name),
                      "Map" === t || "Set" === t
                        ? Array.from(e)
                        : "Arguments" === t ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                        ? H(e, n)
                        : void 0
                    );
                  }
                })(e)) ||
                (n && e && "number" == typeof e.length)
              ) {
                t && (e = t);
                var r = 0,
                  i = function () {};
                return {
                  s: i,
                  n: function () {
                    return r >= e.length
                      ? { done: !0 }
                      : { done: !1, value: e[r++] };
                  },
                  e: function (e) {
                    throw e;
                  },
                  f: i,
                };
              }
              throw new TypeError(
                "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            }
            var o,
              a = !0,
              u = !1;
            return {
              s: function () {
                t = t.call(e);
              },
              n: function () {
                var e = t.next();
                return (a = e.done), e;
              },
              e: function (e) {
                (u = !0), (o = e);
              },
              f: function () {
                try {
                  a || null == t.return || t.return();
                } finally {
                  if (u) throw o;
                }
              },
            };
          }
          function H(e, n) {
            (null == n || n > e.length) && (n = e.length);
            for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
            return r;
          }
          var M = [
              "data",
              "ext.data",
              "yob",
              "gender",
              "keywords",
              "kwarray",
              "id",
              "buyeruid",
              "customdata",
            ]
              .map(function (e) {
                return "user.".concat(e);
              })
              .concat("device.ext.cdep"),
            F = ["user.eids", "user.ext.eids"],
            W = [
              "user.geo.lat",
              "user.geo.lon",
              "device.geo.lat",
              "device.geo.lon",
            ];
          function L(e) {
            return Object.assign(
              {
                get: function () {},
                run: function (e, n, t, r, i) {
                  var o = t && t[r];
                  if (
                    (function (e) {
                      return (
                        null != e &&
                        ("object" !== (0, s.Z)(e) || Object.keys(e).length > 0)
                      );
                    })(o) &&
                    i()
                  ) {
                    var a = this.get(o);
                    void 0 === a ? delete t[r] : (t[r] = a);
                  }
                },
              },
              e
            );
          }
          function z(e) {
            return (
              e.forEach(function (e) {
                e.paths = e.paths.map(function (e) {
                  var n = e.split("."),
                    t = n.pop();
                  return [n.length > 0 ? n.join(".") : null, t];
                });
              }),
              function (n, t) {
                for (
                  var r = [],
                    o = arguments.length,
                    a = new Array(o > 2 ? o - 2 : 0),
                    c = 2;
                  c < o;
                  c++
                )
                  a[c - 2] = arguments[c];
                var s = K.apply(void 0, [n].concat(a));
                return (
                  e.forEach(function (e) {
                    if (!1 !== n[e.name]) {
                      var o,
                        a = q(e.paths);
                      try {
                        for (a.s(); !(o = a.n()).done; ) {
                          var c = (0, i.Z)(o.value, 2),
                            d = c[0],
                            f = c[1],
                            l = null == d ? t : (0, u.Z)(t, d);
                          if (
                            (r.push(e.run(t, d, l, f, s.bind(null, e))),
                            !1 === n[e.name])
                          )
                            return;
                        }
                      } catch (e) {
                        a.e(e);
                      } finally {
                        a.f();
                      }
                    }
                  }),
                  r.filter(function (e) {
                    return null != e;
                  })
                );
              }
            );
          }
          function K(e) {
            for (
              var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1;
              r < n;
              r++
            )
              t[r - 1] = arguments[r];
            return function (n) {
              return (
                e.hasOwnProperty(n.name) ||
                  (e[n.name] = !!n.applies.apply(n, t)),
                e[n.name]
              );
            };
          }
          function G(e) {
            var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : A.xD;
            return function (t) {
              return !n(e, t);
            };
          }
          function J() {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : A.xD;
            return [
              {
                name: O.e,
                paths: ["userId", "userIdAsEids"],
                applies: G(O.e, e),
              },
              { name: O.Jt, paths: ["ortb2Imp.ext.tid"], applies: G(O.Jt, e) },
            ].map(L);
          }
          function V() {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : A.xD;
            return [
              { name: O.oK, paths: M, applies: G(O.oK, e) },
              { name: O.e, paths: F, applies: G(O.e, e) },
              {
                name: O.g0,
                paths: W,
                applies: G(O.g0, e),
                get: function (e) {
                  return Math.round(100 * (e + Number.EPSILON)) / 100;
                },
              },
              { name: O.Jt, paths: ["source.tid"], applies: G(O.Jt, e) },
            ].map(L);
          }
          var Q = (function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : A.xD,
              n = z(V(e)),
              t = z(J(e));
            return function (e) {
              var r = {};
              return {
                ortb2: function (t) {
                  return n(r, t, e), t;
                },
                bidRequest: function (n) {
                  return t(r, n, e), n;
                },
              };
            };
          })();
          function X(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n &&
                (r = r.filter(function (n) {
                  return Object.getOwnPropertyDescriptor(e, n).enumerable;
                })),
                t.push.apply(t, r);
            }
            return t;
          }
          function $(e) {
            for (var n = 1; n < arguments.length; n++) {
              var t = null != arguments[n] ? arguments[n] : {};
              n % 2
                ? X(Object(t), !0).forEach(function (n) {
                    (0, o.Z)(e, n, t[n]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(t)
                  )
                : X(Object(t)).forEach(function (n) {
                    Object.defineProperty(
                      e,
                      n,
                      Object.getOwnPropertyDescriptor(t, n)
                    );
                  });
            }
            return e;
          }
          (0, A.oB)(O.Jt, "enableTIDs config", function () {
            if (!f.vc.getConfig("enableTIDs"))
              return { allow: !1, reason: "TIDs are disabled" };
          });
          var Y = "pbsBidAdapter",
            ee = "client",
            ne = "server",
            te = { isAllowed: A.xD, redact: Q },
            re = {},
            ie = (re.bidderRegistry = {}),
            oe = (re.aliasRegistry = {}),
            ae = [];
          f.vc.getConfig("s2sConfig", function (e) {
            e &&
              e.s2sConfig &&
              (ae = (0, a.kJ)(e.s2sConfig) ? e.s2sConfig : [e.s2sConfig]);
          });
          var ue = {},
            ce = (0, N.Oj)(function (e) {
              return re.resolveAlias(e);
            });
          function se(e) {
            return ce(E.wu, Y, (0, o.Z)({}, N.Qf, e.configName));
          }
          var de = (0, m.z3)(
              "sync",
              function (e) {
                var n = e.bidderCode,
                  t = e.auctionId,
                  r = e.bidderRequestId,
                  i = e.adUnits,
                  o = e.src,
                  c = e.metrics;
                return i
                  .reduce(function (e, i) {
                    var s = i.bids.filter(function (e) {
                      return e.bidder === n;
                    });
                    return (
                      null == n &&
                        0 === s.length &&
                        null != i.s2sBid &&
                        s.push({ bidder: null }),
                      e.push(
                        s.reduce(function (e, n) {
                          var s =
                            null ==
                            (n = Object.assign(
                              {},
                              n,
                              {
                                ortb2Imp: (0, a.Ee)({}, i.ortb2Imp, n.ortb2Imp),
                              },
                              (0, a.iG)(i, [
                                "nativeParams",
                                "nativeOrtbRequest",
                                "mediaType",
                                "renderer",
                              ])
                            )).mediaTypes
                              ? i.mediaTypes
                              : n.mediaTypes;
                          return (
                            (0, a.FS)(s)
                              ? (n = Object.assign({}, n, { mediaTypes: s }))
                              : (0, a.H)(
                                  "mediaTypes is not correctly configured for adunit ".concat(
                                    i.code
                                  )
                                ),
                            e.push(
                              Object.assign({}, n, {
                                adUnitCode: i.code,
                                transactionId: i.transactionId,
                                sizes:
                                  (0, u.Z)(s, "banner.sizes") ||
                                  (0, u.Z)(s, "video.playerSize") ||
                                  [],
                                bidId: n.bid_id || (0, a._d)(),
                                bidderRequestId: r,
                                auctionId: t,
                                src: o,
                                metrics: c,
                                bidRequestsCount: x.f.getRequestsCounter(
                                  i.code
                                ),
                                bidderRequestsCount:
                                  x.f.getBidderRequestsCounter(
                                    i.code,
                                    n.bidder
                                  ),
                                bidderWinsCount: x.f.getBidderWinsCounter(
                                  i.code,
                                  n.bidder
                                ),
                              })
                            ),
                            e
                          );
                        }, [])
                      ),
                      e
                    );
                  }, [])
                  .reduce(a.xH, [])
                  .filter(function (e) {
                    return "" !== e;
                  });
              },
              "getBids"
            ),
            fe = (0, m.z3)(
              "sync",
              function (e, n) {
                var t =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {},
                  r = t.getS2SBidders,
                  i = void 0 === r ? ve : r;
                if (null == n) return e;
                var o = i(n);
                return e.filter(function (e) {
                  return o.has(e.bidder);
                });
              },
              "filterBidsForAdUnit"
            );
          function le(e, n) {
            var t = (0, a.I8)(e),
              r = !1;
            return (
              t.forEach(function (e) {
                var t = e.bids.filter(function (e) {
                  var t;
                  return (
                    e.module === Y &&
                    (null === (t = e.params) || void 0 === t
                      ? void 0
                      : t.configName) === n.configName
                  );
                });
                1 === t.length
                  ? ((e.s2sBid = t[0]),
                    (r = !0),
                    (e.ortb2Imp = (0, a.Ee)({}, e.s2sBid.ortb2Imp, e.ortb2Imp)))
                  : t.length > 1 &&
                    (0, a.yN)(
                      'Multiple "module" bids for the same s2s configuration; all will be ignored',
                      t
                    ),
                  (e.bids = fe(e.bids, n).map(function (e) {
                    return (e.bid_id = (0, a._d)()), e;
                  }));
              }),
              {
                adUnits: (t = t.filter(function (e) {
                  return 0 !== e.bids.length || null != e.s2sBid;
                })),
                hasModuleBids: r,
              }
            );
          }
          function ge(e) {
            var n = (0, a.I8)(e);
            return (
              n.forEach(function (e) {
                e.bids = fe(e.bids, null);
              }),
              (n = n.filter(function (e) {
                return 0 !== e.bids.length;
              }))
            );
          }
          var pe = (0, m.z3)(
            "sync",
            function (e, n) {
              return e;
            },
            "setupAdUnitMediaTypes"
          );
          function ve(e) {
            (0, a.kJ)(e) || (e = [e]);
            var n = new Set([null]);
            return (
              e
                .filter(function (e) {
                  return e && e.enabled;
                })
                .flatMap(function (e) {
                  return e.bidders;
                })
                .forEach(function (e) {
                  return n.add(e);
                }),
              n
            );
          }
          var he = (0, m.z3)(
            "sync",
            function (e, n) {
              var t,
                r =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {},
                i = r.getS2SBidders,
                u = void 0 === i ? ve : i,
                c = u(n);
              return (0, a.pP)(e).reduce(function (e, n) {
                return e[c.has(n) ? ne : ee].push(n), e;
              }, ((t = {}), (0, o.Z)(t, ee, []), (0, o.Z)(t, ne, []), t));
            },
            "partitionBidders"
          );
          function be(e, n) {
            var t = ie[e],
              r = (null == t ? void 0 : t.getSpec) && t.getSpec();
            if (r && r[n] && "function" == typeof r[n]) return [r, r[n]];
          }
          function me(e, n, t, r) {
            try {
              (0, a.PN)("Invoking ".concat(e, ".").concat(n));
              for (
                var i = arguments.length,
                  o = new Array(i > 4 ? i - 4 : 0),
                  u = 4;
                u < i;
                u++
              )
                o[u - 4] = arguments[u];
              f.vc.runWithBidder(e, r.bind.apply(r, [t].concat(o)));
            } catch (t) {
              (0, a.yN)("Error calling ".concat(n, " of ").concat(e));
            }
          }
          function ye(e, n, t) {
            if ((null == t ? void 0 : t.src) !== v.os.YZ) {
              var i = be(e, n);
              null != i && me.apply(void 0, [e, n].concat((0, r.Z)(i), [t]));
            }
          }
          function we(e) {
            for (var n = new Set(); oe.hasOwnProperty(e) && !n.has(e); )
              n.add(e), (e = oe[e]);
            return e;
          }
          (re.makeBidRequests = (0, m.z3)(
            "sync",
            function (e, n, t, r, i) {
              var o =
                  arguments.length > 5 && void 0 !== arguments[5]
                    ? arguments[5]
                    : {},
                u = arguments.length > 6 ? arguments[6] : void 0;
              (u = (0, C.Bf)(u)),
                h.j8(v.FP.BEFORE_REQUEST_BIDS, e),
                (0, c.Fb)(e),
                e.forEach(function (e) {
                  (0, a.PO)(e.mediaTypes) || (e.mediaTypes = {}),
                    (e.bids = e.bids.filter(function (e) {
                      return (
                        !e.bidder || te.isAllowed(O.UE, ce(E.UL, e.bidder))
                      );
                    }));
                }),
                (e = pe(e, i));
              var s = he(e, ae),
                d = s[ee],
                l = s[ne];
              f.vc.getConfig("bidderSequence") === f.FD && (d = (0, a.TV)(d));
              var g = (0, Z.nH)(),
                p = [],
                m = o.global || {},
                y = o.bidder || {};
              function w(e, n) {
                var r = te.redact(null != n ? n : ce(E.UL, e.bidderCode)),
                  i = Object.freeze(
                    r.ortb2(
                      (0, a.Ee)({ source: { tid: t } }, m, y[e.bidderCode])
                    )
                  );
                return (
                  (e.ortb2 = i),
                  (e.bids = e.bids.map(function (e) {
                    return (e.ortb2 = i), r.bidRequest(e);
                  })),
                  e
                );
              }
              ae.forEach(function (r) {
                var i = se(r);
                if (r && r.enabled && te.isAllowed(O.UE, i)) {
                  var o = le(e, r),
                    c = o.adUnits,
                    s = o.hasModuleBids,
                    d = (0, a.DO)();
                  (0 === l.length && s ? [null] : l).forEach(function (e) {
                    var o = (0, a._d)(),
                      s = u.fork(),
                      f = w(
                        {
                          bidderCode: e,
                          auctionId: t,
                          bidderRequestId: o,
                          uniquePbsTid: d,
                          bids: de({
                            bidderCode: e,
                            auctionId: t,
                            bidderRequestId: o,
                            adUnits: (0, a.I8)(c),
                            src: v.os.YZ,
                            metrics: s,
                          }),
                          auctionStart: n,
                          timeout: r.timeout,
                          src: v.os.YZ,
                          refererInfo: g,
                          metrics: s,
                        },
                        i
                      );
                    0 !== f.bids.length && p.push(f);
                  }),
                    c.forEach(function (e) {
                      var n = e.bids.filter(function (e) {
                        return (0, b.sE)(p, function (n) {
                          return (0, b.sE)(n.bids, function (n) {
                            return n.bidId === e.bid_id;
                          });
                        });
                      });
                      e.bids = n;
                    }),
                    p.forEach(function (e) {
                      void 0 === e.adUnitsS2SCopy &&
                        (e.adUnitsS2SCopy = c.filter(function (e) {
                          return e.bids.length > 0 || null != e.s2sBid;
                        }));
                    });
                }
              });
              var A = ge(e);
              return (
                d.forEach(function (e) {
                  var o = (0, a._d)(),
                    c = u.fork(),
                    s = w({
                      bidderCode: e,
                      auctionId: t,
                      bidderRequestId: o,
                      bids: de({
                        bidderCode: e,
                        auctionId: t,
                        bidderRequestId: o,
                        adUnits: (0, a.I8)(A),
                        labels: i,
                        src: "client",
                        metrics: c,
                      }),
                      auctionStart: n,
                      timeout: r,
                      refererInfo: g,
                      metrics: c,
                    }),
                    d = ie[e];
                  d ||
                    (0, a.H)(
                      "Trying to make a request for bidder that does not exist: ".concat(
                        e
                      )
                    ),
                    d && s.bids && 0 !== s.bids.length && p.push(s);
                }),
                p.forEach(function (e) {
                  _.rp.getConsentData() &&
                    (e.gdprConsent = _.rp.getConsentData()),
                    _.nX.getConsentData() &&
                      (e.uspConsent = _.nX.getConsentData()),
                    _.TJ.getConsentData() &&
                      (e.gppConsent = _.TJ.getConsentData());
                }),
                p
              );
            },
            "makeBidRequests"
          )),
            (re.callBids = function (e, n, t, r, o, u, c) {
              var s =
                arguments.length > 7 && void 0 !== arguments[7]
                  ? arguments[7]
                  : {};
              if (n.length) {
                var d = n.reduce(
                    function (e, n) {
                      return (
                        e[Number(void 0 !== n.src && n.src === v.os.YZ)].push(
                          n
                        ),
                        e
                      );
                    },
                    [[], []]
                  ),
                  l = (0, i.Z)(d, 2),
                  g = l[0],
                  p = l[1],
                  b = [];
                p.forEach(function (e) {
                  for (var n = -1, t = 0; t < b.length; ++t)
                    if (e.uniquePbsTid === b[t].uniquePbsTid) {
                      n = t;
                      break;
                    }
                  n <= -1 && b.push(e);
                });
                var m = 0;
                ae.forEach(function (e) {
                  if (e && b[m] && ve(e).has(b[m].bidderCode)) {
                    var n = (0, D.OI)(
                        u,
                        o
                          ? {
                              request: o.request.bind(null, "s2s"),
                              done: o.done,
                            }
                          : void 0
                      ),
                      i = e.bidders,
                      d = ie[e.adapter],
                      f = b[m].uniquePbsTid,
                      l = b[m].adUnitsS2SCopy,
                      g = p.filter(function (e) {
                        return e.uniquePbsTid === f;
                      });
                    if (d) {
                      var y = { ad_units: l, s2sConfig: e, ortb2Fragments: s };
                      if (y.ad_units.length) {
                        var w = g.map(function (e) {
                            return (
                              (e.start = (0, a.AB)()),
                              function () {
                                c(e.bidderRequestId), r.apply(e, arguments);
                              }
                            );
                          }),
                          C = (0, a.pP)(y.ad_units).filter(function (e) {
                            return i.includes(e);
                          });
                        (0, a.ji)(
                          "CALLING S2S HEADER BIDDERS ==== ".concat(
                            C.length > 0
                              ? C.join(", ")
                              : 'No bidder specified, using "ortb2Imp" definition(s) only'
                          )
                        ),
                          g.forEach(function (e) {
                            h.j8(
                              v.FP.BID_REQUESTED,
                              $($({}, e), {}, { tid: e.auctionId })
                            );
                          }),
                          d.callBids(
                            y,
                            p,
                            t,
                            function () {
                              return w.forEach(function (e) {
                                return e();
                              });
                            },
                            n
                          );
                      }
                    } else (0, a.H)("missing " + e.adapter);
                    m++;
                  }
                }),
                  g.forEach(function (e) {
                    e.start = (0, a.AB)();
                    var n = ie[e.bidderCode];
                    f.vc.runWithBidder(e.bidderCode, function () {
                      (0, a.ji)("CALLING BIDDER"), h.j8(v.FP.BID_REQUESTED, e);
                    });
                    var i = (0, D.OI)(
                        u,
                        o
                          ? {
                              request: o.request.bind(null, e.bidderCode),
                              done: o.done,
                            }
                          : void 0
                      ),
                      s = r.bind(e);
                    try {
                      f.vc.runWithBidder(
                        e.bidderCode,
                        n.callBids.bind(
                          n,
                          e,
                          t,
                          s,
                          i,
                          function () {
                            return c(e.bidderRequestId);
                          },
                          f.vc.callbackWithBidder(e.bidderCode)
                        )
                      );
                    } catch (n) {
                      (0, a.H)(
                        "".concat(
                          e.bidderCode,
                          " Bid Adapter emitted an uncaught error when parsing their bidRequest"
                        ),
                        { e: n, bidRequest: e }
                      ),
                        s();
                    }
                  });
              } else
                (0, a.yN)(
                  "callBids executed with no bidRequests.  Were they filtered by labels or sizing?"
                );
            }),
            (re.videoAdapters = []),
            (re.registerBidAdapter = function (e, n) {
              var t,
                r =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {},
                i = r.supportedMediaTypes,
                o = void 0 === i ? [] : i;
              e && n
                ? "function" == typeof e.callBids
                  ? ((ie[n] = e),
                    _.qh.register(
                      E.UL,
                      n,
                      null === (t = e.getSpec) || void 0 === t
                        ? void 0
                        : t.call(e).gvlid
                    ),
                    (0, b.q9)(o, "video") && re.videoAdapters.push(n),
                    (0, b.q9)(o, "native") && c.Sg.push(n))
                  : (0, a.H)(
                      "Bidder adaptor error for bidder code: " +
                        n +
                        "bidder must implement a callBids() function"
                    )
                : (0, a.H)("bidAdapter or bidderCode not specified");
            }),
            (re.aliasBidAdapter = function (e, n, t) {
              if (void 0 === ie[n]) {
                var r = ie[e];
                if (void 0 === r) {
                  var i = [];
                  ae.forEach(function (t) {
                    if (t.bidders && t.bidders.length) {
                      var r = t && t.bidders;
                      t && (0, b.q9)(r, n) ? (oe[n] = e) : i.push(e);
                    }
                  }),
                    i.forEach(function (e) {
                      (0,
                      a.H)('bidderCode "' + e + '" is not an existing bidder.', "adapterManager.aliasBidAdapter");
                    });
                } else
                  try {
                    var o,
                      u = (function (e) {
                        var n = [];
                        return (
                          (0, b.q9)(re.videoAdapters, e) && n.push("video"),
                          (0, b.q9)(c.Sg, e) && n.push("native"),
                          n
                        );
                      })(e);
                    if (r.constructor.prototype != Object.prototype)
                      (o = new r.constructor()).setBidderCode(n);
                    else {
                      var s = r.getSpec(),
                        d = t && t.gvlid;
                      null != s.gvlid &&
                        null == d &&
                        (0, a.yN)(
                          "Alias '"
                            .concat(
                              n,
                              "' will NOT re-use the GVL ID of the original adapter ('"
                            )
                            .concat(s.code, "', gvlid: ")
                            .concat(
                              s.gvlid,
                              "). Functionality that requires TCF consent may not work as expected."
                            )
                        );
                      var f = t && t.skipPbsAliasing;
                      (o = I(
                        Object.assign({}, s, {
                          code: n,
                          gvlid: d,
                          skipPbsAliasing: f,
                        })
                      )),
                        (oe[n] = e);
                    }
                    re.registerBidAdapter(o, n, { supportedMediaTypes: u });
                  } catch (n) {
                    (0, a.H)(
                      e + " bidder does not currently support aliasing.",
                      "adapterManager.aliasBidAdapter"
                    );
                  }
              } else
                (0, a.ji)('alias name "' + n + '" has been already specified.');
            }),
            (re.resolveAlias = function (e) {
              for (var n, t = e; oe[t] && (!n || !n.has(t)); )
                (t = oe[t]), (n = n || new Set()).add(t);
              return t;
            }),
            (re.registerAnalyticsAdapter = function (e) {
              var n = e.adapter,
                t = e.code,
                r = e.gvlid;
              n && t
                ? "function" == typeof n.enableAnalytics
                  ? ((n.code = t),
                    (ue[t] = { adapter: n, gvlid: r }),
                    _.qh.register(E._U, t, r))
                  : (0, a.H)(
                      'Prebid Error: Analytics adaptor error for analytics "'.concat(
                        t,
                        '"\n        analytics adapter must implement an enableAnalytics() function'
                      )
                    )
                : (0, a.H)(
                    "Prebid Error: analyticsAdapter or analyticsCode not specified"
                  );
            }),
            (re.enableAnalytics = function (e) {
              (0, a.kJ)(e) || (e = [e]),
                e.forEach(function (e) {
                  var n = ue[e.provider];
                  n && n.adapter
                    ? te.isAllowed(
                        O.x$,
                        ce(E._U, e.provider, (0, o.Z)({}, N.Hw, e))
                      ) && n.adapter.enableAnalytics(e)
                    : (0, a.H)(
                        "Prebid Error: no analytics adapter found in registry for '".concat(
                          e.provider,
                          "'."
                        )
                      );
                });
            }),
            (re.getBidAdapter = function (e) {
              return ie[e];
            }),
            (re.getAnalyticsAdapter = function (e) {
              return ue[e];
            }),
            (re.callTimedOutBidders = function (e, n, t) {
              (n = n.map(function (n) {
                return (
                  (n.params = (0, a.S0)(e, n.adUnitCode, n.bidder)),
                  (n.timeout = t),
                  n
                );
              })),
                (n = (0, a.vM)(n, "bidder")),
                Object.keys(n).forEach(function (e) {
                  ye(e, "onTimeout", n[e]);
                });
            }),
            (re.callBidWonBidder = function (e, n, t) {
              (n.params = (0, a.S0)(t, n.adUnitCode, n.bidder)),
                x.f.incrementBidderWinsCounter(n.adUnitCode, n.bidder),
                ye(e, "onBidWon", n);
            }),
            (re.callBidBillableBidder = function (e) {
              ye(e.bidder, "onBidBillable", e);
            }),
            (re.callSetTargetingBidder = function (e, n) {
              ye(e, "onSetTargeting", n);
            }),
            (re.callBidViewableBidder = function (e, n) {
              ye(e, "onBidViewable", n);
            }),
            (re.callBidderError = function (e, n, t) {
              ye(e, "onBidderError", { error: n, bidderRequest: t });
            }),
            (re.callDataDeletionRequest = (0, m.z3)("sync", function () {
              for (
                var e = arguments.length, n = new Array(e), t = 0;
                t < e;
                t++
              )
                n[t] = arguments[t];
              var o = "onDataDeletionRequest";
              Object.keys(ie)
                .filter(function (e) {
                  return !oe.hasOwnProperty(e);
                })
                .forEach(function (e) {
                  var t = be(e, o);
                  if (null != t) {
                    var i = y.K.getBidsRequested().filter(function (n) {
                      return we(n.bidderCode) === e;
                    });
                    me.apply(void 0, [e, o].concat((0, r.Z)(t), [i], n));
                  }
                }),
                Object.entries(ue).forEach(function (e) {
                  var t,
                    r = (0, i.Z)(e, 2),
                    u = r[0],
                    c = r[1],
                    s =
                      null == c || null === (t = c.adapter) || void 0 === t
                        ? void 0
                        : t[o];
                  if ("function" == typeof s)
                    try {
                      s.apply(c.adapter, n);
                    } catch (e) {
                      (0, a.H)("error calling ".concat(o, " of ").concat(u), e);
                    }
                });
            }));
          var Ce = re;
        },
        5730: function (e, n, t) {
          t.d(n, {
            B: function () {
              return u;
            },
          });
          var r = t(4614),
            i = t(4358),
            o = new WeakMap(),
            a = [
              "debugging",
              "adloox",
              "criteo",
              "outstream",
              "adagio",
              "spotx",
              "browsi",
              "brandmetrics",
              "justtag",
              "tncId",
              "akamaidap",
              "ftrackId",
              "inskin",
              "hadron",
              "medianet",
              "improvedigital",
              "aaxBlockmeter",
              "confiant",
              "arcspan",
              "airgrid",
              "clean.io",
              "a1Media",
              "geoedge",
              "mediafilter",
              "qortex",
              "dynamicAdBoost",
              "contxtful",
            ];
          function u(e, n, t, u, c) {
            if (n && e) {
              if ((0, r.q9)(a, n)) {
                u || (u = document);
                var s = l(u, e);
                if (s)
                  return (
                    t &&
                      "function" == typeof t &&
                      (s.loaded ? t() : s.callbacks.push(t)),
                    s.tag
                  );
                var d = o.get(u) || {},
                  f = { loaded: !1, tag: null, callbacks: [] };
                return (
                  (d[e] = f),
                  o.set(u, d),
                  t && "function" == typeof t && f.callbacks.push(t),
                  (0, i.yN)(
                    "module ".concat(n, " is loading external JavaScript")
                  ),
                  (function (n, t, r, o) {
                    r || (r = document);
                    var a = r.createElement("script");
                    (a.type = "text/javascript"), (a.async = !0);
                    var u = l(r, e);
                    return (
                      u && (u.tag = a),
                      a.readyState
                        ? (a.onreadystatechange = function () {
                            ("loaded" !== a.readyState &&
                              "complete" !== a.readyState) ||
                              ((a.onreadystatechange = null), t());
                          })
                        : (a.onload = function () {
                            t();
                          }),
                      (a.src = n),
                      o && (0, i.D9)(a, o),
                      (0, i.jC)(a, r),
                      a
                    );
                  })(
                    e,
                    function () {
                      f.loaded = !0;
                      try {
                        for (var e = 0; e < f.callbacks.length; e++)
                          f.callbacks[e]();
                      } catch (e) {
                        (0, i.H)(
                          "Error executing callback",
                          "adloader.js:loadExternalScript",
                          e
                        );
                      }
                    },
                    u,
                    c
                  )
                );
              }
              (0, i.H)(
                "".concat(n, " not whitelisted for loading external JavaScript")
              );
            } else
              (0, i.H)(
                "cannot load external script without url and moduleCode"
              );
            function l(e, n) {
              var t = o.get(e);
              return t && t[n] ? t[n] : null;
            }
          }
        },
        8928: function (e, n, t) {
          t.d(n, {
            OI: function () {
              return v;
            },
            hj: function () {
              return h;
            },
          });
          var r = t(3324),
            i = t(1002),
            o = t(3193),
            a = t(4358),
            u = {
              fetch: window.fetch.bind(window),
              makeRequest: function (e, n) {
                return new Request(e, n);
              },
              timeout: function (e, n) {
                var t = new AbortController(),
                  r = setTimeout(function () {
                    t.abort(),
                      (0, a.H)("Request timeout after ".concat(e, "ms"), n),
                      (r = null);
                  }, e);
                return {
                  signal: t.signal,
                  done: function () {
                    r && clearTimeout(r);
                  },
                };
              },
            },
            c = "GET",
            s = "POST",
            d = "Content-Type";
          function f(e, n) {
            var t =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              r = t.method || (n ? s : c);
            if (r === c && n) {
              var i = (0, a.en)(e, t);
              Object.assign(i.search, n), (e = (0, a.Q2)(i));
            }
            var o = new Headers(t.customHeaders);
            o.set(d, t.contentType || "text/plain");
            var f = { method: r, headers: o };
            return (
              r !== c && n && (f.body = n),
              t.withCredentials && (f.credentials = "include"),
              t.browsingTopics && isSecureContext && (f.browsingTopics = !0),
              u.makeRequest(e, f)
            );
          }
          function l() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 3e3,
              n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              t = n.request,
              r = n.done,
              i = function (n, t) {
                var r, i, a;
                null == e ||
                  null !=
                    (null === (r = t) || void 0 === r ? void 0 : r.signal) ||
                  o.vc.getConfig("disableAjaxTimeout") ||
                  ((a = u.timeout(e, n)),
                  (t = Object.assign({ signal: a.signal }, t)));
                var c = u.fetch(n, t);
                return (
                  null !=
                    (null === (i = a) || void 0 === i ? void 0 : i.done) &&
                    (c = c.finally(a.done)),
                  c
                );
              };
            return (
              (null == t && null == r) ||
                (i = (function (e) {
                  return function (n, i) {
                    var o = new URL(
                        null == (null == n ? void 0 : n.url) ? n : n.url,
                        document.location
                      ).origin,
                      a = e(n, i);
                    return (
                      t && t(o),
                      r &&
                        (a = a.finally(function () {
                          return r(o);
                        })),
                      a
                    );
                  };
                })(i)),
              i
            );
          }
          function g(e, n) {
            var t = e.status,
              r = e.statusText,
              i = void 0 === r ? "" : r,
              o = e.headers,
              u = e.url,
              c = 0;
            function s(e) {
              if (0 === c)
                try {
                  var t, r;
                  c = new DOMParser().parseFromString(
                    n,
                    null == o ||
                      null === (t = o.get(d)) ||
                      void 0 === t ||
                      null === (r = t.split(";")) ||
                      void 0 === r
                      ? void 0
                      : r[0]
                  );
                } catch (n) {
                  (c = null), e && e(n);
                }
              return c;
            }
            return {
              readyState: XMLHttpRequest.DONE,
              status: t,
              statusText: i,
              responseText: n,
              response: n,
              responseType: "",
              responseURL: u,
              get responseXML() {
                return s(a.H);
              },
              getResponseHeader: function (e) {
                return null != o && o.has(e) ? o.get(e) : null;
              },
              toJSON: function () {
                return Object.assign({ responseXML: s() }, this);
              },
            };
          }
          function p(e, n) {
            var t =
                "object" === (0, i.Z)(n) && null != n
                  ? n
                  : {
                      success:
                        "function" == typeof n
                          ? n
                          : function () {
                              return null;
                            },
                      error: function (e, n) {
                        return (0, a.H)("Network error", e, n);
                      },
                    },
              o = t.success,
              u = t.error;
            e.then(function (e) {
              return e.text().then(function (n) {
                return [e, n];
              });
            }).then(
              function (e) {
                var n = (0, r.Z)(e, 2),
                  t = n[0],
                  i = n[1],
                  a = g(t, i);
                t.ok || 304 === t.status ? o(i, a) : u(t.statusText, a);
              },
              function () {
                return u("", g({ status: 0 }, ""));
              }
            );
          }
          function v() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 3e3,
              n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              t = n.request,
              r = n.done,
              i = l(e, { request: t, done: r });
            return function (e, n, t) {
              var r =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : {};
              p(i(f(e, t, r)), n);
            };
          }
          var h = v();
          l();
        },
        1176: function (e, n, t) {
          t.d(n, {
            K: function () {
              return oe;
            },
          });
          var r = t(3324),
            i = t(9062),
            o = t(4358),
            a = t(1002),
            u = t(265),
            c = t(6463),
            s = t(59),
            d = t(8928),
            f = t(3193);
          function l(e, n) {
            var t = n ? "<![CDATA[".concat(n, "]]>") : "";
            return '<VAST version="3.0">\n    <Ad>\n      <Wrapper>\n        <AdSystem>prebid.org wrapper</AdSystem>\n        <VASTAdTagURI><![CDATA['
              .concat(e, "]]></VASTAdTagURI>\n        <Impression>")
              .concat(
                t,
                "</Impression>\n        <Creatives></Creatives>\n      </Wrapper>\n    </Ad>\n  </VAST>"
              );
          }
          function g(e) {
            var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              t = n.index,
              r = void 0 === t ? oe.index : t,
              i = e.vastXml ? e.vastXml : l(e.vastUrl, e.vastImpUrl),
              o = r.getAuction(e),
              a = Number(e.ttl) + 15,
              u = { type: "xml", value: i, ttlseconds: a };
            return (
              f.vc.getConfig("cache.vasttrack") &&
                ((u.bidder = e.bidder),
                (u.bidid = e.requestId),
                (u.aid = e.auctionId)),
              null != o && (u.timestamp = o.getAuctionStart()),
              "string" == typeof e.customCacheKey &&
                "" !== e.customCacheKey &&
                (u.key = e.customCacheKey),
              u
            );
          }
          function p(e) {
            return {
              success: function (n) {
                var t;
                try {
                  t = JSON.parse(n).responses;
                } catch (n) {
                  return void e(n, []);
                }
                t
                  ? e(null, t)
                  : e(
                      new Error(
                        "The cache server didn't respond with a responses property."
                      ),
                      []
                    );
              },
              error: function (n, t) {
                e(
                  new Error(
                    "Error storing video ad in the cache: "
                      .concat(n, ": ")
                      .concat(JSON.stringify(t))
                  ),
                  []
                );
              },
            };
          }
          var v = t(5706),
            h = t(1974),
            b = t(2797),
            m = t(4614),
            y = t(154),
            w = t(4679),
            C = t(5975),
            A = t(2021),
            T = t(2931),
            E = t(5644),
            O = t(8792),
            k = t(9128),
            j = t(8640),
            I = h.k_.syncUsers,
            B = "completed";
          A.on(E.FP.BID_ADJUSTMENT, function (e) {
            !(function (e) {
              var n = (function (e, n, t) {
                var r,
                  i =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : {},
                  a = i.index,
                  u = void 0 === a ? oe.index : a,
                  c = i.bs,
                  s = void 0 === c ? C.S : c;
                t = t || u.getBidRequest(n);
                var d = null == n ? void 0 : n.adapterCode,
                  f =
                    (null == n ? void 0 : n.bidderCode) ||
                    (null === (r = t) || void 0 === r ? void 0 : r.bidder),
                  l = s.get(
                    null == n ? void 0 : n.adapterCode,
                    "adjustAlternateBids"
                  ),
                  g =
                    s.getOwn(f, "bidCpmAdjustment") ||
                    s.get(l ? d : f, "bidCpmAdjustment");
                if (g && "function" == typeof g)
                  try {
                    return g(e, Object.assign({}, n), t);
                  } catch (e) {
                    (0, o.H)("Error during bid adjustment", e);
                  }
                return e;
              })(e.cpm, e);
              n >= 0 && (e.cpm = n);
            })(e);
          });
          var S = {},
            U = {},
            R = [],
            P = (0, j.R)();
          function D(e) {
            var n = e.adUnits,
              t = e.adUnitCodes,
              r = e.callback,
              i = e.cbTimeout,
              u = e.labels,
              c = e.auctionId,
              s = e.ortb2Fragments,
              d = e.metrics;
            d = (0, k.Bf)(d);
            var l,
              g,
              p,
              v,
              h = n,
              b = u,
              y = t,
              C = c || (0, o.DO)(),
              j = i,
              D = new Set(),
              M = (0, O.P)(),
              F = [],
              L = r,
              z = [],
              K = [],
              V = [],
              Q = [],
              X = [];
            function $() {
              return {
                auctionId: C,
                timestamp: l,
                auctionEnd: g,
                auctionStatus: v,
                adUnits: h,
                adUnitCodes: y,
                labels: b,
                bidderRequests: z,
                noBids: V,
                bidsReceived: K,
                bidsRejected: F,
                winningBids: Q,
                timeout: j,
                metrics: d,
                seatNonBids: X,
              };
            }
            function Y(e) {
              if (
                (e ? A.j8(E.FP.AUCTION_TIMEOUT, $()) : clearTimeout(p),
                void 0 === g)
              ) {
                var t = [];
                e &&
                  ((0, o.ji)("Auction ".concat(C, " timedOut")),
                  (t = z
                    .filter(function (e) {
                      return !D.has(e.bidderRequestId);
                    })
                    .flatMap(function (e) {
                      return e.bids;
                    })).length && A.j8(E.FP.BID_TIMEOUT, t)),
                  (v = B),
                  (g = Date.now()),
                  d.checkpoint("auctionEnd"),
                  d.timeBetween(
                    "requestBids",
                    "auctionEnd",
                    "requestBids.total"
                  ),
                  d.timeBetween(
                    "callBids",
                    "auctionEnd",
                    "requestBids.callBids"
                  ),
                  M.resolve(),
                  A.j8(E.FP.AUCTION_END, $()),
                  N(h, function () {
                    try {
                      if (null != L) {
                        var r = K.filter(function (e) {
                          return y.includes(e.adUnitCode);
                        }).reduce(ee, {});
                        L.apply(P, [r, e, C]), (L = null);
                      }
                    } catch (e) {
                      (0, o.H)("Error executing bidsBackHandler", null, e);
                    } finally {
                      t.length && T.ZP.callTimedOutBidders(n, t, j);
                      var i = f.vc.getConfig("userSync") || {};
                      i.enableOverride || I(i.syncDelay);
                    }
                  });
              }
            }
            function ne() {
              f.vc.resetBidder(),
                (0, o.PN)("Bids Received for Auction with id: ".concat(C), K),
                (v = B),
                Y(!1);
            }
            function te(e) {
              D.add(e);
            }
            function re(e) {
              var n = this;
              e.forEach(function (e) {
                var n;
                (n = e), (z = z.concat(n));
              });
              var t = {},
                r = {
                  bidRequests: e,
                  run: function () {
                    (p = setTimeout(function () {
                      return Y(!0);
                    }, j)),
                      (v = "inProgress"),
                      A.j8(E.FP.AUCTION_INIT, $());
                    var r = (function (e, n) {
                      var t = (
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : {}
                        ).index,
                        r = (void 0 === t && oe.index, 0),
                        i = !1,
                        u = new Set(),
                        c = {};
                      function s() {
                        r--, i && 0 === r && e();
                      }
                      function d(e, n, t) {
                        return (c[n.requestId] = !0), G(n, e), r++, t(s);
                      }
                      function l(e, t) {
                        d(e, t, function (e) {
                          var r = J(t);
                          A.j8(E.FP.BID_ACCEPTED, r),
                            r.mediaType === w.pX
                              ? H(n, r, e)
                              : (null != r.native &&
                                  "object" === (0, a.Z)(r.native) &&
                                  W(r),
                                q(n, r),
                                e());
                        });
                      }
                      function g(e, t, r) {
                        return d(e, t, function (e) {
                          (t.rejectionReason = r),
                            (0, o.yN)(
                              "Bid from "
                                .concat(
                                  t.bidder || "unknown bidder",
                                  " was rejected: "
                                )
                                .concat(r),
                              t
                            ),
                            A.j8(E.FP.BID_REJECTED, t),
                            n.addBidRejected(t),
                            e();
                        });
                      }
                      function p() {
                        var t = n.getBidRequests(),
                          a = f.vc.getConfig("auctionOptions");
                        if ((u.add(this), a && !(0, o.xb)(a))) {
                          var s = a.secondaryBidders;
                          s &&
                            !t.every(function (e) {
                              return (0, m.q9)(s, e.bidderCode);
                            }) &&
                            (t = t.filter(function (e) {
                              return !(0, m.q9)(s, e.bidderCode);
                            }));
                        }
                        (i = t.every(function (e) {
                          return u.has(e);
                        })),
                          this.bids.forEach(function (e) {
                            c[e.bidId] || (n.addNoBid(e), A.j8(E.FP.NO_BID, e));
                          }),
                          i && 0 === r && e();
                      }
                      return {
                        addBidResponse: (function () {
                          function e(e, n) {
                            var t;
                            x.call(
                              { dispatch: l },
                              e,
                              n,
                              ((t = !1),
                              function (r) {
                                t || (g(e, n, r), (t = !0));
                              })
                            );
                          }
                          return (e.reject = g), e;
                        })(),
                        adapterDone: function () {
                          var e = this;
                          Z(O.Z.resolve()).finally(function () {
                            return p.call(e);
                          });
                        },
                      };
                    })(ne, n);
                    T.ZP.callBids(
                      h,
                      e,
                      r.addBidResponse,
                      r.adapterDone,
                      {
                        request: function (e, n) {
                          u(S, n),
                            u(t, e),
                            U[e] || (U[e] = { SRA: !0, origin: n }),
                            t[e] > 1 && (U[e].SRA = !1);
                        },
                        done: function (e) {
                          S[e]--, R[0] && i(R[0]) && R.shift();
                        },
                      },
                      j,
                      te,
                      s
                    );
                  },
                };
              function i(e) {
                var n = !0,
                  t = f.vc.getConfig("maxRequestsPerOrigin") || 4;
                return (
                  e.bidRequests.some(function (e) {
                    var r = 1,
                      i =
                        void 0 !== e.src && e.src === E.os.YZ
                          ? "s2s"
                          : e.bidderCode;
                    return (
                      U[i] &&
                        (!1 === U[i].SRA && (r = Math.min(e.bids.length, t)),
                        S[U[i].origin] + r > t && (n = !1)),
                      !n
                    );
                  }),
                  n && e.run(),
                  n
                );
              }
              function u(e, n) {
                void 0 === e[n] ? (e[n] = 1) : e[n]++;
              }
              i(r) ||
                ((0, o.yN)("queueing auction due to limited endpoint capacity"),
                R.push(r));
            }
            return (
              A.on(E.FP.SEAT_NON_BID, function (e) {
                var n;
                e.auctionId === C && ((n = e.seatnonbid), (X = X.concat(n)));
              }),
              {
                addBidReceived: function (e) {
                  K = K.concat(e);
                },
                addBidRejected: function (e) {
                  F = F.concat(e);
                },
                addNoBid: function (e) {
                  V = V.concat(e);
                },
                callBids: function () {
                  (v = "started"), (l = Date.now());
                  var e = d.measureTime(
                    "requestBids.makeRequests",
                    function () {
                      return T.ZP.makeBidRequests(h, l, C, j, b, s, d);
                    }
                  );
                  (0, o.PN)(
                    "Bids Requested for Auction with id: ".concat(C),
                    e
                  ),
                    d.checkpoint("callBids"),
                    e.length < 1
                      ? ((0, o.yN)(
                          "No valid bid requests returned for auction"
                        ),
                        ne())
                      : _.call({ dispatch: re, context: this }, e);
                },
                addWinningBid: function (e) {
                  var t = n.find(function (n) {
                    return n.transactionId === e.transactionId;
                  });
                  (Q = Q.concat(e)),
                    (0, o.R_)(e),
                    T.ZP.callBidWonBidder(e.adapterCode || e.bidder, e, n),
                    t && !t.deferBilling && T.ZP.callBidBillableBidder(e);
                },
                setBidTargeting: function (e) {
                  T.ZP.callSetTargetingBidder(e.adapterCode || e.bidder, e);
                },
                getWinningBids: function () {
                  return Q;
                },
                getAuctionStart: function () {
                  return l;
                },
                getAuctionEnd: function () {
                  return g;
                },
                getTimeout: function () {
                  return j;
                },
                getAuctionId: function () {
                  return C;
                },
                getAuctionStatus: function () {
                  return v;
                },
                getAdUnits: function () {
                  return h;
                },
                getAdUnitCodes: function () {
                  return y;
                },
                getBidRequests: function () {
                  return z;
                },
                getBidsReceived: function () {
                  return K;
                },
                getNoBids: function () {
                  return V;
                },
                getNonBids: function () {
                  return X;
                },
                getFPD: function () {
                  return s;
                },
                getMetrics: function () {
                  return d;
                },
                end: M.promise,
              }
            );
          }
          var x = (0, b.z3)(
              "sync",
              function (e, n, t) {
                this.dispatch.call(null, e, n);
              },
              "addBidResponse"
            ),
            Z = (0, b.z3)(
              "sync",
              function (e) {
                return e;
              },
              "responsesReady"
            ),
            _ = (0, b.z3)(
              "sync",
              function (e) {
                this.dispatch.call(this.context, e);
              },
              "addBidderRequests"
            ),
            N = (0, b.z3)(
              "async",
              function (e, n) {
                n && n();
              },
              "bidsBackCallback"
            );
          function q(e, n) {
            !(function (e) {
              var n,
                t =
                  !0 === C.S.get(e.bidderCode, "allowZeroCpmBids")
                    ? e.cpm >= 0
                    : e.cpm > 0;
              e.bidderCode &&
                (t || e.dealId) &&
                (n = (function (e, n) {
                  var t = (
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : {}
                    ).index,
                    r = void 0 === t ? oe.index : t;
                  if (!n) return {};
                  var i = r.getBidRequest(n),
                    o = {},
                    a = $(n.mediaType, e);
                  return (
                    Y(o, a, n, i),
                    e &&
                      C.S.getOwn(e, E.k2.xn) &&
                      (Y(o, C.S.ownSettingsFor(e), n, i),
                      (n.sendStandardTargeting = C.S.get(
                        e,
                        "sendStandardTargeting"
                      ))),
                    n.native && (o = Object.assign({}, o, (0, s.Ur)(n))),
                    o
                  );
                })(e.bidderCode, e)),
                (e.adserverTargeting = Object.assign(
                  e.adserverTargeting || {},
                  n
                ));
            })(n),
              (0, k.Bf)(n.metrics).timeSince(
                "addBidResponse",
                "addBidResponse.total"
              ),
              e.addBidReceived(n),
              A.j8(E.FP.BID_RESPONSE, n);
          }
          function H(e, n, t) {
            var r =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : {},
              i = r.index,
              a = void 0 === i ? oe.index : i,
              c = !0,
              s = (0, u.Z)(
                a.getMediaTypes({
                  requestId: n.originalRequestId || n.requestId,
                  transactionId: n.transactionId,
                }),
                "video"
              ),
              d = s && (0, u.Z)(s, "context"),
              l = s && (0, u.Z)(s, "useCacheKey");
            f.vc.getConfig("cache.url") &&
              (l || d !== y.gZ) &&
              (!n.videoCacheKey || f.vc.getConfig("cache.ignoreBidderCacheKey")
                ? ((c = !1), K(e, n, t, s))
                : n.vastUrl ||
                  ((0, o.H)(
                    "videoCacheKey specified but not required vastUrl for video bid"
                  ),
                  (c = !1))),
              c && (q(e, n), t());
          }
          var M,
            F,
            W = function (e) {
              var n,
                t,
                r =
                  null === (n = oe.index.getAdUnit(e)) || void 0 === n
                    ? void 0
                    : n.nativeOrtbRequest,
                i = null === (t = e.native) || void 0 === t ? void 0 : t.ortb;
              if (r && i) {
                var o = (0, s.zq)(i, r);
                Object.assign(e.native, o);
              }
            },
            L = function (e) {
              !(function (e, n) {
                var t =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : d.OI,
                  r = { puts: e.map(g) };
                t(f.vc.getConfig("cache.timeout"))(
                  f.vc.getConfig("cache.url"),
                  p(n),
                  JSON.stringify(r),
                  { contentType: "text/plain", withCredentials: !0 }
                );
              })(
                e.map(function (e) {
                  return e.bidResponse;
                }),
                function (n, t) {
                  t.forEach(function (t, r) {
                    var i,
                      a = e[r],
                      u = a.auctionInstance,
                      c = a.bidResponse,
                      s = a.afterBidAdded;
                    n
                      ? (0, o.yN)(
                          "Failed to save to the video cache: ".concat(
                            n,
                            ". Video bid must be discarded."
                          )
                        )
                      : "" === t.uuid
                      ? (0, o.yN)(
                          "Supplied video cache key was already in use by Prebid Cache; caching attempt was rejected. Video bid must be discarded."
                        )
                      : ((c.videoCacheKey = t.uuid),
                        c.vastUrl ||
                          (c.vastUrl =
                            ((i = c.videoCacheKey),
                            ""
                              .concat(f.vc.getConfig("cache.url"), "?uuid=")
                              .concat(i))),
                        q(u, c),
                        s());
                  });
                }
              );
            };
          f.vc.getConfig("cache", function (e) {
            (M =
              "number" == typeof e.cache.batchSize && e.cache.batchSize > 0
                ? e.cache.batchSize
                : 1),
              (F =
                "number" == typeof e.cache.batchTimeout &&
                e.cache.batchTimeout > 0
                  ? e.cache.batchTimeout
                  : 0);
          });
          var z = (function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : setTimeout,
                n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : L,
                t = [[]],
                r = !1,
                i = function (e) {
                  return e();
                };
              return function (o, a, u) {
                var c = F > 0 ? e : i;
                t[t.length - 1].length >= M && t.push([]),
                  t[t.length - 1].push({
                    auctionInstance: o,
                    bidResponse: a,
                    afterBidAdded: u,
                  }),
                  r ||
                    ((r = !0),
                    c(function () {
                      t.forEach(n), (t = [[]]), (r = !1);
                    }, F));
              };
            })(),
            K = (0, b.z3)(
              "async",
              function (e, n, t, r) {
                z(e, n, t);
              },
              "callPrebidCache"
            );
          function G(e, n) {
            var t =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              r = t.index,
              i = void 0 === r ? oe.index : r,
              a = i.getBidderRequest(e),
              u = i.getAdUnit(e),
              c = (a && a.start) || e.requestTimestamp;
            Object.assign(e, {
              responseTimestamp: e.responseTimestamp || (0, o.AB)(),
              requestTimestamp: e.requestTimestamp || c,
              cpm: parseFloat(e.cpm) || 0,
              bidder: e.bidder || e.bidderCode,
              adUnitCode: n,
            }),
              null != (null == u ? void 0 : u.ttlBuffer) &&
                (e.ttlBuffer = u.ttlBuffer),
              (e.timeToRespond = e.responseTimestamp - e.requestTimestamp);
          }
          function J(e) {
            var n,
              t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              r = t.index,
              i = void 0 === r ? oe.index : r;
            A.j8(E.FP.BID_ADJUSTMENT, e);
            var o =
                (null === (n = i.getBidRequest(e)) || void 0 === n
                  ? void 0
                  : n.renderer) || i.getAdUnit(e).renderer,
              u = e.mediaType,
              s = i.getMediaTypes(e),
              d = s && s[u],
              l = d && d.renderer,
              g = null;
            l && l.url && l.render && (!0 !== l.backupOnly || !e.renderer)
              ? (g = l)
              : o &&
                o.url &&
                o.render &&
                (!0 !== o.backupOnly || !e.renderer) &&
                (g = o),
              g &&
                ((e.renderer = v.Th.install({ url: g.url, config: g.options })),
                e.renderer.setRender(g.render));
            var p = V(
                e.mediaType,
                s,
                f.vc.getConfig("mediaTypePriceGranularity")
              ),
              h = (0, c.D)(
                e.cpm,
                "object" === (0, a.Z)(p)
                  ? p
                  : f.vc.getConfig("customPriceBucket"),
                f.vc.getConfig("currency.granularityMultiplier")
              );
            return (
              (e.pbLg = h.low),
              (e.pbMg = h.med),
              (e.pbHg = h.high),
              (e.pbAg = h.auto),
              (e.pbDg = h.dense),
              (e.pbCg = h.custom),
              e
            );
          }
          function V(e, n, t) {
            if (e && t) {
              if (e === w.pX) {
                var r = (0, u.Z)(n, "".concat(w.pX, ".context"), "instream");
                if (t["".concat(w.pX, "-").concat(r)])
                  return t["".concat(w.pX, "-").concat(r)];
              }
              return t[e];
            }
          }
          var Q = function (e) {
            return function (n) {
              var t =
                e ||
                (function (e) {
                  var n = (
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {}
                    ).index,
                    t = void 0 === n ? oe.index : n,
                    r = V(
                      e.mediaType,
                      t.getMediaTypes(e),
                      f.vc.getConfig("mediaTypePriceGranularity")
                    );
                  return "string" == typeof e.mediaType && r
                    ? "string" == typeof r
                      ? r
                      : "custom"
                    : f.vc.getConfig("priceGranularity");
                })(n);
              return t === E.Ql.B7
                ? n.pbAg
                : t === E.Ql.uN
                ? n.pbDg
                : t === E.Ql.yE
                ? n.pbLg
                : t === E.Ql.M2
                ? n.pbMg
                : t === E.Ql.lj
                ? n.pbHg
                : t === E.Ql.qN
                ? n.pbCg
                : void 0;
            };
          };
          function X(e, n) {
            return {
              key: e,
              val:
                "function" == typeof n
                  ? function (e, t) {
                      return n(e, t);
                    }
                  : function (e) {
                      return (0, o.NA)(e, n);
                    },
            };
          }
          function $(e, n) {
            var t = E.TD,
              r = Object.assign({}, C.S.settingsFor(null));
            if (
              (r[E.k2.xn] ||
                (r[E.k2.xn] = (function () {
                  var e = E.TD;
                  return [
                    X(e.BIDDER, "bidderCode"),
                    X(e.AD_ID, "adId"),
                    X(e.PRICE_BUCKET, Q()),
                    X(e.SIZE, "size"),
                    X(e.DEAL, "dealId"),
                    X(e.SOURCE, "source"),
                    X(e.FORMAT, "mediaType"),
                    X(e.ADOMAIN, function (e) {
                      return e.meta &&
                        e.meta.advertiserDomains &&
                        e.meta.advertiserDomains.length > 0
                        ? [e.meta.advertiserDomains].flat()[0]
                        : "";
                    }),
                    X(e.ACAT, function (e) {
                      return e.meta && e.meta.primaryCatId
                        ? e.meta.primaryCatId
                        : "";
                    }),
                    X(e.DSP, function (e) {
                      return e.meta && (e.meta.networkId || e.meta.networkName)
                        ? (0, u.Z)(e, "meta.networkName") ||
                            (0, u.Z)(e, "meta.networkId")
                        : "";
                    }),
                    X(e.CRID, function (e) {
                      return e.creativeId ? e.creativeId : "";
                    }),
                  ];
                })()),
              "video" === e)
            ) {
              var i = r[E.k2.xn].slice();
              if (
                ((r[E.k2.xn] = i),
                [t.UUID, t.CACHE_ID].forEach(function (e) {
                  void 0 ===
                    (0, m.sE)(i, function (n) {
                      return n.key === e;
                    }) && i.push(X(e, "videoCacheKey"));
                }),
                f.vc.getConfig("cache.url") &&
                  (!n || !1 !== C.S.get(n, "sendStandardTargeting")))
              ) {
                var a = (0, o.en)(f.vc.getConfig("cache.url"));
                void 0 ===
                  (0, m.sE)(i, function (e) {
                    return e.key === t.CACHE_HOST;
                  }) &&
                  i.push(
                    X(t.CACHE_HOST, function (e) {
                      return (0, u.Z)(
                        e,
                        "adserverTargeting.".concat(t.CACHE_HOST)
                      )
                        ? e.adserverTargeting[t.CACHE_HOST]
                        : a.hostname;
                    })
                  );
              }
            }
            return r;
          }
          function Y(e, n, t, r) {
            var i = n[E.k2.xn];
            return (
              (t.size = t.getSize()),
              (i || []).forEach(function (i) {
                var a = i.key,
                  u = i.val;
                if (
                  (e[a] && (0, o.yN)("The key: " + a + " is being overwritten"),
                  (0, o.LQ)(u))
                )
                  try {
                    u = u(t, r);
                  } catch (e) {
                    (0, o.H)("bidmanager", "ERROR", e);
                  }
                ((void 0 === n.suppressEmptyKeys ||
                  !0 !== n.suppressEmptyKeys) &&
                  a !== E.TD.DEAL &&
                  a !== E.TD.ACAT &&
                  a !== E.TD.DSP &&
                  a !== E.TD.CRID) ||
                (!(0, o.jH)(u) && null != u)
                  ? (e[a] = u)
                  : (0, o.PN)(
                      "suppressing empty key '" +
                        a +
                        "' from adserver targeting"
                    );
              }),
              e
            );
          }
          function ee(e, n) {
            return (
              e[n.adUnitCode] || (e[n.adUnitCode] = { bids: [] }),
              e[n.adUnitCode].bids.push(n),
              e
            );
          }
          function ne(e) {
            Object.assign(this, {
              getAuction: function (n) {
                var t = n.auctionId;
                if (null != t)
                  return e().find(function (e) {
                    return e.getAuctionId() === t;
                  });
              },
              getAdUnit: function (n) {
                var t = n.transactionId;
                if (null != t)
                  return e()
                    .flatMap(function (e) {
                      return e.getAdUnits();
                    })
                    .find(function (e) {
                      return e.transactionId === t;
                    });
              },
              getMediaTypes: function (e) {
                var n = e.transactionId,
                  t = e.requestId;
                if (null != t) {
                  var r = this.getBidRequest({ requestId: t });
                  if (null != r && (null == n || r.transactionId === n))
                    return r.mediaTypes;
                } else if (null != n) {
                  var i = this.getAdUnit({ transactionId: n });
                  if (null != i) return i.mediaTypes;
                }
              },
              getBidderRequest: function (n) {
                var t = n.requestId,
                  r = n.bidderRequestId;
                if (null != t || null != r) {
                  var i = e().flatMap(function (e) {
                    return e.getBidRequests();
                  });
                  return (
                    null != r &&
                      (i = i.filter(function (e) {
                        return e.bidderRequestId === r;
                      })),
                    null == t
                      ? i[0]
                      : i.find(function (e) {
                          return (
                            e.bids &&
                            null !=
                              e.bids.find(function (e) {
                                return e.bidId === t;
                              })
                          );
                        })
                  );
                }
              },
              getBidRequest: function (n) {
                var t = n.requestId;
                if (null != t)
                  return e()
                    .flatMap(function (e) {
                      return e.getBidRequests();
                    })
                    .flatMap(function (e) {
                      return e.bids;
                    })
                    .find(function (e) {
                      return e && e.bidId === t;
                    });
              },
            });
          }
          var te = t(613),
            re = t(8833);
          function ie(e, n) {
            (null == n || n > e.length) && (n = e.length);
            for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
            return r;
          }
          var oe = (function () {
            var e = null,
              n = (0, te.Z)({
                startTime: function (e) {
                  return e.end.then(function () {
                    return e.getAuctionEnd();
                  });
                },
                ttl: function (n) {
                  return null == e
                    ? null
                    : n.end.then(function () {
                        return (
                          1e3 *
                          Math.max.apply(
                            Math,
                            [e].concat((0, i.Z)(n.getBidsReceived().map(re.N)))
                          )
                        );
                      });
                },
              });
            (0, re.l)(function () {
              null != e && n.refresh();
            }),
              f.vc.getConfig("minBidCacheTTL", function (t) {
                e !==
                  (e =
                    "number" ==
                    typeof (e = null == t ? void 0 : t.minBidCacheTTL)
                      ? e
                      : null) && n.refresh();
              });
            var t = {};
            function a(e) {
              var t,
                r = (function (e, n) {
                  var t =
                    ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"];
                  if (!t) {
                    if (
                      Array.isArray(e) ||
                      (t = (function (e, n) {
                        if (e) {
                          if ("string" == typeof e) return ie(e, n);
                          var t = Object.prototype.toString
                            .call(e)
                            .slice(8, -1);
                          return (
                            "Object" === t &&
                              e.constructor &&
                              (t = e.constructor.name),
                            "Map" === t || "Set" === t
                              ? Array.from(e)
                              : "Arguments" === t ||
                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                  t
                                )
                              ? ie(e, n)
                              : void 0
                          );
                        }
                      })(e)) ||
                      (n && e && "number" == typeof e.length)
                    ) {
                      t && (e = t);
                      var r = 0,
                        i = function () {};
                      return {
                        s: i,
                        n: function () {
                          return r >= e.length
                            ? { done: !0 }
                            : { done: !1, value: e[r++] };
                        },
                        e: function (e) {
                          throw e;
                        },
                        f: i,
                      };
                    }
                    throw new TypeError(
                      "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  }
                  var o,
                    a = !0,
                    u = !1;
                  return {
                    s: function () {
                      t = t.call(e);
                    },
                    n: function () {
                      var e = t.next();
                      return (a = e.done), e;
                    },
                    e: function (e) {
                      (u = !0), (o = e);
                    },
                    f: function () {
                      try {
                        a || null == t.return || t.return();
                      } finally {
                        if (u) throw o;
                      }
                    },
                  };
                })(n);
              try {
                for (r.s(); !(t = r.n()).done; ) {
                  var i = t.value;
                  if (i.getAuctionId() === e) return i;
                }
              } catch (e) {
                r.e(e);
              } finally {
                r.f();
              }
            }
            function u() {
              return n.toArray().flatMap(function (e) {
                return e.getBidsReceived();
              });
            }
            return (
              (t.addWinningBid = function (e) {
                var n = (0, k.Bf)(e.metrics);
                n.checkpoint("bidWon"),
                  n.timeBetween("auctionEnd", "bidWon", "render.pending"),
                  n.timeBetween("requestBids", "bidWon", "render.e2e");
                var t = a(e.auctionId);
                t
                  ? ((e.status = E.UE.fe), t.addWinningBid(e))
                  : (0, o.yN)("Auction not found when adding winning bid");
              }),
              Object.entries({
                getAllWinningBids: { name: "getWinningBids" },
                getBidsRequested: { name: "getBidRequests" },
                getNoBids: {},
                getAdUnits: {},
                getBidsReceived: {
                  pre: function (e) {
                    return e.getAuctionStatus() === B;
                  },
                },
                getAdUnitCodes: { post: o.tT },
              }).forEach(function (e) {
                var i = (0, r.Z)(e, 2),
                  o = i[0],
                  a = i[1],
                  u = a.name,
                  c = void 0 === u ? o : u,
                  s = a.pre,
                  d = a.post,
                  f =
                    null == s
                      ? function (e) {
                          return e[c]();
                        }
                      : function (e) {
                          return s(e) ? e[c]() : [];
                        },
                  l =
                    null == d
                      ? function (e) {
                          return e;
                        }
                      : function (e) {
                          return e.filter(d);
                        };
                t[o] = function () {
                  return l(n.toArray().flatMap(f));
                };
              }),
              (t.getAllBidsForAdUnitCode = function (e) {
                return u().filter(function (n) {
                  return n && n.adUnitCode === e;
                });
              }),
              (t.createAuction = function (e) {
                var t = D(e);
                return (
                  (function (e) {
                    n.add(e);
                  })(t),
                  t
                );
              }),
              (t.findBidByAdId = function (e) {
                return u().find(function (n) {
                  return n.adId === e;
                });
              }),
              (t.getStandardBidderAdServerTargeting = function () {
                return $()[E.k2.xn];
              }),
              (t.setStatusForBids = function (e, n) {
                var r = t.findBidByAdId(e);
                if ((r && (r.status = n), r && n === E.UE.CK)) {
                  var i = a(r.auctionId);
                  i && i.setBidTargeting(r);
                }
              }),
              (t.getLastAuctionId = function () {
                var e = n.toArray();
                return e.length && e[e.length - 1].getAuctionId();
              }),
              (t.clearAllAuctions = function () {
                n.clear();
              }),
              (t.index = new ne(function () {
                return n.toArray();
              })),
              t
            );
          })();
        },
        8833: function (e, n, t) {
          t.d(n, {
            N: function () {
              return u;
            },
            l: function () {
              return c;
            },
          });
          var r = t(3193),
            i = t(4358),
            o = 1,
            a = [];
          function u(e) {
            return e.ttl - (e.hasOwnProperty("ttlBuffer") ? e.ttlBuffer : o);
          }
          function c(e) {
            a.push(e);
          }
          r.vc.getConfig("ttlBuffer", function (e) {
            "number" == typeof e.ttlBuffer
              ? o !== (o = e.ttlBuffer) &&
                a.forEach(function (e) {
                  return e(o);
                })
              : (0, i.H)("Invalid value for ttlBuffer", e.ttlBuffer);
          });
        },
        5975: function (e, n, t) {
          t.d(n, {
            S: function () {
              return l;
            },
          });
          var r = t(5671),
            i = t(3144),
            o = t(265),
            a = t(4358),
            u = t(8640),
            c = t(5644);
          function s(e, n, t) {
            if (!n.has(e))
              throw new TypeError(
                "attempted to get private field on non-instance"
              );
            return t;
          }
          var d = new WeakSet();
          function f(e) {
            return null == e ? this.defaultScope : e;
          }
          var l = new ((function () {
            function e(n, t) {
              (0, r.Z)(this, e),
                (function (e, n) {
                  !(function (e, n) {
                    if (n.has(e))
                      throw new TypeError(
                        "Cannot initialize the same private elements twice on an object"
                      );
                  })(e, n),
                    n.add(e);
                })(this, d),
                (this.getSettings = n),
                (this.defaultScope = t);
            }
            return (
              (0, i.Z)(e, [
                {
                  key: "get",
                  value: function (e, n) {
                    var t = this.getOwn(e, n);
                    return void 0 === t && (t = this.getOwn(null, n)), t;
                  },
                },
                {
                  key: "getOwn",
                  value: function (e, n) {
                    return (
                      (e = s(this, d, f).call(this, e)),
                      (0, o.Z)(this.getSettings(), "".concat(e, ".").concat(n))
                    );
                  },
                },
                {
                  key: "getScopes",
                  value: function () {
                    var e = this;
                    return Object.keys(this.getSettings()).filter(function (n) {
                      return n !== e.defaultScope;
                    });
                  },
                },
                {
                  key: "settingsFor",
                  value: function (e) {
                    return (0, a.Ee)(
                      {},
                      this.ownSettingsFor(null),
                      this.ownSettingsFor(e)
                    );
                  },
                },
                {
                  key: "ownSettingsFor",
                  value: function (e) {
                    return (
                      (e = s(this, d, f).call(this, e)),
                      this.getSettings()[e] || {}
                    );
                  },
                },
              ]),
              e
            );
          })())(function () {
            return (0, u.R)().bidderSettings || {};
          }, c.k2.zF);
        },
        9626: function (e, n, t) {
          t.d(n, {
            m: function () {
              return o;
            },
          });
          var r = t(4358);
          function i(e) {
            var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              t = n.src,
              i = void 0 === t ? "client" : t,
              o = n.bidder,
              a = void 0 === o ? "" : o,
              u = n.bidId,
              c = n.transactionId,
              s = n.auctionId,
              d = i,
              f = e || 0;
            function l() {
              switch (f) {
                case 0:
                  return "Pending";
                case 1:
                  return "Bid available";
                case 2:
                  return "Bid returned empty or error response";
                case 3:
                  return "Bid timed out";
              }
            }
            (this.bidderCode = a),
              (this.width = 0),
              (this.height = 0),
              (this.statusMessage = l()),
              (this.adId = (0, r._d)()),
              (this.requestId = u),
              (this.transactionId = c),
              (this.auctionId = s),
              (this.mediaType = "banner"),
              (this.source = d),
              (this.getStatusCode = function () {
                return f;
              }),
              (this.getSize = function () {
                return this.width + "x" + this.height;
              }),
              (this.getIdentifiers = function () {
                return {
                  src: this.source,
                  bidder: this.bidderCode,
                  bidId: this.requestId,
                  transactionId: this.transactionId,
                  auctionId: this.auctionId,
                };
              });
          }
          function o(e, n) {
            return new i(e, n);
          }
        },
        3193: function (e, n, t) {
          t.d(n, {
            FD: function () {
              return g;
            },
            vc: function () {
              return m;
            },
          });
          var r = t(4942),
            i = t(1002),
            o = t(3324),
            a = t(6463),
            u = t(4614),
            c = t(4358),
            s = t(265),
            d = t(5644);
          function f(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n &&
                (r = r.filter(function (n) {
                  return Object.getOwnPropertyDescriptor(e, n).enumerable;
                })),
                t.push.apply(t, r);
            }
            return t;
          }
          var l = "TRUE" === (0, c.ak)(d.f).toUpperCase(),
            g = "random",
            p = {};
          (p[g] = !0), (p.fixed = !0);
          var v = g,
            h = {
              LOW: "low",
              MEDIUM: "medium",
              HIGH: "high",
              AUTO: "auto",
              DENSE: "dense",
              CUSTOM: "custom",
            },
            b = "*",
            m = (function () {
              var e,
                n,
                t,
                d = [],
                g = null;
              function m() {
                function r(e) {
                  return s[e].val;
                }
                function i(e, n) {
                  s[e].val = n;
                }
                e = {};
                var s = {
                    publisherDomain: {
                      set: function (e) {
                        null != e &&
                          (0, c.yN)(
                            "publisherDomain is deprecated and has no effect since v7 - use pageUrl instead"
                          ),
                          i("publisherDomain", e);
                      },
                    },
                    priceGranularity: {
                      val: h.MEDIUM,
                      set: function (e) {
                        g(e) &&
                          ("string" == typeof e
                            ? i("priceGranularity", f(e) ? e : h.MEDIUM)
                            : (0, c.PO)(e) &&
                              (i("customPriceBucket", e),
                              i("priceGranularity", h.CUSTOM),
                              (0, c.ji)("Using custom price granularity")));
                      },
                    },
                    customPriceBucket: { val: {}, set: function () {} },
                    mediaTypePriceGranularity: {
                      val: {},
                      set: function (e) {
                        null != e &&
                          i(
                            "mediaTypePriceGranularity",
                            Object.keys(e).reduce(function (n, t) {
                              return (
                                g(e[t])
                                  ? "string" == typeof e
                                    ? (n[t] = f(e[t])
                                        ? e[t]
                                        : r("priceGranularity"))
                                    : (0, c.PO)(e) &&
                                      ((n[t] = e[t]),
                                      (0, c.ji)(
                                        "Using custom price granularity for ".concat(
                                          t
                                        )
                                      ))
                                  : (0, c.yN)(
                                      "Invalid price granularity for media type: ".concat(
                                        t
                                      )
                                    ),
                                n
                              );
                            }, {})
                          );
                      },
                    },
                    bidderSequence: {
                      val: v,
                      set: function (e) {
                        p[e]
                          ? i("bidderSequence", e)
                          : (0, c.yN)(
                              "Invalid order: ".concat(
                                e,
                                ". Bidder Sequence was not set."
                              )
                            );
                      },
                    },
                    auctionOptions: {
                      val: {},
                      set: function (e) {
                        (function (e) {
                          if (!(0, c.PO)(e))
                            return (
                              (0, c.yN)("Auction Options must be an object"), !1
                            );
                          for (
                            var n = 0, t = Object.keys(e);
                            n < t.length;
                            n++
                          ) {
                            var r = t[n];
                            if (
                              "secondaryBidders" !== r &&
                              "suppressStaleRender" !== r
                            )
                              return (
                                (0, c.yN)(
                                  "Auction Options given an incorrect param: ".concat(
                                    r
                                  )
                                ),
                                !1
                              );
                            if ("secondaryBidders" === r) {
                              if (!(0, c.kJ)(e[r]))
                                return (
                                  (0, c.yN)(
                                    "Auction Options ".concat(
                                      r,
                                      " must be of type Array"
                                    )
                                  ),
                                  !1
                                );
                              if (!e[r].every(c.d8))
                                return (
                                  (0, c.yN)(
                                    "Auction Options ".concat(
                                      r,
                                      " must be only string"
                                    )
                                  ),
                                  !1
                                );
                            } else if (
                              "suppressStaleRender" === r &&
                              !(0, c.jn)(e[r])
                            )
                              return (
                                (0, c.yN)(
                                  "Auction Options ".concat(
                                    r,
                                    " must be of type boolean"
                                  )
                                ),
                                !1
                              );
                          }
                          return !0;
                        })(e) && i("auctionOptions", e);
                      },
                    },
                  },
                  d = {
                    debug: l,
                    bidderTimeout: 3e3,
                    enableSendAllBids: !0,
                    useBidCache: !1,
                    deviceAccess: !0,
                    timeoutBuffer: 400,
                    disableAjaxTimeout: !0,
                    maxNestedIframes: 10,
                  };
                function f(e) {
                  return (0, u.sE)(Object.keys(h), function (n) {
                    return e === h[n];
                  });
                }
                function g(e) {
                  if (!e)
                    return (
                      (0, c.H)(
                        "Prebid Error: no value passed to `setPriceGranularity()`"
                      ),
                      !1
                    );
                  if ("string" == typeof e)
                    f(e) ||
                      (0, c.yN)(
                        "Prebid Warning: setPriceGranularity was called with invalid setting, using `medium` as default."
                      );
                  else if ((0, c.PO)(e) && !(0, a.t)(e))
                    return (
                      (0, c.H)(
                        "Invalid custom price value passed to `setPriceGranularity()`"
                      ),
                      !1
                    );
                  return !0;
                }
                Object.defineProperties(
                  d,
                  Object.fromEntries(
                    Object.entries(s).map(function (e) {
                      var n = (0, o.Z)(e, 2),
                        t = n[0],
                        a = n[1];
                      return [
                        t,
                        Object.assign(
                          {
                            get: r.bind(null, t),
                            set: i.bind(null, t),
                            enumerable: !0,
                          },
                          a
                        ),
                      ];
                    })
                  )
                ),
                  n &&
                    S(
                      Object.keys(n).reduce(function (e, t) {
                        return n[t] !== d[t] && (e[t] = d[t] || {}), e;
                      }, {})
                    ),
                  (n = d),
                  (t = {});
              }
              function y() {
                if (g && t && (0, c.PO)(t[g])) {
                  var e = t[g],
                    r = new Set(Object.keys(n).concat(Object.keys(e)));
                  return (0, u.Oc)(r).reduce(function (t, r) {
                    return (
                      void 0 === e[r]
                        ? (t[r] = n[r])
                        : void 0 === n[r]
                        ? (t[r] = e[r])
                        : (0, c.PO)(e[r])
                        ? (t[r] = (0, c.Ee)({}, n[r], e[r]))
                        : (t[r] = e[r]),
                      t
                    );
                  }, {});
                }
                return Object.assign({}, n);
              }
              var w = [
                  y,
                  function () {
                    var e = y();
                    return (
                      Object.defineProperty(e, "ortb2", {
                        get: function () {
                          throw new Error(
                            "invalid access to 'orbt2' config - use request parameters instead"
                          );
                        },
                      }),
                      e
                    );
                  },
                ].map(function (e) {
                  return function () {
                    if (
                      arguments.length <= 1 &&
                      "function" !=
                        typeof (arguments.length <= 0 ? void 0 : arguments[0])
                    ) {
                      var n = arguments.length <= 0 ? void 0 : arguments[0];
                      return n ? (0, s.Z)(e(), n) : y();
                    }
                    return B.apply(void 0, arguments);
                  };
                }),
                C = (0, o.Z)(w, 2),
                A = C[0],
                T = C[1],
                E = [T, A].map(function (e) {
                  return function () {
                    var n = e.apply(void 0, arguments);
                    return (
                      n && "object" === (0, i.Z)(n) && (n = (0, c.I8)(n)), n
                    );
                  };
                }),
                O = (0, o.Z)(E, 2),
                k = O[0],
                j = O[1];
              function I(t) {
                if ((0, c.PO)(t)) {
                  var r = Object.keys(t),
                    i = {};
                  r.forEach(function (r) {
                    var o = t[r];
                    (0, c.PO)(e[r]) &&
                      (0, c.PO)(o) &&
                      (o = Object.assign({}, e[r], o));
                    try {
                      i[r] = n[r] = o;
                    } catch (e) {
                      (0,
                      c.yN)("Cannot set config for property ".concat(r, " : "), e);
                    }
                  }),
                    S(i);
                } else (0, c.H)("setConfig options must be an object");
              }
              function B(e, n) {
                var t =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {},
                  i = n;
                if (
                  ("string" != typeof e && ((i = e), (e = b), (t = n || {})),
                  "function" == typeof i)
                ) {
                  var o = { topic: e, callback: i };
                  return (
                    d.push(o),
                    t.init && i(e === b ? T() : (0, r.Z)({}, e, T(e))),
                    function () {
                      d.splice(d.indexOf(o), 1);
                    }
                  );
                }
                (0, c.H)("listener must be a function");
              }
              function S(e) {
                var n = Object.keys(e);
                d
                  .filter(function (e) {
                    return (0, u.q9)(n, e.topic);
                  })
                  .forEach(function (n) {
                    n.callback((0, r.Z)({}, n.topic, e[n.topic]));
                  }),
                  d
                    .filter(function (e) {
                      return e.topic === b;
                    })
                    .forEach(function (n) {
                      return n.callback(e);
                    });
              }
              function U(e) {
                var n =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1];
                try {
                  r(e),
                    e.bidders.forEach(function (r) {
                      t[r] || (t[r] = {}),
                        Object.keys(e.config).forEach(function (i) {
                          var o = e.config[i];
                          if ((0, c.PO)(o)) {
                            var a = n ? c.Ee : Object.assign;
                            t[r][i] = a({}, t[r][i] || {}, o);
                          } else t[r][i] = o;
                        });
                    });
                } catch (e) {
                  (0, c.H)(e);
                }
                function r(e) {
                  if (!(0, c.PO)(e))
                    throw "setBidderConfig bidder options must be an object";
                  if (!Array.isArray(e.bidders) || !e.bidders.length)
                    throw "setBidderConfig bidder options must contain a bidders list with at least 1 bidder";
                  if (!(0, c.PO)(e.config))
                    throw "setBidderConfig bidder options must contain a config object";
                }
              }
              function R(e, n) {
                g = e;
                try {
                  return n();
                } finally {
                  P();
                }
              }
              function P() {
                g = null;
              }
              return (
                m(),
                {
                  getCurrentBidder: function () {
                    return g;
                  },
                  resetBidder: P,
                  getConfig: T,
                  getAnyConfig: A,
                  readConfig: k,
                  readAnyConfig: j,
                  setConfig: I,
                  mergeConfig: function (e) {
                    if ((0, c.PO)(e)) {
                      var n = (0, c.Ee)(y(), e);
                      return (
                        I(
                          (function (e) {
                            for (var n = 1; n < arguments.length; n++) {
                              var t = null != arguments[n] ? arguments[n] : {};
                              n % 2
                                ? f(Object(t), !0).forEach(function (n) {
                                    (0, r.Z)(e, n, t[n]);
                                  })
                                : Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(
                                    e,
                                    Object.getOwnPropertyDescriptors(t)
                                  )
                                : f(Object(t)).forEach(function (n) {
                                    Object.defineProperty(
                                      e,
                                      n,
                                      Object.getOwnPropertyDescriptor(t, n)
                                    );
                                  });
                            }
                            return e;
                          })({}, n)
                        ),
                        n
                      );
                    }
                    (0, c.H)("mergeConfig input must be an object");
                  },
                  setDefaults: function (t) {
                    (0, c.PO)(e)
                      ? (Object.assign(e, t), Object.assign(n, t))
                      : (0, c.H)("defaults must be an object");
                  },
                  resetConfig: m,
                  runWithBidder: R,
                  callbackWithBidder: function (e) {
                    return function (n) {
                      return function () {
                        if ("function" == typeof n) {
                          for (
                            var t = arguments.length, r = new Array(t), i = 0;
                            i < t;
                            i++
                          )
                            r[i] = arguments[i];
                          return R(e, n.bind.apply(n, [this].concat(r)));
                        }
                        (0, c.yN)(
                          "config.callbackWithBidder callback is not a function"
                        );
                      };
                    };
                  },
                  setBidderConfig: U,
                  getBidderConfig: function () {
                    return t;
                  },
                  mergeBidderConfig: function (e) {
                    return U(e, !0);
                  },
                }
              );
            })();
        },
        2513: function (e, n, t) {
          t.d(n, {
            qh: function () {
              return M;
            },
            NO: function () {
              return W;
            },
            rp: function () {
              return _;
            },
            TJ: function () {
              return q;
            },
            nX: function () {
              return N;
            },
          });
          var r = t(3324);
          function i(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          }
          function o(e, n) {
            return (
              (o = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (e, n) {
                    return (e.__proto__ = n), e;
                  }),
              o(e, n)
            );
          }
          function a(e, n) {
            if ("function" != typeof n && null !== n)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(n && n.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(e, "prototype", { writable: !1 }),
              n && o(e, n);
          }
          var u = t(1002);
          function c(e, n) {
            if (n && ("object" === (0, u.Z)(n) || "function" == typeof n))
              return n;
            if (void 0 !== n)
              throw new TypeError(
                "Derived constructors may only return object or undefined"
              );
            return i(e);
          }
          function s(e) {
            return (
              (s = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                  }),
              s(e)
            );
          }
          var d = t(5671),
            f = t(3144),
            l = t(4942),
            g = t(8916),
            p = t(2793),
            v = t(4358),
            h = t(8792),
            b = t(3193);
          function m(e) {
            var n = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })();
            return function () {
              var t,
                r = s(e);
              if (n) {
                var i = s(this).constructor;
                t = Reflect.construct(r, arguments, i);
              } else t = r.apply(this, arguments);
              return c(this, t);
            };
          }
          function y(e, n, t) {
            w(e, n), n.set(e, t);
          }
          function w(e, n) {
            if (n.has(e))
              throw new TypeError(
                "Cannot initialize the same private elements twice on an object"
              );
          }
          function C(e, n, t) {
            if (!n.has(e))
              throw new TypeError(
                "attempted to get private field on non-instance"
              );
            return t;
          }
          Object.freeze({}), Object.freeze({});
          var A = new WeakMap(),
            T = new WeakMap(),
            E = new WeakMap(),
            O = new WeakMap(),
            k = new WeakMap(),
            j = new WeakMap(),
            I = new WeakSet(),
            B = (function () {
              function e() {
                var n;
                (0, d.Z)(this, e),
                  w(this, (n = I)),
                  n.add(this),
                  y(this, A, { writable: !0, value: void 0 }),
                  y(this, T, { writable: !0, value: void 0 }),
                  y(this, E, { writable: !0, value: void 0 }),
                  y(this, O, { writable: !0, value: void 0 }),
                  y(this, k, { writable: !0, value: !0 }),
                  y(this, j, { writable: !0, value: void 0 }),
                  (0, l.Z)(this, "generatedTime", void 0),
                  (0, l.Z)(this, "hashFields", void 0),
                  this.reset();
              }
              return (
                (0, f.Z)(e, [
                  {
                    key: "reset",
                    value: function () {
                      (0, p.Z)(this, E, (0, h.P)()),
                        (0, p.Z)(this, A, !1),
                        (0, p.Z)(this, T, null),
                        (0, p.Z)(this, O, !1),
                        (this.generatedTime = null);
                    },
                  },
                  {
                    key: "enable",
                    value: function () {
                      (0, p.Z)(this, A, !0);
                    },
                  },
                  {
                    key: "enabled",
                    get: function () {
                      return (0, g.Z)(this, A);
                    },
                  },
                  {
                    key: "ready",
                    get: function () {
                      return (0, g.Z)(this, O);
                    },
                  },
                  {
                    key: "promise",
                    get: function () {
                      return (0, g.Z)(this, O)
                        ? h.Z.resolve((0, g.Z)(this, T))
                        : ((0, g.Z)(this, A) || C(this, I, S).call(this, null),
                          (0, g.Z)(this, E).promise);
                    },
                  },
                  {
                    key: "setConsentData",
                    value: function (e) {
                      var n =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : (0, v.AB)();
                      (this.generatedTime = n),
                        (0, p.Z)(this, k, !0),
                        C(this, I, S).call(this, e);
                    },
                  },
                  {
                    key: "getConsentData",
                    value: function () {
                      return (0, g.Z)(this, T);
                    },
                  },
                  {
                    key: "hash",
                    get: function () {
                      var e = this;
                      return (
                        (0, g.Z)(this, k) &&
                          ((0, p.Z)(
                            this,
                            j,
                            (0, v._R)(
                              JSON.stringify(
                                (0, g.Z)(this, T) && this.hashFields
                                  ? this.hashFields.map(function (n) {
                                      return (0, g.Z)(e, T)[n];
                                    })
                                  : (0, g.Z)(this, T)
                              )
                            )
                          ),
                          (0, p.Z)(this, k, !1)),
                        (0, g.Z)(this, j)
                      );
                    },
                  },
                ]),
                e
              );
            })();
          function S(e) {
            (0, p.Z)(this, O, !0),
              (0, p.Z)(this, T, e),
              (0, g.Z)(this, E).resolve(e);
          }
          var U,
            R,
            P,
            D = (function (e) {
              a(t, e);
              var n = m(t);
              function t() {
                return (0, d.Z)(this, t), n.apply(this, arguments);
              }
              return (
                (0, f.Z)(t, [
                  {
                    key: "getConsentMeta",
                    value: function () {
                      var e = this.getConsentData();
                      if (e && this.generatedTime)
                        return { usp: e, generatedAt: this.generatedTime };
                    },
                  },
                ]),
                t
              );
            })(B),
            x = (function (e) {
              a(t, e);
              var n = m(t);
              function t() {
                var e;
                (0, d.Z)(this, t);
                for (
                  var r = arguments.length, o = new Array(r), a = 0;
                  a < r;
                  a++
                )
                  o[a] = arguments[a];
                return (
                  (e = n.call.apply(n, [this].concat(o))),
                  (0, l.Z)(i(e), "hashFields", [
                    "gdprApplies",
                    "consentString",
                  ]),
                  e
                );
              }
              return (
                (0, f.Z)(t, [
                  {
                    key: "getConsentMeta",
                    value: function () {
                      var e = this.getConsentData();
                      if (e && e.vendorData && this.generatedTime)
                        return {
                          gdprApplies: e.gdprApplies,
                          consentStringSize: (0, v.d8)(e.vendorData.tcString)
                            ? e.vendorData.tcString.length
                            : 0,
                          generatedAt: this.generatedTime,
                          apiVersion: e.apiVersion,
                        };
                    },
                  },
                ]),
                t
              );
            })(B),
            Z = (function (e) {
              a(t, e);
              var n = m(t);
              function t() {
                var e;
                (0, d.Z)(this, t);
                for (
                  var r = arguments.length, o = new Array(r), a = 0;
                  a < r;
                  a++
                )
                  o[a] = arguments[a];
                return (
                  (e = n.call.apply(n, [this].concat(o))),
                  (0, l.Z)(i(e), "hashFields", [
                    "applicableSections",
                    "gppString",
                  ]),
                  e
                );
              }
              return (
                (0, f.Z)(t, [
                  {
                    key: "getConsentMeta",
                    value: function () {
                      if (this.getConsentData() && this.generatedTime)
                        return { generatedAt: this.generatedTime };
                    },
                  },
                ]),
                t
              );
            })(B),
            _ = new x(),
            N = new D(),
            q = new Z(),
            H = (function () {
              function e() {
                return !!b.vc.getConfig("coppa");
              }
              return {
                getCoppa: e,
                getConsentData: e,
                getConsentMeta: e,
                reset: function () {},
                get promise() {
                  return h.Z.resolve(e());
                },
                get hash() {
                  return e() ? "1" : "0";
                },
              };
            })(),
            M =
              ((U = {}),
              (R = {}),
              (P = {}),
              {
                register: function (e, n, t) {
                  t &&
                    (((U[n] = U[n] || {})[e] = t),
                    R.hasOwnProperty(n)
                      ? R[n] !== t && (R[n] = P)
                      : (R[n] = t));
                },
                get: function (e) {
                  var n = { modules: U[e] || {} };
                  return (
                    R.hasOwnProperty(e) && R[e] !== P && (n.gvlid = R[e]), n
                  );
                },
              }),
            F = { gdpr: _, usp: N, gpp: q, coppa: H },
            W = (function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : F;
              function n(n) {
                return function () {
                  return Object.fromEntries(
                    e.map(function (e) {
                      var t = (0, r.Z)(e, 2);
                      return [t[0], t[1][n]()];
                    })
                  );
                };
              }
              return (
                (e = Object.entries(e)),
                Object.assign(
                  {
                    get promise() {
                      return h.Z.all(
                        e.map(function (e) {
                          var n = (0, r.Z)(e, 2),
                            t = n[0];
                          return n[1].promise.then(function (e) {
                            return [t, e];
                          });
                        })
                      ).then(function (e) {
                        return Object.fromEntries(e);
                      });
                    },
                    get hash() {
                      return (0, v._R)(
                        e
                          .map(function (e) {
                            var n = (0, r.Z)(e, 2);
                            return n[0], n[1].hash;
                          })
                          .join(":")
                      );
                    },
                  },
                  Object.fromEntries(
                    ["getConsentData", "getConsentMeta", "reset"].map(function (
                      e
                    ) {
                      return [e, n(e)];
                    })
                  )
                )
              );
            })();
        },
        6463: function (e, n, t) {
          t.d(n, {
            D: function () {
              return f;
            },
            t: function () {
              return g;
            },
          });
          var r = t(4614),
            i = t(4358),
            o = t(3193),
            a = { buckets: [{ max: 5, increment: 0.5 }] },
            u = { buckets: [{ max: 20, increment: 0.1 }] },
            c = { buckets: [{ max: 20, increment: 0.01 }] },
            s = {
              buckets: [
                { max: 3, increment: 0.01 },
                { max: 8, increment: 0.05 },
                { max: 20, increment: 0.5 },
              ],
            },
            d = {
              buckets: [
                { max: 5, increment: 0.05 },
                { max: 10, increment: 0.1 },
                { max: 20, increment: 0.5 },
              ],
            };
          function f(e, n) {
            var t =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 1,
              r = parseFloat(e);
            return (
              isNaN(r) && (r = ""),
              {
                low: "" === r ? "" : l(e, a, t),
                med: "" === r ? "" : l(e, u, t),
                high: "" === r ? "" : l(e, c, t),
                auto: "" === r ? "" : l(e, d, t),
                dense: "" === r ? "" : l(e, s, t),
                custom: "" === r ? "" : l(e, n, t),
              }
            );
          }
          function l(e, n, t) {
            var a = "";
            if (!g(n)) return a;
            var u = n.buckets.reduce(
                function (e, n) {
                  return e.max > n.max ? e : n;
                },
                { max: 0 }
              ),
              c = 0,
              s = (0, r.sE)(n.buckets, function (n) {
                if (e > u.max * t) {
                  var r = n.precision;
                  void 0 === r && (r = 2), (a = (n.max * t).toFixed(r));
                } else {
                  if (e <= n.max * t && e >= c * t) return (n.min = c), n;
                  c = n.max;
                }
              });
            return (
              s &&
                (a = (function (e, n, t) {
                  var r = void 0 !== n.precision ? n.precision : 2,
                    a = n.increment * t,
                    u = n.min * t,
                    c = Math.floor,
                    s = o.vc.getConfig("cpmRoundingFunction");
                  "function" == typeof s && (c = s);
                  var d,
                    f,
                    l = Math.pow(10, r + 2),
                    g = (e * l - u * l) / (a * l);
                  try {
                    d = c(g) * a + u;
                  } catch (e) {
                    f = !0;
                  }
                  return (
                    (f || "number" != typeof d) &&
                      ((0, i.yN)("Invalid rounding function passed in config"),
                      (d = Math.floor(g) * a + u)),
                    (d = Number(d.toFixed(10))).toFixed(r)
                  );
                })(e, s, t)),
              a
            );
          }
          function g(e) {
            if ((0, i.xb)(e) || !e.buckets || !Array.isArray(e.buckets))
              return !1;
            var n = !0;
            return (
              e.buckets.forEach(function (e) {
                (e.max && e.increment) || (n = !1);
              }),
              n
            );
          }
        },
        2021: function (e, n, t) {
          t.d(n, {
            S1: function () {
              return h;
            },
            j8: function () {
              return m;
            },
            on: function () {
              return v;
            },
            vw: function () {
              return b;
            },
          });
          var r = t(4358),
            i = t(5644),
            o = t(613),
            a = t(3193),
            u = "eventHistoryTTL",
            c = null,
            s = (0, o.Z)({
              monotonic: !0,
              ttl: function () {
                return c;
              },
            });
          a.vc.getConfig(u, function (e) {
            var n,
              t = c;
            (e = null === (n = e) || void 0 === n ? void 0 : n[u]),
              t !== (c = "number" == typeof e ? 1e3 * e : null) && s.refresh();
          });
          var d = Array.prototype.slice,
            f = Array.prototype.push,
            l = Object.values(i.FP),
            g = i.aI,
            p = (function () {
              var e = {},
                n = {};
              function t(n, t) {
                r.ji("Emitting event for: " + n);
                var i = t[0] || {},
                  o = i[g[n]],
                  a = e[n] || { que: [] },
                  u = Object.keys(a),
                  c = [];
                s.add({ eventType: n, args: i, id: o, elapsedTime: r.bd() }),
                  o && u.includes(o) && f.apply(c, a[o].que),
                  f.apply(c, a.que),
                  (c || []).forEach(function (e) {
                    if (e)
                      try {
                        e.apply(null, t);
                      } catch (e) {
                        r.H("Error executing handler:", "events.js", e, n);
                      }
                  });
              }
              function i(e) {
                return l.includes(e);
              }
              return (
                (n.has = i),
                (n.on = function (n, t, o) {
                  if (i(n)) {
                    var a = e[n] || { que: [] };
                    o
                      ? ((a[o] = a[o] || { que: [] }), a[o].que.push(t))
                      : a.que.push(t),
                      (e[n] = a);
                  } else
                    r.H("Wrong event name : " + n + " Valid event names :" + l);
                }),
                (n.emit = function (e) {
                  var n = d.call(arguments, 1);
                  t(e, n);
                }),
                (n.off = function (n, t, i) {
                  var o = e[n];
                  r.xb(o) ||
                    (r.xb(o.que) && r.xb(o[i])) ||
                    (i && (r.xb(o[i]) || r.xb(o[i].que))) ||
                    (i
                      ? (o[i].que || []).forEach(function (e) {
                          var n = o[i].que;
                          e === t && n.splice(n.indexOf(e), 1);
                        })
                      : (o.que || []).forEach(function (e) {
                          var n = o.que;
                          e === t && n.splice(n.indexOf(e), 1);
                        }),
                    (e[n] = o));
                }),
                (n.get = function () {
                  return e;
                }),
                (n.addEvents = function (e) {
                  l = l.concat(e);
                }),
                (n.getEvents = function () {
                  return s.toArray().map(function (e) {
                    return Object.assign({}, e);
                  });
                }),
                n
              );
            })();
          r.u2(p.emit.bind(p));
          var v = p.on,
            h = p.off,
            b = (p.get, p.getEvents),
            m = p.emit;
          p.addEvents, p.has;
        },
        2797: function (e, n, t) {
          t.d(n, {
            IF: function () {
              return s;
            },
            v5: function () {
              return c;
            },
            z3: function () {
              return a;
            },
          });
          var r = t(1432),
            i = t.n(r),
            o = t(8792),
            a = i()({ ready: i().SYNC | i().ASYNC | i().QUEUE }),
            u = (0, o.P)();
          (a.ready = (function () {
            var e = a.ready;
            return function () {
              try {
                return e.apply(a, arguments);
              } finally {
                u.resolve();
              }
            };
          })()),
            u.promise;
          var c = a.get;
          function s(e, n) {
            return (
              Object.defineProperties(
                n,
                Object.fromEntries(
                  ["before", "after", "getHooks", "removeAll"].map(function (
                    n
                  ) {
                    return [
                      n,
                      {
                        get: function () {
                          return e[n];
                        },
                      },
                    ];
                  })
                )
              ),
              n
            );
          }
        },
        4679: function (e, n, t) {
          t.d(n, {
            Oh: function () {
              return i;
            },
            pX: function () {
              return r;
            },
          });
          var r = "video",
            i = "adpod";
        },
        59: function (e, n, t) {
          t.d(n, {
            Fb: function () {
              return j;
            },
            JL: function () {
              return x;
            },
            Sg: function () {
              return v;
            },
            Ur: function () {
              return U;
            },
            e6: function () {
              return S;
            },
            eK: function () {
              return D;
            },
            r4: function () {
              return I;
            },
            xc: function () {
              return h;
            },
            zq: function () {
              return H;
            },
          });
          var r = t(9062),
            i = t(3324),
            o = t(4942),
            a = t(265),
            u = t(4358),
            c = t(4614),
            s = t(1176),
            d = t(5644);
          function f(e, n) {
            var t =
              ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
              e["@@iterator"];
            if (!t) {
              if (
                Array.isArray(e) ||
                (t = (function (e, n) {
                  if (e) {
                    if ("string" == typeof e) return l(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    return (
                      "Object" === t &&
                        e.constructor &&
                        (t = e.constructor.name),
                      "Map" === t || "Set" === t
                        ? Array.from(e)
                        : "Arguments" === t ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                        ? l(e, n)
                        : void 0
                    );
                  }
                })(e)) ||
                (n && e && "number" == typeof e.length)
              ) {
                t && (e = t);
                var r = 0,
                  i = function () {};
                return {
                  s: i,
                  n: function () {
                    return r >= e.length
                      ? { done: !0 }
                      : { done: !1, value: e[r++] };
                  },
                  e: function (e) {
                    throw e;
                  },
                  f: i,
                };
              }
              throw new TypeError(
                "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            }
            var o,
              a = !0,
              u = !1;
            return {
              s: function () {
                t = t.call(e);
              },
              n: function () {
                var e = t.next();
                return (a = e.done), e;
              },
              e: function (e) {
                (u = !0), (o = e);
              },
              f: function () {
                try {
                  a || null == t.return || t.return();
                } finally {
                  if (u) throw o;
                }
              },
            };
          }
          function l(e, n) {
            (null == n || n > e.length) && (n = e.length);
            for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
            return r;
          }
          function g(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n &&
                (r = r.filter(function (n) {
                  return Object.getOwnPropertyDescriptor(e, n).enumerable;
                })),
                t.push.apply(t, r);
            }
            return t;
          }
          function p(e) {
            for (var n = 1; n < arguments.length; n++) {
              var t = null != arguments[n] ? arguments[n] : {};
              n % 2
                ? g(Object(t), !0).forEach(function (n) {
                    (0, o.Z)(e, n, t[n]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(t)
                  )
                : g(Object(t)).forEach(function (n) {
                    Object.defineProperty(
                      e,
                      n,
                      Object.getOwnPropertyDescriptor(t, n)
                    );
                  });
            }
            return e;
          }
          var v = [],
            h = Object.keys(d.FY).map(function (e) {
              return d.FY[e];
            }),
            b = {
              image: {
                ortb: {
                  ver: "1.2",
                  assets: [
                    {
                      required: 1,
                      id: 1,
                      img: { type: 3, wmin: 100, hmin: 100 },
                    },
                    { required: 1, id: 2, title: { len: 140 } },
                    { required: 1, id: 3, data: { type: 1 } },
                    { required: 0, id: 4, data: { type: 2 } },
                    {
                      required: 0,
                      id: 5,
                      img: { type: 1, wmin: 20, hmin: 20 },
                    },
                  ],
                },
                image: { required: !0 },
                title: { required: !0 },
                sponsoredBy: { required: !0 },
                clickUrl: { required: !0 },
                body: { required: !1 },
                icon: { required: !1 },
              },
            },
            m = d.s$,
            y = d.oF,
            w = d.V1,
            C = d.zA,
            A = d.FY,
            T = M(w),
            E = M(m),
            O = { img: 1, js: 2, 1: "img", 2: "js" };
          function k(e) {
            if (
              (e &&
                e.type &&
                (function (e) {
                  return (
                    !(!e || !(0, c.q9)(Object.keys(b), e)) ||
                    ((0, u.H)("".concat(e, " nativeParam is not supported")),
                    !1)
                  );
                })(e.type) &&
                (e = b[e.type]),
              !e ||
                !e.ortb ||
                (function (e) {
                  var n = e.assets;
                  if (!Array.isArray(n) || 0 === n.length)
                    return (
                      (0, u.H)(
                        "assets in mediaTypes.native.ortb is not an array, or it's empty. Assets: ",
                        n
                      ),
                      !1
                    );
                  var t = n.map(function (e) {
                    return e.id;
                  });
                  return n.length !== new Set(t).size ||
                    t.some(function (e) {
                      return e !== parseInt(e, 10);
                    })
                    ? ((0, u.H)(
                        "each asset object must have 'id' property, it must be unique and it must be an integer"
                      ),
                      !1)
                    : e.hasOwnProperty("eventtrackers") &&
                      !Array.isArray(e.eventtrackers)
                    ? ((0, u.H)(
                        "ortb.eventtrackers is not an array. Eventtrackers: ",
                        e.eventtrackers
                      ),
                      !1)
                    : n.every(function (e) {
                        return (function (e) {
                          if (!(0, u.PO)(e))
                            return (
                              (0, u.H)(
                                "asset must be an object. Provided asset: ",
                                e
                              ),
                              !1
                            );
                          if (e.img) {
                            if (!(0, u.hj)(e.img.w) && !(0, u.hj)(e.img.wmin))
                              return (
                                (0, u.H)(
                                  "for img asset there must be 'w' or 'wmin' property"
                                ),
                                !1
                              );
                            if (!(0, u.hj)(e.img.h) && !(0, u.hj)(e.img.hmin))
                              return (
                                (0, u.H)(
                                  "for img asset there must be 'h' or 'hmin' property"
                                ),
                                !1
                              );
                          } else if (e.title) {
                            if (!(0, u.hj)(e.title.len))
                              return (
                                (0, u.H)(
                                  "for title asset there must be 'len' property defined"
                                ),
                                !1
                              );
                          } else if (e.data) {
                            if (!(0, u.hj)(e.data.type))
                              return (
                                (0, u.H)(
                                  "for data asset 'type' property must be a number"
                                ),
                                !1
                              );
                          } else if (
                            e.video &&
                            !(
                              Array.isArray(e.video.mimes) &&
                              Array.isArray(e.video.protocols) &&
                              (0, u.hj)(e.video.minduration) &&
                              (0, u.hj)(e.video.maxduration)
                            )
                          )
                            return (
                              (0, u.H)(
                                "video asset is not properly configured"
                              ),
                              !1
                            );
                          return !0;
                        })(e);
                      });
                })(e.ortb))
            )
              return e;
          }
          function j(e) {
            e.forEach(function (e) {
              var n = e.nativeParams || (0, a.Z)(e, "mediaTypes.native");
              n && (e.nativeParams = k(n)),
                e.nativeParams &&
                  (e.nativeOrtbRequest =
                    e.nativeParams.ortb ||
                    (function (e) {
                      if (e || (0, u.PO)(e)) {
                        var n = { ver: "1.2", assets: [] };
                        for (var t in e)
                          if (!C.includes(t))
                            if (A.hasOwnProperty(t))
                              if ("privacyLink" !== t) {
                                var r = e[t],
                                  i = 0;
                                r.required &&
                                  (0, u.jn)(r.required) &&
                                  (i = Number(r.required));
                                var o = { id: n.assets.length, required: i };
                                if (t in w)
                                  (o.data = { type: m[w[t]] }),
                                    r.len && (o.data.len = r.len);
                                else if ("icon" === t || "image" === t) {
                                  if (
                                    ((o.img = {
                                      type: "icon" === t ? y.ICON : y.MAIN,
                                    }),
                                    r.aspect_ratios)
                                  )
                                    if ((0, u.kJ)(r.aspect_ratios))
                                      if (r.aspect_ratios.length) {
                                        var a = r.aspect_ratios[0],
                                          c = a.min_width,
                                          s = a.min_height;
                                        (0, u.U)(c) && (0, u.U)(s)
                                          ? ((o.img.wmin = c), (o.img.hmin = s))
                                          : (0, u.H)(
                                              "image.aspect_ratios min_width or min_height are invalid: ",
                                              c,
                                              s
                                            );
                                        var d = r.aspect_ratios
                                          .filter(function (e) {
                                            return (
                                              e.ratio_width && e.ratio_height
                                            );
                                          })
                                          .map(function (e) {
                                            return ""
                                              .concat(e.ratio_width, ":")
                                              .concat(e.ratio_height);
                                          });
                                        d.length > 0 &&
                                          (o.img.ext = { aspectratios: d });
                                      } else
                                        (0, u.H)(
                                          "image.aspect_ratios was passed, but it's empty:",
                                          r.aspect_ratios
                                        );
                                    else
                                      (0, u.H)(
                                        "image.aspect_ratios was passed, but it's not a an array:",
                                        r.aspect_ratios
                                      );
                                  r.sizes &&
                                    (2 === r.sizes.length &&
                                    (0, u.U)(r.sizes[0]) &&
                                    (0, u.U)(r.sizes[1])
                                      ? ((o.img.w = r.sizes[0]),
                                        (o.img.h = r.sizes[1]),
                                        delete o.img.hmin,
                                        delete o.img.wmin)
                                      : (0, u.H)(
                                          "image.sizes was passed, but its value is not an array of integers:",
                                          r.sizes
                                        ));
                                } else
                                  "title" === t
                                    ? (o.title = { len: r.len || 140 })
                                    : "ext" === t &&
                                      ((o.ext = r), delete o.required);
                                n.assets.push(o);
                              } else n.privacy = 1;
                            else
                              (0, u.H)(
                                "Unrecognized native asset code: ".concat(
                                  t,
                                  ". Asset will be ignored."
                                )
                              );
                        return n;
                      }
                      (0, u.H)(
                        "Native assets object is empty or not an object: ",
                        e
                      );
                    })(e.nativeParams));
            });
          }
          function I(e) {
            var n,
              t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              r = t.index,
              i = void 0 === r ? s.K.index : r,
              o = i.getAdUnit(e);
            if (!o) return !1;
            var a = o.nativeOrtbRequest,
              u =
                (null === (n = e.native) || void 0 === n ? void 0 : n.ortb) ||
                q(e.native, a);
            return B(u, a);
          }
          function B(e, n) {
            if (!(0, a.Z)(e, "link.url"))
              return (
                (0, u.H)(
                  "native response doesn't have 'link' property. Ortb response: ",
                  e
                ),
                !1
              );
            var t = n.assets
                .filter(function (e) {
                  return 1 === e.required;
                })
                .map(function (e) {
                  return e.id;
                }),
              r = e.assets.map(function (e) {
                return e.id;
              }),
              i = t.every(function (e) {
                return (0, c.q9)(r, e);
              });
            return (
              i ||
                (0, u.H)(
                  "didn't receive a bid with all required assets. Required ids: "
                    .concat(t, ", but received ids in response: ")
                    .concat(r)
                ),
              i
            );
          }
          function S(e, n) {
            var t = n.native.ortb || N(n.native);
            return (
              "click" === e.action
                ? (function (e) {
                    var n =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : null,
                      t = (
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : {}
                      ).fetchURL,
                      r = void 0 === t ? u.hq : t;
                    if (n) {
                      var i,
                        o = (e.assets || [])
                          .filter(function (e) {
                            return e.link;
                          })
                          .reduce(function (e, n) {
                            return (e[n.id] = n.link), e;
                          }, {}),
                        a =
                          (null === (i = e.link) || void 0 === i
                            ? void 0
                            : i.clicktrackers) || [],
                        c = o[n],
                        s = a;
                      c && (s = c.clicktrackers || []),
                        s.forEach(function (e) {
                          return r(e);
                        });
                    } else {
                      var d;
                      (
                        (null === (d = e.link) || void 0 === d
                          ? void 0
                          : d.clicktrackers) || []
                      ).forEach(function (e) {
                        return r(e);
                      });
                    }
                  })(t, null == e ? void 0 : e.assetId)
                : (function (e) {
                    var n =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {},
                      t = n.runMarkup,
                      r =
                        void 0 === t
                          ? function (e) {
                              return (0, u.$8)(e);
                            }
                          : t,
                      i = n.fetchURL,
                      o = void 0 === i ? u.hq : i,
                      a = (e.eventtrackers || [])
                        .filter(function (e) {
                          return 1 === e.event;
                        })
                        .reduce(
                          function (e, n) {
                            return (
                              O.hasOwnProperty(n.method) &&
                                e[O[n.method]].push(n.url),
                              e
                            );
                          },
                          { img: [], js: [] }
                        ),
                      c = a.img,
                      s = a.js;
                    e.imptrackers && (c = c.concat(e.imptrackers)),
                      c.forEach(function (e) {
                        return o(e);
                      }),
                      (s = s.map(function (e) {
                        return '<script async src="'.concat(e, '"></script>');
                      })),
                      e.jstracker && (s = s.concat([e.jstracker])),
                      s.length && r(s.join("\n"));
                  })(t),
              e.action
            );
          }
          function U(e) {
            var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              t = n.index,
              r = void 0 === t ? s.K.index : t,
              i = {},
              o = r.getAdUnit(e);
            (0, a.Z)(o, "nativeParams.rendererUrl")
              ? (e.native.rendererUrl = Z(o.nativeParams.rendererUrl))
              : (0, a.Z)(o, "nativeParams.adTemplate") &&
                (e.native.adTemplate = Z(o.nativeParams.adTemplate));
            var u = !1 !== (0, a.Z)(o, "nativeParams.sendTargetingKeys"),
              c = _(o),
              d = p(p({}, e.native), e.native.ext);
            return (
              delete d.ext,
              Object.keys(d).forEach(function (n) {
                var t = c[n],
                  r = Z(e.native[n]) || Z((0, a.Z)(e, "native.ext.".concat(n)));
                if ("adTemplate" !== n && t && r) {
                  var s = (0, a.Z)(o, "nativeParams.".concat(n, ".sendId"));
                  "boolean" != typeof s &&
                    (s = (0, a.Z)(o, "nativeParams.ext.".concat(n, ".sendId"))),
                    s && (r = "".concat(t, ":").concat(e.adId));
                  var d = (0, a.Z)(
                    o,
                    "nativeParams.".concat(n, ".sendTargetingKeys")
                  );
                  "boolean" != typeof d &&
                    (d = (0, a.Z)(
                      o,
                      "nativeParams.ext.".concat(n, ".sendTargetingKeys")
                    )),
                    ("boolean" == typeof d ? d : u) && (i[t] = r);
                }
              }),
              i
            );
          }
          function R(e, n, t) {
            var r,
              i,
              o =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : {},
              a = o.index,
              u = void 0 === a ? s.K.index : a,
              c = { message: "assetResponse", adId: e.adId },
              f = u.getAdUnit(n),
              l = n.native;
            return (
              n.native.ortb
                ? (c.ortb = n.native.ortb)
                : null !== (r = f.mediaTypes) &&
                  void 0 !== r &&
                  null !== (i = r.native) &&
                  void 0 !== i &&
                  i.ortb &&
                  (c.ortb = q(n.native, f.nativeOrtbRequest)),
              (c.assets = []),
              (null == t ? Object.keys(l) : t).forEach(function (e) {
                if ("adTemplate" === e && l[e]) c.adTemplate = Z(l[e]);
                else if ("rendererUrl" === e && l[e]) c.rendererUrl = Z(l[e]);
                else if ("ext" === e)
                  Object.keys(l[e]).forEach(function (n) {
                    if (l[e][n]) {
                      var t = Z(l[e][n]);
                      c.assets.push({ key: n, value: t });
                    }
                  });
                else if (l[e] && d.FY.hasOwnProperty(e)) {
                  var n = Z(l[e]);
                  c.assets.push({ key: e, value: n });
                }
              }),
              c
            );
          }
          var P = Object.fromEntries(
            Object.entries(d.FY).map(function (e) {
              var n = (0, i.Z)(e, 2),
                t = n[0];
              return [n[1], t];
            })
          );
          function D(e, n) {
            var t = e.assets.map(function (e) {
              return P[e];
            });
            return R(e, n, t);
          }
          function x(e, n) {
            return R(e, n, null);
          }
          function Z(e) {
            return (null == e ? void 0 : e.url) || e;
          }
          function _(e) {
            var n = {};
            return (
              (0, a.Z)(e, "nativeParams.ext") &&
                Object.keys(e.nativeParams.ext).forEach(function (e) {
                  n[e] = "hb_native_".concat(e);
                }),
              p(p({}, d.FY), n)
            );
          }
          function N(e) {
            var n = { link: {}, eventtrackers: [] };
            return (
              Object.entries(e).forEach(function (e) {
                var t = (0, i.Z)(e, 2),
                  r = t[0],
                  o = t[1];
                switch (r) {
                  case "clickUrl":
                    n.link.url = o;
                    break;
                  case "clickTrackers":
                    n.link.clicktrackers = Array.isArray(o) ? o : [o];
                    break;
                  case "impressionTrackers":
                    (Array.isArray(o) ? o : [o]).forEach(function (e) {
                      n.eventtrackers.push({ event: 1, method: O.img, url: e });
                    });
                    break;
                  case "javascriptTrackers":
                    n.jstracker = Array.isArray(o) ? o.join("") : o;
                    break;
                  case "privacyLink":
                    n.privacy = o;
                }
              }),
              n
            );
          }
          function q(e, n) {
            var t = p(p({}, N(e)), {}, { assets: [] });
            function r(e, r) {
              var i = n.assets.find(e);
              null != i && (r((i = (0, u.I8)(i))), t.assets.push(i));
            }
            return (
              Object.keys(e)
                .filter(function (n) {
                  return !!e[n];
                })
                .forEach(function (n) {
                  var t = Z(e[n]);
                  switch (n) {
                    case "title":
                      r(
                        function (e) {
                          return null != e.title;
                        },
                        function (e) {
                          e.title = { text: t };
                        }
                      );
                      break;
                    case "image":
                    case "icon":
                      var i = "image" === n ? y.MAIN : y.ICON;
                      r(
                        function (e) {
                          return null != e.img && e.img.type === i;
                        },
                        function (e) {
                          e.img = { url: t };
                        }
                      );
                      break;
                    default:
                      n in w &&
                        r(
                          function (e) {
                            return null != e.data && e.data.type === m[w[n]];
                          },
                          function (e) {
                            e.data = { value: t };
                          }
                        );
                  }
                }),
              t
            );
          }
          function H(e, n) {
            var t = {},
              i = (null == n ? void 0 : n.assets) || [];
            (t.clickUrl = e.link.url), (t.privacyLink = e.privacy);
            var o,
              a = f((null == e ? void 0 : e.assets) || []);
            try {
              var u = function () {
                var e = o.value,
                  n = i.find(function (n) {
                    return e.id === n.id;
                  });
                e.title
                  ? (t.title = e.title.text)
                  : e.img
                  ? (t[n.img.type === y.MAIN ? "image" : "icon"] = {
                      url: e.img.url,
                      width: e.img.w,
                      height: e.img.h,
                    })
                  : e.data && (t[T[E[n.data.type]]] = e.data.value);
              };
              for (a.s(); !(o = a.n()).done; ) u();
            } catch (e) {
              a.e(e);
            } finally {
              a.f();
            }
            t.impressionTrackers = [];
            var c,
              s = [];
            e.imptrackers &&
              (c = t.impressionTrackers).push.apply(c, (0, r.Z)(e.imptrackers));
            var d,
              l = f((null == e ? void 0 : e.eventtrackers) || []);
            try {
              for (l.s(); !(d = l.n()).done; ) {
                var g = d.value;
                1 === g.event &&
                  g.method === O.img &&
                  t.impressionTrackers.push(g.url),
                  1 === g.event && g.method === O.js && s.push(g.url);
              }
            } catch (e) {
              l.e(e);
            } finally {
              l.f();
            }
            return (
              (s = s.map(function (e) {
                return '<script async src="'.concat(e, '"></script>');
              })),
              null != e && e.jstracker && s.push(e.jstracker),
              s.length && (t.javascriptTrackers = s.join("\n")),
              t
            );
          }
          function M(e) {
            var n = {};
            for (var t in e) n[e[t]] = t;
            return n;
          }
        },
        4614: function (e, n, t) {
          function r(e, n, t) {
            return (e && e.includes(n, t)) || !1;
          }
          function i() {
            return Array.from.apply(Array, arguments);
          }
          function o(e, n, t) {
            return e && e.find(n, t);
          }
          t.d(n, {
            Oc: function () {
              return i;
            },
            q9: function () {
              return r;
            },
            sE: function () {
              return o;
            },
          });
        },
        2521: function (e, n, t) {
          var r = t(3324),
            i = t(4942),
            o = t(8640),
            a = t(4358),
            u = t(265);
          function c(e, n, t) {
            n.split && (n = n.split("."));
            for (
              var r, i, o = 0, a = n.length, u = e;
              o < a &&
              "__proto__" !== (i = n[o++]) &&
              "constructor" !== i &&
              "prototype" !== i;

            )
              u = u[i] =
                o === a
                  ? t
                  : typeof (r = u[i]) == typeof n
                  ? r
                  : 0 * n[o] != 0 || ~("" + n[o]).indexOf(".")
                  ? {}
                  : [];
          }
          var s,
            d = t(2021),
            f = t(59),
            l = t(5644),
            g = t(1176),
            p = t(4614),
            v = t(3667),
            h = t(7007),
            b = l.FP.BID_WON,
            m = new WeakSet(),
            y =
              ((s = {}),
              (0, i.Z)(s, h.ZR, function (e, n, t) {
                (0, v.XD)(
                  function (n) {
                    C(t), e(Object.assign({ message: h.VX }, n));
                  },
                  { options: n.options, adId: n.adId, bidResponse: t }
                );
              }),
              (0, i.Z)(s, h.G, function (e, n, t) {
                if (null != t)
                  if (t.status === l.UE.fe)
                    switch (n.event) {
                      case l.FP.AD_RENDER_FAILED:
                        (0, v.Pm)({
                          bid: t,
                          id: n.adId,
                          reason: n.info.reason,
                          message: n.info.message,
                        });
                        break;
                      case l.FP.AD_RENDER_SUCCEEDED:
                        (0, v.bL)({ doc: null, bid: t, id: n.adId });
                        break;
                      default:
                        (0, a.H)(
                          "Received x-origin event request for unsupported event: '"
                            .concat(n.event, "' (adId: '")
                            .concat(n.adId, "')")
                        );
                    }
                  else
                    (0, a.yN)(
                      "Received x-origin event request without corresponding render request for ad '".concat(
                        n.adId,
                        "'"
                      )
                    );
                else
                  (0, a.H)(
                    "Cannot find ad '".concat(
                      n.adId,
                      "' for x-origin event request"
                    )
                  );
              }),
              s);
          function w(e) {
            var n = e.message ? "message" : "data",
              t = {};
            try {
              t = JSON.parse(e[n]);
            } catch (e) {
              return;
            }
            if (t && t.adId && t.message) {
              var r = (0, p.sE)(g.K.getBidsReceived(), function (e) {
                return e.adId === t.adId;
              });
              y.hasOwnProperty(t.message) &&
                y[t.message](
                  (function (e) {
                    return null == e.origin && 0 === e.ports.length
                      ? function () {
                          var e =
                            "Cannot post message to a frame with null origin. Please update creatives to use MessageChannel, see https://github.com/prebid/Prebid.js/issues/7870";
                          throw ((0, a.H)(e), new Error(e));
                        }
                      : e.ports.length > 0
                      ? function (n) {
                          e.ports[0].postMessage(JSON.stringify(n));
                        }
                      : function (n) {
                          e.source.postMessage(JSON.stringify(n), e.origin);
                        };
                  })(e),
                  t,
                  r
                );
            }
          }
          function C(e) {
            var n = e.adId,
              t = e.adUnitCode,
              r = e.width,
              i = e.height;
            ["div", "iframe"].forEach(function (e) {
              var o = (function (e) {
                var r = (function (e, n) {
                    return (0, a.T9)()
                      ? (function (e) {
                          var n = (0, p.sE)(
                            window.googletag.pubads().getSlots(),
                            function (n) {
                              return (0, p.sE)(
                                n.getTargetingKeys(),
                                function (t) {
                                  return (0, p.q9)(n.getTargeting(t), e);
                                }
                              );
                            }
                          );
                          return n ? n.getSlotElementId() : null;
                        })(e)
                      : (0, a.X4)()
                      ? (function (e) {
                          var n = window.apntag.getTag(e);
                          return n && n.targetId;
                        })(n)
                      : n;
                  })(n, t),
                  i = document.getElementById(r);
                return i && i.querySelector(e);
              })(e + ':not([style*="display: none"])');
              if (o) {
                var u = o.style;
                (u.width = r ? r + "px" : "100%"), (u.height = i + "px");
              } else (0, a.yN)("Unable to locate matching page element for adUnitCode ".concat(t, ".  Can't resize it to ad's dimensions.  Please review setup."));
            });
          }
          Object.assign(
            y,
            (0, i.Z)({}, h.u7, function (e, n, t) {
              if (null != t)
                switch (
                  (m.has(t) || (m.add(t), g.K.addWinningBid(t), d.j8(b, t)),
                  n.action)
                ) {
                  case "assetRequest":
                    e((0, f.eK)(n, t));
                    break;
                  case "allAssetRequest":
                    e((0, f.JL)(n, t));
                    break;
                  case "resizeNativeHeight":
                    (t.height = n.height), (t.width = n.width), C(t);
                    break;
                  default:
                    (0, f.e6)(n, t);
                }
              else
                (0, a.H)(
                  "Cannot find ad for x-origin event request: '".concat(
                    n.adId,
                    "'"
                  )
                );
            })
          );
          var A = t(1974),
            T = t(3193),
            E = t(9062),
            O = t(4679),
            k = t(2797),
            j = t(5975);
          function I(e, n) {
            return e === n ? 0 : e < n ? -1 : 1;
          }
          function B() {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : function (e) {
                    return e;
                  };
            return function (n, t) {
              return I(e(n), e(t));
            };
          }
          function S() {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : I;
            return function (n, t) {
              return -e(n, t) || 0;
            };
          }
          function U() {
            for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
              n[t] = arguments[t];
            return function (e, t) {
              for (var r = 0, i = n; r < i.length; r++) {
                var o = (0, i[r])(e, t);
                if (0 !== o) return o;
              }
              return 0;
            };
          }
          function R() {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : I;
            return function (n, t) {
              return e(t, n) < 0 ? t : n;
            };
          }
          function P() {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : I;
            return R(S(e));
          }
          var D = B(function (e) {
              return e.cpm;
            }),
            x = B(function (e) {
              return e.responseTimestamp;
            }),
            Z = P(
              U(
                D,
                S(
                  B(function (e) {
                    return e.timeToRespond;
                  })
                )
              )
            ),
            _ = P(U(D, S(x))),
            N = (P(U(D, x)), t(8833)),
            q = [],
            H = "targetingControls.allowTargetingKeys",
            M = "targetingControls.addTargetingKeys",
            F = 'Only one of "'.concat(H, '" or "').concat(M, '" can be set'),
            W = Object.keys(l.TD).map(function (e) {
              return l.TD[e];
            }),
            L = {
              isActualBid: function (e) {
                return e.getStatusCode() === l.Q_.Q;
              },
              isBidNotExpired: function (e) {
                return e.responseTimestamp + 1e3 * (0, N.N)(e) > (0, a.AB)();
              },
              isUnusedBid: function (e) {
                return (
                  e &&
                  ((e.status && !(0, p.q9)([l.UE.fe], e.status)) || !e.status)
                );
              },
            };
          function z(e) {
            return !Object.values(L).some(function (n) {
              return !n(e);
            });
          }
          var K = (0, k.z3)("sync", function (e, n) {
            var t =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 0,
              r =
                arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (!r) {
              var i = [],
                o = T.vc.getConfig("sendBidsControl.dealPrioritization"),
                u = (0, a.vM)(e, "adUnitCode");
              return (
                Object.keys(u).forEach(function (e) {
                  var r = [],
                    c = (0, a.vM)(u[e], "bidderCode");
                  Object.keys(c).forEach(function (e) {
                    return r.push(c[e].reduce(n));
                  }),
                    t > 0
                      ? ((r = o
                          ? r.sort(G(!0))
                          : r.sort(function (e, n) {
                              return n.cpm - e.cpm;
                            })),
                        i.push.apply(i, (0, E.Z)(r.slice(0, t))))
                      : i.push.apply(i, (0, E.Z)(r));
                }),
                i
              );
            }
            return e;
          });
          function G() {
            var e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return function (n, t) {
              return void 0 !== n.adserverTargeting.hb_deal &&
                void 0 === t.adserverTargeting.hb_deal
                ? -1
                : void 0 === n.adserverTargeting.hb_deal &&
                  void 0 !== t.adserverTargeting.hb_deal
                ? 1
                : e
                ? t.cpm - n.cpm
                : t.adserverTargeting.hb_pb - n.adserverTargeting.hb_pb;
            };
          }
          var J = (function (e) {
              var n = {},
                t = {};
              function r(e, n) {
                return (
                  e.adserverTargeting &&
                  n &&
                  (((0, a.kJ)(n) && (0, p.q9)(n, e.adUnitCode)) ||
                    ("string" == typeof n && e.adUnitCode === n))
                );
              }
              function o(e, n) {
                if (
                  !0 === T.vc.getConfig("targetingControls.alwaysIncludeDeals")
                ) {
                  var t = W.concat(f.xc);
                  return K(n, Z)
                    .map(function (n) {
                      if (n.dealId && r(n, e))
                        return (0, i.Z)(
                          {},
                          n.adUnitCode,
                          k(
                            n,
                            t.filter(function (e) {
                              return void 0 !== n.adserverTargeting[e];
                            })
                          )
                        );
                    })
                    .filter(function (e) {
                      return e;
                    });
                }
                return [];
              }
              function c(e, n) {
                var t = Object.assign({}, l.TD, l.FY),
                  r = Object.keys(t),
                  i = {};
                (0, a.PN)(
                  "allowTargetingKeys - allowed keys [ ".concat(
                    n
                      .map(function (e) {
                        return t[e];
                      })
                      .join(", "),
                    " ]"
                  )
                ),
                  e.map(function (e) {
                    var o = Object.keys(e)[0],
                      a = e[o].filter(function (e) {
                        var o = Object.keys(e)[0],
                          a =
                            0 ===
                              r.filter(function (e) {
                                return 0 === o.indexOf(t[e]);
                              }).length ||
                            (0, p.sE)(n, function (e) {
                              var n = t[e];
                              return 0 === o.indexOf(n);
                            });
                        return (i[o] = !a), a;
                      });
                    e[o] = a;
                  });
                var o = Object.keys(i).filter(function (e) {
                  return i[e];
                });
                return (
                  (0, a.PN)(
                    "allowTargetingKeys - removed keys [ ".concat(
                      o.join(", "),
                      " ]"
                    )
                  ),
                  e.filter(function (e) {
                    return e[Object.keys(e)[0]].length > 0;
                  })
                );
              }
              function s(e, n) {
                var t = (0, a.I8)(e);
                return Object.keys(t)
                  .map(function (e) {
                    return { adUnitCode: e, adserverTargeting: t[e] };
                  })
                  .sort(G())
                  .reduce(function (e, r, i, o) {
                    var u,
                      c =
                        ((u = r.adserverTargeting),
                        Object.keys(u).reduce(function (e, n) {
                          return (
                            e +
                            ""
                              .concat(n, "%3d")
                              .concat(encodeURIComponent(u[n]), "%26")
                          );
                        }, ""));
                    i + 1 === o.length && (c = c.slice(0, -3));
                    var s = r.adUnitCode,
                      d = c.length;
                    return (
                      d <= n
                        ? ((n -= d),
                          (0, a.PN)(
                            "AdUnit '"
                              .concat(s, "' auction keys comprised of ")
                              .concat(
                                d,
                                " characters.  Deducted from running threshold; new limit is "
                              )
                              .concat(n),
                            t[s]
                          ),
                          (e[s] = t[s]))
                        : (0, a.yN)(
                            "The following keys for adUnitCode '"
                              .concat(
                                s,
                                "' exceeded the current limit of the 'auctionKeyMaxChars' setting.\nThe key-set size was "
                              )
                              .concat(d, ", the current allotted amount was ")
                              .concat(n, ".\n"),
                            t[s]
                          ),
                      i + 1 === o.length &&
                        0 === Object.keys(e).length &&
                        (0, a.H)(
                          "No auction targeting keys were permitted due to the setting in setConfig(targetingControls.auctionKeyMaxChars).  Please review setup and consider adjusting."
                        ),
                      e
                    );
                  }, {});
              }
              function d(e) {
                var n = e
                  .map(function (e) {
                    return (0, i.Z)(
                      {},
                      Object.keys(e)[0],
                      e[Object.keys(e)[0]]
                        .map(function (e) {
                          return (0,
                          i.Z)({}, Object.keys(e)[0], e[Object.keys(e)[0]].join(","));
                        })
                        .reduce(function (e, n) {
                          return Object.assign(n, e);
                        }, {})
                    );
                  })
                  .reduce(function (e, n) {
                    var t = Object.keys(n)[0];
                    return (e[t] = Object.assign({}, e[t], n[t])), e;
                  }, {});
                return n;
              }
              function g(n) {
                return "string" == typeof n
                  ? [n]
                  : (0, a.kJ)(n)
                  ? n
                  : e.getAdUnitCodes() || [];
              }
              function v() {
                var n = e.getBidsReceived();
                if (T.vc.getConfig("useBidCache")) {
                  var r = T.vc.getConfig("bidCacheFilterFunction");
                  "function" == typeof r &&
                    (n = n.filter(function (e) {
                      return t[e.adUnitCode] === e.auctionId || !!r(e);
                    }));
                } else
                  n = n.filter(function (e) {
                    return t[e.adUnitCode] === e.auctionId;
                  });
                return (
                  (n = n
                    .filter(function (e) {
                      return (0, u.Z)(e, "video.context") !== O.Oh;
                    })
                    .filter(z)).forEach(function (e) {
                    return (e.latestTargetedAuctionId = t[e.adUnitCode]), e;
                  }),
                  K(n, _)
                );
              }
              function h(e, t) {
                var r = n.getWinningBids(e, t),
                  o = b();
                return (
                  (r = r.map(function (e) {
                    return (0, i.Z)(
                      {},
                      e.adUnitCode,
                      Object.keys(e.adserverTargeting)
                        .filter(function (n) {
                          return (
                            void 0 === e.sendStandardTargeting ||
                            e.sendStandardTargeting ||
                            -1 === o.indexOf(n)
                          );
                        })
                        .reduce(function (n, t) {
                          var r = [e.adserverTargeting[t]],
                            o = (0, i.Z)({}, t.substring(0, 20), r);
                          if (t === l.TD.DEAL) {
                            var a = ""
                                .concat(t, "_")
                                .concat(e.bidderCode)
                                .substring(0, 20),
                              u = (0, i.Z)({}, a, r);
                            return [].concat((0, E.Z)(n), [o, u]);
                          }
                          return [].concat((0, E.Z)(n), [o]);
                        }, [])
                    );
                  })),
                  r
                );
              }
              function b() {
                return e
                  .getStandardBidderAdServerTargeting()
                  .map(function (e) {
                    return e.key;
                  })
                  .concat(W)
                  .filter(a.tT);
              }
              function m(e, n, t, r) {
                return (
                  Object.keys(n.adserverTargeting)
                    .filter(y())
                    .forEach(function (t) {
                      e.length &&
                        e
                          .filter(
                            (function (e) {
                              return function (t) {
                                return (
                                  t.adUnitCode === n.adUnitCode &&
                                  t.adserverTargeting[e]
                                );
                              };
                            })(t)
                          )
                          .forEach(
                            (function (e) {
                              return function (t) {
                                (0, a.kJ)(t.adserverTargeting[e]) ||
                                  (t.adserverTargeting[e] = [
                                    t.adserverTargeting[e],
                                  ]),
                                  (t.adserverTargeting[e] = t.adserverTargeting[
                                    e
                                  ]
                                    .concat(n.adserverTargeting[e])
                                    .filter(a.tT)),
                                  delete n.adserverTargeting[e];
                              };
                            })(t)
                          );
                    }),
                  e.push(n),
                  e
                );
              }
              function y() {
                var e = b();
                return (
                  (e = e.concat(f.xc)),
                  function (n) {
                    return -1 === e.indexOf(n);
                  }
                );
              }
              function w(e) {
                return (0, i.Z)(
                  {},
                  e.adUnitCode,
                  Object.keys(e.adserverTargeting)
                    .filter(y())
                    .map(function (n) {
                      return (0,
                      i.Z)({}, n.substring(0, 20), [e.adserverTargeting[n]]);
                    })
                );
              }
              function C(e, n) {
                return n
                  .filter(function (n) {
                    return (0, p.q9)(e, n.adUnitCode);
                  })
                  .map(function (e) {
                    return Object.assign({}, e);
                  })
                  .reduce(m, [])
                  .map(w)
                  .filter(function (e) {
                    return e;
                  });
              }
              function A(e, n) {
                var t = W.concat(f.xc),
                  o = T.vc.getConfig("sendBidsControl.bidLimit"),
                  a = K(n, Z, o),
                  u = T.vc.getConfig(
                    "targetingControls.allowSendAllBidsTargetingKeys"
                  ),
                  c = u
                    ? u.map(function (e) {
                        return l.TD[e];
                      })
                    : t;
                return a
                  .map(function (n) {
                    if (r(n, e))
                      return (0, i.Z)(
                        {},
                        n.adUnitCode,
                        k(
                          n,
                          t.filter(function (e) {
                            return (
                              void 0 !== n.adserverTargeting[e] &&
                              -1 !== c.indexOf(e)
                            );
                          })
                        )
                      );
                  })
                  .filter(function (e) {
                    return e;
                  });
              }
              function k(e, n) {
                return n.map(function (n) {
                  return (0,
                  i.Z)({}, "".concat(n, "_").concat(e.bidderCode).substring(0, 20), [e.adserverTargeting[n]]);
                });
              }
              function I(n) {
                function t(e) {
                  return (0, u.Z)(e, l.k2.xn);
                }
                return e
                  .getAdUnits()
                  .filter(function (e) {
                    return (0, p.q9)(n, e.code) && t(e);
                  })
                  .map(function (e) {
                    return (0, i.Z)(
                      {},
                      e.code,
                      (function (e) {
                        var n = t(e);
                        return Object.keys(n).map(function (e) {
                          return (
                            (0, a.d8)(n[e]) &&
                              (n[e] = n[e].split(",").map(function (e) {
                                return e.trim();
                              })),
                            (0, a.kJ)(n[e]) || (n[e] = [n[e]]),
                            (0, i.Z)({}, e, n[e])
                          );
                        });
                      })(e)
                    );
                  });
              }
              return (
                (n.setLatestAuctionForAdUnit = function (e, n) {
                  t[e] = n;
                }),
                (n.resetPresetTargeting = function (n, t) {
                  if ((0, a.T9)()) {
                    var r = g(n),
                      i = e.getAdUnits().filter(function (e) {
                        return (0, p.q9)(r, e.code);
                      }),
                      o = q.reduce(function (e, n) {
                        return (e[n] = null), e;
                      }, {});
                    window.googletag
                      .pubads()
                      .getSlots()
                      .forEach(function (e) {
                        var n = (0, a.LQ)(t) && t(e);
                        i.forEach(function (t) {
                          (t.code === e.getAdUnitPath() ||
                            t.code === e.getSlotElementId() ||
                            ((0, a.LQ)(n) && n(t.code))) &&
                            e.updateTargetingFromMap(o);
                        });
                      });
                  }
                }),
                (n.resetPresetTargetingAST = function (e) {
                  g(e).forEach(function (e) {
                    var n = window.apntag.getTag(e);
                    if (n && n.keywords) {
                      var t = Object.keys(n.keywords),
                        r = {};
                      t.forEach(function (e) {
                        (0, p.q9)(q, e.toLowerCase()) || (r[e] = n.keywords[e]);
                      }),
                        window.apntag.modifyTag(e, { keywords: r });
                    }
                  });
                }),
                (n.getAllTargeting = function (e) {
                  var n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : v(),
                    t = g(e),
                    r = h(t, n)
                      .concat(C(t, n))
                      .concat(
                        T.vc.getConfig("enableSendAllBids") ? A(t, n) : o(t, n)
                      )
                      .concat(I(t));
                  r.map(function (e) {
                    Object.keys(e).map(function (n) {
                      e[n].map(function (e) {
                        -1 === q.indexOf(Object.keys(e)[0]) &&
                          (q = Object.keys(e).concat(q));
                      });
                    });
                  });
                  var i = Object.keys(Object.assign({}, l.kF, l.FY)),
                    u = T.vc.getConfig(H),
                    f = T.vc.getConfig(M);
                  if (null != f && null != u) throw new Error(F);
                  (u = null != f ? i.concat(f) : u || i),
                    Array.isArray(u) && u.length > 0 && (r = c(r, u)),
                    (r = d(r));
                  var p = T.vc.getConfig(
                    "targetingControls.auctionKeyMaxChars"
                  );
                  return (
                    p &&
                      ((0, a.PN)(
                        "Detected 'targetingControls.auctionKeyMaxChars' was active for this auction; set with a limit of ".concat(
                          p,
                          " characters.  Running checks on auction keys..."
                        )
                      ),
                      (r = s(r, p))),
                    t.forEach(function (e) {
                      r[e] || (r[e] = {});
                    }),
                    r
                  );
                }),
                T.vc.getConfig("targetingControls", function (e) {
                  null != (0, u.Z)(e, H) &&
                    null != (0, u.Z)(e, M) &&
                    (0, a.H)(F);
                }),
                (n.setTargetingForGPT = function (e, n) {
                  window.googletag
                    .pubads()
                    .getSlots()
                    .forEach(function (t) {
                      Object.keys(e)
                        .filter(n ? n(t) : (0, a.zV)(t))
                        .forEach(function (n) {
                          Object.keys(e[n]).forEach(function (t) {
                            var r = e[n][t];
                            "string" == typeof r &&
                              -1 !== r.indexOf(",") &&
                              (r = r.split(",")),
                              (e[n][t] = r);
                          }),
                            (0, a.ji)(
                              "Attempting to set targeting-map for slot: ".concat(
                                t.getSlotElementId(),
                                " with targeting-map:"
                              ),
                              e[n]
                            ),
                            t.updateTargetingFromMap(e[n]);
                        });
                    });
                }),
                (n.getWinningBids = function (e) {
                  var n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : v(),
                    t = g(e);
                  return n
                    .filter(function (e) {
                      return (0, p.q9)(t, e.adUnitCode);
                    })
                    .filter(function (e) {
                      return !0 === j.S.get(e.bidderCode, "allowZeroCpmBids")
                        ? e.cpm >= 0
                        : e.cpm > 0;
                    })
                    .map(function (e) {
                      return e.adUnitCode;
                    })
                    .filter(a.tT)
                    .map(function (e) {
                      return n
                        .filter(function (n) {
                          return n.adUnitCode === e ? n : null;
                        })
                        .reduce(Z);
                    });
                }),
                (n.setTargetingForAst = function (e) {
                  var t = n.getAllTargeting(e);
                  try {
                    n.resetPresetTargetingAST(e);
                  } catch (e) {
                    (0, a.H)("unable to reset targeting for AST" + e);
                  }
                  Object.keys(t).forEach(function (e) {
                    return Object.keys(t[e]).forEach(function (n) {
                      if (
                        ((0, a.ji)(
                          "Attempting to set targeting for targetId: "
                            .concat(e, " key: ")
                            .concat(n, " value: ")
                            .concat(t[e][n])
                        ),
                        (0, a.d8)(t[e][n]) || (0, a.kJ)(t[e][n]))
                      ) {
                        var r = {};
                        n.search(/pt[0-9]/) < 0
                          ? (r[n.toUpperCase()] = t[e][n])
                          : (r[n] = t[e][n]),
                          window.apntag.setKeywords(e, r, {
                            overrideKeyValue: !0,
                          });
                      }
                    });
                  });
                }),
                (n.isApntagDefined = function () {
                  if (window.apntag && (0, a.LQ)(window.apntag.setKeywords))
                    return !0;
                }),
                n
              );
            })(g.K),
            V = t(9626),
            Q = t(5730),
            X = t(8792),
            $ = "__pbjs_debugging__";
          function Y() {
            return (0, o.R)().installedModules.includes("debugging");
          }
          function ee(e) {
            return new X.Z(function (n) {
              (0, Q.B)(e, "debugging", n);
            });
          }
          function ne() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              n = e.alreadyInstalled,
              t = void 0 === n ? Y : n,
              r = e.script,
              i = void 0 === r ? ee : r,
              u = null;
            return function () {
              return (
                null == u &&
                  (u = new X.Z(function (e, n) {
                    setTimeout(function () {
                      if (t()) e();
                      else {
                        var r =
                          "https://cdn.jsdelivr.net/npm/prebid.js@latest/dist/debugging-standalone.js";
                        (0, a.ji)(
                          'Debugging module not installed, loading it from "'.concat(
                            r,
                            '"...'
                          )
                        ),
                          ((0, o.R)()._installDebugging = !0),
                          i(r)
                            .then(function () {
                              (0, o.R)()._installDebugging({
                                DEBUG_KEY: $,
                                hook: k.z3,
                                config: T.vc,
                                createBid: V.m,
                                logger: (0, a.qp)("DEBUG:"),
                              });
                            })
                            .then(e, n);
                      }
                    });
                  })),
                u
              );
            };
          }
          var te = (function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              n = e.load,
              t = void 0 === n ? ne() : n,
              r = e.hook,
              i = void 0 === r ? (0, k.v5)("requestBids") : r,
              o = null,
              a = !1;
            function u(e) {
              for (
                var n = this,
                  t = arguments.length,
                  r = new Array(t > 1 ? t - 1 : 0),
                  i = 1;
                i < t;
                i++
              )
                r[i - 1] = arguments[i];
              return (o || X.Z.resolve()).then(function () {
                return e.apply(n, r);
              });
            }
            function c() {
              a || ((o = t()), i.before(u, 99), (a = !0));
            }
            function s() {
              i.getHooks({ hook: u }).remove(), (a = !1);
            }
            function d() {
              (o = null), s();
            }
            return { enable: c, disable: s, reset: d };
          })();
          te.reset,
            T.vc.getConfig("debugging", function (e) {
              var n = e.debugging;
              null != n && n.enabled ? te.enable() : te.disable();
            });
          var re = t(875),
            ie = t(5164),
            oe = t(2931),
            ae = t(9128),
            ue = t(5102),
            ce = (0, ie.eA)("fpdEnrichment"),
            se = (0, a.HP)(function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : window.location.host;
              if (!ce.cookiesAreEnabled()) return e;
              var n,
                t,
                r = e.split(".");
              if (2 === r.length) return e;
              var i = -2,
                o = "_rdc".concat(Date.now()),
                u = "writeable";
              do {
                n = r.slice(i).join(".");
                var c = new Date((0, a.AB)() + 1e4).toUTCString();
                ce.setCookie(o, u, c, "Lax", n, void 0);
                var s = ce.getCookie(o, void 0);
                s === u
                  ? ((t = !1),
                    ce.setCookie(
                      o,
                      "",
                      "Thu, 01 Jan 1970 00:00:01 GMT",
                      void 0,
                      n,
                      void 0
                    ))
                  : ((i += -1), (t = Math.abs(i) <= r.length));
              } while (t);
              return n;
            }),
            de = [
              "architecture",
              "bitness",
              "model",
              "platformVersion",
              "fullVersionList",
            ],
            fe = ["brands", "mobile", "platform"],
            le = (function () {
              var e,
                n =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : null === (e = window.navigator) || void 0 === e
                    ? void 0
                    : e.userAgentData,
                t =
                  n &&
                  fe.some(function (e) {
                    return void 0 !== n[e];
                  })
                    ? Object.freeze(pe(1, n))
                    : null;
              return function () {
                return t;
              };
            })(),
            ge = (function () {
              var e,
                n =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : null === (e = window.navigator) || void 0 === e
                    ? void 0
                    : e.userAgentData,
                t = {},
                r = new WeakMap();
              return function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : de;
                if (!r.has(e)) {
                  var i = Array.from(e);
                  i.sort(), r.set(e, i.join("|"));
                }
                var o = r.get(e);
                if (!t.hasOwnProperty(o))
                  try {
                    t[o] = n
                      .getHighEntropyValues(e)
                      .then(function (e) {
                        return (0, a.xb)(e) ? null : Object.freeze(pe(2, e));
                      })
                      .catch(function () {
                        return null;
                      });
                  } catch (e) {
                    t[o] = X.Z.resolve(null);
                  }
                return t[o];
              };
            })();
          function pe(e, n) {
            function t(e, n) {
              var t = { brand: e };
              return (
                (0, a.d8)(n) && !(0, a.jH)(n) && (t.version = n.split(".")), t
              );
            }
            var r = { source: e };
            return (
              n.platform && (r.platform = t(n.platform, n.platformVersion)),
              (n.fullVersionList || n.brands) &&
                (r.browsers = (n.fullVersionList || n.brands).map(function (e) {
                  return t(e.brand, e.version);
                })),
              void 0 !== n.mobile && (r.mobile = n.mobile ? 1 : 0),
              ["model", "bitness", "architecture"].forEach(function (e) {
                var t = n[e];
                (0, a.d8)(t) && (r[e] = t);
              }),
              r
            );
          }
          var ve = ["dooh", "app", "site"];
          function he(e, n) {
            return null != e[n] && Object.keys(e[n]).length > 0;
          }
          var be = t(571),
            me = t(286),
            ye = t(4947),
            we = t(9633);
          function Ce(e, n) {
            (null == n || n > e.length) && (n = e.length);
            for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
            return r;
          }
          var Ae = {
              getRefererInfo: ue.nH,
              findRootDomain: se,
              getWindowTop: a.Zy,
              getWindowSelf: a.e7,
              getHighEntropySUA: ge,
              getLowEntropySUA: le,
            },
            Te = function (e) {
              return (
                ve.reduce(function (n, t) {
                  return (
                    he(e, t) &&
                      (null != n
                        ? ((0, a.yN)(
                            ""
                              .concat("FPD", " specifies both '")
                              .concat(n, "' and '")
                              .concat(t, "'; dropping the latter.")
                          ),
                          delete e[t])
                        : (n = t)),
                    n
                  );
                }, null),
                e
              );
            },
            Ee = (0, k.z3)("sync", function (e) {
              var n,
                t = [
                  e,
                  ((n = T.vc.getConfig("firstPartyData.uaHints")),
                  Array.isArray(n) && 0 !== n.length
                    ? Ae.getHighEntropySUA(n)
                    : X.Z.resolve(Ae.getLowEntropySUA())).catch(function () {
                    return null;
                  }),
                  X.Z.resolve(
                    "cookieDeprecationLabel" in navigator &&
                      (0, be.xD)(ye.S1, (0, me.T)(we.wu, "cdep")) &&
                      navigator.cookieDeprecationLabel.getValue()
                  ).catch(function () {
                    return null;
                  }),
                ];
              return X.Z.all(t).then(function (e) {
                var n = (0, r.Z)(e, 3),
                  t = n[0],
                  i = n[1],
                  o = n[2],
                  u = Ae.getRefererInfo();
                if (
                  ((function (e) {
                    ["app", "site", "device"].forEach(function (n) {
                      var t = T.vc.getConfig(n);
                      null != t && (e[n] = (0, a.Ee)({}, t, e[n]));
                    });
                  })(t),
                  Object.entries(je).forEach(function (e) {
                    var n = (0, r.Z)(e, 2),
                      i = n[0],
                      o = (0, n[1])(t, u);
                    o &&
                      Object.keys(o).length > 0 &&
                      (t[i] = (0, a.Ee)({}, o, t[i]));
                  }),
                  i && c(t, "device.sua", Object.assign({}, i, t.device.sua)),
                  o)
                ) {
                  var s = { cdep: o };
                  c(t, "device.ext", Object.assign({}, s, t.device.ext));
                }
                t = Te(t);
                var d,
                  f = (function (e, n) {
                    var t =
                      ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                      e["@@iterator"];
                    if (!t) {
                      if (
                        Array.isArray(e) ||
                        (t = (function (e, n) {
                          if (e) {
                            if ("string" == typeof e) return Ce(e, n);
                            var t = Object.prototype.toString
                              .call(e)
                              .slice(8, -1);
                            return (
                              "Object" === t &&
                                e.constructor &&
                                (t = e.constructor.name),
                              "Map" === t || "Set" === t
                                ? Array.from(e)
                                : "Arguments" === t ||
                                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                    t
                                  )
                                ? Ce(e, n)
                                : void 0
                            );
                          }
                        })(e)) ||
                        (n && e && "number" == typeof e.length)
                      ) {
                        t && (e = t);
                        var r = 0,
                          i = function () {};
                        return {
                          s: i,
                          n: function () {
                            return r >= e.length
                              ? { done: !0 }
                              : { done: !1, value: e[r++] };
                          },
                          e: function (e) {
                            throw e;
                          },
                          f: i,
                        };
                      }
                      throw new TypeError(
                        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                      );
                    }
                    var o,
                      a = !0,
                      u = !1;
                    return {
                      s: function () {
                        t = t.call(e);
                      },
                      n: function () {
                        var e = t.next();
                        return (a = e.done), e;
                      },
                      e: function (e) {
                        (u = !0), (o = e);
                      },
                      f: function () {
                        try {
                          a || null == t.return || t.return();
                        } finally {
                          if (u) throw o;
                        }
                      },
                    };
                  })(ve);
                try {
                  for (f.s(); !(d = f.n()).done; ) {
                    var l = d.value;
                    if (he(t, l)) {
                      t[l] = (0, a.Ee)({}, Ie(0, u), t[l]);
                      break;
                    }
                  }
                } catch (e) {
                  f.e(e);
                } finally {
                  f.f();
                }
                return t;
              });
            });
          function Oe(e) {
            try {
              return e(Ae.getWindowTop());
            } catch (n) {
              return e(Ae.getWindowSelf());
            }
          }
          function ke(e) {
            return (0, a.iG)(e, Object.keys(e));
          }
          var je = {
            site: function (e, n) {
              if (
                !ve
                  .filter(function (e) {
                    return "site" !== e;
                  })
                  .some(he.bind(null, e))
              )
                return ke({ page: n.page, ref: n.ref });
            },
            device: function () {
              return Oe(function (e) {
                return {
                  w:
                    e.innerWidth ||
                    e.document.documentElement.clientWidth ||
                    e.document.body.clientWidth,
                  h:
                    e.innerHeight ||
                    e.document.documentElement.clientHeight ||
                    e.document.body.clientHeight,
                  dnt: (0, a.oV)() ? 1 : 0,
                  ua: e.navigator.userAgent,
                  language: e.navigator.language.split("-").shift(),
                };
              });
            },
            regs: function () {
              var e = {};
              Oe(function (e) {
                return e.navigator.globalPrivacyControl;
              }) && c(e, "ext.gpc", 1);
              var n = T.vc.getConfig("coppa");
              return "boolean" == typeof n && (e.coppa = n ? 1 : 0), e;
            },
          };
          function Ie(e, n) {
            var t,
              r,
              i,
              o = (0, ue.hh)(n.page, { noLeadingWww: !0 });
            return ke({
              domain: o,
              keywords:
                null ===
                  (t = Oe(function (e) {
                    return e.document.querySelector("meta[name='keywords']");
                  })) ||
                void 0 === t ||
                null === (r = t.content) ||
                void 0 === r ||
                null === (i = r.replace) ||
                void 0 === i
                  ? void 0
                  : i.call(r, /\s/g, ""),
              publisher: ke({ domain: Ae.findRootDomain(o) }),
            });
          }
          var Be = t(2513),
            Se = t(9819),
            Ue = t(154),
            Re = (0, o.R)(),
            Pe = A.k_.triggerUserSyncs,
            De = l.FP,
            xe = De.ADD_AD_UNITS,
            Ze = De.REQUEST_BIDS,
            _e = De.SET_TARGETING,
            Ne = {
              bidWon: function (e) {
                if (
                  g.K.getBidsRequested()
                    .map(function (e) {
                      return e.bids.map(function (e) {
                        return e.adUnitCode;
                      });
                    })
                    .reduce(a.xH)
                    .filter(a.tT)
                    .includes(e)
                )
                  return !0;
                (0, a.H)('The "' + e + '" placement is not defined.');
              },
            };
          function qe(e, n) {
            var t = [];
            return (
              (0, a.kJ)(e) &&
                (n ? e.length === n : e.length > 0) &&
                (e.every(function (e) {
                  return (0, a.HC)(e, 2);
                })
                  ? (t = e)
                  : (0, a.HC)(e, 2) && t.push(e)),
              t
            );
          }
          function He(e) {
            var n = (0, a.I8)(e),
              t = n.mediaTypes.banner,
              r = qe(t.sizes);
            return (
              r.length > 0
                ? ((t.sizes = r), (n.sizes = r))
                : ((0, a.H)(
                    "Detected a mediaTypes.banner object without a proper sizes field.  Please ensure the sizes are listed like: [[300, 250], ...].  Removing invalid mediaTypes.banner object from request."
                  ),
                  delete n.mediaTypes.banner),
              n
            );
          }
          function Me(e) {
            var n = (0, a.I8)(e),
              t = n.mediaTypes.video;
            if (t.playerSize) {
              var r = "number" == typeof t.playerSize[0] ? 2 : 1,
                i = qe(t.playerSize, r);
              i.length > 0
                ? (2 === r &&
                    (0, a.PN)(
                      "Transforming video.playerSize from [640,480] to [[640,480]] so it's in the proper format."
                    ),
                  (t.playerSize = i),
                  (n.sizes = i))
                : ((0, a.H)(
                    "Detected incorrect configuration of mediaTypes.video.playerSize.  Please specify only one set of dimensions in a format like: [[640, 480]]. Removing invalid mediaTypes.video.playerSize property from request."
                  ),
                  delete n.mediaTypes.video.playerSize);
            }
            return n;
          }
          function Fe(e) {
            var n = (0, a.I8)(e),
              t = n.mediaTypes.native;
            if (t.ortb) {
              var r = Object.keys(l.FY).filter(function (e) {
                  return l.FY[e].includes("hb_native_");
                }),
                i = Object.keys(t).filter(function (e) {
                  return r.includes(e);
                });
              i.length > 0 &&
                ((0, a.H)(
                  "when using native OpenRTB format, you cannot use legacy native properties. Deleting ".concat(
                    i,
                    " keys from request."
                  )
                ),
                i.forEach(function (e) {
                  return delete n.mediaTypes.native[e];
                }));
            }
            return (
              t.image &&
                t.image.sizes &&
                !Array.isArray(t.image.sizes) &&
                ((0, a.H)(
                  "Please use an array of sizes for native.image.sizes field.  Removing invalid mediaTypes.native.image.sizes property from request."
                ),
                delete n.mediaTypes.native.image.sizes),
              t.image &&
                t.image.aspect_ratios &&
                !Array.isArray(t.image.aspect_ratios) &&
                ((0, a.H)(
                  "Please use an array of sizes for native.image.aspect_ratios field.  Removing invalid mediaTypes.native.image.aspect_ratios property from request."
                ),
                delete n.mediaTypes.native.image.aspect_ratios),
              t.icon &&
                t.icon.sizes &&
                !Array.isArray(t.icon.sizes) &&
                ((0, a.H)(
                  "Please use an array of sizes for native.icon.sizes field.  Removing invalid mediaTypes.native.icon.sizes property from request."
                ),
                delete n.mediaTypes.native.icon.sizes),
              n
            );
          }
          function We(e, n) {
            var t = (0, u.Z)(e, "mediaTypes.".concat(n, ".pos"));
            if (!(0, a.hj)(t) || isNaN(t) || !isFinite(t)) {
              var r = "Value of property 'pos' on ad unit ".concat(
                e.code,
                " should be of type: Number"
              );
              (0, a.yN)(r),
                d.j8(l.FP.AUCTION_DEBUG, { type: "WARNING", arguments: r }),
                delete e.mediaTypes[n].pos;
            }
            return e;
          }
          function Le(e) {
            var n = function (n) {
                return "adUnit.code '".concat(e.code, "' ").concat(n);
              },
              t = e.mediaTypes,
              r = e.bids;
            return null == r || (0, a.kJ)(r)
              ? null == r && null == e.ortb2Imp
                ? ((0, a.H)(
                    n(
                      "has no 'adUnit.bids' and no 'adUnit.ortb2Imp'. Removing adUnit from auction"
                    )
                  ),
                  null)
                : t && 0 !== Object.keys(t).length
                ? (null == e.ortb2Imp ||
                    (null != r && 0 !== r.length) ||
                    ((e.bids = [{ bidder: null }]),
                    (0, a.ji)(
                      n(
                        "defines 'adUnit.ortb2Imp' with no 'adUnit.bids'; it will be seen only by S2S adapters"
                      )
                    )),
                  e)
                : ((0, a.H)(
                    n(
                      "does not define a 'mediaTypes' object.  This is a required field for the auction, so this adUnit has been removed."
                    )
                  ),
                  null)
              : ((0, a.H)(
                  n(
                    "defines 'adUnit.bids' that is not an array. Removing adUnit from auction"
                  )
                ),
                null);
          }
          !(function () {
            var e = null;
            try {
              e = window.sessionStorage;
            } catch (e) {}
            if (null !== e) {
              var n = te,
                t = null;
              try {
                t = e.getItem($);
              } catch (e) {}
              null !== t && n.enable();
            }
          })(),
            (Re.bidderSettings = Re.bidderSettings || {}),
            (Re.libLoaded = !0),
            (Re.version = "v8.32.0-pre"),
            (0, a.PN)("Prebid.js v8.32.0-pre loaded"),
            (Re.installedModules = Re.installedModules || []),
            (Re.adUnits = Re.adUnits || []),
            (Re.triggerUserSyncs = Pe);
          var ze = {
            validateAdUnit: Le,
            validateBannerMediaType: He,
            validateSizes: qe,
          };
          Object.assign(ze, { validateNativeMediaType: Fe }),
            Object.assign(ze, { validateVideoMediaType: Me });
          var Ke,
            Ge = (0, k.z3)(
              "sync",
              function (e) {
                var n = [];
                return (
                  e.forEach(function (e) {
                    if (null != (e = Le(e))) {
                      var t,
                        r,
                        i,
                        o = e.mediaTypes;
                      o.banner &&
                        ((t = He(e)),
                        o.banner.hasOwnProperty("pos") &&
                          (t = We(t, "banner"))),
                        o.video &&
                          ((r = Me(t || e)),
                          o.video.hasOwnProperty("pos") &&
                            (r = We(r, "video"))),
                        o.native && (i = Fe(r || t || e));
                      var a = Object.assign({}, t, r, i);
                      n.push(a);
                    }
                  }),
                  n
                );
              },
              "checkAdUnitSetup"
            );
          function Je(e) {
            e.forEach(function (e) {
              return (0, Ue.cx)(e);
            });
          }
          function Ve(e) {
            var n = g.K[e]().filter(function (e) {
                return g.K.getAdUnitCodes().includes(e.adUnitCode);
              }),
              t = g.K.getLastAuctionId();
            return n
              .map(function (e) {
                return e.adUnitCode;
              })
              .filter(a.tT)
              .map(function (e) {
                return n.filter(function (n) {
                  return n.auctionId === t && n.adUnitCode === e;
                });
              })
              .filter(function (e) {
                return e && e[0] && e[0].adUnitCode;
              })
              .map(function (e) {
                return (0, i.Z)({}, e[0].adUnitCode, { bids: e });
              })
              .reduce(function (e, n) {
                return Object.assign(e, n);
              }, {});
          }
          (Re.getAdserverTargetingForAdUnitCodeStr = function (e) {
            if (
              ((0, a.PN)(
                "Invoking pbjs.getAdserverTargetingForAdUnitCodeStr",
                arguments
              ),
              e)
            ) {
              var n = Re.getAdserverTargetingForAdUnitCode(e);
              return (0, a.Ob)(n);
            }
            (0, a.ji)(
              "Need to call getAdserverTargetingForAdUnitCodeStr with adunitCode"
            );
          }),
            (Re.getHighestUnusedBidResponseForAdUnitCode = function (e) {
              if (e) {
                var n = g.K.getAllBidsForAdUnitCode(e).filter(z);
                return n.length ? n.reduce(Z) : {};
              }
              (0, a.ji)(
                "Need to call getHighestUnusedBidResponseForAdUnitCode with adunitCode"
              );
            }),
            (Re.getAdserverTargetingForAdUnitCode = function (e) {
              return Re.getAdserverTargeting(e)[e];
            }),
            (Re.getAdserverTargeting = function (e) {
              return (
                (0, a.PN)("Invoking pbjs.getAdserverTargeting", arguments),
                J.getAllTargeting(e)
              );
            }),
            (Re.getConsentMetadata = function () {
              return (
                (0, a.PN)("Invoking pbjs.getConsentMetadata"),
                Be.NO.getConsentMeta()
              );
            }),
            (Re.getNoBids = function () {
              return (
                (0, a.PN)("Invoking pbjs.getNoBids", arguments), Ve("getNoBids")
              );
            }),
            (Re.getNoBidsForAdUnitCode = function (e) {
              return {
                bids: g.K.getNoBids().filter(function (n) {
                  return n.adUnitCode === e;
                }),
              };
            }),
            (Re.getBidResponses = function () {
              return (
                (0, a.PN)("Invoking pbjs.getBidResponses", arguments),
                Ve("getBidsReceived")
              );
            }),
            (Re.getBidResponsesForAdUnitCode = function (e) {
              return {
                bids: g.K.getBidsReceived().filter(function (n) {
                  return n.adUnitCode === e;
                }),
              };
            }),
            (Re.setTargetingForGPTAsync = function (e, n) {
              if (
                ((0, a.PN)("Invoking pbjs.setTargetingForGPTAsync", arguments),
                (0, a.T9)())
              ) {
                var t = J.getAllTargeting(e);
                J.resetPresetTargeting(e, n),
                  J.setTargetingForGPT(t, n),
                  Object.keys(t).forEach(function (e) {
                    Object.keys(t[e]).forEach(function (n) {
                      "hb_adid" === n && g.K.setStatusForBids(t[e][n], l.UE.CK);
                    });
                  }),
                  d.j8(_e, t);
              } else (0, a.H)("window.googletag is not defined on the page");
            }),
            (Re.setTargetingForAst = function (e) {
              (0, a.PN)("Invoking pbjs.setTargetingForAn", arguments),
                J.isApntagDefined()
                  ? (J.setTargetingForAst(e), d.j8(_e, J.getAllTargeting()))
                  : (0, a.H)("window.apntag is not defined on the page");
            }),
            (Re.renderAd = (0, k.z3)("async", function (e, n, t) {
              (0, a.PN)("Invoking pbjs.renderAd", arguments),
                (0, a.ji)("Calling renderAd with adId :" + n),
                (0, Se.t)(e, n, t);
            })),
            (Re.removeAdUnit = function (e) {
              (0, a.PN)("Invoking pbjs.removeAdUnit", arguments),
                e
                  ? ((0, a.kJ)(e) ? e : [e]).forEach(function (e) {
                      for (var n = Re.adUnits.length - 1; n >= 0; n--)
                        Re.adUnits[n].code === e && Re.adUnits.splice(n, 1);
                    })
                  : (Re.adUnits = []);
            }),
            (Re.requestBids =
              ((Ke = (0, k.z3)(
                "async",
                function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    n = e.bidsBackHandler,
                    t = e.timeout,
                    i = e.adUnits,
                    o = e.adUnitCodes,
                    u = e.labels,
                    c = e.auctionId,
                    s = e.ttlBuffer,
                    f = e.ortb2,
                    l = e.metrics,
                    g = e.defer;
                  d.j8(Ze);
                  var v = t || T.vc.getConfig("bidderTimeout");
                  (0, a.PN)("Invoking pbjs.requestBids", arguments),
                    o && o.length
                      ? (i = i.filter(function (e) {
                          return (0, p.q9)(o, e.code);
                        }))
                      : (o =
                          i &&
                          i.map(function (e) {
                            return e.code;
                          }));
                  var h = {
                    global: (0, a.Ee)(
                      {},
                      T.vc.getAnyConfig("ortb2") || {},
                      f || {}
                    ),
                    bidder: Object.fromEntries(
                      Object.entries(T.vc.getBidderConfig())
                        .map(function (e) {
                          var n = (0, r.Z)(e, 2);
                          return [n[0], n[1].ortb2];
                        })
                        .filter(function (e) {
                          var n = (0, r.Z)(e, 2);
                          return n[0], null != n[1];
                        })
                    ),
                  };
                  return Ee(X.Z.resolve(h.global)).then(function (e) {
                    return (
                      (h.global = e),
                      Qe({
                        bidsBackHandler: n,
                        timeout: v,
                        adUnits: i,
                        adUnitCodes: o,
                        labels: u,
                        auctionId: c,
                        ttlBuffer: s,
                        ortb2Fragments: h,
                        metrics: l,
                        defer: g,
                      })
                    );
                  });
                },
                "requestBids"
              )),
              (0, k.IF)(Ke, function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  n = e.adUnits || Re.adUnits;
                return (
                  (e.adUnits = (0, a.kJ)(n) ? n.slice() : [n]),
                  (e.metrics = (0, ae.V6)()),
                  e.metrics.checkpoint("requestBids"),
                  (e.defer = (0, X.P)({
                    promiseFactory: function (e) {
                      return new Promise(e);
                    },
                  })),
                  Ke.call(this, e),
                  e.defer.promise
                );
              })));
          var Qe = (0, k.z3)(
            "async",
            function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                n = e.bidsBackHandler,
                t = e.timeout,
                r = e.adUnits,
                i = e.ttlBuffer,
                o = e.adUnitCodes,
                u = e.labels,
                s = e.auctionId,
                d = e.ortb2Fragments,
                f = e.metrics,
                l = e.defer,
                v = (0, oe.uV)(T.vc.getConfig("s2sConfig") || []);
              function h(e, t, r) {
                if ("function" == typeof n)
                  try {
                    n(e, t, r);
                  } catch (e) {
                    (0, a.H)("Error executing bidsBackHandler", null, e);
                  }
                l.resolve({ bids: e, timedOut: t, auctionId: r });
              }
              if (
                (Je(r),
                (r = (0, ae.Bf)(f).measureTime(
                  "requestBids.validate",
                  function () {
                    return Ge(r);
                  }
                )).forEach(function (e) {
                  var n,
                    t,
                    r = Object.keys(e.mediaTypes || { banner: "banner" }),
                    o = e.bids.map(function (e) {
                      return e.bidder;
                    }),
                    u = oe.ZP.bidderRegistry,
                    s = o.filter(function (e) {
                      return !v.has(e);
                    }),
                    d =
                      (null === (n = e.ortb2Imp) ||
                      void 0 === n ||
                      null === (t = n.ext) ||
                      void 0 === t
                        ? void 0
                        : t.tid) || (0, a.DO)();
                  (e.transactionId = d),
                    null == i ||
                      e.hasOwnProperty("ttlBuffer") ||
                      (e.ttlBuffer = i),
                    c(e, "ortb2Imp.ext.tid", d),
                    s.forEach(function (n) {
                      var t = u[n],
                        i = t && t.getSpec && t.getSpec(),
                        o = (i && i.supportedMediaTypes) || ["banner"];
                      r.some(function (e) {
                        return (0, p.q9)(o, e);
                      })
                        ? re.f.incrementBidderRequestsCounter(e.code, n)
                        : ((0, a.yN)((0, a.or)(e, n)),
                          (e.bids = e.bids.filter(function (e) {
                            return e.bidder !== n;
                          })));
                    }),
                    re.f.incrementRequestsCounter(e.code);
                }),
                r && 0 !== r.length)
              ) {
                var b = g.K.createAuction({
                    adUnits: r,
                    adUnitCodes: o,
                    callback: h,
                    cbTimeout: t,
                    labels: u,
                    auctionId: s,
                    ortb2Fragments: d,
                    metrics: f,
                  }),
                  m = r.length;
                m > 15 &&
                  (0, a.PN)(
                    "Current auction "
                      .concat(b.getAuctionId(), " contains ")
                      .concat(m, " adUnits."),
                    r
                  ),
                  o.forEach(function (e) {
                    return J.setLatestAuctionForAdUnit(e, b.getAuctionId());
                  }),
                  b.callBids();
              } else
                (0, a.ji)("No adUnits configured. No bids requested."), h();
            },
            "startAuction"
          );
          Re.requestBids.before(function (e, n) {
            function t(e) {
              for (var n; (n = e.shift()); ) n();
            }
            t(ie.Ld), t(Xe), e.call(this, n);
          }, 49),
            (Re.addAdUnits = function (e) {
              (0, a.PN)("Invoking pbjs.addAdUnits", arguments),
                Re.adUnits.push.apply(Re.adUnits, (0, a.kJ)(e) ? e : [e]),
                d.j8(xe);
            }),
            (Re.onEvent = function (e, n, t) {
              (0, a.PN)("Invoking pbjs.onEvent", arguments),
                (0, a.LQ)(n)
                  ? !t || Ne[e].call(null, t)
                    ? d.on(e, n, t)
                    : (0, a.H)(
                        'The id provided is not valid for event "' +
                          e +
                          '" and no handler was set.'
                      )
                  : (0, a.H)(
                      'The event handler provided is not a function and was not set on event "' +
                        e +
                        '".'
                    );
            }),
            (Re.offEvent = function (e, n, t) {
              (0, a.PN)("Invoking pbjs.offEvent", arguments),
                (t && !Ne[e].call(null, t)) || d.S1(e, n, t);
            }),
            (Re.getEvents = function () {
              return (0, a.PN)("Invoking pbjs.getEvents"), d.vw();
            }),
            (Re.registerBidAdapter = function (e, n) {
              (0, a.PN)("Invoking pbjs.registerBidAdapter", arguments);
              try {
                oe.ZP.registerBidAdapter(e(), n);
              } catch (e) {
                (0, a.H)("Error registering bidder adapter : " + e.message);
              }
            }),
            (Re.registerAnalyticsAdapter = function (e) {
              (0, a.PN)("Invoking pbjs.registerAnalyticsAdapter", arguments);
              try {
                oe.ZP.registerAnalyticsAdapter(e);
              } catch (e) {
                (0, a.H)("Error registering analytics adapter : " + e.message);
              }
            }),
            (Re.createBid = function (e) {
              return (
                (0, a.PN)("Invoking pbjs.createBid", arguments), (0, V.m)(e)
              );
            });
          var Xe = [],
            $e = (0, k.z3)(
              "async",
              function (e) {
                e && !(0, a.xb)(e)
                  ? ((0, a.PN)("Invoking pbjs.enableAnalytics for: ", e),
                    oe.ZP.enableAnalytics(e))
                  : (0, a.H)(
                      "pbjs.enableAnalytics should be called with option {}"
                    );
              },
              "enableAnalyticsCb"
            );
          (Re.enableAnalytics = function (e) {
            Xe.push($e.bind(this, e));
          }),
            (Re.aliasBidder = function (e, n, t) {
              (0, a.PN)("Invoking pbjs.aliasBidder", arguments),
                e && n
                  ? oe.ZP.aliasBidAdapter(e, n, t)
                  : (0, a.H)(
                      "bidderCode and alias must be passed as arguments",
                      "pbjs.aliasBidder"
                    );
            }),
            (Re.aliasRegistry = oe.ZP.aliasRegistry),
            T.vc.getConfig("aliasRegistry", function (e) {
              "private" === e.aliasRegistry && delete Re.aliasRegistry;
            }),
            (Re.getAllWinningBids = function () {
              return g.K.getAllWinningBids();
            }),
            (Re.getAllPrebidWinningBids = function () {
              return g.K.getBidsReceived().filter(function (e) {
                return e.status === l.UE.CK;
              });
            }),
            (Re.getHighestCpmBids = function (e) {
              return J.getWinningBids(e);
            }),
            (Re.markWinningBidAsUsed = function (e) {
              var n = Ye(
                e,
                "Improper use of markWinningBidAsUsed. It needs an adUnitCode or an adId to function."
              );
              n.length > 0 && g.K.addWinningBid(n[0]);
            });
          var Ye = function (e, n) {
            var t = [];
            return (
              e.adUnitCode && e.adId
                ? (t = g.K.getBidsReceived().filter(function (n) {
                    return n.adId === e.adId && n.adUnitCode === e.adUnitCode;
                  }))
                : e.adUnitCode
                ? (t = J.getWinningBids(e.adUnitCode))
                : e.adId
                ? (t = g.K.getBidsReceived().filter(function (n) {
                    return n.adId === e.adId;
                  }))
                : (0, a.yN)(n),
              t
            );
          };
          function en(e) {
            e.forEach(function (e) {
              if (void 0 === e.called)
                try {
                  e.call(), (e.called = !0);
                } catch (e) {
                  (0, a.H)("Error processing command :", "prebid.js", e);
                }
            });
          }
          (Re.getConfig = T.vc.getAnyConfig),
            (Re.readConfig = T.vc.readAnyConfig),
            (Re.mergeConfig = T.vc.mergeConfig),
            (Re.mergeBidderConfig = T.vc.mergeBidderConfig),
            (Re.setConfig = T.vc.setConfig),
            (Re.setBidderConfig = T.vc.setBidderConfig),
            Re.que.push(function () {
              window.addEventListener("message", w, !1);
            }),
            (Re.cmd.push = function (e) {
              if ("function" == typeof e)
                try {
                  e.call();
                } catch (e) {
                  (0, a.H)("Error processing command :", e.message, e.stack);
                }
              else
                (0, a.H)(
                  "Commands written into pbjs.cmd.push must be wrapped in a function"
                );
            }),
            (Re.que.push = Re.cmd.push),
            (Re.processQueue = function () {
              k.z3.ready(), en(Re.que), en(Re.cmd);
            }),
            (Re.triggerBilling = function (e) {
              var n = Ye(
                  e,
                  "Improper use of triggerBilling. It requires a bid with at least an adUnitCode or an adId to function."
                ),
                t =
                  n.find(function (n) {
                    return n.requestId === e.requestId;
                  }) || n[0];
              if (n.length > 0 && t)
                try {
                  oe.ZP.callBidBillableBidder(t);
                } catch (e) {
                  (0, a.H)("Error when triggering billing :", e);
                }
              else
                (0, a.yN)(
                  "The bid provided to triggerBilling did not match any bids received."
                );
            });
        },
        8640: function (e, n, t) {
          t.d(n, {
            R: function () {
              return o;
            },
            z: function () {
              return a;
            },
          });
          var r = window,
            i = (r.pbjs = r.pbjs || {});
          function o() {
            return i;
          }
          function a(e) {
            i.installedModules.push(e);
          }
          (i.cmd = i.cmd || []),
            (i.que = i.que || []),
            r === window &&
              ((r._pbjsGlobals = r._pbjsGlobals || []),
              r._pbjsGlobals.push("pbjs"));
        },
        5102: function (e, n, t) {
          t.d(n, {
            hh: function () {
              return a;
            },
            nH: function () {
              return s;
            },
          });
          var r = t(3193),
            i = t(4358);
          function o(e) {
            var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : window;
            if (!e) return e;
            if (/\w+:\/\//.exec(e)) return e;
            var t = n.location.protocol;
            try {
              t = n.top.location.protocol;
            } catch (e) {}
            return /^\/\//.exec(e) ? t + e : "".concat(t, "//").concat(e);
          }
          function a(e) {
            var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              t = n.noLeadingWww,
              r = void 0 !== t && t,
              i = n.noPort,
              a = void 0 !== i && i;
            try {
              e = new URL(o(e));
            } catch (e) {
              return;
            }
            return (
              (e = a ? e.hostname : e.host),
              r && e.startsWith("www.") && (e = e.substring(4)),
              e
            );
          }
          function u(e) {
            try {
              var n = e.querySelector("link[rel='canonical']");
              if (null !== n) return n.href;
            } catch (e) {}
            return null;
          }
          var c,
            s = (function (e) {
              var n,
                t,
                r,
                i =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : window;
              return i.top !== i
                ? e
                : function () {
                    var o = u(i.document),
                      a = i.location.href;
                    return (
                      (n === o && a === t) || ((n = o), (t = a), (r = e())), r
                    );
                  };
            })(
              ((c = window),
              function () {
                var e,
                  n,
                  t,
                  s,
                  d = [],
                  f = (function (e) {
                    try {
                      if (!e.location.ancestorOrigins) return;
                      return e.location.ancestorOrigins;
                    } catch (e) {}
                  })(c),
                  l = r.vc.getConfig("maxNestedIframes"),
                  g = !1,
                  p = 0,
                  v = !1,
                  h = !1,
                  b = !1;
                do {
                  var m = e,
                    y = h,
                    w = void 0,
                    C = !1,
                    A = null;
                  (h = !1), (e = e ? e.parent : c);
                  try {
                    w = e.location.href || null;
                  } catch (e) {
                    C = !0;
                  }
                  if (C)
                    if (y) {
                      var T = m.context;
                      try {
                        (n = A = T.sourceUrl),
                          (b = !0),
                          (v = !0),
                          e === c.top && (g = !0),
                          T.canonicalUrl && (t = T.canonicalUrl);
                      } catch (e) {}
                    } else {
                      (0, i.yN)(
                        "Trying to access cross domain iframe. Continuing without referrer and location"
                      );
                      try {
                        var E = m.document.referrer;
                        E && ((A = E), e === c.top && (g = !0));
                      } catch (e) {}
                      !A &&
                        f &&
                        f[p - 1] &&
                        ((A = f[p - 1]), e === c.top && (b = !0)),
                        A && !v && (n = A);
                    }
                  else {
                    if (w && ((n = A = w), (v = !1), e === c.top)) {
                      g = !0;
                      var O = u(e.document);
                      O && (t = O);
                    }
                    e.context && e.context.sourceUrl && (h = !0);
                  }
                  d.push(A), p++;
                } while (e !== c.top && p < l);
                d.reverse();
                try {
                  s = c.top.document.referrer;
                } catch (e) {}
                var k = g || b ? n : null,
                  j = r.vc.getConfig("pageUrl") || t || null,
                  I = r.vc.getConfig("pageUrl") || k || o(j, c);
                return (
                  k &&
                    k.indexOf("?") > -1 &&
                    -1 === I.indexOf("?") &&
                    (I = "".concat(I).concat(k.substring(k.indexOf("?")))),
                  {
                    reachedTop: g,
                    isAmp: v,
                    numIframes: p - 1,
                    stack: d,
                    topmostLocation: n || null,
                    location: k,
                    canonicalUrl: j,
                    page: I,
                    domain: a(I) || null,
                    ref: s || null,
                    legacy: {
                      reachedTop: g,
                      isAmp: v,
                      numIframes: p - 1,
                      stack: d,
                      referer: n || null,
                      canonicalUrl: j,
                    },
                  }
                );
              })
            );
        },
        5164: function (e, n, t) {
          t.d(n, {
            Ld: function () {
              return v;
            },
            eA: function () {
              return h;
            },
          });
          var r = t(4942),
            i = t(4358),
            o = t(5975),
            a = t(9633),
            u = t(571),
            c = t(6310),
            s = t(4947),
            d = t(3193),
            f = t(2931),
            l = t(286),
            g = "html5",
            p = "cookie",
            v = [];
          function h(e) {
            return (function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                n = e.moduleName,
                t = e.moduleType,
                o = (
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {}
                ).isAllowed,
                h = void 0 === o ? u.xD : o;
              function b(e, i) {
                var o = n,
                  u = d.vc.getCurrentBidder();
                return (
                  u && t === a.UL && f.ZP.aliasRegistry[u] === n && (o = u),
                  e({ valid: h(s.S1, (0, l.T)(t, o, (0, r.Z)({}, c.bL, i))) })
                );
              }
              function m(e, n, t) {
                if (!t || "function" != typeof t) return b(e, n);
                v.push(function () {
                  var r = b(e, n);
                  t(r);
                });
              }
              var y = function (e, n, t, r, i, o) {
                  return m(
                    function (o) {
                      if (o && o.valid) {
                        var a =
                            i && "" !== i
                              ? " ;domain=".concat(encodeURIComponent(i))
                              : "",
                          u = t && "" !== t ? " ;expires=".concat(t) : "",
                          c =
                            null != r && "none" == r.toLowerCase()
                              ? "; Secure"
                              : "";
                        document.cookie = ""
                          .concat(e, "=")
                          .concat(encodeURIComponent(n))
                          .concat(u, "; path=/")
                          .concat(a)
                          .concat(r ? "; SameSite=".concat(r) : "")
                          .concat(c);
                      }
                    },
                    p,
                    o
                  );
                },
                w = function (e, n) {
                  return m(
                    function (n) {
                      if (n && n.valid) {
                        var t = window.document.cookie.match(
                          "(^|;)\\s*" + e + "\\s*=\\s*([^;]*)\\s*(;|$)"
                        );
                        return t ? decodeURIComponent(t[2]) : null;
                      }
                      return null;
                    },
                    p,
                    n
                  );
                },
                C = function (e) {
                  return m(
                    function (e) {
                      if (e && e.valid)
                        try {
                          return (
                            localStorage.setItem("prebid.cookieTest", "1"),
                            "1" === localStorage.getItem("prebid.cookieTest")
                          );
                        } catch (e) {
                        } finally {
                          try {
                            localStorage.removeItem("prebid.cookieTest");
                          } catch (e) {}
                        }
                      return !1;
                    },
                    g,
                    e
                  );
                },
                A = function (e) {
                  return m(
                    function (e) {
                      return !(!e || !e.valid) && (0, i.IG)();
                    },
                    p,
                    e
                  );
                },
                T = function (e, n, t) {
                  return m(
                    function (t) {
                      t && t.valid && k() && window.localStorage.setItem(e, n);
                    },
                    g,
                    t
                  );
                },
                E = function (e, n) {
                  return m(
                    function (n) {
                      return n && n.valid && k()
                        ? window.localStorage.getItem(e)
                        : null;
                    },
                    g,
                    n
                  );
                },
                O = function (e, n) {
                  return m(
                    function (n) {
                      n && n.valid && k() && window.localStorage.removeItem(e);
                    },
                    g,
                    n
                  );
                },
                k = function (e) {
                  return m(
                    function (e) {
                      if (e && e.valid)
                        try {
                          return !!window.localStorage;
                        } catch (e) {
                          (0, i.H)("Local storage api disabled");
                        }
                      return !1;
                    },
                    g,
                    e
                  );
                },
                j = function (e, n) {
                  return m(
                    function (n) {
                      if (n && n.valid) {
                        var t = [];
                        if ((0, i.wn)())
                          for (var r = document.cookie.split(";"); r.length; ) {
                            var o = r.pop(),
                              a = o.indexOf("=");
                            (a = a < 0 ? o.length : a),
                              decodeURIComponent(
                                o.slice(0, a).replace(/^\s+/, "")
                              ).indexOf(e) >= 0 &&
                                t.push(decodeURIComponent(o.slice(a + 1)));
                          }
                        return t;
                      }
                    },
                    p,
                    n
                  );
                };
              return {
                setCookie: y,
                getCookie: w,
                localStorageIsEnabled: C,
                cookiesAreEnabled: A,
                setDataInLocalStorage: T,
                getDataFromLocalStorage: E,
                removeDataFromLocalStorage: O,
                hasLocalStorage: k,
                findSimilarCookies: j,
              };
            })({ moduleName: e, moduleType: a.wu });
          }
          (0, u.oB)(s.S1, "deviceAccess config", function () {
            if (!(0, i.wn)()) return { allow: !1 };
          }),
            (0, u.oB)(s.S1, "bidderSettings.*.storageAllowed", function (e) {
              var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : o.S;
              if (e[c.$k] === a.UL) {
                var t = n.get(e[c.Ki], "storageAllowed");
                if (t && !0 !== t) {
                  var r = e[c.bL];
                  t = Array.isArray(t)
                    ? t.some(function (e) {
                        return e === r;
                      })
                    : t === r;
                } else t = !!t;
                return t ? void 0 : { allow: t };
              }
            });
        },
        1974: function (e, n, t) {
          t.d(n, {
            k_: function () {
              return v;
            },
          });
          var r = t(4942),
            i = t(3324),
            o = t(4358),
            a = t(3193),
            u = t(4614),
            c = t(5164),
            s = t(571),
            d = t(4947),
            f = t(6310),
            l = t(9633),
            g = t(286);
          a.vc.setDefaults({
            userSync: (0, o.I8)({
              syncEnabled: !0,
              filterSettings: { image: { bidders: "*", filter: "include" } },
              syncsPerBidder: 5,
              syncDelay: 3e3,
              auctionDelay: 0,
            }),
          });
          var p = (0, c.eA)("usersync"),
            v = (function (e) {
              var n = {},
                t = { image: [], iframe: [] },
                c = new Set(),
                s = {},
                p = { image: !0, iframe: !1 },
                v = e.config;
              function h() {
                if (v.syncEnabled && e.browserSupportsCookies) {
                  try {
                    p.iframe &&
                      b(t.iframe, function (e) {
                        var n = (0, i.Z)(e, 2),
                          r = n[0],
                          a = n[1];
                        (0, o.ji)(
                          "Invoking iframe user sync for bidder: ".concat(r)
                        ),
                          (0, o.Vs)(a),
                          (function (e, n) {
                            e.image = e.image.filter(function (e) {
                              return e[0] !== n;
                            });
                          })(t, r);
                      }),
                      p.image &&
                        b(t.image, function (e) {
                          var n = (0, i.Z)(e, 2),
                            t = n[0],
                            r = n[1];
                          (0, o.ji)(
                            "Invoking image pixel user sync for bidder: ".concat(
                              t
                            )
                          ),
                            (0, o.hq)(r);
                        });
                  } catch (e) {
                    return (0, o.H)("Error firing user syncs", e);
                  }
                  t = { image: [], iframe: [] };
                }
              }
              function b(e, n) {
                (0, o.TV)(e).forEach(n);
              }
              return (
                a.vc.getConfig("userSync", function (e) {
                  if (e.userSync) {
                    var n = e.userSync.filterSettings;
                    (0, o.PO)(n) &&
                      (n.image ||
                        n.all ||
                        (e.userSync.filterSettings.image = {
                          bidders: "*",
                          filter: "include",
                        }));
                  }
                  v = Object.assign(v, e.userSync);
                }),
                e.regRule(d.K$, "userSync config", function (e) {
                  if (!v.syncEnabled)
                    return { allow: !1, reason: "syncs are disabled" };
                  if (e[f.$k] === l.UL) {
                    var t = e[f.cx],
                      r = e[f.bp];
                    if (!n.canBidderRegisterSync(t, r))
                      return {
                        allow: !1,
                        reason: ""
                          .concat(t, " syncs are not enabled for ")
                          .concat(r),
                      };
                  }
                }),
                (n.registerSync = function (n, i, a) {
                  var u;
                  return c.has(i)
                    ? (0, o.ji)(
                        'already fired syncs for "'.concat(
                          i,
                          '", ignoring registerSync call'
                        )
                      )
                    : v.syncEnabled && (0, o.kJ)(t[n])
                    ? i
                      ? 0 !== v.syncsPerBidder &&
                        Number(s[i]) >= v.syncsPerBidder
                        ? (0, o.yN)(
                            'Number of user syncs exceeded for "'.concat(i, '"')
                          )
                        : void (
                            e.isAllowed(
                              d.K$,
                              (0, g.T)(
                                l.UL,
                                i,
                                ((u = {}),
                                (0, r.Z)(u, f.cx, n),
                                (0, r.Z)(u, f.IV, a),
                                u)
                              )
                            ) &&
                            (t[n].push([i, a]),
                            (s = (function (e, n) {
                              return e[n] ? (e[n] += 1) : (e[n] = 1), e;
                            })(s, i)))
                          )
                      : (0, o.yN)("Bidder is required for registering sync")
                    : (0, o.yN)(
                        'User sync type "'.concat(n, '" not supported')
                      );
                }),
                (n.bidderDone = c.add.bind(c)),
                (n.syncUsers = function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0;
                  if (e) return setTimeout(h, Number(e));
                  h();
                }),
                (n.triggerUserSyncs = function () {
                  v.enableOverride && n.syncUsers();
                }),
                (n.canBidderRegisterSync = function (e, n) {
                  return (
                    !v.filterSettings ||
                    !(function (e, n) {
                      var t = v.filterSettings;
                      if (
                        (function (e, n) {
                          if (e.all && e[n])
                            return (
                              (0, o.yN)(
                                'Detected presence of the "filterSettings.all" and "filterSettings.'.concat(
                                  n,
                                  '" in userSync config.  You cannot mix "all" with "iframe/image" configs; they are mutually exclusive.'
                                )
                              ),
                              !1
                            );
                          var t = e.all ? e.all : e[n],
                            r = e.all ? "all" : n;
                          if (!t) return !1;
                          var i = t.filter,
                            a = t.bidders;
                          return i && "include" !== i && "exclude" !== i
                            ? ((0, o.yN)(
                                'UserSync "filterSettings.'
                                  .concat(r, ".filter\" setting '")
                                  .concat(
                                    i,
                                    "' is not a valid option; use either 'include' or 'exclude'."
                                  )
                              ),
                              !1)
                            : !!(
                                "*" === a ||
                                (Array.isArray(a) &&
                                  a.length > 0 &&
                                  a.every(function (e) {
                                    return (0, o.d8)(e) && "*" !== e;
                                  }))
                              ) ||
                                ((0, o.yN)(
                                  'Detected an invalid setup in userSync "filterSettings.'.concat(
                                    r,
                                    ".bidders\"; use either '*' (to represent all bidders) or an array of bidders."
                                  )
                                ),
                                !1);
                        })(t, e)
                      ) {
                        p[e] = !0;
                        var r = t.all ? t.all : t[e],
                          i = "*" === r.bidders ? [n] : r.bidders,
                          a = {
                            include: function (e, n) {
                              return !(0, u.q9)(e, n);
                            },
                            exclude: function (e, n) {
                              return (0, u.q9)(e, n);
                            },
                          };
                        return a[r.filter || "include"](i, n);
                      }
                      return !p[e];
                    })(e, n)
                  );
                }),
                n
              );
            })(
              Object.defineProperties(
                {
                  config: a.vc.getConfig("userSync"),
                  isAllowed: s.xD,
                  regRule: s.oB,
                },
                {
                  browserSupportsCookies: {
                    get: function () {
                      return !(0, o.fr)() && p.cookiesAreEnabled();
                    },
                  },
                }
              )
            );
        },
        4358: function (e, n, t) {
          t.d(n, {
            $8: function () {
              return $;
            },
            AB: function () {
              return fe;
            },
            D9: function () {
              return Pe;
            },
            DO: function () {
              return E;
            },
            Ee: function () {
              return Se;
            },
            FS: function () {
              return me;
            },
            H: function () {
              return x;
            },
            HC: function () {
              return Oe;
            },
            HP: function () {
              return Re;
            },
            I8: function () {
              return ue;
            },
            IG: function () {
              return pe;
            },
            LQ: function () {
              return H;
            },
            NA: function () {
              return te;
            },
            No: function () {
              return de;
            },
            Ob: function () {
              return k;
            },
            PN: function () {
              return P;
            },
            PO: function () {
              return L;
            },
            Q2: function () {
              return Ie;
            },
            R_: function () {
              return X;
            },
            Re: function () {
              return O;
            },
            S0: function () {
              return ye;
            },
            T9: function () {
              return ie;
            },
            TV: function () {
              return ae;
            },
            U: function () {
              return Te;
            },
            Vs: function () {
              return Y;
            },
            X4: function () {
              return oe;
            },
            Zy: function () {
              return B;
            },
            _R: function () {
              return Ue;
            },
            _d: function () {
              return T;
            },
            ak: function () {
              return N;
            },
            bd: function () {
              return le;
            },
            d8: function () {
              return M;
            },
            e7: function () {
              return S;
            },
            ei: function () {
              return Ee;
            },
            en: function () {
              return je;
            },
            fr: function () {
              return se;
            },
            hj: function () {
              return W;
            },
            hq: function () {
              return Q;
            },
            iG: function () {
              return be;
            },
            jC: function () {
              return J;
            },
            jH: function () {
              return G;
            },
            ji: function () {
              return R;
            },
            jn: function () {
              return z;
            },
            kJ: function () {
              return F;
            },
            oV: function () {
              return we;
            },
            or: function () {
              return Ae;
            },
            pP: function () {
              return re;
            },
            qp: function () {
              return Z;
            },
            ry: function () {
              return De;
            },
            sF: function () {
              return j;
            },
            tT: function () {
              return ee;
            },
            u2: function () {
              return m;
            },
            vM: function () {
              return he;
            },
            wn: function () {
              return ge;
            },
            xH: function () {
              return ne;
            },
            xb: function () {
              return K;
            },
            yL: function () {
              return ce;
            },
            yN: function () {
              return D;
            },
            yx: function () {
              return ve;
            },
            zV: function () {
              return Ce;
            },
          });
          var r,
            i = t(9062),
            o = t(4942),
            a = t(3324),
            u = t(1002),
            c = t(3193),
            s = t(7079),
            d = t.n(s),
            f = t(4614),
            l = t(5644),
            g = t(8792),
            p = t(8640),
            v = Object.prototype.toString,
            h = Boolean(window.console),
            b =
              (Boolean(h && window.console.log),
              Boolean(h && window.console.info),
              Boolean(h && window.console.warn),
              Boolean(h && window.console.error),
              (0, p.R)());
          function m(e) {
            r = e;
          }
          function y() {
            null != r && r.apply(void 0, arguments);
          }
          var w,
            C = {
              checkCookieSupport: pe,
              createTrackPixelIframeHtml: function (e) {
                var n =
                    !(arguments.length > 1 && void 0 !== arguments[1]) ||
                    arguments[1],
                  t =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : "";
                return e
                  ? (n && (e = encodeURI(e)),
                    t && (t = 'sandbox="'.concat(t, '"')),
                    "<iframe "
                      .concat(t, ' id="')
                      .concat(
                        T(),
                        '"\n      frameborder="0"\n      allowtransparency="true"\n      marginheight="0" marginwidth="0"\n      width="0" hspace="0" vspace="0" height="0"\n      style="height:0px;width:0px;display:none;"\n      scrolling="no"\n      src="'
                      )
                      .concat(e, '">\n    </iframe>'))
                  : "";
              },
              getWindowSelf: S,
              getWindowTop: B,
              getWindowLocation: U,
              insertUserSyncIframe: Y,
              insertElement: J,
              isFn: H,
              triggerPixel: Q,
              logError: x,
              logWarn: D,
              logMessage: R,
              logInfo: P,
              parseQS: ke,
              formatQS: function (e) {
                return Object.keys(e)
                  .map(function (n) {
                    return Array.isArray(e[n])
                      ? e[n]
                          .map(function (e) {
                            return "".concat(n, "[]=").concat(e);
                          })
                          .join("&")
                      : "".concat(n, "=").concat(e[n]);
                  })
                  .join("&");
              },
              deepEqual: Be,
            },
            A =
              ((w = 0),
              function () {
                return ++w;
              });
          function T() {
            return A() + Math.random().toString(16).substr(2);
          }
          function E(e) {
            return e
              ? (
                  e ^
                  ((window && window.crypto && window.crypto.getRandomValues
                    ? crypto.getRandomValues(new Uint8Array(1))[0] % 16
                    : 16 * Math.random()) >>
                    (e / 4))
                ).toString(16)
              : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, E);
          }
          function O(e) {
            var n = "";
            for (var t in e)
              e.hasOwnProperty(t) &&
                (n += t + "=" + encodeURIComponent(e[t]) + "&");
            return (n = n.replace(/&$/, ""));
          }
          function k(e) {
            return e && Object.getOwnPropertyNames(e).length > 0
              ? Object.keys(e)
                  .map(function (n) {
                    return "".concat(n, "=").concat(encodeURIComponent(e[n]));
                  })
                  .join("&")
              : "";
          }
          function j(e) {
            return "string" == typeof e
              ? e.split(",").filter(function (e) {
                  return e.match(/^(\d)+x(\d)+$/i);
                })
              : "object" === (0, u.Z)(e)
              ? 2 === e.length &&
                "number" == typeof e[0] &&
                "number" == typeof e[1]
                ? [I(e)]
                : e.map(I)
              : [];
          }
          function I(e) {
            if (
              (function (e) {
                return F(e) && 2 === e.length && !isNaN(e[0]) && !isNaN(e[1]);
              })(e)
            )
              return e[0] + "x" + e[1];
          }
          function B() {
            return window.top;
          }
          function S() {
            return window.self;
          }
          function U() {
            return window.location;
          }
          function R() {
            _();
          }
          function P() {
            _();
          }
          function D() {
            _(),
              y(l.FP.AUCTION_DEBUG, { type: "WARNING", arguments: arguments });
          }
          function x() {
            _(), y(l.FP.AUCTION_DEBUG, { type: "ERROR", arguments: arguments });
          }
          function Z(e) {
            function n(n) {
              return function () {
                for (
                  var t = arguments.length, r = new Array(t), i = 0;
                  i < t;
                  i++
                )
                  r[i] = arguments[i];
                n.apply(void 0, [e].concat(r));
              };
            }
            return {
              logError: n(x),
              logWarn: n(D),
              logMessage: n(R),
              logInfo: n(P),
            };
          }
          function _() {
            return !!c.vc.getConfig("debug");
          }
          function N(e) {
            return ke(U().search)[e] || "";
          }
          function q(e, n) {
            return v.call(e) === "[object " + n + "]";
          }
          function H(e) {
            return q(e, "Function");
          }
          function M(e) {
            return q(e, "String");
          }
          var F = Array.isArray.bind(Array);
          function W(e) {
            return q(e, "Number");
          }
          function L(e) {
            return q(e, "Object");
          }
          function z(e) {
            return q(e, "Boolean");
          }
          function K(e) {
            return (
              !e ||
              (F(e) || M(e) ? !(e.length > 0) : Object.keys(e).length <= 0)
            );
          }
          function G(e) {
            return M(e) && (!e || 0 === e.length);
          }
          function J(e, n, t, r) {
            var i;
            (n = n || document),
              (i = t
                ? n.getElementsByTagName(t)
                : n.getElementsByTagName("head"));
            try {
              if ((i = i.length ? i : n.getElementsByTagName("body")).length) {
                i = i[0];
                var o = r ? null : i.firstChild;
                return i.insertBefore(e, o);
              }
            } catch (e) {}
          }
          function V(e, n) {
            var t = null;
            return new g.Z(function (r) {
              var i = function n() {
                e.removeEventListener("load", n),
                  e.removeEventListener("error", n),
                  null != t && window.clearTimeout(t),
                  r();
              };
              e.addEventListener("load", i),
                e.addEventListener("error", i),
                null != n && (t = window.setTimeout(i, n));
            });
          }
          function Q(e, n, t) {
            var r = new Image();
            n && C.isFn(n) && V(r, t).then(n), (r.src = e);
          }
          function X(e) {
            var n = e.source,
              t = e.burl;
            n === l.os.YZ && t && C.triggerPixel(t);
          }
          function $(e) {
            if (e) {
              var n,
                t,
                r =
                  (((n = document.createElement("iframe")).id = T()),
                  (n.height = 0),
                  (n.width = 0),
                  (n.border = "0px"),
                  (n.hspace = "0"),
                  (n.vspace = "0"),
                  (n.marginWidth = "0"),
                  (n.marginHeight = "0"),
                  (n.style.border = "0"),
                  (n.scrolling = "no"),
                  (n.frameBorder = "0"),
                  (n.src = "about:blank"),
                  (n.style.display = "none"),
                  (n.style.height = "0px"),
                  (n.style.width = "0px"),
                  (n.allowtransparency = "true"),
                  n);
              C.insertElement(r, document, "body"),
                (t = r.contentWindow.document).open(),
                t.write(e),
                t.close();
            }
          }
          function Y(e, n, t) {
            var r = C.createTrackPixelIframeHtml(
                e,
                !1,
                "allow-scripts allow-same-origin"
              ),
              i = document.createElement("div");
            i.innerHTML = r;
            var o = i.firstChild;
            n && C.isFn(n) && V(o, t).then(n),
              C.insertElement(o, document, "html", !0);
          }
          function ee(e, n, t) {
            return t.indexOf(e) === n;
          }
          function ne(e, n) {
            return e.concat(n);
          }
          function te(e, n) {
            return e[n];
          }
          function re() {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : b.adUnits;
            return e
              .map(function (e) {
                return e.bids
                  .map(function (e) {
                    return e.bidder;
                  })
                  .reduce(ne, []);
              })
              .reduce(ne, [])
              .filter(function (e) {
                return void 0 !== e;
              })
              .filter(ee);
          }
          function ie() {
            if (
              window.googletag &&
              H(window.googletag.pubads) &&
              H(window.googletag.pubads().getSlots)
            )
              return !0;
          }
          function oe() {
            if (window.apntag && H(window.apntag.getTag)) return !0;
          }
          function ae(e) {
            for (var n = e.length; n > 0; ) {
              var t = Math.floor(Math.random() * n),
                r = e[--n];
              (e[n] = e[t]), (e[t] = r);
            }
            return e;
          }
          function ue(e) {
            return d()(e);
          }
          function ce() {
            try {
              return C.getWindowSelf() !== C.getWindowTop();
            } catch (e) {
              return !0;
            }
          }
          function se() {
            return /^((?!chrome|android|crios|fxios).)*safari/i.test(
              navigator.userAgent
            );
          }
          function de(e, n) {
            if (e)
              return Object.entries(n).reduce(function (e, n) {
                var t = (0, a.Z)(n, 2),
                  r = t[0],
                  i = t[1];
                return e.replace(
                  new RegExp("\\$\\{" + r + "\\}", "g"),
                  i || ""
                );
              }, e);
          }
          function fe() {
            return new Date().getTime();
          }
          function le() {
            return (
              (window.performance &&
                window.performance.now &&
                window.performance.now()) ||
              0
            );
          }
          function ge() {
            return !1 !== c.vc.getConfig("deviceAccess");
          }
          function pe() {
            if (window.navigator.cookieEnabled || document.cookie.length)
              return !0;
          }
          function ve(e, n) {
            if (n < 1)
              throw new Error(
                "numRequiredCalls must be a positive number. Got ".concat(n)
              );
            var t = 0;
            return function () {
              ++t === n && e.apply(this, arguments);
            };
          }
          function he(e, n) {
            return e.reduce(function (e, t) {
              return (e[t[n]] = e[t[n]] || []).push(t), e;
            }, {});
          }
          function be(e, n) {
            return n
              .filter(function (n) {
                return e[n];
              })
              .reduce(function (n, t) {
                return Object.assign(n, (0, o.Z)({}, t, e[t]));
              }, {});
          }
          function me(e) {
            var n = ["banner", "native", "video"];
            return (
              !!Object.keys(e).every(function (e) {
                return (0, f.q9)(n, e);
              }) &&
              (!e.video ||
                !e.video.context ||
                (0, f.q9)(["instream", "outstream", "adpod"], e.video.context))
            );
          }
          function ye(e, n, t) {
            return e
              .filter(function (e) {
                return e.code === n;
              })
              .flatMap(function (e) {
                return e.bids;
              })
              .filter(function (e) {
                return e.bidder === t;
              })
              .map(function (e) {
                return e.params || {};
              });
          }
          function we() {
            return (
              "1" === navigator.doNotTrack ||
              "1" === window.doNotTrack ||
              "1" === navigator.msDoNotTrack ||
              "yes" === navigator.doNotTrack
            );
          }
          function Ce(e) {
            return function (n) {
              return (function (e, n) {
                return e.getAdUnitPath() === n || e.getSlotElementId() === n;
              })(e, n);
            };
          }
          function Ae(e, n) {
            var t = Object.keys(e.mediaTypes || { banner: "banner" }).join(
              ", "
            );
            return "\n    "
              .concat(e.code, " is a ")
              .concat(t, " ad unit\n    containing bidders that don't support ")
              .concat(t, ": ")
              .concat(n, ".\n    This bidder won't fetch demand.\n  ");
          }
          var Te = Number.isInteger.bind(Number);
          function Ee(e, n) {
            return "object" !== (0, u.Z)(e)
              ? {}
              : n.reduce(function (t, r, i) {
                  if ("function" == typeof r) return t;
                  var o = r,
                    a = r.match(/^(.+?)\sas\s(.+?)$/i);
                  a && ((r = a[1]), (o = a[2]));
                  var u = e[r];
                  return (
                    "function" == typeof n[i + 1] && (u = n[i + 1](u, t)),
                    void 0 !== u && (t[o] = u),
                    t
                  );
                }, {});
          }
          function Oe(e, n) {
            return (
              F(e) &&
              (!n || e.length === n) &&
              e.every(function (e) {
                return Te(e);
              })
            );
          }
          function ke(e) {
            return e
              ? e
                  .replace(/^\?/, "")
                  .split("&")
                  .reduce(function (e, n) {
                    var t = n.split("="),
                      r = (0, a.Z)(t, 2),
                      i = r[0],
                      o = r[1];
                    return (
                      /\[\]$/.test(i)
                        ? ((e[(i = i.replace("[]", ""))] = e[i] || []),
                          e[i].push(o))
                        : (e[i] = o || ""),
                      e
                    );
                  }, {})
              : {};
          }
          function je(e, n) {
            var t = document.createElement("a");
            n && "noDecodeWholeURL" in n && n.noDecodeWholeURL
              ? (t.href = e)
              : (t.href = decodeURIComponent(e));
            var r = n && "decodeSearchAsString" in n && n.decodeSearchAsString;
            return {
              href: t.href,
              protocol: (t.protocol || "").replace(/:$/, ""),
              hostname: t.hostname,
              port: +t.port,
              pathname: t.pathname.replace(/^(?!\/)/, "/"),
              search: r ? t.search : C.parseQS(t.search || ""),
              hash: (t.hash || "").replace(/^#/, ""),
              host: t.host || window.location.host,
            };
          }
          function Ie(e) {
            return (
              (e.protocol || "http") +
              "://" +
              (e.host || e.hostname + (e.port ? ":".concat(e.port) : "")) +
              (e.pathname || "") +
              (e.search ? "?".concat(C.formatQS(e.search || "")) : "") +
              (e.hash ? "#".concat(e.hash) : "")
            );
          }
          function Be(e, n) {
            var t =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              r = t.checkTypes,
              i = void 0 !== r && r;
            if (e === n) return !0;
            if (
              "object" !== (0, u.Z)(e) ||
              null === e ||
              "object" !== (0, u.Z)(n) ||
              null === n ||
              (i && e.constructor !== n.constructor)
            )
              return !1;
            if (Object.keys(e).length !== Object.keys(n).length) return !1;
            for (var o in e) {
              if (!n.hasOwnProperty(o)) return !1;
              if (!Be(e[o], n[o], { checkTypes: i })) return !1;
            }
            return !0;
          }
          function Se(e) {
            for (
              var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1;
              r < n;
              r++
            )
              t[r - 1] = arguments[r];
            if (!t.length) return e;
            var a = t.shift();
            if (L(e) && L(a)) {
              var u = function (n) {
                L(a[n])
                  ? (e[n] || Object.assign(e, (0, o.Z)({}, n, {})),
                    Se(e[n], a[n]))
                  : F(a[n])
                  ? e[n]
                    ? F(e[n]) &&
                      a[n].forEach(function (t) {
                        for (var r = 1, i = 0; i < e[n].length; i++)
                          if (Be(e[n][i], t)) {
                            r = 0;
                            break;
                          }
                        r && e[n].push(t);
                      })
                    : Object.assign(e, (0, o.Z)({}, n, (0, i.Z)(a[n])))
                  : Object.assign(e, (0, o.Z)({}, n, a[n]));
              };
              for (var c in a) u(c);
            }
            return Se.apply(void 0, [e].concat(t));
          }
          function Ue(e) {
            for (
              var n,
                t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 0,
                r = function (e, n) {
                  if (H(Math.imul)) return Math.imul(e, n);
                  var t = (4194303 & e) * (n |= 0);
                  return (
                    4290772992 & e && (t += ((4290772992 & e) * n) | 0), 0 | t
                  );
                },
                i = 3735928559 ^ t,
                o = 1103547991 ^ t,
                a = 0;
              a < e.length;
              a++
            )
              (i = r(i ^ (n = e.charCodeAt(a)), 2654435761)),
                (o = r(o ^ n, 1597334677));
            return (
              (i =
                r(i ^ (i >>> 16), 2246822507) ^ r(o ^ (o >>> 13), 3266489909)),
              (
                4294967296 *
                  (2097151 &
                    (o =
                      r(o ^ (o >>> 16), 2246822507) ^
                      r(i ^ (i >>> 13), 3266489909))) +
                (i >>> 0)
              ).toString()
            );
          }
          function Re(e) {
            var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : function (e) {
                      return e;
                    },
              t = new Map(),
              r = function () {
                var r = n.apply(this, arguments);
                return t.has(r) || t.set(r, e.apply(this, arguments)), t.get(r);
              };
            return (r.clear = t.clear.bind(t)), r;
          }
          function Pe(e, n) {
            Object.entries(n).forEach(function (n) {
              var t = (0, a.Z)(n, 2),
                r = t[0],
                i = t[1];
              return e.setAttribute(r, i);
            });
          }
          function De(e, n) {
            for (
              var t =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : function (e) {
                        return e;
                      },
                r = 0,
                i = e.length && e.length - 1,
                o = t(n);
              i - r > 1;

            ) {
              var a = r + Math.round((i - r) / 2);
              o > t(e[a]) ? (r = a) : (i = a);
            }
            for (; e.length > r && o > t(e[r]); ) r++;
            return r;
          }
        },
        9128: function (e, n, t) {
          t.d(n, {
            Bf: function () {
              return h;
            },
            V6: function () {
              return m;
            },
          });
          var r = t(3324),
            i = t(3193);
          function o(e, n) {
            var t =
              ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
              e["@@iterator"];
            if (!t) {
              if (
                Array.isArray(e) ||
                (t = (function (e, n) {
                  if (e) {
                    if ("string" == typeof e) return a(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    return (
                      "Object" === t &&
                        e.constructor &&
                        (t = e.constructor.name),
                      "Map" === t || "Set" === t
                        ? Array.from(e)
                        : "Arguments" === t ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                        ? a(e, n)
                        : void 0
                    );
                  }
                })(e)) ||
                (n && e && "number" == typeof e.length)
              ) {
                t && (e = t);
                var r = 0,
                  i = function () {};
                return {
                  s: i,
                  n: function () {
                    return r >= e.length
                      ? { done: !0 }
                      : { done: !1, value: e[r++] };
                  },
                  e: function (e) {
                    throw e;
                  },
                  f: i,
                };
              }
              throw new TypeError(
                "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            }
            var o,
              u = !0,
              c = !1;
            return {
              s: function () {
                t = t.call(e);
              },
              n: function () {
                var e = t.next();
                return (u = e.done), e;
              },
              e: function (e) {
                (c = !0), (o = e);
              },
              f: function () {
                try {
                  u || null == t.return || t.return();
                } finally {
                  if (c) throw o;
                }
              },
            };
          }
          function a(e, n) {
            (null == n || n > e.length) && (n = e.length);
            for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
            return r;
          }
          var u = "performanceMetrics",
            c =
              window.performance && window.performance.now
                ? function () {
                    return window.performance.now();
                  }
                : function () {
                    return Date.now();
                  },
            s = new WeakMap();
          function d() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              n = e.now,
              t = void 0 === n ? c : n,
              r = e.mkNode,
              i = void 0 === r ? g : r,
              o = e.mkTimer,
              a = void 0 === o ? l : o,
              u = e.mkRenamer,
              d =
                void 0 === u
                  ? function (e) {
                      return e;
                    }
                  : u,
              f = e.nodes,
              p = void 0 === f ? s : f;
            return function () {
              return (function e(n) {
                var r =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : function (e) {
                        return {
                          forEach: function (n) {
                            n(e);
                          },
                        };
                      };
                function o(e) {
                  return function (t) {
                    return n.dfWalk({
                      visit: function (n, r) {
                        var i = r[e];
                        if (i.hasOwnProperty(t)) return i[t];
                      },
                    });
                  };
                }
                r = d(r);
                var u = o("timestamps");
                function c(e, t) {
                  var i = r(e);
                  n.dfWalk({
                    follow: function (e, n) {
                      return n.propagate && (!e || !e.stopPropagation);
                    },
                    visit: function (e, n) {
                      i.forEach(function (r) {
                        null == e
                          ? (n.metrics[r] = t)
                          : (n.groups.hasOwnProperty(r) || (n.groups[r] = []),
                            n.groups[r].push(t));
                      });
                    },
                  });
                }
                function s(e) {
                  n.timestamps[e] = t();
                }
                function f(e, n) {
                  var r = u(e),
                    i = null != r ? t() - r : null;
                  return null != n && c(n, i), i;
                }
                function l(e, n, t) {
                  var r = u(e),
                    i = u(n),
                    o = null != r && null != i ? i - r : null;
                  return null != t && c(t, o), o;
                }
                function g(e) {
                  return a(t, function (n) {
                    return c(e, n);
                  });
                }
                function v(e, n) {
                  return g(e).stopAfter(n)();
                }
                function h(e, n, t) {
                  var r = g(e);
                  return t(
                    (function (e) {
                      var n = r.stopBefore(e);
                      return (
                        (n.bail = e.bail && r.stopBefore(e.bail)),
                        (n.stopTiming = r),
                        (n.untimed = e),
                        n
                      );
                    })(n)
                  );
                }
                function b() {
                  var e = {};
                  return (
                    n.dfWalk({
                      visit: function (n, t) {
                        e = Object.assign(
                          {},
                          !n || n.includeGroups ? t.groups : null,
                          t.metrics,
                          e
                        );
                      },
                    }),
                    e
                  );
                }
                function m() {
                  var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    o = t.propagate,
                    a = void 0 === o || o,
                    u = t.stopPropagation,
                    c = void 0 !== u && u,
                    s = t.includeGroups,
                    d = void 0 !== s && s;
                  return e(
                    i([
                      [
                        n,
                        { propagate: a, stopPropagation: c, includeGroups: d },
                      ],
                    ]),
                    r
                  );
                }
                function y(e) {
                  var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    r = t.propagate,
                    i = void 0 === r || r,
                    o = t.stopPropagation,
                    a = void 0 !== o && o,
                    u = t.includeGroups,
                    c = void 0 !== u && u,
                    s = p.get(e);
                  null != s &&
                    s.addParent(n, {
                      propagate: i,
                      stopPropagation: a,
                      includeGroups: c,
                    });
                }
                function w(t) {
                  return e(n, t);
                }
                function C() {
                  return e(n.newSibling(), r);
                }
                var A = {
                  startTiming: g,
                  measureTime: v,
                  measureHookTime: h,
                  checkpoint: s,
                  timeSince: f,
                  timeBetween: l,
                  setMetric: c,
                  getMetrics: b,
                  fork: m,
                  join: y,
                  newMetrics: C,
                  renameWith: w,
                  toJSON: function () {
                    return b();
                  },
                };
                return p.set(A, n), A;
              })(i([]));
            };
          }
          function f(e, n, t) {
            return function () {
              n && n();
              try {
                return e.apply(this, arguments);
              } finally {
                t && t();
              }
            };
          }
          function l(e, n) {
            var t = e(),
              r = !1;
            function i() {
              r || (n(e() - t), (r = !0));
            }
            return (
              (i.stopBefore = function (e) {
                return f(e, i);
              }),
              (i.stopAfter = function (e) {
                return f(e, null, i);
              }),
              i
            );
          }
          function g(e) {
            return {
              metrics: {},
              timestamps: {},
              groups: {},
              addParent: function (n, t) {
                e.push([n, t]);
              },
              newSibling: function () {
                return g(e.slice());
              },
              dfWalk: function () {
                var n,
                  t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  i = t.visit,
                  a = t.follow,
                  u =
                    void 0 === a
                      ? function () {
                          return !0;
                        }
                      : a,
                  c = t.visited,
                  s = void 0 === c ? new Set() : c,
                  d = t.inEdge;
                if (!s.has(this)) {
                  if ((s.add(this), null != (n = i(d, this)))) return n;
                  var f,
                    l = o(e);
                  try {
                    for (l.s(); !(f = l.n()).done; ) {
                      var g = (0, r.Z)(f.value, 2),
                        p = g[0],
                        v = g[1];
                      if (
                        u(d, v) &&
                        null !=
                          (n = p.dfWalk({
                            visit: i,
                            follow: u,
                            visited: s,
                            inEdge: v,
                          }))
                      )
                        return n;
                    }
                  } catch (e) {
                    l.e(e);
                  } finally {
                    l.f();
                  }
                }
              },
            };
          }
          var p = (function () {
              var e = function () {},
                n = function () {
                  return {};
                },
                t = { forEach: e },
                r = function () {
                  return null;
                };
              (r.stopBefore = function (e) {
                return e;
              }),
                (r.stopAfter = function (e) {
                  return e;
                });
              var i = Object.defineProperties(
                {
                  dfWalk: e,
                  newSibling: function () {
                    return i;
                  },
                  addParent: e,
                },
                Object.fromEntries(
                  ["metrics", "timestamps", "groups"].map(function (e) {
                    return [e, { get: n }];
                  })
                )
              );
              return d({
                now: function () {
                  return 0;
                },
                mkNode: function () {
                  return i;
                },
                mkRenamer: function () {
                  return function () {
                    return t;
                  };
                },
                mkTimer: function () {
                  return r;
                },
                nodes: { get: e, set: e },
              })();
            })(),
            v = !0;
          function h(e) {
            return (v && e) || p;
          }
          i.vc.getConfig(u, function (e) {
            v = !!e[u];
          });
          var b,
            m =
              ((b = d()),
              function () {
                return v ? b() : p;
              });
          function y(e, n) {
            return function (t, r) {
              return function (i) {
                for (
                  var o = arguments.length,
                    a = new Array(o > 1 ? o - 1 : 0),
                    u = 1;
                  u < o;
                  u++
                )
                  a[u - 1] = arguments[u];
                var c = this;
                return h(n.apply(c, a)).measureHookTime(e + t, i, function (e) {
                  return r.call.apply(r, [c, e].concat(a));
                });
              };
            };
          }
          y("requestBids.", function (e) {
            return e.metrics;
          }),
            y("addBidResponse.", function (e, n) {
              return n.metrics;
            });
        },
        8792: function (e, n, t) {
          t.d(n, {
            P: function () {
              return h;
            },
            Z: function () {
              return p;
            },
          });
          var r = t(3324),
            i = t(5671),
            o = t(3144),
            a = t(8916),
            u = t(2793);
          function c(e, n, t) {
            !(function (e, n) {
              if (n.has(e))
                throw new TypeError(
                  "Cannot initialize the same private elements twice on an object"
                );
            })(e, n),
              n.set(e, t);
          }
          function s(e, n, t) {
            return (
              (function (e, n) {
                if (e !== n)
                  throw new TypeError(
                    "Private static access of wrong provenance"
                  );
              })(e, n),
              t
            );
          }
          var d = 0,
            f = 1,
            l = new WeakMap(),
            g = new WeakMap(),
            p = (function () {
              function e(n) {
                if (
                  ((0, i.Z)(this, e),
                  c(this, l, { writable: !0, value: void 0 }),
                  c(this, g, { writable: !0, value: void 0 }),
                  "function" != typeof n)
                )
                  throw new Error("resolver not a function");
                var t = [],
                  o = [],
                  a = [d, f].map(function (e) {
                    return function (n) {
                      if (
                        e === d &&
                        "function" == typeof (null == n ? void 0 : n.then)
                      )
                        n.then(p, v);
                      else if (!t.length)
                        for (t.push(e, n); o.length; ) o.shift()();
                    };
                  }),
                  s = (0, r.Z)(a, 2),
                  p = s[0],
                  v = s[1];
                try {
                  n(p, v);
                } catch (e) {
                  v(e);
                }
                (0, u.Z)(this, l, t), (0, u.Z)(this, g, o);
              }
              return (
                (0, o.Z)(
                  e,
                  [
                    {
                      key: "then",
                      value: function (e, n) {
                        var t = this,
                          i = (0, a.Z)(this, l);
                        return new this.constructor(function (o, u) {
                          var c = function () {
                            var t = i[1],
                              a = i[0] === d ? [e, o] : [n, u],
                              c = (0, r.Z)(a, 2),
                              s = c[0],
                              f = c[1];
                            if ("function" == typeof s) {
                              try {
                                t = s(t);
                              } catch (e) {
                                return void u(e);
                              }
                              f = o;
                            }
                            f(t);
                          };
                          i.length ? c() : (0, a.Z)(t, g).push(c);
                        });
                      },
                    },
                    {
                      key: "catch",
                      value: function (e) {
                        return this.then(null, e);
                      },
                    },
                    {
                      key: "finally",
                      value: function (e) {
                        var n,
                          t = this;
                        return this.then(
                          function (t) {
                            return (n = t), e();
                          },
                          function (r) {
                            return (n = t.constructor.reject(r)), e();
                          }
                        ).then(function () {
                          return n;
                        });
                      },
                    },
                  ],
                  [
                    {
                      key: "timeout",
                      value: function () {
                        var n =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : 0;
                        return new e(function (e) {
                          0 === n ? e() : setTimeout(e, n);
                        });
                      },
                    },
                    {
                      key: "race",
                      value: function (n) {
                        var t = this;
                        return new this(function (r, i) {
                          s(t, e, v).call(t, n, function (e, n) {
                            return e ? r(n) : i(n);
                          });
                        });
                      },
                    },
                    {
                      key: "all",
                      value: function (n) {
                        var t = this;
                        return new this(function (r, i) {
                          var o = [];
                          s(t, e, v).call(
                            t,
                            n,
                            function (e, n, t) {
                              return e ? (o[t] = n) : i(n);
                            },
                            function () {
                              return r(o);
                            }
                          );
                        });
                      },
                    },
                    {
                      key: "allSettled",
                      value: function (n) {
                        var t = this;
                        return new this(function (r) {
                          var i = [];
                          s(t, e, v).call(
                            t,
                            n,
                            function (e, n, t) {
                              return (i[t] = e
                                ? { status: "fulfilled", value: n }
                                : { status: "rejected", reason: n });
                            },
                            function () {
                              return r(i);
                            }
                          );
                        });
                      },
                    },
                    {
                      key: "resolve",
                      value: function (e) {
                        return new this(function (n) {
                          return n(e);
                        });
                      },
                    },
                    {
                      key: "reject",
                      value: function (e) {
                        return new this(function (n, t) {
                          return t(e);
                        });
                      },
                    },
                  ]
                ),
                e
              );
            })();
          function v(e, n, t) {
            var r = this,
              i = e.length;
            function o() {
              n.apply(this, arguments), --i <= 0 && t && t();
            }
            0 === e.length && t
              ? t()
              : e.forEach(function (e, n) {
                  return r.resolve(e).then(
                    function (e) {
                      return o(!0, e, n);
                    },
                    function (e) {
                      return o(!1, e, n);
                    }
                  );
                });
          }
          function h() {
            var e,
              n,
              t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              r = t.promiseFactory,
              i =
                void 0 === r
                  ? function (e) {
                      return new p(e);
                    }
                  : r;
            function o(e) {
              return function (n) {
                return e(n);
              };
            }
            return {
              promise: i(function (t, r) {
                (e = t), (n = r);
              }),
              resolve: o(e),
              reject: o(n),
            };
          }
        },
        613: function (e, n, t) {
          t.d(n, {
            Z: function () {
              return s;
            },
          });
          var r = t(4942),
            i = t(3324),
            o = t(8792),
            a = t(4358);
          function u(e, n) {
            var t =
              ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
              e["@@iterator"];
            if (!t) {
              if (
                Array.isArray(e) ||
                (t = (function (e, n) {
                  if (e) {
                    if ("string" == typeof e) return c(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    return (
                      "Object" === t &&
                        e.constructor &&
                        (t = e.constructor.name),
                      "Map" === t || "Set" === t
                        ? Array.from(e)
                        : "Arguments" === t ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                        ? c(e, n)
                        : void 0
                    );
                  }
                })(e)) ||
                (n && e && "number" == typeof e.length)
              ) {
                t && (e = t);
                var r = 0,
                  i = function () {};
                return {
                  s: i,
                  n: function () {
                    return r >= e.length
                      ? { done: !0 }
                      : { done: !1, value: e[r++] };
                  },
                  e: function (e) {
                    throw e;
                  },
                  f: i,
                };
              }
              throw new TypeError(
                "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            }
            var o,
              a = !0,
              u = !1;
            return {
              s: function () {
                t = t.call(e);
              },
              n: function () {
                var e = t.next();
                return (a = e.done), e;
              },
              e: function (e) {
                (u = !0), (o = e);
              },
              f: function () {
                try {
                  a || null == t.return || t.return();
                } finally {
                  if (u) throw o;
                }
              },
            };
          }
          function c(e, n) {
            (null == n || n > e.length) && (n = e.length);
            for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
            return r;
          }
          function s() {
            var e,
              n,
              t,
              c =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              s = c.startTime,
              d = void 0 === s ? a.AB : s,
              f = c.ttl,
              l =
                void 0 === f
                  ? function () {
                      return null;
                    }
                  : f,
              g = c.monotonic,
              p = void 0 !== g && g,
              v = c.slack,
              h = void 0 === v ? 5e3 : v,
              b = new Map(),
              m = [],
              y = p
                ? function (e) {
                    return m.push(e);
                  }
                : function (e) {
                    return m.splice(
                      (0, a.ry)(m, e, function (e) {
                        return e.expiry;
                      }),
                      0,
                      e
                    );
                  };
            function w() {
              if ((t && clearTimeout(t), m.length > 0)) {
                var e = (0, a.AB)();
                (n = Math.max(e, m[0].expiry + h)),
                  (t = setTimeout(function () {
                    for (
                      var e = (0, a.AB)(), n = 0, r = 0, i = m;
                      r < i.length;
                      r++
                    ) {
                      var o = i[r];
                      if (o.expiry > e) break;
                      b.delete(o.item), n++;
                    }
                    m.splice(0, n), (t = null), w();
                  }, n - e));
              } else t = null;
            }
            function C(e) {
              var r,
                a = {},
                u = A,
                c = Object.entries({ start: d, delta: l }).map(function (c) {
                  var s,
                    d = (0, i.Z)(c, 2),
                    f = d[0],
                    l = d[1];
                  return function () {
                    var i = (s = {});
                    o.Z.resolve(l(e)).then(function (e) {
                      i === s &&
                        ((a[f] = e),
                        u === A &&
                          null != a.start &&
                          null != a.delta &&
                          ((r = a.start + a.delta),
                          y(p),
                          (null == t || n > r + h) && w()));
                    });
                  };
                }),
                s = (0, i.Z)(c, 2),
                f = s[0],
                g = s[1],
                p = {
                  item: e,
                  refresh: g,
                  get expiry() {
                    return r;
                  },
                };
              return f(), g(), p;
            }
            var A = {};
            return (
              (e = {}),
              (0, r.Z)(e, Symbol.iterator, function () {
                return b.keys();
              }),
              (0, r.Z)(e, "add", function (e) {
                !b.has(e) && b.set(e, C(e));
              }),
              (0, r.Z)(e, "clear", function () {
                (m.length = 0), w(), b.clear(), (A = {});
              }),
              (0, r.Z)(e, "toArray", function () {
                return Array.from(b.keys());
              }),
              (0, r.Z)(e, "refresh", function () {
                (m.length = 0), w();
                var e,
                  n = u(b.values());
                try {
                  for (n.s(); !(e = n.n()).done; ) e.value.refresh();
                } catch (e) {
                  n.e(e);
                } finally {
                  n.f();
                }
              }),
              e
            );
          }
        },
        154: function (e, n, t) {
          t.d(n, {
            Dn: function () {
              return d;
            },
            cx: function () {
              return s;
            },
            gZ: function () {
              return c;
            },
          });
          var r = t(265),
            i = t(4358),
            o = t(3193),
            a = t(2797),
            u = t(1176),
            c = "outstream";
          function s(e) {
            var n,
              t =
                null == e || null === (n = e.mediaTypes) || void 0 === n
                  ? void 0
                  : n.video;
            null != t &&
              null == t.plcmt &&
              (t.context === c || [2, 3, 4].includes(t.placement)
                ? (t.plcmt = 4)
                : t.context !== c &&
                  [2, 6].includes(t.playbackmethod) &&
                  (t.plcmt = 2));
          }
          function d(e) {
            var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              t = n.index,
              i = void 0 === t ? u.K.index : t,
              o = (0, r.Z)(i.getMediaTypes(e), "video"),
              a = o && (0, r.Z)(o, "context"),
              c = o && (0, r.Z)(o, "useCacheKey"),
              s = i.getAdUnit(e);
            return f(e, s, o, a, c);
          }
          var f = (0, a.z3)(
            "sync",
            function (e, n, t, r, a) {
              return t && (a || r !== c)
                ? o.vc.getConfig("cache.url") || !e.vastXml || e.vastUrl
                  ? !(!e.vastUrl && !e.vastXml)
                  : ((0, i.H)(
                      '\n        This bid contains only vastXml and will not work when a prebid cache url is not specified.\n        Try enabling prebid cache with pbjs.setConfig({ cache: {url: "..."} });\n      '
                    ),
                    !1)
                : !(
                    r === c &&
                    !a &&
                    !(e.renderer || (n && n.renderer) || t.renderer)
                  );
            },
            "checkVideoBidSetup"
          );
        },
        265: function (e, n, t) {
          function r(e, n, t, r, i) {
            for (n = n.split ? n.split(".") : n, r = 0; r < n.length; r++)
              e = e ? e[n[r]] : i;
            return e === i ? t : e;
          }
          t.d(n, {
            Z: function () {
              return r;
            },
          });
        },
        1432: function (e) {
          /*
           * @license MIT
           * Fun Hooks v0.9.10
           * (c) @snapwich
           */
          (a.SYNC = 1), (a.ASYNC = 2), (a.QUEUE = 4);
          var n = Object.freeze({ useProxy: !0, ready: 0 }),
            t = new WeakMap(),
            r =
              "2,1,0" ===
              [1]
                .reduce(function (e, n, t) {
                  return [e, n, t];
                }, 2)
                .toString()
                ? Array.prototype.reduce
                : function (e, n) {
                    var t,
                      r = Object(this),
                      i = r.length >>> 0,
                      o = 0;
                    if (n) t = n;
                    else {
                      for (; o < i && !(o in r); ) o++;
                      t = r[o++];
                    }
                    for (; o < i; ) o in r && (t = e(t, r[o], o, r)), o++;
                    return t;
                  };
          function i(e, n) {
            return Array.prototype.slice.call(e, n);
          }
          var o =
            Object.assign ||
            function (e) {
              return r.call(
                i(arguments, 1),
                function (e, n) {
                  return (
                    n &&
                      Object.keys(n).forEach(function (t) {
                        e[t] = n[t];
                      }),
                    e
                  );
                },
                e
              );
            };
          function a(e) {
            var u,
              c = {},
              s = [];
            function d(e, n) {
              return "function" == typeof e
                ? p.call(null, "sync", e, n)
                : "string" == typeof e && "function" == typeof n
                ? p.apply(null, arguments)
                : "object" == typeof e
                ? f.apply(null, arguments)
                : void 0;
            }
            function f(e, n, t) {
              var r = !0;
              void 0 === n && ((n = Object.getOwnPropertyNames(e)), (r = !1));
              var i = {},
                o = ["constructor"];
              do {
                (n = n.filter(function (n) {
                  return !(
                    "function" != typeof e[n] ||
                    -1 !== o.indexOf(n) ||
                    n.match(/^_/)
                  );
                })).forEach(function (n) {
                  var r = n.split(":"),
                    o = r[0],
                    a = r[1] || "sync";
                  if (!i[o]) {
                    var u = e[o];
                    i[o] = e[o] = p(a, u, t ? [t, o] : void 0);
                  }
                }),
                  (e = Object.getPrototypeOf(e));
              } while (r && e);
              return i;
            }
            function l(e) {
              var n = Array.isArray(e) ? e : e.split(".");
              return r.call(
                n,
                function (e, t, r) {
                  var i = e[t];
                  return (
                    i ||
                    (r === n.length - 1
                      ? (u || s.push(function () {}),
                        (e[t] = g(function (n) {
                          e[t] = n;
                        })))
                      : (e[t] = {}))
                  );
                },
                c
              );
            }
            function g(e) {
              var n = [],
                r = [],
                i = function () {},
                a = {
                  before: function (e, t) {
                    return c.call(this, n, "before", e, t);
                  },
                  after: function (e, n) {
                    return c.call(this, r, "after", e, n);
                  },
                  getHooks: function (e) {
                    var t = n.concat(r);
                    "object" == typeof e &&
                      (t = t.filter(function (n) {
                        return Object.keys(e).every(function (t) {
                          return n[t] === e[t];
                        });
                      }));
                    try {
                      o(t, {
                        remove: function () {
                          return (
                            t.forEach(function (e) {
                              e.remove();
                            }),
                            this
                          );
                        },
                      });
                    } catch (e) {}
                    return t;
                  },
                  removeAll: function () {
                    return this.getHooks().remove();
                  },
                },
                u = {
                  install: function (t, o, a) {
                    (this.type = t), (i = a), a(n, r), e && e(o);
                  },
                };
              return t.set(a.after, u), a;
              function c(e, t, o, a) {
                var u = {
                  hook: o,
                  type: t,
                  priority: a || 10,
                  remove: function () {
                    var t = e.indexOf(u);
                    -1 !== t && (e.splice(t, 1), i(n, r));
                  },
                };
                return (
                  e.push(u),
                  e.sort(function (e, n) {
                    return n.priority - e.priority;
                  }),
                  i(n, r),
                  this
                );
              }
            }
            function p(n, r, c) {
              var d = r.after && t.get(r.after);
              if (d) {
                if (d.type !== n)
                  throw "fun-hooks: recreated hookable with different type";
                return r;
              }
              var f,
                p,
                v = c ? l(c) : g(),
                h = {
                  get: function (e, n) {
                    return v[n] || Reflect.get.apply(Reflect, arguments);
                  },
                };
              return (
                u || s.push(b),
                e.useProxy && "function" == typeof Proxy && Proxy.revocable
                  ? (p = new Proxy(r, h))
                  : ((p = function () {
                      return h.apply
                        ? h.apply(r, this, i(arguments))
                        : r.apply(this, arguments);
                    }),
                    o(p, v)),
                t.get(p.after).install(n, p, function (e, t) {
                  var r,
                    o = [];
                  function a(e) {
                    o.push(e.hook);
                  }
                  e.length || t.length
                    ? (e.forEach(a),
                      (r = o.push(void 0) - 1),
                      t.forEach(a),
                      (f = function (e, t, a) {
                        var u,
                          c = 0,
                          s =
                            "async" === n &&
                            "function" == typeof a[a.length - 1] &&
                            a.pop();
                        function d(e) {
                          "sync" === n
                            ? (u = e)
                            : s && s.apply(null, arguments);
                        }
                        function f(e) {
                          if (o[c]) {
                            var r = i(arguments);
                            return (
                              (f.bail = d), r.unshift(f), o[c++].apply(t, r)
                            );
                          }
                          "sync" === n
                            ? (u = e)
                            : s && s.apply(null, arguments);
                        }
                        return (
                          (o[r] = function () {
                            var r = i(arguments, 1);
                            "async" === n && s && (delete f.bail, r.push(f));
                            var o = e.apply(t, r);
                            "sync" === n && f(o);
                          }),
                          f.apply(null, a),
                          u
                        );
                      }))
                    : (f = void 0),
                    b();
                }),
                p
              );
              function b() {
                !u &&
                ("sync" !== n || e.ready & a.SYNC) &&
                ("async" !== n || e.ready & a.ASYNC)
                  ? "sync" !== n && e.ready & a.QUEUE
                    ? (h.apply = function () {
                        var e = arguments;
                        s.push(function () {
                          p.apply(e[1], e[2]);
                        });
                      })
                    : (h.apply = function () {
                        throw "fun-hooks: hooked function not ready";
                      })
                  : (h.apply = f);
              }
            }
            return (
              (e = o({}, n, e)).ready
                ? (d.ready = function () {
                    (u = !0),
                      (function (e) {
                        for (var n; (n = e.shift()); ) n();
                      })(s);
                  })
                : (u = !0),
              (d.get = l),
              d
            );
          }
          e.exports = a;
        },
        7079: function (e) {
          e.exports = function e(n) {
            var t = Array.isArray(n) ? [] : {};
            for (var r in n) {
              var i = n[r];
              t[r] = i && "object" == typeof i ? e(i) : i;
            }
            return t;
          };
        },
        907: function (e, n, t) {
          function r(e, n) {
            (null == n || n > e.length) && (n = e.length);
            for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
            return r;
          }
          t.d(n, {
            Z: function () {
              return r;
            },
          });
        },
        3878: function (e, n, t) {
          function r(e) {
            if (Array.isArray(e)) return e;
          }
          t.d(n, {
            Z: function () {
              return r;
            },
          });
        },
        5057: function (e, n, t) {
          t.d(n, {
            Z: function () {
              return i;
            },
          });
          var r = t(907);
          function i(e) {
            if (Array.isArray(e)) return (0, r.Z)(e);
          }
        },
        6983: function (e, n, t) {
          function r(e, n) {
            return n.get ? n.get.call(e) : n.value;
          }
          t.d(n, {
            Z: function () {
              return r;
            },
          });
        },
        6011: function (e, n, t) {
          function r(e, n, t) {
            if (n.set) n.set.call(e, t);
            else {
              if (!n.writable)
                throw new TypeError("attempted to set read only private field");
              n.value = t;
            }
          }
          t.d(n, {
            Z: function () {
              return r;
            },
          });
        },
        5671: function (e, n, t) {
          function r(e, n) {
            if (!(e instanceof n))
              throw new TypeError("Cannot call a class as a function");
          }
          t.d(n, {
            Z: function () {
              return r;
            },
          });
        },
        1519: function (e, n, t) {
          function r(e, n, t) {
            if (!n.has(e))
              throw new TypeError(
                "attempted to " + t + " private field on non-instance"
              );
            return n.get(e);
          }
          t.d(n, {
            Z: function () {
              return r;
            },
          });
        },
        8916: function (e, n, t) {
          t.d(n, {
            Z: function () {
              return o;
            },
          });
          var r = t(6983),
            i = t(1519);
          function o(e, n) {
            var t = (0, i.Z)(e, n, "get");
            return (0, r.Z)(e, t);
          }
        },
        2793: function (e, n, t) {
          t.d(n, {
            Z: function () {
              return o;
            },
          });
          var r = t(6011),
            i = t(1519);
          function o(e, n, t) {
            var o = (0, i.Z)(e, n, "set");
            return (0, r.Z)(e, o, t), t;
          }
        },
        3144: function (e, n, t) {
          function r(e, n) {
            for (var t = 0; t < n.length; t++) {
              var r = n[t];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          function i(e, n, t) {
            return (
              n && r(e.prototype, n),
              t && r(e, t),
              Object.defineProperty(e, "prototype", { writable: !1 }),
              e
            );
          }
          t.d(n, {
            Z: function () {
              return i;
            },
          });
        },
        4942: function (e, n, t) {
          function r(e, n, t) {
            return (
              n in e
                ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[n] = t),
              e
            );
          }
          t.d(n, {
            Z: function () {
              return r;
            },
          });
        },
        9199: function (e, n, t) {
          function r(e) {
            if (
              ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          }
          t.d(n, {
            Z: function () {
              return r;
            },
          });
        },
        1902: function (e, n, t) {
          function r(e, n) {
            var t =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != t) {
              var r,
                i,
                o = [],
                a = !0,
                u = !1;
              try {
                for (
                  t = t.call(e);
                  !(a = (r = t.next()).done) &&
                  (o.push(r.value), !n || o.length !== n);
                  a = !0
                );
              } catch (e) {
                (u = !0), (i = e);
              } finally {
                try {
                  a || null == t.return || t.return();
                } finally {
                  if (u) throw i;
                }
              }
              return o;
            }
          }
          t.d(n, {
            Z: function () {
              return r;
            },
          });
        },
        5267: function (e, n, t) {
          function r() {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          }
          t.d(n, {
            Z: function () {
              return r;
            },
          });
        },
        2786: function (e, n, t) {
          function r() {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          }
          t.d(n, {
            Z: function () {
              return r;
            },
          });
        },
        3324: function (e, n, t) {
          t.d(n, {
            Z: function () {
              return u;
            },
          });
          var r = t(3878),
            i = t(1902),
            o = t(181),
            a = t(5267);
          function u(e, n) {
            return (
              (0, r.Z)(e) || (0, i.Z)(e, n) || (0, o.Z)(e, n) || (0, a.Z)()
            );
          }
        },
        9062: function (e, n, t) {
          t.d(n, {
            Z: function () {
              return u;
            },
          });
          var r = t(5057),
            i = t(9199),
            o = t(181),
            a = t(2786);
          function u(e) {
            return (0, r.Z)(e) || (0, i.Z)(e) || (0, o.Z)(e) || (0, a.Z)();
          }
        },
        1002: function (e, n, t) {
          function r(e) {
            return (
              (r =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e &&
                        "function" == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? "symbol"
                        : typeof e;
                    }),
              r(e)
            );
          }
          t.d(n, {
            Z: function () {
              return r;
            },
          });
        },
        181: function (e, n, t) {
          t.d(n, {
            Z: function () {
              return i;
            },
          });
          var r = t(907);
          function i(e, n) {
            if (e) {
              if ("string" == typeof e) return (0, r.Z)(e, n);
              var t = Object.prototype.toString.call(e).slice(8, -1);
              return (
                "Object" === t && e.constructor && (t = e.constructor.name),
                "Map" === t || "Set" === t
                  ? Array.from(e)
                  : "Arguments" === t ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                  ? (0, r.Z)(e, n)
                  : void 0
              );
            }
          }
        },
        5644: function (e) {
          e.exports = JSON.parse(
            '{"k2":{"xn":"adserverTargeting","zF":"standard"},"f":"pbjs_debug","Q_":{"Q":1},"FP":{"AUCTION_INIT":"auctionInit","AUCTION_TIMEOUT":"auctionTimeout","AUCTION_END":"auctionEnd","BID_ADJUSTMENT":"bidAdjustment","BID_TIMEOUT":"bidTimeout","BID_REQUESTED":"bidRequested","BID_RESPONSE":"bidResponse","BID_REJECTED":"bidRejected","NO_BID":"noBid","SEAT_NON_BID":"seatNonBid","BID_WON":"bidWon","BIDDER_DONE":"bidderDone","BIDDER_ERROR":"bidderError","SET_TARGETING":"setTargeting","BEFORE_REQUEST_BIDS":"beforeRequestBids","BEFORE_BIDDER_HTTP":"beforeBidderHttp","REQUEST_BIDS":"requestBids","ADD_AD_UNITS":"addAdUnits","AD_RENDER_FAILED":"adRenderFailed","AD_RENDER_SUCCEEDED":"adRenderSucceeded","TCF2_ENFORCEMENT":"tcf2Enforcement","AUCTION_DEBUG":"auctionDebug","BID_VIEWABLE":"bidViewable","STALE_RENDER":"staleRender","BILLABLE_EVENT":"billableEvent","BID_ACCEPTED":"bidAccepted"},"q_":{"Sn":"preventWritingOnMainDocument","Ex":"noAd","XW":"exception","WT":"cannotFindAd","mb":"missingDocOrAdid"},"aI":{"bidWon":"adUnitCode"},"Ql":{"yE":"low","M2":"medium","lj":"high","B7":"auto","uN":"dense","qN":"custom"},"TD":{"BIDDER":"hb_bidder","AD_ID":"hb_adid","PRICE_BUCKET":"hb_pb","SIZE":"hb_size","DEAL":"hb_deal","SOURCE":"hb_source","FORMAT":"hb_format","UUID":"hb_uuid","CACHE_ID":"hb_cache_id","CACHE_HOST":"hb_cache_host","ADOMAIN":"hb_adomain","ACAT":"hb_acat","CRID":"hb_crid","DSP":"hb_dsp"},"kF":{"BIDDER":"hb_bidder","AD_ID":"hb_adid","PRICE_BUCKET":"hb_pb","SIZE":"hb_size","DEAL":"hb_deal","FORMAT":"hb_format","UUID":"hb_uuid","CACHE_HOST":"hb_cache_host"},"FY":{"title":"hb_native_title","body":"hb_native_body","body2":"hb_native_body2","privacyLink":"hb_native_privacy","privacyIcon":"hb_native_privicon","sponsoredBy":"hb_native_brand","image":"hb_native_image","icon":"hb_native_icon","clickUrl":"hb_native_linkurl","displayUrl":"hb_native_displayurl","cta":"hb_native_cta","rating":"hb_native_rating","address":"hb_native_address","downloads":"hb_native_downloads","likes":"hb_native_likes","phone":"hb_native_phone","price":"hb_native_price","salePrice":"hb_native_saleprice","rendererUrl":"hb_renderer_url","adTemplate":"hb_adTemplate"},"os":{"YZ":"s2s"},"UE":{"CK":"targetingSet","fe":"rendered"},"Gw":{"UI":"Bid has missing or invalid properties","Gp":"Invalid request ID","Dg":"Bidder code is not allowed by allowedAlternateBidderCodes / allowUnknownBidderCodes"},"V1":{"body":"desc","body2":"desc2","sponsoredBy":"sponsored","cta":"ctatext","rating":"rating","address":"address","downloads":"downloads","likes":"likes","phone":"phone","price":"price","salePrice":"saleprice","displayUrl":"displayurl"},"s$":{"sponsored":1,"desc":2,"rating":3,"likes":4,"downloads":5,"price":6,"saleprice":7,"phone":8,"address":9,"desc2":10,"displayurl":11,"ctatext":12},"oF":{"ICON":1,"MAIN":3},"zA":["privacyIcon","clickUrl","sendTargetingKeys","adTemplate","rendererUrl","type"]}'
          );
        },
      },
      t = {};
    function r(e) {
      var i = t[e];
      if (void 0 !== i) return i.exports;
      var o = (t[e] = { exports: {} });
      return n[e](o, o.exports, r), o.exports;
    }
    (r.m = n),
      (e = []),
      (r.O = function (n, t, i, o) {
        if (!t) {
          var a = 1 / 0;
          for (d = 0; d < e.length; d++) {
            (t = e[d][0]), (i = e[d][1]), (o = e[d][2]);
            for (var u = !0, c = 0; c < t.length; c++)
              (!1 & o || a >= o) &&
              Object.keys(r.O).every(function (e) {
                return r.O[e](t[c]);
              })
                ? t.splice(c--, 1)
                : ((u = !1), o < a && (a = o));
            if (u) {
              e.splice(d--, 1);
              var s = i();
              void 0 !== s && (n = s);
            }
          }
          return n;
        }
        o = o || 0;
        for (var d = e.length; d > 0 && e[d - 1][2] > o; d--) e[d] = e[d - 1];
        e[d] = [t, i, o];
      }),
      (r.n = function (e) {
        var n =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return r.d(n, { a: n }), n;
      }),
      (r.d = function (e, n) {
        for (var t in n)
          r.o(n, t) &&
            !r.o(e, t) &&
            Object.defineProperty(e, t, { enumerable: !0, get: n[t] });
      }),
      (r.o = function (e, n) {
        return Object.prototype.hasOwnProperty.call(e, n);
      }),
      (function () {
        var e = { 602: 0 };
        r.O.j = function (n) {
          return 0 === e[n];
        };
        var n = function (n, t) {
            var i,
              o,
              a = t[0],
              u = t[1],
              c = t[2],
              s = 0;
            if (
              a.some(function (n) {
                return 0 !== e[n];
              })
            ) {
              for (i in u) r.o(u, i) && (r.m[i] = u[i]);
              if (c) var d = c(r);
            }
            for (n && n(t); s < a.length; s++)
              (o = a[s]), r.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
            return r.O(d);
          },
          t = (self.pbjsChunk = self.pbjsChunk || []);
        t.forEach(n.bind(null, 0)), (t.push = n.bind(null, t.push.bind(t)));
      })();
    var i = r.O(void 0, [409], function () {
      return r(2521);
    });
    i = r.O(i);
  })(),
    (self.pbjsChunk = self.pbjsChunk || []).push([
      [409],
      {
        7007: function (e, n, t) {
          t.d(n, {
            Ex: function () {
              return c;
            },
            G: function () {
              return u;
            },
            VX: function () {
              return a;
            },
            XW: function () {
              return s;
            },
            ZR: function () {
              return o;
            },
            u7: function () {
              return i;
            },
          });
          var r = t(5644),
            i = "Prebid Native",
            o = "Prebid Request",
            a = "Prebid Response",
            u = "Prebid Event",
            c = (r.FP.AD_RENDER_SUCCEEDED, r.FP.AD_RENDER_FAILED, r.q_.Ex),
            s = r.q_.XW;
        },
        9819: function (e, n, t) {
          t.d(n, {
            t: function () {
              return l;
            },
          });
          var r = t(3667),
            i = t(3324),
            o = t(7007),
            a = {
              frameBorder: 0,
              scrolling: "no",
              marginHeight: 0,
              marginWidth: 0,
              topMargin: 0,
              leftMargin: 0,
              allowTransparency: "true",
            };
          function u(e, n) {
            var t = e.createElement("iframe");
            return (
              (n = Object.assign({}, n, a)),
              Object.entries(n).forEach(function (e) {
                var n = (0, i.Z)(e, 2),
                  r = n[0],
                  o = n[1];
                return t.setAttribute(r, o);
              }),
              e.body.appendChild(t),
              t
            );
          }
          var c = t(1176),
            s = t(5644),
            d = t(4358),
            f = t(8640);
          function l(e, n, t) {
            var i;
            function a(t) {
              null != t
                ? (0, r.Pm)(Object.assign({ id: n, bid: i }, t))
                : (0, r.bL)({ doc: e, bid: i, adId: n });
            }
            try {
              if (n && e) {
                var l = (i = c.K.findBidByAdId(n)) && c.K.index.getAdUnit(i),
                  g = (0, f.R)().videoModule;
                if (null != l && l.video && g)
                  return void g.renderBid(l.video.divId, i);
                e !== document || (0, d.yL)()
                  ? (0, r.XD)(
                      function (n) {
                        !(function (e, n) {
                          var t = e.ad,
                            r = e.adUrl,
                            i = e.width,
                            a = e.height,
                            c =
                              arguments.length > 2 && void 0 !== arguments[2]
                                ? arguments[2]
                                : document;
                          t || r
                            ? (r && !t
                                ? u(c, { width: i, height: a, src: r })
                                : (c.write(t), c.close()),
                              n())
                            : n({
                                reason: o.Ex,
                                message: "Missing ad markup or URL",
                              });
                        })(n, a, e),
                          e.defaultView &&
                            e.defaultView.frameElement &&
                            ((e.defaultView.frameElement.width = n.width),
                            (e.defaultView.frameElement.height = n.height));
                        var t = document.createComment(
                          "Creative "
                            .concat(i.creativeId, " served by ")
                            .concat(i.bidder, " Prebid.js Header Bidding")
                        );
                        (0, d.jC)(t, e, "html");
                      },
                      {
                        adId: n,
                        options: {
                          clickUrl: null == t ? void 0 : t.clickThrough,
                        },
                        bidResponse: i,
                      }
                    )
                  : a({
                      reason: s.q_.Sn,
                      message:
                        "renderAd was prevented from writing to the main document.",
                    });
              } else
                a({
                  reason: s.q_.mb,
                  message: "missing ".concat(n ? "doc" : "adId"),
                });
            } catch (e) {
              a({ reason: o.XW, message: e.message });
            }
          }
        },
      },
    ]),
    (self.pbjsChunk = self.pbjsChunk || []).push([
      [861],
      {
        4563: function (e, n, t) {
          t.d(n, {
            ZP: function () {
              return g;
            },
          });
          var r = t(3324),
            i = t(1002),
            o = t(5644),
            a = t(8928),
            u = t(4358),
            c = t(2021),
            s = { ajax: a.hj },
            d = "endpoint",
            f = "bundle",
            l = Object.values(o.FP).filter(function (e) {
              return e !== o.FP.AUCTION_DEBUG;
            });
          function g(e) {
            var n,
              t,
              a,
              g,
              p,
              v = e.url,
              h = e.analyticsType,
              b = e.global,
              m = e.handler,
              y = [],
              w = !1,
              C =
                ((g = !1),
                (p = function () {
                  if (!g) {
                    g = !0;
                    try {
                      for (var e = 0, n = 0; y.length > 0; ) {
                        e++;
                        var r = y.length;
                        if (
                          (y.shift()(), y.length >= r ? n++ : (n = 0), n >= 10)
                        )
                          return (
                            (0, u.H)(
                              "Detected probable infinite loop, discarding events",
                              y
                            ),
                            void (y.length = 0)
                          );
                      }
                      (0, u.ji)(
                        ""
                          .concat(t, " analytics: processed ")
                          .concat(e, " events")
                      );
                    } finally {
                      g = !1;
                    }
                  }
                }),
                function () {
                  null != a && (clearTimeout(a), (a = null)),
                    (a = setTimeout(p, 100));
                });
            return Object.defineProperties(
              {
                track: function (e) {
                  var n = e.eventType,
                    t = e.args;
                  this.getAdapterType() === f && window[b](m, n, t),
                    this.getAdapterType() === d && A.apply(void 0, arguments);
                },
                enqueue: T,
                enableAnalytics: E,
                disableAnalytics: function () {
                  Object.entries(n || {}).forEach(function (e) {
                    var n = (0, r.Z)(e, 2),
                      t = n[0],
                      i = n[1];
                    c.S1(t, i);
                  }),
                    (this.enableAnalytics = this._oldEnable
                      ? this._oldEnable
                      : E),
                    (w = !1);
                },
                getAdapterType: function () {
                  return h;
                },
                getGlobal: function () {
                  return b;
                },
                getHandler: function () {
                  return m;
                },
                getUrl: function () {
                  return v;
                },
              },
              {
                enabled: {
                  get: function () {
                    return w;
                  },
                },
              }
            );
            function A(e) {
              var n = e.eventType,
                t = e.args,
                r = e.callback;
              s.ajax(v, r, JSON.stringify({ eventType: n, args: t }));
            }
            function T(e) {
              var n = this,
                t = e.eventType,
                r = e.args;
              y.push(function () {
                n.track({ eventType: t, args: r });
              }),
                C();
            }
            function E(e) {
              var r = this;
              t = null == e ? void 0 : e.provider;
              var a,
                s,
                d,
                f,
                g,
                p = this;
              if (
                "object" !== (0, i.Z)(e) ||
                "object" !== (0, i.Z)(e.options) ||
                void 0 === e.options.sampling ||
                Math.random() < parseFloat(e.options.sampling)
              ) {
                var v =
                  ((s = (a = e || {}).includeEvents),
                  (d = void 0 === s ? l : s),
                  (f = a.excludeEvents),
                  (g = void 0 === f ? [] : f),
                  new Set(
                    Object.values(o.FP)
                      .filter(function (e) {
                        return d.includes(e);
                      })
                      .filter(function (e) {
                        return !g.includes(e);
                      })
                  ));
                c.vw().forEach(function (e) {
                  if (e && v.has(e.eventType)) {
                    var n = e.eventType,
                      t = e.args;
                    T.call(p, { eventType: n, args: t });
                  }
                }),
                  (n = Object.fromEntries(
                    Array.from(v).map(function (e) {
                      var n = function (n) {
                        return r.enqueue({ eventType: e, args: n });
                      };
                      return c.on(e, n), [e, n];
                    })
                  ));
              } else
                (0, u.ji)(
                  'Analytics adapter for "'.concat(b, '" disabled by sampling')
                );
              (this._oldEnable = this.enableAnalytics),
                (this.enableAnalytics = function () {
                  return (0, u.ji)(
                    'Analytics adapter for "'.concat(
                      b,
                      '" already enabled, unnecessary call to `enableAnalytics`.'
                    )
                  );
                }),
                (w = !0);
            }
          }
        },
      },
    ]),
    (self.pbjsChunk = self.pbjsChunk || []).push([
      [532],
      {
        5647: function (e, n, t) {
            console.log('prebid module');
          var r = t(8640),
            i = t(4358),
            o = t(8928),
            a = t(4563),
            u = t(2931),
            c = t(5644),
            s = "https://pb.publir.com/publirprebidAnalytics",
            d = c.FP,
            f = d.AUCTION_END,
            l = d.BID_WON,
            g = d.BID_TIMEOUT,
            p = "bidWon",
            v = "timeout",
            h = function (e) {
              return "USD" === e.currency
                ? e.cpm
                : e.getCpmInNewCurrency("USD");
            },
            b = {},
            m = function (e) {
              return (e.bidderCode || e.bidder).toLowerCase();
            },
            y = function (e) {
              return e.adUnitCode.toLowerCase();
            },
            w = Object.assign(
              (0, a.ZP)({ DEFAULT_SERVER: s, analyticsType: "endpoint" }),
              {
                cachedAuctions: {},
                initConfig: function (e) {
                  return (
                    (b.options = deepClone(e.options)),
                    "string" != typeof e.options.affiliateId ||
                    e.options.affiliateId.length < 1
                      ? ((0, i.H)('"options.affiliateId" is required.'), !1)
                      : "string" != typeof e.options.configId ||
                        e.options.configId.length < 1
                      ? ((0, i.H)('"options.configId" is required.'), !1)
                      : ((b.affiliateId = e.options.affiliateId),
                        (b.configId = e.options.configId),
                        (b.server = e.options.server || s),
                        (b.sampled = !0),
                        "number" == typeof e.options.sampling &&
                          (b.sampled =
                            Math.random() < parseFloat(e.options.sampling)),
                        (b.adSampled = !1),
                        "number" == typeof e.options.adSampling &&
                          (b.adSampled =
                            Math.random() < parseFloat(e.options.adSampling)),
                        (b.autoPick = e.options.autoPick || null),
                        (b.predictionId = e.options.predictionId || null),
                        !0)
                  );
                },
                sendEventMessage: function (e, n) {
                    console.log('send event function triggered')
                  (0, i.PN)("AJAX: ".concat(e, ": ") + JSON.stringify(n)),
                    (0, o.hj)(
                      "".concat(b.server, "/").concat(e),
                      null,
                      JSON.stringify(n),
                      { contentType: "application/json", withCredentials: !0 }
                    );
                },
                createCommonMessage: function (e) {
                  return {
                    version: "1.0.0",
                    auctionId: e,
                    affiliateId: b.affiliateId,
                    configId: b.configId,
                    referrer: window.location.href,
                    sampling: b.options.sampling,
                    adSampling: b.options.adSampling,
                    prebid: "8.32.0-pre",
                    autoPick: b.autoPick,
                    predictionId: b.predictionId,
                    adUnits: {},
                  };
                },
                serializeBidResponse: function (e, n) {
                  var t = { prebidWon: n === p, isTimeout: n === v, status: n };
                  return (
                    ("bid" !== n && n !== p) ||
                      Object.assign(t, {
                        time: e.timeToRespond,
                        cpm: e.cpm,
                        currency: e.currency,
                        originalCpm: e.originalCpm || e.cpm,
                        cpmUsd: h(e),
                        originalCurrency: e.originalCurrency || e.currency,
                      }),
                    t
                  );
                },
                addBidResponseToMessage: function (e, n, t) {
                  var r = y(n);
                  e.adUnits[r] = e.adUnits[r] || {};
                  var i = m(n),
                    o = this.serializeBidResponse(n, t);
                  e.adUnits[r][i] = o;
                },
                createBidMessage: function (e, n, t) {
                  var r = this,
                    i = e.auctionId,
                    o = e.timestamp,
                    a = e.timeout,
                    u = e.auctionEnd,
                    c = e.adUnitCodes,
                    s = e.bidsReceived,
                    d = e.noBids,
                    f = this.createCommonMessage(i);
                  return (
                    (f.auctionElapsed = u - o),
                    (f.timeout = a),
                    c.forEach(function (e) {
                      f.adUnits[e] = {};
                    }),
                    d.forEach(function (e) {
                      return r.addBidResponseToMessage(f, e, "noBid");
                    }),
                    s.forEach(function (e) {
                      return r.addBidResponseToMessage(f, e, "bid");
                    }),
                    t.forEach(function (e) {
                      return r.addBidResponseToMessage(f, e, v);
                    }),
                    n.forEach(function (e) {
                      var n = y(e),
                        t = m(e);
                      f.adUnits[n][t].prebidWon = !0;
                    }),
                    f
                  );
                },
                createImpressionMessage: function (e) {
                  var n = this.createCommonMessage(e.auctionId);
                  return this.addBidResponseToMessage(n, e, p), n;
                },
                createCreativeMessage: function (e, n) {
                  var t = this.createCommonMessage(e);
                  return (
                    n.forEach(function (e) {
                      var n = y(e),
                        r = m(e);
                      (t.adUnits[n] = t.adUnits[n] || {}),
                        (t.adUnits[n][r] = { ad: e.ad });
                    }),
                    t
                  );
                },
                getCachedAuction: function (e) {
                  return (
                    (this.cachedAuctions[e] = this.cachedAuctions[e] || {
                      timeoutBids: [],
                    }),
                    this.cachedAuctions[e]
                  );
                },
                handleAuctionEnd: function (e) {
                  var n = this.getCachedAuction(e.auctionId),
                    t = (0, r.R)().getHighestCpmBids();
                  this.sendEventMessage(
                    "bid",
                    this.createBidMessage(e, t, n.timeoutBids)
                  ),
                    b.adSampled &&
                      this.sendEventMessage(
                        "cr",
                        this.createCreativeMessage(e.auctionId, e.bidsReceived)
                      );
                },
                handleBidTimeout: function (e) {
                  var n = this;
                  e.forEach(function (e) {
                    n.getCachedAuction(e.auctionId).timeoutBids.push(e);
                  });
                },
                handleBidWon: function (e) {
                  this.sendEventMessage("imp", this.createImpressionMessage(e));
                },
                track: function (e) {
                    console.log('track called')
                  var n = e.eventType,
                    t = e.args;
                  if (b.sampled)
                    switch (n) {
                      case l:
                        this.handleBidWon(t);
                        break;
                      case g:
                        this.handleBidTimeout(t);
                        break;
                      case f:
                        this.handleAuctionEnd(t);
                    }
                },
                getAnalyticsOptions: function () {
                  return b;
                },
              }
            );
          (w.originEnableAnalytics = w.enableAnalytics),
            (w.enableAnalytics = function (e) {
              this.initConfig(e) && w.originEnableAnalytics(e);
            }),
            u.ZP.registerAnalyticsAdapter({ adapter: w, code: "publir" }),
            (0, r.z)("publirAnalyticsAdapter");
        },
      },
      function (e) {
        e.O(0, [861, 409], function () {
          return e((e.s = 5647));
        }),
          e.O();
      },
    ]),
    pbjs.processQueue();
