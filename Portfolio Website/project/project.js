function project(
    containerID,
    projectName,
    projectDesc,
    libListID,
    libUsed1,
    libUsed2,
    libUsed3,
    githubButtonClass,
    link,
    aniDelay
) {
    const container = document.createElement("div");
    container.setAttribute("class", containerID);
    document.getElementsByClassName("content")[0].appendChild(container);
    const name = document.createElement("h2");
    name.innerHTML = projectName;
    document.getElementsByClassName(containerID)[0].appendChild(name);
    const desc = document.createElement("p");
    desc.innerHTML = projectDesc;
    document.getElementsByClassName(containerID)[0].appendChild(desc);
    const lib = document.createElement("h3");
    lib.innerHTML = "Libraries Used :";
    document.getElementsByClassName(containerID)[0].appendChild(lib);
    const libList = document.createElement("ul");
    libList.setAttribute("class", libListID);
    document.getElementsByClassName(containerID)[0].appendChild(libList);
    const libItem1 = document.createElement("li");
    const libItem2 = document.createElement("li");
    const libItem3 = document.createElement("li");
    libItem1.innerHTML = libUsed1;
    libItem2.innerHTML = libUsed2;
    libItem3.innerHTML = libUsed3;
    document.getElementsByClassName(libListID)[0].appendChild(libItem1);
    document.getElementsByClassName(libListID)[0].appendChild(libItem2);
    document.getElementsByClassName(libListID)[0].appendChild(libItem3);
    const linkButton = document.createElement("button");
    linkButton.setAttribute("class", githubButtonClass);
    linkButton.setAttribute(
        "onclick",
        "window.open(" + JSON.stringify(link) + ")"
    );
    document.getElementsByClassName(containerID)[0].appendChild(linkButton);
    let githubLogo = document.createElement("img");
    githubLogo.setAttribute("src", "../social/social_logo/github_logo.png");
    document
        .getElementsByClassName(githubButtonClass)[0]
        .appendChild(githubLogo);
    document.getElementsByClassName(containerID)[0].style.animationDelay =
        aniDelay;
}
project(
    "project-1",
    "Portfolio Website",
    "My Portfolio Website made with HTML ,CSS and Javascript",
    "libUsed-1",
    "HTML",
    "CSS",
    "Javascript",
    "githubButton-1",
    "#",
    "1.25s"
);
project(
    "project-2",
    "Portfolio Website",
    "A Portfolio Website made with html ,css and javascript",
    "libUsed-2",
    "HTML",
    "CSS",
    "Javascript",
    "githubButton-2",
    "#",
    "2.5s"
);
