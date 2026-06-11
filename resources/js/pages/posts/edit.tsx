import { Form, Head } from '@inertiajs/react';
import PostController from '@/actions/App/Http/Controllers/PostController';
import { PostForm } from '@/components/posts/post-form';
import { index, edit } from '@/routes/posts';

type Category = {
    id: number;
    uuid: string;
    name: string;
};

type Post = {
    uuid: string;
    title: string;
    slug: string;
    excerpt: string | null;
    content: string;
    cover_image: string | null;
    status: 'draft' | 'published';
    published_at: string | null;
    category: Category | null;
};

export default function PostsEdit({
    post,
    categories,
}: {
    post: Post;
    categories: Category[];
}) {
    return (
        <>
            <Head title={`Edit: ${post.title}`} />

            <div className="mx-auto flex h-full w-full max-w-4xl flex-1 flex-col gap-6 p-4">
                <div>
                    <h1 className="text-xl font-semibold tracking-tight">
                        Edit Post
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        {post.title}
                    </p>
                </div>

                <Form {...PostController.update.form(post)}>
                    {({ processing, errors }) => (
                        <PostForm
                            post={post}
                            categories={categories}
                            errors={errors}
                            processing={processing}
                            onCancel={() =>
                                (window.location.href = index().url)
                            }
                        />
                    )}
                </Form>
            </div>
        </>
    );
}

PostsEdit.layout = ({ post }: { post: Post }) => ({
    breadcrumbs: [
        { title: 'Posts', href: index().url },
        { title: post.title, href: edit.url(post) },
    ],
});
