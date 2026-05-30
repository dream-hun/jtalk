import { Head, Link } from '@inertiajs/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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

export default function BlogShow({
    post,
    previousPost,
    nextPost,
    authorName,
    postUrl,
}: {
    post: Post;
    previousPost: AdjacentPost | null;
    nextPost: AdjacentPost | null;
    authorName: string | null;
    postUrl: string;
}) {
    const description = post.excerpt ?? '';
    const blogPostingSchema = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        ...(description && { description }),
        ...(post.published_at && { datePublished: post.published_at }),
        ...(post.cover_image && { image: post.cover_image }),
        url: postUrl,
        ...(authorName && {
            author: { '@type': 'Person', name: authorName },
        }),
    };

    return (
        <>
            <Head>
                <title>{post.title}</title>
                <meta head-key="description" name="description" content={description} />
                <link head-key="canonical" rel="canonical" href={postUrl} />
                <meta head-key="og:type" property="og:type" content="article" />
                <meta head-key="og:url" property="og:url" content={postUrl} />
                <meta head-key="og:title" property="og:title" content={post.title} />
                <meta head-key="og:description" property="og:description" content={description} />
                {post.cover_image && <meta head-key="og:image" property="og:image" content={post.cover_image} />}
                {post.published_at && (
                    <meta head-key="article:published_time" property="article:published_time" content={post.published_at} />
                )}
                <meta head-key="twitter:card" name="twitter:card" content={post.cover_image ? 'summary_large_image' : 'summary'} />
                <meta head-key="twitter:title" name="twitter:title" content={post.title} />
                <meta head-key="twitter:description" name="twitter:description" content={description} />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
                />
            </Head>

            <div className="min-h-dvh bg-background">
                <div className="mx-auto max-w-2xl px-6 py-12 pb-24">
                    <div className="flex flex-col gap-4">
                        <h1 className="title font-semibold text-3xl md:text-4xl tracking-tighter leading-tight">
                            {post.title}
                        </h1>
                        {post.published_at && (
                            <p className="text-sm text-muted-foreground">
                                {new Date(post.published_at).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                })}
                            </p>
                        )}
                    </div>

                    <div className="my-6 flex w-full items-center">
                        <div
                            className="flex-1 h-px bg-border"
                            style={{
                                maskImage: 'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)',
                                WebkitMaskImage: 'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)',
                            }}
                        />
                    </div>

                    <article
                        className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    <nav className="mt-12 pt-8 border-t border-border">
                        <div className="flex flex-col sm:flex-row justify-between gap-4">
                            {previousPost ? (
                                <Link
                                    href={blogShow.url(previousPost.slug)}
                                    className="group flex-1 flex flex-col gap-1 p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors"
                                >
                                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                                        <ChevronLeft className="size-3" />
                                        Previous
                                    </span>
                                    <span className="text-sm font-medium group-hover:text-foreground transition-colors whitespace-normal break-words">
                                        {previousPost.title}
                                    </span>
                                </Link>
                            ) : (
                                <div className="hidden sm:block flex-1" />
                            )}

                            {nextPost ? (
                                <Link
                                    href={blogShow.url(nextPost.slug)}
                                    className="group flex-1 flex flex-col gap-1 p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors text-right"
                                >
                                    <span className="flex items-center justify-end gap-1 text-xs text-muted-foreground">
                                        Next
                                        <ChevronRight className="size-3" />
                                    </span>
                                    <span className="text-sm font-medium group-hover:text-foreground transition-colors whitespace-normal break-words">
                                        {nextPost.title}
                                    </span>
                                </Link>
                            ) : (
                                <div className="hidden sm:block flex-1" />
                            )}
                        </div>
                    </nav>
                </div>
            </div>

            <PortfolioNavbar />
        </>
    );
}
