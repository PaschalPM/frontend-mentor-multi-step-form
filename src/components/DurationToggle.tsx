import { Dispatch, SetStateAction } from "react";
import { cn } from "../lib/utils";

type Props = {
  selectedDuration: "monthly" | "yearly";
  toggleSelectedDuration: () => void;
};

export default function DurationToggle({
  selectedDuration,
  toggleSelectedDuration,
}: Props) {
  
  return (
    <div className="relative bg-marine-blue rounded-full w-10 h-5 px-1 cursor-pointer" onClick={toggleSelectedDuration}>
      <span className={cn("absolute h-3 w-3 rounded-full bg-alabaster top-1/2 -translate-y-1/2 transition-all left-1", {"left-6": selectedDuration === "yearly"})}></span>
    </div>
  );
}
