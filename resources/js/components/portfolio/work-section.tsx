import { ChevronDown, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { BlurFade } from '@/components/portfolio/blur-fade';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';

interface Work {
    uuid: string;
    title: string;
    company: string;
    logo: string | null;
    location: string;
    employment_type: string;
    start_date: string;
    end_date: string | null;
    is_current: boolean;
    description: string;
}

interface WorkSectionProps {
    works: Work[];
}

function formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString('en-US', {
        month: 'short',
        year: 'numeric',
    });
}

function LogoImage({ src, alt }: { src: string; alt: string }) {
    const [imageError, setImageError] = useState(false);

    if (!src || imageError) {
        return (
            <div className="size-8 flex-none rounded-full border bg-muted p-1 shadow ring-2 ring-border md:size-10" />
        );
    }

    return (
        <img
            src={src}
            alt={alt}
            width={40}
            height={40}
            loading="lazy"
            className="size-8 flex-none overflow-hidden rounded-full border object-contain p-1 shadow ring-2 ring-border md:size-10"
            onError={() => setImageError(true)}
        />
    );
}

export function WorkSection({ works }: WorkSectionProps) {
    if (works.length === 0) {
        return null;
    }

    return (
        <section id="work" className="w-full">
            <div className="flex min-h-0 flex-col gap-y-6">
                <BlurFade delay={200}>
                    <h2 className="text-xl font-bold">Work Experience</h2>
                </BlurFade>
                <BlurFade delay={240}>
                    <Accordion
                        type="single"
                        collapsible
                        className="grid w-full gap-6"
                    >
                        {works.map((work) => {
                            const startDate = formatDate(work.start_date);
                            const endDate = work.is_current
                                ? 'Present'
                                : work.end_date
                                  ? formatDate(work.end_date)
                                  : '';

                            return (
                                <AccordionItem
                                    key={work.uuid}
                                    value={work.uuid}
                                    className="grid w-full gap-2 border-b-0"
                                >
                                    <AccordionTrigger className="group cursor-pointer rounded-none p-0 transition-colors hover:no-underline [&>svg]:hidden">
                                        <div className="flex w-full items-center justify-between gap-x-3 text-left">
                                            <div className="flex min-w-0 flex-1 items-center gap-x-3">
                                                {work.logo ? (
                                                    <LogoImage
                                                        src={work.logo}
                                                        alt={work.company}
                                                    />
                                                ) : (
                                                    <div className="size-8 flex-none rounded-full border bg-muted p-1 shadow ring-2 ring-border md:size-10" />
                                                )}
                                                <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                                                    <div className="flex items-center gap-2 leading-none font-semibold">
                                                        {work.company}
                                                        <span className="relative inline-flex h-3.5 w-3.5 items-center">
                                                            <ChevronRight
                                                                className={cn(
                                                                    'absolute h-3.5 w-3.5 shrink-0 stroke-2 text-muted-foreground transition-all duration-300 ease-out',
                                                                    'translate-x-0 opacity-0',
                                                                    'group-hover:translate-x-1 group-hover:opacity-100',
                                                                    'group-data-[state=open]:translate-x-0 group-data-[state=open]:opacity-0',
                                                                )}
                                                            />
                                                            <ChevronDown
                                                                className={cn(
                                                                    'absolute h-3.5 w-3.5 shrink-0 stroke-2 text-muted-foreground transition-all duration-200',
                                                                    'rotate-0 opacity-0',
                                                                    'group-data-[state=open]:rotate-180 group-data-[state=open]:opacity-100',
                                                                )}
                                                            />
                                                        </span>
                                                    </div>
                                                    <div className="font-sans text-sm text-muted-foreground">
                                                        {work.title}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-none items-center gap-1 text-right text-xs text-muted-foreground tabular-nums">
                                                <span>
                                                    {startDate} - {endDate}
                                                </span>
                                            </div>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="ml-11 p-0 text-xs text-muted-foreground sm:text-sm md:ml-13">
                                        {work.description}
                                    </AccordionContent>
                                </AccordionItem>
                            );
                        })}
                    </Accordion>
                </BlurFade>
            </div>
        </section>
    );
}
