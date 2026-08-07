import { motion } from "framer-motion";
import { Star, BadgeCheck } from "lucide-react";

const reviews = [
  {
    name: "James Mwangi",
    role: "Home Owner",
    review:
      "Excellent fibre installation. The technicians were punctual, professional and the connection has remained fast and stable ever since.",
    rating: 5,
  },
  {
    name: "Grace Wanjiku",
    role: "Business Owner",
    review:
      "Our CCTV installation was completed within a day. Very neat workmanship and excellent customer service.",
    rating: 5,
  },
  {
    name: "Brian Otieno",
    role: "Office Manager",
    review:
      "Ogenix redesigned our office network and Wi-Fi coverage. The improvement in performance was immediate.",
    rating: 5,
  },
  {
    name: "Faith Njeri",
    role: "Restaurant Owner",
    review:
      "Fast installation and outstanding support. Our surveillance system has been working flawlessly.",
    rating: 5,
  },
  {
    name: "David Kimani",
    role: "School Director",
    review:
      "Professional networking solution delivered on schedule. Highly recommended for institutions.",
    rating: 5,
  },
];

const slider = [...reviews, ...reviews];

export default function Testimonials() {
  return (
    <section
      id="reviews"
      className="py-28 bg-gradient-to-b from-white to-slate-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        {/* Heading */}

<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="text-center mb-16"
>
  <span className="uppercase tracking-[5px] text-blue-600 font-semibold">
    Testimonials
  </span>

  <h2 className="text-5xl font-bold text-slate-900 mt-4">
    What Our Clients Say
  </h2>

  <p className="text-slate-500 mt-5 max-w-2xl mx-auto leading-8">
    We take pride in delivering reliable ICT solutions backed by
    professional service, quality workmanship and responsive support.
  </p>
</motion.div>

      </div>

      {/* Auto Slider */}
      <motion.div
        className="flex gap-8 w-max"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      >

        {slider.map((review, index) => (

          <div
            key={index}
            className="w-[390px] bg-white rounded-3xl shadow-xl p-8 border border-slate-100 hover:-translate-y-2 transition duration-300"
          >

            {/* Customer Name */}
            <div className="flex items-center justify-between">

              <div>

                <h3 className="font-bold text-xl text-slate-900">
                  {review.name}
                </h3>

                <p className="text-slate-500 text-sm mt-1">
                  {review.role}
                </p>

              </div>

              <BadgeCheck
                size={26}
                className="text-green-600"
              />

            </div>

            {/* Rating */}
            <div className="flex gap-1 my-6">
              {[...Array(review.rating)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className="fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>

            {/* Review */}
            <p className="text-slate-600 leading-8 italic">
              "{review.review}"
            </p>

            {/* Footer */}
            <div className="flex items-center gap-2 mt-8 text-green-600 font-semibold">

              <BadgeCheck size={20} />

              Verified Customer

            </div>

          </div>

        ))}

      </motion.div>

    </section>
  );
}