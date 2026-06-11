import { a as e } from './rolldown-runtime-C-57s9n3.js';
import { n as t, t as n } from './vendor-inertia-C-ctYATJ.js';
import { r } from './vendor-react-gF8_I9RY.js';
import { et as i } from './vendor-radix-C92RFvrB.js';
import { t as a } from './button-DTg8VAj1.js';
import { t as o } from './date-picker-DYVWyjU1.js';
import { a as s, i as c, n as l, r as u, t as d } from './select-Bz4o1eKy.js';
import { t as f } from './ellipsis-DD4nOoz3.js';
import { n as p, t as m } from './plus-Dx8gX_82.js';
import { t as h } from './trash-2-CSMOWFhK.js';
import { t as g } from './input-D7RkL3Of.js';
import {
    i as _,
    n as v,
    o as y,
    r as ee,
    s as b,
    t as x,
} from './dropdown-menu-BMfjFxpS.js';
import { n as S, t as C } from './wayfinder-D3ymjKEV.js';
import { t as w } from './works-DfO8-ZeY.js';
import { t as T } from './input-error-0fpqe6UA.js';
import { t as E } from './label-Bi32WZ_t.js';
import { t as D } from './spinner-Co1CPAeO.js';
import { t as te } from './checkbox-DU-ByQ84.js';
import {
    a as O,
    i as k,
    n as A,
    o as j,
    r as M,
    s as N,
    t as P,
} from './dialog-DJQtWJoP.js';
var F = e(r(), 1),
    I = (e) => ({ url: I.url(e), method: `get` });
((I.definition = { methods: [`get`, `head`], url: `/works` }),
    (I.url = (e) => I.definition.url + S(e)),
    (I.get = (e) => ({ url: I.url(e), method: `get` })),
    (I.head = (e) => ({ url: I.url(e), method: `head` })));
var L = (e) => ({ action: I.url(e), method: `get` });
((L.get = (e) => ({ action: I.url(e), method: `get` })),
    (L.head = (e) => ({
        action: I.url({
            [e?.mergeQuery ? `mergeQuery` : `query`]: {
                _method: `HEAD`,
                ...(e?.query ?? e?.mergeQuery ?? {}),
            },
        }),
        method: `get`,
    })),
    (I.form = L));
var R = (e) => ({ url: R.url(e), method: `get` });
((R.definition = { methods: [`get`, `head`], url: `/works/create` }),
    (R.url = (e) => R.definition.url + S(e)),
    (R.get = (e) => ({ url: R.url(e), method: `get` })),
    (R.head = (e) => ({ url: R.url(e), method: `head` })));
var z = (e) => ({ action: R.url(e), method: `get` });
((z.get = (e) => ({ action: R.url(e), method: `get` })),
    (z.head = (e) => ({
        action: R.url({
            [e?.mergeQuery ? `mergeQuery` : `query`]: {
                _method: `HEAD`,
                ...(e?.query ?? e?.mergeQuery ?? {}),
            },
        }),
        method: `get`,
    })),
    (R.form = z));
var B = (e) => ({ url: B.url(e), method: `post` });
((B.definition = { methods: [`post`], url: `/works` }),
    (B.url = (e) => B.definition.url + S(e)),
    (B.post = (e) => ({ url: B.url(e), method: `post` })));
var V = (e) => ({ action: B.url(e), method: `post` });
((V.post = (e) => ({ action: B.url(e), method: `post` })), (B.form = V));
var H = (e, t) => ({ url: H.url(e, t), method: `get` });
((H.definition = { methods: [`get`, `head`], url: `/works/{work}` }),
    (H.url = (e, t) => {
        ((typeof e == `string` || typeof e == `number`) && (e = { work: e }),
            typeof e == `object` &&
                !Array.isArray(e) &&
                `uuid` in e &&
                (e = { work: e.uuid }),
            Array.isArray(e) && (e = { work: e[0] }),
            (e = C(e)));
        let n = { work: typeof e.work == `object` ? e.work.uuid : e.work };
        return (
            H.definition.url
                .replace(`{work}`, n.work.toString())
                .replace(/\/+$/, ``) + S(t)
        );
    }),
    (H.get = (e, t) => ({ url: H.url(e, t), method: `get` })),
    (H.head = (e, t) => ({ url: H.url(e, t), method: `head` })));
