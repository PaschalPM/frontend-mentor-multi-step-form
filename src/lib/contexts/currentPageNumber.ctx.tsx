import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useLocalStorage } from "../hooks";

type CurrentPageNumberCtxType = {
  pageNumber: number;
  setPageNumber: Dispatch<SetStateAction<number>>;
  nextPage: () => void;
  prevPage: () => void;
};
const currentPageNumberCtx = createContext<CurrentPageNumberCtxType>(
  {} as CurrentPageNumberCtxType
);

const CurrentPageNumberCtxProvider = ({ children }: PropsWithChildren) => {
  const { value, setLocalValue } = useLocalStorage<number>("pageNumber", 1);
  const [pageNumber, setPageNumber] = useState<number>(value);
  const nextPage = () => {
    setPageNumber((v) => v + 1);
  };
  const prevPage = () => {
    setPageNumber((v) => v - 1);
  };

  useEffect(() => {
    if (pageNumber > 0) setLocalValue(pageNumber);
  }, [pageNumber]);
  return (
    <currentPageNumberCtx.Provider
      value={{ pageNumber, nextPage, prevPage, setPageNumber }}
    >
      {children}
    </currentPageNumberCtx.Provider>
  );
};

export { currentPageNumberCtx, CurrentPageNumberCtxProvider };
