"use client";
import React from "react";
import { StickyScroll } from "../globals/sticky-scroll-reveal";
import Image from "next/image";

const content = [
    {
        title: "SCS: SWADESHI COMPONENT STANDARDIZATION ",
        description:
            "Swadeshi Component Standardization is the Audit & Accreditation of all the components which are used in your business process. This includes but is not limited to the machinery & equipment involved in your business process.",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="/machine.jpeg"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="fmcg pic"
                />
            </div>
        ),
    },
    {
        title: "SIS: SWADESHI INGREDIENTS STANDARDIZATION",
        description:
            "This particular certification is meant for those who are into the food, Cold drinks, Pharmaceutical products, Beauty Products, Health Products, Alcoholic and Non-Alcoholic Beverages, Agricultural, horticulture, Animal Husbandry and dairy products, Tobacco and Cigarettes manufacturing business",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="/fmcg.jpg"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="fmcg pic"
                />
            </div>
        ),
    },
    {
        title: "SRS: SWADESHI TRADING STANDARDIZATION",
        description:
            "Swadeshi Trading Standardization is a system designed for those who are acting as a retailer, wholesaler, distributor, exporter, e-commerce seller and other services. The certification will be awarded only if the Applicant under scrutinyare dealing in those products which are manufactured in India or labelled as “Swadeshi” or possess a Swadeshi Standard Certificate.",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="/trade.jpg"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="fmcg pic"
                />
            </div>
        ),
    },
    {
        title: "SSS: SWADESHI SERVICE STANDARDIZATION",
        description:
            "Swadeshi Service Standardization is a system which marks those services which help all the other businesses function properly. The businesses that come under this category are all companies who belong to the Service Based Industry. Such as Transport, Advertisement, Courier/Logistics, Telecommunication, Security, Chartered Accountant, Advocates, Real Estate Broker, Hospital services, Hotel and accommodation, Building and Construction, Publication etc.",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="/building.jpg"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="fmcg pic"
                />
            </div>
        ),
    },
];
export function Services() {
    return (
        <div className="md:p-10 ">
            <StickyScroll content={content} />
        </div>
    );
}
