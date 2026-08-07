import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaWifi,
  FaShieldAlt,
  FaNetworkWired,
  FaPhone,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

import technician from "../assets/images/technician.jpg";

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#061b49] via-[#0b3b91] to-[#0879d9]">

      {/* =========================
          BACKGROUND EFFECTS
      ========================= */}

      <div className="absolute inset-0 pointer-events-none">

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />

        {/* Blue glow */}
        <div className="absolute top-20 right-10 w-[450px] h-[450px] bg-cyan-400/20 rounded-full blur-[140px]" />

        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[130px]" />

        {/* Floating glow */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-40 left-10 w-24 h-24 rounded-full bg-cyan-400/20 blur-3xl"
        />

      </div>

      {/* =========================
          MAIN CONTENT
      ========================= */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 min-h-screen">

        <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-center min-h-screen pt-28 pb-20">

          {/* =========================
              LEFT CONTENT
          ========================= */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
            }}
          >

            {/* Label */}

            <div className="flex items-center gap-3 mb-6">

              <span className="w-9 h-[2px] bg-cyan-400" />

              <span className="uppercase tracking-[5px] text-cyan-300 font-semibold text-sm">
                Ogenix Technologies
              </span>

            </div>

            {/* Heading */}

            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-[76px] font-black leading-[0.98] tracking-tight text-white">

              Smart Security.

              <br />

              <span className="text-cyan-300">
                Reliable
              </span>

              <br />

              <span className="text-cyan-300">
                Internet.
              </span>

            </h1>

            {/* Description */}

            <p className="mt-8 text-lg lg:text-xl leading-8 text-blue-100 max-w-2xl">
              Professional ICT, security and connectivity solutions designed
              for homes, businesses, schools and institutions across Kenya.
            </p>

            {/* Service Tags */}

            <div className="flex flex-wrap gap-3 mt-7">

              <span className="px-4 py-2 rounded-full border border-white/20 bg-white/10 text-blue-50 text-sm backdrop-blur">
                Internet Installation
              </span>

              <span className="px-4 py-2 rounded-full border border-white/20 bg-white/10 text-blue-50 text-sm backdrop-blur">
                CCTV
              </span>

              <span className="px-4 py-2 rounded-full border border-white/20 bg-white/10 text-blue-50 text-sm backdrop-blur">
                Access Control
              </span>

              <span className="px-4 py-2 rounded-full border border-white/20 bg-white/10 text-blue-50 text-sm backdrop-blur">
                Networking
              </span>

            </div>

            {/* Buttons */}

            <div className="flex flex-wrap gap-4 mt-9">

              <motion.div
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  to="/contact"
                  className="flex items-center gap-3 bg-cyan-400 hover:bg-cyan-300 text-[#06265d] px-7 py-4 rounded-xl font-bold shadow-xl shadow-cyan-500/20 transition-all duration-300"
                >
                  Get Free Quote

                  <FaArrowRight />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  to="/projects"
                  className="flex items-center gap-3 border border-white/30 hover:bg-white/10 px-7 py-4 rounded-xl text-white font-semibold backdrop-blur transition-all duration-300"
                >
                  View Our Projects
                </Link>
              </motion.div>

            </div>

            {/* Contact Information */}

            <div className="flex flex-wrap gap-8 mt-9">

              <div className="flex items-center gap-3">

                <div className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-cyan-300">
                  <FaPhone />
                </div>

                <div>
                  <p className="text-blue-200 text-xs">
                    Call Us
                  </p>

                  <p className="text-white font-semibold">
                    +254 794 435 466
                  </p>
                </div>

              </div>

              <div className="flex items-center gap-3">

                <div className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-cyan-300">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <p className="text-blue-200 text-xs">
                    Visit Us
                  </p>

                  <p className="text-white font-semibold">
                    Thika Arcade, Thika
                  </p>
                </div>

              </div>

            </div>

            {/* Divider */}

            <div className="w-full max-w-xl h-px bg-white/15 mt-9" />

            {/* Stats */}

            <div className="grid grid-cols-3 max-w-xl mt-7">

              <div>
                <h2 className="text-3xl lg:text-4xl font-black text-white">
                  100+
                </h2>

                <p className="text-blue-200 text-sm mt-1">
                  Projects
                </p>
              </div>

              <div className="border-l border-white/15 pl-6">
                <h2 className="text-3xl lg:text-4xl font-black text-white">
                  2+
                </h2>

                <p className="text-blue-200 text-sm mt-1">
                  Years Experience
                </p>
              </div>

              <div className="border-l border-white/15 pl-6">
                <h2 className="text-3xl lg:text-4xl font-black text-white">
                  24/6
                </h2>

                <p className="text-blue-200 text-sm mt-1">
                  Support
                </p>
              </div>

            </div>

          </motion.div>


          {/* =========================
              RIGHT IMAGE
          ========================= */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 0.15,
              ease: "easeOut",
            }}
            className="relative flex justify-center lg:justify-end"
          >

            {/* Image Glow */}

            <div className="absolute inset-10 bg-cyan-400/20 blur-[100px] rounded-full" />

            {/* Image */}

            <motion.div
              whileHover={{ scale: 1.015 }}
              transition={{ duration: 0.4 }}
              className="relative w-full max-w-[560px]"
            >

              <div className="overflow-hidden rounded-[30px] border border-white/20 shadow-2xl shadow-black/30">

                <img
                  src={technician}
                  alt="Ogenix Technologies ICT and Security Solutions"
                  className="w-full h-[560px] lg:h-[650px] object-cover"
                  loading="eager"
                  fetchPriority="high"
                />

                {/* Image overlay */}

                <div className="absolute inset-0 rounded-[30px] bg-gradient-to-t from-[#031638]/80 via-transparent to-transparent pointer-events-none" />

                {/* Bottom image text */}

                <div className="absolute bottom-0 left-0 right-0 p-8">

                  <p className="uppercase tracking-[4px] text-cyan-300 text-sm font-semibold mb-2">
                    Connecting Kenya
                  </p>

                  <h2 className="text-3xl lg:text-4xl font-black text-white">
                    Technology You Can Trust.
                  </h2>

                  <p className="text-blue-100 mt-2">
                    Quality equipment. Professional technicians.
                  </p>

                </div>

              </div>

            </motion.div>

          </motion.div>

        </div>

      </div>


      {/* =========================
          SCROLL INDICATOR
      ========================= */}

      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block"
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 1.6,
          repeat: Infinity,
        }}
      >

        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">

          <div className="w-1 h-2.5 bg-white rounded-full mt-2" />

        </div>

      </motion.div>

    </section>
  );
}

export default Hero;