import {
  Wifi,
  Camera,
  Network,
  ShieldCheck,
  DoorOpen,
  Wrench,
  ArrowRight,
  CheckCircle,
  Star,
} from "lucide-react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const services = [
  {
    icon: <Wifi size={42} />,
    title: "Internet Installation",
    description:
      "Fast and reliable fibre internet installation for homes, apartments, schools and businesses.",
    features: [
      "Fibre Installation",
      "Wi-Fi Coverage",
      "Router Configuration",
    ],
    popular: true,
    link: "/internet-installation",
  },

  {
    icon: <Camera size={42} />,
    title: "CCTV Systems",
    description:
      "Professional surveillance systems with HD recording and remote monitoring from anywhere.",
    features: [
      "HD Cameras",
      "Remote Viewing",
      "24/7 Recording",
    ],
    popular: true,
    link: "/cctv-installation",
  },

  {
    icon: <ShieldCheck size={42} />,
    title: "Electric Fencing",
    description:
      "Modern perimeter security systems designed to protect homes and commercial properties.",
    features: [
      "Perimeter Security",
      "Alarm Integration",
      "Professional Installation",
    ],
    popular: false,
    link: "/electric-fence",
  },

  {
    icon: <Network size={42} />,
    title: "Networking",
    description:
      "Enterprise networking, structured cabling and wireless deployments for every business.",
    features: [
      "Structured Cabling",
      "Enterprise Wi-Fi",
      "Network Management",
    ],
    popular: false,
    link: "/networking",
  },

  {
    icon: <DoorOpen size={42} />,
    title: "Access Control",
    description:
      "Biometric, RFID card and smart access systems for secure premises.",
    features: [
      "Fingerprint Access",
      "RFID Cards",
      "Attendance Systems",
    ],
    popular: false,
    link: "/access-control",
  },

  {
    icon: <Wrench size={42} />,
    title: "ICT Consultancy",
    description:
      "Professional ICT consultancy, maintenance and technical support tailored to your business.",
    features: [
      "IT Support",
      "Maintenance",
      "Technology Advice",
    ],
    popular: false,
    link: "/ict-consultancy",
  },
];

const reasons = [
  "Certified Technicians",
  "Premium Equipment",
  "Affordable Pricing",
  "24/6 Customer Support",
  "Fast Installation",
  "Professional Workmanship",
];

function Services() {
  return (
    <section
      id="services"
      className="py-28 bg-gradient-to-b from-white via-slate-50 to-slate-100"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >

          <span className="uppercase tracking-[5px] text-blue-600 font-semibold">
            Our Services
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mt-4">
            Smart ICT Solutions
          </h2>

          <p className="text-slate-500 mt-5 max-w-3xl mx-auto leading-8">
            We provide reliable networking, internet connectivity,
            surveillance and security solutions designed to keep your
            home and business connected, protected and productive.
          </p>

        </motion.div>

        {/* Service Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -10,
              }}
              className="group bg-white rounded-3xl shadow-xl border border-slate-200 flex flex-col overflow-hidden"
            >

              {/* Top Icon Area */}

              <div className="relative h-52 bg-gradient-to-br from-[#031B4E] via-[#0A53C1] to-cyan-500 flex items-center justify-center">

                {service.popular && (
                  <div className="absolute top-5 right-5 bg-yellow-400 text-black text-xs font-bold px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                    <Star size={14} />
                    Popular
                  </div>
                )}

                <motion.div
                  whileHover={{
                    rotate: 8,
                    scale: 1.1,
                  }}
                  className="w-28 h-28 rounded-3xl bg-white/15 backdrop-blur-lg border border-white/20 flex items-center justify-center text-white shadow-2xl"
                >
                  {service.icon}
                </motion.div>

              </div>

              {/* Content */}

              <div className="p-8 flex flex-col flex-grow">

                <h3 className="text-2xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="text-slate-600 leading-8 mt-4">
                  {service.description}
                </p>

                <div className="space-y-3 mt-6">

                  {service.features.map((feature, i) => (

                    <div
                      key={i}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle
                        size={18}
                        className="text-green-600 flex-shrink-0"
                      />

                      <span className="text-slate-700">
                        {feature}
                      </span>
                    </div>

                  ))}

                </div>

                <Link
                  to={service.link}
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-600 hover:text-cyan-500 transition"
                >
                  Learn More
                  <ArrowRight size={18} />
                </Link>

              </div>

            </motion.div>

          ))}

        </div>
                {/* Why Choose Ogenix */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-24"
        >

          <div className="bg-gradient-to-r from-[#031B4E] via-[#062B78] to-[#0A53C1] rounded-[40px] p-10 lg:p-16 shadow-2xl">

            <div className="text-center">

              <span className="uppercase tracking-[5px] text-cyan-300 font-semibold">
                Why Choose Ogenix
              </span>

              <h2 className="text-4xl lg:text-5xl font-bold text-white mt-5">
                Your Trusted ICT Partner
              </h2>

              <p className="text-blue-100 mt-6 max-w-3xl mx-auto leading-8">
                We deliver dependable ICT solutions backed by professional
                workmanship, quality equipment, affordable pricing and
                responsive technical support for homes, businesses and
                institutions.
              </p>

            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">

              {reasons.map((reason, index) => (

                <motion.div
                  key={index}
                  whileHover={{
                    y: -6,
                    scale: 1.03,
                  }}
                  className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 flex items-center gap-4"
                >

                  <div className="w-12 h-12 rounded-full bg-cyan-400 text-[#041E5A] flex items-center justify-center flex-shrink-0">

                    <CheckCircle size={24} />

                  </div>

                  <h3 className="text-white font-semibold text-lg">
                    {reason}
                  </h3>

                </motion.div>

              ))}

            </div>

          </div>

        </motion.div>

        {/* CTA */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-24"
        >

          <div className="bg-white rounded-[40px] shadow-2xl border border-slate-200 p-10 lg:p-16 text-center">

            <span className="uppercase tracking-[5px] text-blue-600 font-semibold">
              Need Something Custom?
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mt-5">
              Let's Build the Right ICT Solution
            </h2>

            <p className="text-slate-600 leading-8 max-w-3xl mx-auto mt-6">
              Whether you need reliable internet, CCTV surveillance,
              networking, electric fencing or access control systems,
              our experts are ready to recommend the perfect solution
              for your home or business.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-5 mt-12">

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-4 rounded-xl transition-all duration-300 hover:scale-105"
              >
                Request Free Quote
                <ArrowRight size={20} />
              </Link>

              <a
                href="tel:0794435466"
                className="inline-flex items-center justify-center px-10 py-4 rounded-xl border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold transition-all duration-300"
              >
                Call 0794435466
              </a>

            </div>

            <div className="mt-10">

              <Link
                to="/services"
                className="inline-flex items-center gap-3 text-blue-600 font-semibold hover:text-cyan-500 transition"
              >
                View All Services
                <ArrowRight size={18} />
              </Link>

            </div>

          </div>

        </motion.div>
              </div>
    </section>
  );
}

export default Services;