import { useMemo } from "react";
import CheckBox from "../CheckBox";
import { cn, planTypeAbbrFunc } from "../../lib/utils";

type Props = {
  addOnItem: AddOnItemType;
  type: "monthly" | "yearly";
  toggleSelect: (checked: boolean) => void;
};

export default function AddOnListItem({
  addOnItem,
  type,
  toggleSelect,
}: Props) {
  const typeAbbr = useMemo(() => {
    return planTypeAbbrFunc(type);
  }, [type]);
  return (
    <li>
      <label
        htmlFor={addOnItem.name}
        className={cn(
          "flex items-center justify-between p-4 rounded-lg border cursor-pointer hover:border-purplish-blue",
          { "bg-alabaster border-purplish-blue": addOnItem.isSelected }
        )}
      >
        <div className="flex items-center gap-4">
          <CheckBox
            id={addOnItem.name}
            isChecked={addOnItem.isSelected}
            handleChange={(event) => {
              toggleSelect(event.target.checked);
            }}
          />
          <div className="flex flex-col">
            <p className="text-marine-blue font-semibold tracking-tight">
              {addOnItem.name}
            </p>
            <p className="text-cool-gray text-sm tracking-tight">
              {addOnItem.subText}
            </p>
          </div>
        </div>
        <div className="font-medium text-purplish-blue text-sm">
          +${addOnItem[type].price}/{typeAbbr}
        </div>
      </label>
    </li>
  );
}
