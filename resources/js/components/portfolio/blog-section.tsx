import { ChevronRight } from 'lucide-react';
import { BlurFade } from '@/components/portfolio/blur-fade';
import { show as blogShow, index as blogIndex } from '@/routes/blog';

interface Post {
    uuid: string;
    title: string;
    slug: string;
    excerpt: string | null;
    published_at: string | null;
}

interface BlogSectionProps {
    posts: Post[];
}

export function BlogSection({ posts }: BlogSectionProps) {
    if (posts.length === 0) {
        return null;
    }

    return (
        <section id="blog" className="w-full">
            <div className="flex min-h-0 flex-col gap-y-8">
                <BlurFade delay={500}>
                    <div className="flex flex-col items-center justify-center gap-y-4">
                        <div className="flex w-full items-center">
                            <div className="h-px flex-1 bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
                            <div className="z-10 rounded-xl border bg-primary px-4 py-1">
                                <span className="text-sm font-medium text-primary-foreground">
                                    Blog
                                </span>
                            </div>
                            <div className="h-px flex-1 bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
                        </div>
                        <div className="flex flex-col items-center justify-center gap-y-3">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                                Recent Posts
                            </h2>
                            <p className="text-center text-balance text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                                Thoughts on web development, life, and more.
                            </p>
                        </div>
                    </div>
                </BlurFade>

                <BlurFade delay={540} inView>
                    <div className="flex flex-col gap-5">
                        {posts.map((post, id) => (
                            <BlurFade
                                key={post.uuid}
                                delay={560 + id * 50}
                                inView
                            >
                                <a
                                    href={blogShow.url(post.slug)}
                                    className="group flex cursor-pointer items-start gap-x-2 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
                                >
                                    <span className="mt-[5px] font-mono text-xs font-medium text-muted-foreground tabular-nums">
                                        {String(id + 1).padStart(2, '0')}.
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
                                        {post.excerpt && (
                                            <p className="line-clamp-2 text-sm text-muted-foreground">
                                                {post.excerpt}
                                            </p>
                                        )}
                                        {post.published_at && (
                                            <p className="text-xs text-muted-foreground">
                                                {new Date(
                                                    post.published_at,
                                                ).toLocaleDateString('en-US', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric',
                                                })}
                                            </p>
                                        )}
                                    </div>
                                </a>
                            </BlurFade>
                        ))}
                    </div>
                </BlurFade>

                <BlurFade delay={710} inView>
                    <div className="flex justify-center">
                        <a
                            href={blogIndex.url()}
                            className="group inline-flex items-center gap-1.5 rounded-lg border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                            View all posts
                            <ChevronRight
                                className="size-3.5 transition-transform group-hover:translate-x-0.5"
                                aria-hidden
                            />
                        </a>
                    </div>
                </BlurFade>
            </div>
        </section>
    );
}
