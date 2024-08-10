import { useMemo } from "react";
import { planTypeAbbrFunc, titleCase } from "../../lib/utils";
import { useAppStepCtx } from "../../lib/hooks";

type Props = {
  selectedPlan: PlanType;
};

export default function SelectedPlan({
  selectedPlan: { name, price, type },
}: Props) {
  const { gotoStep } = useAppStepCtx();
  const typeAbbr = useMemo(() => {
    return planTypeAbbrFunc(type);
  }, [type]);

  const titleCasedType = useMemo(() => {
    return titleCase(type);
  }, [type]);

  return (
    <div className="flex items-center justify-between border-b border-magnolia-gray pb-6 mb-4">
      <div className="flex flex-col items-start">
        <span className="text-marine-blue tracking-tight font-medium">
          {name} ({titleCasedType})
        </span>
        <button
          className="text-cool-gray tracking-tight font-medium text-sm underline"
          onClick={() => gotoStep(2)}
        >
          Change
        </button>
      </div>
      <div className="text-marine-blue font-semibold tracking-tight">
        ${price}/{typeAbbr}
      </div>
    </div>
  );
}
