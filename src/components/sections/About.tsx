import Container from "@/components/layouts/Container";
import {Sparkles} from "lucide-react";
import {TextGenerateEffect} from "@/components/shared/TextGenerateEffect";

const word1 = 'At Webify, we specialize in <span class="text-white">crafting next-gen web experiences</span> that blend creativity with cutting-edge technology.'
const word2 = '<span class="text-white">We deliver tailored solutions</span> for upgrading your site or creating a new digital platform.'


const About = () => {
    return (
        <section id={'About'} className={'bg-black py-12 md:py-24 lg:py-32 -mt-5 md:-mt-14 lg:mt-0'}>
            <Container className={'flex-center flex-col gap-6 text-slate-50 px-4'}>
                <div className={'md:w-5/6 lg:w-2/3 flex-start flex-col gap-4'}>
                    <div className={'bg-white shadow-lg shadow-blue-700 text-slate-900 p-4 md:p-6 lg:p-8 rounded-3xl animate-shimmer'}>
                        <Sparkles size={18}/>
                    </div>
                    <h1 className={'text-2xl font-bold mt-6'}>About</h1>
                    <TextGenerateEffect duration={3} filter={false} words={word1}/>
                    <TextGenerateEffect duration={3} filter={false} words={word2}/>
                </div>
            </Container>
        </section>
    )
}

export default About