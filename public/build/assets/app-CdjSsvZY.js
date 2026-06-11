const __vite__mapDeps = (
    i,
    m = __vite__mapDeps,
    d = m.f ||
        (m.f = [
            'assets/app-layout-DbtR09mt.js',
            'assets/rolldown-runtime-C-57s9n3.js',
            'assets/vendor-inertia-C-ctYATJ.js',
            'assets/vendor-react-gF8_I9RY.js',
            'assets/vendor-radix-C92RFvrB.js',
            'assets/button-DTg8VAj1.js',
            'assets/utils-DDQLTkD9.js',
            'assets/createLucideIcon-BEXpI4i1.js',
            'assets/notebook-pen-Ds5JYgnn.js',
            'assets/chevron-right-BYoOqPwK.js',
            'assets/x-CuFVyYCA.js',
            'assets/app-logo-icon-Bik3n0cg.js',
            'assets/avatar-CXXw4HJO.js',
            'assets/dropdown-menu-BMfjFxpS.js',
            'assets/input-D7RkL3Of.js',
            'assets/separator-CPt1Rane.js',
            'assets/use-current-url-Cb7shc7M.js',
            'assets/categories-BF23ouZl.js',
            'assets/wayfinder-D3ymjKEV.js',
            'assets/contacts-B170dxKI.js',
            'assets/education-L4pFvpRi.js',
            'assets/routes-DWAnLukZ.js',
            'assets/posts-vWXYxcak.js',
            'assets/profile-DwyqYsO5.js',
            'assets/projects-BmJdXNFF.js',
            'assets/setting-DKMLlvTv.js',
            'assets/works-DfO8-ZeY.js',
            'assets/auth-layout-UqXQVrXg.js',
            'assets/card-BKnldXbY.js',
            'assets/layout-DKNsPVtv.js',
            'assets/heading-Bhw47iO9.js',
            'assets/appearance-3V7v0Jtl.js',
            'assets/security-BlQF40A3.js',
            'assets/confirm-password-D21fWr0o.js',
            'assets/password-input-DblKbCf8.js',
            'assets/input-error-0fpqe6UA.js',
            'assets/passkey-verify-bkTTo8-U.js',
            'assets/react-DUlMxSmx.js',
            'assets/spinner-Co1CPAeO.js',
            'assets/loader-circle-CC2U8Lto.js',
            'assets/label-Bi32WZ_t.js',
            'assets/confirm-DMic9n9e.js',
            'assets/forgot-password-CyffBhJA.js',
            'assets/text-link-Ca_Eg3Oe.js',
            'assets/password-PuikkjFY.js',
            'assets/login-BnfBdHSH.js',
            'assets/checkbox-DU-ByQ84.js',
            'assets/check-UMqITDFx.js',
            'assets/register-CW0JmUpi.js',
            'assets/reset-password-DX1yRdvF.js',
            'assets/two-factor-challenge-DePMJxV3.js',
            'assets/use-two-factor-auth-SJU7BFrK.js',
            'assets/minus-syvLFOki.js',
            'assets/verify-email-CPAdj6Gr.js',
            'assets/verification-BOFXTDrC.js',
            'assets/blog-DaWAB23o.js',
            'assets/blog-DQ8ZM9pB.js',
            'assets/sun-pKTbQw2q.js',
            'assets/vendor-motion-DeSHoCr9.js',
            'assets/blur-fade-BwZlzK6U.js',
            'assets/chevron-left-DXrVgh6h.js',
            'assets/show-uXvLGMWN.js',
            'assets/categories-CQQa2YxJ.js',
            'assets/ellipsis-DD4nOoz3.js',
            'assets/plus-Dx8gX_82.js',
            'assets/trash-2-CSMOWFhK.js',
            'assets/dialog-DJQtWJoP.js',
            'assets/contacts-BeKT3nwH.js',
            'assets/select-Bz4o1eKy.js',
            'assets/chevron-down-BWhPWOV5.js',
            'assets/refresh-cw-LwcL5zTe.js',
            'assets/ContactController-CNo9HCOD.js',
            'assets/badge-BbICtkl5.js',
            'assets/dashboard-CJ7ebHzW.js',
            'assets/education-JLoTKwTS.js',
            'assets/date-picker-DYVWyjU1.js',
            'assets/vendor-datepicker-B0Kn5_lF.js',
            'assets/create-FmG1giaw.js',
            'assets/post-form-CH-GUb9S.js',
            'assets/PostController-ayihZ9fW.js',
            'assets/edit-DnzkkFMS.js',
            'assets/posts-N0X02WSa.js',
            'assets/projects-CaFlN0pB.js',
            'assets/edit-BelLELmw.js',
            'assets/appearance-fyZM7G-a.js',
            'assets/profile-Bj5UGzDz.js',
            'assets/security-BmAt4Bce.js',
            'assets/welcome-CIFKGMKN.js',
            'assets/works-FSTRGYbg.js',
        ]),
) => i.map((i) => d[i]);
import { a as e } from './rolldown-runtime-C-57s9n3.js';
import { c as t, i as n, l as r } from './vendor-inertia-C-ctYATJ.js';
import { n as i, r as a } from './vendor-react-gF8_I9RY.js';
import {
    $ as o,
    J as s,
    Q as c,
    X as ee,
    Y as l,
    Z as u,
    et as te,
} from './vendor-radix-C92RFvrB.js';
import { t as d } from './utils-DDQLTkD9.js';
var f = e(a(), 1),
    ne = e(i(), 1);
