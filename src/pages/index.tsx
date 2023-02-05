import Head from "next/head";
import Image from "next/image";

import NavBar from "@/components/NavBar";
import Product from "@/components/Product";

import useSidebarStore from "@/zustand/sidebarStore";

export default function Home() {
    const sidebarIsOpen = useSidebarStore((state) => state.isOpen);

    return (
        <div className={"h-screen w-full"}>
            <NavBar />
            <div className="no-scrollbar z-1101 h-full w-full snap-y snap-mandatory overflow-y-scroll">
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    );
}
