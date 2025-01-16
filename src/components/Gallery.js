import React from "react";
import "../styles/Gallery.css";
import { openLightbox } from "../lightbox.js";

const Gallery = () => {
    const images = [
        {
            src: require("../assets/images/img1.jpg"),
            author: "Designed by Zirconicusso",
            link: "http://www.freepik.com",
        },
        {
            src: require("../assets/images/img2.jpg"),
            author: "Designed by macrovector_official",
            link: "http://www.freepik.com",
        },
        {
            src: require("../assets/images/img3.jpg"),
            author: "Designed by Freepik",
            link: "http://www.freepik.com",
        },
        {
            src: require("../assets/images/img1.jpg"),
            author: "Designed by Zirconicusso ",
            link: "http://www.freepik.com",
        },
        {
            src: require("../assets/images/img2.jpg"),
            author: "Designed by macrovector_official",
            link: "http://www.freepik.com",
        },
        {
            src: require("../assets/images/img3.jpg"),
            author: "Designed by Freepik",
            link: "http://www.freepik.com",
        },
    ];

    return (
        <section id="gallery" className="gallery-section">
            <h2>Image Gallery</h2>
            <div className="gallery">
                {images.map((image, index) => (
                    <div key={index} className="gallery-item">
                        <div className="image-wrapper">
                            <img
                                src={image.src}
                                alt={`Gallery Image ${index + 1}`}
                                onClick={() => openLightbox(image.src)}
                            />
                        </div>
                        <p className="author-attribution">
                            <a href={image.link} target="_blank" rel="noopener noreferrer">
                                {image.author}
                            </a>
                        </p>
                    </div>
                ))}
            </div>
            <div id="lightbox" className="lightbox">
                <span className="close" onClick={() => openLightbox(null)}>
                    &times;
                </span>
                <img className="lightbox-content" id="lightbox-img" alt="Enlarged" />
            </div>
        </section>
    );
};

export default Gallery;
