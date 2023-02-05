import Image from "next/image";
import Link from "next/link";

import { homepageLinks } from "@/constants/homepageLinks";

import useSidebarStore from "@/zustand/sidebarStore";

export default function Sidebar(): JSX.Element {
    const sidebarIsOpen = useSidebarStore((state) => state.isOpen);
    const toggleSidebar = useSidebarStore((state) => state.toggleSidebar);

    return (
        <div
            className={`${
                sidebarIsOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-full opacity-0"
            } fixed top-0 bottom-0 right-0 z-50 flex w-[300px] flex-col bg-white px-6 py-3 shadow-xl transition duration-1000`}
        >
            <div
                className="cursor-pointer self-end transition-colors duration-300 hover:bg-slate-300"
                onClick={toggleSidebar}
            >
                <Image
                    src="/assets/close.svg"
                    alt="close"
                    width="30"
                    height="30"
                />
            </div>
            <div className="no-scrollbar flex flex-col space-y-5 overflow-y-scroll pt-8">
                {homepageLinks.map(({ linkName, path, id }) => (
                    <Link key={id} href={path}>
                        {linkName}
                    </Link>
                ))}
            </div>
        </div>
    );
}
