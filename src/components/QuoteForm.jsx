import { useState } from "react";
import { Send } from "lucide-react";

export default function QuoteForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    location: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendWhatsApp = () => {
    const phone = "254110405854";

    const text = `Hello Ogenix Technologies,

My Name: ${form.name}

Phone: ${form.phone}

Email: ${form.email}

Service Required: ${form.service}

Location: ${form.location}

Message:
${form.message}

Thank you.`;

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <section
      id="quote"
      className="py-24 bg-gradient-to-br from-slate-100 via-white to-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="uppercase tracking-[5px] text-blue-600 font-semibold">
            Free Quote
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mt-4">
            Request a Free Quotation
          </h2>

          <p className="text-slate-500 mt-5 max-w-2xl mx-auto">
            Tell us about your project and we'll contact you through
            WhatsApp with a free quotation.
          </p>
        </div>

        {/* Main Card */}
        <div className="grid lg:grid-cols-5 overflow-hidden rounded-3xl bg-white shadow-2xl">

          {/* Left Panel */}
          <div className="lg:col-span-2 bg-gradient-to-br from-[#041E5A] via-[#0A53C1] to-cyan-600 p-10 text-white">

            <span className="uppercase tracking-[4px] text-cyan-300 font-semibold">
              Why Choose Ogenix
            </span>

            <h3 className="text-4xl font-bold mt-4 leading-tight">
              Let's Build Your ICT Solution
            </h3>

            <p className="mt-6 text-blue-100 leading-8">
              Whether you need Internet Installation, CCTV,
              Electric Fence, Networking or Access Control,
              our experienced technicians are ready to help.
            </p>

            <div className="space-y-8 mt-12">

              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center text-2xl">
                  📞
                </div>

                <div>
                  <h4 className="font-semibold text-lg">
                    Call Us
                  </h4>

                  <p className="text-blue-200">
                    +254 110 405 854
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center text-2xl">
                  📍
                </div>

                <div>
                  <h4 className="font-semibold text-lg">
                    Location
                  </h4>

                  <p className="text-blue-200">
                    Thika Town, Kiambu County
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center text-2xl">
                  ⏰
                </div>

                <div>
                  <h4 className="font-semibold text-lg">
                    Working Hours
                  </h4>

                  <p className="text-blue-200">
                    Monday - Friday
                  </p>

                  <p className="text-blue-200">
                    8:00 AM - 6:00 PM
                  </p>
                </div>
              </div>

              <div className="mt-10 rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
                <h4 className="font-semibold text-xl">
                  ✔ Fast Response
                </h4>

                <p className="mt-2 text-blue-100">
                  Most enquiries are answered within a few minutes
                  during working hours.
                </p>
              </div>

            </div>

          </div>

          {/* Form */}
          <div className="lg:col-span-3 p-10">

            <div className="grid md:grid-cols-2 gap-6">

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-300 bg-gray-50 p-4 outline-none transition focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-200"
              />

              <input
                type="tel"
                name="phone"
                placeholder="+254..."
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-300 bg-gray-50 p-4 outline-none transition focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-200"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-300 bg-gray-50 p-4 outline-none transition focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-200"
              />

              <select
                name="service"
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-300 bg-gray-50 p-4 outline-none transition focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-200"
              >
                <option value="">Select Service</option>
                <option>Internet Installation</option>
                <option>CCTV Installation</option>
                <option>Electric Fence Installation</option>
                <option>Networking</option>
                <option>Access Control Systems</option>
                <option>ICT Consultancy</option>
              </select>

              <input
                type="text"
                name="location"
                placeholder="Your Location"
                onChange={handleChange}
                className="md:col-span-2 w-full rounded-xl border border-gray-300 bg-gray-50 p-4 outline-none transition focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-200"
              />

              <textarea
                rows="6"
                name="message"
                placeholder="Tell us about your project..."
                onChange={handleChange}
                className="md:col-span-2 w-full rounded-xl border border-gray-300 bg-gray-50 p-4 outline-none transition focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-200"
              />

            </div>

            <button
              onClick={sendWhatsApp}
              className="mt-8 w-full rounded-xl bg-green-600 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-green-700 hover:shadow-xl flex items-center justify-center gap-3"
            >
              <Send size={22} />
              Send via WhatsApp
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}