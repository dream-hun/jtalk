import { BookOpen, Home, Moon, NotebookPen, Sun } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import type { ComponentType } from 'react';
import { Dock, DockIcon } from '@/components/magicui/dock';
import { Separator } from '@/components/ui/separator';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { useAppearance } from '@/hooks/use-appearance';

interface NavItem {
    label: string;
    href: string;
    icon: ComponentType<{ className?: string }>;
    external?: boolean;
}

function scrollToSection(id: string) {
    const el = document.getElementById(id);

    if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
    }
}

function GitHubIcon({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
            aria-hidden
        >
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
    );
}

function YouTubeIcon({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
            aria-hidden
        >
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
    );
}

function XIcon({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
            aria-hidden
        >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.912-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
    );
}

function HomeIcon({ className }: { className?: string }) {
    return <Home className={className} />;
}
function BookOpenIcon({ className }: { className?: string }) {
    return <BookOpen className={className} />;
}
function NotebookPenIcon({ className }: { className?: string }) {
    return <NotebookPen className={className} />;
}

const NAV_ITEMS: NavItem[] = [
    { label: 'Home', href: '/', icon: HomeIcon },
    { label: 'Projects', href: '#projects', icon: BookOpenIcon },
    { label: 'Blog', href: '/blog', icon: NotebookPenIcon },
];

const SOCIAL_ITEMS: NavItem[] = [
    {
        label: 'GitHub',
        href: 'https://github.com/dream-hun',
        icon: GitHubIcon,
        external: true,
    },
    {
        label: 'YouTube',
        href: 'https://www.youtube.com/@3midnightcompiler',
        icon: YouTubeIcon,
        external: true,
    },
    {
        label: 'X',
        href: 'https://x.com/jack_talk_c',
        icon: XIcon,
        external: true,
    },
];

function NavDockItem({ item }: { item: NavItem }) {
    const Icon = item.icon;

    const handleClick = () => {
        if (item.href.startsWith('#')) {
            scrollToSection(item.href.slice(1));
        }
    };

    const iconContent = (
        <DockIcon className="size-full cursor-pointer rounded-2xl border border-border bg-background p-0 text-foreground backdrop-blur-3xl transition-colors hover:bg-muted hover:text-foreground">
            <Icon className="size-full overflow-hidden rounded-sm object-contain" />
        </DockIcon>
    );

    return (
        <Tooltip>
            <TooltipTrigger asChild>
                {item.external ? (
                    <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={item.label}
                    >
                        {iconContent}
                    </a>
                ) : item.href.startsWith('#') ? (
                    <button
                        type="button"
                        onClick={handleClick}
                        aria-label={item.label}
                    >
                        {iconContent}
                    </button>
                ) : (
                    <a href={item.href} aria-label={item.label}>
                        {iconContent}
                    </a>
                )}
            </TooltipTrigger>
            <TooltipContent
                side="top"
                sideOffset={8}
                className="rounded-xl bg-primary px-4 py-2 text-sm text-primary-foreground"
            >
                <p>{item.label}</p>
            </TooltipContent>
        </Tooltip>
    );
}

function ThemeToggle() {
    const { resolvedAppearance, updateAppearance } = useAppearance();

    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <button
                    type="button"
                    onClick={() =>
                        updateAppearance(
                            resolvedAppearance === 'dark' ? 'light' : 'dark',
                        )
                    }
                    aria-label="Toggle theme"
                >
                    <DockIcon className="size-full cursor-pointer overflow-hidden rounded-3xl border border-border bg-background p-0 text-muted-foreground backdrop-blur-3xl transition-colors hover:bg-muted hover:text-foreground">
                        <AnimatePresence mode="wait" initial={false}>
                            <motion.div
                                key={resolvedAppearance}
                                initial={{
                                    rotate: -90,
                                    scale: 0.4,
                                    opacity: 0,
                                }}
                                animate={{ rotate: 0, scale: 1, opacity: 1 }}
                                exit={{ rotate: 90, scale: 0.4, opacity: 0 }}
                                transition={{ duration: 0.18, ease: 'easeOut' }}
                                className="flex size-full items-center justify-center"
                            >
                                {resolvedAppearance === 'dark' ? (
                                    <Sun className="size-full" />
                                ) : (
                                    <Moon className="size-full" />
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </DockIcon>
                </button>
            </TooltipTrigger>
            <TooltipContent
                side="top"
                sideOffset={8}
                className="rounded-xl bg-primary px-4 py-2 text-sm text-primary-foreground"
            >
                <p>Theme</p>
            </TooltipContent>
        </Tooltip>
    );
}

export function PortfolioNavbar() {
    return (
        <TooltipProvider>
            <div className="pointer-events-none fixed inset-x-0 bottom-4 z-30">
                <Dock className="pointer-events-auto relative z-50 mx-auto flex h-14 w-fit gap-2 border bg-card/90 p-2 shadow-[0_0_10px_3px] shadow-primary/5 backdrop-blur-3xl">
                    {NAV_ITEMS.map((item) => (
                        <NavDockItem key={item.label} item={item} />
                    ))}
                    <Separator
                        orientation="vertical"
                        className="m-auto h-2/3 w-px bg-border"
                    />
                    {SOCIAL_ITEMS.map((item) => (
                        <NavDockItem key={item.label} item={item} />
                    ))}
                    <Separator
                        orientation="vertical"
                        className="m-auto h-2/3 w-px bg-border"
                    />
                    <ThemeToggle />
                </Dock>
            </div>
        </TooltipProvider>
    );
}
