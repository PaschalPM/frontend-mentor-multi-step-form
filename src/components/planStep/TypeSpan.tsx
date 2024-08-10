import { useCallback } from "react";
import { cn } from "../../lib/utils";

type Props = {
  text: "Monthly" | "Yearly";
  selectedType: "monthly" | "yearly";
};

export default function TypeSpan({ text, selectedType }: Props) {
  const isSelected = useCallback(() => {
    return selectedType === text.toLowerCase();
  }, [selectedType]);

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
