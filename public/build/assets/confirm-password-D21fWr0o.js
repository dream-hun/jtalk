import { n as e, t } from './vendor-inertia-C-ctYATJ.js';
import { et as n } from './vendor-radix-C92RFvrB.js';
import { t as r } from './button-DTg8VAj1.js';
import { t as i } from './password-input-DblKbCf8.js';
import { n as a } from './wayfinder-D3ymjKEV.js';
import { t as o } from './input-error-0fpqe6UA.js';
import { t as s } from './label-Bi32WZ_t.js';
import { t as c } from './spinner-Co1CPAeO.js';
import { t as l } from './passkey-verify-bkTTo8-U.js';
import { n as u } from './confirm-DMic9n9e.js';
var d = (e) => ({ url: d.url(e), method: `get` });
((d.definition = {
    methods: [`get`, `head`],
    url: `/passkeys/confirm/options`,
}),
    (d.url = (e) => d.definition.url + a(e)),
    (d.get = (e) => ({ url: d.url(e), method: `get` })),
    (d.head = (e) => ({ url: d.url(e), method: `head` })));
var f = (e) => ({ action: d.url(e), method: `get` });
((f.get = (e) => ({ action: d.url(e), method: `get` })),
    (f.head = (e) => ({
        action: d.url({
            [e?.mergeQuery ? `mergeQuery` : `query`]: {
                _method: `HEAD`,
                ...(e?.query ?? e?.mergeQuery ?? {}),
            },
        }),
        method: `get`,
    })),
    (d.form = f));
var p = (e) => ({ url: p.url(e), method: `post` });
((p.definition = { methods: [`post`], url: `/passkeys/confirm` }),
    (p.url = (e) => p.definition.url + a(e)),
    (p.post = (e) => ({ url: p.url(e), method: `post` })));
var m = (e) => ({ action: p.url(e), method: `post` });
((m.post = (e) => ({ action: p.url(e), method: `post` })), (p.form = m));
var h = n();
function g() {
    return (0, h.jsxs)(h.Fragment, {
        children: [
            (0, h.jsx)(e, { title: `Confirm password` }),
            (0, h.jsx)(l, {
                routes: { options: d(), submit: p() },
                label: `Confirm with passkey`,
                loadingLabel: `Confirming...`,
                separator: `Or confirm with password`,
            }),
            (0, h.jsx)(t, {
                ...u.form(),
                resetOnSuccess: [`password`],
                children: ({ processing: e, errors: t }) =>
                    (0, h.jsxs)(`div`, {
                        className: `space-y-6`,
                        children: [
                            (0, h.jsxs)(`div`, {
                                className: `grid gap-2`,
                                children: [
                                    (0, h.jsx)(s, {
                                        htmlFor: `password`,
                                        children: `Password`,
                                    }),
                                    (0, h.jsx)(i, {
                                        id: `password`,
                                        name: `password`,
                                        placeholder: `Password`,
                                        autoComplete: `current-password`,
                                        autoFocus: !0,
                                    }),
                                    (0, h.jsx)(o, { message: t.password }),
                                ],
                            }),
                            (0, h.jsx)(`div`, {
                                className: `flex items-center`,
                                children: (0, h.jsxs)(r, {
                                    className: `w-full`,
                                    disabled: e,
                                    'data-test': `confirm-password-button`,
                                    children: [
                                        e && (0, h.jsx)(c, {}),
                                        `Confirm password`,
                                    ],
                                }),
                            }),
                        ],
                    }),
            }),
        ],
    });
}
g.layout = {
    title: `Confirm your password`,
    description: `This is a secure area of the application. Please confirm your password before continuing.`,
};
export { g as default };