var U = (e, t) => ({ action: H.url(e, t), method: `get` });
((U.get = (e, t) => ({ action: H.url(e, t), method: `get` })),
    (U.head = (e, t) => ({
        action: H.url(e, {
            [t?.mergeQuery ? `mergeQuery` : `query`]: {
                _method: `HEAD`,
                ...(t?.query ?? t?.mergeQuery ?? {}),
            },
        }),
        method: `get`,
    })),
    (H.form = U));
var W = (e, t) => ({ url: W.url(e, t), method: `get` });
((W.definition = { methods: [`get`, `head`], url: `/works/{work}/edit` }),
    (W.url = (e, t) => {
        ((typeof e == `string` || typeof e == `number`) && (e = { work: e }),
            typeof e == `object` &&
                !Array.isArray(e) &&
                `uuid` in e &&
                (e = { work: e.uuid }),
            Array.isArray(e) && (e = { work: e[0] }),
            (e = C(e)));
        let n = { work: typeof e.work == `object` ? e.work.uuid : e.work };
        return (
            W.definition.url
                .replace(`{work}`, n.work.toString())
                .replace(/\/+$/, ``) + S(t)
        );
    }),
    (W.get = (e, t) => ({ url: W.url(e, t), method: `get` })),
    (W.head = (e, t) => ({ url: W.url(e, t), method: `head` })));
var G = (e, t) => ({ action: W.url(e, t), method: `get` });
((G.get = (e, t) => ({ action: W.url(e, t), method: `get` })),
    (G.head = (e, t) => ({
        action: W.url(e, {
            [t?.mergeQuery ? `mergeQuery` : `query`]: {
                _method: `HEAD`,
                ...(t?.query ?? t?.mergeQuery ?? {}),
            },
        }),
        method: `get`,
    })),
    (W.form = G));
var K = (e, t) => ({ url: K.url(e, t), method: `put` });
((K.definition = { methods: [`put`, `patch`], url: `/works/{work}` }),
    (K.url = (e, t) => {
        ((typeof e == `string` || typeof e == `number`) && (e = { work: e }),
            typeof e == `object` &&
                !Array.isArray(e) &&
                `uuid` in e &&
                (e = { work: e.uuid }),
            Array.isArray(e) && (e = { work: e[0] }),
            (e = C(e)));
        let n = { work: typeof e.work == `object` ? e.work.uuid : e.work };
        return (
            K.definition.url
                .replace(`{work}`, n.work.toString())
                .replace(/\/+$/, ``) + S(t)
        );
    }),
    (K.put = (e, t) => ({ url: K.url(e, t), method: `put` })),
    (K.patch = (e, t) => ({ url: K.url(e, t), method: `patch` })));
var q = (e, t) => ({
    action: K.url(e, {
        [t?.mergeQuery ? `mergeQuery` : `query`]: {
            _method: `PUT`,
            ...(t?.query ?? t?.mergeQuery ?? {}),
        },
    }),
    method: `post`,
});
((q.put = (e, t) => ({
    action: K.url(e, {
        [t?.mergeQuery ? `mergeQuery` : `query`]: {
            _method: `PUT`,
            ...(t?.query ?? t?.mergeQuery ?? {}),
        },
    }),
    method: `post`,
})),
    (q.patch = (e, t) => ({
        action: K.url(e, {
            [t?.mergeQuery ? `mergeQuery` : `query`]: {
                _method: `PATCH`,
                ...(t?.query ?? t?.mergeQuery ?? {}),
            },
        }),
        method: `post`,
    })),
    (K.form = q));
