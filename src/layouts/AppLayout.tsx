import { PropsWithChildren } from "react";
import StepList from "../components/StepList";
import { useCurrentPageNumberCtx } from "../lib/hooks";

export default function AppLayout({ children }: PropsWithChildren) {
  const { pageNumber } = useCurrentPageNumberCtx();
  return (
    <main
      className="md:h-auto md:py-12 md:grid md:place-content-center bg-magnolia"
      style={{ minHeight: "585px" }}
    >
      <section className="md:min-h-fit md:bg-white md:rounded-xl md:p-4 h-full md:h-[560px] md:w-[860px] md:shadow-3xl grid grid-rows-4 md:grid-rows-1 md:grid-cols-3">
        <div className="row-span-1 md:col-span-1 md:mr-4">
          <div className="w-full h-48 md:h-full relative">
            <img
              src="/assets/bg-sidebar-desktop-e6d2744a.svg"
              alt="Desktop Sidebar Background"
              className="hidden md:block absolute rounded-xl h-full w-full object-cover z-10"
            />
            <img
              src="/assets/bg-sidebar-mobile-f8e29a05.svg"
              className="block md:hidden absolute h-full w-full object-cover z-10"
            ></img>
            <ul className="relative p-8 pt-12 md:pt-8 flex justify-center md:flex-col z-20 gap-4 md:gap-6">
              <StepList num={1} text="Your Info" isActive={pageNumber === 1} />
              <StepList
                num={2}
                text="Select Plan"
                isActive={pageNumber === 2}
              />
              <StepList num={3} text="Add-Ons" isActive={pageNumber === 3} />
              <StepList num={4} text="Summary" isActive={pageNumber === 4} />
            </ul>
          </div>
        </div>
        {children}
      </section>
    </main>
  );
}
