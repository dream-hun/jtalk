import { Form, Head } from '@inertiajs/react';
import { MoreHorizontal, Pencil, Plus, Trash2 } from 'lucide-react';
import { useState } from 'react';
import WorkController from '@/actions/App/Http/Controllers/WorkController';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { DatePicker } from '@/components/ui/date-picker';
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
import { index } from '@/routes/works';

type Work = {
    uuid: string;
    title: string;
    company: string;
    logo: string;
    location: string;
    employment_type: string;
    start_date: string;
    end_date: string | null;
    is_current: boolean;
    description: string;
};

const employmentTypeLabels: Record<string, string> = {
    full_time: 'Full-time',
    part_time: 'Part-time',
    contract: 'Contract',
    freelance: 'Freelance',
    internship: 'Internship',
};

function WorkFormFields({ work, errors }: { work?: Work; errors: Record<string, string> }) {
    const [employmentType, setEmploymentType] = useState<string>(work?.employment_type ?? 'full_time');
    const [isCurrent, setIsCurrent] = useState<boolean>(work?.is_current ?? false);
    const [startDate, setStartDate] = useState<Date | undefined>(work?.start_date ? new Date(work.start_date) : undefined);
    const [endDate, setEndDate] = useState<Date | undefined>(work?.end_date ? new Date(work.end_date) : undefined);

    return (
        <>
            <input type="hidden" name="employment_type" value={employmentType} />
            <input type="hidden" name="is_current" value={isCurrent ? '1' : '0'} />
            <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                    <Label htmlFor="title">Title</Label>
                    <Input id="title" name="title" defaultValue={work?.title ?? ''} placeholder="e.g. Software Engineer" required />
                    <InputError message={errors.title} />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" name="company" defaultValue={work?.company ?? ''} placeholder="e.g. Acme Inc." required />
                    <InputError message={errors.company} />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                    <Label htmlFor="logo">Logo</Label>
                    <Input id="logo" name="logo" defaultValue={work?.logo ?? ''} placeholder="Logo URL or name" required />
                    <InputError message={errors.logo} />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="location">Location</Label>
                    <Input
                        id="location"
                        name="location"
                        defaultValue={work?.location ?? ''}
                        placeholder="e.g. Remote"
                        required
                    />
                    <InputError message={errors.location} />
                </div>
            </div>
            <div className="grid gap-2">
                <Label htmlFor="employment_type">Employment Type</Label>
                <Select value={employmentType} onValueChange={setEmploymentType}>
                    <SelectTrigger id="employment_type" className="w-full">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="full_time">Full-time</SelectItem>
                        <SelectItem value="part_time">Part-time</SelectItem>
                        <SelectItem value="contract">Contract</SelectItem>
                        <SelectItem value="freelance">Freelance</SelectItem>
                        <SelectItem value="internship">Internship</SelectItem>
                    </SelectContent>
                </Select>
                <InputError message={errors.employment_type} />
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                    <Label>Start Date</Label>
                    <DatePicker name="start_date" value={startDate} onChange={setStartDate} placeholder="Pick start date" />
                    <InputError message={errors.start_date} />
                </div>
                <div className="grid gap-2">
                    <Label>End Date</Label>
                    <DatePicker name="end_date" value={endDate} onChange={setEndDate} placeholder="Pick end date" disabled={isCurrent} />
                    <InputError message={errors.end_date} />
                </div>
            </div>
            <div className="flex items-center gap-2">
                <Checkbox
                    id="is_current"
                    checked={isCurrent}
                    onCheckedChange={(checked) => setIsCurrent(checked === true)}
                />
                <Label htmlFor="is_current">Currently working here</Label>
            </div>
            <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <textarea
                    id="description"
                    name="description"
                    defaultValue={work?.description ?? ''}
                    placeholder="Describe your role and responsibilities..."
                    required
                    className="border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 flex min-h-[100px] w-full min-w-0 rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                />
                <InputError message={errors.description} />
            </div>
        </>
    );
}

