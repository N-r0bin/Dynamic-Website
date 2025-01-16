import React from "react";
import "../styles/Contact.css";

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <h2>Contact Me</h2>
            <div className="contact-container">
                <div className="contact-info">
                    <h3>Get In Touch</h3>
                    <p>I'd love to hear from you! Whether you have a question or just want to say hi, feel free to drop a message.</p>
                    <p><strong>Email:</strong> yourname@example.com</p>
                    <p><strong>Phone:</strong> phone number</p>
                    <p><strong>Location:</strong> City, Country</p>
                </div>
                <div className="contact-form">
                    <form action="https://formspree.io/f/{FORM_ID}" method="POST">
                        <div className="form-group">
                            <input type="text" name="name" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <input type="email" name="email" placeholder="Your Email" required />
                        </div>
                        <div className="form-group">
                            <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
                        </div>
                        <button type="submit" className="submit-btn">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
