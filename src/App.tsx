import { CTASection } from "./components/sections/CTASection";
import { Footer } from "./components/sections/Footer";
import { HeroSection } from "./components/sections/HeroSection";
import { MissionSection } from "./components/sections/MissionSection";
import { Navbar } from "./components/sections/Navbar";
import { SearchSection } from "./components/sections/SearchSection";
import { SolutionSection } from "./components/sections/SolutionSection";


function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <SearchSection />
      <MissionSection />
      <SolutionSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;
