import { a as e, t } from './rolldown-runtime-C-57s9n3.js';
import { n, r } from './vendor-react-gF8_I9RY.js';
var i = t((e) => {
        var t = Symbol.for(`react.transitional.element`),
            n = Symbol.for(`react.fragment`);
        function r(e, n, r) {
            var i = null;
            if (
                (r !== void 0 && (i = `` + r),
                n.key !== void 0 && (i = `` + n.key),
                `key` in n)
            )
                for (var a in ((r = {}), n)) a !== `key` && (r[a] = n[a]);
            else r = n;
            return (
                (n = r.ref),
                {
                    $$typeof: t,
                    type: e,
                    key: i,
                    ref: n === void 0 ? null : n,
                    props: r,
                }
            );
        }
        ((e.Fragment = n), (e.jsx = r), (e.jsxs = r));
    }),
    a = t((e, t) => {
        t.exports = i();
    }),
    o = e(r(), 1);
typeof window < `u` && window.document && window.document.createElement;
function s(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
    return function (r) {
        if ((e?.(r), n === !1 || !r.defaultPrevented)) return t?.(r);
    };
}
function c(e, t) {
    if (typeof e == `function`) return e(t);
    e != null && (e.current = t);
}
function l(...e) {
    return (t) => {
        let n = !1,
            r = e.map((e) => {
                let r = c(e, t);
                return (!n && typeof r == `function` && (n = !0), r);
            });
        if (n)
            return () => {
                for (let t = 0; t < r.length; t++) {
                    let n = r[t];
                    typeof n == `function` ? n() : c(e[t], null);
                }
            };
    };
}
function u(...e) {
    return o.useCallback(l(...e), e);
}
var d = a();
function f(e, t = []) {
    let n = [];
    function r(t, r) {
        let i = o.createContext(r),
            a = n.length;
        n = [...n, r];
        let s = (t) => {
            let { scope: n, children: r, ...s } = t,
                c = n?.[e]?.[a] || i,
                l = o.useMemo(() => s, Object.values(s));
            return (0, d.jsx)(c.Provider, { value: l, children: r });
        };
        s.displayName = t + `Provider`;
        function c(n, s) {
            let c = s?.[e]?.[a] || i,
                l = o.useContext(c);
            if (l) return l;
            if (r !== void 0) return r;
            throw Error(`\`${n}\` must be used within \`${t}\``);
        }
        return [s, c];
    }
    let i = () => {
        let t = n.map((e) => o.createContext(e));
        return function (n) {
            let r = n?.[e] || t;
            return o.useMemo(
                () => ({ [`__scope${e}`]: { ...n, [e]: r } }),
                [n, r],
            );
        };
    };
    return ((i.scopeName = e), [r, p(i, ...t)]);
}
function p(...e) {
    let t = e[0];
    if (e.length === 1) return t;
    let n = () => {
        let n = e.map((e) => ({ useScope: e(), scopeName: e.scopeName }));
        return function (e) {
            let r = n.reduce((t, { useScope: n, scopeName: r }) => {
                let i = n(e)[`__scope${r}`];
                return { ...t, ...i };
            }, {});
            return o.useMemo(() => ({ [`__scope${t.scopeName}`]: r }), [r]);
        };
    };
    return ((n.scopeName = t.scopeName), n);
}
var m = e(n(), 1);
function h(e) {
    let t = g(e),
        n = o.forwardRef((e, n) => {
            let { children: r, ...i } = e,
                a = o.Children.toArray(r),
                s = a.find(v);
            if (s) {
                let e = s.props.children,
                    r = a.map((t) =>
                        t === s
                            ? o.Children.count(e) > 1
                                ? o.Children.only(null)
                                : o.isValidElement(e)
                                  ? e.props.children
                                  : null
                            : t,
                    );
                return (0, d.jsx)(t, {
                    ...i,
                    ref: n,
                    children: o.isValidElement(e)
                        ? o.cloneElement(e, void 0, r)
                        : null,
                });
            }
            return (0, d.jsx)(t, { ...i, ref: n, children: r });
        });
    return ((n.displayName = `${e}.Slot`), n);
}
function g(e) {
    let t = o.forwardRef((e, t) => {
        let { children: n, ...r } = e;
        if (o.isValidElement(n)) {
            let e = b(n),
                i = y(r, n.props);
            return (
                n.type !== o.Fragment && (i.ref = t ? l(t, e) : e),
                o.cloneElement(n, i)
            );
        }
        return o.Children.count(n) > 1 ? o.Children.only(null) : null;
    });
    return ((t.displayName = `${e}.SlotClone`), t);
}
var _ = Symbol(`radix.slottable`);
function v(e) {
    return (
        o.isValidElement(e) &&
        typeof e.type == `function` &&
        `__radixId` in e.type &&
        e.type.__radixId === _
    );
}
function y(e, t) {
    let n = { ...t };
    for (let r in t) {
        let i = e[r],
            a = t[r];
        /^on[A-Z]/.test(r)
            ? i && a
                ? (n[r] = (...e) => {
                      let t = a(...e);
                      return (i(...e), t);
                  })
                : i && (n[r] = i)
            : r === `style`
              ? (n[r] = { ...i, ...a })
              : r === `className` && (n[r] = [i, a].filter(Boolean).join(` `));
    }
    return { ...e, ...n };
}
function b(e) {
    let t = Object.getOwnPropertyDescriptor(e.props, `ref`)?.get,
        n = t && `isReactWarning` in t && t.isReactWarning;
    return n
        ? e.ref
        : ((t = Object.getOwnPropertyDescriptor(e, `ref`)?.get),
          (n = t && `isReactWarning` in t && t.isReactWarning),
          n ? e.props.ref : e.props.ref || e.ref);
}
var x = [
    `a`,
    `button`,
    `div`,
    `form`,
    `h2`,
    `h3`,
    `img`,
    `input`,
    `label`,
    `li`,
    `nav`,
    `ol`,
    `p`,
    `select`,
    `span`,
    `svg`,
    `ul`,
].reduce((e, t) => {
    let n = h(`Primitive.${t}`),
        r = o.forwardRef((e, r) => {
            let { asChild: i, ...a } = e,
                o = i ? n : t;
            return (
                typeof window < `u` && (window[Symbol.for(`radix-ui`)] = !0),
                (0, d.jsx)(o, { ...a, ref: r })
            );
        });
    return ((r.displayName = `Primitive.${t}`), { ...e, [t]: r });
}, {});
function S(e, t) {
    e && m.flushSync(() => e.dispatchEvent(t));
}
function C(e) {
    let t = o.useRef(e);
    return (
        o.useEffect(() => {
            t.current = e;
        }),
        o.useMemo(
            () =>
                (...e) =>
                    t.current?.(...e),
            [],
        )
    );
}
function w(e, t = globalThis?.document) {
    let n = C(e);
    o.useEffect(() => {
        let e = (e) => {
            e.key === `Escape` && n(e);
        };
        return (
            t.addEventListener(`keydown`, e, { capture: !0 }),
            () => t.removeEventListener(`keydown`, e, { capture: !0 })
        );
    }, [n, t]);
}
var T = `DismissableLayer`,
    E = `dismissableLayer.update`,
    D = `dismissableLayer.pointerDownOutside`,
    O = `dismissableLayer.focusOutside`,
    k,
    A = o.createContext({
        layers: new Set(),
        layersWithOutsidePointerEventsDisabled: new Set(),
        branches: new Set(),
    }),
    j = o.forwardRef((e, t) => {
        let {
                disableOutsidePointerEvents: n = !1,
                onEscapeKeyDown: r,
                onPointerDownOutside: i,
                onFocusOutside: a,
                onInteractOutside: c,
                onDismiss: l,
                ...f
            } = e,
            p = o.useContext(A),
            [m, h] = o.useState(null),
            g = m?.ownerDocument ?? globalThis?.document,
            [, _] = o.useState({}),
            v = u(t, (e) => h(e)),
            y = Array.from(p.layers),
            [b] = [...p.layersWithOutsidePointerEventsDisabled].slice(-1),
            S = y.indexOf(b),
            C = m ? y.indexOf(m) : -1,
            T = p.layersWithOutsidePointerEventsDisabled.size > 0,
            D = C >= S,
            O = P((e) => {
                let t = e.target,
                    n = [...p.branches].some((e) => e.contains(t));
                !D || n || (i?.(e), c?.(e), e.defaultPrevented || l?.());
            }, g),
            j = ee((e) => {
                let t = e.target;
                [...p.branches].some((e) => e.contains(t)) ||
                    (a?.(e), c?.(e), e.defaultPrevented || l?.());
            }, g);
        return (
            w((e) => {
                C === p.layers.size - 1 &&
                    (r?.(e),
                    !e.defaultPrevented && l && (e.preventDefault(), l()));
            }, g),
            o.useEffect(() => {
                if (m)
                    return (
                        n &&
                            (p.layersWithOutsidePointerEventsDisabled.size ===
                                0 &&
                                ((k = g.body.style.pointerEvents),
                                (g.body.style.pointerEvents = `none`)),
                            p.layersWithOutsidePointerEventsDisabled.add(m)),
                        p.layers.add(m),
                        te(),
                        () => {
                            n &&
                                p.layersWithOutsidePointerEventsDisabled
                                    .size === 1 &&
                                (g.body.style.pointerEvents = k);
                        }
                    );
            }, [m, g, n, p]),
            o.useEffect(
                () => () => {
                    m &&
                        (p.layers.delete(m),
                        p.layersWithOutsidePointerEventsDisabled.delete(m),
                        te());
                },
                [m, p],
            ),
            o.useEffect(() => {
                let e = () => _({});
                return (
                    document.addEventListener(E, e),
                    () => document.removeEventListener(E, e)
                );
            }, []),
            (0, d.jsx)(x.div, {
                ...f,
                ref: v,
                style: {
                    pointerEvents: T ? (D ? `auto` : `none`) : void 0,
                    ...e.style,
                },
                onFocusCapture: s(e.onFocusCapture, j.onFocusCapture),
                onBlurCapture: s(e.onBlurCapture, j.onBlurCapture),
                onPointerDownCapture: s(
                    e.onPointerDownCapture,
                    O.onPointerDownCapture,
                ),
            })
        );
    });
j.displayName = T;
var M = `DismissableLayerBranch`,
    N = o.forwardRef((e, t) => {
        let n = o.useContext(A),
            r = o.useRef(null),
            i = u(t, r);
        return (
            o.useEffect(() => {
                let e = r.current;
                if (e)
                    return (
                        n.branches.add(e),
                        () => {
                            n.branches.delete(e);
                        }
                    );
            }, [n.branches]),
            (0, d.jsx)(x.div, { ...e, ref: i })
        );
    });
N.displayName = M;
function P(e, t = globalThis?.document) {
    let n = C(e),
        r = o.useRef(!1),
        i = o.useRef(() => {});
    return (
        o.useEffect(() => {
            let e = (e) => {
                    if (e.target && !r.current) {
                        let r = function () {
                                ne(D, n, a, { discrete: !0 });
                            },
                            a = { originalEvent: e };
                        e.pointerType === `touch`
                            ? (t.removeEventListener(`click`, i.current),
                              (i.current = r),
                              t.addEventListener(`click`, i.current, {
                                  once: !0,
                              }))
                            : r();
                    } else t.removeEventListener(`click`, i.current);
                    r.current = !1;
                },
                a = window.setTimeout(() => {
                    t.addEventListener(`pointerdown`, e);
                }, 0);
            return () => {
                (window.clearTimeout(a),
                    t.removeEventListener(`pointerdown`, e),
                    t.removeEventListener(`click`, i.current));
            };
        }, [t, n]),
        { onPointerDownCapture: () => (r.current = !0) }
    );
}
function ee(e, t = globalThis?.document) {
    let n = C(e),
        r = o.useRef(!1);
    return (
        o.useEffect(() => {
            let e = (e) => {
                e.target &&
                    !r.current &&
                    ne(O, n, { originalEvent: e }, { discrete: !1 });
            };
            return (
                t.addEventListener(`focusin`, e),
                () => t.removeEventListener(`focusin`, e)
            );
        }, [t, n]),
        {
            onFocusCapture: () => (r.current = !0),
            onBlurCapture: () => (r.current = !1),
        }
    );
}
function te() {
    let e = new CustomEvent(E);
    document.dispatchEvent(e);
}
function ne(e, t, n, { discrete: r }) {
    let i = n.originalEvent.target,
        a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
    (t && i.addEventListener(e, t, { once: !0 }),
        r ? S(i, a) : i.dispatchEvent(a));
}
var F = globalThis?.document ? o.useLayoutEffect : () => {},
    I = o.useId || (() => void 0),
    re = 0;
function L(e) {
    let [t, n] = o.useState(I());
    return (
        F(() => {
            e || n((e) => e ?? String(re++));
        }, [e]),
        e || (t ? `radix-${t}` : ``)
    );
}
var ie = [`top`, `right`, `bottom`, `left`],
    ae = Math.min,
    R = Math.max,
    oe = Math.round,
    se = Math.floor,
    z = (e) => ({ x: e, y: e }),
    ce = { left: `right`, right: `left`, bottom: `top`, top: `bottom` };
function le(e, t, n) {
    return R(e, ae(t, n));
}
function ue(e, t) {
    return typeof e == `function` ? e(t) : e;
}
function de(e) {
    return e.split(`-`)[0];
}
function fe(e) {
    return e.split(`-`)[1];
}
function pe(e) {
    return e === `x` ? `y` : `x`;
}
function me(e) {
    return e === `y` ? `height` : `width`;
}
function B(e) {
    let t = e[0];
    return t === `t` || t === `b` ? `y` : `x`;
}
function he(e) {
    return pe(B(e));
}
function ge(e, t, n) {
    n === void 0 && (n = !1);
    let r = fe(e),
        i = he(e),
        a = me(i),
        o =
            i === `x`
                ? r === (n ? `end` : `start`)
                    ? `right`
                    : `left`
                : r === `start`
                  ? `bottom`
                  : `top`;
    return (t.reference[a] > t.floating[a] && (o = Te(o)), [o, Te(o)]);
}
function _e(e) {
    let t = Te(e);
    return [ve(e), t, ve(t)];
}
function ve(e) {
    return e.includes(`start`)
        ? e.replace(`start`, `end`)
        : e.replace(`end`, `start`);
}
var ye = [`left`, `right`],
    be = [`right`, `left`],
    xe = [`top`, `bottom`],
    Se = [`bottom`, `top`];
function Ce(e, t, n) {
    switch (e) {
        case `top`:
        case `bottom`:
            return n ? (t ? be : ye) : t ? ye : be;
        case `left`:
        case `right`:
            return t ? xe : Se;
        default:
            return [];
    }
}
function we(e, t, n, r) {
    let i = fe(e),
        a = Ce(de(e), n === `start`, r);
    return (
        i && ((a = a.map((e) => e + `-` + i)), t && (a = a.concat(a.map(ve)))),
        a
    );
}
function Te(e) {
    let t = de(e);
    return ce[t] + e.slice(t.length);
}
function Ee(e) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function De(e) {
    return typeof e == `number`
        ? { top: e, right: e, bottom: e, left: e }
        : Ee(e);
}
function Oe(e) {
    let { x: t, y: n, width: r, height: i } = e;
    return {
        width: r,
        height: i,
        top: n,
        left: t,
        right: t + r,
        bottom: n + i,
        x: t,
        y: n,
    };
}
function ke(e, t, n) {
    let { reference: r, floating: i } = e,
        a = B(t),
        o = he(t),
        s = me(o),
        c = de(t),
        l = a === `y`,
        u = r.x + r.width / 2 - i.width / 2,
        d = r.y + r.height / 2 - i.height / 2,
        f = r[s] / 2 - i[s] / 2,
        p;
    switch (c) {
        case `top`:
            p = { x: u, y: r.y - i.height };
            break;
        case `bottom`:
            p = { x: u, y: r.y + r.height };
            break;
        case `right`:
            p = { x: r.x + r.width, y: d };
            break;
        case `left`:
            p = { x: r.x - i.width, y: d };
            break;
        default:
            p = { x: r.x, y: r.y };
    }
    switch (fe(t)) {
        case `start`:
            p[o] -= f * (n && l ? -1 : 1);
            break;
        case `end`:
            p[o] += f * (n && l ? -1 : 1);
            break;
    }
    return p;
}
async function Ae(e, t) {
    t === void 0 && (t = {});
    let { x: n, y: r, platform: i, rects: a, elements: o, strategy: s } = e,
        {
            boundary: c = `clippingAncestors`,
            rootBoundary: l = `viewport`,
            elementContext: u = `floating`,
            altBoundary: d = !1,
            padding: f = 0,
        } = ue(t, e),
        p = De(f),
        m = o[d ? (u === `floating` ? `reference` : `floating`) : u],
        h = Oe(
            await i.getClippingRect({
                element:
                    ((await (i.isElement == null ? void 0 : i.isElement(m))) ??
                    !0)
                        ? m
                        : m.contextElement ||
                          (await (i.getDocumentElement == null
                              ? void 0
                              : i.getDocumentElement(o.floating))),
                boundary: c,
                rootBoundary: l,
                strategy: s,
            }),
        ),
        g =
            u === `floating`
                ? {
                      x: n,
                      y: r,
                      width: a.floating.width,
                      height: a.floating.height,
                  }
                : a.reference,
        _ = await (i.getOffsetParent == null
            ? void 0
            : i.getOffsetParent(o.floating)),
        v = ((await (i.isElement == null ? void 0 : i.isElement(_))) &&
            (await (i.getScale == null ? void 0 : i.getScale(_)))) || {
            x: 1,
            y: 1,
        },
        y = Oe(
            i.convertOffsetParentRelativeRectToViewportRelativeRect
                ? await i.convertOffsetParentRelativeRectToViewportRelativeRect(
                      { elements: o, rect: g, offsetParent: _, strategy: s },
                  )
                : g,
        );
    return {
        top: (h.top - y.top + p.top) / v.y,
        bottom: (y.bottom - h.bottom + p.bottom) / v.y,
        left: (h.left - y.left + p.left) / v.x,
        right: (y.right - h.right + p.right) / v.x,
    };
}
var je = 50,
    Me = async (e, t, n) => {
        let {
                placement: r = `bottom`,
                strategy: i = `absolute`,
                middleware: a = [],
                platform: o,
            } = n,
            s = o.detectOverflow ? o : { ...o, detectOverflow: Ae },
            c = await (o.isRTL == null ? void 0 : o.isRTL(t)),
            l = await o.getElementRects({
                reference: e,
                floating: t,
                strategy: i,
            }),
            { x: u, y: d } = ke(l, r, c),
            f = r,
            p = 0,
            m = {};
        for (let n = 0; n < a.length; n++) {
            let h = a[n];
            if (!h) continue;
            let { name: g, fn: _ } = h,
                {
                    x: v,
                    y,
                    data: b,
                    reset: x,
                } = await _({
                    x: u,
                    y: d,
                    initialPlacement: r,
                    placement: f,
                    strategy: i,
                    middlewareData: m,
                    rects: l,
                    platform: s,
                    elements: { reference: e, floating: t },
                });
            ((u = v ?? u),
                (d = y ?? d),
                (m[g] = { ...m[g], ...b }),
                x &&
                    p < je &&
                    (p++,
                    typeof x == `object` &&
                        (x.placement && (f = x.placement),
                        x.rects &&
                            (l =
                                x.rects === !0
                                    ? await o.getElementRects({
                                          reference: e,
                                          floating: t,
                                          strategy: i,
                                      })
                                    : x.rects),
                        ({ x: u, y: d } = ke(l, f, c))),
                    (n = -1)));
        }
        return { x: u, y: d, placement: f, strategy: i, middlewareData: m };
    },
    Ne = (e) => ({
        name: `arrow`,
        options: e,
        async fn(t) {
            let {
                    x: n,
                    y: r,
                    placement: i,
                    rects: a,
                    platform: o,
                    elements: s,
                    middlewareData: c,
                } = t,
                { element: l, padding: u = 0 } = ue(e, t) || {};
            if (l == null) return {};
            let d = De(u),
                f = { x: n, y: r },
                p = he(i),
                m = me(p),
                h = await o.getDimensions(l),
                g = p === `y`,
                _ = g ? `top` : `left`,
                v = g ? `bottom` : `right`,
                y = g ? `clientHeight` : `clientWidth`,
                b = a.reference[m] + a.reference[p] - f[p] - a.floating[m],
                x = f[p] - a.reference[p],
                S = await (o.getOffsetParent == null
                    ? void 0
                    : o.getOffsetParent(l)),
                C = S ? S[y] : 0;
            (!C || !(await (o.isElement == null ? void 0 : o.isElement(S)))) &&
                (C = s.floating[y] || a.floating[m]);
            let w = b / 2 - x / 2,
                T = C / 2 - h[m] / 2 - 1,
                E = ae(d[_], T),
                D = ae(d[v], T),
                O = E,
                k = C - h[m] - D,
                A = C / 2 - h[m] / 2 + w,
                j = le(O, A, k),
                M =
                    !c.arrow &&
                    fe(i) != null &&
                    A !== j &&
                    a.reference[m] / 2 - (A < O ? E : D) - h[m] / 2 < 0,
                N = M ? (A < O ? A - O : A - k) : 0;
            return {
                [p]: f[p] + N,
                data: {
                    [p]: j,
                    centerOffset: A - j - N,
                    ...(M && { alignmentOffset: N }),
                },
                reset: M,
            };
        },
    }),
    Pe = function (e) {
        return (
            e === void 0 && (e = {}),
            {
                name: `flip`,
                options: e,
                async fn(t) {
                    var n;
                    let {
                            placement: r,
                            middlewareData: i,
                            rects: a,
                            initialPlacement: o,
                            platform: s,
                            elements: c,
                        } = t,
                        {
                            mainAxis: l = !0,
                            crossAxis: u = !0,
                            fallbackPlacements: d,
                            fallbackStrategy: f = `bestFit`,
                            fallbackAxisSideDirection: p = `none`,
                            flipAlignment: m = !0,
                            ...h
                        } = ue(e, t);
                    if ((n = i.arrow) != null && n.alignmentOffset) return {};
                    let g = de(r),
                        _ = B(o),
                        v = de(o) === o,
                        y = await (s.isRTL == null
                            ? void 0
                            : s.isRTL(c.floating)),
                        b = d || (v || !m ? [Te(o)] : _e(o)),
                        x = p !== `none`;
                    !d && x && b.push(...we(o, m, p, y));
                    let S = [o, ...b],
                        C = await s.detectOverflow(t, h),
                        w = [],
                        T = i.flip?.overflows || [];
                    if ((l && w.push(C[g]), u)) {
                        let e = ge(r, a, y);
                        w.push(C[e[0]], C[e[1]]);
                    }
                    if (
                        ((T = [...T, { placement: r, overflows: w }]),
                        !w.every((e) => e <= 0))
                    ) {
                        let e = (i.flip?.index || 0) + 1,
                            t = S[e];
                        if (
                            t &&
                            (!(u === `alignment` && _ !== B(t)) ||
                                T.every((e) =>
                                    B(e.placement) === _
                                        ? e.overflows[0] > 0
                                        : !0,
                                ))
                        )
                            return {
                                data: { index: e, overflows: T },
                                reset: { placement: t },
                            };
                        let n = T.filter((e) => e.overflows[0] <= 0).sort(
                            (e, t) => e.overflows[1] - t.overflows[1],
                        )[0]?.placement;
                        if (!n)
                            switch (f) {
                                case `bestFit`: {
                                    let e = T.filter((e) => {
                                        if (x) {
                                            let t = B(e.placement);
                                            return t === _ || t === `y`;
                                        }
                                        return !0;
                                    })
                                        .map((e) => [
                                            e.placement,
                                            e.overflows
                                                .filter((e) => e > 0)
                                                .reduce((e, t) => e + t, 0),
                                        ])
                                        .sort((e, t) => e[1] - t[1])[0]?.[0];
                                    e && (n = e);
                                    break;
                                }
                                case `initialPlacement`:
                                    n = o;
                                    break;
                            }
                        if (r !== n) return { reset: { placement: n } };
                    }
                    return {};
                },
            }
        );
    };
function Fe(e, t) {
    return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width,
    };
}
function Ie(e) {
    return ie.some((t) => e[t] >= 0);
}
var Le = function (e) {
        return (
            e === void 0 && (e = {}),
            {
                name: `hide`,
                options: e,
                async fn(t) {
                    let { rects: n, platform: r } = t,
                        { strategy: i = `referenceHidden`, ...a } = ue(e, t);
                    switch (i) {
                        case `referenceHidden`: {
                            let e = Fe(
                                await r.detectOverflow(t, {
                                    ...a,
                                    elementContext: `reference`,
                                }),
                                n.reference,
                            );
                            return {
                                data: {
                                    referenceHiddenOffsets: e,
                                    referenceHidden: Ie(e),
                                },
                            };
                        }
                        case `escaped`: {
                            let e = Fe(
                                await r.detectOverflow(t, {
                                    ...a,
                                    altBoundary: !0,
                                }),
                                n.floating,
                            );
                            return {
                                data: { escapedOffsets: e, escaped: Ie(e) },
                            };
                        }
                        default:
                            return {};
                    }
                },
            }
        );
    },
    Re = new Set([`left`, `top`]);
async function ze(e, t) {
    let { placement: n, platform: r, elements: i } = e,
        a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)),
        o = de(n),
        s = fe(n),
        c = B(n) === `y`,
        l = Re.has(o) ? -1 : 1,
        u = a && c ? -1 : 1,
        d = ue(t, e),
        {
            mainAxis: f,
            crossAxis: p,
            alignmentAxis: m,
        } = typeof d == `number`
            ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
            : {
                  mainAxis: d.mainAxis || 0,
                  crossAxis: d.crossAxis || 0,
                  alignmentAxis: d.alignmentAxis,
              };
    return (
        s && typeof m == `number` && (p = s === `end` ? m * -1 : m),
        c ? { x: p * u, y: f * l } : { x: f * l, y: p * u }
    );
}
var Be = function (e) {
        return (
            e === void 0 && (e = 0),
            {
                name: `offset`,
                options: e,
                async fn(t) {
                    var n;
                    let { x: r, y: i, placement: a, middlewareData: o } = t,
                        s = await ze(t, e);
                    return a === o.offset?.placement &&
                        (n = o.arrow) != null &&
                        n.alignmentOffset
                        ? {}
                        : {
                              x: r + s.x,
                              y: i + s.y,
                              data: { ...s, placement: a },
                          };
                },
            }
        );
    },
    Ve = function (e) {
        return (
            e === void 0 && (e = {}),
            {
                name: `shift`,
                options: e,
                async fn(t) {
                    let { x: n, y: r, placement: i, platform: a } = t,
                        {
                            mainAxis: o = !0,
                            crossAxis: s = !1,
                            limiter: c = {
                                fn: (e) => {
                                    let { x: t, y: n } = e;
                                    return { x: t, y: n };
                                },
                            },
                            ...l
                        } = ue(e, t),
                        u = { x: n, y: r },
                        d = await a.detectOverflow(t, l),
                        f = B(de(i)),
                        p = pe(f),
                        m = u[p],
                        h = u[f];
                    if (o) {
                        let e = p === `y` ? `top` : `left`,
                            t = p === `y` ? `bottom` : `right`,
                            n = m + d[e],
                            r = m - d[t];
                        m = le(n, m, r);
                    }
                    if (s) {
                        let e = f === `y` ? `top` : `left`,
                            t = f === `y` ? `bottom` : `right`,
                            n = h + d[e],
                            r = h - d[t];
                        h = le(n, h, r);
                    }
                    let g = c.fn({ ...t, [p]: m, [f]: h });
                    return {
                        ...g,
                        data: {
                            x: g.x - n,
                            y: g.y - r,
                            enabled: { [p]: o, [f]: s },
                        },
                    };
                },
            }
        );
    },
    He = function (e) {
        return (
            e === void 0 && (e = {}),
            {
                options: e,
                fn(t) {
                    let {
                            x: n,
                            y: r,
                            placement: i,
                            rects: a,
                            middlewareData: o,
                        } = t,
                        {
                            offset: s = 0,
                            mainAxis: c = !0,
                            crossAxis: l = !0,
                        } = ue(e, t),
                        u = { x: n, y: r },
                        d = B(i),
                        f = pe(d),
                        p = u[f],
                        m = u[d],
                        h = ue(s, t),
                        g =
                            typeof h == `number`
                                ? { mainAxis: h, crossAxis: 0 }
                                : { mainAxis: 0, crossAxis: 0, ...h };
                    if (c) {
                        let e = f === `y` ? `height` : `width`,
                            t = a.reference[f] - a.floating[e] + g.mainAxis,
                            n = a.reference[f] + a.reference[e] - g.mainAxis;
                        p < t ? (p = t) : p > n && (p = n);
                    }
                    if (l) {
                        let e = f === `y` ? `width` : `height`,
                            t = Re.has(de(i)),
                            n =
                                a.reference[d] -
                                a.floating[e] +
                                ((t && o.offset?.[d]) || 0) +
                                (t ? 0 : g.crossAxis),
                            r =
                                a.reference[d] +
                                a.reference[e] +
                                (t ? 0 : o.offset?.[d] || 0) -
                                (t ? g.crossAxis : 0);
                        m < n ? (m = n) : m > r && (m = r);
                    }
                    return { [f]: p, [d]: m };
                },
            }
        );
    },
    Ue = function (e) {
        return (
            e === void 0 && (e = {}),
            {
                name: `size`,
                options: e,
                async fn(t) {
                    var n, r;
                    let {
                            placement: i,
                            rects: a,
                            platform: o,
                            elements: s,
                        } = t,
                        { apply: c = () => {}, ...l } = ue(e, t),
                        u = await o.detectOverflow(t, l),
                        d = de(i),
                        f = fe(i),
                        p = B(i) === `y`,
                        { width: m, height: h } = a.floating,
                        g,
                        _;
                    d === `top` || d === `bottom`
                        ? ((g = d),
                          (_ =
                              f ===
                              ((await (o.isRTL == null
                                  ? void 0
                                  : o.isRTL(s.floating)))
                                  ? `start`
                                  : `end`)
                                  ? `left`
                                  : `right`))
                        : ((_ = d), (g = f === `end` ? `top` : `bottom`));
                    let v = h - u.top - u.bottom,
                        y = m - u.left - u.right,
                        b = ae(h - u[g], v),
                        x = ae(m - u[_], y),
                        S = !t.middlewareData.shift,
                        C = b,
                        w = x;
                    if (
                        ((n = t.middlewareData.shift) != null &&
                            n.enabled.x &&
                            (w = y),
                        (r = t.middlewareData.shift) != null &&
                            r.enabled.y &&
                            (C = v),
                        S && !f)
                    ) {
                        let e = R(u.left, 0),
                            t = R(u.right, 0),
                            n = R(u.top, 0),
                            r = R(u.bottom, 0);
                        p
                            ? (w =
                                  m -
                                  2 *
                                      (e !== 0 || t !== 0
                                          ? e + t
                                          : R(u.left, u.right)))
                            : (C =
                                  h -
                                  2 *
                                      (n !== 0 || r !== 0
                                          ? n + r
                                          : R(u.top, u.bottom)));
                    }
                    await c({ ...t, availableWidth: w, availableHeight: C });
                    let T = await o.getDimensions(s.floating);
                    return m !== T.width || h !== T.height
                        ? { reset: { rects: !0 } }
                        : {};
                },
            }
        );
    };
