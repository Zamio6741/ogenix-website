import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import WhyChoose from "../components/WhyChoose";
import Pricing from "../components/Pricing";
import Stats from "../components/Stats";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import ScrollTop from "../components/ScrollTop";
import QuoteForm from "../components/QuoteForm";
import Partners from "../components/Partners";

function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <About />

      <Services />

      <WhyChoose />

      <Pricing />

      <Stats />

      <Projects />

      <Partners />

      <QuoteForm />

      <Testimonials />

      <FAQ />

      <Contact />

      <Footer />

      <WhatsAppButton />

      <ScrollTop />
    </>
  );
}

export default Home;