import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Loader from "./components/Loader";
import { revealSections } from "./animations/reveal";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import InternetInstallation from "./pages/InternetInstallation";
import CCTVInstallation from "./pages/CCTVInstallation";
import ElectricFence from "./pages/ElectricFence";
import AccessControl from "./pages/AccessControl";
import Networking from "./pages/Networking";
import ICTConsultancy from "./pages/ICTConsultancy";
import ProjectsPage from "./pages/ProjectsPage";
import PricingPage from "./pages/PricingPage";
import ContactPage from "./pages/ContactPage";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    revealSections();

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicesPage />} />

      <Route
        path="/internet-installation"
        element={<InternetInstallation />}
      />

      <Route
        path="/cctv-installation"
        element={<CCTVInstallation />}
      />

      <Route
        path="/electric-fence"
        element={<ElectricFence />}
      />

      <Route
        path="/access-control"
        element={<AccessControl />}
      />

      <Route
        path="/networking"
        element={<Networking />}
      />

      <Route
        path="/ict-consultancy"
        element={<ICTConsultancy />}
      />

      <Route
        path="/projects"
        element={<ProjectsPage />}
      />

      <Route
        path="/pricing"
        element={<PricingPage />}
      />

      <Route
        path="/contact"
        element={<ContactPage />}
      />
    </Routes>
  );
}

export default App;