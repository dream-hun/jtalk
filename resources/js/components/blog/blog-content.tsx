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

function sanitizeHtml(html: string | null | undefined) {
    return html
        ? DOMPurify.sanitize(html, {
              ALLOWED_TAGS: ['span', 'p'],
              ALLOWED_ATTR: ['class'],
          })
        : '';
}

export function BlogContent({ content }: { content: string }) {
    const articleRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const article = articleRef.current;

        if (!article) {
            return;
        }

        article.querySelectorAll<HTMLElement>('pre code').forEach((block) => {
            hljs.highlightElement(block);
        });

        const buttons: HTMLButtonElement[] = [];

        article.querySelectorAll<HTMLElement>('pre').forEach((pre) => {
            pre.style.position = 'relative';

            const btn = document.createElement('button');
            btn.textContent = 'Copy';
            btn.setAttribute('aria-label', 'Copy code');
            btn.className =
                'absolute top-2 right-2 rounded px-2 py-1 text-xs font-mono ' +
                'bg-gray-100 text-gray-600 hover:bg-gray-200 ' +
                'dark:bg-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-600 ' +
                'transition-colors cursor-pointer select-none opacity-0 group-hover:opacity-100';

            pre.classList.add('group');

            btn.addEventListener('click', async () => {
                const code = pre.querySelector('code')?.textContent ?? '';

                try {
                    await navigator.clipboard.writeText(code);
                    btn.textContent = 'Copied!';
                } catch {
                    btn.textContent = 'Failed';
                }

                setTimeout(() => {
                    btn.textContent = 'Copy';
                }, 2000);
            });

            pre.appendChild(btn);
            buttons.push(btn);
        });

        return () => {
            buttons.forEach((btn) => btn.remove());
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
