import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export default function JobIdPage() {
  return (
    <div className="grid lg:grid-cols-[1fr, 400px] gap-8">
      <div className="space-y-8 ">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="">
            <h1 className="text-3xl font-bold">Marketing Manager</h1>
            <div className="flex items-center gap-2 mt-2">
                <p className="font-medium">Cosmic LLC</p>
                <Badge className="rounded-full" variant={"secondary"}>
                    Full Time
                </Badge>
                <span className="hidden md:inline text-muted-foreground">*</span>
                <Badge>
                    Germany
                </Badge>
            </div>
          </div>
          <Button variant={"outline"}>
            <Heart className="size-4"/>
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
