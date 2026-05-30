import { Form } from '@inertiajs/react';
import { store } from '@/actions/App/Http/Controllers/ContactController';
import InputError from '@/components/input-error';
import { FlickeringGrid } from '@/components/magicui/flickering-grid';
import { BlurFade } from '@/components/portfolio/blur-fade';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { cn } from '@/lib/utils';

interface Setting {
    email: string;
    phone: string;
    address: string;
}

interface ContactSectionProps {
    setting: Setting;
}

export function ContactSection({ setting }: ContactSectionProps) {
    return (
        <section id="contact" className="w-full">
            <BlurFade delay={560}>
                <div className="border rounded-xl p-10 relative">
                    <div className="absolute -top-4 border bg-primary z-10 rounded-xl px-4 py-1 left-1/2 -translate-x-1/2">
                        <span className="text-primary-foreground text-sm font-medium">Contact</span>
                    </div>
                    <div className="absolute inset-0 top-0 left-0 right-0 h-1/3 rounded-xl overflow-hidden">
                        <FlickeringGrid
                            className="h-full w-full"
                            squareSize={2}
                            gridGap={2}
                            style={{
                                maskImage: 'linear-gradient(to bottom, black, transparent)',
                                WebkitMaskImage: 'linear-gradient(to bottom, black, transparent)',
                            }}
                        />
                    </div>
                    <div className="relative flex flex-col items-center gap-6">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
                            {setting.email && (
                                <p className="mt-2 text-muted-foreground text-balance">
                                    Reach me directly at{' '}
                                    <a
                                        href={`mailto:${setting.email}`}
                                        className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
                                    >
                                        {setting.email}
                                    </a>
                                    {' '}or use the form below.
                                </p>
                            )}
                            {!setting.email && (
                                <p className="mt-2 text-muted-foreground text-balance">
                                    Want to collaborate or just say hi? Fill out the form below.
                                </p>
                            )}
                        </div>

                        <Form {...store.form()} resetOnSuccess={['name', 'email', 'message']} className="w-full max-w-md">
                            {({ processing, errors }) => (
                                <div className="flex flex-col gap-4">
                                    <div className="grid gap-1.5">
                                        <Label htmlFor="contact-name">Name</Label>
                                        <Input
                                            id="contact-name"
                                            name="name"
                                            type="text"
                                            placeholder="Your name"
                                            autoComplete="name"
                                        />
                                        <InputError message={errors.name} />
                                    </div>

                                    <div className="grid gap-1.5">
                                        <Label htmlFor="contact-email">Email</Label>
                                        <Input
                                            id="contact-email"
                                            name="email"
                                            type="email"
                                            placeholder="your@email.com"
                                            autoComplete="email"
                                        />
                                        <InputError message={errors.email} />
                                    </div>

                                    <div className="grid gap-1.5">
                                        <Label htmlFor="contact-message">Message</Label>
                                        <textarea
                                            id="contact-message"
                                            name="message"
                                            rows={4}
                                            placeholder="What's on your mind?"
                                            className={cn(
                                                'border-input placeholder:text-muted-foreground flex w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none resize-none md:text-sm',
                                                'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
                                                'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
                                            )}
                                        />
                                        <InputError message={errors.message} />
                                    </div>

                                    <Button type="submit" className="w-full" disabled={processing}>
                                        {processing && <Spinner />}
                                        Send Message
                                    </Button>
                                </div>
                            )}
                        </Form>
                    </div>
                </div>
            </BlurFade>
        </section>
    );
}
