import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
} from "lucide-react";

import NavbarPage from "../components/NavbarPage";
import Footer from "../components/Footer";
import QuoteForm from "../components/QuoteForm";
import WhatsAppButton from "../components/WhatsAppButton";
import ScrollTop from "../components/ScrollTop";

export default function ContactPage() {
  return (
    <>
      <NavbarPage />

      {/* Hero */}
      <section className="pt-36 pb-24 bg-gradient-to-br from-[#031B4E] via-[#062B78] to-[#0A53C1]">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="uppercase tracking-[5px] text-cyan-300 font-semibold"
          >
            Contact Ogenix Technologies
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-7xl font-black text-white mt-6"
          >
            Let's Talk About
            <br />
            Your Project
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .3 }}
            className="text-blue-100 text-xl max-w-3xl mx-auto mt-8 leading-9"
          >
            Need Internet Installation, CCTV, Electric Fence,
            Access Control or Networking solutions?
            We'd love to hear from you.
          </motion.p>

        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
              <Phone
                className="mx-auto text-blue-600 mb-5"
                size={42}
              />

              <h3 className="text-2xl font-bold mb-3">
                Call Us
              </h3>

              <p className="text-slate-600">
                +254 110 405 854
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
              <Mail
                className="mx-auto text-blue-600 mb-5"
                size={42}
              />

              <h3 className="text-2xl font-bold mb-3">
                Email
              </h3>

              <p className="text-slate-600 break-all">
                info@ogenix.co.ke
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
              <MapPin
                className="mx-auto text-blue-600 mb-5"
                size={42}
              />

              <h3 className="text-2xl font-bold mb-3">
                Office
              </h3>

              <p className="text-slate-600">
                Thika Town,
                <br />
                Kiambu County
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
              <Clock
                className="mx-auto text-blue-600 mb-5"
                size={42}
              />

              <h3 className="text-2xl font-bold mb-3">
                Working Hours
              </h3>

              <p className="text-slate-600">
                Open 24/6
                <br />
                Closed Saturdays
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Quote Form */}
      <QuoteForm />

      {/* Extra Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <MessageCircle
            className="mx-auto text-blue-600 mb-6"
            size={55}
          />

          <h2 className="text-4xl font-bold text-slate-900">
            Fast Response Guaranteed
          </h2>

          <p className="text-slate-600 mt-6 text-lg leading-8">
            Once you submit your quotation request, it opens
            directly in WhatsApp with all your project details
            already filled in, allowing our team to respond
            quickly and accurately.
          </p>

        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <ScrollTop />
    </>
  );
}