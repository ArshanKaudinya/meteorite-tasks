import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";

export default function Signup() {
  return (
    <div className="max-w-md">
      <h1 className="text-xl font-semibold text-slate-900">Signup</h1>
      <p className="mt-1 text-sm text-slate-600">
        Phase 0 placeholder. Signup wiring comes in Phase 2 after auth verification.
      </p>

      <div className="mt-6 space-y-4">
        <Input label="Username" placeholder="yourname" />
        <Input label="Email" placeholder="you@example.com" />
        <Input label="Password" type="password" placeholder="••••••••••" />
        <Button type="button" className="w-full" variant="secondary">
          Create account (disabled for now)
        </Button>
      </div>
    </div>
  );
}
