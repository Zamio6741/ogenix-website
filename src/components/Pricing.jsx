import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const packages = [
  {
    speed: "7 Mbps",
    price: "KSh 1,500",
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
    price: "KSh 2,000",
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
    price: "KSh 3,000",
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

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-28 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <span className="uppercase tracking-[5px] text-blue-600 font-semibold">
            Internet Packages
          </span>

          <h2 className="text-5xl font-bold text-slate-900 mt-4">
            Affordable Fibre Internet Plans
          </h2>

          <p className="text-slate-500 mt-5 max-w-2xl mx-auto leading-8">
            Stay connected with reliable, high-speed internet designed
            for homes, businesses, schools and institutions.
            Choose the package that best suits your needs.
          </p>

        </div>

        {/* Packages */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {packages.map((pkg, index) => (

            <div
              key={index}
              className={`relative rounded-3xl p-8 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl ${
                pkg.popular
                  ? "bg-gradient-to-br from-blue-700 to-cyan-500 text-white scale-105"
                  : "bg-white shadow-lg"
              }`}
            >

              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black px-5 py-2 rounded-full font-bold text-sm">
                  MOST POPULAR
                </div>
              )}

              <h3 className="text-3xl font-bold">
                {pkg.speed}
              </h3>

              <div className="mt-6">

                <span className="text-5xl font-black">
                  {pkg.price}
                </span>

                <span className="block mt-2 opacity-80">
                  per month
                </span>

              </div>

              <div className="mt-10 space-y-5">

                {pkg.features.map((feature, i) => (

                  <div
                    key={i}
                    className="flex items-center gap-3"
                  >

                    <CheckCircle
                      size={20}
                      className={
                        pkg.popular
                          ? "text-white"
                          : "text-green-600"
                      }
                    />

                    <span>{feature}</span>

                  </div>

                ))}

              </div>

              <Link
                to="/contact"
                className={`block w-full mt-10 py-4 rounded-xl font-semibold text-center transition ${
                  pkg.popular
                    ? "bg-white text-blue-700 hover:bg-slate-100"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                Get Connected
              </Link>

            </div>

          ))}

        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center">

          <p className="text-slate-600 text-lg">
            Need a custom internet solution for your business,
            apartment, school or institution?
          </p>

          <p className="text-slate-500 mt-2">
            Contact Ogenix Technologies today for a personalized
            internet package tailored to your connectivity needs.
          </p>

          <Link
            to="/contact"
            className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition"
          >
            Request a Custom Quote
          </Link>

        </div>

      </div>
    </section>
  );
}