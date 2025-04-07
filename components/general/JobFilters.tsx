"use client";

import { XIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { Separator } from "../ui/separator";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";
import { countryList } from "@/app/utils/countriesList";



const jobTypes = ["full-time", "part-time", "contract", "internship"];

export function JobFilters() {
  return (
    <Card className="col-span-1 h-fit">
      <CardHeader className="flex flex-row justify-between items-center">
        <CardTitle className="text-2xl font-semibold">Job Title</CardTitle>
        <Button variant="destructive" className="h-8" size="sm">
          <span>Clear All</span>
          <XIcon className="size-4" />
        </Button>
      </CardHeader>
        <Separator className="mb-4" />
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <Label className="text-lg font-semibold">Job Type</Label>
          <div className="grid grid-cols-2 gap-4">
            {jobTypes.map((job, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Checkbox id={job} />
                <Label htmlFor={job} className="text-sm font-medium">
                  {job}
                </Label>
              </div>
            ))}
          </div>
        </div>
        <Separator className="mb-4"/>
        <div className=" space-y-4">
            <Label className="text-lg font-semibold">
                Location
            </Label>
            <Select>
                <SelectTrigger>
                    <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent suppressHydrationWarning>
                        <SelectGroup>
                          <SelectLabel>Worldwide</SelectLabel>
                          <SelectItem value="worldwide">
                            <span>🌎</span>
                            <span className="pl-2">Worldwide / Remote</span>
                          </SelectItem>
                        </SelectGroup>
                        <SelectGroup>
                          <SelectLabel>Location</SelectLabel>
                          {countryList.map((country) => (
                            <SelectItem key={country.code} value={country.name}>
                              <span>{country.flagEmoji}</span>
                              <span className="pl-2">{country.name}</span>
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
            </Select>
        </div>
      </CardContent>
    </Card>
  );
}
