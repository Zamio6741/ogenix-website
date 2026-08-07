import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Award,
  ShieldCheck,
  Users,
  Wifi,
  ArrowRight,
  CheckCircle,
  Globe,
  Network,
} from "lucide-react";

import NavbarPage from "../components/NavbarPage";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import ScrollTop from "../components/ScrollTop";

export default function AboutPage() {
  const values = [
    {
      icon: <Target size={38} />,
      title: "Our Mission",
      text: "To deliver dependable ICT infrastructure, internet connectivity and security solutions that empower homes, institutions and businesses across Kenya.",
    },
    {
      icon: <Eye size={38} />,
      title: "Our Vision",
      text: "To become Kenya's most trusted ICT company by consistently delivering innovative technology solutions backed by excellent customer service.",
    },
    {
      icon: <Award size={38} />,
      title: "Our Core Values",
      text: "Integrity, professionalism, innovation, quality workmanship and customer satisfaction are the foundation of everything we do.",
    },
  ];

  const stats = [
    {
      icon: <Wifi size={42} />,
      value: "500+",
      label: "Internet Installations",
    },
    {
      icon: <Users size={42} />,
      value: "1200+",
      label: "Satisfied Clients",
    },
    {
      icon: <ShieldCheck size={42} />,
      value: "24/6",
      label: "Customer Support",
    },
    {
      icon: <Network size={42} />,
      value: "99%",
      label: "Network Reliability",
    },
  ];

  const strengths = [
    "Professional Internet Installation",
    "Enterprise Networking Solutions",
    "HD CCTV Surveillance Systems",
    "Electric Fence Installation",
    "Biometric Access Control",
    "Structured Cabling",
    "Reliable Technical Support",
    "Affordable Pricing",
  ];

  return (
    <>
      <NavbarPage />

      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden pt-36 pb-32 bg-gradient-to-br from-[#02143E] via-[#062B78] to-[#0A53C1]">

        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-cyan-400 blur-3xl"></div>

          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-blue-500 blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-flex items-center gap-2 bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 px-6 py-2 rounded-full uppercase tracking-[4px] text-sm font-semibold">

              <Globe size={18} />

              About Ogenix Technologies

            </span>

            <h1 className="text-5xl lg:text-7xl font-black text-white mt-8 leading-tight">
              Delivering Reliable ICT Solutions
              <span className="block text-cyan-300">
                Across Kenya
              </span>
            </h1>

            <p className="mt-8 text-blue-100 text-xl leading-9 max-w-3xl mx-auto">
              Ogenix Technologies is a trusted ICT company specializing in
              Internet Installation, CCTV Surveillance, Electric Fence Systems,
              Access Control, Structured Cabling and Enterprise Networking.
              We help homes and businesses stay connected, protected and productive.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-5 mt-12">

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold px-10 py-4 rounded-xl transition-all duration-300 hover:scale-105"
              >
                Get Free Consultation

                <ArrowRight size={20} />
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-[#041E5A] font-semibold px-10 py-4 rounded-xl transition-all duration-300"
              >
                Explore Services
              </Link>

            </div>

          </motion.div>

        </div>

      </section>
      {/* Company Overview */}
<section className="py-24 bg-white relative overflow-hidden">
  <div className="absolute top-0 right-0 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-70"></div>
  <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-50 rounded-full blur-3xl opacity-70"></div>

  <div className="relative max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* Left Side */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >

        <span className="uppercase tracking-[5px] text-blue-600 font-semibold">
          Who We Are
        </span>

        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mt-5 leading-tight">
          Delivering Modern ICT &
          <span className="text-blue-600"> Security Solutions</span>
        </h2>

        <p className="text-slate-600 leading-9 mt-8">
          Ogenix Technologies is a trusted ICT solutions company based in
          Thika, specializing in high-quality Internet installation,
          CCTV surveillance, networking, structured cabling, electric
          fencing and access control systems.
        </p>

        <p className="text-slate-600 leading-9 mt-6">
          We combine quality equipment, experienced technicians and
          outstanding customer support to deliver secure, scalable and
          future-ready technology solutions for homes, businesses,
          institutions and organizations across Kenya.
        </p>

        <div className="grid sm:grid-cols-2 gap-5 mt-10">

          <div className="flex items-center gap-4 bg-slate-50 rounded-2xl p-5">
            <ShieldCheck className="text-blue-600" size={34} />

            <div>
              <h4 className="font-bold text-slate-900">
                Trusted Solutions
              </h4>

              <p className="text-slate-500 text-sm">
                Reliable & Secure Installations
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-slate-50 rounded-2xl p-5">
            <Award className="text-blue-600" size={34} />

            <div>
              <h4 className="font-bold text-slate-900">
                Quality Service
              </h4>

              <p className="text-slate-500 text-sm">
                Professional Workmanship
              </p>
            </div>
          </div>

        </div>

      </motion.div>

      {/* Right Side */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="grid gap-6"
      >

        {values.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 flex gap-6"
          >

            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white flex items-center justify-center flex-shrink-0 shadow-lg">
              {item.icon}
            </div>

            <div>

              <h3 className="text-2xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="text-slate-600 leading-8 mt-3">
                {item.text}
              </p>

            </div>

          </motion.div>
        ))}

      </motion.div>

    </div>

  </div>
</section>
{/* ================= STATISTICS ================= */}

<section className="py-24 bg-slate-100">

  <div className="max-w-7xl mx-auto px-6">

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >

      <span className="uppercase tracking-[5px] text-blue-600 font-semibold">
        Our Impact
      </span>

      <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mt-5">
        Trusted By Homes & Businesses
      </h2>

      <p className="text-slate-600 mt-6 max-w-3xl mx-auto leading-8">
        Our commitment to quality service, reliable technology and
        customer satisfaction has helped us build lasting relationships
        with clients across Kenya.
      </p>

    </motion.div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {stats.map((stat, index) => (

        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: index * 0.15,
          }}
          whileHover={{
            y: -10,
            scale: 1.03,
          }}
          className="bg-white rounded-3xl shadow-xl p-10 text-center border border-slate-200"
        >

          <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white flex items-center justify-center shadow-lg mb-6">
            {stat.icon}
          </div>

          <h3 className="text-5xl font-black text-slate-900">
            {stat.value}
          </h3>

          <p className="text-slate-500 mt-4 text-lg">
            {stat.label}
          </p>

        </motion.div>

      ))}

    </div>

  </div>

</section>

{/* ================= WHY CHOOSE US ================= */}

<section className="py-24 bg-white">

  <div className="max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-20 items-center">

      {/* Left */}

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >

        <span className="uppercase tracking-[5px] text-blue-600 font-semibold">
          Why Choose Ogenix
        </span>

        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mt-5 leading-tight">
          Technology Solutions Built
          <span className="text-blue-600"> Around Your Needs</span>
        </h2>

        <p className="text-slate-600 leading-9 mt-8">
          We understand that every customer has unique technology
          requirements. That's why we provide customized ICT
          solutions designed to deliver long-term performance,
          reliability and value.
        </p>

        <div className="grid sm:grid-cols-2 gap-5 mt-10">

          {strengths.map((item, index) => (

            <div
              key={index}
              className="flex items-center gap-3"
            >

              <CheckCircle
                size={22}
                className="text-green-600 flex-shrink-0"
              />

              <span className="text-slate-700 font-medium">
                {item}
              </span>

            </div>

          ))}

        </div>

      </motion.div>

      {/* Right */}

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >

        <div className="rounded-[40px] bg-gradient-to-br from-[#031B4E] via-[#062B78] to-[#0A53C1] p-12 shadow-2xl">

          <h3 className="text-3xl font-bold text-white">
            Our Commitment
          </h3>

          <p className="text-blue-100 leading-8 mt-6">
            We don't just install equipment—we build dependable
            technology solutions that keep your home or business
            connected, protected and operating efficiently.
          </p>

          <div className="space-y-6 mt-10">

            <div className="flex items-start gap-4">

              <ShieldCheck
                size={28}
                className="text-cyan-300 mt-1"
              />

              <div>

                <h4 className="text-white font-bold">
                  Quality Equipment
                </h4>

                <p className="text-blue-100 mt-2">
                  We use trusted brands and genuine products for
                  maximum reliability and performance.
                </p>

              </div>

            </div>

            <div className="flex items-start gap-4">

              <Users
                size={28}
                className="text-cyan-300 mt-1"
              />

              <div>

                <h4 className="text-white font-bold">
                  Experienced Team
                </h4>

                <p className="text-blue-100 mt-2">
                  Skilled technicians with years of experience in
                  networking, surveillance and ICT infrastructure.
                </p>

              </div>

            </div>

            <div className="flex items-start gap-4">

              <Award
                size={28}
                className="text-cyan-300 mt-1"
              />

              <div>

                <h4 className="text-white font-bold">
                  Customer Satisfaction
                </h4>

                <p className="text-blue-100 mt-2">
                  We prioritize excellent workmanship, timely
                  delivery and dependable after-sales support.
                </p>

              </div>

            </div>

          </div>

        </div>

      </motion.div>

    </div>

  </div>

</section>
{/* ================= CTA ================= */}

<section className="py-28 bg-gradient-to-r from-[#031B4E] via-[#062B78] to-[#0A53C1] relative overflow-hidden">

  <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>

  <div className="relative max-w-5xl mx-auto px-6 text-center">

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >

      <span className="uppercase tracking-[5px] text-cyan-300 font-semibold">
        Let's Work Together
      </span>

      <h2 className="text-4xl lg:text-6xl font-black text-white mt-6 leading-tight">
        Ready to Upgrade Your
        <span className="block text-cyan-300">
          Technology Infrastructure?
        </span>
      </h2>

      <p className="text-blue-100 text-xl leading-9 mt-8 max-w-3xl mx-auto">
        Whether you need high-speed internet, CCTV surveillance,
        structured networking, electric fencing or access control,
        our experienced team is ready to deliver reliable ICT
        solutions tailored to your needs.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-5 mt-12">

        <Link
          to="/contact"
          className="inline-flex items-center justify-center gap-3 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold px-10 py-4 rounded-xl transition-all duration-300 hover:scale-105"
        >
          Contact Us Today
          <ArrowRight size={20} />
        </Link>

        <Link
          to="/pricing"
          className="inline-flex items-center justify-center gap-3 border-2 border-white text-white hover:bg-white hover:text-[#041E5A] font-semibold px-10 py-4 rounded-xl transition-all duration-300"
        >
          View Internet Packages
        </Link>

      </div>

    </motion.div>

  </div>

</section>

<Footer />
<WhatsAppButton />
<ScrollTop />

    </>
  );
}