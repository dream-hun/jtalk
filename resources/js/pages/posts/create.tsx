import { Form, Head, Link } from '@inertiajs/react';
import PostController from '@/actions/App/Http/Controllers/PostController';
import { PostForm } from '@/components/posts/post-form';
import { index, create } from '@/routes/posts';

type Category = {
    id: number;
    uuid: string;
    name: string;
};

export default function PostsCreate({ categories }: { categories: Category[] }) {
    return (
        <>
            <Head title="New Post" />

            <div className="flex h-full flex-1 flex-col gap-6 p-4 max-w-4xl mx-auto w-full">
                <div>
                    <h1 className="text-xl font-semibold tracking-tight">New Post</h1>
                    <p className="text-sm text-muted-foreground">Create a new blog post.</p>
                </div>

                <Form {...PostController.store.form()}>
                    {({ processing, errors }) => (
                        <PostForm
                            categories={categories}
                            errors={errors}
                            processing={processing}
                            onCancel={() => (window.location.href = index().url)}
                        />
                    )}
                </Form>
            </div>
        </>
    );
}

PostsCreate.layout = {
    breadcrumbs: [
        { title: 'Posts', href: index().url },
        { title: 'New Post', href: create().url },
    ],
};
