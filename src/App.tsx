// App.tsx
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 -z-10 text-slate-100">
      <div>
        <Outlet />
      </div>
    </div>
  );
}
