import { z } from "zod";


export const companySchema = z.object({
    name: z.string().min(2, { message: "Company name must be at least 2 characters long" }),
    location: z.string().min(1, { message: "Location must be defined" }),
    about: z.string().min(10, { message: "Please provide some information about your company" }),
    logo: z.string().min(1, "Please provide a logo"),
    website: z.string().url("Please provide a valid URL"),
    xAccount: z.string().optional(),
})