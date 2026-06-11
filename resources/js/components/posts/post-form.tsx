import { useEffect, useRef, useState } from 'react';
import InputError from '@/components/input-error';
import { RichTextEditor } from '@/components/posts/rich-text-editor';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Spinner } from '@/components/ui/spinner';

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

function ImageUploadField({
    name,
    currentImage,
    label,
    error,
}: {
    name: string;
    currentImage?: string | null;
    label: string;
    error?: string;
}) {
    const currentImageUrl = currentImage ? `/storage/${currentImage}` : null;
    const [preview, setPreview] = useState<string | null>(currentImageUrl);
    const objectUrlRef = useRef<string | null>(null);

    useEffect(() => {
        return () => {
            if (objectUrlRef.current) {
                URL.revokeObjectURL(objectUrlRef.current);
            }
        };
    }, []);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (objectUrlRef.current) {
            URL.revokeObjectURL(objectUrlRef.current);
            objectUrlRef.current = null;
        }

        const file = e.target.files?.[0];

        if (file) {
            objectUrlRef.current = URL.createObjectURL(file);
            setPreview(objectUrlRef.current);
        } else {
            setPreview(currentImageUrl);
        }
    }

    return (
        <div className="grid gap-2">
            <Label htmlFor={name}>{label}</Label>
            {preview && (
                <img
                    src={preview}
                    alt="Preview"
                    className="h-40 w-full rounded-md border object-cover"
                />
            )}
            <Input
                id={name}
                name={name}
                type="file"
                accept="image/*,.avif"
                onChange={handleChange}
            />
            <InputError message={error} />
        </div>
    );
}

export function PostForm({
    post,
    categories,
    errors,
    processing,
    onCancel,
}: {
    post?: Post;
    categories: Category[];
    errors: Record<string, string>;
    processing: boolean;
    onCancel?: () => void;
}) {
    const NONE = '__none__';
    const [status, setStatus] = useState<string>(post?.status ?? 'draft');
    const [categoryId, setCategoryId] = useState<string>(
        post?.category?.id?.toString() ?? NONE,
    );

    return (
        <div className="space-y-6">
            <input type="hidden" name="status" value={status} />
            <input
                type="hidden"
                name="category_id"
                value={categoryId === NONE ? '' : categoryId}
            />

            <div className="grid gap-2">
                <Label htmlFor="title">Title</Label>
                <Input
                    id="title"
                    name="title"
                    defaultValue={post?.title ?? ''}
                    placeholder="Post title"
                    required
                />
                <InputError message={errors.title} />
            </div>

            <div className="grid gap-2">
                <Label htmlFor="excerpt">Excerpt</Label>
                <Input
                    id="excerpt"
                    name="excerpt"
                    defaultValue={post?.excerpt ?? ''}
                    placeholder="Short description…"
                />
                <InputError message={errors.excerpt} />
            </div>

            <div className="grid gap-2">
                <Label>Content</Label>
                <RichTextEditor
                    name="content"
                    defaultValue={post?.content ?? ''}
                    error={errors.content}
                />
            </div>

            <ImageUploadField
                name="cover_image"
                currentImage={post?.cover_image}
                label="Cover Image"
                error={errors.cover_image}
            />

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
                                <SelectItem
                                    key={cat.id}
                                    value={cat.id.toString()}
                                >
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

            <div className="flex items-center gap-3">
                <Button type="submit" disabled={processing}>
                    {processing && <Spinner />}
                    {post ? 'Update Post' : 'Create Post'}
                </Button>
                {onCancel && (
                    <Button type="button" variant="outline" onClick={onCancel}>
                        Cancel
                    </Button>
                )}
            </div>
        </div>
    );
}
