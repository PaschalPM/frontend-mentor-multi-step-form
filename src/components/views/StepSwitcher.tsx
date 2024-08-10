import { useCallback } from "react";
import StepLayout from "../../layouts/StepLayout";
import Info from "../../steps/Info";
import Plan from "../../steps/Plan";
import AddOns from "../../steps/AddOns";
import Summary from "../../steps/Summary";



type Props = {
  stepNum?: number;
};

export default function StepSwitcher({ stepNum = 1 }: Props) {
  const getSelectedPage = useCallback(
    (stepNum: number) => {
      switch (stepNum) {
        case 2:
          return <Plan />;
        case 3:
          return <AddOns />;
        case 4:
          return <Summary />;
        default:
          return <Info />;
      }
    },
    [stepNum]
  );
  return <StepLayout> {getSelectedPage(stepNum)} </StepLayout>;
}
