import InputField from "../InputField";
import { useAppStepCtx, useAppStore } from "../../lib/hooks";
import { useForm } from "react-hook-form";
import BaseForm from "./BaseForm";

type Props = {};

export default function InfoForm({}: Props) {
  const { state, setInfo } = useAppStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: state.info,
  });
  const { nextStep } = useAppStepCtx();
  return (
    <BaseForm
      withBackBtn={false}
      handleSubmit={handleSubmit((data) => {
        setInfo(data);
        nextStep();
      })}
    >
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
    </BaseForm>
  );
}
