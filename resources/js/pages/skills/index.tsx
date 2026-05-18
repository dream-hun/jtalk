import { Form, Head } from '@inertiajs/react';
import { SafeDynamicIcon } from '@/components/ui/safe-dynamic-icon';
import { MoreHorizontal, Pencil, Plus, Trash2 } from 'lucide-react';
import { useState } from 'react';
import SkillController from '@/actions/App/Http/Controllers/SkillController';
import InputError from '@/components/input-error';
import { IconPicker } from '@/components/ui/icon-picker';
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
import { Spinner } from '@/components/ui/spinner';
import { index } from '@/routes/skills';

type Skill = {
    uuid: string;
    name: string;
    icon: string | null;
};

function CreateSkillModal({ open, onClose }: { open: boolean; onClose: () => void }) {
    return (
        <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>New Skill</DialogTitle>
                    <DialogDescription>Add a new skill to your portfolio.</DialogDescription>
                </DialogHeader>
                <Form
                    {...SkillController.store.form()}
                    options={{ preserveScroll: true }}
                    onSuccess={onClose}
                    resetOnSuccess
                >
                    {({ processing, errors }) => (
                        <div className="space-y-4">
                            <div className="grid gap-2">
                                <Label htmlFor="create-name">Name</Label>
                                <Input id="create-name" name="name" placeholder="e.g. Laravel" required />
                                <InputError message={errors.name} />
                            </div>
                            <div className="grid gap-2">
                                <Label>Icon</Label>
                                <IconPicker name="icon" defaultValue={null} />
                                <InputError message={errors.icon} />
                            </div>
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

function EditSkillModal({ skill, onClose }: { skill: Skill; onClose: () => void }) {
    return (
        <Dialog open onOpenChange={(o) => !o && onClose()}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit Skill</DialogTitle>
                    <DialogDescription>Update the skill details.</DialogDescription>
                </DialogHeader>
                <Form
                    {...SkillController.update.form(skill)}
                    options={{ preserveScroll: true }}
                    onSuccess={onClose}
                    resetOnSuccess
                >
                    {({ processing, errors }) => (
                        <div className="space-y-4">
                            <div className="grid gap-2">
                                <Label htmlFor="edit-name">Name</Label>
                                <Input id="edit-name" name="name" defaultValue={skill.name} required />
                                <InputError message={errors.name} />
                            </div>
                            <div className="grid gap-2">
                                <Label>Icon</Label>
                                <IconPicker name="icon" defaultValue={skill.icon ?? null} />
                                <InputError message={errors.icon} />
                            </div>
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

function DeleteSkillModal({ skill, onClose }: { skill: Skill; onClose: () => void }) {
    return (
        <Dialog open onOpenChange={(o) => !o && onClose()}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Delete Skill</DialogTitle>
                    <DialogDescription>
                        Are you sure you want to delete <strong>{skill.name}</strong>? This action cannot be undone.
                    </DialogDescription>
                </DialogHeader>
                <Form
                    {...SkillController.destroy.form(skill)}
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

export default function SkillsIndex({ skills }: { skills: Skill[] }) {
    const [createOpen, setCreateOpen] = useState(false);
    const [editTarget, setEditTarget] = useState<Skill | null>(null);
    const [deleteTarget, setDeleteTarget] = useState<Skill | null>(null);

    return (
        <>
            <Head title="Skills" />

            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-xl font-semibold tracking-tight">Skills</h1>
                        <p className="text-sm text-muted-foreground">Manage your technical skills.</p>
                    </div>
                    <Button onClick={() => setCreateOpen(true)}>
                        <Plus />
                        New Skill
                    </Button>
                </div>

                <div className="rounded-lg border">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b bg-muted/50">
                                <th className="px-4 py-3 text-left font-medium">Name</th>
                                <th className="px-4 py-3 text-left font-medium">Icon</th>
                                <th className="px-4 py-3 text-right font-medium">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {skills.length === 0 && (
                                <tr>
                                    <td colSpan={3} className="px-4 py-8 text-center text-muted-foreground">
                                        No skills found. Add one to get started.
                                    </td>
                                </tr>
                            )}
                            {skills.map((skill) => (
                                <tr key={skill.uuid} className="border-b last:border-0 hover:bg-muted/30">
                                    <td className="px-4 py-3 font-medium">{skill.name}</td>
                                    <td className="px-4 py-3 text-muted-foreground">
                                        {skill.icon ? (
                                            <SafeDynamicIcon name={skill.icon} className="size-4" fallback={() => <span>{skill.icon}</span>} />
                                        ) : '—'}
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
                                                    <DropdownMenuItem onClick={() => setEditTarget(skill)}>
                                                        <Pencil />
                                                        Edit
                                                    </DropdownMenuItem>
                                                    <DropdownMenuSeparator />
                                                    <DropdownMenuItem
                                                        variant="destructive"
                                                        onClick={() => setDeleteTarget(skill)}
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

            <CreateSkillModal open={createOpen} onClose={() => setCreateOpen(false)} />
            {editTarget && <EditSkillModal key={editTarget.uuid} skill={editTarget} onClose={() => setEditTarget(null)} />}
            {deleteTarget && <DeleteSkillModal key={deleteTarget.uuid} skill={deleteTarget} onClose={() => setDeleteTarget(null)} />}
        </>
    );
}

SkillsIndex.layout = {
    breadcrumbs: [{ title: 'Skills', href: index().url }],
};
