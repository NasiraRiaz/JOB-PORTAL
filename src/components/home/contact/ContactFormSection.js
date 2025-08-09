import React, { useState } from 'react';
import './ContactFormSection.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaFax, FaEnvelope } from 'react-icons/fa';

const contactInfoData = [
    { icon: <FaMapMarkerAlt />, title: "Our Main Office", lines: ["SoHo 94 Broadway St New York, NY 1001"] },
    { icon: <FaPhoneAlt />, title: "Phone Number", lines: ["234-9876-5400", "888-0123-4567 (Toll Free)"] },
    { icon: <FaFax />, title: "Fax", lines: ["1-234-567-8900"] },
    { icon: <FaEnvelope />, title: "Email", lines: ["contact@careercanvas.dev"] }
];

const ContactFormSection = () => {
    // --- STATE CHANGES START HERE ---
    const initialFormState = { name: '', email: '', message: '' };
    const [formData, setFormData] = useState(initialFormState);
    const [popup, setPopup] = useState({ show: false, message: '' });

    // A single handler to update the form data state
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setPopup({ show: true, message: 'Your message has been sent!' });
        setFormData(initialFormState); // Reset the form fields to empty

        setTimeout(() => {
            setPopup({ show: false, message: '' });
        }, 3000);
    };
    // --- STATE CHANGES END HERE ---

    return (
        <section className="contact-page-wrapper">
            <div className="container">
                <div className="contact-info-boxes">
                    {contactInfoData.map((item, index) => (
                        <div className="info-box" key={index}>
                            <div className="info-icon">{item.icon}</div>
                            <h4>{item.title}</h4>
                            {item.lines.map((line, i) => <p key={i}>{line}</p>)}
                        </div>
                    ))}
                </div>

                <div className="contact-form-container">
                    <h2>Contact Us</h2>
                    {/* --- FORM CHANGES START HERE --- */}
                    <form onSubmit={handleFormSubmit}>
                        <input
                            name="name"
                            type="text"
                            placeholder="Enter your Name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <input
                            name="email"
                            type="email"
                            placeholder="Enter a valid email address"
                            required
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <textarea
                            name="message"
                            placeholder="Enter your message"
                            rows="6"
                            required
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                        <button type="submit">SUBMIT</button>
                    </form>
                    {/* --- FORM CHANGES END HERE --- */}
                </div>
            </div>

            {popup.show &&
                <div className="contact-popup">
                    {popup.message}
                </div>
            }
        </section>
    );
};

export default ContactFormSection;