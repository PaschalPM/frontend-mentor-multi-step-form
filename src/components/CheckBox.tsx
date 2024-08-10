import { ChangeEventHandler } from "react";

type Props = {id: string; isChecked: boolean; handleChange: ChangeEventHandler<HTMLInputElement>}

export default function CheckBox({id, isChecked, handleChange}:Props) {
  return (
    <div className="relative h-5">
      <input
        type="checkbox"
        className="peer relative size-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all checked:bg-purplish-blue "
        id={id}
        checked={isChecked}
        onChange={handleChange}
      />
      <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-100 transition-opacity peer-checked:opacity-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3.5 w-3.5"
          viewBox="0 0 20 20"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="1"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
    </div>
  );
}
