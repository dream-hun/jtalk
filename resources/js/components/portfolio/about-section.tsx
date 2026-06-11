import { BlurFade } from '@/components/portfolio/blur-fade';

interface AboutSectionProps {
    description: string;
}

export function AboutSection({ description }: AboutSectionProps) {
    return (
        <section id="about" className="w-full">
            <div className="flex min-h-0 flex-col gap-y-4">
                <BlurFade delay={120}>
                    <h2 className="text-xl font-bold">About</h2>
                </BlurFade>
                <BlurFade delay={160}>
                    <p className="prose max-w-full font-sans leading-relaxed text-pretty text-muted-foreground dark:prose-invert">
                        {description}
                    </p>
                </BlurFade>
            </div>
        </section>
    );
}
