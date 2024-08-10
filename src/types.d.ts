type InfoType = { name: string; email: string; phone: string };
type PlanType = {
  name: PlanNameType;
  price: number;
  type: "monthly" | "yearly";
};
type AddOnType = { name: string; price: number };

type PlanNameType = "Arcade" | "Advanced" | "Pro";
type StateType = {
  step: number;
  info: InfoType;
  plan: PlanType;
  addOns: AddOnType[];
};
type StoreType = {
  state: StateType;
};

//////////////////////
type PlanObjType = {
  name: PlanNameType;
  img: string;
} & Record<
  "monthly" | "yearly",
  {
    price: number;
    free?: string;
  }
>;

type AddOnItemType = {
  name: string;
  subText: string;
  isSelected: boolean;
} & Record<
  "monthly" | "yearly",
  {
    price: number;
  }
>;
