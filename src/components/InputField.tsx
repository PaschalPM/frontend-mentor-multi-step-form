import { FieldError, RegisterOptions, UseFormRegister } from "react-hook-form";
import { cn } from "../lib/utils";

type Props = {
  label: string;
  id: string;
  name: string;
  placeholder: string;
  inputMode?: "text" | "email" | "tel";
  register: UseFormRegister<any>;
  error?: FieldError;
  registerOptions: RegisterOptions;
};
export default function InputField({
  id,
  name,
  label,
  placeholder,
  inputMode = "text",
  register,
  error,
  registerOptions,
}: Props) {
  return (
    <div className="w-full flex flex-col space-y-2">
      <div className="flex justify-between">
        <label
          htmlFor={id}
          className="text-sm text-marine-blue font-medium tracking-tight"
        >
          {label}
        </label>
        <span className="text-sm tracking-tight font-semibold text-strawberry-red">
          {error?.message}
        </span>
      </div>
      <input
        {...register(name, registerOptions)}
        className={cn(
          "cursor-pointer border border-light-gray px-3 py-2 rounded-lg tracking-tighter placeholder:font-medium placeholder:text-cool-gray focus-visible:outline-none focus-visible:border-purplish-blue",
          {
            "border-strawberry-red focus-visible:border-strawberry-red":
              error?.message,
          }
        )}
        autoComplete="off"
        name={name}
        id={id}
        placeholder={placeholder}
        inputMode={inputMode}
      />
    </div>
  );
}
