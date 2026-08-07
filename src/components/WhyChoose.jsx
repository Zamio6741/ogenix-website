import {
  Award,
  Clock3,
  ShieldCheck,
  Headphones,
} from "lucide-react";

const features = [
  {
    icon: <Award size={40} />,
    title: "Experienced Professionals",
    text: "Our skilled technicians deliver high-quality ICT and security solutions with attention to detail and industry best practices.",
  },
  {
    icon: <Clock3 size={40} />,
    title: "Fast Response",
    text: "From consultation to installation, we respond quickly and work efficiently to keep your projects on schedule.",
  },
  {
    icon: <ShieldCheck size={40} />,
    title: "Quality & Reliability",
    text: "We use trusted equipment and proven installation methods to deliver dependable performance and long-lasting reliability.",
  },
  {
    icon: <Headphones size={40} />,
    title: "Professional Support",
    text: "Our dedicated support team is available during business hours to assist with maintenance, troubleshooting and technical guidance.",
  },
];

export default function WhyChoose() {
  return (
    <section
      id="why"
      className="py-28 bg-[#041E5A] text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <span className="uppercase tracking-[5px] text-cyan-400 font-semibold">
            Why Choose Ogenix Technologies
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Trusted ICT & Security Solutions
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-blue-100 leading-8">
            At Ogenix Technologies, we are committed to providing reliable,
            innovative and cost-effective ICT solutions that help homes,
            businesses, schools and institutions stay connected, secure and
            productive.
          </p>

        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-cyan-400 hover:bg-white/10 transition-all duration-500 hover:-translate-y-3 shadow-lg"
            >
              <div className="w-20 h-20 rounded-2xl bg-cyan-500 flex items-center justify-center mb-6 group-hover:rotate-6 group-hover:scale-110 transition-all duration-500">

                {feature.icon}

              </div>

              <h3 className="text-2xl font-semibold mb-4">

                {feature.title}

              </h3>

              <p className="text-blue-100 leading-8">

                {feature.text}

              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}