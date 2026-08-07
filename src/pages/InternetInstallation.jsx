import { motion } from "framer-motion";
import {
  Wifi,
  Home,
  Building2,
  CheckCircle,
  ArrowRight,
  Clock,
  ShieldCheck,
  MapPin,
  Phone,
} from "lucide-react";

import { Link } from "react-router-dom";

import NavbarPage from "../components/NavbarPage";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import ScrollTop from "../components/ScrollTop";

const features = [
  "High-Speed Fibre Internet Installation",
  "Wireless Internet Solutions",
  "Professional Router Configuration",
  "Whole Home Wi-Fi Coverage",
  "Office Network Deployment",
  "Signal Optimization",
  "Network Security Configuration",
  "After Installation Support",
];

const steps = [
  "Free Site Survey",
  "Professional Installation",
  "Configuration & Optimization",
  "Testing & Client Handover",
];

const brands = [
  "TP-Link",
  "Ubiquiti",
  "MikroTik",
  "Huawei",
  "Ruijie",
];

const faqs = [
  {
    question: "How long does installation take?",
    answer:
      "Most residential installations take between 2 and 4 hours depending on the property.",
  },
  {
    question: "Do you offer support after installation?",
    answer:
      "Yes. We provide configuration assistance and technical support after installation.",
  },
  {
    question: "Do you install internet for businesses?",
    answer:
      "Yes. We provide complete networking solutions for offices, schools, hotels and commercial buildings.",
  },
];

