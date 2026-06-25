import DOMPurify from 'dompurify';
import hljs from 'highlight.js/lib/core';
import bash from 'highlight.js/lib/languages/bash';
import css from 'highlight.js/lib/languages/css';
import go from 'highlight.js/lib/languages/go';
import javascript from 'highlight.js/lib/languages/javascript';
import json from 'highlight.js/lib/languages/json';
import php from 'highlight.js/lib/languages/php';
import python from 'highlight.js/lib/languages/python';
import rust from 'highlight.js/lib/languages/rust';
import sql from 'highlight.js/lib/languages/sql';
import typescript from 'highlight.js/lib/languages/typescript';
import xml from 'highlight.js/lib/languages/xml';
import { useEffect, useRef } from 'react';

hljs.registerLanguage('bash', bash);
hljs.registerLanguage('sh', bash);
hljs.registerLanguage('shell', bash);
hljs.registerLanguage('css', css);
hljs.registerLanguage('go', go);
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('js', javascript);
hljs.registerLanguage('json', json);
hljs.registerLanguage('php', php);
hljs.registerLanguage('python', python);
hljs.registerLanguage('py', python);
hljs.registerLanguage('rust', rust);
hljs.registerLanguage('sql', sql);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('ts', typescript);
hljs.registerLanguage('html', xml);
hljs.registerLanguage('xml', xml);

const COPY_ICON =
    `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" ` +
    `stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">` +
    `<rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>` +
    `<path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`;

const CHECK_ICON =
    `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" ` +
    `stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">` +
    `<polyline points="20 6 9 17 4 12"/></svg>`;

function sanitizeHtml(html: string | null | undefined) {
    return html
        ? DOMPurify.sanitize(html, {
              ALLOWED_TAGS: [
                  'p', 'span', 'br',
                  'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
                  'strong', 'em', 'u', 's',
                  'ul', 'ol', 'li',
                  'blockquote', 'hr',
                  'pre', 'code',
                  'a',
              ],
              ALLOWED_ATTR: ['class', 'href', 'target', 'rel'],
          })
        : '';
}

export function BlogContent({ content }: { content: string }) {
    const articleRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const article = articleRef.current;
        if (!article) return;

        const wrappers: Array<{ wrapper: HTMLDivElement; pre: HTMLPreElement }> = [];

        article.querySelectorAll<HTMLPreElement>('pre').forEach((pre) => {
            const code = pre.querySelector('code');
            if (code) hljs.highlightElement(code);

            const lang = code?.className.match(/language-(\w+)/)?.[1] ?? '';

            // Header bar
            const header = document.createElement('div');
            header.className =
                'flex items-center justify-between px-4 py-2 border-b border-border/50 bg-muted/50';
            // override white-space from any ancestor pre (safety)
            header.style.whiteSpace = 'normal';

            const langLabel = document.createElement('span');
            langLabel.textContent = lang || 'code';
            langLabel.className = 'text-xs font-mono text-muted-foreground select-none';

            const copyBtn = document.createElement('button');
            copyBtn.type = 'button';
            copyBtn.setAttribute('aria-label', 'Copy code');
            copyBtn.className =
                'flex items-center gap-1 rounded px-2 py-0.5 text-xs font-mono ' +
                'text-muted-foreground hover:bg-accent hover:text-accent-foreground ' +
                'transition-colors cursor-pointer';
            copyBtn.innerHTML = `${COPY_ICON}<span>Copy</span>`;

            copyBtn.addEventListener('click', async () => {
                const text = pre.querySelector('code')?.textContent ?? '';
                try {
                    await navigator.clipboard.writeText(text);
                    copyBtn.innerHTML = `${CHECK_ICON}<span>Copied!</span>`;
                    copyBtn.classList.add('text-green-500', 'dark:text-green-400');
                } catch {
                    const s = copyBtn.querySelector('span');
                    if (s) s.textContent = 'Failed';
                }
                setTimeout(() => {
                    copyBtn.innerHTML = `${COPY_ICON}<span>Copy</span>`;
                    copyBtn.classList.remove('text-green-500', 'dark:text-green-400');
                }, 2000);
            });

            header.appendChild(langLabel);
            header.appendChild(copyBtn);

            // Wrap pre: container holds header + pre
            const wrapper = document.createElement('div');
            wrapper.className =
                'not-prose my-6 overflow-hidden rounded-lg border border-border';

            pre.parentNode!.insertBefore(wrapper, pre);
            wrapper.appendChild(header);
            wrapper.appendChild(pre);

            // Let wrapper handle spacing and rounding
            pre.style.margin = '0';
            pre.style.borderRadius = '0';

            wrappers.push({ wrapper, pre });
        });

        return () => {
            wrappers.forEach(({ wrapper, pre }) => {
                pre.style.margin = '';
                pre.style.borderRadius = '';
                wrapper.parentNode?.insertBefore(pre, wrapper);
                wrapper.remove();
            });
        };
    }, [content]);

    return (
        <article
            ref={articleRef}
            className="prose max-w-full font-sans leading-relaxed text-pretty prose-neutral dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: sanitizeHtml(content) }}
        />
    );
}
