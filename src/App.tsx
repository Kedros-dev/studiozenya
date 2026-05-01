import Banner from "./components/Banner";
import Footer from "./components/Footer";
import WhatsAppFAB from "./components/WhatsAppFAB";
import Hero from "./sections/Hero";
import Classes from "./sections/Classes";
import Pricing from "./sections/Pricing";
import Gallery from "./sections/Gallery";
import FAQContact from "./sections/FAQContact";

export default function App() {
  return (
    <div style={{ position: "relative", overflowX: "hidden" }}>
      <Banner />
      <main>
        <Hero />
        <Classes />
        <Pricing />
        <Gallery />
        <FAQContact />
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}
