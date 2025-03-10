async function addPortriatNav() {
    try {
        const resp = await fetch("base/portrait_base.html");
        if (!resp.ok) {
            throw new Error(`HTTP error! Status: ${resp.status}`);
        }
        const html = await resp.text();
        document.body.insertAdjacentHTML("afterbegin", html);

        adjustNavigationVisibility();
    } catch (error) {
        console.error("Error fetching or inserting footer:", error);
    }
}

function adjustNavigationVisibility() {
    const navigation = document.getElementById("navigation");
    const portraitNav = document.getElementById("portraitNav");

    if (portraitNav) {
        if (window.matchMedia("(max-width: 768px)").matches) {
            navigation.style.display = "none";
            portraitNav.style.display = "flex";
        } else {
            portraitNav.style.display = "none";
            navigation.style.display = "flex";
        }
    } else {
        console.warn("portraitNav element not found.");
    }
}

function selectNav() {
    document.addEventListener("click", (event) => {
        const navButton = event.target.closest("#navButton");
        if (navButton) {
            const nav = document.querySelector(".nav");
            nav.classList.add("navOpen");
        }

        const navOverlay = event.target.closest(".navOverlay");
        if (navOverlay) {
            const nav = document.querySelector(".nav");
            nav.classList.remove("navOpen");
        }
    });
}

addPortriatNav();

window.addEventListener("resize", adjustNavigationVisibility);

document.addEventListener("DOMContentLoaded", selectNav);
