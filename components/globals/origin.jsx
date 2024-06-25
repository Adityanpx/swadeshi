import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./tracing-beam";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] })

export function Origin() {
    const { t } = useTranslation();

    return (
        <TracingBeam className="px-6 mt-4">
            <div className="max-w-2xl mx-auto antialiased pt-4 relative">
                {dummyContent.map((item, index) => (
                    <div key={`content-${index}`} className="mb-10">
                        <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                            {item.badge}
                        </h2>

                        <p className={twMerge(inter.className, "text-xl mb-4")}>
                            {t(item.title)}
                        </p>

                        <div className="text-sm  prose prose-sm dark:prose-invert">
                            {item?.image && (
                                <Image
                                    src={item.image}
                                    alt="blog thumbnail"
                                    height="100"
                                    width="100"
                                    className="rounded-lg mb-10 object-cover"
                                />
                            )}
                            <p>{t(item.description)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </TracingBeam>
    );
}

const dummyContent = [
    {
        title: "First Swadeshi Movement",
        description: "firstyear",
        badge: "1850-1904",
        image: "/logo.png",
    },
    {
        title: "1905 to 1917",
        description: "secondyear",
        badge: "1905 to 1917",
        image: "/logo.png",
    },
    {
        title: "Beyond the new Millennium",
        description: "thirdyear",
        badge: "Launch Week",
        image: "/logo.png",
    },
];

export default Origin;
