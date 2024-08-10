import { FormEventHandler, useState } from "react";
import BaseForm from "../components/forms/BaseForm";
import HeaderText from "../components/HeaderText";
import AddOnListItem from "../components/listItems/AddOnListItem";
import { addOnItemList } from "../lib/constants";
import { useAppStepCtx } from "../lib/hooks";
import useStore from "../lib/hooks/store.hook";

export default function AddOns() {
  const { state, setAddOns } = useStore();

  const [addOnItems, setAddOnItems] = useState<AddOnItemType[]>(() => {
    return addOnItemList.map((item) => {
      const localSelectedAddOn = state.addOns.find(
        (localItem) => localItem.name === item.name
      );
      if (localSelectedAddOn) {
        item.isSelected = true;
      } else {
        item.isSelected = false;
      }
      return item;
    });
  });

  const toggleSelectedItem = (addOnItem: AddOnItemType, checked: boolean) => {
    setAddOnItems((items) => {
      return items.map((item) => {
        if (item.name === addOnItem.name) {
          item.isSelected = checked;
        }
        return item;
      });
    });
  };
  const { nextStep } = useAppStepCtx();
  const handleSubmit: FormEventHandler<HTMLFormElement> = (ev) => {
    ev.preventDefault();
    setAddOns(
      addOnItems
        .filter((item) => item.isSelected)
        .map((item) => ({
          name: item.name,
          price: item[state.plan.type].price,
        }))
    );
    nextStep();
  };
  return (
    <>
      <HeaderText text="Pick add-ons" />
      <HeaderText
        text="Add-ons help enhance your gaming experience."
        type="paragraph"
      />
      <BaseForm handleSubmit={handleSubmit}>
        <ul className="flex flex-col gap-4">
          {addOnItems.map((addOnItem) => (
            <AddOnListItem
              key={addOnItem.name}
              addOnItem={addOnItem}
              type={state.plan.type}
              toggleSelect={(checked) => {
                toggleSelectedItem(addOnItem, checked);
              }}
            />
          ))}
        </ul>
      </BaseForm>
    </>
  );
}
