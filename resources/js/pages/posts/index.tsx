import { Form, Head, Link } from '@inertiajs/react';
import { MoreHorizontal, Pencil, Plus, Trash2 } from 'lucide-react';
import { useState } from 'react';
import PostController from '@/actions/App/Http/Controllers/PostController';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Spinner } from '@/components/ui/spinner';
import { index, create, edit } from '@/routes/posts';

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

function DeletePostModal({ post, onClose }: { post: Post; onClose: () => void }) {
    return (
        <Dialog open onOpenChange={(o) => !o && onClose()}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Delete Post</DialogTitle>
                    <DialogDescription>
                        Are you sure you want to delete <strong>{post.title}</strong>? This action cannot be undone.
                    </DialogDescription>
                </DialogHeader>
                <Form
                    {...PostController.destroy.form(post)}
                    options={{ preserveScroll: true }}
                    onSuccess={onClose}
                >
                    {({ processing }) => (
                        <DialogFooter>
                            <DialogClose asChild>
                                <Button type="button" variant="outline">
                                    Cancel
                                </Button>
                            </DialogClose>
                            <Button type="submit" variant="destructive" disabled={processing}>
                                {processing && <Spinner />}
                                Delete
                            </Button>
                        </DialogFooter>
                    )}
                </Form>
            </DialogContent>
        </Dialog>
    );
}

export default function PostsIndex({ posts }: { posts: Post[] }) {
    const [deleteTarget, setDeleteTarget] = useState<Post | null>(null);

    return (
        <>
            <Head title="Posts" />

            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-xl font-semibold tracking-tight">Posts</h1>
                        <p className="text-sm text-muted-foreground">Manage your blog posts.</p>
                    </div>
                    <Button asChild>
                        <Link href={create().url}>
                            <Plus />
                            New Post
                        </Link>
                    </Button>
                </div>

                <div className="rounded-lg border">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b bg-muted/50">
                                <th className="px-4 py-3 text-left font-medium">Title</th>
                                <th className="px-4 py-3 text-left font-medium">Category</th>
                                <th className="px-4 py-3 text-left font-medium">Status</th>
                                <th className="px-4 py-3 text-left font-medium">Published</th>
                                <th className="px-4 py-3 text-right font-medium">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {posts.length === 0 && (
                                <tr>
                                    <td colSpan={5} className="px-4 py-8 text-center text-muted-foreground">
                                        No posts yet. Create one to get started.
                                    </td>
                                </tr>
                            )}
                            {posts.map((post) => (
                                <tr key={post.uuid} className="border-b last:border-0 hover:bg-muted/30">
                                    <td className="px-4 py-3">
                                        <p className="font-medium">{post.title}</p>
                                        <p className="text-xs text-muted-foreground">{post.slug}</p>
                                    </td>
                                    <td className="px-4 py-3 text-muted-foreground">
                                        {post.category?.name ?? '—'}
                                    </td>
                                    <td className="px-4 py-3">
                                        <Badge variant={post.status === 'published' ? 'default' : 'secondary'}>
                                            {post.status}
                                        </Badge>
                                    </td>
                                    <td className="px-4 py-3 text-muted-foreground">
                                        {post.published_at
                                            ? new Date(post.published_at).toLocaleDateString()
                                            : '—'}
                                    </td>
                                    <td className="px-4 py-3 text-right">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" size="icon">
                                                    <MoreHorizontal />
                                                    <span className="sr-only">Actions</span>
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuGroup>
                                                    <DropdownMenuItem asChild>
                                                        <Link href={edit.url(post)}>
                                                            <Pencil />
                                                            Edit
                                                        </Link>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuSeparator />
                                                    <DropdownMenuItem
                                                        variant="destructive"
                                                        onClick={() => setDeleteTarget(post)}
                                                    >
                                                        <Trash2 />
                                                        Delete
                                                    </DropdownMenuItem>
                                                </DropdownMenuGroup>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {deleteTarget && (
                <DeletePostModal key={deleteTarget.uuid} post={deleteTarget} onClose={() => setDeleteTarget(null)} />
            )}
        </>
    );
}

PostsIndex.layout = {
    breadcrumbs: [{ title: 'Posts', href: index().url }],
};
