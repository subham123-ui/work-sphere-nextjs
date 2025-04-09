import { getFlagEmoji } from "@/app/utils/countriesList";
import { prisma } from "@/app/utils/db";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { notFound } from "next/navigation";

async function getJob(jobId: string) {
  const jobData = await prisma.jobPost.findUnique({
    where: {
      status: "ACTIVE",
      id: jobId,
    },
    select: {
      jobTitle: true,
      jobDescription: true,
      location: true,
      employmentType: true,
      benefits: true,
      createdAt: true,
      Company: {
        select: {
          logo: true,
          location: true,
          about: true,
        },
      },
    },
  });

  if (!jobData) {
    return notFound();
  }
  return jobData;
}

type Params = Promise<{ jobId: string }>;

export default async function JobIdPage({ params }: { params: Params }) {
  const { jobId } = await params;

  const data = await getJob(jobId); // Replace with actual jobId from params
  
  const locationFlag = getFlagEmoji(data.location);
  
  return (
    <div className="grid lg:grid-cols-[1fr, 400px] gap-8">
      <div className="space-y-8 ">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="">
            <h1 className="text-3xl font-bold">Marketing Manager</h1>
            <div className="flex items-center gap-2 mt-2">
              <p className="font-medium">{data.jobTitle}</p>
              <Badge className="rounded-full" variant={"secondary"}>
                {data.employmentType}
              </Badge>
              <span className="hidden md:inline text-muted-foreground">*</span>
              <Badge className="rounded-full">{locationFlag && <span className="mr-1">{locationFlag}</span>}{data.location}</Badge>
            
            </div>
          </div>
          <Button variant={"outline"}>
            <Heart className="size-4" />
            Save Job
          </Button>
        </div>
        {/* Description */}
        <section>
          <p>This is the job description...</p>
        </section>
      </div>
    </div>
  );
}
