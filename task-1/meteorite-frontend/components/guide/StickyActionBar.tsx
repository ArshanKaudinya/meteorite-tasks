import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function StickyActionBar() {
  return (
    <div className="sticky top-16 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
      <Container className="flex h-14 items-center justify-between">
        <a
          href="#"
          className="text-sm font-semibold text-slate-700 underline underline-offset-4 hover:text-slate-900"
        >
          Unclear? Ask me a question
        </a>

        <div className="flex items-center gap-3">
          <Button variant="outline" className="min-w-32">
            Preview
          </Button>
          <Button className="min-w-40">Get Access</Button>
        </div>
      </Container>
    </div>
  );
}
