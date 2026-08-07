import { Wifi, Users, ShieldCheck, Award } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    icon: Wifi,
    number: "500+",
    title: "Internet Installations",
  },
  {
    icon: Users,
    number: "800+",
    title: "Satisfied Clients",
  },
  {
    icon: ShieldCheck,
    number: "6+",
    title: "ICT Services Offered",
  },
  {
    icon: Award,
    number: "5+",
    title: "Years of Combined Experience",
  },
];

export default function Stats() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#031B4E] via-[#062B78] to-[#0A53C1]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="uppercase tracking-[5px] text-cyan-300 font-semibold">
            Our Impact
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4">
            Numbers That Speak for Themselves
          </h2>

          <p className="text-blue-100 mt-5 max-w-2xl mx-auto leading-8 text-lg">
            From reliable internet connectivity to advanced security
            systems, Ogenix Technologies continues to deliver professional
            ICT solutions for homes, businesses, schools and institutions
            across Kenya.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="
                  bg-white/10
                  backdrop-blur-xl
                  rounded-3xl
                  p-10
                  text-center
                  border
                  border-white/20
                  shadow-2xl
                  hover:border-cyan-400/50
                  transition-all
                  duration-300
                "
              >

                {/* Icon */}
                <div className="flex justify-center text-cyan-300 mb-6">
                  <Icon size={42} strokeWidth={1.8} />
                </div>

                {/* Number */}
                <h3 className="text-5xl font-black text-white mb-3">
                  {stat.number}
                </h3>

                {/* Title */}
                <p className="text-blue-100 text-lg">
                  {stat.title}
                </p>

              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}