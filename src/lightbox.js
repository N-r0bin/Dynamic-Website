export function openLightbox(src) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    if (src) {
        lightbox.style.display = "flex";
        lightboxImg.src = src;
    } else {
        lightbox.style.display = "none";
    }
}
