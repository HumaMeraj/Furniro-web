import BrowseTheRangeSection from "./components/BrowseRange";
import HeroSection from "./components/Hero";
import OurProductSection from "./components/Product";
import ShareSetupSection from "./components/Setupsection";
import Slide from "./components/Slide";
import Blog from "./Blog/page";
import About from "./About/page";

export default function HomePage() {
  return (
    <main className="bg-white">
      <HeroSection />
      <BrowseTheRangeSection />
      <OurProductSection />
      <Slide />
      <ShareSetupSection />
      <Blog />
      <About />
      </main>
  );
}