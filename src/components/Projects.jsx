import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import Lightbox from "./Lightbox";

const projects = [
  {
    image: "/project1.jpg",
    category: "Internet",
    title: "Home Fibre Internet Installation",
    location: "Thika",
  },
  {
    image: "/project2.jpg",
    category: "CCTV",
    title: "Business CCTV Surveillance System",
    location: "Thika",
  },
  {
    image: "/project3.jpg",
    category: "Networking",
    title: "Office Network Infrastructure Setup",
    location: "Thika",
  },
  {
    image: "/project4.jpg",
    category: "Electric Fence",
    title: "Residential Electric Fence Installation",
    location: "Kiambu County",
  },
  {
    image: "/project5.jpg",
    category: "Access Control",
    title: "Biometric Access Control Installation",
    location: "Thika",
  },
  {
    image: "/project6.jpg",
    category: "Internet",
    title: "Apartment Wi-Fi Deployment",
    location: "Thika",
  },
  {
    image: "/project7.jpg",
    category: "CCTV",
    title: "School CCTV Security Upgrade",
    location: "Kiambu County",
  },
  {
    image: "/project8.jpg",
    category: "Networking",
    title: "Structured Cabling & Network Setup",
    location: "Thika",
  },
];

const filters = [
  "All",
  "Internet",
  "CCTV",
  "Networking",
  "Electric Fence",
  "Access Control",
];

export default function Projects() {
  const [current, setCurrent] = useState(null);
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <>
      <section
        id="projects"
        className="py-28 bg-gradient-to-b from-slate-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-14"
          >
            <span className="uppercase tracking-[5px] text-blue-600 font-semibold">
              Recent Projects
            </span>

            <h2 className="text-5xl font-bold text-slate-900 mt-4">
              Our Latest Installations
            </h2>

            <p className="text-slate-500 mt-5 max-w-2xl mx-auto">
              We take pride in delivering professional ICT installations for
              homes, businesses and institutions. Here are some of our recent
              completed projects.
            </p>
          </motion.div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {filters.map((item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={`px-6 py-3 rounded-full font-semibold transition ${
                  filter === item
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-slate-100 text-slate-700 hover:bg-blue-100"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => {
              const originalIndex = projects.findIndex(
                (p) => p.image === project.image
              );

              return (
                <motion.div
                  key={project.image}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                  whileHover={{ y: -10 }}
                  className="group cursor-pointer overflow-hidden rounded-3xl bg-white shadow-xl"
                  onClick={() => setCurrent(originalIndex)}
                >
                  <div className="relative overflow-hidden">

                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      fetchPriority="low"
                      className="w-full h-80 object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end">

                      <div className="p-8 w-full">

                        <span className="inline-block bg-blue-600 text-white text-sm px-4 py-2 rounded-full mb-4">
                          {project.category}
                        </span>

                        <h3 className="text-white text-2xl font-bold">
                          {project.title}
                        </h3>

                        <div className="flex items-center gap-2 mt-3 text-gray-300">
                          <MapPin size={18} />
                          <span>{project.location}</span>
                        </div>

                        <div className="mt-5 flex items-center gap-2 text-cyan-300 font-semibold group-hover:gap-4 transition-all">
                          View Installation
                          <ArrowUpRight size={20} />
                        </div>

                      </div>

                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="flex justify-center mt-16">
            <Link
              to="/projects"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition"
            >
              View Our Portfolio
            </Link>
          </div>

        </div>
      </section>

      <Lightbox
        images={projects}
        current={current}
        setCurrent={setCurrent}
        close={() => setCurrent(null)}
      />
    </>
  );
}