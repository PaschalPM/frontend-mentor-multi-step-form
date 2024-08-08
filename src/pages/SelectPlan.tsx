import HeaderText from "../components/HeaderText";
import GoBackButton from "../components/GoBackButton";
import PlanList from "../components/PlanList";
import SubmitButton from "../components/SubmitButton";
import { plans } from "../lib/constants";
import { FormEventHandler, useState } from "react";
import DurationSpan from "../components/DurationSpan";
import DurationToggle from "../components/DurationToggle";
import { useCurrentPageNumberCtx, useLocalStorage } from "../lib/hooks";

export default function SelectPlan() {
  const { value: planLocalValue, setLocalValue: setPlanLocalValue } =
    useLocalStorage<{
      plan: PlanOptionType;
      duration: "monthly" | "yearly";
    }>("selectPlan", {
      plan: "arcade",
      duration: "monthly",
    });
  const [selectedPlan, setSelectedPlan] = useState<PlanOptionType>(
    planLocalValue.plan
  );
  const [selectedDuration, setSelectedDuration] = useState<
    "monthly" | "yearly"
  >(planLocalValue.duration);
  const { nextPage } = useCurrentPageNumberCtx();

  const selectPlanFunc = (name: PlanOptionType) => {
    setSelectedPlan(name);
  };

  const toggleSelectedDuration = () => {
    setSelectedDuration((value) => {
      if (value === "monthly") {
        return "yearly";
      }
      return "monthly";
    });
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (ev) => {
    ev.preventDefault();
    setPlanLocalValue({
      plan: selectedPlan,
      duration: selectedDuration,
    });
    nextPage();
  };
  return (
    <>
      <HeaderText text="Select your plan"></HeaderText>
      <HeaderText
        text="You have the option of monthly or yearly billing."
        type="paragraph"
      ></HeaderText>
      <form autoComplete="off" className="h-full" onSubmit={handleSubmit}>
        <div className="h-full flex flex-col justify-between">
          <div className="flex flex-col gap-5 bg-white rounded-b-xl px-6 md:px-0 py-8 md:py-0 pt-4 md:pt-0">
            <ul className="flex flex-col md:grid md:grid-cols-3 gap-4">
              {plans.map((plan) => (
                <PlanList
                  key={plan.name}
                  plan={plan}
                  duration={selectedDuration}
                  selectedPlan={selectedPlan}
                  selectPlanFunc={selectPlanFunc}
                />
              ))}
            </ul>
            <div className="w-full bg-alabaster rounded-xl p-3 flex gap-6 justify-center items-center mt-2">
              <DurationSpan
                text="Monthly"
                selectedDuration={selectedDuration}
              />
              <DurationToggle
                selectedDuration={selectedDuration}
                toggleSelectedDuration={toggleSelectedDuration}
              />
              <DurationSpan text="Yearly" selectedDuration={selectedDuration} />
            </div>
          </div>
          <div className="w-full flex z-20 mt-12 justify-between">
            <GoBackButton />
            <SubmitButton text="Next Step" />
          </div>
        </div>
      </form>
    </>
  );
}
