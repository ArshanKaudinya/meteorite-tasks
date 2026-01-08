import { Container } from "@/components/ui/Container";
import { Card, CardBody } from "@/components/ui/Card";
import { HorizontalScroll } from "@/components/ui/HorizontalScroll";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  ExternalIcon,
  InstagramIcon,
  LinkIcon,
  ChevronDownIcon,
  SendIcon,
} from "@/components/icons";

function SectionTitle({ children }: { children: string }) {
  return (
    <h2 className="text-4xl font-extrabold tracking-tight text-slate-900">
      {children}
    </h2>
  );
}

function FeatureIntro({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div>
      <h3 className="text-xl font-extrabold text-slate-900">{title}</h3>
      <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
        {description}
      </p>
      <a
        href="#"
        className="mt-3 inline-block text-sm font-semibold underline underline-offset-4 text-slate-800 hover:text-slate-950"
      >
        Preview
      </a>
    </div>
  );
}

function BigMapFrame() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-slate-200">
      <img
        src="/images/map-preview.webp"
        alt="Map preview"
        className="h-full w-full object-cover"
      />
      <button
        type="button"
        aria-label="Open map"
        className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-lg bg-white/90 ring-1 ring-slate-200 hover:bg-white"
      >
        <ExternalIcon className="h-4 w-4 text-slate-700" />
      </button>
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]" />
    </div>
  );
}

function ImageCard({
  src,
  category,
  title,
}: {
  src: string;
  category: string;
  title: string;
}) {
  return (
    <div className="min-w-[300px] snap-start md:min-w-[340px]">
      <div className="overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-slate-200">
        <img src={src} alt={title} className="h-[260px] w-full object-cover" />
      </div>
      <div className="mt-3">
        <div className="text-xs font-semibold text-slate-500">{category}</div>
        <div className="mt-1 text-sm font-bold text-slate-900">{title}</div>
      </div>
    </div>
  );
}

