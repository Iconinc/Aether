"use client";
import Container from "@/components/layouts/Container";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <section id={'Contact'} className={'w-screen bg-slate-300/20 py-12 md:py-20 lg:py-32'}>
            <Container className={'flex-start flex-col lg:flex-row gap-6 md:w-5/6 lg:w-2/3 px-2'}>
                {/* Left Card - Contact Form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className={'w-full lg:w-1/2 bg-white rounded-3xl p-8 lg:p-12 shadow-sm'}
                >
                    <h2 className={'text-2xl md:text-4xl lg:text-5xl font-medium text-gray-900 mb-8'}>
                        We look forward to connecting with you!
                    </h2>

                    <form className={'space-y-6'}>
                        <div>
                            <input
                                type="text"
                                placeholder="Full Name"
                                className={'w-full px-6 py-4 rounded-2xl bg-gradient-to-r from-slate-100 to-white border-2 border-gray-100 outline-none transition-all text-gray-600'}
                            />
                        </div>

                        <div>
                            <input
                                type="email"
                                placeholder="Email"
                                className={'w-full px-6 py-4 rounded-2xl bg-gradient-to-r from-slate-100 to-white border-2 border-gray-100 outline-none transition-all text-gray-600'}
                            />
                        </div>

                        <div>
                            <textarea
                                placeholder="How can we help you?"
                                rows={4}
                                className={'w-full px-6 py-4 rounded-2xl bg-gradient-to-r from-slate-100 to-white border-2 border-gray-100 outline-none transition-all text-gray-600 resize-none'}
                            />
                        </div>

                        <button
                            type="submit"
                            className={'w-full py-4 bg-black text-white rounded-full hover:opacity-90 transition-opacity font-medium'}
                        >
                            Send a Message
                        </button>
                    </form>
                </motion.div>

                {/* Right Card - Book a Call */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className={'w-full lg:w-1/2 h-full bg-black rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden'}
                >
                    <div className={'relative z-10'}>
                        <h2 className={'text-4xl lg:text-5xl font-medium mb-8'}>
                            Book a time to discuss your next project
                        </h2>

                        <a href="#" className={'inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full hover:opacity-90 transition-opacity font-medium'}>
                            <Phone size={20} />
                            Book a Call
                        </a>

                        <div className={'mt-auto pt-12'}>
                            <div className={'flex items-center gap-2'}>
                                <div className={'w-2 h-2 bg-green-500 rounded-full animate-pulse'} />
                                <p className={'text-gray-300'}>Available for New Projects</p>
                            </div>
                        </div>
                    </div>

                    {/* Background Image Overlay */}
                    <div
                        className={'absolute inset-0 opacity-30 bg-[url("/your-background-image.jpg")] bg-cover bg-center'}
                        style={{
                            backgroundImage: 'url("/assets/icon.webp")'
                        }}
                    />
                </motion.div>
            </Container>
        </section>
    );
};

export default Contact;