import { Head, Link } from '@inertiajs/react';
import DOMPurify from 'dompurify';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { BlogContent } from '@/components/blog/blog-content';
import { PortfolioNavbar } from '@/components/portfolio/portfolio-navbar';
import { show as blogShow } from '@/routes/blog';

type Post = {
    uuid: string;
    title: string;
    slug: string;
    excerpt: string | null;
    content: string;
    cover_image: string | null;
    published_at: string | null;
};

type AdjacentPost = {
    title: string;
    slug: string;
};

function sanitizeHtml(html: string | null | undefined) {
    return html
        ? DOMPurify.sanitize(html, {
              ALLOWED_TAGS: ['span', 'p'],
              ALLOWED_ATTR: ['class'],
          })
        : '';
}

export default function BlogShow({
    post,
    previousPost,
    nextPost,
    authorName,
    postUrl,
    defaultOgImage,
}: {
    post: Post;
    previousPost: AdjacentPost | null;
    nextPost: AdjacentPost | null;
    authorName: string | null;
    postUrl: string;
    defaultOgImage: string;
}) {
    const description = post.excerpt ?? '';
    const ogImage = post.cover_image ?? defaultOgImage;
    const blogPostingSchema = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        ...(description && { description }),
        ...(post.published_at && { datePublished: post.published_at }),
        image: ogImage,
        url: postUrl,
        ...(authorName && {
            author: { '@type': 'Person', name: authorName },
        }),
    };

    return (
        <>
            <Head>
                <title>{post.title}</title>
                <meta
                    head-key="description"
                    name="description"
                    content={description}
                />
                <link head-key="canonical" rel="canonical" href={postUrl} />
                <meta head-key="og:type" property="og:type" content="article" />
                <meta head-key="og:url" property="og:url" content={postUrl} />
                <meta
                    head-key="og:title"
                    property="og:title"
                    content={post.title}
                />
                <meta
                    head-key="og:description"
                    property="og:description"
                    content={description}
                />
                <meta
                    head-key="og:image"
                    property="og:image"
                    content={ogImage}
                />
                {post.published_at && (
                    <meta
                        head-key="article:published_time"
                        property="article:published_time"
                        content={post.published_at}
                    />
                )}
                <meta
                    head-key="twitter:card"
                    name="twitter:card"
                    content={
                        post.cover_image ? 'summary_large_image' : 'summary'
                    }
                />
                <meta
                    head-key="twitter:title"
                    name="twitter:title"
                    content={post.title}
                />
                <meta
                    head-key="twitter:description"
                    name="twitter:description"
                    content={description}
                />
                <meta
                    head-key="twitter:image"
                    name="twitter:image"
                    content={ogImage}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: sanitizeHtml(JSON.stringify(blogPostingSchema)),
                    }}
                />
            </Head>

            <div className="min-h-dvh bg-background">
                <div className="mx-auto max-w-2xl px-6 py-12 pb-24">
                    <div className="flex flex-col gap-4">
                        <h1 className="title text-3xl leading-tight font-semibold tracking-tighter md:text-4xl">
                            {post.title}
                        </h1>
                        {post.published_at && (
                            <p className="text-sm text-muted-foreground">
                                {new Date(post.published_at).toLocaleDateString(
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

                    <div className="my-6 flex w-full items-center">
                        <div
                            className="h-px flex-1 bg-border"
                            style={{
                                maskImage:
                                    'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)',
                                WebkitMaskImage:
                                    'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)',
                            }}
                        />
                    </div>

                    <BlogContent content={post.content} />

                    <nav className="mt-12 border-t border-border pt-8">
                        <div className="flex flex-col justify-between gap-4 sm:flex-row">
                            {previousPost ? (
                                <Link
                                    href={blogShow.url(previousPost.slug)}
                                    className="group flex flex-1 flex-col gap-1 rounded-lg border border-border p-4 transition-colors hover:bg-accent/50"
                                >
                                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                                        <ChevronLeft className="size-3" />
                                        Previous
                                    </span>
                                    <span className="text-sm font-medium break-words whitespace-normal transition-colors group-hover:text-foreground">
                                        {previousPost.title}
                                    </span>
                                </Link>
                            ) : (
                                <div className="hidden flex-1 sm:block" />
                            )}

                            {nextPost ? (
                                <Link
                                    href={blogShow.url(nextPost.slug)}
                                    className="group flex flex-1 flex-col gap-1 rounded-lg border border-border p-4 text-right transition-colors hover:bg-accent/50"
                                >
                                    <span className="flex items-center justify-end gap-1 text-xs text-muted-foreground">
                                        Next
                                        <ChevronRight className="size-3" />
                                    </span>
                                    <span className="text-sm font-medium break-words whitespace-normal transition-colors group-hover:text-foreground">
                                        {nextPost.title}
                                    </span>
                                </Link>
                            ) : (
                                <div className="hidden flex-1 sm:block" />
                            )}
                        </div>
                    </nav>
                </div>
            </div>

            <PortfolioNavbar />
        </>
    );
}
