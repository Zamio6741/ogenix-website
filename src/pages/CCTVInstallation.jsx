import { motion } from "framer-motion";
import { useState } from "react";
import {
  Camera,
  Building2,
  Home,
  ShieldCheck,
  CheckCircle,
  ArrowRight,
  Monitor,
  Wifi,
  CircleDot,
  Move,
} from "lucide-react";

import { Link } from "react-router-dom";

import NavbarPage from "../components/NavbarPage";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import ScrollTop from "../components/ScrollTop";
import Partners from "../components/Partners";

const features = [
  "HD & 4K CCTV Cameras",
  "Night Vision Technology",
  "Remote Mobile Monitoring",
  "Motion Detection Alerts",
  "Cloud & NVR Recording",
  "Professional Installation",
];

const steps = [
  "Site Survey",
  "Camera Placement",
  "Installation",
  "Configuration",
  "Testing & Training",
];

const cameraTypes = [
  {
    icon: <CircleDot size={34} />,
    title: "Bullet Cameras",
    text: "Perfect for outdoor surveillance with long viewing distances.",
  },

  {
    icon: <Camera size={34} />,
    title: "Dome Cameras",
    text: "Ideal for offices, shops, schools and indoor monitoring.",
  },

  {
    icon: <Move size={34} />,
    title: "PTZ Cameras",
    text: "Pan, Tilt and Zoom cameras for monitoring large areas.",
  },

  {
    icon: <Wifi size={34} />,
    title: "Wireless Cameras",
    text: "Quick installation with secure Wi-Fi connectivity.",
  },
];

