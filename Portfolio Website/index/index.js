const infoElement = document.querySelector(".info-card-front");

infoElement.addEventListener("mousemove", (e) => {
    const { left, top, width, height } = infoElement.getBoundingClientRect();

    const mouseX = e.clientX - left;
    const mouseY = e.clientY - top;

    const gradientX = (mouseX / width) * 100;
    const gradientY = (mouseY / height) * 100;

    infoElement.style.background = `radial-gradient(circle at ${gradientX}% ${gradientY}%, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2))`;
    infoElement.style.color = "#f8f8f8";
});

infoElement.addEventListener("mouseleave", () => {
    infoElement.style.background = "rgba(255, 255, 255, 0.2)";
});
