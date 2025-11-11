// App.tsx
import { Outlet } from "react-router-dom";

export default function App() {
  console.log('Supabase URL:', import.meta.env.VITE_SUPABASE_URL);
  console.log('Supabase Key:', import.meta.env.VITE_SUPABASE_ANON_KEY ? 'Key exists ✅' : '❌ No key');

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <div>
        <Outlet />
      </div>
    </div>
  );
}