function PlannerChatMock() {
  return (
    <Card className="overflow-hidden">
      <CardBody className="p-0">
        <div className="p-5">
          <div className="flex items-start gap-3">
            <img
              src="/images/avatar.svg"
              alt="Guide avatar"
              className="h-10 w-10 rounded-xl ring-1 ring-slate-200"
            />
            <div>
              <div className="text-sm font-extrabold text-slate-900">
                Ása Steinars
              </div>
              <div className="text-xs font-semibold text-slate-500">
                Digital version
              </div>
            </div>
          </div>

          <div className="mt-4 text-sm leading-6 text-slate-600">
            Hi there, I am Ása Steinars Guide. I have been trained to answer travel
            questions just like Ása Steinars would do in person, but faster.
          </div>
        </div>

        <div className="border-t border-slate-200 p-5">
          <div className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3 ring-1 ring-slate-200">
            <div className="h-8 w-8 rounded-full bg-white ring-1 ring-slate-200" />
            <div className="text-sm font-semibold text-slate-800">
              What is the best season to visit?
            </div>
          </div>

          <div className="mt-3 text-xs font-semibold text-slate-400">Thinking...</div>

          <div className="mt-4 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 ring-1 ring-slate-200">
            <input
              className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
              placeholder="Message..."
              aria-label="Message"
            />
            <button
              type="button"
              aria-label="Send"
              className="grid h-10 w-10 place-items-center rounded-full bg-slate-900 text-white hover:bg-slate-800 active:bg-slate-950"
            >
              <SendIcon className="h-4 w-4" />
            </button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

function ExploreMapMock() {
  const thumbs = [
    "/images/map-1.webp",
    "/images/map-2.webp",
    "/images/map-3.webp",
    "/images/map-4.webp",
    "/images/map-5.webp",
    "/images/map-6.webp",
    "/images/map-7.webp",
    "/images/map-8.webp",
  ];

  return (
    <div className="overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-slate-200">
      <div className="relative">
        <img
          src="/images/map-preview.webp"
          alt="Explore map preview"
          className="h-[280px] w-full object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 bg-white/70 p-3 backdrop-blur">
          <div className="no-scrollbar flex gap-3 overflow-x-auto">
            {thumbs.map((src) => (
              <img
                key={src}
                src={src}
                alt="Spot thumbnail"
                className="h-16 w-12 flex-none rounded-xl object-cover ring-1 ring-slate-200"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CreatorSection() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-[360px_1fr] md:gap-12">
      <Card className="p-0">
        <CardBody className="p-8">
          <div className="grid place-items-center">
            <img
              src="/images/avatar.svg"
              alt="Creator avatar"
              className="h-24 w-24 rounded-full ring-1 ring-slate-200"
            />
            <div className="mt-4 text-center">
              <div className="text-lg font-extrabold text-slate-900">
                Ása Steinars
              </div>
              <div className="text-sm font-semibold text-slate-400">
                Travel Business
              </div>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <button
                type="button"
                aria-label="Instagram"
                className="grid h-9 w-9 place-items-center rounded-lg ring-1 ring-slate-200 hover:bg-slate-50"
              >
                <InstagramIcon className="h-5 w-5 text-slate-700" />
              </button>
              <button
                type="button"
                aria-label="Website"
                className="grid h-9 w-9 place-items-center rounded-lg ring-1 ring-slate-200 hover:bg-slate-50"
              >
                <LinkIcon className="h-5 w-5 text-slate-700" />
              </button>
            </div>

            <div className="mt-5 flex items-center gap-2">
              <Badge tone="neutral">Iceland</Badge>
              <Badge tone="neutral">Norway</Badge>
            </div>
          </div>
        </CardBody>
      </Card>

      <div>
        <div className="text-xs font-semibold text-slate-400">Joined in April 2022</div>
        <h3 className="mt-1 text-2xl font-extrabold text-slate-900">
          Guide by Ása Steinars
        </h3>
        <div className="mt-4 max-w-2xl space-y-4 text-sm leading-6 text-slate-600">
          <p>
            Ása Steinars is an adventure photographer and videographer from Iceland.
            Growing up in the north, surrounded by extreme landscapes and changing
            weather has given her a tight bond to nature and its forces.
          </p>
          <p>
            She works as a full time content creator, helping people to travel Iceland
            like she does. She has a total following of almost 2 million across her
            social media platforms.
          </p>
        </div>

        <div className="mt-6 flex gap-3">
          <Button variant="outline" className="min-w-32">
            Message
          </Button>
          <Button variant="outline" className="min-w-32">
            Storefront
          </Button>
        </div>
      </div>
    </div>
  );
}

function FAQ() {
  const items = [
    "How do I access the Guide and Map?",
    "Do I need internet connection?",
    "How long will I have access?",
    "Can I share it with my travel buddy?",
  ];

  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-[320px_1fr] md:gap-16">
      <div>
        <h3 className="text-2xl font-extrabold text-slate-900">
          Your questions,
          <br />
          answered
        </h3>
      </div>

      <div className="space-y-2">
        {items.map((q) => (
          <details
            key={q}
            className="group border-b border-slate-200 py-4"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold text-slate-800">
              {q}
              <ChevronDownIcon className="h-5 w-5 text-slate-500 transition-transform group-open:rotate-180" />
            </summary>
            <div className="mt-3 text-sm leading-6 text-slate-600">
              Placeholder answer. We’ll replace this with real copy later.
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}

export function GuideSections() {
  return (
    <div className="border-t border-slate-200">
      <Container className="py-14 md:py-16">
        <SectionTitle>Access My Local Secrets</SectionTitle>

        <div className="mt-8">
          <div className="h-[320px] md:h-[420px]">
            <BigMapFrame />
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-[300px_1fr] md:items-start">
          <FeatureIntro
            title="161 things to do"
            description="Get a curated list of all the best things to do with exact location, detailed info and inspiring content"
          />

          <HorizontalScroll>
            <ImageCard
              src="/images/map-1.webp"
              category="Sightseeing"
              title="One of my favourite spots"
            />
            <ImageCard
              src="/images/map-2.webp"
              category="Sightseeing"
              title="Swing with amazing views"
            />
            <ImageCard
              src="/images/map-3.webp"
              category="Hike"
              title="Beautiful view point"
            />
          </HorizontalScroll>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-[300px_1fr] md:items-start">
          <FeatureIntro
            title="1 itinerary"
            description="Get expertly curated itineraries that help you organise all the things to do in an ideal time order"
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="relative overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-slate-200">
              <img
                src="/images/map-4.webp"
                alt="Itinerary preview"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <div className="text-xs font-semibold text-white/80">8 days</div>
                <div className="text-sm font-extrabold text-white">Lofoten Road Trip</div>
              </div>
            </div>

            <div className="grid place-items-center rounded-2xl bg-white ring-1 ring-slate-300">
              <span className="text-sm font-semibold text-slate-700">Preview</span>
            </div>
          </div>
        </div>
      </Container>

      <div className="border-t border-slate-200">
        <Container className="py-14 md:py-16">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900">
            Your Personal Travel Planner
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-[320px_1fr] md:items-start">
            <FeatureIntro
              title="Ask my Guide Anything"
              description="Rexby is trained on Ása Steinars local knowledge, enabling it to answer questions just like Ása Steinars, but faster"
            />
            <PlannerChatMock />
          </div>

          <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-[320px_1fr] md:items-start">
            <FeatureIntro
              title="Explore with my Map"
              description="Get an interactive, playful, and easy-to-navigate map that you can personalize by adding and favoriting spots, then filter to see only what matters to you."
            />
            <ExploreMapMock />
          </div>
        </Container>
      </div>

      <div className="border-t border-slate-200">
        <Container className="py-14 md:py-16">
          <CreatorSection />
        </Container>
      </div>

      <div className="border-t border-slate-200">
        <Container className="py-14 md:py-16">
          <h3 className="text-2xl font-extrabold text-slate-900">You may also like</h3>

          <div className="mt-8">
            <HorizontalScroll scrollAmount={720}>
              {[
                { src: "/images/iceland.webp", title: "Iceland Guide", meta: "Iceland • by asasteinars" },
                { src: "/images/scotland.webp", title: "Adventures in Scotland", meta: "United Kingdom • by traveltwo_" },
                { src: "/images/newzealand.webp", title: "Ultimate Guide to New Zealand", meta: "New Zealand • by rachsiewartnz" },
                { src: "/images/ireland.webp", title: "Exploring Ireland's Hidden Gems", meta: "Ireland • by furstonetravels" },
              ].map((g) => (
                <div key={g.title} className="min-w-[300px] snap-start md:min-w-[340px]">
                  <div className="overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-slate-200">
                    <img src={g.src} alt={g.title} className="h-[260px] w-full object-cover" />
                  </div>
                  <div className="mt-3">
                    <div className="text-sm font-extrabold text-slate-900">{g.title}</div>
                    <div className="mt-1 text-xs font-semibold text-slate-400">{g.meta}</div>
                  </div>
                </div>
              ))}
            </HorizontalScroll>
          </div>

          <div className="mt-16">
            <FAQ />
          </div>
        </Container>
      </div>
    </div>
  );
}
