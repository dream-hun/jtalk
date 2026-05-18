import * as LucideIcons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { iconNames } from 'lucide-react/dynamic';
import type { IconName } from 'lucide-react/dynamic';

function toPascal(s: string): string {
    return s
        .split('-')
        .map((part) => part.replace(/^(\d*)([a-z])/, (_, d, l) => d + l.toUpperCase()))
        .join('');
}

interface SafeDynamicIconProps {
    name: string;
    className?: string;
    fallback?: () => React.ReactNode;
}

export function SafeDynamicIcon({ name, className, fallback }: SafeDynamicIconProps) {
    if (!iconNames.includes(name as IconName)) {
        return fallback ? fallback() : null;
    }

    const IconComponent = LucideIcons[toPascal(name) as keyof typeof LucideIcons] as LucideIcon | undefined;

    if (!IconComponent) {
        return fallback ? fallback() : null;
    }

    return <IconComponent className={className} />;
}
