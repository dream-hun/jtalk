import { Form, Head } from '@inertiajs/react';
import { MoreHorizontal, Pencil, Plus, Trash2 } from 'lucide-react';
import { useState } from 'react';
import ProjectController from '@/actions/App/Http/Controllers/ProjectController';
import InputError from '@/components/input-error';
import { Badge } from '@/components/ui/badge';
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
import { index } from '@/routes/projects';

type Tag = {
    id: number;
    uuid: string;
    name: string;
};

type Project = {
    uuid: string;
    title: string;
    description: string | null;
    type: string;
    source_code_url: string | null;
    starting_date: string;
    ending_date: string;
    live_url: string | null;
    featured_image: string | null;
    project_status: string;
    tags: Tag[];
};

const projectTypeLabels: Record<string, string> = {
    'web-application': 'Web App',
    'mobile-application': 'Mobile App',
    api: 'API',
    'cli-tool': 'CLI Tool',
    library: 'Library',
    other: 'Other',
};

const projectStatusVariant: Record<string, 'default' | 'secondary' | 'destructive' | 'outline'> = {
    'in-progress': 'default',
    completed: 'secondary',
    'on-hold': 'outline',
    archived: 'destructive',
};

function ProjectFormFields({
    project,
    allTags,
    errors,
}: {
    project?: Project;
    allTags: Tag[];
    errors: Record<string, string>;
}) {
    const [type, setType] = useState<string>(project?.type ?? 'web-application');
    const [status, setStatus] = useState<string>(project?.project_status ?? 'in-progress');
    const [selectedTagIds, setSelectedTagIds] = useState<number[]>(project ? project.tags.map((t) => t.id) : []);
    const [startDate, setStartDate] = useState<Date | undefined>(
        project?.starting_date ? new Date(project.starting_date) : undefined,
    );
    const [endDate, setEndDate] = useState<Date | undefined>(
        project?.ending_date ? new Date(project.ending_date) : undefined,
    );

    function toggleTag(id: number) {
        setSelectedTagIds((prev) => (prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]));
    }

    return (
        <>
            <input type="hidden" name="type" value={type} />
            <input type="hidden" name="project_status" value={status} />
            {selectedTagIds.map((id) => (
                <input key={id} type="hidden" name="tag_ids[]" value={id} />
            ))}
            <div className="grid gap-2">
                <Label htmlFor="title">Title</Label>
                <Input id="title" name="title" defaultValue={project?.title ?? ''} placeholder="Project name" required />
                <InputError message={errors.title} />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <textarea
                    id="description"
                    name="description"
                    defaultValue={project?.description ?? ''}
                    placeholder="Describe the project..."
                    className="border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 flex min-h-[80px] w-full min-w-0 rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                />
                <InputError message={errors.description} />
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                    <Label htmlFor="type">Type</Label>
                    <Select value={type} onValueChange={setType}>
                        <SelectTrigger id="type" className="w-full">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="web-application">Web Application</SelectItem>
                            <SelectItem value="mobile-application">Mobile Application</SelectItem>
                            <SelectItem value="api">API</SelectItem>
                            <SelectItem value="cli-tool">CLI Tool</SelectItem>
                            <SelectItem value="library">Library</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                    </Select>
                    <InputError message={errors.type} />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="project_status">Status</Label>
                    <Select value={status} onValueChange={setStatus}>
                        <SelectTrigger id="project_status" className="w-full">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="in-progress">In Progress</SelectItem>
                            <SelectItem value="completed">Completed</SelectItem>
                            <SelectItem value="on-hold">On Hold</SelectItem>
                            <SelectItem value="archived">Archived</SelectItem>
                        </SelectContent>
                    </Select>
                    <InputError message={errors.project_status} />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                    <Label>Start Date</Label>
                    <DatePicker name="starting_date" value={startDate} onChange={setStartDate} placeholder="Pick start date" />
                    <InputError message={errors.starting_date} />
                </div>
                <div className="grid gap-2">
                    <Label>End Date</Label>
                    <DatePicker name="ending_date" value={endDate} onChange={setEndDate} placeholder="Pick end date" />
                    <InputError message={errors.ending_date} />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                    <Label htmlFor="source_code_url">Source Code URL</Label>
                    <Input
                        id="source_code_url"
                        name="source_code_url"
                        type="url"
                        defaultValue={project?.source_code_url ?? ''}
                        placeholder="https://github.com/..."
                    />
                    <InputError message={errors.source_code_url} />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="live_url">Live URL</Label>
                    <Input
                        id="live_url"
                        name="live_url"
                        type="url"
                        defaultValue={project?.live_url ?? ''}
                        placeholder="https://..."
                    />
                    <InputError message={errors.live_url} />
                </div>
            </div>
            <div className="grid gap-2">
                <Label htmlFor="featured_image">Featured Image URL</Label>
                <Input
                    id="featured_image"
                    name="featured_image"
                    type="url"
                    defaultValue={project?.featured_image ?? ''}
                    placeholder="https://..."
                />
                <InputError message={errors.featured_image} />
            </div>
            {allTags.length > 0 && (
                <div className="grid gap-2">
                    <Label>Tags</Label>
                    <div className="grid grid-cols-2 gap-2 rounded-md border p-3">
                        {allTags.map((tag) => (
                            <div key={tag.uuid} className="flex items-center gap-2">
                                <Checkbox
                                    id={`tag-${tag.uuid}`}
                                    checked={selectedTagIds.includes(tag.id)}
                                    onCheckedChange={() => toggleTag(tag.id)}
                                />
                                <Label htmlFor={`tag-${tag.uuid}`} className="cursor-pointer font-normal">
                                    {tag.name}
                                </Label>
                            </div>
                        ))}
                    </div>
                    <InputError message={errors['tag_ids']} />
                </div>
            )}
        </>
    );
}

