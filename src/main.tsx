import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";

import MainPage from "./pages/Main";
import CharacterSettings from "./pages/CharacterSettings";
import Ending from "./pages/Ending";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/self-reliance-agent-vote",
    element: <MainPage />,
  },
  {
    path: "/self-reliance-agent-vote/characterSettings",
    element: <CharacterSettings />,
  },
  {
    path: "/self-reliance-agent-vote/ending",
    element: <Ending />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </StrictMode>
);
