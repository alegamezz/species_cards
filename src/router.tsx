import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Types from "./pages/Types";
import Species from "./pages/Species";
import NewAnimal from "./pages/NewAnimal";
import PruebaMapa from "./pages/PruebaMapa";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/types", element: <Types /> },
      { path: "/species", element: <Species /> }, // usa ?type=slug
      { path: "/new", element: <NewAnimal /> },
      { path: "/PruebaMapa", element: <PruebaMapa /> },
    ],
  },
]);
