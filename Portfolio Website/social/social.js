const buttons = document.querySelectorAll(
    "#linkedin_btn, #github_btn, #whatsapp_btn, #gmail_btn"
);

buttons.forEach((button) => {
    button.addEventListener("mousemove", (e) => {
        const { left, top, width, height } = button.getBoundingClientRect();

        const mouseX = e.clientX - left;
        const mouseY = e.clientY - top;

        const gradientX = (mouseX / width) * 100;
        const gradientY = (mouseY / height) * 100;

        button.style.background = `radial-gradient(circle at ${gradientX}% ${gradientY}%, rgba(0, 80, 150, 0.8), rgba(0, 80, 150, 0.4))`;
        button.style.color = "#f8f8f8";
    });

    button.addEventListener("mouseleave", () => {
        button.style.background = "rgba(0, 80, 150, 0.4)";
    });
});
