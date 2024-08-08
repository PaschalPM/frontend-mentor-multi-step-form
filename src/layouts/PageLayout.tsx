import { PropsWithChildren } from "react";

export default function PageLayout({ children }: PropsWithChildren) {
  return (
    <div className="relative row-span-3 md:col-span-2 -mt-[20%] md:mt-0 z-20">
      <div className="absolute bg-white bottom-0 w-full h-20 md:hidden"></div>
      <div className="h-full flex flex-col px-6 md:px-16 pt-8 pb-4">
        {children}
      </div>
    </div>
  );
}
