import Image from "next/image";

import useSidebarStore from "@/zustand/sidebarStore";

export default function Sidebar() {
    const sidebarIsOpen = useSidebarStore((state) => state.isOpen);
    const toggleSidebar = useSidebarStore((state) => state.toggleSidebar);

    return (
        <div
            className={`${
                sidebarIsOpen ? "translate-x-0" : "translate-x-full"
            } z-1000 fixed top-0 bottom-0 right-0 flex w-[300px] flex-col bg-red-500 px-8 py-4 shadow-sm transition-transform duration-500`}
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
        </div>
    );
}