function We() {
    return typeof window < `u`;
}
function Ge(e) {
    return Ke(e) ? (e.nodeName || ``).toLowerCase() : `#document`;
}
function V(e) {
    var t;
    return (
        (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
        window
    );
}
function H(e) {
    return ((Ke(e) ? e.ownerDocument : e.document) || window.document)
        ?.documentElement;
}
function Ke(e) {
    return We() ? e instanceof Node || e instanceof V(e).Node : !1;
}
function U(e) {
    return We() ? e instanceof Element || e instanceof V(e).Element : !1;
}
function qe(e) {
    return We()
        ? e instanceof HTMLElement || e instanceof V(e).HTMLElement
        : !1;
}
function Je(e) {
    return !We() || typeof ShadowRoot > `u`
        ? !1
        : e instanceof ShadowRoot || e instanceof V(e).ShadowRoot;
}
function Ye(e) {
    let { overflow: t, overflowX: n, overflowY: r, display: i } = W(e);
    return (
        /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
        i !== `inline` &&
        i !== `contents`
    );
}
function Xe(e) {
    return /^(table|td|th)$/.test(Ge(e));
}
function Ze(e) {
    try {
        if (e.matches(`:popover-open`)) return !0;
    } catch {}
    try {
        return e.matches(`:modal`);
    } catch {
        return !1;
    }
}
var Qe = /transform|translate|scale|rotate|perspective|filter/,
    $e = /paint|layout|strict|content/,
    et = (e) => !!e && e !== `none`,
    tt;
function nt(e) {
    let t = U(e) ? W(e) : e;
    return (
        et(t.transform) ||
        et(t.translate) ||
        et(t.scale) ||
        et(t.rotate) ||
        et(t.perspective) ||
        (!it() && (et(t.backdropFilter) || et(t.filter))) ||
        Qe.test(t.willChange || ``) ||
        $e.test(t.contain || ``)
    );
}
function rt(e) {
    let t = st(e);
    for (; qe(t) && !at(t); ) {
        if (nt(t)) return t;
        if (Ze(t)) return null;
        t = st(t);
    }
    return null;
}
function it() {
    return (
        (tt ??=
            typeof CSS < `u` &&
            CSS.supports &&
            CSS.supports(`-webkit-backdrop-filter`, `none`)),
        tt
    );
}
function at(e) {
    return /^(html|body|#document)$/.test(Ge(e));
}
function W(e) {
    return V(e).getComputedStyle(e);
}
function ot(e) {
    return U(e)
        ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
        : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function st(e) {
    if (Ge(e) === `html`) return e;
    let t = e.assignedSlot || e.parentNode || (Je(e) && e.host) || H(e);
    return Je(t) ? t.host : t;
}
function ct(e) {
    let t = st(e);
    return at(t)
        ? e.ownerDocument
            ? e.ownerDocument.body
            : e.body
        : qe(t) && Ye(t)
          ? t
          : ct(t);
}
function lt(e, t, n) {
    (t === void 0 && (t = []), n === void 0 && (n = !0));
    let r = ct(e),
        i = r === e.ownerDocument?.body,
        a = V(r);
    if (i) {
        let e = ut(a);
        return t.concat(
            a,
            a.visualViewport || [],
            Ye(r) ? r : [],
            e && n ? lt(e) : [],
        );
    } else return t.concat(r, lt(r, [], n));
}
function ut(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function dt(e) {
    let t = W(e),
        n = parseFloat(t.width) || 0,
        r = parseFloat(t.height) || 0,
        i = qe(e),
        a = i ? e.offsetWidth : n,
        o = i ? e.offsetHeight : r,
        s = oe(n) !== a || oe(r) !== o;
    return (s && ((n = a), (r = o)), { width: n, height: r, $: s });
}
function ft(e) {
    return U(e) ? e : e.contextElement;
}
function pt(e) {
    let t = ft(e);
    if (!qe(t)) return z(1);
    let n = t.getBoundingClientRect(),
        { width: r, height: i, $: a } = dt(t),
        o = (a ? oe(n.width) : n.width) / r,
        s = (a ? oe(n.height) : n.height) / i;
    return (
        (!o || !Number.isFinite(o)) && (o = 1),
        (!s || !Number.isFinite(s)) && (s = 1),
        { x: o, y: s }
    );
}
var mt = z(0);
function ht(e) {
    let t = V(e);
    return !it() || !t.visualViewport
        ? mt
        : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function gt(e, t, n) {
    return (t === void 0 && (t = !1), !n || (t && n !== V(e)) ? !1 : t);
}
function _t(e, t, n, r) {
    (t === void 0 && (t = !1), n === void 0 && (n = !1));
    let i = e.getBoundingClientRect(),
        a = ft(e),
        o = z(1);
    t && (r ? U(r) && (o = pt(r)) : (o = pt(e)));
    let s = gt(a, n, r) ? ht(a) : z(0),
        c = (i.left + s.x) / o.x,
        l = (i.top + s.y) / o.y,
        u = i.width / o.x,
        d = i.height / o.y;
    if (a) {
        let e = V(a),
            t = r && U(r) ? V(r) : r,
            n = e,
            i = ut(n);
        for (; i && r && t !== n; ) {
            let e = pt(i),
                t = i.getBoundingClientRect(),
                r = W(i),
                a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x,
                o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
            ((c *= e.x),
                (l *= e.y),
                (u *= e.x),
                (d *= e.y),
                (c += a),
                (l += o),
                (n = V(i)),
                (i = ut(n)));
        }
    }
    return Oe({ width: u, height: d, x: c, y: l });
}
function vt(e, t) {
    let n = ot(e).scrollLeft;
    return t ? t.left + n : _t(H(e)).left + n;
}
function yt(e, t) {
    let n = e.getBoundingClientRect();
    return { x: n.left + t.scrollLeft - vt(e, n), y: n.top + t.scrollTop };
}
function bt(e) {
    let { elements: t, rect: n, offsetParent: r, strategy: i } = e,
        a = i === `fixed`,
        o = H(r),
        s = t ? Ze(t.floating) : !1;
    if (r === o || (s && a)) return n;
    let c = { scrollLeft: 0, scrollTop: 0 },
        l = z(1),
        u = z(0),
        d = qe(r);
    if ((d || (!d && !a)) && ((Ge(r) !== `body` || Ye(o)) && (c = ot(r)), d)) {
        let e = _t(r);
        ((l = pt(r)), (u.x = e.x + r.clientLeft), (u.y = e.y + r.clientTop));
    }
    let f = o && !d && !a ? yt(o, c) : z(0);
    return {
        width: n.width * l.x,
        height: n.height * l.y,
        x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
        y: n.y * l.y - c.scrollTop * l.y + u.y + f.y,
    };
}
function xt(e) {
    return Array.from(e.getClientRects());
}
function St(e) {
    let t = H(e),
        n = ot(e),
        r = e.ownerDocument.body,
        i = R(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
        a = R(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight),
        o = -n.scrollLeft + vt(e),
        s = -n.scrollTop;
    return (
        W(r).direction === `rtl` && (o += R(t.clientWidth, r.clientWidth) - i),
        { width: i, height: a, x: o, y: s }
    );
}
var Ct = 25;
function wt(e, t) {
    let n = V(e),
        r = H(e),
        i = n.visualViewport,
        a = r.clientWidth,
        o = r.clientHeight,
        s = 0,
        c = 0;
    if (i) {
        ((a = i.width), (o = i.height));
        let e = it();
        (!e || (e && t === `fixed`)) && ((s = i.offsetLeft), (c = i.offsetTop));
    }
    let l = vt(r);
    if (l <= 0) {
        let e = r.ownerDocument,
            t = e.body,
            n = getComputedStyle(t),
            i =
                (e.compatMode === `CSS1Compat` &&
                    parseFloat(n.marginLeft) + parseFloat(n.marginRight)) ||
                0,
            o = Math.abs(r.clientWidth - t.clientWidth - i);
        o <= Ct && (a -= o);
    } else l <= Ct && (a += l);
    return { width: a, height: o, x: s, y: c };
}
function Tt(e, t) {
    let n = _t(e, !0, t === `fixed`),
        r = n.top + e.clientTop,
        i = n.left + e.clientLeft,
        a = qe(e) ? pt(e) : z(1);
    return {
        width: e.clientWidth * a.x,
        height: e.clientHeight * a.y,
        x: i * a.x,
        y: r * a.y,
    };
}
function Et(e, t, n) {
    let r;
    if (t === `viewport`) r = wt(e, n);
    else if (t === `document`) r = St(H(e));
    else if (U(t)) r = Tt(t, n);
    else {
        let n = ht(e);
        r = { x: t.x - n.x, y: t.y - n.y, width: t.width, height: t.height };
    }
    return Oe(r);
}
function Dt(e, t) {
    let n = st(e);
    return n === t || !U(n) || at(n)
        ? !1
        : W(n).position === `fixed` || Dt(n, t);
}
function Ot(e, t) {
    let n = t.get(e);
    if (n) return n;
    let r = lt(e, [], !1).filter((e) => U(e) && Ge(e) !== `body`),
        i = null,
        a = W(e).position === `fixed`,
        o = a ? st(e) : e;
    for (; U(o) && !at(o); ) {
        let t = W(o),
            n = nt(o);
        (!n && t.position === `fixed` && (i = null),
            (
                a
                    ? !n && !i
                    : (!n &&
                          t.position === `static` &&
                          i &&
                          (i.position === `absolute` ||
                              i.position === `fixed`)) ||
                      (Ye(o) && !n && Dt(e, o))
            )
                ? (r = r.filter((e) => e !== o))
                : (i = t),
            (o = st(o)));
    }
    return (t.set(e, r), r);
}
function kt(e) {
    let { element: t, boundary: n, rootBoundary: r, strategy: i } = e,
        a = [
            ...(n === `clippingAncestors`
                ? Ze(t)
                    ? []
                    : Ot(t, this._c)
                : [].concat(n)),
            r,
        ],
        o = Et(t, a[0], i),
        s = o.top,
        c = o.right,
        l = o.bottom,
        u = o.left;
    for (let e = 1; e < a.length; e++) {
        let n = Et(t, a[e], i);
        ((s = R(n.top, s)),
            (c = ae(n.right, c)),
            (l = ae(n.bottom, l)),
            (u = R(n.left, u)));
    }
    return { width: c - u, height: l - s, x: u, y: s };
}
function At(e) {
    let { width: t, height: n } = dt(e);
    return { width: t, height: n };
}
function jt(e, t, n) {
    let r = qe(t),
        i = H(t),
        a = n === `fixed`,
        o = _t(e, !0, a, t),
        s = { scrollLeft: 0, scrollTop: 0 },
        c = z(0);
    function l() {
        c.x = vt(i);
    }
    if (r || (!r && !a))
        if (((Ge(t) !== `body` || Ye(i)) && (s = ot(t)), r)) {
            let e = _t(t, !0, a, t);
            ((c.x = e.x + t.clientLeft), (c.y = e.y + t.clientTop));
        } else i && l();
    a && !r && i && l();
    let u = i && !r && !a ? yt(i, s) : z(0);
    return {
        x: o.left + s.scrollLeft - c.x - u.x,
        y: o.top + s.scrollTop - c.y - u.y,
        width: o.width,
        height: o.height,
    };
}
function Mt(e) {
    return W(e).position === `static`;
}
function Nt(e, t) {
    if (!qe(e) || W(e).position === `fixed`) return null;
    if (t) return t(e);
    let n = e.offsetParent;
    return (H(e) === n && (n = n.ownerDocument.body), n);
}
function Pt(e, t) {
    let n = V(e);
    if (Ze(e)) return n;
    if (!qe(e)) {
        let t = st(e);
        for (; t && !at(t); ) {
            if (U(t) && !Mt(t)) return t;
            t = st(t);
        }
        return n;
    }
    let r = Nt(e, t);
    for (; r && Xe(r) && Mt(r); ) r = Nt(r, t);
    return r && at(r) && Mt(r) && !nt(r) ? n : r || rt(e) || n;
}
var Ft = async function (e) {
    let t = this.getOffsetParent || Pt,
        n = this.getDimensions,
        r = await n(e.floating);
    return {
        reference: jt(e.reference, await t(e.floating), e.strategy),
        floating: { x: 0, y: 0, width: r.width, height: r.height },
    };
};
function It(e) {
    return W(e).direction === `rtl`;
}
var Lt = {
    convertOffsetParentRelativeRectToViewportRelativeRect: bt,
    getDocumentElement: H,
    getClippingRect: kt,
    getOffsetParent: Pt,
    getElementRects: Ft,
    getClientRects: xt,
    getDimensions: At,
    getScale: pt,
    isElement: U,
    isRTL: It,
};
function Rt(e, t) {
    return (
        e.x === t.x &&
        e.y === t.y &&
        e.width === t.width &&
        e.height === t.height
    );
}
function zt(e, t) {
    let n = null,
        r,
        i = H(e);
    function a() {
        var e;
        (clearTimeout(r), (e = n) == null || e.disconnect(), (n = null));
    }
    function o(s, c) {
        (s === void 0 && (s = !1), c === void 0 && (c = 1), a());
        let l = e.getBoundingClientRect(),
            { left: u, top: d, width: f, height: p } = l;
        if ((s || t(), !f || !p)) return;
        let m = se(d),
            h = se(i.clientWidth - (u + f)),
            g = se(i.clientHeight - (d + p)),
            _ = se(u),
            v = {
                rootMargin: -m + `px ` + -h + `px ` + -g + `px ` + -_ + `px`,
                threshold: R(0, ae(1, c)) || 1,
            },
            y = !0;
        function b(t) {
            let n = t[0].intersectionRatio;
            if (n !== c) {
                if (!y) return o();
                n
                    ? o(!1, n)
                    : (r = setTimeout(() => {
                          o(!1, 1e-7);
                      }, 1e3));
            }
            (n === 1 && !Rt(l, e.getBoundingClientRect()) && o(), (y = !1));
        }
        try {
            n = new IntersectionObserver(b, { ...v, root: i.ownerDocument });
        } catch {
            n = new IntersectionObserver(b, v);
        }
        n.observe(e);
    }
    return (o(!0), a);
}
function Bt(e, t, n, r) {
    r === void 0 && (r = {});
    let {
            ancestorScroll: i = !0,
            ancestorResize: a = !0,
            elementResize: o = typeof ResizeObserver == `function`,
            layoutShift: s = typeof IntersectionObserver == `function`,
            animationFrame: c = !1,
        } = r,
        l = ft(e),
        u = i || a ? [...(l ? lt(l) : []), ...(t ? lt(t) : [])] : [];
    u.forEach((e) => {
        (i && e.addEventListener(`scroll`, n, { passive: !0 }),
            a && e.addEventListener(`resize`, n));
    });
    let d = l && s ? zt(l, n) : null,
        f = -1,
        p = null;
    o &&
        ((p = new ResizeObserver((e) => {
            let [r] = e;
            (r &&
                r.target === l &&
                p &&
                t &&
                (p.unobserve(t),
                cancelAnimationFrame(f),
                (f = requestAnimationFrame(() => {
                    var e;
                    (e = p) == null || e.observe(t);
                }))),
                n());
        })),
        l && !c && p.observe(l),
        t && p.observe(t));
    let m,
        h = c ? _t(e) : null;
    c && g();
    function g() {
        let t = _t(e);
        (h && !Rt(h, t) && n(), (h = t), (m = requestAnimationFrame(g)));
    }
    return (
        n(),
        () => {
            var e;
            (u.forEach((e) => {
                (i && e.removeEventListener(`scroll`, n),
                    a && e.removeEventListener(`resize`, n));
            }),
                d?.(),
                (e = p) == null || e.disconnect(),
                (p = null),
                c && cancelAnimationFrame(m));
        }
    );
}
var Vt = Be,
    Ht = Ve,
    Ut = Pe,
    Wt = Ue,
    Gt = Le,
    Kt = Ne,
    qt = He,
    Jt = (e, t, n) => {
        let r = new Map(),
            i = { platform: Lt, ...n },
            a = { ...i.platform, _c: r };
        return Me(e, t, { ...i, platform: a });
    },
    Yt = typeof document < `u` ? o.useLayoutEffect : function () {};
function Xt(e, t) {
    if (e === t) return !0;
    if (typeof e != typeof t) return !1;
    if (typeof e == `function` && e.toString() === t.toString()) return !0;
    let n, r, i;
    if (e && t && typeof e == `object`) {
        if (Array.isArray(e)) {
            if (((n = e.length), n !== t.length)) return !1;
            for (r = n; r-- !== 0; ) if (!Xt(e[r], t[r])) return !1;
            return !0;
        }
        if (((i = Object.keys(e)), (n = i.length), n !== Object.keys(t).length))
            return !1;
        for (r = n; r-- !== 0; )
            if (!{}.hasOwnProperty.call(t, i[r])) return !1;
        for (r = n; r-- !== 0; ) {
            let n = i[r];
            if (!(n === `_owner` && e.$$typeof) && !Xt(e[n], t[n])) return !1;
        }
        return !0;
    }
    return e !== e && t !== t;
}
function Zt(e) {
    return typeof window > `u`
        ? 1
        : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Qt(e, t) {
    let n = Zt(e);
    return Math.round(t * n) / n;
}
function $t(e) {
    let t = o.useRef(e);
    return (
        Yt(() => {
            t.current = e;
        }),
        t
    );
}
function en(e) {
    e === void 0 && (e = {});
    let {
            placement: t = `bottom`,
            strategy: n = `absolute`,
            middleware: r = [],
            platform: i,
            elements: { reference: a, floating: s } = {},
            transform: c = !0,
            whileElementsMounted: l,
            open: u,
        } = e,
        [d, f] = o.useState({
            x: 0,
            y: 0,
            strategy: n,
            placement: t,
            middlewareData: {},
            isPositioned: !1,
        }),
        [p, h] = o.useState(r);
    Xt(p, r) || h(r);
    let [g, _] = o.useState(null),
        [v, y] = o.useState(null),
        b = o.useCallback((e) => {
            e !== w.current && ((w.current = e), _(e));
        }, []),
        x = o.useCallback((e) => {
            e !== T.current && ((T.current = e), y(e));
        }, []),
        S = a || g,
        C = s || v,
        w = o.useRef(null),
        T = o.useRef(null),
        E = o.useRef(d),
        D = l != null,
        O = $t(l),
        k = $t(i),
        A = $t(u),
        j = o.useCallback(() => {
            if (!w.current || !T.current) return;
            let e = { placement: t, strategy: n, middleware: p };
            (k.current && (e.platform = k.current),
                Jt(w.current, T.current, e).then((e) => {
                    let t = { ...e, isPositioned: A.current !== !1 };
                    M.current &&
                        !Xt(E.current, t) &&
                        ((E.current = t),
                        m.flushSync(() => {
                            f(t);
                        }));
                }));
        }, [p, t, n, k, A]);
    Yt(() => {
        u === !1 &&
            E.current.isPositioned &&
            ((E.current.isPositioned = !1),
            f((e) => ({ ...e, isPositioned: !1 })));
    }, [u]);
    let M = o.useRef(!1);
    (Yt(
        () => (
            (M.current = !0),
            () => {
                M.current = !1;
            }
        ),
        [],
    ),
        Yt(() => {
            if ((S && (w.current = S), C && (T.current = C), S && C)) {
                if (O.current) return O.current(S, C, j);
                j();
            }
        }, [S, C, j, O, D]));
    let N = o.useMemo(
            () => ({
                reference: w,
                floating: T,
                setReference: b,
                setFloating: x,
            }),
            [b, x],
        ),
        P = o.useMemo(() => ({ reference: S, floating: C }), [S, C]),
        ee = o.useMemo(() => {
            let e = { position: n, left: 0, top: 0 };
            if (!P.floating) return e;
            let t = Qt(P.floating, d.x),
                r = Qt(P.floating, d.y);
            return c
                ? {
                      ...e,
                      transform: `translate(` + t + `px, ` + r + `px)`,
                      ...(Zt(P.floating) >= 1.5 && { willChange: `transform` }),
                  }
                : { position: n, left: t, top: r };
        }, [n, c, P.floating, d.x, d.y]);
    return o.useMemo(
        () => ({ ...d, update: j, refs: N, elements: P, floatingStyles: ee }),
        [d, j, N, P, ee],
    );
}
var tn = (e) => {
        function t(e) {
            return {}.hasOwnProperty.call(e, `current`);
        }
        return {
            name: `arrow`,
            options: e,
            fn(n) {
                let { element: r, padding: i } =
                    typeof e == `function` ? e(n) : e;
                return r && t(r)
                    ? r.current == null
                        ? {}
                        : Kt({ element: r.current, padding: i }).fn(n)
                    : r
                      ? Kt({ element: r, padding: i }).fn(n)
                      : {};
            },
        };
    },
    nn = (e, t) => {
        let n = Vt(e);
        return { name: n.name, fn: n.fn, options: [e, t] };
    },
    rn = (e, t) => {
        let n = Ht(e);
        return { name: n.name, fn: n.fn, options: [e, t] };
    },
    an = (e, t) => ({ fn: qt(e).fn, options: [e, t] }),
    on = (e, t) => {
        let n = Ut(e);
        return { name: n.name, fn: n.fn, options: [e, t] };
    },
    sn = (e, t) => {
        let n = Wt(e);
        return { name: n.name, fn: n.fn, options: [e, t] };
    },
    cn = (e, t) => {
        let n = Gt(e);
        return { name: n.name, fn: n.fn, options: [e, t] };
    },
    ln = (e, t) => {
        let n = tn(e);
        return { name: n.name, fn: n.fn, options: [e, t] };
    };
function un(e) {
    let t = dn(e),
        n = o.forwardRef((e, n) => {
            let { children: r, ...i } = e,
                a = o.Children.toArray(r),
                s = a.find(pn);
            if (s) {
                let e = s.props.children,
                    r = a.map((t) =>
                        t === s
                            ? o.Children.count(e) > 1
                                ? o.Children.only(null)
                                : o.isValidElement(e)
                                  ? e.props.children
                                  : null
                            : t,
                    );
                return (0, d.jsx)(t, {
                    ...i,
                    ref: n,
                    children: o.isValidElement(e)
                        ? o.cloneElement(e, void 0, r)
                        : null,
                });
            }
            return (0, d.jsx)(t, { ...i, ref: n, children: r });
        });
    return ((n.displayName = `${e}.Slot`), n);
}
function dn(e) {
    let t = o.forwardRef((e, t) => {
        let { children: n, ...r } = e;
        if (o.isValidElement(n)) {
            let e = hn(n),
                i = mn(r, n.props);
            return (
                n.type !== o.Fragment && (i.ref = t ? l(t, e) : e),
                o.cloneElement(n, i)
            );
        }
        return o.Children.count(n) > 1 ? o.Children.only(null) : null;
    });
    return ((t.displayName = `${e}.SlotClone`), t);
}
var fn = Symbol(`radix.slottable`);
function pn(e) {
    return (
        o.isValidElement(e) &&
        typeof e.type == `function` &&
        `__radixId` in e.type &&
        e.type.__radixId === fn
    );
}
function mn(e, t) {
    let n = { ...t };
    for (let r in t) {
        let i = e[r],
            a = t[r];
        /^on[A-Z]/.test(r)
            ? i && a
                ? (n[r] = (...e) => {
                      let t = a(...e);
                      return (i(...e), t);
                  })
                : i && (n[r] = i)
            : r === `style`
              ? (n[r] = { ...i, ...a })
              : r === `className` && (n[r] = [i, a].filter(Boolean).join(` `));
    }
    return { ...e, ...n };
}
function hn(e) {
    let t = Object.getOwnPropertyDescriptor(e.props, `ref`)?.get,
        n = t && `isReactWarning` in t && t.isReactWarning;
    return n
        ? e.ref
        : ((t = Object.getOwnPropertyDescriptor(e, `ref`)?.get),
          (n = t && `isReactWarning` in t && t.isReactWarning),
          n ? e.props.ref : e.props.ref || e.ref);
}
var gn = [
        `a`,
        `button`,
        `div`,
        `form`,
        `h2`,
        `h3`,
        `img`,
        `input`,
        `label`,
        `li`,
        `nav`,
        `ol`,
        `p`,
        `select`,
        `span`,
        `svg`,
        `ul`,
    ].reduce((e, t) => {
        let n = un(`Primitive.${t}`),
            r = o.forwardRef((e, r) => {
                let { asChild: i, ...a } = e,
                    o = i ? n : t;
                return (
                    typeof window < `u` &&
                        (window[Symbol.for(`radix-ui`)] = !0),
                    (0, d.jsx)(o, { ...a, ref: r })
                );
            });
        return ((r.displayName = `Primitive.${t}`), { ...e, [t]: r });
    }, {}),
    _n = `Arrow`,
    vn = o.forwardRef((e, t) => {
        let { children: n, width: r = 10, height: i = 5, ...a } = e;
        return (0, d.jsx)(gn.svg, {
            ...a,
            ref: t,
            width: r,
            height: i,
            viewBox: `0 0 30 10`,
            preserveAspectRatio: `none`,
            children: e.asChild
                ? n
                : (0, d.jsx)(`polygon`, { points: `0,0 30,0 15,10` }),
        });
    });
vn.displayName = _n;
var yn = vn;
function bn(e, t = []) {
    let n = [];
    function r(t, r) {
        let i = o.createContext(r),
            a = n.length;
        n = [...n, r];
        let s = (t) => {
            let { scope: n, children: r, ...s } = t,
                c = n?.[e]?.[a] || i,
                l = o.useMemo(() => s, Object.values(s));
            return (0, d.jsx)(c.Provider, { value: l, children: r });
        };
        s.displayName = t + `Provider`;
        function c(n, s) {
            let c = s?.[e]?.[a] || i,
                l = o.useContext(c);
            if (l) return l;
            if (r !== void 0) return r;
            throw Error(`\`${n}\` must be used within \`${t}\``);
        }
        return [s, c];
    }
    let i = () => {
        let t = n.map((e) => o.createContext(e));
        return function (n) {
            let r = n?.[e] || t;
            return o.useMemo(
                () => ({ [`__scope${e}`]: { ...n, [e]: r } }),
                [n, r],
            );
        };
    };
    return ((i.scopeName = e), [r, xn(i, ...t)]);
}
function xn(...e) {
    let t = e[0];
    if (e.length === 1) return t;
    let n = () => {
        let n = e.map((e) => ({ useScope: e(), scopeName: e.scopeName }));
        return function (e) {
            let r = n.reduce((t, { useScope: n, scopeName: r }) => {
                let i = n(e)[`__scope${r}`];
                return { ...t, ...i };
            }, {});
            return o.useMemo(() => ({ [`__scope${t.scopeName}`]: r }), [r]);
        };
    };
    return ((n.scopeName = t.scopeName), n);
}
function Sn(e) {
    let t = Cn(e),
        n = o.forwardRef((e, n) => {
            let { children: r, ...i } = e,
                a = o.Children.toArray(r),
                s = a.find(Tn);
            if (s) {
                let e = s.props.children,
                    r = a.map((t) =>
                        t === s
                            ? o.Children.count(e) > 1
                                ? o.Children.only(null)
                                : o.isValidElement(e)
                                  ? e.props.children
                                  : null
                            : t,
                    );
                return (0, d.jsx)(t, {
                    ...i,
                    ref: n,
                    children: o.isValidElement(e)
                        ? o.cloneElement(e, void 0, r)
                        : null,
                });
            }
            return (0, d.jsx)(t, { ...i, ref: n, children: r });
        });
    return ((n.displayName = `${e}.Slot`), n);
}
function Cn(e) {
    let t = o.forwardRef((e, t) => {
        let { children: n, ...r } = e;
        if (o.isValidElement(n)) {
            let e = Dn(n),
                i = En(r, n.props);
            return (
                n.type !== o.Fragment && (i.ref = t ? l(t, e) : e),
                o.cloneElement(n, i)
            );
        }
        return o.Children.count(n) > 1 ? o.Children.only(null) : null;
    });
    return ((t.displayName = `${e}.SlotClone`), t);
}
var wn = Symbol(`radix.slottable`);
function Tn(e) {
    return (
        o.isValidElement(e) &&
        typeof e.type == `function` &&
        `__radixId` in e.type &&
        e.type.__radixId === wn
    );
}
function En(e, t) {
    let n = { ...t };
    for (let r in t) {
        let i = e[r],
            a = t[r];
        /^on[A-Z]/.test(r)
            ? i && a
                ? (n[r] = (...e) => {
                      let t = a(...e);
                      return (i(...e), t);
                  })
                : i && (n[r] = i)
            : r === `style`
              ? (n[r] = { ...i, ...a })
              : r === `className` && (n[r] = [i, a].filter(Boolean).join(` `));
    }
    return { ...e, ...n };
}
function Dn(e) {
    let t = Object.getOwnPropertyDescriptor(e.props, `ref`)?.get,
        n = t && `isReactWarning` in t && t.isReactWarning;
    return n
        ? e.ref
        : ((t = Object.getOwnPropertyDescriptor(e, `ref`)?.get),
          (n = t && `isReactWarning` in t && t.isReactWarning),
          n ? e.props.ref : e.props.ref || e.ref);
}
var On = [
    `a`,
    `button`,
    `div`,
    `form`,
    `h2`,
    `h3`,
    `img`,
    `input`,
    `label`,
    `li`,
    `nav`,
    `ol`,
    `p`,
    `select`,
    `span`,
    `svg`,
    `ul`,
].reduce((e, t) => {
    let n = Sn(`Primitive.${t}`),
        r = o.forwardRef((e, r) => {
            let { asChild: i, ...a } = e,
                o = i ? n : t;
            return (
                typeof window < `u` && (window[Symbol.for(`radix-ui`)] = !0),
                (0, d.jsx)(o, { ...a, ref: r })
            );
        });
    return ((r.displayName = `Primitive.${t}`), { ...e, [t]: r });
}, {});
function kn(e) {
    let [t, n] = o.useState(void 0);
    return (
        F(() => {
            if (e) {
                n({ width: e.offsetWidth, height: e.offsetHeight });
                let t = new ResizeObserver((t) => {
                    if (!Array.isArray(t) || !t.length) return;
                    let r = t[0],
                        i,
                        a;
                    if (`borderBoxSize` in r) {
                        let e = r.borderBoxSize,
                            t = Array.isArray(e) ? e[0] : e;
                        ((i = t.inlineSize), (a = t.blockSize));
                    } else ((i = e.offsetWidth), (a = e.offsetHeight));
                    n({ width: i, height: a });
                });
                return (
                    t.observe(e, { box: `border-box` }),
                    () => t.unobserve(e)
                );
            } else n(void 0);
        }, [e]),
        t
    );
}
var An = `Popper`,
    [jn, Mn] = bn(An),
    [Nn, Pn] = jn(An),
    Fn = (e) => {
        let { __scopePopper: t, children: n } = e,
            [r, i] = o.useState(null);
        return (0, d.jsx)(Nn, {
            scope: t,
            anchor: r,
            onAnchorChange: i,
            children: n,
        });
    };
Fn.displayName = An;
var In = `PopperAnchor`,
    Ln = o.forwardRef((e, t) => {
        let { __scopePopper: n, virtualRef: r, ...i } = e,
            a = Pn(In, n),
            s = o.useRef(null),
            c = u(t, s),
            l = o.useRef(null);
        return (
            o.useEffect(() => {
                let e = l.current;
                ((l.current = r?.current || s.current),
                    e !== l.current && a.onAnchorChange(l.current));
            }),
            r ? null : (0, d.jsx)(On.div, { ...i, ref: c })
        );
    });
Ln.displayName = In;
var Rn = `PopperContent`,
    [zn, Bn] = jn(Rn),
    Vn = o.forwardRef((e, t) => {
        let {
                __scopePopper: n,
                side: r = `bottom`,
                sideOffset: i = 0,
                align: a = `center`,
                alignOffset: s = 0,
                arrowPadding: c = 0,
                avoidCollisions: l = !0,
                collisionBoundary: f = [],
                collisionPadding: p = 0,
                sticky: m = `partial`,
                hideWhenDetached: h = !1,
                updatePositionStrategy: g = `optimized`,
                onPlaced: _,
                ...v
            } = e,
            y = Pn(Rn, n),
            [b, x] = o.useState(null),
            S = u(t, (e) => x(e)),
            [w, T] = o.useState(null),
            E = kn(w),
            D = E?.width ?? 0,
            O = E?.height ?? 0,
            k = r + (a === `center` ? `` : `-` + a),
            A =
                typeof p == `number`
                    ? p
                    : { top: 0, right: 0, bottom: 0, left: 0, ...p },
            j = Array.isArray(f) ? f : [f],
            M = j.length > 0,
            N = { padding: A, boundary: j.filter(Gn), altBoundary: M },
            {
                refs: P,
                floatingStyles: ee,
                placement: te,
                isPositioned: ne,
                middlewareData: I,
            } = en({
                strategy: `fixed`,
                placement: k,
                whileElementsMounted: (...e) =>
                    Bt(...e, { animationFrame: g === `always` }),
                elements: { reference: y.anchor },
                middleware: [
                    nn({ mainAxis: i + O, alignmentAxis: s }),
                    l &&
                        rn({
                            mainAxis: !0,
                            crossAxis: !1,
                            limiter: m === `partial` ? an() : void 0,
                            ...N,
                        }),
                    l && on({ ...N }),
                    sn({
                        ...N,
                        apply: ({
                            elements: e,
                            rects: t,
                            availableWidth: n,
                            availableHeight: r,
                        }) => {
                            let { width: i, height: a } = t.reference,
                                o = e.floating.style;
                            (o.setProperty(
                                `--radix-popper-available-width`,
                                `${n}px`,
                            ),
                                o.setProperty(
                                    `--radix-popper-available-height`,
                                    `${r}px`,
                                ),
                                o.setProperty(
                                    `--radix-popper-anchor-width`,
                                    `${i}px`,
                                ),
                                o.setProperty(
                                    `--radix-popper-anchor-height`,
                                    `${a}px`,
                                ));
                        },
                    }),
                    w && ln({ element: w, padding: c }),
                    Kn({ arrowWidth: D, arrowHeight: O }),
                    h && cn({ strategy: `referenceHidden`, ...N }),
                ],
            }),
            [re, L] = qn(te),
            ie = C(_);
        F(() => {
            ne && ie?.();
        }, [ne, ie]);
        let ae = I.arrow?.x,
            R = I.arrow?.y,
            oe = I.arrow?.centerOffset !== 0,
            [se, z] = o.useState();
        return (
            F(() => {
                b && z(window.getComputedStyle(b).zIndex);
            }, [b]),
            (0, d.jsx)(`div`, {
                ref: P.setFloating,
                'data-radix-popper-content-wrapper': ``,
                style: {
                    ...ee,
                    transform: ne ? ee.transform : `translate(0, -200%)`,
                    minWidth: `max-content`,
                    zIndex: se,
                    '--radix-popper-transform-origin': [
                        I.transformOrigin?.x,
                        I.transformOrigin?.y,
                    ].join(` `),
                    ...(I.hide?.referenceHidden && {
                        visibility: `hidden`,
                        pointerEvents: `none`,
                    }),
                },
                dir: e.dir,
                children: (0, d.jsx)(zn, {
                    scope: n,
                    placedSide: re,
                    onArrowChange: T,
                    arrowX: ae,
                    arrowY: R,
                    shouldHideArrow: oe,
                    children: (0, d.jsx)(On.div, {
                        'data-side': re,
                        'data-align': L,
                        ...v,
                        ref: S,
                        style: { ...v.style, animation: ne ? void 0 : `none` },
                    }),
                }),
            })
        );
    });
Vn.displayName = Rn;
var Hn = `PopperArrow`,
    Un = { top: `bottom`, right: `left`, bottom: `top`, left: `right` },
    Wn = o.forwardRef(function (e, t) {
        let { __scopePopper: n, ...r } = e,
            i = Bn(Hn, n),
            a = Un[i.placedSide];
        return (0, d.jsx)(`span`, {
            ref: i.onArrowChange,
            style: {
                position: `absolute`,
                left: i.arrowX,
                top: i.arrowY,
                [a]: 0,
                transformOrigin: {
                    top: ``,
                    right: `0 0`,
                    bottom: `center 0`,
                    left: `100% 0`,
                }[i.placedSide],
                transform: {
                    top: `translateY(100%)`,
                    right: `translateY(50%) rotate(90deg) translateX(-50%)`,
                    bottom: `rotate(180deg)`,
                    left: `translateY(50%) rotate(-90deg) translateX(50%)`,
                }[i.placedSide],
                visibility: i.shouldHideArrow ? `hidden` : void 0,
            },
            children: (0, d.jsx)(yn, {
                ...r,
                ref: t,
                style: { ...r.style, display: `block` },
            }),
        });
    });
Wn.displayName = Hn;
function Gn(e) {
    return e !== null;
}
var Kn = (e) => ({
    name: `transformOrigin`,
    options: e,
    fn(t) {
        let { placement: n, rects: r, middlewareData: i } = t,
            a = i.arrow?.centerOffset !== 0,
            o = a ? 0 : e.arrowWidth,
            s = a ? 0 : e.arrowHeight,
            [c, l] = qn(n),
            u = { start: `0%`, center: `50%`, end: `100%` }[l],
            d = (i.arrow?.x ?? 0) + o / 2,
            f = (i.arrow?.y ?? 0) + s / 2,
            p = ``,
            m = ``;
        return (
            c === `bottom`
                ? ((p = a ? u : `${d}px`), (m = `${-s}px`))
                : c === `top`
                  ? ((p = a ? u : `${d}px`), (m = `${r.floating.height + s}px`))
                  : c === `right`
                    ? ((p = `${-s}px`), (m = a ? u : `${f}px`))
                    : c === `left` &&
                      ((p = `${r.floating.width + s}px`),
                      (m = a ? u : `${f}px`)),
            { data: { x: p, y: m } }
        );
    },
});
function qn(e) {
    let [t, n = `center`] = e.split(`-`);
    return [t, n];
}
var Jn = Fn,
    Yn = Ln,
    Xn = Vn,
    Zn = Wn;
function Qn(e) {
    let t = $n(e),
        n = o.forwardRef((e, n) => {
            let { children: r, ...i } = e,
                a = o.Children.toArray(r),
                s = a.find(tr);
            if (s) {
                let e = s.props.children,
                    r = a.map((t) =>
                        t === s
                            ? o.Children.count(e) > 1
                                ? o.Children.only(null)
                                : o.isValidElement(e)
                                  ? e.props.children
                                  : null
                            : t,
                    );
                return (0, d.jsx)(t, {
                    ...i,
                    ref: n,
                    children: o.isValidElement(e)
                        ? o.cloneElement(e, void 0, r)
                        : null,
                });
            }
            return (0, d.jsx)(t, { ...i, ref: n, children: r });
        });
    return ((n.displayName = `${e}.Slot`), n);
}
function $n(e) {
    let t = o.forwardRef((e, t) => {
        let { children: n, ...r } = e;
        if (o.isValidElement(n)) {
            let e = rr(n),
                i = nr(r, n.props);
            return (
                n.type !== o.Fragment && (i.ref = t ? l(t, e) : e),
                o.cloneElement(n, i)
            );
        }
        return o.Children.count(n) > 1 ? o.Children.only(null) : null;
    });
    return ((t.displayName = `${e}.SlotClone`), t);
}
var er = Symbol(`radix.slottable`);
function tr(e) {
    return (
        o.isValidElement(e) &&
        typeof e.type == `function` &&
        `__radixId` in e.type &&
        e.type.__radixId === er
    );
}
function nr(e, t) {
    let n = { ...t };
    for (let r in t) {
        let i = e[r],
            a = t[r];
        /^on[A-Z]/.test(r)
            ? i && a
                ? (n[r] = (...e) => {
                      let t = a(...e);
                      return (i(...e), t);
                  })
                : i && (n[r] = i)
            : r === `style`
              ? (n[r] = { ...i, ...a })
              : r === `className` && (n[r] = [i, a].filter(Boolean).join(` `));
    }
    return { ...e, ...n };
}
function rr(e) {
    let t = Object.getOwnPropertyDescriptor(e.props, `ref`)?.get,
        n = t && `isReactWarning` in t && t.isReactWarning;
    return n
        ? e.ref
        : ((t = Object.getOwnPropertyDescriptor(e, `ref`)?.get),
          (n = t && `isReactWarning` in t && t.isReactWarning),
          n ? e.props.ref : e.props.ref || e.ref);
}
var ir = [
        `a`,
        `button`,
        `div`,
        `form`,
        `h2`,
        `h3`,
        `img`,
        `input`,
        `label`,
        `li`,
        `nav`,
        `ol`,
        `p`,
        `select`,
        `span`,
        `svg`,
        `ul`,
    ].reduce((e, t) => {
        let n = Qn(`Primitive.${t}`),
            r = o.forwardRef((e, r) => {
                let { asChild: i, ...a } = e,
                    o = i ? n : t;
                return (
                    typeof window < `u` &&
                        (window[Symbol.for(`radix-ui`)] = !0),
                    (0, d.jsx)(o, { ...a, ref: r })
                );
            });
        return ((r.displayName = `Primitive.${t}`), { ...e, [t]: r });
    }, {}),
    ar = `Portal`,
    or = o.forwardRef((e, t) => {
        let { container: n, ...r } = e,
            [i, a] = o.useState(!1);
        F(() => a(!0), []);
        let s = n || (i && globalThis?.document?.body);
        return s
            ? m.createPortal((0, d.jsx)(ir.div, { ...r, ref: t }), s)
            : null;
    });
or.displayName = ar;
function sr(e, t) {
    return o.useReducer((e, n) => t[e][n] ?? e, e);
}
var G = (e) => {
    let { present: t, children: n } = e,
        r = cr(t),
        i =
            typeof n == `function`
                ? n({ present: r.isPresent })
                : o.Children.only(n),
        a = u(r.ref, ur(i));
    return typeof n == `function` || r.isPresent
        ? o.cloneElement(i, { ref: a })
        : null;
};
G.displayName = `Presence`;
function cr(e) {
    let [t, n] = o.useState(),
        r = o.useRef(null),
        i = o.useRef(e),
        a = o.useRef(`none`),
        [s, c] = sr(e ? `mounted` : `unmounted`, {
            mounted: {
                UNMOUNT: `unmounted`,
                ANIMATION_OUT: `unmountSuspended`,
            },
            unmountSuspended: { MOUNT: `mounted`, ANIMATION_END: `unmounted` },
            unmounted: { MOUNT: `mounted` },
        });
    return (
        o.useEffect(() => {
            let e = lr(r.current);
            a.current = s === `mounted` ? e : `none`;
        }, [s]),
        F(() => {
            let t = r.current,
                n = i.current;
            if (n !== e) {
                let r = a.current,
                    o = lr(t);
                (e
                    ? c(`MOUNT`)
                    : o === `none` || t?.display === `none`
                      ? c(`UNMOUNT`)
                      : c(n && r !== o ? `ANIMATION_OUT` : `UNMOUNT`),
                    (i.current = e));
            }
        }, [e, c]),
        F(() => {
            if (t) {
                let e,
                    n = t.ownerDocument.defaultView ?? window,
                    o = (a) => {
                        let o = lr(r.current).includes(
                            CSS.escape(a.animationName),
                        );
                        if (
                            a.target === t &&
                            o &&
                            (c(`ANIMATION_END`), !i.current)
                        ) {
                            let r = t.style.animationFillMode;
                            ((t.style.animationFillMode = `forwards`),
                                (e = n.setTimeout(() => {
                                    t.style.animationFillMode === `forwards` &&
                                        (t.style.animationFillMode = r);
                                })));
                        }
                    },
                    s = (e) => {
                        e.target === t && (a.current = lr(r.current));
                    };
                return (
                    t.addEventListener(`animationstart`, s),
                    t.addEventListener(`animationcancel`, o),
                    t.addEventListener(`animationend`, o),
                    () => {
                        (n.clearTimeout(e),
                            t.removeEventListener(`animationstart`, s),
                            t.removeEventListener(`animationcancel`, o),
                            t.removeEventListener(`animationend`, o));
                    }
                );
            } else c(`ANIMATION_END`);
        }, [t, c]),
        {
            isPresent: [`mounted`, `unmountSuspended`].includes(s),
            ref: o.useCallback((e) => {
                ((r.current = e ? getComputedStyle(e) : null), n(e));
            }, []),
        }
    );
}
function lr(e) {
    return e?.animationName || `none`;
}
function ur(e) {
    let t = Object.getOwnPropertyDescriptor(e.props, `ref`)?.get,
        n = t && `isReactWarning` in t && t.isReactWarning;
    return n
        ? e.ref
        : ((t = Object.getOwnPropertyDescriptor(e, `ref`)?.get),
          (n = t && `isReactWarning` in t && t.isReactWarning),
          n ? e.props.ref : e.props.ref || e.ref);
}
function dr(e) {
    let t = fr(e),
        n = o.forwardRef((e, n) => {
            let { children: r, ...i } = e,
                a = o.Children.toArray(r),
                s = a.find(hr);
            if (s) {
                let e = s.props.children,
                    r = a.map((t) =>
                        t === s
                            ? o.Children.count(e) > 1
                                ? o.Children.only(null)
                                : o.isValidElement(e)
                                  ? e.props.children
                                  : null
                            : t,
                    );
                return (0, d.jsx)(t, {
                    ...i,
                    ref: n,
                    children: o.isValidElement(e)
                        ? o.cloneElement(e, void 0, r)
                        : null,
                });
            }
            return (0, d.jsx)(t, { ...i, ref: n, children: r });
        });
    return ((n.displayName = `${e}.Slot`), n);
}
function fr(e) {
    let t = o.forwardRef((e, t) => {
        let { children: n, ...r } = e;
        if (o.isValidElement(n)) {
            let e = _r(n),
                i = gr(r, n.props);
            return (
                n.type !== o.Fragment && (i.ref = t ? l(t, e) : e),
                o.cloneElement(n, i)
            );
        }
        return o.Children.count(n) > 1 ? o.Children.only(null) : null;
    });
    return ((t.displayName = `${e}.SlotClone`), t);
}
var pr = Symbol(`radix.slottable`);
function mr(e) {
    let t = ({ children: e }) => (0, d.jsx)(d.Fragment, { children: e });
    return ((t.displayName = `${e}.Slottable`), (t.__radixId = pr), t);
}
function hr(e) {
    return (
        o.isValidElement(e) &&
        typeof e.type == `function` &&
        `__radixId` in e.type &&
        e.type.__radixId === pr
    );
}
function gr(e, t) {
    let n = { ...t };
    for (let r in t) {
        let i = e[r],
            a = t[r];
        /^on[A-Z]/.test(r)
            ? i && a
                ? (n[r] = (...e) => {
                      let t = a(...e);
                      return (i(...e), t);
                  })
                : i && (n[r] = i)
            : r === `style`
              ? (n[r] = { ...i, ...a })
              : r === `className` && (n[r] = [i, a].filter(Boolean).join(` `));
    }
    return { ...e, ...n };
}
function _r(e) {
    let t = Object.getOwnPropertyDescriptor(e.props, `ref`)?.get,
        n = t && `isReactWarning` in t && t.isReactWarning;
    return n
        ? e.ref
        : ((t = Object.getOwnPropertyDescriptor(e, `ref`)?.get),
          (n = t && `isReactWarning` in t && t.isReactWarning),
          n ? e.props.ref : e.props.ref || e.ref);
}
var vr = [
        `a`,
        `button`,
        `div`,
        `form`,
        `h2`,
        `h3`,
        `img`,
        `input`,
        `label`,
        `li`,
        `nav`,
        `ol`,
        `p`,
        `select`,
        `span`,
        `svg`,
        `ul`,
    ].reduce((e, t) => {
        let n = dr(`Primitive.${t}`),
            r = o.forwardRef((e, r) => {
                let { asChild: i, ...a } = e,
                    o = i ? n : t;
                return (
                    typeof window < `u` &&
                        (window[Symbol.for(`radix-ui`)] = !0),
                    (0, d.jsx)(o, { ...a, ref: r })
                );
            });
        return ((r.displayName = `Primitive.${t}`), { ...e, [t]: r });
    }, {}),
    yr = o.useInsertionEffect || F;
function K({ prop: e, defaultProp: t, onChange: n = () => {}, caller: r }) {
    let [i, a, s] = br({ defaultProp: t, onChange: n }),
        c = e !== void 0,
        l = c ? e : i;
    {
        let t = o.useRef(e !== void 0);
        o.useEffect(() => {
            let e = t.current;
            (e !== c &&
                console.warn(
                    `${r} is changing from ${e ? `controlled` : `uncontrolled`} to ${c ? `controlled` : `uncontrolled`}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`,
                ),
                (t.current = c));
        }, [c, r]);
    }
    return [
        l,
        o.useCallback(
            (t) => {
                if (c) {
                    let n = xr(t) ? t(e) : t;
                    n !== e && s.current?.(n);
                } else a(t);
            },
            [c, e, a, s],
        ),
    ];
}
function br({ defaultProp: e, onChange: t }) {
    let [n, r] = o.useState(e),
        i = o.useRef(n),
        a = o.useRef(t);
    return (
        yr(() => {
            a.current = t;
        }, [t]),
        o.useEffect(() => {
            i.current !== n && (a.current?.(n), (i.current = n));
        }, [n, i]),
        [n, r, a]
    );
}
function xr(e) {
    return typeof e == `function`;
}
function Sr(e) {
    let t = Cr(e),
        n = o.forwardRef((e, n) => {
            let { children: r, ...i } = e,
                a = o.Children.toArray(r),
                s = a.find(Tr);
            if (s) {
                let e = s.props.children,
                    r = a.map((t) =>
                        t === s
                            ? o.Children.count(e) > 1
                                ? o.Children.only(null)
                                : o.isValidElement(e)
                                  ? e.props.children
                                  : null
                            : t,
                    );
                return (0, d.jsx)(t, {
                    ...i,
                    ref: n,
                    children: o.isValidElement(e)
                        ? o.cloneElement(e, void 0, r)
                        : null,
                });
            }
            return (0, d.jsx)(t, { ...i, ref: n, children: r });
        });
    return ((n.displayName = `${e}.Slot`), n);
}
function Cr(e) {
    let t = o.forwardRef((e, t) => {
        let { children: n, ...r } = e;
        if (o.isValidElement(n)) {
            let e = Dr(n),
                i = Er(r, n.props);
            return (
                n.type !== o.Fragment && (i.ref = t ? l(t, e) : e),
                o.cloneElement(n, i)
            );
        }
        return o.Children.count(n) > 1 ? o.Children.only(null) : null;
    });
    return ((t.displayName = `${e}.SlotClone`), t);
}
var wr = Symbol(`radix.slottable`);
function Tr(e) {
    return (
        o.isValidElement(e) &&
        typeof e.type == `function` &&
        `__radixId` in e.type &&
        e.type.__radixId === wr
    );
}
function Er(e, t) {
    let n = { ...t };
    for (let r in t) {
        let i = e[r],
            a = t[r];
        /^on[A-Z]/.test(r)
            ? i && a
                ? (n[r] = (...e) => {
                      let t = a(...e);
                      return (i(...e), t);
                  })
                : i && (n[r] = i)
            : r === `style`
              ? (n[r] = { ...i, ...a })
              : r === `className` && (n[r] = [i, a].filter(Boolean).join(` `));
    }
    return { ...e, ...n };
}
function Dr(e) {
    let t = Object.getOwnPropertyDescriptor(e.props, `ref`)?.get,
        n = t && `isReactWarning` in t && t.isReactWarning;
    return n
        ? e.ref
        : ((t = Object.getOwnPropertyDescriptor(e, `ref`)?.get),
          (n = t && `isReactWarning` in t && t.isReactWarning),
          n ? e.props.ref : e.props.ref || e.ref);
}
var Or = [
        `a`,
        `button`,
        `div`,
        `form`,
        `h2`,
        `h3`,
        `img`,
        `input`,
        `label`,
        `li`,
        `nav`,
        `ol`,
        `p`,
        `select`,
        `span`,
        `svg`,
        `ul`,
    ].reduce((e, t) => {
        let n = Sr(`Primitive.${t}`),
            r = o.forwardRef((e, r) => {
                let { asChild: i, ...a } = e,
                    o = i ? n : t;
                return (
                    typeof window < `u` &&
                        (window[Symbol.for(`radix-ui`)] = !0),
                    (0, d.jsx)(o, { ...a, ref: r })
                );
            });
        return ((r.displayName = `Primitive.${t}`), { ...e, [t]: r });
    }, {}),
    kr = Object.freeze({
        position: `absolute`,
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: `hidden`,
        clip: `rect(0, 0, 0, 0)`,
        whiteSpace: `nowrap`,
        wordWrap: `normal`,
    }),
    Ar = `VisuallyHidden`,
    jr = o.forwardRef((e, t) =>
        (0, d.jsx)(Or.span, { ...e, ref: t, style: { ...kr, ...e.style } }),
    );
jr.displayName = Ar;
var Mr = jr,
    [Nr, Pr] = f(`Tooltip`, [Mn]),
    Fr = Mn(),
    Ir = `TooltipProvider`,
    Lr = 700,
    Rr = `tooltip.open`,
    [zr, Br] = Nr(Ir),
    Vr = (e) => {
        let {
                __scopeTooltip: t,
                delayDuration: n = Lr,
                skipDelayDuration: r = 300,
                disableHoverableContent: i = !1,
                children: a,
            } = e,
            s = o.useRef(!0),
            c = o.useRef(!1),
            l = o.useRef(0);
        return (
            o.useEffect(() => {
                let e = l.current;
                return () => window.clearTimeout(e);
            }, []),
            (0, d.jsx)(zr, {
                scope: t,
                isOpenDelayedRef: s,
                delayDuration: n,
                onOpen: o.useCallback(() => {
                    (window.clearTimeout(l.current), (s.current = !1));
                }, []),
                onClose: o.useCallback(() => {
                    (window.clearTimeout(l.current),
                        (l.current = window.setTimeout(
                            () => (s.current = !0),
                            r,
                        )));
                }, [r]),
                isPointerInTransitRef: c,
                onPointerInTransitChange: o.useCallback((e) => {
                    c.current = e;
                }, []),
                disableHoverableContent: i,
                children: a,
            })
        );
    };
Vr.displayName = Ir;
var Hr = `Tooltip`,
    [Ur, Wr] = Nr(Hr),
    Gr = (e) => {
        let {
                __scopeTooltip: t,
                children: n,
                open: r,
                defaultOpen: i,
                onOpenChange: a,
                disableHoverableContent: s,
                delayDuration: c,
            } = e,
            l = Br(Hr, e.__scopeTooltip),
            u = Fr(t),
            [f, p] = o.useState(null),
            m = L(),
            h = o.useRef(0),
            g = s ?? l.disableHoverableContent,
            _ = c ?? l.delayDuration,
            v = o.useRef(!1),
            [y, b] = K({
                prop: r,
                defaultProp: i ?? !1,
                onChange: (e) => {
                    (e
                        ? (l.onOpen(),
                          document.dispatchEvent(new CustomEvent(Rr)))
                        : l.onClose(),
                        a?.(e));
                },
                caller: Hr,
            }),
            x = o.useMemo(
                () =>
                    y
                        ? v.current
                            ? `delayed-open`
                            : `instant-open`
                        : `closed`,
                [y],
            ),
            S = o.useCallback(() => {
                (window.clearTimeout(h.current),
                    (h.current = 0),
                    (v.current = !1),
                    b(!0));
            }, [b]),
            C = o.useCallback(() => {
                (window.clearTimeout(h.current), (h.current = 0), b(!1));
            }, [b]),
            w = o.useCallback(() => {
                (window.clearTimeout(h.current),
                    (h.current = window.setTimeout(() => {
                        ((v.current = !0), b(!0), (h.current = 0));
                    }, _)));
            }, [_, b]);
        return (
            o.useEffect(
                () => () => {
                    h.current &&= (window.clearTimeout(h.current), 0);
                },
                [],
            ),
            (0, d.jsx)(Jn, {
                ...u,
                children: (0, d.jsx)(Ur, {
                    scope: t,
                    contentId: m,
                    open: y,
                    stateAttribute: x,
                    trigger: f,
                    onTriggerChange: p,
                    onTriggerEnter: o.useCallback(() => {
                        l.isOpenDelayedRef.current ? w() : S();
                    }, [l.isOpenDelayedRef, w, S]),
                    onTriggerLeave: o.useCallback(() => {
                        g
                            ? C()
                            : (window.clearTimeout(h.current), (h.current = 0));
                    }, [C, g]),
                    onOpen: S,
                    onClose: C,
                    disableHoverableContent: g,
                    children: n,
                }),
            })
        );
    };
Gr.displayName = Hr;
var Kr = `TooltipTrigger`,
    qr = o.forwardRef((e, t) => {
        let { __scopeTooltip: n, ...r } = e,
            i = Wr(Kr, n),
            a = Br(Kr, n),
            c = Fr(n),
            l = u(t, o.useRef(null), i.onTriggerChange),
            f = o.useRef(!1),
            p = o.useRef(!1),
            m = o.useCallback(() => (f.current = !1), []);
        return (
            o.useEffect(
                () => () => document.removeEventListener(`pointerup`, m),
                [m],
            ),
            (0, d.jsx)(Yn, {
                asChild: !0,
                ...c,
                children: (0, d.jsx)(vr.button, {
                    'aria-describedby': i.open ? i.contentId : void 0,
                    'data-state': i.stateAttribute,
                    ...r,
                    ref: l,
                    onPointerMove: s(e.onPointerMove, (e) => {
                        e.pointerType !== `touch` &&
                            !p.current &&
                            !a.isPointerInTransitRef.current &&
                            (i.onTriggerEnter(), (p.current = !0));
                    }),
                    onPointerLeave: s(e.onPointerLeave, () => {
                        (i.onTriggerLeave(), (p.current = !1));
                    }),
                    onPointerDown: s(e.onPointerDown, () => {
                        (i.open && i.onClose(),
                            (f.current = !0),
                            document.addEventListener(`pointerup`, m, {
                                once: !0,
                            }));
                    }),
                    onFocus: s(e.onFocus, () => {
                        f.current || i.onOpen();
                    }),
                    onBlur: s(e.onBlur, i.onClose),
                    onClick: s(e.onClick, i.onClose),
                }),
            })
        );
    });
qr.displayName = Kr;
var Jr = `TooltipPortal`,
    [Yr, Xr] = Nr(Jr, { forceMount: void 0 }),
    Zr = (e) => {
        let { __scopeTooltip: t, forceMount: n, children: r, container: i } = e,
            a = Wr(Jr, t);
        return (0, d.jsx)(Yr, {
            scope: t,
            forceMount: n,
            children: (0, d.jsx)(G, {
                present: n || a.open,
                children: (0, d.jsx)(or, {
                    asChild: !0,
                    container: i,
                    children: r,
                }),
            }),
        });
    };
Zr.displayName = Jr;
var Qr = `TooltipContent`,
    $r = o.forwardRef((e, t) => {
        let n = Xr(Qr, e.__scopeTooltip),
            { forceMount: r = n.forceMount, side: i = `top`, ...a } = e,
            o = Wr(Qr, e.__scopeTooltip);
        return (0, d.jsx)(G, {
            present: r || o.open,
            children: o.disableHoverableContent
                ? (0, d.jsx)(ii, { side: i, ...a, ref: t })
                : (0, d.jsx)(ei, { side: i, ...a, ref: t }),
        });
    }),
    ei = o.forwardRef((e, t) => {
        let n = Wr(Qr, e.__scopeTooltip),
            r = Br(Qr, e.__scopeTooltip),
            i = o.useRef(null),
            a = u(t, i),
            [s, c] = o.useState(null),
            { trigger: l, onClose: f } = n,
            p = i.current,
            { onPointerInTransitChange: m } = r,
            h = o.useCallback(() => {
                (c(null), m(!1));
            }, [m]),
            g = o.useCallback(
                (e, t) => {
                    let n = e.currentTarget,
                        r = { x: e.clientX, y: e.clientY },
                        i = ci(r, si(r, n.getBoundingClientRect())),
                        a = li(t.getBoundingClientRect());
                    (c(di([...i, ...a])), m(!0));
                },
                [m],
            );
        return (
            o.useEffect(() => () => h(), [h]),
            o.useEffect(() => {
                if (l && p) {
                    let e = (e) => g(e, p),
                        t = (e) => g(e, l);
                    return (
                        l.addEventListener(`pointerleave`, e),
                        p.addEventListener(`pointerleave`, t),
                        () => {
                            (l.removeEventListener(`pointerleave`, e),
                                p.removeEventListener(`pointerleave`, t));
                        }
                    );
                }
            }, [l, p, g, h]),
            o.useEffect(() => {
                if (s) {
                    let e = (e) => {
                        let t = e.target,
                            n = { x: e.clientX, y: e.clientY },
                            r = l?.contains(t) || p?.contains(t),
                            i = !ui(n, s);
                        r ? h() : i && (h(), f());
                    };
                    return (
                        document.addEventListener(`pointermove`, e),
                        () => document.removeEventListener(`pointermove`, e)
                    );
                }
            }, [l, p, s, f, h]),
            (0, d.jsx)(ii, { ...e, ref: a })
        );
    }),
    [ti, ni] = Nr(Hr, { isInside: !1 }),
    ri = mr(`TooltipContent`),
    ii = o.forwardRef((e, t) => {
        let {
                __scopeTooltip: n,
                children: r,
                'aria-label': i,
                onEscapeKeyDown: a,
                onPointerDownOutside: s,
                ...c
            } = e,
            l = Wr(Qr, n),
            u = Fr(n),
            { onClose: f } = l;
        return (
            o.useEffect(
                () => (
                    document.addEventListener(Rr, f),
                    () => document.removeEventListener(Rr, f)
                ),
                [f],
            ),
            o.useEffect(() => {
                if (l.trigger) {
                    let e = (e) => {
                        e.target?.contains(l.trigger) && f();
                    };
                    return (
                        window.addEventListener(`scroll`, e, { capture: !0 }),
                        () =>
                            window.removeEventListener(`scroll`, e, {
                                capture: !0,
                            })
                    );
                }
            }, [l.trigger, f]),
            (0, d.jsx)(j, {
                asChild: !0,
                disableOutsidePointerEvents: !1,
                onEscapeKeyDown: a,
                onPointerDownOutside: s,
                onFocusOutside: (e) => e.preventDefault(),
                onDismiss: f,
                children: (0, d.jsxs)(Xn, {
                    'data-state': l.stateAttribute,
                    ...u,
                    ...c,
                    ref: t,
                    style: {
                        ...c.style,
                        '--radix-tooltip-content-transform-origin': `var(--radix-popper-transform-origin)`,
                        '--radix-tooltip-content-available-width': `var(--radix-popper-available-width)`,
                        '--radix-tooltip-content-available-height': `var(--radix-popper-available-height)`,
                        '--radix-tooltip-trigger-width': `var(--radix-popper-anchor-width)`,
                        '--radix-tooltip-trigger-height': `var(--radix-popper-anchor-height)`,
                    },
                    children: [
                        (0, d.jsx)(ri, { children: r }),
                        (0, d.jsx)(ti, {
                            scope: n,
                            isInside: !0,
                            children: (0, d.jsx)(Mr, {
                                id: l.contentId,
                                role: `tooltip`,
                                children: i || r,
                            }),
                        }),
                    ],
                }),
            })
        );
    });
$r.displayName = Qr;
var ai = `TooltipArrow`,
    oi = o.forwardRef((e, t) => {
        let { __scopeTooltip: n, ...r } = e,
            i = Fr(n);
        return ni(ai, n).isInside
            ? null
            : (0, d.jsx)(Zn, { ...i, ...r, ref: t });
    });
oi.displayName = ai;
function si(e, t) {
    let n = Math.abs(t.top - e.y),
        r = Math.abs(t.bottom - e.y),
        i = Math.abs(t.right - e.x),
        a = Math.abs(t.left - e.x);
    switch (Math.min(n, r, i, a)) {
        case a:
            return `left`;
        case i:
            return `right`;
        case n:
            return `top`;
        case r:
            return `bottom`;
        default:
            throw Error(`unreachable`);
    }
}
function ci(e, t, n = 5) {
    let r = [];
    switch (t) {
        case `top`:
            r.push({ x: e.x - n, y: e.y + n }, { x: e.x + n, y: e.y + n });
            break;
        case `bottom`:
            r.push({ x: e.x - n, y: e.y - n }, { x: e.x + n, y: e.y - n });
            break;
        case `left`:
            r.push({ x: e.x + n, y: e.y - n }, { x: e.x + n, y: e.y + n });
            break;
        case `right`:
            r.push({ x: e.x - n, y: e.y - n }, { x: e.x - n, y: e.y + n });
            break;
    }
    return r;
}
function li(e) {
    let { top: t, right: n, bottom: r, left: i } = e;
    return [
        { x: i, y: t },
        { x: n, y: t },
        { x: n, y: r },
        { x: i, y: r },
    ];
}
function ui(e, t) {
    let { x: n, y: r } = e,
        i = !1;
    for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
        let o = t[e],
            s = t[a],
            c = o.x,
            l = o.y,
            u = s.x,
            d = s.y;
        l > r != d > r && n < ((u - c) * (r - l)) / (d - l) + c && (i = !i);
    }
    return i;
}
function di(e) {
    let t = e.slice();
    return (
        t.sort((e, t) =>
            e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : +(e.y > t.y),
        ),
        fi(t)
    );
}
function fi(e) {
    if (e.length <= 1) return e.slice();
    let t = [];
    for (let n = 0; n < e.length; n++) {
        let r = e[n];
        for (; t.length >= 2; ) {
            let e = t[t.length - 1],
                n = t[t.length - 2];
            if ((e.x - n.x) * (r.y - n.y) >= (e.y - n.y) * (r.x - n.x)) t.pop();
            else break;
        }
        t.push(r);
    }
    t.pop();
    let n = [];
    for (let t = e.length - 1; t >= 0; t--) {
        let r = e[t];
        for (; n.length >= 2; ) {
            let e = n[n.length - 1],
                t = n[n.length - 2];
            if ((e.x - t.x) * (r.y - t.y) >= (e.y - t.y) * (r.x - t.x)) n.pop();
            else break;
        }
        n.push(r);
    }
    return (
        n.pop(),
        t.length === 1 &&
        n.length === 1 &&
        t[0].x === n[0].x &&
        t[0].y === n[0].y
            ? t
            : t.concat(n)
    );
}
var pi = Vr,
    mi = Gr,
    hi = qr,
    gi = Zr,
    _i = $r,
    vi = oi,
    yi = Symbol.for(`react.lazy`),
    bi = o.use;
function xi(e) {
    return typeof e == `object` && !!e && `then` in e;
}
function Si(e) {
    return (
        typeof e == `object` &&
        !!e &&
        `$$typeof` in e &&
        e.$$typeof === yi &&
        `_payload` in e &&
        xi(e._payload)
    );
}
function Ci(e) {
    let t = Ti(e),
        n = o.forwardRef((e, n) => {
            let { children: r, ...i } = e;
            Si(r) && typeof bi == `function` && (r = bi(r._payload));
            let a = o.Children.toArray(r),
                s = a.find(Di);
            if (s) {
                let e = s.props.children,
                    r = a.map((t) =>
                        t === s
                            ? o.Children.count(e) > 1
                                ? o.Children.only(null)
                                : o.isValidElement(e)
                                  ? e.props.children
                                  : null
                            : t,
                    );
                return (0, d.jsx)(t, {
                    ...i,
                    ref: n,
                    children: o.isValidElement(e)
                        ? o.cloneElement(e, void 0, r)
                        : null,
                });
            }
            return (0, d.jsx)(t, { ...i, ref: n, children: r });
        });
    return ((n.displayName = `${e}.Slot`), n);
}
var wi = Ci(`Slot`);
function Ti(e) {
    let t = o.forwardRef((e, t) => {
        let { children: n, ...r } = e;
        if (
            (Si(n) && typeof bi == `function` && (n = bi(n._payload)),
            o.isValidElement(n))
        ) {
            let e = ki(n),
                i = Oi(r, n.props);
            return (
                n.type !== o.Fragment && (i.ref = t ? l(t, e) : e),
                o.cloneElement(n, i)
            );
        }
        return o.Children.count(n) > 1 ? o.Children.only(null) : null;
    });
    return ((t.displayName = `${e}.SlotClone`), t);
}
var Ei = Symbol(`radix.slottable`);
function Di(e) {
    return (
        o.isValidElement(e) &&
        typeof e.type == `function` &&
        `__radixId` in e.type &&
        e.type.__radixId === Ei
    );
}
function Oi(e, t) {
    let n = { ...t };
    for (let r in t) {
        let i = e[r],
            a = t[r];
        /^on[A-Z]/.test(r)
            ? i && a
                ? (n[r] = (...e) => {
                      let t = a(...e);
                      return (i(...e), t);
                  })
                : i && (n[r] = i)
            : r === `style`
              ? (n[r] = { ...i, ...a })
              : r === `className` && (n[r] = [i, a].filter(Boolean).join(` `));
    }
    return { ...e, ...n };
}
function ki(e) {
    let t = Object.getOwnPropertyDescriptor(e.props, `ref`)?.get,
        n = t && `isReactWarning` in t && t.isReactWarning;
    return n
        ? e.ref
        : ((t = Object.getOwnPropertyDescriptor(e, `ref`)?.get),
          (n = t && `isReactWarning` in t && t.isReactWarning),
          n ? e.props.ref : e.props.ref || e.ref);
}
var Ai = [
        `a`,
        `button`,
        `div`,
        `form`,
        `h2`,
        `h3`,
        `img`,
        `input`,
        `label`,
        `li`,
        `nav`,
        `ol`,
        `p`,
        `select`,
        `span`,
        `svg`,
        `ul`,
    ].reduce((e, t) => {
        let n = Ci(`Primitive.${t}`),
            r = o.forwardRef((e, r) => {
                let { asChild: i, ...a } = e,
                    o = i ? n : t;
                return (
                    typeof window < `u` &&
                        (window[Symbol.for(`radix-ui`)] = !0),
                    (0, d.jsx)(o, { ...a, ref: r })
                );
            });
        return ((r.displayName = `Primitive.${t}`), { ...e, [t]: r });
    }, {}),
    ji = `Separator`,
    Mi = `horizontal`,
    Ni = [`horizontal`, `vertical`],
    Pi = o.forwardRef((e, t) => {
        let { decorative: n, orientation: r = Mi, ...i } = e,
            a = Fi(r) ? r : Mi,
            o = n
                ? { role: `none` }
                : {
                      'aria-orientation': a === `vertical` ? a : void 0,
                      role: `separator`,
                  };
        return (0, d.jsx)(Ai.div, {
            'data-orientation': a,
            ...o,
            ...i,
            ref: t,
        });
    });
Pi.displayName = ji;
function Fi(e) {
    return Ni.includes(e);
}
var Ii = Pi;
function Li(e, t) {
    let n = o.createContext(t),
        r = (e) => {
            let { children: t, ...r } = e,
                i = o.useMemo(() => r, Object.values(r));
            return (0, d.jsx)(n.Provider, { value: i, children: t });
        };
    r.displayName = e + `Provider`;
    function i(r) {
        let i = o.useContext(n);
        if (i) return i;
        if (t !== void 0) return t;
        throw Error(`\`${r}\` must be used within \`${e}\``);
    }
    return [r, i];
}
function Ri(e, t = []) {
    let n = [];
    function r(t, r) {
        let i = o.createContext(r),
            a = n.length;
        n = [...n, r];
        let s = (t) => {
            let { scope: n, children: r, ...s } = t,
                c = n?.[e]?.[a] || i,
                l = o.useMemo(() => s, Object.values(s));
            return (0, d.jsx)(c.Provider, { value: l, children: r });
        };
        s.displayName = t + `Provider`;
        function c(n, s) {
            let c = s?.[e]?.[a] || i,
                l = o.useContext(c);
            if (l) return l;
            if (r !== void 0) return r;
            throw Error(`\`${n}\` must be used within \`${t}\``);
        }
        return [s, c];
    }
    let i = () => {
        let t = n.map((e) => o.createContext(e));
        return function (n) {
            let r = n?.[e] || t;
            return o.useMemo(
                () => ({ [`__scope${e}`]: { ...n, [e]: r } }),
                [n, r],
            );
        };
    };
    return ((i.scopeName = e), [r, zi(i, ...t)]);
}
function zi(...e) {
    let t = e[0];
    if (e.length === 1) return t;
    let n = () => {
        let n = e.map((e) => ({ useScope: e(), scopeName: e.scopeName }));
        return function (e) {
            let r = n.reduce((t, { useScope: n, scopeName: r }) => {
                let i = n(e)[`__scope${r}`];
                return { ...t, ...i };
            }, {});
            return o.useMemo(() => ({ [`__scope${t.scopeName}`]: r }), [r]);
        };
    };
    return ((n.scopeName = t.scopeName), n);
}
function Bi(e) {
    let t = Vi(e),
        n = o.forwardRef((e, n) => {
            let { children: r, ...i } = e,
                a = o.Children.toArray(r),
                s = a.find(Ui);
            if (s) {
                let e = s.props.children,
                    r = a.map((t) =>
                        t === s
                            ? o.Children.count(e) > 1
                                ? o.Children.only(null)
                                : o.isValidElement(e)
                                  ? e.props.children
                                  : null
                            : t,
                    );
                return (0, d.jsx)(t, {
                    ...i,
                    ref: n,
                    children: o.isValidElement(e)
                        ? o.cloneElement(e, void 0, r)
                        : null,
                });
            }
            return (0, d.jsx)(t, { ...i, ref: n, children: r });
        });
    return ((n.displayName = `${e}.Slot`), n);
}
function Vi(e) {
    let t = o.forwardRef((e, t) => {
        let { children: n, ...r } = e;
        if (o.isValidElement(n)) {
            let e = Gi(n),
                i = Wi(r, n.props);
            return (
                n.type !== o.Fragment && (i.ref = t ? l(t, e) : e),
                o.cloneElement(n, i)
            );
        }
        return o.Children.count(n) > 1 ? o.Children.only(null) : null;
    });
    return ((t.displayName = `${e}.SlotClone`), t);
}
var Hi = Symbol(`radix.slottable`);
function Ui(e) {
    return (
        o.isValidElement(e) &&
        typeof e.type == `function` &&
        `__radixId` in e.type &&
        e.type.__radixId === Hi
    );
}
function Wi(e, t) {
    let n = { ...t };
    for (let r in t) {
        let i = e[r],
            a = t[r];
        /^on[A-Z]/.test(r)
            ? i && a
                ? (n[r] = (...e) => {
                      let t = a(...e);
                      return (i(...e), t);
                  })
                : i && (n[r] = i)
            : r === `style`
              ? (n[r] = { ...i, ...a })
              : r === `className` && (n[r] = [i, a].filter(Boolean).join(` `));
    }
    return { ...e, ...n };
}
function Gi(e) {
    let t = Object.getOwnPropertyDescriptor(e.props, `ref`)?.get,
        n = t && `isReactWarning` in t && t.isReactWarning;
    return n
        ? e.ref
        : ((t = Object.getOwnPropertyDescriptor(e, `ref`)?.get),
          (n = t && `isReactWarning` in t && t.isReactWarning),
          n ? e.props.ref : e.props.ref || e.ref);
}
var Ki = [
        `a`,
        `button`,
        `div`,
        `form`,
        `h2`,
        `h3`,
        `img`,
        `input`,
        `label`,
        `li`,
        `nav`,
        `ol`,
        `p`,
        `select`,
        `span`,
        `svg`,
        `ul`,
    ].reduce((e, t) => {
        let n = Bi(`Primitive.${t}`),
            r = o.forwardRef((e, r) => {
                let { asChild: i, ...a } = e,
                    o = i ? n : t;
                return (
                    typeof window < `u` &&
                        (window[Symbol.for(`radix-ui`)] = !0),
                    (0, d.jsx)(o, { ...a, ref: r })
                );
            });
        return ((r.displayName = `Primitive.${t}`), { ...e, [t]: r });
    }, {}),
    qi = `focusScope.autoFocusOnMount`,
    Ji = `focusScope.autoFocusOnUnmount`,
    Yi = { bubbles: !1, cancelable: !0 },
    Xi = `FocusScope`,
    Zi = o.forwardRef((e, t) => {
        let {
                loop: n = !1,
                trapped: r = !1,
                onMountAutoFocus: i,
                onUnmountAutoFocus: a,
                ...s
            } = e,
            [c, l] = o.useState(null),
            f = C(i),
            p = C(a),
            m = o.useRef(null),
            h = u(t, (e) => l(e)),
            g = o.useRef({
                paused: !1,
                pause() {
                    this.paused = !0;
                },
                resume() {
                    this.paused = !1;
                },
            }).current;
        (o.useEffect(() => {
            if (r) {
                let e = function (e) {
                        if (g.paused || !c) return;
                        let t = e.target;
                        c.contains(t)
                            ? (m.current = t)
                            : ia(m.current, { select: !0 });
                    },
                    t = function (e) {
                        if (g.paused || !c) return;
                        let t = e.relatedTarget;
                        t !== null &&
                            (c.contains(t) || ia(m.current, { select: !0 }));
                    },
                    n = function (e) {
                        if (document.activeElement === document.body)
                            for (let t of e) t.removedNodes.length > 0 && ia(c);
                    };
                (document.addEventListener(`focusin`, e),
                    document.addEventListener(`focusout`, t));
                let r = new MutationObserver(n);
                return (
                    c && r.observe(c, { childList: !0, subtree: !0 }),
                    () => {
                        (document.removeEventListener(`focusin`, e),
                            document.removeEventListener(`focusout`, t),
                            r.disconnect());
                    }
                );
            }
        }, [r, c, g.paused]),
            o.useEffect(() => {
                if (c) {
                    aa.add(g);
                    let e = document.activeElement;
                    if (!c.contains(e)) {
                        let t = new CustomEvent(qi, Yi);
                        (c.addEventListener(qi, f),
                            c.dispatchEvent(t),
                            t.defaultPrevented ||
                                (Qi(ca(ea(c)), { select: !0 }),
                                document.activeElement === e && ia(c)));
                    }
                    return () => {
                        (c.removeEventListener(qi, f),
                            setTimeout(() => {
                                let t = new CustomEvent(Ji, Yi);
                                (c.addEventListener(Ji, p),
                                    c.dispatchEvent(t),
                                    t.defaultPrevented ||
                                        ia(e ?? document.body, { select: !0 }),
                                    c.removeEventListener(Ji, p),
                                    aa.remove(g));
                            }, 0));
                    };
                }
            }, [c, f, p, g]));
        let _ = o.useCallback(
            (e) => {
                if ((!n && !r) || g.paused) return;
                let t =
                        e.key === `Tab` &&
                        !e.altKey &&
                        !e.ctrlKey &&
                        !e.metaKey,
                    i = document.activeElement;
                if (t && i) {
                    let t = e.currentTarget,
                        [r, a] = $i(t);
                    r && a
                        ? !e.shiftKey && i === a
                            ? (e.preventDefault(), n && ia(r, { select: !0 }))
                            : e.shiftKey &&
                              i === r &&
                              (e.preventDefault(), n && ia(a, { select: !0 }))
                        : i === t && e.preventDefault();
                }
            },
            [n, r, g.paused],
        );
        return (0, d.jsx)(Ki.div, { tabIndex: -1, ...s, ref: h, onKeyDown: _ });
    });
Zi.displayName = Xi;
function Qi(e, { select: t = !1 } = {}) {
    let n = document.activeElement;
    for (let r of e)
        if ((ia(r, { select: t }), document.activeElement !== n)) return;
}
function $i(e) {
    let t = ea(e);
    return [ta(t, e), ta(t.reverse(), e)];
}
function ea(e) {
    let t = [],
        n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: (e) => {
                let t = e.tagName === `INPUT` && e.type === `hidden`;
                return e.disabled || e.hidden || t
                    ? NodeFilter.FILTER_SKIP
                    : e.tabIndex >= 0
                      ? NodeFilter.FILTER_ACCEPT
                      : NodeFilter.FILTER_SKIP;
            },
        });
    for (; n.nextNode(); ) t.push(n.currentNode);
    return t;
}
function ta(e, t) {
    for (let n of e) if (!na(n, { upTo: t })) return n;
}
function na(e, { upTo: t }) {
    if (getComputedStyle(e).visibility === `hidden`) return !0;
    for (; e; ) {
        if (t !== void 0 && e === t) return !1;
        if (getComputedStyle(e).display === `none`) return !0;
        e = e.parentElement;
    }
    return !1;
}
function ra(e) {
    return e instanceof HTMLInputElement && `select` in e;
}
function ia(e, { select: t = !1 } = {}) {
    if (e && e.focus) {
        let n = document.activeElement;
        (e.focus({ preventScroll: !0 }), e !== n && ra(e) && t && e.select());
    }
}
var aa = oa();
function oa() {
    let e = [];
    return {
        add(t) {
            let n = e[0];
            (t !== n && n?.pause(), (e = sa(e, t)), e.unshift(t));
        },
        remove(t) {
            ((e = sa(e, t)), e[0]?.resume());
        },
    };
}
function sa(e, t) {
    let n = [...e],
        r = n.indexOf(t);
    return (r !== -1 && n.splice(r, 1), n);
}
function ca(e) {
    return e.filter((e) => e.tagName !== `A`);
}
function la(e) {
    let t = ua(e),
        n = o.forwardRef((e, n) => {
            let { children: r, ...i } = e,
                a = o.Children.toArray(r),
                s = a.find(fa);
            if (s) {
                let e = s.props.children,
                    r = a.map((t) =>
                        t === s
                            ? o.Children.count(e) > 1
                                ? o.Children.only(null)
                                : o.isValidElement(e)
                                  ? e.props.children
                                  : null
                            : t,
                    );
                return (0, d.jsx)(t, {
                    ...i,
                    ref: n,
                    children: o.isValidElement(e)
                        ? o.cloneElement(e, void 0, r)
                        : null,
                });
            }
            return (0, d.jsx)(t, { ...i, ref: n, children: r });
        });
    return ((n.displayName = `${e}.Slot`), n);
}
function ua(e) {
    let t = o.forwardRef((e, t) => {
        let { children: n, ...r } = e;
        if (o.isValidElement(n)) {
            let e = ma(n),
                i = pa(r, n.props);
            return (
                n.type !== o.Fragment && (i.ref = t ? l(t, e) : e),
                o.cloneElement(n, i)
            );
        }
        return o.Children.count(n) > 1 ? o.Children.only(null) : null;
    });
    return ((t.displayName = `${e}.SlotClone`), t);
}
var da = Symbol(`radix.slottable`);
function fa(e) {
    return (
        o.isValidElement(e) &&
        typeof e.type == `function` &&
        `__radixId` in e.type &&
        e.type.__radixId === da
    );
}
function pa(e, t) {
    let n = { ...t };
    for (let r in t) {
        let i = e[r],
            a = t[r];
        /^on[A-Z]/.test(r)
            ? i && a
                ? (n[r] = (...e) => {
                      let t = a(...e);
                      return (i(...e), t);
                  })
                : i && (n[r] = i)
            : r === `style`
              ? (n[r] = { ...i, ...a })
              : r === `className` && (n[r] = [i, a].filter(Boolean).join(` `));
    }
    return { ...e, ...n };
}
function ma(e) {
    let t = Object.getOwnPropertyDescriptor(e.props, `ref`)?.get,
        n = t && `isReactWarning` in t && t.isReactWarning;
    return n
        ? e.ref
        : ((t = Object.getOwnPropertyDescriptor(e, `ref`)?.get),
          (n = t && `isReactWarning` in t && t.isReactWarning),
          n ? e.props.ref : e.props.ref || e.ref);
}
var ha = [
        `a`,
        `button`,
        `div`,
        `form`,
        `h2`,
        `h3`,
        `img`,
        `input`,
        `label`,
        `li`,
        `nav`,
        `ol`,
        `p`,
        `select`,
        `span`,
        `svg`,
        `ul`,
    ].reduce((e, t) => {
        let n = la(`Primitive.${t}`),
            r = o.forwardRef((e, r) => {
                let { asChild: i, ...a } = e,
                    o = i ? n : t;
                return (
                    typeof window < `u` &&
                        (window[Symbol.for(`radix-ui`)] = !0),
                    (0, d.jsx)(o, { ...a, ref: r })
                );
            });
        return ((r.displayName = `Primitive.${t}`), { ...e, [t]: r });
    }, {}),
    ga = 0;
function _a() {
    o.useEffect(() => {
        let e = document.querySelectorAll(`[data-radix-focus-guard]`);
        return (
            document.body.insertAdjacentElement(`afterbegin`, e[0] ?? va()),
            document.body.insertAdjacentElement(`beforeend`, e[1] ?? va()),
            ga++,
            () => {
                (ga === 1 &&
                    document
                        .querySelectorAll(`[data-radix-focus-guard]`)
                        .forEach((e) => e.remove()),
                    ga--);
            }
        );
    }, []);
}
function va() {
    let e = document.createElement(`span`);
    return (
        e.setAttribute(`data-radix-focus-guard`, ``),
        (e.tabIndex = 0),
        (e.style.outline = `none`),
        (e.style.opacity = `0`),
        (e.style.position = `fixed`),
        (e.style.pointerEvents = `none`),
        e
    );
}
var q = function () {
    return (
        (q =
            Object.assign ||
            function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var i in ((t = arguments[n]), t))
                        Object.prototype.hasOwnProperty.call(t, i) &&
                            (e[i] = t[i]);
                return e;
            }),
        q.apply(this, arguments)
    );
};
function ya(e, t) {
    var n = {};
    for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) &&
            t.indexOf(r) < 0 &&
            (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == `function`)
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
            t.indexOf(r[i]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
                (n[r[i]] = e[r[i]]);
    return n;
}
function ba(e, t, n) {
    if (n || arguments.length === 2)
        for (var r = 0, i = t.length, a; r < i; r++)
            (a || !(r in t)) &&
                ((a ||= Array.prototype.slice.call(t, 0, r)), (a[r] = t[r]));
    return e.concat(a || Array.prototype.slice.call(t));
}
var xa = `right-scroll-bar-position`,
    Sa = `width-before-scroll-bar`,
    Ca = `with-scroll-bars-hidden`,
    wa = `--removed-body-scroll-bar-size`;
function Ta(e, t) {
    return (typeof e == `function` ? e(t) : e && (e.current = t), e);
}
function Ea(e, t) {
    var n = (0, o.useState)(function () {
        return {
            value: e,
            callback: t,
            facade: {
                get current() {
                    return n.value;
                },
                set current(e) {
                    var t = n.value;
                    t !== e && ((n.value = e), n.callback(e, t));
                },
            },
        };
    })[0];
    return ((n.callback = t), n.facade);
}
var Da = typeof window < `u` ? o.useLayoutEffect : o.useEffect,
    Oa = new WeakMap();
function ka(e, t) {
    var n = Ea(t || null, function (t) {
        return e.forEach(function (e) {
            return Ta(e, t);
        });
    });
    return (
        Da(
            function () {
                var t = Oa.get(n);
                if (t) {
                    var r = new Set(t),
                        i = new Set(e),
                        a = n.current;
                    (r.forEach(function (e) {
                        i.has(e) || Ta(e, null);
                    }),
                        i.forEach(function (e) {
                            r.has(e) || Ta(e, a);
                        }));
                }
                Oa.set(n, e);
            },
            [e],
        ),
        n
    );
}
function Aa(e) {
    return e;
}
function ja(e, t) {
    t === void 0 && (t = Aa);
    var n = [],
        r = !1;
    return {
        read: function () {
            if (r)
                throw Error(
                    'Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.',
                );
            return n.length ? n[n.length - 1] : e;
        },
        useMedium: function (e) {
            var i = t(e, r);
            return (
                n.push(i),
                function () {
                    n = n.filter(function (e) {
                        return e !== i;
                    });
                }
            );
        },
        assignSyncMedium: function (e) {
            for (r = !0; n.length; ) {
                var t = n;
                ((n = []), t.forEach(e));
            }
            n = {
                push: function (t) {
                    return e(t);
                },
                filter: function () {
                    return n;
                },
            };
        },
        assignMedium: function (e) {
            r = !0;
            var t = [];
            if (n.length) {
                var i = n;
                ((n = []), i.forEach(e), (t = n));
            }
            var a = function () {
                    var n = t;
                    ((t = []), n.forEach(e));
                },
                o = function () {
                    return Promise.resolve().then(a);
                };
            (o(),
                (n = {
                    push: function (e) {
                        (t.push(e), o());
                    },
                    filter: function (e) {
                        return ((t = t.filter(e)), n);
                    },
                }));
        },
    };
}
function Ma(e) {
    e === void 0 && (e = {});
    var t = ja(null);
    return ((t.options = q({ async: !0, ssr: !1 }, e)), t);
}
var Na = function (e) {
    var t = e.sideCar,
        n = ya(e, [`sideCar`]);
    if (!t)
        throw Error(
            'Sidecar: please provide `sideCar` property to import the right car',
        );
    var r = t.read();
    if (!r) throw Error(`Sidecar medium not found`);
    return o.createElement(r, q({}, n));
};
Na.isSideCarExport = !0;
function Pa(e, t) {
    return (e.useMedium(t), Na);
}
var Fa = Ma(),
    Ia = function () {},
    La = o.forwardRef(function (e, t) {
        var n = o.useRef(null),
            r = o.useState({
                onScrollCapture: Ia,
                onWheelCapture: Ia,
                onTouchMoveCapture: Ia,
            }),
            i = r[0],
            a = r[1],
            s = e.forwardProps,
            c = e.children,
            l = e.className,
            u = e.removeScrollBar,
            d = e.enabled,
            f = e.shards,
            p = e.sideCar,
            m = e.noRelative,
            h = e.noIsolation,
            g = e.inert,
            _ = e.allowPinchZoom,
            v = e.as,
            y = v === void 0 ? `div` : v,
            b = e.gapMode,
            x = ya(e, [
                `forwardProps`,
                `children`,
                `className`,
                `removeScrollBar`,
                `enabled`,
                `shards`,
                `sideCar`,
                `noRelative`,
                `noIsolation`,
                `inert`,
                `allowPinchZoom`,
                `as`,
                `gapMode`,
            ]),
            S = p,
            C = ka([n, t]),
            w = q(q({}, x), i);
        return o.createElement(
            o.Fragment,
            null,
            d &&
                o.createElement(S, {
                    sideCar: Fa,
                    removeScrollBar: u,
                    shards: f,
                    noRelative: m,
                    noIsolation: h,
                    inert: g,
                    setCallbacks: a,
                    allowPinchZoom: !!_,
                    lockRef: n,
                    gapMode: b,
                }),
            s
                ? o.cloneElement(o.Children.only(c), q(q({}, w), { ref: C }))
                : o.createElement(y, q({}, w, { className: l, ref: C }), c),
        );
    });
((La.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
    (La.classNames = { fullWidth: Sa, zeroRight: xa }));
var Ra,
    za = function () {
        if (Ra) return Ra;
        if (typeof __webpack_nonce__ < `u`) return __webpack_nonce__;
    };
function Ba() {
    if (!document) return null;
    var e = document.createElement(`style`);
    e.type = `text/css`;
    var t = za();
    return (t && e.setAttribute(`nonce`, t), e);
}
function Va(e, t) {
    e.styleSheet
        ? (e.styleSheet.cssText = t)
        : e.appendChild(document.createTextNode(t));
}
function Ha(e) {
    (document.head || document.getElementsByTagName(`head`)[0]).appendChild(e);
}
var Ua = function () {
        var e = 0,
            t = null;
        return {
            add: function (n) {
                (e == 0 && (t = Ba()) && (Va(t, n), Ha(t)), e++);
            },
            remove: function () {
                (e--,
                    !e &&
                        t &&
                        (t.parentNode && t.parentNode.removeChild(t),
                        (t = null)));
            },
        };
    },
    Wa = function () {
        var e = Ua();
        return function (t, n) {
            o.useEffect(
                function () {
                    return (
                        e.add(t),
                        function () {
                            e.remove();
                        }
                    );
                },
                [t && n],
            );
        };
    },
    Ga = function () {
        var e = Wa();
        return function (t) {
            var n = t.styles,
                r = t.dynamic;
            return (e(n, r), null);
        };
    },
    Ka = { left: 0, top: 0, right: 0, gap: 0 },
    qa = function (e) {
        return parseInt(e || ``, 10) || 0;
    },
    Ja = function (e) {
        var t = window.getComputedStyle(document.body),
            n = t[e === `padding` ? `paddingLeft` : `marginLeft`],
            r = t[e === `padding` ? `paddingTop` : `marginTop`],
            i = t[e === `padding` ? `paddingRight` : `marginRight`];
        return [qa(n), qa(r), qa(i)];
    },
    Ya = function (e) {
        if ((e === void 0 && (e = `margin`), typeof window > `u`)) return Ka;
        var t = Ja(e),
            n = document.documentElement.clientWidth,
            r = window.innerWidth;
        return {
            left: t[0],
            top: t[1],
            right: t[2],
            gap: Math.max(0, r - n + t[2] - t[0]),
        };
    },
    Xa = Ga(),
    Za = `data-scroll-locked`,
    Qa = function (e, t, n, r) {
        var i = e.left,
            a = e.top,
            o = e.right,
            s = e.gap;
        return (
            n === void 0 && (n = `margin`),
            `
  .${Ca} {
   overflow: hidden ${r};
   padding-right: ${s}px ${r};
  }
  body[${Za}] {
    overflow: hidden ${r};
    overscroll-behavior: contain;
    ${[
        t && `position: relative ${r};`,
        n === `margin` &&
            `
    padding-left: ${i}px;
    padding-top: ${a}px;
    padding-right: ${o}px;
    margin-left:0;
    margin-top:0;
    margin-right: ${s}px ${r};
    `,
        n === `padding` && `padding-right: ${s}px ${r};`,
    ]
        .filter(Boolean)
        .join(``)}
  }
  
  .${xa} {
    right: ${s}px ${r};
  }
  
  .${Sa} {
    margin-right: ${s}px ${r};
  }
  
  .${xa} .${xa} {
    right: 0 ${r};
  }
  
  .${Sa} .${Sa} {
    margin-right: 0 ${r};
  }
  
  body[${Za}] {
    ${wa}: ${s}px;
  }
`
        );
    },
    $a = function () {
        var e = parseInt(
            document.body.getAttribute(`data-scroll-locked`) || `0`,
            10,
        );
        return isFinite(e) ? e : 0;
    },
    eo = function () {
        o.useEffect(function () {
            return (
                document.body.setAttribute(Za, ($a() + 1).toString()),
                function () {
                    var e = $a() - 1;
                    e <= 0
                        ? document.body.removeAttribute(Za)
                        : document.body.setAttribute(Za, e.toString());
                }
            );
        }, []);
    },
    to = function (e) {
        var t = e.noRelative,
            n = e.noImportant,
            r = e.gapMode,
            i = r === void 0 ? `margin` : r;
        eo();
        var a = o.useMemo(
            function () {
                return Ya(i);
            },
            [i],
        );
        return o.createElement(Xa, {
            styles: Qa(a, !t, i, n ? `` : `!important`),
        });
    },
    no = !1;
if (typeof window < `u`)
    try {
        var ro = Object.defineProperty({}, `passive`, {
            get: function () {
                return ((no = !0), !0);
            },
        });
        (window.addEventListener(`test`, ro, ro),
            window.removeEventListener(`test`, ro, ro));
    } catch {
        no = !1;
    }
var io = no ? { passive: !1 } : !1,
    ao = function (e) {
        return e.tagName === `TEXTAREA`;
    },
    oo = function (e, t) {
        if (!(e instanceof Element)) return !1;
        var n = window.getComputedStyle(e);
        return (
            n[t] !== `hidden` &&
            !(n.overflowY === n.overflowX && !ao(e) && n[t] === `visible`)
        );
    },
    so = function (e) {
        return oo(e, `overflowY`);
    },
    co = function (e) {
        return oo(e, `overflowX`);
    },
    lo = function (e, t) {
        var n = t.ownerDocument,
            r = t;
        do {
            if (
                (typeof ShadowRoot < `u` &&
                    r instanceof ShadowRoot &&
                    (r = r.host),
                po(e, r))
            ) {
                var i = mo(e, r);
                if (i[1] > i[2]) return !0;
            }
            r = r.parentNode;
        } while (r && r !== n.body);
        return !1;
    },
    uo = function (e) {
        return [e.scrollTop, e.scrollHeight, e.clientHeight];
    },
    fo = function (e) {
        return [e.scrollLeft, e.scrollWidth, e.clientWidth];
    },
    po = function (e, t) {
        return e === `v` ? so(t) : co(t);
    },
    mo = function (e, t) {
        return e === `v` ? uo(t) : fo(t);
    },
    ho = function (e, t) {
        return e === `h` && t === `rtl` ? -1 : 1;
    },
    go = function (e, t, n, r, i) {
        var a = ho(e, window.getComputedStyle(t).direction),
            o = a * r,
            s = n.target,
            c = t.contains(s),
            l = !1,
            u = o > 0,
            d = 0,
            f = 0;
        do {
            if (!s) break;
            var p = mo(e, s),
                m = p[0],
                h = p[1] - p[2] - a * m;
            (m || h) && po(e, s) && ((d += h), (f += m));
            var g = s.parentNode;
            s = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
        } while (
            (!c && s !== document.body) ||
            (c && (t.contains(s) || t === s))
        );
        return (
            ((u && ((i && Math.abs(d) < 1) || (!i && o > d))) ||
                (!u && ((i && Math.abs(f) < 1) || (!i && -o > f)))) &&
                (l = !0),
            l
        );
    },
    _o = function (e) {
        return `changedTouches` in e
            ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
            : [0, 0];
    },
    vo = function (e) {
        return [e.deltaX, e.deltaY];
    },
    yo = function (e) {
        return e && `current` in e ? e.current : e;
    },
    bo = function (e, t) {
        return e[0] === t[0] && e[1] === t[1];
    },
    xo = function (e) {
        return `
  .block-interactivity-${e} {pointer-events: none;}
  .allow-interactivity-${e} {pointer-events: all;}
`;
    },
    So = 0,
    Co = [];
function wo(e) {
    var t = o.useRef([]),
        n = o.useRef([0, 0]),
        r = o.useRef(),
        i = o.useState(So++)[0],
        a = o.useState(Ga)[0],
        s = o.useRef(e);
    (o.useEffect(
        function () {
            s.current = e;
        },
        [e],
    ),
        o.useEffect(
            function () {
                if (e.inert) {
                    document.body.classList.add(`block-interactivity-${i}`);
                    var t = ba(
                        [e.lockRef.current],
                        (e.shards || []).map(yo),
                        !0,
                    ).filter(Boolean);
                    return (
                        t.forEach(function (e) {
                            return e.classList.add(`allow-interactivity-${i}`);
                        }),
                        function () {
                            (document.body.classList.remove(
                                `block-interactivity-${i}`,
                            ),
                                t.forEach(function (e) {
                                    return e.classList.remove(
                                        `allow-interactivity-${i}`,
                                    );
                                }));
                        }
                    );
                }
            },
            [e.inert, e.lockRef.current, e.shards],
        ));
    var c = o.useCallback(function (e, t) {
            if (
                (`touches` in e && e.touches.length === 2) ||
                (e.type === `wheel` && e.ctrlKey)
            )
                return !s.current.allowPinchZoom;
            var i = _o(e),
                a = n.current,
                o = `deltaX` in e ? e.deltaX : a[0] - i[0],
                c = `deltaY` in e ? e.deltaY : a[1] - i[1],
                l,
                u = e.target,
                d = Math.abs(o) > Math.abs(c) ? `h` : `v`;
            if (`touches` in e && d === `h` && u.type === `range`) return !1;
            var f = window.getSelection(),
                p = f && f.anchorNode;
            if (p && (p === u || p.contains(u))) return !1;
            var m = lo(d, u);
            if (!m) return !0;
            if (
                (m ? (l = d) : ((l = d === `v` ? `h` : `v`), (m = lo(d, u))),
                !m)
            )
                return !1;
            if (
                (!r.current &&
                    `changedTouches` in e &&
                    (o || c) &&
                    (r.current = l),
                !l)
            )
                return !0;
            var h = r.current || l;
            return go(h, t, e, h === `h` ? o : c, !0);
        }, []),
        l = o.useCallback(function (e) {
            var n = e;
            if (!(!Co.length || Co[Co.length - 1] !== a)) {
                var r = `deltaY` in n ? vo(n) : _o(n),
                    i = t.current.filter(function (e) {
                        return (
                            e.name === n.type &&
                            (e.target === n.target ||
                                n.target === e.shadowParent) &&
                            bo(e.delta, r)
                        );
                    })[0];
                if (i && i.should) {
                    n.cancelable && n.preventDefault();
                    return;
                }
                if (!i) {
                    var o = (s.current.shards || [])
                        .map(yo)
                        .filter(Boolean)
                        .filter(function (e) {
                            return e.contains(n.target);
                        });
                    (o.length > 0 ? c(n, o[0]) : !s.current.noIsolation) &&
                        n.cancelable &&
                        n.preventDefault();
                }
            }
        }, []),
        u = o.useCallback(function (e, n, r, i) {
            var a = {
                name: e,
                delta: n,
                target: r,
                should: i,
                shadowParent: To(r),
            };
            (t.current.push(a),
                setTimeout(function () {
                    t.current = t.current.filter(function (e) {
                        return e !== a;
                    });
                }, 1));
        }, []),
        d = o.useCallback(function (e) {
            ((n.current = _o(e)), (r.current = void 0));
        }, []),
        f = o.useCallback(function (t) {
            u(t.type, vo(t), t.target, c(t, e.lockRef.current));
        }, []),
        p = o.useCallback(function (t) {
            u(t.type, _o(t), t.target, c(t, e.lockRef.current));
        }, []);
    o.useEffect(function () {
        return (
            Co.push(a),
            e.setCallbacks({
                onScrollCapture: f,
                onWheelCapture: f,
                onTouchMoveCapture: p,
            }),
            document.addEventListener(`wheel`, l, io),
            document.addEventListener(`touchmove`, l, io),
            document.addEventListener(`touchstart`, d, io),
            function () {
                ((Co = Co.filter(function (e) {
                    return e !== a;
                })),
                    document.removeEventListener(`wheel`, l, io),
                    document.removeEventListener(`touchmove`, l, io),
                    document.removeEventListener(`touchstart`, d, io));
            }
        );
    }, []);
    var m = e.removeScrollBar,
        h = e.inert;
    return o.createElement(
        o.Fragment,
        null,
        h ? o.createElement(a, { styles: xo(i) }) : null,
        m
            ? o.createElement(to, {
                  noRelative: e.noRelative,
                  gapMode: e.gapMode,
              })
            : null,
    );
}
function To(e) {
    for (var t = null; e !== null; )
        (e instanceof ShadowRoot && ((t = e.host), (e = e.host)),
            (e = e.parentNode));
    return t;
}
var Eo = Pa(Fa, wo),
    Do = o.forwardRef(function (e, t) {
        return o.createElement(La, q({}, e, { ref: t, sideCar: Eo }));
    });
Do.classNames = La.classNames;
var Oo = function (e) {
        return typeof document > `u`
            ? null
            : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
    },
    ko = new WeakMap(),
    Ao = new WeakMap(),
    jo = {},
    Mo = 0,
    No = function (e) {
        return e && (e.host || No(e.parentNode));
    },
    Po = function (e, t) {
        return t
            .map(function (t) {
                if (e.contains(t)) return t;
                var n = No(t);
                return n && e.contains(n)
                    ? n
                    : (console.error(
                          `aria-hidden`,
                          t,
                          `in not contained inside`,
                          e,
                          `. Doing nothing`,
                      ),
                      null);
            })
            .filter(function (e) {
                return !!e;
            });
    },
    Fo = function (e, t, n, r) {
        var i = Po(t, Array.isArray(e) ? e : [e]);
        jo[n] || (jo[n] = new WeakMap());
        var a = jo[n],
            o = [],
            s = new Set(),
            c = new Set(i),
            l = function (e) {
                !e || s.has(e) || (s.add(e), l(e.parentNode));
            };
        i.forEach(l);
        var u = function (e) {
            !e ||
                c.has(e) ||
                Array.prototype.forEach.call(e.children, function (e) {
                    if (s.has(e)) u(e);
                    else
                        try {
                            var t = e.getAttribute(r),
                                i = t !== null && t !== `false`,
                                c = (ko.get(e) || 0) + 1,
                                l = (a.get(e) || 0) + 1;
                            (ko.set(e, c),
                                a.set(e, l),
                                o.push(e),
                                c === 1 && i && Ao.set(e, !0),
                                l === 1 && e.setAttribute(n, `true`),
                                i || e.setAttribute(r, `true`));
                        } catch (t) {
                            console.error(
                                `aria-hidden: cannot operate on `,
                                e,
                                t,
                            );
                        }
                });
        };
        return (
            u(t),
            s.clear(),
            Mo++,
            function () {
                (o.forEach(function (e) {
                    var t = ko.get(e) - 1,
                        i = a.get(e) - 1;
                    (ko.set(e, t),
                        a.set(e, i),
                        t || (Ao.has(e) || e.removeAttribute(r), Ao.delete(e)),
                        i || e.removeAttribute(n));
                }),
                    Mo--,
                    Mo ||
                        ((ko = new WeakMap()),
                        (ko = new WeakMap()),
                        (Ao = new WeakMap()),
                        (jo = {})));
            }
        );
    },
    Io = function (e, t, n) {
        n === void 0 && (n = `data-aria-hidden`);
        var r = Array.from(Array.isArray(e) ? e : [e]),
            i = t || Oo(e);
        return i
            ? (r.push.apply(
                  r,
                  Array.from(i.querySelectorAll(`[aria-live], script`)),
              ),
              Fo(r, i, n, `aria-hidden`))
            : function () {
                  return null;
              };
    },
    Lo = `Dialog`,
    [Ro, zo] = Ri(Lo),
    [Bo, J] = Ro(Lo),
    Vo = (e) => {
        let {
                __scopeDialog: t,
                children: n,
                open: r,
                defaultOpen: i,
                onOpenChange: a,
                modal: s = !0,
            } = e,
            c = o.useRef(null),
            l = o.useRef(null),
            [u, f] = K({
                prop: r,
                defaultProp: i ?? !1,
                onChange: a,
                caller: Lo,
            });
        return (0, d.jsx)(Bo, {
            scope: t,
            triggerRef: c,
            contentRef: l,
            contentId: L(),
            titleId: L(),
            descriptionId: L(),
            open: u,
            onOpenChange: f,
            onOpenToggle: o.useCallback(() => f((e) => !e), [f]),
            modal: s,
            children: n,
        });
    };
Vo.displayName = Lo;
var Ho = `DialogTrigger`,
    Uo = o.forwardRef((e, t) => {
        let { __scopeDialog: n, ...r } = e,
            i = J(Ho, n),
            a = u(t, i.triggerRef);
        return (0, d.jsx)(ha.button, {
            type: `button`,
            'aria-haspopup': `dialog`,
            'aria-expanded': i.open,
            'aria-controls': i.contentId,
            'data-state': ls(i.open),
            ...r,
            ref: a,
            onClick: s(e.onClick, i.onOpenToggle),
        });
    });
Uo.displayName = Ho;
var Wo = `DialogPortal`,
    [Go, Ko] = Ro(Wo, { forceMount: void 0 }),
    qo = (e) => {
        let { __scopeDialog: t, forceMount: n, children: r, container: i } = e,
            a = J(Wo, t);
        return (0, d.jsx)(Go, {
            scope: t,
            forceMount: n,
            children: o.Children.map(r, (e) =>
                (0, d.jsx)(G, {
                    present: n || a.open,
                    children: (0, d.jsx)(or, {
                        asChild: !0,
                        container: i,
                        children: e,
                    }),
                }),
            ),
        });
    };
qo.displayName = Wo;
var Jo = `DialogOverlay`,
    Yo = o.forwardRef((e, t) => {
        let n = Ko(Jo, e.__scopeDialog),
            { forceMount: r = n.forceMount, ...i } = e,
            a = J(Jo, e.__scopeDialog);
        return a.modal
            ? (0, d.jsx)(G, {
                  present: r || a.open,
                  children: (0, d.jsx)(Zo, { ...i, ref: t }),
              })
            : null;
    });
Yo.displayName = Jo;
var Xo = la(`DialogOverlay.RemoveScroll`),
    Zo = o.forwardRef((e, t) => {
        let { __scopeDialog: n, ...r } = e,
            i = J(Jo, n);
        return (0, d.jsx)(Do, {
            as: Xo,
            allowPinchZoom: !0,
            shards: [i.contentRef],
            children: (0, d.jsx)(ha.div, {
                'data-state': ls(i.open),
                ...r,
                ref: t,
                style: { pointerEvents: `auto`, ...r.style },
            }),
        });
    }),
    Qo = `DialogContent`,
    $o = o.forwardRef((e, t) => {
        let n = Ko(Qo, e.__scopeDialog),
            { forceMount: r = n.forceMount, ...i } = e,
            a = J(Qo, e.__scopeDialog);
        return (0, d.jsx)(G, {
            present: r || a.open,
            children: a.modal
                ? (0, d.jsx)(es, { ...i, ref: t })
                : (0, d.jsx)(ts, { ...i, ref: t }),
        });
    });
$o.displayName = Qo;
var es = o.forwardRef((e, t) => {
        let n = J(Qo, e.__scopeDialog),
            r = o.useRef(null),
            i = u(t, n.contentRef, r);
        return (
            o.useEffect(() => {
                let e = r.current;
                if (e) return Io(e);
            }, []),
            (0, d.jsx)(ns, {
                ...e,
                ref: i,
                trapFocus: n.open,
                disableOutsidePointerEvents: !0,
                onCloseAutoFocus: s(e.onCloseAutoFocus, (e) => {
                    (e.preventDefault(), n.triggerRef.current?.focus());
                }),
                onPointerDownOutside: s(e.onPointerDownOutside, (e) => {
                    let t = e.detail.originalEvent,
                        n = t.button === 0 && t.ctrlKey === !0;
                    (t.button === 2 || n) && e.preventDefault();
                }),
                onFocusOutside: s(e.onFocusOutside, (e) => e.preventDefault()),
            })
        );
    }),
    ts = o.forwardRef((e, t) => {
        let n = J(Qo, e.__scopeDialog),
            r = o.useRef(!1),
            i = o.useRef(!1);
        return (0, d.jsx)(ns, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: (t) => {
                (e.onCloseAutoFocus?.(t),
                    t.defaultPrevented ||
                        (r.current || n.triggerRef.current?.focus(),
                        t.preventDefault()),
                    (r.current = !1),
                    (i.current = !1));
            },
            onInteractOutside: (t) => {
                (e.onInteractOutside?.(t),
                    t.defaultPrevented ||
                        ((r.current = !0),
                        t.detail.originalEvent.type === `pointerdown` &&
                            (i.current = !0)));
                let a = t.target;
                (n.triggerRef.current?.contains(a) && t.preventDefault(),
                    t.detail.originalEvent.type === `focusin` &&
                        i.current &&
                        t.preventDefault());
            },
        });
    }),
    ns = o.forwardRef((e, t) => {
        let {
                __scopeDialog: n,
                trapFocus: r,
                onOpenAutoFocus: i,
                onCloseAutoFocus: a,
                ...s
            } = e,
            c = J(Qo, n),
            l = o.useRef(null),
            f = u(t, l);
        return (
            _a(),
            (0, d.jsxs)(d.Fragment, {
                children: [
                    (0, d.jsx)(Zi, {
                        asChild: !0,
                        loop: !0,
                        trapped: r,
                        onMountAutoFocus: i,
                        onUnmountAutoFocus: a,
                        children: (0, d.jsx)(j, {
                            role: `dialog`,
                            id: c.contentId,
                            'aria-describedby': c.descriptionId,
                            'aria-labelledby': c.titleId,
                            'data-state': ls(c.open),
                            ...s,
                            ref: f,
                            onDismiss: () => c.onOpenChange(!1),
                        }),
                    }),
                    (0, d.jsxs)(d.Fragment, {
                        children: [
                            (0, d.jsx)(ps, { titleId: c.titleId }),
                            (0, d.jsx)(hs, {
                                contentRef: l,
                                descriptionId: c.descriptionId,
                            }),
                        ],
                    }),
                ],
            })
        );
    }),
    rs = `DialogTitle`,
    is = o.forwardRef((e, t) => {
        let { __scopeDialog: n, ...r } = e,
            i = J(rs, n);
        return (0, d.jsx)(ha.h2, { id: i.titleId, ...r, ref: t });
    });
is.displayName = rs;
var as = `DialogDescription`,
    os = o.forwardRef((e, t) => {
        let { __scopeDialog: n, ...r } = e,
            i = J(as, n);
        return (0, d.jsx)(ha.p, { id: i.descriptionId, ...r, ref: t });
    });
os.displayName = as;
var ss = `DialogClose`,
    cs = o.forwardRef((e, t) => {
        let { __scopeDialog: n, ...r } = e,
            i = J(ss, n);
        return (0, d.jsx)(ha.button, {
            type: `button`,
            ...r,
            ref: t,
            onClick: s(e.onClick, () => i.onOpenChange(!1)),
        });
    });
cs.displayName = ss;
function ls(e) {
    return e ? `open` : `closed`;
}
var us = `DialogTitleWarning`,
    [ds, fs] = Li(us, { contentName: Qo, titleName: rs, docsSlug: `dialog` }),
    ps = ({ titleId: e }) => {
        let t = fs(us),
            n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
        return (
            o.useEffect(() => {
                e && (document.getElementById(e) || console.error(n));
            }, [n, e]),
            null
        );
    },
    ms = `DialogDescriptionWarning`,
    hs = ({ contentRef: e, descriptionId: t }) => {
        let n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${fs(ms).contentName}}.`;
        return (
            o.useEffect(() => {
                let r = e.current?.getAttribute(`aria-describedby`);
                t && r && (document.getElementById(t) || console.warn(n));
            }, [n, e, t]),
            null
        );
    },
    gs = Vo,
    _s = Uo,
    vs = qo,
    ys = Yo,
    bs = $o,
    xs = is,
    Ss = os,
    Cs = cs;
function ws(e, t = []) {
    let n = [];
    function r(t, r) {
        let i = o.createContext(r),
            a = n.length;
        n = [...n, r];
        let s = (t) => {
            let { scope: n, children: r, ...s } = t,
                c = n?.[e]?.[a] || i,
                l = o.useMemo(() => s, Object.values(s));
            return (0, d.jsx)(c.Provider, { value: l, children: r });
        };
        s.displayName = t + `Provider`;
        function c(n, s) {
            let c = s?.[e]?.[a] || i,
                l = o.useContext(c);
            if (l) return l;
            if (r !== void 0) return r;
            throw Error(`\`${n}\` must be used within \`${t}\``);
        }
        return [s, c];
    }
    let i = () => {
        let t = n.map((e) => o.createContext(e));
        return function (n) {
            let r = n?.[e] || t;
            return o.useMemo(
                () => ({ [`__scope${e}`]: { ...n, [e]: r } }),
                [n, r],
            );
        };
    };
    return ((i.scopeName = e), [r, Ts(i, ...t)]);
}
function Ts(...e) {
    let t = e[0];
    if (e.length === 1) return t;
    let n = () => {
        let n = e.map((e) => ({ useScope: e(), scopeName: e.scopeName }));
        return function (e) {
            let r = n.reduce((t, { useScope: n, scopeName: r }) => {
                let i = n(e)[`__scope${r}`];
                return { ...t, ...i };
            }, {});
            return o.useMemo(() => ({ [`__scope${t.scopeName}`]: r }), [r]);
        };
    };
    return ((n.scopeName = t.scopeName), n);
}
function Es(e) {
    let t = Ds(e),
        n = o.forwardRef((e, n) => {
            let { children: r, ...i } = e,
                a = o.Children.toArray(r),
                s = a.find(ks);
            if (s) {
                let e = s.props.children,
                    r = a.map((t) =>
                        t === s
                            ? o.Children.count(e) > 1
                                ? o.Children.only(null)
                                : o.isValidElement(e)
                                  ? e.props.children
                                  : null
                            : t,
                    );
                return (0, d.jsx)(t, {
                    ...i,
                    ref: n,
                    children: o.isValidElement(e)
                        ? o.cloneElement(e, void 0, r)
                        : null,
                });
            }
            return (0, d.jsx)(t, { ...i, ref: n, children: r });
        });
    return ((n.displayName = `${e}.Slot`), n);
}
function Ds(e) {
    let t = o.forwardRef((e, t) => {
        let { children: n, ...r } = e;
        if (o.isValidElement(n)) {
            let e = js(n),
                i = As(r, n.props);
            return (
                n.type !== o.Fragment && (i.ref = t ? l(t, e) : e),
                o.cloneElement(n, i)
            );
        }
        return o.Children.count(n) > 1 ? o.Children.only(null) : null;
    });
    return ((t.displayName = `${e}.SlotClone`), t);
}
var Os = Symbol(`radix.slottable`);
function ks(e) {
    return (
        o.isValidElement(e) &&
        typeof e.type == `function` &&
        `__radixId` in e.type &&
        e.type.__radixId === Os
    );
}
function As(e, t) {
    let n = { ...t };
    for (let r in t) {
        let i = e[r],
            a = t[r];
        /^on[A-Z]/.test(r)
            ? i && a
                ? (n[r] = (...e) => {
                      let t = a(...e);
                      return (i(...e), t);
                  })
                : i && (n[r] = i)
            : r === `style`
              ? (n[r] = { ...i, ...a })
              : r === `className` && (n[r] = [i, a].filter(Boolean).join(` `));
    }
    return { ...e, ...n };
}
function js(e) {
    let t = Object.getOwnPropertyDescriptor(e.props, `ref`)?.get,
        n = t && `isReactWarning` in t && t.isReactWarning;
    return n
        ? e.ref
        : ((t = Object.getOwnPropertyDescriptor(e, `ref`)?.get),
          (n = t && `isReactWarning` in t && t.isReactWarning),
          n ? e.props.ref : e.props.ref || e.ref);
}
var Ms = [
    `a`,
    `button`,
    `div`,
    `form`,
    `h2`,
    `h3`,
    `img`,
    `input`,
    `label`,
    `li`,
    `nav`,
    `ol`,
    `p`,
    `select`,
    `span`,
    `svg`,
    `ul`,
].reduce((e, t) => {
    let n = Es(`Primitive.${t}`),
        r = o.forwardRef((e, r) => {
            let { asChild: i, ...a } = e,
                o = i ? n : t;
            return (
                typeof window < `u` && (window[Symbol.for(`radix-ui`)] = !0),
                (0, d.jsx)(o, { ...a, ref: r })
            );
        });
    return ((r.displayName = `Primitive.${t}`), { ...e, [t]: r });
}, {});
function Ns(e, t = []) {
    let n = [];
    function r(t, r) {
        let i = o.createContext(r),
            a = n.length;
        n = [...n, r];
        let s = (t) => {
            let { scope: n, children: r, ...s } = t,
                c = n?.[e]?.[a] || i,
                l = o.useMemo(() => s, Object.values(s));
            return (0, d.jsx)(c.Provider, { value: l, children: r });
        };
        s.displayName = t + `Provider`;
        function c(n, s) {
            let c = s?.[e]?.[a] || i,
                l = o.useContext(c);
            if (l) return l;
            if (r !== void 0) return r;
            throw Error(`\`${n}\` must be used within \`${t}\``);
        }
        return [s, c];
    }
    let i = () => {
        let t = n.map((e) => o.createContext(e));
        return function (n) {
            let r = n?.[e] || t;
            return o.useMemo(
                () => ({ [`__scope${e}`]: { ...n, [e]: r } }),
                [n, r],
            );
        };
    };
    return ((i.scopeName = e), [r, Ps(i, ...t)]);
}
function Ps(...e) {
    let t = e[0];
    if (e.length === 1) return t;
    let n = () => {
        let n = e.map((e) => ({ useScope: e(), scopeName: e.scopeName }));
        return function (e) {
            let r = n.reduce((t, { useScope: n, scopeName: r }) => {
                let i = n(e)[`__scope${r}`];
                return { ...t, ...i };
            }, {});
            return o.useMemo(() => ({ [`__scope${t.scopeName}`]: r }), [r]);
        };
    };
    return ((n.scopeName = t.scopeName), n);
}
function Fs(e) {
    let t = Is(e),
        n = o.forwardRef((e, n) => {
            let { children: r, ...i } = e,
                a = o.Children.toArray(r),
                s = a.find(Rs);
            if (s) {
                let e = s.props.children,
                    r = a.map((t) =>
                        t === s
                            ? o.Children.count(e) > 1
                                ? o.Children.only(null)
                                : o.isValidElement(e)
                                  ? e.props.children
                                  : null
                            : t,
                    );
                return (0, d.jsx)(t, {
                    ...i,
                    ref: n,
                    children: o.isValidElement(e)
                        ? o.cloneElement(e, void 0, r)
                        : null,
                });
            }
            return (0, d.jsx)(t, { ...i, ref: n, children: r });
        });
    return ((n.displayName = `${e}.Slot`), n);
}
function Is(e) {
    let t = o.forwardRef((e, t) => {
        let { children: n, ...r } = e;
        if (o.isValidElement(n)) {
            let e = Bs(n),
                i = zs(r, n.props);
            return (
                n.type !== o.Fragment && (i.ref = t ? l(t, e) : e),
                o.cloneElement(n, i)
            );
        }
        return o.Children.count(n) > 1 ? o.Children.only(null) : null;
    });
    return ((t.displayName = `${e}.SlotClone`), t);
}
var Ls = Symbol(`radix.slottable`);
function Rs(e) {
    return (
        o.isValidElement(e) &&
        typeof e.type == `function` &&
        `__radixId` in e.type &&
        e.type.__radixId === Ls
    );
}
function zs(e, t) {
    let n = { ...t };
    for (let r in t) {
        let i = e[r],
            a = t[r];
        /^on[A-Z]/.test(r)
            ? i && a
                ? (n[r] = (...e) => {
                      let t = a(...e);
                      return (i(...e), t);
                  })
                : i && (n[r] = i)
            : r === `style`
              ? (n[r] = { ...i, ...a })
              : r === `className` && (n[r] = [i, a].filter(Boolean).join(` `));
    }
    return { ...e, ...n };
}
function Bs(e) {
    let t = Object.getOwnPropertyDescriptor(e.props, `ref`)?.get,
        n = t && `isReactWarning` in t && t.isReactWarning;
    return n
        ? e.ref
        : ((t = Object.getOwnPropertyDescriptor(e, `ref`)?.get),
          (n = t && `isReactWarning` in t && t.isReactWarning),
          n ? e.props.ref : e.props.ref || e.ref);
}
function Vs(e) {
    let t = e + `CollectionProvider`,
        [n, r] = Ns(t),
        [i, a] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
        s = (e) => {
            let { scope: t, children: n } = e,
                r = o.useRef(null),
                a = o.useRef(new Map()).current;
            return (0, d.jsx)(i, {
                scope: t,
                itemMap: a,
                collectionRef: r,
                children: n,
            });
        };
    s.displayName = t;
    let c = e + `CollectionSlot`,
        l = Fs(c),
        f = o.forwardRef((e, t) => {
            let { scope: n, children: r } = e;
            return (0, d.jsx)(l, {
                ref: u(t, a(c, n).collectionRef),
                children: r,
            });
        });
    f.displayName = c;
    let p = e + `CollectionItemSlot`,
        m = `data-radix-collection-item`,
        h = Fs(p),
        g = o.forwardRef((e, t) => {
            let { scope: n, children: r, ...i } = e,
                s = o.useRef(null),
                c = u(t, s),
                l = a(p, n);
            return (
                o.useEffect(
                    () => (
                        l.itemMap.set(s, { ref: s, ...i }),
                        () => void l.itemMap.delete(s)
                    ),
                ),
                (0, d.jsx)(h, { [m]: ``, ref: c, children: r })
            );
        });
    g.displayName = p;
    function _(t) {
        let n = a(e + `CollectionConsumer`, t);
        return o.useCallback(() => {
            let e = n.collectionRef.current;
            if (!e) return [];
            let t = Array.from(e.querySelectorAll(`[${m}]`));
            return Array.from(n.itemMap.values()).sort(
                (e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current),
            );
        }, [n.collectionRef, n.itemMap]);
    }
    return [{ Provider: s, Slot: f, ItemSlot: g }, _, r];
}
function Hs(e, t = []) {
    let n = [];
    function r(t, r) {
        let i = o.createContext(r),
            a = n.length;
        n = [...n, r];
        let s = (t) => {
            let { scope: n, children: r, ...s } = t,
                c = n?.[e]?.[a] || i,
                l = o.useMemo(() => s, Object.values(s));
            return (0, d.jsx)(c.Provider, { value: l, children: r });
        };
        s.displayName = t + `Provider`;
        function c(n, s) {
            let c = s?.[e]?.[a] || i,
                l = o.useContext(c);
            if (l) return l;
            if (r !== void 0) return r;
            throw Error(`\`${n}\` must be used within \`${t}\``);
        }
        return [s, c];
    }
    let i = () => {
        let t = n.map((e) => o.createContext(e));
        return function (n) {
            let r = n?.[e] || t;
            return o.useMemo(
                () => ({ [`__scope${e}`]: { ...n, [e]: r } }),
                [n, r],
            );
        };
    };
    return ((i.scopeName = e), [r, Us(i, ...t)]);
}
function Us(...e) {
    let t = e[0];
    if (e.length === 1) return t;
    let n = () => {
        let n = e.map((e) => ({ useScope: e(), scopeName: e.scopeName }));
        return function (e) {
            let r = n.reduce((t, { useScope: n, scopeName: r }) => {
                let i = n(e)[`__scope${r}`];
                return { ...t, ...i };
            }, {});
            return o.useMemo(() => ({ [`__scope${t.scopeName}`]: r }), [r]);
        };
    };
    return ((n.scopeName = t.scopeName), n);
}
var Ws = o.createContext(void 0);
function Gs(e) {
    let t = o.useContext(Ws);
    return e || t || `ltr`;
}
function Ks(e) {
    let t = qs(e),
        n = o.forwardRef((e, n) => {
            let { children: r, ...i } = e,
                a = o.Children.toArray(r),
                s = a.find(Ys);
            if (s) {
                let e = s.props.children,
                    r = a.map((t) =>
                        t === s
                            ? o.Children.count(e) > 1
                                ? o.Children.only(null)
                                : o.isValidElement(e)
                                  ? e.props.children
                                  : null
                            : t,
                    );
                return (0, d.jsx)(t, {
                    ...i,
                    ref: n,
                    children: o.isValidElement(e)
                        ? o.cloneElement(e, void 0, r)
                        : null,
                });
            }
            return (0, d.jsx)(t, { ...i, ref: n, children: r });
        });
    return ((n.displayName = `${e}.Slot`), n);
}
function qs(e) {
    let t = o.forwardRef((e, t) => {
        let { children: n, ...r } = e;
        if (o.isValidElement(n)) {
            let e = Zs(n),
                i = Xs(r, n.props);
            return (
                n.type !== o.Fragment && (i.ref = t ? l(t, e) : e),
                o.cloneElement(n, i)
            );
        }
        return o.Children.count(n) > 1 ? o.Children.only(null) : null;
    });
    return ((t.displayName = `${e}.SlotClone`), t);
}
var Js = Symbol(`radix.slottable`);
function Ys(e) {
    return (
        o.isValidElement(e) &&
        typeof e.type == `function` &&
        `__radixId` in e.type &&
        e.type.__radixId === Js
    );
}
function Xs(e, t) {
    let n = { ...t };
    for (let r in t) {
        let i = e[r],
            a = t[r];
        /^on[A-Z]/.test(r)
            ? i && a
                ? (n[r] = (...e) => {
                      let t = a(...e);
                      return (i(...e), t);
                  })
                : i && (n[r] = i)
            : r === `style`
              ? (n[r] = { ...i, ...a })
              : r === `className` && (n[r] = [i, a].filter(Boolean).join(` `));
    }
    return { ...e, ...n };
}
function Zs(e) {
    let t = Object.getOwnPropertyDescriptor(e.props, `ref`)?.get,
        n = t && `isReactWarning` in t && t.isReactWarning;
    return n
        ? e.ref
        : ((t = Object.getOwnPropertyDescriptor(e, `ref`)?.get),
          (n = t && `isReactWarning` in t && t.isReactWarning),
          n ? e.props.ref : e.props.ref || e.ref);
}
var Qs = [
    `a`,
    `button`,
    `div`,
    `form`,
    `h2`,
    `h3`,
    `img`,
    `input`,
    `label`,
    `li`,
    `nav`,
    `ol`,
    `p`,
    `select`,
    `span`,
    `svg`,
    `ul`,
].reduce((e, t) => {
    let n = Ks(`Primitive.${t}`),
        r = o.forwardRef((e, r) => {
            let { asChild: i, ...a } = e,
                o = i ? n : t;
            return (
                typeof window < `u` && (window[Symbol.for(`radix-ui`)] = !0),
                (0, d.jsx)(o, { ...a, ref: r })
            );
        });
    return ((r.displayName = `Primitive.${t}`), { ...e, [t]: r });
}, {});
function $s(e, t) {
    e && m.flushSync(() => e.dispatchEvent(t));
}
function ec(e, t = []) {
    let n = [];
    function r(t, r) {
        let i = o.createContext(r),
            a = n.length;
        n = [...n, r];
        let s = (t) => {
            let { scope: n, children: r, ...s } = t,
                c = n?.[e]?.[a] || i,
                l = o.useMemo(() => s, Object.values(s));
            return (0, d.jsx)(c.Provider, { value: l, children: r });
        };
        s.displayName = t + `Provider`;
        function c(n, s) {
            let c = s?.[e]?.[a] || i,
                l = o.useContext(c);
            if (l) return l;
            if (r !== void 0) return r;
            throw Error(`\`${n}\` must be used within \`${t}\``);
        }
        return [s, c];
    }
    let i = () => {
        let t = n.map((e) => o.createContext(e));
        return function (n) {
            let r = n?.[e] || t;
            return o.useMemo(
                () => ({ [`__scope${e}`]: { ...n, [e]: r } }),
                [n, r],
            );
        };
    };
    return ((i.scopeName = e), [r, tc(i, ...t)]);
}
function tc(...e) {
    let t = e[0];
    if (e.length === 1) return t;
    let n = () => {
        let n = e.map((e) => ({ useScope: e(), scopeName: e.scopeName }));
        return function (e) {
            let r = n.reduce((t, { useScope: n, scopeName: r }) => {
                let i = n(e)[`__scope${r}`];
                return { ...t, ...i };
            }, {});
            return o.useMemo(() => ({ [`__scope${t.scopeName}`]: r }), [r]);
        };
    };
    return ((n.scopeName = t.scopeName), n);
}
function nc(e) {
    let t = rc(e),
        n = o.forwardRef((e, n) => {
            let { children: r, ...i } = e,
                a = o.Children.toArray(r),
                s = a.find(ac);
            if (s) {
                let e = s.props.children,
                    r = a.map((t) =>
                        t === s
                            ? o.Children.count(e) > 1
                                ? o.Children.only(null)
                                : o.isValidElement(e)
                                  ? e.props.children
                                  : null
                            : t,
                    );
                return (0, d.jsx)(t, {
                    ...i,
                    ref: n,
                    children: o.isValidElement(e)
                        ? o.cloneElement(e, void 0, r)
                        : null,
                });
            }
            return (0, d.jsx)(t, { ...i, ref: n, children: r });
        });
    return ((n.displayName = `${e}.Slot`), n);
}
function rc(e) {
    let t = o.forwardRef((e, t) => {
        let { children: n, ...r } = e;
        if (o.isValidElement(n)) {
            let e = sc(n),
                i = oc(r, n.props);
            return (
                n.type !== o.Fragment && (i.ref = t ? l(t, e) : e),
                o.cloneElement(n, i)
            );
        }
        return o.Children.count(n) > 1 ? o.Children.only(null) : null;
    });
    return ((t.displayName = `${e}.SlotClone`), t);
}
var ic = Symbol(`radix.slottable`);
function ac(e) {
    return (
        o.isValidElement(e) &&
        typeof e.type == `function` &&
        `__radixId` in e.type &&
        e.type.__radixId === ic
    );
}
function oc(e, t) {
    let n = { ...t };
    for (let r in t) {
        let i = e[r],
            a = t[r];
        /^on[A-Z]/.test(r)
            ? i && a
                ? (n[r] = (...e) => {
                      let t = a(...e);
                      return (i(...e), t);
                  })
                : i && (n[r] = i)
            : r === `style`
              ? (n[r] = { ...i, ...a })
              : r === `className` && (n[r] = [i, a].filter(Boolean).join(` `));
    }
    return { ...e, ...n };
}
function sc(e) {
    let t = Object.getOwnPropertyDescriptor(e.props, `ref`)?.get,
        n = t && `isReactWarning` in t && t.isReactWarning;
    return n
        ? e.ref
        : ((t = Object.getOwnPropertyDescriptor(e, `ref`)?.get),
          (n = t && `isReactWarning` in t && t.isReactWarning),
          n ? e.props.ref : e.props.ref || e.ref);
}
var cc = [
        `a`,
        `button`,
        `div`,
        `form`,
        `h2`,
        `h3`,
        `img`,
        `input`,
        `label`,
        `li`,
        `nav`,
        `ol`,
        `p`,
        `select`,
        `span`,
        `svg`,
        `ul`,
    ].reduce((e, t) => {
        let n = nc(`Primitive.${t}`),
            r = o.forwardRef((e, r) => {
                let { asChild: i, ...a } = e,
                    o = i ? n : t;
                return (
                    typeof window < `u` &&
                        (window[Symbol.for(`radix-ui`)] = !0),
                    (0, d.jsx)(o, { ...a, ref: r })
                );
            });
        return ((r.displayName = `Primitive.${t}`), { ...e, [t]: r });
    }, {}),
    lc = `rovingFocusGroup.onEntryFocus`,
    uc = { bubbles: !1, cancelable: !0 },
    dc = `RovingFocusGroup`,
    [fc, pc, mc] = Vs(dc),
    [hc, gc] = ec(dc, [mc]),
    [_c, vc] = hc(dc),
    yc = o.forwardRef((e, t) =>
        (0, d.jsx)(fc.Provider, {
            scope: e.__scopeRovingFocusGroup,
            children: (0, d.jsx)(fc.Slot, {
                scope: e.__scopeRovingFocusGroup,
                children: (0, d.jsx)(bc, { ...e, ref: t }),
            }),
        }),
    );
