import { Form, Head } from '@inertiajs/react';
import { MoreHorizontal, Pencil, Plus, Trash2 } from 'lucide-react';
import { useState } from 'react';
import EducationController from '@/actions/App/Http/Controllers/EducationController';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
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
import { index } from '@/routes/education';

type Education = {
    uuid: string;
    institution: string;
    logo: string;
    degree: string;
    start_date: string;
    end_date: string | null;
    is_current: boolean | null;
};

function EducationFormFields({ education, errors }: { education?: Education; errors: Record<string, string> }) {
    const [isCurrent, setIsCurrent] = useState<boolean>(education?.is_current ?? false);

    return (
        <>
            <input type="hidden" name="is_current" value={isCurrent ? '1' : '0'} />
            <div className="grid gap-2">
                <Label htmlFor="institution">Institution</Label>
                <Input
                    id="institution"
                    name="institution"
                    defaultValue={education?.institution ?? ''}
                    placeholder="e.g. MIT"
                    required
                />
                <InputError message={errors.institution} />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="logo">Logo</Label>
                <Input id="logo" name="logo" defaultValue={education?.logo ?? ''} placeholder="Logo URL or name" required />
                <InputError message={errors.logo} />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="degree">Degree</Label>
                <Input
                    id="degree"
                    name="degree"
                    defaultValue={education?.degree ?? ''}
                    placeholder="e.g. BSc Computer Science"
                    required
                />
                <InputError message={errors.degree} />
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                    <Label htmlFor="start_date">Start Date</Label>
                    <Input id="start_date" name="start_date" type="date" defaultValue={education?.start_date ?? ''} required />
                    <InputError message={errors.start_date} />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="end_date">End Date</Label>
                    <Input
                        id="end_date"
                        name="end_date"
                        type="date"
                        defaultValue={education?.end_date ?? ''}
                        disabled={isCurrent}
                    />
                    <InputError message={errors.end_date} />
                </div>
            </div>
            <div className="flex items-center gap-2">
                <Checkbox
                    id="is_current"
                    checked={isCurrent}
                    onCheckedChange={(checked) => setIsCurrent(checked === true)}
                />
                <Label htmlFor="is_current">Currently studying here</Label>
            </div>
        </>
    );
}

function CreateEducationModal({ open, onClose }: { open: boolean; onClose: () => void }) {
    return (
        <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
            <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                    <DialogTitle>New Education</DialogTitle>
                    <DialogDescription>Add an education entry to your portfolio.</DialogDescription>
                </DialogHeader>
                <Form
                    {...EducationController.store.form()}
                    options={{ preserveScroll: true }}
                    onSuccess={onClose}
                    resetOnSuccess
                >
                    {({ processing, errors }) => (
                        <div className="space-y-4">
                            <EducationFormFields errors={errors} />
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

function EditEducationModal({ education, onClose }: { education: Education; onClose: () => void }) {
    return (
        <Dialog open onOpenChange={(o) => !o && onClose()}>
            <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                    <DialogTitle>Edit Education</DialogTitle>
                    <DialogDescription>Update the education entry.</DialogDescription>
                </DialogHeader>
                <Form
                    {...EducationController.update.form(education)}
                    options={{ preserveScroll: true }}
                    onSuccess={onClose}
                    resetOnSuccess
                >
                    {({ processing, errors }) => (
                        <div className="space-y-4">
                            <EducationFormFields education={education} errors={errors} />
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

function DeleteEducationModal({ education, onClose }: { education: Education; onClose: () => void }) {
    return (
        <Dialog open onOpenChange={(o) => !o && onClose()}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Delete Education</DialogTitle>
                    <DialogDescription>
                        Are you sure you want to delete <strong>{education.institution}</strong>? This action cannot be
                        undone.
                    </DialogDescription>
                </DialogHeader>
                <Form
                    {...EducationController.destroy.form(education)}
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

function formatDateRange(startDate: string, endDate: string | null, isCurrent: boolean | null): string {
    const start = new Date(startDate).getFullYear();
    if (isCurrent) {
        return `${start} – Present`;
    }
    if (endDate) {
        return `${start} – ${new Date(endDate).getFullYear()}`;
    }
    return `${start}`;
}

export default function EducationIndex({ education }: { education: Education[] }) {
    const [createOpen, setCreateOpen] = useState(false);
    const [editTarget, setEditTarget] = useState<Education | null>(null);
    const [deleteTarget, setDeleteTarget] = useState<Education | null>(null);

    return (
        <>
            <Head title="Education" />

            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-xl font-semibold tracking-tight">Education</h1>
                        <p className="text-sm text-muted-foreground">Manage your education history.</p>
                    </div>
                    <Button onClick={() => setCreateOpen(true)}>
                        <Plus />
                        New Education
                    </Button>
                </div>

                <div className="rounded-lg border">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b bg-muted/50">
                                <th className="px-4 py-3 text-left font-medium">Institution</th>
                                <th className="px-4 py-3 text-left font-medium">Degree</th>
                                <th className="px-4 py-3 text-left font-medium">Period</th>
                                <th className="px-4 py-3 text-right font-medium">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {education.length === 0 && (
                                <tr>
                                    <td colSpan={4} className="px-4 py-8 text-center text-muted-foreground">
                                        No education entries found. Add one to get started.
                                    </td>
                                </tr>
                            )}
                            {education.map((item) => (
                                <tr key={item.uuid} className="border-b last:border-0 hover:bg-muted/30">
                                    <td className="px-4 py-3 font-medium">{item.institution}</td>
                                    <td className="px-4 py-3 text-muted-foreground">{item.degree}</td>
                                    <td className="px-4 py-3 text-muted-foreground">
                                        {formatDateRange(item.start_date, item.end_date, item.is_current)}
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
                                                    <DropdownMenuItem onClick={() => setEditTarget(item)}>
                                                        <Pencil />
                                                        Edit
                                                    </DropdownMenuItem>
                                                    <DropdownMenuSeparator />
                                                    <DropdownMenuItem
                                                        variant="destructive"
                                                        onClick={() => setDeleteTarget(item)}
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

            <CreateEducationModal open={createOpen} onClose={() => setCreateOpen(false)} />
            {editTarget && (
                <EditEducationModal key={editTarget.uuid} education={editTarget} onClose={() => setEditTarget(null)} />
            )}
            {deleteTarget && (
                <DeleteEducationModal
                    key={deleteTarget.uuid}
                    education={deleteTarget}
                    onClose={() => setDeleteTarget(null)}
                />
            )}
        </>
    );
}

EducationIndex.layout = {
    breadcrumbs: [{ title: 'Education', href: index().url }],
};
