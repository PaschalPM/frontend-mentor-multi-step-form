import { createContext, PropsWithChildren, useState } from "react";
import useStore from "../hooks/store.hook";

type AppStepCtxType = {
  currentStep: number;
  nextStep: () => void;
  prevStep: () => void;
  gotoStep: (step: number) => void;
};
const appStepCtx = createContext<AppStepCtxType>({} as AppStepCtxType);

const AppStepCtxProvider = ({ children }: PropsWithChildren) => {
  const { state, setStep } = useStore();
  const [currentStep, setCurrentStep] = useState(
    state.step === 0 ? 1 : state.step
  );
  const nextStep = () => {
    setStep(currentStep + 1);
    setCurrentStep((v) => v + 1);
  };
  const prevStep = () => {
    setStep(currentStep - 1);
    setCurrentStep((v) => v - 1);
  };
  const gotoStep = (step: number) => {
    setStep(step);
    setCurrentStep(step);
  };

  return (
    <appStepCtx.Provider value={{ currentStep, nextStep, prevStep, gotoStep }}>
      {children}
    </appStepCtx.Provider>
  );
};

export { appStepCtx, AppStepCtxProvider };
