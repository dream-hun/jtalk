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
    r as b,
    s as ee,
    t as te,
} from './dropdown-menu-BMfjFxpS.js';
import { n as x, t as S } from './wayfinder-D3ymjKEV.js';
import { t as ne } from './projects-BmJdXNFF.js';
import { t as C } from './input-error-0fpqe6UA.js';
import { t as w } from './label-Bi32WZ_t.js';
import { t as T } from './spinner-Co1CPAeO.js';
import { t as re } from './checkbox-DU-ByQ84.js';
import {
    a as E,
    i as D,
    n as O,
    o as k,
    r as A,
    s as j,
    t as M,
} from './dialog-DJQtWJoP.js';
import { t as N } from './badge-BbICtkl5.js';
var P = e(r(), 1),
    F = (e) => ({ url: F.url(e), method: `get` });
((F.definition = { methods: [`get`, `head`], url: `/projects` }),
    (F.url = (e) => F.definition.url + x(e)),
    (F.get = (e) => ({ url: F.url(e), method: `get` })),
    (F.head = (e) => ({ url: F.url(e), method: `head` })));
var I = (e) => ({ action: F.url(e), method: `get` });
((I.get = (e) => ({ action: F.url(e), method: `get` })),
    (I.head = (e) => ({
        action: F.url({
            [e?.mergeQuery ? `mergeQuery` : `query`]: {
                _method: `HEAD`,
                ...(e?.query ?? e?.mergeQuery ?? {}),
            },
        }),
        method: `get`,
    })),
    (F.form = I));
var L = (e) => ({ url: L.url(e), method: `get` });
((L.definition = { methods: [`get`, `head`], url: `/projects/create` }),
    (L.url = (e) => L.definition.url + x(e)),
    (L.get = (e) => ({ url: L.url(e), method: `get` })),
    (L.head = (e) => ({ url: L.url(e), method: `head` })));
var R = (e) => ({ action: L.url(e), method: `get` });
((R.get = (e) => ({ action: L.url(e), method: `get` })),
    (R.head = (e) => ({
        action: L.url({
            [e?.mergeQuery ? `mergeQuery` : `query`]: {
                _method: `HEAD`,
                ...(e?.query ?? e?.mergeQuery ?? {}),
            },
        }),
        method: `get`,
    })),
    (L.form = R));
var z = (e) => ({ url: z.url(e), method: `post` });
((z.definition = { methods: [`post`], url: `/projects` }),
    (z.url = (e) => z.definition.url + x(e)),
    (z.post = (e) => ({ url: z.url(e), method: `post` })));
var B = (e) => ({ action: z.url(e), method: `post` });
((B.post = (e) => ({ action: z.url(e), method: `post` })), (z.form = B));
var V = (e, t) => ({ url: V.url(e, t), method: `get` });
((V.definition = { methods: [`get`, `head`], url: `/projects/{project}` }),
    (V.url = (e, t) => {
        ((typeof e == `string` || typeof e == `number`) && (e = { project: e }),
            typeof e == `object` &&
                !Array.isArray(e) &&
                `uuid` in e &&
                (e = { project: e.uuid }),
            Array.isArray(e) && (e = { project: e[0] }),
            (e = S(e)));
        let n = {
            project: typeof e.project == `object` ? e.project.uuid : e.project,
        };
        return (
            V.definition.url
                .replace(`{project}`, n.project.toString())
                .replace(/\/+$/, ``) + x(t)
        );
    }),
    (V.get = (e, t) => ({ url: V.url(e, t), method: `get` })),
    (V.head = (e, t) => ({ url: V.url(e, t), method: `head` })));
var H = (e, t) => ({ action: V.url(e, t), method: `get` });
((H.get = (e, t) => ({ action: V.url(e, t), method: `get` })),
    (H.head = (e, t) => ({
        action: V.url(e, {
            [t?.mergeQuery ? `mergeQuery` : `query`]: {
                _method: `HEAD`,
                ...(t?.query ?? t?.mergeQuery ?? {}),
            },
        }),
        method: `get`,
    })),
    (V.form = H));
