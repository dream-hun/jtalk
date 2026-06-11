import { Link } from '@inertiajs/react';
import {
    BookOpen,
    Briefcase,
    FolderGit2,
    GraduationCap,
    LayoutGrid,
    MessageSquare,
    NotebookPen,
    Settings,
    Tag,
    Wrench,
} from 'lucide-react';
import AppLogo from '@/components/app-logo';
import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { dashboard } from '@/routes';
import { index as categoriesIndex } from '@/routes/categories';
import { index as contactsIndex } from '@/routes/contacts';
import { index as educationIndex } from '@/routes/education';
import { index as postsIndex } from '@/routes/posts';
import { index as projectsIndex } from '@/routes/projects';
import { edit as settingEdit } from '@/routes/setting';
import { index as worksIndex } from '@/routes/works';
import type { NavItem } from '@/types';

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: dashboard(),
        icon: LayoutGrid,
    },
    {
        title: 'Projects',
        href: projectsIndex().url,
        icon: Briefcase,
    },
    {
        title: 'Works',
        href: worksIndex().url,
        icon: Wrench,
    },
    {
        title: 'Education',
        href: educationIndex().url,
        icon: GraduationCap,
    },
    {
        title: 'Posts',
        href: postsIndex().url,
        icon: NotebookPen,
    },
    {
        title: 'Categories',
        href: categoriesIndex().url,
        icon: Tag,
    },
    {
        title: 'Contacts',
        href: contactsIndex().url,
        icon: MessageSquare,
    },
    {
        title: 'Setting',
        href: settingEdit().url,
        icon: Settings,
    },
];

const footerNavItems: NavItem[] = [
    {
        title: 'Repository',
        href: 'https://github.com/laravel/react-starter-kit',
        icon: FolderGit2,
    },
    {
        title: 'Documentation',
        href: 'https://laravel.com/docs/starter-kits#react',
        icon: BookOpen,
    },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="offcanvas" variant="sidebar">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={dashboard()} prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
