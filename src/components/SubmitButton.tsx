import { cn } from "../lib/utils";

type Props = {
  text: "Confirm" | "Next Step";
  handleClick?: () => void;
};

export default function SubmitButton({ text, handleClick }: Props) {
  return (
    <button
      className={cn(
        "px-7 py-2.5 bg-marine-blue text-magnolia rounded-lg tracking-tight font-medium hover:bg-purplish-blue hover:opacity-75",
        { "bg-purplish-blue": text === "Confirm" }
      )}
      type="submit"
      onClick={handleClick && handleClick}
    >
      {text}
    </button>
  );
}
