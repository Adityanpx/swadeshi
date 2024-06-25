import Link from "next/link"
import { CollapsibleTrigger, CollapsibleContent, Collapsible } from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button"
import Image from "next/image";

export function DashboardNav() {
  return (
    <div className="flex flex-col bg-slate-900 text-white h-screen overflow-hidden">
      <div className="flex h-16 items-center justify-between px-4">
        <Link className="flex items-center gap-2 font-semibold" href="/">
          <Image src='/logo-dark.png' width={80} height={80} />
          <span></span>
        </Link>
      </div>
      <nav className="flex flex-1 flex-col space-y-1 overflow-y-auto px-2 py-4">
        <Link
          className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-800"
          href="/dashboard">
          <LayoutDashboardIcon className="h-5 w-5" />
          Dashboard
        </Link>
        <Link
          className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-800"
          href="#">
          <UserIcon className="h-5 w-5" />
          Profile
        </Link>
        <Collapsible className="grid gap-1">
          <CollapsibleTrigger
            className="flex items-center justify-between gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-800">
            <div className="flex items-center gap-2">
              <FileIcon className="h-5 w-5" />
              New Form Filling
            </div>
            <ChevronRightIcon className="h-5 w-5 transition-transform [&[data-state=open]]:rotate-90" />
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-1 pl-6">
            <Link
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-800"
              href="/dashboard/SCS">
              File SCS 1
            </Link>
            <Link
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-800"
              href="#">
              File SIS 2
            </Link>
            <Link
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-800"
              href="#">
              File SSS 3
            </Link>
            <Link
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-800"
              href="#">
              File STS 4
            </Link>
            <Link
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-800"
              href="#">
              File Renewal
            </Link>
            <Link
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-800"
              href="#">
              File Amendment
            </Link>
            <Link
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-800"
              href="#">
              Reply To Objection
            </Link>
          </CollapsibleContent>
        </Collapsible>
        <Collapsible className="grid gap-1">
          <CollapsibleTrigger
            className="flex items-center justify-between gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-800">
            <div className="flex items-center gap-2">
              <DeleteIcon className="h-5 w-5" />
              Update Application
            </div>
            <ChevronRightIcon className="h-5 w-5 transition-transform [&[data-state=open]]:rotate-90" />
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-1 pl-6">
            <Link
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-800"
              href="#">
              Drafted Applications
            </Link>
          </CollapsibleContent>
        </Collapsible>
        <Collapsible className="grid gap-1">
          <CollapsibleTrigger
            className="flex items-center justify-between gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-800">
            <div className="flex items-center gap-2">
              <HistoryIcon className="h-5 w-5" />
              Form History
            </div>
            <ChevronRightIcon className="h-5 w-5 transition-transform [&[data-state=open]]:rotate-90" />
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-1 pl-6">
            <Link
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-800"
              href="#">
              Discarded Forms
            </Link>
            <Link
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-800"
              href="#">
              Filing History
            </Link>
          </CollapsibleContent>
        </Collapsible>
        <Collapsible className="grid gap-1">
          <CollapsibleTrigger
            className="flex items-center justify-between gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-800">
            <div className="flex items-center gap-2">
              <DollarSignIcon className="h-5 w-5" />
              Payments
            </div>
            <ChevronRightIcon className="h-5 w-5 transition-transform [&[data-state=open]]:rotate-90" />
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-1 pl-6">
            <Link
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-800"
              href="#">
              Make Payment
            </Link>
            <Link
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-800"
              href="#">
              Payment History
            </Link>
          </CollapsibleContent>
        </Collapsible>
      </nav>
      <div className="flex items-center justify-between border-t border-gray-800 px-4 py-4">
        <Button size="sm" variant="ghost">
          <LogOutIcon className="h-5 w-5" />
          Logout
        </Button>
      </div>
    </div>
  );
}

function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function DeleteIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z" />
      <line x1="18" x2="12" y1="9" y2="15" />
      <line x1="12" x2="18" y1="9" y2="15" />
    </svg>
  );
}

function DollarSignIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}

function FileIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    </svg>
  );
}

function HistoryIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
      <path d="M12 7v5l4 2" />
    </svg>
  );
}

function LayoutDashboardIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <rect width="7" height="9" x="3" y="3" rx="1" />
      <rect width="7" height="5" x="14" y="3" rx="1" />
      <rect width="7" height="9" x="14" y="12" rx="1" />
      <rect width="7" height="5" x="3" y="16" rx="1" />
    </svg>
  );
}

function LogOutIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" x2="9" y1="12" y2="12" />
    </svg>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
