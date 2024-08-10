export const infoFormBaseObj = {
  name: "",
  email: "",
  phone: "",
};

export const plans: PlanObjType[] = [
  {
    name: "Arcade",
    img: "/assets/icon-arcade-e118291f.svg",
    monthly: {
      price: 9,
    },
    yearly: {
      price: 90,
      free: "2 months free",
    },
  },
  {
    name: "Advanced",
    img: "/assets/icon-advanced-66ce2237.svg",
    monthly: {
      price: 12,
    },
    yearly: {
      price: 120,
      free: "2 months free",
    },
  },
  {
    name: "Pro",
    img: "/assets/icon-pro-8d9f4718.svg",
    monthly: {
      price: 15,
    },
    yearly: {
      price: 150,
      free: "2 months free",
    },
  },
];


export const addOnItemList: AddOnItemType[] = [
  {
    name: "Online service",
    subText: "Access to multiplayer games",
    isSelected: false,
    monthly: {
      price: 1,
    },
    yearly: {
      price: 10,
    },
  },
  {
    name: "Larger storage",
    subText: "Extra 1TB of cloud save",
    isSelected: false,
    monthly: {
      price: 2,
    },
    yearly: {
      price: 20,
    },
  },
  {
    name: "Customizable profile",
    subText: "Custom theme on your profile",
    isSelected: false,
    monthly: {
      price: 2,
    },
    yearly: {
      price: 20,
    },
  },
];
