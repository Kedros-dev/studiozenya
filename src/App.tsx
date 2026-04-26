import Nav from "./components/Nav";
import Footer from "./components/Footer";
import WhatsAppFAB from "./components/WhatsAppFAB";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Classes from "./sections/Classes";
import Pricing from "./sections/Pricing";
import Gallery from "./sections/Gallery";
import Testimonials from "./sections/Testimonials";
import InstagramFeed from "./sections/InstagramFeed";
import FAQ from "./sections/FAQ";
import Visit from "./sections/Visit";

export default function App() {
  return (
    <div style={{ position: "relative", overflowX: "hidden" }}>
      <Nav />
      <main>
        <Hero />
        <About />
        <Classes />
        <Pricing />
        <Gallery />
        <Testimonials />
        <InstagramFeed />
        <FAQ />
        <Visit />
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}
