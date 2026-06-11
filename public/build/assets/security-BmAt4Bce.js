import { a as e } from './rolldown-runtime-C-57s9n3.js';
import { c as t, n, t as r } from './vendor-inertia-C-ctYATJ.js';
import { r as i } from './vendor-react-gF8_I9RY.js';
import { et as a } from './vendor-radix-C92RFvrB.js';
import { t as o } from './utils-DDQLTkD9.js';
import { a as s } from './app-CdjSsvZY.js';
import { r as c, t as l } from './button-DTg8VAj1.js';
import { t as u } from './createLucideIcon-BEXpI4i1.js';
import { t as d } from './check-UMqITDFx.js';
import { n as f, r as p, t as m } from './password-input-DblKbCf8.js';
import { n as h, r as g } from './react-DUlMxSmx.js';
import { t as _ } from './refresh-cw-LwcL5zTe.js';
import { t as v } from './trash-2-CSMOWFhK.js';
import { t as y } from './input-D7RkL3Of.js';
import { n as b, t as x } from './wayfinder-D3ymjKEV.js';
import { a as S, i as ee, n as C, r as w, t as T } from './card-BKnldXbY.js';
import { t as E } from './heading-Bhw47iO9.js';
import { t as te } from './security-BlQF40A3.js';
import { t as D } from './input-error-0fpqe6UA.js';
import { t as O } from './label-Bi32WZ_t.js';
import { t as k } from './spinner-Co1CPAeO.js';
import {
    a as ne,
    c as re,
    i as ie,
    l as ae,
    n as oe,
    r as se,
    s as ce,
    t as le,
    u as ue,
} from './use-two-factor-auth-SJU7BFrK.js';
import {
    a as de,
    c as fe,
    i as A,
    n as pe,
    o as me,
    r as j,
    s as M,
    t as N,
} from './dialog-DJQtWJoP.js';
var P = u(`circle-alert`, [
        [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
        [`line`, { x1: `12`, x2: `12`, y1: `8`, y2: `12`, key: `1pkeuh` }],
        [`line`, { x1: `12`, x2: `12.01`, y1: `16`, y2: `16`, key: `4dfq90` }],
    ]),
    F = u(`copy`, [
        [
            `rect`,
            {
                width: `14`,
                height: `14`,
                x: `8`,
                y: `8`,
                rx: `2`,
                ry: `2`,
                key: `17jyea`,
            },
        ],
        [
            `path`,
            {
                d: `M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`,
                key: `zix9uf`,
            },
        ],
    ]),
    I = u(`lock-keyhole`, [
        [`circle`, { cx: `12`, cy: `16`, r: `1`, key: `1au0dj` }],
        [
            `rect`,
            {
                x: `3`,
                y: `10`,
                width: `18`,
                height: `12`,
                rx: `2`,
                key: `6s8ecr`,
            },
        ],
        [`path`, { d: `M7 10V7a5 5 0 0 1 10 0v3`, key: `1pqi11` }],
    ]),
    L = u(`scan-line`, [
        [`path`, { d: `M3 7V5a2 2 0 0 1 2-2h2`, key: `aa7l1z` }],
        [`path`, { d: `M17 3h2a2 2 0 0 1 2 2v2`, key: `4qcy5o` }],
        [`path`, { d: `M21 17v2a2 2 0 0 1-2 2h-2`, key: `6vwrx8` }],
        [`path`, { d: `M7 21H5a2 2 0 0 1-2-2v-2`, key: `ioqczr` }],
        [`path`, { d: `M7 12h10`, key: `b7w52i` }],
    ]),
    R = u(`shield-check`, [
        [
            `path`,
            {
                d: `M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,
                key: `oel41y`,
            },
        ],
        [`path`, { d: `m9 12 2 2 4-4`, key: `dzmm74` }],
    ]),
    z = e(i(), 1),
    B = (e) => ({ url: B.url(e), method: `get` });
((B.definition = { methods: [`get`, `head`], url: `/settings/security` }),
    (B.url = (e) => B.definition.url + b(e)),
    (B.get = (e) => ({ url: B.url(e), method: `get` })),
    (B.head = (e) => ({ url: B.url(e), method: `head` })));
var V = (e) => ({ action: B.url(e), method: `get` });
((V.get = (e) => ({ action: B.url(e), method: `get` })),
    (V.head = (e) => ({
        action: B.url({
            [e?.mergeQuery ? `mergeQuery` : `query`]: {
                _method: `HEAD`,
                ...(e?.query ?? e?.mergeQuery ?? {}),
            },
        }),
        method: `get`,
    })),
    (B.form = V));
var H = (e) => ({ url: H.url(e), method: `put` });
((H.definition = { methods: [`put`], url: `/settings/password` }),
    (H.url = (e) => H.definition.url + b(e)),
    (H.put = (e) => ({ url: H.url(e), method: `put` })));
var U = (e) => ({
    action: H.url({
        [e?.mergeQuery ? `mergeQuery` : `query`]: {
            _method: `PUT`,
            ...(e?.query ?? e?.mergeQuery ?? {}),
        },
    }),
    method: `post`,
});
((U.put = (e) => ({
    action: H.url({
        [e?.mergeQuery ? `mergeQuery` : `query`]: {
            _method: `PUT`,
            ...(e?.query ?? e?.mergeQuery ?? {}),
        },
    }),
    method: `post`,
})),
    (H.form = U));
var he = { edit: B, update: H },
    W = (e) => ({ url: W.url(e), method: `get` });
((W.definition = { methods: [`get`, `head`], url: `/user/passkeys/options` }),
    (W.url = (e) => W.definition.url + b(e)),
    (W.get = (e) => ({ url: W.url(e), method: `get` })),
    (W.head = (e) => ({ url: W.url(e), method: `head` })));
var G = (e) => ({ action: W.url(e), method: `get` });
((G.get = (e) => ({ action: W.url(e), method: `get` })),
    (G.head = (e) => ({
        action: W.url({
            [e?.mergeQuery ? `mergeQuery` : `query`]: {
                _method: `HEAD`,
                ...(e?.query ?? e?.mergeQuery ?? {}),
            },
        }),
        method: `get`,
    })),
    (W.form = G));
var K = (e) => ({ url: K.url(e), method: `post` });
((K.definition = { methods: [`post`], url: `/user/passkeys` }),
    (K.url = (e) => K.definition.url + b(e)),
    (K.post = (e) => ({ url: K.url(e), method: `post` })));
var q = (e) => ({ action: K.url(e), method: `post` });
((q.post = (e) => ({ action: K.url(e), method: `post` })), (K.form = q));
var J = (e, t) => ({ url: J.url(e, t), method: `delete` });
((J.definition = { methods: [`delete`], url: `/user/passkeys/{passkey}` }),
    (J.url = (e, t) => {
        ((typeof e == `string` || typeof e == `number`) && (e = { passkey: e }),
            typeof e == `object` &&
                !Array.isArray(e) &&
                `id` in e &&
                (e = { passkey: e.id }),
            Array.isArray(e) && (e = { passkey: e[0] }),
            (e = x(e)));
        let n = {
            passkey: typeof e.passkey == `object` ? e.passkey.id : e.passkey,
        };
        return (
            J.definition.url
                .replace(`{passkey}`, n.passkey.toString())
                .replace(/\/+$/, ``) + b(t)
        );
    }),
    (J.delete = (e, t) => ({ url: J.url(e, t), method: `delete` })));
var Y = (e, t) => ({
    action: J.url(e, {
        [t?.mergeQuery ? `mergeQuery` : `query`]: {
            _method: `DELETE`,
            ...(t?.query ?? t?.mergeQuery ?? {}),
        },
    }),
    method: `post`,
});
((Y.delete = (e, t) => ({
    action: J.url(e, {
        [t?.mergeQuery ? `mergeQuery` : `query`]: {
            _method: `DELETE`,
            ...(t?.query ?? t?.mergeQuery ?? {}),
        },
    }),
    method: `post`,
})),
    (J.form = Y));
var X = a();
function ge({ passkey: e, onDelete: t }) {
    let [n, r] = (0, z.useState)(!1);
    return (0, X.jsxs)(`div`, {
        className: `flex items-center justify-between border-b p-4 last:border-b-0`,
        children: [
            (0, X.jsxs)(`div`, {
                className: `flex items-center gap-4`,
                children: [
                    (0, X.jsx)(`div`, {
                        className: `flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-muted`,
                        children: (0, X.jsx)(g, {
                            className: `h-5 w-5 text-muted-foreground`,
                        }),
                    }),
                    (0, X.jsxs)(`div`, {
                        className: `space-y-1`,
                        children: [
                            (0, X.jsxs)(`div`, {
                                className: `flex items-center gap-2.5`,
                                children: [
                                    (0, X.jsx)(`p`, {
                                        className: `font-medium tracking-tight`,
                                        children: e.name,
                                    }),
                                    e.authenticator &&
                                        (0, X.jsx)(`span`, {
                                            className: `inline-flex items-center gap-1 rounded-md bg-muted px-2 py-0.5 text-[11px] font-medium tracking-wide text-muted-foreground uppercase ring-1 ring-border ring-inset`,
                                            children: e.authenticator,
                                        }),
                                ],
                            }),
                            (0, X.jsxs)(`p`, {
                                className: `text-sm text-muted-foreground`,
                                children: [
                                    `Added `,
                                    e.created_at_diff,
                                    e.last_used_at_diff &&
                                        (0, X.jsxs)(X.Fragment, {
                                            children: [
                                                (0, X.jsx)(`span`, {
                                                    className: `mx-1 text-muted-foreground/50`,
                                                    children: `/`,
                                                }),
                                                `Last used `,
                                                e.last_used_at_diff,
                                            ],
                                        }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, X.jsxs)(N, {
                children: [
                    (0, X.jsx)(fe, {
                        asChild: !0,
                        children: (0, X.jsxs)(l, {
                            variant: `ghost`,
                            size: `sm`,
                            className: `text-destructive hover:bg-destructive/10 hover:text-destructive`,
                            children: [
                                (0, X.jsx)(v, { className: `h-4 w-4` }),
                                (0, X.jsx)(`span`, {
                                    className: `sr-only`,
                                    children: `Remove`,
                                }),
                            ],
                        }),
                    }),
                    (0, X.jsxs)(j, {
                        children: [
                            (0, X.jsx)(M, { children: `Remove passkey` }),
                            (0, X.jsxs)(A, {
                                children: [
                                    `Are you sure you want to remove the "`,
                                    e.name,
                                    `" passkey? You will no longer be able to use it to sign in.`,
                                ],
                            }),
                            (0, X.jsxs)(de, {
                                className: `gap-2`,
                                children: [
                                    (0, X.jsx)(pe, {
                                        asChild: !0,
                                        children: (0, X.jsx)(l, {
                                            variant: `secondary`,
                                            children: `Cancel`,
                                        }),
                                    }),
                                    (0, X.jsx)(l, {
                                        variant: `destructive`,
                                        onClick: () => {
                                            (r(!0), t(e.id, () => r(!1)));
                                        },
                                        disabled: n,
                                        children: n
                                            ? `Removing...`
                                            : `Remove passkey`,
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function _e({ onSuccess: e }) {
    let [t, n] = (0, z.useState)(() => {
            let e = navigator.userAgent;
            return (
                [
                    [`Chrome`, `Firefox`, `Safari`, `Edge`, `Opera`].find((t) =>
                        new RegExp(t).test(e),
                    ),
                    [`iPhone`, `iPad`, `Android`, `Mac`, `Windows`].find((t) =>
                        new RegExp(t).test(e),
                    ),
                ]
                    .filter(Boolean)
                    .join(` on `) || ``
            );
        }),
        [r, i] = (0, z.useState)(!1),
        {
            register: a,
            isLoading: o,
            error: s,
            isSupported: c,
        } = h({
            onSuccess: () => {
                (n(``), i(!1), e());
            },
        });
    return c
        ? r
            ? (0, X.jsxs)(`form`, {
                  onSubmit: async (e) => {
                      (e.preventDefault(), t.trim() && (await a(t)));
                  },
                  className: `space-y-4 rounded-lg border border-border bg-muted/50 p-4`,
                  children: [
                      (0, X.jsxs)(`div`, {
                          className: `grid gap-2`,
                          children: [
                              (0, X.jsx)(O, {
                                  htmlFor: `passkey-name`,
                                  children: `Passkey name`,
                              }),
                              (0, X.jsx)(y, {
                                  id: `passkey-name`,
                                  type: `text`,
                                  value: t,
                                  onChange: (e) => n(e.target.value),
                                  placeholder: `e.g., MacBook Pro, iPhone`,
                                  className: `mt-1 block w-full border-foreground/20`,
                                  autoFocus: !0,
                              }),
                              (0, X.jsx)(`p`, {
                                  className: `text-xs text-muted-foreground`,
                                  children: `A name helps you identify this passkey later.`,
                              }),
                          ],
                      }),
                      s && (0, X.jsx)(D, { message: s }),
                      (0, X.jsxs)(`div`, {
                          className: `flex gap-2`,
                          children: [
                              (0, X.jsx)(l, {
                                  type: `submit`,
                                  disabled: o || !t.trim(),
                                  children: o
                                      ? `Registering...`
                                      : `Register passkey`,
                              }),
                              (0, X.jsx)(l, {
                                  type: `button`,
                                  variant: `ghost`,
                                  onClick: () => {
                                      (i(!1), n(``));
                                  },
                                  children: `Cancel`,
                              }),
                          ],
                      }),
                  ],
              })
            : (0, X.jsx)(l, {
                  variant: `outline`,
                  onClick: () => i(!0),
                  children: `Add passkey`,
              })
        : (0, X.jsx)(`div`, {
              className: `text-sm text-muted-foreground`,
              children: `Passkeys are not supported in this browser.`,
          });
}
var ve = () =>
    (0, X.jsxs)(`div`, {
        className: `p-8 text-center`,
        children: [
            (0, X.jsx)(`div`, {
                className: `mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-muted`,
                children: (0, X.jsx)(g, {
                    className: `h-7 w-7 text-muted-foreground`,
                }),
            }),
            (0, X.jsx)(`p`, {
                className: `font-medium`,
                children: `No passkeys yet`,
            }),
            (0, X.jsx)(`p`, {
                className: `mt-1 text-sm text-muted-foreground`,
                children: `Add a passkey to sign in without a password`,
            }),
        ],
    });
function ye(e) {
    let n = e.passkeys ?? [],
        r = (e, n) => {
            t.delete(J.url(e), { preserveScroll: !0, onError: n });
        };
    return (e.canManagePasskeys ?? !1)
        ? (0, X.jsxs)(`div`, {
              className: `space-y-6`,
              children: [
                  (0, X.jsx)(E, {
                      variant: `small`,
                      title: `Passkeys`,
                      description: `Manage your passkeys for passwordless sign-in`,
                  }),
                  (0, X.jsx)(`div`, {
                      className: `overflow-hidden rounded-lg border border-border`,
                      children:
                          n.length > 0
                              ? n.map((e) =>
                                    (0, X.jsx)(
                                        ge,
                                        { passkey: e, onDelete: r },
                                        e.id,
                                    ),
                                )
                              : (0, X.jsx)(ve, {}),
                  }),
                  (0, X.jsx)(_e, {
                      onSuccess: () => {
                          t.reload();
                      },
                  }),
              ],
          })
        : null;
}
var be = c(
    `relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current`,
    {
        variants: {
            variant: {
                default: `bg-background text-foreground`,
                destructive: `text-destructive-foreground [&>svg]:text-current *:data-[slot=alert-description]:text-destructive-foreground/80`,
            },
        },
        defaultVariants: { variant: `default` },
    },
);
function xe({ className: e, variant: t, ...n }) {
    return (0, X.jsx)(`div`, {
        'data-slot': `alert`,
        role: `alert`,
        className: o(be({ variant: t }), e),
        ...n,
    });
}
function Se({ className: e, ...t }) {
    return (0, X.jsx)(`div`, {
        'data-slot': `alert-title`,
        className: o(
            `col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight`,
            e,
        ),
        ...t,
    });
}
function Z({ className: e, ...t }) {
    return (0, X.jsx)(`div`, {
        'data-slot': `alert-description`,
        className: o(
            `text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed`,
            e,
        ),
        ...t,
    });
}
function Q({ errors: e, title: t }) {
    return (0, X.jsxs)(xe, {
        variant: `destructive`,
        children: [
            (0, X.jsx)(P, {}),
            (0, X.jsx)(Se, { children: t || `Something went wrong.` }),
            (0, X.jsx)(Z, {
                children: (0, X.jsx)(`ul`, {
                    className: `list-inside list-disc text-sm`,
                    children: Array.from(new Set(e)).map((e, t) =>
                        (0, X.jsx)(`li`, { children: e }, t),
                    ),
                }),
            }),
        ],
    });
}
function Ce({ recoveryCodesList: e, fetchRecoveryCodes: t, errors: n }) {
    let [i, a] = (0, z.useState)(!1),
        o = (0, z.useRef)(null),
        s = e.length > 0 && i,
        c = (0, z.useCallback)(async () => {
            (!i && !e.length && (await t()),
                a(!i),
                i ||
                    setTimeout(() => {
                        o.current?.scrollIntoView({
                            behavior: `smooth`,
                            block: `nearest`,
                        });
                    }));
        }, [i, e.length, t]);
    return (
        (0, z.useEffect)(() => {
            e.length || t();
        }, [e.length, t]),
        (0, X.jsxs)(T, {
            children: [
                (0, X.jsxs)(ee, {
                    children: [
                        (0, X.jsxs)(S, {
                            className: `flex gap-3`,
                            children: [
                                (0, X.jsx)(I, {
                                    className: `size-4`,
                                    'aria-hidden': `true`,
                                }),
                                `2FA recovery codes`,
                            ],
                        }),
                        (0, X.jsx)(w, {
                            children: `Recovery codes let you regain access if you lose your 2FA device. Store them in a secure password manager.`,
                        }),
                    ],
                }),
                (0, X.jsxs)(C, {
                    children: [
                        (0, X.jsxs)(`div`, {
                            className: `flex flex-col gap-3 select-none sm:flex-row sm:items-center sm:justify-between`,
                            children: [
                                (0, X.jsxs)(l, {
                                    onClick: c,
                                    className: `w-fit`,
                                    'aria-expanded': i,
                                    'aria-controls': `recovery-codes-section`,
                                    children: [
                                        (0, X.jsx)(i ? p : f, {
                                            className: `size-4`,
                                            'aria-hidden': `true`,
                                        }),
                                        i ? `Hide` : `View`,
                                        ` recovery codes`,
                                    ],
                                }),
                                s &&
                                    (0, X.jsx)(r, {
                                        ...ne.form(),
                                        options: { preserveScroll: !0 },
                                        onSuccess: t,
                                        children: ({ processing: e }) =>
                                            (0, X.jsxs)(l, {
                                                variant: `secondary`,
                                                type: `submit`,
                                                disabled: e,
                                                'aria-describedby': `regenerate-warning`,
                                                children: [
                                                    (0, X.jsx)(_, {}),
                                                    ` Regenerate codes`,
                                                ],
                                            }),
                                    }),
                            ],
                        }),
                        (0, X.jsx)(`div`, {
                            id: `recovery-codes-section`,
                            className: `relative overflow-hidden transition-all duration-300 ${i ? `h-auto opacity-100` : `h-0 opacity-0`}`,
                            'aria-hidden': !i,
                            children: (0, X.jsx)(`div`, {
                                className: `mt-3 space-y-3`,
                                children: n?.length
                                    ? (0, X.jsx)(Q, { errors: n })
                                    : (0, X.jsxs)(X.Fragment, {
                                          children: [
                                              (0, X.jsx)(`div`, {
                                                  ref: o,
                                                  className: `grid gap-1 rounded-lg bg-muted p-4 font-mono text-sm`,
                                                  role: `list`,
                                                  'aria-label': `Recovery codes`,
                                                  children: e.length
                                                      ? e.map((e, t) =>
                                                            (0, X.jsx)(
                                                                `div`,
                                                                {
                                                                    role: `listitem`,
                                                                    className: `select-text`,
                                                                    children: e,
                                                                },
                                                                t,
                                                            ),
                                                        )
                                                      : (0, X.jsx)(`div`, {
                                                            className: `space-y-2`,
                                                            'aria-label': `Loading recovery codes`,
                                                            children:
                                                                Array.from(
                                                                    {
                                                                        length: 8,
                                                                    },
                                                                    (e, t) =>
                                                                        (0,
                                                                        X.jsx)(
                                                                            `div`,
                                                                            {
                                                                                className: `h-4 animate-pulse rounded bg-muted-foreground/20`,
                                                                                'aria-hidden': `true`,
                                                                            },
                                                                            t,
                                                                        ),
                                                                ),
                                                        }),
                                              }),
                                              (0, X.jsx)(`div`, {
                                                  className: `text-xs text-muted-foreground select-none`,
                                                  children: (0, X.jsxs)(`p`, {
                                                      id: `regenerate-warning`,
                                                      children: [
                                                          `Each recovery code can be used once to access your account and will be removed after use. If you need more, click`,
                                                          ` `,
                                                          (0, X.jsx)(`span`, {
                                                              className: `font-bold`,
                                                              children: `Regenerate codes`,
                                                          }),
                                                          ` `,
                                                          `above.`,
                                                      ],
                                                  }),
                                              }),
                                          ],
                                      }),
                            }),
                        }),
                    ],
                }),
            ],
        })
    );
}
function we() {
    let [e, t] = (0, z.useState)(null);
    return [
        e,
        async (e) => {
            if (!navigator?.clipboard)
                return (console.warn(`Clipboard not supported`), !1);
            try {
                return (await navigator.clipboard.writeText(e), t(e), !0);
            } catch (e) {
                return (console.warn(`Copy failed`, e), t(null), !1);
            }
        },
    ];
}
function Te() {
    return (0, X.jsx)(`div`, {
        className: `mb-3 rounded-full border border-border bg-card p-0.5 shadow-sm`,
        children: (0, X.jsxs)(`div`, {
            className: `relative overflow-hidden rounded-full border border-border bg-muted p-2.5`,
            children: [
                (0, X.jsx)(`div`, {
                    className: `absolute inset-0 grid grid-cols-5 opacity-50`,
                    children: Array.from({ length: 5 }, (e, t) =>
                        (0, X.jsx)(
                            `div`,
                            {
                                className: `border-r border-border last:border-r-0`,
                            },
                            `col-${t + 1}`,
                        ),
                    ),
                }),
                (0, X.jsx)(`div`, {
                    className: `absolute inset-0 grid grid-rows-5 opacity-50`,
                    children: Array.from({ length: 5 }, (e, t) =>
                        (0, X.jsx)(
                            `div`,
                            {
                                className: `border-b border-border last:border-b-0`,
                            },
                            `row-${t + 1}`,
                        ),
                    ),
                }),
                (0, X.jsx)(L, {
                    className: `relative z-20 size-6 text-foreground`,
                }),
            ],
        }),
    });
}
function Ee({
    qrCodeSvg: e,
    manualSetupKey: t,
    buttonText: n,
    onNextStep: r,
    errors: i,
}) {
    let { resolvedAppearance: a } = s(),
        [o, c] = we(),
        u = o === t ? d : F;
    return (0, X.jsx)(X.Fragment, {
        children: i?.length
            ? (0, X.jsx)(Q, { errors: i })
            : (0, X.jsxs)(X.Fragment, {
                  children: [
                      (0, X.jsx)(`div`, {
                          className: `mx-auto flex max-w-md overflow-hidden`,
                          children: (0, X.jsx)(`div`, {
                              className: `mx-auto aspect-square w-64 rounded-lg border border-border`,
                              children: (0, X.jsx)(`div`, {
                                  className: `z-10 flex h-full w-full items-center justify-center p-5`,
                                  children: e
                                      ? (0, X.jsx)(`div`, {
                                            className: `aspect-square w-full rounded-lg bg-white p-2 [&_svg]:size-full`,
                                            dangerouslySetInnerHTML: {
                                                __html: e,
                                            },
                                            style: {
                                                filter:
                                                    a === `dark`
                                                        ? `invert(1) brightness(1.5)`
                                                        : void 0,
                                            },
                                        })
                                      : (0, X.jsx)(k, {}),
                              }),
                          }),
                      }),
                      (0, X.jsx)(`div`, {
                          className: `flex w-full space-x-5`,
                          children: (0, X.jsx)(l, {
                              className: `w-full`,
                              onClick: r,
                              children: n,
                          }),
                      }),
                      (0, X.jsxs)(`div`, {
                          className: `relative flex w-full items-center justify-center`,
                          children: [
                              (0, X.jsx)(`div`, {
                                  className: `absolute inset-0 top-1/2 h-px w-full bg-border`,
                              }),
                              (0, X.jsx)(`span`, {
                                  className: `relative bg-card px-2 py-1`,
                                  children: `or, enter the code manually`,
                              }),
                          ],
                      }),
                      (0, X.jsx)(`div`, {
                          className: `flex w-full space-x-2`,
                          children: (0, X.jsx)(`div`, {
                              className: `flex w-full items-stretch overflow-hidden rounded-xl border border-border`,
                              children: t
                                  ? (0, X.jsxs)(X.Fragment, {
                                        children: [
                                            (0, X.jsx)(`input`, {
                                                type: `text`,
                                                readOnly: !0,
                                                value: t,
                                                className: `h-full w-full bg-background p-3 text-foreground outline-none`,
                                            }),
                                            (0, X.jsx)(`button`, {
                                                onClick: () => c(t),
                                                className: `border-l border-border px-3 hover:bg-muted`,
                                                children: (0, X.jsx)(u, {
                                                    className: `w-4`,
                                                }),
                                            }),
                                        ],
                                    })
                                  : (0, X.jsx)(`div`, {
                                        className: `flex h-full w-full items-center justify-center bg-muted p-3`,
                                        children: (0, X.jsx)(k, {}),
                                    }),
                          }),
                      }),
                  ],
              }),
    });
}
function De({ onClose: e, onBack: t }) {
    let [n, i] = (0, z.useState)(``),
        a = (0, z.useRef)(null);
    return (
        (0, z.useEffect)(() => {
            setTimeout(() => {
                a.current?.querySelector(`input`)?.focus();
            }, 0);
        }, []),
        (0, X.jsx)(r, {
            ...oe.form(),
            onSuccess: () => e(),
            resetOnError: !0,
            resetOnSuccess: !0,
            children: ({ processing: e, errors: r }) =>
                (0, X.jsx)(X.Fragment, {
                    children: (0, X.jsxs)(`div`, {
                        ref: a,
                        className: `relative w-full space-y-3`,
                        children: [
                            (0, X.jsxs)(`div`, {
                                className: `flex w-full flex-col items-center space-y-3 py-2`,
                                children: [
                                    (0, X.jsx)(ce, {
                                        id: `otp`,
                                        name: `code`,
                                        maxLength: 6,
                                        onChange: i,
                                        disabled: e,
                                        pattern: ue,
                                        autoFocus: !0,
                                        children: (0, X.jsx)(re, {
                                            children: Array.from(
                                                { length: 6 },
                                                (e, t) =>
                                                    (0, X.jsx)(
                                                        ae,
                                                        { index: t },
                                                        t,
                                                    ),
                                            ),
                                        }),
                                    }),
                                    (0, X.jsx)(D, {
                                        message:
                                            r?.confirmTwoFactorAuthentication
                                                ?.code,
                                    }),
                                ],
                            }),
                            (0, X.jsxs)(`div`, {
                                className: `flex w-full space-x-5`,
                                children: [
                                    (0, X.jsx)(l, {
                                        type: `button`,
                                        variant: `outline`,
                                        className: `flex-1`,
                                        onClick: t,
                                        disabled: e,
                                        children: `Back`,
                                    }),
                                    (0, X.jsx)(l, {
                                        type: `submit`,
                                        className: `flex-1`,
                                        disabled: e || n.length < 6,
                                        children: `Confirm`,
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
        })
    );
}
function Oe({
    isOpen: e,
    onClose: t,
    requiresConfirmation: n,
    twoFactorEnabled: r,
    qrCodeSvg: i,
    manualSetupKey: a,
    clearSetupData: o,
    fetchSetupData: s,
    errors: c,
}) {
    let [l, u] = (0, z.useState)(!1),
        d = (0, z.useMemo)(
            () =>
                r
                    ? {
                          title: `Two-factor authentication enabled`,
                          description: `Two-factor authentication is now enabled. Scan the QR code or enter the setup key in your authenticator app.`,
                          buttonText: `Close`,
                      }
                    : l
                      ? {
                            title: `Verify authentication code`,
                            description: `Enter the 6-digit code from your authenticator app`,
                            buttonText: `Continue`,
                        }
                      : {
                            title: `Enable two-factor authentication`,
                            description: `To finish enabling two-factor authentication, scan the QR code or enter the setup key in your authenticator app`,
                            buttonText: `Continue`,
                        },
            [r, l],
        ),
        f = (0, z.useCallback)(() => {
            (u(!1), o());
        }, [o]),
        p = (0, z.useCallback)(() => {
            (f(), t());
        }, [t, f]),
        m = (0, z.useCallback)(() => {
            if (n) {
                u(!0);
                return;
            }
            p();
        }, [n, p]),
        h = (0, z.useRef)(s);
    return (
        (0, z.useEffect)(() => {
            h.current = s;
        }, [s]),
        (0, z.useEffect)(() => {
            e && !i && h.current();
        }, [e, i]),
        (0, X.jsx)(N, {
            open: e,
            onOpenChange: (e) => !e && p(),
            children: (0, X.jsxs)(j, {
                className: `sm:max-w-md`,
                children: [
                    (0, X.jsxs)(me, {
                        className: `flex items-center justify-center`,
                        children: [
                            (0, X.jsx)(Te, {}),
                            (0, X.jsx)(M, { children: d.title }),
                            (0, X.jsx)(A, {
                                className: `text-center`,
                                children: d.description,
                            }),
                        ],
                    }),
                    (0, X.jsx)(`div`, {
                        className: `flex flex-col items-center space-y-5`,
                        children: l
                            ? (0, X.jsx)(De, {
                                  onClose: p,
                                  onBack: () => u(!1),
                              })
                            : (0, X.jsx)(Ee, {
                                  qrCodeSvg: i,
                                  manualSetupKey: a,
                                  buttonText: d.buttonText,
                                  onNextStep: m,
                                  errors: c,
                              }),
                    }),
                ],
            }),
        })
    );
}
function $({
    canManageTwoFactor: e = !1,
    requiresConfirmation: t = !1,
    twoFactorEnabled: i = !1,
    canManagePasskeys: a = !1,
    passkeys: o = [],
}) {
    let s = (0, z.useRef)(null),
        c = (0, z.useRef)(null),
        {
            qrCodeSvg: u,
            hasSetupData: d,
            manualSetupKey: f,
            clearSetupData: p,
            clearTwoFactorAuthData: h,
            fetchSetupData: g,
            recoveryCodesList: _,
            fetchRecoveryCodes: v,
            errors: y,
        } = le(),
        [b, x] = (0, z.useState)(!1),
        S = (0, z.useRef)(i);
    return (
        (0, z.useEffect)(() => {
            (S.current && !i && h(), (S.current = i));
        }, [i, h]),
        (0, X.jsxs)(X.Fragment, {
            children: [
                (0, X.jsx)(n, { title: `Security settings` }),
                (0, X.jsx)(`h1`, {
                    className: `sr-only`,
                    children: `Security settings`,
                }),
                (0, X.jsxs)(`div`, {
                    className: `space-y-6`,
                    children: [
                        (0, X.jsx)(E, {
                            variant: `small`,
                            title: `Update password`,
                            description: `Ensure your account is using a long, random password to stay secure`,
                        }),
                        (0, X.jsx)(r, {
                            ...he.update.form(),
                            options: { preserveScroll: !0 },
                            resetOnError: [
                                `password`,
                                `password_confirmation`,
                                `current_password`,
                            ],
                            resetOnSuccess: !0,
                            onError: (e) => {
                                (e.password && s.current?.focus(),
                                    e.current_password && c.current?.focus());
                            },
                            className: `space-y-6`,
                            children: ({ errors: e, processing: t }) =>
                                (0, X.jsxs)(X.Fragment, {
                                    children: [
                                        (0, X.jsxs)(`div`, {
                                            className: `grid gap-2`,
                                            children: [
                                                (0, X.jsx)(O, {
                                                    htmlFor: `current_password`,
                                                    children: `Current password`,
                                                }),
                                                (0, X.jsx)(m, {
                                                    id: `current_password`,
                                                    ref: c,
                                                    name: `current_password`,
                                                    className: `mt-1 block w-full`,
                                                    autoComplete: `current-password`,
                                                    placeholder: `Current password`,
                                                }),
                                                (0, X.jsx)(D, {
                                                    message: e.current_password,
                                                }),
                                            ],
                                        }),
                                        (0, X.jsxs)(`div`, {
                                            className: `grid gap-2`,
                                            children: [
                                                (0, X.jsx)(O, {
                                                    htmlFor: `password`,
                                                    children: `New password`,
                                                }),
                                                (0, X.jsx)(m, {
                                                    id: `password`,
                                                    ref: s,
                                                    name: `password`,
                                                    className: `mt-1 block w-full`,
                                                    autoComplete: `new-password`,
                                                    placeholder: `New password`,
                                                }),
                                                (0, X.jsx)(D, {
                                                    message: e.password,
                                                }),
                                            ],
                                        }),
                                        (0, X.jsxs)(`div`, {
                                            className: `grid gap-2`,
                                            children: [
                                                (0, X.jsx)(O, {
                                                    htmlFor: `password_confirmation`,
                                                    children: `Confirm password`,
                                                }),
                                                (0, X.jsx)(m, {
                                                    id: `password_confirmation`,
                                                    name: `password_confirmation`,
                                                    className: `mt-1 block w-full`,
                                                    autoComplete: `new-password`,
                                                    placeholder: `Confirm password`,
                                                }),
                                                (0, X.jsx)(D, {
                                                    message:
                                                        e.password_confirmation,
                                                }),
                                            ],
                                        }),
                                        (0, X.jsx)(`div`, {
                                            className: `flex items-center gap-4`,
                                            children: (0, X.jsx)(l, {
                                                disabled: t,
                                                'data-test': `update-password-button`,
                                                children: `Save password`,
                                            }),
                                        }),
                                    ],
                                }),
                        }),
                    ],
                }),
                e &&
                    (0, X.jsxs)(`div`, {
                        className: `space-y-6`,
                        children: [
                            (0, X.jsx)(E, {
                                variant: `small`,
                                title: `Two-factor authentication`,
                                description: `Manage your two-factor authentication settings`,
                            }),
                            i
                                ? (0, X.jsxs)(`div`, {
                                      className: `flex flex-col items-start justify-start space-y-4`,
                                      children: [
                                          (0, X.jsx)(`p`, {
                                              className: `text-sm text-muted-foreground`,
                                              children: `You will be prompted for a secure, random pin during login, which you can retrieve from the TOTP-supported application on your phone.`,
                                          }),
                                          (0, X.jsx)(`div`, {
                                              className: `relative inline`,
                                              children: (0, X.jsx)(r, {
                                                  ...se.form(),
                                                  children: ({
                                                      processing: e,
                                                  }) =>
                                                      (0, X.jsx)(l, {
                                                          variant: `destructive`,
                                                          type: `submit`,
                                                          disabled: e,
                                                          children: `Disable 2FA`,
                                                      }),
                                              }),
                                          }),
                                          (0, X.jsx)(Ce, {
                                              recoveryCodesList: _,
                                              fetchRecoveryCodes: v,
                                              errors: y,
                                          }),
                                      ],
                                  })
                                : (0, X.jsxs)(`div`, {
                                      className: `flex flex-col items-start justify-start space-y-4`,
                                      children: [
                                          (0, X.jsx)(`p`, {
                                              className: `text-sm text-muted-foreground`,
                                              children: `When you enable two-factor authentication, you will be prompted for a secure pin during login. This pin can be retrieved from a TOTP-supported application on your phone.`,
                                          }),
                                          (0, X.jsx)(`div`, {
                                              children: d
                                                  ? (0, X.jsxs)(l, {
                                                        onClick: () => x(!0),
                                                        children: [
                                                            (0, X.jsx)(R, {}),
                                                            `Continue setup`,
                                                        ],
                                                    })
                                                  : (0, X.jsx)(r, {
                                                        ...ie.form(),
                                                        onSuccess: () => x(!0),
                                                        children: ({
                                                            processing: e,
                                                        }) =>
                                                            (0, X.jsx)(l, {
                                                                type: `submit`,
                                                                disabled: e,
                                                                children: `Enable 2FA`,
                                                            }),
                                                    }),
                                          }),
                                      ],
                                  }),
                            (0, X.jsx)(Oe, {
                                isOpen: b,
                                onClose: () => x(!1),
                                requiresConfirmation: t,
                                twoFactorEnabled: i,
                                qrCodeSvg: u,
                                manualSetupKey: f,
                                clearSetupData: p,
                                fetchSetupData: g,
                                errors: y,
                            }),
                        ],
                    }),
                (0, X.jsx)(ye, { canManagePasskeys: a, passkeys: o }),
            ],
        })
    );
}
$.layout = { breadcrumbs: [{ title: `Security settings`, href: te() }] };
export { $ as default };
