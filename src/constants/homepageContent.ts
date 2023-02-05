type Content = {
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

export const homepageContent: Content[] = [
    {
        name: "Model 3",
        desc: "Leasing starting at $349/mo",
        underscore: false,
        btn1: "Custom Order",
        btn2: "Demo Drive",
        chevron: true,
        image: "/assets/Model-3.webp",
        imageMobile: "/assets/mobile/Model-3-Mobile.webp",
        id: 1,
    },
    {
        name: "Model Y",
        desc: "",
        underscore: false,
        btn1: "Custom Order",
        btn2: "Demo Drive",
        chevron: false,
        image: "/assets/Model-Y.webp",
        imageMobile: "/assets/mobile/Model-Y-Mobile.webp",
        id: 2,
    },
    {
        name: "Model S",
        desc: "Schedule a Demo Drive",
        underscore: true,
        btn1: "Custom Order",
        btn2: "View Inventory",
        chevron: false,
        image: "/assets/Model-S.webp",
        imageMobile: "/assets/mobile/Model-S-Mobile.webp",
        id: 3,
    },
    {
        name: "Model X",
        desc: "Schedule a Demo Drive",
        underscore: true,
        btn1: "Custom Order",
        btn2: "View Inventory",
        chevron: false,
        image: "/assets/Model-X.webp",
        imageMobile: "/assets/mobile/Model-X-Mobile.webp",
        id: 4,
    },
    {
        name: "Solar Panels",
        desc: "Lowest Cost Solar Panels in America",
        underscore: false,
        btn1: "Order Now",
        btn2: "Learn More",
        chevron: false,
        image: "/assets/SolarPanels.webp",
        imageMobile: "/assets/mobile/SolarPanels-Mobile.webp",
        id: 5,
    },
    {
        name: "Solar Roof",
        desc: "Produce Clean Energy From Your Roof",
        underscore: false,
        btn1: "Order Now",
        btn2: "Learn More",
        chevron: false,
        image: "/assets/SolarRoof.webp",
        imageMobile: "/assets/mobile/SolarRoof-Mobile.webp",
        id: 6,
    },
    {
        name: "Accessories",
        desc: "",
        underscore: false,
        btn1: "Shop Now",
        btn2: false,
        chevron: false,
        image: "/assets/Accessories.webp",
        imageMobile: "/assets/mobile/Accessories-Mobile.webp",
        id: 7,
    },
];
