"use client";
import React from "react";
import {FollowerPointerCard} from "@/components/shared/FollowingPointer";
import FollowingUser from "./FollowingUser";
import Link from "next/link";

export const Buttons = ({title, path}: {title: string, path: string}) => {
    return (
        <FollowerPointerCard title={
            <FollowingUser
                title={'Scroll'}
                avatar={'/assets/genemoji.png'}
            />
        }>
        <Link href={`/${path}`} className="inline-flex py-5 px-8 animate-shimmer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-medium text-lg text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 cursor-none gap-3 ">
            {title}
        </Link>
        </FollowerPointerCard>
    );
};
