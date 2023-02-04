import Head from "next/head";
import Image from "next/image";

import NavBar from "@/components/NavBar";

import useSidebarStore from "@/zustand/sidebarStore";

export default function Home() {
    const sidebarIsOpen = useSidebarStore((state) => state.isOpen);

    return (
        <div className={" h-screen w-screen"}>
            <NavBar />
        </div>
    );
}
