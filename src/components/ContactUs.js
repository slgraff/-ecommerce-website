import React from 'react';
import { Phone, Mail, MapPin, ArrowRight } from 'react-feather';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './ContactUs.css'; // Ensure this import is correct

const ContactUs = () => {
  return (
    <div className="full-page-background">
      <div className="contact-us-container">
        <h1>Contact Us</h1>
        <div className="contact-info">
          <div className="contact-item">
            <Phone size={24} />
            <p>(123) 456-7890</p>
          </div>
          <div className="contact-item">
            <Mail size={24} />
            <p>example@gmail.com</p>
          </div>
          <div className="contact-item">
            <MapPin size={24} />
            <p>1234 Street Name, City, Country</p>
          </div>
        </div>

        {/* Button with arrow */}
        <Link to="/user-dashboard" className="navigate-button">
          Go to Dashboard <ArrowRight size={20} />
        </Link>
      </div>
    </div>
  );
};

export default ContactUs;
