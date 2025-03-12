import HeroSection from "@/components/homepage/HeroSection";
import ProjectOverview from "@/components/homepage/ProjectOverview";
import DesignProcess from "@/components/homepage/DesignProcess";
import PreFooter from "@/components/homepage/PreFooter";
import StickyButton from "@/components/STickyButton";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProjectOverview />
      <DesignProcess />
      <PreFooter />
      <StickyButton />
    </>
  );
}
