import { Slider } from "../ui/slider";

export default function SalaryRangeSelector() {
  return (
    <div className="w-full space-y-4">
      <Slider max={100} step={1} />
    </div>
  );
}
