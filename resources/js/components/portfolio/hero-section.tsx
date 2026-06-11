import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface HeroSectionProps {
    name: string;
    title: string;
    description: string;
}

function getInitials(name: string): string {
    return name
        .split(' ')
        .slice(0, 2)
        .map((part) => part[0])
        .join('')
        .toUpperCase();
}

export function HeroSection({ name, description }: HeroSectionProps) {
    return (
        <section id="hero" className="w-full">
            <div className="flex flex-col justify-between gap-2 gap-y-6 md:flex-row">
                <div className="order-2 flex flex-col gap-2 md:order-1">
                    <span className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl">
                        Hi, I&apos;m {name.split(' ')[0]}
                    </span>
                    <span className="max-w-[600px] text-muted-foreground md:text-lg lg:text-xl">
                        {description}
                    </span>
                </div>
                <div className="order-1 md:order-2">
                    <Avatar className="size-24 rounded-full border shadow-lg ring-4 ring-muted md:size-32">
                        <AvatarImage
                            src="/photos/jacques-mbabazi.avif"
                            alt={name}
                            className="object-cover object-top"
                            fetchpriority="high"
                            width={128}
                            height={128}
                        />
                        <AvatarFallback className="text-2xl font-bold">
                            {getInitials(name)}
                        </AvatarFallback>
                    </Avatar>
                </div>
            </div>
        </section>
    );
}