yc.displayName = dc;
var bc = o.forwardRef((e, t) => {
        let {
                __scopeRovingFocusGroup: n,
                orientation: r,
                loop: i = !1,
                dir: a,
                currentTabStopId: c,
                defaultCurrentTabStopId: l,
                onCurrentTabStopIdChange: f,
                onEntryFocus: p,
                preventScrollOnEntryFocus: m = !1,
                ...h
            } = e,
            g = o.useRef(null),
            _ = u(t, g),
            v = Gs(a),
            [y, b] = K({
                prop: c,
                defaultProp: l ?? null,
                onChange: f,
                caller: dc,
            }),
            [x, S] = o.useState(!1),
            w = C(p),
            T = pc(n),
            E = o.useRef(!1),
            [D, O] = o.useState(0);
        return (
            o.useEffect(() => {
                let e = g.current;
                if (e)
                    return (
                        e.addEventListener(lc, w),
                        () => e.removeEventListener(lc, w)
                    );
            }, [w]),
            (0, d.jsx)(_c, {
                scope: n,
                orientation: r,
                dir: v,
                loop: i,
                currentTabStopId: y,
                onItemFocus: o.useCallback((e) => b(e), [b]),
                onItemShiftTab: o.useCallback(() => S(!0), []),
                onFocusableItemAdd: o.useCallback(() => O((e) => e + 1), []),
                onFocusableItemRemove: o.useCallback(() => O((e) => e - 1), []),
                children: (0, d.jsx)(cc.div, {
                    tabIndex: x || D === 0 ? -1 : 0,
                    'data-orientation': r,
                    ...h,
                    ref: _,
                    style: { outline: `none`, ...e.style },
                    onMouseDown: s(e.onMouseDown, () => {
                        E.current = !0;
                    }),
                    onFocus: s(e.onFocus, (e) => {
                        let t = !E.current;
                        if (e.target === e.currentTarget && t && !x) {
                            let t = new CustomEvent(lc, uc);
                            if (
                                (e.currentTarget.dispatchEvent(t),
                                !t.defaultPrevented)
                            ) {
                                let e = T().filter((e) => e.focusable);
                                Ec(
                                    [
                                        e.find((e) => e.active),
                                        e.find((e) => e.id === y),
                                        ...e,
                                    ]
                                        .filter(Boolean)
                                        .map((e) => e.ref.current),
                                    m,
                                );
                            }
                        }
                        E.current = !1;
                    }),
                    onBlur: s(e.onBlur, () => S(!1)),
                }),
            })
        );
    }),
    xc = `RovingFocusGroupItem`,
    Sc = o.forwardRef((e, t) => {
        let {
                __scopeRovingFocusGroup: n,
                focusable: r = !0,
                active: i = !1,
                tabStopId: a,
                children: c,
                ...l
            } = e,
            u = L(),
            f = a || u,
            p = vc(xc, n),
            m = p.currentTabStopId === f,
            h = pc(n),
            {
                onFocusableItemAdd: g,
                onFocusableItemRemove: _,
                currentTabStopId: v,
            } = p;
        return (
            o.useEffect(() => {
                if (r) return (g(), () => _());
            }, [r, g, _]),
            (0, d.jsx)(fc.ItemSlot, {
                scope: n,
                id: f,
                focusable: r,
                active: i,
                children: (0, d.jsx)(cc.span, {
                    tabIndex: m ? 0 : -1,
                    'data-orientation': p.orientation,
                    ...l,
                    ref: t,
                    onMouseDown: s(e.onMouseDown, (e) => {
                        r ? p.onItemFocus(f) : e.preventDefault();
                    }),
                    onFocus: s(e.onFocus, () => p.onItemFocus(f)),
                    onKeyDown: s(e.onKeyDown, (e) => {
                        if (e.key === `Tab` && e.shiftKey) {
                            p.onItemShiftTab();
                            return;
                        }
                        if (e.target !== e.currentTarget) return;
                        let t = Tc(e, p.orientation, p.dir);
                        if (t !== void 0) {
                            if (
                                e.metaKey ||
                                e.ctrlKey ||
                                e.altKey ||
                                e.shiftKey
                            )
                                return;
                            e.preventDefault();
                            let n = h()
                                .filter((e) => e.focusable)
                                .map((e) => e.ref.current);
                            if (t === `last`) n.reverse();
                            else if (t === `prev` || t === `next`) {
                                t === `prev` && n.reverse();
                                let r = n.indexOf(e.currentTarget);
                                n = p.loop ? Dc(n, r + 1) : n.slice(r + 1);
                            }
                            setTimeout(() => Ec(n));
                        }
                    }),
                    children:
                        typeof c == `function`
                            ? c({ isCurrentTabStop: m, hasTabStop: v != null })
                            : c,
                }),
            })
        );
    });
