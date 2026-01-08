import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";

export default function Login() {
  return (
    <div className="max-w-md">
      <h1 className="text-xl font-semibold text-slate-900">Login</h1>
      <p className="mt-1 text-sm text-slate-600">
        Phase 0 placeholder. Auth wiring comes in Phase 2 after we verify the API contract.
      </p>

      <div className="mt-6 space-y-4">
        <Input label="Email or Username (identifier)" placeholder="test@gmail.com or testuser" />
        <Input label="Password" type="password" placeholder="••••••••••" />
        <Button type="button" className="w-full">
          Login (disabled for now)
        </Button>
      </div>
    </div>
  );
}
