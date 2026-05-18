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
    const { current_page, last_page, has_previous_page, has_next_page } = pagination;

    if (last_page <= 1) {
        return null;
    }

    const pages = getPageNumbers(current_page, last_page);

    return (
        <div className="flex items-center justify-between mt-10 pt-6 border-t border-border">
            <span className="text-sm text-muted-foreground">
                Page {current_page} of {last_page}
            </span>

            <div className="flex items-center gap-1">
                {has_previous_page ? (
                    <Link
                        href={blogIndex.url({ query: { page: current_page - 1 } })}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
                        aria-label="Previous page"
                    >
                        <ChevronLeft className="size-4" />
                    </Link>
                ) : (
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border text-muted-foreground/40 cursor-not-allowed">
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
                            aria-current={page === current_page ? 'page' : undefined}
                        >
                            {page}
                        </Link>
                    ),
                )}

                {has_next_page ? (
                    <Link
                        href={blogIndex.url({ query: { page: current_page + 1 } })}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
                        aria-label="Next page"
                    >
                        <ChevronRight className="size-4" />
                    </Link>
                ) : (
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border text-muted-foreground/40 cursor-not-allowed">
                        <ChevronRight className="size-4" />
                    </span>
                )}
            </div>
        </div>
    );
}

export default function BlogIndex({ posts, pagination }: { posts: Post[]; pagination: Pagination }) {
    const offset = (pagination.current_page - 1) * pagination.per_page;

    return (
        <>
            <Head title="Blog">
                <meta head-key="description" name="description" content="My personal reflections about web development, life, and more." />
                <meta head-key="og:type" property="og:type" content="website" />
                <meta head-key="og:title" property="og:title" content="Blog" />
                <meta head-key="og:description" property="og:description" content="My personal reflections about web development, life, and more." />
            </Head>

            <div className="min-h-dvh bg-background">
                <div className="mx-auto max-w-2xl px-6 py-12 pb-24">
                    <BlurFade delay={BLUR_FADE_DELAY}>
                        <h1 className="text-2xl font-semibold tracking-tight mb-4">
                            Blog{' '}
                            <span className="ml-1 bg-card border border-border rounded-md px-2 py-1 text-muted-foreground text-sm">
                                {pagination.total} post{pagination.total !== 1 ? 's' : ''}
                            </span>
                        </h1>
                        <p className="text-sm text-muted-foreground mb-8">
                            My personal reflections about web development, life, and more.
                        </p>
                    </BlurFade>

                    {posts.length === 0 ? (
                        <BlurFade delay={BLUR_FADE_DELAY * 2}>
                            <div className="flex flex-col items-center justify-center py-12 px-4 border border-border rounded-xl">
                                <p className="text-muted-foreground text-center">No blog posts yet. Check back soon!</p>
                            </div>
                        </BlurFade>
                    ) : (
                        <>
                            <BlurFade delay={BLUR_FADE_DELAY * 2}>
                                <div className="flex flex-col gap-5">
                                    {posts.map((post, id) => {
                                        const indexNumber = offset + id + 1;
                                        return (
                                            <BlurFade delay={BLUR_FADE_DELAY * 3 + id * 50} key={post.uuid}>
                                                <Link
                                                    href={blogShow.url(post.slug)}
                                                    className="flex items-start gap-x-2 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                                >
                                                    <span className="text-xs font-mono tabular-nums font-medium mt-[5px] text-muted-foreground">
                                                        {String(indexNumber).padStart(2, '0')}.
                                                    </span>
                                                    <div className="flex flex-col gap-y-1 flex-1">
                                                        <p className="tracking-tight text-base font-medium">
                                                            <span className="group-hover:text-foreground transition-colors">
                                                                {post.title}
                                                                <ChevronRight
                                                                    className="ml-1 inline-block size-4 stroke-3 text-muted-foreground opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0"
                                                                    aria-hidden
                                                                />
                                                            </span>
                                                        </p>
                                                        {post.published_at && (
                                                            <p className="text-xs text-muted-foreground">
                                                                {new Date(post.published_at).toLocaleDateString('en-US', {
                                                                    year: 'numeric',
                                                                    month: 'long',
                                                                    day: 'numeric',
                                                                })}
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
