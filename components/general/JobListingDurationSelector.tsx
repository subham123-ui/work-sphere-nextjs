import { ControllerRenderProps } from "react-hook-form";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { JobListingDurationPricing } from "@/app/utils/JobListingDurationPricing";

interface iAppProps {
  field: ControllerRenderProps;
}

export function JobListingDurationSelector({ field }: iAppProps) {
  return (
    <RadioGroup
      value={field.value?.toString()}
      onValueChange={(value) => field.onChange(parseInt(value))}
      className="grid grid-cols-2 gap-4"
    >
      <div className="flex flex-col gap-4">
        {JobListingDurationPricing.map((duration) => (
          <div key={duration.days} className="flex items-center space-x-2">
            <RadioGroupItem
              value={duration.days.toString()}
              id={duration.days.toString()}
              className="sr-only"
              
            />
            
          </div>
        ))}
      </div>
    </RadioGroup>
  );
}
