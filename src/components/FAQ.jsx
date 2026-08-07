import { useState } from "react";
import "./../styles/FAQ.css";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How long does internet installation take?",
    answer:
      "Most internet installations are completed within 24–48 hours after site assessment and confirmation, depending on your location and infrastructure availability.",
  },
  {
    question: "What internet packages do you offer?",
    answer:
      "We currently offer 7 Mbps (KSh 1,500/month), 12 Mbps (KSh 2,000/month) and 17 Mbps (KSh 3,000/month), all with reliable high-speed connectivity for homes and businesses.",
  },
  {
    question: "Do you install CCTV systems for businesses and homes?",
    answer:
      "Yes. We install professional CCTV surveillance systems for homes, offices, schools, apartments, shops and commercial premises using trusted brands and quality equipment.",
  },
  {
    question: "Do you provide networking and structured cabling services?",
    answer:
      "Absolutely. We design, install and maintain LAN, Wi-Fi, structured cabling, routers, switches and complete networking solutions for organizations and residential properties.",
  },
  {
    question: "Can you install electric fences and access control systems?",
    answer:
      "Yes. We provide electric fence installation, biometric access control, fingerprint systems, RFID access, face recognition systems and smart security solutions.",
  },
  {
    question: "Where is your office located?",
    answer:
      "Our office is located at Thika Arcade, Thika, Kenya.",
  },
  {
    question: "What are your working hours?",
    answer:
      "Monday to Friday: 8:00 AM – 4:00 PM. Sunday: 8:00 AM – 12:00 PM. We remain closed on Saturdays.",
  },
  {
    question: "How can I contact Ogenix Technologies?",
    answer:
      "You can reach us by phone at 0794 435 466, email us at ogenixtechnologies@gmail.com, submit a quotation request through our website or chat with us via WhatsApp.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState(null);

  return (
    <section id="faq" className="faq reveal">
      <div className="faq-header">
        <span>FAQ</span>
        <h2>Frequently Asked Questions</h2>

        <p>
          Find quick answers to the most common questions about our
          internet services, security systems and ICT solutions.
        </p>
      </div>

      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            <button
              className="faq-question"
              onClick={() =>
                setActive(active === index ? null : index)
              }
            >
              {faq.question}

              <ChevronDown
                className={active === index ? "rotate" : ""}
              />
            </button>

            {active === index && (
              <div className="faq-answer">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}