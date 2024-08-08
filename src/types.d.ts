type PlanObjType = { name: string; img: string } & Record<
  "monthly" | "yearly",
  {
    payment: string;
    free?: string;
  }
>;

type PlanOptionType = "arcade" | "advanced" | "pro"