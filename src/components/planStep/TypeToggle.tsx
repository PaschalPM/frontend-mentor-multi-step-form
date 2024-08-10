import { cn } from "../../lib/utils";

type Props = {
  selectedType: "monthly" | "yearly";
  toggleSelectedType: () => void;
};

export default function TypeToggle({
  selectedType,
  toggleSelectedType,
}: Props) {
  return (
    <div
      className="relative bg-marine-blue rounded-full w-10 h-5 px-1 cursor-pointer"
      onClick={toggleSelectedType}
    >
      <span
        className={cn(
          "absolute h-3 w-3 rounded-full bg-alabaster top-1/2 -translate-y-1/2 transition-all left-1",
          { "left-6": selectedType === "yearly" }
        )}
      ></span>
    </div>
  );
}
