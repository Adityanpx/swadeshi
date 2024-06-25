import Link from "next/link"
import { DashboardNav } from "./dashboardNav"
import Navbar from "../globals/Navbar";

export function Sidebar() {
  return (
    <div className="flex h-screen   overflow-hidden">
      <DashboardNav />
    </div>
  );
}
