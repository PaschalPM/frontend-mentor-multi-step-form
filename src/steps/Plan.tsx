import HeaderText from "../components/HeaderText";
import PlanListItem from "../components/listItems/PlanListItem";
import { plans } from "../lib/constants";
import { FormEventHandler, useState } from "react";
import TypeSpan from "../components/planStep/TypeSpan";
import TypeToggle from "../components/planStep/TypeToggle";
import { useAppStepCtx, useAppStore } from "../lib/hooks";
import BaseForm from "../components/forms/BaseForm";

export default function Plan() {
  const { state, setPlan } = useAppStore();
  const [selectedPlan, setSelectedPlan] = useState<PlanType>(state.plan);
  const [selectedType, setSelectedType] = useState<"monthly" | "yearly">(
    state.plan.type
  );
  const { nextStep } = useAppStepCtx();

  const selectPlanFunc = (plan: PlanType) => {
    setSelectedPlan(plan);
  };

  const toggleSelectedType = () => {
    setSelectedType((value) => {
      if (value === "monthly") {
        return "yearly";
      }
      return "monthly";
    });
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (ev) => {
    ev.preventDefault();
    const selectedPlanObj = plans.find(
      (plan) => plan.name === selectedPlan.name
    ) as PlanObjType;

    setPlan({
      ...selectedPlan,
      type: selectedType,
      price: selectedPlanObj[selectedType].price,
    });
    nextStep();
  };
  return (
    <>
      <HeaderText text="Select your plan" />
      <HeaderText
        text="You have the option of monthly or yearly billing."
        type="paragraph"
      />
      <BaseForm handleSubmit={handleSubmit}>
        <ul className="flex flex-col md:grid md:grid-cols-3 gap-4">
          {plans.map((plan) => (
            <PlanListItem
              key={plan.name}
              plan={plan}
              type={selectedType}
              selectedPlan={selectedPlan}
              selectPlanFunc={selectPlanFunc}
            />
          ))}
        </ul>
        <div className="w-full bg-alabaster rounded-xl p-3 flex gap-6 justify-center items-center mt-2">
          <TypeSpan text="Monthly" selectedType={selectedType} />
          <TypeToggle
            selectedType={selectedType}
            toggleSelectedType={toggleSelectedType}
          />
          <TypeSpan text="Yearly" selectedType={selectedType} />
        </div>
      </BaseForm>
    </>
  );
}
