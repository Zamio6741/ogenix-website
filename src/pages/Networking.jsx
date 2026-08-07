import { useState } from "react";
import { motion } from "framer-motion";
import {
  Network,
  Building2,
  Router,
  CheckCircle,
  Server,
  ArrowRight,
  Wifi,
  ShieldCheck,
  Wrench,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";

import NavbarPage from "../components/NavbarPage";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import ScrollTop from "../components/ScrollTop";

const features = [
  "Structured Network Cabling",
  "Office LAN & WAN Setup",
  "Router & Switch Configuration",
  "Enterprise Wi-Fi Deployment",
  "Server Installation",
  "Network Maintenance",
];

const steps = [
  "Site Survey",
  "Network Design",
  "Professional Installation",
  "Testing & Optimization",
  "Ongoing Support",
];

const gallery = [
  "/project1.jpg",
  "/project2.jpg",
  "/project3.jpg",
  "/project4.jpg",
];

const partners = [
  "/logos/huawei.png",
  "/logos/ubiquiti.png",
  "/logos/mikrotik.png",
  "/logos/tplink.png",
];

const faqs = [
  {
    q: "Do you install office networks?",
    a: "Yes. We install structured networks for offices, schools, hotels, hospitals and commercial buildings.",
  },
  {
    q: "Can you improve my Wi-Fi coverage?",
    a: "Absolutely. We install access points and mesh Wi-Fi systems that eliminate dead zones.",
  },
  {
    q: "Do you supply networking equipment?",
    a: "Yes. We supply quality routers, switches, access points and related networking equipment.",
  },
  {
    q: "Do you provide maintenance?",
    a: "Yes. We offer routine maintenance, troubleshooting and technical support.",
  },
];

export default function Networking() {
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
              Networking Solutions
            </span>

            <h1 className="text-5xl lg:text-7xl font-black text-white mt-5 leading-tight">
              Reliable
              <br />
              Network Infrastructure
            </h1>

            <p className="text-blue-100 text-xl leading-9 mt-8">
              Ogenix Technologies designs and installs reliable,
              secure and scalable networking solutions for homes,
              offices, schools, hotels and businesses using
              enterprise-grade equipment.
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
            transition={{ duration: .8 }}
          >

            <div className="grid grid-cols-2 gap-6">

              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 text-center">
                <Network size={60} className="mx-auto text-cyan-300" />
                <h3 className="text-white text-xl font-bold mt-5">
                  Enterprise Networks
                </h3>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 text-center">
                <Wifi size={60} className="mx-auto text-cyan-300" />
                <h3 className="text-white text-xl font-bold mt-5">
                  Wi-Fi Solutions
                </h3>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 text-center">
                <Server size={60} className="mx-auto text-cyan-300" />
                <h3 className="text-white text-xl font-bold mt-5">
                  Server Systems
                </h3>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 text-center">
                <Router size={60} className="mx-auto text-cyan-300" />
                <h3 className="text-white text-xl font-bold mt-5">
                  Professional Support
                </h3>
              </div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* BUSINESS & HOME NETWORKS */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10">

          <div className="bg-slate-50 rounded-3xl p-10 shadow-lg">

            <Building2 className="text-blue-600 mb-6" size={45} />

            <h2 className="text-3xl font-bold mb-5">
              Business Networking
            </h2>

            <p className="text-slate-600 leading-8">
              Secure and scalable networking infrastructure for offices,
              schools, hospitals, hotels and commercial buildings.
            </p>

          </div>

          <div className="bg-slate-50 rounded-3xl p-10 shadow-lg">

            <Router className="text-blue-600 mb-6" size={45} />

            <h2 className="text-3xl font-bold mb-5">
              Home Networking
            </h2>

            <p className="text-slate-600 leading-8">
              Seamless Wi-Fi coverage, mesh networking and high-speed
              internet connectivity throughout your home.
            </p>

          </div>

        </div>

      </section>
      {/* FEATURES */}

<section className="py-24 bg-slate-100">

  <div className="max-w-6xl mx-auto px-6">

    <div className="text-center mb-14">

      <span className="uppercase tracking-[5px] text-blue-600 font-semibold">
        Our Networking Services
      </span>

      <h2 className="text-4xl lg:text-5xl font-bold mt-4">
        Complete Networking Solutions
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
            className="text-green-600"
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

<section className="py-24 bg-slate-50">

  <div className="max-w-6xl mx-auto px-6">

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
          className="bg-white rounded-3xl shadow-lg p-8 text-center"
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

<section className="py-24 bg-gradient-to-r from-[#031B4E] via-[#062B78] to-[#0A53C1]">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">

      <span className="uppercase tracking-[5px] text-cyan-300 font-semibold">
        Why Choose Ogenix
      </span>

      <h2 className="text-5xl font-bold text-white mt-5">
        Reliable Networking Experts
      </h2>

      <p className="text-blue-100 max-w-3xl mx-auto mt-6 leading-8">
        We build secure, scalable and high-performance networks
        using trusted enterprise equipment backed by professional
        installation and dependable technical support.
      </p>

    </div>

    <div className="grid md:grid-cols-3 gap-8">

      <motion.div
        whileHover={{ y: -8 }}
        className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 text-center border border-white/20"
      >

        <Server
          size={48}
          className="mx-auto text-cyan-300 mb-5"
        />

        <h3 className="text-white text-2xl font-bold">
          Enterprise Performance
        </h3>

        <p className="text-blue-100 mt-4">
          Stable, secure and high-speed network infrastructure
          designed for maximum uptime.
        </p>

      </motion.div>

      <motion.div
        whileHover={{ y: -8 }}
        className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 text-center border border-white/20"
      >

        <ShieldCheck
          size={48}
          className="mx-auto text-cyan-300 mb-5"
        />

        <h3 className="text-white text-2xl font-bold">
          Secure Networks
        </h3>

        <p className="text-blue-100 mt-4">
          Modern networking solutions designed with security,
          reliability and future expansion in mind.
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
          We provide maintenance, troubleshooting and technical
          support whenever you need assistance.
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
        Complete Your ICT Infrastructure
      </h2>

    </div>

    <div className="grid md:grid-cols-3 gap-8">

      <Link
        to="/internet-installation"
        className="bg-slate-50 rounded-3xl p-10 shadow-lg hover:shadow-2xl transition text-center"
      >

        <h3 className="text-2xl font-bold mb-4">
          Internet Installation
        </h3>

        <p className="text-slate-600">
          Reliable fibre connectivity for homes and businesses.
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
          Secure your premises with modern access systems.
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
          Complete surveillance solutions for every property.
        </p>

      </Link>

    </div>

  </div>

</section>


{/* FINAL CTA */}

<section className="py-24 bg-gradient-to-r from-[#031B4E] via-[#062B78] to-[#0A53C1]">

  <div className="max-w-5xl mx-auto px-6 text-center">

    <span className="uppercase tracking-[5px] text-cyan-300 font-semibold">
      Ready to Upgrade Your Network?
    </span>

    <h2 className="text-5xl lg:text-6xl font-black text-white mt-5">
      Let's Build a Faster & Smarter Network
    </h2>

    <p className="text-blue-100 text-xl leading-9 mt-8 max-w-3xl mx-auto">
      Whether you need office networking, structured cabling,
      enterprise Wi-Fi or a complete network upgrade, Ogenix
      Technologies is ready to help.
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