import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { companySchema } from "@/app/utils/zodSchema";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { countryList } from "@/app/utils/coutriesList";
import { Textarea } from "@/components/ui/textarea";
export function CompanyForm() {
  const form = useForm<z.infer<typeof companySchema>>({
    resolver: zodResolver(companySchema),
    defaultValues: {
      about: "",
      location: "",
      logo: "",
      website: "",
      xAccount: "",
    },
  });
  return (
    <Form {...form}>
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company Name</FormLabel>
                <FormControl>
                  <Input placeholder=" Enter company name" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company location</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                        <SelectValue placeholder="Select location"/>
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                        <SelectLabel>
                            Worldwide
                        </SelectLabel>
                        <SelectItem value="worldwide">
                            <span>🌎</span> <span>Worldwide / Remote</span>
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
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
            control={form.control}
            name="website"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Website</FormLabel>
                <FormControl>
                  <Input placeholder="https://yourcompany.com" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        <FormField
            control={form.control}
            name="xAccount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>X (Twitter Account)</FormLabel>
                <FormControl>
                  <Input placeholder="@yourcompany" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <FormField
            control={form.control}
            name="about"
            render={({ field }) => (
              <FormItem>
                <FormLabel>About</FormLabel>
                <FormControl>
                  <Textarea placeholder="Tell us about your company" {...field}/>
                </FormControl>
              </FormItem>
            )}
          />
      </form>
    </Form>
  );
}
