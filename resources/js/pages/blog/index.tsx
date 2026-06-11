import { Head, Link } from '@inertiajs/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { BlurFade } from '@/components/portfolio/blur-fade';
import { PortfolioNavbar } from '@/components/portfolio/portfolio-navbar';
import { index as blogIndex, show as blogShow } from '@/routes/blog';

const BLUR_FADE_DELAY = 40;

type Post = {
    uuid: string;
    title: string;
    slug: string;
    published_at: string | null;
};

type Pagination = {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
    has_previous_page: boolean;
    has_next_page: boolean;
};

function getPageNumbers(current: number, total: number): (number | '...')[] {
    if (total <= 7) {
        return Array.from({ length: total }, (_, i) => i + 1);
    }

    if (current <= 4) {
        return [1, 2, 3, 4, 5, '...', total];
    }

    if (current >= total - 3) {
        return [1, '...', total - 4, total - 3, total - 2, total - 1, total];
    }

    return [1, '...', current - 1, current, current + 1, '...', total];
}

function BlogPagination({ pagination }: { pagination: Pagination }) {
    const { current_page, last_page, has_previous_page, has_next_page } =
        pagination;

    if (last_page <= 1) {
        return null;
    }

    const pages = getPageNumbers(current_page, last_page);

    return (
        <div className="mt-10 flex items-center justify-between border-t border-border pt-6">
            <span className="text-sm text-muted-foreground">
                Page {current_page} of {last_page}
            </span>

            <div className="flex items-center gap-1">
                {has_previous_page ? (
                    <Link
                        href={blogIndex.url({
                            query: { page: current_page - 1 },
                        })}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                        aria-label="Previous page"
                    >
                        <ChevronLeft className="size-4" />
                    </Link>
                ) : (
                    <span className="inline-flex h-8 w-8 cursor-not-allowed items-center justify-center rounded-md border border-border text-muted-foreground/40">
                        <ChevronLeft className="size-4" />
                    </span>
                )}

                {pages.map((page, i) =>
                    page === '...' ? (
                        <span
                            key={`ellipsis-${i}`}
                            className="inline-flex h-8 w-8 items-center justify-center text-sm text-muted-foreground select-none"
                        >
                            …
                        </span>
                    ) : (
                        <Link
                            key={page}
                            href={blogIndex.url({ query: { page } })}
                            className={`inline-flex h-8 w-8 items-center justify-center rounded-md border text-sm font-medium transition-colors ${
                                page === current_page
                                    ? 'border-foreground bg-foreground text-background'
                                    : 'border-border text-muted-foreground hover:bg-accent hover:text-foreground'
                            }`}
                            aria-current={
                                page === current_page ? 'page' : undefined
                            }
                        >
                            {page}
                        </Link>
                    ),
                )}

                {has_next_page ? (
                    <Link
                        href={blogIndex.url({
                            query: { page: current_page + 1 },
                        })}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                        aria-label="Next page"
                    >
                        <ChevronRight className="size-4" />
                    </Link>
                ) : (
                    <span className="inline-flex h-8 w-8 cursor-not-allowed items-center justify-center rounded-md border border-border text-muted-foreground/40">
                        <ChevronRight className="size-4" />
                    </span>
                )}
            </div>
        </div>
    );
}

export default function BlogIndex({
    posts,
    pagination,
    blogUrl,
    defaultOgImage,
}: {
    posts: Post[];
    pagination: Pagination;
    blogUrl: string;
    defaultOgImage: string;
}) {
    const offset = (pagination.current_page - 1) * pagination.per_page;

    return (
        <>
            <Head title="Blog">
                <meta
                    head-key="description"
                    name="description"
                    content="My personal reflections about web development, life, and more."
                />
                <link head-key="canonical" rel="canonical" href={blogUrl} />
                <meta head-key="og:type" property="og:type" content="website" />
                <meta head-key="og:title" property="og:title" content="Blog" />
                <meta
                    head-key="og:description"
                    property="og:description"
                    content="My personal reflections about web development, life, and more."
                />
                <meta
                    head-key="og:image"
                    property="og:image"
                    content={defaultOgImage}
                />
                <meta
                    head-key="twitter:card"
                    name="twitter:card"
                    content="summary"
                />
                <meta
                    head-key="twitter:title"
                    name="twitter:title"
                    content="Blog"
                />
                <meta
                    head-key="twitter:description"
                    name="twitter:description"
                    content="My personal reflections about web development, life, and more."
                />
                <meta
                    head-key="twitter:image"
                    name="twitter:image"
                    content={defaultOgImage}
                />
            </Head>

            <div className="min-h-dvh bg-background">
                <div className="mx-auto max-w-2xl px-6 py-12 pb-24">
                    <BlurFade delay={BLUR_FADE_DELAY}>
                        <h1 className="mb-4 text-2xl font-semibold tracking-tight">
                            Blog{' '}
                            <span className="ml-1 rounded-md border border-border bg-card px-2 py-1 text-sm text-muted-foreground">
                                {pagination.total} post
                                {pagination.total !== 1 ? 's' : ''}
                            </span>
                        </h1>
                        <p className="mb-8 text-sm text-muted-foreground">
                            My personal reflections about web development, life,
                            and more.
                        </p>
                    </BlurFade>

                    {posts.length === 0 ? (
                        <BlurFade delay={BLUR_FADE_DELAY * 2}>
                            <div className="flex flex-col items-center justify-center rounded-xl border border-border px-4 py-12">
                                <p className="text-center text-muted-foreground">
                                    No blog posts yet. Check back soon!
                                </p>
                            </div>
                        </BlurFade>
                    ) : (
                        <>
                            <BlurFade delay={BLUR_FADE_DELAY * 2}>
                                <div className="flex flex-col gap-5">
                                    {posts.map((post, id) => {
                                        const indexNumber = offset + id + 1;

                                        return (
                                            <BlurFade
                                                delay={
                                                    BLUR_FADE_DELAY * 3 +
                                                    id * 50
                                                }
                                                key={post.uuid}
                                            >
                                                <Link
                                                    href={blogShow.url(
                                                        post.slug,
                                                    )}
                                                    className="group flex cursor-pointer items-start gap-x-2 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
                                                >
                                                    <span className="mt-[5px] font-mono text-xs font-medium text-muted-foreground tabular-nums">
                                                        {String(
                                                            indexNumber,
                                                        ).padStart(2, '0')}
                                                        .
                                                    </span>
                                                    <div className="flex flex-1 flex-col gap-y-1">
                                                        <p className="text-base font-medium tracking-tight">
                                                            <span className="transition-colors group-hover:text-foreground">
                                                                {post.title}
                                                                <ChevronRight
                                                                    className="ml-1 inline-block size-4 -translate-x-2 stroke-3 text-muted-foreground opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                                                                    aria-hidden
                                                                />
                                                            </span>
                                                        </p>
                                                        {post.published_at && (
                                                            <p className="text-xs text-muted-foreground">
                                                                {new Date(
                                                                    post.published_at,
                                                                ).toLocaleDateString(
                                                                    'en-US',
                                                                    {
                                                                        year: 'numeric',
                                                                        month: 'long',
                                                                        day: 'numeric',
                                                                    },
                                                                )}
                                                            </p>
                                                        )}
                                                    </div>
                                                </Link>
                                            </BlurFade>
                                        );
                                    })}
                                </div>
                            </BlurFade>

                            <BlurFade delay={BLUR_FADE_DELAY * 4}>
                                <BlogPagination pagination={pagination} />
                            </BlurFade>
                        </>
                    )}
                </div>
            </div>

            <PortfolioNavbar />
        </>
    );
}
