import { cn } from "../lib/utils";
import { Dispatch, SetStateAction } from "react";

type Props = {
  label: string;
  name: string;
  id: string;
  placeholder: string;
  inputMode?: "text" | "email" | "tel";
  formObj: Record<string, string>;
  setFormObj: Dispatch<SetStateAction<Record<string, string>>>;
  errors: Record<string, string>;
};

export default function InputField({
  id,
  name,
  label,
  placeholder,
  inputMode = "text",
  formObj,
  setFormObj,
  errors,
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
        <span className="text-sm tracking-tight font-semibold text-strawberry-red">{errors[name]}</span>
      </div>
      <input
        className={cn(
          "cursor-pointer border border-light-gray px-3 py-2 rounded-lg tracking-tighter placeholder:font-medium placeholder:text-cool-gray focus-visible:outline-none focus-visible:border-purplish-blue",
          { "border-strawberry-red focus-visible:border-strawberry-red": errors[name] }
        )}
        autoComplete="off"
        name={name}
        id={id}
        placeholder={placeholder}
        inputMode={inputMode}
        value={formObj[name]}
        onChange={(ev) => {
          setFormObj((v) => ({ ...v, [name]: ev.target.value }));
        }}
      />
    </div>
  );
}
