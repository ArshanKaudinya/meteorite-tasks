import { Outlet, NavLink } from "react-router-dom";
import { Card } from "./components/ui/Card";

function NavItem({ to, label }: { to: string; label: string }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        [
          "rounded-md px-3 py-2 text-sm font-medium",
          isActive ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-slate-100",
        ].join(" ")
      }
    >
      {label}
    </NavLink>
  );
}

export default function App() {
  return (
    <div className="min-h-full bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <div className="text-sm font-semibold text-slate-900">
            Auth + GraphQL Dashboard CRUD
          </div>
          <nav className="flex items-center gap-2">
            <NavItem to="/login" label="Login" />
            <NavItem to="/signup" label="Signup" />
            <NavItem to="/dashboard" label="Dashboard" />
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-8">
        <Card className="p-6">
          <Outlet />
        </Card>
      </main>
    </div>
  );
}
