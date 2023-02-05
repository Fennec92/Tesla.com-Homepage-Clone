type content = {
    name: string;
    desc: string;
    underscore: boolean;
    btn1: string;
    btn2: string | boolean;
    chevron: boolean;
    image: string;
    id: number;
};

export const homepageContent: content[] = [
    {
        name: "Model 3",
        desc: "Leasing starting at $349/mo",
        underscore: false,
        btn1: "Custom Order",
        btn2: "Demo Drive",
        chevron: true,
        image: "/assets/",
        id: 1,
    },
    {
        name: "Model Y",
        desc: "",
        underscore: false,
        btn1: "Custom Order",
        btn2: "Demo Drive",
        chevron: false,
        image: "",
        id: 2,
    },
    {
        name: "Model S",
        desc: "Schedule a Demo Drive",
        underscore: true,
        btn1: "Custom Order",
        btn2: "View Inventory",
        chevron: false,
        image: "",
        id: 3,
    },
    {
        name: "Model X",
        desc: "Schedule a Demo Drive",
        underscore: true,
        btn1: "Custom Order",
        btn2: "View Inventory",
        chevron: false,
        image: "",
        id: 4,
    },
    {
        name: "Solar Panels",
        desc: "Lowest Cost Solar Panels in America",
        underscore: false,
        btn1: "Order Now",
        btn2: "Learn More",
        chevron: false,
        image: "",
        id: 5,
    },
    {
        name: "Solar Roof",
        desc: "Produce Clean Energy From Your Roof",
        underscore: false,
        btn1: "Order Now",
        btn2: "Learn More",
        chevron: false,
        image: "",
        id: 6,
    },
    {
        name: "Accessories",
        desc: "",
        underscore: false,
        btn1: "Shop Now",
        btn2: false,
        chevron: false,
        image: "",
        id: 7,
    },
];
