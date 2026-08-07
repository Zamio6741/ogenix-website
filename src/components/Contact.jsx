import "./../styles/Contact.css";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
} from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="contact reveal">

      <div className="contact-header">

        <span>VISIT & CONTACT US</span>

        <h2>We're Ready to Help</h2>

        <p>
          Visit our office, give us a call, send us an email or reach us on
          WhatsApp. Our team is always ready to provide reliable ICT solutions
          for homes and businesses across Kenya.
        </p>

      </div>

      <div className="contact-container">

        {/* Contact Details */}
        <div className="contact-info">

          <div className="info-card">
            <Phone size={24} />
            <div>
              <h3>Phone</h3>
              <p>+254 110 405 854</p>
            </div>
          </div>

          <div className="info-card">
            <Mail size={24} />
            <div>
              <h3>Email</h3>
              <p>info@ogenix.co.ke</p>
            </div>
          </div>

          <div className="info-card">
            <MapPin size={24} />
            <div>
              <h3>Office Location</h3>
              <p>Thika Town, Kiambu County</p>
            </div>
          </div>

          <div className="info-card">
            <Clock size={24} />
            <div>
              <h3>Business Hours</h3>
              <p>Open 24/6 (Closed on Saturdays)</p>
            </div>
          </div>

          <div className="info-card">
            <ShieldCheck size={24} />
            <div>
              <h3>Warranty</h3>
              <p>6 Months on Installations</p>
            </div>
          </div>

        </div>

        {/* Map */}
        <div className="contact-map">

          <iframe
            title="Ogenix Technologies Location"
            src="https://www.google.com/maps?q=Thika%20Town,%20Kenya&output=embed"
            width="100%"
            height="100%"
            style={{
              border: 0,
              borderRadius: "20px",
            }}
            loading="lazy"
            allowFullScreen
          ></iframe>

        </div>

      </div>

    </section>
  );
}