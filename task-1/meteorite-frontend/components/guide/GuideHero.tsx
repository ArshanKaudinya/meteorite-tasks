import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ArrowLeftIcon } from "@/components/icons";

export function GuideHero() {
  return (
    <section className="bg-white">
      <Container className="relative py-10 md:py-14">
        <button
          type="button"
          aria-label="Back"
          className="absolute left-4 top-10 grid h-10 w-10 place-items-center rounded-full bg-white ring-1 ring-slate-200 shadow-sm hover:bg-slate-50 active:bg-slate-100 md:left-6"
        >
          <ArrowLeftIcon className="h-5 w-5 text-slate-800" />
        </button>

        <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 md:flex-row md:gap-12">
          <div className="overflow-hidden rounded-3xl bg-slate-100 ring-1 ring-slate-200 shadow-sm">
            <img
              src="/images/hero.webp"
              alt="Norway cover"
              className="h-[400px] w-[500px] object-cover"
            />
          </div>

          <div className="flex flex-col gap-0 max-w-5xl">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Norway Guide
            </h1>

            <div className="mt-3 flex flex-wrap items-center gap-7 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <img
                  src="/images/avatar.svg"
                  alt="Guide avatar"
                  className="h-6 w-6 rounded-full ring-1 ring-slate-200"
                />
                <span className="font-semibold text-slate-800">
                  Guide by Ása Steinars
                </span>
              </div>
              <span className="font-semibold text-slate-800">Norway</span>
                ★ New
              
            </div>

            <div className="mt-5 space-y-4 text-[15px] leading-7 text-slate-600">
              <p>
                Norway is my second home. I was born in Norway and I lived there until I was 7 years old. I often come back and I love this country almost as much as Iceland. Last summer I spent 3 months on the road with my van exploring everything from the south tip up to Lofoten.
              </p>
              <p>
                This guide is my best tips for Norway to make sure you get the most out of your trip. It's focused around the fjords in the west and Lofoten in the north. In my opinion, it's the best areas to explore in Norway.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:max-w-[520px]">
              <Button variant="outline" size="lg" className="h-12">
                Preview
              </Button>
              <Button size="lg" className="h-12">
                Get Access
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200" />
      </Container>
    </section>
  );
}
