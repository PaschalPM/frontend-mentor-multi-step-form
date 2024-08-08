import { useCallback } from "react";
import { cn } from "../lib/utils";

type Props = {
  plan: PlanObjType;
  duration: "monthly" | "yearly";
  selectedPlan: PlanOptionType;
  selectPlanFunc: (name: PlanOptionType) => void;
};

export default function PlanList({
  plan,
  duration,
  selectedPlan,
  selectPlanFunc,
}: Props) {
  const isSelected = useCallback(() => {
    return selectedPlan === plan.name.toLowerCase();
  }, [selectedPlan]);

  return (
    <li
      className="grow shrink-0"
      id={plan.name}
      onClick={() => selectPlanFunc(plan.name.toLowerCase() as PlanOptionType)}
    >
      <div
        className={cn(
          "flex md:flex-col gap-4 md:gap-0 p-4 rounded-lg border cursor-pointer hover:border-purplish-blue ",
          { "border-purplish-blue bg-alabaster": isSelected() }
        )}
        role="button"
      >
        <img src={plan.img} alt="Arcade" className="md:mb-8 w-10 " />
        <div>
          <p className="text-marine-blue font-semibold mb-1 tracking-tight">
            {plan.name}
          </p>
          <p className="text-cool-gray text-sm font-medium mb-1">
            {plan[duration].payment}
          </p>
          {plan[duration].free ? (
            <p className="text-xs tracking-tight text-marine-blue font-medium">
              {plan[duration].free}
            </p>
          ) : null}
        </div>
      </div>
    </li>
  );
}