var J = (e, t) => ({ url: J.url(e, t), method: `delete` });
((J.definition = { methods: [`delete`], url: `/works/{work}` }),
    (J.url = (e, t) => {
        ((typeof e == `string` || typeof e == `number`) && (e = { work: e }),
            typeof e == `object` &&
                !Array.isArray(e) &&
                `uuid` in e &&
                (e = { work: e.uuid }),
            Array.isArray(e) && (e = { work: e[0] }),
            (e = C(e)));
        let n = { work: typeof e.work == `object` ? e.work.uuid : e.work };
        return (
            J.definition.url
                .replace(`{work}`, n.work.toString())
                .replace(/\/+$/, ``) + S(t)
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
var X = {
        index: I,
        create: R,
        store: B,
        show: H,
        edit: W,
        update: K,
        destroy: J,
    },
    Z = i(),
    ne = {
        full_time: `Full-time`,
        part_time: `Part-time`,
        contract: `Contract`,
        freelance: `Freelance`,
        internship: `Internship`,
    };
function Q({ work: e, errors: t }) {
    let [n, r] = (0, F.useState)(e?.employment_type ?? `full_time`),
        [i, a] = (0, F.useState)(e?.is_current ?? !1),
        [f, p] = (0, F.useState)(
            e?.start_date ? new Date(e.start_date) : void 0,
        ),
        [m, h] = (0, F.useState)(e?.end_date ? new Date(e.end_date) : void 0);
    return (0, Z.jsxs)(Z.Fragment, {
        children: [
            (0, Z.jsx)(`input`, {
                type: `hidden`,
                name: `employment_type`,
                value: n,
            }),
            (0, Z.jsx)(`input`, {
                type: `hidden`,
                name: `is_current`,
                value: i ? `1` : `0`,
            }),
            (0, Z.jsxs)(`div`, {
                className: `grid grid-cols-2 gap-4`,
                children: [
                    (0, Z.jsxs)(`div`, {
                        className: `grid gap-2`,
                        children: [
                            (0, Z.jsx)(E, {
                                htmlFor: `title`,
                                children: `Title`,
                            }),
                            (0, Z.jsx)(g, {
                                id: `title`,
                                name: `title`,
                                defaultValue: e?.title ?? ``,
                                placeholder: `e.g. Software Engineer`,
                                required: !0,
                            }),
                            (0, Z.jsx)(T, { message: t.title }),
                        ],
                    }),
                    (0, Z.jsxs)(`div`, {
                        className: `grid gap-2`,
                        children: [
                            (0, Z.jsx)(E, {
                                htmlFor: `company`,
                                children: `Company`,
                            }),
                            (0, Z.jsx)(g, {
                                id: `company`,
                                name: `company`,
                                defaultValue: e?.company ?? ``,
                                placeholder: `e.g. Acme Inc.`,
                                required: !0,
                            }),
                            (0, Z.jsx)(T, { message: t.company }),
                        ],
                    }),
                ],
            }),
            (0, Z.jsxs)(`div`, {
                className: `grid grid-cols-2 gap-4`,
                children: [
                    (0, Z.jsxs)(`div`, {
                        className: `grid gap-2`,
                        children: [
                            (0, Z.jsx)(E, {
                                htmlFor: `logo`,
                                children: `Logo`,
                            }),
                            (0, Z.jsx)(g, {
                                id: `logo`,
                                name: `logo`,
                                defaultValue: e?.logo ?? ``,
                                placeholder: `Logo URL or name`,
                                required: !0,
                            }),
                            (0, Z.jsx)(T, { message: t.logo }),
                        ],
                    }),
                    (0, Z.jsxs)(`div`, {
                        className: `grid gap-2`,
                        children: [
                            (0, Z.jsx)(E, {
                                htmlFor: `location`,
                                children: `Location`,
                            }),
                            (0, Z.jsx)(g, {
                                id: `location`,
                                name: `location`,
                                defaultValue: e?.location ?? ``,
                                placeholder: `e.g. Remote`,
                                required: !0,
                            }),
                            (0, Z.jsx)(T, { message: t.location }),
                        ],
                    }),
                ],
            }),
            (0, Z.jsxs)(`div`, {
                className: `grid gap-2`,
                children: [
                    (0, Z.jsx)(E, {
                        htmlFor: `employment_type`,
                        children: `Employment Type`,
                    }),
                    (0, Z.jsxs)(d, {
                        value: n,
                        onValueChange: r,
                        children: [
                            (0, Z.jsx)(c, {
                                id: `employment_type`,
                                className: `w-full`,
                                children: (0, Z.jsx)(s, {}),
                            }),
                            (0, Z.jsxs)(l, {
                                children: [
                                    (0, Z.jsx)(u, {
                                        value: `full_time`,
                                        children: `Full-time`,
                                    }),
                                    (0, Z.jsx)(u, {
                                        value: `part_time`,
                                        children: `Part-time`,
                                    }),
                                    (0, Z.jsx)(u, {
                                        value: `contract`,
                                        children: `Contract`,
                                    }),
                                    (0, Z.jsx)(u, {
                                        value: `freelance`,
                                        children: `Freelance`,
                                    }),
                                    (0, Z.jsx)(u, {
                                        value: `internship`,
                                        children: `Internship`,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, Z.jsx)(T, { message: t.employment_type }),
                ],
            }),
            (0, Z.jsxs)(`div`, {
                className: `grid grid-cols-2 gap-4`,
                children: [
                    (0, Z.jsxs)(`div`, {
                        className: `grid gap-2`,
                        children: [
                            (0, Z.jsx)(E, { children: `Start Date` }),
                            (0, Z.jsx)(o, {
                                name: `start_date`,
                                value: f,
                                onChange: p,
                                placeholder: `Pick start date`,
                            }),
                            (0, Z.jsx)(T, { message: t.start_date }),
                        ],
                    }),
                    (0, Z.jsxs)(`div`, {
                        className: `grid gap-2`,
                        children: [
                            (0, Z.jsx)(E, { children: `End Date` }),
                            (0, Z.jsx)(o, {
                                name: `end_date`,
                                value: m,
                                onChange: h,
                                placeholder: `Pick end date`,
                                disabled: i,
                            }),
                            (0, Z.jsx)(T, { message: t.end_date }),
                        ],
                    }),
                ],
            }),
            (0, Z.jsxs)(`div`, {
                className: `flex items-center gap-2`,
                children: [
                    (0, Z.jsx)(te, {
                        id: `is_current`,
                        checked: i,
                        onCheckedChange: (e) => a(e === !0),
                    }),
                    (0, Z.jsx)(E, {
                        htmlFor: `is_current`,
                        children: `Currently working here`,
                    }),
                ],
            }),
            (0, Z.jsxs)(`div`, {
                className: `grid gap-2`,
                children: [
                    (0, Z.jsx)(E, {
                        htmlFor: `description`,
                        children: `Description`,
                    }),
                    (0, Z.jsx)(`textarea`, {
                        id: `description`,
                        name: `description`,
                        defaultValue: e?.description ?? ``,
                        placeholder: `Describe your role and responsibilities...`,
                        required: !0,
                        className: `border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 flex min-h-[100px] w-full min-w-0 rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm`,
                    }),
                    (0, Z.jsx)(T, { message: t.description }),
                ],
            }),
        ],
    });
}
function re({ open: e, onClose: t }) {
    return (0, Z.jsx)(P, {
        open: e,
        onOpenChange: (e) => !e && t(),
        children: (0, Z.jsxs)(M, {
            className: `sm:max-w-lg`,
            children: [
                (0, Z.jsxs)(j, {
                    children: [
                        (0, Z.jsx)(N, { children: `New Work Experience` }),
                        (0, Z.jsx)(k, {
                            children: `Add a work experience entry to your portfolio.`,
                        }),
                    ],
                }),
                (0, Z.jsx)(n, {
                    ...X.store.form(),
                    options: { preserveScroll: !0 },
                    onSuccess: t,
                    resetOnSuccess: !0,
                    children: ({ processing: e, errors: t }) =>
                        (0, Z.jsxs)(`div`, {
                            className: `max-h-[70vh] space-y-4 overflow-y-auto pr-1`,
                            children: [
                                (0, Z.jsx)(Q, { errors: t }),
                                (0, Z.jsxs)(O, {
                                    children: [
                                        (0, Z.jsx)(A, {
                                            asChild: !0,
                                            children: (0, Z.jsx)(a, {
                                                type: `button`,
                                                variant: `outline`,
                                                children: `Cancel`,
                                            }),
                                        }),
                                        (0, Z.jsxs)(a, {
                                            type: `submit`,
                                            disabled: e,
                                            children: [
                                                e && (0, Z.jsx)(D, {}),
                                                `Save`,
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                }),
            ],
        }),
    });
}
function ie({ work: e, onClose: t }) {
    return (0, Z.jsx)(P, {
        open: !0,
        onOpenChange: (e) => !e && t(),
        children: (0, Z.jsxs)(M, {
            className: `sm:max-w-lg`,
            children: [
                (0, Z.jsxs)(j, {
                    children: [
                        (0, Z.jsx)(N, { children: `Edit Work Experience` }),
                        (0, Z.jsx)(k, {
                            children: `Update the work experience entry.`,
                        }),
                    ],
                }),
                (0, Z.jsx)(n, {
                    ...X.update.form(e),
                    options: { preserveScroll: !0 },
                    onSuccess: t,
                    resetOnSuccess: !0,
                    children: ({ processing: t, errors: n }) =>
                        (0, Z.jsxs)(`div`, {
                            className: `max-h-[70vh] space-y-4 overflow-y-auto pr-1`,
                            children: [
                                (0, Z.jsx)(Q, { work: e, errors: n }),
                                (0, Z.jsxs)(O, {
                                    children: [
                                        (0, Z.jsx)(A, {
                                            asChild: !0,
                                            children: (0, Z.jsx)(a, {
                                                type: `button`,
                                                variant: `outline`,
                                                children: `Cancel`,
                                            }),
                                        }),
                                        (0, Z.jsxs)(a, {
                                            type: `submit`,
                                            disabled: t,
                                            children: [
                                                t && (0, Z.jsx)(D, {}),
                                                `Save`,
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                }),
            ],
        }),
    });
}
function ae({ work: e, onClose: t }) {
    return (0, Z.jsx)(P, {
        open: !0,
        onOpenChange: (e) => !e && t(),
        children: (0, Z.jsxs)(M, {
            children: [
                (0, Z.jsxs)(j, {
                    children: [
                        (0, Z.jsx)(N, { children: `Delete Work Experience` }),
                        (0, Z.jsxs)(k, {
                            children: [
                                `Are you sure you want to delete `,
                                (0, Z.jsx)(`strong`, { children: e.title }),
                                ` at`,
                                ` `,
                                (0, Z.jsx)(`strong`, { children: e.company }),
                                `? This action cannot be undone.`,
                            ],
                        }),
                    ],
                }),
                (0, Z.jsx)(n, {
                    ...X.destroy.form(e),
                    options: { preserveScroll: !0 },
                    onSuccess: t,
                    children: ({ processing: e }) =>
                        (0, Z.jsxs)(O, {
                            children: [
                                (0, Z.jsx)(A, {
                                    asChild: !0,
                                    children: (0, Z.jsx)(a, {
                                        type: `button`,
                                        variant: `outline`,
                                        children: `Cancel`,
                                    }),
                                }),
                                (0, Z.jsxs)(a, {
                                    type: `submit`,
                                    variant: `destructive`,
                                    disabled: e,
                                    children: [
                                        e && (0, Z.jsx)(D, {}),
                                        `Delete`,
                                    ],
                                }),
                            ],
                        }),
                }),
            ],
        }),
    });
}
function oe(e, t, n) {
    let r = new Date(e).getFullYear();
    return n
        ? `${r} – Present`
        : t
          ? `${r} – ${new Date(t).getFullYear()}`
          : `${r}`;
}
function $({ works: e }) {
    let [n, r] = (0, F.useState)(!1),
        [i, o] = (0, F.useState)(null),
        [s, c] = (0, F.useState)(null);
    return (0, Z.jsxs)(Z.Fragment, {
        children: [
            (0, Z.jsx)(t, { title: `Works` }),
            (0, Z.jsxs)(`div`, {
                className: `flex h-full flex-1 flex-col gap-4 p-4`,
                children: [
                    (0, Z.jsxs)(`div`, {
                        className: `flex items-center justify-between`,
                        children: [
                            (0, Z.jsxs)(`div`, {
                                children: [
                                    (0, Z.jsx)(`h1`, {
                                        className: `text-xl font-semibold tracking-tight`,
                                        children: `Works`,
                                    }),
                                    (0, Z.jsx)(`p`, {
                                        className: `text-sm text-muted-foreground`,
                                        children: `Manage your work experience.`,
                                    }),
                                ],
                            }),
                            (0, Z.jsxs)(a, {
                                onClick: () => r(!0),
                                children: [(0, Z.jsx)(m, {}), `New Work`],
                            }),
                        ],
                    }),
                    (0, Z.jsx)(`div`, {
                        className: `rounded-lg border`,
                        children: (0, Z.jsxs)(`table`, {
                            className: `w-full text-sm`,
                            children: [
                                (0, Z.jsx)(`thead`, {
                                    children: (0, Z.jsxs)(`tr`, {
                                        className: `border-b bg-muted/50`,
                                        children: [
                                            (0, Z.jsx)(`th`, {
                                                className: `px-4 py-3 text-left font-medium`,
                                                children: `Title`,
                                            }),
                                            (0, Z.jsx)(`th`, {
                                                className: `px-4 py-3 text-left font-medium`,
                                                children: `Company`,
                                            }),
                                            (0, Z.jsx)(`th`, {
                                                className: `px-4 py-3 text-left font-medium`,
                                                children: `Type`,
                                            }),
                                            (0, Z.jsx)(`th`, {
                                                className: `px-4 py-3 text-left font-medium`,
                                                children: `Period`,
                                            }),
                                            (0, Z.jsx)(`th`, {
                                                className: `px-4 py-3 text-right font-medium`,
                                                children: `Actions`,
                                            }),
                                        ],
                                    }),
                                }),
                                (0, Z.jsxs)(`tbody`, {
                                    children: [
                                        e.length === 0 &&
                                            (0, Z.jsx)(`tr`, {
                                                children: (0, Z.jsx)(`td`, {
                                                    colSpan: 5,
                                                    className: `px-4 py-8 text-center text-muted-foreground`,
                                                    children: `No work experience found. Add one to get started.`,
                                                }),
                                            }),
                                        e.map((e) =>
                                            (0, Z.jsxs)(
                                                `tr`,
                                                {
                                                    className: `border-b last:border-0 hover:bg-muted/30`,
                                                    children: [
                                                        (0, Z.jsx)(`td`, {
                                                            className: `px-4 py-3 font-medium`,
                                                            children: e.title,
                                                        }),
                                                        (0, Z.jsx)(`td`, {
                                                            className: `px-4 py-3 text-muted-foreground`,
                                                            children: e.company,
                                                        }),
                                                        (0, Z.jsx)(`td`, {
                                                            className: `px-4 py-3 text-muted-foreground`,
                                                            children:
                                                                ne[
                                                                    e
                                                                        .employment_type
                                                                ] ??
                                                                e.employment_type,
                                                        }),
                                                        (0, Z.jsx)(`td`, {
                                                            className: `px-4 py-3 text-muted-foreground`,
                                                            children: oe(
                                                                e.start_date,
                                                                e.end_date,
                                                                e.is_current,
                                                            ),
                                                        }),
                                                        (0, Z.jsx)(`td`, {
                                                            className: `px-4 py-3 text-right`,
                                                            children: (0,
                                                            Z.jsxs)(x, {
                                                                children: [
                                                                    (0, Z.jsx)(
                                                                        b,
                                                                        {
                                                                            asChild:
                                                                                !0,
                                                                            children:
                                                                                (0,
                                                                                Z.jsxs)(
                                                                                    a,
                                                                                    {
                                                                                        variant: `ghost`,
                                                                                        size: `icon`,
                                                                                        children:
                                                                                            [
                                                                                                (0,
                                                                                                Z.jsx)(
                                                                                                    f,
                                                                                                    {},
                                                                                                ),
                                                                                                (0,
                                                                                                Z.jsx)(
                                                                                                    `span`,
                                                                                                    {
                                                                                                        className: `sr-only`,
                                                                                                        children: `Actions`,
                                                                                                    },
                                                                                                ),
                                                                                            ],
                                                                                    },
                                                                                ),
                                                                        },
                                                                    ),
                                                                    (0, Z.jsx)(
                                                                        v,
                                                                        {
                                                                            align: `end`,
                                                                            children:
                                                                                (0,
                                                                                Z.jsxs)(
                                                                                    ee,
                                                                                    {
                                                                                        children:
                                                                                            [
                                                                                                (0,
                                                                                                Z.jsxs)(
                                                                                                    _,
                                                                                                    {
                                                                                                        onClick:
                                                                                                            () =>
                                                                                                                o(
                                                                                                                    e,
                                                                                                                ),
                                                                                                        children:
                                                                                                            [
                                                                                                                (0,
                                                                                                                Z.jsx)(
                                                                                                                    p,
                                                                                                                    {},
                                                                                                                ),
                                                                                                                `Edit`,
                                                                                                            ],
                                                                                                    },
                                                                                                ),
                                                                                                (0,
                                                                                                Z.jsx)(
                                                                                                    y,
                                                                                                    {},
                                                                                                ),
                                                                                                (0,
                                                                                                Z.jsxs)(
                                                                                                    _,
                                                                                                    {
                                                                                                        variant: `destructive`,
                                                                                                        onClick:
                                                                                                            () =>
                                                                                                                c(
                                                                                                                    e,
                                                                                                                ),
                                                                                                        children:
                                                                                                            [
                                                                                                                (0,
                                                                                                                Z.jsx)(
                                                                                                                    h,
                                                                                                                    {},
                                                                                                                ),
                                                                                                                `Delete`,
                                                                                                            ],
                                                                                                    },
                                                                                                ),
                                                                                            ],
                                                                                    },
                                                                                ),
                                                                        },
                                                                    ),
                                                                ],
                                                            }),
                                                        }),
                                                    ],
                                                },
                                                e.uuid,
                                            ),
                                        ),
                                    ],
                                }),
                            ],
                        }),
                    }),
                ],
            }),
            (0, Z.jsx)(re, { open: n, onClose: () => r(!1) }),
            i && (0, Z.jsx)(ie, { work: i, onClose: () => o(null) }, i.uuid),
            s && (0, Z.jsx)(ae, { work: s, onClose: () => c(null) }, s.uuid),
        ],
    });
}
$.layout = { breadcrumbs: [{ title: `Works`, href: w().url }] };
export { $ as default };
