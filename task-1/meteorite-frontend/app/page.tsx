import { RexbyTopNav } from "@/components/guide/RexByTopNav";
import { StickyActionBar } from "@/components/guide/StickyActionBar";
import { GuideHero } from "@/components/guide/GuideHero";
import { GuideSections } from "@/components/guide/GuideSection";

export default function NorwayPage() {
  return (
    <main className="min-h-screen bg-white">
      <RexbyTopNav />
      <GuideHero />
      <StickyActionBar />
      <GuideSections />
    </main>
  );
}
