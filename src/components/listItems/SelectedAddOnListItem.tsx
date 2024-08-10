import { useMemo } from "react";
import { planTypeAbbrFunc } from "../../lib/utils";

type Props = {
  addOn: AddOnType;
  selectedType: "monthly" | "yearly";
};

export default function SelectedAddOnListItem({
  addOn: { name, price },
  selectedType,
}: Props) {
  const typeAbbr = useMemo(() => {
    return planTypeAbbrFunc(selectedType);
  }, [selectedType]);
  return (
    <li className="flex justify-between items-center mb-3">
      <span className="text-cool-gray tracking-tight font-medium text-sm">
        {name}
      </span>
      <span className="text-marine-blue font-medium tracking-tight text-sm">
        +${price}/{typeAbbr}
      </span>
    </li>
  );
}