var U = (e, t) => ({ url: U.url(e, t), method: `get` });
((U.definition = { methods: [`get`, `head`], url: `/projects/{project}/edit` }),
    (U.url = (e, t) => {
        ((typeof e == `string` || typeof e == `number`) && (e = { project: e }),
            typeof e == `object` &&
                !Array.isArray(e) &&
                `uuid` in e &&
                (e = { project: e.uuid }),
            Array.isArray(e) && (e = { project: e[0] }),
            (e = S(e)));
        let n = {
            project: typeof e.project == `object` ? e.project.uuid : e.project,
        };
        return (
            U.definition.url
                .replace(`{project}`, n.project.toString())
                .replace(/\/+$/, ``) + x(t)
        );
    }),
    (U.get = (e, t) => ({ url: U.url(e, t), method: `get` })),
    (U.head = (e, t) => ({ url: U.url(e, t), method: `head` })));
var W = (e, t) => ({ action: U.url(e, t), method: `get` });
((W.get = (e, t) => ({ action: U.url(e, t), method: `get` })),
    (W.head = (e, t) => ({
        action: U.url(e, {
            [t?.mergeQuery ? `mergeQuery` : `query`]: {
                _method: `HEAD`,
                ...(t?.query ?? t?.mergeQuery ?? {}),
            },
        }),
        method: `get`,
    })),
    (U.form = W));
var G = (e, t) => ({ url: G.url(e, t), method: `put` });
((G.definition = { methods: [`put`, `patch`], url: `/projects/{project}` }),
    (G.url = (e, t) => {
        ((typeof e == `string` || typeof e == `number`) && (e = { project: e }),
            typeof e == `object` &&
                !Array.isArray(e) &&
                `uuid` in e &&
                (e = { project: e.uuid }),
            Array.isArray(e) && (e = { project: e[0] }),
            (e = S(e)));
        let n = {
            project: typeof e.project == `object` ? e.project.uuid : e.project,
        };
        return (
            G.definition.url
                .replace(`{project}`, n.project.toString())
                .replace(/\/+$/, ``) + x(t)
        );
    }),
    (G.put = (e, t) => ({ url: G.url(e, t), method: `put` })),
    (G.patch = (e, t) => ({ url: G.url(e, t), method: `patch` })));
var K = (e, t) => ({
    action: G.url(e, {
        [t?.mergeQuery ? `mergeQuery` : `query`]: {
            _method: `PUT`,
            ...(t?.query ?? t?.mergeQuery ?? {}),
        },
    }),
    method: `post`,
});
((K.put = (e, t) => ({
    action: G.url(e, {
        [t?.mergeQuery ? `mergeQuery` : `query`]: {
            _method: `PUT`,
            ...(t?.query ?? t?.mergeQuery ?? {}),
        },
    }),
    method: `post`,
})),
    (K.patch = (e, t) => ({
        action: G.url(e, {
            [t?.mergeQuery ? `mergeQuery` : `query`]: {
                _method: `PATCH`,
                ...(t?.query ?? t?.mergeQuery ?? {}),
            },
        }),
        method: `post`,
    })),
    (G.form = K));
var q = (e, t) => ({ url: q.url(e, t), method: `delete` });
((q.definition = { methods: [`delete`], url: `/projects/{project}` }),
    (q.url = (e, t) => {
        ((typeof e == `string` || typeof e == `number`) && (e = { project: e }),
            typeof e == `object` &&
                !Array.isArray(e) &&
                `uuid` in e &&
                (e = { project: e.uuid }),
            Array.isArray(e) && (e = { project: e[0] }),
            (e = S(e)));
        let n = {
            project: typeof e.project == `object` ? e.project.uuid : e.project,
        };
        return (
            q.definition.url
                .replace(`{project}`, n.project.toString())
                .replace(/\/+$/, ``) + x(t)
        );
    }),
    (q.delete = (e, t) => ({ url: q.url(e, t), method: `delete` })));
var J = (e, t) => ({
    action: q.url(e, {
        [t?.mergeQuery ? `mergeQuery` : `query`]: {
            _method: `DELETE`,
            ...(t?.query ?? t?.mergeQuery ?? {}),
        },
    }),
    method: `post`,
});
((J.delete = (e, t) => ({
    action: q.url(e, {
        [t?.mergeQuery ? `mergeQuery` : `query`]: {
            _method: `DELETE`,
            ...(t?.query ?? t?.mergeQuery ?? {}),
        },
    }),
    method: `post`,
})),
    (q.form = J));
