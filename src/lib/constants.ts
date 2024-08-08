export const infoFormBaseObj = {
  name: "",
  email: "",
  phone: "",
};

export const plans: PlanType[] = [
  {
    name: "Arcade",
    img: "/assets/icon-arcade-e118291f.svg",
    monthly: {
      payment: "9/mo",
    },
    yearly: {
      payment: "90/yr",
      free: "2 months free",
    },
  },
  {
    name: "Advanced",
    img: "/assets/icon-advanced-66ce2237.svg",
    monthly: {
      payment: "12/mo",
    },
    yearly: {
      payment: "120/yr",
      free: "2 months free",
    },
  },
  {
    name: "Pro",
    img: "/assets/icon-pro-8d9f4718.svg",
    monthly: {
      payment: "15/mo",
    },
    yearly: {
      payment: "150/yr",
      free: "2 months free",
    },
  },
];