function re(e) {
    if (!e || typeof document > `u`) return;
    let t = document.head || document.getElementsByTagName(`head`)[0],
        n = document.createElement(`style`);
    ((n.type = `text/css`),
        t.appendChild(n),
        n.styleSheet
            ? (n.styleSheet.cssText = e)
            : n.appendChild(document.createTextNode(e)));
}
var ie = (e) => {
        switch (e) {
            case `success`:
                return m;
            case `info`:
                return h;
            case `warning`:
                return oe;
            case `error`:
                return g;
            default:
                return null;
        }
    },
    p = Array(12).fill(0),
    ae = ({ visible: e, className: t }) =>
        f.createElement(
            `div`,
            {
                className: [`sonner-loading-wrapper`, t]
                    .filter(Boolean)
                    .join(` `),
                'data-visible': e,
            },
            f.createElement(
                `div`,
                { className: `sonner-spinner` },
                p.map((e, t) =>
                    f.createElement(`div`, {
                        className: `sonner-loading-bar`,
                        key: `spinner-bar-${t}`,
                    }),
                ),
            ),
        ),
    m = f.createElement(
        `svg`,
        {
            xmlns: `http://www.w3.org/2000/svg`,
            viewBox: `0 0 20 20`,
            fill: `currentColor`,
            height: `20`,
            width: `20`,
        },
        f.createElement(`path`, {
            fillRule: `evenodd`,
            d: `M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z`,
            clipRule: `evenodd`,
        }),
    ),
    oe = f.createElement(
        `svg`,
        {
            xmlns: `http://www.w3.org/2000/svg`,
            viewBox: `0 0 24 24`,
            fill: `currentColor`,
            height: `20`,
            width: `20`,
        },
        f.createElement(`path`, {
            fillRule: `evenodd`,
            d: `M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z`,
            clipRule: `evenodd`,
        }),
    ),
    h = f.createElement(
        `svg`,
        {
            xmlns: `http://www.w3.org/2000/svg`,
            viewBox: `0 0 20 20`,
            fill: `currentColor`,
            height: `20`,
            width: `20`,
        },
        f.createElement(`path`, {
            fillRule: `evenodd`,
            d: `M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z`,
            clipRule: `evenodd`,
        }),
    ),
    g = f.createElement(
        `svg`,
        {
            xmlns: `http://www.w3.org/2000/svg`,
            viewBox: `0 0 20 20`,
            fill: `currentColor`,
            height: `20`,
            width: `20`,
        },
        f.createElement(`path`, {
            fillRule: `evenodd`,
            d: `M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z`,
            clipRule: `evenodd`,
        }),
    ),
    _ = f.createElement(
        `svg`,
        {
            xmlns: `http://www.w3.org/2000/svg`,
            width: `12`,
            height: `12`,
            viewBox: `0 0 24 24`,
            fill: `none`,
            stroke: `currentColor`,
            strokeWidth: `1.5`,
            strokeLinecap: `round`,
            strokeLinejoin: `round`,
        },
        f.createElement(`line`, { x1: `18`, y1: `6`, x2: `6`, y2: `18` }),
        f.createElement(`line`, { x1: `6`, y1: `6`, x2: `18`, y2: `18` }),
    ),
    v = () => {
        let [e, t] = f.useState(document.hidden);
        return (
            f.useEffect(() => {
                let e = () => {
                    t(document.hidden);
                };
                return (
                    document.addEventListener(`visibilitychange`, e),
                    () => window.removeEventListener(`visibilitychange`, e)
                );
            }, []),
            e
        );
    },
    y = 1,
    b = new (class {
        constructor() {
            ((this.subscribe = (e) => (
                this.subscribers.push(e),
                () => {
                    let t = this.subscribers.indexOf(e);
                    this.subscribers.splice(t, 1);
                }
            )),
                (this.publish = (e) => {
                    this.subscribers.forEach((t) => t(e));
                }),
                (this.addToast = (e) => {
                    (this.publish(e), (this.toasts = [...this.toasts, e]));
                }),
                (this.create = (e) => {
                    let { message: t, ...n } = e,
                        r =
                            typeof e?.id == `number` || e.id?.length > 0
                                ? e.id
                                : y++,
                        i = this.toasts.find((e) => e.id === r),
                        a = e.dismissible === void 0 ? !0 : e.dismissible;
                    return (
                        this.dismissedToasts.has(r) &&
                            this.dismissedToasts.delete(r),
                        i
                            ? (this.toasts = this.toasts.map((n) =>
                                  n.id === r
                                      ? (this.publish({
                                            ...n,
                                            ...e,
                                            id: r,
                                            title: t,
                                        }),
                                        {
                                            ...n,
                                            ...e,
                                            id: r,
                                            dismissible: a,
                                            title: t,
                                        })
                                      : n,
                              ))
                            : this.addToast({
                                  title: t,
                                  ...n,
                                  dismissible: a,
                                  id: r,
                              }),
                        r
                    );
                }),
                (this.dismiss = (e) => (
                    e
                        ? (this.dismissedToasts.add(e),
                          requestAnimationFrame(() =>
                              this.subscribers.forEach((t) =>
                                  t({ id: e, dismiss: !0 }),
                              ),
                          ))
                        : this.toasts.forEach((e) => {
                              this.subscribers.forEach((t) =>
                                  t({ id: e.id, dismiss: !0 }),
                              );
                          }),
                    e
                )),
                (this.message = (e, t) => this.create({ ...t, message: e })),
                (this.error = (e, t) =>
                    this.create({ ...t, message: e, type: `error` })),
                (this.success = (e, t) =>
                    this.create({ ...t, type: `success`, message: e })),
                (this.info = (e, t) =>
                    this.create({ ...t, type: `info`, message: e })),
                (this.warning = (e, t) =>
                    this.create({ ...t, type: `warning`, message: e })),
                (this.loading = (e, t) =>
                    this.create({ ...t, type: `loading`, message: e })),
                (this.promise = (e, t) => {
                    if (!t) return;
                    let n;
                    t.loading !== void 0 &&
                        (n = this.create({
                            ...t,
                            promise: e,
                            type: `loading`,
                            message: t.loading,
                            description:
                                typeof t.description == `function`
                                    ? void 0
                                    : t.description,
                        }));
                    let r = Promise.resolve(e instanceof Function ? e() : e),
                        i = n !== void 0,
                        a,
                        o = r
                            .then(async (e) => {
                                if (((a = [`resolve`, e]), f.isValidElement(e)))
                                    ((i = !1),
                                        this.create({
                                            id: n,
                                            type: `default`,
                                            message: e,
                                        }));
                                else if (S(e) && !e.ok) {
                                    i = !1;
                                    let r =
                                            typeof t.error == `function`
                                                ? await t.error(
                                                      `HTTP error! status: ${e.status}`,
                                                  )
                                                : t.error,
                                        a =
                                            typeof t.description == `function`
                                                ? await t.description(
                                                      `HTTP error! status: ${e.status}`,
                                                  )
                                                : t.description,
                                        o =
                                            typeof r == `object` &&
                                            !f.isValidElement(r)
                                                ? r
                                                : { message: r };
                                    this.create({
                                        id: n,
                                        type: `error`,
                                        description: a,
                                        ...o,
                                    });
                                } else if (e instanceof Error) {
                                    i = !1;
                                    let r =
                                            typeof t.error == `function`
                                                ? await t.error(e)
                                                : t.error,
                                        a =
                                            typeof t.description == `function`
                                                ? await t.description(e)
                                                : t.description,
                                        o =
                                            typeof r == `object` &&
                                            !f.isValidElement(r)
                                                ? r
                                                : { message: r };
                                    this.create({
                                        id: n,
                                        type: `error`,
                                        description: a,
                                        ...o,
                                    });
                                } else if (t.success !== void 0) {
                                    i = !1;
                                    let r =
                                            typeof t.success == `function`
                                                ? await t.success(e)
                                                : t.success,
                                        a =
                                            typeof t.description == `function`
                                                ? await t.description(e)
                                                : t.description,
                                        o =
                                            typeof r == `object` &&
                                            !f.isValidElement(r)
                                                ? r
                                                : { message: r };
                                    this.create({
                                        id: n,
                                        type: `success`,
                                        description: a,
                                        ...o,
                                    });
                                }
                            })
                            .catch(async (e) => {
                                if (((a = [`reject`, e]), t.error !== void 0)) {
                                    i = !1;
                                    let r =
                                            typeof t.error == `function`
                                                ? await t.error(e)
                                                : t.error,
                                        a =
                                            typeof t.description == `function`
                                                ? await t.description(e)
                                                : t.description,
                                        o =
                                            typeof r == `object` &&
                                            !f.isValidElement(r)
                                                ? r
                                                : { message: r };
                                    this.create({
                                        id: n,
                                        type: `error`,
                                        description: a,
                                        ...o,
                                    });
                                }
                            })
                            .finally(() => {
                                (i && (this.dismiss(n), (n = void 0)),
                                    t.finally == null || t.finally.call(t));
                            }),
                        s = () =>
                            new Promise((e, t) =>
                                o
                                    .then(() =>
                                        a[0] === `reject` ? t(a[1]) : e(a[1]),
                                    )
                                    .catch(t),
                            );
                    return typeof n != `string` && typeof n != `number`
                        ? { unwrap: s }
                        : Object.assign(n, { unwrap: s });
                }),
                (this.custom = (e, t) => {
                    let n = t?.id || y++;
                    return (this.create({ jsx: e(n), id: n, ...t }), n);
                }),
                (this.getActiveToasts = () =>
                    this.toasts.filter((e) => !this.dismissedToasts.has(e.id))),
                (this.subscribers = []),
                (this.toasts = []),
                (this.dismissedToasts = new Set()));
        }
    })(),
    x = (e, t) => {
        let n = t?.id || y++;
        return (b.addToast({ title: e, ...t, id: n }), n);
    },
    S = (e) =>
        e &&
        typeof e == `object` &&
        `ok` in e &&
        typeof e.ok == `boolean` &&
        `status` in e &&
        typeof e.status == `number`,
    C = Object.assign(
        x,
        {
            success: b.success,
            info: b.info,
            warning: b.warning,
            error: b.error,
            custom: b.custom,
            message: b.message,
            promise: b.promise,
            dismiss: b.dismiss,
            loading: b.loading,
        },
        { getHistory: () => b.toasts, getToasts: () => b.getActiveToasts() },
    );
