import SubmitButton from "../SubmitButton";
import InputField from "../InputField";
import { useCurrentPageNumberCtx } from "../../lib/hooks";
import { useLocalStorage } from "../../lib/hooks";
import { infoFormBaseObj } from "../../lib/constants";
import { useForm } from "react-hook-form";

type Props = {};

export default function InfoForm({}: Props) {
  const { value: infoFormValue, setLocalValue: setLocalInfoObj } =
    useLocalStorage<Record<"name" | "email" | "phone", string>>(
      "infoForm",
      infoFormBaseObj
    );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: infoFormValue,
  });
  const { nextPage } = useCurrentPageNumberCtx();
  return (
    <form
      autoComplete="off"
      className="h-full"
      onSubmit={handleSubmit((data) => {
        setLocalInfoObj(data);
        nextPage();
      })}
    >
      <div className="h-full flex flex-col justify-between">
        <div className="flex flex-col gap-5 bg-white rounded-b-xl px-6 md:px-0 py-8 md:py-0 pt-4 md:pt-0">
          <InputField
            id=":r0:"
            name="name"
            label="Name"
            placeholder="e.g. Stephen King"
            register={register}
            error={errors["name"]}
            registerOptions={{ required: "This field is required" }}
          />
          <InputField
            id=":r1:"
            name="email"
            label="Email Address"
            placeholder="e.g. stephenking@lorem.com"
            inputMode="email"
            register={register}
            error={errors["email"]}
            registerOptions={{
              required: "This field is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
                message: "Invalid phone number address",
              },
            }}
          />
          <InputField
            id=":r2:"
            name="phone"
            label="Phone Number"
            placeholder="e.g. +1 234 567 8901"
            inputMode="tel"
            register={register}
            error={errors["phone"]}
            registerOptions={{
              required: "This field is required",
              pattern: {
                value: /^(\+\d)?\s?([0-9]{3}\s?[0-9]{3}\s?[0-9]{4})$/,
                message: "Invalid phone number address",
              },
            }}
          />
        </div>
        <div className="w-full flex justify-end z-20 mt-12">
          <SubmitButton text="Next Step" />
        </div>
      </div>
    </form>
  );
}
