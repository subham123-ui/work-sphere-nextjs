/* eslint-disable react/no-unescaped-entities */
import { prisma } from "@/app/utils/db";
import { requireUser } from "@/app/utils/requireUser";
import { CreateJobForm } from "@/components/forms/CreateJobForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ArcjetLogo from "@/public/arcjet.jpg";
import IngestLogo from "@/public/inngest-locale.png";
import Image from "next/image";
import { redirect } from "next/navigation";

const stats = [
  {
    id: 0,
    value: "10k+",
    label: "Monthly Active Users",
  },
  {
    id: 1,
    value: "48h",
    label: "Average time to hire",
  },
  {
    id: 2,
    value: "95%",
    label: "Employer satisfaction rate",
  },
  {
    id: 3,
    value: "500+",
    label: "Companies hiring remotely on this platform",
  },
];

const companies = [
  { id: 0, name: "Arcjet", logo: ArcjetLogo },
  { id: 1, name: "Ingest", logo: IngestLogo },
  { id: 2, name: "Arcjet", logo: ArcjetLogo },
  { id: 3, name: "Ingest", logo: IngestLogo },
  { id: 4, name: "Arcjet", logo: ArcjetLogo },
  { id: 5, name: "Ingest", logo: IngestLogo },
];

const testimonials = [
  {
    quote:
      "This platform completely transformed how we hire. We went from sifting through endless resumes to finding top talent in record time!",
    author: "Sarah Lewis",
    company: "TechNova",
  },
  {
    quote:
      "The intuitive design and automation features save us hours each week. Posting jobs and managing applications has never been easier!",
    author: "Michael Dawson",
    company: "BrightPath Solutions",
  },
  {
    quote:
      "We needed a solution that could handle high-volume hiring, and this SaaS app delivered. Seamless integrations and a great candidate experience!",
    author: "Lisa Reynolds",
    company: "FutureCorp",
  },
  {
    quote:
      "The user-friendly interface attracts high-quality applicants. We've seen a 40% increase in applications since switching to this platform.",
    author: "James Kendall",
    company: "InnovateX",
  },
  {
    quote:
      "Our hiring process was chaotic before we found this tool. Now, everything is streamlined, and we can focus on finding the right people.",
    author: "Emma Sanders",
    company: "BuildRight Ventures",
  },
];

async function getCompany(userId: string) {
  const data = await prisma.company.findUnique({
    where: {
      userId: userId,
    },
    select: {
      name: true,
      location: true,
      about: true,
      logo: true,
      xAccount: true,
      website: true,
    },
  });

  if (!data) {
    return redirect("/");
  }

  return data;
}

export default async function PostJobPage() {
  const session = await requireUser();
  const data = await getCompany(session.id as string);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-5">
      <CreateJobForm
        companyAbout={data.about}
        companyLocation={data.location}
        companyName={data.name}
        companyLogo={data.logo}
        companyXAccount={data.xAccount}
        companyWebsite={data.website}
      />

      <div className="col-span-1">
        <Card>
          <CardHeader className="">
            <CardTitle className="text-xl ">
              Trusted by indusrty Leaders
            </CardTitle>
            <CardDescription>
              Join thousands of companies hiring top talents
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Company Logo */}
            <div className="grid grid-cols-3 gap-4">
              {companies.map((company) => (
                <div key={company.id} className="">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={80}
                    height={80}
                    className="rounded-lg opacity-75 transition-opacity hover:opacity-100"
                  />
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {testimonials.map((testimonial, index) => (
                <blockquote
                  key={index}
                  className="border-l-2 border-primary pl-4"
                >
                  <p className="text-sm text-muted-foreground italic">
                    "{testimonial.quote}"
                  </p>
                  <footer className="mt-2 text-sm font-medium">
                    - {testimonial.author}, <cite>{testimonial.company}</cite>
                  </footer>
                </blockquote>
              ))}
            </div>

            {/* We will render stats here */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.id} className="rounded-lg bg-muted p-4">
                  <h4 className="text-2xl font-bold">{stat.value}</h4>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
