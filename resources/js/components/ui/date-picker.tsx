import * as React from 'react';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';

interface DatePickerProps {
    name: string;
    value?: Date;
    onChange?: (date: Date | undefined) => void;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
}

function DatePicker({ name, value, onChange, placeholder = 'Pick a date', disabled = false, className }: DatePickerProps) {
    return (
        <>
            <input type="hidden" name={name} value={value ? format(value, 'yyyy-MM-dd') : ''} />
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        type="button"
                        variant="outline"
                        disabled={disabled}
                        className={cn('w-full justify-start text-left font-normal', !value && 'text-muted-foreground', className)}
                    >
                        <CalendarIcon className="mr-2 size-4" />
                        {value ? format(value, 'PPP') : <span>{placeholder}</span>}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                    <Calendar mode="single" selected={value} onSelect={onChange} />
                </PopoverContent>
            </Popover>
        </>
    );
}

export { DatePicker };
