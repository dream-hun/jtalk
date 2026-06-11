import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import { BlurFade } from '@/components/portfolio/blur-fade';
import { GitHubIcon } from '@/components/portfolio/skill-icons';
import { Badge } from '@/components/ui/badge';

interface Tag {
    uuid: string;
    name: string;
}

interface Project {
    uuid: string;
    title: string;
    description: string | null;
    starting_date: string;
    ending_date: string;
    live_url: string | null;
    source_code_url: string | null;
    featured_image: string | null;
    project_status: string;
    tags: Tag[];
}

interface ProjectsSectionProps {
    projects: Project[];
}

function formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString('en-US', {
        month: 'short',
        year: 'numeric',
    });
}

function ProjectImage({ src, title }: { src: string | null; title: string }) {
    const [error, setError] = useState(false);

    if (src && !error) {
        return (
            <img
                src={src}
                alt={title}
                width={800}
                height={192}
                loading="lazy"
                className="h-48 w-full object-cover"
                onError={() => setError(true)}
            />
        );
    }

    return <div className="h-48 w-full bg-muted" />;
}

function ProjectCard({ project }: { project: Project }) {
    const dates = `${formatDate(project.starting_date)} – ${formatDate(project.ending_date)}`;

    return (
        <div className="flex h-full cursor-pointer flex-col overflow-hidden rounded-xl border border-border transition-all duration-200 hover:ring-2 hover:ring-muted">
            <div className="relative shrink-0">
                {project.live_url ? (
                    <a
                        href={project.live_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                        aria-label={`Visit ${project.title}`}
                    >
                        <ProjectImage
                            src={project.featured_image}
                            title={project.title}
                        />
                    </a>
                ) : (
                    <ProjectImage
                        src={project.featured_image}
                        title={project.title}
                    />
                )}
                <div className="absolute top-2 right-2 flex flex-wrap gap-2">
                    {project.source_code_url && (
                        <a
                            href={project.source_code_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Badge
                                className="flex items-center gap-1.5 bg-black text-xs text-white hover:bg-black/90"
                                variant="default"
                            >
                                <GitHubIcon className="size-3" />
                                Source
                            </Badge>
                        </a>
                    )}
                    {project.live_url && (
                        <a
                            href={project.live_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Badge
                                className="flex items-center gap-1.5 bg-black text-xs text-white hover:bg-black/90"
                                variant="default"
                            >
                                <ArrowUpRight className="size-3" />
                                Live
                            </Badge>
                        </a>
                    )}
                </div>
            </div>
            <div className="flex flex-1 flex-col gap-3 p-6">
                <div className="flex items-start justify-between gap-2">
                    <div className="flex flex-col gap-1">
                        <h3 className="font-semibold">{project.title}</h3>
                        <time className="text-xs text-muted-foreground">
                            {dates}
                        </time>
                    </div>
                    {project.live_url && (
                        <a
                            href={project.live_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
                            aria-label={`Open ${project.title}`}
                        >
                            <ArrowUpRight className="h-4 w-4" aria-hidden />
                        </a>
                    )}
                </div>
                {project.description && (
                    <p className="line-clamp-3 flex-1 font-sans text-xs leading-relaxed text-pretty text-muted-foreground">
                        {project.description}
                    </p>
                )}
                {project.tags.length > 0 && (
                    <div className="mt-auto flex flex-wrap gap-1">
                        {project.tags.map((tag) => (
                            <Badge
                                key={tag.uuid}
                                className="h-6 w-fit border border-border px-2 text-[11px] font-medium"
                                variant="outline"
                            >
                                {tag.name}
                            </Badge>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
    if (projects.length === 0) {
        return null;
    }

    return (
        <section id="projects" className="w-full">
            <div className="flex min-h-0 flex-col gap-y-8">
                <BlurFade delay={440}>
                    <div className="flex flex-col items-center justify-center gap-y-4">
                        <div className="flex w-full items-center">
                            <div className="h-px flex-1 bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
                            <div className="z-10 rounded-xl border bg-primary px-4 py-1">
                                <span className="text-sm font-medium text-primary-foreground">
                                    My Projects
                                </span>
                            </div>
                            <div className="h-px flex-1 bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
                        </div>
                        <div className="flex flex-col items-center justify-center gap-y-3">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                                Things I&apos;ve Built
                            </h2>
                            <p className="text-center text-balance text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                                A collection of projects I&apos;ve worked on
                                from ideas to shipped products.
                            </p>
                        </div>
                    </div>
                </BlurFade>

                <div className="max-w-800px mx-auto grid auto-rows-fr grid-cols-1 gap-3 sm:grid-cols-2">
                    {projects.map((project, id) => (
                        <BlurFade
                            key={project.uuid}
                            delay={480 + id * 50}
                            className="h-full"
                            inView
                        >
                            <ProjectCard project={project} />
                        </BlurFade>
                    ))}
                </div>
            </div>
        </section>
    );
}
