import { PropsWithChildren } from "react";
import GoBackButton from "../GoBackButton";
import SubmitButton from "../SubmitButton";

type Props = {
  handleSubmit: (data: any) => void;
  withBackBtn?: boolean;
} & PropsWithChildren;

export default function BaseForm({
  children,
  withBackBtn = true,
  handleSubmit,
}: Props) {
  return (
    <form autoComplete="off" className="h-full" onSubmit={handleSubmit}>
      <div className="h-full flex flex-col justify-between">
        <div className="flex flex-col gap-5 bg-white rounded-b-xl px-6 md:px-0 py-8 md:py-0 pt-4 md:pt-0">
          {children}
        </div>
        {withBackBtn === false ? (
          <div className="w-full flex justify-end z-20 mt-12">
            <SubmitButton text="Next Step" />
          </div>
        ) : (
          <div className="w-full flex z-20 mt-12 justify-between">
            <GoBackButton />
            <SubmitButton text="Next Step" />
          </div>
        )}
      </div>
    </form>
  );
}