Sc.displayName = xc;
var Cc = {
    ArrowLeft: `prev`,
    ArrowUp: `prev`,
    ArrowRight: `next`,
    ArrowDown: `next`,
    PageUp: `first`,
    Home: `first`,
    PageDown: `last`,
    End: `last`,
};
function wc(e, t) {
    return t === `rtl`
        ? e === `ArrowLeft`
            ? `ArrowRight`
            : e === `ArrowRight`
              ? `ArrowLeft`
              : e
        : e;
}
function Tc(e, t, n) {
    let r = wc(e.key, n);
    if (
        !(t === `vertical` && [`ArrowLeft`, `ArrowRight`].includes(r)) &&
        !(t === `horizontal` && [`ArrowUp`, `ArrowDown`].includes(r))
    )
        return Cc[r];
}
function Ec(e, t = !1) {
    let n = document.activeElement;
    for (let r of e)
        if (
            r === n ||
            (r.focus({ preventScroll: t }), document.activeElement !== n)
        )
            return;
}
function Dc(e, t) {
    return e.map((n, r) => e[(t + r) % e.length]);
}
var Oc = yc,
    kc = Sc,
    Ac = [`Enter`, ` `],
    jc = [`ArrowDown`, `PageUp`, `Home`],
    Mc = [`ArrowUp`, `PageDown`, `End`],
    Nc = [...jc, ...Mc],
    Pc = { ltr: [...Ac, `ArrowRight`], rtl: [...Ac, `ArrowLeft`] },
    Fc = { ltr: [`ArrowLeft`], rtl: [`ArrowRight`] },
    Ic = `Menu`,
    [Lc, Rc, zc] = Vs(Ic),
    [Bc, Vc] = Hs(Ic, [zc, Mn, gc]),
    Hc = Mn(),
    Uc = gc(),
    [Wc, Gc] = Bc(Ic),
    [Kc, qc] = Bc(Ic),
    Jc = (e) => {
        let {
                __scopeMenu: t,
                open: n = !1,
                children: r,
                dir: i,
                onOpenChange: a,
                modal: s = !0,
            } = e,
            c = Hc(t),
            [l, u] = o.useState(null),
            f = o.useRef(!1),
            p = C(a),
            m = Gs(i);
        return (
            o.useEffect(() => {
                let e = () => {
                        ((f.current = !0),
                            document.addEventListener(`pointerdown`, t, {
                                capture: !0,
                                once: !0,
                            }),
                            document.addEventListener(`pointermove`, t, {
                                capture: !0,
                                once: !0,
                            }));
                    },
                    t = () => (f.current = !1);
                return (
                    document.addEventListener(`keydown`, e, { capture: !0 }),
                    () => {
                        (document.removeEventListener(`keydown`, e, {
                            capture: !0,
                        }),
                            document.removeEventListener(`pointerdown`, t, {
                                capture: !0,
                            }),
                            document.removeEventListener(`pointermove`, t, {
                                capture: !0,
                            }));
                    }
                );
            }, []),
            (0, d.jsx)(Jn, {
                ...c,
                children: (0, d.jsx)(Wc, {
                    scope: t,
                    open: n,
                    onOpenChange: p,
                    content: l,
                    onContentChange: u,
                    children: (0, d.jsx)(Kc, {
                        scope: t,
                        onClose: o.useCallback(() => p(!1), [p]),
                        isUsingKeyboardRef: f,
                        dir: m,
                        modal: s,
                        children: r,
                    }),
                }),
            })
        );
    };
