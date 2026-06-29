import Banner from "./components/Banner";
import Footer from "./components/Footer";
import WhatsAppFAB from "./components/WhatsAppFAB";
import BookingFAB from "./components/BookingFAB";
import Hero from "./sections/Hero";
import Classes from "./sections/Classes";
import Pricing from "./sections/Pricing";
import FAQContact from "./sections/FAQContact";
import Gallery from "./sections/Gallery";

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
      <BookingFAB />
      <WhatsAppFAB />
    </div>
  );
}
