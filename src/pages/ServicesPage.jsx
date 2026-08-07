import { motion } from "framer-motion";
import {
  Wifi,
  Camera,
  Shield,
  Fingerprint,
  Network,
  MonitorSmartphone,
  ArrowRight,
  CheckCircle,
  Phone,
} from "lucide-react";

import { Link } from "react-router-dom";

import NavbarPage from "../components/NavbarPage";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import ScrollTop from "../components/ScrollTop";
import Partners from "../components/Partners";

const services = [
  {
    title: "Internet Installation",
    description:
      "Fast and reliable fibre internet installation for homes, apartments, schools, offices and businesses in Thika and across Kenya.",
    icon: <Wifi size={42} />,
    features: [
      "High-Speed Fibre",
      "Wi-Fi Coverage",
      "Router Configuration",
    ],
    link: "/internet-installation",
    popular: true,
  },

  {
    title: "CCTV Installation",
    description:
      "Professional CCTV surveillance systems with HD cameras, recording and remote monitoring for homes and businesses.",
    icon: <Camera size={42} />,
    features: [
      "HD Cameras",
      "Remote Viewing",
      "24/7 Recording",
    ],
    link: "/cctv-installation",
    popular: true,
  },

  {
    title: "Electric Fence",
    description:
      "Professional electric fence installation for homes, schools, businesses and institutions requiring reliable perimeter security.",
    icon: <Shield size={42} />,
    features: [
      "Alarm Integration",
      "Perimeter Security",
      "Long Warranty",
    ],
    link: "/electric-fence",
    popular: false,
  },

  {
    title: "Access Control",
    description:
      "Modern fingerprint, RFID card and smart access control systems for secure and controlled entry.",
    icon: <Fingerprint size={42} />,
    features: [
      "Fingerprint Access",
      "RFID Cards",
      "Attendance Systems",
    ],
    link: "/access-control",
    popular: false,
  },

  {
    title: "Networking",
    description:
      "Structured cabling, enterprise Wi-Fi and professional networking solutions for homes, offices and institutions.",
    icon: <Network size={42} />,
    features: [
      "Structured Cabling",
      "Enterprise Wi-Fi",
      "Network Management",
    ],
    link: "/networking",
    popular: false,
  },

  {
    title: "ICT Consultancy",
    description:
      "Professional ICT consultancy, maintenance and technical support to help businesses and institutions use technology effectively.",
    icon: <MonitorSmartphone size={42} />,
    features: [
      "IT Support",
      "Maintenance",
      "Technology Consulting",
    ],
    link: "/ict-consultancy",
    popular: false,
  },
];

const reasons = [
  "Certified ICT Professionals",
  "Premium Equipment",
  "Affordable Pricing",
  "24/6 Customer Support",
  "Fast Installation",
  "Professional Workmanship",
];

