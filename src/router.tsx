import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home.tsx";
import NewAnimal from "./pages/NewAnimal.tsx";
import PruebaMapa from "./pages/PruebaMapa.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/new", element: <NewAnimal /> },
      { path: "/PruebaMapa", element: <PruebaMapa /> },
    ],
  },
]);
