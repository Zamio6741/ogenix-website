import { motion } from "framer-motion";
import { MapPin, ArrowUpRight } from "lucide-react";

import NavbarPage from "../components/NavbarPage";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import ScrollTop from "../components/ScrollTop";

const projects = [
  {
    image: "/project1.jpg",
    title: "Residential Fibre Installation",
    category: "Internet Installation",
  },
  {
    image: "/project2.jpg",
    title: "Commercial CCTV Installation",
    category: "CCTV",
  },
  {
    image: "/project3.jpg",
    title: "Office Network Deployment",
    category: "Networking",
  },
  {
    image: "/project4.jpg",
    title: "Electric Fence Installation",
    category: "Electric Fence",
  },
  {
    image: "/project5.jpg",
    title: "Biometric Access Control",
    category: "Access Control",
  },
  {
    image: "/project6.jpg",
    title: "Apartment Wi-Fi Installation",
    category: "Internet",
  },
  {
    image: "/project7.jpg",
    title: "School CCTV Deployment",
    category: "CCTV",
  },
  {
    image: "/project8.jpg",
    title: "Structured Network Cabling",
    category: "Networking",
  },
];

export default function ProjectsPage() {
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
            Our Portfolio
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-7xl font-black text-white mt-5"
          >
            Projects We've
            <br />
            Successfully Delivered
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-blue-100 text-xl mt-8 max-w-3xl mx-auto leading-9"
          >
            Explore a selection of internet, CCTV, networking,
            access control and electric fence installations completed
            by Ogenix Technologies across Kenya.
          </motion.p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -10 }}
                className="group overflow-hidden rounded-3xl bg-white shadow-xl"
              >
              <div className="relative overflow-hidden">

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-6">
                    <div>
                      <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm">
                        {project.category}
                      </span>

                      <h3 className="text-white text-2xl font-bold mt-4">
                        {project.title}
                      </h3>

                      <div className="flex items-center gap-2 mt-4 text-cyan-300 font-semibold">
                        View Installation
                        <ArrowUpRight size={18} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-slate-500 mb-3">
                    <MapPin size={18} />
                    {project.location}
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-slate-600 leading-7">
                    Professional installation completed by our
                    experienced technicians using quality equipment
                    and industry best practices.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
            {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-[#031B4E] to-[#0A53C1]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-white">
            Ready To Start Your Project?
          </h2>

          <p className="text-blue-100 text-xl mt-6 leading-9">
            Whether it's internet installation, CCTV, networking,
            electric fencing or access control, our team is ready
            to deliver professional results.
          </p>

          <a
            href="/contact"
            className="inline-block mt-10 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold px-10 py-4 rounded-xl transition duration-300 hover:scale-105"
          >
            Request a Free Quote
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <ScrollTop />
    </>
  );
}