import { twMerge } from "tailwind-merge";
import clsx, { ClassValue } from "clsx";

export const cn = (...args: ClassValue[]) => {
  return twMerge(clsx(args));
};

export const planTypeAbbrFunc = (planType: "monthly" | "yearly") => {
  return planType === "monthly" ? "mo" : "yr";
};

export const titleCase = (str: string) => {
  return str.replace(/\b[a-z]/g, (m) => m.toUpperCase());
};