Jc.displayName = Ic;
var Yc = `MenuAnchor`,
    Xc = o.forwardRef((e, t) => {
        let { __scopeMenu: n, ...r } = e,
            i = Hc(n);
        return (0, d.jsx)(Yn, { ...i, ...r, ref: t });
    });
Xc.displayName = Yc;
var Zc = `MenuPortal`,
    [Qc, $c] = Bc(Zc, { forceMount: void 0 }),
    el = (e) => {
        let { __scopeMenu: t, forceMount: n, children: r, container: i } = e,
            a = Gc(Zc, t);
        return (0, d.jsx)(Qc, {
            scope: t,
            forceMount: n,
            children: (0, d.jsx)(G, {
                present: n || a.open,
                children: (0, d.jsx)(or, {
                    asChild: !0,
                    container: i,
                    children: r,
                }),
            }),
        });
    };
el.displayName = Zc;
var Y = `MenuContent`,
    [tl, nl] = Bc(Y),
    rl = o.forwardRef((e, t) => {
        let n = $c(Y, e.__scopeMenu),
            { forceMount: r = n.forceMount, ...i } = e,
            a = Gc(Y, e.__scopeMenu),
            o = qc(Y, e.__scopeMenu);
        return (0, d.jsx)(Lc.Provider, {
            scope: e.__scopeMenu,
            children: (0, d.jsx)(G, {
                present: r || a.open,
                children: (0, d.jsx)(Lc.Slot, {
                    scope: e.__scopeMenu,
                    children: o.modal
                        ? (0, d.jsx)(il, { ...i, ref: t })
                        : (0, d.jsx)(al, { ...i, ref: t }),
                }),
            }),
        });
    }),
    il = o.forwardRef((e, t) => {
        let n = Gc(Y, e.__scopeMenu),
            r = o.useRef(null),
            i = u(t, r);
        return (
            o.useEffect(() => {
                let e = r.current;
                if (e) return Io(e);
            }, []),
            (0, d.jsx)(sl, {
                ...e,
                ref: i,
                trapFocus: n.open,
                disableOutsidePointerEvents: n.open,
                disableOutsideScroll: !0,
                onFocusOutside: s(e.onFocusOutside, (e) => e.preventDefault(), {
                    checkForDefaultPrevented: !1,
                }),
                onDismiss: () => n.onOpenChange(!1),
            })
        );
    }),
    al = o.forwardRef((e, t) => {
        let n = Gc(Y, e.__scopeMenu);
        return (0, d.jsx)(sl, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            disableOutsideScroll: !1,
            onDismiss: () => n.onOpenChange(!1),
        });
    }),
    ol = Ks(`MenuContent.ScrollLock`),
    sl = o.forwardRef((e, t) => {
        let {
                __scopeMenu: n,
                loop: r = !1,
                trapFocus: i,
                onOpenAutoFocus: a,
                onCloseAutoFocus: c,
                disableOutsidePointerEvents: l,
                onEntryFocus: f,
                onEscapeKeyDown: p,
                onPointerDownOutside: m,
                onFocusOutside: h,
                onInteractOutside: g,
                onDismiss: _,
                disableOutsideScroll: v,
                ...y
            } = e,
            b = Gc(Y, n),
            x = qc(Y, n),
            S = Hc(n),
            C = Uc(n),
            w = Rc(n),
            [T, E] = o.useState(null),
            D = o.useRef(null),
            O = u(t, D, b.onContentChange),
            k = o.useRef(0),
            A = o.useRef(``),
            M = o.useRef(0),
            N = o.useRef(null),
            P = o.useRef(`right`),
            ee = o.useRef(0),
            te = v ? Do : o.Fragment,
            ne = v ? { as: ol, allowPinchZoom: !0 } : void 0,
            F = (e) => {
                let t = A.current + e,
                    n = w().filter((e) => !e.disabled),
                    r = document.activeElement,
                    i = n.find((e) => e.ref.current === r)?.textValue,
                    a = Gl(
                        n.map((e) => e.textValue),
                        t,
                        i,
                    ),
                    o = n.find((e) => e.textValue === a)?.ref.current;
                ((function e(t) {
                    ((A.current = t),
                        window.clearTimeout(k.current),
                        t !== `` &&
                            (k.current = window.setTimeout(() => e(``), 1e3)));
                })(t),
                    o && setTimeout(() => o.focus()));
            };
        (o.useEffect(() => () => window.clearTimeout(k.current), []), _a());
        let I = o.useCallback(
            (e) => P.current === N.current?.side && ql(e, N.current?.area),
            [],
        );
        return (0, d.jsx)(tl, {
            scope: n,
            searchRef: A,
            onItemEnter: o.useCallback(
                (e) => {
                    I(e) && e.preventDefault();
                },
                [I],
            ),
            onItemLeave: o.useCallback(
                (e) => {
                    I(e) || (D.current?.focus(), E(null));
                },
                [I],
            ),
            onTriggerLeave: o.useCallback(
                (e) => {
                    I(e) && e.preventDefault();
                },
                [I],
            ),
            pointerGraceTimerRef: M,
            onPointerGraceIntentChange: o.useCallback((e) => {
                N.current = e;
            }, []),
            children: (0, d.jsx)(te, {
                ...ne,
                children: (0, d.jsx)(Zi, {
                    asChild: !0,
                    trapped: i,
                    onMountAutoFocus: s(a, (e) => {
                        (e.preventDefault(),
                            D.current?.focus({ preventScroll: !0 }));
                    }),
                    onUnmountAutoFocus: c,
                    children: (0, d.jsx)(j, {
                        asChild: !0,
                        disableOutsidePointerEvents: l,
                        onEscapeKeyDown: p,
                        onPointerDownOutside: m,
                        onFocusOutside: h,
                        onInteractOutside: g,
                        onDismiss: _,
                        children: (0, d.jsx)(Oc, {
                            asChild: !0,
                            ...C,
                            dir: x.dir,
                            orientation: `vertical`,
                            loop: r,
                            currentTabStopId: T,
                            onCurrentTabStopIdChange: E,
                            onEntryFocus: s(f, (e) => {
                                x.isUsingKeyboardRef.current ||
                                    e.preventDefault();
                            }),
                            preventScrollOnEntryFocus: !0,
                            children: (0, d.jsx)(Xn, {
                                role: `menu`,
                                'aria-orientation': `vertical`,
                                'data-state': Bl(b.open),
                                'data-radix-menu-content': ``,
                                dir: x.dir,
                                ...S,
                                ...y,
                                ref: O,
                                style: { outline: `none`, ...y.style },
                                onKeyDown: s(y.onKeyDown, (e) => {
                                    let t =
                                            e.target.closest(
                                                `[data-radix-menu-content]`,
                                            ) === e.currentTarget,
                                        n = e.ctrlKey || e.altKey || e.metaKey,
                                        r = e.key.length === 1;
                                    t &&
                                        (e.key === `Tab` && e.preventDefault(),
                                        !n && r && F(e.key));
                                    let i = D.current;
                                    if (e.target !== i || !Nc.includes(e.key))
                                        return;
                                    e.preventDefault();
                                    let a = w()
                                        .filter((e) => !e.disabled)
                                        .map((e) => e.ref.current);
                                    (Mc.includes(e.key) && a.reverse(), Ul(a));
                                }),
                                onBlur: s(e.onBlur, (e) => {
                                    e.currentTarget.contains(e.target) ||
                                        (window.clearTimeout(k.current),
                                        (A.current = ``));
                                }),
                                onPointerMove: s(
                                    e.onPointerMove,
                                    Jl((e) => {
                                        let t = e.target,
                                            n = ee.current !== e.clientX;
                                        e.currentTarget.contains(t) &&
                                            n &&
                                            ((P.current =
                                                e.clientX > ee.current
                                                    ? `right`
                                                    : `left`),
                                            (ee.current = e.clientX));
                                    }),
                                ),
                            }),
                        }),
                    }),
                }),
            }),
        });
    });
rl.displayName = Y;
var cl = `MenuGroup`,
    ll = o.forwardRef((e, t) => {
        let { __scopeMenu: n, ...r } = e;
        return (0, d.jsx)(Qs.div, { role: `group`, ...r, ref: t });
    });
ll.displayName = cl;
var ul = `MenuLabel`,
    dl = o.forwardRef((e, t) => {
        let { __scopeMenu: n, ...r } = e;
        return (0, d.jsx)(Qs.div, { ...r, ref: t });
    });
dl.displayName = ul;
var fl = `MenuItem`,
    pl = `menu.itemSelect`,
    ml = o.forwardRef((e, t) => {
        let { disabled: n = !1, onSelect: r, ...i } = e,
            a = o.useRef(null),
            c = qc(fl, e.__scopeMenu),
            l = nl(fl, e.__scopeMenu),
            f = u(t, a),
            p = o.useRef(!1),
            m = () => {
                let e = a.current;
                if (!n && e) {
                    let t = new CustomEvent(pl, {
                        bubbles: !0,
                        cancelable: !0,
                    });
                    (e.addEventListener(pl, (e) => r?.(e), { once: !0 }),
                        $s(e, t),
                        t.defaultPrevented ? (p.current = !1) : c.onClose());
                }
            };
        return (0, d.jsx)(hl, {
            ...i,
            ref: f,
            disabled: n,
            onClick: s(e.onClick, m),
            onPointerDown: (t) => {
                (e.onPointerDown?.(t), (p.current = !0));
            },
            onPointerUp: s(e.onPointerUp, (e) => {
                p.current || e.currentTarget?.click();
            }),
            onKeyDown: s(e.onKeyDown, (e) => {
                let t = l.searchRef.current !== ``;
                n ||
                    (t && e.key === ` `) ||
                    (Ac.includes(e.key) &&
                        (e.currentTarget.click(), e.preventDefault()));
            }),
        });
    });
