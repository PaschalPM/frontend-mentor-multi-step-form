import { useContext } from "react";
import { currentPageNumberCtx } from "../contexts/currentPageNumber.ctx";

const useCurrentPageNumberCtx = () => useContext(currentPageNumberCtx);

export default useCurrentPageNumberCtx
