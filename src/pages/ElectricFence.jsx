import { useState } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Home,
  Building2,
  CheckCircle,
  ShieldCheck,
  ArrowRight,
  Zap,
  ShieldAlert,
  Wrench,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";

import NavbarPage from "../components/NavbarPage";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import ScrollTop from "../components/ScrollTop";

const features = [
  "Residential Electric Fencing",
  "Commercial & Industrial Security",
  "High Voltage Energizers",
  "Alarm System Integration",
  "Professional Maintenance",
  "24/6 Technical Support",
];

const steps = [
  "Site Inspection",
  "Security Planning",
  "Professional Installation",
  "Testing & Configuration",
  "Maintenance & Support",
];

const faqs = [
  {
    q: "How long does installation take?",
    a: "Most residential installations are completed within one day while larger commercial projects may take several days depending on perimeter size.",
  },
  {
    q: "Will the electric fence work during power outages?",
    a: "Yes. We install battery backup systems that continue protecting your property even when electricity is unavailable.",
  },
  {
    q: "Can the fence be connected to an alarm?",
    a: "Absolutely. Our electric fences can integrate with sirens, alarm panels and other security systems.",
  },
  {
    q: "Do you provide maintenance?",
    a: "Yes. We offer inspections, repairs, routine servicing and emergency support for installed systems.",
  },
];