ml.displayName = fl;
var hl = o.forwardRef((e, t) => {
        let { __scopeMenu: n, disabled: r = !1, textValue: i, ...a } = e,
            c = nl(fl, n),
            l = Uc(n),
            f = o.useRef(null),
            p = u(t, f),
            [m, h] = o.useState(!1),
            [g, _] = o.useState(``);
        return (
            o.useEffect(() => {
                let e = f.current;
                e && _((e.textContent ?? ``).trim());
            }, [a.children]),
            (0, d.jsx)(Lc.ItemSlot, {
                scope: n,
                disabled: r,
                textValue: i ?? g,
                children: (0, d.jsx)(kc, {
                    asChild: !0,
                    ...l,
                    focusable: !r,
                    children: (0, d.jsx)(Qs.div, {
                        role: `menuitem`,
                        'data-highlighted': m ? `` : void 0,
                        'aria-disabled': r || void 0,
                        'data-disabled': r ? `` : void 0,
                        ...a,
                        ref: p,
                        onPointerMove: s(
                            e.onPointerMove,
                            Jl((e) => {
                                r
                                    ? c.onItemLeave(e)
                                    : (c.onItemEnter(e),
                                      e.defaultPrevented ||
                                          e.currentTarget.focus({
                                              preventScroll: !0,
                                          }));
                            }),
                        ),
                        onPointerLeave: s(
                            e.onPointerLeave,
                            Jl((e) => c.onItemLeave(e)),
                        ),
                        onFocus: s(e.onFocus, () => h(!0)),
                        onBlur: s(e.onBlur, () => h(!1)),
                    }),
                }),
            })
        );
    }),
    gl = `MenuCheckboxItem`,
    _l = o.forwardRef((e, t) => {
        let { checked: n = !1, onCheckedChange: r, ...i } = e;
        return (0, d.jsx)(Tl, {
            scope: e.__scopeMenu,
            checked: n,
            children: (0, d.jsx)(ml, {
                role: `menuitemcheckbox`,
                'aria-checked': Vl(n) ? `mixed` : n,
                ...i,
                ref: t,
                'data-state': Hl(n),
                onSelect: s(i.onSelect, () => r?.(Vl(n) ? !0 : !n), {
                    checkForDefaultPrevented: !1,
                }),
            }),
        });
    });
_l.displayName = gl;
var vl = `MenuRadioGroup`,
    [yl, bl] = Bc(vl, { value: void 0, onValueChange: () => {} }),
    xl = o.forwardRef((e, t) => {
        let { value: n, onValueChange: r, ...i } = e,
            a = C(r);
        return (0, d.jsx)(yl, {
            scope: e.__scopeMenu,
            value: n,
            onValueChange: a,
            children: (0, d.jsx)(ll, { ...i, ref: t }),
        });
    });
xl.displayName = vl;
var Sl = `MenuRadioItem`,
    Cl = o.forwardRef((e, t) => {
        let { value: n, ...r } = e,
            i = bl(Sl, e.__scopeMenu),
            a = n === i.value;
        return (0, d.jsx)(Tl, {
            scope: e.__scopeMenu,
            checked: a,
            children: (0, d.jsx)(ml, {
                role: `menuitemradio`,
                'aria-checked': a,
                ...r,
                ref: t,
                'data-state': Hl(a),
                onSelect: s(r.onSelect, () => i.onValueChange?.(n), {
                    checkForDefaultPrevented: !1,
                }),
            }),
        });
    });
Cl.displayName = Sl;
var wl = `MenuItemIndicator`,
    [Tl, El] = Bc(wl, { checked: !1 }),
    Dl = o.forwardRef((e, t) => {
        let { __scopeMenu: n, forceMount: r, ...i } = e,
            a = El(wl, n);
        return (0, d.jsx)(G, {
            present: r || Vl(a.checked) || a.checked === !0,
            children: (0, d.jsx)(Qs.span, {
                ...i,
                ref: t,
                'data-state': Hl(a.checked),
            }),
        });
    });
Dl.displayName = wl;
var Ol = `MenuSeparator`,
    kl = o.forwardRef((e, t) => {
        let { __scopeMenu: n, ...r } = e;
        return (0, d.jsx)(Qs.div, {
            role: `separator`,
            'aria-orientation': `horizontal`,
            ...r,
            ref: t,
        });
    });
kl.displayName = Ol;
var Al = `MenuArrow`,
    jl = o.forwardRef((e, t) => {
        let { __scopeMenu: n, ...r } = e,
            i = Hc(n);
        return (0, d.jsx)(Zn, { ...i, ...r, ref: t });
    });
jl.displayName = Al;
var Ml = `MenuSub`,
    [Nl, Pl] = Bc(Ml),
    Fl = (e) => {
        let { __scopeMenu: t, children: n, open: r = !1, onOpenChange: i } = e,
            a = Gc(Ml, t),
            s = Hc(t),
            [c, l] = o.useState(null),
            [u, f] = o.useState(null),
            p = C(i);
        return (
            o.useEffect(
                () => (a.open === !1 && p(!1), () => p(!1)),
                [a.open, p],
            ),
            (0, d.jsx)(Jn, {
                ...s,
                children: (0, d.jsx)(Wc, {
                    scope: t,
                    open: r,
                    onOpenChange: p,
                    content: u,
                    onContentChange: f,
                    children: (0, d.jsx)(Nl, {
                        scope: t,
                        contentId: L(),
                        triggerId: L(),
                        trigger: c,
                        onTriggerChange: l,
                        children: n,
                    }),
                }),
            })
        );
    };
Fl.displayName = Ml;
var Il = `MenuSubTrigger`,
    Ll = o.forwardRef((e, t) => {
        let n = Gc(Il, e.__scopeMenu),
            r = qc(Il, e.__scopeMenu),
            i = Pl(Il, e.__scopeMenu),
            a = nl(Il, e.__scopeMenu),
            c = o.useRef(null),
            { pointerGraceTimerRef: u, onPointerGraceIntentChange: f } = a,
            p = { __scopeMenu: e.__scopeMenu },
            m = o.useCallback(() => {
                (c.current && window.clearTimeout(c.current),
                    (c.current = null));
            }, []);
        return (
            o.useEffect(() => m, [m]),
            o.useEffect(() => {
                let e = u.current;
                return () => {
                    (window.clearTimeout(e), f(null));
                };
            }, [u, f]),
            (0, d.jsx)(Xc, {
                asChild: !0,
                ...p,
                children: (0, d.jsx)(hl, {
                    id: i.triggerId,
                    'aria-haspopup': `menu`,
                    'aria-expanded': n.open,
                    'aria-controls': i.contentId,
                    'data-state': Bl(n.open),
                    ...e,
                    ref: l(t, i.onTriggerChange),
                    onClick: (t) => {
                        (e.onClick?.(t),
                            !(e.disabled || t.defaultPrevented) &&
                                (t.currentTarget.focus(),
                                n.open || n.onOpenChange(!0)));
                    },
                    onPointerMove: s(
                        e.onPointerMove,
                        Jl((t) => {
                            (a.onItemEnter(t),
                                !t.defaultPrevented &&
                                    !e.disabled &&
                                    !n.open &&
                                    !c.current &&
                                    (a.onPointerGraceIntentChange(null),
                                    (c.current = window.setTimeout(() => {
                                        (n.onOpenChange(!0), m());
                                    }, 100))));
                        }),
                    ),
                    onPointerLeave: s(
                        e.onPointerLeave,
                        Jl((e) => {
                            m();
                            let t = n.content?.getBoundingClientRect();
                            if (t) {
                                let r = n.content?.dataset.side,
                                    i = r === `right`,
                                    o = i ? -5 : 5,
                                    s = t[i ? `left` : `right`],
                                    c = t[i ? `right` : `left`];
                                (a.onPointerGraceIntentChange({
                                    area: [
                                        { x: e.clientX + o, y: e.clientY },
                                        { x: s, y: t.top },
                                        { x: c, y: t.top },
                                        { x: c, y: t.bottom },
                                        { x: s, y: t.bottom },
                                    ],
                                    side: r,
                                }),
                                    window.clearTimeout(u.current),
                                    (u.current = window.setTimeout(
                                        () =>
                                            a.onPointerGraceIntentChange(null),
                                        300,
                                    )));
                            } else {
                                if ((a.onTriggerLeave(e), e.defaultPrevented))
                                    return;
                                a.onPointerGraceIntentChange(null);
                            }
                        }),
                    ),
                    onKeyDown: s(e.onKeyDown, (t) => {
                        let i = a.searchRef.current !== ``;
                        e.disabled ||
                            (i && t.key === ` `) ||
                            (Pc[r.dir].includes(t.key) &&
                                (n.onOpenChange(!0),
                                n.content?.focus(),
                                t.preventDefault()));
                    }),
                }),
            })
        );
    });
Ll.displayName = Il;
var Rl = `MenuSubContent`,
    zl = o.forwardRef((e, t) => {
        let n = $c(Y, e.__scopeMenu),
            { forceMount: r = n.forceMount, ...i } = e,
            a = Gc(Y, e.__scopeMenu),
            c = qc(Y, e.__scopeMenu),
            l = Pl(Rl, e.__scopeMenu),
            f = o.useRef(null),
            p = u(t, f);
        return (0, d.jsx)(Lc.Provider, {
            scope: e.__scopeMenu,
            children: (0, d.jsx)(G, {
                present: r || a.open,
                children: (0, d.jsx)(Lc.Slot, {
                    scope: e.__scopeMenu,
                    children: (0, d.jsx)(sl, {
                        id: l.contentId,
                        'aria-labelledby': l.triggerId,
                        ...i,
                        ref: p,
                        align: `start`,
                        side: c.dir === `rtl` ? `left` : `right`,
                        disableOutsidePointerEvents: !1,
                        disableOutsideScroll: !1,
                        trapFocus: !1,
                        onOpenAutoFocus: (e) => {
                            (c.isUsingKeyboardRef.current && f.current?.focus(),
                                e.preventDefault());
                        },
                        onCloseAutoFocus: (e) => e.preventDefault(),
                        onFocusOutside: s(e.onFocusOutside, (e) => {
                            e.target !== l.trigger && a.onOpenChange(!1);
                        }),
                        onEscapeKeyDown: s(e.onEscapeKeyDown, (e) => {
                            (c.onClose(), e.preventDefault());
                        }),
                        onKeyDown: s(e.onKeyDown, (e) => {
                            let t = e.currentTarget.contains(e.target),
                                n = Fc[c.dir].includes(e.key);
                            t &&
                                n &&
                                (a.onOpenChange(!1),
                                l.trigger?.focus(),
                                e.preventDefault());
                        }),
                    }),
                }),
            }),
        });
    });
zl.displayName = Rl;
function Bl(e) {
    return e ? `open` : `closed`;
}
function Vl(e) {
    return e === `indeterminate`;
}
function Hl(e) {
    return Vl(e) ? `indeterminate` : e ? `checked` : `unchecked`;
}
function Ul(e) {
    let t = document.activeElement;
    for (let n of e)
        if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function Wl(e, t) {
    return e.map((n, r) => e[(t + r) % e.length]);
}
function Gl(e, t, n) {
    let r = t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t,
        i = n ? e.indexOf(n) : -1,
        a = Wl(e, Math.max(i, 0));
    r.length === 1 && (a = a.filter((e) => e !== n));
    let o = a.find((e) => e.toLowerCase().startsWith(r.toLowerCase()));
    return o === n ? void 0 : o;
}
function Kl(e, t) {
    let { x: n, y: r } = e,
        i = !1;
    for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
        let o = t[e],
            s = t[a],
            c = o.x,
            l = o.y,
            u = s.x,
            d = s.y;
        l > r != d > r && n < ((u - c) * (r - l)) / (d - l) + c && (i = !i);
    }
    return i;
}
function ql(e, t) {
    return t ? Kl({ x: e.clientX, y: e.clientY }, t) : !1;
}
function Jl(e) {
    return (t) => (t.pointerType === `mouse` ? e(t) : void 0);
}
var Yl = Jc,
    Xl = Xc,
    Zl = el,
    Ql = rl,
    $l = ll,
    eu = dl,
    tu = ml,
    nu = _l,
    ru = xl,
    iu = Cl,
    au = Dl,
    ou = kl,
    su = jl,
    cu = Ll,
    lu = zl,
    uu = `DropdownMenu`,
    [du, fu] = ws(uu, [Vc]),
    X = Vc(),
    [pu, mu] = du(uu),
    hu = (e) => {
        let {
                __scopeDropdownMenu: t,
                children: n,
                dir: r,
                open: i,
                defaultOpen: a,
                onOpenChange: s,
                modal: c = !0,
            } = e,
            l = X(t),
            u = o.useRef(null),
            [f, p] = K({
                prop: i,
                defaultProp: a ?? !1,
                onChange: s,
                caller: uu,
            });
        return (0, d.jsx)(pu, {
            scope: t,
            triggerId: L(),
            triggerRef: u,
            contentId: L(),
            open: f,
            onOpenChange: p,
            onOpenToggle: o.useCallback(() => p((e) => !e), [p]),
            modal: c,
            children: (0, d.jsx)(Yl, {
                ...l,
                open: f,
                onOpenChange: p,
                dir: r,
                modal: c,
                children: n,
            }),
        });
    };
hu.displayName = uu;
var gu = `DropdownMenuTrigger`,
    _u = o.forwardRef((e, t) => {
        let { __scopeDropdownMenu: n, disabled: r = !1, ...i } = e,
            a = mu(gu, n),
            o = X(n);
        return (0, d.jsx)(Xl, {
            asChild: !0,
            ...o,
            children: (0, d.jsx)(Ms.button, {
                type: `button`,
                id: a.triggerId,
                'aria-haspopup': `menu`,
                'aria-expanded': a.open,
                'aria-controls': a.open ? a.contentId : void 0,
                'data-state': a.open ? `open` : `closed`,
                'data-disabled': r ? `` : void 0,
                disabled: r,
                ...i,
                ref: l(t, a.triggerRef),
                onPointerDown: s(e.onPointerDown, (e) => {
                    !r &&
                        e.button === 0 &&
                        e.ctrlKey === !1 &&
                        (a.onOpenToggle(), a.open || e.preventDefault());
                }),
                onKeyDown: s(e.onKeyDown, (e) => {
                    r ||
                        ([`Enter`, ` `].includes(e.key) && a.onOpenToggle(),
                        e.key === `ArrowDown` && a.onOpenChange(!0),
                        [`Enter`, ` `, `ArrowDown`].includes(e.key) &&
                            e.preventDefault());
                }),
            }),
        });
    });
_u.displayName = gu;
var vu = `DropdownMenuPortal`,
    yu = (e) => {
        let { __scopeDropdownMenu: t, ...n } = e,
            r = X(t);
        return (0, d.jsx)(Zl, { ...r, ...n });
    };
yu.displayName = vu;
var bu = `DropdownMenuContent`,
    xu = o.forwardRef((e, t) => {
        let { __scopeDropdownMenu: n, ...r } = e,
            i = mu(bu, n),
            a = X(n),
            c = o.useRef(!1);
        return (0, d.jsx)(Ql, {
            id: i.contentId,
            'aria-labelledby': i.triggerId,
            ...a,
            ...r,
            ref: t,
            onCloseAutoFocus: s(e.onCloseAutoFocus, (e) => {
                (c.current || i.triggerRef.current?.focus(),
                    (c.current = !1),
                    e.preventDefault());
            }),
            onInteractOutside: s(e.onInteractOutside, (e) => {
                let t = e.detail.originalEvent,
                    n = t.button === 0 && t.ctrlKey === !0,
                    r = t.button === 2 || n;
                (!i.modal || r) && (c.current = !0);
            }),
            style: {
                ...e.style,
                '--radix-dropdown-menu-content-transform-origin': `var(--radix-popper-transform-origin)`,
                '--radix-dropdown-menu-content-available-width': `var(--radix-popper-available-width)`,
                '--radix-dropdown-menu-content-available-height': `var(--radix-popper-available-height)`,
                '--radix-dropdown-menu-trigger-width': `var(--radix-popper-anchor-width)`,
                '--radix-dropdown-menu-trigger-height': `var(--radix-popper-anchor-height)`,
            },
        });
    });
xu.displayName = bu;
var Su = `DropdownMenuGroup`,
    Cu = o.forwardRef((e, t) => {
        let { __scopeDropdownMenu: n, ...r } = e,
            i = X(n);
        return (0, d.jsx)($l, { ...i, ...r, ref: t });
    });
Cu.displayName = Su;
var wu = `DropdownMenuLabel`,
    Tu = o.forwardRef((e, t) => {
        let { __scopeDropdownMenu: n, ...r } = e,
            i = X(n);
        return (0, d.jsx)(eu, { ...i, ...r, ref: t });
    });
Tu.displayName = wu;
var Eu = `DropdownMenuItem`,
    Du = o.forwardRef((e, t) => {
        let { __scopeDropdownMenu: n, ...r } = e,
            i = X(n);
        return (0, d.jsx)(tu, { ...i, ...r, ref: t });
    });
Du.displayName = Eu;
var Ou = `DropdownMenuCheckboxItem`,
    ku = o.forwardRef((e, t) => {
        let { __scopeDropdownMenu: n, ...r } = e,
            i = X(n);
        return (0, d.jsx)(nu, { ...i, ...r, ref: t });
    });
ku.displayName = Ou;
var Au = `DropdownMenuRadioGroup`,
    ju = o.forwardRef((e, t) => {
        let { __scopeDropdownMenu: n, ...r } = e,
            i = X(n);
        return (0, d.jsx)(ru, { ...i, ...r, ref: t });
    });
ju.displayName = Au;
var Mu = `DropdownMenuRadioItem`,
    Nu = o.forwardRef((e, t) => {
        let { __scopeDropdownMenu: n, ...r } = e,
            i = X(n);
        return (0, d.jsx)(iu, { ...i, ...r, ref: t });
    });
Nu.displayName = Mu;
var Pu = `DropdownMenuItemIndicator`,
    Fu = o.forwardRef((e, t) => {
        let { __scopeDropdownMenu: n, ...r } = e,
            i = X(n);
        return (0, d.jsx)(au, { ...i, ...r, ref: t });
    });
Fu.displayName = Pu;
var Iu = `DropdownMenuSeparator`,
    Lu = o.forwardRef((e, t) => {
        let { __scopeDropdownMenu: n, ...r } = e,
            i = X(n);
        return (0, d.jsx)(ou, { ...i, ...r, ref: t });
    });
Lu.displayName = Iu;
var Ru = `DropdownMenuArrow`,
    zu = o.forwardRef((e, t) => {
        let { __scopeDropdownMenu: n, ...r } = e,
            i = X(n);
        return (0, d.jsx)(su, { ...i, ...r, ref: t });
    });
zu.displayName = Ru;
var Bu = `DropdownMenuSubTrigger`,
    Vu = o.forwardRef((e, t) => {
        let { __scopeDropdownMenu: n, ...r } = e,
            i = X(n);
        return (0, d.jsx)(cu, { ...i, ...r, ref: t });
    });
Vu.displayName = Bu;
var Hu = `DropdownMenuSubContent`,
    Uu = o.forwardRef((e, t) => {
        let { __scopeDropdownMenu: n, ...r } = e,
            i = X(n);
        return (0, d.jsx)(lu, {
            ...i,
            ...r,
            ref: t,
            style: {
                ...e.style,
                '--radix-dropdown-menu-content-transform-origin': `var(--radix-popper-transform-origin)`,
                '--radix-dropdown-menu-content-available-width': `var(--radix-popper-available-width)`,
                '--radix-dropdown-menu-content-available-height': `var(--radix-popper-available-height)`,
                '--radix-dropdown-menu-trigger-width': `var(--radix-popper-anchor-width)`,
                '--radix-dropdown-menu-trigger-height': `var(--radix-popper-anchor-height)`,
            },
        });
    });
Uu.displayName = Hu;
var Wu = hu,
    Gu = _u,
    Ku = yu,
    qu = xu,
    Ju = Cu,
    Yu = Tu,
    Xu = Du,
    Zu = Lu;
function Qu(e, t = []) {
    let n = [];
    function r(t, r) {
        let i = o.createContext(r);
        i.displayName = t + `Context`;
        let a = n.length;
        n = [...n, r];
        let s = (t) => {
            let { scope: n, children: r, ...s } = t,
                c = n?.[e]?.[a] || i,
                l = o.useMemo(() => s, Object.values(s));
            return (0, d.jsx)(c.Provider, { value: l, children: r });
        };
        s.displayName = t + `Provider`;
        function c(n, s) {
            let c = s?.[e]?.[a] || i,
                l = o.useContext(c);
            if (l) return l;
            if (r !== void 0) return r;
            throw Error(`\`${n}\` must be used within \`${t}\``);
        }
        return [s, c];
    }
    let i = () => {
        let t = n.map((e) => o.createContext(e));
        return function (n) {
            let r = n?.[e] || t;
            return o.useMemo(
                () => ({ [`__scope${e}`]: { ...n, [e]: r } }),
                [n, r],
            );
        };
    };
    return ((i.scopeName = e), [r, $u(i, ...t)]);
}
function $u(...e) {
    let t = e[0];
    if (e.length === 1) return t;
    let n = () => {
        let n = e.map((e) => ({ useScope: e(), scopeName: e.scopeName }));
        return function (e) {
            let r = n.reduce((t, { useScope: n, scopeName: r }) => {
                let i = n(e)[`__scope${r}`];
                return { ...t, ...i };
            }, {});
            return o.useMemo(() => ({ [`__scope${t.scopeName}`]: r }), [r]);
        };
    };
    return ((n.scopeName = t.scopeName), n);
}
var ed = t((e) => {
        var t = r();
        function n(e, t) {
            return (
                (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t)
            );
        }
        var i = typeof Object.is == `function` ? Object.is : n,
            a = t.useState,
            o = t.useEffect,
            s = t.useLayoutEffect,
            c = t.useDebugValue;
        function l(e, t) {
            var n = t(),
                r = a({ inst: { value: n, getSnapshot: t } }),
                i = r[0].inst,
                l = r[1];
            return (
                s(
                    function () {
                        ((i.value = n),
                            (i.getSnapshot = t),
                            u(i) && l({ inst: i }));
                    },
                    [e, n, t],
                ),
                o(
                    function () {
                        return (
                            u(i) && l({ inst: i }),
                            e(function () {
                                u(i) && l({ inst: i });
                            })
                        );
                    },
                    [e],
                ),
                c(n),
                n
            );
        }
        function u(e) {
            var t = e.getSnapshot;
            e = e.value;
            try {
                var n = t();
                return !i(e, n);
            } catch {
                return !0;
            }
        }
        function d(e, t) {
            return t();
        }
        var f =
            typeof window > `u` ||
            window.document === void 0 ||
            window.document.createElement === void 0
                ? d
                : l;
        e.useSyncExternalStore =
            t.useSyncExternalStore === void 0 ? f : t.useSyncExternalStore;
    }),
    td = t((e, t) => {
        t.exports = ed();
    }),
    nd = td();
function rd() {
    return (0, nd.useSyncExternalStore)(
        id,
        () => !0,
        () => !1,
    );
}
function id() {
    return () => {};
}
var ad = `Avatar`,
    [od, sd] = Qu(ad),
    [cd, ld] = od(ad),
    ud = o.forwardRef((e, t) => {
        let { __scopeAvatar: n, ...r } = e,
            [i, a] = o.useState(`idle`);
        return (0, d.jsx)(cd, {
            scope: n,
            imageLoadingStatus: i,
            onImageLoadingStatusChange: a,
            children: (0, d.jsx)(Ai.span, { ...r, ref: t }),
        });
    });
ud.displayName = ad;
var dd = `AvatarImage`,
    fd = o.forwardRef((e, t) => {
        let {
                __scopeAvatar: n,
                src: r,
                onLoadingStatusChange: i = () => {},
                ...a
            } = e,
            o = ld(dd, n),
            s = gd(r, a),
            c = C((e) => {
                (i(e), o.onImageLoadingStatusChange(e));
            });
        return (
            F(() => {
                s !== `idle` && c(s);
            }, [s, c]),
            s === `loaded` ? (0, d.jsx)(Ai.img, { ...a, ref: t, src: r }) : null
        );
    });
fd.displayName = dd;
var pd = `AvatarFallback`,
    md = o.forwardRef((e, t) => {
        let { __scopeAvatar: n, delayMs: r, ...i } = e,
            a = ld(pd, n),
            [s, c] = o.useState(r === void 0);
        return (
            o.useEffect(() => {
                if (r !== void 0) {
                    let e = window.setTimeout(() => c(!0), r);
                    return () => window.clearTimeout(e);
                }
            }, [r]),
            s && a.imageLoadingStatus !== `loaded`
                ? (0, d.jsx)(Ai.span, { ...i, ref: t })
                : null
        );
    });
md.displayName = pd;
function hd(e, t) {
    return e
        ? t
            ? (e.src !== t && (e.src = t),
              e.complete && e.naturalWidth > 0 ? `loaded` : `loading`)
            : `error`
        : `idle`;
}
function gd(e, { referrerPolicy: t, crossOrigin: n }) {
    let r = rd(),
        i = o.useRef(null),
        a = r ? ((i.current ||= new window.Image()), i.current) : null,
        [s, c] = o.useState(() => hd(a, e));
    return (
        F(() => {
            c(hd(a, e));
        }, [a, e]),
        F(() => {
            let e = (e) => () => {
                c(e);
            };
            if (!a) return;
            let r = e(`loaded`),
                i = e(`error`);
            return (
                a.addEventListener(`load`, r),
                a.addEventListener(`error`, i),
                t && (a.referrerPolicy = t),
                typeof n == `string` && (a.crossOrigin = n),
                () => {
                    (a.removeEventListener(`load`, r),
                        a.removeEventListener(`error`, i));
                }
            );
        }, [a, n, t]),
        s
    );
}
var _d = ud,
    vd = fd,
    yd = md,
    bd = `Label`,
    xd = o.forwardRef((e, t) =>
        (0, d.jsx)(Ai.label, {
            ...e,
            ref: t,
            onMouseDown: (t) => {
                t.target.closest(`button, input, select, textarea`) ||
                    (e.onMouseDown?.(t),
                    !t.defaultPrevented && t.detail > 1 && t.preventDefault());
            },
        }),
    );
xd.displayName = bd;
var Sd = xd;
function Cd(e, t = []) {
    let n = [];
    function r(t, r) {
        let i = o.createContext(r),
            a = n.length;
        n = [...n, r];
        let s = (t) => {
            let { scope: n, children: r, ...s } = t,
                c = n?.[e]?.[a] || i,
                l = o.useMemo(() => s, Object.values(s));
            return (0, d.jsx)(c.Provider, { value: l, children: r });
        };
        s.displayName = t + `Provider`;
        function c(n, s) {
            let c = s?.[e]?.[a] || i,
                l = o.useContext(c);
            if (l) return l;
            if (r !== void 0) return r;
            throw Error(`\`${n}\` must be used within \`${t}\``);
        }
        return [s, c];
    }
    let i = () => {
        let t = n.map((e) => o.createContext(e));
        return function (n) {
            let r = n?.[e] || t;
            return o.useMemo(
                () => ({ [`__scope${e}`]: { ...n, [e]: r } }),
                [n, r],
            );
        };
    };
    return ((i.scopeName = e), [r, wd(i, ...t)]);
}
function wd(...e) {
    let t = e[0];
    if (e.length === 1) return t;
    let n = () => {
        let n = e.map((e) => ({ useScope: e(), scopeName: e.scopeName }));
        return function (e) {
            let r = n.reduce((t, { useScope: n, scopeName: r }) => {
                let i = n(e)[`__scope${r}`];
                return { ...t, ...i };
            }, {});
            return o.useMemo(() => ({ [`__scope${t.scopeName}`]: r }), [r]);
        };
    };
    return ((n.scopeName = t.scopeName), n);
}
function Td(e) {
    let t = o.useRef({ value: e, previous: e });
    return o.useMemo(
        () => (
            t.current.value !== e &&
                ((t.current.previous = t.current.value), (t.current.value = e)),
            t.current.previous
        ),
        [e],
    );
}
function Ed(e) {
    let t = Dd(e),
        n = o.forwardRef((e, n) => {
            let { children: r, ...i } = e,
                a = o.Children.toArray(r),
                s = a.find(kd);
            if (s) {
                let e = s.props.children,
                    r = a.map((t) =>
                        t === s
                            ? o.Children.count(e) > 1
                                ? o.Children.only(null)
                                : o.isValidElement(e)
                                  ? e.props.children
                                  : null
                            : t,
                    );
                return (0, d.jsx)(t, {
                    ...i,
                    ref: n,
                    children: o.isValidElement(e)
                        ? o.cloneElement(e, void 0, r)
                        : null,
                });
            }
            return (0, d.jsx)(t, { ...i, ref: n, children: r });
        });
    return ((n.displayName = `${e}.Slot`), n);
}
function Dd(e) {
    let t = o.forwardRef((e, t) => {
        let { children: n, ...r } = e;
        if (o.isValidElement(n)) {
            let e = jd(n),
                i = Ad(r, n.props);
            return (
                n.type !== o.Fragment && (i.ref = t ? l(t, e) : e),
                o.cloneElement(n, i)
            );
        }
        return o.Children.count(n) > 1 ? o.Children.only(null) : null;
    });
    return ((t.displayName = `${e}.SlotClone`), t);
}
var Od = Symbol(`radix.slottable`);
function kd(e) {
    return (
        o.isValidElement(e) &&
        typeof e.type == `function` &&
        `__radixId` in e.type &&
        e.type.__radixId === Od
    );
}
function Ad(e, t) {
    let n = { ...t };
    for (let r in t) {
        let i = e[r],
            a = t[r];
        /^on[A-Z]/.test(r)
            ? i && a
                ? (n[r] = (...e) => {
                      let t = a(...e);
                      return (i(...e), t);
                  })
                : i && (n[r] = i)
            : r === `style`
              ? (n[r] = { ...i, ...a })
              : r === `className` && (n[r] = [i, a].filter(Boolean).join(` `));
    }
    return { ...e, ...n };
}
function jd(e) {
    let t = Object.getOwnPropertyDescriptor(e.props, `ref`)?.get,
        n = t && `isReactWarning` in t && t.isReactWarning;
    return n
        ? e.ref
        : ((t = Object.getOwnPropertyDescriptor(e, `ref`)?.get),
          (n = t && `isReactWarning` in t && t.isReactWarning),
          n ? e.props.ref : e.props.ref || e.ref);
}
var Md = [
        `a`,
        `button`,
        `div`,
        `form`,
        `h2`,
        `h3`,
        `img`,
        `input`,
        `label`,
        `li`,
        `nav`,
        `ol`,
        `p`,
        `select`,
        `span`,
        `svg`,
        `ul`,
    ].reduce((e, t) => {
        let n = Ed(`Primitive.${t}`),
            r = o.forwardRef((e, r) => {
                let { asChild: i, ...a } = e,
                    o = i ? n : t;
                return (
                    typeof window < `u` &&
                        (window[Symbol.for(`radix-ui`)] = !0),
                    (0, d.jsx)(o, { ...a, ref: r })
                );
            });
        return ((r.displayName = `Primitive.${t}`), { ...e, [t]: r });
    }, {}),
    Nd = `Checkbox`,
    [Pd, Fd] = Cd(Nd),
    [Id, Ld] = Pd(Nd);
function Rd(e) {
    let {
            __scopeCheckbox: t,
            checked: n,
            children: r,
            defaultChecked: i,
            disabled: a,
            form: s,
            name: c,
            onCheckedChange: l,
            required: u,
            value: f = `on`,
            internal_do_not_use_render: p,
        } = e,
        [m, h] = K({ prop: n, defaultProp: i ?? !1, onChange: l, caller: Nd }),
        [g, _] = o.useState(null),
        [v, y] = o.useState(null),
        b = o.useRef(!1),
        x = g ? !!s || !!g.closest(`form`) : !0,
        S = {
            checked: m,
            disabled: a,
            setChecked: h,
            control: g,
            setControl: _,
            name: c,
            form: s,
            value: f,
            hasConsumerStoppedPropagationRef: b,
            required: u,
            defaultChecked: qd(i) ? !1 : i,
            isFormControl: x,
            bubbleInput: v,
            setBubbleInput: y,
        };
    return (0, d.jsx)(Id, { scope: t, ...S, children: Kd(p) ? p(S) : r });
}
var zd = `CheckboxTrigger`,
    Bd = o.forwardRef(
        ({ __scopeCheckbox: e, onKeyDown: t, onClick: n, ...r }, i) => {
            let {
                    control: a,
                    value: c,
                    disabled: l,
                    checked: f,
                    required: p,
                    setControl: m,
                    setChecked: h,
                    hasConsumerStoppedPropagationRef: g,
                    isFormControl: _,
                    bubbleInput: v,
                } = Ld(zd, e),
                y = u(i, m),
                b = o.useRef(f);
            return (
                o.useEffect(() => {
                    let e = a?.form;
                    if (e) {
                        let t = () => h(b.current);
                        return (
                            e.addEventListener(`reset`, t),
                            () => e.removeEventListener(`reset`, t)
                        );
                    }
                }, [a, h]),
                (0, d.jsx)(Md.button, {
                    type: `button`,
                    role: `checkbox`,
                    'aria-checked': qd(f) ? `mixed` : f,
                    'aria-required': p,
                    'data-state': Jd(f),
                    'data-disabled': l ? `` : void 0,
                    disabled: l,
                    value: c,
                    ...r,
                    ref: y,
                    onKeyDown: s(t, (e) => {
                        e.key === `Enter` && e.preventDefault();
                    }),
                    onClick: s(n, (e) => {
                        (h((e) => (qd(e) ? !0 : !e)),
                            v &&
                                _ &&
                                ((g.current = e.isPropagationStopped()),
                                g.current || e.stopPropagation()));
                    }),
                })
            );
        },
    );
Bd.displayName = zd;
var Vd = o.forwardRef((e, t) => {
    let {
        __scopeCheckbox: n,
        name: r,
        checked: i,
        defaultChecked: a,
        required: o,
        disabled: s,
        value: c,
        onCheckedChange: l,
        form: u,
        ...f
    } = e;
    return (0, d.jsx)(Rd, {
        __scopeCheckbox: n,
        checked: i,
        defaultChecked: a,
        disabled: s,
        required: o,
        onCheckedChange: l,
        name: r,
        form: u,
        value: c,
        internal_do_not_use_render: ({ isFormControl: e }) =>
            (0, d.jsxs)(d.Fragment, {
                children: [
                    (0, d.jsx)(Bd, { ...f, ref: t, __scopeCheckbox: n }),
                    e && (0, d.jsx)(Gd, { __scopeCheckbox: n }),
                ],
            }),
    });
});
Vd.displayName = Nd;
var Hd = `CheckboxIndicator`,
    Ud = o.forwardRef((e, t) => {
        let { __scopeCheckbox: n, forceMount: r, ...i } = e,
            a = Ld(Hd, n);
        return (0, d.jsx)(G, {
            present: r || qd(a.checked) || a.checked === !0,
            children: (0, d.jsx)(Md.span, {
                'data-state': Jd(a.checked),
                'data-disabled': a.disabled ? `` : void 0,
                ...i,
                ref: t,
                style: { pointerEvents: `none`, ...e.style },
            }),
        });
    });
Ud.displayName = Hd;
var Wd = `CheckboxBubbleInput`,
    Gd = o.forwardRef(({ __scopeCheckbox: e, ...t }, n) => {
        let {
                control: r,
                hasConsumerStoppedPropagationRef: i,
                checked: a,
                defaultChecked: s,
                required: c,
                disabled: l,
                name: f,
                value: p,
                form: m,
                bubbleInput: h,
                setBubbleInput: g,
            } = Ld(Wd, e),
            _ = u(n, g),
            v = Td(a),
            y = kn(r);
        o.useEffect(() => {
            let e = h;
            if (!e) return;
            let t = window.HTMLInputElement.prototype,
                n = Object.getOwnPropertyDescriptor(t, `checked`).set,
                r = !i.current;
            if (v !== a && n) {
                let t = new Event(`click`, { bubbles: r });
                ((e.indeterminate = qd(a)),
                    n.call(e, qd(a) ? !1 : a),
                    e.dispatchEvent(t));
            }
        }, [h, v, a, i]);
        let b = o.useRef(qd(a) ? !1 : a);
        return (0, d.jsx)(Md.input, {
            type: `checkbox`,
            'aria-hidden': !0,
            defaultChecked: s ?? b.current,
            required: c,
            disabled: l,
            name: f,
            value: p,
            form: m,
            ...t,
            tabIndex: -1,
            ref: _,
            style: {
                ...t.style,
                ...y,
                position: `absolute`,
                pointerEvents: `none`,
                opacity: 0,
                margin: 0,
                transform: `translateX(-100%)`,
            },
        });
    });
