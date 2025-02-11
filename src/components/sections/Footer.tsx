"use client";

import { motion } from "framer-motion";
import Container from "@/components/layouts/Container";
import Link from "next/link";

const footerLinks = [
    {
        title: "Menu",
        links: [
            { name: "Services", href: "#Services", external: false},
            { name: "Works", href: "#Works",external: false },
            { name: "Pricing", href: "#Pricing",external: false },
            { name: "Contact Us", href: "#Contact", external: false },
        ],
    },
    {
        title: "Social",
        links: [
            { name: "Twitter", href: "https://twitter.com", external: true },
            { name: "LinkedIn", href: "https://linkedin.com", external: true },
            { name: "Facebook", href: "https://facebook.com", external: true },
        ],
    },
];

const Footer = () => {
    return (
        <motion.section
            id="Footer"
            className="w-screen bg-black text-white py-12 md:pb-32"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <Container className="flex flex-col md:w-5/6 lg:w-2/3">
                <motion.div
                    className="w-full flex flex-col md:flex-row justify-between items-start md:items-center px-6"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
                    }}
                >
                    {/* Logo */}
                    <motion.h1
                        className="font-medium text-2xl md:text-center hidden md:block"
                        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                    >
                        Aether
                    </motion.h1>

                    {/* Footer Links */}
                    <div className="flex flex-col md:flex-row gap-8">
                        {footerLinks.map((section) => (
                            <motion.div key={section.title} className="flex flex-col" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
                                <h3 className="text-sm text-slate-400 font-medium">{section.title}</h3>
                                <ul className="flex flex-col gap-4 text-lg font-semibold mt-4">
                                    {section.links.map(({ name, href, external }) => (
                                        <li key={name}>
                                            <Link
                                                href={href}
                                                target={external ? "_blank" : "_self"}
                                                rel={external ? "noopener noreferrer" : ""}
                                                className="hover:text-blue-400 transition-colors"
                                            >
                                                {name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}

                        {/* Licenses */}
                        <motion.div className="flex flex-col" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
                            <h3 className="text-sm text-slate-400 underline">Licenses</h3>
                            <h4 className="text-slate-400 mt-4">© 2025, All rights reserved</h4>
                        </motion.div>
                    </div>
                </motion.div>
            </Container>
        </motion.section>
    );
};

export default Footer;
