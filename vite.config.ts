import inertia from '@inertiajs/vite';
import { wayfinder } from '@laravel/vite-plugin-wayfinder';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    resolve: {
        alias: {
            '@public': path.resolve(__dirname, 'public'),
        },
    },
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.tsx'],
            refresh: true,
        }),
        inertia(),
        react({
            babel: {
                plugins: ['babel-plugin-react-compiler'],
            },
        }),
        tailwindcss(),
        wayfinder({
            formVariants: true,
        }),
    ],
    build: {
        rolldownOptions: {
            output: {
                codeSplitting: {
                    groups: [
                        // React core — stable, benefits from long-term caching
                        { name: 'vendor-react', test: /node_modules\/react(?!-|\/)/ },
                        { name: 'vendor-react', test: /node_modules\/react-dom\// },
                        { name: 'vendor-react', test: /node_modules\/scheduler\// },
                        // Inertia + axios
                        { name: 'vendor-inertia', test: /node_modules\/@inertiajs\// },
                        { name: 'vendor-inertia', test: /node_modules\/axios\// },
                        // Motion animation library (minShareCount:1 forces extraction even for a single consumer)
                        { name: 'vendor-motion', test: /node_modules\/motion/, minShareCount: 1 },
                        // Radix UI primitives
                        { name: 'vendor-radix', test: /node_modules\/@radix-ui\// },
                        { name: 'vendor-radix', test: /node_modules\/radix-ui\// },
                        // Date picker + date-fns (only loaded on pages with date inputs)
                        { name: 'vendor-datepicker', test: /node_modules\/(react-day-picker|date-fns)\// },
                        // Markdown rendering (only loaded on blog show page)
                        { name: 'vendor-markdown', test: /node_modules\/(react-markdown|remark|rehype|unified|vfile|micromark|mdast-|hast-|unist-)/ },
                    ],
                },
            },
        },
    },
});