Gd.displayName = Wd;
function Kd(e) {
    return typeof e == `function`;
}
function qd(e) {
    return e === `indeterminate`;
}
function Jd(e) {
    return qd(e) ? `indeterminate` : e ? `checked` : `unchecked`;
}
function Yd(e, [t, n]) {
    return Math.min(n, Math.max(t, e));
}
function Xd(e, t = []) {
    let n = [];
    function r(t, r) {
        let i = o.createContext(r),
            a = n.length;
        n = [...n, r];
        let s = (t) => {
            let { scope: n, children: r, ...s } = t,
                c = n?.[e]?.[a] || i,
                l = o.useMemo(() => s, Object.values(s));
            return (0, d.jsx)(c.Provider, { value: l, children: r });
        };
        s.displayName = t + `Provider`;
        function c(n, s) {
            let c = s?.[e]?.[a] || i,
                l = o.useContext(c);
            if (l) return l;
            if (r !== void 0) return r;
            throw Error(`\`${n}\` must be used within \`${t}\``);
        }
        return [s, c];
    }
    let i = () => {
        let t = n.map((e) => o.createContext(e));
        return function (n) {
            let r = n?.[e] || t;
            return o.useMemo(
                () => ({ [`__scope${e}`]: { ...n, [e]: r } }),
                [n, r],
            );
        };
    };
    return ((i.scopeName = e), [r, Zd(i, ...t)]);
}
function Zd(...e) {
    let t = e[0];
    if (e.length === 1) return t;
    let n = () => {
        let n = e.map((e) => ({ useScope: e(), scopeName: e.scopeName }));
        return function (e) {
            let r = n.reduce((t, { useScope: n, scopeName: r }) => {
                let i = n(e)[`__scope${r}`];
                return { ...t, ...i };
            }, {});
            return o.useMemo(() => ({ [`__scope${t.scopeName}`]: r }), [r]);
        };
    };
    return ((n.scopeName = t.scopeName), n);
}
function Qd(e) {
    let t = $d(e),
        n = o.forwardRef((e, n) => {
            let { children: r, ...i } = e,
                a = o.Children.toArray(r),
                s = a.find(tf);
            if (s) {
                let e = s.props.children,
                    r = a.map((t) =>
                        t === s
                            ? o.Children.count(e) > 1
                                ? o.Children.only(null)
                                : o.isValidElement(e)
                                  ? e.props.children
                                  : null
                            : t,
                    );
                return (0, d.jsx)(t, {
                    ...i,
                    ref: n,
                    children: o.isValidElement(e)
                        ? o.cloneElement(e, void 0, r)
                        : null,
                });
            }
            return (0, d.jsx)(t, { ...i, ref: n, children: r });
        });
    return ((n.displayName = `${e}.Slot`), n);
}
function $d(e) {
    let t = o.forwardRef((e, t) => {
        let { children: n, ...r } = e;
        if (o.isValidElement(n)) {
            let e = rf(n),
                i = nf(r, n.props);
            return (
                n.type !== o.Fragment && (i.ref = t ? l(t, e) : e),
                o.cloneElement(n, i)
            );
        }
        return o.Children.count(n) > 1 ? o.Children.only(null) : null;
    });
    return ((t.displayName = `${e}.SlotClone`), t);
}
var ef = Symbol(`radix.slottable`);
function tf(e) {
    return (
        o.isValidElement(e) &&
        typeof e.type == `function` &&
        `__radixId` in e.type &&
        e.type.__radixId === ef
    );
}
function nf(e, t) {
    let n = { ...t };
    for (let r in t) {
        let i = e[r],
            a = t[r];
        /^on[A-Z]/.test(r)
            ? i && a
                ? (n[r] = (...e) => {
                      let t = a(...e);
                      return (i(...e), t);
                  })
                : i && (n[r] = i)
            : r === `style`
              ? (n[r] = { ...i, ...a })
              : r === `className` && (n[r] = [i, a].filter(Boolean).join(` `));
    }
    return { ...e, ...n };
}
function rf(e) {
    let t = Object.getOwnPropertyDescriptor(e.props, `ref`)?.get,
        n = t && `isReactWarning` in t && t.isReactWarning;
    return n
        ? e.ref
        : ((t = Object.getOwnPropertyDescriptor(e, `ref`)?.get),
          (n = t && `isReactWarning` in t && t.isReactWarning),
          n ? e.props.ref : e.props.ref || e.ref);
}
var Z = [
        `a`,
        `button`,
        `div`,
        `form`,
        `h2`,
        `h3`,
        `img`,
        `input`,
        `label`,
        `li`,
        `nav`,
        `ol`,
        `p`,
        `select`,
        `span`,
        `svg`,
        `ul`,
    ].reduce((e, t) => {
        let n = Qd(`Primitive.${t}`),
            r = o.forwardRef((e, r) => {
                let { asChild: i, ...a } = e,
                    o = i ? n : t;
                return (
                    typeof window < `u` &&
                        (window[Symbol.for(`radix-ui`)] = !0),
                    (0, d.jsx)(o, { ...a, ref: r })
                );
            });
        return ((r.displayName = `Primitive.${t}`), { ...e, [t]: r });
    }, {}),
    af = [` `, `Enter`, `ArrowUp`, `ArrowDown`],
    of = [` `, `Enter`],
    sf = `Select`,
    [cf, lf, uf] = Vs(sf),
    [df, ff] = Xd(sf, [uf, Mn]),
    pf = Mn(),
    [mf, hf] = df(sf),
    [gf, _f] = df(sf),
    vf = (e) => {
        let {
                __scopeSelect: t,
                children: n,
                open: r,
                defaultOpen: i,
                onOpenChange: a,
                value: s,
                defaultValue: c,
                onValueChange: l,
                dir: u,
                name: f,
                autoComplete: p,
                disabled: m,
                required: h,
                form: g,
            } = e,
            _ = pf(t),
            [v, y] = o.useState(null),
            [b, x] = o.useState(null),
            [S, C] = o.useState(!1),
            w = Gs(u),
            [T, E] = K({
                prop: r,
                defaultProp: i ?? !1,
                onChange: a,
                caller: sf,
            }),
            [D, O] = K({ prop: s, defaultProp: c, onChange: l, caller: sf }),
            k = o.useRef(null),
            A = v ? g || !!v.closest(`form`) : !0,
            [j, M] = o.useState(new Set()),
            N = Array.from(j)
                .map((e) => e.props.value)
                .join(`;`);
        return (0, d.jsx)(Jn, {
            ..._,
            children: (0, d.jsxs)(mf, {
                required: h,
                scope: t,
                trigger: v,
                onTriggerChange: y,
                valueNode: b,
                onValueNodeChange: x,
                valueNodeHasChildren: S,
                onValueNodeHasChildrenChange: C,
                contentId: L(),
                value: D,
                onValueChange: O,
                open: T,
                onOpenChange: E,
                dir: w,
                triggerPointerDownPosRef: k,
                disabled: m,
                children: [
                    (0, d.jsx)(cf.Provider, {
                        scope: t,
                        children: (0, d.jsx)(gf, {
                            scope: e.__scopeSelect,
                            onNativeOptionAdd: o.useCallback((e) => {
                                M((t) => new Set(t).add(e));
                            }, []),
                            onNativeOptionRemove: o.useCallback((e) => {
                                M((t) => {
                                    let n = new Set(t);
                                    return (n.delete(e), n);
                                });
                            }, []),
                            children: n,
                        }),
                    }),
                    A
                        ? (0, d.jsxs)(
                              fp,
                              {
                                  'aria-hidden': !0,
                                  required: h,
                                  tabIndex: -1,
                                  name: f,
                                  autoComplete: p,
                                  value: D,
                                  onChange: (e) => O(e.target.value),
                                  disabled: m,
                                  form: g,
                                  children: [
                                      D === void 0
                                          ? (0, d.jsx)(`option`, { value: `` })
                                          : null,
                                      Array.from(j),
                                  ],
                              },
                              N,
                          )
                        : null,
                ],
            }),
        });
    };
vf.displayName = sf;
var yf = `SelectTrigger`,
    bf = o.forwardRef((e, t) => {
        let { __scopeSelect: n, disabled: r = !1, ...i } = e,
            a = pf(n),
            c = hf(yf, n),
            l = c.disabled || r,
            f = u(t, c.onTriggerChange),
            p = lf(n),
            m = o.useRef(`touch`),
            [h, g, _] = mp((e) => {
                let t = p().filter((e) => !e.disabled),
                    n = hp(
                        t,
                        e,
                        t.find((e) => e.value === c.value),
                    );
                n !== void 0 && c.onValueChange(n.value);
            }),
            v = (e) => {
                (l || (c.onOpenChange(!0), _()),
                    e &&
                        (c.triggerPointerDownPosRef.current = {
                            x: Math.round(e.pageX),
                            y: Math.round(e.pageY),
                        }));
            };
        return (0, d.jsx)(Yn, {
            asChild: !0,
            ...a,
            children: (0, d.jsx)(Z.button, {
                type: `button`,
                role: `combobox`,
                'aria-controls': c.contentId,
                'aria-expanded': c.open,
                'aria-required': c.required,
                'aria-autocomplete': `none`,
                dir: c.dir,
                'data-state': c.open ? `open` : `closed`,
                disabled: l,
                'data-disabled': l ? `` : void 0,
                'data-placeholder': pp(c.value) ? `` : void 0,
                ...i,
                ref: f,
                onClick: s(i.onClick, (e) => {
                    (e.currentTarget.focus(), m.current !== `mouse` && v(e));
                }),
                onPointerDown: s(i.onPointerDown, (e) => {
                    m.current = e.pointerType;
                    let t = e.target;
                    (t.hasPointerCapture(e.pointerId) &&
                        t.releasePointerCapture(e.pointerId),
                        e.button === 0 &&
                            e.ctrlKey === !1 &&
                            e.pointerType === `mouse` &&
                            (v(e), e.preventDefault()));
                }),
                onKeyDown: s(i.onKeyDown, (e) => {
                    let t = h.current !== ``;
                    (!(e.ctrlKey || e.altKey || e.metaKey) &&
                        e.key.length === 1 &&
                        g(e.key),
                        !(t && e.key === ` `) &&
                            af.includes(e.key) &&
                            (v(), e.preventDefault()));
                }),
            }),
        });
    });
bf.displayName = yf;
var xf = `SelectValue`,
    Sf = o.forwardRef((e, t) => {
        let {
                __scopeSelect: n,
                className: r,
                style: i,
                children: a,
                placeholder: o = ``,
                ...s
            } = e,
            c = hf(xf, n),
            { onValueNodeHasChildrenChange: l } = c,
            f = a !== void 0,
            p = u(t, c.onValueNodeChange);
        return (
            F(() => {
                l(f);
            }, [l, f]),
            (0, d.jsx)(Z.span, {
                ...s,
                ref: p,
                style: { pointerEvents: `none` },
                children: pp(c.value)
                    ? (0, d.jsx)(d.Fragment, { children: o })
                    : a,
            })
        );
    });
Sf.displayName = xf;
var Cf = `SelectIcon`,
    wf = o.forwardRef((e, t) => {
        let { __scopeSelect: n, children: r, ...i } = e;
        return (0, d.jsx)(Z.span, {
            'aria-hidden': !0,
            ...i,
            ref: t,
            children: r || `▼`,
        });
    });
wf.displayName = Cf;
var Tf = `SelectPortal`,
    Ef = (e) => (0, d.jsx)(or, { asChild: !0, ...e });
Ef.displayName = Tf;
var Df = `SelectContent`,
    Of = o.forwardRef((e, t) => {
        let n = hf(Df, e.__scopeSelect),
            [r, i] = o.useState();
        if (
            (F(() => {
                i(new DocumentFragment());
            }, []),
            !n.open)
        ) {
            let t = r;
            return t
                ? m.createPortal(
                      (0, d.jsx)(kf, {
                          scope: e.__scopeSelect,
                          children: (0, d.jsx)(cf.Slot, {
                              scope: e.__scopeSelect,
                              children: (0, d.jsx)(`div`, {
                                  children: e.children,
                              }),
                          }),
                      }),
                      t,
                  )
                : null;
        }
        return (0, d.jsx)(Nf, { ...e, ref: t });
    });
Of.displayName = Df;
var Q = 10,
    [kf, Af] = df(Df),
    jf = `SelectContentImpl`,
    Mf = Qd(`SelectContent.RemoveScroll`),
    Nf = o.forwardRef((e, t) => {
        let {
                __scopeSelect: n,
                position: r = `item-aligned`,
                onCloseAutoFocus: i,
                onEscapeKeyDown: a,
                onPointerDownOutside: c,
                side: l,
                sideOffset: f,
                align: p,
                alignOffset: m,
                arrowPadding: h,
                collisionBoundary: g,
                collisionPadding: _,
                sticky: v,
                hideWhenDetached: y,
                avoidCollisions: b,
                ...x
            } = e,
            S = hf(Df, n),
            [C, w] = o.useState(null),
            [T, E] = o.useState(null),
            D = u(t, (e) => w(e)),
            [O, k] = o.useState(null),
            [A, M] = o.useState(null),
            N = lf(n),
            [P, ee] = o.useState(!1),
            te = o.useRef(!1);
        (o.useEffect(() => {
            if (C) return Io(C);
        }, [C]),
            _a());
        let ne = o.useCallback(
                (e) => {
                    let [t, ...n] = N().map((e) => e.ref.current),
                        [r] = n.slice(-1),
                        i = document.activeElement;
                    for (let n of e)
                        if (
                            n === i ||
                            (n?.scrollIntoView({ block: `nearest` }),
                            n === t && T && (T.scrollTop = 0),
                            n === r && T && (T.scrollTop = T.scrollHeight),
                            n?.focus(),
                            document.activeElement !== i)
                        )
                            return;
                },
                [N, T],
            ),
            F = o.useCallback(() => ne([O, C]), [ne, O, C]);
        o.useEffect(() => {
            P && F();
        }, [P, F]);
        let { onOpenChange: I, triggerPointerDownPosRef: re } = S;
        (o.useEffect(() => {
            if (C) {
                let e = { x: 0, y: 0 },
                    t = (t) => {
                        e = {
                            x: Math.abs(
                                Math.round(t.pageX) - (re.current?.x ?? 0),
                            ),
                            y: Math.abs(
                                Math.round(t.pageY) - (re.current?.y ?? 0),
                            ),
                        };
                    },
                    n = (n) => {
                        (e.x <= 10 && e.y <= 10
                            ? n.preventDefault()
                            : C.contains(n.target) || I(!1),
                            document.removeEventListener(`pointermove`, t),
                            (re.current = null));
                    };
                return (
                    re.current !== null &&
                        (document.addEventListener(`pointermove`, t),
                        document.addEventListener(`pointerup`, n, {
                            capture: !0,
                            once: !0,
                        })),
                    () => {
                        (document.removeEventListener(`pointermove`, t),
                            document.removeEventListener(`pointerup`, n, {
                                capture: !0,
                            }));
                    }
                );
            }
        }, [C, I, re]),
            o.useEffect(() => {
                let e = () => I(!1);
                return (
                    window.addEventListener(`blur`, e),
                    window.addEventListener(`resize`, e),
                    () => {
                        (window.removeEventListener(`blur`, e),
                            window.removeEventListener(`resize`, e));
                    }
                );
            }, [I]));
        let [L, ie] = mp((e) => {
                let t = N().filter((e) => !e.disabled),
                    n = hp(
                        t,
                        e,
                        t.find((e) => e.ref.current === document.activeElement),
                    );
                n && setTimeout(() => n.ref.current.focus());
            }),
            ae = o.useCallback(
                (e, t, n) => {
                    let r = !te.current && !n;
                    ((S.value !== void 0 && S.value === t) || r) &&
                        (k(e), r && (te.current = !0));
                },
                [S.value],
            ),
            R = o.useCallback(() => C?.focus(), [C]),
            oe = o.useCallback(
                (e, t, n) => {
                    let r = !te.current && !n;
                    ((S.value !== void 0 && S.value === t) || r) && M(e);
                },
                [S.value],
            ),
            se = r === `popper` ? Lf : Ff,
            z =
                se === Lf
                    ? {
                          side: l,
                          sideOffset: f,
                          align: p,
                          alignOffset: m,
                          arrowPadding: h,
                          collisionBoundary: g,
                          collisionPadding: _,
                          sticky: v,
                          hideWhenDetached: y,
                          avoidCollisions: b,
                      }
                    : {};
        return (0, d.jsx)(kf, {
            scope: n,
            content: C,
            viewport: T,
            onViewportChange: E,
            itemRefCallback: ae,
            selectedItem: O,
            onItemLeave: R,
            itemTextRefCallback: oe,
            focusSelectedItem: F,
            selectedItemText: A,
            position: r,
            isPositioned: P,
            searchRef: L,
            children: (0, d.jsx)(Do, {
                as: Mf,
                allowPinchZoom: !0,
                children: (0, d.jsx)(Zi, {
                    asChild: !0,
                    trapped: S.open,
                    onMountAutoFocus: (e) => {
                        e.preventDefault();
                    },
                    onUnmountAutoFocus: s(i, (e) => {
                        (S.trigger?.focus({ preventScroll: !0 }),
                            e.preventDefault());
                    }),
                    children: (0, d.jsx)(j, {
                        asChild: !0,
                        disableOutsidePointerEvents: !0,
                        onEscapeKeyDown: a,
                        onPointerDownOutside: c,
                        onFocusOutside: (e) => e.preventDefault(),
                        onDismiss: () => S.onOpenChange(!1),
                        children: (0, d.jsx)(se, {
                            role: `listbox`,
                            id: S.contentId,
                            'data-state': S.open ? `open` : `closed`,
                            dir: S.dir,
                            onContextMenu: (e) => e.preventDefault(),
                            ...x,
                            ...z,
                            onPlaced: () => ee(!0),
                            ref: D,
                            style: {
                                display: `flex`,
                                flexDirection: `column`,
                                outline: `none`,
                                ...x.style,
                            },
                            onKeyDown: s(x.onKeyDown, (e) => {
                                let t = e.ctrlKey || e.altKey || e.metaKey;
                                if (
                                    (e.key === `Tab` && e.preventDefault(),
                                    !t && e.key.length === 1 && ie(e.key),
                                    [
                                        `ArrowUp`,
                                        `ArrowDown`,
                                        `Home`,
                                        `End`,
                                    ].includes(e.key))
                                ) {
                                    let t = N()
                                        .filter((e) => !e.disabled)
                                        .map((e) => e.ref.current);
                                    if (
                                        ([`ArrowUp`, `End`].includes(e.key) &&
                                            (t = t.slice().reverse()),
                                        [`ArrowUp`, `ArrowDown`].includes(
                                            e.key,
                                        ))
                                    ) {
                                        let n = e.target,
                                            r = t.indexOf(n);
                                        t = t.slice(r + 1);
                                    }
                                    (setTimeout(() => ne(t)),
                                        e.preventDefault());
                                }
                            }),
                        }),
                    }),
                }),
            }),
        });
    });
Nf.displayName = jf;
var Pf = `SelectItemAlignedPosition`,
    Ff = o.forwardRef((e, t) => {
        let { __scopeSelect: n, onPlaced: r, ...i } = e,
            a = hf(Df, n),
            s = Af(Df, n),
            [c, l] = o.useState(null),
            [f, p] = o.useState(null),
            m = u(t, (e) => p(e)),
            h = lf(n),
            g = o.useRef(!1),
            _ = o.useRef(!0),
            {
                viewport: v,
                selectedItem: y,
                selectedItemText: b,
                focusSelectedItem: x,
            } = s,
            S = o.useCallback(() => {
                if (a.trigger && a.valueNode && c && f && v && y && b) {
                    let e = a.trigger.getBoundingClientRect(),
                        t = f.getBoundingClientRect(),
                        n = a.valueNode.getBoundingClientRect(),
                        i = b.getBoundingClientRect();
                    if (a.dir !== `rtl`) {
                        let r = i.left - t.left,
                            a = n.left - r,
                            o = e.left - a,
                            s = e.width + o,
                            l = Math.max(s, t.width),
                            u = window.innerWidth - Q,
                            d = Yd(a, [Q, Math.max(Q, u - l)]);
                        ((c.style.minWidth = s + `px`),
                            (c.style.left = d + `px`));
                    } else {
                        let r = t.right - i.right,
                            a = window.innerWidth - n.right - r,
                            o = window.innerWidth - e.right - a,
                            s = e.width + o,
                            l = Math.max(s, t.width),
                            u = window.innerWidth - Q,
                            d = Yd(a, [Q, Math.max(Q, u - l)]);
                        ((c.style.minWidth = s + `px`),
                            (c.style.right = d + `px`));
                    }
                    let o = h(),
                        s = window.innerHeight - Q * 2,
                        l = v.scrollHeight,
                        u = window.getComputedStyle(f),
                        d = parseInt(u.borderTopWidth, 10),
                        p = parseInt(u.paddingTop, 10),
                        m = parseInt(u.borderBottomWidth, 10),
                        _ = parseInt(u.paddingBottom, 10),
                        x = d + p + l + _ + m,
                        S = Math.min(y.offsetHeight * 5, x),
                        C = window.getComputedStyle(v),
                        w = parseInt(C.paddingTop, 10),
                        T = parseInt(C.paddingBottom, 10),
                        E = e.top + e.height / 2 - Q,
                        D = s - E,
                        O = y.offsetHeight / 2,
                        k = y.offsetTop + O,
                        A = d + p + k,
                        j = x - A;
                    if (A <= E) {
                        let e =
                            o.length > 0 && y === o[o.length - 1].ref.current;
                        c.style.bottom = `0px`;
                        let t = f.clientHeight - v.offsetTop - v.offsetHeight,
                            n = A + Math.max(D, O + (e ? T : 0) + t + m);
                        c.style.height = n + `px`;
                    } else {
                        let e = o.length > 0 && y === o[0].ref.current;
                        c.style.top = `0px`;
                        let t =
                            Math.max(E, d + v.offsetTop + (e ? w : 0) + O) + j;
                        ((c.style.height = t + `px`),
                            (v.scrollTop = A - E + v.offsetTop));
                    }
                    ((c.style.margin = `${Q}px 0`),
                        (c.style.minHeight = S + `px`),
                        (c.style.maxHeight = s + `px`),
                        r?.(),
                        requestAnimationFrame(() => (g.current = !0)));
                }
            }, [h, a.trigger, a.valueNode, c, f, v, y, b, a.dir, r]);
        F(() => S(), [S]);
        let [C, w] = o.useState();
        return (
            F(() => {
                f && w(window.getComputedStyle(f).zIndex);
            }, [f]),
            (0, d.jsx)(Rf, {
                scope: n,
                contentWrapper: c,
                shouldExpandOnScrollRef: g,
                onScrollButtonChange: o.useCallback(
                    (e) => {
                        e && _.current === !0 && (S(), x?.(), (_.current = !1));
                    },
                    [S, x],
                ),
                children: (0, d.jsx)(`div`, {
                    ref: l,
                    style: {
                        display: `flex`,
                        flexDirection: `column`,
                        position: `fixed`,
                        zIndex: C,
                    },
                    children: (0, d.jsx)(Z.div, {
                        ...i,
                        ref: m,
                        style: {
                            boxSizing: `border-box`,
                            maxHeight: `100%`,
                            ...i.style,
                        },
                    }),
                }),
            })
        );
    });
Ff.displayName = Pf;
var If = `SelectPopperPosition`,
    Lf = o.forwardRef((e, t) => {
        let {
                __scopeSelect: n,
                align: r = `start`,
                collisionPadding: i = Q,
                ...a
            } = e,
            o = pf(n);
        return (0, d.jsx)(Xn, {
            ...o,
            ...a,
            ref: t,
            align: r,
            collisionPadding: i,
            style: {
                boxSizing: `border-box`,
                ...a.style,
                '--radix-select-content-transform-origin': `var(--radix-popper-transform-origin)`,
                '--radix-select-content-available-width': `var(--radix-popper-available-width)`,
                '--radix-select-content-available-height': `var(--radix-popper-available-height)`,
                '--radix-select-trigger-width': `var(--radix-popper-anchor-width)`,
                '--radix-select-trigger-height': `var(--radix-popper-anchor-height)`,
            },
        });
    });
Lf.displayName = If;
var [Rf, zf] = df(Df, {}),
    Bf = `SelectViewport`,
    Vf = o.forwardRef((e, t) => {
        let { __scopeSelect: n, nonce: r, ...i } = e,
            a = Af(Bf, n),
            c = zf(Bf, n),
            l = u(t, a.onViewportChange),
            f = o.useRef(0);
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)(`style`, {
                    dangerouslySetInnerHTML: {
                        __html: `[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}`,
                    },
                    nonce: r,
                }),
                (0, d.jsx)(cf.Slot, {
                    scope: n,
                    children: (0, d.jsx)(Z.div, {
                        'data-radix-select-viewport': ``,
                        role: `presentation`,
                        ...i,
                        ref: l,
                        style: {
                            position: `relative`,
                            flex: 1,
                            overflow: `hidden auto`,
                            ...i.style,
                        },
                        onScroll: s(i.onScroll, (e) => {
                            let t = e.currentTarget,
                                {
                                    contentWrapper: n,
                                    shouldExpandOnScrollRef: r,
                                } = c;
                            if (r?.current && n) {
                                let e = Math.abs(f.current - t.scrollTop);
                                if (e > 0) {
                                    let r = window.innerHeight - Q * 2,
                                        i = parseFloat(n.style.minHeight),
                                        a = parseFloat(n.style.height),
                                        o = Math.max(i, a);
                                    if (o < r) {
                                        let i = o + e,
                                            a = Math.min(r, i),
                                            s = i - a;
                                        ((n.style.height = a + `px`),
                                            n.style.bottom === `0px` &&
                                                ((t.scrollTop = s > 0 ? s : 0),
                                                (n.style.justifyContent = `flex-end`)));
                                    }
                                }
                            }
                            f.current = t.scrollTop;
                        }),
                    }),
                }),
            ],
        });
    });
Vf.displayName = Bf;
var Hf = `SelectGroup`,
    [Uf, Wf] = df(Hf),
    Gf = o.forwardRef((e, t) => {
        let { __scopeSelect: n, ...r } = e,
            i = L();
        return (0, d.jsx)(Uf, {
            scope: n,
            id: i,
            children: (0, d.jsx)(Z.div, {
                role: `group`,
                'aria-labelledby': i,
                ...r,
                ref: t,
            }),
        });
    });
Gf.displayName = Hf;
var Kf = `SelectLabel`,
    qf = o.forwardRef((e, t) => {
        let { __scopeSelect: n, ...r } = e,
            i = Wf(Kf, n);
        return (0, d.jsx)(Z.div, { id: i.id, ...r, ref: t });
    });
qf.displayName = Kf;
var Jf = `SelectItem`,
    [Yf, Xf] = df(Jf),
    Zf = o.forwardRef((e, t) => {
        let {
                __scopeSelect: n,
                value: r,
                disabled: i = !1,
                textValue: a,
                ...c
            } = e,
            l = hf(Jf, n),
            f = Af(Jf, n),
            p = l.value === r,
            [m, h] = o.useState(a ?? ``),
            [g, _] = o.useState(!1),
            v = u(t, (e) => f.itemRefCallback?.(e, r, i)),
            y = L(),
            b = o.useRef(`touch`),
            x = () => {
                i || (l.onValueChange(r), l.onOpenChange(!1));
            };
        if (r === ``)
            throw Error(
                `A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.`,
            );
        return (0, d.jsx)(Yf, {
            scope: n,
            value: r,
            disabled: i,
            textId: y,
            isSelected: p,
            onItemTextChange: o.useCallback((e) => {
                h((t) => t || (e?.textContent ?? ``).trim());
            }, []),
            children: (0, d.jsx)(cf.ItemSlot, {
                scope: n,
                value: r,
                disabled: i,
                textValue: m,
                children: (0, d.jsx)(Z.div, {
                    role: `option`,
                    'aria-labelledby': y,
                    'data-highlighted': g ? `` : void 0,
                    'aria-selected': p && g,
                    'data-state': p ? `checked` : `unchecked`,
                    'aria-disabled': i || void 0,
                    'data-disabled': i ? `` : void 0,
                    tabIndex: i ? void 0 : -1,
                    ...c,
                    ref: v,
                    onFocus: s(c.onFocus, () => _(!0)),
                    onBlur: s(c.onBlur, () => _(!1)),
                    onClick: s(c.onClick, () => {
                        b.current !== `mouse` && x();
                    }),
                    onPointerUp: s(c.onPointerUp, () => {
                        b.current === `mouse` && x();
                    }),
                    onPointerDown: s(c.onPointerDown, (e) => {
                        b.current = e.pointerType;
                    }),
                    onPointerMove: s(c.onPointerMove, (e) => {
                        ((b.current = e.pointerType),
                            i
                                ? f.onItemLeave?.()
                                : b.current === `mouse` &&
                                  e.currentTarget.focus({ preventScroll: !0 }));
                    }),
                    onPointerLeave: s(c.onPointerLeave, (e) => {
                        e.currentTarget === document.activeElement &&
                            f.onItemLeave?.();
                    }),
                    onKeyDown: s(c.onKeyDown, (e) => {
                        (f.searchRef?.current !== `` && e.key === ` `) ||
                            (of.includes(e.key) && x(),
                            e.key === ` ` && e.preventDefault());
                    }),
                }),
            }),
        });
    });
Zf.displayName = Jf;
var Qf = `SelectItemText`,
    $f = o.forwardRef((e, t) => {
        let { __scopeSelect: n, className: r, style: i, ...a } = e,
            s = hf(Qf, n),
            c = Af(Qf, n),
            l = Xf(Qf, n),
            f = _f(Qf, n),
            [p, h] = o.useState(null),
            g = u(
                t,
                (e) => h(e),
                l.onItemTextChange,
                (e) => c.itemTextRefCallback?.(e, l.value, l.disabled),
            ),
            _ = p?.textContent,
            v = o.useMemo(
                () =>
                    (0, d.jsx)(
                        `option`,
                        { value: l.value, disabled: l.disabled, children: _ },
                        l.value,
                    ),
                [l.disabled, l.value, _],
            ),
            { onNativeOptionAdd: y, onNativeOptionRemove: b } = f;
        return (
            F(() => (y(v), () => b(v)), [y, b, v]),
            (0, d.jsxs)(d.Fragment, {
                children: [
                    (0, d.jsx)(Z.span, { id: l.textId, ...a, ref: g }),
                    l.isSelected && s.valueNode && !s.valueNodeHasChildren
                        ? m.createPortal(a.children, s.valueNode)
                        : null,
                ],
            })
        );
    });
$f.displayName = Qf;
var ep = `SelectItemIndicator`,
    tp = o.forwardRef((e, t) => {
        let { __scopeSelect: n, ...r } = e;
        return Xf(ep, n).isSelected
            ? (0, d.jsx)(Z.span, { 'aria-hidden': !0, ...r, ref: t })
            : null;
    });
tp.displayName = ep;
var np = `SelectScrollUpButton`,
    rp = o.forwardRef((e, t) => {
        let n = Af(np, e.__scopeSelect),
            r = zf(np, e.__scopeSelect),
            [i, a] = o.useState(!1),
            s = u(t, r.onScrollButtonChange);
        return (
            F(() => {
                if (n.viewport && n.isPositioned) {
                    let e = function () {
                            a(t.scrollTop > 0);
                        },
                        t = n.viewport;
                    return (
                        e(),
                        t.addEventListener(`scroll`, e),
                        () => t.removeEventListener(`scroll`, e)
                    );
                }
            }, [n.viewport, n.isPositioned]),
            i
                ? (0, d.jsx)(op, {
                      ...e,
                      ref: s,
                      onAutoScroll: () => {
                          let { viewport: e, selectedItem: t } = n;
                          e && t && (e.scrollTop -= t.offsetHeight);
                      },
                  })
                : null
        );
    });
rp.displayName = np;
var ip = `SelectScrollDownButton`,
    ap = o.forwardRef((e, t) => {
        let n = Af(ip, e.__scopeSelect),
            r = zf(ip, e.__scopeSelect),
            [i, a] = o.useState(!1),
            s = u(t, r.onScrollButtonChange);
        return (
            F(() => {
                if (n.viewport && n.isPositioned) {
                    let e = function () {
                            let e = t.scrollHeight - t.clientHeight;
                            a(Math.ceil(t.scrollTop) < e);
                        },
                        t = n.viewport;
                    return (
                        e(),
                        t.addEventListener(`scroll`, e),
                        () => t.removeEventListener(`scroll`, e)
                    );
                }
            }, [n.viewport, n.isPositioned]),
            i
                ? (0, d.jsx)(op, {
                      ...e,
                      ref: s,
                      onAutoScroll: () => {
                          let { viewport: e, selectedItem: t } = n;
                          e && t && (e.scrollTop += t.offsetHeight);
                      },
                  })
                : null
        );
    });
ap.displayName = ip;
var op = o.forwardRef((e, t) => {
        let { __scopeSelect: n, onAutoScroll: r, ...i } = e,
            a = Af(`SelectScrollButton`, n),
            c = o.useRef(null),
            l = lf(n),
            u = o.useCallback(() => {
                c.current !== null &&
                    (window.clearInterval(c.current), (c.current = null));
            }, []);
        return (
            o.useEffect(() => () => u(), [u]),
            F(() => {
                l()
                    .find((e) => e.ref.current === document.activeElement)
                    ?.ref.current?.scrollIntoView({ block: `nearest` });
            }, [l]),
            (0, d.jsx)(Z.div, {
                'aria-hidden': !0,
                ...i,
                ref: t,
                style: { flexShrink: 0, ...i.style },
                onPointerDown: s(i.onPointerDown, () => {
                    c.current === null &&
                        (c.current = window.setInterval(r, 50));
                }),
                onPointerMove: s(i.onPointerMove, () => {
                    (a.onItemLeave?.(),
                        c.current === null &&
                            (c.current = window.setInterval(r, 50)));
                }),
                onPointerLeave: s(i.onPointerLeave, () => {
                    u();
                }),
            })
        );
    }),
    sp = `SelectSeparator`,
    cp = o.forwardRef((e, t) => {
        let { __scopeSelect: n, ...r } = e;
        return (0, d.jsx)(Z.div, { 'aria-hidden': !0, ...r, ref: t });
    });
cp.displayName = sp;
var lp = `SelectArrow`,
    up = o.forwardRef((e, t) => {
        let { __scopeSelect: n, ...r } = e,
            i = pf(n),
            a = hf(lp, n),
            o = Af(lp, n);
        return a.open && o.position === `popper`
            ? (0, d.jsx)(Zn, { ...i, ...r, ref: t })
            : null;
    });
up.displayName = lp;
var dp = `SelectBubbleInput`,
    fp = o.forwardRef(({ __scopeSelect: e, value: t, ...n }, r) => {
        let i = o.useRef(null),
            a = u(r, i),
            s = Td(t);
        return (
            o.useEffect(() => {
                let e = i.current;
                if (!e) return;
                let n = window.HTMLSelectElement.prototype,
                    r = Object.getOwnPropertyDescriptor(n, `value`).set;
                if (s !== t && r) {
                    let n = new Event(`change`, { bubbles: !0 });
                    (r.call(e, t), e.dispatchEvent(n));
                }
            }, [s, t]),
            (0, d.jsx)(Z.select, {
                ...n,
                style: { ...kr, ...n.style },
                ref: a,
                defaultValue: t,
            })
        );
    });
fp.displayName = dp;
function pp(e) {
    return e === `` || e === void 0;
}
function mp(e) {
    let t = C(e),
        n = o.useRef(``),
        r = o.useRef(0),
        i = o.useCallback(
            (e) => {
                let i = n.current + e;
                (t(i),
                    (function e(t) {
                        ((n.current = t),
                            window.clearTimeout(r.current),
                            t !== `` &&
                                (r.current = window.setTimeout(
                                    () => e(``),
                                    1e3,
                                )));
                    })(i));
            },
            [t],
        ),
        a = o.useCallback(() => {
            ((n.current = ``), window.clearTimeout(r.current));
        }, []);
    return (
        o.useEffect(() => () => window.clearTimeout(r.current), []),
        [n, i, a]
    );
}
function hp(e, t, n) {
    let r = t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t,
        i = n ? e.indexOf(n) : -1,
        a = gp(e, Math.max(i, 0));
    r.length === 1 && (a = a.filter((e) => e !== n));
    let o = a.find((e) =>
        e.textValue.toLowerCase().startsWith(r.toLowerCase()),
    );
    return o === n ? void 0 : o;
}
function gp(e, t) {
    return e.map((n, r) => e[(t + r) % e.length]);
}
var _p = vf,
    vp = bf,
    yp = Sf,
    bp = wf,
    xp = Ef,
    Sp = Of,
    Cp = Vf,
    wp = Zf,
    Tp = $f,
    Ep = tp,
    Dp = rp,
    Op = ap;