export default function ElectricFence() {
  const [openFAQ, setOpenFAQ] = useState(null);

  return (
    <>
      <NavbarPage />

      {/* HERO */}
      <section className="pt-36 pb-24 bg-gradient-to-br from-[#031B4E] via-[#062B78] to-[#0A53C1]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="uppercase tracking-[5px] text-cyan-300 font-semibold">
              Electric Fence Installation
            </span>

            <h1 className="text-5xl lg:text-7xl font-black text-white mt-5 leading-tight">
              Advanced
              <br />
              Perimeter Security
            </h1>

            <p className="text-blue-100 text-xl leading-9 mt-8">
              Protect homes, offices, schools, institutions and industrial
              properties with professionally installed electric fencing
              engineered for maximum security, durability and peace of mind.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <Link
                to="/contact"
                className="bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 transition"
              >
                Request Free Quote
                <ArrowRight size={18} />
              </Link>

              <a
                href="tel:+254110405854"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#031B4E] transition"
              >
                Call Now
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 text-center">
                <Shield
                  className="mx-auto text-cyan-300"
                  size={60}
                />
                <h3 className="text-white text-xl font-bold mt-5">
                  Maximum Protection
                </h3>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 text-center">
                <Zap
                  className="mx-auto text-cyan-300"
                  size={60}
                />
                <h3 className="text-white text-xl font-bold mt-5">
                  High Voltage
                </h3>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 text-center">
                <ShieldAlert
                  className="mx-auto text-cyan-300"
                  size={60}
                />
                <h3 className="text-white text-xl font-bold mt-5">
                  Alarm Integration
                </h3>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 text-center">
                <Wrench
                  className="mx-auto text-cyan-300"
                  size={60}
                />
                <h3 className="text-white text-xl font-bold mt-5">
                  Professional Support
                </h3>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* RESIDENTIAL & COMMERCIAL */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10">
          <motion.div
            whileHover={{ y: -8 }}
            className="bg-slate-50 rounded-3xl p-10 shadow-lg"
          >
            <Home className="text-blue-600 mb-6" size={45} />

            <h2 className="text-3xl font-bold mb-5">
              Residential Security
            </h2>

            <p className="text-slate-600 leading-8">
              Protect your home with modern electric fencing designed to
              discourage unauthorized entry while integrating seamlessly
              with alarm systems and CCTV surveillance.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="bg-slate-50 rounded-3xl p-10 shadow-lg"
          >
            <Building2 className="text-blue-600 mb-6" size={45} />

            <h2 className="text-3xl font-bold mb-5">
              Commercial Protection
            </h2>

            <p className="text-slate-600 leading-8">
              Secure factories, schools, warehouses, offices, institutions
              and commercial facilities using heavy-duty perimeter security
              solutions built for continuous protection.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 bg-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="uppercase tracking-[5px] text-blue-600 font-semibold">
              Our Services
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold mt-4">
              Complete Electric Fence Solutions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="bg-white rounded-2xl shadow-lg p-6 flex items-center gap-4"
              >
                <CheckCircle
                  className="text-green-600 flex-shrink-0"
                  size={24}
                />

                <span className="text-lg font-medium">
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
          <div className="text-center mb-14">
            <span className="uppercase tracking-[5px] text-blue-600 font-semibold">
              Our Process
            </span>

            <h2 className="text-4xl font-bold mt-4">
              Professional Installation Process
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="bg-slate-50 rounded-3xl shadow-lg p-8 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto mb-5 text-xl font-bold">
                  {index + 1}
                </div>

                <h3 className="font-bold text-lg">
                  {step}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-gradient-to-br from-[#031B4E] via-[#062B78] to-[#0A53C1]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="uppercase tracking-[5px] text-cyan-300 font-semibold">
              Why Choose Ogenix
            </span>

            <h2 className="text-5xl font-bold text-white mt-5">
              Security You Can Trust
            </h2>

            <p className="text-blue-100 max-w-3xl mx-auto mt-6 leading-8">
              We combine premium equipment, experienced technicians and
              reliable support to deliver perimeter security solutions
              that protect homes, businesses and institutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 text-center border border-white/20"
            >
              <ShieldCheck
                size={48}
                className="mx-auto text-cyan-300 mb-5"
              />

              <h3 className="text-white text-2xl font-bold">
                Trusted Protection
              </h3>

              <p className="text-blue-100 mt-4">
                Reliable perimeter security designed for continuous
                protection.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 text-center border border-white/20"
            >
              <Star
                size={48}
                className="mx-auto text-cyan-300 mb-5"
              />

              <h3 className="text-white text-2xl font-bold">
                Premium Equipment
              </h3>

              <p className="text-blue-100 mt-4">
                We install trusted products from recognized security
                manufacturers.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 text-center border border-white/20"
            >
              <Wrench
                size={48}
                className="mx-auto text-cyan-300 mb-5"
              />

              <h3 className="text-white text-2xl font-bold">
                Ongoing Support
              </h3>

              <p className="text-blue-100 mt-4">
                Installation, maintenance and technical support whenever
                you need us.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-slate-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="uppercase tracking-[5px] text-blue-600 font-semibold">
              Frequently Asked Questions
            </span>

            <h2 className="text-4xl font-bold mt-4">
              Got Questions?
            </h2>
          </div>

          <div className="space-y-5">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenFAQ(openFAQ === index ? null : index)
                  }
                  className="w-full flex justify-between items-center p-6 text-left"
                >
                  <h3 className="font-bold text-lg">
                    {faq.q}
                  </h3>

                  <span className="text-3xl text-blue-600">
                    {openFAQ === index ? "−" : "+"}
                  </span>
                </button>

                {openFAQ === index && (
                  <div className="px-6 pb-6 text-slate-600 leading-8">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="uppercase tracking-[5px] text-blue-600 font-semibold">
              Related Services
            </span>

            <h2 className="text-4xl font-bold mt-4">
              Complete Your Security Solution
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link
              to="/cctv-installation"
              className="bg-slate-50 rounded-3xl p-10 shadow-lg hover:shadow-2xl transition text-center"
            >
              <h3 className="text-2xl font-bold mb-4">
                CCTV Installation
              </h3>

              <p className="text-slate-600">
                Add surveillance cameras to your perimeter protection.
              </p>
            </Link>

            <Link
              to="/access-control"
              className="bg-slate-50 rounded-3xl p-10 shadow-lg hover:shadow-2xl transition text-center"
            >
              <h3 className="text-2xl font-bold mb-4">
                Access Control
              </h3>

              <p className="text-slate-600">
                Control who enters your premises with smart systems.
              </p>
            </Link>

            <Link
              to="/networking"
              className="bg-slate-50 rounded-3xl p-10 shadow-lg hover:shadow-2xl transition text-center"
            >
              <h3 className="text-2xl font-bold mb-4">
                Networking
              </h3>

              <p className="text-slate-600">
                Build a reliable network for all your security devices.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-28 bg-gradient-to-r from-[#031B4E] via-[#062B78] to-[#0A53C1]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="uppercase tracking-[5px] text-cyan-300 font-semibold">
            Ready to Secure Your Property?
          </span>

          <h2 className="text-5xl lg:text-6xl font-black text-white mt-5">
            Let's Protect What Matters Most
          </h2>

          <p className="text-blue-100 text-xl leading-9 mt-8 max-w-3xl mx-auto">
            Our security specialists are ready to design and install an
            electric fence system tailored to your property and budget.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-5 mt-12">
            <Link
              to="/contact"
              className="bg-cyan-500 hover:bg-cyan-400 text-white px-10 py-4 rounded-xl font-semibold transition"
            >
              Request Free Quote
            </Link>

            <a
              href="tel:+254110405854"
              className="border-2 border-white text-white px-10 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#031B4E] transition"
            >
              Call +254 110 405 854
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