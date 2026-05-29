import { BlurFade } from '@/components/portfolio/blur-fade';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { cn } from '@/lib/utils';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { useState } from 'react';

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
    return new Date(dateString).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

function LogoImage({ src, alt }: { src: string; alt: string }) {
    const [imageError, setImageError] = useState(false);

    if (!src || imageError) {
        return <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />;
    }

    return (
        <img
            src={src}
            alt={alt}
            className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none"
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
                    <Accordion type="single" collapsible className="w-full grid gap-6">
                        {works.map((work) => {
                            const startDate = formatDate(work.start_date);
                            const endDate = work.is_current ? 'Present' : work.end_date ? formatDate(work.end_date) : '';

                            return (
                                <AccordionItem key={work.uuid} value={work.uuid} className="w-full border-b-0 grid gap-2">
                                    <AccordionTrigger className="hover:no-underline p-0 cursor-pointer transition-colors rounded-none group [&>svg]:hidden">
                                        <div className="flex items-center gap-x-3 justify-between w-full text-left">
                                            <div className="flex items-center gap-x-3 flex-1 min-w-0">
                                                {work.logo ? (
                                                    <LogoImage src={work.logo} alt={work.company} />
                                                ) : (
                                                    <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
                                                )}
                                                <div className="flex-1 min-w-0 gap-0.5 flex flex-col">
                                                    <div className="font-semibold leading-none flex items-center gap-2">
                                                        {work.company}
                                                        <span className="relative inline-flex items-center w-3.5 h-3.5">
                                                            <ChevronRight
                                                                className={cn(
                                                                    'absolute h-3.5 w-3.5 shrink-0 text-muted-foreground stroke-2 transition-all duration-300 ease-out',
                                                                    'translate-x-0 opacity-0',
                                                                    'group-hover:translate-x-1 group-hover:opacity-100',
                                                                    'group-data-[state=open]:opacity-0 group-data-[state=open]:translate-x-0',
                                                                )}
                                                            />
                                                            <ChevronDown
                                                                className={cn(
                                                                    'absolute h-3.5 w-3.5 shrink-0 text-muted-foreground stroke-2 transition-all duration-200',
                                                                    'opacity-0 rotate-0',
                                                                    'group-data-[state=open]:opacity-100 group-data-[state=open]:rotate-180',
                                                                )}
                                                            />
                                                        </span>
                                                    </div>
                                                    <div className="font-sans text-sm text-muted-foreground">{work.title}</div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                                                <span>
                                                    {startDate} - {endDate}
                                                </span>
                                            </div>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="p-0 ml-11 md:ml-13 text-xs sm:text-sm text-muted-foreground">
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