export default function ServicesPage() {
  /* =========================
     SEO
  ========================= */

  document.title =
    "ICT Services in Thika | Internet, CCTV & Security | Ogenix Technologies";

  const description =
    "Ogenix Technologies provides professional internet installation, CCTV, electric fence, access control, networking and ICT consultancy services in Thika, Kiambu and across Kenya.";

  let metaDescription = document.querySelector(
    'meta[name="description"]'
  );

  if (!metaDescription) {
    metaDescription = document.createElement("meta");
    metaDescription.setAttribute("name", "description");
    document.head.appendChild(metaDescription);
  }

  metaDescription.setAttribute("content", description);

  return (
    <>
      {/* =========================
          HERO
      ========================= */}

      <section className="pt-36 pb-24 bg-gradient-to-br from-[#031B4E] via-[#062B78] to-[#0A53C1]">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="uppercase tracking-[5px] text-cyan-300 font-semibold"
          >
            Professional ICT Services
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl lg:text-7xl font-black text-white mt-5"
          >
            Smart Technology Solutions
            <br />
            For Every Environment
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-blue-100 text-xl mt-8 max-w-3xl mx-auto leading-9"
          >
            Ogenix Technologies provides dependable internet,
            CCTV, electric fence, access control, networking and
            ICT consultancy services for homes, businesses,
            schools and institutions in Thika, Kiambu and across Kenya.
          </motion.p>

          <div className="flex flex-col sm:flex-row justify-center gap-5 mt-12">

            <Link
              to="/contact"
              className="bg-cyan-500 hover:bg-cyan-400 px-10 py-4 rounded-xl text-white font-semibold transition"
            >
              Request Free Quote
            </Link>

            <a
              href="tel:+254110405854"
              className="border-2 border-white text-white hover:bg-white hover:text-[#041E5A] px-10 py-4 rounded-xl font-semibold transition"
            >
              Call Now
            </a>

          </div>

        </div>
      </section>

      {/* =========================
          SERVICES
      ========================= */}

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <span className="uppercase tracking-[5px] text-blue-600 font-semibold">
              What We Offer
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mt-5">
              Professional ICT & Security Services
            </h2>

            <p className="text-slate-600 max-w-3xl mx-auto mt-6 leading-8">
              From reliable internet connectivity to advanced security
              systems, Ogenix Technologies delivers professional technology
              solutions designed for homes, businesses and institutions.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {services.map((service, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -10,
                }}
                className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-200"
              >

                {/* Service Icon Header */}

                <div className="relative h-60 bg-gradient-to-br from-[#031B4E] via-[#0A53C1] to-cyan-500 flex items-center justify-center">

                  <div className="absolute inset-0 bg-black/10" />

                  <div className="relative w-24 h-24 rounded-3xl bg-white/15 backdrop-blur-xl border border-white/20 flex items-center justify-center text-cyan-300">

                    {service.icon}

                  </div>

                  {service.popular && (
                    <span className="absolute top-5 right-5 bg-cyan-400 text-[#031B4E] px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      Popular
                    </span>
                  )}

                </div>

                {/* Service Content */}

                <div className="p-8">

                  <h2 className="text-2xl font-bold text-slate-900">
                    {service.title}
                  </h2>

                  <p className="mt-4 text-slate-600 leading-8">
                    {service.description}
                  </p>

                  <div className="mt-6 space-y-3">

                    {service.features.map((feature, i) => (

                      <div
                        key={i}
                        className="flex items-center gap-3"
                      >

                        <CheckCircle
                          size={18}
                          className="text-green-600 shrink-0"
                        />

                        <span className="text-slate-700">
                          {feature}
                        </span>

                      </div>

                    ))}

                  </div>

                  <Link
                    to={service.link}
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold mt-8 hover:gap-4 transition-all"
                  >
                    Learn More
                    <ArrowRight size={18} />
                  </Link>

                </div>

              </motion.div>

            ))}

          </div>

        </div>
      </section>

      {/* =========================
          WHY CHOOSE US
      ========================= */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >

            <span className="uppercase tracking-[5px] text-blue-600 font-semibold">
              Why Choose Ogenix
            </span>

            <h2 className="text-5xl font-bold mt-5 text-slate-900">
              Trusted By Homes & Businesses
            </h2>

            <p className="text-slate-500 mt-6 max-w-3xl mx-auto leading-8">
              We combine quality equipment, experienced technicians,
              professional workmanship and outstanding customer support
              to deliver ICT and security solutions you can depend on.
            </p>

          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {reasons.map((reason, index) => (

              <motion.div
                key={index}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="bg-slate-50 rounded-3xl p-8 shadow-lg border border-slate-200"
              >

                <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center mb-6">

                  <CheckCircle size={28} />

                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {reason}
                </h3>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* =========================
          TECHNOLOGY PARTNERS
      ========================= */}

      <Partners />

      {/* =========================
          INSTALLATION PROCESS
      ========================= */}

      <section className="py-24 bg-slate-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <span className="uppercase tracking-[5px] text-blue-600 font-semibold">
              Our Process
            </span>

            <h2 className="text-5xl font-bold mt-5 text-slate-900">
              Simple & Professional Workflow
            </h2>

            <p className="text-slate-600 mt-6 max-w-2xl mx-auto leading-8">
              We follow a structured process to make sure every
              Ogenix Technologies installation is completed safely,
              professionally and to the customer's requirements.
            </p>

          </div>

          <div className="grid md:grid-cols-4 gap-8">

            {[
              "Consultation",
              "Site Survey",
              "Installation",
              "Testing & Support",
            ].map((step, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl shadow-lg p-8 text-center"
              >

                <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto text-2xl font-bold mb-6">

                  {index + 1}

                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {step}
                </h3>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* =========================
          CTA
      ========================= */}

      <section className="py-24 bg-gradient-to-r from-[#031B4E] via-[#062B78] to-[#0A53C1]">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl lg:text-6xl font-bold text-white"
          >
            Ready To Start Your Project?
          </motion.h2>

          <p className="text-blue-100 text-xl mt-8 max-w-3xl mx-auto leading-9">
            Whether you need internet installation, CCTV,
            electric fencing, networking, access control or
            ICT consultancy, our experts are ready to help.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-5 mt-12">

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 bg-cyan-500 hover:bg-cyan-400 px-10 py-4 rounded-xl text-white font-semibold transition duration-300 hover:scale-105"
            >
              Request Free Quote
              <ArrowRight size={20} />
            </Link>

            <a
              href="tel:+254110405854"
              className="inline-flex items-center justify-center gap-3 border-2 border-white px-10 py-4 rounded-xl text-white font-semibold hover:bg-white hover:text-[#041E5A] transition duration-300"
            >
              <Phone size={20} />
              Call +254 110 405 854
            </a>

          </div>

        </div>

      </section>

      {/* =========================
          FOOTER
      ========================= */}

      <Footer />
      <WhatsAppButton />
      <ScrollTop />

    </>
  );
}