"use client";
import { useCallback } from "react";
import PageLayout from "../layouts/PageLayout";
import AddOns from "../pages/AddOns";
import InfoPage from "../pages/InfoPage";
import SelectPlan from "../pages/SelectPlan";
import Summary from "../pages/Summary";

type Props = {
  pageNum?: number;
};

export default function PageSwitcher({ pageNum = 1 }: Props) {
  const getSelectedPage = useCallback(
    (pageNum: number) => {
      switch (pageNum) {
        case 2:
          return <SelectPlan />;
        case 3:
          return <AddOns />;
        case 4:
          return <Summary />;
        default:
          return <InfoPage />;
      }
    },
    [pageNum]
  );
  return <PageLayout> {getSelectedPage(pageNum)} </PageLayout>;
}
