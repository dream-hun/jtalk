import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import { BlurFade } from '@/components/portfolio/blur-fade';

interface Education {
    uuid: string;
    institution: string;
    logo: string | null;
    degree: string;
    start_date: string;
    end_date: string | null;
    is_current: boolean | null;
}

interface EducationSectionProps {
    education: Education[];
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

export function EducationSection({ education }: EducationSectionProps) {
    if (education.length === 0) {
        return null;
    }

    return (
        <section id="education" className="w-full">
            <div className="flex min-h-0 flex-col gap-y-6">
                <BlurFade delay={280}>
                    <h2 className="text-xl font-bold">Education</h2>
                </BlurFade>
                <div className="flex flex-col gap-8">
                    {education.map((edu, index) => {
                        const startDate = formatDate(edu.start_date);
                        const endDate = edu.is_current
                            ? 'Present'
                            : edu.end_date
                              ? formatDate(edu.end_date)
                              : '';

                        return (
                            <BlurFade key={edu.uuid} delay={300 + index * 50}>
                                <div className="group flex items-center justify-between gap-x-3">
                                    <div className="flex min-w-0 flex-1 items-center gap-x-3">
                                        {edu.logo ? (
                                            <LogoImage
                                                src={edu.logo}
                                                alt={edu.institution}
                                            />
                                        ) : (
                                            <div className="size-8 flex-none rounded-full border bg-muted p-1 shadow ring-2 ring-border md:size-10" />
                                        )}
                                        <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                                            <div className="flex items-center gap-2 leading-none font-semibold">
                                                {edu.institution}
                                                <ArrowUpRight
                                                    className="h-3.5 w-3.5 -translate-x-2 text-muted-foreground opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                                                    aria-hidden
                                                />
                                            </div>
                                            <div className="font-sans text-sm text-muted-foreground">
                                                {edu.degree}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-none items-center gap-1 text-right text-xs text-muted-foreground tabular-nums">
                                        <span>
                                            {startDate}
                                            {endDate ? ` - ${endDate}` : ''}
                                        </span>
                                    </div>
                                </div>
                            </BlurFade>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
