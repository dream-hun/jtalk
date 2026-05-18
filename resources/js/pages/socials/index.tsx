import { Form, Head } from '@inertiajs/react';
import { SafeDynamicIcon } from '@/components/ui/safe-dynamic-icon';
import { MoreHorizontal, Pencil, Plus, Trash2 } from 'lucide-react';
import { useState } from 'react';
import SocialController from '@/actions/App/Http/Controllers/SocialController';
import InputError from '@/components/input-error';
import { IconPicker } from '@/components/ui/icon-picker';
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
import { index } from '@/routes/socials';

type Social = {
    uuid: string;
    platform: string;
    url: string;
    icon: string | null;
    status: 'active' | 'inactive' | null;
};

function SocialFormFields({ social, errors }: { social?: Social; errors: Record<string, string> }) {
    const [status, setStatus] = useState<string>(social?.status ?? 'active');

    return (
        <>
            <input type="hidden" name="status" value={status} />
            <div className="grid gap-2">
                <Label htmlFor="platform">Platform</Label>
                <Input id="platform" name="platform" defaultValue={social?.platform ?? ''} placeholder="e.g. GitHub" required />
                <InputError message={errors.platform} />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="url">URL</Label>
                <Input id="url" name="url" type="url" defaultValue={social?.url ?? ''} placeholder="https://..." required />
                <InputError message={errors.url} />
            </div>
            <div className="grid gap-2">
                <Label>Icon</Label>
                <IconPicker name="icon" defaultValue={social?.icon ?? null} />
                <InputError message={errors.icon} />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="status">Status</Label>
                <Select value={status} onValueChange={setStatus}>
                    <SelectTrigger id="status" className="w-full">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="inactive">Inactive</SelectItem>
                    </SelectContent>
                </Select>
                <InputError message={errors.status} />
            </div>
        </>
    );
}

function CreateSocialModal({ open, onClose }: { open: boolean; onClose: () => void }) {
    return (
        <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>New Social</DialogTitle>
                    <DialogDescription>Add a new social media link.</DialogDescription>
                </DialogHeader>
                <Form
                    {...SocialController.store.form()}
                    options={{ preserveScroll: true }}
                    onSuccess={onClose}
                    resetOnSuccess
                >
                    {({ processing, errors }) => (
                        <div className="space-y-4">
                            <SocialFormFields errors={errors} />
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

function EditSocialModal({ social, onClose }: { social: Social; onClose: () => void }) {
    return (
        <Dialog open onOpenChange={(o) => !o && onClose()}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit Social</DialogTitle>
                    <DialogDescription>Update the social media link.</DialogDescription>
                </DialogHeader>
                <Form
                    {...SocialController.update.form(social)}
                    options={{ preserveScroll: true }}
                    onSuccess={onClose}
                    resetOnSuccess
                >
                    {({ processing, errors }) => (
                        <div className="space-y-4">
                            <SocialFormFields social={social} errors={errors} />
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

function DeleteSocialModal({ social, onClose }: { social: Social; onClose: () => void }) {
    return (
        <Dialog open onOpenChange={(o) => !o && onClose()}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Delete Social</DialogTitle>
                    <DialogDescription>
                        Are you sure you want to delete <strong>{social.platform}</strong>? This action cannot be undone.
                    </DialogDescription>
                </DialogHeader>
                <Form
                    {...SocialController.destroy.form(social)}
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

export default function SocialsIndex({ socials }: { socials: Social[] }) {
    const [createOpen, setCreateOpen] = useState(false);
    const [editTarget, setEditTarget] = useState<Social | null>(null);
    const [deleteTarget, setDeleteTarget] = useState<Social | null>(null);

    return (
        <>
            <Head title="Socials" />

            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-xl font-semibold tracking-tight">Socials</h1>
                        <p className="text-sm text-muted-foreground">Manage your social media links.</p>
                    </div>
                    <Button onClick={() => setCreateOpen(true)}>
                        <Plus />
                        New Social
                    </Button>
                </div>

                <div className="rounded-lg border">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b bg-muted/50">
                                <th className="px-4 py-3 text-left font-medium">Platform</th>
                                <th className="px-4 py-3 text-left font-medium">URL</th>
                                <th className="px-4 py-3 text-left font-medium">Icon</th>
                                <th className="px-4 py-3 text-left font-medium">Status</th>
                                <th className="px-4 py-3 text-right font-medium">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {socials.length === 0 && (
                                <tr>
                                    <td colSpan={5} className="px-4 py-8 text-center text-muted-foreground">
                                        No socials found. Add one to get started.
                                    </td>
                                </tr>
                            )}
                            {socials.map((social) => (
                                <tr key={social.uuid} className="border-b last:border-0 hover:bg-muted/30">
                                    <td className="px-4 py-3 font-medium">{social.platform}</td>
                                    <td className="max-w-xs truncate px-4 py-3 text-muted-foreground">
                                        <a href={social.url} target="_blank" rel="noreferrer" className="hover:underline">
                                            {social.url}
                                        </a>
                                    </td>
                                    <td className="px-4 py-3 text-muted-foreground">
                                        {social.icon ? (
                                            <SafeDynamicIcon name={social.icon} className="size-4" fallback={() => <span>{social.icon}</span>} />
                                        ) : '—'}
                                    </td>
                                    <td className="px-4 py-3">
                                        <Badge variant={social.status === 'active' ? 'default' : 'secondary'}>
                                            {social.status ?? 'active'}
                                        </Badge>
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
                                                    <DropdownMenuItem onClick={() => setEditTarget(social)}>
                                                        <Pencil />
                                                        Edit
                                                    </DropdownMenuItem>
                                                    <DropdownMenuSeparator />
                                                    <DropdownMenuItem
                                                        variant="destructive"
                                                        onClick={() => setDeleteTarget(social)}
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

            <CreateSocialModal open={createOpen} onClose={() => setCreateOpen(false)} />
            {editTarget && <EditSocialModal key={editTarget.uuid} social={editTarget} onClose={() => setEditTarget(null)} />}
            {deleteTarget && (
                <DeleteSocialModal key={deleteTarget.uuid} social={deleteTarget} onClose={() => setDeleteTarget(null)} />
            )}
        </>
    );
}

SocialsIndex.layout = {
    breadcrumbs: [{ title: 'Socials', href: index().url }],
};
