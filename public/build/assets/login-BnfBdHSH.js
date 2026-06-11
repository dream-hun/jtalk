import { n as e, t } from './vendor-inertia-C-ctYATJ.js';
import { et as n } from './vendor-radix-C92RFvrB.js';
import { t as r } from './button-DTg8VAj1.js';
import { t as i } from './password-input-DblKbCf8.js';
import { t as a } from './input-D7RkL3Of.js';
import { n as o } from './wayfinder-D3ymjKEV.js';
import { a as s } from './routes-DWAnLukZ.js';
import { t as c } from './input-error-0fpqe6UA.js';
import { t as l } from './label-Bi32WZ_t.js';
import { t as u } from './spinner-Co1CPAeO.js';
import { t as d } from './passkey-verify-bkTTo8-U.js';
import { t as f } from './text-link-Ca_Eg3Oe.js';
import { n as p } from './password-PuikkjFY.js';
import { t as m } from './checkbox-DU-ByQ84.js';
var h = (e) => ({ url: h.url(e), method: `post` });
((h.definition = { methods: [`post`], url: `/login` }),
    (h.url = (e) => h.definition.url + o(e)),
    (h.post = (e) => ({ url: h.url(e), method: `post` })));
var g = (e) => ({ action: h.url(e), method: `post` });
((g.post = (e) => ({ action: h.url(e), method: `post` })),
    (h.form = g),
    Object.assign(h, h));
var _ = n();
function v({ status: n, canResetPassword: o, canRegister: g }) {
    return (0, _.jsxs)(_.Fragment, {
        children: [
            (0, _.jsx)(e, { title: `Log in` }),
            (0, _.jsx)(d, {}),
            (0, _.jsx)(t, {
                ...h.form(),
                resetOnSuccess: [`password`],
                className: `flex flex-col gap-6`,
                children: ({ processing: e, errors: t }) =>
                    (0, _.jsxs)(_.Fragment, {
                        children: [
                            (0, _.jsxs)(`div`, {
                                className: `grid gap-6`,
                                children: [
                                    (0, _.jsxs)(`div`, {
                                        className: `grid gap-2`,
                                        children: [
                                            (0, _.jsx)(l, {
                                                htmlFor: `email`,
                                                children: `Email address`,
                                            }),
                                            (0, _.jsx)(a, {
                                                id: `email`,
                                                type: `email`,
                                                name: `email`,
                                                required: !0,
                                                autoFocus: !0,
                                                tabIndex: 1,
                                                autoComplete: `email`,
                                                placeholder: `email@example.com`,
                                            }),
                                            (0, _.jsx)(c, { message: t.email }),
                                        ],
                                    }),
                                    (0, _.jsxs)(`div`, {
                                        className: `grid gap-2`,
                                        children: [
                                            (0, _.jsxs)(`div`, {
                                                className: `flex items-center`,
                                                children: [
                                                    (0, _.jsx)(l, {
                                                        htmlFor: `password`,
                                                        children: `Password`,
                                                    }),
                                                    o &&
                                                        (0, _.jsx)(f, {
                                                            href: p(),
                                                            className: `ml-auto text-sm`,
                                                            tabIndex: 5,
                                                            children: `Forgot password?`,
                                                        }),
                                                ],
                                            }),
                                            (0, _.jsx)(i, {
                                                id: `password`,
                                                name: `password`,
                                                required: !0,
                                                tabIndex: 2,
                                                autoComplete: `current-password`,
                                                placeholder: `Password`,
                                            }),
                                            (0, _.jsx)(c, {
                                                message: t.password,
                                            }),
                                        ],
                                    }),
                                    (0, _.jsxs)(`div`, {
                                        className: `flex items-center space-x-3`,
                                        children: [
                                            (0, _.jsx)(m, {
                                                id: `remember`,
                                                name: `remember`,
                                                tabIndex: 3,
                                            }),
                                            (0, _.jsx)(l, {
                                                htmlFor: `remember`,
                                                children: `Remember me`,
                                            }),
                                        ],
                                    }),
                                    (0, _.jsxs)(r, {
                                        type: `submit`,
                                        className: `mt-4 w-full`,
                                        tabIndex: 4,
                                        disabled: e,
                                        'data-test': `login-button`,
                                        children: [
                                            e && (0, _.jsx)(u, {}),
                                            `Log in`,
                                        ],
                                    }),
                                ],
                            }),
                            g &&
                                (0, _.jsxs)(`div`, {
                                    className: `text-center text-sm text-muted-foreground`,
                                    children: [
                                        `Don't have an account?`,
                                        ` `,
                                        (0, _.jsx)(f, {
                                            href: s(),
                                            tabIndex: 5,
                                            children: `Sign up`,
                                        }),
                                    ],
                                }),
                        ],
                    }),
            }),
            n &&
                (0, _.jsx)(`div`, {
                    className: `mb-4 text-center text-sm font-medium text-green-600`,
                    children: n,
                }),
        ],
    });
}
v.layout = {
    title: `Log in to your account`,
    description: `Enter your email and password below to log in`,
};
export { v as default };
