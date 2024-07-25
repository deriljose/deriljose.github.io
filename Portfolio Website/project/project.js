function project(
    containerID,
    projectName,
    projectDesc,
    libListID,
    libraries,
    githubButtonClass,
    link,
    aniDelay
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

    const linkButton = document.createElement("button");
    linkButton.setAttribute("class", githubButtonClass);
    linkButton.setAttribute(
        "onclick",
        "window.open(" + JSON.stringify(link) + ")"
    );
    container.appendChild(linkButton);

    let githubLogo = document.createElement("img");
    githubLogo.setAttribute("src", "../social/social_logo/github_logo.png");
    linkButton.appendChild(githubLogo);

    container.style.animationDelay = aniDelay;
}

project(
    "project1",
    "Portfolio Website",
    "My Portfolio Website made with HTML ,CSS and Javascript",
    "libUsed-1",
    ["HTML", "CSS", "Javascript"],
    "githubButton-1",
    "https://github.com/deriljose/portfolio-website-1",
    "1.25s"
);

project(
    "project2",
    "Data Analysis with Python (FreeCodeCamp)",
    "All the projects I did for the Data Analysis with Python course",
    "libUsed-2",
    ["Python", "NumPy", "Pandas", "Seaborn", "Matplotlib"],
    "githubButton-2",
    "https://github.com/deriljose/data_analysis_projects",
    "2.5s"
);

const projectTiles = document.getElementsByClassName("project_tiles");

Array.from(projectTiles).forEach((projectTile) => {
    const tileRect = projectTile.getBoundingClientRect();
    let isHovering = false;

    projectTile.addEventListener("mouseenter", handleMouseEnter);
    projectTile.addEventListener("mousemove", handleMouseMove);
    projectTile.addEventListener("mouseleave", handleMouseLeave);

    function handleMouseEnter() {
        isHovering = true;
    }

    function handleMouseMove(event) {
        if (!isHovering) return;

        const tileCenterX = tileRect.left + tileRect.width / 2;
        const tileCenterY = tileRect.top + tileRect.height / 2;

        const cursorX = event.clientX;
        const cursorY = event.clientY;

        const dx = cursorX - tileCenterX;
        const dy = cursorY - tileCenterY;

        const tiltFactor = 5;

        const tiltX = -(dy / tileRect.height) * tiltFactor;
        const tiltY = (dx / tileRect.width) * tiltFactor;

        projectTile.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    }

    function handleMouseLeave() {
        isHovering = false;

        projectTile.style.transition = "transform 1s ease-out";
        projectTile.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
    }
});
