"use client";
import React, {ReactNode} from "react";
import Link from "next/link";

export const Buttons = ({children, path, className}: {children: ReactNode, path: string, className?: string}) => {
    return (
        <Link href={`/${path}`} className={`inline-flex py-5 px-8 animate-shimmer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-medium text-lg text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 cursor-pointer gap-3 z-20 ${className}`}>
            {children}
        </Link>
    );
};
