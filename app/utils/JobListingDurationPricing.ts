

interface iAppProps {
    days: number;
    price: number;
    description: string;
}



export const JobListingDurationPricing: iAppProps[] = [{
    days: 30,
    price: 99,
    description: "Standard listing for 30 days",

},

{
    days: 60,
    price: 179,
    description: "Extended visibility for 60 days",
}

,
{
    days: 90,
    price: 249,
    description: "Premium listing for 90 days",
},

{
    days: 120,
    price: 299,
    description: "Extended visibility for 120 days",
},

{
    days: 180,
    price: 399,
    description: "Premium listing for 180 days",
},

{
    days: 365,
    price: 499,
    description: "Extended visibility for 365 days",
}

]