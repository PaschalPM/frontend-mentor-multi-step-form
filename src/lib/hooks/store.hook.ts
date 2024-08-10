import useLocalStorage from "./localStorage.hook";

const useStore = () => {
  const { localValue: store, setLocalValue: setStore } =
    useLocalStorage<StoreType>("@store", {
      state: {
        step: 0,
        info: { name: "", email: "", phone: "" },
        plan: { name: "Arcade", price: 9, type: "monthly" },
        addOns: [],
      },
    });
  const setStep = (step: number) => {
    setStore((store) => ({ state: { ...store.state, step } }));
  };

  const setInfo = (info: InfoType) => {
    setStore((store) => ({ state: { ...store.state, info } }));
  };
  const setPlan = (plan: PlanType) => {
    setStore((store) => ({ state: { ...store.state, plan } }));
  };
  const setAddOns = (addOns: AddOnType[]) => {
    setStore((store) => ({ state: { ...store.state, addOns } }));
  };
  return { state: store.state, setStep, setInfo, setPlan, setAddOns };
};

export default useStore;
