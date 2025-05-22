import { ParticlesBg } from "../components/ParticleBg.jsx";
import { Hero } from "../components/Hero.jsx";
import { Footer } from "../components/Footer.jsx";

export const Home = () => {
  return (
    <div className="relative min-h-screen  text-white overflow-hidden flex flex-col">
      {/* Starry background */}
      <ParticlesBg />
      <div className="starry-bg" />

      {/* Main content */}
      <main className="relative z-10 flex-grow">
        <Hero />
        {/* other sections like Projects, Skills, Contact here */}
      </main>

      {/* Footer */}
      <Footer />
       
     
    </div>
  );
};
