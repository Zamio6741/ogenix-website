import "./../styles/About.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import technician from "../assets/images/technician.jpg";

export default function About() {
  return (
    <section className="about-section">

      <div className="about-container">

        {/* IMAGE */}
        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >

          <img
            src={technician}
            alt="Ogenix Technologies Technician"
          />

        </motion.div>

        {/* CONTENT */}
        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >

          <span>
            ABOUT OGENIX TECHNOLOGIES
          </span>

          <h2>
            Reliable ICT &
            <br />
            Security Solutions
          </h2>

          <p>
            Ogenix Technologies is a professional ICT and security solutions
            company based at <strong>Thika Arcade, Thika</strong>. We provide
            reliable Internet installation, CCTV surveillance, electric fence
            systems, access control, networking and ICT consultancy services
            for homes, businesses, schools and institutions.
          </p>

          <p>
            Our mission is to deliver dependable technology solutions that
            improve connectivity, security and business productivity. Every
            project is completed using quality equipment, skilled technicians
            and a customer-first approach to ensure long-lasting performance
            and complete satisfaction.
          </p>

          <div className="about-features">

            <div className="feature">
              ✓ Professional Installations
            </div>

            <div className="feature">
              ✓ Affordable Internet Packages
            </div>

            <div className="feature">
              ✓ Quality Equipment
            </div>

            <div className="feature">
              ✓ Experienced Technicians
            </div>

            <div className="feature">
              ✓ Fast Response Times
            </div>

            <div className="feature">
              ✓ Reliable Customer Support
            </div>

          </div>

          <Link
            to="/about"
            className="about-btn"
          >
            Learn More About Us
          </Link>

        </motion.div>

      </div>

    </section>
  );
}