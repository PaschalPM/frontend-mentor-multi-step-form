import SubmitButton from "../SubmitButton";
import InputField from "../InputField";
import { FormEventHandler, useState } from "react";
import { useCurrentPageNumberCtx, useInfoFormValidator } from "../../lib/hooks";
import { useLocalStorage } from "../../lib/hooks";
import { infoFormBaseObj } from "../../lib/constants";

type Props = {};

export default function InfoForm({}: Props) {

  const { value: infoFormValue, setLocalValue: setLocalInfoObj } =
    useLocalStorage<Record<string, string>>("infoForm", infoFormBaseObj);

  const [formObj, setFormObj] = useState<Record<string, string>>({
    ...infoFormValue,
  });

  const [errors, setErrors] = useState<Record<string, string>>({
    ...infoFormBaseObj,
  });

  const { validateForm, isValid } = useInfoFormValidator(
    formObj,
    errors,
    setErrors
  );

  const { nextPage } = useCurrentPageNumberCtx();

  const handleSubmit: FormEventHandler<HTMLFormElement> = (ev) => {
    ev.preventDefault();
    validateForm();

    if (isValid) {
      nextPage();
      setLocalInfoObj(formObj);
    }
  };
  
  return (
    <form autoComplete="off" className="h-full" onSubmit={handleSubmit}>
      <div className="h-full flex flex-col justify-between">
        <div className="flex flex-col gap-5 bg-white rounded-b-xl px-6 md:px-0 py-8 md:py-0 pt-4 md:pt-0">
          <InputField
            id=":r0:"
            label="Name"
            name="name"
            placeholder="e.g. Stephen King"
            formObj={formObj}
            setFormObj={setFormObj}
            errors={errors}
          />
          <InputField
            id=":r1:"
            label="Email Address"
            name="email"
            placeholder="e.g. stephenking@lorem.com"
            inputMode="email"
            formObj={formObj}
            setFormObj={setFormObj}
            errors={errors}
          />
          <InputField
            id=":r2:"
            label="Phone Number"
            name="phone"
            placeholder="e.g. +1 234 567 8901"
            inputMode="tel"
            formObj={formObj}
            setFormObj={setFormObj}
            errors={errors}
          />
        </div>
        <div className="w-full flex justify-end z-20 mt-12">
          <SubmitButton text="Next Step" />
        </div>
      </div>
    </form>
  );
}