function kp(e, t = []) {
    let n = [];
    function r(t, r) {
        let i = o.createContext(r),
            a = n.length;
        n = [...n, r];
        let s = (t) => {
            let { scope: n, children: r, ...s } = t,
                c = n?.[e]?.[a] || i,
                l = o.useMemo(() => s, Object.values(s));
            return (0, d.jsx)(c.Provider, { value: l, children: r });
        };
        s.displayName = t + `Provider`;
        function c(n, s) {
            let c = s?.[e]?.[a] || i,
                l = o.useContext(c);
            if (l) return l;
            if (r !== void 0) return r;
            throw Error(`\`${n}\` must be used within \`${t}\``);
        }
        return [s, c];
    }
    let i = () => {
        let t = n.map((e) => o.createContext(e));
        return function (n) {
            let r = n?.[e] || t;
            return o.useMemo(
                () => ({ [`__scope${e}`]: { ...n, [e]: r } }),
                [n, r],
            );
        };
    };
    return ((i.scopeName = e), [r, Ap(i, ...t)]);
}
function Ap(...e) {
    let t = e[0];
    if (e.length === 1) return t;
    let n = () => {
        let n = e.map((e) => ({ useScope: e(), scopeName: e.scopeName }));
        return function (e) {
            let r = n.reduce((t, { useScope: n, scopeName: r }) => {
                let i = n(e)[`__scope${r}`];
                return { ...t, ...i };
            }, {});
            return o.useMemo(() => ({ [`__scope${t.scopeName}`]: r }), [r]);
        };
    };
    return ((n.scopeName = t.scopeName), n);
}
function jp(e) {
    let t = Mp(e),
        n = o.forwardRef((e, n) => {
            let { children: r, ...i } = e,
                a = o.Children.toArray(r),
                s = a.find(Pp);
            if (s) {
                let e = s.props.children,
                    r = a.map((t) =>
                        t === s
                            ? o.Children.count(e) > 1
                                ? o.Children.only(null)
                                : o.isValidElement(e)
                                  ? e.props.children
                                  : null
                            : t,
                    );
                return (0, d.jsx)(t, {
                    ...i,
                    ref: n,
                    children: o.isValidElement(e)
                        ? o.cloneElement(e, void 0, r)
                        : null,
                });
            }
            return (0, d.jsx)(t, { ...i, ref: n, children: r });
        });
    return ((n.displayName = `${e}.Slot`), n);
}
function Mp(e) {
    let t = o.forwardRef((e, t) => {
        let { children: n, ...r } = e;
        if (o.isValidElement(n)) {
            let e = Ip(n),
                i = Fp(r, n.props);
            return (
                n.type !== o.Fragment && (i.ref = t ? l(t, e) : e),
                o.cloneElement(n, i)
            );
        }
        return o.Children.count(n) > 1 ? o.Children.only(null) : null;
    });
    return ((t.displayName = `${e}.SlotClone`), t);
}
var Np = Symbol(`radix.slottable`);
function Pp(e) {
    return (
        o.isValidElement(e) &&
        typeof e.type == `function` &&
        `__radixId` in e.type &&
        e.type.__radixId === Np
    );
}
function Fp(e, t) {
    let n = { ...t };
    for (let r in t) {
        let i = e[r],
            a = t[r];
        /^on[A-Z]/.test(r)
            ? i && a
                ? (n[r] = (...e) => {
                      let t = a(...e);
                      return (i(...e), t);
                  })
                : i && (n[r] = i)
            : r === `style`
              ? (n[r] = { ...i, ...a })
              : r === `className` && (n[r] = [i, a].filter(Boolean).join(` `));
    }
    return { ...e, ...n };
}
function Ip(e) {
    let t = Object.getOwnPropertyDescriptor(e.props, `ref`)?.get,
        n = t && `isReactWarning` in t && t.isReactWarning;
    return n
        ? e.ref
        : ((t = Object.getOwnPropertyDescriptor(e, `ref`)?.get),
          (n = t && `isReactWarning` in t && t.isReactWarning),
          n ? e.props.ref : e.props.ref || e.ref);
}
var Lp = [
    `a`,
    `button`,
    `div`,
    `form`,
    `h2`,
    `h3`,
    `img`,
    `input`,
    `label`,
    `li`,
    `nav`,
    `ol`,
    `p`,
    `select`,
    `span`,
    `svg`,
    `ul`,
].reduce((e, t) => {
    let n = jp(`Primitive.${t}`),
        r = o.forwardRef((e, r) => {
            let { asChild: i, ...a } = e,
                o = i ? n : t;
            return (
                typeof window < `u` && (window[Symbol.for(`radix-ui`)] = !0),
                (0, d.jsx)(o, { ...a, ref: r })
            );
        });
    return ((r.displayName = `Primitive.${t}`), { ...e, [t]: r });
}, {});
function Rp(e, t = []) {
    let n = [];
    function r(t, r) {
        let i = o.createContext(r),
            a = n.length;
        n = [...n, r];
        let s = (t) => {
            let { scope: n, children: r, ...s } = t,
                c = n?.[e]?.[a] || i,
                l = o.useMemo(() => s, Object.values(s));
            return (0, d.jsx)(c.Provider, { value: l, children: r });
        };
        s.displayName = t + `Provider`;
        function c(n, s) {
            let c = s?.[e]?.[a] || i,
                l = o.useContext(c);
            if (l) return l;
            if (r !== void 0) return r;
            throw Error(`\`${n}\` must be used within \`${t}\``);
        }
        return [s, c];
    }
    let i = () => {
        let t = n.map((e) => o.createContext(e));
        return function (n) {
            let r = n?.[e] || t;
            return o.useMemo(
                () => ({ [`__scope${e}`]: { ...n, [e]: r } }),
                [n, r],
            );
        };
    };
    return ((i.scopeName = e), [r, zp(i, ...t)]);
}
function zp(...e) {
    let t = e[0];
    if (e.length === 1) return t;
    let n = () => {
        let n = e.map((e) => ({ useScope: e(), scopeName: e.scopeName }));
        return function (e) {
            let r = n.reduce((t, { useScope: n, scopeName: r }) => {
                let i = n(e)[`__scope${r}`];
                return { ...t, ...i };
            }, {});
            return o.useMemo(() => ({ [`__scope${t.scopeName}`]: r }), [r]);
        };
    };
    return ((n.scopeName = t.scopeName), n);
}
function Bp(e) {
    let t = Vp(e),
        n = o.forwardRef((e, n) => {
            let { children: r, ...i } = e,
                a = o.Children.toArray(r),
                s = a.find(Up);
            if (s) {
                let e = s.props.children,
                    r = a.map((t) =>
                        t === s
                            ? o.Children.count(e) > 1
                                ? o.Children.only(null)
                                : o.isValidElement(e)
                                  ? e.props.children
                                  : null
                            : t,
                    );
                return (0, d.jsx)(t, {
                    ...i,
                    ref: n,
                    children: o.isValidElement(e)
                        ? o.cloneElement(e, void 0, r)
                        : null,
                });
            }
            return (0, d.jsx)(t, { ...i, ref: n, children: r });
        });
    return ((n.displayName = `${e}.Slot`), n);
}
function Vp(e) {
    let t = o.forwardRef((e, t) => {
        let { children: n, ...r } = e;
        if (o.isValidElement(n)) {
            let e = Gp(n),
                i = Wp(r, n.props);
            return (
                n.type !== o.Fragment && (i.ref = t ? l(t, e) : e),
                o.cloneElement(n, i)
            );
        }
        return o.Children.count(n) > 1 ? o.Children.only(null) : null;
    });
    return ((t.displayName = `${e}.SlotClone`), t);
}
var Hp = Symbol(`radix.slottable`);
function Up(e) {
    return (
        o.isValidElement(e) &&
        typeof e.type == `function` &&
        `__radixId` in e.type &&
        e.type.__radixId === Hp
    );
}
function Wp(e, t) {
    let n = { ...t };
    for (let r in t) {
        let i = e[r],
            a = t[r];
        /^on[A-Z]/.test(r)
            ? i && a
                ? (n[r] = (...e) => {
                      let t = a(...e);
                      return (i(...e), t);
                  })
                : i && (n[r] = i)
            : r === `style`
              ? (n[r] = { ...i, ...a })
              : r === `className` && (n[r] = [i, a].filter(Boolean).join(` `));
    }
    return { ...e, ...n };
}
function Gp(e) {
    let t = Object.getOwnPropertyDescriptor(e.props, `ref`)?.get,
        n = t && `isReactWarning` in t && t.isReactWarning;
    return n
        ? e.ref
        : ((t = Object.getOwnPropertyDescriptor(e, `ref`)?.get),
          (n = t && `isReactWarning` in t && t.isReactWarning),
          n ? e.props.ref : e.props.ref || e.ref);
}
var Kp = [
        `a`,
        `button`,
        `div`,
        `form`,
        `h2`,
        `h3`,
        `img`,
        `input`,
        `label`,
        `li`,
        `nav`,
        `ol`,
        `p`,
        `select`,
        `span`,
        `svg`,
        `ul`,
    ].reduce((e, t) => {
        let n = Bp(`Primitive.${t}`),
            r = o.forwardRef((e, r) => {
                let { asChild: i, ...a } = e,
                    o = i ? n : t;
                return (
                    typeof window < `u` &&
                        (window[Symbol.for(`radix-ui`)] = !0),
                    (0, d.jsx)(o, { ...a, ref: r })
                );
            });
        return ((r.displayName = `Primitive.${t}`), { ...e, [t]: r });
    }, {}),
    qp = `Collapsible`,
    [Jp, Yp] = Rp(qp),
    [Xp, Zp] = Jp(qp),
    Qp = o.forwardRef((e, t) => {
        let {
                __scopeCollapsible: n,
                open: r,
                defaultOpen: i,
                disabled: a,
                onOpenChange: s,
                ...c
            } = e,
            [l, u] = K({
                prop: r,
                defaultProp: i ?? !1,
                onChange: s,
                caller: qp,
            });
        return (0, d.jsx)(Xp, {
            scope: n,
            disabled: a,
            contentId: L(),
            open: l,
            onOpenToggle: o.useCallback(() => u((e) => !e), [u]),
            children: (0, d.jsx)(Kp.div, {
                'data-state': im(l),
                'data-disabled': a ? `` : void 0,
                ...c,
                ref: t,
            }),
        });
    });
Qp.displayName = qp;
var $p = `CollapsibleTrigger`,
    em = o.forwardRef((e, t) => {
        let { __scopeCollapsible: n, ...r } = e,
            i = Zp($p, n);
        return (0, d.jsx)(Kp.button, {
            type: `button`,
            'aria-controls': i.contentId,
            'aria-expanded': i.open || !1,
            'data-state': im(i.open),
            'data-disabled': i.disabled ? `` : void 0,
            disabled: i.disabled,
            ...r,
            ref: t,
            onClick: s(e.onClick, i.onOpenToggle),
        });
    });
em.displayName = $p;
var tm = `CollapsibleContent`,
    nm = o.forwardRef((e, t) => {
        let { forceMount: n, ...r } = e,
            i = Zp(tm, e.__scopeCollapsible);
        return (0, d.jsx)(G, {
            present: n || i.open,
            children: ({ present: e }) =>
                (0, d.jsx)(rm, { ...r, ref: t, present: e }),
        });
    });
nm.displayName = tm;
var rm = o.forwardRef((e, t) => {
    let { __scopeCollapsible: n, present: r, children: i, ...a } = e,
        s = Zp(tm, n),
        [c, l] = o.useState(r),
        f = o.useRef(null),
        p = u(t, f),
        m = o.useRef(0),
        h = m.current,
        g = o.useRef(0),
        _ = g.current,
        v = s.open || c,
        y = o.useRef(v),
        b = o.useRef(void 0);
    return (
        o.useEffect(() => {
            let e = requestAnimationFrame(() => (y.current = !1));
            return () => cancelAnimationFrame(e);
        }, []),
        F(() => {
            let e = f.current;
            if (e) {
                ((b.current = b.current || {
                    transitionDuration: e.style.transitionDuration,
                    animationName: e.style.animationName,
                }),
                    (e.style.transitionDuration = `0s`),
                    (e.style.animationName = `none`));
                let t = e.getBoundingClientRect();
                ((m.current = t.height),
                    (g.current = t.width),
                    y.current ||
                        ((e.style.transitionDuration =
                            b.current.transitionDuration),
                        (e.style.animationName = b.current.animationName)),
                    l(r));
            }
        }, [s.open, r]),
        (0, d.jsx)(Kp.div, {
            'data-state': im(s.open),
            'data-disabled': s.disabled ? `` : void 0,
            id: s.contentId,
            hidden: !v,
            ...a,
            ref: p,
            style: {
                '--radix-collapsible-content-height': h ? `${h}px` : void 0,
                '--radix-collapsible-content-width': _ ? `${_}px` : void 0,
                ...e.style,
            },
            children: v && i,
        })
    );
});
function im(e) {
    return e ? `open` : `closed`;
}
var am = Qp,
    om = em,
    sm = nm,
    $ = `Accordion`,
    cm = [`Home`, `End`, `ArrowDown`, `ArrowUp`, `ArrowLeft`, `ArrowRight`],
    [lm, um, dm] = Vs($),
    [fm, pm] = kp($, [dm, Yp]),
    mm = Yp(),
    hm = o.forwardRef((e, t) => {
        let { type: n, ...r } = e,
            i = r,
            a = r;
        return (0, d.jsx)(lm.Provider, {
            scope: e.__scopeAccordion,
            children:
                n === `multiple`
                    ? (0, d.jsx)(xm, { ...a, ref: t })
                    : (0, d.jsx)(bm, { ...i, ref: t }),
        });
    });
hm.displayName = $;
var [gm, _m] = fm($),
    [vm, ym] = fm($, { collapsible: !1 }),
    bm = o.forwardRef((e, t) => {
        let {
                value: n,
                defaultValue: r,
                onValueChange: i = () => {},
                collapsible: a = !1,
                ...s
            } = e,
            [c, l] = K({
                prop: n,
                defaultProp: r ?? ``,
                onChange: i,
                caller: $,
            });
        return (0, d.jsx)(gm, {
            scope: e.__scopeAccordion,
            value: o.useMemo(() => (c ? [c] : []), [c]),
            onItemOpen: l,
            onItemClose: o.useCallback(() => a && l(``), [a, l]),
            children: (0, d.jsx)(vm, {
                scope: e.__scopeAccordion,
                collapsible: a,
                children: (0, d.jsx)(wm, { ...s, ref: t }),
            }),
        });
    }),
    xm = o.forwardRef((e, t) => {
        let {
                value: n,
                defaultValue: r,
                onValueChange: i = () => {},
                ...a
            } = e,
            [s, c] = K({
                prop: n,
                defaultProp: r ?? [],
                onChange: i,
                caller: $,
            }),
            l = o.useCallback((e) => c((t = []) => [...t, e]), [c]),
            u = o.useCallback(
                (e) => c((t = []) => t.filter((t) => t !== e)),
                [c],
            );
        return (0, d.jsx)(gm, {
            scope: e.__scopeAccordion,
            value: s,
            onItemOpen: l,
            onItemClose: u,
            children: (0, d.jsx)(vm, {
                scope: e.__scopeAccordion,
                collapsible: !0,
                children: (0, d.jsx)(wm, { ...a, ref: t }),
            }),
        });
    }),
    [Sm, Cm] = fm($),
    wm = o.forwardRef((e, t) => {
        let {
                __scopeAccordion: n,
                disabled: r,
                dir: i,
                orientation: a = `vertical`,
                ...c
            } = e,
            l = u(o.useRef(null), t),
            f = um(n),
            p = Gs(i) === `ltr`,
            m = s(e.onKeyDown, (e) => {
                if (!cm.includes(e.key)) return;
                let t = e.target,
                    n = f().filter((e) => !e.ref.current?.disabled),
                    r = n.findIndex((e) => e.ref.current === t),
                    i = n.length;
                if (r === -1) return;
                e.preventDefault();
                let o = r,
                    s = i - 1,
                    c = () => {
                        ((o = r + 1), o > s && (o = 0));
                    },
                    l = () => {
                        ((o = r - 1), o < 0 && (o = s));
                    };
                switch (e.key) {
                    case `Home`:
                        o = 0;
                        break;
                    case `End`:
                        o = s;
                        break;
                    case `ArrowRight`:
                        a === `horizontal` && (p ? c() : l());
                        break;
                    case `ArrowDown`:
                        a === `vertical` && c();
                        break;
                    case `ArrowLeft`:
                        a === `horizontal` && (p ? l() : c());
                        break;
                    case `ArrowUp`:
                        a === `vertical` && l();
                        break;
                }
                n[o % i].ref.current?.focus();
            });
        return (0, d.jsx)(Sm, {
            scope: n,
            disabled: r,
            direction: i,
            orientation: a,
            children: (0, d.jsx)(lm.Slot, {
                scope: n,
                children: (0, d.jsx)(Lp.div, {
                    ...c,
                    'data-orientation': a,
                    ref: l,
                    onKeyDown: r ? void 0 : m,
                }),
            }),
        });
    }),
    Tm = `AccordionItem`,
    [Em, Dm] = fm(Tm),
    Om = o.forwardRef((e, t) => {
        let { __scopeAccordion: n, value: r, ...i } = e,
            a = Cm(Tm, n),
            o = _m(Tm, n),
            s = mm(n),
            c = L(),
            l = (r && o.value.includes(r)) || !1,
            u = a.disabled || e.disabled;
        return (0, d.jsx)(Em, {
            scope: n,
            open: l,
            disabled: u,
            triggerId: c,
            children: (0, d.jsx)(am, {
                'data-orientation': a.orientation,
                'data-state': Fm(l),
                ...s,
                ...i,
                ref: t,
                disabled: u,
                open: l,
                onOpenChange: (e) => {
                    e ? o.onItemOpen(r) : o.onItemClose(r);
                },
            }),
        });
    });
Om.displayName = Tm;
var km = `AccordionHeader`,
    Am = o.forwardRef((e, t) => {
        let { __scopeAccordion: n, ...r } = e,
            i = Cm($, n),
            a = Dm(km, n);
        return (0, d.jsx)(Lp.h3, {
            'data-orientation': i.orientation,
            'data-state': Fm(a.open),
            'data-disabled': a.disabled ? `` : void 0,
            ...r,
            ref: t,
        });
    });
Am.displayName = km;
var jm = `AccordionTrigger`,
    Mm = o.forwardRef((e, t) => {
        let { __scopeAccordion: n, ...r } = e,
            i = Cm($, n),
            a = Dm(jm, n),
            o = ym(jm, n),
            s = mm(n);
        return (0, d.jsx)(lm.ItemSlot, {
            scope: n,
            children: (0, d.jsx)(om, {
                'aria-disabled': (a.open && !o.collapsible) || void 0,
                'data-orientation': i.orientation,
                id: a.triggerId,
                ...s,
                ...r,
                ref: t,
            }),
        });
    });
Mm.displayName = jm;
var Nm = `AccordionContent`,
    Pm = o.forwardRef((e, t) => {
        let { __scopeAccordion: n, ...r } = e,
            i = Cm($, n),
            a = Dm(Nm, n),
            o = mm(n);
        return (0, d.jsx)(sm, {
            role: `region`,
            'aria-labelledby': a.triggerId,
            'data-orientation': i.orientation,
            ...o,
            ...r,
            ref: t,
            style: {
                '--radix-accordion-content-height': `var(--radix-collapsible-content-height)`,
                '--radix-accordion-content-width': `var(--radix-collapsible-content-width)`,
                ...e.style,
            },
        });
    });
Pm.displayName = Nm;
function Fm(e) {
    return e ? `open` : `closed`;
}
var Im = hm,
    Lm = Om,
    Rm = Am,
    zm = Mm,
    Bm = Pm;
function Vm(e, t = []) {
    let n = [];
    function r(t, r) {
        let i = o.createContext(r),
            a = n.length;
        n = [...n, r];
        let s = (t) => {
            let { scope: n, children: r, ...s } = t,
                c = n?.[e]?.[a] || i,
                l = o.useMemo(() => s, Object.values(s));
            return (0, d.jsx)(c.Provider, { value: l, children: r });
        };
        s.displayName = t + `Provider`;
        function c(n, s) {
            let c = s?.[e]?.[a] || i,
                l = o.useContext(c);
            if (l) return l;
            if (r !== void 0) return r;
            throw Error(`\`${n}\` must be used within \`${t}\``);
        }
        return [s, c];
    }
    let i = () => {
        let t = n.map((e) => o.createContext(e));
        return function (n) {
            let r = n?.[e] || t;
            return o.useMemo(
                () => ({ [`__scope${e}`]: { ...n, [e]: r } }),
                [n, r],
            );
        };
    };
    return ((i.scopeName = e), [r, Hm(i, ...t)]);
}
function Hm(...e) {
    let t = e[0];
    if (e.length === 1) return t;
    let n = () => {
        let n = e.map((e) => ({ useScope: e(), scopeName: e.scopeName }));
        return function (e) {
            let r = n.reduce((t, { useScope: n, scopeName: r }) => {
                let i = n(e)[`__scope${r}`];
                return { ...t, ...i };
            }, {});
            return o.useMemo(() => ({ [`__scope${t.scopeName}`]: r }), [r]);
        };
    };
    return ((n.scopeName = t.scopeName), n);
}
function Um(e) {
    let t = Wm(e),
        n = o.forwardRef((e, n) => {
            let { children: r, ...i } = e,
                a = o.Children.toArray(r),
                s = a.find(Km);
            if (s) {
                let e = s.props.children,
                    r = a.map((t) =>
                        t === s
                            ? o.Children.count(e) > 1
                                ? o.Children.only(null)
                                : o.isValidElement(e)
                                  ? e.props.children
                                  : null
                            : t,
                    );
                return (0, d.jsx)(t, {
                    ...i,
                    ref: n,
                    children: o.isValidElement(e)
                        ? o.cloneElement(e, void 0, r)
                        : null,
                });
            }
            return (0, d.jsx)(t, { ...i, ref: n, children: r });
        });
    return ((n.displayName = `${e}.Slot`), n);
}
function Wm(e) {
    let t = o.forwardRef((e, t) => {
        let { children: n, ...r } = e;
        if (o.isValidElement(n)) {
            let e = Jm(n),
                i = qm(r, n.props);
            return (
                n.type !== o.Fragment && (i.ref = t ? l(t, e) : e),
                o.cloneElement(n, i)
            );
        }
        return o.Children.count(n) > 1 ? o.Children.only(null) : null;
    });
    return ((t.displayName = `${e}.SlotClone`), t);
}
var Gm = Symbol(`radix.slottable`);
function Km(e) {
    return (
        o.isValidElement(e) &&
        typeof e.type == `function` &&
        `__radixId` in e.type &&
        e.type.__radixId === Gm
    );
}
function qm(e, t) {
    let n = { ...t };
    for (let r in t) {
        let i = e[r],
            a = t[r];
        /^on[A-Z]/.test(r)
            ? i && a
                ? (n[r] = (...e) => {
                      let t = a(...e);
                      return (i(...e), t);
                  })
                : i && (n[r] = i)
            : r === `style`
              ? (n[r] = { ...i, ...a })
              : r === `className` && (n[r] = [i, a].filter(Boolean).join(` `));
    }
    return { ...e, ...n };
}
function Jm(e) {
    let t = Object.getOwnPropertyDescriptor(e.props, `ref`)?.get,
        n = t && `isReactWarning` in t && t.isReactWarning;
    return n
        ? e.ref
        : ((t = Object.getOwnPropertyDescriptor(e, `ref`)?.get),
          (n = t && `isReactWarning` in t && t.isReactWarning),
          n ? e.props.ref : e.props.ref || e.ref);
}
var Ym = [
        `a`,
        `button`,
        `div`,
        `form`,
        `h2`,
        `h3`,
        `img`,
        `input`,
        `label`,
        `li`,
        `nav`,
        `ol`,
        `p`,
        `select`,
        `span`,
        `svg`,
        `ul`,
    ].reduce((e, t) => {
        let n = Um(`Primitive.${t}`),
            r = o.forwardRef((e, r) => {
                let { asChild: i, ...a } = e,
                    o = i ? n : t;
                return (
                    typeof window < `u` &&
                        (window[Symbol.for(`radix-ui`)] = !0),
                    (0, d.jsx)(o, { ...a, ref: r })
                );
            });
        return ((r.displayName = `Primitive.${t}`), { ...e, [t]: r });
    }, {}),
    Xm = `Popover`,
    [Zm, Qm] = Vm(Xm, [Mn]),
    $m = Mn(),
    [eh, th] = Zm(Xm),
    nh = (e) => {
        let {
                __scopePopover: t,
                children: n,
                open: r,
                defaultOpen: i,
                onOpenChange: a,
                modal: s = !1,
            } = e,
            c = $m(t),
            l = o.useRef(null),
            [u, f] = o.useState(!1),
            [p, m] = K({
                prop: r,
                defaultProp: i ?? !1,
                onChange: a,
                caller: Xm,
            });
        return (0, d.jsx)(Jn, {
            ...c,
            children: (0, d.jsx)(eh, {
                scope: t,
                contentId: L(),
                triggerRef: l,
                open: p,
                onOpenChange: m,
                onOpenToggle: o.useCallback(() => m((e) => !e), [m]),
                hasCustomAnchor: u,
                onCustomAnchorAdd: o.useCallback(() => f(!0), []),
                onCustomAnchorRemove: o.useCallback(() => f(!1), []),
                modal: s,
                children: n,
            }),
        });
    };
nh.displayName = Xm;
var rh = `PopoverAnchor`,
    ih = o.forwardRef((e, t) => {
        let { __scopePopover: n, ...r } = e,
            i = th(rh, n),
            a = $m(n),
            { onCustomAnchorAdd: s, onCustomAnchorRemove: c } = i;
        return (
            o.useEffect(() => (s(), () => c()), [s, c]),
            (0, d.jsx)(Yn, { ...a, ...r, ref: t })
        );
    });
ih.displayName = rh;
var ah = `PopoverTrigger`,
    oh = o.forwardRef((e, t) => {
        let { __scopePopover: n, ...r } = e,
            i = th(ah, n),
            a = $m(n),
            o = u(t, i.triggerRef),
            c = (0, d.jsx)(Ym.button, {
                type: `button`,
                'aria-haspopup': `dialog`,
                'aria-expanded': i.open,
                'aria-controls': i.contentId,
                'data-state': xh(i.open),
                ...r,
                ref: o,
                onClick: s(e.onClick, i.onOpenToggle),
            });
        return i.hasCustomAnchor
            ? c
            : (0, d.jsx)(Yn, { asChild: !0, ...a, children: c });
    });
oh.displayName = ah;
var sh = `PopoverPortal`,
    [ch, lh] = Zm(sh, { forceMount: void 0 }),
    uh = (e) => {
        let { __scopePopover: t, forceMount: n, children: r, container: i } = e,
            a = th(sh, t);
        return (0, d.jsx)(ch, {
            scope: t,
            forceMount: n,
            children: (0, d.jsx)(G, {
                present: n || a.open,
                children: (0, d.jsx)(or, {
                    asChild: !0,
                    container: i,
                    children: r,
                }),
            }),
        });
    };
uh.displayName = sh;
var dh = `PopoverContent`,
    fh = o.forwardRef((e, t) => {
        let n = lh(dh, e.__scopePopover),
            { forceMount: r = n.forceMount, ...i } = e,
            a = th(dh, e.__scopePopover);
        return (0, d.jsx)(G, {
            present: r || a.open,
            children: a.modal
                ? (0, d.jsx)(mh, { ...i, ref: t })
                : (0, d.jsx)(hh, { ...i, ref: t }),
        });
    });
fh.displayName = dh;
var ph = Um(`PopoverContent.RemoveScroll`),
    mh = o.forwardRef((e, t) => {
        let n = th(dh, e.__scopePopover),
            r = o.useRef(null),
            i = u(t, r),
            a = o.useRef(!1);
        return (
            o.useEffect(() => {
                let e = r.current;
                if (e) return Io(e);
            }, []),
            (0, d.jsx)(Do, {
                as: ph,
                allowPinchZoom: !0,
                children: (0, d.jsx)(gh, {
                    ...e,
                    ref: i,
                    trapFocus: n.open,
                    disableOutsidePointerEvents: !0,
                    onCloseAutoFocus: s(e.onCloseAutoFocus, (e) => {
                        (e.preventDefault(),
                            a.current || n.triggerRef.current?.focus());
                    }),
                    onPointerDownOutside: s(
                        e.onPointerDownOutside,
                        (e) => {
                            let t = e.detail.originalEvent,
                                n = t.button === 0 && t.ctrlKey === !0;
                            a.current = t.button === 2 || n;
                        },
                        { checkForDefaultPrevented: !1 },
                    ),
                    onFocusOutside: s(
                        e.onFocusOutside,
                        (e) => e.preventDefault(),
                        { checkForDefaultPrevented: !1 },
                    ),
                }),
            })
        );
    }),
    hh = o.forwardRef((e, t) => {
        let n = th(dh, e.__scopePopover),
            r = o.useRef(!1),
            i = o.useRef(!1);
        return (0, d.jsx)(gh, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: (t) => {
                (e.onCloseAutoFocus?.(t),
                    t.defaultPrevented ||
                        (r.current || n.triggerRef.current?.focus(),
                        t.preventDefault()),
                    (r.current = !1),
                    (i.current = !1));
            },
            onInteractOutside: (t) => {
                (e.onInteractOutside?.(t),
                    t.defaultPrevented ||
                        ((r.current = !0),
                        t.detail.originalEvent.type === `pointerdown` &&
                            (i.current = !0)));
                let a = t.target;
                (n.triggerRef.current?.contains(a) && t.preventDefault(),
                    t.detail.originalEvent.type === `focusin` &&
                        i.current &&
                        t.preventDefault());
            },
        });
    }),
    gh = o.forwardRef((e, t) => {
        let {
                __scopePopover: n,
                trapFocus: r,
                onOpenAutoFocus: i,
                onCloseAutoFocus: a,
                disableOutsidePointerEvents: o,
                onEscapeKeyDown: s,
                onPointerDownOutside: c,
                onFocusOutside: l,
                onInteractOutside: u,
                ...f
            } = e,
            p = th(dh, n),
            m = $m(n);
        return (
            _a(),
            (0, d.jsx)(Zi, {
                asChild: !0,
                loop: !0,
                trapped: r,
                onMountAutoFocus: i,
                onUnmountAutoFocus: a,
                children: (0, d.jsx)(j, {
                    asChild: !0,
                    disableOutsidePointerEvents: o,
                    onInteractOutside: u,
                    onEscapeKeyDown: s,
                    onPointerDownOutside: c,
                    onFocusOutside: l,
                    onDismiss: () => p.onOpenChange(!1),
                    children: (0, d.jsx)(Xn, {
                        'data-state': xh(p.open),
                        role: `dialog`,
                        id: p.contentId,
                        ...m,
                        ...f,
                        ref: t,
                        style: {
                            ...f.style,
                            '--radix-popover-content-transform-origin': `var(--radix-popper-transform-origin)`,
                            '--radix-popover-content-available-width': `var(--radix-popper-available-width)`,
                            '--radix-popover-content-available-height': `var(--radix-popper-available-height)`,
                            '--radix-popover-trigger-width': `var(--radix-popper-anchor-width)`,
                            '--radix-popover-trigger-height': `var(--radix-popper-anchor-height)`,
                        },
                    }),
                }),
            })
        );
    }),
    _h = `PopoverClose`,
    vh = o.forwardRef((e, t) => {
        let { __scopePopover: n, ...r } = e,
            i = th(_h, n);
        return (0, d.jsx)(Ym.button, {
            type: `button`,
            ...r,
            ref: t,
            onClick: s(e.onClick, () => i.onOpenChange(!1)),
        });
    });
vh.displayName = _h;
var yh = `PopoverArrow`,
    bh = o.forwardRef((e, t) => {
        let { __scopePopover: n, ...r } = e,
            i = $m(n);
        return (0, d.jsx)(Zn, { ...i, ...r, ref: t });
    });
bh.displayName = yh;
function xh(e) {
    return e ? `open` : `closed`;
}
var Sh = nh,
    Ch = oh,
    wh = uh,
    Th = fh;
function Eh(e) {
    let t = Dh(e),
        n = o.forwardRef((e, n) => {
            let { children: r, ...i } = e,
                a = o.Children.toArray(r),
                s = a.find(kh);
            if (s) {
                let e = s.props.children,
                    r = a.map((t) =>
                        t === s
                            ? o.Children.count(e) > 1
                                ? o.Children.only(null)
                                : o.isValidElement(e)
                                  ? e.props.children
                                  : null
                            : t,
                    );
                return (0, d.jsx)(t, {
                    ...i,
                    ref: n,
                    children: o.isValidElement(e)
                        ? o.cloneElement(e, void 0, r)
                        : null,
                });
            }
            return (0, d.jsx)(t, { ...i, ref: n, children: r });
        });
    return ((n.displayName = `${e}.Slot`), n);
}
function Dh(e) {
    let t = o.forwardRef((e, t) => {
        let { children: n, ...r } = e;
        if (o.isValidElement(n)) {
            let e = jh(n),
                i = Ah(r, n.props);
            return (
                n.type !== o.Fragment && (i.ref = t ? l(t, e) : e),
                o.cloneElement(n, i)
            );
        }
        return o.Children.count(n) > 1 ? o.Children.only(null) : null;
    });
    return ((t.displayName = `${e}.SlotClone`), t);
}
var Oh = Symbol(`radix.slottable`);
function kh(e) {
    return (
        o.isValidElement(e) &&
        typeof e.type == `function` &&
        `__radixId` in e.type &&
        e.type.__radixId === Oh
    );
}
function Ah(e, t) {
    let n = { ...t };
    for (let r in t) {
        let i = e[r],
            a = t[r];
        /^on[A-Z]/.test(r)
            ? i && a
                ? (n[r] = (...e) => {
                      let t = a(...e);
                      return (i(...e), t);
                  })
                : i && (n[r] = i)
            : r === `style`
              ? (n[r] = { ...i, ...a })
              : r === `className` && (n[r] = [i, a].filter(Boolean).join(` `));
    }
    return { ...e, ...n };
}
function jh(e) {
    let t = Object.getOwnPropertyDescriptor(e.props, `ref`)?.get,
        n = t && `isReactWarning` in t && t.isReactWarning;
    return n
        ? e.ref
        : ((t = Object.getOwnPropertyDescriptor(e, `ref`)?.get),
          (n = t && `isReactWarning` in t && t.isReactWarning),
          n ? e.props.ref : e.props.ref || e.ref);
}
var Mh = [
        `a`,
        `button`,
        `div`,
        `form`,
        `h2`,
        `h3`,
        `img`,
        `input`,
        `label`,
        `li`,
        `nav`,
        `ol`,
        `p`,
        `select`,
        `span`,
        `svg`,
        `ul`,
    ].reduce((e, t) => {
        let n = Eh(`Primitive.${t}`),
            r = o.forwardRef((e, r) => {
                let { asChild: i, ...a } = e,
                    o = i ? n : t;
                return (
                    typeof window < `u` &&
                        (window[Symbol.for(`radix-ui`)] = !0),
                    (0, d.jsx)(o, { ...a, ref: r })
                );
            });
        return ((r.displayName = `Primitive.${t}`), { ...e, [t]: r });
    }, {}),
    Nh = `Toggle`,
    Ph = o.forwardRef((e, t) => {
        let { pressed: n, defaultPressed: r, onPressedChange: i, ...a } = e,
            [o, c] = K({
                prop: n,
                onChange: i,
                defaultProp: r ?? !1,
                caller: Nh,
            });
        return (0, d.jsx)(Mh.button, {
            type: `button`,
            'aria-pressed': o,
            'data-state': o ? `on` : `off`,
            'data-disabled': e.disabled ? `` : void 0,
            ...a,
            ref: t,
            onClick: s(e.onClick, () => {
                e.disabled || c(!o);
            }),
        });
    });
Ph.displayName = Nh;
var Fh = Ph;
export {
    hi as $,
    qu as A,
    Ss as B,
    Vd as C,
    vd as D,
    yd as E,
    Wu as F,
    _s as G,
    vs as H,
    Zu as I,
    vi as J,
    Ii as K,
    Gu as L,
    Xu as M,
    Yu as N,
    _d as O,
    Ku as P,
    mi as Q,
    Cs as R,
    Cp as S,
    Sd as T,
    gs as U,
    ys as V,
    xs as W,
    gi as X,
    _i as Y,
    pi as Z,
    _p as _,
    Ch as a,
    vp as b,
    Lm as c,
    Sp as d,
    a as et,
    bp as f,
    xp as g,
    Tp as h,
    Sh as i,
    Ju as j,
    td as k,
    Im as l,
    Ep as m,
    Th as n,
    Bm as o,
    wp as p,
    wi as q,
    wh as r,
    Rm as s,
    Fh as t,
    zm as u,
    Op as v,
    Ud as w,
    yp as x,
    Dp as y,
    bs as z,
};
