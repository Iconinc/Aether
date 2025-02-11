"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
                                       words,
                                       className,
                                       filter = true,
                                       duration = 2,
                                   }: {
    words: string;
    className?: string;
    filter?: boolean;
    duration?: number;
}) => {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        animate(
            "span",
            {
                opacity: 1,
                filter: filter ? "blur(0px)" : "none",
            },
            {
                duration: duration ? duration : 1,
                delay: stagger(0.2),
            }
        );
    }, [scope.current, animate, duration, filter]);

    return (
        <div className={cn("font-bold", className)}>
            <div className="mt-4">
                <div className="dark:text-slate-400 text-black text-xl md:text-2xl leading-snug tracking-wide">
                    <motion.div ref={scope}>
                        <motion.span
                            className="dark:text-black text-gray-400 opacity-0 leading-8"
                            style={{
                                filter: filter ? "blur(10px)" : "none",
                            }}
                            dangerouslySetInnerHTML={{ __html: words }}
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};