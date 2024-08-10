import StepSwitcher from "./components/views/StepSwitcher";
import ThankYou from "./components/views/ThankYou";
import AppLayout from "./layouts/AppLayout";
import { useAppStepCtx } from "./lib/hooks";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const { currentStep } = useAppStepCtx();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <StepSwitcher stepNum={currentStep} />,
    },
    {
      path: "/thank-you",
      element: <ThankYou/>
    },
  ]);

  return (
    <AppLayout>
      <RouterProvider router={router} />
    </AppLayout>
  );
}

export default App;
