import { BlurFade } from '@/components/portfolio/blur-fade';
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
            <div className="gap-2 gap-y-6 flex flex-col md:flex-row justify-between">
                <BlurFade delay={40} className="gap-2 flex flex-col order-2 md:order-1">
                    <span className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl">
                        Hi, I&apos;m {name.split(' ')[0]}
                    </span>
                    <span className="text-muted-foreground max-w-[600px] md:text-lg lg:text-xl">{description}</span>
                </BlurFade>
                <BlurFade delay={100} className="order-1 md:order-2">
                    <Avatar className="size-24 md:size-32 border rounded-full shadow-lg ring-4 ring-muted">
                        <AvatarImage src="/photos/Jacques MBABAZI.avif" alt={name} className="object-cover object-top" />
                        <AvatarFallback className="text-2xl font-bold">{getInitials(name)}</AvatarFallback>
                    </Avatar>
                </BlurFade>
            </div>
        </section>
    );
}