re(
    `[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}`,
);
function w(e) {
    return e.label !== void 0;
}
var T = 3,
    E = `24px`,
    D = `16px`,
    O = 4e3,
    se = 356,
    k = 14,
    A = 45,
    j = 200;
function M(...e) {
    return e.filter(Boolean).join(` `);
}
function N(e) {
    let [t, n] = e.split(`-`),
        r = [];
    return (t && r.push(t), n && r.push(n), r);
}
var ce = (e) => {
    let {
            invert: t,
            toast: n,
            unstyled: r,
            interacting: i,
            setHeights: a,
            visibleToasts: o,
            heights: s,
            index: c,
            toasts: ee,
            expanded: l,
            removeToast: u,
            defaultRichColors: te,
            closeButton: d,
            style: ne,
            cancelButtonStyle: re,
            actionButtonStyle: p,
            className: m = ``,
            descriptionClassName: oe = ``,
            duration: h,
            position: g,
            gap: y,
            expandByDefault: b,
            classNames: x,
            icons: S,
            closeButtonAriaLabel: C = `Close toast`,
        } = e,
        [T, E] = f.useState(null),
        [D, se] = f.useState(null),
        [k, ce] = f.useState(!1),
        [P, le] = f.useState(!1),
        [F, I] = f.useState(!1),
        [L, R] = f.useState(!1),
        [ue, z] = f.useState(!1),
        [de, B] = f.useState(0),
        [V, H] = f.useState(0),
        U = f.useRef(n.duration || h || O),
        fe = f.useRef(null),
        W = f.useRef(null),
        pe = c === 0,
        me = c + 1 <= o,
        G = n.type,
        K = n.dismissible !== !1,
        he = n.className || ``,
        ge = n.descriptionClassName || ``,
        q = f.useMemo(
            () => s.findIndex((e) => e.toastId === n.id) || 0,
            [s, n.id],
        ),
        _e = f.useMemo(() => n.closeButton ?? d, [n.closeButton, d]),
        J = f.useMemo(() => n.duration || h || O, [n.duration, h]),
        Y = f.useRef(0),
        X = f.useRef(0),
        Z = f.useRef(0),
        Q = f.useRef(null),
        [ve, ye] = g.split(`-`),
        be = f.useMemo(
            () => s.reduce((e, t, n) => (n >= q ? e : e + t.height), 0),
            [s, q],
        ),
        xe = v(),
        Se = n.invert || t,
        Ce = G === `loading`;
    ((X.current = f.useMemo(() => q * y + be, [q, be])),
        f.useEffect(() => {
            U.current = J;
        }, [J]),
        f.useEffect(() => {
            ce(!0);
        }, []),
        f.useEffect(() => {
            let e = W.current;
            if (e) {
                let t = e.getBoundingClientRect().height;
                return (
                    H(t),
                    a((e) => [
                        { toastId: n.id, height: t, position: n.position },
                        ...e,
                    ]),
                    () => a((e) => e.filter((e) => e.toastId !== n.id))
                );
            }
        }, [a, n.id]),
        f.useLayoutEffect(() => {
            if (!k) return;
            let e = W.current,
                t = e.style.height;
            e.style.height = `auto`;
            let r = e.getBoundingClientRect().height;
            ((e.style.height = t),
                H(r),
                a((e) =>
                    e.find((e) => e.toastId === n.id)
                        ? e.map((e) =>
                              e.toastId === n.id ? { ...e, height: r } : e,
                          )
                        : [
                              {
                                  toastId: n.id,
                                  height: r,
                                  position: n.position,
                              },
                              ...e,
                          ],
                ));
        }, [k, n.title, n.description, a, n.id, n.jsx, n.action, n.cancel]));
    let $ = f.useCallback(() => {
        (le(!0),
            B(X.current),
            a((e) => e.filter((e) => e.toastId !== n.id)),
            setTimeout(() => {
                u(n);
            }, j));
    }, [n, u, a, X]);
    (f.useEffect(() => {
        if (
            (n.promise && G === `loading`) ||
            n.duration === 1 / 0 ||
            n.type === `loading`
        )
            return;
        let e;
        return (
            l || i || xe
                ? (() => {
                      if (Z.current < Y.current) {
                          let e = new Date().getTime() - Y.current;
                          U.current -= e;
                      }
                      Z.current = new Date().getTime();
                  })()
                : U.current !== 1 / 0 &&
                  ((Y.current = new Date().getTime()),
                  (e = setTimeout(() => {
                      (n.onAutoClose == null || n.onAutoClose.call(n, n), $());
                  }, U.current))),
            () => clearTimeout(e)
        );
    }, [l, i, n, G, xe, $]),
        f.useEffect(() => {
            n.delete && ($(), n.onDismiss == null || n.onDismiss.call(n, n));
        }, [$, n.delete]));
    function we() {
        return S?.loading
            ? f.createElement(
                  `div`,
                  {
                      className: M(
                          x?.loader,
                          n?.classNames?.loader,
                          `sonner-loader`,
                      ),
                      'data-visible': G === `loading`,
                  },
                  S.loading,
              )
            : f.createElement(ae, {
                  className: M(x?.loader, n?.classNames?.loader),
                  visible: G === `loading`,
              });
    }
    let Te = n.icon || S?.[G] || ie(G);
    return f.createElement(
        `li`,
        {
            tabIndex: 0,
            ref: W,
            className: M(
                m,
                he,
                x?.toast,
                n?.classNames?.toast,
                x?.default,
                x?.[G],
                n?.classNames?.[G],
            ),
            'data-sonner-toast': ``,
            'data-rich-colors': n.richColors ?? te,
            'data-styled': !(n.jsx || n.unstyled || r),
            'data-mounted': k,
            'data-promise': !!n.promise,
            'data-swiped': ue,
            'data-removed': P,
            'data-visible': me,
            'data-y-position': ve,
            'data-x-position': ye,
            'data-index': c,
            'data-front': pe,
            'data-swiping': F,
            'data-dismissible': K,
            'data-type': G,
            'data-invert': Se,
            'data-swipe-out': L,
            'data-swipe-direction': D,
            'data-expanded': !!(l || (b && k)),
            'data-testid': n.testId,
            style: {
                '--index': c,
                '--toasts-before': c,
                '--z-index': ee.length - c,
                '--offset': `${P ? de : X.current}px`,
                '--initial-height': b ? `auto` : `${V}px`,
                ...ne,
                ...n.style,
            },
            onDragEnd: () => {
                (I(!1), E(null), (Q.current = null));
            },
            onPointerDown: (e) => {
                e.button !== 2 &&
                    (Ce ||
                        !K ||
                        ((fe.current = new Date()),
                        B(X.current),
                        e.target.setPointerCapture(e.pointerId),
                        e.target.tagName !== `BUTTON` &&
                            (I(!0),
                            (Q.current = { x: e.clientX, y: e.clientY }))));
            },
            onPointerUp: () => {
                if (L || !K) return;
                Q.current = null;
                let e = Number(
                        W.current?.style
                            .getPropertyValue(`--swipe-amount-x`)
                            .replace(`px`, ``) || 0,
                    ),
                    t = Number(
                        W.current?.style
                            .getPropertyValue(`--swipe-amount-y`)
                            .replace(`px`, ``) || 0,
                    ),
                    r = new Date().getTime() - fe.current?.getTime(),
                    i = T === `x` ? e : t,
                    a = Math.abs(i) / r;
                if (Math.abs(i) >= A || a > 0.11) {
                    (B(X.current),
                        n.onDismiss == null || n.onDismiss.call(n, n),
                        se(
                            T === `x`
                                ? e > 0
                                    ? `right`
                                    : `left`
                                : t > 0
                                  ? `down`
                                  : `up`,
                        ),
                        $(),
                        R(!0));
                    return;
                } else {
                    var o, s;
                    ((o = W.current) == null ||
                        o.style.setProperty(`--swipe-amount-x`, `0px`),
                        (s = W.current) == null ||
                            s.style.setProperty(`--swipe-amount-y`, `0px`));
                }
                (z(!1), I(!1), E(null));
            },
            onPointerMove: (t) => {
                var n, r;
                if (
                    !Q.current ||
                    !K ||
                    window.getSelection()?.toString().length > 0
                )
                    return;
                let i = t.clientY - Q.current.y,
                    a = t.clientX - Q.current.x,
                    o = e.swipeDirections ?? N(g);
                !T &&
                    (Math.abs(a) > 1 || Math.abs(i) > 1) &&
                    E(Math.abs(a) > Math.abs(i) ? `x` : `y`);
                let s = { x: 0, y: 0 },
                    c = (e) => 1 / (1.5 + Math.abs(e) / 20);
                if (T === `y`) {
                    if (o.includes(`top`) || o.includes(`bottom`))
                        if (
                            (o.includes(`top`) && i < 0) ||
                            (o.includes(`bottom`) && i > 0)
                        )
                            s.y = i;
                        else {
                            let e = i * c(i);
                            s.y = Math.abs(e) < Math.abs(i) ? e : i;
                        }
                } else if (
                    T === `x` &&
                    (o.includes(`left`) || o.includes(`right`))
                )
                    if (
                        (o.includes(`left`) && a < 0) ||
                        (o.includes(`right`) && a > 0)
                    )
                        s.x = a;
                    else {
                        let e = a * c(a);
                        s.x = Math.abs(e) < Math.abs(a) ? e : a;
                    }
                ((Math.abs(s.x) > 0 || Math.abs(s.y) > 0) && z(!0),
                    (n = W.current) == null ||
                        n.style.setProperty(`--swipe-amount-x`, `${s.x}px`),
                    (r = W.current) == null ||
                        r.style.setProperty(`--swipe-amount-y`, `${s.y}px`));
            },
        },
        _e && !n.jsx && G !== `loading`
            ? f.createElement(
                  `button`,
                  {
                      'aria-label': C,
                      'data-disabled': Ce,
                      'data-close-button': !0,
                      onClick:
                          Ce || !K
                              ? () => {}
                              : () => {
                                    ($(),
                                        n.onDismiss == null ||
                                            n.onDismiss.call(n, n));
                                },
                      className: M(x?.closeButton, n?.classNames?.closeButton),
                  },
                  S?.close ?? _,
              )
            : null,
        (G || n.icon || n.promise) &&
            n.icon !== null &&
            (S?.[G] !== null || n.icon)
            ? f.createElement(
                  `div`,
                  {
                      'data-icon': ``,
                      className: M(x?.icon, n?.classNames?.icon),
                  },
                  n.promise || (n.type === `loading` && !n.icon)
                      ? n.icon || we()
                      : null,
                  n.type === `loading` ? null : Te,
              )
            : null,
        f.createElement(
            `div`,
            {
                'data-content': ``,
                className: M(x?.content, n?.classNames?.content),
            },
            f.createElement(
                `div`,
                {
                    'data-title': ``,
                    className: M(x?.title, n?.classNames?.title),
                },
                n.jsx
                    ? n.jsx
                    : typeof n.title == `function`
                      ? n.title()
                      : n.title,
            ),
            n.description
                ? f.createElement(
                      `div`,
                      {
                          'data-description': ``,
                          className: M(
                              oe,
                              ge,
                              x?.description,
                              n?.classNames?.description,
                          ),
                      },
                      typeof n.description == `function`
                          ? n.description()
                          : n.description,
                  )
                : null,
        ),
        f.isValidElement(n.cancel)
            ? n.cancel
            : n.cancel && w(n.cancel)
              ? f.createElement(
                    `button`,
                    {
                        'data-button': !0,
                        'data-cancel': !0,
                        style: n.cancelButtonStyle || re,
                        onClick: (e) => {
                            w(n.cancel) &&
                                K &&
                                (n.cancel.onClick == null ||
                                    n.cancel.onClick.call(n.cancel, e),
                                $());
                        },
                        className: M(
                            x?.cancelButton,
                            n?.classNames?.cancelButton,
                        ),
                    },
                    n.cancel.label,
                )
              : null,
        f.isValidElement(n.action)
            ? n.action
            : n.action && w(n.action)
              ? f.createElement(
                    `button`,
                    {
                        'data-button': !0,
                        'data-action': !0,
                        style: n.actionButtonStyle || p,
                        onClick: (e) => {
                            w(n.action) &&
                                (n.action.onClick == null ||
                                    n.action.onClick.call(n.action, e),
                                !e.defaultPrevented && $());
                        },
                        className: M(
                            x?.actionButton,
                            n?.classNames?.actionButton,
                        ),
                    },
                    n.action.label,
                )
              : null,
    );
};
function P() {
    if (typeof window > `u` || typeof document > `u`) return `ltr`;
    let e = document.documentElement.getAttribute(`dir`);
    return e === `auto` || !e
        ? window.getComputedStyle(document.documentElement).direction
        : e;
}
function le(e, t) {
    let n = {};
    return (
        [e, t].forEach((e, t) => {
            let r = t === 1,
                i = r ? `--mobile-offset` : `--offset`,
                a = r ? D : E;
            function o(e) {
                [`top`, `right`, `bottom`, `left`].forEach((t) => {
                    n[`${i}-${t}`] = typeof e == `number` ? `${e}px` : e;
                });
            }
            typeof e == `number` || typeof e == `string`
                ? o(e)
                : typeof e == `object`
                  ? [`top`, `right`, `bottom`, `left`].forEach((t) => {
                        e[t] === void 0
                            ? (n[`${i}-${t}`] = a)
                            : (n[`${i}-${t}`] =
                                  typeof e[t] == `number` ? `${e[t]}px` : e[t]);
                    })
                  : o(a);
        }),
        n
    );
}
var F = f.forwardRef(function (e, t) {
    let {
            id: n,
            invert: r,
            position: i = `bottom-right`,
            hotkey: a = [`altKey`, `KeyT`],
            expand: o,
            closeButton: s,
            className: c,
            offset: ee,
            mobileOffset: l,
            theme: u = `light`,
            richColors: te,
            duration: d,
            style: re,
            visibleToasts: ie = T,
            toastOptions: p,
            dir: ae = P(),
            gap: m = k,
            icons: oe,
            containerAriaLabel: h = `Notifications`,
        } = e,
        [g, _] = f.useState([]),
        v = f.useMemo(
            () =>
                n
                    ? g.filter((e) => e.toasterId === n)
                    : g.filter((e) => !e.toasterId),
            [g, n],
        ),
        y = f.useMemo(
            () =>
                Array.from(
                    new Set(
                        [i].concat(
                            v.filter((e) => e.position).map((e) => e.position),
                        ),
                    ),
                ),
            [v, i],
        ),
        [x, S] = f.useState([]),
        [C, w] = f.useState(!1),
        [E, D] = f.useState(!1),
        [O, A] = f.useState(
            u === `system`
                ? typeof window < `u` &&
                  window.matchMedia &&
                  window.matchMedia(`(prefers-color-scheme: dark)`).matches
                    ? `dark`
                    : `light`
                : u,
        ),
        j = f.useRef(null),
        M = a.join(`+`).replace(/Key/g, ``).replace(/Digit/g, ``),
        N = f.useRef(null),
        F = f.useRef(!1),
        I = f.useCallback((e) => {
            _(
                (t) => (
                    t.find((t) => t.id === e.id)?.delete || b.dismiss(e.id),
                    t.filter(({ id: t }) => t !== e.id)
                ),
            );
        }, []);
    return (
        f.useEffect(
            () =>
                b.subscribe((e) => {
                    if (e.dismiss) {
                        requestAnimationFrame(() => {
                            _((t) =>
                                t.map((t) =>
                                    t.id === e.id ? { ...t, delete: !0 } : t,
                                ),
                            );
                        });
                        return;
                    }
                    setTimeout(() => {
                        ne.flushSync(() => {
                            _((t) => {
                                let n = t.findIndex((t) => t.id === e.id);
                                return n === -1
                                    ? [e, ...t]
                                    : [
                                          ...t.slice(0, n),
                                          { ...t[n], ...e },
                                          ...t.slice(n + 1),
                                      ];
                            });
                        });
                    });
                }),
            [g],
        ),
        f.useEffect(() => {
            if (u !== `system`) {
                A(u);
                return;
            }
            if (
                (u === `system` &&
                    (window.matchMedia &&
                    window.matchMedia(`(prefers-color-scheme: dark)`).matches
                        ? A(`dark`)
                        : A(`light`)),
                typeof window > `u`)
            )
                return;
            let e = window.matchMedia(`(prefers-color-scheme: dark)`);
            try {
                e.addEventListener(`change`, ({ matches: e }) => {
                    A(e ? `dark` : `light`);
                });
            } catch {
                e.addListener(({ matches: e }) => {
                    try {
                        A(e ? `dark` : `light`);
                    } catch (e) {
                        console.error(e);
                    }
                });
            }
        }, [u]),
        f.useEffect(() => {
            g.length <= 1 && w(!1);
        }, [g]),
        f.useEffect(() => {
            let e = (e) => {
                if (a.every((t) => e[t] || e.code === t)) {
                    var t;
                    (w(!0), (t = j.current) == null || t.focus());
                }
                e.code === `Escape` &&
                    (document.activeElement === j.current ||
                        j.current?.contains(document.activeElement)) &&
                    w(!1);
            };
            return (
                document.addEventListener(`keydown`, e),
                () => document.removeEventListener(`keydown`, e)
            );
        }, [a]),
        f.useEffect(() => {
            if (j.current)
                return () => {
                    N.current &&
                        (N.current.focus({ preventScroll: !0 }),
                        (N.current = null),
                        (F.current = !1));
                };
        }, [j.current]),
        f.createElement(
            `section`,
            {
                ref: t,
                'aria-label': `${h} ${M}`,
                tabIndex: -1,
                'aria-live': `polite`,
                'aria-relevant': `additions text`,
                'aria-atomic': `false`,
                suppressHydrationWarning: !0,
            },
            y.map((t, n) => {
                let [i, a] = t.split(`-`);
                return v.length
                    ? f.createElement(
                          `ol`,
                          {
                              key: t,
                              dir: ae === `auto` ? P() : ae,
                              tabIndex: -1,
                              ref: j,
                              className: c,
                              'data-sonner-toaster': !0,
                              'data-sonner-theme': O,
                              'data-y-position': i,
                              'data-x-position': a,
                              style: {
                                  '--front-toast-height': `${x[0]?.height || 0}px`,
                                  '--width': `${se}px`,
                                  '--gap': `${m}px`,
                                  ...re,
                                  ...le(ee, l),
                              },
                              onBlur: (e) => {
                                  F.current &&
                                      !e.currentTarget.contains(
                                          e.relatedTarget,
                                      ) &&
                                      ((F.current = !1),
                                      (N.current &&=
                                          (N.current.focus({
                                              preventScroll: !0,
                                          }),
                                          null)));
                              },
                              onFocus: (e) => {
                                  (e.target instanceof HTMLElement &&
                                      e.target.dataset.dismissible ===
                                          `false`) ||
                                      F.current ||
                                      ((F.current = !0),
                                      (N.current = e.relatedTarget));
                              },
                              onMouseEnter: () => w(!0),
                              onMouseMove: () => w(!0),
                              onMouseLeave: () => {
                                  E || w(!1);
                              },
                              onDragEnd: () => w(!1),
                              onPointerDown: (e) => {
                                  (e.target instanceof HTMLElement &&
                                      e.target.dataset.dismissible ===
                                          `false`) ||
                                      D(!0);
                              },
                              onPointerUp: () => D(!1),
                          },
                          v
                              .filter(
                                  (e) =>
                                      (!e.position && n === 0) ||
                                      e.position === t,
                              )
                              .map((n, i) =>
                                  f.createElement(ce, {
                                      key: n.id,
                                      icons: oe,
                                      index: i,
                                      toast: n,
                                      defaultRichColors: te,
                                      duration: p?.duration ?? d,
                                      className: p?.className,
                                      descriptionClassName:
                                          p?.descriptionClassName,
                                      invert: r,
                                      visibleToasts: ie,
                                      closeButton: p?.closeButton ?? s,
                                      interacting: E,
                                      position: t,
                                      style: p?.style,
                                      unstyled: p?.unstyled,
                                      classNames: p?.classNames,
                                      cancelButtonStyle: p?.cancelButtonStyle,
                                      actionButtonStyle: p?.actionButtonStyle,
                                      closeButtonAriaLabel:
                                          p?.closeButtonAriaLabel,
                                      removeToast: I,
                                      toasts: v.filter(
                                          (e) => e.position == n.position,
                                      ),
                                      heights: x.filter(
                                          (e) => e.position == n.position,
                                      ),
                                      setHeights: S,
                                      expandByDefault: o,
                                      gap: m,
                                      expanded: C,
                                      swipeDirections: e.swipeDirections,
                                  }),
                              ),
                      )
                    : null;
            }),
        )
    );
});
function I() {
    (0, f.useEffect)(
        () =>
            t.on(`flash`, (e) => {
                let t = e.detail?.flash?.toast;
                t && C[t.type](t.message);
            }),
        [],
    );
}
var L = new Set(),
    R = `system`,
    ue = () =>
        typeof window > `u`
            ? !1
            : window.matchMedia(`(prefers-color-scheme: dark)`).matches,
    z = (e, t, n = 365) => {
        if (typeof document > `u`) return;
        let r = n * 24 * 60 * 60;
        document.cookie = `${e}=${t};path=/;max-age=${r};SameSite=Lax`;
    },
    de = () =>
        typeof window > `u`
            ? `system`
            : localStorage.getItem(`appearance`) || `system`,
    B = (e) => e === `dark` || (e === `system` && ue()),
    V = (e) => {
        if (typeof document > `u`) return;
        let t = B(e);
        (document.documentElement.classList.toggle(`dark`, t),
            (document.documentElement.style.colorScheme = t
                ? `dark`
                : `light`));
    },
    H = (e) => (L.add(e), () => L.delete(e)),
    U = () => L.forEach((e) => e()),
    fe = () =>
        typeof window > `u`
            ? null
            : window.matchMedia(`(prefers-color-scheme: dark)`),
    W = () => V(R);