var Y = {
        index: F,
        create: L,
        store: z,
        show: V,
        edit: U,
        update: G,
        destroy: q,
    },
    X = i(),
    ie = {
        'web-application': `Web App`,
        'mobile-application': `Mobile App`,
        api: `API`,
        'cli-tool': `CLI Tool`,
        library: `Library`,
        other: `Other`,
    },
    Z = {
        'in-progress': `default`,
        completed: `secondary`,
        'on-hold': `outline`,
        archived: `destructive`,
    };
function ae({ name: e, currentImage: t, label: n, error: r }) {
    let i = t ? `/storage/${t}` : null,
        [a, o] = (0, P.useState)(i),
        s = (0, P.useRef)(null);
    (0, P.useEffect)(
        () => () => {
            s.current && URL.revokeObjectURL(s.current);
        },
        [],
    );
    function c(e) {
        s.current &&= (URL.revokeObjectURL(s.current), null);
        let t = e.target.files?.[0];
        t ? ((s.current = URL.createObjectURL(t)), o(s.current)) : o(i);
    }
    return (0, X.jsxs)(`div`, {
        className: `grid gap-2`,
        children: [
            (0, X.jsx)(w, { htmlFor: e, children: n }),
            a &&
                (0, X.jsx)(`img`, {
                    src: a,
                    alt: `Preview`,
                    className: `h-32 w-full rounded-md border object-cover`,
                }),
            (0, X.jsx)(g, {
                id: e,
                name: e,
                type: `file`,
                accept: `image/*,.avif`,
                onChange: c,
            }),
            (0, X.jsx)(C, { message: r }),
        ],
    });
}
function Q({ project: e, allTags: t, errors: n }) {
    let [r, i] = (0, P.useState)(e?.type ?? `web-application`),
        [a, f] = (0, P.useState)(e?.project_status ?? `in-progress`),
        [p, m] = (0, P.useState)(e ? e.tags.map((e) => e.id) : []),
        [h, _] = (0, P.useState)(
            e?.starting_date ? new Date(e.starting_date) : void 0,
        ),
        [v, y] = (0, P.useState)(
            e?.ending_date ? new Date(e.ending_date) : void 0,
        );
    function b(e) {
        m((t) => (t.includes(e) ? t.filter((t) => t !== e) : [...t, e]));
    }
    return (0, X.jsxs)(X.Fragment, {
        children: [
            (0, X.jsx)(`input`, { type: `hidden`, name: `type`, value: r }),
            (0, X.jsx)(`input`, {
                type: `hidden`,
                name: `project_status`,
                value: a,
            }),
            p.map((e) =>
                (0, X.jsx)(
                    `input`,
                    { type: `hidden`, name: `tag_ids[]`, value: e },
                    e,
                ),
            ),
            (0, X.jsxs)(`div`, {
                className: `grid gap-2`,
                children: [
                    (0, X.jsx)(w, { htmlFor: `title`, children: `Title` }),
                    (0, X.jsx)(g, {
                        id: `title`,
                        name: `title`,
                        defaultValue: e?.title ?? ``,
                        placeholder: `Project name`,
                        required: !0,
                    }),
                    (0, X.jsx)(C, { message: n.title }),
                ],
            }),
            (0, X.jsxs)(`div`, {
                className: `grid gap-2`,
                children: [
                    (0, X.jsx)(w, {
                        htmlFor: `description`,
                        children: `Description`,
                    }),
                    (0, X.jsx)(`textarea`, {
                        id: `description`,
                        name: `description`,
                        defaultValue: e?.description ?? ``,
                        placeholder: `Describe the project...`,
                        className: `border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 flex min-h-[80px] w-full min-w-0 rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm`,
                    }),
                    (0, X.jsx)(C, { message: n.description }),
                ],
            }),
            (0, X.jsxs)(`div`, {
                className: `grid grid-cols-2 gap-4`,
                children: [
                    (0, X.jsxs)(`div`, {
                        className: `grid gap-2`,
                        children: [
                            (0, X.jsx)(w, {
                                htmlFor: `type`,
                                children: `Type`,
                            }),
                            (0, X.jsxs)(d, {
                                value: r,
                                onValueChange: i,
                                children: [
                                    (0, X.jsx)(c, {
                                        id: `type`,
                                        className: `w-full`,
                                        children: (0, X.jsx)(s, {}),
                                    }),
                                    (0, X.jsxs)(l, {
                                        children: [
                                            (0, X.jsx)(u, {
                                                value: `web-application`,
                                                children: `Web Application`,
                                            }),
                                            (0, X.jsx)(u, {
                                                value: `mobile-application`,
                                                children: `Mobile Application`,
                                            }),
                                            (0, X.jsx)(u, {
                                                value: `api`,
                                                children: `API`,
                                            }),
                                            (0, X.jsx)(u, {
                                                value: `cli-tool`,
                                                children: `CLI Tool`,
                                            }),
                                            (0, X.jsx)(u, {
                                                value: `library`,
                                                children: `Library`,
                                            }),
                                            (0, X.jsx)(u, {
                                                value: `other`,
                                                children: `Other`,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, X.jsx)(C, { message: n.type }),
                        ],
                    }),
                    (0, X.jsxs)(`div`, {
                        className: `grid gap-2`,
                        children: [
                            (0, X.jsx)(w, {
                                htmlFor: `project_status`,
                                children: `Status`,
                            }),
                            (0, X.jsxs)(d, {
                                value: a,
                                onValueChange: f,
                                children: [
                                    (0, X.jsx)(c, {
                                        id: `project_status`,
                                        className: `w-full`,
                                        children: (0, X.jsx)(s, {}),
                                    }),
                                    (0, X.jsxs)(l, {
                                        children: [
                                            (0, X.jsx)(u, {
                                                value: `in-progress`,
                                                children: `In Progress`,
                                            }),
                                            (0, X.jsx)(u, {
                                                value: `completed`,
                                                children: `Completed`,
                                            }),
                                            (0, X.jsx)(u, {
                                                value: `on-hold`,
                                                children: `On Hold`,
                                            }),
                                            (0, X.jsx)(u, {
                                                value: `archived`,
                                                children: `Archived`,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, X.jsx)(C, { message: n.project_status }),
                        ],
                    }),
                ],
            }),
            (0, X.jsxs)(`div`, {
                className: `grid grid-cols-2 gap-4`,
                children: [
                    (0, X.jsxs)(`div`, {
                        className: `grid gap-2`,
                        children: [
                            (0, X.jsx)(w, { children: `Start Date` }),
                            (0, X.jsx)(o, {
                                name: `starting_date`,
                                value: h,
                                onChange: _,
                                placeholder: `Pick start date`,
                            }),
                            (0, X.jsx)(C, { message: n.starting_date }),
                        ],
                    }),
                    (0, X.jsxs)(`div`, {
                        className: `grid gap-2`,
                        children: [
                            (0, X.jsx)(w, { children: `End Date` }),
                            (0, X.jsx)(o, {
                                name: `ending_date`,
                                value: v,
                                onChange: y,
                                placeholder: `Pick end date`,
                            }),
                            (0, X.jsx)(C, { message: n.ending_date }),
                        ],
                    }),
                ],
            }),
            (0, X.jsxs)(`div`, {
                className: `grid grid-cols-2 gap-4`,
                children: [
                    (0, X.jsxs)(`div`, {
                        className: `grid gap-2`,
                        children: [
                            (0, X.jsx)(w, {
                                htmlFor: `source_code_url`,
                                children: `Source Code URL`,
                            }),
                            (0, X.jsx)(g, {
                                id: `source_code_url`,
                                name: `source_code_url`,
                                type: `url`,
                                defaultValue: e?.source_code_url ?? ``,
                                placeholder: `https://github.com/...`,
                            }),
                            (0, X.jsx)(C, { message: n.source_code_url }),
                        ],
                    }),
                    (0, X.jsxs)(`div`, {
                        className: `grid gap-2`,
                        children: [
                            (0, X.jsx)(w, {
                                htmlFor: `live_url`,
                                children: `Live URL`,
                            }),
                            (0, X.jsx)(g, {
                                id: `live_url`,
                                name: `live_url`,
                                type: `url`,
                                defaultValue: e?.live_url ?? ``,
                                placeholder: `https://...`,
                            }),
                            (0, X.jsx)(C, { message: n.live_url }),
                        ],
                    }),
                ],
            }),
            (0, X.jsx)(ae, {
                name: `featured_image`,
                currentImage: e?.featured_image,
                label: `Featured Image`,
                error: n.featured_image,
            }),
            t.length > 0 &&
                (0, X.jsxs)(`div`, {
                    className: `grid gap-2`,
                    children: [
                        (0, X.jsx)(w, { children: `Tags` }),
                        (0, X.jsx)(`div`, {
                            className: `grid grid-cols-2 gap-2 rounded-md border p-3`,
                            children: t.map((e) =>
                                (0, X.jsxs)(
                                    `div`,
                                    {
                                        className: `flex items-center gap-2`,
                                        children: [
                                            (0, X.jsx)(re, {
                                                id: `tag-${e.uuid}`,
                                                checked: p.includes(e.id),
                                                onCheckedChange: () => b(e.id),
                                            }),
                                            (0, X.jsx)(w, {
                                                htmlFor: `tag-${e.uuid}`,
                                                className: `cursor-pointer font-normal`,
                                                children: e.name,
                                            }),
                                        ],
                                    },
                                    e.uuid,
                                ),
                            ),
                        }),
                        (0, X.jsx)(C, { message: n.tag_ids }),
                    ],
                }),
        ],
    });
}
function oe({ open: e, onClose: t, allTags: r }) {
    return (0, X.jsx)(M, {
        open: e,
        onOpenChange: (e) => !e && t(),
        children: (0, X.jsxs)(A, {
            className: `sm:max-w-lg`,
            children: [
                (0, X.jsxs)(k, {
                    children: [
                        (0, X.jsx)(j, { children: `New Project` }),
                        (0, X.jsx)(D, {
                            children: `Add a new project to your portfolio.`,
                        }),
                    ],
                }),
                (0, X.jsx)(n, {
                    ...Y.store.form(),
                    options: { preserveScroll: !0 },
                    onSuccess: t,
                    resetOnSuccess: !0,
                    children: ({ processing: e, errors: t }) =>
                        (0, X.jsxs)(`div`, {
                            className: `max-h-[70vh] space-y-4 overflow-y-auto pr-1`,
                            children: [
                                (0, X.jsx)(Q, { allTags: r, errors: t }),
                                (0, X.jsxs)(E, {
                                    children: [
                                        (0, X.jsx)(O, {
                                            asChild: !0,
                                            children: (0, X.jsx)(a, {
                                                type: `button`,
                                                variant: `outline`,
                                                children: `Cancel`,
                                            }),
                                        }),
                                        (0, X.jsxs)(a, {
                                            type: `submit`,
                                            disabled: e,
                                            children: [
                                                e && (0, X.jsx)(T, {}),
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
function se({ project: e, allTags: t, onClose: r }) {
    return (0, X.jsx)(M, {
        open: !0,
        onOpenChange: (e) => !e && r(),
        children: (0, X.jsxs)(A, {
            className: `sm:max-w-lg`,
            children: [
                (0, X.jsxs)(k, {
                    children: [
                        (0, X.jsx)(j, { children: `Edit Project` }),
                        (0, X.jsx)(D, {
                            children: `Update the project details.`,
                        }),
                    ],
                }),
                (0, X.jsx)(n, {
                    ...Y.update.form(e),
                    options: { preserveScroll: !0 },
                    onSuccess: r,
                    resetOnSuccess: !0,
                    children: ({ processing: n, errors: r }) =>
                        (0, X.jsxs)(`div`, {
                            className: `max-h-[70vh] space-y-4 overflow-y-auto pr-1`,
                            children: [
                                (0, X.jsx)(Q, {
                                    project: e,
                                    allTags: t,
                                    errors: r,
                                }),
                                (0, X.jsxs)(E, {
                                    children: [
                                        (0, X.jsx)(O, {
                                            asChild: !0,
                                            children: (0, X.jsx)(a, {
                                                type: `button`,
                                                variant: `outline`,
                                                children: `Cancel`,
                                            }),
                                        }),
                                        (0, X.jsxs)(a, {
                                            type: `submit`,
                                            disabled: n,
                                            children: [
                                                n && (0, X.jsx)(T, {}),
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
function ce({ project: e, onClose: t }) {
    return (0, X.jsx)(M, {
        open: !0,
        onOpenChange: (e) => !e && t(),
        children: (0, X.jsxs)(A, {
            children: [
                (0, X.jsxs)(k, {
                    children: [
                        (0, X.jsx)(j, { children: `Delete Project` }),
                        (0, X.jsxs)(D, {
                            children: [
                                `Are you sure you want to delete `,
                                (0, X.jsx)(`strong`, { children: e.title }),
                                `? This action cannot be undone.`,
                            ],
                        }),
                    ],
                }),
                (0, X.jsx)(n, {
                    ...Y.destroy.form(e),
                    options: { preserveScroll: !0 },
                    onSuccess: t,
                    children: ({ processing: e }) =>
                        (0, X.jsxs)(E, {
                            children: [
                                (0, X.jsx)(O, {
                                    asChild: !0,
                                    children: (0, X.jsx)(a, {
                                        type: `button`,
                                        variant: `outline`,
                                        children: `Cancel`,
                                    }),
                                }),
                                (0, X.jsxs)(a, {
                                    type: `submit`,
                                    variant: `destructive`,
                                    disabled: e,
                                    children: [
                                        e && (0, X.jsx)(T, {}),
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
function $({ projects: e, tags: n }) {
    let [r, i] = (0, P.useState)(!1),
        [o, s] = (0, P.useState)(null),
        [c, l] = (0, P.useState)(null);
    return (0, X.jsxs)(X.Fragment, {
        children: [
            (0, X.jsx)(t, { title: `Projects` }),
            (0, X.jsxs)(`div`, {
                className: `flex h-full flex-1 flex-col gap-4 p-4`,
                children: [
                    (0, X.jsxs)(`div`, {
                        className: `flex items-center justify-between`,
                        children: [
                            (0, X.jsxs)(`div`, {
                                children: [
                                    (0, X.jsx)(`h1`, {
                                        className: `text-xl font-semibold tracking-tight`,
                                        children: `Projects`,
                                    }),
                                    (0, X.jsx)(`p`, {
                                        className: `text-sm text-muted-foreground`,
                                        children: `Manage your portfolio projects.`,
                                    }),
                                ],
                            }),
                            (0, X.jsxs)(a, {
                                onClick: () => i(!0),
                                children: [(0, X.jsx)(m, {}), `New Project`],
                            }),
                        ],
                    }),
                    (0, X.jsx)(`div`, {
                        className: `rounded-lg border`,
                        children: (0, X.jsxs)(`table`, {
                            className: `w-full text-sm`,
                            children: [
                                (0, X.jsx)(`thead`, {
                                    children: (0, X.jsxs)(`tr`, {
                                        className: `border-b bg-muted/50`,
                                        children: [
                                            (0, X.jsx)(`th`, {
                                                className: `px-4 py-3 text-left font-medium`,
                                                children: `Title`,
                                            }),
                                            (0, X.jsx)(`th`, {
                                                className: `px-4 py-3 text-left font-medium`,
                                                children: `Type`,
                                            }),
                                            (0, X.jsx)(`th`, {
                                                className: `px-4 py-3 text-left font-medium`,
                                                children: `Status`,
                                            }),
                                            (0, X.jsx)(`th`, {
                                                className: `px-4 py-3 text-left font-medium`,
                                                children: `Tags`,
                                            }),
                                            (0, X.jsx)(`th`, {
                                                className: `px-4 py-3 text-right font-medium`,
                                                children: `Actions`,
                                            }),
                                        ],
                                    }),
                                }),
                                (0, X.jsxs)(`tbody`, {
                                    children: [
                                        e.length === 0 &&
                                            (0, X.jsx)(`tr`, {
                                                children: (0, X.jsx)(`td`, {
                                                    colSpan: 5,
                                                    className: `px-4 py-8 text-center text-muted-foreground`,
                                                    children: `No projects found. Add one to get started.`,
                                                }),
                                            }),
                                        e.map((e) =>
                                            (0, X.jsxs)(
                                                `tr`,
                                                {
                                                    className: `border-b last:border-0 hover:bg-muted/30`,
                                                    children: [
                                                        (0, X.jsx)(`td`, {
                                                            className: `px-4 py-3 font-medium`,
                                                            children: e.title,
                                                        }),
                                                        (0, X.jsx)(`td`, {
                                                            className: `px-4 py-3`,
                                                            children: (0,
                                                            X.jsx)(N, {
                                                                variant: `outline`,
                                                                children:
                                                                    ie[
                                                                        e.type
                                                                    ] ?? e.type,
                                                            }),
                                                        }),
                                                        (0, X.jsx)(`td`, {
                                                            className: `px-4 py-3`,
                                                            children: (0,
                                                            X.jsx)(N, {
                                                                variant:
                                                                    Z[
                                                                        e
                                                                            .project_status
                                                                    ] ??
                                                                    `secondary`,
                                                                children:
                                                                    e.project_status,
                                                            }),
                                                        }),
                                                        (0, X.jsx)(`td`, {
                                                            className: `px-4 py-3`,
                                                            children: (0,
                                                            X.jsx)(`div`, {
                                                                className: `flex flex-wrap gap-1`,
                                                                children:
                                                                    e.tags.map(
                                                                        (e) =>
                                                                            (0,
                                                                            X.jsx)(
                                                                                N,
                                                                                {
                                                                                    variant: `secondary`,
                                                                                    children:
                                                                                        e.name,
                                                                                },
                                                                                e.uuid,
                                                                            ),
                                                                    ),
                                                            }),
                                                        }),
                                                        (0, X.jsx)(`td`, {
                                                            className: `px-4 py-3 text-right`,
                                                            children: (0,
                                                            X.jsxs)(te, {
                                                                children: [
                                                                    (0, X.jsx)(
                                                                        ee,
                                                                        {
                                                                            asChild:
                                                                                !0,
                                                                            children:
                                                                                (0,
                                                                                X.jsxs)(
                                                                                    a,
                                                                                    {
                                                                                        variant: `ghost`,
                                                                                        size: `icon`,
                                                                                        children:
                                                                                            [
                                                                                                (0,
                                                                                                X.jsx)(
                                                                                                    f,
                                                                                                    {},
                                                                                                ),
                                                                                                (0,
                                                                                                X.jsx)(
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
                                                                    (0, X.jsx)(
                                                                        v,
                                                                        {
                                                                            align: `end`,
                                                                            children:
                                                                                (0,
                                                                                X.jsxs)(
                                                                                    b,
                                                                                    {
                                                                                        children:
                                                                                            [
                                                                                                (0,
                                                                                                X.jsxs)(
                                                                                                    _,
                                                                                                    {
                                                                                                        onClick:
                                                                                                            () =>
                                                                                                                s(
                                                                                                                    e,
                                                                                                                ),
                                                                                                        children:
                                                                                                            [
                                                                                                                (0,
                                                                                                                X.jsx)(
                                                                                                                    p,
                                                                                                                    {},
                                                                                                                ),
                                                                                                                `Edit`,
                                                                                                            ],
                                                                                                    },
                                                                                                ),
                                                                                                (0,
                                                                                                X.jsx)(
                                                                                                    y,
                                                                                                    {},
                                                                                                ),
                                                                                                (0,
                                                                                                X.jsxs)(
                                                                                                    _,
                                                                                                    {
                                                                                                        variant: `destructive`,
                                                                                                        onClick:
                                                                                                            () =>
                                                                                                                l(
                                                                                                                    e,
                                                                                                                ),
                                                                                                        children:
                                                                                                            [
                                                                                                                (0,
                                                                                                                X.jsx)(
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
            (0, X.jsx)(oe, { open: r, onClose: () => i(!1), allTags: n }),
            o &&
                (0, X.jsx)(
                    se,
                    { project: o, allTags: n, onClose: () => s(null) },
                    o.uuid,
                ),
            c && (0, X.jsx)(ce, { project: c, onClose: () => l(null) }, c.uuid),
        ],
    });
}
$.layout = { breadcrumbs: [{ title: `Projects`, href: ne().url }] };
export { $ as default };
