import Link from "next/link";
import Image from "next/image";

import Sidebar from "./Sidebar";

import useSidebarStore from "@/zustand/sidebarStore";

export default function NavBar() {
    const toggleSidebar = useSidebarStore((state) => state.toggleSidebar);

    return (
        <header className=" z-999 fixed top-0 left-0 w-full">
            <nav className="flex w-full items-center justify-between px-5 py-4">
                <Link href="/">
                    <Image
                        src="/assets/logo.svg"
                        alt="logo"
                        width="120"
                        height="24"
                    />
                </Link>
                <div className="hidden lg:flex lg:items-center lg:space-x-5">
                    <Link href="/">Model S</Link>
                    <Link href="/">Model 3</Link>
                    <Link href="/">Model X</Link>
                    <Link href="/">Model Y</Link>
                    <Link href="/">Solar Roof</Link>
                    <Link href="/">Solar Panels</Link>
                </div>
                <div className="flex space-x-5">
                    <Link
                        href="/"
                        className="hidden rounded bg-slate-100 py-1 px-3 font-semibold text-slate-900 opacity-80 lg:flex"
                    >
                        Shop
                    </Link>
                    <Link
                        href="/"
                        className="hidden rounded bg-slate-100 py-1 px-3 font-semibold text-slate-900 opacity-80 lg:flex"
                    >
                        Account
                    </Link>
                    <button
                        className="rounded bg-slate-100 py-1 px-3 font-semibold text-slate-900 opacity-80"
                        onClick={toggleSidebar}
                    >
                        Menu
                    </button>
                </div>
                <Sidebar />
            </nav>
        </header>
    );
}