function CreateProjectModal({ open, onClose, allTags }: { open: boolean; onClose: () => void; allTags: Tag[] }) {
    return (
        <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
            <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                    <DialogTitle>New Project</DialogTitle>
                    <DialogDescription>Add a new project to your portfolio.</DialogDescription>
                </DialogHeader>
                <Form
                    {...ProjectController.store.form()}
                    options={{ preserveScroll: true }}
                    onSuccess={onClose}
                    resetOnSuccess
                >
                    {({ processing, errors }) => (
                        <div className="max-h-[70vh] space-y-4 overflow-y-auto pr-1">
                            <ProjectFormFields allTags={allTags} errors={errors} />
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

function EditProjectModal({
    project,
    allTags,
    onClose,
}: {
    project: Project;
    allTags: Tag[];
    onClose: () => void;
}) {
    return (
        <Dialog open onOpenChange={(o) => !o && onClose()}>
            <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                    <DialogTitle>Edit Project</DialogTitle>
                    <DialogDescription>Update the project details.</DialogDescription>
                </DialogHeader>
                <Form
                    {...ProjectController.update.form(project)}
                    options={{ preserveScroll: true }}
                    onSuccess={onClose}
                    resetOnSuccess
                >
                    {({ processing, errors }) => (
                        <div className="max-h-[70vh] space-y-4 overflow-y-auto pr-1">
                            <ProjectFormFields project={project} allTags={allTags} errors={errors} />
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

function DeleteProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
    return (
        <Dialog open onOpenChange={(o) => !o && onClose()}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Delete Project</DialogTitle>
                    <DialogDescription>
                        Are you sure you want to delete <strong>{project.title}</strong>? This action cannot be undone.
                    </DialogDescription>
                </DialogHeader>
                <Form
                    {...ProjectController.destroy.form(project)}
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

export default function ProjectsIndex({ projects, tags }: { projects: Project[]; tags: Tag[] }) {
    const [createOpen, setCreateOpen] = useState(false);
    const [editTarget, setEditTarget] = useState<Project | null>(null);
    const [deleteTarget, setDeleteTarget] = useState<Project | null>(null);

    return (
        <>
            <Head title="Projects" />

            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-xl font-semibold tracking-tight">Projects</h1>
                        <p className="text-sm text-muted-foreground">Manage your portfolio projects.</p>
                    </div>
                    <Button onClick={() => setCreateOpen(true)}>
                        <Plus />
                        New Project
                    </Button>
                </div>

                <div className="rounded-lg border">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b bg-muted/50">
                                <th className="px-4 py-3 text-left font-medium">Title</th>
                                <th className="px-4 py-3 text-left font-medium">Type</th>
                                <th className="px-4 py-3 text-left font-medium">Status</th>
                                <th className="px-4 py-3 text-left font-medium">Tags</th>
                                <th className="px-4 py-3 text-right font-medium">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {projects.length === 0 && (
                                <tr>
                                    <td colSpan={5} className="px-4 py-8 text-center text-muted-foreground">
                                        No projects found. Add one to get started.
                                    </td>
                                </tr>
                            )}
                            {projects.map((project) => (
                                <tr key={project.uuid} className="border-b last:border-0 hover:bg-muted/30">
                                    <td className="px-4 py-3 font-medium">{project.title}</td>
                                    <td className="px-4 py-3">
                                        <Badge variant="outline">
                                            {projectTypeLabels[project.type] ?? project.type}
                                        </Badge>
                                    </td>
                                    <td className="px-4 py-3">
                                        <Badge variant={projectStatusVariant[project.project_status] ?? 'secondary'}>
                                            {project.project_status}
                                        </Badge>
                                    </td>
                                    <td className="px-4 py-3">
                                        <div className="flex flex-wrap gap-1">
                                            {project.tags.map((tag) => (
                                                <Badge key={tag.uuid} variant="secondary">
                                                    {tag.name}
                                                </Badge>
                                            ))}
                                        </div>
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
                                                    <DropdownMenuItem onClick={() => setEditTarget(project)}>
                                                        <Pencil />
                                                        Edit
                                                    </DropdownMenuItem>
                                                    <DropdownMenuSeparator />
                                                    <DropdownMenuItem
                                                        variant="destructive"
                                                        onClick={() => setDeleteTarget(project)}
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

            <CreateProjectModal open={createOpen} onClose={() => setCreateOpen(false)} allTags={tags} />
            {editTarget && (
                <EditProjectModal
                    key={editTarget.uuid}
                    project={editTarget}
                    allTags={tags}
                    onClose={() => setEditTarget(null)}
                />
            )}
            {deleteTarget && (
                <DeleteProjectModal key={deleteTarget.uuid} project={deleteTarget} onClose={() => setDeleteTarget(null)} />
            )}
        </>
    );
}

ProjectsIndex.layout = {
    breadcrumbs: [{ title: 'Projects', href: index().url }],
};
