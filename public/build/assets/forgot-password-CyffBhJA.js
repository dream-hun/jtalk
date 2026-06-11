import { n as e, t } from './vendor-inertia-C-ctYATJ.js';
import { et as n } from './vendor-radix-C92RFvrB.js';
import { t as r } from './button-DTg8VAj1.js';
import { t as i } from './loader-circle-CC2U8Lto.js';
import { t as a } from './input-D7RkL3Of.js';
import { r as o } from './routes-DWAnLukZ.js';
import { t as s } from './input-error-0fpqe6UA.js';
import { t as c } from './label-Bi32WZ_t.js';
import { t as l } from './text-link-Ca_Eg3Oe.js';
import { t as u } from './password-PuikkjFY.js';
var d = n();
function f({ status: n }) {
    return (0, d.jsxs)(d.Fragment, {
        children: [
            (0, d.jsx)(e, { title: `Forgot password` }),
            n &&
                (0, d.jsx)(`div`, {
                    className: `mb-4 text-center text-sm font-medium text-green-600`,
                    children: n,
                }),
            (0, d.jsxs)(`div`, {
                className: `space-y-6`,
                children: [
                    (0, d.jsx)(t, {
                        ...u.form(),
                        children: ({ processing: e, errors: t }) =>
                            (0, d.jsxs)(d.Fragment, {
                                children: [
                                    (0, d.jsxs)(`div`, {
                                        className: `grid gap-2`,
                                        children: [
                                            (0, d.jsx)(c, {
                                                htmlFor: `email`,
                                                children: `Email address`,
                                            }),
                                            (0, d.jsx)(a, {
                                                id: `email`,
                                                type: `email`,
                                                name: `email`,
                                                autoComplete: `off`,
                                                autoFocus: !0,
                                                placeholder: `email@example.com`,
                                            }),
                                            (0, d.jsx)(s, { message: t.email }),
                                        ],
                                    }),
                                    (0, d.jsx)(`div`, {
                                        className: `my-6 flex items-center justify-start`,
                                        children: (0, d.jsxs)(r, {
                                            className: `w-full`,
                                            disabled: e,
                                            'data-test': `email-password-reset-link-button`,
                                            children: [
                                                e &&
                                                    (0, d.jsx)(i, {
                                                        className: `h-4 w-4 animate-spin`,
                                                    }),
                                                `Email password reset link`,
                                            ],
                                        }),
                                    }),
                                ],
                            }),
                    }),
                    (0, d.jsxs)(`div`, {
                        className: `space-x-1 text-center text-sm text-muted-foreground`,
                        children: [
                            (0, d.jsx)(`span`, { children: `Or, return to` }),
                            (0, d.jsx)(l, { href: o(), children: `log in` }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
f.layout = {
    title: `Forgot password`,
    description: `Enter your email to receive a password reset link`,
};
export { f as default };
