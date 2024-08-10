import { useEffect } from "react";

export default function ThankYou() {
  useEffect(() => {
    localStorage.removeItem("@store");
  }, []);
  return (
    <div className="relative row-span-3 md:col-span-2 -mt-[20%] md:mt-0 z-20">
      <div className="h-full w-full flex md:items-center px-6 md:px-16">
        <div className="bg-white h-fit flex flex-col items-center px-8 py-20 rounded-lg">
          <img src="/assets/icon-thank-you-56c10800.svg" className="mb-8" />
          <h1 className="text-marine-blue font-bold text-3xl mb-4">
            Thank you!
          </h1>
          <p className="text-cool-gray text-center tracking-tight">
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need suport, please feel free to email us
            at support@loremgaming.com
          </p>
        </div>
      </div>
    </div>
  );
}
