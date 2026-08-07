import { motion } from "framer-motion";

import tplink from "../assets/partners/tplink.png";
import ubiquiti from "../assets/partners/ubiquiti.png";
import mikrotik from "../assets/partners/mikrotik.png";
import hikvision from "../assets/partners/hikvision.png";
import dahua from "../assets/partners/dahua.png";
import ruijie from "../assets/partners/ruijie.png";
import huawei from "../assets/partners/huawei.png";
import zkteco from "../assets/partners/zkteco.png";

const partners = [
  {
    name: "TP-Link",
    logo: tplink,
  },
  {
    name: "Ubiquiti",
    logo: ubiquiti,
  },
  {
    name: "MikroTik",
    logo: mikrotik,
  },
  {
    name: "Hikvision",
    logo: hikvision,
  },
  {
    name: "Dahua",
    logo: dahua,
  },
  {
    name: "Ruijie",
    logo: ruijie,
  },
  {
    name: "Huawei",
    logo: huawei,
  },
  {
    name: "ZKTeco",
    logo: zkteco,
  },
];

const row1 = [...partners, ...partners];
const row2 = [...partners.slice().reverse(), ...partners.slice().reverse()];

export default function Partners() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="uppercase tracking-[5px] text-blue-600 font-semibold">
            Trusted Technology Brands
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mt-4">
            Powered by World-Class Manufacturers
          </h2>

          <p className="text-slate-500 mt-6 max-w-3xl mx-auto leading-8 text-lg">
            At Ogenix Technologies, we install genuine equipment from globally
            recognized manufacturers to deliver reliable internet, CCTV,
            networking, access control and security solutions for homes,
            businesses and institutions.
          </p>
        </motion.div>

      </div>

      <div className="relative">

        {/* Left Fade */}
        <div className="absolute left-0 top-0 h-full w-24 md:w-40 bg-gradient-to-r from-white to-transparent z-20" />

        {/* Right Fade */}
        <div className="absolute right-0 top-0 h-full w-24 md:w-40 bg-gradient-to-l from-white to-transparent z-20" />

        {/* First Row */}
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex w-max gap-10 py-5"
        >
          {row1.map((partner, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -8,
                scale: 1.05,
              }}
              className="
                group
                w-52 h-32
                md:w-60 md:h-36
                lg:w-64 lg:h-40
                bg-white
                rounded-3xl
                shadow-lg
                border border-slate-200
                hover:shadow-[0_20px_50px_rgba(37,99,235,0.18)]
                flex
                items-center
                justify-center
                transition-all
                duration-300
              "
            >
              <img
                src={partner.logo}
                alt={partner.name}
                title={partner.name}
                className="
                  w-[90%]
                  h-[90%]
                  object-contain
                  group-hover:scale-110
                  transition-all
                  duration-300
                "
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Second Row */}
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex w-max gap-10 py-5 mt-6"
        >
          {row2.map((partner, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -8,
                scale: 1.05,
              }}
              className="
                group
                w-52 h-32
                md:w-60 md:h-36
                lg:w-64 lg:h-40
                bg-white
                rounded-3xl
                shadow-lg
                border border-slate-200
                hover:shadow-[0_20px_50px_rgba(37,99,235,0.18)]
                flex
                items-center
                justify-center
                transition-all
                duration-300
              "
            >
              <img
                src={partner.logo}
                alt={partner.name}
                title={partner.name}
                className="
                  w-[90%]
                  h-[90%]
                  object-contain
                  group-hover:scale-110
                  transition-all
                  duration-300
                "
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}