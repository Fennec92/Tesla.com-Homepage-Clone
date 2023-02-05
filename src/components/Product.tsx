import Image from "next/image";

import useSidebarStore from "@/zustand/sidebarStore";

type ProductParams = {
    name: string;
    desc: string;
    underscore: boolean;
    btn1: string;
    btn2: string | boolean;
    chevron: boolean;
    image: string;
    imageMobile: string;
    id: number;
};

export default function Product({
    name,
    desc,
    underscore,
    btn1,
    btn2,
    chevron,
    image,
    imageMobile,
}: ProductParams): JSX.Element {
    const sidebarIsOpen = useSidebarStore((state) => state.isOpen);

    return (
        <div
            className={`${
                sidebarIsOpen && "blur-[3px] brightness-50"
            } relative z-0 h-screen w-full snap-start duration-500`}
        >
            <div className="absolute -z-10 h-full w-full">
                <Image
                    src={image}
                    alt=""
                    fill
                    className="hidden object-cover md:block"
                />
                <Image
                    src={imageMobile}
                    alt=""
                    fill
                    className="object-cover md:hidden"
                />
            </div>
            <div className="flex h-full w-full flex-col items-center justify-between pt-36 pb-32">
                <div>
                    <h1 className="text-center text-5xl">{name}</h1>
                    <p
                        className={`${
                            underscore && "underline"
                        } mt-2 text-center`}
                    >
                        {desc}
                    </p>
                </div>
                <div className="flex w-full flex-col items-center justify-center space-y-4 px-6 md:-mb-5 md:flex-row md:space-x-6 md:space-y-0">
                    <button className="w-full rounded bg-gray-900 p-3 text-center text-white opacity-90 md:w-[264px]">
                        {btn1}
                    </button>
                    {btn2 ? (
                        <button className="w-full rounded bg-gray-100 p-3 text-center text-slate-900 opacity-90 md:w-[264px]">
                            Demo Drive
                        </button>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
            {chevron && (
                <Image
                    src="/assets/arrow.svg"
                    alt=""
                    width="64"
                    height="64"
                    className="absolute bottom-10 right-[calc(50vw-32px)] animate-bounce md:bottom-4"
                />
            )}
        </div>
    );
}
