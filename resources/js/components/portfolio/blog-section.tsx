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
                    <div className="flex flex-col gap-y-4 items-center justify-center">
                        <div className="flex items-center w-full">
                            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
                            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
                                <span className="text-primary-foreground text-sm font-medium">Blog</span>
                            </div>
                            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
                        </div>
                        <div className="flex flex-col gap-y-3 items-center justify-center">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Recent Posts</h2>
                            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
                                Thoughts on web development, life, and more.
                            </p>
                        </div>
                    </div>
                </BlurFade>

                <BlurFade delay={540} inView>
                    <div className="flex flex-col gap-5">
                        {posts.map((post, id) => (
                            <BlurFade key={post.uuid} delay={560 + id * 50} inView>
                                <a
                                    href={blogShow.url(post.slug)}
                                    className="flex items-start gap-x-2 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                >
                                    <span className="text-xs font-mono tabular-nums font-medium mt-[5px] text-muted-foreground">
                                        {String(id + 1).padStart(2, '0')}.
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
                                        {post.excerpt && (
                                            <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                                        )}
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
                                </a>
                            </BlurFade>
                        ))}
                    </div>
                </BlurFade>

                <BlurFade delay={710} inView>
                    <div className="flex justify-center">
                        <a
                            href={blogIndex.url()}
                            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-lg px-4 py-2 transition-colors group"
                        >
                            View all posts
                            <ChevronRight className="size-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden />
                        </a>
                    </div>
                </BlurFade>
            </div>
        </section>
    );
}