function pe() {
    typeof window > `u` ||
        (localStorage.getItem(`appearance`) ||
            (localStorage.setItem(`appearance`, `system`),
            z(`appearance`, `system`)),
        (R = de()),
        V(R),
        fe()?.addEventListener(`change`, W));
}
function me() {
    let e = (0, f.useSyncExternalStore)(
        H,
        () => R,
        () => `system`,
    );
    return {
        appearance: e,
        resolvedAppearance: B(e) ? `dark` : `light`,
        updateAppearance: (e) => {
            ((R = e),
                localStorage.setItem(`appearance`, e),
                z(`appearance`, e),
                V(e),
                U());
        },
    };
}
var G = te();
function K({ ...e }) {
    let { appearance: t } = me();
    return (
        I(),
        (0, G.jsx)(F, {
            theme: t,
            className: `toaster group`,
            position: `bottom-right`,
            style: {
                '--normal-bg': `var(--popover)`,
                '--normal-text': `var(--popover-foreground)`,
                '--normal-border': `var(--border)`,
            },
            ...e,
        })
    );
}
function he({ delayDuration: e = 0, ...t }) {
    return (0, G.jsx)(u, {
        'data-slot': `tooltip-provider`,
        delayDuration: e,
        ...t,
    });
}
function ge({ ...e }) {
    return (0, G.jsx)(c, { 'data-slot': `tooltip`, ...e });
}
function q({ ...e }) {
    return (0, G.jsx)(o, { 'data-slot': `tooltip-trigger`, ...e });
}
function _e({ className: e, sideOffset: t = 4, children: n, ...r }) {
    return (0, G.jsx)(ee, {
        children: (0, G.jsxs)(l, {
            'data-slot': `tooltip-content`,
            sideOffset: t,
            className: d(
                `bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-w-sm rounded-md px-3 py-1.5 text-xs`,
                e,
            ),
            ...r,
            children: [
                n,
                (0, G.jsx)(s, {
                    className: `bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]`,
                }),
            ],
        }),
    });
}
var J = (0, f.lazy)(() =>
        r(
            () => import(`./app-layout-DbtR09mt.js`),
            __vite__mapDeps([
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                18, 19, 20, 21, 22, 23, 24, 25, 26,
            ]),
        ),
    ),
    Y = (0, f.lazy)(() =>
        r(
            () => import(`./auth-layout-UqXQVrXg.js`),
            __vite__mapDeps([27, 2, 1, 3, 4, 11, 28, 6, 21, 18]),
        ),
    ),
    X = (0, f.lazy)(() =>
        r(
            () => import(`./layout-DKNsPVtv.js`),
            __vite__mapDeps([29, 2, 1, 3, 4, 5, 6, 30, 15, 16, 31, 18, 23, 32]),
        ),
    ),
    Z = `Jacques M.`;
