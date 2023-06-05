import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";

import MainPage from "./pages/Main";
import CharacterSettings from "./pages/CharacterSettings";
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
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </StrictMode>
);
