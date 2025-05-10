function project(
    containerID,
    projectName,
    projectDesc,
    libListID,
    libraries,
    githubButtonClass,
    link,
    aniDelay,
    websiteLink // New parameter for website link
) {
    const container = document.createElement("div");
    container.setAttribute("id", containerID);
    container.setAttribute("class", "project_tiles");
    document.getElementsByClassName("content")[0].appendChild(container);

    const name = document.createElement("h2");
    name.innerHTML = projectName;
    container.appendChild(name);

    const desc = document.createElement("p");
    desc.innerHTML = projectDesc;
    container.appendChild(desc);

    const lib = document.createElement("h3");
    lib.innerHTML = "Tools Utilized:";
    container.appendChild(lib);

    const libList = document.createElement("ul");
    libList.setAttribute("class", libListID);
    container.appendChild(libList);

    libraries.forEach((library) => {
        const libItem = document.createElement("li");
        libItem.innerHTML = library;
        libList.appendChild(libItem);
    });

    // Create a container for buttons
    const buttonContainer = document.createElement("div");
    buttonContainer.setAttribute("class", "button-container");
    container.appendChild(buttonContainer);

    const linkButton = document.createElement("button");
    linkButton.setAttribute("class", githubButtonClass + " githubButton");
    linkButton.setAttribute(
        "onclick",
        "window.open(" + JSON.stringify(link) + ")"
    );
    buttonContainer.appendChild(linkButton);

    let githubLogo = document.createElement("img");
    githubLogo.setAttribute("src", "project/github_logo.png");
    linkButton.appendChild(githubLogo);

    container.style.animationDelay = aniDelay;

    // Create a "Visit" button if websiteLink is not NULL
    if (websiteLink) {
        const visitButton = document.createElement("button");
        visitButton.setAttribute("class", "websiteButton");
        visitButton.setAttribute("onclick", `window.open('${websiteLink}')`);
        visitButton.innerHTML =
            '<img width="100" height="100" src="https://img.icons8.com/ios/100/internet--v1.png" alt="internet--v1"/>';
        buttonContainer.appendChild(visitButton);
    }
}

project(
    "project1",
    "Portfolio Website",
    "My Portfolio Website made with HTML ,CSS and Javascript.",
    "libUsed-1",
    ["HTML", "CSS", "Javascript"],
    "githubButton-1",
    "https://github.com/deriljose/portfolio-website-1",
    "1.25s",
    null
);

project(
    "project2",
    "Rajagiri Event Management System (REMS)",
    "A platform to manage events for students, teachers, and event organizers at Rajagiri.",
    "libUsed-2",
    ["HTML", "CSS", "NodeJS", "MySQL"],
    "githubButton-2",
    "https://github.com/deriljose/rems",
    "1.6s",
    "https://rems-9u27.onrender.com/"
);

project(
    "project3",
    "PC Builder",
    "A website that recommends PC parts based on user requirements using Gemini.",
    "libUsed-3",
    ["HTML", "CSS", "NodeJS", "MongoDB", "Gemini"],
    "githubButton-3",
    "https://github.com/deriljose/rems",
    "1.95s",
    "https://pc-builder-f9hw.onrender.com/"
);

project(
    "project4",
    "EcoSync",
    "A platform to connect industries & promote circular economy principles.",
    "libUsed-4",
    ["HTML", "CSS", "NodeJS", "MySQL"],
    "githubButton-4",
    "https://github.com/deriljose/rems",
    "2.3s",
    "https://ecosync-jgwp.onrender.com/"
);

project(
    "project5",
    "Data Analysis with Python (FreeCodeCamp)",
    "All the projects I did for the Data Analysis with Python course",
    "libUsed-5",
    ["Python", "NumPy", "Pandas", "Seaborn", "Matplotlib"],
    "githubButton-5",
    "https://github.com/deriljose/data_analysis_projects",
    "2.65s",
    null
);

const projectTiles = document.querySelectorAll(".project_tiles");

projectTiles.forEach((projectTile) => {
    projectTile.addEventListener("mousemove", (e) => {
        const { left, top, width, height } =
            projectTile.getBoundingClientRect();
        const mouseX = e.clientX - left;
        const mouseY = e.clientY - top;

        const centerX = width / 2;
        const centerY = height / 2;

        const tiltY = (mouseX - centerX) / centerX;

        let tiltX = (mouseY - centerY) / centerY;

        if (tiltX < 0) {
            tiltX = tiltX * -1;
        }

        projectTile.style.transform = `rotateX(${tiltX * 7}deg) rotateY(${
            tiltY * 7
        }deg)`;
    });

    projectTile.addEventListener("mouseleave", () => {
        projectTile.style.transform = "rotateX(0deg) rotateY(0deg)";
    });
});

function getDistanceToBottom(container) {
    const rect = container.getBoundingClientRect();
    const containerTop = rect.top + window.scrollY;
    const containerHeight = container.offsetHeight;
    const distanceToBottom = containerTop + containerHeight;
    return distanceToBottom;
}

function setDynamicMargin() {
    if (window.innerWidth >= 768) {
        const projectTiles2 = document.querySelectorAll(".project_tiles");

        projectTiles2.forEach((tile, index) => {
            if (index > 1 && index % 2 == 0) {
                let previousTileAbove = projectTiles2[index - 2];
                let previousTileOtherAbove = projectTiles2[index - 1];

                const bottomYAbove =
                    previousTileAbove.getBoundingClientRect().bottom +
                    window.scrollY;
                const bottomYOtherAbove =
                    previousTileOtherAbove.getBoundingClientRect().bottom +
                    window.scrollY;

                if (bottomYAbove > bottomYOtherAbove) {
                    tile.style.marginTop = "3vw";
                } else if (bottomYAbove < bottomYOtherAbove) {
                    let heightDiff = bottomYOtherAbove - bottomYAbove;
                    let gap = (-heightDiff / window.innerWidth) * 100;
                    tile.style.marginTop = `${gap + 3}vw`;
                }
            } else if (index > 1 && index % 2 != 0) {
                let previousTileAbove = projectTiles2[index - 2];
                let previousTileOtherAbove = projectTiles2[index - 3];

                const bottomYAbove =
                    previousTileAbove.getBoundingClientRect().bottom +
                    window.scrollY;
                const bottomYOtherAbove =
                    previousTileOtherAbove.getBoundingClientRect().bottom +
                    window.scrollY;

                if (bottomYAbove > bottomYOtherAbove) {
                    tile.style.marginTop = "3vw";
                } else if (bottomYAbove < bottomYOtherAbove) {
                    let heightDiff = bottomYOtherAbove - bottomYAbove;
                    let gap = (-heightDiff / window.innerWidth) * 100;
                    tile.style.marginTop = `${gap + 3}vw`;
                }
            }
        });
    }
}

if (window.innerWidth >= 768) {
    setDynamicMargin();
    window.addEventListener("resize", () => {
        if (window.innerWidth >= 768) {
            setDynamicMargin();
        }
    });
}
