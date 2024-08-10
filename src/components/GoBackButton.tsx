import { useAppStepCtx } from "../lib/hooks";

export default function GoBackButton() {
  const { prevStep } = useAppStepCtx();
  return (
    <button
      className="rounded-lg tracking-tight font-medium hover:opacity-75 p-0 bg-transparent text-cool-gray hover:bg-transparent"
      onClick={prevStep}
    >
      Go Back
    </button>
  );
}