const faqs = [
  {
    q: "Can I view my cameras on my phone?",
    a: "Yes. We configure secure remote viewing for Android and iPhone.",
  },

  {
    q: "How long are recordings stored?",
    a: "Storage depends on the hard drive capacity and number of cameras installed.",
  },

  {
    q: "Do cameras work at night?",
    a: "Yes. All our recommended cameras include infrared night vision.",
  },

  {
    q: "Do you provide maintenance?",
    a: "Yes. We offer maintenance and technical support after installation.",
  },
];
export default function CCTV() {
  const [openFAQ, setOpenFAQ] = useState(null);

  return (

    <>

      <NavbarPage />

      {/* HERO */}

      <section className="relative pt-40 pb-32 bg-gradient-to-br from-[#031B4E] via-[#062B78] to-[#0A53C1]">
         

        <div className="absolute inset-0 bg-[#031B4E]/80"></div>

        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >

            <span className="uppercase tracking-[5px] text-cyan-300 font-semibold">
              CCTV Installation
            </span>

            <h1 className="text-5xl lg:text-7xl font-black text-white mt-6 leading-tight">

              Professional CCTV Security Solutions

            </h1>

            <p className="text-blue-100 text-xl leading-9 mt-8">

              Protect your home, business, office, school or warehouse
              with intelligent surveillance systems professionally
              installed by Ogenix Technologies.

            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <Link
                to="/contact"
                className="bg-cyan-500 hover:bg-cyan-400 px-8 py-4 rounded-xl text-white font-semibold transition flex items-center gap-2"
              >

                Get Free Quote

                <ArrowRight size={18} />

              </Link>

              <a
                href="tel:+254110405854"
                className="border border-white px-8 py-4 rounded-xl text-white hover:bg-white hover:text-[#031B4E] transition"
              >

                Call Us

              </a>

            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex justify-center"
          >

            <div className="w-80 h-80 rounded-full bg-cyan-400/20 backdrop-blur-sm flex items-center justify-center">

              <Camera
                size={140}
                className="text-cyan-300"
              />

            </div>

          </motion.div>

        </div>

      </section>
            {/* SOLUTIONS */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >

            <span className="uppercase tracking-[5px] text-blue-600 font-semibold">
              CCTV Solutions
            </span>

            <h2 className="text-5xl font-bold text-slate-900 mt-5">
              Security Solutions For Every Property
            </h2>

            <p className="text-slate-500 mt-6 max-w-3xl mx-auto leading-8">
              Whether you're securing your home or managing multiple
              business locations, we design surveillance systems that
              deliver reliable protection around the clock.
            </p>

          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10">

            <motion.div
              whileHover={{ y: -8 }}
              className="bg-slate-50 rounded-3xl overflow-hidden shadow-xl"
            >
              <div className="p-8">

                <Home
                  className="text-blue-600 mb-5"
                  size={45}
                />

                <h3 className="text-3xl font-bold mb-5">
                  Residential CCTV
                </h3>

                <p className="text-slate-600 leading-8">

                  Protect your family, vehicles and property with
                  professionally installed indoor and outdoor
                  surveillance systems featuring mobile monitoring,
                  motion detection and crystal-clear recordings.

                </p>

              </div>

            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              className="bg-slate-50 rounded-3xl overflow-hidden shadow-xl"
            >

              <div className="p-8">

                <Building2
                  className="text-blue-600 mb-5"
                  size={45}
                />

                <h3 className="text-3xl font-bold mb-5">
                  Commercial CCTV
                </h3>

                <p className="text-slate-600 leading-8">

                  Secure offices, schools, warehouses,
                  supermarkets, hotels and factories with
                  enterprise surveillance systems designed
                  for continuous monitoring and evidence recording.

                </p>

              </div>

            </motion.div>

          </div>

        </div>

      </section>

      {/* CAMERA TYPES */}

      <section className="py-24 bg-slate-100">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <span className="uppercase tracking-[5px] text-blue-600 font-semibold">
              Camera Types
            </span>

            <h2 className="text-5xl font-bold mt-5">
              CCTV Systems We Install
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {cameraTypes.map((camera, index) => (

              <motion.div
                key={index}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="bg-white rounded-3xl shadow-lg p-8 text-center"
              >

                <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto mb-6">

                  {camera.icon}

                </div>

                <h3 className="text-2xl font-bold mb-4">

                  {camera.title}

                </h3>

                <p className="text-slate-600 leading-7">

                  {camera.text}

                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* FEATURES */}

      <section className="py-24 bg-white">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-16">

            <span className="uppercase tracking-[5px] text-blue-600 font-semibold">
              Features
            </span>

            <h2 className="text-5xl font-bold mt-5">
              Everything You Need
            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-6">

            {features.map((feature, index) => (

              <motion.div
                key={index}
                whileHover={{ x: 8 }}
                className="flex items-center gap-4 bg-slate-50 rounded-2xl p-6 shadow"
              >

                <CheckCircle
                  className="text-green-600"
                  size={24}
                />

                <span className="text-lg text-slate-700">

                  {feature}

                </span>

              </motion.div>

            ))}

          </div>

        </div>

      </section>
    
      {/* WHY CHOOSE US */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <span className="uppercase tracking-[5px] text-blue-600 font-semibold">
              Why Ogenix?
            </span>

            <h2 className="text-5xl font-bold mt-5">
              Why Clients Trust Us
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <motion.div
              whileHover={{ y: -8 }}
              className="bg-slate-50 rounded-3xl p-8 text-center shadow-lg"
            >

              <ShieldCheck
                className="mx-auto text-blue-600 mb-6"
                size={45}
              />

              <h3 className="text-2xl font-bold mb-4">
                Trusted Equipment
              </h3>

              <p className="text-slate-600 leading-7">
                We only install reliable CCTV systems from globally
                recognized manufacturers.
              </p>

            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              className="bg-slate-50 rounded-3xl p-8 text-center shadow-lg"
            >

              <Camera
                className="mx-auto text-blue-600 mb-6"
                size={45}
              />

              <h3 className="text-2xl font-bold mb-4">
                Crystal Clear Video
              </h3>

              <p className="text-slate-600 leading-7">
                HD and 4K surveillance with infrared night vision and
                smart recording.
              </p>

            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              className="bg-slate-50 rounded-3xl p-8 text-center shadow-lg"
            >

              <Monitor
                className="mx-auto text-blue-600 mb-6"
                size={45}
              />

              <h3 className="text-2xl font-bold mb-4">
                Remote Monitoring
              </h3>

              <p className="text-slate-600 leading-7">
                View live footage from anywhere using your smartphone,
                tablet or computer.
              </p>

            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              className="bg-slate-50 rounded-3xl p-8 text-center shadow-lg"
            >

              <CheckCircle
                className="mx-auto text-blue-600 mb-6"
                size={45}
              />

              <h3 className="text-2xl font-bold mb-4">
                Expert Installation
              </h3>

              <p className="text-slate-600 leading-7">
                Professional installation, testing and after-sales
                support from experienced technicians.
              </p>

            </motion.div>

          </div>

        </div>

      </section>

      {/* INSTALLATION PROCESS */}

      <section className="py-24 bg-slate-100">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <span className="uppercase tracking-[5px] text-blue-600 font-semibold">
              Our Process
            </span>

            <h2 className="text-5xl font-bold mt-5">
              Professional Installation Process
            </h2>

          </div>

          <div className="grid md:grid-cols-5 gap-8">

            {steps.map((step, index) => (

              <motion.div
                key={index}
                whileHover={{
                  y: -6,
                }}
                className="bg-white rounded-3xl shadow-lg p-8 text-center"
              >

                <div className="w-16 h-16 rounded-full bg-blue-600 text-white text-2xl font-bold flex items-center justify-center mx-auto mb-6">

                  {index + 1}

                </div>

                <h3 className="text-xl font-bold">

                  {step}

                </h3>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* TECHNOLOGY PARTNERS */}

      <Partners />
            {/* FAQ */}

      <section className="py-24 bg-white">

        <div className="max-w-5xl mx-auto px-6">

          <div className="text-center mb-16">

            <span className="uppercase tracking-[5px] text-blue-600 font-semibold">
              FAQs
            </span>

            <h2 className="text-5xl font-bold text-slate-900 mt-5">
              Frequently Asked Questions
            </h2>

          </div>

          <div className="space-y-5">

            {faqs.map((faq, index) => (

              <div
                key={index}
                className="rounded-3xl border border-slate-200 shadow-sm overflow-hidden"
              >

                <button
                  onClick={() =>
                    setOpenFAQ(openFAQ === index ? null : index)
                  }
                  className="w-full flex justify-between items-center text-left p-6 font-semibold text-lg hover:bg-slate-50 transition"
                >

                  {faq.q}

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

      <section className="py-24 bg-slate-100">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <span className="uppercase tracking-[5px] text-blue-600 font-semibold">
              Related Services
            </span>

            <h2 className="text-5xl font-bold mt-5">

              You May Also Be Interested In

            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <Link
              to="/electric-fence"
              className="bg-white rounded-3xl shadow-xl p-10 hover:-translate-y-2 transition"
            >

              <ShieldCheck
                className="text-blue-600 mb-5"
                size={42}
              />

              <h3 className="text-2xl font-bold mb-3">

                Electric Fence

              </h3>

              <p className="text-slate-600 leading-8">

                Secure your perimeter with modern electric fencing.

              </p>

            </Link>

            <Link
              to="/access-control"
              className="bg-white rounded-3xl shadow-xl p-10 hover:-translate-y-2 transition"
            >

              <Monitor
                className="text-blue-600 mb-5"
                size={42}
              />

              <h3 className="text-2xl font-bold mb-3">

                Access Control

              </h3>

              <p className="text-slate-600 leading-8">

                Biometric and RFID access systems for modern businesses.

              </p>

            </Link>

            <Link
              to="/networking"
              className="bg-white rounded-3xl shadow-xl p-10 hover:-translate-y-2 transition"
            >

              <Wifi
                className="text-blue-600 mb-5"
                size={42}
              />

              <h3 className="text-2xl font-bold mb-3">

                Networking

              </h3>

              <p className="text-slate-600 leading-8">

                Reliable wired and wireless networking solutions.

              </p>

            </Link>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-28 bg-gradient-to-r from-[#031B4E] via-[#062B78] to-[#0A53C1]">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl lg:text-6xl font-black text-white"
          >

            Ready To Secure Your Property?

          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: .2 }}
            className="text-blue-100 text-xl mt-8 leading-9 max-w-3xl mx-auto"
          >

            Talk to our CCTV experts today for professional advice,
            quality equipment and a FREE quotation tailored to your
            home or business.

          </motion.p>

          <div className="flex flex-wrap justify-center gap-6 mt-12">

            <Link
              to="/contact"
              className="bg-cyan-500 hover:bg-cyan-400 text-white px-10 py-4 rounded-xl font-semibold transition flex items-center gap-2"
            >

              Request Free Quote

              <ArrowRight size={18} />

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