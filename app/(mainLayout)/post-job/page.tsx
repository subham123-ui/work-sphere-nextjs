import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function PostJobPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-5">
      <Card className="col-span-1 lg:col-span-2">
        <CardHeader>
            <CardTitle>Post a Job. Hey yhis is a a  aform</CardTitle>

        </CardHeader>
      </Card>

      <div className="col-span-1">
<Card>
    <CardHeader>
        <CardTitle>Trusted by indusrty Leaders</CardTitle>
        <CardDescription>Join thousands of companies hiring top talents</CardDescription>
    </CardHeader>
</Card>
      </div>
    </div>
  );
}