import { cn } from "../lib/utils";

type Props = {
  num: number;
  text: string;
  isActive?: boolean;
};

const StepList = ({ num, text, isActive = false }: Props) => {
  return (
    <li className="flex items-center gap-4">
      <div
        className={cn(
          "flex items-center justify-center w-8 h-8 rounded-full border border-light-gray",
          { "bg-light-blue border-light-blue": isActive }
        )}
      >
        <span
          className={cn("text-white font-semibold text-sm", {
            "text-marine-blue": isActive,
          })}
        >
          {num}
        </span>
      </div>
      <div className="hidden md:flex flex-col uppercase">
        <span className="text-xs text-cool-gray">Step {num}</span>
        <p className="text-alabaster text-sm font-semibold tracking-wider">
          {text}
        </p>
      </div>
    </li>
  );
};

export default StepList;
