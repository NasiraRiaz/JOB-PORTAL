import React, { useState, useEffect } from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaGlobe, FaArrowUp, FaPaperPlane } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [isScrollVisible, setIsScrollVisible] = useState(false);
    const [popup, setPopup] = useState({ show: false, message: '' });

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsScrollVisible(true);
        } else {
            setIsScrollVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const handleNewsletterSubmit = (e) => {
        e.preventDefault();
        setPopup({ show: true, message: 'Thank you for subscribing!' });
        setEmail('');
        setTimeout(() => {
            setPopup({ show: false, message: '' });
        }, 3000);
    };

    return (
        <footer className="site-footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-widget">
                        <h4>CONTACT INFO</h4>
                        <p>Address: 123 Innovation Drive, Tech City</p>
                        <p>Phone: +1 234 567 8900</p>
                        <p>Email: contact@careercanvas.dev</p>
                    </div>
                    <div className="footer-widget">
                        <h4>IMPORTANT LINK</h4>
                        <ul>
                            <li><a href="/jobs">Browse Jobs</a></li>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/testimonials">Testimonials</a></li>
                            <li><a href="/categories">Categories</a></li>
                            <li><a href="/support">Support</a></li>
                        </ul>
                    </div>
                    <div className="footer-widget">
                        <h4>NEWSLETTER</h4>
                        <p>Get the latest job notifications and career insights delivered to your inbox.</p>
                        <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
                            <input
                                type="email"
                                placeholder="Email Address"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button type="submit" aria-label="Subscribe"><FaPaperPlane /></button>
                        </form>
                    </div>
                </div>

                <div className="footer-middle">
                    <div className="footer-stat-item logo-item">
                        <img src={logo} alt="CareerCanvas logo"/>
                        <div className="logo-text">
                            <h4>CareerCanvas</h4>
                            <span>Get your dream job</span>
                        </div>
                    </div>
                    <div className="footer-stat-item">
                        <h3>5000+</h3>
                        <p>Jobs Posted</p>
                    </div>
                    <div className="footer-stat-item">
                        <h3>451</h3>
                        <p>Companies</p>
                    </div>
                    <div className="footer-stat-item">
                        <h3>568</h3>
                        <p>Skilled Hunters</p>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>Copyright ©{new Date().getFullYear()} All rights reserved | Made for your Career by CareerCanvas</p>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                        <a href="/" target="_blank" rel="noopener noreferrer"><FaGlobe /></a>
                    </div>
                </div>
            </div>

            {popup.show &&
                <div className="newsletter-popup">
                    {popup.message}
                </div>
            }

            <button
                onClick={scrollToTop}
                className={`scroll-to-top ${isScrollVisible ? 'visible' : ''}`}
            >
                <FaArrowUp />
            </button>
        </footer>
    );
};

export default Footer;