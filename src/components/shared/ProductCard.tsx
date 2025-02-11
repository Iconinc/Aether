import Image from "next/image";
import React from "react";
import {FollowerPointerCard} from "@/components/shared/FollowingPointer";
import FollowingUser from "@/components/shared/FollowingUser";

const ProductCard = () => {
    return (
        <FollowerPointerCard title={
            <FollowingUser
                title={'View Project'}
                avatar={'/assets/genemoji.png'}
            />
        }>
            <div className={'flex-start flex-col gap-4 group'}>
                <div
                    className={'border-2 bg-slate-200 border-white shadow-xl shadow-slate-200 w-full rounded-3xl overflow-hidden mt-8 p-2'}>
                    <Image src={'/assets/product1.webp'} alt={'Product One'} width={1200} height={980}
                           className={'rounded-2xl duration-200 group-active:scale-125'}/>
                </div>
                <div className={'flex-start flex-col gap-4 w-full rounded-3xl'}>
                    <h1 className={'text-xl lg:text-2xl font-semibold text-slate-700'}>Hello world</h1>
                    <div className={'flex flex-wrap gap-2'}>
                        <p className={'border-2 border-teal-300 text-xs font-medium p-3 lg:p-4 rounded-full px-3 lg:px-6 -ml-[2px]'}>
                            Hello world
                        </p>
                        <p className={'border-2 border-orange-300 text-xs font-medium p-3 lg:p-4 rounded-full px-3 lg:px-6 -ml-[2px]'}>
                            Hello world
                        </p>
                        <p className={'border-2 border-red-300 text-xs font-medium p-3 lg:p-4 rounded-full px-3 lg:px-6 -ml-[2px]'}>
                            Hello world
                        </p>
                        <p className={'border-2 border-indigo-300 text-xs font-medium p-3 lg:p-4 rounded-full px-3 lg:px-6 -ml-[2px]'}>
                            Hello world
                        </p>
                        <p className={'border-2 border-gray-300 text-xs font-medium p-3 lg:p-4 rounded-full px-3 lg:px-6 -ml-[2px]'}>
                            Hello world
                        </p>
                    </div>
                </div>
            </div>
        </FollowerPointerCard>
    );
};

export default ProductCard;