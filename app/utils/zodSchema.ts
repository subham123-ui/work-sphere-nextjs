import { z } from "zod";


export const companySchema = z.object({
    name: z.string().min(2, { message: "Company name must be at least 2 characters long" }),
    location: z.string().min(1, { message: "Location must be defined" }),
    about: z.string().min(10, { message: "Please provide some information about your company" }),
    logo: z.string().min(1, "Please provide a logo"),
    website: z.string().url("Please provide a valid URL"),
    xAccount: z.string().optional(),
})



export const jobSeekerSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters long" }),
    about: z.string().min(10, { message: "Please provide some information about yourself" }),
    resume: z.string().min(1, "Please provide a resume"),
})



export const jobSchema = z.object({
    jobTitle: z.string().min(2, { message: "Job title must be at least 2 characters long" }),
    jobDescription: z.string().min(10, { message: "Please provide a job description" }),
    location: z.string().min(1, { message: "Location must be defined" }),
    employmentType: z.string().min(1, { message: "Please select an employment type" }),
    salaryFrom: z.number().min(1, { message: "Please provide a salary range" }),
    salaryTo: z.number().min(1, { message: "Please provide a salary range" }),
    listingDuration: z.number().min(1, { message: "Please provide a valid listing duration" }),
    benefits: z.array(z.string()).min(1, { message: "Please provide at least one benefit" }),
    companyName: z.string().min(1, { message: "Company name must be provided" }),
    companyLocation: z.string().min(1, { message: "Company location must be provided" }),
    companyAbout: z.string().min(10, { message: "Company information must be provided" }),
    companyLogo: z.string().min(1, { message: "Company logo must be provided" }),
    companyWebsite: z.string().min(1, { message: "Company website must be provided" }),
    companyXAccount: z.string().optional(),
})