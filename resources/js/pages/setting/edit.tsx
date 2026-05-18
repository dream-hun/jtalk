import { Form, Head } from '@inertiajs/react';
import SettingController from '@/actions/App/Http/Controllers/SettingController';
import Heading from '@/components/heading';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { edit } from '@/routes/setting';

type Setting = {
    uuid: string;
    name: string;
    title: string;
    description: string;
    email: string;
    phone: string;
    address: string;
};

export default function SettingEdit({ setting }: { setting: Setting }) {
    return (
        <>
            <Head title="Setting" />

            <div className="flex h-full flex-1 flex-col gap-6 p-4">
                <Heading title="Site Settings" description="Configure your portfolio's metadata and contact information." />

                <Form
                    {...SettingController.update.form()}
                    options={{ preserveScroll: true }}
                    className="max-w-xl space-y-6"
                >
                    {({ processing, errors }) => (
                        <>
                            <div className="grid gap-2">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" name="name" defaultValue={setting.name} placeholder="Your full name" required />
                                <InputError message={errors.name} />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="title">Title</Label>
                                <Input
                                    id="title"
                                    name="title"
                                    defaultValue={setting.title}
                                    placeholder="e.g. Full-Stack Developer"
                                    required
                                />
                                <InputError message={errors.title} />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="description">Description</Label>
                                <textarea
                                    id="description"
                                    name="description"
                                    defaultValue={setting.description}
                                    placeholder="A short bio about yourself..."
                                    required
                                    className="border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 flex min-h-[100px] w-full min-w-0 rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                                />
                                <InputError message={errors.description} />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    defaultValue={setting.email}
                                    placeholder="you@example.com"
                                    required
                                />
                                <InputError message={errors.email} />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="phone">Phone</Label>
                                <Input id="phone" name="phone" defaultValue={setting.phone} placeholder="+1 234 567 8900" required />
                                <InputError message={errors.phone} />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="address">Address</Label>
                                <Input
                                    id="address"
                                    name="address"
                                    defaultValue={setting.address}
                                    placeholder="City, Country"
                                    required
                                />
                                <InputError message={errors.address} />
                            </div>
                            <Button type="submit" disabled={processing}>
                                {processing && <Spinner />}
                                Save Settings
                            </Button>
                        </>
                    )}
                </Form>
            </div>
        </>
    );
}

SettingEdit.layout = {
    breadcrumbs: [{ title: 'Setting', href: edit().url }],
};
