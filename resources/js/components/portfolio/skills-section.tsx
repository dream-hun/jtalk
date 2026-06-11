import type { SVGProps } from 'react';
import React from 'react';
import { BlurFade } from '@/components/portfolio/blur-fade';
import {
    DataAnalysisIcon,
    GitIcon,
    InertiaIcon,
    LaravelIcon,
    LinuxIcon,
    PythonIcon,
    ReactIcon,
    TailwindCSSIcon,
    TypeScriptIcon,
} from '@/components/portfolio/skill-icons';

interface Skill {
    uuid: string;
    name: string;
    icon: string | null;
}

interface SkillsSectionProps {
    skills: Skill[];
}

type SkillIconComponent = (
    props: SVGProps<SVGSVGElement>,
) => React.ReactElement;

const ICON_MAP: Record<string, SkillIconComponent> = {
    laravel: LaravelIcon,
    react: ReactIcon,
    typescript: TypeScriptIcon,
    tailwind: TailwindCSSIcon,
    tailwindcss: TailwindCSSIcon,
    git: GitIcon,
    linux: LinuxIcon,
    python: PythonIcon,
    dataanalysis: DataAnalysisIcon,
    inertia: InertiaIcon,
    inertiajs: InertiaIcon,
};

const FALLBACK_SKILLS: Skill[] = [
    { uuid: 'laravel', name: 'Laravel', icon: 'laravel' },
    { uuid: 'inertia', name: 'Inertia.js', icon: 'inertia' },
    { uuid: 'react', name: 'React', icon: 'react' },
    { uuid: 'typescript', name: 'TypeScript', icon: 'typescript' },
    { uuid: 'tailwindcss', name: 'Tailwind CSS', icon: 'tailwindcss' },
    { uuid: 'git', name: 'Git', icon: 'git' },
    { uuid: 'linux', name: 'Linux', icon: 'linux' },
    { uuid: 'python', name: 'Python', icon: 'python' },
    { uuid: 'dataanalysis', name: 'Data Analysis', icon: 'dataanalysis' },
];

function getIcon(icon: string | null): SkillIconComponent | undefined {
    if (!icon) {
        return undefined;
    }

    const key = icon.toLowerCase().replace(/[^a-z]/g, '');

    return ICON_MAP[key];
}

export function SkillsSection({ skills }: SkillsSectionProps) {
    const source = skills.length > 0 ? skills : FALLBACK_SKILLS;

    return (
        <section id="skills" className="w-full">
            <div className="flex min-h-0 flex-col gap-y-4">
                <BlurFade delay={320}>
                    <h2 className="text-xl font-bold">Skills & Technologies</h2>
                </BlurFade>
                <div className="flex flex-wrap gap-2">
                    {source.map((skill, id) => {
                        const Icon = getIcon(skill.icon);

                        return (
                            <BlurFade
                                key={skill.uuid}
                                delay={360 + id * 40}
                                inView
                            >
                                <div className="flex h-8 w-fit items-center gap-2 rounded-xl border border-border bg-background px-4 ring-2 ring-border/20">
                                    {Icon && (
                                        <Icon className="size-4 shrink-0" />
                                    )}
                                    <span className="text-sm font-medium text-foreground">
                                        {skill.name}
                                    </span>
                                </div>
                            </BlurFade>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
