import PageSwitcher from "./components/PageSwitcher";
import AppLayout from "./layouts/AppLayout";
import { useCurrentPageNumberCtx } from "./lib/hooks";

function App() {
  const { pageNumber } = useCurrentPageNumberCtx();

  return (
    <AppLayout>
      <PageSwitcher pageNum={pageNumber} />
    </AppLayout>
  );
}

export default App;
