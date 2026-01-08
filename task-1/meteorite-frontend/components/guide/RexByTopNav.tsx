import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { GlobeIcon, MenuIcon, RexbyMark } from "@/components/icons";

export function RexbyTopNav() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <Container className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <RexbyMark className="h-8 w-8 text-sky-600" />
            <span className="text-xl font-extrabold tracking-tight text-sky-600">
              Rexby
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outline" className="rounded-xl">
            Log in
          </Button>

          <button
            type="button"
            aria-label="Language"
            className="grid h-10 w-10 place-items-center rounded-xl hover:bg-slate-100 active:bg-slate-200"
          >
            <GlobeIcon className="h-5 w-5 text-slate-600" />
          </button>

          <button
            type="button"
            aria-label="Menu"
            className="grid h-10 w-10 place-items-center rounded-xl hover:bg-slate-100 active:bg-slate-200"
          >
            <MenuIcon className="h-5 w-5 text-slate-600" />
          </button>
        </div>
      </Container>
    </header>
  );
}
