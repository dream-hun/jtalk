import { c as e } from './vendor-inertia-C-ctYATJ.js';
import { et as t } from './vendor-radix-C92RFvrB.js';
import { t as n } from './button-DTg8VAj1.js';
import { r, t as i } from './react-DUlMxSmx.js';
import { t as a } from './separator-CPt1Rane.js';
import { t as o } from './input-error-0fpqe6UA.js';
import { t as s } from './spinner-Co1CPAeO.js';
var c = t();
function l({ routes: t, label: l, loadingLabel: u, separator: d } = {}) {
    let {
        verify: f,
        isLoading: p,
        error: m,
        isSupported: h,
    } = i({
        ...(t && { routes: { options: t.options.url, submit: t.submit.url } }),
        onSuccess: (t) => {
            e.visit(t.redirect ?? `/dashboard`);
        },
    });
    return h
        ? (0, c.jsxs)(c.Fragment, {
              children: [
                  (0, c.jsxs)(`div`, {
                      className: `grid gap-2`,
                      children: [
                          (0, c.jsxs)(n, {
                              type: `button`,
                              variant: `outline`,
                              className: `w-full`,
                              onClick: f,
                              disabled: p,
                              children: [
                                  p
                                      ? (0, c.jsx)(s, {})
                                      : (0, c.jsx)(r, { className: `h-4 w-4` }),
                                  p
                                      ? (u ?? `Authenticating...`)
                                      : (l ?? `Sign in with a passkey`),
                              ],
                          }),
                          m &&
                              (0, c.jsx)(o, {
                                  message: m,
                                  className: `text-center`,
                              }),
                      ],
                  }),
                  (0, c.jsxs)(`div`, {
                      className: `relative my-6`,
                      children: [
                          (0, c.jsx)(`div`, {
                              className: `absolute inset-0 flex items-center`,
                              children: (0, c.jsx)(a, { className: `w-full` }),
                          }),
                          (0, c.jsx)(`div`, {
                              className: `relative flex justify-center text-xs uppercase`,
                              children: (0, c.jsx)(`span`, {
                                  className: `bg-background px-2 text-muted-foreground`,
                                  children: d ?? `Or continue with email`,
                              }),
                          }),
                      ],
                  }),
              ],
          })
        : null;
}
export { l as t };