function CreateWorkModal({ open, onClose }: { open: boolean; onClose: () => void }) {
    return (
        <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
            <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                    <DialogTitle>New Work Experience</DialogTitle>
                    <DialogDescription>Add a work experience entry to your portfolio.</DialogDescription>
                </DialogHeader>
                <Form
                    {...WorkController.store.form()}
                    options={{ preserveScroll: true }}
                    onSuccess={onClose}
                    resetOnSuccess
                >
                    {({ processing, errors }) => (
                        <div className="max-h-[70vh] space-y-4 overflow-y-auto pr-1">
                            <WorkFormFields errors={errors} />
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

function EditWorkModal({ work, onClose }: { work: Work; onClose: () => void }) {
    return (
        <Dialog open onOpenChange={(o) => !o && onClose()}>
            <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                    <DialogTitle>Edit Work Experience</DialogTitle>
                    <DialogDescription>Update the work experience entry.</DialogDescription>
                </DialogHeader>
                <Form
                    {...WorkController.update.form(work)}
                    options={{ preserveScroll: true }}
                    onSuccess={onClose}
                    resetOnSuccess
                >
                    {({ processing, errors }) => (
                        <div className="max-h-[70vh] space-y-4 overflow-y-auto pr-1">
                            <WorkFormFields work={work} errors={errors} />
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

function DeleteWorkModal({ work, onClose }: { work: Work; onClose: () => void }) {
    return (
        <Dialog open onOpenChange={(o) => !o && onClose()}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Delete Work Experience</DialogTitle>
                    <DialogDescription>
                        Are you sure you want to delete <strong>{work.title}</strong> at{' '}
                        <strong>{work.company}</strong>? This action cannot be undone.
                    </DialogDescription>
                </DialogHeader>
                <Form
                    {...WorkController.destroy.form(work)}
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

function formatDateRange(startDate: string, endDate: string | null, isCurrent: boolean): string {
    const start = new Date(startDate).getFullYear();
    if (isCurrent) {
        return `${start} – Present`;
    }
    if (endDate) {
        return `${start} – ${new Date(endDate).getFullYear()}`;
    }
    return `${start}`;
}

export default function WorksIndex({ works }: { works: Work[] }) {
    const [createOpen, setCreateOpen] = useState(false);
    const [editTarget, setEditTarget] = useState<Work | null>(null);
    const [deleteTarget, setDeleteTarget] = useState<Work | null>(null);

    return (
        <>
            <Head title="Works" />

            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-xl font-semibold tracking-tight">Works</h1>
                        <p className="text-sm text-muted-foreground">Manage your work experience.</p>
                    </div>
                    <Button onClick={() => setCreateOpen(true)}>
                        <Plus />
                        New Work
                    </Button>
                </div>

                <div className="rounded-lg border">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b bg-muted/50">
                                <th className="px-4 py-3 text-left font-medium">Title</th>
                                <th className="px-4 py-3 text-left font-medium">Company</th>
                                <th className="px-4 py-3 text-left font-medium">Type</th>
                                <th className="px-4 py-3 text-left font-medium">Period</th>
                                <th className="px-4 py-3 text-right font-medium">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {works.length === 0 && (
                                <tr>
                                    <td colSpan={5} className="px-4 py-8 text-center text-muted-foreground">
                                        No work experience found. Add one to get started.
                                    </td>
                                </tr>
                            )}
                            {works.map((work) => (
                                <tr key={work.uuid} className="border-b last:border-0 hover:bg-muted/30">
                                    <td className="px-4 py-3 font-medium">{work.title}</td>
                                    <td className="px-4 py-3 text-muted-foreground">{work.company}</td>
                                    <td className="px-4 py-3 text-muted-foreground">
                                        {employmentTypeLabels[work.employment_type] ?? work.employment_type}
                                    </td>
                                    <td className="px-4 py-3 text-muted-foreground">
                                        {formatDateRange(work.start_date, work.end_date, work.is_current)}
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
                                                    <DropdownMenuItem onClick={() => setEditTarget(work)}>
                                                        <Pencil />
                                                        Edit
                                                    </DropdownMenuItem>
                                                    <DropdownMenuSeparator />
                                                    <DropdownMenuItem
                                                        variant="destructive"
                                                        onClick={() => setDeleteTarget(work)}
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

            <CreateWorkModal open={createOpen} onClose={() => setCreateOpen(false)} />
            {editTarget && <EditWorkModal key={editTarget.uuid} work={editTarget} onClose={() => setEditTarget(null)} />}
            {deleteTarget && (
                <DeleteWorkModal key={deleteTarget.uuid} work={deleteTarget} onClose={() => setDeleteTarget(null)} />
            )}
        </>
    );
}

WorksIndex.layout = {
    breadcrumbs: [{ title: 'Works', href: index().url }],
};
