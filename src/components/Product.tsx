import Image from "next/image";

import useSidebarStore from "@/zustand/sidebarStore";

export default function Product(): JSX.Element {
    const sidebarIsOpen = useSidebarStore((state) => state.isOpen);

    return (
        <div
            className={`${
                sidebarIsOpen ? "blur" : "blur-none"
            } relative z-0 h-screen w-full snap-start duration-500`}
        >
            <div className="absolute -z-10 h-full w-full">
                <Image
                    src="/assets/Homepage.webp"
                    alt=""
                    fill
                    className="object-cover"
                />
            </div>
            <div className="flex h-full w-full flex-col items-center justify-between pt-36 pb-32">
                <div>
                    <h1 className="text-center text-5xl">Model 3</h1>
                    <p className="mt-2 text-center">
                        Leasing starting at $349/mo
                    </p>
                </div>
                <div className="flex w-full flex-col items-center justify-center space-y-4 px-6 md:flex-row md:space-x-6 md:space-y-0 md:px-20">
                    <button className="w-full rounded bg-gray-900 p-3 text-center text-white opacity-90 md:w-[264px]">
                        Custom Order
                    </button>
                    <button className="w-full rounded bg-gray-100 p-3 text-center text-slate-900 opacity-90 md:w-[264px]">
                        Demo Drive
                    </button>
                </div>
            </div>
            <Image
                src="/assets/arrow.svg"
                alt=""
                width="64"
                height="64"
                className="absolute bottom-2 right-[calc(50vw-32px)] animate-bounce"
            />
        </div>
    );
}
