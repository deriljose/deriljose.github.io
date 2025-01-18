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
    githubLogo.setAttribute("src", "project/github_logo.png");
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
    "1.75s"
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
if (window.innerWidth >= 768) {
    const projectTiles2 = document.querySelectorAll(".project_tiles");

    projectTiles2.forEach((tile, index) => {
        if (index > 1) {
            if (index % 2 == 0) {
                const previousTile2 = projectTiles2[index - 2];
                const previousTile = projectTiles2[index - 1];
                const heightDifference = Math.abs(
                    previousTile2.offsetHeight - previousTile.offsetHeight
                );

                if (previousTile.offsetHeight > previousTile2.offsetHeight) {
                    tile.style.marginTop = `${heightDifference * -1}px`;
                }
            } else {
                const previousTile2 = projectTiles2[index - 3];
                const previousTile = projectTiles2[index - 2];
                const heightDifference = Math.abs(
                    previousTile2.offsetHeight - previousTile.offsetHeight
                );

                if (previousTile.offsetHeight < previousTile2.offsetHeight) {
                    tile.style.marginTop = `${heightDifference * -1}px`;
                }
            }
        }
    });
}
