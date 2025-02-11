import Image from "next/image";
import React from "react";
import {Buttons} from "@/components/shared/Buttons";
import {ArrowDownRight} from "lucide-react";

const ProductCard = () => {
    return (
        <div className={'flex-start flex-col gap-4 group'}>
            <div
                className={'border-2 bg-slate-200 border-white shadow-xl shadow-slate-200 w-full rounded-3xl overflow-hidden mt-8 p-2'}>
                <Image src={'/assets/product1.webp'} alt={'Product One'} width={1200} height={980}
                       className={'rounded-2xl duration-300 group-hover:scale-125'}/>
            </div>
            <div className={'flex-between gap-4 w-full rounded-3xl'}>
                <h1 className={'text-xl lg:text-2xl font-semibold text-slate-700'}>Hello world</h1>
                <Buttons path={'/case-study'} className={'!px-6 !py-4'}>
                    <p>View Project</p>
                    <ArrowDownRight />
                </Buttons>
            </div>
        </div>
    );
};

export default ProductCard;