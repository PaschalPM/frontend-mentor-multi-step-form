import { useContext } from "react";
import { appStepCtx } from "../contexts/appStep.ctx";

const useAppStepCtx = () => useContext(appStepCtx);

export default useAppStepCtx;
