import { useMemo } from "react";
import { cn, planTypeAbbrFunc } from "../../lib/utils";

type Props = {
  plan: PlanObjType;
  type: "monthly" | "yearly";
  selectedPlan: PlanType;
  selectPlanFunc: (plan: PlanType) => void;
};

export default function PlanListItem({
  plan,
  type,
  selectedPlan,
  selectPlanFunc,
}: Props) {
  const isSelected = useMemo(() => {
    return selectedPlan.name === plan.name;
  }, [selectedPlan.name]);

  const typeAbbr = useMemo(() => {
    return planTypeAbbrFunc(type)
  }, [type]);

  return (
    <li
      className="grow shrink-0"
      id={plan.name}
      onClick={() =>
        selectPlanFunc({
          name: plan.name,
          price: plan[type].price,
          type,
        })
      }
    >
      <div
        className={cn(
          "flex md:flex-col gap-4 md:gap-0 p-4 rounded-lg border cursor-pointer hover:border-purplish-blue ",
          { "border-purplish-blue bg-alabaster": isSelected }
        )}
        role="button"
      >
        <img src={plan.img} alt="Arcade" className="md:mb-8 w-10 " />
        <div>
          <p className="text-marine-blue font-semibold mb-1 tracking-tight">
            {plan.name}
          </p>
          <p className="text-cool-gray text-sm font-medium mb-1">
            {plan[type].price}\{typeAbbr}
          </p>

          <p className="text-xs tracking-tight text-marine-blue font-medium">
            {plan[type]?.free}
          </p>
        </div>
      </div>
    </li>
  );
}