(n({
    resolve: async (e, t) => {
        let n = Object.assign({
                './pages/auth/confirm-password.tsx': () =>
                    r(
                        () => import(`./confirm-password-D21fWr0o.js`),
                        __vite__mapDeps([
                            33, 2, 1, 3, 4, 5, 6, 34, 7, 14, 35, 36, 37, 15, 38,
                            39, 40, 41, 18,
                        ]),
                    ),
                './pages/auth/forgot-password.tsx': () =>
                    r(
                        () => import(`./forgot-password-CyffBhJA.js`),
                        __vite__mapDeps([
                            42, 2, 1, 3, 4, 5, 6, 39, 7, 35, 43, 14, 40, 21, 18,
                            44, 41,
                        ]),
                    ),
                './pages/auth/login.tsx': () =>
                    r(
                        () => import(`./login-BnfBdHSH.js`),
                        __vite__mapDeps([
                            45, 2, 1, 3, 4, 5, 6, 34, 7, 14, 35, 36, 37, 15, 38,
                            39, 43, 46, 47, 40, 21, 18, 44, 41,
                        ]),
                    ),
                './pages/auth/register.tsx': () =>
                    r(
                        () => import(`./register-CW0JmUpi.js`),
                        __vite__mapDeps([
                            48, 2, 1, 3, 4, 5, 6, 34, 7, 14, 35, 43, 40, 38, 39,
                            21, 18,
                        ]),
                    ),
                './pages/auth/reset-password.tsx': () =>
                    r(
                        () => import(`./reset-password-DX1yRdvF.js`),
                        __vite__mapDeps([
                            49, 2, 1, 3, 4, 5, 6, 34, 7, 14, 35, 40, 38, 39, 44,
                            41, 18,
                        ]),
                    ),
                './pages/auth/two-factor-challenge.tsx': () =>
                    r(
                        () => import(`./two-factor-challenge-DePMJxV3.js`),
                        __vite__mapDeps([
                            50, 1, 2, 3, 4, 5, 6, 51, 52, 7, 18, 35, 14,
                        ]),
                    ),
                './pages/auth/verify-email.tsx': () =>
                    r(
                        () => import(`./verify-email-CPAdj6Gr.js`),
                        __vite__mapDeps([
                            53, 2, 1, 3, 4, 5, 6, 43, 38, 39, 7, 21, 18, 54,
                        ]),
                    ),
                './pages/blog/index.tsx': () =>
                    r(
                        () => import(`./blog-DaWAB23o.js`),
                        __vite__mapDeps([
                            55, 2, 1, 3, 4, 56, 6, 7, 8, 57, 58, 15, 18, 59, 60,
                            9,
                        ]),
                    ),
                './pages/blog/show.tsx': () =>
                    r(
                        () => import(`./show-uXvLGMWN.js`),
                        __vite__mapDeps([
                            61, 1, 2, 3, 4, 56, 6, 7, 8, 57, 58, 15, 18, 60, 9,
                        ]),
                    ),
                './pages/categories/create.tsx': () =>
                    r(() => import(`./create-DTPtpWwg.js`), []),
                './pages/categories/edit.tsx': () =>
                    r(() => import(`./edit-By4jqakS.js`), []),
                './pages/categories/index.tsx': () =>
                    r(
                        () => import(`./categories-CQQa2YxJ.js`),
                        __vite__mapDeps([
                            62, 1, 2, 3, 4, 5, 6, 63, 7, 64, 65, 35, 66, 10, 13,
                            14, 40, 38, 39, 17, 18,
                        ]),
                    ),
                './pages/categories/show.tsx': () =>
                    r(() => import(`./show-ESlWUJwP.js`), []),
                './pages/contacts/create.tsx': () =>
                    r(() => import(`./create-DOUirrLC.js`), []),
                './pages/contacts/edit.tsx': () =>
                    r(() => import(`./edit-B7CorADf.js`), []),
                './pages/contacts/index.tsx': () =>
                    r(
                        () => import(`./contacts-BeKT3nwH.js`),
                        __vite__mapDeps([
                            67, 1, 2, 3, 4, 5, 6, 68, 7, 47, 69, 63, 70, 65, 71,
                            18, 35, 72, 66, 10, 13, 40, 38, 39, 19,
                        ]),
                    ),
                './pages/contacts/show.tsx': () =>
                    r(() => import(`./show-ZQpQwGkk.js`), []),
                './pages/dashboard.tsx': () =>
                    r(
                        () => import(`./dashboard-CJ7ebHzW.js`),
                        __vite__mapDeps([73, 1, 2, 3, 4, 21, 18]),
                    ),
                './pages/education/create.tsx': () =>
                    r(() => import(`./create-JiUrDQ28.js`), []),
                './pages/education/edit.tsx': () =>
                    r(() => import(`./edit-N2UB_iX_.js`), []),
                './pages/education/index.tsx': () =>
                    r(
                        () => import(`./education-JLoTKwTS.js`),
                        __vite__mapDeps([
                            74, 1, 2, 3, 4, 5, 6, 75, 76, 7, 69, 60, 9, 63, 64,
                            65, 35, 46, 47, 66, 10, 13, 14, 40, 38, 39, 20, 18,
                        ]),
                    ),
                './pages/education/show.tsx': () =>
                    r(() => import(`./show-57ahsxHU.js`), []),
                './pages/posts/create.tsx': () =>
                    r(
                        () => import(`./create-FmG1giaw.js`),
                        __vite__mapDeps([
                            77, 2, 1, 3, 4, 78, 5, 6, 7, 68, 47, 69, 52, 35, 14,
                            40, 15, 38, 39, 79, 18, 22,
                        ]),
                    ),
                './pages/posts/edit.tsx': () =>
                    r(
                        () => import(`./edit-DnzkkFMS.js`),
                        __vite__mapDeps([
                            80, 2, 1, 3, 4, 78, 5, 6, 7, 68, 47, 69, 52, 35, 14,
                            40, 15, 38, 39, 79, 18, 22,
                        ]),
                    ),
                './pages/posts/index.tsx': () =>
                    r(
                        () => import(`./posts-N0X02WSa.js`),
                        __vite__mapDeps([
                            81, 1, 2, 3, 4, 5, 6, 63, 7, 64, 65, 79, 18, 72, 66,
                            10, 13, 38, 39, 22,
                        ]),
                    ),
                './pages/posts/show.tsx': () =>
                    r(() => import(`./show-C_Mk_szy.js`), []),
                './pages/projects/create.tsx': () =>
                    r(() => import(`./create-BsYmTMrD.js`), []),
                './pages/projects/edit.tsx': () =>
                    r(() => import(`./edit-GUTFsyGn.js`), []),
                './pages/projects/index.tsx': () =>
                    r(
                        () => import(`./projects-CaFlN0pB.js`),
                        __vite__mapDeps([
                            82, 1, 2, 3, 4, 5, 6, 75, 76, 7, 69, 60, 9, 68, 47,
                            63, 64, 65, 35, 72, 46, 66, 10, 13, 14, 40, 38, 39,
                            24, 18,
                        ]),
                    ),
                './pages/projects/show.tsx': () =>
                    r(() => import(`./show-yX_meru5.js`), []),
                './pages/setting/edit.tsx': () =>
                    r(
                        () => import(`./edit-BelLELmw.js`),
                        __vite__mapDeps([
                            83, 2, 1, 3, 4, 5, 6, 30, 35, 14, 40, 38, 39, 7, 25,
                            18,
                        ]),
                    ),
                './pages/settings/appearance.tsx': () =>
                    r(
                        () => import(`./appearance-fyZM7G-a.js`),
                        __vite__mapDeps([84, 2, 1, 3, 4, 6, 7, 57, 30, 31, 18]),
                    ),
                './pages/settings/profile.tsx': () =>
                    r(
                        () => import(`./profile-Bj5UGzDz.js`),
                        __vite__mapDeps([
                            85, 1, 2, 3, 4, 5, 6, 34, 7, 14, 30, 35, 66, 10, 40,
                            23, 18, 54,
                        ]),
                    ),
                './pages/settings/security.tsx': () =>
                    r(
                        () => import(`./security-BmAt4Bce.js`),
                        __vite__mapDeps([
                            86, 1, 2, 3, 4, 37, 7, 5, 6, 51, 52, 18, 47, 34, 14,
                            70, 65, 30, 35, 28, 66, 10, 40, 38, 39, 32,
                        ]),
                    ),
                './pages/welcome.tsx': () =>
                    r(
                        () => import(`./welcome-CIFKGMKN.js`),
                        __vite__mapDeps([
                            87, 1, 2, 3, 4, 5, 6, 56, 7, 8, 57, 58, 15, 18, 59,
                            69, 9, 71, 35, 12, 72, 14, 40, 38, 39,
                        ]),
                    ),
                './pages/works/create.tsx': () =>
                    r(() => import(`./create-CekJNpYv2.js`), []),
                './pages/works/edit.tsx': () =>
                    r(() => import(`./edit-B1c4Yh-c2.js`), []),
                './pages/works/index.tsx': () =>
                    r(
                        () => import(`./works-FSTRGYbg.js`),
                        __vite__mapDeps([
                            88, 1, 2, 3, 4, 5, 6, 75, 76, 7, 69, 60, 9, 68, 47,
                            63, 64, 65, 35, 46, 66, 10, 13, 14, 40, 38, 39, 26,
                            18,
                        ]),
                    ),
                './pages/works/show.tsx': () =>
                    r(() => import(`./show-Cj7GUqSO.js`), []),
            }),
            i = await (
                n[`./pages/${e}.tsx`] ||
                n[`./pages/${e}.jsx`] ||
                n[`./Pages/${e}.tsx`] ||
                n[`./Pages/${e}.jsx`]
            )?.();
        if (!i) throw Error(`Page not found: ${e}`);
        return i.default ?? i;
    },
    title: (e) => (e ? `${e} - ${Z}` : Z),
    layout: (e) => {
        switch (!0) {
            case e === `welcome`:
            case e.startsWith(`blog/`):
                return null;
            case e.startsWith(`auth/`):
                return Y;
            case e.startsWith(`settings/`):
                return [J, X];
            default:
                return J;
        }
    },
    strictMode: !0,
    withApp(e) {
        return (0, G.jsx)(f.Suspense, {
            children: (0, G.jsxs)(he, {
                delayDuration: 0,
                children: [e, (0, G.jsx)(K, {})],
            }),
        });
    },
    progress: { color: `#4B5563` },
}),
    pe());
export { me as a, q as i, _e as n, he as r, ge as t };
