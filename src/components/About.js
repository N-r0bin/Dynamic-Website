import React from "react";
import "../styles/About.css";
import illustration from "../assets/images/img4.png";

const About = () => {
    return (
        <section id="about">
            <div className="about-content">
                <div className="about-text">
                    <h2>About Us</h2>
                    <p>
                        We specialize in delivering modern and responsive web designs to bring your ideas to life.
                        Our mission is to create stunning and user-friendly solutions tailored to your needs.
                    </p>
                </div>
                <div className="about-graphic">
                    <img
                        src={illustration}
                        alt="Creative Illustration"
                        className="about-image"
                    />
                    <p className="author-attribution">
                        <a href="https://pngtree.com" target="_blank" rel="noopener noreferrer">
                            Image by pngtree.com
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
