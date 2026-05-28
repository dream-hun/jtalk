import * as LucideIcons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Search, X } from 'lucide-react';
import { iconNames } from 'lucide-react/dynamic';
import type { IconName } from 'lucide-react/dynamic';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';

function toPascal(s: string): string {
    return s
        .split('-')
        .map((part) => part.replace(/^(\d*)([a-z])/, (_, d, l) => d + l.toUpperCase()))
        .join('');
}

type IconEntry = { name: IconName; Icon: LucideIcon };

const ALL_ICONS: IconEntry[] = iconNames
    .map((name) => ({
        name,
        Icon: LucideIcons[toPascal(name) as keyof typeof LucideIcons] as LucideIcon,
    }))
    .filter((e): e is IconEntry => typeof e.Icon === 'function');

interface IconPickerProps {
    name: string;
    defaultValue?: string | null;
}

export function IconPicker({ name, defaultValue }: IconPickerProps) {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState<IconName | null>(defaultValue ? (defaultValue as IconName) : null);
    const [search, setSearch] = useState('');

    const filtered = search.trim()
        ? ALL_ICONS.filter((e) => e.name.includes(search.toLowerCase().trim()))
        : ALL_ICONS;

    const SelectedIcon = selected ? ALL_ICONS.find((e) => e.name === selected)?.Icon : null;

    function handleSelect(entry: IconEntry) {
        setSelected(entry.name);
        setOpen(false);
        setSearch('');
    }

    return (
        <>
            <input type="hidden" name={name} value={selected ?? ''} />
            <Button
                type="button"
                variant="outline"
                className="w-full justify-start gap-2 font-normal"
                onClick={() => setOpen(true)}
            >
                {SelectedIcon ? (
                    <>
                        <SelectedIcon className="size-4 shrink-0" />
                        <span className="flex-1 truncate text-left">{selected}</span>
                        <span
                            role="button"
                            tabIndex={-1}
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelected(null);
                            }}
                            className="ml-auto rounded p-0.5 text-muted-foreground hover:text-foreground"
                        >
                            <X className="size-3.5" />
                        </span>
                    </>
                ) : (
                    <span className="text-muted-foreground">Select icon…</span>
                )}
            </Button>

            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="max-w-lg">
                    <DialogHeader>
                        <DialogTitle>Pick an icon</DialogTitle>
                        <DialogDescription>Search and select a Lucide icon.</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-3">
                        <div className="relative">
                            <Search className="pointer-events-none absolute left-2.5 top-2.5 size-4 text-muted-foreground" />
                            <Input
                                placeholder="Search icons…"
                                className="pl-8"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                autoFocus
                            />
                        </div>
                        <div className="grid max-h-72 grid-cols-6 gap-1 overflow-y-auto pr-1">
                            {filtered.slice(0, 300).map((entry) => (
                                <button
                                    key={entry.name}
                                    type="button"
                                    title={entry.name}
                                    onClick={() => handleSelect(entry)}
                                    className="flex flex-col items-center gap-1 rounded-md p-2 text-center transition-colors hover:bg-muted"
                                >
                                    <entry.Icon className="size-5" />
                                    <span className="w-full truncate text-[9px] text-muted-foreground">{entry.name}</span>
                                </button>
                            ))}
                        </div>
                        {filtered.length === 0 && (
                            <p className="py-4 text-center text-sm text-muted-foreground">No icons found.</p>
                        )}
                        {filtered.length > 300 && (
                            <p className="text-center text-xs text-muted-foreground">
                                Showing 300 of {filtered.length.toLocaleString()}. Search to narrow results.
                            </p>
                        )}
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}
