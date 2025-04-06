import { prisma } from "@/app/utils/db"

async function getData() {
    const data = await prisma.jobPost.findMany({
        where: {
            status: "ACTIVE",
        },
        select: {
            jobTitle: true,
            id: true,
            salaryFrom: true,
            salaryTo: true,
            employmentType: true,
            location: true,
            Company: {
                select: {
                    name: true,
                    logo: true,
                    website: true,
                    xAccount: true,
                },
            }
        }

    });
}



export function JobListings() {
    return (
        <h1>Hello</h1>
    )
}