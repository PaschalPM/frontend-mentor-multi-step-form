import { useNavigate } from "react-router-dom";
import GoBackButton from "../components/GoBackButton";
import HeaderText from "../components/HeaderText";
import SelectedAddOnListItem from "../components/listItems/SelectedAddOnListItem";
import SubmitButton from "../components/SubmitButton";
import SelectedPlan from "../components/summaryStep/SelectedPlan";
import Total from "../components/summaryStep/Total";
import { useAppStepCtx, useAppStore } from "../lib/hooks";

export default function Summary() {
  const {
    state: { plan, addOns },
  } = useAppStore();
  const navigate = useNavigate();
  const { gotoStep } = useAppStepCtx();
  const confirmFunc = () => {
    gotoStep(1);
    navigate("/thank-you");
  };
  return (
    <>
      <HeaderText text="Finishing up" />
      <HeaderText
        text="Double-check everything looks OK before confirming."
        type="paragraph"
      />

      <div className="h-full flex flex-col justify-between">
        <div className="flex flex-col gap-5 bg-white rounded-b-xl px-6 md:px-0 py-8 md:py-0 pt-4 md:pt-0">
          <div className="bg-alabaster rounded-lg py-4 px-6">
            <SelectedPlan selectedPlan={plan} />
            <ul className="flex flex-col">
              {addOns.map((addOn) => (
                <SelectedAddOnListItem
                  addOn={addOn}
                  selectedType={plan.type}
                  key={addOn.name}
                />
              ))}
            </ul>
          </div>
          <Total plan={plan} addOns={addOns} />
        </div>
      </div>
      <div className="w-full flex z-20 mt-12 justify-between">
        <GoBackButton />
        <SubmitButton text="Confirm" handleClick={confirmFunc} />
      </div>
    </>
  );
}
