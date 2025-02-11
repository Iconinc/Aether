import Container from "@/components/layouts/Container";
import {Buttons} from "@/components/shared/Buttons";
import Image from "next/image";



const Welcome = () => {
    return (
        <section id={'Welcome'} className={'h-screen w-screen bg-slate-300/20 overflow-hidden'}>
            <Container className={'flex-center flex-col py-12'}>
                <h1 className={'font-medium text-2xl my-4'}>Aether</h1>
                <div className={'flex-center gap-2 p-8 mt-16'}>
                    <span className={'w-2 h-2 bg-green-400 rounded-full scale-75'}></span>
                    <p className={'text-slate-800'}>Digital Development Agency</p>
                </div>
                <h2 className={'w-full lg:w-1/2 text-slate-800 text-4xl md:text-6xl text-center font-bold px-12 '}>
                    Crafting <span className={' px-2 py-1 border-l-2 border-indigo-500 bg-gradient-to-r from-indigo-500'}>Next-Gen</span> Web Experiences
                </h2>
                <div className={'flex gap-5 mt-12'}>
                    <Buttons title={'Discover Works'} path={'#Product'}/>
                </div>

                <Image src={'/assets/welcome.png'} alt={'Welcome Image'} width={1200} height={800} className={'w-full -mt-6 hidden lg:block'}/>
                <Image src={'/assets/welcomeMedium.png'} alt={'Welcome Image'} width={1200} height={800} className={'w-full -mt-32 hidden md:block lg:hidden scale-125'}/>
                <Image src={'/assets/welcomeSmall.png'} alt={'Welcome Image'} width={1200} height={800} className={'w-full -mt-20 block md:hidden'}/>
            </Container>
        </section>
    )
}

export default Welcome