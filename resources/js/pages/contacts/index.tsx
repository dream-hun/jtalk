import { Form, Head } from '@inertiajs/react';
import { MoreHorizontal, RefreshCw, Trash2 } from 'lucide-react';
import { useState } from 'react';
import ContactController from '@/actions/App/Http/Controllers/ContactController';
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
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Spinner } from '@/components/ui/spinner';
import { index } from '@/routes/contacts';

type Contact = {
    uuid: string;
    name: string;
    email: string;
    message: string;
    status: 'lead' | 'replied' | 'archived';
    created_at: string;
};

const statusVariant: Record<
    string,
    'default' | 'secondary' | 'destructive' | 'outline'
> = {
    lead: 'default',
    replied: 'secondary',
    archived: 'outline',
};

function UpdateStatusModal({
    contact,
    onClose,
}: {
    contact: Contact;
    onClose: () => void;
}) {
    const [status, setStatus] = useState<string>(contact.status);

    return (
        <Dialog open onOpenChange={(o) => !o && onClose()}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Update Status</DialogTitle>
                    <DialogDescription>
                        Update the status for the message from{' '}
                        <strong>{contact.name}</strong>.
                    </DialogDescription>
                </DialogHeader>
                <Form
                    {...ContactController.update.form(contact)}
                    options={{ preserveScroll: true }}
                    onSuccess={onClose}
                    resetOnSuccess
                >
                    {({ processing, errors }) => (
                        <div className="space-y-4">
                            <input type="hidden" name="status" value={status} />
                            <div className="grid gap-2">
                                <Label htmlFor="status">Status</Label>
                                <Select
                                    value={status}
                                    onValueChange={setStatus}
                                >
                                    <SelectTrigger
                                        id="status"
                                        className="w-full"
                                    >
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="lead">
                                            Lead
                                        </SelectItem>
                                        <SelectItem value="replied">
                                            Replied
                                        </SelectItem>
                                        <SelectItem value="archived">
                                            Archived
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                                <InputError message={errors.status} />
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

function DeleteContactModal({
    contact,
    onClose,
}: {
    contact: Contact;
    onClose: () => void;
}) {
    return (
        <Dialog open onOpenChange={(o) => !o && onClose()}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Delete Contact</DialogTitle>
                    <DialogDescription>
                        Are you sure you want to delete the message from{' '}
                        <strong>{contact.name}</strong>? This action cannot be
                        undone.
                    </DialogDescription>
                </DialogHeader>
                <Form
                    {...ContactController.destroy.form(contact)}
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
                            <Button
                                type="submit"
                                variant="destructive"
                                disabled={processing}
                            >
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

export default function ContactsIndex({ contacts }: { contacts: Contact[] }) {
    const [updateTarget, setUpdateTarget] = useState<Contact | null>(null);
    const [deleteTarget, setDeleteTarget] = useState<Contact | null>(null);

    return (
        <>
            <Head title="Contacts" />

            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-xl font-semibold tracking-tight">
                            Contacts
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Manage incoming contact messages.
                        </p>
                    </div>
                </div>

                <div className="rounded-lg border">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b bg-muted/50">
                                <th className="px-4 py-3 text-left font-medium">
                                    Name
                                </th>
                                <th className="px-4 py-3 text-left font-medium">
                                    Email
                                </th>
                                <th className="px-4 py-3 text-left font-medium">
                                    Message
                                </th>
                                <th className="px-4 py-3 text-left font-medium">
                                    Status
                                </th>
                                <th className="px-4 py-3 text-left font-medium">
                                    Date
                                </th>
                                <th className="px-4 py-3 text-right font-medium">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {contacts.length === 0 && (
                                <tr>
                                    <td
                                        colSpan={6}
                                        className="px-4 py-8 text-center text-muted-foreground"
                                    >
                                        No contact messages yet.
                                    </td>
                                </tr>
                            )}
                            {contacts.map((contact) => (
                                <tr
                                    key={contact.uuid}
                                    className="border-b last:border-0 hover:bg-muted/30"
                                >
                                    <td className="px-4 py-3 font-medium">
                                        {contact.name}
                                    </td>
                                    <td className="px-4 py-3 text-muted-foreground">
                                        {contact.email}
                                    </td>
                                    <td className="max-w-xs truncate px-4 py-3 text-muted-foreground">
                                        {contact.message}
                                    </td>
                                    <td className="px-4 py-3">
                                        <Badge
                                            variant={
                                                statusVariant[contact.status] ??
                                                'secondary'
                                            }
                                        >
                                            {contact.status}
                                        </Badge>
                                    </td>
                                    <td className="px-4 py-3 text-muted-foreground">
                                        {new Date(
                                            contact.created_at,
                                        ).toLocaleDateString()}
                                    </td>
                                    <td className="px-4 py-3 text-right">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                >
                                                    <MoreHorizontal />
                                                    <span className="sr-only">
                                                        Actions
                                                    </span>
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuGroup>
                                                    <DropdownMenuItem
                                                        onClick={() =>
                                                            setUpdateTarget(
                                                                contact,
                                                            )
                                                        }
                                                    >
                                                        <RefreshCw />
                                                        Update Status
                                                    </DropdownMenuItem>
                                                    <DropdownMenuSeparator />
                                                    <DropdownMenuItem
                                                        variant="destructive"
                                                        onClick={() =>
                                                            setDeleteTarget(
                                                                contact,
                                                            )
                                                        }
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

            {updateTarget && (
                <UpdateStatusModal
                    key={updateTarget.uuid}
                    contact={updateTarget}
                    onClose={() => setUpdateTarget(null)}
                />
            )}
            {deleteTarget && (
                <DeleteContactModal
                    key={deleteTarget.uuid}
                    contact={deleteTarget}
                    onClose={() => setDeleteTarget(null)}
                />
            )}
        </>
    );
}

ContactsIndex.layout = {
    breadcrumbs: [{ title: 'Contacts', href: index().url }],
};
