import { useMemo } from "react";
import { planTypeAbbrFunc } from "../../lib/utils";

type Props = {
  plan: PlanType;
  addOns: AddOnType[];
};

export default function Total({ plan, addOns }: Props) {
  const duration = useMemo(() => {
    return plan.type === "monthly" ? "month" : "year";
  }, [plan.type]);

  const typeAbbr = useMemo(() => {
    return planTypeAbbrFunc(plan.type);
  }, [plan.type]);

  const totalPrice = useMemo(() => {
    return (
      plan.price +
      addOns.reduce((pv, cv) => {
        return pv + cv.price;
      }, 0)
    );
  }, [plan.price, JSON.stringify(addOns)]);
  return (
    <div className="flex justify-between items-center px-6">
      <span className="text-cool-gray tracking-tight font-medium text-sm">
        Total (per {duration})
      </span>
      <span className="text-purplish-blue font-bold tracking-tight text-lg">
        +${totalPrice}/{typeAbbr}
      </span>
    </div>
  );
}
