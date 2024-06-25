"use client";
import { DashboardNav } from "@/components/globals/dashboard-nav";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navItems } from "@/constants/data";
import { MenuIcon } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "../ThemeToggle/theme-toggle";

// import { Playlist } from "../data/playlists";



export function MobileSidebar({ className }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <MenuIcon />
        </SheetTrigger>
        <SheetContent side="right" className="!px-0">

          <div className="space-y-4 py-4">
            <div className="px-3 py-2">
              <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                Overview
              </h2>
              <div className="space-y-1">
                <DashboardNav items={navItems} setOpen={setOpen} />
              </div>
            </div>
            <div className="flex justify-center">
              <ThemeToggle />

            </div>

          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
