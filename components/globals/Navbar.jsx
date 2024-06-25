import React from 'react'
import { MobileSidebar } from './mobile-sidebar'
import { cn } from '@/lib/utils'
import { UserNav } from './user-nav'
import ThemeToggle from '../ThemeToggle/theme-toggle'
import Image from 'next/image'
import { DashboardNav } from './dashboard-nav'
import { navItems } from '@/constants/data'
import LanguageSwitcher from './language-switcher'
import Link from 'next/link'

export default function Navbar() {
    return (
        <div className="fixed top-0 left-0 right-0 z-[40] supports-backdrop-blur:bg-background/60  bg-background/95 backdrop-blur  ">
            <div className='text-sm text-center mb-2 bg-primary w-full '>
                <h1 className='text-white py-0.5'>🌐 Update: Language Support added</h1>
            </div>
            <nav className="h-14 flex items-center justify-between px-4">
                <div className=" lg:block">
                    <Link href='/'>
                        <img src='/logo.png' className='h-10 dark:hidden  mt-auto' />
                        <img src='/logo-dark.png' className='h-10 dark:block hidden  mt-auto' />
                    </Link>
                </div>
                <div className='lg:flex md:hidden hidden'>
                    <DashboardNav items={navItems} />
                </div>
                <div className="flex items-center justify-between justbe gap-2">
                    <Link href='/dashboard'>
                        <button className="relative inline-flex h-8 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-4  text-sm font-medium text-white backdrop-blur-3xl">
                                Get Started
                            </span>
                        </button>
                    </Link>
                    <div className='hidden md:block '>
                        <ThemeToggle />
                    </div>
                    <LanguageSwitcher />

                    {/* <UserNav /> */}

                    <div className={cn("block lg:!hidden")}>
                        <MobileSidebar />
                    </div>
                </div>
            </nav>
        </div>
    )
}