export default function InternetInstallation() {
  return (
    <>
      <NavbarPage />

      {/* HERO */}

      <section className="pt-36 pb-24 bg-gradient-to-br from-[#031B4E] via-[#062B78] to-[#0A53C1] overflow-hidden">

        <div className="max-w-5xl mx-auto px-6 text-center">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
          >

            <span className="uppercase tracking-[5px] text-cyan-300 font-semibold">
              Internet Installation
            </span>

            <h1 className="text-5xl lg:text-7xl font-black text-white mt-6 leading-tight">
              Fast, Reliable &
              <br />
              Professional Internet
              <br />
              Installation
            </h1>

            <p className="text-blue-100 text-xl mt-8 leading-9">
              Ogenix Technologies delivers dependable fibre and wireless
              internet solutions for homes, apartments, offices,
              schools and businesses across Kenya.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <Link
                to="/contact"
                className="bg-cyan-500 hover:bg-cyan-400 px-8 py-4 rounded-xl text-white font-semibold inline-flex items-center gap-2 transition"
              >
                Request Free Quote
                <ArrowRight size={18} />
              </Link>

              <a
                href="tel:+254110405854"
                className="border border-white/30 hover:bg-white hover:text-[#031B4E] transition px-8 py-4 rounded-xl text-white font-semibold inline-flex items-center gap-2"
              >
                <Phone size={18} />
                Call Now
              </a>

            </div>

            <div className="grid grid-cols-2 gap-5 mt-12">

              <div className="flex items-center gap-3 text-white">
                <Clock className="text-cyan-300" />
                Same Day Installation
              </div>

              <div className="flex items-center gap-3 text-white">
                <ShieldCheck className="text-cyan-300" />
                Quality Equipment
              </div>

              <div className="flex items-center gap-3 text-white">
                <Wifi className="text-cyan-300" />
                Fast Wi-Fi Coverage
              </div>

              <div className="flex items-center gap-3 text-white">
                <MapPin className="text-cyan-300" />
                Available Across Kenya
              </div>

            </div>

          </motion.div>

          {/* Right */}

        </div>

      </section>

      {/* RESIDENTIAL & BUSINESS */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <span className="uppercase tracking-[5px] text-blue-600 font-semibold">
              Our Solutions
            </span>

            <h2 className="text-5xl font-bold mt-5 text-slate-900">
              Internet Solutions For Everyone
            </h2>

            <p className="text-slate-600 mt-6 max-w-3xl mx-auto leading-8">
              Whether you need reliable internet for your home or a
              high-performance business network, we provide solutions
              designed for speed, reliability and future growth.
            </p>

          </div>

          <div className="grid lg:grid-cols-2 gap-10">

            <motion.div
              whileHover={{ y: -8 }}
              className="bg-slate-50 rounded-3xl p-10 shadow-lg"
            >

              <Home
                size={50}
                className="text-blue-600 mb-6"
              />

              <h2 className="text-3xl font-bold mb-5">
                Residential Internet
              </h2>

              <p className="text-slate-600 leading-8">
                Enjoy uninterrupted streaming, gaming, remote work,
                online learning and smart home connectivity with
                professionally installed high-speed internet.
              </p>

            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              className="bg-slate-50 rounded-3xl p-10 shadow-lg"
            >

              <Building2
                size={50}
                className="text-blue-600 mb-6"
              />

              <h2 className="text-3xl font-bold mb-5">
                Business Internet
              </h2>

              <p className="text-slate-600 leading-8">
                Reliable enterprise internet and networking solutions
                for offices, schools, hospitals, hotels and commercial
                buildings with secure, scalable infrastructure.
              </p>

            </motion.div>

          </div>

        </div>

      </section>
            {/* WHAT'S INCLUDED */}

      <section className="py-24 bg-slate-100">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <span className="uppercase tracking-[5px] text-blue-600 font-semibold">
              What's Included
            </span>

            <h2 className="text-5xl font-bold mt-5 text-slate-900">
              Everything You Need
            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-6">

            {features.map((feature, index) => (

              <motion.div
                key={index}
                whileHover={{ x: 8 }}
                className="bg-white rounded-2xl p-6 shadow-lg flex items-center gap-4"
              >

                <CheckCircle
                  className="text-green-600 flex-shrink-0"
                  size={28}
                />

                <span className="text-lg text-slate-700">
                  {feature}
                </span>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* INSTALLATION PROCESS */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <span className="uppercase tracking-[5px] text-blue-600 font-semibold">
              Our Process
            </span>

            <h2 className="text-5xl font-bold mt-5 text-slate-900">
              Installation Process
            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-8">

            {steps.map((step, index) => (

              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="bg-slate-50 rounded-3xl p-8 text-center shadow-lg"
              >

                <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto mb-6 text-2xl font-bold">

                  {index + 1}

                </div>

                <h3 className="text-2xl font-bold text-slate-900">

                  {step}

                </h3>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* BRANDS */}

      <section className="py-24 bg-white">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <span className="uppercase tracking-[5px] text-blue-600 font-semibold">
            Trusted Equipment
          </span>

          <h2 className="text-5xl font-bold mt-5 text-slate-900">
            Brands We Use
          </h2>

          <div className="flex flex-wrap justify-center gap-5 mt-12">

            {brands.map((brand, index) => (

              <div
                key={index}
                className="bg-slate-100 rounded-full px-8 py-4 font-semibold text-slate-700 shadow"
              >
                {brand}
              </div>

            ))}

          </div>

        </div>

      </section>

      {/* WHY CHOOSE US */}

      <section className="py-24 bg-slate-100">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <span className="uppercase tracking-[5px] text-blue-600 font-semibold">
              Why Ogenix
            </span>

            <h2 className="text-5xl font-bold mt-5 text-slate-900">
              Why Choose Us?
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              "Experienced Technicians",
              "Affordable Pricing",
              "Quality Equipment",
              "Fast Response",
              "Professional Installation",
              "24/6 Customer Support",
            ].map((item, index) => (

              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg p-8 flex items-center gap-4"
              >

                <CheckCircle className="text-green-600" />

                <span className="font-semibold text-lg">
                  {item}
                </span>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* FAQ */}

      <section className="py-24 bg-slate-100">

        <div className="max-w-5xl mx-auto px-6">

          <div className="text-center mb-16">

            <span className="uppercase tracking-[5px] text-blue-600 font-semibold">
              FAQ
            </span>

            <h2 className="text-5xl font-bold mt-5 text-slate-900">
              Frequently Asked Questions
            </h2>

          </div>

          <div className="space-y-6">

            {faqs.map((faq, index) => (

              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg p-8"
              >

                <h3 className="text-2xl font-bold text-slate-900">

                  {faq.question}

                </h3>

                <p className="text-slate-600 mt-4 leading-8">

                  {faq.answer}

                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* RELATED SERVICES */}

      <section className="py-24 bg-white">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <span className="uppercase tracking-[5px] text-blue-600 font-semibold">
            Related Services
          </span>

          <h2 className="text-5xl font-bold mt-5 text-slate-900">
            Explore More Solutions
          </h2>

          <div className="flex flex-wrap justify-center gap-5 mt-12">

            <Link
              to="/cctv-installation"
              className="bg-slate-100 hover:bg-blue-600 hover:text-white transition px-8 py-4 rounded-xl font-semibold"
            >
              CCTV Installation
            </Link>

            <Link
              to="/networking"
              className="bg-slate-100 hover:bg-blue-600 hover:text-white transition px-8 py-4 rounded-xl font-semibold"
            >
              Networking
            </Link>

            <Link
              to="/access-control"
              className="bg-slate-100 hover:bg-blue-600 hover:text-white transition px-8 py-4 rounded-xl font-semibold"
            >
              Access Control
            </Link>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-24 bg-gradient-to-r from-[#031B4E] via-[#062B78] to-[#0A53C1]">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold text-white">
            Ready For High-Speed Internet?
          </h2>

          <p className="text-blue-100 text-xl mt-6 leading-9">
            Contact Ogenix Technologies today for a free site survey
            and professional internet installation quotation.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-10">

            <Link
              to="/contact"
              className="bg-cyan-500 hover:bg-cyan-400 px-10 py-4 rounded-xl text-white font-semibold transition"
            >
              Request Free Quote
            </Link>

            <a
              href="tel:+254110405854"
              className="border border-white text-white hover:bg-white hover:text-[#031B4E] px-10 py-4 rounded-xl font-semibold transition"
            >
              Call Now
            </a>

          </div>

        </div>

      </section>

      <Footer />
      <WhatsAppButton />
      <ScrollTop />

    </>
  );
}