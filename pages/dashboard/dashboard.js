import React from 'react'
import Layout from '../../components/globals/Layout'
import ScsForm from '@/components/forms/scs'
import { Sidebar } from '@/components/component/sidebar'
import BreadCrumb from '@/components/ui/breadcrumb'
import { Input } from '@/components/ui/input'
import { Search, User } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
export default function Dashboard() {


  return (
    <div className="flex bg-[#FBFBFB]  h-screen overflow-hidden">
      <Sidebar />
      <div className=" flex-1 overflow-y-scroll ">
        <header className='flex justify-between p-6'>
          <BreadCrumb />
          <div className='flex gap-4'>
            <div className="relative ml-auto flex-1 md:grow-0">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-64 rounded-lg bg-background pl-8 "
              />
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="overflow-hidden rounded-full"
                >
                  <User />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        <div className='px-6'>
        </div>
        {/* <ScsForm /> */}
      </div>
    </div>
  )
}
