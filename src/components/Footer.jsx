import "./../styles/Footer.css";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Company */}
        <div className="footer-column">

          <h3>Ogenix Technologies</h3>

          <p>
            Ogenix Technologies provides professional Internet Installation,
            CCTV Surveillance, Electric Fence Systems, Access Control,
            Networking and ICT Consultancy services for homes, businesses,
            schools and institutions across Kenya.
          </p>

          <div className="footer-social">

            <a
              href="https://www.tiktok.com/@ogenixtechnologies"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok />
            </a>

            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaLinkedinIn />
            </a>

          </div>

        </div>


        {/* Services */}
        <div className="footer-column">

          <h4>Our Services</h4>

          <ul>
            <li>Internet Installation</li>
            <li>CCTV Installation</li>
            <li>Electric Fence Systems</li>
            <li>Access Control</li>
            <li>Networking Solutions</li>
            <li>ICT Consultancy</li>
          </ul>

        </div>


        {/* Quick Links */}
        <div className="footer-column">

          <h4>Quick Links</h4>

          <ul>
            <li>
              <a href="#about">About Us</a>
            </li>

            <li>
              <a href="#services">Services</a>
            </li>

            <li>
              <a href="#pricing">Internet Packages</a>
            </li>

            <li>
              <a href="#projects">Projects</a>
            </li>

            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>

        </div>


        {/* Contact */}
        <div className="footer-column">

          <h4>Contact Information</h4>

          <div className="footer-contact">

            <p>
              <Phone size={18} />
              +254 794 435 466
            </p>

            <p>
              <Mail size={18} />
              ogenixtechnologies@gmail.com
            </p>

            <p>
              <MapPin size={18} />
              Thika Arcade, Thika
            </p>

            <p>
              <Clock size={18} />
              Mon - Fri: 8:00 AM - 4:00 PM
            </p>

            <p className="footer-indent">
              Sun: 8:00 AM - 12:00 PM
            </p>

            <p className="footer-indent">
              Saturday: Closed
            </p>

          </div>

        </div>

      </div>


      {/* Copyright */}
      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} Ogenix Technologies. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}