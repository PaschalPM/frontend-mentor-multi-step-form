import { useCallback } from "react";
import { cn } from "../lib/utils";

type Props = {
  text: "Monthly" | "Yearly";
  selectedDuration: "monthly" | "yearly";
};

export default function DurationSpan({ text, selectedDuration }: Props) {
  const isSelected = useCallback(() => {
    return selectedDuration === text.toLowerCase();
  }, [selectedDuration]);

  return (
    <span
      className={cn("text-sm font-semibold tracking-tight text-cool-gray", {
        "text-marine-blue": isSelected(),
      })}
    >
      {text}
    </span>
  );
}
