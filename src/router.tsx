import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Types from "./pages/Types";
import Species from "./pages/Species";
import NewAnimal from "./pages/NewAnimal";
import PruebaMapa from "./pages/PruebaMapa";
import About from "./pages/About";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";

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
      { path: "/about", element: <About /> },
      { path: "/terms", element: <Terms /> },
      { path: "/privacy", element: <Privacy /> },
    ],
  },
]);
