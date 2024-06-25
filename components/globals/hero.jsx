"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../globals/aurora-background";
import { TextGenerateEffect } from "./text-generate";
import { Inter } from "next/font/google";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";

const inter = Inter({ subsets: ["latin"] })

export function Hero() {

    const { t } = useTranslation();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.4,
                duration: 0.8,
                ease: "easeInOut",
                staggerChildren: 0.8, // Adjust the stagger duration as needed
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <>
            <AuroraBackground>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="relative flex flex-col gap-4 items-center justify-center px-4"
                >
                    <img src="/india.jpg" className="absolute dark:hidden opacity-5  mt-[28vh]" />
                    <img src="/logo.png" className="h-12 md:block hidden dark:hidden " />
                    <img src="/logo-dark.png" className="h-12 hidden dark:block " />
                    <div className={`${inter.className} text-3xl md:w-10/12 md:text-4xl z-[10] font-bold dark:text-white text-center`}>
                        {i18n.language === 'mr' ? t('welcomeMessage') : t('welcomeMessage')}
                        <p className={`${inter.className} text-sm md:text-lg mt-2 text-center justify-center flex font-normal text-secondary-foreground`}>
                            {i18n.language === 'mr' ? t('additionalMessage') : t('certificationMessage')}
                        </p>
                    </div>


                    <div className={`font-bold  text-sm md:text-4xl dark:text-neutral-200 py-2 {}`}>
                        <TextGenerateEffect words='Swadeshi Standard Certification' />
                        {/* <img src="/mii.png" className="h-12 flex justify-center md:mt-0 mt-4 ml-10" /> */}
                    </div>
                </motion.div>
            </AuroraBackground>

            <div className="flex justify-center ">

                <div className=" md:mt-4 dark:md:mt-20 z-[30] -mt-20">
                    <motion.div initial='hidden' animate='visible' className="" variants={containerVariants} >
                        <motion.h1 variants={itemVariants} className="font-bold text-2xl md:text-3xl ml-4 md:-mt-12 dark:md:-mt-28 -mt-6 flex gap-2  ">
                            <img src="/tick.png" className="h-9" />

                            Our Services</motion.h1>

                    </motion.div>
                    <motion.div variants={containerVariants} initial="hidden" animate="visible" className={`${inter.className} grid md:grid-cols-2 z-[10] border mt-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] shadow-black dark:shadow-white mx-2 gap-8 font-bold dark:text-white  text-black p-4 rounded-xl `}>

                        <motion.div className="flex gap-2" variants={itemVariants}>
                            <img src="/01.png" className="h-6" />
                            <h1 className="text-lg">Swadeshi Component Standardization</h1>

                        </motion.div>
                        <motion.div className="flex gap-2" variants={itemVariants}>
                            <img src="/04.png" className="h-6" />
                            <h1 className="text-lg">Swadeshi Ingredients Standardization</h1>
                        </motion.div>
                        <motion.div className="flex gap-2" variants={itemVariants}>
                            <img src="/02.png" className="h-6" />
                            <h1 className="text-lg">Swadeshi Trading Standardization</h1>
                        </motion.div>
                        <motion.div className="flex gap-2" variants={itemVariants}>
                            <img src="/03.png" className="h-6" />

                            <h1 className="text-lg">Swadeshi Service Standardization</h1>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </>
    );
}
