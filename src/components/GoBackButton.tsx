import { useCurrentPageNumberCtx } from "../lib/hooks";

export default function GoBackButton() {
  const { prevPage } = useCurrentPageNumberCtx();
  return (
    <button
      className="rounded-lg tracking-tight font-medium hover:opacity-75 p-0 bg-transparent text-cool-gray hover:bg-transparent"
      onClick={prevPage}
    >
      Go Back
    </button>
  );
}
