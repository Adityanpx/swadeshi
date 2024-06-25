"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
    words,
    className,
}) => {
    const [scope, animate] = useAnimate();
    let wordsArray = words.split(" ");
    useEffect(() => {
        animate(
            "span",
            {
                opacity: 1,
            },
            {
                duration: 2,
                delay: stagger(0.5),
            }
        );
    }, [scope.current]);

    const renderWords = () => {
        return (
            <motion.div className=" bg-blue-900 py-2 px-4 text-sm md:text-2xl  decw rounded-full " ref={scope}>
                {wordsArray.map((word, idx) => {
                    return (
                        <motion.span
                            key={word + idx}
                            className="dark:text-white text-white opacity-0"
                        >
                            {word}{" "}
                        </motion.span>
                    );
                })}
            </motion.div>
        );
    };

    return (
        <div className={cn("font-bold", className)}>
            <div className="mt-4">
                <div className=" dark:text-white text-black text-2xl leading-snug tracking-wide">
                    {renderWords()}
                </div>
            </div>
        </div>
    );
};
