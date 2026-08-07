import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import NavbarPage from "../components/NavbarPage";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import ScrollTop from "../components/ScrollTop";

const packages = [
  {
    speed: "7 Mbps",
    price: "KES 1,500",
    popular: false,
    features: [
      "Unlimited Internet",
      "Perfect for Browsing & Streaming",
      "Home & Small Office Use",
      "Professional Installation",
      "24/6 Technical Support",
    ],
  },
  {
    speed: "12 Mbps",
    price: "KES 2,000",
    popular: true,
    features: [
      "Unlimited Internet",
      "HD Streaming",
      "Online Classes & Meetings",
      "Multiple Connected Devices",
      "Priority Technical Support",
    ],
  },
  {
    speed: "17 Mbps",
    price: "KES 3,000",
    popular: false,
    features: [
      "Unlimited Internet",
      "Ultra-Fast Downloads",
      "4K Streaming",
      "Gaming & Business Ready",
      "Premium Support",
    ],
  },
];

export default function PricingPage() {
  return (
    <>
      <NavbarPage />

      {/* Hero */}
      <section className="pt-36 pb-24 bg-gradient-to-br from-[#031B4E] via-[#062B78] to-[#0A53C1]">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="uppercase tracking-[5px] text-cyan-300 font-semibold"
          >
            Internet Packages
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-7xl font-black text-white mt-5"
          >
            Affordable Internet
            <br />
            For Everyone
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-blue-100 text-xl mt-8 max-w-3xl mx-auto leading-9"
          >
            Choose the internet package that best suits your home,
            business, school or institution. Enjoy reliable
            high-speed connectivity, affordable pricing and
            professional installation by Ogenix Technologies.
          </motion.p>

        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

            {packages.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -10,
                }}
                className={`relative rounded-3xl overflow-hidden shadow-xl ${
                  item.popular
                    ? "bg-blue-600 text-white scale-105"
                    : "bg-white"
                }`}
              >

                {item.popular && (
                  <div className="absolute top-5 right-5 bg-cyan-400 text-slate-900 text-xs font-bold px-3 py-1 rounded-full">
                    MOST POPULAR
                  </div>
                )}

                <div className="p-10">

                  <h3
                    className={`text-3xl font-bold ${
                      item.popular
                        ? "text-white"
                        : "text-slate-900"
                    }`}
                  >
                    {item.speed}
                  </h3>

                  <div
                    className={`text-5xl font-black mt-6 ${
                      item.popular
                        ? "text-white"
                        : "text-blue-600"
                    }`}
                  >
                    {item.price}
                  </div>

                  <p
                    className={`mt-2 ${
                      item.popular
                        ? "text-blue-100"
                        : "text-slate-500"
                    }`}
                  >
                    Per Month
                  </p>

                  <div className="mt-10 space-y-5">
                                        {item.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3"
                      >
                        <Check
                          size={18}
                          className={
                            item.popular
                              ? "text-cyan-300"
                              : "text-green-600"
                          }
                        />

                        <span>{feature}</span>
                      </div>
                    ))}

                  </div>

                  <Link
                    to="/contact"
                    className={`mt-10 flex items-center justify-center gap-2 py-4 rounded-xl font-semibold transition ${
                      item.popular
                        ? "bg-white text-blue-700 hover:bg-slate-100"
                        : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}
                  >
                    Get Connected
                    <ArrowRight size={18} />
                  </Link>

                </div>

              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold text-slate-900">
            Need a Custom Internet Solution?
          </h2>

          <p className="text-slate-600 text-xl mt-6 leading-9">
            Whether you're connecting your home, business,
            apartment, school or institution, we'll recommend
            the right fibre package for your needs and budget.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 mt-10 bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-semibold transition"
          >
            Request a Free Quote
            <ArrowRight size={18} />
          </Link>

        </div>
      </section>
            <Footer />
      <WhatsAppButton />
      <ScrollTop />
    </>
  );
}