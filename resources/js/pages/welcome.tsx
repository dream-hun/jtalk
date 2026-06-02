import type { PageProps } from '@inertiajs/core';
import { Head } from '@inertiajs/react';
import { FlickeringGrid } from '@/components/magicui/flickering-grid';
import { AboutSection } from '@/components/portfolio/about-section';
import { BlogSection } from '@/components/portfolio/blog-section';
import { ContactSection } from '@/components/portfolio/contact-section';
import { EducationSection } from '@/components/portfolio/education-section';
import { HeroSection } from '@/components/portfolio/hero-section';
import { PortfolioNavbar } from '@/components/portfolio/portfolio-navbar';
import { ProjectsSection } from '@/components/portfolio/projects-section';
import { SkillsSection } from '@/components/portfolio/skills-section';
import { WorkSection } from '@/components/portfolio/work-section';

interface Tag {
    uuid: string;
    name: string;
}

interface Setting {
    uuid: string;
    name: string;
    title: string;
    description: string;
    email: string;
    phone: string;
    address: string;
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

interface Education {
    uuid: string;
    institution: string;
    logo: string | null;
    degree: string;
    start_date: string;
    end_date: string | null;
    is_current: boolean | null;
}

interface Skill {
    uuid: string;
    name: string;
    icon: string | null;
}

interface Post {
    uuid: string;
    title: string;
    slug: string;
    excerpt: string | null;
    published_at: string | null;
    cover_image: string | null;
}

interface WelcomeProps extends PageProps {
    setting: Setting | null;
    projects: Project[];
    works: Work[];
    education: Education[];
    skills: Skill[];
    recentPosts: Post[];
    canRegister: boolean;
    siteUrl: string;
    defaultOgImage: string;
}

export default function Welcome({ setting, projects, works, education, skills, recentPosts, canRegister, siteUrl, defaultOgImage }: WelcomeProps) {
    if (!setting) {
        return (
            <div className="min-h-dvh flex items-center justify-center text-muted-foreground">
                <p>Portfolio not configured yet.</p>
                {canRegister && (
                    <a href="/register" className="ml-2 underline hover:text-foreground transition-colors">
                        Set it up
                    </a>
                )}
            </div>
        );
    }

    const pageTitle = `${setting.name} – ${setting.title}`;
    const personSchema = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: setting.name,
        jobTitle: setting.title,
        description: setting.description,
        email: setting.email,
        url: siteUrl,
    };

    return (
        <>
        <Head>
            <title>{pageTitle}</title>
            <meta head-key="description" name="description" content={setting.description} />
            <link head-key="canonical" rel="canonical" href={siteUrl} />
            <meta head-key="og:type" property="og:type" content="website" />
            <meta head-key="og:url" property="og:url" content={siteUrl} />
            <meta head-key="og:title" property="og:title" content={pageTitle} />
            <meta head-key="og:description" property="og:description" content={setting.description} />
            <meta head-key="og:image" property="og:image" content={defaultOgImage} />
            <meta head-key="twitter:card" name="twitter:card" content="summary_large_image" />
            <meta head-key="twitter:title" name="twitter:title" content={pageTitle} />
            <meta head-key="twitter:description" name="twitter:description" content={setting.description} />
            <meta head-key="twitter:image" name="twitter:image" content={defaultOgImage} />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
            />
        </Head>
        <div className="min-h-screen bg-background font-sans antialiased relative">
            <div className="absolute inset-x-0 top-0 h-25 overflow-hidden z-0">
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

            <main className="relative z-10 mx-auto w-full max-w-2xl px-6 py-12 pb-24 sm:py-24 space-y-14">
                <HeroSection name={setting.name} title={setting.title} description={setting.description} />
                <AboutSection description={setting.description} />
                <WorkSection works={works} />
                <EducationSection education={education} />
                <SkillsSection skills={skills} />
                <ProjectsSection projects={projects} />
                <BlogSection posts={recentPosts} />
                <ContactSection setting={setting} />
            </main>

            <PortfolioNavbar />
        </div>
        </>
    );
}
