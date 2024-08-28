export interface Cupcake{
    _id: string;
    name: string;
    image: string;
    descImage: string | null;
    description: string | null;
    price: number;
    category: Category[];
}

export enum Category{
    Default = 1,
    Holidays = 2,
    SpecialEvents = 3,
    Custom = 4,
    Hot = 5,
}

export const cupcakeTemplateData: Cupcake[] = [
    {
        _id: "0",
        name: "Chocolate Peanut Butter Cupcake",
        price: 3.75,
        image: "https://www.torontocupcake.com/images/cupcakes_flavours/chocolatepeanutbutter.webp",
        category: [Category.Default, Category.Hot],
        descImage: "https://www.torontocupcake.com/images/cupcakes_flavours/chocolatepeanutbuttertop.webp",
        description: "A rich chocolate cupcake topped with creamy peanut butter frosting and a chocolate piece, perfect for peanut butter lovers."
    },
    {
        _id: "1",
        name: "Chocolate Hazelnut Cupcake",
        price: 3.75,
        image: "https://www.torontocupcake.com/images/cupcakes_flavours/chocolatehazelnut.webp",
        category: [Category.Default],
        descImage: "https://www.torontocupcake.com/images/cupcakes_flavours/chocolatehazelnuttop.webp",
        description: "Decadent chocolate cupcake coated with crushed hazelnuts, offering a delightful crunch with every bite"
    },
    {
        _id: "2",
        name: "Vanilla Coconut cupcake",
        price: 3.75,
        image: "https://www.torontocupcake.com/images/cupcakes_flavours/vanillacoconut.webp",
        category: [Category.Default],
        descImage: "https://www.torontocupcake.com/images/cupcakes_flavours/vanillacoconuttop.webp",
        description: "Light and fluffy vanilla cupcake topped with coconut flakes, bringing a tropical twist to a classic favorite."
    },
    {
        _id: "3",
        name: "Chocolate Chocolate cupcake",
        price: 3.75,
        image: "https://www.torontocupcake.com/images/cupcakes_flavours/chocolatechocolate.webp",
        category: [Category.Default, Category.Hot],
        descImage: "https://www.torontocupcake.com/images/cupcakes_flavours/chocolatechocolatetop.webp",
        description: "Double the chocolate, double the indulgence. A chocolate cupcake with chocolate frosting, topped with a chocolate ball for the ultimate chocolate experience."
    },
    {
        _id: "4",
        name: "Chocolate Coconut cupcake",
        price: 3.75,
        image: "https://www.torontocupcake.com/images/cupcakes_flavours/chocolatecoconut.webp",
        category: [Category.Default],
        descImage: "https://www.torontocupcake.com/images/cupcakes_flavours/chocolatecoconuttop.webp",
        description: "A chocolate lover's dream cupcake, generously sprinkled with shredded coconut for an extra layer of texture and flavor."
    },
    {
        _id: "5",
        name: "St Patty's Day",
        price: 3.75,
        image: "https://www.torontocupcake.com/images/cupcakes_flavours/stpattysday.webp",
        category: [Category.Holidays],
        descImage: "https://www.torontocupcake.com/images/cupcakes_flavours/stpattysdaytopview.webp",
        description: "The best of both worlds: a chocolate cupcake base with smooth vanilla frosting, adorned with a delicate pink flower"
    },
    {
        _id: "6",
        name: "Valentine's Day",
        price: 48,
        image: "https://www.torontocupcake.com/images/cupcakes_flavours/toronto_12_valentines.webp",
        category: [Category.Holidays, Category.Hot],
        descImage: null,
        description: "We have designed and packaged a delicious selection of a dozen Valentine's Day Cupcakes including one topped with a heart shaped chocolate truffle."
    },
    {
        _id: "7",
        name: "Mother's Day Dozen",
        price: 48,
        image: "https://www.torontocupcake.com/images/cupcakes_flavours/Toronto_Mothers_Day_Dozen.webp",
        category: [Category.Holidays, Category.Hot],
        descImage: null,
        description: null
    },
    {
        _id: "8",
        name: "Mother's Day Half Dozen",
        price: 24,
        image: "https://www.torontocupcake.com/images/cupcakes_flavours/Toronto_Mothers_Day_Half_Dozen.webp",
        category: [Category.Holidays, Category.Hot],
        descImage: null,
        description: null
    },
    {
        _id: "9",
        name: "Pride Day",
        price: 3.75,
        image: "https://www.torontocupcake.com/images/cupcakes_flavours/PrideDay.jpg",
        category: [Category.SpecialEvents],
        descImage: null,
        description: "With over an estimated 1.3 million people in attendance you would think someone would want a cupcake??"
    },
    {
        _id: "10",
        name: "On Canada! Canada Day cupcake",
        price: 3.75,
        image: "https://www.torontocupcake.com/images/cupcakes_flavours/canadaday.webp",
        category: [Category.Holidays, Category.Hot],
        descImage: "https://www.torontocupcake.com/images/cupcakes_flavours/canadadaytop.webp",
        description: "Oh Canada! A red velvet cupcake topped with vanilla frosting and a fondant maple leaf"
    },
    {
        _id: "11",
        name: "All That Jazz",
        price: 3.75,
        image: "https://www.torontocupcake.com/images/cupcakes_flavours/jazz.jpg",
        category: [Category.SpecialEvents],
        descImage: null,
        description: "Nothing like cool jazz and a cupcake. This cupcake has all the right notes."
    },
    {
        _id: "12",
        name: "Lights, Camera, Action!",
        price: 3.75,
        image: "https://www.torontocupcake.com/images/cupcakes_flavours/Tiff.jpg",
        category: [Category.SpecialEvents],
        descImage: null,
        description: "Toronto's International Film Festival is a world class event 2nd only to Cannes. TIFF is dedicated to presenting the best of international and Canadian cinema to film lovers - click on the link to browse all the good deeds being done by TIFF."
    },
    {
        _id: "13",
        name: "Just for Kids cupcake",
        price: 4,
        image: "https://www.torontocupcake.com/images/cupcakes_flavours/custom2.webp",
        category: [Category.Custom],
        descImage: "https://www.torontocupcake.com/images/cupcakes_flavours/elmo.jpg",
        description: "Cookie Monster, Elmo and a host of other characters. When ordering let us know who you would like to see."
    },
    {
        _id: "14",
        name: "Happy Birthday cupcake!",
        price: 3.75,
        image: "https://www.torontocupcake.com/images/cupcakes_flavours/CustomBirthday.jpg",
        category: [Category.Custom],
        descImage: null,
        description: "Custom Birthday Cupcakes! Send us a design or picture and we will reproduce in chocolate!."
    },
    {
        _id: "15",
        name: "Custom Image Cupcake",
        price: 3.75,
        image: "https://www.torontocupcake.com/images/cupcakes_flavours/Tiff.jpg",
        category: [Category.Custom],
        descImage: null,
        description: "Highlight that great smile on top of any of our cupcakes!"
    },
]