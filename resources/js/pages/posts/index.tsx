import { Form, Head } from '@inertiajs/react';
import { MoreHorizontal, Pencil, Plus, Trash2 } from 'lucide-react';
import { useState } from 'react';
import PostController from '@/actions/App/Http/Controllers/PostController';
import InputError from '@/components/input-error';
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
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Spinner } from '@/components/ui/spinner';
import { index } from '@/routes/posts';

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

function PostFormFields({
    post,
    categories,
    errors,
}: {
    post?: Post;
    categories: Category[];
    errors: Record<string, string>;
}) {
    const NONE = '__none__';
    const [status, setStatus] = useState<string>(post?.status ?? 'draft');
    const [categoryId, setCategoryId] = useState<string>(post?.category?.id?.toString() ?? NONE);

    return (
        <>
            <input type="hidden" name="status" value={status} />
            <input type="hidden" name="category_id" value={categoryId === NONE ? '' : categoryId} />
            <div className="grid gap-2">
                <Label htmlFor="title">Title</Label>
                <Input id="title" name="title" defaultValue={post?.title ?? ''} placeholder="Post title" required />
                <InputError message={errors.title} />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="excerpt">Excerpt</Label>
                <Input id="excerpt" name="excerpt" defaultValue={post?.excerpt ?? ''} placeholder="Short description…" />
                <InputError message={errors.excerpt} />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="content">Content (Markdown)</Label>
                <textarea
                    id="content"
                    name="content"
                    defaultValue={post?.content ?? ''}
                    rows={8}
                    placeholder="Write your post in Markdown…"
                    required
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring resize-y font-mono"
                />
                <InputError message={errors.content} />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="cover_image">Cover Image URL</Label>
                <Input id="cover_image" name="cover_image" type="url" defaultValue={post?.cover_image ?? ''} placeholder="https://…" />
                <InputError message={errors.cover_image} />
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                    <Label>Category</Label>
                    <Select value={categoryId} onValueChange={setCategoryId}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="None" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value={NONE}>None</SelectItem>
                            {categories.map((cat) => (
                                <SelectItem key={cat.id} value={cat.id.toString()}>
                                    {cat.name}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <InputError message={errors.category_id} />
                </div>
                <div className="grid gap-2">
                    <Label>Status</Label>
                    <Select value={status} onValueChange={setStatus}>
                        <SelectTrigger className="w-full">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="draft">Draft</SelectItem>
                            <SelectItem value="published">Published</SelectItem>
                        </SelectContent>
                    </Select>
                    <InputError message={errors.status} />
                </div>
            </div>
        </>
    );
}

function CreatePostModal({
    open,
    categories,
    onClose,
}: {
    open: boolean;
    categories: Category[];
    onClose: () => void;
}) {
    return (
        <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
            <DialogContent className="max-w-2xl">
                <DialogHeader>
                    <DialogTitle>New Post</DialogTitle>
                    <DialogDescription>Create a new blog post.</DialogDescription>
                </DialogHeader>
                <Form
                    {...PostController.store.form()}
                    options={{ preserveScroll: true }}
                    onSuccess={onClose}
                    resetOnSuccess
                >
                    {({ processing, errors }) => (
                        <div className="space-y-4">
                            <PostFormFields categories={categories} errors={errors} />
                            <DialogFooter>
                                <DialogClose asChild>
                                    <Button type="button" variant="outline">
                                        Cancel
                                    </Button>
                                </DialogClose>
                                <Button type="submit" disabled={processing}>
                                    {processing && <Spinner />}
                                    Save
                                </Button>
                            </DialogFooter>
                        </div>
                    )}
                </Form>
            </DialogContent>
        </Dialog>
    );
}

function EditPostModal({ post, categories, onClose }: { post: Post; categories: Category[]; onClose: () => void }) {
    return (
        <Dialog open onOpenChange={(o) => !o && onClose()}>
            <DialogContent className="max-w-2xl">
                <DialogHeader>
                    <DialogTitle>Edit Post</DialogTitle>
                    <DialogDescription>Update the blog post.</DialogDescription>
                </DialogHeader>
                <Form
                    {...PostController.update.form(post)}
                    options={{ preserveScroll: true }}
                    onSuccess={onClose}
                    resetOnSuccess
                >
                    {({ processing, errors }) => (
                        <div className="space-y-4">
                            <PostFormFields post={post} categories={categories} errors={errors} />
                            <DialogFooter>
                                <DialogClose asChild>
                                    <Button type="button" variant="outline">
                                        Cancel
                                    </Button>
                                </DialogClose>
                                <Button type="submit" disabled={processing}>
                                    {processing && <Spinner />}
                                    Save
                                </Button>
                            </DialogFooter>
                        </div>
                    )}
                </Form>
            </DialogContent>
        </Dialog>
    );
}

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

export default function PostsIndex({ posts, categories }: { posts: Post[]; categories: Category[] }) {
    const [createOpen, setCreateOpen] = useState(false);
    const [editTarget, setEditTarget] = useState<Post | null>(null);
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
                    <Button onClick={() => setCreateOpen(true)}>
                        <Plus />
                        New Post
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
                                                    <DropdownMenuItem onClick={() => setEditTarget(post)}>
                                                        <Pencil />
                                                        Edit
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

            <CreatePostModal open={createOpen} categories={categories} onClose={() => setCreateOpen(false)} />
            {editTarget && (
                <EditPostModal
                    key={editTarget.uuid}
                    post={editTarget}
                    categories={categories}
                    onClose={() => setEditTarget(null)}
                />
            )}
            {deleteTarget && (
                <DeletePostModal key={deleteTarget.uuid} post={deleteTarget} onClose={() => setDeleteTarget(null)} />
            )}
        </>
    );
}

PostsIndex.layout = {
    breadcrumbs: [{ title: 'Posts', href: index().url }],
};
