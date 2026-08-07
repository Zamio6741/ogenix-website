import { useState } from "react";
import { motion } from "framer-motion";
import {
  MonitorSmartphone,
  Building2,
  Briefcase,
  CheckCircle,
  Lightbulb,
  ArrowRight,
  ShieldCheck,
  Users,
  Star,
  Laptop,
  Wrench,
} from "lucide-react";
import { Link } from "react-router-dom";

import NavbarPage from "../components/NavbarPage";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import ScrollTop from "../components/ScrollTop";

const features = [
  "ICT Infrastructure Planning",
  "Network Design & Optimization",
  "Cybersecurity Consultation",
  "Technology Procurement Advice",
  "Cloud & Digital Transformation",
  "Ongoing Technical Support",
];

const steps = [
  "Consultation",
  "Assessment",
  "Planning",
  "Implementation",
  "Support",
];

const faqs = [
  {
    q: "Do you provide ICT consultancy for small businesses?",
    a: "Yes. We work with startups, SMEs, schools, NGOs and large enterprises by providing practical technology solutions that fit their budgets.",
  },
  {
    q: "Can you recommend the right equipment?",
    a: "Absolutely. We help clients select networking equipment, servers, computers, CCTV systems and other ICT infrastructure from trusted brands.",
  },
  {
    q: "Do you provide implementation after consultancy?",
    a: "Yes. Our team can plan, supply, install, configure and maintain the recommended ICT solutions.",
  },
  {
    q: "Do you offer ongoing support?",
    a: "Yes. We provide continuous maintenance, upgrades and technical support after project completion.",
  },
];

export default function ICTConsultancy() {
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
            transition={{ duration: .8 }}
          >

            <span className="uppercase tracking-[5px] text-cyan-300 font-semibold">
              ICT Consultancy
            </span>

            <h1 className="text-5xl lg:text-7xl font-black text-white mt-5 leading-tight">
              Smarter Technology
              <br />
              Better Business
            </h1>

            <p className="text-blue-100 text-xl mt-8 leading-9">
              Ogenix Technologies provides expert ICT consultancy
              services that help organizations choose the right
              technology, improve productivity, strengthen security
              and achieve sustainable digital transformation.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <Link
                to="/contact"
                className="bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 transition"
              >
                Request Consultation
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
            transition={{ duration: .8 }}
          >

            <div className="grid grid-cols-2 gap-6">

              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 text-center">

                <Lightbulb
                  size={60}
                  className="mx-auto text-cyan-300"
                />

                <h3 className="text-white font-bold text-xl mt-5">
                  Expert Advice
                </h3>

              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 text-center">

                <Laptop
                  size={60}
                  className="mx-auto text-cyan-300"
                />

                <h3 className="text-white font-bold text-xl mt-5">
                  Modern Solutions
                </h3>

              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 text-center">

                <Users
                  size={60}
                  className="mx-auto text-cyan-300"
                />

                <h3 className="text-white font-bold text-xl mt-5">
                  Business Growth
                </h3>

              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 text-center">

                <Wrench
                  size={60}
                  className="mx-auto text-cyan-300"
                />

                <h3 className="text-white font-bold text-xl mt-5">
                  Continuous Support
                </h3>

              </div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* SOLUTIONS */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10">

          <div className="bg-slate-50 rounded-3xl p-10 shadow-lg">

            <Briefcase
              className="text-blue-600 mb-6"
              size={45}
            />

            <h2 className="text-3xl font-bold mb-5">
              Business ICT Consulting
            </h2>

            <p className="text-slate-600 leading-8">
              We help businesses improve productivity through
              strategic ICT planning, networking, cybersecurity,
              cloud adoption and digital transformation.
            </p>

          </div>

          <div className="bg-slate-50 rounded-3xl p-10 shadow-lg">

            <Building2
              className="text-blue-600 mb-6"
              size={45}
            />

            <h2 className="text-3xl font-bold mb-5">
              Institutions & Organizations
            </h2>

            <p className="text-slate-600 leading-8">
              We provide scalable ICT solutions for schools,
              hospitals, NGOs and government institutions using
              reliable technologies that support long-term growth.
            </p>

          </div>

        </div>

      </section>
        

      {/* CONSULTING AREAS */}

      <section className="py-24 bg-slate-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <span className="uppercase tracking-[5px] text-blue-600 font-semibold">
              What We Help You With
            </span>

            <h2 className="text-5xl font-bold mt-5">
              Comprehensive ICT Advisory
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <motion.div
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold mb-4">
                Infrastructure Planning
              </h3>

              <p className="text-slate-600 leading-8">
                Design scalable ICT infrastructure for businesses,
                schools and institutions with future expansion in mind.
              </p>

            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold mb-4">
                Cybersecurity Strategy
              </h3>

              <p className="text-slate-600 leading-8">
                Reduce business risks by implementing secure networks,
                policies and technology best practices.
              </p>

            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold mb-4">
                Digital Transformation
              </h3>

              <p className="text-slate-600 leading-8">
                Modernize your organization through cloud services,
                automation and efficient ICT solutions.
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
              Common Questions
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
              Explore More ICT Solutions
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <Link
              to="/networking"
              className="bg-slate-50 rounded-3xl p-10 shadow-lg hover:shadow-2xl transition text-center"
            >

              <h3 className="text-2xl font-bold mb-4">
                Networking
              </h3>

              <p className="text-slate-600">
                Build reliable, secure and high-speed business networks.
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
                Secure your premises using biometric and smart access systems.
              </p>

            </Link>

            <Link
              to="/cctv-installation"
              className="bg-slate-50 rounded-3xl p-10 shadow-lg hover:shadow-2xl transition text-center"
            >

              <h3 className="text-2xl font-bold mb-4">
                CCTV Installation
              </h3>

              <p className="text-slate-600">
                Monitor your facilities with professional surveillance systems.
              </p>

            </Link>

          </div>

        </div>

      </section>


      {/* FINAL CTA */}

      <section className="py-24 bg-gradient-to-r from-[#031B4E] via-[#062B78] to-[#0A53C1]">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <span className="uppercase tracking-[5px] text-cyan-300 font-semibold">
            Ready to Modernize Your ICT?
          </span>

          <h2 className="text-5xl lg:text-6xl font-black text-white mt-5">
            Let's Build Your Digital Future
          </h2>

          <p className="text-blue-100 text-xl leading-9 mt-8 max-w-3xl mx-auto">
            Partner with Ogenix Technologies for strategic ICT consulting,
            infrastructure planning and innovative technology solutions
            tailored to your organization.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-5 mt-12">

            <Link
              to="/contact"
              className="bg-cyan-500 hover:bg-cyan-400 text-white px-10 py-4 rounded-xl font-semibold transition"
            >
              Request Free Consultation
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