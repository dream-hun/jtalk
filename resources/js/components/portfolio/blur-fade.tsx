import { AnimatePresence, motion, useInView  } from 'motion/react';
import type {Variants} from 'motion/react';
import { useRef  } from 'react';
import type {ReactNode} from 'react';
import { cn } from '@/lib/utils';

interface BlurFadeProps {
    children: ReactNode;
    className?: string;
    variant?: {
        hidden: { y: number };
        visible: { y: number };
    };
    duration?: number;
    delay?: number;
    yOffset?: number;
    inView?: boolean;
    inViewMargin?: string;
    blur?: string;
}

export function BlurFade({
    children,
    className,
    variant,
    duration = 0.4,
    delay = 0,
    yOffset = 6,
    inView = false,
    inViewMargin = '-50px',
    blur = '6px',
}: BlurFadeProps) {
    const ref = useRef(null);
    const inViewResult = useInView(ref, { once: true, ...(inViewMargin ? { margin: inViewMargin as NonNullable<Parameters<typeof useInView>[1]>['margin'] } : {}) });
    const isInView = !inView || inViewResult;
    const defaultVariants: Variants = {
        hidden: { y: -yOffset, opacity: 0, filter: `blur(${blur})` },
        visible: { y: 0, opacity: 1, filter: `blur(0px)` },
    };
    const combinedVariants = variant || defaultVariants;

    return (
        <AnimatePresence>
            <motion.div
                ref={ref}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                exit="hidden"
                variants={combinedVariants}
                transition={{
                    delay: 0.04 + delay / 1000,
                    duration,
                    ease: 'easeOut',
                }}
                className={cn(className)}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}
