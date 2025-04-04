import { prisma } from "@/app/utils/db";
import { inngest } from "@/app/utils/inngest/client";


export const helloworld = inngest.createFunction(
    { id: "hello-world" },
    { event: "test/hello-world" },
    async ({ event, step }) => {
        await step.sleep("wait a moment...", "1s");
        return { message: `Hello ${event.data.email}` }
    }
);



export const handleJobExpiration = inngest.createFunction(
    { id: "job-expiration" },
    { event: "job/created" },
    async ({ event, step }) => {
        const { jobId, expirationDays } = event.data;

        await step.sleep("wait-for-expiration", `${expirationDays}d`);

        await step.run('update-job-status', async () => {
            await prisma.jobPost.update({
                where: {
                    id: jobId,
                },
                data: {
                    status: "EXPIRED",
                },
            });
        });

        return { jobId, message: `Job ${jobId} has been expired` };
    }

)